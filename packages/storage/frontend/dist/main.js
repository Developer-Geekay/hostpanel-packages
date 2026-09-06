var cx = Object.defineProperty;
var ux = (e, t, n) => t in e ? cx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Hi = (e, t, n) => ux(e, typeof t != "symbol" ? t + "" : t, n);
function dx(e, t) {
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
function fx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ry = { exports: {} }, tc = {}, oy = { exports: {} }, je = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nl = Symbol.for("react.element"), px = Symbol.for("react.portal"), mx = Symbol.for("react.fragment"), hx = Symbol.for("react.strict_mode"), gx = Symbol.for("react.profiler"), yx = Symbol.for("react.provider"), vx = Symbol.for("react.context"), xx = Symbol.for("react.forward_ref"), Sx = Symbol.for("react.suspense"), bx = Symbol.for("react.memo"), wx = Symbol.for("react.lazy"), am = Symbol.iterator;
function Cx(e) {
  return e === null || typeof e != "object" ? null : (e = am && e[am] || e["@@iterator"], typeof e == "function" ? e : null);
}
var iy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, sy = Object.assign, ly = {};
function zi(e, t, n) {
  this.props = e, this.context = t, this.refs = ly, this.updater = n || iy;
}
zi.prototype.isReactComponent = {};
zi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ay() {
}
ay.prototype = zi.prototype;
function kf(e, t, n) {
  this.props = e, this.context = t, this.refs = ly, this.updater = n || iy;
}
var Tf = kf.prototype = new ay();
Tf.constructor = kf;
sy(Tf, zi.prototype);
Tf.isPureReactComponent = !0;
var cm = Array.isArray, cy = Object.prototype.hasOwnProperty, Ef = { current: null }, uy = { key: !0, ref: !0, __self: !0, __source: !0 };
function dy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) cy.call(t, r) && !uy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: nl, type: e, key: i, ref: s, props: o, _owner: Ef.current };
}
function kx(e, t) {
  return { $$typeof: nl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Rf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function Tx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var um = /\/+/g;
function pu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Tx("" + e.key) : t.toString(36);
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
        case nl:
        case px:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + pu(s, 0) : r, cm(o) ? (n = "", e != null && (n = e.replace(um, "$&/") + "/"), Xl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Rf(o) && (o = kx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(um, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", cm(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + pu(i, l);
    s += Xl(i, t, n, a, o);
  }
  else if (a = Cx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + pu(i, l++), s += Xl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function yl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Xl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Ex(e) {
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
var qt = { current: null }, Ql = { transition: null }, Rx = { ReactCurrentDispatcher: qt, ReactCurrentBatchConfig: Ql, ReactCurrentOwner: Ef };
function fy() {
  throw Error("act(...) is not supported in production builds of React.");
}
je.Children = { map: yl, forEach: function(e, t, n) {
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
  if (!Rf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
je.Component = zi;
je.Fragment = mx;
je.Profiler = gx;
je.PureComponent = kf;
je.StrictMode = hx;
je.Suspense = Sx;
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rx;
je.act = fy;
je.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = sy({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Ef.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) cy.call(t, a) && !uy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: nl, type: e.type, key: o, ref: i, props: r, _owner: s };
};
je.createContext = function(e) {
  return e = { $$typeof: vx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yx, _context: e }, e.Consumer = e;
};
je.createElement = dy;
je.createFactory = function(e) {
  var t = dy.bind(null, e);
  return t.type = e, t;
};
je.createRef = function() {
  return { current: null };
};
je.forwardRef = function(e) {
  return { $$typeof: xx, render: e };
};
je.isValidElement = Rf;
je.lazy = function(e) {
  return { $$typeof: wx, _payload: { _status: -1, _result: e }, _init: Ex };
};
je.memo = function(e, t) {
  return { $$typeof: bx, type: e, compare: t === void 0 ? null : t };
};
je.startTransition = function(e) {
  var t = Ql.transition;
  Ql.transition = {};
  try {
    e();
  } finally {
    Ql.transition = t;
  }
};
je.unstable_act = fy;
je.useCallback = function(e, t) {
  return qt.current.useCallback(e, t);
};
je.useContext = function(e) {
  return qt.current.useContext(e);
};
je.useDebugValue = function() {
};
je.useDeferredValue = function(e) {
  return qt.current.useDeferredValue(e);
};
je.useEffect = function(e, t) {
  return qt.current.useEffect(e, t);
};
je.useId = function() {
  return qt.current.useId();
};
je.useImperativeHandle = function(e, t, n) {
  return qt.current.useImperativeHandle(e, t, n);
};
je.useInsertionEffect = function(e, t) {
  return qt.current.useInsertionEffect(e, t);
};
je.useLayoutEffect = function(e, t) {
  return qt.current.useLayoutEffect(e, t);
};
je.useMemo = function(e, t) {
  return qt.current.useMemo(e, t);
};
je.useReducer = function(e, t, n) {
  return qt.current.useReducer(e, t, n);
};
je.useRef = function(e) {
  return qt.current.useRef(e);
};
je.useState = function(e) {
  return qt.current.useState(e);
};
je.useSyncExternalStore = function(e, t, n) {
  return qt.current.useSyncExternalStore(e, t, n);
};
je.useTransition = function() {
  return qt.current.useTransition();
};
je.version = "18.3.1";
oy.exports = je;
var h = oy.exports;
const py = /* @__PURE__ */ fx(h), ha = /* @__PURE__ */ dx({
  __proto__: null,
  default: py
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
var Px = h, Ix = Symbol.for("react.element"), Mx = Symbol.for("react.fragment"), jx = Object.prototype.hasOwnProperty, $x = Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ox = { key: !0, ref: !0, __self: !0, __source: !0 };
function my(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) jx.call(t, r) && !Ox.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Ix, type: e, key: i, ref: s, props: o, _owner: $x.current };
}
tc.Fragment = Mx;
tc.jsx = my;
tc.jsxs = my;
ry.exports = tc;
var c = ry.exports, hy = { exports: {} }, yn = {}, gy = { exports: {} }, yy = {};
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
    var F = $.length;
    $.push(z);
    e: for (; 0 < F; ) {
      var H = F - 1 >>> 1, D = $[H];
      if (0 < o(D, z)) $[H] = z, $[F] = D, F = H;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var z = $[0], F = $.pop();
    if (F !== z) {
      $[0] = F;
      e: for (var H = 0, D = $.length, Z = D >>> 1; H < Z; ) {
        var V = 2 * (H + 1) - 1, Y = $[V], K = V + 1, Q = $[K];
        if (0 > o(Y, F)) K < D && 0 > o(Q, Y) ? ($[H] = Q, $[K] = F, H = K) : ($[H] = Y, $[V] = F, H = V);
        else if (K < D && 0 > o(Q, F)) $[H] = Q, $[K] = F, H = K;
        else break e;
      }
    }
    return z;
  }
  function o($, z) {
    var F = $.sortIndex - z.sortIndex;
    return F !== 0 ? F : $.id - z.id;
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
  var a = [], u = [], f = 1, m = null, y = 3, d = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S($) {
    for (var z = n(u); z !== null; ) {
      if (z.callback === null) r(u);
      else if (z.startTime <= $) r(u), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(u);
    }
  }
  function w($) {
    if (b = !1, S($), !x) if (n(a) !== null) x = !0, A(T);
    else {
      var z = n(u);
      z !== null && N(w, z.startTime - $);
    }
  }
  function T($, z) {
    x = !1, b && (b = !1, v(R), R = -1), d = !0;
    var F = y;
    try {
      for (S(z), m = n(a); m !== null && (!(m.expirationTime > z) || $ && !M()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, y = m.priorityLevel;
          var D = H(m.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? m.callback = D : m === n(a) && r(a), S(z);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Z = !0;
      else {
        var V = n(u);
        V !== null && N(w, V.startTime - z), Z = !1;
      }
      return Z;
    } finally {
      m = null, y = F, d = !1;
    }
  }
  var k = !1, E = null, R = -1, I = 5, L = -1;
  function M() {
    return !(e.unstable_now() - L < I);
  }
  function g() {
    if (E !== null) {
      var $ = e.unstable_now();
      L = $;
      var z = !0;
      try {
        z = E(!0, $);
      } finally {
        z ? j() : (k = !1, E = null);
      }
    } else k = !1;
  }
  var j;
  if (typeof p == "function") j = function() {
    p(g);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), O = P.port2;
    P.port1.onmessage = g, j = function() {
      O.postMessage(null);
    };
  } else j = function() {
    C(g, 0);
  };
  function A($) {
    E = $, k || (k = !0, j());
  }
  function N($, z) {
    R = C(function() {
      $(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    x || d || (x = !0, A(T));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return y;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
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
      return $();
    } finally {
      y = F;
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
    var F = y;
    y = $;
    try {
      return z();
    } finally {
      y = F;
    }
  }, e.unstable_scheduleCallback = function($, z, F) {
    var H = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? H + F : H) : F = H, $) {
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
    return D = F + D, $ = { id: f++, callback: z, priorityLevel: $, startTime: F, expirationTime: D, sortIndex: -1 }, F > H ? ($.sortIndex = F, t(u, $), n(a) === null && $ === n(u) && (b ? (v(R), R = -1) : b = !0, N(w, F - H))) : ($.sortIndex = D, t(a, $), x || d || (x = !0, A(T))), $;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function($) {
    var z = y;
    return function() {
      var F = y;
      y = z;
      try {
        return $.apply(this, arguments);
      } finally {
        y = F;
      }
    };
  };
})(yy);
gy.exports = yy;
var Ax = gy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lx = h, hn = Ax;
function G(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var vy = /* @__PURE__ */ new Set(), Ms = {};
function zo(e, t) {
  ki(e, t), ki(e + "Capture", t);
}
function ki(e, t) {
  for (Ms[e] = t, e = 0; e < t.length; e++) vy.add(t[e]);
}
var Tr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), od = Object.prototype.hasOwnProperty, Nx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, dm = {}, fm = {};
function Bx(e) {
  return od.call(fm, e) ? !0 : od.call(dm, e) ? !1 : Nx.test(e) ? fm[e] = !0 : (dm[e] = !0, !1);
}
function zx(e, t, n, r) {
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
function _x(e, t, n, r) {
  if (t === null || typeof t > "u" || zx(e, t, n, r)) return !0;
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
var zt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  zt[e] = new Zt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  zt[t] = new Zt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  zt[e] = new Zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  zt[e] = new Zt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  zt[e] = new Zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  zt[e] = new Zt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  zt[e] = new Zt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  zt[e] = new Zt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  zt[e] = new Zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Pf = /[\-:]([a-z])/g;
function If(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Pf,
    If
  );
  zt[t] = new Zt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Pf, If);
  zt[t] = new Zt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Pf, If);
  zt[t] = new Zt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  zt[e] = new Zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
zt.xlinkHref = new Zt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  zt[e] = new Zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mf(e, t, n, r) {
  var o = zt.hasOwnProperty(t) ? zt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_x(t, n, o, r) && (n = null), r || o === null ? Bx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $r = Lx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vl = Symbol.for("react.element"), ni = Symbol.for("react.portal"), ri = Symbol.for("react.fragment"), jf = Symbol.for("react.strict_mode"), id = Symbol.for("react.profiler"), xy = Symbol.for("react.provider"), Sy = Symbol.for("react.context"), $f = Symbol.for("react.forward_ref"), sd = Symbol.for("react.suspense"), ld = Symbol.for("react.suspense_list"), Of = Symbol.for("react.memo"), Br = Symbol.for("react.lazy"), by = Symbol.for("react.offscreen"), pm = Symbol.iterator;
function Vi(e) {
  return e === null || typeof e != "object" ? null : (e = pm && e[pm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var gt = Object.assign, mu;
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
    hu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ls(e) : "";
}
function Fx(e) {
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
function ad(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ri:
      return "Fragment";
    case ni:
      return "Portal";
    case id:
      return "Profiler";
    case jf:
      return "StrictMode";
    case sd:
      return "Suspense";
    case ld:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Sy:
      return (e.displayName || "Context") + ".Consumer";
    case xy:
      return (e._context.displayName || "Context") + ".Provider";
    case $f:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Of:
      return t = e.displayName || null, t !== null ? t : ad(e.type) || "Memo";
    case Br:
      t = e._payload, e = e._init;
      try {
        return ad(e(t));
      } catch {
      }
  }
  return null;
}
function Dx(e) {
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
      return ad(t);
    case 8:
      return t === jf ? "StrictMode" : "Mode";
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
function Zr(e) {
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
function wy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Wx(e) {
  var t = wy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Wx(e));
}
function Cy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = wy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ga(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cd(e, t) {
  var n = t.checked;
  return gt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function mm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Zr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ky(e, t) {
  t = t.checked, t != null && Mf(e, "checked", t, !1);
}
function ud(e, t) {
  ky(e, t);
  var n = Zr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? dd(e, t.type, n) : t.hasOwnProperty("defaultValue") && dd(e, t.type, Zr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function hm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function dd(e, t, n) {
  (t !== "number" || ga(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var as = Array.isArray;
function hi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function fd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return gt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(G(92));
      if (as(n)) {
        if (1 < n.length) throw Error(G(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Zr(n) };
}
function Ty(e, t) {
  var n = Zr(t.value), r = Zr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ym(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ey(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ey(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sl, Ry = function(e) {
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
function js(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ms = {
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
}, Ux = ["Webkit", "ms", "Moz", "O"];
Object.keys(ms).forEach(function(e) {
  Ux.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ms[t] = ms[e];
  });
});
function Py(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ms.hasOwnProperty(e) && ms[e] ? ("" + t).trim() : t + "px";
}
function Iy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Py(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Hx = gt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function md(e, t) {
  if (t) {
    if (Hx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(G(62));
  }
}
function hd(e, t) {
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
var gd = null;
function Af(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var yd = null, gi = null, yi = null;
function vm(e) {
  if (e = il(e)) {
    if (typeof yd != "function") throw Error(G(280));
    var t = e.stateNode;
    t && (t = sc(t), yd(e.stateNode, e.type, t));
  }
}
function My(e) {
  gi ? yi ? yi.push(e) : yi = [e] : gi = e;
}
function jy() {
  if (gi) {
    var e = gi, t = yi;
    if (yi = gi = null, vm(e), t) for (e = 0; e < t.length; e++) vm(t[e]);
  }
}
function $y(e, t) {
  return e(t);
}
function Oy() {
}
var yu = !1;
function Ay(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return $y(e, t, n);
  } finally {
    yu = !1, (gi !== null || yi !== null) && (Oy(), jy());
  }
}
function $s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sc(n);
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
  if (n && typeof n != "function") throw Error(G(231, t, typeof n));
  return n;
}
var vd = !1;
if (Tr) try {
  var Ki = {};
  Object.defineProperty(Ki, "passive", { get: function() {
    vd = !0;
  } }), window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
} catch {
  vd = !1;
}
function Vx(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var hs = !1, ya = null, va = !1, xd = null, Kx = { onError: function(e) {
  hs = !0, ya = e;
} };
function Yx(e, t, n, r, o, i, s, l, a) {
  hs = !1, ya = null, Vx.apply(Kx, arguments);
}
function Gx(e, t, n, r, o, i, s, l, a) {
  if (Yx.apply(this, arguments), hs) {
    if (hs) {
      var u = ya;
      hs = !1, ya = null;
    } else throw Error(G(198));
    va || (va = !0, xd = u);
  }
}
function _o(e) {
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
function Ly(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xm(e) {
  if (_o(e) !== e) throw Error(G(188));
}
function Xx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = _o(e), t === null) throw Error(G(188));
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
        if (i === n) return xm(o), e;
        if (i === r) return xm(o), t;
        i = i.sibling;
      }
      throw Error(G(188));
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
        if (!s) throw Error(G(189));
      }
    }
    if (n.alternate !== r) throw Error(G(190));
  }
  if (n.tag !== 3) throw Error(G(188));
  return n.stateNode.current === n ? e : t;
}
function Ny(e) {
  return e = Xx(e), e !== null ? By(e) : null;
}
function By(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = By(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zy = hn.unstable_scheduleCallback, Sm = hn.unstable_cancelCallback, Qx = hn.unstable_shouldYield, qx = hn.unstable_requestPaint, wt = hn.unstable_now, Zx = hn.unstable_getCurrentPriorityLevel, Lf = hn.unstable_ImmediatePriority, _y = hn.unstable_UserBlockingPriority, xa = hn.unstable_NormalPriority, Jx = hn.unstable_LowPriority, Fy = hn.unstable_IdlePriority, nc = null, ir = null;
function eS(e) {
  if (ir && typeof ir.onCommitFiberRoot == "function") try {
    ir.onCommitFiberRoot(nc, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Wn = Math.clz32 ? Math.clz32 : rS, tS = Math.log, nS = Math.LN2;
function rS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (tS(e) / nS | 0) | 0;
}
var bl = 64, wl = 4194304;
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
function Sa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = cs(l) : (i &= s, i !== 0 && (r = cs(i)));
  } else s = n & ~o, s !== 0 ? r = cs(s) : i !== 0 && (r = cs(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Wn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function oS(e, t) {
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
function iS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Wn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = oS(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function Sd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dy() {
  var e = bl;
  return bl <<= 1, !(bl & 4194240) && (bl = 64), e;
}
function vu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Wn(t), e[t] = n;
}
function sS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Wn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Nf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Wn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ye = 0;
function Wy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Uy, Bf, Hy, Vy, Ky, bd = !1, Cl = [], Ur = null, Hr = null, Vr = null, Os = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), _r = [], lS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ur = null;
      break;
    case "dragenter":
    case "dragleave":
      Hr = null;
      break;
    case "mouseover":
    case "mouseout":
      Vr = null;
      break;
    case "pointerover":
    case "pointerout":
      Os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      As.delete(t.pointerId);
  }
}
function Yi(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = il(t), t !== null && Bf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function aS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Ur = Yi(Ur, e, t, n, r, o), !0;
    case "dragenter":
      return Hr = Yi(Hr, e, t, n, r, o), !0;
    case "mouseover":
      return Vr = Yi(Vr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Os.set(i, Yi(Os.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, As.set(i, Yi(As.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Yy(e) {
  var t = wo(e.target);
  if (t !== null) {
    var n = _o(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ly(n), t !== null) {
          e.blockedOn = t, Ky(e.priority, function() {
            Hy(n);
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
function ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      gd = r, n.target.dispatchEvent(r), gd = null;
    } else return t = il(n), t !== null && Bf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wm(e, t, n) {
  ql(e) && n.delete(t);
}
function cS() {
  bd = !1, Ur !== null && ql(Ur) && (Ur = null), Hr !== null && ql(Hr) && (Hr = null), Vr !== null && ql(Vr) && (Vr = null), Os.forEach(wm), As.forEach(wm);
}
function Gi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bd || (bd = !0, hn.unstable_scheduleCallback(hn.unstable_NormalPriority, cS)));
}
function Ls(e) {
  function t(o) {
    return Gi(o, e);
  }
  if (0 < Cl.length) {
    Gi(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ur !== null && Gi(Ur, e), Hr !== null && Gi(Hr, e), Vr !== null && Gi(Vr, e), Os.forEach(t), As.forEach(t), n = 0; n < _r.length; n++) r = _r[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _r.length && (n = _r[0], n.blockedOn === null); ) Yy(n), n.blockedOn === null && _r.shift();
}
var vi = $r.ReactCurrentBatchConfig, ba = !0;
function uS(e, t, n, r) {
  var o = Ye, i = vi.transition;
  vi.transition = null;
  try {
    Ye = 1, zf(e, t, n, r);
  } finally {
    Ye = o, vi.transition = i;
  }
}
function dS(e, t, n, r) {
  var o = Ye, i = vi.transition;
  vi.transition = null;
  try {
    Ye = 4, zf(e, t, n, r);
  } finally {
    Ye = o, vi.transition = i;
  }
}
function zf(e, t, n, r) {
  if (ba) {
    var o = wd(e, t, n, r);
    if (o === null) Pu(e, t, r, wa, n), bm(e, r);
    else if (aS(o, e, t, n, r)) r.stopPropagation();
    else if (bm(e, r), t & 4 && -1 < lS.indexOf(e)) {
      for (; o !== null; ) {
        var i = il(o);
        if (i !== null && Uy(i), i = wd(e, t, n, r), i === null && Pu(e, t, r, wa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pu(e, t, r, null, n);
  }
}
var wa = null;
function wd(e, t, n, r) {
  if (wa = null, e = Af(r), e = wo(e), e !== null) if (t = _o(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ly(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return wa = e, null;
}
function Gy(e) {
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
      switch (Zx()) {
        case Lf:
          return 1;
        case _y:
          return 4;
        case xa:
        case Jx:
          return 16;
        case Fy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dr = null, _f = null, Zl = null;
function Xy() {
  if (Zl) return Zl;
  var e, t = _f, n = t.length, r, o = "value" in Dr ? Dr.value : Dr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Zl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Jl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kl() {
  return !0;
}
function Cm() {
  return !1;
}
function vn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? kl : Cm, this.isPropagationStopped = Cm, this;
  }
  return gt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kl);
  }, persist: function() {
  }, isPersistent: kl }), t;
}
var _i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ff = vn(_i), ol = gt({}, _i, { view: 0, detail: 0 }), fS = vn(ol), xu, Su, Xi, rc = gt({}, ol, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Df, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Xi && (Xi && e.type === "mousemove" ? (xu = e.screenX - Xi.screenX, Su = e.screenY - Xi.screenY) : Su = xu = 0, Xi = e), xu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Su;
} }), km = vn(rc), pS = gt({}, rc, { dataTransfer: 0 }), mS = vn(pS), hS = gt({}, ol, { relatedTarget: 0 }), bu = vn(hS), gS = gt({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yS = vn(gS), vS = gt({}, _i, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xS = vn(vS), SS = gt({}, _i, { data: 0 }), Tm = vn(SS), bS = {
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
}, wS = {
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
}, CS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = CS[e]) ? !!t[e] : !1;
}
function Df() {
  return kS;
}
var TS = gt({}, ol, { key: function(e) {
  if (e.key) {
    var t = bS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Jl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? wS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Df, charCode: function(e) {
  return e.type === "keypress" ? Jl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Jl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ES = vn(TS), RS = gt({}, rc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Em = vn(RS), PS = gt({}, ol, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Df }), IS = vn(PS), MS = gt({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), jS = vn(MS), $S = gt({}, rc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), OS = vn($S), AS = [9, 13, 27, 32], Wf = Tr && "CompositionEvent" in window, gs = null;
Tr && "documentMode" in document && (gs = document.documentMode);
var LS = Tr && "TextEvent" in window && !gs, Qy = Tr && (!Wf || gs && 8 < gs && 11 >= gs), Rm = " ", Pm = !1;
function qy(e, t) {
  switch (e) {
    case "keyup":
      return AS.indexOf(t.keyCode) !== -1;
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
function Zy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var oi = !1;
function NS(e, t) {
  switch (e) {
    case "compositionend":
      return Zy(t);
    case "keypress":
      return t.which !== 32 ? null : (Pm = !0, Rm);
    case "textInput":
      return e = t.data, e === Rm && Pm ? null : e;
    default:
      return null;
  }
}
function BS(e, t) {
  if (oi) return e === "compositionend" || !Wf && qy(e, t) ? (e = Xy(), Zl = _f = Dr = null, oi = !1, e) : null;
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
      return Qy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var zS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Im(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!zS[e.type] : t === "textarea";
}
function Jy(e, t, n, r) {
  My(r), t = Ca(t, "onChange"), 0 < t.length && (n = new Ff("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ys = null, Ns = null;
function _S(e) {
  uv(e, 0);
}
function oc(e) {
  var t = li(e);
  if (Cy(t)) return e;
}
function FS(e, t) {
  if (e === "change") return t;
}
var ev = !1;
if (Tr) {
  var wu;
  if (Tr) {
    var Cu = "oninput" in document;
    if (!Cu) {
      var Mm = document.createElement("div");
      Mm.setAttribute("oninput", "return;"), Cu = typeof Mm.oninput == "function";
    }
    wu = Cu;
  } else wu = !1;
  ev = wu && (!document.documentMode || 9 < document.documentMode);
}
function jm() {
  ys && (ys.detachEvent("onpropertychange", tv), Ns = ys = null);
}
function tv(e) {
  if (e.propertyName === "value" && oc(Ns)) {
    var t = [];
    Jy(t, Ns, e, Af(e)), Ay(_S, t);
  }
}
function DS(e, t, n) {
  e === "focusin" ? (jm(), ys = t, Ns = n, ys.attachEvent("onpropertychange", tv)) : e === "focusout" && jm();
}
function WS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return oc(Ns);
}
function US(e, t) {
  if (e === "click") return oc(t);
}
function HS(e, t) {
  if (e === "input" || e === "change") return oc(t);
}
function VS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Hn = typeof Object.is == "function" ? Object.is : VS;
function Bs(e, t) {
  if (Hn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!od.call(t, o) || !Hn(e[o], t[o])) return !1;
  }
  return !0;
}
function $m(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Om(e, t) {
  var n = $m(e);
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
    n = $m(n);
  }
}
function nv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? nv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rv() {
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
function Uf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function KS(e) {
  var t = rv(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && nv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Uf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = Om(n, i);
        var s = Om(
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
var YS = Tr && "documentMode" in document && 11 >= document.documentMode, ii = null, Cd = null, vs = null, kd = !1;
function Am(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  kd || ii == null || ii !== ga(r) || (r = ii, "selectionStart" in r && Uf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), vs && Bs(vs, r) || (vs = r, r = Ca(Cd, "onSelect"), 0 < r.length && (t = new Ff("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ii)));
}
function Tl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var si = { animationend: Tl("Animation", "AnimationEnd"), animationiteration: Tl("Animation", "AnimationIteration"), animationstart: Tl("Animation", "AnimationStart"), transitionend: Tl("Transition", "TransitionEnd") }, ku = {}, ov = {};
Tr && (ov = document.createElement("div").style, "AnimationEvent" in window || (delete si.animationend.animation, delete si.animationiteration.animation, delete si.animationstart.animation), "TransitionEvent" in window || delete si.transitionend.transition);
function ic(e) {
  if (ku[e]) return ku[e];
  if (!si[e]) return e;
  var t = si[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ov) return ku[e] = t[n];
  return e;
}
var iv = ic("animationend"), sv = ic("animationiteration"), lv = ic("animationstart"), av = ic("transitionend"), cv = /* @__PURE__ */ new Map(), Lm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function oo(e, t) {
  cv.set(e, t), zo(t, [e]);
}
for (var Tu = 0; Tu < Lm.length; Tu++) {
  var Eu = Lm[Tu], GS = Eu.toLowerCase(), XS = Eu[0].toUpperCase() + Eu.slice(1);
  oo(GS, "on" + XS);
}
oo(iv, "onAnimationEnd");
oo(sv, "onAnimationIteration");
oo(lv, "onAnimationStart");
oo("dblclick", "onDoubleClick");
oo("focusin", "onFocus");
oo("focusout", "onBlur");
oo(av, "onTransitionEnd");
ki("onMouseEnter", ["mouseout", "mouseover"]);
ki("onMouseLeave", ["mouseout", "mouseover"]);
ki("onPointerEnter", ["pointerout", "pointerover"]);
ki("onPointerLeave", ["pointerout", "pointerover"]);
zo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
zo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
zo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
zo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
zo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
zo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), QS = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
function Nm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Gx(r, t, void 0, e), e.currentTarget = null;
}
function uv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Nm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Nm(o, l, u), i = a;
      }
    }
  }
  if (va) throw e = xd, va = !1, xd = null, e;
}
function st(e, t) {
  var n = t[Id];
  n === void 0 && (n = t[Id] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (dv(t, e, 2, !1), n.add(r));
}
function Ru(e, t, n) {
  var r = 0;
  t && (r |= 4), dv(n, e, r, t);
}
var El = "_reactListening" + Math.random().toString(36).slice(2);
function zs(e) {
  if (!e[El]) {
    e[El] = !0, vy.forEach(function(n) {
      n !== "selectionchange" && (QS.has(n) || Ru(n, !1, e), Ru(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[El] || (t[El] = !0, Ru("selectionchange", !1, t));
  }
}
function dv(e, t, n, r) {
  switch (Gy(t)) {
    case 1:
      var o = uS;
      break;
    case 4:
      o = dS;
      break;
    default:
      o = zf;
  }
  n = o.bind(null, t, n, e), o = void 0, !vd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
        if (s = wo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Ay(function() {
    var u = i, f = Af(n), m = [];
    e: {
      var y = cv.get(e);
      if (y !== void 0) {
        var d = Ff, x = e;
        switch (e) {
          case "keypress":
            if (Jl(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = ES;
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
            d = km;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = mS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = IS;
            break;
          case iv:
          case sv:
          case lv:
            d = yS;
            break;
          case av:
            d = jS;
            break;
          case "scroll":
            d = fS;
            break;
          case "wheel":
            d = OS;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = xS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Em;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", v = b ? y !== null ? y + "Capture" : null : y;
        b = [];
        for (var p = u, S; p !== null; ) {
          S = p;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, v !== null && (w = $s(p, v), w != null && b.push(_s(p, w, S)))), C) break;
          p = p.return;
        }
        0 < b.length && (y = new d(y, x, null, n, f), m.push({ event: y, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (y = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", y && n !== gd && (x = n.relatedTarget || n.fromElement) && (wo(x) || x[Er])) break e;
        if ((d || y) && (y = f.window === f ? f : (y = f.ownerDocument) ? y.defaultView || y.parentWindow : window, d ? (x = n.relatedTarget || n.toElement, d = u, x = x ? wo(x) : null, x !== null && (C = _o(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (d = null, x = u), d !== x)) {
          if (b = km, w = "onMouseLeave", v = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (b = Em, w = "onPointerLeave", v = "onPointerEnter", p = "pointer"), C = d == null ? y : li(d), S = x == null ? y : li(x), y = new b(w, p + "leave", d, n, f), y.target = C, y.relatedTarget = S, w = null, wo(f) === u && (b = new b(v, p + "enter", x, n, f), b.target = S, b.relatedTarget = C, w = b), C = w, d && x) t: {
            for (b = d, v = x, p = 0, S = b; S; S = Vo(S)) p++;
            for (S = 0, w = v; w; w = Vo(w)) S++;
            for (; 0 < p - S; ) b = Vo(b), p--;
            for (; 0 < S - p; ) v = Vo(v), S--;
            for (; p--; ) {
              if (b === v || v !== null && b === v.alternate) break t;
              b = Vo(b), v = Vo(v);
            }
            b = null;
          }
          else b = null;
          d !== null && Bm(m, y, d, b, !1), x !== null && C !== null && Bm(m, C, x, b, !0);
        }
      }
      e: {
        if (y = u ? li(u) : window, d = y.nodeName && y.nodeName.toLowerCase(), d === "select" || d === "input" && y.type === "file") var T = FS;
        else if (Im(y)) if (ev) T = HS;
        else {
          T = WS;
          var k = DS;
        }
        else (d = y.nodeName) && d.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (T = US);
        if (T && (T = T(e, u))) {
          Jy(m, T, n, f);
          break e;
        }
        k && k(e, y, u), e === "focusout" && (k = y._wrapperState) && k.controlled && y.type === "number" && dd(y, "number", y.value);
      }
      switch (k = u ? li(u) : window, e) {
        case "focusin":
          (Im(k) || k.contentEditable === "true") && (ii = k, Cd = u, vs = null);
          break;
        case "focusout":
          vs = Cd = ii = null;
          break;
        case "mousedown":
          kd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          kd = !1, Am(m, n, f);
          break;
        case "selectionchange":
          if (YS) break;
        case "keydown":
        case "keyup":
          Am(m, n, f);
      }
      var E;
      if (Wf) e: {
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
      else oi ? qy(e, n) && (R = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R && (Qy && n.locale !== "ko" && (oi || R !== "onCompositionStart" ? R === "onCompositionEnd" && oi && (E = Xy()) : (Dr = f, _f = "value" in Dr ? Dr.value : Dr.textContent, oi = !0)), k = Ca(u, R), 0 < k.length && (R = new Tm(R, e, null, n, f), m.push({ event: R, listeners: k }), E ? R.data = E : (E = Zy(n), E !== null && (R.data = E)))), (E = LS ? NS(e, n) : BS(e, n)) && (u = Ca(u, "onBeforeInput"), 0 < u.length && (f = new Tm("onBeforeInput", "beforeinput", null, n, f), m.push({ event: f, listeners: u }), f.data = E));
    }
    uv(m, t);
  });
}
function _s(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = $s(e, n), i != null && r.unshift(_s(e, i, o)), i = $s(e, t), i != null && r.push(_s(e, i, o))), e = e.return;
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
function Bm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = $s(n, i), a != null && s.unshift(_s(n, a, l))) : o || (a = $s(n, i), a != null && s.push(_s(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var qS = /\r\n?/g, ZS = /\u0000|\uFFFD/g;
function zm(e) {
  return (typeof e == "string" ? e : "" + e).replace(qS, `
`).replace(ZS, "");
}
function Rl(e, t, n) {
  if (t = zm(t), zm(e) !== t && n) throw Error(G(425));
}
function ka() {
}
var Td = null, Ed = null;
function Rd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pd = typeof setTimeout == "function" ? setTimeout : void 0, JS = typeof clearTimeout == "function" ? clearTimeout : void 0, _m = typeof Promise == "function" ? Promise : void 0, eb = typeof queueMicrotask == "function" ? queueMicrotask : typeof _m < "u" ? function(e) {
  return _m.resolve(null).then(e).catch(tb);
} : Pd;
function tb(e) {
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
        e.removeChild(o), Ls(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Ls(t);
}
function Kr(e) {
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
function Fm(e) {
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
var Fi = Math.random().toString(36).slice(2), nr = "__reactFiber$" + Fi, Fs = "__reactProps$" + Fi, Er = "__reactContainer$" + Fi, Id = "__reactEvents$" + Fi, nb = "__reactListeners$" + Fi, rb = "__reactHandles$" + Fi;
function wo(e) {
  var t = e[nr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Er] || n[nr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fm(e); e !== null; ) {
        if (n = e[nr]) return n;
        e = Fm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function il(e) {
  return e = e[nr] || e[Er], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function li(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(G(33));
}
function sc(e) {
  return e[Fs] || null;
}
var Md = [], ai = -1;
function io(e) {
  return { current: e };
}
function at(e) {
  0 > ai || (e.current = Md[ai], Md[ai] = null, ai--);
}
function tt(e, t) {
  ai++, Md[ai] = e.current, e.current = t;
}
var Jr = {}, Ht = io(Jr), nn = io(!1), Mo = Jr;
function Ti(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function rn(e) {
  return e = e.childContextTypes, e != null;
}
function Ta() {
  at(nn), at(Ht);
}
function Dm(e, t, n) {
  if (Ht.current !== Jr) throw Error(G(168));
  tt(Ht, t), tt(nn, n);
}
function fv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(G(108, Dx(e) || "Unknown", o));
  return gt({}, n, r);
}
function Ea(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Jr, Mo = Ht.current, tt(Ht, e), tt(nn, nn.current), !0;
}
function Wm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(G(169));
  n ? (e = fv(e, t, Mo), r.__reactInternalMemoizedMergedChildContext = e, at(nn), at(Ht), tt(Ht, e)) : at(nn), tt(nn, n);
}
var Sr = null, lc = !1, Mu = !1;
function pv(e) {
  Sr === null ? Sr = [e] : Sr.push(e);
}
function ob(e) {
  lc = !0, pv(e);
}
function so() {
  if (!Mu && Sr !== null) {
    Mu = !0;
    var e = 0, t = Ye;
    try {
      var n = Sr;
      for (Ye = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Sr = null, lc = !1;
    } catch (o) {
      throw Sr !== null && (Sr = Sr.slice(e + 1)), zy(Lf, so), o;
    } finally {
      Ye = t, Mu = !1;
    }
  }
  return null;
}
var ci = [], ui = 0, Ra = null, Pa = 0, wn = [], Cn = 0, jo = null, wr = 1, Cr = "";
function xo(e, t) {
  ci[ui++] = Pa, ci[ui++] = Ra, Ra = e, Pa = t;
}
function mv(e, t, n) {
  wn[Cn++] = wr, wn[Cn++] = Cr, wn[Cn++] = jo, jo = e;
  var r = wr;
  e = Cr;
  var o = 32 - Wn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Wn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, wr = 1 << 32 - Wn(t) + o | n << o | r, Cr = i + e;
  } else wr = 1 << i | n << o | r, Cr = e;
}
function Hf(e) {
  e.return !== null && (xo(e, 1), mv(e, 1, 0));
}
function Vf(e) {
  for (; e === Ra; ) Ra = ci[--ui], ci[ui] = null, Pa = ci[--ui], ci[ui] = null;
  for (; e === jo; ) jo = wn[--Cn], wn[Cn] = null, Cr = wn[--Cn], wn[Cn] = null, wr = wn[--Cn], wn[Cn] = null;
}
var pn = null, fn = null, ut = !1, Dn = null;
function hv(e, t) {
  var n = En(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Um(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = Kr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jo !== null ? { id: wr, overflow: Cr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = En(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, pn = e, fn = null, !0) : !1;
    default:
      return !1;
  }
}
function jd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $d(e) {
  if (ut) {
    var t = fn;
    if (t) {
      var n = t;
      if (!Um(e, t)) {
        if (jd(e)) throw Error(G(418));
        t = Kr(n.nextSibling);
        var r = pn;
        t && Um(e, t) ? hv(r, n) : (e.flags = e.flags & -4097 | 2, ut = !1, pn = e);
      }
    } else {
      if (jd(e)) throw Error(G(418));
      e.flags = e.flags & -4097 | 2, ut = !1, pn = e;
    }
  }
}
function Hm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  pn = e;
}
function Pl(e) {
  if (e !== pn) return !1;
  if (!ut) return Hm(e), ut = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Rd(e.type, e.memoizedProps)), t && (t = fn)) {
    if (jd(e)) throw gv(), Error(G(418));
    for (; t; ) hv(e, t), t = Kr(t.nextSibling);
  }
  if (Hm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(G(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              fn = Kr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      fn = null;
    }
  } else fn = pn ? Kr(e.stateNode.nextSibling) : null;
  return !0;
}
function gv() {
  for (var e = fn; e; ) e = Kr(e.nextSibling);
}
function Ei() {
  fn = pn = null, ut = !1;
}
function Kf(e) {
  Dn === null ? Dn = [e] : Dn.push(e);
}
var ib = $r.ReactCurrentBatchConfig;
function Qi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(G(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(G(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(G(284));
    if (!n._owner) throw Error(G(290, e));
  }
  return e;
}
function Il(e, t) {
  throw e = Object.prototype.toString.call(t), Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Vm(e) {
  var t = e._init;
  return t(e._payload);
}
function yv(e) {
  function t(v, p) {
    if (e) {
      var S = v.deletions;
      S === null ? (v.deletions = [p], v.flags |= 16) : S.push(p);
    }
  }
  function n(v, p) {
    if (!e) return null;
    for (; p !== null; ) t(v, p), p = p.sibling;
    return null;
  }
  function r(v, p) {
    for (v = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? v.set(p.key, p) : v.set(p.index, p), p = p.sibling;
    return v;
  }
  function o(v, p) {
    return v = Qr(v, p), v.index = 0, v.sibling = null, v;
  }
  function i(v, p, S) {
    return v.index = S, e ? (S = v.alternate, S !== null ? (S = S.index, S < p ? (v.flags |= 2, p) : S) : (v.flags |= 2, p)) : (v.flags |= 1048576, p);
  }
  function s(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, p, S, w) {
    return p === null || p.tag !== 6 ? (p = Bu(S, v.mode, w), p.return = v, p) : (p = o(p, S), p.return = v, p);
  }
  function a(v, p, S, w) {
    var T = S.type;
    return T === ri ? f(v, p, S.props.children, w, S.key) : p !== null && (p.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Br && Vm(T) === p.type) ? (w = o(p, S.props), w.ref = Qi(v, p, S), w.return = v, w) : (w = sa(S.type, S.key, S.props, null, v.mode, w), w.ref = Qi(v, p, S), w.return = v, w);
  }
  function u(v, p, S, w) {
    return p === null || p.tag !== 4 || p.stateNode.containerInfo !== S.containerInfo || p.stateNode.implementation !== S.implementation ? (p = zu(S, v.mode, w), p.return = v, p) : (p = o(p, S.children || []), p.return = v, p);
  }
  function f(v, p, S, w, T) {
    return p === null || p.tag !== 7 ? (p = Ro(S, v.mode, w, T), p.return = v, p) : (p = o(p, S), p.return = v, p);
  }
  function m(v, p, S) {
    if (typeof p == "string" && p !== "" || typeof p == "number") return p = Bu("" + p, v.mode, S), p.return = v, p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case vl:
          return S = sa(p.type, p.key, p.props, null, v.mode, S), S.ref = Qi(v, null, p), S.return = v, S;
        case ni:
          return p = zu(p, v.mode, S), p.return = v, p;
        case Br:
          var w = p._init;
          return m(v, w(p._payload), S);
      }
      if (as(p) || Vi(p)) return p = Ro(p, v.mode, S, null), p.return = v, p;
      Il(v, p);
    }
    return null;
  }
  function y(v, p, S, w) {
    var T = p !== null ? p.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return T !== null ? null : l(v, p, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vl:
          return S.key === T ? a(v, p, S, w) : null;
        case ni:
          return S.key === T ? u(v, p, S, w) : null;
        case Br:
          return T = S._init, y(
            v,
            p,
            T(S._payload),
            w
          );
      }
      if (as(S) || Vi(S)) return T !== null ? null : f(v, p, S, w, null);
      Il(v, S);
    }
    return null;
  }
  function d(v, p, S, w, T) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return v = v.get(S) || null, l(p, v, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case vl:
          return v = v.get(w.key === null ? S : w.key) || null, a(p, v, w, T);
        case ni:
          return v = v.get(w.key === null ? S : w.key) || null, u(p, v, w, T);
        case Br:
          var k = w._init;
          return d(v, p, S, k(w._payload), T);
      }
      if (as(w) || Vi(w)) return v = v.get(S) || null, f(p, v, w, T, null);
      Il(p, w);
    }
    return null;
  }
  function x(v, p, S, w) {
    for (var T = null, k = null, E = p, R = p = 0, I = null; E !== null && R < S.length; R++) {
      E.index > R ? (I = E, E = null) : I = E.sibling;
      var L = y(v, E, S[R], w);
      if (L === null) {
        E === null && (E = I);
        break;
      }
      e && E && L.alternate === null && t(v, E), p = i(L, p, R), k === null ? T = L : k.sibling = L, k = L, E = I;
    }
    if (R === S.length) return n(v, E), ut && xo(v, R), T;
    if (E === null) {
      for (; R < S.length; R++) E = m(v, S[R], w), E !== null && (p = i(E, p, R), k === null ? T = E : k.sibling = E, k = E);
      return ut && xo(v, R), T;
    }
    for (E = r(v, E); R < S.length; R++) I = d(E, v, R, S[R], w), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? R : I.key), p = i(I, p, R), k === null ? T = I : k.sibling = I, k = I);
    return e && E.forEach(function(M) {
      return t(v, M);
    }), ut && xo(v, R), T;
  }
  function b(v, p, S, w) {
    var T = Vi(S);
    if (typeof T != "function") throw Error(G(150));
    if (S = T.call(S), S == null) throw Error(G(151));
    for (var k = T = null, E = p, R = p = 0, I = null, L = S.next(); E !== null && !L.done; R++, L = S.next()) {
      E.index > R ? (I = E, E = null) : I = E.sibling;
      var M = y(v, E, L.value, w);
      if (M === null) {
        E === null && (E = I);
        break;
      }
      e && E && M.alternate === null && t(v, E), p = i(M, p, R), k === null ? T = M : k.sibling = M, k = M, E = I;
    }
    if (L.done) return n(
      v,
      E
    ), ut && xo(v, R), T;
    if (E === null) {
      for (; !L.done; R++, L = S.next()) L = m(v, L.value, w), L !== null && (p = i(L, p, R), k === null ? T = L : k.sibling = L, k = L);
      return ut && xo(v, R), T;
    }
    for (E = r(v, E); !L.done; R++, L = S.next()) L = d(E, v, R, L.value, w), L !== null && (e && L.alternate !== null && E.delete(L.key === null ? R : L.key), p = i(L, p, R), k === null ? T = L : k.sibling = L, k = L);
    return e && E.forEach(function(g) {
      return t(v, g);
    }), ut && xo(v, R), T;
  }
  function C(v, p, S, w) {
    if (typeof S == "object" && S !== null && S.type === ri && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case vl:
          e: {
            for (var T = S.key, k = p; k !== null; ) {
              if (k.key === T) {
                if (T = S.type, T === ri) {
                  if (k.tag === 7) {
                    n(v, k.sibling), p = o(k, S.props.children), p.return = v, v = p;
                    break e;
                  }
                } else if (k.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Br && Vm(T) === k.type) {
                  n(v, k.sibling), p = o(k, S.props), p.ref = Qi(v, k, S), p.return = v, v = p;
                  break e;
                }
                n(v, k);
                break;
              } else t(v, k);
              k = k.sibling;
            }
            S.type === ri ? (p = Ro(S.props.children, v.mode, w, S.key), p.return = v, v = p) : (w = sa(S.type, S.key, S.props, null, v.mode, w), w.ref = Qi(v, p, S), w.return = v, v = w);
          }
          return s(v);
        case ni:
          e: {
            for (k = S.key; p !== null; ) {
              if (p.key === k) if (p.tag === 4 && p.stateNode.containerInfo === S.containerInfo && p.stateNode.implementation === S.implementation) {
                n(v, p.sibling), p = o(p, S.children || []), p.return = v, v = p;
                break e;
              } else {
                n(v, p);
                break;
              }
              else t(v, p);
              p = p.sibling;
            }
            p = zu(S, v.mode, w), p.return = v, v = p;
          }
          return s(v);
        case Br:
          return k = S._init, C(v, p, k(S._payload), w);
      }
      if (as(S)) return x(v, p, S, w);
      if (Vi(S)) return b(v, p, S, w);
      Il(v, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, p !== null && p.tag === 6 ? (n(v, p.sibling), p = o(p, S), p.return = v, v = p) : (n(v, p), p = Bu(S, v.mode, w), p.return = v, v = p), s(v)) : n(v, p);
  }
  return C;
}
var Ri = yv(!0), vv = yv(!1), Ia = io(null), Ma = null, di = null, Yf = null;
function Gf() {
  Yf = di = Ma = null;
}
function Xf(e) {
  var t = Ia.current;
  at(Ia), e._currentValue = t;
}
function Od(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function xi(e, t) {
  Ma = e, Yf = di = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (tn = !0), e.firstContext = null);
}
function In(e) {
  var t = e._currentValue;
  if (Yf !== e) if (e = { context: e, memoizedValue: t, next: null }, di === null) {
    if (Ma === null) throw Error(G(308));
    di = e, Ma.dependencies = { lanes: 0, firstContext: e };
  } else di = di.next = e;
  return t;
}
var Co = null;
function Qf(e) {
  Co === null ? Co = [e] : Co.push(e);
}
function xv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Qf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Rr(e, r);
}
function Rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var zr = !1;
function qf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Sv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function kr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Yr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Ne & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Rr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Qf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Rr(e, n);
}
function ea(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nf(e, n);
  }
}
function Km(e, t) {
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
function ja(e, t, n, r) {
  var o = e.updateQueue;
  zr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, l = f.lastBaseUpdate, l !== s && (l === null ? f.firstBaseUpdate = u : l.next = u, f.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = o.baseState;
    s = 0, f = u = a = null, l = i;
    do {
      var y = l.lane, d = l.eventTime;
      if ((r & y) === y) {
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
          switch (y = t, d = n, b.tag) {
            case 1:
              if (x = b.payload, typeof x == "function") {
                m = x.call(d, m, y);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = b.payload, y = typeof x == "function" ? x.call(d, m, y) : x, y == null) break e;
              m = gt({}, m, y);
              break e;
            case 2:
              zr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [l] : y.push(l));
      } else d = { eventTime: d, lane: y, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, f === null ? (u = f = d, a = m) : f = f.next = d, s |= y;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        y = l, l = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = m), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Oo |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Ym(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(G(191, o));
      o.call(r);
    }
  }
}
var sl = {}, sr = io(sl), Ds = io(sl), Ws = io(sl);
function ko(e) {
  if (e === sl) throw Error(G(174));
  return e;
}
function Zf(e, t) {
  switch (tt(Ws, t), tt(Ds, e), tt(sr, sl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = pd(t, e);
  }
  at(sr), tt(sr, t);
}
function Pi() {
  at(sr), at(Ds), at(Ws);
}
function bv(e) {
  ko(Ws.current);
  var t = ko(sr.current), n = pd(t, e.type);
  t !== n && (tt(Ds, e), tt(sr, n));
}
function Jf(e) {
  Ds.current === e && (at(sr), at(Ds));
}
var pt = io(0);
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
var ju = [];
function ep() {
  for (var e = 0; e < ju.length; e++) ju[e]._workInProgressVersionPrimary = null;
  ju.length = 0;
}
var ta = $r.ReactCurrentDispatcher, $u = $r.ReactCurrentBatchConfig, $o = 0, mt = null, It = null, jt = null, Oa = !1, xs = !1, Us = 0, sb = 0;
function _t() {
  throw Error(G(321));
}
function tp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Hn(e[n], t[n])) return !1;
  return !0;
}
function np(e, t, n, r, o, i) {
  if ($o = i, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ta.current = e === null || e.memoizedState === null ? ub : db, e = n(r, o), xs) {
    i = 0;
    do {
      if (xs = !1, Us = 0, 25 <= i) throw Error(G(301));
      i += 1, jt = It = null, t.updateQueue = null, ta.current = fb, e = n(r, o);
    } while (xs);
  }
  if (ta.current = Aa, t = It !== null && It.next !== null, $o = 0, jt = It = mt = null, Oa = !1, t) throw Error(G(300));
  return e;
}
function rp() {
  var e = Us !== 0;
  return Us = 0, e;
}
function Jn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return jt === null ? mt.memoizedState = jt = e : jt = jt.next = e, jt;
}
function Mn() {
  if (It === null) {
    var e = mt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = It.next;
  var t = jt === null ? mt.memoizedState : jt.next;
  if (t !== null) jt = t, It = e;
  else {
    if (e === null) throw Error(G(310));
    It = e, e = { memoizedState: It.memoizedState, baseState: It.baseState, baseQueue: It.baseQueue, queue: It.queue, next: null }, jt === null ? mt.memoizedState = jt = e : jt = jt.next = e;
  }
  return jt;
}
function Hs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ou(e) {
  var t = Mn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = It, o = r.baseQueue, i = n.pending;
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
      var f = u.lane;
      if (($o & f) === f) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var m = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = m, s = r) : a = a.next = m, mt.lanes |= f, Oo |= f;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Hn(r, t.memoizedState) || (tn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, mt.lanes |= i, Oo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Au(e) {
  var t = Mn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Hn(i, t.memoizedState) || (tn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function wv() {
}
function Cv(e, t) {
  var n = mt, r = Mn(), o = t(), i = !Hn(r.memoizedState, o);
  if (i && (r.memoizedState = o, tn = !0), r = r.queue, op(Ev.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || jt !== null && jt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Vs(9, Tv.bind(null, n, r, o, t), void 0, null), $t === null) throw Error(G(349));
    $o & 30 || kv(n, t, o);
  }
  return o;
}
function kv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Tv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Rv(t) && Pv(e);
}
function Ev(e, t, n) {
  return n(function() {
    Rv(t) && Pv(e);
  });
}
function Rv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Hn(e, n);
  } catch {
    return !0;
  }
}
function Pv(e) {
  var t = Rr(e, 1);
  t !== null && Un(t, e, 1, -1);
}
function Gm(e) {
  var t = Jn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Hs, lastRenderedState: e }, t.queue = e, e = e.dispatch = cb.bind(null, mt, e), [t.memoizedState, e];
}
function Vs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Iv() {
  return Mn().memoizedState;
}
function na(e, t, n, r) {
  var o = Jn();
  mt.flags |= e, o.memoizedState = Vs(1 | t, n, void 0, r === void 0 ? null : r);
}
function ac(e, t, n, r) {
  var o = Mn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (It !== null) {
    var s = It.memoizedState;
    if (i = s.destroy, r !== null && tp(r, s.deps)) {
      o.memoizedState = Vs(t, n, i, r);
      return;
    }
  }
  mt.flags |= e, o.memoizedState = Vs(1 | t, n, i, r);
}
function Xm(e, t) {
  return na(8390656, 8, e, t);
}
function op(e, t) {
  return ac(2048, 8, e, t);
}
function Mv(e, t) {
  return ac(4, 2, e, t);
}
function jv(e, t) {
  return ac(4, 4, e, t);
}
function $v(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ov(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ac(4, 4, $v.bind(null, t, e), n);
}
function ip() {
}
function Av(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Lv(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Nv(e, t, n) {
  return $o & 21 ? (Hn(n, t) || (n = Dy(), mt.lanes |= n, Oo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, tn = !0), e.memoizedState = n);
}
function lb(e, t) {
  var n = Ye;
  Ye = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = $u.transition;
  $u.transition = {};
  try {
    e(!1), t();
  } finally {
    Ye = n, $u.transition = r;
  }
}
function Bv() {
  return Mn().memoizedState;
}
function ab(e, t, n) {
  var r = Xr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, zv(e)) _v(t, n);
  else if (n = xv(e, t, n, r), n !== null) {
    var o = Qt();
    Un(n, e, r, o), Fv(n, t, r);
  }
}
function cb(e, t, n) {
  var r = Xr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zv(e)) _v(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Hn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Qf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = xv(e, t, o, r), n !== null && (o = Qt(), Un(n, e, r, o), Fv(n, t, r));
  }
}
function zv(e) {
  var t = e.alternate;
  return e === mt || t !== null && t === mt;
}
function _v(e, t) {
  xs = Oa = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Nf(e, n);
  }
}
var Aa = { readContext: In, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, ub = { readContext: In, useCallback: function(e, t) {
  return Jn().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: In, useEffect: Xm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, na(
    4194308,
    4,
    $v.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return na(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return na(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Jn();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Jn();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ab.bind(null, mt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Jn();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gm, useDebugValue: ip, useDeferredValue: function(e) {
  return Jn().memoizedState = e;
}, useTransition: function() {
  var e = Gm(!1), t = e[0];
  return e = lb.bind(null, e[1]), Jn().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = mt, o = Jn();
  if (ut) {
    if (n === void 0) throw Error(G(407));
    n = n();
  } else {
    if (n = t(), $t === null) throw Error(G(349));
    $o & 30 || kv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Xm(Ev.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Vs(9, Tv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Jn(), t = $t.identifierPrefix;
  if (ut) {
    var n = Cr, r = wr;
    n = (r & ~(1 << 32 - Wn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Us++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = sb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, db = {
  readContext: In,
  useCallback: Av,
  useContext: In,
  useEffect: op,
  useImperativeHandle: Ov,
  useInsertionEffect: Mv,
  useLayoutEffect: jv,
  useMemo: Lv,
  useReducer: Ou,
  useRef: Iv,
  useState: function() {
    return Ou(Hs);
  },
  useDebugValue: ip,
  useDeferredValue: function(e) {
    var t = Mn();
    return Nv(t, It.memoizedState, e);
  },
  useTransition: function() {
    var e = Ou(Hs)[0], t = Mn().memoizedState;
    return [e, t];
  },
  useMutableSource: wv,
  useSyncExternalStore: Cv,
  useId: Bv,
  unstable_isNewReconciler: !1
}, fb = { readContext: In, useCallback: Av, useContext: In, useEffect: op, useImperativeHandle: Ov, useInsertionEffect: Mv, useLayoutEffect: jv, useMemo: Lv, useReducer: Au, useRef: Iv, useState: function() {
  return Au(Hs);
}, useDebugValue: ip, useDeferredValue: function(e) {
  var t = Mn();
  return It === null ? t.memoizedState = e : Nv(t, It.memoizedState, e);
}, useTransition: function() {
  var e = Au(Hs)[0], t = Mn().memoizedState;
  return [e, t];
}, useMutableSource: wv, useSyncExternalStore: Cv, useId: Bv, unstable_isNewReconciler: !1 };
function _n(e, t) {
  if (e && e.defaultProps) {
    t = gt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ad(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : gt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cc = { isMounted: function(e) {
  return (e = e._reactInternals) ? _o(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Xr(e), i = kr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Yr(e, i, o), t !== null && (Un(t, e, o, r), ea(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = Xr(e), i = kr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Yr(e, i, o), t !== null && (Un(t, e, o, r), ea(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qt(), r = Xr(e), o = kr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Yr(e, o, r), t !== null && (Un(t, e, r, n), ea(t, e, r));
} };
function Qm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Bs(n, r) || !Bs(o, i) : !0;
}
function Dv(e, t, n) {
  var r = !1, o = Jr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = In(i) : (o = rn(t) ? Mo : Ht.current, r = t.contextTypes, i = (r = r != null) ? Ti(e, o) : Jr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function qm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cc.enqueueReplaceState(t, t.state, null);
}
function Ld(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, qf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = In(i) : (i = rn(t) ? Mo : Ht.current, o.context = Ti(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ad(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && cc.enqueueReplaceState(o, o.state, null), ja(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ii(e, t) {
  try {
    var n = "", r = t;
    do
      n += Fx(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Lu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var pb = typeof WeakMap == "function" ? WeakMap : Map;
function Wv(e, t, n) {
  n = kr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Na || (Na = !0, Kd = r), Nd(e, t);
  }, n;
}
function Uv(e, t, n) {
  n = kr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Nd(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Nd(e, t), typeof r != "function" && (Gr === null ? Gr = /* @__PURE__ */ new Set([this]) : Gr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Zm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new pb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Rb.bind(null, e, t, n), t.then(e, e));
}
function Jm(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function eh(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kr(-1, 1), t.tag = 2, Yr(n, t, 1))), n.lanes |= 1), e);
}
var mb = $r.ReactCurrentOwner, tn = !1;
function Gt(e, t, n, r) {
  t.child = e === null ? vv(t, null, n, r) : Ri(t, e.child, n, r);
}
function th(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return xi(t, o), r = np(e, t, n, r, i, o), n = rp(), e !== null && !tn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (ut && n && Hf(t), t.flags |= 1, Gt(e, t, r, o), t.child);
}
function nh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !pp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Hv(e, t, i, r, o)) : (e = sa(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Bs, n(s, r) && e.ref === t.ref) return Pr(e, t, o);
  }
  return t.flags |= 1, e = Qr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Hv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bs(i, r) && e.ref === t.ref) if (tn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (tn = !0);
    else return t.lanes = e.lanes, Pr(e, t, o);
  }
  return Bd(e, t, n, r, o);
}
function Vv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(pi, cn), cn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, tt(pi, cn), cn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, tt(pi, cn), cn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, tt(pi, cn), cn |= r;
  return Gt(e, t, o, n), t.child;
}
function Kv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Bd(e, t, n, r, o) {
  var i = rn(n) ? Mo : Ht.current;
  return i = Ti(t, i), xi(t, o), n = np(e, t, n, r, i, o), r = rp(), e !== null && !tn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Pr(e, t, o)) : (ut && r && Hf(t), t.flags |= 1, Gt(e, t, n, o), t.child);
}
function rh(e, t, n, r, o) {
  if (rn(n)) {
    var i = !0;
    Ea(t);
  } else i = !1;
  if (xi(t, o), t.stateNode === null) ra(e, t), Dv(t, n, r), Ld(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = In(u) : (u = rn(n) ? Mo : Ht.current, u = Ti(t, u));
    var f = n.getDerivedStateFromProps, m = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && qm(t, s, r, u), zr = !1;
    var y = t.memoizedState;
    s.state = y, ja(t, r, s, o), a = t.memoizedState, l !== r || y !== a || nn.current || zr ? (typeof f == "function" && (Ad(t, n, f, r), a = t.memoizedState), (l = zr || Qm(t, n, l, r, y, a, u)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, Sv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : _n(t.type, l), s.props = u, m = t.pendingProps, y = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = In(a) : (a = rn(n) ? Mo : Ht.current, a = Ti(t, a));
    var d = n.getDerivedStateFromProps;
    (f = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || y !== a) && qm(t, s, r, a), zr = !1, y = t.memoizedState, s.state = y, ja(t, r, s, o);
    var x = t.memoizedState;
    l !== m || y !== x || nn.current || zr ? (typeof d == "function" && (Ad(t, n, d, r), x = t.memoizedState), (u = zr || Qm(t, n, u, r, y, x, a) || !1) ? (f || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return zd(e, t, n, r, i, o);
}
function zd(e, t, n, r, o, i) {
  Kv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Wm(t, n, !1), Pr(e, t, i);
  r = t.stateNode, mb.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ri(t, e.child, null, i), t.child = Ri(t, null, l, i)) : Gt(e, t, l, i), t.memoizedState = r.state, o && Wm(t, n, !0), t.child;
}
function Yv(e) {
  var t = e.stateNode;
  t.pendingContext ? Dm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dm(e, t.context, !1), Zf(e, t.containerInfo);
}
function oh(e, t, n, r, o) {
  return Ei(), Kf(o), t.flags |= 256, Gt(e, t, n, r), t.child;
}
var _d = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Gv(e, t, n) {
  var r = t.pendingProps, o = pt.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), tt(pt, o & 1), e === null)
    return $d(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = fc(s, r, 0, null), e = Ro(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Fd(n), t.memoizedState = _d, e) : sp(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return hb(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Qr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Qr(l, i) : (i = Ro(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Fd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = _d, r;
  }
  return i = e.child, e = i.sibling, r = Qr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function sp(e, t) {
  return t = fc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ml(e, t, n, r) {
  return r !== null && Kf(r), Ri(t, e.child, null, n), e = sp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function hb(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Lu(Error(G(422))), Ml(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = fc({ mode: "visible", children: r.children }, o, 0, null), i = Ro(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ri(t, e.child, null, s), t.child.memoizedState = Fd(s), t.memoizedState = _d, i);
  if (!(t.mode & 1)) return Ml(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(G(419)), r = Lu(i, r, void 0), Ml(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, tn || l) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Rr(e, o), Un(r, e, o, -1));
    }
    return fp(), r = Lu(Error(G(421))), Ml(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, fn = Kr(o.nextSibling), pn = t, ut = !0, Dn = null, e !== null && (wn[Cn++] = wr, wn[Cn++] = Cr, wn[Cn++] = jo, wr = e.id, Cr = e.overflow, jo = t), t = sp(t, r.children), t.flags |= 4096, t);
}
function ih(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Od(e.return, t, n);
}
function Nu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Xv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Gt(e, t, r.children, n), r = pt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ih(e, n, t);
      else if (e.tag === 19) ih(e, n, t);
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
  if (tt(pt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && $a(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Nu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && $a(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Nu(t, !0, n, null, i);
      break;
    case "together":
      Nu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function ra(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Pr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Oo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(G(153));
  if (t.child !== null) {
    for (e = t.child, n = Qr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Qr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function gb(e, t, n) {
  switch (t.tag) {
    case 3:
      Yv(t), Ei();
      break;
    case 5:
      bv(t);
      break;
    case 1:
      rn(t.type) && Ea(t);
      break;
    case 4:
      Zf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      tt(Ia, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (tt(pt, pt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gv(e, t, n) : (tt(pt, pt.current & 1), e = Pr(e, t, n), e !== null ? e.sibling : null);
      tt(pt, pt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Xv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), tt(pt, pt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Vv(e, t, n);
  }
  return Pr(e, t, n);
}
var Qv, Dd, qv, Zv;
Qv = function(e, t) {
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
Dd = function() {
};
qv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, ko(sr.current);
    var i = null;
    switch (n) {
      case "input":
        o = cd(e, o), r = cd(e, r), i = [];
        break;
      case "select":
        o = gt({}, o, { value: void 0 }), r = gt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = fd(e, o), r = fd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ka);
    }
    md(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ms.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ms.hasOwnProperty(u) ? (a != null && u === "onScroll" && st("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Zv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qi(e, t) {
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
function Ft(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function yb(e, t, n) {
  var r = t.pendingProps;
  switch (Vf(t), t.tag) {
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
      return Ft(t), null;
    case 1:
      return rn(t.type) && Ta(), Ft(t), null;
    case 3:
      return r = t.stateNode, Pi(), at(nn), at(Ht), ep(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Dn !== null && (Xd(Dn), Dn = null))), Dd(e, t), Ft(t), null;
    case 5:
      Jf(t);
      var o = ko(Ws.current);
      if (n = t.type, e !== null && t.stateNode != null) qv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166));
          return Ft(t), null;
        }
        if (e = ko(sr.current), Pl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[nr] = t, r[Fs] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              st("cancel", r), st("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              st("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < us.length; o++) st(us[o], r);
              break;
            case "source":
              st("error", r);
              break;
            case "img":
            case "image":
            case "link":
              st(
                "error",
                r
              ), st("load", r);
              break;
            case "details":
              st("toggle", r);
              break;
            case "input":
              mm(r, i), st("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, st("invalid", r);
              break;
            case "textarea":
              gm(r, i), st("invalid", r);
          }
          md(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Rl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Rl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ms.hasOwnProperty(s) && l != null && s === "onScroll" && st("scroll", r);
          }
          switch (n) {
            case "input":
              xl(r), hm(r, i, !0);
              break;
            case "textarea":
              xl(r), ym(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ka);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ey(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[nr] = t, e[Fs] = r, Qv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = hd(n, r), n) {
              case "dialog":
                st("cancel", e), st("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                st("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < us.length; o++) st(us[o], e);
                o = r;
                break;
              case "source":
                st("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                st(
                  "error",
                  e
                ), st("load", e), o = r;
                break;
              case "details":
                st("toggle", e), o = r;
                break;
              case "input":
                mm(e, r), o = cd(e, r), st("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = gt({}, r, { value: void 0 }), st("invalid", e);
                break;
              case "textarea":
                gm(e, r), o = fd(e, r), st("invalid", e);
                break;
              default:
                o = r;
            }
            md(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Iy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ry(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && js(e, a) : typeof a == "number" && js(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ms.hasOwnProperty(i) ? a != null && i === "onScroll" && st("scroll", e) : a != null && Mf(e, i, a, s));
            }
            switch (n) {
              case "input":
                xl(e), hm(e, r, !1);
                break;
              case "textarea":
                xl(e), ym(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? hi(e, !!r.multiple, i, !1) : r.defaultValue != null && hi(
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
      return Ft(t), null;
    case 6:
      if (e && t.stateNode != null) Zv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(G(166));
        if (n = ko(Ws.current), ko(sr.current), Pl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[nr] = t, (i = r.nodeValue !== n) && (e = pn, e !== null)) switch (e.tag) {
            case 3:
              Rl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Rl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[nr] = t, t.stateNode = r;
      }
      return Ft(t), null;
    case 13:
      if (at(pt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ut && fn !== null && t.mode & 1 && !(t.flags & 128)) gv(), Ei(), t.flags |= 98560, i = !1;
        else if (i = Pl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(G(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(G(317));
            i[nr] = t;
          } else Ei(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ft(t), i = !1;
        } else Dn !== null && (Xd(Dn), Dn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pt.current & 1 ? Mt === 0 && (Mt = 3) : fp())), t.updateQueue !== null && (t.flags |= 4), Ft(t), null);
    case 4:
      return Pi(), Dd(e, t), e === null && zs(t.stateNode.containerInfo), Ft(t), null;
    case 10:
      return Xf(t.type._context), Ft(t), null;
    case 17:
      return rn(t.type) && Ta(), Ft(t), null;
    case 19:
      if (at(pt), i = t.memoizedState, i === null) return Ft(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) qi(i, !1);
      else {
        if (Mt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = $a(e), s !== null) {
            for (t.flags |= 128, qi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return tt(pt, pt.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && wt() > Mi && (t.flags |= 128, r = !0, qi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = $a(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), qi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ut) return Ft(t), null;
        } else 2 * wt() - i.renderingStartTime > Mi && n !== 1073741824 && (t.flags |= 128, r = !0, qi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = wt(), t.sibling = null, n = pt.current, tt(pt, r ? n & 1 | 2 : n & 1), t) : (Ft(t), null);
    case 22:
    case 23:
      return dp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? cn & 1073741824 && (Ft(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ft(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function vb(e, t) {
  switch (Vf(t), t.tag) {
    case 1:
      return rn(t.type) && Ta(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Pi(), at(nn), at(Ht), ep(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Jf(t), null;
    case 13:
      if (at(pt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(G(340));
        Ei();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return at(pt), null;
    case 4:
      return Pi(), null;
    case 10:
      return Xf(t.type._context), null;
    case 22:
    case 23:
      return dp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1, Ut = !1, xb = typeof WeakSet == "function" ? WeakSet : Set, re = null;
function fi(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    vt(e, t, r);
  }
  else n.current = null;
}
function Wd(e, t, n) {
  try {
    n();
  } catch (r) {
    vt(e, t, r);
  }
}
var sh = !1;
function Sb(e, t) {
  if (Td = ba, e = rv(), Uf(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, f = 0, m = e, y = null;
        t: for (; ; ) {
          for (var d; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (a = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (d = m.firstChild) !== null; )
            y = m, m = d;
          for (; ; ) {
            if (m === e) break t;
            if (y === n && ++u === o && (l = s), y === i && ++f === r && (a = s), (d = m.nextSibling) !== null) break;
            m = y, y = m.parentNode;
          }
          m = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ed = { focusedElem: e, selectionRange: n }, ba = !1, re = t; re !== null; ) if (t = re, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, re = e;
  else for (; re !== null; ) {
    t = re;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var b = x.memoizedProps, C = x.memoizedState, v = t.stateNode, p = v.getSnapshotBeforeUpdate(t.elementType === t.type ? b : _n(t.type, b), C);
            v.__reactInternalSnapshotBeforeUpdate = p;
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
          throw Error(G(163));
      }
    } catch (w) {
      vt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, re = e;
      break;
    }
    re = t.return;
  }
  return x = sh, sh = !1, x;
}
function Ss(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Wd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function uc(e, t) {
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
function Ud(e) {
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
function Jv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Jv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[nr], delete t[Fs], delete t[Id], delete t[nb], delete t[rb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function e0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || e0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ka));
  else if (r !== 4 && (e = e.child, e !== null)) for (Hd(e, t, n), e = e.sibling; e !== null; ) Hd(e, t, n), e = e.sibling;
}
function Vd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vd(e, t, n), e = e.sibling; e !== null; ) Vd(e, t, n), e = e.sibling;
}
var At = null, Fn = !1;
function Ar(e, t, n) {
  for (n = n.child; n !== null; ) t0(e, t, n), n = n.sibling;
}
function t0(e, t, n) {
  if (ir && typeof ir.onCommitFiberUnmount == "function") try {
    ir.onCommitFiberUnmount(nc, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ut || fi(n, t);
    case 6:
      var r = At, o = Fn;
      At = null, Ar(e, t, n), At = r, Fn = o, At !== null && (Fn ? (e = At, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : At.removeChild(n.stateNode));
      break;
    case 18:
      At !== null && (Fn ? (e = At, n = n.stateNode, e.nodeType === 8 ? Iu(e.parentNode, n) : e.nodeType === 1 && Iu(e, n), Ls(e)) : Iu(At, n.stateNode));
      break;
    case 4:
      r = At, o = Fn, At = n.stateNode.containerInfo, Fn = !0, Ar(e, t, n), At = r, Fn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ut && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Wd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Ar(e, t, n);
      break;
    case 1:
      if (!Ut && (fi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        vt(n, t, l);
      }
      Ar(e, t, n);
      break;
    case 21:
      Ar(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ut = (r = Ut) || n.memoizedState !== null, Ar(e, t, n), Ut = r) : Ar(e, t, n);
      break;
    default:
      Ar(e, t, n);
  }
}
function ah(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xb()), t.forEach(function(r) {
      var o = Ib.bind(null, e, r);
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
            At = l.stateNode, Fn = !1;
            break e;
          case 3:
            At = l.stateNode.containerInfo, Fn = !0;
            break e;
          case 4:
            At = l.stateNode.containerInfo, Fn = !0;
            break e;
        }
        l = l.return;
      }
      if (At === null) throw Error(G(160));
      t0(i, s, o), At = null, Fn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      vt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) n0(t, e), t = t.sibling;
}
function n0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Nn(t, e), Xn(e), r & 4) {
        try {
          Ss(3, e, e.return), uc(3, e);
        } catch (b) {
          vt(e, e.return, b);
        }
        try {
          Ss(5, e, e.return);
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      break;
    case 1:
      Nn(t, e), Xn(e), r & 512 && n !== null && fi(n, n.return);
      break;
    case 5:
      if (Nn(t, e), Xn(e), r & 512 && n !== null && fi(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          js(o, "");
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && ky(o, i), hd(l, s);
          var u = hd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var f = a[s], m = a[s + 1];
            f === "style" ? Iy(o, m) : f === "dangerouslySetInnerHTML" ? Ry(o, m) : f === "children" ? js(o, m) : Mf(o, f, m, u);
          }
          switch (l) {
            case "input":
              ud(o, i);
              break;
            case "textarea":
              Ty(o, i);
              break;
            case "select":
              var y = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var d = i.value;
              d != null ? hi(o, !!i.multiple, d, !1) : y !== !!i.multiple && (i.defaultValue != null ? hi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : hi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Fs] = i;
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Nn(t, e), Xn(e), r & 4) {
        if (e.stateNode === null) throw Error(G(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          vt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Nn(t, e), Xn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ls(t.containerInfo);
      } catch (b) {
        vt(e, e.return, b);
      }
      break;
    case 4:
      Nn(t, e), Xn(e);
      break;
    case 13:
      Nn(t, e), Xn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (cp = wt())), r & 4 && ah(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ut = (u = Ut) || f, Nn(t, e), Ut = u) : Nn(t, e), Xn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !f && e.mode & 1) for (re = e, f = e.child; f !== null; ) {
          for (m = re = f; re !== null; ) {
            switch (y = re, d = y.child, y.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ss(4, y, y.return);
                break;
              case 1:
                fi(y, y.return);
                var x = y.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = y, n = y.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    vt(r, n, b);
                  }
                }
                break;
              case 5:
                fi(y, y.return);
                break;
              case 22:
                if (y.memoizedState !== null) {
                  uh(m);
                  continue;
                }
            }
            d !== null ? (d.return = y, re = d) : uh(m);
          }
          f = f.sibling;
        }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                o = m.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode, a = m.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Py("display", s));
              } catch (b) {
                vt(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (f === null) try {
              m.stateNode.nodeValue = u ? "" : m.memoizedProps;
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
      Nn(t, e), Xn(e), r & 4 && ah(e);
      break;
    case 21:
      break;
    default:
      Nn(
        t,
        e
      ), Xn(e);
  }
}
function Xn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (e0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(G(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (js(o, ""), r.flags &= -33);
          var i = lh(e);
          Vd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = lh(e);
          Hd(e, l, s);
          break;
        default:
          throw Error(G(161));
      }
    } catch (a) {
      vt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bb(e, t, n) {
  re = e, r0(e);
}
function r0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; re !== null; ) {
    var o = re, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || jl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Ut;
        l = jl;
        var u = Ut;
        if (jl = s, (Ut = a) && !u) for (re = o; re !== null; ) s = re, a = s.child, s.tag === 22 && s.memoizedState !== null ? dh(o) : a !== null ? (a.return = s, re = a) : dh(o);
        for (; i !== null; ) re = i, r0(i), i = i.sibling;
        re = o, jl = l, Ut = u;
      }
      ch(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, re = i) : ch(e);
  }
}
function ch(e) {
  for (; re !== null; ) {
    var t = re;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ut || uc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ut) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : _n(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ym(t, i, r);
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
              Ym(t, s, n);
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
                var f = u.memoizedState;
                if (f !== null) {
                  var m = f.dehydrated;
                  m !== null && Ls(m);
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
            throw Error(G(163));
        }
        Ut || t.flags & 512 && Ud(t);
      } catch (y) {
        vt(t, t.return, y);
      }
    }
    if (t === e) {
      re = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, re = n;
      break;
    }
    re = t.return;
  }
}
function uh(e) {
  for (; re !== null; ) {
    var t = re;
    if (t === e) {
      re = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, re = n;
      break;
    }
    re = t.return;
  }
}
function dh(e) {
  for (; re !== null; ) {
    var t = re;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uc(4, t);
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
            Ud(t);
          } catch (a) {
            vt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ud(t);
          } catch (a) {
            vt(t, s, a);
          }
      }
    } catch (a) {
      vt(t, t.return, a);
    }
    if (t === e) {
      re = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, re = l;
      break;
    }
    re = t.return;
  }
}
var wb = Math.ceil, La = $r.ReactCurrentDispatcher, lp = $r.ReactCurrentOwner, Rn = $r.ReactCurrentBatchConfig, Ne = 0, $t = null, Pt = null, Nt = 0, cn = 0, pi = io(0), Mt = 0, Ks = null, Oo = 0, dc = 0, ap = 0, bs = null, en = null, cp = 0, Mi = 1 / 0, xr = null, Na = !1, Kd = null, Gr = null, $l = !1, Wr = null, Ba = 0, ws = 0, Yd = null, oa = -1, ia = 0;
function Qt() {
  return Ne & 6 ? wt() : oa !== -1 ? oa : oa = wt();
}
function Xr(e) {
  return e.mode & 1 ? Ne & 2 && Nt !== 0 ? Nt & -Nt : ib.transition !== null ? (ia === 0 && (ia = Dy()), ia) : (e = Ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gy(e.type)), e) : 1;
}
function Un(e, t, n, r) {
  if (50 < ws) throw ws = 0, Yd = null, Error(G(185));
  rl(e, n, r), (!(Ne & 2) || e !== $t) && (e === $t && (!(Ne & 2) && (dc |= n), Mt === 4 && Fr(e, Nt)), on(e, r), n === 1 && Ne === 0 && !(t.mode & 1) && (Mi = wt() + 500, lc && so()));
}
function on(e, t) {
  var n = e.callbackNode;
  iS(e, t);
  var r = Sa(e, e === $t ? Nt : 0);
  if (r === 0) n !== null && Sm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Sm(n), t === 1) e.tag === 0 ? ob(fh.bind(null, e)) : pv(fh.bind(null, e)), eb(function() {
      !(Ne & 6) && so();
    }), n = null;
    else {
      switch (Wy(r)) {
        case 1:
          n = Lf;
          break;
        case 4:
          n = _y;
          break;
        case 16:
          n = xa;
          break;
        case 536870912:
          n = Fy;
          break;
        default:
          n = xa;
      }
      n = d0(n, o0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function o0(e, t) {
  if (oa = -1, ia = 0, Ne & 6) throw Error(G(327));
  var n = e.callbackNode;
  if (Si() && e.callbackNode !== n) return null;
  var r = Sa(e, e === $t ? Nt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = za(e, r);
  else {
    t = r;
    var o = Ne;
    Ne |= 2;
    var i = s0();
    ($t !== e || Nt !== t) && (xr = null, Mi = wt() + 500, Eo(e, t));
    do
      try {
        Tb();
        break;
      } catch (l) {
        i0(e, l);
      }
    while (!0);
    Gf(), La.current = i, Ne = o, Pt !== null ? t = 0 : ($t = null, Nt = 0, t = Mt);
  }
  if (t !== 0) {
    if (t === 2 && (o = Sd(e), o !== 0 && (r = o, t = Gd(e, o))), t === 1) throw n = Ks, Eo(e, 0), Fr(e, r), on(e, wt()), n;
    if (t === 6) Fr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !Cb(o) && (t = za(e, r), t === 2 && (i = Sd(e), i !== 0 && (r = i, t = Gd(e, i))), t === 1)) throw n = Ks, Eo(e, 0), Fr(e, r), on(e, wt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          So(e, en, xr);
          break;
        case 3:
          if (Fr(e, r), (r & 130023424) === r && (t = cp + 500 - wt(), 10 < t)) {
            if (Sa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Pd(So.bind(null, e, en, xr), t);
            break;
          }
          So(e, en, xr);
          break;
        case 4:
          if (Fr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Wn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = wt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pd(So.bind(null, e, en, xr), r);
            break;
          }
          So(e, en, xr);
          break;
        case 5:
          So(e, en, xr);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return on(e, wt()), e.callbackNode === n ? o0.bind(null, e) : null;
}
function Gd(e, t) {
  var n = bs;
  return e.current.memoizedState.isDehydrated && (Eo(e, t).flags |= 256), e = za(e, t), e !== 2 && (t = en, en = n, t !== null && Xd(t)), e;
}
function Xd(e) {
  en === null ? en = e : en.push.apply(en, e);
}
function Cb(e) {
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
function Fr(e, t) {
  for (t &= ~ap, t &= ~dc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Wn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fh(e) {
  if (Ne & 6) throw Error(G(327));
  Si();
  var t = Sa(e, 0);
  if (!(t & 1)) return on(e, wt()), null;
  var n = za(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Sd(e);
    r !== 0 && (t = r, n = Gd(e, r));
  }
  if (n === 1) throw n = Ks, Eo(e, 0), Fr(e, t), on(e, wt()), n;
  if (n === 6) throw Error(G(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, So(e, en, xr), on(e, wt()), null;
}
function up(e, t) {
  var n = Ne;
  Ne |= 1;
  try {
    return e(t);
  } finally {
    Ne = n, Ne === 0 && (Mi = wt() + 500, lc && so());
  }
}
function Ao(e) {
  Wr !== null && Wr.tag === 0 && !(Ne & 6) && Si();
  var t = Ne;
  Ne |= 1;
  var n = Rn.transition, r = Ye;
  try {
    if (Rn.transition = null, Ye = 1, e) return e();
  } finally {
    Ye = r, Rn.transition = n, Ne = t, !(Ne & 6) && so();
  }
}
function dp() {
  cn = pi.current, at(pi);
}
function Eo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, JS(n)), Pt !== null) for (n = Pt.return; n !== null; ) {
    var r = n;
    switch (Vf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ta();
        break;
      case 3:
        Pi(), at(nn), at(Ht), ep();
        break;
      case 5:
        Jf(r);
        break;
      case 4:
        Pi();
        break;
      case 13:
        at(pt);
        break;
      case 19:
        at(pt);
        break;
      case 10:
        Xf(r.type._context);
        break;
      case 22:
      case 23:
        dp();
    }
    n = n.return;
  }
  if ($t = e, Pt = e = Qr(e.current, null), Nt = cn = t, Mt = 0, Ks = null, ap = dc = Oo = 0, en = bs = null, Co !== null) {
    for (t = 0; t < Co.length; t++) if (n = Co[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Co = null;
  }
  return e;
}
function i0(e, t) {
  do {
    var n = Pt;
    try {
      if (Gf(), ta.current = Aa, Oa) {
        for (var r = mt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Oa = !1;
      }
      if ($o = 0, jt = It = mt = null, xs = !1, Us = 0, lp.current = null, n === null || n.return === null) {
        Mt = 1, Ks = t, Pt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Nt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, f = l, m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var y = f.alternate;
            y ? (f.updateQueue = y.updateQueue, f.memoizedState = y.memoizedState, f.lanes = y.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var d = Jm(s);
          if (d !== null) {
            d.flags &= -257, eh(d, s, l, i, t), d.mode & 1 && Zm(i, u, t), t = d, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zm(i, u, t), fp();
              break e;
            }
            a = Error(G(426));
          }
        } else if (ut && l.mode & 1) {
          var C = Jm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), eh(C, s, l, i, t), Kf(Ii(a, l));
            break e;
          }
        }
        i = a = Ii(a, l), Mt !== 4 && (Mt = 2), bs === null ? bs = [i] : bs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var v = Wv(i, a, t);
              Km(i, v);
              break e;
            case 1:
              l = a;
              var p = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (Gr === null || !Gr.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Uv(i, l, t);
                Km(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      a0(n);
    } catch (T) {
      t = T, Pt === n && n !== null && (Pt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function s0() {
  var e = La.current;
  return La.current = Aa, e === null ? Aa : e;
}
function fp() {
  (Mt === 0 || Mt === 3 || Mt === 2) && (Mt = 4), $t === null || !(Oo & 268435455) && !(dc & 268435455) || Fr($t, Nt);
}
function za(e, t) {
  var n = Ne;
  Ne |= 2;
  var r = s0();
  ($t !== e || Nt !== t) && (xr = null, Eo(e, t));
  do
    try {
      kb();
      break;
    } catch (o) {
      i0(e, o);
    }
  while (!0);
  if (Gf(), Ne = n, La.current = r, Pt !== null) throw Error(G(261));
  return $t = null, Nt = 0, Mt;
}
function kb() {
  for (; Pt !== null; ) l0(Pt);
}
function Tb() {
  for (; Pt !== null && !Qx(); ) l0(Pt);
}
function l0(e) {
  var t = u0(e.alternate, e, cn);
  e.memoizedProps = e.pendingProps, t === null ? a0(e) : Pt = t, lp.current = null;
}
function a0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = vb(n, t), n !== null) {
        n.flags &= 32767, Pt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Mt = 6, Pt = null;
        return;
      }
    } else if (n = yb(n, t, cn), n !== null) {
      Pt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Pt = t;
      return;
    }
    Pt = t = e;
  } while (t !== null);
  Mt === 0 && (Mt = 5);
}
function So(e, t, n) {
  var r = Ye, o = Rn.transition;
  try {
    Rn.transition = null, Ye = 1, Eb(e, t, n, r);
  } finally {
    Rn.transition = o, Ye = r;
  }
  return null;
}
function Eb(e, t, n, r) {
  do
    Si();
  while (Wr !== null);
  if (Ne & 6) throw Error(G(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(G(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (sS(e, i), e === $t && (Pt = $t = null, Nt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $l || ($l = !0, d0(xa, function() {
    return Si(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Rn.transition, Rn.transition = null;
    var s = Ye;
    Ye = 1;
    var l = Ne;
    Ne |= 4, lp.current = null, Sb(e, n), n0(n, e), KS(Ed), ba = !!Td, Ed = Td = null, e.current = n, bb(n), qx(), Ne = l, Ye = s, Rn.transition = i;
  } else e.current = n;
  if ($l && ($l = !1, Wr = e, Ba = o), i = e.pendingLanes, i === 0 && (Gr = null), eS(n.stateNode), on(e, wt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Na) throw Na = !1, e = Kd, Kd = null, e;
  return Ba & 1 && e.tag !== 0 && Si(), i = e.pendingLanes, i & 1 ? e === Yd ? ws++ : (ws = 0, Yd = e) : ws = 0, so(), null;
}
function Si() {
  if (Wr !== null) {
    var e = Wy(Ba), t = Rn.transition, n = Ye;
    try {
      if (Rn.transition = null, Ye = 16 > e ? 16 : e, Wr === null) var r = !1;
      else {
        if (e = Wr, Wr = null, Ba = 0, Ne & 6) throw Error(G(331));
        var o = Ne;
        for (Ne |= 4, re = e.current; re !== null; ) {
          var i = re, s = i.child;
          if (re.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (re = u; re !== null; ) {
                  var f = re;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ss(8, f, i);
                  }
                  var m = f.child;
                  if (m !== null) m.return = f, re = m;
                  else for (; re !== null; ) {
                    f = re;
                    var y = f.sibling, d = f.return;
                    if (Jv(f), f === u) {
                      re = null;
                      break;
                    }
                    if (y !== null) {
                      y.return = d, re = y;
                      break;
                    }
                    re = d;
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
              re = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, re = s;
          else e: for (; re !== null; ) {
            if (i = re, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Ss(9, i, i.return);
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, re = v;
              break e;
            }
            re = i.return;
          }
        }
        var p = e.current;
        for (re = p; re !== null; ) {
          s = re;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, re = S;
          else e: for (s = p; re !== null; ) {
            if (l = re, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  uc(9, l);
              }
            } catch (T) {
              vt(l, l.return, T);
            }
            if (l === s) {
              re = null;
              break e;
            }
            var w = l.sibling;
            if (w !== null) {
              w.return = l.return, re = w;
              break e;
            }
            re = l.return;
          }
        }
        if (Ne = o, so(), ir && typeof ir.onPostCommitFiberRoot == "function") try {
          ir.onPostCommitFiberRoot(nc, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ye = n, Rn.transition = t;
    }
  }
  return !1;
}
function ph(e, t, n) {
  t = Ii(n, t), t = Wv(e, t, 1), e = Yr(e, t, 1), t = Qt(), e !== null && (rl(e, 1, t), on(e, t));
}
function vt(e, t, n) {
  if (e.tag === 3) ph(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ph(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gr === null || !Gr.has(r))) {
        e = Ii(n, e), e = Uv(t, e, 1), t = Yr(t, e, 1), e = Qt(), t !== null && (rl(t, 1, e), on(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Rb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qt(), e.pingedLanes |= e.suspendedLanes & n, $t === e && (Nt & n) === n && (Mt === 4 || Mt === 3 && (Nt & 130023424) === Nt && 500 > wt() - cp ? Eo(e, 0) : ap |= n), on(e, t);
}
function c0(e, t) {
  t === 0 && (e.mode & 1 ? (t = wl, wl <<= 1, !(wl & 130023424) && (wl = 4194304)) : t = 1);
  var n = Qt();
  e = Rr(e, t), e !== null && (rl(e, t, n), on(e, n));
}
function Pb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), c0(e, n);
}
function Ib(e, t) {
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
      throw Error(G(314));
  }
  r !== null && r.delete(t), c0(e, n);
}
var u0;
u0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || nn.current) tn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return tn = !1, gb(e, t, n);
    tn = !!(e.flags & 131072);
  }
  else tn = !1, ut && t.flags & 1048576 && mv(t, Pa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ra(e, t), e = t.pendingProps;
      var o = Ti(t, Ht.current);
      xi(t, n), o = np(null, t, r, e, o, n);
      var i = rp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, rn(r) ? (i = !0, Ea(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, qf(t), o.updater = cc, t.stateNode = o, o._reactInternals = t, Ld(t, r, e, n), t = zd(null, t, r, !0, i, n)) : (t.tag = 0, ut && i && Hf(t), Gt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ra(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = jb(r), e = _n(r, e), o) {
          case 0:
            t = Bd(null, t, r, e, n);
            break e;
          case 1:
            t = rh(null, t, r, e, n);
            break e;
          case 11:
            t = th(null, t, r, e, n);
            break e;
          case 14:
            t = nh(null, t, r, _n(r.type, e), n);
            break e;
        }
        throw Error(G(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), Bd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), rh(e, t, r, o, n);
    case 3:
      e: {
        if (Yv(t), e === null) throw Error(G(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, Sv(e, t), ja(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ii(Error(G(423)), t), t = oh(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ii(Error(G(424)), t), t = oh(e, t, r, n, o);
          break e;
        } else for (fn = Kr(t.stateNode.containerInfo.firstChild), pn = t, ut = !0, Dn = null, n = vv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ei(), r === o) {
            t = Pr(e, t, n);
            break e;
          }
          Gt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bv(t), e === null && $d(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Rd(r, o) ? s = null : i !== null && Rd(r, i) && (t.flags |= 32), Kv(e, t), Gt(e, t, s, n), t.child;
    case 6:
      return e === null && $d(t), null;
    case 13:
      return Gv(e, t, n);
    case 4:
      return Zf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ri(t, null, r, n) : Gt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), th(e, t, r, o, n);
    case 7:
      return Gt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Gt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, tt(Ia, r._currentValue), r._currentValue = s, i !== null) if (Hn(i.value, s)) {
          if (i.children === o.children && !nn.current) {
            t = Pr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = kr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var f = u.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Od(
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
            if (s = i.return, s === null) throw Error(G(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Od(s, n, t), s = i.sibling;
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
      return o = t.type, r = t.pendingProps.children, xi(t, n), o = In(o), r = r(o), t.flags |= 1, Gt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = _n(r, t.pendingProps), o = _n(r.type, o), nh(e, t, r, o, n);
    case 15:
      return Hv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : _n(r, o), ra(e, t), t.tag = 1, rn(r) ? (e = !0, Ea(t)) : e = !1, xi(t, n), Dv(t, r, o), Ld(t, r, o, n), zd(null, t, r, !0, e, n);
    case 19:
      return Xv(e, t, n);
    case 22:
      return Vv(e, t, n);
  }
  throw Error(G(156, t.tag));
};
function d0(e, t) {
  return zy(e, t);
}
function Mb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function En(e, t, n, r) {
  return new Mb(e, t, n, r);
}
function pp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function jb(e) {
  if (typeof e == "function") return pp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === $f) return 11;
    if (e === Of) return 14;
  }
  return 2;
}
function Qr(e, t) {
  var n = e.alternate;
  return n === null ? (n = En(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function sa(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") pp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ri:
      return Ro(n.children, o, i, t);
    case jf:
      s = 8, o |= 8;
      break;
    case id:
      return e = En(12, n, t, o | 2), e.elementType = id, e.lanes = i, e;
    case sd:
      return e = En(13, n, t, o), e.elementType = sd, e.lanes = i, e;
    case ld:
      return e = En(19, n, t, o), e.elementType = ld, e.lanes = i, e;
    case by:
      return fc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case xy:
          s = 10;
          break e;
        case Sy:
          s = 9;
          break e;
        case $f:
          s = 11;
          break e;
        case Of:
          s = 14;
          break e;
        case Br:
          s = 16, r = null;
          break e;
      }
      throw Error(G(130, e == null ? e : typeof e, ""));
  }
  return t = En(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ro(e, t, n, r) {
  return e = En(7, e, r, t), e.lanes = n, e;
}
function fc(e, t, n, r) {
  return e = En(22, e, r, t), e.elementType = by, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Bu(e, t, n) {
  return e = En(6, e, null, t), e.lanes = n, e;
}
function zu(e, t, n) {
  return t = En(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $b(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vu(0), this.expirationTimes = vu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function mp(e, t, n, r, o, i, s, l, a) {
  return e = new $b(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = En(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, qf(i), e;
}
function Ob(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ni, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function f0(e) {
  if (!e) return Jr;
  e = e._reactInternals;
  e: {
    if (_o(e) !== e || e.tag !== 1) throw Error(G(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(G(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rn(n)) return fv(e, n, t);
  }
  return t;
}
function p0(e, t, n, r, o, i, s, l, a) {
  return e = mp(n, r, !0, e, o, i, s, l, a), e.context = f0(null), n = e.current, r = Qt(), o = Xr(n), i = kr(r, o), i.callback = t ?? null, Yr(n, i, o), e.current.lanes = o, rl(e, o, r), on(e, r), e;
}
function pc(e, t, n, r) {
  var o = t.current, i = Qt(), s = Xr(o);
  return n = f0(n), t.context === null ? t.context = n : t.pendingContext = n, t = kr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Yr(o, t, s), e !== null && (Un(e, o, s, i), ea(e, o, s)), s;
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
function mh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hp(e, t) {
  mh(e, t), (e = e.alternate) && mh(e, t);
}
function Ab() {
  return null;
}
var m0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function gp(e) {
  this._internalRoot = e;
}
mc.prototype.render = gp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  pc(e, t, null, null);
};
mc.prototype.unmount = gp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ao(function() {
      pc(null, e, null, null);
    }), t[Er] = null;
  }
};
function mc(e) {
  this._internalRoot = e;
}
mc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Vy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _r.length && t !== 0 && t < _r[n].priority; n++) ;
    _r.splice(n, 0, e), n === 0 && Yy(e);
  }
};
function yp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function hc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hh() {
}
function Lb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = _a(s);
        i.call(u);
      };
    }
    var s = p0(t, r, e, 0, null, !1, !1, "", hh);
    return e._reactRootContainer = s, e[Er] = s.current, zs(e.nodeType === 8 ? e.parentNode : e), Ao(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = _a(a);
      l.call(u);
    };
  }
  var a = mp(e, 0, !1, null, null, !1, !1, "", hh);
  return e._reactRootContainer = a, e[Er] = a.current, zs(e.nodeType === 8 ? e.parentNode : e), Ao(function() {
    pc(t, a, n, r);
  }), a;
}
function gc(e, t, n, r, o) {
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
    pc(t, s, e, o);
  } else s = Lb(n, t, e, o, r);
  return _a(s);
}
Uy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = cs(t.pendingLanes);
        n !== 0 && (Nf(t, n | 1), on(t, wt()), !(Ne & 6) && (Mi = wt() + 500, so()));
      }
      break;
    case 13:
      Ao(function() {
        var r = Rr(e, 1);
        if (r !== null) {
          var o = Qt();
          Un(r, e, 1, o);
        }
      }), hp(e, 1);
  }
};
Bf = function(e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Un(t, e, 134217728, n);
    }
    hp(e, 134217728);
  }
};
Hy = function(e) {
  if (e.tag === 13) {
    var t = Xr(e), n = Rr(e, t);
    if (n !== null) {
      var r = Qt();
      Un(n, e, t, r);
    }
    hp(e, t);
  }
};
Vy = function() {
  return Ye;
};
Ky = function(e, t) {
  var n = Ye;
  try {
    return Ye = e, t();
  } finally {
    Ye = n;
  }
};
yd = function(e, t, n) {
  switch (t) {
    case "input":
      if (ud(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sc(r);
            if (!o) throw Error(G(90));
            Cy(r), ud(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ty(e, n);
      break;
    case "select":
      t = n.value, t != null && hi(e, !!n.multiple, t, !1);
  }
};
$y = up;
Oy = Ao;
var Nb = { usingClientEntryPoint: !1, Events: [il, li, sc, My, jy, up] }, Zi = { findFiberByHostInstance: wo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Bb = { bundleType: Zi.bundleType, version: Zi.version, rendererPackageName: Zi.rendererPackageName, rendererConfig: Zi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ny(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Zi.findFiberByHostInstance || Ab, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ol.isDisabled && Ol.supportsFiber) try {
    nc = Ol.inject(Bb), ir = Ol;
  } catch {
  }
}
yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nb;
yn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yp(t)) throw Error(G(200));
  return Ob(e, t, null, n);
};
yn.createRoot = function(e, t) {
  if (!yp(e)) throw Error(G(299));
  var n = !1, r = "", o = m0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = mp(e, 1, !1, null, null, n, !1, r, o), e[Er] = t.current, zs(e.nodeType === 8 ? e.parentNode : e), new gp(t);
};
yn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","), Error(G(268, e)));
  return e = Ny(t), e = e === null ? null : e.stateNode, e;
};
yn.flushSync = function(e) {
  return Ao(e);
};
yn.hydrate = function(e, t, n) {
  if (!hc(t)) throw Error(G(200));
  return gc(null, e, t, !0, n);
};
yn.hydrateRoot = function(e, t, n) {
  if (!yp(e)) throw Error(G(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = m0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = p0(t, null, e, 1, n ?? null, o, !1, i, s), e[Er] = t.current, zs(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new mc(t);
};
yn.render = function(e, t, n) {
  if (!hc(t)) throw Error(G(200));
  return gc(null, e, t, !1, n);
};
yn.unmountComponentAtNode = function(e) {
  if (!hc(e)) throw Error(G(40));
  return e._reactRootContainer ? (Ao(function() {
    gc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Er] = null;
    });
  }), !0) : !1;
};
yn.unstable_batchedUpdates = up;
yn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!hc(n)) throw Error(G(200));
  if (e == null || e._reactInternals === void 0) throw Error(G(38));
  return gc(e, t, n, !1, r);
};
yn.version = "18.3.1-next-f1338f8080-20240426";
function h0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h0);
    } catch (e) {
      console.error(e);
    }
}
h0(), hy.exports = yn;
var g0 = hy.exports, y0, gh = g0;
y0 = gh.createRoot, gh.hydrateRoot;
const Ys = {
  black: "#000",
  white: "#fff"
}, Ko = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Yo = {
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
}, Xo = {
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
}, Ji = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, zb = {
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
function Ir(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const lr = "$$material";
function Qd() {
  return Qd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qd.apply(null, arguments);
}
function _b(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Fb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Db = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Fb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = _b(o);
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
}(), Dt = "-ms-", Fa = "-moz-", De = "-webkit-", v0 = "comm", vp = "rule", xp = "decl", Wb = "@import", x0 = "@keyframes", Ub = "@layer", Hb = Math.abs, yc = String.fromCharCode, Vb = Object.assign;
function Kb(e, t) {
  return Lt(e, 0) ^ 45 ? (((t << 2 ^ Lt(e, 0)) << 2 ^ Lt(e, 1)) << 2 ^ Lt(e, 2)) << 2 ^ Lt(e, 3) : 0;
}
function S0(e) {
  return e.trim();
}
function Yb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function We(e, t, n) {
  return e.replace(t, n);
}
function qd(e, t) {
  return e.indexOf(t);
}
function Lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Gs(e, t, n) {
  return e.slice(t, n);
}
function er(e) {
  return e.length;
}
function Sp(e) {
  return e.length;
}
function Al(e, t) {
  return t.push(e), e;
}
function Gb(e, t) {
  return e.map(t).join("");
}
var vc = 1, ji = 1, b0 = 0, an = 0, Rt = 0, Di = "";
function xc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vc, column: ji, length: s, return: "" };
}
function es(e, t) {
  return Vb(xc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Xb() {
  return Rt;
}
function Qb() {
  return Rt = an > 0 ? Lt(Di, --an) : 0, ji--, Rt === 10 && (ji = 1, vc--), Rt;
}
function mn() {
  return Rt = an < b0 ? Lt(Di, an++) : 0, ji++, Rt === 10 && (ji = 1, vc++), Rt;
}
function ar() {
  return Lt(Di, an);
}
function la() {
  return an;
}
function ll(e, t) {
  return Gs(Di, e, t);
}
function Xs(e) {
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
function w0(e) {
  return vc = ji = 1, b0 = er(Di = e), an = 0, [];
}
function C0(e) {
  return Di = "", e;
}
function aa(e) {
  return S0(ll(an - 1, Zd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function qb(e) {
  for (; (Rt = ar()) && Rt < 33; )
    mn();
  return Xs(e) > 2 || Xs(Rt) > 3 ? "" : " ";
}
function Zb(e, t) {
  for (; --t && mn() && !(Rt < 48 || Rt > 102 || Rt > 57 && Rt < 65 || Rt > 70 && Rt < 97); )
    ;
  return ll(e, la() + (t < 6 && ar() == 32 && mn() == 32));
}
function Zd(e) {
  for (; mn(); )
    switch (Rt) {
      case e:
        return an;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Zd(Rt);
        break;
      case 40:
        e === 41 && Zd(e);
        break;
      case 92:
        mn();
        break;
    }
  return an;
}
function Jb(e, t) {
  for (; mn() && e + Rt !== 57; )
    if (e + Rt === 84 && ar() === 47)
      break;
  return "/*" + ll(t, an - 1) + "*" + yc(e === 47 ? e : mn());
}
function ew(e) {
  for (; !Xs(ar()); )
    mn();
  return ll(e, an);
}
function tw(e) {
  return C0(ca("", null, null, null, [""], e = w0(e), 0, [0], e));
}
function ca(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, f = 0, m = s, y = 0, d = 0, x = 0, b = 1, C = 1, v = 1, p = 0, S = "", w = o, T = i, k = r, E = S; C; )
    switch (x = p, p = mn()) {
      case 40:
        if (x != 108 && Lt(E, m - 1) == 58) {
          qd(E += We(aa(p), "&", "&\f"), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += aa(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += qb(x);
        break;
      case 92:
        E += Zb(la() - 1, 7);
        continue;
      case 47:
        switch (ar()) {
          case 42:
          case 47:
            Al(nw(Jb(mn(), la()), t, n), a);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * b:
        l[u++] = er(E) * v;
      case 125 * b:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            C = 0;
          case 59 + f:
            v == -1 && (E = We(E, /\f/g, "")), d > 0 && er(E) - m && Al(d > 32 ? vh(E + ";", r, n, m - 1) : vh(We(E, " ", "") + ";", r, n, m - 2), a);
            break;
          case 59:
            E += ";";
          default:
            if (Al(k = yh(E, t, n, u, f, o, l, S, w = [], T = [], m), i), p === 123)
              if (f === 0)
                ca(E, t, k, k, w, i, m, l, T);
              else
                switch (y === 99 && Lt(E, 3) === 110 ? 100 : y) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ca(e, k, k, r && Al(yh(e, k, k, 0, 0, o, l, S, o, w = [], m), T), o, T, m, l, r ? w : T);
                    break;
                  default:
                    ca(E, k, k, k, [""], T, 0, l, T);
                }
        }
        u = f = d = 0, b = v = 1, S = E = "", m = s;
        break;
      case 58:
        m = 1 + er(E), d = x;
      default:
        if (b < 1) {
          if (p == 123)
            --b;
          else if (p == 125 && b++ == 0 && Qb() == 125)
            continue;
        }
        switch (E += yc(p), p * b) {
          case 38:
            v = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            l[u++] = (er(E) - 1) * v, v = 1;
            break;
          case 64:
            ar() === 45 && (E += aa(mn())), y = ar(), f = m = er(S = E += ew(la())), p++;
            break;
          case 45:
            x === 45 && er(E) == 2 && (b = 0);
        }
    }
  return i;
}
function yh(e, t, n, r, o, i, s, l, a, u, f) {
  for (var m = o - 1, y = o === 0 ? i : [""], d = Sp(y), x = 0, b = 0, C = 0; x < r; ++x)
    for (var v = 0, p = Gs(e, m + 1, m = Hb(b = s[x])), S = e; v < d; ++v)
      (S = S0(b > 0 ? y[v] + " " + p : We(p, /&\f/g, y[v]))) && (a[C++] = S);
  return xc(e, t, n, o === 0 ? vp : l, a, u, f);
}
function nw(e, t, n) {
  return xc(e, t, n, v0, yc(Xb()), Gs(e, 2, -2), 0);
}
function vh(e, t, n, r) {
  return xc(e, t, n, xp, Gs(e, 0, r), Gs(e, r + 1, -1), r);
}
function bi(e, t) {
  for (var n = "", r = Sp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function rw(e, t, n, r) {
  switch (e.type) {
    case Ub:
      if (e.children.length) break;
    case Wb:
    case xp:
      return e.return = e.return || e.value;
    case v0:
      return "";
    case x0:
      return e.return = e.value + "{" + bi(e.children, r) + "}";
    case vp:
      e.value = e.props.join(",");
  }
  return er(n = bi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ow(e) {
  var t = Sp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function iw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function k0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var sw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = ar(), o === 38 && i === 12 && (n[r] = 1), !Xs(i); )
    mn();
  return ll(t, an);
}, lw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Xs(o)) {
      case 0:
        o === 38 && ar() === 12 && (n[r] = 1), t[r] += sw(an - 1, n, r);
        break;
      case 2:
        t[r] += aa(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = ar() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += yc(o);
    }
  while (o = mn());
  return t;
}, aw = function(t, n) {
  return C0(lw(w0(t), n));
}, xh = /* @__PURE__ */ new WeakMap(), cw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !xh.get(r)) && !o) {
      xh.set(t, !0);
      for (var i = [], s = aw(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var f = 0; f < l.length; f++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[f]) : l[f] + " " + s[a];
    }
  }
}, uw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function T0(e, t) {
  switch (Kb(e, t)) {
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
      return De + e + Fa + e + Dt + e + e;
    case 6828:
    case 4268:
      return De + e + Dt + e + e;
    case 6165:
      return De + e + Dt + "flex-" + e + e;
    case 5187:
      return De + e + We(e, /(\w+).+(:[^]+)/, De + "box-$1$2" + Dt + "flex-$1$2") + e;
    case 5443:
      return De + e + Dt + "flex-item-" + We(e, /flex-|-self/, "") + e;
    case 4675:
      return De + e + Dt + "flex-line-pack" + We(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return De + e + Dt + We(e, "shrink", "negative") + e;
    case 5292:
      return De + e + Dt + We(e, "basis", "preferred-size") + e;
    case 6060:
      return De + "box-" + We(e, "-grow", "") + De + e + Dt + We(e, "grow", "positive") + e;
    case 4554:
      return De + We(e, /([^-])(transform)/g, "$1" + De + "$2") + e;
    case 6187:
      return We(We(We(e, /(zoom-|grab)/, De + "$1"), /(image-set)/, De + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return We(e, /(image-set\([^]*)/, De + "$1$`$1");
    case 4968:
      return We(We(e, /(.+:)(flex-)?(.*)/, De + "box-pack:$3" + Dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + De + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return We(e, /(.+)-inline(.+)/, De + "$1$2") + e;
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
      if (er(e) - 1 - t > 6) switch (Lt(e, t + 1)) {
        case 109:
          if (Lt(e, t + 4) !== 45) break;
        case 102:
          return We(e, /(.+:)(.+)-([^]+)/, "$1" + De + "$2-$3$1" + Fa + (Lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~qd(e, "stretch") ? T0(We(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Lt(e, t + 1) !== 115) break;
    case 6444:
      switch (Lt(e, er(e) - 3 - (~qd(e, "!important") && 10))) {
        case 107:
          return We(e, ":", ":" + De) + e;
        case 101:
          return We(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + De + (Lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + De + "$2$3$1" + Dt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Lt(e, t + 11)) {
        case 114:
          return De + e + Dt + We(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return De + e + Dt + We(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return De + e + Dt + We(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return De + e + Dt + e + e;
  }
  return e;
}
var dw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case xp:
      t.return = T0(t.value, t.length);
      break;
    case x0:
      return bi([es(t, {
        value: We(t.value, "@", "@" + De)
      })], o);
    case vp:
      if (t.length) return Gb(t.props, function(i) {
        switch (Yb(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return bi([es(t, {
              props: [We(i, /:(read-\w+)/, ":" + Fa + "$1")]
            })], o);
          case "::placeholder":
            return bi([es(t, {
              props: [We(i, /:(plac\w+)/, ":" + De + "input-$1")]
            }), es(t, {
              props: [We(i, /:(plac\w+)/, ":" + Fa + "$1")]
            }), es(t, {
              props: [We(i, /:(plac\w+)/, Dt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, fw = [dw], pw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || fw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var C = b.getAttribute("data-emotion").split(" "), v = 1; v < C.length; v++)
        i[C[v]] = !0;
      l.push(b);
    }
  );
  var a, u = [cw, uw];
  {
    var f, m = [rw, iw(function(b) {
      f.insert(b);
    })], y = ow(u.concat(o, m)), d = function(C) {
      return bi(tw(C), y);
    };
    a = function(C, v, p, S) {
      f = p, d(C ? C + "{" + v.styles + "}" : v.styles), S && (x.inserted[v.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new Db({
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
}, E0 = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ot = typeof Symbol == "function" && Symbol.for, bp = Ot ? Symbol.for("react.element") : 60103, wp = Ot ? Symbol.for("react.portal") : 60106, Sc = Ot ? Symbol.for("react.fragment") : 60107, bc = Ot ? Symbol.for("react.strict_mode") : 60108, wc = Ot ? Symbol.for("react.profiler") : 60114, Cc = Ot ? Symbol.for("react.provider") : 60109, kc = Ot ? Symbol.for("react.context") : 60110, Cp = Ot ? Symbol.for("react.async_mode") : 60111, Tc = Ot ? Symbol.for("react.concurrent_mode") : 60111, Ec = Ot ? Symbol.for("react.forward_ref") : 60112, Rc = Ot ? Symbol.for("react.suspense") : 60113, mw = Ot ? Symbol.for("react.suspense_list") : 60120, Pc = Ot ? Symbol.for("react.memo") : 60115, Ic = Ot ? Symbol.for("react.lazy") : 60116, hw = Ot ? Symbol.for("react.block") : 60121, gw = Ot ? Symbol.for("react.fundamental") : 60117, yw = Ot ? Symbol.for("react.responder") : 60118, vw = Ot ? Symbol.for("react.scope") : 60119;
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case bp:
        switch (e = e.type, e) {
          case Cp:
          case Tc:
          case Sc:
          case wc:
          case bc:
          case Rc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case kc:
              case Ec:
              case Ic:
              case Pc:
              case Cc:
                return e;
              default:
                return t;
            }
        }
      case wp:
        return t;
    }
  }
}
function R0(e) {
  return xn(e) === Tc;
}
Ge.AsyncMode = Cp;
Ge.ConcurrentMode = Tc;
Ge.ContextConsumer = kc;
Ge.ContextProvider = Cc;
Ge.Element = bp;
Ge.ForwardRef = Ec;
Ge.Fragment = Sc;
Ge.Lazy = Ic;
Ge.Memo = Pc;
Ge.Portal = wp;
Ge.Profiler = wc;
Ge.StrictMode = bc;
Ge.Suspense = Rc;
Ge.isAsyncMode = function(e) {
  return R0(e) || xn(e) === Cp;
};
Ge.isConcurrentMode = R0;
Ge.isContextConsumer = function(e) {
  return xn(e) === kc;
};
Ge.isContextProvider = function(e) {
  return xn(e) === Cc;
};
Ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bp;
};
Ge.isForwardRef = function(e) {
  return xn(e) === Ec;
};
Ge.isFragment = function(e) {
  return xn(e) === Sc;
};
Ge.isLazy = function(e) {
  return xn(e) === Ic;
};
Ge.isMemo = function(e) {
  return xn(e) === Pc;
};
Ge.isPortal = function(e) {
  return xn(e) === wp;
};
Ge.isProfiler = function(e) {
  return xn(e) === wc;
};
Ge.isStrictMode = function(e) {
  return xn(e) === bc;
};
Ge.isSuspense = function(e) {
  return xn(e) === Rc;
};
Ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Sc || e === Tc || e === wc || e === bc || e === Rc || e === mw || typeof e == "object" && e !== null && (e.$$typeof === Ic || e.$$typeof === Pc || e.$$typeof === Cc || e.$$typeof === kc || e.$$typeof === Ec || e.$$typeof === gw || e.$$typeof === yw || e.$$typeof === vw || e.$$typeof === hw);
};
Ge.typeOf = xn;
E0.exports = Ge;
var xw = E0.exports, P0 = xw, Sw = {
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
}, I0 = {};
I0[P0.ForwardRef] = Sw;
I0[P0.Memo] = bw;
var ww = !0;
function M0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var kp = function(t, n, r) {
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
  ww === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Tp = function(t, n, r) {
  kp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Cw(e) {
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
var kw = {
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
}, Tw = /[A-Z]|^ms/g, Ew = /_EMO_([^_]+?)_([^]*?)_EMO_/g, j0 = function(t) {
  return t.charCodeAt(1) === 45;
}, Sh = function(t) {
  return t != null && typeof t != "boolean";
}, _u = /* @__PURE__ */ k0(function(e) {
  return j0(e) ? e : e.replace(Tw, "-$&").toLowerCase();
}), bh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ew, function(r, o, i) {
          return tr = {
            name: o,
            styles: i,
            next: tr
          }, o;
        });
  }
  return kw[t] !== 1 && !j0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Qs(e, t, n) {
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
        return tr = {
          name: o.name,
          styles: o.styles,
          next: tr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            tr = {
              name: s.name,
              styles: s.styles,
              next: tr
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Rw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = tr, u = n(e);
        return tr = a, Qs(e, t, u);
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
function Rw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Qs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : Sh(l) && (r += _u(i) + ":" + bh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          Sh(s[a]) && (r += _u(i) + ":" + bh(i, s[a]) + ";");
      else {
        var u = Qs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += _u(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var wh = /label:\s*([^\s;{]+)\s*(;|$)/g, tr;
function al(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  tr = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Qs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Qs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  wh.lastIndex = 0;
  for (var u = "", f; (f = wh.exec(o)) !== null; )
    u += "-" + f[1];
  var m = Cw(o) + u;
  return {
    name: m,
    styles: o,
    next: tr
  };
}
var Pw = function(t) {
  return t();
}, $0 = ha.useInsertionEffect ? ha.useInsertionEffect : !1, O0 = $0 || Pw, Ch = $0 || h.useLayoutEffect, A0 = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ pw({
    key: "css"
  }) : null
);
A0.Provider;
var Ep = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(n, r) {
    var o = h.useContext(A0);
    return t(n, o, r);
  });
}, cl = /* @__PURE__ */ h.createContext({}), Rp = {}.hasOwnProperty, Jd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Iw = function(t, n) {
  var r = {};
  for (var o in n)
    Rp.call(n, o) && (r[o] = n[o]);
  return r[Jd] = t, r;
}, Mw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return kp(n, r, o), O0(function() {
    return Tp(n, r, o);
  }), null;
}, jw = /* @__PURE__ */ Ep(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Jd], i = [r], s = "";
  typeof e.className == "string" ? s = M0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = al(i, void 0, h.useContext(cl));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    Rp.call(e, u) && u !== "css" && u !== Jd && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Mw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, a));
}), $w = jw, kh = function(t, n) {
  var r = arguments;
  if (n == null || !Rp.call(n, "css"))
    return h.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = $w, i[1] = Iw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return h.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(kh || (kh = {}));
var Ow = /* @__PURE__ */ Ep(function(e, t) {
  var n = e.styles, r = al([n], void 0, h.useContext(cl)), o = h.useRef();
  return Ch(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), Ch(function() {
    var i = o.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Tp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function eo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return al(t);
}
function lo() {
  var e = eo.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Aw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Lw = /* @__PURE__ */ k0(
  function(e) {
    return Aw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Nw = Lw, Bw = function(t) {
  return t !== "theme";
}, Th = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Nw : Bw;
}, Eh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, zw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return kp(n, r, o), O0(function() {
    return Tp(n, r, o);
  }), null;
}, _w = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = Eh(t, n, r), a = l || Th(o), u = !a("as");
  return function() {
    var f = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      var y = f[0];
      m.push(y[0]);
      for (var d = f.length, x = 1; x < d; x++)
        m.push(f[x], y[x]);
    }
    var b = Ep(function(C, v, p) {
      var S = u && C.as || o, w = "", T = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var E in C)
          k[E] = C[E];
        k.theme = h.useContext(cl);
      }
      typeof C.className == "string" ? w = M0(v.registered, T, C.className) : C.className != null && (w = C.className + " ");
      var R = al(m.concat(T), v.registered, k);
      w += v.key + "-" + R.name, s !== void 0 && (w += " " + s);
      var I = u && l === void 0 ? Th(S) : a, L = {};
      for (var M in C)
        u && M === "as" || I(M) && (L[M] = C[M]);
      return L.className = w, p && (L.ref = p), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(zw, {
        cache: v,
        serialized: R,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ h.createElement(S, L));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, v) {
      var p = e(C, Qd({}, n, v, {
        shouldForwardProp: Eh(b, v, !0)
      }));
      return p.apply(void 0, m);
    }, b;
  };
}, Fw = [
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
], ef = _w.bind(null);
Fw.forEach(function(e) {
  ef[e] = ef(e);
});
function Dw(e) {
  return e == null || Object.keys(e).length === 0;
}
function L0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Dw(o) ? n : o) : t;
  return /* @__PURE__ */ c.jsx(Ow, {
    styles: r
  });
}
function N0(e, t) {
  return ef(e, t);
}
function Ww(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Rh = [];
function qr(e) {
  return Rh[0] = e, al(Rh);
}
var B0 = { exports: {} }, et = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pp = Symbol.for("react.transitional.element"), Ip = Symbol.for("react.portal"), Mc = Symbol.for("react.fragment"), jc = Symbol.for("react.strict_mode"), $c = Symbol.for("react.profiler"), Oc = Symbol.for("react.consumer"), Ac = Symbol.for("react.context"), Lc = Symbol.for("react.forward_ref"), Nc = Symbol.for("react.suspense"), Bc = Symbol.for("react.suspense_list"), zc = Symbol.for("react.memo"), _c = Symbol.for("react.lazy"), Uw = Symbol.for("react.view_transition"), Hw = Symbol.for("react.client.reference");
function On(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Pp:
        switch (e = e.type, e) {
          case Mc:
          case $c:
          case jc:
          case Nc:
          case Bc:
          case Uw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ac:
              case Lc:
              case _c:
              case zc:
                return e;
              case Oc:
                return e;
              default:
                return t;
            }
        }
      case Ip:
        return t;
    }
  }
}
et.ContextConsumer = Oc;
et.ContextProvider = Ac;
et.Element = Pp;
et.ForwardRef = Lc;
et.Fragment = Mc;
et.Lazy = _c;
et.Memo = zc;
et.Portal = Ip;
et.Profiler = $c;
et.StrictMode = jc;
et.Suspense = Nc;
et.SuspenseList = Bc;
et.isContextConsumer = function(e) {
  return On(e) === Oc;
};
et.isContextProvider = function(e) {
  return On(e) === Ac;
};
et.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Pp;
};
et.isForwardRef = function(e) {
  return On(e) === Lc;
};
et.isFragment = function(e) {
  return On(e) === Mc;
};
et.isLazy = function(e) {
  return On(e) === _c;
};
et.isMemo = function(e) {
  return On(e) === zc;
};
et.isPortal = function(e) {
  return On(e) === Ip;
};
et.isProfiler = function(e) {
  return On(e) === $c;
};
et.isStrictMode = function(e) {
  return On(e) === jc;
};
et.isSuspense = function(e) {
  return On(e) === Nc;
};
et.isSuspenseList = function(e) {
  return On(e) === Bc;
};
et.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Mc || e === $c || e === jc || e === Nc || e === Bc || typeof e == "object" && e !== null && (e.$$typeof === _c || e.$$typeof === zc || e.$$typeof === Ac || e.$$typeof === Oc || e.$$typeof === Lc || e.$$typeof === Hw || e.getModuleId !== void 0);
};
et.typeOf = On;
B0.exports = et;
var z0 = B0.exports;
function br(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function _0(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || z0.isValidElementType(e) || !br(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = _0(e[n]);
  }), t;
}
function Bt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return br(e) && br(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ h.isValidElement(t[o]) || z0.isValidElementType(t[o]) ? r[o] = t[o] : br(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && br(e[o]) ? r[o] = Bt(e[o], t[o], n) : n.clone ? r[o] = br(t[o]) ? _0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Vw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function F0(e) {
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
  } = e, i = Vw(t), s = Object.keys(i);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function u(d, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - r / 100}${n})`;
  }
  function f(d) {
    return s.indexOf(d) + 1 < s.length ? u(d, s[s.indexOf(d) + 1]) : l(d);
  }
  function m(d) {
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
    only: f,
    not: m,
    unit: n,
    internal_mediaKeys: y,
    ...o
  };
}
const Ph = /min-width:\s*([0-9.]+)/;
function Ih(e, t) {
  if (!e.containerQueries || !Kw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, l;
    return +(((s = o.match(Ph)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(Ph)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Kw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function D0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Yw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Gw(e) {
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
function W0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function wi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return eC(t) ? t : tC(e) ? $i(t) : n && r ? Zw(e, t) : n !== r ? $i(t) : nC(e, t);
}
function Qw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = $i(e[t]);
  return r;
}
function qw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = $i(e[n]));
  return t;
}
function Zw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = $i(t[r]);
  return e;
}
function Jw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function eC(e) {
  return typeof e != "object" || e === null;
}
function tC(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function $i(e) {
  return Jw(e) ? Array.isArray(e) ? Qw(e) : qw(e) : e;
}
function nC(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = wi(e[n], t[n]) : e[n] = $i(t[n]));
  return e;
}
const rC = {}, Fc = {
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
}, Da = F0({
  values: Fc
}), oC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Fc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function to(e, t, n) {
  const r = {};
  return Dc(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : wi(r, l);
  });
}
function Dc(e, t, n, r) {
  if (t ?? (t = rC), Array.isArray(n)) {
    const o = t.breakpoints ?? Da;
    for (let i = 0; i < n.length; i += 1)
      Fu(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Da, i = o.values ?? Fc;
    for (const s in n)
      if (D0(o.keys, s)) {
        const l = Yw(t.containerQueries ? t : oC, s);
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
function U0(e = Da) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function tf(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    W0(t[o]) && delete t[o];
  }
  return t;
}
function iC(e, ...t) {
  const r = [U0(e), ...t].reduce((o, i) => Bt(o, i), {});
  return tf(e, r);
}
function sC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Du(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || sC(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((l, a, u) => {
    if (Array.isArray(t))
      l[a] = t[u] != null ? t[u] : t[s], s = u;
    else if (typeof t == "object" && t) {
      const f = t;
      l[a] = f[a] != null ? f[a] : f[s], s = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function lC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (D0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ne(e) {
  if (typeof e != "string")
    throw new Error(Ir(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function H0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Wc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Wc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Mh(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Mh(e, o, r);
}
function Mh(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ne(s)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function kt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, u = Wc(a, r) || {};
    return to(s, l, (m) => {
      const y = H0(u, o, m, t);
      return n === !1 ? y : {
        [n]: y
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const aC = {
  internal_cache: {}
}, Wa = {
  m: "margin",
  p: "padding"
}, jh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, $h = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, qs = {};
for (const e in Wa)
  qs[e] = [Wa[e]];
for (const e in Wa)
  for (const t in jh) {
    const n = Wa[e], r = jh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    qs[e + t] = o;
  }
for (const e in $h)
  qs[e] = qs[$h[e]];
const Mp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), jp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Mp, ...jp];
function ul(e, t, n, r) {
  const o = Wc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Uc(e) {
  return ul(e, "spacing", 8);
}
function Lo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Oh = [""];
function V0(e, t) {
  var i;
  const n = e.theme ?? aC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Uc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = qs[s] ?? (Oh[0] = s, Oh), a = e[s];
    Dc(o, e.theme, a, (u, f) => {
      const m = u ? o[u] : o;
      for (let y = 0; y < l.length; y += 1)
        m[l[y]] = Lo(r, f);
    });
  }
  return o;
}
function $p(e) {
  return V0(e, Mp);
}
$p.propTypes = {};
$p.filterProps = Mp;
const Tt = $p;
function Op(e) {
  return V0(e, jp);
}
Op.propTypes = {};
Op.filterProps = jp;
const Et = Op;
function K0(e = 8, t = Uc({
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
function Hc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && wi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function kn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function An(e, t) {
  return kt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const cC = An("border", kn), uC = An("borderTop", kn), dC = An("borderRight", kn), fC = An("borderBottom", kn), pC = An("borderLeft", kn), mC = An("borderColor"), hC = An("borderTopColor"), gC = An("borderRightColor"), yC = An("borderBottomColor"), vC = An("borderLeftColor"), xC = An("outline", kn), SC = An("outlineColor"), Vc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = ul(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Lo(t, r)
    });
    return to(e, e.borderRadius, n);
  }
  return null;
};
Vc.propTypes = {};
Vc.filterProps = ["borderRadius"];
Hc(cC, uC, dC, fC, pC, mC, hC, gC, yC, vC, Vc, xC, SC);
const Kc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ul(e.theme, "spacing", 8), n = (r) => ({
      gap: Lo(t, r)
    });
    return to(e, e.gap, n);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["gap"];
const Yc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ul(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Lo(t, r)
    });
    return to(e, e.columnGap, n);
  }
  return null;
};
Yc.propTypes = {};
Yc.filterProps = ["columnGap"];
const Gc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ul(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Lo(t, r)
    });
    return to(e, e.rowGap, n);
  }
  return null;
};
Gc.propTypes = {};
Gc.filterProps = ["rowGap"];
const bC = kt({
  prop: "gridColumn"
}), wC = kt({
  prop: "gridRow"
}), CC = kt({
  prop: "gridAutoFlow"
}), kC = kt({
  prop: "gridAutoColumns"
}), TC = kt({
  prop: "gridAutoRows"
}), EC = kt({
  prop: "gridTemplateColumns"
}), RC = kt({
  prop: "gridTemplateRows"
}), PC = kt({
  prop: "gridTemplateAreas"
}), IC = kt({
  prop: "gridArea"
});
Hc(Kc, Yc, Gc, bC, wC, CC, kC, TC, EC, RC, PC, IC);
function Ci(e, t) {
  return t === "grey" ? t : e;
}
const MC = kt({
  prop: "color",
  themeKey: "palette",
  transform: Ci
}), jC = kt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ci
}), $C = kt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ci
});
Hc(MC, jC, $C);
const OC = Fc;
function dn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const AC = kt({
  prop: "width",
  transform: dn
}), Ap = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || OC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: dn(n)
      };
    };
    return to(e, e.maxWidth, t);
  }
  return null;
};
Ap.filterProps = ["maxWidth"];
const LC = kt({
  prop: "minWidth",
  transform: dn
}), NC = kt({
  prop: "height",
  transform: dn
}), BC = kt({
  prop: "maxHeight",
  transform: dn
}), zC = kt({
  prop: "minHeight",
  transform: dn
});
kt({
  prop: "size",
  cssProperty: "width",
  transform: dn
});
kt({
  prop: "size",
  cssProperty: "height",
  transform: dn
});
const _C = kt({
  prop: "boxSizing"
});
Hc(AC, Ap, LC, NC, BC, zC, _C);
const Xc = {
  // borders
  border: {
    themeKey: "borders",
    transform: kn
  },
  borderTop: {
    themeKey: "borders",
    transform: kn
  },
  borderRight: {
    themeKey: "borders",
    transform: kn
  },
  borderBottom: {
    themeKey: "borders",
    transform: kn
  },
  borderLeft: {
    themeKey: "borders",
    transform: kn
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
    transform: kn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Vc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ci
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ci
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ci
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
    style: Tt
  },
  mt: {
    style: Tt
  },
  mr: {
    style: Tt
  },
  mb: {
    style: Tt
  },
  ml: {
    style: Tt
  },
  mx: {
    style: Tt
  },
  my: {
    style: Tt
  },
  margin: {
    style: Tt
  },
  marginTop: {
    style: Tt
  },
  marginRight: {
    style: Tt
  },
  marginBottom: {
    style: Tt
  },
  marginLeft: {
    style: Tt
  },
  marginX: {
    style: Tt
  },
  marginY: {
    style: Tt
  },
  marginInline: {
    style: Tt
  },
  marginInlineStart: {
    style: Tt
  },
  marginInlineEnd: {
    style: Tt
  },
  marginBlock: {
    style: Tt
  },
  marginBlockStart: {
    style: Tt
  },
  marginBlockEnd: {
    style: Tt
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
    style: Kc
  },
  rowGap: {
    style: Gc
  },
  columnGap: {
    style: Yc
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
    style: Ap
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
}, FC = {};
function DC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = FC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Xc, s = {
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
      const f = r.breakpoints ?? Da, m = U0(f);
      for (const y in u) {
        const d = WC(u[y], r);
        if (d != null) {
          if (typeof d != "object") {
            Ah(m, y, d, r, i);
            continue;
          }
          if (i[y]) {
            Ah(m, y, d, r, i);
            continue;
          }
          lC(f, d) ? Dc(m, t.theme, d, (x, b) => {
            m[x][y] = b;
          }) : (s.sx = d, m[y] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Ih(r, tf(f, m))
      } : Ih(r, tf(f, m));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const No = DC();
function Ah(e, t, n, r, o) {
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
    wi(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, f = Wc(r, s);
  Dc(e, r, n, (m, y) => {
    const d = H0(f, u, y, t);
    a === !1 ? wi(m ? e[m] : e, d) : m ? e[m][a] = d : e[a] = d;
  });
}
function WC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function UC(e, t) {
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
function Qc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = F0(n), a = K0(o);
  let u = Bt({
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
  return u = Gw(u), u.applyStyles = UC, u = t.reduce((f, m) => Bt(f, m), u), u.unstable_sxConfig = {
    ...Xc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(m) {
    return No({
      sx: m,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function HC(e) {
  return Object.keys(e).length === 0;
}
function Lp(e = null) {
  const t = h.useContext(cl);
  return !t || HC(t) ? e : t;
}
const VC = Qc();
function qc(e = VC) {
  return Lp(e);
}
function Wu(e) {
  const t = qr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Y0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = qc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Wu(typeof s == "function" ? s(o) : s)) : i = Wu(i)), /* @__PURE__ */ c.jsx(L0, {
    styles: i
  });
}
const Lh = (e) => e, KC = () => {
  let e = Lh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Lh;
    }
  };
}, G0 = KC();
function X0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = X0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = X0(e)) && (r && (r += " "), r += t);
  return r;
}
function YC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = N0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(No);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const f = qc(n), {
      className: m,
      component: y = "div",
      ...d
    } = a;
    return /* @__PURE__ */ c.jsx(i, {
      as: y,
      ref: u,
      className: te(m, o ? o(r) : r),
      theme: t && f[t] || f,
      ...d
    });
  });
}
const GC = {
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
function ue(e, t, n = "Mui") {
  const r = GC[t];
  return r ? `${n}-${r}` : `${G0.generate(e)}-${t}`;
}
function ae(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ue(e, o, n);
  }), r;
}
function Q0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: qr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = qr(o.style));
  }), r;
}
const XC = Qc();
function Uu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function To(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function QC(e) {
  return e ? (t, n) => n[e] : null;
}
function qC(e, t, n) {
  e.theme = W0(e.theme) ? n : e.theme[t] || e.theme;
}
function ua(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => ua(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? To(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? To(qr(s), n) : s;
    }
    return q0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? To(qr(r.style), n) : r.style : n ? To(qr(r), n) : r;
}
function q0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? To(qr(l.style(o)), r) : l.style(o))) : n.push(r ? To(qr(l.style), r) : l.style);
  }
  return n;
}
function Z0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = XC,
    rootShouldForwardProp: r = Uu,
    slotShouldForwardProp: o = Uu
  } = e;
  function i(l) {
    qC(l, t, n);
  }
  return (l, a = {}) => {
    Ww(l, (k) => k.filter((E) => E !== No));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = QC(ek(f)),
      ...x
    } = a, b = u && u.startsWith("Mui") || f ? "components" : "custom", C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), v = y || !1;
    let p = Uu;
    f === "Root" || f === "root" ? p = r : f ? p = o : JC(l) && (p = void 0);
    const S = N0(l, {
      shouldForwardProp: p,
      label: ZC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(R) {
          return ua(R, k, R.theme.modularCssLayers ? b : void 0);
        };
      if (br(k)) {
        const E = Q0(k);
        return function(I) {
          return E.variants ? ua(I, E, I.theme.modularCssLayers ? b : void 0) : I.theme.modularCssLayers ? To(E.style, b) : E.style;
        };
      }
      return k;
    }, T = (...k) => {
      const E = [], R = k.map(w), I = [];
      if (E.push(i), u && d && I.push(function(j) {
        var N, $;
        const O = ($ = (N = j.theme.components) == null ? void 0 : N[u]) == null ? void 0 : $.styleOverrides;
        if (!O)
          return null;
        const A = {};
        for (const z in O)
          A[z] = ua(j, O[z], j.theme.modularCssLayers ? "theme" : void 0);
        return d(j, A);
      }), u && !C && I.push(function(j) {
        var A, N;
        const P = j.theme, O = (N = (A = P == null ? void 0 : P.components) == null ? void 0 : A[u]) == null ? void 0 : N.variants;
        return O ? q0(j, O, [], j.theme.modularCssLayers ? "theme" : void 0) : null;
      }), v || I.push(No), Array.isArray(R[0])) {
        const g = R.shift(), j = new Array(E.length).fill(""), P = new Array(I.length).fill("");
        let O;
        O = [...j, ...g, ...P], O.raw = [...j, ...g.raw, ...P], E.unshift(O);
      }
      const L = [...E, ...R, ...I], M = S(...L);
      return l.muiName && (M.muiName = l.muiName), M;
    };
    return S.withConfig && (T.withConfig = S.withConfig), T;
  };
}
function ZC(e, t) {
  return void 0;
}
function JC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ek(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const tk = Z0();
function Zs(e, t, n = !1) {
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
              r[i][u] = Zs(s[u], l[u], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = te(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function nk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Zs(t.components[n].defaultProps, r);
}
function rk(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = qc(r);
  return o && (i = i[o] || i), nk({
    theme: i,
    name: n,
    props: t
  });
}
const ht = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function ok(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Np(e, t = 0, n = 1) {
  return ok(e, t, n);
}
function ik(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function no(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return no(ik(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Ir(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Ir(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const sk = (e) => {
  const t = no(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, ds = (e, t) => {
  try {
    return sk(e);
  } catch {
    return e;
  }
};
function Zc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function J0(e) {
  e = no(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, f = (u + n / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Zc({
    type: l,
    values: a
  });
}
function nf(e) {
  e = no(e);
  let t = e.type === "hsl" || e.type === "hsla" ? no(J0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function lk(e, t) {
  const n = nf(e), r = nf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ua(e, t) {
  return e = no(e), t = Np(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Zc(e);
}
function mo(e, t, n) {
  try {
    return Ua(e, t);
  } catch {
    return e;
  }
}
function Jc(e, t) {
  if (e = no(e), t = Np(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Zc(e);
}
function Ve(e, t, n) {
  try {
    return Jc(e, t);
  } catch {
    return e;
  }
}
function eu(e, t) {
  if (e = no(e), t = Np(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Zc(e);
}
function Ke(e, t, n) {
  try {
    return eu(e, t);
  } catch {
    return e;
  }
}
function rf(e, t = 0.15) {
  return nf(e) > 0.5 ? Jc(e, t) : eu(e, t);
}
function Ll(e, t, n) {
  try {
    return rf(e, t);
  } catch {
    return e;
  }
}
const e1 = /* @__PURE__ */ h.createContext(null);
function Bp() {
  return h.useContext(e1);
}
const ak = typeof Symbol == "function" && Symbol.for, ck = ak ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function uk(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function dk(e) {
  const {
    children: t,
    theme: n
  } = e, r = Bp(), o = h.useMemo(() => {
    const i = r === null ? {
      ...n
    } : uk(r, n);
    return i != null && (i[ck] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ c.jsx(e1.Provider, {
    value: o,
    children: t
  });
}
const t1 = /* @__PURE__ */ h.createContext();
function fk({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(t1.Provider, {
    value: e ?? !0,
    ...t
  });
}
const dl = () => h.useContext(t1) ?? !1, n1 = /* @__PURE__ */ h.createContext(void 0);
function pk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c.jsx(n1.Provider, {
    value: e,
    children: t
  });
}
function mk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Zs(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Zs(o, r, t.components.mergeClassNameAndStyle) : r;
}
function hk({
  props: e,
  name: t
}) {
  const n = h.useContext(n1);
  return mk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Nh = 0;
function gk(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Nh += 1, n(`mui-${Nh}`));
  }, [t]), r;
}
const yk = {
  ...ha
}, Bh = yk.useId;
function Mr(e) {
  if (Bh !== void 0) {
    const t = Bh();
    return e ?? t;
  }
  return gk(e);
}
function vk(e) {
  const t = Lp(), n = Mr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ht(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ c.jsx(Y0, {
    styles: o
  }) : null;
}
const zh = {};
function _h(e, t, n, r = !1) {
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
function r1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Lp(zh), i = Bp() || zh, s = _h(r, o, n), l = _h(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = vk(s);
  return /* @__PURE__ */ c.jsx(dk, {
    theme: l,
    children: /* @__PURE__ */ c.jsx(cl.Provider, {
      value: s,
      children: /* @__PURE__ */ c.jsx(fk, {
        value: a,
        children: /* @__PURE__ */ c.jsxs(pk, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Fh = {
  theme: void 0
};
function xk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Fh.theme = o.theme, i = Q0(e(Fh)), t = i, n = o.theme), i;
  };
}
const zp = "mode", _p = "color-scheme", Sk = "data-color-scheme";
function bk(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = zp,
    colorSchemeStorageKey: i = _p,
    attribute: s = Sk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", f = s;
  if (s === "class" && (f = ".%s"), s === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const y = f.substring(1);
    u += `${l}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${l}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const m = f.match(/\[([^[\]]+)\]/);
  if (m) {
    const [y, d] = m[1].split("=");
    d || (u += `${l}.removeAttribute('${y}'.replace('%s', light));
      ${l}.removeAttribute('${y}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${y}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else f !== ".%s" && (u += `${l}.setAttribute('${f}', colorScheme);`);
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
function wk() {
}
const Ck = ({
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
      return wk;
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
function Dh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function o1(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function kk(e) {
  return o1(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Tk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = zp,
    colorSchemeStorageKey: s = _p,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = Ck,
    noSsr: u = !1
  } = e, f = o.join(","), m = o.length > 1, y = h.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), d = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = h.useState(() => {
    const R = (y == null ? void 0 : y.get(t)) || t, I = (d == null ? void 0 : d.get(n)) || n, L = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: R,
      systemMode: Dh(R),
      lightColorScheme: I,
      darkColorScheme: L
    };
  }), [v, p] = h.useState(u || !m);
  h.useEffect(() => {
    p(!0);
  }, []);
  const S = kk(b), w = h.useCallback((R) => {
    C((I) => {
      if (R === I.mode)
        return I;
      const L = R ?? t;
      return y == null || y.set(L), {
        ...I,
        mode: L,
        systemMode: Dh(L)
      };
    });
  }, [y, t]), T = h.useCallback((R) => {
    R ? typeof R == "string" ? R && !f.includes(R) ? console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`) : C((I) => {
      const L = {
        ...I
      };
      return o1(I, (M) => {
        M === "light" && (d == null || d.set(R), L.lightColorScheme = R), M === "dark" && (x == null || x.set(R), L.darkColorScheme = R);
      }), L;
    }) : C((I) => {
      const L = {
        ...I
      }, M = R.light === null ? n : R.light, g = R.dark === null ? r : R.dark;
      return M && (f.includes(M) ? (L.lightColorScheme = M, d == null || d.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), g && (f.includes(g) ? (L.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), L;
    }) : C((I) => (d == null || d.set(n), x == null || x.set(r), {
      ...I,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [f, d, x, n, r]), k = h.useCallback((R) => {
    b.mode === "system" && C((I) => {
      const L = R != null && R.matches ? "dark" : "light";
      return I.systemMode === L ? I : {
        ...I,
        systemMode: L
      };
    });
  }, [b.mode]), E = h.useRef(k);
  return E.current = k, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const R = (...L) => E.current(...L), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(R), R(I), () => {
      I.removeListener(R);
    };
  }, [m]), h.useEffect(() => {
    if (m) {
      const R = (y == null ? void 0 : y.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && w(M || t);
      })) || Hu, I = (d == null ? void 0 : d.subscribe((M) => {
        (!M || f.match(M)) && T({
          light: M
        });
      })) || Hu, L = (x == null ? void 0 : x.subscribe((M) => {
        (!M || f.match(M)) && T({
          dark: M
        });
      })) || Hu;
      return () => {
        R(), I(), L();
      };
    }
  }, [T, w, f, t, l, m, y, d, x]), {
    ...b,
    mode: v ? b.mode : void 0,
    systemMode: v ? b.systemMode : void 0,
    colorScheme: v ? S : void 0,
    setMode: w,
    setColorScheme: T
  };
}
const Ek = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Rk(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = zp,
    colorSchemeStorageKey: o = _p,
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
  }, u = /* @__PURE__ */ h.createContext(void 0), f = () => h.useContext(u) || a, m = {}, y = {};
  function d(v) {
    var Ae, xe, Le, St;
    const {
      children: p,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: T = o,
      disableTransitionOnChange: k = i,
      storageManager: E,
      storageWindow: R = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: L = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: j = "system",
      forceThemeRerender: P = !1,
      noSsr: O
    } = v, A = h.useRef(!1), N = Bp(), $ = h.useContext(u), z = !!$ && !M, F = h.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), H = F[t], D = H || F, {
      colorSchemes: Z = m,
      components: V = y,
      cssVarPrefix: Y
    } = D, K = Object.keys(Z).filter((ee) => !!Z[ee]).join(","), Q = h.useMemo(() => K.split(","), [K]), W = typeof s == "string" ? s : s.light, oe = typeof s == "string" ? s : s.dark, ie = Z[W] && Z[oe] ? j : ((xe = (Ae = Z[D.defaultColorScheme]) == null ? void 0 : Ae.palette) == null ? void 0 : xe.mode) || ((Le = D.palette) == null ? void 0 : Le.mode), {
      mode: be,
      setMode: Ce,
      systemMode: ve,
      lightColorScheme: le,
      darkColorScheme: Be,
      colorScheme: Oe,
      setColorScheme: Pe
    } = Tk({
      supportedColorSchemes: Q,
      defaultLightColorScheme: W,
      defaultDarkColorScheme: oe,
      modeStorageKey: w,
      colorSchemeStorageKey: T,
      defaultMode: ie,
      storageManager: E,
      storageWindow: R,
      noSsr: O
    });
    let Ie = be, pe = Oe;
    z && (Ie = $.mode, pe = $.colorScheme);
    let ke = pe || D.defaultColorScheme;
    D.vars && !P && (ke = D.defaultColorScheme);
    const Je = h.useMemo(() => {
      var $e;
      const ee = (($e = D.generateThemeVars) == null ? void 0 : $e.call(D)) || D.vars, Se = {
        ...D,
        components: V,
        colorSchemes: Z,
        cssVarPrefix: Y,
        vars: ee
      };
      if (typeof Se.generateSpacing == "function" && (Se.spacing = Se.generateSpacing()), ke) {
        const dt = Z[ke];
        dt && typeof dt == "object" && Object.keys(dt).forEach((Te) => {
          dt[Te] && typeof dt[Te] == "object" ? Se[Te] = {
            ...Se[Te],
            ...dt[Te]
          } : Se[Te] = dt[Te];
        });
      }
      return l ? l(Se) : Se;
    }, [D, ke, V, Z, Y]), _e = D.colorSchemeSelector;
    ht(() => {
      if (pe && L && _e && _e !== "media") {
        const ee = _e;
        let Se = _e;
        if (ee === "class" && (Se = ".%s"), ee === "data" && (Se = "[data-%s]"), ee != null && ee.startsWith("data-") && !ee.includes("%s") && (Se = `[${ee}="%s"]`), Se.startsWith("."))
          L.classList.remove(...Q.map(($e) => Se.substring(1).replace("%s", $e))), L.classList.add(Se.substring(1).replace("%s", pe));
        else {
          const $e = Se.replace("%s", pe).match(/\[([^\]]+)\]/);
          if ($e) {
            const [dt, Te] = $e[1].split("=");
            Te || Q.forEach((Kn) => {
              L.removeAttribute(dt.replace(pe, Kn));
            }), L.setAttribute(dt, Te ? Te.replace(/"|'/g, "") : "");
          } else
            L.setAttribute(Se, pe);
        }
      }
    }, [pe, _e, L, Q]), h.useEffect(() => {
      let ee;
      if (k && A.current && I) {
        const Se = I.createElement("style");
        Se.appendChild(I.createTextNode(Ek)), I.head.appendChild(Se), window.getComputedStyle(I.body), ee = setTimeout(() => {
          I.head.removeChild(Se);
        }, 1);
      }
      return () => {
        clearTimeout(ee);
      };
    }, [pe, k, I]), h.useEffect(() => (A.current = !0, () => {
      A.current = !1;
    }), []);
    const He = h.useMemo(() => ({
      allColorSchemes: Q,
      colorScheme: pe,
      darkColorScheme: Be,
      lightColorScheme: le,
      mode: Ie,
      setColorScheme: Pe,
      setMode: Ce,
      systemMode: ve
    }), [Q, pe, Be, le, Ie, Pe, Ce, ve, Je.colorSchemeSelector]);
    let ze = !0;
    (g || D.cssVariables === !1 || z && (N == null ? void 0 : N.cssVarPrefix) === Y) && (ze = !1);
    const ot = /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [/* @__PURE__ */ c.jsx(r1, {
        themeId: H ? t : void 0,
        theme: Je,
        children: p
      }), ze && /* @__PURE__ */ c.jsx(L0, {
        styles: ((St = Je.generateStyleSheets) == null ? void 0 : St.call(Je)) || []
      })]
    });
    return z ? ot : /* @__PURE__ */ c.jsx(u.Provider, {
      value: He,
      children: ot
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: f,
    getInitColorSchemeScript: (v) => bk({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...v
    })
  };
}
function Pk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Ik = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Wh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (Ik.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, Mk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, jk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Vu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Mk(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const f = `--${n ? `${n}-` : ""}${l.join("-")}`, m = jk(l, a);
        Object.assign(o, {
          [f]: m
        }), Wh(i, l, `var(${f})`, u), Wh(s, l, `var(${f}, ${m})`, u);
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
function $k(e, t = {}) {
  const {
    getSelector: n = v,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: a = "light",
    ...u
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: y
  } = Vu(u, t);
  let d = y;
  const x = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, T]) => {
    const {
      vars: k,
      css: E,
      varsWithDefaults: R
    } = Vu(T, t);
    d = Bt(d, R), x[w] = {
      css: E,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: T,
      varsWithDefaults: k
    } = Vu(b, t);
    d = Bt(d, k), x[a] = {
      css: w,
      vars: T
    };
  }
  function v(w, T) {
    var E, R;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((R = (E = s[w]) == null ? void 0 : E.palette) == null ? void 0 : R.mode) || w})`]: {
            ":root": T
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
        vars: T
      }]) => {
        w = Bt(w, T);
      }), w;
    },
    generateStyleSheets: () => {
      var I, L;
      const w = [], T = e.defaultColorScheme || "light";
      function k(M, g) {
        Object.keys(g).length && w.push(typeof M == "string" ? {
          [M]: {
            ...g
          }
        } : M);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [T]: E,
        ...R
      } = x;
      if (E) {
        const {
          css: M
        } = E, g = (L = (I = s[T]) == null ? void 0 : I.palette) == null ? void 0 : L.mode, j = !r && g ? {
          colorScheme: g,
          ...M
        } : {
          ...M
        };
        k(n(T, {
          ...j
        }), j);
      }
      return Object.entries(R).forEach(([M, {
        css: g
      }]) => {
        var O, A;
        const j = (A = (O = s[M]) == null ? void 0 : O.palette) == null ? void 0 : A.mode, P = !r && j ? {
          colorScheme: j,
          ...g
        } : {
          ...g
        };
        k(n(M, {
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
function Ok(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function de(e, t, n = void 0) {
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
function Ku(e, t) {
  var n, r, o;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const Ak = Qc(), Lk = tk("div", {
  name: "MuiStack",
  slot: "Root"
});
function Nk(e) {
  return rk({
    props: e,
    name: "MuiStack",
    defaultTheme: Ak
  });
}
function Bk(e, t) {
  const n = h.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const zk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], _k = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...to({
      theme: t
    }, Du({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Uc(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = Du({
      values: e.direction,
      base: o
    }), s = Du({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, f) => {
      if (!i[a]) {
        const y = u > 0 ? i[f[u - 1]] : "column";
        i[a] = y;
      }
    }), n = Bt(n, to({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: Lo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${zk(u ? i[u] : e.direction)}`]: Lo(r, a)
      }
    }));
  }
  return n = iC(t.breakpoints, n), n;
};
function Fk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Lk,
    useThemeProps: n = Nk,
    componentName: r = "MuiStack"
  } = e, o = () => de({
    root: ["root"]
  }, (a) => ue(r, a), {}), i = t(_k);
  return /* @__PURE__ */ h.forwardRef(function(a, u) {
    const f = n(a), {
      component: m = "div",
      direction: y = "column",
      spacing: d = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: v = !1,
      ...p
    } = f, S = {
      direction: y,
      spacing: d,
      useFlexGap: v
    }, w = o();
    return /* @__PURE__ */ c.jsx(i, {
      as: m,
      ownerState: S,
      ref: u,
      className: te(w.root, C),
      ...p,
      children: x ? Bk(b, x) : b
    });
  });
}
function i1() {
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
      paper: Ys.white,
      default: Ys.white
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
const s1 = i1();
function l1() {
  return {
    text: {
      primary: Ys.white,
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
      active: Ys.white,
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
const of = l1();
function Uh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = eu(e.main, o) : t === "dark" && (e.dark = Jc(e.main, i)));
}
function Hh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Dk(e = "light") {
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
function Wk(e = "light") {
  return e === "dark" ? {
    main: Yo[200],
    light: Yo[50],
    dark: Yo[400]
  } : {
    main: Yo[500],
    light: Yo[300],
    dark: Yo[700]
  };
}
function Uk(e = "light") {
  return e === "dark" ? {
    main: Ko[500],
    light: Ko[300],
    dark: Ko[700]
  } : {
    main: Ko[700],
    light: Ko[400],
    dark: Ko[800]
  };
}
function Hk(e = "light") {
  return e === "dark" ? {
    main: Xo[400],
    light: Xo[300],
    dark: Xo[700]
  } : {
    main: Xo[700],
    light: Xo[500],
    dark: Xo[900]
  };
}
function Vk(e = "light") {
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
function Kk(e = "light") {
  return e === "dark" ? {
    main: Ji[400],
    light: Ji[300],
    dark: Ji[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ji[500],
    dark: Ji[900]
  };
}
function Yk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Fp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Dk(t), l = e.secondary || Wk(t), a = e.error || Uk(t), u = e.info || Hk(t), f = e.success || Vk(t), m = e.warning || Kk(t);
  function y(C) {
    return o ? Yk(C) : lk(C, of.text.primary) >= n ? of.text.primary : s1.text.primary;
  }
  const d = ({
    color: C,
    name: v,
    mainShade: p = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[p] && (C.main = C[p]), !C.hasOwnProperty("main"))
      throw new Error(Ir(11, v ? ` (${v})` : "", p));
    if (typeof C.main != "string")
      throw new Error(Ir(12, v ? ` (${v})` : "", JSON.stringify(C.main)));
    return o ? (Hh(o, C, "light", S, r), Hh(o, C, "dark", w, r)) : (Uh(C, "light", S, r), Uh(C, "dark", w, r)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let x;
  return t === "light" ? x = i1() : t === "dark" && (x = l1()), Bt({
    // A collection of common colors.
    common: {
      ...Ys
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
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: zb,
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
function Gk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Xk(e, t) {
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
function Qk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vh = {
  textTransform: "uppercase"
}, Kh = '"Roboto", "Helvetica", "Arial", sans-serif';
function a1(e, t) {
  const {
    fontFamily: n = Kh,
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
    pxToRem: f,
    ...m
  } = typeof t == "function" ? t(e) : t, y = r / 14, d = f || ((C) => `${C / a * y}rem`), x = (C, v, p, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(v),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: p,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Kh ? {
      letterSpacing: `${Qk(S / v)}em`
    } : {},
    ...w,
    ...u
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
    button: x(s, 14, 1.75, 0.4, Vh),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Vh),
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
const qk = 0.2, Zk = 0.14, Jk = 0.12;
function ct(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${qk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Zk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Jk})`].join(",");
}
const e2 = ["none", ct(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ct(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ct(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ct(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ct(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ct(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ct(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ct(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ct(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ct(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ct(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ct(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ct(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ct(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ct(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ct(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ct(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ct(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ct(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ct(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ct(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ct(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ct(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ct(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], t2 = ["all"], n2 = {}, r2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, o2 = {
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
function Yh(e) {
  return `${Math.round(e)}ms`;
}
function i2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function s2(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...r2,
    ...t.easing
  }, r = {
    ...o2,
    ...t.duration
  }, o = (s = t2, l = n2) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: f = 0,
      ...m
    } = l;
    return (Array.isArray(s) ? s : [s]).map((y) => `${y} ${typeof a == "string" ? a : Yh(a)} ${u} ${typeof f == "string" ? f : Yh(f)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: i2,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const l2 = {};
function a2(e = l2) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const c2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function u2(e) {
  return br(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function c1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !u2(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : br(l) && (r[s] = {
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
function Gh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const d2 = (e) => {
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
function f2(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Ua(t, d2(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Gh(n)})` : eu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Gh(n)})` : Jc(t, n);
    }
  });
}
function sf(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: l = {},
    typography: a = {},
    shape: u,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Ir(22));
  const y = Fp({
    ...i,
    colorSpace: f
  }), d = Qc(e);
  let x = Bt(d, {
    mixins: Xk(d.breakpoints, r),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: e2.slice(),
    typography: a1(y, a),
    motion: a2(s),
    transitions: s2(l),
    zIndex: {
      ...c2
    }
  });
  return x = Bt(x, m), x = t.reduce((b, C) => Bt(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Xc,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return No({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = c1, f2(x), x;
}
function lf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const p2 = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = lf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function u1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function d1(e) {
  return e === "dark" ? p2 : [];
}
function m2(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Fp({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...u1(s.mode),
      ...n
    },
    overlays: r || d1(s.mode),
    ...i
  };
}
function h2(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const g2 = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], y2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return g2(e.cssVarPrefix).forEach((l) => {
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
function v2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function _(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function fs(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : J0(e);
}
function hr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = ds(fs(e[t])));
}
function x2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Qn = (e) => {
  try {
    return e();
  } catch {
  }
}, S2 = (e = "mui") => Pk(e);
function Yu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = m2({
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
  } = sf({
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
      ...u1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || d1(i)
  }, l;
}
function b2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = h2,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...f
  } = e, m = Object.keys(n)[0], y = r || (n.light && m !== "light" ? "light" : m), d = S2(i), {
    [y]: x,
    light: b,
    dark: C,
    ...v
  } = n, p = {
    ...v
  };
  let S = x;
  if ((y === "dark" && !("dark" in n) || y === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(Ir(21, y));
  let w;
  s && (w = "oklch");
  const T = Yu(w, p, S, f, y);
  b && !p.light && Yu(w, p, b, void 0, "light"), C && !p.dark && Yu(w, p, C, void 0, "dark");
  let k = {
    defaultColorScheme: y,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: d,
    colorSchemes: p,
    font: {
      ...Gk(T.typography),
      ...T.font
    },
    spacing: x2(f.spacing)
  };
  Object.keys(k.colorSchemes).forEach((M) => {
    const g = k.colorSchemes[M].palette, j = (O) => {
      const A = O.split("-"), N = A[1], $ = A[2];
      return d(O, g[N][$]);
    };
    g.mode === "light" && (_(g.common, "background", "#fff"), _(g.common, "onBackground", "#000")), g.mode === "dark" && (_(g.common, "background", "#000"), _(g.common, "onBackground", "#fff"));
    function P(O, A, N) {
      if (w) {
        let $;
        return O === mo && ($ = `transparent ${((1 - N) * 100).toFixed(0)}%`), O === Ve && ($ = `#000 ${(N * 100).toFixed(0)}%`), O === Ke && ($ = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${w}, ${A}, ${$})`;
      }
      return O(A, N);
    }
    if (v2(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      _(g.Alert, "errorColor", P(Ve, s ? d("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", P(Ve, s ? d("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", P(Ve, s ? d("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", P(Ve, s ? d("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", j("palette-error-main")), _(g.Alert, "infoFilledBg", j("palette-info-main")), _(g.Alert, "successFilledBg", j("palette-success-main")), _(g.Alert, "warningFilledBg", j("palette-warning-main")), _(g.Alert, "errorFilledColor", Qn(() => g.getContrastText(g.error.main))), _(g.Alert, "infoFilledColor", Qn(() => g.getContrastText(g.info.main))), _(g.Alert, "successFilledColor", Qn(() => g.getContrastText(g.success.main))), _(g.Alert, "warningFilledColor", Qn(() => g.getContrastText(g.warning.main))), _(g.Alert, "errorStandardBg", P(Ke, s ? d("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", P(Ke, s ? d("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", P(Ke, s ? d("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", P(Ke, s ? d("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", j("palette-error-main")), _(g.Alert, "infoIconColor", j("palette-info-main")), _(g.Alert, "successIconColor", j("palette-success-main")), _(g.Alert, "warningIconColor", j("palette-warning-main")), _(g.AppBar, "defaultBg", j("palette-grey-100")), _(g.Avatar, "defaultBg", j("palette-grey-400")), _(g.Button, "inheritContainedBg", j("palette-grey-300")), _(g.Button, "inheritContainedHoverBg", j("palette-grey-A100")), _(g.Chip, "defaultBorder", j("palette-grey-400")), _(g.Chip, "defaultAvatarColor", j("palette-grey-700")), _(g.Chip, "defaultIconColor", j("palette-grey-700")), _(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(g.LinearProgress, "primaryBg", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.LinearProgress, "secondaryBg", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.LinearProgress, "errorBg", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.LinearProgress, "infoBg", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.LinearProgress, "successBg", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.LinearProgress, "warningBg", P(Ke, s ? d("palette-warning-light") : g.warning.main, 0.62)), _(g.Skeleton, "bg", w ? P(mo, s ? d("palette-text-primary") : g.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), _(g.Slider, "primaryTrack", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.Slider, "secondaryTrack", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Slider, "errorTrack", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.Slider, "infoTrack", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.Slider, "successTrack", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.Slider, "warningTrack", P(Ke, s ? d("palette-warning-main") : g.warning.main, 0.62));
      const O = w ? P(Ve, s ? d("palette-background-default") : g.background.default, 0.6825) : Ll(g.background.default, 0.8);
      _(g.SnackbarContent, "bg", O), _(g.SnackbarContent, "color", Qn(() => w ? of.text.primary : g.getContrastText(O))), _(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)), _(g.StepConnector, "border", j("palette-grey-400")), _(g.StepContent, "border", j("palette-grey-400")), _(g.Switch, "defaultColor", j("palette-common-white")), _(g.Switch, "defaultDisabledColor", j("palette-grey-100")), _(g.Switch, "primaryDisabledColor", P(Ke, s ? d("palette-primary-main") : g.primary.main, 0.62)), _(g.Switch, "secondaryDisabledColor", P(Ke, s ? d("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Switch, "errorDisabledColor", P(Ke, s ? d("palette-error-main") : g.error.main, 0.62)), _(g.Switch, "infoDisabledColor", P(Ke, s ? d("palette-info-main") : g.info.main, 0.62)), _(g.Switch, "successDisabledColor", P(Ke, s ? d("palette-success-main") : g.success.main, 0.62)), _(g.Switch, "warningDisabledColor", P(Ke, s ? d("palette-warning-main") : g.warning.main, 0.62)), _(g.TableCell, "border", P(Ke, mo(s ? d("palette-divider") : g.divider, 1), 0.88)), _(g.Tooltip, "bg", P(mo, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      _(g.Alert, "errorColor", P(Ke, s ? d("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", P(Ke, s ? d("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", P(Ke, s ? d("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", P(Ke, s ? d("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", j("palette-error-dark")), _(g.Alert, "infoFilledBg", j("palette-info-dark")), _(g.Alert, "successFilledBg", j("palette-success-dark")), _(g.Alert, "warningFilledBg", j("palette-warning-dark")), _(g.Alert, "errorFilledColor", Qn(() => g.getContrastText(g.error.dark))), _(g.Alert, "infoFilledColor", Qn(() => g.getContrastText(g.info.dark))), _(g.Alert, "successFilledColor", Qn(() => g.getContrastText(g.success.dark))), _(g.Alert, "warningFilledColor", Qn(() => g.getContrastText(g.warning.dark))), _(g.Alert, "errorStandardBg", P(Ve, s ? d("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", P(Ve, s ? d("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", P(Ve, s ? d("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", P(Ve, s ? d("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", j("palette-error-main")), _(g.Alert, "infoIconColor", j("palette-info-main")), _(g.Alert, "successIconColor", j("palette-success-main")), _(g.Alert, "warningIconColor", j("palette-warning-main")), _(g.AppBar, "defaultBg", j("palette-grey-900")), _(g.AppBar, "darkBg", j("palette-background-paper")), _(g.AppBar, "darkColor", j("palette-text-primary")), _(g.Avatar, "defaultBg", j("palette-grey-600")), _(g.Button, "inheritContainedBg", j("palette-grey-800")), _(g.Button, "inheritContainedHoverBg", j("palette-grey-700")), _(g.Chip, "defaultBorder", j("palette-grey-700")), _(g.Chip, "defaultAvatarColor", j("palette-grey-300")), _(g.Chip, "defaultIconColor", j("palette-grey-300")), _(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(g.LinearProgress, "primaryBg", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.5)), _(g.LinearProgress, "secondaryBg", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), _(g.LinearProgress, "errorBg", P(Ve, s ? d("palette-error-main") : g.error.main, 0.5)), _(g.LinearProgress, "infoBg", P(Ve, s ? d("palette-info-main") : g.info.main, 0.5)), _(g.LinearProgress, "successBg", P(Ve, s ? d("palette-success-main") : g.success.main, 0.5)), _(g.LinearProgress, "warningBg", P(Ve, s ? d("palette-warning-main") : g.warning.main, 0.5)), _(g.Skeleton, "bg", w ? P(mo, s ? d("palette-text-primary") : g.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), _(g.Slider, "primaryTrack", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.5)), _(g.Slider, "secondaryTrack", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.5)), _(g.Slider, "errorTrack", P(Ve, s ? d("palette-error-main") : g.error.main, 0.5)), _(g.Slider, "infoTrack", P(Ve, s ? d("palette-info-main") : g.info.main, 0.5)), _(g.Slider, "successTrack", P(Ve, s ? d("palette-success-main") : g.success.main, 0.5)), _(g.Slider, "warningTrack", P(Ve, s ? d("palette-warning-light") : g.warning.main, 0.5));
      const O = w ? P(Ke, s ? d("palette-background-default") : g.background.default, 0.985) : Ll(g.background.default, 0.98);
      _(g.SnackbarContent, "bg", O), _(g.SnackbarContent, "color", Qn(() => w ? s1.text.primary : g.getContrastText(O))), _(g.SpeedDialAction, "fabHoverBg", Ll(g.background.paper, 0.15)), _(g.StepConnector, "border", j("palette-grey-600")), _(g.StepContent, "border", j("palette-grey-600")), _(g.Switch, "defaultColor", j("palette-grey-300")), _(g.Switch, "defaultDisabledColor", j("palette-grey-600")), _(g.Switch, "primaryDisabledColor", P(Ve, s ? d("palette-primary-main") : g.primary.main, 0.55)), _(g.Switch, "secondaryDisabledColor", P(Ve, s ? d("palette-secondary-main") : g.secondary.main, 0.55)), _(g.Switch, "errorDisabledColor", P(Ve, s ? d("palette-error-main") : g.error.main, 0.55)), _(g.Switch, "infoDisabledColor", P(Ve, s ? d("palette-info-main") : g.info.main, 0.55)), _(g.Switch, "successDisabledColor", P(Ve, s ? d("palette-success-main") : g.success.main, 0.55)), _(g.Switch, "warningDisabledColor", P(Ve, s ? d("palette-warning-light") : g.warning.main, 0.55)), _(g.TableCell, "border", P(Ve, mo(s ? d("palette-divider") : g.divider, 1), 0.68)), _(g.Tooltip, "bg", P(mo, s ? d("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (hr(g.background, "default"), hr(g.background, "paper"), hr(g.common, "background"), hr(g.common, "onBackground"), hr(g, "divider")), Object.keys(g).forEach((O) => {
      const A = g[O];
      O !== "tonalOffset" && !s && A && typeof A == "object" && (A.main && _(g[O], "mainChannel", ds(fs(A.main))), A.light && _(g[O], "lightChannel", ds(fs(A.light))), A.dark && _(g[O], "darkChannel", ds(fs(A.dark))), A.contrastText && _(g[O], "contrastTextChannel", ds(fs(A.contrastText))), O === "text" && (hr(g[O], "primary"), hr(g[O], "secondary")), O === "action" && (A.active && hr(g[O], "active"), A.selected && hr(g[O], "selected")));
    });
  }), k = t.reduce((M, g) => Bt(M, g), k);
  const E = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: y2(k),
    enableContrastVars: s
  }, {
    vars: R,
    generateThemeVars: I,
    generateStyleSheets: L
  } = $k(k, E);
  return k.vars = R, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([M, g]) => {
    k[M] = g;
  }), k.generateThemeVars = I, k.generateStyleSheets = L, k.generateSpacing = function() {
    return K0(f.spacing, Uc(this));
  }, k.getColorSchemeSelector = Ok(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Xc,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return No({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = c1, k;
}
function Xh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Fp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function tu(e = {}, ...t) {
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
      return sf(e, ...t);
    let f = n;
    "palette" in e || u[l] && (u[l] !== !0 ? f = u[l].palette : l === "dark" && (f = {
      mode: "dark"
    }));
    const m = sf({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = u, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: m.palette
    }, Xh(m, "dark", u.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: m.palette
    }, Xh(m, "light", u.light)), m;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), b2({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ha(e) {
  return typeof e == "string";
}
function nu(e, t = 166) {
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
function yt(...e) {
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
function nt(e) {
  const t = h.useRef(e);
  return ht(() => {
    t.current = e;
  }), h.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function xt(e) {
  return e && e.ownerDocument || document;
}
function Vn(e) {
  return xt(e).defaultView || window;
}
function Nl(e) {
  return parseInt(e, 10) || 0;
}
const w2 = {
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
function C2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Qh(e) {
  return C2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const k2 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = h.useRef(l != null), f = h.useRef(null), m = yt(n, f), y = h.useRef(null), d = h.useRef(null), x = h.useCallback(() => {
    const S = f.current, w = d.current;
    if (!S || !w)
      return;
    const k = Vn(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const E = k.boxSizing, R = Nl(k.paddingBottom) + Nl(k.paddingTop), I = Nl(k.borderBottomWidth) + Nl(k.borderTopWidth), L = w.scrollHeight;
    w.value = "x";
    const M = w.scrollHeight;
    let g = L;
    i && (g = Math.max(Number(i) * M, g)), o && (g = Math.min(Number(o) * M, g)), g = Math.max(g, M);
    const j = g + (E === "border-box" ? R + I : 0), P = Math.abs(g - L) <= 1;
    return {
      outerHeightStyle: j,
      overflowing: P
    };
  }, [o, i, t.placeholder]), b = nt(() => {
    const S = f.current, w = x();
    if (!S || !w || Qh(w))
      return !1;
    const T = w.outerHeightStyle;
    return y.current != null && y.current !== T;
  }), C = h.useCallback(() => {
    const S = f.current, w = x();
    if (!S || !w || Qh(w))
      return;
    const T = w.outerHeightStyle;
    y.current !== T && (y.current = T, S.style.height = `${T}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), v = h.useRef(-1);
  ht(() => {
    const S = nu(C), w = f == null ? void 0 : f.current;
    if (!w)
      return;
    const T = Vn(w);
    T.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(v.current), C(), v.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(v.current), T.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), ht(() => {
    C();
  });
  const p = (S) => {
    u || C();
    const w = S.target, T = w.value.length, k = w.value.endsWith(`
`), E = w.selectionStart === T;
    k && E && w.setSelectionRange(T, T), r && r(S);
  };
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx("textarea", {
      value: l,
      onChange: p,
      ref: m,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ c.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: d,
      tabIndex: -1,
      style: {
        ...w2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), fl = /* @__PURE__ */ h.createContext(void 0);
function f1() {
  return h.useContext(fl);
}
function Fo({
  props: e,
  states: t
}) {
  const n = h.useContext(fl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Dp = tu();
function ao() {
  const e = qc(Dp);
  return e[lr] || e;
}
function T2(e) {
  return /* @__PURE__ */ c.jsx(Y0, {
    ...e,
    defaultTheme: Dp,
    themeId: lr
  });
}
function p1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Jt = (e) => p1(e) && e !== "classes", U = Z0({
  themeId: lr,
  defaultTheme: Dp,
  rootShouldForwardProp: Jt
});
function E2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ c.jsx(T2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const me = xk;
function he(e) {
  return hk(e);
}
function rr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function qh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Va(e, t = !1) {
  return e && (qh(e.value) && e.value !== "" || t && qh(e.defaultValue) && e.defaultValue !== "");
}
function R2(e) {
  return e.startAdornment;
}
function P2(e) {
  return ue("MuiInputBase", e);
}
const un = ae("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), I2 = {
  transition: "none"
};
function M2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Wp = (e) => e.scrollTop, m1 = {}, j2 = ["all"], $2 = {};
function Tn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function h1(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Ka(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = m1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Wi(e, t) {
  var r;
  const n = t ?? I2;
  return M2((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function Ze(e, t = j2, n = $2) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Wi(e);
  if (r === void 0)
    return o ?? m1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Zh;
const af = "mui-auto-fill", Ya = "mui-auto-fill-cancel", ru = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ne(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, ou = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, O2 = (e) => {
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
    multiline: f,
    readOnly: m,
    size: y,
    startAdornment: d,
    type: x
  } = e, b = {
    root: ["root", `color${ne(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", y && y !== "medium" && `size${ne(y)}`, f && "multiline", d && "adornedStart", i && "adornedEnd", u && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return de(b, P2, t);
}, iu = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: ru
})(me(({
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
}))), su = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: ou
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...Ze(e, "opacity", {
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
        animationName: Ya,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: af
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
})), Jh = E2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${af}`]: {
    from: {
      animationName: af
    }
  },
  [`@keyframes ${Ya}`]: {
    from: {
      animationName: Ya
    }
  }
}), Up = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": i,
    autoComplete: s,
    autoFocus: l,
    className: a,
    color: u,
    defaultValue: f,
    disabled: m,
    disableInjectingGlobalStyles: y,
    endAdornment: d,
    error: x,
    fullWidth: b = !1,
    id: C,
    inputComponent: v = "input",
    inputProps: p = {},
    inputRef: S,
    margin: w,
    maxRows: T,
    minRows: k,
    multiline: E = !1,
    name: R,
    onBlur: I,
    onChange: L,
    onClick: M,
    onFocus: g,
    onKeyDown: j,
    onKeyUp: P,
    placeholder: O,
    readOnly: A,
    renderSuffix: N,
    rows: $,
    size: z,
    slotProps: F = {},
    slots: H = {},
    startAdornment: D,
    type: Z = "text",
    value: V,
    ...Y
  } = r, K = p.value != null ? p.value : V, {
    current: Q
  } = h.useRef(K != null), W = h.useRef(), oe = h.useCallback((ee) => {
  }, []), ie = yt(W, S, p.ref, oe), [be, Ce] = h.useState(!1), [ve, le] = Fo({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ve.focused = le ? le.focused : be, h.useEffect(() => {
    !le && m && be && (Ce(!1), I && I());
  }, [le, m, be, I]);
  const Be = le && le.onFilled, Oe = le && le.onEmpty, Pe = h.useCallback((ee) => {
    Va(ee) ? Be && Be() : Oe && Oe();
  }, [Be, Oe]);
  ht(() => {
    Q && Pe({
      value: K
    });
  }, [K, Pe, Q]), ht(() => {
    if (!l)
      return;
    const ee = W.current;
    if (!ee)
      return;
    const Se = xt(ee), $e = rr(Se), dt = $e == null || $e === Se.body || $e === Se.documentElement;
    ee === $e ? le && le.onFocus ? le.onFocus() : Ce(!0) : dt && ee.focus();
  }, [l]);
  const Ie = (ee) => {
    g && g(ee), p.onFocus && p.onFocus(ee), le && le.onFocus ? le.onFocus(ee) : Ce(!0);
  }, pe = (ee) => {
    I && I(ee), p.onBlur && p.onBlur(ee), le && le.onBlur ? le.onBlur(ee) : Ce(!1);
  }, ke = (ee, ...Se) => {
    if (!Q) {
      const $e = ee.target || W.current;
      if ($e == null)
        throw new Error(Ir(1));
      Pe({
        value: $e.value
      });
    }
    p.onChange && p.onChange(ee, ...Se), L && L(ee, ...Se);
  };
  h.useEffect(() => {
    Pe(W.current);
  }, []);
  const Je = (ee) => {
    W.current && ee.currentTarget === ee.target && W.current.focus(), M && M(ee);
  };
  let _e = v, He = p;
  E && _e === "input" && ($ ? He = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...He
  } : He = {
    type: void 0,
    maxRows: T,
    minRows: k,
    ...He
  }, _e = k2);
  const ze = (ee) => {
    Pe(ee.animationName === Ya ? W.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    le && le.setAdornedStart(!!D);
  }, [le, D]);
  const ot = {
    ...r,
    color: ve.color || "primary",
    disabled: ve.disabled,
    endAdornment: d,
    error: ve.error,
    focused: ve.focused,
    formControl: le,
    fullWidth: b,
    hiddenLabel: ve.hiddenLabel,
    multiline: E,
    size: ve.size,
    startAdornment: D,
    type: Z
  }, Ae = O2(ot), xe = H.root || iu, Le = F.root || {}, St = H.input || su;
  return He = {
    ...He,
    ...F.input
  }, /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [!y && typeof Jh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Zh || (Zh = /* @__PURE__ */ c.jsx(Jh, {}))), /* @__PURE__ */ c.jsxs(xe, {
      ...Le,
      ref: n,
      onClick: Je,
      ...Y,
      ...!Ha(xe) && {
        ownerState: {
          ...ot,
          ...Le.ownerState
        }
      },
      className: te(Ae.root, Le.className, a, A && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ c.jsx(fl.Provider, {
        value: null,
        children: /* @__PURE__ */ c.jsx(St, {
          "aria-invalid": ve.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: f,
          disabled: ve.disabled,
          id: C,
          onAnimationStart: ze,
          name: R,
          placeholder: O,
          readOnly: A,
          required: ve.required,
          rows: $,
          value: K,
          onKeyDown: j,
          onKeyUp: P,
          type: Z,
          ...He,
          ...!Ha(St) && {
            as: _e,
            ownerState: {
              ...ot,
              ...He.ownerState
            }
          },
          ref: ie,
          className: te(Ae.input, He.className, A && "MuiInputBase-readOnly"),
          onBlur: pe,
          onChange: ke,
          onFocus: Ie
        })
      }), d, N ? N({
        ...ve,
        startAdornment: D
      }) : null]
    })]
  });
});
function A2(e) {
  return ue("MuiFilledInput", e);
}
const ho = {
  ...un,
  ...ae("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function L2(e) {
  return ue("MuiFormControlLabel", e);
}
const ps = ae("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementEnd", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function N2(e) {
  return ue("MuiFormHelperText", e);
}
const eg = ae("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function B2(e) {
  return ue("MuiFormLabel", e);
}
const Cs = ae("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function z2(e) {
  return ue("MuiInput", e);
}
const ts = {
  ...un,
  ...ae("MuiInput", ["root", "underline", "input"])
};
function _2(e) {
  return ue("MuiMenuItem", e);
}
const ns = ae("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function F2(e) {
  return ue("MuiNativeSelect", e);
}
const Hp = ae("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function D2(e) {
  return ue("MuiOutlinedInput", e);
}
const qn = {
  ...un,
  ...ae("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function W2({
  theme: e,
  ...t
}) {
  const n = lr in e ? e[lr] : void 0;
  return /* @__PURE__ */ c.jsx(r1, {
    ...t,
    themeId: n ? lr : void 0,
    theme: n || e
  });
}
const Bl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: U2
} = Rk({
  themeId: lr,
  // @ts-ignore ignore module augmentation tests
  theme: () => tu({
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
      typography: a1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return No({
        sx: r,
        theme: this
      });
    }, t;
  }
}), H2 = U2;
function V2({
  theme: e,
  ...t
}) {
  const n = h.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = lr in e ? e[lr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ c.jsx(W2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ c.jsx(H2, {
    theme: e,
    ...t
  });
}
function tg(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function K2(e) {
  return ue("MuiSvgIcon", e);
}
ae("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Y2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(n)}`]
  };
  return de(o, K2, r);
}, G2 = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ne(n.color)}`], t[`fontSize${ne(n.fontSize)}`]];
  }
})(me(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, u, f, m, y;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...Ze(e, "fill", {
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
          color: (f = (u = (e.vars ?? e).palette) == null ? void 0 : u.action) == null ? void 0 : f.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : y.disabled
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
})), cf = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: u,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: y = "0 0 24 24",
    ...d
  } = r, x = /* @__PURE__ */ h.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: y,
    hasSvgAsChild: x
  }, C = {};
  f || (C.viewBox = y);
  const v = Y2(b);
  return /* @__PURE__ */ c.jsxs(G2, {
    as: l,
    className: te(v.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...C,
    ...d,
    ...x && o.props,
    ownerState: b,
    children: [x ? o.props.children : o, m ? /* @__PURE__ */ c.jsx("title", {
      children: m
    }) : null]
  });
});
cf.muiName = "SvgIcon";
function rt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ c.jsx(cf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = cf.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
function uf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ga(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = h.useRef(t !== void 0), [s, l] = h.useState(n), a = i ? t : s, u = h.useCallback((f) => {
    i || l(f);
  }, []);
  return [a, u];
}
function g1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function y1(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      g1(u, l[u]) && typeof s[u] == "function" && (a[u] = (...f) => {
        s[u](...f), l[u](...f);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = te(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), f = n(a, l);
      return {
        ...l,
        ...a,
        ...f,
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
const ng = {};
function Vp(e, t) {
  const n = h.useRef(ng);
  return n.current === ng && (n.current = e(t)), n;
}
function X2(e) {
  const t = Vp(() => Q2(e)).current;
  return t.next = e, ht(t.effect), t;
}
function Q2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const rg = py.createContext(null);
function q2(e) {
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
function Z2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = q2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function v1(e) {
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
    getAutoTimeout: f,
    nodeRef: m,
    onEnter: y,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: v,
    children: p,
    ...S
  } = e, w = h.useContext(rg), T = w && !w.isMounting ? r : n, [k, E] = h.useState(() => t ? T ? "exited" : "entered" : i || s ? "unmounted" : "exited"), R = h.useRef(k);
  R.current = k, t && k === "unmounted" && (R.current = "exited", E("exited"));
  const I = h.useRef(t && T), L = h.useRef(!1), M = h.useRef(null), g = h.useRef(k), j = h.useRef(!1), P = h.useRef(u), O = X2({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: f,
    onEnter: y,
    onEntering: d,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: v,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: m,
    parentGroup: w
  }), A = h.useCallback(() => {
    M.current !== null && (M.current.cancel(), M.current = null);
  }, []), N = h.useCallback((D) => {
    let Z = !0;
    const V = () => {
      Z && (Z = !1, M.current = null, D());
    };
    return V.cancel = () => {
      Z = !1;
    }, M.current = V, V;
  }, []), $ = h.useCallback((D, Z) => {
    var Oe, Pe;
    let V;
    const Y = () => {
      V !== void 0 && (clearTimeout(V), V = void 0);
    }, K = N(() => {
      Y(), R.current = D, E(D);
    }), Q = K.cancel;
    K.cancel = () => {
      Y(), Q();
    };
    const W = O.current.nodeRef.current, oe = O.current.addEndListener, ie = O.current.getAutoTimeout !== void 0, be = (Pe = (Oe = O.current).getAutoTimeout) == null ? void 0 : Pe.call(Oe), Ce = Z2({
      currentStatus: Z,
      isAppearing: j.current,
      timeout: O.current.timeout,
      autoTimeout: be
    }), ve = P.current, le = Ce ?? (ve && ie ? 0 : null), Be = (Ie) => {
      V = setTimeout(K, Ie);
    };
    if (!W) {
      Be(0);
      return;
    }
    if (oe) {
      le != null && Be(ve ? 0 : le), oe.length >= 2 ? oe(W, K) : oe(K);
      return;
    }
    Be(ve ? 0 : Ce ?? 0);
  }, [N, O]), z = h.useCallback((D) => {
    var Y;
    const Z = O.current, V = Z.parentGroup ? Z.parentGroup.isMounting : D;
    if (j.current = V, !D && !Z.enter) {
      R.current = "entered", E("entered");
      return;
    }
    P.current = Z.reduceMotion, (Y = Z.onEnter) == null || Y.call(Z, V), R.current = "entering", E("entering");
  }, [O]), F = h.useCallback(() => {
    var Z;
    const D = O.current;
    if (!D.exit) {
      R.current = "exited", E("exited");
      return;
    }
    P.current = D.reduceMotion, (Z = D.onExit) == null || Z.call(D), R.current = "exiting", E("exiting");
  }, [O]), H = h.useCallback((D, Z) => {
    if (A(), Z === "entering") {
      const V = O.current;
      if (V.mountOnEnter || V.unmountOnExit) {
        const Y = V.nodeRef.current;
        Y && Wp(Y);
      }
      z(D);
    } else
      F();
  }, [A, z, F, O]);
  return ht(() => (L.current = !0, I.current && (I.current = !1, H(!0, "entering")), () => {
    L.current = !1, A();
  }), [A, H]), ht(() => {
    if (!L.current)
      return;
    const D = R.current;
    t ? D !== "entering" && D !== "entered" && H(!1, "entering") : D === "entering" || D === "entered" ? H(!1, "exiting") : D === "exited" && s && (R.current = "unmounted", E("unmounted"));
  }, [t, k, s, H]), ht(() => {
    var Y, K, Q, W;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const Z = g.current !== k;
    Z && (g.current = k);
    const V = O.current;
    k === "entering" ? (Z && ((Y = V.onEntering) == null || Y.call(V, j.current)), M.current === null && R.current === k && $("entered", "entering")) : k === "exiting" ? (Z && ((K = V.onExiting) == null || K.call(V)), M.current === null && R.current === k && $("exited", "exiting")) : k === "entered" && Z ? (Q = V.onEntered) == null || Q.call(V, j.current) : k === "exited" && Z && ((W = V.onExited) == null || W.call(V));
  }, [O, $, k]), k === "unmounted" ? null : /* @__PURE__ */ c.jsx(rg.Provider, {
    value: null,
    children: p(k, S)
  });
}
const x1 = "(prefers-reduced-motion: reduce)", J2 = 0, eT = "0ms", tT = () => {
}, og = () => !1, nT = () => !0, rT = () => tT;
function oT(e) {
  const [t, n] = h.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), ht(() => {
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
    const i = window.matchMedia(x1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const iT = {
  ...ha
}, S1 = iT.useSyncExternalStore;
function sT(e) {
  const t = e ? nT : og, [n, r] = h.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [og, rT];
    const o = window.matchMedia(x1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return S1(r, n, t);
}
const lT = S1 !== void 0 ? sT : oT;
function lu(e, t) {
  const n = lT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return h.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: J2,
        delay: eT
      } : o;
    }
  }), [r]);
}
function b1(e, t, n) {
  return e === void 0 || Ha(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function w1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Xa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    g1(n, e[n]) && (t[n] = e[n]);
  return t;
}
function ig(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function C1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const d = te(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = {
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
  const s = Xa({
    ...o,
    ...r
  }), l = ig(r), a = ig(o), u = t(s), f = te(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), m = {
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
  return f.length > 0 && (y.className = f), Object.keys(m).length > 0 && (y.style = m), {
    props: y,
    internalRef: u.ref
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
    component: u,
    slots: f = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...y
  } = i, d = f[e] || r, x = w1(m[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: v
  } = C1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? y : void 0,
    externalSlotProps: x
  }), p = yt(v, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || u : b, w = b1(d, {
    ...e === "root" && !u && !f[e] && s,
    ...e !== "root" && !f[e] && s,
    ...C,
    ...S && !l && {
      as: S
    },
    ...S && l && {
      component: S
    },
    ref: p
  }, o);
  return [d, w];
}
function aT(e) {
  return ue("MuiPaper", e);
}
ae("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const cT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return de(i, aT, o);
}, uT = U("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(me(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...Ze(e, "box-shadow"),
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
}))), Wt = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var d;
  const r = he({
    props: t,
    name: "MuiPaper"
  }), o = ao(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...f
  } = r, m = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, y = cT(m);
  return /* @__PURE__ */ c.jsx(uT, {
    as: s,
    ownerState: m,
    className: te(y.root, i),
    ref: n,
    ...f,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Ua("#fff", lf(l))}, ${Ua("#fff", lf(l))})`
        }
      },
      ...f.style
    }
  });
});
function Qa(e) {
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
  return h.useMemo(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(f) {
        n && t && f.key !== "Tab" && f.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || l) && (u.disabled = n), u;
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
    onBeforeKeyUp: u
  } = e, f = h.useRef(null), m = s === !0, y = dT({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), d = h.useCallback(() => {
    const C = f.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), x = h.useMemo(() => {
    const C = m ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, m || (C.disabled = n)) : (C.role = "button", !m && n && (C["aria-disabled"] = n)), m ? {
      ...C,
      ...y
    } : C;
  }, [n, m, y, o, t, i, r]);
  return {
    getButtonProps: h.useCallback((C = fT) => {
      const {
        onClick: v,
        onKeyDown: p,
        onKeyUp: S,
        ...w
      } = C;
      return {
        ...x,
        ...w,
        onClick: (R) => {
          if (l && R.stopPropagation(), n) {
            R.preventDefault();
            return;
          }
          v == null || v(R);
        },
        onKeyDown: (R) => {
          if (m && y.onKeyDown(R), !n && (a == null || a(R), p == null || p(R), !(R.target !== R.currentTarget || d()))) {
            if (R.key === " ") {
              R.preventDefault();
              return;
            }
            R.key === "Enter" && (R.preventDefault(), R.currentTarget.click());
          }
        },
        onKeyUp: (R) => {
          n || (u == null || u(R), S == null || S(R), R.target === R.currentTarget && !d() && R.key === " " && !R.defaultPrevented && R.currentTarget.click());
        }
      };
    }, [x, n, m, y, d, a, u, l]),
    rootRef: f
  };
}
class qa {
  constructor() {
    Hi(this, "mountEffect", () => {
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
    return new qa();
  }
  static use() {
    const t = Vp(qa.create).current, [n, r] = h.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, h.useEffect(t.mountEffect, [n]), t;
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
  return qa.use();
}
function hT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const gT = [];
function k1(e) {
  h.useEffect(e, gT);
}
class au {
  constructor() {
    Hi(this, "currentId", null);
    Hi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Hi(this, "disposeEffect", () => this.clear);
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
function or() {
  const e = Vp(au.create).current;
  return k1(e.disposeEffect), e;
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
    timeout: u
  } = e, [f, m] = h.useState(!1), y = or(), d = h.useRef(!1), x = h.useRef(a);
  x.current = a;
  const b = a != null, C = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, p = te(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && m(!0), h.useEffect(() => {
    !l && b ? d.current || (d.current = !0, y.start(u, () => {
      var S;
      d.current = !1, (S = x.current) == null || S.call(x);
    })) : (d.current = !1, y.clear());
  }, [y, b, l, u]), /* @__PURE__ */ c.jsx("span", {
    className: C,
    style: v,
    children: /* @__PURE__ */ c.jsx("span", {
      className: p
    })
  });
}
const Xt = ae("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), df = 550, vT = 80, zl = {}, sg = [], xT = () => {
};
function Gu(e, t) {
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
const bT = lo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, wT = lo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, CT = lo`
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
  const t = eo`
    &.${Xt.rippleVisible} {
      animation-name: ${bT};
      animation-duration: ${df}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Xt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Xt.childLeaving} {
      animation-name: ${wT};
      animation-duration: ${df}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Xt.childPulsate} {
      animation-name: ${CT};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? eo`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const TT = U("span", {
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
}), ET = U(yT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Xt.rippleVisible} {
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
  & .${Xt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Xt.childLeaving} {
    opacity: 0;
  }

  & .${Xt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => kT(e)}
`, RT = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTouchRipple"
  }), o = ao(), i = lu(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = zl,
    className: a,
    ...u
  } = r, [f, m] = h.useState({
    items: sg,
    order: sg
  }), y = f.items, d = h.useRef(0), x = h.useRef(null), b = h.useRef(!1);
  k1(() => (b.current = !0, () => {
    b.current = !1;
  })), h.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [y]);
  const C = h.useRef(!1), v = or(), p = h.useRef(null), S = h.useRef(null), w = nt((M) => {
    b.current && m((g) => {
      const j = g.items.filter((O) => O.key !== M), P = Gu(g.order.filter((O) => O !== M), j.filter((O) => !O.exiting).map((O) => O.key));
      return {
        items: j,
        order: P
      };
    });
  }), T = nt((M) => {
    const {
      pulsate: g,
      rippleX: j,
      rippleY: P,
      rippleSize: O,
      cb: A
    } = M, N = d.current;
    d.current += 1, m(($) => {
      const z = [...$.items, {
        key: N,
        pulsate: g,
        rippleX: j,
        rippleY: P,
        rippleSize: O,
        exiting: !1
      }];
      return {
        items: z,
        order: Gu($.order, z.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), x.current = A;
  }), k = nt((M = zl, g = zl, j = xT) => {
    const {
      pulsate: P = !1,
      center: O = s || g.pulsate,
      fakeElement: A = !1
      // Used only by tests.
    } = g;
    if ((M == null ? void 0 : M.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (C.current = !0);
    const N = A ? null : S.current, {
      rippleX: $,
      rippleY: z,
      rippleSize: F
    } = ST({
      event: M,
      element: N,
      center: O
    });
    M != null && M.touches ? p.current === null && (p.current = () => {
      T({
        pulsate: P,
        rippleX: $,
        rippleY: z,
        rippleSize: F,
        cb: j
      });
    }, v.start(vT, () => {
      p.current && (p.current(), p.current = null);
    })) : T({
      pulsate: P,
      rippleX: $,
      rippleY: z,
      rippleSize: F,
      cb: j
    });
  }), E = nt(() => {
    k(zl, {
      pulsate: !0
    });
  }), R = nt((M, g) => {
    if (v.clear(), (M == null ? void 0 : M.type) === "touchend" && p.current) {
      p.current(), p.current = null, v.start(0, () => {
        R(M, g);
      });
      return;
    }
    p.current = null, m((j) => {
      const P = j.items.findIndex((A) => !A.exiting);
      if (P === -1)
        return j;
      const O = j.items.slice();
      return O[P] = {
        ...O[P],
        exiting: !0
      }, {
        items: O,
        order: Gu(j.order, O.filter((A) => !A.exiting).map((A) => A.key))
      };
    }), x.current = g;
  });
  h.useImperativeHandle(n, () => ({
    pulsate: E,
    start: k,
    stop: R
  }), [E, k, R]);
  const I = new Map(y.map((M) => [M.key, M])), L = f.order.map((M) => I.get(M)).filter(Boolean);
  return /* @__PURE__ */ c.jsx(TT, {
    className: te(Xt.root, l.root, a),
    ref: S,
    ...u,
    children: L.map((M) => /* @__PURE__ */ c.jsx(ET, {
      classes: {
        ripple: te(l.ripple, Xt.ripple),
        rippleVisible: te(l.rippleVisible, Xt.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Xt.ripplePulsate),
        child: te(l.child, Xt.child),
        childLeaving: te(l.childLeaving, Xt.childLeaving),
        childPulsate: te(l.childPulsate, Xt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : df,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => w(M.key)
    }, M.key))
  });
});
function PT(e) {
  return ue("MuiButtonBase", e);
}
const IT = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]), MT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = de({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, PT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, jT = U("button", {
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
}), ro = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: a = "button",
    disabled: u = !1,
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
    focusRipple: y = !1,
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
    LinkComponent: v = "a",
    nativeButton: p,
    onBlur: S,
    onClick: w,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: E,
    onFocusVisible: R,
    onKeyDown: I,
    onKeyUp: L,
    onMouseDown: M,
    onMouseLeave: g,
    onMouseUp: j,
    onTouchEnd: P,
    onTouchMove: O,
    onTouchStart: A,
    tabIndex: N = 0,
    TouchRippleProps: $,
    touchRippleRef: z,
    type: F,
    ...H
  } = r, D = !!(H.href || H.to), Z = !!H.formAction;
  let V = a;
  V === "button" && D && (V = v);
  const K = p ?? (typeof V == "string" ? V === "button" : C ?? !1), Q = mT(), W = yt(Q.ref, z), [oe, ie] = h.useState(!1);
  (u || b) && oe && ie(!1);
  const be = nt((Te) => {
    y && !Te.repeat && oe && Te.key === " " && Q.stop(Te, () => {
      Q.start(Te);
    });
  }), Ce = nt((Te) => {
    y && Te.key === " " && oe && !Te.defaultPrevented && Q.stop(Te, () => {
      Q.pulsate(Te);
    });
  }), {
    getButtonProps: ve,
    rootRef: le
  } = pT({
    nativeButton: K,
    disabled: u,
    type: F,
    hasFormAction: Z,
    tabIndex: N,
    onBeforeKeyDown: be,
    onBeforeKeyUp: Ce
  }), {
    onClick: Be,
    onKeyDown: Oe,
    onKeyUp: Pe,
    ...Ie
  } = ve({
    onClick: w,
    onKeyDown: I,
    onKeyUp: L
  });
  h.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ie(!0), le.current.focus();
    }
  }), [le]);
  const pe = Q.shouldMount && !f && !u;
  h.useEffect(() => {
    oe && y && !f && Q.pulsate();
  }, [f, y, oe, Q]);
  const ke = gr(Q, "start", M, m), Je = gr(Q, "stop", T, m), _e = gr(Q, "stop", k, m), He = gr(Q, "stop", j, m), ze = gr(Q, "stop", (Te) => {
    oe && Te.preventDefault(), g && g(Te);
  }, m), ot = gr(Q, "start", A, m), Ae = gr(Q, "stop", P, m), xe = gr(Q, "stop", O, m), Le = gr(Q, "stop", (Te) => {
    Qa(Te.target) || ie(!1), S && S(Te);
  }, !1), St = nt((Te) => {
    le.current || (le.current = Te.currentTarget), !b && Qa(Te.target) && (ie(!0), R && R(Te)), E && E(Te);
  }), ee = {};
  D && (ee.tabIndex = u ? -1 : N, u && (ee["aria-disabled"] = u), ee.type = F);
  const Se = yt(n, le), $e = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: y,
    suppressFocusVisible: b,
    tabIndex: N,
    focusVisible: oe
  }, dt = MT($e);
  return /* @__PURE__ */ c.jsxs(jT, {
    as: V,
    className: te(dt.root, l),
    ownerState: $e,
    onBlur: Le,
    onClick: Be,
    onContextMenu: Je,
    onFocus: St,
    onKeyDown: Oe,
    onKeyUp: Pe,
    onMouseDown: ke,
    onMouseLeave: ze,
    onMouseUp: He,
    onDragLeave: _e,
    onTouchEnd: Ae,
    onTouchMove: xe,
    onTouchStart: ot,
    ref: Se,
    ...D ? ee : Ie,
    ...H,
    children: [s, pe ? /* @__PURE__ */ c.jsx(RT, {
      ref: W,
      center: i,
      ...$
    }) : null]
  });
});
function gr(e, t, n, r = !1) {
  return nt((o) => (n && n(o), r || e[t](o), !0));
}
function $T(e) {
  return typeof e.main == "string";
}
function OT(e, t = []) {
  if (!$T(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Ct(e = []) {
  return ([, t]) => t && OT(t, e);
}
function AT(e) {
  return ue("MuiAlert", e);
}
const lg = ae("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function LT(e) {
  return ue("MuiCircularProgress", e);
}
ae("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Bn = 44, ff = lo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, pf = lo`
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
`, NT = typeof ff != "string" ? eo`
        animation: ${ff} 1.4s linear infinite;
      ` : null, BT = typeof pf != "string" ? eo`
        animation: ${pf} 1.4s ease-in-out infinite;
      ` : null, zT = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${ne(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return de(i, LT, t);
}, _T = U("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ne(n.color)}`]];
  }
})(me(({
  theme: e
}) => {
  const t = Wi(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...Ze(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: NT || {
        animation: `${ff} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), FT = U("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), DT = U("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(me(({
  theme: e
}) => {
  const t = Wi(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...Ze(e, "stroke-dashoffset")
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
        animation: `${pf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), WT = U("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(me(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Za = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: l = !1,
    min: a,
    max: u,
    size: f = 40,
    style: m,
    thickness: y = 3.6,
    value: d = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, v = u ?? 100, p = {
    ...r,
    color: i,
    disableShrink: s,
    size: f,
    thickness: y,
    value: d,
    variant: x,
    enableTrackSlot: l
  }, S = zT(p), w = {}, T = {}, k = {};
  if (x === "determinate") {
    const E = 2 * Math.PI * ((Bn - y) / 2), R = v - C;
    w.strokeDasharray = E.toFixed(3), w.strokeDashoffset = R > 0 ? `${((v - d) / R * E).toFixed(3)}px` : `${E.toFixed(3)}px`, T.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = v;
  }
  return /* @__PURE__ */ c.jsx(_T, {
    className: te(S.root, o),
    style: {
      width: f,
      height: f,
      ...T,
      ...m
    },
    ownerState: p,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ c.jsxs(FT, {
      className: S.svg,
      ownerState: p,
      viewBox: `${Bn / 2} ${Bn / 2} ${Bn} ${Bn}`,
      children: [l ? /* @__PURE__ */ c.jsx(WT, {
        className: S.track,
        ownerState: p,
        cx: Bn,
        cy: Bn,
        r: (Bn - y) / 2,
        fill: "none",
        strokeWidth: y,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ c.jsx(DT, {
        className: S.circle,
        style: w,
        ownerState: p,
        cx: Bn,
        cy: Bn,
        r: (Bn - y) / 2,
        fill: "none",
        strokeWidth: y
      })]
    })
  });
});
function UT(e) {
  return ue("MuiIconButton", e);
}
const ag = ae("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), HT = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ne(r)}`, o && `edge${ne(o)}`, `size${ne(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return de(l, UT, t);
}, VT = U(ro, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ne(n.color)}`], n.edge && t[`edge${ne(n.edge)}`], t[`size${ne(n.size)}`]];
  }
})(me(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...Ze(e, "background-color", {
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
})), me(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
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
  [`&.${ag.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ag.loading}`]: {
    color: "transparent"
  }
}))), KT = U("span", {
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
})), vr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: u = !1,
    size: f = "medium",
    id: m,
    loading: y = null,
    loadingIndicator: d,
    ...x
  } = r, b = Mr(m), C = d ?? /* @__PURE__ */ c.jsx(Za, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), v = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: y,
    loadingIndicator: C,
    size: f
  }, p = HT(v);
  return /* @__PURE__ */ c.jsxs(VT, {
    id: y ? b : m,
    className: te(p.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || y,
    ref: n,
    ...x,
    ownerState: v,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: p.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ c.jsx(KT, {
        className: p.loadingIndicator,
        ownerState: v,
        children: y && C
      })
    }), i]
  });
}), YT = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), GT = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), XT = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), QT = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), qT = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), ZT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${ne(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return de(i, AT, o);
}, JT = U(Wt, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Ct(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${lg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Ct(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${lg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Ct(["dark"])).map(([r]) => ({
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
})), eE = U("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), tE = U("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), nE = U("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), cg = {
  success: /* @__PURE__ */ c.jsx(YT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ c.jsx(GT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ c.jsx(XT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ c.jsx(QT, {
    fontSize: "inherit"
  })
}, ug = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: u,
    iconMapping: f = cg,
    onClose: m,
    role: y = "alert",
    severity: d = "success",
    slotProps: x = {},
    slots: b = {},
    variant: C = "standard",
    ...v
  } = r, p = {
    ...r,
    color: a,
    severity: d,
    variant: C,
    colorSeverity: a || d
  }, S = ZT(p), w = {
    slots: b,
    slotProps: x
  }, [T, k] = ge("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: te(S.root, s),
    elementType: JT,
    externalForwardedProps: {
      ...w,
      ...v
    },
    ownerState: p,
    additionalProps: {
      role: y,
      elevation: 0
    }
  }), [E, R] = ge("icon", {
    className: S.icon,
    elementType: eE,
    externalForwardedProps: w,
    ownerState: p
  }), [I, L] = ge("message", {
    className: S.message,
    elementType: tE,
    externalForwardedProps: w,
    ownerState: p
  }), [M, g] = ge("action", {
    className: S.action,
    elementType: nE,
    externalForwardedProps: w,
    ownerState: p
  }), [j, P] = ge("closeButton", {
    elementType: vr,
    externalForwardedProps: w,
    ownerState: p
  }), [O, A] = ge("closeIcon", {
    elementType: qT,
    externalForwardedProps: w,
    ownerState: p
  });
  return /* @__PURE__ */ c.jsxs(T, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ c.jsx(E, {
      ...R,
      children: u || f[d] || cg[d]
    }) : null, /* @__PURE__ */ c.jsx(I, {
      ...L,
      children: i
    }), o != null ? /* @__PURE__ */ c.jsx(M, {
      ...g,
      children: o
    }) : null, o == null && m ? /* @__PURE__ */ c.jsx(M, {
      ...g,
      children: /* @__PURE__ */ c.jsx(j, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: m,
        ...P,
        children: /* @__PURE__ */ c.jsx(O, {
          fontSize: "small",
          ...A
        })
      })
    }) : null]
  });
});
function rE(e) {
  return ue("MuiTypography", e);
}
ae("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const oE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ne(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return de(s, rE, i);
}, iE = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ne(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(me(({
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
    })), ...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${ne(n)}`
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
})), dg = {
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
  const r = he({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: i = "inherit",
    className: s,
    component: l,
    gutterBottom: a = !1,
    noWrap: u = !1,
    variant: f = "body1",
    variantMapping: m = dg,
    ...y
  } = r, d = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: f,
    variantMapping: m
  }, x = l || m[f] || dg[f] || "span", b = oE(d);
  return /* @__PURE__ */ c.jsx(iE, {
    as: x,
    ref: n,
    className: te(b.root, s),
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
function Po(e, t) {
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
var sn = "top", jn = "bottom", $n = "right", ln = "left", Kp = "auto", pl = [sn, jn, $n, ln], Oi = "start", Js = "end", sE = "clippingParents", T1 = "viewport", rs = "popper", lE = "reference", fg = /* @__PURE__ */ pl.reduce(function(e, t) {
  return e.concat([t + "-" + Oi, t + "-" + Js]);
}, []), E1 = /* @__PURE__ */ [].concat(pl, [Kp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Oi, t + "-" + Js]);
}, []), aE = "beforeRead", cE = "read", uE = "afterRead", dE = "beforeMain", fE = "main", pE = "afterMain", mE = "beforeWrite", hE = "write", gE = "afterWrite", yE = [aE, cE, uE, dE, fE, pE, mE, hE, gE];
function ur(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function gn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Bo(e) {
  var t = gn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Pn(e) {
  var t = gn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = gn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function vE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Pn(i) || !ur(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = s.reduce(function(a, u) {
        return a[u] = "", a;
      }, {});
      !Pn(o) || !ur(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
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
function cr(e) {
  return e.split("-")[0];
}
var Io = Math.max, Ja = Math.min, Ai = Math.round;
function mf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function R1() {
  return !/^((?!chrome|android).)*safari/i.test(mf());
}
function Li(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Pn(e) && (o = e.offsetWidth > 0 && Ai(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ai(r.height) / e.offsetHeight || 1);
  var s = Bo(e) ? gn(e) : window, l = s.visualViewport, a = !R1() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, f = (r.top + (a && l ? l.offsetTop : 0)) / i, m = r.width / o, y = r.height / i;
  return {
    width: m,
    height: y,
    top: f,
    right: u + m,
    bottom: f + y,
    left: u,
    x: u,
    y: f
  };
}
function Gp(e) {
  var t = Li(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function P1(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Yp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function jr(e) {
  return gn(e).getComputedStyle(e);
}
function bE(e) {
  return ["table", "td", "th"].indexOf(ur(e)) >= 0;
}
function co(e) {
  return ((Bo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function cu(e) {
  return ur(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Yp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    co(e)
  );
}
function pg(e) {
  return !Pn(e) || // https://github.com/popperjs/popper-core/issues/837
  jr(e).position === "fixed" ? null : e.offsetParent;
}
function wE(e) {
  var t = /firefox/i.test(mf()), n = /Trident/i.test(mf());
  if (n && Pn(e)) {
    var r = jr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = cu(e);
  for (Yp(o) && (o = o.host); Pn(o) && ["html", "body"].indexOf(ur(o)) < 0; ) {
    var i = jr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ml(e) {
  for (var t = gn(e), n = pg(e); n && bE(n) && jr(n).position === "static"; )
    n = pg(n);
  return n && (ur(n) === "html" || ur(n) === "body" && jr(n).position === "static") ? t : n || wE(e) || t;
}
function Xp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ks(e, t, n) {
  return Io(e, Ja(t, n));
}
function CE(e, t, n) {
  var r = ks(e, t, n);
  return r > n ? n : r;
}
function I1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function M1(e) {
  return Object.assign({}, I1(), e);
}
function j1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var kE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, M1(typeof t != "number" ? t : j1(t, pl));
};
function TE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = cr(n.placement), a = Xp(l), u = [ln, $n].indexOf(l) >= 0, f = u ? "height" : "width";
  if (!(!i || !s)) {
    var m = kE(o.padding, n), y = Gp(i), d = a === "y" ? sn : ln, x = a === "y" ? jn : $n, b = n.rects.reference[f] + n.rects.reference[a] - s[a] - n.rects.popper[f], C = s[a] - n.rects.reference[a], v = ml(i), p = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, S = b / 2 - C / 2, w = m[d], T = p - y[f] - m[x], k = p / 2 - y[f] / 2 + S, E = ks(w, k, T), R = a;
    n.modifiersData[r] = (t = {}, t[R] = E, t.centerOffset = E - k, t);
  }
}
function EE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || P1(t.elements.popper, o) && (t.elements.arrow = o));
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
function mg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, y = s.x, d = y === void 0 ? 0 : y, x = s.y, b = x === void 0 ? 0 : x, C = typeof f == "function" ? f({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var v = s.hasOwnProperty("x"), p = s.hasOwnProperty("y"), S = ln, w = sn, T = window;
  if (u) {
    var k = ml(n), E = "clientHeight", R = "clientWidth";
    if (k === gn(n) && (k = co(n), jr(k).position !== "static" && l === "absolute" && (E = "scrollHeight", R = "scrollWidth")), k = k, o === sn || (o === ln || o === $n) && i === Js) {
      w = jn;
      var I = m && k === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[E]
      );
      b -= I - r.height, b *= a ? 1 : -1;
    }
    if (o === ln || (o === sn || o === jn) && i === Js) {
      S = $n;
      var L = m && k === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      d -= L - r.width, d *= a ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, u && PE), g = f === !0 ? IE({
    x: d,
    y: b
  }, gn(n)) : {
    x: d,
    y: b
  };
  if (d = g.x, b = g.y, a) {
    var j;
    return Object.assign({}, M, (j = {}, j[w] = p ? "0" : "", j[S] = v ? "0" : "", j.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, M, (t = {}, t[w] = p ? b + "px" : "", t[S] = v ? d + "px" : "", t.transform = "", t));
}
function ME(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: cr(t.placement),
    variation: Ni(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mg(Object.assign({}, u, {
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
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = gn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, _l);
  }), l && a.addEventListener("resize", n.update, _l), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, _l);
    }), l && a.removeEventListener("resize", n.update, _l);
  };
}
const OE = {
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
function da(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return AE[t];
  });
}
var LE = {
  start: "end",
  end: "start"
};
function hg(e) {
  return e.replace(/start|end/g, function(t) {
    return LE[t];
  });
}
function Qp(e) {
  var t = gn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function qp(e) {
  return Li(co(e)).left + Qp(e).scrollLeft;
}
function NE(e, t) {
  var n = gn(e), r = co(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = R1();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + qp(e),
    y: a
  };
}
function BE(e) {
  var t, n = co(e), r = Qp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Io(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Io(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + qp(e), a = -r.scrollTop;
  return jr(o || n).direction === "rtl" && (l += Io(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Zp(e) {
  var t = jr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function $1(e) {
  return ["html", "body", "#document"].indexOf(ur(e)) >= 0 ? e.ownerDocument.body : Pn(e) && Zp(e) ? e : $1(cu(e));
}
function Ts(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = $1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = gn(r), s = o ? [i].concat(i.visualViewport || [], Zp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ts(cu(s)))
  );
}
function hf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function zE(e, t) {
  var n = Li(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gg(e, t, n) {
  return t === T1 ? hf(NE(e, n)) : Bo(t) ? zE(t, n) : hf(BE(co(e)));
}
function _E(e) {
  var t = Ts(cu(e)), n = ["absolute", "fixed"].indexOf(jr(e).position) >= 0, r = n && Pn(e) ? ml(e) : e;
  return Bo(r) ? t.filter(function(o) {
    return Bo(o) && P1(o, r) && ur(o) !== "body";
  }) : [];
}
function FE(e, t, n, r) {
  var o = t === "clippingParents" ? _E(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var f = gg(e, u, r);
    return a.top = Io(f.top, a.top), a.right = Ja(f.right, a.right), a.bottom = Ja(f.bottom, a.bottom), a.left = Io(f.left, a.left), a;
  }, gg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function O1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? cr(r) : null, i = r ? Ni(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case sn:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case jn:
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
    case ln:
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
  var u = o ? Xp(o) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case Oi:
        a[u] = a[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Js:
        a[u] = a[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return a;
}
function el(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? sE : l, u = n.rootBoundary, f = u === void 0 ? T1 : u, m = n.elementContext, y = m === void 0 ? rs : m, d = n.altBoundary, x = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, v = M1(typeof C != "number" ? C : j1(C, pl)), p = y === rs ? lE : rs, S = e.rects.popper, w = e.elements[x ? p : y], T = FE(Bo(w) ? w : w.contextElement || co(e.elements.popper), a, f, s), k = Li(e.elements.reference), E = O1({
    reference: k,
    element: S,
    placement: o
  }), R = hf(Object.assign({}, S, E)), I = y === rs ? R : k, L = {
    top: T.top - I.top + v.top,
    bottom: I.bottom - T.bottom + v.bottom,
    left: T.left - I.left + v.left,
    right: I.right - T.right + v.right
  }, M = e.modifiersData.offset;
  if (y === rs && M) {
    var g = M[o];
    Object.keys(L).forEach(function(j) {
      var P = [$n, jn].indexOf(j) >= 0 ? 1 : -1, O = [sn, jn].indexOf(j) >= 0 ? "y" : "x";
      L[j] += g[O] * P;
    });
  }
  return L;
}
function DE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? E1 : a, f = Ni(r), m = f ? l ? fg : fg.filter(function(x) {
    return Ni(x) === f;
  }) : pl, y = m.filter(function(x) {
    return u.indexOf(x) >= 0;
  });
  y.length === 0 && (y = m);
  var d = y.reduce(function(x, b) {
    return x[b] = el(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[cr(b)], x;
  }, {});
  return Object.keys(d).sort(function(x, b) {
    return d[x] - d[b];
  });
}
function WE(e) {
  if (cr(e) === Kp)
    return [];
  var t = da(e);
  return [hg(e), t, hg(t)];
}
function UE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, y = n.altBoundary, d = n.flipVariations, x = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, v = cr(C), p = v === C, S = a || (p || !x ? [da(C)] : WE(C)), w = [C].concat(S).reduce(function(V, Y) {
      return V.concat(cr(Y) === Kp ? DE(t, {
        placement: Y,
        boundary: f,
        rootBoundary: m,
        padding: u,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : Y);
    }, []), T = t.rects.reference, k = t.rects.popper, E = /* @__PURE__ */ new Map(), R = !0, I = w[0], L = 0; L < w.length; L++) {
      var M = w[L], g = cr(M), j = Ni(M) === Oi, P = [sn, jn].indexOf(g) >= 0, O = P ? "width" : "height", A = el(t, {
        placement: M,
        boundary: f,
        rootBoundary: m,
        altBoundary: y,
        padding: u
      }), N = P ? j ? $n : ln : j ? jn : sn;
      T[O] > k[O] && (N = da(N));
      var $ = da(N), z = [];
      if (i && z.push(A[g] <= 0), l && z.push(A[N] <= 0, A[$] <= 0), z.every(function(V) {
        return V;
      })) {
        I = M, R = !1;
        break;
      }
      E.set(M, z);
    }
    if (R)
      for (var F = x ? 3 : 1, H = function(Y) {
        var K = w.find(function(Q) {
          var W = E.get(Q);
          if (W)
            return W.slice(0, Y).every(function(oe) {
              return oe;
            });
        });
        if (K)
          return I = K, "break";
      }, D = F; D > 0; D--) {
        var Z = H(D);
        if (Z === "break") break;
      }
    t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0);
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
function yg(e, t, n) {
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
function vg(e) {
  return [sn, $n, jn, ln].some(function(t) {
    return e[t] >= 0;
  });
}
function VE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = el(t, {
    elementContext: "reference"
  }), l = el(t, {
    altBoundary: !0
  }), a = yg(s, r), u = yg(l, o, i), f = vg(a), m = vg(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
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
  var r = cr(e), o = [ln, sn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [ln, $n].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function GE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = E1.reduce(function(f, m) {
    return f[m] = YE(m, t.rects, i), f;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
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
  t.modifiersData[n] = O1({
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, y = n.tether, d = y === void 0 ? !0 : y, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = el(t, {
    boundary: a,
    rootBoundary: u,
    padding: m,
    altBoundary: f
  }), v = cr(t.placement), p = Ni(t.placement), S = !p, w = Xp(v), T = ZE(w), k = t.modifiersData.popperOffsets, E = t.rects.reference, R = t.rects.popper, I = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, L = typeof I == "number" ? {
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
      var j, P = w === "y" ? sn : ln, O = w === "y" ? jn : $n, A = w === "y" ? "height" : "width", N = k[w], $ = N + C[P], z = N - C[O], F = d ? -R[A] / 2 : 0, H = p === Oi ? E[A] : R[A], D = p === Oi ? -R[A] : -E[A], Z = t.elements.arrow, V = d && Z ? Gp(Z) : {
        width: 0,
        height: 0
      }, Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : I1(), K = Y[P], Q = Y[O], W = ks(0, E[A], V[A]), oe = S ? E[A] / 2 - F - W - K - L.mainAxis : H - W - K - L.mainAxis, ie = S ? -E[A] / 2 + F + W + Q + L.mainAxis : D + W + Q + L.mainAxis, be = t.elements.arrow && ml(t.elements.arrow), Ce = be ? w === "y" ? be.clientTop || 0 : be.clientLeft || 0 : 0, ve = (j = M == null ? void 0 : M[w]) != null ? j : 0, le = N + oe - ve - Ce, Be = N + ie - ve, Oe = ks(d ? Ja($, le) : $, N, d ? Io(z, Be) : z);
      k[w] = Oe, g[w] = Oe - N;
    }
    if (l) {
      var Pe, Ie = w === "x" ? sn : ln, pe = w === "x" ? jn : $n, ke = k[T], Je = T === "y" ? "height" : "width", _e = ke + C[Ie], He = ke - C[pe], ze = [sn, ln].indexOf(v) !== -1, ot = (Pe = M == null ? void 0 : M[T]) != null ? Pe : 0, Ae = ze ? _e : ke - E[Je] - R[Je] - ot + L.altAxis, xe = ze ? ke + E[Je] + R[Je] - ot - L.altAxis : He, Le = d && ze ? CE(Ae, ke, xe) : ks(d ? Ae : _e, ke, d ? xe : He);
      k[T] = Le, g[T] = Le - ke;
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
  return e === gn(e) || !Pn(e) ? Qp(e) : tR(e);
}
function rR(e) {
  var t = e.getBoundingClientRect(), n = Ai(t.width) / e.offsetWidth || 1, r = Ai(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function oR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Pn(t), o = Pn(t) && rR(t), i = co(t), s = Li(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((ur(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zp(i)) && (l = nR(t)), Pn(t) ? (a = Li(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = qp(i))), {
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
var xg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Sg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function cR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? xg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, m = [], y = !1, d = {
      state: f,
      setOptions: function(v) {
        var p = typeof v == "function" ? v(f.options) : v;
        b(), f.options = Object.assign({}, i, f.options, p), f.scrollParents = {
          reference: Bo(l) ? Ts(l) : l.contextElement ? Ts(l.contextElement) : [],
          popper: Ts(a)
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
        if (!y) {
          var v = f.elements, p = v.reference, S = v.popper;
          if (Sg(p, S)) {
            f.rects = {
              reference: oR(p, ml(S), f.options.strategy === "fixed"),
              popper: Gp(S)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(L) {
              return f.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var w = 0; w < f.orderedModifiers.length; w++) {
              if (f.reset === !0) {
                f.reset = !1, w = -1;
                continue;
              }
              var T = f.orderedModifiers[w], k = T.fn, E = T.options, R = E === void 0 ? {} : E, I = T.name;
              typeof k == "function" && (f = k({
                state: f,
                options: R,
                name: I,
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
        b(), y = !0;
      }
    };
    if (!Sg(l, a))
      return d;
    d.setOptions(u).then(function(C) {
      !y && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function x() {
      f.orderedModifiers.forEach(function(C) {
        var v = C.name, p = C.options, S = p === void 0 ? {} : p, w = C.effect;
        if (typeof w == "function") {
          var T = w({
            state: f,
            name: v,
            instance: d,
            options: S
          }), k = function() {
          };
          m.push(T || k);
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
var uR = [OE, qE, jE, SE, XE, HE, eR, RE, KE], dR = /* @__PURE__ */ cR({
  defaultModifiers: uR
});
function Bi(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : w1(n, r), {
    props: l,
    internalRef: a
  } = C1({
    ...i,
    externalSlotProps: s
  }), u = yt(a, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return b1(t, {
    ...l,
    ref: u
  }, r);
}
function Do(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function fR(e) {
  return typeof e == "function" ? e() : e;
}
const A1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), a = yt(/* @__PURE__ */ h.isValidElement(r) ? Do(r) : null, n);
  if (ht(() => {
    i || l(fR(o) || document.body);
  }, [o, i]), ht(() => {
    if (s && !i)
      return uf(n, s), () => {
        uf(n, null);
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
  return s && /* @__PURE__ */ g0.createPortal(r, s);
});
function pR(e) {
  return ue("MuiPopper", e);
}
ae("MuiPopper", ["root"]);
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
function L1(e) {
  return typeof e == "function" ? e() : e;
}
function hR(e) {
  return e.nodeType !== void 0;
}
const gR = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, pR, t);
}, yR = {}, vR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: f,
    popperRef: m,
    slotProps: y = {},
    slots: d = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, v = h.useRef(null), p = yt(v, n), S = h.useRef(null), w = yt(S, m), T = h.useRef(w);
  ht(() => {
    T.current = w;
  }, [w]), h.useImperativeHandle(m, () => S.current, []);
  const k = mR(u, i), [E, R] = h.useState(k), I = h.useMemo(() => L1(r), [r]);
  h.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), ht(() => {
    if (!I || !a)
      return;
    const P = ($) => {
      R($.placement);
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
        state: $
      }) => {
        P($);
      }
    }];
    l != null && (O = O.concat(l)), f && f.modifiers != null && (O = O.concat(f.modifiers));
    const A = dR(I, v.current, {
      placement: k,
      ...f,
      modifiers: O
    });
    T.current(A);
    const N = v.current;
    return () => {
      if (N) {
        const {
          style: $
        } = N, z = $.position, F = $.top, H = $.left, D = $.transform;
        A.destroy(), $.position = z, $.top = F, $.left = H, $.transform = D;
      } else
        A.destroy();
      T.current(null);
    };
  }, [I, s, l, a, f, k]);
  const L = {
    placement: E
  };
  x !== null && (L.TransitionProps = x);
  const M = gR(t), g = d.root ?? "div", j = Bi({
    elementType: g,
    externalSlotProps: y.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: p
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ c.jsx(g, {
    ...j,
    children: typeof o == "function" ? o(L) : o
  });
}), xR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: f,
    placement: m = "bottom",
    popperOptions: y = yR,
    popperRef: d,
    style: x,
    transition: b = !1,
    slotProps: C = {},
    slots: v = {},
    ...p
  } = t, [S, w] = h.useState(!0), T = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !f && (!b || S))
    return null;
  let E;
  if (i)
    E = i;
  else if (r) {
    const L = L1(r);
    E = L && hR(L) ? xt(L).body : xt(null).body;
  }
  const R = !f && a && (!b || S) ? "none" : void 0, I = b ? {
    in: f,
    onEnter: T,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ c.jsx(A1, {
    disablePortal: l,
    container: E,
    children: /* @__PURE__ */ c.jsx(vR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: b ? !S : f,
      placement: m,
      popperOptions: y,
      popperRef: d,
      slotProps: C,
      slots: v,
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
}), SR = U(xR, {
  name: "MuiPopper",
  slot: "Root"
})({}), N1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = dl(), o = he({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: f,
    open: m,
    placement: y,
    popperOptions: d,
    popperRef: x,
    transition: b,
    slots: C,
    slotProps: v,
    ...p
  } = o, S = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: f,
    open: m,
    placement: y,
    popperOptions: d,
    popperRef: x,
    transition: b,
    ...p
  };
  return /* @__PURE__ */ c.jsx(SR, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: v,
    ...S,
    ref: n
  });
}), bR = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function wR(e) {
  return ue("MuiChip", e);
}
const Ue = ae("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), CR = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${ne(r)}`, `color${ne(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return de(a, wR, t);
}, kR = U("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Jt(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
    }, t.root, t[`size${ne(s)}`], t[`color${ne(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(me(({
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
    ...Ze(e, ["background-color", "box-shadow"]),
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
    }, ...Object.entries(e.palette).filter(Ct(["contrastText"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Ct(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Ct(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
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
})), TR = U("span", {
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
function bg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Lr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: l = "default",
    component: a,
    deleteIcon: u,
    disabled: f = !1,
    icon: m,
    label: y,
    onClick: d,
    onDelete: x,
    onKeyDown: b,
    onKeyUp: C,
    size: v = "medium",
    variant: p = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: T = {},
    slotProps: k = {},
    ...E
  } = r, {
    nativeButton: R,
    ...I
  } = E, L = h.useRef(null), M = yt(L, n), g = (W) => {
    W.stopPropagation(), x(W);
  }, j = (W) => {
    W.currentTarget === W.target && bg(W) && W.preventDefault(), b && b(W);
  }, P = (W) => {
    W.currentTarget === W.target && x && bg(W) && x(W), C && C(W);
  }, O = s !== !1 && d ? !0 : s, A = O || x ? ro : a || "div", N = {
    ...r,
    component: A,
    disabled: f,
    size: v,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(m) && m.props.color || l,
    onDelete: !!x,
    clickable: O,
    variant: p
  }, $ = CR(N), z = A === ro ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: $.focusVisible,
    ...x && {
      disableRipple: !0
    },
    ...R !== void 0 && {
      nativeButton: R
    }
  } : {};
  let F = null;
  x && (F = u && /* @__PURE__ */ h.isValidElement(u) ? /* @__PURE__ */ h.cloneElement(u, {
    className: te(u.props.className, $.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ c.jsx(bR, {
    className: $.deleteIcon,
    onClick: g
  }));
  let H = null;
  o && /* @__PURE__ */ h.isValidElement(o) && (H = /* @__PURE__ */ h.cloneElement(o, {
    className: te($.avatar, o.props.className)
  }));
  let D = null;
  m && /* @__PURE__ */ h.isValidElement(m) && (D = /* @__PURE__ */ h.cloneElement(m, {
    className: te($.icon, m.props.className)
  }));
  const Z = {
    slots: T,
    slotProps: k
  }, [V, Y] = ge("root", {
    elementType: kR,
    externalForwardedProps: {
      ...Z,
      ...I
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: te($.root, i),
    additionalProps: {
      disabled: O && f ? !0 : void 0,
      tabIndex: w && f ? -1 : S,
      ...z
    },
    getSlotProps: (W) => ({
      ...W,
      onClick: (oe) => {
        var ie;
        (ie = W.onClick) == null || ie.call(W, oe), d == null || d(oe);
      },
      onKeyDown: (oe) => {
        var ie;
        (ie = W.onKeyDown) == null || ie.call(W, oe), j(oe);
      },
      onKeyUp: (oe) => {
        var ie;
        (ie = W.onKeyUp) == null || ie.call(W, oe), P(oe);
      }
    })
  }), [K, Q] = ge("label", {
    elementType: TR,
    externalForwardedProps: Z,
    ownerState: N,
    className: $.label
  });
  return /* @__PURE__ */ c.jsxs(V, {
    as: A,
    ...Y,
    children: [H || D, /* @__PURE__ */ c.jsx(K, {
      ...Q,
      children: y
    }), F]
  });
}), ER = rt(/* @__PURE__ */ c.jsx("path", {
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
}, B1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ao(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: f,
    onEnter: m,
    onEntered: y,
    onEntering: d,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: v,
    timeout: p = o,
    ...S
  } = t, w = lu(r.motion.reducedMotion, a), T = h.useRef(null), k = yt(T, Do(l), n), E = Tn(T, d), R = Tn(T, (P, O) => {
    w.shouldReduceMotion || Wp(P);
    const A = Ka({
      style: v,
      timeout: p,
      easing: u
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: A.duration,
      delay: A.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: A.easing,
      delay: N.delay
    }), m && m(P, O);
  }), I = Tn(T, y), L = Tn(T, C), M = Tn(T, (P) => {
    const O = Ka({
      style: v,
      timeout: p,
      easing: u
    }, {
      mode: "exit"
    }), A = w.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: A.duration,
      easing: O.easing,
      delay: A.delay
    }), x && x(P);
  }), g = Tn(T, (P) => {
    P.style.transition = "", b && b(P);
  }), j = i ? (P) => {
    i(T.current, P);
  } : void 0;
  return /* @__PURE__ */ c.jsx(v1, {
    appear: s,
    in: f,
    nodeRef: T,
    onEnter: R,
    onEntered: I,
    onEntering: E,
    onExit: M,
    onExited: g,
    onExiting: L,
    addEndListener: j,
    reduceMotion: w.shouldReduceMotion,
    timeout: p,
    ...S,
    children: (P, {
      ownerState: O,
      ...A
    }) => {
      const N = h1(P, f, RR, PR, v, l.props.style);
      return /* @__PURE__ */ h.cloneElement(l, {
        style: N,
        ref: k,
        ...A
      });
    }
  });
});
function IR(e) {
  return ue("MuiBackdrop", e);
}
ae("MuiBackdrop", ["root", "invisible"]);
const MR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return de({
    root: ["root", n && "invisible"]
  }, IR, t);
}, jR = U("div", {
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
}), z1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: l = !1,
    open: a,
    slotProps: u = {},
    slots: f = {},
    transitionDuration: m,
    ...y
  } = r, d = {
    ...r,
    component: s,
    invisible: l
  }, x = MR(d), b = {
    component: s,
    slots: f,
    slotProps: u
  }, [C, v] = ge("root", {
    elementType: jR,
    externalForwardedProps: b,
    className: te(x.root, i),
    ownerState: d
  }), [p, S] = ge("transition", {
    elementType: B1,
    externalForwardedProps: b,
    ownerState: d
  });
  return /* @__PURE__ */ c.jsx(p, {
    in: a,
    timeout: m,
    ...y,
    ...S,
    children: /* @__PURE__ */ c.jsx(C, {
      ...v,
      ref: n,
      children: o
    })
  });
}), $R = ae("MuiBox", ["root"]), OR = tu(), qe = YC({
  themeId: lr,
  defaultTheme: OR,
  defaultClassName: $R.root,
  generateClassName: G0.generate
});
function AR(e) {
  return ue("MuiButton", e);
}
const go = ae("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), LR = /* @__PURE__ */ h.createContext({}), NR = /* @__PURE__ */ h.createContext(void 0), BR = (e) => {
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
    root: ["root", s && "loading", i, `size${ne(o)}`, `color${ne(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ne(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = de(u, AR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, _1 = [{
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
}], zR = U(ro, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ne(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...Ze(e, ["background-color", "box-shadow", "border-color", "color"], {
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
    }, ...Object.entries(e.palette).filter(Ct()).map(([r]) => ({
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
        ...Ze(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${go.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), _R = U("span", {
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
      ...Ze(e, ["opacity"], {
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
  }, ..._1]
})), FR = U("span", {
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
      ...Ze(e, ["opacity"], {
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
  }, ..._1]
})), DR = U("span", {
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
})), wg = U("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Qe = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = h.useContext(LR), o = h.useContext(NR), i = Zs(r, t), s = he({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: f,
    disabled: m = !1,
    disableElevation: y = !1,
    disableFocusRipple: d = !1,
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: v,
    loading: p = null,
    loadingIndicator: S,
    loadingPosition: w = "center",
    size: T = "medium",
    startIcon: k,
    type: E,
    variant: R = "text",
    ...I
  } = s, L = Mr(v), M = S ?? /* @__PURE__ */ c.jsx(Za, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: u,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: d,
    fullWidth: C,
    loading: p,
    loadingIndicator: M,
    loadingPosition: w,
    size: T,
    type: E,
    variant: R
  }, j = BR(g), P = (k || p && w === "start") && /* @__PURE__ */ c.jsx(_R, {
    className: j.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ c.jsx(wg, {
      className: j.loadingIconPlaceholder,
      ownerState: g
    })
  }), O = (x || p && w === "end") && /* @__PURE__ */ c.jsx(FR, {
    className: j.endIcon,
    ownerState: g,
    children: x || /* @__PURE__ */ c.jsx(wg, {
      className: j.loadingIconPlaceholder,
      ownerState: g
    })
  }), A = o || "", N = typeof p == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: j.loadingWrapper,
      style: {
        display: "contents"
      },
      children: p && /* @__PURE__ */ c.jsx(DR, {
        className: j.loadingIndicator,
        ownerState: g,
        children: M
      })
    })
  ) : null, {
    root: $,
    ...z
  } = j;
  return /* @__PURE__ */ c.jsxs(zR, {
    ownerState: g,
    className: te(r.className, j.root, f, A),
    component: u,
    disabled: m || p,
    focusRipple: !d,
    focusVisibleClassName: te(j.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: E,
    id: p ? L : v,
    ...I,
    classes: z,
    children: [P, w !== "end" && N, l, w === "end" && N, O]
  });
});
function WR(e) {
  return ue("MuiCard", e);
}
ae("MuiCard", ["root"]);
const UR = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, WR, t);
}, HR = U(Wt, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Fl = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = UR(l);
  return /* @__PURE__ */ c.jsx(HR, {
    className: te(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function VR(e) {
  return ue("MuiCardContent", e);
}
ae("MuiCardContent", ["root"]);
const KR = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, VR, t);
}, YR = U("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Dl = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = KR(l);
  return /* @__PURE__ */ c.jsx(YR, {
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function GR(e) {
  return ue("PrivateSwitchBase", e);
}
ae("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const XR = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${ne(o)}`],
    input: ["input"]
  };
  return de(i, GR, t);
}, QR = U(ro, {
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
}), qR = U("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Jt
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
}), ZR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: i,
    defaultChecked: s,
    disabled: l,
    disableFocusRipple: a = !1,
    edge: u = !1,
    icon: f,
    id: m,
    name: y,
    onBlur: d,
    onChange: x,
    onFocus: b,
    readOnly: C,
    required: v = !1,
    tabIndex: p,
    type: S,
    value: w,
    slots: T = {},
    slotProps: k = {},
    ...E
  } = t, {
    nativeButton: R,
    ...I
  } = E, [L, M] = Ga({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), g = f1(), j = (Y) => {
    b && b(Y), g && g.onFocus && g.onFocus(Y);
  }, P = (Y) => {
    d && d(Y), g && g.onBlur && g.onBlur(Y);
  }, O = (Y) => {
    if (Y.nativeEvent.defaultPrevented || C)
      return;
    const K = Y.target.checked;
    M(K), x && x(Y, K);
  };
  let A = l;
  g && typeof A > "u" && (A = g.disabled);
  const N = S === "checkbox" || S === "radio", $ = {
    ...t,
    checked: L,
    disabled: A,
    disableFocusRipple: a,
    edge: u
  }, z = XR($), F = {
    slots: T,
    slotProps: k
  }, [H, D] = ge("root", {
    ref: n,
    elementType: QR,
    className: z.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...F,
      component: "span",
      ...I
    },
    getSlotProps: (Y) => ({
      ...Y,
      onFocus: (K) => {
        var Q;
        (Q = Y.onFocus) == null || Q.call(Y, K), j(K);
      },
      onBlur: (K) => {
        var Q;
        (Q = Y.onBlur) == null || Q.call(Y, K), P(K);
      }
    }),
    ownerState: $,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !a,
      role: void 0,
      tabIndex: null
    }
  }), [Z, V] = ge("input", {
    elementType: qR,
    className: z.input,
    externalForwardedProps: F,
    getSlotProps: (Y) => ({
      ...Y,
      onChange: (K) => {
        var Q;
        (Q = Y.onChange) == null || Q.call(Y, K), O(K);
      }
    }),
    ownerState: $,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: s,
      disabled: A,
      id: N ? m : void 0,
      name: y,
      readOnly: C,
      required: v,
      tabIndex: p,
      type: S,
      ...S === "checkbox" && w === void 0 ? {} : {
        value: w
      }
    }
  });
  return /* @__PURE__ */ c.jsxs(H, {
    ...D,
    children: [/* @__PURE__ */ c.jsx(Z, {
      ...V
    }), L ? i : f]
  });
});
function Cg(e) {
  return e.substring(2).toLowerCase();
}
function JR(e, t) {
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
  const f = yt(Do(t), l), m = nt((x) => {
    const b = u.current;
    u.current = !1;
    const C = xt(l.current);
    if (!a.current || !l.current || "clientX" in x && JR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let v;
    x.composedPath ? v = x.composedPath().includes(l.current) : v = !Po(C.documentElement, x.target) || Po(l.current, x.target), !v && (n || !b) && o(x);
  }), y = (x) => (b) => {
    u.current = !0;
    const C = t.props[x];
    C && C(b);
  }, d = {
    ref: f
  };
  return i !== !1 && (d[i] = y(i)), h.useEffect(() => {
    if (i !== !1) {
      const x = Cg(i), b = xt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, m), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, m), b.removeEventListener("touchmove", C);
      };
    }
  }, [m, i]), r !== !1 && (d[r] = y(r)), h.useEffect(() => {
    if (r !== !1) {
      const x = Cg(r), b = xt(l.current);
      return b.addEventListener(x, m), () => {
        b.removeEventListener(x, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ h.cloneElement(t, d);
}
function F1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function tP(e) {
  const t = xt(e);
  return e === t.body || e === t.documentElement ? Vn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Es(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function kg(e) {
  return parseFloat(Vn(e).getComputedStyle(e).paddingRight) || 0;
}
function nP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Tg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !nP(s);
    l && a && Es(s, o);
  });
}
function rP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = xt(r).body;
    else {
      const s = r.parentElement, l = Vn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (tP(i)) {
      const s = F1(Vn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${kg(i) + s}px`;
      const l = xt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${kg(a) + s}px`;
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
    r = this.modals.length, this.modals.push(t), t.modalRef && Es(t.modalRef, !1);
    const o = oP(n);
    Tg(n, t.mount, t.modalRef, o, !0);
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
      i.restore && i.restore(), t.modalRef && Es(t.modalRef, n), Tg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Es(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const gf = "data-mui-focusable";
function Eg(e) {
  return e ? e.hasAttribute(gf) ? e : e.querySelector(`[${gf}]`) : null;
}
const sP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function D1(e) {
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
function cP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(sP)).forEach((r, o) => {
    const i = D1(r);
    i === -1 || !aP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function uP() {
  return !0;
}
function dP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = cP,
    isEnabled: s = uP,
    open: l
  } = e, a = h.useRef(!1), u = h.useRef(null), f = h.useRef(null), m = h.useRef(null), y = h.useRef(null), d = h.useRef(!1), x = h.useRef(null), b = yt(Do(t), x), C = h.useRef(null);
  h.useEffect(() => {
    !l || !x.current || (d.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = xt(x.current), w = rr(S), T = Eg(x.current) ?? x.current;
    return Po(x.current, w) || (T.hasAttribute("tabIndex") || T.setAttribute("tabIndex", "-1"), d.current && T.focus()), () => {
      !o && m.current && (a.current = !0, m.current.focus(), m.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = xt(x.current), w = (E) => {
      if (C.current = E, r || !s() || E.key !== "Tab")
        return;
      const R = x.current, I = rr(S);
      if (R === null)
        return;
      const L = Eg(R);
      if (I === R || I === L) {
        const g = i(R);
        if (g.length === 0)
          return;
        E.preventDefault(), E.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (Po(R, I)) {
        const g = i(R), j = g.indexOf(I);
        if (j === -1 || !g.some((A) => D1(A) > 0))
          return;
        E.preventDefault();
        let O = 0;
        E.shiftKey ? O = j <= 0 ? g.length - 1 : j - 1 : O = j === g.length - 1 ? 0 : j + 1, g[O].focus();
      }
    }, T = () => {
      var L, M;
      const E = x.current;
      if (E === null)
        return;
      const R = rr(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Po(E, R) || r && R !== u.current && R !== f.current)
        return;
      if (R !== y.current)
        y.current = null;
      else if (y.current !== null)
        return;
      if (!d.current)
        return;
      let I = [];
      if ((R === u.current || R === f.current) && (I = i(x.current)), I.length > 0) {
        const g = !!((L = C.current) != null && L.shiftKey && ((M = C.current) == null ? void 0 : M.key) === "Tab"), j = I[0], P = I[I.length - 1];
        typeof j != "string" && typeof P != "string" && (g ? P.focus() : j.focus());
      } else
        E.focus();
    };
    S.addEventListener("focusin", T), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const E = rr(S);
      E && E.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", T), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const v = (S) => {
    m.current === null && (m.current = S.relatedTarget), d.current = !0, y.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, p = (S) => {
    m.current === null && (m.current = S.relatedTarget), d.current = !0;
  };
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: b,
      onFocus: v
    }), /* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: p,
      ref: f,
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
const Rg = () => {
}, Wl = new iP();
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
  } = e, f = h.useRef({}), m = h.useRef(null), y = h.useRef(null), d = h.useRef(null), x = yt(d, u), [b, C] = h.useState(!a), v = pP(s);
  let p = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (p = !1);
  const S = () => xt(m.current), w = () => (f.current.modalRef = d.current, f.current.mount = m.current, f.current), T = () => {
    Wl.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = nt(() => {
    const A = fP(t) || S().body;
    Wl.add(w(), A), d.current && T();
  }), E = () => Wl.isTopModal(w()), R = nt((A) => {
    m.current = A, A && (y.current = A, a && E() ? T() : d.current && Es(d.current, p));
  }), I = h.useCallback(() => {
    Wl.remove(w(), p);
  }, [p]);
  h.useEffect(() => () => {
    I();
  }, [I]), h.useEffect(() => {
    a ? k() : (!v || !r) && I();
  }, [a, I, v, r, k]);
  const L = (A) => (N) => {
    var $;
    ($ = A.onKeyDown) == null || $.call(A, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !E()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, M = (A) => (N) => {
    var $;
    ($ = A.onClick) == null || $.call(A, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, g = (A = {}) => {
    const N = Xa(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const $ = {
      ...N,
      ...A
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
      onKeyDown: L($),
      ref: x
    };
  }, j = (A = {}) => {
    const N = A;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: M(N),
      open: a
    };
  }, P = () => {
    const A = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), i && i(), r && I();
    };
    return {
      onEnter: tg(A, (s == null ? void 0 : s.props.onEnter) ?? Rg),
      onExited: tg(N, (s == null ? void 0 : s.props.onExited) ?? Rg)
    };
  }, O = !a && v && !b ? y.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: j,
    getTransitionProps: P,
    rootRef: x,
    portalRef: R,
    portalContainer: O,
    isTopModal: E,
    exited: b,
    hasTransition: v
  };
}
function hP(e) {
  return ue("MuiModal", e);
}
ae("MuiModal", ["root", "hidden", "backdrop"]);
const gP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return de({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, hP, r);
}, yP = U("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(me(({
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
}))), vP = U(z1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), W1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: i,
    closeAfterTransition: s = !1,
    children: l,
    container: a,
    component: u,
    disableAutoFocus: f = !1,
    disableEnforceFocus: m = !1,
    disablePortal: y = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: x = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: v,
    onTransitionEnter: p,
    onTransitionExited: S,
    open: w,
    slotProps: T = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: E,
    ...R
  } = r, I = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: f,
    disableEnforceFocus: m,
    disablePortal: y,
    disableRestoreFocus: d,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: L,
    getBackdropProps: M,
    getTransitionProps: g,
    portalRef: j,
    portalContainer: P,
    isTopModal: O,
    exited: A,
    hasTransition: N
  } = mP({
    ...I,
    rootRef: n
  }), $ = {
    ...I,
    exited: A
  }, z = gP($), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), N) {
    const {
      onEnter: K,
      onExited: Q
    } = g();
    F.onEnter = K, F.onExited = Q;
  }
  const H = {
    slots: k,
    slotProps: T
  }, [D, Z] = ge("root", {
    ref: n,
    elementType: yP,
    externalForwardedProps: {
      ...H,
      ...R,
      component: u
    },
    getSlotProps: L,
    ownerState: $,
    className: te(i, z == null ? void 0 : z.root, !$.open && $.exited && (z == null ? void 0 : z.hidden))
  }), [V, Y] = ge("backdrop", {
    elementType: vP,
    externalForwardedProps: H,
    shouldForwardComponentProp: !0,
    getSlotProps: (K) => M({
      ...K,
      onClick: (Q) => {
        K != null && K.onClick && K.onClick(Q);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: $
  });
  return !C && !w && (!N || A) ? null : /* @__PURE__ */ c.jsx(A1, {
    ref: j,
    container: P,
    disablePortal: y,
    children: /* @__PURE__ */ c.jsxs(D, {
      ...Z,
      children: [b ? null : /* @__PURE__ */ c.jsx(V, {
        ...Y
      }), /* @__PURE__ */ c.jsx(dP, {
        disableEnforceFocus: m,
        disableAutoFocus: f,
        disableRestoreFocus: d,
        isEnabled: O,
        open: w,
        children: /* @__PURE__ */ h.cloneElement(l, F)
      })]
    })
  });
});
function xP(e) {
  return ue("MuiDialog", e);
}
ae("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const U1 = /* @__PURE__ */ h.createContext({}), SP = U(z1, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), bP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${ne(n)}`],
    paper: ["paper", `paperWidth${ne(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return de(s, xP, t);
}, wP = U(W1, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), CP = U("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ne(n.scroll)}`]];
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
}), kP = U(Wt, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ne(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(me(({
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
}))), qo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialog"
  }), o = ao(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: u,
    className: f,
    fullScreen: m = !1,
    fullWidth: y = !1,
    maxWidth: d = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: v = Wt,
    role: p = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: T = {},
    transitionDuration: k = i,
    ...E
  } = r, R = {
    ...r,
    fullScreen: m,
    fullWidth: y,
    maxWidth: d,
    scroll: S
  }, I = bP(R), L = h.useRef(), M = (K) => {
    L.current = K.target === K.currentTarget;
  }, g = (K) => {
    x && x(K), L.current && (L.current = null, b && b(K, "backdropClick"));
  }, j = Mr(l), P = h.useMemo(() => ({
    titleId: j
  }), [j]), O = {
    slots: w,
    slotProps: T
  }, [A, N] = ge("root", {
    elementType: wP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: R,
    className: te(I.root, f),
    ref: n
  }), [$, z] = ge("backdrop", {
    elementType: SP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: R,
    className: I.backdrop
  }), [F, H] = ge("paper", {
    elementType: kP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    ownerState: R,
    className: I.paper,
    additionalProps: {
      elevation: 24,
      role: p,
      "aria-describedby": s,
      "aria-labelledby": j,
      "aria-modal": a,
      tabIndex: -1,
      [gf]: ""
    }
  }), [D, Z] = ge("container", {
    elementType: CP,
    externalForwardedProps: O,
    ownerState: R,
    className: I.container
  }), [V, Y] = ge("transition", {
    elementType: B1,
    externalForwardedProps: O,
    ownerState: R,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ c.jsx(A, {
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
    ...E,
    children: /* @__PURE__ */ c.jsx(V, {
      ...Y,
      children: /* @__PURE__ */ c.jsx(D, {
        onMouseDown: M,
        ...Z,
        children: /* @__PURE__ */ c.jsx(F, {
          as: v,
          ...H,
          children: /* @__PURE__ */ c.jsx(U1.Provider, {
            value: P,
            children: u
          })
        })
      })
    })
  });
});
function TP(e) {
  return ue("MuiDialogActions", e);
}
ae("MuiDialogActions", ["root", "spacing"]);
const EP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return de({
    root: ["root", !n && "spacing"]
  }, TP, t);
}, RP = U("div", {
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
}), Zo = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = EP(l);
  return /* @__PURE__ */ c.jsx(RP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function PP(e) {
  return ue("MuiDialogContent", e);
}
ae("MuiDialogContent", ["root", "dividers"]);
function IP(e) {
  return ue("MuiDialogTitle", e);
}
const MP = ae("MuiDialogTitle", ["root"]), jP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return de({
    root: ["root", n && "dividers"]
  }, PP, t);
}, $P = U("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(me(({
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
}))), Jo = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = jP(l);
  return /* @__PURE__ */ c.jsx($P, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function OP(e) {
  return ue("MuiDialogContentText", e);
}
ae("MuiDialogContentText", ["root"]);
const AP = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"]
  }, OP, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, LP = U(Ee, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root"
})({}), Xu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: o,
    className: i,
    ...s
  } = r, l = AP(s);
  return /* @__PURE__ */ c.jsx(LP, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: n,
    ownerState: s,
    className: te(l.root, i),
    ...r,
    classes: l
  });
}), NP = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, IP, t);
}, BP = U(Ee, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), ei = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = NP(l), {
    titleId: u = i
  } = h.useContext(U1);
  return /* @__PURE__ */ c.jsx(BP, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), Pg = ae("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function H1(e) {
  return ue("MuiSelect", e);
}
const bo = ae("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), zP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${ne(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, u = de(a, A2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, _P = U(iu, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ru(e, t), !n.disableUnderline && t.underline];
  }
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...Ze(e, "background-color", {
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
          ...Ze(e, "transform", {
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
          ...Ze(e, "border-bottom-color", {
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
    }, ...Object.entries(e.palette).filter(Ct()).map(([s]) => {
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
        [`&.${bo.root}`]: {
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
})), FP = U(su, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: ou
})(me(({
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
}))), Jp = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    notched: u,
    // declare here to prevent spreading to DOM
    slotProps: f,
    slots: m = {},
    type: y = "text",
    ...d
  } = r, x = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: y
  }, b = zP(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, v = f ? Bt(C, f) : C, p = m.root ?? _P, S = m.input ?? FP;
  return /* @__PURE__ */ c.jsx(Up, {
    slots: {
      root: p,
      input: S
    },
    slotProps: v,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: y,
    ...d,
    classes: b
  });
});
Jp.muiName = "Input";
function DP(e) {
  return ue("MuiFormControl", e);
}
ae("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const WP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ne(n)}`, r && "fullWidth"]
  };
  return de(o, DP, t);
}, UP = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ne(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), fa = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: a = !1,
    error: u = !1,
    focused: f,
    fullWidth: m = !1,
    hiddenLabel: y = !1,
    margin: d = "none",
    required: x = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...v
  } = r, p = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: m,
    hiddenLabel: y,
    margin: d,
    required: x,
    size: b,
    variant: C
  }, S = WP(p), [w, T] = h.useState(() => {
    let O = !1;
    return o && h.Children.forEach(o, (A) => {
      if (!Ku(A, ["Input", "Select"]))
        return;
      const N = Ku(A, ["Select"]) ? A.props.input : A;
      N && R2(N.props) && (O = !0);
    }), O;
  }), [k, E] = h.useState(() => {
    let O = !1;
    return o && h.Children.forEach(o, (A) => {
      Ku(A, ["Input", "Select"]) && (Va(A.props, !0) || Va(A.props.inputProps, !0)) && (O = !0);
    }), O;
  }), [R, I] = h.useState(!1);
  a && R && I(!1);
  const L = f !== void 0 && !a ? f : R;
  let M;
  h.useRef(!1);
  const g = h.useCallback(() => {
    E(!0);
  }, []), j = h.useCallback(() => {
    E(!1);
  }, []), P = h.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: T,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: L,
    fullWidth: m,
    hiddenLabel: y,
    size: b,
    onBlur: () => {
      I(!1);
    },
    onFocus: () => {
      I(!0);
    },
    onEmpty: j,
    onFilled: g,
    registerEffect: M,
    required: x,
    variant: C
  }), [w, s, a, u, k, L, m, y, M, j, g, x, b, C]);
  return /* @__PURE__ */ c.jsx(fl.Provider, {
    value: P,
    children: /* @__PURE__ */ c.jsx(UP, {
      as: l,
      ownerState: p,
      className: te(S.root, i),
      ref: n,
      ...v,
      children: o
    })
  });
}), HP = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${ne(r)}`, o && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return de(s, L2, t);
}, VP = U("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ps.label}`]: t.label
    }, t.root, t[`labelPlacement${ne(n.labelPlacement)}`]];
  }
})(me(({
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
  [`&.${ps.disabled}`]: {
    cursor: "default"
  },
  [`& .${ps.label}`]: {
    [`&.${ps.disabled}`]: {
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
}))), KP = U("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(me(({
  theme: e
}) => ({
  [`&.${ps.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), YP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: o,
    className: i,
    control: s,
    disabled: l,
    disableTypography: a,
    inputRef: u,
    label: f,
    labelPlacement: m = "end",
    name: y,
    onChange: d,
    required: x,
    slots: b = {},
    slotProps: C = {},
    value: v,
    ...p
  } = r, [S, w] = Fo({
    props: r,
    states: ["error"]
  }), T = l ?? s.props.disabled ?? (w == null ? void 0 : w.disabled), k = x ?? s.props.required, E = {
    disabled: T,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((P) => {
    typeof s.props[P] > "u" && typeof r[P] < "u" && (E[P] = r[P]);
  });
  const R = {
    ...r,
    disabled: T,
    labelPlacement: m,
    required: k,
    error: S.error
  }, I = HP(R), L = {
    slots: b,
    slotProps: C
  }, [M, g] = ge("typography", {
    elementType: Ee,
    externalForwardedProps: L,
    ownerState: R
  });
  let j = f;
  return j != null && j.type !== Ee && !a && (j = /* @__PURE__ */ c.jsx(M, {
    component: "span",
    ...g,
    className: te(I.label, g == null ? void 0 : g.className),
    children: j
  })), /* @__PURE__ */ c.jsxs(VP, {
    className: te(I.root, i),
    ownerState: R,
    ref: n,
    ...p,
    children: [/* @__PURE__ */ h.cloneElement(s, E), k ? /* @__PURE__ */ c.jsxs("div", {
      children: [j, /* @__PURE__ */ c.jsxs(KP, {
        ownerState: R,
        "aria-hidden": !0,
        className: I.asterisk,
        children: [" ", "*"]
      })]
    }) : j]
  });
});
var Ig;
const GP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ne(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return de(u, N2, t);
}, XP = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ne(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(me(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${eg.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${eg.error}`]: {
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
}))), QP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p",
    disabled: l,
    error: a,
    filled: u,
    focused: f,
    margin: m,
    required: y,
    variant: d,
    ...x
  } = r, [b] = Fo({
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
  const v = GP(C);
  return /* @__PURE__ */ c.jsx(XP, {
    as: s,
    className: te(v.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ig || (Ig = /* @__PURE__ */ c.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), qP = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${ne(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return de(a, B2, t);
}, ZP = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(me(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Cs.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Cs.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Cs.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), JP = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(me(({
  theme: e
}) => ({
  [`&.${Cs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), eI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: l = "label",
    disabled: a,
    error: u,
    filled: f,
    focused: m,
    required: y,
    ...d
  } = r, [x] = Fo({
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
  }, C = qP(b);
  return /* @__PURE__ */ c.jsxs(ZP, {
    as: l,
    ownerState: b,
    className: te(C.root, i),
    ref: n,
    ...d,
    children: [o, x.required && /* @__PURE__ */ c.jsxs(JP, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Rs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const tI = {
  entering: {
    opacity: 1,
    transform: Rs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Rs(0.75)
  },
  exited: {
    opacity: 0,
    transform: Rs(0.75)
  }
}, nI = {
  opacity: 0,
  transform: Rs(0.75),
  visibility: "hidden"
}, tl = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: f,
    onEntering: m,
    onExit: y,
    onExited: d,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...v
  } = t, p = h.useRef(null), S = ao(), w = lu(S.motion.reducedMotion, s), T = h.useRef(null), k = yt(T, Do(i), n), E = Tn(T, m), R = Tn(T, (P, O) => {
    w.shouldReduceMotion || Wp(P);
    const {
      duration: A,
      delay: N,
      easing: $
    } = Ka({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = S.transitions.getAutoHeightDuration(P.clientHeight), p.current = z) : (z = A, p.current = null);
    const F = w.getTransitionTiming({
      duration: z,
      delay: N
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), S.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: $
    })].join(","), u && u(P, O);
  }), I = Tn(T, f), L = Tn(T, x), M = Tn(T, (P) => {
    const {
      duration: O,
      delay: A,
      easing: N
    } = Ka({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let $;
    C === "auto" && !w.shouldReduceMotion ? ($ = S.transitions.getAutoHeightDuration(P.clientHeight), p.current = $) : ($ = O, p.current = null);
    const z = w.getTransitionTiming({
      duration: $,
      delay: A
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), S.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), P.style.opacity = 0, P.style.transform = Rs(0.75), y && y(P);
  }), g = Tn(T, (P) => {
    P.style.transition = "", d && d(P);
  }), j = r ? (P) => {
    r(T.current, P);
  } : void 0;
  return /* @__PURE__ */ c.jsx(v1, {
    appear: o,
    in: a,
    nodeRef: T,
    onEnter: R,
    onEntered: I,
    onEntering: E,
    onExit: M,
    onExited: g,
    onExiting: L,
    addEndListener: j,
    getAutoTimeout: C === "auto" ? () => p.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...v,
    children: (P, {
      ownerState: O,
      ...A
    }) => {
      const N = h1(P, a, tI, nI, b, i.props.style);
      return /* @__PURE__ */ h.cloneElement(i, {
        style: N,
        ref: k,
        ...A
      });
    }
  });
});
tl && (tl.muiSupportAuto = !0);
function rI(e) {
  return ue("MuiInputLabel", e);
}
const oI = ae("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), iI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = de({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, z2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, sI = U(iu, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ru(e, t), !n.disableUnderline && t.underline];
  }
})(me(({
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
        [`label + &, .${oI.root} + &`]: {
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
          ...Ze(e, "transform", {
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
          ...Ze(e, "border-bottom-color", {
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
    }, ...Object.entries(e.palette).filter(Ct()).map(([r]) => ({
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
})), lI = U(su, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: ou
})({}), em = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    slotProps: u,
    slots: f = {},
    type: m = "text",
    ...y
  } = r, d = iI(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? Bt(u, b) : b, v = f.root ?? sI, p = f.input ?? lI;
  return /* @__PURE__ */ c.jsx(Up, {
    slots: {
      root: v,
      input: p
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: m,
    ...y,
    classes: d
  });
});
em.muiName = "Input";
function aI(e) {
  return ue("MuiInputAdornment", e);
}
const mi = ae("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Mg;
const cI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${ne(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, uI = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${ne(o)}`, s, r && "hiddenLabel", i && `size${ne(i)}`]
  };
  return de(l, aI, t);
}, dI = U("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: cI
})(me(({
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
      [`&.${mi.positionStart}&:not(.${mi.hiddenLabel})`]: {
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
}))), fI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: u,
    variant: f,
    ...m
  } = r, y = f1() || {};
  let d = f;
  f && y.variant, y && !d && (d = y.variant);
  const x = {
    ...r,
    hiddenLabel: y.hiddenLabel,
    size: y.size,
    disablePointerEvents: l,
    position: u,
    variant: d
  }, b = uI(x);
  return /* @__PURE__ */ c.jsx(fl.Provider, {
    value: null,
    children: /* @__PURE__ */ c.jsx(dI, {
      as: s,
      ownerState: x,
      className: te(b.root, i),
      ref: n,
      ...m,
      children: typeof o == "string" && !a ? /* @__PURE__ */ c.jsx(Ee, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ c.jsxs(h.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Mg || (Mg = /* @__PURE__ */ c.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), pI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${ne(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = de(a, rI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, mI = U(eI, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Cs.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(me(({
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
      ...Ze(e, ["color", "transform", "max-width"], {
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
}))), pa = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...u
  } = r, [f, m] = Fo({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let y = s;
  typeof y > "u" && m && (y = m.filled || m.focused || m.adornedStart);
  const d = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: y,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }, x = pI(d);
  return /* @__PURE__ */ c.jsx(mI, {
    "data-shrink": y,
    ref: n,
    className: te(x.root, a),
    ...u,
    ownerState: d,
    classes: x
  });
});
function hI(e) {
  return ue("MuiLinearProgress", e);
}
ae("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "bar", "bar1", "bar2"]);
const yf = 4, gI = {}, vf = lo`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`, yI = typeof vf != "string" ? eo`
        animation: ${vf} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, xf = lo`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`, vI = typeof xf != "string" ? eo`
        animation: ${xf} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, Sf = lo`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`, xI = typeof Sf != "string" ? eo`
        animation: ${Sf} 3s infinite linear;
      ` : null, SI = (e) => {
  const {
    classes: t,
    variant: n,
    color: r
  } = e, o = {
    root: ["root", `color${ne(r)}`, n],
    dashed: ["dashed"],
    bar1: ["bar", "bar1"],
    bar2: ["bar", "bar2", n === "buffer" && `color${ne(r)}`]
  };
  return de(o, hI, t);
}, tm = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.5), bI = U("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${ne(n.color)}`], t[n.variant]];
  }
})(me(({
  theme: e
}) => ({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  // Fix Safari's bug during composition of different paint.
  zIndex: 0,
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [...Object.entries(e.palette).filter(Ct()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: tm(e, t)
    }
  })), {
    props: ({
      ownerState: t
    }) => t.color === "inherit" && t.variant !== "buffer",
    style: {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "currentColor",
        opacity: 0.3
      }
    }
  }, {
    props: {
      variant: "buffer"
    },
    style: {
      backgroundColor: "transparent"
    }
  }, {
    props: {
      variant: "query"
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}))), wI = U("span", {
  name: "MuiLinearProgress",
  slot: "Dashed"
})(me(({
  theme: e
}) => ({
  position: "absolute",
  marginTop: 0,
  height: "100%",
  width: "100%",
  backgroundSize: "10px 10px",
  backgroundPosition: "0 -23px",
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      opacity: 0.3,
      backgroundImage: "radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"
    }
  }, ...Object.entries(e.palette).filter(Ct()).map(([t]) => {
    const n = tm(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
      }
    };
  })]
})), xI || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${Sf} 3s infinite linear`
}, me(({
  theme: e
}) => Wi(e, {
  animation: "none"
}) || gI)), CI = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => [t.bar, t.bar1]
})(me(({
  theme: e
}) => {
  const t = Wi(e, {
    animation: "none",
    left: "30%",
    right: "auto",
    width: "40%"
  });
  return {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    ...Ze(e, "transform", {
      duration: "0.2s",
      easing: "linear"
    }),
    transformOrigin: "left",
    variants: [{
      props: {
        color: "inherit"
      },
      style: {
        backgroundColor: "currentColor"
      }
    }, ...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main
      }
    })), {
      props: {
        variant: "determinate"
      },
      style: {
        ...Ze(e, "transform", {
          duration: `.${yf}s`,
          easing: "linear"
        })
      }
    }, {
      props: {
        variant: "buffer"
      },
      style: {
        zIndex: 1,
        ...Ze(e, "transform", {
          duration: `.${yf}s`,
          easing: "linear"
        })
      }
    }, {
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: {
        width: "auto"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: yI || {
        animation: `${vf} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), kI = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => [t.bar, t.bar2]
})(me(({
  theme: e
}) => {
  const t = Wi(e, {
    animation: "none",
    display: "none"
  });
  return {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    ...Ze(e, "transform", {
      duration: "0.2s",
      easing: "linear"
    }),
    transformOrigin: "left",
    variants: [...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--LinearProgressBar2-barColor": (e.vars || e).palette[n].main
      }
    })), {
      props: ({
        ownerState: n
      }) => n.variant !== "buffer" && n.color !== "inherit",
      style: {
        backgroundColor: "var(--LinearProgressBar2-barColor, currentColor)"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.variant !== "buffer" && n.color === "inherit",
      style: {
        backgroundColor: "currentColor"
      }
    }, {
      props: {
        color: "inherit"
      },
      style: {
        opacity: 0.3
      }
    }, ...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n,
        variant: "buffer"
      },
      style: {
        backgroundColor: tm(e, n),
        ...Ze(e, "transform", {
          duration: `.${yf}s`,
          easing: "linear"
        })
      }
    })), {
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: {
        width: "auto"
      }
    }, {
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: vI || {
        animation: `${xf} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), TI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: o,
    color: i = "primary",
    max: s,
    min: l,
    value: a,
    valueBuffer: u,
    variant: f = "indeterminate",
    ...m
  } = r, y = {
    ...r,
    color: i,
    variant: f
  }, d = l ?? 0, x = s ?? 100, b = SI(y), C = dl(), v = {}, p = {
    bar1: {},
    bar2: {}
  };
  if ((f === "determinate" || f === "buffer") && a !== void 0) {
    const S = x - d;
    let w = (a - d) / S * 100 - 100;
    C && (w = -w), p.bar1.transform = S > 0 ? `translateX(${w}%)` : "translateX(-100%)", v["aria-valuenow"] = a, v["aria-valuemin"] = d, v["aria-valuemax"] = x;
  }
  if (f === "buffer" && u !== void 0) {
    const S = x - d;
    let w = (u - d) / S * 100 - 100;
    C && (w = -w), p.bar2.transform = S > 0 ? `translateX(${w}%)` : "translateX(-100%)";
  }
  return /* @__PURE__ */ c.jsxs(bI, {
    className: te(b.root, o),
    ownerState: y,
    role: "progressbar",
    ...v,
    ref: n,
    ...m,
    children: [f === "buffer" ? /* @__PURE__ */ c.jsx(wI, {
      className: b.dashed,
      ownerState: y
    }) : null, /* @__PURE__ */ c.jsx(CI, {
      className: b.bar1,
      ownerState: y,
      style: p.bar1
    }), f === "determinate" ? null : /* @__PURE__ */ c.jsx(kI, {
      className: b.bar2,
      ownerState: y,
      style: p.bar2
    })]
  });
}), bf = /* @__PURE__ */ h.createContext({});
function EI(e) {
  return ue("MuiList", e);
}
ae("MuiList", ["root", "padding", "dense", "subheader"]);
const RI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return de({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, EI, t);
}, PI = U("ul", {
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
}), II = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: u,
    ...f
  } = r, m = h.useMemo(() => ({
    dense: l
  }), [l]), y = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, d = RI(y);
  return /* @__PURE__ */ c.jsx(bf.Provider, {
    value: m,
    children: /* @__PURE__ */ c.jsxs(PI, {
      as: s,
      className: te(d.root, i),
      ref: n,
      ownerState: y,
      ...f,
      children: [u, o]
    })
  });
}), jg = ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]), $g = ae("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), nm = /* @__PURE__ */ h.createContext(void 0);
function V1() {
  const e = h.useContext(nm);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const MI = Object.is;
function jI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !MI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const $I = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function K1(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Ps,
    wrap: s = !0
  } = e, [l, a] = h.useState(t), [u, f] = h.useState(t);
  let m = l;
  t !== u && (f(t), t !== void 0 && t !== l && (m = t, a(t)));
  const y = h.useRef(null), d = h.useRef(/* @__PURE__ */ new Map()), [x, b] = h.useState(0), C = h.useMemo(() => wf(d.current), [x]), v = Og(m, C, i, n), p = h.useRef(v);
  p.current = v;
  const S = h.useCallback(() => {
    const g = wf(d.current), j = Og(p.current, g, i, n);
    return Q1(g, j);
  }, [n, i]), w = h.useCallback(() => d.current, []), T = nt((g) => {
    const j = d.current.get(g.id);
    jI(j ?? null, g) || (d.current.set(g.id, g), b((P) => P + 1));
  }), k = nt((g) => {
    d.current.delete(g) && b((j) => j + 1);
  }), E = nt((g) => {
    a(g);
  }), R = h.useCallback((g) => p.current === g, []), I = h.useCallback((g, j, P, O) => {
    var $;
    const A = Ul(d.current), N = G1(A, g, j, P, O ?? i);
    return N ? (($ = N.element) == null || $.focus(), a(N.id), N) : null;
  }, [i]), L = h.useCallback((g, j, P) => ({
    onFocus: (N) => {
      j == null || j(N);
      const $ = Ul(d.current), z = Z1($, N.target);
      z !== -1 && a($[z].id);
    },
    onKeyDown: (N) => {
      if (P == null || P(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !$I.includes(N.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", z = "ArrowLeft");
      const F = Ul(d.current), H = rr(xt(y.current)), D = H === y.current;
      let Z = Ag(F, H, p.current), V = "next";
      switch (N.key) {
        case $:
          V = "previous", N.preventDefault(), D && (Z = F.length);
          break;
        case z:
          N.preventDefault(), D && (Z = -1);
          break;
        case "Home":
          N.preventDefault(), Z = -1;
          break;
        case "End":
          N.preventDefault(), V = "previous", Z = F.length;
          break;
        default:
          return;
      }
      I(Z, V, s);
    },
    ref: NI(g, (N) => {
      y.current = N;
    })
  }), [I, o, r, s]), M = h.useCallback((g) => {
    var N;
    const j = Ul(d.current), P = rr(xt(y.current)), A = P === y.current ? -1 : Ag(j, P, p.current);
    return ((N = I(A, "next", !0, g)) == null ? void 0 : N.id) ?? null;
  }, [I]);
  return h.useMemo(() => ({
    activeItemId: v,
    focusNext: M,
    getActiveItem: S,
    getContainerProps: L,
    getItemMap: w,
    isItemActive: R,
    registerItem: T,
    setActiveItemId: E,
    unregisterItem: k
  }), [v, M, S, L, w, R, T, E, k]);
}
function Y1(e) {
  const t = V1(), {
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
  const a = h.useCallback((f) => {
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
  }, [e.id, r, o]), u = yt(e.ref, a);
  return ht(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ht(() => {
    const f = e.id;
    return () => {
      o(f);
    };
  }, [e.id, o]), {
    ref: u,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Og(e, t, n, r) {
  return e != null ? OI(e, t, n) : AI(t, n, r);
}
function OI(e, t, n) {
  var o;
  const r = q1(t, e);
  return r === -1 ? X1(t, n) : n(t[r]) ? t[r].id : ((o = G1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function AI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = Q1(e, r);
    if (o && t(o))
      return o.id;
  }
  return X1(e, t);
}
function Ag(e, t, n) {
  if (t) {
    const r = Z1(e, t);
    if (r !== -1)
      return r;
  }
  return q1(e, n);
}
function G1(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Lg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = Lg(l, i, n, r);
    else
      return u;
  }
  return null;
}
function X1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function Q1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function q1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Z1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function wf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Cf).sort((o, i) => LI(o.element, i.element)), r = t.filter((o) => !Cf(o));
  return [...n, ...r];
}
function Ul(e) {
  return wf(e).filter(Cf);
}
function Lg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Ps(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Cf(e) {
  return e.element != null && e.element.isConnected;
}
function LI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function NI(...e) {
  return (t) => {
    e.forEach((n) => {
      uf(n ?? null, t);
    });
  };
}
function J1(e, t) {
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
function BI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function zI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function ma(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const ex = /* @__PURE__ */ h.createContext(null);
function tx() {
  return h.useContext(ex);
}
const _I = ex.Provider, nx = /* @__PURE__ */ h.createContext(void 0);
function FI() {
  const e = h.useContext(nx);
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
function rx(e, t) {
  if (t === void 0)
    return !0;
  let n = DI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function WI(e, t) {
  return rx(e, t) ? Ps(e) : !1;
}
function UI(e, t) {
  J1(e, t);
}
const HI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    onKeyDown: f,
    variant: m = "selectedMenu",
    ...y
  } = t, d = h.useRef(null), x = h.useRef(!1), [b, C] = h.useState(!1), v = tx(), p = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = h.useCallback((O) => {
    var A, N, $;
    return m === "selectedMenu" ? ((A = O.find((z) => z.selected && Ps(z))) == null ? void 0 : A.id) ?? ((N = O.find((z) => Ps(z))) == null ? void 0 : N.id) ?? null : (($ = O.find((z) => Ps(z))) == null ? void 0 : $.id) ?? null;
  }, [m]), w = K1({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: T,
    focusNext: k,
    getActiveItem: E,
    getContainerProps: R,
    getItemMap: I
  } = w, L = nt((O = !1) => {
    if (!d.current || !O && x.current)
      return null;
    if (i) {
      const A = E();
      if (A != null && A.element) {
        const N = Array.from(I().values()).some((z) => z.selected), $ = m === "menu" && N && !A.selected && v == null;
        return C($), UI(A.element, v), x.current = !0, A.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), x.current = !0, d.current) : (C(!1), null);
  });
  ht(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    L();
  }, [T, i, o, L]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (O, {
      direction: A
    }) => {
      const N = !d.current.style.width;
      if (O.clientHeight < d.current.clientHeight && N) {
        const $ = `${F1(Vn(O))}px`;
        d.current.style[A === "rtl" ? "paddingLeft" : "paddingRight"] = $, d.current.style.width = `calc(100% + ${$})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const O = rr(xt(d.current));
      return O && Po(d.current, O) ? O : L(!0);
    }
  }), [L]);
  const M = R(void 0, y.onFocus), g = yt(d, M.ref, n), j = h.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: m
  }), [a, b, m]), P = nt((O) => {
    if (b && C(!1), (O.ctrlKey || O.metaKey || O.altKey) && f) {
      f(O);
      return;
    }
    if (M.onKeyDown(O), O.key.length === 1) {
      const N = p.current, $ = O.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && $ !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push($);
      const F = rr(xt(d.current)), H = F && !N.repeating && rx(F, N);
      N.previousKeyMatched && (H || k((D) => WI(D, N)) != null) ? O.preventDefault() : N.previousKeyMatched = !1;
    }
    f && f(O);
  });
  return /* @__PURE__ */ c.jsx(II, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...y,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ c.jsx(nx.Provider, {
      value: j,
      children: /* @__PURE__ */ c.jsx(nm.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function VI(e) {
  return ue("MuiPopover", e);
}
ae("MuiPopover", ["root", "paper"]);
function Ng(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Bg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function zg(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Hl(e) {
  return typeof e == "function" ? e() : e;
}
const KI = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    paper: ["paper"]
  }, VI, t);
}, YI = U(W1, {
  name: "MuiPopover",
  slot: "Root"
})({}), ox = U(Wt, {
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
}), GI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    children: u,
    className: f,
    container: m,
    disableAutoFocus: y = !1,
    elevation: d = 8,
    marginThreshold: x = 16,
    open: b,
    slots: C = {},
    slotProps: v = {},
    transformOrigin: p = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: w = !1,
    ...T
  } = r, k = h.useRef(), E = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: d,
    marginThreshold: x,
    transformOrigin: p,
    transitionDuration: S
  }, R = KI(E), I = h.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const W = Hl(i), ie = (W && W.nodeType === 1 ? W : xt(k.current).body).getBoundingClientRect();
    return {
      top: ie.top + Ng(ie, s.vertical),
      left: ie.left + Bg(ie, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), L = h.useCallback((W) => ({
    vertical: Ng(W, p.vertical),
    horizontal: Bg(W, p.horizontal)
  }), [p.horizontal, p.vertical]), M = h.useCallback((W) => {
    const oe = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, ie = L(oe);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: zg(ie)
      };
    const be = I();
    let Ce = be.top - ie.vertical, ve = be.left - ie.horizontal;
    const le = Ce + oe.height, Be = ve + oe.width, Oe = Vn(Hl(i)), Pe = Oe.innerHeight - x, Ie = Oe.innerWidth - x;
    if (x != null && Ce < x) {
      const pe = Ce - x;
      Ce -= pe, ie.vertical += pe;
    } else if (x != null && le > Pe) {
      const pe = le - Pe;
      Ce -= pe, ie.vertical += pe;
    }
    if (x != null && ve < x) {
      const pe = ve - x;
      ve -= pe, ie.horizontal += pe;
    } else if (Be > Ie) {
      const pe = Be - Ie;
      ve -= pe, ie.horizontal += pe;
    }
    return {
      top: `${Math.round(Ce)}px`,
      left: `${Math.round(ve)}px`,
      transformOrigin: zg(ie)
    };
  }, [i, a, I, L, x]), [g, j] = h.useState(b), P = h.useCallback(() => {
    const W = k.current;
    if (!W)
      return;
    const oe = M(W);
    oe.top != null && W.style.setProperty("top", oe.top), oe.left != null && (W.style.left = oe.left), W.style.transformOrigin = oe.transformOrigin, j(!0);
  }, [M]);
  h.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const O = () => {
    P();
  }, A = () => {
    j(!1);
  };
  h.useEffect(() => {
    b && P();
  }), h.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      P();
    }
  } : null, [b, P]), h.useEffect(() => {
    if (!b)
      return;
    const W = nu(() => {
      P();
    }), oe = Vn(Hl(i));
    return oe.addEventListener("resize", W), () => {
      W.clear(), oe.removeEventListener("resize", W);
    };
  }, [i, b, P]);
  let N = S;
  const $ = {
    slots: C,
    slotProps: v
  }, [z, F] = ge("transition", {
    elementType: tl,
    externalForwardedProps: $,
    ownerState: E,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (oe, ie) => {
        var be;
        (be = W.onEntering) == null || be.call(W, oe, ie), O();
      },
      onExited: (oe) => {
        var ie;
        (ie = W.onExited) == null || ie.call(W, oe), A();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !z.muiSupportAuto && (N = void 0);
  const H = m || (i ? xt(Hl(i)).body : void 0), [D, {
    slots: Z,
    slotProps: V,
    ...Y
  }] = ge("root", {
    ref: n,
    elementType: YI,
    externalForwardedProps: {
      ...$,
      ...T
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: y1(typeof v.backdrop == "function" ? v.backdrop(E) : v.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: b
    },
    ownerState: E,
    className: te(R.root, f)
  }), [K, Q] = ge("paper", {
    ref: k,
    className: R.paper,
    elementType: ox,
    externalForwardedProps: $,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: E
  });
  return /* @__PURE__ */ c.jsx(D, {
    ...Y,
    ...!Ha(D) && {
      slots: Z,
      slotProps: V,
      disableAutoFocus: y,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ c.jsx(z, {
      ...F,
      timeout: N,
      children: /* @__PURE__ */ c.jsx(K, {
        ...Q,
        children: u
      })
    })
  });
});
function XI(e) {
  return ue("MuiMenu", e);
}
ae("MuiMenu", ["root", "paper", "list"]);
const QI = {
  vertical: "top",
  horizontal: "right"
}, qI = {
  vertical: "top",
  horizontal: "left"
}, ZI = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, XI, t);
}, JI = U(GI, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), e5 = U(ox, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), t5 = U(HI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), n5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: l = !1,
    onClose: a,
    open: u,
    PopoverClasses: f,
    transitionDuration: m = "auto",
    variant: y = "selectedMenu",
    slots: d = {},
    slotProps: x = {},
    ...b
  } = r, C = dl(), v = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: m,
    variant: y
  }, p = ZI(v), S = o && u, w = S && !l, T = h.useRef(null), k = (O, A) => {
    var N, $;
    T.current && (T.current.adjustStyleForScrollbar(O, {
      direction: C ? "rtl" : "ltr"
    }), S && (($ = (N = T.current).focusInitialTarget) == null || $.call(N)));
  }, E = (O) => {
    O.key === "Tab" && (O.preventDefault(), a && a(O, "tabKeyDown"));
  }, R = {
    slots: d,
    slotProps: x
  }, I = Bi({
    elementType: d.root,
    externalSlotProps: x.root,
    ownerState: v,
    className: [p.root, s]
  }), [L, M] = ge("paper", {
    className: p.paper,
    elementType: e5,
    externalForwardedProps: R,
    shouldForwardComponentProp: !0,
    ownerState: v
  }), [g, j] = ge("list", {
    className: p.list,
    elementType: t5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: R,
    getSlotProps: (O) => ({
      ...O,
      onKeyDown: (A) => {
        var N;
        E(A), (N = O.onKeyDown) == null || N.call(O, A);
      }
    }),
    ownerState: v
  }), P = typeof x.transition == "function" ? x.transition(v) : x.transition;
  return /* @__PURE__ */ c.jsx(
    JI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? QI : qI,
      slots: {
        root: d.root,
        paper: L,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: I,
        paper: M,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(v) : x.backdrop,
        transition: {
          ...P,
          onEntering: (...O) => {
            var A;
            k(...O), (A = P == null ? void 0 : P.onEntering) == null || A.call(P, ...O);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: m,
      ownerState: v,
      ...b,
      classes: f,
      children: /* @__PURE__ */ c.jsx(g, {
        actions: T,
        autoFocus: S,
        autoFocusItem: w,
        variant: y,
        ...j,
        children: i
      })
    }
  );
}), r5 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, o5 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = de({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, _2, s);
  return {
    ...s,
    ...a
  };
}, i5 = U(ro, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: r5
})(me(({
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
    [`&.${ns.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${ns.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${ns.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ns.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${Pg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Pg.inset}`]: {
    marginLeft: 52
  },
  [`& .${$g.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${$g.inset}`]: {
    paddingLeft: 36
  },
  [`& .${jg.root}`]: {
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
      [`& .${jg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), yo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: u,
    role: f = "menuitem",
    tabIndex: m,
    className: y,
    ...d
  } = r, b = f === "menuitemcheckbox" || f === "menuitemradio" ? !!r.selected : void 0, C = tx(), v = h.useContext(bf), p = h.useMemo(() => ({
    dense: s || v.dense || !1,
    disableGutters: a
  }), [v.dense, s, a]), S = FI(), w = Mr(), T = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, E = h.useRef(null);
  ht(() => {
    o && E.current && J1(E.current, C);
  }, [o]);
  const R = {
    ...r,
    dense: p.dense,
    divider: l,
    disableGutters: a
  }, I = o5(r), {
    root: L,
    ...M
  } = I, g = Y1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), j = yt(E, g.ref);
  let P;
  return m !== void 0 ? P = m : S.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ c.jsx(bf.Provider, {
    value: p,
    children: /* @__PURE__ */ c.jsx(i5, {
      ref: j,
      role: f,
      "aria-checked": b,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: T,
      focusVisibleClassName: te(I.focusVisible, u),
      className: te(I.root, y),
      ...d,
      ownerState: R,
      classes: M
    })
  });
}), s5 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${ne(n)}`, i && "iconOpen", r && "disabled"]
  };
  return de(l, F2, t);
}, ix = U("select", {
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
  [`&.${Hp.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${mi.root}`]: {
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
      [`.${un.root}:has(> & ~ .${mi.root})`]: {
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
      [`.${un.root}:has(> & ~ .${mi.root})`]: {
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
      [`.${un.root}:has(> & ~ .${mi.root})`]: {
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
})), l5 = U(ix, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Jt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Hp.multiple}`]: t.multiple
    }];
  }
})({}), sx = U("svg", {
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
  [`&.${Hp.disabled}`]: {
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
})), a5 = U(sx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ne(n.variant)}`], n.open && t.iconOpen];
  }
})({}), c5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: a = "standard",
    ...u
  } = t, f = {
    ...t,
    disabled: o,
    variant: a,
    error: i
  }, m = s5(f);
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx(l5, {
      ownerState: f,
      className: te(m.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ c.jsx(a5, {
      as: s,
      ownerState: f,
      className: m.icon
    })]
  });
});
var _g;
const u5 = U("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Jt
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
}), d5 = U("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Jt
})(me(({
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
      ...Ze(e, "width", {
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
      ...Ze(e, "max-width", {
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
      ...Ze(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function f5(e) {
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
  return /* @__PURE__ */ c.jsx(u5, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ c.jsx(d5, {
      ownerState: a,
      children: l ? /* @__PURE__ */ c.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _g || (_g = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const p5 = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, D2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, m5 = U(iu, {
  shouldForwardProp: (e) => Jt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: ru
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${qn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${qn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${qn.focused} .${qn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${qn.focused} .${qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${qn.error} .${qn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${qn.disabled} .${qn.notchedOutline}`]: {
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
        [`&.${bo.root}`]: {
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
})), h5 = U(f5, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), g5 = U(su, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: ou
})(me(({
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
}))), rm = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: i = "input",
    label: s,
    multiline: l = !1,
    notched: a,
    slots: u = {},
    slotProps: f = {},
    type: m = "text",
    ...y
  } = r, d = p5(r), [x, b] = Fo({
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
  }, v = u.root ?? m5, p = u.input ?? g5, [S, w] = ge("notchedOutline", {
    elementType: h5,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: u,
      slotProps: f
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ c.jsxs(h.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ c.jsx(Up, {
    slots: {
      root: v,
      input: p
    },
    slotProps: f,
    renderSuffix: (T) => /* @__PURE__ */ c.jsx(S, {
      ...w,
      notched: typeof a < "u" ? a : !!(T.startAdornment || T.filled || T.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: m,
    ...y,
    classes: {
      ...d,
      notchedOutline: null
    }
  });
});
rm.muiName = "Input";
function y5(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function lx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return h.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ h.isValidElement(n) && (t += lx(n.props.children));
  }), t;
}
function v5(e, t, n = 0) {
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
function x5(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function S5(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ h.isValidElement(i) || !y5(i) || i.props.disabled)
      continue;
    const s = lx(i.props.children).trim().toLowerCase();
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
var Fg;
const Vl = 2, b5 = 400, Dg = 200, w5 = 750, vo = " ", C5 = "ArrowUp", k5 = "ArrowDown", T5 = "Enter";
function Wg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Vl && e.clientX <= r.right + Vl && e.clientY >= r.top - Vl && e.clientY <= r.bottom + Vl;
}
const E5 = U(ix, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${bo.select}`]: t.select
      },
      {
        [`&.${bo.select}`]: t[n.variant]
      },
      {
        [`&.${bo.error}`]: t.error
      },
      {
        [`&.${bo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${bo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), R5 = U(sx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), P5 = U("input", {
  shouldForwardProp: (e) => p1(e) && e !== "classes",
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
}), I5 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e;
  return de({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, H1, t);
}, M5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var Ui, Uo, im, sm;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: f,
    disabled: m,
    displayEmpty: y,
    error: d = !1,
    IconComponent: x,
    inputRef: b,
    labelId: C,
    MenuProps: v = {},
    multiple: p,
    name: S,
    onBlur: w,
    onChange: T,
    onClose: k,
    onFocus: E,
    // eslint-disable-next-line react/prop-types
    onKeyDown: R,
    // eslint-disable-next-line react/prop-types
    onMouseDown: I,
    onOpen: L,
    open: M,
    readOnly: g,
    renderValue: j,
    required: P,
    SelectDisplayProps: O = {},
    tabIndex: A,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: $,
    variant: z = "standard",
    ...F
  } = t, [H, D] = Ga({
    controlled: $,
    default: f,
    name: "Select"
  }), [Z, V] = Ga({
    controlled: M,
    default: u,
    name: "Select"
  }), Y = h.useRef(null), K = h.useRef(null), Q = h.useRef(null), W = h.useRef(!1), oe = h.useRef(!1), ie = h.useRef(null), be = h.useRef(!1), Ce = h.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ve = h.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), le = or(), Be = or(), Oe = or(), [Pe, Ie] = h.useState(null), {
    current: pe
  } = h.useRef(M != null), [ke, Je] = h.useState(), [_e, He] = h.useState(null), ze = yt(n, b), ot = h.useCallback((q) => {
    K.current = q, q && Ie(q);
  }, []), Ae = Pe == null ? void 0 : Pe.parentNode;
  h.useImperativeHandle(ze, () => ({
    focus: () => {
      K.current.focus();
    },
    node: Y.current,
    value: H
  }), [H]);
  const xe = Pe !== null && Z, Le = h.useCallback(() => {
    Oe.clear(), ve.current.buffer = "", ve.current.previousSearchIndex = null, ve.current.matchedIndex = null;
  }, [Oe]);
  ht(() => {
    W.current = xe, xe && Le();
  }, [xe, Le]);
  const St = h.useCallback(() => {
    le.clear(), Be.clear();
  }, [le, Be]), ee = h.useCallback(() => {
    St(), be.current = !1, Ce.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [St]), Se = h.useCallback(() => {
    ie.current && (ie.current(), ie.current = null);
  }, []);
  h.useEffect(() => {
    xe || (ee(), Se());
  }, [xe, ee, Se]), h.useEffect(() => () => {
    ee(), Se(), Le();
  }, [ee, Se, Le]), h.useEffect(() => {
    if (!xe || !Ae || s || typeof ResizeObserver > "u")
      return;
    const q = new ResizeObserver(() => {
      Je(Ae.clientWidth);
    });
    return q.observe(Ae), () => {
      q.disconnect();
    };
  }, [xe, Ae, s]), h.useEffect(() => {
    u && Z && Pe && !pe && (Je(s ? null : Ae.clientWidth), K.current.focus());
  }, [Pe, s]), h.useEffect(() => {
    i && K.current.focus();
  }, [i]), h.useEffect(() => {
    if (!C)
      return;
    const q = xt(K.current).getElementById(C);
    if (q) {
      const se = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return q.addEventListener("click", se), () => {
        q.removeEventListener("click", se);
      };
    }
  }, [C]);
  const $e = nt((q, se) => {
    q || (ee(), Se()), q ? (Le(), He(BI(se)), L && L(se)) : (He(null), k && k(se)), pe || (W.current = q, Je(s ? null : Ae.clientWidth), V(q));
  }), dt = () => {
    ee(), oe.current ? Be.start(Dg, () => {
      Ce.current.allowUnselectedMouseUp = !0, le.start(Dg, () => {
        Ce.current.allowSelectedMouseUp = !0;
      });
    }) : le.start(b5, () => {
      Ce.current.allowSelectedMouseUp = !0, Ce.current.allowUnselectedMouseUp = !0;
    });
  }, Te = (q) => {
    if (I == null || I(q), q.button !== 0 || (q.preventDefault(), !K.current))
      return;
    K.current.focus();
    const se = xt(q.currentTarget);
    dt(), Se();
    const Me = (ft) => {
      ie.current = null, K.current && (Wg(ft, K.current) || Wg(ft, Q.current) || !W.current && pe || $e(!1, ft));
    };
    se.addEventListener("mouseup", Me, {
      capture: !0,
      once: !0
    }), ie.current = () => {
      se.removeEventListener("mouseup", Me, !0);
    }, $e(!0, q);
  }, Kn = (q) => {
    $e(!1, q);
  }, Sn = h.Children.toArray(l), uo = (q) => {
    const se = Sn.find((Me) => Me.props.value === q.target.value);
    se !== void 0 && (D(se.props.value), T && T(q, se));
  }, Or = (q, se, Me) => {
    if (D(Me), T) {
      const ft = q.nativeEvent || q, Kt = new ft.constructor(ft.type, ft);
      Object.defineProperty(Kt, "target", {
        writable: !0,
        value: {
          value: Me,
          name: S
        }
      }), T(Kt, se);
    }
  }, ye = (q) => (se) => {
    be.current = !1;
    let Me;
    if (se.currentTarget.hasAttribute("tabindex")) {
      if (p) {
        Me = Array.isArray(H) ? H.slice() : [];
        const ft = H.indexOf(q.props.value);
        ft === -1 ? Me.push(q.props.value) : Me.splice(ft, 1);
      } else
        Me = q.props.value;
      q.props.onClick && q.props.onClick(se), H !== Me && Or(se, q, Me), p || $e(!1, se);
    }
  }, Xe = (q, se) => (Me) => {
    var gl, Ho;
    if ((Ho = (gl = q.props).onMouseUp) == null || Ho.call(gl, Me), be.current) {
      be.current = !1;
      return;
    }
    const ft = !Ce.current.allowSelectedMouseUp && se, Kt = !Ce.current.allowUnselectedMouseUp && !se;
    ft || Kt || Me.currentTarget.click();
  }, Vt = (q) => {
    var lm;
    const se = ve.current, Me = se.buffer !== "";
    if (xe || p || m || q.defaultPrevented || (lm = q.nativeEvent) != null && lm.isComposing || q.key.length !== 1 || q.ctrlKey || q.metaKey || q.altKey || q.key === vo && !Me)
      return !1;
    q.key === vo && q.preventDefault();
    const ft = se.buffer === "", {
      options: Kt,
      selectedIndex: gl
    } = S5(Sn, H);
    if (Kt.length === 0)
      return q.key !== vo && Le(), !0;
    ft && (se.previousSearchIndex = gl);
    const Ho = q.key.toLowerCase();
    se.buffer === Ho && x5(Kt, Ho) && (se.buffer = "", se.previousSearchIndex = se.matchedIndex), se.buffer += Ho, Oe.start(w5, Le);
    const du = v5(Kt, se.buffer, (se.previousSearchIndex ?? -1) + 1);
    if (du !== -1) {
      const fu = Kt[du];
      return se.matchedIndex = du, ma(H, fu.value) || Or(q, fu.child, fu.value), !0;
    }
    return q.key !== vo && Le(), !0;
  }, hl = (q) => {
    if (!g) {
      const se = Vt(q), Me = q.key === vo || q.key === C5 || q.key === k5 || q.key === T5;
      !se && Me && (q.preventDefault(), $e(!0, q)), R == null || R(q);
    }
  }, Wo = (q) => {
    Le(), !xe && w && (Object.defineProperty(q, "target", {
      writable: !0,
      value: {
        value: H,
        name: S
      }
    }), w(q));
  }, Yn = (q) => (se) => {
    var Me, ft;
    (ft = (Me = q == null ? void 0 : q.props) == null ? void 0 : Me.onKeyDown) == null || ft.call(Me, se), se.key === vo && se.target === se.currentTarget && !se.defaultPrevented && (se.preventDefault(), se.repeat || se.currentTarget.click());
  };
  delete F["aria-invalid"];
  let Ln, fo;
  const dr = [];
  let fr = !1, pr = !1;
  (Va({
    value: H
  }) || y) && (j ? Ln = j(H) : fr = !0);
  const B = Sn.map((q) => {
    if (!/* @__PURE__ */ h.isValidElement(q))
      return null;
    let se;
    if (p) {
      if (!Array.isArray(H))
        throw new Error(Ir(2));
      se = H.some((Me) => ma(Me, q.props.value)), se && fr && dr.push(q.props.children);
    } else
      se = ma(H, q.props.value), se && fr && (fo = q.props.children);
    return se && (pr = !0), /* @__PURE__ */ h.cloneElement(q, {
      "aria-selected": se ? "true" : "false",
      onMouseDown: (Me) => {
        var ft, Kt;
        be.current = !0, (Kt = (ft = q.props).onMouseDown) == null || Kt.call(ft, Me);
      },
      onPointerDown: (Me) => {
        var ft, Kt;
        be.current = !0, (Kt = (ft = q.props).onPointerDown) == null || Kt.call(ft, Me);
      },
      onClick: ye(q),
      onMouseUp: Xe(q, se),
      onKeyUp: (Me) => {
        Me.key === vo && Me.preventDefault(), q.props.onKeyUp && q.props.onKeyUp(Me);
      },
      onKeyDown: Yn(q),
      role: "option",
      selected: se,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ht(() => {
    oe.current = pr, !xe && !p && !pr && Le();
  }, [pr, p, xe, Le]), fr && (p ? dr.length === 0 ? Ln = null : Ln = dr.reduce((q, se, Me) => (q.push(se), Me < dr.length - 1 && q.push(", "), q), []) : Ln = fo);
  let fe = ke;
  !s && pe && Pe && (fe = Ae.clientWidth);
  let Fe;
  typeof A < "u" ? Fe = A : Fe = m ? null : 0;
  const J = O.id || (S ? `mui-component-select-${S}` : void 0), X = {
    ...t,
    variant: z,
    value: H,
    open: xe,
    error: d
  }, ce = I5(X), Re = typeof ((Ui = v.slotProps) == null ? void 0 : Ui.paper) == "function" ? v.slotProps.paper(X) : (Uo = v.slotProps) == null ? void 0 : Uo.paper, bt = yt(Re == null ? void 0 : Re.ref, Q), mr = typeof ((im = v.slotProps) == null ? void 0 : im.list) == "function" ? v.slotProps.list(X) : (sm = v.slotProps) == null ? void 0 : sm.list, Gn = Mr(), po = Mr();
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ c.jsx(E5, {
      as: "div",
      ref: ot,
      tabIndex: Fe,
      role: "combobox",
      "aria-controls": xe ? Gn : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": xe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: hl,
      onMouseDown: m || g ? null : Te,
      onBlur: Wo,
      onFocus: E,
      ...O,
      ownerState: X,
      className: te(O.className, ce.select, a),
      id: J,
      children: zI(Ln) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Fg || (Fg = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ln
    }), /* @__PURE__ */ c.jsx(P5, {
      "aria-invalid": d,
      value: Array.isArray(H) ? H.join(",") : H,
      name: S,
      ref: Y,
      "aria-hidden": !0,
      onChange: uo,
      tabIndex: -1,
      disabled: m,
      readOnly: g,
      className: ce.nativeInput,
      autoFocus: i,
      required: P,
      ...F,
      id: F.id ?? po,
      ownerState: X
    }), /* @__PURE__ */ c.jsx(R5, {
      as: x,
      className: ce.icon,
      ownerState: X
    }), /* @__PURE__ */ c.jsx(_I, {
      value: _e,
      children: /* @__PURE__ */ c.jsx(n5, {
        id: `menu-${S || ""}`,
        anchorEl: Ae,
        open: xe,
        onClose: Kn,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...v,
        slotProps: {
          ...v.slotProps,
          list: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": p ? "true" : void 0,
            disableListWrap: !0,
            id: Gn,
            ...mr
          },
          paper: {
            ...Re,
            ref: bt,
            style: {
              minWidth: fe,
              ...Re == null ? void 0 : Re.style
            }
          }
        },
        children: B
      })
    })]
  });
}), j5 = (e) => {
  const {
    classes: t
  } = e, r = de({
    root: ["root"]
  }, H1, t);
  return {
    ...t,
    ...r
  };
}, om = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Jt(e) && e !== "variant"
}, $5 = U(em, om)(""), O5 = U(rm, om)(""), A5 = U(Jp, om)(""), Is = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: f = ER,
    id: m,
    input: y,
    inputProps: d,
    label: x,
    labelId: b,
    MenuProps: C,
    multiple: v = !1,
    native: p = !1,
    onClose: S,
    onOpen: w,
    open: T,
    renderValue: k,
    SelectDisplayProps: E,
    variant: R = "outlined",
    ...I
  } = r, L = p ? c5 : M5, [M] = Fo({
    props: r,
    states: ["variant", "error"]
  }), g = M.variant || R, j = {
    ...r,
    variant: g,
    classes: s
  }, P = j5(j), {
    root: O,
    ...A
  } = P, N = y || {
    standard: /* @__PURE__ */ c.jsx($5, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ c.jsx(O5, {
      label: x,
      ownerState: j
    }),
    filled: /* @__PURE__ */ c.jsx(A5, {
      ownerState: j
    })
  }[g], $ = yt(n, Do(N));
  return /* @__PURE__ */ c.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: f,
        variant: g,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: v,
        ...p ? {
          id: m
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: b,
          MenuProps: C,
          onClose: S,
          onOpen: w,
          open: T,
          renderValue: k,
          SelectDisplayProps: {
            id: m,
            ...E
          }
        },
        ...d,
        classes: d ? Bt(A, d.classes) : A,
        ...y ? y.props.inputProps : {}
      },
      ...(v && p || u) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: te(N.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!y && {
        variant: g
      },
      ...I
    })
  });
});
Is.muiName = "Select";
function L5(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = or();
  h.useEffect(() => {
    if (!o)
      return;
    function v(p) {
      p.defaultPrevented || p.key === "Escape" && (r == null || r(p, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", v), () => {
      document.removeEventListener("keydown", v);
    };
  }, [o, r]);
  const l = nt((v, p) => {
    r == null || r(v, p);
  }), a = nt((v) => {
    !r || v == null || s.start(v, () => {
      l(null, "timeout");
    });
  });
  h.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (v) => {
    r == null || r(v, "clickaway");
  }, f = s.clear, m = h.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), y = (v) => (p) => {
    const S = v.onBlur;
    S == null || S(p), m();
  }, d = (v) => (p) => {
    const S = v.onFocus;
    S == null || S(p), f();
  }, x = (v) => (p) => {
    const S = v.onMouseEnter;
    S == null || S(p), f();
  }, b = (v) => (p) => {
    const S = v.onMouseLeave;
    S == null || S(p), m();
  };
  return h.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", f), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", f);
      };
  }, [n, o, m, f]), {
    getRootProps: (v = {}) => {
      const p = {
        ...Xa(e),
        ...Xa(v)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...v,
        ...p,
        onBlur: y(p),
        onFocus: d(p),
        onMouseEnter: x(p),
        onMouseLeave: b(p)
      };
    },
    onClickAway: u
  };
}
function N5(e) {
  return ue("MuiSnackbarContent", e);
}
ae("MuiSnackbarContent", ["root", "message", "action"]);
const B5 = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, N5, t);
}, z5 = U(Wt, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(me(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(rf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : rf(e.palette.background.default, t),
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
})), _5 = U("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), F5 = U("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), D5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, f = B5(u);
  return /* @__PURE__ */ c.jsxs(z5, {
    role: l,
    elevation: 6,
    className: te(f.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ c.jsx(_5, {
      className: f.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ c.jsx(F5, {
      className: f.action,
      ownerState: u,
      children: o
    }) : null]
  });
});
function W5(e) {
  return ue("MuiSnackbar", e);
}
ae("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const U5 = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ne(n.vertical)}${ne(n.horizontal)}`]
  };
  return de(r, W5, t);
}, H5 = U("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ne(n.anchorOrigin.vertical)}${ne(n.anchorOrigin.horizontal)}`]];
  }
})(me(({
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
}))), V5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSnackbar"
  }), o = ao(), i = {
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
    children: f,
    className: m,
    disableWindowBlurListener: y = !1,
    message: d,
    onBlur: x,
    onClose: b,
    onFocus: C,
    onMouseEnter: v,
    onMouseLeave: p,
    open: S,
    resumeHideDuration: w,
    slots: T = {},
    slotProps: k = {},
    transitionDuration: E = i,
    ...R
  } = r, I = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: u,
    disableWindowBlurListener: y,
    transitionDuration: E
  }, L = U5(I), {
    getRootProps: M,
    onClickAway: g
  } = L5(I), [j, P] = h.useState(!0), O = {
    slots: T,
    slotProps: k
  }, [A, N] = ge("root", {
    ref: n,
    className: [L.root, m],
    elementType: H5,
    getSlotProps: M,
    externalForwardedProps: {
      ...O,
      ...R
    },
    ownerState: I
  }), [$, {
    ownerState: z,
    ...F
  }] = ge("clickAwayListener", {
    elementType: eP,
    externalForwardedProps: O,
    getSlotProps: (Y) => ({
      onClickAway: (...K) => {
        var W;
        const Q = K[0];
        (W = Y.onClickAway) == null || W.call(Y, ...K), !(Q != null && Q.defaultMuiPrevented) && g(...K);
      }
    }),
    ownerState: I
  }), [H, D] = ge("content", {
    elementType: D5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: O,
    additionalProps: {
      message: d,
      action: s
    },
    ownerState: I
  }), [Z, V] = ge("transition", {
    elementType: tl,
    externalForwardedProps: O,
    getSlotProps: (Y) => ({
      onEnter: (...K) => {
        var Q;
        (Q = Y.onEnter) == null || Q.call(Y, ...K), P(!1);
      },
      onExited: (...K) => {
        var Q;
        (Q = Y.onExited) == null || Q.call(Y, ...K), P(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: E,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: I
  });
  return !S && j ? null : /* @__PURE__ */ c.jsx($, {
    ...F,
    ...T.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ c.jsx(A, {
      ...N,
      children: /* @__PURE__ */ c.jsx(Z, {
        ...V,
        children: f || /* @__PURE__ */ c.jsx(H, {
          ...D
        })
      })
    })
  });
});
function K5(e) {
  return ue("MuiTooltip", e);
}
const bn = ae("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function Y5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const G5 = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ne(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return de(s, K5, t);
}, X5 = U(N1, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(me(({
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
}))), Q5 = U("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ne(n.placement.split("-")[0])}`]];
  }
})(me(({
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
      lineHeight: `${Y5(16 / 14)}em`,
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
}))), q5 = U("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(me(({
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
const Ug = new au();
let os = {
  x: 0,
  y: 0
};
function Yl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const is = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    describeChild: l = !1,
    disableFocusListener: a = !1,
    disableHoverListener: u = !1,
    disableInteractive: f = !1,
    disableTouchListener: m = !1,
    enterDelay: y = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: x = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: v = 0,
    leaveTouchDelay: p = 1500,
    onClose: S,
    onOpen: w,
    open: T,
    placement: k = "bottom",
    slotProps: E = {},
    slots: R = {},
    title: I,
    ...L
  } = r, M = /* @__PURE__ */ h.isValidElement(i) ? i : /* @__PURE__ */ c.jsx("span", {
    children: i
  }), g = ao(), [j, P] = h.useState(), [O, A] = h.useState(null), N = h.useRef(!1), $ = f || b, z = or(), F = or(), H = or(), D = or(), [Z, V] = Ga({
    controlled: T,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Y = Z;
  const K = Mr(C), Q = h.useRef(), W = nt(() => {
    Q.current !== void 0 && (document.body.style.WebkitUserSelect = Q.current, Q.current = void 0), D.clear();
  });
  h.useEffect(() => W, [W]);
  const oe = (ye) => {
    Ug.clear(), Kl = !0, V(!0), w && !Y && w(ye);
  }, ie = nt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ye) => {
      Ug.start(800 + v, () => {
        Kl = !1;
      }), V(!1), S && Y && S(ye), z.start(g.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), be = (ye) => {
    j != null && j.disabled || N.current && ye.type !== "touchstart" || (j && j.removeAttribute("title"), F.clear(), H.clear(), y || Kl && d ? F.start(Kl ? d : y, () => {
      oe(ye);
    }) : oe(ye));
  }, Ce = (ye) => {
    F.clear(), H.start(v, () => {
      ie(ye);
    });
  }, [, ve] = h.useState(!1), le = (ye) => {
    const Xe = (ye == null ? void 0 : ye.target) ?? j;
    if (!Xe || Xe.disabled || !Qa(Xe)) {
      ve(!1);
      const Vt = ye ?? new Event("blur");
      !ye && Xe && (Object.defineProperty(Vt, "target", {
        value: Xe
      }), Object.defineProperty(Vt, "currentTarget", {
        value: Xe
      })), Ce(Vt);
    }
  }, Be = (ye) => {
    if (j || P(ye.currentTarget), Qa(ye.target)) {
      const Xe = (Vt) => {
        Vt.target.disabled && le(Vt), Vt.target.removeEventListener("blur", Xe);
      };
      ye.target.addEventListener("blur", Xe), ve(!0), be(ye);
    }
  }, Oe = (ye) => {
    N.current = !0;
    const Xe = M.props;
    Xe.onTouchStart && Xe.onTouchStart(ye);
  }, Pe = (ye) => {
    Oe(ye), H.clear(), z.clear(), W(), Q.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", D.start(x, () => {
      document.body.style.WebkitUserSelect = Q.current, be(ye);
    });
  }, Ie = (ye) => {
    M.props.onTouchEnd && M.props.onTouchEnd(ye), W(), H.start(p, () => {
      ie(ye);
    });
  };
  h.useEffect(() => {
    if (!Y)
      return;
    function ye(Xe) {
      Xe.key === "Escape" && ie(Xe);
    }
    return document.addEventListener("keydown", ye), () => {
      document.removeEventListener("keydown", ye);
    };
  }, [ie, Y]);
  const pe = yt(Do(M), P, n);
  !I && I !== 0 && (Y = !1);
  const ke = h.useRef(), Je = (ye) => {
    const Xe = M.props;
    Xe.onMouseMove && Xe.onMouseMove(ye), os = {
      x: ye.clientX,
      y: ye.clientY
    }, ke.current && ke.current.update();
  }, _e = {}, He = typeof I == "string";
  l ? (_e.title = !Y && He && !u ? I : null, _e["aria-describedby"] = Y ? K : null) : (_e["aria-label"] = He ? I : null, _e["aria-labelledby"] = Y && !He ? K : null);
  const ze = {
    ..._e,
    ...L,
    ...M.props,
    className: te(L.className, M.props.className),
    onTouchStart: Oe,
    ref: pe,
    ...b ? {
      onMouseMove: Je
    } : {}
  }, ot = {};
  m || (ze.onTouchStart = Pe, ze.onTouchEnd = Ie), u || (ze.onMouseOver = Yl(be, ze.onMouseOver), ze.onMouseLeave = Yl(Ce, ze.onMouseLeave), $ || (ot.onMouseOver = be, ot.onMouseLeave = Ce)), a || (ze.onFocus = Yl(Be, ze.onFocus), ze.onBlur = Yl(le, ze.onBlur), $ || (ot.onFocus = Be, ot.onBlur = le));
  const Ae = {
    ...r,
    arrow: o,
    disableInteractive: $,
    placement: k,
    touch: N.current
  }, xe = typeof E.popper == "function" ? E.popper(Ae) : E.popper, Le = h.useMemo(() => {
    var Xe;
    let ye = [{
      name: "arrow",
      enabled: !!O,
      options: {
        element: O,
        padding: 4
      }
    }];
    return (Xe = xe == null ? void 0 : xe.popperOptions) != null && Xe.modifiers && (ye = ye.concat(xe.popperOptions.modifiers)), {
      ...xe == null ? void 0 : xe.popperOptions,
      modifiers: ye
    };
  }, [O, xe == null ? void 0 : xe.popperOptions]), St = G5(Ae), ee = {
    slots: R,
    slotProps: {
      arrow: E.arrow,
      popper: xe,
      tooltip: E.tooltip,
      transition: E.transition
    }
  }, [Se, $e] = ge("popper", {
    elementType: X5,
    externalForwardedProps: ee,
    ownerState: Ae,
    className: St.popper
  }), [dt, Te] = ge("transition", {
    elementType: tl,
    externalForwardedProps: ee,
    ownerState: Ae
  }), [Kn, Sn] = ge("tooltip", {
    elementType: Q5,
    className: St.tooltip,
    externalForwardedProps: ee,
    ownerState: Ae
  }), [uo, Or] = ge("arrow", {
    elementType: q5,
    className: St.arrow,
    externalForwardedProps: ee,
    ownerState: Ae,
    ref: A
  });
  return /* @__PURE__ */ c.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement(M, ze), /* @__PURE__ */ c.jsx(Se, {
      as: N1,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: os.y,
          left: os.x,
          right: os.x,
          bottom: os.y,
          width: 0,
          height: 0
        })
      } : j,
      popperRef: ke,
      open: j ? Y : !1,
      id: K,
      transition: !0,
      ...ot,
      ...$e,
      popperOptions: Le,
      children: ({
        TransitionProps: ye
      }) => /* @__PURE__ */ c.jsx(dt, {
        timeout: g.transitions.duration.shorter,
        ...ye,
        ...Te,
        children: /* @__PURE__ */ c.jsxs(Kn, {
          ...Sn,
          children: [I, o ? /* @__PURE__ */ c.jsx(uo, {
            ...Or
          }) : null]
        })
      })
    })]
  });
}), lt = Fk({
  createStyledComponent: U("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => he({
    props: e,
    name: "MuiStack"
  })
});
function Z5(e) {
  return ue("MuiSwitch", e);
}
const Yt = ae("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), J5 = (e) => {
  const {
    classes: t,
    edge: n,
    size: r,
    color: o,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${ne(n)}`, `size${ne(r)}`],
    switchBase: ["switchBase", `color${ne(o)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, a = de(l, Z5, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, eM = U("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${ne(n.edge)}`], t[`size${ne(n.size)}`]];
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
      [`& .${Yt.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Yt.switchBase}`]: {
        padding: 4,
        [`&.${Yt.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), tM = U(ZR, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${Yt.input}`]: t.input
    }, n.color !== "default" && t[`color${ne(n.color)}`]];
  }
})(me(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  ...Ze(e, ["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${Yt.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Yt.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${Yt.checked} + .${Yt.track}`]: {
    opacity: 0.5
  },
  [`&.${Yt.disabled} + .${Yt.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Yt.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), me(({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(Ct(["light"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Yt.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Yt.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Yt.checked} + .${Yt.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), nM = U("span", {
  name: "MuiSwitch",
  slot: "Track"
})(me(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  ...Ze(e, ["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  "@media (forced-colors: active)": {
    boxSizing: "border-box",
    border: "1px solid ButtonBorder"
  },
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
}))), rM = U("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(me(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), oM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSwitch"
  }), {
    className: o,
    color: i = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: a,
    slots: u = {},
    slotProps: f = {},
    ...m
  } = r, y = {
    ...r,
    color: i,
    edge: s,
    size: l
  }, d = J5(y), x = f.input, b = {
    slots: u,
    slotProps: f
  }, [C, v] = ge("root", {
    className: te(d.root, o),
    elementType: eM,
    externalForwardedProps: b,
    ownerState: y,
    additionalProps: {
      sx: a
    }
  }), [p, S] = ge("thumb", {
    className: d.thumb,
    elementType: rM,
    externalForwardedProps: b,
    ownerState: y
  }), w = /* @__PURE__ */ c.jsx(p, {
    ...S
  }), [T, k] = ge("track", {
    className: d.track,
    elementType: nM,
    externalForwardedProps: b,
    ownerState: y
  });
  return /* @__PURE__ */ c.jsxs(C, {
    ...v,
    children: [/* @__PURE__ */ c.jsx(tM, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: n,
      ownerState: y,
      ...m,
      classes: {
        ...d,
        root: d.switchBase
      },
      slots: {
        ...u.switchBase && {
          root: u.switchBase
        },
        ...u.input && {
          input: u.input
        }
      },
      slotProps: {
        ...f.switchBase && {
          root: typeof f.switchBase == "function" ? f.switchBase(y) : f.switchBase
        },
        input: y1(typeof x == "function" ? x(y) : x, {
          role: "switch"
        })
      }
    }), /* @__PURE__ */ c.jsx(T, {
      ...k
    })]
  });
});
function iM(e) {
  return ue("MuiTab", e);
}
const zn = ae("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), sM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ne(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return de(u, iM, t);
}, lM = U(ro, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ne(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${zn.icon}`]: t.icon
    }];
  }
})(me(({
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
}))), Zn = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: f,
    label: m,
    onChange: y,
    onClick: d,
    onFocus: x,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: v = "inherit",
    value: p,
    wrapped: S = !1,
    ...w
  } = r, T = V1(), k = Y1({
    id: p,
    ref: n,
    disabled: i,
    selected: b
  }), R = T.getItemMap().size === 0 && b ? 0 : k.tabIndex, I = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: u,
    label: !!m,
    fullWidth: l,
    textColor: v,
    wrapped: S
  }, L = sM(I), M = a && m && /* @__PURE__ */ h.isValidElement(a) ? /* @__PURE__ */ h.cloneElement(a, {
    className: te(L.icon, a.props.className)
  }) : a, g = (P) => {
    !b && y && y(P, p), d && d(P);
  }, j = (P) => {
    C && !b && y && y(P, p), x && x(P);
  };
  return /* @__PURE__ */ c.jsxs(lM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: te(L.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: g,
    onFocus: j,
    tabIndex: R,
    ownerState: I,
    ...w,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [M, m]
    }) : /* @__PURE__ */ c.jsxs(h.Fragment, {
      children: [m, M]
    }), f]
  });
}), ax = /* @__PURE__ */ h.createContext();
function aM(e) {
  return ue("MuiTable", e);
}
ae("MuiTable", ["root", "stickyHeader"]);
const cM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return de({
    root: ["root", n && "stickyHeader"]
  }, aM, t);
}, uM = U("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(me(({
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
}))), Hg = "table", Qu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Hg,
    padding: s = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...u
  } = r, f = {
    ...r,
    component: i,
    padding: s,
    size: l,
    stickyHeader: a
  }, m = cM(f), y = h.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ c.jsx(ax.Provider, {
    value: y,
    children: /* @__PURE__ */ c.jsx(uM, {
      as: i,
      role: i === Hg ? null : "table",
      ref: n,
      className: te(m.root, o),
      ownerState: f,
      ...u
    })
  });
}), uu = /* @__PURE__ */ h.createContext();
function dM(e) {
  return ue("MuiTableBody", e);
}
ae("MuiTableBody", ["root"]);
const fM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, dM, t);
}, pM = U("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), mM = {
  variant: "body"
}, Vg = "tbody", qu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Vg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = fM(l);
  return /* @__PURE__ */ c.jsx(uu.Provider, {
    value: mM,
    children: /* @__PURE__ */ c.jsx(pM, {
      className: te(a.root, o),
      as: i,
      ref: n,
      role: i === Vg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function hM(e) {
  return ue("MuiTableCell", e);
}
const gM = ae("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), yM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ne(r)}`, o !== "normal" && `padding${ne(o)}`, `size${ne(i)}`]
  };
  return de(l, hM, t);
}, vM = U("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ne(n.size)}`], n.padding !== "normal" && t[`padding${ne(n.padding)}`], n.align !== "inherit" && t[`align${ne(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(me(({
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
      [`&.${gM.paddingCheckbox}`]: {
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
}))), we = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableCell"
  }), {
    align: o = "inherit",
    className: i,
    component: s,
    padding: l,
    scope: a,
    size: u,
    sortDirection: f,
    variant: m,
    ...y
  } = r, d = h.useContext(ax), x = h.useContext(uu), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let v = a;
  C === "td" ? v = void 0 : !v && b && (v = "col");
  const p = m || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: u || (d && d.size ? d.size : "medium"),
    sortDirection: f,
    stickyHeader: p === "head" && d && d.stickyHeader,
    variant: p
  }, w = yM(S);
  let T = null;
  return f && (T = f === "asc" ? "ascending" : "descending"), /* @__PURE__ */ c.jsx(vM, {
    as: C,
    ref: n,
    className: te(w.root, i),
    "aria-sort": T,
    scope: v,
    ownerState: S,
    ...y
  });
});
function xM(e) {
  return ue("MuiTableContainer", e);
}
ae("MuiTableContainer", ["root"]);
const SM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, xM, t);
}, bM = U("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), Zu = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, a = SM(l);
  return /* @__PURE__ */ c.jsx(bM, {
    ref: n,
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ...s
  });
});
function wM(e) {
  return ue("MuiTableHead", e);
}
ae("MuiTableHead", ["root"]);
const CM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, wM, t);
}, kM = U("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), TM = {
  variant: "head"
}, Kg = "thead", Ju = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Kg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = CM(l);
  return /* @__PURE__ */ c.jsx(uu.Provider, {
    value: TM,
    children: /* @__PURE__ */ c.jsx(kM, {
      as: i,
      className: te(a.root, o),
      ref: n,
      role: i === Kg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), EM = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), RM = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function PM(e) {
  return ue("MuiTableRow", e);
}
const Yg = ae("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), IM = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return de({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, PM, t);
}, MM = U("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(me(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Yg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Yg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Gg = "tr", yr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Gg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = h.useContext(uu), f = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, m = IM(f);
  return /* @__PURE__ */ c.jsx(MM, {
    as: i,
    ref: n,
    className: te(m.root, o),
    role: i === Gg ? null : "row",
    ownerState: f,
    ...a
  });
});
function jM(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function $M(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = jM,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let u = !1;
  const f = () => {
    u = !0;
  }, m = (y) => {
    if (u) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = y);
    const d = Math.min(1, (y - l) / s);
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
const OM = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function AM(e) {
  const {
    onChange: t,
    ...n
  } = e, r = h.useRef(), o = h.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ht(() => {
    const s = nu(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Vn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), h.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ c.jsx("div", {
    style: OM,
    ...n,
    ref: o
  });
}
function LM(e) {
  return ue("MuiTabScrollButton", e);
}
const NM = ae("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), BM = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return de({
    root: ["root", n, r && "disabled"]
  }, LM, t);
}, zM = U(ro, {
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
  [`&.${NM.disabled}`]: {
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
}), _M = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: i = {},
    slotProps: s = {},
    direction: l,
    orientation: a,
    disabled: u,
    ...f
  } = r, {
    nativeButton: m,
    ...y
  } = f, d = dl(), x = {
    isRtl: d,
    ...r
  }, b = BM(x), C = i.StartScrollButtonIcon ?? EM, v = i.EndScrollButtonIcon ?? RM, p = Bi({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = Bi({
    elementType: v,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ c.jsx(zM, {
    component: "div",
    className: te(b.root, o),
    ref: n,
    role: null,
    ownerState: x,
    tabIndex: null,
    ...y,
    style: {
      ...y.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${d ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ c.jsx(C, {
      ...p
    }) : /* @__PURE__ */ c.jsx(v, {
      ...S
    })
  });
});
function FM(e) {
  return ue("MuiTabs", e);
}
const ed = ae("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), DM = (e) => {
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
  return de({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, FM, a);
}, WM = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ed.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${ed.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(me(({
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
      [`& .${ed.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), UM = U("div", {
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
}), HM = U("div", {
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
}), VM = U("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(me(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...Ze(e),
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
}))), KM = U(AM)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Xg = {}, Qg = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTabs"
  }), o = ao(), i = dl(), s = lu(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: u,
    centered: f = !1,
    children: m,
    className: y,
    component: d = "div",
    allowScrollButtonsMobile: x = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: v = "horizontal",
    scrollButtons: p = "auto",
    selectionFollowsFocus: S,
    slots: w = {},
    slotProps: T = {},
    textColor: k = "primary",
    value: E,
    variant: R = "standard",
    visibleScrollbar: I = !1,
    ...L
  } = r, M = R === "scrollable", g = v === "vertical", j = g ? "scrollTop" : "scrollLeft", P = g ? "top" : "left", O = g ? "bottom" : "right", A = g ? "clientHeight" : "clientWidth", N = g ? "height" : "width", $ = {
    ...r,
    component: d,
    allowScrollButtonsMobile: x,
    indicatorColor: b,
    orientation: v,
    vertical: g,
    scrollButtons: p,
    textColor: k,
    variant: R,
    visibleScrollbar: I,
    fixed: !M,
    hideScrollbar: M && !I,
    scrollableX: M && !g,
    scrollableY: M && g,
    centered: f && !M,
    scrollButtonsHideMobile: !x
  }, z = DM($), F = Bi({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: T.startScrollButtonIcon,
    ownerState: $
  }), H = Bi({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: T.endScrollButtonIcon,
    ownerState: $
  }), [D, Z] = h.useState(!1), [V, Y] = h.useState(Xg), [K, Q] = h.useState(!1), [W, oe] = h.useState(!1), [ie, be] = h.useState(!1), Ce = E === !1 ? null : E, [ve, le] = h.useState(!1), [Be, Oe] = h.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Pe = /* @__PURE__ */ new Map(), Ie = h.useRef(null), pe = h.useRef(null), ke = {
    slots: w,
    slotProps: T
  }, Je = () => {
    const J = Ie.current;
    let X;
    if (J) {
      const Re = J.getBoundingClientRect();
      X = {
        clientWidth: J.clientWidth,
        scrollLeft: J.scrollLeft,
        scrollTop: J.scrollTop,
        scrollWidth: J.scrollWidth,
        top: Re.top,
        bottom: Re.bottom,
        left: Re.left,
        right: Re.right
      };
    }
    let ce;
    if (J && E !== !1) {
      const Re = pe.current.children;
      if (Re.length > 0) {
        const bt = Re[Pe.get(E)];
        ce = bt ? bt.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: X,
      tabMeta: ce
    };
  }, _e = nt(() => {
    const {
      tabsMeta: J,
      tabMeta: X
    } = Je();
    let ce = 0, Re;
    g ? (Re = "top", X && J && (ce = X.top - J.top + J.scrollTop)) : (Re = i ? "right" : "left", X && J && (ce = (i ? -1 : 1) * (X[Re] - J[Re] + J.scrollLeft)));
    const bt = {
      [Re]: ce,
      // May be wrong until the font is loaded.
      [N]: X ? X[N] : 0
    };
    if (typeof V[Re] != "number" || typeof V[N] != "number")
      Y(bt);
    else {
      const mr = Math.abs(V[Re] - bt[Re]), Gn = Math.abs(V[N] - bt[N]);
      (mr >= 1 || Gn >= 1) && Y(bt);
    }
  }), He = (J, {
    animation: X = !0
  } = {}) => {
    X && !s.shouldReduceMotion ? $M(j, Ie.current, J, {
      duration: o.transitions.duration.standard
    }) : Ie.current[j] = J;
  }, ze = (J) => {
    let X = Ie.current[j];
    g ? X += J : X += J * (i ? -1 : 1), He(X);
  }, ot = () => {
    const J = Ie.current[A];
    let X = 0;
    const ce = Array.from(pe.current.children);
    for (let Re = 0; Re < ce.length; Re += 1) {
      const bt = ce[Re];
      if (X + bt[A] > J) {
        Re === 0 && (X = J);
        break;
      }
      X += bt[A];
    }
    return X;
  }, Ae = () => {
    ze(-1 * ot());
  }, xe = () => {
    ze(ot());
  }, [Le, {
    onChange: St,
    ...ee
  }] = ge("scrollbar", {
    className: te(z.scrollableX, z.hideScrollbar),
    elementType: KM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ke,
    ownerState: $
  }), Se = h.useCallback((J) => {
    St == null || St(J), Oe({
      overflow: null,
      scrollbarWidth: J
    });
  }, [St]), [$e, dt] = ge("scrollButtons", {
    className: z.scrollButtons,
    elementType: _M,
    externalForwardedProps: ke,
    ownerState: $,
    additionalProps: {
      orientation: v,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: F,
        endScrollButtonIcon: H
      }
    }
  }), Te = () => {
    const J = {};
    J.scrollbarSizeListener = M ? /* @__PURE__ */ c.jsx(Le, {
      ...ee,
      onChange: Se
    }) : null;
    const ce = M && (p === "auto" && (K || W) || p === !0);
    return J.scrollButtonStart = ce ? /* @__PURE__ */ c.jsx($e, {
      direction: i ? "right" : "left",
      onClick: Ae,
      disabled: !K,
      ...dt
    }) : null, J.scrollButtonEnd = ce ? /* @__PURE__ */ c.jsx($e, {
      direction: i ? "left" : "right",
      onClick: xe,
      disabled: !W,
      ...dt
    }) : null, J;
  }, Kn = nt((J) => {
    const {
      tabsMeta: X,
      tabMeta: ce
    } = Je();
    if (!(!ce || !X)) {
      if (ce[P] < X[P]) {
        const Re = X[j] + (ce[P] - X[P]);
        He(Re, {
          animation: J
        });
      } else if (ce[O] > X[O]) {
        const Re = X[j] + (ce[O] - X[O]);
        He(Re, {
          animation: J
        });
      }
    }
  }), Sn = nt(() => {
    M && p !== !1 && be(!ie);
  });
  h.useEffect(() => {
    const J = nu(() => {
      Ie.current && _e();
    });
    let X;
    const ce = (mr) => {
      mr.forEach((Gn) => {
        Gn.removedNodes.forEach((po) => {
          X == null || X.unobserve(po);
        }), Gn.addedNodes.forEach((po) => {
          X == null || X.observe(po);
        });
      }), J(), Sn();
    }, Re = Vn(Ie.current);
    Re.addEventListener("resize", J);
    let bt;
    return typeof ResizeObserver < "u" && (X = new ResizeObserver(J), Array.from(pe.current.children).forEach((mr) => {
      X.observe(mr);
    })), typeof MutationObserver < "u" && (bt = new MutationObserver(ce), bt.observe(pe.current, {
      childList: !0
    })), () => {
      J.clear(), Re.removeEventListener("resize", J), bt == null || bt.disconnect(), X == null || X.disconnect();
    };
  }, [_e, Sn]), h.useEffect(() => {
    const J = Array.from(pe.current.children), X = J.length;
    if (typeof IntersectionObserver < "u" && X > 0 && M && p !== !1) {
      const ce = J[0], Re = J[X - 1], bt = {
        root: Ie.current,
        threshold: 0.99
      }, mr = (Uo) => {
        Q(!Uo[0].isIntersecting);
      }, Gn = new IntersectionObserver(mr, bt);
      Gn.observe(ce);
      const po = (Uo) => {
        oe(!Uo[0].isIntersecting);
      }, Ui = new IntersectionObserver(po, bt);
      return Ui.observe(Re), () => {
        Gn.disconnect(), Ui.disconnect();
      };
    }
  }, [M, p, ie, m == null ? void 0 : m.length]), h.useEffect(() => {
    Z(!0);
  }, []), h.useEffect(() => {
    _e();
  }), h.useEffect(() => {
    Kn(Xg !== V);
  }, [Kn, V]), h.useImperativeHandle(u, () => ({
    updateIndicator: _e,
    updateScrollButtons: Sn
  }), [_e, Sn]);
  const [uo, Or] = ge("indicator", {
    className: z.indicator,
    elementType: VM,
    externalForwardedProps: ke,
    ownerState: $,
    additionalProps: {
      style: V
    }
  }), ye = /* @__PURE__ */ c.jsx(uo, {
    ...Or
  }), Xe = K1({
    activeItemId: ve ? void 0 : Ce,
    orientation: v,
    isRtl: i
  }), Vt = Xe.getContainerProps(), Wo = h.Children.toArray(m).filter(h.isValidElement).map((J, X) => {
    const ce = J.props.value === void 0 ? X : J.props.value;
    return Pe.set(ce, X), {
      child: J,
      index: X,
      childValue: ce
    };
  }).map(({
    child: J,
    childValue: X
  }) => {
    const ce = X === E;
    return /* @__PURE__ */ h.cloneElement(J, {
      fullWidth: R === "fullWidth",
      indicator: ce && !D && ye,
      selected: ce,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: X
    });
  }), Yn = Te(), [Ln, fo] = ge("root", {
    ref: n,
    className: te(z.root, y),
    elementType: WM,
    externalForwardedProps: {
      ...ke,
      ...L,
      component: d
    },
    ownerState: $
  }), [dr, fr] = ge("scroller", {
    ref: Ie,
    className: z.scroller,
    elementType: UM,
    externalForwardedProps: ke,
    ownerState: $,
    additionalProps: {
      style: {
        overflow: Be.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: I ? void 0 : -Be.scrollbarWidth
      }
    }
  }), pr = yt(Vt.ref, pe), B = (J) => {
    const X = pe.current, ce = rr(xt(X));
    (ce == null ? void 0 : ce.getAttribute("role")) === "tab" && Vt.onKeyDown(J);
  }, [fe, Fe] = ge("list", {
    ref: pr,
    className: z.list,
    elementType: HM,
    externalForwardedProps: ke,
    ownerState: $,
    getSlotProps: (J) => ({
      ...J,
      onBlur: (X) => {
        var ce;
        Po(X.currentTarget, X.relatedTarget) || le(!1), (ce = J.onBlur) == null || ce.call(J, X);
      },
      onKeyDown: (X) => {
        var ce;
        B(X), (ce = J.onKeyDown) == null || ce.call(J, X);
      },
      onFocus: (X) => {
        var ce;
        le(!0), Vt.onFocus(X), (ce = J.onFocus) == null || ce.call(J, X);
      }
    })
  });
  return /* @__PURE__ */ c.jsxs(Ln, {
    ...fo,
    children: [Yn.scrollButtonStart, Yn.scrollbarSizeListener, /* @__PURE__ */ c.jsxs(dr, {
      ...fr,
      children: [/* @__PURE__ */ c.jsx(fe, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": v === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Fe,
        children: /* @__PURE__ */ c.jsx(nm.Provider, {
          value: Xe,
          children: Wo
        })
      }), D && ye]
    }), Yn.scrollButtonEnd]
  });
});
function YM(e) {
  return ue("MuiTextField", e);
}
ae("MuiTextField", ["root"]);
const GM = {
  standard: em,
  filled: Jp,
  outlined: rm
}, XM = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"]
  }, YM, t);
}, QM = U(fa, {
  name: "MuiTextField",
  slot: "Root"
})({}), ti = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: a = "primary",
    defaultValue: u,
    disabled: f = !1,
    error: m = !1,
    fullWidth: y = !1,
    helperText: d,
    id: x,
    inputRef: b,
    label: C,
    maxRows: v,
    minRows: p,
    multiline: S = !1,
    name: w,
    onBlur: T,
    onChange: k,
    onFocus: E,
    placeholder: R,
    required: I = !1,
    rows: L,
    select: M = !1,
    slots: g = {},
    slotProps: j = {},
    type: P,
    value: O,
    variant: A = "outlined",
    ...N
  } = r, $ = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: f,
    error: m,
    fullWidth: y,
    multiline: S,
    required: I,
    select: M,
    variant: A
  }, z = XM($), F = Mr(x), H = d && F ? `${F}-helper-text` : void 0, D = C && F ? `${F}-label` : void 0, Z = GM[A], V = {
    slots: g,
    slotProps: j
  }, [Y, K] = ge("select", {
    elementType: Is,
    externalForwardedProps: V,
    ownerState: $
  }), Q = M && K.native, W = {}, oe = V.slotProps.inputLabel;
  A === "outlined" && (oe && typeof oe.shrink < "u" && (W.notched = oe.shrink), W.label = C), M && (Q || (W.id = void 0), W["aria-describedby"] = void 0);
  const [ie, be] = ge("root", {
    elementType: QM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...V,
      ...N
    },
    ownerState: $,
    className: te(z.root, l),
    ref: n,
    additionalProps: {
      disabled: f,
      error: m,
      fullWidth: y,
      required: I,
      color: a,
      variant: A
    }
  }), [Ce, ve] = ge("input", {
    elementType: Z,
    externalForwardedProps: V,
    additionalProps: W,
    ownerState: $
  }), [le, Be] = ge("inputLabel", {
    elementType: pa,
    externalForwardedProps: V,
    ownerState: $
  }), [Oe, Pe] = ge("htmlInput", {
    elementType: "input",
    externalForwardedProps: V,
    ownerState: $
  }), [Ie, pe] = ge("formHelperText", {
    elementType: QP,
    externalForwardedProps: V,
    ownerState: $
  }), ke = /* @__PURE__ */ c.jsx(Ce, {
    "aria-describedby": H,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: y,
    multiline: S,
    name: w,
    rows: L,
    maxRows: v,
    minRows: p,
    type: P,
    value: O,
    id: F,
    inputRef: b,
    onBlur: T,
    onChange: k,
    onFocus: E,
    placeholder: R,
    inputProps: Pe,
    slots: {
      input: g.htmlInput ? Oe : void 0
    },
    ...ve
  });
  return /* @__PURE__ */ c.jsxs(ie, {
    ...be,
    children: [C != null && C !== "" && /* @__PURE__ */ c.jsx(le, {
      htmlFor: M && !Q ? void 0 : F,
      id: D,
      ...M && !Q && {
        component: "div"
      },
      ...Be,
      children: C
    }), M ? /* @__PURE__ */ c.jsx(Y, {
      "aria-describedby": H,
      id: F,
      labelId: D,
      value: O,
      input: ke,
      ...K,
      children: s
    }) : ke, d && /* @__PURE__ */ c.jsx(Ie, {
      id: H,
      ...pe,
      children: d
    })]
  });
}), qM = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), ss = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), td = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), ZM = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), qg = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"
})), nd = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"
})), JM = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"
})), Zg = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3"
})), Jg = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), ej = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"
})), Gl = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), tj = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), nj = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"
})), ey = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), rj = rt([/* @__PURE__ */ c.jsx("path", {
  d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"
}, "0"), /* @__PURE__ */ c.jsx("path", {
  d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"
}, "1")]), oj = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
})), ij = rt(/* @__PURE__ */ c.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), it = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
function Nr({ children: e, sx: t }) {
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
function ty({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ c.jsxs(Wt, { sx: { overflow: "hidden", ...o }, children: [
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
          typeof e == "string" ? /* @__PURE__ */ c.jsx(Nr, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ c.jsx(qe, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function ny({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ c.jsx(
    qe,
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
function sj({ ctx: e }) {
  const t = h.useMemo(
    () => tu(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ c.jsx(V2, { theme: t, children: /* @__PURE__ */ c.jsx(lj, { ctx: e }) });
}
function rd(e) {
  if (!e) return "—";
  try {
    const t = new Date(e);
    return isNaN(t.getTime()) ? e : t.toLocaleString(void 0, {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return e;
  }
}
function lj({ ctx: e }) {
  var Ln, fo, dr, fr, pr;
  const [t, n] = h.useState(0), [r, o] = h.useState(!0), [i, s] = h.useState(null), [l, a] = h.useState(null), [u, f] = h.useState([]), [m, y] = h.useState([]), [d, x] = h.useState(null), [b, C] = h.useState(null), [v, p] = h.useState(""), [S, w] = h.useState(9e3), [T, k] = h.useState(!1), [E, R] = h.useState(""), [I, L] = h.useState(null), [M, g] = h.useState(""), [j, P] = h.useState([]), [O, A] = h.useState(!1), [N, $] = h.useState(!1), z = h.useRef(null), [F, H] = h.useState(!1), [D, Z] = h.useState(""), [V, Y] = h.useState(5120), [K, Q] = h.useState(!1), [W, oe] = h.useState(null), [ie, be] = h.useState(!1), [Ce, ve] = h.useState(""), [le, Be] = h.useState(""), [Oe, Pe] = h.useState(null), [Ie, pe] = h.useState(null), [ke, Je] = h.useState(null), [_e, He] = h.useState(3600), [ze, ot] = h.useState(null), [Ae, xe] = h.useState(null), [Le, St] = h.useState(0), ee = h.useCallback(async () => {
    o(!0);
    try {
      const [B, fe, Fe, J] = await Promise.all([
        e.api("/buckets"),
        e.api("/keys"),
        e.api("/settings"),
        e.api("/meta")
      ]);
      if (B.ok) {
        const X = await B.json();
        f(X.buckets || []);
      }
      if (fe.ok) {
        const X = await fe.json();
        y(X.keys || []);
      }
      if (Fe.ok) {
        const X = await Fe.json();
        x(X), X.storage_path && p((ce) => ce || X.storage_path), X.s3_port && w((ce) => ce || X.s3_port);
      }
      if (J.ok) {
        const X = await J.json();
        C(X), p((ce) => ce || X.storage_root || "/data/storage/buckets"), w((ce) => ce || X.s3_port || 9e3);
      }
    } catch (B) {
      s(B instanceof Error ? B.message : String(B));
    } finally {
      o(!1);
    }
  }, [e]), Se = async () => {
    const B = v.trim();
    if (!B) {
      s("Bucket storage root path cannot be empty.");
      return;
    }
    k(!0);
    try {
      const fe = await e.api("/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storage_path: B,
          s3_port: Number(S) || 9e3
        })
      });
      if (!fe.ok) {
        const Fe = await fe.json().catch(() => ({}));
        throw new Error(Fe.detail ?? `HTTP ${fe.status}`);
      }
      a("Storage settings updated successfully."), await ee();
    } catch (fe) {
      s(fe instanceof Error ? fe.message : String(fe));
    } finally {
      k(!1);
    }
  };
  h.useEffect(() => {
    ee();
  }, [ee]);
  const $e = h.useCallback(async (B, fe = "") => {
    A(!0);
    try {
      const Fe = new URLSearchParams({ prefix: fe, delimiter: "/" }), J = await e.api(`/buckets/${B}/objects?${Fe.toString()}`);
      if (!J.ok)
        throw new Error(`Failed to list objects in bucket ${B}`);
      const X = await J.json();
      P(X.objects || []);
    } catch (Fe) {
      s(Fe instanceof Error ? Fe.message : String(Fe));
    } finally {
      A(!1);
    }
  }, [e]);
  h.useEffect(() => {
    I && $e(I, M);
  }, [I, M, $e]);
  const dt = async () => {
    if (D.trim())
      try {
        const B = await e.api("/buckets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: D.trim(),
            quota_mb: Number(V) || 5120,
            public_access: K
          })
        });
        if (!B.ok) {
          const fe = await B.json().catch(() => ({}));
          throw new Error(fe.detail ?? `HTTP ${B.status}`);
        }
        a(`S3 Bucket '${D}' created successfully.`), H(!1), Z(""), ee();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, Te = async () => {
    if (W)
      try {
        const B = await e.api(`/buckets/${W.name}`, { method: "DELETE" });
        if (!B.ok) {
          const fe = await B.json().catch(() => ({}));
          throw new Error(fe.detail ?? `HTTP ${B.status}`);
        }
        a(`Bucket '${W.name}' deleted.`), I === W.name && L(null), oe(null), ee();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, Kn = (B) => {
    L(B), g(""), n(1);
  }, Sn = async (B) => {
    var Fe;
    const fe = (Fe = B.target.files) == null ? void 0 : Fe[0];
    if (!(!fe || !I)) {
      $(!0);
      try {
        const J = new FormData();
        J.append("prefix", M), J.append("file", fe);
        const X = await e.api(`/buckets/${I}/objects/upload`, {
          method: "POST",
          body: J
        });
        if (!X.ok) {
          const ce = await X.json().catch(() => ({}));
          throw new Error(ce.detail ?? "Upload failed");
        }
        a(`Uploaded '${fe.name}' to ${I}.`), $e(I, M), ee();
      } catch (J) {
        s(J instanceof Error ? J.message : String(J));
      } finally {
        $(!1), z.current && (z.current.value = "");
      }
    }
  }, uo = async () => {
    if (!(!I || !Ae))
      try {
        const B = new URLSearchParams({ key: Ae });
        if (!(await e.api(`/buckets/${I}/objects?${B.toString()}`, {
          method: "DELETE"
        })).ok) throw new Error("Failed to delete object");
        a(`Deleted '${Ae}'`), xe(null), $e(I, M), ee();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, Or = async (B) => {
    if (I)
      try {
        if (!(await e.api(`/buckets/${I}/objects/acl`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            object_key: B.key,
            is_public: !B.is_public
          })
        })).ok) throw new Error("Failed to update access policy");
        a(`Object access set to ${B.is_public ? "Private" : "Public"}.`), $e(I, M);
      } catch (fe) {
        s(fe instanceof Error ? fe.message : String(fe));
      }
  }, ye = async () => {
    if (ke)
      try {
        const B = await e.api(`/buckets/${ke.bucket}/objects/presign`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            object_key: ke.key,
            expires_in: _e
          })
        });
        if (!B.ok) throw new Error("Failed to generate presigned link");
        const fe = await B.json();
        ot(fe.url);
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, Xe = async () => {
    try {
      const B = await e.api("/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: Ce.trim(),
          bucket_id: le === "" ? null : Number(le)
        })
      });
      if (!B.ok) {
        const Fe = await B.json().catch(() => ({}));
        throw new Error(Fe.detail ?? "Failed to create key");
      }
      const fe = await B.json();
      Pe({ id: fe.access_key, secret: fe.secret_key }), ve(""), Be(""), ee();
    } catch (B) {
      s(B instanceof Error ? B.message : String(B));
    }
  }, Vt = async (B) => {
    const fe = B.status === "active" ? "disabled" : "active";
    try {
      if (!(await e.api(`/keys/${B.access_key}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: fe })
      })).ok) throw new Error("Failed to update key status");
      a(`Access key is now ${fe}.`), ee();
    } catch (Fe) {
      s(Fe instanceof Error ? Fe.message : String(Fe));
    }
  }, hl = async () => {
    if (Ie)
      try {
        if (!(await e.api(`/keys/${Ie.access_key}`, { method: "DELETE" })).ok) throw new Error("Failed to delete access key");
        a(`Access key '${Ie.access_key}' deleted.`), pe(null), ee();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, Wo = h.useMemo(() => {
    if (!E) return u;
    const B = E.toLowerCase();
    return u.filter((fe) => fe.name.toLowerCase().includes(B));
  }, [u, E]), Yn = (B) => {
    var fe;
    (fe = navigator.clipboard) == null || fe.writeText(B), a("Copied to clipboard!");
  };
  return /* @__PURE__ */ c.jsxs(qe, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ c.jsxs(
      lt,
      {
        direction: { xs: "column", md: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ c.jsxs(qe, { children: [
            /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 0.5 }, children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "h5", sx: { fontWeight: 700, letterSpacing: "-0.02em" }, children: "Object Storage (S3)" }),
              /* @__PURE__ */ c.jsx(
                Lr,
                {
                  icon: /* @__PURE__ */ c.jsx(ny, { ok: !0, size: 8 }),
                  label: "S3 Active",
                  size: "small",
                  sx: { fontWeight: 600, bgcolor: "success.light", color: "success.contrastText" }
                }
              ),
              /* @__PURE__ */ c.jsx(
                Lr,
                {
                  label: `Port ${(b == null ? void 0 : b.s3_port) ?? 9e3}`,
                  size: "small",
                  variant: "outlined",
                  sx: { fontFamily: it, fontSize: "0.75rem" }
                }
              ),
              /* @__PURE__ */ c.jsx(
                Lr,
                {
                  label: "100% Isolated /opt/hostpanel",
                  size: "small",
                  color: "primary",
                  variant: "outlined",
                  sx: { fontSize: "0.75rem", fontWeight: 600 }
                }
              )
            ] }),
            /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary" }, children: "AWS S3-compatible object storage with AWS SigV4 protocol, bucket quotas, access keys & object explorer." })
          ] }),
          /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ c.jsx(
              Qe,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(qM, {}),
                onClick: () => ee(),
                disabled: r,
                children: "Refresh"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Qe,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(Jg, {}),
                onClick: () => {
                  Pe(null), be(!0);
                },
                children: "New Access Key"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Qe,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(ss, {}),
                onClick: () => H(!0),
                children: "Create Bucket"
              }
            )
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ c.jsx(ug, { severity: "error", onClose: () => s(null), children: i }),
    /* @__PURE__ */ c.jsxs(lt, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
      /* @__PURE__ */ c.jsx(Fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ c.jsxs(Dl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(Nr, { sx: { mb: 0.5 }, children: "S3 BUCKETS" }),
        /* @__PURE__ */ c.jsxs(Ee, { variant: "h6", sx: { fontWeight: 700, mb: 0.5 }, children: [
          u.length,
          " ",
          u.length === 1 ? "Bucket" : "Buckets"
        ] }),
        /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary" }, children: "Total isolated buckets" })
      ] }) }),
      /* @__PURE__ */ c.jsx(Fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ c.jsxs(Dl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(Nr, { sx: { mb: 0.5 }, children: "TOTAL OBJECTS" }),
        /* @__PURE__ */ c.jsxs(Ee, { variant: "h6", sx: { fontWeight: 700, mb: 0.5 }, children: [
          (d == null ? void 0 : d.total_objects) ?? u.reduce((B, fe) => B + (fe.object_count || 0), 0),
          " Files"
        ] }),
        /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary" }, children: "Stored across all S3 buckets" })
      ] }) }),
      /* @__PURE__ */ c.jsx(Fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ c.jsxs(Dl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(Nr, { sx: { mb: 0.5 }, children: "STORAGE USED" }),
        /* @__PURE__ */ c.jsx(Ee, { variant: "h6", sx: { fontWeight: 700, fontFamily: it, mb: 0.5 }, children: (d == null ? void 0 : d.total_size_formatted) ?? "0 B" }),
        /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary" }, children: "Under /opt/hostpanel/data/storage" })
      ] }) }),
      /* @__PURE__ */ c.jsx(Fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ c.jsxs(Dl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(Nr, { sx: { mb: 0.5 }, children: "S3 SERVICE STATUS" }),
        /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center", mb: 0.5 }, children: [
          /* @__PURE__ */ c.jsx(ny, { ok: !0, size: 10 }),
          /* @__PURE__ */ c.jsxs(Ee, { variant: "h6", sx: { fontWeight: 700, fontFamily: it }, children: [
            "Port ",
            (b == null ? void 0 : b.s3_port) ?? 9e3
          ] })
        ] }),
        /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary" }, children: "AWS SigV4 REST API Ready" })
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs(Wt, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ c.jsx(qe, { sx: { borderBottom: 1, borderColor: "divider", px: 2, pt: 1 }, children: /* @__PURE__ */ c.jsxs(
        Qg,
        {
          value: t,
          onChange: (B, fe) => n(fe),
          variant: "scrollable",
          scrollButtons: "auto",
          children: [
            /* @__PURE__ */ c.jsx(
              Zn,
              {
                icon: /* @__PURE__ */ c.jsx(nd, { fontSize: "small" }),
                iconPosition: "start",
                label: `S3 Buckets (${u.length})`
              }
            ),
            /* @__PURE__ */ c.jsx(
              Zn,
              {
                icon: /* @__PURE__ */ c.jsx(Zg, { fontSize: "small" }),
                iconPosition: "start",
                label: I ? `Browser (${I})` : "Object Browser"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Zn,
              {
                icon: /* @__PURE__ */ c.jsx(Jg, { fontSize: "small" }),
                iconPosition: "start",
                label: `Access Keys (${m.length})`
              }
            ),
            /* @__PURE__ */ c.jsx(
              Zn,
              {
                icon: /* @__PURE__ */ c.jsx(rj, { fontSize: "small" }),
                iconPosition: "start",
                label: "Connection Guide"
              }
            ),
            /* @__PURE__ */ c.jsx(
              Zn,
              {
                icon: /* @__PURE__ */ c.jsx(ey, { fontSize: "small" }),
                iconPosition: "start",
                label: "Settings & Service"
              }
            )
          ]
        }
      ) }),
      t === 0 && /* @__PURE__ */ c.jsxs(qe, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsxs(
          lt,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ c.jsx(
                ti,
                {
                  size: "small",
                  placeholder: "Search buckets by name...",
                  value: E,
                  onChange: (B) => R(B.target.value),
                  sx: { width: { xs: "100%", sm: 320 } },
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ c.jsx(fI, { position: "start", children: /* @__PURE__ */ c.jsx(ij, { fontSize: "small" }) })
                    }
                  }
                }
              ),
              /* @__PURE__ */ c.jsx(
                Qe,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ c.jsx(ss, {}),
                  onClick: () => H(!0),
                  children: "New S3 Bucket"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c.jsx(Zu, { children: /* @__PURE__ */ c.jsxs(Qu, { size: "small", children: [
          /* @__PURE__ */ c.jsx(Ju, { children: /* @__PURE__ */ c.jsxs(yr, { children: [
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Bucket Name" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Access Policy" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Storage Quota & Usage" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Objects" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "S3 URI" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Created" }),
            /* @__PURE__ */ c.jsx(we, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ c.jsx(qu, { children: Wo.length === 0 ? /* @__PURE__ */ c.jsx(yr, { children: /* @__PURE__ */ c.jsxs(we, { colSpan: 7, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No S3 buckets created yet." }),
            /* @__PURE__ */ c.jsx(
              Qe,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(ss, {}),
                onClick: () => H(!0),
                children: "Create First Bucket"
              }
            )
          ] }) }) : Wo.map((B) => {
            const fe = B.quota_mb * 1024 * 1024, Fe = Math.min(100, Math.round(B.used_bytes / (fe || 1) * 100));
            return /* @__PURE__ */ c.jsxs(yr, { hover: !0, children: [
              /* @__PURE__ */ c.jsx(we, { children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ c.jsx(nd, { fontSize: "small", sx: { color: "primary.main" } }),
                /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { fontWeight: 600, fontFamily: it }, children: B.name })
              ] }) }),
              /* @__PURE__ */ c.jsx(we, { children: /* @__PURE__ */ c.jsx(
                Lr,
                {
                  icon: B.public_access ? /* @__PURE__ */ c.jsx(nj, { fontSize: "small" }) : /* @__PURE__ */ c.jsx(tj, { fontSize: "small" }),
                  label: B.public_access ? "Public Read" : "Private",
                  size: "small",
                  color: B.public_access ? "warning" : "default",
                  sx: { fontWeight: 600, fontSize: "0.6875rem" }
                }
              ) }),
              /* @__PURE__ */ c.jsxs(we, { sx: { minWidth: 160 }, children: [
                /* @__PURE__ */ c.jsxs(qe, { sx: { display: "flex", justifyContent: "space-between", mb: 0.5 }, children: [
                  /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { fontFamily: it }, children: B.used_formatted || "0 B" }),
                  /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.secondary", fontFamily: it }, children: [
                    B.quota_mb,
                    " MB (",
                    Fe,
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ c.jsx(
                  TI,
                  {
                    variant: "determinate",
                    value: Fe,
                    color: Fe > 90 ? "error" : Fe > 75 ? "warning" : "primary",
                    sx: { height: 4, borderRadius: 2 }
                  }
                )
              ] }),
              /* @__PURE__ */ c.jsx(we, { sx: { fontFamily: it }, children: B.object_count ?? 0 }),
              /* @__PURE__ */ c.jsxs(we, { sx: { fontFamily: it, fontSize: "0.75rem", color: "text.secondary" }, children: [
                "s3://",
                B.name
              ] }),
              /* @__PURE__ */ c.jsx(we, { sx: { fontSize: "0.8125rem" }, children: rd(B.created_at) }),
              /* @__PURE__ */ c.jsx(we, { align: "right", children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ c.jsx(
                  Qe,
                  {
                    size: "small",
                    variant: "outlined",
                    onClick: () => Kn(B.name),
                    children: "Browse"
                  }
                ),
                /* @__PURE__ */ c.jsx(is, { title: "Delete bucket", children: /* @__PURE__ */ c.jsx(
                  vr,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => oe(B),
                    children: /* @__PURE__ */ c.jsx(td, { fontSize: "small" })
                  }
                ) })
              ] }) })
            ] }, B.name);
          }) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ c.jsxs(qe, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsxs(
          lt,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ c.jsxs(fa, { size: "small", sx: { minWidth: 200 }, children: [
                  /* @__PURE__ */ c.jsx(pa, { children: "Bucket" }),
                  /* @__PURE__ */ c.jsx(
                    Is,
                    {
                      value: I || "",
                      label: "Bucket",
                      onChange: (B) => {
                        L(B.target.value), g("");
                      },
                      children: u.map((B) => /* @__PURE__ */ c.jsx(yo, { value: B.name, children: B.name }, B.name))
                    }
                  )
                ] }),
                M && /* @__PURE__ */ c.jsx(
                  Qe,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ c.jsx(oj, {}),
                    onClick: () => {
                      const B = M.replace(/\/$/, "").split("/");
                      B.pop(), g(B.length > 0 ? B.join("/") + "/" : "");
                    },
                    children: "Up"
                  }
                ),
                /* @__PURE__ */ c.jsxs(Ee, { variant: "body2", sx: { fontFamily: it, fontWeight: 600 }, children: [
                  "s3://",
                  I,
                  "/",
                  M
                ] })
              ] }),
              /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ c.jsx(
                  "input",
                  {
                    type: "file",
                    ref: z,
                    style: { display: "none" },
                    onChange: Sn
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  Qe,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ c.jsx(qg, {}),
                    disabled: !I || N,
                    onClick: () => {
                      var B;
                      return (B = z.current) == null ? void 0 : B.click();
                    },
                    children: N ? "Uploading..." : "Upload Object"
                  }
                )
              ] })
            ]
          }
        ),
        I ? O ? /* @__PURE__ */ c.jsx(qe, { sx: { py: 8, textAlign: "center" }, children: /* @__PURE__ */ c.jsx(Za, { size: 32 }) }) : /* @__PURE__ */ c.jsx(Zu, { children: /* @__PURE__ */ c.jsxs(Qu, { size: "small", children: [
          /* @__PURE__ */ c.jsx(Ju, { children: /* @__PURE__ */ c.jsxs(yr, { children: [
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Name" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Size" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Type" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Access" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Last Modified" }),
            /* @__PURE__ */ c.jsx(we, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ c.jsx(qu, { children: j.length === 0 ? /* @__PURE__ */ c.jsx(yr, { children: /* @__PURE__ */ c.jsxs(we, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "This bucket prefix is empty." }),
            /* @__PURE__ */ c.jsx(
              Qe,
              {
                size: "small",
                variant: "outlined",
                startIcon: /* @__PURE__ */ c.jsx(qg, {}),
                onClick: () => {
                  var B;
                  return (B = z.current) == null ? void 0 : B.click();
                },
                children: "Upload Object Here"
              }
            )
          ] }) }) : j.map((B) => /* @__PURE__ */ c.jsxs(yr, { hover: !0, children: [
            /* @__PURE__ */ c.jsx(we, { children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              B.is_dir ? /* @__PURE__ */ c.jsx(nd, { fontSize: "small", sx: { color: "warning.main" } }) : /* @__PURE__ */ c.jsx(JM, { fontSize: "small", sx: { color: "primary.main" } }),
              B.is_dir ? /* @__PURE__ */ c.jsx(
                Qe,
                {
                  size: "small",
                  sx: { textTransform: "none", fontFamily: it, fontWeight: 600 },
                  onClick: () => g(B.key),
                  children: B.name
                }
              ) : /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { fontFamily: it }, children: B.name })
            ] }) }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontFamily: it }, children: B.size_formatted }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: B.content_type }),
            /* @__PURE__ */ c.jsx(we, { children: !B.is_dir && /* @__PURE__ */ c.jsx(
              Lr,
              {
                label: B.is_public ? "Public" : "Private",
                size: "small",
                color: B.is_public ? "warning" : "default",
                onClick: () => Or(B),
                sx: { cursor: "pointer", fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontSize: "0.8125rem" }, children: rd(B.last_modified) }),
            /* @__PURE__ */ c.jsx(we, { align: "right", children: !B.is_dir && /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ c.jsx(is, { title: "Download", children: /* @__PURE__ */ c.jsx(
                vr,
                {
                  size: "small",
                  onClick: () => {
                    window.open(
                      `/api/packages/storage/buckets/${I}/objects/download?key=${encodeURIComponent(B.key)}`,
                      "_blank"
                    );
                  },
                  children: /* @__PURE__ */ c.jsx(ZM, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(is, { title: "Share Presigned Link", children: /* @__PURE__ */ c.jsx(
                vr,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => {
                    Je({ bucket: I, key: B.key }), ot(null);
                  },
                  children: /* @__PURE__ */ c.jsx(ej, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ c.jsx(is, { title: "Delete", children: /* @__PURE__ */ c.jsx(
                vr,
                {
                  size: "small",
                  color: "error",
                  onClick: () => xe(B.key),
                  children: /* @__PURE__ */ c.jsx(td, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, B.key)) })
        ] }) }) : /* @__PURE__ */ c.jsxs(qe, { sx: { py: 8, textAlign: "center" }, children: [
          /* @__PURE__ */ c.jsx(Zg, { sx: { fontSize: 48, color: "text.disabled", mb: 1 } }),
          /* @__PURE__ */ c.jsx(Ee, { variant: "body1", sx: { color: "text.secondary" }, children: 'Select a bucket from the dropdown or click "Browse" on the Buckets tab.' })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ c.jsxs(qe, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsxs(
          lt,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary" }, children: "Access Key IDs and Secret Access Keys for AWS CLI, Boto3, and S3-compatible clients." }),
              /* @__PURE__ */ c.jsx(
                Qe,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ c.jsx(ss, {}),
                  onClick: () => {
                    Pe(null), be(!0);
                  },
                  children: "Create Access Key"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ c.jsx(Zu, { children: /* @__PURE__ */ c.jsxs(Qu, { size: "small", children: [
          /* @__PURE__ */ c.jsx(Ju, { children: /* @__PURE__ */ c.jsxs(yr, { children: [
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Access Key ID" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Label" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Scope / Bucket" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Status" }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontWeight: 600 }, children: "Created" }),
            /* @__PURE__ */ c.jsx(we, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ c.jsx(qu, { children: m.length === 0 ? /* @__PURE__ */ c.jsx(yr, { children: /* @__PURE__ */ c.jsxs(we, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No S3 access keys created yet." }),
            /* @__PURE__ */ c.jsx(
              Qe,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(ss, {}),
                onClick: () => be(!0),
                children: "Generate First Key Pair"
              }
            )
          ] }) }) : m.map((B) => /* @__PURE__ */ c.jsxs(yr, { hover: !0, children: [
            /* @__PURE__ */ c.jsx(we, { children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { fontFamily: it, fontWeight: 600 }, children: B.access_key }),
              /* @__PURE__ */ c.jsx(
                vr,
                {
                  size: "small",
                  onClick: () => Yn(B.access_key),
                  children: /* @__PURE__ */ c.jsx(Gl, { fontSize: "inherit" })
                }
              )
            ] }) }),
            /* @__PURE__ */ c.jsx(we, { children: B.label || "—" }),
            /* @__PURE__ */ c.jsx(we, { children: B.bucket_name ? /* @__PURE__ */ c.jsx(Lr, { label: B.bucket_name, size: "small", variant: "outlined" }) : /* @__PURE__ */ c.jsx(Lr, { label: "All Buckets", size: "small", color: "primary", variant: "outlined" }) }),
            /* @__PURE__ */ c.jsx(we, { children: /* @__PURE__ */ c.jsx(
              Lr,
              {
                label: B.status === "active" ? "Active" : "Disabled",
                size: "small",
                color: B.status === "active" ? "success" : "default",
                sx: { fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ c.jsx(we, { sx: { fontSize: "0.8125rem" }, children: rd(B.created_at) }),
            /* @__PURE__ */ c.jsx(we, { align: "right", children: /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ c.jsx(
                Qe,
                {
                  size: "small",
                  variant: "outlined",
                  color: B.status === "active" ? "warning" : "success",
                  onClick: () => Vt(B),
                  children: B.status === "active" ? "Disable" : "Enable"
                }
              ),
              /* @__PURE__ */ c.jsx(is, { title: "Delete key", children: /* @__PURE__ */ c.jsx(
                vr,
                {
                  size: "small",
                  color: "error",
                  onClick: () => pe(B),
                  children: /* @__PURE__ */ c.jsx(td, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, B.access_key)) })
        ] }) })
      ] }),
      t === 3 && /* @__PURE__ */ c.jsxs(qe, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsxs(qe, { sx: { mb: 2 }, children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "subtitle2", sx: { fontWeight: 700, mb: 0.5 }, children: "S3 Client Integration Details:" }),
          /* @__PURE__ */ c.jsxs(Wt, { variant: "outlined", sx: { p: 1.5, bgcolor: "background.default", fontFamily: it, fontSize: "0.8125rem" }, children: [
            /* @__PURE__ */ c.jsxs(qe, { children: [
              "Endpoint URL: ",
              /* @__PURE__ */ c.jsx("strong", { children: (b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000" })
            ] }),
            /* @__PURE__ */ c.jsxs(qe, { children: [
              "Region: ",
              /* @__PURE__ */ c.jsx("strong", { children: "us-east-1" })
            ] }),
            /* @__PURE__ */ c.jsxs(qe, { children: [
              "Protocol: ",
              /* @__PURE__ */ c.jsx("strong", { children: "HTTP / AWS SigV4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c.jsxs(
          Qg,
          {
            value: Le,
            onChange: (B, fe) => St(fe),
            sx: { borderBottom: 1, borderColor: "divider", mb: 2 },
            children: [
              /* @__PURE__ */ c.jsx(Zn, { label: "AWS CLI" }),
              /* @__PURE__ */ c.jsx(Zn, { label: "Python (boto3)" }),
              /* @__PURE__ */ c.jsx(Zn, { label: "Node.js (AWS SDK v3)" }),
              /* @__PURE__ */ c.jsx(Zn, { label: "PHP / Laravel" }),
              /* @__PURE__ */ c.jsx(Zn, { label: "Cyberduck / Rclone" })
            ]
          }
        ),
        Le === 0 && /* @__PURE__ */ c.jsxs(qe, { children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: "Configure your AWS CLI to talk to this HostPanel S3 storage instance:" }),
          /* @__PURE__ */ c.jsx(Wt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: it, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ c.jsx("pre", { style: { margin: 0 }, children: `# 1. Configure credentials
aws configure set aws_access_key_id YOUR_ACCESS_KEY
aws configure set aws_secret_access_key YOUR_SECRET_KEY
aws configure set default.region us-east-1

# 2. List buckets
aws --endpoint-url ${(b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000"} s3 ls

# 3. Copy files to bucket
aws --endpoint-url ${(b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000"} s3 cp ./file.txt s3://${((Ln = u[0]) == null ? void 0 : Ln.name) ?? "my-bucket"}/` }) })
        ] }),
        Le === 1 && /* @__PURE__ */ c.jsxs(qe, { children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: "Use Python's boto3 library to connect to HostPanel S3:" }),
          /* @__PURE__ */ c.jsx(Wt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: it, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ c.jsx("pre", { style: { margin: 0 }, children: `import boto3

s3 = boto3.client(
    "s3",
    endpoint_url="${(b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000"}",
    aws_access_key_id="YOUR_ACCESS_KEY",
    aws_secret_access_key="YOUR_SECRET_KEY",
    region_name="us-east-1",
)

# Upload file
s3.upload_file("photo.jpg", "${((fo = u[0]) == null ? void 0 : fo.name) ?? "my-bucket"}", "uploads/photo.jpg")

# List objects
response = s3.list_objects_v2(Bucket="${((dr = u[0]) == null ? void 0 : dr.name) ?? "my-bucket"}")
for item in response.get("Contents", []):
    print(item["Key"], item["Size"])` }) })
        ] }),
        Le === 2 && /* @__PURE__ */ c.jsxs(qe, { children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: "Connect using @aws-sdk/client-s3 for Node.js / TypeScript:" }),
          /* @__PURE__ */ c.jsx(Wt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: it, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ c.jsx("pre", { style: { margin: 0 }, children: `import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  endpoint: "${(b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000"}",
  region: "us-east-1",
  credentials: {
    accessKeyId: "YOUR_ACCESS_KEY",
    secretAccessKey: "YOUR_SECRET_KEY",
  },
  forcePathStyle: true,
});

// List bucket contents
const res = await client.send(new ListObjectsV2Command({ Bucket: "${((fr = u[0]) == null ? void 0 : fr.name) ?? "my-bucket"}" }));
console.log(res.Contents);` }) })
        ] }),
        Le === 3 && /* @__PURE__ */ c.jsxs(qe, { children: [
          /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: [
            "Add this disk configuration in Laravel ",
            /* @__PURE__ */ c.jsx("code", { children: "config/filesystems.php" }),
            ":"
          ] }),
          /* @__PURE__ */ c.jsx(Wt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: it, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ c.jsx("pre", { style: { margin: 0 }, children: `'hostpanel_s3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => 'us-east-1',
    'bucket' => '${((pr = u[0]) == null ? void 0 : pr.name) ?? "my-bucket"}',
    'endpoint' => '${(b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000"}',
    'use_path_style_endpoint' => true,
    'throw' => true,
],` }) })
        ] }),
        Le === 4 && /* @__PURE__ */ c.jsxs(qe, { children: [
          /* @__PURE__ */ c.jsxs(Ee, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: [
            "Rclone configuration snippet (",
            /* @__PURE__ */ c.jsx("code", { children: "~/.config/rclone/rclone.conf" }),
            "):"
          ] }),
          /* @__PURE__ */ c.jsx(Wt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: it, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ c.jsx("pre", { style: { margin: 0 }, children: `[hostpanel-s3]
type = s3
provider = Other
env_auth = false
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
endpoint = ${(b == null ? void 0 : b.s3_endpoint) ?? "http://<server-ip>:9000"}
acl = private` }) })
        ] })
      ] }),
      t === 4 && /* @__PURE__ */ c.jsx(qe, { sx: { p: 2 }, children: /* @__PURE__ */ c.jsxs(lt, { spacing: 3, sx: { maxWidth: 640 }, children: [
        /* @__PURE__ */ c.jsx(ty, { label: "S3 Storage & Protocol Configuration", children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2.5, children: [
          /* @__PURE__ */ c.jsx(
            ti,
            {
              size: "small",
              label: "Bucket Storage Root Path",
              value: v,
              onChange: (B) => p(B.target.value),
              helperText: "Filesystem path where S3 bucket directories and objects are stored (e.g. /data/storage/buckets or /opt/hostpanel/data/storage/buckets)",
              fullWidth: !0,
              sx: { "& input": { fontFamily: it, fontSize: "0.875rem" } }
            }
          ),
          /* @__PURE__ */ c.jsx(
            ti,
            {
              size: "small",
              type: "number",
              label: "S3 REST Port",
              value: S,
              onChange: (B) => w(B.target.value),
              helperText: "Port for incoming AWS S3 REST API calls (Default: 9000)",
              sx: { maxWidth: 220 }
            }
          ),
          /* @__PURE__ */ c.jsx(qe, { sx: { pt: 1 }, children: /* @__PURE__ */ c.jsx(
            Qe,
            {
              variant: "contained",
              size: "small",
              disabled: T || !v.trim(),
              onClick: Se,
              startIcon: T ? /* @__PURE__ */ c.jsx(Za, { size: 16, color: "inherit" }) : /* @__PURE__ */ c.jsx(ey, {}),
              children: T ? "Saving Settings..." : "Save Settings"
            }
          ) })
        ] }) }),
        /* @__PURE__ */ c.jsxs(ty, { label: "Storage Overview & System Isolation", children: [
          /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { color: "text.secondary", mb: 1.5 }, children: "HostPanel Object Storage is self-contained with isolated runtime permissions:" }),
          /* @__PURE__ */ c.jsxs(qe, { component: "ul", sx: { pl: 2.5, m: 0, fontSize: "0.8125rem", fontFamily: it, lineHeight: 1.8 }, children: [
            /* @__PURE__ */ c.jsxs("li", { children: [
              "Active Storage Root: ",
              /* @__PURE__ */ c.jsx("strong", { children: (d == null ? void 0 : d.storage_path) || (b == null ? void 0 : b.storage_root) || "/data/storage/buckets" })
            ] }),
            /* @__PURE__ */ c.jsxs("li", { children: [
              "Total Buckets: ",
              /* @__PURE__ */ c.jsx("strong", { children: (d == null ? void 0 : d.bucket_count) ?? u.length })
            ] }),
            /* @__PURE__ */ c.jsxs("li", { children: [
              "Total Disk Used: ",
              /* @__PURE__ */ c.jsx("strong", { children: (d == null ? void 0 : d.total_size_formatted) || "0 B" }),
              " (",
              (d == null ? void 0 : d.total_objects) ?? 0,
              " objects)"
            ] }),
            /* @__PURE__ */ c.jsx("li", { children: "SQLite Database: /opt/hostpanel/data/storage/storage.db" }),
            /* @__PURE__ */ c.jsx("li", { children: "Daemon Service: hostpanel-storaged.service (hp-storage)" }),
            /* @__PURE__ */ c.jsxs("li", { children: [
              "S3 Protocol: AWS SigV4 Native on port ",
              (b == null ? void 0 : b.s3_port) ?? 9e3
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs(qo, { open: F, onClose: () => H(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(ei, { children: "Create S3 Bucket" }),
      /* @__PURE__ */ c.jsx(Jo, { children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ c.jsx(
          ti,
          {
            size: "small",
            label: "Bucket Name",
            placeholder: "e.g. static-assets",
            value: D,
            onChange: (B) => Z(B.target.value.toLowerCase().replace(/[^a-z0-9.-]/g, "")),
            helperText: "Only lowercase letters, numbers, hyphens, and periods.",
            fullWidth: !0
          }
        ),
        /* @__PURE__ */ c.jsx(
          ti,
          {
            size: "small",
            type: "number",
            label: "Storage Quota (MB)",
            value: V,
            onChange: (B) => Y(Number(B.target.value)),
            helperText: "Maximum allowed storage size for this bucket (e.g. 5120 MB = 5 GB)",
            fullWidth: !0
          }
        ),
        /* @__PURE__ */ c.jsx(
          YP,
          {
            control: /* @__PURE__ */ c.jsx(
              oM,
              {
                checked: K,
                onChange: (B) => Q(B.target.checked)
              }
            ),
            label: /* @__PURE__ */ c.jsxs(qe, { children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { fontWeight: 600 }, children: "Public Read Access" }),
              /* @__PURE__ */ c.jsx(Ee, { variant: "caption", sx: { color: "text.secondary" }, children: "Allow anonymous read access without AWS signature." })
            ] })
          }
        )
      ] }) }),
      /* @__PURE__ */ c.jsxs(Zo, { children: [
        /* @__PURE__ */ c.jsx(Qe, { onClick: () => H(!1), children: "Cancel" }),
        /* @__PURE__ */ c.jsx(Qe, { variant: "contained", onClick: dt, disabled: !D.trim(), children: "Create Bucket" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(qo, { open: !!W, onClose: () => oe(null), children: [
      /* @__PURE__ */ c.jsx(ei, { children: "Delete S3 Bucket" }),
      /* @__PURE__ */ c.jsx(Jo, { children: /* @__PURE__ */ c.jsxs(Xu, { children: [
        "Are you sure you want to delete bucket ",
        /* @__PURE__ */ c.jsx("strong", { children: W == null ? void 0 : W.name }),
        "? This will permanently remove all stored files and records inside this bucket!"
      ] }) }),
      /* @__PURE__ */ c.jsxs(Zo, { children: [
        /* @__PURE__ */ c.jsx(Qe, { onClick: () => oe(null), children: "Cancel" }),
        /* @__PURE__ */ c.jsx(Qe, { color: "error", variant: "contained", onClick: Te, children: "Delete Bucket" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(qo, { open: ie, onClose: () => be(!1), maxWidth: "sm", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(ei, { children: "Create S3 Access Key" }),
      /* @__PURE__ */ c.jsx(Jo, { children: Oe ? /* @__PURE__ */ c.jsxs(lt, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ c.jsxs(ug, { severity: "warning", children: [
          "Save your ",
          /* @__PURE__ */ c.jsx("strong", { children: "Secret Access Key" }),
          " now! For security reasons, it cannot be retrieved again after this dialog is closed."
        ] }),
        /* @__PURE__ */ c.jsxs(Wt, { variant: "outlined", sx: { p: 2, bgcolor: "background.default" }, children: [
          /* @__PURE__ */ c.jsxs(qe, { sx: { mb: 1.5 }, children: [
            /* @__PURE__ */ c.jsx(Nr, { children: "ACCESS KEY ID" }),
            /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "body1", sx: { fontFamily: it, fontWeight: 700 }, children: Oe.id }),
              /* @__PURE__ */ c.jsx(vr, { size: "small", onClick: () => Yn(Oe.id), children: /* @__PURE__ */ c.jsx(Gl, { fontSize: "small" }) })
            ] })
          ] }),
          /* @__PURE__ */ c.jsxs(qe, { children: [
            /* @__PURE__ */ c.jsx(Nr, { children: "SECRET ACCESS KEY" }),
            /* @__PURE__ */ c.jsxs(lt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ c.jsx(Ee, { variant: "body1", sx: { fontFamily: it, fontWeight: 700, wordBreak: "break-all" }, children: Oe.secret }),
              /* @__PURE__ */ c.jsx(vr, { size: "small", onClick: () => Yn(Oe.secret), children: /* @__PURE__ */ c.jsx(Gl, { fontSize: "small" }) })
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ c.jsxs(lt, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ c.jsx(
          ti,
          {
            size: "small",
            label: "Key Label / Description",
            placeholder: "e.g. WordPress Uploads, Nextcloud Key",
            value: Ce,
            onChange: (B) => ve(B.target.value),
            fullWidth: !0
          }
        ),
        /* @__PURE__ */ c.jsxs(fa, { size: "small", fullWidth: !0, children: [
          /* @__PURE__ */ c.jsx(pa, { children: "Bucket Scope" }),
          /* @__PURE__ */ c.jsxs(
            Is,
            {
              value: le,
              label: "Bucket Scope",
              onChange: (B) => Be(B.target.value),
              children: [
                /* @__PURE__ */ c.jsx(yo, { value: "", children: /* @__PURE__ */ c.jsx("em", { children: "All Buckets (Global S3 Access)" }) }),
                u.map((B) => /* @__PURE__ */ c.jsx(yo, { value: B.id, children: B.name }, B.id))
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ c.jsx(Zo, { children: Oe ? /* @__PURE__ */ c.jsx(Qe, { variant: "contained", onClick: () => be(!1), children: "Done & Closed" }) : /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
        /* @__PURE__ */ c.jsx(Qe, { onClick: () => be(!1), children: "Cancel" }),
        /* @__PURE__ */ c.jsx(Qe, { variant: "contained", onClick: Xe, children: "Generate Key Pair" })
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs(qo, { open: !!Ie, onClose: () => pe(null), children: [
      /* @__PURE__ */ c.jsx(ei, { children: "Revoke Access Key" }),
      /* @__PURE__ */ c.jsx(Jo, { children: /* @__PURE__ */ c.jsxs(Xu, { children: [
        "Are you sure you want to revoke S3 access key ",
        /* @__PURE__ */ c.jsx("strong", { children: Ie == null ? void 0 : Ie.access_key }),
        "? Any applications currently using this key will immediately lose access."
      ] }) }),
      /* @__PURE__ */ c.jsxs(Zo, { children: [
        /* @__PURE__ */ c.jsx(Qe, { onClick: () => pe(null), children: "Cancel" }),
        /* @__PURE__ */ c.jsx(Qe, { color: "error", variant: "contained", onClick: hl, children: "Revoke Key" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(qo, { open: !!ke, onClose: () => Je(null), maxWidth: "sm", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(ei, { children: "Share Presigned Download URL" }),
      /* @__PURE__ */ c.jsx(Jo, { children: /* @__PURE__ */ c.jsxs(lt, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ c.jsxs(Ee, { variant: "body2", children: [
          "Generate a time-limited shareable download link for:",
          /* @__PURE__ */ c.jsx("br", {}),
          /* @__PURE__ */ c.jsx("strong", { style: { fontFamily: it }, children: ke == null ? void 0 : ke.key })
        ] }),
        /* @__PURE__ */ c.jsxs(fa, { size: "small", fullWidth: !0, children: [
          /* @__PURE__ */ c.jsx(pa, { children: "Expiration Duration" }),
          /* @__PURE__ */ c.jsxs(
            Is,
            {
              value: _e,
              label: "Expiration Duration",
              onChange: (B) => He(Number(B.target.value)),
              children: [
                /* @__PURE__ */ c.jsx(yo, { value: 3600, children: "1 Hour" }),
                /* @__PURE__ */ c.jsx(yo, { value: 86400, children: "24 Hours (1 Day)" }),
                /* @__PURE__ */ c.jsx(yo, { value: 604800, children: "7 Days" }),
                /* @__PURE__ */ c.jsx(yo, { value: 0, children: "Never Expire (Permanent)" })
              ]
            }
          )
        ] }),
        ze && /* @__PURE__ */ c.jsxs(qe, { children: [
          /* @__PURE__ */ c.jsx(Nr, { sx: { mb: 0.5 }, children: "PRESIGNED URL" }),
          /* @__PURE__ */ c.jsx(Wt, { variant: "outlined", sx: { p: 1.5, bgcolor: "background.default" }, children: /* @__PURE__ */ c.jsx(Ee, { variant: "body2", sx: { fontFamily: it, fontSize: "0.75rem", wordBreak: "break-all" }, children: ze }) }),
          /* @__PURE__ */ c.jsx(
            Qe,
            {
              size: "small",
              variant: "outlined",
              startIcon: /* @__PURE__ */ c.jsx(Gl, {}),
              onClick: () => Yn(ze),
              sx: { mt: 1 },
              children: "Copy URL"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ c.jsxs(Zo, { children: [
        /* @__PURE__ */ c.jsx(Qe, { onClick: () => Je(null), children: "Close" }),
        !ze && /* @__PURE__ */ c.jsx(Qe, { variant: "contained", onClick: ye, children: "Generate Link" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(qo, { open: !!Ae, onClose: () => xe(null), children: [
      /* @__PURE__ */ c.jsx(ei, { children: "Delete Object" }),
      /* @__PURE__ */ c.jsx(Jo, { children: /* @__PURE__ */ c.jsxs(Xu, { children: [
        "Are you sure you want to delete object ",
        /* @__PURE__ */ c.jsx("strong", { children: Ae }),
        " from ",
        I,
        "?"
      ] }) }),
      /* @__PURE__ */ c.jsxs(Zo, { children: [
        /* @__PURE__ */ c.jsx(Qe, { onClick: () => xe(null), children: "Cancel" }),
        /* @__PURE__ */ c.jsx(Qe, { color: "error", variant: "contained", onClick: uo, children: "Delete Object" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(
      V5,
      {
        open: !!l,
        autoHideDuration: 3e3,
        onClose: () => a(null),
        message: l
      }
    )
  ] });
}
let ec = null;
function aj(e, t) {
  ec = y0(e), ec.render(
    /* @__PURE__ */ c.jsx(h.StrictMode, { children: /* @__PURE__ */ c.jsx(sj, { ctx: t }) })
  );
}
function cj() {
  const e = ec;
  ec = null, e && queueMicrotask(() => e.unmount());
}
const dj = { mount: aj, unmount: cj };
export {
  dj as default,
  aj as mount,
  cj as unmount
};
//# sourceMappingURL=main.js.map
