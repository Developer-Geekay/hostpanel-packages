var i1 = Object.defineProperty;
var s1 = (e, t, n) => t in e ? i1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Xi = (e, t, n) => s1(e, typeof t != "symbol" ? t + "" : t, n);
function l1(e, t) {
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
function a1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ty = { exports: {} }, tc = {}, ny = { exports: {} }, Re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sl = Symbol.for("react.element"), c1 = Symbol.for("react.portal"), u1 = Symbol.for("react.fragment"), d1 = Symbol.for("react.strict_mode"), f1 = Symbol.for("react.profiler"), p1 = Symbol.for("react.provider"), m1 = Symbol.for("react.context"), h1 = Symbol.for("react.forward_ref"), g1 = Symbol.for("react.suspense"), y1 = Symbol.for("react.memo"), v1 = Symbol.for("react.lazy"), om = Symbol.iterator;
function x1(e) {
  return e === null || typeof e != "object" ? null : (e = om && e[om] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ry = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, oy = Object.assign, iy = {};
function _i(e, t, n) {
  this.props = e, this.context = t, this.refs = iy, this.updater = n || ry;
}
_i.prototype.isReactComponent = {};
_i.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_i.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function sy() {
}
sy.prototype = _i.prototype;
function Sf(e, t, n) {
  this.props = e, this.context = t, this.refs = iy, this.updater = n || ry;
}
var bf = Sf.prototype = new sy();
bf.constructor = Sf;
oy(bf, _i.prototype);
bf.isPureReactComponent = !0;
var im = Array.isArray, ly = Object.prototype.hasOwnProperty, wf = { current: null }, ay = { key: !0, ref: !0, __self: !0, __source: !0 };
function cy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ly.call(t, r) && !ay.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: sl, type: e, key: i, ref: s, props: o, _owner: wf.current };
}
function S1(e, t) {
  return { $$typeof: sl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Cf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sl;
}
function b1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var sm = /\/+/g;
function pu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? b1("" + e.key) : t.toString(36);
}
function Jl(e, t, n, r, o) {
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
        case sl:
        case c1:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + pu(s, 0) : r, im(o) ? (n = "", e != null && (n = e.replace(sm, "$&/") + "/"), Jl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Cf(o) && (o = S1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(sm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", im(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + pu(i, l);
    s += Jl(i, t, n, a, o);
  }
  else if (a = x1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + pu(i, l++), s += Jl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Cl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Jl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function w1(e) {
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
var tn = { current: null }, ea = { transition: null }, C1 = { ReactCurrentDispatcher: tn, ReactCurrentBatchConfig: ea, ReactCurrentOwner: wf };
function uy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Re.Children = { map: Cl, forEach: function(e, t, n) {
  Cl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Cl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Cl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Cf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Re.Component = _i;
Re.Fragment = u1;
Re.Profiler = f1;
Re.PureComponent = Sf;
Re.StrictMode = d1;
Re.Suspense = g1;
Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C1;
Re.act = uy;
Re.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = oy({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = wf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ly.call(t, a) && !ay.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: sl, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Re.createContext = function(e) {
  return e = { $$typeof: m1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: p1, _context: e }, e.Consumer = e;
};
Re.createElement = cy;
Re.createFactory = function(e) {
  var t = cy.bind(null, e);
  return t.type = e, t;
};
Re.createRef = function() {
  return { current: null };
};
Re.forwardRef = function(e) {
  return { $$typeof: h1, render: e };
};
Re.isValidElement = Cf;
Re.lazy = function(e) {
  return { $$typeof: v1, _payload: { _status: -1, _result: e }, _init: w1 };
};
Re.memo = function(e, t) {
  return { $$typeof: y1, type: e, compare: t === void 0 ? null : t };
};
Re.startTransition = function(e) {
  var t = ea.transition;
  ea.transition = {};
  try {
    e();
  } finally {
    ea.transition = t;
  }
};
Re.unstable_act = uy;
Re.useCallback = function(e, t) {
  return tn.current.useCallback(e, t);
};
Re.useContext = function(e) {
  return tn.current.useContext(e);
};
Re.useDebugValue = function() {
};
Re.useDeferredValue = function(e) {
  return tn.current.useDeferredValue(e);
};
Re.useEffect = function(e, t) {
  return tn.current.useEffect(e, t);
};
Re.useId = function() {
  return tn.current.useId();
};
Re.useImperativeHandle = function(e, t, n) {
  return tn.current.useImperativeHandle(e, t, n);
};
Re.useInsertionEffect = function(e, t) {
  return tn.current.useInsertionEffect(e, t);
};
Re.useLayoutEffect = function(e, t) {
  return tn.current.useLayoutEffect(e, t);
};
Re.useMemo = function(e, t) {
  return tn.current.useMemo(e, t);
};
Re.useReducer = function(e, t, n) {
  return tn.current.useReducer(e, t, n);
};
Re.useRef = function(e) {
  return tn.current.useRef(e);
};
Re.useState = function(e) {
  return tn.current.useState(e);
};
Re.useSyncExternalStore = function(e, t, n) {
  return tn.current.useSyncExternalStore(e, t, n);
};
Re.useTransition = function() {
  return tn.current.useTransition();
};
Re.version = "18.3.1";
ny.exports = Re;
var p = ny.exports;
const dy = /* @__PURE__ */ a1(p), ya = /* @__PURE__ */ l1({
  __proto__: null,
  default: dy
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
var k1 = p, E1 = Symbol.for("react.element"), T1 = Symbol.for("react.fragment"), R1 = Object.prototype.hasOwnProperty, P1 = k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, M1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function fy(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) R1.call(t, r) && !M1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: E1, type: e, key: i, ref: s, props: o, _owner: P1.current };
}
tc.Fragment = T1;
tc.jsx = fy;
tc.jsxs = fy;
ty.exports = tc;
var u = ty.exports, py = { exports: {} }, Cn = {}, my = { exports: {} }, hy = {};
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
  function t($, B) {
    var F = $.length;
    $.push(B);
    e: for (; 0 < F; ) {
      var U = F - 1 >>> 1, _ = $[U];
      if (0 < o(_, B)) $[U] = B, $[F] = _, F = U;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var B = $[0], F = $.pop();
    if (F !== B) {
      $[0] = F;
      e: for (var U = 0, _ = $.length, X = _ >>> 1; U < X; ) {
        var V = 2 * (U + 1) - 1, J = $[V], G = V + 1, Q = $[G];
        if (0 > o(J, F)) G < _ && 0 > o(Q, J) ? ($[U] = Q, $[G] = F, U = G) : ($[U] = J, $[V] = F, U = V);
        else if (G < _ && 0 > o(Q, F)) $[U] = Q, $[G] = F, U = G;
        else break e;
      }
    }
    return B;
  }
  function o($, B) {
    var F = $.sortIndex - B.sortIndex;
    return F !== 0 ? F : $.id - B.id;
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
  var a = [], c = [], d = 1, m = null, v = 3, f = !1, x = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S($) {
    for (var B = n(c); B !== null; ) {
      if (B.callback === null) r(c);
      else if (B.startTime <= $) r(c), B.sortIndex = B.expirationTime, t(a, B);
      else break;
      B = n(c);
    }
  }
  function w($) {
    if (b = !1, S($), !x) if (n(a) !== null) x = !0, A(E);
    else {
      var B = n(c);
      B !== null && L(w, B.startTime - $);
    }
  }
  function E($, B) {
    x = !1, b && (b = !1, g(T), T = -1), f = !0;
    var F = v;
    try {
      for (S(B), m = n(a); m !== null && (!(m.expirationTime > B) || $ && !I()); ) {
        var U = m.callback;
        if (typeof U == "function") {
          m.callback = null, v = m.priorityLevel;
          var _ = U(m.expirationTime <= B);
          B = e.unstable_now(), typeof _ == "function" ? m.callback = _ : m === n(a) && r(a), S(B);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var X = !0;
      else {
        var V = n(c);
        V !== null && L(w, V.startTime - B), X = !1;
      }
      return X;
    } finally {
      m = null, v = F, f = !1;
    }
  }
  var k = !1, R = null, T = -1, O = 5, N = -1;
  function I() {
    return !(e.unstable_now() - N < O);
  }
  function y() {
    if (R !== null) {
      var $ = e.unstable_now();
      N = $;
      var B = !0;
      try {
        B = R(!0, $);
      } finally {
        B ? j() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var j;
  if (typeof h == "function") j = function() {
    h(y);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), M = P.port2;
    P.port1.onmessage = y, j = function() {
      M.postMessage(null);
    };
  } else j = function() {
    C(y, 0);
  };
  function A($) {
    R = $, k || (k = !0, j());
  }
  function L($, B) {
    T = C(function() {
      $(e.unstable_now());
    }, B);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    x || f || (x = !0, A(E));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = v;
    }
    var F = v;
    v = B;
    try {
      return $();
    } finally {
      v = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function($, B) {
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
    var F = v;
    v = $;
    try {
      return B();
    } finally {
      v = F;
    }
  }, e.unstable_scheduleCallback = function($, B, F) {
    var U = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? U + F : U) : F = U, $) {
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
    return _ = F + _, $ = { id: d++, callback: B, priorityLevel: $, startTime: F, expirationTime: _, sortIndex: -1 }, F > U ? ($.sortIndex = F, t(c, $), n(a) === null && $ === n(c) && (b ? (g(T), T = -1) : b = !0, L(w, F - U))) : ($.sortIndex = _, t(a, $), x || f || (x = !0, A(E))), $;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function($) {
    var B = v;
    return function() {
      var F = v;
      v = B;
      try {
        return $.apply(this, arguments);
      } finally {
        v = F;
      }
    };
  };
})(hy);
my.exports = hy;
var I1 = my.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $1 = p, bn = I1;
function H(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var gy = /* @__PURE__ */ new Set(), js = {};
function Vo(e, t) {
  Ri(e, t), Ri(e + "Capture", t);
}
function Ri(e, t) {
  for (js[e] = t, e = 0; e < t.length; e++) gy.add(t[e]);
}
var Pr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nd = Object.prototype.hasOwnProperty, j1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, lm = {}, am = {};
function O1(e) {
  return nd.call(am, e) ? !0 : nd.call(lm, e) ? !1 : j1.test(e) ? am[e] = !0 : (lm[e] = !0, !1);
}
function A1(e, t, n, r) {
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
function N1(e, t, n, r) {
  if (t === null || typeof t > "u" || A1(e, t, n, r)) return !0;
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
function nn(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Dt[e] = new nn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Dt[t] = new nn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Dt[e] = new nn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Dt[e] = new nn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Dt[e] = new nn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Dt[e] = new nn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Dt[e] = new nn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Dt[e] = new nn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Dt[e] = new nn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var kf = /[\-:]([a-z])/g;
function Ef(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    kf,
    Ef
  );
  Dt[t] = new nn(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(kf, Ef);
  Dt[t] = new nn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(kf, Ef);
  Dt[t] = new nn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Dt[e] = new nn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Dt.xlinkHref = new nn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Dt[e] = new nn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tf(e, t, n, r) {
  var o = Dt.hasOwnProperty(t) ? Dt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (N1(t, n, o, r) && (n = null), r || o === null ? O1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nr = $1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kl = Symbol.for("react.element"), ii = Symbol.for("react.portal"), si = Symbol.for("react.fragment"), Rf = Symbol.for("react.strict_mode"), rd = Symbol.for("react.profiler"), yy = Symbol.for("react.provider"), vy = Symbol.for("react.context"), Pf = Symbol.for("react.forward_ref"), od = Symbol.for("react.suspense"), id = Symbol.for("react.suspense_list"), Mf = Symbol.for("react.memo"), Kr = Symbol.for("react.lazy"), xy = Symbol.for("react.offscreen"), cm = Symbol.iterator;
function qi(e) {
  return e === null || typeof e != "object" ? null : (e = cm && e[cm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var pt = Object.assign, mu;
function ds(e) {
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
    hu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ds(e) : "";
}
function L1(e) {
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
      return e = gu(e.type, !1), e;
    case 11:
      return e = gu(e.type.render, !1), e;
    case 1:
      return e = gu(e.type, !0), e;
    default:
      return "";
  }
}
function sd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case si:
      return "Fragment";
    case ii:
      return "Portal";
    case rd:
      return "Profiler";
    case Rf:
      return "StrictMode";
    case od:
      return "Suspense";
    case id:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case vy:
      return (e.displayName || "Context") + ".Consumer";
    case yy:
      return (e._context.displayName || "Context") + ".Provider";
    case Pf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Mf:
      return t = e.displayName || null, t !== null ? t : sd(e.type) || "Memo";
    case Kr:
      t = e._payload, e = e._init;
      try {
        return sd(e(t));
      } catch {
      }
  }
  return null;
}
function z1(e) {
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
      return sd(t);
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
function lo(e) {
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
function Sy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function B1(e) {
  var t = Sy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function El(e) {
  e._valueTracker || (e._valueTracker = B1(e));
}
function by(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function va(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ld(e, t) {
  var n = t.checked;
  return pt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function um(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = lo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function wy(e, t) {
  t = t.checked, t != null && Tf(e, "checked", t, !1);
}
function ad(e, t) {
  wy(e, t);
  var n = lo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? cd(e, t.type, n) : t.hasOwnProperty("defaultValue") && cd(e, t.type, lo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function dm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function cd(e, t, n) {
  (t !== "number" || va(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var fs = Array.isArray;
function vi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + lo(n), t = null, o = 0; o < e.length; o++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(H(91));
  return pt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(H(92));
      if (fs(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: lo(n) };
}
function Cy(e, t) {
  var n = lo(t.value), r = lo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ky(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function dd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? ky(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Tl, Ey = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Tl = Tl || document.createElement("div"), Tl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Tl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, D1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ys).forEach(function(e) {
  D1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ys[t] = ys[e];
  });
});
function Ty(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ys.hasOwnProperty(e) && ys[e] ? ("" + t).trim() : t + "px";
}
function Ry(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Ty(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var F1 = pt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function fd(e, t) {
  if (t) {
    if (F1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(H(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(H(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(H(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(H(62));
  }
}
function pd(e, t) {
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
var md = null;
function If(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hd = null, xi = null, Si = null;
function mm(e) {
  if (e = cl(e)) {
    if (typeof hd != "function") throw Error(H(280));
    var t = e.stateNode;
    t && (t = sc(t), hd(e.stateNode, e.type, t));
  }
}
function Py(e) {
  xi ? Si ? Si.push(e) : Si = [e] : xi = e;
}
function My() {
  if (xi) {
    var e = xi, t = Si;
    if (Si = xi = null, mm(e), t) for (e = 0; e < t.length; e++) mm(t[e]);
  }
}
function Iy(e, t) {
  return e(t);
}
function $y() {
}
var yu = !1;
function jy(e, t, n) {
  if (yu) return e(t, n);
  yu = !0;
  try {
    return Iy(e, t, n);
  } finally {
    yu = !1, (xi !== null || Si !== null) && ($y(), My());
  }
}
function As(e, t) {
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
  if (n && typeof n != "function") throw Error(H(231, t, typeof n));
  return n;
}
var gd = !1;
if (Pr) try {
  var Zi = {};
  Object.defineProperty(Zi, "passive", { get: function() {
    gd = !0;
  } }), window.addEventListener("test", Zi, Zi), window.removeEventListener("test", Zi, Zi);
} catch {
  gd = !1;
}
function _1(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var vs = !1, xa = null, Sa = !1, yd = null, W1 = { onError: function(e) {
  vs = !0, xa = e;
} };
function U1(e, t, n, r, o, i, s, l, a) {
  vs = !1, xa = null, _1.apply(W1, arguments);
}
function H1(e, t, n, r, o, i, s, l, a) {
  if (U1.apply(this, arguments), vs) {
    if (vs) {
      var c = xa;
      vs = !1, xa = null;
    } else throw Error(H(198));
    Sa || (Sa = !0, yd = c);
  }
}
function Ko(e) {
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
function Oy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function hm(e) {
  if (Ko(e) !== e) throw Error(H(188));
}
function V1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Ko(e), t === null) throw Error(H(188));
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
function Ay(e) {
  return e = V1(e), e !== null ? Ny(e) : null;
}
function Ny(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ny(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ly = bn.unstable_scheduleCallback, gm = bn.unstable_cancelCallback, K1 = bn.unstable_shouldYield, Y1 = bn.unstable_requestPaint, vt = bn.unstable_now, G1 = bn.unstable_getCurrentPriorityLevel, $f = bn.unstable_ImmediatePriority, zy = bn.unstable_UserBlockingPriority, ba = bn.unstable_NormalPriority, Q1 = bn.unstable_LowPriority, By = bn.unstable_IdlePriority, nc = null, fr = null;
function X1(e) {
  if (fr && typeof fr.onCommitFiberRoot == "function") try {
    fr.onCommitFiberRoot(nc, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Jn = Math.clz32 ? Math.clz32 : J1, q1 = Math.log, Z1 = Math.LN2;
function J1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (q1(e) / Z1 | 0) | 0;
}
var Rl = 64, Pl = 4194304;
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
function wa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = ps(l) : (i &= s, i !== 0 && (r = ps(i)));
  } else s = n & ~o, s !== 0 ? r = ps(s) : i !== 0 && (r = ps(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Jn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function eS(e, t) {
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
function tS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Jn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = eS(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function vd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Dy() {
  var e = Rl;
  return Rl <<= 1, !(Rl & 4194240) && (Rl = 64), e;
}
function vu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ll(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Jn(t), e[t] = n;
}
function nS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Jn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function jf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Jn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ke = 0;
function Fy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _y, Of, Wy, Uy, Hy, xd = !1, Ml = [], Zr = null, Jr = null, eo = null, Ns = /* @__PURE__ */ new Map(), Ls = /* @__PURE__ */ new Map(), Gr = [], rS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ym(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Zr = null;
      break;
    case "dragenter":
    case "dragleave":
      Jr = null;
      break;
    case "mouseover":
    case "mouseout":
      eo = null;
      break;
    case "pointerover":
    case "pointerout":
      Ns.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ls.delete(t.pointerId);
  }
}
function Ji(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = cl(t), t !== null && Of(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function oS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Zr = Ji(Zr, e, t, n, r, o), !0;
    case "dragenter":
      return Jr = Ji(Jr, e, t, n, r, o), !0;
    case "mouseover":
      return eo = Ji(eo, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ns.set(i, Ji(Ns.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ls.set(i, Ji(Ls.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Vy(e) {
  var t = Po(e.target);
  if (t !== null) {
    var n = Ko(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Oy(n), t !== null) {
          e.blockedOn = t, Hy(e.priority, function() {
            Wy(n);
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
function ta(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      md = r, n.target.dispatchEvent(r), md = null;
    } else return t = cl(n), t !== null && Of(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function vm(e, t, n) {
  ta(e) && n.delete(t);
}
function iS() {
  xd = !1, Zr !== null && ta(Zr) && (Zr = null), Jr !== null && ta(Jr) && (Jr = null), eo !== null && ta(eo) && (eo = null), Ns.forEach(vm), Ls.forEach(vm);
}
function es(e, t) {
  e.blockedOn === t && (e.blockedOn = null, xd || (xd = !0, bn.unstable_scheduleCallback(bn.unstable_NormalPriority, iS)));
}
function zs(e) {
  function t(o) {
    return es(o, e);
  }
  if (0 < Ml.length) {
    es(Ml[0], e);
    for (var n = 1; n < Ml.length; n++) {
      var r = Ml[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zr !== null && es(Zr, e), Jr !== null && es(Jr, e), eo !== null && es(eo, e), Ns.forEach(t), Ls.forEach(t), n = 0; n < Gr.length; n++) r = Gr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gr.length && (n = Gr[0], n.blockedOn === null); ) Vy(n), n.blockedOn === null && Gr.shift();
}
var bi = Nr.ReactCurrentBatchConfig, Ca = !0;
function sS(e, t, n, r) {
  var o = Ke, i = bi.transition;
  bi.transition = null;
  try {
    Ke = 1, Af(e, t, n, r);
  } finally {
    Ke = o, bi.transition = i;
  }
}
function lS(e, t, n, r) {
  var o = Ke, i = bi.transition;
  bi.transition = null;
  try {
    Ke = 4, Af(e, t, n, r);
  } finally {
    Ke = o, bi.transition = i;
  }
}
function Af(e, t, n, r) {
  if (Ca) {
    var o = Sd(e, t, n, r);
    if (o === null) Pu(e, t, r, ka, n), ym(e, r);
    else if (oS(o, e, t, n, r)) r.stopPropagation();
    else if (ym(e, r), t & 4 && -1 < rS.indexOf(e)) {
      for (; o !== null; ) {
        var i = cl(o);
        if (i !== null && _y(i), i = Sd(e, t, n, r), i === null && Pu(e, t, r, ka, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Pu(e, t, r, null, n);
  }
}
var ka = null;
function Sd(e, t, n, r) {
  if (ka = null, e = If(r), e = Po(e), e !== null) if (t = Ko(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Oy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ka = e, null;
}
function Ky(e) {
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
      switch (G1()) {
        case $f:
          return 1;
        case zy:
          return 4;
        case ba:
        case Q1:
          return 16;
        case By:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null, Nf = null, na = null;
function Yy() {
  if (na) return na;
  var e, t = Nf, n = t.length, r, o = "value" in Xr ? Xr.value : Xr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return na = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ra(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Il() {
  return !0;
}
function xm() {
  return !1;
}
function kn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Il : xm, this.isPropagationStopped = xm, this;
  }
  return pt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Il);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Il);
  }, persist: function() {
  }, isPersistent: Il }), t;
}
var Wi = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lf = kn(Wi), al = pt({}, Wi, { view: 0, detail: 0 }), aS = kn(al), xu, Su, ts, rc = pt({}, al, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ts && (ts && e.type === "mousemove" ? (xu = e.screenX - ts.screenX, Su = e.screenY - ts.screenY) : Su = xu = 0, ts = e), xu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Su;
} }), Sm = kn(rc), cS = pt({}, rc, { dataTransfer: 0 }), uS = kn(cS), dS = pt({}, al, { relatedTarget: 0 }), bu = kn(dS), fS = pt({}, Wi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pS = kn(fS), mS = pt({}, Wi, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hS = kn(mS), gS = pt({}, Wi, { data: 0 }), bm = kn(gS), yS = {
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
}, vS = {
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
}, xS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function SS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xS[e]) ? !!t[e] : !1;
}
function zf() {
  return SS;
}
var bS = pt({}, al, { key: function(e) {
  if (e.key) {
    var t = yS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ra(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zf, charCode: function(e) {
  return e.type === "keypress" ? ra(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ra(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), wS = kn(bS), CS = pt({}, rc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wm = kn(CS), kS = pt({}, al, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zf }), ES = kn(kS), TS = pt({}, Wi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), RS = kn(TS), PS = pt({}, rc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), MS = kn(PS), IS = [9, 13, 27, 32], Bf = Pr && "CompositionEvent" in window, xs = null;
Pr && "documentMode" in document && (xs = document.documentMode);
var $S = Pr && "TextEvent" in window && !xs, Gy = Pr && (!Bf || xs && 8 < xs && 11 >= xs), Cm = " ", km = !1;
function Qy(e, t) {
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
function Xy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var li = !1;
function jS(e, t) {
  switch (e) {
    case "compositionend":
      return Xy(t);
    case "keypress":
      return t.which !== 32 ? null : (km = !0, Cm);
    case "textInput":
      return e = t.data, e === Cm && km ? null : e;
    default:
      return null;
  }
}
function OS(e, t) {
  if (li) return e === "compositionend" || !Bf && Qy(e, t) ? (e = Yy(), na = Nf = Xr = null, li = !1, e) : null;
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
      return Gy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var AS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Em(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!AS[e.type] : t === "textarea";
}
function qy(e, t, n, r) {
  Py(r), t = Ea(t, "onChange"), 0 < t.length && (n = new Lf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ss = null, Bs = null;
function NS(e) {
  av(e, 0);
}
function oc(e) {
  var t = ui(e);
  if (by(t)) return e;
}
function LS(e, t) {
  if (e === "change") return t;
}
var Zy = !1;
if (Pr) {
  var wu;
  if (Pr) {
    var Cu = "oninput" in document;
    if (!Cu) {
      var Tm = document.createElement("div");
      Tm.setAttribute("oninput", "return;"), Cu = typeof Tm.oninput == "function";
    }
    wu = Cu;
  } else wu = !1;
  Zy = wu && (!document.documentMode || 9 < document.documentMode);
}
function Rm() {
  Ss && (Ss.detachEvent("onpropertychange", Jy), Bs = Ss = null);
}
function Jy(e) {
  if (e.propertyName === "value" && oc(Bs)) {
    var t = [];
    qy(t, Bs, e, If(e)), jy(NS, t);
  }
}
function zS(e, t, n) {
  e === "focusin" ? (Rm(), Ss = t, Bs = n, Ss.attachEvent("onpropertychange", Jy)) : e === "focusout" && Rm();
}
function BS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return oc(Bs);
}
function DS(e, t) {
  if (e === "click") return oc(t);
}
function FS(e, t) {
  if (e === "input" || e === "change") return oc(t);
}
function _S(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tr = typeof Object.is == "function" ? Object.is : _S;
function Ds(e, t) {
  if (tr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!nd.call(t, o) || !tr(e[o], t[o])) return !1;
  }
  return !0;
}
function Pm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mm(e, t) {
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
function ev(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ev(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function tv() {
  for (var e = window, t = va(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = va(e.document);
  }
  return t;
}
function Df(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function WS(e) {
  var t = tv(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ev(n.ownerDocument.documentElement, n)) {
    if (r !== null && Df(n)) {
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
var US = Pr && "documentMode" in document && 11 >= document.documentMode, ai = null, bd = null, bs = null, wd = !1;
function Im(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  wd || ai == null || ai !== va(r) || (r = ai, "selectionStart" in r && Df(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), bs && Ds(bs, r) || (bs = r, r = Ea(bd, "onSelect"), 0 < r.length && (t = new Lf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ai)));
}
function $l(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ci = { animationend: $l("Animation", "AnimationEnd"), animationiteration: $l("Animation", "AnimationIteration"), animationstart: $l("Animation", "AnimationStart"), transitionend: $l("Transition", "TransitionEnd") }, ku = {}, nv = {};
Pr && (nv = document.createElement("div").style, "AnimationEvent" in window || (delete ci.animationend.animation, delete ci.animationiteration.animation, delete ci.animationstart.animation), "TransitionEvent" in window || delete ci.transitionend.transition);
function ic(e) {
  if (ku[e]) return ku[e];
  if (!ci[e]) return e;
  var t = ci[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in nv) return ku[e] = t[n];
  return e;
}
var rv = ic("animationend"), ov = ic("animationiteration"), iv = ic("animationstart"), sv = ic("transitionend"), lv = /* @__PURE__ */ new Map(), $m = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fo(e, t) {
  lv.set(e, t), Vo(t, [e]);
}
for (var Eu = 0; Eu < $m.length; Eu++) {
  var Tu = $m[Eu], HS = Tu.toLowerCase(), VS = Tu[0].toUpperCase() + Tu.slice(1);
  fo(HS, "on" + VS);
}
fo(rv, "onAnimationEnd");
fo(ov, "onAnimationIteration");
fo(iv, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(sv, "onTransitionEnd");
Ri("onMouseEnter", ["mouseout", "mouseover"]);
Ri("onMouseLeave", ["mouseout", "mouseover"]);
Ri("onPointerEnter", ["pointerout", "pointerover"]);
Ri("onPointerLeave", ["pointerout", "pointerover"]);
Vo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ms = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), KS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));
function jm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, H1(r, t, void 0, e), e.currentTarget = null;
}
function av(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        jm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        jm(o, l, c), i = a;
      }
    }
  }
  if (Sa) throw e = yd, Sa = !1, yd = null, e;
}
function rt(e, t) {
  var n = t[Rd];
  n === void 0 && (n = t[Rd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (cv(t, e, 2, !1), n.add(r));
}
function Ru(e, t, n) {
  var r = 0;
  t && (r |= 4), cv(n, e, r, t);
}
var jl = "_reactListening" + Math.random().toString(36).slice(2);
function Fs(e) {
  if (!e[jl]) {
    e[jl] = !0, gy.forEach(function(n) {
      n !== "selectionchange" && (KS.has(n) || Ru(n, !1, e), Ru(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jl] || (t[jl] = !0, Ru("selectionchange", !1, t));
  }
}
function cv(e, t, n, r) {
  switch (Ky(t)) {
    case 1:
      var o = sS;
      break;
    case 4:
      o = lS;
      break;
    default:
      o = Af;
  }
  n = o.bind(null, t, n, e), o = void 0, !gd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
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
        if (s = Po(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  jy(function() {
    var c = i, d = If(n), m = [];
    e: {
      var v = lv.get(e);
      if (v !== void 0) {
        var f = Lf, x = e;
        switch (e) {
          case "keypress":
            if (ra(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = wS;
            break;
          case "focusin":
            x = "focus", f = bu;
            break;
          case "focusout":
            x = "blur", f = bu;
            break;
          case "beforeblur":
          case "afterblur":
            f = bu;
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
            f = uS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = ES;
            break;
          case rv:
          case ov:
          case iv:
            f = pS;
            break;
          case sv:
            f = RS;
            break;
          case "scroll":
            f = aS;
            break;
          case "wheel":
            f = MS;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = hS;
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
        var b = (t & 4) !== 0, C = !b && e === "scroll", g = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, g !== null && (w = As(h, g), w != null && b.push(_s(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (v = new f(v, x, null, n, d), m.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", v && n !== md && (x = n.relatedTarget || n.fromElement) && (Po(x) || x[Mr])) break e;
        if ((f || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, f ? (x = n.relatedTarget || n.toElement, f = c, x = x ? Po(x) : null, x !== null && (C = Ko(x), x !== C || x.tag !== 5 && x.tag !== 6) && (x = null)) : (f = null, x = c), f !== x)) {
          if (b = Sm, w = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = wm, w = "onPointerLeave", g = "onPointerEnter", h = "pointer"), C = f == null ? v : ui(f), S = x == null ? v : ui(x), v = new b(w, h + "leave", f, n, d), v.target = C, v.relatedTarget = S, w = null, Po(d) === c && (b = new b(g, h + "enter", x, n, d), b.target = S, b.relatedTarget = C, w = b), C = w, f && x) t: {
            for (b = f, g = x, h = 0, S = b; S; S = qo(S)) h++;
            for (S = 0, w = g; w; w = qo(w)) S++;
            for (; 0 < h - S; ) b = qo(b), h--;
            for (; 0 < S - h; ) g = qo(g), S--;
            for (; h--; ) {
              if (b === g || g !== null && b === g.alternate) break t;
              b = qo(b), g = qo(g);
            }
            b = null;
          }
          else b = null;
          f !== null && Om(m, v, f, b, !1), x !== null && C !== null && Om(m, C, x, b, !0);
        }
      }
      e: {
        if (v = c ? ui(c) : window, f = v.nodeName && v.nodeName.toLowerCase(), f === "select" || f === "input" && v.type === "file") var E = LS;
        else if (Em(v)) if (Zy) E = FS;
        else {
          E = BS;
          var k = zS;
        }
        else (f = v.nodeName) && f.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = DS);
        if (E && (E = E(e, c))) {
          qy(m, E, n, d);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && cd(v, "number", v.value);
      }
      switch (k = c ? ui(c) : window, e) {
        case "focusin":
          (Em(k) || k.contentEditable === "true") && (ai = k, bd = c, bs = null);
          break;
        case "focusout":
          bs = bd = ai = null;
          break;
        case "mousedown":
          wd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wd = !1, Im(m, n, d);
          break;
        case "selectionchange":
          if (US) break;
        case "keydown":
        case "keyup":
          Im(m, n, d);
      }
      var R;
      if (Bf) e: {
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
      else li ? Qy(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Gy && n.locale !== "ko" && (li || T !== "onCompositionStart" ? T === "onCompositionEnd" && li && (R = Yy()) : (Xr = d, Nf = "value" in Xr ? Xr.value : Xr.textContent, li = !0)), k = Ea(c, T), 0 < k.length && (T = new bm(T, e, null, n, d), m.push({ event: T, listeners: k }), R ? T.data = R : (R = Xy(n), R !== null && (T.data = R)))), (R = $S ? jS(e, n) : OS(e, n)) && (c = Ea(c, "onBeforeInput"), 0 < c.length && (d = new bm("onBeforeInput", "beforeinput", null, n, d), m.push({ event: d, listeners: c }), d.data = R));
    }
    av(m, t);
  });
}
function _s(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ea(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = As(e, n), i != null && r.unshift(_s(e, i, o)), i = As(e, t), i != null && r.push(_s(e, i, o))), e = e.return;
  }
  return r;
}
function qo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Om(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = As(n, i), a != null && s.unshift(_s(n, a, l))) : o || (a = As(n, i), a != null && s.push(_s(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var YS = /\r\n?/g, GS = /\u0000|\uFFFD/g;
function Am(e) {
  return (typeof e == "string" ? e : "" + e).replace(YS, `
`).replace(GS, "");
}
function Ol(e, t, n) {
  if (t = Am(t), Am(e) !== t && n) throw Error(H(425));
}
function Ta() {
}
var Cd = null, kd = null;
function Ed(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Td = typeof setTimeout == "function" ? setTimeout : void 0, QS = typeof clearTimeout == "function" ? clearTimeout : void 0, Nm = typeof Promise == "function" ? Promise : void 0, XS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nm < "u" ? function(e) {
  return Nm.resolve(null).then(e).catch(qS);
} : Td;
function qS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Mu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), zs(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  zs(t);
}
function to(e) {
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
var Ui = Math.random().toString(36).slice(2), cr = "__reactFiber$" + Ui, Ws = "__reactProps$" + Ui, Mr = "__reactContainer$" + Ui, Rd = "__reactEvents$" + Ui, ZS = "__reactListeners$" + Ui, JS = "__reactHandles$" + Ui;
function Po(e) {
  var t = e[cr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mr] || n[cr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lm(e); e !== null; ) {
        if (n = e[cr]) return n;
        e = Lm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function cl(e) {
  return e = e[cr] || e[Mr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ui(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(H(33));
}
function sc(e) {
  return e[Ws] || null;
}
var Pd = [], di = -1;
function po(e) {
  return { current: e };
}
function ot(e) {
  0 > di || (e.current = Pd[di], Pd[di] = null, di--);
}
function Ze(e, t) {
  di++, Pd[di] = e.current, e.current = t;
}
var ao = {}, Kt = po(ao), ln = po(!1), Lo = ao;
function Pi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ao;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function an(e) {
  return e = e.childContextTypes, e != null;
}
function Ra() {
  ot(ln), ot(Kt);
}
function zm(e, t, n) {
  if (Kt.current !== ao) throw Error(H(168));
  Ze(Kt, t), Ze(ln, n);
}
function uv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(H(108, z1(e) || "Unknown", o));
  return pt({}, n, r);
}
function Pa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ao, Lo = Kt.current, Ze(Kt, e), Ze(ln, ln.current), !0;
}
function Bm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(H(169));
  n ? (e = uv(e, t, Lo), r.__reactInternalMemoizedMergedChildContext = e, ot(ln), ot(Kt), Ze(Kt, e)) : ot(ln), Ze(ln, n);
}
var Cr = null, lc = !1, Iu = !1;
function dv(e) {
  Cr === null ? Cr = [e] : Cr.push(e);
}
function eb(e) {
  lc = !0, dv(e);
}
function mo() {
  if (!Iu && Cr !== null) {
    Iu = !0;
    var e = 0, t = Ke;
    try {
      var n = Cr;
      for (Ke = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cr = null, lc = !1;
    } catch (o) {
      throw Cr !== null && (Cr = Cr.slice(e + 1)), Ly($f, mo), o;
    } finally {
      Ke = t, Iu = !1;
    }
  }
  return null;
}
var fi = [], pi = 0, Ma = null, Ia = 0, In = [], $n = 0, zo = null, Er = 1, Tr = "";
function ko(e, t) {
  fi[pi++] = Ia, fi[pi++] = Ma, Ma = e, Ia = t;
}
function fv(e, t, n) {
  In[$n++] = Er, In[$n++] = Tr, In[$n++] = zo, zo = e;
  var r = Er;
  e = Tr;
  var o = 32 - Jn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Jn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Er = 1 << 32 - Jn(t) + o | n << o | r, Tr = i + e;
  } else Er = 1 << i | n << o | r, Tr = e;
}
function Ff(e) {
  e.return !== null && (ko(e, 1), fv(e, 1, 0));
}
function _f(e) {
  for (; e === Ma; ) Ma = fi[--pi], fi[pi] = null, Ia = fi[--pi], fi[pi] = null;
  for (; e === zo; ) zo = In[--$n], In[$n] = null, Tr = In[--$n], In[$n] = null, Er = In[--$n], In[$n] = null;
}
var xn = null, vn = null, lt = !1, Zn = null;
function pv(e, t) {
  var n = Nn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Dm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xn = e, vn = to(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xn = e, vn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = zo !== null ? { id: Er, overflow: Tr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xn = e, vn = null, !0) : !1;
    default:
      return !1;
  }
}
function Md(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Id(e) {
  if (lt) {
    var t = vn;
    if (t) {
      var n = t;
      if (!Dm(e, t)) {
        if (Md(e)) throw Error(H(418));
        t = to(n.nextSibling);
        var r = xn;
        t && Dm(e, t) ? pv(r, n) : (e.flags = e.flags & -4097 | 2, lt = !1, xn = e);
      }
    } else {
      if (Md(e)) throw Error(H(418));
      e.flags = e.flags & -4097 | 2, lt = !1, xn = e;
    }
  }
}
function Fm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xn = e;
}
function Al(e) {
  if (e !== xn) return !1;
  if (!lt) return Fm(e), lt = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ed(e.type, e.memoizedProps)), t && (t = vn)) {
    if (Md(e)) throw mv(), Error(H(418));
    for (; t; ) pv(e, t), t = to(t.nextSibling);
  }
  if (Fm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(H(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              vn = to(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      vn = null;
    }
  } else vn = xn ? to(e.stateNode.nextSibling) : null;
  return !0;
}
function mv() {
  for (var e = vn; e; ) e = to(e.nextSibling);
}
function Mi() {
  vn = xn = null, lt = !1;
}
function Wf(e) {
  Zn === null ? Zn = [e] : Zn.push(e);
}
var tb = Nr.ReactCurrentBatchConfig;
function ns(e, t, n) {
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
function Nl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(H(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function _m(e) {
  var t = e._init;
  return t(e._payload);
}
function hv(e) {
  function t(g, h) {
    if (e) {
      var S = g.deletions;
      S === null ? (g.deletions = [h], g.flags |= 16) : S.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), h = h.sibling;
    return null;
  }
  function r(g, h) {
    for (g = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), h = h.sibling;
    return g;
  }
  function o(g, h) {
    return g = io(g, h), g.index = 0, g.sibling = null, g;
  }
  function i(g, h, S) {
    return g.index = S, e ? (S = g.alternate, S !== null ? (S = S.index, S < h ? (g.flags |= 2, h) : S) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, S, w) {
    return h === null || h.tag !== 6 ? (h = zu(S, g.mode, w), h.return = g, h) : (h = o(h, S), h.return = g, h);
  }
  function a(g, h, S, w) {
    var E = S.type;
    return E === si ? d(g, h, S.props.children, w, S.key) : h !== null && (h.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Kr && _m(E) === h.type) ? (w = o(h, S.props), w.ref = ns(g, h, S), w.return = g, w) : (w = ua(S.type, S.key, S.props, null, g.mode, w), w.ref = ns(g, h, S), w.return = g, w);
  }
  function c(g, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = Bu(S, g.mode, w), h.return = g, h) : (h = o(h, S.children || []), h.return = g, h);
  }
  function d(g, h, S, w, E) {
    return h === null || h.tag !== 7 ? (h = Oo(S, g.mode, w, E), h.return = g, h) : (h = o(h, S), h.return = g, h);
  }
  function m(g, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = zu("" + h, g.mode, S), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case kl:
          return S = ua(h.type, h.key, h.props, null, g.mode, S), S.ref = ns(g, null, h), S.return = g, S;
        case ii:
          return h = Bu(h, g.mode, S), h.return = g, h;
        case Kr:
          var w = h._init;
          return m(g, w(h._payload), S);
      }
      if (fs(h) || qi(h)) return h = Oo(h, g.mode, S, null), h.return = g, h;
      Nl(g, h);
    }
    return null;
  }
  function v(g, h, S, w) {
    var E = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return E !== null ? null : l(g, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case kl:
          return S.key === E ? a(g, h, S, w) : null;
        case ii:
          return S.key === E ? c(g, h, S, w) : null;
        case Kr:
          return E = S._init, v(
            g,
            h,
            E(S._payload),
            w
          );
      }
      if (fs(S) || qi(S)) return E !== null ? null : d(g, h, S, w, null);
      Nl(g, S);
    }
    return null;
  }
  function f(g, h, S, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(S) || null, l(h, g, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case kl:
          return g = g.get(w.key === null ? S : w.key) || null, a(h, g, w, E);
        case ii:
          return g = g.get(w.key === null ? S : w.key) || null, c(h, g, w, E);
        case Kr:
          var k = w._init;
          return f(g, h, S, k(w._payload), E);
      }
      if (fs(w) || qi(w)) return g = g.get(S) || null, d(h, g, w, E, null);
      Nl(h, w);
    }
    return null;
  }
  function x(g, h, S, w) {
    for (var E = null, k = null, R = h, T = h = 0, O = null; R !== null && T < S.length; T++) {
      R.index > T ? (O = R, R = null) : O = R.sibling;
      var N = v(g, R, S[T], w);
      if (N === null) {
        R === null && (R = O);
        break;
      }
      e && R && N.alternate === null && t(g, R), h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N, R = O;
    }
    if (T === S.length) return n(g, R), lt && ko(g, T), E;
    if (R === null) {
      for (; T < S.length; T++) R = m(g, S[T], w), R !== null && (h = i(R, h, T), k === null ? E = R : k.sibling = R, k = R);
      return lt && ko(g, T), E;
    }
    for (R = r(g, R); T < S.length; T++) O = f(R, g, T, S[T], w), O !== null && (e && O.alternate !== null && R.delete(O.key === null ? T : O.key), h = i(O, h, T), k === null ? E = O : k.sibling = O, k = O);
    return e && R.forEach(function(I) {
      return t(g, I);
    }), lt && ko(g, T), E;
  }
  function b(g, h, S, w) {
    var E = qi(S);
    if (typeof E != "function") throw Error(H(150));
    if (S = E.call(S), S == null) throw Error(H(151));
    for (var k = E = null, R = h, T = h = 0, O = null, N = S.next(); R !== null && !N.done; T++, N = S.next()) {
      R.index > T ? (O = R, R = null) : O = R.sibling;
      var I = v(g, R, N.value, w);
      if (I === null) {
        R === null && (R = O);
        break;
      }
      e && R && I.alternate === null && t(g, R), h = i(I, h, T), k === null ? E = I : k.sibling = I, k = I, R = O;
    }
    if (N.done) return n(
      g,
      R
    ), lt && ko(g, T), E;
    if (R === null) {
      for (; !N.done; T++, N = S.next()) N = m(g, N.value, w), N !== null && (h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N);
      return lt && ko(g, T), E;
    }
    for (R = r(g, R); !N.done; T++, N = S.next()) N = f(R, g, T, N.value, w), N !== null && (e && N.alternate !== null && R.delete(N.key === null ? T : N.key), h = i(N, h, T), k === null ? E = N : k.sibling = N, k = N);
    return e && R.forEach(function(y) {
      return t(g, y);
    }), lt && ko(g, T), E;
  }
  function C(g, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === si && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case kl:
          e: {
            for (var E = S.key, k = h; k !== null; ) {
              if (k.key === E) {
                if (E = S.type, E === si) {
                  if (k.tag === 7) {
                    n(g, k.sibling), h = o(k, S.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Kr && _m(E) === k.type) {
                  n(g, k.sibling), h = o(k, S.props), h.ref = ns(g, k, S), h.return = g, g = h;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            S.type === si ? (h = Oo(S.props.children, g.mode, w, S.key), h.return = g, g = h) : (w = ua(S.type, S.key, S.props, null, g.mode, w), w.ref = ns(g, h, S), w.return = g, g = w);
          }
          return s(g);
        case ii:
          e: {
            for (k = S.key; h !== null; ) {
              if (h.key === k) if (h.tag === 4 && h.stateNode.containerInfo === S.containerInfo && h.stateNode.implementation === S.implementation) {
                n(g, h.sibling), h = o(h, S.children || []), h.return = g, g = h;
                break e;
              } else {
                n(g, h);
                break;
              }
              else t(g, h);
              h = h.sibling;
            }
            h = Bu(S, g.mode, w), h.return = g, g = h;
          }
          return s(g);
        case Kr:
          return k = S._init, C(g, h, k(S._payload), w);
      }
      if (fs(S)) return x(g, h, S, w);
      if (qi(S)) return b(g, h, S, w);
      Nl(g, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, S), h.return = g, g = h) : (n(g, h), h = zu(S, g.mode, w), h.return = g, g = h), s(g)) : n(g, h);
  }
  return C;
}
var Ii = hv(!0), gv = hv(!1), $a = po(null), ja = null, mi = null, Uf = null;
function Hf() {
  Uf = mi = ja = null;
}
function Vf(e) {
  var t = $a.current;
  ot($a), e._currentValue = t;
}
function $d(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function wi(e, t) {
  ja = e, Uf = mi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (sn = !0), e.firstContext = null);
}
function Bn(e) {
  var t = e._currentValue;
  if (Uf !== e) if (e = { context: e, memoizedValue: t, next: null }, mi === null) {
    if (ja === null) throw Error(H(308));
    mi = e, ja.dependencies = { lanes: 0, firstContext: e };
  } else mi = mi.next = e;
  return t;
}
var Mo = null;
function Kf(e) {
  Mo === null ? Mo = [e] : Mo.push(e);
}
function yv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Kf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ir(e, r);
}
function Ir(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Yr = !1;
function Yf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function vv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Rr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function no(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, $e & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ir(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Kf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ir(e, n);
}
function oa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jf(e, n);
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
function Oa(e, t, n, r) {
  var o = e.updateQueue;
  Yr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = o.baseState;
    s = 0, d = c = a = null, l = i;
    do {
      var v = l.lane, f = l.eventTime;
      if ((r & v) === v) {
        d !== null && (d = d.next = {
          eventTime: f,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var x = e, b = l;
          switch (v = t, f = n, b.tag) {
            case 1:
              if (x = b.payload, typeof x == "function") {
                m = x.call(f, m, v);
                break e;
              }
              m = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = b.payload, v = typeof x == "function" ? x.call(f, m, v) : x, v == null) break e;
              m = pt({}, m, v);
              break e;
            case 2:
              Yr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else f = { eventTime: f, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (c = d = f, a = m) : d = d.next = f, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = m), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Do |= s, e.lanes = s, e.memoizedState = m;
  }
}
function Um(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(H(191, o));
      o.call(r);
    }
  }
}
var ul = {}, pr = po(ul), Us = po(ul), Hs = po(ul);
function Io(e) {
  if (e === ul) throw Error(H(174));
  return e;
}
function Gf(e, t) {
  switch (Ze(Hs, t), Ze(Us, e), Ze(pr, ul), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : dd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = dd(t, e);
  }
  ot(pr), Ze(pr, t);
}
function $i() {
  ot(pr), ot(Us), ot(Hs);
}
function xv(e) {
  Io(Hs.current);
  var t = Io(pr.current), n = dd(t, e.type);
  t !== n && (Ze(Us, e), Ze(pr, n));
}
function Qf(e) {
  Us.current === e && (ot(pr), ot(Us));
}
var ut = po(0);
function Aa(e) {
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
var $u = [];
function Xf() {
  for (var e = 0; e < $u.length; e++) $u[e]._workInProgressVersionPrimary = null;
  $u.length = 0;
}
var ia = Nr.ReactCurrentDispatcher, ju = Nr.ReactCurrentBatchConfig, Bo = 0, dt = null, Tt = null, It = null, Na = !1, ws = !1, Vs = 0, nb = 0;
function Ft() {
  throw Error(H(321));
}
function qf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tr(e[n], t[n])) return !1;
  return !0;
}
function Zf(e, t, n, r, o, i) {
  if (Bo = i, dt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ia.current = e === null || e.memoizedState === null ? sb : lb, e = n(r, o), ws) {
    i = 0;
    do {
      if (ws = !1, Vs = 0, 25 <= i) throw Error(H(301));
      i += 1, It = Tt = null, t.updateQueue = null, ia.current = ab, e = n(r, o);
    } while (ws);
  }
  if (ia.current = La, t = Tt !== null && Tt.next !== null, Bo = 0, It = Tt = dt = null, Na = !1, t) throw Error(H(300));
  return e;
}
function Jf() {
  var e = Vs !== 0;
  return Vs = 0, e;
}
function sr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return It === null ? dt.memoizedState = It = e : It = It.next = e, It;
}
function Dn() {
  if (Tt === null) {
    var e = dt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Tt.next;
  var t = It === null ? dt.memoizedState : It.next;
  if (t !== null) It = t, Tt = e;
  else {
    if (e === null) throw Error(H(310));
    Tt = e, e = { memoizedState: Tt.memoizedState, baseState: Tt.baseState, baseQueue: Tt.baseQueue, queue: Tt.queue, next: null }, It === null ? dt.memoizedState = It = e : It = It.next = e;
  }
  return It;
}
function Ks(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ou(e) {
  var t = Dn(), n = t.queue;
  if (n === null) throw Error(H(311));
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
    var l = s = null, a = null, c = i;
    do {
      var d = c.lane;
      if ((Bo & d) === d) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = m, s = r) : a = a.next = m, dt.lanes |= d, Do |= d;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, tr(r, t.memoizedState) || (sn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, dt.lanes |= i, Do |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Au(e) {
  var t = Dn(), n = t.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    tr(i, t.memoizedState) || (sn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Sv() {
}
function bv(e, t) {
  var n = dt, r = Dn(), o = t(), i = !tr(r.memoizedState, o);
  if (i && (r.memoizedState = o, sn = !0), r = r.queue, ep(kv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || It !== null && It.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ys(9, Cv.bind(null, n, r, o, t), void 0, null), $t === null) throw Error(H(349));
    Bo & 30 || wv(n, t, o);
  }
  return o;
}
function wv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Cv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ev(t) && Tv(e);
}
function kv(e, t, n) {
  return n(function() {
    Ev(t) && Tv(e);
  });
}
function Ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tr(e, n);
  } catch {
    return !0;
  }
}
function Tv(e) {
  var t = Ir(e, 1);
  t !== null && er(t, e, 1, -1);
}
function Hm(e) {
  var t = sr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ks, lastRenderedState: e }, t.queue = e, e = e.dispatch = ib.bind(null, dt, e), [t.memoizedState, e];
}
function Ys(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = dt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, dt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Rv() {
  return Dn().memoizedState;
}
function sa(e, t, n, r) {
  var o = sr();
  dt.flags |= e, o.memoizedState = Ys(1 | t, n, void 0, r === void 0 ? null : r);
}
function ac(e, t, n, r) {
  var o = Dn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Tt !== null) {
    var s = Tt.memoizedState;
    if (i = s.destroy, r !== null && qf(r, s.deps)) {
      o.memoizedState = Ys(t, n, i, r);
      return;
    }
  }
  dt.flags |= e, o.memoizedState = Ys(1 | t, n, i, r);
}
function Vm(e, t) {
  return sa(8390656, 8, e, t);
}
function ep(e, t) {
  return ac(2048, 8, e, t);
}
function Pv(e, t) {
  return ac(4, 2, e, t);
}
function Mv(e, t) {
  return ac(4, 4, e, t);
}
function Iv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $v(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ac(4, 4, Iv.bind(null, t, e), n);
}
function tp() {
}
function jv(e, t) {
  var n = Dn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ov(e, t) {
  var n = Dn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Av(e, t, n) {
  return Bo & 21 ? (tr(n, t) || (n = Dy(), dt.lanes |= n, Do |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, sn = !0), e.memoizedState = n);
}
function rb(e, t) {
  var n = Ke;
  Ke = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ju.transition;
  ju.transition = {};
  try {
    e(!1), t();
  } finally {
    Ke = n, ju.transition = r;
  }
}
function Nv() {
  return Dn().memoizedState;
}
function ob(e, t, n) {
  var r = oo(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Lv(e)) zv(t, n);
  else if (n = yv(e, t, n, r), n !== null) {
    var o = en();
    er(n, e, r, o), Bv(n, t, r);
  }
}
function ib(e, t, n) {
  var r = oo(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Lv(e)) zv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, tr(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Kf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = yv(e, t, o, r), n !== null && (o = en(), er(n, e, r, o), Bv(n, t, r));
  }
}
function Lv(e) {
  var t = e.alternate;
  return e === dt || t !== null && t === dt;
}
function zv(e, t) {
  ws = Na = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Bv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jf(e, n);
  }
}
var La = { readContext: Bn, useCallback: Ft, useContext: Ft, useEffect: Ft, useImperativeHandle: Ft, useInsertionEffect: Ft, useLayoutEffect: Ft, useMemo: Ft, useReducer: Ft, useRef: Ft, useState: Ft, useDebugValue: Ft, useDeferredValue: Ft, useTransition: Ft, useMutableSource: Ft, useSyncExternalStore: Ft, useId: Ft, unstable_isNewReconciler: !1 }, sb = { readContext: Bn, useCallback: function(e, t) {
  return sr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Bn, useEffect: Vm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, sa(
    4194308,
    4,
    Iv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return sa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return sa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = sr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = sr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ob.bind(null, dt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = sr();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hm, useDebugValue: tp, useDeferredValue: function(e) {
  return sr().memoizedState = e;
}, useTransition: function() {
  var e = Hm(!1), t = e[0];
  return e = rb.bind(null, e[1]), sr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = dt, o = sr();
  if (lt) {
    if (n === void 0) throw Error(H(407));
    n = n();
  } else {
    if (n = t(), $t === null) throw Error(H(349));
    Bo & 30 || wv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Vm(kv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Ys(9, Cv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = sr(), t = $t.identifierPrefix;
  if (lt) {
    var n = Tr, r = Er;
    n = (r & ~(1 << 32 - Jn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Vs++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, lb = {
  readContext: Bn,
  useCallback: jv,
  useContext: Bn,
  useEffect: ep,
  useImperativeHandle: $v,
  useInsertionEffect: Pv,
  useLayoutEffect: Mv,
  useMemo: Ov,
  useReducer: Ou,
  useRef: Rv,
  useState: function() {
    return Ou(Ks);
  },
  useDebugValue: tp,
  useDeferredValue: function(e) {
    var t = Dn();
    return Av(t, Tt.memoizedState, e);
  },
  useTransition: function() {
    var e = Ou(Ks)[0], t = Dn().memoizedState;
    return [e, t];
  },
  useMutableSource: Sv,
  useSyncExternalStore: bv,
  useId: Nv,
  unstable_isNewReconciler: !1
}, ab = { readContext: Bn, useCallback: jv, useContext: Bn, useEffect: ep, useImperativeHandle: $v, useInsertionEffect: Pv, useLayoutEffect: Mv, useMemo: Ov, useReducer: Au, useRef: Rv, useState: function() {
  return Au(Ks);
}, useDebugValue: tp, useDeferredValue: function(e) {
  var t = Dn();
  return Tt === null ? t.memoizedState = e : Av(t, Tt.memoizedState, e);
}, useTransition: function() {
  var e = Au(Ks)[0], t = Dn().memoizedState;
  return [e, t];
}, useMutableSource: Sv, useSyncExternalStore: bv, useId: Nv, unstable_isNewReconciler: !1 };
function Xn(e, t) {
  if (e && e.defaultProps) {
    t = pt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function jd(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : pt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var cc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Ko(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = en(), o = oo(e), i = Rr(r, o);
  i.payload = t, n != null && (i.callback = n), t = no(e, i, o), t !== null && (er(t, e, o, r), oa(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = en(), o = oo(e), i = Rr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = no(e, i, o), t !== null && (er(t, e, o, r), oa(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = en(), r = oo(e), o = Rr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = no(e, o, r), t !== null && (er(t, e, r, n), oa(t, e, r));
} };
function Km(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ds(n, r) || !Ds(o, i) : !0;
}
function Dv(e, t, n) {
  var r = !1, o = ao, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Bn(i) : (o = an(t) ? Lo : Kt.current, r = t.contextTypes, i = (r = r != null) ? Pi(e, o) : ao), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = cc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ym(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && cc.enqueueReplaceState(t, t.state, null);
}
function Od(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Yf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Bn(i) : (i = an(t) ? Lo : Kt.current, o.context = Pi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (jd(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && cc.enqueueReplaceState(o, o.state, null), Oa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ji(e, t) {
  try {
    var n = "", r = t;
    do
      n += L1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Nu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ad(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cb = typeof WeakMap == "function" ? WeakMap : Map;
function Fv(e, t, n) {
  n = Rr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ba || (Ba = !0, Hd = r), Ad(e, t);
  }, n;
}
function _v(e, t, n) {
  n = Rr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ad(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ad(e, t), typeof r != "function" && (ro === null ? ro = /* @__PURE__ */ new Set([this]) : ro.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Gm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Cb.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rr(-1, 1), t.tag = 2, no(n, t, 1))), n.lanes |= 1), e);
}
var ub = Nr.ReactCurrentOwner, sn = !1;
function qt(e, t, n, r) {
  t.child = e === null ? gv(t, null, n, r) : Ii(t, e.child, n, r);
}
function qm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return wi(t, o), r = Zf(e, t, n, r, i, o), n = Jf(), e !== null && !sn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $r(e, t, o)) : (lt && n && Ff(t), t.flags |= 1, qt(e, t, r, o), t.child);
}
function Zm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !cp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Wv(e, t, i, r, o)) : (e = ua(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ds, n(s, r) && e.ref === t.ref) return $r(e, t, o);
  }
  return t.flags |= 1, e = io(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Wv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ds(i, r) && e.ref === t.ref) if (sn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (sn = !0);
    else return t.lanes = e.lanes, $r(e, t, o);
  }
  return Nd(e, t, n, r, o);
}
function Uv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(gi, hn), hn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(gi, hn), hn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ze(gi, hn), hn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ze(gi, hn), hn |= r;
  return qt(e, t, o, n), t.child;
}
function Hv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Nd(e, t, n, r, o) {
  var i = an(n) ? Lo : Kt.current;
  return i = Pi(t, i), wi(t, o), n = Zf(e, t, n, r, i, o), r = Jf(), e !== null && !sn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $r(e, t, o)) : (lt && r && Ff(t), t.flags |= 1, qt(e, t, n, o), t.child);
}
function Jm(e, t, n, r, o) {
  if (an(n)) {
    var i = !0;
    Pa(t);
  } else i = !1;
  if (wi(t, o), t.stateNode === null) la(e, t), Dv(t, n, r), Od(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Bn(c) : (c = an(n) ? Lo : Kt.current, c = Pi(t, c));
    var d = n.getDerivedStateFromProps, m = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Ym(t, s, r, c), Yr = !1;
    var v = t.memoizedState;
    s.state = v, Oa(t, r, s, o), a = t.memoizedState, l !== r || v !== a || ln.current || Yr ? (typeof d == "function" && (jd(t, n, d, r), a = t.memoizedState), (l = Yr || Km(t, n, l, r, v, a, c)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, vv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Xn(t.type, l), s.props = c, m = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = Bn(a) : (a = an(n) ? Lo : Kt.current, a = Pi(t, a));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== m || v !== a) && Ym(t, s, r, a), Yr = !1, v = t.memoizedState, s.state = v, Oa(t, r, s, o);
    var x = t.memoizedState;
    l !== m || v !== x || ln.current || Yr ? (typeof f == "function" && (jd(t, n, f, r), x = t.memoizedState), (c = Yr || Km(t, n, c, r, v, x, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ld(e, t, n, r, i, o);
}
function Ld(e, t, n, r, o, i) {
  Hv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Bm(t, n, !1), $r(e, t, i);
  r = t.stateNode, ub.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ii(t, e.child, null, i), t.child = Ii(t, null, l, i)) : qt(e, t, l, i), t.memoizedState = r.state, o && Bm(t, n, !0), t.child;
}
function Vv(e) {
  var t = e.stateNode;
  t.pendingContext ? zm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && zm(e, t.context, !1), Gf(e, t.containerInfo);
}
function eh(e, t, n, r, o) {
  return Mi(), Wf(o), t.flags |= 256, qt(e, t, n, r), t.child;
}
var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Kv(e, t, n) {
  var r = t.pendingProps, o = ut.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ze(ut, o & 1), e === null)
    return Id(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = fc(s, r, 0, null), e = Oo(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Bd(n), t.memoizedState = zd, e) : np(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return db(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = io(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = io(l, i) : (i = Oo(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Bd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = zd, r;
  }
  return i = e.child, e = i.sibling, r = io(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function np(e, t) {
  return t = fc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ll(e, t, n, r) {
  return r !== null && Wf(r), Ii(t, e.child, null, n), e = np(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function db(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Nu(Error(H(422))), Ll(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = fc({ mode: "visible", children: r.children }, o, 0, null), i = Oo(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ii(t, e.child, null, s), t.child.memoizedState = Bd(s), t.memoizedState = zd, i);
  if (!(t.mode & 1)) return Ll(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(H(419)), r = Nu(i, r, void 0), Ll(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, sn || l) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ir(e, o), er(r, e, o, -1));
    }
    return ap(), r = Nu(Error(H(421))), Ll(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, vn = to(o.nextSibling), xn = t, lt = !0, Zn = null, e !== null && (In[$n++] = Er, In[$n++] = Tr, In[$n++] = zo, Er = e.id, Tr = e.overflow, zo = t), t = np(t, r.children), t.flags |= 4096, t);
}
function th(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $d(e.return, t, n);
}
function Lu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Yv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (qt(e, t, r.children, n), r = ut.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (Ze(ut, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Aa(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Lu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Aa(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Lu(t, !0, n, null, i);
      break;
    case "together":
      Lu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function la(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $r(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Do |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, n = io(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = io(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fb(e, t, n) {
  switch (t.tag) {
    case 3:
      Vv(t), Mi();
      break;
    case 5:
      xv(t);
      break;
    case 1:
      an(t.type) && Pa(t);
      break;
    case 4:
      Gf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ze($a, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ze(ut, ut.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Kv(e, t, n) : (Ze(ut, ut.current & 1), e = $r(e, t, n), e !== null ? e.sibling : null);
      Ze(ut, ut.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Yv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ze(ut, ut.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Uv(e, t, n);
  }
  return $r(e, t, n);
}
var Gv, Dd, Qv, Xv;
Gv = function(e, t) {
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
Qv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Io(pr.current);
    var i = null;
    switch (n) {
      case "input":
        o = ld(e, o), r = ld(e, r), i = [];
        break;
      case "select":
        o = pt({}, o, { value: void 0 }), r = pt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ud(e, o), r = ud(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ta);
    }
    fd(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (js.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (js.hasOwnProperty(c) ? (a != null && c === "onScroll" && rt("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Xv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rs(e, t) {
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
function pb(e, t, n) {
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
      return an(t.type) && Ra(), _t(t), null;
    case 3:
      return r = t.stateNode, $i(), ot(ln), ot(Kt), Xf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Al(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zn !== null && (Yd(Zn), Zn = null))), Dd(e, t), _t(t), null;
    case 5:
      Qf(t);
      var o = Io(Hs.current);
      if (n = t.type, e !== null && t.stateNode != null) Qv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(H(166));
          return _t(t), null;
        }
        if (e = Io(pr.current), Al(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[cr] = t, r[Ws] = i, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < ms.length; o++) rt(ms[o], r);
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
              um(r, i), rt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, rt("invalid", r);
              break;
            case "textarea":
              fm(r, i), rt("invalid", r);
          }
          fd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Ol(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Ol(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : js.hasOwnProperty(s) && l != null && s === "onScroll" && rt("scroll", r);
          }
          switch (n) {
            case "input":
              El(r), dm(r, i, !0);
              break;
            case "textarea":
              El(r), pm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ta);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ky(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[cr] = t, e[Ws] = r, Gv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = pd(n, r), n) {
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
                for (o = 0; o < ms.length; o++) rt(ms[o], e);
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
                um(e, r), o = ld(e, r), rt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = pt({}, r, { value: void 0 }), rt("invalid", e);
                break;
              case "textarea":
                fm(e, r), o = ud(e, r), rt("invalid", e);
                break;
              default:
                o = r;
            }
            fd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Ry(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ey(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Os(e, a) : typeof a == "number" && Os(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (js.hasOwnProperty(i) ? a != null && i === "onScroll" && rt("scroll", e) : a != null && Tf(e, i, a, s));
            }
            switch (n) {
              case "input":
                El(e), dm(e, r, !1);
                break;
              case "textarea":
                El(e), pm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + lo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? vi(e, !!r.multiple, i, !1) : r.defaultValue != null && vi(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ta);
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
      if (e && t.stateNode != null) Xv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(H(166));
        if (n = Io(Hs.current), Io(pr.current), Al(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[cr] = t, (i = r.nodeValue !== n) && (e = xn, e !== null)) switch (e.tag) {
            case 3:
              Ol(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ol(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[cr] = t, t.stateNode = r;
      }
      return _t(t), null;
    case 13:
      if (ot(ut), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (lt && vn !== null && t.mode & 1 && !(t.flags & 128)) mv(), Mi(), t.flags |= 98560, i = !1;
        else if (i = Al(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(H(317));
            i[cr] = t;
          } else Mi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          _t(t), i = !1;
        } else Zn !== null && (Yd(Zn), Zn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ut.current & 1 ? Rt === 0 && (Rt = 3) : ap())), t.updateQueue !== null && (t.flags |= 4), _t(t), null);
    case 4:
      return $i(), Dd(e, t), e === null && Fs(t.stateNode.containerInfo), _t(t), null;
    case 10:
      return Vf(t.type._context), _t(t), null;
    case 17:
      return an(t.type) && Ra(), _t(t), null;
    case 19:
      if (ot(ut), i = t.memoizedState, i === null) return _t(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) rs(i, !1);
      else {
        if (Rt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Aa(e), s !== null) {
            for (t.flags |= 128, rs(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ze(ut, ut.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && vt() > Oi && (t.flags |= 128, r = !0, rs(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Aa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), rs(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !lt) return _t(t), null;
        } else 2 * vt() - i.renderingStartTime > Oi && n !== 1073741824 && (t.flags |= 128, r = !0, rs(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = vt(), t.sibling = null, n = ut.current, Ze(ut, r ? n & 1 | 2 : n & 1), t) : (_t(t), null);
    case 22:
    case 23:
      return lp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? hn & 1073741824 && (_t(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _t(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(H(156, t.tag));
}
function mb(e, t) {
  switch (_f(t), t.tag) {
    case 1:
      return an(t.type) && Ra(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return $i(), ot(ln), ot(Kt), Xf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Qf(t), null;
    case 13:
      if (ot(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(H(340));
        Mi();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ot(ut), null;
    case 4:
      return $i(), null;
    case 10:
      return Vf(t.type._context), null;
    case 22:
    case 23:
      return lp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zl = !1, Vt = !1, hb = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function hi(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ht(e, t, r);
  }
  else n.current = null;
}
function Fd(e, t, n) {
  try {
    n();
  } catch (r) {
    ht(e, t, r);
  }
}
var nh = !1;
function gb(e, t) {
  if (Cd = Ca, e = tv(), Df(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, d = 0, m = e, v = null;
        t: for (; ; ) {
          for (var f; m !== n || o !== 0 && m.nodeType !== 3 || (l = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (a = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (f = m.firstChild) !== null; )
            v = m, m = f;
          for (; ; ) {
            if (m === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++d === r && (a = s), (f = m.nextSibling) !== null) break;
            m = v, v = m.parentNode;
          }
          m = f;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (kd = { focusedElem: e, selectionRange: n }, Ca = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
  else for (; te !== null; ) {
    t = te;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var b = x.memoizedProps, C = x.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Xn(t.type, b), C);
            g.__reactInternalSnapshotBeforeUpdate = h;
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
          throw Error(H(163));
      }
    } catch (w) {
      ht(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return x = nh, nh = !1, x;
}
function Cs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Fd(t, n, i);
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
function qv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, qv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[cr], delete t[Ws], delete t[Rd], delete t[ZS], delete t[JS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Zv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Zv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ta));
  else if (r !== 4 && (e = e.child, e !== null)) for (Wd(e, t, n), e = e.sibling; e !== null; ) Wd(e, t, n), e = e.sibling;
}
function Ud(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ud(e, t, n), e = e.sibling; e !== null; ) Ud(e, t, n), e = e.sibling;
}
var Nt = null, qn = !1;
function _r(e, t, n) {
  for (n = n.child; n !== null; ) Jv(e, t, n), n = n.sibling;
}
function Jv(e, t, n) {
  if (fr && typeof fr.onCommitFiberUnmount == "function") try {
    fr.onCommitFiberUnmount(nc, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Vt || hi(n, t);
    case 6:
      var r = Nt, o = qn;
      Nt = null, _r(e, t, n), Nt = r, qn = o, Nt !== null && (qn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
      break;
    case 18:
      Nt !== null && (qn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? Mu(e.parentNode, n) : e.nodeType === 1 && Mu(e, n), zs(e)) : Mu(Nt, n.stateNode));
      break;
    case 4:
      r = Nt, o = qn, Nt = n.stateNode.containerInfo, qn = !0, _r(e, t, n), Nt = r, qn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Vt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Fd(n, t, s), o = o.next;
        } while (o !== r);
      }
      _r(e, t, n);
      break;
    case 1:
      if (!Vt && (hi(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        ht(n, t, l);
      }
      _r(e, t, n);
      break;
    case 21:
      _r(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Vt = (r = Vt) || n.memoizedState !== null, _r(e, t, n), Vt = r) : _r(e, t, n);
      break;
    default:
      _r(e, t, n);
  }
}
function oh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hb()), t.forEach(function(r) {
      var o = Eb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Yn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Nt = l.stateNode, qn = !1;
            break e;
          case 3:
            Nt = l.stateNode.containerInfo, qn = !0;
            break e;
          case 4:
            Nt = l.stateNode.containerInfo, qn = !0;
            break e;
        }
        l = l.return;
      }
      if (Nt === null) throw Error(H(160));
      Jv(i, s, o), Nt = null, qn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      ht(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) e0(t, e), t = t.sibling;
}
function e0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Yn(t, e), rr(e), r & 4) {
        try {
          Cs(3, e, e.return), uc(3, e);
        } catch (b) {
          ht(e, e.return, b);
        }
        try {
          Cs(5, e, e.return);
        } catch (b) {
          ht(e, e.return, b);
        }
      }
      break;
    case 1:
      Yn(t, e), rr(e), r & 512 && n !== null && hi(n, n.return);
      break;
    case 5:
      if (Yn(t, e), rr(e), r & 512 && n !== null && hi(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Os(o, "");
        } catch (b) {
          ht(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && wy(o, i), pd(l, s);
          var c = pd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], m = a[s + 1];
            d === "style" ? Ry(o, m) : d === "dangerouslySetInnerHTML" ? Ey(o, m) : d === "children" ? Os(o, m) : Tf(o, d, m, c);
          }
          switch (l) {
            case "input":
              ad(o, i);
              break;
            case "textarea":
              Cy(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? vi(o, !!i.multiple, f, !1) : v !== !!i.multiple && (i.defaultValue != null ? vi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : vi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ws] = i;
        } catch (b) {
          ht(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Yn(t, e), rr(e), r & 4) {
        if (e.stateNode === null) throw Error(H(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          ht(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Yn(t, e), rr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        zs(t.containerInfo);
      } catch (b) {
        ht(e, e.return, b);
      }
      break;
    case 4:
      Yn(t, e), rr(e);
      break;
    case 13:
      Yn(t, e), rr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ip = vt())), r & 4 && oh(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Vt = (c = Vt) || d, Yn(t, e), Vt = c) : Yn(t, e), rr(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1) for (te = e, d = e.child; d !== null; ) {
          for (m = te = d; te !== null; ) {
            switch (v = te, f = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Cs(4, v, v.return);
                break;
              case 1:
                hi(v, v.return);
                var x = v.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (b) {
                    ht(r, n, b);
                  }
                }
                break;
              case 5:
                hi(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  sh(m);
                  continue;
                }
            }
            f !== null ? (f.return = v, te = f) : sh(m);
          }
          d = d.sibling;
        }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                o = m.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = m.stateNode, a = m.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Ty("display", s));
              } catch (b) {
                ht(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (d === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (b) {
              ht(e, e.return, b);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            d === m && (d = null), m = m.return;
          }
          d === m && (d = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Yn(t, e), rr(e), r & 4 && oh(e);
      break;
    case 21:
      break;
    default:
      Yn(
        t,
        e
      ), rr(e);
  }
}
function rr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Zv(n)) {
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
          r.flags & 32 && (Os(o, ""), r.flags &= -33);
          var i = rh(e);
          Ud(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = rh(e);
          Wd(e, l, s);
          break;
        default:
          throw Error(H(161));
      }
    } catch (a) {
      ht(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yb(e, t, n) {
  te = e, t0(e);
}
function t0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || zl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Vt;
        l = zl;
        var c = Vt;
        if (zl = s, (Vt = a) && !c) for (te = o; te !== null; ) s = te, a = s.child, s.tag === 22 && s.memoizedState !== null ? lh(o) : a !== null ? (a.return = s, te = a) : lh(o);
        for (; i !== null; ) te = i, t0(i), i = i.sibling;
        te = o, zl = l, Vt = c;
      }
      ih(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : ih(e);
  }
}
function ih(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Vt || uc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Vt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Xn(t.type, n.memoizedProps);
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
              var c = t.alternate;
              if (c !== null) {
                var d = c.memoizedState;
                if (d !== null) {
                  var m = d.dehydrated;
                  m !== null && zs(m);
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
        Vt || t.flags & 512 && _d(t);
      } catch (v) {
        ht(t, t.return, v);
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
function sh(e) {
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
function lh(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uc(4, t);
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
            _d(t);
          } catch (a) {
            ht(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            _d(t);
          } catch (a) {
            ht(t, s, a);
          }
      }
    } catch (a) {
      ht(t, t.return, a);
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
var vb = Math.ceil, za = Nr.ReactCurrentDispatcher, rp = Nr.ReactCurrentOwner, Ln = Nr.ReactCurrentBatchConfig, $e = 0, $t = null, Et = null, zt = 0, hn = 0, gi = po(0), Rt = 0, Gs = null, Do = 0, dc = 0, op = 0, ks = null, on = null, ip = 0, Oi = 1 / 0, wr = null, Ba = !1, Hd = null, ro = null, Bl = !1, qr = null, Da = 0, Es = 0, Vd = null, aa = -1, ca = 0;
function en() {
  return $e & 6 ? vt() : aa !== -1 ? aa : aa = vt();
}
function oo(e) {
  return e.mode & 1 ? $e & 2 && zt !== 0 ? zt & -zt : tb.transition !== null ? (ca === 0 && (ca = Dy()), ca) : (e = Ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ky(e.type)), e) : 1;
}
function er(e, t, n, r) {
  if (50 < Es) throw Es = 0, Vd = null, Error(H(185));
  ll(e, n, r), (!($e & 2) || e !== $t) && (e === $t && (!($e & 2) && (dc |= n), Rt === 4 && Qr(e, zt)), cn(e, r), n === 1 && $e === 0 && !(t.mode & 1) && (Oi = vt() + 500, lc && mo()));
}
function cn(e, t) {
  var n = e.callbackNode;
  tS(e, t);
  var r = wa(e, e === $t ? zt : 0);
  if (r === 0) n !== null && gm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gm(n), t === 1) e.tag === 0 ? eb(ah.bind(null, e)) : dv(ah.bind(null, e)), XS(function() {
      !($e & 6) && mo();
    }), n = null;
    else {
      switch (Fy(r)) {
        case 1:
          n = $f;
          break;
        case 4:
          n = zy;
          break;
        case 16:
          n = ba;
          break;
        case 536870912:
          n = By;
          break;
        default:
          n = ba;
      }
      n = c0(n, n0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function n0(e, t) {
  if (aa = -1, ca = 0, $e & 6) throw Error(H(327));
  var n = e.callbackNode;
  if (Ci() && e.callbackNode !== n) return null;
  var r = wa(e, e === $t ? zt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Fa(e, r);
  else {
    t = r;
    var o = $e;
    $e |= 2;
    var i = o0();
    ($t !== e || zt !== t) && (wr = null, Oi = vt() + 500, jo(e, t));
    do
      try {
        bb();
        break;
      } catch (l) {
        r0(e, l);
      }
    while (!0);
    Hf(), za.current = i, $e = o, Et !== null ? t = 0 : ($t = null, zt = 0, t = Rt);
  }
  if (t !== 0) {
    if (t === 2 && (o = vd(e), o !== 0 && (r = o, t = Kd(e, o))), t === 1) throw n = Gs, jo(e, 0), Qr(e, r), cn(e, vt()), n;
    if (t === 6) Qr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !xb(o) && (t = Fa(e, r), t === 2 && (i = vd(e), i !== 0 && (r = i, t = Kd(e, i))), t === 1)) throw n = Gs, jo(e, 0), Qr(e, r), cn(e, vt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(H(345));
        case 2:
          Eo(e, on, wr);
          break;
        case 3:
          if (Qr(e, r), (r & 130023424) === r && (t = ip + 500 - vt(), 10 < t)) {
            if (wa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              en(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Td(Eo.bind(null, e, on, wr), t);
            break;
          }
          Eo(e, on, wr);
          break;
        case 4:
          if (Qr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Jn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = vt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Td(Eo.bind(null, e, on, wr), r);
            break;
          }
          Eo(e, on, wr);
          break;
        case 5:
          Eo(e, on, wr);
          break;
        default:
          throw Error(H(329));
      }
    }
  }
  return cn(e, vt()), e.callbackNode === n ? n0.bind(null, e) : null;
}
function Kd(e, t) {
  var n = ks;
  return e.current.memoizedState.isDehydrated && (jo(e, t).flags |= 256), e = Fa(e, t), e !== 2 && (t = on, on = n, t !== null && Yd(t)), e;
}
function Yd(e) {
  on === null ? on = e : on.push.apply(on, e);
}
function xb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!tr(i(), o)) return !1;
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
function Qr(e, t) {
  for (t &= ~op, t &= ~dc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Jn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ah(e) {
  if ($e & 6) throw Error(H(327));
  Ci();
  var t = wa(e, 0);
  if (!(t & 1)) return cn(e, vt()), null;
  var n = Fa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vd(e);
    r !== 0 && (t = r, n = Kd(e, r));
  }
  if (n === 1) throw n = Gs, jo(e, 0), Qr(e, t), cn(e, vt()), n;
  if (n === 6) throw Error(H(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Eo(e, on, wr), cn(e, vt()), null;
}
function sp(e, t) {
  var n = $e;
  $e |= 1;
  try {
    return e(t);
  } finally {
    $e = n, $e === 0 && (Oi = vt() + 500, lc && mo());
  }
}
function Fo(e) {
  qr !== null && qr.tag === 0 && !($e & 6) && Ci();
  var t = $e;
  $e |= 1;
  var n = Ln.transition, r = Ke;
  try {
    if (Ln.transition = null, Ke = 1, e) return e();
  } finally {
    Ke = r, Ln.transition = n, $e = t, !($e & 6) && mo();
  }
}
function lp() {
  hn = gi.current, ot(gi);
}
function jo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, QS(n)), Et !== null) for (n = Et.return; n !== null; ) {
    var r = n;
    switch (_f(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ra();
        break;
      case 3:
        $i(), ot(ln), ot(Kt), Xf();
        break;
      case 5:
        Qf(r);
        break;
      case 4:
        $i();
        break;
      case 13:
        ot(ut);
        break;
      case 19:
        ot(ut);
        break;
      case 10:
        Vf(r.type._context);
        break;
      case 22:
      case 23:
        lp();
    }
    n = n.return;
  }
  if ($t = e, Et = e = io(e.current, null), zt = hn = t, Rt = 0, Gs = null, op = dc = Do = 0, on = ks = null, Mo !== null) {
    for (t = 0; t < Mo.length; t++) if (n = Mo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Mo = null;
  }
  return e;
}
function r0(e, t) {
  do {
    var n = Et;
    try {
      if (Hf(), ia.current = La, Na) {
        for (var r = dt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        Na = !1;
      }
      if (Bo = 0, It = Tt = dt = null, ws = !1, Vs = 0, rp.current = null, n === null || n.return === null) {
        Rt = 1, Gs = t, Et = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = zt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, d = l, m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = Qm(s);
          if (f !== null) {
            f.flags &= -257, Xm(f, s, l, i, t), f.mode & 1 && Gm(i, c, t), t = f, a = c;
            var x = t.updateQueue;
            if (x === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Gm(i, c, t), ap();
              break e;
            }
            a = Error(H(426));
          }
        } else if (lt && l.mode & 1) {
          var C = Qm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Xm(C, s, l, i, t), Wf(ji(a, l));
            break e;
          }
        }
        i = a = ji(a, l), Rt !== 4 && (Rt = 2), ks === null ? ks = [i] : ks.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Fv(i, a, t);
              Wm(i, g);
              break e;
            case 1:
              l = a;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (ro === null || !ro.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = _v(i, l, t);
                Wm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      s0(n);
    } catch (E) {
      t = E, Et === n && n !== null && (Et = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function o0() {
  var e = za.current;
  return za.current = La, e === null ? La : e;
}
function ap() {
  (Rt === 0 || Rt === 3 || Rt === 2) && (Rt = 4), $t === null || !(Do & 268435455) && !(dc & 268435455) || Qr($t, zt);
}
function Fa(e, t) {
  var n = $e;
  $e |= 2;
  var r = o0();
  ($t !== e || zt !== t) && (wr = null, jo(e, t));
  do
    try {
      Sb();
      break;
    } catch (o) {
      r0(e, o);
    }
  while (!0);
  if (Hf(), $e = n, za.current = r, Et !== null) throw Error(H(261));
  return $t = null, zt = 0, Rt;
}
function Sb() {
  for (; Et !== null; ) i0(Et);
}
function bb() {
  for (; Et !== null && !K1(); ) i0(Et);
}
function i0(e) {
  var t = a0(e.alternate, e, hn);
  e.memoizedProps = e.pendingProps, t === null ? s0(e) : Et = t, rp.current = null;
}
function s0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mb(n, t), n !== null) {
        n.flags &= 32767, Et = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Rt = 6, Et = null;
        return;
      }
    } else if (n = pb(n, t, hn), n !== null) {
      Et = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Et = t;
      return;
    }
    Et = t = e;
  } while (t !== null);
  Rt === 0 && (Rt = 5);
}
function Eo(e, t, n) {
  var r = Ke, o = Ln.transition;
  try {
    Ln.transition = null, Ke = 1, wb(e, t, n, r);
  } finally {
    Ln.transition = o, Ke = r;
  }
  return null;
}
function wb(e, t, n, r) {
  do
    Ci();
  while (qr !== null);
  if ($e & 6) throw Error(H(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(H(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (nS(e, i), e === $t && (Et = $t = null, zt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Bl || (Bl = !0, c0(ba, function() {
    return Ci(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ln.transition, Ln.transition = null;
    var s = Ke;
    Ke = 1;
    var l = $e;
    $e |= 4, rp.current = null, gb(e, n), e0(n, e), WS(kd), Ca = !!Cd, kd = Cd = null, e.current = n, yb(n), Y1(), $e = l, Ke = s, Ln.transition = i;
  } else e.current = n;
  if (Bl && (Bl = !1, qr = e, Da = o), i = e.pendingLanes, i === 0 && (ro = null), X1(n.stateNode), cn(e, vt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ba) throw Ba = !1, e = Hd, Hd = null, e;
  return Da & 1 && e.tag !== 0 && Ci(), i = e.pendingLanes, i & 1 ? e === Vd ? Es++ : (Es = 0, Vd = e) : Es = 0, mo(), null;
}
function Ci() {
  if (qr !== null) {
    var e = Fy(Da), t = Ln.transition, n = Ke;
    try {
      if (Ln.transition = null, Ke = 16 > e ? 16 : e, qr === null) var r = !1;
      else {
        if (e = qr, qr = null, Da = 0, $e & 6) throw Error(H(331));
        var o = $e;
        for ($e |= 4, te = e.current; te !== null; ) {
          var i = te, s = i.child;
          if (te.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (te = c; te !== null; ) {
                  var d = te;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cs(8, d, i);
                  }
                  var m = d.child;
                  if (m !== null) m.return = d, te = m;
                  else for (; te !== null; ) {
                    d = te;
                    var v = d.sibling, f = d.return;
                    if (qv(d), d === c) {
                      te = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = f, te = v;
                      break;
                    }
                    te = f;
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
              te = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, te = s;
          else e: for (; te !== null; ) {
            if (i = te, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Cs(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, te = g;
              break e;
            }
            te = i.return;
          }
        }
        var h = e.current;
        for (te = h; te !== null; ) {
          s = te;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, te = S;
          else e: for (s = h; te !== null; ) {
            if (l = te, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  uc(9, l);
              }
            } catch (E) {
              ht(l, l.return, E);
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
        if ($e = o, mo(), fr && typeof fr.onPostCommitFiberRoot == "function") try {
          fr.onPostCommitFiberRoot(nc, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ke = n, Ln.transition = t;
    }
  }
  return !1;
}
function ch(e, t, n) {
  t = ji(n, t), t = Fv(e, t, 1), e = no(e, t, 1), t = en(), e !== null && (ll(e, 1, t), cn(e, t));
}
function ht(e, t, n) {
  if (e.tag === 3) ch(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ch(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ro === null || !ro.has(r))) {
        e = ji(n, e), e = _v(t, e, 1), t = no(t, e, 1), e = en(), t !== null && (ll(t, 1, e), cn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Cb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = en(), e.pingedLanes |= e.suspendedLanes & n, $t === e && (zt & n) === n && (Rt === 4 || Rt === 3 && (zt & 130023424) === zt && 500 > vt() - ip ? jo(e, 0) : op |= n), cn(e, t);
}
function l0(e, t) {
  t === 0 && (e.mode & 1 ? (t = Pl, Pl <<= 1, !(Pl & 130023424) && (Pl = 4194304)) : t = 1);
  var n = en();
  e = Ir(e, t), e !== null && (ll(e, t, n), cn(e, n));
}
function kb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), l0(e, n);
}
function Eb(e, t) {
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
  r !== null && r.delete(t), l0(e, n);
}
var a0;
a0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ln.current) sn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return sn = !1, fb(e, t, n);
    sn = !!(e.flags & 131072);
  }
  else sn = !1, lt && t.flags & 1048576 && fv(t, Ia, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      la(e, t), e = t.pendingProps;
      var o = Pi(t, Kt.current);
      wi(t, n), o = Zf(null, t, r, e, o, n);
      var i = Jf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, an(r) ? (i = !0, Pa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Yf(t), o.updater = cc, t.stateNode = o, o._reactInternals = t, Od(t, r, e, n), t = Ld(null, t, r, !0, i, n)) : (t.tag = 0, lt && i && Ff(t), qt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (la(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Rb(r), e = Xn(r, e), o) {
          case 0:
            t = Nd(null, t, r, e, n);
            break e;
          case 1:
            t = Jm(null, t, r, e, n);
            break e;
          case 11:
            t = qm(null, t, r, e, n);
            break e;
          case 14:
            t = Zm(null, t, r, Xn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), Nd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), Jm(e, t, r, o, n);
    case 3:
      e: {
        if (Vv(t), e === null) throw Error(H(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, vv(e, t), Oa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = ji(Error(H(423)), t), t = eh(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = ji(Error(H(424)), t), t = eh(e, t, r, n, o);
          break e;
        } else for (vn = to(t.stateNode.containerInfo.firstChild), xn = t, lt = !0, Zn = null, n = gv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Mi(), r === o) {
            t = $r(e, t, n);
            break e;
          }
          qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xv(t), e === null && Id(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Ed(r, o) ? s = null : i !== null && Ed(r, i) && (t.flags |= 32), Hv(e, t), qt(e, t, s, n), t.child;
    case 6:
      return e === null && Id(t), null;
    case 13:
      return Kv(e, t, n);
    case 4:
      return Gf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ii(t, null, r, n) : qt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), qm(e, t, r, o, n);
    case 7:
      return qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ze($a, r._currentValue), r._currentValue = s, i !== null) if (tr(i.value, s)) {
          if (i.children === o.children && !ln.current) {
            t = $r(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Rr(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var d = c.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), $d(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), $d(s, n, t), s = i.sibling;
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
        qt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, wi(t, n), o = Bn(o), r = r(o), t.flags |= 1, qt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Xn(r, t.pendingProps), o = Xn(r.type, o), Zm(e, t, r, o, n);
    case 15:
      return Wv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), la(e, t), t.tag = 1, an(r) ? (e = !0, Pa(t)) : e = !1, wi(t, n), Dv(t, r, o), Od(t, r, o, n), Ld(null, t, r, !0, e, n);
    case 19:
      return Yv(e, t, n);
    case 22:
      return Uv(e, t, n);
  }
  throw Error(H(156, t.tag));
};
function c0(e, t) {
  return Ly(e, t);
}
function Tb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Nn(e, t, n, r) {
  return new Tb(e, t, n, r);
}
function cp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Rb(e) {
  if (typeof e == "function") return cp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Pf) return 11;
    if (e === Mf) return 14;
  }
  return 2;
}
function io(e, t) {
  var n = e.alternate;
  return n === null ? (n = Nn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ua(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") cp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case si:
      return Oo(n.children, o, i, t);
    case Rf:
      s = 8, o |= 8;
      break;
    case rd:
      return e = Nn(12, n, t, o | 2), e.elementType = rd, e.lanes = i, e;
    case od:
      return e = Nn(13, n, t, o), e.elementType = od, e.lanes = i, e;
    case id:
      return e = Nn(19, n, t, o), e.elementType = id, e.lanes = i, e;
    case xy:
      return fc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case yy:
          s = 10;
          break e;
        case vy:
          s = 9;
          break e;
        case Pf:
          s = 11;
          break e;
        case Mf:
          s = 14;
          break e;
        case Kr:
          s = 16, r = null;
          break e;
      }
      throw Error(H(130, e == null ? e : typeof e, ""));
  }
  return t = Nn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Oo(e, t, n, r) {
  return e = Nn(7, e, r, t), e.lanes = n, e;
}
function fc(e, t, n, r) {
  return e = Nn(22, e, r, t), e.elementType = xy, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function zu(e, t, n) {
  return e = Nn(6, e, null, t), e.lanes = n, e;
}
function Bu(e, t, n) {
  return t = Nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Pb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vu(0), this.expirationTimes = vu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function up(e, t, n, r, o, i, s, l, a) {
  return e = new Pb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Nn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yf(i), e;
}
function Mb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: ii, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function u0(e) {
  if (!e) return ao;
  e = e._reactInternals;
  e: {
    if (Ko(e) !== e || e.tag !== 1) throw Error(H(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (an(t.type)) {
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
    if (an(n)) return uv(e, n, t);
  }
  return t;
}
function d0(e, t, n, r, o, i, s, l, a) {
  return e = up(n, r, !0, e, o, i, s, l, a), e.context = u0(null), n = e.current, r = en(), o = oo(n), i = Rr(r, o), i.callback = t ?? null, no(n, i, o), e.current.lanes = o, ll(e, o, r), cn(e, r), e;
}
function pc(e, t, n, r) {
  var o = t.current, i = en(), s = oo(o);
  return n = u0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = no(o, t, s), e !== null && (er(e, o, s, i), oa(e, o, s)), s;
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
function uh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dp(e, t) {
  uh(e, t), (e = e.alternate) && uh(e, t);
}
function Ib() {
  return null;
}
var f0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fp(e) {
  this._internalRoot = e;
}
mc.prototype.render = fp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  pc(e, t, null, null);
};
mc.prototype.unmount = fp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Fo(function() {
      pc(null, e, null, null);
    }), t[Mr] = null;
  }
};
function mc(e) {
  this._internalRoot = e;
}
mc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Uy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gr.length && t !== 0 && t < Gr[n].priority; n++) ;
    Gr.splice(n, 0, e), n === 0 && Vy(e);
  }
};
function pp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function hc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function dh() {
}
function $b(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = _a(s);
        i.call(c);
      };
    }
    var s = d0(t, r, e, 0, null, !1, !1, "", dh);
    return e._reactRootContainer = s, e[Mr] = s.current, Fs(e.nodeType === 8 ? e.parentNode : e), Fo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = _a(a);
      l.call(c);
    };
  }
  var a = up(e, 0, !1, null, null, !1, !1, "", dh);
  return e._reactRootContainer = a, e[Mr] = a.current, Fs(e.nodeType === 8 ? e.parentNode : e), Fo(function() {
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
  } else s = $b(n, t, e, o, r);
  return _a(s);
}
_y = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ps(t.pendingLanes);
        n !== 0 && (jf(t, n | 1), cn(t, vt()), !($e & 6) && (Oi = vt() + 500, mo()));
      }
      break;
    case 13:
      Fo(function() {
        var r = Ir(e, 1);
        if (r !== null) {
          var o = en();
          er(r, e, 1, o);
        }
      }), dp(e, 1);
  }
};
Of = function(e) {
  if (e.tag === 13) {
    var t = Ir(e, 134217728);
    if (t !== null) {
      var n = en();
      er(t, e, 134217728, n);
    }
    dp(e, 134217728);
  }
};
Wy = function(e) {
  if (e.tag === 13) {
    var t = oo(e), n = Ir(e, t);
    if (n !== null) {
      var r = en();
      er(n, e, t, r);
    }
    dp(e, t);
  }
};
Uy = function() {
  return Ke;
};
Hy = function(e, t) {
  var n = Ke;
  try {
    return Ke = e, t();
  } finally {
    Ke = n;
  }
};
hd = function(e, t, n) {
  switch (t) {
    case "input":
      if (ad(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = sc(r);
            if (!o) throw Error(H(90));
            by(r), ad(r, o);
          }
        }
      }
      break;
    case "textarea":
      Cy(e, n);
      break;
    case "select":
      t = n.value, t != null && vi(e, !!n.multiple, t, !1);
  }
};
Iy = sp;
$y = Fo;
var jb = { usingClientEntryPoint: !1, Events: [cl, ui, sc, Py, My, sp] }, os = { findFiberByHostInstance: Po, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ob = { bundleType: os.bundleType, version: os.version, rendererPackageName: os.rendererPackageName, rendererConfig: os.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ay(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: os.findFiberByHostInstance || Ib, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Dl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Dl.isDisabled && Dl.supportsFiber) try {
    nc = Dl.inject(Ob), fr = Dl;
  } catch {
  }
}
Cn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jb;
Cn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pp(t)) throw Error(H(200));
  return Mb(e, t, null, n);
};
Cn.createRoot = function(e, t) {
  if (!pp(e)) throw Error(H(299));
  var n = !1, r = "", o = f0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = up(e, 1, !1, null, null, n, !1, r, o), e[Mr] = t.current, Fs(e.nodeType === 8 ? e.parentNode : e), new fp(t);
};
Cn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(H(188)) : (e = Object.keys(e).join(","), Error(H(268, e)));
  return e = Ay(t), e = e === null ? null : e.stateNode, e;
};
Cn.flushSync = function(e) {
  return Fo(e);
};
Cn.hydrate = function(e, t, n) {
  if (!hc(t)) throw Error(H(200));
  return gc(null, e, t, !0, n);
};
Cn.hydrateRoot = function(e, t, n) {
  if (!pp(e)) throw Error(H(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = f0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = d0(t, null, e, 1, n ?? null, o, !1, i, s), e[Mr] = t.current, Fs(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new mc(t);
};
Cn.render = function(e, t, n) {
  if (!hc(t)) throw Error(H(200));
  return gc(null, e, t, !1, n);
};
Cn.unmountComponentAtNode = function(e) {
  if (!hc(e)) throw Error(H(40));
  return e._reactRootContainer ? (Fo(function() {
    gc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mr] = null;
    });
  }), !0) : !1;
};
Cn.unstable_batchedUpdates = sp;
Cn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!hc(n)) throw Error(H(200));
  if (e == null || e._reactInternals === void 0) throw Error(H(38));
  return gc(e, t, n, !1, r);
};
Cn.version = "18.3.1-next-f1338f8080-20240426";
function p0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p0);
    } catch (e) {
      console.error(e);
    }
}
p0(), py.exports = Cn;
var m0 = py.exports, h0, fh = m0;
h0 = fh.createRoot, fh.hydrateRoot;
const Qs = {
  black: "#000",
  white: "#fff"
}, Zo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Jo = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ei = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ti = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ni = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, is = {
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
function jr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const mr = "$$material";
function Gd() {
  return Gd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Gd.apply(null, arguments);
}
function Nb(e) {
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
var zb = /* @__PURE__ */ function() {
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
      var i = Nb(o);
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
}(), Ut = "-ms-", Wa = "-moz-", Le = "-webkit-", g0 = "comm", mp = "rule", hp = "decl", Bb = "@import", y0 = "@keyframes", Db = "@layer", Fb = Math.abs, yc = String.fromCharCode, _b = Object.assign;
function Wb(e, t) {
  return Lt(e, 0) ^ 45 ? (((t << 2 ^ Lt(e, 0)) << 2 ^ Lt(e, 1)) << 2 ^ Lt(e, 2)) << 2 ^ Lt(e, 3) : 0;
}
function v0(e) {
  return e.trim();
}
function Ub(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ze(e, t, n) {
  return e.replace(t, n);
}
function Qd(e, t) {
  return e.indexOf(t);
}
function Lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Xs(e, t, n) {
  return e.slice(t, n);
}
function lr(e) {
  return e.length;
}
function gp(e) {
  return e.length;
}
function Fl(e, t) {
  return t.push(e), e;
}
function Hb(e, t) {
  return e.map(t).join("");
}
var vc = 1, Ai = 1, x0 = 0, fn = 0, kt = 0, Hi = "";
function xc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: vc, column: Ai, length: s, return: "" };
}
function ss(e, t) {
  return _b(xc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Vb() {
  return kt;
}
function Kb() {
  return kt = fn > 0 ? Lt(Hi, --fn) : 0, Ai--, kt === 10 && (Ai = 1, vc--), kt;
}
function Sn() {
  return kt = fn < x0 ? Lt(Hi, fn++) : 0, Ai++, kt === 10 && (Ai = 1, vc++), kt;
}
function hr() {
  return Lt(Hi, fn);
}
function da() {
  return fn;
}
function dl(e, t) {
  return Xs(Hi, e, t);
}
function qs(e) {
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
function S0(e) {
  return vc = Ai = 1, x0 = lr(Hi = e), fn = 0, [];
}
function b0(e) {
  return Hi = "", e;
}
function fa(e) {
  return v0(dl(fn - 1, Xd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yb(e) {
  for (; (kt = hr()) && kt < 33; )
    Sn();
  return qs(e) > 2 || qs(kt) > 3 ? "" : " ";
}
function Gb(e, t) {
  for (; --t && Sn() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
    ;
  return dl(e, da() + (t < 6 && hr() == 32 && Sn() == 32));
}
function Xd(e) {
  for (; Sn(); )
    switch (kt) {
      case e:
        return fn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Xd(kt);
        break;
      case 40:
        e === 41 && Xd(e);
        break;
      case 92:
        Sn();
        break;
    }
  return fn;
}
function Qb(e, t) {
  for (; Sn() && e + kt !== 57; )
    if (e + kt === 84 && hr() === 47)
      break;
  return "/*" + dl(t, fn - 1) + "*" + yc(e === 47 ? e : Sn());
}
function Xb(e) {
  for (; !qs(hr()); )
    Sn();
  return dl(e, fn);
}
function qb(e) {
  return b0(pa("", null, null, null, [""], e = S0(e), 0, [0], e));
}
function pa(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, d = 0, m = s, v = 0, f = 0, x = 0, b = 1, C = 1, g = 1, h = 0, S = "", w = o, E = i, k = r, R = S; C; )
    switch (x = h, h = Sn()) {
      case 40:
        if (x != 108 && Lt(R, m - 1) == 58) {
          Qd(R += ze(fa(h), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += fa(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Yb(x);
        break;
      case 92:
        R += Gb(da() - 1, 7);
        continue;
      case 47:
        switch (hr()) {
          case 42:
          case 47:
            Fl(Zb(Qb(Sn(), da()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[c++] = lr(R) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            g == -1 && (R = ze(R, /\f/g, "")), f > 0 && lr(R) - m && Fl(f > 32 ? mh(R + ";", r, n, m - 1) : mh(ze(R, " ", "") + ";", r, n, m - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Fl(k = ph(R, t, n, c, d, o, l, S, w = [], E = [], m), i), h === 123)
              if (d === 0)
                pa(R, t, k, k, w, i, m, l, E);
              else
                switch (v === 99 && Lt(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pa(e, k, k, r && Fl(ph(e, k, k, 0, 0, o, l, S, o, w = [], m), E), o, E, m, l, r ? w : E);
                    break;
                  default:
                    pa(R, k, k, k, [""], E, 0, l, E);
                }
        }
        c = d = f = 0, b = g = 1, S = R = "", m = s;
        break;
      case 58:
        m = 1 + lr(R), f = x;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && Kb() == 125)
            continue;
        }
        switch (R += yc(h), h * b) {
          case 38:
            g = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[c++] = (lr(R) - 1) * g, g = 1;
            break;
          case 64:
            hr() === 45 && (R += fa(Sn())), v = hr(), d = m = lr(S = R += Xb(da())), h++;
            break;
          case 45:
            x === 45 && lr(R) == 2 && (b = 0);
        }
    }
  return i;
}
function ph(e, t, n, r, o, i, s, l, a, c, d) {
  for (var m = o - 1, v = o === 0 ? i : [""], f = gp(v), x = 0, b = 0, C = 0; x < r; ++x)
    for (var g = 0, h = Xs(e, m + 1, m = Fb(b = s[x])), S = e; g < f; ++g)
      (S = v0(b > 0 ? v[g] + " " + h : ze(h, /&\f/g, v[g]))) && (a[C++] = S);
  return xc(e, t, n, o === 0 ? mp : l, a, c, d);
}
function Zb(e, t, n) {
  return xc(e, t, n, g0, yc(Vb()), Xs(e, 2, -2), 0);
}
function mh(e, t, n, r) {
  return xc(e, t, n, hp, Xs(e, 0, r), Xs(e, r + 1, -1), r);
}
function ki(e, t) {
  for (var n = "", r = gp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function Jb(e, t, n, r) {
  switch (e.type) {
    case Db:
      if (e.children.length) break;
    case Bb:
    case hp:
      return e.return = e.return || e.value;
    case g0:
      return "";
    case y0:
      return e.return = e.value + "{" + ki(e.children, r) + "}";
    case mp:
      e.value = e.props.join(",");
  }
  return lr(n = ki(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ew(e) {
  var t = gp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function tw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function w0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var nw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = hr(), o === 38 && i === 12 && (n[r] = 1), !qs(i); )
    Sn();
  return dl(t, fn);
}, rw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (qs(o)) {
      case 0:
        o === 38 && hr() === 12 && (n[r] = 1), t[r] += nw(fn - 1, n, r);
        break;
      case 2:
        t[r] += fa(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = hr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += yc(o);
    }
  while (o = Sn());
  return t;
}, ow = function(t, n) {
  return b0(rw(S0(t), n));
}, hh = /* @__PURE__ */ new WeakMap(), iw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !hh.get(r)) && !o) {
      hh.set(t, !0);
      for (var i = [], s = ow(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, sw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function C0(e, t) {
  switch (Wb(e, t)) {
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
      return Le + e + Wa + e + Ut + e + e;
    case 6828:
    case 4268:
      return Le + e + Ut + e + e;
    case 6165:
      return Le + e + Ut + "flex-" + e + e;
    case 5187:
      return Le + e + ze(e, /(\w+).+(:[^]+)/, Le + "box-$1$2" + Ut + "flex-$1$2") + e;
    case 5443:
      return Le + e + Ut + "flex-item-" + ze(e, /flex-|-self/, "") + e;
    case 4675:
      return Le + e + Ut + "flex-line-pack" + ze(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Le + e + Ut + ze(e, "shrink", "negative") + e;
    case 5292:
      return Le + e + Ut + ze(e, "basis", "preferred-size") + e;
    case 6060:
      return Le + "box-" + ze(e, "-grow", "") + Le + e + Ut + ze(e, "grow", "positive") + e;
    case 4554:
      return Le + ze(e, /([^-])(transform)/g, "$1" + Le + "$2") + e;
    case 6187:
      return ze(ze(ze(e, /(zoom-|grab)/, Le + "$1"), /(image-set)/, Le + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return ze(e, /(image-set\([^]*)/, Le + "$1$`$1");
    case 4968:
      return ze(ze(e, /(.+:)(flex-)?(.*)/, Le + "box-pack:$3" + Ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Le + e + e;
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
      if (lr(e) - 1 - t > 6) switch (Lt(e, t + 1)) {
        case 109:
          if (Lt(e, t + 4) !== 45) break;
        case 102:
          return ze(e, /(.+:)(.+)-([^]+)/, "$1" + Le + "$2-$3$1" + Wa + (Lt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Qd(e, "stretch") ? C0(ze(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Lt(e, t + 1) !== 115) break;
    case 6444:
      switch (Lt(e, lr(e) - 3 - (~Qd(e, "!important") && 10))) {
        case 107:
          return ze(e, ":", ":" + Le) + e;
        case 101:
          return ze(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Le + (Lt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Le + "$2$3$1" + Ut + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Lt(e, t + 11)) {
        case 114:
          return Le + e + Ut + ze(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Le + e + Ut + ze(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Le + e + Ut + ze(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Le + e + Ut + e + e;
  }
  return e;
}
var lw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case hp:
      t.return = C0(t.value, t.length);
      break;
    case y0:
      return ki([ss(t, {
        value: ze(t.value, "@", "@" + Le)
      })], o);
    case mp:
      if (t.length) return Hb(t.props, function(i) {
        switch (Ub(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ki([ss(t, {
              props: [ze(i, /:(read-\w+)/, ":" + Wa + "$1")]
            })], o);
          case "::placeholder":
            return ki([ss(t, {
              props: [ze(i, /:(plac\w+)/, ":" + Le + "input-$1")]
            }), ss(t, {
              props: [ze(i, /:(plac\w+)/, ":" + Wa + "$1")]
            }), ss(t, {
              props: [ze(i, /:(plac\w+)/, Ut + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, aw = [lw], cw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || aw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var C = b.getAttribute("data-emotion").split(" "), g = 1; g < C.length; g++)
        i[C[g]] = !0;
      l.push(b);
    }
  );
  var a, c = [iw, sw];
  {
    var d, m = [Jb, tw(function(b) {
      d.insert(b);
    })], v = ew(c.concat(o, m)), f = function(C) {
      return ki(qb(C), v);
    };
    a = function(C, g, h, S) {
      d = h, f(C ? C + "{" + g.styles + "}" : g.styles), S && (x.inserted[g.name] = !0);
    };
  }
  var x = {
    key: n,
    sheet: new zb({
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
}, k0 = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jt = typeof Symbol == "function" && Symbol.for, yp = jt ? Symbol.for("react.element") : 60103, vp = jt ? Symbol.for("react.portal") : 60106, Sc = jt ? Symbol.for("react.fragment") : 60107, bc = jt ? Symbol.for("react.strict_mode") : 60108, wc = jt ? Symbol.for("react.profiler") : 60114, Cc = jt ? Symbol.for("react.provider") : 60109, kc = jt ? Symbol.for("react.context") : 60110, xp = jt ? Symbol.for("react.async_mode") : 60111, Ec = jt ? Symbol.for("react.concurrent_mode") : 60111, Tc = jt ? Symbol.for("react.forward_ref") : 60112, Rc = jt ? Symbol.for("react.suspense") : 60113, uw = jt ? Symbol.for("react.suspense_list") : 60120, Pc = jt ? Symbol.for("react.memo") : 60115, Mc = jt ? Symbol.for("react.lazy") : 60116, dw = jt ? Symbol.for("react.block") : 60121, fw = jt ? Symbol.for("react.fundamental") : 60117, pw = jt ? Symbol.for("react.responder") : 60118, mw = jt ? Symbol.for("react.scope") : 60119;
function En(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yp:
        switch (e = e.type, e) {
          case xp:
          case Ec:
          case Sc:
          case wc:
          case bc:
          case Rc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case kc:
              case Tc:
              case Mc:
              case Pc:
              case Cc:
                return e;
              default:
                return t;
            }
        }
      case vp:
        return t;
    }
  }
}
function E0(e) {
  return En(e) === Ec;
}
Ye.AsyncMode = xp;
Ye.ConcurrentMode = Ec;
Ye.ContextConsumer = kc;
Ye.ContextProvider = Cc;
Ye.Element = yp;
Ye.ForwardRef = Tc;
Ye.Fragment = Sc;
Ye.Lazy = Mc;
Ye.Memo = Pc;
Ye.Portal = vp;
Ye.Profiler = wc;
Ye.StrictMode = bc;
Ye.Suspense = Rc;
Ye.isAsyncMode = function(e) {
  return E0(e) || En(e) === xp;
};
Ye.isConcurrentMode = E0;
Ye.isContextConsumer = function(e) {
  return En(e) === kc;
};
Ye.isContextProvider = function(e) {
  return En(e) === Cc;
};
Ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yp;
};
Ye.isForwardRef = function(e) {
  return En(e) === Tc;
};
Ye.isFragment = function(e) {
  return En(e) === Sc;
};
Ye.isLazy = function(e) {
  return En(e) === Mc;
};
Ye.isMemo = function(e) {
  return En(e) === Pc;
};
Ye.isPortal = function(e) {
  return En(e) === vp;
};
Ye.isProfiler = function(e) {
  return En(e) === wc;
};
Ye.isStrictMode = function(e) {
  return En(e) === bc;
};
Ye.isSuspense = function(e) {
  return En(e) === Rc;
};
Ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Sc || e === Ec || e === wc || e === bc || e === Rc || e === uw || typeof e == "object" && e !== null && (e.$$typeof === Mc || e.$$typeof === Pc || e.$$typeof === Cc || e.$$typeof === kc || e.$$typeof === Tc || e.$$typeof === fw || e.$$typeof === pw || e.$$typeof === mw || e.$$typeof === dw);
};
Ye.typeOf = En;
k0.exports = Ye;
var hw = k0.exports, T0 = hw, gw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, yw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, R0 = {};
R0[T0.ForwardRef] = gw;
R0[T0.Memo] = yw;
var vw = !0;
function P0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Sp = function(t, n, r) {
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
  vw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, bp = function(t, n, r) {
  Sp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xw(e) {
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
}, bw = /[A-Z]|^ms/g, ww = /_EMO_([^_]+?)_([^]*?)_EMO_/g, M0 = function(t) {
  return t.charCodeAt(1) === 45;
}, gh = function(t) {
  return t != null && typeof t != "boolean";
}, Du = /* @__PURE__ */ w0(function(e) {
  return M0(e) ? e : e.replace(bw, "-$&").toLowerCase();
}), yh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(ww, function(r, o, i) {
          return ar = {
            name: o,
            styles: i,
            next: ar
          }, o;
        });
  }
  return Sw[t] !== 1 && !M0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Zs(e, t, n) {
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
        return ar = {
          name: o.name,
          styles: o.styles,
          next: ar
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ar = {
              name: s.name,
              styles: s.styles,
              next: ar
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Cw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = ar, c = n(e);
        return ar = a, Zs(e, t, c);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var m = t[d];
  return m !== void 0 ? m : d;
}
function Cw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Zs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : gh(l) && (r += Du(i) + ":" + yh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          gh(s[a]) && (r += Du(i) + ":" + yh(i, s[a]) + ";");
      else {
        var c = Zs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Du(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var vh = /label:\s*([^\s;{]+)\s*(;|$)/g, ar;
function fl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  ar = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Zs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Zs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  vh.lastIndex = 0;
  for (var c = "", d; (d = vh.exec(o)) !== null; )
    c += "-" + d[1];
  var m = xw(o) + c;
  return {
    name: m,
    styles: o,
    next: ar
  };
}
var kw = function(t) {
  return t();
}, I0 = ya.useInsertionEffect ? ya.useInsertionEffect : !1, $0 = I0 || kw, xh = I0 || p.useLayoutEffect, j0 = /* @__PURE__ */ p.createContext(
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
j0.Provider;
var wp = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(j0);
    return t(n, o, r);
  });
}, pl = /* @__PURE__ */ p.createContext({}), Cp = {}.hasOwnProperty, qd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ew = function(t, n) {
  var r = {};
  for (var o in n)
    Cp.call(n, o) && (r[o] = n[o]);
  return r[qd] = t, r;
}, Tw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Sp(n, r, o), $0(function() {
    return bp(n, r, o);
  }), null;
}, Rw = /* @__PURE__ */ wp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[qd], i = [r], s = "";
  typeof e.className == "string" ? s = P0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = fl(i, void 0, p.useContext(pl));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    Cp.call(e, c) && c !== "css" && c !== qd && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Tw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, a));
}), Pw = Rw, Sh = function(t, n) {
  var r = arguments;
  if (n == null || !Cp.call(n, "css"))
    return p.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Pw, i[1] = Ew(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return p.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Sh || (Sh = {}));
var Mw = /* @__PURE__ */ wp(function(e, t) {
  var n = e.styles, r = fl([n], void 0, p.useContext(pl)), o = p.useRef();
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
    if (r.next !== void 0 && bp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Js() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return fl(t);
}
function ml() {
  var e = Js.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Iw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $w = /* @__PURE__ */ w0(
  function(e) {
    return Iw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jw = $w, Ow = function(t) {
  return t !== "theme";
}, bh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? jw : Ow;
}, wh = function(t, n, r) {
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
  return Sp(n, r, o), $0(function() {
    return bp(n, r, o);
  }), null;
}, Nw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = wh(t, n, r), a = l || bh(o), c = !a("as");
  return function() {
    var d = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      m.push.apply(m, d);
    else {
      var v = d[0];
      m.push(v[0]);
      for (var f = d.length, x = 1; x < f; x++)
        m.push(d[x], v[x]);
    }
    var b = wp(function(C, g, h) {
      var S = c && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = p.useContext(pl);
      }
      typeof C.className == "string" ? w = P0(g.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var T = fl(m.concat(E), g.registered, k);
      w += g.key + "-" + T.name, s !== void 0 && (w += " " + s);
      var O = c && l === void 0 ? bh(S) : a, N = {};
      for (var I in C)
        c && I === "as" || O(I) && (N[I] = C[I]);
      return N.className = w, h && (N.ref = h), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Aw, {
        cache: g,
        serialized: T,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ p.createElement(S, N));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, g) {
      var h = e(C, Gd({}, n, g, {
        shouldForwardProp: wh(b, g, !0)
      }));
      return h.apply(void 0, m);
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
], Zd = Nw.bind(null);
Lw.forEach(function(e) {
  Zd[e] = Zd(e);
});
function zw(e) {
  return e == null || Object.keys(e).length === 0;
}
function O0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(zw(o) ? n : o) : t;
  return /* @__PURE__ */ u.jsx(Mw, {
    styles: r
  });
}
function A0(e, t) {
  return Zd(e, t);
}
function Bw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Ch = [];
function so(e) {
  return Ch[0] = e, fl(Ch);
}
var N0 = { exports: {} }, Xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp = Symbol.for("react.transitional.element"), Ep = Symbol.for("react.portal"), Ic = Symbol.for("react.fragment"), $c = Symbol.for("react.strict_mode"), jc = Symbol.for("react.profiler"), Oc = Symbol.for("react.consumer"), Ac = Symbol.for("react.context"), Nc = Symbol.for("react.forward_ref"), Lc = Symbol.for("react.suspense"), zc = Symbol.for("react.suspense_list"), Bc = Symbol.for("react.memo"), Dc = Symbol.for("react.lazy"), Dw = Symbol.for("react.view_transition"), Fw = Symbol.for("react.client.reference");
function Wn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case kp:
        switch (e = e.type, e) {
          case Ic:
          case jc:
          case $c:
          case Lc:
          case zc:
          case Dw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Ac:
              case Nc:
              case Dc:
              case Bc:
                return e;
              case Oc:
                return e;
              default:
                return t;
            }
        }
      case Ep:
        return t;
    }
  }
}
Xe.ContextConsumer = Oc;
Xe.ContextProvider = Ac;
Xe.Element = kp;
Xe.ForwardRef = Nc;
Xe.Fragment = Ic;
Xe.Lazy = Dc;
Xe.Memo = Bc;
Xe.Portal = Ep;
Xe.Profiler = jc;
Xe.StrictMode = $c;
Xe.Suspense = Lc;
Xe.SuspenseList = zc;
Xe.isContextConsumer = function(e) {
  return Wn(e) === Oc;
};
Xe.isContextProvider = function(e) {
  return Wn(e) === Ac;
};
Xe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kp;
};
Xe.isForwardRef = function(e) {
  return Wn(e) === Nc;
};
Xe.isFragment = function(e) {
  return Wn(e) === Ic;
};
Xe.isLazy = function(e) {
  return Wn(e) === Dc;
};
Xe.isMemo = function(e) {
  return Wn(e) === Bc;
};
Xe.isPortal = function(e) {
  return Wn(e) === Ep;
};
Xe.isProfiler = function(e) {
  return Wn(e) === jc;
};
Xe.isStrictMode = function(e) {
  return Wn(e) === $c;
};
Xe.isSuspense = function(e) {
  return Wn(e) === Lc;
};
Xe.isSuspenseList = function(e) {
  return Wn(e) === zc;
};
Xe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ic || e === jc || e === $c || e === Lc || e === zc || typeof e == "object" && e !== null && (e.$$typeof === Dc || e.$$typeof === Bc || e.$$typeof === Ac || e.$$typeof === Oc || e.$$typeof === Nc || e.$$typeof === Fw || e.getModuleId !== void 0);
};
Xe.typeOf = Wn;
N0.exports = Xe;
var L0 = N0.exports;
function kr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function z0(e) {
  if (/* @__PURE__ */ p.isValidElement(e) || L0.isValidElementType(e) || !kr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = z0(e[n]);
  }), t;
}
function Bt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return kr(e) && kr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ p.isValidElement(t[o]) || L0.isValidElementType(t[o]) ? r[o] = t[o] : kr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && kr(e[o]) ? r[o] = Bt(e[o], t[o], n) : n.clone ? r[o] = kr(t[o]) ? z0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const _w = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function B0(e) {
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
  } = e, i = _w(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function c(f, x) {
    const b = s.indexOf(x);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : x) - r / 100}${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? c(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function m(f) {
    const x = s.indexOf(f);
    return x === 0 ? l(s[1]) : x === s.length - 1 ? a(s[x]) : c(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const v = [];
  for (let f = 0; f < s.length; f += 1)
    v.push(l(s[f]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: c,
    only: d,
    not: m,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const kh = /min-width:\s*([0-9.]+)/;
function Eh(e, t) {
  if (!e.containerQueries || !Ww(t))
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
function Ww(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function D0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Uw(e, t) {
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
const Vw = {
  borderRadius: 4
};
function F0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Ei(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Xw(t) ? t : qw(e) ? Ni(t) : n && r ? Gw(e, t) : n !== r ? Ni(t) : Zw(e, t);
}
function Kw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Ni(e[t]);
  return r;
}
function Yw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Ni(e[n]));
  return t;
}
function Gw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Ni(t[r]);
  return e;
}
function Qw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Xw(e) {
  return typeof e != "object" || e === null;
}
function qw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Ni(e) {
  return Qw(e) ? Array.isArray(e) ? Kw(e) : Yw(e) : e;
}
function Zw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = Ei(e[n], t[n]) : e[n] = Ni(t[n]));
  return e;
}
const Jw = {}, Fc = {
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
}, Ua = B0({
  values: Fc
}), eC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Fc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function co(e, t, n) {
  const r = {};
  return _c(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : Ei(r, l);
  });
}
function _c(e, t, n, r) {
  if (t ?? (t = Jw), Array.isArray(n)) {
    const o = t.breakpoints ?? Ua;
    for (let i = 0; i < n.length; i += 1)
      Fu(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Ua, i = o.values ?? Fc;
    for (const s in n)
      if (D0(o.keys, s)) {
        const l = Uw(t.containerQueries ? t : eC, s);
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
function _0(e = Ua) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Jd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    F0(t[o]) && delete t[o];
  }
  return t;
}
function tC(e, ...t) {
  const r = [_0(e), ...t].reduce((o, i) => Bt(o, i), {});
  return Jd(e, r);
}
function nC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function _u(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || nC(t, n), i = Object.keys(o);
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
function rC(e, t) {
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
function ae(e) {
  if (typeof e != "string")
    throw new Error(jr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function W0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Wc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Wc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Th(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Th(e, o, r);
}
function Th(e, t, n = void 0) {
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
function St(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], a = s.theme, c = Wc(a, r) || {};
    return co(s, l, (m) => {
      const v = W0(c, o, m, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const oC = {
  internal_cache: {}
}, Ha = {
  m: "margin",
  p: "padding"
}, Rh = {
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
}, el = {};
for (const e in Ha)
  el[e] = [Ha[e]];
for (const e in Ha)
  for (const t in Rh) {
    const n = Ha[e], r = Rh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    el[e + t] = o;
  }
for (const e in Ph)
  el[e] = el[Ph[e]];
const Tp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Rp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Tp, ...Rp];
function hl(e, t, n, r) {
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
  return hl(e, "spacing", 8);
}
function _o(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Mh = [""];
function U0(e, t) {
  var i;
  const n = e.theme ?? oC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Uc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = el[s] ?? (Mh[0] = s, Mh), a = e[s];
    _c(o, e.theme, a, (c, d) => {
      const m = c ? o[c] : o;
      for (let v = 0; v < l.length; v += 1)
        m[l[v]] = _o(r, d);
    });
  }
  return o;
}
function Pp(e) {
  return U0(e, Tp);
}
Pp.propTypes = {};
Pp.filterProps = Tp;
const bt = Pp;
function Mp(e) {
  return U0(e, Rp);
}
Mp.propTypes = {};
Mp.filterProps = Rp;
const wt = Mp;
function H0(e = 8, t = Uc({
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
      t[i] && Ei(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function jn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Un(e, t) {
  return St({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const iC = Un("border", jn), sC = Un("borderTop", jn), lC = Un("borderRight", jn), aC = Un("borderBottom", jn), cC = Un("borderLeft", jn), uC = Un("borderColor"), dC = Un("borderTopColor"), fC = Un("borderRightColor"), pC = Un("borderBottomColor"), mC = Un("borderLeftColor"), hC = Un("outline", jn), gC = Un("outlineColor"), Vc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = hl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: _o(t, r)
    });
    return co(e, e.borderRadius, n);
  }
  return null;
};
Vc.propTypes = {};
Vc.filterProps = ["borderRadius"];
Hc(iC, sC, lC, aC, cC, uC, dC, fC, pC, mC, Vc, hC, gC);
const Kc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = hl(e.theme, "spacing", 8), n = (r) => ({
      gap: _o(t, r)
    });
    return co(e, e.gap, n);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["gap"];
const Yc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = hl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: _o(t, r)
    });
    return co(e, e.columnGap, n);
  }
  return null;
};
Yc.propTypes = {};
Yc.filterProps = ["columnGap"];
const Gc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = hl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: _o(t, r)
    });
    return co(e, e.rowGap, n);
  }
  return null;
};
Gc.propTypes = {};
Gc.filterProps = ["rowGap"];
const yC = St({
  prop: "gridColumn"
}), vC = St({
  prop: "gridRow"
}), xC = St({
  prop: "gridAutoFlow"
}), SC = St({
  prop: "gridAutoColumns"
}), bC = St({
  prop: "gridAutoRows"
}), wC = St({
  prop: "gridTemplateColumns"
}), CC = St({
  prop: "gridTemplateRows"
}), kC = St({
  prop: "gridTemplateAreas"
}), EC = St({
  prop: "gridArea"
});
Hc(Kc, Yc, Gc, yC, vC, xC, SC, bC, wC, CC, kC, EC);
function Ti(e, t) {
  return t === "grey" ? t : e;
}
const TC = St({
  prop: "color",
  themeKey: "palette",
  transform: Ti
}), RC = St({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ti
}), PC = St({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ti
});
Hc(TC, RC, PC);
const MC = Fc;
function yn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const IC = St({
  prop: "width",
  transform: yn
}), Ip = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || MC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: yn(n)
      };
    };
    return co(e, e.maxWidth, t);
  }
  return null;
};
Ip.filterProps = ["maxWidth"];
const $C = St({
  prop: "minWidth",
  transform: yn
}), jC = St({
  prop: "height",
  transform: yn
}), OC = St({
  prop: "maxHeight",
  transform: yn
}), AC = St({
  prop: "minHeight",
  transform: yn
});
St({
  prop: "size",
  cssProperty: "width",
  transform: yn
});
St({
  prop: "size",
  cssProperty: "height",
  transform: yn
});
const NC = St({
  prop: "boxSizing"
});
Hc(IC, Ip, $C, jC, OC, AC, NC);
const Qc = {
  // borders
  border: {
    themeKey: "borders",
    transform: jn
  },
  borderTop: {
    themeKey: "borders",
    transform: jn
  },
  borderRight: {
    themeKey: "borders",
    transform: jn
  },
  borderBottom: {
    themeKey: "borders",
    transform: jn
  },
  borderLeft: {
    themeKey: "borders",
    transform: jn
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
    transform: jn
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
    transform: Ti
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ti
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ti
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
    style: bt
  },
  mt: {
    style: bt
  },
  mr: {
    style: bt
  },
  mb: {
    style: bt
  },
  ml: {
    style: bt
  },
  mx: {
    style: bt
  },
  my: {
    style: bt
  },
  margin: {
    style: bt
  },
  marginTop: {
    style: bt
  },
  marginRight: {
    style: bt
  },
  marginBottom: {
    style: bt
  },
  marginLeft: {
    style: bt
  },
  marginX: {
    style: bt
  },
  marginY: {
    style: bt
  },
  marginInline: {
    style: bt
  },
  marginInlineStart: {
    style: bt
  },
  marginInlineEnd: {
    style: bt
  },
  marginBlock: {
    style: bt
  },
  marginBlockStart: {
    style: bt
  },
  marginBlockEnd: {
    style: bt
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
    transform: yn
  },
  maxWidth: {
    style: Ip
  },
  minWidth: {
    transform: yn
  },
  height: {
    transform: yn
  },
  maxHeight: {
    transform: yn
  },
  minHeight: {
    transform: yn
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
function zC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = LC,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Qc, s = {
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
      const d = r.breakpoints ?? Ua, m = _0(d);
      for (const v in c) {
        const f = BC(c[v], r);
        if (f != null) {
          if (typeof f != "object") {
            Ih(m, v, f, r, i);
            continue;
          }
          if (i[v]) {
            Ih(m, v, f, r, i);
            continue;
          }
          rC(d, f) ? _c(m, t.theme, f, (x, b) => {
            m[x][v] = b;
          }) : (s.sx = f, m[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Eh(r, Jd(d, m))
      } : Eh(r, Jd(d, m));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Wo = zC();
function Ih(e, t, n, r, o) {
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
    Ei(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: c
  } = i, d = Wc(r, s);
  _c(e, r, n, (m, v) => {
    const f = W0(d, c, v, t);
    a === !1 ? Ei(m ? e[m] : e, f) : m ? e[m][a] = f : e[a] = f;
  });
}
function BC(e, t) {
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
function Xc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = B0(n), a = H0(o);
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
      ...Vw,
      ...i
    }
  }, s);
  return c = Hw(c), c.applyStyles = DC, c = t.reduce((d, m) => Bt(d, m), c), c.unstable_sxConfig = {
    ...Qc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, c.unstable_sx = function(m) {
    return Wo({
      sx: m,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function FC(e) {
  return Object.keys(e).length === 0;
}
function $p(e = null) {
  const t = p.useContext(pl);
  return !t || FC(t) ? e : t;
}
const _C = Xc();
function qc(e = _C) {
  return $p(e);
}
function Wu(e) {
  const t = so(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function V0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = qc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Wu(typeof s == "function" ? s(o) : s)) : i = Wu(i)), /* @__PURE__ */ u.jsx(O0, {
    styles: i
  });
}
const $h = (e) => e, WC = () => {
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
}, K0 = WC();
function Y0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Y0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function re() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Y0(e)) && (r && (r += " "), r += t);
  return r;
}
function UC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = A0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Wo);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const d = qc(n), {
      className: m,
      component: v = "div",
      ...f
    } = a;
    return /* @__PURE__ */ u.jsx(i, {
      as: v,
      ref: c,
      className: re(m, o ? o(r) : r),
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
function pe(e, t, n = "Mui") {
  const r = HC[t];
  return r ? `${n}-${r}` : `${K0.generate(e)}-${t}`;
}
function de(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = pe(e, o, n);
  }), r;
}
function G0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: so(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = so(o.style));
  }), r;
}
const VC = Xc();
function Uu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function $o(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function KC(e) {
  return e ? (t, n) => n[e] : null;
}
function YC(e, t, n) {
  e.theme = F0(e.theme) ? n : e.theme[t] || e.theme;
}
function ma(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => ma(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? $o(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? $o(so(s), n) : s;
    }
    return Q0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? $o(so(r.style), n) : r.style : n ? $o(so(r), n) : r;
}
function Q0(e, t, n = [], r = void 0) {
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
    }), n.push(r ? $o(so(l.style(o)), r) : l.style(o))) : n.push(r ? $o(so(l.style), r) : l.style);
  }
  return n;
}
function X0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = VC,
    rootShouldForwardProp: r = Uu,
    slotShouldForwardProp: o = Uu
  } = e;
  function i(l) {
    YC(l, t, n);
  }
  return (l, a = {}) => {
    Bw(l, (k) => k.filter((R) => R !== Wo));
    const {
      name: c,
      slot: d,
      skipVariantsResolver: m,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = KC(XC(d)),
      ...x
    } = a, b = c && c.startsWith("Mui") || d ? "components" : "custom", C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), g = v || !1;
    let h = Uu;
    d === "Root" || d === "root" ? h = r : d ? h = o : QC(l) && (h = void 0);
    const S = A0(l, {
      shouldForwardProp: h,
      label: GC(),
      ...x
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(T) {
          return ma(T, k, T.theme.modularCssLayers ? b : void 0);
        };
      if (kr(k)) {
        const R = G0(k);
        return function(O) {
          return R.variants ? ma(O, R, O.theme.modularCssLayers ? b : void 0) : O.theme.modularCssLayers ? $o(R.style, b) : R.style;
        };
      }
      return k;
    }, E = (...k) => {
      const R = [], T = k.map(w), O = [];
      if (R.push(i), c && f && O.push(function(j) {
        var L, $;
        const M = ($ = (L = j.theme.components) == null ? void 0 : L[c]) == null ? void 0 : $.styleOverrides;
        if (!M)
          return null;
        const A = {};
        for (const B in M)
          A[B] = ma(j, M[B], j.theme.modularCssLayers ? "theme" : void 0);
        return f(j, A);
      }), c && !C && O.push(function(j) {
        var A, L;
        const P = j.theme, M = (L = (A = P == null ? void 0 : P.components) == null ? void 0 : A[c]) == null ? void 0 : L.variants;
        return M ? Q0(j, M, [], j.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || O.push(Wo), Array.isArray(T[0])) {
        const y = T.shift(), j = new Array(R.length).fill(""), P = new Array(O.length).fill("");
        let M;
        M = [...j, ...y, ...P], M.raw = [...j, ...y.raw, ...P], R.unshift(M);
      }
      const N = [...R, ...T, ...O], I = S(...N);
      return l.muiName && (I.muiName = l.muiName), I;
    };
    return S.withConfig && (E.withConfig = S.withConfig), E;
  };
}
function GC(e, t) {
  return void 0;
}
function QC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function XC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const qC = X0();
function tl(e, t, n = !1) {
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
              r[i][c] = tl(s[c], l[c], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = re(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function ZC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : tl(t.components[n].defaultProps, r);
}
function JC(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = qc(r);
  return o && (i = i[o] || i), ZC({
    theme: i,
    name: n,
    props: t
  });
}
const ft = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function ek(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function jp(e, t = 0, n = 1) {
  return ek(e, t, n);
}
function tk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function uo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return uo(tk(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(jr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(jr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const nk = (e) => {
  const t = uo(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, hs = (e, t) => {
  try {
    return nk(e);
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
function q0(e) {
  e = uo(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, d = (c + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Zc({
    type: l,
    values: a
  });
}
function ef(e) {
  e = uo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? uo(q0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function rk(e, t) {
  const n = ef(e), r = ef(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function nl(e, t) {
  return e = uo(e), t = jp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Zc(e);
}
function So(e, t, n) {
  try {
    return nl(e, t);
  } catch {
    return e;
  }
}
function Jc(e, t) {
  if (e = uo(e), t = jp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Zc(e);
}
function Ue(e, t, n) {
  try {
    return Jc(e, t);
  } catch {
    return e;
  }
}
function eu(e, t) {
  if (e = uo(e), t = jp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Zc(e);
}
function He(e, t, n) {
  try {
    return eu(e, t);
  } catch {
    return e;
  }
}
function tf(e, t = 0.15) {
  return ef(e) > 0.5 ? Jc(e, t) : eu(e, t);
}
function _l(e, t, n) {
  try {
    return tf(e, t);
  } catch {
    return e;
  }
}
const Z0 = /* @__PURE__ */ p.createContext(null);
function Op() {
  return p.useContext(Z0);
}
const ok = typeof Symbol == "function" && Symbol.for, ik = ok ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function sk(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function lk(e) {
  const {
    children: t,
    theme: n
  } = e, r = Op(), o = p.useMemo(() => {
    const i = r === null ? {
      ...n
    } : sk(r, n);
    return i != null && (i[ik] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ u.jsx(Z0.Provider, {
    value: o,
    children: t
  });
}
const J0 = /* @__PURE__ */ p.createContext();
function ak({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(J0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const tu = () => p.useContext(J0) ?? !1, ex = /* @__PURE__ */ p.createContext(void 0);
function ck({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u.jsx(ex.Provider, {
    value: e,
    children: t
  });
}
function uk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? tl(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? tl(o, r, t.components.mergeClassNameAndStyle) : r;
}
function dk({
  props: e,
  name: t
}) {
  const n = p.useContext(ex);
  return uk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let jh = 0;
function fk(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (jh += 1, n(`mui-${jh}`));
  }, [t]), r;
}
const pk = {
  ...ya
}, Oh = pk.useId;
function Or(e) {
  if (Oh !== void 0) {
    const t = Oh();
    return e ?? t;
  }
  return fk(e);
}
function mk(e) {
  const t = $p(), n = Or() || "", {
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
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, i.prepend(c);
    } else
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ u.jsx(V0, {
    styles: o
  }) : null;
}
const Ah = {};
function Nh(e, t, n, r = !1) {
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
function tx(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = $p(Ah), i = Op() || Ah, s = Nh(r, o, n), l = Nh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = mk(s);
  return /* @__PURE__ */ u.jsx(lk, {
    theme: l,
    children: /* @__PURE__ */ u.jsx(pl.Provider, {
      value: s,
      children: /* @__PURE__ */ u.jsx(ak, {
        value: a,
        children: /* @__PURE__ */ u.jsxs(ck, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const Lh = {
  theme: void 0
};
function hk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Lh.theme = o.theme, i = G0(e(Lh)), t = i, n = o.theme), i;
  };
}
const Ap = "mode", Np = "color-scheme", gk = "data-color-scheme";
function yk(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Ap,
    colorSchemeStorageKey: i = Np,
    attribute: s = gk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const v = d.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const m = d.match(/\[([^[\]]+)\]/);
  if (m) {
    const [v, f] = m[1].split("=");
    f || (c += `${l}.removeAttribute('${v}'.replace('%s', light));
      ${l}.removeAttribute('${v}'.replace('%s', dark));`), c += `
      ${l}.setAttribute('${v}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
  } else d !== ".%s" && (c += `${l}.setAttribute('${d}', colorScheme);`);
  return /* @__PURE__ */ u.jsx("script", {
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
function vk() {
}
const xk = ({
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
      return vk;
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
function zh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function nx(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Sk(e) {
  return nx(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function bk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Ap,
    colorSchemeStorageKey: s = Np,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = xk,
    noSsr: c = !1
  } = e, d = o.join(","), m = o.length > 1, v = p.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), f = p.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), x = p.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = p.useState(() => {
    const T = (v == null ? void 0 : v.get(t)) || t, O = (f == null ? void 0 : f.get(n)) || n, N = (x == null ? void 0 : x.get(r)) || r;
    return {
      mode: T,
      systemMode: zh(T),
      lightColorScheme: O,
      darkColorScheme: N
    };
  }), [g, h] = p.useState(c || !m);
  p.useEffect(() => {
    h(!0);
  }, []);
  const S = Sk(b), w = p.useCallback((T) => {
    C((O) => {
      if (T === O.mode)
        return O;
      const N = T ?? t;
      return v == null || v.set(N), {
        ...O,
        mode: N,
        systemMode: zh(N)
      };
    });
  }, [v, t]), E = p.useCallback((T) => {
    T ? typeof T == "string" ? T && !d.includes(T) ? console.error(`\`${T}\` does not exist in \`theme.colorSchemes\`.`) : C((O) => {
      const N = {
        ...O
      };
      return nx(O, (I) => {
        I === "light" && (f == null || f.set(T), N.lightColorScheme = T), I === "dark" && (x == null || x.set(T), N.darkColorScheme = T);
      }), N;
    }) : C((O) => {
      const N = {
        ...O
      }, I = T.light === null ? n : T.light, y = T.dark === null ? r : T.dark;
      return I && (d.includes(I) ? (N.lightColorScheme = I, f == null || f.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), y && (d.includes(y) ? (N.darkColorScheme = y, x == null || x.set(y)) : console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`)), N;
    }) : C((O) => (f == null || f.set(n), x == null || x.set(r), {
      ...O,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, f, x, n, r]), k = p.useCallback((T) => {
    b.mode === "system" && C((O) => {
      const N = T != null && T.matches ? "dark" : "light";
      return O.systemMode === N ? O : {
        ...O,
        systemMode: N
      };
    });
  }, [b.mode]), R = p.useRef(k);
  return R.current = k, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const T = (...N) => R.current(...N), O = window.matchMedia("(prefers-color-scheme: dark)");
    return O.addListener(T), T(O), () => {
      O.removeListener(T);
    };
  }, [m]), p.useEffect(() => {
    if (m) {
      const T = (v == null ? void 0 : v.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && w(I || t);
      })) || Hu, O = (f == null ? void 0 : f.subscribe((I) => {
        (!I || d.match(I)) && E({
          light: I
        });
      })) || Hu, N = (x == null ? void 0 : x.subscribe((I) => {
        (!I || d.match(I)) && E({
          dark: I
        });
      })) || Hu;
      return () => {
        T(), O(), N();
      };
    }
  }, [E, w, d, t, l, m, v, f, x]), {
    ...b,
    mode: g ? b.mode : void 0,
    systemMode: g ? b.systemMode : void 0,
    colorScheme: g ? S : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const wk = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ck(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Ap,
    colorSchemeStorageKey: o = Np,
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
  }, c = /* @__PURE__ */ p.createContext(void 0), d = () => p.useContext(c) || a, m = {}, v = {};
  function f(g) {
    var Be, ve, We, yt;
    const {
      children: h,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: T = typeof window > "u" ? void 0 : window,
      documentNode: O = typeof document > "u" ? void 0 : document,
      colorSchemeNode: N = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: y = !1,
      defaultMode: j = "system",
      forceThemeRerender: P = !1,
      noSsr: M
    } = g, A = p.useRef(!1), L = Op(), $ = p.useContext(c), B = !!$ && !I, F = p.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), U = F[t], _ = U || F, {
      colorSchemes: X = m,
      components: V = v,
      cssVarPrefix: J
    } = _, G = Object.keys(X).filter((oe) => !!X[oe]).join(","), Q = p.useMemo(() => G.split(","), [G]), W = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, se = X[W] && X[ne] ? j : ((ve = (Be = X[_.defaultColorScheme]) == null ? void 0 : Be.palette) == null ? void 0 : ve.mode) || ((We = _.palette) == null ? void 0 : We.mode), {
      mode: Ee,
      setMode: Te,
      systemMode: ge,
      lightColorScheme: ce,
      darkColorScheme: Ne,
      colorScheme: je,
      setColorScheme: Se
    } = bk({
      supportedColorSchemes: Q,
      defaultLightColorScheme: W,
      defaultDarkColorScheme: ne,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: se,
      storageManager: R,
      storageWindow: T,
      noSsr: M
    });
    let Oe = Ee, ue = je;
    B && (Oe = $.mode, ue = $.colorScheme);
    let Pe = ue || _.defaultColorScheme;
    _.vars && !P && (Pe = _.defaultColorScheme);
    const et = p.useMemo(() => {
      var Ae;
      const oe = ((Ae = _.generateThemeVars) == null ? void 0 : Ae.call(_)) || _.vars, ye = {
        ..._,
        components: V,
        colorSchemes: X,
        cssVarPrefix: J,
        vars: oe
      };
      if (typeof ye.generateSpacing == "function" && (ye.spacing = ye.generateSpacing()), Pe) {
        const at = X[Pe];
        at && typeof at == "object" && Object.keys(at).forEach((we) => {
          at[we] && typeof at[we] == "object" ? ye[we] = {
            ...ye[we],
            ...at[we]
          } : ye[we] = at[we];
        });
      }
      return l ? l(ye) : ye;
    }, [_, Pe, V, X, J]), Ie = _.colorSchemeSelector;
    ft(() => {
      if (ue && N && Ie && Ie !== "media") {
        const oe = Ie;
        let ye = Ie;
        if (oe === "class" && (ye = ".%s"), oe === "data" && (ye = "[data-%s]"), oe != null && oe.startsWith("data-") && !oe.includes("%s") && (ye = `[${oe}="%s"]`), ye.startsWith("."))
          N.classList.remove(...Q.map((Ae) => ye.substring(1).replace("%s", Ae))), N.classList.add(ye.substring(1).replace("%s", ue));
        else {
          const Ae = ye.replace("%s", ue).match(/\[([^\]]+)\]/);
          if (Ae) {
            const [at, we] = Ae[1].split("=");
            we || Q.forEach((Hn) => {
              N.removeAttribute(at.replace(ue, Hn));
            }), N.setAttribute(at, we ? we.replace(/"|'/g, "") : "");
          } else
            N.setAttribute(ye, ue);
        }
      }
    }, [ue, Ie, N, Q]), p.useEffect(() => {
      let oe;
      if (k && A.current && O) {
        const ye = O.createElement("style");
        ye.appendChild(O.createTextNode(wk)), O.head.appendChild(ye), window.getComputedStyle(O.body), oe = setTimeout(() => {
          O.head.removeChild(ye);
        }, 1);
      }
      return () => {
        clearTimeout(oe);
      };
    }, [ue, k, O]), p.useEffect(() => (A.current = !0, () => {
      A.current = !1;
    }), []);
    const Me = p.useMemo(() => ({
      allColorSchemes: Q,
      colorScheme: ue,
      darkColorScheme: Ne,
      lightColorScheme: ce,
      mode: Oe,
      setColorScheme: Se,
      setMode: Te,
      systemMode: ge
    }), [Q, ue, Ne, ce, Oe, Se, Te, ge, et.colorSchemeSelector]);
    let _e = !0;
    (y || _.cssVariables === !1 || B && (L == null ? void 0 : L.cssVarPrefix) === J) && (_e = !1);
    const Ge = /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [/* @__PURE__ */ u.jsx(tx, {
        themeId: U ? t : void 0,
        theme: et,
        children: h
      }), _e && /* @__PURE__ */ u.jsx(O0, {
        styles: ((yt = et.generateStyleSheets) == null ? void 0 : yt.call(et)) || []
      })]
    });
    return B ? Ge : /* @__PURE__ */ u.jsx(c.Provider, {
      value: Me,
      children: Ge
    });
  }
  const x = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (g) => yk({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...g
    })
  };
}
function kk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Ek = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Bh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (Ek.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, Tk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, Rk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Vu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Tk(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, m = Rk(l, a);
        Object.assign(o, {
          [d]: m
        }), Bh(i, l, `var(${d})`, c), Bh(s, l, `var(${d}, ${m})`, c);
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
function Pk(e, t = {}) {
  const {
    getSelector: n = g,
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
    css: m,
    varsWithDefaults: v
  } = Vu(c, t);
  let f = v;
  const x = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: R,
      varsWithDefaults: T
    } = Vu(E, t);
    f = Bt(f, T), x[w] = {
      css: R,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Vu(b, t);
    f = Bt(f, k), x[a] = {
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
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        w = Bt(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      var O, N;
      const w = [], E = e.defaultColorScheme || "light";
      function k(I, y) {
        Object.keys(y).length && w.push(typeof I == "string" ? {
          [I]: {
            ...y
          }
        } : I);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [E]: R,
        ...T
      } = x;
      if (R) {
        const {
          css: I
        } = R, y = (N = (O = s[E]) == null ? void 0 : O.palette) == null ? void 0 : N.mode, j = !r && y ? {
          colorScheme: y,
          ...I
        } : {
          ...I
        };
        k(n(E, {
          ...j
        }), j);
      }
      return Object.entries(T).forEach(([I, {
        css: y
      }]) => {
        var M, A;
        const j = (A = (M = s[I]) == null ? void 0 : M.palette) == null ? void 0 : A.mode, P = !r && j ? {
          colorScheme: j,
          ...y
        } : {
          ...y
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
function Mk(e) {
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
      const c = i[a];
      c && (s += (l === !0 ? "" : " ") + t(c), l = !1, n && n[c] && (s += " " + n[c]));
    }
    r[o] = s;
  }
  return r;
}
function Ku(e, t) {
  var n, r, o;
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const Ik = Xc(), $k = qC("div", {
  name: "MuiStack",
  slot: "Root"
});
function jk(e) {
  return JC({
    props: e,
    name: "MuiStack",
    defaultTheme: Ik
  });
}
function Ok(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Ak = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Nk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...co({
      theme: t
    }, _u({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Uc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = _u({
      values: e.direction,
      base: o
    }), s = _u({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, d) => {
      if (!i[a]) {
        const v = c > 0 ? i[d[c - 1]] : "column";
        i[a] = v;
      }
    }), n = Bt(n, co({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: _o(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Ak(c ? i[c] : e.direction)}`]: _o(r, a)
      }
    }));
  }
  return n = tC(t.breakpoints, n), n;
};
function Lk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = $k,
    useThemeProps: n = jk,
    componentName: r = "MuiStack"
  } = e, o = () => me({
    root: ["root"]
  }, (a) => pe(r, a), {}), i = t(Nk);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const d = n(a), {
      component: m = "div",
      direction: v = "column",
      spacing: f = 0,
      divider: x,
      children: b,
      className: C,
      useFlexGap: g = !1,
      ...h
    } = d, S = {
      direction: v,
      spacing: f,
      useFlexGap: g
    }, w = o();
    return /* @__PURE__ */ u.jsx(i, {
      as: m,
      ownerState: S,
      ref: c,
      className: re(w.root, C),
      ...h,
      children: x ? Ok(b, x) : b
    });
  });
}
function rx() {
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
      paper: Qs.white,
      default: Qs.white
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
const ox = rx();
function ix() {
  return {
    text: {
      primary: Qs.white,
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
      active: Qs.white,
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
const nf = ix();
function Dh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = eu(e.main, o) : t === "dark" && (e.dark = Jc(e.main, i)));
}
function Fh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function zk(e = "light") {
  return e === "dark" ? {
    main: ei[200],
    light: ei[50],
    dark: ei[400]
  } : {
    main: ei[700],
    light: ei[400],
    dark: ei[800]
  };
}
function Bk(e = "light") {
  return e === "dark" ? {
    main: Jo[200],
    light: Jo[50],
    dark: Jo[400]
  } : {
    main: Jo[500],
    light: Jo[300],
    dark: Jo[700]
  };
}
function Dk(e = "light") {
  return e === "dark" ? {
    main: Zo[500],
    light: Zo[300],
    dark: Zo[700]
  } : {
    main: Zo[700],
    light: Zo[400],
    dark: Zo[800]
  };
}
function Fk(e = "light") {
  return e === "dark" ? {
    main: ti[400],
    light: ti[300],
    dark: ti[700]
  } : {
    main: ti[700],
    light: ti[500],
    dark: ti[900]
  };
}
function _k(e = "light") {
  return e === "dark" ? {
    main: ni[400],
    light: ni[300],
    dark: ni[700]
  } : {
    main: ni[800],
    light: ni[500],
    dark: ni[900]
  };
}
function Wk(e = "light") {
  return e === "dark" ? {
    main: is[400],
    light: is[300],
    dark: is[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: is[500],
    dark: is[900]
  };
}
function Uk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Lp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || zk(t), l = e.secondary || Bk(t), a = e.error || Dk(t), c = e.info || Fk(t), d = e.success || _k(t), m = e.warning || Wk(t);
  function v(C) {
    return o ? Uk(C) : rk(C, nf.text.primary) >= n ? nf.text.primary : ox.text.primary;
  }
  const f = ({
    color: C,
    name: g,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[h] && (C.main = C[h]), !C.hasOwnProperty("main"))
      throw new Error(jr(11, g ? ` (${g})` : "", h));
    if (typeof C.main != "string")
      throw new Error(jr(12, g ? ` (${g})` : "", JSON.stringify(C.main)));
    return o ? (Fh(o, C, "light", S, r), Fh(o, C, "dark", w, r)) : (Dh(C, "light", S, r), Dh(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let x;
  return t === "light" ? x = rx() : t === "dark" && (x = ix()), Bt({
    // A collection of common colors.
    common: {
      ...Qs
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
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: d,
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
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...x
  }, i);
}
function Hk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Vk(e, t) {
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
function Kk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const _h = {
  textTransform: "uppercase"
}, Wh = '"Roboto", "Helvetica", "Arial", sans-serif';
function sx(e, t) {
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
    allVariants: c,
    pxToRem: d,
    ...m
  } = typeof t == "function" ? t(e) : t, v = r / 14, f = d || ((C) => `${C / a * v}rem`), x = (C, g, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: f(g),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Wh ? {
      letterSpacing: `${Kk(S / g)}em`
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
    button: x(s, 14, 1.75, 0.4, _h),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, _h),
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
    pxToRem: f,
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
const Yk = 0.2, Gk = 0.14, Qk = 0.12;
function st(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Yk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Gk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Qk})`].join(",");
}
const Xk = ["none", st(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), st(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), st(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), st(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), st(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), st(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), st(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), st(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), st(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), st(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), st(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), st(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), st(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), st(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), st(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), st(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), st(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), st(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), st(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), st(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), st(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), st(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), st(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), st(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qk = ["all"], Zk = {}, Jk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, e2 = {
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
function t2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function n2(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...Jk,
    ...t.easing
  }, r = {
    ...e2,
    ...t.duration
  }, o = (s = qk, l = Zk) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: d = 0,
      ...m
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : Uh(a)} ${c} ${typeof d == "string" ? d : Uh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: t2,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const r2 = {};
function o2(e = r2) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const i2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function s2(e) {
  return kr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function lx(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !s2(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : kr(l) && (r[s] = {
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
const l2 = (e) => {
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
function a2(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : nl(t, l2(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Hh(n)})` : eu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Hh(n)})` : Jc(t, n);
    }
  });
}
function rf(e = {}, ...t) {
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
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(jr(22));
  const v = Lp({
    ...i,
    colorSpace: d
  }), f = Xc(e);
  let x = Bt(f, {
    mixins: Vk(f.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Xk.slice(),
    typography: sx(v, a),
    motion: o2(s),
    transitions: n2(l),
    zIndex: {
      ...i2
    }
  });
  return x = Bt(x, m), x = t.reduce((b, C) => Bt(b, C), x), delete x.transitions.reducedMotion, x.unstable_sxConfig = {
    ...Qc,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, x.unstable_sx = function(C) {
    return Wo({
      sx: C,
      theme: this
    });
  }, x.toRuntimeSource = lx, a2(x), x;
}
function of(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const c2 = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = of(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function ax(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function cx(e) {
  return e === "dark" ? c2 : [];
}
function u2(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Lp({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...ax(s.mode),
      ...n
    },
    overlays: r || cx(s.mode),
    ...i
  };
}
function d2(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const f2 = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], p2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return f2(e.cssVarPrefix).forEach((l) => {
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
function m2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function D(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function gs(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : q0(e);
}
function xr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = hs(gs(e[t])));
}
function h2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const or = (e) => {
  try {
    return e();
  } catch {
  }
}, g2 = (e = "mui") => kk(e);
function Yu(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = u2({
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
  } = rf({
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
      ...ax(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || cx(i)
  }, l;
}
function y2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = d2,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, m = Object.keys(n)[0], v = r || (n.light && m !== "light" ? "light" : m), f = g2(i), {
    [v]: x,
    light: b,
    dark: C,
    ...g
  } = n, h = {
    ...g
  };
  let S = x;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(jr(21, v));
  let w;
  s && (w = "oklch");
  const E = Yu(w, h, S, d, v);
  b && !h.light && Yu(w, h, b, void 0, "light"), C && !h.dark && Yu(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: f,
    colorSchemes: h,
    font: {
      ...Hk(E.typography),
      ...E.font
    },
    spacing: h2(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((I) => {
    const y = k.colorSchemes[I].palette, j = (M) => {
      const A = M.split("-"), L = A[1], $ = A[2];
      return f(M, y[L][$]);
    };
    y.mode === "light" && (D(y.common, "background", "#fff"), D(y.common, "onBackground", "#000")), y.mode === "dark" && (D(y.common, "background", "#000"), D(y.common, "onBackground", "#fff"));
    function P(M, A, L) {
      if (w) {
        let $;
        return M === So && ($ = `transparent ${((1 - L) * 100).toFixed(0)}%`), M === Ue && ($ = `#000 ${(L * 100).toFixed(0)}%`), M === He && ($ = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${w}, ${A}, ${$})`;
      }
      return M(A, L);
    }
    if (m2(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      D(y.Alert, "errorColor", P(Ue, s ? f("palette-error-light") : y.error.light, 0.6)), D(y.Alert, "infoColor", P(Ue, s ? f("palette-info-light") : y.info.light, 0.6)), D(y.Alert, "successColor", P(Ue, s ? f("palette-success-light") : y.success.light, 0.6)), D(y.Alert, "warningColor", P(Ue, s ? f("palette-warning-light") : y.warning.light, 0.6)), D(y.Alert, "errorFilledBg", j("palette-error-main")), D(y.Alert, "infoFilledBg", j("palette-info-main")), D(y.Alert, "successFilledBg", j("palette-success-main")), D(y.Alert, "warningFilledBg", j("palette-warning-main")), D(y.Alert, "errorFilledColor", or(() => y.getContrastText(y.error.main))), D(y.Alert, "infoFilledColor", or(() => y.getContrastText(y.info.main))), D(y.Alert, "successFilledColor", or(() => y.getContrastText(y.success.main))), D(y.Alert, "warningFilledColor", or(() => y.getContrastText(y.warning.main))), D(y.Alert, "errorStandardBg", P(He, s ? f("palette-error-light") : y.error.light, 0.9)), D(y.Alert, "infoStandardBg", P(He, s ? f("palette-info-light") : y.info.light, 0.9)), D(y.Alert, "successStandardBg", P(He, s ? f("palette-success-light") : y.success.light, 0.9)), D(y.Alert, "warningStandardBg", P(He, s ? f("palette-warning-light") : y.warning.light, 0.9)), D(y.Alert, "errorIconColor", j("palette-error-main")), D(y.Alert, "infoIconColor", j("palette-info-main")), D(y.Alert, "successIconColor", j("palette-success-main")), D(y.Alert, "warningIconColor", j("palette-warning-main")), D(y.AppBar, "defaultBg", j("palette-grey-100")), D(y.Avatar, "defaultBg", j("palette-grey-400")), D(y.Button, "inheritContainedBg", j("palette-grey-300")), D(y.Button, "inheritContainedHoverBg", j("palette-grey-A100")), D(y.Chip, "defaultBorder", j("palette-grey-400")), D(y.Chip, "defaultAvatarColor", j("palette-grey-700")), D(y.Chip, "defaultIconColor", j("palette-grey-700")), D(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(y.LinearProgress, "primaryBg", P(He, s ? f("palette-primary-main") : y.primary.main, 0.62)), D(y.LinearProgress, "secondaryBg", P(He, s ? f("palette-secondary-main") : y.secondary.main, 0.62)), D(y.LinearProgress, "errorBg", P(He, s ? f("palette-error-main") : y.error.main, 0.62)), D(y.LinearProgress, "infoBg", P(He, s ? f("palette-info-main") : y.info.main, 0.62)), D(y.LinearProgress, "successBg", P(He, s ? f("palette-success-main") : y.success.main, 0.62)), D(y.LinearProgress, "warningBg", P(He, s ? f("palette-warning-light") : y.warning.main, 0.62)), D(y.Skeleton, "bg", w ? P(So, s ? f("palette-text-primary") : y.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), D(y.Slider, "primaryTrack", P(He, s ? f("palette-primary-main") : y.primary.main, 0.62)), D(y.Slider, "secondaryTrack", P(He, s ? f("palette-secondary-main") : y.secondary.main, 0.62)), D(y.Slider, "errorTrack", P(He, s ? f("palette-error-main") : y.error.main, 0.62)), D(y.Slider, "infoTrack", P(He, s ? f("palette-info-main") : y.info.main, 0.62)), D(y.Slider, "successTrack", P(He, s ? f("palette-success-main") : y.success.main, 0.62)), D(y.Slider, "warningTrack", P(He, s ? f("palette-warning-main") : y.warning.main, 0.62));
      const M = w ? P(Ue, s ? f("palette-background-default") : y.background.default, 0.6825) : _l(y.background.default, 0.8);
      D(y.SnackbarContent, "bg", M), D(y.SnackbarContent, "color", or(() => w ? nf.text.primary : y.getContrastText(M))), D(y.SpeedDialAction, "fabHoverBg", _l(y.background.paper, 0.15)), D(y.StepConnector, "border", j("palette-grey-400")), D(y.StepContent, "border", j("palette-grey-400")), D(y.Switch, "defaultColor", j("palette-common-white")), D(y.Switch, "defaultDisabledColor", j("palette-grey-100")), D(y.Switch, "primaryDisabledColor", P(He, s ? f("palette-primary-main") : y.primary.main, 0.62)), D(y.Switch, "secondaryDisabledColor", P(He, s ? f("palette-secondary-main") : y.secondary.main, 0.62)), D(y.Switch, "errorDisabledColor", P(He, s ? f("palette-error-main") : y.error.main, 0.62)), D(y.Switch, "infoDisabledColor", P(He, s ? f("palette-info-main") : y.info.main, 0.62)), D(y.Switch, "successDisabledColor", P(He, s ? f("palette-success-main") : y.success.main, 0.62)), D(y.Switch, "warningDisabledColor", P(He, s ? f("palette-warning-main") : y.warning.main, 0.62)), D(y.TableCell, "border", P(He, So(s ? f("palette-divider") : y.divider, 1), 0.88)), D(y.Tooltip, "bg", P(So, s ? f("palette-grey-700") : y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      D(y.Alert, "errorColor", P(He, s ? f("palette-error-light") : y.error.light, 0.6)), D(y.Alert, "infoColor", P(He, s ? f("palette-info-light") : y.info.light, 0.6)), D(y.Alert, "successColor", P(He, s ? f("palette-success-light") : y.success.light, 0.6)), D(y.Alert, "warningColor", P(He, s ? f("palette-warning-light") : y.warning.light, 0.6)), D(y.Alert, "errorFilledBg", j("palette-error-dark")), D(y.Alert, "infoFilledBg", j("palette-info-dark")), D(y.Alert, "successFilledBg", j("palette-success-dark")), D(y.Alert, "warningFilledBg", j("palette-warning-dark")), D(y.Alert, "errorFilledColor", or(() => y.getContrastText(y.error.dark))), D(y.Alert, "infoFilledColor", or(() => y.getContrastText(y.info.dark))), D(y.Alert, "successFilledColor", or(() => y.getContrastText(y.success.dark))), D(y.Alert, "warningFilledColor", or(() => y.getContrastText(y.warning.dark))), D(y.Alert, "errorStandardBg", P(Ue, s ? f("palette-error-light") : y.error.light, 0.9)), D(y.Alert, "infoStandardBg", P(Ue, s ? f("palette-info-light") : y.info.light, 0.9)), D(y.Alert, "successStandardBg", P(Ue, s ? f("palette-success-light") : y.success.light, 0.9)), D(y.Alert, "warningStandardBg", P(Ue, s ? f("palette-warning-light") : y.warning.light, 0.9)), D(y.Alert, "errorIconColor", j("palette-error-main")), D(y.Alert, "infoIconColor", j("palette-info-main")), D(y.Alert, "successIconColor", j("palette-success-main")), D(y.Alert, "warningIconColor", j("palette-warning-main")), D(y.AppBar, "defaultBg", j("palette-grey-900")), D(y.AppBar, "darkBg", j("palette-background-paper")), D(y.AppBar, "darkColor", j("palette-text-primary")), D(y.Avatar, "defaultBg", j("palette-grey-600")), D(y.Button, "inheritContainedBg", j("palette-grey-800")), D(y.Button, "inheritContainedHoverBg", j("palette-grey-700")), D(y.Chip, "defaultBorder", j("palette-grey-700")), D(y.Chip, "defaultAvatarColor", j("palette-grey-300")), D(y.Chip, "defaultIconColor", j("palette-grey-300")), D(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(y.LinearProgress, "primaryBg", P(Ue, s ? f("palette-primary-main") : y.primary.main, 0.5)), D(y.LinearProgress, "secondaryBg", P(Ue, s ? f("palette-secondary-main") : y.secondary.main, 0.5)), D(y.LinearProgress, "errorBg", P(Ue, s ? f("palette-error-main") : y.error.main, 0.5)), D(y.LinearProgress, "infoBg", P(Ue, s ? f("palette-info-main") : y.info.main, 0.5)), D(y.LinearProgress, "successBg", P(Ue, s ? f("palette-success-main") : y.success.main, 0.5)), D(y.LinearProgress, "warningBg", P(Ue, s ? f("palette-warning-main") : y.warning.main, 0.5)), D(y.Skeleton, "bg", w ? P(So, s ? f("palette-text-primary") : y.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), D(y.Slider, "primaryTrack", P(Ue, s ? f("palette-primary-main") : y.primary.main, 0.5)), D(y.Slider, "secondaryTrack", P(Ue, s ? f("palette-secondary-main") : y.secondary.main, 0.5)), D(y.Slider, "errorTrack", P(Ue, s ? f("palette-error-main") : y.error.main, 0.5)), D(y.Slider, "infoTrack", P(Ue, s ? f("palette-info-main") : y.info.main, 0.5)), D(y.Slider, "successTrack", P(Ue, s ? f("palette-success-main") : y.success.main, 0.5)), D(y.Slider, "warningTrack", P(Ue, s ? f("palette-warning-light") : y.warning.main, 0.5));
      const M = w ? P(He, s ? f("palette-background-default") : y.background.default, 0.985) : _l(y.background.default, 0.98);
      D(y.SnackbarContent, "bg", M), D(y.SnackbarContent, "color", or(() => w ? ox.text.primary : y.getContrastText(M))), D(y.SpeedDialAction, "fabHoverBg", _l(y.background.paper, 0.15)), D(y.StepConnector, "border", j("palette-grey-600")), D(y.StepContent, "border", j("palette-grey-600")), D(y.Switch, "defaultColor", j("palette-grey-300")), D(y.Switch, "defaultDisabledColor", j("palette-grey-600")), D(y.Switch, "primaryDisabledColor", P(Ue, s ? f("palette-primary-main") : y.primary.main, 0.55)), D(y.Switch, "secondaryDisabledColor", P(Ue, s ? f("palette-secondary-main") : y.secondary.main, 0.55)), D(y.Switch, "errorDisabledColor", P(Ue, s ? f("palette-error-main") : y.error.main, 0.55)), D(y.Switch, "infoDisabledColor", P(Ue, s ? f("palette-info-main") : y.info.main, 0.55)), D(y.Switch, "successDisabledColor", P(Ue, s ? f("palette-success-main") : y.success.main, 0.55)), D(y.Switch, "warningDisabledColor", P(Ue, s ? f("palette-warning-light") : y.warning.main, 0.55)), D(y.TableCell, "border", P(Ue, So(s ? f("palette-divider") : y.divider, 1), 0.68)), D(y.Tooltip, "bg", P(So, s ? f("palette-grey-700") : y.grey[700], 0.92));
    }
    s || (xr(y.background, "default"), xr(y.background, "paper"), xr(y.common, "background"), xr(y.common, "onBackground"), xr(y, "divider")), Object.keys(y).forEach((M) => {
      const A = y[M];
      M !== "tonalOffset" && !s && A && typeof A == "object" && (A.main && D(y[M], "mainChannel", hs(gs(A.main))), A.light && D(y[M], "lightChannel", hs(gs(A.light))), A.dark && D(y[M], "darkChannel", hs(gs(A.dark))), A.contrastText && D(y[M], "contrastTextChannel", hs(gs(A.contrastText))), M === "text" && (xr(y[M], "primary"), xr(y[M], "secondary")), M === "action" && (A.active && xr(y[M], "active"), A.selected && xr(y[M], "selected")));
    });
  }), k = t.reduce((I, y) => Bt(I, y), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: p2(k),
    enableContrastVars: s
  }, {
    vars: T,
    generateThemeVars: O,
    generateStyleSheets: N
  } = Pk(k, R);
  return k.vars = T, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([I, y]) => {
    k[I] = y;
  }), k.generateThemeVars = O, k.generateStyleSheets = N, k.generateSpacing = function() {
    return H0(d.spacing, Uc(this));
  }, k.getColorSchemeSelector = Mk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Qc,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(y) {
    return Wo({
      sx: y,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = lx, k;
}
function Vh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Lp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function nu(e = {}, ...t) {
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
      return rf(e, ...t);
    let d = n;
    "palette" in e || c[l] && (c[l] !== !0 ? d = c[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const m = rf({
      ...e,
      palette: d
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = c, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: m.palette
    }, Vh(m, "dark", c.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: m.palette
    }, Vh(m, "light", c.light)), m;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), y2({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Va(e) {
  return typeof e == "string";
}
function ru(e, t = 166) {
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
function mt(...e) {
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
      o.forEach((i) => i == null ? void 0 : i());
    };
  }, e);
  return p.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function Je(e) {
  const t = p.useRef(e);
  return ft(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function gt(e) {
  return e && e.ownerDocument || document;
}
function nr(e) {
  return gt(e).defaultView || window;
}
function Wl(e) {
  return parseInt(e, 10) || 0;
}
const v2 = {
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
function x2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Kh(e) {
  return x2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const S2 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = p.useRef(l != null), d = p.useRef(null), m = mt(n, d), v = p.useRef(null), f = p.useRef(null), x = p.useCallback(() => {
    const S = d.current, w = f.current;
    if (!S || !w)
      return;
    const k = nr(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, T = Wl(k.paddingBottom) + Wl(k.paddingTop), O = Wl(k.borderBottomWidth) + Wl(k.borderTopWidth), N = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let y = N;
    i && (y = Math.max(Number(i) * I, y)), o && (y = Math.min(Number(o) * I, y)), y = Math.max(y, I);
    const j = y + (R === "border-box" ? T + O : 0), P = Math.abs(y - N) <= 1;
    return {
      outerHeightStyle: j,
      overflowing: P
    };
  }, [o, i, t.placeholder]), b = Je(() => {
    const S = d.current, w = x();
    if (!S || !w || Kh(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = p.useCallback(() => {
    const S = d.current, w = x();
    if (!S || !w || Kh(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, S.style.height = `${E}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [x]), g = p.useRef(-1);
  ft(() => {
    const S = ru(C), w = d == null ? void 0 : d.current;
    if (!w)
      return;
    const E = nr(w);
    E.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(g.current), C(), g.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(g.current), E.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [x, C, b]), ft(() => {
    C();
  });
  const h = (S) => {
    c || C();
    const w = S.target, E = w.value.length, k = w.value.endsWith(`
`), R = w.selectionStart === E;
    k && R && w.setSelectionRange(E, E), r && r(S);
  };
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx("textarea", {
      value: l,
      onChange: h,
      ref: m,
      rows: i,
      style: s,
      ...a
    }), /* @__PURE__ */ u.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...v2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), gl = /* @__PURE__ */ p.createContext(void 0);
function b2() {
  return p.useContext(gl);
}
function Vi({
  props: e,
  states: t
}) {
  const n = p.useContext(gl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const zp = nu();
function ho() {
  const e = qc(zp);
  return e[mr] || e;
}
function w2(e) {
  return /* @__PURE__ */ u.jsx(V0, {
    ...e,
    defaultTheme: zp,
    themeId: mr
  });
}
function ux(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Tn = (e) => ux(e) && e !== "classes", K = X0({
  themeId: mr,
  defaultTheme: zp,
  rootShouldForwardProp: Tn
});
function C2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ u.jsx(w2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ke = hk;
function he(e) {
  return dk(e);
}
function ur(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Yh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ka(e, t = !1) {
  return e && (Yh(e.value) && e.value !== "" || t && Yh(e.defaultValue) && e.defaultValue !== "");
}
function k2(e) {
  return e.startAdornment;
}
function E2(e) {
  return pe("MuiInputBase", e);
}
const gn = de("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), T2 = {
  transition: "none"
};
function R2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Bp = (e) => e.scrollTop, dx = {}, P2 = ["all"], M2 = {};
function On(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function fx(e, t, n, r, o, i) {
  const s = e === "exited" && !t ? r : n[e] || n.exited;
  return o || i ? {
    ...s,
    ...o,
    ...i
  } : s;
}
function Ya(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = dx
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Dp(e, t) {
  var r;
  const n = t ?? T2;
  return R2((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function xt(e, t = P2, n = M2) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = Dp(e);
  if (r === void 0)
    return o ?? dx;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Gh;
const sf = "mui-auto-fill", Ga = "mui-auto-fill-cancel", ou = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ae(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, iu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, I2 = (e) => {
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
    readOnly: m,
    size: v,
    startAdornment: f,
    type: x
  } = e, b = {
    root: ["root", `color${ae(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${ae(v)}`, d && "multiline", f && "adornedStart", i && "adornedEnd", c && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", x === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return me(b, E2, t);
}, su = K("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: ou
})(ke(({
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
  [`&.${gn.disabled}`]: {
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
}))), lu = K("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: iu
})(ke(({
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
    [`label[data-shrink=false] + .${gn.formControl} &`]: {
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
    [`&.${gn.disabled}`]: {
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
        animationName: Ga,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: sf
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
})), Qh = C2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${sf}`]: {
    from: {
      animationName: sf
    }
  },
  [`@keyframes ${Ga}`]: {
    from: {
      animationName: Ga
    }
  }
}), Fp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disabled: m,
    disableInjectingGlobalStyles: v,
    endAdornment: f,
    error: x,
    fullWidth: b = !1,
    id: C,
    inputComponent: g = "input",
    inputProps: h = {},
    inputRef: S,
    margin: w,
    maxRows: E,
    minRows: k,
    multiline: R = !1,
    name: T,
    onBlur: O,
    onChange: N,
    onClick: I,
    onFocus: y,
    onKeyDown: j,
    onKeyUp: P,
    placeholder: M,
    readOnly: A,
    renderSuffix: L,
    rows: $,
    size: B,
    slotProps: F = {},
    slots: U = {},
    startAdornment: _,
    type: X = "text",
    value: V,
    ...J
  } = r, G = h.value != null ? h.value : V, {
    current: Q
  } = p.useRef(G != null), W = p.useRef(), ne = p.useCallback((oe) => {
  }, []), se = mt(W, S, h.ref, ne), [Ee, Te] = p.useState(!1), [ge, ce] = Vi({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ge.focused = ce ? ce.focused : Ee, p.useEffect(() => {
    !ce && m && Ee && (Te(!1), O && O());
  }, [ce, m, Ee, O]);
  const Ne = ce && ce.onFilled, je = ce && ce.onEmpty, Se = p.useCallback((oe) => {
    Ka(oe) ? Ne && Ne() : je && je();
  }, [Ne, je]);
  ft(() => {
    Q && Se({
      value: G
    });
  }, [G, Se, Q]), ft(() => {
    if (!l)
      return;
    const oe = W.current;
    if (!oe)
      return;
    const ye = gt(oe), Ae = ur(ye), at = Ae == null || Ae === ye.body || Ae === ye.documentElement;
    oe === Ae ? ce && ce.onFocus ? ce.onFocus() : Te(!0) : at && oe.focus();
  }, [l]);
  const Oe = (oe) => {
    y && y(oe), h.onFocus && h.onFocus(oe), ce && ce.onFocus ? ce.onFocus(oe) : Te(!0);
  }, ue = (oe) => {
    O && O(oe), h.onBlur && h.onBlur(oe), ce && ce.onBlur ? ce.onBlur(oe) : Te(!1);
  }, Pe = (oe, ...ye) => {
    if (!Q) {
      const Ae = oe.target || W.current;
      if (Ae == null)
        throw new Error(jr(1));
      Se({
        value: Ae.value
      });
    }
    h.onChange && h.onChange(oe, ...ye), N && N(oe, ...ye);
  };
  p.useEffect(() => {
    Se(W.current);
  }, []);
  const et = (oe) => {
    W.current && oe.currentTarget === oe.target && W.current.focus(), I && I(oe);
  };
  let Ie = g, Me = h;
  R && Ie === "input" && ($ ? Me = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...Me
  } : Me = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...Me
  }, Ie = S2);
  const _e = (oe) => {
    Se(oe.animationName === Ga ? W.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    ce && ce.setAdornedStart(!!_);
  }, [ce, _]);
  const Ge = {
    ...r,
    color: ge.color || "primary",
    disabled: ge.disabled,
    endAdornment: f,
    error: ge.error,
    focused: ge.focused,
    formControl: ce,
    fullWidth: b,
    hiddenLabel: ge.hiddenLabel,
    multiline: R,
    size: ge.size,
    startAdornment: _,
    type: X
  }, Be = I2(Ge), ve = U.root || su, We = F.root || {}, yt = U.input || lu;
  return Me = {
    ...Me,
    ...F.input
  }, /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [!v && typeof Qh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Gh || (Gh = /* @__PURE__ */ u.jsx(Qh, {}))), /* @__PURE__ */ u.jsxs(ve, {
      ...We,
      ref: n,
      onClick: et,
      ...J,
      ...!Va(ve) && {
        ownerState: {
          ...Ge,
          ...We.ownerState
        }
      },
      className: re(Be.root, We.className, a, A && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ u.jsx(gl.Provider, {
        value: null,
        children: /* @__PURE__ */ u.jsx(yt, {
          "aria-invalid": ge.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: ge.disabled,
          id: C,
          onAnimationStart: _e,
          name: T,
          placeholder: M,
          readOnly: A,
          required: ge.required,
          rows: $,
          value: G,
          onKeyDown: j,
          onKeyUp: P,
          type: X,
          ...Me,
          ...!Va(yt) && {
            as: Ie,
            ownerState: {
              ...Ge,
              ...Me.ownerState
            }
          },
          ref: se,
          className: re(Be.input, Me.className, A && "MuiInputBase-readOnly"),
          onBlur: ue,
          onChange: Pe,
          onFocus: Oe
        })
      }), f, L ? L({
        ...ge,
        startAdornment: _
      }) : null]
    })]
  });
});
function $2(e) {
  return pe("MuiFilledInput", e);
}
const bo = {
  ...gn,
  ...de("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function j2(e) {
  return pe("MuiFormHelperText", e);
}
const Xh = de("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function O2(e) {
  return pe("MuiFormLabel", e);
}
const Ts = de("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function A2(e) {
  return pe("MuiInput", e);
}
const ls = {
  ...gn,
  ...de("MuiInput", ["root", "underline", "input"])
};
function N2(e) {
  return pe("MuiMenuItem", e);
}
const as = de("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function L2(e) {
  return pe("MuiNativeSelect", e);
}
const _p = de("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function z2(e) {
  return pe("MuiOutlinedInput", e);
}
const ir = {
  ...gn,
  ...de("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function B2({
  theme: e,
  ...t
}) {
  const n = mr in e ? e[mr] : void 0;
  return /* @__PURE__ */ u.jsx(tx, {
    ...t,
    themeId: n ? mr : void 0,
    theme: n || e
  });
}
const Ul = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: D2
} = Ck({
  themeId: mr,
  // @ts-ignore ignore module augmentation tests
  theme: () => nu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ul.colorSchemeStorageKey,
  modeStorageKey: Ul.modeStorageKey,
  defaultColorScheme: {
    light: Ul.defaultLightColorScheme,
    dark: Ul.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: sx(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Wo({
        sx: r,
        theme: this
      });
    }, t;
  }
}), F2 = D2;
function _2({
  theme: e,
  ...t
}) {
  const n = p.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = mr in e ? e[mr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ u.jsx(B2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ u.jsx(F2, {
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
function W2(e) {
  return pe("MuiSvgIcon", e);
}
de("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const U2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ae(t)}`, `fontSize${ae(n)}`]
  };
  return me(o, W2, r);
}, H2 = K("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ae(n.color)}`], t[`fontSize${ae(n.fontSize)}`]];
  }
})(ke(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, c, d, m, v;
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
        var x, b;
        return {
          props: {
            color: f
          },
          style: {
            color: (b = (x = (e.vars ?? e).palette) == null ? void 0 : x[f]) == null ? void 0 : b.main
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
          color: (v = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : v.disabled
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
})), lf = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    titleAccess: m,
    viewBox: v = "0 0 24 24",
    ...f
  } = r, x = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", b = {
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
  const g = U2(b);
  return /* @__PURE__ */ u.jsxs(H2, {
    as: l,
    className: re(g.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...C,
    ...f,
    ...x && o.props,
    ownerState: b,
    children: [x ? o.props.children : o, m ? /* @__PURE__ */ u.jsx("title", {
      children: m
    }) : null]
  });
});
lf.muiName = "SvgIcon";
function it(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ u.jsx(lf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = lf.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function af(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function cf(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = p.useRef(t !== void 0), [s, l] = p.useState(n), a = i ? t : s, c = p.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, c];
}
function px(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function V2(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      px(c, l[c]) && typeof s[c] == "function" && (a[c] = (...d) => {
        s[c](...d), l[c](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = re(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), d = n(a, l);
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
  const r = t, o = n(e, r), i = re(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
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
  const n = p.useRef(Zh);
  return n.current === Zh && (n.current = e(t)), n;
}
function K2(e) {
  const t = Wp(() => Y2(e)).current;
  return t.next = e, ft(t.effect), t;
}
function Y2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Jh = dy.createContext(null);
function G2(e) {
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
function Q2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = G2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function mx(e) {
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
    nodeRef: m,
    onEnter: v,
    onEntering: f,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: g,
    children: h,
    ...S
  } = e, w = p.useContext(Jh), E = w && !w.isMounting ? r : n, [k, R] = p.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), T = p.useRef(k);
  T.current = k, t && k === "unmounted" && (T.current = "exited", R("exited"));
  const O = p.useRef(t && E), N = p.useRef(!1), I = p.useRef(null), y = p.useRef(k), j = p.useRef(!1), P = p.useRef(c), M = K2({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: d,
    onEnter: v,
    onEntering: f,
    onEntered: x,
    onExit: b,
    onExiting: C,
    onExited: g,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: m,
    parentGroup: w
  }), A = p.useCallback(() => {
    I.current !== null && (I.current.cancel(), I.current = null);
  }, []), L = p.useCallback((_) => {
    let X = !0;
    const V = () => {
      X && (X = !1, I.current = null, _());
    };
    return V.cancel = () => {
      X = !1;
    }, I.current = V, V;
  }, []), $ = p.useCallback((_, X) => {
    var je, Se;
    let V;
    const J = () => {
      V !== void 0 && (clearTimeout(V), V = void 0);
    }, G = L(() => {
      J(), T.current = _, R(_);
    }), Q = G.cancel;
    G.cancel = () => {
      J(), Q();
    };
    const W = M.current.nodeRef.current, ne = M.current.addEndListener, se = M.current.getAutoTimeout !== void 0, Ee = (Se = (je = M.current).getAutoTimeout) == null ? void 0 : Se.call(je), Te = Q2({
      currentStatus: X,
      isAppearing: j.current,
      timeout: M.current.timeout,
      autoTimeout: Ee
    }), ge = P.current, ce = Te ?? (ge && se ? 0 : null), Ne = (Oe) => {
      V = setTimeout(G, Oe);
    };
    if (!W) {
      Ne(0);
      return;
    }
    if (ne) {
      ce != null && Ne(ge ? 0 : ce), ne.length >= 2 ? ne(W, G) : ne(G);
      return;
    }
    Ne(ge ? 0 : Te ?? 0);
  }, [L, M]), B = p.useCallback((_) => {
    var J;
    const X = M.current, V = X.parentGroup ? X.parentGroup.isMounting : _;
    if (j.current = V, !_ && !X.enter) {
      T.current = "entered", R("entered");
      return;
    }
    P.current = X.reduceMotion, (J = X.onEnter) == null || J.call(X, V), T.current = "entering", R("entering");
  }, [M]), F = p.useCallback(() => {
    var X;
    const _ = M.current;
    if (!_.exit) {
      T.current = "exited", R("exited");
      return;
    }
    P.current = _.reduceMotion, (X = _.onExit) == null || X.call(_), T.current = "exiting", R("exiting");
  }, [M]), U = p.useCallback((_, X) => {
    if (A(), X === "entering") {
      const V = M.current;
      if (V.mountOnEnter || V.unmountOnExit) {
        const J = V.nodeRef.current;
        J && Bp(J);
      }
      B(_);
    } else
      F();
  }, [A, B, F, M]);
  return ft(() => (N.current = !0, O.current && (O.current = !1, U(!0, "entering")), () => {
    N.current = !1, A();
  }), [A, U]), ft(() => {
    if (!N.current)
      return;
    const _ = T.current;
    t ? _ !== "entering" && _ !== "entered" && U(!1, "entering") : _ === "entering" || _ === "entered" ? U(!1, "exiting") : _ === "exited" && s && (T.current = "unmounted", R("unmounted"));
  }, [t, k, s, U]), ft(() => {
    var J, G, Q, W;
    if (k === "unmounted" || y.current === "unmounted") {
      y.current = k;
      return;
    }
    const X = y.current !== k;
    X && (y.current = k);
    const V = M.current;
    k === "entering" ? (X && ((J = V.onEntering) == null || J.call(V, j.current)), I.current === null && T.current === k && $("entered", "entering")) : k === "exiting" ? (X && ((G = V.onExiting) == null || G.call(V)), I.current === null && T.current === k && $("exited", "exiting")) : k === "entered" && X ? (Q = V.onEntered) == null || Q.call(V, j.current) : k === "exited" && X && ((W = V.onExited) == null || W.call(V));
  }, [M, $, k]), k === "unmounted" ? null : /* @__PURE__ */ u.jsx(Jh.Provider, {
    value: null,
    children: h(k, S)
  });
}
const hx = "(prefers-reduced-motion: reduce)", X2 = 0, q2 = "0ms", Z2 = () => {
}, eg = () => !1, J2 = () => !0, eE = () => Z2;
function tE(e) {
  const [t, n] = p.useState(() => ({
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
    const i = window.matchMedia(hx), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const nE = {
  ...ya
}, gx = nE.useSyncExternalStore;
function rE(e) {
  const t = e ? J2 : eg, [n, r] = p.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [eg, eE];
    const o = window.matchMedia(hx);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return gx(r, n, t);
}
const oE = gx !== void 0 ? rE : tE;
function au(e, t) {
  const n = oE(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return p.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: X2,
        delay: q2
      } : o;
    }
  }), [r]);
}
function yx(e, t, n) {
  return e === void 0 || Va(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function vx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Qa(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    px(n, e[n]) && (t[n] = e[n]);
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
function xx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = re(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), x = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (b.className = f), Object.keys(x).length > 0 && (b.style = x), {
      props: b,
      internalRef: void 0
    };
  }
  const s = Qa({
    ...o,
    ...r
  }), l = tg(r), a = tg(o), c = t(s), d = re(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), m = {
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
  return d.length > 0 && (v.className = d), Object.keys(m).length > 0 && (v.style = m), {
    props: v,
    internalRef: c.ref
  };
}
function xe(e, t) {
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
    slotProps: m = {
      [e]: void 0
    },
    ...v
  } = i, f = d[e] || r, x = vx(m[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: g
  } = xx({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: x
  }), h = mt(g, x == null ? void 0 : x.ref, t.ref), S = e === "root" ? b || c : b, w = yx(f, {
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
  return [f, w];
}
function iE(e) {
  return pe("MuiPaper", e);
}
de("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const sE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return me(i, iE, o);
}, lE = K("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ke(({
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
}))), An = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var f;
  const r = he({
    props: t,
    name: "MuiPaper"
  }), o = ho(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...d
  } = r, m = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, v = sE(m);
  return /* @__PURE__ */ u.jsx(lE, {
    as: s,
    ownerState: m,
    className: re(v.root, i),
    ref: n,
    ...d,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${nl("#fff", of(l))}, ${nl("#fff", of(l))})`
        }
      },
      ...d.style
    }
  });
});
function Xa(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function aE(e) {
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
      onKeyDown(d) {
        n && t && d.key !== "Tab" && d.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !i && n && (c.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (c["aria-disabled"] = n), i && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, s, l, i, o]);
}
const cE = {};
function uE(e) {
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
  } = e, d = p.useRef(null), m = s === !0, v = aE({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = p.useCallback(() => {
    const C = d.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), x = p.useMemo(() => {
    const C = m ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, m || (C.disabled = n)) : (C.role = "button", !m && n && (C["aria-disabled"] = n)), m ? {
      ...C,
      ...v
    } : C;
  }, [n, m, v, o, t, i, r]);
  return {
    getButtonProps: p.useCallback((C = cE) => {
      const {
        onClick: g,
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
          g == null || g(T);
        },
        onKeyDown: (T) => {
          if (m && v.onKeyDown(T), !n && (a == null || a(T), h == null || h(T), !(T.target !== T.currentTarget || f()))) {
            if (T.key === " ") {
              T.preventDefault();
              return;
            }
            T.key === "Enter" && (T.preventDefault(), T.currentTarget.click());
          }
        },
        onKeyUp: (T) => {
          n || (c == null || c(T), S == null || S(T), T.target === T.currentTarget && !f() && T.key === " " && !T.defaultPrevented && T.currentTarget.click());
        }
      };
    }, [x, n, m, v, f, a, c, l]),
    rootRef: d
  };
}
class qa {
  constructor() {
    Xi(this, "mountEffect", () => {
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
    const t = Wp(qa.create).current, [n, r] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, p.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = fE(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function dE() {
  return qa.use();
}
function fE() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const pE = [];
function Sx(e) {
  p.useEffect(e, pE);
}
class cu {
  constructor() {
    Xi(this, "currentId", null);
    Xi(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Xi(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new cu();
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
function dr() {
  const e = Wp(cu.create).current;
  return Sx(e.disposeEffect), e;
}
function mE(e) {
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
  } = e, [d, m] = p.useState(!1), v = dr(), f = p.useRef(!1), x = p.useRef(a);
  x.current = a;
  const b = a != null, C = re(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = re(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && m(!0), p.useEffect(() => {
    !l && b ? f.current || (f.current = !0, v.start(c, () => {
      var S;
      f.current = !1, (S = x.current) == null || S.call(x);
    })) : (f.current = !1, v.clear());
  }, [v, b, l, c]), /* @__PURE__ */ u.jsx("span", {
    className: C,
    style: g,
    children: /* @__PURE__ */ u.jsx("span", {
      className: h
    })
  });
}
const Zt = de("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), uf = 550, hE = 80, Hl = {}, ng = [], gE = () => {
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
function yE({
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
const vE = ml`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, xE = ml`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, SE = ml`
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
function bE(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = Js`
    &.${Zt.rippleVisible} {
      animation-name: ${vE};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Zt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Zt.childLeaving} {
      animation-name: ${xE};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Zt.childPulsate} {
      animation-name: ${SE};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Js`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const wE = K("span", {
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
}), CE = K(mE, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Zt.rippleVisible} {
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
  & .${Zt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Zt.childLeaving} {
    opacity: 0;
  }

  & .${Zt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => bE(e)}
`, kE = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTouchRipple"
  }), o = ho(), i = au(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Hl,
    className: a,
    ...c
  } = r, [d, m] = p.useState({
    items: ng,
    order: ng
  }), v = d.items, f = p.useRef(0), x = p.useRef(null), b = p.useRef(!1);
  Sx(() => (b.current = !0, () => {
    b.current = !1;
  })), p.useEffect(() => {
    x.current && (x.current(), x.current = null);
  }, [v]);
  const C = p.useRef(!1), g = dr(), h = p.useRef(null), S = p.useRef(null), w = Je((I) => {
    b.current && m((y) => {
      const j = y.items.filter((M) => M.key !== I), P = Gu(y.order.filter((M) => M !== I), j.filter((M) => !M.exiting).map((M) => M.key));
      return {
        items: j,
        order: P
      };
    });
  }), E = Je((I) => {
    const {
      pulsate: y,
      rippleX: j,
      rippleY: P,
      rippleSize: M,
      cb: A
    } = I, L = f.current;
    f.current += 1, m(($) => {
      const B = [...$.items, {
        key: L,
        pulsate: y,
        rippleX: j,
        rippleY: P,
        rippleSize: M,
        exiting: !1
      }];
      return {
        items: B,
        order: Gu($.order, B.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), x.current = A;
  }), k = Je((I = Hl, y = Hl, j = gE) => {
    const {
      pulsate: P = !1,
      center: M = s || y.pulsate,
      fakeElement: A = !1
      // Used only by tests.
    } = y;
    if ((I == null ? void 0 : I.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (I == null ? void 0 : I.type) === "touchstart" && (C.current = !0);
    const L = A ? null : S.current, {
      rippleX: $,
      rippleY: B,
      rippleSize: F
    } = yE({
      event: I,
      element: L,
      center: M
    });
    I != null && I.touches ? h.current === null && (h.current = () => {
      E({
        pulsate: P,
        rippleX: $,
        rippleY: B,
        rippleSize: F,
        cb: j
      });
    }, g.start(hE, () => {
      h.current && (h.current(), h.current = null);
    })) : E({
      pulsate: P,
      rippleX: $,
      rippleY: B,
      rippleSize: F,
      cb: j
    });
  }), R = Je(() => {
    k(Hl, {
      pulsate: !0
    });
  }), T = Je((I, y) => {
    if (g.clear(), (I == null ? void 0 : I.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.start(0, () => {
        T(I, y);
      });
      return;
    }
    h.current = null, m((j) => {
      const P = j.items.findIndex((A) => !A.exiting);
      if (P === -1)
        return j;
      const M = j.items.slice();
      return M[P] = {
        ...M[P],
        exiting: !0
      }, {
        items: M,
        order: Gu(j.order, M.filter((A) => !A.exiting).map((A) => A.key))
      };
    }), x.current = y;
  });
  p.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: T
  }), [R, k, T]);
  const O = new Map(v.map((I) => [I.key, I])), N = d.order.map((I) => O.get(I)).filter(Boolean);
  return /* @__PURE__ */ u.jsx(wE, {
    className: re(Zt.root, l.root, a),
    ref: S,
    ...c,
    children: N.map((I) => /* @__PURE__ */ u.jsx(CE, {
      classes: {
        ripple: re(l.ripple, Zt.ripple),
        rippleVisible: re(l.rippleVisible, Zt.rippleVisible),
        ripplePulsate: re(l.ripplePulsate, Zt.ripplePulsate),
        child: re(l.child, Zt.child),
        childLeaving: re(l.childLeaving, Zt.childLeaving),
        childPulsate: re(l.childPulsate, Zt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : uf,
      pulsate: I.pulsate,
      rippleX: I.rippleX,
      rippleY: I.rippleY,
      rippleSize: I.rippleSize,
      in: !I.exiting,
      onExited: () => w(I.key)
    }, I.key))
  });
});
function EE(e) {
  return pe("MuiButtonBase", e);
}
const TE = de("MuiButtonBase", ["root", "disabled", "focusVisible"]), RE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = me({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, EE, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, PE = K("button", {
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
  [`&.${TE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Uo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableTouchRipple: m = !1,
    focusRipple: v = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: x,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: b = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    /* eslint-enable react/prop-types */
    LinkComponent: g = "a",
    nativeButton: h,
    onBlur: S,
    onClick: w,
    onContextMenu: E,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: T,
    onKeyDown: O,
    onKeyUp: N,
    onMouseDown: I,
    onMouseLeave: y,
    onMouseUp: j,
    onTouchEnd: P,
    onTouchMove: M,
    onTouchStart: A,
    tabIndex: L = 0,
    TouchRippleProps: $,
    touchRippleRef: B,
    type: F,
    ...U
  } = r, _ = !!(U.href || U.to), X = !!U.formAction;
  let V = a;
  V === "button" && _ && (V = g);
  const G = h ?? (typeof V == "string" ? V === "button" : C ?? !1), Q = dE(), W = mt(Q.ref, B), [ne, se] = p.useState(!1);
  (c || b) && ne && se(!1);
  const Ee = Je((we) => {
    v && !we.repeat && ne && we.key === " " && Q.stop(we, () => {
      Q.start(we);
    });
  }), Te = Je((we) => {
    v && we.key === " " && ne && !we.defaultPrevented && Q.stop(we, () => {
      Q.pulsate(we);
    });
  }), {
    getButtonProps: ge,
    rootRef: ce
  } = uE({
    nativeButton: G,
    disabled: c,
    type: F,
    hasFormAction: X,
    tabIndex: L,
    onBeforeKeyDown: Ee,
    onBeforeKeyUp: Te
  }), {
    onClick: Ne,
    onKeyDown: je,
    onKeyUp: Se,
    ...Oe
  } = ge({
    onClick: w,
    onKeyDown: O,
    onKeyUp: N
  });
  p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      se(!0), ce.current.focus();
    }
  }), [ce]);
  const ue = Q.shouldMount && !d && !c;
  p.useEffect(() => {
    ne && v && !d && Q.pulsate();
  }, [d, v, ne, Q]);
  const Pe = Sr(Q, "start", I, m), et = Sr(Q, "stop", E, m), Ie = Sr(Q, "stop", k, m), Me = Sr(Q, "stop", j, m), _e = Sr(Q, "stop", (we) => {
    ne && we.preventDefault(), y && y(we);
  }, m), Ge = Sr(Q, "start", A, m), Be = Sr(Q, "stop", P, m), ve = Sr(Q, "stop", M, m), We = Sr(Q, "stop", (we) => {
    Xa(we.target) || se(!1), S && S(we);
  }, !1), yt = Je((we) => {
    ce.current || (ce.current = we.currentTarget), !b && Xa(we.target) && (se(!0), T && T(we)), R && R(we);
  }), oe = {};
  _ && (oe.tabIndex = c ? -1 : L, c && (oe["aria-disabled"] = c), oe.type = F);
  const ye = mt(n, ce), Ae = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: d,
    disableTouchRipple: m,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: L,
    focusVisible: ne
  }, at = RE(Ae);
  return /* @__PURE__ */ u.jsxs(PE, {
    as: V,
    className: re(at.root, l),
    ownerState: Ae,
    onBlur: We,
    onClick: Ne,
    onContextMenu: et,
    onFocus: yt,
    onKeyDown: je,
    onKeyUp: Se,
    onMouseDown: Pe,
    onMouseLeave: _e,
    onMouseUp: Me,
    onDragLeave: Ie,
    onTouchEnd: Be,
    onTouchMove: ve,
    onTouchStart: Ge,
    ref: ye,
    ..._ ? oe : Oe,
    ...U,
    children: [s, ue ? /* @__PURE__ */ u.jsx(kE, {
      ref: W,
      center: i,
      ...$
    }) : null]
  });
});
function Sr(e, t, n, r = !1) {
  return Je((o) => (n && n(o), r || e[t](o), !0));
}
function ME(e) {
  return typeof e.main == "string";
}
function IE(e, t = []) {
  if (!ME(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Jt(e = []) {
  return ([, t]) => t && IE(t, e);
}
function $E(e) {
  return pe("MuiAlert", e);
}
const rg = de("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function jE(e) {
  return pe("MuiCircularProgress", e);
}
de("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Gn = 44, df = ml`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ff = ml`
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
`, OE = typeof df != "string" ? Js`
        animation: ${df} 1.4s linear infinite;
      ` : null, AE = typeof ff != "string" ? Js`
        animation: ${ff} 1.4s ease-in-out infinite;
      ` : null, NE = (e) => {
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
  return me(i, jE, t);
}, LE = K("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ae(n.color)}`]];
  }
})(ke(({
  theme: e
}) => {
  const t = Dp(e, {
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
      style: OE || {
        animation: `${df} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Jt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), zE = K("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), BE = K("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(ke(({
  theme: e
}) => {
  const t = Dp(e, {
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
      style: AE || {
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
})), DE = K("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ke(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), To = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    style: m,
    thickness: v = 3.6,
    value: f = r.min ?? 0,
    variant: x = "indeterminate",
    ...b
  } = r, C = a ?? 0, g = c ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: v,
    value: f,
    variant: x,
    enableTrackSlot: l
  }, S = NE(h), w = {}, E = {}, k = {};
  if (x === "determinate") {
    const R = 2 * Math.PI * ((Gn - v) / 2), T = g - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = T > 0 ? `${((g - f) / T * R).toFixed(3)}px` : `${R.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ u.jsx(LE, {
    className: re(S.root, o),
    style: {
      width: d,
      height: d,
      ...E,
      ...m
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ u.jsxs(zE, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Gn / 2} ${Gn / 2} ${Gn} ${Gn}`,
      children: [l ? /* @__PURE__ */ u.jsx(DE, {
        className: S.track,
        ownerState: h,
        cx: Gn,
        cy: Gn,
        r: (Gn - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ u.jsx(BE, {
        className: S.circle,
        style: w,
        ownerState: h,
        cx: Gn,
        cy: Gn,
        r: (Gn - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function FE(e) {
  return pe("MuiIconButton", e);
}
const og = de("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), _E = (e) => {
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
  return me(l, FE, t);
}, WE = K(Uo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ae(n.color)}`], n.edge && t[`edge${ae(n.edge)}`], t[`size${ae(n.size)}`]];
  }
})(ke(({
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
})), ke(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Jt()).map(([t]) => ({
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
}))), UE = K("span", {
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
})), Ht = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    id: m,
    loading: v = null,
    loadingIndicator: f,
    ...x
  } = r, b = Or(m), C = f ?? /* @__PURE__ */ u.jsx(To, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), g = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: c,
    loading: v,
    loadingIndicator: C,
    size: d
  }, h = _E(g);
  return /* @__PURE__ */ u.jsxs(WE, {
    id: v ? b : m,
    className: re(h.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || v,
    ref: n,
    ...x,
    ownerState: g,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ u.jsx(UE, {
        className: h.loadingIndicator,
        ownerState: g,
        children: v && C
      })
    }), i]
  });
}), HE = it(/* @__PURE__ */ u.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), VE = it(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), KE = it(/* @__PURE__ */ u.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), YE = it(/* @__PURE__ */ u.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), GE = it(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), QE = (e) => {
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
  return me(i, $E, o);
}, XE = K(An, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(ke(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Jt(["light"])).map(([r]) => ({
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
    })), ...Object.entries(e.palette).filter(Jt(["light"])).map(([r]) => ({
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
    })), ...Object.entries(e.palette).filter(Jt(["dark"])).map(([r]) => ({
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
})), qE = K("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), ZE = K("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), JE = K("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), ig = {
  success: /* @__PURE__ */ u.jsx(HE, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ u.jsx(VE, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ u.jsx(KE, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ u.jsx(YE, {
    fontSize: "inherit"
  })
}, sg = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    iconMapping: d = ig,
    onClose: m,
    role: v = "alert",
    severity: f = "success",
    slotProps: x = {},
    slots: b = {},
    variant: C = "standard",
    ...g
  } = r, h = {
    ...r,
    color: a,
    severity: f,
    variant: C,
    colorSeverity: a || f
  }, S = QE(h), w = {
    slots: b,
    slotProps: x
  }, [E, k] = xe("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: re(S.root, s),
    elementType: XE,
    externalForwardedProps: {
      ...w,
      ...g
    },
    ownerState: h,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [R, T] = xe("icon", {
    className: S.icon,
    elementType: qE,
    externalForwardedProps: w,
    ownerState: h
  }), [O, N] = xe("message", {
    className: S.message,
    elementType: ZE,
    externalForwardedProps: w,
    ownerState: h
  }), [I, y] = xe("action", {
    className: S.action,
    elementType: JE,
    externalForwardedProps: w,
    ownerState: h
  }), [j, P] = xe("closeButton", {
    elementType: Ht,
    externalForwardedProps: w,
    ownerState: h
  }), [M, A] = xe("closeIcon", {
    elementType: GE,
    externalForwardedProps: w,
    ownerState: h
  });
  return /* @__PURE__ */ u.jsxs(E, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ u.jsx(R, {
      ...T,
      children: c || d[f] || ig[f]
    }) : null, /* @__PURE__ */ u.jsx(O, {
      ...N,
      children: i
    }), o != null ? /* @__PURE__ */ u.jsx(I, {
      ...y,
      children: o
    }) : null, o == null && m ? /* @__PURE__ */ u.jsx(I, {
      ...y,
      children: /* @__PURE__ */ u.jsx(j, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: m,
        ...P,
        children: /* @__PURE__ */ u.jsx(M, {
          fontSize: "small",
          ...A
        })
      })
    }) : null]
  });
});
function eT(e) {
  return pe("MuiTypography", e);
}
de("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const tT = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ae(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return me(s, eT, i);
}, nT = K("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ae(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ke(({
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
    })), ...Object.entries(e.palette).filter(Jt()).map(([n]) => ({
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
}, Ve = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variantMapping: m = lg,
    ...v
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: c,
    variant: d,
    variantMapping: m
  }, x = l || m[d] || lg[d] || "span", b = tT(f);
  return /* @__PURE__ */ u.jsx(nT, {
    as: x,
    ref: n,
    className: re(b.root, s),
    ...v,
    ownerState: f,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...v.style
    }
  });
});
function Ao(e, t) {
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
var un = "top", Fn = "bottom", _n = "right", dn = "left", Up = "auto", yl = [un, Fn, _n, dn], Li = "start", rl = "end", rT = "clippingParents", bx = "viewport", cs = "popper", oT = "reference", ag = /* @__PURE__ */ yl.reduce(function(e, t) {
  return e.concat([t + "-" + Li, t + "-" + rl]);
}, []), wx = /* @__PURE__ */ [].concat(yl, [Up]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Li, t + "-" + rl]);
}, []), iT = "beforeRead", sT = "read", lT = "afterRead", aT = "beforeMain", cT = "main", uT = "afterMain", dT = "beforeWrite", fT = "write", pT = "afterWrite", mT = [iT, sT, lT, aT, cT, uT, dT, fT, pT];
function yr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ho(e) {
  var t = wn(e).Element;
  return e instanceof t || e instanceof Element;
}
function zn(e) {
  var t = wn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Hp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = wn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function hT(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !zn(i) || !yr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function gT(e) {
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
      !zn(o) || !yr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const yT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: hT,
  effect: gT,
  requires: ["computeStyles"]
};
function gr(e) {
  return e.split("-")[0];
}
var No = Math.max, Za = Math.min, zi = Math.round;
function pf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Cx() {
  return !/^((?!chrome|android).)*safari/i.test(pf());
}
function Bi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && zn(e) && (o = e.offsetWidth > 0 && zi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && zi(r.height) / e.offsetHeight || 1);
  var s = Ho(e) ? wn(e) : window, l = s.visualViewport, a = !Cx() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, m = r.width / o, v = r.height / i;
  return {
    width: m,
    height: v,
    top: d,
    right: c + m,
    bottom: d + v,
    left: c,
    x: c,
    y: d
  };
}
function Vp(e) {
  var t = Bi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function kx(e, t) {
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
function Ar(e) {
  return wn(e).getComputedStyle(e);
}
function vT(e) {
  return ["table", "td", "th"].indexOf(yr(e)) >= 0;
}
function go(e) {
  return ((Ho(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function uu(e) {
  return yr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Hp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    go(e)
  );
}
function cg(e) {
  return !zn(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function xT(e) {
  var t = /firefox/i.test(pf()), n = /Trident/i.test(pf());
  if (n && zn(e)) {
    var r = Ar(e);
    if (r.position === "fixed")
      return null;
  }
  var o = uu(e);
  for (Hp(o) && (o = o.host); zn(o) && ["html", "body"].indexOf(yr(o)) < 0; ) {
    var i = Ar(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function vl(e) {
  for (var t = wn(e), n = cg(e); n && vT(n) && Ar(n).position === "static"; )
    n = cg(n);
  return n && (yr(n) === "html" || yr(n) === "body" && Ar(n).position === "static") ? t : n || xT(e) || t;
}
function Kp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Rs(e, t, n) {
  return No(e, Za(t, n));
}
function ST(e, t, n) {
  var r = Rs(e, t, n);
  return r > n ? n : r;
}
function Ex() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Tx(e) {
  return Object.assign({}, Ex(), e);
}
function Rx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var bT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Tx(typeof t != "number" ? t : Rx(t, yl));
};
function wT(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = gr(n.placement), a = Kp(l), c = [dn, _n].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!i || !s)) {
    var m = bT(o.padding, n), v = Vp(i), f = a === "y" ? un : dn, x = a === "y" ? Fn : _n, b = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], g = vl(i), h = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = b / 2 - C / 2, w = m[f], E = h - v[d] - m[x], k = h / 2 - v[d] / 2 + S, R = Rs(w, k, E), T = a;
    n.modifiersData[r] = (t = {}, t[T] = R, t.centerOffset = R - k, t);
  }
}
function CT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || kx(t.elements.popper, o) && (t.elements.arrow = o));
}
const kT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wT,
  effect: CT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Di(e) {
  return e.split("-")[1];
}
var ET = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function TT(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: zi(n * o) / o || 0,
    y: zi(r * o) / o || 0
  };
}
function ug(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, m = e.isFixed, v = s.x, f = v === void 0 ? 0 : v, x = s.y, b = x === void 0 ? 0 : x, C = typeof d == "function" ? d({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  f = C.x, b = C.y;
  var g = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = dn, w = un, E = window;
  if (c) {
    var k = vl(n), R = "clientHeight", T = "clientWidth";
    if (k === wn(n) && (k = go(n), Ar(k).position !== "static" && l === "absolute" && (R = "scrollHeight", T = "scrollWidth")), k = k, o === un || (o === dn || o === _n) && i === rl) {
      w = Fn;
      var O = m && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      b -= O - r.height, b *= a ? 1 : -1;
    }
    if (o === dn || (o === un || o === Fn) && i === rl) {
      S = _n;
      var N = m && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      f -= N - r.width, f *= a ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, c && ET), y = d === !0 ? TT({
    x: f,
    y: b
  }, wn(n)) : {
    x: f,
    y: b
  };
  if (f = y.x, b = y.y, a) {
    var j;
    return Object.assign({}, I, (j = {}, j[w] = h ? "0" : "", j[S] = g ? "0" : "", j.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + b + "px)" : "translate3d(" + f + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, I, (t = {}, t[w] = h ? b + "px" : "", t[S] = g ? f + "px" : "", t.transform = "", t));
}
function RT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: gr(t.placement),
    variation: Di(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ug(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ug(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const PT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: RT,
  data: {}
};
var Vl = {
  passive: !0
};
function MT(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = wn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, Vl);
  }), l && a.addEventListener("resize", n.update, Vl), function() {
    i && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Vl);
    }), l && a.removeEventListener("resize", n.update, Vl);
  };
}
const IT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: MT,
  data: {}
};
var $T = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ha(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return $T[t];
  });
}
var jT = {
  start: "end",
  end: "start"
};
function dg(e) {
  return e.replace(/start|end/g, function(t) {
    return jT[t];
  });
}
function Yp(e) {
  var t = wn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Gp(e) {
  return Bi(go(e)).left + Yp(e).scrollLeft;
}
function OT(e, t) {
  var n = wn(e), r = go(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = Cx();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Gp(e),
    y: a
  };
}
function AT(e) {
  var t, n = go(e), r = Yp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = No(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = No(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Gp(e), a = -r.scrollTop;
  return Ar(o || n).direction === "rtl" && (l += No(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Qp(e) {
  var t = Ar(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Px(e) {
  return ["html", "body", "#document"].indexOf(yr(e)) >= 0 ? e.ownerDocument.body : zn(e) && Qp(e) ? e : Px(uu(e));
}
function Ps(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Px(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = wn(r), s = o ? [i].concat(i.visualViewport || [], Qp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ps(uu(s)))
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
function NT(e, t) {
  var n = Bi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function fg(e, t, n) {
  return t === bx ? mf(OT(e, n)) : Ho(t) ? NT(t, n) : mf(AT(go(e)));
}
function LT(e) {
  var t = Ps(uu(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, r = n && zn(e) ? vl(e) : e;
  return Ho(r) ? t.filter(function(o) {
    return Ho(o) && kx(o, r) && yr(o) !== "body";
  }) : [];
}
function zT(e, t, n, r) {
  var o = t === "clippingParents" ? LT(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var d = fg(e, c, r);
    return a.top = No(d.top, a.top), a.right = Za(d.right, a.right), a.bottom = Za(d.bottom, a.bottom), a.left = No(d.left, a.left), a;
  }, fg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Mx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? gr(r) : null, i = r ? Di(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case un:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Fn:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case _n:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case dn:
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
  var c = o ? Kp(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (i) {
      case Li:
        a[c] = a[c] - (t[d] / 2 - n[d] / 2);
        break;
      case rl:
        a[c] = a[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function ol(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? rT : l, c = n.rootBoundary, d = c === void 0 ? bx : c, m = n.elementContext, v = m === void 0 ? cs : m, f = n.altBoundary, x = f === void 0 ? !1 : f, b = n.padding, C = b === void 0 ? 0 : b, g = Tx(typeof C != "number" ? C : Rx(C, yl)), h = v === cs ? oT : cs, S = e.rects.popper, w = e.elements[x ? h : v], E = zT(Ho(w) ? w : w.contextElement || go(e.elements.popper), a, d, s), k = Bi(e.elements.reference), R = Mx({
    reference: k,
    element: S,
    placement: o
  }), T = mf(Object.assign({}, S, R)), O = v === cs ? T : k, N = {
    top: E.top - O.top + g.top,
    bottom: O.bottom - E.bottom + g.bottom,
    left: E.left - O.left + g.left,
    right: O.right - E.right + g.right
  }, I = e.modifiersData.offset;
  if (v === cs && I) {
    var y = I[o];
    Object.keys(N).forEach(function(j) {
      var P = [_n, Fn].indexOf(j) >= 0 ? 1 : -1, M = [un, Fn].indexOf(j) >= 0 ? "y" : "x";
      N[j] += y[M] * P;
    });
  }
  return N;
}
function BT(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? wx : a, d = Di(r), m = d ? l ? ag : ag.filter(function(x) {
    return Di(x) === d;
  }) : yl, v = m.filter(function(x) {
    return c.indexOf(x) >= 0;
  });
  v.length === 0 && (v = m);
  var f = v.reduce(function(x, b) {
    return x[b] = ol(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[gr(b)], x;
  }, {});
  return Object.keys(f).sort(function(x, b) {
    return f[x] - f[b];
  });
}
function DT(e) {
  if (gr(e) === Up)
    return [];
  var t = ha(e);
  return [dg(e), t, dg(t)];
}
function FT(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, d = n.boundary, m = n.rootBoundary, v = n.altBoundary, f = n.flipVariations, x = f === void 0 ? !0 : f, b = n.allowedAutoPlacements, C = t.options.placement, g = gr(C), h = g === C, S = a || (h || !x ? [ha(C)] : DT(C)), w = [C].concat(S).reduce(function(V, J) {
      return V.concat(gr(J) === Up ? BT(t, {
        placement: J,
        boundary: d,
        rootBoundary: m,
        padding: c,
        flipVariations: x,
        allowedAutoPlacements: b
      }) : J);
    }, []), E = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, O = w[0], N = 0; N < w.length; N++) {
      var I = w[N], y = gr(I), j = Di(I) === Li, P = [un, Fn].indexOf(y) >= 0, M = P ? "width" : "height", A = ol(t, {
        placement: I,
        boundary: d,
        rootBoundary: m,
        altBoundary: v,
        padding: c
      }), L = P ? j ? _n : dn : j ? Fn : un;
      E[M] > k[M] && (L = ha(L));
      var $ = ha(L), B = [];
      if (i && B.push(A[y] <= 0), l && B.push(A[L] <= 0, A[$] <= 0), B.every(function(V) {
        return V;
      })) {
        O = I, T = !1;
        break;
      }
      R.set(I, B);
    }
    if (T)
      for (var F = x ? 3 : 1, U = function(J) {
        var G = w.find(function(Q) {
          var W = R.get(Q);
          if (W)
            return W.slice(0, J).every(function(ne) {
              return ne;
            });
        });
        if (G)
          return O = G, "break";
      }, _ = F; _ > 0; _--) {
        var X = U(_);
        if (X === "break") break;
      }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
  }
}
const _T = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: FT,
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
  return [un, _n, Fn, dn].some(function(t) {
    return e[t] >= 0;
  });
}
function WT(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = ol(t, {
    elementContext: "reference"
  }), l = ol(t, {
    altBoundary: !0
  }), a = pg(s, r), c = pg(l, o, i), d = mg(a), m = mg(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const UT = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: WT
};
function HT(e, t, n) {
  var r = gr(e), o = [dn, un].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [dn, _n].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function VT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = wx.reduce(function(d, m) {
    return d[m] = HT(m, t.rects, i), d;
  }, {}), l = s[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
const KT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: VT
};
function YT(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Mx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const GT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: YT,
  data: {}
};
function QT(e) {
  return e === "x" ? "y" : "x";
}
function XT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, d = n.altBoundary, m = n.padding, v = n.tether, f = v === void 0 ? !0 : v, x = n.tetherOffset, b = x === void 0 ? 0 : x, C = ol(t, {
    boundary: a,
    rootBoundary: c,
    padding: m,
    altBoundary: d
  }), g = gr(t.placement), h = Di(t.placement), S = !h, w = Kp(g), E = QT(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, O = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, N = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, y = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var j, P = w === "y" ? un : dn, M = w === "y" ? Fn : _n, A = w === "y" ? "height" : "width", L = k[w], $ = L + C[P], B = L - C[M], F = f ? -T[A] / 2 : 0, U = h === Li ? R[A] : T[A], _ = h === Li ? -T[A] : -R[A], X = t.elements.arrow, V = f && X ? Vp(X) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ex(), G = J[P], Q = J[M], W = Rs(0, R[A], V[A]), ne = S ? R[A] / 2 - F - W - G - N.mainAxis : U - W - G - N.mainAxis, se = S ? -R[A] / 2 + F + W + Q + N.mainAxis : _ + W + Q + N.mainAxis, Ee = t.elements.arrow && vl(t.elements.arrow), Te = Ee ? w === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, ge = (j = I == null ? void 0 : I[w]) != null ? j : 0, ce = L + ne - ge - Te, Ne = L + se - ge, je = Rs(f ? Za($, ce) : $, L, f ? No(B, Ne) : B);
      k[w] = je, y[w] = je - L;
    }
    if (l) {
      var Se, Oe = w === "x" ? un : dn, ue = w === "x" ? Fn : _n, Pe = k[E], et = E === "y" ? "height" : "width", Ie = Pe + C[Oe], Me = Pe - C[ue], _e = [un, dn].indexOf(g) !== -1, Ge = (Se = I == null ? void 0 : I[E]) != null ? Se : 0, Be = _e ? Ie : Pe - R[et] - T[et] - Ge + N.altAxis, ve = _e ? Pe + R[et] + T[et] - Ge - N.altAxis : Me, We = f && _e ? ST(Be, Pe, ve) : Rs(f ? Be : Ie, Pe, f ? ve : Me);
      k[E] = We, y[E] = We - Pe;
    }
    t.modifiersData[r] = y;
  }
}
const qT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: XT,
  requiresIfExists: ["offset"]
};
function ZT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function JT(e) {
  return e === wn(e) || !zn(e) ? Yp(e) : ZT(e);
}
function eR(e) {
  var t = e.getBoundingClientRect(), n = zi(t.width) / e.offsetWidth || 1, r = zi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function tR(e, t, n) {
  n === void 0 && (n = !1);
  var r = zn(t), o = zn(t) && eR(t), i = go(t), s = Bi(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((yr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qp(i)) && (l = JT(t)), zn(t) ? (a = Bi(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Gp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function nR(e) {
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
function rR(e) {
  var t = nR(e);
  return mT.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function oR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function iR(e) {
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
function sR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? hg : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
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
    }, m = [], v = !1, f = {
      state: d,
      setOptions: function(g) {
        var h = typeof g == "function" ? g(d.options) : g;
        b(), d.options = Object.assign({}, i, d.options, h), d.scrollParents = {
          reference: Ho(l) ? Ps(l) : l.contextElement ? Ps(l.contextElement) : [],
          popper: Ps(a)
        };
        var S = rR(iR([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), x(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var g = d.elements, h = g.reference, S = g.popper;
          if (gg(h, S)) {
            d.rects = {
              reference: tR(h, vl(S), d.options.strategy === "fixed"),
              popper: Vp(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(N) {
              return d.modifiersData[N.name] = Object.assign({}, N.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var E = d.orderedModifiers[w], k = E.fn, R = E.options, T = R === void 0 ? {} : R, O = E.name;
              typeof k == "function" && (d = k({
                state: d,
                options: T,
                name: O,
                instance: f
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: oR(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!gg(l, a))
      return f;
    f.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function x() {
      d.orderedModifiers.forEach(function(C) {
        var g = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: d,
            name: g,
            instance: f,
            options: S
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
    return f;
  };
}
var lR = [IT, GT, PT, yT, KT, _T, qT, kT, UT], aR = /* @__PURE__ */ sR({
  defaultModifiers: lR
});
function Fi(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : vx(n, r), {
    props: l,
    internalRef: a
  } = xx({
    ...i,
    externalSlotProps: s
  }), c = mt(a, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return yx(t, {
    ...l,
    ref: c
  }, r);
}
function Yo(e) {
  var t;
  return parseInt(p.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function cR(e) {
  return typeof e == "function" ? e() : e;
}
const Ix = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = p.useState(null), a = mt(/* @__PURE__ */ p.isValidElement(r) ? Yo(r) : null, n);
  if (ft(() => {
    i || l(cR(o) || document.body);
  }, [o, i]), ft(() => {
    if (s && !i)
      return af(n, s), () => {
        af(n, null);
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
  return s && /* @__PURE__ */ m0.createPortal(r, s);
});
function uR(e) {
  return pe("MuiPopper", e);
}
de("MuiPopper", ["root"]);
function dR(e, t) {
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
function $x(e) {
  return typeof e == "function" ? e() : e;
}
function fR(e) {
  return e.nodeType !== void 0;
}
const pR = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, uR, t);
}, mR = {}, hR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: d,
    popperRef: m,
    slotProps: v = {},
    slots: f = {},
    TransitionProps: x,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, g = p.useRef(null), h = mt(g, n), S = p.useRef(null), w = mt(S, m), E = p.useRef(w);
  ft(() => {
    E.current = w;
  }, [w]), p.useImperativeHandle(m, () => S.current, []);
  const k = dR(c, i), [R, T] = p.useState(k), O = p.useMemo(() => $x(r), [r]);
  p.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), ft(() => {
    if (!O || !a)
      return;
    const P = ($) => {
      T($.placement);
    };
    let M = [{
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
    l != null && (M = M.concat(l)), d && d.modifiers != null && (M = M.concat(d.modifiers));
    const A = aR(O, g.current, {
      placement: k,
      ...d,
      modifiers: M
    });
    E.current(A);
    const L = g.current;
    return () => {
      if (L) {
        const {
          style: $
        } = L, B = $.position, F = $.top, U = $.left, _ = $.transform;
        A.destroy(), $.position = B, $.top = F, $.left = U, $.transform = _;
      } else
        A.destroy();
      E.current(null);
    };
  }, [O, s, l, a, d, k]);
  const N = {
    placement: R
  };
  x !== null && (N.TransitionProps = x);
  const I = pR(t), y = f.root ?? "div", j = Fi({
    elementType: y,
    externalSlotProps: v.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ u.jsx(y, {
    ...j,
    children: typeof o == "function" ? o(N) : o
  });
}), gR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: d,
    placement: m = "bottom",
    popperOptions: v = mR,
    popperRef: f,
    style: x,
    transition: b = !1,
    slotProps: C = {},
    slots: g = {},
    ...h
  } = t, [S, w] = p.useState(!0), E = () => {
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
    const N = $x(r);
    R = N && fR(N) ? gt(N).body : gt(null).body;
  }
  const T = !d && a && (!b || S) ? "none" : void 0, O = b ? {
    in: d,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ u.jsx(Ix, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ u.jsx(hR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : d,
      placement: m,
      popperOptions: v,
      popperRef: f,
      slotProps: C,
      slots: g,
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
      TransitionProps: O,
      children: o
    })
  });
}), yR = K(gR, {
  name: "MuiPopper",
  slot: "Root"
})({}), jx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = tu(), o = he({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: d,
    open: m,
    placement: v,
    popperOptions: f,
    popperRef: x,
    transition: b,
    slots: C,
    slotProps: g,
    ...h
  } = o, S = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: d,
    open: m,
    placement: v,
    popperOptions: f,
    popperRef: x,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ u.jsx(yR, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: g,
    ...S,
    ref: n
  });
}), vR = it(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function xR(e) {
  return pe("MuiChip", e);
}
const Fe = de("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), SR = (e) => {
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
  return me(a, xR, t);
}, bR = K("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Tn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${Fe.avatar}`]: t.avatar
    }, {
      [`& .${Fe.icon}`]: t.icon
    }, {
      [`& .${Fe.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ae(s)}`], t[`color${ae(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(ke(({
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
    [`&.${Fe.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Fe.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Fe.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Fe.deleteIcon}`]: {
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
        [`& .${Fe.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${Fe.avatar}`]: {
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
        [`& .${Fe.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${Fe.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Fe.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Jt(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Fe.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Fe.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Fe.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Fe.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Jt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Fe.focusVisible}`]: {
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
        [`&.${Fe.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Jt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Fe.focusVisible}`]: {
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
        [`&.${Fe.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Fe.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Fe.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Fe.icon}`]: {
          marginLeft: 4
        },
        [`& .${Fe.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${Fe.avatar}`]: {
          marginLeft: 2
        },
        [`& .${Fe.icon}`]: {
          marginLeft: 2
        },
        [`& .${Fe.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Jt()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${Fe.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${Fe.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${Fe.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), wR = K("span", {
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
const Qu = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    icon: m,
    label: v,
    onClick: f,
    onDelete: x,
    onKeyDown: b,
    onKeyUp: C,
    size: g = "medium",
    variant: h = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...R
  } = r, {
    nativeButton: T,
    ...O
  } = R, N = p.useRef(null), I = mt(N, n), y = (W) => {
    W.stopPropagation(), x(W);
  }, j = (W) => {
    W.currentTarget === W.target && yg(W) && W.preventDefault(), b && b(W);
  }, P = (W) => {
    W.currentTarget === W.target && x && yg(W) && x(W), C && C(W);
  }, M = s !== !1 && f ? !0 : s, A = M || x ? Uo : a || "div", L = {
    ...r,
    component: A,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ p.isValidElement(m) && m.props.color || l,
    onDelete: !!x,
    clickable: M,
    variant: h
  }, $ = SR(L), B = A === Uo ? {
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
  let F = null;
  x && (F = c && /* @__PURE__ */ p.isValidElement(c) ? /* @__PURE__ */ p.cloneElement(c, {
    className: re(c.props.className, $.deleteIcon),
    onClick: y
  }) : /* @__PURE__ */ u.jsx(vR, {
    className: $.deleteIcon,
    onClick: y
  }));
  let U = null;
  o && /* @__PURE__ */ p.isValidElement(o) && (U = /* @__PURE__ */ p.cloneElement(o, {
    className: re($.avatar, o.props.className)
  }));
  let _ = null;
  m && /* @__PURE__ */ p.isValidElement(m) && (_ = /* @__PURE__ */ p.cloneElement(m, {
    className: re($.icon, m.props.className)
  }));
  const X = {
    slots: E,
    slotProps: k
  }, [V, J] = xe("root", {
    elementType: bR,
    externalForwardedProps: {
      ...X,
      ...O
    },
    ownerState: L,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: I,
    className: re($.root, i),
    additionalProps: {
      disabled: M && d ? !0 : void 0,
      tabIndex: w && d ? -1 : S,
      ...B
    },
    getSlotProps: (W) => ({
      ...W,
      onClick: (ne) => {
        var se;
        (se = W.onClick) == null || se.call(W, ne), f == null || f(ne);
      },
      onKeyDown: (ne) => {
        var se;
        (se = W.onKeyDown) == null || se.call(W, ne), j(ne);
      },
      onKeyUp: (ne) => {
        var se;
        (se = W.onKeyUp) == null || se.call(W, ne), P(ne);
      }
    })
  }), [G, Q] = xe("label", {
    elementType: wR,
    externalForwardedProps: X,
    ownerState: L,
    className: $.label
  });
  return /* @__PURE__ */ u.jsxs(V, {
    as: A,
    ...J,
    children: [U || _, /* @__PURE__ */ u.jsx(G, {
      ...Q,
      children: v
    }), F]
  });
}), CR = it(/* @__PURE__ */ u.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), kR = {
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
}, Ox = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ho(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: d,
    onEnter: m,
    onEntered: v,
    onEntering: f,
    onExit: x,
    onExited: b,
    onExiting: C,
    style: g,
    timeout: h = o,
    ...S
  } = t, w = au(r.motion.reducedMotion, a), E = p.useRef(null), k = mt(E, Yo(l), n), R = On(E, f), T = On(E, (P, M) => {
    w.shouldReduceMotion || Bp(P);
    const A = Ya({
      style: g,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), L = w.getTransitionTiming({
      duration: A.duration,
      delay: A.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: A.easing,
      delay: L.delay
    }), m && m(P, M);
  }), O = On(E, v), N = On(E, C), I = On(E, (P) => {
    const M = Ya({
      style: g,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), A = w.getTransitionTiming({
      duration: M.duration,
      delay: M.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: A.duration,
      easing: M.easing,
      delay: A.delay
    }), x && x(P);
  }), y = On(E, (P) => {
    P.style.transition = "", b && b(P);
  }), j = i ? (P) => {
    i(E.current, P);
  } : void 0;
  return /* @__PURE__ */ u.jsx(mx, {
    appear: s,
    in: d,
    nodeRef: E,
    onEnter: T,
    onEntered: O,
    onEntering: R,
    onExit: I,
    onExited: y,
    onExiting: N,
    addEndListener: j,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (P, {
      ownerState: M,
      ...A
    }) => {
      const L = fx(P, d, kR, ER, g, l.props.style);
      return /* @__PURE__ */ p.cloneElement(l, {
        style: L,
        ref: k,
        ...A
      });
    }
  });
});
function TR(e) {
  return pe("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const RR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return me({
    root: ["root", n && "invisible"]
  }, TR, t);
}, PR = K("div", {
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
}), Ax = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    transitionDuration: m,
    ...v
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, x = RR(f), b = {
    component: s,
    slots: d,
    slotProps: c
  }, [C, g] = xe("root", {
    elementType: PR,
    externalForwardedProps: b,
    className: re(x.root, i),
    ownerState: f
  }), [h, S] = xe("transition", {
    elementType: Ox,
    externalForwardedProps: b,
    ownerState: f
  });
  return /* @__PURE__ */ u.jsx(h, {
    in: a,
    timeout: m,
    ...v,
    ...S,
    children: /* @__PURE__ */ u.jsx(C, {
      ...g,
      ref: n,
      children: o
    })
  });
}), MR = de("MuiBox", ["root"]), IR = nu(), Xt = UC({
  themeId: mr,
  defaultTheme: IR,
  defaultClassName: MR.root,
  generateClassName: K0.generate
});
function $R(e) {
  return pe("MuiButton", e);
}
const wo = de("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), jR = /* @__PURE__ */ p.createContext({}), OR = /* @__PURE__ */ p.createContext(void 0), AR = (e) => {
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
    root: ["root", s && "loading", i, `size${ae(o)}`, `color${ae(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ae(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = me(c, $R, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, Nx = [{
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
}], NR = K(Uo, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ae(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ke(({
  theme: e
}) => {
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
    [`&.${wo.disabled}`]: {
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
        [`&.${wo.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${wo.disabled}`]: {
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
        [`&.${wo.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Jt()).map(([r]) => ({
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
        [`&.${wo.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${wo.disabled}`]: {
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
        [`&.${wo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), LR = K("span", {
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
  }, ...Nx]
})), zR = K("span", {
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
  }, ...Nx]
})), BR = K("span", {
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
})), vg = K("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Ct = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(jR), o = p.useContext(OR), i = tl(r, t), s = he({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: d,
    disabled: m = !1,
    disableElevation: v = !1,
    disableFocusRipple: f = !1,
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: g,
    loading: h = null,
    loadingIndicator: S,
    loadingPosition: w = "center",
    size: E = "medium",
    startIcon: k,
    type: R,
    variant: T = "text",
    ...O
  } = s, N = Or(g), I = S ?? /* @__PURE__ */ u.jsx(To, {
    "aria-labelledby": N,
    color: "inherit",
    size: 16
  }), y = {
    ...s,
    color: a,
    component: c,
    disabled: m,
    disableElevation: v,
    disableFocusRipple: f,
    fullWidth: C,
    loading: h,
    loadingIndicator: I,
    loadingPosition: w,
    size: E,
    type: R,
    variant: T
  }, j = AR(y), P = (k || h && w === "start") && /* @__PURE__ */ u.jsx(LR, {
    className: j.startIcon,
    ownerState: y,
    children: k || /* @__PURE__ */ u.jsx(vg, {
      className: j.loadingIconPlaceholder,
      ownerState: y
    })
  }), M = (x || h && w === "end") && /* @__PURE__ */ u.jsx(zR, {
    className: j.endIcon,
    ownerState: y,
    children: x || /* @__PURE__ */ u.jsx(vg, {
      className: j.loadingIconPlaceholder,
      ownerState: y
    })
  }), A = o || "", L = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: j.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ u.jsx(BR, {
        className: j.loadingIndicator,
        ownerState: y,
        children: I
      })
    })
  ) : null, {
    root: $,
    ...B
  } = j;
  return /* @__PURE__ */ u.jsxs(NR, {
    ownerState: y,
    className: re(r.className, j.root, d, A),
    component: c,
    disabled: m || h,
    focusRipple: !f,
    focusVisibleClassName: re(j.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: h ? N : g,
    ...O,
    classes: B,
    children: [P, w !== "end" && L, l, w === "end" && L, M]
  });
});
function DR(e) {
  return pe("MuiCard", e);
}
de("MuiCard", ["root"]);
const FR = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, DR, t);
}, _R = K(An, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Xu = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = FR(l);
  return /* @__PURE__ */ u.jsx(_R, {
    className: re(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function WR(e) {
  return pe("MuiCardContent", e);
}
de("MuiCardContent", ["root"]);
const UR = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, WR, t);
}, HR = K("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), qu = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = UR(l);
  return /* @__PURE__ */ u.jsx(HR, {
    as: i,
    className: re(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function xg(e) {
  return e.substring(2).toLowerCase();
}
function VR(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function KR(e) {
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
  const d = mt(Yo(t), l), m = Je((x) => {
    const b = c.current;
    c.current = !1;
    const C = gt(l.current);
    if (!a.current || !l.current || "clientX" in x && VR(x, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let g;
    x.composedPath ? g = x.composedPath().includes(l.current) : g = !Ao(C.documentElement, x.target) || Ao(l.current, x.target), !g && (n || !b) && o(x);
  }), v = (x) => (b) => {
    c.current = !0;
    const C = t.props[x];
    C && C(b);
  }, f = {
    ref: d
  };
  return i !== !1 && (f[i] = v(i)), p.useEffect(() => {
    if (i !== !1) {
      const x = xg(i), b = gt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(x, m), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(x, m), b.removeEventListener("touchmove", C);
      };
    }
  }, [m, i]), r !== !1 && (f[r] = v(r)), p.useEffect(() => {
    if (r !== !1) {
      const x = xg(r), b = gt(l.current);
      return b.addEventListener(x, m), () => {
        b.removeEventListener(x, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ p.cloneElement(t, f);
}
function Lx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function YR(e) {
  const t = gt(e);
  return e === t.body || e === t.documentElement ? nr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ms(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Sg(e) {
  return parseFloat(nr(e).getComputedStyle(e).paddingRight) || 0;
}
function GR(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function bg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !GR(s);
    l && a && Ms(s, o);
  });
}
function QR(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = gt(r).body;
    else {
      const s = r.parentElement, l = nr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (YR(i)) {
      const s = Lx(nr(i));
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
function XR(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class qR {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ms(t.modalRef, !1);
    const o = XR(n);
    bg(n, t.mount, t.modalRef, o, !0);
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
      i.restore && i.restore(), t.modalRef && Ms(t.modalRef, n), bg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
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
const hf = "data-mui-focusable";
function wg(e) {
  return e ? e.hasAttribute(hf) ? e : e.querySelector(`[${hf}]`) : null;
}
const ZR = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function zx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function JR(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function eP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || JR(e));
}
function tP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(ZR)).forEach((r, o) => {
    const i = zx(r);
    i === -1 || !eP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function nP() {
  return !0;
}
function rP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = tP,
    isEnabled: s = nP,
    open: l
  } = e, a = p.useRef(!1), c = p.useRef(null), d = p.useRef(null), m = p.useRef(null), v = p.useRef(null), f = p.useRef(!1), x = p.useRef(null), b = mt(Yo(t), x), C = p.useRef(null);
  p.useEffect(() => {
    !l || !x.current || (f.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (a.current = !1, !l || !x.current)
      return;
    const S = gt(x.current), w = ur(S), E = wg(x.current) ?? x.current;
    return Ao(x.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), f.current && E.focus()), () => {
      !o && m.current && (a.current = !0, m.current.focus(), m.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !x.current)
      return;
    const S = gt(x.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const T = x.current, O = ur(S);
      if (T === null)
        return;
      const N = wg(T);
      if (O === T || O === N) {
        const y = i(T);
        if (y.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? y[y.length - 1].focus() : y[0].focus();
        return;
      }
      if (Ao(T, O)) {
        const y = i(T), j = y.indexOf(O);
        if (j === -1 || !y.some((A) => zx(A) > 0))
          return;
        R.preventDefault();
        let M = 0;
        R.shiftKey ? M = j <= 0 ? y.length - 1 : j - 1 : M = j === y.length - 1 ? 0 : j + 1, y[M].focus();
      }
    }, E = () => {
      var N, I;
      const R = x.current;
      if (R === null)
        return;
      const T = ur(S);
      if (!S.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Ao(R, T) || r && T !== c.current && T !== d.current)
        return;
      if (T !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!f.current)
        return;
      let O = [];
      if ((T === c.current || T === d.current) && (O = i(x.current)), O.length > 0) {
        const y = !!((N = C.current) != null && N.shiftKey && ((I = C.current) == null ? void 0 : I.key) === "Tab"), j = O[0], P = O[O.length - 1];
        typeof j != "string" && typeof P != "string" && (y ? P.focus() : j.focus());
      } else
        R.focus();
    };
    S.addEventListener("focusin", E), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = ur(S);
      R && R.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", E), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const g = (S) => {
    m.current === null && (m.current = S.relatedTarget), f.current = !0, v.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    m.current === null && (m.current = S.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: b,
      onFocus: g
    }), /* @__PURE__ */ u.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: h,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function oP(e) {
  return typeof e == "function" ? e() : e;
}
function iP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Cg = () => {
}, Kl = new qR();
function sP(e) {
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
  } = e, d = p.useRef({}), m = p.useRef(null), v = p.useRef(null), f = p.useRef(null), x = mt(f, c), [b, C] = p.useState(!a), g = iP(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => gt(m.current), w = () => (d.current.modalRef = f.current, d.current.mount = m.current, d.current), E = () => {
    Kl.mount(w(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = Je(() => {
    const A = oP(t) || S().body;
    Kl.add(w(), A), f.current && E();
  }), R = () => Kl.isTopModal(w()), T = Je((A) => {
    m.current = A, A && (v.current = A, a && R() ? E() : f.current && Ms(f.current, h));
  }), O = p.useCallback(() => {
    Kl.remove(w(), h);
  }, [h]);
  p.useEffect(() => () => {
    O();
  }, [O]), p.useEffect(() => {
    a ? k() : (!g || !r) && O();
  }, [a, O, g, r, k]);
  const N = (A) => (L) => {
    var $;
    ($ = A.onKeyDown) == null || $.call(A, L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !R()) && (L.stopPropagation(), l && l(L, "escapeKeyDown"));
  }, I = (A) => (L) => {
    var $;
    ($ = A.onClick) == null || $.call(A, L), L.target === L.currentTarget && l && l(L, "backdropClick");
  }, y = (A = {}) => {
    const L = Qa(e);
    delete L.onTransitionEnter, delete L.onTransitionExited;
    const $ = {
      ...L,
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
      onKeyDown: N($),
      ref: x
    };
  }, j = (A = {}) => {
    const L = A;
    return {
      "aria-hidden": !0,
      ...L,
      onClick: I(L),
      open: a
    };
  }, P = () => {
    const A = () => {
      C(!1), o && o();
    }, L = () => {
      C(!0), i && i(), r && O();
    };
    return {
      onEnter: qh(A, (s == null ? void 0 : s.props.onEnter) ?? Cg),
      onExited: qh(L, (s == null ? void 0 : s.props.onExited) ?? Cg)
    };
  }, M = !a && g && !b ? v.current ?? t : t;
  return {
    getRootProps: y,
    getBackdropProps: j,
    getTransitionProps: P,
    rootRef: x,
    portalRef: T,
    portalContainer: M,
    isTopModal: R,
    exited: b,
    hasTransition: g
  };
}
function lP(e) {
  return pe("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const aP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return me({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, lP, r);
}, cP = K("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ke(({
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
}))), uP = K(Ax, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Bx = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableEnforceFocus: m = !1,
    disablePortal: v = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: x = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: g,
    onTransitionEnter: h,
    onTransitionExited: S,
    open: w,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: R,
    ...T
  } = r, O = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: d,
    disableEnforceFocus: m,
    disablePortal: v,
    disableRestoreFocus: f,
    disableScrollLock: x,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: N,
    getBackdropProps: I,
    getTransitionProps: y,
    portalRef: j,
    portalContainer: P,
    isTopModal: M,
    exited: A,
    hasTransition: L
  } = sP({
    ...O,
    rootRef: n
  }), $ = {
    ...O,
    exited: A
  }, B = aP($), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), L) {
    const {
      onEnter: G,
      onExited: Q
    } = y();
    F.onEnter = G, F.onExited = Q;
  }
  const U = {
    slots: k,
    slotProps: E
  }, [_, X] = xe("root", {
    ref: n,
    elementType: cP,
    externalForwardedProps: {
      ...U,
      ...T,
      component: c
    },
    getSlotProps: N,
    ownerState: $,
    className: re(i, B == null ? void 0 : B.root, !$.open && $.exited && (B == null ? void 0 : B.hidden))
  }), [V, J] = xe("backdrop", {
    elementType: uP,
    externalForwardedProps: U,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => I({
      ...G,
      onClick: (Q) => {
        G != null && G.onClick && G.onClick(Q);
      }
    }),
    className: B == null ? void 0 : B.backdrop,
    ownerState: $
  });
  return !C && !w && (!L || A) ? null : /* @__PURE__ */ u.jsx(Ix, {
    ref: j,
    container: P,
    disablePortal: v,
    children: /* @__PURE__ */ u.jsxs(_, {
      ...X,
      children: [b ? null : /* @__PURE__ */ u.jsx(V, {
        ...J
      }), /* @__PURE__ */ u.jsx(rP, {
        disableEnforceFocus: m,
        disableAutoFocus: d,
        disableRestoreFocus: f,
        isEnabled: M,
        open: w,
        children: /* @__PURE__ */ p.cloneElement(l, F)
      })]
    })
  });
});
function dP(e) {
  return pe("MuiDialog", e);
}
de("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Dx = /* @__PURE__ */ p.createContext({}), fP = K(Ax, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), pP = (e) => {
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
  return me(s, dP, t);
}, mP = K(Bx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), hP = K("div", {
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
}), gP = K(An, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ae(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(ke(({
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
}))), Wr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialog"
  }), o = ho(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: d,
    fullScreen: m = !1,
    fullWidth: v = !1,
    maxWidth: f = "sm",
    onClick: x,
    onClose: b,
    open: C,
    PaperComponent: g = An,
    role: h = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...R
  } = r, T = {
    ...r,
    fullScreen: m,
    fullWidth: v,
    maxWidth: f,
    scroll: S
  }, O = pP(T), N = p.useRef(), I = (G) => {
    N.current = G.target === G.currentTarget;
  }, y = (G) => {
    x && x(G), N.current && (N.current = null, b && b(G, "backdropClick"));
  }, j = Or(l), P = p.useMemo(() => ({
    titleId: j
  }), [j]), M = {
    slots: w,
    slotProps: E
  }, [A, L] = xe("root", {
    elementType: mP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: M,
    ownerState: T,
    className: re(O.root, d),
    ref: n
  }), [$, B] = xe("backdrop", {
    elementType: fP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: M,
    ownerState: T,
    className: O.backdrop
  }), [F, U] = xe("paper", {
    elementType: gP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: M,
    ownerState: T,
    className: O.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": j,
      "aria-modal": a,
      tabIndex: -1,
      [hf]: ""
    }
  }), [_, X] = xe("container", {
    elementType: hP,
    externalForwardedProps: M,
    ownerState: T,
    className: O.container
  }), [V, J] = xe("transition", {
    elementType: Ox,
    externalForwardedProps: M,
    ownerState: T,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ u.jsx(A, {
    closeAfterTransition: !0,
    slots: {
      backdrop: $
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...B
      }
    },
    onClose: b,
    open: C,
    onClick: y,
    ...L,
    ...R,
    children: /* @__PURE__ */ u.jsx(V, {
      ...J,
      children: /* @__PURE__ */ u.jsx(_, {
        onMouseDown: I,
        ...X,
        children: /* @__PURE__ */ u.jsx(F, {
          as: g,
          ...U,
          children: /* @__PURE__ */ u.jsx(Dx.Provider, {
            value: P,
            children: c
          })
        })
      })
    })
  });
});
function yP(e) {
  return pe("MuiDialogActions", e);
}
de("MuiDialogActions", ["root", "spacing"]);
const vP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return me({
    root: ["root", !n && "spacing"]
  }, yP, t);
}, xP = K("div", {
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
}), Ur = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = vP(l);
  return /* @__PURE__ */ u.jsx(xP, {
    className: re(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function SP(e) {
  return pe("MuiDialogContent", e);
}
de("MuiDialogContent", ["root", "dividers"]);
function bP(e) {
  return pe("MuiDialogTitle", e);
}
const wP = de("MuiDialogTitle", ["root"]), CP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return me({
    root: ["root", n && "dividers"]
  }, SP, t);
}, kP = K("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(ke(({
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
      [`.${wP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Hr = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = CP(l);
  return /* @__PURE__ */ u.jsx(kP, {
    className: re(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), EP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, bP, t);
}, TP = K(Ve, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Vr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = EP(l), {
    titleId: c = i
  } = p.useContext(Dx);
  return /* @__PURE__ */ u.jsx(TP, {
    component: "h2",
    className: re(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
}), kg = de("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Fx(e) {
  return pe("MuiSelect", e);
}
const Ro = de("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), RP = (e) => {
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
  }, c = me(a, $2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, PP = K(su, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ou(e, t), !n.disableUnderline && t.underline];
  }
})(ke(({
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
    [`&.${bo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${bo.disabled}`]: {
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
        [`&.${bo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${bo.error}`]: {
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
        [`&:hover:not(.${bo.disabled}, .${bo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${bo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Jt()).map(([s]) => {
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
        [`&.${Ro.root}`]: {
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
})), MP = K(lu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: iu
})(ke(({
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
}))), Xp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slots: m = {},
    type: v = "text",
    ...f
  } = r, x = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: v
  }, b = RP(r), C = {
    root: {
      ownerState: x
    },
    input: {
      ownerState: x
    }
  }, g = d ? Bt(C, d) : C, h = m.root ?? PP, S = m.input ?? MP;
  return /* @__PURE__ */ u.jsx(Fp, {
    slots: {
      root: h,
      input: S
    },
    slotProps: g,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: v,
    ...f,
    classes: b
  });
});
Xp.muiName = "Input";
function IP(e) {
  return pe("MuiFormControl", e);
}
de("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const $P = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ae(n)}`, r && "fullWidth"]
  };
  return me(o, IP, t);
}, jP = K("div", {
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
}), gf = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    fullWidth: m = !1,
    hiddenLabel: v = !1,
    margin: f = "none",
    required: x = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...g
  } = r, h = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: c,
    fullWidth: m,
    hiddenLabel: v,
    margin: f,
    required: x,
    size: b,
    variant: C
  }, S = $P(h), [w, E] = p.useState(() => {
    let M = !1;
    return o && p.Children.forEach(o, (A) => {
      if (!Ku(A, ["Input", "Select"]))
        return;
      const L = Ku(A, ["Select"]) ? A.props.input : A;
      L && k2(L.props) && (M = !0);
    }), M;
  }), [k, R] = p.useState(() => {
    let M = !1;
    return o && p.Children.forEach(o, (A) => {
      Ku(A, ["Input", "Select"]) && (Ka(A.props, !0) || Ka(A.props.inputProps, !0)) && (M = !0);
    }), M;
  }), [T, O] = p.useState(!1);
  a && T && O(!1);
  const N = d !== void 0 && !a ? d : T;
  let I;
  p.useRef(!1);
  const y = p.useCallback(() => {
    R(!0);
  }, []), j = p.useCallback(() => {
    R(!1);
  }, []), P = p.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: N,
    fullWidth: m,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      O(!1);
    },
    onFocus: () => {
      O(!0);
    },
    onEmpty: j,
    onFilled: y,
    registerEffect: I,
    required: x,
    variant: C
  }), [w, s, a, c, k, N, m, v, I, j, y, x, b, C]);
  return /* @__PURE__ */ u.jsx(gl.Provider, {
    value: P,
    children: /* @__PURE__ */ u.jsx(jP, {
      as: l,
      ownerState: h,
      className: re(S.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
});
var Eg;
const OP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ae(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return me(c, j2, t);
}, AP = K("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ae(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(ke(({
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
}))), NP = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    margin: m,
    required: v,
    variant: f,
    ...x
  } = r, [b] = Vi({
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
  const g = OP(C);
  return /* @__PURE__ */ u.jsx(AP, {
    as: s,
    className: re(g.root, i),
    ref: n,
    ...x,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Eg || (Eg = /* @__PURE__ */ u.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), LP = (e) => {
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
  return me(a, O2, t);
}, zP = K("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(ke(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Jt()).map(([t]) => ({
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
}))), BP = K("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ke(({
  theme: e
}) => ({
  [`&.${Ts.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), DP = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    focused: m,
    required: v,
    ...f
  } = r, [x] = Vi({
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
  }, C = LP(b);
  return /* @__PURE__ */ u.jsxs(zP, {
    as: l,
    ownerState: b,
    className: re(C.root, i),
    ref: n,
    ...f,
    children: [o, x.required && /* @__PURE__ */ u.jsxs(BP, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Is(e) {
  return `scale(${e}, ${e ** 2})`;
}
const FP = {
  entering: {
    opacity: 1,
    transform: Is(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Is(0.75)
  },
  exited: {
    opacity: 0,
    transform: Is(0.75)
  }
}, _P = {
  opacity: 0,
  transform: Is(0.75),
  visibility: "hidden"
}, il = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: d,
    onEntering: m,
    onExit: v,
    onExited: f,
    onExiting: x,
    style: b,
    timeout: C = "auto",
    ...g
  } = t, h = p.useRef(null), S = ho(), w = au(S.motion.reducedMotion, s), E = p.useRef(null), k = mt(E, Yo(i), n), R = On(E, m), T = On(E, (P, M) => {
    w.shouldReduceMotion || Bp(P);
    const {
      duration: A,
      delay: L,
      easing: $
    } = Ya({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let B;
    C === "auto" && !w.shouldReduceMotion ? (B = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = B) : (B = A, h.current = null);
    const F = w.getTransitionTiming({
      duration: B,
      delay: L
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), S.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: $
    })].join(","), c && c(P, M);
  }), O = On(E, d), N = On(E, x), I = On(E, (P) => {
    const {
      duration: M,
      delay: A,
      easing: L
    } = Ya({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let $;
    C === "auto" && !w.shouldReduceMotion ? ($ = S.transitions.getAutoHeightDuration(P.clientHeight), h.current = $) : ($ = M, h.current = null);
    const B = w.getTransitionTiming({
      duration: $,
      delay: A
    });
    P.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay || (typeof B.duration == "string" ? B.duration : B.duration * 0.333),
      easing: L
    })].join(","), P.style.opacity = 0, P.style.transform = Is(0.75), v && v(P);
  }), y = On(E, (P) => {
    P.style.transition = "", f && f(P);
  }), j = r ? (P) => {
    r(E.current, P);
  } : void 0;
  return /* @__PURE__ */ u.jsx(mx, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: T,
    onEntered: O,
    onEntering: R,
    onExit: I,
    onExited: y,
    onExiting: N,
    addEndListener: j,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...g,
    children: (P, {
      ownerState: M,
      ...A
    }) => {
      const L = fx(P, a, FP, _P, b, i.props.style);
      return /* @__PURE__ */ p.cloneElement(i, {
        style: L,
        ref: k,
        ...A
      });
    }
  });
});
il && (il.muiSupportAuto = !0);
function WP(e) {
  return pe("MuiInputLabel", e);
}
const UP = de("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), HP = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = me({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, A2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, VP = K(su, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ou(e, t), !n.disableUnderline && t.underline];
  }
})(ke(({
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
        [`label + &, .${UP.root} + &`]: {
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
        [`&.${ls.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ls.error}`]: {
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
        [`&:hover:not(.${ls.disabled}, .${ls.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${ls.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Jt()).map(([r]) => ({
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
})), KP = K(lu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: iu
})({}), qp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    type: m = "text",
    ...v
  } = r, f = HP(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Bt(c, b) : b, g = d.root ?? VP, h = d.input ?? KP;
  return /* @__PURE__ */ u.jsx(Fp, {
    slots: {
      root: g,
      input: h
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: m,
    ...v,
    classes: f
  });
});
qp.muiName = "Input";
function YP(e) {
  return pe("MuiInputAdornment", e);
}
const yi = de("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Tg;
const GP = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${ae(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, QP = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${ae(o)}`, s, r && "hiddenLabel", i && `size${ae(i)}`]
  };
  return me(l, YP, t);
}, XP = K("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: GP
})(ke(({
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
      [`&.${yi.positionStart}&:not(.${yi.hiddenLabel})`]: {
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
}))), Rg = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    ...m
  } = r, v = b2() || {};
  let f = d;
  d && v.variant, v && !f && (f = v.variant);
  const x = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: f
  }, b = QP(x);
  return /* @__PURE__ */ u.jsx(gl.Provider, {
    value: null,
    children: /* @__PURE__ */ u.jsx(XP, {
      as: s,
      ownerState: x,
      className: re(b.root, i),
      ref: n,
      ...m,
      children: typeof o == "string" && !a ? /* @__PURE__ */ u.jsx(Ve, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ u.jsxs(p.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Tg || (Tg = /* @__PURE__ */ u.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), qP = (e) => {
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
  }, c = me(a, WP, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, ZP = K(DP, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
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
})(ke(({
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
}))), JP = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  } = r, [d, m] = Vi({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let v = s;
  typeof v > "u" && m && (v = m.filled || m.focused || m.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: v,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, x = qP(f);
  return /* @__PURE__ */ u.jsx(ZP, {
    "data-shrink": v,
    ref: n,
    className: re(x.root, a),
    ...c,
    ownerState: f,
    classes: x
  });
}), yf = /* @__PURE__ */ p.createContext({});
function eM(e) {
  return pe("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const tM = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return me({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, eM, t);
}, nM = K("ul", {
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
}), rM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  } = r, m = p.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, f = tM(v);
  return /* @__PURE__ */ u.jsx(yf.Provider, {
    value: m,
    children: /* @__PURE__ */ u.jsxs(nM, {
      as: s,
      className: re(f.root, i),
      ref: n,
      ownerState: v,
      ...d,
      children: [c, o]
    })
  });
}), Pg = de("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Mg = de("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Zp = /* @__PURE__ */ p.createContext(void 0);
function _x() {
  const e = p.useContext(Zp);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const oM = Object.is;
function iM(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !oM(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const sM = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function Wx(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = $s,
    wrap: s = !0
  } = e, [l, a] = p.useState(t), [c, d] = p.useState(t);
  let m = l;
  t !== c && (d(t), t !== void 0 && t !== l && (m = t, a(t)));
  const v = p.useRef(null), f = p.useRef(/* @__PURE__ */ new Map()), [x, b] = p.useState(0), C = p.useMemo(() => vf(f.current), [x]), g = Ig(m, C, i, n), h = p.useRef(g);
  h.current = g;
  const S = p.useCallback(() => {
    const y = vf(f.current), j = Ig(h.current, y, i, n);
    return Kx(y, j);
  }, [n, i]), w = p.useCallback(() => f.current, []), E = Je((y) => {
    const j = f.current.get(y.id);
    iM(j ?? null, y) || (f.current.set(y.id, y), b((P) => P + 1));
  }), k = Je((y) => {
    f.current.delete(y) && b((j) => j + 1);
  }), R = Je((y) => {
    a(y);
  }), T = p.useCallback((y) => h.current === y, []), O = p.useCallback((y, j, P, M) => {
    var $;
    const A = Yl(f.current), L = Hx(A, y, j, P, M ?? i);
    return L ? (($ = L.element) == null || $.focus(), a(L.id), L) : null;
  }, [i]), N = p.useCallback((y, j, P) => ({
    onFocus: (L) => {
      j == null || j(L);
      const $ = Yl(f.current), B = Gx($, L.target);
      B !== -1 && a($[B].id);
    },
    onKeyDown: (L) => {
      if (P == null || P(L), L.defaultPrevented || L.altKey || L.shiftKey || L.ctrlKey || L.metaKey || !sM.includes(L.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", B = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", B = "ArrowLeft");
      const F = Yl(f.current), U = ur(gt(v.current)), _ = U === v.current;
      let X = $g(F, U, h.current), V = "next";
      switch (L.key) {
        case $:
          V = "previous", L.preventDefault(), _ && (X = F.length);
          break;
        case B:
          L.preventDefault(), _ && (X = -1);
          break;
        case "Home":
          L.preventDefault(), X = -1;
          break;
        case "End":
          L.preventDefault(), V = "previous", X = F.length;
          break;
        default:
          return;
      }
      O(X, V, s);
    },
    ref: uM(y, (L) => {
      v.current = L;
    })
  }), [O, o, r, s]), I = p.useCallback((y) => {
    var L;
    const j = Yl(f.current), P = ur(gt(v.current)), A = P === v.current ? -1 : $g(j, P, h.current);
    return ((L = O(A, "next", !0, y)) == null ? void 0 : L.id) ?? null;
  }, [O]);
  return p.useMemo(() => ({
    activeItemId: g,
    focusNext: I,
    getActiveItem: S,
    getContainerProps: N,
    getItemMap: w,
    isItemActive: T,
    registerItem: E,
    setActiveItemId: R,
    unregisterItem: k
  }), [g, I, S, N, w, T, E, R, k]);
}
function Ux(e) {
  const t = _x(), {
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
  const a = p.useCallback((d) => {
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
  }, [e.id, r, o]), c = mt(e.ref, a);
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
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Ig(e, t, n, r) {
  return e != null ? lM(e, t, n) : aM(t, n, r);
}
function lM(e, t, n) {
  var o;
  const r = Yx(t, e);
  return r === -1 ? Vx(t, n) : n(t[r]) ? t[r].id : ((o = Hx(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function aM(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = Kx(e, r);
    if (o && t(o))
      return o.id;
  }
  return Vx(e, t);
}
function $g(e, t, n) {
  if (t) {
    const r = Gx(e, t);
    if (r !== -1)
      return r;
  }
  return Yx(e, n);
}
function Hx(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = jg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = jg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function Vx(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function Kx(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Yx(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Gx(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function vf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(xf).sort((o, i) => cM(o.element, i.element)), r = t.filter((o) => !xf(o));
  return [...n, ...r];
}
function Yl(e) {
  return vf(e).filter(xf);
}
function jg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function $s(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function xf(e) {
  return e.element != null && e.element.isConnected;
}
function cM(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function uM(...e) {
  return (t) => {
    e.forEach((n) => {
      af(n ?? null, t);
    });
  };
}
function Qx(e, t) {
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
function dM(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function fM(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function ga(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Xx = /* @__PURE__ */ p.createContext(null);
function qx() {
  return p.useContext(Xx);
}
const pM = Xx.Provider, Zx = /* @__PURE__ */ p.createContext(void 0);
function mM() {
  const e = p.useContext(Zx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function hM(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Jx(e, t) {
  if (t === void 0)
    return !0;
  let n = hM(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function gM(e, t) {
  return Jx(e, t) ? $s(e) : !1;
}
function yM(e, t) {
  Qx(e, t);
}
const vM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variant: m = "selectedMenu",
    ...v
  } = t, f = p.useRef(null), x = p.useRef(!1), [b, C] = p.useState(!1), g = qx(), h = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = p.useCallback((M) => {
    var A, L, $;
    return m === "selectedMenu" ? ((A = M.find((B) => B.selected && $s(B))) == null ? void 0 : A.id) ?? ((L = M.find((B) => $s(B))) == null ? void 0 : L.id) ?? null : (($ = M.find((B) => $s(B))) == null ? void 0 : $.id) ?? null;
  }, [m]), w = Wx({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !c
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: R,
    getContainerProps: T,
    getItemMap: O
  } = w, N = Je((M = !1) => {
    if (!f.current || !M && x.current)
      return null;
    if (i) {
      const A = R();
      if (A != null && A.element) {
        const L = Array.from(O().values()).some((B) => B.selected), $ = m === "menu" && L && !A.selected && g == null;
        return C($), yM(A.element, g), x.current = !0, A.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), x.current = !0, f.current) : (C(!1), null);
  });
  ft(() => {
    if (!o && !i) {
      x.current = !1, C(!1);
      return;
    }
    N();
  }, [E, i, o, N]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (M, {
      direction: A
    }) => {
      const L = !f.current.style.width;
      if (M.clientHeight < f.current.clientHeight && L) {
        const $ = `${Lx(nr(M))}px`;
        f.current.style[A === "rtl" ? "paddingLeft" : "paddingRight"] = $, f.current.style.width = `calc(100% + ${$})`;
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const M = ur(gt(f.current));
      return M && Ao(f.current, M) ? M : N(!0);
    }
  }), [N]);
  const I = T(void 0, v.onFocus), y = mt(f, I.ref, n), j = p.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: m
  }), [a, b, m]), P = Je((M) => {
    if (b && C(!1), (M.ctrlKey || M.metaKey || M.altKey) && d) {
      d(M);
      return;
    }
    if (I.onKeyDown(M), M.key.length === 1) {
      const L = h.current, $ = M.key.toLowerCase(), B = performance.now();
      L.keys.length > 0 && (B - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && $ !== L.keys[0] && (L.repeating = !1)), L.lastTime = B, L.keys.push($);
      const F = ur(gt(f.current)), U = F && !L.repeating && Jx(F, L);
      L.previousKeyMatched && (U || k((_) => gM(_, L)) != null) ? M.preventDefault() : L.previousKeyMatched = !1;
    }
    d && d(M);
  });
  return /* @__PURE__ */ u.jsx(rM, {
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...v,
    onFocus: I.onFocus,
    children: /* @__PURE__ */ u.jsx(Zx.Provider, {
      value: j,
      children: /* @__PURE__ */ u.jsx(Zp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function xM(e) {
  return pe("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
function Og(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ag(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ng(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Gl(e) {
  return typeof e == "function" ? e() : e;
}
const SM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"]
  }, xM, t);
}, bM = K(Bx, {
  name: "MuiPopover",
  slot: "Root"
})({}), e1 = K(An, {
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
}), wM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    container: m,
    disableAutoFocus: v = !1,
    elevation: f = 8,
    marginThreshold: x = 16,
    open: b,
    slots: C = {},
    slotProps: g = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: w = !1,
    ...E
  } = r, k = p.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: f,
    marginThreshold: x,
    transformOrigin: h,
    transitionDuration: S
  }, T = SM(R), O = p.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const W = Gl(i), se = (W && W.nodeType === 1 ? W : gt(k.current).body).getBoundingClientRect();
    return {
      top: se.top + Og(se, s.vertical),
      left: se.left + Ag(se, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), N = p.useCallback((W) => ({
    vertical: Og(W, h.vertical),
    horizontal: Ag(W, h.horizontal)
  }), [h.horizontal, h.vertical]), I = p.useCallback((W) => {
    const ne = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, se = N(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ng(se)
      };
    const Ee = O();
    let Te = Ee.top - se.vertical, ge = Ee.left - se.horizontal;
    const ce = Te + ne.height, Ne = ge + ne.width, je = nr(Gl(i)), Se = je.innerHeight - x, Oe = je.innerWidth - x;
    if (x != null && Te < x) {
      const ue = Te - x;
      Te -= ue, se.vertical += ue;
    } else if (x != null && ce > Se) {
      const ue = ce - Se;
      Te -= ue, se.vertical += ue;
    }
    if (x != null && ge < x) {
      const ue = ge - x;
      ge -= ue, se.horizontal += ue;
    } else if (Ne > Oe) {
      const ue = Ne - Oe;
      ge -= ue, se.horizontal += ue;
    }
    return {
      top: `${Math.round(Te)}px`,
      left: `${Math.round(ge)}px`,
      transformOrigin: Ng(se)
    };
  }, [i, a, O, N, x]), [y, j] = p.useState(b), P = p.useCallback(() => {
    const W = k.current;
    if (!W)
      return;
    const ne = I(W);
    ne.top != null && W.style.setProperty("top", ne.top), ne.left != null && (W.style.left = ne.left), W.style.transformOrigin = ne.transformOrigin, j(!0);
  }, [I]);
  p.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const M = () => {
    P();
  }, A = () => {
    j(!1);
  };
  p.useEffect(() => {
    b && P();
  }), p.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      P();
    }
  } : null, [b, P]), p.useEffect(() => {
    if (!b)
      return;
    const W = ru(() => {
      P();
    }), ne = nr(Gl(i));
    return ne.addEventListener("resize", W), () => {
      W.clear(), ne.removeEventListener("resize", W);
    };
  }, [i, b, P]);
  let L = S;
  const $ = {
    slots: C,
    slotProps: g
  }, [B, F] = xe("transition", {
    elementType: il,
    externalForwardedProps: $,
    ownerState: R,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (ne, se) => {
        var Ee;
        (Ee = W.onEntering) == null || Ee.call(W, ne, se), M();
      },
      onExited: (ne) => {
        var se;
        (se = W.onExited) == null || se.call(W, ne), A();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !B.muiSupportAuto && (L = void 0);
  const U = m || (i ? gt(Gl(i)).body : void 0), [_, {
    slots: X,
    slotProps: V,
    ...J
  }] = xe("root", {
    ref: n,
    elementType: bM,
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
        backdrop: V2(typeof g.backdrop == "function" ? g.backdrop(R) : g.backdrop, {
          invisible: !0
        })
      },
      container: U,
      open: b
    },
    ownerState: R,
    className: re(T.root, d)
  }), [G, Q] = xe("paper", {
    ref: k,
    className: T.paper,
    elementType: e1,
    externalForwardedProps: $,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: y ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ u.jsx(_, {
    ...J,
    ...!Va(_) && {
      slots: X,
      slotProps: V,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ u.jsx(B, {
      ...F,
      timeout: L,
      children: /* @__PURE__ */ u.jsx(G, {
        ...Q,
        children: c
      })
    })
  });
});
function CM(e) {
  return pe("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const kM = {
  vertical: "top",
  horizontal: "right"
}, EM = {
  vertical: "top",
  horizontal: "left"
}, TM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, CM, t);
}, RM = K(wM, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), PM = K(e1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), MM = K(vM, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), IM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    transitionDuration: m = "auto",
    variant: v = "selectedMenu",
    slots: f = {},
    slotProps: x = {},
    ...b
  } = r, C = tu(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: m,
    variant: v
  }, h = TM(g), S = o && c, w = S && !l, E = p.useRef(null), k = (M, A) => {
    var L, $;
    E.current && (E.current.adjustStyleForScrollbar(M, {
      direction: C ? "rtl" : "ltr"
    }), S && (($ = (L = E.current).focusInitialTarget) == null || $.call(L)));
  }, R = (M) => {
    M.key === "Tab" && (M.preventDefault(), a && a(M, "tabKeyDown"));
  }, T = {
    slots: f,
    slotProps: x
  }, O = Fi({
    elementType: f.root,
    externalSlotProps: x.root,
    ownerState: g,
    className: [h.root, s]
  }), [N, I] = xe("paper", {
    className: h.paper,
    elementType: PM,
    externalForwardedProps: T,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [y, j] = xe("list", {
    className: h.list,
    elementType: MM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: T,
    getSlotProps: (M) => ({
      ...M,
      onKeyDown: (A) => {
        var L;
        R(A), (L = M.onKeyDown) == null || L.call(M, A);
      }
    }),
    ownerState: g
  }), P = typeof x.transition == "function" ? x.transition(g) : x.transition;
  return /* @__PURE__ */ u.jsx(
    RM,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? kM : EM,
      slots: {
        root: f.root,
        paper: N,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: O,
        paper: I,
        backdrop: typeof x.backdrop == "function" ? x.backdrop(g) : x.backdrop,
        transition: {
          ...P,
          onEntering: (...M) => {
            var A;
            k(...M), (A = P == null ? void 0 : P.onEntering) == null || A.call(P, ...M);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: m,
      ownerState: g,
      ...b,
      classes: d,
      children: /* @__PURE__ */ u.jsx(y, {
        actions: E,
        autoFocus: S,
        autoFocusItem: w,
        variant: v,
        ...j,
        children: i
      })
    }
  );
}), $M = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, jM = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = me({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, N2, s);
  return {
    ...s,
    ...a
  };
}, OM = K(Uo, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: $M
})(ke(({
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
  [`&.${as.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${as.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${as.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${as.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${as.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${kg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${kg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Mg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Mg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Pg.root}`]: {
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
      [`& .${Pg.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), Qt = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    tabIndex: m,
    className: v,
    ...f
  } = r, b = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = qx(), g = p.useContext(yf), h = p.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: a
  }), [g.dense, s, a]), S = mM(), w = Or(), E = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, R = p.useRef(null);
  ft(() => {
    o && R.current && Qx(R.current, C);
  }, [o]);
  const T = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, O = jM(r), {
    root: N,
    ...I
  } = O, y = Ux({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), j = mt(R, y.ref);
  let P;
  return m !== void 0 ? P = m : S.variant === "selectedMenu" ? P = y.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ u.jsx(yf.Provider, {
    value: h,
    children: /* @__PURE__ */ u.jsx(OM, {
      ref: j,
      role: d,
      "aria-checked": b,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: re(O.focusVisible, c),
      className: re(O.root, v),
      ...f,
      ownerState: T,
      classes: I
    })
  });
}), AM = (e) => {
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
  return me(l, L2, t);
}, t1 = K("select", {
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
  [`&.${_p.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${yi.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${gn.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${gn.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${gn.root}:has(> & ~ .${yi.root})`]: {
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
      [`.${gn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${gn.root}:has(> & ~ .${yi.root})`]: {
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
      [`.${gn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${gn.root}:has(> & ~ .${yi.root})`]: {
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
})), NM = K(t1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Tn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${_p.multiple}`]: t.multiple
    }];
  }
})({}), n1 = K("svg", {
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
  [`&.${_p.disabled}`]: {
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
})), LM = K(n1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ae(n.variant)}`], n.open && t.iconOpen];
  }
})({}), zM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, m = AM(d);
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx(NM, {
      ownerState: d,
      className: re(m.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ u.jsx(LM, {
      as: s,
      ownerState: d,
      className: m.icon
    })]
  });
});
var Lg;
const BM = K("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Tn
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
}), DM = K("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Tn
})(ke(({
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
function FM(e) {
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
  return /* @__PURE__ */ u.jsx(BM, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ u.jsx(DM, {
      ownerState: a,
      children: l ? /* @__PURE__ */ u.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Lg || (Lg = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const _M = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, z2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, WM = K(su, {
  shouldForwardProp: (e) => Tn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: ou
})(ke(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${ir.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${ir.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${ir.focused} .${ir.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Jt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${ir.focused} .${ir.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${ir.error} .${ir.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${ir.disabled} .${ir.notchedOutline}`]: {
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
        [`&.${Ro.root}`]: {
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
})), UM = K(FM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ke(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), HM = K(lu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: iu
})(ke(({
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
}))), Jp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    type: m = "text",
    ...v
  } = r, f = _M(r), [x, b] = Vi({
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
  }, g = c.root ?? WM, h = c.input ?? HM, [S, w] = xe("notchedOutline", {
    elementType: UM,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && x.required ? /* @__PURE__ */ u.jsxs(p.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ u.jsx(Fp, {
    slots: {
      root: g,
      input: h
    },
    slotProps: d,
    renderSuffix: (E) => /* @__PURE__ */ u.jsx(S, {
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
      ...f,
      notchedOutline: null
    }
  });
});
Jp.muiName = "Input";
function VM(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function r1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return p.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ p.isValidElement(n) && (t += r1(n.props.children));
  }), t;
}
function KM(e, t, n = 0) {
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
function YM(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function GM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ p.isValidElement(i) || !VM(i) || i.props.disabled)
      continue;
    const s = r1(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && ga(t, i.props.value) && (r = n.length), n.push({
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
var zg;
const Ql = 2, QM = 400, Bg = 200, XM = 750, Co = " ", qM = "ArrowUp", ZM = "ArrowDown", JM = "Enter";
function Dg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Ql && e.clientX <= r.right + Ql && e.clientY >= r.top - Ql && e.clientY <= r.bottom + Ql;
}
const eI = K(t1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Ro.select}`]: t.select
      },
      {
        [`&.${Ro.select}`]: t[n.variant]
      },
      {
        [`&.${Ro.error}`]: t.error
      },
      {
        [`&.${Ro.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${Ro.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), tI = K(n1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), nI = K("input", {
  shouldForwardProp: (e) => ux(e) && e !== "classes",
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
}), rI = (e) => {
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
  }, Fx, t);
}, oI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var Kn, Br, Qo, Sl;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: d,
    disabled: m,
    displayEmpty: v,
    error: f = !1,
    IconComponent: x,
    inputRef: b,
    labelId: C,
    MenuProps: g = {},
    multiple: h,
    name: S,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: R,
    // eslint-disable-next-line react/prop-types
    onKeyDown: T,
    // eslint-disable-next-line react/prop-types
    onMouseDown: O,
    onOpen: N,
    open: I,
    readOnly: y,
    renderValue: j,
    required: P,
    SelectDisplayProps: M = {},
    tabIndex: A,
    // catching `type` from Input which makes no sense for SelectInput
    type: L,
    value: $,
    variant: B = "standard",
    ...F
  } = t, [U, _] = cf({
    controlled: $,
    default: d,
    name: "Select"
  }), [X, V] = cf({
    controlled: I,
    default: c,
    name: "Select"
  }), J = p.useRef(null), G = p.useRef(null), Q = p.useRef(null), W = p.useRef(!1), ne = p.useRef(!1), se = p.useRef(null), Ee = p.useRef(!1), Te = p.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ge = p.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ce = dr(), Ne = dr(), je = dr(), [Se, Oe] = p.useState(null), {
    current: ue
  } = p.useRef(I != null), [Pe, et] = p.useState(), [Ie, Me] = p.useState(null), _e = mt(n, b), Ge = p.useCallback((Y) => {
    G.current = Y, Y && Oe(Y);
  }, []), Be = Se == null ? void 0 : Se.parentNode;
  p.useImperativeHandle(_e, () => ({
    focus: () => {
      G.current.focus();
    },
    node: J.current,
    value: U
  }), [U]);
  const ve = Se !== null && X, We = p.useCallback(() => {
    je.clear(), ge.current.buffer = "", ge.current.previousSearchIndex = null, ge.current.matchedIndex = null;
  }, [je]);
  ft(() => {
    W.current = ve, ve && We();
  }, [ve, We]);
  const yt = p.useCallback(() => {
    ce.clear(), Ne.clear();
  }, [ce, Ne]), oe = p.useCallback(() => {
    yt(), Ee.current = !1, Te.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [yt]), ye = p.useCallback(() => {
    se.current && (se.current(), se.current = null);
  }, []);
  p.useEffect(() => {
    ve || (oe(), ye());
  }, [ve, oe, ye]), p.useEffect(() => () => {
    oe(), ye(), We();
  }, [oe, ye, We]), p.useEffect(() => {
    if (!ve || !Be || s || typeof ResizeObserver > "u")
      return;
    const Y = new ResizeObserver(() => {
      et(Be.clientWidth);
    });
    return Y.observe(Be), () => {
      Y.disconnect();
    };
  }, [ve, Be, s]), p.useEffect(() => {
    c && X && Se && !ue && (et(s ? null : Be.clientWidth), G.current.focus());
  }, [Se, s]), p.useEffect(() => {
    i && G.current.focus();
  }, [i]), p.useEffect(() => {
    if (!C)
      return;
    const Y = gt(G.current).getElementById(C);
    if (Y) {
      const le = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return Y.addEventListener("click", le), () => {
        Y.removeEventListener("click", le);
      };
    }
  }, [C]);
  const Ae = Je((Y, le) => {
    Y || (oe(), ye()), Y ? (We(), Me(dM(le)), N && N(le)) : (Me(null), k && k(le)), ue || (W.current = Y, et(s ? null : Be.clientWidth), V(Y));
  }), at = () => {
    oe(), ne.current ? Ne.start(Bg, () => {
      Te.current.allowUnselectedMouseUp = !0, ce.start(Bg, () => {
        Te.current.allowSelectedMouseUp = !0;
      });
    }) : ce.start(QM, () => {
      Te.current.allowSelectedMouseUp = !0, Te.current.allowUnselectedMouseUp = !0;
    });
  }, we = (Y) => {
    if (O == null || O(Y), Y.button !== 0 || (Y.preventDefault(), !G.current))
      return;
    G.current.focus();
    const le = gt(Y.currentTarget);
    at(), ye();
    const Ce = (nt) => {
      se.current = null, G.current && (Dg(nt, G.current) || Dg(nt, Q.current) || !W.current && ue || Ae(!1, nt));
    };
    le.addEventListener("mouseup", Ce, {
      capture: !0,
      once: !0
    }), se.current = () => {
      le.removeEventListener("mouseup", Ce, !0);
    }, Ae(!0, Y);
  }, Hn = (Y) => {
    Ae(!1, Y);
  }, pn = p.Children.toArray(l), Lr = (Y) => {
    const le = pn.find((Ce) => Ce.props.value === Y.target.value);
    le !== void 0 && (_(le.props.value), E && E(Y, le));
  }, vr = (Y, le, Ce) => {
    if (_(Ce), E) {
      const nt = Y.nativeEvent || Y, Ot = new nt.constructor(nt.type, nt);
      Object.defineProperty(Ot, "target", {
        writable: !0,
        value: {
          value: Ce,
          name: S
        }
      }), E(Ot, le);
    }
  }, fe = (Y) => (le) => {
    Ee.current = !1;
    let Ce;
    if (le.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Ce = Array.isArray(U) ? U.slice() : [];
        const nt = U.indexOf(Y.props.value);
        nt === -1 ? Ce.push(Y.props.value) : Ce.splice(nt, 1);
      } else
        Ce = Y.props.value;
      Y.props.onClick && Y.props.onClick(le), U !== Ce && vr(le, Y, Ce), h || Ae(!1, le);
    }
  }, De = (Y, le) => (Ce) => {
    var Xo, Dr;
    if ((Dr = (Xo = Y.props).onMouseUp) == null || Dr.call(Xo, Ce), Ee.current) {
      Ee.current = !1;
      return;
    }
    const nt = !Te.current.allowSelectedMouseUp && le, Ot = !Te.current.allowUnselectedMouseUp && !le;
    nt || Ot || Ce.currentTarget.click();
  }, Yt = (Y) => {
    var bl;
    const le = ge.current, Ce = le.buffer !== "";
    if (ve || h || m || Y.defaultPrevented || (bl = Y.nativeEvent) != null && bl.isComposing || Y.key.length !== 1 || Y.ctrlKey || Y.metaKey || Y.altKey || Y.key === Co && !Ce)
      return !1;
    Y.key === Co && Y.preventDefault();
    const nt = le.buffer === "", {
      options: Ot,
      selectedIndex: Xo
    } = GM(pn, U);
    if (Ot.length === 0)
      return Y.key !== Co && We(), !0;
    nt && (le.previousSearchIndex = Xo);
    const Dr = Y.key.toLowerCase();
    le.buffer === Dr && YM(Ot, Dr) && (le.buffer = "", le.previousSearchIndex = le.matchedIndex), le.buffer += Dr, je.start(XM, We);
    const Yi = KM(Ot, le.buffer, (le.previousSearchIndex ?? -1) + 1);
    if (Yi !== -1) {
      const Gi = Ot[Yi];
      return le.matchedIndex = Yi, ga(U, Gi.value) || vr(Y, Gi.child, Gi.value), !0;
    }
    return Y.key !== Co && We(), !0;
  }, xl = (Y) => {
    if (!y) {
      const le = Yt(Y), Ce = Y.key === Co || Y.key === qM || Y.key === ZM || Y.key === JM;
      !le && Ce && (Y.preventDefault(), Ae(!0, Y)), T == null || T(Y);
    }
  }, Ki = (Y) => {
    We(), !ve && w && (Object.defineProperty(Y, "target", {
      writable: !0,
      value: {
        value: U,
        name: S
      }
    }), w(Y));
  }, yo = (Y) => (le) => {
    var Ce, nt;
    (nt = (Ce = Y == null ? void 0 : Y.props) == null ? void 0 : Ce.onKeyDown) == null || nt.call(Ce, le), le.key === Co && le.target === le.currentTarget && !le.defaultPrevented && (le.preventDefault(), le.repeat || le.currentTarget.click());
  };
  delete F["aria-invalid"];
  let Vn, Go;
  const Pt = [];
  let zr = !1, tt = !1;
  (Ka({
    value: U
  }) || v) && (j ? Vn = j(U) : zr = !0);
  const vo = pn.map((Y) => {
    if (!/* @__PURE__ */ p.isValidElement(Y))
      return null;
    let le;
    if (h) {
      if (!Array.isArray(U))
        throw new Error(jr(2));
      le = U.some((Ce) => ga(Ce, Y.props.value)), le && zr && Pt.push(Y.props.children);
    } else
      le = ga(U, Y.props.value), le && zr && (Go = Y.props.children);
    return le && (tt = !0), /* @__PURE__ */ p.cloneElement(Y, {
      "aria-selected": le ? "true" : "false",
      onMouseDown: (Ce) => {
        var nt, Ot;
        Ee.current = !0, (Ot = (nt = Y.props).onMouseDown) == null || Ot.call(nt, Ce);
      },
      onPointerDown: (Ce) => {
        var nt, Ot;
        Ee.current = !0, (Ot = (nt = Y.props).onPointerDown) == null || Ot.call(nt, Ce);
      },
      onClick: fe(Y),
      onMouseUp: De(Y, le),
      onKeyUp: (Ce) => {
        Ce.key === Co && Ce.preventDefault(), Y.props.onKeyUp && Y.props.onKeyUp(Ce);
      },
      onKeyDown: yo(Y),
      role: "option",
      selected: le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Y.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ft(() => {
    ne.current = tt, !ve && !h && !tt && We();
  }, [tt, h, ve, We]), zr && (h ? Pt.length === 0 ? Vn = null : Vn = Pt.reduce((Y, le, Ce) => (Y.push(le), Ce < Pt.length - 1 && Y.push(", "), Y), []) : Vn = Go);
  let ct = Pe;
  !s && ue && Se && (ct = Be.clientWidth);
  let xo;
  typeof A < "u" ? xo = A : xo = m ? null : 0;
  const q = M.id || (S ? `mui-component-select-${S}` : void 0), Z = {
    ...t,
    variant: B,
    value: U,
    open: ve,
    error: f
  }, ie = rI(Z), be = typeof ((Kn = g.slotProps) == null ? void 0 : Kn.paper) == "function" ? g.slotProps.paper(Z) : (Br = g.slotProps) == null ? void 0 : Br.paper, qe = mt(be == null ? void 0 : be.ref, Q), rn = typeof ((Qo = g.slotProps) == null ? void 0 : Qo.list) == "function" ? g.slotProps.list(Z) : (Sl = g.slotProps) == null ? void 0 : Sl.list, Mt = Or(), Rn = Or();
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx(eI, {
      as: "div",
      ref: Ge,
      tabIndex: xo,
      role: "combobox",
      "aria-controls": ve ? Mt : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": ve ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": y ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: xl,
      onMouseDown: m || y ? null : we,
      onBlur: Ki,
      onFocus: R,
      ...M,
      ownerState: Z,
      className: re(M.className, ie.select, a),
      id: q,
      children: fM(Vn) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        zg || (zg = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Vn
    }), /* @__PURE__ */ u.jsx(nI, {
      "aria-invalid": f,
      value: Array.isArray(U) ? U.join(",") : U,
      name: S,
      ref: J,
      "aria-hidden": !0,
      onChange: Lr,
      tabIndex: -1,
      disabled: m,
      readOnly: y,
      className: ie.nativeInput,
      autoFocus: i,
      required: P,
      ...F,
      id: F.id ?? Rn,
      ownerState: Z
    }), /* @__PURE__ */ u.jsx(tI, {
      as: x,
      className: ie.icon,
      ownerState: Z
    }), /* @__PURE__ */ u.jsx(pM, {
      value: Ie,
      children: /* @__PURE__ */ u.jsx(IM, {
        id: `menu-${S || ""}`,
        anchorEl: Be,
        open: ve,
        onClose: Hn,
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
            "aria-multiselectable": h ? "true" : void 0,
            disableListWrap: !0,
            id: Mt,
            ...rn
          },
          paper: {
            ...be,
            ref: qe,
            style: {
              minWidth: ct,
              ...be == null ? void 0 : be.style
            }
          }
        },
        children: vo
      })
    })]
  });
}), iI = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"]
  }, Fx, t);
  return {
    ...t,
    ...r
  };
}, em = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Tn(e) && e !== "variant"
}, sI = K(qp, em)(""), lI = K(Jp, em)(""), aI = K(Xp, em)(""), Ja = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    IconComponent: d = CR,
    id: m,
    input: v,
    inputProps: f,
    label: x,
    labelId: b,
    MenuProps: C,
    multiple: g = !1,
    native: h = !1,
    onClose: S,
    onOpen: w,
    open: E,
    renderValue: k,
    SelectDisplayProps: R,
    variant: T = "outlined",
    ...O
  } = r, N = h ? zM : oI, [I] = Vi({
    props: r,
    states: ["variant", "error"]
  }), y = I.variant || T, j = {
    ...r,
    variant: y,
    classes: s
  }, P = iI(j), {
    root: M,
    ...A
  } = P, L = v || {
    standard: /* @__PURE__ */ u.jsx(sI, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ u.jsx(lI, {
      label: x,
      ownerState: j
    }),
    filled: /* @__PURE__ */ u.jsx(aI, {
      ownerState: j
    })
  }[y], $ = mt(n, Yo(L));
  return /* @__PURE__ */ u.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(L, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: N,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: d,
        variant: y,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: g,
        ...h ? {
          id: m
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
            id: m,
            ...R
          }
        },
        ...f,
        classes: f ? Bt(A, f.classes) : A,
        ...v ? v.props.inputProps : {}
      },
      ...(g && h || c) && y === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: re(L.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: y
      },
      ...O
    })
  });
});
Ja.muiName = "Select";
function cI(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = dr();
  p.useEffect(() => {
    if (!o)
      return;
    function g(h) {
      h.defaultPrevented || h.key === "Escape" && (r == null || r(h, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [o, r]);
  const l = Je((g, h) => {
    r == null || r(g, h);
  }), a = Je((g) => {
    !r || g == null || s.start(g, () => {
      l(null, "timeout");
    });
  });
  p.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (g) => {
    r == null || r(g, "clickaway");
  }, d = s.clear, m = p.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (g) => (h) => {
    const S = g.onBlur;
    S == null || S(h), m();
  }, f = (g) => (h) => {
    const S = g.onFocus;
    S == null || S(h), d();
  }, x = (g) => (h) => {
    const S = g.onMouseEnter;
    S == null || S(h), d();
  }, b = (g) => (h) => {
    const S = g.onMouseLeave;
    S == null || S(h), m();
  };
  return p.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", d);
      };
  }, [n, o, m, d]), {
    getRootProps: (g = {}) => {
      const h = {
        ...Qa(e),
        ...Qa(g)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...g,
        ...h,
        onBlur: v(h),
        onFocus: f(h),
        onMouseEnter: x(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: c
  };
}
function uI(e) {
  return pe("MuiSnackbarContent", e);
}
de("MuiSnackbarContent", ["root", "message", "action"]);
const dI = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, uI, t);
}, fI = K(An, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(ke(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(tf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : tf(e.palette.background.default, t),
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
})), pI = K("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), mI = K("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), hI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, d = dI(c);
  return /* @__PURE__ */ u.jsxs(fI, {
    role: l,
    elevation: 6,
    className: re(d.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ u.jsx(pI, {
      className: d.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ u.jsx(mI, {
      className: d.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function gI(e) {
  return pe("MuiSnackbar", e);
}
de("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const yI = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ae(n.vertical)}${ae(n.horizontal)}`]
  };
  return me(r, gI, t);
}, vI = K("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ae(n.anchorOrigin.vertical)}${ae(n.anchorOrigin.horizontal)}`]];
  }
})(ke(({
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
}))), xI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiSnackbar"
  }), o = ho(), i = {
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
    className: m,
    disableWindowBlurListener: v = !1,
    message: f,
    onBlur: x,
    onClose: b,
    onFocus: C,
    onMouseEnter: g,
    onMouseLeave: h,
    open: S,
    resumeHideDuration: w,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: R = i,
    ...T
  } = r, O = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: c,
    disableWindowBlurListener: v,
    transitionDuration: R
  }, N = yI(O), {
    getRootProps: I,
    onClickAway: y
  } = cI(O), [j, P] = p.useState(!0), M = {
    slots: E,
    slotProps: k
  }, [A, L] = xe("root", {
    ref: n,
    className: [N.root, m],
    elementType: vI,
    getSlotProps: I,
    externalForwardedProps: {
      ...M,
      ...T
    },
    ownerState: O
  }), [$, {
    ownerState: B,
    ...F
  }] = xe("clickAwayListener", {
    elementType: KR,
    externalForwardedProps: M,
    getSlotProps: (J) => ({
      onClickAway: (...G) => {
        var W;
        const Q = G[0];
        (W = J.onClickAway) == null || W.call(J, ...G), !(Q != null && Q.defaultMuiPrevented) && y(...G);
      }
    }),
    ownerState: O
  }), [U, _] = xe("content", {
    elementType: hI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: M,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: O
  }), [X, V] = xe("transition", {
    elementType: il,
    externalForwardedProps: M,
    getSlotProps: (J) => ({
      onEnter: (...G) => {
        var Q;
        (Q = J.onEnter) == null || Q.call(J, ...G), P(!1);
      },
      onExited: (...G) => {
        var Q;
        (Q = J.onExited) == null || Q.call(J, ...G), P(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: R,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: O
  });
  return !S && j ? null : /* @__PURE__ */ u.jsx($, {
    ...F,
    ...E.clickAwayListener && {
      ownerState: B
    },
    children: /* @__PURE__ */ u.jsx(A, {
      ...L,
      children: /* @__PURE__ */ u.jsx(X, {
        ...V,
        children: d || /* @__PURE__ */ u.jsx(U, {
          ..._
        })
      })
    })
  });
});
function SI(e) {
  return pe("MuiTooltip", e);
}
const Mn = de("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function bI(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wI = (e) => {
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
  return me(s, SI, t);
}, CI = K(jx, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(ke(({
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
      [`&[data-popper-placement*="bottom"] .${Mn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Mn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Mn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Mn.arrow}`]: {
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
}))), kI = K("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ae(n.placement.split("-")[0])}`]];
  }
})(ke(({
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
  [`.${Mn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${Mn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${Mn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Mn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${bI(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Mn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${Mn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${Mn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${Mn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), EI = K("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(ke(({
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
let Xl = !1;
const Fg = new cu();
let us = {
  x: 0,
  y: 0
};
function ql(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const Pn = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    disableTouchListener: m = !1,
    enterDelay: v = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: x = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: g = 0,
    leaveTouchDelay: h = 1500,
    onClose: S,
    onOpen: w,
    open: E,
    placement: k = "bottom",
    slotProps: R = {},
    slots: T = {},
    title: O,
    ...N
  } = r, I = /* @__PURE__ */ p.isValidElement(i) ? i : /* @__PURE__ */ u.jsx("span", {
    children: i
  }), y = ho(), [j, P] = p.useState(), [M, A] = p.useState(null), L = p.useRef(!1), $ = d || b, B = dr(), F = dr(), U = dr(), _ = dr(), [X, V] = cf({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let J = X;
  const G = Or(C), Q = p.useRef(), W = Je(() => {
    Q.current !== void 0 && (document.body.style.WebkitUserSelect = Q.current, Q.current = void 0), _.clear();
  });
  p.useEffect(() => W, [W]);
  const ne = (fe) => {
    Fg.clear(), Xl = !0, V(!0), w && !J && w(fe);
  }, se = Je(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (fe) => {
      Fg.start(800 + g, () => {
        Xl = !1;
      }), V(!1), S && J && S(fe), B.start(y.transitions.duration.shortest, () => {
        L.current = !1;
      });
    }
  ), Ee = (fe) => {
    j != null && j.disabled || L.current && fe.type !== "touchstart" || (j && j.removeAttribute("title"), F.clear(), U.clear(), v || Xl && f ? F.start(Xl ? f : v, () => {
      ne(fe);
    }) : ne(fe));
  }, Te = (fe) => {
    F.clear(), U.start(g, () => {
      se(fe);
    });
  }, [, ge] = p.useState(!1), ce = (fe) => {
    const De = (fe == null ? void 0 : fe.target) ?? j;
    if (!De || De.disabled || !Xa(De)) {
      ge(!1);
      const Yt = fe ?? new Event("blur");
      !fe && De && (Object.defineProperty(Yt, "target", {
        value: De
      }), Object.defineProperty(Yt, "currentTarget", {
        value: De
      })), Te(Yt);
    }
  }, Ne = (fe) => {
    if (j || P(fe.currentTarget), Xa(fe.target)) {
      const De = (Yt) => {
        Yt.target.disabled && ce(Yt), Yt.target.removeEventListener("blur", De);
      };
      fe.target.addEventListener("blur", De), ge(!0), Ee(fe);
    }
  }, je = (fe) => {
    L.current = !0;
    const De = I.props;
    De.onTouchStart && De.onTouchStart(fe);
  }, Se = (fe) => {
    je(fe), U.clear(), B.clear(), W(), Q.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(x, () => {
      document.body.style.WebkitUserSelect = Q.current, Ee(fe);
    });
  }, Oe = (fe) => {
    I.props.onTouchEnd && I.props.onTouchEnd(fe), W(), U.start(h, () => {
      se(fe);
    });
  };
  p.useEffect(() => {
    if (!J)
      return;
    function fe(De) {
      De.key === "Escape" && se(De);
    }
    return document.addEventListener("keydown", fe), () => {
      document.removeEventListener("keydown", fe);
    };
  }, [se, J]);
  const ue = mt(Yo(I), P, n);
  !O && O !== 0 && (J = !1);
  const Pe = p.useRef(), et = (fe) => {
    const De = I.props;
    De.onMouseMove && De.onMouseMove(fe), us = {
      x: fe.clientX,
      y: fe.clientY
    }, Pe.current && Pe.current.update();
  }, Ie = {}, Me = typeof O == "string";
  l ? (Ie.title = !J && Me && !c ? O : null, Ie["aria-describedby"] = J ? G : null) : (Ie["aria-label"] = Me ? O : null, Ie["aria-labelledby"] = J && !Me ? G : null);
  const _e = {
    ...Ie,
    ...N,
    ...I.props,
    className: re(N.className, I.props.className),
    onTouchStart: je,
    ref: ue,
    ...b ? {
      onMouseMove: et
    } : {}
  }, Ge = {};
  m || (_e.onTouchStart = Se, _e.onTouchEnd = Oe), c || (_e.onMouseOver = ql(Ee, _e.onMouseOver), _e.onMouseLeave = ql(Te, _e.onMouseLeave), $ || (Ge.onMouseOver = Ee, Ge.onMouseLeave = Te)), a || (_e.onFocus = ql(Ne, _e.onFocus), _e.onBlur = ql(ce, _e.onBlur), $ || (Ge.onFocus = Ne, Ge.onBlur = ce));
  const Be = {
    ...r,
    arrow: o,
    disableInteractive: $,
    placement: k,
    touch: L.current
  }, ve = typeof R.popper == "function" ? R.popper(Be) : R.popper, We = p.useMemo(() => {
    var De;
    let fe = [{
      name: "arrow",
      enabled: !!M,
      options: {
        element: M,
        padding: 4
      }
    }];
    return (De = ve == null ? void 0 : ve.popperOptions) != null && De.modifiers && (fe = fe.concat(ve.popperOptions.modifiers)), {
      ...ve == null ? void 0 : ve.popperOptions,
      modifiers: fe
    };
  }, [M, ve == null ? void 0 : ve.popperOptions]), yt = wI(Be), oe = {
    slots: T,
    slotProps: {
      arrow: R.arrow,
      popper: ve,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [ye, Ae] = xe("popper", {
    elementType: CI,
    externalForwardedProps: oe,
    ownerState: Be,
    className: yt.popper
  }), [at, we] = xe("transition", {
    elementType: il,
    externalForwardedProps: oe,
    ownerState: Be
  }), [Hn, pn] = xe("tooltip", {
    elementType: kI,
    className: yt.tooltip,
    externalForwardedProps: oe,
    ownerState: Be
  }), [Lr, vr] = xe("arrow", {
    elementType: EI,
    className: yt.arrow,
    externalForwardedProps: oe,
    ownerState: Be,
    ref: A
  });
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement(I, _e), /* @__PURE__ */ u.jsx(ye, {
      as: jx,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: us.y,
          left: us.x,
          right: us.x,
          bottom: us.y,
          width: 0,
          height: 0
        })
      } : j,
      popperRef: Pe,
      open: j ? J : !1,
      id: G,
      transition: !0,
      ...Ge,
      ...Ae,
      popperOptions: We,
      children: ({
        TransitionProps: fe
      }) => /* @__PURE__ */ u.jsx(at, {
        timeout: y.transitions.duration.shorter,
        ...fe,
        ...we,
        children: /* @__PURE__ */ u.jsxs(Hn, {
          ...pn,
          children: [O, o ? /* @__PURE__ */ u.jsx(Lr, {
            ...vr
          }) : null]
        })
      })
    })]
  });
}), Qe = Lk({
  createStyledComponent: K("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => he({
    props: e,
    name: "MuiStack"
  })
});
function TI(e) {
  return pe("MuiTab", e);
}
const Qn = de("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), RI = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ae(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return me(c, TI, t);
}, PI = K(Uo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ae(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Qn.icon}`]: t.icon
    }];
  }
})(ke(({
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
      [`& > .${Qn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Qn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Qn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Qn.icon}`]: {
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
      [`&.${Qn.selected}`]: {
        opacity: 1
      },
      [`&.${Qn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Qn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Qn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Qn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Qn.disabled}`]: {
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
}))), Zl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    label: m,
    onChange: v,
    onClick: f,
    onFocus: x,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: g = "inherit",
    value: h,
    wrapped: S = !1,
    ...w
  } = r, E = _x(), k = Ux({
    id: h,
    ref: n,
    disabled: i,
    selected: b
  }), T = E.getItemMap().size === 0 && b ? 0 : k.tabIndex, O = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: c,
    label: !!m,
    fullWidth: l,
    textColor: g,
    wrapped: S
  }, N = RI(O), I = a && m && /* @__PURE__ */ p.isValidElement(a) ? /* @__PURE__ */ p.cloneElement(a, {
    className: re(N.icon, a.props.className)
  }) : a, y = (P) => {
    !b && v && v(P, h), f && f(P);
  }, j = (P) => {
    C && !b && v && v(P, h), x && x(P);
  };
  return /* @__PURE__ */ u.jsxs(PI, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: re(N.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: y,
    onFocus: j,
    tabIndex: T,
    ownerState: O,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [I, m]
    }) : /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [m, I]
    }), d]
  });
}), o1 = /* @__PURE__ */ p.createContext();
function MI(e) {
  return pe("MuiTable", e);
}
de("MuiTable", ["root", "stickyHeader"]);
const II = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return me({
    root: ["root", n && "stickyHeader"]
  }, MI, t);
}, $I = K("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(ke(({
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
}))), _g = "table", Wg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = _g,
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
  }, m = II(d), v = p.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ u.jsx(o1.Provider, {
    value: v,
    children: /* @__PURE__ */ u.jsx($I, {
      as: i,
      role: i === _g ? null : "table",
      ref: n,
      className: re(m.root, o),
      ownerState: d,
      ...c
    })
  });
}), du = /* @__PURE__ */ p.createContext();
function jI(e) {
  return pe("MuiTableBody", e);
}
de("MuiTableBody", ["root"]);
const OI = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, jI, t);
}, AI = K("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), NI = {
  variant: "body"
}, Ug = "tbody", Hg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Ug,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = OI(l);
  return /* @__PURE__ */ u.jsx(du.Provider, {
    value: NI,
    children: /* @__PURE__ */ u.jsx(AI, {
      className: re(a.root, o),
      as: i,
      ref: n,
      role: i === Ug ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function LI(e) {
  return pe("MuiTableCell", e);
}
const zI = de("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), BI = (e) => {
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
  return me(l, LI, t);
}, DI = K("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ae(n.size)}`], n.padding !== "normal" && t[`padding${ae(n.padding)}`], n.align !== "inherit" && t[`align${ae(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(ke(({
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
      [`&.${zI.paddingCheckbox}`]: {
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
}))), Wt = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    variant: m,
    ...v
  } = r, f = p.useContext(o1), x = p.useContext(du), b = x && x.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let g = a;
  C === "td" ? g = void 0 : !g && b && (g = "col");
  const h = m || x && x.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (f && f.padding ? f.padding : "normal"),
    size: c || (f && f.size ? f.size : "medium"),
    sortDirection: d,
    stickyHeader: h === "head" && f && f.stickyHeader,
    variant: h
  }, w = BI(S);
  let E = null;
  return d && (E = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ u.jsx(DI, {
    as: C,
    ref: n,
    className: re(w.root, i),
    "aria-sort": E,
    scope: g,
    ownerState: S,
    ...v
  });
});
function FI(e) {
  return pe("MuiTableContainer", e);
}
de("MuiTableContainer", ["root"]);
const _I = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, FI, t);
}, WI = K("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), Vg = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = _I(l);
  return /* @__PURE__ */ u.jsx(WI, {
    ref: n,
    as: i,
    className: re(a.root, o),
    ownerState: l,
    ...s
  });
});
function UI(e) {
  return pe("MuiTableHead", e);
}
de("MuiTableHead", ["root"]);
const HI = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, UI, t);
}, VI = K("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), KI = {
  variant: "head"
}, Kg = "thead", Yg = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = HI(l);
  return /* @__PURE__ */ u.jsx(du.Provider, {
    value: KI,
    children: /* @__PURE__ */ u.jsx(VI, {
      as: i,
      className: re(a.root, o),
      ref: n,
      role: i === Kg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), YI = it(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), GI = it(/* @__PURE__ */ u.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function QI(e) {
  return pe("MuiTableRow", e);
}
const Gg = de("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), XI = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return me({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, QI, t);
}, qI = K("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(ke(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Gg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Gg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Qg = "tr", ri = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Qg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = p.useContext(du), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, m = XI(d);
  return /* @__PURE__ */ u.jsx(qI, {
    as: i,
    ref: n,
    className: re(m.root, o),
    role: i === Qg ? null : "row",
    ownerState: d,
    ...a
  });
});
function ZI(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function JI(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = ZI,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const d = () => {
    c = !0;
  }, m = (v) => {
    if (c) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = v);
    const f = Math.min(1, (v - l) / s);
    if (t[e] = i(f) * (n - a) + a, f >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(m);
  };
  return a === n ? (o(new Error("Element already at target position")), d) : (requestAnimationFrame(m), d);
}
const e$ = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function t$(e) {
  const {
    onChange: t,
    ...n
  } = e, r = p.useRef(), o = p.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ft(() => {
    const s = ru(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = nr(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), p.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ u.jsx("div", {
    style: e$,
    ...n,
    ref: o
  });
}
function n$(e) {
  return pe("MuiTabScrollButton", e);
}
const r$ = de("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), o$ = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return me({
    root: ["root", n, r && "disabled"]
  }, n$, t);
}, i$ = K(Uo, {
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
  [`&.${r$.disabled}`]: {
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
}), s$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    nativeButton: m,
    ...v
  } = d, f = tu(), x = {
    isRtl: f,
    ...r
  }, b = o$(x), C = i.StartScrollButtonIcon ?? YI, g = i.EndScrollButtonIcon ?? GI, h = Fi({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  }), S = Fi({
    elementType: g,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: x
  });
  return /* @__PURE__ */ u.jsx(i$, {
    component: "div",
    className: re(b.root, o),
    ref: n,
    role: null,
    ownerState: x,
    tabIndex: null,
    ...v,
    style: {
      ...v.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ u.jsx(C, {
      ...h
    }) : /* @__PURE__ */ u.jsx(g, {
      ...S
    })
  });
});
function l$(e) {
  return pe("MuiTabs", e);
}
const Zu = de("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), a$ = (e) => {
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
  }, l$, a);
}, c$ = K("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Zu.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Zu.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(ke(({
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
      [`& .${Zu.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), u$ = K("div", {
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
}), d$ = K("div", {
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
}), f$ = K("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(ke(({
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
}))), p$ = K(t$)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Xg = {}, m$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = he({
    props: t,
    name: "MuiTabs"
  }), o = ho(), i = tu(), s = au(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: d = !1,
    children: m,
    className: v,
    component: f = "div",
    allowScrollButtonsMobile: x = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: g = "horizontal",
    scrollButtons: h = "auto",
    selectionFollowsFocus: S,
    slots: w = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: R,
    variant: T = "standard",
    visibleScrollbar: O = !1,
    ...N
  } = r, I = T === "scrollable", y = g === "vertical", j = y ? "scrollTop" : "scrollLeft", P = y ? "top" : "left", M = y ? "bottom" : "right", A = y ? "clientHeight" : "clientWidth", L = y ? "height" : "width", $ = {
    ...r,
    component: f,
    allowScrollButtonsMobile: x,
    indicatorColor: b,
    orientation: g,
    vertical: y,
    scrollButtons: h,
    textColor: k,
    variant: T,
    visibleScrollbar: O,
    fixed: !I,
    hideScrollbar: I && !O,
    scrollableX: I && !y,
    scrollableY: I && y,
    centered: d && !I,
    scrollButtonsHideMobile: !x
  }, B = a$($), F = Fi({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: $
  }), U = Fi({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: $
  }), [_, X] = p.useState(!1), [V, J] = p.useState(Xg), [G, Q] = p.useState(!1), [W, ne] = p.useState(!1), [se, Ee] = p.useState(!1), Te = R === !1 ? null : R, [ge, ce] = p.useState(!1), [Ne, je] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Se = /* @__PURE__ */ new Map(), Oe = p.useRef(null), ue = p.useRef(null), Pe = {
    slots: w,
    slotProps: E
  }, et = () => {
    const q = Oe.current;
    let Z;
    if (q) {
      const be = q.getBoundingClientRect();
      Z = {
        clientWidth: q.clientWidth,
        scrollLeft: q.scrollLeft,
        scrollTop: q.scrollTop,
        scrollWidth: q.scrollWidth,
        top: be.top,
        bottom: be.bottom,
        left: be.left,
        right: be.right
      };
    }
    let ie;
    if (q && R !== !1) {
      const be = ue.current.children;
      if (be.length > 0) {
        const qe = be[Se.get(R)];
        ie = qe ? qe.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: ie
    };
  }, Ie = Je(() => {
    const {
      tabsMeta: q,
      tabMeta: Z
    } = et();
    let ie = 0, be;
    y ? (be = "top", Z && q && (ie = Z.top - q.top + q.scrollTop)) : (be = i ? "right" : "left", Z && q && (ie = (i ? -1 : 1) * (Z[be] - q[be] + q.scrollLeft)));
    const qe = {
      [be]: ie,
      // May be wrong until the font is loaded.
      [L]: Z ? Z[L] : 0
    };
    if (typeof V[be] != "number" || typeof V[L] != "number")
      J(qe);
    else {
      const rn = Math.abs(V[be] - qe[be]), Mt = Math.abs(V[L] - qe[L]);
      (rn >= 1 || Mt >= 1) && J(qe);
    }
  }), Me = (q, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? JI(j, Oe.current, q, {
      duration: o.transitions.duration.standard
    }) : Oe.current[j] = q;
  }, _e = (q) => {
    let Z = Oe.current[j];
    y ? Z += q : Z += q * (i ? -1 : 1), Me(Z);
  }, Ge = () => {
    const q = Oe.current[A];
    let Z = 0;
    const ie = Array.from(ue.current.children);
    for (let be = 0; be < ie.length; be += 1) {
      const qe = ie[be];
      if (Z + qe[A] > q) {
        be === 0 && (Z = q);
        break;
      }
      Z += qe[A];
    }
    return Z;
  }, Be = () => {
    _e(-1 * Ge());
  }, ve = () => {
    _e(Ge());
  }, [We, {
    onChange: yt,
    ...oe
  }] = xe("scrollbar", {
    className: re(B.scrollableX, B.hideScrollbar),
    elementType: p$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Pe,
    ownerState: $
  }), ye = p.useCallback((q) => {
    yt == null || yt(q), je({
      overflow: null,
      scrollbarWidth: q
    });
  }, [yt]), [Ae, at] = xe("scrollButtons", {
    className: B.scrollButtons,
    elementType: s$,
    externalForwardedProps: Pe,
    ownerState: $,
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
  }), we = () => {
    const q = {};
    q.scrollbarSizeListener = I ? /* @__PURE__ */ u.jsx(We, {
      ...oe,
      onChange: ye
    }) : null;
    const ie = I && (h === "auto" && (G || W) || h === !0);
    return q.scrollButtonStart = ie ? /* @__PURE__ */ u.jsx(Ae, {
      direction: i ? "right" : "left",
      onClick: Be,
      disabled: !G,
      ...at
    }) : null, q.scrollButtonEnd = ie ? /* @__PURE__ */ u.jsx(Ae, {
      direction: i ? "left" : "right",
      onClick: ve,
      disabled: !W,
      ...at
    }) : null, q;
  }, Hn = Je((q) => {
    const {
      tabsMeta: Z,
      tabMeta: ie
    } = et();
    if (!(!ie || !Z)) {
      if (ie[P] < Z[P]) {
        const be = Z[j] + (ie[P] - Z[P]);
        Me(be, {
          animation: q
        });
      } else if (ie[M] > Z[M]) {
        const be = Z[j] + (ie[M] - Z[M]);
        Me(be, {
          animation: q
        });
      }
    }
  }), pn = Je(() => {
    I && h !== !1 && Ee(!se);
  });
  p.useEffect(() => {
    const q = ru(() => {
      Oe.current && Ie();
    });
    let Z;
    const ie = (rn) => {
      rn.forEach((Mt) => {
        Mt.removedNodes.forEach((Rn) => {
          Z == null || Z.unobserve(Rn);
        }), Mt.addedNodes.forEach((Rn) => {
          Z == null || Z.observe(Rn);
        });
      }), q(), pn();
    }, be = nr(Oe.current);
    be.addEventListener("resize", q);
    let qe;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(q), Array.from(ue.current.children).forEach((rn) => {
      Z.observe(rn);
    })), typeof MutationObserver < "u" && (qe = new MutationObserver(ie), qe.observe(ue.current, {
      childList: !0
    })), () => {
      q.clear(), be.removeEventListener("resize", q), qe == null || qe.disconnect(), Z == null || Z.disconnect();
    };
  }, [Ie, pn]), p.useEffect(() => {
    const q = Array.from(ue.current.children), Z = q.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && I && h !== !1) {
      const ie = q[0], be = q[Z - 1], qe = {
        root: Oe.current,
        threshold: 0.99
      }, rn = (Br) => {
        Q(!Br[0].isIntersecting);
      }, Mt = new IntersectionObserver(rn, qe);
      Mt.observe(ie);
      const Rn = (Br) => {
        ne(!Br[0].isIntersecting);
      }, Kn = new IntersectionObserver(Rn, qe);
      return Kn.observe(be), () => {
        Mt.disconnect(), Kn.disconnect();
      };
    }
  }, [I, h, se, m == null ? void 0 : m.length]), p.useEffect(() => {
    X(!0);
  }, []), p.useEffect(() => {
    Ie();
  }), p.useEffect(() => {
    Hn(Xg !== V);
  }, [Hn, V]), p.useImperativeHandle(c, () => ({
    updateIndicator: Ie,
    updateScrollButtons: pn
  }), [Ie, pn]);
  const [Lr, vr] = xe("indicator", {
    className: B.indicator,
    elementType: f$,
    externalForwardedProps: Pe,
    ownerState: $,
    additionalProps: {
      style: V
    }
  }), fe = /* @__PURE__ */ u.jsx(Lr, {
    ...vr
  }), De = Wx({
    activeItemId: ge ? void 0 : Te,
    orientation: g,
    isRtl: i
  }), Yt = De.getContainerProps(), Ki = p.Children.toArray(m).filter(p.isValidElement).map((q, Z) => {
    const ie = q.props.value === void 0 ? Z : q.props.value;
    return Se.set(ie, Z), {
      child: q,
      index: Z,
      childValue: ie
    };
  }).map(({
    child: q,
    childValue: Z
  }) => {
    const ie = Z === R;
    return /* @__PURE__ */ p.cloneElement(q, {
      fullWidth: T === "fullWidth",
      indicator: ie && !_ && fe,
      selected: ie,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), yo = we(), [Vn, Go] = xe("root", {
    ref: n,
    className: re(B.root, v),
    elementType: c$,
    externalForwardedProps: {
      ...Pe,
      ...N,
      component: f
    },
    ownerState: $
  }), [Pt, zr] = xe("scroller", {
    ref: Oe,
    className: B.scroller,
    elementType: u$,
    externalForwardedProps: Pe,
    ownerState: $,
    additionalProps: {
      style: {
        overflow: Ne.overflow,
        [y ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: O ? void 0 : -Ne.scrollbarWidth
      }
    }
  }), tt = mt(Yt.ref, ue), vo = (q) => {
    const Z = ue.current, ie = ur(gt(Z));
    (ie == null ? void 0 : ie.getAttribute("role")) === "tab" && Yt.onKeyDown(q);
  }, [ct, xo] = xe("list", {
    ref: tt,
    className: B.list,
    elementType: d$,
    externalForwardedProps: Pe,
    ownerState: $,
    getSlotProps: (q) => ({
      ...q,
      onBlur: (Z) => {
        var ie;
        Ao(Z.currentTarget, Z.relatedTarget) || ce(!1), (ie = q.onBlur) == null || ie.call(q, Z);
      },
      onKeyDown: (Z) => {
        var ie;
        vo(Z), (ie = q.onKeyDown) == null || ie.call(q, Z);
      },
      onFocus: (Z) => {
        var ie;
        ce(!0), Yt.onFocus(Z), (ie = q.onFocus) == null || ie.call(q, Z);
      }
    })
  });
  return /* @__PURE__ */ u.jsxs(Vn, {
    ...Go,
    children: [yo.scrollButtonStart, yo.scrollbarSizeListener, /* @__PURE__ */ u.jsxs(Pt, {
      ...zr,
      children: [/* @__PURE__ */ u.jsx(ct, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        role: "tablist",
        ...xo,
        children: /* @__PURE__ */ u.jsx(Zp.Provider, {
          value: De,
          children: Ki
        })
      }), _ && fe]
    }), yo.scrollButtonEnd]
  });
});
function h$(e) {
  return pe("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const g$ = {
  standard: qp,
  filled: Xp,
  outlined: Jp
}, y$ = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, h$, t);
}, v$ = K(gf, {
  name: "MuiTextField",
  slot: "Root"
})({}), mn = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    error: m = !1,
    fullWidth: v = !1,
    helperText: f,
    id: x,
    inputRef: b,
    label: C,
    maxRows: g,
    minRows: h,
    multiline: S = !1,
    name: w,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    required: O = !1,
    rows: N,
    select: I = !1,
    slots: y = {},
    slotProps: j = {},
    type: P,
    value: M,
    variant: A = "outlined",
    ...L
  } = r, $ = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: m,
    fullWidth: v,
    multiline: S,
    required: O,
    select: I,
    variant: A
  }, B = y$($), F = Or(x), U = f && F ? `${F}-helper-text` : void 0, _ = C && F ? `${F}-label` : void 0, X = g$[A], V = {
    slots: y,
    slotProps: j
  }, [J, G] = xe("select", {
    elementType: Ja,
    externalForwardedProps: V,
    ownerState: $
  }), Q = I && G.native, W = {}, ne = V.slotProps.inputLabel;
  A === "outlined" && (ne && typeof ne.shrink < "u" && (W.notched = ne.shrink), W.label = C), I && (Q || (W.id = void 0), W["aria-describedby"] = void 0);
  const [se, Ee] = xe("root", {
    elementType: v$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...V,
      ...L
    },
    ownerState: $,
    className: re(B.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: m,
      fullWidth: v,
      required: O,
      color: a,
      variant: A
    }
  }), [Te, ge] = xe("input", {
    elementType: X,
    externalForwardedProps: V,
    additionalProps: W,
    ownerState: $
  }), [ce, Ne] = xe("inputLabel", {
    elementType: JP,
    externalForwardedProps: V,
    ownerState: $
  }), [je, Se] = xe("htmlInput", {
    elementType: "input",
    externalForwardedProps: V,
    ownerState: $
  }), [Oe, ue] = xe("formHelperText", {
    elementType: NP,
    externalForwardedProps: V,
    ownerState: $
  }), Pe = /* @__PURE__ */ u.jsx(Te, {
    "aria-describedby": U,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: S,
    name: w,
    rows: N,
    maxRows: g,
    minRows: h,
    type: P,
    value: M,
    id: F,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: R,
    placeholder: T,
    inputProps: Se,
    slots: {
      input: y.htmlInput ? je : void 0
    },
    ...ge
  });
  return /* @__PURE__ */ u.jsxs(se, {
    ...Ee,
    children: [C != null && C !== "" && /* @__PURE__ */ u.jsx(ce, {
      htmlFor: I && !Q ? void 0 : F,
      id: _,
      ...I && !Q && {
        component: "div"
      },
      ...Ne,
      children: C
    }), I ? /* @__PURE__ */ u.jsx(J, {
      "aria-describedby": U,
      id: F,
      labelId: _,
      value: M,
      input: Pe,
      ...G,
      children: s
    }) : Pe, f && /* @__PURE__ */ u.jsx(Oe, {
      id: U,
      ...ue,
      children: f
    })]
  });
}), Ju = it(/* @__PURE__ */ u.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), qg = it(/* @__PURE__ */ u.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
})), ed = it(/* @__PURE__ */ u.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), x$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), Zg = it(/* @__PURE__ */ u.jsx("path", {
  d: "M8 5v14l11-7z"
})), Jg = it(/* @__PURE__ */ u.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), ey = it(/* @__PURE__ */ u.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), S$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), b$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M6 6h12v12H6z"
})), w$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), C$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"
})), k$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
})), E$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), T$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"
})), R$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), P$ = it(/* @__PURE__ */ u.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), At = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', oi = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function td({ children: e, sx: t }) {
  return /* @__PURE__ */ u.jsx(
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
function br(e, t) {
  switch (t == null ? void 0 : t.kind) {
    case "log": {
      const n = t.line ?? "";
      return n.trim().startsWith('{"ok":') || n.trim().startsWith('{"error":') ? e : [...e, { stream: t.stream ?? "stdout", text: n }];
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
function M$({ lines: e, running: t }) {
  const n = p.useRef(null), r = p.useRef(null), o = p.useRef(!0);
  return p.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), p.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ u.jsxs(
    An,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: oi.bg,
        color: oi.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: At,
        fontSize: 12,
        lineHeight: 1.55,
        // Preserve the script's own spacing: bash output is aligned with spaces,
        // and collapsing them turns readable output into a wall of text.
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ u.jsx(
          Xt,
          {
            sx: {
              color: i.stream === "stderr" ? oi.err : i.stream === "meta" ? oi.dim : oi.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ u.jsx(Xt, { sx: { color: oi.dim }, children: "▍running…" }),
        /* @__PURE__ */ u.jsx("div", { ref: n })
      ]
    }
  );
}
function I$({ ctx: e }) {
  const t = p.useMemo(() => nu(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ u.jsx(_2, { theme: t, children: /* @__PURE__ */ u.jsx($$, { ctx: e }) });
}
function $$({ ctx: e }) {
  var rm;
  const [t, n] = p.useState("databases"), [r, o] = p.useState(null), [i, s] = p.useState(!1), [l, a] = p.useState(!1), [c, d] = p.useState([]), [m, v] = p.useState([]), [f, x] = p.useState(""), [b, C] = p.useState(""), [g, h] = p.useState(""), [S, w] = p.useState([]), [E, k] = p.useState(""), [R, T] = p.useState(!1), [O, N] = p.useState("{}"), [I, y] = p.useState(50), [j, P] = p.useState(!1), [M, A] = p.useState(null), [L, $] = p.useState(!1), [B, F] = p.useState(""), [U, _] = p.useState(!1), [X, V] = p.useState(""), [J, G] = p.useState(!1), [Q, W] = p.useState(""), [ne, se] = p.useState(""), [Ee, Te] = p.useState("admin"), [ge, ce] = p.useState("readWrite"), [Ne, je] = p.useState(!1), [Se, Oe] = p.useState(null), [ue, Pe] = p.useState(""), [et, Ie] = p.useState(!1), [Me, _e] = p.useState(null), [Ge, Be] = p.useState(""), [ve, We] = p.useState("readWrite"), [yt, oe] = p.useState(!1), [ye, Ae] = p.useState(""), [at, we] = p.useState(""), [Hn, pn] = p.useState(!1), [Lr, vr] = p.useState(!1), [fe, De] = p.useState(!1), [Yt, xl] = p.useState(""), [Ki] = p.useState(50), [yo, Vn] = p.useState(!1), [Go, Pt] = p.useState(!1), [zr, tt] = p.useState([]), [vo, ct] = p.useState(!1), [xo, q] = p.useState(""), [Z, ie] = p.useState(null), be = p.useCallback(async () => {
    try {
      s(!0);
      const z = await e.api("/engine/status");
      if (z.ok) {
        const ee = await z.json();
        o(ee);
      }
    } catch {
    } finally {
      s(!1);
    }
  }, [e]), qe = p.useCallback(async () => {
    try {
      const z = await e.api("/databases");
      if (z.ok) {
        const Gt = (await z.json()).databases || [];
        d(Gt), Gt.length > 0 && !g && h(Gt[0].name);
      }
    } catch {
    }
  }, [e, g]), rn = p.useCallback(async () => {
    try {
      const z = await e.api("/users");
      if (z.ok) {
        const ee = await z.json();
        v(ee.users || []);
      }
    } catch {
    }
  }, [e]), Mt = p.useCallback(async (z) => {
    if (z)
      try {
        T(!0);
        const ee = await e.api(`/databases/${encodeURIComponent(z)}/collections`);
        if (ee.ok) {
          const Qi = (await ee.json()).collections || [];
          w(Qi), Qi.length > 0 ? k(Qi[0].name) : k("");
        }
      } catch {
        w([]), k("");
      } finally {
        T(!1);
      }
  }, [e]);
  p.useEffect(() => {
    g && Mt(g);
  }, [g, Mt]);
  const Rn = p.useCallback(() => {
    be(), qe(), rn(), g && Mt(g);
  }, [be, qe, rn, Mt, g]);
  p.useEffect(() => {
    Rn();
  }, [Rn]);
  const Kn = async (z, ee) => {
    const Gt = z || E, Qi = ee || O;
    if (!g || !Gt) {
      ie("Please select a database and collection.");
      return;
    }
    P(!0);
    try {
      const fu = await (await e.api(`/databases/${encodeURIComponent(g)}/collections/${encodeURIComponent(Gt)}/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filter: Qi.trim() || "{}", limit: I })
      })).json();
      A(fu), fu.ok || ie(`Query Error: ${fu.error || "Execution failed"}`);
    } catch (Fr) {
      A({ ok: !1, error: (Fr == null ? void 0 : Fr.message) || String(Fr) }), ie(`Network error: ${Fr == null ? void 0 : Fr.message}`);
    } finally {
      P(!1);
    }
  }, Br = () => {
    if (!M || !M.documents) return;
    const z = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(M.documents, null, 2)), ee = document.createElement("a");
    ee.setAttribute("href", z), ee.setAttribute("download", `${g}_${E}_documents.json`), document.body.appendChild(ee), ee.click(), document.body.removeChild(ee);
  }, Qo = async (z) => {
    a(!0), q(`MongoDB: ${z.toUpperCase()}`), tt([]), ct(!0), Pt(!0);
    try {
      for await (const ee of e.run(`/engine/${z}`, { method: "POST" }))
        tt((Gt) => br(Gt, ee));
    } catch (ee) {
      ie(`Error: ${(ee == null ? void 0 : ee.message) || ee}`);
    } finally {
      ct(!1), a(!1), Rn();
    }
  }, Sl = async () => {
    if (B) {
      $(!1), q(`MongoDB: Create Database '${B}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const z of e.run("/databases", {
          method: "POST",
          body: { name: B }
        }))
          tt((ee) => br(ee, z));
        F("");
      } catch (z) {
        ie(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        ct(!1), qe();
      }
    }
  }, Y = async (z) => {
    if (confirm(`Are you sure you want to permanently drop database '${z}'?`)) {
      q(`MongoDB: Drop Database '${z}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const ee of e.run(`/databases/${z}`, { method: "DELETE" }))
          tt((Gt) => br(Gt, ee));
      } catch (ee) {
        ie(`Error: ${(ee == null ? void 0 : ee.message) || ee}`);
      } finally {
        ct(!1), qe();
      }
    }
  }, le = async () => {
    if (!(!g || !X)) {
      _(!1), q(`MongoDB: Create Collection '${X}' on '${g}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const z of e.run(`/databases/${encodeURIComponent(g)}/collections`, {
          method: "POST",
          body: { collection: X }
        }))
          tt((ee) => br(ee, z));
        V("");
      } catch (z) {
        ie(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        ct(!1), Mt(g);
      }
    }
  }, Ce = async (z) => {
    if (!(!g || !z) && confirm(`Are you sure you want to drop collection '${z}' on database '${g}'?`)) {
      q(`MongoDB: Drop Collection '${z}' on '${g}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const ee of e.run(`/databases/${encodeURIComponent(g)}/collections/${encodeURIComponent(z)}`, {
          method: "DELETE"
        }))
          tt((Gt) => br(Gt, ee));
      } catch (ee) {
        ie(`Error: ${(ee == null ? void 0 : ee.message) || ee}`);
      } finally {
        ct(!1), Mt(g);
      }
    }
  }, nt = async () => {
    if (!(!Q || !ne)) {
      G(!1), q(`MongoDB: Create User '${Q}' on db '${Ee}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const z of e.run("/users", {
          method: "POST",
          body: { username: Q, password: ne, database: Ee, roles: ge }
        }))
          tt((ee) => br(ee, z));
        W(""), se("");
      } catch (z) {
        ie(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        ct(!1), rn();
      }
    }
  }, Ot = async (z) => {
    if (confirm(`Drop user '${z.username}' from db '${z.database}'?`)) {
      q(`MongoDB: Drop User '${z.username}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const ee of e.run(`/users/${z.username}?database=${encodeURIComponent(z.database)}`, {
          method: "DELETE"
        }))
          tt((Gt) => br(Gt, ee));
      } catch (ee) {
        ie(`Error: ${(ee == null ? void 0 : ee.message) || ee}`);
      } finally {
        ct(!1), rn();
      }
    }
  }, Xo = async () => {
    if (!(!Se || !ue)) {
      je(!1), q(`MongoDB: Reset Password for '${Se.username}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const z of e.run(`/users/${Se.username}/password`, {
          method: "POST",
          body: { password: ue, database: Se.database }
        }))
          tt((ee) => br(ee, z));
        Pe("");
      } catch (z) {
        ie(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        ct(!1);
      }
    }
  }, Dr = async () => {
    if (!(!Me || !Ge)) {
      Ie(!1), q(`MongoDB: Set Role on '${Ge}' for '${Me.username}'`), tt([]), ct(!0), Pt(!0);
      try {
        for await (const z of e.run("/grants", {
          method: "POST",
          body: { username: Me.username, database: Ge, roles: ve }
        }))
          tt((ee) => br(ee, z));
      } catch (z) {
        ie(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        ct(!1);
      }
    }
  }, Yi = async () => {
    oe(!0), pn(!0);
    try {
      const z = await e.api("/engine/config");
      if (z.ok) {
        const ee = await z.json();
        we(ee.path || "/opt/hostpanel/etc/mongodb/mongod.conf"), Ae(ee.content || "");
      }
    } catch {
    } finally {
      pn(!1);
    }
  }, bl = async () => {
    vr(!0);
    try {
      const z = await e.api("/engine/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: ye })
      });
      if (z.ok)
        ie("Configuration saved successfully."), oe(!1);
      else {
        const ee = await z.json();
        ie(`Error saving config: ${(ee == null ? void 0 : ee.error) || "Unknown error"}`);
      }
    } catch (z) {
      ie(`Failed to save config: ${z.message}`);
    } finally {
      vr(!1);
    }
  }, Gi = async () => {
    De(!0), Vn(!0);
    try {
      const z = await e.api(`/engine/logs?lines=${Ki}`);
      if (z.ok) {
        const ee = await z.json();
        xl(ee.content || "No logs available.");
      }
    } catch {
    } finally {
      Vn(!1);
    }
  }, tm = p.useMemo(() => f ? c.filter((z) => z.name.toLowerCase().includes(f.toLowerCase())) : c, [c, f]), nm = p.useMemo(() => b ? m.filter((z) => z.username.toLowerCase().includes(b.toLowerCase())) : m, [m, b]), wl = (r == null ? void 0 : r.active) === !0 || (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ u.jsxs(Xt, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ u.jsxs(
      Qe,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 1.5,
        sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
        children: [
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ u.jsx(
              Qu,
              {
                size: "small",
                label: wl ? "RUNNING" : "STOPPED",
                color: wl ? "success" : "error",
                sx: { fontWeight: 700, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ u.jsxs(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: [
              (r == null ? void 0 : r.version) || "MongoDB 8.0",
              " • Port 27017 • Socket: /opt/hostpanel/run/mongodb/mongodb-27017.sock"
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ u.jsx(Pn, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                size: "small",
                onClick: Rn,
                disabled: i || l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: i ? /* @__PURE__ */ u.jsx(To, { size: 16, color: "inherit" }) : /* @__PURE__ */ u.jsx(Jg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(Pn, { title: "MongoDB Configuration", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                size: "small",
                onClick: Yi,
                disabled: l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ u.jsx(w$, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(Pn, { title: "Engine Logs", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                size: "small",
                onClick: Gi,
                disabled: l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ u.jsx(C$, { sx: { fontSize: 18 } })
              }
            ) }) }),
            wl ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(Pn, { title: "Restart MongoDB", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
                Ht,
                {
                  size: "small",
                  color: "warning",
                  onClick: () => Qo("restart"),
                  disabled: l,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ u.jsx(S$, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ u.jsx(Pn, { title: "Stop MongoDB", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
                Ht,
                {
                  size: "small",
                  color: "error",
                  onClick: () => Qo("stop"),
                  disabled: l,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ u.jsx(b$, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ u.jsx(Pn, { title: "Start MongoDB Engine", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                size: "small",
                color: "success",
                onClick: () => Qo("start"),
                disabled: l,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (z) => nl(z.palette.success.main, 0.1) },
                children: /* @__PURE__ */ u.jsx(Zg, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(
              Ct,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Ju, {}),
                onClick: () => $(!0),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "New Database"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Ct,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(qg, {}),
                onClick: () => G(!0),
                sx: { whiteSpace: "nowrap" },
                children: "New User"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(Qe, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
      /* @__PURE__ */ u.jsx(Xu, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsxs(qu, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(td, { children: "DAEMON STATUS" }),
        /* @__PURE__ */ u.jsx(Ve, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: wl ? "Online" : "Offline" }),
        /* @__PURE__ */ u.jsxs(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: [
          "PID: ",
          (r == null ? void 0 : r.pid) || 0,
          " • Uptime: ",
          (r == null ? void 0 : r.uptime) || "0s"
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx(Xu, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsxs(qu, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(td, { children: "ENGINE VERSION" }),
        /* @__PURE__ */ u.jsx(Ve, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: (r == null ? void 0 : r.version) || "MongoDB 8.0" }),
        /* @__PURE__ */ u.jsx(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: "Port: 27017 • Socket: /opt/hostpanel/run/mongodb/mongodb-27017.sock" })
      ] }) }),
      /* @__PURE__ */ u.jsx(Xu, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsxs(qu, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(td, { children: "DATABASES & COLLECTIONS" }),
        /* @__PURE__ */ u.jsxs(Ve, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          c.length,
          " DBs / ",
          m.length,
          " Users"
        ] }),
        /* @__PURE__ */ u.jsxs(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: [
          "Active Connections: ",
          (r == null ? void 0 : r.connections) ?? 0
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsxs(An, { children: [
      /* @__PURE__ */ u.jsxs(m$, { value: t, onChange: (z, ee) => n(ee), sx: { borderBottom: 1, borderColor: "divider", px: 2 }, children: [
        /* @__PURE__ */ u.jsx(Zl, { value: "databases", label: `Databases (${c.length})` }),
        /* @__PURE__ */ u.jsx(Zl, { value: "users", label: `Users & Roles (${m.length})` }),
        /* @__PURE__ */ u.jsx(Zl, { value: "query", label: "⚡ Collections & Documents" }),
        /* @__PURE__ */ u.jsx(Zl, { value: "service", label: "Service & Configuration" })
      ] }),
      t === "databases" && /* @__PURE__ */ u.jsxs(Xt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ u.jsx(
            mn,
            {
              size: "small",
              placeholder: "Search databases...",
              value: f,
              onChange: (z) => x(z.target.value),
              slotProps: {
                input: {
                  startAdornment: /* @__PURE__ */ u.jsx(Rg, { position: "start", children: /* @__PURE__ */ u.jsx(ey, { fontSize: "small" }) })
                }
              },
              sx: { width: { xs: "100%", sm: 280 } }
            }
          ),
          /* @__PURE__ */ u.jsx(Ct, { variant: "contained", size: "small", startIcon: /* @__PURE__ */ u.jsx(Ju, {}), onClick: () => $(!0), children: "New Database" })
        ] }),
        /* @__PURE__ */ u.jsx(Vg, { children: /* @__PURE__ */ u.jsxs(Wg, { size: "small", children: [
          /* @__PURE__ */ u.jsx(Yg, { children: /* @__PURE__ */ u.jsxs(ri, { children: [
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontWeight: 600 }, children: "Database Name" }),
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontWeight: 600 }, children: "Size" }),
            /* @__PURE__ */ u.jsx(Wt, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Hg, { children: tm.length === 0 ? /* @__PURE__ */ u.jsx(ri, { children: /* @__PURE__ */ u.jsx(Wt, { colSpan: 3, align: "center", sx: { py: 3, color: "text.secondary" }, children: "No MongoDB databases found." }) }) : tm.map((z) => /* @__PURE__ */ u.jsxs(ri, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontFamily: At, fontWeight: 600 }, children: z.name }),
            /* @__PURE__ */ u.jsx(Wt, { sx: { color: "text.secondary" }, children: z.size_human || "0 B" }),
            /* @__PURE__ */ u.jsxs(Wt, { align: "right", children: [
              /* @__PURE__ */ u.jsx(Pn, { title: "Query / Explore Documents", children: /* @__PURE__ */ u.jsx(
                Ht,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => {
                    h(z.name), n("query");
                  },
                  children: /* @__PURE__ */ u.jsx(E$, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(Pn, { title: "Drop Database", children: /* @__PURE__ */ u.jsx(Ht, { size: "small", color: "error", onClick: () => Y(z.name), children: /* @__PURE__ */ u.jsx(ed, { fontSize: "small" }) }) })
            ] })
          ] }, z.name)) })
        ] }) })
      ] }),
      t === "users" && /* @__PURE__ */ u.jsxs(Xt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ u.jsx(
            mn,
            {
              size: "small",
              placeholder: "Search users...",
              value: b,
              onChange: (z) => C(z.target.value),
              slotProps: {
                input: {
                  startAdornment: /* @__PURE__ */ u.jsx(Rg, { position: "start", children: /* @__PURE__ */ u.jsx(ey, { fontSize: "small" }) })
                }
              },
              sx: { width: { xs: "100%", sm: 280 } }
            }
          ),
          /* @__PURE__ */ u.jsx(Ct, { variant: "contained", size: "small", startIcon: /* @__PURE__ */ u.jsx(qg, {}), onClick: () => G(!0), children: "New User" })
        ] }),
        /* @__PURE__ */ u.jsx(Vg, { children: /* @__PURE__ */ u.jsxs(Wg, { size: "small", children: [
          /* @__PURE__ */ u.jsx(Yg, { children: /* @__PURE__ */ u.jsxs(ri, { children: [
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontWeight: 600 }, children: "Username" }),
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontWeight: 600 }, children: "Auth Database" }),
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontWeight: 600 }, children: "Assigned Roles" }),
            /* @__PURE__ */ u.jsx(Wt, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Hg, { children: nm.length === 0 ? /* @__PURE__ */ u.jsx(ri, { children: /* @__PURE__ */ u.jsx(Wt, { colSpan: 4, align: "center", sx: { py: 3, color: "text.secondary" }, children: "No custom MongoDB users found." }) }) : nm.map((z) => /* @__PURE__ */ u.jsxs(ri, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontFamily: At, fontWeight: 600 }, children: z.username }),
            /* @__PURE__ */ u.jsx(Wt, { sx: { fontFamily: At, color: "text.secondary" }, children: z.database }),
            /* @__PURE__ */ u.jsx(Wt, { sx: { color: "text.secondary" }, children: (z.roles || []).join(", ") || "readWrite" }),
            /* @__PURE__ */ u.jsxs(Wt, { align: "right", children: [
              /* @__PURE__ */ u.jsx(Pn, { title: "Set Roles / Privileges", children: /* @__PURE__ */ u.jsx(
                Ht,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => {
                    _e(z), Ie(!0);
                  },
                  children: /* @__PURE__ */ u.jsx(k$, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(Pn, { title: "Change Password", children: /* @__PURE__ */ u.jsx(
                Ht,
                {
                  size: "small",
                  color: "warning",
                  onClick: () => {
                    Oe(z), je(!0);
                  },
                  children: /* @__PURE__ */ u.jsx(x$, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(Pn, { title: "Drop User", children: /* @__PURE__ */ u.jsx(Ht, { size: "small", color: "error", onClick: () => Ot(z), children: /* @__PURE__ */ u.jsx(ed, { fontSize: "small" }) }) })
            ] })
          ] }, `${z.username}@${z.database}`)) })
        ] }) })
      ] }),
      t === "query" && /* @__PURE__ */ u.jsx(Xt, { sx: { p: 2 }, children: /* @__PURE__ */ u.jsxs(Qe, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
        /* @__PURE__ */ u.jsx(Xt, { sx: { width: { xs: "100%", md: 280 }, flexShrink: 0 }, children: /* @__PURE__ */ u.jsxs(An, { variant: "outlined", sx: { p: 1.5 }, children: [
          /* @__PURE__ */ u.jsx(Ve, { variant: "subtitle2", sx: { fontWeight: 700, mb: 1 }, children: "Target Database" }),
          /* @__PURE__ */ u.jsx(gf, { fullWidth: !0, size: "small", sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(Ja, { value: g, onChange: (z) => h(z.target.value), children: c.map((z) => /* @__PURE__ */ u.jsx(Qt, { value: z.name, children: z.name }, z.name)) }) }),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [
            /* @__PURE__ */ u.jsxs(Ve, { variant: "caption", sx: { fontWeight: 700, color: "text.secondary" }, children: [
              "COLLECTIONS (",
              S.length,
              ")"
            ] }),
            /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 0.5, children: [
              /* @__PURE__ */ u.jsx(Ht, { size: "small", onClick: () => _(!0), disabled: !g, title: "New Collection", children: /* @__PURE__ */ u.jsx(Ju, { sx: { fontSize: 16 } }) }),
              /* @__PURE__ */ u.jsx(Ht, { size: "small", onClick: () => Mt(g), disabled: R, title: "Refresh Collections", children: /* @__PURE__ */ u.jsx(Jg, { sx: { fontSize: 14 } }) })
            ] })
          ] }),
          R ? /* @__PURE__ */ u.jsx(Xt, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ u.jsx(To, { size: 20 }) }) : S.length === 0 ? /* @__PURE__ */ u.jsxs(Ve, { variant: "caption", sx: { color: "text.disabled", display: "block", py: 1 }, children: [
            "No collections found in ",
            g || "database",
            "."
          ] }) : /* @__PURE__ */ u.jsx(Xt, { sx: { maxHeight: 300, overflow: "auto" }, children: S.map((z) => /* @__PURE__ */ u.jsxs(
            Xt,
            {
              onClick: () => {
                k(z.name), Kn(z.name, O);
              },
              sx: {
                p: 0.75,
                borderRadius: 1,
                cursor: "pointer",
                bgcolor: E === z.name ? "action.selected" : "transparent",
                "&:hover": { bgcolor: "action.hover" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 1, sx: { alignItems: "center", minWidth: 0 }, children: [
                  /* @__PURE__ */ u.jsx(T$, { sx: { fontSize: 16, color: "secondary.main" } }),
                  /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { fontFamily: At, fontSize: "0.8125rem", overflow: "hidden", textOverflow: "ellipsis" }, children: z.name })
                ] }),
                /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 0.5, sx: { alignItems: "center", flexShrink: 0 }, children: [
                  /* @__PURE__ */ u.jsxs(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: [
                    z.count,
                    " doc(s)"
                  ] }),
                  z.name !== "_hp_init" && /* @__PURE__ */ u.jsx(
                    Ht,
                    {
                      size: "small",
                      onClick: (ee) => {
                        ee.stopPropagation(), Ce(z.name);
                      },
                      sx: { color: "text.disabled", "&:hover": { color: "error.main" }, p: 0.25 },
                      title: "Drop Collection",
                      children: /* @__PURE__ */ u.jsx(ed, { sx: { fontSize: 14 } })
                    }
                  )
                ] })
              ]
            },
            z.name
          )) })
        ] }) }),
        /* @__PURE__ */ u.jsxs(Xt, { sx: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 1, sx: { mb: 1, flexWrap: "wrap", gap: 0.5 }, children: [
            /* @__PURE__ */ u.jsx(
              Qu,
              {
                size: "small",
                label: "Find All: {}",
                onClick: () => {
                  N("{}"), Kn(E, "{}");
                },
                sx: { cursor: "pointer", fontFamily: At, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ u.jsx(
              Qu,
              {
                size: "small",
                label: '{ "status": "active" }',
                onClick: () => {
                  N(`{
  "status": "active"
}`), Kn(E, `{
  "status": "active"
}`);
                },
                sx: { cursor: "pointer", fontFamily: At, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ u.jsx(
            mn,
            {
              multiline: !0,
              rows: 3,
              fullWidth: !0,
              value: O,
              onChange: (z) => N(z.target.value),
              placeholder: 'Filter documents by MQL criteria (JSON format, e.g. { "type": "admin" })',
              slotProps: {
                input: {
                  sx: { fontFamily: At, fontSize: "0.875rem", bgcolor: "background.paper" }
                }
              },
              onKeyDown: (z) => {
                (z.ctrlKey || z.metaKey) && z.key === "Enter" && (z.preventDefault(), Kn());
              }
            }
          ),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 1.5, sx: { mt: 1.5, mb: 2, alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(
                Ct,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: j ? /* @__PURE__ */ u.jsx(To, { size: 16, color: "inherit" }) : /* @__PURE__ */ u.jsx(Zg, {}),
                  onClick: () => Kn(),
                  disabled: j || !g || !E,
                  children: "Find Documents"
                }
              ),
              /* @__PURE__ */ u.jsx(gf, { size: "small", sx: { width: 100 }, children: /* @__PURE__ */ u.jsxs(Ja, { value: I, onChange: (z) => y(Number(z.target.value)), children: [
                /* @__PURE__ */ u.jsx(Qt, { value: 20, children: "20 docs" }),
                /* @__PURE__ */ u.jsx(Qt, { value: 50, children: "50 docs" }),
                /* @__PURE__ */ u.jsx(Qt, { value: 100, children: "100 docs" }),
                /* @__PURE__ */ u.jsx(Qt, { value: 250, children: "250 docs" })
              ] }) })
            ] }),
            M && M.ok && /* @__PURE__ */ u.jsxs(Qe, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsxs(Ve, { variant: "caption", sx: { color: "text.secondary" }, children: [
                M.count ?? (((rm = M.documents) == null ? void 0 : rm.length) || 0),
                " total docs • ",
                M.execution_time_ms || 0,
                " ms"
              ] }),
              /* @__PURE__ */ u.jsx(Ct, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ u.jsx(R$, {}), onClick: Br, children: "Export JSON" })
            ] })
          ] }),
          M && /* @__PURE__ */ u.jsx(Xt, { children: M.ok ? M.documents && M.documents.length > 0 ? /* @__PURE__ */ u.jsx(Qe, { spacing: 1.5, sx: { maxHeight: 450, overflow: "auto" }, children: M.documents.map((z, ee) => /* @__PURE__ */ u.jsxs(An, { variant: "outlined", sx: { p: 1.5, position: "relative" }, children: [
            /* @__PURE__ */ u.jsx(Xt, { sx: { position: "absolute", top: 8, right: 8 }, children: /* @__PURE__ */ u.jsx(Pn, { title: "Copy Document JSON", children: /* @__PURE__ */ u.jsx(
              Ht,
              {
                size: "small",
                onClick: () => {
                  navigator.clipboard.writeText(JSON.stringify(z, null, 2)), ie("Document JSON copied to clipboard.");
                },
                children: /* @__PURE__ */ u.jsx(P$, { sx: { fontSize: 14 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(
              Ve,
              {
                component: "pre",
                sx: {
                  m: 0,
                  fontFamily: At,
                  fontSize: "0.8125rem",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  color: "text.primary"
                },
                children: JSON.stringify(z, null, 2)
              }
            )
          ] }, ee)) }) : /* @__PURE__ */ u.jsxs(sg, { severity: "info", children: [
            "No documents matched filter in collection '",
            E,
            "'."
          ] }) : /* @__PURE__ */ u.jsx(sg, { severity: "error", sx: { fontFamily: At }, children: M.error || "Find documents operation failed" }) })
        ] })
      ] }) }),
      t === "service" && /* @__PURE__ */ u.jsxs(Xt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ u.jsx(Ve, { variant: "h6", sx: { fontWeight: 700, mb: 2 }, children: "Isolation & Environment Parameters" }),
        /* @__PURE__ */ u.jsx(Qe, { spacing: 2, children: /* @__PURE__ */ u.jsx(An, { variant: "outlined", sx: { p: 2 }, children: /* @__PURE__ */ u.jsxs(Qe, { spacing: 1, children: [
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: "Configuration File:" }),
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { fontFamily: At, fontWeight: 600 }, children: "/opt/hostpanel/etc/mongodb/mongod.conf" })
          ] }),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: "Data Directory:" }),
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { fontFamily: At, fontWeight: 600 }, children: "/opt/hostpanel/data/mongodb" })
          ] }),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: "Log Directory:" }),
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { fontFamily: At, fontWeight: 600 }, children: "/opt/hostpanel/logs/mongodb/mongod.log" })
          ] }),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: "Unix Domain Socket:" }),
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { fontFamily: At, fontWeight: 600 }, children: "/opt/hostpanel/run/mongodb/mongodb-27017.sock" })
          ] }),
          /* @__PURE__ */ u.jsxs(Qe, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: "Runtime Binaries:" }),
            /* @__PURE__ */ u.jsx(Ve, { variant: "body2", sx: { fontFamily: At, fontWeight: 600 }, children: "/opt/hostpanel/runtimes/mongodb/bin/mongod" })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: L, onClose: () => $(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(Vr, { children: "Create New MongoDB Database" }),
      /* @__PURE__ */ u.jsx(Hr, { children: /* @__PURE__ */ u.jsx(Qe, { spacing: 2, sx: { mt: 1 }, children: /* @__PURE__ */ u.jsx(
        mn,
        {
          label: "Database Name",
          size: "small",
          fullWidth: !0,
          value: B,
          onChange: (z) => F(z.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "")),
          placeholder: "e.g. app_database"
        }
      ) }) }),
      /* @__PURE__ */ u.jsxs(Ur, { children: [
        /* @__PURE__ */ u.jsx(Ct, { onClick: () => $(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Ct, { variant: "contained", onClick: Sl, disabled: !B, children: "Create" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: U, onClose: () => _(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsxs(Vr, { children: [
        "Create Collection in '",
        g,
        "'"
      ] }),
      /* @__PURE__ */ u.jsx(Hr, { children: /* @__PURE__ */ u.jsx(Qe, { spacing: 2, sx: { mt: 1 }, children: /* @__PURE__ */ u.jsx(
        mn,
        {
          label: "Collection Name",
          size: "small",
          fullWidth: !0,
          value: X,
          onChange: (z) => V(z.target.value.replace(/[^a-zA-Z0-9_.-]/g, "")),
          placeholder: "e.g. users, orders, logs"
        }
      ) }) }),
      /* @__PURE__ */ u.jsxs(Ur, { children: [
        /* @__PURE__ */ u.jsx(Ct, { onClick: () => _(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Ct, { variant: "contained", onClick: le, disabled: !X || !g, children: "Create Collection" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: J, onClose: () => G(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(Vr, { children: "Create New MongoDB User" }),
      /* @__PURE__ */ u.jsx(Hr, { children: /* @__PURE__ */ u.jsxs(Qe, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsx(
          mn,
          {
            label: "Username",
            size: "small",
            fullWidth: !0,
            value: Q,
            onChange: (z) => W(z.target.value.replace(/[^a-zA-Z0-9_]/g, "")),
            placeholder: "e.g. appuser"
          }
        ),
        /* @__PURE__ */ u.jsxs(
          mn,
          {
            select: !0,
            label: "Authentication Database",
            size: "small",
            fullWidth: !0,
            value: Ee,
            onChange: (z) => Te(z.target.value),
            children: [
              /* @__PURE__ */ u.jsx(Qt, { value: "admin", children: "admin (Global Auth)" }),
              c.map((z) => /* @__PURE__ */ u.jsx(Qt, { value: z.name, children: z.name }, z.name))
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(
          mn,
          {
            select: !0,
            label: "Initial Roles",
            size: "small",
            fullWidth: !0,
            value: ge,
            onChange: (z) => ce(z.target.value),
            children: [
              /* @__PURE__ */ u.jsx(Qt, { value: "readWrite", children: "readWrite" }),
              /* @__PURE__ */ u.jsx(Qt, { value: "read", children: "read (Read-Only)" }),
              /* @__PURE__ */ u.jsx(Qt, { value: "dbAdmin", children: "dbAdmin" })
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(
          mn,
          {
            label: "Password",
            size: "small",
            type: "password",
            fullWidth: !0,
            value: ne,
            onChange: (z) => se(z.target.value)
          }
        )
      ] }) }),
      /* @__PURE__ */ u.jsxs(Ur, { children: [
        /* @__PURE__ */ u.jsx(Ct, { onClick: () => G(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Ct, { variant: "contained", onClick: nt, disabled: !Q || !ne, children: "Create User" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: Ne, onClose: () => je(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsxs(Vr, { children: [
        "Reset Password for ",
        Se == null ? void 0 : Se.username
      ] }),
      /* @__PURE__ */ u.jsx(Hr, { children: /* @__PURE__ */ u.jsx(Qe, { spacing: 2, sx: { mt: 1 }, children: /* @__PURE__ */ u.jsx(
        mn,
        {
          label: "New Password",
          size: "small",
          type: "password",
          fullWidth: !0,
          value: ue,
          onChange: (z) => Pe(z.target.value)
        }
      ) }) }),
      /* @__PURE__ */ u.jsxs(Ur, { children: [
        /* @__PURE__ */ u.jsx(Ct, { onClick: () => je(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Ct, { variant: "contained", onClick: Xo, disabled: !ue, children: "Save Password" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: et, onClose: () => Ie(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(Vr, { children: "Assign Roles & Database Access" }),
      /* @__PURE__ */ u.jsx(Hr, { children: /* @__PURE__ */ u.jsxs(Qe, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsxs(Ve, { variant: "body2", sx: { color: "text.secondary" }, children: [
          "Assigning roles to user ",
          /* @__PURE__ */ u.jsx("strong", { children: Me == null ? void 0 : Me.username })
        ] }),
        /* @__PURE__ */ u.jsx(
          mn,
          {
            select: !0,
            label: "Target Database",
            size: "small",
            fullWidth: !0,
            value: Ge,
            onChange: (z) => Be(z.target.value),
            children: c.map((z) => /* @__PURE__ */ u.jsx(Qt, { value: z.name, children: z.name }, z.name))
          }
        ),
        /* @__PURE__ */ u.jsxs(
          mn,
          {
            select: !0,
            label: "Assigned Role",
            size: "small",
            fullWidth: !0,
            value: ve,
            onChange: (z) => We(z.target.value),
            children: [
              /* @__PURE__ */ u.jsx(Qt, { value: "readWrite", children: "readWrite" }),
              /* @__PURE__ */ u.jsx(Qt, { value: "read", children: "read (Read-Only)" }),
              /* @__PURE__ */ u.jsx(Qt, { value: "dbAdmin", children: "dbAdmin" }),
              /* @__PURE__ */ u.jsx(Qt, { value: "dbOwner", children: "dbOwner" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ u.jsxs(Ur, { children: [
        /* @__PURE__ */ u.jsx(Ct, { onClick: () => Ie(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Ct, { variant: "contained", onClick: Dr, disabled: !Ge, children: "Assign" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: yt, onClose: () => oe(!1), maxWidth: "md", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsxs(Vr, { children: [
        "Edit MongoDB Configuration (",
        at,
        ")"
      ] }),
      /* @__PURE__ */ u.jsx(Hr, { children: Hn ? /* @__PURE__ */ u.jsx(Xt, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ u.jsx(To, { size: 28 }) }) : /* @__PURE__ */ u.jsx(
        mn,
        {
          multiline: !0,
          rows: 15,
          fullWidth: !0,
          value: ye,
          onChange: (z) => Ae(z.target.value),
          sx: { mt: 1, fontFamily: At }
        }
      ) }),
      /* @__PURE__ */ u.jsxs(Ur, { children: [
        /* @__PURE__ */ u.jsx(Ct, { onClick: () => oe(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Ct, { variant: "contained", onClick: bl, disabled: Lr || Hn, children: Lr ? "Saving..." : "Save Configuration" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Wr, { open: fe, onClose: () => De(!1), maxWidth: "md", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(Vr, { children: "MongoDB Service Logs" }),
      /* @__PURE__ */ u.jsx(Hr, { children: yo ? /* @__PURE__ */ u.jsx(To, { size: 24, sx: { my: 3 } }) : /* @__PURE__ */ u.jsx(
        An,
        {
          sx: {
            p: 2,
            bgcolor: "grey.900",
            color: "grey.100",
            fontFamily: At,
            fontSize: "0.8125rem",
            maxHeight: 400,
            overflow: "auto",
            whiteSpace: "pre-wrap"
          },
          children: Yt
        }
      ) }),
      /* @__PURE__ */ u.jsx(Ur, { children: /* @__PURE__ */ u.jsx(Ct, { onClick: () => De(!1), children: "Close" }) })
    ] }),
    /* @__PURE__ */ u.jsxs(
      Wr,
      {
        open: Go,
        onClose: () => {
          vo || Pt(!1);
        },
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Vr, { children: xo }),
          /* @__PURE__ */ u.jsx(Hr, { children: /* @__PURE__ */ u.jsx(M$, { lines: zr, running: vo }) }),
          /* @__PURE__ */ u.jsx(Ur, { children: /* @__PURE__ */ u.jsx(Ct, { onClick: () => Pt(!1), disabled: vo, children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(
      xI,
      {
        open: !!Z,
        autoHideDuration: 4e3,
        onClose: () => ie(null),
        message: Z
      }
    )
  ] });
}
let ec = null;
function j$(e, t) {
  ec = h0(e), ec.render(
    /* @__PURE__ */ u.jsx(p.StrictMode, { children: /* @__PURE__ */ u.jsx(I$, { ctx: t }) })
  );
}
function O$() {
  const e = ec;
  ec = null, e && queueMicrotask(() => e.unmount());
}
const N$ = { mount: j$, unmount: O$ };
export {
  N$ as default,
  j$ as mount,
  O$ as unmount
};
//# sourceMappingURL=main.js.map
