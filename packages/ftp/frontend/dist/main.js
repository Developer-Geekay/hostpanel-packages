var c1 = Object.defineProperty;
var d1 = (e, t, n) => t in e ? c1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ti = (e, t, n) => d1(e, typeof t != "symbol" ? t + "" : t, n);
function f1(e, t) {
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
function p1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var rg = { exports: {} }, la = {}, og = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var as = Symbol.for("react.element"), m1 = Symbol.for("react.portal"), h1 = Symbol.for("react.fragment"), g1 = Symbol.for("react.strict_mode"), y1 = Symbol.for("react.profiler"), v1 = Symbol.for("react.provider"), x1 = Symbol.for("react.context"), S1 = Symbol.for("react.forward_ref"), w1 = Symbol.for("react.suspense"), b1 = Symbol.for("react.memo"), C1 = Symbol.for("react.lazy"), yp = Symbol.iterator;
function k1(e) {
  return e === null || typeof e != "object" ? null : (e = yp && e[yp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ig = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sg = Object.assign, lg = {};
function Go(e, t, n) {
  this.props = e, this.context = t, this.refs = lg, this.updater = n || ig;
}
Go.prototype.isReactComponent = {};
Go.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Go.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ag() {
}
ag.prototype = Go.prototype;
function kd(e, t, n) {
  this.props = e, this.context = t, this.refs = lg, this.updater = n || ig;
}
var Ed = kd.prototype = new ag();
Ed.constructor = kd;
sg(Ed, Go.prototype);
Ed.isPureReactComponent = !0;
var vp = Array.isArray, ug = Object.prototype.hasOwnProperty, Td = { current: null }, cg = { key: !0, ref: !0, __self: !0, __source: !0 };
function dg(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ug.call(t, r) && !cg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: as, type: e, key: i, ref: s, props: o, _owner: Td.current };
}
function E1(e, t) {
  return { $$typeof: as, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Rd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === as;
}
function T1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var xp = /\/+/g;
function Tu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? T1("" + e.key) : t.toString(36);
}
function nl(e, t, n, r, o) {
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
        case as:
        case m1:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Tu(s, 0) : r, vp(o) ? (n = "", e != null && (n = e.replace(xp, "$&/") + "/"), nl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Rd(o) && (o = E1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(xp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", vp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + Tu(i, l);
    s += nl(i, t, n, a, o);
  }
  else if (a = k1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + Tu(i, l++), s += nl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Ts(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return nl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function R1(e) {
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
var Nt = { current: null }, rl = { transition: null }, P1 = { ReactCurrentDispatcher: Nt, ReactCurrentBatchConfig: rl, ReactCurrentOwner: Td };
function fg() {
  throw Error("act(...) is not supported in production builds of React.");
}
ce.Children = { map: Ts, forEach: function(e, t, n) {
  Ts(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ts(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ts(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Rd(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ce.Component = Go;
ce.Fragment = h1;
ce.Profiler = y1;
ce.PureComponent = kd;
ce.StrictMode = g1;
ce.Suspense = w1;
ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P1;
ce.act = fg;
ce.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Td.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ug.call(t, a) && !cg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: as, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ce.createContext = function(e) {
  return e = { $$typeof: x1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: v1, _context: e }, e.Consumer = e;
};
ce.createElement = dg;
ce.createFactory = function(e) {
  var t = dg.bind(null, e);
  return t.type = e, t;
};
ce.createRef = function() {
  return { current: null };
};
ce.forwardRef = function(e) {
  return { $$typeof: S1, render: e };
};
ce.isValidElement = Rd;
ce.lazy = function(e) {
  return { $$typeof: C1, _payload: { _status: -1, _result: e }, _init: R1 };
};
ce.memo = function(e, t) {
  return { $$typeof: b1, type: e, compare: t === void 0 ? null : t };
};
ce.startTransition = function(e) {
  var t = rl.transition;
  rl.transition = {};
  try {
    e();
  } finally {
    rl.transition = t;
  }
};
ce.unstable_act = fg;
ce.useCallback = function(e, t) {
  return Nt.current.useCallback(e, t);
};
ce.useContext = function(e) {
  return Nt.current.useContext(e);
};
ce.useDebugValue = function() {
};
ce.useDeferredValue = function(e) {
  return Nt.current.useDeferredValue(e);
};
ce.useEffect = function(e, t) {
  return Nt.current.useEffect(e, t);
};
ce.useId = function() {
  return Nt.current.useId();
};
ce.useImperativeHandle = function(e, t, n) {
  return Nt.current.useImperativeHandle(e, t, n);
};
ce.useInsertionEffect = function(e, t) {
  return Nt.current.useInsertionEffect(e, t);
};
ce.useLayoutEffect = function(e, t) {
  return Nt.current.useLayoutEffect(e, t);
};
ce.useMemo = function(e, t) {
  return Nt.current.useMemo(e, t);
};
ce.useReducer = function(e, t, n) {
  return Nt.current.useReducer(e, t, n);
};
ce.useRef = function(e) {
  return Nt.current.useRef(e);
};
ce.useState = function(e) {
  return Nt.current.useState(e);
};
ce.useSyncExternalStore = function(e, t, n) {
  return Nt.current.useSyncExternalStore(e, t, n);
};
ce.useTransition = function() {
  return Nt.current.useTransition();
};
ce.version = "18.3.1";
og.exports = ce;
var x = og.exports;
const pg = /* @__PURE__ */ p1(x), wl = /* @__PURE__ */ f1({
  __proto__: null,
  default: pg
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
var I1 = x, M1 = Symbol.for("react.element"), $1 = Symbol.for("react.fragment"), O1 = Object.prototype.hasOwnProperty, A1 = I1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function mg(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) O1.call(t, r) && !N1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: M1, type: e, key: i, ref: s, props: o, _owner: A1.current };
}
la.Fragment = $1;
la.jsx = mg;
la.jsxs = mg;
rg.exports = la;
var R = rg.exports, hg = { exports: {} }, Jt = {}, gg = { exports: {} }, yg = {};
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
    var B = I.length;
    I.push(z);
    e: for (; 0 < B; ) {
      var V = B - 1 >>> 1, D = I[V];
      if (0 < o(D, z)) I[V] = z, I[B] = D, B = V;
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var z = I[0], B = I.pop();
    if (B !== z) {
      I[0] = B;
      e: for (var V = 0, D = I.length, K = D >>> 1; V < K; ) {
        var H = 2 * (V + 1) - 1, te = I[H], G = H + 1, oe = I[G];
        if (0 > o(te, B)) G < D && 0 > o(oe, te) ? (I[V] = oe, I[G] = B, V = G) : (I[V] = te, I[H] = B, V = H);
        else if (G < D && 0 > o(oe, B)) I[V] = oe, I[G] = B, V = G;
        else break e;
      }
    }
    return z;
  }
  function o(I, z) {
    var B = I.sortIndex - z.sortIndex;
    return B !== 0 ? B : I.id - z.id;
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
    if (w = !1, v(I), !y) if (n(a) !== null) y = !0, $(C);
    else {
      var z = n(u);
      z !== null && N(S, z.startTime - I);
    }
  }
  function C(I, z) {
    y = !1, w && (w = !1, g(E), E = -1), c = !0;
    var B = m;
    try {
      for (v(z), f = n(a); f !== null && (!(f.expirationTime > z) || I && !M()); ) {
        var V = f.callback;
        if (typeof V == "function") {
          f.callback = null, m = f.priorityLevel;
          var D = V(f.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? f.callback = D : f === n(a) && r(a), v(z);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var K = !0;
      else {
        var H = n(u);
        H !== null && N(S, H.startTime - z), K = !1;
      }
      return K;
    } finally {
      f = null, m = B, c = !1;
    }
  }
  var k = !1, T = null, E = -1, A = 5, L = -1;
  function M() {
    return !(e.unstable_now() - L < A);
  }
  function _() {
    if (T !== null) {
      var I = e.unstable_now();
      L = I;
      var z = !0;
      try {
        z = T(!0, I);
      } finally {
        z ? h() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var h;
  if (typeof p == "function") h = function() {
    p(_);
  };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(), P = O.port2;
    O.port1.onmessage = _, h = function() {
      P.postMessage(null);
    };
  } else h = function() {
    b(_, 0);
  };
  function $(I) {
    T = I, k || (k = !0, h());
  }
  function N(I, z) {
    E = b(function() {
      I(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(I) {
    I.callback = null;
  }, e.unstable_continueExecution = function() {
    y || c || (y = !0, $(C));
  }, e.unstable_forceFrameRate = function(I) {
    0 > I || 125 < I ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < I ? Math.floor(1e3 / I) : 5;
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
    var B = m;
    m = z;
    try {
      return I();
    } finally {
      m = B;
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
    var B = m;
    m = I;
    try {
      return z();
    } finally {
      m = B;
    }
  }, e.unstable_scheduleCallback = function(I, z, B) {
    var V = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? V + B : V) : B = V, I) {
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
    return D = B + D, I = { id: d++, callback: z, priorityLevel: I, startTime: B, expirationTime: D, sortIndex: -1 }, B > V ? (I.sortIndex = B, t(u, I), n(a) === null && I === n(u) && (w ? (g(E), E = -1) : w = !0, N(S, B - V))) : (I.sortIndex = D, t(a, I), y || c || (y = !0, $(C))), I;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(I) {
    var z = m;
    return function() {
      var B = m;
      m = z;
      try {
        return I.apply(this, arguments);
      } finally {
        m = B;
      }
    };
  };
})(yg);
gg.exports = yg;
var L1 = gg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _1 = x, qt = L1;
function U(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vg = /* @__PURE__ */ new Set(), zi = {};
function Jr(e, t) {
  No(e, t), No(e + "Capture", t);
}
function No(e, t) {
  for (zi[e] = t, e = 0; e < t.length; e++) vg.add(t[e]);
}
var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), cc = Object.prototype.hasOwnProperty, z1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Sp = {}, wp = {};
function F1(e) {
  return cc.call(wp, e) ? !0 : cc.call(Sp, e) ? !1 : z1.test(e) ? wp[e] = !0 : (Sp[e] = !0, !1);
}
function j1(e, t, n, r) {
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
function B1(e, t, n, r) {
  if (t === null || typeof t > "u" || j1(e, t, n, r)) return !0;
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
function Lt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  St[e] = new Lt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  St[t] = new Lt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  St[e] = new Lt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  St[e] = new Lt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  St[e] = new Lt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  St[e] = new Lt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  St[e] = new Lt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  St[e] = new Lt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  St[e] = new Lt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pd = /[\-:]([a-z])/g;
function Id(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pd,
    Id
  );
  St[t] = new Lt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pd, Id);
  St[t] = new Lt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pd, Id);
  St[t] = new Lt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  St[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Lt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  St[e] = new Lt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Md(e, t, n, r) {
  var o = St.hasOwnProperty(t) ? St[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (B1(t, n, o, r) && (n = null), r || o === null ? F1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var or = _1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Rs = Symbol.for("react.element"), co = Symbol.for("react.portal"), fo = Symbol.for("react.fragment"), $d = Symbol.for("react.strict_mode"), dc = Symbol.for("react.profiler"), xg = Symbol.for("react.provider"), Sg = Symbol.for("react.context"), Od = Symbol.for("react.forward_ref"), fc = Symbol.for("react.suspense"), pc = Symbol.for("react.suspense_list"), Ad = Symbol.for("react.memo"), sr = Symbol.for("react.lazy"), wg = Symbol.for("react.offscreen"), bp = Symbol.iterator;
function ni(e) {
  return e === null || typeof e != "object" ? null : (e = bp && e[bp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ke = Object.assign, Ru;
function hi(e) {
  if (Ru === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ru = t && t[1] || "";
  }
  return `
` + Ru + e;
}
var Pu = !1;
function Iu(e, t) {
  if (!e || Pu) return "";
  Pu = !0;
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
    Pu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? hi(e) : "";
}
function D1(e) {
  switch (e.tag) {
    case 5:
      return hi(e.type);
    case 16:
      return hi("Lazy");
    case 13:
      return hi("Suspense");
    case 19:
      return hi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Iu(e.type, !1), e;
    case 11:
      return e = Iu(e.type.render, !1), e;
    case 1:
      return e = Iu(e.type, !0), e;
    default:
      return "";
  }
}
function mc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case fo:
      return "Fragment";
    case co:
      return "Portal";
    case dc:
      return "Profiler";
    case $d:
      return "StrictMode";
    case fc:
      return "Suspense";
    case pc:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Sg:
      return (e.displayName || "Context") + ".Consumer";
    case xg:
      return (e._context.displayName || "Context") + ".Provider";
    case Od:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ad:
      return t = e.displayName || null, t !== null ? t : mc(e.type) || "Memo";
    case sr:
      t = e._payload, e = e._init;
      try {
        return mc(e(t));
      } catch {
      }
  }
  return null;
}
function U1(e) {
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
      return mc(t);
    case 8:
      return t === $d ? "StrictMode" : "Mode";
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
function wr(e) {
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
function bg(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function W1(e) {
  var t = bg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ps(e) {
  e._valueTracker || (e._valueTracker = W1(e));
}
function Cg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = bg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function bl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hc(e, t) {
  var n = t.checked;
  return Ke({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Cp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = wr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function kg(e, t) {
  t = t.checked, t != null && Md(e, "checked", t, !1);
}
function gc(e, t) {
  kg(e, t);
  var n = wr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yc(e, t.type, n) : t.hasOwnProperty("defaultValue") && yc(e, t.type, wr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function kp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function yc(e, t, n) {
  (t !== "number" || bl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gi = Array.isArray;
function ko(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function vc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91));
  return Ke({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ep(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(U(92));
      if (gi(n)) {
        if (1 < n.length) throw Error(U(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: wr(n) };
}
function Eg(e, t) {
  var n = wr(t.value), r = wr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Tp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Tg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function xc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Tg(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Is, Rg = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Is = Is || document.createElement("div"), Is.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Is.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Fi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var bi = {
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
}, V1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(bi).forEach(function(e) {
  V1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), bi[t] = bi[e];
  });
});
function Pg(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || bi.hasOwnProperty(e) && bi[e] ? ("" + t).trim() : t + "px";
}
function Ig(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Pg(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var H1 = Ke({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Sc(e, t) {
  if (t) {
    if (H1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(U(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(U(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(U(62));
  }
}
function wc(e, t) {
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
var bc = null;
function Nd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Cc = null, Eo = null, To = null;
function Rp(e) {
  if (e = ds(e)) {
    if (typeof Cc != "function") throw Error(U(280));
    var t = e.stateNode;
    t && (t = fa(t), Cc(e.stateNode, e.type, t));
  }
}
function Mg(e) {
  Eo ? To ? To.push(e) : To = [e] : Eo = e;
}
function $g() {
  if (Eo) {
    var e = Eo, t = To;
    if (To = Eo = null, Rp(e), t) for (e = 0; e < t.length; e++) Rp(t[e]);
  }
}
function Og(e, t) {
  return e(t);
}
function Ag() {
}
var Mu = !1;
function Ng(e, t, n) {
  if (Mu) return e(t, n);
  Mu = !0;
  try {
    return Og(e, t, n);
  } finally {
    Mu = !1, (Eo !== null || To !== null) && (Ag(), $g());
  }
}
function ji(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fa(n);
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
var kc = !1;
if (qn) try {
  var ri = {};
  Object.defineProperty(ri, "passive", { get: function() {
    kc = !0;
  } }), window.addEventListener("test", ri, ri), window.removeEventListener("test", ri, ri);
} catch {
  kc = !1;
}
function K1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Ci = !1, Cl = null, kl = !1, Ec = null, Y1 = { onError: function(e) {
  Ci = !0, Cl = e;
} };
function G1(e, t, n, r, o, i, s, l, a) {
  Ci = !1, Cl = null, K1.apply(Y1, arguments);
}
function Q1(e, t, n, r, o, i, s, l, a) {
  if (G1.apply(this, arguments), Ci) {
    if (Ci) {
      var u = Cl;
      Ci = !1, Cl = null;
    } else throw Error(U(198));
    kl || (kl = !0, Ec = u);
  }
}
function eo(e) {
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
function Lg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Pp(e) {
  if (eo(e) !== e) throw Error(U(188));
}
function X1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = eo(e), t === null) throw Error(U(188));
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
        if (i === n) return Pp(o), e;
        if (i === r) return Pp(o), t;
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
function _g(e) {
  return e = X1(e), e !== null ? zg(e) : null;
}
function zg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = zg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Fg = qt.unstable_scheduleCallback, Ip = qt.unstable_cancelCallback, q1 = qt.unstable_shouldYield, Z1 = qt.unstable_requestPaint, qe = qt.unstable_now, J1 = qt.unstable_getCurrentPriorityLevel, Ld = qt.unstable_ImmediatePriority, jg = qt.unstable_UserBlockingPriority, El = qt.unstable_NormalPriority, ex = qt.unstable_LowPriority, Bg = qt.unstable_IdlePriority, aa = null, Ln = null;
function tx(e) {
  if (Ln && typeof Ln.onCommitFiberRoot == "function") try {
    Ln.onCommitFiberRoot(aa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Cn = Math.clz32 ? Math.clz32 : ox, nx = Math.log, rx = Math.LN2;
function ox(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (nx(e) / rx | 0) | 0;
}
var Ms = 64, $s = 4194304;
function yi(e) {
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
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = yi(l) : (i &= s, i !== 0 && (r = yi(i)));
  } else s = n & ~o, s !== 0 ? r = yi(s) : i !== 0 && (r = yi(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Cn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function ix(e, t) {
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
function sx(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Cn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = ix(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Tc(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dg() {
  var e = Ms;
  return Ms <<= 1, !(Ms & 4194240) && (Ms = 64), e;
}
function $u(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function us(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Cn(t), e[t] = n;
}
function lx(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Cn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function _d(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Cn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Pe = 0;
function Ug(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Wg, zd, Vg, Hg, Kg, Rc = !1, Os = [], fr = null, pr = null, mr = null, Bi = /* @__PURE__ */ new Map(), Di = /* @__PURE__ */ new Map(), ar = [], ax = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Mp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      fr = null;
      break;
    case "dragenter":
    case "dragleave":
      pr = null;
      break;
    case "mouseover":
    case "mouseout":
      mr = null;
      break;
    case "pointerover":
    case "pointerout":
      Bi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Di.delete(t.pointerId);
  }
}
function oi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ds(t), t !== null && zd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ux(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return fr = oi(fr, e, t, n, r, o), !0;
    case "dragenter":
      return pr = oi(pr, e, t, n, r, o), !0;
    case "mouseover":
      return mr = oi(mr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Bi.set(i, oi(Bi.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Di.set(i, oi(Di.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Yg(e) {
  var t = zr(e.target);
  if (t !== null) {
    var n = eo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Lg(n), t !== null) {
          e.blockedOn = t, Kg(e.priority, function() {
            Vg(n);
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
function ol(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Pc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      bc = r, n.target.dispatchEvent(r), bc = null;
    } else return t = ds(n), t !== null && zd(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function $p(e, t, n) {
  ol(e) && n.delete(t);
}
function cx() {
  Rc = !1, fr !== null && ol(fr) && (fr = null), pr !== null && ol(pr) && (pr = null), mr !== null && ol(mr) && (mr = null), Bi.forEach($p), Di.forEach($p);
}
function ii(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Rc || (Rc = !0, qt.unstable_scheduleCallback(qt.unstable_NormalPriority, cx)));
}
function Ui(e) {
  function t(o) {
    return ii(o, e);
  }
  if (0 < Os.length) {
    ii(Os[0], e);
    for (var n = 1; n < Os.length; n++) {
      var r = Os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (fr !== null && ii(fr, e), pr !== null && ii(pr, e), mr !== null && ii(mr, e), Bi.forEach(t), Di.forEach(t), n = 0; n < ar.length; n++) r = ar[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ar.length && (n = ar[0], n.blockedOn === null); ) Yg(n), n.blockedOn === null && ar.shift();
}
var Ro = or.ReactCurrentBatchConfig, Rl = !0;
function dx(e, t, n, r) {
  var o = Pe, i = Ro.transition;
  Ro.transition = null;
  try {
    Pe = 1, Fd(e, t, n, r);
  } finally {
    Pe = o, Ro.transition = i;
  }
}
function fx(e, t, n, r) {
  var o = Pe, i = Ro.transition;
  Ro.transition = null;
  try {
    Pe = 4, Fd(e, t, n, r);
  } finally {
    Pe = o, Ro.transition = i;
  }
}
function Fd(e, t, n, r) {
  if (Rl) {
    var o = Pc(e, t, n, r);
    if (o === null) Du(e, t, r, Pl, n), Mp(e, r);
    else if (ux(o, e, t, n, r)) r.stopPropagation();
    else if (Mp(e, r), t & 4 && -1 < ax.indexOf(e)) {
      for (; o !== null; ) {
        var i = ds(o);
        if (i !== null && Wg(i), i = Pc(e, t, n, r), i === null && Du(e, t, r, Pl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Du(e, t, r, null, n);
  }
}
var Pl = null;
function Pc(e, t, n, r) {
  if (Pl = null, e = Nd(r), e = zr(e), e !== null) if (t = eo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Lg(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Pl = e, null;
}
function Gg(e) {
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
      switch (J1()) {
        case Ld:
          return 1;
        case jg:
          return 4;
        case El:
        case ex:
          return 16;
        case Bg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cr = null, jd = null, il = null;
function Qg() {
  if (il) return il;
  var e, t = jd, n = t.length, r, o = "value" in cr ? cr.value : cr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return il = o.slice(e, 1 < r ? 1 - r : void 0);
}
function sl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function As() {
  return !0;
}
function Op() {
  return !1;
}
function en(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? As : Op, this.isPropagationStopped = Op, this;
  }
  return Ke(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = As);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = As);
  }, persist: function() {
  }, isPersistent: As }), t;
}
var Qo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Bd = en(Qo), cs = Ke({}, Qo, { view: 0, detail: 0 }), px = en(cs), Ou, Au, si, ua = Ke({}, cs, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Dd, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? (Ou = e.screenX - si.screenX, Au = e.screenY - si.screenY) : Au = Ou = 0, si = e), Ou);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Au;
} }), Ap = en(ua), mx = Ke({}, ua, { dataTransfer: 0 }), hx = en(mx), gx = Ke({}, cs, { relatedTarget: 0 }), Nu = en(gx), yx = Ke({}, Qo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vx = en(yx), xx = Ke({}, Qo, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Sx = en(xx), wx = Ke({}, Qo, { data: 0 }), Np = en(wx), bx = {
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
}, Cx = {
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
}, kx = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Ex(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = kx[e]) ? !!t[e] : !1;
}
function Dd() {
  return Ex;
}
var Tx = Ke({}, cs, { key: function(e) {
  if (e.key) {
    var t = bx[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = sl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Cx[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Dd, charCode: function(e) {
  return e.type === "keypress" ? sl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? sl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rx = en(Tx), Px = Ke({}, ua, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lp = en(Px), Ix = Ke({}, cs, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Dd }), Mx = en(Ix), $x = Ke({}, Qo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ox = en($x), Ax = Ke({}, ua, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Nx = en(Ax), Lx = [9, 13, 27, 32], Ud = qn && "CompositionEvent" in window, ki = null;
qn && "documentMode" in document && (ki = document.documentMode);
var _x = qn && "TextEvent" in window && !ki, Xg = qn && (!Ud || ki && 8 < ki && 11 >= ki), _p = " ", zp = !1;
function qg(e, t) {
  switch (e) {
    case "keyup":
      return Lx.indexOf(t.keyCode) !== -1;
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
function Zg(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var po = !1;
function zx(e, t) {
  switch (e) {
    case "compositionend":
      return Zg(t);
    case "keypress":
      return t.which !== 32 ? null : (zp = !0, _p);
    case "textInput":
      return e = t.data, e === _p && zp ? null : e;
    default:
      return null;
  }
}
function Fx(e, t) {
  if (po) return e === "compositionend" || !Ud && qg(e, t) ? (e = Qg(), il = jd = cr = null, po = !1, e) : null;
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
      return Xg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jx = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Fp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jx[e.type] : t === "textarea";
}
function Jg(e, t, n, r) {
  Mg(r), t = Il(t, "onChange"), 0 < t.length && (n = new Bd("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ei = null, Wi = null;
function Bx(e) {
  cy(e, 0);
}
function ca(e) {
  var t = go(e);
  if (Cg(t)) return e;
}
function Dx(e, t) {
  if (e === "change") return t;
}
var ey = !1;
if (qn) {
  var Lu;
  if (qn) {
    var _u = "oninput" in document;
    if (!_u) {
      var jp = document.createElement("div");
      jp.setAttribute("oninput", "return;"), _u = typeof jp.oninput == "function";
    }
    Lu = _u;
  } else Lu = !1;
  ey = Lu && (!document.documentMode || 9 < document.documentMode);
}
function Bp() {
  Ei && (Ei.detachEvent("onpropertychange", ty), Wi = Ei = null);
}
function ty(e) {
  if (e.propertyName === "value" && ca(Wi)) {
    var t = [];
    Jg(t, Wi, e, Nd(e)), Ng(Bx, t);
  }
}
function Ux(e, t, n) {
  e === "focusin" ? (Bp(), Ei = t, Wi = n, Ei.attachEvent("onpropertychange", ty)) : e === "focusout" && Bp();
}
function Wx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return ca(Wi);
}
function Vx(e, t) {
  if (e === "click") return ca(t);
}
function Hx(e, t) {
  if (e === "input" || e === "change") return ca(t);
}
function Kx(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var En = typeof Object.is == "function" ? Object.is : Kx;
function Vi(e, t) {
  if (En(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!cc.call(t, o) || !En(e[o], t[o])) return !1;
  }
  return !0;
}
function Dp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Up(e, t) {
  var n = Dp(e);
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
    n = Dp(n);
  }
}
function ny(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ny(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ry() {
  for (var e = window, t = bl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = bl(e.document);
  }
  return t;
}
function Wd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Yx(e) {
  var t = ry(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ny(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Up(n, i);
        var s = Up(
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
var Gx = qn && "documentMode" in document && 11 >= document.documentMode, mo = null, Ic = null, Ti = null, Mc = !1;
function Wp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mc || mo == null || mo !== bl(r) || (r = mo, "selectionStart" in r && Wd(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Ti && Vi(Ti, r) || (Ti = r, r = Il(Ic, "onSelect"), 0 < r.length && (t = new Bd("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mo)));
}
function Ns(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ho = { animationend: Ns("Animation", "AnimationEnd"), animationiteration: Ns("Animation", "AnimationIteration"), animationstart: Ns("Animation", "AnimationStart"), transitionend: Ns("Transition", "TransitionEnd") }, zu = {}, oy = {};
qn && (oy = document.createElement("div").style, "AnimationEvent" in window || (delete ho.animationend.animation, delete ho.animationiteration.animation, delete ho.animationstart.animation), "TransitionEvent" in window || delete ho.transitionend.transition);
function da(e) {
  if (zu[e]) return zu[e];
  if (!ho[e]) return e;
  var t = ho[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in oy) return zu[e] = t[n];
  return e;
}
var iy = da("animationend"), sy = da("animationiteration"), ly = da("animationstart"), ay = da("transitionend"), uy = /* @__PURE__ */ new Map(), Vp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Er(e, t) {
  uy.set(e, t), Jr(t, [e]);
}
for (var Fu = 0; Fu < Vp.length; Fu++) {
  var ju = Vp[Fu], Qx = ju.toLowerCase(), Xx = ju[0].toUpperCase() + ju.slice(1);
  Er(Qx, "on" + Xx);
}
Er(iy, "onAnimationEnd");
Er(sy, "onAnimationIteration");
Er(ly, "onAnimationStart");
Er("dblclick", "onDoubleClick");
Er("focusin", "onFocus");
Er("focusout", "onBlur");
Er(ay, "onTransitionEnd");
No("onMouseEnter", ["mouseout", "mouseover"]);
No("onMouseLeave", ["mouseout", "mouseover"]);
No("onPointerEnter", ["pointerout", "pointerover"]);
No("onPointerLeave", ["pointerout", "pointerover"]);
Jr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qx = new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));
function Hp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Q1(r, t, void 0, e), e.currentTarget = null;
}
function cy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Hp(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Hp(o, l, u), i = a;
      }
    }
  }
  if (kl) throw e = Ec, kl = !1, Ec = null, e;
}
function ze(e, t) {
  var n = t[Lc];
  n === void 0 && (n = t[Lc] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dy(t, e, 2, !1), n.add(r));
}
function Bu(e, t, n) {
  var r = 0;
  t && (r |= 4), dy(n, e, r, t);
}
var Ls = "_reactListening" + Math.random().toString(36).slice(2);
function Hi(e) {
  if (!e[Ls]) {
    e[Ls] = !0, vg.forEach(function(n) {
      n !== "selectionchange" && (qx.has(n) || Bu(n, !1, e), Bu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ls] || (t[Ls] = !0, Bu("selectionchange", !1, t));
  }
}
function dy(e, t, n, r) {
  switch (Gg(t)) {
    case 1:
      var o = dx;
      break;
    case 4:
      o = fx;
      break;
    default:
      o = Fd;
  }
  n = o.bind(null, t, n, e), o = void 0, !kc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Du(e, t, n, r, o) {
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
        if (s = zr(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ng(function() {
    var u = i, d = Nd(n), f = [];
    e: {
      var m = uy.get(e);
      if (m !== void 0) {
        var c = Bd, y = e;
        switch (e) {
          case "keypress":
            if (sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            c = Rx;
            break;
          case "focusin":
            y = "focus", c = Nu;
            break;
          case "focusout":
            y = "blur", c = Nu;
            break;
          case "beforeblur":
          case "afterblur":
            c = Nu;
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
            c = Ap;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            c = hx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            c = Mx;
            break;
          case iy:
          case sy:
          case ly:
            c = vx;
            break;
          case ay:
            c = Ox;
            break;
          case "scroll":
            c = px;
            break;
          case "wheel":
            c = Nx;
            break;
          case "copy":
          case "cut":
          case "paste":
            c = Sx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            c = Lp;
        }
        var w = (t & 4) !== 0, b = !w && e === "scroll", g = w ? m !== null ? m + "Capture" : null : m;
        w = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (v.tag === 5 && S !== null && (v = S, g !== null && (S = ji(p, g), S != null && w.push(Ki(p, S, v)))), b) break;
          p = p.return;
        }
        0 < w.length && (m = new c(m, y, null, n, d), f.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", m && n !== bc && (y = n.relatedTarget || n.fromElement) && (zr(y) || y[Zn])) break e;
        if ((c || m) && (m = d.window === d ? d : (m = d.ownerDocument) ? m.defaultView || m.parentWindow : window, c ? (y = n.relatedTarget || n.toElement, c = u, y = y ? zr(y) : null, y !== null && (b = eo(y), y !== b || y.tag !== 5 && y.tag !== 6) && (y = null)) : (c = null, y = u), c !== y)) {
          if (w = Ap, S = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = Lp, S = "onPointerLeave", g = "onPointerEnter", p = "pointer"), b = c == null ? m : go(c), v = y == null ? m : go(y), m = new w(S, p + "leave", c, n, d), m.target = b, m.relatedTarget = v, S = null, zr(d) === u && (w = new w(g, p + "enter", y, n, d), w.target = v, w.relatedTarget = b, S = w), b = S, c && y) t: {
            for (w = c, g = y, p = 0, v = w; v; v = ro(v)) p++;
            for (v = 0, S = g; S; S = ro(S)) v++;
            for (; 0 < p - v; ) w = ro(w), p--;
            for (; 0 < v - p; ) g = ro(g), v--;
            for (; p--; ) {
              if (w === g || g !== null && w === g.alternate) break t;
              w = ro(w), g = ro(g);
            }
            w = null;
          }
          else w = null;
          c !== null && Kp(f, m, c, w, !1), y !== null && b !== null && Kp(f, b, y, w, !0);
        }
      }
      e: {
        if (m = u ? go(u) : window, c = m.nodeName && m.nodeName.toLowerCase(), c === "select" || c === "input" && m.type === "file") var C = Dx;
        else if (Fp(m)) if (ey) C = Hx;
        else {
          C = Wx;
          var k = Ux;
        }
        else (c = m.nodeName) && c.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = Vx);
        if (C && (C = C(e, u))) {
          Jg(f, C, n, d);
          break e;
        }
        k && k(e, m, u), e === "focusout" && (k = m._wrapperState) && k.controlled && m.type === "number" && yc(m, "number", m.value);
      }
      switch (k = u ? go(u) : window, e) {
        case "focusin":
          (Fp(k) || k.contentEditable === "true") && (mo = k, Ic = u, Ti = null);
          break;
        case "focusout":
          Ti = Ic = mo = null;
          break;
        case "mousedown":
          Mc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Mc = !1, Wp(f, n, d);
          break;
        case "selectionchange":
          if (Gx) break;
        case "keydown":
        case "keyup":
          Wp(f, n, d);
      }
      var T;
      if (Ud) e: {
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
      else po ? qg(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Xg && n.locale !== "ko" && (po || E !== "onCompositionStart" ? E === "onCompositionEnd" && po && (T = Qg()) : (cr = d, jd = "value" in cr ? cr.value : cr.textContent, po = !0)), k = Il(u, E), 0 < k.length && (E = new Np(E, e, null, n, d), f.push({ event: E, listeners: k }), T ? E.data = T : (T = Zg(n), T !== null && (E.data = T)))), (T = _x ? zx(e, n) : Fx(e, n)) && (u = Il(u, "onBeforeInput"), 0 < u.length && (d = new Np("onBeforeInput", "beforeinput", null, n, d), f.push({ event: d, listeners: u }), d.data = T));
    }
    cy(f, t);
  });
}
function Ki(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Il(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ji(e, n), i != null && r.unshift(Ki(e, i, o)), i = ji(e, t), i != null && r.push(Ki(e, i, o))), e = e.return;
  }
  return r;
}
function ro(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Kp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = ji(n, i), a != null && s.unshift(Ki(n, a, l))) : o || (a = ji(n, i), a != null && s.push(Ki(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Zx = /\r\n?/g, Jx = /\u0000|\uFFFD/g;
function Yp(e) {
  return (typeof e == "string" ? e : "" + e).replace(Zx, `
`).replace(Jx, "");
}
function _s(e, t, n) {
  if (t = Yp(t), Yp(e) !== t && n) throw Error(U(425));
}
function Ml() {
}
var $c = null, Oc = null;
function Ac(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Nc = typeof setTimeout == "function" ? setTimeout : void 0, eS = typeof clearTimeout == "function" ? clearTimeout : void 0, Gp = typeof Promise == "function" ? Promise : void 0, tS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gp < "u" ? function(e) {
  return Gp.resolve(null).then(e).catch(nS);
} : Nc;
function nS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Uu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Ui(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ui(t);
}
function hr(e) {
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
function Qp(e) {
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
var Xo = Math.random().toString(36).slice(2), Nn = "__reactFiber$" + Xo, Yi = "__reactProps$" + Xo, Zn = "__reactContainer$" + Xo, Lc = "__reactEvents$" + Xo, rS = "__reactListeners$" + Xo, oS = "__reactHandles$" + Xo;
function zr(e) {
  var t = e[Nn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Zn] || n[Nn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Qp(e); e !== null; ) {
        if (n = e[Nn]) return n;
        e = Qp(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ds(e) {
  return e = e[Nn] || e[Zn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function go(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(U(33));
}
function fa(e) {
  return e[Yi] || null;
}
var _c = [], yo = -1;
function Tr(e) {
  return { current: e };
}
function Fe(e) {
  0 > yo || (e.current = _c[yo], _c[yo] = null, yo--);
}
function Ne(e, t) {
  yo++, _c[yo] = e.current, e.current = t;
}
var br = {}, Rt = Tr(br), jt = Tr(!1), Vr = br;
function Lo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return br;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Bt(e) {
  return e = e.childContextTypes, e != null;
}
function $l() {
  Fe(jt), Fe(Rt);
}
function Xp(e, t, n) {
  if (Rt.current !== br) throw Error(U(168));
  Ne(Rt, t), Ne(jt, n);
}
function fy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(U(108, U1(e) || "Unknown", o));
  return Ke({}, n, r);
}
function Ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || br, Vr = Rt.current, Ne(Rt, e), Ne(jt, jt.current), !0;
}
function qp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(U(169));
  n ? (e = fy(e, t, Vr), r.__reactInternalMemoizedMergedChildContext = e, Fe(jt), Fe(Rt), Ne(Rt, e)) : Fe(jt), Ne(jt, n);
}
var Vn = null, pa = !1, Wu = !1;
function py(e) {
  Vn === null ? Vn = [e] : Vn.push(e);
}
function iS(e) {
  pa = !0, py(e);
}
function Rr() {
  if (!Wu && Vn !== null) {
    Wu = !0;
    var e = 0, t = Pe;
    try {
      var n = Vn;
      for (Pe = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Vn = null, pa = !1;
    } catch (o) {
      throw Vn !== null && (Vn = Vn.slice(e + 1)), Fg(Ld, Rr), o;
    } finally {
      Pe = t, Wu = !1;
    }
  }
  return null;
}
var vo = [], xo = 0, Al = null, Nl = 0, rn = [], on = 0, Hr = null, Kn = 1, Yn = "";
function Nr(e, t) {
  vo[xo++] = Nl, vo[xo++] = Al, Al = e, Nl = t;
}
function my(e, t, n) {
  rn[on++] = Kn, rn[on++] = Yn, rn[on++] = Hr, Hr = e;
  var r = Kn;
  e = Yn;
  var o = 32 - Cn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Cn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Kn = 1 << 32 - Cn(t) + o | n << o | r, Yn = i + e;
  } else Kn = 1 << i | n << o | r, Yn = e;
}
function Vd(e) {
  e.return !== null && (Nr(e, 1), my(e, 1, 0));
}
function Hd(e) {
  for (; e === Al; ) Al = vo[--xo], vo[xo] = null, Nl = vo[--xo], vo[xo] = null;
  for (; e === Hr; ) Hr = rn[--on], rn[on] = null, Yn = rn[--on], rn[on] = null, Kn = rn[--on], rn[on] = null;
}
var Qt = null, Gt = null, De = !1, bn = null;
function hy(e, t) {
  var n = an(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Zp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Qt = e, Gt = hr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Qt = e, Gt = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Hr !== null ? { id: Kn, overflow: Yn } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = an(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Qt = e, Gt = null, !0) : !1;
    default:
      return !1;
  }
}
function zc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fc(e) {
  if (De) {
    var t = Gt;
    if (t) {
      var n = t;
      if (!Zp(e, t)) {
        if (zc(e)) throw Error(U(418));
        t = hr(n.nextSibling);
        var r = Qt;
        t && Zp(e, t) ? hy(r, n) : (e.flags = e.flags & -4097 | 2, De = !1, Qt = e);
      }
    } else {
      if (zc(e)) throw Error(U(418));
      e.flags = e.flags & -4097 | 2, De = !1, Qt = e;
    }
  }
}
function Jp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Qt = e;
}
function zs(e) {
  if (e !== Qt) return !1;
  if (!De) return Jp(e), De = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ac(e.type, e.memoizedProps)), t && (t = Gt)) {
    if (zc(e)) throw gy(), Error(U(418));
    for (; t; ) hy(e, t), t = hr(t.nextSibling);
  }
  if (Jp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(U(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Gt = hr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Gt = null;
    }
  } else Gt = Qt ? hr(e.stateNode.nextSibling) : null;
  return !0;
}
function gy() {
  for (var e = Gt; e; ) e = hr(e.nextSibling);
}
function _o() {
  Gt = Qt = null, De = !1;
}
function Kd(e) {
  bn === null ? bn = [e] : bn.push(e);
}
var sS = or.ReactCurrentBatchConfig;
function li(e, t, n) {
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
function Fs(e, t) {
  throw e = Object.prototype.toString.call(t), Error(U(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function em(e) {
  var t = e._init;
  return t(e._payload);
}
function yy(e) {
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
    return g = xr(g, p), g.index = 0, g.sibling = null, g;
  }
  function i(g, p, v) {
    return g.index = v, e ? (v = g.alternate, v !== null ? (v = v.index, v < p ? (g.flags |= 2, p) : v) : (g.flags |= 2, p)) : (g.flags |= 1048576, p);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, p, v, S) {
    return p === null || p.tag !== 6 ? (p = Xu(v, g.mode, S), p.return = g, p) : (p = o(p, v), p.return = g, p);
  }
  function a(g, p, v, S) {
    var C = v.type;
    return C === fo ? d(g, p, v.props.children, S, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sr && em(C) === p.type) ? (S = o(p, v.props), S.ref = li(g, p, v), S.return = g, S) : (S = pl(v.type, v.key, v.props, null, g.mode, S), S.ref = li(g, p, v), S.return = g, S);
  }
  function u(g, p, v, S) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = qu(v, g.mode, S), p.return = g, p) : (p = o(p, v.children || []), p.return = g, p);
  }
  function d(g, p, v, S, C) {
    return p === null || p.tag !== 7 ? (p = Ur(v, g.mode, S, C), p.return = g, p) : (p = o(p, v), p.return = g, p);
  }
  function f(g, p, v) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Xu("" + p, g.mode, v), p.return = g, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Rs:
          return v = pl(p.type, p.key, p.props, null, g.mode, v), v.ref = li(g, null, p), v.return = g, v;
        case co:
          return p = qu(p, g.mode, v), p.return = g, p;
        case sr:
          var S = p._init;
          return f(g, S(p._payload), v);
      }
      if (gi(p) || ni(p)) return p = Ur(p, g.mode, v, null), p.return = g, p;
      Fs(g, p);
    }
    return null;
  }
  function m(g, p, v, S) {
    var C = p !== null ? p.key : null;
    if (typeof v == "string" && v !== "" || typeof v == "number") return C !== null ? null : l(g, p, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Rs:
          return v.key === C ? a(g, p, v, S) : null;
        case co:
          return v.key === C ? u(g, p, v, S) : null;
        case sr:
          return C = v._init, m(
            g,
            p,
            C(v._payload),
            S
          );
      }
      if (gi(v) || ni(v)) return C !== null ? null : d(g, p, v, S, null);
      Fs(g, v);
    }
    return null;
  }
  function c(g, p, v, S, C) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(v) || null, l(p, g, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Rs:
          return g = g.get(S.key === null ? v : S.key) || null, a(p, g, S, C);
        case co:
          return g = g.get(S.key === null ? v : S.key) || null, u(p, g, S, C);
        case sr:
          var k = S._init;
          return c(g, p, v, k(S._payload), C);
      }
      if (gi(S) || ni(S)) return g = g.get(v) || null, d(p, g, S, C, null);
      Fs(p, S);
    }
    return null;
  }
  function y(g, p, v, S) {
    for (var C = null, k = null, T = p, E = p = 0, A = null; T !== null && E < v.length; E++) {
      T.index > E ? (A = T, T = null) : A = T.sibling;
      var L = m(g, T, v[E], S);
      if (L === null) {
        T === null && (T = A);
        break;
      }
      e && T && L.alternate === null && t(g, T), p = i(L, p, E), k === null ? C = L : k.sibling = L, k = L, T = A;
    }
    if (E === v.length) return n(g, T), De && Nr(g, E), C;
    if (T === null) {
      for (; E < v.length; E++) T = f(g, v[E], S), T !== null && (p = i(T, p, E), k === null ? C = T : k.sibling = T, k = T);
      return De && Nr(g, E), C;
    }
    for (T = r(g, T); E < v.length; E++) A = c(T, g, E, v[E], S), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? E : A.key), p = i(A, p, E), k === null ? C = A : k.sibling = A, k = A);
    return e && T.forEach(function(M) {
      return t(g, M);
    }), De && Nr(g, E), C;
  }
  function w(g, p, v, S) {
    var C = ni(v);
    if (typeof C != "function") throw Error(U(150));
    if (v = C.call(v), v == null) throw Error(U(151));
    for (var k = C = null, T = p, E = p = 0, A = null, L = v.next(); T !== null && !L.done; E++, L = v.next()) {
      T.index > E ? (A = T, T = null) : A = T.sibling;
      var M = m(g, T, L.value, S);
      if (M === null) {
        T === null && (T = A);
        break;
      }
      e && T && M.alternate === null && t(g, T), p = i(M, p, E), k === null ? C = M : k.sibling = M, k = M, T = A;
    }
    if (L.done) return n(
      g,
      T
    ), De && Nr(g, E), C;
    if (T === null) {
      for (; !L.done; E++, L = v.next()) L = f(g, L.value, S), L !== null && (p = i(L, p, E), k === null ? C = L : k.sibling = L, k = L);
      return De && Nr(g, E), C;
    }
    for (T = r(g, T); !L.done; E++, L = v.next()) L = c(T, g, E, L.value, S), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? E : L.key), p = i(L, p, E), k === null ? C = L : k.sibling = L, k = L);
    return e && T.forEach(function(_) {
      return t(g, _);
    }), De && Nr(g, E), C;
  }
  function b(g, p, v, S) {
    if (typeof v == "object" && v !== null && v.type === fo && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Rs:
          e: {
            for (var C = v.key, k = p; k !== null; ) {
              if (k.key === C) {
                if (C = v.type, C === fo) {
                  if (k.tag === 7) {
                    n(g, k.sibling), p = o(k, v.props.children), p.return = g, g = p;
                    break e;
                  }
                } else if (k.elementType === C || typeof C == "object" && C !== null && C.$$typeof === sr && em(C) === k.type) {
                  n(g, k.sibling), p = o(k, v.props), p.ref = li(g, k, v), p.return = g, g = p;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            v.type === fo ? (p = Ur(v.props.children, g.mode, S, v.key), p.return = g, g = p) : (S = pl(v.type, v.key, v.props, null, g.mode, S), S.ref = li(g, p, v), S.return = g, g = S);
          }
          return s(g);
        case co:
          e: {
            for (k = v.key; p !== null; ) {
              if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                n(g, p.sibling), p = o(p, v.children || []), p.return = g, g = p;
                break e;
              } else {
                n(g, p);
                break;
              }
              else t(g, p);
              p = p.sibling;
            }
            p = qu(v, g.mode, S), p.return = g, g = p;
          }
          return s(g);
        case sr:
          return k = v._init, b(g, p, k(v._payload), S);
      }
      if (gi(v)) return y(g, p, v, S);
      if (ni(v)) return w(g, p, v, S);
      Fs(g, v);
    }
    return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(g, p.sibling), p = o(p, v), p.return = g, g = p) : (n(g, p), p = Xu(v, g.mode, S), p.return = g, g = p), s(g)) : n(g, p);
  }
  return b;
}
var zo = yy(!0), vy = yy(!1), Ll = Tr(null), _l = null, So = null, Yd = null;
function Gd() {
  Yd = So = _l = null;
}
function Qd(e) {
  var t = Ll.current;
  Fe(Ll), e._currentValue = t;
}
function jc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Po(e, t) {
  _l = e, Yd = So = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ft = !0), e.firstContext = null);
}
function dn(e) {
  var t = e._currentValue;
  if (Yd !== e) if (e = { context: e, memoizedValue: t, next: null }, So === null) {
    if (_l === null) throw Error(U(308));
    So = e, _l.dependencies = { lanes: 0, firstContext: e };
  } else So = So.next = e;
  return t;
}
var Fr = null;
function Xd(e) {
  Fr === null ? Fr = [e] : Fr.push(e);
}
function xy(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Xd(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Jn(e, r);
}
function Jn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var lr = !1;
function qd(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sy(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Xn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function gr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ve & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Jn(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Xd(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Jn(e, n);
}
function ll(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _d(e, n);
  }
}
function tm(e, t) {
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
function zl(e, t, n, r) {
  var o = e.updateQueue;
  lr = !1;
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
              f = Ke({}, f, m);
              break e;
            case 2:
              lr = !0;
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
    Yr |= s, e.lanes = s, e.memoizedState = f;
  }
}
function nm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(U(191, o));
      o.call(r);
    }
  }
}
var fs = {}, _n = Tr(fs), Gi = Tr(fs), Qi = Tr(fs);
function jr(e) {
  if (e === fs) throw Error(U(174));
  return e;
}
function Zd(e, t) {
  switch (Ne(Qi, t), Ne(Gi, e), Ne(_n, fs), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : xc(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = xc(t, e);
  }
  Fe(_n), Ne(_n, t);
}
function Fo() {
  Fe(_n), Fe(Gi), Fe(Qi);
}
function wy(e) {
  jr(Qi.current);
  var t = jr(_n.current), n = xc(t, e.type);
  t !== n && (Ne(Gi, e), Ne(_n, n));
}
function Jd(e) {
  Gi.current === e && (Fe(_n), Fe(Gi));
}
var Ve = Tr(0);
function Fl(e) {
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
var Vu = [];
function ef() {
  for (var e = 0; e < Vu.length; e++) Vu[e]._workInProgressVersionPrimary = null;
  Vu.length = 0;
}
var al = or.ReactCurrentDispatcher, Hu = or.ReactCurrentBatchConfig, Kr = 0, He = null, lt = null, ft = null, jl = !1, Ri = !1, Xi = 0, lS = 0;
function Ct() {
  throw Error(U(321));
}
function tf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!En(e[n], t[n])) return !1;
  return !0;
}
function nf(e, t, n, r, o, i) {
  if (Kr = i, He = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, al.current = e === null || e.memoizedState === null ? dS : fS, e = n(r, o), Ri) {
    i = 0;
    do {
      if (Ri = !1, Xi = 0, 25 <= i) throw Error(U(301));
      i += 1, ft = lt = null, t.updateQueue = null, al.current = pS, e = n(r, o);
    } while (Ri);
  }
  if (al.current = Bl, t = lt !== null && lt.next !== null, Kr = 0, ft = lt = He = null, jl = !1, t) throw Error(U(300));
  return e;
}
function rf() {
  var e = Xi !== 0;
  return Xi = 0, e;
}
function $n() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ft === null ? He.memoizedState = ft = e : ft = ft.next = e, ft;
}
function fn() {
  if (lt === null) {
    var e = He.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = lt.next;
  var t = ft === null ? He.memoizedState : ft.next;
  if (t !== null) ft = t, lt = e;
  else {
    if (e === null) throw Error(U(310));
    lt = e, e = { memoizedState: lt.memoizedState, baseState: lt.baseState, baseQueue: lt.baseQueue, queue: lt.queue, next: null }, ft === null ? He.memoizedState = ft = e : ft = ft.next = e;
  }
  return ft;
}
function qi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ku(e) {
  var t = fn(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = lt, o = r.baseQueue, i = n.pending;
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
      if ((Kr & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = f, s = r) : a = a.next = f, He.lanes |= d, Yr |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, En(r, t.memoizedState) || (Ft = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, He.lanes |= i, Yr |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yu(e) {
  var t = fn(), n = t.queue;
  if (n === null) throw Error(U(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    En(i, t.memoizedState) || (Ft = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function by() {
}
function Cy(e, t) {
  var n = He, r = fn(), o = t(), i = !En(r.memoizedState, o);
  if (i && (r.memoizedState = o, Ft = !0), r = r.queue, of(Ty.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ft !== null && ft.memoizedState.tag & 1) {
    if (n.flags |= 2048, Zi(9, Ey.bind(null, n, r, o, t), void 0, null), pt === null) throw Error(U(349));
    Kr & 30 || ky(n, t, o);
  }
  return o;
}
function ky(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = He.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, He.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ey(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ry(t) && Py(e);
}
function Ty(e, t, n) {
  return n(function() {
    Ry(t) && Py(e);
  });
}
function Ry(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !En(e, n);
  } catch {
    return !0;
  }
}
function Py(e) {
  var t = Jn(e, 1);
  t !== null && kn(t, e, 1, -1);
}
function rm(e) {
  var t = $n();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: e }, t.queue = e, e = e.dispatch = cS.bind(null, He, e), [t.memoizedState, e];
}
function Zi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = He.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, He.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Iy() {
  return fn().memoizedState;
}
function ul(e, t, n, r) {
  var o = $n();
  He.flags |= e, o.memoizedState = Zi(1 | t, n, void 0, r === void 0 ? null : r);
}
function ma(e, t, n, r) {
  var o = fn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (lt !== null) {
    var s = lt.memoizedState;
    if (i = s.destroy, r !== null && tf(r, s.deps)) {
      o.memoizedState = Zi(t, n, i, r);
      return;
    }
  }
  He.flags |= e, o.memoizedState = Zi(1 | t, n, i, r);
}
function om(e, t) {
  return ul(8390656, 8, e, t);
}
function of(e, t) {
  return ma(2048, 8, e, t);
}
function My(e, t) {
  return ma(4, 2, e, t);
}
function $y(e, t) {
  return ma(4, 4, e, t);
}
function Oy(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ay(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ma(4, 4, Oy.bind(null, t, e), n);
}
function sf() {
}
function Ny(e, t) {
  var n = fn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ly(e, t) {
  var n = fn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _y(e, t, n) {
  return Kr & 21 ? (En(n, t) || (n = Dg(), He.lanes |= n, Yr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ft = !0), e.memoizedState = n);
}
function aS(e, t) {
  var n = Pe;
  Pe = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Hu.transition;
  Hu.transition = {};
  try {
    e(!1), t();
  } finally {
    Pe = n, Hu.transition = r;
  }
}
function zy() {
  return fn().memoizedState;
}
function uS(e, t, n) {
  var r = vr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Fy(e)) jy(t, n);
  else if (n = xy(e, t, n, r), n !== null) {
    var o = At();
    kn(n, e, r, o), By(n, t, r);
  }
}
function cS(e, t, n) {
  var r = vr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Fy(e)) jy(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, En(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Xd(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = xy(e, t, o, r), n !== null && (o = At(), kn(n, e, r, o), By(n, t, r));
  }
}
function Fy(e) {
  var t = e.alternate;
  return e === He || t !== null && t === He;
}
function jy(e, t) {
  Ri = jl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function By(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _d(e, n);
  }
}
var Bl = { readContext: dn, useCallback: Ct, useContext: Ct, useEffect: Ct, useImperativeHandle: Ct, useInsertionEffect: Ct, useLayoutEffect: Ct, useMemo: Ct, useReducer: Ct, useRef: Ct, useState: Ct, useDebugValue: Ct, useDeferredValue: Ct, useTransition: Ct, useMutableSource: Ct, useSyncExternalStore: Ct, useId: Ct, unstable_isNewReconciler: !1 }, dS = { readContext: dn, useCallback: function(e, t) {
  return $n().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: dn, useEffect: om, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ul(
    4194308,
    4,
    Oy.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ul(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ul(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = $n();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = $n();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = uS.bind(null, He, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = $n();
  return e = { current: e }, t.memoizedState = e;
}, useState: rm, useDebugValue: sf, useDeferredValue: function(e) {
  return $n().memoizedState = e;
}, useTransition: function() {
  var e = rm(!1), t = e[0];
  return e = aS.bind(null, e[1]), $n().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = He, o = $n();
  if (De) {
    if (n === void 0) throw Error(U(407));
    n = n();
  } else {
    if (n = t(), pt === null) throw Error(U(349));
    Kr & 30 || ky(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, om(Ty.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Zi(9, Ey.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = $n(), t = pt.identifierPrefix;
  if (De) {
    var n = Yn, r = Kn;
    n = (r & ~(1 << 32 - Cn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Xi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = lS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, fS = {
  readContext: dn,
  useCallback: Ny,
  useContext: dn,
  useEffect: of,
  useImperativeHandle: Ay,
  useInsertionEffect: My,
  useLayoutEffect: $y,
  useMemo: Ly,
  useReducer: Ku,
  useRef: Iy,
  useState: function() {
    return Ku(qi);
  },
  useDebugValue: sf,
  useDeferredValue: function(e) {
    var t = fn();
    return _y(t, lt.memoizedState, e);
  },
  useTransition: function() {
    var e = Ku(qi)[0], t = fn().memoizedState;
    return [e, t];
  },
  useMutableSource: by,
  useSyncExternalStore: Cy,
  useId: zy,
  unstable_isNewReconciler: !1
}, pS = { readContext: dn, useCallback: Ny, useContext: dn, useEffect: of, useImperativeHandle: Ay, useInsertionEffect: My, useLayoutEffect: $y, useMemo: Ly, useReducer: Yu, useRef: Iy, useState: function() {
  return Yu(qi);
}, useDebugValue: sf, useDeferredValue: function(e) {
  var t = fn();
  return lt === null ? t.memoizedState = e : _y(t, lt.memoizedState, e);
}, useTransition: function() {
  var e = Yu(qi)[0], t = fn().memoizedState;
  return [e, t];
}, useMutableSource: by, useSyncExternalStore: Cy, useId: zy, unstable_isNewReconciler: !1 };
function Sn(e, t) {
  if (e && e.defaultProps) {
    t = Ke({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Bc(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Ke({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ha = { isMounted: function(e) {
  return (e = e._reactInternals) ? eo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = At(), o = vr(e), i = Xn(r, o);
  i.payload = t, n != null && (i.callback = n), t = gr(e, i, o), t !== null && (kn(t, e, o, r), ll(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = At(), o = vr(e), i = Xn(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = gr(e, i, o), t !== null && (kn(t, e, o, r), ll(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = At(), r = vr(e), o = Xn(n, r);
  o.tag = 2, t != null && (o.callback = t), t = gr(e, o, r), t !== null && (kn(t, e, r, n), ll(t, e, r));
} };
function im(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Vi(n, r) || !Vi(o, i) : !0;
}
function Dy(e, t, n) {
  var r = !1, o = br, i = t.contextType;
  return typeof i == "object" && i !== null ? i = dn(i) : (o = Bt(t) ? Vr : Rt.current, r = t.contextTypes, i = (r = r != null) ? Lo(e, o) : br), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = ha, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function sm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ha.enqueueReplaceState(t, t.state, null);
}
function Dc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, qd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = dn(i) : (i = Bt(t) ? Vr : Rt.current, o.context = Lo(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Bc(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && ha.enqueueReplaceState(o, o.state, null), zl(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function jo(e, t) {
  try {
    var n = "", r = t;
    do
      n += D1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Gu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Uc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mS = typeof WeakMap == "function" ? WeakMap : Map;
function Uy(e, t, n) {
  n = Xn(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ul || (Ul = !0, Zc = r), Uc(e, t);
  }, n;
}
function Wy(e, t, n) {
  n = Xn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Uc(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Uc(e, t), typeof r != "function" && (yr === null ? yr = /* @__PURE__ */ new Set([this]) : yr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function lm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = PS.bind(null, e, t, n), t.then(e, e));
}
function am(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function um(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xn(-1, 1), t.tag = 2, gr(n, t, 1))), n.lanes |= 1), e);
}
var hS = or.ReactCurrentOwner, Ft = !1;
function Mt(e, t, n, r) {
  t.child = e === null ? vy(t, null, n, r) : zo(t, e.child, n, r);
}
function cm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Po(t, o), r = nf(e, t, n, r, i, o), n = rf(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, er(e, t, o)) : (De && n && Vd(t), t.flags |= 1, Mt(e, t, r, o), t.child);
}
function dm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !mf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Vy(e, t, i, r, o)) : (e = pl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Vi, n(s, r) && e.ref === t.ref) return er(e, t, o);
  }
  return t.flags |= 1, e = xr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Vy(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Vi(i, r) && e.ref === t.ref) if (Ft = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Ft = !0);
    else return t.lanes = e.lanes, er(e, t, o);
  }
  return Wc(e, t, n, r, o);
}
function Hy(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(bo, Ht), Ht |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ne(bo, Ht), Ht |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ne(bo, Ht), Ht |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ne(bo, Ht), Ht |= r;
  return Mt(e, t, o, n), t.child;
}
function Ky(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wc(e, t, n, r, o) {
  var i = Bt(n) ? Vr : Rt.current;
  return i = Lo(t, i), Po(t, o), n = nf(e, t, n, r, i, o), r = rf(), e !== null && !Ft ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, er(e, t, o)) : (De && r && Vd(t), t.flags |= 1, Mt(e, t, n, o), t.child);
}
function fm(e, t, n, r, o) {
  if (Bt(n)) {
    var i = !0;
    Ol(t);
  } else i = !1;
  if (Po(t, o), t.stateNode === null) cl(e, t), Dy(t, n, r), Dc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = dn(u) : (u = Bt(n) ? Vr : Rt.current, u = Lo(t, u));
    var d = n.getDerivedStateFromProps, f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && sm(t, s, r, u), lr = !1;
    var m = t.memoizedState;
    s.state = m, zl(t, r, s, o), a = t.memoizedState, l !== r || m !== a || jt.current || lr ? (typeof d == "function" && (Bc(t, n, d, r), a = t.memoizedState), (l = lr || im(t, n, l, r, m, a, u)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Sy(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Sn(t.type, l), s.props = u, f = t.pendingProps, m = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = dn(a) : (a = Bt(n) ? Vr : Rt.current, a = Lo(t, a));
    var c = n.getDerivedStateFromProps;
    (d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || m !== a) && sm(t, s, r, a), lr = !1, m = t.memoizedState, s.state = m, zl(t, r, s, o);
    var y = t.memoizedState;
    l !== f || m !== y || jt.current || lr ? (typeof c == "function" && (Bc(t, n, c, r), y = t.memoizedState), (u = lr || im(t, n, u, r, m, y, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Vc(e, t, n, r, i, o);
}
function Vc(e, t, n, r, o, i) {
  Ky(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && qp(t, n, !1), er(e, t, i);
  r = t.stateNode, hS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = zo(t, e.child, null, i), t.child = zo(t, null, l, i)) : Mt(e, t, l, i), t.memoizedState = r.state, o && qp(t, n, !0), t.child;
}
function Yy(e) {
  var t = e.stateNode;
  t.pendingContext ? Xp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xp(e, t.context, !1), Zd(e, t.containerInfo);
}
function pm(e, t, n, r, o) {
  return _o(), Kd(o), t.flags |= 256, Mt(e, t, n, r), t.child;
}
var Hc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Kc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gy(e, t, n) {
  var r = t.pendingProps, o = Ve.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ne(Ve, o & 1), e === null)
    return Fc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = va(s, r, 0, null), e = Ur(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Kc(n), t.memoizedState = Hc, e) : lf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return gS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = xr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = xr(l, i) : (i = Ur(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Kc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Hc, r;
  }
  return i = e.child, e = i.sibling, r = xr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function lf(e, t) {
  return t = va({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function js(e, t, n, r) {
  return r !== null && Kd(r), zo(t, e.child, null, n), e = lf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function gS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Gu(Error(U(422))), js(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = va({ mode: "visible", children: r.children }, o, 0, null), i = Ur(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && zo(t, e.child, null, s), t.child.memoizedState = Kc(s), t.memoizedState = Hc, i);
  if (!(t.mode & 1)) return js(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(U(419)), r = Gu(i, r, void 0), js(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Ft || l) {
    if (r = pt, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Jn(e, o), kn(r, e, o, -1));
    }
    return pf(), r = Gu(Error(U(421))), js(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = IS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Gt = hr(o.nextSibling), Qt = t, De = !0, bn = null, e !== null && (rn[on++] = Kn, rn[on++] = Yn, rn[on++] = Hr, Kn = e.id, Yn = e.overflow, Hr = t), t = lf(t, r.children), t.flags |= 4096, t);
}
function mm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jc(e.return, t, n);
}
function Qu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Qy(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Mt(e, t, r.children, n), r = Ve.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mm(e, n, t);
      else if (e.tag === 19) mm(e, n, t);
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
  if (Ne(Ve, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Fl(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Qu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Fl(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Qu(t, !0, n, null, i);
      break;
    case "together":
      Qu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function cl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function er(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Yr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(U(153));
  if (t.child !== null) {
    for (e = t.child, n = xr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function yS(e, t, n) {
  switch (t.tag) {
    case 3:
      Yy(t), _o();
      break;
    case 5:
      wy(t);
      break;
    case 1:
      Bt(t.type) && Ol(t);
      break;
    case 4:
      Zd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ne(Ll, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ne(Ve, Ve.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gy(e, t, n) : (Ne(Ve, Ve.current & 1), e = er(e, t, n), e !== null ? e.sibling : null);
      Ne(Ve, Ve.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Qy(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ne(Ve, Ve.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hy(e, t, n);
  }
  return er(e, t, n);
}
var Xy, Yc, qy, Zy;
Xy = function(e, t) {
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
Yc = function() {
};
qy = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, jr(_n.current);
    var i = null;
    switch (n) {
      case "input":
        o = hc(e, o), r = hc(e, r), i = [];
        break;
      case "select":
        o = Ke({}, o, { value: void 0 }), r = Ke({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = vc(e, o), r = vc(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ml);
    }
    Sc(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (zi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (zi.hasOwnProperty(u) ? (a != null && u === "onScroll" && ze("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Zy = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ai(e, t) {
  if (!De) switch (e.tailMode) {
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
function vS(e, t, n) {
  var r = t.pendingProps;
  switch (Hd(t), t.tag) {
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
      return Bt(t.type) && $l(), kt(t), null;
    case 3:
      return r = t.stateNode, Fo(), Fe(jt), Fe(Rt), ef(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zs(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, bn !== null && (td(bn), bn = null))), Yc(e, t), kt(t), null;
    case 5:
      Jd(t);
      var o = jr(Qi.current);
      if (n = t.type, e !== null && t.stateNode != null) qy(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166));
          return kt(t), null;
        }
        if (e = jr(_n.current), zs(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Nn] = t, r[Yi] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ze("cancel", r), ze("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ze("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < vi.length; o++) ze(vi[o], r);
              break;
            case "source":
              ze("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ze(
                "error",
                r
              ), ze("load", r);
              break;
            case "details":
              ze("toggle", r);
              break;
            case "input":
              Cp(r, i), ze("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ze("invalid", r);
              break;
            case "textarea":
              Ep(r, i), ze("invalid", r);
          }
          Sc(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && _s(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && _s(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : zi.hasOwnProperty(s) && l != null && s === "onScroll" && ze("scroll", r);
          }
          switch (n) {
            case "input":
              Ps(r), kp(r, i, !0);
              break;
            case "textarea":
              Ps(r), Tp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ml);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tg(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Nn] = t, e[Yi] = r, Xy(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = wc(n, r), n) {
              case "dialog":
                ze("cancel", e), ze("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ze("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < vi.length; o++) ze(vi[o], e);
                o = r;
                break;
              case "source":
                ze("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ze(
                  "error",
                  e
                ), ze("load", e), o = r;
                break;
              case "details":
                ze("toggle", e), o = r;
                break;
              case "input":
                Cp(e, r), o = hc(e, r), ze("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = Ke({}, r, { value: void 0 }), ze("invalid", e);
                break;
              case "textarea":
                Ep(e, r), o = vc(e, r), ze("invalid", e);
                break;
              default:
                o = r;
            }
            Sc(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Ig(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Rg(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Fi(e, a) : typeof a == "number" && Fi(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (zi.hasOwnProperty(i) ? a != null && i === "onScroll" && ze("scroll", e) : a != null && Md(e, i, a, s));
            }
            switch (n) {
              case "input":
                Ps(e), kp(e, r, !1);
                break;
              case "textarea":
                Ps(e), Tp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ko(e, !!r.multiple, i, !1) : r.defaultValue != null && ko(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ml);
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
      if (e && t.stateNode != null) Zy(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(U(166));
        if (n = jr(Qi.current), jr(_n.current), zs(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Nn] = t, (i = r.nodeValue !== n) && (e = Qt, e !== null)) switch (e.tag) {
            case 3:
              _s(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && _s(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Nn] = t, t.stateNode = r;
      }
      return kt(t), null;
    case 13:
      if (Fe(Ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (De && Gt !== null && t.mode & 1 && !(t.flags & 128)) gy(), _o(), t.flags |= 98560, i = !1;
        else if (i = zs(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(U(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(U(317));
            i[Nn] = t;
          } else _o(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          kt(t), i = !1;
        } else bn !== null && (td(bn), bn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Ve.current & 1 ? at === 0 && (at = 3) : pf())), t.updateQueue !== null && (t.flags |= 4), kt(t), null);
    case 4:
      return Fo(), Yc(e, t), e === null && Hi(t.stateNode.containerInfo), kt(t), null;
    case 10:
      return Qd(t.type._context), kt(t), null;
    case 17:
      return Bt(t.type) && $l(), kt(t), null;
    case 19:
      if (Fe(Ve), i = t.memoizedState, i === null) return kt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) ai(i, !1);
      else {
        if (at !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Fl(e), s !== null) {
            for (t.flags |= 128, ai(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ne(Ve, Ve.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && qe() > Bo && (t.flags |= 128, r = !0, ai(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Fl(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ai(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !De) return kt(t), null;
        } else 2 * qe() - i.renderingStartTime > Bo && n !== 1073741824 && (t.flags |= 128, r = !0, ai(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = qe(), t.sibling = null, n = Ve.current, Ne(Ve, r ? n & 1 | 2 : n & 1), t) : (kt(t), null);
    case 22:
    case 23:
      return ff(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ht & 1073741824 && (kt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : kt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, t.tag));
}
function xS(e, t) {
  switch (Hd(t), t.tag) {
    case 1:
      return Bt(t.type) && $l(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Fo(), Fe(jt), Fe(Rt), ef(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Jd(t), null;
    case 13:
      if (Fe(Ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(U(340));
        _o();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Fe(Ve), null;
    case 4:
      return Fo(), null;
    case 10:
      return Qd(t.type._context), null;
    case 22:
    case 23:
      return ff(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bs = !1, Tt = !1, SS = typeof WeakSet == "function" ? WeakSet : Set, Q = null;
function wo(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Ge(e, t, r);
  }
  else n.current = null;
}
function Gc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ge(e, t, r);
  }
}
var hm = !1;
function wS(e, t) {
  if ($c = Rl, e = ry(), Wd(e)) {
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
  for (Oc = { focusedElem: e, selectionRange: n }, Rl = !1, Q = t; Q !== null; ) if (t = Q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Q = e;
  else for (; Q !== null; ) {
    t = Q;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var w = y.memoizedProps, b = y.memoizedState, g = t.stateNode, p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Sn(t.type, w), b);
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
      Ge(t, t.return, S);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, Q = e;
      break;
    }
    Q = t.return;
  }
  return y = hm, hm = !1, y;
}
function Pi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Gc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ga(e, t) {
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
function Qc(e) {
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
function Jy(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Jy(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Nn], delete t[Yi], delete t[Lc], delete t[rS], delete t[oS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function ev(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function gm(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || ev(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Xc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ml));
  else if (r !== 4 && (e = e.child, e !== null)) for (Xc(e, t, n), e = e.sibling; e !== null; ) Xc(e, t, n), e = e.sibling;
}
function qc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (qc(e, t, n), e = e.sibling; e !== null; ) qc(e, t, n), e = e.sibling;
}
var yt = null, wn = !1;
function ir(e, t, n) {
  for (n = n.child; n !== null; ) tv(e, t, n), n = n.sibling;
}
function tv(e, t, n) {
  if (Ln && typeof Ln.onCommitFiberUnmount == "function") try {
    Ln.onCommitFiberUnmount(aa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Tt || wo(n, t);
    case 6:
      var r = yt, o = wn;
      yt = null, ir(e, t, n), yt = r, wn = o, yt !== null && (wn ? (e = yt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : yt.removeChild(n.stateNode));
      break;
    case 18:
      yt !== null && (wn ? (e = yt, n = n.stateNode, e.nodeType === 8 ? Uu(e.parentNode, n) : e.nodeType === 1 && Uu(e, n), Ui(e)) : Uu(yt, n.stateNode));
      break;
    case 4:
      r = yt, o = wn, yt = n.stateNode.containerInfo, wn = !0, ir(e, t, n), yt = r, wn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Tt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Gc(n, t, s), o = o.next;
        } while (o !== r);
      }
      ir(e, t, n);
      break;
    case 1:
      if (!Tt && (wo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        Ge(n, t, l);
      }
      ir(e, t, n);
      break;
    case 21:
      ir(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Tt = (r = Tt) || n.memoizedState !== null, ir(e, t, n), Tt = r) : ir(e, t, n);
      break;
    default:
      ir(e, t, n);
  }
}
function ym(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SS()), t.forEach(function(r) {
      var o = MS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function vn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            yt = l.stateNode, wn = !1;
            break e;
          case 3:
            yt = l.stateNode.containerInfo, wn = !0;
            break e;
          case 4:
            yt = l.stateNode.containerInfo, wn = !0;
            break e;
        }
        l = l.return;
      }
      if (yt === null) throw Error(U(160));
      tv(i, s, o), yt = null, wn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      Ge(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) nv(t, e), t = t.sibling;
}
function nv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (vn(t, e), Rn(e), r & 4) {
        try {
          Pi(3, e, e.return), ga(3, e);
        } catch (w) {
          Ge(e, e.return, w);
        }
        try {
          Pi(5, e, e.return);
        } catch (w) {
          Ge(e, e.return, w);
        }
      }
      break;
    case 1:
      vn(t, e), Rn(e), r & 512 && n !== null && wo(n, n.return);
      break;
    case 5:
      if (vn(t, e), Rn(e), r & 512 && n !== null && wo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Fi(o, "");
        } catch (w) {
          Ge(e, e.return, w);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && kg(o, i), wc(l, s);
          var u = wc(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], f = a[s + 1];
            d === "style" ? Ig(o, f) : d === "dangerouslySetInnerHTML" ? Rg(o, f) : d === "children" ? Fi(o, f) : Md(o, d, f, u);
          }
          switch (l) {
            case "input":
              gc(o, i);
              break;
            case "textarea":
              Eg(o, i);
              break;
            case "select":
              var m = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var c = i.value;
              c != null ? ko(o, !!i.multiple, c, !1) : m !== !!i.multiple && (i.defaultValue != null ? ko(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ko(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Yi] = i;
        } catch (w) {
          Ge(e, e.return, w);
        }
      }
      break;
    case 6:
      if (vn(t, e), Rn(e), r & 4) {
        if (e.stateNode === null) throw Error(U(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (w) {
          Ge(e, e.return, w);
        }
      }
      break;
    case 3:
      if (vn(t, e), Rn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ui(t.containerInfo);
      } catch (w) {
        Ge(e, e.return, w);
      }
      break;
    case 4:
      vn(t, e), Rn(e);
      break;
    case 13:
      vn(t, e), Rn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (cf = qe())), r & 4 && ym(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Tt = (u = Tt) || d, vn(t, e), Tt = u) : vn(t, e), Rn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (Q = e, d = e.child; d !== null; ) {
          for (f = Q = d; Q !== null; ) {
            switch (m = Q, c = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pi(4, m, m.return);
                break;
              case 1:
                wo(m, m.return);
                var y = m.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (w) {
                    Ge(r, n, w);
                  }
                }
                break;
              case 5:
                wo(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  xm(f);
                  continue;
                }
            }
            c !== null ? (c.return = m, Q = c) : xm(f);
          }
          d = d.sibling;
        }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                o = f.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Pg("display", s));
              } catch (w) {
                Ge(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (d === null) try {
              f.stateNode.nodeValue = u ? "" : f.memoizedProps;
            } catch (w) {
              Ge(e, e.return, w);
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
      vn(t, e), Rn(e), r & 4 && ym(e);
      break;
    case 21:
      break;
    default:
      vn(
        t,
        e
      ), Rn(e);
  }
}
function Rn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (ev(n)) {
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
          r.flags & 32 && (Fi(o, ""), r.flags &= -33);
          var i = gm(e);
          qc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = gm(e);
          Xc(e, l, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (a) {
      Ge(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bS(e, t, n) {
  Q = e, rv(e);
}
function rv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Q !== null; ) {
    var o = Q, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Bs;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Tt;
        l = Bs;
        var u = Tt;
        if (Bs = s, (Tt = a) && !u) for (Q = o; Q !== null; ) s = Q, a = s.child, s.tag === 22 && s.memoizedState !== null ? Sm(o) : a !== null ? (a.return = s, Q = a) : Sm(o);
        for (; i !== null; ) Q = i, rv(i), i = i.sibling;
        Q = o, Bs = l, Tt = u;
      }
      vm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, Q = i) : vm(e);
  }
}
function vm(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Tt || ga(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Tt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Sn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && nm(t, i, r);
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
              nm(t, s, n);
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
                  f !== null && Ui(f);
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
        Tt || t.flags & 512 && Qc(t);
      } catch (m) {
        Ge(t, t.return, m);
      }
    }
    if (t === e) {
      Q = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, Q = n;
      break;
    }
    Q = t.return;
  }
}
function xm(e) {
  for (; Q !== null; ) {
    var t = Q;
    if (t === e) {
      Q = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, Q = n;
      break;
    }
    Q = t.return;
  }
}
function Sm(e) {
  for (; Q !== null; ) {
    var t = Q;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ga(4, t);
          } catch (a) {
            Ge(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ge(t, o, a);
            }
          }
          var i = t.return;
          try {
            Qc(t);
          } catch (a) {
            Ge(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qc(t);
          } catch (a) {
            Ge(t, s, a);
          }
      }
    } catch (a) {
      Ge(t, t.return, a);
    }
    if (t === e) {
      Q = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, Q = l;
      break;
    }
    Q = t.return;
  }
}
var CS = Math.ceil, Dl = or.ReactCurrentDispatcher, af = or.ReactCurrentOwner, un = or.ReactCurrentBatchConfig, ve = 0, pt = null, ot = null, xt = 0, Ht = 0, bo = Tr(0), at = 0, Ji = null, Yr = 0, ya = 0, uf = 0, Ii = null, zt = null, cf = 0, Bo = 1 / 0, Wn = null, Ul = !1, Zc = null, yr = null, Ds = !1, dr = null, Wl = 0, Mi = 0, Jc = null, dl = -1, fl = 0;
function At() {
  return ve & 6 ? qe() : dl !== -1 ? dl : dl = qe();
}
function vr(e) {
  return e.mode & 1 ? ve & 2 && xt !== 0 ? xt & -xt : sS.transition !== null ? (fl === 0 && (fl = Dg()), fl) : (e = Pe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gg(e.type)), e) : 1;
}
function kn(e, t, n, r) {
  if (50 < Mi) throw Mi = 0, Jc = null, Error(U(185));
  us(e, n, r), (!(ve & 2) || e !== pt) && (e === pt && (!(ve & 2) && (ya |= n), at === 4 && ur(e, xt)), Dt(e, r), n === 1 && ve === 0 && !(t.mode & 1) && (Bo = qe() + 500, pa && Rr()));
}
function Dt(e, t) {
  var n = e.callbackNode;
  sx(e, t);
  var r = Tl(e, e === pt ? xt : 0);
  if (r === 0) n !== null && Ip(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Ip(n), t === 1) e.tag === 0 ? iS(wm.bind(null, e)) : py(wm.bind(null, e)), tS(function() {
      !(ve & 6) && Rr();
    }), n = null;
    else {
      switch (Ug(r)) {
        case 1:
          n = Ld;
          break;
        case 4:
          n = jg;
          break;
        case 16:
          n = El;
          break;
        case 536870912:
          n = Bg;
          break;
        default:
          n = El;
      }
      n = dv(n, ov.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function ov(e, t) {
  if (dl = -1, fl = 0, ve & 6) throw Error(U(327));
  var n = e.callbackNode;
  if (Io() && e.callbackNode !== n) return null;
  var r = Tl(e, e === pt ? xt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Vl(e, r);
  else {
    t = r;
    var o = ve;
    ve |= 2;
    var i = sv();
    (pt !== e || xt !== t) && (Wn = null, Bo = qe() + 500, Dr(e, t));
    do
      try {
        TS();
        break;
      } catch (l) {
        iv(e, l);
      }
    while (!0);
    Gd(), Dl.current = i, ve = o, ot !== null ? t = 0 : (pt = null, xt = 0, t = at);
  }
  if (t !== 0) {
    if (t === 2 && (o = Tc(e), o !== 0 && (r = o, t = ed(e, o))), t === 1) throw n = Ji, Dr(e, 0), ur(e, r), Dt(e, qe()), n;
    if (t === 6) ur(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !kS(o) && (t = Vl(e, r), t === 2 && (i = Tc(e), i !== 0 && (r = i, t = ed(e, i))), t === 1)) throw n = Ji, Dr(e, 0), ur(e, r), Dt(e, qe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          Lr(e, zt, Wn);
          break;
        case 3:
          if (ur(e, r), (r & 130023424) === r && (t = cf + 500 - qe(), 10 < t)) {
            if (Tl(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              At(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Nc(Lr.bind(null, e, zt, Wn), t);
            break;
          }
          Lr(e, zt, Wn);
          break;
        case 4:
          if (ur(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Cn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = qe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * CS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Nc(Lr.bind(null, e, zt, Wn), r);
            break;
          }
          Lr(e, zt, Wn);
          break;
        case 5:
          Lr(e, zt, Wn);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Dt(e, qe()), e.callbackNode === n ? ov.bind(null, e) : null;
}
function ed(e, t) {
  var n = Ii;
  return e.current.memoizedState.isDehydrated && (Dr(e, t).flags |= 256), e = Vl(e, t), e !== 2 && (t = zt, zt = n, t !== null && td(t)), e;
}
function td(e) {
  zt === null ? zt = e : zt.push.apply(zt, e);
}
function kS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!En(i(), o)) return !1;
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
function ur(e, t) {
  for (t &= ~uf, t &= ~ya, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Cn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function wm(e) {
  if (ve & 6) throw Error(U(327));
  Io();
  var t = Tl(e, 0);
  if (!(t & 1)) return Dt(e, qe()), null;
  var n = Vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Tc(e);
    r !== 0 && (t = r, n = ed(e, r));
  }
  if (n === 1) throw n = Ji, Dr(e, 0), ur(e, t), Dt(e, qe()), n;
  if (n === 6) throw Error(U(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Lr(e, zt, Wn), Dt(e, qe()), null;
}
function df(e, t) {
  var n = ve;
  ve |= 1;
  try {
    return e(t);
  } finally {
    ve = n, ve === 0 && (Bo = qe() + 500, pa && Rr());
  }
}
function Gr(e) {
  dr !== null && dr.tag === 0 && !(ve & 6) && Io();
  var t = ve;
  ve |= 1;
  var n = un.transition, r = Pe;
  try {
    if (un.transition = null, Pe = 1, e) return e();
  } finally {
    Pe = r, un.transition = n, ve = t, !(ve & 6) && Rr();
  }
}
function ff() {
  Ht = bo.current, Fe(bo);
}
function Dr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, eS(n)), ot !== null) for (n = ot.return; n !== null; ) {
    var r = n;
    switch (Hd(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && $l();
        break;
      case 3:
        Fo(), Fe(jt), Fe(Rt), ef();
        break;
      case 5:
        Jd(r);
        break;
      case 4:
        Fo();
        break;
      case 13:
        Fe(Ve);
        break;
      case 19:
        Fe(Ve);
        break;
      case 10:
        Qd(r.type._context);
        break;
      case 22:
      case 23:
        ff();
    }
    n = n.return;
  }
  if (pt = e, ot = e = xr(e.current, null), xt = Ht = t, at = 0, Ji = null, uf = ya = Yr = 0, zt = Ii = null, Fr !== null) {
    for (t = 0; t < Fr.length; t++) if (n = Fr[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Fr = null;
  }
  return e;
}
function iv(e, t) {
  do {
    var n = ot;
    try {
      if (Gd(), al.current = Bl, jl) {
        for (var r = He.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        jl = !1;
      }
      if (Kr = 0, ft = lt = He = null, Ri = !1, Xi = 0, af.current = null, n === null || n.return === null) {
        at = 1, Ji = t, ot = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = xt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var m = d.alternate;
            m ? (d.updateQueue = m.updateQueue, d.memoizedState = m.memoizedState, d.lanes = m.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var c = am(s);
          if (c !== null) {
            c.flags &= -257, um(c, s, l, i, t), c.mode & 1 && lm(i, u, t), t = c, a = u;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(a), t.updateQueue = w;
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              lm(i, u, t), pf();
              break e;
            }
            a = Error(U(426));
          }
        } else if (De && l.mode & 1) {
          var b = am(s);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), um(b, s, l, i, t), Kd(jo(a, l));
            break e;
          }
        }
        i = a = jo(a, l), at !== 4 && (at = 2), Ii === null ? Ii = [i] : Ii.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Uy(i, a, t);
              tm(i, g);
              break e;
            case 1:
              l = a;
              var p = i.type, v = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (yr === null || !yr.has(v)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Wy(i, l, t);
                tm(i, S);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      av(n);
    } catch (C) {
      t = C, ot === n && n !== null && (ot = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sv() {
  var e = Dl.current;
  return Dl.current = Bl, e === null ? Bl : e;
}
function pf() {
  (at === 0 || at === 3 || at === 2) && (at = 4), pt === null || !(Yr & 268435455) && !(ya & 268435455) || ur(pt, xt);
}
function Vl(e, t) {
  var n = ve;
  ve |= 2;
  var r = sv();
  (pt !== e || xt !== t) && (Wn = null, Dr(e, t));
  do
    try {
      ES();
      break;
    } catch (o) {
      iv(e, o);
    }
  while (!0);
  if (Gd(), ve = n, Dl.current = r, ot !== null) throw Error(U(261));
  return pt = null, xt = 0, at;
}
function ES() {
  for (; ot !== null; ) lv(ot);
}
function TS() {
  for (; ot !== null && !q1(); ) lv(ot);
}
function lv(e) {
  var t = cv(e.alternate, e, Ht);
  e.memoizedProps = e.pendingProps, t === null ? av(e) : ot = t, af.current = null;
}
function av(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = xS(n, t), n !== null) {
        n.flags &= 32767, ot = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        at = 6, ot = null;
        return;
      }
    } else if (n = vS(n, t, Ht), n !== null) {
      ot = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ot = t;
      return;
    }
    ot = t = e;
  } while (t !== null);
  at === 0 && (at = 5);
}
function Lr(e, t, n) {
  var r = Pe, o = un.transition;
  try {
    un.transition = null, Pe = 1, RS(e, t, n, r);
  } finally {
    un.transition = o, Pe = r;
  }
  return null;
}
function RS(e, t, n, r) {
  do
    Io();
  while (dr !== null);
  if (ve & 6) throw Error(U(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(U(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (lx(e, i), e === pt && (ot = pt = null, xt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ds || (Ds = !0, dv(El, function() {
    return Io(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = un.transition, un.transition = null;
    var s = Pe;
    Pe = 1;
    var l = ve;
    ve |= 4, af.current = null, wS(e, n), nv(n, e), Yx(Oc), Rl = !!$c, Oc = $c = null, e.current = n, bS(n), Z1(), ve = l, Pe = s, un.transition = i;
  } else e.current = n;
  if (Ds && (Ds = !1, dr = e, Wl = o), i = e.pendingLanes, i === 0 && (yr = null), tx(n.stateNode), Dt(e, qe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ul) throw Ul = !1, e = Zc, Zc = null, e;
  return Wl & 1 && e.tag !== 0 && Io(), i = e.pendingLanes, i & 1 ? e === Jc ? Mi++ : (Mi = 0, Jc = e) : Mi = 0, Rr(), null;
}
function Io() {
  if (dr !== null) {
    var e = Ug(Wl), t = un.transition, n = Pe;
    try {
      if (un.transition = null, Pe = 16 > e ? 16 : e, dr === null) var r = !1;
      else {
        if (e = dr, dr = null, Wl = 0, ve & 6) throw Error(U(331));
        var o = ve;
        for (ve |= 4, Q = e.current; Q !== null; ) {
          var i = Q, s = i.child;
          if (Q.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (Q = u; Q !== null; ) {
                  var d = Q;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pi(8, d, i);
                  }
                  var f = d.child;
                  if (f !== null) f.return = d, Q = f;
                  else for (; Q !== null; ) {
                    d = Q;
                    var m = d.sibling, c = d.return;
                    if (Jy(d), d === u) {
                      Q = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = c, Q = m;
                      break;
                    }
                    Q = c;
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
              Q = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, Q = s;
          else e: for (; Q !== null; ) {
            if (i = Q, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Pi(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, Q = g;
              break e;
            }
            Q = i.return;
          }
        }
        var p = e.current;
        for (Q = p; Q !== null; ) {
          s = Q;
          var v = s.child;
          if (s.subtreeFlags & 2064 && v !== null) v.return = s, Q = v;
          else e: for (s = p; Q !== null; ) {
            if (l = Q, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ga(9, l);
              }
            } catch (C) {
              Ge(l, l.return, C);
            }
            if (l === s) {
              Q = null;
              break e;
            }
            var S = l.sibling;
            if (S !== null) {
              S.return = l.return, Q = S;
              break e;
            }
            Q = l.return;
          }
        }
        if (ve = o, Rr(), Ln && typeof Ln.onPostCommitFiberRoot == "function") try {
          Ln.onPostCommitFiberRoot(aa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Pe = n, un.transition = t;
    }
  }
  return !1;
}
function bm(e, t, n) {
  t = jo(n, t), t = Uy(e, t, 1), e = gr(e, t, 1), t = At(), e !== null && (us(e, 1, t), Dt(e, t));
}
function Ge(e, t, n) {
  if (e.tag === 3) bm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      bm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (yr === null || !yr.has(r))) {
        e = jo(n, e), e = Wy(t, e, 1), t = gr(t, e, 1), e = At(), t !== null && (us(t, 1, e), Dt(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function PS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = At(), e.pingedLanes |= e.suspendedLanes & n, pt === e && (xt & n) === n && (at === 4 || at === 3 && (xt & 130023424) === xt && 500 > qe() - cf ? Dr(e, 0) : uf |= n), Dt(e, t);
}
function uv(e, t) {
  t === 0 && (e.mode & 1 ? (t = $s, $s <<= 1, !($s & 130023424) && ($s = 4194304)) : t = 1);
  var n = At();
  e = Jn(e, t), e !== null && (us(e, t, n), Dt(e, n));
}
function IS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), uv(e, n);
}
function MS(e, t) {
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
  r !== null && r.delete(t), uv(e, n);
}
var cv;
cv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || jt.current) Ft = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Ft = !1, yS(e, t, n);
    Ft = !!(e.flags & 131072);
  }
  else Ft = !1, De && t.flags & 1048576 && my(t, Nl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      cl(e, t), e = t.pendingProps;
      var o = Lo(t, Rt.current);
      Po(t, n), o = nf(null, t, r, e, o, n);
      var i = rf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Bt(r) ? (i = !0, Ol(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, qd(t), o.updater = ha, t.stateNode = o, o._reactInternals = t, Dc(t, r, e, n), t = Vc(null, t, r, !0, i, n)) : (t.tag = 0, De && i && Vd(t), Mt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (cl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = OS(r), e = Sn(r, e), o) {
          case 0:
            t = Wc(null, t, r, e, n);
            break e;
          case 1:
            t = fm(null, t, r, e, n);
            break e;
          case 11:
            t = cm(null, t, r, e, n);
            break e;
          case 14:
            t = dm(null, t, r, Sn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Sn(r, o), Wc(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Sn(r, o), fm(e, t, r, o, n);
    case 3:
      e: {
        if (Yy(t), e === null) throw Error(U(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Sy(e, t), zl(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = jo(Error(U(423)), t), t = pm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = jo(Error(U(424)), t), t = pm(e, t, r, n, o);
          break e;
        } else for (Gt = hr(t.stateNode.containerInfo.firstChild), Qt = t, De = !0, bn = null, n = vy(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (_o(), r === o) {
            t = er(e, t, n);
            break e;
          }
          Mt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return wy(t), e === null && Fc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Ac(r, o) ? s = null : i !== null && Ac(r, i) && (t.flags |= 32), Ky(e, t), Mt(e, t, s, n), t.child;
    case 6:
      return e === null && Fc(t), null;
    case 13:
      return Gy(e, t, n);
    case 4:
      return Zd(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zo(t, null, r, n) : Mt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Sn(r, o), cm(e, t, r, o, n);
    case 7:
      return Mt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Mt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Mt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ne(Ll, r._currentValue), r._currentValue = s, i !== null) if (En(i.value, s)) {
          if (i.children === o.children && !jt.current) {
            t = er(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Xn(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), jc(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), jc(s, n, t), s = i.sibling;
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
        Mt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Po(t, n), o = dn(o), r = r(o), t.flags |= 1, Mt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Sn(r, t.pendingProps), o = Sn(r.type, o), dm(e, t, r, o, n);
    case 15:
      return Vy(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Sn(r, o), cl(e, t), t.tag = 1, Bt(r) ? (e = !0, Ol(t)) : e = !1, Po(t, n), Dy(t, r, o), Dc(t, r, o, n), Vc(null, t, r, !0, e, n);
    case 19:
      return Qy(e, t, n);
    case 22:
      return Hy(e, t, n);
  }
  throw Error(U(156, t.tag));
};
function dv(e, t) {
  return Fg(e, t);
}
function $S(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function an(e, t, n, r) {
  return new $S(e, t, n, r);
}
function mf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function OS(e) {
  if (typeof e == "function") return mf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Od) return 11;
    if (e === Ad) return 14;
  }
  return 2;
}
function xr(e, t) {
  var n = e.alternate;
  return n === null ? (n = an(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function pl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") mf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case fo:
      return Ur(n.children, o, i, t);
    case $d:
      s = 8, o |= 8;
      break;
    case dc:
      return e = an(12, n, t, o | 2), e.elementType = dc, e.lanes = i, e;
    case fc:
      return e = an(13, n, t, o), e.elementType = fc, e.lanes = i, e;
    case pc:
      return e = an(19, n, t, o), e.elementType = pc, e.lanes = i, e;
    case wg:
      return va(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xg:
          s = 10;
          break e;
        case Sg:
          s = 9;
          break e;
        case Od:
          s = 11;
          break e;
        case Ad:
          s = 14;
          break e;
        case sr:
          s = 16, r = null;
          break e;
      }
      throw Error(U(130, e == null ? e : typeof e, ""));
  }
  return t = an(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ur(e, t, n, r) {
  return e = an(7, e, r, t), e.lanes = n, e;
}
function va(e, t, n, r) {
  return e = an(22, e, r, t), e.elementType = wg, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Xu(e, t, n) {
  return e = an(6, e, null, t), e.lanes = n, e;
}
function qu(e, t, n) {
  return t = an(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function AS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = $u(0), this.expirationTimes = $u(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $u(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function hf(e, t, n, r, o, i, s, l, a) {
  return e = new AS(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = an(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qd(i), e;
}
function NS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: co, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function fv(e) {
  if (!e) return br;
  e = e._reactInternals;
  e: {
    if (eo(e) !== e || e.tag !== 1) throw Error(U(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Bt(t.type)) {
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
    if (Bt(n)) return fy(e, n, t);
  }
  return t;
}
function pv(e, t, n, r, o, i, s, l, a) {
  return e = hf(n, r, !0, e, o, i, s, l, a), e.context = fv(null), n = e.current, r = At(), o = vr(n), i = Xn(r, o), i.callback = t ?? null, gr(n, i, o), e.current.lanes = o, us(e, o, r), Dt(e, r), e;
}
function xa(e, t, n, r) {
  var o = t.current, i = At(), s = vr(o);
  return n = fv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Xn(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = gr(o, t, s), e !== null && (kn(e, o, s, i), ll(e, o, s)), s;
}
function Hl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Cm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gf(e, t) {
  Cm(e, t), (e = e.alternate) && Cm(e, t);
}
function LS() {
  return null;
}
var mv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function yf(e) {
  this._internalRoot = e;
}
Sa.prototype.render = yf.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(U(409));
  xa(e, t, null, null);
};
Sa.prototype.unmount = yf.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gr(function() {
      xa(null, e, null, null);
    }), t[Zn] = null;
  }
};
function Sa(e) {
  this._internalRoot = e;
}
Sa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ar.length && t !== 0 && t < ar[n].priority; n++) ;
    ar.splice(n, 0, e), n === 0 && Yg(e);
  }
};
function vf(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function wa(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function km() {
}
function _S(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Hl(s);
        i.call(u);
      };
    }
    var s = pv(t, r, e, 0, null, !1, !1, "", km);
    return e._reactRootContainer = s, e[Zn] = s.current, Hi(e.nodeType === 8 ? e.parentNode : e), Gr(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Hl(a);
      l.call(u);
    };
  }
  var a = hf(e, 0, !1, null, null, !1, !1, "", km);
  return e._reactRootContainer = a, e[Zn] = a.current, Hi(e.nodeType === 8 ? e.parentNode : e), Gr(function() {
    xa(t, a, n, r);
  }), a;
}
function ba(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Hl(s);
        l.call(a);
      };
    }
    xa(t, s, e, o);
  } else s = _S(n, t, e, o, r);
  return Hl(s);
}
Wg = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yi(t.pendingLanes);
        n !== 0 && (_d(t, n | 1), Dt(t, qe()), !(ve & 6) && (Bo = qe() + 500, Rr()));
      }
      break;
    case 13:
      Gr(function() {
        var r = Jn(e, 1);
        if (r !== null) {
          var o = At();
          kn(r, e, 1, o);
        }
      }), gf(e, 1);
  }
};
zd = function(e) {
  if (e.tag === 13) {
    var t = Jn(e, 134217728);
    if (t !== null) {
      var n = At();
      kn(t, e, 134217728, n);
    }
    gf(e, 134217728);
  }
};
Vg = function(e) {
  if (e.tag === 13) {
    var t = vr(e), n = Jn(e, t);
    if (n !== null) {
      var r = At();
      kn(n, e, t, r);
    }
    gf(e, t);
  }
};
Hg = function() {
  return Pe;
};
Kg = function(e, t) {
  var n = Pe;
  try {
    return Pe = e, t();
  } finally {
    Pe = n;
  }
};
Cc = function(e, t, n) {
  switch (t) {
    case "input":
      if (gc(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = fa(r);
            if (!o) throw Error(U(90));
            Cg(r), gc(r, o);
          }
        }
      }
      break;
    case "textarea":
      Eg(e, n);
      break;
    case "select":
      t = n.value, t != null && ko(e, !!n.multiple, t, !1);
  }
};
Og = df;
Ag = Gr;
var zS = { usingClientEntryPoint: !1, Events: [ds, go, fa, Mg, $g, df] }, ui = { findFiberByHostInstance: zr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, FS = { bundleType: ui.bundleType, version: ui.version, rendererPackageName: ui.rendererPackageName, rendererConfig: ui.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: or.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _g(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ui.findFiberByHostInstance || LS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Us = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Us.isDisabled && Us.supportsFiber) try {
    aa = Us.inject(FS), Ln = Us;
  } catch {
  }
}
Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zS;
Jt.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!vf(t)) throw Error(U(200));
  return NS(e, t, null, n);
};
Jt.createRoot = function(e, t) {
  if (!vf(e)) throw Error(U(299));
  var n = !1, r = "", o = mv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = hf(e, 1, !1, null, null, n, !1, r, o), e[Zn] = t.current, Hi(e.nodeType === 8 ? e.parentNode : e), new yf(t);
};
Jt.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(U(188)) : (e = Object.keys(e).join(","), Error(U(268, e)));
  return e = _g(t), e = e === null ? null : e.stateNode, e;
};
Jt.flushSync = function(e) {
  return Gr(e);
};
Jt.hydrate = function(e, t, n) {
  if (!wa(t)) throw Error(U(200));
  return ba(null, e, t, !0, n);
};
Jt.hydrateRoot = function(e, t, n) {
  if (!vf(e)) throw Error(U(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = mv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = pv(t, null, e, 1, n ?? null, o, !1, i, s), e[Zn] = t.current, Hi(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Sa(t);
};
Jt.render = function(e, t, n) {
  if (!wa(t)) throw Error(U(200));
  return ba(null, e, t, !1, n);
};
Jt.unmountComponentAtNode = function(e) {
  if (!wa(e)) throw Error(U(40));
  return e._reactRootContainer ? (Gr(function() {
    ba(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Zn] = null;
    });
  }), !0) : !1;
};
Jt.unstable_batchedUpdates = df;
Jt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!wa(n)) throw Error(U(200));
  if (e == null || e._reactInternals === void 0) throw Error(U(38));
  return ba(e, t, n, !1, r);
};
Jt.version = "18.3.1-next-f1338f8080-20240426";
function hv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv);
    } catch (e) {
      console.error(e);
    }
}
hv(), hg.exports = Jt;
var gv = hg.exports, yv, Em = gv;
yv = Em.createRoot, Em.hydrateRoot;
const es = {
  black: "#000",
  white: "#fff"
}, oo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, io = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, so = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, lo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ao = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, ci = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, jS = {
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
function tr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const zn = "$$material";
function nd() {
  return nd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nd.apply(null, arguments);
}
function BS(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function DS(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var US = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(DS(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = BS(o);
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
}(), Et = "-ms-", Kl = "-moz-", we = "-webkit-", vv = "comm", xf = "rule", Sf = "decl", WS = "@import", xv = "@keyframes", VS = "@layer", HS = Math.abs, Ca = String.fromCharCode, KS = Object.assign;
function YS(e, t) {
  return vt(e, 0) ^ 45 ? (((t << 2 ^ vt(e, 0)) << 2 ^ vt(e, 1)) << 2 ^ vt(e, 2)) << 2 ^ vt(e, 3) : 0;
}
function Sv(e) {
  return e.trim();
}
function GS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function be(e, t, n) {
  return e.replace(t, n);
}
function rd(e, t) {
  return e.indexOf(t);
}
function vt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ts(e, t, n) {
  return e.slice(t, n);
}
function On(e) {
  return e.length;
}
function wf(e) {
  return e.length;
}
function Ws(e, t) {
  return t.push(e), e;
}
function QS(e, t) {
  return e.map(t).join("");
}
var ka = 1, Do = 1, wv = 0, Vt = 0, rt = 0, qo = "";
function Ea(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: ka, column: Do, length: s, return: "" };
}
function di(e, t) {
  return KS(Ea("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function XS() {
  return rt;
}
function qS() {
  return rt = Vt > 0 ? vt(qo, --Vt) : 0, Do--, rt === 10 && (Do = 1, ka--), rt;
}
function Xt() {
  return rt = Vt < wv ? vt(qo, Vt++) : 0, Do++, rt === 10 && (Do = 1, ka++), rt;
}
function Fn() {
  return vt(qo, Vt);
}
function ml() {
  return Vt;
}
function ps(e, t) {
  return ts(qo, e, t);
}
function ns(e) {
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
function bv(e) {
  return ka = Do = 1, wv = On(qo = e), Vt = 0, [];
}
function Cv(e) {
  return qo = "", e;
}
function hl(e) {
  return Sv(ps(Vt - 1, od(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ZS(e) {
  for (; (rt = Fn()) && rt < 33; )
    Xt();
  return ns(e) > 2 || ns(rt) > 3 ? "" : " ";
}
function JS(e, t) {
  for (; --t && Xt() && !(rt < 48 || rt > 102 || rt > 57 && rt < 65 || rt > 70 && rt < 97); )
    ;
  return ps(e, ml() + (t < 6 && Fn() == 32 && Xt() == 32));
}
function od(e) {
  for (; Xt(); )
    switch (rt) {
      case e:
        return Vt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && od(rt);
        break;
      case 40:
        e === 41 && od(e);
        break;
      case 92:
        Xt();
        break;
    }
  return Vt;
}
function ew(e, t) {
  for (; Xt() && e + rt !== 57; )
    if (e + rt === 84 && Fn() === 47)
      break;
  return "/*" + ps(t, Vt - 1) + "*" + Ca(e === 47 ? e : Xt());
}
function tw(e) {
  for (; !ns(Fn()); )
    Xt();
  return ps(e, Vt);
}
function nw(e) {
  return Cv(gl("", null, null, null, [""], e = bv(e), 0, [0], e));
}
function gl(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, d = 0, f = s, m = 0, c = 0, y = 0, w = 1, b = 1, g = 1, p = 0, v = "", S = o, C = i, k = r, T = v; b; )
    switch (y = p, p = Xt()) {
      case 40:
        if (y != 108 && vt(T, f - 1) == 58) {
          rd(T += be(hl(p), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += hl(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += ZS(y);
        break;
      case 92:
        T += JS(ml() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            Ws(rw(ew(Xt(), ml()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * w:
        l[u++] = On(T) * g;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            b = 0;
          case 59 + d:
            g == -1 && (T = be(T, /\f/g, "")), c > 0 && On(T) - f && Ws(c > 32 ? Rm(T + ";", r, n, f - 1) : Rm(be(T, " ", "") + ";", r, n, f - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (Ws(k = Tm(T, t, n, u, d, o, l, v, S = [], C = [], f), i), p === 123)
              if (d === 0)
                gl(T, t, k, k, S, i, f, l, C);
              else
                switch (m === 99 && vt(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gl(e, k, k, r && Ws(Tm(e, k, k, 0, 0, o, l, v, o, S = [], f), C), o, C, f, l, r ? S : C);
                    break;
                  default:
                    gl(T, k, k, k, [""], C, 0, l, C);
                }
        }
        u = d = c = 0, w = g = 1, v = T = "", f = s;
        break;
      case 58:
        f = 1 + On(T), c = y;
      default:
        if (w < 1) {
          if (p == 123)
            --w;
          else if (p == 125 && w++ == 0 && qS() == 125)
            continue;
        }
        switch (T += Ca(p), p * w) {
          case 38:
            g = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (On(T) - 1) * g, g = 1;
            break;
          case 64:
            Fn() === 45 && (T += hl(Xt())), m = Fn(), d = f = On(v = T += tw(ml())), p++;
            break;
          case 45:
            y === 45 && On(T) == 2 && (w = 0);
        }
    }
  return i;
}
function Tm(e, t, n, r, o, i, s, l, a, u, d) {
  for (var f = o - 1, m = o === 0 ? i : [""], c = wf(m), y = 0, w = 0, b = 0; y < r; ++y)
    for (var g = 0, p = ts(e, f + 1, f = HS(w = s[y])), v = e; g < c; ++g)
      (v = Sv(w > 0 ? m[g] + " " + p : be(p, /&\f/g, m[g]))) && (a[b++] = v);
  return Ea(e, t, n, o === 0 ? xf : l, a, u, d);
}
function rw(e, t, n) {
  return Ea(e, t, n, vv, Ca(XS()), ts(e, 2, -2), 0);
}
function Rm(e, t, n, r) {
  return Ea(e, t, n, Sf, ts(e, 0, r), ts(e, r + 1, -1), r);
}
function Mo(e, t) {
  for (var n = "", r = wf(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function ow(e, t, n, r) {
  switch (e.type) {
    case VS:
      if (e.children.length) break;
    case WS:
    case Sf:
      return e.return = e.return || e.value;
    case vv:
      return "";
    case xv:
      return e.return = e.value + "{" + Mo(e.children, r) + "}";
    case xf:
      e.value = e.props.join(",");
  }
  return On(n = Mo(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function iw(e) {
  var t = wf(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function sw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function kv(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var lw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Fn(), o === 38 && i === 12 && (n[r] = 1), !ns(i); )
    Xt();
  return ps(t, Vt);
}, aw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ns(o)) {
      case 0:
        o === 38 && Fn() === 12 && (n[r] = 1), t[r] += lw(Vt - 1, n, r);
        break;
      case 2:
        t[r] += hl(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Fn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ca(o);
    }
  while (o = Xt());
  return t;
}, uw = function(t, n) {
  return Cv(aw(bv(t), n));
}, Pm = /* @__PURE__ */ new WeakMap(), cw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Pm.get(r)) && !o) {
      Pm.set(t, !0);
      for (var i = [], s = uw(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, dw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ev(e, t) {
  switch (YS(e, t)) {
    case 5103:
      return we + "print-" + e + e;
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
      return we + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + e + Kl + e + Et + e + e;
    case 6828:
    case 4268:
      return we + e + Et + e + e;
    case 6165:
      return we + e + Et + "flex-" + e + e;
    case 5187:
      return we + e + be(e, /(\w+).+(:[^]+)/, we + "box-$1$2" + Et + "flex-$1$2") + e;
    case 5443:
      return we + e + Et + "flex-item-" + be(e, /flex-|-self/, "") + e;
    case 4675:
      return we + e + Et + "flex-line-pack" + be(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return we + e + Et + be(e, "shrink", "negative") + e;
    case 5292:
      return we + e + Et + be(e, "basis", "preferred-size") + e;
    case 6060:
      return we + "box-" + be(e, "-grow", "") + we + e + Et + be(e, "grow", "positive") + e;
    case 4554:
      return we + be(e, /([^-])(transform)/g, "$1" + we + "$2") + e;
    case 6187:
      return be(be(be(e, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return be(e, /(image-set\([^]*)/, we + "$1$`$1");
    case 4968:
      return be(be(e, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + Et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + we + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return be(e, /(.+)-inline(.+)/, we + "$1$2") + e;
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
      if (On(e) - 1 - t > 6) switch (vt(e, t + 1)) {
        case 109:
          if (vt(e, t + 4) !== 45) break;
        case 102:
          return be(e, /(.+:)(.+)-([^]+)/, "$1" + we + "$2-$3$1" + Kl + (vt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~rd(e, "stretch") ? Ev(be(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (vt(e, t + 1) !== 115) break;
    case 6444:
      switch (vt(e, On(e) - 3 - (~rd(e, "!important") && 10))) {
        case 107:
          return be(e, ":", ":" + we) + e;
        case 101:
          return be(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + we + (vt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + we + "$2$3$1" + Et + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (vt(e, t + 11)) {
        case 114:
          return we + e + Et + be(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return we + e + Et + be(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return we + e + Et + be(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return we + e + Et + e + e;
  }
  return e;
}
var fw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Sf:
      t.return = Ev(t.value, t.length);
      break;
    case xv:
      return Mo([di(t, {
        value: be(t.value, "@", "@" + we)
      })], o);
    case xf:
      if (t.length) return QS(t.props, function(i) {
        switch (GS(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Mo([di(t, {
              props: [be(i, /:(read-\w+)/, ":" + Kl + "$1")]
            })], o);
          case "::placeholder":
            return Mo([di(t, {
              props: [be(i, /:(plac\w+)/, ":" + we + "input-$1")]
            }), di(t, {
              props: [be(i, /:(plac\w+)/, ":" + Kl + "$1")]
            }), di(t, {
              props: [be(i, /:(plac\w+)/, Et + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, pw = [fw], mw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(w) {
      var b = w.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(w), w.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || pw, i = {}, s, l = [];
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
  var a, u = [cw, dw];
  {
    var d, f = [ow, sw(function(w) {
      d.insert(w);
    })], m = iw(u.concat(o, f)), c = function(b) {
      return Mo(nw(b), m);
    };
    a = function(b, g, p, v) {
      d = p, c(b ? b + "{" + g.styles + "}" : g.styles), v && (y.inserted[g.name] = !0);
    };
  }
  var y = {
    key: n,
    sheet: new US({
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
}, Tv = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt = typeof Symbol == "function" && Symbol.for, bf = gt ? Symbol.for("react.element") : 60103, Cf = gt ? Symbol.for("react.portal") : 60106, Ta = gt ? Symbol.for("react.fragment") : 60107, Ra = gt ? Symbol.for("react.strict_mode") : 60108, Pa = gt ? Symbol.for("react.profiler") : 60114, Ia = gt ? Symbol.for("react.provider") : 60109, Ma = gt ? Symbol.for("react.context") : 60110, kf = gt ? Symbol.for("react.async_mode") : 60111, $a = gt ? Symbol.for("react.concurrent_mode") : 60111, Oa = gt ? Symbol.for("react.forward_ref") : 60112, Aa = gt ? Symbol.for("react.suspense") : 60113, hw = gt ? Symbol.for("react.suspense_list") : 60120, Na = gt ? Symbol.for("react.memo") : 60115, La = gt ? Symbol.for("react.lazy") : 60116, gw = gt ? Symbol.for("react.block") : 60121, yw = gt ? Symbol.for("react.fundamental") : 60117, vw = gt ? Symbol.for("react.responder") : 60118, xw = gt ? Symbol.for("react.scope") : 60119;
function tn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case bf:
        switch (e = e.type, e) {
          case kf:
          case $a:
          case Ta:
          case Pa:
          case Ra:
          case Aa:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ma:
              case Oa:
              case La:
              case Na:
              case Ia:
                return e;
              default:
                return t;
            }
        }
      case Cf:
        return t;
    }
  }
}
function Rv(e) {
  return tn(e) === $a;
}
Ie.AsyncMode = kf;
Ie.ConcurrentMode = $a;
Ie.ContextConsumer = Ma;
Ie.ContextProvider = Ia;
Ie.Element = bf;
Ie.ForwardRef = Oa;
Ie.Fragment = Ta;
Ie.Lazy = La;
Ie.Memo = Na;
Ie.Portal = Cf;
Ie.Profiler = Pa;
Ie.StrictMode = Ra;
Ie.Suspense = Aa;
Ie.isAsyncMode = function(e) {
  return Rv(e) || tn(e) === kf;
};
Ie.isConcurrentMode = Rv;
Ie.isContextConsumer = function(e) {
  return tn(e) === Ma;
};
Ie.isContextProvider = function(e) {
  return tn(e) === Ia;
};
Ie.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bf;
};
Ie.isForwardRef = function(e) {
  return tn(e) === Oa;
};
Ie.isFragment = function(e) {
  return tn(e) === Ta;
};
Ie.isLazy = function(e) {
  return tn(e) === La;
};
Ie.isMemo = function(e) {
  return tn(e) === Na;
};
Ie.isPortal = function(e) {
  return tn(e) === Cf;
};
Ie.isProfiler = function(e) {
  return tn(e) === Pa;
};
Ie.isStrictMode = function(e) {
  return tn(e) === Ra;
};
Ie.isSuspense = function(e) {
  return tn(e) === Aa;
};
Ie.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ta || e === $a || e === Pa || e === Ra || e === Aa || e === hw || typeof e == "object" && e !== null && (e.$$typeof === La || e.$$typeof === Na || e.$$typeof === Ia || e.$$typeof === Ma || e.$$typeof === Oa || e.$$typeof === yw || e.$$typeof === vw || e.$$typeof === xw || e.$$typeof === gw);
};
Ie.typeOf = tn;
Tv.exports = Ie;
var Sw = Tv.exports, Pv = Sw, ww = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, bw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Iv = {};
Iv[Pv.ForwardRef] = ww;
Iv[Pv.Memo] = bw;
var Cw = !0;
function Mv(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Ef = function(t, n, r) {
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
  Cw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Tf = function(t, n, r) {
  Ef(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function kw(e) {
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
var Ew = {
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
}, Tw = /[A-Z]|^ms/g, Rw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $v = function(t) {
  return t.charCodeAt(1) === 45;
}, Im = function(t) {
  return t != null && typeof t != "boolean";
}, Zu = /* @__PURE__ */ kv(function(e) {
  return $v(e) ? e : e.replace(Tw, "-$&").toLowerCase();
}), Mm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Rw, function(r, o, i) {
          return An = {
            name: o,
            styles: i,
            next: An
          }, o;
        });
  }
  return Ew[t] !== 1 && !$v(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function rs(e, t, n) {
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
      return Pw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = An, u = n(e);
        return An = a, rs(e, t, u);
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
function Pw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += rs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Im(l) && (r += Zu(i) + ":" + Mm(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Im(s[a]) && (r += Zu(i) + ":" + Mm(i, s[a]) + ";");
      else {
        var u = rs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Zu(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var $m = /label:\s*([^\s;{]+)\s*(;|$)/g, An;
function ms(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  An = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += rs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += rs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  $m.lastIndex = 0;
  for (var u = "", d; (d = $m.exec(o)) !== null; )
    u += "-" + d[1];
  var f = kw(o) + u;
  return {
    name: f,
    styles: o,
    next: An
  };
}
var Iw = function(t) {
  return t();
}, Ov = wl.useInsertionEffect ? wl.useInsertionEffect : !1, Av = Ov || Iw, Om = Ov || x.useLayoutEffect, Nv = /* @__PURE__ */ x.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ mw({
    key: "css"
  }) : null
);
Nv.Provider;
var Rf = function(t) {
  return /* @__PURE__ */ x.forwardRef(function(n, r) {
    var o = x.useContext(Nv);
    return t(n, o, r);
  });
}, hs = /* @__PURE__ */ x.createContext({}), Pf = {}.hasOwnProperty, id = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Mw = function(t, n) {
  var r = {};
  for (var o in n)
    Pf.call(n, o) && (r[o] = n[o]);
  return r[id] = t, r;
}, $w = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ef(n, r, o), Av(function() {
    return Tf(n, r, o);
  }), null;
}, Ow = /* @__PURE__ */ Rf(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[id], i = [r], s = "";
  typeof e.className == "string" ? s = Mv(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ms(i, void 0, x.useContext(hs));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    Pf.call(e, u) && u !== "css" && u !== id && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement($w, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ x.createElement(o, a));
}), Aw = Ow, Am = function(t, n) {
  var r = arguments;
  if (n == null || !Pf.call(n, "css"))
    return x.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Aw, i[1] = Mw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return x.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Am || (Am = {}));
var Nw = /* @__PURE__ */ Rf(function(e, t) {
  var n = e.styles, r = ms([n], void 0, x.useContext(hs)), o = x.useRef();
  return Om(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Om(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Tf(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function os() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ms(t);
}
function gs() {
  var e = os.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Lw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, _w = /* @__PURE__ */ kv(
  function(e) {
    return Lw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), zw = _w, Fw = function(t) {
  return t !== "theme";
}, Nm = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? zw : Fw;
}, Lm = function(t, n, r) {
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
  return Ef(n, r, o), Av(function() {
    return Tf(n, r, o);
  }), null;
}, Bw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = Lm(t, n, r), a = l || Nm(o), u = !a("as");
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
    var w = Rf(function(b, g, p) {
      var v = u && b.as || o, S = "", C = [], k = b;
      if (b.theme == null) {
        k = {};
        for (var T in b)
          k[T] = b[T];
        k.theme = x.useContext(hs);
      }
      typeof b.className == "string" ? S = Mv(g.registered, C, b.className) : b.className != null && (S = b.className + " ");
      var E = ms(f.concat(C), g.registered, k);
      S += g.key + "-" + E.name, s !== void 0 && (S += " " + s);
      var A = u && l === void 0 ? Nm(v) : a, L = {};
      for (var M in b)
        u && M === "as" || A(M) && (L[M] = b[M]);
      return L.className = S, p && (L.ref = p), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(jw, {
        cache: g,
        serialized: E,
        isStringTag: typeof v == "string"
      }), /* @__PURE__ */ x.createElement(v, L));
    });
    return w.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", w.defaultProps = t.defaultProps, w.__emotion_real = w, w.__emotion_base = o, w.__emotion_styles = f, w.__emotion_forwardProp = l, Object.defineProperty(w, "toString", {
      value: function() {
        return "." + s;
      }
    }), w.withComponent = function(b, g) {
      var p = e(b, nd({}, n, g, {
        shouldForwardProp: Lm(w, g, !0)
      }));
      return p.apply(void 0, f);
    }, w;
  };
}, Dw = [
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
], sd = Bw.bind(null);
Dw.forEach(function(e) {
  sd[e] = sd(e);
});
function Uw(e) {
  return e == null || Object.keys(e).length === 0;
}
function Lv(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Uw(o) ? n : o) : t;
  return /* @__PURE__ */ R.jsx(Nw, {
    styles: r
  });
}
function _v(e, t) {
  return sd(e, t);
}
function Ww(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const _m = [];
function Sr(e) {
  return _m[0] = e, ms(_m);
}
var zv = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var If = Symbol.for("react.transitional.element"), Mf = Symbol.for("react.portal"), _a = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Fa = Symbol.for("react.profiler"), ja = Symbol.for("react.consumer"), Ba = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ua = Symbol.for("react.suspense"), Wa = Symbol.for("react.suspense_list"), Va = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy"), Vw = Symbol.for("react.view_transition"), Hw = Symbol.for("react.client.reference");
function hn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case If:
        switch (e = e.type, e) {
          case _a:
          case Fa:
          case za:
          case Ua:
          case Wa:
          case Vw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ba:
              case Da:
              case Ha:
              case Va:
                return e;
              case ja:
                return e;
              default:
                return t;
            }
        }
      case Mf:
        return t;
    }
  }
}
$e.ContextConsumer = ja;
$e.ContextProvider = Ba;
$e.Element = If;
$e.ForwardRef = Da;
$e.Fragment = _a;
$e.Lazy = Ha;
$e.Memo = Va;
$e.Portal = Mf;
$e.Profiler = Fa;
$e.StrictMode = za;
$e.Suspense = Ua;
$e.SuspenseList = Wa;
$e.isContextConsumer = function(e) {
  return hn(e) === ja;
};
$e.isContextProvider = function(e) {
  return hn(e) === Ba;
};
$e.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === If;
};
$e.isForwardRef = function(e) {
  return hn(e) === Da;
};
$e.isFragment = function(e) {
  return hn(e) === _a;
};
$e.isLazy = function(e) {
  return hn(e) === Ha;
};
$e.isMemo = function(e) {
  return hn(e) === Va;
};
$e.isPortal = function(e) {
  return hn(e) === Mf;
};
$e.isProfiler = function(e) {
  return hn(e) === Fa;
};
$e.isStrictMode = function(e) {
  return hn(e) === za;
};
$e.isSuspense = function(e) {
  return hn(e) === Ua;
};
$e.isSuspenseList = function(e) {
  return hn(e) === Wa;
};
$e.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === _a || e === Fa || e === za || e === Ua || e === Wa || typeof e == "object" && e !== null && (e.$$typeof === Ha || e.$$typeof === Va || e.$$typeof === Ba || e.$$typeof === ja || e.$$typeof === Da || e.$$typeof === Hw || e.getModuleId !== void 0);
};
$e.typeOf = hn;
zv.exports = $e;
var Fv = zv.exports;
function Hn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function jv(e) {
  if (/* @__PURE__ */ x.isValidElement(e) || Fv.isValidElementType(e) || !Hn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = jv(e[n]);
  }), t;
}
function mt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Hn(e) && Hn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ x.isValidElement(t[o]) || Fv.isValidElementType(t[o]) ? r[o] = t[o] : Hn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Hn(e[o]) ? r[o] = mt(e[o], t[o], n) : n.clone ? r[o] = Hn(t[o]) ? jv(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Kw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function Bv(e) {
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
  } = e, i = Kw(t), s = Object.keys(i);
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
const zm = /min-width:\s*([0-9.]+)/;
function Fm(e, t) {
  if (!e.containerQueries || !Yw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(zm)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(zm)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Yw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function Dv(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Gw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Qw(e) {
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
const Xw = {
  borderRadius: 4
};
function Uv(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function $o(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return tb(t) ? t : nb(e) ? Uo(t) : n && r ? Jw(e, t) : n !== r ? Uo(t) : rb(e, t);
}
function qw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Uo(e[t]);
  return r;
}
function Zw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Uo(e[n]));
  return t;
}
function Jw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Uo(t[r]);
  return e;
}
function eb(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function tb(e) {
  return typeof e != "object" || e === null;
}
function nb(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Uo(e) {
  return eb(e) ? Array.isArray(e) ? qw(e) : Zw(e) : e;
}
function rb(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = $o(e[n], t[n]) : e[n] = Uo(t[n]));
  return e;
}
const ob = {}, Ka = {
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
}, Yl = Bv({
  values: Ka
}), ib = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ka[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Cr(e, t, n) {
  const r = {};
  return Ya(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : $o(r, l);
  });
}
function Ya(e, t, n, r) {
  if (t ?? (t = ob), Array.isArray(n)) {
    const o = t.breakpoints ?? Yl;
    for (let i = 0; i < n.length; i += 1)
      Ju(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Yl, i = o.values ?? Ka;
    for (const s in n)
      if (Dv(o.keys, s)) {
        const l = Gw(t.containerQueries ? t : ib, s);
        l && Ju(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Ju(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Ju(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function Wv(e = Yl) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function ld(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    Uv(t[o]) && delete t[o];
  }
  return t;
}
function sb(e, ...t) {
  const r = [Wv(e), ...t].reduce((o, i) => mt(o, i), {});
  return ld(e, r);
}
function lb(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ec(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || lb(t, n), i = Object.keys(o);
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
function ab(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (Dv(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ie(e) {
  if (typeof e != "string")
    throw new Error(tr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Vv(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Ga(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Ga(e, t, n = !0, r = void 0) {
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
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ie(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function Ze(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = Ga(a, r) || {};
    return Cr(s, l, (f) => {
      const m = Vv(u, o, f, t);
      return n === !1 ? m : {
        [n]: m
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const ub = {
  internal_cache: {}
}, Gl = {
  m: "margin",
  p: "padding"
}, Bm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Dm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, is = {};
for (const e in Gl)
  is[e] = [Gl[e]];
for (const e in Gl)
  for (const t in Bm) {
    const n = Gl[e], r = Bm[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    is[e + t] = o;
  }
for (const e in Dm)
  is[e] = is[Dm[e]];
const $f = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Of = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...$f, ...Of];
function ys(e, t, n, r) {
  const o = Ga(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Qa(e) {
  return ys(e, "spacing", 8);
}
function Qr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Um = [""];
function Hv(e, t) {
  var i;
  const n = e.theme ?? ub, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Qa(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = is[s] ?? (Um[0] = s, Um), a = e[s];
    Ya(o, e.theme, a, (u, d) => {
      const f = u ? o[u] : o;
      for (let m = 0; m < l.length; m += 1)
        f[l[m]] = Qr(r, d);
    });
  }
  return o;
}
function Af(e) {
  return Hv(e, $f);
}
Af.propTypes = {};
Af.filterProps = $f;
const tt = Af;
function Nf(e) {
  return Hv(e, Of);
}
Nf.propTypes = {};
Nf.filterProps = Of;
const nt = Nf;
function Kv(e = 8, t = Qa({
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
function Xa(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && $o(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function sn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function gn(e, t) {
  return Ze({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const cb = gn("border", sn), db = gn("borderTop", sn), fb = gn("borderRight", sn), pb = gn("borderBottom", sn), mb = gn("borderLeft", sn), hb = gn("borderColor"), gb = gn("borderTopColor"), yb = gn("borderRightColor"), vb = gn("borderBottomColor"), xb = gn("borderLeftColor"), Sb = gn("outline", sn), wb = gn("outlineColor"), qa = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ys(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Qr(t, r)
    });
    return Cr(e, e.borderRadius, n);
  }
  return null;
};
qa.propTypes = {};
qa.filterProps = ["borderRadius"];
Xa(cb, db, fb, pb, mb, hb, gb, yb, vb, xb, qa, Sb, wb);
const Za = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ys(e.theme, "spacing", 8), n = (r) => ({
      gap: Qr(t, r)
    });
    return Cr(e, e.gap, n);
  }
  return null;
};
Za.propTypes = {};
Za.filterProps = ["gap"];
const Ja = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ys(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Qr(t, r)
    });
    return Cr(e, e.columnGap, n);
  }
  return null;
};
Ja.propTypes = {};
Ja.filterProps = ["columnGap"];
const eu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ys(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Qr(t, r)
    });
    return Cr(e, e.rowGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ["rowGap"];
const bb = Ze({
  prop: "gridColumn"
}), Cb = Ze({
  prop: "gridRow"
}), kb = Ze({
  prop: "gridAutoFlow"
}), Eb = Ze({
  prop: "gridAutoColumns"
}), Tb = Ze({
  prop: "gridAutoRows"
}), Rb = Ze({
  prop: "gridTemplateColumns"
}), Pb = Ze({
  prop: "gridTemplateRows"
}), Ib = Ze({
  prop: "gridTemplateAreas"
}), Mb = Ze({
  prop: "gridArea"
});
Xa(Za, Ja, eu, bb, Cb, kb, Eb, Tb, Rb, Pb, Ib, Mb);
function Oo(e, t) {
  return t === "grey" ? t : e;
}
const $b = Ze({
  prop: "color",
  themeKey: "palette",
  transform: Oo
}), Ob = Ze({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Oo
}), Ab = Ze({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Oo
});
Xa($b, Ob, Ab);
const Nb = Ka;
function Yt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Lb = Ze({
  prop: "width",
  transform: Yt
}), Lf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || Nb[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: Yt(n)
      };
    };
    return Cr(e, e.maxWidth, t);
  }
  return null;
};
Lf.filterProps = ["maxWidth"];
const _b = Ze({
  prop: "minWidth",
  transform: Yt
}), zb = Ze({
  prop: "height",
  transform: Yt
}), Fb = Ze({
  prop: "maxHeight",
  transform: Yt
}), jb = Ze({
  prop: "minHeight",
  transform: Yt
});
Ze({
  prop: "size",
  cssProperty: "width",
  transform: Yt
});
Ze({
  prop: "size",
  cssProperty: "height",
  transform: Yt
});
const Bb = Ze({
  prop: "boxSizing"
});
Xa(Lb, Lf, _b, zb, Fb, jb, Bb);
const tu = {
  // borders
  border: {
    themeKey: "borders",
    transform: sn
  },
  borderTop: {
    themeKey: "borders",
    transform: sn
  },
  borderRight: {
    themeKey: "borders",
    transform: sn
  },
  borderBottom: {
    themeKey: "borders",
    transform: sn
  },
  borderLeft: {
    themeKey: "borders",
    transform: sn
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
    transform: sn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qa
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Oo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Oo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Oo
  },
  // spacing
  p: {
    style: nt
  },
  pt: {
    style: nt
  },
  pr: {
    style: nt
  },
  pb: {
    style: nt
  },
  pl: {
    style: nt
  },
  px: {
    style: nt
  },
  py: {
    style: nt
  },
  padding: {
    style: nt
  },
  paddingTop: {
    style: nt
  },
  paddingRight: {
    style: nt
  },
  paddingBottom: {
    style: nt
  },
  paddingLeft: {
    style: nt
  },
  paddingX: {
    style: nt
  },
  paddingY: {
    style: nt
  },
  paddingInline: {
    style: nt
  },
  paddingInlineStart: {
    style: nt
  },
  paddingInlineEnd: {
    style: nt
  },
  paddingBlock: {
    style: nt
  },
  paddingBlockStart: {
    style: nt
  },
  paddingBlockEnd: {
    style: nt
  },
  m: {
    style: tt
  },
  mt: {
    style: tt
  },
  mr: {
    style: tt
  },
  mb: {
    style: tt
  },
  ml: {
    style: tt
  },
  mx: {
    style: tt
  },
  my: {
    style: tt
  },
  margin: {
    style: tt
  },
  marginTop: {
    style: tt
  },
  marginRight: {
    style: tt
  },
  marginBottom: {
    style: tt
  },
  marginLeft: {
    style: tt
  },
  marginX: {
    style: tt
  },
  marginY: {
    style: tt
  },
  marginInline: {
    style: tt
  },
  marginInlineStart: {
    style: tt
  },
  marginInlineEnd: {
    style: tt
  },
  marginBlock: {
    style: tt
  },
  marginBlockStart: {
    style: tt
  },
  marginBlockEnd: {
    style: tt
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
    style: Za
  },
  rowGap: {
    style: eu
  },
  columnGap: {
    style: Ja
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
    transform: Yt
  },
  maxWidth: {
    style: Lf
  },
  minWidth: {
    transform: Yt
  },
  height: {
    transform: Yt
  },
  maxHeight: {
    transform: Yt
  },
  minHeight: {
    transform: Yt
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
}, Db = {};
function Ub() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = Db,
      nested: o
    } = t, i = r.unstable_sxConfig ?? tu, s = {
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
      const d = r.breakpoints ?? Yl, f = Wv(d);
      for (const m in u) {
        const c = Wb(u[m], r);
        if (c != null) {
          if (typeof c != "object") {
            Wm(f, m, c, r, i);
            continue;
          }
          if (i[m]) {
            Wm(f, m, c, r, i);
            continue;
          }
          ab(d, c) ? Ya(f, t.theme, c, (y, w) => {
            f[y][m] = w;
          }) : (s.sx = c, f[m] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Fm(r, ld(d, f))
      } : Fm(r, ld(d, f));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Xr = Ub();
function Wm(e, t, n, r, o) {
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
    $o(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, d = Ga(r, s);
  Ya(e, r, n, (f, m) => {
    const c = Vv(d, u, m, t);
    a === !1 ? $o(f ? e[f] : e, c) : f ? e[f][a] = c : e[a] = c;
  });
}
function Wb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vb(e, t) {
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
function nu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = Bv(n), a = Kv(o);
  let u = mt({
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
      ...Xw,
      ...i
    }
  }, s);
  return u = Qw(u), u.applyStyles = Vb, u = t.reduce((d, f) => mt(d, f), u), u.unstable_sxConfig = {
    ...tu,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(f) {
    return Xr({
      sx: f,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function Hb(e) {
  return Object.keys(e).length === 0;
}
function _f(e = null) {
  const t = x.useContext(hs);
  return !t || Hb(t) ? e : t;
}
const Kb = nu();
function ru(e = Kb) {
  return _f(e);
}
function tc(e) {
  const t = Sr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Yv({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ru(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => tc(typeof s == "function" ? s(o) : s)) : i = tc(i)), /* @__PURE__ */ R.jsx(Lv, {
    styles: i
  });
}
const Vm = (e) => e, Yb = () => {
  let e = Vm;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Vm;
    }
  };
}, Gv = Yb();
function Qv(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Qv(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ne() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Qv(e)) && (r && (r += " "), r += t);
  return r;
}
function Gb(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = _v("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Xr);
  return /* @__PURE__ */ x.forwardRef(function(a, u) {
    const d = ru(n), {
      className: f,
      component: m = "div",
      ...c
    } = a;
    return /* @__PURE__ */ R.jsx(i, {
      as: m,
      ref: u,
      className: ne(f, o ? o(r) : r),
      theme: t && d[t] || d,
      ...c
    });
  });
}
const Qb = {
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
  const r = Qb[t];
  return r ? `${n}-${r}` : `${Gv.generate(e)}-${t}`;
}
function fe(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = me(e, o, n);
  }), r;
}
function Xv(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Sr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Sr(o.style));
  }), r;
}
const Xb = nu();
function nc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Br(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function qb(e) {
  return e ? (t, n) => n[e] : null;
}
function Zb(e, t, n) {
  e.theme = Uv(e.theme) ? n : e.theme[t] || e.theme;
}
function yl(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => yl(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Br(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Br(Sr(s), n) : s;
    }
    return qv(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Br(Sr(r.style), n) : r.style : n ? Br(Sr(r), n) : r;
}
function qv(e, t, n = [], r = void 0) {
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
    }), n.push(r ? Br(Sr(l.style(o)), r) : l.style(o))) : n.push(r ? Br(Sr(l.style), r) : l.style);
  }
  return n;
}
function Zv(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Xb,
    rootShouldForwardProp: r = nc,
    slotShouldForwardProp: o = nc
  } = e;
  function i(l) {
    Zb(l, t, n);
  }
  return (l, a = {}) => {
    Ww(l, (k) => k.filter((T) => T !== Xr));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: c = qb(tC(d)),
      ...y
    } = a, w = u && u.startsWith("Mui") || d ? "components" : "custom", b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), g = m || !1;
    let p = nc;
    d === "Root" || d === "root" ? p = r : d ? p = o : eC(l) && (p = void 0);
    const v = _v(l, {
      shouldForwardProp: p,
      label: Jb(),
      ...y
    }), S = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(E) {
          return yl(E, k, E.theme.modularCssLayers ? w : void 0);
        };
      if (Hn(k)) {
        const T = Xv(k);
        return function(A) {
          return T.variants ? yl(A, T, A.theme.modularCssLayers ? w : void 0) : A.theme.modularCssLayers ? Br(T.style, w) : T.style;
        };
      }
      return k;
    }, C = (...k) => {
      const T = [], E = k.map(S), A = [];
      if (T.push(i), u && c && A.push(function(h) {
        var N, I;
        const P = (I = (N = h.theme.components) == null ? void 0 : N[u]) == null ? void 0 : I.styleOverrides;
        if (!P)
          return null;
        const $ = {};
        for (const z in P)
          $[z] = yl(h, P[z], h.theme.modularCssLayers ? "theme" : void 0);
        return c(h, $);
      }), u && !b && A.push(function(h) {
        var $, N;
        const O = h.theme, P = (N = ($ = O == null ? void 0 : O.components) == null ? void 0 : $[u]) == null ? void 0 : N.variants;
        return P ? qv(h, P, [], h.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || A.push(Xr), Array.isArray(E[0])) {
        const _ = E.shift(), h = new Array(T.length).fill(""), O = new Array(A.length).fill("");
        let P;
        P = [...h, ..._, ...O], P.raw = [...h, ..._.raw, ...O], T.unshift(P);
      }
      const L = [...T, ...E, ...A], M = v(...L);
      return l.muiName && (M.muiName = l.muiName), M;
    };
    return v.withConfig && (C.withConfig = v.withConfig), C;
  };
}
function Jb(e, t) {
  return void 0;
}
function eC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function tC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const nC = Zv();
function Wo(e, t, n = !1) {
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
              typeof d == "function" || typeof f == "function" ? r[i][u] = (...m) => Wo((typeof d == "function" ? d(...m) : d) ?? {}, (typeof f == "function" ? f(...m) : f) ?? {}, n) : r[i][u] = Wo(d ?? {}, f ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = ne(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function rC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Wo(t.components[n].defaultProps, r);
}
function oC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = ru(r);
  return o && (i = i[o] || i), rC({
    theme: i,
    name: n,
    props: t
  });
}
const ut = typeof window < "u" ? x.useLayoutEffect : x.useEffect;
function iC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function zf(e, t = 0, n = 1) {
  return iC(e, t, n);
}
function sC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function kr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return kr(sC(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(tr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(tr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const lC = (e) => {
  const t = kr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, xi = (e, t) => {
  try {
    return lC(e);
  } catch {
    return e;
  }
};
function ou(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Jv(e) {
  e = kr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), ou({
    type: l,
    values: a
  });
}
function ad(e) {
  e = kr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? kr(Jv(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function aC(e, t) {
  const n = ad(e), r = ad(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ql(e, t) {
  return e = kr(e), t = zf(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ou(e);
}
function Mr(e, t, n) {
  try {
    return Ql(e, t);
  } catch {
    return e;
  }
}
function iu(e, t) {
  if (e = kr(e), t = zf(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ou(e);
}
function Te(e, t, n) {
  try {
    return iu(e, t);
  } catch {
    return e;
  }
}
function su(e, t) {
  if (e = kr(e), t = zf(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ou(e);
}
function Re(e, t, n) {
  try {
    return su(e, t);
  } catch {
    return e;
  }
}
function uC(e, t = 0.15) {
  return ad(e) > 0.5 ? iu(e, t) : su(e, t);
}
function Vs(e, t, n) {
  try {
    return uC(e, t);
  } catch {
    return e;
  }
}
const e0 = /* @__PURE__ */ x.createContext(null);
function Ff() {
  return x.useContext(e0);
}
const cC = typeof Symbol == "function" && Symbol.for, dC = cC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function fC(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function pC(e) {
  const {
    children: t,
    theme: n
  } = e, r = Ff(), o = x.useMemo(() => {
    const i = r === null ? {
      ...n
    } : fC(r, n);
    return i != null && (i[dC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ R.jsx(e0.Provider, {
    value: o,
    children: t
  });
}
const t0 = /* @__PURE__ */ x.createContext();
function mC({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ R.jsx(t0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const n0 = () => x.useContext(t0) ?? !1, r0 = /* @__PURE__ */ x.createContext(void 0);
function hC({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ R.jsx(r0.Provider, {
    value: e,
    children: t
  });
}
function gC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Wo(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Wo(o, r, t.components.mergeClassNameAndStyle) : r;
}
function yC({
  props: e,
  name: t
}) {
  const n = x.useContext(r0);
  return gC({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Hm = 0;
function vC(e) {
  const [t, n] = x.useState(e), r = e || t;
  return x.useEffect(() => {
    t == null && (Hm += 1, n(`mui-${Hm}`));
  }, [t]), r;
}
const xC = {
  ...wl
}, Km = xC.useId;
function qr(e) {
  if (Km !== void 0) {
    const t = Km();
    return e ?? t;
  }
  return vC(e);
}
function SC(e) {
  const t = _f(), n = qr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ut(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ R.jsx(Yv, {
    styles: o
  }) : null;
}
const Ym = {};
function Gm(e, t, n, r = !1) {
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
function o0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = _f(Ym), i = Ff() || Ym, s = Gm(r, o, n), l = Gm(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = SC(s);
  return /* @__PURE__ */ R.jsx(pC, {
    theme: l,
    children: /* @__PURE__ */ R.jsx(hs.Provider, {
      value: s,
      children: /* @__PURE__ */ R.jsx(mC, {
        value: a,
        children: /* @__PURE__ */ R.jsxs(hC, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Qm = {
  theme: void 0
};
function wC(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Qm.theme = o.theme, i = Xv(e(Qm)), t = i, n = o.theme), i;
  };
}
const jf = "mode", Bf = "color-scheme", bC = "data-color-scheme";
function CC(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = jf,
    colorSchemeStorageKey: i = Bf,
    attribute: s = bC,
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
  return /* @__PURE__ */ R.jsx("script", {
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
function kC() {
}
const EC = ({
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
      return kC;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function rc() {
}
function Xm(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function i0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function TC(e) {
  return i0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function RC(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = jf,
    colorSchemeStorageKey: s = Bf,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = EC,
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
    const E = (m == null ? void 0 : m.get(t)) || t, A = (c == null ? void 0 : c.get(n)) || n, L = (y == null ? void 0 : y.get(r)) || r;
    return {
      mode: E,
      systemMode: Xm(E),
      lightColorScheme: A,
      darkColorScheme: L
    };
  }), [g, p] = x.useState(u || !f);
  x.useEffect(() => {
    p(!0);
  }, []);
  const v = TC(w), S = x.useCallback((E) => {
    b((A) => {
      if (E === A.mode)
        return A;
      const L = E ?? t;
      return m == null || m.set(L), {
        ...A,
        mode: L,
        systemMode: Xm(L)
      };
    });
  }, [m, t]), C = x.useCallback((E) => {
    E ? typeof E == "string" ? E && !d.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : b((A) => {
      const L = {
        ...A
      };
      return i0(A, (M) => {
        M === "light" && (c == null || c.set(E), L.lightColorScheme = E), M === "dark" && (y == null || y.set(E), L.darkColorScheme = E);
      }), L;
    }) : b((A) => {
      const L = {
        ...A
      }, M = E.light === null ? n : E.light, _ = E.dark === null ? r : E.dark;
      return M && (d.includes(M) ? (L.lightColorScheme = M, c == null || c.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), _ && (d.includes(_) ? (L.darkColorScheme = _, y == null || y.set(_)) : console.error(`\`${_}\` does not exist in \`theme.colorSchemes\`.`)), L;
    }) : b((A) => (c == null || c.set(n), y == null || y.set(r), {
      ...A,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, c, y, n, r]), k = x.useCallback((E) => {
    w.mode === "system" && b((A) => {
      const L = E != null && E.matches ? "dark" : "light";
      return A.systemMode === L ? A : {
        ...A,
        systemMode: L
      };
    });
  }, [w.mode]), T = x.useRef(k);
  return T.current = k, x.useEffect(() => {
    if (typeof window.matchMedia != "function" || !f)
      return;
    const E = (...L) => T.current(...L), A = window.matchMedia("(prefers-color-scheme: dark)");
    return A.addListener(E), E(A), () => {
      A.removeListener(E);
    };
  }, [f]), x.useEffect(() => {
    if (f) {
      const E = (m == null ? void 0 : m.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && S(M || t);
      })) || rc, A = (c == null ? void 0 : c.subscribe((M) => {
        (!M || d.match(M)) && C({
          light: M
        });
      })) || rc, L = (y == null ? void 0 : y.subscribe((M) => {
        (!M || d.match(M)) && C({
          dark: M
        });
      })) || rc;
      return () => {
        E(), A(), L();
      };
    }
  }, [C, S, d, t, l, f, m, c, y]), {
    ...w,
    mode: g ? w.mode : void 0,
    systemMode: g ? w.systemMode : void 0,
    colorScheme: g ? v : void 0,
    setMode: S,
    setColorScheme: C
  };
}
const PC = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function IC(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = jf,
    colorSchemeStorageKey: o = Bf,
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
    var Le, Ce, pe, bt;
    const {
      children: p,
      theme: v,
      modeStorageKey: S = r,
      colorSchemeStorageKey: C = o,
      disableTransitionOnChange: k = i,
      storageManager: T,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: A = typeof document > "u" ? void 0 : document,
      colorSchemeNode: L = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: _ = !1,
      defaultMode: h = "system",
      forceThemeRerender: O = !1,
      noSsr: P
    } = g, $ = x.useRef(!1), N = Ff(), I = x.useContext(u), z = !!I && !M, B = x.useMemo(() => v || (typeof n == "function" ? n() : n), [v]), V = B[t], D = V || B, {
      colorSchemes: K = f,
      components: H = m,
      cssVarPrefix: te
    } = D, G = Object.keys(K).filter((Z) => !!K[Z]).join(","), oe = x.useMemo(() => G.split(","), [G]), j = typeof s == "string" ? s : s.light, J = typeof s == "string" ? s : s.dark, q = K[j] && K[J] ? h : ((Ce = (Le = K[D.defaultColorScheme]) == null ? void 0 : Le.palette) == null ? void 0 : Ce.mode) || ((pe = D.palette) == null ? void 0 : pe.mode), {
      mode: ge,
      setMode: de,
      systemMode: le,
      lightColorScheme: se,
      darkColorScheme: Ee,
      colorScheme: Oe,
      setColorScheme: xe
    } = RC({
      supportedColorSchemes: oe,
      defaultLightColorScheme: j,
      defaultDarkColorScheme: J,
      modeStorageKey: S,
      colorSchemeStorageKey: C,
      defaultMode: q,
      storageManager: T,
      storageWindow: E,
      noSsr: P
    });
    let Ye = ge, ae = Oe;
    z && (Ye = I.mode, ae = I.colorScheme);
    let je = ae || D.defaultColorScheme;
    D.vars && !O && (je = D.defaultColorScheme);
    const Je = x.useMemo(() => {
      var _e;
      const Z = ((_e = D.generateThemeVars) == null ? void 0 : _e.call(D)) || D.vars, ee = {
        ...D,
        components: H,
        colorSchemes: K,
        cssVarPrefix: te,
        vars: Z
      };
      if (typeof ee.generateSpacing == "function" && (ee.spacing = ee.generateSpacing()), je) {
        const Xe = K[je];
        Xe && typeof Xe == "object" && Object.keys(Xe).forEach((et) => {
          Xe[et] && typeof Xe[et] == "object" ? ee[et] = {
            ...ee[et],
            ...Xe[et]
          } : ee[et] = Xe[et];
        });
      }
      return l ? l(ee) : ee;
    }, [D, je, H, K, te]), dt = D.colorSchemeSelector;
    ut(() => {
      if (ae && L && dt && dt !== "media") {
        const Z = dt;
        let ee = dt;
        if (Z === "class" && (ee = ".%s"), Z === "data" && (ee = "[data-%s]"), Z != null && Z.startsWith("data-") && !Z.includes("%s") && (ee = `[${Z}="%s"]`), ee.startsWith("."))
          L.classList.remove(...oe.map((_e) => ee.substring(1).replace("%s", _e))), L.classList.add(ee.substring(1).replace("%s", ae));
        else {
          const _e = ee.replace("%s", ae).match(/\[([^\]]+)\]/);
          if (_e) {
            const [Xe, et] = _e[1].split("=");
            et || oe.forEach((Ae) => {
              L.removeAttribute(Xe.replace(ae, Ae));
            }), L.setAttribute(Xe, et ? et.replace(/"|'/g, "") : "");
          } else
            L.setAttribute(ee, ae);
        }
      }
    }, [ae, dt, L, oe]), x.useEffect(() => {
      let Z;
      if (k && $.current && A) {
        const ee = A.createElement("style");
        ee.appendChild(A.createTextNode(PC)), A.head.appendChild(ee), window.getComputedStyle(A.body), Z = setTimeout(() => {
          A.head.removeChild(ee);
        }, 1);
      }
      return () => {
        clearTimeout(Z);
      };
    }, [ae, k, A]), x.useEffect(() => ($.current = !0, () => {
      $.current = !1;
    }), []);
    const Qe = x.useMemo(() => ({
      allColorSchemes: oe,
      colorScheme: ae,
      darkColorScheme: Ee,
      lightColorScheme: se,
      mode: Ye,
      setColorScheme: xe,
      setMode: de,
      systemMode: le
    }), [oe, ae, Ee, se, Ye, xe, de, le, Je.colorSchemeSelector]);
    let wt = !0;
    (_ || D.cssVariables === !1 || z && (N == null ? void 0 : N.cssVarPrefix) === te) && (wt = !1);
    const Pt = /* @__PURE__ */ R.jsxs(x.Fragment, {
      children: [/* @__PURE__ */ R.jsx(o0, {
        themeId: V ? t : void 0,
        theme: Je,
        children: p
      }), wt && /* @__PURE__ */ R.jsx(Lv, {
        styles: ((bt = Je.generateStyleSheets) == null ? void 0 : bt.call(Je)) || []
      })]
    });
    return z ? Pt : /* @__PURE__ */ R.jsx(u.Provider, {
      value: Qe,
      children: Pt
    });
  }
  const y = typeof s == "string" ? s : s.light, w = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: c,
    useColorScheme: d,
    getInitColorSchemeScript: (g) => CC({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: y,
      defaultDarkColorScheme: w,
      modeStorageKey: r,
      ...g
    })
  };
}
function MC(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const $C = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), qm = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if ($C.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, OC = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, AC = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function oc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return OC(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, f = AC(l, a);
        Object.assign(o, {
          [d]: f
        }), qm(i, l, `var(${d})`, u), qm(s, l, `var(${d}, ${f})`, u);
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
function NC(e, t = {}) {
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
  } = oc(u, t);
  let c = m;
  const y = {}, {
    [a]: w,
    ...b
  } = s;
  if (Object.entries(b || {}).forEach(([S, C]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: E
    } = oc(C, t);
    c = mt(c, E), y[S] = {
      css: T,
      vars: k
    };
  }), w) {
    const {
      css: S,
      vars: C,
      varsWithDefaults: k
    } = oc(w, t);
    c = mt(c, k), y[a] = {
      css: S,
      vars: C
    };
  }
  function g(S, C) {
    var T, E;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), S) {
      if (k === "media")
        return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (T = s[S]) == null ? void 0 : T.palette) == null ? void 0 : E.mode) || S})`]: {
            ":root": C
          }
        };
      if (k)
        return e.defaultColorScheme === S ? `:root, ${k.replace("%s", String(S))}` : k.replace("%s", String(S));
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
        vars: C
      }]) => {
        S = mt(S, C);
      }), S;
    },
    generateStyleSheets: () => {
      var A, L;
      const S = [], C = e.defaultColorScheme || "light";
      function k(M, _) {
        Object.keys(_).length && S.push(typeof M == "string" ? {
          [M]: {
            ..._
          }
        } : M);
      }
      k(n(void 0, {
        ...f
      }), f);
      const {
        [C]: T,
        ...E
      } = y;
      if (T) {
        const {
          css: M
        } = T, _ = (L = (A = s[C]) == null ? void 0 : A.palette) == null ? void 0 : L.mode, h = !r && _ ? {
          colorScheme: _,
          ...M
        } : {
          ...M
        };
        k(n(C, {
          ...h
        }), h);
      }
      return Object.entries(E).forEach(([M, {
        css: _
      }]) => {
        var P, $;
        const h = ($ = (P = s[M]) == null ? void 0 : P.palette) == null ? void 0 : $.mode, O = !r && h ? {
          colorScheme: h,
          ..._
        } : {
          ..._
        };
        k(n(M, {
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
function LC(e) {
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
function ic(e, t) {
  var n, r, o;
  return /* @__PURE__ */ x.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const _C = nu(), zC = nC("div", {
  name: "MuiStack",
  slot: "Root"
});
function FC(e) {
  return oC({
    props: e,
    name: "MuiStack",
    defaultTheme: _C
  });
}
function jC(e, t) {
  const n = x.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ x.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const BC = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], DC = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Cr({
      theme: t
    }, ec({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Qa(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = ec({
      values: e.direction,
      base: o
    }), s = ec({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, d) => {
      if (!i[a]) {
        const m = u > 0 ? i[d[u - 1]] : "column";
        i[a] = m;
      }
    }), n = mt(n, Cr({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: Qr(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${BC(u ? i[u] : e.direction)}`]: Qr(r, a)
      }
    }));
  }
  return n = sb(t.breakpoints, n), n;
};
function UC(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = zC,
    useThemeProps: n = FC,
    componentName: r = "MuiStack"
  } = e, o = () => he({
    root: ["root"]
  }, (a) => me(r, a), {}), i = t(DC);
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
    return /* @__PURE__ */ R.jsx(i, {
      as: f,
      ownerState: v,
      ref: u,
      className: ne(S.root, b),
      ...p,
      children: y ? jC(w, y) : w
    });
  });
}
function s0() {
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
      paper: es.white,
      default: es.white
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
const l0 = s0();
function a0() {
  return {
    text: {
      primary: es.white,
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
      active: es.white,
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
const ud = a0();
function Zm(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = su(e.main, o) : t === "dark" && (e.dark = iu(e.main, i)));
}
function Jm(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function WC(e = "light") {
  return e === "dark" ? {
    main: so[200],
    light: so[50],
    dark: so[400]
  } : {
    main: so[700],
    light: so[400],
    dark: so[800]
  };
}
function VC(e = "light") {
  return e === "dark" ? {
    main: io[200],
    light: io[50],
    dark: io[400]
  } : {
    main: io[500],
    light: io[300],
    dark: io[700]
  };
}
function HC(e = "light") {
  return e === "dark" ? {
    main: oo[500],
    light: oo[300],
    dark: oo[700]
  } : {
    main: oo[700],
    light: oo[400],
    dark: oo[800]
  };
}
function KC(e = "light") {
  return e === "dark" ? {
    main: lo[400],
    light: lo[300],
    dark: lo[700]
  } : {
    main: lo[700],
    light: lo[500],
    dark: lo[900]
  };
}
function YC(e = "light") {
  return e === "dark" ? {
    main: ao[400],
    light: ao[300],
    dark: ao[700]
  } : {
    main: ao[800],
    light: ao[500],
    dark: ao[900]
  };
}
function GC(e = "light") {
  return e === "dark" ? {
    main: ci[400],
    light: ci[300],
    dark: ci[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ci[500],
    dark: ci[900]
  };
}
function QC(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Df(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || WC(t), l = e.secondary || VC(t), a = e.error || HC(t), u = e.info || KC(t), d = e.success || YC(t), f = e.warning || GC(t);
  function m(b) {
    return o ? QC(b) : aC(b, ud.text.primary) >= n ? ud.text.primary : l0.text.primary;
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
      throw new Error(tr(11, g ? ` (${g})` : "", p));
    if (typeof b.main != "string")
      throw new Error(tr(12, g ? ` (${g})` : "", JSON.stringify(b.main)));
    return o ? (Jm(o, b, "light", v, r), Jm(o, b, "dark", S, r)) : (Zm(b, "light", v, r), Zm(b, "dark", S, r)), b.contrastText || (b.contrastText = m(b.main)), b;
  };
  let y;
  return t === "light" ? y = s0() : t === "dark" && (y = a0()), mt({
    // A collection of common colors.
    common: {
      ...es
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
    grey: jS,
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
const lu = "--_focusVisible-offset", Uf = "--_focusVisible-behavior", u0 = "--_focusVisible-shadow", XC = `var(${lu}, 1)`, qC = `var(${Uf}, )`, ZC = {
  [lu]: 1,
  [Uf]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function JC(e) {
  return {
    [u0]: e
  };
}
function c0(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? mt(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function ek(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(lu);
}
function Wf(e, t) {
  return tk({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${u0}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function tk(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(lu)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${XC} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(Uf) && (e.boxShadow = `${qC} ${e.boxShadow}`), e;
}
function nk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function rk(e, t) {
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
function ok(e) {
  return Math.round(e * 1e5) / 1e5;
}
const eh = {
  textTransform: "uppercase"
}, th = '"Roboto", "Helvetica", "Arial", sans-serif';
function d0(e, t) {
  const {
    fontFamily: n = th,
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
    ...n === th ? {
      letterSpacing: `${ok(v / g)}em`
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
    button: y(s, 14, 1.75, 0.4, eh),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, eh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return mt({
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
const ik = 0.2, sk = 0.14, lk = 0.12;
function Be(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ik})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${sk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${lk})`].join(",");
}
const ak = ["none", Be(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Be(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Be(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Be(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Be(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Be(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Be(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Be(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Be(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Be(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Be(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Be(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Be(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Be(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Be(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Be(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Be(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Be(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Be(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Be(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Be(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Be(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Be(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Be(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], uk = ["all"], ck = {}, dk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, fk = {
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
function nh(e) {
  return `${Math.round(e)}ms`;
}
function pk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function mk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...dk,
    ...t.easing
  }, r = {
    ...fk,
    ...t.duration
  }, o = (s = uk, l = ck) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: d = 0,
      ...f
    } = l;
    return (Array.isArray(s) ? s : [s]).map((m) => `${m} ${typeof a == "string" ? a : nh(a)} ${u} ${typeof d == "string" ? d : nh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: pk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const hk = {};
function gk(e = hk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const yk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function vk(e) {
  return Hn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function f0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !vk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Hn(l) && (r[s] = {
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
function rh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const xk = (e) => {
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
function Sk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Ql(t, xk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${rh(n)})` : su(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${rh(n)})` : iu(t, n);
    }
  });
}
function cd(e = {}, ...t) {
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
    throw new Error(tr(22));
  const m = Df({
    ...i,
    colorSpace: d
  }), c = nu(e);
  let y = mt(c, {
    mixins: rk(c.breakpoints, r),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ak.slice(),
    typography: d0(m, a),
    motion: gk(s),
    transitions: mk(l),
    zIndex: {
      ...yk
    }
  });
  return y = mt(y, f), y = t.reduce((w, b) => mt(w, b), y), delete y.transitions.reducedMotion, y.focusVisible != null && y.focusVisible !== !1 && (y.focusVisible = Wf(y.focusVisible, y.palette.primary.main)), y.unstable_sxConfig = {
    ...tu,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(b) {
    return Xr({
      sx: b,
      theme: this
    });
  }, y.toRuntimeSource = f0, Sk(y), y;
}
function dd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const wk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = dd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function p0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function m0(e) {
  return e === "dark" ? wk : [];
}
function bk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Df({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...p0(s.mode),
      ...n
    },
    overlays: r || m0(s.mode),
    ...i
  };
}
function Ck(e) {
  var t;
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const kk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ek = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return kk(e.cssVarPrefix).forEach((l) => {
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
function Tk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Si(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Jv(e);
}
function Dn(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = xi(Si(e[t])));
}
function Rk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Pn = (e) => {
  try {
    return e();
  } catch {
  }
}, Pk = (e = "mui") => MC(e);
function sc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = bk({
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
  } = cd({
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
      ...p0(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || m0(i)
  }, l;
}
function Ik(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Ck,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, f = Object.keys(n)[0], m = r || (n.light && f !== "light" ? "light" : f), c = Pk(i), {
    [m]: y,
    light: w,
    dark: b,
    ...g
  } = n, p = {
    ...g
  };
  let v = y;
  if ((m === "dark" && !("dark" in n) || m === "light" && !("light" in n)) && (v = !0), !v)
    throw new Error(tr(21, m));
  let S;
  s && (S = "oklch");
  const C = sc(S, p, v, d, m);
  w && !p.light && sc(S, p, w, void 0, "light"), b && !p.dark && sc(S, p, b, void 0, "dark");
  let k = {
    defaultColorScheme: m,
    ...C,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: c,
    colorSchemes: p,
    font: {
      ...nk(C.typography),
      ...C.font
    },
    spacing: Rk(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((_) => {
    const h = k.colorSchemes[_].palette, O = ($) => {
      const N = $.split("-"), I = N[1], z = N[2];
      return c($, h[I][z]);
    };
    h.mode === "light" && (F(h.common, "background", "#fff"), F(h.common, "onBackground", "#000")), h.mode === "dark" && (F(h.common, "background", "#000"), F(h.common, "onBackground", "#fff"));
    function P($, N, I) {
      if (S) {
        let z;
        return $ === Mr && (z = `transparent ${((1 - I) * 100).toFixed(0)}%`), $ === Te && (z = `#000 ${(I * 100).toFixed(0)}%`), $ === Re && (z = `#fff ${(I * 100).toFixed(0)}%`), `color-mix(in ${S}, ${N}, ${z})`;
      }
      return $(N, I);
    }
    if (Tk(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      F(h.Alert, "errorColor", P(Te, s ? c("palette-error-light") : h.error.light, 0.6)), F(h.Alert, "infoColor", P(Te, s ? c("palette-info-light") : h.info.light, 0.6)), F(h.Alert, "successColor", P(Te, s ? c("palette-success-light") : h.success.light, 0.6)), F(h.Alert, "warningColor", P(Te, s ? c("palette-warning-light") : h.warning.light, 0.6)), F(h.Alert, "errorFilledBg", O("palette-error-main")), F(h.Alert, "infoFilledBg", O("palette-info-main")), F(h.Alert, "successFilledBg", O("palette-success-main")), F(h.Alert, "warningFilledBg", O("palette-warning-main")), F(h.Alert, "errorFilledColor", Pn(() => h.getContrastText(h.error.main))), F(h.Alert, "infoFilledColor", Pn(() => h.getContrastText(h.info.main))), F(h.Alert, "successFilledColor", Pn(() => h.getContrastText(h.success.main))), F(h.Alert, "warningFilledColor", Pn(() => h.getContrastText(h.warning.main))), F(h.Alert, "errorStandardBg", P(Re, s ? c("palette-error-light") : h.error.light, 0.9)), F(h.Alert, "infoStandardBg", P(Re, s ? c("palette-info-light") : h.info.light, 0.9)), F(h.Alert, "successStandardBg", P(Re, s ? c("palette-success-light") : h.success.light, 0.9)), F(h.Alert, "warningStandardBg", P(Re, s ? c("palette-warning-light") : h.warning.light, 0.9)), F(h.Alert, "errorIconColor", O("palette-error-main")), F(h.Alert, "infoIconColor", O("palette-info-main")), F(h.Alert, "successIconColor", O("palette-success-main")), F(h.Alert, "warningIconColor", O("palette-warning-main")), F(h.AppBar, "defaultBg", O("palette-grey-100")), F(h.Avatar, "defaultBg", O("palette-grey-400")), F(h.Button, "inheritContainedBg", O("palette-grey-300")), F(h.Button, "inheritContainedHoverBg", O("palette-grey-A100")), F(h.Chip, "defaultBorder", O("palette-grey-400")), F(h.Chip, "defaultAvatarColor", O("palette-grey-700")), F(h.Chip, "defaultIconColor", O("palette-grey-700")), F(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(h.LinearProgress, "primaryBg", P(Re, s ? c("palette-primary-main") : h.primary.main, 0.62)), F(h.LinearProgress, "secondaryBg", P(Re, s ? c("palette-secondary-main") : h.secondary.main, 0.62)), F(h.LinearProgress, "errorBg", P(Re, s ? c("palette-error-main") : h.error.main, 0.62)), F(h.LinearProgress, "infoBg", P(Re, s ? c("palette-info-main") : h.info.main, 0.62)), F(h.LinearProgress, "successBg", P(Re, s ? c("palette-success-main") : h.success.main, 0.62)), F(h.LinearProgress, "warningBg", P(Re, s ? c("palette-warning-light") : h.warning.main, 0.62)), F(h.Skeleton, "bg", S ? P(Mr, s ? c("palette-text-primary") : h.text.primary, 0.11) : `rgba(${O("palette-text-primaryChannel")} / 0.11)`), F(h.Slider, "primaryTrack", P(Re, s ? c("palette-primary-main") : h.primary.main, 0.62)), F(h.Slider, "secondaryTrack", P(Re, s ? c("palette-secondary-main") : h.secondary.main, 0.62)), F(h.Slider, "errorTrack", P(Re, s ? c("palette-error-main") : h.error.main, 0.62)), F(h.Slider, "infoTrack", P(Re, s ? c("palette-info-main") : h.info.main, 0.62)), F(h.Slider, "successTrack", P(Re, s ? c("palette-success-main") : h.success.main, 0.62)), F(h.Slider, "warningTrack", P(Re, s ? c("palette-warning-main") : h.warning.main, 0.62));
      const $ = S ? P(Te, s ? c("palette-background-default") : h.background.default, 0.6825) : Vs(h.background.default, 0.8);
      F(h.SnackbarContent, "bg", $), F(h.SnackbarContent, "color", Pn(() => S ? ud.text.primary : h.getContrastText($))), F(h.SpeedDialAction, "fabHoverBg", Vs(h.background.paper, 0.15)), F(h.StepConnector, "border", O("palette-grey-400")), F(h.StepContent, "border", O("palette-grey-400")), F(h.Switch, "defaultColor", O("palette-common-white")), F(h.Switch, "defaultDisabledColor", O("palette-grey-100")), F(h.Switch, "primaryDisabledColor", P(Re, s ? c("palette-primary-main") : h.primary.main, 0.62)), F(h.Switch, "secondaryDisabledColor", P(Re, s ? c("palette-secondary-main") : h.secondary.main, 0.62)), F(h.Switch, "errorDisabledColor", P(Re, s ? c("palette-error-main") : h.error.main, 0.62)), F(h.Switch, "infoDisabledColor", P(Re, s ? c("palette-info-main") : h.info.main, 0.62)), F(h.Switch, "successDisabledColor", P(Re, s ? c("palette-success-main") : h.success.main, 0.62)), F(h.Switch, "warningDisabledColor", P(Re, s ? c("palette-warning-main") : h.warning.main, 0.62)), F(h.TableCell, "border", P(Re, Mr(s ? c("palette-divider") : h.divider, 1), 0.88)), F(h.Tooltip, "bg", P(Mr, s ? c("palette-grey-700") : h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      F(h.Alert, "errorColor", P(Re, s ? c("palette-error-light") : h.error.light, 0.6)), F(h.Alert, "infoColor", P(Re, s ? c("palette-info-light") : h.info.light, 0.6)), F(h.Alert, "successColor", P(Re, s ? c("palette-success-light") : h.success.light, 0.6)), F(h.Alert, "warningColor", P(Re, s ? c("palette-warning-light") : h.warning.light, 0.6)), F(h.Alert, "errorFilledBg", O("palette-error-dark")), F(h.Alert, "infoFilledBg", O("palette-info-dark")), F(h.Alert, "successFilledBg", O("palette-success-dark")), F(h.Alert, "warningFilledBg", O("palette-warning-dark")), F(h.Alert, "errorFilledColor", Pn(() => h.getContrastText(h.error.dark))), F(h.Alert, "infoFilledColor", Pn(() => h.getContrastText(h.info.dark))), F(h.Alert, "successFilledColor", Pn(() => h.getContrastText(h.success.dark))), F(h.Alert, "warningFilledColor", Pn(() => h.getContrastText(h.warning.dark))), F(h.Alert, "errorStandardBg", P(Te, s ? c("palette-error-light") : h.error.light, 0.9)), F(h.Alert, "infoStandardBg", P(Te, s ? c("palette-info-light") : h.info.light, 0.9)), F(h.Alert, "successStandardBg", P(Te, s ? c("palette-success-light") : h.success.light, 0.9)), F(h.Alert, "warningStandardBg", P(Te, s ? c("palette-warning-light") : h.warning.light, 0.9)), F(h.Alert, "errorIconColor", O("palette-error-main")), F(h.Alert, "infoIconColor", O("palette-info-main")), F(h.Alert, "successIconColor", O("palette-success-main")), F(h.Alert, "warningIconColor", O("palette-warning-main")), F(h.AppBar, "defaultBg", O("palette-grey-900")), F(h.AppBar, "darkBg", O("palette-background-paper")), F(h.AppBar, "darkColor", O("palette-text-primary")), F(h.Avatar, "defaultBg", O("palette-grey-600")), F(h.Button, "inheritContainedBg", O("palette-grey-800")), F(h.Button, "inheritContainedHoverBg", O("palette-grey-700")), F(h.Chip, "defaultBorder", O("palette-grey-700")), F(h.Chip, "defaultAvatarColor", O("palette-grey-300")), F(h.Chip, "defaultIconColor", O("palette-grey-300")), F(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(h.LinearProgress, "primaryBg", P(Te, s ? c("palette-primary-main") : h.primary.main, 0.5)), F(h.LinearProgress, "secondaryBg", P(Te, s ? c("palette-secondary-main") : h.secondary.main, 0.5)), F(h.LinearProgress, "errorBg", P(Te, s ? c("palette-error-main") : h.error.main, 0.5)), F(h.LinearProgress, "infoBg", P(Te, s ? c("palette-info-main") : h.info.main, 0.5)), F(h.LinearProgress, "successBg", P(Te, s ? c("palette-success-main") : h.success.main, 0.5)), F(h.LinearProgress, "warningBg", P(Te, s ? c("palette-warning-main") : h.warning.main, 0.5)), F(h.Skeleton, "bg", S ? P(Mr, s ? c("palette-text-primary") : h.text.primary, 0.13) : `rgba(${O("palette-text-primaryChannel")} / 0.13)`), F(h.Slider, "primaryTrack", P(Te, s ? c("palette-primary-main") : h.primary.main, 0.5)), F(h.Slider, "secondaryTrack", P(Te, s ? c("palette-secondary-main") : h.secondary.main, 0.5)), F(h.Slider, "errorTrack", P(Te, s ? c("palette-error-main") : h.error.main, 0.5)), F(h.Slider, "infoTrack", P(Te, s ? c("palette-info-main") : h.info.main, 0.5)), F(h.Slider, "successTrack", P(Te, s ? c("palette-success-main") : h.success.main, 0.5)), F(h.Slider, "warningTrack", P(Te, s ? c("palette-warning-light") : h.warning.main, 0.5));
      const $ = S ? P(Re, s ? c("palette-background-default") : h.background.default, 0.985) : Vs(h.background.default, 0.98);
      F(h.SnackbarContent, "bg", $), F(h.SnackbarContent, "color", Pn(() => S ? l0.text.primary : h.getContrastText($))), F(h.SpeedDialAction, "fabHoverBg", Vs(h.background.paper, 0.15)), F(h.StepConnector, "border", O("palette-grey-600")), F(h.StepContent, "border", O("palette-grey-600")), F(h.Switch, "defaultColor", O("palette-grey-300")), F(h.Switch, "defaultDisabledColor", O("palette-grey-600")), F(h.Switch, "primaryDisabledColor", P(Te, s ? c("palette-primary-main") : h.primary.main, 0.55)), F(h.Switch, "secondaryDisabledColor", P(Te, s ? c("palette-secondary-main") : h.secondary.main, 0.55)), F(h.Switch, "errorDisabledColor", P(Te, s ? c("palette-error-main") : h.error.main, 0.55)), F(h.Switch, "infoDisabledColor", P(Te, s ? c("palette-info-main") : h.info.main, 0.55)), F(h.Switch, "successDisabledColor", P(Te, s ? c("palette-success-main") : h.success.main, 0.55)), F(h.Switch, "warningDisabledColor", P(Te, s ? c("palette-warning-light") : h.warning.main, 0.55)), F(h.TableCell, "border", P(Te, Mr(s ? c("palette-divider") : h.divider, 1), 0.68)), F(h.Tooltip, "bg", P(Mr, s ? c("palette-grey-700") : h.grey[700], 0.92));
    }
    s || (Dn(h.background, "default"), Dn(h.background, "paper"), Dn(h.common, "background"), Dn(h.common, "onBackground"), Dn(h, "divider")), Object.keys(h).forEach(($) => {
      const N = h[$];
      $ !== "tonalOffset" && !s && N && typeof N == "object" && (N.main && F(h[$], "mainChannel", xi(Si(N.main))), N.light && F(h[$], "lightChannel", xi(Si(N.light))), N.dark && F(h[$], "darkChannel", xi(Si(N.dark))), N.contrastText && F(h[$], "contrastTextChannel", xi(Si(N.contrastText))), $ === "text" && (Dn(h[$], "primary"), Dn(h[$], "secondary")), $ === "action" && (N.active && Dn(h[$], "active"), N.selected && Dn(h[$], "selected")));
    });
  }), k = t.reduce((_, h) => mt(_, h), k);
  const T = c0(e.focusVisible, t);
  T != null && T !== !1 && (k.focusVisible = Wf(T, c("palette-primary-main")));
  const E = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Ek(k),
    enableContrastVars: s
  }, {
    vars: A,
    generateThemeVars: L,
    generateStyleSheets: M
  } = NC(k, E);
  return k.vars = A, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([_, h]) => {
    k[_] = h;
  }), k.generateThemeVars = L, k.generateStyleSheets = M, k.generateSpacing = function() {
    return Kv(d.spacing, Qa(this));
  }, k.getColorSchemeSelector = LC(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...tu,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(h) {
    return Xr({
      sx: h,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = f0, k;
}
function oh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Df({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function au(e = {}, ...t) {
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
      return cd(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const f = cd({
      ...e,
      palette: d
    }, ...t);
    if (f.defaultColorScheme = l, f.colorSchemes = u, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: f.palette
    }, oh(f, "dark", u.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: f.palette
    }, oh(f, "light", u.light)), f.focusVisible != null && f.focusVisible !== !1) {
      let m = f.focusVisible;
      const c = c0(e.focusVisible, t), y = c && typeof c == "object" ? c.outlineColor : void 0;
      if (!y || ek(c) && y === f.palette.primary.main) {
        const {
          outlineColor: w,
          ...b
        } = m;
        m = b;
      }
      Object.keys(f.colorSchemes).forEach((w) => {
        var g, p;
        const b = (p = (g = f.colorSchemes) == null ? void 0 : g[w]) == null ? void 0 : p.palette;
        b != null && b.primary && (f.colorSchemes[w].focusVisible = Wf(m, b.primary.main));
      });
    }
    return f;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), Ik({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Xl(e) {
  return typeof e == "string";
}
function h0(e, t = 166) {
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
function it(e) {
  const t = x.useRef(e);
  return ut(() => {
    t.current = e;
  }), x.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function ht(e) {
  return e && e.ownerDocument || document;
}
function nr(e) {
  return ht(e).defaultView || window;
}
function Hs(e) {
  return parseInt(e, 10) || 0;
}
const Mk = {
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
function $k(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ih(e) {
  return $k(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Ok = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = x.useRef(l != null), d = x.useRef(null), f = ct(n, d), m = x.useRef(null), c = x.useRef(null), y = x.useCallback(() => {
    const v = d.current, S = c.current;
    if (!v || !S)
      return;
    const k = nr(v).getComputedStyle(v);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    S.style.width = k.width, S.value = v.value || t.placeholder || "x", S.value.slice(-1) === `
` && (S.value += " ");
    const T = k.boxSizing, E = Hs(k.paddingBottom) + Hs(k.paddingTop), A = Hs(k.borderBottomWidth) + Hs(k.borderTopWidth), L = S.scrollHeight;
    S.value = "x";
    const M = S.scrollHeight;
    let _ = L;
    i && (_ = Math.max(Number(i) * M, _)), o && (_ = Math.min(Number(o) * M, _)), _ = Math.max(_, M);
    const h = _ + (T === "border-box" ? E + A : 0), O = Math.abs(_ - L) <= 1;
    return {
      outerHeightStyle: h,
      overflowing: O
    };
  }, [o, i, t.placeholder]), w = it(() => {
    const v = d.current, S = y();
    if (!v || !S || ih(S))
      return !1;
    const C = S.outerHeightStyle;
    return m.current != null && m.current !== C;
  }), b = x.useCallback(() => {
    const v = d.current, S = y();
    if (!v || !S || ih(S))
      return;
    const C = S.outerHeightStyle;
    m.current !== C && (m.current = C, v.style.height = `${C}px`), v.style.overflow = S.overflowing ? "hidden" : "";
  }, [y]), g = x.useRef(-1);
  ut(() => {
    const v = h0(b), S = d == null ? void 0 : d.current;
    if (!S)
      return;
    const C = nr(S);
    C.addEventListener("resize", v);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      w() && (k.unobserve(S), cancelAnimationFrame(g.current), b(), g.current = requestAnimationFrame(() => {
        k.observe(S);
      }));
    }), k.observe(S)), () => {
      v.clear(), cancelAnimationFrame(g.current), C.removeEventListener("resize", v), k && k.disconnect();
    };
  }, [y, b, w]), ut(() => {
    b();
  });
  const p = (v) => {
    u || b();
    const S = v.target, C = S.value.length, k = S.value.endsWith(`
`), T = S.selectionStart === C;
    k && T && S.setSelectionRange(C, C), r && r(v);
  };
  return /* @__PURE__ */ R.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ R.jsx("textarea", {
      value: l,
      onChange: p,
      ref: f,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ R.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: c,
      tabIndex: -1,
      style: {
        ...Mk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), Vf = /* @__PURE__ */ x.createContext(void 0);
function Zo({
  props: e,
  states: t
}) {
  const n = x.useContext(Vf), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Hf = au();
function vs() {
  const e = ru(Hf);
  return e[zn] || e;
}
function Ak(e) {
  return /* @__PURE__ */ R.jsx(Yv, {
    ...e,
    defaultTheme: Hf,
    themeId: zn
  });
}
function g0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const yn = (e) => g0(e) && e !== "classes", Y = Zv({
  themeId: zn,
  defaultTheme: Hf,
  rootShouldForwardProp: yn
});
function Nk(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ R.jsx(Ak, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const Se = wC;
function ye(e) {
  return yC(e);
}
function Gn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function sh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function ql(e, t = !1) {
  return e && (sh(e.value) && e.value !== "" || t && sh(e.defaultValue) && e.defaultValue !== "");
}
function Lk(e) {
  return e.startAdornment;
}
function _k(e) {
  return me("MuiInputBase", e);
}
const Kt = fe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), zk = {
  transition: "none"
};
function Fk(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Kf = (e) => e.scrollTop, y0 = {}, jk = ["all"], Bk = {};
function ln(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function v0(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Zl(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = y0
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Yf(e, t) {
  var r;
  const n = t ?? zk;
  return Fk((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function st(e, t = jk, n = Bk) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Yf(e);
  if (r === void 0)
    return o ?? y0;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var lh;
const fd = "mui-auto-fill", Jl = "mui-auto-fill-cancel", uu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ie(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, cu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, Dk = (e) => {
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
    root: ["root", `color${ie(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", m && m !== "medium" && `size${ie(m)}`, d && "multiline", c && "adornedStart", i && "adornedEnd", u && "hiddenLabel", f && "readOnly"],
    input: ["input", r && "disabled", y === "search" && "inputTypeSearch", f && "readOnly"]
  };
  return he(w, _k, t);
}, du = Y("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: uu
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
  [`&.${Kt.disabled}`]: {
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
}))), fu = Y("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: cu
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
    ...st(e, "opacity", {
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
    [`label[data-shrink=false] + .${Kt.formControl} &`]: {
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
    [`&.${Kt.disabled}`]: {
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
        animationName: Jl,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: fd
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
})), ah = Nk({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${fd}`]: {
    from: {
      animationName: fd
    }
  },
  [`@keyframes ${Jl}`]: {
    from: {
      animationName: Jl
    }
  }
}), Gf = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    maxRows: C,
    minRows: k,
    multiline: T = !1,
    name: E,
    onBlur: A,
    onChange: L,
    onClick: M,
    onFocus: _,
    onKeyDown: h,
    onKeyUp: O,
    placeholder: P,
    readOnly: $,
    renderSuffix: N,
    rows: I,
    size: z,
    slotProps: B = {},
    slots: V = {},
    startAdornment: D,
    type: K = "text",
    value: H,
    ...te
  } = r, G = p.value != null ? p.value : H, {
    current: oe
  } = x.useRef(G != null), j = x.useRef(), J = x.useCallback((Z) => {
  }, []), q = ct(j, v, p.ref, J), [ge, de] = x.useState(!1), [le, se] = Zo({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  le.focused = se ? se.focused : ge, x.useEffect(() => {
    !se && f && ge && (de(!1), A && A());
  }, [se, f, ge, A]);
  const Ee = se && se.onFilled, Oe = se && se.onEmpty, xe = x.useCallback((Z) => {
    ql(Z) ? Ee && Ee() : Oe && Oe();
  }, [Ee, Oe]);
  ut(() => {
    oe && xe({
      value: G
    });
  }, [G, xe, oe]), ut(() => {
    if (!l)
      return;
    const Z = j.current;
    if (!Z)
      return;
    const ee = ht(Z), _e = Gn(ee), Xe = _e == null || _e === ee.body || _e === ee.documentElement;
    Z === _e ? se && se.onFocus ? se.onFocus() : de(!0) : Xe && Z.focus();
  }, [l]);
  const Ye = (Z) => {
    _ && _(Z), p.onFocus && p.onFocus(Z), se && se.onFocus ? se.onFocus(Z) : de(!0);
  }, ae = (Z) => {
    A && A(Z), p.onBlur && p.onBlur(Z), se && se.onBlur ? se.onBlur(Z) : de(!1);
  }, je = (Z, ...ee) => {
    if (!oe) {
      const _e = Z.target || j.current;
      if (_e == null)
        throw new Error(tr(1));
      xe({
        value: _e.value
      });
    }
    p.onChange && p.onChange(Z, ...ee), L && L(Z, ...ee);
  };
  x.useEffect(() => {
    xe(j.current);
  }, []);
  const Je = (Z) => {
    j.current && Z.currentTarget === Z.target && j.current.focus(), M && M(Z);
  };
  let dt = g, Qe = p;
  T && dt === "input" && (I ? Qe = {
    type: void 0,
    minRows: I,
    maxRows: I,
    ...Qe
  } : Qe = {
    type: void 0,
    maxRows: C,
    minRows: k,
    ...Qe
  }, dt = Ok);
  const wt = (Z) => {
    xe(Z.animationName === Jl ? j.current : {
      value: "x"
    });
  };
  x.useEffect(() => {
    se && se.setAdornedStart(!!D);
  }, [se, D]);
  const Pt = {
    ...r,
    color: le.color || "primary",
    disabled: le.disabled,
    endAdornment: c,
    error: le.error,
    focused: le.focused,
    formControl: se,
    fullWidth: w,
    hiddenLabel: le.hiddenLabel,
    multiline: T,
    size: le.size,
    startAdornment: D,
    type: K
  }, Le = Dk(Pt), Ce = V.root || du, pe = B.root || {}, bt = V.input || fu;
  return Qe = {
    ...Qe,
    ...B.input
  }, /* @__PURE__ */ R.jsxs(x.Fragment, {
    children: [!m && typeof ah == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (lh || (lh = /* @__PURE__ */ R.jsx(ah, {}))), /* @__PURE__ */ R.jsxs(Ce, {
      ...pe,
      ref: n,
      onClick: Je,
      ...te,
      ...!Xl(Ce) && {
        ownerState: {
          ...Pt,
          ...pe.ownerState
        }
      },
      className: ne(Le.root, pe.className, a, $ && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ R.jsx(Vf.Provider, {
        value: null,
        children: /* @__PURE__ */ R.jsx(bt, {
          "aria-invalid": le.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: le.disabled,
          id: b,
          onAnimationStart: wt,
          name: E,
          placeholder: P,
          readOnly: $,
          required: le.required,
          rows: I,
          value: G,
          onKeyDown: h,
          onKeyUp: O,
          type: K,
          ...Qe,
          ...!Xl(bt) && {
            as: dt,
            ownerState: {
              ...Pt,
              ...Qe.ownerState
            }
          },
          ref: q,
          className: ne(Le.input, Qe.className, $ && "MuiInputBase-readOnly"),
          onBlur: ae,
          onChange: je,
          onFocus: Ye
        })
      }), c, N ? N({
        ...le,
        startAdornment: D
      }) : null]
    })]
  });
});
function Uk(e) {
  return me("MuiFilledInput", e);
}
const $r = {
  ...Kt,
  ...fe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Wk(e) {
  return me("MuiFormHelperText", e);
}
const uh = fe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function Vk(e) {
  return me("MuiFormLabel", e);
}
const $i = fe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Hk(e) {
  return me("MuiInput", e);
}
const fi = {
  ...Kt,
  ...fe("MuiInput", ["root", "underline", "input"])
};
function Kk(e) {
  return me("MuiNativeSelect", e);
}
const Qf = fe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Yk(e) {
  return me("MuiOutlinedInput", e);
}
const In = {
  ...Kt,
  ...fe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Gk({
  theme: e,
  ...t
}) {
  const n = zn in e ? e[zn] : void 0;
  return /* @__PURE__ */ R.jsx(o0, {
    ...t,
    themeId: n ? zn : void 0,
    theme: n || e
  });
}
const Ks = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Qk
} = IC({
  themeId: zn,
  // @ts-ignore ignore module augmentation tests
  theme: () => au({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ks.colorSchemeStorageKey,
  modeStorageKey: Ks.modeStorageKey,
  defaultColorScheme: {
    light: Ks.defaultLightColorScheme,
    dark: Ks.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: d0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Xr({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Xk = Qk;
function qk({
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
  return n ? /* @__PURE__ */ R.jsx(Gk, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ R.jsx(Xk, {
    theme: e,
    ...t
  });
}
function ch(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Zk(e) {
  return me("MuiSvgIcon", e);
}
fe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Jk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(n)}`]
  };
  return he(o, Zk, r);
}, e2 = Y("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ie(n.color)}`], t[`fontSize${ie(n.fontSize)}`]];
  }
})(Se(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, d, f, m;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...st(e, "fill", {
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
})), pd = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  const g = Jk(w);
  return /* @__PURE__ */ R.jsxs(e2, {
    as: l,
    className: ne(g.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: n,
    ...b,
    ...c,
    ...y && o.props,
    ownerState: w,
    children: [y ? o.props.children : o, f ? /* @__PURE__ */ R.jsx("title", {
      children: f
    }) : null]
  });
});
pd.muiName = "SvgIcon";
function Tn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ R.jsx(pd, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = pd.muiName, /* @__PURE__ */ x.memo(/* @__PURE__ */ x.forwardRef(n));
}
function md(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function hd(e) {
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
function x0(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function t2(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      x0(u, l[u]) && typeof s[u] == "function" && (a[u] = (...d) => {
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
const dh = {};
function Xf(e, t) {
  const n = x.useRef(dh);
  return n.current === dh && (n.current = e(t)), n;
}
function n2(e) {
  const t = Xf(() => r2(e)).current;
  return t.next = e, ut(t.effect), t;
}
function r2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const fh = pg.createContext(null);
function o2(e) {
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
function i2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = o2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function S0(e) {
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
  } = e, S = x.useContext(fh), C = S && !S.isMounting ? r : n, [k, T] = x.useState(() => t ? C ? "exited" : "entered" : i || s ? "unmounted" : "exited"), E = x.useRef(k);
  E.current = k, t && k === "unmounted" && (E.current = "exited", T("exited"));
  const A = x.useRef(t && C), L = x.useRef(!1), M = x.useRef(null), _ = x.useRef(k), h = x.useRef(!1), O = x.useRef(u), P = n2({
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
  }), $ = x.useCallback(() => {
    M.current !== null && (M.current.cancel(), M.current = null);
  }, []), N = x.useCallback((D) => {
    let K = !0;
    const H = () => {
      K && (K = !1, M.current = null, D());
    };
    return H.cancel = () => {
      K = !1;
    }, M.current = H, H;
  }, []), I = x.useCallback((D, K) => {
    var Oe, xe;
    let H;
    const te = () => {
      H !== void 0 && (clearTimeout(H), H = void 0);
    }, G = N(() => {
      te(), E.current = D, T(D);
    }), oe = G.cancel;
    G.cancel = () => {
      te(), oe();
    };
    const j = P.current.nodeRef.current, J = P.current.addEndListener, q = P.current.getAutoTimeout !== void 0, ge = (xe = (Oe = P.current).getAutoTimeout) == null ? void 0 : xe.call(Oe), de = i2({
      currentStatus: K,
      isAppearing: h.current,
      timeout: P.current.timeout,
      autoTimeout: ge
    }), le = O.current, se = de ?? (le && q ? 0 : null), Ee = (Ye) => {
      H = setTimeout(G, Ye);
    };
    if (!j) {
      Ee(0);
      return;
    }
    if (J) {
      se != null && Ee(le ? 0 : se), J.length >= 2 ? J(j, G) : J(G);
      return;
    }
    Ee(le ? 0 : de ?? 0);
  }, [N, P]), z = x.useCallback((D) => {
    var te;
    const K = P.current, H = K.parentGroup ? K.parentGroup.isMounting : D;
    if (h.current = H, !D && !K.enter) {
      E.current = "entered", T("entered");
      return;
    }
    O.current = K.reduceMotion, (te = K.onEnter) == null || te.call(K, H), E.current = "entering", T("entering");
  }, [P]), B = x.useCallback(() => {
    var K;
    const D = P.current;
    if (!D.exit) {
      E.current = "exited", T("exited");
      return;
    }
    O.current = D.reduceMotion, (K = D.onExit) == null || K.call(D), E.current = "exiting", T("exiting");
  }, [P]), V = x.useCallback((D, K) => {
    if ($(), K === "entering") {
      const H = P.current;
      if (H.mountOnEnter || H.unmountOnExit) {
        const te = H.nodeRef.current;
        te && Kf(te);
      }
      z(D);
    } else
      B();
  }, [$, z, B, P]);
  return ut(() => (L.current = !0, A.current && (A.current = !1, V(!0, "entering")), () => {
    L.current = !1, $();
  }), [$, V]), ut(() => {
    if (!L.current)
      return;
    const D = E.current;
    t ? D !== "entering" && D !== "entered" && V(!1, "entering") : D === "entering" || D === "entered" ? V(!1, "exiting") : D === "exited" && s && (E.current = "unmounted", T("unmounted"));
  }, [t, k, s, V]), ut(() => {
    var te, G, oe, j;
    if (k === "unmounted" || _.current === "unmounted") {
      _.current = k;
      return;
    }
    const K = _.current !== k;
    K && (_.current = k);
    const H = P.current;
    k === "entering" ? (K && ((te = H.onEntering) == null || te.call(H, h.current)), M.current === null && E.current === k && I("entered", "entering")) : k === "exiting" ? (K && ((G = H.onExiting) == null || G.call(H)), M.current === null && E.current === k && I("exited", "exiting")) : k === "entered" && K ? (oe = H.onEntered) == null || oe.call(H, h.current) : k === "exited" && K && ((j = H.onExited) == null || j.call(H));
  }, [P, I, k]), k === "unmounted" ? null : /* @__PURE__ */ R.jsx(fh.Provider, {
    value: null,
    children: p(k, v)
  });
}
const w0 = "(prefers-reduced-motion: reduce)", s2 = 0, l2 = "0ms", a2 = () => {
}, ph = () => !1, u2 = () => !0, c2 = () => a2;
function d2(e) {
  const [t, n] = x.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), ut(() => {
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
    const i = window.matchMedia(w0), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const f2 = {
  ...wl
}, b0 = f2.useSyncExternalStore;
function p2(e) {
  const t = e ? u2 : ph, [n, r] = x.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [ph, c2];
    const o = window.matchMedia(w0);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return b0(r, n, t);
}
const m2 = b0 !== void 0 ? p2 : d2;
function qf(e, t) {
  const n = m2(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return x.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: s2,
        delay: l2
      } : o;
    }
  }), [r]);
}
function C0(e, t, n) {
  return e === void 0 || Xl(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function k0(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function E0(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    x0(n, e[n]) && (t[n] = e[n]);
  return t;
}
function mh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function T0(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const c = ne(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), y = {
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
  const s = E0({
    ...o,
    ...r
  }), l = mh(r), a = mh(o), u = t(s), d = ne(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), f = {
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
function Me(e, t) {
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
  } = i, c = d[e] || r, y = k0(f[e], o), {
    props: {
      component: w,
      ...b
    },
    internalRef: g
  } = T0({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: y
  }), p = ct(g, y == null ? void 0 : y.ref, t.ref), v = e === "root" ? w || u : w, S = C0(c, {
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
function h2(e) {
  return me("MuiPaper", e);
}
fe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const g2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return he(i, h2, o);
}, y2 = Y("div", {
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
  ...st(e, "box-shadow"),
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
}))), pu = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var c;
  const r = ye({
    props: t,
    name: "MuiPaper"
  }), o = vs(), {
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
  }, m = g2(f);
  return /* @__PURE__ */ R.jsx(y2, {
    as: s,
    ownerState: f,
    className: ne(m.root, i),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (c = o.vars.overlays) == null ? void 0 : c[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ql("#fff", dd(l))}, ${Ql("#fff", dd(l))})`
        }
      },
      ...d.style
    }
  });
});
function ea(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function v2(e) {
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
const x2 = {};
function S2(e) {
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
  } = e, d = x.useRef(null), f = s === !0, m = v2({
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
    getButtonProps: x.useCallback((b = x2) => {
      const {
        onClick: g,
        onKeyDown: p,
        onKeyUp: v,
        ...S
      } = b;
      return {
        ...y,
        ...S,
        onClick: (E) => {
          if (l && E.stopPropagation(), n) {
            E.preventDefault();
            return;
          }
          g == null || g(E);
        },
        onKeyDown: (E) => {
          if (f && m.onKeyDown(E), !n && (a == null || a(E), p == null || p(E), !(E.target !== E.currentTarget || c()))) {
            if (E.key === " ") {
              E.preventDefault();
              return;
            }
            E.key === "Enter" && (E.preventDefault(), E.currentTarget.click());
          }
        },
        onKeyUp: (E) => {
          n || (u == null || u(E), v == null || v(E), E.target === E.currentTarget && !c() && E.key === " " && !E.defaultPrevented && E.currentTarget.click());
        }
      };
    }, [y, n, f, m, c, a, u, l]),
    rootRef: d
  };
}
class ta {
  constructor() {
    ti(this, "mountEffect", () => {
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
    return new ta();
  }
  static use() {
    const t = Xf(ta.create).current, [n, r] = x.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, x.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = b2(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function w2() {
  return ta.use();
}
function b2() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const C2 = [];
function R0(e) {
  x.useEffect(e, C2);
}
class mu {
  constructor() {
    ti(this, "currentId", null);
    ti(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ti(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new mu();
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
function Qn() {
  const e = Xf(mu.create).current;
  return R0(e.disposeEffect), e;
}
function k2(e) {
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
  } = e, [d, f] = x.useState(!1), m = Qn(), c = x.useRef(!1), y = x.useRef(a);
  y.current = a;
  const w = a != null, b = ne(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, p = ne(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && f(!0), x.useEffect(() => {
    !l && w ? c.current || (c.current = !0, m.start(u, () => {
      var v;
      c.current = !1, (v = y.current) == null || v.call(y);
    })) : (c.current = !1, m.clear());
  }, [m, w, l, u]), /* @__PURE__ */ R.jsx("span", {
    className: b,
    style: g,
    children: /* @__PURE__ */ R.jsx("span", {
      className: p
    })
  });
}
const $t = fe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), gd = 550, E2 = 80, Ys = {}, hh = [], T2 = () => {
};
function lc(e, t) {
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
function R2({
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
const P2 = gs`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, I2 = gs`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, M2 = gs`
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
function $2(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = os`
    &.${$t.rippleVisible} {
      animation-name: ${P2};
      animation-duration: ${gd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${$t.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${$t.childLeaving} {
      animation-name: ${I2};
      animation-duration: ${gd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${$t.childPulsate} {
      animation-name: ${M2};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? os`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const O2 = Y("span", {
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
}), A2 = Y(k2, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${$t.rippleVisible} {
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
  & .${$t.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${$t.childLeaving} {
    opacity: 0;
  }

  & .${$t.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => $2(e)}
`, N2 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTouchRipple"
  }), o = vs(), i = qf(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Ys,
    className: a,
    ...u
  } = r, [d, f] = x.useState({
    items: hh,
    order: hh
  }), m = d.items, c = x.useRef(0), y = x.useRef(null), w = x.useRef(!1);
  R0(() => (w.current = !0, () => {
    w.current = !1;
  })), x.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [m]);
  const b = x.useRef(!1), g = Qn(), p = x.useRef(null), v = x.useRef(null), S = it((M) => {
    w.current && f((_) => {
      const h = _.items.filter((P) => P.key !== M), O = lc(_.order.filter((P) => P !== M), h.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: h,
        order: O
      };
    });
  }), C = it((M) => {
    const {
      pulsate: _,
      rippleX: h,
      rippleY: O,
      rippleSize: P,
      cb: $
    } = M, N = c.current;
    c.current += 1, f((I) => {
      const z = [...I.items, {
        key: N,
        pulsate: _,
        rippleX: h,
        rippleY: O,
        rippleSize: P,
        exiting: !1
      }];
      return {
        items: z,
        order: lc(I.order, z.filter((B) => !B.exiting).map((B) => B.key))
      };
    }), y.current = $;
  }), k = it((M = Ys, _ = Ys, h = T2) => {
    const {
      pulsate: O = !1,
      center: P = s || _.pulsate,
      fakeElement: $ = !1
      // Used only by tests.
    } = _;
    if ((M == null ? void 0 : M.type) === "mousedown" && b.current) {
      b.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (b.current = !0);
    const N = $ ? null : v.current, {
      rippleX: I,
      rippleY: z,
      rippleSize: B
    } = R2({
      event: M,
      element: N,
      center: P
    });
    M != null && M.touches ? p.current === null && (p.current = () => {
      C({
        pulsate: O,
        rippleX: I,
        rippleY: z,
        rippleSize: B,
        cb: h
      });
    }, g.start(E2, () => {
      p.current && (p.current(), p.current = null);
    })) : C({
      pulsate: O,
      rippleX: I,
      rippleY: z,
      rippleSize: B,
      cb: h
    });
  }), T = it(() => {
    k(Ys, {
      pulsate: !0
    });
  }), E = it((M, _) => {
    if (g.clear(), (M == null ? void 0 : M.type) === "touchend" && p.current) {
      p.current(), p.current = null, g.start(0, () => {
        E(M, _);
      });
      return;
    }
    p.current = null, f((h) => {
      const O = h.items.findIndex(($) => !$.exiting);
      if (O === -1)
        return h;
      const P = h.items.slice();
      return P[O] = {
        ...P[O],
        exiting: !0
      }, {
        items: P,
        order: lc(h.order, P.filter(($) => !$.exiting).map(($) => $.key))
      };
    }), y.current = _;
  });
  x.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: E
  }), [T, k, E]);
  const A = new Map(m.map((M) => [M.key, M])), L = d.order.map((M) => A.get(M)).filter(Boolean);
  return /* @__PURE__ */ R.jsx(O2, {
    className: ne($t.root, l.root, a),
    ref: v,
    ...u,
    children: L.map((M) => /* @__PURE__ */ R.jsx(A2, {
      classes: {
        ripple: ne(l.ripple, $t.ripple),
        rippleVisible: ne(l.rippleVisible, $t.rippleVisible),
        ripplePulsate: ne(l.ripplePulsate, $t.ripplePulsate),
        child: ne(l.child, $t.child),
        childLeaving: ne(l.childLeaving, $t.childLeaving),
        childPulsate: ne(l.childPulsate, $t.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : gd,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => S(M.key)
    }, M.key))
  });
});
function L2(e) {
  return me("MuiButtonBase", e);
}
const gh = fe("MuiButtonBase", ["root", "disabled", "focusVisible"]), _2 = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = he({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, L2, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, z2 = Y("button", {
  name: "MuiButtonBase",
  slot: "Root"
})(Se(({
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
  [`&.${gh.disabled}`]: {
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
      ...ZC,
      [`&.${gh.focusVisible}`]: e.focusVisible
    }
  }]
}))), na = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    onClick: C,
    onContextMenu: k,
    onDragLeave: T,
    onFocus: E,
    onFocusVisible: A,
    onKeyDown: L,
    onKeyUp: M,
    onMouseDown: _,
    onMouseLeave: h,
    onMouseUp: O,
    onTouchEnd: P,
    onTouchMove: $,
    onTouchStart: N,
    tabIndex: I = 0,
    TouchRippleProps: z,
    touchRippleRef: B,
    type: V,
    ...D
  } = r, K = !!(D.href || D.to), H = !!D.formAction;
  let te = a;
  te === "button" && K && (te = p);
  const oe = v ?? (typeof te == "string" ? te === "button" : b ?? !1), j = w2(), J = ct(j.ref, B), [q, ge] = x.useState(!1);
  (u || w) && q && ge(!1);
  const de = it((Ae) => {
    m && !Ae.repeat && q && Ae.key === " " && j.stop(Ae, () => {
      j.start(Ae);
    });
  }), le = it((Ae) => {
    m && Ae.key === " " && q && !Ae.defaultPrevented && j.stop(Ae, () => {
      j.pulsate(Ae);
    });
  }), {
    getButtonProps: se,
    rootRef: Ee
  } = S2({
    nativeButton: oe,
    disabled: u,
    type: V,
    hasFormAction: H,
    tabIndex: I,
    onBeforeKeyDown: de,
    onBeforeKeyUp: le
  }), {
    onClick: Oe,
    onKeyDown: xe,
    onKeyUp: Ye,
    ...ae
  } = se({
    onClick: C,
    onKeyDown: L,
    onKeyUp: M
  });
  x.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ge(!0), Ee.current.focus();
    }
  }), [Ee]);
  const je = j.shouldMount && !d && !u;
  x.useEffect(() => {
    q && m && !d && j.pulsate();
  }, [d, m, q, j]);
  const Je = Un(j, "start", _, f), dt = Un(j, "stop", k, f), Qe = Un(j, "stop", T, f), wt = Un(j, "stop", O, f), Pt = Un(j, "stop", (Ae) => {
    q && Ae.preventDefault(), h && h(Ae);
  }, f), Le = Un(j, "start", N, f), Ce = Un(j, "stop", P, f), pe = Un(j, "stop", $, f), bt = Un(j, "stop", (Ae) => {
    ea(Ae.target) || ge(!1), S && S(Ae);
  }, !1), Z = it((Ae) => {
    Ee.current || (Ee.current = Ae.currentTarget), !w && ea(Ae.target) && (ge(!0), A && A(Ae)), E && E(Ae);
  }), ee = {};
  K && (ee.tabIndex = u ? -1 : I, u && (ee["aria-disabled"] = u), ee.type = V);
  const _e = ct(n, Ee), Xe = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: f,
    focusRipple: m,
    suppressFocusVisible: w,
    tabIndex: I,
    focusVisible: q,
    internalDisabledThemeFocusVisible: g
  }, et = _2(Xe);
  return /* @__PURE__ */ R.jsxs(z2, {
    as: te,
    className: ne(et.root, l),
    ownerState: Xe,
    onBlur: bt,
    onClick: Oe,
    onContextMenu: dt,
    onFocus: Z,
    onKeyDown: xe,
    onKeyUp: Ye,
    onMouseDown: Je,
    onMouseLeave: Pt,
    onMouseUp: wt,
    onDragLeave: Qe,
    onTouchEnd: Ce,
    onTouchMove: pe,
    onTouchStart: Le,
    ref: _e,
    ...K ? ee : ae,
    ...D,
    children: [s, je ? /* @__PURE__ */ R.jsx(N2, {
      ref: J,
      center: i,
      ...z
    }) : null]
  });
});
function Un(e, t, n, r = !1) {
  return it((o) => (n && n(o), r || e[t](o), !0));
}
function F2(e) {
  return typeof e.main == "string";
}
function j2(e, t = []) {
  if (!F2(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Ot(e = []) {
  return ([, t]) => t && j2(t, e);
}
function B2(e) {
  return me("MuiAlert", e);
}
const yh = fe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function D2(e) {
  return me("MuiCircularProgress", e);
}
fe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const xn = 44, yd = gs`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, vd = gs`
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
`, U2 = typeof yd != "string" ? os`
        animation: ${yd} 1.4s linear infinite;
      ` : null, W2 = typeof vd != "string" ? os`
        animation: ${vd} 1.4s ease-in-out infinite;
      ` : null, V2 = (e) => {
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
  return he(i, D2, t);
}, H2 = Y("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ie(n.color)}`]];
  }
})(Se(({
  theme: e
}) => {
  const t = Yf(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...st(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: U2 || {
        animation: `${yd} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Ot()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), K2 = Y("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), Y2 = Y("circle", {
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
  const t = Yf(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...st(e, "stroke-dashoffset")
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
      style: W2 || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${vd} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), G2 = Y("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(Se(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), P0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, v = V2(p), S = {}, C = {}, k = {};
  if (y === "determinate") {
    const T = 2 * Math.PI * ((xn - m) / 2), E = g - b;
    S.strokeDasharray = T.toFixed(3), S.strokeDashoffset = E > 0 ? `${((g - c) / E * T).toFixed(3)}px` : `${T.toFixed(3)}px`, C.transform = "rotate(-90deg)", k["aria-valuenow"] = c, k["aria-valuemin"] = b, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ R.jsx(H2, {
    className: ne(v.root, o),
    style: {
      width: d,
      height: d,
      ...C,
      ...f
    },
    ownerState: p,
    ref: n,
    role: "progressbar",
    ...k,
    ...w,
    children: /* @__PURE__ */ R.jsxs(K2, {
      className: v.svg,
      ownerState: p,
      viewBox: `${xn / 2} ${xn / 2} ${xn} ${xn}`,
      children: [l ? /* @__PURE__ */ R.jsx(G2, {
        className: v.track,
        ownerState: p,
        cx: xn,
        cy: xn,
        r: (xn - m) / 2,
        fill: "none",
        strokeWidth: m,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ R.jsx(Y2, {
        className: v.circle,
        style: S,
        ownerState: p,
        cx: xn,
        cy: xn,
        r: (xn - m) / 2,
        fill: "none",
        strokeWidth: m
      })]
    })
  });
});
function Q2(e) {
  return me("MuiIconButton", e);
}
const vh = fe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), X2 = (e) => {
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
  return he(l, Q2, t);
}, q2 = Y(na, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ie(n.color)}`], n.edge && t[`edge${ie(n.edge)}`], t[`size${ie(n.size)}`]];
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
  ...st(e, "background-color", {
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
  }, ...Object.entries(e.palette).filter(Ot()).map(([t]) => ({
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
}))), Z2 = Y("span", {
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
})), xd = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, w = qr(f), b = c ?? /* @__PURE__ */ R.jsx(P0, {
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
  }, p = X2(g);
  return /* @__PURE__ */ R.jsxs(q2, {
    id: m ? w : f,
    className: ne(p.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || m,
    ref: n,
    ...y,
    ownerState: g,
    children: [typeof m == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ R.jsx("span", {
      className: p.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ R.jsx(Z2, {
        className: p.loadingIndicator,
        ownerState: g,
        children: m && b
      })
    }), i]
  });
}), J2 = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), eE = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), tE = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), nE = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), rE = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), oE = (e) => {
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
  return he(i, B2, o);
}, iE = Y(pu, {
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
    variants: [...Object.entries(e.palette).filter(Ot(["light"])).map(([r]) => ({
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
    })), ...Object.entries(e.palette).filter(Ot(["light"])).map(([r]) => ({
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
    })), ...Object.entries(e.palette).filter(Ot(["dark"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "filled"
      },
      style: {
        ...e.focusVisible && JC(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
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
})), sE = Y("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), lE = Y("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), aE = Y("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), xh = {
  success: /* @__PURE__ */ R.jsx(J2, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ R.jsx(eE, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ R.jsx(tE, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ R.jsx(nE, {
    fontSize: "inherit"
  })
}, uE = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, v = oE(p), S = {
    slots: w,
    slotProps: y
  }, [C, k] = Me("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: ne(v.root, s),
    elementType: iE,
    externalForwardedProps: {
      ...S,
      ...g
    },
    ownerState: p,
    additionalProps: {
      role: m,
      elevation: 0
    }
  }), [T, E] = Me("icon", {
    className: v.icon,
    elementType: sE,
    externalForwardedProps: S,
    ownerState: p
  }), [A, L] = Me("message", {
    className: v.message,
    elementType: lE,
    externalForwardedProps: S,
    ownerState: p
  }), [M, _] = Me("action", {
    className: v.action,
    elementType: aE,
    externalForwardedProps: S,
    ownerState: p
  }), [h, O] = Me("closeButton", {
    elementType: xd,
    externalForwardedProps: S,
    ownerState: p
  }), [P, $] = Me("closeIcon", {
    elementType: rE,
    externalForwardedProps: S,
    ownerState: p
  });
  return /* @__PURE__ */ R.jsxs(C, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ R.jsx(T, {
      ...E,
      children: u || d[c] || xh[c]
    }) : null, /* @__PURE__ */ R.jsx(A, {
      ...L,
      children: i
    }), o != null ? /* @__PURE__ */ R.jsx(M, {
      ..._,
      children: o
    }) : null, o == null && f ? /* @__PURE__ */ R.jsx(M, {
      ..._,
      children: /* @__PURE__ */ R.jsx(h, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: f,
        ...O,
        children: /* @__PURE__ */ R.jsx(P, {
          fontSize: "small",
          ...$
        })
      })
    }) : null]
  });
});
function cE(e) {
  return me("MuiTypography", e);
}
fe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const dE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ie(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return he(s, cE, i);
}, fE = Y("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ie(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
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
    })), ...Object.entries(e.palette).filter(Ot()).map(([n]) => ({
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
}, Ao = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, y = l || f[d] || Sh[d] || "span", w = dE(c);
  return /* @__PURE__ */ R.jsx(fE, {
    as: y,
    ref: n,
    className: ne(w.root, s),
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
function vl(e, t) {
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
var Ut = "top", pn = "bottom", mn = "right", Wt = "left", Zf = "auto", xs = [Ut, pn, mn, Wt], Vo = "start", ss = "end", pE = "clippingParents", I0 = "viewport", pi = "popper", mE = "reference", wh = /* @__PURE__ */ xs.reduce(function(e, t) {
  return e.concat([t + "-" + Vo, t + "-" + ss]);
}, []), M0 = /* @__PURE__ */ [].concat(xs, [Zf]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Vo, t + "-" + ss]);
}, []), hE = "beforeRead", gE = "read", yE = "afterRead", vE = "beforeMain", xE = "main", SE = "afterMain", wE = "beforeWrite", bE = "write", CE = "afterWrite", kE = [hE, gE, yE, vE, xE, SE, wE, bE, CE];
function Bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Zt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zr(e) {
  var t = Zt(e).Element;
  return e instanceof t || e instanceof Element;
}
function cn(e) {
  var t = Zt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Jf(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Zt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function EE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !cn(i) || !Bn(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function TE(e) {
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
      !cn(o) || !Bn(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const RE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: EE,
  effect: TE,
  requires: ["computeStyles"]
};
function jn(e) {
  return e.split("-")[0];
}
var Wr = Math.max, ra = Math.min, Ho = Math.round;
function Sd() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $0() {
  return !/^((?!chrome|android).)*safari/i.test(Sd());
}
function Ko(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && cn(e) && (o = e.offsetWidth > 0 && Ho(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ho(r.height) / e.offsetHeight || 1);
  var s = Zr(e) ? Zt(e) : window, l = s.visualViewport, a = !$0() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, f = r.width / o, m = r.height / i;
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
function ep(e) {
  var t = Ko(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function O0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Jf(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function rr(e) {
  return Zt(e).getComputedStyle(e);
}
function PE(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function Pr(e) {
  return ((Zr(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function hu(e) {
  return Bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Jf(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Pr(e)
  );
}
function bh(e) {
  return !cn(e) || // https://github.com/popperjs/popper-core/issues/837
  rr(e).position === "fixed" ? null : e.offsetParent;
}
function IE(e) {
  var t = /firefox/i.test(Sd()), n = /Trident/i.test(Sd());
  if (n && cn(e)) {
    var r = rr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = hu(e);
  for (Jf(o) && (o = o.host); cn(o) && ["html", "body"].indexOf(Bn(o)) < 0; ) {
    var i = rr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ss(e) {
  for (var t = Zt(e), n = bh(e); n && PE(n) && rr(n).position === "static"; )
    n = bh(n);
  return n && (Bn(n) === "html" || Bn(n) === "body" && rr(n).position === "static") ? t : n || IE(e) || t;
}
function tp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Oi(e, t, n) {
  return Wr(e, ra(t, n));
}
function ME(e, t, n) {
  var r = Oi(e, t, n);
  return r > n ? n : r;
}
function A0() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function N0(e) {
  return Object.assign({}, A0(), e);
}
function L0(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var $E = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, N0(typeof t != "number" ? t : L0(t, xs));
};
function OE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = jn(n.placement), a = tp(l), u = [Wt, mn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var f = $E(o.padding, n), m = ep(i), c = a === "y" ? Ut : Wt, y = a === "y" ? pn : mn, w = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], b = s[a] - n.rects.reference[a], g = Ss(i), p = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, v = w / 2 - b / 2, S = f[c], C = p - m[d] - f[y], k = p / 2 - m[d] / 2 + v, T = Oi(S, k, C), E = a;
    n.modifiersData[r] = (t = {}, t[E] = T, t.centerOffset = T - k, t);
  }
}
function AE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || O0(t.elements.popper, o) && (t.elements.arrow = o));
}
const NE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: OE,
  effect: AE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yo(e) {
  return e.split("-")[1];
}
var LE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function _E(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ho(n * o) / o || 0,
    y: Ho(r * o) / o || 0
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
  var g = s.hasOwnProperty("x"), p = s.hasOwnProperty("y"), v = Wt, S = Ut, C = window;
  if (u) {
    var k = Ss(n), T = "clientHeight", E = "clientWidth";
    if (k === Zt(n) && (k = Pr(n), rr(k).position !== "static" && l === "absolute" && (T = "scrollHeight", E = "scrollWidth")), k = k, o === Ut || (o === Wt || o === mn) && i === ss) {
      S = pn;
      var A = f && k === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      w -= A - r.height, w *= a ? 1 : -1;
    }
    if (o === Wt || (o === Ut || o === pn) && i === ss) {
      v = mn;
      var L = f && k === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[E]
      );
      c -= L - r.width, c *= a ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && LE), _ = d === !0 ? _E({
    x: c,
    y: w
  }, Zt(n)) : {
    x: c,
    y: w
  };
  if (c = _.x, w = _.y, a) {
    var h;
    return Object.assign({}, M, (h = {}, h[S] = p ? "0" : "", h[v] = g ? "0" : "", h.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", h));
  }
  return Object.assign({}, M, (t = {}, t[S] = p ? w + "px" : "", t[v] = g ? c + "px" : "", t.transform = "", t));
}
function zE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: jn(t.placement),
    variation: Yo(t.placement),
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
const FE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zE,
  data: {}
};
var Gs = {
  passive: !0
};
function jE(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = Zt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Gs);
  }), l && a.addEventListener("resize", n.update, Gs), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Gs);
    }), l && a.removeEventListener("resize", n.update, Gs);
  };
}
const BE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: jE,
  data: {}
};
var DE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xl(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return DE[t];
  });
}
var UE = {
  start: "end",
  end: "start"
};
function kh(e) {
  return e.replace(/start|end/g, function(t) {
    return UE[t];
  });
}
function np(e) {
  var t = Zt(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function rp(e) {
  return Ko(Pr(e)).left + np(e).scrollLeft;
}
function WE(e, t) {
  var n = Zt(e), r = Pr(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = $0();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + rp(e),
    y: a
  };
}
function VE(e) {
  var t, n = Pr(e), r = np(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Wr(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Wr(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + rp(e), a = -r.scrollTop;
  return rr(o || n).direction === "rtl" && (l += Wr(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function op(e) {
  var t = rr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function _0(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : cn(e) && op(e) ? e : _0(hu(e));
}
function Ai(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = _0(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Zt(r), s = o ? [i].concat(i.visualViewport || [], op(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ai(hu(s)))
  );
}
function wd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function HE(e, t) {
  var n = Ko(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Eh(e, t, n) {
  return t === I0 ? wd(WE(e, n)) : Zr(t) ? HE(t, n) : wd(VE(Pr(e)));
}
function KE(e) {
  var t = Ai(hu(e)), n = ["absolute", "fixed"].indexOf(rr(e).position) >= 0, r = n && cn(e) ? Ss(e) : e;
  return Zr(r) ? t.filter(function(o) {
    return Zr(o) && O0(o, r) && Bn(o) !== "body";
  }) : [];
}
function YE(e, t, n, r) {
  var o = t === "clippingParents" ? KE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var d = Eh(e, u, r);
    return a.top = Wr(d.top, a.top), a.right = ra(d.right, a.right), a.bottom = ra(d.bottom, a.bottom), a.left = Wr(d.left, a.left), a;
  }, Eh(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function z0(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? jn(r) : null, i = r ? Yo(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case Ut:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case pn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case mn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case Wt:
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
  var u = o ? tp(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Vo:
        a[u] = a[u] - (t[d] / 2 - n[d] / 2);
        break;
      case ss:
        a[u] = a[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function ls(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? pE : l, u = n.rootBoundary, d = u === void 0 ? I0 : u, f = n.elementContext, m = f === void 0 ? pi : f, c = n.altBoundary, y = c === void 0 ? !1 : c, w = n.padding, b = w === void 0 ? 0 : w, g = N0(typeof b != "number" ? b : L0(b, xs)), p = m === pi ? mE : pi, v = e.rects.popper, S = e.elements[y ? p : m], C = YE(Zr(S) ? S : S.contextElement || Pr(e.elements.popper), a, d, s), k = Ko(e.elements.reference), T = z0({
    reference: k,
    element: v,
    placement: o
  }), E = wd(Object.assign({}, v, T)), A = m === pi ? E : k, L = {
    top: C.top - A.top + g.top,
    bottom: A.bottom - C.bottom + g.bottom,
    left: C.left - A.left + g.left,
    right: A.right - C.right + g.right
  }, M = e.modifiersData.offset;
  if (m === pi && M) {
    var _ = M[o];
    Object.keys(L).forEach(function(h) {
      var O = [mn, pn].indexOf(h) >= 0 ? 1 : -1, P = [Ut, pn].indexOf(h) >= 0 ? "y" : "x";
      L[h] += _[P] * O;
    });
  }
  return L;
}
function GE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? M0 : a, d = Yo(r), f = d ? l ? wh : wh.filter(function(y) {
    return Yo(y) === d;
  }) : xs, m = f.filter(function(y) {
    return u.indexOf(y) >= 0;
  });
  m.length === 0 && (m = f);
  var c = m.reduce(function(y, w) {
    return y[w] = ls(e, {
      placement: w,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[jn(w)], y;
  }, {});
  return Object.keys(c).sort(function(y, w) {
    return c[y] - c[w];
  });
}
function QE(e) {
  if (jn(e) === Zf)
    return [];
  var t = xl(e);
  return [kh(e), t, kh(t)];
}
function XE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, f = n.rootBoundary, m = n.altBoundary, c = n.flipVariations, y = c === void 0 ? !0 : c, w = n.allowedAutoPlacements, b = t.options.placement, g = jn(b), p = g === b, v = a || (p || !y ? [xl(b)] : QE(b)), S = [b].concat(v).reduce(function(H, te) {
      return H.concat(jn(te) === Zf ? GE(t, {
        placement: te,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: y,
        allowedAutoPlacements: w
      }) : te);
    }, []), C = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), E = !0, A = S[0], L = 0; L < S.length; L++) {
      var M = S[L], _ = jn(M), h = Yo(M) === Vo, O = [Ut, pn].indexOf(_) >= 0, P = O ? "width" : "height", $ = ls(t, {
        placement: M,
        boundary: d,
        rootBoundary: f,
        altBoundary: m,
        padding: u
      }), N = O ? h ? mn : Wt : h ? pn : Ut;
      C[P] > k[P] && (N = xl(N));
      var I = xl(N), z = [];
      if (i && z.push($[_] <= 0), l && z.push($[N] <= 0, $[I] <= 0), z.every(function(H) {
        return H;
      })) {
        A = M, E = !1;
        break;
      }
      T.set(M, z);
    }
    if (E)
      for (var B = y ? 3 : 1, V = function(te) {
        var G = S.find(function(oe) {
          var j = T.get(oe);
          if (j)
            return j.slice(0, te).every(function(J) {
              return J;
            });
        });
        if (G)
          return A = G, "break";
      }, D = B; D > 0; D--) {
        var K = V(D);
        if (K === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const qE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: XE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Th(e, t, n) {
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
  return [Ut, mn, pn, Wt].some(function(t) {
    return e[t] >= 0;
  });
}
function ZE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = ls(t, {
    elementContext: "reference"
  }), l = ls(t, {
    altBoundary: !0
  }), a = Th(s, r), u = Th(l, o, i), d = Rh(a), f = Rh(u);
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
const JE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ZE
};
function eT(e, t, n) {
  var r = jn(e), o = [Wt, Ut].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [Wt, mn].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function tT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = M0.reduce(function(d, f) {
    return d[f] = eT(f, t.rects, i), d;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const nT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tT
};
function rT(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = z0({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const oT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: rT,
  data: {}
};
function iT(e) {
  return e === "x" ? "y" : "x";
}
function sT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, f = n.padding, m = n.tether, c = m === void 0 ? !0 : m, y = n.tetherOffset, w = y === void 0 ? 0 : y, b = ls(t, {
    boundary: a,
    rootBoundary: u,
    padding: f,
    altBoundary: d
  }), g = jn(t.placement), p = Yo(t.placement), v = !p, S = tp(g), C = iT(S), k = t.modifiersData.popperOffsets, T = t.rects.reference, E = t.rects.popper, A = typeof w == "function" ? w(Object.assign({}, t.rects, {
    placement: t.placement
  })) : w, L = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var h, O = S === "y" ? Ut : Wt, P = S === "y" ? pn : mn, $ = S === "y" ? "height" : "width", N = k[S], I = N + b[O], z = N - b[P], B = c ? -E[$] / 2 : 0, V = p === Vo ? T[$] : E[$], D = p === Vo ? -E[$] : -T[$], K = t.elements.arrow, H = c && K ? ep(K) : {
        width: 0,
        height: 0
      }, te = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : A0(), G = te[O], oe = te[P], j = Oi(0, T[$], H[$]), J = v ? T[$] / 2 - B - j - G - L.mainAxis : V - j - G - L.mainAxis, q = v ? -T[$] / 2 + B + j + oe + L.mainAxis : D + j + oe + L.mainAxis, ge = t.elements.arrow && Ss(t.elements.arrow), de = ge ? S === "y" ? ge.clientTop || 0 : ge.clientLeft || 0 : 0, le = (h = M == null ? void 0 : M[S]) != null ? h : 0, se = N + J - le - de, Ee = N + q - le, Oe = Oi(c ? ra(I, se) : I, N, c ? Wr(z, Ee) : z);
      k[S] = Oe, _[S] = Oe - N;
    }
    if (l) {
      var xe, Ye = S === "x" ? Ut : Wt, ae = S === "x" ? pn : mn, je = k[C], Je = C === "y" ? "height" : "width", dt = je + b[Ye], Qe = je - b[ae], wt = [Ut, Wt].indexOf(g) !== -1, Pt = (xe = M == null ? void 0 : M[C]) != null ? xe : 0, Le = wt ? dt : je - T[Je] - E[Je] - Pt + L.altAxis, Ce = wt ? je + T[Je] + E[Je] - Pt - L.altAxis : Qe, pe = c && wt ? ME(Le, je, Ce) : Oi(c ? Le : dt, je, c ? Ce : Qe);
      k[C] = pe, _[C] = pe - je;
    }
    t.modifiersData[r] = _;
  }
}
const lT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sT,
  requiresIfExists: ["offset"]
};
function aT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function uT(e) {
  return e === Zt(e) || !cn(e) ? np(e) : aT(e);
}
function cT(e) {
  var t = e.getBoundingClientRect(), n = Ho(t.width) / e.offsetWidth || 1, r = Ho(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function dT(e, t, n) {
  n === void 0 && (n = !1);
  var r = cn(t), o = cn(t) && cT(t), i = Pr(t), s = Ko(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Bn(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  op(i)) && (l = uT(t)), cn(t) ? (a = Ko(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = rp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function fT(e) {
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
function pT(e) {
  var t = fT(e);
  return kE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function mT(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function hT(e) {
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
function Ih() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function gT(e) {
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
          reference: Zr(l) ? Ai(l) : l.contextElement ? Ai(l.contextElement) : [],
          popper: Ai(a)
        };
        var v = pT(hT([].concat(r, d.options.modifiers)));
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
          if (Ih(p, v)) {
            d.rects = {
              reference: dT(p, Ss(v), d.options.strategy === "fixed"),
              popper: ep(v)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
              return d.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var S = 0; S < d.orderedModifiers.length; S++) {
              if (d.reset === !0) {
                d.reset = !1, S = -1;
                continue;
              }
              var C = d.orderedModifiers[S], k = C.fn, T = C.options, E = T === void 0 ? {} : T, A = C.name;
              typeof k == "function" && (d = k({
                state: d,
                options: E,
                name: A,
                instance: c
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: mT(function() {
        return new Promise(function(b) {
          c.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        w(), m = !0;
      }
    };
    if (!Ih(l, a))
      return c;
    c.setOptions(u).then(function(b) {
      !m && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function y() {
      d.orderedModifiers.forEach(function(b) {
        var g = b.name, p = b.options, v = p === void 0 ? {} : p, S = b.effect;
        if (typeof S == "function") {
          var C = S({
            state: d,
            name: g,
            instance: c,
            options: v
          }), k = function() {
          };
          f.push(C || k);
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
var yT = [BE, oT, FE, RE, nT, qE, lT, NE, JE], vT = /* @__PURE__ */ gT({
  defaultModifiers: yT
});
function F0(e) {
  var f;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : k0(n, r), {
    props: l,
    internalRef: a
  } = T0({
    ...i,
    externalSlotProps: s
  }), u = ct(a, s == null ? void 0 : s.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return C0(t, {
    ...l,
    ref: u
  }, r);
}
function Jo(e) {
  var t;
  return parseInt(x.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function xT(e) {
  return typeof e == "function" ? e() : e;
}
const j0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = x.useState(null), a = ct(/* @__PURE__ */ x.isValidElement(r) ? Jo(r) : null, n);
  if (ut(() => {
    i || l(xT(o) || document.body);
  }, [o, i]), ut(() => {
    if (s && !i)
      return md(n, s), () => {
        md(n, null);
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
  return s && /* @__PURE__ */ gv.createPortal(r, s);
});
function ST(e) {
  return me("MuiPopper", e);
}
fe("MuiPopper", ["root"]);
function wT(e, t) {
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
function B0(e) {
  return typeof e == "function" ? e() : e;
}
function bT(e) {
  return e.nodeType !== void 0;
}
const CT = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, ST, t);
}, kT = {}, ET = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = t, g = x.useRef(null), p = ct(g, n), v = x.useRef(null), S = ct(v, f), C = x.useRef(S);
  ut(() => {
    C.current = S;
  }, [S]), x.useImperativeHandle(f, () => v.current, []);
  const k = wT(u, i), [T, E] = x.useState(k), A = x.useMemo(() => B0(r), [r]);
  x.useEffect(() => {
    v.current && v.current.forceUpdate();
  }), ut(() => {
    if (!A || !a)
      return;
    const O = (I) => {
      E(I.placement);
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
        state: I
      }) => {
        O(I);
      }
    }];
    l != null && (P = P.concat(l)), d && d.modifiers != null && (P = P.concat(d.modifiers));
    const $ = vT(A, g.current, {
      placement: k,
      ...d,
      modifiers: P
    });
    C.current($);
    const N = g.current;
    return () => {
      if (N) {
        const {
          style: I
        } = N, z = I.position, B = I.top, V = I.left, D = I.transform;
        $.destroy(), I.position = z, I.top = B, I.left = V, I.transform = D;
      } else
        $.destroy();
      C.current(null);
    };
  }, [A, s, l, a, d, k]);
  const L = {
    placement: T
  };
  y !== null && (L.TransitionProps = y);
  const M = CT(t), _ = c.root ?? "div", h = F0({
    elementType: _,
    externalSlotProps: m.root,
    externalForwardedProps: b,
    additionalProps: {
      role: "tooltip",
      ref: p
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ R.jsx(_, {
    ...h,
    children: typeof o == "function" ? o(L) : o
  });
}), TT = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    popperOptions: m = kT,
    popperRef: c,
    style: y,
    transition: w = !1,
    slotProps: b = {},
    slots: g = {},
    ...p
  } = t, [v, S] = x.useState(!0), C = () => {
    S(!1);
  }, k = () => {
    S(!0);
  };
  if (!a && !d && (!w || v))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const L = B0(r);
    T = L && bT(L) ? ht(L).body : ht(null).body;
  }
  const E = !d && a && (!w || v) ? "none" : void 0, A = w ? {
    in: d,
    onEnter: C,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ R.jsx(j0, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ R.jsx(ET, {
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
        display: E,
        ...y
      },
      TransitionProps: A,
      children: o
    })
  });
}), RT = Y(TT, {
  name: "MuiPopper",
  slot: "Root"
})({}), D0 = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = n0(), o = ye({
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
  return /* @__PURE__ */ R.jsx(RT, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: b,
    slotProps: g,
    ...v,
    ref: n
  });
}), PT = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function IT(e) {
  return me("MuiChip", e);
}
const ke = fe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), MT = (e) => {
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
  return he(a, IT, t);
}, $T = Y("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => yn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${ke.avatar}`]: t.avatar
    }, {
      [`& .${ke.icon}`]: t.icon
    }, {
      [`& .${ke.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ie(s)}`], t[`color${ie(r)}`], o && t.clickable, i && t.deletable, t[l]];
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
    ...st(e, ["background-color", "box-shadow"]),
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
    [`&.${ke.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${ke.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${ke.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${ke.deleteIcon}`]: {
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
        [`& .${ke.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${ke.avatar}`]: {
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
        [`& .${ke.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${ke.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${ke.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Ot(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${ke.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${ke.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${ke.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${ke.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Ot(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: !e.focusVisible && {
        [`&.${ke.focusVisible}`]: {
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
          [`&.${ke.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Ot(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        "&:hover": {
          backgroundColor: (e.vars || e).palette[n].dark
        },
        ...!e.focusVisible && {
          [`&.${ke.focusVisible}`]: {
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
        [`&.${ke.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        ...!e.focusVisible && {
          [`&.${ke.focusVisible}`]: {
            backgroundColor: (e.vars || e).palette.action.focus
          }
        },
        [`& .${ke.avatar}`]: {
          marginLeft: 4
        },
        [`& .${ke.icon}`]: {
          marginLeft: 4
        },
        [`& .${ke.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${ke.avatar}`]: {
          marginLeft: 2
        },
        [`& .${ke.icon}`]: {
          marginLeft: 2
        },
        [`& .${ke.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Ot()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${ke.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        ...!e.focusVisible && {
          [`&.${ke.focusVisible}`]: {
            backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
          }
        },
        [`& .${ke.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), OT = Y("span", {
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
function Mh(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const AT = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    slots: C = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: E,
    ...A
  } = T, L = x.useRef(null), M = ct(L, n), _ = (j) => {
    j.stopPropagation(), y(j);
  }, h = (j) => {
    j.currentTarget === j.target && Mh(j) && j.preventDefault(), w && w(j);
  }, O = (j) => {
    j.currentTarget === j.target && y && Mh(j) && y(j), b && b(j);
  }, P = s !== !1 && c ? !0 : s, $ = P || y ? na : a || "div", N = {
    ...r,
    component: $,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ x.isValidElement(f) && f.props.color || l,
    onDelete: !!y,
    clickable: P,
    variant: p
  }, I = MT(N), z = $ === na ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: I.focusVisible,
    ...y && {
      disableRipple: !0
    },
    ...E !== void 0 && {
      nativeButton: E
    }
  } : {};
  let B = null;
  y && (B = u && /* @__PURE__ */ x.isValidElement(u) ? /* @__PURE__ */ x.cloneElement(u, {
    className: ne(u.props.className, I.deleteIcon),
    onClick: _
  }) : /* @__PURE__ */ R.jsx(PT, {
    className: I.deleteIcon,
    onClick: _
  }));
  let V = null;
  o && /* @__PURE__ */ x.isValidElement(o) && (V = /* @__PURE__ */ x.cloneElement(o, {
    className: ne(I.avatar, o.props.className)
  }));
  let D = null;
  f && /* @__PURE__ */ x.isValidElement(f) && (D = /* @__PURE__ */ x.cloneElement(f, {
    className: ne(I.icon, f.props.className)
  }));
  const K = {
    slots: C,
    slotProps: k
  }, [H, te] = Me("root", {
    elementType: $T,
    externalForwardedProps: {
      ...K,
      ...A
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: ne(I.root, i),
    additionalProps: {
      disabled: P && d ? !0 : void 0,
      tabIndex: S && d ? -1 : v,
      ...z
    },
    getSlotProps: (j) => ({
      ...j,
      onClick: (J) => {
        var q;
        (q = j.onClick) == null || q.call(j, J), c == null || c(J);
      },
      onKeyDown: (J) => {
        var q;
        (q = j.onKeyDown) == null || q.call(j, J), h(J);
      },
      onKeyUp: (J) => {
        var q;
        (q = j.onKeyUp) == null || q.call(j, J), O(J);
      }
    })
  }), [G, oe] = Me("label", {
    elementType: OT,
    externalForwardedProps: K,
    ownerState: N,
    className: I.label
  });
  return /* @__PURE__ */ R.jsxs(H, {
    as: $,
    ...te,
    children: [V || D, /* @__PURE__ */ R.jsx(G, {
      ...oe,
      children: m
    }), B]
  });
}), NT = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), LT = {
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
}, _T = {
  opacity: 0,
  visibility: "hidden"
}, zT = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = vs(), o = {
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
  } = t, S = qf(r.motion.reducedMotion, a), C = x.useRef(null), k = ct(C, Jo(l), n), T = ln(C, c), E = ln(C, (O, P) => {
    S.shouldReduceMotion || Kf(O);
    const $ = Zl({
      style: g,
      timeout: p,
      easing: u
    }, {
      mode: "enter"
    }), N = S.getTransitionTiming({
      duration: $.duration,
      delay: $.delay
    });
    O.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: $.easing,
      delay: N.delay
    }), f && f(O, P);
  }), A = ln(C, m), L = ln(C, b), M = ln(C, (O) => {
    const P = Zl({
      style: g,
      timeout: p,
      easing: u
    }, {
      mode: "exit"
    }), $ = S.getTransitionTiming({
      duration: P.duration,
      delay: P.delay
    });
    O.style.transition = r.transitions.create("opacity", {
      duration: $.duration,
      easing: P.easing,
      delay: $.delay
    }), y && y(O);
  }), _ = ln(C, (O) => {
    O.style.transition = "", w && w(O);
  }), h = i ? (O) => {
    i(C.current, O);
  } : void 0;
  return /* @__PURE__ */ R.jsx(S0, {
    appear: s,
    in: d,
    nodeRef: C,
    onEnter: E,
    onEntered: A,
    onEntering: T,
    onExit: M,
    onExited: _,
    onExiting: L,
    addEndListener: h,
    reduceMotion: S.shouldReduceMotion,
    timeout: p,
    ...v,
    children: (O, {
      ownerState: P,
      ...$
    }) => {
      const N = v0(O, d, LT, _T, g, l.props.style);
      return /* @__PURE__ */ x.cloneElement(l, {
        style: N,
        ref: k,
        ...$
      });
    }
  });
});
function FT(e) {
  return me("MuiBackdrop", e);
}
fe("MuiBackdrop", ["root", "invisible"]);
const jT = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return he({
    root: ["root", n && "invisible"]
  }, FT, t);
}, BT = Y("div", {
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
}), DT = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, y = jT(c), w = {
    component: s,
    slots: d,
    slotProps: u
  }, [b, g] = Me("root", {
    elementType: BT,
    externalForwardedProps: w,
    className: ne(y.root, i),
    ownerState: c
  }), [p, v] = Me("transition", {
    elementType: zT,
    externalForwardedProps: w,
    ownerState: c
  });
  return /* @__PURE__ */ R.jsx(p, {
    in: a,
    timeout: f,
    ...m,
    ...v,
    children: /* @__PURE__ */ R.jsx(b, {
      ...g,
      ref: n,
      children: o
    })
  });
}), UT = fe("MuiBox", ["root"]), WT = au(), oa = Gb({
  themeId: zn,
  defaultTheme: WT,
  defaultClassName: UT.root,
  generateClassName: Gv.generate
});
function VT(e) {
  return me("MuiButton", e);
}
const Or = fe("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), HT = /* @__PURE__ */ x.createContext({}), KT = /* @__PURE__ */ x.createContext(void 0), YT = (e) => {
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
  }, d = he(u, VT, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, U0 = [{
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
}], GT = Y(na, {
  shouldForwardProp: (e) => yn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ie(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(Se(({
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
    ...st(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Or.disabled}`]: {
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
        [`&.${Or.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: (r = e.focusVisible) != null && r.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${Or.disabled}`]: {
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
        [`&.${Or.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Ot()).map(([i]) => ({
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
        [`&.${Or.focusVisible}`]: {
          boxShadow: ((o = e.focusVisible) == null ? void 0 : o.boxShadow) ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Or.disabled}`]: {
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
        ...st(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Or.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), QT = Y("span", {
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
      ...st(e, ["opacity"], {
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
  }, ...U0]
})), XT = Y("span", {
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
      ...st(e, ["opacity"], {
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
  }, ...U0]
})), qT = Y("span", {
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
})), $h = Y("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), ZT = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = x.useContext(HT), o = x.useContext(KT), i = Wo(r, t), s = ye({
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
    size: C = "medium",
    startIcon: k,
    type: T,
    variant: E = "text",
    ...A
  } = s, L = qr(g), M = v ?? /* @__PURE__ */ R.jsx(P0, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), _ = {
    ...s,
    color: a,
    component: u,
    disabled: f,
    disableElevation: m,
    disableFocusRipple: c,
    fullWidth: b,
    loading: p,
    loadingIndicator: M,
    loadingPosition: S,
    size: C,
    type: T,
    variant: E
  }, h = YT(_), O = (k || p && S === "start") && /* @__PURE__ */ R.jsx(QT, {
    className: h.startIcon,
    ownerState: _,
    children: k || /* @__PURE__ */ R.jsx($h, {
      className: h.loadingIconPlaceholder,
      ownerState: _
    })
  }), P = (y || p && S === "end") && /* @__PURE__ */ R.jsx(XT, {
    className: h.endIcon,
    ownerState: _,
    children: y || /* @__PURE__ */ R.jsx($h, {
      className: h.loadingIconPlaceholder,
      ownerState: _
    })
  }), $ = o || "", N = typeof p == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ R.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: p && /* @__PURE__ */ R.jsx(qT, {
        className: h.loadingIndicator,
        ownerState: _,
        children: M
      })
    })
  ) : null, {
    root: I,
    ...z
  } = h;
  return /* @__PURE__ */ R.jsxs(GT, {
    ownerState: _,
    className: ne(r.className, h.root, d, $),
    component: u,
    disabled: f || p,
    focusRipple: !c,
    focusVisibleClassName: ne(h.focusVisible, w),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: p ? L : g,
    ...A,
    classes: z,
    children: [O, S !== "end" && N, l, S === "end" && N, P]
  });
});
function W0(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function JT(e) {
  const t = ht(e);
  return e === t.body || e === t.documentElement ? nr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ni(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Oh(e) {
  return parseFloat(nr(e).getComputedStyle(e).paddingRight) || 0;
}
function eR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Ah(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !eR(s);
    l && a && Ni(s, o);
  });
}
function tR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = ht(r).body;
    else {
      const s = r.parentElement, l = nr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (JT(i)) {
      const s = W0(nr(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${Oh(i) + s}px`;
      const l = ht(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Oh(a) + s}px`;
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
function nR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class rR {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ni(t.modalRef, !1);
    const o = nR(n);
    Ah(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = tR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Ni(t.modalRef, n), Ah(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ni(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Nh = "data-mui-focusable";
function Lh(e) {
  return e ? e.hasAttribute(Nh) ? e : e.querySelector(`[${Nh}]`) : null;
}
const oR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function V0(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function iR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function sR(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || iR(e));
}
function lR(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(oR)).forEach((r, o) => {
    const i = V0(r);
    i === -1 || !sR(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function aR() {
  return !0;
}
function uR(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = lR,
    isEnabled: s = aR,
    open: l
  } = e, a = x.useRef(!1), u = x.useRef(null), d = x.useRef(null), f = x.useRef(null), m = x.useRef(null), c = x.useRef(!1), y = x.useRef(null), w = ct(Jo(t), y), b = x.useRef(null);
  x.useEffect(() => {
    !l || !y.current || (c.current = !n);
  }, [n, l]), x.useEffect(() => {
    if (a.current = !1, !l || !y.current)
      return;
    const v = ht(y.current), S = Gn(v), C = Lh(y.current) ?? y.current;
    return vl(y.current, S) || (C.hasAttribute("tabIndex") || C.setAttribute("tabIndex", "-1"), c.current && C.focus()), () => {
      !o && f.current && (a.current = !0, f.current.focus(), f.current = null);
    };
  }, [l]), x.useEffect(() => {
    if (!l || !y.current)
      return;
    const v = ht(y.current), S = (T) => {
      if (b.current = T, r || !s() || T.key !== "Tab")
        return;
      const E = y.current, A = Gn(v);
      if (E === null)
        return;
      const L = Lh(E);
      if (A === E || A === L) {
        const _ = i(E);
        if (_.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? _[_.length - 1].focus() : _[0].focus();
        return;
      }
      if (vl(E, A)) {
        const _ = i(E), h = _.indexOf(A);
        if (h === -1 || !_.some(($) => V0($) > 0))
          return;
        T.preventDefault();
        let P = 0;
        T.shiftKey ? P = h <= 0 ? _.length - 1 : h - 1 : P = h === _.length - 1 ? 0 : h + 1, _[P].focus();
      }
    }, C = () => {
      var L, M;
      const T = y.current;
      if (T === null)
        return;
      const E = Gn(v);
      if (!v.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (vl(T, E) || r && E !== u.current && E !== d.current)
        return;
      if (E !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!c.current)
        return;
      let A = [];
      if ((E === u.current || E === d.current) && (A = i(y.current)), A.length > 0) {
        const _ = !!((L = b.current) != null && L.shiftKey && ((M = b.current) == null ? void 0 : M.key) === "Tab"), h = A[0], O = A[A.length - 1];
        typeof h != "string" && typeof O != "string" && (_ ? O.focus() : h.focus());
      } else
        T.focus();
    };
    v.addEventListener("focusin", C), v.addEventListener("keydown", S, !0);
    const k = setInterval(() => {
      const T = Gn(v);
      T && T.tagName === "BODY" && C();
    }, 50);
    return () => {
      clearInterval(k), v.removeEventListener("focusin", C), v.removeEventListener("keydown", S, !0);
    };
  }, [n, r, o, s, l, i]);
  const g = (v) => {
    f.current === null && (f.current = v.relatedTarget), c.current = !0, m.current = v.target;
    const S = t.props.onFocus;
    S && S(v);
  }, p = (v) => {
    f.current === null && (f.current = v.relatedTarget), c.current = !0;
  };
  return /* @__PURE__ */ R.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ R.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ x.cloneElement(t, {
      ref: w,
      onFocus: g
    }), /* @__PURE__ */ R.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function cR(e) {
  return typeof e == "function" ? e() : e;
}
function dR(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const _h = () => {
}, Qs = new rR();
function fR(e) {
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
  } = e, d = x.useRef({}), f = x.useRef(null), m = x.useRef(null), c = x.useRef(null), y = ct(c, u), [w, b] = x.useState(!a), g = dR(s);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const v = () => ht(f.current), S = () => (d.current.modalRef = c.current, d.current.mount = f.current, d.current), C = () => {
    Qs.mount(S(), {
      disableScrollLock: n
    }), c.current && (c.current.scrollTop = 0);
  }, k = it(() => {
    const $ = cR(t) || v().body;
    Qs.add(S(), $), c.current && C();
  }), T = () => Qs.isTopModal(S()), E = it(($) => {
    f.current = $, $ && (m.current = $, a && T() ? C() : c.current && Ni(c.current, p));
  }), A = x.useCallback(() => {
    Qs.remove(S(), p);
  }, [p]);
  x.useEffect(() => () => {
    A();
  }, [A]), x.useEffect(() => {
    a ? k() : (!g || !r) && A();
  }, [a, A, g, r, k]);
  const L = ($) => (N) => {
    var I;
    (I = $.onKeyDown) == null || I.call($, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !T()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, M = ($) => (N) => {
    var I;
    (I = $.onClick) == null || I.call($, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, _ = ($ = {}) => {
    const N = E0(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const I = {
      ...N,
      ...$
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
      onKeyDown: L(I),
      ref: y
    };
  }, h = ($ = {}) => {
    const N = $;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: M(N),
      open: a
    };
  }, O = () => {
    const $ = () => {
      b(!1), o && o();
    }, N = () => {
      b(!0), i && i(), r && A();
    };
    return {
      onEnter: ch($, (s == null ? void 0 : s.props.onEnter) ?? _h),
      onExited: ch(N, (s == null ? void 0 : s.props.onExited) ?? _h)
    };
  }, P = !a && g && !w ? m.current ?? t : t;
  return {
    getRootProps: _,
    getBackdropProps: h,
    getTransitionProps: O,
    rootRef: y,
    portalRef: E,
    portalContainer: P,
    isTopModal: T,
    exited: w,
    hasTransition: g
  };
}
function pR(e) {
  return me("MuiModal", e);
}
fe("MuiModal", ["root", "hidden", "backdrop"]);
const mR = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return he({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, pR, r);
}, hR = Y("div", {
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
}))), gR = Y(DT, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), yR = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    slotProps: C = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...E
  } = r, A = {
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
    getRootProps: L,
    getBackdropProps: M,
    getTransitionProps: _,
    portalRef: h,
    portalContainer: O,
    isTopModal: P,
    exited: $,
    hasTransition: N
  } = fR({
    ...A,
    rootRef: n
  }), I = {
    ...A,
    exited: $
  }, z = mR(I), B = {};
  if (l.props.tabIndex === void 0 && (B.tabIndex = "-1"), N) {
    const {
      onEnter: G,
      onExited: oe
    } = _();
    B.onEnter = G, B.onExited = oe;
  }
  const V = {
    slots: k,
    slotProps: C
  }, [D, K] = Me("root", {
    ref: n,
    elementType: hR,
    externalForwardedProps: {
      ...V,
      ...E,
      component: u
    },
    getSlotProps: L,
    ownerState: I,
    className: ne(i, z == null ? void 0 : z.root, !I.open && I.exited && (z == null ? void 0 : z.hidden))
  }), [H, te] = Me("backdrop", {
    elementType: gR,
    externalForwardedProps: V,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => M({
      ...G,
      onClick: (oe) => {
        G != null && G.onClick && G.onClick(oe);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: I
  });
  return !b && !S && (!N || $) ? null : /* @__PURE__ */ R.jsx(j0, {
    ref: h,
    container: O,
    disablePortal: m,
    children: /* @__PURE__ */ R.jsxs(D, {
      ...K,
      children: [w ? null : /* @__PURE__ */ R.jsx(H, {
        ...te
      }), /* @__PURE__ */ R.jsx(uR, {
        disableEnforceFocus: f,
        disableAutoFocus: d,
        disableRestoreFocus: c,
        isEnabled: P,
        open: S,
        children: /* @__PURE__ */ x.cloneElement(l, B)
      })]
    })
  });
});
function H0(e) {
  return me("MuiSelect", e);
}
const _r = fe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), vR = (e) => {
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
  }, u = he(a, Uk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, xR = Y(du, {
  shouldForwardProp: (e) => yn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...uu(e, t), !n.disableUnderline && t.underline];
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
    ...st(e, "background-color", {
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
    [`&.${$r.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${$r.disabled}`]: {
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
          ...st(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${$r.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${$r.error}`]: {
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
          ...st(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${$r.disabled}, .${$r.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${$r.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ot()).map(([s]) => {
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
        [`&.${_r.root}`]: {
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
})), SR = Y(fu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: cu
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
}))), ip = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, w = vR(r), b = {
    root: {
      ownerState: y
    },
    input: {
      ownerState: y
    }
  }, g = d ? mt(b, d) : b, p = f.root ?? xR, v = f.input ?? SR;
  return /* @__PURE__ */ R.jsx(Gf, {
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
ip.muiName = "Input";
function wR(e) {
  return me("MuiFormControl", e);
}
fe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const bR = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ie(n)}`, r && "fullWidth"]
  };
  return he(o, wR, t);
}, CR = Y("div", {
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
}), kR = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, v = bR(p), [S, C] = x.useState(() => {
    let P = !1;
    return o && x.Children.forEach(o, ($) => {
      if (!ic($, ["Input", "Select"]))
        return;
      const N = ic($, ["Select"]) ? $.props.input : $;
      N && Lk(N.props) && (P = !0);
    }), P;
  }), [k, T] = x.useState(() => {
    let P = !1;
    return o && x.Children.forEach(o, ($) => {
      ic($, ["Input", "Select"]) && (ql($.props, !0) || ql($.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [E, A] = x.useState(!1);
  a && E && A(!1);
  const L = d !== void 0 && !a ? d : E;
  let M;
  x.useRef(!1);
  const _ = x.useCallback(() => {
    T(!0);
  }, []), h = x.useCallback(() => {
    T(!1);
  }, []), O = x.useMemo(() => ({
    adornedStart: S,
    setAdornedStart: C,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: L,
    fullWidth: f,
    hiddenLabel: m,
    size: w,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: h,
    onFilled: _,
    registerEffect: M,
    required: y,
    variant: b
  }), [S, s, a, u, k, L, f, m, M, h, _, y, w, b]);
  return /* @__PURE__ */ R.jsx(Vf.Provider, {
    value: O,
    children: /* @__PURE__ */ R.jsx(CR, {
      as: l,
      ownerState: p,
      className: ne(v.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
});
var zh;
const ER = (e) => {
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
  return he(u, Wk, t);
}, TR = Y("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ie(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
  [`&.${uh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${uh.error}`]: {
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
}))), RR = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, [w] = Zo({
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
  const g = ER(b);
  return /* @__PURE__ */ R.jsx(TR, {
    as: s,
    className: ne(g.root, i),
    ref: n,
    ...y,
    ownerState: b,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      zh || (zh = /* @__PURE__ */ R.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), PR = (e) => {
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
  return he(a, Vk, t);
}, IR = Y("label", {
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
  variants: [...Object.entries(e.palette).filter(Ot()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${$i.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${$i.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${$i.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), MR = Y("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(Se(({
  theme: e
}) => ({
  [`&.${$i.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), $R = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, [y] = Zo({
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
  }, b = PR(w);
  return /* @__PURE__ */ R.jsxs(IR, {
    as: l,
    ownerState: w,
    className: ne(b.root, i),
    ref: n,
    ...c,
    children: [o, y.required && /* @__PURE__ */ R.jsxs(MR, {
      ownerState: w,
      "aria-hidden": !0,
      className: b.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Li(e) {
  return `scale(${e}, ${e ** 2})`;
}
const OR = {
  entering: {
    opacity: 1,
    transform: Li(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Li(0.75)
  },
  exited: {
    opacity: 0,
    transform: Li(0.75)
  }
}, AR = {
  opacity: 0,
  transform: Li(0.75),
  visibility: "hidden"
}, ia = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = t, p = x.useRef(null), v = vs(), S = qf(v.motion.reducedMotion, s), C = x.useRef(null), k = ct(C, Jo(i), n), T = ln(C, f), E = ln(C, (O, P) => {
    S.shouldReduceMotion || Kf(O);
    const {
      duration: $,
      delay: N,
      easing: I
    } = Zl({
      style: w,
      timeout: b,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    b === "auto" && !S.shouldReduceMotion ? (z = v.transitions.getAutoHeightDuration(O.clientHeight), p.current = z) : (z = $, p.current = null);
    const B = S.getTransitionTiming({
      duration: z,
      delay: N
    });
    O.style.transition = [v.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), v.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay,
      easing: I
    })].join(","), u && u(O, P);
  }), A = ln(C, d), L = ln(C, y), M = ln(C, (O) => {
    const {
      duration: P,
      delay: $,
      easing: N
    } = Zl({
      style: w,
      timeout: b,
      easing: l
    }, {
      mode: "exit"
    });
    let I;
    b === "auto" && !S.shouldReduceMotion ? (I = v.transitions.getAutoHeightDuration(O.clientHeight), p.current = I) : (I = P, p.current = null);
    const z = S.getTransitionTiming({
      duration: I,
      delay: $
    });
    O.style.transition = [v.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), v.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), O.style.opacity = 0, O.style.transform = Li(0.75), m && m(O);
  }), _ = ln(C, (O) => {
    O.style.transition = "", c && c(O);
  }), h = r ? (O) => {
    r(C.current, O);
  } : void 0;
  return /* @__PURE__ */ R.jsx(S0, {
    appear: o,
    in: a,
    nodeRef: C,
    onEnter: E,
    onEntered: A,
    onEntering: T,
    onExit: M,
    onExited: _,
    onExiting: L,
    addEndListener: h,
    getAutoTimeout: b === "auto" ? () => p.current : void 0,
    reduceMotion: S.shouldReduceMotion,
    timeout: b === "auto" ? null : b,
    ...g,
    children: (O, {
      ownerState: P,
      ...$
    }) => {
      const N = v0(O, a, OR, AR, w, i.props.style);
      return /* @__PURE__ */ x.cloneElement(i, {
        style: N,
        ref: k,
        ...$
      });
    }
  });
});
ia && (ia.muiSupportAuto = !0);
function NR(e) {
  return me("MuiInputLabel", e);
}
const LR = fe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), _R = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = he({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Hk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, zR = Y(du, {
  shouldForwardProp: (e) => yn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...uu(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${LR.root} + &`]: {
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
          ...st(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${fi.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${fi.error}`]: {
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
          ...st(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${fi.disabled}, .${fi.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${fi.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Ot()).map(([r]) => ({
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
})), FR = Y(fu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: cu
})({}), sp = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, c = _R(r), w = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, b = u ? mt(u, w) : w, g = d.root ?? zR, p = d.input ?? FR;
  return /* @__PURE__ */ R.jsx(Gf, {
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
sp.muiName = "Input";
const Xs = fe("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), jR = (e) => {
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
  }, u = he(a, NR, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, BR = Y($R, {
  shouldForwardProp: (e) => yn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${$i.asterisk}`]: t.asterisk
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
      ...st(e, ["color", "transform", "max-width"], {
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
}))), DR = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, [d, f] = Zo({
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
  }, y = jR(c);
  return /* @__PURE__ */ R.jsx(BR, {
    "data-shrink": m,
    ref: n,
    className: ne(y.root, a),
    ...u,
    ownerState: c,
    classes: y
  });
}), UR = /* @__PURE__ */ x.createContext({});
function WR(e) {
  return me("MuiList", e);
}
fe("MuiList", ["root", "padding", "dense", "subheader"]);
const VR = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return he({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, WR, t);
}, HR = Y("ul", {
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
}), KR = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, c = VR(m);
  return /* @__PURE__ */ R.jsx(UR.Provider, {
    value: f,
    children: /* @__PURE__ */ R.jsxs(HR, {
      as: s,
      className: ne(c.root, i),
      ref: n,
      ownerState: m,
      ...d,
      children: [u, o]
    })
  });
}), YR = /* @__PURE__ */ x.createContext(void 0), GR = Object.is;
function QR(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !GR(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const XR = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function qR(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = _i,
    wrap: s = !0
  } = e, [l, a] = x.useState(t), [u, d] = x.useState(t);
  let f = l;
  t !== u && (d(t), t !== void 0 && t !== l && (f = t, a(t)));
  const m = x.useRef(null), c = x.useRef(/* @__PURE__ */ new Map()), [y, w] = x.useState(0), b = x.useMemo(() => bd(c.current), [y]), g = Fh(f, b, i, n), p = x.useRef(g);
  p.current = g;
  const v = x.useCallback(() => {
    const _ = bd(c.current), h = Fh(p.current, _, i, n);
    return G0(_, h);
  }, [n, i]), S = x.useCallback(() => c.current, []), C = it((_) => {
    const h = c.current.get(_.id);
    QR(h ?? null, _) || (c.current.set(_.id, _), w((O) => O + 1));
  }), k = it((_) => {
    c.current.delete(_) && w((h) => h + 1);
  }), T = it((_) => {
    a(_);
  }), E = x.useCallback((_) => p.current === _, []), A = x.useCallback((_, h, O, P) => {
    var I;
    const $ = qs(c.current), N = K0($, _, h, O, P ?? i);
    return N ? ((I = N.element) == null || I.focus(), a(N.id), N) : null;
  }, [i]), L = x.useCallback((_, h, O) => ({
    onFocus: (N) => {
      h == null || h(N);
      const I = qs(c.current), z = X0(I, N.target);
      z !== -1 && a(I[z].id);
    },
    onKeyDown: (N) => {
      if (O == null || O(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !XR.includes(N.key))
        return;
      let I = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (I = "ArrowRight", z = "ArrowLeft");
      const B = qs(c.current), V = Gn(ht(m.current)), D = V === m.current;
      let K = jh(B, V, p.current), H = "next";
      switch (N.key) {
        case I:
          H = "previous", N.preventDefault(), D && (K = B.length);
          break;
        case z:
          N.preventDefault(), D && (K = -1);
          break;
        case "Home":
          N.preventDefault(), K = -1;
          break;
        case "End":
          N.preventDefault(), H = "previous", K = B.length;
          break;
        default:
          return;
      }
      A(K, H, s);
    },
    ref: tP(_, (N) => {
      m.current = N;
    })
  }), [A, o, r, s]), M = x.useCallback((_) => {
    var N;
    const h = qs(c.current), O = Gn(ht(m.current)), $ = O === m.current ? -1 : jh(h, O, p.current);
    return ((N = A($, "next", !0, _)) == null ? void 0 : N.id) ?? null;
  }, [A]);
  return x.useMemo(() => ({
    activeItemId: g,
    focusNext: M,
    getActiveItem: v,
    getContainerProps: L,
    getItemMap: S,
    isItemActive: E,
    registerItem: C,
    setActiveItemId: T,
    unregisterItem: k
  }), [g, M, v, L, S, E, C, T, k]);
}
function Fh(e, t, n, r) {
  return e != null ? ZR(e, t, n) : JR(t, n, r);
}
function ZR(e, t, n) {
  var o;
  const r = Q0(t, e);
  return r === -1 ? Y0(t, n) : n(t[r]) ? t[r].id : ((o = K0(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function JR(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = G0(e, r);
    if (o && t(o))
      return o.id;
  }
  return Y0(e, t);
}
function jh(e, t, n) {
  if (t) {
    const r = X0(e, t);
    if (r !== -1)
      return r;
  }
  return Q0(e, n);
}
function K0(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Bh(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = Bh(l, i, n, r);
    else
      return u;
  }
  return null;
}
function Y0(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function G0(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Q0(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function X0(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function bd(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Cd).sort((o, i) => eP(o.element, i.element)), r = t.filter((o) => !Cd(o));
  return [...n, ...r];
}
function qs(e) {
  return bd(e).filter(Cd);
}
function Bh(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function _i(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Cd(e) {
  return e.element != null && e.element.isConnected;
}
function eP(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function tP(...e) {
  return (t) => {
    e.forEach((n) => {
      md(n ?? null, t);
    });
  };
}
function nP(e, t) {
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
function rP(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function oP(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Sl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const q0 = /* @__PURE__ */ x.createContext(null);
function iP() {
  return x.useContext(q0);
}
const sP = q0.Provider, lP = /* @__PURE__ */ x.createContext(void 0);
function aP(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Z0(e, t) {
  if (t === void 0)
    return !0;
  let n = aP(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function uP(e, t) {
  return Z0(e, t) ? _i(e) : !1;
}
function cP(e, t) {
  nP(e, t);
}
const dP = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = t, c = x.useRef(null), y = x.useRef(!1), [w, b] = x.useState(!1), g = iP(), p = x.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), v = x.useCallback((P) => {
    var $, N, I;
    return f === "selectedMenu" ? (($ = P.find((z) => z.selected && _i(z))) == null ? void 0 : $.id) ?? ((N = P.find((z) => _i(z))) == null ? void 0 : N.id) ?? null : ((I = P.find((z) => _i(z))) == null ? void 0 : I.id) ?? null;
  }, [f]), S = qR({
    activeItemId: void 0,
    getDefaultActiveItemId: v,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: C,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: E,
    getItemMap: A
  } = S, L = it((P = !1) => {
    if (!c.current || !P && y.current)
      return null;
    if (i) {
      const $ = T();
      if ($ != null && $.element) {
        const N = Array.from(A().values()).some((z) => z.selected), I = f === "menu" && N && !$.selected && g == null;
        return b(I), cP($.element, g), y.current = !0, $.element;
      }
      return o ? (b(!1), c.current.focus(), c.current) : null;
    }
    return o ? (b(!1), c.current.focus(), y.current = !0, c.current) : (b(!1), null);
  });
  ut(() => {
    if (!o && !i) {
      y.current = !1, b(!1);
      return;
    }
    L();
  }, [C, i, o, L]), x.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: $
    }) => {
      const N = !c.current.style.width;
      if (P.clientHeight < c.current.clientHeight && N) {
        const I = nr(P), z = W0(I);
        if (z > 0) {
          const B = `${z}px`, V = $ === "rtl" ? "paddingLeft" : "paddingRight", D = parseFloat(I.getComputedStyle(c.current)[V]) || 0;
          c.current.style[V] = `${D + z}px`, c.current.style.width = `calc(100% + ${B})`;
        }
      }
      return c.current;
    },
    focusInitialTarget: () => {
      if (!c.current)
        return null;
      const P = Gn(ht(c.current));
      return P && vl(c.current, P) ? P : L(!0);
    }
  }), [L]);
  const M = E(void 0, m.onFocus), _ = ct(c, M.ref, n), h = x.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: w,
    variant: f
  }), [a, w, f]), O = it((P) => {
    if (w && b(!1), (P.ctrlKey || P.metaKey || P.altKey) && d) {
      d(P);
      return;
    }
    if (M.onKeyDown(P), P.key.length === 1) {
      const N = p.current, I = P.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && I !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push(I);
      const B = Gn(ht(c.current)), V = B && !N.repeating && Z0(B, N);
      N.previousKeyMatched && (V || k((D) => uP(D, N)) != null) ? P.preventDefault() : N.previousKeyMatched = !1;
    }
    d && d(P);
  });
  return /* @__PURE__ */ R.jsx(KR, {
    role: "menu",
    ref: _,
    className: l,
    onKeyDown: O,
    tabIndex: -1,
    ...m,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ R.jsx(lP.Provider, {
      value: h,
      children: /* @__PURE__ */ R.jsx(YR.Provider, {
        value: S,
        children: s
      })
    })
  });
});
function fP(e) {
  return me("MuiPopover", e);
}
fe("MuiPopover", ["root", "paper"]);
function Dh(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Uh(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Wh(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Zs(e) {
  return typeof e == "function" ? e() : e;
}
const pP = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"]
  }, fP, t);
}, mP = Y(yR, {
  name: "MuiPopover",
  slot: "Root"
})({}), J0 = Y(pu, {
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
}), hP = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    ...C
  } = r, k = x.useRef(), T = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: c,
    marginThreshold: y,
    transformOrigin: p,
    transitionDuration: v
  }, E = pP(T), A = x.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const j = Zs(i), q = (j && j.nodeType === 1 ? j : ht(k.current).body).getBoundingClientRect();
    return {
      top: q.top + Dh(q, s.vertical),
      left: q.left + Uh(q, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), L = x.useCallback((j) => ({
    vertical: Dh(j, p.vertical),
    horizontal: Uh(j, p.horizontal)
  }), [p.horizontal, p.vertical]), M = x.useCallback((j) => {
    const J = {
      width: j.offsetWidth,
      height: j.offsetHeight
    }, q = L(J);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Wh(q)
      };
    const ge = A();
    let de = ge.top - q.vertical, le = ge.left - q.horizontal;
    const se = de + J.height, Ee = le + J.width, Oe = nr(Zs(i)), xe = Oe.innerHeight - y, Ye = Oe.innerWidth - y;
    if (y != null && de < y) {
      const ae = de - y;
      de -= ae, q.vertical += ae;
    } else if (y != null && se > xe) {
      const ae = se - xe;
      de -= ae, q.vertical += ae;
    }
    if (y != null && le < y) {
      const ae = le - y;
      le -= ae, q.horizontal += ae;
    } else if (Ee > Ye) {
      const ae = Ee - Ye;
      le -= ae, q.horizontal += ae;
    }
    return {
      top: `${Math.round(de)}px`,
      left: `${Math.round(le)}px`,
      transformOrigin: Wh(q)
    };
  }, [i, a, A, L, y]), [_, h] = x.useState(w), O = x.useCallback(() => {
    const j = k.current;
    if (!j)
      return;
    const J = M(j);
    J.top != null && j.style.setProperty("top", J.top), J.left != null && (j.style.left = J.left), j.style.transformOrigin = J.transformOrigin, h(!0);
  }, [M]);
  x.useEffect(() => (S && window.addEventListener("scroll", O), () => window.removeEventListener("scroll", O)), [i, S, O]);
  const P = () => {
    O();
  }, $ = () => {
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
    const j = h0(() => {
      O();
    }), J = nr(Zs(i));
    return J.addEventListener("resize", j), () => {
      j.clear(), J.removeEventListener("resize", j);
    };
  }, [i, w, O]);
  let N = v;
  const I = {
    slots: b,
    slotProps: g
  }, [z, B] = Me("transition", {
    elementType: ia,
    externalForwardedProps: I,
    ownerState: T,
    getSlotProps: (j) => ({
      ...j,
      onEntering: (J, q) => {
        var ge;
        (ge = j.onEntering) == null || ge.call(j, J, q), P();
      },
      onExited: (J) => {
        var q;
        (q = j.onExited) == null || q.call(j, J), $();
      }
    }),
    additionalProps: {
      appear: !0,
      in: w
    }
  });
  v === "auto" && !z.muiSupportAuto && (N = void 0);
  const V = f || (i ? ht(Zs(i)).body : void 0), [D, {
    slots: K,
    slotProps: H,
    ...te
  }] = Me("root", {
    ref: n,
    elementType: mP,
    externalForwardedProps: {
      ...I,
      ...C
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: b.backdrop
      },
      slotProps: {
        backdrop: t2(typeof g.backdrop == "function" ? g.backdrop(T) : g.backdrop, {
          invisible: !0
        })
      },
      container: V,
      open: w
    },
    ownerState: T,
    className: ne(E.root, d)
  }), [G, oe] = Me("paper", {
    ref: k,
    className: E.paper,
    elementType: J0,
    externalForwardedProps: I,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: c,
      style: _ ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ R.jsx(D, {
    ...te,
    ...!Xl(D) && {
      slots: K,
      slotProps: H,
      disableAutoFocus: m,
      disableScrollLock: S
    },
    children: /* @__PURE__ */ R.jsx(z, {
      ...B,
      timeout: N,
      children: /* @__PURE__ */ R.jsx(G, {
        ...oe,
        children: u
      })
    })
  });
});
function gP(e) {
  return me("MuiMenu", e);
}
fe("MuiMenu", ["root", "paper", "list"]);
const yP = {
  vertical: "top",
  horizontal: "right"
}, vP = {
  vertical: "top",
  horizontal: "left"
}, xP = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, gP, t);
}, SP = Y(hP, {
  shouldForwardProp: (e) => yn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), wP = Y(J0, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), bP = Y(dP, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), CP = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, b = n0(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: f,
    variant: m
  }, p = xP(g), v = o && u, S = v && !l, C = x.useRef(null), k = (P, $) => {
    var N, I;
    C.current && (C.current.adjustStyleForScrollbar(P, {
      direction: b ? "rtl" : "ltr"
    }), v && ((I = (N = C.current).focusInitialTarget) == null || I.call(N)));
  }, T = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  }, E = {
    slots: c,
    slotProps: y
  }, A = F0({
    elementType: c.root,
    externalSlotProps: y.root,
    ownerState: g,
    className: [p.root, s]
  }), [L, M] = Me("paper", {
    className: p.paper,
    elementType: wP,
    externalForwardedProps: E,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [_, h] = Me("list", {
    className: p.list,
    elementType: bP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: E,
    getSlotProps: (P) => ({
      ...P,
      onKeyDown: ($) => {
        var N;
        T($), (N = P.onKeyDown) == null || N.call(P, $);
      }
    }),
    ownerState: g
  }), O = typeof y.transition == "function" ? y.transition(g) : y.transition;
  return /* @__PURE__ */ R.jsx(
    SP,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: b ? "right" : "left"
      },
      transformOrigin: b ? yP : vP,
      slots: {
        root: c.root,
        paper: L,
        backdrop: c.backdrop,
        transition: c.transition
      },
      slotProps: {
        root: A,
        paper: M,
        backdrop: typeof y.backdrop == "function" ? y.backdrop(g) : y.backdrop,
        transition: {
          ...O,
          onEntering: (...P) => {
            var $;
            k(...P), ($ = O == null ? void 0 : O.onEntering) == null || $.call(O, ...P);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: f,
      ownerState: g,
      ...w,
      classes: d,
      children: /* @__PURE__ */ R.jsx(_, {
        actions: C,
        autoFocus: v,
        autoFocusItem: S,
        variant: m,
        ...h,
        children: i
      })
    }
  );
}), kP = (e) => {
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
  return he(l, Kk, t);
}, e1 = Y("select", {
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
  [`&.${Qf.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${Xs.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${Kt.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${Kt.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${Kt.root}:has(> & ~ .${Xs.root})`]: {
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
      [`.${Kt.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${Kt.root}:has(> & ~ .${Xs.root})`]: {
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
      [`.${Kt.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${Kt.root}:has(> & ~ .${Xs.root})`]: {
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
})), EP = Y(e1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: yn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Qf.multiple}`]: t.multiple
    }];
  }
})({}), t1 = Y("svg", {
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
  [`&.${Qf.disabled}`]: {
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
})), TP = Y(t1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ie(n.variant)}`], n.open && t.iconOpen];
  }
})({}), RP = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, f = kP(d);
  return /* @__PURE__ */ R.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ R.jsx(EP, {
      ownerState: d,
      className: ne(f.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ R.jsx(TP, {
      as: s,
      ownerState: d,
      className: f.icon
    })]
  });
});
var Vh;
const PP = Y("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: yn
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
}), IP = Y("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: yn
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
      ...st(e, "width", {
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
      ...st(e, "max-width", {
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
      ...st(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function MP(e) {
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
  return /* @__PURE__ */ R.jsx(PP, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ R.jsx(IP, {
      ownerState: a,
      children: l ? /* @__PURE__ */ R.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Vh || (Vh = /* @__PURE__ */ R.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const $P = (e) => {
  const {
    classes: t
  } = e, r = he({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Yk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, OP = Y(du, {
  shouldForwardProp: (e) => yn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: uu
})(Se(({
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
    variants: [...Object.entries(e.palette).filter(Ot()).map(([n]) => ({
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
        [`&.${_r.root}`]: {
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
})), AP = Y(MP, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(Se(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), NP = Y(fu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: cu
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
}))), lp = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, c = $P(r), [y, w] = Zo({
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
  }, g = u.root ?? OP, p = u.input ?? NP, [v, S] = Me("notchedOutline", {
    elementType: AP,
    className: c.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: b,
    externalForwardedProps: {
      slots: u,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && y.required ? /* @__PURE__ */ R.jsxs(x.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ R.jsx(Gf, {
    slots: {
      root: g,
      input: p
    },
    slotProps: d,
    renderSuffix: (C) => /* @__PURE__ */ R.jsx(v, {
      ...S,
      notched: typeof a < "u" ? a : !!(C.startAdornment || C.filled || C.focused)
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
lp.muiName = "Input";
function LP(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function n1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return x.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ x.isValidElement(n) && (t += n1(n.props.children));
  }), t;
}
function _P(e, t, n = 0) {
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
function zP(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function FP(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ x.isValidElement(i) || !LP(i) || i.props.disabled)
      continue;
    const s = n1(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Sl(t, i.props.value) && (r = n.length), n.push({
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
var Hh;
const Js = 2, jP = 400, Kh = 200, BP = 750, Ar = " ", DP = "ArrowUp", UP = "ArrowDown", WP = "Enter";
function Yh(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Js && e.clientX <= r.right + Js && e.clientY >= r.top - Js && e.clientY <= r.bottom + Js;
}
const VP = Y(e1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${_r.select}`]: t.select
      },
      {
        [`&.${_r.select}`]: t[n.variant]
      },
      {
        [`&.${_r.error}`]: t.error
      },
      {
        [`&.${_r.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${_r.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), HP = Y(t1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), KP = Y("input", {
  shouldForwardProp: (e) => g0(e) && e !== "classes",
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
}), YP = (e) => {
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
  }, H0, t);
}, GP = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var fp, pp, mp, hp;
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
    onChange: C,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: E,
    // eslint-disable-next-line react/prop-types
    onMouseDown: A,
    onOpen: L,
    open: M,
    readOnly: _,
    renderValue: h,
    required: O,
    SelectDisplayProps: P = {},
    tabIndex: $,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: I,
    variant: z = "standard",
    ...B
  } = t, [V, D] = hd({
    controlled: I,
    default: d,
    name: "Select"
  }), [K, H] = hd({
    controlled: M,
    default: u,
    name: "Select"
  }), te = x.useRef(null), G = x.useRef(null), oe = x.useRef(null), j = x.useRef(!1), J = x.useRef(!1), q = x.useRef(null), ge = x.useRef(!1), de = x.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), le = x.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), se = Qn(), Ee = Qn(), Oe = Qn(), [xe, Ye] = x.useState(null), {
    current: ae
  } = x.useRef(M != null), [je, Je] = x.useState(), [dt, Qe] = x.useState(null), wt = ct(n, w), Pt = x.useCallback((W) => {
    G.current = W, W && Ye(W);
  }, []), Le = xe == null ? void 0 : xe.parentNode;
  x.useImperativeHandle(wt, () => ({
    focus: () => {
      G.current.focus();
    },
    node: te.current,
    value: V
  }), [V]);
  const Ce = xe !== null && K, pe = x.useCallback(() => {
    Oe.clear(), le.current.buffer = "", le.current.previousSearchIndex = null, le.current.matchedIndex = null;
  }, [Oe]);
  ut(() => {
    j.current = Ce, Ce && pe();
  }, [Ce, pe]);
  const bt = x.useCallback(() => {
    se.clear(), Ee.clear();
  }, [se, Ee]), Z = x.useCallback(() => {
    bt(), ge.current = !1, de.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [bt]), ee = x.useCallback(() => {
    q.current && (q.current(), q.current = null);
  }, []);
  x.useEffect(() => {
    Ce || (Z(), ee());
  }, [Ce, Z, ee]), x.useEffect(() => () => {
    Z(), ee(), pe();
  }, [Z, ee, pe]), x.useEffect(() => {
    if (!Ce || !Le || s || typeof ResizeObserver > "u")
      return;
    const W = new ResizeObserver(() => {
      Je(Le.clientWidth);
    });
    return W.observe(Le), () => {
      W.disconnect();
    };
  }, [Ce, Le, s]), x.useEffect(() => {
    u && K && xe && !ae && (Je(s ? null : Le.clientWidth), G.current.focus());
  }, [xe, s]), x.useEffect(() => {
    i && G.current.focus();
  }, [i]), x.useEffect(() => {
    if (!b)
      return;
    const W = ht(G.current).getElementById(b);
    if (W) {
      const X = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return W.addEventListener("click", X), () => {
        W.removeEventListener("click", X);
      };
    }
  }, [b]);
  const _e = it((W, X) => {
    W || (Z(), ee()), W ? (pe(), Qe(rP(X)), L && L(X)) : (Qe(null), k && k(X)), ae || (j.current = W, Je(s ? null : Le.clientWidth), H(W));
  }), Xe = () => {
    Z(), J.current ? Ee.start(Kh, () => {
      de.current.allowUnselectedMouseUp = !0, se.start(Kh, () => {
        de.current.allowSelectedMouseUp = !0;
      });
    }) : se.start(jP, () => {
      de.current.allowSelectedMouseUp = !0, de.current.allowUnselectedMouseUp = !0;
    });
  }, et = (W) => {
    if (A == null || A(W), W.button !== 0 || (W.preventDefault(), !G.current))
      return;
    G.current.focus();
    const X = ht(W.currentTarget);
    Xe(), ee();
    const ue = (We) => {
      q.current = null, G.current && (Yh(We, G.current) || Yh(We, oe.current) || !j.current && ae || _e(!1, We));
    };
    X.addEventListener("mouseup", ue, {
      capture: !0,
      once: !0
    }), q.current = () => {
      X.removeEventListener("mouseup", ue, !0);
    }, _e(!0, W);
  }, Ae = (W) => {
    _e(!1, W);
  }, ei = x.Children.toArray(l), yu = (W) => {
    const X = ei.find((ue) => ue.props.value === W.target.value);
    X !== void 0 && (D(X.props.value), C && C(W, X));
  }, ws = (W, X, ue) => {
    if (D(ue), C) {
      const We = W.nativeEvent || W, It = new We.constructor(We.type, We);
      Object.defineProperty(It, "target", {
        writable: !0,
        value: {
          value: ue,
          name: v
        }
      }), C(It, X);
    }
  }, vu = (W) => (X) => {
    ge.current = !1;
    let ue;
    if (X.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        ue = Array.isArray(V) ? V.slice() : [];
        const We = V.indexOf(W.props.value);
        We === -1 ? ue.push(W.props.value) : ue.splice(We, 1);
      } else
        ue = W.props.value;
      W.props.onClick && W.props.onClick(X), V !== ue && ws(X, W, ue), p || _e(!1, X);
    }
  }, xu = (W, X) => (ue) => {
    var Es, no;
    if ((no = (Es = W.props).onMouseUp) == null || no.call(Es, ue), ge.current) {
      ge.current = !1;
      return;
    }
    const We = !de.current.allowSelectedMouseUp && X, It = !de.current.allowUnselectedMouseUp && !X;
    We || It || ue.currentTarget.click();
  }, Su = (W) => {
    var gp;
    const X = le.current, ue = X.buffer !== "";
    if (Ce || p || f || W.defaultPrevented || (gp = W.nativeEvent) != null && gp.isComposing || W.key.length !== 1 || W.ctrlKey || W.metaKey || W.altKey || W.key === Ar && !ue)
      return !1;
    W.key === Ar && W.preventDefault();
    const We = X.buffer === "", {
      options: It,
      selectedIndex: Es
    } = FP(ei, V);
    if (It.length === 0)
      return W.key !== Ar && pe(), !0;
    We && (X.previousSearchIndex = Es);
    const no = W.key.toLowerCase();
    X.buffer === no && zP(It, no) && (X.buffer = "", X.previousSearchIndex = X.matchedIndex), X.buffer += no, Oe.start(BP, pe);
    const ku = _P(It, X.buffer, (X.previousSearchIndex ?? -1) + 1);
    if (ku !== -1) {
      const Eu = It[ku];
      return X.matchedIndex = ku, Sl(V, Eu.value) || ws(W, Eu.child, Eu.value), !0;
    }
    return W.key !== Ar && pe(), !0;
  }, wu = (W) => {
    if (!_) {
      const X = Su(W), ue = W.key === Ar || W.key === DP || W.key === UP || W.key === WP;
      !X && ue && (W.preventDefault(), _e(!0, W)), E == null || E(W);
    }
  }, re = (W) => {
    pe(), !Ce && S && (Object.defineProperty(W, "target", {
      writable: !0,
      value: {
        value: V,
        name: v
      }
    }), S(W));
  }, Ue = (W) => (X) => {
    var ue, We;
    (We = (ue = W == null ? void 0 : W.props) == null ? void 0 : ue.onKeyDown) == null || We.call(ue, X), X.key === Ar && X.target === X.currentTarget && !X.defaultPrevented && (X.preventDefault(), X.repeat || X.currentTarget.click());
  };
  delete B["aria-invalid"];
  let _t, up;
  const bs = [];
  let Cs = !1, ks = !1;
  (ql({
    value: V
  }) || m) && (h ? _t = h(V) : Cs = !0);
  const i1 = ei.map((W) => {
    if (!/* @__PURE__ */ x.isValidElement(W))
      return null;
    let X;
    if (p) {
      if (!Array.isArray(V))
        throw new Error(tr(2));
      X = V.some((ue) => Sl(ue, W.props.value)), X && Cs && bs.push(W.props.children);
    } else
      X = Sl(V, W.props.value), X && Cs && (up = W.props.children);
    return X && (ks = !0), /* @__PURE__ */ x.cloneElement(W, {
      "aria-selected": X ? "true" : "false",
      onMouseDown: (ue) => {
        var We, It;
        ge.current = !0, (It = (We = W.props).onMouseDown) == null || It.call(We, ue);
      },
      onPointerDown: (ue) => {
        var We, It;
        ge.current = !0, (It = (We = W.props).onPointerDown) == null || It.call(We, ue);
      },
      onClick: vu(W),
      onMouseUp: xu(W, X),
      onKeyUp: (ue) => {
        ue.key === Ar && ue.preventDefault(), W.props.onKeyUp && W.props.onKeyUp(ue);
      },
      onKeyDown: Ue(W),
      role: "option",
      selected: X,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": W.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ut(() => {
    J.current = ks, !Ce && !p && !ks && pe();
  }, [ks, p, Ce, pe]), Cs && (p ? bs.length === 0 ? _t = null : _t = bs.reduce((W, X, ue) => (W.push(X), ue < bs.length - 1 && W.push(", "), W), []) : _t = up);
  let cp = je;
  !s && ae && xe && (cp = Le.clientWidth);
  let bu;
  typeof $ < "u" ? bu = $ : bu = f ? null : 0;
  const s1 = P.id || (v ? `mui-component-select-${v}` : void 0), to = {
    ...t,
    variant: z,
    value: V,
    open: Ce,
    error: c
  }, Cu = YP(to), Ir = typeof ((fp = g.slotProps) == null ? void 0 : fp.paper) == "function" ? g.slotProps.paper(to) : (pp = g.slotProps) == null ? void 0 : pp.paper, l1 = ct(Ir == null ? void 0 : Ir.ref, oe), a1 = typeof ((mp = g.slotProps) == null ? void 0 : mp.list) == "function" ? g.slotProps.list(to) : (hp = g.slotProps) == null ? void 0 : hp.list, dp = qr(), u1 = qr();
  return /* @__PURE__ */ R.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ R.jsx(VP, {
      as: "div",
      ref: Pt,
      tabIndex: bu,
      role: "combobox",
      "aria-controls": Ce ? dp : void 0,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": Ce ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": _ ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": b,
      "aria-describedby": r,
      "aria-required": O ? "true" : void 0,
      "aria-invalid": c ? "true" : void 0,
      onKeyDown: wu,
      onMouseDown: f || _ ? null : et,
      onBlur: re,
      onFocus: T,
      ...P,
      ownerState: to,
      className: ne(P.className, Cu.select, a),
      id: s1,
      children: oP(_t) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Hh || (Hh = /* @__PURE__ */ R.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : _t
    }), /* @__PURE__ */ R.jsx(KP, {
      "aria-invalid": c,
      value: Array.isArray(V) ? V.join(",") : V,
      name: v,
      ref: te,
      "aria-hidden": !0,
      onChange: yu,
      tabIndex: -1,
      disabled: f,
      readOnly: _,
      className: Cu.nativeInput,
      autoFocus: i,
      required: O,
      ...B,
      id: B.id ?? u1,
      ownerState: to
    }), /* @__PURE__ */ R.jsx(HP, {
      as: y,
      className: Cu.icon,
      ownerState: to
    }), /* @__PURE__ */ R.jsx(sP, {
      value: dt,
      children: /* @__PURE__ */ R.jsx(CP, {
        id: `menu-${v || ""}`,
        anchorEl: Le,
        open: Ce,
        onClose: Ae,
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
            id: dp,
            ...a1
          },
          paper: {
            ...Ir,
            ref: l1,
            style: {
              minWidth: cp,
              ...Ir == null ? void 0 : Ir.style
            }
          }
        },
        children: i1
      })
    })]
  });
}), QP = (e) => {
  const {
    classes: t
  } = e, r = he({
    root: ["root"]
  }, H0, t);
  return {
    ...t,
    ...r
  };
}, ap = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => yn(e) && e !== "variant"
}, XP = Y(sp, ap)(""), qP = Y(lp, ap)(""), ZP = Y(ip, ap)(""), r1 = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    IconComponent: d = NT,
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
    open: C,
    renderValue: k,
    SelectDisplayProps: T,
    variant: E = "outlined",
    ...A
  } = r, L = p ? RP : GP, [M] = Zo({
    props: r,
    states: ["variant", "error"]
  }), _ = M.variant || E, h = {
    ...r,
    variant: _,
    classes: s
  }, O = QP(h), {
    root: P,
    ...$
  } = O, N = m || {
    standard: /* @__PURE__ */ R.jsx(XP, {
      ownerState: h
    }),
    outlined: /* @__PURE__ */ R.jsx(qP, {
      label: y,
      ownerState: h
    }),
    filled: /* @__PURE__ */ R.jsx(ZP, {
      ownerState: h
    })
  }[_], I = ct(n, Jo(N));
  return /* @__PURE__ */ R.jsx(x.Fragment, {
    children: /* @__PURE__ */ x.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: d,
        variant: _,
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
          open: C,
          renderValue: k,
          SelectDisplayProps: {
            id: f,
            ...T
          }
        },
        ...c,
        classes: c ? mt($, c.classes) : $,
        ...m ? m.props.inputProps : {}
      },
      ...(g && p || u) && _ === "outlined" ? {
        notched: !0
      } : {},
      ref: I,
      className: ne(N.props.className, l, O.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!m && {
        variant: _
      },
      ...A
    })
  });
});
r1.muiName = "Select";
function JP(e) {
  return me("MuiTooltip", e);
}
const nn = fe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function eI(e) {
  return Math.round(e * 1e5) / 1e5;
}
const tI = (e) => {
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
  return he(s, JP, t);
}, nI = Y(D0, {
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
      [`&[data-popper-placement*="bottom"] .${nn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${nn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${nn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${nn.arrow}`]: {
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
}))), rI = Y("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ie(n.placement.split("-")[0])}`]];
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
  [`.${nn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${nn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${nn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${nn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${eI(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${nn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${nn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${nn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${nn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), oI = Y("span", {
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
let el = !1;
const Gh = new mu();
let mi = {
  x: 0,
  y: 0
};
function tl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const Qh = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    open: C,
    placement: k = "bottom",
    slotProps: T = {},
    slots: E = {},
    title: A,
    ...L
  } = r, M = /* @__PURE__ */ x.isValidElement(i) ? i : /* @__PURE__ */ R.jsx("span", {
    children: i
  }), _ = vs(), [h, O] = x.useState(), [P, $] = x.useState(null), N = x.useRef(!1), I = x.useRef(!1), z = d || w, B = Qn(), V = Qn(), D = Qn(), K = Qn(), [H, te] = hd({
    controlled: C,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let G = H;
  const {
    current: oe
  } = x.useRef(C !== void 0), j = qr(b), J = x.useRef(), q = it(() => {
    J.current !== void 0 && (document.body.style.WebkitUserSelect = J.current, J.current = void 0), K.clear();
  });
  x.useEffect(() => q, [q]);
  const ge = (re) => {
    Gh.clear(), el = !0, te(!0), S && !G && S(re);
  }, de = it(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (re) => {
      I.current = !1, Gh.start(800 + g, () => {
        el = !1;
      }), te(!1), v && G && v(re), B.start(_.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), le = (re) => {
    N.current && re.type !== "touchstart" || (h && h.removeAttribute("title"), V.clear(), D.clear(), m || el && c ? V.start(el ? c : m, () => {
      ge(re);
    }) : ge(re));
  }, se = (re) => {
    if (h != null && h.disabled && !oe) {
      if (G && !I.current)
        return;
      I.current = !0;
    } else
      I.current = !1;
    le(re);
  }, Ee = (re) => {
    h != null && h.disabled && !oe && !I.current || le(re);
  }, Oe = (re) => {
    V.clear(), D.start(g, () => {
      de(re);
    });
  }, [, xe] = x.useState(!1), Ye = (re) => {
    const Ue = (re == null ? void 0 : re.target) ?? h;
    if (!Ue || Ue.disabled || !ea(Ue)) {
      xe(!1);
      const _t = re ?? new Event("blur");
      !re && Ue && (Object.defineProperty(_t, "target", {
        value: Ue
      }), Object.defineProperty(_t, "currentTarget", {
        value: Ue
      })), Oe(_t);
    }
  }, ae = (re) => {
    if (h || O(re.currentTarget), I.current = !1, ea(re.target)) {
      const Ue = (_t) => {
        _t.target.disabled && Ye(_t), _t.target.removeEventListener("blur", Ue);
      };
      re.target.addEventListener("blur", Ue), xe(!0), le(re);
    }
  }, je = (re) => {
    N.current = !0;
    const Ue = M.props;
    Ue.onTouchStart && Ue.onTouchStart(re);
  }, Je = (re) => {
    je(re), D.clear(), B.clear(), q(), J.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", K.start(y, () => {
      document.body.style.WebkitUserSelect = J.current, se(re);
    });
  }, dt = (re) => {
    M.props.onTouchEnd && M.props.onTouchEnd(re), q(), D.start(p, () => {
      de(re);
    });
  };
  x.useEffect(() => {
    if (!G)
      return;
    function re(Ue) {
      Ue.key === "Escape" && de(Ue);
    }
    return document.addEventListener("keydown", re), () => {
      document.removeEventListener("keydown", re);
    };
  }, [de, G]);
  const Qe = ct(Jo(M), O, n);
  !A && A !== 0 && (G = !1);
  const wt = x.useRef(), Pt = (re) => {
    const Ue = M.props;
    Ue.onMouseMove && Ue.onMouseMove(re), mi = {
      x: re.clientX,
      y: re.clientY
    }, wt.current && wt.current.update();
  }, Le = {}, Ce = typeof A == "string";
  l ? (Le.title = !G && Ce && !u ? A : null, Le["aria-describedby"] = G ? j : null) : (Le["aria-label"] = Ce ? A : null, Le["aria-labelledby"] = G && !Ce ? j : null);
  const pe = {
    ...Le,
    ...L,
    ...M.props,
    className: ne(L.className, M.props.className),
    onTouchStart: je,
    ref: Qe,
    ...w ? {
      onMouseMove: Pt
    } : {}
  }, bt = {};
  f || (pe.onTouchStart = Je, pe.onTouchEnd = dt), u || (pe.onMouseOver = tl(se, pe.onMouseOver), pe.onMouseLeave = tl(Oe, pe.onMouseLeave), z || (bt.onMouseOver = Ee, bt.onMouseLeave = Oe)), a || (pe.onFocus = tl(ae, pe.onFocus), pe.onBlur = tl(Ye, pe.onBlur), z || (bt.onFocus = ae, bt.onBlur = Ye));
  const Z = {
    ...r,
    arrow: o,
    disableInteractive: z,
    placement: k,
    touch: N.current
  }, ee = typeof T.popper == "function" ? T.popper(Z) : T.popper, _e = x.useMemo(() => {
    var Ue;
    let re = [{
      name: "arrow",
      enabled: !!P,
      options: {
        element: P,
        padding: 4
      }
    }];
    return (Ue = ee == null ? void 0 : ee.popperOptions) != null && Ue.modifiers && (re = re.concat(ee.popperOptions.modifiers)), {
      ...ee == null ? void 0 : ee.popperOptions,
      modifiers: re
    };
  }, [P, ee == null ? void 0 : ee.popperOptions]), Xe = tI(Z), et = {
    slots: E,
    slotProps: {
      arrow: T.arrow,
      popper: ee,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [Ae, ei] = Me("popper", {
    elementType: nI,
    externalForwardedProps: et,
    ownerState: Z,
    className: Xe.popper
  }), [yu, ws] = Me("transition", {
    elementType: ia,
    externalForwardedProps: et,
    ownerState: Z
  }), [vu, xu] = Me("tooltip", {
    elementType: rI,
    className: Xe.tooltip,
    externalForwardedProps: et,
    ownerState: Z
  }), [Su, wu] = Me("arrow", {
    elementType: oI,
    className: Xe.arrow,
    externalForwardedProps: et,
    ownerState: Z,
    ref: $
  });
  return /* @__PURE__ */ R.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(M, pe), /* @__PURE__ */ R.jsx(Ae, {
      as: D0,
      placement: k,
      anchorEl: w ? {
        getBoundingClientRect: () => ({
          top: mi.y,
          left: mi.x,
          right: mi.x,
          bottom: mi.y,
          width: 0,
          height: 0
        })
      } : h,
      popperRef: wt,
      open: h ? G : !1,
      id: j,
      transition: !0,
      ...bt,
      ...ei,
      popperOptions: _e,
      children: ({
        TransitionProps: re
      }) => /* @__PURE__ */ R.jsx(yu, {
        timeout: _.transitions.duration.shorter,
        ...re,
        ...ws,
        children: /* @__PURE__ */ R.jsxs(vu, {
          ...xu,
          children: [A, o ? /* @__PURE__ */ R.jsx(Su, {
            ...wu
          }) : null]
        })
      })
    })]
  });
}), Co = UC({
  createStyledComponent: Y("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ye({
    props: e,
    name: "MuiStack"
  })
}), o1 = /* @__PURE__ */ x.createContext();
function iI(e) {
  return me("MuiTable", e);
}
fe("MuiTable", ["root", "stickyHeader"]);
const sI = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return he({
    root: ["root", n && "stickyHeader"]
  }, iI, t);
}, lI = Y("table", {
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
}))), Xh = "table", aI = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, f = sI(d), m = x.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ R.jsx(o1.Provider, {
    value: m,
    children: /* @__PURE__ */ R.jsx(lI, {
      as: i,
      role: i === Xh ? null : "table",
      ref: n,
      className: ne(f.root, o),
      ownerState: d,
      ...u
    })
  });
}), gu = /* @__PURE__ */ x.createContext();
function uI(e) {
  return me("MuiTableBody", e);
}
fe("MuiTableBody", ["root"]);
const cI = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, uI, t);
}, dI = Y("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), fI = {
  variant: "body"
}, qh = "tbody", pI = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = qh,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = cI(l);
  return /* @__PURE__ */ R.jsx(gu.Provider, {
    value: fI,
    children: /* @__PURE__ */ R.jsx(dI, {
      className: ne(a.root, o),
      as: i,
      ref: n,
      role: i === qh ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function mI(e) {
  return me("MuiTableCell", e);
}
const hI = fe("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), gI = (e) => {
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
  return he(l, mI, t);
}, yI = Y("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ie(n.size)}`], n.padding !== "normal" && t[`padding${ie(n.padding)}`], n.align !== "inherit" && t[`align${ie(n.align)}`], n.stickyHeader && t.stickyHeader];
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
      [`&.${hI.paddingCheckbox}`]: {
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
}))), Mn = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  } = r, c = x.useContext(o1), y = x.useContext(gu), w = y && y.variant === "head";
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
  }, S = gI(v);
  let C = null;
  return d && (C = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ R.jsx(yI, {
    as: b,
    ref: n,
    className: ne(S.root, i),
    "aria-sort": C,
    scope: g,
    ownerState: v,
    ...m
  });
});
function vI(e) {
  return me("MuiTableContainer", e);
}
fe("MuiTableContainer", ["root"]);
const xI = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, vI, t);
}, SI = Y("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), wI = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
  }, a = xI(l);
  return /* @__PURE__ */ R.jsx(SI, {
    ref: n,
    as: i,
    className: ne(a.root, o),
    ownerState: l,
    ...s
  });
});
function bI(e) {
  return me("MuiTableHead", e);
}
fe("MuiTableHead", ["root"]);
const CI = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, bI, t);
}, kI = Y("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), EI = {
  variant: "head"
}, Zh = "thead", TI = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Zh,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = CI(l);
  return /* @__PURE__ */ R.jsx(gu.Provider, {
    value: EI,
    children: /* @__PURE__ */ R.jsx(kI, {
      as: i,
      className: ne(a.root, o),
      ref: n,
      role: i === Zh ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function RI(e) {
  return me("MuiTableRow", e);
}
const Jh = fe("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), PI = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return he({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, RI, t);
}, II = Y("tr", {
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
  [`&.${Jh.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Jh.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), eg = "tr", tg = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const r = ye({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = eg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = x.useContext(gu), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, f = PI(d);
  return /* @__PURE__ */ R.jsx(II, {
    as: i,
    ref: n,
    className: ne(f.root, o),
    role: i === eg ? null : "row",
    ownerState: d,
    ...a
  });
});
function MI(e) {
  return me("MuiTextField", e);
}
fe("MuiTextField", ["root"]);
const $I = {
  standard: sp,
  filled: ip,
  outlined: lp
}, OI = (e) => {
  const {
    classes: t
  } = e;
  return he({
    root: ["root"]
  }, MI, t);
}, AI = Y(kR, {
  name: "MuiTextField",
  slot: "Root"
})({}), ac = /* @__PURE__ */ x.forwardRef(function(t, n) {
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
    onBlur: C,
    onChange: k,
    onFocus: T,
    placeholder: E,
    required: A = !1,
    rows: L,
    select: M = !1,
    slots: _ = {},
    slotProps: h = {},
    type: O,
    value: P,
    variant: $ = "outlined",
    ...N
  } = r, I = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: f,
    fullWidth: m,
    multiline: v,
    required: A,
    select: M,
    variant: $
  }, z = OI(I), B = qr(y), V = c && B ? `${B}-helper-text` : void 0, D = b && B ? `${B}-label` : void 0, K = $I[$], H = {
    slots: _,
    slotProps: h
  }, [te, G] = Me("select", {
    elementType: r1,
    externalForwardedProps: H,
    ownerState: I
  }), oe = M && G.native, j = {}, J = H.slotProps.inputLabel;
  $ === "outlined" && (J && typeof J.shrink < "u" && (j.notched = J.shrink), j.label = b), M && (oe || (j.id = void 0), j["aria-describedby"] = void 0);
  const [q, ge] = Me("root", {
    elementType: AI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...H,
      ...N
    },
    ownerState: I,
    className: ne(z.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: f,
      fullWidth: m,
      required: A,
      color: a,
      variant: $
    }
  }), [de, le] = Me("input", {
    elementType: K,
    externalForwardedProps: H,
    additionalProps: j,
    ownerState: I
  }), [se, Ee] = Me("inputLabel", {
    elementType: DR,
    externalForwardedProps: H,
    ownerState: I
  }), [Oe, xe] = Me("htmlInput", {
    elementType: "input",
    externalForwardedProps: H,
    ownerState: I
  }), [Ye, ae] = Me("formHelperText", {
    elementType: RR,
    externalForwardedProps: H,
    ownerState: I
  }), je = /* @__PURE__ */ R.jsx(de, {
    "aria-describedby": V,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: m,
    multiline: v,
    name: S,
    rows: L,
    maxRows: g,
    minRows: p,
    type: O,
    value: P,
    id: B,
    inputRef: w,
    onBlur: C,
    onChange: k,
    onFocus: T,
    placeholder: E,
    inputProps: xe,
    slots: {
      input: _.htmlInput ? Oe : void 0
    },
    ...le
  });
  return /* @__PURE__ */ R.jsxs(q, {
    ...ge,
    children: [b != null && b !== "" && /* @__PURE__ */ R.jsx(se, {
      htmlFor: M && !oe ? void 0 : B,
      id: D,
      ...M && !oe && {
        component: "div"
      },
      ...Ee,
      children: b
    }), M ? /* @__PURE__ */ R.jsx(te, {
      "aria-describedby": V,
      id: B,
      labelId: D,
      value: P,
      input: je,
      ...G,
      children: s
    }) : je, c && /* @__PURE__ */ R.jsx(Ye, {
      id: V,
      ...ae,
      children: c
    })]
  });
}), NI = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
})), LI = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), _I = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12m8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8"
})), zI = Tn(/* @__PURE__ */ R.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
})), wi = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', uo = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function FI({ children: e, sx: t }) {
  return /* @__PURE__ */ R.jsx(
    Ao,
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
function ng({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ R.jsxs(pu, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ R.jsxs(
      Co,
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
          typeof e == "string" ? /* @__PURE__ */ R.jsx(FI, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ R.jsx(oa, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function uc({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ R.jsxs(oa, { sx: n, children: [
    /* @__PURE__ */ R.jsxs(Co, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ R.jsx(
        Ao,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ R.jsx(Ao, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function jI(e, t) {
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
function BI({ lines: e, running: t }) {
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
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ R.jsxs(
    pu,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: uo.bg,
        color: uo.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: wi,
        fontSize: 12,
        lineHeight: 1.55,
        // Preserve the script's own spacing: bash output is aligned with spaces,
        // and collapsing them turns readable output into a wall of text.
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ R.jsx(
          oa,
          {
            sx: {
              color: i.stream === "stderr" ? uo.err : i.stream === "meta" ? uo.dim : uo.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ R.jsx(oa, { sx: { color: uo.dim }, children: "▍running…" }),
        /* @__PURE__ */ R.jsx("div", { ref: n })
      ]
    }
  );
}
function DI({ ctx: e }) {
  const t = x.useMemo(() => au(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ R.jsx(qk, { theme: t, children: /* @__PURE__ */ R.jsx(UI, { ctx: e }) });
}
function UI({ ctx: e }) {
  const [t, n] = x.useState([]), [r, o] = x.useState(null), [i, s] = x.useState(!0), [l, a] = x.useState(""), [u, d] = x.useState(""), [f, m] = x.useState(""), [c, y] = x.useState([]), [w, b] = x.useState(!1), g = x.useRef(null);
  x.useEffect(() => () => {
    var C;
    return (C = g.current) == null ? void 0 : C.abort();
  }, []);
  const p = x.useCallback(async () => {
    s(!0);
    try {
      const C = await e.api("/accounts"), k = await C.json().catch(() => ({}));
      if (!C.ok) throw new Error(k.message ?? `HTTP ${C.status}`);
      n(k.accounts ?? []), o(null);
    } catch (C) {
      o(C instanceof Error ? C.message : String(C));
    } finally {
      s(!1);
    }
  }, [e]);
  x.useEffect(() => {
    p();
  }, [p]);
  async function v(C, k, T) {
    b(!0), y([]), o(null);
    const E = new AbortController();
    g.current = E;
    try {
      for await (const A of e.run(C, { method: k, body: T, signal: E.signal }))
        y((L) => jI(L, A));
    } catch (A) {
      E.signal.aborted || y((L) => [...L, { stream: "stderr", text: String(A) }]);
    } finally {
      b(!1), g.current = null, p();
    }
  }
  async function S(C) {
    C.preventDefault(), await v("/accounts", "POST", { username: l, password: u, home: f }), a(""), d(""), m("");
  }
  return /* @__PURE__ */ R.jsxs(Co, { spacing: 2, children: [
    r && /* @__PURE__ */ R.jsx(uE, { severity: "error", children: r }),
    /* @__PURE__ */ R.jsx(ng, { label: "New FTP account", children: /* @__PURE__ */ R.jsxs(Co, { component: "form", onSubmit: S, spacing: 1.5, children: [
      /* @__PURE__ */ R.jsxs(
        Co,
        {
          direction: { xs: "column", md: "row" },
          spacing: 1.5,
          sx: { alignItems: { md: "flex-end" } },
          children: [
            /* @__PURE__ */ R.jsx(uc, { label: "Username", sx: { flex: 1 }, children: /* @__PURE__ */ R.jsx(
              ac,
              {
                value: l,
                onChange: (C) => a(C.target.value),
                placeholder: "webftp",
                fullWidth: !0,
                required: !0
              }
            ) }),
            /* @__PURE__ */ R.jsx(uc, { label: "Password", sx: { flex: 1 }, children: /* @__PURE__ */ R.jsx(
              ac,
              {
                type: "password",
                value: u,
                onChange: (C) => d(C.target.value),
                placeholder: "••••••••",
                fullWidth: !0,
                required: !0,
                autoComplete: "new-password"
              }
            ) }),
            /* @__PURE__ */ R.jsx(uc, { label: "Home directory", sx: { flex: 1.4 }, children: /* @__PURE__ */ R.jsx(
              ac,
              {
                value: f,
                onChange: (C) => m(C.target.value),
                placeholder: "/home/webdev",
                fullWidth: !0,
                required: !0,
                slotProps: { input: { sx: { fontFamily: wi, fontSize: "0.78rem" } } }
              }
            ) }),
            /* @__PURE__ */ R.jsx(
              ZT,
              {
                type: "submit",
                variant: "contained",
                disabled: w,
                startIcon: /* @__PURE__ */ R.jsx(NI, { sx: { fontSize: 15 } }),
                sx: { flexShrink: 0 },
                children: w ? "Working…" : "Create"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ R.jsx(Ao, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: "The account is confined to this directory. It is a virtual pure-ftpd user, not a Linux account, and cannot be used to log in over SSH." })
    ] }) }),
    (c.length > 0 || w) && /* @__PURE__ */ R.jsx(BI, { lines: c, running: w }),
    /* @__PURE__ */ R.jsxs(ng, { label: `Accounts · ${t.length}`, padded: !1, children: [
      i && /* @__PURE__ */ R.jsx(Ao, { variant: "body2", sx: { p: 2, color: "text.disabled" }, children: "Loading…" }),
      !i && !t.length && /* @__PURE__ */ R.jsx(Ao, { variant: "body2", sx: { p: 2, color: "text.disabled" }, children: "No FTP accounts." }),
      t.length > 0 && /* @__PURE__ */ R.jsx(wI, { sx: { overflowX: "auto" }, children: /* @__PURE__ */ R.jsxs(aI, { size: "small", children: [
        /* @__PURE__ */ R.jsx(TI, { children: /* @__PURE__ */ R.jsxs(tg, { children: [
          /* @__PURE__ */ R.jsx(Mn, { children: "Username" }),
          /* @__PURE__ */ R.jsx(Mn, { children: "Home" }),
          /* @__PURE__ */ R.jsx(Mn, { children: "UID / GID" }),
          /* @__PURE__ */ R.jsx(Mn, { children: "Status" }),
          /* @__PURE__ */ R.jsx(Mn, { align: "right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ R.jsx(pI, { children: t.map((C) => /* @__PURE__ */ R.jsxs(tg, { hover: !0, children: [
          /* @__PURE__ */ R.jsx(Mn, { sx: { fontFamily: wi }, children: C.username }),
          /* @__PURE__ */ R.jsx(Mn, { sx: { fontFamily: wi, fontSize: "0.72rem" }, children: (C.home ?? "").replace(/\/\.\/?$/, "") || "—" }),
          /* @__PURE__ */ R.jsxs(Mn, { sx: { fontFamily: wi, color: "text.secondary" }, children: [
            C.uid ?? "—",
            " / ",
            C.gid ?? "—"
          ] }),
          /* @__PURE__ */ R.jsx(Mn, { children: /* @__PURE__ */ R.jsx(
            AT,
            {
              size: "small",
              variant: "filled",
              color: C.enabled ? "success" : "warning",
              label: C.enabled ? "enabled" : "disabled"
            }
          ) }),
          /* @__PURE__ */ R.jsx(Mn, { align: "right", children: /* @__PURE__ */ R.jsxs(Co, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
            /* @__PURE__ */ R.jsx(Qh, { title: C.enabled ? "Disable" : "Enable", arrow: !0, children: /* @__PURE__ */ R.jsx("span", { children: /* @__PURE__ */ R.jsx(
              xd,
              {
                disabled: w,
                onClick: () => v(
                  `/accounts/${encodeURIComponent(C.username)}/${C.enabled ? "disable" : "enable"}`,
                  "PUT"
                ),
                children: C.enabled ? /* @__PURE__ */ R.jsx(_I, { sx: { fontSize: 15 } }) : /* @__PURE__ */ R.jsx(zI, { sx: { fontSize: 15 } })
              }
            ) }) }),
            /* @__PURE__ */ R.jsx(Qh, { title: "Delete account", arrow: !0, children: /* @__PURE__ */ R.jsx("span", { children: /* @__PURE__ */ R.jsx(
              xd,
              {
                color: "error",
                disabled: w,
                onClick: () => v(
                  `/accounts/${encodeURIComponent(C.username)}`,
                  "DELETE"
                ),
                children: /* @__PURE__ */ R.jsx(LI, { sx: { fontSize: 15 } })
              }
            ) }) })
          ] }) })
        ] }, C.username)) })
      ] }) })
    ] })
  ] });
}
let sa = null;
function WI(e, t) {
  sa = yv(e), sa.render(
    /* @__PURE__ */ R.jsx(x.StrictMode, { children: /* @__PURE__ */ R.jsx(DI, { ctx: t }) })
  );
}
function VI() {
  const e = sa;
  sa = null, e && queueMicrotask(() => e.unmount());
}
const KI = { mount: WI, unmount: VI };
export {
  KI as default,
  WI as mount,
  VI as unmount
};
//# sourceMappingURL=main.js.map
