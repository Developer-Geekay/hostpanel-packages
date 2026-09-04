var ox = Object.defineProperty;
var ix = (e, t, n) => t in e ? ox(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Di = (e, t, n) => ix(e, typeof t != "symbol" ? t + "" : t, n);
function sx(e, t) {
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
function lx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zg = { exports: {} }, Ga = {}, Jg = { exports: {} }, Me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs = Symbol.for("react.element"), ax = Symbol.for("react.portal"), cx = Symbol.for("react.fragment"), ux = Symbol.for("react.strict_mode"), dx = Symbol.for("react.profiler"), fx = Symbol.for("react.provider"), px = Symbol.for("react.context"), mx = Symbol.for("react.forward_ref"), hx = Symbol.for("react.suspense"), gx = Symbol.for("react.memo"), yx = Symbol.for("react.lazy"), Yp = Symbol.iterator;
function vx(e) {
  return e === null || typeof e != "object" ? null : (e = Yp && e[Yp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ey = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ty = Object.assign, ny = {};
function $i(e, t, n) {
  this.props = e, this.context = t, this.refs = ny, this.updater = n || ey;
}
$i.prototype.isReactComponent = {};
$i.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
$i.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ry() {
}
ry.prototype = $i.prototype;
function af(e, t, n) {
  this.props = e, this.context = t, this.refs = ny, this.updater = n || ey;
}
var cf = af.prototype = new ry();
cf.constructor = af;
ty(cf, $i.prototype);
cf.isPureReactComponent = !0;
var Gp = Array.isArray, oy = Object.prototype.hasOwnProperty, uf = { current: null }, iy = { key: !0, ref: !0, __self: !0, __source: !0 };
function sy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) oy.call(t, r) && !iy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: Zs, type: e, key: i, ref: s, props: o, _owner: uf.current };
}
function xx(e, t) {
  return { $$typeof: Zs, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function df(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zs;
}
function Sx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Xp = /\/+/g;
function su(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sx("" + e.key) : t.toString(36);
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
        case Zs:
        case ax:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + su(s, 0) : r, Gp(o) ? (n = "", e != null && (n = e.replace(Xp, "$&/") + "/"), Yl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (df(o) && (o = xx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Xp, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Gp(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + su(i, l);
    s += Yl(i, t, n, a, o);
  }
  else if (a = vx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + su(i, l++), s += Yl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Yl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function bx(e) {
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
var Yt = { current: null }, Gl = { transition: null }, wx = { ReactCurrentDispatcher: Yt, ReactCurrentBatchConfig: Gl, ReactCurrentOwner: uf };
function ly() {
  throw Error("act(...) is not supported in production builds of React.");
}
Me.Children = { map: yl, forEach: function(e, t, n) {
  yl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return yl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return yl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!df(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Me.Component = $i;
Me.Fragment = cx;
Me.Profiler = dx;
Me.PureComponent = af;
Me.StrictMode = ux;
Me.Suspense = hx;
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wx;
Me.act = ly;
Me.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ty({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = uf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) oy.call(t, a) && !iy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: Zs, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Me.createContext = function(e) {
  return e = { $$typeof: px, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: fx, _context: e }, e.Consumer = e;
};
Me.createElement = sy;
Me.createFactory = function(e) {
  var t = sy.bind(null, e);
  return t.type = e, t;
};
Me.createRef = function() {
  return { current: null };
};
Me.forwardRef = function(e) {
  return { $$typeof: mx, render: e };
};
Me.isValidElement = df;
Me.lazy = function(e) {
  return { $$typeof: yx, _payload: { _status: -1, _result: e }, _init: bx };
};
Me.memo = function(e, t) {
  return { $$typeof: gx, type: e, compare: t === void 0 ? null : t };
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
Me.unstable_act = ly;
Me.useCallback = function(e, t) {
  return Yt.current.useCallback(e, t);
};
Me.useContext = function(e) {
  return Yt.current.useContext(e);
};
Me.useDebugValue = function() {
};
Me.useDeferredValue = function(e) {
  return Yt.current.useDeferredValue(e);
};
Me.useEffect = function(e, t) {
  return Yt.current.useEffect(e, t);
};
Me.useId = function() {
  return Yt.current.useId();
};
Me.useImperativeHandle = function(e, t, n) {
  return Yt.current.useImperativeHandle(e, t, n);
};
Me.useInsertionEffect = function(e, t) {
  return Yt.current.useInsertionEffect(e, t);
};
Me.useLayoutEffect = function(e, t) {
  return Yt.current.useLayoutEffect(e, t);
};
Me.useMemo = function(e, t) {
  return Yt.current.useMemo(e, t);
};
Me.useReducer = function(e, t, n) {
  return Yt.current.useReducer(e, t, n);
};
Me.useRef = function(e) {
  return Yt.current.useRef(e);
};
Me.useState = function(e) {
  return Yt.current.useState(e);
};
Me.useSyncExternalStore = function(e, t, n) {
  return Yt.current.useSyncExternalStore(e, t, n);
};
Me.useTransition = function() {
  return Yt.current.useTransition();
};
Me.version = "18.3.1";
Jg.exports = Me;
var m = Jg.exports;
const ay = /* @__PURE__ */ lx(m), da = /* @__PURE__ */ sx({
  __proto__: null,
  default: ay
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
var Cx = m, kx = Symbol.for("react.element"), Tx = Symbol.for("react.fragment"), Ex = Object.prototype.hasOwnProperty, Rx = Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Px = { key: !0, ref: !0, __self: !0, __source: !0 };
function cy(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Ex.call(t, r) && !Px.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: kx, type: e, key: i, ref: s, props: o, _owner: Rx.current };
}
Ga.Fragment = Tx;
Ga.jsx = cy;
Ga.jsxs = cy;
Zg.exports = Ga;
var f = Zg.exports, uy = { exports: {} }, gn = {}, dy = { exports: {} }, fy = {};
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
  function t($, z) {
    var B = $.length;
    $.push(z);
    e: for (; 0 < B; ) {
      var W = B - 1 >>> 1, _ = $[W];
      if (0 < o(_, z)) $[W] = z, $[B] = _, B = W;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var z = $[0], B = $.pop();
    if (B !== z) {
      $[0] = B;
      e: for (var W = 0, _ = $.length, Q = _ >>> 1; W < Q; ) {
        var K = 2 * (W + 1) - 1, q = $[K], G = K + 1, X = $[G];
        if (0 > o(q, B)) G < _ && 0 > o(X, q) ? ($[W] = X, $[G] = B, W = G) : ($[W] = q, $[K] = B, W = K);
        else if (G < _ && 0 > o(X, B)) $[W] = X, $[G] = B, W = G;
        else break e;
      }
    }
    return z;
  }
  function o($, z) {
    var B = $.sortIndex - z.sortIndex;
    return B !== 0 ? B : $.id - z.id;
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
  var a = [], c = [], u = 1, p = null, v = 3, d = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S($) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= $) r(c), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(c);
    }
  }
  function w($) {
    if (b = !1, S($), !x) if (n(a) !== null) x = !0, L(E);
    else {
      var z = n(c);
      z !== null && N(w, z.startTime - $);
    }
  }
  function E($, z) {
    x = !1, b && (b = !1, y(T), T = -1), d = !0;
    var B = v;
    try {
      for (S(z), p = n(a); p !== null && (!(p.expirationTime > z) || $ && !I()); ) {
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
        var K = n(c);
        K !== null && N(w, K.startTime - z), Q = !1;
      }
      return Q;
    } finally {
      p = null, v = B, d = !1;
    }
  }
  var k = !1, R = null, T = -1, A = 5, O = -1;
  function I() {
    return !(e.unstable_now() - O < A);
  }
  function g() {
    if (R !== null) {
      var $ = e.unstable_now();
      O = $;
      var z = !0;
      try {
        z = R(!0, $);
      } finally {
        z ? M() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var M;
  if (typeof h == "function") M = function() {
    h(g);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), j = P.port2;
    P.port1.onmessage = g, M = function() {
      j.postMessage(null);
    };
  } else M = function() {
    C(g, 0);
  };
  function L($) {
    R = $, k || (k = !0, M());
  }
  function N($, z) {
    T = C(function() {
      $(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    x || d || (x = !0, L(E));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
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
      return $();
    } finally {
      v = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, z) {
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
    var B = v;
    v = $;
    try {
      return z();
    } finally {
      v = B;
    }
  }, e.unstable_scheduleCallback = function($, z, B) {
    var W = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? W + B : W) : B = W, $) {
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
    return _ = B + _, $ = { id: u++, callback: z, priorityLevel: $, startTime: B, expirationTime: _, sortIndex: -1 }, B > W ? ($.sortIndex = B, t(c, $), n(a) === null && $ === n(c) && (b ? (y(T), T = -1) : b = !0, N(w, B - W))) : ($.sortIndex = _, t(a, $), x || d || (x = !0, L(E))), $;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function($) {
    var z = v;
    return function() {
      var B = v;
      v = z;
      try {
        return $.apply(this, arguments);
      } finally {
        v = B;
      }
    };
  };
})(fy);
dy.exports = fy;
var Ix = dy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mx = m, pn = Ix;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var py = /* @__PURE__ */ new Set(), Ts = {};
function jo(e, t) {
  gi(e, t), gi(e + "Capture", t);
}
function gi(e, t) {
  for (Ts[e] = t, e = 0; e < t.length; e++) py.add(t[e]);
}
var xr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ku = Object.prototype.hasOwnProperty, $x = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Qp = {}, qp = {};
function jx(e) {
  return Ku.call(qp, e) ? !0 : Ku.call(Qp, e) ? !1 : $x.test(e) ? qp[e] = !0 : (Qp[e] = !0, !1);
}
function Ax(e, t, n, r) {
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
function Ox(e, t, n, r) {
  if (t === null || typeof t > "u" || Ax(e, t, n, r)) return !0;
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
function Gt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Lt[e] = new Gt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Lt[t] = new Gt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Lt[e] = new Gt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Lt[e] = new Gt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Lt[e] = new Gt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Lt[e] = new Gt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Lt[e] = new Gt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Lt[e] = new Gt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Lt[e] = new Gt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ff = /[\-:]([a-z])/g;
function pf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ff,
    pf
  );
  Lt[t] = new Gt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ff, pf);
  Lt[t] = new Gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ff, pf);
  Lt[t] = new Gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Lt[e] = new Gt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Lt.xlinkHref = new Gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Lt[e] = new Gt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function mf(e, t, n, r) {
  var o = Lt.hasOwnProperty(t) ? Lt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ox(t, n, o, r) && (n = null), r || o === null ? jx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Er = Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vl = Symbol.for("react.element"), Yo = Symbol.for("react.portal"), Go = Symbol.for("react.fragment"), hf = Symbol.for("react.strict_mode"), Yu = Symbol.for("react.profiler"), my = Symbol.for("react.provider"), hy = Symbol.for("react.context"), gf = Symbol.for("react.forward_ref"), Gu = Symbol.for("react.suspense"), Xu = Symbol.for("react.suspense_list"), yf = Symbol.for("react.memo"), jr = Symbol.for("react.lazy"), gy = Symbol.for("react.offscreen"), Zp = Symbol.iterator;
function Bi(e) {
  return e === null || typeof e != "object" ? null : (e = Zp && e[Zp] || e["@@iterator"], typeof e == "function" ? e : null);
}
var dt = Object.assign, lu;
function rs(e) {
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
  return (e = e ? e.displayName || e.name : "") ? rs(e) : "";
}
function Lx(e) {
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
      return e = cu(e.type, !1), e;
    case 11:
      return e = cu(e.type.render, !1), e;
    case 1:
      return e = cu(e.type, !0), e;
    default:
      return "";
  }
}
function Qu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Go:
      return "Fragment";
    case Yo:
      return "Portal";
    case Yu:
      return "Profiler";
    case hf:
      return "StrictMode";
    case Gu:
      return "Suspense";
    case Xu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case hy:
      return (e.displayName || "Context") + ".Consumer";
    case my:
      return (e._context.displayName || "Context") + ".Provider";
    case gf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case yf:
      return t = e.displayName || null, t !== null ? t : Qu(e.type) || "Memo";
    case jr:
      t = e._payload, e = e._init;
      try {
        return Qu(e(t));
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
      return Qu(t);
    case 8:
      return t === hf ? "StrictMode" : "Mode";
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
function yy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function zx(e) {
  var t = yy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function xl(e) {
  e._valueTracker || (e._valueTracker = zx(e));
}
function vy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = yy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function fa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function qu(e, t) {
  var n = t.checked;
  return dt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Jp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Gr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function xy(e, t) {
  t = t.checked, t != null && mf(e, "checked", t, !1);
}
function Zu(e, t) {
  xy(e, t);
  var n = Gr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ju(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ju(e, t.type, Gr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function em(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ju(e, t, n) {
  (t !== "number" || fa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var os = Array.isArray;
function li(e, t, n, r) {
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
function ed(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return dt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function tm(e, t) {
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
function Sy(e, t) {
  var n = Gr(t.value), r = Gr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function nm(e) {
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
function td(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? by(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sl, wy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sl = Sl || document.createElement("div"), Sl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Es(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cs = {
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
Object.keys(cs).forEach(function(e) {
  Dx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), cs[t] = cs[e];
  });
});
function Cy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || cs.hasOwnProperty(e) && cs[e] ? ("" + t).trim() : t + "px";
}
function ky(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Cy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Bx = dt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function nd(e, t) {
  if (t) {
    if (Bx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function rd(e, t) {
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
var od = null;
function vf(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var id = null, ai = null, ci = null;
function rm(e) {
  if (e = tl(e)) {
    if (typeof id != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = Ja(t), id(e.stateNode, e.type, t));
  }
}
function Ty(e) {
  ai ? ci ? ci.push(e) : ci = [e] : ai = e;
}
function Ey() {
  if (ai) {
    var e = ai, t = ci;
    if (ci = ai = null, rm(e), t) for (e = 0; e < t.length; e++) rm(t[e]);
  }
}
function Ry(e, t) {
  return e(t);
}
function Py() {
}
var uu = !1;
function Iy(e, t, n) {
  if (uu) return e(t, n);
  uu = !0;
  try {
    return Ry(e, t, n);
  } finally {
    uu = !1, (ai !== null || ci !== null) && (Py(), Ey());
  }
}
function Rs(e, t) {
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
  if (n && typeof n != "function") throw Error(V(231, t, typeof n));
  return n;
}
var sd = !1;
if (xr) try {
  var Fi = {};
  Object.defineProperty(Fi, "passive", { get: function() {
    sd = !0;
  } }), window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
} catch {
  sd = !1;
}
function Fx(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var us = !1, pa = null, ma = !1, ld = null, _x = { onError: function(e) {
  us = !0, pa = e;
} };
function Wx(e, t, n, r, o, i, s, l, a) {
  us = !1, pa = null, Fx.apply(_x, arguments);
}
function Ux(e, t, n, r, o, i, s, l, a) {
  if (Wx.apply(this, arguments), us) {
    if (us) {
      var c = pa;
      us = !1, pa = null;
    } else throw Error(V(198));
    ma || (ma = !0, ld = c);
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
function My(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function om(e) {
  if (Ao(e) !== e) throw Error(V(188));
}
function Hx(e) {
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
        if (i === n) return om(o), e;
        if (i === r) return om(o), t;
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
  return e = Hx(e), e !== null ? jy(e) : null;
}
function jy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = jy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ay = pn.unstable_scheduleCallback, im = pn.unstable_cancelCallback, Vx = pn.unstable_shouldYield, Kx = pn.unstable_requestPaint, yt = pn.unstable_now, Yx = pn.unstable_getCurrentPriorityLevel, xf = pn.unstable_ImmediatePriority, Oy = pn.unstable_UserBlockingPriority, ha = pn.unstable_NormalPriority, Gx = pn.unstable_LowPriority, Ly = pn.unstable_IdlePriority, Xa = null, tr = null;
function Xx(e) {
  if (tr && typeof tr.onCommitFiberRoot == "function") try {
    tr.onCommitFiberRoot(Xa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Bn = Math.clz32 ? Math.clz32 : Zx, Qx = Math.log, qx = Math.LN2;
function Zx(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Qx(e) / qx | 0) | 0;
}
var bl = 64, wl = 4194304;
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
function ga(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = is(l) : (i &= s, i !== 0 && (r = is(i)));
  } else s = n & ~o, s !== 0 ? r = is(s) : i !== 0 && (r = is(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Bn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function Jx(e, t) {
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
function eS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Bn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = Jx(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function ad(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ny() {
  var e = bl;
  return bl <<= 1, !(bl & 4194240) && (bl = 64), e;
}
function du(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Js(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Bn(t), e[t] = n;
}
function tS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Bn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Sf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Bn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ye = 0;
function zy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Dy, bf, By, Fy, _y, cd = !1, Cl = [], Br = null, Fr = null, _r = null, Ps = /* @__PURE__ */ new Map(), Is = /* @__PURE__ */ new Map(), Or = [], nS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function sm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Br = null;
      break;
    case "dragenter":
    case "dragleave":
      Fr = null;
      break;
    case "mouseover":
    case "mouseout":
      _r = null;
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
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = tl(t), t !== null && bf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function rS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Br = _i(Br, e, t, n, r, o), !0;
    case "dragenter":
      return Fr = _i(Fr, e, t, n, r, o), !0;
    case "mouseover":
      return _r = _i(_r, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ps.set(i, _i(Ps.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Is.set(i, _i(Is.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Wy(e) {
  var t = ho(e.target);
  if (t !== null) {
    var n = Ao(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = My(n), t !== null) {
          e.blockedOn = t, _y(e.priority, function() {
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
    var n = ud(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      od = r, n.target.dispatchEvent(r), od = null;
    } else return t = tl(n), t !== null && bf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function lm(e, t, n) {
  Xl(e) && n.delete(t);
}
function oS() {
  cd = !1, Br !== null && Xl(Br) && (Br = null), Fr !== null && Xl(Fr) && (Fr = null), _r !== null && Xl(_r) && (_r = null), Ps.forEach(lm), Is.forEach(lm);
}
function Wi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, cd || (cd = !0, pn.unstable_scheduleCallback(pn.unstable_NormalPriority, oS)));
}
function Ms(e) {
  function t(o) {
    return Wi(o, e);
  }
  if (0 < Cl.length) {
    Wi(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Br !== null && Wi(Br, e), Fr !== null && Wi(Fr, e), _r !== null && Wi(_r, e), Ps.forEach(t), Is.forEach(t), n = 0; n < Or.length; n++) r = Or[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Or.length && (n = Or[0], n.blockedOn === null); ) Wy(n), n.blockedOn === null && Or.shift();
}
var ui = Er.ReactCurrentBatchConfig, ya = !0;
function iS(e, t, n, r) {
  var o = Ye, i = ui.transition;
  ui.transition = null;
  try {
    Ye = 1, wf(e, t, n, r);
  } finally {
    Ye = o, ui.transition = i;
  }
}
function sS(e, t, n, r) {
  var o = Ye, i = ui.transition;
  ui.transition = null;
  try {
    Ye = 4, wf(e, t, n, r);
  } finally {
    Ye = o, ui.transition = i;
  }
}
function wf(e, t, n, r) {
  if (ya) {
    var o = ud(e, t, n, r);
    if (o === null) bu(e, t, r, va, n), sm(e, r);
    else if (rS(o, e, t, n, r)) r.stopPropagation();
    else if (sm(e, r), t & 4 && -1 < nS.indexOf(e)) {
      for (; o !== null; ) {
        var i = tl(o);
        if (i !== null && Dy(i), i = ud(e, t, n, r), i === null && bu(e, t, r, va, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else bu(e, t, r, null, n);
  }
}
var va = null;
function ud(e, t, n, r) {
  if (va = null, e = vf(r), e = ho(e), e !== null) if (t = Ao(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = My(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return va = e, null;
}
function Uy(e) {
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
      switch (Yx()) {
        case xf:
          return 1;
        case Oy:
          return 4;
        case ha:
        case Gx:
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
var Nr = null, Cf = null, Ql = null;
function Hy() {
  if (Ql) return Ql;
  var e, t = Cf, n = t.length, r, o = "value" in Nr ? Nr.value : Nr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Ql = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ql(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kl() {
  return !0;
}
function am() {
  return !1;
}
function yn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? kl : am, this.isPropagationStopped = am, this;
  }
  return dt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kl);
  }, persist: function() {
  }, isPersistent: kl }), t;
}
var ji = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, kf = yn(ji), el = dt({}, ji, { view: 0, detail: 0 }), lS = yn(el), fu, pu, Ui, Qa = dt({}, el, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Tf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Ui && (Ui && e.type === "mousemove" ? (fu = e.screenX - Ui.screenX, pu = e.screenY - Ui.screenY) : pu = fu = 0, Ui = e), fu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pu;
} }), cm = yn(Qa), aS = dt({}, Qa, { dataTransfer: 0 }), cS = yn(aS), uS = dt({}, el, { relatedTarget: 0 }), mu = yn(uS), dS = dt({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fS = yn(dS), pS = dt({}, ji, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mS = yn(pS), hS = dt({}, ji, { data: 0 }), um = yn(hS), gS = {
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
}, yS = {
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
}, vS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vS[e]) ? !!t[e] : !1;
}
function Tf() {
  return xS;
}
var SS = dt({}, el, { key: function(e) {
  if (e.key) {
    var t = gS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ql(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Tf, charCode: function(e) {
  return e.type === "keypress" ? ql(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ql(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), bS = yn(SS), wS = dt({}, Qa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dm = yn(wS), CS = dt({}, el, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Tf }), kS = yn(CS), TS = dt({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ES = yn(TS), RS = dt({}, Qa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), PS = yn(RS), IS = [9, 13, 27, 32], Ef = xr && "CompositionEvent" in window, ds = null;
xr && "documentMode" in document && (ds = document.documentMode);
var MS = xr && "TextEvent" in window && !ds, Vy = xr && (!Ef || ds && 8 < ds && 11 >= ds), fm = " ", pm = !1;
function Ky(e, t) {
  switch (e) {
    case "keyup":
      return IS.indexOf(t.keyCode) !== -1;
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
function Yy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xo = !1;
function $S(e, t) {
  switch (e) {
    case "compositionend":
      return Yy(t);
    case "keypress":
      return t.which !== 32 ? null : (pm = !0, fm);
    case "textInput":
      return e = t.data, e === fm && pm ? null : e;
    default:
      return null;
  }
}
function jS(e, t) {
  if (Xo) return e === "compositionend" || !Ef && Ky(e, t) ? (e = Hy(), Ql = Cf = Nr = null, Xo = !1, e) : null;
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
var AS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!AS[e.type] : t === "textarea";
}
function Gy(e, t, n, r) {
  Ty(r), t = xa(t, "onChange"), 0 < t.length && (n = new kf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var fs = null, $s = null;
function OS(e) {
  iv(e, 0);
}
function qa(e) {
  var t = Zo(e);
  if (vy(t)) return e;
}
function LS(e, t) {
  if (e === "change") return t;
}
var Xy = !1;
if (xr) {
  var hu;
  if (xr) {
    var gu = "oninput" in document;
    if (!gu) {
      var hm = document.createElement("div");
      hm.setAttribute("oninput", "return;"), gu = typeof hm.oninput == "function";
    }
    hu = gu;
  } else hu = !1;
  Xy = hu && (!document.documentMode || 9 < document.documentMode);
}
function gm() {
  fs && (fs.detachEvent("onpropertychange", Qy), $s = fs = null);
}
function Qy(e) {
  if (e.propertyName === "value" && qa($s)) {
    var t = [];
    Gy(t, $s, e, vf(e)), Iy(OS, t);
  }
}
function NS(e, t, n) {
  e === "focusin" ? (gm(), fs = t, $s = n, fs.attachEvent("onpropertychange", Qy)) : e === "focusout" && gm();
}
function zS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return qa($s);
}
function DS(e, t) {
  if (e === "click") return qa(t);
}
function BS(e, t) {
  if (e === "input" || e === "change") return qa(t);
}
function FS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var _n = typeof Object.is == "function" ? Object.is : FS;
function js(e, t) {
  if (_n(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ku.call(t, o) || !_n(e[o], t[o])) return !1;
  }
  return !0;
}
function ym(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function vm(e, t) {
  var n = ym(e);
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
    n = ym(n);
  }
}
function qy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Zy() {
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
function Rf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function _S(e) {
  var t = Zy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && qy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Rf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = vm(n, i);
        var s = vm(
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
var WS = xr && "documentMode" in document && 11 >= document.documentMode, Qo = null, dd = null, ps = null, fd = !1;
function xm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fd || Qo == null || Qo !== fa(r) || (r = Qo, "selectionStart" in r && Rf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ps && js(ps, r) || (ps = r, r = xa(dd, "onSelect"), 0 < r.length && (t = new kf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qo)));
}
function Tl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var qo = { animationend: Tl("Animation", "AnimationEnd"), animationiteration: Tl("Animation", "AnimationIteration"), animationstart: Tl("Animation", "AnimationStart"), transitionend: Tl("Transition", "TransitionEnd") }, yu = {}, Jy = {};
xr && (Jy = document.createElement("div").style, "AnimationEvent" in window || (delete qo.animationend.animation, delete qo.animationiteration.animation, delete qo.animationstart.animation), "TransitionEvent" in window || delete qo.transitionend.transition);
function Za(e) {
  if (yu[e]) return yu[e];
  if (!qo[e]) return e;
  var t = qo[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Jy) return yu[e] = t[n];
  return e;
}
var ev = Za("animationend"), tv = Za("animationiteration"), nv = Za("animationstart"), rv = Za("transitionend"), ov = /* @__PURE__ */ new Map(), Sm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Zr(e, t) {
  ov.set(e, t), jo(t, [e]);
}
for (var vu = 0; vu < Sm.length; vu++) {
  var xu = Sm[vu], US = xu.toLowerCase(), HS = xu[0].toUpperCase() + xu.slice(1);
  Zr(US, "on" + HS);
}
Zr(ev, "onAnimationEnd");
Zr(tv, "onAnimationIteration");
Zr(nv, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(rv, "onTransitionEnd");
gi("onMouseEnter", ["mouseout", "mouseover"]);
gi("onMouseLeave", ["mouseout", "mouseover"]);
gi("onPointerEnter", ["pointerout", "pointerover"]);
gi("onPointerLeave", ["pointerout", "pointerover"]);
jo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ss = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), VS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));
function bm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ux(r, t, void 0, e), e.currentTarget = null;
}
function iv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        bm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        bm(o, l, c), i = a;
      }
    }
  }
  if (ma) throw e = ld, ma = !1, ld = null, e;
}
function et(e, t) {
  var n = t[yd];
  n === void 0 && (n = t[yd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (sv(t, e, 2, !1), n.add(r));
}
function Su(e, t, n) {
  var r = 0;
  t && (r |= 4), sv(n, e, r, t);
}
var El = "_reactListening" + Math.random().toString(36).slice(2);
function As(e) {
  if (!e[El]) {
    e[El] = !0, py.forEach(function(n) {
      n !== "selectionchange" && (VS.has(n) || Su(n, !1, e), Su(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[El] || (t[El] = !0, Su("selectionchange", !1, t));
  }
}
function sv(e, t, n, r) {
  switch (Uy(t)) {
    case 1:
      var o = iS;
      break;
    case 4:
      o = sS;
      break;
    default:
      o = wf;
  }
  n = o.bind(null, t, n, e), o = void 0, !sd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
        if (s = ho(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Iy(function() {
    var c = i, u = vf(n), p = [];
    e: {
      var v = ov.get(e);
      if (v !== void 0) {
        var d = kf, x = e;
        switch (e) {
          case "keypress":
            if (ql(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = bS;
            break;
          case "focusin":
            x = "focus", d = mu;
            break;
          case "focusout":
            x = "blur", d = mu;
            break;
          case "beforeblur":
          case "afterblur":
            d = mu;
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
            d = cm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = cS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = kS;
            break;
          case ev:
          case tv:
          case nv:
            d = fS;
            break;
          case rv:
            d = ES;
            break;
          case "scroll":
            d = lS;
            break;
          case "wheel":
            d = PS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = mS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = dm;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", y = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, y !== null && (w = Rs(h, y), w != null && b.push(Os(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (v = new d(v, x, null, n, u), p.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", v && n !== od && (x = n.relatedTarget || n.fromElement) && (ho(x) || x[Sr])) break e;
        if ((d || v) && (v = u.window === u ? u : (v = u.ownerDocument) ? v.defaultView || v.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = c, x = x ? ho(x) : null, x !== null && (C = Ao(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = c), d !== x)) {
          if (b = cm, w = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = dm, w = "onPointerLeave", y = "onPointerEnter", h = "pointer"), C = d == null ? v : Zo(d), S = x == null ? v : Zo(x), v = new b(w, h + "leave", d, n, u), v.target = C, v.relatedTarget = S, w = null, ho(u) === c && (b = new b(y, h + "enter", x, n, u), b.target = S, b.relatedTarget = C, w = b), C = w, d && x) t: {
            for (b = d, y = x, h = 0, S = b; S; S = Bo(S)) h++;
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
          d !== null && wm(p, v, d, b, !1), x !== null && C !== null && wm(p, C, x, b, !0);
        }
      }
      e: {
        if (v = c ? Zo(c) : window, d = v.nodeName && v.nodeName.toLowerCase(), d === "select" || d === "input" && v.type === "file") var E = LS;
        else if (mm(v)) if (Xy) E = BS;
        else {
          E = zS;
          var k = NS;
        }
        else (d = v.nodeName) && d.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = DS);
        if (E && (E = E(e, c))) {
          Gy(p, E, n, u);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && Ju(v, "number", v.value);
      }
      switch (k = c ? Zo(c) : window, e) {
        case "focusin":
          (mm(k) || k.contentEditable === "true") && (Qo = k, dd = c, ps = null);
          break;
        case "focusout":
          ps = dd = Qo = null;
          break;
        case "mousedown":
          fd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          fd = !1, xm(p, n, u);
          break;
        case "selectionchange":
          if (WS) break;
        case "keydown":
        case "keyup":
          xm(p, n, u);
      }
      var R;
      if (Ef) e: {
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
      else Xo ? Ky(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Vy && n.locale !== "ko" && (Xo || T !== "onCompositionStart" ? T === "onCompositionEnd" && Xo && (R = Hy()) : (Nr = u, Cf = "value" in Nr ? Nr.value : Nr.textContent, Xo = !0)), k = xa(c, T), 0 < k.length && (T = new um(T, e, null, n, u), p.push({ event: T, listeners: k }), R ? T.data = R : (R = Yy(n), R !== null && (T.data = R)))), (R = MS ? $S(e, n) : jS(e, n)) && (c = xa(c, "onBeforeInput"), 0 < c.length && (u = new um("onBeforeInput", "beforeinput", null, n, u), p.push({ event: u, listeners: c }), u.data = R));
    }
    iv(p, t);
  });
}
function Os(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Rs(e, n), i != null && r.unshift(Os(e, i, o)), i = Rs(e, t), i != null && r.push(Os(e, i, o))), e = e.return;
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
function wm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = Rs(n, i), a != null && s.unshift(Os(n, a, l))) : o || (a = Rs(n, i), a != null && s.push(Os(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var KS = /\r\n?/g, YS = /\u0000|\uFFFD/g;
function Cm(e) {
  return (typeof e == "string" ? e : "" + e).replace(KS, `
`).replace(YS, "");
}
function Rl(e, t, n) {
  if (t = Cm(t), Cm(e) !== t && n) throw Error(V(425));
}
function Sa() {
}
var pd = null, md = null;
function hd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var gd = typeof setTimeout == "function" ? setTimeout : void 0, GS = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, XS = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
  return km.resolve(null).then(e).catch(QS);
} : gd;
function QS(e) {
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
        e.removeChild(o), Ms(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ms(t);
}
function Wr(e) {
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
function Tm(e) {
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
var Ai = Math.random().toString(36).slice(2), Zn = "__reactFiber$" + Ai, Ls = "__reactProps$" + Ai, Sr = "__reactContainer$" + Ai, yd = "__reactEvents$" + Ai, qS = "__reactListeners$" + Ai, ZS = "__reactHandles$" + Ai;
function ho(e) {
  var t = e[Zn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Sr] || n[Zn]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Tm(e); e !== null; ) {
        if (n = e[Zn]) return n;
        e = Tm(e);
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
function Zo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function Ja(e) {
  return e[Ls] || null;
}
var vd = [], Jo = -1;
function Jr(e) {
  return { current: e };
}
function nt(e) {
  0 > Jo || (e.current = vd[Jo], vd[Jo] = null, Jo--);
}
function qe(e, t) {
  Jo++, vd[Jo] = e.current, e.current = t;
}
var Xr = {}, _t = Jr(Xr), Zt = Jr(!1), Co = Xr;
function yi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function Jt(e) {
  return e = e.childContextTypes, e != null;
}
function ba() {
  nt(Zt), nt(_t);
}
function Em(e, t, n) {
  if (_t.current !== Xr) throw Error(V(168));
  qe(_t, t), qe(Zt, n);
}
function lv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, Nx(e) || "Unknown", o));
  return dt({}, n, r);
}
function wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Xr, Co = _t.current, qe(_t, e), qe(Zt, Zt.current), !0;
}
function Rm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = lv(e, t, Co), r.__reactInternalMemoizedMergedChildContext = e, nt(Zt), nt(_t), qe(_t, e)) : nt(Zt), qe(Zt, n);
}
var mr = null, ec = !1, Cu = !1;
function av(e) {
  mr === null ? mr = [e] : mr.push(e);
}
function JS(e) {
  ec = !0, av(e);
}
function eo() {
  if (!Cu && mr !== null) {
    Cu = !0;
    var e = 0, t = Ye;
    try {
      var n = mr;
      for (Ye = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      mr = null, ec = !1;
    } catch (o) {
      throw mr !== null && (mr = mr.slice(e + 1)), Ay(xf, eo), o;
    } finally {
      Ye = t, Cu = !1;
    }
  }
  return null;
}
var ei = [], ti = 0, Ca = null, ka = 0, Sn = [], bn = 0, ko = null, gr = 1, yr = "";
function fo(e, t) {
  ei[ti++] = ka, ei[ti++] = Ca, Ca = e, ka = t;
}
function cv(e, t, n) {
  Sn[bn++] = gr, Sn[bn++] = yr, Sn[bn++] = ko, ko = e;
  var r = gr;
  e = yr;
  var o = 32 - Bn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Bn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, gr = 1 << 32 - Bn(t) + o | n << o | r, yr = i + e;
  } else gr = 1 << i | n << o | r, yr = e;
}
function Pf(e) {
  e.return !== null && (fo(e, 1), cv(e, 1, 0));
}
function If(e) {
  for (; e === Ca; ) Ca = ei[--ti], ei[ti] = null, ka = ei[--ti], ei[ti] = null;
  for (; e === ko; ) ko = Sn[--bn], Sn[bn] = null, yr = Sn[--bn], Sn[bn] = null, gr = Sn[--bn], Sn[bn] = null;
}
var dn = null, un = null, it = !1, Dn = null;
function uv(e, t) {
  var n = Cn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Pm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, dn = e, un = Wr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, dn = e, un = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ko !== null ? { id: gr, overflow: yr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Cn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, dn = e, un = null, !0) : !1;
    default:
      return !1;
  }
}
function xd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Sd(e) {
  if (it) {
    var t = un;
    if (t) {
      var n = t;
      if (!Pm(e, t)) {
        if (xd(e)) throw Error(V(418));
        t = Wr(n.nextSibling);
        var r = dn;
        t && Pm(e, t) ? uv(r, n) : (e.flags = e.flags & -4097 | 2, it = !1, dn = e);
      }
    } else {
      if (xd(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, it = !1, dn = e;
    }
  }
}
function Im(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  dn = e;
}
function Pl(e) {
  if (e !== dn) return !1;
  if (!it) return Im(e), it = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hd(e.type, e.memoizedProps)), t && (t = un)) {
    if (xd(e)) throw dv(), Error(V(418));
    for (; t; ) uv(e, t), t = Wr(t.nextSibling);
  }
  if (Im(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              un = Wr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      un = null;
    }
  } else un = dn ? Wr(e.stateNode.nextSibling) : null;
  return !0;
}
function dv() {
  for (var e = un; e; ) e = Wr(e.nextSibling);
}
function vi() {
  un = dn = null, it = !1;
}
function Mf(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
var eb = Er.ReactCurrentBatchConfig;
function Hi(e, t, n) {
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
function Il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(V(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mm(e) {
  var t = e._init;
  return t(e._payload);
}
function fv(e) {
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
    return y = Kr(y, h), y.index = 0, y.sibling = null, y;
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
    return E === Go ? u(y, h, S.props.children, w, S.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === jr && Mm(E) === h.type) ? (w = o(h, S.props), w.ref = Hi(y, h, S), w.return = y, w) : (w = oa(S.type, S.key, S.props, null, y.mode, w), w.ref = Hi(y, h, S), w.return = y, w);
  }
  function c(y, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = $u(S, y.mode, w), h.return = y, h) : (h = o(h, S.children || []), h.return = y, h);
  }
  function u(y, h, S, w, E) {
    return h === null || h.tag !== 7 ? (h = So(S, y.mode, w, E), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function p(y, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Mu("" + h, y.mode, S), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case vl:
          return S = oa(h.type, h.key, h.props, null, y.mode, S), S.ref = Hi(y, null, h), S.return = y, S;
        case Yo:
          return h = $u(h, y.mode, S), h.return = y, h;
        case jr:
          var w = h._init;
          return p(y, w(h._payload), S);
      }
      if (os(h) || Bi(h)) return h = So(h, y.mode, S, null), h.return = y, h;
      Il(y, h);
    }
    return null;
  }
  function v(y, h, S, w) {
    var E = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return E !== null ? null : l(y, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vl:
          return S.key === E ? a(y, h, S, w) : null;
        case Yo:
          return S.key === E ? c(y, h, S, w) : null;
        case jr:
          return E = S._init, v(
            y,
            h,
            E(S._payload),
            w
          );
      }
      if (os(S) || Bi(S)) return E !== null ? null : u(y, h, S, w, null);
      Il(y, S);
    }
    return null;
  }
  function d(y, h, S, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return y = y.get(S) || null, l(h, y, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vl:
          return y = y.get(w.key === null ? S : w.key) || null, a(h, y, w, E);
        case Yo:
          return y = y.get(w.key === null ? S : w.key) || null, c(h, y, w, E);
        case jr:
          var k = w._init;
          return d(y, h, S, k(w._payload), E);
      }
      if (os(w) || Bi(w)) return y = y.get(S) || null, u(h, y, w, E, null);
      Il(h, w);
    }
    return null;
  }
  function x(y, h, S, w) {
    for (var E = null, k = null, R = h, T = h = 0, A = null; R !== null && T < S.length; T++) {
      R.index > T ? (A = R, R = null) : A = R.sibling;
      var O = v(y, R, S[T], w);
      if (O === null) {
        R === null && (R = A);
        break;
      }
      e && R && O.alternate === null && t(y, R), h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O, R = A;
    }
    if (T === S.length) return n(y, R), it && fo(y, T), E;
    if (R === null) {
      for (; T < S.length; T++) R = p(y, S[T], w), R !== null && (h = i(R, h, T), k === null ? E = R : k.sibling = R, k = R);
      return it && fo(y, T), E;
    }
    for (R = r(y, R); T < S.length; T++) A = d(R, y, T, S[T], w), A !== null && (e && A.alternate !== null && R.delete(A.key === null ? T : A.key), h = i(A, h, T), k === null ? E = A : k.sibling = A, k = A);
    return e && R.forEach(function(I) {
      return t(y, I);
    }), it && fo(y, T), E;
  }
  function b(y, h, S, w) {
    var E = Bi(S);
    if (typeof E != "function") throw Error(V(150));
    if (S = E.call(S), S == null) throw Error(V(151));
    for (var k = E = null, R = h, T = h = 0, A = null, O = S.next(); R !== null && !O.done; T++, O = S.next()) {
      R.index > T ? (A = R, R = null) : A = R.sibling;
      var I = v(y, R, O.value, w);
      if (I === null) {
        R === null && (R = A);
        break;
      }
      e && R && I.alternate === null && t(y, R), h = i(I, h, T), k === null ? E = I : k.sibling = I, k = I, R = A;
    }
    if (O.done) return n(
      y,
      R
    ), it && fo(y, T), E;
    if (R === null) {
      for (; !O.done; T++, O = S.next()) O = p(y, O.value, w), O !== null && (h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O);
      return it && fo(y, T), E;
    }
    for (R = r(y, R); !O.done; T++, O = S.next()) O = d(R, y, T, O.value, w), O !== null && (e && O.alternate !== null && R.delete(O.key === null ? T : O.key), h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O);
    return e && R.forEach(function(g) {
      return t(y, g);
    }), it && fo(y, T), E;
  }
  function C(y, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === Go && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vl:
          e: {
            for (var E = S.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = S.type, E === Go) {
                  if (k.tag === 7) {
                    n(y, k.sibling), h = o(k, S.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === jr && Mm(E) === k.type) {
                  n(y, k.sibling), h = o(k, S.props), h.ref = Hi(y, k, S), h.return = y, y = h;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            S.type === Go ? (h = So(S.props.children, y.mode, w, S.key), h.return = y, y = h) : (w = oa(S.type, S.key, S.props, null, y.mode, w), w.ref = Hi(y, h, S), w.return = y, y = w);
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
        case jr:
          return k = S._init, C(y, h, k(S._payload), w);
      }
      if (os(S)) return x(y, h, S, w);
      if (Bi(S)) return b(y, h, S, w);
      Il(y, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, S), h.return = y, y = h) : (n(y, h), h = Mu(S, y.mode, w), h.return = y, y = h), s(y)) : n(y, h);
  }
  return C;
}
var xi = fv(!0), pv = fv(!1), Ta = Jr(null), Ea = null, ni = null, $f = null;
function jf() {
  $f = ni = Ea = null;
}
function Af(e) {
  var t = Ta.current;
  nt(Ta), e._currentValue = t;
}
function bd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function di(e, t) {
  Ea = e, $f = ni = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (qt = !0), e.firstContext = null);
}
function En(e) {
  var t = e._currentValue;
  if ($f !== e) if (e = { context: e, memoizedValue: t, next: null }, ni === null) {
    if (Ea === null) throw Error(V(308));
    ni = e, Ea.dependencies = { lanes: 0, firstContext: e };
  } else ni = ni.next = e;
  return t;
}
var go = null;
function Of(e) {
  go === null ? go = [e] : go.push(e);
}
function mv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Of(t)) : (n.next = o.next, o.next = n), t.interleaved = n, br(e, r);
}
function br(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Ar = !1;
function Lf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function hv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function vr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Ur(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Oe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, br(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Of(r)) : (t.next = o.next, o.next = t), r.interleaved = t, br(e, n);
}
function Zl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Sf(e, n);
  }
}
function $m(e, t) {
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
  Ar = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var u = e.alternate;
    u !== null && (u = u.updateQueue, l = u.lastBaseUpdate, l !== s && (l === null ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
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
              p = dt({}, p, v);
              break e;
            case 2:
              Ar = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else d = { eventTime: d, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, u === null ? (c = u = d, a = p) : u = u.next = d, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (u === null && (a = p), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = u, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Eo |= s, e.lanes = s, e.memoizedState = p;
  }
}
function jm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var nl = {}, nr = Jr(nl), Ns = Jr(nl), zs = Jr(nl);
function yo(e) {
  if (e === nl) throw Error(V(174));
  return e;
}
function Nf(e, t) {
  switch (qe(zs, t), qe(Ns, e), qe(nr, nl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : td(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = td(t, e);
  }
  nt(nr), qe(nr, t);
}
function Si() {
  nt(nr), nt(Ns), nt(zs);
}
function gv(e) {
  yo(zs.current);
  var t = yo(nr.current), n = td(t, e.type);
  t !== n && (qe(Ns, e), qe(nr, n));
}
function zf(e) {
  Ns.current === e && (nt(nr), nt(Ns));
}
var at = Jr(0);
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
function Df() {
  for (var e = 0; e < ku.length; e++) ku[e]._workInProgressVersionPrimary = null;
  ku.length = 0;
}
var Jl = Er.ReactCurrentDispatcher, Tu = Er.ReactCurrentBatchConfig, To = 0, ct = null, kt = null, Et = null, Ia = !1, ms = !1, Ds = 0, tb = 0;
function Nt() {
  throw Error(V(321));
}
function Bf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!_n(e[n], t[n])) return !1;
  return !0;
}
function Ff(e, t, n, r, o, i) {
  if (To = i, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Jl.current = e === null || e.memoizedState === null ? ib : sb, e = n(r, o), ms) {
    i = 0;
    do {
      if (ms = !1, Ds = 0, 25 <= i) throw Error(V(301));
      i += 1, Et = kt = null, t.updateQueue = null, Jl.current = lb, e = n(r, o);
    } while (ms);
  }
  if (Jl.current = Ma, t = kt !== null && kt.next !== null, To = 0, Et = kt = ct = null, Ia = !1, t) throw Error(V(300));
  return e;
}
function _f() {
  var e = Ds !== 0;
  return Ds = 0, e;
}
function Gn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Et === null ? ct.memoizedState = Et = e : Et = Et.next = e, Et;
}
function Rn() {
  if (kt === null) {
    var e = ct.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = kt.next;
  var t = Et === null ? ct.memoizedState : Et.next;
  if (t !== null) Et = t, kt = e;
  else {
    if (e === null) throw Error(V(310));
    kt = e, e = { memoizedState: kt.memoizedState, baseState: kt.baseState, baseQueue: kt.baseQueue, queue: kt.queue, next: null }, Et === null ? ct.memoizedState = Et = e : Et = Et.next = e;
  }
  return Et;
}
function Bs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Eu(e) {
  var t = Rn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = kt, o = r.baseQueue, i = n.pending;
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
      if ((To & u) === u) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, ct.lanes |= u, Eo |= u;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, _n(r, t.memoizedState) || (qt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ct.lanes |= i, Eo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ru(e) {
  var t = Rn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    _n(i, t.memoizedState) || (qt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function yv() {
}
function vv(e, t) {
  var n = ct, r = Rn(), o = t(), i = !_n(r.memoizedState, o);
  if (i && (r.memoizedState = o, qt = !0), r = r.queue, Wf(bv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Et !== null && Et.memoizedState.tag & 1) {
    if (n.flags |= 2048, Fs(9, Sv.bind(null, n, r, o, t), void 0, null), Pt === null) throw Error(V(349));
    To & 30 || xv(n, t, o);
  }
  return o;
}
function xv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Sv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, wv(t) && Cv(e);
}
function bv(e, t, n) {
  return n(function() {
    wv(t) && Cv(e);
  });
}
function wv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_n(e, n);
  } catch {
    return !0;
  }
}
function Cv(e) {
  var t = br(e, 1);
  t !== null && Fn(t, e, 1, -1);
}
function Am(e) {
  var t = Gn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bs, lastRenderedState: e }, t.queue = e, e = e.dispatch = ob.bind(null, ct, e), [t.memoizedState, e];
}
function Fs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function kv() {
  return Rn().memoizedState;
}
function ea(e, t, n, r) {
  var o = Gn();
  ct.flags |= e, o.memoizedState = Fs(1 | t, n, void 0, r === void 0 ? null : r);
}
function tc(e, t, n, r) {
  var o = Rn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (kt !== null) {
    var s = kt.memoizedState;
    if (i = s.destroy, r !== null && Bf(r, s.deps)) {
      o.memoizedState = Fs(t, n, i, r);
      return;
    }
  }
  ct.flags |= e, o.memoizedState = Fs(1 | t, n, i, r);
}
function Om(e, t) {
  return ea(8390656, 8, e, t);
}
function Wf(e, t) {
  return tc(2048, 8, e, t);
}
function Tv(e, t) {
  return tc(4, 2, e, t);
}
function Ev(e, t) {
  return tc(4, 4, e, t);
}
function Rv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Pv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tc(4, 4, Rv.bind(null, t, e), n);
}
function Uf() {
}
function Iv(e, t) {
  var n = Rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Mv(e, t) {
  var n = Rn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function $v(e, t, n) {
  return To & 21 ? (_n(n, t) || (n = Ny(), ct.lanes |= n, Eo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, qt = !0), e.memoizedState = n);
}
function nb(e, t) {
  var n = Ye;
  Ye = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Tu.transition;
  Tu.transition = {};
  try {
    e(!1), t();
  } finally {
    Ye = n, Tu.transition = r;
  }
}
function jv() {
  return Rn().memoizedState;
}
function rb(e, t, n) {
  var r = Vr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Av(e)) Ov(t, n);
  else if (n = mv(e, t, n, r), n !== null) {
    var o = Kt();
    Fn(n, e, r, o), Lv(n, t, r);
  }
}
function ob(e, t, n) {
  var r = Vr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Av(e)) Ov(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, _n(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Of(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = mv(e, t, o, r), n !== null && (o = Kt(), Fn(n, e, r, o), Lv(n, t, r));
  }
}
function Av(e) {
  var t = e.alternate;
  return e === ct || t !== null && t === ct;
}
function Ov(e, t) {
  ms = Ia = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Lv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Sf(e, n);
  }
}
var Ma = { readContext: En, useCallback: Nt, useContext: Nt, useEffect: Nt, useImperativeHandle: Nt, useInsertionEffect: Nt, useLayoutEffect: Nt, useMemo: Nt, useReducer: Nt, useRef: Nt, useState: Nt, useDebugValue: Nt, useDeferredValue: Nt, useTransition: Nt, useMutableSource: Nt, useSyncExternalStore: Nt, useId: Nt, unstable_isNewReconciler: !1 }, ib = { readContext: En, useCallback: function(e, t) {
  return Gn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: En, useEffect: Om, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ea(
    4194308,
    4,
    Rv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ea(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ea(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Gn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Gn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = rb.bind(null, ct, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Gn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Am, useDebugValue: Uf, useDeferredValue: function(e) {
  return Gn().memoizedState = e;
}, useTransition: function() {
  var e = Am(!1), t = e[0];
  return e = nb.bind(null, e[1]), Gn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ct, o = Gn();
  if (it) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Pt === null) throw Error(V(349));
    To & 30 || xv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Om(bv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Fs(9, Sv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Gn(), t = Pt.identifierPrefix;
  if (it) {
    var n = yr, r = gr;
    n = (r & ~(1 << 32 - Bn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ds++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = tb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, sb = {
  readContext: En,
  useCallback: Iv,
  useContext: En,
  useEffect: Wf,
  useImperativeHandle: Pv,
  useInsertionEffect: Tv,
  useLayoutEffect: Ev,
  useMemo: Mv,
  useReducer: Eu,
  useRef: kv,
  useState: function() {
    return Eu(Bs);
  },
  useDebugValue: Uf,
  useDeferredValue: function(e) {
    var t = Rn();
    return $v(t, kt.memoizedState, e);
  },
  useTransition: function() {
    var e = Eu(Bs)[0], t = Rn().memoizedState;
    return [e, t];
  },
  useMutableSource: yv,
  useSyncExternalStore: vv,
  useId: jv,
  unstable_isNewReconciler: !1
}, lb = { readContext: En, useCallback: Iv, useContext: En, useEffect: Wf, useImperativeHandle: Pv, useInsertionEffect: Tv, useLayoutEffect: Ev, useMemo: Mv, useReducer: Ru, useRef: kv, useState: function() {
  return Ru(Bs);
}, useDebugValue: Uf, useDeferredValue: function(e) {
  var t = Rn();
  return kt === null ? t.memoizedState = e : $v(t, kt.memoizedState, e);
}, useTransition: function() {
  var e = Ru(Bs)[0], t = Rn().memoizedState;
  return [e, t];
}, useMutableSource: yv, useSyncExternalStore: vv, useId: jv, unstable_isNewReconciler: !1 };
function Nn(e, t) {
  if (e && e.defaultProps) {
    t = dt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wd(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : dt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var nc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ao(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Kt(), o = Vr(e), i = vr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Ur(e, i, o), t !== null && (Fn(t, e, o, r), Zl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Kt(), o = Vr(e), i = vr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ur(e, i, o), t !== null && (Fn(t, e, o, r), Zl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Kt(), r = Vr(e), o = vr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Ur(e, o, r), t !== null && (Fn(t, e, r, n), Zl(t, e, r));
} };
function Lm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !js(n, r) || !js(o, i) : !0;
}
function Nv(e, t, n) {
  var r = !1, o = Xr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = En(i) : (o = Jt(t) ? Co : _t.current, r = t.contextTypes, i = (r = r != null) ? yi(e, o) : Xr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = nc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Nm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && nc.enqueueReplaceState(t, t.state, null);
}
function Cd(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Lf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = En(i) : (i = Jt(t) ? Co : _t.current, o.context = yi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (wd(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && nc.enqueueReplaceState(o, o.state, null), Ra(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function bi(e, t) {
  try {
    var n = "", r = t;
    do
      n += Lx(r), r = r.return;
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
function kd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var ab = typeof WeakMap == "function" ? WeakMap : Map;
function zv(e, t, n) {
  n = vr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ja || (ja = !0, Od = r), kd(e, t);
  }, n;
}
function Dv(e, t, n) {
  n = vr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      kd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    kd(e, t), typeof r != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function zm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ab();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = wb.bind(null, e, t, n), t.then(e, e));
}
function Dm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Bm(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = vr(-1, 1), t.tag = 2, Ur(n, t, 1))), n.lanes |= 1), e);
}
var cb = Er.ReactCurrentOwner, qt = !1;
function Ut(e, t, n, r) {
  t.child = e === null ? pv(t, null, n, r) : xi(t, e.child, n, r);
}
function Fm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return di(t, o), r = Ff(e, t, n, r, i, o), n = _f(), e !== null && !qt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wr(e, t, o)) : (it && n && Pf(t), t.flags |= 1, Ut(e, t, r, o), t.child);
}
function _m(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !qf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Bv(e, t, i, r, o)) : (e = oa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : js, n(s, r) && e.ref === t.ref) return wr(e, t, o);
  }
  return t.flags |= 1, e = Kr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Bv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (js(i, r) && e.ref === t.ref) if (qt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (qt = !0);
    else return t.lanes = e.lanes, wr(e, t, o);
  }
  return Td(e, t, n, r, o);
}
function Fv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, qe(oi, ln), ln |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, qe(oi, ln), ln |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, qe(oi, ln), ln |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, qe(oi, ln), ln |= r;
  return Ut(e, t, o, n), t.child;
}
function _v(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Td(e, t, n, r, o) {
  var i = Jt(n) ? Co : _t.current;
  return i = yi(t, i), di(t, o), n = Ff(e, t, n, r, i, o), r = _f(), e !== null && !qt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, wr(e, t, o)) : (it && r && Pf(t), t.flags |= 1, Ut(e, t, n, o), t.child);
}
function Wm(e, t, n, r, o) {
  if (Jt(n)) {
    var i = !0;
    wa(t);
  } else i = !1;
  if (di(t, o), t.stateNode === null) ta(e, t), Nv(t, n, r), Cd(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = En(c) : (c = Jt(n) ? Co : _t.current, c = yi(t, c));
    var u = n.getDerivedStateFromProps, p = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Nm(t, s, r, c), Ar = !1;
    var v = t.memoizedState;
    s.state = v, Ra(t, r, s, o), a = t.memoizedState, l !== r || v !== a || Zt.current || Ar ? (typeof u == "function" && (wd(t, n, u, r), a = t.memoizedState), (l = Ar || Lm(t, n, l, r, v, a, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, hv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Nn(t.type, l), s.props = c, p = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = En(a) : (a = Jt(n) ? Co : _t.current, a = yi(t, a));
    var d = n.getDerivedStateFromProps;
    (u = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || v !== a) && Nm(t, s, r, a), Ar = !1, v = t.memoizedState, s.state = v, Ra(t, r, s, o);
    var x = t.memoizedState;
    l !== p || v !== x || Zt.current || Ar ? (typeof d == "function" && (wd(t, n, d, r), x = t.memoizedState), (c = Ar || Lm(t, n, c, r, v, x, a) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ed(e, t, n, r, i, o);
}
function Ed(e, t, n, r, o, i) {
  _v(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Rm(t, n, !1), wr(e, t, i);
  r = t.stateNode, cb.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = xi(t, e.child, null, i), t.child = xi(t, null, l, i)) : Ut(e, t, l, i), t.memoizedState = r.state, o && Rm(t, n, !0), t.child;
}
function Wv(e) {
  var t = e.stateNode;
  t.pendingContext ? Em(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Em(e, t.context, !1), Nf(e, t.containerInfo);
}
function Um(e, t, n, r, o) {
  return vi(), Mf(o), t.flags |= 256, Ut(e, t, n, r), t.child;
}
var Rd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Pd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Uv(e, t, n) {
  var r = t.pendingProps, o = at.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), qe(at, o & 1), e === null)
    return Sd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = ic(s, r, 0, null), e = So(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Pd(n), t.memoizedState = Rd, e) : Hf(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return ub(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Kr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Kr(l, i) : (i = So(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Pd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Rd, r;
  }
  return i = e.child, e = i.sibling, r = Kr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Hf(e, t) {
  return t = ic({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ml(e, t, n, r) {
  return r !== null && Mf(r), xi(t, e.child, null, n), e = Hf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function ub(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Pu(Error(V(422))), Ml(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = ic({ mode: "visible", children: r.children }, o, 0, null), i = So(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && xi(t, e.child, null, s), t.child.memoizedState = Pd(s), t.memoizedState = Rd, i);
  if (!(t.mode & 1)) return Ml(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = Pu(i, r, void 0), Ml(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, qt || l) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, br(e, o), Fn(r, e, o, -1));
    }
    return Qf(), r = Pu(Error(V(421))), Ml(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, un = Wr(o.nextSibling), dn = t, it = !0, Dn = null, e !== null && (Sn[bn++] = gr, Sn[bn++] = yr, Sn[bn++] = ko, gr = e.id, yr = e.overflow, ko = t), t = Hf(t, r.children), t.flags |= 4096, t);
}
function Hm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bd(e.return, t, n);
}
function Iu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Hv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ut(e, t, r.children, n), r = at.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Hm(e, n, t);
      else if (e.tag === 19) Hm(e, n, t);
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
  if (qe(at, r), !(t.mode & 1)) t.memoizedState = null;
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
function wr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Eo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Kr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Kr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function db(e, t, n) {
  switch (t.tag) {
    case 3:
      Wv(t), vi();
      break;
    case 5:
      gv(t);
      break;
    case 1:
      Jt(t.type) && wa(t);
      break;
    case 4:
      Nf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      qe(Ta, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (qe(at, at.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Uv(e, t, n) : (qe(at, at.current & 1), e = wr(e, t, n), e !== null ? e.sibling : null);
      qe(at, at.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Hv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), qe(at, at.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Fv(e, t, n);
  }
  return wr(e, t, n);
}
var Vv, Id, Kv, Yv;
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
Id = function() {
};
Kv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, yo(nr.current);
    var i = null;
    switch (n) {
      case "input":
        o = qu(e, o), r = qu(e, r), i = [];
        break;
      case "select":
        o = dt({}, o, { value: void 0 }), r = dt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ed(e, o), r = ed(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Sa);
    }
    nd(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ts.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ts.hasOwnProperty(c) ? (a != null && c === "onScroll" && et("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Yv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Vi(e, t) {
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
function zt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function fb(e, t, n) {
  var r = t.pendingProps;
  switch (If(t), t.tag) {
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
      return zt(t), null;
    case 1:
      return Jt(t.type) && ba(), zt(t), null;
    case 3:
      return r = t.stateNode, Si(), nt(Zt), nt(_t), Df(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Dn !== null && (zd(Dn), Dn = null))), Id(e, t), zt(t), null;
    case 5:
      zf(t);
      var o = yo(zs.current);
      if (n = t.type, e !== null && t.stateNode != null) Kv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return zt(t), null;
        }
        if (e = yo(nr.current), Pl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Zn] = t, r[Ls] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              et("cancel", r), et("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              et("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ss.length; o++) et(ss[o], r);
              break;
            case "source":
              et("error", r);
              break;
            case "img":
            case "image":
            case "link":
              et(
                "error",
                r
              ), et("load", r);
              break;
            case "details":
              et("toggle", r);
              break;
            case "input":
              Jp(r, i), et("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, et("invalid", r);
              break;
            case "textarea":
              tm(r, i), et("invalid", r);
          }
          nd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Rl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Rl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ts.hasOwnProperty(s) && l != null && s === "onScroll" && et("scroll", r);
          }
          switch (n) {
            case "input":
              xl(r), em(r, i, !0);
              break;
            case "textarea":
              xl(r), nm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Sa);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = by(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Zn] = t, e[Ls] = r, Vv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = rd(n, r), n) {
              case "dialog":
                et("cancel", e), et("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                et("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ss.length; o++) et(ss[o], e);
                o = r;
                break;
              case "source":
                et("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                et(
                  "error",
                  e
                ), et("load", e), o = r;
                break;
              case "details":
                et("toggle", e), o = r;
                break;
              case "input":
                Jp(e, r), o = qu(e, r), et("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = dt({}, r, { value: void 0 }), et("invalid", e);
                break;
              case "textarea":
                tm(e, r), o = ed(e, r), et("invalid", e);
                break;
              default:
                o = r;
            }
            nd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? ky(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && wy(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Es(e, a) : typeof a == "number" && Es(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ts.hasOwnProperty(i) ? a != null && i === "onScroll" && et("scroll", e) : a != null && mf(e, i, a, s));
            }
            switch (n) {
              case "input":
                xl(e), em(e, r, !1);
                break;
              case "textarea":
                xl(e), nm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gr(r.value));
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
      return zt(t), null;
    case 6:
      if (e && t.stateNode != null) Yv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = yo(zs.current), yo(nr.current), Pl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Zn] = t, (i = r.nodeValue !== n) && (e = dn, e !== null)) switch (e.tag) {
            case 3:
              Rl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Rl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Zn] = t, t.stateNode = r;
      }
      return zt(t), null;
    case 13:
      if (nt(at), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (it && un !== null && t.mode & 1 && !(t.flags & 128)) dv(), vi(), t.flags |= 98560, i = !1;
        else if (i = Pl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[Zn] = t;
          } else vi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          zt(t), i = !1;
        } else Dn !== null && (zd(Dn), Dn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || at.current & 1 ? Tt === 0 && (Tt = 3) : Qf())), t.updateQueue !== null && (t.flags |= 4), zt(t), null);
    case 4:
      return Si(), Id(e, t), e === null && As(t.stateNode.containerInfo), zt(t), null;
    case 10:
      return Af(t.type._context), zt(t), null;
    case 17:
      return Jt(t.type) && ba(), zt(t), null;
    case 19:
      if (nt(at), i = t.memoizedState, i === null) return zt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Vi(i, !1);
      else {
        if (Tt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Pa(e), s !== null) {
            for (t.flags |= 128, Vi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return qe(at, at.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && yt() > wi && (t.flags |= 128, r = !0, Vi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Pa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Vi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !it) return zt(t), null;
        } else 2 * yt() - i.renderingStartTime > wi && n !== 1073741824 && (t.flags |= 128, r = !0, Vi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = yt(), t.sibling = null, n = at.current, qe(at, r ? n & 1 | 2 : n & 1), t) : (zt(t), null);
    case 22:
    case 23:
      return Xf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ln & 1073741824 && (zt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : zt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function pb(e, t) {
  switch (If(t), t.tag) {
    case 1:
      return Jt(t.type) && ba(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Si(), nt(Zt), nt(_t), Df(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zf(t), null;
    case 13:
      if (nt(at), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        vi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return nt(at), null;
    case 4:
      return Si(), null;
    case 10:
      return Af(t.type._context), null;
    case 22:
    case 23:
      return Xf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $l = !1, Ft = !1, mb = typeof WeakSet == "function" ? WeakSet : Set, ne = null;
function ri(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    pt(e, t, r);
  }
  else n.current = null;
}
function Md(e, t, n) {
  try {
    n();
  } catch (r) {
    pt(e, t, r);
  }
}
var Vm = !1;
function hb(e, t) {
  if (pd = ya, e = Zy(), Rf(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, u = 0, p = e, v = null;
        t: for (; ; ) {
          for (var d; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (d = p.firstChild) !== null; )
            v = p, p = d;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++u === r && (a = s), (d = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (md = { focusedElem: e, selectionRange: n }, ya = !1, ne = t; ne !== null; ) if (t = ne, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ne = e;
  else for (; ne !== null; ) {
    t = ne;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var b = x.memoizedProps, C = x.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Nn(t.type, b), C);
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
      pt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, ne = e;
      break;
    }
    ne = t.return;
  }
  return x = Vm, Vm = !1, x;
}
function hs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Md(t, n, i);
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
function $d(e) {
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
  t !== null && (e.alternate = null, Gv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Zn], delete t[Ls], delete t[yd], delete t[qS], delete t[ZS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Xv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Km(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sa));
  else if (r !== 4 && (e = e.child, e !== null)) for (jd(e, t, n), e = e.sibling; e !== null; ) jd(e, t, n), e = e.sibling;
}
function Ad(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ad(e, t, n), e = e.sibling; e !== null; ) Ad(e, t, n), e = e.sibling;
}
var $t = null, zn = !1;
function Ir(e, t, n) {
  for (n = n.child; n !== null; ) Qv(e, t, n), n = n.sibling;
}
function Qv(e, t, n) {
  if (tr && typeof tr.onCommitFiberUnmount == "function") try {
    tr.onCommitFiberUnmount(Xa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ft || ri(n, t);
    case 6:
      var r = $t, o = zn;
      $t = null, Ir(e, t, n), $t = r, zn = o, $t !== null && (zn ? (e = $t, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : $t.removeChild(n.stateNode));
      break;
    case 18:
      $t !== null && (zn ? (e = $t, n = n.stateNode, e.nodeType === 8 ? wu(e.parentNode, n) : e.nodeType === 1 && wu(e, n), Ms(e)) : wu($t, n.stateNode));
      break;
    case 4:
      r = $t, o = zn, $t = n.stateNode.containerInfo, zn = !0, Ir(e, t, n), $t = r, zn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ft && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Md(n, t, s), o = o.next;
        } while (o !== r);
      }
      Ir(e, t, n);
      break;
    case 1:
      if (!Ft && (ri(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        pt(n, t, l);
      }
      Ir(e, t, n);
      break;
    case 21:
      Ir(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ft = (r = Ft) || n.memoizedState !== null, Ir(e, t, n), Ft = r) : Ir(e, t, n);
      break;
    default:
      Ir(e, t, n);
  }
}
function Ym(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mb()), t.forEach(function(r) {
      var o = kb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function jn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            $t = l.stateNode, zn = !1;
            break e;
          case 3:
            $t = l.stateNode.containerInfo, zn = !0;
            break e;
          case 4:
            $t = l.stateNode.containerInfo, zn = !0;
            break e;
        }
        l = l.return;
      }
      if ($t === null) throw Error(V(160));
      Qv(i, s, o), $t = null, zn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      pt(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) qv(t, e), t = t.sibling;
}
function qv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (jn(t, e), Vn(e), r & 4) {
        try {
          hs(3, e, e.return), rc(3, e);
        } catch (b) {
          pt(e, e.return, b);
        }
        try {
          hs(5, e, e.return);
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      break;
    case 1:
      jn(t, e), Vn(e), r & 512 && n !== null && ri(n, n.return);
      break;
    case 5:
      if (jn(t, e), Vn(e), r & 512 && n !== null && ri(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Es(o, "");
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && xy(o, i), rd(l, s);
          var c = rd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var u = a[s], p = a[s + 1];
            u === "style" ? ky(o, p) : u === "dangerouslySetInnerHTML" ? wy(o, p) : u === "children" ? Es(o, p) : mf(o, u, p, c);
          }
          switch (l) {
            case "input":
              Zu(o, i);
              break;
            case "textarea":
              Sy(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? li(o, !!i.multiple, d, !1) : v !== !!i.multiple && (i.defaultValue != null ? li(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : li(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ls] = i;
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (jn(t, e), Vn(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          pt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (jn(t, e), Vn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ms(t.containerInfo);
      } catch (b) {
        pt(e, e.return, b);
      }
      break;
    case 4:
      jn(t, e), Vn(e);
      break;
    case 13:
      jn(t, e), Vn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Yf = yt())), r & 4 && Ym(e);
      break;
    case 22:
      if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ft = (c = Ft) || u, jn(t, e), Ft = c) : jn(t, e), Vn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1) for (ne = e, u = e.child; u !== null; ) {
          for (p = ne = u; ne !== null; ) {
            switch (v = ne, d = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                hs(4, v, v.return);
                break;
              case 1:
                ri(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    pt(r, n, b);
                  }
                }
                break;
              case 5:
                ri(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  Xm(p);
                  continue;
                }
            }
            d !== null ? (d.return = v, ne = d) : Xm(p);
          }
          u = u.sibling;
        }
        e: for (u = null, p = e; ; ) {
          if (p.tag === 5) {
            if (u === null) {
              u = p;
              try {
                o = p.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Cy("display", s));
              } catch (b) {
                pt(e, e.return, b);
              }
            }
          } else if (p.tag === 6) {
            if (u === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (b) {
              pt(e, e.return, b);
            }
          } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
            p.child.return = p, p = p.child;
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            u === p && (u = null), p = p.return;
          }
          u === p && (u = null), p.sibling.return = p.return, p = p.sibling;
        }
      }
      break;
    case 19:
      jn(t, e), Vn(e), r & 4 && Ym(e);
      break;
    case 21:
      break;
    default:
      jn(
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
          if (Xv(n)) {
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
          r.flags & 32 && (Es(o, ""), r.flags &= -33);
          var i = Km(e);
          Ad(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Km(e);
          jd(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      pt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gb(e, t, n) {
  ne = e, Zv(e);
}
function Zv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ne !== null; ) {
    var o = ne, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || $l;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Ft;
        l = $l;
        var c = Ft;
        if ($l = s, (Ft = a) && !c) for (ne = o; ne !== null; ) s = ne, a = s.child, s.tag === 22 && s.memoizedState !== null ? Qm(o) : a !== null ? (a.return = s, ne = a) : Qm(o);
        for (; i !== null; ) ne = i, Zv(i), i = i.sibling;
        ne = o, $l = l, Ft = c;
      }
      Gm(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, ne = i) : Gm(e);
  }
}
function Gm(e) {
  for (; ne !== null; ) {
    var t = ne;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ft || rc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ft) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Nn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && jm(t, i, r);
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
              jm(t, s, n);
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
                  var p = u.dehydrated;
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
        Ft || t.flags & 512 && $d(t);
      } catch (v) {
        pt(t, t.return, v);
      }
    }
    if (t === e) {
      ne = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, ne = n;
      break;
    }
    ne = t.return;
  }
}
function Xm(e) {
  for (; ne !== null; ) {
    var t = ne;
    if (t === e) {
      ne = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, ne = n;
      break;
    }
    ne = t.return;
  }
}
function Qm(e) {
  for (; ne !== null; ) {
    var t = ne;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            rc(4, t);
          } catch (a) {
            pt(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              pt(t, o, a);
            }
          }
          var i = t.return;
          try {
            $d(t);
          } catch (a) {
            pt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            $d(t);
          } catch (a) {
            pt(t, s, a);
          }
      }
    } catch (a) {
      pt(t, t.return, a);
    }
    if (t === e) {
      ne = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, ne = l;
      break;
    }
    ne = t.return;
  }
}
var yb = Math.ceil, $a = Er.ReactCurrentDispatcher, Vf = Er.ReactCurrentOwner, kn = Er.ReactCurrentBatchConfig, Oe = 0, Pt = null, Ct = null, At = 0, ln = 0, oi = Jr(0), Tt = 0, _s = null, Eo = 0, oc = 0, Kf = 0, gs = null, Qt = null, Yf = 0, wi = 1 / 0, pr = null, ja = !1, Od = null, Hr = null, jl = !1, zr = null, Aa = 0, ys = 0, Ld = null, na = -1, ra = 0;
function Kt() {
  return Oe & 6 ? yt() : na !== -1 ? na : na = yt();
}
function Vr(e) {
  return e.mode & 1 ? Oe & 2 && At !== 0 ? At & -At : eb.transition !== null ? (ra === 0 && (ra = Ny()), ra) : (e = Ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Uy(e.type)), e) : 1;
}
function Fn(e, t, n, r) {
  if (50 < ys) throw ys = 0, Ld = null, Error(V(185));
  Js(e, n, r), (!(Oe & 2) || e !== Pt) && (e === Pt && (!(Oe & 2) && (oc |= n), Tt === 4 && Lr(e, At)), en(e, r), n === 1 && Oe === 0 && !(t.mode & 1) && (wi = yt() + 500, ec && eo()));
}
function en(e, t) {
  var n = e.callbackNode;
  eS(e, t);
  var r = ga(e, e === Pt ? At : 0);
  if (r === 0) n !== null && im(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && im(n), t === 1) e.tag === 0 ? JS(qm.bind(null, e)) : av(qm.bind(null, e)), XS(function() {
      !(Oe & 6) && eo();
    }), n = null;
    else {
      switch (zy(r)) {
        case 1:
          n = xf;
          break;
        case 4:
          n = Oy;
          break;
        case 16:
          n = ha;
          break;
        case 536870912:
          n = Ly;
          break;
        default:
          n = ha;
      }
      n = s0(n, Jv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Jv(e, t) {
  if (na = -1, ra = 0, Oe & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (fi() && e.callbackNode !== n) return null;
  var r = ga(e, e === Pt ? At : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r);
  else {
    t = r;
    var o = Oe;
    Oe |= 2;
    var i = t0();
    (Pt !== e || At !== t) && (pr = null, wi = yt() + 500, xo(e, t));
    do
      try {
        Sb();
        break;
      } catch (l) {
        e0(e, l);
      }
    while (!0);
    jf(), $a.current = i, Oe = o, Ct !== null ? t = 0 : (Pt = null, At = 0, t = Tt);
  }
  if (t !== 0) {
    if (t === 2 && (o = ad(e), o !== 0 && (r = o, t = Nd(e, o))), t === 1) throw n = _s, xo(e, 0), Lr(e, r), en(e, yt()), n;
    if (t === 6) Lr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !vb(o) && (t = Oa(e, r), t === 2 && (i = ad(e), i !== 0 && (r = i, t = Nd(e, i))), t === 1)) throw n = _s, xo(e, 0), Lr(e, r), en(e, yt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          po(e, Qt, pr);
          break;
        case 3:
          if (Lr(e, r), (r & 130023424) === r && (t = Yf + 500 - yt(), 10 < t)) {
            if (ga(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Kt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = gd(po.bind(null, e, Qt, pr), t);
            break;
          }
          po(e, Qt, pr);
          break;
        case 4:
          if (Lr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Bn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = yt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * yb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = gd(po.bind(null, e, Qt, pr), r);
            break;
          }
          po(e, Qt, pr);
          break;
        case 5:
          po(e, Qt, pr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return en(e, yt()), e.callbackNode === n ? Jv.bind(null, e) : null;
}
function Nd(e, t) {
  var n = gs;
  return e.current.memoizedState.isDehydrated && (xo(e, t).flags |= 256), e = Oa(e, t), e !== 2 && (t = Qt, Qt = n, t !== null && zd(t)), e;
}
function zd(e) {
  Qt === null ? Qt = e : Qt.push.apply(Qt, e);
}
function vb(e) {
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
function Lr(e, t) {
  for (t &= ~Kf, t &= ~oc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Bn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qm(e) {
  if (Oe & 6) throw Error(V(327));
  fi();
  var t = ga(e, 0);
  if (!(t & 1)) return en(e, yt()), null;
  var n = Oa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ad(e);
    r !== 0 && (t = r, n = Nd(e, r));
  }
  if (n === 1) throw n = _s, xo(e, 0), Lr(e, t), en(e, yt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, po(e, Qt, pr), en(e, yt()), null;
}
function Gf(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = n, Oe === 0 && (wi = yt() + 500, ec && eo());
  }
}
function Ro(e) {
  zr !== null && zr.tag === 0 && !(Oe & 6) && fi();
  var t = Oe;
  Oe |= 1;
  var n = kn.transition, r = Ye;
  try {
    if (kn.transition = null, Ye = 1, e) return e();
  } finally {
    Ye = r, kn.transition = n, Oe = t, !(Oe & 6) && eo();
  }
}
function Xf() {
  ln = oi.current, nt(oi);
}
function xo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, GS(n)), Ct !== null) for (n = Ct.return; n !== null; ) {
    var r = n;
    switch (If(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ba();
        break;
      case 3:
        Si(), nt(Zt), nt(_t), Df();
        break;
      case 5:
        zf(r);
        break;
      case 4:
        Si();
        break;
      case 13:
        nt(at);
        break;
      case 19:
        nt(at);
        break;
      case 10:
        Af(r.type._context);
        break;
      case 22:
      case 23:
        Xf();
    }
    n = n.return;
  }
  if (Pt = e, Ct = e = Kr(e.current, null), At = ln = t, Tt = 0, _s = null, Kf = oc = Eo = 0, Qt = gs = null, go !== null) {
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
function e0(e, t) {
  do {
    var n = Ct;
    try {
      if (jf(), Jl.current = Ma, Ia) {
        for (var r = ct.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Ia = !1;
      }
      if (To = 0, Et = kt = ct = null, ms = !1, Ds = 0, Vf.current = null, n === null || n.return === null) {
        Tt = 1, _s = t, Ct = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = At, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, u = l, p = u.tag;
          if (!(u.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = u.alternate;
            v ? (u.updateQueue = v.updateQueue, u.memoizedState = v.memoizedState, u.lanes = v.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var d = Dm(s);
          if (d !== null) {
            d.flags &= -257, Bm(d, s, l, i, t), d.mode & 1 && zm(i, c, t), t = d, a = c;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              zm(i, c, t), Qf();
              break e;
            }
            a = Error(V(426));
          }
        } else if (it && l.mode & 1) {
          var C = Dm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Bm(C, s, l, i, t), Mf(bi(a, l));
            break e;
          }
        }
        i = a = bi(a, l), Tt !== 4 && (Tt = 2), gs === null ? gs = [i] : gs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = zv(i, a, t);
              $m(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Hr === null || !Hr.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Dv(i, l, t);
                $m(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      r0(n);
    } catch (E) {
      t = E, Ct === n && n !== null && (Ct = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function t0() {
  var e = $a.current;
  return $a.current = Ma, e === null ? Ma : e;
}
function Qf() {
  (Tt === 0 || Tt === 3 || Tt === 2) && (Tt = 4), Pt === null || !(Eo & 268435455) && !(oc & 268435455) || Lr(Pt, At);
}
function Oa(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = t0();
  (Pt !== e || At !== t) && (pr = null, xo(e, t));
  do
    try {
      xb();
      break;
    } catch (o) {
      e0(e, o);
    }
  while (!0);
  if (jf(), Oe = n, $a.current = r, Ct !== null) throw Error(V(261));
  return Pt = null, At = 0, Tt;
}
function xb() {
  for (; Ct !== null; ) n0(Ct);
}
function Sb() {
  for (; Ct !== null && !Vx(); ) n0(Ct);
}
function n0(e) {
  var t = i0(e.alternate, e, ln);
  e.memoizedProps = e.pendingProps, t === null ? r0(e) : Ct = t, Vf.current = null;
}
function r0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = pb(n, t), n !== null) {
        n.flags &= 32767, Ct = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Tt = 6, Ct = null;
        return;
      }
    } else if (n = fb(n, t, ln), n !== null) {
      Ct = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Ct = t;
      return;
    }
    Ct = t = e;
  } while (t !== null);
  Tt === 0 && (Tt = 5);
}
function po(e, t, n) {
  var r = Ye, o = kn.transition;
  try {
    kn.transition = null, Ye = 1, bb(e, t, n, r);
  } finally {
    kn.transition = o, Ye = r;
  }
  return null;
}
function bb(e, t, n, r) {
  do
    fi();
  while (zr !== null);
  if (Oe & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (tS(e, i), e === Pt && (Ct = Pt = null, At = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || jl || (jl = !0, s0(ha, function() {
    return fi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = kn.transition, kn.transition = null;
    var s = Ye;
    Ye = 1;
    var l = Oe;
    Oe |= 4, Vf.current = null, hb(e, n), qv(n, e), _S(md), ya = !!pd, md = pd = null, e.current = n, gb(n), Kx(), Oe = l, Ye = s, kn.transition = i;
  } else e.current = n;
  if (jl && (jl = !1, zr = e, Aa = o), i = e.pendingLanes, i === 0 && (Hr = null), Xx(n.stateNode), en(e, yt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ja) throw ja = !1, e = Od, Od = null, e;
  return Aa & 1 && e.tag !== 0 && fi(), i = e.pendingLanes, i & 1 ? e === Ld ? ys++ : (ys = 0, Ld = e) : ys = 0, eo(), null;
}
function fi() {
  if (zr !== null) {
    var e = zy(Aa), t = kn.transition, n = Ye;
    try {
      if (kn.transition = null, Ye = 16 > e ? 16 : e, zr === null) var r = !1;
      else {
        if (e = zr, zr = null, Aa = 0, Oe & 6) throw Error(V(331));
        var o = Oe;
        for (Oe |= 4, ne = e.current; ne !== null; ) {
          var i = ne, s = i.child;
          if (ne.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (ne = c; ne !== null; ) {
                  var u = ne;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hs(8, u, i);
                  }
                  var p = u.child;
                  if (p !== null) p.return = u, ne = p;
                  else for (; ne !== null; ) {
                    u = ne;
                    var v = u.sibling, d = u.return;
                    if (Gv(u), u === c) {
                      ne = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = d, ne = v;
                      break;
                    }
                    ne = d;
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
              ne = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, ne = s;
          else e: for (; ne !== null; ) {
            if (i = ne, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                hs(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, ne = y;
              break e;
            }
            ne = i.return;
          }
        }
        var h = e.current;
        for (ne = h; ne !== null; ) {
          s = ne;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, ne = S;
          else e: for (s = h; ne !== null; ) {
            if (l = ne, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  rc(9, l);
              }
            } catch (E) {
              pt(l, l.return, E);
            }
            if (l === s) {
              ne = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, ne = w;
              break e;
            }
            ne = l.return;
          }
        }
        if (Oe = o, eo(), tr && typeof tr.onPostCommitFiberRoot == "function") try {
          tr.onPostCommitFiberRoot(Xa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ye = n, kn.transition = t;
    }
  }
  return !1;
}
function Zm(e, t, n) {
  t = bi(n, t), t = zv(e, t, 1), e = Ur(e, t, 1), t = Kt(), e !== null && (Js(e, 1, t), en(e, t));
}
function pt(e, t, n) {
  if (e.tag === 3) Zm(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Zm(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hr === null || !Hr.has(r))) {
        e = bi(n, e), e = Dv(t, e, 1), t = Ur(t, e, 1), e = Kt(), t !== null && (Js(t, 1, e), en(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function wb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Kt(), e.pingedLanes |= e.suspendedLanes & n, Pt === e && (At & n) === n && (Tt === 4 || Tt === 3 && (At & 130023424) === At && 500 > yt() - Yf ? xo(e, 0) : Kf |= n), en(e, t);
}
function o0(e, t) {
  t === 0 && (e.mode & 1 ? (t = wl, wl <<= 1, !(wl & 130023424) && (wl = 4194304)) : t = 1);
  var n = Kt();
  e = br(e, t), e !== null && (Js(e, t, n), en(e, n));
}
function Cb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), o0(e, n);
}
function kb(e, t) {
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
  r !== null && r.delete(t), o0(e, n);
}
var i0;
i0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Zt.current) qt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return qt = !1, db(e, t, n);
    qt = !!(e.flags & 131072);
  }
  else qt = !1, it && t.flags & 1048576 && cv(t, ka, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ta(e, t), e = t.pendingProps;
      var o = yi(t, _t.current);
      di(t, n), o = Ff(null, t, r, e, o, n);
      var i = _f();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Jt(r) ? (i = !0, wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Lf(t), o.updater = nc, t.stateNode = o, o._reactInternals = t, Cd(t, r, e, n), t = Ed(null, t, r, !0, i, n)) : (t.tag = 0, it && i && Pf(t), Ut(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ta(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Eb(r), e = Nn(r, e), o) {
          case 0:
            t = Td(null, t, r, e, n);
            break e;
          case 1:
            t = Wm(null, t, r, e, n);
            break e;
          case 11:
            t = Fm(null, t, r, e, n);
            break e;
          case 14:
            t = _m(null, t, r, Nn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), Td(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), Wm(e, t, r, o, n);
    case 3:
      e: {
        if (Wv(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, hv(e, t), Ra(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = bi(Error(V(423)), t), t = Um(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = bi(Error(V(424)), t), t = Um(e, t, r, n, o);
          break e;
        } else for (un = Wr(t.stateNode.containerInfo.firstChild), dn = t, it = !0, Dn = null, n = pv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (vi(), r === o) {
            t = wr(e, t, n);
            break e;
          }
          Ut(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return gv(t), e === null && Sd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, hd(r, o) ? s = null : i !== null && hd(r, i) && (t.flags |= 32), _v(e, t), Ut(e, t, s, n), t.child;
    case 6:
      return e === null && Sd(t), null;
    case 13:
      return Uv(e, t, n);
    case 4:
      return Nf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xi(t, null, r, n) : Ut(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), Fm(e, t, r, o, n);
    case 7:
      return Ut(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ut(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ut(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, qe(Ta, r._currentValue), r._currentValue = s, i !== null) if (_n(i.value, s)) {
          if (i.children === o.children && !Zt.current) {
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
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), bd(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), bd(s, n, t), s = i.sibling;
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
        Ut(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, di(t, n), o = En(o), r = r(o), t.flags |= 1, Ut(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Nn(r, t.pendingProps), o = Nn(r.type, o), _m(e, t, r, o, n);
    case 15:
      return Bv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Nn(r, o), ta(e, t), t.tag = 1, Jt(r) ? (e = !0, wa(t)) : e = !1, di(t, n), Nv(t, r, o), Cd(t, r, o, n), Ed(null, t, r, !0, e, n);
    case 19:
      return Hv(e, t, n);
    case 22:
      return Fv(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function s0(e, t) {
  return Ay(e, t);
}
function Tb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Cn(e, t, n, r) {
  return new Tb(e, t, n, r);
}
function qf(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Eb(e) {
  if (typeof e == "function") return qf(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === gf) return 11;
    if (e === yf) return 14;
  }
  return 2;
}
function Kr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Cn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function oa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") qf(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Go:
      return So(n.children, o, i, t);
    case hf:
      s = 8, o |= 8;
      break;
    case Yu:
      return e = Cn(12, n, t, o | 2), e.elementType = Yu, e.lanes = i, e;
    case Gu:
      return e = Cn(13, n, t, o), e.elementType = Gu, e.lanes = i, e;
    case Xu:
      return e = Cn(19, n, t, o), e.elementType = Xu, e.lanes = i, e;
    case gy:
      return ic(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case my:
          s = 10;
          break e;
        case hy:
          s = 9;
          break e;
        case gf:
          s = 11;
          break e;
        case yf:
          s = 14;
          break e;
        case jr:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = Cn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function So(e, t, n, r) {
  return e = Cn(7, e, r, t), e.lanes = n, e;
}
function ic(e, t, n, r) {
  return e = Cn(22, e, r, t), e.elementType = gy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Mu(e, t, n) {
  return e = Cn(6, e, null, t), e.lanes = n, e;
}
function $u(e, t, n) {
  return t = Cn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = du(0), this.expirationTimes = du(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Zf(e, t, n, r, o, i, s, l, a) {
  return e = new Rb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Cn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lf(i), e;
}
function Pb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function l0(e) {
  if (!e) return Xr;
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
          if (Jt(t.type)) {
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
    if (Jt(n)) return lv(e, n, t);
  }
  return t;
}
function a0(e, t, n, r, o, i, s, l, a) {
  return e = Zf(n, r, !0, e, o, i, s, l, a), e.context = l0(null), n = e.current, r = Kt(), o = Vr(n), i = vr(r, o), i.callback = t ?? null, Ur(n, i, o), e.current.lanes = o, Js(e, o, r), en(e, r), e;
}
function sc(e, t, n, r) {
  var o = t.current, i = Kt(), s = Vr(o);
  return n = l0(n), t.context === null ? t.context = n : t.pendingContext = n, t = vr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ur(o, t, s), e !== null && (Fn(e, o, s, i), Zl(e, o, s)), s;
}
function La(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Jm(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jf(e, t) {
  Jm(e, t), (e = e.alternate) && Jm(e, t);
}
function Ib() {
  return null;
}
var c0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ep(e) {
  this._internalRoot = e;
}
lc.prototype.render = ep.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  sc(e, t, null, null);
};
lc.prototype.unmount = ep.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ro(function() {
      sc(null, e, null, null);
    }), t[Sr] = null;
  }
};
function lc(e) {
  this._internalRoot = e;
}
lc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Fy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Or.length && t !== 0 && t < Or[n].priority; n++) ;
    Or.splice(n, 0, e), n === 0 && Wy(e);
  }
};
function tp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function ac(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function eh() {
}
function Mb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = La(s);
        i.call(c);
      };
    }
    var s = a0(t, r, e, 0, null, !1, !1, "", eh);
    return e._reactRootContainer = s, e[Sr] = s.current, As(e.nodeType === 8 ? e.parentNode : e), Ro(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = La(a);
      l.call(c);
    };
  }
  var a = Zf(e, 0, !1, null, null, !1, !1, "", eh);
  return e._reactRootContainer = a, e[Sr] = a.current, As(e.nodeType === 8 ? e.parentNode : e), Ro(function() {
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
        var a = La(s);
        l.call(a);
      };
    }
    sc(t, s, e, o);
  } else s = Mb(n, t, e, o, r);
  return La(s);
}
Dy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = is(t.pendingLanes);
        n !== 0 && (Sf(t, n | 1), en(t, yt()), !(Oe & 6) && (wi = yt() + 500, eo()));
      }
      break;
    case 13:
      Ro(function() {
        var r = br(e, 1);
        if (r !== null) {
          var o = Kt();
          Fn(r, e, 1, o);
        }
      }), Jf(e, 1);
  }
};
bf = function(e) {
  if (e.tag === 13) {
    var t = br(e, 134217728);
    if (t !== null) {
      var n = Kt();
      Fn(t, e, 134217728, n);
    }
    Jf(e, 134217728);
  }
};
By = function(e) {
  if (e.tag === 13) {
    var t = Vr(e), n = br(e, t);
    if (n !== null) {
      var r = Kt();
      Fn(n, e, t, r);
    }
    Jf(e, t);
  }
};
Fy = function() {
  return Ye;
};
_y = function(e, t) {
  var n = Ye;
  try {
    return Ye = e, t();
  } finally {
    Ye = n;
  }
};
id = function(e, t, n) {
  switch (t) {
    case "input":
      if (Zu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ja(r);
            if (!o) throw Error(V(90));
            vy(r), Zu(r, o);
          }
        }
      }
      break;
    case "textarea":
      Sy(e, n);
      break;
    case "select":
      t = n.value, t != null && li(e, !!n.multiple, t, !1);
  }
};
Ry = Gf;
Py = Ro;
var $b = { usingClientEntryPoint: !1, Events: [tl, Zo, Ja, Ty, Ey, Gf] }, Ki = { findFiberByHostInstance: ho, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jb = { bundleType: Ki.bundleType, version: Ki.version, rendererPackageName: Ki.rendererPackageName, rendererConfig: Ki.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Er.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = $y(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Ki.findFiberByHostInstance || Ib, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Al = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Al.isDisabled && Al.supportsFiber) try {
    Xa = Al.inject(jb), tr = Al;
  } catch {
  }
}
gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $b;
gn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!tp(t)) throw Error(V(200));
  return Pb(e, t, null, n);
};
gn.createRoot = function(e, t) {
  if (!tp(e)) throw Error(V(299));
  var n = !1, r = "", o = c0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Zf(e, 1, !1, null, null, n, !1, r, o), e[Sr] = t.current, As(e.nodeType === 8 ? e.parentNode : e), new ep(t);
};
gn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = $y(t), e = e === null ? null : e.stateNode, e;
};
gn.flushSync = function(e) {
  return Ro(e);
};
gn.hydrate = function(e, t, n) {
  if (!ac(t)) throw Error(V(200));
  return cc(null, e, t, !0, n);
};
gn.hydrateRoot = function(e, t, n) {
  if (!tp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = c0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = a0(t, null, e, 1, n ?? null, o, !1, i, s), e[Sr] = t.current, As(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new lc(t);
};
gn.render = function(e, t, n) {
  if (!ac(t)) throw Error(V(200));
  return cc(null, e, t, !1, n);
};
gn.unmountComponentAtNode = function(e) {
  if (!ac(e)) throw Error(V(40));
  return e._reactRootContainer ? (Ro(function() {
    cc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Sr] = null;
    });
  }), !0) : !1;
};
gn.unstable_batchedUpdates = Gf;
gn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ac(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return cc(e, t, n, !1, r);
};
gn.version = "18.3.1-next-f1338f8080-20240426";
function u0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u0);
    } catch (e) {
      console.error(e);
    }
}
u0(), uy.exports = gn;
var d0 = uy.exports, f0, th = d0;
f0 = th.createRoot, th.hydrateRoot;
const Ws = {
  black: "#000",
  white: "#fff"
}, Fo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, _o = {
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
}, Ho = {
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
}, Ab = {
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
const rr = "$$material";
function Dd() {
  return Dd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Dd.apply(null, arguments);
}
function Ob(e) {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Lb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ob(o);
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
}(), Bt = "-ms-", Na = "-moz-", Be = "-webkit-", p0 = "comm", np = "rule", rp = "decl", zb = "@import", m0 = "@keyframes", Db = "@layer", Bb = Math.abs, uc = String.fromCharCode, Fb = Object.assign;
function _b(e, t) {
  return jt(e, 0) ^ 45 ? (((t << 2 ^ jt(e, 0)) << 2 ^ jt(e, 1)) << 2 ^ jt(e, 2)) << 2 ^ jt(e, 3) : 0;
}
function h0(e) {
  return e.trim();
}
function Wb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Fe(e, t, n) {
  return e.replace(t, n);
}
function Bd(e, t) {
  return e.indexOf(t);
}
function jt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Us(e, t, n) {
  return e.slice(t, n);
}
function Qn(e) {
  return e.length;
}
function op(e) {
  return e.length;
}
function Ol(e, t) {
  return t.push(e), e;
}
function Ub(e, t) {
  return e.map(t).join("");
}
var dc = 1, Ci = 1, g0 = 0, rn = 0, wt = 0, Oi = "";
function fc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: dc, column: Ci, length: s, return: "" };
}
function Gi(e, t) {
  return Fb(fc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Hb() {
  return wt;
}
function Vb() {
  return wt = rn > 0 ? jt(Oi, --rn) : 0, Ci--, wt === 10 && (Ci = 1, dc--), wt;
}
function fn() {
  return wt = rn < g0 ? jt(Oi, rn++) : 0, Ci++, wt === 10 && (Ci = 1, dc++), wt;
}
function or() {
  return jt(Oi, rn);
}
function ia() {
  return rn;
}
function rl(e, t) {
  return Us(Oi, e, t);
}
function Hs(e) {
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
function y0(e) {
  return dc = Ci = 1, g0 = Qn(Oi = e), rn = 0, [];
}
function v0(e) {
  return Oi = "", e;
}
function sa(e) {
  return h0(rl(rn - 1, Fd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Kb(e) {
  for (; (wt = or()) && wt < 33; )
    fn();
  return Hs(e) > 2 || Hs(wt) > 3 ? "" : " ";
}
function Yb(e, t) {
  for (; --t && fn() && !(wt < 48 || wt > 102 || wt > 57 && wt < 65 || wt > 70 && wt < 97); )
    ;
  return rl(e, ia() + (t < 6 && or() == 32 && fn() == 32));
}
function Fd(e) {
  for (; fn(); )
    switch (wt) {
      case e:
        return rn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Fd(wt);
        break;
      case 40:
        e === 41 && Fd(e);
        break;
      case 92:
        fn();
        break;
    }
  return rn;
}
function Gb(e, t) {
  for (; fn() && e + wt !== 57; )
    if (e + wt === 84 && or() === 47)
      break;
  return "/*" + rl(t, rn - 1) + "*" + uc(e === 47 ? e : fn());
}
function Xb(e) {
  for (; !Hs(or()); )
    fn();
  return rl(e, rn);
}
function Qb(e) {
  return v0(la("", null, null, null, [""], e = y0(e), 0, [0], e));
}
function la(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, u = 0, p = s, v = 0, d = 0, x = 0, b = 1, C = 1, y = 1, h = 0, S = "", w = o, E = i, k = r, R = S; C; )
    switch (x = h, h = fn()) {
      case 40:
        if (x != 108 && jt(R, p - 1) == 58) {
          Bd(R += Fe(sa(h), "&", "&\f"), "&\f") != -1 && (y = -1);
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
        R += Kb(x);
        break;
      case 92:
        R += Yb(ia() - 1, 7);
        continue;
      case 47:
        switch (or()) {
          case 42:
          case 47:
            Ol(qb(Gb(fn(), ia()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[c++] = Qn(R) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + u:
            y == -1 && (R = Fe(R, /\f/g, "")), d > 0 && Qn(R) - p && Ol(d > 32 ? rh(R + ";", r, n, p - 1) : rh(Fe(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Ol(k = nh(R, t, n, c, u, o, l, S, w = [], E = [], p), i), h === 123)
              if (u === 0)
                la(R, t, k, k, w, i, p, l, E);
              else
                switch (v === 99 && jt(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    la(e, k, k, r && Ol(nh(e, k, k, 0, 0, o, l, S, o, w = [], p), E), o, E, p, l, r ? w : E);
                    break;
                  default:
                    la(R, k, k, k, [""], E, 0, l, E);
                }
        }
        c = u = d = 0, b = y = 1, S = R = "", p = s;
        break;
      case 58:
        p = 1 + Qn(R), d = x;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && Vb() == 125)
            continue;
        }
        switch (R += uc(h), h * b) {
          case 38:
            y = u > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[c++] = (Qn(R) - 1) * y, y = 1;
            break;
          case 64:
            or() === 45 && (R += sa(fn())), v = or(), u = p = Qn(S = R += Xb(ia())), h++;
            break;
          case 45:
            x === 45 && Qn(R) == 2 && (b = 0);
        }
    }
  return i;
}
function nh(e, t, n, r, o, i, s, l, a, c, u) {
  for (var p = o - 1, v = o === 0 ? i : [""], d = op(v), x = 0, b = 0, C = 0; x < r; ++x)
    for (var y = 0, h = Us(e, p + 1, p = Bb(b = s[x])), S = e; y < d; ++y)
      (S = h0(b > 0 ? v[y] + " " + h : Fe(h, /&\f/g, v[y]))) && (a[C++] = S);
  return fc(e, t, n, o === 0 ? np : l, a, c, u);
}
function qb(e, t, n) {
  return fc(e, t, n, p0, uc(Hb()), Us(e, 2, -2), 0);
}
function rh(e, t, n, r) {
  return fc(e, t, n, rp, Us(e, 0, r), Us(e, r + 1, -1), r);
}
function pi(e, t) {
  for (var n = "", r = op(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Zb(e, t, n, r) {
  switch (e.type) {
    case Db:
      if (e.children.length) break;
    case zb:
    case rp:
      return e.return = e.return || e.value;
    case p0:
      return "";
    case m0:
      return e.return = e.value + "{" + pi(e.children, r) + "}";
    case np:
      e.value = e.props.join(",");
  }
  return Qn(n = pi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Jb(e) {
  var t = op(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function ew(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function x0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var tw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = or(), o === 38 && i === 12 && (n[r] = 1), !Hs(i); )
    fn();
  return rl(t, rn);
}, nw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Hs(o)) {
      case 0:
        o === 38 && or() === 12 && (n[r] = 1), t[r] += tw(rn - 1, n, r);
        break;
      case 2:
        t[r] += sa(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = or() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += uc(o);
    }
  while (o = fn());
  return t;
}, rw = function(t, n) {
  return v0(nw(y0(t), n));
}, oh = /* @__PURE__ */ new WeakMap(), ow = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !oh.get(r)) && !o) {
      oh.set(t, !0);
      for (var i = [], s = rw(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var u = 0; u < l.length; u++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[u]) : l[u] + " " + s[a];
    }
  }
}, iw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function S0(e, t) {
  switch (_b(e, t)) {
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
      return Be + e + Na + e + Bt + e + e;
    case 6828:
    case 4268:
      return Be + e + Bt + e + e;
    case 6165:
      return Be + e + Bt + "flex-" + e + e;
    case 5187:
      return Be + e + Fe(e, /(\w+).+(:[^]+)/, Be + "box-$1$2" + Bt + "flex-$1$2") + e;
    case 5443:
      return Be + e + Bt + "flex-item-" + Fe(e, /flex-|-self/, "") + e;
    case 4675:
      return Be + e + Bt + "flex-line-pack" + Fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Be + e + Bt + Fe(e, "shrink", "negative") + e;
    case 5292:
      return Be + e + Bt + Fe(e, "basis", "preferred-size") + e;
    case 6060:
      return Be + "box-" + Fe(e, "-grow", "") + Be + e + Bt + Fe(e, "grow", "positive") + e;
    case 4554:
      return Be + Fe(e, /([^-])(transform)/g, "$1" + Be + "$2") + e;
    case 6187:
      return Fe(Fe(Fe(e, /(zoom-|grab)/, Be + "$1"), /(image-set)/, Be + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Fe(e, /(image-set\([^]*)/, Be + "$1$`$1");
    case 4968:
      return Fe(Fe(e, /(.+:)(flex-)?(.*)/, Be + "box-pack:$3" + Bt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Be + e + e;
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
      if (Qn(e) - 1 - t > 6) switch (jt(e, t + 1)) {
        case 109:
          if (jt(e, t + 4) !== 45) break;
        case 102:
          return Fe(e, /(.+:)(.+)-([^]+)/, "$1" + Be + "$2-$3$1" + Na + (jt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Bd(e, "stretch") ? S0(Fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (jt(e, t + 1) !== 115) break;
    case 6444:
      switch (jt(e, Qn(e) - 3 - (~Bd(e, "!important") && 10))) {
        case 107:
          return Fe(e, ":", ":" + Be) + e;
        case 101:
          return Fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Be + (jt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Be + "$2$3$1" + Bt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (jt(e, t + 11)) {
        case 114:
          return Be + e + Bt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Be + e + Bt + Fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Be + e + Bt + Fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Be + e + Bt + e + e;
  }
  return e;
}
var sw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case rp:
      t.return = S0(t.value, t.length);
      break;
    case m0:
      return pi([Gi(t, {
        value: Fe(t.value, "@", "@" + Be)
      })], o);
    case np:
      if (t.length) return Ub(t.props, function(i) {
        switch (Wb(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return pi([Gi(t, {
              props: [Fe(i, /:(read-\w+)/, ":" + Na + "$1")]
            })], o);
          case "::placeholder":
            return pi([Gi(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Be + "input-$1")]
            }), Gi(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Na + "$1")]
            }), Gi(t, {
              props: [Fe(i, /:(plac\w+)/, Bt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, lw = [sw], aw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || lw, i = {}, s, l = [];
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
  var a, c = [ow, iw];
  {
    var u, p = [Zb, ew(function(b) {
      u.insert(b);
    })], v = Jb(c.concat(o, p)), d = function(C) {
      return pi(Qb(C), v);
    };
    a = function(C, y, h, S) {
      u = h, d(C ? C + "{" + y.styles + "}" : y.styles), S && (x.inserted[y.name] = !0);
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
}, b0 = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var It = typeof Symbol == "function" && Symbol.for, ip = It ? Symbol.for("react.element") : 60103, sp = It ? Symbol.for("react.portal") : 60106, pc = It ? Symbol.for("react.fragment") : 60107, mc = It ? Symbol.for("react.strict_mode") : 60108, hc = It ? Symbol.for("react.profiler") : 60114, gc = It ? Symbol.for("react.provider") : 60109, yc = It ? Symbol.for("react.context") : 60110, lp = It ? Symbol.for("react.async_mode") : 60111, vc = It ? Symbol.for("react.concurrent_mode") : 60111, xc = It ? Symbol.for("react.forward_ref") : 60112, Sc = It ? Symbol.for("react.suspense") : 60113, cw = It ? Symbol.for("react.suspense_list") : 60120, bc = It ? Symbol.for("react.memo") : 60115, wc = It ? Symbol.for("react.lazy") : 60116, uw = It ? Symbol.for("react.block") : 60121, dw = It ? Symbol.for("react.fundamental") : 60117, fw = It ? Symbol.for("react.responder") : 60118, pw = It ? Symbol.for("react.scope") : 60119;
function vn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ip:
        switch (e = e.type, e) {
          case lp:
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
      case sp:
        return t;
    }
  }
}
function w0(e) {
  return vn(e) === vc;
}
Ge.AsyncMode = lp;
Ge.ConcurrentMode = vc;
Ge.ContextConsumer = yc;
Ge.ContextProvider = gc;
Ge.Element = ip;
Ge.ForwardRef = xc;
Ge.Fragment = pc;
Ge.Lazy = wc;
Ge.Memo = bc;
Ge.Portal = sp;
Ge.Profiler = hc;
Ge.StrictMode = mc;
Ge.Suspense = Sc;
Ge.isAsyncMode = function(e) {
  return w0(e) || vn(e) === lp;
};
Ge.isConcurrentMode = w0;
Ge.isContextConsumer = function(e) {
  return vn(e) === yc;
};
Ge.isContextProvider = function(e) {
  return vn(e) === gc;
};
Ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ip;
};
Ge.isForwardRef = function(e) {
  return vn(e) === xc;
};
Ge.isFragment = function(e) {
  return vn(e) === pc;
};
Ge.isLazy = function(e) {
  return vn(e) === wc;
};
Ge.isMemo = function(e) {
  return vn(e) === bc;
};
Ge.isPortal = function(e) {
  return vn(e) === sp;
};
Ge.isProfiler = function(e) {
  return vn(e) === hc;
};
Ge.isStrictMode = function(e) {
  return vn(e) === mc;
};
Ge.isSuspense = function(e) {
  return vn(e) === Sc;
};
Ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === pc || e === vc || e === hc || e === mc || e === Sc || e === cw || typeof e == "object" && e !== null && (e.$$typeof === wc || e.$$typeof === bc || e.$$typeof === gc || e.$$typeof === yc || e.$$typeof === xc || e.$$typeof === dw || e.$$typeof === fw || e.$$typeof === pw || e.$$typeof === uw);
};
Ge.typeOf = vn;
b0.exports = Ge;
var mw = b0.exports, C0 = mw, hw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, gw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, k0 = {};
k0[C0.ForwardRef] = hw;
k0[C0.Memo] = gw;
var yw = !0;
function T0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ap = function(t, n, r) {
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
  yw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, cp = function(t, n, r) {
  ap(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function vw(e) {
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
var xw = {
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
}, Sw = /[A-Z]|^ms/g, bw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, E0 = function(t) {
  return t.charCodeAt(1) === 45;
}, ih = function(t) {
  return t != null && typeof t != "boolean";
}, ju = /* @__PURE__ */ x0(function(e) {
  return E0(e) ? e : e.replace(Sw, "-$&").toLowerCase();
}), sh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(bw, function(r, o, i) {
          return qn = {
            name: o,
            styles: i,
            next: qn
          }, o;
        });
  }
  return xw[t] !== 1 && !E0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Vs(e, t, n) {
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
      return ww(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = qn, c = n(e);
        return qn = a, Vs(e, t, c);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var p = t[u];
  return p !== void 0 ? p : u;
}
function ww(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Vs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : ih(l) && (r += ju(i) + ":" + sh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          ih(s[a]) && (r += ju(i) + ":" + sh(i, s[a]) + ";");
      else {
        var c = Vs(e, t, s);
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
var lh = /label:\s*([^\s;{]+)\s*(;|$)/g, qn;
function ol(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  qn = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Vs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Vs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  lh.lastIndex = 0;
  for (var c = "", u; (u = lh.exec(o)) !== null; )
    c += "-" + u[1];
  var p = vw(o) + c;
  return {
    name: p,
    styles: o,
    next: qn
  };
}
var Cw = function(t) {
  return t();
}, R0 = da.useInsertionEffect ? da.useInsertionEffect : !1, P0 = R0 || Cw, ah = R0 || m.useLayoutEffect, I0 = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ aw({
    key: "css"
  }) : null
);
I0.Provider;
var up = function(t) {
  return /* @__PURE__ */ m.forwardRef(function(n, r) {
    var o = m.useContext(I0);
    return t(n, o, r);
  });
}, il = /* @__PURE__ */ m.createContext({}), dp = {}.hasOwnProperty, _d = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", kw = function(t, n) {
  var r = {};
  for (var o in n)
    dp.call(n, o) && (r[o] = n[o]);
  return r[_d] = t, r;
}, Tw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ap(n, r, o), P0(function() {
    return cp(n, r, o);
  }), null;
}, Ew = /* @__PURE__ */ up(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[_d], i = [r], s = "";
  typeof e.className == "string" ? s = T0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ol(i, void 0, m.useContext(il));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    dp.call(e, c) && c !== "css" && c !== _d && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Tw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ m.createElement(o, a));
}), Rw = Ew, ch = function(t, n) {
  var r = arguments;
  if (n == null || !dp.call(n, "css"))
    return m.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Rw, i[1] = kw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return m.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(ch || (ch = {}));
var Pw = /* @__PURE__ */ up(function(e, t) {
  var n = e.styles, r = ol([n], void 0, m.useContext(il)), o = m.useRef();
  return ah(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), ah(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && cp(t, r.next, !0), s.tags.length) {
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
var Iw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mw = /* @__PURE__ */ x0(
  function(e) {
    return Iw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $w = Mw, jw = function(t) {
  return t !== "theme";
}, uh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? $w : jw;
}, dh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Aw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ap(n, r, o), P0(function() {
    return cp(n, r, o);
  }), null;
}, Ow = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = dh(t, n, r), a = l || uh(o), c = !a("as");
  return function() {
    var u = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      p.push.apply(p, u);
    else {
      var v = u[0];
      p.push(v[0]);
      for (var d = u.length, x = 1; x < d; x++)
        p.push(u[x], v[x]);
    }
    var b = up(function(C, y, h) {
      var S = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = m.useContext(il);
      }
      typeof C.className == "string" ? w = T0(y.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = ol(p.concat(E), y.registered, k);
      w += y.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var A = c && l === void 0 ? uh(S) : a, O = {};
      for (var I in C)
        c && I === "as" || A(I) && (O[I] = C[I]);
      return O.className = w, h && (O.ref = h), /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Aw, {
        cache: y,
        serialized: T,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ m.createElement(S, O));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = p, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, y) {
      var h = e(C, Dd({}, n, y, {
        shouldForwardProp: dh(b, y, !0)
      }));
      return h.apply(void 0, p);
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
], Wd = Ow.bind(null);
Lw.forEach(function(e) {
  Wd[e] = Wd(e);
});
function Nw(e) {
  return e == null || Object.keys(e).length === 0;
}
function M0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Nw(o) ? n : o) : t;
  return /* @__PURE__ */ f.jsx(Pw, {
    styles: r
  });
}
function $0(e, t) {
  return Wd(e, t);
}
function zw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const fh = [];
function Yr(e) {
  return fh[0] = e, ol(fh);
}
var j0 = { exports: {} }, Qe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fp = Symbol.for("react.transitional.element"), pp = Symbol.for("react.portal"), Cc = Symbol.for("react.fragment"), kc = Symbol.for("react.strict_mode"), Tc = Symbol.for("react.profiler"), Ec = Symbol.for("react.consumer"), Rc = Symbol.for("react.context"), Pc = Symbol.for("react.forward_ref"), Ic = Symbol.for("react.suspense"), Mc = Symbol.for("react.suspense_list"), $c = Symbol.for("react.memo"), jc = Symbol.for("react.lazy"), Dw = Symbol.for("react.view_transition"), Bw = Symbol.for("react.client.reference");
function Mn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fp:
        switch (e = e.type, e) {
          case Cc:
          case Tc:
          case kc:
          case Ic:
          case Mc:
          case Dw:
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
      case pp:
        return t;
    }
  }
}
Qe.ContextConsumer = Ec;
Qe.ContextProvider = Rc;
Qe.Element = fp;
Qe.ForwardRef = Pc;
Qe.Fragment = Cc;
Qe.Lazy = jc;
Qe.Memo = $c;
Qe.Portal = pp;
Qe.Profiler = Tc;
Qe.StrictMode = kc;
Qe.Suspense = Ic;
Qe.SuspenseList = Mc;
Qe.isContextConsumer = function(e) {
  return Mn(e) === Ec;
};
Qe.isContextProvider = function(e) {
  return Mn(e) === Rc;
};
Qe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === fp;
};
Qe.isForwardRef = function(e) {
  return Mn(e) === Pc;
};
Qe.isFragment = function(e) {
  return Mn(e) === Cc;
};
Qe.isLazy = function(e) {
  return Mn(e) === jc;
};
Qe.isMemo = function(e) {
  return Mn(e) === $c;
};
Qe.isPortal = function(e) {
  return Mn(e) === pp;
};
Qe.isProfiler = function(e) {
  return Mn(e) === Tc;
};
Qe.isStrictMode = function(e) {
  return Mn(e) === kc;
};
Qe.isSuspense = function(e) {
  return Mn(e) === Ic;
};
Qe.isSuspenseList = function(e) {
  return Mn(e) === Mc;
};
Qe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Cc || e === Tc || e === kc || e === Ic || e === Mc || typeof e == "object" && e !== null && (e.$$typeof === jc || e.$$typeof === $c || e.$$typeof === Rc || e.$$typeof === Ec || e.$$typeof === Pc || e.$$typeof === Bw || e.getModuleId !== void 0);
};
Qe.typeOf = Mn;
j0.exports = Qe;
var A0 = j0.exports;
function hr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function O0(e) {
  if (/* @__PURE__ */ m.isValidElement(e) || A0.isValidElementType(e) || !hr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = O0(e[n]);
  }), t;
}
function Ot(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return hr(e) && hr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ m.isValidElement(t[o]) || A0.isValidElementType(t[o]) ? r[o] = t[o] : hr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && hr(e[o]) ? r[o] = Ot(e[o], t[o], n) : n.clone ? r[o] = hr(t[o]) ? O0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Fw = (e) => {
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
  } = e, i = Fw(t), s = Object.keys(i);
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
  function u(d) {
    return s.indexOf(d) + 1 < s.length ? c(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function p(d) {
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
    only: u,
    not: p,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const ph = /min-width:\s*([0-9.]+)/;
function mh(e, t) {
  if (!e.containerQueries || !_w(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(ph)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(ph)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function _w(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function N0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Ww(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Uw(e) {
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
const Hw = {
  borderRadius: 4
};
function z0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function mi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Xw(t) ? t : Qw(e) ? ki(t) : n && r ? Yw(e, t) : n !== r ? ki(t) : qw(e, t);
}
function Vw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = ki(e[t]);
  return r;
}
function Kw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = ki(e[n]));
  return t;
}
function Yw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = ki(t[r]);
  return e;
}
function Gw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Xw(e) {
  return typeof e != "object" || e === null;
}
function Qw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function ki(e) {
  return Gw(e) ? Array.isArray(e) ? Vw(e) : Kw(e) : e;
}
function qw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = mi(e[n], t[n]) : e[n] = ki(t[n]));
  return e;
}
const Zw = {}, Ac = {
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
}, za = L0({
  values: Ac
}), Jw = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Ac[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function Qr(e, t, n) {
  const r = {};
  return Oc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : mi(r, l);
  });
}
function Oc(e, t, n, r) {
  if (t ?? (t = Zw), Array.isArray(n)) {
    const o = t.breakpoints ?? za;
    for (let i = 0; i < n.length; i += 1)
      Au(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? za, i = o.values ?? Ac;
    for (const s in n)
      if (N0(o.keys, s)) {
        const l = Ww(t.containerQueries ? t : Jw, s);
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
function D0(e = za) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Ud(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    z0(t[o]) && delete t[o];
  }
  return t;
}
function eC(e, ...t) {
  const r = [D0(e), ...t].reduce((o, i) => Ot(o, i), {});
  return Ud(e, r);
}
function tC(e, t) {
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
  } = e, o = r || tC(t, n), i = Object.keys(o);
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
function nC(e, t) {
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
    throw new Error(Cr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function B0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Lc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Lc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = hh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return hh(e, o, r);
}
function hh(e, t, n = void 0) {
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
function xt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = Lc(a, r) || {};
    return Qr(s, l, (p) => {
      const v = B0(c, o, p, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const rC = {
  internal_cache: {}
}, Da = {
  m: "margin",
  p: "padding"
}, gh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, yh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ys = {};
for (const e in Da)
  Ys[e] = [Da[e]];
for (const e in Da)
  for (const t in gh) {
    const n = Da[e], r = gh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Ys[e + t] = o;
  }
for (const e in yh)
  Ys[e] = Ys[yh[e]];
const mp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), hp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...mp, ...hp];
function ll(e, t, n, r) {
  const o = Lc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Nc(e) {
  return ll(e, "spacing", 8);
}
function Po(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const vh = [""];
function F0(e, t) {
  var i;
  const n = e.theme ?? rC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Nc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Ys[s] ?? (vh[0] = s, vh), a = e[s];
    Oc(o, e.theme, a, (c, u) => {
      const p = c ? o[c] : o;
      for (let v = 0; v < l.length; v += 1)
        p[l[v]] = Po(r, u);
    });
  }
  return o;
}
function gp(e) {
  return F0(e, mp);
}
gp.propTypes = {};
gp.filterProps = mp;
const St = gp;
function yp(e) {
  return F0(e, hp);
}
yp.propTypes = {};
yp.filterProps = hp;
const bt = yp;
function _0(e = 8, t = Nc({
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
function wn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function $n(e, t) {
  return xt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const oC = $n("border", wn), iC = $n("borderTop", wn), sC = $n("borderRight", wn), lC = $n("borderBottom", wn), aC = $n("borderLeft", wn), cC = $n("borderColor"), uC = $n("borderTopColor"), dC = $n("borderRightColor"), fC = $n("borderBottomColor"), pC = $n("borderLeftColor"), mC = $n("outline", wn), hC = $n("outlineColor"), Dc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ll(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Po(t, r)
    });
    return Qr(e, e.borderRadius, n);
  }
  return null;
};
Dc.propTypes = {};
Dc.filterProps = ["borderRadius"];
zc(oC, iC, sC, lC, aC, cC, uC, dC, fC, pC, Dc, mC, hC);
const Bc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      gap: Po(t, r)
    });
    return Qr(e, e.gap, n);
  }
  return null;
};
Bc.propTypes = {};
Bc.filterProps = ["gap"];
const Fc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Po(t, r)
    });
    return Qr(e, e.columnGap, n);
  }
  return null;
};
Fc.propTypes = {};
Fc.filterProps = ["columnGap"];
const _c = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ll(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Po(t, r)
    });
    return Qr(e, e.rowGap, n);
  }
  return null;
};
_c.propTypes = {};
_c.filterProps = ["rowGap"];
const gC = xt({
  prop: "gridColumn"
}), yC = xt({
  prop: "gridRow"
}), vC = xt({
  prop: "gridAutoFlow"
}), xC = xt({
  prop: "gridAutoColumns"
}), SC = xt({
  prop: "gridAutoRows"
}), bC = xt({
  prop: "gridTemplateColumns"
}), wC = xt({
  prop: "gridTemplateRows"
}), CC = xt({
  prop: "gridTemplateAreas"
}), kC = xt({
  prop: "gridArea"
});
zc(Bc, Fc, _c, gC, yC, vC, xC, SC, bC, wC, CC, kC);
function hi(e, t) {
  return t === "grey" ? t : e;
}
const TC = xt({
  prop: "color",
  themeKey: "palette",
  transform: hi
}), EC = xt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: hi
}), RC = xt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: hi
});
zc(TC, EC, RC);
const PC = Ac;
function cn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const IC = xt({
  prop: "width",
  transform: cn
}), vp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || PC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: cn(n)
      };
    };
    return Qr(e, e.maxWidth, t);
  }
  return null;
};
vp.filterProps = ["maxWidth"];
const MC = xt({
  prop: "minWidth",
  transform: cn
}), $C = xt({
  prop: "height",
  transform: cn
}), jC = xt({
  prop: "maxHeight",
  transform: cn
}), AC = xt({
  prop: "minHeight",
  transform: cn
});
xt({
  prop: "size",
  cssProperty: "width",
  transform: cn
});
xt({
  prop: "size",
  cssProperty: "height",
  transform: cn
});
const OC = xt({
  prop: "boxSizing"
});
zc(IC, vp, MC, $C, jC, AC, OC);
const Wc = {
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
    style: Dc
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
    style: bt
  },
  pt: {
    style: bt
  },
  pr: {
    style: bt
  },
  pb: {
    style: bt
  },
  pl: {
    style: bt
  },
  px: {
    style: bt
  },
  py: {
    style: bt
  },
  padding: {
    style: bt
  },
  paddingTop: {
    style: bt
  },
  paddingRight: {
    style: bt
  },
  paddingBottom: {
    style: bt
  },
  paddingLeft: {
    style: bt
  },
  paddingX: {
    style: bt
  },
  paddingY: {
    style: bt
  },
  paddingInline: {
    style: bt
  },
  paddingInlineStart: {
    style: bt
  },
  paddingInlineEnd: {
    style: bt
  },
  paddingBlock: {
    style: bt
  },
  paddingBlockStart: {
    style: bt
  },
  paddingBlockEnd: {
    style: bt
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
    style: Bc
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
    transform: cn
  },
  maxWidth: {
    style: vp
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
}, LC = {};
function NC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = LC,
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
      const u = r.breakpoints ?? za, p = D0(u);
      for (const v in c) {
        const d = zC(c[v], r);
        if (d != null) {
          if (typeof d != "object") {
            xh(p, v, d, r, i);
            continue;
          }
          if (i[v]) {
            xh(p, v, d, r, i);
            continue;
          }
          nC(u, d) ? Oc(p, t.theme, d, (x, b) => {
            p[x][v] = b;
          }) : (s.sx = d, p[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": mh(r, Ud(u, p))
      } : mh(r, Ud(u, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Io = NC();
function xh(e, t, n, r, o) {
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
  } = i, u = Lc(r, s);
  Oc(e, r, n, (p, v) => {
    const d = B0(u, c, v, t);
    a === !1 ? mi(p ? e[p] : e, d) : p ? e[p][a] = d : e[a] = d;
  });
}
function zC(e, t) {
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
function Uc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = L0(n), a = _0(o);
  let c = Ot({
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
      ...Hw,
      ...i
    }
  }, s);
  return c = Uw(c), c.applyStyles = DC, c = t.reduce((u, p) => Ot(u, p), c), c.unstable_sxConfig = {
    ...Wc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, c.unstable_sx = function(p) {
    return Io({
      sx: p,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function BC(e) {
  return Object.keys(e).length === 0;
}
function xp(e = null) {
  const t = m.useContext(il);
  return !t || BC(t) ? e : t;
}
const FC = Uc();
function Hc(e = FC) {
  return xp(e);
}
function Lu(e) {
  const t = Yr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function W0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Hc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Lu(typeof s == "function" ? s(o) : s)) : i = Lu(i)), /* @__PURE__ */ f.jsx(M0, {
    styles: i
  });
}
const Sh = (e) => e, _C = () => {
  let e = Sh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sh;
    }
  };
}, U0 = _C();
function H0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = H0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ee() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = H0(e)) && (r && (r += " "), r += t);
  return r;
}
function WC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = $0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Io);
  return /* @__PURE__ */ m.forwardRef(function(a, c) {
    const u = Hc(n), {
      className: p,
      component: v = "div",
      ...d
    } = a;
    return /* @__PURE__ */ f.jsx(i, {
      as: v,
      ref: c,
      className: ee(p, o ? o(r) : r),
      theme: t && u[t] || u,
      ...d
    });
  });
}
const UC = {
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
  const r = UC[t];
  return r ? `${n}-${r}` : `${U0.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = de(e, o, n);
  }), r;
}
function V0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Yr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Yr(o.style));
  }), r;
}
const HC = Uc();
function Nu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function vo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function VC(e) {
  return e ? (t, n) => n[e] : null;
}
function KC(e, t, n) {
  e.theme = z0(e.theme) ? n : e.theme[t] || e.theme;
}
function aa(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => aa(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? vo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? vo(Yr(s), n) : s;
    }
    return K0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? vo(Yr(r.style), n) : r.style : n ? vo(Yr(r), n) : r;
}
function K0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? vo(Yr(l.style(o)), r) : l.style(o))) : n.push(r ? vo(Yr(l.style), r) : l.style);
  }
  return n;
}
function Y0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = HC,
    rootShouldForwardProp: r = Nu,
    slotShouldForwardProp: o = Nu
  } = e;
  function i(l) {
    KC(l, t, n);
  }
  return (l, a = {}) => {
    zw(l, (k) => k.filter((R) => R !== Io));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: p,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = VC(XC(u)),
      ...x
    } = a, b = c && c.startsWith("Mui") || u ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), y = v || !1;
    let h = Nu;
    u === "Root" || u === "root" ? h = r : u ? h = o : GC(l) && (h = void 0);
    const S = $0(l, {
      shouldForwardProp: h,
      label: YC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return aa(T, k, T.theme.modularCssLayers ? b : void 0);
        };
      if (hr(k)) {
        const R = V0(k);
        return function(A) {
          return R.variants ? aa(A, R, A.theme.modularCssLayers ? b : void 0) : A.theme.modularCssLayers ? vo(R.style, b) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), A = [];
      if (R.push(i), c && d && A.push(function(M) {
        var N, $;
        const j = ($ = (N = M.theme.components) == null ? void 0 : N[c]) == null ? void 0 : $.styleOverrides;
        if (!j)
          return null;
        const L = {};
        for (const z in j)
          L[z] = aa(M, j[z], M.theme.modularCssLayers ? "theme" : void 0);
        return d(M, L);
      }), c && !C && A.push(function(M) {
        var L, N;
        const P = M.theme, j = (N = (L = P == null ? void 0 : P.components) == null ? void 0 : L[c]) == null ? void 0 : N.variants;
        return j ? K0(M, j, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || A.push(Io), Array.isArray(T[0])) {
        const g = T.shift(), M = new Array(R.length).fill(""), P = new Array(A.length).fill("");
        let j;
        j = [...M, ...g, ...P], j.raw = [...M, ...g.raw, ...P], R.unshift(j);
      }
      const O = [...R, ...T, ...A], I = S(...O);
      return l.muiName && (I.muiName = l.muiName), I;
    };
    return S.withConfig && (E.withConfig = S.withConfig), E;
  };
}
function YC(e, t) {
  return void 0;
}
function GC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function XC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const QC = Y0();
function Gs(e, t, n = !1) {
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
              r[i][c] = Gs(s[c], l[c], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = ee(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function qC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Gs(t.components[n].defaultProps, r);
}
function ZC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Hc(r);
  return o && (i = i[o] || i), qC({
    theme: i,
    name: n,
    props: t
  });
}
const ut = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function JC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Sp(e, t = 0, n = 1) {
  return JC(e, t, n);
}
function e2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return qr(e2(e));
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
const t2 = (e) => {
  const t = qr(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ls = (e, t) => {
  try {
    return t2(e);
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
function G0(e) {
  e = qr(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, u = (c + n / 30) % 12) => o - i * Math.max(Math.min(u - 3, 9 - u, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Vc({
    type: l,
    values: a
  });
}
function Hd(e) {
  e = qr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? qr(G0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function n2(e, t) {
  const n = Hd(e), r = Hd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Dr(e, t) {
  return e = qr(e), t = Sp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Vc(e);
}
function io(e, t, n) {
  try {
    return Dr(e, t);
  } catch {
    return e;
  }
}
function Kc(e, t) {
  if (e = qr(e), t = Sp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Vc(e);
}
function Ve(e, t, n) {
  try {
    return Kc(e, t);
  } catch {
    return e;
  }
}
function Yc(e, t) {
  if (e = qr(e), t = Sp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Vc(e);
}
function Ke(e, t, n) {
  try {
    return Yc(e, t);
  } catch {
    return e;
  }
}
function Vd(e, t = 0.15) {
  return Hd(e) > 0.5 ? Kc(e, t) : Yc(e, t);
}
function Ll(e, t, n) {
  try {
    return Vd(e, t);
  } catch {
    return e;
  }
}
const X0 = /* @__PURE__ */ m.createContext(null);
function bp() {
  return m.useContext(X0);
}
const r2 = typeof Symbol == "function" && Symbol.for, o2 = r2 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function i2(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function s2(e) {
  const {
    children: t,
    theme: n
  } = e, r = bp(), o = m.useMemo(() => {
    const i = r === null ? {
      ...n
    } : i2(r, n);
    return i != null && (i[o2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ f.jsx(X0.Provider, {
    value: o,
    children: t
  });
}
const Q0 = /* @__PURE__ */ m.createContext();
function l2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ f.jsx(Q0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const al = () => m.useContext(Q0) ?? !1, q0 = /* @__PURE__ */ m.createContext(void 0);
function a2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ f.jsx(q0.Provider, {
    value: e,
    children: t
  });
}
function c2(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Gs(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Gs(o, r, t.components.mergeClassNameAndStyle) : r;
}
function u2({
  props: e,
  name: t
}) {
  const n = m.useContext(q0);
  return c2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let bh = 0;
function d2(e) {
  const [t, n] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (bh += 1, n(`mui-${bh}`));
  }, [t]), r;
}
const f2 = {
  ...da
}, wh = f2.useId;
function kr(e) {
  if (wh !== void 0) {
    const t = wh();
    return e ?? t;
  }
  return d2(e);
}
function p2(e) {
  const t = xp(), n = kr() || "", {
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
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, i.prepend(c);
    } else
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ f.jsx(W0, {
    styles: o
  }) : null;
}
const Ch = {};
function kh(e, t, n, r = !1) {
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
function Z0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = xp(Ch), i = bp() || Ch, s = kh(r, o, n), l = kh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = p2(s);
  return /* @__PURE__ */ f.jsx(s2, {
    theme: l,
    children: /* @__PURE__ */ f.jsx(il.Provider, {
      value: s,
      children: /* @__PURE__ */ f.jsx(l2, {
        value: a,
        children: /* @__PURE__ */ f.jsxs(a2, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const Th = {
  theme: void 0
};
function m2(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Th.theme = o.theme, i = V0(e(Th)), t = i, n = o.theme), i;
  };
}
const wp = "mode", Cp = "color-scheme", h2 = "data-color-scheme";
function g2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = wp,
    colorSchemeStorageKey: i = Cp,
    attribute: s = h2,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", u = s;
  if (s === "class" && (u = ".%s"), s === "data" && (u = "[data-%s]"), u.startsWith(".")) {
    const v = u.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const p = u.match(/\[([^[\]]+)\]/);
  if (p) {
    const [v, d] = p[1].split("=");
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
function y2() {
}
const v2 = ({
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
      return y2;
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
function Eh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function J0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function x2(e) {
  return J0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function S2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = wp,
    colorSchemeStorageKey: s = Cp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = v2,
    noSsr: c = !1
  } = e, u = o.join(","), p = o.length > 1, v = m.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = m.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = m.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = m.useState(() => {
    const T = (v == null ? void 0 : v.get(t)) || t, A = (d == null ? void 0 : d.get(n)) || n, O = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: T,
      systemMode: Eh(T),
      lightColorScheme: A,
      darkColorScheme: O
    };
  }), [y, h] = m.useState(c || !p);
  m.useEffect(() => {
    h(!0);
  }, []);
  const S = x2(b), w = m.useCallback((T) => {
    C((A) => {
      if (T === A.mode)
        return A;
      const O = T ?? t;
      return v == null || v.set(O), {
        ...A,
        mode: O,
        systemMode: Eh(O)
      };
    });
  }, [v, t]), E = m.useCallback((T) => {
    T ? typeof T == "string" ? T && !u.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((A) => {
      const O = {
        ...A
      };
      return J0(A, (I) => {
        I === "light" && (d == null || d.set(T), O.lightColorScheme = T), I === "dark" && (x == null || x.set(T), O.darkColorScheme = T);
      }), O;
    }) : C((A) => {
      const O = {
        ...A
      }, I = T.light === null ? n : T.light, g = T.dark === null ? r : T.dark;
      return I && (u.includes(I) ? (O.lightColorScheme = I, d == null || d.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), g && (u.includes(g) ? (O.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), O;
    }) : C((A) => (d == null || d.set(n), x == null || x.set(r), {
      ...A,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [u, d, x, n, r]), k = m.useCallback((T) => {
    b.mode === "system" && C((A) => {
      const O = T != null && T.matches ? "dark" : "light";
      return A.systemMode === O ? A : {
        ...A,
        systemMode: O
      };
    });
  }, [b.mode]), R = m.useRef(k);
  return R.current = k, m.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const T = (...O) => R.current(...O), A = window.matchMedia("(prefers-color-scheme: dark)");
    return A.addListener(T), T(A), () => {
      A.removeListener(T);
    };
  }, [p]), m.useEffect(() => {
    if (p) {
      const T = (v == null ? void 0 : v.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && w(I || t);
      })) || zu, A = (d == null ? void 0 : d.subscribe((I) => {
        (!I || u.match(I)) && E({
          light: I
        });
      })) || zu, O = (x == null ? void 0 : x.subscribe((I) => {
        (!I || u.match(I)) && E({
          dark: I
        });
      })) || zu;
      return () => {
        T(), A(), O();
      };
    }
  }, [E, w, u, t, l, p, v, d, x]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? S : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const b2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function w2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = wp,
    colorSchemeStorageKey: o = Cp,
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
  }, c = /* @__PURE__ */ m.createContext(void 0), u = () => m.useContext(c) || a, p = {}, v = {};
  function d(y) {
    var ze, be, He, ht;
    const {
      children: h,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: A = typeof document > "u" ? void 0 : document,
      colorSchemeNode: O = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: M = "system",
      forceThemeRerender: P = !1,
      noSsr: j
    } = y, L = m.useRef(!1), N = bp(), $ = m.useContext(c), z = !!$ && !I, B = m.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), W = B[t], _ = W || B, {
      colorSchemes: Q = p,
      components: K = v,
      cssVarPrefix: q
    } = _, G = Object.keys(Q).filter((oe) => !!Q[oe]).join(","), X = m.useMemo(() => G.split(","), [G]), U = typeof s == "string" ? s : s.light, J = typeof s == "string" ? s : s.dark, ie = Q[U] && Q[J] ? M : ((be = (ze = Q[_.defaultColorScheme]) == null ? void 0 : ze.palette) == null ? void 0 : be.mode) || ((He = _.palette) == null ? void 0 : He.mode), {
      mode: Ce,
      setMode: Te,
      systemMode: ge,
      lightColorScheme: ae,
      darkColorScheme: Le,
      colorScheme: Ue,
      setColorScheme: we
    } = S2({
      supportedColorSchemes: X,
      defaultLightColorScheme: U,
      defaultDarkColorScheme: J,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: ie,
      storageManager: R,
      storageWindow: T,
      noSsr: j
    });
    let $e = Ce, ue = Ue;
    z && ($e = $.mode, ue = $.colorScheme);
    let je = ue || _.defaultColorScheme;
    _.vars && !P && (je = _.defaultColorScheme);
    const Xe = m.useMemo(() => {
      var De;
      const oe = ((De = _.generateThemeVars) == null ? void 0 : De.call(_)) || _.vars, Se = {
        ..._,
        components: K,
        colorSchemes: Q,
        cssVarPrefix: q,
        vars: oe
      };
      if (typeof Se.generateSpacing == "function" && (Se.spacing = Se.generateSpacing()), je) {
        const st = Q[je];
        st && typeof st == "object" && Object.keys(st).forEach((ke) => {
          st[ke] && typeof st[ke] == "object" ? Se[ke] = {
            ...Se[ke],
            ...st[ke]
          } : Se[ke] = st[ke];
        });
      }
      return l ? l(Se) : Se;
    }, [_, je, K, Q, q]), Ne = _.colorSchemeSelector;
    ut(() => {
      if (ue && O && Ne && Ne !== "media") {
        const oe = Ne;
        let Se = Ne;
        if (oe === "class" && (Se = ".%s"), oe === "data" && (Se = "[data-%s]"), oe != null && oe.startsWith("data-") && !oe.includes("%s") && (Se = `[${oe}="%s"]`), Se.startsWith("."))
          O.classList.remove(...X.map((De) => Se.substring(1).replace("%s", De))), O.classList.add(Se.substring(1).replace("%s", ue));
        else {
          const De = Se.replace("%s", ue).match(/\[([^\]]+)\]/);
          if (De) {
            const [st, ke] = De[1].split("=");
            ke || X.forEach((Wn) => {
              O.removeAttribute(st.replace(ue, Wn));
            }), O.setAttribute(st, ke ? ke.replace(/"|'/g, "") : "");
          } else
            O.setAttribute(Se, ue);
        }
      }
    }, [ue, Ne, O, X]), m.useEffect(() => {
      let oe;
      if (k && L.current && A) {
        const Se = A.createElement("style");
        Se.appendChild(A.createTextNode(b2)), A.head.appendChild(Se), window.getComputedStyle(A.body), oe = setTimeout(() => {
          A.head.removeChild(Se);
        }, 1);
      }
      return () => {
        clearTimeout(oe);
      };
    }, [ue, k, A]), m.useEffect(() => (L.current = !0, () => {
      L.current = !1;
    }), []);
    const me = m.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: ue,
      darkColorScheme: Le,
      lightColorScheme: ae,
      mode: $e,
      setColorScheme: we,
      setMode: Te,
      systemMode: ge
    }), [X, ue, Le, ae, $e, we, Te, ge, Xe.colorSchemeSelector]);
    let ve = !0;
    (g || _.cssVariables === !1 || z && (N == null ? void 0 : N.cssVarPrefix) === q) && (ve = !1);
    const Ae = /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [/* @__PURE__ */ f.jsx(Z0, {
        themeId: W ? t : void 0,
        theme: Xe,
        children: h
      }), ve && /* @__PURE__ */ f.jsx(M0, {
        styles: ((ht = Xe.generateStyleSheets) == null ? void 0 : ht.call(Xe)) || []
      })]
    });
    return z ? Ae : /* @__PURE__ */ f.jsx(c.Provider, {
      value: me,
      children: Ae
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: u,
    getInitColorSchemeScript: (y) => g2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function C2(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const k2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Rh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (k2.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, T2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, E2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Du(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return T2(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const u = `--${n ? `${n}-` : ""}${l.join("-")}`, p = E2(l, a);
        Object.assign(o, {
          [u]: p
        }), Rh(i, l, `var(${u})`, c), Rh(s, l, `var(${u}, ${p})`, c);
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
function R2(e, t = {}) {
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
    css: p,
    varsWithDefaults: v
  } = Du(c, t);
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
    } = Du(E, t);
    d = Ot(d, T), x[w] = {
      css: R,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Du(b, t);
    d = Ot(d, k), x[a] = {
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
        ...u
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = Ot(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var A, O;
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
        } = R, g = (O = (A = s[E]) == null ? void 0 : A.palette) == null ? void 0 : O.mode, M = !r && g ? {
          colorScheme: g,
          ...I
        } : {
          ...I
        };
        k(n(E, {
          ...M
        }), M);
      }
      return Object.entries(T).forEach(([I, {
        css: g
      }]) => {
        var j, L;
        const M = (L = (j = s[I]) == null ? void 0 : j.palette) == null ? void 0 : L.mode, P = !r && M ? {
          colorScheme: M,
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
function P2(e) {
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
function Bu(e, t) {
  var n, r, o;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const I2 = Uc(), M2 = QC("div", {
  name: "MuiStack",
  slot: "Root"
});
function $2(e) {
  return ZC({
    props: e,
    name: "MuiStack",
    defaultTheme: I2
  });
}
function j2(e, t) {
  const n = m.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ m.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const A2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], O2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...Qr({
      theme: t
    }, Ou({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Nc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = Ou({
      values: e.direction,
      base: o
    }), s = Ou({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, u) => {
      if (!i[a]) {
        const v = c > 0 ? i[u[c - 1]] : "column";
        i[a] = v;
      }
    }), n = Ot(n, Qr({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: Po(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${A2(c ? i[c] : e.direction)}`]: Po(r, a)
      }
    }));
  }
  return n = eC(t.breakpoints, n), n;
};
function L2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = M2,
    useThemeProps: n = $2,
    componentName: r = "MuiStack"
  } = e, o = () => fe({
    root: ["root"]
  }, (a) => de(r, a), {}), i = t(O2);
  return /* @__PURE__ */ m.forwardRef(function(a, c) {
    const u = n(a), {
      component: p = "div",
      direction: v = "column",
      spacing: d = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: y = !1,
      ...h
    } = u, S = {
      direction: v,
      spacing: d,
      useFlexGap: y
    }, w = o();
    return /* @__PURE__ */ f.jsx(i, {
      as: p,
      ownerState: S,
      ref: c,
      className: ee(w.root, C),
      ...h,
      children: x ? j2(b, x) : b
    });
  });
}
function e1() {
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
const t1 = e1();
function n1() {
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
const Kd = n1();
function Ph(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Yc(e.main, o) : t === "dark" && (e.dark = Kc(e.main, i)));
}
function Ih(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function N2(e = "light") {
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
function z2(e = "light") {
  return e === "dark" ? {
    main: _o[200],
    light: _o[50],
    dark: _o[400]
  } : {
    main: _o[500],
    light: _o[300],
    dark: _o[700]
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
function B2(e = "light") {
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
function F2(e = "light") {
  return e === "dark" ? {
    main: Ho[400],
    light: Ho[300],
    dark: Ho[700]
  } : {
    main: Ho[800],
    light: Ho[500],
    dark: Ho[900]
  };
}
function _2(e = "light") {
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
function W2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function kp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || N2(t), l = e.secondary || z2(t), a = e.error || D2(t), c = e.info || B2(t), u = e.success || F2(t), p = e.warning || _2(t);
  function v(C) {
    return o ? W2(C) : n2(C, Kd.text.primary) >= n ? Kd.text.primary : t1.text.primary;
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
      throw new Error(Cr(11, y ? ` (${y})` : "", h));
    if (typeof C.main != "string")
      throw new Error(Cr(12, y ? ` (${y})` : "", JSON.stringify(C.main)));
    return o ? (Ih(o, C, "light", S, r), Ih(o, C, "dark", w, r)) : (Ph(C, "light", S, r), Ph(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let x;
  return t === "light" ? x = e1() : t === "dark" && (x = n1()), Ot({
    // A collection of common colors.
    common: {
      ...Ws
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
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Ab,
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
function U2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function H2(e, t) {
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
function V2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Mh = {
  textTransform: "uppercase"
}, $h = '"Roboto", "Helvetica", "Arial", sans-serif';
function r1(e, t) {
  const {
    fontFamily: n = $h,
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
    ...p
  } = typeof t == "function" ? t(e) : t, v = r / 14, d = u || ((C) => `${C / a * v}rem`), x = (C, y, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === $h ? {
      letterSpacing: `${V2(S / y)}em`
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
    button: x(s, 14, 1.75, 0.4, Mh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Mh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ot({
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
const K2 = 0.2, Y2 = 0.14, G2 = 0.12;
function ot(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${K2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Y2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${G2})`].join(",");
}
const X2 = ["none", ot(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ot(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ot(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ot(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ot(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ot(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ot(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ot(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ot(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ot(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ot(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ot(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ot(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ot(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ot(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ot(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ot(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ot(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ot(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ot(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ot(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ot(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ot(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ot(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Q2 = ["all"], q2 = {}, Z2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, J2 = {
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
function jh(e) {
  return `${Math.round(e)}ms`;
}
function ek(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function tk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...Z2,
    ...t.easing
  }, r = {
    ...J2,
    ...t.duration
  }, o = (s = Q2, l = q2) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: u = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : jh(a)} ${c} ${typeof u == "string" ? u : jh(u)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: ek,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const nk = {};
function rk(e = nk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const ok = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ik(e) {
  return hr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function o1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !ik(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : hr(l) && (r[s] = {
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
function Ah(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const sk = (e) => {
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
function lk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Dr(t, sk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Ah(n)})` : Yc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Ah(n)})` : Kc(t, n);
    }
  });
}
function Yd(e = {}, ...t) {
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
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Cr(22));
  const v = kp({
    ...i,
    colorSpace: u
  }), d = Uc(e);
  let x = Ot(d, {
    mixins: H2(d.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: X2.slice(),
    typography: r1(v, a),
    motion: rk(s),
    transitions: tk(l),
    zIndex: {
      ...ok
    }
  });
  return x = Ot(x, p), x = t.reduce((b, C) => Ot(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Wc,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return Io({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = o1, lk(x), x;
}
function Gd(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ak = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Gd(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function i1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function s1(e) {
  return e === "dark" ? ak : [];
}
function ck(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = kp({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...i1(s.mode),
      ...n
    },
    overlays: r || s1(s.mode),
    ...i
  };
}
function uk(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const dk = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], fk = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return dk(e.cssVarPrefix).forEach((l) => {
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
function pk(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function as(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : G0(e);
}
function ur(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ls(as(e[t])));
}
function mk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Kn = (e) => {
  try {
    return e();
  } catch {
  }
}, hk = (e = "mui") => C2(e);
function Fu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = ck({
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
  } = Yd({
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
      ...i1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || s1(i)
  }, l;
}
function gk(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = uk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...u
  } = e, p = Object.keys(n)[0], v = r || (n.light && p !== "light" ? "light" : p), d = hk(i), {
    [v]: x,
    light: b,
    dark: C,
    ...y
  } = n, h = {
    ...y
  };
  let S = x;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(Cr(21, v));
  let w;
  s && (w = "oklch");
  const E = Fu(w, h, S, u, v);
  b && !h.light && Fu(w, h, b, void 0, "light"), C && !h.dark && Fu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: h,
    font: {
      ...U2(E.typography),
      ...E.font
    },
    spacing: mk(u.spacing)
  };
  Object.keys(k.colorSchemes).forEach((I) => {
    const g = k.colorSchemes[I].palette, M = (j) => {
      const L = j.split("-"), N = L[1], $ = L[2];
      return d(j, g[N][$]);
    };
    g.mode === "light" && (F(g.common, "background", "#fff"), F(g.common, "onBackground", "#000")), g.mode === "dark" && (F(g.common, "background", "#000"), F(g.common, "onBackground", "#fff"));
    function P(j, L, N) {
      if (w) {
        let $;
        return j === io && ($ = `transparent ${((1 - N) * 100).toFixed(0)}%`), j === Ve && ($ = `#000 ${(N * 100).toFixed(0)}%`), j === Ke && ($ = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${w}, ${L}, ${$})`;
      }
      return j(L, N);
    }
    if (pk(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      F(g.Alert, "errorColor", P(Ve, s ? d("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ve, s ? d("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ve, s ? d("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ve, s ? d("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", M("palette-error-main")), F(g.Alert, "infoFilledBg", M("palette-info-main")), F(g.Alert, "successFilledBg", M("palette-success-main")), F(g.Alert, "warningFilledBg", M("palette-warning-main")), F(g.Alert, "errorFilledColor", Kn(() => g.getContrastText(g.error.main))), F(g.Alert, "infoFilledColor", Kn(() => g.getContrastText(g.info.main))), F(g.Alert, "successFilledColor", Kn(() => g.getContrastText(g.success.main))), F(g.Alert, "warningFilledColor", Kn(() => g.getContrastText(g.warning.main))), F(g.Alert, "errorStandardBg", P(Ke, s ? d("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ke, s ? d("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ke, s ? d("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ke, s ? d("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", M("palette-error-main")), F(g.Alert, "infoIconColor", M("palette-info-main")), F(g.Alert, "successIconColor", M("palette-success-main")), F(g.Alert, "warningIconColor", M("palette-warning-main")), F(g.AppBar, "defaultBg", M("palette-grey-100")), F(g.Avatar, "defaultBg", M("palette-grey-400")), F(g.Button, "inheritContainedBg", M("palette-grey-300")), F(g.Button, "inheritContainedHoverBg", M("palette-grey-A100")), F(g.Chip, "defaultBorder", M("palette-grey-400")), F(g.Chip, "defaultAvatarColor", M("palette-grey-700")), F(g.Chip, "defaultIconColor", M("palette-grey-700")), F(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.LinearProgress, "secondaryBg", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.LinearProgress, "errorBg", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.LinearProgress, "infoBg", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.LinearProgress, "successBg", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.LinearProgress, "warningBg", P(Ke, s ? d("palette-warning-light") : g.warning.main, 0.62)), F(g.Skeleton, "bg", w ? P(io, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), F(g.Slider, "primaryTrack", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.Slider, "secondaryTrack", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Slider, "errorTrack", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.Slider, "infoTrack", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.Slider, "successTrack", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.Slider, "warningTrack", P(Ke, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const j = w ? P(Ve, s ? d("palette-background-default") : g.background.default, 0.6825) : Ll(g.background.default, 0.8);
      F(g.SnackbarContent, "bg", j), F(g.SnackbarContent, "color", Kn(() => w ? Kd.text.primary : g.getContrastText(j))), F(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)), F(g.StepConnector, "border", M("palette-grey-400")), F(g.StepContent, "border", M("palette-grey-400")), F(g.Switch, "defaultColor", M("palette-common-white")), F(g.Switch, "defaultDisabledColor", M("palette-grey-100")), F(g.Switch, "primaryDisabledColor", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), F(g.Switch, "secondaryDisabledColor", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), F(g.Switch, "errorDisabledColor", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), F(g.Switch, "infoDisabledColor", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), F(g.Switch, "successDisabledColor", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), F(g.Switch, "warningDisabledColor", P(Ke, s ? d("palette-warning-main") : g.warning.main, 0.62)), F(g.TableCell, "border", P(Ke, io(s ? d("palette-divider") : g.divider, 1), 0.88)), F(g.Tooltip, "bg", P(io, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      F(g.Alert, "errorColor", P(Ke, s ? d("palette-error-light") : g.error.light, 0.6)), F(g.Alert, "infoColor", P(Ke, s ? d("palette-info-light") : g.info.light, 0.6)), F(g.Alert, "successColor", P(Ke, s ? d("palette-success-light") : g.success.light, 0.6)), F(g.Alert, "warningColor", P(Ke, s ? d("palette-warning-light") : g.warning.light, 0.6)), F(g.Alert, "errorFilledBg", M("palette-error-dark")), F(g.Alert, "infoFilledBg", M("palette-info-dark")), F(g.Alert, "successFilledBg", M("palette-success-dark")), F(g.Alert, "warningFilledBg", M("palette-warning-dark")), F(g.Alert, "errorFilledColor", Kn(() => g.getContrastText(g.error.dark))), F(g.Alert, "infoFilledColor", Kn(() => g.getContrastText(g.info.dark))), F(g.Alert, "successFilledColor", Kn(() => g.getContrastText(g.success.dark))), F(g.Alert, "warningFilledColor", Kn(() => g.getContrastText(g.warning.dark))), F(g.Alert, "errorStandardBg", P(Ve, s ? d("palette-error-light") : g.error.light, 0.9)), F(g.Alert, "infoStandardBg", P(Ve, s ? d("palette-info-light") : g.info.light, 0.9)), F(g.Alert, "successStandardBg", P(Ve, s ? d("palette-success-light") : g.success.light, 0.9)), F(g.Alert, "warningStandardBg", P(Ve, s ? d("palette-warning-light") : g.warning.light, 0.9)), F(g.Alert, "errorIconColor", M("palette-error-main")), F(g.Alert, "infoIconColor", M("palette-info-main")), F(g.Alert, "successIconColor", M("palette-success-main")), F(g.Alert, "warningIconColor", M("palette-warning-main")), F(g.AppBar, "defaultBg", M("palette-grey-900")), F(g.AppBar, "darkBg", M("palette-background-paper")), F(g.AppBar, "darkColor", M("palette-text-primary")), F(g.Avatar, "defaultBg", M("palette-grey-600")), F(g.Button, "inheritContainedBg", M("palette-grey-800")), F(g.Button, "inheritContainedHoverBg", M("palette-grey-700")), F(g.Chip, "defaultBorder", M("palette-grey-700")), F(g.Chip, "defaultAvatarColor", M("palette-grey-300")), F(g.Chip, "defaultIconColor", M("palette-grey-300")), F(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(g.LinearProgress, "primaryBg", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.5)), F(g.LinearProgress, "secondaryBg", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), F(g.LinearProgress, "errorBg", P(Ve, s ? d("palette-error-main") : g.error.main, 0.5)), F(g.LinearProgress, "infoBg", P(Ve, s ? d("palette-info-main") : g.info.main, 0.5)), F(g.LinearProgress, "successBg", P(Ve, s ? d("palette-success-main") : g.success.main, 0.5)), F(g.LinearProgress, "warningBg", P(Ve, s ? d("palette-warning-main") : g.warning.main, 0.5)), F(g.Skeleton, "bg", w ? P(io, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), F(g.Slider, "primaryTrack", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.5)), F(g.Slider, "secondaryTrack", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), F(g.Slider, "errorTrack", P(Ve, s ? d("palette-error-main") : g.error.main, 0.5)), F(g.Slider, "infoTrack", P(Ve, s ? d("palette-info-main") : g.info.main, 0.5)), F(g.Slider, "successTrack", P(Ve, s ? d("palette-success-main") : g.success.main, 0.5)), F(g.Slider, "warningTrack", P(Ve, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const j = w ? P(Ke, s ? d("palette-background-default") : g.background.default, 0.985) : Ll(g.background.default, 0.98);
      F(g.SnackbarContent, "bg", j), F(g.SnackbarContent, "color", Kn(() => w ? t1.text.primary : g.getContrastText(j))), F(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)), F(g.StepConnector, "border", M("palette-grey-600")), F(g.StepContent, "border", M("palette-grey-600")), F(g.Switch, "defaultColor", M("palette-grey-300")), F(g.Switch, "defaultDisabledColor", M("palette-grey-600")), F(g.Switch, "primaryDisabledColor", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.55)), F(g.Switch, "secondaryDisabledColor", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), F(g.Switch, "errorDisabledColor", P(Ve, s ? d("palette-error-main") : g.error.main, 0.55)), F(g.Switch, "infoDisabledColor", P(Ve, s ? d("palette-info-main") : g.info.main, 0.55)), F(g.Switch, "successDisabledColor", P(Ve, s ? d("palette-success-main") : g.success.main, 0.55)), F(g.Switch, "warningDisabledColor", P(Ve, s ? d("palette-warning-light") : g.warning.main, 0.55)), F(g.TableCell, "border", P(Ve, io(s ? d("palette-divider") : g.divider, 1), 0.68)), F(g.Tooltip, "bg", P(io, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (ur(g.background, "default"), ur(g.background, "paper"), ur(g.common, "background"), ur(g.common, "onBackground"), ur(g, "divider")), Object.keys(g).forEach((j) => {
      const L = g[j];
      j !== "tonalOffset" && !s && L && typeof L == "object" && (L.main && F(g[j], "mainChannel", ls(as(L.main))), L.light && F(g[j], "lightChannel", ls(as(L.light))), L.dark && F(g[j], "darkChannel", ls(as(L.dark))), L.contrastText && F(g[j], "contrastTextChannel", ls(as(L.contrastText))), j === "text" && (ur(g[j], "primary"), ur(g[j], "secondary")), j === "action" && (L.active && ur(g[j], "active"), L.selected && ur(g[j], "selected")));
    });
  }), k = t.reduce((I, g) => Ot(I, g), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: fk(k),
    enableContrastVars: s
  }, {
    vars: T,
    generateThemeVars: A,
    generateStyleSheets: O
  } = R2(k, R);
  return k.vars = T, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([I, g]) => {
    k[I] = g;
  }), k.generateThemeVars = A, k.generateStyleSheets = O, k.generateSpacing = function() {
    return _0(u.spacing, Nc(this));
  }, k.getColorSchemeSelector = P2(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Wc,
    ...u == null ? void 0 : u.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return Io({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = o1, k;
}
function Oh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: kp({
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
      return Yd(e, ...t);
    let u = n;
    "palette" in e || c[l] && (c[l] !== !0 ? u = c[l].palette : l === "dark" && (u = {
      mode: "dark"
    }));
    const p = Yd({
      ...e,
      palette: u
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = c, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: p.palette
    }, Oh(p, "dark", c.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: p.palette
    }, Oh(p, "light", c.light)), p;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), gk({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ba(e) {
  return typeof e == "string";
}
function cl(e, t = 166) {
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
function rt(...e) {
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
function Ze(e) {
  const t = m.useRef(e);
  return ut(() => {
    t.current = e;
  }), m.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function mt(e) {
  return e && e.ownerDocument || document;
}
function mn(e) {
  return mt(e).defaultView || window;
}
function Nl(e) {
  return parseInt(e, 10) || 0;
}
const yk = {
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
function vk(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Lh(e) {
  return vk(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const xk = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = m.useRef(l != null), u = m.useRef(null), p = rt(n, u), v = m.useRef(null), d = m.useRef(null), x = m.useCallback(() => {
    const S = u.current, w = d.current;
    if (!S || !w)
      return;
    const k = mn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Nl(k.paddingBottom) + Nl(k.paddingTop), A = Nl(k.borderBottomWidth) + Nl(k.borderTopWidth), O = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let g = O;
    i && (g = Math.max(Number(i) * I, g)), o && (g = Math.min(Number(o) * I, g)), g = Math.max(g, I);
    const M = g + (R === "border-box" ? T + A : 0), P = Math.abs(g - O) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: P
    };
  }, [o, i, t.placeholder]), b = Ze(() => {
    const S = u.current, w = x();
    if (!S || !w || Lh(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = m.useCallback(() => {
    const S = u.current, w = x();
    if (!S || !w || Lh(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, S.style.height = `${E}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), y = m.useRef(-1);
  ut(() => {
    const S = cl(C), w = u == null ? void 0 : u.current;
    if (!w)
      return;
    const E = mn(w);
    E.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(y.current), C(), y.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(y.current), E.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), ut(() => {
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
      ref: d,
      tabIndex: -1,
      style: {
        ...yk.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), ul = /* @__PURE__ */ m.createContext(void 0);
function Sk() {
  return m.useContext(ul);
}
function Li({
  props: e,
  states: t
}) {
  const n = m.useContext(ul), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Tp = Gc();
function ar() {
  const e = Hc(Tp);
  return e[rr] || e;
}
function bk(e) {
  return /* @__PURE__ */ f.jsx(W0, {
    ...e,
    defaultTheme: Tp,
    themeId: rr
  });
}
function l1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const on = (e) => l1(e) && e !== "classes", H = Y0({
  themeId: rr,
  defaultTheme: Tp,
  rootShouldForwardProp: on
});
function wk(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ f.jsx(bk, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const xe = m2;
function pe(e) {
  return u2(e);
}
function Jn(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Nh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Fa(e, t = !1) {
  return e && (Nh(e.value) && e.value !== "" || t && Nh(e.defaultValue) && e.defaultValue !== "");
}
function Ck(e) {
  return e.startAdornment;
}
function kk(e) {
  return de("MuiInputBase", e);
}
const an = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), Tk = {
  transition: "none"
};
function Ek(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Xc = (e) => e.scrollTop, _u = {
  offsetX: 0,
  offsetY: 0
}, a1 = {}, Rk = ["all"], Pk = {}, Ik = {
  matrix: [4, 5],
  matrix3d: [12, 13],
  translate: [0, 1],
  translate3d: [0, 1],
  translateX: [0, null],
  translateY: [null, 0]
};
function Mk(e) {
  const t = parseFloat(e ?? "");
  return Number.isNaN(t) ? 0 : t;
}
function $k(e) {
  const t = e.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
  return t ? {
    type: t[1],
    values: t[2].split(",").map(Mk)
  } : null;
}
function zh(e, t) {
  return t === null ? 0 : e[t] || 0;
}
function jk(e) {
  if (!e || e === "none")
    return _u;
  const t = $k(e);
  if (!t)
    return _u;
  const {
    type: n,
    values: r
  } = t, o = Ik[n];
  return o ? {
    offsetX: zh(r, o[0]),
    offsetY: zh(r, o[1])
  } : _u;
}
function Rt(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function c1(e, t, n, r, o, i) {
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
    style: o = a1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Ep(e, t) {
  var r;
  const n = t ?? Tk;
  return Ek((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function vt(e, t = Rk, n = Pk) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Ep(e);
  if (r === void 0)
    return o ?? a1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Dh;
const Xd = "mui-auto-fill", _a = "mui-auto-fill-cancel", Qc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${se(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, qc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, Ak = (e) => {
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
    readOnly: p,
    size: v,
    startAdornment: d,
    type: x
  } = e, b = {
    root: ["root", `color${se(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${se(v)}`, u && "multiline", d && "adornedStart", i && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return fe(b, kk, t);
}, Zc = H("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Qc
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
}))), Jc = H("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: qc
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
    ...vt(e, "opacity", {
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
        animationName: _a,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: Xd
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
})), Bh = wk({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${Xd}`]: {
    from: {
      animationName: Xd
    }
  },
  [`@keyframes ${_a}`]: {
    from: {
      animationName: _a
    }
  }
}), Rp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disabled: p,
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
    onChange: O,
    onClick: I,
    onFocus: g,
    onKeyDown: M,
    onKeyUp: P,
    placeholder: j,
    readOnly: L,
    renderSuffix: N,
    rows: $,
    size: z,
    slotProps: B = {},
    slots: W = {},
    startAdornment: _,
    type: Q = "text",
    value: K,
    ...q
  } = r, G = h.value != null ? h.value : K, {
    current: X
  } = m.useRef(G != null), U = m.useRef(), J = m.useCallback((oe) => {
  }, []), ie = rt(U, S, h.ref, J), [Ce, Te] = m.useState(!1), [ge, ae] = Li({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ge.focused = ae ? ae.focused : Ce, m.useEffect(() => {
    !ae && p && Ce && (Te(!1), A && A());
  }, [ae, p, Ce, A]);
  const Le = ae && ae.onFilled, Ue = ae && ae.onEmpty, we = m.useCallback((oe) => {
    Fa(oe) ? Le && Le() : Ue && Ue();
  }, [Le, Ue]);
  ut(() => {
    X && we({
      value: G
    });
  }, [G, we, X]), ut(() => {
    if (!l)
      return;
    const oe = U.current;
    if (!oe)
      return;
    const Se = mt(oe), De = Jn(Se), st = De == null || De === Se.body || De === Se.documentElement;
    oe === De ? ae && ae.onFocus ? ae.onFocus() : Te(!0) : st && oe.focus();
  }, [l]);
  const $e = (oe) => {
    g && g(oe), h.onFocus && h.onFocus(oe), ae && ae.onFocus ? ae.onFocus(oe) : Te(!0);
  }, ue = (oe) => {
    A && A(oe), h.onBlur && h.onBlur(oe), ae && ae.onBlur ? ae.onBlur(oe) : Te(!1);
  }, je = (oe, ...Se) => {
    if (!X) {
      const De = oe.target || U.current;
      if (De == null)
        throw new Error(Cr(1));
      we({
        value: De.value
      });
    }
    h.onChange && h.onChange(oe, ...Se), O && O(oe, ...Se);
  };
  m.useEffect(() => {
    we(U.current);
  }, []);
  const Xe = (oe) => {
    U.current && oe.currentTarget === oe.target && U.current.focus(), I && I(oe);
  };
  let Ne = y, me = h;
  R && Ne === "input" && ($ ? me = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...me
  } : me = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...me
  }, Ne = xk);
  const ve = (oe) => {
    we(oe.animationName === _a ? U.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    ae && ae.setAdornedStart(!!_);
  }, [ae, _]);
  const Ae = {
    ...r,
    color: ge.color || "primary",
    disabled: ge.disabled,
    endAdornment: d,
    error: ge.error,
    focused: ge.focused,
    formControl: ae,
    fullWidth: b,
    hiddenLabel: ge.hiddenLabel,
    multiline: R,
    size: ge.size,
    startAdornment: _,
    type: Q
  }, ze = Ak(Ae), be = W.root || Zc, He = B.root || {}, ht = W.input || Jc;
  return me = {
    ...me,
    ...B.input
  }, /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [!v && typeof Bh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Dh || (Dh = /* @__PURE__ */ f.jsx(Bh, {}))), /* @__PURE__ */ f.jsxs(be, {
      ...He,
      ref: n,
      onClick: Xe,
      ...q,
      ...!Ba(be) && {
        ownerState: {
          ...Ae,
          ...He.ownerState
        }
      },
      className: ee(ze.root, He.className, a, L && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ f.jsx(ul.Provider, {
        value: null,
        children: /* @__PURE__ */ f.jsx(ht, {
          "aria-invalid": ge.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: u,
          disabled: ge.disabled,
          id: C,
          onAnimationStart: ve,
          name: T,
          placeholder: j,
          readOnly: L,
          required: ge.required,
          rows: $,
          value: G,
          onKeyDown: M,
          onKeyUp: P,
          type: Q,
          ...me,
          ...!Ba(ht) && {
            as: Ne,
            ownerState: {
              ...Ae,
              ...me.ownerState
            }
          },
          ref: ie,
          className: ee(ze.input, me.className, L && "MuiInputBase-readOnly"),
          onBlur: ue,
          onChange: je,
          onFocus: $e
        })
      }), d, N ? N({
        ...ge,
        startAdornment: _
      }) : null]
    })]
  });
});
function Ok(e) {
  return de("MuiFilledInput", e);
}
const so = {
  ...an,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function Lk(e) {
  return de("MuiFormHelperText", e);
}
const Fh = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function Nk(e) {
  return de("MuiFormLabel", e);
}
const vs = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function zk(e) {
  return de("MuiInput", e);
}
const Xi = {
  ...an,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function Dk(e) {
  return de("MuiMenuItem", e);
}
const Qi = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function Bk(e) {
  return de("MuiNativeSelect", e);
}
const Pp = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function Fk(e) {
  return de("MuiOutlinedInput", e);
}
const Yn = {
  ...an,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function _k({
  theme: e,
  ...t
}) {
  const n = rr in e ? e[rr] : void 0;
  return /* @__PURE__ */ f.jsx(Z0, {
    ...t,
    themeId: n ? rr : void 0,
    theme: n || e
  });
}
const zl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Wk
} = w2({
  themeId: rr,
  // @ts-ignore ignore module augmentation tests
  theme: () => Gc({
    cssVariables: !0
  }),
  colorSchemeStorageKey: zl.colorSchemeStorageKey,
  modeStorageKey: zl.modeStorageKey,
  defaultColorScheme: {
    light: zl.defaultLightColorScheme,
    dark: zl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: r1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Io({
        sx: r,
        theme: this
      });
    }, t;
  }
}), Uk = Wk;
function Hk({
  theme: e,
  ...t
}) {
  const n = m.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = rr in e ? e[rr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ f.jsx(_k, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ f.jsx(Uk, {
    theme: e,
    ...t
  });
}
function _h(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function Vk(e) {
  return de("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Kk = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${se(t)}`, `fontSize${se(n)}`]
  };
  return fe(o, Vk, r);
}, Yk = H("svg", {
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
  var t, n, r, o, i, s, l, a, c, u, p, v;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...vt(e, "fill", {
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
          color: (u = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) == null ? void 0 : u.active
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
})), Qd = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    titleAccess: p,
    viewBox: v = "0 0 24 24",
    ...d
  } = r, x = /* @__PURE__ */ m.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: u,
    viewBox: v,
    hasSvgAsChild: x
  }, C = {};
  u || (C.viewBox = v);
  const y = Kk(b);
  return /* @__PURE__ */ f.jsxs(Yk, {
    as: l,
    className: ee(y.root, i),
    focusable: "false",
    color: c,
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
Qd.muiName = "SvgIcon";
function Je(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ f.jsx(Qd, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Qd.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(n));
}
function qd(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Zd(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = m.useRef(t !== void 0), [s, l] = m.useState(n), a = i ? t : s, c = m.useCallback((u) => {
    i || l(u);
  }, []);
  return [a, c];
}
function u1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function d1(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      u1(c, l[c]) && typeof s[c] == "function" && (a[c] = (...u) => {
        s[c](...u), l[c](...u);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = ee(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), u = n(a, l);
      return {
        ...l,
        ...a,
        ...u,
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
  const r = t, o = n(e, r), i = ee(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
const Wh = {};
function Ip(e, t) {
  const n = m.useRef(Wh);
  return n.current === Wh && (n.current = e(t)), n;
}
function Gk(e) {
  const t = Ip(() => Xk(e)).current;
  return t.next = e, ut(t.effect), t;
}
function Xk(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Uh = ay.createContext(null);
function Qk(e) {
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
function qk(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = Qk(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function Mp(e) {
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
    nodeRef: p,
    onEnter: v,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: y,
    children: h,
    ...S
  } = e, w = m.useContext(Uh), E = w && !w.isMounting ? r : n, [k, R] = m.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = m.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const A = m.useRef(t && E), O = m.useRef(!1), I = m.useRef(null), g = m.useRef(k), M = m.useRef(!1), P = m.useRef(c), j = Gk({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: u,
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
  }), L = m.useCallback(() => {
    I.current !== null && (I.current.cancel(), I.current = null);
  }, []), N = m.useCallback((_) => {
    let Q = !0;
    const K = () => {
      Q && (Q = !1, I.current = null, _());
    };
    return K.cancel = () => {
      Q = !1;
    }, I.current = K, K;
  }, []), $ = m.useCallback((_, Q) => {
    var Ue, we;
    let K;
    const q = () => {
      K !== void 0 && (clearTimeout(K), K = void 0);
    }, G = N(() => {
      q(), T.current = _, R(_);
    }), X = G.cancel;
    G.cancel = () => {
      q(), X();
    };
    const U = j.current.nodeRef.current, J = j.current.addEndListener, ie = j.current.getAutoTimeout !== void 0, Ce = (we = (Ue = j.current).getAutoTimeout) == null ? void 0 : we.call(Ue), Te = qk({
      currentStatus: Q,
      isAppearing: M.current,
      timeout: j.current.timeout,
      autoTimeout: Ce
    }), ge = P.current, ae = Te ?? (ge && ie ? 0 : null), Le = ($e) => {
      K = setTimeout(G, $e);
    };
    if (!U) {
      Le(0);
      return;
    }
    if (J) {
      ae != null && Le(ge ? 0 : ae), J.length >= 2 ? J(U, G) : J(G);
      return;
    }
    Le(ge ? 0 : Te ?? 0);
  }, [N, j]), z = m.useCallback((_) => {
    var q;
    const Q = j.current, K = Q.parentGroup ? Q.parentGroup.isMounting : _;
    if (M.current = K, !_ && !Q.enter) {
      T.current = "entered", R("entered");
      return;
    }
    P.current = Q.reduceMotion, (q = Q.onEnter) == null || q.call(Q, K), T.current = "entering", R("entering");
  }, [j]), B = m.useCallback(() => {
    var Q;
    const _ = j.current;
    if (!_.exit) {
      T.current = "exited", R("exited");
      return;
    }
    P.current = _.reduceMotion, (Q = _.onExit) == null || Q.call(_), T.current = "exiting", R("exiting");
  }, [j]), W = m.useCallback((_, Q) => {
    if (L(), Q === "entering") {
      const K = j.current;
      if (K.mountOnEnter || K.unmountOnExit) {
        const q = K.nodeRef.current;
        q && Xc(q);
      }
      z(_);
    } else
      B();
  }, [L, z, B, j]);
  return ut(() => (O.current = !0, A.current && (A.current = !1, W(!0, "entering")), () => {
    O.current = !1, L();
  }), [L, W]), ut(() => {
    if (!O.current)
      return;
    const _ = T.current;
    t ? _ !== "entering" && _ !== "entered" && W(!1, "entering") : _ === "entering" || _ === "entered" ? W(!1, "exiting") : _ === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, W]), ut(() => {
    var q, G, X, U;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const Q = g.current !== k;
    Q && (g.current = k);
    const K = j.current;
    k === "entering" ? (Q && ((q = K.onEntering) == null || q.call(K, M.current)), I.current === null && T.current === k && $("entered", "entering")) : k === "exiting" ? (Q && ((G = K.onExiting) == null || G.call(K)), I.current === null && T.current === k && $("exited", "exiting")) : k === "entered" && Q ? (X = K.onEntered) == null || X.call(K, M.current) : k === "exited" && Q && ((U = K.onExited) == null || U.call(K));
  }, [j, $, k]), k === "unmounted" ? null : /* @__PURE__ */ f.jsx(Uh.Provider, {
    value: null,
    children: h(k, S)
  });
}
const f1 = "(prefers-reduced-motion: reduce)", Zk = 0, Jk = "0ms", eT = () => {
}, Hh = () => !1, tT = () => !0, nT = () => eT;
function rT(e) {
  const [t, n] = m.useState(() => ({
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
    const i = window.matchMedia(f1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const oT = {
  ...da
}, p1 = oT.useSyncExternalStore;
function iT(e) {
  const t = e ? tT : Hh, [n, r] = m.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Hh, nT];
    const o = window.matchMedia(f1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return p1(r, n, t);
}
const sT = p1 !== void 0 ? iT : rT;
function dl(e, t) {
  const n = sT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return m.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: Zk,
        delay: Jk
      } : o;
    }
  }), [r]);
}
function m1(e, t, n) {
  return e === void 0 || Ba(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function h1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Wa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    u1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function Vh(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function g1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const d = ee(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = {
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
  }), l = Vh(r), a = Vh(o), c = t(s), u = ee(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
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
  return u.length > 0 && (v.className = u), Object.keys(p).length > 0 && (v.style = p), {
    props: v,
    internalRef: c.ref
  };
}
function he(e, t) {
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
    slotProps: p = {
      [e]: void 0
    },
    ...v
  } = i, d = u[e] || r, x = h1(p[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: y
  } = g1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: x
  }), h = rt(y, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || c : b, w = m1(d, {
    ...e === "root" && !c && !u[e] && s,
    ...e !== "root" && !u[e] && s,
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
function lT(e) {
  return de("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const aT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return fe(i, lT, o);
}, cT = H("div", {
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
  ...vt(e, "box-shadow"),
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
}))), sr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var d;
  const r = pe({
    props: t,
    name: "MuiPaper"
  }), o = ar(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...u
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, v = aT(p);
  return /* @__PURE__ */ f.jsx(cT, {
    as: s,
    ownerState: p,
    className: ee(v.root, i),
    ref: n,
    ...u,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Dr("#fff", Gd(l))}, ${Dr("#fff", Gd(l))})`
        }
      },
      ...u.style
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
function uT(e) {
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
      onKeyDown(u) {
        n && t && u.key !== "Tab" && u.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !i && n && (c.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (c["aria-disabled"] = n), i && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, s, l, i, o]);
}
const dT = {};
function fT(e) {
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
  } = e, u = m.useRef(null), p = s === !0, v = uT({
    focusableWhenDisabled: p,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = m.useCallback(() => {
    const C = u.current;
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
    getButtonProps: m.useCallback((C = dT) => {
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
          if (p && v.onKeyDown(T), !n && (a == null || a(T), h == null || h(T), !(T.target !== T.currentTarget || d()))) {
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
    }, [x, n, p, v, d, a, c, l]),
    rootRef: u
  };
}
class Ha {
  constructor() {
    Di(this, "mountEffect", () => {
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
    const t = Ip(Ha.create).current, [n, r] = m.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, m.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = mT(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function pT() {
  return Ha.use();
}
function mT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const hT = [];
function y1(e) {
  m.useEffect(e, hT);
}
class eu {
  constructor() {
    Di(this, "currentId", null);
    Di(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Di(this, "disposeEffect", () => this.clear);
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
function er() {
  const e = Ip(eu.create).current;
  return y1(e.disposeEffect), e;
}
function gT(e) {
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
  } = e, [u, p] = m.useState(!1), v = er(), d = m.useRef(!1), x = m.useRef(a);
  x.current = a;
  const b = a != null, C = ee(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = ee(n.child, u && n.childLeaving, r && n.childPulsate);
  return !l && !u && p(!0), m.useEffect(() => {
    !l && b ? d.current || (d.current = !0, v.start(c, () => {
      var S;
      d.current = !1, (S = x.current) == null || S.call(x);
    })) : (d.current = !1, v.clear());
  }, [v, b, l, c]), /* @__PURE__ */ f.jsx("span", {
    className: C,
    style: y,
    children: /* @__PURE__ */ f.jsx("span", {
      className: h
    })
  });
}
const Ht = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Jd = 550, yT = 80, Dl = {}, Kh = [], vT = () => {
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
function xT({
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
const ST = sl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bT = sl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, wT = sl`
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
function CT(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Ks`
    &.${Ht.rippleVisible} {
      animation-name: ${ST};
      animation-duration: ${Jd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Ht.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Ht.childLeaving} {
      animation-name: ${bT};
      animation-duration: ${Jd}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Ht.childPulsate} {
      animation-name: ${wT};
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
const kT = H("span", {
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
}), TT = H(gT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ht.rippleVisible} {
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
  & .${Ht.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ht.childLeaving} {
    opacity: 0;
  }

  & .${Ht.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => CT(e)}
`, ET = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTouchRipple"
  }), o = ar(), i = dl(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Dl,
    className: a,
    ...c
  } = r, [u, p] = m.useState({
    items: Kh,
    order: Kh
  }), v = u.items, d = m.useRef(0), x = m.useRef(null), b = m.useRef(!1);
  y1(() => (b.current = !0, () => {
    b.current = !1;
  })), m.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const C = m.useRef(!1), y = er(), h = m.useRef(null), S = m.useRef(null), w = Ze((I) => {
    b.current && p((g) => {
      const M = g.items.filter((j) => j.key !== I), P = Wu(g.order.filter((j) => j !== I), M.filter((j) => !j.exiting).map((j) => j.key));
      return {
        items: M,
        order: P
      };
    });
  }), E = Ze((I) => {
    const {
      pulsate: g,
      rippleX: M,
      rippleY: P,
      rippleSize: j,
      cb: L
    } = I, N = d.current;
    d.current += 1, p(($) => {
      const z = [...$.items, {
        key: N,
        pulsate: g,
        rippleX: M,
        rippleY: P,
        rippleSize: j,
        exiting: !1
      }];
      return {
        items: z,
        order: Wu($.order, z.filter((B) => !B.exiting).map((B) => B.key))
      };
    }), x.current = L;
  }), k = Ze((I = Dl, g = Dl, M = vT) => {
    const {
      pulsate: P = !1,
      center: j = s || g.pulsate,
      fakeElement: L = !1
      // Used only by tests.
    } = g;
    if ((I == null ? void 0 : I.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (I == null ? void 0 : I.type) === "touchstart" && (C.current = !0);
    const N = L ? null : S.current, {
      rippleX: $,
      rippleY: z,
      rippleSize: B
    } = xT({
      event: I,
      element: N,
      center: j
    });
    I != null && I.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: P,
        rippleX: $,
        rippleY: z,
        rippleSize: B,
        cb: M
      });
    }, y.start(yT, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: P,
      rippleX: $,
      rippleY: z,
      rippleSize: B,
      cb: M
    });
  }), R = Ze(() => {
    k(Dl, {
      pulsate: !0
    });
  }), T = Ze((I, g) => {
    if (y.clear(), (I == null ? void 0 : I.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        T(I, g);
      });
      return;
    }
    h.current = null, p((M) => {
      const P = M.items.findIndex((L) => !L.exiting);
      if (P === -1)
        return M;
      const j = M.items.slice();
      return j[P] = {
        ...j[P],
        exiting: !0
      }, {
        items: j,
        order: Wu(M.order, j.filter((L) => !L.exiting).map((L) => L.key))
      };
    }), x.current = g;
  });
  m.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const A = new Map(v.map((I) => [I.key, I])), O = u.order.map((I) => A.get(I)).filter(Boolean);
  return /* @__PURE__ */ f.jsx(kT, {
    className: ee(Ht.root, l.root, a),
    ref: S,
    ...c,
    children: O.map((I) => /* @__PURE__ */ f.jsx(TT, {
      classes: {
        ripple: ee(l.ripple, Ht.ripple),
        rippleVisible: ee(l.rippleVisible, Ht.rippleVisible),
        ripplePulsate: ee(l.ripplePulsate, Ht.ripplePulsate),
        child: ee(l.child, Ht.child),
        childLeaving: ee(l.childLeaving, Ht.childLeaving),
        childPulsate: ee(l.childPulsate, Ht.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Jd,
      pulsate: I.pulsate,
      rippleX: I.rippleX,
      rippleY: I.rippleY,
      rippleSize: I.rippleSize,
      in: !I.exiting,
      onExited: () => w(I.key)
    }, I.key))
  });
});
function RT(e) {
  return de("MuiButtonBase", e);
}
const PT = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), IT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = fe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, RT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, MT = H("button", {
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
  [`&.${PT.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Mo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    nativeButton: h,
    onBlur: S,
    onClick: w,
    onContextMenu: E,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: T,
    onKeyDown: A,
    onKeyUp: O,
    onMouseDown: I,
    onMouseLeave: g,
    onMouseUp: M,
    onTouchEnd: P,
    onTouchMove: j,
    onTouchStart: L,
    tabIndex: N = 0,
    TouchRippleProps: $,
    touchRippleRef: z,
    type: B,
    ...W
  } = r, _ = !!(W.href || W.to), Q = !!W.formAction;
  let K = a;
  K === "button" && _ && (K = y);
  const G = h ?? (typeof K == "string" ? K === "button" : C ?? !1), X = pT(), U = rt(X.ref, z), [J, ie] = m.useState(!1);
  (c || b) && J && ie(!1);
  const Ce = Ze((ke) => {
    v && !ke.repeat && J && ke.key === " " && X.stop(ke, () => {
      X.start(ke);
    });
  }), Te = Ze((ke) => {
    v && ke.key === " " && J && !ke.defaultPrevented && X.stop(ke, () => {
      X.pulsate(ke);
    });
  }), {
    getButtonProps: ge,
    rootRef: ae
  } = fT({
    nativeButton: G,
    disabled: c,
    type: B,
    hasFormAction: Q,
    tabIndex: N,
    onBeforeKeyDown: Ce,
    onBeforeKeyUp: Te
  }), {
    onClick: Le,
    onKeyDown: Ue,
    onKeyUp: we,
    ...$e
  } = ge({
    onClick: w,
    onKeyDown: A,
    onKeyUp: O
  });
  m.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ie(!0), ae.current.focus();
    }
  }), [ae]);
  const ue = X.shouldMount && !u && !c;
  m.useEffect(() => {
    J && v && !u && X.pulsate();
  }, [u, v, J, X]);
  const je = dr(X, "start", I, p), Xe = dr(X, "stop", E, p), Ne = dr(X, "stop", k, p), me = dr(X, "stop", M, p), ve = dr(X, "stop", (ke) => {
    J && ke.preventDefault(), g && g(ke);
  }, p), Ae = dr(X, "start", L, p), ze = dr(X, "stop", P, p), be = dr(X, "stop", j, p), He = dr(X, "stop", (ke) => {
    Ua(ke.target) || ie(!1), S && S(ke);
  }, !1), ht = Ze((ke) => {
    ae.current || (ae.current = ke.currentTarget), !b && Ua(ke.target) && (ie(!0), T && T(ke)), R && R(ke);
  }), oe = {};
  _ && (oe.tabIndex = c ? -1 : N, c && (oe["aria-disabled"] = c), oe.type = B);
  const Se = rt(n, ae), De = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: u,
    disableTouchRipple: p,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: N,
    focusVisible: J
  }, st = IT(De);
  return /* @__PURE__ */ f.jsxs(MT, {
    as: K,
    className: ee(st.root, l),
    ownerState: De,
    onBlur: He,
    onClick: Le,
    onContextMenu: Xe,
    onFocus: ht,
    onKeyDown: Ue,
    onKeyUp: we,
    onMouseDown: je,
    onMouseLeave: ve,
    onMouseUp: me,
    onDragLeave: Ne,
    onTouchEnd: ze,
    onTouchMove: be,
    onTouchStart: Ae,
    ref: Se,
    ..._ ? oe : $e,
    ...W,
    children: [s, ue ? /* @__PURE__ */ f.jsx(ET, {
      ref: U,
      center: i,
      ...$
    }) : null]
  });
});
function dr(e, t, n, r = !1) {
  return Ze((o) => (n && n(o), r || e[t](o), !0));
}
function $T(e) {
  return typeof e.main == "string";
}
function jT(e, t = []) {
  if (!$T(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Vt(e = []) {
  return ([, t]) => t && jT(t, e);
}
function AT(e) {
  return de("MuiAlert", e);
}
const Yh = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function OT(e) {
  return de("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const An = 44, ef = sl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, tf = sl`
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
`, LT = typeof ef != "string" ? Ks`
        animation: ${ef} 1.4s linear infinite;
      ` : null, NT = typeof tf != "string" ? Ks`
        animation: ${tf} 1.4s ease-in-out infinite;
      ` : null, zT = (e) => {
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
  return fe(i, OT, t);
}, DT = H("span", {
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
  const t = Ep(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...vt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: LT || {
        animation: `${ef} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Vt()).map(([n]) => ({
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
}), FT = H("circle", {
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
  const t = Ep(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...vt(e, "stroke-dashoffset")
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
        animation: `${tf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), _T = H("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(xe(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), ii = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    style: p,
    thickness: v = 3.6,
    value: d = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, y = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: u,
    thickness: v,
    value: d,
    variant: x,
    enableTrackSlot: l
  }, S = zT(h), w = {}, E = {}, k = {};
  if (x === "determinate") {
    const R = 2 * Math.PI * ((An - v) / 2), T = y - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((y - d) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ f.jsx(DT, {
    className: ee(S.root, o),
    style: {
      width: u,
      height: u,
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
      viewBox: `${An / 2} ${An / 2} ${An} ${An}`,
      children: [l ? /* @__PURE__ */ f.jsx(_T, {
        className: S.track,
        ownerState: h,
        cx: An,
        cy: An,
        r: (An - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ f.jsx(FT, {
        className: S.circle,
        style: w,
        ownerState: h,
        cx: An,
        cy: An,
        r: (An - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function WT(e) {
  return de("MuiIconButton", e);
}
const Gh = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), UT = (e) => {
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
  return fe(l, WT, t);
}, HT = H(Mo, {
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
  ...vt(e, "background-color", {
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
  }, ...Object.entries(e.palette).filter(Vt()).map(([t]) => ({
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
  [`&.${Gh.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Gh.loading}`]: {
    color: "transparent"
  }
}))), VT = H("span", {
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
})), Ln = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    id: p,
    loading: v = null,
    loadingIndicator: d,
    ...x
  } = r, b = kr(p), C = d ?? /* @__PURE__ */ f.jsx(ii, {
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
  }, h = UT(y);
  return /* @__PURE__ */ f.jsxs(HT, {
    id: v ? b : p,
    className: ee(h.root, s),
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
      children: /* @__PURE__ */ f.jsx(VT, {
        className: h.loadingIndicator,
        ownerState: y,
        children: v && C
      })
    }), i]
  });
}), KT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), YT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), GT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), XT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), QT = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), qT = (e) => {
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
  return fe(i, AT, o);
}, ZT = H(sr, {
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
    variants: [...Object.entries(e.palette).filter(Vt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${Yh.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Vt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Yh.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Vt(["dark"])).map(([r]) => ({
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
})), JT = H("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), eE = H("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), tE = H("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Xh = {
  success: /* @__PURE__ */ f.jsx(KT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ f.jsx(YT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ f.jsx(GT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ f.jsx(XT, {
    fontSize: "inherit"
  })
}, Qh = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: c,
    iconMapping: u = Xh,
    onClose: p,
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
  }, S = qT(h), w = {
    slots: b,
    slotProps: x
  }, [E, k] = he("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: ee(S.root, s),
    elementType: ZT,
    externalForwardedProps: {
      ...w,
      ...y
    },
    ownerState: h,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [R, T] = he("icon", {
    className: S.icon,
    elementType: JT,
    externalForwardedProps: w,
    ownerState: h
  }), [A, O] = he("message", {
    className: S.message,
    elementType: eE,
    externalForwardedProps: w,
    ownerState: h
  }), [I, g] = he("action", {
    className: S.action,
    elementType: tE,
    externalForwardedProps: w,
    ownerState: h
  }), [M, P] = he("closeButton", {
    elementType: Ln,
    externalForwardedProps: w,
    ownerState: h
  }), [j, L] = he("closeIcon", {
    elementType: QT,
    externalForwardedProps: w,
    ownerState: h
  });
  return /* @__PURE__ */ f.jsxs(E, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ f.jsx(R, {
      ...T,
      children: c || u[d] || Xh[d]
    }) : null, /* @__PURE__ */ f.jsx(A, {
      ...O,
      children: i
    }), o != null ? /* @__PURE__ */ f.jsx(I, {
      ...g,
      children: o
    }) : null, o == null && p ? /* @__PURE__ */ f.jsx(I, {
      ...g,
      children: /* @__PURE__ */ f.jsx(M, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: p,
        ...P,
        children: /* @__PURE__ */ f.jsx(j, {
          fontSize: "small",
          ...L
        })
      })
    }) : null]
  });
});
function nE(e) {
  return de("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const rE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${se(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return fe(s, nE, i);
}, oE = H("span", {
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
    })), ...Object.entries(e.palette).filter(Vt()).map(([n]) => ({
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
})), qh = {
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
}, Re = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    variantMapping: p = qh,
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
    variantMapping: p
  }, x = l || p[u] || qh[u] || "span", b = rE(d);
  return /* @__PURE__ */ f.jsx(oE, {
    as: x,
    ref: n,
    className: ee(b.root, s),
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
function bo(e, t) {
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
var tn = "top", Pn = "bottom", In = "right", nn = "left", $p = "auto", fl = [tn, Pn, In, nn], Ei = "start", Xs = "end", iE = "clippingParents", v1 = "viewport", qi = "popper", sE = "reference", Zh = /* @__PURE__ */ fl.reduce(function(e, t) {
  return e.concat([t + "-" + Ei, t + "-" + Xs]);
}, []), x1 = /* @__PURE__ */ [].concat(fl, [$p]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ei, t + "-" + Xs]);
}, []), lE = "beforeRead", aE = "read", cE = "afterRead", uE = "beforeMain", dE = "main", fE = "afterMain", pE = "beforeWrite", mE = "write", hE = "afterWrite", gE = [lE, aE, cE, uE, dE, fE, pE, mE, hE];
function lr(e) {
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
function Tn(e) {
  var t = hn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = hn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Tn(i) || !lr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function vE(e) {
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
      !Tn(o) || !lr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const xE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yE,
  effect: vE,
  requires: ["computeStyles"]
};
function ir(e) {
  return e.split("-")[0];
}
var wo = Math.max, Va = Math.min, Ri = Math.round;
function nf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function S1() {
  return !/^((?!chrome|android).)*safari/i.test(nf());
}
function Pi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Tn(e) && (o = e.offsetWidth > 0 && Ri(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ri(r.height) / e.offsetHeight || 1);
  var s = $o(e) ? hn(e) : window, l = s.visualViewport, a = !S1() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, u = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, v = r.height / i;
  return {
    width: p,
    height: v,
    top: u,
    right: c + p,
    bottom: u + v,
    left: c,
    x: c,
    y: u
  };
}
function Ap(e) {
  var t = Pi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function b1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && jp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Tr(e) {
  return hn(e).getComputedStyle(e);
}
function SE(e) {
  return ["table", "td", "th"].indexOf(lr(e)) >= 0;
}
function to(e) {
  return (($o(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function tu(e) {
  return lr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (jp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    to(e)
  );
}
function Jh(e) {
  return !Tn(e) || // https://github.com/popperjs/popper-core/issues/837
  Tr(e).position === "fixed" ? null : e.offsetParent;
}
function bE(e) {
  var t = /firefox/i.test(nf()), n = /Trident/i.test(nf());
  if (n && Tn(e)) {
    var r = Tr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = tu(e);
  for (jp(o) && (o = o.host); Tn(o) && ["html", "body"].indexOf(lr(o)) < 0; ) {
    var i = Tr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function pl(e) {
  for (var t = hn(e), n = Jh(e); n && SE(n) && Tr(n).position === "static"; )
    n = Jh(n);
  return n && (lr(n) === "html" || lr(n) === "body" && Tr(n).position === "static") ? t : n || bE(e) || t;
}
function Op(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function xs(e, t, n) {
  return wo(e, Va(t, n));
}
function wE(e, t, n) {
  var r = xs(e, t, n);
  return r > n ? n : r;
}
function w1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function C1(e) {
  return Object.assign({}, w1(), e);
}
function k1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var CE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, C1(typeof t != "number" ? t : k1(t, fl));
};
function kE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = ir(n.placement), a = Op(l), c = [nn, In].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!i || !s)) {
    var p = CE(o.padding, n), v = Ap(i), d = a === "y" ? tn : nn, x = a === "y" ? Pn : In, b = n.rects.reference[u] + n.rects.reference[a] - s[a] - n.rects.popper[u], C = s[a] - n.rects.reference[a], y = pl(i), h = y ? a === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = b / 2 - C / 2, w = p[d], E = h - v[u] - p[x], k = h / 2 - v[u] / 2 + S, R = xs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function TE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || b1(t.elements.popper, o) && (t.elements.arrow = o));
}
const EE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: kE,
  effect: TE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ii(e) {
  return e.split("-")[1];
}
var RE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function PE(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Ri(n * o) / o || 0,
    y: Ri(r * o) / o || 0
  };
}
function eg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, p = e.isFixed, v = s.x, d = v === void 0 ? 0 : v, x = s.y, b = x === void 0 ? 0 : x, C = typeof u == "function" ? u({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var y = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = nn, w = tn, E = window;
  if (c) {
    var k = pl(n), R = "clientHeight", T = "clientWidth";
    if (k === hn(n) && (k = to(n), Tr(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === tn || (o === nn || o === In) && i === Xs) {
      w = Pn;
      var A = p && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= A - r.height, b *= a ? 1 : -1;
    }
    if (o === nn || (o === tn || o === Pn) && i === Xs) {
      S = In;
      var O = p && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      d -= O - r.width, d *= a ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, c && RE), g = u === !0 ? PE({
    x: d,
    y: b
  }, hn(n)) : {
    x: d,
    y: b
  };
  if (d = g.x, b = g.y, a) {
    var M;
    return Object.assign({}, I, (M = {}, M[w] = h ? "0" : "", M[S] = y ? "0" : "", M.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", M));
  }
  return Object.assign({}, I, (t = {}, t[w] = h ? b + "px" : "", t[S] = y ? d + "px" : "", t.transform = "", t));
}
function IE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: ir(t.placement),
    variation: Ii(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, eg(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, eg(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ME = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: IE,
  data: {}
};
var Bl = {
  passive: !0
};
function $E(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = hn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(u) {
    u.addEventListener("scroll", n.update, Bl);
  }), l && a.addEventListener("resize", n.update, Bl), function() {
    i && c.forEach(function(u) {
      u.removeEventListener("scroll", n.update, Bl);
    }), l && a.removeEventListener("resize", n.update, Bl);
  };
}
const jE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $E,
  data: {}
};
var AE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ca(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return AE[t];
  });
}
var OE = {
  start: "end",
  end: "start"
};
function tg(e) {
  return e.replace(/start|end/g, function(t) {
    return OE[t];
  });
}
function Lp(e) {
  var t = hn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Np(e) {
  return Pi(to(e)).left + Lp(e).scrollLeft;
}
function LE(e, t) {
  var n = hn(e), r = to(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = S1();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Np(e),
    y: a
  };
}
function NE(e) {
  var t, n = to(e), r = Lp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = wo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = wo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Np(e), a = -r.scrollTop;
  return Tr(o || n).direction === "rtl" && (l += wo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function zp(e) {
  var t = Tr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function T1(e) {
  return ["html", "body", "#document"].indexOf(lr(e)) >= 0 ? e.ownerDocument.body : Tn(e) && zp(e) ? e : T1(tu(e));
}
function Ss(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = T1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = hn(r), s = o ? [i].concat(i.visualViewport || [], zp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ss(tu(s)))
  );
}
function rf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zE(e, t) {
  var n = Pi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ng(e, t, n) {
  return t === v1 ? rf(LE(e, n)) : $o(t) ? zE(t, n) : rf(NE(to(e)));
}
function DE(e) {
  var t = Ss(tu(e)), n = ["absolute", "fixed"].indexOf(Tr(e).position) >= 0, r = n && Tn(e) ? pl(e) : e;
  return $o(r) ? t.filter(function(o) {
    return $o(o) && b1(o, r) && lr(o) !== "body";
  }) : [];
}
function BE(e, t, n, r) {
  var o = t === "clippingParents" ? DE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var u = ng(e, c, r);
    return a.top = wo(u.top, a.top), a.right = Va(u.right, a.right), a.bottom = Va(u.bottom, a.bottom), a.left = wo(u.left, a.left), a;
  }, ng(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function E1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ir(r) : null, i = r ? Ii(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case tn:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Pn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case In:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case nn:
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
  var c = o ? Op(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (i) {
      case Ei:
        a[c] = a[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Xs:
        a[c] = a[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return a;
}
function Qs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? iE : l, c = n.rootBoundary, u = c === void 0 ? v1 : c, p = n.elementContext, v = p === void 0 ? qi : p, d = n.altBoundary, x = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, y = C1(typeof C != "number" ? C : k1(C, fl)), h = v === qi ? sE : qi, S = e.rects.popper, w = e.elements[x ? h : v], E = BE($o(w) ? w : w.contextElement || to(e.elements.popper), a, u, s), k = Pi(e.elements.reference), R = E1({
    reference: k,
    element: S,
    placement: o
  }), T = rf(Object.assign({}, S, R)), A = v === qi ? T : k, O = {
    top: E.top - A.top + y.top,
    bottom: A.bottom - E.bottom + y.bottom,
    left: E.left - A.left + y.left,
    right: A.right - E.right + y.right
  }, I = e.modifiersData.offset;
  if (v === qi && I) {
    var g = I[o];
    Object.keys(O).forEach(function(M) {
      var P = [In, Pn].indexOf(M) >= 0 ? 1 : -1, j = [tn, Pn].indexOf(M) >= 0 ? "y" : "x";
      O[M] += g[j] * P;
    });
  }
  return O;
}
function FE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? x1 : a, u = Ii(r), p = u ? l ? Zh : Zh.filter(function(x) {
    return Ii(x) === u;
  }) : fl, v = p.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  v.length === 0 && (v = p);
  var d = v.reduce(function(x, b) {
    return x[b] = Qs(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ir(b)], x;
  }, {});
  return Object.keys(d).sort(function(x, b) {
    return d[x] - d[b];
  });
}
function _E(e) {
  if (ir(e) === $p)
    return [];
  var t = ca(e);
  return [tg(e), t, tg(t)];
}
function WE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, u = n.boundary, p = n.rootBoundary, v = n.altBoundary, d = n.flipVariations, x = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, y = ir(C), h = y === C, S = a || (h || !x ? [ca(C)] : _E(C)), w = [C].concat(S).reduce(function(K, q) {
      return K.concat(ir(q) === $p ? FE(t, {
        placement: q,
        boundary: u,
        rootBoundary: p,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : q);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, A = w[0], O = 0; O < w.length; O++) {
      var I = w[O], g = ir(I), M = Ii(I) === Ei, P = [tn, Pn].indexOf(g) >= 0, j = P ? "width" : "height", L = Qs(t, {
        placement: I,
        boundary: u,
        rootBoundary: p,
        altBoundary: v,
        padding: c
      }), N = P ? M ? In : nn : M ? Pn : tn;
      E[j] > k[j] && (N = ca(N));
      var $ = ca(N), z = [];
      if (i && z.push(L[g] <= 0), l && z.push(L[N] <= 0, L[$] <= 0), z.every(function(K) {
        return K;
      })) {
        A = I, T = !1;
        break;
      }
      R.set(I, z);
    }
    if (T)
      for (var B = x ? 3 : 1, W = function(q) {
        var G = w.find(function(X) {
          var U = R.get(X);
          if (U)
            return U.slice(0, q).every(function(J) {
              return J;
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
const UE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: WE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rg(e, t, n) {
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
function og(e) {
  return [tn, In, Pn, nn].some(function(t) {
    return e[t] >= 0;
  });
}
function HE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Qs(t, {
    elementContext: "reference"
  }), l = Qs(t, {
    altBoundary: !0
  }), a = rg(s, r), c = rg(l, o, i), u = og(a), p = og(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": p
  });
}
const VE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: HE
};
function KE(e, t, n) {
  var r = ir(e), o = [nn, tn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [nn, In].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function YE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = x1.reduce(function(u, p) {
    return u[p] = KE(p, t.rects, i), u;
  }, {}), l = s[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const GE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: YE
};
function XE(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = E1({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const QE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: XE,
  data: {}
};
function qE(e) {
  return e === "x" ? "y" : "x";
}
function ZE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, u = n.altBoundary, p = n.padding, v = n.tether, d = v === void 0 ? !0 : v, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = Qs(t, {
    boundary: a,
    rootBoundary: c,
    padding: p,
    altBoundary: u
  }), y = ir(t.placement), h = Ii(t.placement), S = !h, w = Op(y), E = qE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, A = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, O = typeof A == "number" ? {
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
      var M, P = w === "y" ? tn : nn, j = w === "y" ? Pn : In, L = w === "y" ? "height" : "width", N = k[w], $ = N + C[P], z = N - C[j], B = d ? -T[L] / 2 : 0, W = h === Ei ? R[L] : T[L], _ = h === Ei ? -T[L] : -R[L], Q = t.elements.arrow, K = d && Q ? Ap(Q) : {
        width: 0,
        height: 0
      }, q = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : w1(), G = q[P], X = q[j], U = xs(0, R[L], K[L]), J = S ? R[L] / 2 - B - U - G - O.mainAxis : W - U - G - O.mainAxis, ie = S ? -R[L] / 2 + B + U + X + O.mainAxis : _ + U + X + O.mainAxis, Ce = t.elements.arrow && pl(t.elements.arrow), Te = Ce ? w === "y" ? Ce.clientTop || 0 : Ce.clientLeft || 0 : 0, ge = (M = I == null ? void 0 : I[w]) != null ? M : 0, ae = N + J - ge - Te, Le = N + ie - ge, Ue = xs(d ? Va($, ae) : $, N, d ? wo(z, Le) : z);
      k[w] = Ue, g[w] = Ue - N;
    }
    if (l) {
      var we, $e = w === "x" ? tn : nn, ue = w === "x" ? Pn : In, je = k[E], Xe = E === "y" ? "height" : "width", Ne = je + C[$e], me = je - C[ue], ve = [tn, nn].indexOf(y) !== -1, Ae = (we = I == null ? void 0 : I[E]) != null ? we : 0, ze = ve ? Ne : je - R[Xe] - T[Xe] - Ae + O.altAxis, be = ve ? je + R[Xe] + T[Xe] - Ae - O.altAxis : me, He = d && ve ? wE(ze, je, be) : xs(d ? ze : Ne, je, d ? be : me);
      k[E] = He, g[E] = He - je;
    }
    t.modifiersData[r] = g;
  }
}
const JE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ZE,
  requiresIfExists: ["offset"]
};
function eR(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function tR(e) {
  return e === hn(e) || !Tn(e) ? Lp(e) : eR(e);
}
function nR(e) {
  var t = e.getBoundingClientRect(), n = Ri(t.width) / e.offsetWidth || 1, r = Ri(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function rR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Tn(t), o = Tn(t) && nR(t), i = to(t), s = Pi(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((lr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  zp(i)) && (l = tR(t)), Tn(t) ? (a = Pi(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Np(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function oR(e) {
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
function iR(e) {
  var t = oR(e);
  return gE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function sR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function lR(e) {
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
var ig = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function aR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? ig : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ig, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, p = [], v = !1, d = {
      state: u,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(u.options) : y;
        b(), u.options = Object.assign({}, i, u.options, h), u.scrollParents = {
          reference: $o(l) ? Ss(l) : l.contextElement ? Ss(l.contextElement) : [],
          popper: Ss(a)
        };
        var S = iR(lR([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(w) {
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
          var y = u.elements, h = y.reference, S = y.popper;
          if (sg(h, S)) {
            u.rects = {
              reference: rR(h, pl(S), u.options.strategy === "fixed"),
              popper: Ap(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(O) {
              return u.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var w = 0; w < u.orderedModifiers.length; w++) {
              if (u.reset === !0) {
                u.reset = !1, w = -1;
                continue;
              }
              var E = u.orderedModifiers[w], k = E.fn, R = E.options, T = R === void 0 ? {} : R, A = E.name;
              typeof k == "function" && (u = k({
                state: u,
                options: T,
                name: A,
                instance: d
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sR(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(u);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!sg(l, a))
      return d;
    d.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function x() {
      u.orderedModifiers.forEach(function(C) {
        var y = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: u,
            name: y,
            instance: d,
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
    return d;
  };
}
var cR = [jE, QE, ME, xE, GE, UE, JE, EE, VE], uR = /* @__PURE__ */ aR({
  defaultModifiers: cR
});
function Mi(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : h1(n, r), {
    props: l,
    internalRef: a
  } = g1({
    ...i,
    externalSlotProps: s
  }), c = rt(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return m1(t, {
    ...l,
    ref: c
  }, r);
}
function no(e) {
  var t;
  return parseInt(m.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function dR(e) {
  return typeof e == "function" ? e() : e;
}
const R1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = m.useState(null), a = rt(/* @__PURE__ */ m.isValidElement(r) ? no(r) : null, n);
  if (ut(() => {
    i || l(dR(o) || document.body);
  }, [o, i]), ut(() => {
    if (s && !i)
      return qd(n, s), () => {
        qd(n, null);
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
  return s && /* @__PURE__ */ d0.createPortal(r, s);
});
function fR(e) {
  return de("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function pR(e, t) {
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
function P1(e) {
  return typeof e == "function" ? e() : e;
}
function mR(e) {
  return e.nodeType !== void 0;
}
const hR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, fR, t);
}, gR = {}, yR = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: u,
    popperRef: p,
    slotProps: v = {},
    slots: d = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, y = m.useRef(null), h = rt(y, n), S = m.useRef(null), w = rt(S, p), E = m.useRef(w);
  ut(() => {
    E.current = w;
  }, [w]), m.useImperativeHandle(p, () => S.current, []);
  const k = pR(c, i), [R, T] = m.useState(k), A = m.useMemo(() => P1(r), [r]);
  m.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), ut(() => {
    if (!A || !a)
      return;
    const P = ($) => {
      T($.placement);
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
        state: $
      }) => {
        P($);
      }
    }];
    l != null && (j = j.concat(l)), u && u.modifiers != null && (j = j.concat(u.modifiers));
    const L = uR(A, y.current, {
      placement: k,
      ...u,
      modifiers: j
    });
    E.current(L);
    const N = y.current;
    return () => {
      if (N) {
        const {
          style: $
        } = N, z = $.position, B = $.top, W = $.left, _ = $.transform;
        L.destroy(), $.position = z, $.top = B, $.left = W, $.transform = _;
      } else
        L.destroy();
      E.current(null);
    };
  }, [A, s, l, a, u, k]);
  const O = {
    placement: R
  };
  x !== null && (O.TransitionProps = x);
  const I = hR(t), g = d.root ?? "div", M = Mi({
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
    ...M,
    children: typeof o == "function" ? o(O) : o
  });
}), vR = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: u,
    placement: p = "bottom",
    popperOptions: v = gR,
    popperRef: d,
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
  if (!a && !u && (!b || S))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const O = P1(r);
    R = O && mR(O) ? mt(O).body : mt(null).body;
  }
  const T = !u && a && (!b || S) ? "none" : void 0, A = b ? {
    in: u,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ f.jsx(R1, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ f.jsx(yR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : u,
      placement: p,
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
}), xR = H(vR, {
  name: "MuiPopper",
  slot: "Root"
})({}), I1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = al(), o = pe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: u,
    open: p,
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
    modifiers: u,
    open: p,
    placement: v,
    popperOptions: d,
    popperRef: x,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ f.jsx(xR, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: y,
    ...S,
    ref: n
  });
}), SR = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function bR(e) {
  return de("MuiChip", e);
}
const _e = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), wR = (e) => {
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
  return fe(a, bR, t);
}, CR = H("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => on(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
    ...vt(e, ["background-color", "box-shadow"]),
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
    }, ...Object.entries(e.palette).filter(Vt(["contrastText"])).map(([n]) => ({
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
      style: {
        [`&.${_e.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Vt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
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
        [`&.${_e.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Vt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${_e.focusVisible}`]: {
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
        [`&.${_e.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${_e.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
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
    }, ...Object.entries(e.palette).filter(Vt()).map(([n]) => ({
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
        [`&.${_e.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
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
})), kR = H("span", {
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
function lg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Vo = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    icon: p,
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
  } = R, O = m.useRef(null), I = rt(O, n), g = (U) => {
    U.stopPropagation(), x(U);
  }, M = (U) => {
    U.currentTarget === U.target && lg(U) && U.preventDefault(), b && b(U);
  }, P = (U) => {
    U.currentTarget === U.target && x && lg(U) && x(U), C && C(U);
  }, j = s !== !1 && d ? !0 : s, L = j || x ? Mo : a || "div", N = {
    ...r,
    component: L,
    disabled: u,
    size: y,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(p) && p.props.color || l,
    onDelete: !!x,
    clickable: j,
    variant: h
  }, $ = wR(N), z = L === Mo ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: $.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...T !== void 0 && {
      nativeButton: T
    }
  } : {};
  let B = null;
  x && (B = c && /* @__PURE__ */ m.isValidElement(c) ? /* @__PURE__ */ m.cloneElement(c, {
    className: ee(c.props.className, $.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ f.jsx(SR, {
    className: $.deleteIcon,
    onClick: g
  }));
  let W = null;
  o && /* @__PURE__ */ m.isValidElement(o) && (W = /* @__PURE__ */ m.cloneElement(o, {
    className: ee($.avatar, o.props.className)
  }));
  let _ = null;
  p && /* @__PURE__ */ m.isValidElement(p) && (_ = /* @__PURE__ */ m.cloneElement(p, {
    className: ee($.icon, p.props.className)
  }));
  const Q = {
    slots: E,
    slotProps: k
  }, [K, q] = he("root", {
    elementType: CR,
    externalForwardedProps: {
      ...Q,
      ...A
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: I,
    className: ee($.root, i),
    additionalProps: {
      disabled: j && u ? !0 : void 0,
      tabIndex: w && u ? -1 : S,
      ...z
    },
    getSlotProps: (U) => ({
      ...U,
      onClick: (J) => {
        var ie;
        (ie = U.onClick) == null || ie.call(U, J), d == null || d(J);
      },
      onKeyDown: (J) => {
        var ie;
        (ie = U.onKeyDown) == null || ie.call(U, J), M(J);
      },
      onKeyUp: (J) => {
        var ie;
        (ie = U.onKeyUp) == null || ie.call(U, J), P(J);
      }
    })
  }), [G, X] = he("label", {
    elementType: kR,
    externalForwardedProps: Q,
    ownerState: N,
    className: $.label
  });
  return /* @__PURE__ */ f.jsxs(K, {
    as: L,
    ...q,
    children: [W || _, /* @__PURE__ */ f.jsx(G, {
      ...X,
      children: v
    }), B]
  });
}), TR = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), ER = {
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
}, RR = {
  opacity: 0,
  visibility: "hidden"
}, M1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ar(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: u,
    onEnter: p,
    onEntered: v,
    onEntering: d,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: y,
    timeout: h = o,
    ...S
  } = t, w = dl(r.motion.reducedMotion, a), E = m.useRef(null), k = rt(E, no(l), n), R = Rt(E, d), T = Rt(E, (P, j) => {
    w.shouldReduceMotion || Xc(P);
    const L = Ti({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: L.duration,
      delay: L.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: L.easing,
      delay: N.delay
    }), p && p(P, j);
  }), A = Rt(E, v), O = Rt(E, C), I = Rt(E, (P) => {
    const j = Ti({
      style: y,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), L = w.getTransitionTiming({
      duration: j.duration,
      delay: j.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: j.easing,
      delay: L.delay
    }), x && x(P);
  }), g = Rt(E, (P) => {
    P.style.transition = "", b && b(P);
  }), M = i ? (P) => {
    i(E.current, P);
  } : void 0;
  return /* @__PURE__ */ f.jsx(Mp, {
    appear: s,
    in: u,
    nodeRef: E,
    onEnter: T,
    onEntered: A,
    onEntering: R,
    onExit: I,
    onExited: g,
    onExiting: O,
    addEndListener: M,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (P, {
      ownerState: j,
      ...L
    }) => {
      const N = c1(P, u, ER, RR, y, l.props.style);
      return /* @__PURE__ */ m.cloneElement(l, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
function PR(e) {
  return de("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const IR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return fe({
    root: ["root", n && "invisible"]
  }, PR, t);
}, MR = H("div", {
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
}), $1 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    transitionDuration: p,
    ...v
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, x = IR(d), b = {
    component: s,
    slots: u,
    slotProps: c
  }, [C, y] = he("root", {
    elementType: MR,
    externalForwardedProps: b,
    className: ee(x.root, i),
    ownerState: d
  }), [h, S] = he("transition", {
    elementType: M1,
    externalForwardedProps: b,
    ownerState: d
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
}), $R = ce("MuiBox", ["root"]), jR = Gc(), We = WC({
  themeId: rr,
  defaultTheme: jR,
  defaultClassName: $R.root,
  generateClassName: U0.generate
});
function AR(e) {
  return de("MuiButton", e);
}
const lo = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), OR = /* @__PURE__ */ m.createContext({}), LR = /* @__PURE__ */ m.createContext(void 0), NR = (e) => {
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
  }, u = fe(c, AR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...u
  };
}, j1 = [{
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
}], zR = H(Mo, {
  shouldForwardProp: (e) => on(e) || e === "classes",
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
    ...vt(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${lo.disabled}`]: {
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
        [`&.${lo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${lo.disabled}`]: {
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
        [`&.${lo.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Vt()).map(([r]) => ({
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
        [`&.${lo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${lo.disabled}`]: {
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
        ...vt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${lo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), DR = H("span", {
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
      ...vt(e, ["opacity"], {
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
  }, ...j1]
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
      ...vt(e, ["opacity"], {
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
  }, ...j1]
})), FR = H("span", {
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
})), ag = H("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Dt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = m.useContext(OR), o = m.useContext(LR), i = Gs(r, t), s = pe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: u,
    disabled: p = !1,
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
  } = s, O = kr(y), I = S ?? /* @__PURE__ */ f.jsx(ii, {
    "aria-labelledby": O,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: c,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: d,
    fullWidth: C,
    loading: h,
    loadingIndicator: I,
    loadingPosition: w,
    size: E,
    type: R,
    variant: T
  }, M = NR(g), P = (k || h && w === "start") && /* @__PURE__ */ f.jsx(DR, {
    className: M.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ f.jsx(ag, {
      className: M.loadingIconPlaceholder,
      ownerState: g
    })
  }), j = (x || h && w === "end") && /* @__PURE__ */ f.jsx(BR, {
    className: M.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ f.jsx(ag, {
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
      children: h && /* @__PURE__ */ f.jsx(FR, {
        className: M.loadingIndicator,
        ownerState: g,
        children: I
      })
    })
  ) : null, {
    root: $,
    ...z
  } = M;
  return /* @__PURE__ */ f.jsxs(zR, {
    ownerState: g,
    className: ee(r.className, M.root, u, L),
    component: c,
    disabled: p || h,
    focusRipple: !d,
    focusVisibleClassName: ee(M.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: h ? O : y,
    ...A,
    classes: z,
    children: [P, w !== "end" && N, l, w === "end" && N, j]
  });
});
function _R(e) {
  return de("MuiCard", e);
}
ce("MuiCard", ["root"]);
const WR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, _R, t);
}, UR = H(sr, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Zi = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, l = {
    ...r,
    raised: i
  }, a = WR(l);
  return /* @__PURE__ */ f.jsx(UR, {
    className: ee(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function HR(e) {
  return de("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const VR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, HR, t);
}, KR = H("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Ji = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = VR(l);
  return /* @__PURE__ */ f.jsx(KR, {
    as: i,
    className: ee(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function cg(e) {
  return e.substring(2).toLowerCase();
}
function YR(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function GR(e) {
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
  const u = rt(no(t), l), p = Ze((x) => {
    const b = c.current;
    c.current = !1;
    const C = mt(l.current);
    if (!a.current || !l.current || "clientX" in x && YR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    x.composedPath ? y = x.composedPath().includes(l.current) : y = !bo(C.documentElement, x.target) || bo(l.current, x.target), !y && (n || !b) && o(x);
  }), v = (x) => (b) => {
    c.current = !0;
    const C = t.props[x];
    C && C(b);
  }, d = {
    ref: u
  };
  return i !== !1 && (d[i] = v(i)), m.useEffect(() => {
    if (i !== !1) {
      const x = cg(i), b = mt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, p), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, p), b.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (d[r] = v(r)), m.useEffect(() => {
    if (r !== !1) {
      const x = cg(r), b = mt(l.current);
      return b.addEventListener(x, p), () => {
        b.removeEventListener(x, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ m.cloneElement(t, d);
}
function A1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function XR(e) {
  const t = mt(e);
  return e === t.body || e === t.documentElement ? mn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function bs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ug(e) {
  return parseFloat(mn(e).getComputedStyle(e).paddingRight) || 0;
}
function QR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function dg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !QR(s);
    l && a && bs(s, o);
  });
}
function qR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = mt(r).body;
    else {
      const s = r.parentElement, l = mn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (XR(i)) {
      const s = A1(mn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${ug(i) + s}px`;
      const l = mt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${ug(a) + s}px`;
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
function ZR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class JR {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && bs(t.modalRef, !1);
    const o = ZR(n);
    dg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = qR(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && bs(t.modalRef, n), dg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && bs(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Ka = "data-mui-focusable";
function fg(e) {
  return e ? e.hasAttribute(Ka) ? e : e.querySelector(`[${Ka}]`) : null;
}
const eP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function O1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function tP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function nP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || tP(e));
}
function rP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(eP)).forEach((r, o) => {
    const i = O1(r);
    i === -1 || !nP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function oP() {
  return !0;
}
function iP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = rP,
    isEnabled: s = oP,
    open: l
  } = e, a = m.useRef(!1), c = m.useRef(null), u = m.useRef(null), p = m.useRef(null), v = m.useRef(null), d = m.useRef(!1), x = m.useRef(null), b = rt(no(t), x), C = m.useRef(null);
  m.useEffect(() => {
    !l || !x.current || (d.current = !n);
  }, [n, l]), m.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = mt(x.current), w = Jn(S), E = fg(x.current) ?? x.current;
    return bo(x.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), d.current && E.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = mt(x.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = x.current, A = Jn(S);
      if (T === null)
        return;
      const O = fg(T);
      if (A === T || A === O) {
        const g = i(T);
        if (g.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (bo(T, A)) {
        const g = i(T), M = g.indexOf(A);
        if (M === -1 || !g.some((L) => O1(L) > 0))
          return;
        R.preventDefault();
        let j = 0;
        R.shiftKey ? j = M <= 0 ? g.length - 1 : M - 1 : j = M === g.length - 1 ? 0 : M + 1, g[j].focus();
      }
    }, E = () => {
      var O, I;
      const R = x.current;
      if (R === null)
        return;
      const T = Jn(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (bo(R, T) || r && T !== c.current && T !== u.current)
        return;
      if (T !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!d.current)
        return;
      let A = [];
      if ((T === c.current || T === u.current) && (A = i(x.current)), A.length > 0) {
        const g = !!((O = C.current) != null && O.shiftKey && ((I = C.current) == null ? void 0 : I.key) === "Tab"), M = A[0], P = A[A.length - 1];
        typeof M != "string" && typeof P != "string" && (g ? P.focus() : M.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = Jn(S);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", E), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const y = (S) => {
    p.current === null && (p.current = S.relatedTarget), d.current = !0, v.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    p.current === null && (p.current = S.relatedTarget), d.current = !0;
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
      ref: u,
      "data-testid": "sentinelEnd"
    })]
  });
}
function sP(e) {
  return typeof e == "function" ? e() : e;
}
function lP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const pg = () => {
}, Fl = new JR();
function aP(e) {
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
  } = e, u = m.useRef({}), p = m.useRef(null), v = m.useRef(null), d = m.useRef(null), x = rt(d, c), [b, C] = m.useState(!a), y = lP(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => mt(p.current), w = () => (u.current.modalRef = d.current, u.current.mount = p.current, u.current), E = () => {
    Fl.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = Ze(() => {
    const L = sP(t) || S().body;
    Fl.add(w(), L), d.current && E();
  }), R = () => Fl.isTopModal(w()), T = Ze((L) => {
    p.current = L, L && (v.current = L, a && R() ? E() : d.current && bs(d.current, h));
  }), A = m.useCallback(() => {
    Fl.remove(w(), h);
  }, [h]);
  m.useEffect(() => () => {
    A();
  }, [A]), m.useEffect(() => {
    a ? k() : (!y || !r) && A();
  }, [a, A, y, r, k]);
  const O = (L) => (N) => {
    var $;
    ($ = L.onKeyDown) == null || $.call(L, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !R()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, I = (L) => (N) => {
    var $;
    ($ = L.onClick) == null || $.call(L, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, g = (L = {}) => {
    const N = Wa(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const $ = {
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
      ...$,
      onKeyDown: O($),
      ref: x
    };
  }, M = (L = {}) => {
    const N = L;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: I(N),
      open: a
    };
  }, P = () => {
    const L = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), i && i(), r && A();
    };
    return {
      onEnter: _h(L, (s == null ? void 0 : s.props.onEnter) ?? pg),
      onExited: _h(N, (s == null ? void 0 : s.props.onExited) ?? pg)
    };
  }, j = !a && y && !b ? v.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: M,
    getTransitionProps: P,
    rootRef: x,
    portalRef: T,
    portalContainer: j,
    isTopModal: R,
    exited: b,
    hasTransition: y
  };
}
function cP(e) {
  return de("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const uP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return fe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, cP, r);
}, dP = H("div", {
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
}))), fP = H($1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Dp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disableEnforceFocus: p = !1,
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
    disableAutoFocus: u,
    disableEnforceFocus: p,
    disablePortal: v,
    disableRestoreFocus: d,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: O,
    getBackdropProps: I,
    getTransitionProps: g,
    portalRef: M,
    portalContainer: P,
    isTopModal: j,
    exited: L,
    hasTransition: N
  } = aP({
    ...A,
    rootRef: n
  }), $ = {
    ...A,
    exited: L
  }, z = uP($), B = {};
  if (l.props.tabIndex === void 0 && (B.tabIndex = "-1"), N) {
    const {
      onEnter: G,
      onExited: X
    } = g();
    B.onEnter = G, B.onExited = X;
  }
  const W = {
    slots: k,
    slotProps: E
  }, [_, Q] = he("root", {
    ref: n,
    elementType: dP,
    externalForwardedProps: {
      ...W,
      ...T,
      component: c
    },
    getSlotProps: O,
    ownerState: $,
    className: ee(i, z == null ? void 0 : z.root, !$.open && $.exited && (z == null ? void 0 : z.hidden))
  }), [K, q] = he("backdrop", {
    elementType: fP,
    externalForwardedProps: W,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => I({
      ...G,
      onClick: (X) => {
        G != null && G.onClick && G.onClick(X);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: $
  });
  return !C && !w && (!N || L) ? null : /* @__PURE__ */ f.jsx(R1, {
    ref: M,
    container: P,
    disablePortal: v,
    children: /* @__PURE__ */ f.jsxs(_, {
      ...Q,
      children: [b ? null : /* @__PURE__ */ f.jsx(K, {
        ...q
      }), /* @__PURE__ */ f.jsx(iP, {
        disableEnforceFocus: p,
        disableAutoFocus: u,
        disableRestoreFocus: d,
        isEnabled: j,
        open: w,
        children: /* @__PURE__ */ m.cloneElement(l, B)
      })]
    })
  });
});
function pP(e) {
  return de("MuiDialog", e);
}
ce("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const L1 = /* @__PURE__ */ m.createContext({}), mP = H($1, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), hP = (e) => {
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
  return fe(s, pP, t);
}, gP = H(Dp, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), yP = H("div", {
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
}), vP = H(sr, {
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
}))), mg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialog"
  }), o = ar(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: u,
    fullScreen: p = !1,
    fullWidth: v = !1,
    maxWidth: d = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: y = sr,
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
    maxWidth: d,
    scroll: S
  }, A = hP(T), O = m.useRef(), I = (G) => {
    O.current = G.target === G.currentTarget;
  }, g = (G) => {
    x && x(G), O.current && (O.current = null, b && b(G, "backdropClick"));
  }, M = kr(l), P = m.useMemo(() => ({
    titleId: M
  }), [M]), j = {
    slots: w,
    slotProps: E
  }, [L, N] = he("root", {
    elementType: gP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: ee(A.root, u),
    ref: n
  }), [$, z] = he("backdrop", {
    elementType: mP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: A.backdrop
  }), [B, W] = he("paper", {
    elementType: vP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: T,
    className: A.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": M,
      "aria-modal": a,
      tabIndex: -1,
      [Ka]: ""
    }
  }), [_, Q] = he("container", {
    elementType: yP,
    externalForwardedProps: j,
    ownerState: T,
    className: A.container
  }), [K, q] = he("transition", {
    elementType: M1,
    externalForwardedProps: j,
    ownerState: T,
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
      backdrop: $
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
    ...R,
    children: /* @__PURE__ */ f.jsx(K, {
      ...q,
      children: /* @__PURE__ */ f.jsx(_, {
        onMouseDown: I,
        ...Q,
        children: /* @__PURE__ */ f.jsx(B, {
          as: y,
          ...W,
          children: /* @__PURE__ */ f.jsx(L1.Provider, {
            value: P,
            children: c
          })
        })
      })
    })
  });
});
function xP(e) {
  return de("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const SP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return fe({
    root: ["root", !n && "spacing"]
  }, xP, t);
}, bP = H("div", {
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
}), hg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = SP(l);
  return /* @__PURE__ */ f.jsx(bP, {
    className: ee(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function wP(e) {
  return de("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function CP(e) {
  return de("MuiDialogTitle", e);
}
const kP = ce("MuiDialogTitle", ["root"]), TP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return fe({
    root: ["root", n && "dividers"]
  }, wP, t);
}, EP = H("div", {
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
      [`.${kP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), gg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = TP(l);
  return /* @__PURE__ */ f.jsx(EP, {
    className: ee(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), RP = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, CP, t);
}, PP = H(Re, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), yg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = RP(l), {
    titleId: c = i
  } = m.useContext(L1);
  return /* @__PURE__ */ f.jsx(PP, {
    component: "h2",
    className: ee(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
});
function IP(e) {
  return de("MuiDivider", e);
}
const vg = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), MP = (e) => {
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
  }, IP, r);
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
}))), jP = H("span", {
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
}))), AP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: o = !1,
    children: i,
    className: s,
    orientation: l = "horizontal",
    component: a = i || l === "vertical" ? "div" : "hr",
    flexItem: c = !1,
    role: u = a !== "hr" ? "separator" : void 0,
    textAlign: p = "center",
    variant: v = "fullWidth",
    ...d
  } = r, x = {
    ...r,
    absolute: o,
    component: a,
    flexItem: c,
    orientation: l,
    role: u,
    textAlign: p,
    variant: v
  }, b = MP(x);
  return /* @__PURE__ */ f.jsx($P, {
    as: a,
    className: ee(b.root, s),
    role: u,
    ref: n,
    ownerState: x,
    "aria-orientation": u === "separator" && (a !== "hr" || l === "vertical") ? l : void 0,
    ...d,
    children: i ? /* @__PURE__ */ f.jsx(jP, {
      className: b.wrapper,
      ownerState: x,
      children: i
    }) : null
  });
}), OP = {
  visibility: "hidden"
}, LP = {};
function NP(e) {
  return typeof e == "string" && /^translate\(.+,\s*.+\)$/.test(e);
}
function zP(e, t, n, r = LP) {
  const {
    resetInlineTransform: o = !0
  } = r, i = n && n.getBoundingClientRect(), s = mn(t);
  let l, a;
  if (o) {
    const p = t.style.transform, v = t.style.transition;
    t.style.transition = "", t.style.transform = "", l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform"), t.style.transform = p, t.style.transition = v;
  } else
    l = t.getBoundingClientRect(), a = s.getComputedStyle(t).getPropertyValue("transform");
  const {
    offsetX: c,
    offsetY: u
  } = jk(a);
  return e === "left" ? i ? `translateX(${i.right + c - l.left}px)` : `translateX(${s.innerWidth + c - l.left}px)` : e === "right" ? i ? `translateX(-${l.right - i.left - c}px)` : `translateX(-${l.left + l.width - c}px)` : e === "up" ? i ? `translateY(${i.bottom + u - l.top}px)` : `translateY(${s.innerHeight + u - l.top}px)` : i ? `translateY(-${l.top - i.top + l.height - u}px)` : `translateY(-${l.top + l.height - u}px)`;
}
function DP(e) {
  return typeof e == "function" ? e() : e;
}
function _l(e, t, n, r) {
  const o = DP(n), i = zP(e, t, o, r);
  i && (t.style.transform = i);
}
const xg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = ar(), o = {
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
    disablePrefersReducedMotion: u = !1,
    direction: p = "down",
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
  } = t, R = dl(r.motion.reducedMotion, u), T = m.useRef(null), A = m.useRef(!1), O = rt(no(a), T, n), I = Rt(T, (z, B) => {
    _l(p, z, c), R.shouldReduceMotion || Xc(z), x && x(z, B);
  }), g = Rt(T, (z, B) => {
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
    }), z.style.transform = "none", C && C(z, B);
  }), M = Rt(T, b), P = Rt(T, S), j = Rt(T, (z) => {
    const B = Ti({
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
    const _ = NP(z.style.transform);
    A.current = _, _l(p, z, c, {
      resetInlineTransform: !_
    }), y && y(z);
  }), L = Rt(T, (z) => {
    A.current = !1, z.style.transition = "", h && h(z);
  }), N = s ? (z) => {
    s(T.current, z);
  } : void 0, $ = m.useCallback(() => {
    T.current && _l(p, T.current, c);
  }, [p, c]);
  return m.useEffect(() => {
    if (d || p === "down" || p === "right")
      return;
    const z = cl(() => {
      T.current && _l(p, T.current, c);
    }), B = mn(T.current);
    return B.addEventListener("resize", z), () => {
      z.clear(), B.removeEventListener("resize", z);
    };
  }, [p, d, c]), m.useEffect(() => {
    !d && !A.current && $();
  }, [d, $]), /* @__PURE__ */ f.jsx(Mp, {
    nodeRef: T,
    onEnter: I,
    onEntered: M,
    onEntering: g,
    onExit: j,
    onExited: L,
    onExiting: P,
    addEndListener: N,
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
      } : OP : w && a.props.style ? _ = {
        ...w,
        ...a.props.style
      } : _ = w || a.props.style, /* @__PURE__ */ m.cloneElement(a, {
        ref: O,
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
}, FP = (e) => {
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
}, _P = H(Dp, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: N1
})(xe(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
}))), WP = H("div", {
  shouldForwardProp: on,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: N1
})({
  flex: "0 0 auto"
}), UP = H(sr, {
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
}))), z1 = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function HP(e) {
  return ["left", "right"].includes(e);
}
function VP({
  direction: e
}, t) {
  return e === "rtl" && HP(t) ? z1[t] : t;
}
const KP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDrawer"
  }), o = ar(), i = al(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    children: a,
    className: c,
    elevation: u = 16,
    hideBackdrop: p = !1,
    ModalProps: v = {},
    onClose: d,
    open: x = !1,
    transitionDuration: b = s,
    variant: C = "temporary",
    slots: y = {},
    slotProps: h = {},
    ...S
  } = r, w = m.useRef(!1), E = m.useRef(null), k = rt(n, E);
  m.useEffect(() => {
    w.current = !0;
  }, []);
  const R = m.useCallback(() => E.current, []), T = VP({
    direction: i ? "rtl" : "ltr"
  }, l), O = {
    ...r,
    anchor: l,
    elevation: u,
    open: x,
    variant: C,
    ...S
  }, I = FP(O), g = {
    slots: y,
    slotProps: {
      ...h,
      backdrop: d1(h.backdrop, {
        transitionDuration: b
      })
    }
  }, [M, P] = he("root", {
    ref: k,
    elementType: _P,
    className: ee(I.root, I.modal, c),
    shouldForwardComponentProp: !0,
    ownerState: O,
    externalForwardedProps: {
      ...g,
      ...S,
      ...v
    },
    additionalProps: {
      closeAfterTransition: !0,
      open: x,
      onClose: d,
      hideBackdrop: p,
      slots: {
        backdrop: g.slots.backdrop
      },
      slotProps: {
        backdrop: g.slotProps.backdrop
      }
    }
  }), [j, L] = he("paper", {
    elementType: UP,
    shouldForwardComponentProp: !0,
    className: I.paper,
    ownerState: O,
    externalForwardedProps: g,
    additionalProps: {
      elevation: C === "temporary" ? u : 0,
      square: !0,
      ...C === "temporary" && {
        role: "dialog",
        "aria-modal": "true",
        [Ka]: "",
        tabIndex: -1
      }
    }
  }), [N, $] = he("docked", {
    elementType: WP,
    ref: k,
    className: ee(I.root, I.docked, c),
    ownerState: O,
    externalForwardedProps: g,
    additionalProps: S
    // pass `other` here because `DockedSlot` is also a root slot for some variants
  }), [z, B] = he("transition", {
    elementType: xg,
    ownerState: O,
    externalForwardedProps: g,
    additionalProps: {
      in: x,
      direction: z1[T],
      timeout: b,
      appear: w.current,
      ...C === "temporary" && (y.transition == null || y.transition === xg) && {
        container: R
      }
    }
  }), W = /* @__PURE__ */ f.jsx(j, {
    ...L,
    children: a
  });
  if (C === "permanent")
    return /* @__PURE__ */ f.jsx(N, {
      ...$,
      children: W
    });
  const _ = /* @__PURE__ */ f.jsx(z, {
    ...B,
    children: W
  });
  return C === "persistent" ? /* @__PURE__ */ f.jsx(N, {
    ...$,
    children: _
  }) : /* @__PURE__ */ f.jsx(M, {
    ...P,
    children: _
  });
});
function D1(e) {
  return de("MuiSelect", e);
}
const mo = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), YP = (e) => {
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
  }, c = fe(a, Ok, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, GP = H(Zc, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qc(e, t), !n.disableUnderline && t.underline];
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
    ...vt(e, "background-color", {
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
    [`&.${so.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${so.disabled}`]: {
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
          ...vt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${so.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${so.error}`]: {
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
          ...vt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${so.disabled}, .${so.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${so.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Vt()).map(([s]) => {
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
        [`&.${mo.root}`]: {
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
})), XP = H(Jc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: qc
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
}))), Bp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
  }, b = YP(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, y = u ? Ot(C, u) : C, h = p.root ?? GP, S = p.input ?? XP;
  return /* @__PURE__ */ f.jsx(Rp, {
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
Bp.muiName = "Input";
function QP(e) {
  return de("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const qP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${se(n)}`, r && "fullWidth"]
  };
  return fe(o, QP, t);
}, ZP = H("div", {
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
}), JP = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    fullWidth: p = !1,
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
    fullWidth: p,
    hiddenLabel: v,
    margin: d,
    required: x,
    size: b,
    variant: C
  }, S = qP(h), [w, E] = m.useState(() => {
    let j = !1;
    return o && m.Children.forEach(o, (L) => {
      if (!Bu(L, ["Input", "Select"]))
        return;
      const N = Bu(L, ["Select"]) ? L.props.input : L;
      N && Ck(N.props) && (j = !0);
    }), j;
  }), [k, R] = m.useState(() => {
    let j = !1;
    return o && m.Children.forEach(o, (L) => {
      Bu(L, ["Input", "Select"]) && (Fa(L.props, !0) || Fa(L.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [T, A] = m.useState(!1);
  a && T && A(!1);
  const O = u !== void 0 && !a ? u : T;
  let I;
  m.useRef(!1);
  const g = m.useCallback(() => {
    R(!0);
  }, []), M = m.useCallback(() => {
    R(!1);
  }, []), P = m.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: O,
    fullWidth: p,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: M,
    onFilled: g,
    registerEffect: I,
    required: x,
    variant: C
  }), [w, s, a, c, k, O, p, v, I, M, g, x, b, C]);
  return /* @__PURE__ */ f.jsx(ul.Provider, {
    value: P,
    children: /* @__PURE__ */ f.jsx(ZP, {
      as: l,
      ownerState: h,
      className: ee(S.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
});
var Sg;
const eI = (e) => {
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
}, tI = H("p", {
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
  [`&.${Fh.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Fh.error}`]: {
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
}))), nI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    margin: p,
    required: v,
    variant: d,
    ...x
  } = r, [b] = Li({
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
  const y = eI(C);
  return /* @__PURE__ */ f.jsx(tI, {
    as: s,
    className: ee(y.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Sg || (Sg = /* @__PURE__ */ f.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), rI = (e) => {
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
}, oI = H("label", {
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
  variants: [...Object.entries(e.palette).filter(Vt()).map(([t]) => ({
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
}))), iI = H("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(xe(({
  theme: e
}) => ({
  [`&.${vs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), sI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    focused: p,
    required: v,
    ...d
  } = r, [x] = Li({
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
  }, C = rI(b);
  return /* @__PURE__ */ f.jsxs(oI, {
    as: l,
    ownerState: b,
    className: ee(C.root, i),
    ref: n,
    ...d,
    children: [o, x.required && /* @__PURE__ */ f.jsxs(iI, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function ws(e) {
  return `scale(${e}, ${e ** 2})`;
}
const lI = {
  entering: {
    opacity: 1,
    transform: ws(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: ws(0.75)
  },
  exited: {
    opacity: 0,
    transform: ws(0.75)
  }
}, aI = {
  opacity: 0,
  transform: ws(0.75),
  visibility: "hidden"
}, qs = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: u,
    onEntering: p,
    onExit: v,
    onExited: d,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...y
  } = t, h = m.useRef(null), S = ar(), w = dl(S.motion.reducedMotion, s), E = m.useRef(null), k = rt(E, no(i), n), R = Rt(E, p), T = Rt(E, (P, j) => {
    w.shouldReduceMotion || Xc(P);
    const {
      duration: L,
      delay: N,
      easing: $
    } = Ti({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = z) : (z = L, h.current = null);
    const B = w.getTransitionTiming({
      duration: z,
      delay: N
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay,
      easing: $
    })].join(","), c && c(P, j);
  }), A = Rt(E, u), O = Rt(E, x), I = Rt(E, (P) => {
    const {
      duration: j,
      delay: L,
      easing: N
    } = Ti({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let $;
    C === "auto" && !w.shouldReduceMotion ? ($ = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = $) : ($ = j, h.current = null);
    const z = w.getTransitionTiming({
      duration: $,
      delay: L
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), S.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), P.style.opacity = 0, P.style.transform = ws(0.75), v && v(P);
  }), g = Rt(E, (P) => {
    P.style.transition = "", d && d(P);
  }), M = r ? (P) => {
    r(E.current, P);
  } : void 0;
  return /* @__PURE__ */ f.jsx(Mp, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: T,
    onEntered: A,
    onEntering: R,
    onExit: I,
    onExited: g,
    onExiting: O,
    addEndListener: M,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...y,
    children: (P, {
      ownerState: j,
      ...L
    }) => {
      const N = c1(P, a, lI, aI, b, i.props.style);
      return /* @__PURE__ */ m.cloneElement(i, {
        style: N,
        ref: k,
        ...L
      });
    }
  });
});
qs && (qs.muiSupportAuto = !0);
function cI(e) {
  return de("MuiInputLabel", e);
}
const uI = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), dI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, zk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, fI = H(Zc, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Qc(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${uI.root} + &`]: {
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
          ...vt(e, "transform", {
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
          ...vt(e, "border-bottom-color", {
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
    }, ...Object.entries(e.palette).filter(Vt()).map(([r]) => ({
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
})), pI = H(Jc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: qc
})({}), Fp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    type: p = "text",
    ...v
  } = r, d = dI(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Ot(c, b) : b, y = u.root ?? fI, h = u.input ?? pI;
  return /* @__PURE__ */ f.jsx(Rp, {
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
    classes: d
  });
});
Fp.muiName = "Input";
function mI(e) {
  return de("MuiInputAdornment", e);
}
const si = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var bg;
const hI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${se(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, gI = (e) => {
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
  return fe(l, mI, t);
}, yI = H("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: hI
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
}))), vI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    ...p
  } = r, v = Sk() || {};
  let d = u;
  u && v.variant, v && !d && (d = v.variant);
  const x = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: d
  }, b = gI(x);
  return /* @__PURE__ */ f.jsx(ul.Provider, {
    value: null,
    children: /* @__PURE__ */ f.jsx(yI, {
      as: s,
      ownerState: x,
      className: ee(b.root, i),
      ref: n,
      ...p,
      children: typeof o == "string" && !a ? /* @__PURE__ */ f.jsx(Re, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ f.jsxs(m.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          bg || (bg = /* @__PURE__ */ f.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), xI = (e) => {
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
  }, c = fe(a, cI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, SI = H(sI, {
  shouldForwardProp: (e) => on(e) || e === "classes",
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
      ...vt(e, ["color", "transform", "max-width"], {
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
}))), bI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...c
  } = r, [u, p] = Li({
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
    size: u.size,
    variant: u.variant,
    required: u.required,
    focused: u.focused
  }, x = xI(d);
  return /* @__PURE__ */ f.jsx(SI, {
    "data-shrink": v,
    ref: n,
    className: ee(x.root, a),
    ...c,
    ownerState: d,
    classes: x
  });
}), of = /* @__PURE__ */ m.createContext({});
function wI(e) {
  return de("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const CI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return fe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, wI, t);
}, kI = H("ul", {
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
}), TI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
  } = r, p = m.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = CI(v);
  return /* @__PURE__ */ f.jsx(of.Provider, {
    value: p,
    children: /* @__PURE__ */ f.jsxs(kI, {
      as: s,
      className: ee(d.root, i),
      ref: n,
      ownerState: v,
      ...u,
      children: [c, o]
    })
  });
}), wg = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Cg = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), _p = /* @__PURE__ */ m.createContext(void 0);
function B1() {
  const e = m.useContext(_p);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const EI = Object.is;
function RI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !EI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const PI = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function F1(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Cs,
    wrap: s = !0
  } = e, [l, a] = m.useState(t), [c, u] = m.useState(t);
  let p = l;
  t !== c && (u(t), t !== void 0 && t !== l && (p = t, a(t)));
  const v = m.useRef(null), d = m.useRef(/* @__PURE__ */ new Map()), [x, b] = m.useState(0), C = m.useMemo(() => sf(d.current), [x]), y = kg(p, C, i, n), h = m.useRef(y);
  h.current = y;
  const S = m.useCallback(() => {
    const g = sf(d.current), M = kg(h.current, g, i, n);
    return H1(g, M);
  }, [n, i]), w = m.useCallback(() => d.current, []), E = Ze((g) => {
    const M = d.current.get(g.id);
    RI(M ?? null, g) || (d.current.set(g.id, g), b((P) => P + 1));
  }), k = Ze((g) => {
    d.current.delete(g) && b((M) => M + 1);
  }), R = Ze((g) => {
    a(g);
  }), T = m.useCallback((g) => h.current === g, []), A = m.useCallback((g, M, P, j) => {
    var $;
    const L = Wl(d.current), N = W1(L, g, M, P, j ?? i);
    return N ? (($ = N.element) == null || $.focus(), a(N.id), N) : null;
  }, [i]), O = m.useCallback((g, M, P) => ({
    onFocus: (N) => {
      M == null || M(N);
      const $ = Wl(d.current), z = K1($, N.target);
      z !== -1 && a($[z].id);
    },
    onKeyDown: (N) => {
      if (P == null || P(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !PI.includes(N.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", z = "ArrowLeft");
      const B = Wl(d.current), W = Jn(mt(v.current)), _ = W === v.current;
      let Q = Tg(B, W, h.current), K = "next";
      switch (N.key) {
        case $:
          K = "previous", N.preventDefault(), _ && (Q = B.length);
          break;
        case z:
          N.preventDefault(), _ && (Q = -1);
          break;
        case "Home":
          N.preventDefault(), Q = -1;
          break;
        case "End":
          N.preventDefault(), K = "previous", Q = B.length;
          break;
        default:
          return;
      }
      A(Q, K, s);
    },
    ref: jI(g, (N) => {
      v.current = N;
    })
  }), [A, o, r, s]), I = m.useCallback((g) => {
    var N;
    const M = Wl(d.current), P = Jn(mt(v.current)), L = P === v.current ? -1 : Tg(M, P, h.current);
    return ((N = A(L, "next", !0, g)) == null ? void 0 : N.id) ?? null;
  }, [A]);
  return m.useMemo(() => ({
    activeItemId: y,
    focusNext: I,
    getActiveItem: S,
    getContainerProps: O,
    getItemMap: w,
    isItemActive: T,
    registerItem: E,
    setActiveItemId: R,
    unregisterItem: k
  }), [y, I, S, O, w, T, E, R, k]);
}
function _1(e) {
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
  const a = m.useCallback((u) => {
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
  }, [e.id, r, o]), c = rt(e.ref, a);
  return ut(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ut(() => {
    const u = e.id;
    return () => {
      o(u);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function kg(e, t, n, r) {
  return e != null ? II(e, t, n) : MI(t, n, r);
}
function II(e, t, n) {
  var o;
  const r = V1(t, e);
  return r === -1 ? U1(t, n) : n(t[r]) ? t[r].id : ((o = W1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function MI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = H1(e, r);
    if (o && t(o))
      return o.id;
  }
  return U1(e, t);
}
function Tg(e, t, n) {
  if (t) {
    const r = K1(e, t);
    if (r !== -1)
      return r;
  }
  return V1(e, n);
}
function W1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Eg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = Eg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function U1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function H1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function V1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function K1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function sf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(lf).sort((o, i) => $I(o.element, i.element)), r = t.filter((o) => !lf(o));
  return [...n, ...r];
}
function Wl(e) {
  return sf(e).filter(lf);
}
function Eg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Cs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function lf(e) {
  return e.element != null && e.element.isConnected;
}
function $I(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function jI(...e) {
  return (t) => {
    e.forEach((n) => {
      qd(n ?? null, t);
    });
  };
}
function Y1(e, t) {
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
function AI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function OI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function ua(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const G1 = /* @__PURE__ */ m.createContext(null);
function X1() {
  return m.useContext(G1);
}
const LI = G1.Provider, Q1 = /* @__PURE__ */ m.createContext(void 0);
function NI() {
  const e = m.useContext(Q1);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function zI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function q1(e, t) {
  if (t === void 0)
    return !0;
  let n = zI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function DI(e, t) {
  return q1(e, t) ? Cs(e) : !1;
}
function BI(e, t) {
  Y1(e, t);
}
const FI = /* @__PURE__ */ m.forwardRef(function(t, n) {
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
    variant: p = "selectedMenu",
    ...v
  } = t, d = m.useRef(null), x = m.useRef(!1), [b, C] = m.useState(!1), y = X1(), h = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = m.useCallback((j) => {
    var L, N, $;
    return p === "selectedMenu" ? ((L = j.find((z) => z.selected && Cs(z))) == null ? void 0 : L.id) ?? ((N = j.find((z) => Cs(z))) == null ? void 0 : N.id) ?? null : (($ = j.find((z) => Cs(z))) == null ? void 0 : $.id) ?? null;
  }, [p]), w = F1({
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
  } = w, O = Ze((j = !1) => {
    if (!d.current || !j && x.current)
      return null;
    if (i) {
      const L = R();
      if (L != null && L.element) {
        const N = Array.from(A().values()).some((z) => z.selected), $ = p === "menu" && N && !L.selected && y == null;
        return C($), BI(L.element, y), x.current = !0, L.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), x.current = !0, d.current) : (C(!1), null);
  });
  ut(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    O();
  }, [E, i, o, O]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (j, {
      direction: L
    }) => {
      const N = !d.current.style.width;
      if (j.clientHeight < d.current.clientHeight && N) {
        const $ = `${A1(mn(j))}px`;
        d.current.style[L === "rtl" ? "paddingLeft" : "paddingRight"] = $, d.current.style.width = `calc(100% + ${$})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const j = Jn(mt(d.current));
      return j && bo(d.current, j) ? j : O(!0);
    }
  }), [O]);
  const I = T(void 0, v.onFocus), g = rt(d, I.ref, n), M = m.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: p
  }), [a, b, p]), P = Ze((j) => {
    if (b && C(!1), (j.ctrlKey || j.metaKey || j.altKey) && u) {
      u(j);
      return;
    }
    if (I.onKeyDown(j), j.key.length === 1) {
      const N = h.current, $ = j.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && $ !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push($);
      const B = Jn(mt(d.current)), W = B && !N.repeating && q1(B, N);
      N.previousKeyMatched && (W || k((_) => DI(_, N)) != null) ? j.preventDefault() : N.previousKeyMatched = !1;
    }
    u && u(j);
  });
  return /* @__PURE__ */ f.jsx(TI, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...v,
    onFocus: I.onFocus,
    children: /* @__PURE__ */ f.jsx(Q1.Provider, {
      value: M,
      children: /* @__PURE__ */ f.jsx(_p.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function _I(e) {
  return de("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function Rg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Pg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ig(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ul(e) {
  return typeof e == "function" ? e() : e;
}
const WI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"]
  }, _I, t);
}, UI = H(Dp, {
  name: "MuiPopover",
  slot: "Root"
})({}), Z1 = H(sr, {
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
}), HI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    container: p,
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
  } = r, k = m.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: x,
    transformOrigin: h,
    transitionDuration: S
  }, T = WI(R), A = m.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const U = Ul(i), ie = (U && U.nodeType === 1 ? U : mt(k.current).body).getBoundingClientRect();
    return {
      top: ie.top + Rg(ie, s.vertical),
      left: ie.left + Pg(ie, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), O = m.useCallback((U) => ({
    vertical: Rg(U, h.vertical),
    horizontal: Pg(U, h.horizontal)
  }), [h.horizontal, h.vertical]), I = m.useCallback((U) => {
    const J = {
      width: U.offsetWidth,
      height: U.offsetHeight
    }, ie = O(J);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ig(ie)
      };
    const Ce = A();
    let Te = Ce.top - ie.vertical, ge = Ce.left - ie.horizontal;
    const ae = Te + J.height, Le = ge + J.width, Ue = mn(Ul(i)), we = Ue.innerHeight - x, $e = Ue.innerWidth - x;
    if (x != null && Te < x) {
      const ue = Te - x;
      Te -= ue, ie.vertical += ue;
    } else if (x != null && ae > we) {
      const ue = ae - we;
      Te -= ue, ie.vertical += ue;
    }
    if (x != null && ge < x) {
      const ue = ge - x;
      ge -= ue, ie.horizontal += ue;
    } else if (Le > $e) {
      const ue = Le - $e;
      ge -= ue, ie.horizontal += ue;
    }
    return {
      top: `${Math.round(Te)}px`,
      left: `${Math.round(ge)}px`,
      transformOrigin: Ig(ie)
    };
  }, [i, a, A, O, x]), [g, M] = m.useState(b), P = m.useCallback(() => {
    const U = k.current;
    if (!U)
      return;
    const J = I(U);
    J.top != null && U.style.setProperty("top", J.top), J.left != null && (U.style.left = J.left), U.style.transformOrigin = J.transformOrigin, M(!0);
  }, [I]);
  m.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const j = () => {
    P();
  }, L = () => {
    M(!1);
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
    const U = cl(() => {
      P();
    }), J = mn(Ul(i));
    return J.addEventListener("resize", U), () => {
      U.clear(), J.removeEventListener("resize", U);
    };
  }, [i, b, P]);
  let N = S;
  const $ = {
    slots: C,
    slotProps: y
  }, [z, B] = he("transition", {
    elementType: qs,
    externalForwardedProps: $,
    ownerState: R,
    getSlotProps: (U) => ({
      ...U,
      onEntering: (J, ie) => {
        var Ce;
        (Ce = U.onEntering) == null || Ce.call(U, J, ie), j();
      },
      onExited: (J) => {
        var ie;
        (ie = U.onExited) == null || ie.call(U, J), L();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (N = void 0);
  const W = p || (i ? mt(Ul(i)).body : void 0), [_, {
    slots: Q,
    slotProps: K,
    ...q
  }] = he("root", {
    ref: n,
    elementType: UI,
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
        backdrop: d1(typeof y.backdrop == "function" ? y.backdrop(R) : y.backdrop, {
          invisible: !0
        })
      },
      container: W,
      open: b
    },
    ownerState: R,
    className: ee(T.root, u)
  }), [G, X] = he("paper", {
    ref: k,
    className: T.paper,
    elementType: Z1,
    externalForwardedProps: $,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ f.jsx(_, {
    ...q,
    ...!Ba(_) && {
      slots: Q,
      slotProps: K,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ f.jsx(z, {
      ...B,
      timeout: N,
      children: /* @__PURE__ */ f.jsx(G, {
        ...X,
        children: c
      })
    })
  });
});
function VI(e) {
  return de("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const KI = {
  vertical: "top",
  horizontal: "right"
}, YI = {
  vertical: "top",
  horizontal: "left"
}, GI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, VI, t);
}, XI = H(HI, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), QI = H(Z1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), qI = H(FI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ZI = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    transitionDuration: p = "auto",
    variant: v = "selectedMenu",
    slots: d = {},
    slotProps: x = {},
    ...b
  } = r, C = al(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: v
  }, h = GI(y), S = o && c, w = S && !l, E = m.useRef(null), k = (j, L) => {
    var N, $;
    E.current && (E.current.adjustStyleForScrollbar(j, {
      direction: C ? "rtl" : "ltr"
    }), S && (($ = (N = E.current).focusInitialTarget) == null || $.call(N)));
  }, R = (j) => {
    j.key === "Tab" && (j.preventDefault(), a && a(j, "tabKeyDown"));
  }, T = {
    slots: d,
    slotProps: x
  }, A = Mi({
    elementType: d.root,
    externalSlotProps: x.root,
    ownerState: y,
    className: [h.root, s]
  }), [O, I] = he("paper", {
    className: h.paper,
    elementType: QI,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [g, M] = he("list", {
    className: h.list,
    elementType: qI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: (j) => ({
      ...j,
      onKeyDown: (L) => {
        var N;
        R(L), (N = j.onKeyDown) == null || N.call(j, L);
      }
    }),
    ownerState: y
  }), P = typeof x.transition == "function" ? x.transition(y) : x.transition;
  return /* @__PURE__ */ f.jsx(
    XI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? KI : YI,
      slots: {
        root: d.root,
        paper: O,
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
            var L;
            k(...j), (L = P == null ? void 0 : P.onEntering) == null || L.call(P, ...j);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: p,
      ownerState: y,
      ...b,
      classes: u,
      children: /* @__PURE__ */ f.jsx(g, {
        actions: E,
        autoFocus: S,
        autoFocusItem: w,
        variant: v,
        ...M,
        children: i
      })
    }
  );
}), JI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, eM = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = fe({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, Dk, s);
  return {
    ...s,
    ...a
  };
}, tM = H(Mo, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: JI
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
  [`& + .${vg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${vg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Cg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Cg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${wg.root}`]: {
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
      [`& .${wg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Mr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    tabIndex: p,
    className: v,
    ...d
  } = r, b = u === "menuitemcheckbox" || u === "menuitemradio" ? !!r.selected : void 0, C = X1(), y = m.useContext(of), h = m.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: a
  }), [y.dense, s, a]), S = NI(), w = kr(), E = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, R = m.useRef(null);
  ut(() => {
    o && R.current && Y1(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, A = eM(r), {
    root: O,
    ...I
  } = A, g = _1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), M = rt(R, g.ref);
  let P;
  return p !== void 0 ? P = p : S.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ f.jsx(of.Provider, {
    value: h,
    children: /* @__PURE__ */ f.jsx(tM, {
      ref: M,
      role: u,
      "aria-checked": b,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: ee(A.focusVisible, c),
      className: ee(A.root, v),
      ...d,
      ownerState: T,
      classes: I
    })
  });
}), nM = (e) => {
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
}, J1 = H("select", {
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
  [`&.${Pp.disabled}`]: {
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
      [`.${an.root}:has(> & ~ .${si.root})`]: {
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
      [`.${an.root}:has(> & ~ .${si.root})`]: {
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
      [`.${an.root}:has(> & ~ .${si.root})`]: {
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
})), rM = H(J1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: on,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Pp.multiple}`]: t.multiple
    }];
  }
})({}), ex = H("svg", {
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
  [`&.${Pp.disabled}`]: {
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
})), oM = H(ex, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${se(n.variant)}`], n.open && t.iconOpen];
  }
})({}), iM = /* @__PURE__ */ m.forwardRef(function(t, n) {
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
  }, p = nM(u);
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx(rM, {
      ownerState: u,
      className: ee(p.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ f.jsx(oM, {
      as: s,
      ownerState: u,
      className: p.icon
    })]
  });
});
var Mg;
const sM = H("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: on
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
}), lM = H("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: on
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
      ...vt(e, "width", {
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
      ...vt(e, "max-width", {
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
      ...vt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function aM(e) {
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
  return /* @__PURE__ */ f.jsx(sM, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ f.jsx(lM, {
      ownerState: a,
      children: l ? /* @__PURE__ */ f.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Mg || (Mg = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const cM = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Fk, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, uM = H(Zc, {
  shouldForwardProp: (e) => on(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Qc
})(xe(({
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
    variants: [...Object.entries(e.palette).filter(Vt()).map(([n]) => ({
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
        [`&.${mo.root}`]: {
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
})), dM = H(aM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), fM = H(Jc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: qc
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
}))), Wp = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    type: p = "text",
    ...v
  } = r, d = cM(r), [x, b] = Li({
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
  }, y = c.root ?? uM, h = c.input ?? fM, [S, w] = he("notchedOutline", {
    elementType: dM,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: u
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ f.jsxs(m.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ f.jsx(Rp, {
    slots: {
      root: y,
      input: h
    },
    slotProps: u,
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
      ...d,
      notchedOutline: null
    }
  });
});
Wp.muiName = "Input";
function pM(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function tx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return m.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ m.isValidElement(n) && (t += tx(n.props.children));
  }), t;
}
function mM(e, t, n = 0) {
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
function hM(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function gM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ m.isValidElement(i) || !pM(i) || i.props.disabled)
      continue;
    const s = tx(i.props.children).trim().toLowerCase();
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
var $g;
const Hl = 2, yM = 400, jg = 200, vM = 750, ao = " ", xM = "ArrowUp", SM = "ArrowDown", bM = "Enter";
function Ag(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Hl && e.clientX <= r.right + Hl && e.clientY >= r.top - Hl && e.clientY <= r.bottom + Hl;
}
const wM = H(J1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${mo.select}`]: t.select
      },
      {
        [`&.${mo.select}`]: t[n.variant]
      },
      {
        [`&.${mo.error}`]: t.error
      },
      {
        [`&.${mo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${mo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), CM = H(ex, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), kM = H("input", {
  shouldForwardProp: (e) => l1(e) && e !== "classes",
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
}), TM = (e) => {
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
  }, D1, t);
}, EM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  var zi, zo, Hp, Vp;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: u,
    disabled: p,
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
    onOpen: O,
    open: I,
    readOnly: g,
    renderValue: M,
    required: P,
    SelectDisplayProps: j = {},
    tabIndex: L,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: $,
    variant: z = "standard",
    ...B
  } = t, [W, _] = Zd({
    controlled: $,
    default: u,
    name: "Select"
  }), [Q, K] = Zd({
    controlled: I,
    default: c,
    name: "Select"
  }), q = m.useRef(null), G = m.useRef(null), X = m.useRef(null), U = m.useRef(!1), J = m.useRef(!1), ie = m.useRef(null), Ce = m.useRef(!1), Te = m.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ge = m.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ae = er(), Le = er(), Ue = er(), [we, $e] = m.useState(null), {
    current: ue
  } = m.useRef(I != null), [je, Xe] = m.useState(), [Ne, me] = m.useState(null), ve = rt(n, b), Ae = m.useCallback((Y) => {
    G.current = Y, Y && $e(Y);
  }, []), ze = we == null ? void 0 : we.parentNode;
  m.useImperativeHandle(ve, () => ({
    focus: () => {
      G.current.focus();
    },
    node: q.current,
    value: W
  }), [W]);
  const be = we !== null && Q, He = m.useCallback(() => {
    Ue.clear(), ge.current.buffer = "", ge.current.previousSearchIndex = null, ge.current.matchedIndex = null;
  }, [Ue]);
  ut(() => {
    U.current = be, be && He();
  }, [be, He]);
  const ht = m.useCallback(() => {
    ae.clear(), Le.clear();
  }, [ae, Le]), oe = m.useCallback(() => {
    ht(), Ce.current = !1, Te.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [ht]), Se = m.useCallback(() => {
    ie.current && (ie.current(), ie.current = null);
  }, []);
  m.useEffect(() => {
    be || (oe(), Se());
  }, [be, oe, Se]), m.useEffect(() => () => {
    oe(), Se(), He();
  }, [oe, Se, He]), m.useEffect(() => {
    if (!be || !ze || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      Xe(ze.clientWidth);
    });
    return Y.observe(ze), () => {
      Y.disconnect();
    };
  }, [be, ze, s]), m.useEffect(() => {
    c && Q && we && !ue && (Xe(s ? null : ze.clientWidth), G.current.focus());
  }, [we, s]), m.useEffect(() => {
    i && G.current.focus();
  }, [i]), m.useEffect(() => {
    if (!C)
      return;
    const Y = mt(G.current).getElementById(C);
    if (Y) {
      const le = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return Y.addEventListener("click", le), () => {
        Y.removeEventListener("click", le);
      };
    }
  }, [C]);
  const De = Ze((Y, le) => {
    Y || (oe(), Se()), Y ? (He(), me(AI(le)), O && O(le)) : (me(null), k && k(le)), ue || (U.current = Y, Xe(s ? null : ze.clientWidth), K(Y));
  }), st = () => {
    oe(), J.current ? Le.start(jg, () => {
      Te.current.allowUnselectedMouseUp = !0, ae.start(jg, () => {
        Te.current.allowSelectedMouseUp = !0;
      });
    }) : ae.start(yM, () => {
      Te.current.allowSelectedMouseUp = !0, Te.current.allowUnselectedMouseUp = !0;
    });
  }, ke = (Y) => {
    if (A == null || A(Y), Y.button !== 0 || (Y.preventDefault(), !G.current))
      return;
    G.current.focus();
    const le = mt(Y.currentTarget);
    st(), Se();
    const Ie = (lt) => {
      ie.current = null, G.current && (Ag(lt, G.current) || Ag(lt, X.current) || !U.current && ue || De(!1, lt));
    };
    le.addEventListener("mouseup", Ie, {
      capture: !0,
      once: !0
    }), ie.current = () => {
      le.removeEventListener("mouseup", Ie, !0);
    }, De(!0, Y);
  }, Wn = (Y) => {
    De(!1, Y);
  }, sn = m.Children.toArray(l), Rr = (Y) => {
    const le = sn.find((Ie) => Ie.props.value === Y.target.value);
    le !== void 0 && (_(le.props.value), E && E(Y, le));
  }, Pr = (Y, le, Ie) => {
    if (_(Ie), E) {
      const lt = Y.nativeEvent || Y, Wt = new lt.constructor(lt.type, lt);
      Object.defineProperty(Wt, "target", {
        writable: !0,
        value: {
          value: Ie,
          name: S
        }
      }), E(Wt, le);
    }
  }, D = (Y) => (le) => {
    Ce.current = !1;
    let Ie;
    if (le.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Ie = Array.isArray(W) ? W.slice() : [];
        const lt = W.indexOf(Y.props.value);
        lt === -1 ? Ie.push(Y.props.value) : Ie.splice(lt, 1);
      } else
        Ie = Y.props.value;
      Y.props.onClick && Y.props.onClick(le), W !== Ie && Pr(le, Y, Ie), h || De(!1, le);
    }
  }, te = (Y, le) => (Ie) => {
    var gl, Do;
    if ((Do = (gl = Y.props).onMouseUp) == null || Do.call(gl, Ie), Ce.current) {
      Ce.current = !1;
      return;
    }
    const lt = !Te.current.allowSelectedMouseUp && le, Wt = !Te.current.allowUnselectedMouseUp && !le;
    lt || Wt || Ie.currentTarget.click();
  }, Pe = (Y) => {
    var Kp;
    const le = ge.current, Ie = le.buffer !== "";
    if (be || h || p || Y.defaultPrevented || (Kp = Y.nativeEvent) != null && Kp.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === ao && !Ie)
      return !1;
    Y.key === ao && Y.preventDefault();
    const lt = le.buffer === "", {
      options: Wt,
      selectedIndex: gl
    } = gM(sn, W);
    if (Wt.length === 0)
      return Y.key !== ao && He(), !0;
    lt && (le.previousSearchIndex = gl);
    const Do = Y.key.toLowerCase();
    le.buffer === Do && hM(Wt, Do) && (le.buffer = "", le.previousSearchIndex = le.matchedIndex), le.buffer += Do, Ue.start(vM, He);
    const ou = mM(Wt, le.buffer, (le.previousSearchIndex ?? -1) + 1);
    if (ou !== -1) {
      const iu = Wt[ou];
      return le.matchedIndex = ou, ua(W, iu.value) || Pr(Y, iu.child, iu.value), !0;
    }
    return Y.key !== ao && He(), !0;
  }, ft = (Y) => {
    if (!g) {
      const le = Pe(Y), Ie = Y.key === ao || Y.key === xM || Y.key === SM || Y.key === bM;
      !le && Ie && (Y.preventDefault(), De(!0, Y)), T == null || T(Y);
    }
  }, Xt = (Y) => {
    He(), !be && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: W,
        name: S
      }
    }), w(Y));
  }, ro = (Y) => (le) => {
    var Ie, lt;
    (lt = (Ie = Y == null ? void 0 : Y.props) == null ? void 0 : Ie.onKeyDown) == null || lt.call(Ie, le), le.key === ao && le.target === le.currentTarget && !le.defaultPrevented && (le.preventDefault(), le.repeat || le.currentTarget.click());
  };
  delete B["aria-invalid"];
  let Un, ml;
  const Oo = [];
  let Lo = !1, No = !1;
  (Fa({
    value: W
  }) || v) && (M ? Un = M(W) : Lo = !0);
  const ru = sn.map((Y) => {
    if (!/* @__PURE__ */ m.isValidElement(Y))
      return null;
    let le;
    if (h) {
      if (!Array.isArray(W))
        throw new Error(Cr(2));
      le = W.some((Ie) => ua(Ie, Y.props.value)), le && Lo && Oo.push(Y.props.children);
    } else
      le = ua(W, Y.props.value), le && Lo && (ml = Y.props.children);
    return le && (No = !0), /* @__PURE__ */ m.cloneElement(Y, {
      "aria-selected": le ? "true" : "false",
      onMouseDown: (Ie) => {
        var lt, Wt;
        Ce.current = !0, (Wt = (lt = Y.props).onMouseDown) == null || Wt.call(lt, Ie);
      },
      onPointerDown: (Ie) => {
        var lt, Wt;
        Ce.current = !0, (Wt = (lt = Y.props).onPointerDown) == null || Wt.call(lt, Ie);
      },
      onClick: D(Y),
      onMouseUp: te(Y, le),
      onKeyUp: (Ie) => {
        Ie.key === ao && Ie.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Ie);
      },
      onKeyDown: ro(Y),
      role: "option",
      selected: le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ut(() => {
    J.current = No, !be && !h && !No && He();
  }, [No, h, be, He]), Lo && (h ? Oo.length === 0 ? Un = null : Un = Oo.reduce((Y, le, Ie) => (Y.push(le), Ie < Oo.length - 1 && Y.push(", "), Y), []) : Un = ml);
  let hl = je;
  !s && ue && we && (hl = ze.clientWidth);
  let Ni;
  typeof L < "u" ? Ni = L : Ni = p ? null : 0;
  const re = j.id || (S ? `mui-component-select-${S}` : void 0), Z = {
    ...t,
    variant: z,
    value: W,
    open: be,
    error: d
  }, ye = TM(Z), Ee = typeof ((zi = y.slotProps) == null ? void 0 : zi.paper) == "function" ? y.slotProps.paper(Z) : (zo = y.slotProps) == null ? void 0 : zo.paper, gt = rt(Ee == null ? void 0 : Ee.ref, X), cr = typeof ((Hp = y.slotProps) == null ? void 0 : Hp.list) == "function" ? y.slotProps.list(Z) : (Vp = y.slotProps) == null ? void 0 : Vp.list, Hn = kr(), oo = kr();
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ f.jsx(wM, {
      as: "div",
      ref: Ae,
      tabIndex: Ni,
      role: "combobox",
      "aria-controls": be ? Hn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": be ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: ft,
      onMouseDown: p || g ? null : ke,
      onBlur: Xt,
      onFocus: R,
      ...j,
      ownerState: Z,
      className: ee(j.className, ye.select, a),
      id: re,
      children: OI(Un) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        $g || ($g = /* @__PURE__ */ f.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Un
    }), /* @__PURE__ */ f.jsx(kM, {
      "aria-invalid": d,
      value: Array.isArray(W) ? W.join(",") : W,
      name: S,
      ref: q,
      "aria-hidden": !0,
      onChange: Rr,
      tabIndex: -1,
      disabled: p,
      readOnly: g,
      className: ye.nativeInput,
      autoFocus: i,
      required: P,
      ...B,
      id: B.id ?? oo,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(CM, {
      as: x,
      className: ye.icon,
      ownerState: Z
    }), /* @__PURE__ */ f.jsx(LI, {
      value: Ne,
      children: /* @__PURE__ */ f.jsx(ZI, {
        id: `menu-${S || ""}`,
        anchorEl: ze,
        open: be,
        onClose: Wn,
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
            ...cr
          },
          paper: {
            ...Ee,
            ref: gt,
            style: {
              minWidth: hl,
              ...Ee == null ? void 0 : Ee.style
            }
          }
        },
        children: ru
      })
    })]
  });
}), RM = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"]
  }, D1, t);
  return {
    ...t,
    ...r
  };
}, Up = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => on(e) && e !== "variant"
}, PM = H(Fp, Up)(""), IM = H(Wp, Up)(""), MM = H(Bp, Up)(""), ks = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: c = !1,
    IconComponent: u = TR,
    id: p,
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
  } = r, O = h ? iM : EM, [I] = Li({
    props: r,
    states: ["variant", "error"]
  }), g = I.variant || T, M = {
    ...r,
    variant: g,
    classes: s
  }, P = RM(M), {
    root: j,
    ...L
  } = P, N = v || {
    standard: /* @__PURE__ */ f.jsx(PM, {
      ownerState: M
    }),
    outlined: /* @__PURE__ */ f.jsx(IM, {
      label: x,
      ownerState: M
    }),
    filled: /* @__PURE__ */ f.jsx(MM, {
      ownerState: M
    })
  }[g], $ = rt(n, no(N));
  return /* @__PURE__ */ f.jsx(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: O,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: u,
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
        ...d,
        classes: d ? Ot(L, d.classes) : L,
        ...v ? v.props.inputProps : {}
      },
      ...(y && h || c) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: ee(N.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: g
      },
      ...A
    })
  });
});
ks.muiName = "Select";
function $M(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = er();
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
  const l = Ze((y, h) => {
    r == null || r(y, h);
  }), a = Ze((y) => {
    !r || y == null || s.start(y, () => {
      l(null, "timeout");
    });
  });
  m.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (y) => {
    r == null || r(y, "clickaway");
  }, u = s.clear, p = m.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (y) => (h) => {
    const S = y.onBlur;
    S == null || S(h), p();
  }, d = (y) => (h) => {
    const S = y.onFocus;
    S == null || S(h), u();
  }, x = (y) => (h) => {
    const S = y.onMouseEnter;
    S == null || S(h), u();
  }, b = (y) => (h) => {
    const S = y.onMouseLeave;
    S == null || S(h), p();
  };
  return m.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", p), window.addEventListener("blur", u), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", u);
      };
  }, [n, o, p, u]), {
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
        onFocus: d(h),
        onMouseEnter: x(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: c
  };
}
function jM(e) {
  return de("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const AM = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, jM, t);
}, OM = H(sr, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(xe(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Vd(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Vd(e.palette.background.default, t),
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
}), NM = H("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), zM = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, u = AM(c);
  return /* @__PURE__ */ f.jsxs(OM, {
    role: l,
    elevation: 6,
    className: ee(u.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ f.jsx(LM, {
      className: u.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ f.jsx(NM, {
      className: u.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function DM(e) {
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
  return fe(r, DM, t);
}, FM = H("div", {
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
}))), _M = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSnackbar"
  }), o = ar(), i = {
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
    className: p,
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
  }, O = BM(A), {
    getRootProps: I,
    onClickAway: g
  } = $M(A), [M, P] = m.useState(!0), j = {
    slots: E,
    slotProps: k
  }, [L, N] = he("root", {
    ref: n,
    className: [O.root, p],
    elementType: FM,
    getSlotProps: I,
    externalForwardedProps: {
      ...j,
      ...T
    },
    ownerState: A
  }), [$, {
    ownerState: z,
    ...B
  }] = he("clickAwayListener", {
    elementType: GR,
    externalForwardedProps: j,
    getSlotProps: (q) => ({
      onClickAway: (...G) => {
        var U;
        const X = G[0];
        (U = q.onClickAway) == null || U.call(q, ...G), !(X != null && X.defaultMuiPrevented) && g(...G);
      }
    }),
    ownerState: A
  }), [W, _] = he("content", {
    elementType: zM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: A
  }), [Q, K] = he("transition", {
    elementType: qs,
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
  return !S && M ? null : /* @__PURE__ */ f.jsx($, {
    ...B,
    ...E.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ f.jsx(L, {
      ...N,
      children: /* @__PURE__ */ f.jsx(Q, {
        ...K,
        children: u || /* @__PURE__ */ f.jsx(W, {
          ..._
        })
      })
    })
  });
});
function WM(e) {
  return de("MuiTooltip", e);
}
const xn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function UM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const HM = (e) => {
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
  return fe(s, WM, t);
}, VM = H(I1, {
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
}))), KM = H("div", {
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
      lineHeight: `${UM(16 / 14)}em`,
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
}))), YM = H("span", {
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
let Vl = !1;
const Og = new eu();
let es = {
  x: 0,
  y: 0
};
function Kl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const fr = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    disableTouchListener: p = !1,
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
    ...O
  } = r, I = /* @__PURE__ */ m.isValidElement(i) ? i : /* @__PURE__ */ f.jsx("span", {
    children: i
  }), g = ar(), [M, P] = m.useState(), [j, L] = m.useState(null), N = m.useRef(!1), $ = u || b, z = er(), B = er(), W = er(), _ = er(), [Q, K] = Zd({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let q = Q;
  const G = kr(C), X = m.useRef(), U = Ze(() => {
    X.current !== void 0 && (document.body.style.WebkitUserSelect = X.current, X.current = void 0), _.clear();
  });
  m.useEffect(() => U, [U]);
  const J = (D) => {
    Og.clear(), Vl = !0, K(!0), w && !q && w(D);
  }, ie = Ze(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (D) => {
      Og.start(800 + y, () => {
        Vl = !1;
      }), K(!1), S && q && S(D), z.start(g.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), Ce = (D) => {
    M != null && M.disabled || N.current && D.type !== "touchstart" || (M && M.removeAttribute("title"), B.clear(), W.clear(), v || Vl && d ? B.start(Vl ? d : v, () => {
      J(D);
    }) : J(D));
  }, Te = (D) => {
    B.clear(), W.start(y, () => {
      ie(D);
    });
  }, [, ge] = m.useState(!1), ae = (D) => {
    const te = (D == null ? void 0 : D.target) ?? M;
    if (!te || te.disabled || !Ua(te)) {
      ge(!1);
      const Pe = D ?? new Event("blur");
      !D && te && (Object.defineProperty(Pe, "target", {
        value: te
      }), Object.defineProperty(Pe, "currentTarget", {
        value: te
      })), Te(Pe);
    }
  }, Le = (D) => {
    if (M || P(D.currentTarget), Ua(D.target)) {
      const te = (Pe) => {
        Pe.target.disabled && ae(Pe), Pe.target.removeEventListener("blur", te);
      };
      D.target.addEventListener("blur", te), ge(!0), Ce(D);
    }
  }, Ue = (D) => {
    N.current = !0;
    const te = I.props;
    te.onTouchStart && te.onTouchStart(D);
  }, we = (D) => {
    Ue(D), W.clear(), z.clear(), U(), X.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(x, () => {
      document.body.style.WebkitUserSelect = X.current, Ce(D);
    });
  }, $e = (D) => {
    I.props.onTouchEnd && I.props.onTouchEnd(D), U(), W.start(h, () => {
      ie(D);
    });
  };
  m.useEffect(() => {
    if (!q)
      return;
    function D(te) {
      te.key === "Escape" && ie(te);
    }
    return document.addEventListener("keydown", D), () => {
      document.removeEventListener("keydown", D);
    };
  }, [ie, q]);
  const ue = rt(no(I), P, n);
  !A && A !== 0 && (q = !1);
  const je = m.useRef(), Xe = (D) => {
    const te = I.props;
    te.onMouseMove && te.onMouseMove(D), es = {
      x: D.clientX,
      y: D.clientY
    }, je.current && je.current.update();
  }, Ne = {}, me = typeof A == "string";
  l ? (Ne.title = !q && me && !c ? A : null, Ne["aria-describedby"] = q ? G : null) : (Ne["aria-label"] = me ? A : null, Ne["aria-labelledby"] = q && !me ? G : null);
  const ve = {
    ...Ne,
    ...O,
    ...I.props,
    className: ee(O.className, I.props.className),
    onTouchStart: Ue,
    ref: ue,
    ...b ? {
      onMouseMove: Xe
    } : {}
  }, Ae = {};
  p || (ve.onTouchStart = we, ve.onTouchEnd = $e), c || (ve.onMouseOver = Kl(Ce, ve.onMouseOver), ve.onMouseLeave = Kl(Te, ve.onMouseLeave), $ || (Ae.onMouseOver = Ce, Ae.onMouseLeave = Te)), a || (ve.onFocus = Kl(Le, ve.onFocus), ve.onBlur = Kl(ae, ve.onBlur), $ || (Ae.onFocus = Le, Ae.onBlur = ae));
  const ze = {
    ...r,
    arrow: o,
    disableInteractive: $,
    placement: k,
    touch: N.current
  }, be = typeof R.popper == "function" ? R.popper(ze) : R.popper, He = m.useMemo(() => {
    var te;
    let D = [{
      name: "arrow",
      enabled: !!j,
      options: {
        element: j,
        padding: 4
      }
    }];
    return (te = be == null ? void 0 : be.popperOptions) != null && te.modifiers && (D = D.concat(be.popperOptions.modifiers)), {
      ...be == null ? void 0 : be.popperOptions,
      modifiers: D
    };
  }, [j, be == null ? void 0 : be.popperOptions]), ht = HM(ze), oe = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: be,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [Se, De] = he("popper", {
    elementType: VM,
    externalForwardedProps: oe,
    ownerState: ze,
    className: ht.popper
  }), [st, ke] = he("transition", {
    elementType: qs,
    externalForwardedProps: oe,
    ownerState: ze
  }), [Wn, sn] = he("tooltip", {
    elementType: KM,
    className: ht.tooltip,
    externalForwardedProps: oe,
    ownerState: ze
  }), [Rr, Pr] = he("arrow", {
    elementType: YM,
    className: ht.arrow,
    externalForwardedProps: oe,
    ownerState: ze,
    ref: L
  });
  return /* @__PURE__ */ f.jsxs(m.Fragment, {
    children: [/* @__PURE__ */ m.cloneElement(I, ve), /* @__PURE__ */ f.jsx(Se, {
      as: I1,
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
      } : M,
      popperRef: je,
      open: M ? q : !1,
      id: G,
      transition: !0,
      ...Ae,
      ...De,
      popperOptions: He,
      children: ({
        TransitionProps: D
      }) => /* @__PURE__ */ f.jsx(st, {
        timeout: g.transitions.duration.shorter,
        ...D,
        ...ke,
        children: /* @__PURE__ */ f.jsxs(Wn, {
          ...sn,
          children: [A, o ? /* @__PURE__ */ f.jsx(Rr, {
            ...Pr
          }) : null]
        })
      })
    })]
  });
}), tt = L2({
  createStyledComponent: H("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => pe({
    props: e,
    name: "MuiStack"
  })
});
function GM(e) {
  return de("MuiTab", e);
}
const On = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), XM = (e) => {
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
  return fe(c, GM, t);
}, QM = H(Mo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${se(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${On.icon}`]: t.icon
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
}))), ts = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    value: h,
    wrapped: S = !1,
    ...w
  } = r, E = B1(), k = _1({
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
  }, O = XM(A), I = a && p && /* @__PURE__ */ m.isValidElement(a) ? /* @__PURE__ */ m.cloneElement(a, {
    className: ee(O.icon, a.props.className)
  }) : a, g = (P) => {
    !b && v && v(P, h), d && d(P);
  }, M = (P) => {
    C && !b && v && v(P, h), x && x(P);
  };
  return /* @__PURE__ */ f.jsxs(QM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: ee(O.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: g,
    onFocus: M,
    tabIndex: T,
    ownerState: A,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [I, p]
    }) : /* @__PURE__ */ f.jsxs(m.Fragment, {
      children: [p, I]
    }), u]
  });
}), nx = /* @__PURE__ */ m.createContext();
function qM(e) {
  return de("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const ZM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return fe({
    root: ["root", n && "stickyHeader"]
  }, qM, t);
}, JM = H("table", {
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
}))), Lg = "table", Ng = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Lg,
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
  }, p = ZM(u), v = m.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ f.jsx(nx.Provider, {
    value: v,
    children: /* @__PURE__ */ f.jsx(JM, {
      as: i,
      role: i === Lg ? null : "table",
      ref: n,
      className: ee(p.root, o),
      ownerState: u,
      ...c
    })
  });
}), nu = /* @__PURE__ */ m.createContext();
function e5(e) {
  return de("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const t5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, e5, t);
}, n5 = H("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), r5 = {
  variant: "body"
}, zg = "tbody", Dg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = zg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = t5(l);
  return /* @__PURE__ */ f.jsx(nu.Provider, {
    value: r5,
    children: /* @__PURE__ */ f.jsx(n5, {
      className: ee(a.root, o),
      as: i,
      ref: n,
      role: i === zg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function o5(e) {
  return de("MuiTableCell", e);
}
const i5 = ce("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), s5 = (e) => {
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
  return fe(l, o5, t);
}, l5 = H("td", {
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
      [`&.${i5.paddingCheckbox}`]: {
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
}))), Mt = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    variant: p,
    ...v
  } = r, d = m.useContext(nx), x = m.useContext(nu), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let y = a;
  C === "td" ? y = void 0 : !y && b && (y = "col");
  const h = p || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: c || (d && d.size ? d.size : "medium"),
    sortDirection: u,
    stickyHeader: h === "head" && d && d.stickyHeader,
    variant: h
  }, w = s5(S);
  let E = null;
  return u && (E = u === "asc" ? "ascending" : "descending"), /* @__PURE__ */ f.jsx(l5, {
    as: C,
    ref: n,
    className: ee(w.root, i),
    "aria-sort": E,
    scope: y,
    ownerState: S,
    ...v
  });
});
function a5(e) {
  return de("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const c5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, a5, t);
}, u5 = H("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), d5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = c5(l);
  return /* @__PURE__ */ f.jsx(u5, {
    ref: n,
    as: i,
    className: ee(a.root, o),
    ownerState: l,
    ...s
  });
});
function f5(e) {
  return de("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const p5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, f5, t);
}, m5 = H("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), h5 = {
  variant: "head"
}, Bg = "thead", Fg = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Bg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = p5(l);
  return /* @__PURE__ */ f.jsx(nu.Provider, {
    value: h5,
    children: /* @__PURE__ */ f.jsx(m5, {
      as: i,
      className: ee(a.root, o),
      ref: n,
      role: i === Bg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), g5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), y5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function v5(e) {
  return de("MuiTableRow", e);
}
const _g = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), x5 = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return fe({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, v5, t);
}, S5 = H("tr", {
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
  [`&.${_g.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${_g.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Wg = "tr", ns = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Wg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = m.useContext(nu), u = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, p = x5(u);
  return /* @__PURE__ */ f.jsx(S5, {
    as: i,
    ref: n,
    className: ee(p.root, o),
    role: i === Wg ? null : "row",
    ownerState: u,
    ...a
  });
});
function b5(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function w5(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = b5,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const u = () => {
    c = !0;
  }, p = (v) => {
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
    requestAnimationFrame(p);
  };
  return a === n ? (o(new Error("Element already at target position")), u) : (requestAnimationFrame(p), u);
}
const C5 = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function k5(e) {
  const {
    onChange: t,
    ...n
  } = e, r = m.useRef(), o = m.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ut(() => {
    const s = cl(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = mn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), m.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ f.jsx("div", {
    style: C5,
    ...n,
    ref: o
  });
}
function T5(e) {
  return de("MuiTabScrollButton", e);
}
const E5 = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), R5 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return fe({
    root: ["root", n, r && "disabled"]
  }, T5, t);
}, P5 = H(Mo, {
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
  [`&.${E5.disabled}`]: {
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
}), I5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    nativeButton: p,
    ...v
  } = u, d = al(), x = {
    isRtl: d,
    ...r
  }, b = R5(x), C = i.StartScrollButtonIcon ?? g5, y = i.EndScrollButtonIcon ?? y5, h = Mi({
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
  return /* @__PURE__ */ f.jsx(P5, {
    component: "div",
    className: ee(b.root, o),
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
      ...h
    }) : /* @__PURE__ */ f.jsx(y, {
      ...S
    })
  });
});
function M5(e) {
  return de("MuiTabs", e);
}
const Uu = ce("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), $5 = (e) => {
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
  }, M5, a);
}, j5 = H("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Uu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Uu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${Uu.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), A5 = H("div", {
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
}), O5 = H("div", {
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
  ...vt(e),
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
}))), N5 = H(k5)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Ug = {}, z5 = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTabs"
  }), o = ar(), i = al(), s = dl(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: u = !1,
    children: p,
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
    ...O
  } = r, I = T === "scrollable", g = y === "vertical", M = g ? "scrollTop" : "scrollLeft", P = g ? "top" : "left", j = g ? "bottom" : "right", L = g ? "clientHeight" : "clientWidth", N = g ? "height" : "width", $ = {
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
    centered: u && !I,
    scrollButtonsHideMobile: !x
  }, z = $5($), B = Mi({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: $
  }), W = Mi({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: $
  }), [_, Q] = m.useState(!1), [K, q] = m.useState(Ug), [G, X] = m.useState(!1), [U, J] = m.useState(!1), [ie, Ce] = m.useState(!1), Te = R === !1 ? null : R, [ge, ae] = m.useState(!1), [Le, Ue] = m.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), we = /* @__PURE__ */ new Map(), $e = m.useRef(null), ue = m.useRef(null), je = {
    slots: w,
    slotProps: E
  }, Xe = () => {
    const re = $e.current;
    let Z;
    if (re) {
      const Ee = re.getBoundingClientRect();
      Z = {
        clientWidth: re.clientWidth,
        scrollLeft: re.scrollLeft,
        scrollTop: re.scrollTop,
        scrollWidth: re.scrollWidth,
        top: Ee.top,
        bottom: Ee.bottom,
        left: Ee.left,
        right: Ee.right
      };
    }
    let ye;
    if (re && R !== !1) {
      const Ee = ue.current.children;
      if (Ee.length > 0) {
        const gt = Ee[we.get(R)];
        ye = gt ? gt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: ye
    };
  }, Ne = Ze(() => {
    const {
      tabsMeta: re,
      tabMeta: Z
    } = Xe();
    let ye = 0, Ee;
    g ? (Ee = "top", Z && re && (ye = Z.top - re.top + re.scrollTop)) : (Ee = i ? "right" : "left", Z && re && (ye = (i ? -1 : 1) * (Z[Ee] - re[Ee] + re.scrollLeft)));
    const gt = {
      [Ee]: ye,
      // May be wrong until the font is loaded.
      [N]: Z ? Z[N] : 0
    };
    if (typeof K[Ee] != "number" || typeof K[N] != "number")
      q(gt);
    else {
      const cr = Math.abs(K[Ee] - gt[Ee]), Hn = Math.abs(K[N] - gt[N]);
      (cr >= 1 || Hn >= 1) && q(gt);
    }
  }), me = (re, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? w5(M, $e.current, re, {
      duration: o.transitions.duration.standard
    }) : $e.current[M] = re;
  }, ve = (re) => {
    let Z = $e.current[M];
    g ? Z += re : Z += re * (i ? -1 : 1), me(Z);
  }, Ae = () => {
    const re = $e.current[L];
    let Z = 0;
    const ye = Array.from(ue.current.children);
    for (let Ee = 0; Ee < ye.length; Ee += 1) {
      const gt = ye[Ee];
      if (Z + gt[L] > re) {
        Ee === 0 && (Z = re);
        break;
      }
      Z += gt[L];
    }
    return Z;
  }, ze = () => {
    ve(-1 * Ae());
  }, be = () => {
    ve(Ae());
  }, [He, {
    onChange: ht,
    ...oe
  }] = he("scrollbar", {
    className: ee(z.scrollableX, z.hideScrollbar),
    elementType: N5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: je,
    ownerState: $
  }), Se = m.useCallback((re) => {
    ht == null || ht(re), Ue({
      overflow: null,
      scrollbarWidth: re
    });
  }, [ht]), [De, st] = he("scrollButtons", {
    className: z.scrollButtons,
    elementType: I5,
    externalForwardedProps: je,
    ownerState: $,
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
  }), ke = () => {
    const re = {};
    re.scrollbarSizeListener = I ? /* @__PURE__ */ f.jsx(He, {
      ...oe,
      onChange: Se
    }) : null;
    const ye = I && (h === "auto" && (G || U) || h === !0);
    return re.scrollButtonStart = ye ? /* @__PURE__ */ f.jsx(De, {
      direction: i ? "right" : "left",
      onClick: ze,
      disabled: !G,
      ...st
    }) : null, re.scrollButtonEnd = ye ? /* @__PURE__ */ f.jsx(De, {
      direction: i ? "left" : "right",
      onClick: be,
      disabled: !U,
      ...st
    }) : null, re;
  }, Wn = Ze((re) => {
    const {
      tabsMeta: Z,
      tabMeta: ye
    } = Xe();
    if (!(!ye || !Z)) {
      if (ye[P] < Z[P]) {
        const Ee = Z[M] + (ye[P] - Z[P]);
        me(Ee, {
          animation: re
        });
      } else if (ye[j] > Z[j]) {
        const Ee = Z[M] + (ye[j] - Z[j]);
        me(Ee, {
          animation: re
        });
      }
    }
  }), sn = Ze(() => {
    I && h !== !1 && Ce(!ie);
  });
  m.useEffect(() => {
    const re = cl(() => {
      $e.current && Ne();
    });
    let Z;
    const ye = (cr) => {
      cr.forEach((Hn) => {
        Hn.removedNodes.forEach((oo) => {
          Z == null || Z.unobserve(oo);
        }), Hn.addedNodes.forEach((oo) => {
          Z == null || Z.observe(oo);
        });
      }), re(), sn();
    }, Ee = mn($e.current);
    Ee.addEventListener("resize", re);
    let gt;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(re), Array.from(ue.current.children).forEach((cr) => {
      Z.observe(cr);
    })), typeof MutationObserver < "u" && (gt = new MutationObserver(ye), gt.observe(ue.current, {
      childList: !0
    })), () => {
      re.clear(), Ee.removeEventListener("resize", re), gt == null || gt.disconnect(), Z == null || Z.disconnect();
    };
  }, [Ne, sn]), m.useEffect(() => {
    const re = Array.from(ue.current.children), Z = re.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && I && h !== !1) {
      const ye = re[0], Ee = re[Z - 1], gt = {
        root: $e.current,
        threshold: 0.99
      }, cr = (zo) => {
        X(!zo[0].isIntersecting);
      }, Hn = new IntersectionObserver(cr, gt);
      Hn.observe(ye);
      const oo = (zo) => {
        J(!zo[0].isIntersecting);
      }, zi = new IntersectionObserver(oo, gt);
      return zi.observe(Ee), () => {
        Hn.disconnect(), zi.disconnect();
      };
    }
  }, [I, h, ie, p == null ? void 0 : p.length]), m.useEffect(() => {
    Q(!0);
  }, []), m.useEffect(() => {
    Ne();
  }), m.useEffect(() => {
    Wn(Ug !== K);
  }, [Wn, K]), m.useImperativeHandle(c, () => ({
    updateIndicator: Ne,
    updateScrollButtons: sn
  }), [Ne, sn]);
  const [Rr, Pr] = he("indicator", {
    className: z.indicator,
    elementType: L5,
    externalForwardedProps: je,
    ownerState: $,
    additionalProps: {
      style: K
    }
  }), D = /* @__PURE__ */ f.jsx(Rr, {
    ...Pr
  }), te = F1({
    activeItemId: ge ? void 0 : Te,
    orientation: y,
    isRtl: i
  }), Pe = te.getContainerProps(), Xt = m.Children.toArray(p).filter(m.isValidElement).map((re, Z) => {
    const ye = re.props.value === void 0 ? Z : re.props.value;
    return we.set(ye, Z), {
      child: re,
      index: Z,
      childValue: ye
    };
  }).map(({
    child: re,
    childValue: Z
  }) => {
    const ye = Z === R;
    return /* @__PURE__ */ m.cloneElement(re, {
      fullWidth: T === "fullWidth",
      indicator: ye && !_ && D,
      selected: ye,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), ro = ke(), [Un, ml] = he("root", {
    ref: n,
    className: ee(z.root, v),
    elementType: j5,
    externalForwardedProps: {
      ...je,
      ...O,
      component: d
    },
    ownerState: $
  }), [Oo, Lo] = he("scroller", {
    ref: $e,
    className: z.scroller,
    elementType: A5,
    externalForwardedProps: je,
    ownerState: $,
    additionalProps: {
      style: {
        overflow: Le.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: A ? void 0 : -Le.scrollbarWidth
      }
    }
  }), No = rt(Pe.ref, ue), ru = (re) => {
    const Z = ue.current, ye = Jn(mt(Z));
    (ye == null ? void 0 : ye.getAttribute("role")) === "tab" && Pe.onKeyDown(re);
  }, [hl, Ni] = he("list", {
    ref: No,
    className: z.list,
    elementType: O5,
    externalForwardedProps: je,
    ownerState: $,
    getSlotProps: (re) => ({
      ...re,
      onBlur: (Z) => {
        var ye;
        bo(Z.currentTarget, Z.relatedTarget) || ae(!1), (ye = re.onBlur) == null || ye.call(re, Z);
      },
      onKeyDown: (Z) => {
        var ye;
        ru(Z), (ye = re.onKeyDown) == null || ye.call(re, Z);
      },
      onFocus: (Z) => {
        var ye;
        ae(!0), Pe.onFocus(Z), (ye = re.onFocus) == null || ye.call(re, Z);
      }
    })
  });
  return /* @__PURE__ */ f.jsxs(Un, {
    ...ml,
    children: [ro.scrollButtonStart, ro.scrollbarSizeListener, /* @__PURE__ */ f.jsxs(Oo, {
      ...Lo,
      children: [/* @__PURE__ */ f.jsx(hl, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Ni,
        children: /* @__PURE__ */ f.jsx(_p.Provider, {
          value: te,
          children: Xt
        })
      }), _ && D]
    }), ro.scrollButtonEnd]
  });
});
function D5(e) {
  return de("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const B5 = {
  standard: Fp,
  filled: Bp,
  outlined: Wp
}, F5 = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, D5, t);
}, _5 = H(JP, {
  name: "MuiTextField",
  slot: "Root"
})({}), co = /* @__PURE__ */ m.forwardRef(function(t, n) {
  const r = pe({
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
    error: p = !1,
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
    rows: O,
    select: I = !1,
    slots: g = {},
    slotProps: M = {},
    type: P,
    value: j,
    variant: L = "outlined",
    ...N
  } = r, $ = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: u,
    error: p,
    fullWidth: v,
    multiline: S,
    required: A,
    select: I,
    variant: L
  }, z = F5($), B = kr(x), W = d && B ? `${B}-helper-text` : void 0, _ = C && B ? `${B}-label` : void 0, Q = B5[L], K = {
    slots: g,
    slotProps: M
  }, [q, G] = he("select", {
    elementType: ks,
    externalForwardedProps: K,
    ownerState: $
  }), X = I && G.native, U = {}, J = K.slotProps.inputLabel;
  L === "outlined" && (J && typeof J.shrink < "u" && (U.notched = J.shrink), U.label = C), I && (X || (U.id = void 0), U["aria-describedby"] = void 0);
  const [ie, Ce] = he("root", {
    elementType: _5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...K,
      ...N
    },
    ownerState: $,
    className: ee(z.root, l),
    ref: n,
    additionalProps: {
      disabled: u,
      error: p,
      fullWidth: v,
      required: A,
      color: a,
      variant: L
    }
  }), [Te, ge] = he("input", {
    elementType: Q,
    externalForwardedProps: K,
    additionalProps: U,
    ownerState: $
  }), [ae, Le] = he("inputLabel", {
    elementType: bI,
    externalForwardedProps: K,
    ownerState: $
  }), [Ue, we] = he("htmlInput", {
    elementType: "input",
    externalForwardedProps: K,
    ownerState: $
  }), [$e, ue] = he("formHelperText", {
    elementType: nI,
    externalForwardedProps: K,
    ownerState: $
  }), je = /* @__PURE__ */ f.jsx(Te, {
    "aria-describedby": W,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: S,
    name: w,
    rows: O,
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
    inputProps: we,
    slots: {
      input: g.htmlInput ? Ue : void 0
    },
    ...ge
  });
  return /* @__PURE__ */ f.jsxs(ie, {
    ...Ce,
    children: [C != null && C !== "" && /* @__PURE__ */ f.jsx(ae, {
      htmlFor: I && !X ? void 0 : B,
      id: _,
      ...I && !X && {
        component: "div"
      },
      ...Le,
      children: C
    }), I ? /* @__PURE__ */ f.jsx(q, {
      "aria-describedby": W,
      id: B,
      labelId: _,
      value: j,
      input: je,
      ...G,
      children: s
    }) : je, d && /* @__PURE__ */ f.jsx($e, {
      id: W,
      ...ue,
      children: d
    })]
  });
}), Hg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), Vg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), W5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M8 5v14l11-7z"
})), U5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M6 6h12v12H6z"
})), H5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), V5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), K5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z"
})), Y5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), Kg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), Hu = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M15 9H9v6h6zm-2 4h-2v-2h2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2zm-4 6H7V7h10z"
})), Yg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"
})), G5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), X5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), Gg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), Q5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), q5 = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), Xg = Je(/* @__PURE__ */ f.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), Xn = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', $r = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function rx({
  children: e,
  sx: t
}) {
  return /* @__PURE__ */ f.jsx(
    Re,
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
function Vu({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ f.jsxs(sr, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ f.jsxs(
      tt,
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
          typeof e == "string" ? /* @__PURE__ */ f.jsx(rx, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ f.jsx(We, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Ko({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ f.jsxs(We, { sx: n, children: [
    /* @__PURE__ */ f.jsxs(
      tt,
      {
        direction: "row",
        spacing: 0.75,
        sx: { alignItems: "baseline", mb: 0.75 },
        children: [
          /* @__PURE__ */ f.jsx(
            Re,
            {
              component: "label",
              sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
              children: e
            }
          ),
          t && /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
        ]
      }
    ),
    r
  ] });
}
function uo({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ f.jsxs(We, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ f.jsx(rx, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ f.jsx(
      Re,
      {
        sx: {
          fontFamily: n ? Xn : void 0,
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
  return /* @__PURE__ */ f.jsx(
    We,
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
      const n = t.line ?? "";
      return n.trim().startsWith('{"version"') || n.trim().startsWith('{"ok"') ? e : [
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
    sr,
    {
      sx: {
        bgcolor: $r.bg,
        borderRadius: "8px",
        px: 2,
        py: 3,
        textAlign: "center",
        fontFamily: Xn,
        fontSize: 12,
        color: $r.dim
      },
      children: "No log output recorded yet."
    }
  ) : /* @__PURE__ */ f.jsxs(
    sr,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: $r.bg,
        color: $r.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "22rem",
        overflowY: "auto",
        fontFamily: Xn,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ f.jsx(
          We,
          {
            sx: {
              color: i.stream === "stderr" ? $r.err : i.stream === "meta" ? $r.dim : $r.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ f.jsx(We, { sx: { color: $r.dim }, children: "▍running…" }),
        /* @__PURE__ */ f.jsx("div", { ref: n })
      ]
    }
  );
}
function J5({ ctx: e }) {
  const t = m.useMemo(
    () => Gc(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ f.jsx(Hk, { theme: t, children: /* @__PURE__ */ f.jsx(e$, { ctx: e }) });
}
function e$({ ctx: e }) {
  const [t, n] = m.useState(0), [r, o] = m.useState(!0), [i, s] = m.useState(null), [l, a] = m.useState([]), [c, u] = m.useState([]), [p, v] = m.useState(""), [d, x] = m.useState(""), [b, C] = m.useState("/opt/hostpanel/data/apps/"), [y, h] = m.useState("20"), [S, w] = m.useState("index.js"), [E, k] = m.useState("0"), [R, T] = m.useState(`NODE_ENV=production
PORT=31000
`), [A, O] = m.useState(!1), [I, g] = m.useState(!1), [M, P] = m.useState("22"), [j, L] = m.useState(!1), [N, $] = m.useState(!1), [z, B] = m.useState([]), [W, _] = m.useState(!1), [Q, K] = m.useState(""), [q, G] = m.useState(""), [X, U] = m.useState(!1), [J, ie] = m.useState(""), [Ce, Te] = m.useState("all"), [ge] = m.useState(100), [ae, Le] = m.useState([]), [Ue] = m.useState(!1), [we, $e] = m.useState(null), [ue, je] = m.useState(!1), [Xe, Ne] = m.useState(null), me = (D, te = "success") => {
    Ne({ message: D, severity: te });
  }, ve = m.useCallback(
    async (D, te) => {
      const Pe = await e.api(D, te), ft = await Pe.json().catch(() => ({}));
      if (!Pe.ok)
        throw new Error(ft.message || ft.error || `HTTP ${Pe.status}`);
      return ft;
    },
    [e]
  ), Ae = m.useCallback(async () => {
    var D, te;
    o(!0);
    try {
      const [Pe, ft, Xt] = await Promise.allSettled([
        ve("/status"),
        ve("/apps"),
        ve("/runtimes")
      ]);
      Pe.status === "fulfilled" && Pe.value && s(Pe.value), ft.status === "fulfilled" && ((D = ft.value) != null && D.apps) && a(ft.value.apps), Xt.status === "fulfilled" && ((te = Xt.value) != null && te.runtimes) && u(Xt.value.runtimes);
    } catch (Pe) {
      me(Pe.message || "Failed to load Node.js service data", "error");
    } finally {
      o(!1);
    }
  }, [ve]);
  m.useEffect(() => {
    Ae();
  }, [Ae]), m.useEffect(() => {
    l.length > 0 && !J && ie(l[0].name);
  }, [l, J]);
  const ze = m.useCallback(
    async (D, te = 100, Pe = "all") => {
      if (D)
        try {
          const ft = await ve(
            `/apps/${encodeURIComponent(D)}/logs?lines=${te}&type=${Pe}`
          ), Xt = Pe === "out" ? ft.stdout : Pe === "err" ? ft.stderr : ft.logs, ro = Xt ? Xt.split(`
`).map((Un) => ({
            stream: Pe === "err" ? "stderr" : "stdout",
            text: Un
          })) : [];
          Le(ro);
        } catch (ft) {
          console.error("Failed to load logs", ft);
        }
    },
    [ve]
  );
  m.useEffect(() => {
    t === 3 && J && ze(J, ge, Ce);
  }, [t, J, Ce, ge, ze]);
  const be = async (D) => {
    try {
      await ve(`/apps/${encodeURIComponent(D)}/start`, { method: "POST" }), me(`Application '${D}' started`, "success"), Ae();
    } catch (te) {
      me(te.message || `Failed to start ${D}`, "error");
    }
  }, He = async (D) => {
    try {
      await ve(`/apps/${encodeURIComponent(D)}/stop`, { method: "POST" }), me(`Application '${D}' stopped`, "info"), Ae();
    } catch (te) {
      me(te.message || `Failed to stop ${D}`, "error");
    }
  }, ht = async (D) => {
    try {
      await ve(`/apps/${encodeURIComponent(D)}/restart`, { method: "POST" }), me(`Application '${D}' restarted`, "success"), Ae();
    } catch (te) {
      me(te.message || `Failed to restart ${D}`, "error");
    }
  }, oe = async () => {
    if (we) {
      je(!0);
      try {
        await ve(`/apps/${encodeURIComponent(we)}`, {
          method: "DELETE"
        }), me(`Application '${we}' deleted`, "success"), $e(null), Ae();
      } catch (D) {
        me(D.message || `Failed to delete ${we}`, "error");
      } finally {
        je(!1);
      }
    }
  }, Se = async (D) => {
    K(D), _(!0), G("");
    try {
      const te = await ve(`/apps/${encodeURIComponent(D)}/env`);
      G(te.env || "");
    } catch (te) {
      me(te.message || "Failed to load environment variables", "error");
    }
  }, De = async () => {
    if (Q) {
      U(!0);
      try {
        await ve(`/apps/${encodeURIComponent(Q)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: q })
        }), me(`Environment variables updated for '${Q}'`, "success"), _(!1);
      } catch (D) {
        me(D.message || "Failed to save environment variables", "error");
      } finally {
        U(!1);
      }
    }
  }, st = async (D) => {
    if (D.preventDefault(), !!d) {
      O(!0);
      try {
        const te = b.endsWith("/") ? `${b}${d}` : b, Pe = await ve("/apps", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: d.trim().toLowerCase(),
            directory: te.trim(),
            node_version: y,
            script: S.trim() || "index.js",
            port: parseInt(E, 10) || 0
          })
        });
        R.trim() && await ve(`/apps/${encodeURIComponent(d)}/env`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ env: R })
        }).catch(() => {
        }), me(
          `Application '${d}' deployed on port ${Pe.port || "allocated"}!`,
          "success"
        ), x(""), n(0), Ae();
      } catch (te) {
        me(te.message || "Failed to create application", "error");
      } finally {
        O(!1);
      }
    }
  }, ke = async (D) => {
    const te = D || M;
    P(te), L(!0), $(!1), B([]);
    try {
      if (e.run)
        for await (const Pe of e.run("/runtimes/install", {
          method: "POST",
          body: { version: te }
        }))
          B((ft) => Z5(ft, Pe));
      else
        await ve("/runtimes/install", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ version: te })
        });
      $(!0), me(`Node.js v${te} installed successfully!`, "success"), Ae();
    } catch (Pe) {
      me(Pe.message || `Failed to install Node.js v${te}`, "error");
    } finally {
      L(!1);
    }
  }, Wn = async (D) => {
    try {
      await ve(`/runtimes/${encodeURIComponent(D)}`, {
        method: "DELETE"
      }), me(`Node.js v${D} removed`, "success"), Ae();
    } catch (te) {
      me(te.message || `Failed to remove Node.js v${D}`, "error");
    }
  }, sn = l.filter(
    (D) => D.name.toLowerCase().includes(p.toLowerCase()) || D.directory.toLowerCase().includes(p.toLowerCase()) || String(D.port).includes(p)
  ), Rr = l.filter((D) => D.status === "running").length, Pr = l.reduce(
    (D, te) => D + (parseFloat(String(te.memory_mb)) || 0),
    0
  );
  return /* @__PURE__ */ f.jsxs(We, { sx: { display: "flex", flexDirection: "column", gap: 2.5, pb: 4 }, children: [
    /* @__PURE__ */ f.jsxs(
      tt,
      {
        direction: "row",
        spacing: 2,
        sx: {
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        },
        children: [
          /* @__PURE__ */ f.jsxs(We, { children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 700, fontSize: "1.25rem" }, children: "Node.js Application Manager" }),
              /* @__PURE__ */ f.jsx(
                Vo,
                {
                  size: "small",
                  icon: /* @__PURE__ */ f.jsx(Qg, { ok: !0, size: 8 }),
                  label: "Daemon Active",
                  variant: "outlined",
                  sx: { fontWeight: 600, fontSize: "0.75rem" }
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.8125rem", color: "text.secondary", mt: 0.25 }, children: "Process supervisor, isolated runtimes, reverse proxy port allocator (31000–31999)" })
          ] }),
          /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ f.jsx(fr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Ln,
              {
                size: "small",
                onClick: Ae,
                disabled: r,
                sx: { border: "1px solid", borderColor: "divider" },
                children: r ? /* @__PURE__ */ f.jsx(ii, { size: 16, color: "inherit" }) : /* @__PURE__ */ f.jsx(Hg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(fr, { title: "Install Node.js Runtime", arrow: !0, children: /* @__PURE__ */ f.jsx("span", { children: /* @__PURE__ */ f.jsx(
              Ln,
              {
                size: "small",
                onClick: () => g(!0),
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ f.jsx(Yg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(
              Dt,
              {
                variant: "contained",
                color: "primary",
                size: "small",
                startIcon: /* @__PURE__ */ f.jsx(Vg, {}),
                onClick: () => n(1),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "Deploy Application"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      We,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(4, 1fr)" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                We,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Dr(D.palette.primary.main, 0.1),
                    color: "primary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Q5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(We, { children: [
                /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Node Daemon Status" }),
                /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: i ? "Active · Running" : "Active" })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Service: hostpanel-nodejsd • User: hp-nodejs" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                We,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Dr(D.palette.success.main, 0.1),
                    color: "success.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Kg, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(We, { children: [
                /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Running Apps" }),
                /* @__PURE__ */ f.jsxs(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  Rr,
                  " / ",
                  l.length,
                  " Online"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsxs(Re, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: [
              l.length - Rr,
              " stopped or paused"
            ] })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                We,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Dr(D.palette.warning.main, 0.1),
                    color: "warning.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(q5, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(We, { children: [
                /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Runtime Versions" }),
                /* @__PURE__ */ f.jsxs(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  c.filter((D) => D.installed).length || 2,
                  " Installed"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Node 18, 20 LTS, 22 LTS, 24" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 1 }, children: [
              /* @__PURE__ */ f.jsx(
                We,
                {
                  sx: {
                    p: 1,
                    borderRadius: 1.5,
                    bgcolor: (D) => Dr(D.palette.secondary.main, 0.1),
                    color: "secondary.main",
                    display: "flex"
                  },
                  children: /* @__PURE__ */ f.jsx(Hu, { sx: { fontSize: 22 } })
                }
              ),
              /* @__PURE__ */ f.jsxs(We, { children: [
                /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.6875rem", fontWeight: 600, color: "text.disabled", letterSpacing: "0.06em", textTransform: "uppercase" }, children: "Total Memory / CPU" }),
                /* @__PURE__ */ f.jsxs(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                  Pr.toFixed(1),
                  " MB"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: "Reverse Proxy Pool: 31000–31999" })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(Vu, { padded: !1, children: [
      /* @__PURE__ */ f.jsx(We, { sx: { borderBottom: 1, borderColor: "divider", px: 2 }, children: /* @__PURE__ */ f.jsxs(z5, { value: t, onChange: (D, te) => n(te), children: [
        /* @__PURE__ */ f.jsx(ts, { label: `Applications (${l.length})` }),
        /* @__PURE__ */ f.jsx(ts, { label: "Deploy New App" }),
        /* @__PURE__ */ f.jsx(ts, { label: "Node Runtimes" }),
        /* @__PURE__ */ f.jsx(ts, { label: "Live Console Logs" }),
        /* @__PURE__ */ f.jsx(ts, { label: "Service & Isolation" })
      ] }) }),
      t === 0 && /* @__PURE__ */ f.jsxs(We, { sx: { p: 2 }, children: [
        /* @__PURE__ */ f.jsxs(
          tt,
          {
            direction: "row",
            spacing: 2,
            sx: { justifyContent: "space-between", alignItems: "center", mb: 2 },
            children: [
              /* @__PURE__ */ f.jsx(
                co,
                {
                  size: "small",
                  placeholder: "Search apps by name, path, or port...",
                  value: p,
                  onChange: (D) => v(D.target.value),
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ f.jsx(vI, { position: "start", children: /* @__PURE__ */ f.jsx(G5, { sx: { fontSize: 18, color: "text.disabled" } }) })
                    }
                  },
                  sx: { width: 340 }
                }
              ),
              /* @__PURE__ */ f.jsx(
                Dt,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ f.jsx(Vg, {}),
                  onClick: () => n(1),
                  children: "Deploy Application"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(d5, { children: /* @__PURE__ */ f.jsxs(Ng, { size: "medium", children: [
          /* @__PURE__ */ f.jsx(Fg, { children: /* @__PURE__ */ f.jsxs(ns, { children: [
            /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "App Name & Path" }),
            /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Status" }),
            /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Runtime" }),
            /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Assigned Port" }),
            /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Memory / CPU" }),
            /* @__PURE__ */ f.jsx(Mt, { align: "right", sx: { fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase" }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ f.jsx(Dg, { children: sn.length === 0 ? /* @__PURE__ */ f.jsx(ns, { children: /* @__PURE__ */ f.jsxs(Mt, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ f.jsx(Kg, { sx: { fontSize: 40, color: "text.disabled", mb: 1 } }),
            /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 600, color: "text.secondary" }, children: "No Node.js Applications Deployed" }),
            /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.8125rem", color: "text.disabled", mb: 2 }, children: "Deploy an Express, Next.js, Fastify, or custom Node.js application to get started." }),
            /* @__PURE__ */ f.jsx(Dt, { variant: "outlined", size: "small", onClick: () => n(1), children: "Deploy First App" })
          ] }) }) : sn.map((D) => /* @__PURE__ */ f.jsxs(ns, { hover: !0, children: [
            /* @__PURE__ */ f.jsxs(Mt, { children: [
              /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: D.name }),
              /* @__PURE__ */ f.jsxs(
                Re,
                {
                  sx: {
                    fontFamily: Xn,
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
            /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(
              Vo,
              {
                size: "small",
                icon: /* @__PURE__ */ f.jsx(Qg, { ok: D.status === "running", size: 7 }),
                label: D.status === "running" ? `Running (PID ${D.pid})` : "Stopped",
                color: D.status === "running" ? "success" : "default",
                variant: "outlined",
                sx: { fontWeight: 500 }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(
              Vo,
              {
                size: "small",
                label: `Node ${D.node_version}`,
                variant: "outlined",
                sx: { fontFamily: Xn, fontSize: "0.75rem" }
              }
            ) }),
            /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(fr, { title: "Copy local reverse proxy address", children: /* @__PURE__ */ f.jsx(
              Vo,
              {
                size: "small",
                label: `http://127.0.0.1:${D.port}`,
                onClick: () => {
                  navigator.clipboard.writeText(`http://127.0.0.1:${D.port}`), me(`Copied http://127.0.0.1:${D.port}`, "info");
                },
                icon: /* @__PURE__ */ f.jsx(X5, { sx: { fontSize: "13px !important" } }),
                sx: {
                  fontFamily: Xn,
                  fontSize: "0.75rem",
                  cursor: "pointer"
                }
              }
            ) }) }),
            /* @__PURE__ */ f.jsx(Mt, { sx: { fontFamily: Xn, fontSize: "0.8125rem", color: "text.secondary" }, children: D.status === "running" ? `${D.memory_mb} MB • ${D.cpu_pct}%` : "—" }),
            /* @__PURE__ */ f.jsx(Mt, { align: "right", children: /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              D.status === "running" ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                /* @__PURE__ */ f.jsx(fr, { title: "Restart Application", children: /* @__PURE__ */ f.jsx(Ln, { size: "small", onClick: () => ht(D.name), children: /* @__PURE__ */ f.jsx(H5, { sx: { fontSize: 18 } }) }) }),
                /* @__PURE__ */ f.jsx(fr, { title: "Stop Application", children: /* @__PURE__ */ f.jsx(Ln, { size: "small", color: "warning", onClick: () => He(D.name), children: /* @__PURE__ */ f.jsx(U5, { sx: { fontSize: 18 } }) }) })
              ] }) : /* @__PURE__ */ f.jsx(fr, { title: "Start Application", children: /* @__PURE__ */ f.jsx(Ln, { size: "small", color: "success", onClick: () => be(D.name), children: /* @__PURE__ */ f.jsx(W5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ f.jsx(fr, { title: "Environment Variables", children: /* @__PURE__ */ f.jsx(Ln, { size: "small", onClick: () => Se(D.name), children: /* @__PURE__ */ f.jsx(Y5, { sx: { fontSize: 18 } }) }) }),
              /* @__PURE__ */ f.jsx(fr, { title: "View Logs", children: /* @__PURE__ */ f.jsx(
                Ln,
                {
                  size: "small",
                  onClick: () => {
                    ie(D.name), n(3);
                  },
                  children: /* @__PURE__ */ f.jsx(K5, { sx: { fontSize: 18 } })
                }
              ) }),
              /* @__PURE__ */ f.jsx(fr, { title: "Delete Application", children: /* @__PURE__ */ f.jsx(
                Ln,
                {
                  size: "small",
                  color: "error",
                  onClick: () => $e(D.name),
                  children: /* @__PURE__ */ f.jsx(V5, { sx: { fontSize: 18 } })
                }
              ) })
            ] }) })
          ] }, D.name)) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ f.jsxs(We, { sx: { p: 3, maxWidth: 720 }, children: [
        /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }, children: "Deploy Node.js Application" }),
        /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 3 }, children: "Configure application parameters, runtime version, entrypoint, and isolated reverse proxy port." }),
        /* @__PURE__ */ f.jsxs(We, { component: "form", onSubmit: st, sx: { display: "flex", flexDirection: "column", gap: 2.5 }, children: [
          /* @__PURE__ */ f.jsx(Ko, { label: "Application Name", hint: "Unique identifier, e.g. 'my-app' or 'api-service'", children: /* @__PURE__ */ f.jsx(
            co,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "e.g. backend-api",
              value: d,
              onChange: (D) => {
                const te = D.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "");
                x(te), b.startsWith("/opt/hostpanel/data/apps/") && C(`/opt/hostpanel/data/apps/${te}`);
              },
              required: !0
            }
          ) }),
          /* @__PURE__ */ f.jsx(Ko, { label: "Application Directory", hint: "Root path containing package.json and entrypoint", children: /* @__PURE__ */ f.jsx(
            co,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "/opt/hostpanel/data/apps/my-app",
              value: b,
              onChange: (D) => C(D.target.value),
              required: !0
            }
          ) }),
          /* @__PURE__ */ f.jsxs(tt, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
            /* @__PURE__ */ f.jsx(Ko, { label: "Node.js Version", hint: "Installed runtime", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsxs(
              ks,
              {
                fullWidth: !0,
                size: "small",
                value: y,
                onChange: (D) => h(D.target.value),
                children: [
                  /* @__PURE__ */ f.jsx(Mr, { value: "18", children: "Node.js 18 LTS (Hydrogen)" }),
                  /* @__PURE__ */ f.jsx(Mr, { value: "20", children: "Node.js 20 LTS (Iron - Recommended)" }),
                  /* @__PURE__ */ f.jsx(Mr, { value: "22", children: "Node.js 22 LTS (Jod)" }),
                  /* @__PURE__ */ f.jsx(Mr, { value: "24", children: "Node.js 24 (Current)" })
                ]
              }
            ) }),
            /* @__PURE__ */ f.jsx(Ko, { label: "Start Script / Entrypoint", hint: "e.g. index.js or dist/server.js", sx: { flex: 1 }, children: /* @__PURE__ */ f.jsx(
              co,
              {
                fullWidth: !0,
                size: "small",
                placeholder: "index.js",
                value: S,
                onChange: (D) => w(D.target.value),
                required: !0
              }
            ) })
          ] }),
          /* @__PURE__ */ f.jsx(Ko, { label: "Port Assignment (31000–31999)", hint: "Set to 0 for automatic port allocation", children: /* @__PURE__ */ f.jsx(
            co,
            {
              fullWidth: !0,
              size: "small",
              placeholder: "0 (Auto-allocate next free port in 31000-31999)",
              value: E,
              onChange: (D) => k(D.target.value)
            }
          ) }),
          /* @__PURE__ */ f.jsx(Ko, { label: "Environment Variables", hint: "KEY=VALUE format, one per line", children: /* @__PURE__ */ f.jsx(
            co,
            {
              fullWidth: !0,
              multiline: !0,
              rows: 4,
              size: "small",
              value: R,
              onChange: (D) => T(D.target.value),
              slotProps: {
                input: {
                  sx: { fontFamily: Xn, fontSize: "0.8125rem" }
                }
              }
            }
          ) }),
          /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { mt: 1 }, children: [
            /* @__PURE__ */ f.jsx(
              Dt,
              {
                type: "submit",
                variant: "contained",
                color: "primary",
                disabled: A || !d,
                startIcon: A ? /* @__PURE__ */ f.jsx(ii, { size: 16 }) : /* @__PURE__ */ f.jsx(Gg, {}),
                children: A ? "Deploying Application…" : "Deploy Application"
              }
            ),
            /* @__PURE__ */ f.jsx(Dt, { variant: "outlined", onClick: () => n(0), children: "Cancel" })
          ] })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ f.jsxs(We, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsx(tt, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2.5 }, children: /* @__PURE__ */ f.jsxs(We, { children: [
          /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Node.js Runtimes Manager" }),
          /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.8125rem", color: "text.secondary" }, children: "Isolated standalone binaries under /opt/hostpanel/runtimes/node/" })
        ] }) }),
        /* @__PURE__ */ f.jsx(We, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }, children: [
          { major: "18", title: "Node.js 18 LTS (Hydrogen)", status: "Active LTS", desc: "Stable for legacy frameworks and LTS maintenance" },
          { major: "20", title: "Node.js 20 LTS (Iron)", status: "Recommended LTS", desc: "Default runtime for HostPanel applications" },
          { major: "22", title: "Node.js 22 LTS (Jod)", status: "Latest LTS", desc: "Modern V8 engine with native WebSocket & fetch" },
          { major: "24", title: "Node.js 24 (Current)", status: "Current", desc: "Cutting edge features and latest ECMAScript syntax" }
        ].map((D) => {
          const te = c.find((Xt) => Xt.major === D.major), Pe = te ? !!te.installed : !1, ft = l.filter((Xt) => Xt.node_version === D.major).length;
          return /* @__PURE__ */ f.jsx(Zi, { variant: "outlined", sx: { borderRadius: 2 }, children: /* @__PURE__ */ f.jsxs(Ji, { sx: { p: 2.5 }, children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { justifyContent: "space-between", alignItems: "flex-start", mb: 1 }, children: [
              /* @__PURE__ */ f.jsxs(We, { children: [
                /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 700, fontSize: "1rem" }, children: D.title }),
                /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.75rem", color: "text.secondary", mt: 0.25 }, children: D.desc })
              ] }),
              /* @__PURE__ */ f.jsx(
                Vo,
                {
                  size: "small",
                  label: Pe ? "Installed" : "Available",
                  color: Pe ? "success" : "default",
                  variant: "outlined"
                }
              )
            ] }),
            /* @__PURE__ */ f.jsx(AP, { sx: { my: 1.5 } }),
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 3, sx: { mb: 2 }, children: [
              /* @__PURE__ */ f.jsx(uo, { label: "Binary Path", value: `/opt/hostpanel/runtimes/node/v${D.major}/bin/node` }),
              /* @__PURE__ */ f.jsx(uo, { label: "Active Apps", value: `${ft} Apps`, mono: !1 })
            ] }),
            /* @__PURE__ */ f.jsx(tt, { direction: "row", spacing: 1, children: Pe ? /* @__PURE__ */ f.jsx(
              Dt,
              {
                size: "small",
                variant: "outlined",
                color: "error",
                disabled: ft > 0,
                onClick: () => Wn(D.major),
                children: ft > 0 ? "In Use by Apps" : "Remove"
              }
            ) : /* @__PURE__ */ f.jsxs(
              Dt,
              {
                size: "small",
                variant: "contained",
                onClick: () => {
                  P(D.major), $(!1), B([]), g(!0);
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
      t === 3 && /* @__PURE__ */ f.jsxs(We, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsxs(
          tt,
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
              /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 600, fontSize: "0.875rem" }, children: "Application:" }),
                /* @__PURE__ */ f.jsx(
                  ks,
                  {
                    size: "small",
                    value: J,
                    onChange: (D) => ie(D.target.value),
                    sx: { minWidth: 200 },
                    children: l.map((D) => /* @__PURE__ */ f.jsxs(Mr, { value: D.name, children: [
                      D.name,
                      " (",
                      D.status,
                      ")"
                    ] }, D.name))
                  }
                ),
                /* @__PURE__ */ f.jsxs(
                  ks,
                  {
                    size: "small",
                    value: Ce,
                    onChange: (D) => Te(D.target.value),
                    children: [
                      /* @__PURE__ */ f.jsx(Mr, { value: "all", children: "All (Stdout + Stderr)" }),
                      /* @__PURE__ */ f.jsx(Mr, { value: "out", children: "Stdout Only" }),
                      /* @__PURE__ */ f.jsx(Mr, { value: "err", children: "Stderr Only" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1, children: [
                /* @__PURE__ */ f.jsx(
                  Dt,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ f.jsx(Hg, {}),
                    onClick: () => ze(J, ge, Ce),
                    children: "Refresh"
                  }
                ),
                /* @__PURE__ */ f.jsx(
                  Dt,
                  {
                    size: "small",
                    variant: "outlined",
                    color: "secondary",
                    onClick: () => Le([]),
                    children: "Clear"
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ f.jsx(qg, { lines: ae, running: Ue })
      ] }),
      t === 4 && /* @__PURE__ */ f.jsxs(We, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f.jsx(Re, { sx: { fontWeight: 700, fontSize: "1.125rem", mb: 0.5 }, children: "100% HostPanel Isolation Architecture" }),
        /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 3 }, children: "Strict isolation under /opt/hostpanel. No scatter into system /var, /etc, or /tmp." }),
        /* @__PURE__ */ f.jsxs(We, { sx: { display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }, children: [
          /* @__PURE__ */ f.jsx(Vu, { label: "Filesystem Sandboxes (/opt/hostpanel)", padded: !1, children: /* @__PURE__ */ f.jsxs(Ng, { size: "small", children: [
            /* @__PURE__ */ f.jsx(Fg, { children: /* @__PURE__ */ f.jsxs(ns, { children: [
              /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Sandbox Purpose" }),
              /* @__PURE__ */ f.jsx(Mt, { sx: { fontWeight: 600, fontSize: "0.75rem" }, children: "Enforced Path" })
            ] }) }),
            /* @__PURE__ */ f.jsx(Dg, { children: [
              { purpose: "Node Runtime Binaries", path: "/opt/hostpanel/runtimes/node/" },
              { purpose: "Application Data & Roots", path: "/opt/hostpanel/data/apps/" },
              { purpose: "Configuration & Env Files", path: "/opt/hostpanel/etc/nodejs/" },
              { purpose: "Application Logs", path: "/opt/hostpanel/logs/nodejs/" },
              { purpose: "Daemon & App PIDs", path: "/opt/hostpanel/run/nodejs/" },
              { purpose: "Reverse Proxy Ports", path: "31000 – 31999 (Allocated)" }
            ].map((D) => /* @__PURE__ */ f.jsxs(ns, { children: [
              /* @__PURE__ */ f.jsx(Mt, { sx: { fontSize: "0.8125rem" }, children: D.purpose }),
              /* @__PURE__ */ f.jsx(Mt, { sx: { fontFamily: Xn, fontSize: "0.75rem", color: "text.secondary" }, children: D.path })
            ] }, D.path)) })
          ] }) }),
          /* @__PURE__ */ f.jsx(Vu, { label: "System Daemon & Security Grant", padded: !0, children: /* @__PURE__ */ f.jsxs(tt, { spacing: 2, children: [
            /* @__PURE__ */ f.jsx(uo, { label: "Service Unit", value: "hostpanel-nodejsd.service" }),
            /* @__PURE__ */ f.jsx(uo, { label: "Service Linux User", value: "hp-nodejs (Unprivileged)" }),
            /* @__PURE__ */ f.jsx(uo, { label: "Service Daemon Binding", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ f.jsx(uo, { label: "Privileged Root Ops Helper", value: "/opt/hostpanel/packages/nodejs/ops/hp-nodejs" }),
            /* @__PURE__ */ f.jsx(uo, { label: "Sudoers Rule", value: "hp-nodejs ALL=(root) NOPASSWD: /opt/hostpanel/packages/nodejs/ops/hp-nodejs *" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(
      KP,
      {
        anchor: "right",
        open: W,
        onClose: () => _(!1),
        slotProps: { paper: { sx: { width: { xs: "100%", sm: 520 }, p: 3 } } },
        children: [
          /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
            /* @__PURE__ */ f.jsxs(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
              "Environment Variables: ",
              Q
            ] }),
            /* @__PURE__ */ f.jsx(Ln, { size: "small", onClick: () => _(!1), children: /* @__PURE__ */ f.jsx(Xg, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsx(Re, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: "Variables are injected into the application process on startup. Format: KEY=VALUE (one per line)." }),
          /* @__PURE__ */ f.jsx(
            co,
            {
              fullWidth: !0,
              multiline: !0,
              rows: 16,
              value: q,
              onChange: (D) => G(D.target.value),
              placeholder: `PORT=31000
NODE_ENV=production
DATABASE_URL=mongodb://localhost:27017/app`,
              slotProps: {
                input: {
                  sx: { fontFamily: Xn, fontSize: "0.8125rem" }
                }
              },
              sx: { mb: 3 }
            }
          ),
          /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1.5, children: [
            /* @__PURE__ */ f.jsx(
              Dt,
              {
                variant: "contained",
                color: "primary",
                onClick: De,
                disabled: X,
                startIcon: X ? /* @__PURE__ */ f.jsx(ii, { size: 16 }) : /* @__PURE__ */ f.jsx(Gg, {}),
                children: X ? "Saving…" : "Save Variables"
              }
            ),
            /* @__PURE__ */ f.jsx(Dt, { variant: "outlined", onClick: () => _(!1), children: "Cancel" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(
      mg,
      {
        open: I,
        onClose: () => !j && g(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ f.jsxs(yg, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsxs(tt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsx(Hu, { sx: { color: "primary.main" } }),
              /* @__PURE__ */ f.jsxs(Re, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: [
                "Install Node.js v",
                M,
                " Runtime"
              ] })
            ] }),
            /* @__PURE__ */ f.jsx(Ln, { size: "small", onClick: () => g(!1), disabled: j, children: /* @__PURE__ */ f.jsx(Xg, { sx: { fontSize: 18 } }) })
          ] }),
          /* @__PURE__ */ f.jsxs(gg, { dividers: !0, children: [
            /* @__PURE__ */ f.jsxs(Re, { sx: { fontSize: "0.8125rem", color: "text.secondary", mb: 2 }, children: [
              "Downloads and provisions standalone Node.js and NPM binaries into ",
              /* @__PURE__ */ f.jsxs("code", { children: [
                "/opt/hostpanel/runtimes/node/v",
                M,
                "/"
              ] }),
              "."
            ] }),
            /* @__PURE__ */ f.jsx(tt, { direction: "row", spacing: 1, sx: { alignItems: "center", mb: 2 }, children: /* @__PURE__ */ f.jsx(
              Vo,
              {
                icon: /* @__PURE__ */ f.jsx(Hu, { sx: { fontSize: 16 } }),
                label: `Target Runtime: Node.js v${M}`,
                color: "primary",
                variant: "outlined",
                sx: { fontWeight: 600 }
              }
            ) }),
            N && /* @__PURE__ */ f.jsxs(Qh, { severity: "success", sx: { mb: 2 }, children: [
              "Node.js v",
              M,
              " runtime was successfully installed and verified!"
            ] }),
            z.length > 0 ? /* @__PURE__ */ f.jsx(We, { sx: { mt: 1 }, children: /* @__PURE__ */ f.jsx(qg, { lines: z, running: j }) }) : /* @__PURE__ */ f.jsx(We, { sx: { p: 2.5, bgcolor: "background.default", borderRadius: 1.5, textAlign: "center" }, children: /* @__PURE__ */ f.jsxs(Re, { sx: { fontSize: "0.875rem", color: "text.secondary" }, children: [
              "Ready to download and install ",
              /* @__PURE__ */ f.jsxs("strong", { children: [
                "Node.js v",
                M
              ] }),
              ". Click below to begin live execution."
            ] }) })
          ] }),
          /* @__PURE__ */ f.jsx(hg, { sx: { p: 2 }, children: N ? /* @__PURE__ */ f.jsx(
            Dt,
            {
              variant: "contained",
              color: "primary",
              onClick: () => {
                g(!1), $(!1);
              },
              children: "Done"
            }
          ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            /* @__PURE__ */ f.jsx(Dt, { onClick: () => g(!1), disabled: j, children: "Cancel" }),
            /* @__PURE__ */ f.jsx(
              Dt,
              {
                variant: "contained",
                color: "primary",
                onClick: () => ke(M),
                disabled: j,
                startIcon: j ? /* @__PURE__ */ f.jsx(ii, { size: 16 }) : /* @__PURE__ */ f.jsx(Yg, {}),
                children: j ? "Installing…" : `Start Installation (Node ${M})`
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ f.jsxs(mg, { open: !!we, onClose: () => $e(null), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ f.jsx(yg, { sx: { fontWeight: 700, fontSize: "1.125rem" }, children: "Delete Application?" }),
      /* @__PURE__ */ f.jsx(gg, { children: /* @__PURE__ */ f.jsxs(Re, { sx: { fontSize: "0.875rem" }, children: [
        "Are you sure you want to stop and delete application ",
        /* @__PURE__ */ f.jsx("strong", { children: we }),
        "? This will remove its daemon configuration and process state."
      ] }) }),
      /* @__PURE__ */ f.jsxs(hg, { sx: { p: 2 }, children: [
        /* @__PURE__ */ f.jsx(Dt, { onClick: () => $e(null), disabled: ue, children: "Cancel" }),
        /* @__PURE__ */ f.jsx(
          Dt,
          {
            variant: "contained",
            color: "error",
            onClick: oe,
            disabled: ue,
            children: ue ? "Deleting…" : "Delete Application"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(
      _M,
      {
        open: !!Xe,
        autoHideDuration: 4e3,
        onClose: () => Ne(null),
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        children: Xe ? /* @__PURE__ */ f.jsx(Qh, { severity: Xe.severity, onClose: () => Ne(null), children: Xe.message }) : void 0
      }
    )
  ] });
}
let Ya = null;
function t$(e, t) {
  Ya = f0(e), Ya.render(
    /* @__PURE__ */ f.jsx(m.StrictMode, { children: /* @__PURE__ */ f.jsx(J5, { ctx: t }) })
  );
}
function n$() {
  const e = Ya;
  Ya = null, e && queueMicrotask(() => e.unmount());
}
const o$ = { mount: t$, unmount: n$ };
export {
  o$ as default,
  t$ as mount,
  n$ as unmount
};
//# sourceMappingURL=main.js.map
