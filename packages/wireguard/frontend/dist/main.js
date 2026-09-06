var lx = Object.defineProperty;
var ax = (e, t, n) => t in e ? lx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Li = (e, t, n) => ax(e, typeof t != "symbol" ? t + "" : t, n);
function ux(e, t) {
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
function cx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qg = { exports: {} }, Ja = {}, Zg = { exports: {} }, Ie = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs = Symbol.for("react.element"), dx = Symbol.for("react.portal"), fx = Symbol.for("react.fragment"), px = Symbol.for("react.strict_mode"), mx = Symbol.for("react.profiler"), hx = Symbol.for("react.provider"), gx = Symbol.for("react.context"), yx = Symbol.for("react.forward_ref"), vx = Symbol.for("react.suspense"), xx = Symbol.for("react.memo"), bx = Symbol.for("react.lazy"), im = Symbol.iterator;
function Sx(e) {
  return e === null || typeof e != "object" ? null : (e = im && e[im] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Jg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ey = Object.assign, ty = {};
function Pi(e, t, n) {
  this.props = e, this.context = t, this.refs = ty, this.updater = n || Jg;
}
Pi.prototype.isReactComponent = {};
Pi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ny() {
}
ny.prototype = Pi.prototype;
function xf(e, t, n) {
  this.props = e, this.context = t, this.refs = ty, this.updater = n || Jg;
}
var bf = xf.prototype = new ny();
bf.constructor = xf;
ey(bf, Pi.prototype);
bf.isPureReactComponent = !0;
var sm = Array.isArray, ry = Object.prototype.hasOwnProperty, Sf = { current: null }, oy = { key: !0, ref: !0, __self: !0, __source: !0 };
function iy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ry.call(t, r) && !oy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Zs, type: e, key: i, ref: s, props: o, _owner: Sf.current };
}
function wx(e, t) {
  return { $$typeof: Zs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function wf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
}
function Cx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var lm = /\/+/g;
function mc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Cx("" + e.key) : t.toString(36);
}
function ql(e, t, n, r, o) {
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
        case dx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + mc(s, 0) : r, sm(o) ? (n = "", e != null && (n = e.replace(lm, "$&/") + "/"), ql(o, t, n, "", function(u) {
    return u;
  })) : o != null && (wf(o) && (o = wx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(lm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", sm(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + mc(i, l);
    s += ql(i, t, n, a, o);
  }
  else if (a = Sx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + mc(i, l++), s += ql(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function hl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return ql(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function kx(e) {
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
var Xt = { current: null }, Zl = { transition: null }, Tx = { ReactCurrentDispatcher: Xt, ReactCurrentBatchConfig: Zl, ReactCurrentOwner: Sf };
function sy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ie.Children = { map: hl, forEach: function(e, t, n) {
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
  if (!wf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ie.Component = Pi;
Ie.Fragment = fx;
Ie.Profiler = mx;
Ie.PureComponent = xf;
Ie.StrictMode = px;
Ie.Suspense = vx;
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tx;
Ie.act = sy;
Ie.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ey({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Sf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ry.call(t, a) && !oy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
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
Ie.createContext = function(e) {
  return e = { $$typeof: gx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: hx, _context: e }, e.Consumer = e;
};
Ie.createElement = iy;
Ie.createFactory = function(e) {
  var t = iy.bind(null, e);
  return t.type = e, t;
};
Ie.createRef = function() {
  return { current: null };
};
Ie.forwardRef = function(e) {
  return { $$typeof: yx, render: e };
};
Ie.isValidElement = wf;
Ie.lazy = function(e) {
  return { $$typeof: bx, _payload: { _status: -1, _result: e }, _init: kx };
};
Ie.memo = function(e, t) {
  return { $$typeof: xx, type: e, compare: t === void 0 ? null : t };
};
Ie.startTransition = function(e) {
  var t = Zl.transition;
  Zl.transition = {};
  try {
    e();
  } finally {
    Zl.transition = t;
  }
};
Ie.unstable_act = sy;
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
Zg.exports = Ie;
var h = Zg.exports;
const ly = /* @__PURE__ */ cx(h), ha = /* @__PURE__ */ ux({
  __proto__: null,
  default: ly
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
var Rx = h, Ex = Symbol.for("react.element"), Px = Symbol.for("react.fragment"), Ix = Object.prototype.hasOwnProperty, Mx = Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $x = { key: !0, ref: !0, __self: !0, __source: !0 };
function ay(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Ix.call(t, r) && !$x.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ex, type: e, key: i, ref: s, props: o, _owner: Mx.current };
}
Ja.Fragment = Px;
Ja.jsx = ay;
Ja.jsxs = ay;
qg.exports = Ja;
var c = qg.exports, uy = { exports: {} }, hn = {}, cy = { exports: {} }, dy = {};
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
      var U = F - 1 >>> 1, W = M[U];
      if (0 < o(W, z)) M[U] = z, M[F] = W, F = U;
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
      e: for (var U = 0, W = M.length, Q = W >>> 1; U < Q; ) {
        var G = 2 * (U + 1) - 1, X = M[G], K = G + 1, q = M[K];
        if (0 > o(X, F)) K < W && 0 > o(q, X) ? (M[U] = q, M[K] = F, U = K) : (M[U] = X, M[G] = F, U = G);
        else if (K < W && 0 > o(q, F)) M[U] = q, M[K] = F, U = K;
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
      z !== null && N(w, z.startTime - M);
    }
  }
  function E(M, z) {
    v = !1, S && (S = !1, g(T), T = -1), f = !0;
    var F = y;
    try {
      for (b(z), p = n(a); p !== null && (!(p.expirationTime > z) || M && !$()); ) {
        var U = p.callback;
        if (typeof U == "function") {
          p.callback = null, y = p.priorityLevel;
          var W = U(p.expirationTime <= z);
          z = e.unstable_now(), typeof W == "function" ? p.callback = W : p === n(a) && r(a), b(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Q = !0;
      else {
        var G = n(u);
        G !== null && N(w, G.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      p = null, y = F, f = !1;
    }
  }
  var k = !1, R = null, T = -1, I = 5, L = -1;
  function $() {
    return !(e.unstable_now() - L < I);
  }
  function A() {
    if (R !== null) {
      var M = e.unstable_now();
      L = M;
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
    m(A);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), P = j.port2;
    j.port1.onmessage = A, x = function() {
      P.postMessage(null);
    };
  } else x = function() {
    C(A, 0);
  };
  function O(M) {
    R = M, k || (k = !0, x());
  }
  function N(M, z) {
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
    var U = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? U + F : U) : F = U, M) {
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
    return W = F + W, M = { id: d++, callback: z, priorityLevel: M, startTime: F, expirationTime: W, sortIndex: -1 }, F > U ? (M.sortIndex = F, t(u, M), n(a) === null && M === n(u) && (S ? (g(T), T = -1) : S = !0, N(w, F - U))) : (M.sortIndex = W, t(a, M), v || f || (v = !0, O(E))), M;
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
})(dy);
cy.exports = dy;
var jx = cy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ox = h, pn = jx;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var fy = /* @__PURE__ */ new Set(), Ts = {};
function Po(e, t) {
  pi(e, t), pi(e + "Capture", t);
}
function pi(e, t) {
  for (Ts[e] = t, e = 0; e < t.length; e++) fy.add(t[e]);
}
var wr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), td = Object.prototype.hasOwnProperty, Ax = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, am = {}, um = {};
function Nx(e) {
  return td.call(um, e) ? !0 : td.call(am, e) ? !1 : Ax.test(e) ? um[e] = !0 : (am[e] = !0, !1);
}
function Lx(e, t, n, r) {
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
function zx(e, t, n, r) {
  if (t === null || typeof t > "u" || Lx(e, t, n, r)) return !0;
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
var Cf = /[\-:]([a-z])/g;
function kf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Cf,
    kf
  );
  Lt[t] = new qt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Cf, kf);
  Lt[t] = new qt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Cf, kf);
  Lt[t] = new qt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Lt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Lt.xlinkHref = new qt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Lt[e] = new qt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tf(e, t, n, r) {
  var o = Lt.hasOwnProperty(t) ? Lt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zx(t, n, o, r) && (n = null), r || o === null ? Nx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ir = Ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gl = Symbol.for("react.element"), Ko = Symbol.for("react.portal"), Go = Symbol.for("react.fragment"), Rf = Symbol.for("react.strict_mode"), nd = Symbol.for("react.profiler"), py = Symbol.for("react.provider"), my = Symbol.for("react.context"), Ef = Symbol.for("react.forward_ref"), rd = Symbol.for("react.suspense"), od = Symbol.for("react.suspense_list"), Pf = Symbol.for("react.memo"), jr = Symbol.for("react.lazy"), hy = Symbol.for("react.offscreen"), cm = Symbol.iterator;
function zi(e) {
  return e === null || typeof e != "object" ? null : (e = cm && e[cm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ft = Object.assign, hc;
function rs(e) {
  if (hc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    hc = t && t[1] || "";
  }
  return `
` + hc + e;
}
var gc = !1;
function yc(e, t) {
  if (!e || gc) return "";
  gc = !0;
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
    gc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? rs(e) : "";
}
function Bx(e) {
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
      return e = yc(e.type, !1), e;
    case 11:
      return e = yc(e.type.render, !1), e;
    case 1:
      return e = yc(e.type, !0), e;
    default:
      return "";
  }
}
function id(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Go:
      return "Fragment";
    case Ko:
      return "Portal";
    case nd:
      return "Profiler";
    case Rf:
      return "StrictMode";
    case rd:
      return "Suspense";
    case od:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case my:
      return (e.displayName || "Context") + ".Consumer";
    case py:
      return (e._context.displayName || "Context") + ".Provider";
    case Ef:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Pf:
      return t = e.displayName || null, t !== null ? t : id(e.type) || "Memo";
    case jr:
      t = e._payload, e = e._init;
      try {
        return id(e(t));
      } catch {
      }
  }
  return null;
}
function _x(e) {
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
      return id(t);
    case 8:
      return t === Rf ? "StrictMode" : "Mode";
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
function Gr(e) {
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
function Fx(e) {
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
function yl(e) {
  e._valueTracker || (e._valueTracker = Fx(e));
}
function yy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = gy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ga(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function sd(e, t) {
  var n = t.checked;
  return ft({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function dm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Gr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function vy(e, t) {
  t = t.checked, t != null && Tf(e, "checked", t, !1);
}
function ld(e, t) {
  vy(e, t);
  var n = Gr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ad(e, t.type, n) : t.hasOwnProperty("defaultValue") && ad(e, t.type, Gr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ad(e, t, n) {
  (t !== "number" || ga(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var os = Array.isArray;
function oi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gr(n), t = null, o = 0; o < e.length; o++) {
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
  return ft({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function pm(e, t) {
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
  e._wrapperState = { initialValue: Gr(n) };
}
function xy(e, t) {
  var n = Gr(t.value), r = Gr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function mm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function by(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? by(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var vl, Sy = function(e) {
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
}, Dx = ["Webkit", "ms", "Moz", "O"];
Object.keys(us).forEach(function(e) {
  Dx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), us[t] = us[e];
  });
});
function wy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || us.hasOwnProperty(e) && us[e] ? ("" + t).trim() : t + "px";
}
function Cy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = wy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Wx = ft({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function dd(e, t) {
  if (t) {
    if (Wx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function fd(e, t) {
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
var pd = null;
function If(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var md = null, ii = null, si = null;
function hm(e) {
  if (e = tl(e)) {
    if (typeof md != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = ou(t), md(e.stateNode, e.type, t));
  }
}
function ky(e) {
  ii ? si ? si.push(e) : si = [e] : ii = e;
}
function Ty() {
  if (ii) {
    var e = ii, t = si;
    if (si = ii = null, hm(e), t) for (e = 0; e < t.length; e++) hm(t[e]);
  }
}
function Ry(e, t) {
  return e(t);
}
function Ey() {
}
var vc = !1;
function Py(e, t, n) {
  if (vc) return e(t, n);
  vc = !0;
  try {
    return Ry(e, t, n);
  } finally {
    vc = !1, (ii !== null || si !== null) && (Ey(), Ty());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ou(n);
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
var hd = !1;
if (wr) try {
  var Bi = {};
  Object.defineProperty(Bi, "passive", { get: function() {
    hd = !0;
  } }), window.addEventListener("test", Bi, Bi), window.removeEventListener("test", Bi, Bi);
} catch {
  hd = !1;
}
function Ux(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var cs = !1, ya = null, va = !1, gd = null, Vx = { onError: function(e) {
  cs = !0, ya = e;
} };
function Hx(e, t, n, r, o, i, s, l, a) {
  cs = !1, ya = null, Ux.apply(Vx, arguments);
}
function Kx(e, t, n, r, o, i, s, l, a) {
  if (Hx.apply(this, arguments), cs) {
    if (cs) {
      var u = ya;
      cs = !1, ya = null;
    } else throw Error(V(198));
    va || (va = !0, gd = u);
  }
}
function Io(e) {
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
function gm(e) {
  if (Io(e) !== e) throw Error(V(188));
}
function Gx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Io(e), t === null) throw Error(V(188));
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
        if (i === n) return gm(o), e;
        if (i === r) return gm(o), t;
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
function My(e) {
  return e = Gx(e), e !== null ? $y(e) : null;
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
var jy = pn.unstable_scheduleCallback, ym = pn.unstable_cancelCallback, Yx = pn.unstable_shouldYield, Qx = pn.unstable_requestPaint, vt = pn.unstable_now, Xx = pn.unstable_getCurrentPriorityLevel, Mf = pn.unstable_ImmediatePriority, Oy = pn.unstable_UserBlockingPriority, xa = pn.unstable_NormalPriority, qx = pn.unstable_LowPriority, Ay = pn.unstable_IdlePriority, eu = null, nr = null;
function Zx(e) {
  if (nr && typeof nr.onCommitFiberRoot == "function") try {
    nr.onCommitFiberRoot(eu, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Dn = Math.clz32 ? Math.clz32 : tb, Jx = Math.log, eb = Math.LN2;
function tb(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Jx(e) / eb | 0) | 0;
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
function ba(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = is(l) : (i &= s, i !== 0 && (r = is(i)));
  } else s = n & ~o, s !== 0 ? r = is(s) : i !== 0 && (r = is(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Dn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function nb(e, t) {
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
function rb(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Dn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = nb(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function yd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ny() {
  var e = xl;
  return xl <<= 1, !(xl & 4194240) && (xl = 64), e;
}
function xc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Js(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Dn(t), e[t] = n;
}
function ob(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Dn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function $f(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Dn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ve = 0;
function Ly(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var zy, jf, By, _y, Fy, vd = !1, Sl = [], Br = null, _r = null, Fr = null, Ps = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map(), Ar = [], ib = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Br = null;
      break;
    case "dragenter":
    case "dragleave":
      _r = null;
      break;
    case "mouseover":
    case "mouseout":
      Fr = null;
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
function _i(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = tl(t), t !== null && jf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function sb(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Br = _i(Br, e, t, n, r, o), !0;
    case "dragenter":
      return _r = _i(_r, e, t, n, r, o), !0;
    case "mouseover":
      return Fr = _i(Fr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ps.set(i, _i(Ps.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Is.set(i, _i(Is.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Dy(e) {
  var t = co(e.target);
  if (t !== null) {
    var n = Io(t);
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
function Jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      pd = r, n.target.dispatchEvent(r), pd = null;
    } else return t = tl(n), t !== null && jf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function xm(e, t, n) {
  Jl(e) && n.delete(t);
}
function lb() {
  vd = !1, Br !== null && Jl(Br) && (Br = null), _r !== null && Jl(_r) && (_r = null), Fr !== null && Jl(Fr) && (Fr = null), Ps.forEach(xm), Is.forEach(xm);
}
function Fi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, vd || (vd = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, lb)));
}
function Ms(e) {
  function t(o) {
    return Fi(o, e);
  }
  if (0 < Sl.length) {
    Fi(Sl[0], e);
    for (var n = 1; n < Sl.length; n++) {
      var r = Sl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Br !== null && Fi(Br, e), _r !== null && Fi(_r, e), Fr !== null && Fi(Fr, e), Ps.forEach(t), Is.forEach(t), n = 0; n < Ar.length; n++) r = Ar[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ar.length && (n = Ar[0], n.blockedOn === null); ) Dy(n), n.blockedOn === null && Ar.shift();
}
var li = Ir.ReactCurrentBatchConfig, Sa = !0;
function ab(e, t, n, r) {
  var o = Ve, i = li.transition;
  li.transition = null;
  try {
    Ve = 1, Of(e, t, n, r);
  } finally {
    Ve = o, li.transition = i;
  }
}
function ub(e, t, n, r) {
  var o = Ve, i = li.transition;
  li.transition = null;
  try {
    Ve = 4, Of(e, t, n, r);
  } finally {
    Ve = o, li.transition = i;
  }
}
function Of(e, t, n, r) {
  if (Sa) {
    var o = xd(e, t, n, r);
    if (o === null) Ic(e, t, r, wa, n), vm(e, r);
    else if (sb(o, e, t, n, r)) r.stopPropagation();
    else if (vm(e, r), t & 4 && -1 < ib.indexOf(e)) {
      for (; o !== null; ) {
        var i = tl(o);
        if (i !== null && zy(i), i = xd(e, t, n, r), i === null && Ic(e, t, r, wa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ic(e, t, r, null, n);
  }
}
var wa = null;
function xd(e, t, n, r) {
  if (wa = null, e = If(r), e = co(e), e !== null) if (t = Io(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Iy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wa = e, null;
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
      switch (Xx()) {
        case Mf:
          return 1;
        case Oy:
          return 4;
        case xa:
        case qx:
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
var Lr = null, Af = null, ea = null;
function Uy() {
  if (ea) return ea;
  var e, t = Af, n = t.length, r, o = "value" in Lr ? Lr.value : Lr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return ea = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ta(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wl() {
  return !0;
}
function bm() {
  return !1;
}
function gn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? wl : bm, this.isPropagationStopped = bm, this;
  }
  return ft(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = wl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = wl);
  }, persist: function() {
  }, isPersistent: wl }), t;
}
var Ii = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Nf = gn(Ii), el = ft({}, Ii, { view: 0, detail: 0 }), cb = gn(el), bc, Sc, Di, tu = ft({}, el, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Lf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Di && (Di && e.type === "mousemove" ? (bc = e.screenX - Di.screenX, Sc = e.screenY - Di.screenY) : Sc = bc = 0, Di = e), bc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Sc;
} }), Sm = gn(tu), db = ft({}, tu, { dataTransfer: 0 }), fb = gn(db), pb = ft({}, el, { relatedTarget: 0 }), wc = gn(pb), mb = ft({}, Ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), hb = gn(mb), gb = ft({}, Ii, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), yb = gn(gb), vb = ft({}, Ii, { data: 0 }), wm = gn(vb), xb = {
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
}, bb = {
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
}, Sb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function wb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Sb[e]) ? !!t[e] : !1;
}
function Lf() {
  return wb;
}
var Cb = ft({}, el, { key: function(e) {
  if (e.key) {
    var t = xb[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ta(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bb[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Lf, charCode: function(e) {
  return e.type === "keypress" ? ta(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ta(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), kb = gn(Cb), Tb = ft({}, tu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cm = gn(Tb), Rb = ft({}, el, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Lf }), Eb = gn(Rb), Pb = ft({}, Ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Ib = gn(Pb), Mb = ft({}, tu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $b = gn(Mb), jb = [9, 13, 27, 32], zf = wr && "CompositionEvent" in window, ds = null;
wr && "documentMode" in document && (ds = document.documentMode);
var Ob = wr && "TextEvent" in window && !ds, Vy = wr && (!zf || ds && 8 < ds && 11 >= ds), km = " ", Tm = !1;
function Hy(e, t) {
  switch (e) {
    case "keyup":
      return jb.indexOf(t.keyCode) !== -1;
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
var Yo = !1;
function Ab(e, t) {
  switch (e) {
    case "compositionend":
      return Ky(t);
    case "keypress":
      return t.which !== 32 ? null : (Tm = !0, km);
    case "textInput":
      return e = t.data, e === km && Tm ? null : e;
    default:
      return null;
  }
}
function Nb(e, t) {
  if (Yo) return e === "compositionend" || !zf && Hy(e, t) ? (e = Uy(), ea = Af = Lr = null, Yo = !1, e) : null;
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
      return Vy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Lb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Rm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Lb[e.type] : t === "textarea";
}
function Gy(e, t, n, r) {
  ky(r), t = Ca(t, "onChange"), 0 < t.length && (n = new Nf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fs = null, $s = null;
function zb(e) {
  ov(e, 0);
}
function nu(e) {
  var t = qo(e);
  if (yy(t)) return e;
}
function Bb(e, t) {
  if (e === "change") return t;
}
var Yy = !1;
if (wr) {
  var Cc;
  if (wr) {
    var kc = "oninput" in document;
    if (!kc) {
      var Em = document.createElement("div");
      Em.setAttribute("oninput", "return;"), kc = typeof Em.oninput == "function";
    }
    Cc = kc;
  } else Cc = !1;
  Yy = Cc && (!document.documentMode || 9 < document.documentMode);
}
function Pm() {
  fs && (fs.detachEvent("onpropertychange", Qy), $s = fs = null);
}
function Qy(e) {
  if (e.propertyName === "value" && nu($s)) {
    var t = [];
    Gy(t, $s, e, If(e)), Py(zb, t);
  }
}
function _b(e, t, n) {
  e === "focusin" ? (Pm(), fs = t, $s = n, fs.attachEvent("onpropertychange", Qy)) : e === "focusout" && Pm();
}
function Fb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return nu($s);
}
function Db(e, t) {
  if (e === "click") return nu(t);
}
function Wb(e, t) {
  if (e === "input" || e === "change") return nu(t);
}
function Ub(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Un = typeof Object.is == "function" ? Object.is : Ub;
function js(e, t) {
  if (Un(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!td.call(t, o) || !Un(e[o], t[o])) return !1;
  }
  return !0;
}
function Im(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mm(e, t) {
  var n = Im(e);
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
    n = Im(n);
  }
}
function Xy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function qy() {
  for (var e = window, t = ga(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ga(e.document);
  }
  return t;
}
function Bf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Vb(e) {
  var t = qy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Xy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Bf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Mm(n, i);
        var s = Mm(
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
var Hb = wr && "documentMode" in document && 11 >= document.documentMode, Qo = null, bd = null, ps = null, Sd = !1;
function $m(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sd || Qo == null || Qo !== ga(r) || (r = Qo, "selectionStart" in r && Bf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ps && js(ps, r) || (ps = r, r = Ca(bd, "onSelect"), 0 < r.length && (t = new Nf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qo)));
}
function Cl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Xo = { animationend: Cl("Animation", "AnimationEnd"), animationiteration: Cl("Animation", "AnimationIteration"), animationstart: Cl("Animation", "AnimationStart"), transitionend: Cl("Transition", "TransitionEnd") }, Tc = {}, Zy = {};
wr && (Zy = document.createElement("div").style, "AnimationEvent" in window || (delete Xo.animationend.animation, delete Xo.animationiteration.animation, delete Xo.animationstart.animation), "TransitionEvent" in window || delete Xo.transitionend.transition);
function ru(e) {
  if (Tc[e]) return Tc[e];
  if (!Xo[e]) return e;
  var t = Xo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Zy) return Tc[e] = t[n];
  return e;
}
var Jy = ru("animationend"), ev = ru("animationiteration"), tv = ru("animationstart"), nv = ru("transitionend"), rv = /* @__PURE__ */ new Map(), jm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qr(e, t) {
  rv.set(e, t), Po(t, [e]);
}
for (var Rc = 0; Rc < jm.length; Rc++) {
  var Ec = jm[Rc], Kb = Ec.toLowerCase(), Gb = Ec[0].toUpperCase() + Ec.slice(1);
  qr(Kb, "on" + Gb);
}
qr(Jy, "onAnimationEnd");
qr(ev, "onAnimationIteration");
qr(tv, "onAnimationStart");
qr("dblclick", "onDoubleClick");
qr("focusin", "onFocus");
qr("focusout", "onBlur");
qr(nv, "onTransitionEnd");
pi("onMouseEnter", ["mouseout", "mouseover"]);
pi("onMouseLeave", ["mouseout", "mouseover"]);
pi("onPointerEnter", ["pointerout", "pointerover"]);
pi("onPointerLeave", ["pointerout", "pointerover"]);
Po("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Po("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Po("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Po("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Po("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Po("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Yb = new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));
function Om(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Kx(r, t, void 0, e), e.currentTarget = null;
}
function ov(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Om(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Om(o, l, u), i = a;
      }
    }
  }
  if (va) throw e = gd, va = !1, gd = null, e;
}
function tt(e, t) {
  var n = t[Rd];
  n === void 0 && (n = t[Rd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (iv(t, e, 2, !1), n.add(r));
}
function Pc(e, t, n) {
  var r = 0;
  t && (r |= 4), iv(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Os(e) {
  if (!e[kl]) {
    e[kl] = !0, fy.forEach(function(n) {
      n !== "selectionchange" && (Yb.has(n) || Pc(n, !1, e), Pc(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || (t[kl] = !0, Pc("selectionchange", !1, t));
  }
}
function iv(e, t, n, r) {
  switch (Wy(t)) {
    case 1:
      var o = ab;
      break;
    case 4:
      o = ub;
      break;
    default:
      o = Of;
  }
  n = o.bind(null, t, n, e), o = void 0, !hd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ic(e, t, n, r, o) {
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
        if (s = co(l), s === null) return;
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
    var u = i, d = If(n), p = [];
    e: {
      var y = rv.get(e);
      if (y !== void 0) {
        var f = Nf, v = e;
        switch (e) {
          case "keypress":
            if (ta(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = kb;
            break;
          case "focusin":
            v = "focus", f = wc;
            break;
          case "focusout":
            v = "blur", f = wc;
            break;
          case "beforeblur":
          case "afterblur":
            f = wc;
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
            f = Sm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = fb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Eb;
            break;
          case Jy:
          case ev:
          case tv:
            f = hb;
            break;
          case nv:
            f = Ib;
            break;
          case "scroll":
            f = cb;
            break;
          case "wheel":
            f = $b;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = yb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Cm;
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
        if (y = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", y && n !== pd && (v = n.relatedTarget || n.fromElement) && (co(v) || v[Cr])) break e;
        if ((f || y) && (y = d.window === d ? d : (y = d.ownerDocument) ? y.defaultView || y.parentWindow : window, f ? (v = n.relatedTarget || n.toElement, f = u, v = v ? co(v) : null, v !== null && (C = Io(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (f = null, v = u), f !== v)) {
          if (S = Sm, w = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (S = Cm, w = "onPointerLeave", g = "onPointerEnter", m = "pointer"), C = f == null ? y : qo(f), b = v == null ? y : qo(v), y = new S(w, m + "leave", f, n, d), y.target = C, y.relatedTarget = b, w = null, co(d) === u && (S = new S(g, m + "enter", v, n, d), S.target = b, S.relatedTarget = C, w = S), C = w, f && v) t: {
            for (S = f, g = v, m = 0, b = S; b; b = _o(b)) m++;
            for (b = 0, w = g; w; w = _o(w)) b++;
            for (; 0 < m - b; ) S = _o(S), m--;
            for (; 0 < b - m; ) g = _o(g), b--;
            for (; m--; ) {
              if (S === g || g !== null && S === g.alternate) break t;
              S = _o(S), g = _o(g);
            }
            S = null;
          }
          else S = null;
          f !== null && Am(p, y, f, S, !1), v !== null && C !== null && Am(p, C, v, S, !0);
        }
      }
      e: {
        if (y = u ? qo(u) : window, f = y.nodeName && y.nodeName.toLowerCase(), f === "select" || f === "input" && y.type === "file") var E = Bb;
        else if (Rm(y)) if (Yy) E = Wb;
        else {
          E = Fb;
          var k = _b;
        }
        else (f = y.nodeName) && f.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (E = Db);
        if (E && (E = E(e, u))) {
          Gy(p, E, n, d);
          break e;
        }
        k && k(e, y, u), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && ad(y, "number", y.value);
      }
      switch (k = u ? qo(u) : window, e) {
        case "focusin":
          (Rm(k) || k.contentEditable === "true") && (Qo = k, bd = u, ps = null);
          break;
        case "focusout":
          ps = bd = Qo = null;
          break;
        case "mousedown":
          Sd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sd = !1, $m(p, n, d);
          break;
        case "selectionchange":
          if (Hb) break;
        case "keydown":
        case "keyup":
          $m(p, n, d);
      }
      var R;
      if (zf) e: {
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
      else Yo ? Hy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Vy && n.locale !== "ko" && (Yo || T !== "onCompositionStart" ? T === "onCompositionEnd" && Yo && (R = Uy()) : (Lr = d, Af = "value" in Lr ? Lr.value : Lr.textContent, Yo = !0)), k = Ca(u, T), 0 < k.length && (T = new wm(T, e, null, n, d), p.push({ event: T, listeners: k }), R ? T.data = R : (R = Ky(n), R !== null && (T.data = R)))), (R = Ob ? Ab(e, n) : Nb(e, n)) && (u = Ca(u, "onBeforeInput"), 0 < u.length && (d = new wm("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: u }), d.data = R));
    }
    ov(p, t);
  });
}
function As(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Es(e, n), i != null && r.unshift(As(e, i, o)), i = Es(e, t), i != null && r.push(As(e, i, o))), e = e.return;
  }
  return r;
}
function _o(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Am(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Es(n, i), a != null && s.unshift(As(n, a, l))) : o || (a = Es(n, i), a != null && s.push(As(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Qb = /\r\n?/g, Xb = /\u0000|\uFFFD/g;
function Nm(e) {
  return (typeof e == "string" ? e : "" + e).replace(Qb, `
`).replace(Xb, "");
}
function Tl(e, t, n) {
  if (t = Nm(t), Nm(e) !== t && n) throw Error(V(425));
}
function ka() {
}
var wd = null, Cd = null;
function kd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Td = typeof setTimeout == "function" ? setTimeout : void 0, qb = typeof clearTimeout == "function" ? clearTimeout : void 0, Lm = typeof Promise == "function" ? Promise : void 0, Zb = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lm < "u" ? function(e) {
  return Lm.resolve(null).then(e).catch(Jb);
} : Td;
function Jb(e) {
  setTimeout(function() {
    throw e;
  });
}
function Mc(e, t) {
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
function zm(e) {
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
var Mi = Math.random().toString(36).slice(2), Jn = "__reactFiber$" + Mi, Ns = "__reactProps$" + Mi, Cr = "__reactContainer$" + Mi, Rd = "__reactEvents$" + Mi, eS = "__reactListeners$" + Mi, tS = "__reactHandles$" + Mi;
function co(e) {
  var t = e[Jn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Cr] || n[Jn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = zm(e); e !== null; ) {
        if (n = e[Jn]) return n;
        e = zm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function tl(e) {
  return e = e[Jn] || e[Cr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function ou(e) {
  return e[Ns] || null;
}
var Ed = [], Zo = -1;
function Zr(e) {
  return { current: e };
}
function rt(e) {
  0 > Zo || (e.current = Ed[Zo], Ed[Zo] = null, Zo--);
}
function Ze(e, t) {
  Zo++, Ed[Zo] = e.current, e.current = t;
}
var Yr = {}, Wt = Zr(Yr), en = Zr(!1), xo = Yr;
function mi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function tn(e) {
  return e = e.childContextTypes, e != null;
}
function Ta() {
  rt(en), rt(Wt);
}
function Bm(e, t, n) {
  if (Wt.current !== Yr) throw Error(V(168));
  Ze(Wt, t), Ze(en, n);
}
function sv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, _x(e) || "Unknown", o));
  return ft({}, n, r);
}
function Ra(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yr, xo = Wt.current, Ze(Wt, e), Ze(en, en.current), !0;
}
function _m(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = sv(e, t, xo), r.__reactInternalMemoizedMergedChildContext = e, rt(en), rt(Wt), Ze(Wt, e)) : rt(en), Ze(en, n);
}
var gr = null, iu = !1, $c = !1;
function lv(e) {
  gr === null ? gr = [e] : gr.push(e);
}
function nS(e) {
  iu = !0, lv(e);
}
function Jr() {
  if (!$c && gr !== null) {
    $c = !0;
    var e = 0, t = Ve;
    try {
      var n = gr;
      for (Ve = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gr = null, iu = !1;
    } catch (o) {
      throw gr !== null && (gr = gr.slice(e + 1)), jy(Mf, Jr), o;
    } finally {
      Ve = t, $c = !1;
    }
  }
  return null;
}
var Jo = [], ei = 0, Ea = null, Pa = 0, bn = [], Sn = 0, bo = null, xr = 1, br = "";
function lo(e, t) {
  Jo[ei++] = Pa, Jo[ei++] = Ea, Ea = e, Pa = t;
}
function av(e, t, n) {
  bn[Sn++] = xr, bn[Sn++] = br, bn[Sn++] = bo, bo = e;
  var r = xr;
  e = br;
  var o = 32 - Dn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Dn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, xr = 1 << 32 - Dn(t) + o | n << o | r, br = i + e;
  } else xr = 1 << i | n << o | r, br = e;
}
function _f(e) {
  e.return !== null && (lo(e, 1), av(e, 1, 0));
}
function Ff(e) {
  for (; e === Ea; ) Ea = Jo[--ei], Jo[ei] = null, Pa = Jo[--ei], Jo[ei] = null;
  for (; e === bo; ) bo = bn[--Sn], bn[Sn] = null, br = bn[--Sn], bn[Sn] = null, xr = bn[--Sn], bn[Sn] = null;
}
var dn = null, cn = null, lt = !1, Fn = null;
function uv(e, t) {
  var n = kn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Fm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = Dr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dn = e, cn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = bo !== null ? { id: xr, overflow: br } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = kn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dn = e, cn = null, !0) : !1;
    default:
      return !1;
  }
}
function Pd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Id(e) {
  if (lt) {
    var t = cn;
    if (t) {
      var n = t;
      if (!Fm(e, t)) {
        if (Pd(e)) throw Error(V(418));
        t = Dr(n.nextSibling);
        var r = dn;
        t && Fm(e, t) ? uv(r, n) : (e.flags = e.flags & -4097 | 2, lt = !1, dn = e);
      }
    } else {
      if (Pd(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, lt = !1, dn = e;
    }
  }
}
function Dm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function Rl(e) {
  if (e !== dn) return !1;
  if (!lt) return Dm(e), lt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !kd(e.type, e.memoizedProps)), t && (t = cn)) {
    if (Pd(e)) throw cv(), Error(V(418));
    for (; t; ) uv(e, t), t = Dr(t.nextSibling);
  }
  if (Dm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              cn = Dr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      cn = null;
    }
  } else cn = dn ? Dr(e.stateNode.nextSibling) : null;
  return !0;
}
function cv() {
  for (var e = cn; e; ) e = Dr(e.nextSibling);
}
function hi() {
  cn = dn = null, lt = !1;
}
function Df(e) {
  Fn === null ? Fn = [e] : Fn.push(e);
}
var rS = Ir.ReactCurrentBatchConfig;
function Wi(e, t, n) {
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
function Wm(e) {
  var t = e._init;
  return t(e._payload);
}
function dv(e) {
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
    return g = Hr(g, m), g.index = 0, g.sibling = null, g;
  }
  function i(g, m, b) {
    return g.index = b, e ? (b = g.alternate, b !== null ? (b = b.index, b < m ? (g.flags |= 2, m) : b) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, m, b, w) {
    return m === null || m.tag !== 6 ? (m = Bc(b, g.mode, w), m.return = g, m) : (m = o(m, b), m.return = g, m);
  }
  function a(g, m, b, w) {
    var E = b.type;
    return E === Go ? d(g, m, b.props.children, w, b.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === jr && Wm(E) === m.type) ? (w = o(m, b.props), w.ref = Wi(g, m, b), w.return = g, w) : (w = aa(b.type, b.key, b.props, null, g.mode, w), w.ref = Wi(g, m, b), w.return = g, w);
  }
  function u(g, m, b, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = _c(b, g.mode, w), m.return = g, m) : (m = o(m, b.children || []), m.return = g, m);
  }
  function d(g, m, b, w, E) {
    return m === null || m.tag !== 7 ? (m = go(b, g.mode, w, E), m.return = g, m) : (m = o(m, b), m.return = g, m);
  }
  function p(g, m, b) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Bc("" + m, g.mode, b), m.return = g, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case gl:
          return b = aa(m.type, m.key, m.props, null, g.mode, b), b.ref = Wi(g, null, m), b.return = g, b;
        case Ko:
          return m = _c(m, g.mode, b), m.return = g, m;
        case jr:
          var w = m._init;
          return p(g, w(m._payload), b);
      }
      if (os(m) || zi(m)) return m = go(m, g.mode, b, null), m.return = g, m;
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
        case Ko:
          return b.key === E ? u(g, m, b, w) : null;
        case jr:
          return E = b._init, y(
            g,
            m,
            E(b._payload),
            w
          );
      }
      if (os(b) || zi(b)) return E !== null ? null : d(g, m, b, w, null);
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
        case Ko:
          return g = g.get(w.key === null ? b : w.key) || null, u(m, g, w, E);
        case jr:
          var k = w._init;
          return f(g, m, b, k(w._payload), E);
      }
      if (os(w) || zi(w)) return g = g.get(b) || null, d(m, g, w, E, null);
      El(m, w);
    }
    return null;
  }
  function v(g, m, b, w) {
    for (var E = null, k = null, R = m, T = m = 0, I = null; R !== null && T < b.length; T++) {
      R.index > T ? (I = R, R = null) : I = R.sibling;
      var L = y(g, R, b[T], w);
      if (L === null) {
        R === null && (R = I);
        break;
      }
      e && R && L.alternate === null && t(g, R), m = i(L, m, T), k === null ? E = L : k.sibling = L, k = L, R = I;
    }
    if (T === b.length) return n(g, R), lt && lo(g, T), E;
    if (R === null) {
      for (; T < b.length; T++) R = p(g, b[T], w), R !== null && (m = i(R, m, T), k === null ? E = R : k.sibling = R, k = R);
      return lt && lo(g, T), E;
    }
    for (R = r(g, R); T < b.length; T++) I = f(R, g, T, b[T], w), I !== null && (e && I.alternate !== null && R.delete(I.key === null ? T : I.key), m = i(I, m, T), k === null ? E = I : k.sibling = I, k = I);
    return e && R.forEach(function($) {
      return t(g, $);
    }), lt && lo(g, T), E;
  }
  function S(g, m, b, w) {
    var E = zi(b);
    if (typeof E != "function") throw Error(V(150));
    if (b = E.call(b), b == null) throw Error(V(151));
    for (var k = E = null, R = m, T = m = 0, I = null, L = b.next(); R !== null && !L.done; T++, L = b.next()) {
      R.index > T ? (I = R, R = null) : I = R.sibling;
      var $ = y(g, R, L.value, w);
      if ($ === null) {
        R === null && (R = I);
        break;
      }
      e && R && $.alternate === null && t(g, R), m = i($, m, T), k === null ? E = $ : k.sibling = $, k = $, R = I;
    }
    if (L.done) return n(
      g,
      R
    ), lt && lo(g, T), E;
    if (R === null) {
      for (; !L.done; T++, L = b.next()) L = p(g, L.value, w), L !== null && (m = i(L, m, T), k === null ? E = L : k.sibling = L, k = L);
      return lt && lo(g, T), E;
    }
    for (R = r(g, R); !L.done; T++, L = b.next()) L = f(R, g, T, L.value, w), L !== null && (e && L.alternate !== null && R.delete(L.key === null ? T : L.key), m = i(L, m, T), k === null ? E = L : k.sibling = L, k = L);
    return e && R.forEach(function(A) {
      return t(g, A);
    }), lt && lo(g, T), E;
  }
  function C(g, m, b, w) {
    if (typeof b == "object" && b !== null && b.type === Go && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case gl:
          e: {
            for (var E = b.key, k = m; k !== null; ) {
              if (k.key === E) {
                if (E = b.type, E === Go) {
                  if (k.tag === 7) {
                    n(g, k.sibling), m = o(k, b.props.children), m.return = g, g = m;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === jr && Wm(E) === k.type) {
                  n(g, k.sibling), m = o(k, b.props), m.ref = Wi(g, k, b), m.return = g, g = m;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            b.type === Go ? (m = go(b.props.children, g.mode, w, b.key), m.return = g, g = m) : (w = aa(b.type, b.key, b.props, null, g.mode, w), w.ref = Wi(g, m, b), w.return = g, g = w);
          }
          return s(g);
        case Ko:
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
            m = _c(b, g.mode, w), m.return = g, g = m;
          }
          return s(g);
        case jr:
          return k = b._init, C(g, m, k(b._payload), w);
      }
      if (os(b)) return v(g, m, b, w);
      if (zi(b)) return S(g, m, b, w);
      El(g, b);
    }
    return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, b), m.return = g, g = m) : (n(g, m), m = Bc(b, g.mode, w), m.return = g, g = m), s(g)) : n(g, m);
  }
  return C;
}
var gi = dv(!0), fv = dv(!1), Ia = Zr(null), Ma = null, ti = null, Wf = null;
function Uf() {
  Wf = ti = Ma = null;
}
function Vf(e) {
  var t = Ia.current;
  rt(Ia), e._currentValue = t;
}
function Md(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ai(e, t) {
  Ma = e, Wf = ti = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Jt = !0), e.firstContext = null);
}
function En(e) {
  var t = e._currentValue;
  if (Wf !== e) if (e = { context: e, memoizedValue: t, next: null }, ti === null) {
    if (Ma === null) throw Error(V(308));
    ti = e, Ma.dependencies = { lanes: 0, firstContext: e };
  } else ti = ti.next = e;
  return t;
}
var fo = null;
function Hf(e) {
  fo === null ? fo = [e] : fo.push(e);
}
function pv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Hf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, kr(e, r);
}
function kr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Or = !1;
function Kf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function mv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Sr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Wr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Oe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, kr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Hf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, kr(e, n);
}
function na(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $f(e, n);
  }
}
function Um(e, t) {
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
function $a(e, t, n, r) {
  var o = e.updateQueue;
  Or = !1;
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
              p = ft({}, p, y);
              break e;
            case 2:
              Or = !0;
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
    wo |= s, e.lanes = s, e.memoizedState = p;
  }
}
function Vm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var nl = {}, rr = Zr(nl), Ls = Zr(nl), zs = Zr(nl);
function po(e) {
  if (e === nl) throw Error(V(174));
  return e;
}
function Gf(e, t) {
  switch (Ze(zs, t), Ze(Ls, e), Ze(rr, nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = cd(t, e);
  }
  rt(rr), Ze(rr, t);
}
function yi() {
  rt(rr), rt(Ls), rt(zs);
}
function hv(e) {
  po(zs.current);
  var t = po(rr.current), n = cd(t, e.type);
  t !== n && (Ze(Ls, e), Ze(rr, n));
}
function Yf(e) {
  Ls.current === e && (rt(rr), rt(Ls));
}
var ut = Zr(0);
function ja(e) {
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
var jc = [];
function Qf() {
  for (var e = 0; e < jc.length; e++) jc[e]._workInProgressVersionPrimary = null;
  jc.length = 0;
}
var ra = Ir.ReactCurrentDispatcher, Oc = Ir.ReactCurrentBatchConfig, So = 0, ct = null, Tt = null, Et = null, Oa = !1, ms = !1, Bs = 0, oS = 0;
function Bt() {
  throw Error(V(321));
}
function Xf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Un(e[n], t[n])) return !1;
  return !0;
}
function qf(e, t, n, r, o, i) {
  if (So = i, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ra.current = e === null || e.memoizedState === null ? aS : uS, e = n(r, o), ms) {
    i = 0;
    do {
      if (ms = !1, Bs = 0, 25 <= i) throw Error(V(301));
      i += 1, Et = Tt = null, t.updateQueue = null, ra.current = cS, e = n(r, o);
    } while (ms);
  }
  if (ra.current = Aa, t = Tt !== null && Tt.next !== null, So = 0, Et = Tt = ct = null, Oa = !1, t) throw Error(V(300));
  return e;
}
function Zf() {
  var e = Bs !== 0;
  return Bs = 0, e;
}
function Xn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Et === null ? ct.memoizedState = Et = e : Et = Et.next = e, Et;
}
function Pn() {
  if (Tt === null) {
    var e = ct.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Tt.next;
  var t = Et === null ? ct.memoizedState : Et.next;
  if (t !== null) Et = t, Tt = e;
  else {
    if (e === null) throw Error(V(310));
    Tt = e, e = { memoizedState: Tt.memoizedState, baseState: Tt.baseState, baseQueue: Tt.baseQueue, queue: Tt.queue, next: null }, Et === null ? ct.memoizedState = Et = e : Et = Et.next = e;
  }
  return Et;
}
function _s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ac(e) {
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
      if ((So & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, ct.lanes |= d, wo |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Un(r, t.memoizedState) || (Jt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ct.lanes |= i, wo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nc(e) {
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
    Un(i, t.memoizedState) || (Jt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function gv() {
}
function yv(e, t) {
  var n = ct, r = Pn(), o = t(), i = !Un(r.memoizedState, o);
  if (i && (r.memoizedState = o, Jt = !0), r = r.queue, Jf(bv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Et !== null && Et.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fs(9, xv.bind(null, n, r, o, t), void 0, null), Pt === null) throw Error(V(349));
    So & 30 || vv(n, t, o);
  }
  return o;
}
function vv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function xv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Sv(t) && wv(e);
}
function bv(e, t, n) {
  return n(function() {
    Sv(t) && wv(e);
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
function wv(e) {
  var t = kr(e, 1);
  t !== null && Wn(t, e, 1, -1);
}
function Hm(e) {
  var t = Xn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: _s, lastRenderedState: e }, t.queue = e, e = e.dispatch = lS.bind(null, ct, e), [t.memoizedState, e];
}
function Fs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Cv() {
  return Pn().memoizedState;
}
function oa(e, t, n, r) {
  var o = Xn();
  ct.flags |= e, o.memoizedState = Fs(1 | t, n, void 0, r === void 0 ? null : r);
}
function su(e, t, n, r) {
  var o = Pn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Tt !== null) {
    var s = Tt.memoizedState;
    if (i = s.destroy, r !== null && Xf(r, s.deps)) {
      o.memoizedState = Fs(t, n, i, r);
      return;
    }
  }
  ct.flags |= e, o.memoizedState = Fs(1 | t, n, i, r);
}
function Km(e, t) {
  return oa(8390656, 8, e, t);
}
function Jf(e, t) {
  return su(2048, 8, e, t);
}
function kv(e, t) {
  return su(4, 2, e, t);
}
function Tv(e, t) {
  return su(4, 4, e, t);
}
function Rv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ev(e, t, n) {
  return n = n != null ? n.concat([e]) : null, su(4, 4, Rv.bind(null, t, e), n);
}
function ep() {
}
function Pv(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Iv(e, t) {
  var n = Pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Mv(e, t, n) {
  return So & 21 ? (Un(n, t) || (n = Ny(), ct.lanes |= n, wo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Jt = !0), e.memoizedState = n);
}
function iS(e, t) {
  var n = Ve;
  Ve = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Oc.transition;
  Oc.transition = {};
  try {
    e(!1), t();
  } finally {
    Ve = n, Oc.transition = r;
  }
}
function $v() {
  return Pn().memoizedState;
}
function sS(e, t, n) {
  var r = Vr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, jv(e)) Ov(t, n);
  else if (n = pv(e, t, n, r), n !== null) {
    var o = Qt();
    Wn(n, e, r, o), Av(n, t, r);
  }
}
function lS(e, t, n) {
  var r = Vr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (jv(e)) Ov(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Un(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Hf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = pv(e, t, o, r), n !== null && (o = Qt(), Wn(n, e, r, o), Av(n, t, r));
  }
}
function jv(e) {
  var t = e.alternate;
  return e === ct || t !== null && t === ct;
}
function Ov(e, t) {
  ms = Oa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Av(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, $f(e, n);
  }
}
var Aa = { readContext: En, useCallback: Bt, useContext: Bt, useEffect: Bt, useImperativeHandle: Bt, useInsertionEffect: Bt, useLayoutEffect: Bt, useMemo: Bt, useReducer: Bt, useRef: Bt, useState: Bt, useDebugValue: Bt, useDeferredValue: Bt, useTransition: Bt, useMutableSource: Bt, useSyncExternalStore: Bt, useId: Bt, unstable_isNewReconciler: !1 }, aS = { readContext: En, useCallback: function(e, t) {
  return Xn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: En, useEffect: Km, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, oa(
    4194308,
    4,
    Rv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return oa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return oa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Xn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Xn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = sS.bind(null, ct, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Xn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hm, useDebugValue: ep, useDeferredValue: function(e) {
  return Xn().memoizedState = e;
}, useTransition: function() {
  var e = Hm(!1), t = e[0];
  return e = iS.bind(null, e[1]), Xn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ct, o = Xn();
  if (lt) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Pt === null) throw Error(V(349));
    So & 30 || vv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Km(bv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Fs(9, xv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Xn(), t = Pt.identifierPrefix;
  if (lt) {
    var n = br, r = xr;
    n = (r & ~(1 << 32 - Dn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Bs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = oS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, uS = {
  readContext: En,
  useCallback: Pv,
  useContext: En,
  useEffect: Jf,
  useImperativeHandle: Ev,
  useInsertionEffect: kv,
  useLayoutEffect: Tv,
  useMemo: Iv,
  useReducer: Ac,
  useRef: Cv,
  useState: function() {
    return Ac(_s);
  },
  useDebugValue: ep,
  useDeferredValue: function(e) {
    var t = Pn();
    return Mv(t, Tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Ac(_s)[0], t = Pn().memoizedState;
    return [e, t];
  },
  useMutableSource: gv,
  useSyncExternalStore: yv,
  useId: $v,
  unstable_isNewReconciler: !1
}, cS = { readContext: En, useCallback: Pv, useContext: En, useEffect: Jf, useImperativeHandle: Ev, useInsertionEffect: kv, useLayoutEffect: Tv, useMemo: Iv, useReducer: Nc, useRef: Cv, useState: function() {
  return Nc(_s);
}, useDebugValue: ep, useDeferredValue: function(e) {
  var t = Pn();
  return Tt === null ? t.memoizedState = e : Mv(t, Tt.memoizedState, e);
}, useTransition: function() {
  var e = Nc(_s)[0], t = Pn().memoizedState;
  return [e, t];
}, useMutableSource: gv, useSyncExternalStore: yv, useId: $v, unstable_isNewReconciler: !1 };
function Bn(e, t) {
  if (e && e.defaultProps) {
    t = ft({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $d(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ft({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lu = { isMounted: function(e) {
  return (e = e._reactInternals) ? Io(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Vr(e), i = Sr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Wr(e, i, o), t !== null && (Wn(t, e, o, r), na(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Vr(e), i = Sr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Wr(e, i, o), t !== null && (Wn(t, e, o, r), na(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qt(), r = Vr(e), o = Sr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Wr(e, o, r), t !== null && (Wn(t, e, r, n), na(t, e, r));
} };
function Gm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !js(n, r) || !js(o, i) : !0;
}
function Nv(e, t, n) {
  var r = !1, o = Yr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = En(i) : (o = tn(t) ? xo : Wt.current, r = t.contextTypes, i = (r = r != null) ? mi(e, o) : Yr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = lu, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ym(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && lu.enqueueReplaceState(t, t.state, null);
}
function jd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Kf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = En(i) : (i = tn(t) ? xo : Wt.current, o.context = mi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && ($d(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && lu.enqueueReplaceState(o, o.state, null), $a(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function vi(e, t) {
  try {
    var n = "", r = t;
    do
      n += Bx(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Lc(e, t, n) {
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
var dS = typeof WeakMap == "function" ? WeakMap : Map;
function Lv(e, t, n) {
  n = Sr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    La || (La = !0, Ud = r), Od(e, t);
  }, n;
}
function zv(e, t, n) {
  n = Sr(-1, n), n.tag = 3;
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
    Od(e, t), typeof r != "function" && (Ur === null ? Ur = /* @__PURE__ */ new Set([this]) : Ur.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Qm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new dS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = TS.bind(null, e, t, n), t.then(e, e));
}
function Xm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Sr(-1, 1), t.tag = 2, Wr(n, t, 1))), n.lanes |= 1), e);
}
var fS = Ir.ReactCurrentOwner, Jt = !1;
function Gt(e, t, n, r) {
  t.child = e === null ? fv(t, null, n, r) : gi(t, e.child, n, r);
}
function Zm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ai(t, o), r = qf(e, t, n, r, i, o), n = Zf(), e !== null && !Jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tr(e, t, o)) : (lt && n && _f(t), t.flags |= 1, Gt(e, t, r, o), t.child);
}
function Jm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !ap(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Bv(e, t, i, r, o)) : (e = aa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : js, n(s, r) && e.ref === t.ref) return Tr(e, t, o);
  }
  return t.flags |= 1, e = Hr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Bv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (js(i, r) && e.ref === t.ref) if (Jt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Jt = !0);
    else return t.lanes = e.lanes, Tr(e, t, o);
  }
  return Ad(e, t, n, r, o);
}
function _v(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(ri, ln), ln |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(ri, ln), ln |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ze(ri, ln), ln |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ze(ri, ln), ln |= r;
  return Gt(e, t, o, n), t.child;
}
function Fv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ad(e, t, n, r, o) {
  var i = tn(n) ? xo : Wt.current;
  return i = mi(t, i), ai(t, o), n = qf(e, t, n, r, i, o), r = Zf(), e !== null && !Jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tr(e, t, o)) : (lt && r && _f(t), t.flags |= 1, Gt(e, t, n, o), t.child);
}
function eh(e, t, n, r, o) {
  if (tn(n)) {
    var i = !0;
    Ra(t);
  } else i = !1;
  if (ai(t, o), t.stateNode === null) ia(e, t), Nv(t, n, r), jd(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = En(u) : (u = tn(n) ? xo : Wt.current, u = mi(t, u));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Ym(t, s, r, u), Or = !1;
    var y = t.memoizedState;
    s.state = y, $a(t, r, s, o), a = t.memoizedState, l !== r || y !== a || en.current || Or ? (typeof d == "function" && ($d(t, n, d, r), a = t.memoizedState), (l = Or || Gm(t, n, l, r, y, a, u)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, mv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Bn(t.type, l), s.props = u, p = t.pendingProps, y = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = En(a) : (a = tn(n) ? xo : Wt.current, a = mi(t, a));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || y !== a) && Ym(t, s, r, a), Or = !1, y = t.memoizedState, s.state = y, $a(t, r, s, o);
    var v = t.memoizedState;
    l !== p || y !== v || en.current || Or ? (typeof f == "function" && ($d(t, n, f, r), v = t.memoizedState), (u = Or || Gm(t, n, u, r, y, v, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Nd(e, t, n, r, i, o);
}
function Nd(e, t, n, r, o, i) {
  Fv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && _m(t, n, !1), Tr(e, t, i);
  r = t.stateNode, fS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = gi(t, e.child, null, i), t.child = gi(t, null, l, i)) : Gt(e, t, l, i), t.memoizedState = r.state, o && _m(t, n, !0), t.child;
}
function Dv(e) {
  var t = e.stateNode;
  t.pendingContext ? Bm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bm(e, t.context, !1), Gf(e, t.containerInfo);
}
function th(e, t, n, r, o) {
  return hi(), Df(o), t.flags |= 256, Gt(e, t, n, r), t.child;
}
var Ld = { dehydrated: null, treeContext: null, retryLane: 0 };
function zd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Wv(e, t, n) {
  var r = t.pendingProps, o = ut.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ze(ut, o & 1), e === null)
    return Id(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = cu(s, r, 0, null), e = go(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = zd(n), t.memoizedState = Ld, e) : tp(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return pS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Hr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Hr(l, i) : (i = go(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? zd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ld, r;
  }
  return i = e.child, e = i.sibling, r = Hr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function tp(e, t) {
  return t = cu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pl(e, t, n, r) {
  return r !== null && Df(r), gi(t, e.child, null, n), e = tp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function pS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Lc(Error(V(422))), Pl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = cu({ mode: "visible", children: r.children }, o, 0, null), i = go(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && gi(t, e.child, null, s), t.child.memoizedState = zd(s), t.memoizedState = Ld, i);
  if (!(t.mode & 1)) return Pl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = Lc(i, r, void 0), Pl(e, t, s, r);
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, kr(e, o), Wn(r, e, o, -1));
    }
    return lp(), r = Lc(Error(V(421))), Pl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = RS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, cn = Dr(o.nextSibling), dn = t, lt = !0, Fn = null, e !== null && (bn[Sn++] = xr, bn[Sn++] = br, bn[Sn++] = bo, xr = e.id, br = e.overflow, bo = t), t = tp(t, r.children), t.flags |= 4096, t);
}
function nh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Md(e.return, t, n);
}
function zc(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Uv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Gt(e, t, r.children, n), r = ut.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && nh(e, n, t);
      else if (e.tag === 19) nh(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ja(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), zc(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ja(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      zc(t, !0, n, null, i);
      break;
    case "together":
      zc(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ia(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Tr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), wo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Hr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Hr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function mS(e, t, n) {
  switch (t.tag) {
    case 3:
      Dv(t), hi();
      break;
    case 5:
      hv(t);
      break;
    case 1:
      tn(t.type) && Ra(t);
      break;
    case 4:
      Gf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ze(Ia, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ze(ut, ut.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wv(e, t, n) : (Ze(ut, ut.current & 1), e = Tr(e, t, n), e !== null ? e.sibling : null);
      Ze(ut, ut.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Uv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ze(ut, ut.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, _v(e, t, n);
  }
  return Tr(e, t, n);
}
var Vv, Bd, Hv, Kv;
Vv = function(e, t) {
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
Hv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, po(rr.current);
    var i = null;
    switch (n) {
      case "input":
        o = sd(e, o), r = sd(e, r), i = [];
        break;
      case "select":
        o = ft({}, o, { value: void 0 }), r = ft({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ud(e, o), r = ud(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ka);
    }
    dd(n, r);
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
Kv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ui(e, t) {
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
function hS(e, t, n) {
  var r = t.pendingProps;
  switch (Ff(t), t.tag) {
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
      return tn(t.type) && Ta(), _t(t), null;
    case 3:
      return r = t.stateNode, yi(), rt(en), rt(Wt), Qf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Fn !== null && (Kd(Fn), Fn = null))), Bd(e, t), _t(t), null;
    case 5:
      Yf(t);
      var o = po(zs.current);
      if (n = t.type, e !== null && t.stateNode != null) Hv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return _t(t), null;
        }
        if (e = po(rr.current), Rl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Jn] = t, r[Ns] = i, e = (t.mode & 1) !== 0, n) {
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
              dm(r, i), tt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, tt("invalid", r);
              break;
            case "textarea":
              pm(r, i), tt("invalid", r);
          }
          dd(n, i), o = null;
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
              yl(r), fm(r, i, !0);
              break;
            case "textarea":
              yl(r), mm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ka);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = by(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Jn] = t, e[Ns] = r, Vv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = fd(n, r), n) {
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
                dm(e, r), o = sd(e, r), tt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ft({}, r, { value: void 0 }), tt("invalid", e);
                break;
              case "textarea":
                pm(e, r), o = ud(e, r), tt("invalid", e);
                break;
              default:
                o = r;
            }
            dd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Cy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Sy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Rs(e, a) : typeof a == "number" && Rs(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ts.hasOwnProperty(i) ? a != null && i === "onScroll" && tt("scroll", e) : a != null && Tf(e, i, a, s));
            }
            switch (n) {
              case "input":
                yl(e), fm(e, r, !1);
                break;
              case "textarea":
                yl(e), mm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gr(r.value));
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
                typeof o.onClick == "function" && (e.onclick = ka);
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
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = po(zs.current), po(rr.current), Rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Jn] = t, (i = r.nodeValue !== n) && (e = dn, e !== null)) switch (e.tag) {
            case 3:
              Tl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Tl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Jn] = t, t.stateNode = r;
      }
      return _t(t), null;
    case 13:
      if (rt(ut), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (lt && cn !== null && t.mode & 1 && !(t.flags & 128)) cv(), hi(), t.flags |= 98560, i = !1;
        else if (i = Rl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[Jn] = t;
          } else hi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _t(t), i = !1;
        } else Fn !== null && (Kd(Fn), Fn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ut.current & 1 ? Rt === 0 && (Rt = 3) : lp())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
    case 4:
      return yi(), Bd(e, t), e === null && Os(t.stateNode.containerInfo), _t(t), null;
    case 10:
      return Vf(t.type._context), _t(t), null;
    case 17:
      return tn(t.type) && Ta(), _t(t), null;
    case 19:
      if (rt(ut), i = t.memoizedState, i === null) return _t(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Ui(i, !1);
      else {
        if (Rt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ja(e), s !== null) {
            for (t.flags |= 128, Ui(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ze(ut, ut.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && vt() > xi && (t.flags |= 128, r = !0, Ui(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ja(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ui(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !lt) return _t(t), null;
        } else 2 * vt() - i.renderingStartTime > xi && n !== 1073741824 && (t.flags |= 128, r = !0, Ui(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = vt(), t.sibling = null, n = ut.current, Ze(ut, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
    case 22:
    case 23:
      return sp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ln & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function gS(e, t) {
  switch (Ff(t), t.tag) {
    case 1:
      return tn(t.type) && Ta(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return yi(), rt(en), rt(Wt), Qf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Yf(t), null;
    case 13:
      if (rt(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        hi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return rt(ut), null;
    case 4:
      return yi(), null;
    case 10:
      return Vf(t.type._context), null;
    case 22:
    case 23:
      return sp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Il = !1, Dt = !1, yS = typeof WeakSet == "function" ? WeakSet : Set, J = null;
function ni(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ht(e, t, r);
  }
  else n.current = null;
}
function _d(e, t, n) {
  try {
    n();
  } catch (r) {
    ht(e, t, r);
  }
}
var rh = !1;
function vS(e, t) {
  if (wd = Sa, e = qy(), Bf(e)) {
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
  for (Cd = { focusedElem: e, selectionRange: n }, Sa = !1, J = t; J !== null; ) if (t = J, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, J = e;
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
            var S = v.memoizedProps, C = v.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Bn(t.type, S), C);
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
      ht(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, J = e;
      break;
    }
    J = t.return;
  }
  return v = rh, rh = !1, v;
}
function hs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && _d(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function au(e, t) {
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
function Fd(e) {
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
function Gv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Gv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Jn], delete t[Ns], delete t[Rd], delete t[eS], delete t[tS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Yv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oh(e) {
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
function Dd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ka));
  else if (r !== 4 && (e = e.child, e !== null)) for (Dd(e, t, n), e = e.sibling; e !== null; ) Dd(e, t, n), e = e.sibling;
}
function Wd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Wd(e, t, n), e = e.sibling; e !== null; ) Wd(e, t, n), e = e.sibling;
}
var jt = null, _n = !1;
function Mr(e, t, n) {
  for (n = n.child; n !== null; ) Qv(e, t, n), n = n.sibling;
}
function Qv(e, t, n) {
  if (nr && typeof nr.onCommitFiberUnmount == "function") try {
    nr.onCommitFiberUnmount(eu, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Dt || ni(n, t);
    case 6:
      var r = jt, o = _n;
      jt = null, Mr(e, t, n), jt = r, _n = o, jt !== null && (_n ? (e = jt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : jt.removeChild(n.stateNode));
      break;
    case 18:
      jt !== null && (_n ? (e = jt, n = n.stateNode, e.nodeType === 8 ? Mc(e.parentNode, n) : e.nodeType === 1 && Mc(e, n), Ms(e)) : Mc(jt, n.stateNode));
      break;
    case 4:
      r = jt, o = _n, jt = n.stateNode.containerInfo, _n = !0, Mr(e, t, n), jt = r, _n = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Dt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && _d(n, t, s), o = o.next;
        } while (o !== r);
      }
      Mr(e, t, n);
      break;
    case 1:
      if (!Dt && (ni(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ht(n, t, l);
      }
      Mr(e, t, n);
      break;
    case 21:
      Mr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Dt = (r = Dt) || n.memoizedState !== null, Mr(e, t, n), Dt = r) : Mr(e, t, n);
      break;
    default:
      Mr(e, t, n);
  }
}
function ih(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new yS()), t.forEach(function(r) {
      var o = ES.bind(null, e, r);
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
            jt = l.stateNode, _n = !1;
            break e;
          case 3:
            jt = l.stateNode.containerInfo, _n = !0;
            break e;
          case 4:
            jt = l.stateNode.containerInfo, _n = !0;
            break e;
        }
        l = l.return;
      }
      if (jt === null) throw Error(V(160));
      Qv(i, s, o), jt = null, _n = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      ht(o, t, u);
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
      if (On(t, e), Gn(e), r & 4) {
        try {
          hs(3, e, e.return), au(3, e);
        } catch (S) {
          ht(e, e.return, S);
        }
        try {
          hs(5, e, e.return);
        } catch (S) {
          ht(e, e.return, S);
        }
      }
      break;
    case 1:
      On(t, e), Gn(e), r & 512 && n !== null && ni(n, n.return);
      break;
    case 5:
      if (On(t, e), Gn(e), r & 512 && n !== null && ni(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Rs(o, "");
        } catch (S) {
          ht(e, e.return, S);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && vy(o, i), fd(l, s);
          var u = fd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], p = a[s + 1];
            d === "style" ? Cy(o, p) : d === "dangerouslySetInnerHTML" ? Sy(o, p) : d === "children" ? Rs(o, p) : Tf(o, d, p, u);
          }
          switch (l) {
            case "input":
              ld(o, i);
              break;
            case "textarea":
              xy(o, i);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? oi(o, !!i.multiple, f, !1) : y !== !!i.multiple && (i.defaultValue != null ? oi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : oi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ns] = i;
        } catch (S) {
          ht(e, e.return, S);
        }
      }
      break;
    case 6:
      if (On(t, e), Gn(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (S) {
          ht(e, e.return, S);
        }
      }
      break;
    case 3:
      if (On(t, e), Gn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ms(t.containerInfo);
      } catch (S) {
        ht(e, e.return, S);
      }
      break;
    case 4:
      On(t, e), Gn(e);
      break;
    case 13:
      On(t, e), Gn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (op = vt())), r & 4 && ih(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Dt = (u = Dt) || d, On(t, e), Dt = u) : On(t, e), Gn(e), r & 8192) {
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
                ni(y, y.return);
                var v = y.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (S) {
                    ht(r, n, S);
                  }
                }
                break;
              case 5:
                ni(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  lh(p);
                  continue;
                }
            }
            f !== null ? (f.return = y, J = f) : lh(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = wy("display", s));
              } catch (S) {
                ht(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = u ? "" : p.memoizedProps;
            } catch (S) {
              ht(e, e.return, S);
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
      On(t, e), Gn(e), r & 4 && ih(e);
      break;
    case 21:
      break;
    default:
      On(
        t,
        e
      ), Gn(e);
  }
}
function Gn(e) {
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
        throw Error(V(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Rs(o, ""), r.flags &= -33);
          var i = oh(e);
          Wd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = oh(e);
          Dd(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      ht(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function xS(e, t, n) {
  J = e, qv(e);
}
function qv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var o = J, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Il;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Dt;
        l = Il;
        var u = Dt;
        if (Il = s, (Dt = a) && !u) for (J = o; J !== null; ) s = J, a = s.child, s.tag === 22 && s.memoizedState !== null ? ah(o) : a !== null ? (a.return = s, J = a) : ah(o);
        for (; i !== null; ) J = i, qv(i), i = i.sibling;
        J = o, Il = l, Dt = u;
      }
      sh(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, J = i) : sh(e);
  }
}
function sh(e) {
  for (; J !== null; ) {
    var t = J;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Dt || au(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Dt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Bn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Vm(t, i, r);
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
              Vm(t, s, n);
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
        Dt || t.flags & 512 && Fd(t);
      } catch (y) {
        ht(t, t.return, y);
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
function lh(e) {
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
function ah(e) {
  for (; J !== null; ) {
    var t = J;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            au(4, t);
          } catch (a) {
            ht(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ht(t, o, a);
            }
          }
          var i = t.return;
          try {
            Fd(t);
          } catch (a) {
            ht(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Fd(t);
          } catch (a) {
            ht(t, s, a);
          }
      }
    } catch (a) {
      ht(t, t.return, a);
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
var bS = Math.ceil, Na = Ir.ReactCurrentDispatcher, np = Ir.ReactCurrentOwner, Tn = Ir.ReactCurrentBatchConfig, Oe = 0, Pt = null, kt = null, Nt = 0, ln = 0, ri = Zr(0), Rt = 0, Ds = null, wo = 0, uu = 0, rp = 0, gs = null, Zt = null, op = 0, xi = 1 / 0, mr = null, La = !1, Ud = null, Ur = null, Ml = !1, zr = null, za = 0, ys = 0, Vd = null, sa = -1, la = 0;
function Qt() {
  return Oe & 6 ? vt() : sa !== -1 ? sa : sa = vt();
}
function Vr(e) {
  return e.mode & 1 ? Oe & 2 && Nt !== 0 ? Nt & -Nt : rS.transition !== null ? (la === 0 && (la = Ny()), la) : (e = Ve, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wy(e.type)), e) : 1;
}
function Wn(e, t, n, r) {
  if (50 < ys) throw ys = 0, Vd = null, Error(V(185));
  Js(e, n, r), (!(Oe & 2) || e !== Pt) && (e === Pt && (!(Oe & 2) && (uu |= n), Rt === 4 && Nr(e, Nt)), nn(e, r), n === 1 && Oe === 0 && !(t.mode & 1) && (xi = vt() + 500, iu && Jr()));
}
function nn(e, t) {
  var n = e.callbackNode;
  rb(e, t);
  var r = ba(e, e === Pt ? Nt : 0);
  if (r === 0) n !== null && ym(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ym(n), t === 1) e.tag === 0 ? nS(uh.bind(null, e)) : lv(uh.bind(null, e)), Zb(function() {
      !(Oe & 6) && Jr();
    }), n = null;
    else {
      switch (Ly(r)) {
        case 1:
          n = Mf;
          break;
        case 4:
          n = Oy;
          break;
        case 16:
          n = xa;
          break;
        case 536870912:
          n = Ay;
          break;
        default:
          n = xa;
      }
      n = i0(n, Zv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Zv(e, t) {
  if (sa = -1, la = 0, Oe & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (ui() && e.callbackNode !== n) return null;
  var r = ba(e, e === Pt ? Nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ba(e, r);
  else {
    t = r;
    var o = Oe;
    Oe |= 2;
    var i = e0();
    (Pt !== e || Nt !== t) && (mr = null, xi = vt() + 500, ho(e, t));
    do
      try {
        CS();
        break;
      } catch (l) {
        Jv(e, l);
      }
    while (!0);
    Uf(), Na.current = i, Oe = o, kt !== null ? t = 0 : (Pt = null, Nt = 0, t = Rt);
  }
  if (t !== 0) {
    if (t === 2 && (o = yd(e), o !== 0 && (r = o, t = Hd(e, o))), t === 1) throw n = Ds, ho(e, 0), Nr(e, r), nn(e, vt()), n;
    if (t === 6) Nr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !SS(o) && (t = Ba(e, r), t === 2 && (i = yd(e), i !== 0 && (r = i, t = Hd(e, i))), t === 1)) throw n = Ds, ho(e, 0), Nr(e, r), nn(e, vt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          ao(e, Zt, mr);
          break;
        case 3:
          if (Nr(e, r), (r & 130023424) === r && (t = op + 500 - vt(), 10 < t)) {
            if (ba(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Td(ao.bind(null, e, Zt, mr), t);
            break;
          }
          ao(e, Zt, mr);
          break;
        case 4:
          if (Nr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Dn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = vt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Td(ao.bind(null, e, Zt, mr), r);
            break;
          }
          ao(e, Zt, mr);
          break;
        case 5:
          ao(e, Zt, mr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return nn(e, vt()), e.callbackNode === n ? Zv.bind(null, e) : null;
}
function Hd(e, t) {
  var n = gs;
  return e.current.memoizedState.isDehydrated && (ho(e, t).flags |= 256), e = Ba(e, t), e !== 2 && (t = Zt, Zt = n, t !== null && Kd(t)), e;
}
function Kd(e) {
  Zt === null ? Zt = e : Zt.push.apply(Zt, e);
}
function SS(e) {
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
function Nr(e, t) {
  for (t &= ~rp, t &= ~uu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Dn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function uh(e) {
  if (Oe & 6) throw Error(V(327));
  ui();
  var t = ba(e, 0);
  if (!(t & 1)) return nn(e, vt()), null;
  var n = Ba(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yd(e);
    r !== 0 && (t = r, n = Hd(e, r));
  }
  if (n === 1) throw n = Ds, ho(e, 0), Nr(e, t), nn(e, vt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ao(e, Zt, mr), nn(e, vt()), null;
}
function ip(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = n, Oe === 0 && (xi = vt() + 500, iu && Jr());
  }
}
function Co(e) {
  zr !== null && zr.tag === 0 && !(Oe & 6) && ui();
  var t = Oe;
  Oe |= 1;
  var n = Tn.transition, r = Ve;
  try {
    if (Tn.transition = null, Ve = 1, e) return e();
  } finally {
    Ve = r, Tn.transition = n, Oe = t, !(Oe & 6) && Jr();
  }
}
function sp() {
  ln = ri.current, rt(ri);
}
function ho(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, qb(n)), kt !== null) for (n = kt.return; n !== null; ) {
    var r = n;
    switch (Ff(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ta();
        break;
      case 3:
        yi(), rt(en), rt(Wt), Qf();
        break;
      case 5:
        Yf(r);
        break;
      case 4:
        yi();
        break;
      case 13:
        rt(ut);
        break;
      case 19:
        rt(ut);
        break;
      case 10:
        Vf(r.type._context);
        break;
      case 22:
      case 23:
        sp();
    }
    n = n.return;
  }
  if (Pt = e, kt = e = Hr(e.current, null), Nt = ln = t, Rt = 0, Ds = null, rp = uu = wo = 0, Zt = gs = null, fo !== null) {
    for (t = 0; t < fo.length; t++) if (n = fo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    fo = null;
  }
  return e;
}
function Jv(e, t) {
  do {
    var n = kt;
    try {
      if (Uf(), ra.current = Aa, Oa) {
        for (var r = ct.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Oa = !1;
      }
      if (So = 0, Et = Tt = ct = null, ms = !1, Bs = 0, np.current = null, n === null || n.return === null) {
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
          var f = Xm(s);
          if (f !== null) {
            f.flags &= -257, qm(f, s, l, i, t), f.mode & 1 && Qm(i, u, t), t = f, a = u;
            var v = t.updateQueue;
            if (v === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Qm(i, u, t), lp();
              break e;
            }
            a = Error(V(426));
          }
        } else if (lt && l.mode & 1) {
          var C = Xm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), qm(C, s, l, i, t), Df(vi(a, l));
            break e;
          }
        }
        i = a = vi(a, l), Rt !== 4 && (Rt = 2), gs === null ? gs = [i] : gs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Lv(i, a, t);
              Um(i, g);
              break e;
            case 1:
              l = a;
              var m = i.type, b = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (Ur === null || !Ur.has(b)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = zv(i, l, t);
                Um(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      n0(n);
    } catch (E) {
      t = E, kt === n && n !== null && (kt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function e0() {
  var e = Na.current;
  return Na.current = Aa, e === null ? Aa : e;
}
function lp() {
  (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4), Pt === null || !(wo & 268435455) && !(uu & 268435455) || Nr(Pt, Nt);
}
function Ba(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = e0();
  (Pt !== e || Nt !== t) && (mr = null, ho(e, t));
  do
    try {
      wS();
      break;
    } catch (o) {
      Jv(e, o);
    }
  while (!0);
  if (Uf(), Oe = n, Na.current = r, kt !== null) throw Error(V(261));
  return Pt = null, Nt = 0, Rt;
}
function wS() {
  for (; kt !== null; ) t0(kt);
}
function CS() {
  for (; kt !== null && !Yx(); ) t0(kt);
}
function t0(e) {
  var t = o0(e.alternate, e, ln);
  e.memoizedProps = e.pendingProps, t === null ? n0(e) : kt = t, np.current = null;
}
function n0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = gS(n, t), n !== null) {
        n.flags &= 32767, kt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Rt = 6, kt = null;
        return;
      }
    } else if (n = hS(n, t, ln), n !== null) {
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
function ao(e, t, n) {
  var r = Ve, o = Tn.transition;
  try {
    Tn.transition = null, Ve = 1, kS(e, t, n, r);
  } finally {
    Tn.transition = o, Ve = r;
  }
  return null;
}
function kS(e, t, n, r) {
  do
    ui();
  while (zr !== null);
  if (Oe & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (ob(e, i), e === Pt && (kt = Pt = null, Nt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ml || (Ml = !0, i0(xa, function() {
    return ui(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Tn.transition, Tn.transition = null;
    var s = Ve;
    Ve = 1;
    var l = Oe;
    Oe |= 4, np.current = null, vS(e, n), Xv(n, e), Vb(Cd), Sa = !!wd, Cd = wd = null, e.current = n, xS(n), Qx(), Oe = l, Ve = s, Tn.transition = i;
  } else e.current = n;
  if (Ml && (Ml = !1, zr = e, za = o), i = e.pendingLanes, i === 0 && (Ur = null), Zx(n.stateNode), nn(e, vt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (La) throw La = !1, e = Ud, Ud = null, e;
  return za & 1 && e.tag !== 0 && ui(), i = e.pendingLanes, i & 1 ? e === Vd ? ys++ : (ys = 0, Vd = e) : ys = 0, Jr(), null;
}
function ui() {
  if (zr !== null) {
    var e = Ly(za), t = Tn.transition, n = Ve;
    try {
      if (Tn.transition = null, Ve = 16 > e ? 16 : e, zr === null) var r = !1;
      else {
        if (e = zr, zr = null, za = 0, Oe & 6) throw Error(V(331));
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
                    if (Gv(d), d === u) {
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
                  au(9, l);
              }
            } catch (E) {
              ht(l, l.return, E);
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
        if (Oe = o, Jr(), nr && typeof nr.onPostCommitFiberRoot == "function") try {
          nr.onPostCommitFiberRoot(eu, e);
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
function ch(e, t, n) {
  t = vi(n, t), t = Lv(e, t, 1), e = Wr(e, t, 1), t = Qt(), e !== null && (Js(e, 1, t), nn(e, t));
}
function ht(e, t, n) {
  if (e.tag === 3) ch(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ch(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ur === null || !Ur.has(r))) {
        e = vi(n, e), e = zv(t, e, 1), t = Wr(t, e, 1), e = Qt(), t !== null && (Js(t, 1, e), nn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function TS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qt(), e.pingedLanes |= e.suspendedLanes & n, Pt === e && (Nt & n) === n && (Rt === 4 || Rt === 3 && (Nt & 130023424) === Nt && 500 > vt() - op ? ho(e, 0) : rp |= n), nn(e, t);
}
function r0(e, t) {
  t === 0 && (e.mode & 1 ? (t = bl, bl <<= 1, !(bl & 130023424) && (bl = 4194304)) : t = 1);
  var n = Qt();
  e = kr(e, t), e !== null && (Js(e, t, n), nn(e, n));
}
function RS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), r0(e, n);
}
function ES(e, t) {
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
  r !== null && r.delete(t), r0(e, n);
}
var o0;
o0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || en.current) Jt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Jt = !1, mS(e, t, n);
    Jt = !!(e.flags & 131072);
  }
  else Jt = !1, lt && t.flags & 1048576 && av(t, Pa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ia(e, t), e = t.pendingProps;
      var o = mi(t, Wt.current);
      ai(t, n), o = qf(null, t, r, e, o, n);
      var i = Zf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tn(r) ? (i = !0, Ra(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Kf(t), o.updater = lu, t.stateNode = o, o._reactInternals = t, jd(t, r, e, n), t = Nd(null, t, r, !0, i, n)) : (t.tag = 0, lt && i && _f(t), Gt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ia(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = IS(r), e = Bn(r, e), o) {
          case 0:
            t = Ad(null, t, r, e, n);
            break e;
          case 1:
            t = eh(null, t, r, e, n);
            break e;
          case 11:
            t = Zm(null, t, r, e, n);
            break e;
          case 14:
            t = Jm(null, t, r, Bn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bn(r, o), Ad(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bn(r, o), eh(e, t, r, o, n);
    case 3:
      e: {
        if (Dv(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, mv(e, t), $a(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = vi(Error(V(423)), t), t = th(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = vi(Error(V(424)), t), t = th(e, t, r, n, o);
          break e;
        } else for (cn = Dr(t.stateNode.containerInfo.firstChild), dn = t, lt = !0, Fn = null, n = fv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (hi(), r === o) {
            t = Tr(e, t, n);
            break e;
          }
          Gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return hv(t), e === null && Id(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, kd(r, o) ? s = null : i !== null && kd(r, i) && (t.flags |= 32), Fv(e, t), Gt(e, t, s, n), t.child;
    case 6:
      return e === null && Id(t), null;
    case 13:
      return Wv(e, t, n);
    case 4:
      return Gf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = gi(t, null, r, n) : Gt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bn(r, o), Zm(e, t, r, o, n);
    case 7:
      return Gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ze(Ia, r._currentValue), r._currentValue = s, i !== null) if (Un(i.value, s)) {
          if (i.children === o.children && !en.current) {
            t = Tr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Sr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Md(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Md(s, n, t), s = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, ai(t, n), o = En(o), r = r(o), t.flags |= 1, Gt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Bn(r, t.pendingProps), o = Bn(r.type, o), Jm(e, t, r, o, n);
    case 15:
      return Bv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Bn(r, o), ia(e, t), t.tag = 1, tn(r) ? (e = !0, Ra(t)) : e = !1, ai(t, n), Nv(t, r, o), jd(t, r, o, n), Nd(null, t, r, !0, e, n);
    case 19:
      return Uv(e, t, n);
    case 22:
      return _v(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function i0(e, t) {
  return jy(e, t);
}
function PS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function kn(e, t, n, r) {
  return new PS(e, t, n, r);
}
function ap(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function IS(e) {
  if (typeof e == "function") return ap(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Ef) return 11;
    if (e === Pf) return 14;
  }
  return 2;
}
function Hr(e, t) {
  var n = e.alternate;
  return n === null ? (n = kn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function aa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") ap(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Go:
      return go(n.children, o, i, t);
    case Rf:
      s = 8, o |= 8;
      break;
    case nd:
      return e = kn(12, n, t, o | 2), e.elementType = nd, e.lanes = i, e;
    case rd:
      return e = kn(13, n, t, o), e.elementType = rd, e.lanes = i, e;
    case od:
      return e = kn(19, n, t, o), e.elementType = od, e.lanes = i, e;
    case hy:
      return cu(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case py:
          s = 10;
          break e;
        case my:
          s = 9;
          break e;
        case Ef:
          s = 11;
          break e;
        case Pf:
          s = 14;
          break e;
        case jr:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = kn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function go(e, t, n, r) {
  return e = kn(7, e, r, t), e.lanes = n, e;
}
function cu(e, t, n, r) {
  return e = kn(22, e, r, t), e.elementType = hy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Bc(e, t, n) {
  return e = kn(6, e, null, t), e.lanes = n, e;
}
function _c(e, t, n) {
  return t = kn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function MS(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xc(0), this.expirationTimes = xc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function up(e, t, n, r, o, i, s, l, a) {
  return e = new MS(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = kn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Kf(i), e;
}
function $S(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ko, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function s0(e) {
  if (!e) return Yr;
  e = e._reactInternals;
  e: {
    if (Io(e) !== e || e.tag !== 1) throw Error(V(170));
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
    if (tn(n)) return sv(e, n, t);
  }
  return t;
}
function l0(e, t, n, r, o, i, s, l, a) {
  return e = up(n, r, !0, e, o, i, s, l, a), e.context = s0(null), n = e.current, r = Qt(), o = Vr(n), i = Sr(r, o), i.callback = t ?? null, Wr(n, i, o), e.current.lanes = o, Js(e, o, r), nn(e, r), e;
}
function du(e, t, n, r) {
  var o = t.current, i = Qt(), s = Vr(o);
  return n = s0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Sr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Wr(o, t, s), e !== null && (Wn(e, o, s, i), na(e, o, s)), s;
}
function _a(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cp(e, t) {
  dh(e, t), (e = e.alternate) && dh(e, t);
}
function jS() {
  return null;
}
var a0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function dp(e) {
  this._internalRoot = e;
}
fu.prototype.render = dp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  du(e, t, null, null);
};
fu.prototype.unmount = dp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Co(function() {
      du(null, e, null, null);
    }), t[Cr] = null;
  }
};
function fu(e) {
  this._internalRoot = e;
}
fu.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = _y();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ar.length && t !== 0 && t < Ar[n].priority; n++) ;
    Ar.splice(n, 0, e), n === 0 && Dy(e);
  }
};
function fp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function pu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fh() {
}
function OS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = _a(s);
        i.call(u);
      };
    }
    var s = l0(t, r, e, 0, null, !1, !1, "", fh);
    return e._reactRootContainer = s, e[Cr] = s.current, Os(e.nodeType === 8 ? e.parentNode : e), Co(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = _a(a);
      l.call(u);
    };
  }
  var a = up(e, 0, !1, null, null, !1, !1, "", fh);
  return e._reactRootContainer = a, e[Cr] = a.current, Os(e.nodeType === 8 ? e.parentNode : e), Co(function() {
    du(t, a, n, r);
  }), a;
}
function mu(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = _a(s);
        l.call(a);
      };
    }
    du(t, s, e, o);
  } else s = OS(n, t, e, o, r);
  return _a(s);
}
zy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = is(t.pendingLanes);
        n !== 0 && ($f(t, n | 1), nn(t, vt()), !(Oe & 6) && (xi = vt() + 500, Jr()));
      }
      break;
    case 13:
      Co(function() {
        var r = kr(e, 1);
        if (r !== null) {
          var o = Qt();
          Wn(r, e, 1, o);
        }
      }), cp(e, 1);
  }
};
jf = function(e) {
  if (e.tag === 13) {
    var t = kr(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Wn(t, e, 134217728, n);
    }
    cp(e, 134217728);
  }
};
By = function(e) {
  if (e.tag === 13) {
    var t = Vr(e), n = kr(e, t);
    if (n !== null) {
      var r = Qt();
      Wn(n, e, t, r);
    }
    cp(e, t);
  }
};
_y = function() {
  return Ve;
};
Fy = function(e, t) {
  var n = Ve;
  try {
    return Ve = e, t();
  } finally {
    Ve = n;
  }
};
md = function(e, t, n) {
  switch (t) {
    case "input":
      if (ld(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = ou(r);
            if (!o) throw Error(V(90));
            yy(r), ld(r, o);
          }
        }
      }
      break;
    case "textarea":
      xy(e, n);
      break;
    case "select":
      t = n.value, t != null && oi(e, !!n.multiple, t, !1);
  }
};
Ry = ip;
Ey = Co;
var AS = { usingClientEntryPoint: !1, Events: [tl, qo, ou, ky, Ty, ip] }, Vi = { findFiberByHostInstance: co, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, NS = { bundleType: Vi.bundleType, version: Vi.version, rendererPackageName: Vi.rendererPackageName, rendererConfig: Vi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ir.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = My(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Vi.findFiberByHostInstance || jS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber) try {
    eu = $l.inject(NS), nr = $l;
  } catch {
  }
}
hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = AS;
hn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!fp(t)) throw Error(V(200));
  return $S(e, t, null, n);
};
hn.createRoot = function(e, t) {
  if (!fp(e)) throw Error(V(299));
  var n = !1, r = "", o = a0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = up(e, 1, !1, null, null, n, !1, r, o), e[Cr] = t.current, Os(e.nodeType === 8 ? e.parentNode : e), new dp(t);
};
hn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = My(t), e = e === null ? null : e.stateNode, e;
};
hn.flushSync = function(e) {
  return Co(e);
};
hn.hydrate = function(e, t, n) {
  if (!pu(t)) throw Error(V(200));
  return mu(null, e, t, !0, n);
};
hn.hydrateRoot = function(e, t, n) {
  if (!fp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = a0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = l0(t, null, e, 1, n ?? null, o, !1, i, s), e[Cr] = t.current, Os(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new fu(t);
};
hn.render = function(e, t, n) {
  if (!pu(t)) throw Error(V(200));
  return mu(null, e, t, !1, n);
};
hn.unmountComponentAtNode = function(e) {
  if (!pu(e)) throw Error(V(40));
  return e._reactRootContainer ? (Co(function() {
    mu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Cr] = null;
    });
  }), !0) : !1;
};
hn.unstable_batchedUpdates = ip;
hn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!pu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return mu(e, t, n, !1, r);
};
hn.version = "18.3.1-next-f1338f8080-20240426";
function u0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0);
    } catch (e) {
      console.error(e);
    }
}
u0(), uy.exports = hn;
var c0 = uy.exports, d0, ph = c0;
d0 = ph.createRoot, ph.hydrateRoot;
const Ws = {
  black: "#000",
  white: "#fff"
}, Fo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Do = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Wo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Uo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Vo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Hi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, LS = {
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
function Rr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const or = "$$material";
function Gd() {
  return Gd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gd.apply(null, arguments);
}
function zS(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function BS(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var _S = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(BS(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = zS(o);
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
}(), Ft = "-ms-", Fa = "-moz-", Le = "-webkit-", f0 = "comm", pp = "rule", mp = "decl", FS = "@import", p0 = "@keyframes", DS = "@layer", WS = Math.abs, hu = String.fromCharCode, US = Object.assign;
function VS(e, t) {
  return Ot(e, 0) ^ 45 ? (((t << 2 ^ Ot(e, 0)) << 2 ^ Ot(e, 1)) << 2 ^ Ot(e, 2)) << 2 ^ Ot(e, 3) : 0;
}
function m0(e) {
  return e.trim();
}
function HS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function Yd(e, t) {
  return e.indexOf(t);
}
function Ot(e, t) {
  return e.charCodeAt(t) | 0;
}
function Us(e, t, n) {
  return e.slice(t, n);
}
function qn(e) {
  return e.length;
}
function hp(e) {
  return e.length;
}
function jl(e, t) {
  return t.push(e), e;
}
function KS(e, t) {
  return e.map(t).join("");
}
var gu = 1, bi = 1, h0 = 0, sn = 0, Ct = 0, $i = "";
function yu(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: gu, column: bi, length: s, return: "" };
}
function Ki(e, t) {
  return US(yu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function GS() {
  return Ct;
}
function YS() {
  return Ct = sn > 0 ? Ot($i, --sn) : 0, bi--, Ct === 10 && (bi = 1, gu--), Ct;
}
function fn() {
  return Ct = sn < h0 ? Ot($i, sn++) : 0, bi++, Ct === 10 && (bi = 1, gu++), Ct;
}
function ir() {
  return Ot($i, sn);
}
function ua() {
  return sn;
}
function rl(e, t) {
  return Us($i, e, t);
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
function g0(e) {
  return gu = bi = 1, h0 = qn($i = e), sn = 0, [];
}
function y0(e) {
  return $i = "", e;
}
function ca(e) {
  return m0(rl(sn - 1, Qd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function QS(e) {
  for (; (Ct = ir()) && Ct < 33; )
    fn();
  return Vs(e) > 2 || Vs(Ct) > 3 ? "" : " ";
}
function XS(e, t) {
  for (; --t && fn() && !(Ct < 48 || Ct > 102 || Ct > 57 && Ct < 65 || Ct > 70 && Ct < 97); )
    ;
  return rl(e, ua() + (t < 6 && ir() == 32 && fn() == 32));
}
function Qd(e) {
  for (; fn(); )
    switch (Ct) {
      case e:
        return sn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qd(Ct);
        break;
      case 40:
        e === 41 && Qd(e);
        break;
      case 92:
        fn();
        break;
    }
  return sn;
}
function qS(e, t) {
  for (; fn() && e + Ct !== 57; )
    if (e + Ct === 84 && ir() === 47)
      break;
  return "/*" + rl(t, sn - 1) + "*" + hu(e === 47 ? e : fn());
}
function ZS(e) {
  for (; !Vs(ir()); )
    fn();
  return rl(e, sn);
}
function JS(e) {
  return y0(da("", null, null, null, [""], e = g0(e), 0, [0], e));
}
function da(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, d = 0, p = s, y = 0, f = 0, v = 0, S = 1, C = 1, g = 1, m = 0, b = "", w = o, E = i, k = r, R = b; C; )
    switch (v = m, m = fn()) {
      case 40:
        if (v != 108 && Ot(R, p - 1) == 58) {
          Yd(R += ze(ca(m), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += ca(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += QS(v);
        break;
      case 92:
        R += XS(ua() - 1, 7);
        continue;
      case 47:
        switch (ir()) {
          case 42:
          case 47:
            jl(ew(qS(fn(), ua()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * S:
        l[u++] = qn(R) * g;
      case 125 * S:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            g == -1 && (R = ze(R, /\f/g, "")), f > 0 && qn(R) - p && jl(f > 32 ? hh(R + ";", r, n, p - 1) : hh(ze(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (jl(k = mh(R, t, n, u, d, o, l, b, w = [], E = [], p), i), m === 123)
              if (d === 0)
                da(R, t, k, k, w, i, p, l, E);
              else
                switch (y === 99 && Ot(R, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    da(e, k, k, r && jl(mh(e, k, k, 0, 0, o, l, b, o, w = [], p), E), o, E, p, l, r ? w : E);
                    break;
                  default:
                    da(R, k, k, k, [""], E, 0, l, E);
                }
        }
        u = d = f = 0, S = g = 1, b = R = "", p = s;
        break;
      case 58:
        p = 1 + qn(R), f = v;
      default:
        if (S < 1) {
          if (m == 123)
            --S;
          else if (m == 125 && S++ == 0 && YS() == 125)
            continue;
        }
        switch (R += hu(m), m * S) {
          case 38:
            g = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (qn(R) - 1) * g, g = 1;
            break;
          case 64:
            ir() === 45 && (R += ca(fn())), y = ir(), d = p = qn(b = R += ZS(ua())), m++;
            break;
          case 45:
            v === 45 && qn(R) == 2 && (S = 0);
        }
    }
  return i;
}
function mh(e, t, n, r, o, i, s, l, a, u, d) {
  for (var p = o - 1, y = o === 0 ? i : [""], f = hp(y), v = 0, S = 0, C = 0; v < r; ++v)
    for (var g = 0, m = Us(e, p + 1, p = WS(S = s[v])), b = e; g < f; ++g)
      (b = m0(S > 0 ? y[g] + " " + m : ze(m, /&\f/g, y[g]))) && (a[C++] = b);
  return yu(e, t, n, o === 0 ? pp : l, a, u, d);
}
function ew(e, t, n) {
  return yu(e, t, n, f0, hu(GS()), Us(e, 2, -2), 0);
}
function hh(e, t, n, r) {
  return yu(e, t, n, mp, Us(e, 0, r), Us(e, r + 1, -1), r);
}
function ci(e, t) {
  for (var n = "", r = hp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function tw(e, t, n, r) {
  switch (e.type) {
    case DS:
      if (e.children.length) break;
    case FS:
    case mp:
      return e.return = e.return || e.value;
    case f0:
      return "";
    case p0:
      return e.return = e.value + "{" + ci(e.children, r) + "}";
    case pp:
      e.value = e.props.join(",");
  }
  return qn(n = ci(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function nw(e) {
  var t = hp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function rw(e) {
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
var ow = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = ir(), o === 38 && i === 12 && (n[r] = 1), !Vs(i); )
    fn();
  return rl(t, sn);
}, iw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Vs(o)) {
      case 0:
        o === 38 && ir() === 12 && (n[r] = 1), t[r] += ow(sn - 1, n, r);
        break;
      case 2:
        t[r] += ca(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = ir() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += hu(o);
    }
  while (o = fn());
  return t;
}, sw = function(t, n) {
  return y0(iw(g0(t), n));
}, gh = /* @__PURE__ */ new WeakMap(), lw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gh.get(r)) && !o) {
      gh.set(t, !0);
      for (var i = [], s = sw(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, aw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function x0(e, t) {
  switch (VS(e, t)) {
    case 5103:
      return Le + "print-" + e + e;
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
      return Le + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Le + e + Fa + e + Ft + e + e;
    case 6828:
    case 4268:
      return Le + e + Ft + e + e;
    case 6165:
      return Le + e + Ft + "flex-" + e + e;
    case 5187:
      return Le + e + ze(e, /(\w+).+(:[^]+)/, Le + "box-$1$2" + Ft + "flex-$1$2") + e;
    case 5443:
      return Le + e + Ft + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Le + e + Ft + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Le + e + Ft + ze(e, "shrink", "negative") + e;
    case 5292:
      return Le + e + Ft + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Le + "box-" + ze(e, "-grow", "") + Le + e + Ft + ze(e, "grow", "positive") + e;
    case 4554:
      return Le + ze(e, /([^-])(transform)/g, "$1" + Le + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Le + "$1"), /(image-set)/, Le + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Le + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Le + "box-pack:$3" + Ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Le + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ze(e, /(.+)-inline(.+)/, Le + "$1$2") + e;
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
      if (qn(e) - 1 - t > 6) switch (Ot(e, t + 1)) {
        case 109:
          if (Ot(e, t + 4) !== 45) break;
        case 102:
          return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Le + "$2-$3$1" + Fa + (Ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Yd(e, "stretch") ? x0(ze(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ot(e, t + 1) !== 115) break;
    case 6444:
      switch (Ot(e, qn(e) - 3 - (~Yd(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Le) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Le + (Ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Le + "$2$3$1" + Ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ot(e, t + 11)) {
        case 114:
          return Le + e + Ft + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Le + e + Ft + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Le + e + Ft + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Le + e + Ft + e + e;
  }
  return e;
}
var uw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case mp:
      t.return = x0(t.value, t.length);
      break;
    case p0:
      return ci([Ki(t, {
        value: ze(t.value, "@", "@" + Le)
      })], o);
    case pp:
      if (t.length) return KS(t.props, function(i) {
        switch (HS(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ci([Ki(t, {
              props: [ze(i, /:(read-\w+)/, ":" + Fa + "$1")]
            })], o);
          case "::placeholder":
            return ci([Ki(t, {
              props: [ze(i, /:(plac\w+)/, ":" + Le + "input-$1")]
            }), Ki(t, {
              props: [ze(i, /:(plac\w+)/, ":" + Fa + "$1")]
            }), Ki(t, {
              props: [ze(i, /:(plac\w+)/, Ft + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, cw = [uw], dw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(S) {
      var C = S.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || cw, i = {}, s, l = [];
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
  var a, u = [lw, aw];
  {
    var d, p = [tw, rw(function(S) {
      d.insert(S);
    })], y = nw(u.concat(o, p)), f = function(C) {
      return ci(JS(C), y);
    };
    a = function(C, g, m, b) {
      d = m, f(C ? C + "{" + g.styles + "}" : g.styles), b && (v.inserted[g.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new _S({
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
}, b0 = { exports: {} }, He = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt = typeof Symbol == "function" && Symbol.for, gp = Mt ? Symbol.for("react.element") : 60103, yp = Mt ? Symbol.for("react.portal") : 60106, vu = Mt ? Symbol.for("react.fragment") : 60107, xu = Mt ? Symbol.for("react.strict_mode") : 60108, bu = Mt ? Symbol.for("react.profiler") : 60114, Su = Mt ? Symbol.for("react.provider") : 60109, wu = Mt ? Symbol.for("react.context") : 60110, vp = Mt ? Symbol.for("react.async_mode") : 60111, Cu = Mt ? Symbol.for("react.concurrent_mode") : 60111, ku = Mt ? Symbol.for("react.forward_ref") : 60112, Tu = Mt ? Symbol.for("react.suspense") : 60113, fw = Mt ? Symbol.for("react.suspense_list") : 60120, Ru = Mt ? Symbol.for("react.memo") : 60115, Eu = Mt ? Symbol.for("react.lazy") : 60116, pw = Mt ? Symbol.for("react.block") : 60121, mw = Mt ? Symbol.for("react.fundamental") : 60117, hw = Mt ? Symbol.for("react.responder") : 60118, gw = Mt ? Symbol.for("react.scope") : 60119;
function yn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case gp:
        switch (e = e.type, e) {
          case vp:
          case Cu:
          case vu:
          case bu:
          case xu:
          case Tu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case wu:
              case ku:
              case Eu:
              case Ru:
              case Su:
                return e;
              default:
                return t;
            }
        }
      case yp:
        return t;
    }
  }
}
function S0(e) {
  return yn(e) === Cu;
}
He.AsyncMode = vp;
He.ConcurrentMode = Cu;
He.ContextConsumer = wu;
He.ContextProvider = Su;
He.Element = gp;
He.ForwardRef = ku;
He.Fragment = vu;
He.Lazy = Eu;
He.Memo = Ru;
He.Portal = yp;
He.Profiler = bu;
He.StrictMode = xu;
He.Suspense = Tu;
He.isAsyncMode = function(e) {
  return S0(e) || yn(e) === vp;
};
He.isConcurrentMode = S0;
He.isContextConsumer = function(e) {
  return yn(e) === wu;
};
He.isContextProvider = function(e) {
  return yn(e) === Su;
};
He.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gp;
};
He.isForwardRef = function(e) {
  return yn(e) === ku;
};
He.isFragment = function(e) {
  return yn(e) === vu;
};
He.isLazy = function(e) {
  return yn(e) === Eu;
};
He.isMemo = function(e) {
  return yn(e) === Ru;
};
He.isPortal = function(e) {
  return yn(e) === yp;
};
He.isProfiler = function(e) {
  return yn(e) === bu;
};
He.isStrictMode = function(e) {
  return yn(e) === xu;
};
He.isSuspense = function(e) {
  return yn(e) === Tu;
};
He.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vu || e === Cu || e === bu || e === xu || e === Tu || e === fw || typeof e == "object" && e !== null && (e.$$typeof === Eu || e.$$typeof === Ru || e.$$typeof === Su || e.$$typeof === wu || e.$$typeof === ku || e.$$typeof === mw || e.$$typeof === hw || e.$$typeof === gw || e.$$typeof === pw);
};
He.typeOf = yn;
b0.exports = He;
var yw = b0.exports, w0 = yw, vw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, xw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, C0 = {};
C0[w0.ForwardRef] = vw;
C0[w0.Memo] = xw;
var bw = !0;
function k0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var xp = function(t, n, r) {
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
  bw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, bp = function(t, n, r) {
  xp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Sw(e) {
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
var ww = {
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
}, Cw = /[A-Z]|^ms/g, kw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, T0 = function(t) {
  return t.charCodeAt(1) === 45;
}, yh = function(t) {
  return t != null && typeof t != "boolean";
}, Fc = /* @__PURE__ */ v0(function(e) {
  return T0(e) ? e : e.replace(Cw, "-$&").toLowerCase();
}), vh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(kw, function(r, o, i) {
          return Zn = {
            name: o,
            styles: i,
            next: Zn
          }, o;
        });
  }
  return ww[t] !== 1 && !T0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
      return Tw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = Zn, u = n(e);
        return Zn = a, Hs(e, t, u);
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
function Tw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Hs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : yh(l) && (r += Fc(i) + ":" + vh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          yh(s[a]) && (r += Fc(i) + ":" + vh(i, s[a]) + ";");
      else {
        var u = Hs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Fc(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var xh = /label:\s*([^\s;{]+)\s*(;|$)/g, Zn;
function ol(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Zn = void 0;
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
  xh.lastIndex = 0;
  for (var u = "", d; (d = xh.exec(o)) !== null; )
    u += "-" + d[1];
  var p = Sw(o) + u;
  return {
    name: p,
    styles: o,
    next: Zn
  };
}
var Rw = function(t) {
  return t();
}, R0 = ha.useInsertionEffect ? ha.useInsertionEffect : !1, E0 = R0 || Rw, bh = R0 || h.useLayoutEffect, P0 = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ dw({
    key: "css"
  }) : null
);
P0.Provider;
var Sp = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(n, r) {
    var o = h.useContext(P0);
    return t(n, o, r);
  });
}, il = /* @__PURE__ */ h.createContext({}), wp = {}.hasOwnProperty, Xd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ew = function(t, n) {
  var r = {};
  for (var o in n)
    wp.call(n, o) && (r[o] = n[o]);
  return r[Xd] = t, r;
}, Pw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return xp(n, r, o), E0(function() {
    return bp(n, r, o);
  }), null;
}, Iw = /* @__PURE__ */ Sp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Xd], i = [r], s = "";
  typeof e.className == "string" ? s = k0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ol(i, void 0, h.useContext(il));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    wp.call(e, u) && u !== "css" && u !== Xd && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Pw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, a));
}), Mw = Iw, Sh = function(t, n) {
  var r = arguments;
  if (n == null || !wp.call(n, "css"))
    return h.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Mw, i[1] = Ew(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return h.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Sh || (Sh = {}));
var $w = /* @__PURE__ */ Sp(function(e, t) {
  var n = e.styles, r = ol([n], void 0, h.useContext(il)), o = h.useRef();
  return bh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), bh(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && bp(t, r.next, !0), s.tags.length) {
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
var jw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ow = /* @__PURE__ */ v0(
  function(e) {
    return jw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Aw = Ow, Nw = function(t) {
  return t !== "theme";
}, wh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Aw : Nw;
}, Ch = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Lw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return xp(n, r, o), E0(function() {
    return bp(n, r, o);
  }), null;
}, zw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = Ch(t, n, r), a = l || wh(o), u = !a("as");
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
    var S = Sp(function(C, g, m) {
      var b = u && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = h.useContext(il);
      }
      typeof C.className == "string" ? w = k0(g.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = ol(p.concat(E), g.registered, k);
      w += g.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var I = u && l === void 0 ? wh(b) : a, L = {};
      for (var $ in C)
        u && $ === "as" || I($) && (L[$] = C[$]);
      return L.className = w, m && (L.ref = m), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Lw, {
        cache: g,
        serialized: T,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ h.createElement(b, L));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = l, Object.defineProperty(S, "toString", {
      value: function() {
        return "." + s;
      }
    }), S.withComponent = function(C, g) {
      var m = e(C, Gd({}, n, g, {
        shouldForwardProp: Ch(S, g, !0)
      }));
      return m.apply(void 0, p);
    }, S;
  };
}, Bw = [
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
], qd = zw.bind(null);
Bw.forEach(function(e) {
  qd[e] = qd(e);
});
function _w(e) {
  return e == null || Object.keys(e).length === 0;
}
function I0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(_w(o) ? n : o) : t;
  return /* @__PURE__ */ c.jsx($w, {
    styles: r
  });
}
function M0(e, t) {
  return qd(e, t);
}
function Fw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const kh = [];
function Kr(e) {
  return kh[0] = e, ol(kh);
}
var $0 = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cp = Symbol.for("react.transitional.element"), kp = Symbol.for("react.portal"), Pu = Symbol.for("react.fragment"), Iu = Symbol.for("react.strict_mode"), Mu = Symbol.for("react.profiler"), $u = Symbol.for("react.consumer"), ju = Symbol.for("react.context"), Ou = Symbol.for("react.forward_ref"), Au = Symbol.for("react.suspense"), Nu = Symbol.for("react.suspense_list"), Lu = Symbol.for("react.memo"), zu = Symbol.for("react.lazy"), Dw = Symbol.for("react.view_transition"), Ww = Symbol.for("react.client.reference");
function $n(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Cp:
        switch (e = e.type, e) {
          case Pu:
          case Mu:
          case Iu:
          case Au:
          case Nu:
          case Dw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case ju:
              case Ou:
              case zu:
              case Lu:
                return e;
              case $u:
                return e;
              default:
                return t;
            }
        }
      case kp:
        return t;
    }
  }
}
Qe.ContextConsumer = $u;
Qe.ContextProvider = ju;
Qe.Element = Cp;
Qe.ForwardRef = Ou;
Qe.Fragment = Pu;
Qe.Lazy = zu;
Qe.Memo = Lu;
Qe.Portal = kp;
Qe.Profiler = Mu;
Qe.StrictMode = Iu;
Qe.Suspense = Au;
Qe.SuspenseList = Nu;
Qe.isContextConsumer = function(e) {
  return $n(e) === $u;
};
Qe.isContextProvider = function(e) {
  return $n(e) === ju;
};
Qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Cp;
};
Qe.isForwardRef = function(e) {
  return $n(e) === Ou;
};
Qe.isFragment = function(e) {
  return $n(e) === Pu;
};
Qe.isLazy = function(e) {
  return $n(e) === zu;
};
Qe.isMemo = function(e) {
  return $n(e) === Lu;
};
Qe.isPortal = function(e) {
  return $n(e) === kp;
};
Qe.isProfiler = function(e) {
  return $n(e) === Mu;
};
Qe.isStrictMode = function(e) {
  return $n(e) === Iu;
};
Qe.isSuspense = function(e) {
  return $n(e) === Au;
};
Qe.isSuspenseList = function(e) {
  return $n(e) === Nu;
};
Qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Pu || e === Mu || e === Iu || e === Au || e === Nu || typeof e == "object" && e !== null && (e.$$typeof === zu || e.$$typeof === Lu || e.$$typeof === ju || e.$$typeof === $u || e.$$typeof === Ou || e.$$typeof === Ww || e.getModuleId !== void 0);
};
Qe.typeOf = $n;
$0.exports = Qe;
var j0 = $0.exports;
function vr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function O0(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || j0.isValidElementType(e) || !vr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = O0(e[n]);
  }), t;
}
function It(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return vr(e) && vr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ h.isValidElement(t[o]) || j0.isValidElementType(t[o]) ? r[o] = t[o] : vr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && vr(e[o]) ? r[o] = It(e[o], t[o], n) : n.clone ? r[o] = vr(t[o]) ? O0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Uw = (e) => {
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
  } = e, i = Uw(t), s = Object.keys(i);
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
const Th = /min-width:\s*([0-9.]+)/;
function Rh(e, t) {
  if (!e.containerQueries || !Vw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(Th)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(Th)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Vw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function N0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Hw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Kw(e) {
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
const Gw = {
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
  return Zw(t) ? t : Jw(e) ? Si(t) : n && r ? Xw(e, t) : n !== r ? Si(t) : eC(e, t);
}
function Yw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Si(e[t]);
  return r;
}
function Qw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Si(e[n]));
  return t;
}
function Xw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Si(t[r]);
  return e;
}
function qw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Zw(e) {
  return typeof e != "object" || e === null;
}
function Jw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Si(e) {
  return qw(e) ? Array.isArray(e) ? Yw(e) : Qw(e) : e;
}
function eC(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = di(e[n], t[n]) : e[n] = Si(t[n]));
  return e;
}
const tC = {}, Bu = {
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
}, Da = A0({
  values: Bu
}), nC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Bu[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Qr(e, t, n) {
  const r = {};
  return _u(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : di(r, l);
  });
}
function _u(e, t, n, r) {
  if (t ?? (t = tC), Array.isArray(n)) {
    const o = t.breakpoints ?? Da;
    for (let i = 0; i < n.length; i += 1)
      Dc(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Da, i = o.values ?? Bu;
    for (const s in n)
      if (N0(o.keys, s)) {
        const l = Hw(t.containerQueries ? t : nC, s);
        l && Dc(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        Dc(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Dc(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function z0(e = Da) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Zd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    L0(t[o]) && delete t[o];
  }
  return t;
}
function rC(e, ...t) {
  const r = [z0(e), ...t].reduce((o, i) => It(o, i), {});
  return Zd(e, r);
}
function oC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Wc(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || oC(t, n), i = Object.keys(o);
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
function iC(e, t) {
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
function ce(e) {
  if (typeof e != "string")
    throw new Error(Rr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function B0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Fu(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Fu(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Eh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Eh(e, o, r);
}
function Eh(e, t, n = void 0) {
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
    const l = s[t], a = s.theme, u = Fu(a, r) || {};
    return Qr(s, l, (p) => {
      const y = B0(u, o, p, t);
      return n === !1 ? y : {
        [n]: y
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const sC = {
  internal_cache: {}
}, Wa = {
  m: "margin",
  p: "padding"
}, Ph = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ih = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Gs = {};
for (const e in Wa)
  Gs[e] = [Wa[e]];
for (const e in Wa)
  for (const t in Ph) {
    const n = Wa[e], r = Ph[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Gs[e + t] = o;
  }
for (const e in Ih)
  Gs[e] = Gs[Ih[e]];
const Tp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Rp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Tp, ...Rp];
function ll(e, t, n, r) {
  const o = Fu(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Du(e) {
  return ll(e, "spacing", 8);
}
function ko(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Mh = [""];
function _0(e, t) {
  var i;
  const n = e.theme ?? sC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Du(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Gs[s] ?? (Mh[0] = s, Mh), a = e[s];
    _u(o, e.theme, a, (u, d) => {
      const p = u ? o[u] : o;
      for (let y = 0; y < l.length; y += 1)
        p[l[y]] = ko(r, d);
    });
  }
  return o;
}
function Ep(e) {
  return _0(e, Tp);
}
Ep.propTypes = {};
Ep.filterProps = Tp;
const St = Ep;
function Pp(e) {
  return _0(e, Rp);
}
Pp.propTypes = {};
Pp.filterProps = Rp;
const wt = Pp;
function F0(e = 8, t = Du({
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
function Wu(...e) {
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
function jn(e, t) {
  return bt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const lC = jn("border", wn), aC = jn("borderTop", wn), uC = jn("borderRight", wn), cC = jn("borderBottom", wn), dC = jn("borderLeft", wn), fC = jn("borderColor"), pC = jn("borderTopColor"), mC = jn("borderRightColor"), hC = jn("borderBottomColor"), gC = jn("borderLeftColor"), yC = jn("outline", wn), vC = jn("outlineColor"), Uu = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ll(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: ko(t, r)
    });
    return Qr(e, e.borderRadius, n);
  }
  return null;
};
Uu.propTypes = {};
Uu.filterProps = ["borderRadius"];
Wu(lC, aC, uC, cC, dC, fC, pC, mC, hC, gC, Uu, yC, vC);
const Vu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      gap: ko(t, r)
    });
    return Qr(e, e.gap, n);
  }
  return null;
};
Vu.propTypes = {};
Vu.filterProps = ["gap"];
const Hu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      columnGap: ko(t, r)
    });
    return Qr(e, e.columnGap, n);
  }
  return null;
};
Hu.propTypes = {};
Hu.filterProps = ["columnGap"];
const Ku = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      rowGap: ko(t, r)
    });
    return Qr(e, e.rowGap, n);
  }
  return null;
};
Ku.propTypes = {};
Ku.filterProps = ["rowGap"];
const xC = bt({
  prop: "gridColumn"
}), bC = bt({
  prop: "gridRow"
}), SC = bt({
  prop: "gridAutoFlow"
}), wC = bt({
  prop: "gridAutoColumns"
}), CC = bt({
  prop: "gridAutoRows"
}), kC = bt({
  prop: "gridTemplateColumns"
}), TC = bt({
  prop: "gridTemplateRows"
}), RC = bt({
  prop: "gridTemplateAreas"
}), EC = bt({
  prop: "gridArea"
});
Wu(Vu, Hu, Ku, xC, bC, SC, wC, CC, kC, TC, RC, EC);
function fi(e, t) {
  return t === "grey" ? t : e;
}
const PC = bt({
  prop: "color",
  themeKey: "palette",
  transform: fi
}), IC = bt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: fi
}), MC = bt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: fi
});
Wu(PC, IC, MC);
const $C = Bu;
function un(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const jC = bt({
  prop: "width",
  transform: un
}), Ip = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || $C[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: un(n)
      };
    };
    return Qr(e, e.maxWidth, t);
  }
  return null;
};
Ip.filterProps = ["maxWidth"];
const OC = bt({
  prop: "minWidth",
  transform: un
}), AC = bt({
  prop: "height",
  transform: un
}), NC = bt({
  prop: "maxHeight",
  transform: un
}), LC = bt({
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
const zC = bt({
  prop: "boxSizing"
});
Wu(jC, Ip, OC, AC, NC, LC, zC);
const Gu = {
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
    style: Uu
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
    style: Vu
  },
  rowGap: {
    style: Ku
  },
  columnGap: {
    style: Hu
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
    style: Ip
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
}, BC = {};
function _C() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = BC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Gu, s = {
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
      const d = r.breakpoints ?? Da, p = z0(d);
      for (const y in u) {
        const f = FC(u[y], r);
        if (f != null) {
          if (typeof f != "object") {
            $h(p, y, f, r, i);
            continue;
          }
          if (i[y]) {
            $h(p, y, f, r, i);
            continue;
          }
          iC(d, f) ? _u(p, t.theme, f, (v, S) => {
            p[v][y] = S;
          }) : (s.sx = f, p[y] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Rh(r, Zd(d, p))
      } : Rh(r, Zd(d, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const To = _C();
function $h(e, t, n, r, o) {
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
    transform: u
  } = i, d = Fu(r, s);
  _u(e, r, n, (p, y) => {
    const f = B0(d, u, y, t);
    a === !1 ? di(p ? e[p] : e, f) : p ? e[p][a] = f : e[a] = f;
  });
}
function FC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function DC(e, t) {
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
function Yu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = A0(n), a = F0(o);
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
      ...Gw,
      ...i
    }
  }, s);
  return u = Kw(u), u.applyStyles = DC, u = t.reduce((d, p) => It(d, p), u), u.unstable_sxConfig = {
    ...Gu,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(p) {
    return To({
      sx: p,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function WC(e) {
  return Object.keys(e).length === 0;
}
function Mp(e = null) {
  const t = h.useContext(il);
  return !t || WC(t) ? e : t;
}
const UC = Yu();
function Qu(e = UC) {
  return Mp(e);
}
function Uc(e) {
  const t = Kr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function D0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Qu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Uc(typeof s == "function" ? s(o) : s)) : i = Uc(i)), /* @__PURE__ */ c.jsx(I0, {
    styles: i
  });
}
const jh = (e) => e, VC = () => {
  let e = jh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = jh;
    }
  };
}, W0 = VC();
function U0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = U0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = U0(e)) && (r && (r += " "), r += t);
  return r;
}
function HC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = M0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(To);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const d = Qu(n), {
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
const KC = {
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
  const r = KC[t];
  return r ? `${n}-${r}` : `${W0.generate(e)}-${t}`;
}
function pe(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ye(e, o, n);
  }), r;
}
function V0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Kr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Kr(o.style));
  }), r;
}
const GC = Yu();
function Vc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function mo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function YC(e) {
  return e ? (t, n) => n[e] : null;
}
function QC(e, t, n) {
  e.theme = L0(e.theme) ? n : e.theme[t] || e.theme;
}
function fa(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => fa(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? mo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? mo(Kr(s), n) : s;
    }
    return H0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? mo(Kr(r.style), n) : r.style : n ? mo(Kr(r), n) : r;
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
    }), n.push(r ? mo(Kr(l.style(o)), r) : l.style(o))) : n.push(r ? mo(Kr(l.style), r) : l.style);
  }
  return n;
}
function K0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = GC,
    rootShouldForwardProp: r = Vc,
    slotShouldForwardProp: o = Vc
  } = e;
  function i(l) {
    QC(l, t, n);
  }
  return (l, a = {}) => {
    Fw(l, (k) => k.filter((R) => R !== To));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: p,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = YC(ZC(d)),
      ...v
    } = a, S = u && u.startsWith("Mui") || d ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), g = y || !1;
    let m = Vc;
    d === "Root" || d === "root" ? m = r : d ? m = o : qC(l) && (m = void 0);
    const b = M0(l, {
      shouldForwardProp: m,
      label: XC(),
      ...v
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return fa(T, k, T.theme.modularCssLayers ? S : void 0);
        };
      if (vr(k)) {
        const R = V0(k);
        return function(I) {
          return R.variants ? fa(I, R, I.theme.modularCssLayers ? S : void 0) : I.theme.modularCssLayers ? mo(R.style, S) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), I = [];
      if (R.push(i), u && f && I.push(function(x) {
        var N, M;
        const P = (M = (N = x.theme.components) == null ? void 0 : N[u]) == null ? void 0 : M.styleOverrides;
        if (!P)
          return null;
        const O = {};
        for (const z in P)
          O[z] = fa(x, P[z], x.theme.modularCssLayers ? "theme" : void 0);
        return f(x, O);
      }), u && !C && I.push(function(x) {
        var O, N;
        const j = x.theme, P = (N = (O = j == null ? void 0 : j.components) == null ? void 0 : O[u]) == null ? void 0 : N.variants;
        return P ? H0(x, P, [], x.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || I.push(To), Array.isArray(T[0])) {
        const A = T.shift(), x = new Array(R.length).fill(""), j = new Array(I.length).fill("");
        let P;
        P = [...x, ...A, ...j], P.raw = [...x, ...A.raw, ...j], R.unshift(P);
      }
      const L = [...R, ...T, ...I], $ = b(...L);
      return l.muiName && ($.muiName = l.muiName), $;
    };
    return b.withConfig && (E.withConfig = b.withConfig), E;
  };
}
function XC(e, t) {
  return void 0;
}
function qC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ZC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const JC = K0();
function wi(e, t, n = !1) {
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
              typeof d == "function" || typeof p == "function" ? r[i][u] = (...y) => wi((typeof d == "function" ? d(...y) : d) ?? {}, (typeof p == "function" ? p(...y) : p) ?? {}, n) : r[i][u] = wi(d ?? {}, p ?? {}, n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = te(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function e2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : wi(t.components[n].defaultProps, r);
}
function t2(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Qu(r);
  return o && (i = i[o] || i), e2({
    theme: i,
    name: n,
    props: t
  });
}
const dt = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function n2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function $p(e, t = 0, n = 1) {
  return n2(e, t, n);
}
function r2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xr(r2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Rr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Rr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const o2 = (e) => {
  const t = Xr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ls = (e, t) => {
  try {
    return o2(e);
  } catch {
    return e;
  }
};
function Xu(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function G0(e) {
  e = Xr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Xu({
    type: l,
    values: a
  });
}
function Jd(e) {
  e = Xr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xr(G0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function i2(e, t) {
  const n = Jd(e), r = Jd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ys(e, t) {
  return e = Xr(e), t = $p(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Xu(e);
}
function oo(e, t, n) {
  try {
    return Ys(e, t);
  } catch {
    return e;
  }
}
function qu(e, t) {
  if (e = Xr(e), t = $p(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Xu(e);
}
function We(e, t, n) {
  try {
    return qu(e, t);
  } catch {
    return e;
  }
}
function Zu(e, t) {
  if (e = Xr(e), t = $p(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Xu(e);
}
function Ue(e, t, n) {
  try {
    return Zu(e, t);
  } catch {
    return e;
  }
}
function ef(e, t = 0.15) {
  return Jd(e) > 0.5 ? qu(e, t) : Zu(e, t);
}
function Ol(e, t, n) {
  try {
    return ef(e, t);
  } catch {
    return e;
  }
}
const Y0 = /* @__PURE__ */ h.createContext(null);
function jp() {
  return h.useContext(Y0);
}
const s2 = typeof Symbol == "function" && Symbol.for, l2 = s2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function a2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function u2(e) {
  const {
    children: t,
    theme: n
  } = e, r = jp(), o = h.useMemo(() => {
    const i = r === null ? {
      ...n
    } : a2(r, n);
    return i != null && (i[l2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ c.jsx(Y0.Provider, {
    value: o,
    children: t
  });
}
const Q0 = /* @__PURE__ */ h.createContext();
function c2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(Q0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Ju = () => h.useContext(Q0) ?? !1, X0 = /* @__PURE__ */ h.createContext(void 0);
function d2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c.jsx(X0.Provider, {
    value: e,
    children: t
  });
}
function f2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? wi(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? wi(o, r, t.components.mergeClassNameAndStyle) : r;
}
function p2({
  props: e,
  name: t
}) {
  const n = h.useContext(X0);
  return f2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Oh = 0;
function m2(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Oh += 1, n(`mui-${Oh}`));
  }, [t]), r;
}
const h2 = {
  ...ha
}, Ah = h2.useId;
function Er(e) {
  if (Ah !== void 0) {
    const t = Ah();
    return e ?? t;
  }
  return m2(e);
}
function g2(e) {
  const t = Mp(), n = Er() || "", {
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
  }, [o, n]), o ? /* @__PURE__ */ c.jsx(D0, {
    styles: o
  }) : null;
}
const Nh = {};
function Lh(e, t, n, r = !1) {
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
function q0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Mp(Nh), i = jp() || Nh, s = Lh(r, o, n), l = Lh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = g2(s);
  return /* @__PURE__ */ c.jsx(u2, {
    theme: l,
    children: /* @__PURE__ */ c.jsx(il.Provider, {
      value: s,
      children: /* @__PURE__ */ c.jsx(c2, {
        value: a,
        children: /* @__PURE__ */ c.jsxs(d2, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const zh = {
  theme: void 0
};
function y2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (zh.theme = o.theme, i = V0(e(zh)), t = i, n = o.theme), i;
  };
}
const Op = "mode", Ap = "color-scheme", v2 = "data-color-scheme";
function x2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Op,
    colorSchemeStorageKey: i = Ap,
    attribute: s = v2,
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
function b2() {
}
const S2 = ({
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
      return b2;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Hc() {
}
function Bh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Z0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function w2(e) {
  return Z0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function C2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Op,
    colorSchemeStorageKey: s = Ap,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = S2,
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
    const T = (y == null ? void 0 : y.get(t)) || t, I = (f == null ? void 0 : f.get(n)) || n, L = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: T,
      systemMode: Bh(T),
      lightColorScheme: I,
      darkColorScheme: L
    };
  }), [g, m] = h.useState(u || !p);
  h.useEffect(() => {
    m(!0);
  }, []);
  const b = w2(S), w = h.useCallback((T) => {
    C((I) => {
      if (T === I.mode)
        return I;
      const L = T ?? t;
      return y == null || y.set(L), {
        ...I,
        mode: L,
        systemMode: Bh(L)
      };
    });
  }, [y, t]), E = h.useCallback((T) => {
    T ? typeof T == "string" ? T && !d.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((I) => {
      const L = {
        ...I
      };
      return Z0(I, ($) => {
        $ === "light" && (f == null || f.set(T), L.lightColorScheme = T), $ === "dark" && (v == null || v.set(T), L.darkColorScheme = T);
      }), L;
    }) : C((I) => {
      const L = {
        ...I
      }, $ = T.light === null ? n : T.light, A = T.dark === null ? r : T.dark;
      return $ && (d.includes($) ? (L.lightColorScheme = $, f == null || f.set($)) : console.error(`\`${$}\` does not exist in \`theme.colorSchemes\`.`)), A && (d.includes(A) ? (L.darkColorScheme = A, v == null || v.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), L;
    }) : C((I) => (f == null || f.set(n), v == null || v.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, f, v, n, r]), k = h.useCallback((T) => {
    S.mode === "system" && C((I) => {
      const L = T != null && T.matches ? "dark" : "light";
      return I.systemMode === L ? I : {
        ...I,
        systemMode: L
      };
    });
  }, [S.mode]), R = h.useRef(k);
  return R.current = k, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const T = (...L) => R.current(...L), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(T), T(I), () => {
      I.removeListener(T);
    };
  }, [p]), h.useEffect(() => {
    if (p) {
      const T = (y == null ? void 0 : y.subscribe(($) => {
        (!$ || ["light", "dark", "system"].includes($)) && w($ || t);
      })) || Hc, I = (f == null ? void 0 : f.subscribe(($) => {
        (!$ || d.match($)) && E({
          light: $
        });
      })) || Hc, L = (v == null ? void 0 : v.subscribe(($) => {
        (!$ || d.match($)) && E({
          dark: $
        });
      })) || Hc;
      return () => {
        T(), I(), L();
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
const k2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function T2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Op,
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
  }, u = /* @__PURE__ */ h.createContext(void 0), d = () => h.useContext(u) || a, p = {}, y = {};
  function f(g) {
    var le, ie, oe, Ae;
    const {
      children: m,
      theme: b,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: L = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: $ = !1,
      disableStyleSheetGeneration: A = !1,
      defaultMode: x = "system",
      forceThemeRerender: j = !1,
      noSsr: P
    } = g, O = h.useRef(!1), N = jp(), M = h.useContext(u), z = !!M && !$, F = h.useMemo(() => b || (typeof n == "function" ? n() : n), [b]), U = F[t], W = U || F, {
      colorSchemes: Q = p,
      components: G = y,
      cssVarPrefix: X
    } = W, K = Object.keys(Q).filter((se) => !!Q[se]).join(","), q = h.useMemo(() => K.split(","), [K]), _ = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, re = Q[_] && Q[ne] ? x : ((ie = (le = Q[W.defaultColorScheme]) == null ? void 0 : le.palette) == null ? void 0 : ie.mode) || ((oe = W.palette) == null ? void 0 : oe.mode), {
      mode: ke,
      setMode: me,
      systemMode: de,
      lightColorScheme: fe,
      darkColorScheme: Me,
      colorScheme: Be,
      setColorScheme: Pe
    } = C2({
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
    let je = he || W.defaultColorScheme;
    W.vars && !j && (je = W.defaultColorScheme);
    const et = h.useMemo(() => {
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
        ot && typeof ot == "object" && Object.keys(ot).forEach((mt) => {
          ot[mt] && typeof ot[mt] == "object" ? ae[mt] = {
            ...ae[mt],
            ...ot[mt]
          } : ae[mt] = ot[mt];
        });
      }
      return l ? l(ae) : ae;
    }, [W, je, G, Q, X]), Xe = W.colorSchemeSelector;
    dt(() => {
      if (he && L && Xe && Xe !== "media") {
        const se = Xe;
        let ae = Xe;
        if (se === "class" && (ae = ".%s"), se === "data" && (ae = "[data-%s]"), se != null && se.startsWith("data-") && !se.includes("%s") && (ae = `[${se}="%s"]`), ae.startsWith("."))
          L.classList.remove(...q.map((Ge) => ae.substring(1).replace("%s", Ge))), L.classList.add(ae.substring(1).replace("%s", he));
        else {
          const Ge = ae.replace("%s", he).match(/\[([^\]]+)\]/);
          if (Ge) {
            const [ot, mt] = Ge[1].split("=");
            mt || q.forEach((De) => {
              L.removeAttribute(ot.replace(he, De));
            }), L.setAttribute(ot, mt ? mt.replace(/"|'/g, "") : "");
          } else
            L.setAttribute(ae, he);
        }
      }
    }, [he, Xe, L, q]), h.useEffect(() => {
      let se;
      if (k && O.current && I) {
        const ae = I.createElement("style");
        ae.appendChild(I.createTextNode(k2)), I.head.appendChild(ae), window.getComputedStyle(I.body), se = setTimeout(() => {
          I.head.removeChild(ae);
        }, 1);
      }
      return () => {
        clearTimeout(se);
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
      setColorScheme: Pe,
      setMode: me,
      systemMode: de
    }), [q, he, Me, fe, $e, Pe, me, de, et.colorSchemeSelector]);
    let qe = !0;
    (A || W.cssVariables === !1 || z && (N == null ? void 0 : N.cssVarPrefix) === X) && (qe = !1);
    const D = /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [/* @__PURE__ */ c.jsx(q0, {
        themeId: U ? t : void 0,
        theme: et,
        children: m
      }), qe && /* @__PURE__ */ c.jsx(I0, {
        styles: ((Ae = et.generateStyleSheets) == null ? void 0 : Ae.call(et)) || []
      })]
    });
    return z ? D : /* @__PURE__ */ c.jsx(u.Provider, {
      value: Fe,
      children: D
    });
  }
  const v = typeof s == "string" ? s : s.light, S = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (g) => x2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: S,
      modeStorageKey: r,
      ...g
    })
  };
}
function R2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const E2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), _h = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (E2.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, P2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, I2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Kc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return P2(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = I2(l, a);
        Object.assign(o, {
          [d]: p
        }), _h(i, l, `var(${d})`, u), _h(s, l, `var(${d}, ${p})`, u);
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
function M2(e, t = {}) {
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
  } = Kc(u, t);
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
    } = Kc(E, t);
    f = It(f, T), v[w] = {
      css: R,
      vars: k
    };
  }), S) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Kc(S, t);
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
      var I, L;
      const w = [], E = e.defaultColorScheme || "light";
      function k($, A) {
        Object.keys(A).length && w.push(typeof $ == "string" ? {
          [$]: {
            ...A
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
        } = R, A = (L = (I = s[E]) == null ? void 0 : I.palette) == null ? void 0 : L.mode, x = !r && A ? {
          colorScheme: A,
          ...$
        } : {
          ...$
        };
        k(n(E, {
          ...x
        }), x);
      }
      return Object.entries(T).forEach(([$, {
        css: A
      }]) => {
        var P, O;
        const x = (O = (P = s[$]) == null ? void 0 : P.palette) == null ? void 0 : O.mode, j = !r && x ? {
          colorScheme: x,
          ...A
        } : {
          ...A
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
function $2(e) {
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
function Gc(e, t) {
  var n, r, o;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const j2 = Yu(), O2 = JC("div", {
  name: "MuiStack",
  slot: "Root"
});
function A2(e) {
  return t2({
    props: e,
    name: "MuiStack",
    defaultTheme: j2
  });
}
function N2(e, t) {
  const n = h.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const L2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], z2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Qr({
      theme: t
    }, Wc({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Du(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = Wc({
      values: e.direction,
      base: o
    }), s = Wc({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, d) => {
      if (!i[a]) {
        const y = u > 0 ? i[d[u - 1]] : "column";
        i[a] = y;
      }
    }), n = It(n, Qr({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: ko(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${L2(u ? i[u] : e.direction)}`]: ko(r, a)
      }
    }));
  }
  return n = rC(t.breakpoints, n), n;
};
function B2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = O2,
    useThemeProps: n = A2,
    componentName: r = "MuiStack"
  } = e, o = () => ve({
    root: ["root"]
  }, (a) => ye(r, a), {}), i = t(z2);
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
      children: v ? N2(S, v) : S
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
const e1 = J0();
function t1() {
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
const tf = t1();
function Fh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Zu(e.main, o) : t === "dark" && (e.dark = qu(e.main, i)));
}
function Dh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function _2(e = "light") {
  return e === "dark" ? {
    main: Wo[200],
    light: Wo[50],
    dark: Wo[400]
  } : {
    main: Wo[700],
    light: Wo[400],
    dark: Wo[800]
  };
}
function F2(e = "light") {
  return e === "dark" ? {
    main: Do[200],
    light: Do[50],
    dark: Do[400]
  } : {
    main: Do[500],
    light: Do[300],
    dark: Do[700]
  };
}
function D2(e = "light") {
  return e === "dark" ? {
    main: Fo[500],
    light: Fo[300],
    dark: Fo[700]
  } : {
    main: Fo[700],
    light: Fo[400],
    dark: Fo[800]
  };
}
function W2(e = "light") {
  return e === "dark" ? {
    main: Uo[400],
    light: Uo[300],
    dark: Uo[700]
  } : {
    main: Uo[700],
    light: Uo[500],
    dark: Uo[900]
  };
}
function U2(e = "light") {
  return e === "dark" ? {
    main: Vo[400],
    light: Vo[300],
    dark: Vo[700]
  } : {
    main: Vo[800],
    light: Vo[500],
    dark: Vo[900]
  };
}
function V2(e = "light") {
  return e === "dark" ? {
    main: Hi[400],
    light: Hi[300],
    dark: Hi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Hi[500],
    dark: Hi[900]
  };
}
function H2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Np(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || _2(t), l = e.secondary || F2(t), a = e.error || D2(t), u = e.info || W2(t), d = e.success || U2(t), p = e.warning || V2(t);
  function y(C) {
    return o ? H2(C) : i2(C, tf.text.primary) >= n ? tf.text.primary : e1.text.primary;
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
      throw new Error(Rr(11, g ? ` (${g})` : "", m));
    if (typeof C.main != "string")
      throw new Error(Rr(12, g ? ` (${g})` : "", JSON.stringify(C.main)));
    return o ? (Dh(o, C, "light", b, r), Dh(o, C, "dark", w, r)) : (Fh(C, "light", b, r), Fh(C, "dark", w, r)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let v;
  return t === "light" ? v = J0() : t === "dark" && (v = t1()), It({
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
    grey: LS,
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
const al = "--_focusVisible-offset", ec = "--_focusVisible-behavior", n1 = "--_focusVisible-shadow", K2 = `var(${al}, 1)`, G2 = `var(${ec}, )`, Y2 = {
  [al]: 1,
  [ec]: "initial"
  // reverts the var to guaranteed-invalid so `var(--_focusVisible-behavior, )` falls back to empty — there is no explicit `outset` keyword.
};
function r1(e) {
  return {
    [n1]: e
  };
}
function o1(e) {
  return {
    [al]: -e,
    [ec]: "inset"
  };
}
function i1(e, t) {
  return t.reduce((n, r) => r && "focusVisible" in r ? It(n, {
    focusVisible: r.focusVisible
  }) : n, {
    focusVisible: e
  }).focusVisible;
}
function Q2(e) {
  return e != null && typeof e == "object" && typeof e.outlineOffset == "string" && e.outlineOffset.includes(al);
}
function Lp(e, t) {
  return X2({
    outlineStyle: "solid",
    outlineColor: t,
    outlineWidth: 2,
    outlineOffset: 2,
    // invisible shadow for parent component with solid background (AppBar, Snackbar, Alert) can control the ring color.
    boxShadow: `var(${n1}, 0 0)`,
    ...e === !0 ? null : e
  });
}
function X2(e) {
  const t = e.outlineOffset ?? 0;
  if (typeof t != "string" || !t.includes(al)) {
    const r = typeof t == "number" ? `${t}px` : t;
    e.outlineOffset = `calc(${K2} * ${r})`;
  }
  const n = /* @__PURE__ */ new Set(["none", "initial", "inherit", "unset", "revert", "revert-layer"]);
  return typeof e.boxShadow == "string" && !n.has(e.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e.boxShadow) && !e.boxShadow.includes(ec) && (e.boxShadow = `${G2} ${e.boxShadow}`), e;
}
function q2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Z2(e, t) {
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
function J2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Wh = {
  textTransform: "uppercase"
}, Uh = '"Roboto", "Helvetica", "Arial", sans-serif';
function s1(e, t) {
  const {
    fontFamily: n = Uh,
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
    ...n === Uh ? {
      letterSpacing: `${J2(b / g)}em`
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
    button: v(s, 14, 1.75, 0.4, Wh),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Wh),
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
const ek = 0.2, tk = 0.14, nk = 0.12;
function it(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${ek})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${tk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${nk})`].join(",");
}
const rk = ["none", it(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), it(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), it(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), it(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), it(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), it(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), it(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), it(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), it(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), it(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), it(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), it(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), it(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), it(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), it(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), it(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), it(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), it(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), it(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), it(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), it(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), it(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), it(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), it(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ok = ["all"], ik = {}, sk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, lk = {
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
function Vh(e) {
  return `${Math.round(e)}ms`;
}
function ak(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function uk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...sk,
    ...t.easing
  }, r = {
    ...lk,
    ...t.duration
  }, o = (s = ok, l = ik) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: d = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof a == "string" ? a : Vh(a)} ${u} ${typeof d == "string" ? d : Vh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: ak,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const ck = {};
function dk(e = ck) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const fk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function pk(e) {
  return vr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function l1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !pk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : vr(l) && (r[s] = {
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
function Hh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const mk = (e) => {
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
function hk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Ys(t, mk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Hh(n)})` : Zu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Hh(n)})` : qu(t, n);
    }
  });
}
function nf(e = {}, ...t) {
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
    throw new Error(Rr(22));
  const y = Np({
    ...i,
    colorSpace: d
  }), f = Yu(e);
  let v = It(f, {
    mixins: Z2(f.breakpoints, r),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rk.slice(),
    typography: s1(y, a),
    motion: dk(s),
    transitions: uk(l),
    zIndex: {
      ...fk
    }
  });
  return v = It(v, p), v = t.reduce((S, C) => It(S, C), v), delete v.transitions.reducedMotion, v.focusVisible != null && v.focusVisible !== !1 && (v.focusVisible = Lp(v.focusVisible, v.palette.primary.main)), v.unstable_sxConfig = {
    ...Gu,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, v.unstable_sx = function(C) {
    return To({
      sx: C,
      theme: this
    });
  }, v.toRuntimeSource = l1, hk(v), v;
}
function rf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const gk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = rf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function a1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function u1(e) {
  return e === "dark" ? gk : [];
}
function yk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Np({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...a1(s.mode),
      ...n
    },
    overlays: r || u1(s.mode),
    ...i
  };
}
function vk(e) {
  var t;
  return e[0] === "motion" || // Keep `focusVisible` inline: its values reference the per-component private vars
  // (`--_focusVisible-offset`/`-behavior`). Hoisted to a `:root` var they resolve where those
  // vars are unset, silently breaking the inner-ring inset.
  e[0] === "focusVisible" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const xk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], bk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return xk(e.cssVarPrefix).forEach((l) => {
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
function Sk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function B(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function as(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : G0(e);
}
function cr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ls(as(e[t])));
}
function wk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Yn = (e) => {
  try {
    return e();
  } catch {
  }
}, Ck = (e = "mui") => R2(e);
function Yc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = yk({
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
  } = nf({
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
      ...a1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || u1(i)
  }, l;
}
function kk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = vk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, p = Object.keys(n)[0], y = r || (n.light && p !== "light" ? "light" : p), f = Ck(i), {
    [y]: v,
    light: S,
    dark: C,
    ...g
  } = n, m = {
    ...g
  };
  let b = v;
  if ((y === "dark" && !("dark" in n) || y === "light" && !("light" in n)) && (b = !0), !b)
    throw new Error(Rr(21, y));
  let w;
  s && (w = "oklch");
  const E = Yc(w, m, b, d, y);
  S && !m.light && Yc(w, m, S, void 0, "light"), C && !m.dark && Yc(w, m, C, void 0, "dark");
  let k = {
    defaultColorScheme: y,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...q2(E.typography),
      ...E.font
    },
    spacing: wk(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((A) => {
    const x = k.colorSchemes[A].palette, j = (O) => {
      const N = O.split("-"), M = N[1], z = N[2];
      return f(O, x[M][z]);
    };
    x.mode === "light" && (B(x.common, "background", "#fff"), B(x.common, "onBackground", "#000")), x.mode === "dark" && (B(x.common, "background", "#000"), B(x.common, "onBackground", "#fff"));
    function P(O, N, M) {
      if (w) {
        let z;
        return O === oo && (z = `transparent ${((1 - M) * 100).toFixed(0)}%`), O === We && (z = `#000 ${(M * 100).toFixed(0)}%`), O === Ue && (z = `#fff ${(M * 100).toFixed(0)}%`), `color-mix(in ${w}, ${N}, ${z})`;
      }
      return O(N, M);
    }
    if (Sk(x, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), x.mode === "light") {
      B(x.Alert, "errorColor", P(We, s ? f("palette-error-light") : x.error.light, 0.6)), B(x.Alert, "infoColor", P(We, s ? f("palette-info-light") : x.info.light, 0.6)), B(x.Alert, "successColor", P(We, s ? f("palette-success-light") : x.success.light, 0.6)), B(x.Alert, "warningColor", P(We, s ? f("palette-warning-light") : x.warning.light, 0.6)), B(x.Alert, "errorFilledBg", j("palette-error-main")), B(x.Alert, "infoFilledBg", j("palette-info-main")), B(x.Alert, "successFilledBg", j("palette-success-main")), B(x.Alert, "warningFilledBg", j("palette-warning-main")), B(x.Alert, "errorFilledColor", Yn(() => x.getContrastText(x.error.main))), B(x.Alert, "infoFilledColor", Yn(() => x.getContrastText(x.info.main))), B(x.Alert, "successFilledColor", Yn(() => x.getContrastText(x.success.main))), B(x.Alert, "warningFilledColor", Yn(() => x.getContrastText(x.warning.main))), B(x.Alert, "errorStandardBg", P(Ue, s ? f("palette-error-light") : x.error.light, 0.9)), B(x.Alert, "infoStandardBg", P(Ue, s ? f("palette-info-light") : x.info.light, 0.9)), B(x.Alert, "successStandardBg", P(Ue, s ? f("palette-success-light") : x.success.light, 0.9)), B(x.Alert, "warningStandardBg", P(Ue, s ? f("palette-warning-light") : x.warning.light, 0.9)), B(x.Alert, "errorIconColor", j("palette-error-main")), B(x.Alert, "infoIconColor", j("palette-info-main")), B(x.Alert, "successIconColor", j("palette-success-main")), B(x.Alert, "warningIconColor", j("palette-warning-main")), B(x.AppBar, "defaultBg", j("palette-grey-100")), B(x.Avatar, "defaultBg", j("palette-grey-400")), B(x.Button, "inheritContainedBg", j("palette-grey-300")), B(x.Button, "inheritContainedHoverBg", j("palette-grey-A100")), B(x.Chip, "defaultBorder", j("palette-grey-400")), B(x.Chip, "defaultAvatarColor", j("palette-grey-700")), B(x.Chip, "defaultIconColor", j("palette-grey-700")), B(x.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), B(x.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), B(x.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), B(x.LinearProgress, "primaryBg", P(Ue, s ? f("palette-primary-main") : x.primary.main, 0.62)), B(x.LinearProgress, "secondaryBg", P(Ue, s ? f("palette-secondary-main") : x.secondary.main, 0.62)), B(x.LinearProgress, "errorBg", P(Ue, s ? f("palette-error-main") : x.error.main, 0.62)), B(x.LinearProgress, "infoBg", P(Ue, s ? f("palette-info-main") : x.info.main, 0.62)), B(x.LinearProgress, "successBg", P(Ue, s ? f("palette-success-main") : x.success.main, 0.62)), B(x.LinearProgress, "warningBg", P(Ue, s ? f("palette-warning-light") : x.warning.main, 0.62)), B(x.Skeleton, "bg", w ? P(oo, s ? f("palette-text-primary") : x.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), B(x.Slider, "primaryTrack", P(Ue, s ? f("palette-primary-main") : x.primary.main, 0.62)), B(x.Slider, "secondaryTrack", P(Ue, s ? f("palette-secondary-main") : x.secondary.main, 0.62)), B(x.Slider, "errorTrack", P(Ue, s ? f("palette-error-main") : x.error.main, 0.62)), B(x.Slider, "infoTrack", P(Ue, s ? f("palette-info-main") : x.info.main, 0.62)), B(x.Slider, "successTrack", P(Ue, s ? f("palette-success-main") : x.success.main, 0.62)), B(x.Slider, "warningTrack", P(Ue, s ? f("palette-warning-main") : x.warning.main, 0.62));
      const O = w ? P(We, s ? f("palette-background-default") : x.background.default, 0.6825) : Ol(x.background.default, 0.8);
      B(x.SnackbarContent, "bg", O), B(x.SnackbarContent, "color", Yn(() => w ? tf.text.primary : x.getContrastText(O))), B(x.SpeedDialAction, "fabHoverBg", Ol(x.background.paper, 0.15)), B(x.StepConnector, "border", j("palette-grey-400")), B(x.StepContent, "border", j("palette-grey-400")), B(x.Switch, "defaultColor", j("palette-common-white")), B(x.Switch, "defaultDisabledColor", j("palette-grey-100")), B(x.Switch, "primaryDisabledColor", P(Ue, s ? f("palette-primary-main") : x.primary.main, 0.62)), B(x.Switch, "secondaryDisabledColor", P(Ue, s ? f("palette-secondary-main") : x.secondary.main, 0.62)), B(x.Switch, "errorDisabledColor", P(Ue, s ? f("palette-error-main") : x.error.main, 0.62)), B(x.Switch, "infoDisabledColor", P(Ue, s ? f("palette-info-main") : x.info.main, 0.62)), B(x.Switch, "successDisabledColor", P(Ue, s ? f("palette-success-main") : x.success.main, 0.62)), B(x.Switch, "warningDisabledColor", P(Ue, s ? f("palette-warning-main") : x.warning.main, 0.62)), B(x.TableCell, "border", P(Ue, oo(s ? f("palette-divider") : x.divider, 1), 0.88)), B(x.Tooltip, "bg", P(oo, s ? f("palette-grey-700") : x.grey[700], 0.92));
    }
    if (x.mode === "dark") {
      B(x.Alert, "errorColor", P(Ue, s ? f("palette-error-light") : x.error.light, 0.6)), B(x.Alert, "infoColor", P(Ue, s ? f("palette-info-light") : x.info.light, 0.6)), B(x.Alert, "successColor", P(Ue, s ? f("palette-success-light") : x.success.light, 0.6)), B(x.Alert, "warningColor", P(Ue, s ? f("palette-warning-light") : x.warning.light, 0.6)), B(x.Alert, "errorFilledBg", j("palette-error-dark")), B(x.Alert, "infoFilledBg", j("palette-info-dark")), B(x.Alert, "successFilledBg", j("palette-success-dark")), B(x.Alert, "warningFilledBg", j("palette-warning-dark")), B(x.Alert, "errorFilledColor", Yn(() => x.getContrastText(x.error.dark))), B(x.Alert, "infoFilledColor", Yn(() => x.getContrastText(x.info.dark))), B(x.Alert, "successFilledColor", Yn(() => x.getContrastText(x.success.dark))), B(x.Alert, "warningFilledColor", Yn(() => x.getContrastText(x.warning.dark))), B(x.Alert, "errorStandardBg", P(We, s ? f("palette-error-light") : x.error.light, 0.9)), B(x.Alert, "infoStandardBg", P(We, s ? f("palette-info-light") : x.info.light, 0.9)), B(x.Alert, "successStandardBg", P(We, s ? f("palette-success-light") : x.success.light, 0.9)), B(x.Alert, "warningStandardBg", P(We, s ? f("palette-warning-light") : x.warning.light, 0.9)), B(x.Alert, "errorIconColor", j("palette-error-main")), B(x.Alert, "infoIconColor", j("palette-info-main")), B(x.Alert, "successIconColor", j("palette-success-main")), B(x.Alert, "warningIconColor", j("palette-warning-main")), B(x.AppBar, "defaultBg", j("palette-grey-900")), B(x.AppBar, "darkBg", j("palette-background-paper")), B(x.AppBar, "darkColor", j("palette-text-primary")), B(x.Avatar, "defaultBg", j("palette-grey-600")), B(x.Button, "inheritContainedBg", j("palette-grey-800")), B(x.Button, "inheritContainedHoverBg", j("palette-grey-700")), B(x.Chip, "defaultBorder", j("palette-grey-700")), B(x.Chip, "defaultAvatarColor", j("palette-grey-300")), B(x.Chip, "defaultIconColor", j("palette-grey-300")), B(x.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), B(x.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), B(x.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), B(x.LinearProgress, "primaryBg", P(We, s ? f("palette-primary-main") : x.primary.main, 0.5)), B(x.LinearProgress, "secondaryBg", P(We, s ? f("palette-secondary-main") : x.secondary.main, 0.5)), B(x.LinearProgress, "errorBg", P(We, s ? f("palette-error-main") : x.error.main, 0.5)), B(x.LinearProgress, "infoBg", P(We, s ? f("palette-info-main") : x.info.main, 0.5)), B(x.LinearProgress, "successBg", P(We, s ? f("palette-success-main") : x.success.main, 0.5)), B(x.LinearProgress, "warningBg", P(We, s ? f("palette-warning-main") : x.warning.main, 0.5)), B(x.Skeleton, "bg", w ? P(oo, s ? f("palette-text-primary") : x.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), B(x.Slider, "primaryTrack", P(We, s ? f("palette-primary-main") : x.primary.main, 0.5)), B(x.Slider, "secondaryTrack", P(We, s ? f("palette-secondary-main") : x.secondary.main, 0.5)), B(x.Slider, "errorTrack", P(We, s ? f("palette-error-main") : x.error.main, 0.5)), B(x.Slider, "infoTrack", P(We, s ? f("palette-info-main") : x.info.main, 0.5)), B(x.Slider, "successTrack", P(We, s ? f("palette-success-main") : x.success.main, 0.5)), B(x.Slider, "warningTrack", P(We, s ? f("palette-warning-light") : x.warning.main, 0.5));
      const O = w ? P(Ue, s ? f("palette-background-default") : x.background.default, 0.985) : Ol(x.background.default, 0.98);
      B(x.SnackbarContent, "bg", O), B(x.SnackbarContent, "color", Yn(() => w ? e1.text.primary : x.getContrastText(O))), B(x.SpeedDialAction, "fabHoverBg", Ol(x.background.paper, 0.15)), B(x.StepConnector, "border", j("palette-grey-600")), B(x.StepContent, "border", j("palette-grey-600")), B(x.Switch, "defaultColor", j("palette-grey-300")), B(x.Switch, "defaultDisabledColor", j("palette-grey-600")), B(x.Switch, "primaryDisabledColor", P(We, s ? f("palette-primary-main") : x.primary.main, 0.55)), B(x.Switch, "secondaryDisabledColor", P(We, s ? f("palette-secondary-main") : x.secondary.main, 0.55)), B(x.Switch, "errorDisabledColor", P(We, s ? f("palette-error-main") : x.error.main, 0.55)), B(x.Switch, "infoDisabledColor", P(We, s ? f("palette-info-main") : x.info.main, 0.55)), B(x.Switch, "successDisabledColor", P(We, s ? f("palette-success-main") : x.success.main, 0.55)), B(x.Switch, "warningDisabledColor", P(We, s ? f("palette-warning-light") : x.warning.main, 0.55)), B(x.TableCell, "border", P(We, oo(s ? f("palette-divider") : x.divider, 1), 0.68)), B(x.Tooltip, "bg", P(oo, s ? f("palette-grey-700") : x.grey[700], 0.92));
    }
    s || (cr(x.background, "default"), cr(x.background, "paper"), cr(x.common, "background"), cr(x.common, "onBackground"), cr(x, "divider")), Object.keys(x).forEach((O) => {
      const N = x[O];
      O !== "tonalOffset" && !s && N && typeof N == "object" && (N.main && B(x[O], "mainChannel", ls(as(N.main))), N.light && B(x[O], "lightChannel", ls(as(N.light))), N.dark && B(x[O], "darkChannel", ls(as(N.dark))), N.contrastText && B(x[O], "contrastTextChannel", ls(as(N.contrastText))), O === "text" && (cr(x[O], "primary"), cr(x[O], "secondary")), O === "action" && (N.active && cr(x[O], "active"), N.selected && cr(x[O], "selected")));
    });
  }), k = t.reduce((A, x) => It(A, x), k);
  const R = i1(e.focusVisible, t);
  R != null && R !== !1 && (k.focusVisible = Lp(R, f("palette-primary-main")));
  const T = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: bk(k),
    enableContrastVars: s
  }, {
    vars: I,
    generateThemeVars: L,
    generateStyleSheets: $
  } = M2(k, T);
  return k.vars = I, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([A, x]) => {
    k[A] = x;
  }), k.generateThemeVars = L, k.generateStyleSheets = $, k.generateSpacing = function() {
    return F0(d.spacing, Du(this));
  }, k.getColorSchemeSelector = $2(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Gu,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(x) {
    return To({
      sx: x,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = l1, k;
}
function Kh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Np({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function tc(e = {}, ...t) {
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
      return nf(e, ...t);
    let d = n;
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = nf({
      ...e,
      palette: d
    }, ...t);
    if (p.defaultColorScheme = l, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: p.palette
    }, Kh(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: p.palette
    }, Kh(p, "light", u.light)), p.focusVisible != null && p.focusVisible !== !1) {
      let y = p.focusVisible;
      const f = i1(e.focusVisible, t), v = f && typeof f == "object" ? f.outlineColor : void 0;
      if (!v || Q2(f) && v === p.palette.primary.main) {
        const {
          outlineColor: S,
          ...C
        } = y;
        y = C;
      }
      Object.keys(p.colorSchemes).forEach((S) => {
        var g, m;
        const C = (m = (g = p.colorSchemes) == null ? void 0 : g[S]) == null ? void 0 : m.palette;
        C != null && C.primary && (p.colorSchemes[S].focusVisible = Lp(y, C.primary.main));
      });
    }
    return p;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), kk({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ua(e) {
  return typeof e == "string";
}
function nc(e, t = 166) {
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
  return dt(() => {
    t.current = e;
  }), h.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function Vn(e) {
  return gt(e).defaultView || window;
}
function Al(e) {
  return parseInt(e, 10) || 0;
}
const Tk = {
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
function Rk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Gh(e) {
  return Rk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const Ek = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = h.useRef(l != null), d = h.useRef(null), p = pt(n, d), y = h.useRef(null), f = h.useRef(null), v = h.useCallback(() => {
    const b = d.current, w = f.current;
    if (!b || !w)
      return;
    const k = Vn(b).getComputedStyle(b);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = b.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Al(k.paddingBottom) + Al(k.paddingTop), I = Al(k.borderBottomWidth) + Al(k.borderTopWidth), L = w.scrollHeight;
    w.value = "x";
    const $ = w.scrollHeight;
    let A = L;
    i && (A = Math.max(Number(i) * $, A)), o && (A = Math.min(Number(o) * $, A)), A = Math.max(A, $);
    const x = A + (R === "border-box" ? T + I : 0), j = Math.abs(A - L) <= 1;
    return {
      outerHeightStyle: x,
      overflowing: j
    };
  }, [o, i, t.placeholder]), S = Je(() => {
    const b = d.current, w = v();
    if (!b || !w || Gh(w))
      return !1;
    const E = w.outerHeightStyle;
    return y.current != null && y.current !== E;
  }), C = h.useCallback(() => {
    const b = d.current, w = v();
    if (!b || !w || Gh(w))
      return;
    const E = w.outerHeightStyle;
    y.current !== E && (y.current = E, b.style.height = `${E}px`), b.style.overflow = w.overflowing ? "hidden" : "";
  }, [v]), g = h.useRef(-1);
  dt(() => {
    const b = nc(C), w = d == null ? void 0 : d.current;
    if (!w)
      return;
    const E = Vn(w);
    E.addEventListener("resize", b);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      S() && (k.unobserve(w), cancelAnimationFrame(g.current), C(), g.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      b.clear(), cancelAnimationFrame(g.current), E.removeEventListener("resize", b), k && k.disconnect();
    };
  }, [v, C, S]), dt(() => {
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
        ...Tk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), zp = /* @__PURE__ */ h.createContext(void 0);
function ji({
  props: e,
  states: t
}) {
  const n = h.useContext(zp), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Bp = tc();
function eo() {
  const e = Qu(Bp);
  return e[or] || e;
}
function Pk(e) {
  return /* @__PURE__ */ c.jsx(D0, {
    ...e,
    defaultTheme: Bp,
    themeId: or
  });
}
function c1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const vn = (e) => c1(e) && e !== "classes", H = K0({
  themeId: or,
  defaultTheme: Bp,
  rootShouldForwardProp: vn
});
function Ik(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ c.jsx(Pk, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const we = y2;
function xe(e) {
  return p2(e);
}
function er(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Yh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Va(e, t = !1) {
  return e && (Yh(e.value) && e.value !== "" || t && Yh(e.defaultValue) && e.defaultValue !== "");
}
function Mk(e) {
  return e.startAdornment;
}
function $k(e) {
  return ye("MuiInputBase", e);
}
const an = pe("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), jk = {
  transition: "none"
};
function Ok(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const _p = (e) => e.scrollTop, d1 = {}, Ak = ["all"], Nk = {};
function Cn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function f1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Ha(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = d1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Fp(e, t) {
  var r;
  const n = t ?? jk;
  return Ok((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function xt(e, t = Ak, n = Nk) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Fp(e);
  if (r === void 0)
    return o ?? d1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Qh;
const of = "mui-auto-fill", Ka = "mui-auto-fill-cancel", rc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ce(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, oc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, Lk = (e) => {
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
    root: ["root", `color${ce(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", y && y !== "medium" && `size${ce(y)}`, d && "multiline", f && "adornedStart", i && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return ve(S, $k, t);
}, ic = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rc
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
}))), sc = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: oc
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
        animationName: Ka,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: of
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
})), Xh = Ik({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${of}`]: {
    from: {
      animationName: of
    }
  },
  [`@keyframes ${Ka}`]: {
    from: {
      animationName: Ka
    }
  }
}), Dp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    onChange: L,
    onClick: $,
    onFocus: A,
    onKeyDown: x,
    onKeyUp: j,
    placeholder: P,
    readOnly: O,
    renderSuffix: N,
    rows: M,
    size: z,
    slotProps: F = {},
    slots: U = {},
    startAdornment: W,
    type: Q = "text",
    value: G,
    ...X
  } = r, K = m.value != null ? m.value : G, {
    current: q
  } = h.useRef(K != null), _ = h.useRef(), ne = h.useCallback((se) => {
  }, []), re = pt(_, b, m.ref, ne), [ke, me] = h.useState(!1), [de, fe] = ji({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  de.focused = fe ? fe.focused : ke, h.useEffect(() => {
    !fe && p && ke && (me(!1), I && I());
  }, [fe, p, ke, I]);
  const Me = fe && fe.onFilled, Be = fe && fe.onEmpty, Pe = h.useCallback((se) => {
    Va(se) ? Me && Me() : Be && Be();
  }, [Me, Be]);
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
    const ae = gt(se), Ge = er(ae), ot = Ge == null || Ge === ae.body || Ge === ae.documentElement;
    se === Ge ? fe && fe.onFocus ? fe.onFocus() : me(!0) : ot && se.focus();
  }, [l]);
  const $e = (se) => {
    A && A(se), m.onFocus && m.onFocus(se), fe && fe.onFocus ? fe.onFocus(se) : me(!0);
  }, he = (se) => {
    I && I(se), m.onBlur && m.onBlur(se), fe && fe.onBlur ? fe.onBlur(se) : me(!1);
  }, je = (se, ...ae) => {
    if (!q) {
      const Ge = se.target || _.current;
      if (Ge == null)
        throw new Error(Rr(1));
      Pe({
        value: Ge.value
      });
    }
    m.onChange && m.onChange(se, ...ae), L && L(se, ...ae);
  };
  h.useEffect(() => {
    Pe(_.current);
  }, []);
  const et = (se) => {
    _.current && se.currentTarget === se.target && _.current.focus(), $ && $(se);
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
  }, Xe = Ek);
  const qe = (se) => {
    Pe(se.animationName === Ka ? _.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    fe && fe.setAdornedStart(!!W);
  }, [fe, W]);
  const D = {
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
    startAdornment: W,
    type: Q
  }, le = Lk(D), ie = U.root || ic, oe = F.root || {}, Ae = U.input || sc;
  return Fe = {
    ...Fe,
    ...F.input
  }, /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [!y && typeof Xh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Qh || (Qh = /* @__PURE__ */ c.jsx(Xh, {}))), /* @__PURE__ */ c.jsxs(ie, {
      ...oe,
      ref: n,
      onClick: et,
      ...X,
      ...!Ua(ie) && {
        ownerState: {
          ...D,
          ...oe.ownerState
        }
      },
      className: te(le.root, oe.className, a, O && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ c.jsx(zp.Provider, {
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
          ...!Ua(Ae) && {
            as: Xe,
            ownerState: {
              ...D,
              ...Fe.ownerState
            }
          },
          ref: re,
          className: te(le.input, Fe.className, O && "MuiInputBase-readOnly"),
          onBlur: he,
          onChange: je,
          onFocus: $e
        })
      }), f, N ? N({
        ...de,
        startAdornment: W
      }) : null]
    })]
  });
});
function zk(e) {
  return ye("MuiFilledInput", e);
}
const io = {
  ...an,
  ...pe("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Bk(e) {
  return ye("MuiFormHelperText", e);
}
const qh = pe("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function _k(e) {
  return ye("MuiFormLabel", e);
}
const vs = pe("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function Fk(e) {
  return ye("MuiInput", e);
}
const Gi = {
  ...an,
  ...pe("MuiInput", ["root", "underline", "input"])
};
function Dk(e) {
  return ye("MuiMenuItem", e);
}
const Yi = pe("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function Wk(e) {
  return ye("MuiNativeSelect", e);
}
const Wp = pe("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Uk(e) {
  return ye("MuiOutlinedInput", e);
}
const Qn = {
  ...an,
  ...pe("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function Vk({
  theme: e,
  ...t
}) {
  const n = or in e ? e[or] : void 0;
  return /* @__PURE__ */ c.jsx(q0, {
    ...t,
    themeId: n ? or : void 0,
    theme: n || e
  });
}
const Nl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Hk
} = T2({
  themeId: or,
  // @ts-ignore ignore module augmentation tests
  theme: () => tc({
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
      typography: s1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return To({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Kk = Hk;
function Gk({
  theme: e,
  ...t
}) {
  const n = h.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = or in e ? e[or] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ c.jsx(Vk, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ c.jsx(Kk, {
    theme: e,
    ...t
  });
}
function Zh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Yk(e) {
  return ye("MuiSvgIcon", e);
}
pe("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Qk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ce(t)}`, `fontSize${ce(n)}`]
  };
  return ve(o, Yk, r);
}, Xk = H("svg", {
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
})), sf = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  const g = Qk(S);
  return /* @__PURE__ */ c.jsxs(Xk, {
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
sf.muiName = "SvgIcon";
function Ke(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ c.jsx(sf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = sf.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
function lf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function af(e) {
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
function p1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function qk(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      p1(u, l[u]) && typeof s[u] == "function" && (a[u] = (...d) => {
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
const Jh = {};
function Up(e, t) {
  const n = h.useRef(Jh);
  return n.current === Jh && (n.current = e(t)), n;
}
function Zk(e) {
  const t = Up(() => Jk(e)).current;
  return t.next = e, dt(t.effect), t;
}
function Jk(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const eg = ly.createContext(null);
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
function m1(e) {
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
  } = e, w = h.useContext(eg), E = w && !w.isMounting ? r : n, [k, R] = h.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = h.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const I = h.useRef(t && E), L = h.useRef(!1), $ = h.useRef(null), A = h.useRef(k), x = h.useRef(!1), j = h.useRef(u), P = Zk({
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
  }, []), N = h.useCallback((W) => {
    let Q = !0;
    const G = () => {
      Q && (Q = !1, $.current = null, W());
    };
    return G.cancel = () => {
      Q = !1;
    }, $.current = G, G;
  }, []), M = h.useCallback((W, Q) => {
    var Be, Pe;
    let G;
    const X = () => {
      G !== void 0 && (clearTimeout(G), G = void 0);
    }, K = N(() => {
      X(), T.current = W, R(W);
    }), q = K.cancel;
    K.cancel = () => {
      X(), q();
    };
    const _ = P.current.nodeRef.current, ne = P.current.addEndListener, re = P.current.getAutoTimeout !== void 0, ke = (Pe = (Be = P.current).getAutoTimeout) == null ? void 0 : Pe.call(Be), me = tT({
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
  }, [N, P]), z = h.useCallback((W) => {
    var X;
    const Q = P.current, G = Q.parentGroup ? Q.parentGroup.isMounting : W;
    if (x.current = G, !W && !Q.enter) {
      T.current = "entered", R("entered");
      return;
    }
    j.current = Q.reduceMotion, (X = Q.onEnter) == null || X.call(Q, G), T.current = "entering", R("entering");
  }, [P]), F = h.useCallback(() => {
    var Q;
    const W = P.current;
    if (!W.exit) {
      T.current = "exited", R("exited");
      return;
    }
    j.current = W.reduceMotion, (Q = W.onExit) == null || Q.call(W), T.current = "exiting", R("exiting");
  }, [P]), U = h.useCallback((W, Q) => {
    if (O(), Q === "entering") {
      const G = P.current;
      if (G.mountOnEnter || G.unmountOnExit) {
        const X = G.nodeRef.current;
        X && _p(X);
      }
      z(W);
    } else
      F();
  }, [O, z, F, P]);
  return dt(() => (L.current = !0, I.current && (I.current = !1, U(!0, "entering")), () => {
    L.current = !1, O();
  }), [O, U]), dt(() => {
    if (!L.current)
      return;
    const W = T.current;
    t ? W !== "entering" && W !== "entered" && U(!1, "entering") : W === "entering" || W === "entered" ? U(!1, "exiting") : W === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, U]), dt(() => {
    var X, K, q, _;
    if (k === "unmounted" || A.current === "unmounted") {
      A.current = k;
      return;
    }
    const Q = A.current !== k;
    Q && (A.current = k);
    const G = P.current;
    k === "entering" ? (Q && ((X = G.onEntering) == null || X.call(G, x.current)), $.current === null && T.current === k && M("entered", "entering")) : k === "exiting" ? (Q && ((K = G.onExiting) == null || K.call(G)), $.current === null && T.current === k && M("exited", "exiting")) : k === "entered" && Q ? (q = G.onEntered) == null || q.call(G, x.current) : k === "exited" && Q && ((_ = G.onExited) == null || _.call(G));
  }, [P, M, k]), k === "unmounted" ? null : /* @__PURE__ */ c.jsx(eg.Provider, {
    value: null,
    children: m(k, b)
  });
}
const h1 = "(prefers-reduced-motion: reduce)", nT = 0, rT = "0ms", oT = () => {
}, tg = () => !1, iT = () => !0, sT = () => oT;
function lT(e) {
  const [t, n] = h.useState(() => ({
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
    const i = window.matchMedia(h1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const aT = {
  ...ha
}, g1 = aT.useSyncExternalStore;
function uT(e) {
  const t = e ? iT : tg, [n, r] = h.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [tg, sT];
    const o = window.matchMedia(h1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return g1(r, n, t);
}
const cT = g1 !== void 0 ? uT : lT;
function lc(e, t) {
  const n = cT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return h.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: nT,
        delay: rT
      } : o;
    }
  }), [r]);
}
function y1(e, t, n) {
  return e === void 0 || Ua(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function v1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ga(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    p1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function ng(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function x1(e) {
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
  const s = Ga({
    ...o,
    ...r
  }), l = ng(r), a = ng(o), u = t(s), d = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
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
  } = i, f = d[e] || r, v = v1(p[e], o), {
    props: {
      component: S,
      ...C
    },
    internalRef: g
  } = x1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: v
  }), m = pt(g, v == null ? void 0 : v.ref, t.ref), b = e === "root" ? S || u : S, w = y1(f, {
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
function dT(e) {
  return ye("MuiPaper", e);
}
pe("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const fT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ve(i, dT, o);
}, pT = H("div", {
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
}))), lr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var f;
  const r = xe({
    props: t,
    name: "MuiPaper"
  }), o = eo(), {
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
  }, y = fT(p);
  return /* @__PURE__ */ c.jsx(pT, {
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
          "--Paper-overlay": `linear-gradient(${Ys("#fff", rf(l))}, ${Ys("#fff", rf(l))})`
        }
      },
      ...d.style
    }
  });
});
function Ya(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function mT(e) {
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
const hT = {};
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
  } = e, d = h.useRef(null), p = s === !0, y = mT({
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
    getButtonProps: h.useCallback((C = hT) => {
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
class Qa {
  constructor() {
    Li(this, "mountEffect", () => {
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
    return new Qa();
  }
  static use() {
    const t = Up(Qa.create).current, [n, r] = h.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, h.useEffect(t.mountEffect, [n]), t;
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
  return Qa.use();
}
function vT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const xT = [];
function b1(e) {
  h.useEffect(e, xT);
}
class ac {
  constructor() {
    Li(this, "currentId", null);
    Li(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Li(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new ac();
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
function tr() {
  const e = Up(ac.create).current;
  return b1(e.disposeEffect), e;
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
  } = e, [d, p] = h.useState(!1), y = tr(), f = h.useRef(!1), v = h.useRef(a);
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
const Yt = pe("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), uf = 550, ST = 80, Ll = {}, rg = [], wT = () => {
};
function Qc(e, t) {
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
const kT = sl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, TT = sl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, RT = sl`
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
function ET(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Ks`
    &.${Yt.rippleVisible} {
      animation-name: ${kT};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Yt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Yt.childLeaving} {
      animation-name: ${TT};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Yt.childPulsate} {
      animation-name: ${RT};
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
}) => ET(e)}
`, MT = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTouchRipple"
  }), o = eo(), i = lc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Ll,
    className: a,
    ...u
  } = r, [d, p] = h.useState({
    items: rg,
    order: rg
  }), y = d.items, f = h.useRef(0), v = h.useRef(null), S = h.useRef(!1);
  b1(() => (S.current = !0, () => {
    S.current = !1;
  })), h.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [y]);
  const C = h.useRef(!1), g = tr(), m = h.useRef(null), b = h.useRef(null), w = Je(($) => {
    S.current && p((A) => {
      const x = A.items.filter((P) => P.key !== $), j = Qc(A.order.filter((P) => P !== $), x.filter((P) => !P.exiting).map((P) => P.key));
      return {
        items: x,
        order: j
      };
    });
  }), E = Je(($) => {
    const {
      pulsate: A,
      rippleX: x,
      rippleY: j,
      rippleSize: P,
      cb: O
    } = $, N = f.current;
    f.current += 1, p((M) => {
      const z = [...M.items, {
        key: N,
        pulsate: A,
        rippleX: x,
        rippleY: j,
        rippleSize: P,
        exiting: !1
      }];
      return {
        items: z,
        order: Qc(M.order, z.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), v.current = O;
  }), k = Je(($ = Ll, A = Ll, x = wT) => {
    const {
      pulsate: j = !1,
      center: P = s || A.pulsate,
      fakeElement: O = !1
      // Used only by tests.
    } = A;
    if (($ == null ? void 0 : $.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    ($ == null ? void 0 : $.type) === "touchstart" && (C.current = !0);
    const N = O ? null : b.current, {
      rippleX: M,
      rippleY: z,
      rippleSize: F
    } = CT({
      event: $,
      element: N,
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
    }, g.start(ST, () => {
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
  }), T = Je(($, A) => {
    if (g.clear(), ($ == null ? void 0 : $.type) === "touchend" && m.current) {
      m.current(), m.current = null, g.start(0, () => {
        T($, A);
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
        order: Qc(x.order, P.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), v.current = A;
  });
  h.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const I = new Map(y.map(($) => [$.key, $])), L = d.order.map(($) => I.get($)).filter(Boolean);
  return /* @__PURE__ */ c.jsx(PT, {
    className: te(Yt.root, l.root, a),
    ref: b,
    ...u,
    children: L.map(($) => /* @__PURE__ */ c.jsx(IT, {
      classes: {
        ripple: te(l.ripple, Yt.ripple),
        rippleVisible: te(l.rippleVisible, Yt.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Yt.ripplePulsate),
        child: te(l.child, Yt.child),
        childLeaving: te(l.childLeaving, Yt.childLeaving),
        childPulsate: te(l.childPulsate, Yt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : uf,
      pulsate: $.pulsate,
      rippleX: $.rippleX,
      rippleY: $.rippleY,
      rippleSize: $.rippleSize,
      in: !$.exiting,
      onExited: () => w($.key)
    }, $.key))
  });
});
function $T(e) {
  return ye("MuiButtonBase", e);
}
const cf = pe("MuiButtonBase", ["root", "disabled", "focusVisible"]), jT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = ve({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, $T, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, OT = H("button", {
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
  [`&.${cf.disabled}`]: {
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
      ...Y2,
      [`&.${cf.focusVisible}`]: e.focusVisible
    }
  }]
}))), Ro = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    onKeyDown: L,
    onKeyUp: $,
    onMouseDown: A,
    onMouseLeave: x,
    onMouseUp: j,
    onTouchEnd: P,
    onTouchMove: O,
    onTouchStart: N,
    tabIndex: M = 0,
    TouchRippleProps: z,
    touchRippleRef: F,
    type: U,
    ...W
  } = r, Q = !!(W.href || W.to), G = !!W.formAction;
  let X = a;
  X === "button" && Q && (X = m);
  const q = b ?? (typeof X == "string" ? X === "button" : C ?? !1), _ = yT(), ne = pt(_.ref, F), [re, ke] = h.useState(!1);
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
  } = gT({
    nativeButton: q,
    disabled: u,
    type: U,
    hasFormAction: G,
    tabIndex: M,
    onBeforeKeyDown: me,
    onBeforeKeyUp: de
  }), {
    onClick: Be,
    onKeyDown: Pe,
    onKeyUp: $e,
    ...he
  } = fe({
    onClick: E,
    onKeyDown: L,
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
  const et = dr(_, "start", A, p), Xe = dr(_, "stop", k, p), Fe = dr(_, "stop", R, p), qe = dr(_, "stop", j, p), D = dr(_, "stop", (De) => {
    re && De.preventDefault(), x && x(De);
  }, p), le = dr(_, "start", N, p), ie = dr(_, "stop", P, p), oe = dr(_, "stop", O, p), Ae = dr(_, "stop", (De) => {
    Ya(De.target) || ke(!1), w && w(De);
  }, !1), se = Je((De) => {
    Me.current || (Me.current = De.currentTarget), !S && Ya(De.target) && (ke(!0), I && I(De)), T && T(De);
  }), ae = {};
  Q && (ae.tabIndex = u ? -1 : M, u && (ae["aria-disabled"] = u), ae.type = U);
  const Ge = pt(n, Me), ot = {
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
  }, mt = jT(ot);
  return /* @__PURE__ */ c.jsxs(OT, {
    as: X,
    className: te(mt.root, l),
    ownerState: ot,
    onBlur: Ae,
    onClick: Be,
    onContextMenu: Xe,
    onFocus: se,
    onKeyDown: Pe,
    onKeyUp: $e,
    onMouseDown: et,
    onMouseLeave: D,
    onMouseUp: qe,
    onDragLeave: Fe,
    onTouchEnd: ie,
    onTouchMove: oe,
    onTouchStart: le,
    ref: Ge,
    ...Q ? ae : he,
    ...W,
    children: [s, je ? /* @__PURE__ */ c.jsx(MT, {
      ref: ne,
      center: i,
      ...z
    }) : null]
  });
});
function dr(e, t, n, r = !1) {
  return Je((o) => (n && n(o), r || e[t](o), !0));
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
function At(e = []) {
  return ([, t]) => t && NT(t, e);
}
function LT(e) {
  return ye("MuiAlert", e);
}
const og = pe("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function zT(e) {
  return ye("MuiCircularProgress", e);
}
pe("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const An = 44, df = sl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ff = sl`
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
`, BT = typeof df != "string" ? Ks`
        animation: ${df} 1.4s linear infinite;
      ` : null, _T = typeof ff != "string" ? Ks`
        animation: ${ff} 1.4s ease-in-out infinite;
      ` : null, FT = (e) => {
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
  return ve(i, zT, t);
}, DT = H("span", {
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
  const t = Fp(e, {
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
      style: BT || {
        animation: `${df} 1.4s linear infinite`
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
})(we(({
  theme: e
}) => {
  const t = Fp(e, {
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
      style: _T || {
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
})), VT = H("circle", {
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
  }, b = FT(m), w = {}, E = {}, k = {};
  if (v === "determinate") {
    const R = 2 * Math.PI * ((An - y) / 2), T = g - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((g - f) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ c.jsx(DT, {
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
    children: /* @__PURE__ */ c.jsxs(WT, {
      className: b.svg,
      ownerState: m,
      viewBox: `${An / 2} ${An / 2} ${An} ${An}`,
      children: [l ? /* @__PURE__ */ c.jsx(VT, {
        className: b.track,
        ownerState: m,
        cx: An,
        cy: An,
        r: (An - y) / 2,
        fill: "none",
        strokeWidth: y,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ c.jsx(UT, {
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
function HT(e) {
  return ye("MuiIconButton", e);
}
const ig = pe("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), KT = (e) => {
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
  return ve(l, HT, t);
}, GT = H(Ro, {
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
  [`&.${ig.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ig.loading}`]: {
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
})), zn = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, S = Er(p), C = f ?? /* @__PURE__ */ c.jsx(xs, {
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
  }, m = KT(g);
  return /* @__PURE__ */ c.jsxs(GT, {
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
      children: /* @__PURE__ */ c.jsx(YT, {
        className: m.loadingIndicator,
        ownerState: g,
        children: y && C
      })
    }), i]
  });
}), QT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), XT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), qT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), ZT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), JT = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), eR = (e) => {
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
  return ve(i, LT, o);
}, tR = H(lr, {
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
        [`& .${og.icon}`]: e.vars ? {
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
        [`& .${og.icon}`]: e.vars ? {
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
        ...e.focusVisible && r1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
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
}), sg = {
  success: /* @__PURE__ */ c.jsx(QT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ c.jsx(XT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ c.jsx(qT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ c.jsx(ZT, {
    fontSize: "inherit"
  })
}, lg = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    iconMapping: d = sg,
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
  }, b = eR(m), w = {
    slots: S,
    slotProps: v
  }, [E, k] = Se("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: te(b.root, s),
    elementType: tR,
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
    elementType: nR,
    externalForwardedProps: w,
    ownerState: m
  }), [I, L] = Se("message", {
    className: b.message,
    elementType: rR,
    externalForwardedProps: w,
    ownerState: m
  }), [$, A] = Se("action", {
    className: b.action,
    elementType: oR,
    externalForwardedProps: w,
    ownerState: m
  }), [x, j] = Se("closeButton", {
    elementType: zn,
    externalForwardedProps: w,
    ownerState: m
  }), [P, O] = Se("closeIcon", {
    elementType: JT,
    externalForwardedProps: w,
    ownerState: m
  });
  return /* @__PURE__ */ c.jsxs(E, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ c.jsx(R, {
      ...T,
      children: u || d[f] || sg[f]
    }) : null, /* @__PURE__ */ c.jsx(I, {
      ...L,
      children: i
    }), o != null ? /* @__PURE__ */ c.jsx($, {
      ...A,
      children: o
    }) : null, o == null && p ? /* @__PURE__ */ c.jsx($, {
      ...A,
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
function iR(e) {
  return ye("MuiTypography", e);
}
pe("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const sR = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ce(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ve(s, iR, i);
}, lR = H("span", {
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
    })), ...Object.entries(e.palette).filter(At()).map(([n]) => ({
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
})), ag = {
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
}, Ee = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    variantMapping: p = ag,
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
  }, v = l || p[d] || ag[d] || "span", S = sR(f);
  return /* @__PURE__ */ c.jsx(lR, {
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
function yo(e, t) {
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
var rn = "top", In = "bottom", Mn = "right", on = "left", Vp = "auto", ul = [rn, In, Mn, on], Ci = "start", Qs = "end", aR = "clippingParents", S1 = "viewport", Qi = "popper", uR = "reference", ug = /* @__PURE__ */ ul.reduce(function(e, t) {
  return e.concat([t + "-" + Ci, t + "-" + Qs]);
}, []), w1 = /* @__PURE__ */ [].concat(ul, [Vp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ci, t + "-" + Qs]);
}, []), cR = "beforeRead", dR = "read", fR = "afterRead", pR = "beforeMain", mR = "main", hR = "afterMain", gR = "beforeWrite", yR = "write", vR = "afterWrite", xR = [cR, dR, fR, pR, mR, hR, gR, yR, vR];
function ar(e) {
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
function Eo(e) {
  var t = mn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Rn(e) {
  var t = mn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Hp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function bR(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Rn(i) || !ar(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
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
      !Rn(o) || !ar(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
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
function sr(e) {
  return e.split("-")[0];
}
var vo = Math.max, Xa = Math.min, ki = Math.round;
function pf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function C1() {
  return !/^((?!chrome|android).)*safari/i.test(pf());
}
function Ti(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Rn(e) && (o = e.offsetWidth > 0 && ki(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ki(r.height) / e.offsetHeight || 1);
  var s = Eo(e) ? mn(e) : window, l = s.visualViewport, a = !C1() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, y = r.height / i;
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
function Kp(e) {
  var t = Ti(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function k1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Hp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Pr(e) {
  return mn(e).getComputedStyle(e);
}
function CR(e) {
  return ["table", "td", "th"].indexOf(ar(e)) >= 0;
}
function to(e) {
  return ((Eo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function uc(e) {
  return ar(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Hp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    to(e)
  );
}
function cg(e) {
  return !Rn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pr(e).position === "fixed" ? null : e.offsetParent;
}
function kR(e) {
  var t = /firefox/i.test(pf()), n = /Trident/i.test(pf());
  if (n && Rn(e)) {
    var r = Pr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = uc(e);
  for (Hp(o) && (o = o.host); Rn(o) && ["html", "body"].indexOf(ar(o)) < 0; ) {
    var i = Pr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function cl(e) {
  for (var t = mn(e), n = cg(e); n && CR(n) && Pr(n).position === "static"; )
    n = cg(n);
  return n && (ar(n) === "html" || ar(n) === "body" && Pr(n).position === "static") ? t : n || kR(e) || t;
}
function Gp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function bs(e, t, n) {
  return vo(e, Xa(t, n));
}
function TR(e, t, n) {
  var r = bs(e, t, n);
  return r > n ? n : r;
}
function T1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function R1(e) {
  return Object.assign({}, T1(), e);
}
function E1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var RR = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, R1(typeof t != "number" ? t : E1(t, ul));
};
function ER(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = sr(n.placement), a = Gp(l), u = [on, Mn].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = RR(o.padding, n), y = Kp(i), f = a === "y" ? rn : on, v = a === "y" ? In : Mn, S = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], g = cl(i), m = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, b = S / 2 - C / 2, w = p[f], E = m - y[d] - p[v], k = m / 2 - y[d] / 2 + b, R = bs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function PR(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || k1(t.elements.popper, o) && (t.elements.arrow = o));
}
const IR = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ER,
  effect: PR,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ri(e) {
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
    x: ki(n * o) / o || 0,
    y: ki(r * o) / o || 0
  };
}
function dg(e) {
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
    if (k === mn(n) && (k = to(n), Pr(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === rn || (o === on || o === Mn) && i === Qs) {
      w = In;
      var I = p && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      S -= I - r.height, S *= a ? 1 : -1;
    }
    if (o === on || (o === rn || o === In) && i === Qs) {
      b = Mn;
      var L = p && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      f -= L - r.width, f *= a ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, u && MR), A = d === !0 ? $R({
    x: f,
    y: S
  }, mn(n)) : {
    x: f,
    y: S
  };
  if (f = A.x, S = A.y, a) {
    var x;
    return Object.assign({}, $, (x = {}, x[w] = m ? "0" : "", x[b] = g ? "0" : "", x.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + S + "px)" : "translate3d(" + f + "px, " + S + "px, 0)", x));
  }
  return Object.assign({}, $, (t = {}, t[w] = m ? S + "px" : "", t[b] = g ? f + "px" : "", t.transform = "", t));
}
function jR(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: sr(t.placement),
    variation: Ri(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dg(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const OR = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: jR,
  data: {}
};
var zl = {
  passive: !0
};
function AR(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = mn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, zl);
  }), l && a.addEventListener("resize", n.update, zl), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zl);
    }), l && a.removeEventListener("resize", n.update, zl);
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
var LR = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function pa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return LR[t];
  });
}
var zR = {
  start: "end",
  end: "start"
};
function fg(e) {
  return e.replace(/start|end/g, function(t) {
    return zR[t];
  });
}
function Yp(e) {
  var t = mn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Qp(e) {
  return Ti(to(e)).left + Yp(e).scrollLeft;
}
function BR(e, t) {
  var n = mn(e), r = to(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = C1();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Qp(e),
    y: a
  };
}
function _R(e) {
  var t, n = to(e), r = Yp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = vo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = vo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Qp(e), a = -r.scrollTop;
  return Pr(o || n).direction === "rtl" && (l += vo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Xp(e) {
  var t = Pr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function P1(e) {
  return ["html", "body", "#document"].indexOf(ar(e)) >= 0 ? e.ownerDocument.body : Rn(e) && Xp(e) ? e : P1(uc(e));
}
function Ss(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = P1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = mn(r), s = o ? [i].concat(i.visualViewport || [], Xp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ss(uc(s)))
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
function FR(e, t) {
  var n = Ti(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function pg(e, t, n) {
  return t === S1 ? mf(BR(e, n)) : Eo(t) ? FR(t, n) : mf(_R(to(e)));
}
function DR(e) {
  var t = Ss(uc(e)), n = ["absolute", "fixed"].indexOf(Pr(e).position) >= 0, r = n && Rn(e) ? cl(e) : e;
  return Eo(r) ? t.filter(function(o) {
    return Eo(o) && k1(o, r) && ar(o) !== "body";
  }) : [];
}
function WR(e, t, n, r) {
  var o = t === "clippingParents" ? DR(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var d = pg(e, u, r);
    return a.top = vo(d.top, a.top), a.right = Xa(d.right, a.right), a.bottom = Xa(d.bottom, a.bottom), a.left = vo(d.left, a.left), a;
  }, pg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function I1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? sr(r) : null, i = r ? Ri(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
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
  var u = o ? Gp(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Ci:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? aR : l, u = n.rootBoundary, d = u === void 0 ? S1 : u, p = n.elementContext, y = p === void 0 ? Qi : p, f = n.altBoundary, v = f === void 0 ? !1 : f, S = n.padding, C = S === void 0 ? 0 : S, g = R1(typeof C != "number" ? C : E1(C, ul)), m = y === Qi ? uR : Qi, b = e.rects.popper, w = e.elements[v ? m : y], E = WR(Eo(w) ? w : w.contextElement || to(e.elements.popper), a, d, s), k = Ti(e.elements.reference), R = I1({
    reference: k,
    element: b,
    placement: o
  }), T = mf(Object.assign({}, b, R)), I = y === Qi ? T : k, L = {
    top: E.top - I.top + g.top,
    bottom: I.bottom - E.bottom + g.bottom,
    left: E.left - I.left + g.left,
    right: I.right - E.right + g.right
  }, $ = e.modifiersData.offset;
  if (y === Qi && $) {
    var A = $[o];
    Object.keys(L).forEach(function(x) {
      var j = [Mn, In].indexOf(x) >= 0 ? 1 : -1, P = [rn, In].indexOf(x) >= 0 ? "y" : "x";
      L[x] += A[P] * j;
    });
  }
  return L;
}
function UR(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? w1 : a, d = Ri(r), p = d ? l ? ug : ug.filter(function(v) {
    return Ri(v) === d;
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
    })[sr(S)], v;
  }, {});
  return Object.keys(f).sort(function(v, S) {
    return f[v] - f[S];
  });
}
function VR(e) {
  if (sr(e) === Vp)
    return [];
  var t = pa(e);
  return [fg(e), t, fg(t)];
}
function HR(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, p = n.rootBoundary, y = n.altBoundary, f = n.flipVariations, v = f === void 0 ? !0 : f, S = n.allowedAutoPlacements, C = t.options.placement, g = sr(C), m = g === C, b = a || (m || !v ? [pa(C)] : VR(C)), w = [C].concat(b).reduce(function(G, X) {
      return G.concat(sr(X) === Vp ? UR(t, {
        placement: X,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: v,
        allowedAutoPlacements: S
      }) : X);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, I = w[0], L = 0; L < w.length; L++) {
      var $ = w[L], A = sr($), x = Ri($) === Ci, j = [rn, In].indexOf(A) >= 0, P = j ? "width" : "height", O = Xs(t, {
        placement: $,
        boundary: d,
        rootBoundary: p,
        altBoundary: y,
        padding: u
      }), N = j ? x ? Mn : on : x ? In : rn;
      E[P] > k[P] && (N = pa(N));
      var M = pa(N), z = [];
      if (i && z.push(O[A] <= 0), l && z.push(O[N] <= 0, O[M] <= 0), z.every(function(G) {
        return G;
      })) {
        I = $, T = !1;
        break;
      }
      R.set($, z);
    }
    if (T)
      for (var F = v ? 3 : 1, U = function(X) {
        var K = w.find(function(q) {
          var _ = R.get(q);
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
function mg(e, t, n) {
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
function hg(e) {
  return [rn, Mn, In, on].some(function(t) {
    return e[t] >= 0;
  });
}
function GR(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Xs(t, {
    elementContext: "reference"
  }), l = Xs(t, {
    altBoundary: !0
  }), a = mg(s, r), u = mg(l, o, i), d = hg(a), p = hg(u);
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
const YR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: GR
};
function QR(e, t, n) {
  var r = sr(e), o = [on, rn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
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
function XR(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = w1.reduce(function(d, p) {
    return d[p] = QR(p, t.rects, i), d;
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
function ZR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = I1({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const JR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ZR,
  data: {}
};
function eE(e) {
  return e === "x" ? "y" : "x";
}
function tE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, p = n.padding, y = n.tether, f = y === void 0 ? !0 : y, v = n.tetherOffset, S = v === void 0 ? 0 : v, C = Xs(t, {
    boundary: a,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), g = sr(t.placement), m = Ri(t.placement), b = !m, w = Gp(g), E = eE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, I = typeof S == "function" ? S(Object.assign({}, t.rects, {
    placement: t.placement
  })) : S, L = typeof I == "number" ? {
    mainAxis: I,
    altAxis: I
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, I), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var x, j = w === "y" ? rn : on, P = w === "y" ? In : Mn, O = w === "y" ? "height" : "width", N = k[w], M = N + C[j], z = N - C[P], F = f ? -T[O] / 2 : 0, U = m === Ci ? R[O] : T[O], W = m === Ci ? -T[O] : -R[O], Q = t.elements.arrow, G = f && Q ? Kp(Q) : {
        width: 0,
        height: 0
      }, X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : T1(), K = X[j], q = X[P], _ = bs(0, R[O], G[O]), ne = b ? R[O] / 2 - F - _ - K - L.mainAxis : U - _ - K - L.mainAxis, re = b ? -R[O] / 2 + F + _ + q + L.mainAxis : W + _ + q + L.mainAxis, ke = t.elements.arrow && cl(t.elements.arrow), me = ke ? w === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, de = (x = $ == null ? void 0 : $[w]) != null ? x : 0, fe = N + ne - de - me, Me = N + re - de, Be = bs(f ? Xa(M, fe) : M, N, f ? vo(z, Me) : z);
      k[w] = Be, A[w] = Be - N;
    }
    if (l) {
      var Pe, $e = w === "x" ? rn : on, he = w === "x" ? In : Mn, je = k[E], et = E === "y" ? "height" : "width", Xe = je + C[$e], Fe = je - C[he], qe = [rn, on].indexOf(g) !== -1, D = (Pe = $ == null ? void 0 : $[E]) != null ? Pe : 0, le = qe ? Xe : je - R[et] - T[et] - D + L.altAxis, ie = qe ? je + R[et] + T[et] - D - L.altAxis : Fe, oe = f && qe ? TR(le, je, ie) : bs(f ? le : Xe, je, f ? ie : Fe);
      k[E] = oe, A[E] = oe - je;
    }
    t.modifiersData[r] = A;
  }
}
const nE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: tE,
  requiresIfExists: ["offset"]
};
function rE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function oE(e) {
  return e === mn(e) || !Rn(e) ? Yp(e) : rE(e);
}
function iE(e) {
  var t = e.getBoundingClientRect(), n = ki(t.width) / e.offsetWidth || 1, r = ki(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function sE(e, t, n) {
  n === void 0 && (n = !1);
  var r = Rn(t), o = Rn(t) && iE(t), i = to(t), s = Ti(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ar(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Xp(i)) && (l = oE(t)), Rn(t) ? (a = Ti(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Qp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function lE(e) {
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
function aE(e) {
  var t = lE(e);
  return xR.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function uE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function cE(e) {
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
var gg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function yg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function dE(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? gg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gg, i),
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
          reference: Eo(l) ? Ss(l) : l.contextElement ? Ss(l.contextElement) : [],
          popper: Ss(a)
        };
        var b = aE(cE([].concat(r, d.options.modifiers)));
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
          if (yg(m, b)) {
            d.rects = {
              reference: sE(m, cl(b), d.options.strategy === "fixed"),
              popper: Kp(b)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
              return d.modifiersData[L.name] = Object.assign({}, L.data);
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
      update: uE(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        S(), y = !0;
      }
    };
    if (!yg(l, a))
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
var fE = [NR, JR, OR, wR, qR, KR, nE, IR, YR], pE = /* @__PURE__ */ dE({
  defaultModifiers: fE
});
function Ei(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : v1(n, r), {
    props: l,
    internalRef: a
  } = x1({
    ...i,
    externalSlotProps: s
  }), u = pt(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return y1(t, {
    ...l,
    ref: u
  }, r);
}
function Mo(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function mE(e) {
  return typeof e == "function" ? e() : e;
}
const M1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), a = pt(/* @__PURE__ */ h.isValidElement(r) ? Mo(r) : null, n);
  if (dt(() => {
    i || l(mE(o) || document.body);
  }, [o, i]), dt(() => {
    if (s && !i)
      return lf(n, s), () => {
        lf(n, null);
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
  return s && /* @__PURE__ */ c0.createPortal(r, s);
});
function hE(e) {
  return ye("MuiPopper", e);
}
pe("MuiPopper", ["root"]);
function gE(e, t) {
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
function $1(e) {
  return typeof e == "function" ? e() : e;
}
function yE(e) {
  return e.nodeType !== void 0;
}
const vE = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, hE, t);
}, xE = {}, bE = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = t, g = h.useRef(null), m = pt(g, n), b = h.useRef(null), w = pt(b, p), E = h.useRef(w);
  dt(() => {
    E.current = w;
  }, [w]), h.useImperativeHandle(p, () => b.current, []);
  const k = gE(u, i), [R, T] = h.useState(k), I = h.useMemo(() => $1(r), [r]);
  h.useEffect(() => {
    b.current && b.current.forceUpdate();
  }), dt(() => {
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
    const O = pE(I, g.current, {
      placement: k,
      ...d,
      modifiers: P
    });
    E.current(O);
    const N = g.current;
    return () => {
      if (N) {
        const {
          style: M
        } = N, z = M.position, F = M.top, U = M.left, W = M.transform;
        O.destroy(), M.position = z, M.top = F, M.left = U, M.transform = W;
      } else
        O.destroy();
      E.current(null);
    };
  }, [I, s, l, a, d, k]);
  const L = {
    placement: R
  };
  v !== null && (L.TransitionProps = v);
  const $ = vE(t), A = f.root ?? "div", x = Ei({
    elementType: A,
    externalSlotProps: y.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: $.root
  });
  return /* @__PURE__ */ c.jsx(A, {
    ...x,
    children: typeof o == "function" ? o(L) : o
  });
}), SE = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    popperOptions: y = xE,
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
    const L = $1(r);
    R = L && yE(L) ? gt(L).body : gt(null).body;
  }
  const T = !d && a && (!S || b) ? "none" : void 0, I = S ? {
    in: d,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ c.jsx(M1, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ c.jsx(bE, {
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
}), wE = H(SE, {
  name: "MuiPopper",
  slot: "Root"
})({}), j1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = Ju(), o = xe({
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
  return /* @__PURE__ */ c.jsx(wE, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: g,
    ...b,
    ref: n
  });
}), CE = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function kE(e) {
  return ye("MuiChip", e);
}
const _e = pe("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), TE = (e) => {
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
  return ve(a, kE, t);
}, RE = H("div", {
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
})), EE = H("span", {
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
function vg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const fr = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = R, L = h.useRef(null), $ = pt(L, n), A = (_) => {
    _.stopPropagation(), v(_);
  }, x = (_) => {
    _.currentTarget === _.target && vg(_) && _.preventDefault(), S && S(_);
  }, j = (_) => {
    _.currentTarget === _.target && v && vg(_) && v(_), C && C(_);
  }, P = s !== !1 && f ? !0 : s, O = P || v ? Ro : a || "div", N = {
    ...r,
    component: O,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(p) && p.props.color || l,
    onDelete: !!v,
    clickable: P,
    variant: m
  }, M = TE(N), z = O === Ro ? {
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
    onClick: A
  }) : /* @__PURE__ */ c.jsx(CE, {
    className: M.deleteIcon,
    onClick: A
  }));
  let U = null;
  o && /* @__PURE__ */ h.isValidElement(o) && (U = /* @__PURE__ */ h.cloneElement(o, {
    className: te(M.avatar, o.props.className)
  }));
  let W = null;
  p && /* @__PURE__ */ h.isValidElement(p) && (W = /* @__PURE__ */ h.cloneElement(p, {
    className: te(M.icon, p.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [G, X] = Se("root", {
    elementType: RE,
    externalForwardedProps: {
      ...Q,
      ...I
    },
    ownerState: N,
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
    elementType: EE,
    externalForwardedProps: Q,
    ownerState: N,
    className: M.label
  });
  return /* @__PURE__ */ c.jsxs(G, {
    as: O,
    ...X,
    children: [U || W, /* @__PURE__ */ c.jsx(K, {
      ...q,
      children: y
    }), F]
  });
}), PE = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), IE = {
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
}, ME = {
  opacity: 0,
  visibility: "hidden"
}, O1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = eo(), o = {
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
  } = t, w = lc(r.motion.reducedMotion, a), E = h.useRef(null), k = pt(E, Mo(l), n), R = Cn(E, f), T = Cn(E, (j, P) => {
    w.shouldReduceMotion || _p(j);
    const O = Ha({
      style: g,
      timeout: m,
      easing: u
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    j.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: O.easing,
      delay: N.delay
    }), p && p(j, P);
  }), I = Cn(E, y), L = Cn(E, C), $ = Cn(E, (j) => {
    const P = Ha({
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
  }), A = Cn(E, (j) => {
    j.style.transition = "", S && S(j);
  }), x = i ? (j) => {
    i(E.current, j);
  } : void 0;
  return /* @__PURE__ */ c.jsx(m1, {
    appear: s,
    in: d,
    nodeRef: E,
    onEnter: T,
    onEntered: I,
    onEntering: R,
    onExit: $,
    onExited: A,
    onExiting: L,
    addEndListener: x,
    reduceMotion: w.shouldReduceMotion,
    timeout: m,
    ...b,
    children: (j, {
      ownerState: P,
      ...O
    }) => {
      const N = f1(j, d, IE, ME, g, l.props.style);
      return /* @__PURE__ */ h.cloneElement(l, {
        style: N,
        ref: k,
        ...O
      });
    }
  });
});
function $E(e) {
  return ye("MuiBackdrop", e);
}
pe("MuiBackdrop", ["root", "invisible"]);
const jE = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ve({
    root: ["root", n && "invisible"]
  }, $E, t);
}, OE = H("div", {
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
}), A1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, v = jE(f), S = {
    component: s,
    slots: d,
    slotProps: u
  }, [C, g] = Se("root", {
    elementType: OE,
    externalForwardedProps: S,
    className: te(v.root, i),
    ownerState: f
  }), [m, b] = Se("transition", {
    elementType: O1,
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
}), AE = pe("MuiBox", ["root"]), NE = tc(), Ne = HC({
  themeId: or,
  defaultTheme: NE,
  defaultClassName: AE.root,
  generateClassName: W0.generate
});
function LE(e) {
  return ye("MuiButton", e);
}
const hr = pe("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), N1 = /* @__PURE__ */ h.createContext({}), L1 = /* @__PURE__ */ h.createContext(void 0), zE = (e) => {
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
  }, d = ve(u, LE, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, z1 = [{
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
}], BE = H(Ro, {
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
    [`&.${hr.disabled}`]: {
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
        [`&.${hr.focusVisible}`]: {
          ...e.focusVisible,
          boxShadow: (r = e.focusVisible) != null && r.boxShadow ? `${(e.vars || e).shadows[6]}, ${e.focusVisible.boxShadow}` : (e.vars || e).shadows[6]
        },
        [`&.${hr.disabled}`]: {
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
        [`&.${hr.disabled}`]: {
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
        [`&.${hr.focusVisible}`]: {
          boxShadow: ((o = e.focusVisible) == null ? void 0 : o.boxShadow) ?? "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${hr.disabled}`]: {
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
        [`&.${hr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), _E = H("span", {
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
  }, ...z1]
})), FE = H("span", {
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
  }, ...z1]
})), DE = H("span", {
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
})), xg = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), $t = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = h.useContext(N1), o = h.useContext(L1), i = wi(r, t), s = xe({
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
  } = s, L = Er(g), $ = b ?? /* @__PURE__ */ c.jsx(xs, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), A = {
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
  }, x = zE(A), j = (k || m && w === "start") && /* @__PURE__ */ c.jsx(_E, {
    className: x.startIcon,
    ownerState: A,
    children: k || /* @__PURE__ */ c.jsx(xg, {
      className: x.loadingIconPlaceholder,
      ownerState: A
    })
  }), P = (v || m && w === "end") && /* @__PURE__ */ c.jsx(FE, {
    className: x.endIcon,
    ownerState: A,
    children: v || /* @__PURE__ */ c.jsx(xg, {
      className: x.loadingIconPlaceholder,
      ownerState: A
    })
  }), O = o || "", N = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: x.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ c.jsx(DE, {
        className: x.loadingIndicator,
        ownerState: A,
        children: $
      })
    })
  ) : null, {
    root: M,
    ...z
  } = x;
  return /* @__PURE__ */ c.jsxs(BE, {
    ownerState: A,
    className: te(r.className, x.root, d, O),
    component: u,
    disabled: p || m,
    focusRipple: !f,
    focusVisibleClassName: te(x.focusVisible, S),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: m ? L : g,
    ...I,
    classes: z,
    children: [j, w !== "end" && N, l, w === "end" && N, P]
  });
});
function WE(e) {
  return h.Children.toArray(e).filter((t) => /* @__PURE__ */ h.isValidElement(t));
}
function UE(e) {
  return ye("MuiButtonGroup", e);
}
const Ce = pe("MuiButtonGroup", ["root", "contained", "outlined", "text", "disableElevation", "disabled", "firstButton", "fullWidth", "horizontal", "vertical", "colorPrimary", "colorSecondary", "grouped", "lastButton", "middleButton"]), VE = (e, t) => {
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
}, HE = (e) => {
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
  return ve(a, UE, t);
}, KE = H("div", {
  name: "MuiButtonGroup",
  slot: "Root",
  overridesResolver: VE
})(we(({
  theme: e
}) => ({
  display: "inline-flex",
  borderRadius: (e.vars || e).shape.borderRadius,
  ...e.focusVisible && {
    // paint the focused item above its siblings so they cannot cover the ring edges
    [`& .${Ce.grouped}.${hr.focusVisible}`]: {
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
        [`& .${Ce.grouped}.${hr.focusVisible}`]: {
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
}))), GE = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, m = HE(g), b = h.useMemo(() => ({
    className: m.grouped,
    color: s,
    disabled: a,
    disableElevation: u,
    disableFocusRipple: r.disableFocusRipple,
    disableRipple: r.disableRipple,
    fullWidth: y,
    size: v,
    variant: S
  }), [s, a, u, r.disableFocusRipple, r.disableRipple, y, v, S, m.grouped]), w = WE(o), E = w.length, k = (R) => {
    const T = R === 0, I = R === E - 1;
    return T && I ? "" : T ? m.firstButton : I ? m.lastButton : m.middleButton;
  };
  return /* @__PURE__ */ c.jsx(KE, {
    as: l,
    role: "group",
    className: te(m.root, i),
    ref: n,
    ownerState: g,
    ...C,
    children: /* @__PURE__ */ c.jsx(N1.Provider, {
      value: b,
      children: w.map((R, T) => /* @__PURE__ */ c.jsx(L1.Provider, {
        value: k(T),
        children: R
      }, T))
    })
  });
});
function YE(e) {
  return ye("MuiCard", e);
}
pe("MuiCard", ["root"]);
const QE = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, YE, t);
}, XE = H(lr, {
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
  }, a = QE(l);
  return /* @__PURE__ */ c.jsx(XE, {
    className: te(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function qE(e) {
  return ye("MuiCardContent", e);
}
pe("MuiCardContent", ["root"]);
const ZE = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, qE, t);
}, JE = H("div", {
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
  }, a = ZE(l);
  return /* @__PURE__ */ c.jsx(JE, {
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function bg(e) {
  return e.substring(2).toLowerCase();
}
function eP(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function tP(e) {
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
  const d = pt(Mo(t), l), p = Je((v) => {
    const S = u.current;
    u.current = !1;
    const C = gt(l.current);
    if (!a.current || !l.current || "clientX" in v && eP(v, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let g;
    v.composedPath ? g = v.composedPath().includes(l.current) : g = !yo(C.documentElement, v.target) || yo(l.current, v.target), !g && (n || !S) && o(v);
  }), y = (v) => (S) => {
    u.current = !0;
    const C = t.props[v];
    C && C(S);
  }, f = {
    ref: d
  };
  return i !== !1 && (f[i] = y(i)), h.useEffect(() => {
    if (i !== !1) {
      const v = bg(i), S = gt(l.current), C = () => {
        s.current = !0;
      };
      return S.addEventListener(v, p), S.addEventListener("touchmove", C), () => {
        S.removeEventListener(v, p), S.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (f[r] = y(r)), h.useEffect(() => {
    if (r !== !1) {
      const v = bg(r), S = gt(l.current);
      return S.addEventListener(v, p), () => {
        S.removeEventListener(v, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ h.cloneElement(t, f);
}
function B1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function nP(e) {
  const t = gt(e);
  return e === t.body || e === t.documentElement ? Vn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ws(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Sg(e) {
  return parseFloat(Vn(e).getComputedStyle(e).paddingRight) || 0;
}
function rP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function wg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !rP(s);
    l && a && ws(s, o);
  });
}
function oP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = gt(r).body;
    else {
      const s = r.parentElement, l = Vn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (nP(i)) {
      const s = B1(Vn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${Sg(i) + s}px`;
      const l = gt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Sg(a) + s}px`;
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
function iP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class sP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ws(t.modalRef, !1);
    const o = iP(n);
    wg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = oP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ws(t.modalRef, n), wg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
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
const hf = "data-mui-focusable";
function Cg(e) {
  return e ? e.hasAttribute(hf) ? e : e.querySelector(`[${hf}]`) : null;
}
const lP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function _1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function aP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function uP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || aP(e));
}
function cP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(lP)).forEach((r, o) => {
    const i = _1(r);
    i === -1 || !uP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function dP() {
  return !0;
}
function fP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = cP,
    isEnabled: s = dP,
    open: l
  } = e, a = h.useRef(!1), u = h.useRef(null), d = h.useRef(null), p = h.useRef(null), y = h.useRef(null), f = h.useRef(!1), v = h.useRef(null), S = pt(Mo(t), v), C = h.useRef(null);
  h.useEffect(() => {
    !l || !v.current || (f.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (a.current = !1, !l || !v.current)
      return;
    const b = gt(v.current), w = er(b), E = Cg(v.current) ?? v.current;
    return yo(v.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), f.current && E.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !v.current)
      return;
    const b = gt(v.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = v.current, I = er(b);
      if (T === null)
        return;
      const L = Cg(T);
      if (I === T || I === L) {
        const A = i(T);
        if (A.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? A[A.length - 1].focus() : A[0].focus();
        return;
      }
      if (yo(T, I)) {
        const A = i(T), x = A.indexOf(I);
        if (x === -1 || !A.some((O) => _1(O) > 0))
          return;
        R.preventDefault();
        let P = 0;
        R.shiftKey ? P = x <= 0 ? A.length - 1 : x - 1 : P = x === A.length - 1 ? 0 : x + 1, A[P].focus();
      }
    }, E = () => {
      var L, $;
      const R = v.current;
      if (R === null)
        return;
      const T = er(b);
      if (!b.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (yo(R, T) || r && T !== u.current && T !== d.current)
        return;
      if (T !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!f.current)
        return;
      let I = [];
      if ((T === u.current || T === d.current) && (I = i(v.current)), I.length > 0) {
        const A = !!((L = C.current) != null && L.shiftKey && (($ = C.current) == null ? void 0 : $.key) === "Tab"), x = I[0], j = I[I.length - 1];
        typeof x != "string" && typeof j != "string" && (A ? j.focus() : x.focus());
      } else
        R.focus();
    };
    b.addEventListener("focusin", E), b.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = er(b);
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
function pP(e) {
  return typeof e == "function" ? e() : e;
}
function mP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const kg = () => {
}, Fl = new sP();
function hP(e) {
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
  } = e, d = h.useRef({}), p = h.useRef(null), y = h.useRef(null), f = h.useRef(null), v = pt(f, u), [S, C] = h.useState(!a), g = mP(s);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const b = () => gt(p.current), w = () => (d.current.modalRef = f.current, d.current.mount = p.current, d.current), E = () => {
    Fl.mount(w(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = Je(() => {
    const O = pP(t) || b().body;
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
  const L = (O) => (N) => {
    var M;
    (M = O.onKeyDown) == null || M.call(O, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !R()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, $ = (O) => (N) => {
    var M;
    (M = O.onClick) == null || M.call(O, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, A = (O = {}) => {
    const N = Ga(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const M = {
      ...N,
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
      onKeyDown: L(M),
      ref: v
    };
  }, x = (O = {}) => {
    const N = O;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: $(N),
      open: a
    };
  }, j = () => {
    const O = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), i && i(), r && I();
    };
    return {
      onEnter: Zh(O, (s == null ? void 0 : s.props.onEnter) ?? kg),
      onExited: Zh(N, (s == null ? void 0 : s.props.onExited) ?? kg)
    };
  }, P = !a && g && !S ? y.current ?? t : t;
  return {
    getRootProps: A,
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
function gP(e) {
  return ye("MuiModal", e);
}
pe("MuiModal", ["root", "hidden", "backdrop"]);
const yP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ve({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, gP, r);
}, vP = H("div", {
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
}))), xP = H(A1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), F1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    getRootProps: L,
    getBackdropProps: $,
    getTransitionProps: A,
    portalRef: x,
    portalContainer: j,
    isTopModal: P,
    exited: O,
    hasTransition: N
  } = hP({
    ...I,
    rootRef: n
  }), M = {
    ...I,
    exited: O
  }, z = yP(M), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), N) {
    const {
      onEnter: K,
      onExited: q
    } = A();
    F.onEnter = K, F.onExited = q;
  }
  const U = {
    slots: k,
    slotProps: E
  }, [W, Q] = Se("root", {
    ref: n,
    elementType: vP,
    externalForwardedProps: {
      ...U,
      ...T,
      component: u
    },
    getSlotProps: L,
    ownerState: M,
    className: te(i, z == null ? void 0 : z.root, !M.open && M.exited && (z == null ? void 0 : z.hidden))
  }), [G, X] = Se("backdrop", {
    elementType: xP,
    externalForwardedProps: U,
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
  return !C && !w && (!N || O) ? null : /* @__PURE__ */ c.jsx(M1, {
    ref: x,
    container: j,
    disablePortal: y,
    children: /* @__PURE__ */ c.jsxs(W, {
      ...Q,
      children: [S ? null : /* @__PURE__ */ c.jsx(G, {
        ...X
      }), /* @__PURE__ */ c.jsx(fP, {
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
function bP(e) {
  return ye("MuiDialog", e);
}
pe("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const D1 = /* @__PURE__ */ h.createContext({}), SP = H(A1, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), wP = (e) => {
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
  return ve(s, bP, t);
}, CP = H(F1, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), kP = H("div", {
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
}), TP = H(lr, {
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
}))), Xi = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialog"
  }), o = eo(), i = {
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
    PaperComponent: g = lr,
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
  }, I = wP(T), L = h.useRef(), $ = (K) => {
    L.current = K.target === K.currentTarget;
  }, A = (K) => {
    v && v(K), L.current && (L.current = null, S && S(K, "backdropClick"));
  }, x = Er(l), j = h.useMemo(() => ({
    titleId: x
  }), [x]), P = {
    slots: w,
    slotProps: E
  }, [O, N] = Se("root", {
    elementType: CP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: T,
    className: te(I.root, d),
    ref: n
  }), [M, z] = Se("backdrop", {
    elementType: SP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    ownerState: T,
    className: I.backdrop
  }), [F, U] = Se("paper", {
    elementType: TP,
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
      [hf]: ""
    }
  }), [W, Q] = Se("container", {
    elementType: kP,
    externalForwardedProps: P,
    ownerState: T,
    className: I.container
  }), [G, X] = Se("transition", {
    elementType: O1,
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
    onClick: A,
    ...N,
    ...R,
    children: /* @__PURE__ */ c.jsx(G, {
      ...X,
      children: /* @__PURE__ */ c.jsx(W, {
        onMouseDown: $,
        ...Q,
        children: /* @__PURE__ */ c.jsx(F, {
          as: g,
          ...U,
          children: /* @__PURE__ */ c.jsx(D1.Provider, {
            value: j,
            children: u
          })
        })
      })
    })
  });
});
function RP(e) {
  return ye("MuiDialogActions", e);
}
pe("MuiDialogActions", ["root", "spacing"]);
const EP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ve({
    root: ["root", !n && "spacing"]
  }, RP, t);
}, PP = H("div", {
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
}), qi = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = EP(l);
  return /* @__PURE__ */ c.jsx(PP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function IP(e) {
  return ye("MuiDialogContent", e);
}
pe("MuiDialogContent", ["root", "dividers"]);
function MP(e) {
  return ye("MuiDialogTitle", e);
}
const $P = pe("MuiDialogTitle", ["root"]), jP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ve({
    root: ["root", n && "dividers"]
  }, IP, t);
}, OP = H("div", {
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
      [`.${$P.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Zi = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = jP(l);
  return /* @__PURE__ */ c.jsx(OP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), AP = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, MP, t);
}, NP = H(Ee, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Ji = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = AP(l), {
    titleId: u = i
  } = h.useContext(D1);
  return /* @__PURE__ */ c.jsx(NP, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), Tg = pe("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function W1(e) {
  return ye("MuiSelect", e);
}
const uo = pe("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), LP = (e) => {
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
  }, u = ve(a, zk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, zP = H(ic, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...rc(e, t), !n.disableUnderline && t.underline];
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
    [`&.${io.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${io.disabled}`]: {
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
        [`&.${io.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${io.error}`]: {
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
        [`&:hover:not(.${io.disabled}, .${io.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${io.disabled}:before`]: {
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
        [`&.${uo.root}`]: {
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
})), BP = H(sc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: oc
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
}))), qp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, S = LP(r), C = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, g = d ? It(C, d) : C, m = p.root ?? zP, b = p.input ?? BP;
  return /* @__PURE__ */ c.jsx(Dp, {
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
qp.muiName = "Input";
function _P(e) {
  return ye("MuiFormControl", e);
}
pe("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const FP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ce(n)}`, r && "fullWidth"]
  };
  return ve(o, _P, t);
}, DP = H("div", {
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
}), WP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, b = FP(m), [w, E] = h.useState(() => {
    let P = !1;
    return o && h.Children.forEach(o, (O) => {
      if (!Gc(O, ["Input", "Select"]))
        return;
      const N = Gc(O, ["Select"]) ? O.props.input : O;
      N && Mk(N.props) && (P = !0);
    }), P;
  }), [k, R] = h.useState(() => {
    let P = !1;
    return o && h.Children.forEach(o, (O) => {
      Gc(O, ["Input", "Select"]) && (Va(O.props, !0) || Va(O.props.inputProps, !0)) && (P = !0);
    }), P;
  }), [T, I] = h.useState(!1);
  a && T && I(!1);
  const L = d !== void 0 && !a ? d : T;
  let $;
  h.useRef(!1);
  const A = h.useCallback(() => {
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
    focused: L,
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
    onFilled: A,
    registerEffect: $,
    required: v,
    variant: C
  }), [w, s, a, u, k, L, p, y, $, x, A, v, S, C]);
  return /* @__PURE__ */ c.jsx(zp.Provider, {
    value: j,
    children: /* @__PURE__ */ c.jsx(DP, {
      as: l,
      ownerState: m,
      className: te(b.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
});
var Rg;
const UP = (e) => {
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
  return ve(u, Bk, t);
}, VP = H("p", {
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
  [`&.${qh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${qh.error}`]: {
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
}))), HP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, [S] = ji({
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
  const g = UP(C);
  return /* @__PURE__ */ c.jsx(VP, {
    as: s,
    className: te(g.root, i),
    ref: n,
    ...v,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Rg || (Rg = /* @__PURE__ */ c.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), KP = (e) => {
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
  return ve(a, _k, t);
}, GP = H("label", {
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
}))), YP = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(we(({
  theme: e
}) => ({
  [`&.${vs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), QP = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, [v] = ji({
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
  }, C = KP(S);
  return /* @__PURE__ */ c.jsxs(GP, {
    as: l,
    ownerState: S,
    className: te(C.root, i),
    ref: n,
    ...f,
    children: [o, v.required && /* @__PURE__ */ c.jsxs(YP, {
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
const XP = {
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
}, qP = {
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
  } = t, m = h.useRef(null), b = eo(), w = lc(b.motion.reducedMotion, s), E = h.useRef(null), k = pt(E, Mo(i), n), R = Cn(E, p), T = Cn(E, (j, P) => {
    w.shouldReduceMotion || _p(j);
    const {
      duration: O,
      delay: N,
      easing: M
    } = Ha({
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
      delay: N
    });
    j.style.transition = [b.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), b.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: M
    })].join(","), u && u(j, P);
  }), I = Cn(E, d), L = Cn(E, v), $ = Cn(E, (j) => {
    const {
      duration: P,
      delay: O,
      easing: N
    } = Ha({
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
      easing: N
    })].join(","), j.style.opacity = 0, j.style.transform = Cs(0.75), y && y(j);
  }), A = Cn(E, (j) => {
    j.style.transition = "", f && f(j);
  }), x = r ? (j) => {
    r(E.current, j);
  } : void 0;
  return /* @__PURE__ */ c.jsx(m1, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: T,
    onEntered: I,
    onEntering: R,
    onExit: $,
    onExited: A,
    onExiting: L,
    addEndListener: x,
    getAutoTimeout: C === "auto" ? () => m.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...g,
    children: (j, {
      ownerState: P,
      ...O
    }) => {
      const N = f1(j, a, XP, qP, S, i.props.style);
      return /* @__PURE__ */ h.cloneElement(i, {
        style: N,
        ref: k,
        ...O
      });
    }
  });
});
qs && (qs.muiSupportAuto = !0);
function ZP(e) {
  return ye("MuiInputLabel", e);
}
const JP = pe("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), eI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ve({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, Fk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, tI = H(ic, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...rc(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${JP.root} + &`]: {
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
})), nI = H(sc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: oc
})({}), Zp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, f = eI(r), S = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? It(u, S) : S, g = d.root ?? tI, m = d.input ?? nI;
  return /* @__PURE__ */ c.jsx(Dp, {
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
Zp.muiName = "Input";
const Dl = pe("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]), rI = (e) => {
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
  }, u = ve(a, ZP, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, oI = H(QP, {
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
}))), iI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, [d, p] = ji({
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
  }, v = rI(f);
  return /* @__PURE__ */ c.jsx(oI, {
    "data-shrink": y,
    ref: n,
    className: te(v.root, a),
    ...u,
    ownerState: f,
    classes: v
  });
}), gf = /* @__PURE__ */ h.createContext({});
function sI(e) {
  return ye("MuiList", e);
}
pe("MuiList", ["root", "padding", "dense", "subheader"]);
const lI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ve({
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
}), uI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, f = lI(y);
  return /* @__PURE__ */ c.jsx(gf.Provider, {
    value: p,
    children: /* @__PURE__ */ c.jsxs(aI, {
      as: s,
      className: te(f.root, i),
      ref: n,
      ownerState: y,
      ...d,
      children: [u, o]
    })
  });
}), Eg = pe("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Pg = pe("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Jp = /* @__PURE__ */ h.createContext(void 0);
function U1() {
  const e = h.useContext(Jp);
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
function V1(e) {
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
  const y = h.useRef(null), f = h.useRef(/* @__PURE__ */ new Map()), [v, S] = h.useState(0), C = h.useMemo(() => yf(f.current), [v]), g = Ig(p, C, i, n), m = h.useRef(g);
  m.current = g;
  const b = h.useCallback(() => {
    const A = yf(f.current), x = Ig(m.current, A, i, n);
    return Y1(A, x);
  }, [n, i]), w = h.useCallback(() => f.current, []), E = Je((A) => {
    const x = f.current.get(A.id);
    dI(x ?? null, A) || (f.current.set(A.id, A), S((j) => j + 1));
  }), k = Je((A) => {
    f.current.delete(A) && S((x) => x + 1);
  }), R = Je((A) => {
    a(A);
  }), T = h.useCallback((A) => m.current === A, []), I = h.useCallback((A, x, j, P) => {
    var M;
    const O = Wl(f.current), N = K1(O, A, x, j, P ?? i);
    return N ? ((M = N.element) == null || M.focus(), a(N.id), N) : null;
  }, [i]), L = h.useCallback((A, x, j) => ({
    onFocus: (N) => {
      x == null || x(N);
      const M = Wl(f.current), z = X1(M, N.target);
      z !== -1 && a(M[z].id);
    },
    onKeyDown: (N) => {
      if (j == null || j(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !fI.includes(N.key))
        return;
      let M = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (M = "ArrowRight", z = "ArrowLeft");
      const F = Wl(f.current), U = er(gt(y.current)), W = U === y.current;
      let Q = Mg(F, U, m.current), G = "next";
      switch (N.key) {
        case M:
          G = "previous", N.preventDefault(), W && (Q = F.length);
          break;
        case z:
          N.preventDefault(), W && (Q = -1);
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
      I(Q, G, s);
    },
    ref: gI(A, (N) => {
      y.current = N;
    })
  }), [I, o, r, s]), $ = h.useCallback((A) => {
    var N;
    const x = Wl(f.current), j = er(gt(y.current)), O = j === y.current ? -1 : Mg(x, j, m.current);
    return ((N = I(O, "next", !0, A)) == null ? void 0 : N.id) ?? null;
  }, [I]);
  return h.useMemo(() => ({
    activeItemId: g,
    focusNext: $,
    getActiveItem: b,
    getContainerProps: L,
    getItemMap: w,
    isItemActive: T,
    registerItem: E,
    setActiveItemId: R,
    unregisterItem: k
  }), [g, $, b, L, w, T, E, R, k]);
}
function H1(e) {
  const t = U1(), {
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
  }, [e.id, r, o]), u = pt(e.ref, a);
  return dt(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), dt(() => {
    const d = e.id;
    return () => {
      o(d);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Ig(e, t, n, r) {
  return e != null ? pI(e, t, n) : mI(t, n, r);
}
function pI(e, t, n) {
  var o;
  const r = Q1(t, e);
  return r === -1 ? G1(t, n) : n(t[r]) ? t[r].id : ((o = K1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function mI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = Y1(e, r);
    if (o && t(o))
      return o.id;
  }
  return G1(e, t);
}
function Mg(e, t, n) {
  if (t) {
    const r = X1(e, t);
    if (r !== -1)
      return r;
  }
  return Q1(e, n);
}
function K1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = $g(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = $g(l, i, n, r);
    else
      return u;
  }
  return null;
}
function G1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function Y1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Q1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function X1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function yf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(vf).sort((o, i) => hI(o.element, i.element)), r = t.filter((o) => !vf(o));
  return [...n, ...r];
}
function Wl(e) {
  return yf(e).filter(vf);
}
function $g(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function ks(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function vf(e) {
  return e.element != null && e.element.isConnected;
}
function hI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function gI(...e) {
  return (t) => {
    e.forEach((n) => {
      lf(n ?? null, t);
    });
  };
}
function q1(e, t) {
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
function ma(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Z1 = /* @__PURE__ */ h.createContext(null);
function J1() {
  return h.useContext(Z1);
}
const xI = Z1.Provider, ex = /* @__PURE__ */ h.createContext(void 0);
function bI() {
  const e = h.useContext(ex);
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
function tx(e, t) {
  if (t === void 0)
    return !0;
  let n = SI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function wI(e, t) {
  return tx(e, t) ? ks(e) : !1;
}
function CI(e, t) {
  q1(e, t);
}
const kI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = t, f = h.useRef(null), v = h.useRef(!1), [S, C] = h.useState(!1), g = J1(), m = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), b = h.useCallback((P) => {
    var O, N, M;
    return p === "selectedMenu" ? ((O = P.find((z) => z.selected && ks(z))) == null ? void 0 : O.id) ?? ((N = P.find((z) => ks(z))) == null ? void 0 : N.id) ?? null : ((M = P.find((z) => ks(z))) == null ? void 0 : M.id) ?? null;
  }, [p]), w = V1({
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
  } = w, L = Je((P = !1) => {
    if (!f.current || !P && v.current)
      return null;
    if (i) {
      const O = R();
      if (O != null && O.element) {
        const N = Array.from(I().values()).some((z) => z.selected), M = p === "menu" && N && !O.selected && g == null;
        return C(M), CI(O.element, g), v.current = !0, O.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), v.current = !0, f.current) : (C(!1), null);
  });
  dt(() => {
    if (!o && !i) {
      v.current = !1, C(!1);
      return;
    }
    L();
  }, [E, i, o, L]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (P, {
      direction: O
    }) => {
      const N = !f.current.style.width;
      if (P.clientHeight < f.current.clientHeight && N) {
        const M = Vn(P), z = B1(M);
        if (z > 0) {
          const F = `${z}px`, U = O === "rtl" ? "paddingLeft" : "paddingRight", W = parseFloat(M.getComputedStyle(f.current)[U]) || 0;
          f.current.style[U] = `${W + z}px`, f.current.style.width = `calc(100% + ${F})`;
        }
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const P = er(gt(f.current));
      return P && yo(f.current, P) ? P : L(!0);
    }
  }), [L]);
  const $ = T(void 0, y.onFocus), A = pt(f, $.ref, n), x = h.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: S,
    variant: p
  }), [a, S, p]), j = Je((P) => {
    if (S && C(!1), (P.ctrlKey || P.metaKey || P.altKey) && d) {
      d(P);
      return;
    }
    if ($.onKeyDown(P), P.key.length === 1) {
      const N = m.current, M = P.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && M !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push(M);
      const F = er(gt(f.current)), U = F && !N.repeating && tx(F, N);
      N.previousKeyMatched && (U || k((W) => wI(W, N)) != null) ? P.preventDefault() : N.previousKeyMatched = !1;
    }
    d && d(P);
  });
  return /* @__PURE__ */ c.jsx(uI, {
    role: "menu",
    ref: A,
    className: l,
    onKeyDown: j,
    tabIndex: -1,
    ...y,
    onFocus: $.onFocus,
    children: /* @__PURE__ */ c.jsx(ex.Provider, {
      value: x,
      children: /* @__PURE__ */ c.jsx(Jp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function TI(e) {
  return ye("MuiPopover", e);
}
pe("MuiPopover", ["root", "paper"]);
function jg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Og(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ag(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ul(e) {
  return typeof e == "function" ? e() : e;
}
const RI = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, TI, t);
}, EI = H(F1, {
  name: "MuiPopover",
  slot: "Root"
})({}), nx = H(lr, {
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
}), PI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, T = RI(R), I = h.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const _ = Ul(i), re = (_ && _.nodeType === 1 ? _ : gt(k.current).body).getBoundingClientRect();
    return {
      top: re.top + jg(re, s.vertical),
      left: re.left + Og(re, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), L = h.useCallback((_) => ({
    vertical: jg(_, m.vertical),
    horizontal: Og(_, m.horizontal)
  }), [m.horizontal, m.vertical]), $ = h.useCallback((_) => {
    const ne = {
      width: _.offsetWidth,
      height: _.offsetHeight
    }, re = L(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ag(re)
      };
    const ke = I();
    let me = ke.top - re.vertical, de = ke.left - re.horizontal;
    const fe = me + ne.height, Me = de + ne.width, Be = Vn(Ul(i)), Pe = Be.innerHeight - v, $e = Be.innerWidth - v;
    if (v != null && me < v) {
      const he = me - v;
      me -= he, re.vertical += he;
    } else if (v != null && fe > Pe) {
      const he = fe - Pe;
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
      transformOrigin: Ag(re)
    };
  }, [i, a, I, L, v]), [A, x] = h.useState(S), j = h.useCallback(() => {
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
    const _ = nc(() => {
      j();
    }), ne = Vn(Ul(i));
    return ne.addEventListener("resize", _), () => {
      _.clear(), ne.removeEventListener("resize", _);
    };
  }, [i, S, j]);
  let N = b;
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
  b === "auto" && !z.muiSupportAuto && (N = void 0);
  const U = p || (i ? gt(Ul(i)).body : void 0), [W, {
    slots: Q,
    slotProps: G,
    ...X
  }] = Se("root", {
    ref: n,
    elementType: EI,
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
        backdrop: qk(typeof g.backdrop == "function" ? g.backdrop(R) : g.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: S
    },
    ownerState: R,
    className: te(T.root, d)
  }), [K, q] = Se("paper", {
    ref: k,
    className: T.paper,
    elementType: nx,
    externalForwardedProps: M,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: A ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ c.jsx(W, {
    ...X,
    ...!Ua(W) && {
      slots: Q,
      slotProps: G,
      disableAutoFocus: y,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ c.jsx(z, {
      ...F,
      timeout: N,
      children: /* @__PURE__ */ c.jsx(K, {
        ...q,
        children: u
      })
    })
  });
});
function II(e) {
  return ye("MuiMenu", e);
}
pe("MuiMenu", ["root", "paper", "list"]);
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
  return ve({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, II, t);
}, OI = H(PI, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), AI = H(nx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), NI = H(kI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), LI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, C = Ju(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: y
  }, m = jI(g), b = o && u, w = b && !l, E = h.useRef(null), k = (P, O) => {
    var N, M;
    E.current && (E.current.adjustStyleForScrollbar(P, {
      direction: C ? "rtl" : "ltr"
    }), b && ((M = (N = E.current).focusInitialTarget) == null || M.call(N)));
  }, R = (P) => {
    P.key === "Tab" && (P.preventDefault(), a && a(P, "tabKeyDown"));
  }, T = {
    slots: f,
    slotProps: v
  }, I = Ei({
    elementType: f.root,
    externalSlotProps: v.root,
    ownerState: g,
    className: [m.root, s]
  }), [L, $] = Se("paper", {
    className: m.paper,
    elementType: AI,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [A, x] = Se("list", {
    className: m.list,
    elementType: NI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: (P) => ({
      ...P,
      onKeyDown: (O) => {
        var N;
        R(O), (N = P.onKeyDown) == null || N.call(P, O);
      }
    }),
    ownerState: g
  }), j = typeof v.transition == "function" ? v.transition(g) : v.transition;
  return /* @__PURE__ */ c.jsx(
    OI,
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
        paper: L,
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
      children: /* @__PURE__ */ c.jsx(A, {
        actions: E,
        autoFocus: b,
        autoFocusItem: w,
        variant: y,
        ...x,
        children: i
      })
    }
  );
}), zI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, BI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = ve({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, Dk, s);
  return {
    ...s,
    ...a
  };
}, _I = H(Ro, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: zI
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
  [`&.${Yi.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    ...!e.focusVisible && {
      [`&.${Yi.focusVisible}`]: {
        backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
      }
    }
  },
  [`&.${Yi.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  ...e.focusVisible ? (
    // Inset the ring: a scrolling Menu/MenuList clips an outset ring.
    o1(1)
  ) : {
    [`&.${Yi.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    }
  },
  [`&.${Yi.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Tg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Tg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Pg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Pg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Eg.root}`]: {
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
      [`& .${Eg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Vl = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, S = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = J1(), g = h.useContext(gf), m = h.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: a
  }), [g.dense, s, a]), b = bI(), w = Er(), E = b.suppressInitialFocusVisible, k = b.itemsFocusableWhenDisabled, R = h.useRef(null);
  dt(() => {
    o && R.current && q1(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: m.dense,
    divider: l,
    disableGutters: a
  }, I = BI(r), {
    root: L,
    ...$
  } = I, A = H1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), x = pt(R, A.ref);
  let j;
  return p !== void 0 ? j = p : b.variant === "selectedMenu" ? j = A.tabIndex : (!r.disabled || k) && (j = -1), /* @__PURE__ */ c.jsx(gf.Provider, {
    value: m,
    children: /* @__PURE__ */ c.jsx(_I, {
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
    icon: ["icon", `icon${ce(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ve(l, Wk, t);
}, rx = H("select", {
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
  [`&.${Wp.disabled}`]: {
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
})), DI = H(rx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: vn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Wp.multiple}`]: t.multiple
    }];
  }
})({}), ox = H("svg", {
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
  [`&.${Wp.disabled}`]: {
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
})), WI = H(ox, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ce(n.variant)}`], n.open && t.iconOpen];
  }
})({}), UI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, p = FI(d);
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx(DI, {
      ownerState: d,
      className: te(p.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ c.jsx(WI, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
var Ng;
const VI = H("fieldset", {
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
}), HI = H("legend", {
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
        Ng || (Ng = /* @__PURE__ */ c.jsx("span", {
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
  } = e, r = ve({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Uk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, YI = H(ic, {
  shouldForwardProp: (e) => vn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rc
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Qn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Qn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Qn.focused} .${Qn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(At()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Qn.focused} .${Qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Qn.error} .${Qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Qn.disabled} .${Qn.notchedOutline}`]: {
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
        [`&.${uo.root}`]: {
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
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), XI = H(sc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: oc
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
}))), em = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, f = GI(r), [v, S] = ji({
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
  }, g = u.root ?? YI, m = u.input ?? XI, [b, w] = Se("notchedOutline", {
    elementType: QI,
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
  return /* @__PURE__ */ c.jsx(Dp, {
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
em.muiName = "Input";
function qI(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function ix(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return h.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ h.isValidElement(n) && (t += ix(n.props.children));
  }), t;
}
function ZI(e, t, n = 0) {
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
function eM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ h.isValidElement(i) || !qI(i) || i.props.disabled)
      continue;
    const s = ix(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && ma(t, i.props.value) && (r = n.length), n.push({
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
var Lg;
const Hl = 2, tM = 400, zg = 200, nM = 750, so = " ", rM = "ArrowUp", oM = "ArrowDown", iM = "Enter";
function Bg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Hl && e.clientX <= r.right + Hl && e.clientY >= r.top - Hl && e.clientY <= r.bottom + Hl;
}
const sM = H(rx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${uo.select}`]: t.select
      },
      {
        [`&.${uo.select}`]: t[n.variant]
      },
      {
        [`&.${uo.error}`]: t.error
      },
      {
        [`&.${uo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${uo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), lM = H(ox, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), aM = H("input", {
  shouldForwardProp: (e) => c1(e) && e !== "classes",
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
  return ve({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, W1, t);
}, cM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var Ni, zo, nm, rm;
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
    onOpen: L,
    open: $,
    readOnly: A,
    renderValue: x,
    required: j,
    SelectDisplayProps: P = {},
    tabIndex: O,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: M,
    variant: z = "standard",
    ...F
  } = t, [U, W] = af({
    controlled: M,
    default: d,
    name: "Select"
  }), [Q, G] = af({
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
  }), fe = tr(), Me = tr(), Be = tr(), [Pe, $e] = h.useState(null), {
    current: he
  } = h.useRef($ != null), [je, et] = h.useState(), [Xe, Fe] = h.useState(null), qe = pt(n, S), D = h.useCallback((Y) => {
    K.current = Y, Y && $e(Y);
  }, []), le = Pe == null ? void 0 : Pe.parentNode;
  h.useImperativeHandle(qe, () => ({
    focus: () => {
      K.current.focus();
    },
    node: X.current,
    value: U
  }), [U]);
  const ie = Pe !== null && Q, oe = h.useCallback(() => {
    Be.clear(), de.current.buffer = "", de.current.previousSearchIndex = null, de.current.matchedIndex = null;
  }, [Be]);
  dt(() => {
    _.current = ie, ie && oe();
  }, [ie, oe]);
  const Ae = h.useCallback(() => {
    fe.clear(), Me.clear();
  }, [fe, Me]), se = h.useCallback(() => {
    Ae(), ke.current = !1, me.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ae]), ae = h.useCallback(() => {
    re.current && (re.current(), re.current = null);
  }, []);
  h.useEffect(() => {
    ie || (se(), ae());
  }, [ie, se, ae]), h.useEffect(() => () => {
    se(), ae(), oe();
  }, [se, ae, oe]), h.useEffect(() => {
    if (!ie || !le || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      et(le.clientWidth);
    });
    return Y.observe(le), () => {
      Y.disconnect();
    };
  }, [ie, le, s]), h.useEffect(() => {
    u && Q && Pe && !he && (et(s ? null : le.clientWidth), K.current.focus());
  }, [Pe, s]), h.useEffect(() => {
    i && K.current.focus();
  }, [i]), h.useEffect(() => {
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
  const Ge = Je((Y, ue) => {
    Y || (se(), ae()), Y ? (oe(), Fe(yI(ue)), L && L(ue)) : (Fe(null), k && k(ue)), he || (_.current = Y, et(s ? null : le.clientWidth), G(Y));
  }), ot = () => {
    se(), ne.current ? Me.start(zg, () => {
      me.current.allowUnselectedMouseUp = !0, fe.start(zg, () => {
        me.current.allowSelectedMouseUp = !0;
      });
    }) : fe.start(tM, () => {
      me.current.allowSelectedMouseUp = !0, me.current.allowUnselectedMouseUp = !0;
    });
  }, mt = (Y) => {
    if (I == null || I(Y), Y.button !== 0 || (Y.preventDefault(), !K.current))
      return;
    K.current.focus();
    const ue = gt(Y.currentTarget);
    ot(), ae();
    const Re = (at) => {
      re.current = null, K.current && (Bg(at, K.current) || Bg(at, q.current) || !_.current && he || Ge(!1, at));
    };
    ue.addEventListener("mouseup", Re, {
      capture: !0,
      once: !0
    }), re.current = () => {
      ue.removeEventListener("mouseup", Re, !0);
    }, Ge(!0, Y);
  }, De = (Y) => {
    Ge(!1, Y);
  }, Hn = h.Children.toArray(l), Oi = (Y) => {
    const ue = Hn.find((Re) => Re.props.value === Y.target.value);
    ue !== void 0 && (W(ue.props.value), E && E(Y, ue));
  }, $o = (Y, ue, Re) => {
    if (W(Re), E) {
      const at = Y.nativeEvent || Y, Ut = new at.constructor(at.type, at);
      Object.defineProperty(Ut, "target", {
        writable: !0,
        value: {
          value: Re,
          name: b
        }
      }), E(Ut, ue);
    }
  }, jo = (Y) => (ue) => {
    ke.current = !1;
    let Re;
    if (ue.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Re = Array.isArray(U) ? U.slice() : [];
        const at = U.indexOf(Y.props.value);
        at === -1 ? Re.push(Y.props.value) : Re.splice(at, 1);
      } else
        Re = Y.props.value;
      Y.props.onClick && Y.props.onClick(ue), U !== Re && $o(ue, Y, Re), m || Ge(!1, ue);
    }
  }, Oo = (Y, ue) => (Re) => {
    var ml, Bo;
    if ((Bo = (ml = Y.props).onMouseUp) == null || Bo.call(ml, Re), ke.current) {
      ke.current = !1;
      return;
    }
    const at = !me.current.allowSelectedMouseUp && ue, Ut = !me.current.allowUnselectedMouseUp && !ue;
    at || Ut || Re.currentTarget.click();
  }, no = (Y) => {
    var om;
    const ue = de.current, Re = ue.buffer !== "";
    if (ie || m || p || Y.defaultPrevented || (om = Y.nativeEvent) != null && om.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === so && !Re)
      return !1;
    Y.key === so && Y.preventDefault();
    const at = ue.buffer === "", {
      options: Ut,
      selectedIndex: ml
    } = eM(Hn, U);
    if (Ut.length === 0)
      return Y.key !== so && oe(), !0;
    at && (ue.previousSearchIndex = ml);
    const Bo = Y.key.toLowerCase();
    ue.buffer === Bo && JI(Ut, Bo) && (ue.buffer = "", ue.previousSearchIndex = ue.matchedIndex), ue.buffer += Bo, Be.start(nM, oe);
    const fc = ZI(Ut, ue.buffer, (ue.previousSearchIndex ?? -1) + 1);
    if (fc !== -1) {
      const pc = Ut[fc];
      return ue.matchedIndex = fc, ma(U, pc.value) || $o(Y, pc.child, pc.value), !0;
    }
    return Y.key !== so && oe(), !0;
  }, dl = (Y) => {
    if (!A) {
      const ue = no(Y), Re = Y.key === so || Y.key === rM || Y.key === oM || Y.key === iM;
      !ue && Re && (Y.preventDefault(), Ge(!0, Y)), T == null || T(Y);
    }
  }, ge = (Y) => {
    oe(), !ie && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: U,
        name: b
      }
    }), w(Y));
  }, Ye = (Y) => (ue) => {
    var Re, at;
    (at = (Re = Y == null ? void 0 : Y.props) == null ? void 0 : Re.onKeyDown) == null || at.call(Re, ue), ue.key === so && ue.target === ue.currentTarget && !ue.defaultPrevented && (ue.preventDefault(), ue.repeat || ue.currentTarget.click());
  };
  delete F["aria-invalid"];
  let zt, fl;
  const Ao = [];
  let No = !1, Lo = !1;
  (Va({
    value: U
  }) || y) && (x ? zt = x(U) : No = !0);
  const dc = Hn.map((Y) => {
    if (!/* @__PURE__ */ h.isValidElement(Y))
      return null;
    let ue;
    if (m) {
      if (!Array.isArray(U))
        throw new Error(Rr(2));
      ue = U.some((Re) => ma(Re, Y.props.value)), ue && No && Ao.push(Y.props.children);
    } else
      ue = ma(U, Y.props.value), ue && No && (fl = Y.props.children);
    return ue && (Lo = !0), /* @__PURE__ */ h.cloneElement(Y, {
      "aria-selected": ue ? "true" : "false",
      onMouseDown: (Re) => {
        var at, Ut;
        ke.current = !0, (Ut = (at = Y.props).onMouseDown) == null || Ut.call(at, Re);
      },
      onPointerDown: (Re) => {
        var at, Ut;
        ke.current = !0, (Ut = (at = Y.props).onPointerDown) == null || Ut.call(at, Re);
      },
      onClick: jo(Y),
      onMouseUp: Oo(Y, ue),
      onKeyUp: (Re) => {
        Re.key === so && Re.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Re);
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
    ne.current = Lo, !ie && !m && !Lo && oe();
  }, [Lo, m, ie, oe]), No && (m ? Ao.length === 0 ? zt = null : zt = Ao.reduce((Y, ue, Re) => (Y.push(ue), Re < Ao.length - 1 && Y.push(", "), Y), []) : zt = fl);
  let pl = je;
  !s && he && Pe && (pl = le.clientWidth);
  let Ai;
  typeof O < "u" ? Ai = O : Ai = p ? null : 0;
  const ee = P.id || (b ? `mui-component-select-${b}` : void 0), Z = {
    ...t,
    variant: z,
    value: U,
    open: ie,
    error: f
  }, be = uM(Z), Te = typeof ((Ni = g.slotProps) == null ? void 0 : Ni.paper) == "function" ? g.slotProps.paper(Z) : (zo = g.slotProps) == null ? void 0 : zo.paper, yt = pt(Te == null ? void 0 : Te.ref, q), ur = typeof ((nm = g.slotProps) == null ? void 0 : nm.list) == "function" ? g.slotProps.list(Z) : (rm = g.slotProps) == null ? void 0 : rm.list, Kn = Er(), ro = Er();
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx(sM, {
      as: "div",
      ref: D,
      tabIndex: Ai,
      role: "combobox",
      "aria-controls": ie ? Kn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": ie ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": A ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": j ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: dl,
      onMouseDown: p || A ? null : mt,
      onBlur: ge,
      onFocus: R,
      ...P,
      ownerState: Z,
      className: te(P.className, be.select, a),
      id: ee,
      children: vI(zt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Lg || (Lg = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : zt
    }), /* @__PURE__ */ c.jsx(aM, {
      "aria-invalid": f,
      value: Array.isArray(U) ? U.join(",") : U,
      name: b,
      ref: X,
      "aria-hidden": !0,
      onChange: Oi,
      tabIndex: -1,
      disabled: p,
      readOnly: A,
      className: be.nativeInput,
      autoFocus: i,
      required: j,
      ...F,
      id: F.id ?? ro,
      ownerState: Z
    }), /* @__PURE__ */ c.jsx(lM, {
      as: v,
      className: be.icon,
      ownerState: Z
    }), /* @__PURE__ */ c.jsx(xI, {
      value: Xe,
      children: /* @__PURE__ */ c.jsx(LI, {
        id: `menu-${b || ""}`,
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
        ...g,
        slotProps: {
          ...g.slotProps,
          list: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": m ? "true" : void 0,
            disableListWrap: !0,
            id: Kn,
            ...ur
          },
          paper: {
            ...Te,
            ref: yt,
            style: {
              minWidth: pl,
              ...Te == null ? void 0 : Te.style
            }
          }
        },
        children: dc
      })
    })]
  });
}), dM = (e) => {
  const {
    classes: t
  } = e, r = ve({
    root: ["root"]
  }, W1, t);
  return {
    ...t,
    ...r
  };
}, tm = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => vn(e) && e !== "variant"
}, fM = H(Zp, tm)(""), pM = H(em, tm)(""), mM = H(qp, tm)(""), qa = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    IconComponent: d = PE,
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
  } = r, L = m ? UI : cM, [$] = ji({
    props: r,
    states: ["variant", "error"]
  }), A = $.variant || T, x = {
    ...r,
    variant: A,
    classes: s
  }, j = dM(x), {
    root: P,
    ...O
  } = j, N = y || {
    standard: /* @__PURE__ */ c.jsx(fM, {
      ownerState: x
    }),
    outlined: /* @__PURE__ */ c.jsx(pM, {
      label: v,
      ownerState: x
    }),
    filled: /* @__PURE__ */ c.jsx(mM, {
      ownerState: x
    })
  }[A], M = pt(n, Mo(N));
  return /* @__PURE__ */ c.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: {
        children: i,
        error: $.error,
        IconComponent: d,
        variant: A,
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
      ...(g && m || u) && A === "outlined" ? {
        notched: !0
      } : {},
      ref: M,
      className: te(N.props.className, l, j.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: A
      },
      ...I
    })
  });
});
qa.muiName = "Select";
function hM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = tr();
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
        ...Ga(e),
        ...Ga(g)
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
function gM(e) {
  return ye("MuiSnackbarContent", e);
}
pe("MuiSnackbarContent", ["root", "message", "action"]);
const yM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, gM, t);
}, vM = H(lr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(we(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.focusVisible && r1(`0 0 0 4px ${(e.vars || e).palette.background.default}`),
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(ef(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : ef(e.palette.background.default, t),
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
}), SM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
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
    className: te(d.root, i),
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
  return ye("MuiSnackbar", e);
}
pe("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const CM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ce(n.vertical)}${ce(n.horizontal)}`]
  };
  return ve(r, wM, t);
}, kM = H("div", {
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
}))), TM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
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
  }, L = CM(I), {
    getRootProps: $,
    onClickAway: A
  } = hM(I), [x, j] = h.useState(!0), P = {
    slots: E,
    slotProps: k
  }, [O, N] = Se("root", {
    ref: n,
    className: [L.root, p],
    elementType: kM,
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
    elementType: tP,
    externalForwardedProps: P,
    getSlotProps: (X) => ({
      onClickAway: (...K) => {
        var _;
        const q = K[0];
        (_ = X.onClickAway) == null || _.call(X, ...K), !(q != null && q.defaultMuiPrevented) && A(...K);
      }
    }),
    ownerState: I
  }), [U, W] = Se("content", {
    elementType: SM,
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
      ...N,
      children: /* @__PURE__ */ c.jsx(Q, {
        ...G,
        children: d || /* @__PURE__ */ c.jsx(U, {
          ...W
        })
      })
    })
  });
});
function RM(e) {
  return ye("MuiTooltip", e);
}
const xn = pe("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function EM(e) {
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
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ce(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ve(s, RM, t);
}, IM = H(j1, {
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
}))), MM = H("div", {
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
      lineHeight: `${EM(16 / 14)}em`,
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
}))), $M = H("span", {
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
let Kl = !1;
const _g = new ac();
let es = {
  x: 0,
  y: 0
};
function Gl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const pr = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    ...L
  } = r, $ = /* @__PURE__ */ h.isValidElement(i) ? i : /* @__PURE__ */ c.jsx("span", {
    children: i
  }), A = eo(), [x, j] = h.useState(), [P, O] = h.useState(null), N = h.useRef(!1), M = h.useRef(!1), z = d || S, F = tr(), U = tr(), W = tr(), Q = tr(), [G, X] = af({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let K = G;
  const {
    current: q
  } = h.useRef(E !== void 0), _ = Er(C), ne = h.useRef(), re = Je(() => {
    ne.current !== void 0 && (document.body.style.WebkitUserSelect = ne.current, ne.current = void 0), Q.clear();
  });
  h.useEffect(() => re, [re]);
  const ke = (ge) => {
    _g.clear(), Kl = !0, X(!0), w && !K && w(ge);
  }, me = Je(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ge) => {
      M.current = !1, _g.start(800 + g, () => {
        Kl = !1;
      }), X(!1), b && K && b(ge), F.start(A.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), de = (ge) => {
    N.current && ge.type !== "touchstart" || (x && x.removeAttribute("title"), U.clear(), W.clear(), y || Kl && f ? U.start(Kl ? f : y, () => {
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
    U.clear(), W.start(g, () => {
      me(ge);
    });
  }, [, Pe] = h.useState(!1), $e = (ge) => {
    const Ye = (ge == null ? void 0 : ge.target) ?? x;
    if (!Ye || Ye.disabled || !Ya(Ye)) {
      Pe(!1);
      const zt = ge ?? new Event("blur");
      !ge && Ye && (Object.defineProperty(zt, "target", {
        value: Ye
      }), Object.defineProperty(zt, "currentTarget", {
        value: Ye
      })), Be(zt);
    }
  }, he = (ge) => {
    if (x || j(ge.currentTarget), M.current = !1, Ya(ge.target)) {
      const Ye = (zt) => {
        zt.target.disabled && $e(zt), zt.target.removeEventListener("blur", Ye);
      };
      ge.target.addEventListener("blur", Ye), Pe(!0), de(ge);
    }
  }, je = (ge) => {
    N.current = !0;
    const Ye = $.props;
    Ye.onTouchStart && Ye.onTouchStart(ge);
  }, et = (ge) => {
    je(ge), W.clear(), F.clear(), re(), ne.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", Q.start(v, () => {
      document.body.style.WebkitUserSelect = ne.current, fe(ge);
    });
  }, Xe = (ge) => {
    $.props.onTouchEnd && $.props.onTouchEnd(ge), re(), W.start(m, () => {
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
  const Fe = pt(Mo($), j, n);
  !I && I !== 0 && (K = !1);
  const qe = h.useRef(), D = (ge) => {
    const Ye = $.props;
    Ye.onMouseMove && Ye.onMouseMove(ge), es = {
      x: ge.clientX,
      y: ge.clientY
    }, qe.current && qe.current.update();
  }, le = {}, ie = typeof I == "string";
  l ? (le.title = !K && ie && !u ? I : null, le["aria-describedby"] = K ? _ : null) : (le["aria-label"] = ie ? I : null, le["aria-labelledby"] = K && !ie ? _ : null);
  const oe = {
    ...le,
    ...L,
    ...$.props,
    className: te(L.className, $.props.className),
    onTouchStart: je,
    ref: Fe,
    ...S ? {
      onMouseMove: D
    } : {}
  }, Ae = {};
  p || (oe.onTouchStart = et, oe.onTouchEnd = Xe), u || (oe.onMouseOver = Gl(fe, oe.onMouseOver), oe.onMouseLeave = Gl(Be, oe.onMouseLeave), z || (Ae.onMouseOver = Me, Ae.onMouseLeave = Be)), a || (oe.onFocus = Gl(he, oe.onFocus), oe.onBlur = Gl($e, oe.onBlur), z || (Ae.onFocus = he, Ae.onBlur = $e));
  const se = {
    ...r,
    arrow: o,
    disableInteractive: z,
    placement: k,
    touch: N.current
  }, ae = typeof R.popper == "function" ? R.popper(se) : R.popper, Ge = h.useMemo(() => {
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
  }, [P, ae == null ? void 0 : ae.popperOptions]), ot = PM(se), mt = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: ae,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [De, Hn] = Se("popper", {
    elementType: IM,
    externalForwardedProps: mt,
    ownerState: se,
    className: ot.popper
  }), [Oi, $o] = Se("transition", {
    elementType: qs,
    externalForwardedProps: mt,
    ownerState: se
  }), [jo, Oo] = Se("tooltip", {
    elementType: MM,
    className: ot.tooltip,
    externalForwardedProps: mt,
    ownerState: se
  }), [no, dl] = Se("arrow", {
    elementType: $M,
    className: ot.arrow,
    externalForwardedProps: mt,
    ownerState: se,
    ref: O
  });
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement($, oe), /* @__PURE__ */ c.jsx(De, {
      as: j1,
      placement: k,
      anchorEl: S ? {
        getBoundingClientRect: () => ({
          top: es.y,
          left: es.x,
          right: es.x,
          bottom: es.y,
          width: 0,
          height: 0
        })
      } : x,
      popperRef: qe,
      open: x ? K : !1,
      id: _,
      transition: !0,
      ...Ae,
      ...Hn,
      popperOptions: Ge,
      children: ({
        TransitionProps: ge
      }) => /* @__PURE__ */ c.jsx(Oi, {
        timeout: A.transitions.duration.shorter,
        ...ge,
        ...$o,
        children: /* @__PURE__ */ c.jsxs(jo, {
          ...Oo,
          children: [I, o ? /* @__PURE__ */ c.jsx(no, {
            ...dl
          }) : null]
        })
      })
    })]
  });
}), nt = B2({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => xe({
    props: e,
    name: "MuiStack"
  })
});
function jM(e) {
  return ye("MuiTab", e);
}
const Nn = pe("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), OM = (e) => {
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
  return ve(u, jM, t);
}, AM = H(Ro, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ce(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
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
  ...e.focusVisible && o1(3),
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
        [`&.${cf.focusVisible}`]: {
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
}))), ts = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = r, E = U1(), k = H1({
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
  }, L = OM(I), $ = a && p && /* @__PURE__ */ h.isValidElement(a) ? /* @__PURE__ */ h.cloneElement(a, {
    className: te(L.icon, a.props.className)
  }) : a, A = (j) => {
    !S && y && y(j, m), f && f(j);
  }, x = (j) => {
    C && !S && y && y(j, m), v && v(j);
  };
  return /* @__PURE__ */ c.jsxs(AM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: te(L.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": S,
    disabled: i,
    onClick: A,
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
}), sx = /* @__PURE__ */ h.createContext();
function NM(e) {
  return ye("MuiTable", e);
}
pe("MuiTable", ["root", "stickyHeader"]);
const LM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return ve({
    root: ["root", n && "stickyHeader"]
  }, NM, t);
}, zM = H("table", {
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
}))), Fg = "table", BM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Fg,
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
  }, p = LM(d), y = h.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ c.jsx(sx.Provider, {
    value: y,
    children: /* @__PURE__ */ c.jsx(zM, {
      as: i,
      role: i === Fg ? null : "table",
      ref: n,
      className: te(p.root, o),
      ownerState: d,
      ...u
    })
  });
}), cc = /* @__PURE__ */ h.createContext();
function _M(e) {
  return ye("MuiTableBody", e);
}
pe("MuiTableBody", ["root"]);
const FM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, _M, t);
}, DM = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), WM = {
  variant: "body"
}, Dg = "tbody", UM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Dg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = FM(l);
  return /* @__PURE__ */ c.jsx(cc.Provider, {
    value: WM,
    children: /* @__PURE__ */ c.jsx(DM, {
      className: te(a.root, o),
      as: i,
      ref: n,
      role: i === Dg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function VM(e) {
  return ye("MuiTableCell", e);
}
const HM = pe("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), KM = (e) => {
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
  return ve(l, VM, t);
}, GM = H("td", {
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
  } = r, f = h.useContext(sx), v = h.useContext(cc), S = v && v.variant === "head";
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
  }, w = KM(b);
  let E = null;
  return d && (E = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ c.jsx(GM, {
    as: C,
    ref: n,
    className: te(w.root, i),
    "aria-sort": E,
    scope: g,
    ownerState: b,
    ...y
  });
});
function YM(e) {
  return ye("MuiTableContainer", e);
}
pe("MuiTableContainer", ["root"]);
const QM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, YM, t);
}, XM = H("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), qM = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = QM(l);
  return /* @__PURE__ */ c.jsx(XM, {
    ref: n,
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ...s
  });
});
function ZM(e) {
  return ye("MuiTableHead", e);
}
pe("MuiTableHead", ["root"]);
const JM = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, ZM, t);
}, e5 = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), t5 = {
  variant: "head"
}, Wg = "thead", n5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Wg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = JM(l);
  return /* @__PURE__ */ c.jsx(cc.Provider, {
    value: t5,
    children: /* @__PURE__ */ c.jsx(e5, {
      as: i,
      className: te(a.root, o),
      ref: n,
      role: i === Wg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), r5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), o5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function i5(e) {
  return ye("MuiTableRow", e);
}
const Ug = pe("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), s5 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return ve({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, i5, t);
}, l5 = H("tr", {
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
  [`&.${Ug.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ug.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Vg = "tr", Xc = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Vg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = h.useContext(cc), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, p = s5(d);
  return /* @__PURE__ */ c.jsx(l5, {
    as: i,
    ref: n,
    className: te(p.root, o),
    role: i === Vg ? null : "row",
    ownerState: d,
    ...a
  });
});
function a5(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function u5(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = a5,
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
const c5 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function d5(e) {
  const {
    onChange: t,
    ...n
  } = e, r = h.useRef(), o = h.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return dt(() => {
    const s = nc(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Vn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), h.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ c.jsx("div", {
    style: c5,
    ...n,
    ref: o
  });
}
function f5(e) {
  return ye("MuiTabScrollButton", e);
}
const p5 = pe("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), m5 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return ve({
    root: ["root", n, r && "disabled"]
  }, f5, t);
}, h5 = H(Ro, {
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
  [`&.${p5.disabled}`]: {
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
}), g5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  } = d, f = Ju(), v = {
    isRtl: f,
    ...r
  }, S = m5(v), C = i.StartScrollButtonIcon ?? r5, g = i.EndScrollButtonIcon ?? o5, m = Ei({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), b = Ei({
    elementType: g,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ c.jsx(h5, {
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
function y5(e) {
  return ye("MuiTabs", e);
}
const qc = pe("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), v5 = (e) => {
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
  }, y5, a);
}, x5 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${qc.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${qc.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${qc.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), b5 = H("div", {
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
}), S5 = H("div", {
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
}), w5 = H("span", {
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
}))), C5 = H(d5)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Hg = {}, k5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = xe({
    props: t,
    name: "MuiTabs"
  }), o = eo(), i = Ju(), s = lc(o.motion.reducedMotion, !1), {
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
    ...L
  } = r, $ = T === "scrollable", A = g === "vertical", x = A ? "scrollTop" : "scrollLeft", j = A ? "top" : "left", P = A ? "bottom" : "right", O = A ? "clientHeight" : "clientWidth", N = A ? "height" : "width", M = {
    ...r,
    component: f,
    allowScrollButtonsMobile: v,
    indicatorColor: S,
    orientation: g,
    vertical: A,
    scrollButtons: m,
    textColor: k,
    variant: T,
    visibleScrollbar: I,
    fixed: !$,
    hideScrollbar: $ && !I,
    scrollableX: $ && !A,
    scrollableY: $ && A,
    centered: d && !$,
    scrollButtonsHideMobile: !v
  }, z = v5(M), F = Ei({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: M
  }), U = Ei({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: M
  }), [W, Q] = h.useState(!1), [G, X] = h.useState(Hg), [K, q] = h.useState(!1), [_, ne] = h.useState(!1), [re, ke] = h.useState(!1), me = R === !1 ? null : R, [de, fe] = h.useState(!1), [Me, Be] = h.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Pe = /* @__PURE__ */ new Map(), $e = h.useRef(null), he = h.useRef(null), je = {
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
        const yt = Te[Pe.get(R)];
        be = yt ? yt.getBoundingClientRect() : null;
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
    A ? (Te = "top", Z && ee && (be = Z.top - ee.top + ee.scrollTop)) : (Te = i ? "right" : "left", Z && ee && (be = (i ? -1 : 1) * (Z[Te] - ee[Te] + ee.scrollLeft)));
    const yt = {
      [Te]: be,
      // May be wrong until the font is loaded.
      [N]: Z ? Z[N] : 0
    };
    if (typeof G[Te] != "number" || typeof G[N] != "number")
      X(yt);
    else {
      const ur = Math.abs(G[Te] - yt[Te]), Kn = Math.abs(G[N] - yt[N]);
      (ur >= 1 || Kn >= 1) && X(yt);
    }
  }), Fe = (ee, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? u5(x, $e.current, ee, {
      duration: o.transitions.duration.standard
    }) : $e.current[x] = ee;
  }, qe = (ee) => {
    let Z = $e.current[x];
    A ? Z += ee : Z += ee * (i ? -1 : 1), Fe(Z);
  }, D = () => {
    const ee = $e.current[O];
    let Z = 0;
    const be = Array.from(he.current.children);
    for (let Te = 0; Te < be.length; Te += 1) {
      const yt = be[Te];
      if (Z + yt[O] > ee) {
        Te === 0 && (Z = ee);
        break;
      }
      Z += yt[O];
    }
    return Z;
  }, le = () => {
    qe(-1 * D());
  }, ie = () => {
    qe(D());
  }, [oe, {
    onChange: Ae,
    ...se
  }] = Se("scrollbar", {
    className: te(z.scrollableX, z.hideScrollbar),
    elementType: C5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: je,
    ownerState: M
  }), ae = h.useCallback((ee) => {
    Ae == null || Ae(ee), Be({
      overflow: null,
      scrollbarWidth: ee
    });
  }, [Ae]), [Ge, ot] = Se("scrollButtons", {
    className: z.scrollButtons,
    elementType: g5,
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
        endScrollButtonIcon: U
      }
    }
  }), mt = () => {
    const ee = {};
    ee.scrollbarSizeListener = $ ? /* @__PURE__ */ c.jsx(oe, {
      ...se,
      onChange: ae
    }) : null;
    const be = $ && (m === "auto" && (K || _) || m === !0);
    return ee.scrollButtonStart = be ? /* @__PURE__ */ c.jsx(Ge, {
      direction: i ? "right" : "left",
      onClick: le,
      disabled: !K,
      ...ot
    }) : null, ee.scrollButtonEnd = be ? /* @__PURE__ */ c.jsx(Ge, {
      direction: i ? "left" : "right",
      onClick: ie,
      disabled: !_,
      ...ot
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
  }), Hn = Je(() => {
    $ && m !== !1 && ke(!re);
  });
  h.useEffect(() => {
    const ee = nc(() => {
      $e.current && Xe();
    });
    let Z;
    const be = (ur) => {
      ur.forEach((Kn) => {
        Kn.removedNodes.forEach((ro) => {
          Z == null || Z.unobserve(ro);
        }), Kn.addedNodes.forEach((ro) => {
          Z == null || Z.observe(ro);
        });
      }), ee(), Hn();
    }, Te = Vn($e.current);
    Te.addEventListener("resize", ee);
    let yt;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(ee), Array.from(he.current.children).forEach((ur) => {
      Z.observe(ur);
    })), typeof MutationObserver < "u" && (yt = new MutationObserver(be), yt.observe(he.current, {
      childList: !0
    })), () => {
      ee.clear(), Te.removeEventListener("resize", ee), yt == null || yt.disconnect(), Z == null || Z.disconnect();
    };
  }, [Xe, Hn]), h.useEffect(() => {
    const ee = Array.from(he.current.children), Z = ee.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && $ && m !== !1) {
      const be = ee[0], Te = ee[Z - 1], yt = {
        root: $e.current,
        threshold: 0.99
      }, ur = (zo) => {
        q(!zo[0].isIntersecting);
      }, Kn = new IntersectionObserver(ur, yt);
      Kn.observe(be);
      const ro = (zo) => {
        ne(!zo[0].isIntersecting);
      }, Ni = new IntersectionObserver(ro, yt);
      return Ni.observe(Te), () => {
        Kn.disconnect(), Ni.disconnect();
      };
    }
  }, [$, m, re, p == null ? void 0 : p.length]), h.useEffect(() => {
    Q(!0);
  }, []), h.useEffect(() => {
    Xe();
  }), h.useEffect(() => {
    De(Hg !== G);
  }, [De, G]), h.useImperativeHandle(u, () => ({
    updateIndicator: Xe,
    updateScrollButtons: Hn
  }), [Xe, Hn]);
  const [Oi, $o] = Se("indicator", {
    className: z.indicator,
    elementType: w5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: G
    }
  }), jo = /* @__PURE__ */ c.jsx(Oi, {
    ...$o
  }), Oo = V1({
    activeItemId: de ? void 0 : me,
    orientation: g,
    isRtl: i
  }), no = Oo.getContainerProps(), ge = h.Children.toArray(p).filter(h.isValidElement).map((ee, Z) => {
    const be = ee.props.value === void 0 ? Z : ee.props.value;
    return Pe.set(be, Z), {
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
      indicator: be && !W && jo,
      selected: be,
      selectionFollowsFocus: b,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), Ye = mt(), [zt, fl] = Se("root", {
    ref: n,
    className: te(z.root, y),
    elementType: x5,
    externalForwardedProps: {
      ...je,
      ...L,
      component: f
    },
    ownerState: M
  }), [Ao, No] = Se("scroller", {
    ref: $e,
    className: z.scroller,
    elementType: b5,
    externalForwardedProps: je,
    ownerState: M,
    additionalProps: {
      style: {
        overflow: Me.overflow,
        [A ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: I ? void 0 : -Me.scrollbarWidth
      }
    }
  }), Lo = pt(no.ref, he), dc = (ee) => {
    const Z = he.current, be = er(gt(Z));
    (be == null ? void 0 : be.getAttribute("role")) === "tab" && no.onKeyDown(ee);
  }, [pl, Ai] = Se("list", {
    ref: Lo,
    className: z.list,
    elementType: S5,
    externalForwardedProps: je,
    ownerState: M,
    getSlotProps: (ee) => ({
      ...ee,
      onBlur: (Z) => {
        var be;
        yo(Z.currentTarget, Z.relatedTarget) || fe(!1), (be = ee.onBlur) == null || be.call(ee, Z);
      },
      onKeyDown: (Z) => {
        var be;
        dc(Z), (be = ee.onKeyDown) == null || be.call(ee, Z);
      },
      onFocus: (Z) => {
        var be;
        fe(!0), no.onFocus(Z), (be = ee.onFocus) == null || be.call(ee, Z);
      }
    })
  });
  return /* @__PURE__ */ c.jsxs(zt, {
    ...fl,
    children: [Ye.scrollButtonStart, Ye.scrollbarSizeListener, /* @__PURE__ */ c.jsxs(Ao, {
      ...No,
      children: [/* @__PURE__ */ c.jsx(pl, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Ai,
        children: /* @__PURE__ */ c.jsx(Jp.Provider, {
          value: Oo,
          children: ge
        })
      }), W && jo]
    }), Ye.scrollButtonEnd]
  });
});
function T5(e) {
  return ye("MuiTextField", e);
}
pe("MuiTextField", ["root"]);
const R5 = {
  standard: Zp,
  filled: qp,
  outlined: em
}, E5 = (e) => {
  const {
    classes: t
  } = e;
  return ve({
    root: ["root"]
  }, T5, t);
}, P5 = H(WP, {
  name: "MuiTextField",
  slot: "Root"
})({}), $r = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    rows: L,
    select: $ = !1,
    slots: A = {},
    slotProps: x = {},
    type: j,
    value: P,
    variant: O = "outlined",
    ...N
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
  }, z = E5(M), F = Er(v), U = f && F ? `${F}-helper-text` : void 0, W = C && F ? `${F}-label` : void 0, Q = R5[O], G = {
    slots: A,
    slotProps: x
  }, [X, K] = Se("select", {
    elementType: qa,
    externalForwardedProps: G,
    ownerState: M
  }), q = $ && K.native, _ = {}, ne = G.slotProps.inputLabel;
  O === "outlined" && (ne && typeof ne.shrink < "u" && (_.notched = ne.shrink), _.label = C), $ && (q || (_.id = void 0), _["aria-describedby"] = void 0);
  const [re, ke] = Se("root", {
    elementType: P5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...G,
      ...N
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
    elementType: iI,
    externalForwardedProps: G,
    ownerState: M
  }), [Be, Pe] = Se("htmlInput", {
    elementType: "input",
    externalForwardedProps: G,
    ownerState: M
  }), [$e, he] = Se("formHelperText", {
    elementType: HP,
    externalForwardedProps: G,
    ownerState: M
  }), je = /* @__PURE__ */ c.jsx(me, {
    "aria-describedby": U,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: y,
    multiline: b,
    name: w,
    rows: L,
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
    inputProps: Pe,
    slots: {
      input: A.htmlInput ? Be : void 0
    },
    ...de
  });
  return /* @__PURE__ */ c.jsxs(re, {
    ...ke,
    children: [C != null && C !== "" && /* @__PURE__ */ c.jsx(fe, {
      htmlFor: $ && !q ? void 0 : F,
      id: W,
      ...$ && !q && {
        component: "div"
      },
      ...Me,
      children: C
    }), $ ? /* @__PURE__ */ c.jsx(X, {
      "aria-describedby": U,
      id: F,
      labelId: W,
      value: P,
      input: je,
      ...K,
      children: s
    }) : je, f && /* @__PURE__ */ c.jsx($e, {
      id: U,
      ...he,
      children: f
    })]
  });
}), I5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), Zc = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Kg = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), M5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M8 5v14l11-7z"
})), $5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M6 6h12v12H6z"
})), j5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), O5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z"
})), Jc = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), A5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), N5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
})), L5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), z5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5M7 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
})), ed = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), B5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "m20.2 5.9.8-.8C19.6 3.7 17.8 3 16 3s-3.6.7-5 2.1l.8.8C13 4.8 14.5 4.2 16 4.2s3 .6 4.2 1.7m-.9.8c-.9-.9-2.1-1.4-3.3-1.4s-2.4.5-3.3 1.4l.8.8c.7-.7 1.6-1 2.5-1s1.8.3 2.5 1zM19 13h-2V9h-2v4H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M8 18H6v-2h2zm3.5 0h-2v-2h2zm3.5 0h-2v-2h2z"
})), Gg = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3m0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5m8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5"
})), _5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19"
})), F5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), D5 = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Yg = Ke(/* @__PURE__ */ c.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5z"
})), W5 = Ke(/* @__PURE__ */ c.jsx("path", {
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
], st = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', yr = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Kt({ children: e, sx: t }) {
  return /* @__PURE__ */ c.jsx(
    Ee,
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
function ns({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ c.jsxs(lr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ c.jsxs(
      nt,
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
    /* @__PURE__ */ c.jsx(Ne, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Ho({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ c.jsxs(Ne, { sx: n, children: [
    /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ c.jsx(
        Ee,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ c.jsx(Ee, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function Ht({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ c.jsxs(Ne, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ c.jsx(Kt, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ c.jsx(
      Ee,
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
function Qg({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ c.jsx(
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
function U5(e, t) {
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
function V5({ lines: e, running: t }) {
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
    lr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: yr.bg,
        color: yr.fg,
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
        e.map((i, s) => /* @__PURE__ */ c.jsx(
          Ne,
          {
            sx: {
              color: i.stream === "stderr" ? yr.err : i.stream === "meta" ? yr.dim : yr.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ c.jsx(Ne, { sx: { color: yr.dim }, children: "▍running…" }),
        /* @__PURE__ */ c.jsx("div", { ref: n })
      ]
    }
  );
}
function H5(e) {
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
function Xg({
  text: e,
  size: t = 220
}) {
  const n = h.useRef(null);
  return h.useEffect(() => {
    const r = n.current;
    if (!r) return;
    const o = r.getContext("2d");
    if (!o) return;
    const i = H5(e), s = i.length, l = t / (s + 4), a = l * 2;
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
    Ne,
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
function Yl(e) {
  if (!e || e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / Math.pow(t, r)).toFixed(2))} ${n[r]}`;
}
function K5(e) {
  if (!e || e === 0) return "Never";
  const n = Math.floor(Date.now() / 1e3) - e;
  return n < 60 ? `${n}s ago` : n < 3600 ? `${Math.floor(n / 60)}m ago` : n < 86400 ? `${Math.floor(n / 3600)}h ago` : `${Math.floor(n / 86400)}d ago`;
}
const Ql = { p: 2, "&:last-child": { pb: 2 } }, Xl = 2.25;
function G5({ ctx: e }) {
  const t = h.useMemo(() => tc(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ c.jsx(Gk, { theme: t, children: /* @__PURE__ */ c.jsx(Y5, { ctx: e }) });
}
function Y5({ ctx: e }) {
  const [t, n] = h.useState(0), [r, o] = h.useState(null), [i, s] = h.useState(null), [l, a] = h.useState(null), [u, d] = h.useState([]), [p, y] = h.useState([]), [f, v] = h.useState(!1), [S, C] = h.useState(null), [g, m] = h.useState(!1), [b, w] = h.useState(""), [E, k] = h.useState([]), [R, T] = h.useState(!1), [I, L] = h.useState({
    name: "",
    ip: "",
    allowed_ips: "0.0.0.0/0, ::/0",
    dns: Ln[0].servers,
    preshared_key: ""
  }), [$, A] = h.useState(Ln[0].id), [x, j] = h.useState("all"), [P, O] = h.useState("create"), [N, M] = h.useState(""), [z, F] = h.useState(null), [U, W] = h.useState(null), [Q, G] = h.useState(""), [X, K] = h.useState(null), [q, _] = h.useState(null), [ne, re] = h.useState(""), ke = h.useRef(null);
  h.useEffect(() => () => {
    var D;
    return (D = ke.current) == null ? void 0 : D.abort();
  }, []);
  const me = h.useCallback(
    async (D, le) => {
      const ie = await e.api(D, le), oe = await ie.json().catch(() => ({}));
      if (!ie.ok) throw new Error(oe.message ?? `HTTP ${ie.status}`);
      return oe;
    },
    [e]
  ), de = h.useCallback(async () => {
    v(!0);
    try {
      const [D, le, ie, oe, Ae] = await Promise.all([
        me("/server/status").catch(() => null),
        me("/server/config").catch(() => null),
        me("/peers").catch(() => ({ peers: [] })),
        me("/server/logs").catch(() => ({ logs: [] })),
        me("/meta").catch(() => null)
      ]);
      D && o(D), le && s(le), Ae && a(Ae), d((ie == null ? void 0 : ie.peers) ?? []), y((oe == null ? void 0 : oe.logs) ?? []);
    } catch (D) {
      C(D.message || "Failed to load WireGuard data");
    } finally {
      v(!1);
    }
  }, [me]);
  h.useEffect(() => {
    de();
    const D = setInterval(de, 15e3);
    return () => clearInterval(D);
  }, [de]);
  async function fe(D, le, ie, oe) {
    w(D), k([]), T(!0), m(!0);
    const Ae = new AbortController();
    ke.current = Ae;
    try {
      for await (const se of e.run(le, { method: ie, body: oe, signal: Ae.signal }))
        k((ae) => U5(ae, se));
      de();
    } catch (se) {
      Ae.signal.aborted || k((ae) => [...ae, { stream: "stderr", text: String(se) }]);
    } finally {
      T(!1);
    }
  }
  const Me = () => fe("Starting WireGuard Server", "/server/start", "POST"), Be = () => fe("Stopping WireGuard Server", "/server/stop", "POST"), Pe = () => fe("Restarting WireGuard Server", "/server/restart", "POST"), $e = async () => {
    var D, le;
    if (!I.name.trim()) {
      C("Peer name is required");
      return;
    }
    if (P === "import" && !N.trim()) {
      C("Client public key is required for import");
      return;
    }
    v(!0);
    try {
      if (P === "import") {
        const ie = {
          name: I.name.trim(),
          public_key: N.trim(),
          ip: ((D = I.ip) == null ? void 0 : D.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || "1.1.1.1, 8.8.8.8",
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, oe = await me("/peers/import", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ie)
        });
        oe != null && oe.peer && (F(oe.peer), n(0), L({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: Ln[0].servers,
          preshared_key: ""
        }), A(Ln[0].id), M(""), de());
      } else {
        const ie = {
          name: I.name.trim(),
          ip: ((le = I.ip) == null ? void 0 : le.trim()) || void 0,
          allowed_ips: I.allowed_ips || "0.0.0.0/0, ::/0",
          dns: I.dns || Ln[0].servers,
          preshared_key: I.preshared_key ? I.preshared_key : void 0
        }, oe = await me("/peers/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ie)
        });
        oe != null && oe.peer && (F(oe.peer), n(0), L({
          name: "",
          ip: "",
          allowed_ips: "0.0.0.0/0, ::/0",
          dns: Ln[0].servers,
          preshared_key: ""
        }), A(Ln[0].id), de());
      }
    } catch (ie) {
      C(ie.message || "Failed to create or import client peer");
    } finally {
      v(!1);
    }
  }, he = async (D) => {
    try {
      await me(`/peers/${encodeURIComponent(D.id)}/toggle`, {
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
        await me(`/peers/${encodeURIComponent(q.id)}/rename`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ new_name: ne.trim() })
        }), C(`Peer renamed to ${ne.trim()}`), _(null), re(""), de();
      } catch (D) {
        C(D.message || "Failed to rename peer");
      }
  }, et = async (D) => {
    K(null), await fe(`Deleting Peer ${D.name}`, `/peers/${encodeURIComponent(D.id)}`, "DELETE");
  }, Xe = async (D) => {
    W(D);
    try {
      const le = await me(`/peers/${encodeURIComponent(D.id)}/config`);
      G((le == null ? void 0 : le.config) || "");
    } catch {
      G("# Error loading peer configuration");
    }
  }, Fe = (D, le) => {
    const ie = new Blob([le], { type: "text/plain;charset=utf-8" }), oe = URL.createObjectURL(ie), Ae = document.createElement("a");
    Ae.href = oe, Ae.download = `${D}.conf`, Ae.click(), URL.revokeObjectURL(oe);
  }, qe = (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ c.jsxs(Ne, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ c.jsxs(
      nt,
      {
        direction: { xs: "column", sm: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ c.jsx(I5, { sx: { fontSize: 32, color: "primary.main" } }),
            /* @__PURE__ */ c.jsxs(Ne, { children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "h5", sx: { fontWeight: 700, lineHeight: 1.2 }, children: "WireGuard VPN" }),
              /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary" }, children: "High-performance kernel VPN tunnels & client access" })
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
            /* @__PURE__ */ c.jsx(
              fr,
              {
                size: "small",
                label: qe ? "RUNNING" : "STOPPED",
                color: qe ? "success" : "default",
                sx: { fontWeight: 700, letterSpacing: "0.05em" }
              }
            ),
            /* @__PURE__ */ c.jsx(
              fr,
              {
                size: "small",
                label: `PORT ${(i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—"}/UDP`,
                variant: "outlined",
                sx: { fontFamily: st, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ c.jsx(
              fr,
              {
                size: "small",
                label: (r == null ? void 0 : r.endpoint) || "127.0.0.1",
                variant: "outlined",
                sx: { fontFamily: st, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ c.jsx(pr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              zn,
              {
                size: "small",
                onClick: de,
                disabled: f,
                sx: { border: "1px solid", borderColor: "divider" },
                children: f ? /* @__PURE__ */ c.jsx(xs, { size: 16, color: "inherit" }) : /* @__PURE__ */ c.jsx(Kg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            qe ? /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
              /* @__PURE__ */ c.jsx(pr, { title: "Restart WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  color: "warning",
                  onClick: Pe,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ c.jsx(j5, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ c.jsx(pr, { title: "Stop WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  color: "error",
                  onClick: Be,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ c.jsx($5, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ c.jsx(pr, { title: "Start WireGuard Server", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              zn,
              {
                size: "small",
                color: "success",
                onClick: Me,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (D) => Ys(D.palette.success.main, 0.1) },
                children: /* @__PURE__ */ c.jsx(M5, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ c.jsx(
              $t,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(Zc, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Add Client Peer"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(Ne, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }, gap: 2 }, children: [
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Ql, children: /* @__PURE__ */ c.jsxs(nt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "VPN Server Status" }),
          /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
            /* @__PURE__ */ c.jsx(Qg, { ok: qe, size: 10 }),
            /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 700 }, children: qe ? `Active (${(i == null ? void 0 : i.interface) || "wg0"})` : "Inactive" })
          ] }),
          /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.disabled", fontFamily: st }, children: [
            "Port: ",
            (i == null ? void 0 : i.listen_port) ?? (r == null ? void 0 : r.listen_port) ?? "—",
            " • UDP"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(Yg, { sx: { color: qe ? "success.main" : "text.disabled" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Ql, children: /* @__PURE__ */ c.jsxs(nt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "Connected Peers" }),
          /* @__PURE__ */ c.jsxs(Ee, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
            (r == null ? void 0 : r.active_peers_count) ?? 0,
            " ",
            /* @__PURE__ */ c.jsxs(Ee, { component: "span", variant: "body2", sx: { color: "text.secondary" }, children: [
              "/ ",
              u.length,
              " Total"
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.disabled" }, children: "Active handshakes < 3m" })
        ] }),
        /* @__PURE__ */ c.jsx(Gg, { sx: { color: "primary.main" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Ql, children: /* @__PURE__ */ c.jsxs(nt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "Total Bandwidth" }),
          /* @__PURE__ */ c.jsxs(Ee, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: st }, children: [
            "↓ ",
            Yl((r == null ? void 0 : r.total_rx_bytes) ?? 0)
          ] }),
          /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.secondary", fontFamily: st }, children: [
            "↑ ",
            Yl((r == null ? void 0 : r.total_tx_bytes) ?? 0)
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(_5, { sx: { color: "info.main" } })
      ] }) }) }),
      /* @__PURE__ */ c.jsx(Bl, { variant: "outlined", children: /* @__PURE__ */ c.jsx(_l, { sx: Ql, children: /* @__PURE__ */ c.jsxs(nt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "flex-start" }, children: [
        /* @__PURE__ */ c.jsxs(Ne, { sx: { minWidth: 0 }, children: [
          /* @__PURE__ */ c.jsx(Kt, { children: "VPN Subnet" }),
          /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 700, mt: 0.5, fontFamily: st }, children: (i == null ? void 0 : i.subnet) || (r == null ? void 0 : r.subnet) || "—" }),
          /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.disabled", fontFamily: st }, children: [
            "Gateway: ",
            (i == null ? void 0 : i.address) || (r == null ? void 0 : r.address) || "—"
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(B5, { sx: { color: "warning.main" } })
      ] }) }) })
    ] }),
    /* @__PURE__ */ c.jsxs(lr, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ c.jsxs(
        k5,
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
            /* @__PURE__ */ c.jsx(ts, { icon: /* @__PURE__ */ c.jsx(Gg, { sx: { fontSize: 18 } }), iconPosition: "start", label: "VPN Client Peers" }),
            /* @__PURE__ */ c.jsx(ts, { icon: /* @__PURE__ */ c.jsx(Zc, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Add Client Peer" }),
            /* @__PURE__ */ c.jsx(ts, { icon: /* @__PURE__ */ c.jsx(D5, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Server Configuration" }),
            /* @__PURE__ */ c.jsx(ts, { icon: /* @__PURE__ */ c.jsx(F5, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Live Traffic Logs" }),
            /* @__PURE__ */ c.jsx(ts, { icon: /* @__PURE__ */ c.jsx(Yg, { sx: { fontSize: 18 } }), iconPosition: "start", label: "Service & Isolation" })
          ]
        }
      ),
      t === 0 && /* @__PURE__ */ c.jsx(Ne, { children: /* @__PURE__ */ c.jsx(qM, { children: /* @__PURE__ */ c.jsxs(BM, { size: "medium", children: [
        /* @__PURE__ */ c.jsx(n5, { children: /* @__PURE__ */ c.jsxs(Xc, { sx: { bgcolor: "action.hover" }, children: [
          /* @__PURE__ */ c.jsx(Vt, { sx: { width: 40 } }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Peer Name" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Assigned IP" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Public Key" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Last Handshake" }) }),
          /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Kt, { children: "Transfer (Rx / Tx)" }) }),
          /* @__PURE__ */ c.jsx(Vt, { align: "right", children: /* @__PURE__ */ c.jsx(Kt, { children: "Actions" }) })
        ] }) }),
        /* @__PURE__ */ c.jsx(UM, { children: u.length === 0 ? /* @__PURE__ */ c.jsx(Xc, { children: /* @__PURE__ */ c.jsxs(Vt, { colSpan: 7, align: "center", sx: { py: 5 }, children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 1.5 }, children: "No VPN client peers configured yet." }),
          /* @__PURE__ */ c.jsx(
            $t,
            {
              variant: "outlined",
              size: "small",
              startIcon: /* @__PURE__ */ c.jsx(Zc, {}),
              onClick: () => n(1),
              children: "Create First Peer"
            }
          )
        ] }) }) : u.map((D) => {
          const le = D.last_handshake > 0 && Math.floor(Date.now() / 1e3) - D.last_handshake < 180;
          return /* @__PURE__ */ c.jsxs(Xc, { hover: !0, sx: { opacity: D.enabled ? 1 : 0.6 }, children: [
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Qg, { ok: D.enabled && le, size: 8 }) }),
            /* @__PURE__ */ c.jsxs(Vt, { children: [
              /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 0.5, sx: { alignItems: "center", flexWrap: "wrap" }, children: [
                /* @__PURE__ */ c.jsx(Ee, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: D.name }),
                !D.enabled && /* @__PURE__ */ c.jsx(fr, { size: "small", label: "DISABLED", color: "default", sx: { fontSize: "0.65rem", height: 18 } }),
                D.imported && /* @__PURE__ */ c.jsx(fr, { size: "small", label: "IMPORTED", color: "info", variant: "outlined", sx: { fontSize: "0.65rem", height: 18 } })
              ] }),
              /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.disabled", fontFamily: st }, children: [
                "id: ",
                D.id
              ] })
            ] }),
            /* @__PURE__ */ c.jsxs(Vt, { children: [
              /* @__PURE__ */ c.jsx(
                fr,
                {
                  size: "small",
                  label: D.ip,
                  sx: { fontFamily: st, fontSize: "0.75rem" }
                }
              ),
              D.dns ? /* @__PURE__ */ c.jsxs(
                Ee,
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
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(
              Ee,
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
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsx(Ee, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: K5(D.last_handshake) }) }),
            /* @__PURE__ */ c.jsx(Vt, { children: /* @__PURE__ */ c.jsxs(Ee, { sx: { fontFamily: st, fontSize: "0.75rem" }, children: [
              "↓ ",
              Yl(D.rx_bytes),
              " / ↑ ",
              Yl(D.tx_bytes)
            ] }) }),
            /* @__PURE__ */ c.jsx(Vt, { align: "right", children: /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ c.jsx(pr, { title: D.enabled ? "Disable Peer" : "Enable Peer", children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  onClick: () => he(D),
                  children: D.enabled ? /* @__PURE__ */ c.jsx(L5, { fontSize: "small", color: "success" }) : /* @__PURE__ */ c.jsx(z5, { fontSize: "small", color: "action" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(pr, { title: "Rename Peer", children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  onClick: () => {
                    _(D), re(D.name);
                  },
                  children: /* @__PURE__ */ c.jsx(N5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(pr, { title: "View QR Code & Config", children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => Xe(D),
                  children: /* @__PURE__ */ c.jsx(O5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(pr, { title: "Download .conf file", children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  onClick: async () => {
                    const ie = await me(
                      `/peers/${encodeURIComponent(D.id)}/config`
                    );
                    ie != null && ie.config && Fe(D.name, ie.config);
                  },
                  children: /* @__PURE__ */ c.jsx(Jc, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(pr, { title: "Delete Peer", children: /* @__PURE__ */ c.jsx(
                zn,
                {
                  size: "small",
                  color: "error",
                  onClick: () => K(D),
                  children: /* @__PURE__ */ c.jsx(A5, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, D.id);
        }) })
      ] }) }) }),
      t === 1 && /* @__PURE__ */ c.jsxs(Ne, { sx: { p: Xl, maxWidth: 640 }, children: [
        /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 600, mb: 0.5 }, children: P === "import" ? "Import Existing VPN Client Profile" : "Create New VPN Client Profile" }),
        /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: P === "import" ? "Registers an existing client public key without storing private credentials on the server." : "Generates cryptographic Curve25519 keypair, allocates next IP, and renders client QR code." }),
        /* @__PURE__ */ c.jsx(Ne, { sx: { mb: 2.5 }, children: /* @__PURE__ */ c.jsxs(GE, { size: "small", children: [
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
        /* @__PURE__ */ c.jsxs(nt, { spacing: 2.5, children: [
          /* @__PURE__ */ c.jsx(Ho, { label: "Peer / Device Name", hint: "Alphanumeric (e.g. phone, macbook, router)", children: /* @__PURE__ */ c.jsx(
            $r,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. alice-iphone",
              value: I.name,
              onChange: (D) => L({ ...I, name: D.target.value })
            }
          ) }),
          P === "import" && /* @__PURE__ */ c.jsx(Ho, { label: "Client Public Key", hint: "Base64 Curve25519 public key (44 chars, e.g. from wg pubkey)", children: /* @__PURE__ */ c.jsx(
            $r,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. 7XpQ...=",
              value: N,
              onChange: (D) => M(D.target.value),
              slotProps: {
                input: {
                  sx: { fontFamily: st, fontSize: "0.8125rem" }
                }
              }
            }
          ) }),
          /* @__PURE__ */ c.jsx(Ho, { label: "Assigned Client IP", hint: "Leave empty to auto-allocate next available 10.8.0.x", children: /* @__PURE__ */ c.jsx(
            $r,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "Auto-allocated (e.g. 10.8.0.2)",
              value: I.ip,
              onChange: (D) => L({ ...I, ip: D.target.value })
            }
          ) }),
          /* @__PURE__ */ c.jsx(Ho, { label: "Traffic Routing (Allowed IPs)", hint: "What traffic this client routes through VPN", children: /* @__PURE__ */ c.jsxs(
            qa,
            {
              fullWidth: !0,
              size: "small",
              value: x,
              onChange: (D) => {
                const le = D.target.value;
                j(le), le === "all" ? L({ ...I, allowed_ips: "0.0.0.0/0, ::/0" }) : le === "subnet" && L({ ...I, allowed_ips: "10.8.0.0/24" });
              },
              children: [
                /* @__PURE__ */ c.jsx(Vl, { value: "all", children: "Full Tunnel (All Traffic: 0.0.0.0/0, ::/0)" }),
                /* @__PURE__ */ c.jsx(Vl, { value: "subnet", children: "Split Tunnel (VPN Subnet Only: 10.8.0.0/24)" }),
                /* @__PURE__ */ c.jsx(Vl, { value: "custom", children: "Custom Allowed IPs" })
              ]
            }
          ) }),
          x === "custom" && /* @__PURE__ */ c.jsx(
            $r,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0.0.0.0/0, ::/0",
              value: I.allowed_ips,
              onChange: (D) => L({ ...I, allowed_ips: D.target.value })
            }
          ),
          /* @__PURE__ */ c.jsxs(
            Ho,
            {
              label: "DNS Resolver Preset",
              hint: "Curated privacy and security resolver presets or custom addresses",
              children: [
                /* @__PURE__ */ c.jsx(
                  qa,
                  {
                    fullWidth: !0,
                    size: "small",
                    value: $,
                    onChange: (D) => {
                      const le = D.target.value;
                      A(le);
                      const ie = Ln.find((oe) => oe.id === le);
                      ie && ie.id !== "custom" && L({ ...I, dns: ie.servers });
                    },
                    children: Ln.map((D) => /* @__PURE__ */ c.jsx(Vl, { value: D.id, children: /* @__PURE__ */ c.jsxs(Ne, { sx: { py: 0.5, width: "100%" }, children: [
                      /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 1, sx: { alignItems: "center", justifyContent: "space-between" }, children: [
                        /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { fontWeight: 600 }, children: D.name }),
                        D.servers ? /* @__PURE__ */ c.jsx(
                          fr,
                          {
                            size: "small",
                            label: D.servers,
                            variant: "outlined",
                            sx: { fontFamily: st, fontSize: "0.6875rem", height: 18 }
                          }
                        ) : null
                      ] }),
                      /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary", display: "block", mt: 0.25 }, children: D.description })
                    ] }) }, D.id))
                  }
                ),
                /* @__PURE__ */ c.jsx(nt, { direction: "row", spacing: 0.75, sx: { mt: 1, flexWrap: "wrap", gap: 0.5 }, children: Ln.map((D) => /* @__PURE__ */ c.jsx(
                  fr,
                  {
                    size: "small",
                    label: D.shortLabel,
                    variant: $ === D.id ? "filled" : "outlined",
                    color: $ === D.id ? "primary" : "default",
                    onClick: () => {
                      A(D.id), D.id !== "custom" && L({ ...I, dns: D.servers });
                    },
                    sx: { cursor: "pointer", fontSize: "0.75rem", height: 22 }
                  },
                  D.id
                )) })
              ]
            }
          ),
          /* @__PURE__ */ c.jsx(
            Ho,
            {
              label: "Client DNS Addresses",
              hint: "Comma-separated DNS server IPs assigned to this client profile",
              children: /* @__PURE__ */ c.jsx(
                $r,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "e.g. 1.1.1.1, 1.0.0.1",
                  value: I.dns,
                  onChange: (D) => {
                    const le = D.target.value;
                    L({ ...I, dns: le });
                    const ie = Ln.find((oe) => oe.servers === le.trim());
                    A(ie ? ie.id : "custom");
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
          /* @__PURE__ */ c.jsx(nt, { direction: "row", spacing: 2, sx: { pt: 1 }, children: /* @__PURE__ */ c.jsx(
            $t,
            {
              variant: "contained",
              color: "primary",
              onClick: $e,
              disabled: f || !I.name.trim() || P === "import" && !N.trim(),
              startIcon: f ? /* @__PURE__ */ c.jsx(xs, { size: 16 }) : /* @__PURE__ */ c.jsx(W5, {}),
              sx: { fontWeight: 700 },
              children: P === "import" ? "Import Client Profile" : "Generate Peer Profile & QR Code"
            }
          ) })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ c.jsxs(Ne, { sx: { p: Xl }, children: [
        /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 600, mb: 2 }, children: "WireGuard Server Parameters" }),
        /* @__PURE__ */ c.jsxs(Ne, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ne, { children: /* @__PURE__ */ c.jsx(ns, { label: "Interface & Port", children: /* @__PURE__ */ c.jsxs(nt, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(Ht, { label: "Interface Device", value: (i == null ? void 0 : i.interface) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Listen Port (UDP)", value: (i == null ? void 0 : i.listen_port) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Interface IP Address", value: (i == null ? void 0 : i.address) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "Tunnel MTU", value: (i == null ? void 0 : i.mtu) ?? "—" })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Ne, { children: /* @__PURE__ */ c.jsx(ns, { label: "Network & Public Keys", children: /* @__PURE__ */ c.jsxs(nt, { spacing: 2, children: [
            /* @__PURE__ */ c.jsx(Ht, { label: "Public Endpoint", value: (i == null ? void 0 : i.endpoint) ?? "—" }),
            /* @__PURE__ */ c.jsx(Ht, { label: "VPN Subnet", value: (i == null ? void 0 : i.subnet) ?? "—" }),
            /* @__PURE__ */ c.jsxs(Ne, { children: [
              /* @__PURE__ */ c.jsx(Kt, { children: "Server Public Key" }),
              /* @__PURE__ */ c.jsxs(nt, { direction: "row", spacing: 1, sx: { alignItems: "center", mt: 0.5 }, children: [
                /* @__PURE__ */ c.jsx(
                  Ee,
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
                /* @__PURE__ */ c.jsx(
                  zn,
                  {
                    size: "small",
                    onClick: () => {
                      i != null && i.public_key && (navigator.clipboard.writeText(i.public_key), C("Server public key copied to clipboard"));
                    },
                    children: /* @__PURE__ */ c.jsx(ed, { fontSize: "small" })
                  }
                )
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ c.jsx(Ne, { sx: { gridColumn: { xs: "span 1", sm: "span 2" } }, children: /* @__PURE__ */ c.jsxs(ns, { label: "Configuration File on Disk", children: [
            /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "All WireGuard settings and keys live exclusively under HostPanel root:" }),
            /* @__PURE__ */ c.jsx(
              Ee,
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
      t === 3 && /* @__PURE__ */ c.jsxs(Ne, { sx: { p: Xl }, children: [
        /* @__PURE__ */ c.jsxs(nt, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 600 }, children: "WireGuard Tunnel & Handshake Logs" }),
          /* @__PURE__ */ c.jsx($t, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ c.jsx(Kg, {}), onClick: de, children: "Refresh Logs" })
        ] }),
        /* @__PURE__ */ c.jsx(
          lr,
          {
            sx: {
              bgcolor: yr.bg,
              p: 2,
              maxHeight: "26rem",
              overflowY: "auto",
              fontFamily: st,
              fontSize: 12,
              lineHeight: 1.6,
              color: yr.fg
            },
            children: p.length === 0 ? /* @__PURE__ */ c.jsx(Ee, { sx: { color: yr.dim, fontFamily: st }, children: "No recent kernel or handshake events recorded." }) : p.map((D, le) => /* @__PURE__ */ c.jsx(Ne, { sx: { whiteSpace: "pre-wrap", wordBreak: "break-word" }, children: D }, le))
          }
        )
      ] }),
      t === 4 && /* @__PURE__ */ c.jsxs(Ne, { sx: { p: Xl }, children: [
        /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 600, mb: 1 }, children: "Strict 100% Isolation Architecture" }),
        /* @__PURE__ */ c.jsxs(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
          "HostPanel v3 enforces full isolation under ",
          /* @__PURE__ */ c.jsx("code", { children: "/opt/hostpanel" }),
          ". No configuration or socket is scattered across system ",
          /* @__PURE__ */ c.jsx("code", { children: "/etc/wireguard" }),
          "."
        ] }),
        /* @__PURE__ */ c.jsxs(Ne, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ne, { children: /* @__PURE__ */ c.jsx(ns, { label: "Daemon & Sandbox Specs", children: /* @__PURE__ */ c.jsxs(nt, { spacing: 2, children: [
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
          /* @__PURE__ */ c.jsx(Ne, { children: /* @__PURE__ */ c.jsx(ns, { label: "Isolated Path Sandboxes", children: /* @__PURE__ */ c.jsxs(nt, { spacing: 2, children: [
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
      Xi,
      {
        open: !!z,
        onClose: () => F(null),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsxs(Ji, { sx: { fontWeight: 700 }, children: [
            "Client Peer Created: ",
            z == null ? void 0 : z.name
          ] }),
          /* @__PURE__ */ c.jsx(Zi, { dividers: !0, children: /* @__PURE__ */ c.jsxs(nt, { spacing: 2.5, sx: { alignItems: "center", py: 1 }, children: [
            /* @__PURE__ */ c.jsxs(Ee, { variant: "body2", sx: { color: "text.secondary", textAlign: "center" }, children: [
              "Scan this QR code with the WireGuard mobile app (iOS / Android) or download the ",
              /* @__PURE__ */ c.jsx("code", { children: ".conf" }),
              " file for desktop."
            ] }),
            (z == null ? void 0 : z.imported) && /* @__PURE__ */ c.jsxs(lg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
              /* @__PURE__ */ c.jsx("strong", { children: "Client-Side Keys:" }),
              " This peer was registered using an imported public key. The private key remains exclusively on the client device."
            ] }),
            (z == null ? void 0 : z.config) && /* @__PURE__ */ c.jsx(Xg, { text: z.config, size: 220 }),
            /* @__PURE__ */ c.jsx(
              fr,
              {
                label: `Assigned IP: ${(z == null ? void 0 : z.ip) || "10.8.0.x"}`,
                color: "primary",
                sx: { fontWeight: 700, fontFamily: st }
              }
            ),
            /* @__PURE__ */ c.jsxs(Ne, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ c.jsx(Kt, { sx: { mb: 0.5 }, children: "Client Configuration File" }),
              /* @__PURE__ */ c.jsx(
                $r,
                {
                  fullWidth: !0,
                  multiline: !0,
                  rows: 6,
                  value: (z == null ? void 0 : z.config) || "",
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
          /* @__PURE__ */ c.jsxs(qi, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(
              $t,
              {
                startIcon: /* @__PURE__ */ c.jsx(ed, {}),
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
                startIcon: /* @__PURE__ */ c.jsx(Jc, {}),
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
      Xi,
      {
        open: !!U,
        onClose: () => {
          W(null), G("");
        },
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsxs(Ji, { sx: { fontWeight: 700 }, children: [
            "WireGuard Profile: ",
            U == null ? void 0 : U.name,
            " (",
            U == null ? void 0 : U.ip,
            ")"
          ] }),
          /* @__PURE__ */ c.jsx(Zi, { dividers: !0, children: /* @__PURE__ */ c.jsxs(nt, { spacing: 2, sx: { alignItems: "center", py: 1 }, children: [
            (U == null ? void 0 : U.imported) && /* @__PURE__ */ c.jsxs(lg, { severity: "info", sx: { width: "100%", fontSize: "0.8125rem" }, children: [
              /* @__PURE__ */ c.jsx("strong", { children: "Client-Side Keys:" }),
              " This peer uses an externally generated keypair. When using the config template below, replace ",
              /* @__PURE__ */ c.jsx("code", { children: "<CLIENT_PRIVATE_KEY>" }),
              " with the client's private key."
            ] }),
            Q ? /* @__PURE__ */ c.jsx(Xg, { text: Q, size: 220 }) : /* @__PURE__ */ c.jsx(xs, { size: 32 }),
            /* @__PURE__ */ c.jsxs(Ne, { sx: { width: "100%" }, children: [
              /* @__PURE__ */ c.jsx(Kt, { sx: { mb: 0.5 }, children: "Client Configuration (.conf)" }),
              /* @__PURE__ */ c.jsx(
                $r,
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
          /* @__PURE__ */ c.jsxs(qi, { sx: { p: 2 }, children: [
            /* @__PURE__ */ c.jsx(
              $t,
              {
                startIcon: /* @__PURE__ */ c.jsx(ed, {}),
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
                startIcon: /* @__PURE__ */ c.jsx(Jc, {}),
                onClick: () => {
                  U != null && U.name && Q && Fe(U.name, Q);
                },
                sx: { fontWeight: 700 },
                children: "Download .conf"
              }
            ),
            /* @__PURE__ */ c.jsx(
              $t,
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
    /* @__PURE__ */ c.jsxs(
      Xi,
      {
        open: !!X,
        onClose: () => K(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(Ji, { sx: { fontWeight: 700 }, children: "Delete Client Peer" }),
          /* @__PURE__ */ c.jsx(Zi, { children: /* @__PURE__ */ c.jsxs(Ee, { variant: "body2", sx: { color: "text.secondary" }, children: [
            "Are you sure you want to revoke and delete peer",
            " ",
            /* @__PURE__ */ c.jsx("strong", { children: X == null ? void 0 : X.name }),
            " (",
            X == null ? void 0 : X.ip,
            ")? This immediately severs VPN connectivity for this client."
          ] }) }),
          /* @__PURE__ */ c.jsxs(qi, { sx: { p: 2 }, children: [
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
      Xi,
      {
        open: !!q,
        onClose: () => {
          _(null), re("");
        },
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(Ji, { sx: { fontWeight: 700 }, children: "Rename Client Peer" }),
          /* @__PURE__ */ c.jsxs(Zi, { children: [
            /* @__PURE__ */ c.jsxs(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "Update display name for peer ",
              /* @__PURE__ */ c.jsx("code", { children: q == null ? void 0 : q.id }),
              " (",
              q == null ? void 0 : q.ip,
              "):"
            ] }),
            /* @__PURE__ */ c.jsx(
              $r,
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
          /* @__PURE__ */ c.jsxs(qi, { sx: { p: 2 }, children: [
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
      Xi,
      {
        open: g,
        onClose: () => !R && m(!1),
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ c.jsx(Ji, { sx: { fontWeight: 700 }, children: b }),
          /* @__PURE__ */ c.jsx(Zi, { dividers: !0, children: /* @__PURE__ */ c.jsx(V5, { lines: E, running: R }) }),
          /* @__PURE__ */ c.jsx(qi, { sx: { p: 2 }, children: /* @__PURE__ */ c.jsx($t, { disabled: R, onClick: () => m(!1), children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(
      TM,
      {
        open: !!S,
        autoHideDuration: 4e3,
        onClose: () => C(null),
        message: S
      }
    )
  ] });
}
let Za = null;
function Q5(e, t) {
  Za = d0(e), Za.render(
    /* @__PURE__ */ c.jsx(h.StrictMode, { children: /* @__PURE__ */ c.jsx(G5, { ctx: t }) })
  );
}
function X5() {
  const e = Za;
  Za = null, e && queueMicrotask(() => e.unmount());
}
const Z5 = { mount: Q5, unmount: X5 };
export {
  Z5 as default,
  Q5 as mount,
  X5 as unmount
};
//# sourceMappingURL=main.js.map
