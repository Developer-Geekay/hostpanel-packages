var y1 = Object.defineProperty;
var v1 = (e, t, n) => t in e ? y1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zs = (e, t, n) => v1(e, typeof t != "symbol" ? t + "" : t, n);
function x1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const s = Object.getOwnPropertyDescriptor(r, o);
          s && Object.defineProperty(e, o, s.get ? s : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function S1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ay = { exports: {} }, lc = {}, cy = { exports: {} }, Pe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var al = Symbol.for("react.element"), b1 = Symbol.for("react.portal"), w1 = Symbol.for("react.fragment"), C1 = Symbol.for("react.strict_mode"), k1 = Symbol.for("react.profiler"), E1 = Symbol.for("react.provider"), T1 = Symbol.for("react.context"), R1 = Symbol.for("react.forward_ref"), P1 = Symbol.for("react.suspense"), I1 = Symbol.for("react.memo"), M1 = Symbol.for("react.lazy"), dm = Symbol.iterator;
function $1(e) {
  return e === null || typeof e != "object" ? null : (e = dm && e[dm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var uy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, dy = Object.assign, fy = {};
function Gs(e, t, n) {
  this.props = e, this.context = t, this.refs = fy, this.updater = n || uy;
}
Gs.prototype.isReactComponent = {};
Gs.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Gs.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function py() {
}
py.prototype = Gs.prototype;
function If(e, t, n) {
  this.props = e, this.context = t, this.refs = fy, this.updater = n || uy;
}
var Mf = If.prototype = new py();
Mf.constructor = If;
dy(Mf, Gs.prototype);
Mf.isPureReactComponent = !0;
var fm = Array.isArray, my = Object.prototype.hasOwnProperty, $f = { current: null }, hy = { key: !0, ref: !0, __self: !0, __source: !0 };
function gy(e, t, n) {
  var r, o = {}, s = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) my.call(t, r) && !hy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: al, type: e, key: s, ref: i, props: o, _owner: $f.current };
}
function j1(e, t) {
  return { $$typeof: al, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function jf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function L1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var pm = /\/+/g;
function Su(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? L1("" + e.key) : t.toString(36);
}
function sa(e, t, n, r, o) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (s) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case al:
        case b1:
          i = !0;
      }
  }
  if (i) return i = e, o = o(i), e = r === "" ? "." + Su(i, 0) : r, fm(o) ? (n = "", e != null && (n = e.replace(pm, "$&/") + "/"), sa(o, t, n, "", function(c) {
    return c;
  })) : o != null && (jf(o) && (o = j1(o, n + (!o.key || i && i.key === o.key ? "" : ("" + o.key).replace(pm, "$&/") + "/") + e)), t.push(o)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", fm(e)) for (var l = 0; l < e.length; l++) {
    s = e[l];
    var a = r + Su(s, l);
    i += sa(s, t, n, a, o);
  }
  else if (a = $1(e), typeof a == "function") for (e = a.call(e), l = 0; !(s = e.next()).done; ) s = s.value, a = r + Su(s, l++), i += sa(s, t, n, a, o);
  else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Pl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return sa(e, r, "", "", function(s) {
    return t.call(n, s, o++);
  }), r;
}
function O1(e) {
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
var en = { current: null }, ia = { transition: null }, A1 = { ReactCurrentDispatcher: en, ReactCurrentBatchConfig: ia, ReactCurrentOwner: $f };
function yy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Pe.Children = { map: Pl, forEach: function(e, t, n) {
  Pl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Pl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Pl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!jf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Pe.Component = Gs;
Pe.Fragment = w1;
Pe.Profiler = k1;
Pe.PureComponent = If;
Pe.StrictMode = C1;
Pe.Suspense = P1;
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A1;
Pe.act = yy;
Pe.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = dy({}, e.props), o = e.key, s = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (s = t.ref, i = $f.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) my.call(t, a) && !hy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: al, type: e.type, key: o, ref: s, props: r, _owner: i };
};
Pe.createContext = function(e) {
  return e = { $$typeof: T1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: E1, _context: e }, e.Consumer = e;
};
Pe.createElement = gy;
Pe.createFactory = function(e) {
  var t = gy.bind(null, e);
  return t.type = e, t;
};
Pe.createRef = function() {
  return { current: null };
};
Pe.forwardRef = function(e) {
  return { $$typeof: R1, render: e };
};
Pe.isValidElement = jf;
Pe.lazy = function(e) {
  return { $$typeof: M1, _payload: { _status: -1, _result: e }, _init: O1 };
};
Pe.memo = function(e, t) {
  return { $$typeof: I1, type: e, compare: t === void 0 ? null : t };
};
Pe.startTransition = function(e) {
  var t = ia.transition;
  ia.transition = {};
  try {
    e();
  } finally {
    ia.transition = t;
  }
};
Pe.unstable_act = yy;
Pe.useCallback = function(e, t) {
  return en.current.useCallback(e, t);
};
Pe.useContext = function(e) {
  return en.current.useContext(e);
};
Pe.useDebugValue = function() {
};
Pe.useDeferredValue = function(e) {
  return en.current.useDeferredValue(e);
};
Pe.useEffect = function(e, t) {
  return en.current.useEffect(e, t);
};
Pe.useId = function() {
  return en.current.useId();
};
Pe.useImperativeHandle = function(e, t, n) {
  return en.current.useImperativeHandle(e, t, n);
};
Pe.useInsertionEffect = function(e, t) {
  return en.current.useInsertionEffect(e, t);
};
Pe.useLayoutEffect = function(e, t) {
  return en.current.useLayoutEffect(e, t);
};
Pe.useMemo = function(e, t) {
  return en.current.useMemo(e, t);
};
Pe.useReducer = function(e, t, n) {
  return en.current.useReducer(e, t, n);
};
Pe.useRef = function(e) {
  return en.current.useRef(e);
};
Pe.useState = function(e) {
  return en.current.useState(e);
};
Pe.useSyncExternalStore = function(e, t, n) {
  return en.current.useSyncExternalStore(e, t, n);
};
Pe.useTransition = function() {
  return en.current.useTransition();
};
Pe.version = "18.3.1";
cy.exports = Pe;
var p = cy.exports;
const vy = /* @__PURE__ */ S1(p), Ca = /* @__PURE__ */ x1({
  __proto__: null,
  default: vy
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
var N1 = p, z1 = Symbol.for("react.element"), B1 = Symbol.for("react.fragment"), F1 = Object.prototype.hasOwnProperty, D1 = N1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function xy(e, t, n) {
  var r, o = {}, s = null, i = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) F1.call(t, r) && !_1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: z1, type: e, key: s, ref: i, props: o, _owner: D1.current };
}
lc.Fragment = B1;
lc.jsx = xy;
lc.jsxs = xy;
ay.exports = lc;
var u = ay.exports, Sy = { exports: {} }, kn = {}, by = { exports: {} }, wy = {};
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
    var D = $.length;
    $.push(B);
    e: for (; 0 < D; ) {
      var H = D - 1 >>> 1, _ = $[H];
      if (0 < o(_, B)) $[H] = B, $[D] = _, D = H;
      else break e;
    }
  }
  function n($) {
    return $.length === 0 ? null : $[0];
  }
  function r($) {
    if ($.length === 0) return null;
    var B = $[0], D = $.pop();
    if (D !== B) {
      $[0] = D;
      e: for (var H = 0, _ = $.length, q = _ >>> 1; H < q; ) {
        var V = 2 * (H + 1) - 1, K = $[V], G = V + 1, Q = $[G];
        if (0 > o(K, D)) G < _ && 0 > o(Q, K) ? ($[H] = Q, $[G] = D, H = G) : ($[H] = K, $[V] = D, H = V);
        else if (G < _ && 0 > o(Q, D)) $[H] = Q, $[G] = D, H = G;
        else break e;
      }
    }
    return B;
  }
  function o($, B) {
    var D = $.sortIndex - B.sortIndex;
    return D !== 0 ? D : $.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function() {
      return s.now();
    };
  } else {
    var i = Date, l = i.now();
    e.unstable_now = function() {
      return i.now() - l;
    };
  }
  var a = [], c = [], f = 1, m = null, x = 3, d = !1, v = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
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
    if (b = !1, S($), !v) if (n(a) !== null) v = !0, O(R);
    else {
      var B = n(c);
      B !== null && N(w, B.startTime - $);
    }
  }
  function R($, B) {
    v = !1, b && (b = !1, g(E), E = -1), d = !0;
    var D = x;
    try {
      for (S(B), m = n(a); m !== null && (!(m.expirationTime > B) || $ && !P()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, x = m.priorityLevel;
          var _ = H(m.expirationTime <= B);
          B = e.unstable_now(), typeof _ == "function" ? m.callback = _ : m === n(a) && r(a), S(B);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var q = !0;
      else {
        var V = n(c);
        V !== null && N(w, V.startTime - B), q = !1;
      }
      return q;
    } finally {
      m = null, x = D, d = !1;
    }
  }
  var k = !1, T = null, E = -1, L = 5, A = -1;
  function P() {
    return !(e.unstable_now() - A < L);
  }
  function y() {
    if (T !== null) {
      var $ = e.unstable_now();
      A = $;
      var B = !0;
      try {
        B = T(!0, $);
      } finally {
        B ? M() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var M;
  if (typeof h == "function") M = function() {
    h(y);
  };
  else if (typeof MessageChannel < "u") {
    var I = new MessageChannel(), j = I.port2;
    I.port1.onmessage = y, M = function() {
      j.postMessage(null);
    };
  } else M = function() {
    C(y, 0);
  };
  function O($) {
    T = $, k || (k = !0, M());
  }
  function N($, B) {
    E = C(function() {
      $(e.unstable_now());
    }, B);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null;
  }, e.unstable_continueExecution = function() {
    v || d || (v = !0, O(R));
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : L = 0 < $ ? Math.floor(1e3 / $) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function($) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = x;
    }
    var D = x;
    x = B;
    try {
      return $();
    } finally {
      x = D;
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
    var D = x;
    x = $;
    try {
      return B();
    } finally {
      x = D;
    }
  }, e.unstable_scheduleCallback = function($, B, D) {
    var H = e.unstable_now();
    switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? H + D : H) : D = H, $) {
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
    return _ = D + _, $ = { id: f++, callback: B, priorityLevel: $, startTime: D, expirationTime: _, sortIndex: -1 }, D > H ? ($.sortIndex = D, t(c, $), n(a) === null && $ === n(c) && (b ? (g(E), E = -1) : b = !0, N(w, D - H))) : ($.sortIndex = _, t(a, $), v || d || (v = !0, O(R))), $;
  }, e.unstable_shouldYield = P, e.unstable_wrapCallback = function($) {
    var B = x;
    return function() {
      var D = x;
      x = B;
      try {
        return $.apply(this, arguments);
      } finally {
        x = D;
      }
    };
  };
})(wy);
by.exports = wy;
var W1 = by.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U1 = p, wn = W1;
function Y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Cy = /* @__PURE__ */ new Set(), Ai = {};
function Qo(e, t) {
  Ls(e, t), Ls(e + "Capture", t);
}
function Ls(e, t) {
  for (Ai[e] = t, e = 0; e < t.length; e++) Cy.add(t[e]);
}
var Ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fd = Object.prototype.hasOwnProperty, H1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, mm = {}, hm = {};
function V1(e) {
  return fd.call(hm, e) ? !0 : fd.call(mm, e) ? !1 : H1.test(e) ? hm[e] = !0 : (mm[e] = !0, !1);
}
function K1(e, t, n, r) {
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
function G1(e, t, n, r) {
  if (t === null || typeof t > "u" || K1(e, t, n, r)) return !0;
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
function tn(e, t, n, r, o, s, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i;
}
var Ut = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ut[e] = new tn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ut[t] = new tn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ut[e] = new tn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ut[e] = new tn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ut[e] = new tn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ut[e] = new tn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ut[e] = new tn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ut[e] = new tn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ut[e] = new tn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lf = /[\-:]([a-z])/g;
function Of(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Lf,
    Of
  );
  Ut[t] = new tn(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Lf, Of);
  Ut[t] = new tn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Lf, Of);
  Ut[t] = new tn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ut[e] = new tn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ut.xlinkHref = new tn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ut[e] = new tn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Af(e, t, n, r) {
  var o = Ut.hasOwnProperty(t) ? Ut[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (G1(t, n, o, r) && (n = null), r || o === null ? V1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ar = U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Il = Symbol.for("react.element"), us = Symbol.for("react.portal"), ds = Symbol.for("react.fragment"), Nf = Symbol.for("react.strict_mode"), pd = Symbol.for("react.profiler"), ky = Symbol.for("react.provider"), Ey = Symbol.for("react.context"), zf = Symbol.for("react.forward_ref"), md = Symbol.for("react.suspense"), hd = Symbol.for("react.suspense_list"), Bf = Symbol.for("react.memo"), Vr = Symbol.for("react.lazy"), Ty = Symbol.for("react.offscreen"), gm = Symbol.iterator;
function Js(e) {
  return e === null || typeof e != "object" ? null : (e = gm && e[gm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ht = Object.assign, bu;
function pi(e) {
  if (bu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    bu = t && t[1] || "";
  }
  return `
` + bu + e;
}
var wu = !1;
function Cu(e, t) {
  if (!e || wu) return "";
  wu = !0;
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
`), s = r.stack.split(`
`), i = o.length - 1, l = s.length - 1; 1 <= i && 0 <= l && o[i] !== s[l]; ) l--;
      for (; 1 <= i && 0 <= l; i--, l--) if (o[i] !== s[l]) {
        if (i !== 1 || l !== 1)
          do
            if (i--, l--, 0 > l || o[i] !== s[l]) {
              var a = `
` + o[i].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= i && 0 <= l);
        break;
      }
    }
  } finally {
    wu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? pi(e) : "";
}
function Y1(e) {
  switch (e.tag) {
    case 5:
      return pi(e.type);
    case 16:
      return pi("Lazy");
    case 13:
      return pi("Suspense");
    case 19:
      return pi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Cu(e.type, !1), e;
    case 11:
      return e = Cu(e.type.render, !1), e;
    case 1:
      return e = Cu(e.type, !0), e;
    default:
      return "";
  }
}
function gd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ds:
      return "Fragment";
    case us:
      return "Portal";
    case pd:
      return "Profiler";
    case Nf:
      return "StrictMode";
    case md:
      return "Suspense";
    case hd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Ey:
      return (e.displayName || "Context") + ".Consumer";
    case ky:
      return (e._context.displayName || "Context") + ".Provider";
    case zf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Bf:
      return t = e.displayName || null, t !== null ? t : gd(e.type) || "Memo";
    case Vr:
      t = e._payload, e = e._init;
      try {
        return gd(e(t));
      } catch {
      }
  }
  return null;
}
function Q1(e) {
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
      return gd(t);
    case 8:
      return t === Nf ? "StrictMode" : "Mode";
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
function io(e) {
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
function Ry(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function X1(e) {
  var t = Ry(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, s = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(i) {
      r = "" + i, s.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Ml(e) {
  e._valueTracker || (e._valueTracker = X1(e));
}
function Py(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ry(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ka(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yd(e, t) {
  var n = t.checked;
  return ht({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ym(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = io(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Iy(e, t) {
  t = t.checked, t != null && Af(e, "checked", t, !1);
}
function vd(e, t) {
  Iy(e, t);
  var n = io(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xd(e, t.type, n) : t.hasOwnProperty("defaultValue") && xd(e, t.type, io(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function xd(e, t, n) {
  (t !== "number" || ka(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var mi = Array.isArray;
function Cs(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + io(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Sd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Y(91));
  return ht({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(Y(92));
      if (mi(n)) {
        if (1 < n.length) throw Error(Y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: io(n) };
}
function My(e, t) {
  var n = io(t.value), r = io(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Sm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $y(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function bd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? $y(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var $l, jy = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for ($l = $l || document.createElement("div"), $l.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $l.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ni(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Si = {
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
}, q1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Si).forEach(function(e) {
  q1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Si[t] = Si[e];
  });
});
function Ly(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Si.hasOwnProperty(e) && Si[e] ? ("" + t).trim() : t + "px";
}
function Oy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Ly(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Z1 = ht({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wd(e, t) {
  if (t) {
    if (Z1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(Y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Y(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(Y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Y(62));
  }
}
function Cd(e, t) {
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
var kd = null;
function Ff(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ed = null, ks = null, Es = null;
function bm(e) {
  if (e = dl(e)) {
    if (typeof Ed != "function") throw Error(Y(280));
    var t = e.stateNode;
    t && (t = fc(t), Ed(e.stateNode, e.type, t));
  }
}
function Ay(e) {
  ks ? Es ? Es.push(e) : Es = [e] : ks = e;
}
function Ny() {
  if (ks) {
    var e = ks, t = Es;
    if (Es = ks = null, bm(e), t) for (e = 0; e < t.length; e++) bm(t[e]);
  }
}
function zy(e, t) {
  return e(t);
}
function By() {
}
var ku = !1;
function Fy(e, t, n) {
  if (ku) return e(t, n);
  ku = !0;
  try {
    return zy(e, t, n);
  } finally {
    ku = !1, (ks !== null || Es !== null) && (By(), Ny());
  }
}
function zi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = fc(n);
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
  if (n && typeof n != "function") throw Error(Y(231, t, typeof n));
  return n;
}
var Td = !1;
if (Ir) try {
  var ei = {};
  Object.defineProperty(ei, "passive", { get: function() {
    Td = !0;
  } }), window.addEventListener("test", ei, ei), window.removeEventListener("test", ei, ei);
} catch {
  Td = !1;
}
function J1(e, t, n, r, o, s, i, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (f) {
    this.onError(f);
  }
}
var bi = !1, Ea = null, Ta = !1, Rd = null, eS = { onError: function(e) {
  bi = !0, Ea = e;
} };
function tS(e, t, n, r, o, s, i, l, a) {
  bi = !1, Ea = null, J1.apply(eS, arguments);
}
function nS(e, t, n, r, o, s, i, l, a) {
  if (tS.apply(this, arguments), bi) {
    if (bi) {
      var c = Ea;
      bi = !1, Ea = null;
    } else throw Error(Y(198));
    Ta || (Ta = !0, Rd = c);
  }
}
function Xo(e) {
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
function Dy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wm(e) {
  if (Xo(e) !== e) throw Error(Y(188));
}
function rS(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Xo(e), t === null) throw Error(Y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return wm(o), e;
        if (s === r) return wm(o), t;
        s = s.sibling;
      }
      throw Error(Y(188));
    }
    if (n.return !== r.return) n = o, r = s;
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          i = !0, n = o, r = s;
          break;
        }
        if (l === r) {
          i = !0, r = o, n = s;
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            i = !0, n = s, r = o;
            break;
          }
          if (l === r) {
            i = !0, r = s, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(Y(189));
      }
    }
    if (n.alternate !== r) throw Error(Y(190));
  }
  if (n.tag !== 3) throw Error(Y(188));
  return n.stateNode.current === n ? e : t;
}
function _y(e) {
  return e = rS(e), e !== null ? Wy(e) : null;
}
function Wy(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wy(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Uy = wn.unstable_scheduleCallback, Cm = wn.unstable_cancelCallback, oS = wn.unstable_shouldYield, sS = wn.unstable_requestPaint, St = wn.unstable_now, iS = wn.unstable_getCurrentPriorityLevel, Df = wn.unstable_ImmediatePriority, Hy = wn.unstable_UserBlockingPriority, Ra = wn.unstable_NormalPriority, lS = wn.unstable_LowPriority, Vy = wn.unstable_IdlePriority, ac = null, mr = null;
function aS(e) {
  if (mr && typeof mr.onCommitFiberRoot == "function") try {
    mr.onCommitFiberRoot(ac, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Jn = Math.clz32 ? Math.clz32 : dS, cS = Math.log, uS = Math.LN2;
function dS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (cS(e) / uS | 0) | 0;
}
var jl = 64, Ll = 4194304;
function hi(e) {
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
function Pa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, s = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? r = hi(l) : (s &= i, s !== 0 && (r = hi(s)));
  } else i = n & ~o, i !== 0 ? r = hi(i) : s !== 0 && (r = hi(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, s = t & -t, o >= s || o === 16 && (s & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Jn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function fS(e, t) {
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
function pS(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var i = 31 - Jn(s), l = 1 << i, a = o[i];
    a === -1 ? (!(l & n) || l & r) && (o[i] = fS(l, t)) : a <= t && (e.expiredLanes |= l), s &= ~l;
  }
}
function Pd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ky() {
  var e = jl;
  return jl <<= 1, !(jl & 4194240) && (jl = 64), e;
}
function Eu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Jn(t), e[t] = n;
}
function mS(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Jn(n), s = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~s;
  }
}
function _f(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Jn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ge = 0;
function Gy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Yy, Wf, Qy, Xy, qy, Id = !1, Ol = [], qr = null, Zr = null, Jr = null, Bi = /* @__PURE__ */ new Map(), Fi = /* @__PURE__ */ new Map(), Gr = [], hS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function km(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      qr = null;
      break;
    case "dragenter":
    case "dragleave":
      Zr = null;
      break;
    case "mouseover":
    case "mouseout":
      Jr = null;
      break;
    case "pointerover":
    case "pointerout":
      Bi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fi.delete(t.pointerId);
  }
}
function ti(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [o] }, t !== null && (t = dl(t), t !== null && Wf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function gS(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return qr = ti(qr, e, t, n, r, o), !0;
    case "dragenter":
      return Zr = ti(Zr, e, t, n, r, o), !0;
    case "mouseover":
      return Jr = ti(Jr, e, t, n, r, o), !0;
    case "pointerover":
      var s = o.pointerId;
      return Bi.set(s, ti(Bi.get(s) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return s = o.pointerId, Fi.set(s, ti(Fi.get(s) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Zy(e) {
  var t = jo(e.target);
  if (t !== null) {
    var n = Xo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Dy(n), t !== null) {
          e.blockedOn = t, qy(e.priority, function() {
            Qy(n);
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
function la(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Md(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      kd = r, n.target.dispatchEvent(r), kd = null;
    } else return t = dl(n), t !== null && Wf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Em(e, t, n) {
  la(e) && n.delete(t);
}
function yS() {
  Id = !1, qr !== null && la(qr) && (qr = null), Zr !== null && la(Zr) && (Zr = null), Jr !== null && la(Jr) && (Jr = null), Bi.forEach(Em), Fi.forEach(Em);
}
function ni(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Id || (Id = !0, wn.unstable_scheduleCallback(wn.unstable_NormalPriority, yS)));
}
function Di(e) {
  function t(o) {
    return ni(o, e);
  }
  if (0 < Ol.length) {
    ni(Ol[0], e);
    for (var n = 1; n < Ol.length; n++) {
      var r = Ol[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (qr !== null && ni(qr, e), Zr !== null && ni(Zr, e), Jr !== null && ni(Jr, e), Bi.forEach(t), Fi.forEach(t), n = 0; n < Gr.length; n++) r = Gr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gr.length && (n = Gr[0], n.blockedOn === null); ) Zy(n), n.blockedOn === null && Gr.shift();
}
var Ts = Ar.ReactCurrentBatchConfig, Ia = !0;
function vS(e, t, n, r) {
  var o = Ge, s = Ts.transition;
  Ts.transition = null;
  try {
    Ge = 1, Uf(e, t, n, r);
  } finally {
    Ge = o, Ts.transition = s;
  }
}
function xS(e, t, n, r) {
  var o = Ge, s = Ts.transition;
  Ts.transition = null;
  try {
    Ge = 4, Uf(e, t, n, r);
  } finally {
    Ge = o, Ts.transition = s;
  }
}
function Uf(e, t, n, r) {
  if (Ia) {
    var o = Md(e, t, n, r);
    if (o === null) Au(e, t, r, Ma, n), km(e, r);
    else if (gS(o, e, t, n, r)) r.stopPropagation();
    else if (km(e, r), t & 4 && -1 < hS.indexOf(e)) {
      for (; o !== null; ) {
        var s = dl(o);
        if (s !== null && Yy(s), s = Md(e, t, n, r), s === null && Au(e, t, r, Ma, n), s === o) break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else Au(e, t, r, null, n);
  }
}
var Ma = null;
function Md(e, t, n, r) {
  if (Ma = null, e = Ff(r), e = jo(e), e !== null) if (t = Xo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Dy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Ma = e, null;
}
function Jy(e) {
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
      switch (iS()) {
        case Df:
          return 1;
        case Hy:
          return 4;
        case Ra:
        case lS:
          return 16;
        case Vy:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Qr = null, Hf = null, aa = null;
function ev() {
  if (aa) return aa;
  var e, t = Hf, n = t.length, r, o = "value" in Qr ? Qr.value : Qr.textContent, s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++) ;
  return aa = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ca(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Al() {
  return !0;
}
function Tm() {
  return !1;
}
function En(e) {
  function t(n, r, o, s, i) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(s) : s[l]);
    return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Al : Tm, this.isPropagationStopped = Tm, this;
  }
  return ht(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Al);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Al);
  }, persist: function() {
  }, isPersistent: Al }), t;
}
var Ys = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vf = En(Ys), ul = ht({}, Ys, { view: 0, detail: 0 }), SS = En(ul), Tu, Ru, ri, cc = ht({}, ul, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Kf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ri && (ri && e.type === "mousemove" ? (Tu = e.screenX - ri.screenX, Ru = e.screenY - ri.screenY) : Ru = Tu = 0, ri = e), Tu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Ru;
} }), Rm = En(cc), bS = ht({}, cc, { dataTransfer: 0 }), wS = En(bS), CS = ht({}, ul, { relatedTarget: 0 }), Pu = En(CS), kS = ht({}, Ys, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ES = En(kS), TS = ht({}, Ys, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), RS = En(TS), PS = ht({}, Ys, { data: 0 }), Pm = En(PS), IS = {
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
}, MS = {
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
}, $S = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $S[e]) ? !!t[e] : !1;
}
function Kf() {
  return jS;
}
var LS = ht({}, ul, { key: function(e) {
  if (e.key) {
    var t = IS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ca(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? MS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Kf, charCode: function(e) {
  return e.type === "keypress" ? ca(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ca(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), OS = En(LS), AS = ht({}, cc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Im = En(AS), NS = ht({}, ul, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Kf }), zS = En(NS), BS = ht({}, Ys, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), FS = En(BS), DS = ht({}, cc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), _S = En(DS), WS = [9, 13, 27, 32], Gf = Ir && "CompositionEvent" in window, wi = null;
Ir && "documentMode" in document && (wi = document.documentMode);
var US = Ir && "TextEvent" in window && !wi, tv = Ir && (!Gf || wi && 8 < wi && 11 >= wi), Mm = " ", $m = !1;
function nv(e, t) {
  switch (e) {
    case "keyup":
      return WS.indexOf(t.keyCode) !== -1;
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
function rv(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var fs = !1;
function HS(e, t) {
  switch (e) {
    case "compositionend":
      return rv(t);
    case "keypress":
      return t.which !== 32 ? null : ($m = !0, Mm);
    case "textInput":
      return e = t.data, e === Mm && $m ? null : e;
    default:
      return null;
  }
}
function VS(e, t) {
  if (fs) return e === "compositionend" || !Gf && nv(e, t) ? (e = ev(), aa = Hf = Qr = null, fs = !1, e) : null;
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
      return tv && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var KS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function jm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!KS[e.type] : t === "textarea";
}
function ov(e, t, n, r) {
  Ay(r), t = $a(t, "onChange"), 0 < t.length && (n = new Vf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ci = null, _i = null;
function GS(e) {
  hv(e, 0);
}
function uc(e) {
  var t = hs(e);
  if (Py(t)) return e;
}
function YS(e, t) {
  if (e === "change") return t;
}
var sv = !1;
if (Ir) {
  var Iu;
  if (Ir) {
    var Mu = "oninput" in document;
    if (!Mu) {
      var Lm = document.createElement("div");
      Lm.setAttribute("oninput", "return;"), Mu = typeof Lm.oninput == "function";
    }
    Iu = Mu;
  } else Iu = !1;
  sv = Iu && (!document.documentMode || 9 < document.documentMode);
}
function Om() {
  Ci && (Ci.detachEvent("onpropertychange", iv), _i = Ci = null);
}
function iv(e) {
  if (e.propertyName === "value" && uc(_i)) {
    var t = [];
    ov(t, _i, e, Ff(e)), Fy(GS, t);
  }
}
function QS(e, t, n) {
  e === "focusin" ? (Om(), Ci = t, _i = n, Ci.attachEvent("onpropertychange", iv)) : e === "focusout" && Om();
}
function XS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return uc(_i);
}
function qS(e, t) {
  if (e === "click") return uc(t);
}
function ZS(e, t) {
  if (e === "input" || e === "change") return uc(t);
}
function JS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var tr = typeof Object.is == "function" ? Object.is : JS;
function Wi(e, t) {
  if (tr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fd.call(t, o) || !tr(e[o], t[o])) return !1;
  }
  return !0;
}
function Am(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Nm(e, t) {
  var n = Am(e);
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
    n = Am(n);
  }
}
function lv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? lv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function av() {
  for (var e = window, t = ka(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ka(e.document);
  }
  return t;
}
function Yf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function eb(e) {
  var t = av(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && lv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Yf(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, s = Math.min(r.start, o);
        r = r.end === void 0 ? s : Math.min(r.end, o), !e.extend && s > r && (o = r, r = s, s = o), o = Nm(n, s);
        var i = Nm(
          n,
          r
        );
        o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var tb = Ir && "documentMode" in document && 11 >= document.documentMode, ps = null, $d = null, ki = null, jd = !1;
function zm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jd || ps == null || ps !== ka(r) || (r = ps, "selectionStart" in r && Yf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ki && Wi(ki, r) || (ki = r, r = $a($d, "onSelect"), 0 < r.length && (t = new Vf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ps)));
}
function Nl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ms = { animationend: Nl("Animation", "AnimationEnd"), animationiteration: Nl("Animation", "AnimationIteration"), animationstart: Nl("Animation", "AnimationStart"), transitionend: Nl("Transition", "TransitionEnd") }, $u = {}, cv = {};
Ir && (cv = document.createElement("div").style, "AnimationEvent" in window || (delete ms.animationend.animation, delete ms.animationiteration.animation, delete ms.animationstart.animation), "TransitionEvent" in window || delete ms.transitionend.transition);
function dc(e) {
  if ($u[e]) return $u[e];
  if (!ms[e]) return e;
  var t = ms[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in cv) return $u[e] = t[n];
  return e;
}
var uv = dc("animationend"), dv = dc("animationiteration"), fv = dc("animationstart"), pv = dc("transitionend"), mv = /* @__PURE__ */ new Map(), Bm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function fo(e, t) {
  mv.set(e, t), Qo(t, [e]);
}
for (var ju = 0; ju < Bm.length; ju++) {
  var Lu = Bm[ju], nb = Lu.toLowerCase(), rb = Lu[0].toUpperCase() + Lu.slice(1);
  fo(nb, "on" + rb);
}
fo(uv, "onAnimationEnd");
fo(dv, "onAnimationIteration");
fo(fv, "onAnimationStart");
fo("dblclick", "onDoubleClick");
fo("focusin", "onFocus");
fo("focusout", "onBlur");
fo(pv, "onTransitionEnd");
Ls("onMouseEnter", ["mouseout", "mouseover"]);
Ls("onMouseLeave", ["mouseout", "mouseover"]);
Ls("onPointerEnter", ["pointerout", "pointerover"]);
Ls("onPointerLeave", ["pointerout", "pointerover"]);
Qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var gi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ob = new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));
function Fm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, nS(r, t, void 0, e), e.currentTarget = null;
}
function hv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var l = r[i], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== s && o.isPropagationStopped()) break e;
        Fm(o, l, c), s = a;
      }
      else for (i = 0; i < r.length; i++) {
        if (l = r[i], a = l.instance, c = l.currentTarget, l = l.listener, a !== s && o.isPropagationStopped()) break e;
        Fm(o, l, c), s = a;
      }
    }
  }
  if (Ta) throw e = Rd, Ta = !1, Rd = null, e;
}
function rt(e, t) {
  var n = t[zd];
  n === void 0 && (n = t[zd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (gv(t, e, 2, !1), n.add(r));
}
function Ou(e, t, n) {
  var r = 0;
  t && (r |= 4), gv(n, e, r, t);
}
var zl = "_reactListening" + Math.random().toString(36).slice(2);
function Ui(e) {
  if (!e[zl]) {
    e[zl] = !0, Cy.forEach(function(n) {
      n !== "selectionchange" && (ob.has(n) || Ou(n, !1, e), Ou(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zl] || (t[zl] = !0, Ou("selectionchange", !1, t));
  }
}
function gv(e, t, n, r) {
  switch (Jy(t)) {
    case 1:
      var o = vS;
      break;
    case 4:
      o = xS;
      break;
    default:
      o = Uf;
  }
  n = o.bind(null, t, n, e), o = void 0, !Td || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Au(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var a = i.tag;
        if ((a === 3 || a === 4) && (a = i.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        i = i.return;
      }
      for (; l !== null; ) {
        if (i = jo(l), i === null) return;
        if (a = i.tag, a === 5 || a === 6) {
          r = s = i;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Fy(function() {
    var c = s, f = Ff(n), m = [];
    e: {
      var x = mv.get(e);
      if (x !== void 0) {
        var d = Vf, v = e;
        switch (e) {
          case "keypress":
            if (ca(n) === 0) break e;
          case "keydown":
          case "keyup":
            d = OS;
            break;
          case "focusin":
            v = "focus", d = Pu;
            break;
          case "focusout":
            v = "blur", d = Pu;
            break;
          case "beforeblur":
          case "afterblur":
            d = Pu;
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
            d = Rm;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = wS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = zS;
            break;
          case uv:
          case dv:
          case fv:
            d = ES;
            break;
          case pv:
            d = FS;
            break;
          case "scroll":
            d = SS;
            break;
          case "wheel":
            d = _S;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = RS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = Im;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", g = b ? x !== null ? x + "Capture" : null : x;
        b = [];
        for (var h = c, S; h !== null; ) {
          S = h;
          var w = S.stateNode;
          if (S.tag === 5 && w !== null && (S = w, g !== null && (w = zi(h, g), w != null && b.push(Hi(h, w, S)))), C) break;
          h = h.return;
        }
        0 < b.length && (x = new d(x, v, null, n, f), m.push({ event: x, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", d = e === "mouseout" || e === "pointerout", x && n !== kd && (v = n.relatedTarget || n.fromElement) && (jo(v) || v[Mr])) break e;
        if ((d || x) && (x = f.window === f ? f : (x = f.ownerDocument) ? x.defaultView || x.parentWindow : window, d ? (v = n.relatedTarget || n.toElement, d = c, v = v ? jo(v) : null, v !== null && (C = Xo(v), v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (d = null, v = c), d !== v)) {
          if (b = Rm, w = "onMouseLeave", g = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = Im, w = "onPointerLeave", g = "onPointerEnter", h = "pointer"), C = d == null ? x : hs(d), S = v == null ? x : hs(v), x = new b(w, h + "leave", d, n, f), x.target = C, x.relatedTarget = S, w = null, jo(f) === c && (b = new b(g, h + "enter", v, n, f), b.target = S, b.relatedTarget = C, w = b), C = w, d && v) t: {
            for (b = d, g = v, h = 0, S = b; S; S = ns(S)) h++;
            for (S = 0, w = g; w; w = ns(w)) S++;
            for (; 0 < h - S; ) b = ns(b), h--;
            for (; 0 < S - h; ) g = ns(g), S--;
            for (; h--; ) {
              if (b === g || g !== null && b === g.alternate) break t;
              b = ns(b), g = ns(g);
            }
            b = null;
          }
          else b = null;
          d !== null && Dm(m, x, d, b, !1), v !== null && C !== null && Dm(m, C, v, b, !0);
        }
      }
      e: {
        if (x = c ? hs(c) : window, d = x.nodeName && x.nodeName.toLowerCase(), d === "select" || d === "input" && x.type === "file") var R = YS;
        else if (jm(x)) if (sv) R = ZS;
        else {
          R = XS;
          var k = QS;
        }
        else (d = x.nodeName) && d.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (R = qS);
        if (R && (R = R(e, c))) {
          ov(m, R, n, f);
          break e;
        }
        k && k(e, x, c), e === "focusout" && (k = x._wrapperState) && k.controlled && x.type === "number" && xd(x, "number", x.value);
      }
      switch (k = c ? hs(c) : window, e) {
        case "focusin":
          (jm(k) || k.contentEditable === "true") && (ps = k, $d = c, ki = null);
          break;
        case "focusout":
          ki = $d = ps = null;
          break;
        case "mousedown":
          jd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          jd = !1, zm(m, n, f);
          break;
        case "selectionchange":
          if (tb) break;
        case "keydown":
        case "keyup":
          zm(m, n, f);
      }
      var T;
      if (Gf) e: {
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
      else fs ? nv(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (tv && n.locale !== "ko" && (fs || E !== "onCompositionStart" ? E === "onCompositionEnd" && fs && (T = ev()) : (Qr = f, Hf = "value" in Qr ? Qr.value : Qr.textContent, fs = !0)), k = $a(c, E), 0 < k.length && (E = new Pm(E, e, null, n, f), m.push({ event: E, listeners: k }), T ? E.data = T : (T = rv(n), T !== null && (E.data = T)))), (T = US ? HS(e, n) : VS(e, n)) && (c = $a(c, "onBeforeInput"), 0 < c.length && (f = new Pm("onBeforeInput", "beforeinput", null, n, f), m.push({ event: f, listeners: c }), f.data = T));
    }
    hv(m, t);
  });
}
function Hi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function $a(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, s = o.stateNode;
    o.tag === 5 && s !== null && (o = s, s = zi(e, n), s != null && r.unshift(Hi(e, s, o)), s = zi(e, t), s != null && r.push(Hi(e, s, o))), e = e.return;
  }
  return r;
}
function ns(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Dm(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = zi(n, s), a != null && i.unshift(Hi(n, a, l))) : o || (a = zi(n, s), a != null && i.push(Hi(n, a, l)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var sb = /\r\n?/g, ib = /\u0000|\uFFFD/g;
function _m(e) {
  return (typeof e == "string" ? e : "" + e).replace(sb, `
`).replace(ib, "");
}
function Bl(e, t, n) {
  if (t = _m(t), _m(e) !== t && n) throw Error(Y(425));
}
function ja() {
}
var Ld = null, Od = null;
function Ad(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Nd = typeof setTimeout == "function" ? setTimeout : void 0, lb = typeof clearTimeout == "function" ? clearTimeout : void 0, Wm = typeof Promise == "function" ? Promise : void 0, ab = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wm < "u" ? function(e) {
  return Wm.resolve(null).then(e).catch(cb);
} : Nd;
function cb(e) {
  setTimeout(function() {
    throw e;
  });
}
function Nu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Di(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Di(t);
}
function eo(e) {
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
function Um(e) {
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
var Qs = Math.random().toString(36).slice(2), dr = "__reactFiber$" + Qs, Vi = "__reactProps$" + Qs, Mr = "__reactContainer$" + Qs, zd = "__reactEvents$" + Qs, ub = "__reactListeners$" + Qs, db = "__reactHandles$" + Qs;
function jo(e) {
  var t = e[dr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mr] || n[dr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Um(e); e !== null; ) {
        if (n = e[dr]) return n;
        e = Um(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dl(e) {
  return e = e[dr] || e[Mr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function hs(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Y(33));
}
function fc(e) {
  return e[Vi] || null;
}
var Bd = [], gs = -1;
function po(e) {
  return { current: e };
}
function ot(e) {
  0 > gs || (e.current = Bd[gs], Bd[gs] = null, gs--);
}
function et(e, t) {
  gs++, Bd[gs] = e.current, e.current = t;
}
var lo = {}, Qt = po(lo), cn = po(!1), _o = lo;
function Os(e, t) {
  var n = e.type.contextTypes;
  if (!n) return lo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, s;
  for (s in n) o[s] = t[s];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function un(e) {
  return e = e.childContextTypes, e != null;
}
function La() {
  ot(cn), ot(Qt);
}
function Hm(e, t, n) {
  if (Qt.current !== lo) throw Error(Y(168));
  et(Qt, t), et(cn, n);
}
function yv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(Y(108, Q1(e) || "Unknown", o));
  return ht({}, n, r);
}
function Oa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || lo, _o = Qt.current, et(Qt, e), et(cn, cn.current), !0;
}
function Vm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(Y(169));
  n ? (e = yv(e, t, _o), r.__reactInternalMemoizedMergedChildContext = e, ot(cn), ot(Qt), et(Qt, e)) : ot(cn), et(cn, n);
}
var kr = null, pc = !1, zu = !1;
function vv(e) {
  kr === null ? kr = [e] : kr.push(e);
}
function fb(e) {
  pc = !0, vv(e);
}
function mo() {
  if (!zu && kr !== null) {
    zu = !0;
    var e = 0, t = Ge;
    try {
      var n = kr;
      for (Ge = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      kr = null, pc = !1;
    } catch (o) {
      throw kr !== null && (kr = kr.slice(e + 1)), Uy(Df, mo), o;
    } finally {
      Ge = t, zu = !1;
    }
  }
  return null;
}
var ys = [], vs = 0, Aa = null, Na = 0, In = [], Mn = 0, Wo = null, Tr = 1, Rr = "";
function Po(e, t) {
  ys[vs++] = Na, ys[vs++] = Aa, Aa = e, Na = t;
}
function xv(e, t, n) {
  In[Mn++] = Tr, In[Mn++] = Rr, In[Mn++] = Wo, Wo = e;
  var r = Tr;
  e = Rr;
  var o = 32 - Jn(r) - 1;
  r &= ~(1 << o), n += 1;
  var s = 32 - Jn(t) + o;
  if (30 < s) {
    var i = o - o % 5;
    s = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, Tr = 1 << 32 - Jn(t) + o | n << o | r, Rr = s + e;
  } else Tr = 1 << s | n << o | r, Rr = e;
}
function Qf(e) {
  e.return !== null && (Po(e, 1), xv(e, 1, 0));
}
function Xf(e) {
  for (; e === Aa; ) Aa = ys[--vs], ys[vs] = null, Na = ys[--vs], ys[vs] = null;
  for (; e === Wo; ) Wo = In[--Mn], In[Mn] = null, Rr = In[--Mn], In[Mn] = null, Tr = In[--Mn], In[Mn] = null;
}
var Sn = null, xn = null, ut = !1, Zn = null;
function Sv(e, t) {
  var n = Ln(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Km(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Sn = e, xn = eo(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Sn = e, xn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Wo !== null ? { id: Tr, overflow: Rr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ln(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Sn = e, xn = null, !0) : !1;
    default:
      return !1;
  }
}
function Fd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Dd(e) {
  if (ut) {
    var t = xn;
    if (t) {
      var n = t;
      if (!Km(e, t)) {
        if (Fd(e)) throw Error(Y(418));
        t = eo(n.nextSibling);
        var r = Sn;
        t && Km(e, t) ? Sv(r, n) : (e.flags = e.flags & -4097 | 2, ut = !1, Sn = e);
      }
    } else {
      if (Fd(e)) throw Error(Y(418));
      e.flags = e.flags & -4097 | 2, ut = !1, Sn = e;
    }
  }
}
function Gm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Sn = e;
}
function Fl(e) {
  if (e !== Sn) return !1;
  if (!ut) return Gm(e), ut = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ad(e.type, e.memoizedProps)), t && (t = xn)) {
    if (Fd(e)) throw bv(), Error(Y(418));
    for (; t; ) Sv(e, t), t = eo(t.nextSibling);
  }
  if (Gm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(Y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xn = eo(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xn = null;
    }
  } else xn = Sn ? eo(e.stateNode.nextSibling) : null;
  return !0;
}
function bv() {
  for (var e = xn; e; ) e = eo(e.nextSibling);
}
function As() {
  xn = Sn = null, ut = !1;
}
function qf(e) {
  Zn === null ? Zn = [e] : Zn.push(e);
}
var pb = Ar.ReactCurrentBatchConfig;
function oi(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(Y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(Y(147, e));
      var o = r, s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(i) {
        var l = o.refs;
        i === null ? delete l[s] : l[s] = i;
      }, t._stringRef = s, t);
    }
    if (typeof e != "string") throw Error(Y(284));
    if (!n._owner) throw Error(Y(290, e));
  }
  return e;
}
function Dl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(Y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ym(e) {
  var t = e._init;
  return t(e._payload);
}
function wv(e) {
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
    return g = oo(g, h), g.index = 0, g.sibling = null, g;
  }
  function s(g, h, S) {
    return g.index = S, e ? (S = g.alternate, S !== null ? (S = S.index, S < h ? (g.flags |= 2, h) : S) : (g.flags |= 2, h)) : (g.flags |= 1048576, h);
  }
  function i(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, S, w) {
    return h === null || h.tag !== 6 ? (h = Hu(S, g.mode, w), h.return = g, h) : (h = o(h, S), h.return = g, h);
  }
  function a(g, h, S, w) {
    var R = S.type;
    return R === ds ? f(g, h, S.props.children, w, S.key) : h !== null && (h.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Vr && Ym(R) === h.type) ? (w = o(h, S.props), w.ref = oi(g, h, S), w.return = g, w) : (w = ga(S.type, S.key, S.props, null, g.mode, w), w.ref = oi(g, h, S), w.return = g, w);
  }
  function c(g, h, S, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = Vu(S, g.mode, w), h.return = g, h) : (h = o(h, S.children || []), h.return = g, h);
  }
  function f(g, h, S, w, R) {
    return h === null || h.tag !== 7 ? (h = zo(S, g.mode, w, R), h.return = g, h) : (h = o(h, S), h.return = g, h);
  }
  function m(g, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = Hu("" + h, g.mode, S), h.return = g, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Il:
          return S = ga(h.type, h.key, h.props, null, g.mode, S), S.ref = oi(g, null, h), S.return = g, S;
        case us:
          return h = Vu(h, g.mode, S), h.return = g, h;
        case Vr:
          var w = h._init;
          return m(g, w(h._payload), S);
      }
      if (mi(h) || Js(h)) return h = zo(h, g.mode, S, null), h.return = g, h;
      Dl(g, h);
    }
    return null;
  }
  function x(g, h, S, w) {
    var R = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return R !== null ? null : l(g, h, "" + S, w);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Il:
          return S.key === R ? a(g, h, S, w) : null;
        case us:
          return S.key === R ? c(g, h, S, w) : null;
        case Vr:
          return R = S._init, x(
            g,
            h,
            R(S._payload),
            w
          );
      }
      if (mi(S) || Js(S)) return R !== null ? null : f(g, h, S, w, null);
      Dl(g, S);
    }
    return null;
  }
  function d(g, h, S, w, R) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(S) || null, l(h, g, "" + w, R);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Il:
          return g = g.get(w.key === null ? S : w.key) || null, a(h, g, w, R);
        case us:
          return g = g.get(w.key === null ? S : w.key) || null, c(h, g, w, R);
        case Vr:
          var k = w._init;
          return d(g, h, S, k(w._payload), R);
      }
      if (mi(w) || Js(w)) return g = g.get(S) || null, f(h, g, w, R, null);
      Dl(h, w);
    }
    return null;
  }
  function v(g, h, S, w) {
    for (var R = null, k = null, T = h, E = h = 0, L = null; T !== null && E < S.length; E++) {
      T.index > E ? (L = T, T = null) : L = T.sibling;
      var A = x(g, T, S[E], w);
      if (A === null) {
        T === null && (T = L);
        break;
      }
      e && T && A.alternate === null && t(g, T), h = s(A, h, E), k === null ? R = A : k.sibling = A, k = A, T = L;
    }
    if (E === S.length) return n(g, T), ut && Po(g, E), R;
    if (T === null) {
      for (; E < S.length; E++) T = m(g, S[E], w), T !== null && (h = s(T, h, E), k === null ? R = T : k.sibling = T, k = T);
      return ut && Po(g, E), R;
    }
    for (T = r(g, T); E < S.length; E++) L = d(T, g, E, S[E], w), L !== null && (e && L.alternate !== null && T.delete(L.key === null ? E : L.key), h = s(L, h, E), k === null ? R = L : k.sibling = L, k = L);
    return e && T.forEach(function(P) {
      return t(g, P);
    }), ut && Po(g, E), R;
  }
  function b(g, h, S, w) {
    var R = Js(S);
    if (typeof R != "function") throw Error(Y(150));
    if (S = R.call(S), S == null) throw Error(Y(151));
    for (var k = R = null, T = h, E = h = 0, L = null, A = S.next(); T !== null && !A.done; E++, A = S.next()) {
      T.index > E ? (L = T, T = null) : L = T.sibling;
      var P = x(g, T, A.value, w);
      if (P === null) {
        T === null && (T = L);
        break;
      }
      e && T && P.alternate === null && t(g, T), h = s(P, h, E), k === null ? R = P : k.sibling = P, k = P, T = L;
    }
    if (A.done) return n(
      g,
      T
    ), ut && Po(g, E), R;
    if (T === null) {
      for (; !A.done; E++, A = S.next()) A = m(g, A.value, w), A !== null && (h = s(A, h, E), k === null ? R = A : k.sibling = A, k = A);
      return ut && Po(g, E), R;
    }
    for (T = r(g, T); !A.done; E++, A = S.next()) A = d(T, g, E, A.value, w), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? E : A.key), h = s(A, h, E), k === null ? R = A : k.sibling = A, k = A);
    return e && T.forEach(function(y) {
      return t(g, y);
    }), ut && Po(g, E), R;
  }
  function C(g, h, S, w) {
    if (typeof S == "object" && S !== null && S.type === ds && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Il:
          e: {
            for (var R = S.key, k = h; k !== null; ) {
              if (k.key === R) {
                if (R = S.type, R === ds) {
                  if (k.tag === 7) {
                    n(g, k.sibling), h = o(k, S.props.children), h.return = g, g = h;
                    break e;
                  }
                } else if (k.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Vr && Ym(R) === k.type) {
                  n(g, k.sibling), h = o(k, S.props), h.ref = oi(g, k, S), h.return = g, g = h;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            S.type === ds ? (h = zo(S.props.children, g.mode, w, S.key), h.return = g, g = h) : (w = ga(S.type, S.key, S.props, null, g.mode, w), w.ref = oi(g, h, S), w.return = g, g = w);
          }
          return i(g);
        case us:
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
            h = Vu(S, g.mode, w), h.return = g, g = h;
          }
          return i(g);
        case Vr:
          return k = S._init, C(g, h, k(S._payload), w);
      }
      if (mi(S)) return v(g, h, S, w);
      if (Js(S)) return b(g, h, S, w);
      Dl(g, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(g, h.sibling), h = o(h, S), h.return = g, g = h) : (n(g, h), h = Hu(S, g.mode, w), h.return = g, g = h), i(g)) : n(g, h);
  }
  return C;
}
var Ns = wv(!0), Cv = wv(!1), za = po(null), Ba = null, xs = null, Zf = null;
function Jf() {
  Zf = xs = Ba = null;
}
function ep(e) {
  var t = za.current;
  ot(za), e._currentValue = t;
}
function _d(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Rs(e, t) {
  Ba = e, Zf = xs = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (an = !0), e.firstContext = null);
}
function Nn(e) {
  var t = e._currentValue;
  if (Zf !== e) if (e = { context: e, memoizedValue: t, next: null }, xs === null) {
    if (Ba === null) throw Error(Y(308));
    xs = e, Ba.dependencies = { lanes: 0, firstContext: e };
  } else xs = xs.next = e;
  return t;
}
var Lo = null;
function tp(e) {
  Lo === null ? Lo = [e] : Lo.push(e);
}
function kv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, tp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, $r(e, r);
}
function $r(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kr = !1;
function np(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ev(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function to(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ze & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, $r(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, tp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, $r(e, n);
}
function ua(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _f(e, n);
  }
}
function Qm(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, s = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        s === null ? o = s = i : s = s.next = i, n = n.next;
      } while (n !== null);
      s === null ? o = s = t : s = s.next = t;
    } else o = s = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: s, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Fa(e, t, n, r) {
  var o = e.updateQueue;
  Kr = !1;
  var s = o.firstBaseUpdate, i = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, i === null ? s = c : i.next = c, i = a;
    var f = e.alternate;
    f !== null && (f = f.updateQueue, l = f.lastBaseUpdate, l !== i && (l === null ? f.firstBaseUpdate = c : l.next = c, f.lastBaseUpdate = a));
  }
  if (s !== null) {
    var m = o.baseState;
    i = 0, f = c = a = null, l = s;
    do {
      var x = l.lane, d = l.eventTime;
      if ((r & x) === x) {
        f !== null && (f = f.next = {
          eventTime: d,
          lane: 0,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null
        });
        e: {
          var v = e, b = l;
          switch (x = t, d = n, b.tag) {
            case 1:
              if (v = b.payload, typeof v == "function") {
                m = v.call(d, m, x);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = b.payload, x = typeof v == "function" ? v.call(d, m, x) : v, x == null) break e;
              m = ht({}, m, x);
              break e;
            case 2:
              Kr = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, x = o.effects, x === null ? o.effects = [l] : x.push(l));
      } else d = { eventTime: d, lane: x, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, f === null ? (c = f = d, a = m) : f = f.next = d, i |= x;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        x = l, l = x.next, x.next = null, o.lastBaseUpdate = x, o.shared.pending = null;
      }
    } while (!0);
    if (f === null && (a = m), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = f, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        i |= o.lane, o = o.next;
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    Ho |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Xm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(Y(191, o));
      o.call(r);
    }
  }
}
var fl = {}, hr = po(fl), Ki = po(fl), Gi = po(fl);
function Oo(e) {
  if (e === fl) throw Error(Y(174));
  return e;
}
function rp(e, t) {
  switch (et(Gi, t), et(Ki, e), et(hr, fl), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : bd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = bd(t, e);
  }
  ot(hr), et(hr, t);
}
function zs() {
  ot(hr), ot(Ki), ot(Gi);
}
function Tv(e) {
  Oo(Gi.current);
  var t = Oo(hr.current), n = bd(t, e.type);
  t !== n && (et(Ki, e), et(hr, n));
}
function op(e) {
  Ki.current === e && (ot(hr), ot(Ki));
}
var ft = po(0);
function Da(e) {
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
var Bu = [];
function sp() {
  for (var e = 0; e < Bu.length; e++) Bu[e]._workInProgressVersionPrimary = null;
  Bu.length = 0;
}
var da = Ar.ReactCurrentDispatcher, Fu = Ar.ReactCurrentBatchConfig, Uo = 0, pt = null, Mt = null, Lt = null, _a = !1, Ei = !1, Yi = 0, mb = 0;
function Vt() {
  throw Error(Y(321));
}
function ip(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tr(e[n], t[n])) return !1;
  return !0;
}
function lp(e, t, n, r, o, s) {
  if (Uo = s, pt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, da.current = e === null || e.memoizedState === null ? vb : xb, e = n(r, o), Ei) {
    s = 0;
    do {
      if (Ei = !1, Yi = 0, 25 <= s) throw Error(Y(301));
      s += 1, Lt = Mt = null, t.updateQueue = null, da.current = Sb, e = n(r, o);
    } while (Ei);
  }
  if (da.current = Wa, t = Mt !== null && Mt.next !== null, Uo = 0, Lt = Mt = pt = null, _a = !1, t) throw Error(Y(300));
  return e;
}
function ap() {
  var e = Yi !== 0;
  return Yi = 0, e;
}
function ar() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Lt === null ? pt.memoizedState = Lt = e : Lt = Lt.next = e, Lt;
}
function zn() {
  if (Mt === null) {
    var e = pt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Mt.next;
  var t = Lt === null ? pt.memoizedState : Lt.next;
  if (t !== null) Lt = t, Mt = e;
  else {
    if (e === null) throw Error(Y(310));
    Mt = e, e = { memoizedState: Mt.memoizedState, baseState: Mt.baseState, baseQueue: Mt.baseQueue, queue: Mt.queue, next: null }, Lt === null ? pt.memoizedState = Lt = e : Lt = Lt.next = e;
  }
  return Lt;
}
function Qi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Du(e) {
  var t = zn(), n = t.queue;
  if (n === null) throw Error(Y(311));
  n.lastRenderedReducer = e;
  var r = Mt, o = r.baseQueue, s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      o.next = s.next, s.next = i;
    }
    r.baseQueue = o = s, n.pending = null;
  }
  if (o !== null) {
    s = o.next, r = r.baseState;
    var l = i = null, a = null, c = s;
    do {
      var f = c.lane;
      if ((Uo & f) === f) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: f,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = m, i = r) : a = a.next = m, pt.lanes |= f, Ho |= f;
      }
      c = c.next;
    } while (c !== null && c !== s);
    a === null ? i = r : a.next = l, tr(r, t.memoizedState) || (an = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      s = o.lane, pt.lanes |= s, Ho |= s, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _u(e) {
  var t = zn(), n = t.queue;
  if (n === null) throw Error(Y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = o = o.next;
    do
      s = e(s, i.action), i = i.next;
    while (i !== o);
    tr(s, t.memoizedState) || (an = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s;
  }
  return [s, r];
}
function Rv() {
}
function Pv(e, t) {
  var n = pt, r = zn(), o = t(), s = !tr(r.memoizedState, o);
  if (s && (r.memoizedState = o, an = !0), r = r.queue, cp($v.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || Lt !== null && Lt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Xi(9, Mv.bind(null, n, r, o, t), void 0, null), Ot === null) throw Error(Y(349));
    Uo & 30 || Iv(n, t, o);
  }
  return o;
}
function Iv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = pt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Mv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, jv(t) && Lv(e);
}
function $v(e, t, n) {
  return n(function() {
    jv(t) && Lv(e);
  });
}
function jv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tr(e, n);
  } catch {
    return !0;
  }
}
function Lv(e) {
  var t = $r(e, 1);
  t !== null && er(t, e, 1, -1);
}
function qm(e) {
  var t = ar();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Qi, lastRenderedState: e }, t.queue = e, e = e.dispatch = yb.bind(null, pt, e), [t.memoizedState, e];
}
function Xi(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = pt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, pt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ov() {
  return zn().memoizedState;
}
function fa(e, t, n, r) {
  var o = ar();
  pt.flags |= e, o.memoizedState = Xi(1 | t, n, void 0, r === void 0 ? null : r);
}
function mc(e, t, n, r) {
  var o = zn();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (Mt !== null) {
    var i = Mt.memoizedState;
    if (s = i.destroy, r !== null && ip(r, i.deps)) {
      o.memoizedState = Xi(t, n, s, r);
      return;
    }
  }
  pt.flags |= e, o.memoizedState = Xi(1 | t, n, s, r);
}
function Zm(e, t) {
  return fa(8390656, 8, e, t);
}
function cp(e, t) {
  return mc(2048, 8, e, t);
}
function Av(e, t) {
  return mc(4, 2, e, t);
}
function Nv(e, t) {
  return mc(4, 4, e, t);
}
function zv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Bv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, mc(4, 4, zv.bind(null, t, e), n);
}
function up() {
}
function Fv(e, t) {
  var n = zn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ip(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Dv(e, t) {
  var n = zn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ip(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function _v(e, t, n) {
  return Uo & 21 ? (tr(n, t) || (n = Ky(), pt.lanes |= n, Ho |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, an = !0), e.memoizedState = n);
}
function hb(e, t) {
  var n = Ge;
  Ge = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Fu.transition;
  Fu.transition = {};
  try {
    e(!1), t();
  } finally {
    Ge = n, Fu.transition = r;
  }
}
function Wv() {
  return zn().memoizedState;
}
function gb(e, t, n) {
  var r = ro(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Uv(e)) Hv(t, n);
  else if (n = kv(e, t, n, r), n !== null) {
    var o = Jt();
    er(n, e, r, o), Vv(n, t, r);
  }
}
function yb(e, t, n) {
  var r = ro(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Uv(e)) Hv(t, o);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
      var i = t.lastRenderedState, l = s(i, n);
      if (o.hasEagerState = !0, o.eagerState = l, tr(l, i)) {
        var a = t.interleaved;
        a === null ? (o.next = o, tp(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = kv(e, t, o, r), n !== null && (o = Jt(), er(n, e, r, o), Vv(n, t, r));
  }
}
function Uv(e) {
  var t = e.alternate;
  return e === pt || t !== null && t === pt;
}
function Hv(e, t) {
  Ei = _a = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Vv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, _f(e, n);
  }
}
var Wa = { readContext: Nn, useCallback: Vt, useContext: Vt, useEffect: Vt, useImperativeHandle: Vt, useInsertionEffect: Vt, useLayoutEffect: Vt, useMemo: Vt, useReducer: Vt, useRef: Vt, useState: Vt, useDebugValue: Vt, useDeferredValue: Vt, useTransition: Vt, useMutableSource: Vt, useSyncExternalStore: Vt, useId: Vt, unstable_isNewReconciler: !1 }, vb = { readContext: Nn, useCallback: function(e, t) {
  return ar().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Nn, useEffect: Zm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, fa(
    4194308,
    4,
    zv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return fa(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return fa(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = ar();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = ar();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = gb.bind(null, pt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = ar();
  return e = { current: e }, t.memoizedState = e;
}, useState: qm, useDebugValue: up, useDeferredValue: function(e) {
  return ar().memoizedState = e;
}, useTransition: function() {
  var e = qm(!1), t = e[0];
  return e = hb.bind(null, e[1]), ar().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = pt, o = ar();
  if (ut) {
    if (n === void 0) throw Error(Y(407));
    n = n();
  } else {
    if (n = t(), Ot === null) throw Error(Y(349));
    Uo & 30 || Iv(r, t, n);
  }
  o.memoizedState = n;
  var s = { value: n, getSnapshot: t };
  return o.queue = s, Zm($v.bind(
    null,
    r,
    s,
    e
  ), [e]), r.flags |= 2048, Xi(9, Mv.bind(null, r, s, n, t), void 0, null), n;
}, useId: function() {
  var e = ar(), t = Ot.identifierPrefix;
  if (ut) {
    var n = Rr, r = Tr;
    n = (r & ~(1 << 32 - Jn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Yi++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = mb++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, xb = {
  readContext: Nn,
  useCallback: Fv,
  useContext: Nn,
  useEffect: cp,
  useImperativeHandle: Bv,
  useInsertionEffect: Av,
  useLayoutEffect: Nv,
  useMemo: Dv,
  useReducer: Du,
  useRef: Ov,
  useState: function() {
    return Du(Qi);
  },
  useDebugValue: up,
  useDeferredValue: function(e) {
    var t = zn();
    return _v(t, Mt.memoizedState, e);
  },
  useTransition: function() {
    var e = Du(Qi)[0], t = zn().memoizedState;
    return [e, t];
  },
  useMutableSource: Rv,
  useSyncExternalStore: Pv,
  useId: Wv,
  unstable_isNewReconciler: !1
}, Sb = { readContext: Nn, useCallback: Fv, useContext: Nn, useEffect: cp, useImperativeHandle: Bv, useInsertionEffect: Av, useLayoutEffect: Nv, useMemo: Dv, useReducer: _u, useRef: Ov, useState: function() {
  return _u(Qi);
}, useDebugValue: up, useDeferredValue: function(e) {
  var t = zn();
  return Mt === null ? t.memoizedState = e : _v(t, Mt.memoizedState, e);
}, useTransition: function() {
  var e = _u(Qi)[0], t = zn().memoizedState;
  return [e, t];
}, useMutableSource: Rv, useSyncExternalStore: Pv, useId: Wv, unstable_isNewReconciler: !1 };
function Xn(e, t) {
  if (e && e.defaultProps) {
    t = ht({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Wd(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ht({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var hc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Xo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Jt(), o = ro(e), s = Pr(r, o);
  s.payload = t, n != null && (s.callback = n), t = to(e, s, o), t !== null && (er(t, e, o, r), ua(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Jt(), o = ro(e), s = Pr(r, o);
  s.tag = 1, s.payload = t, n != null && (s.callback = n), t = to(e, s, o), t !== null && (er(t, e, o, r), ua(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Jt(), r = ro(e), o = Pr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = to(e, o, r), t !== null && (er(t, e, r, n), ua(t, e, r));
} };
function Jm(e, t, n, r, o, s, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Wi(n, r) || !Wi(o, s) : !0;
}
function Kv(e, t, n) {
  var r = !1, o = lo, s = t.contextType;
  return typeof s == "object" && s !== null ? s = Nn(s) : (o = un(t) ? _o : Qt.current, r = t.contextTypes, s = (r = r != null) ? Os(e, o) : lo), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = hc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = s), t;
}
function eh(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && hc.enqueueReplaceState(t, t.state, null);
}
function Ud(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, np(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? o.context = Nn(s) : (s = un(t) ? _o : Qt.current, o.context = Os(e, s)), o.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Wd(e, t, s, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && hc.enqueueReplaceState(o, o.state, null), Fa(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Bs(e, t) {
  try {
    var n = "", r = t;
    do
      n += Y1(r), r = r.return;
    while (r);
    var o = n;
  } catch (s) {
    o = `
Error generating stack: ` + s.message + `
` + s.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Wu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var bb = typeof WeakMap == "function" ? WeakMap : Map;
function Gv(e, t, n) {
  n = Pr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ha || (Ha = !0, ef = r), Hd(e, t);
  }, n;
}
function Yv(e, t, n) {
  n = Pr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Hd(e, t);
    };
  }
  var s = e.stateNode;
  return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
    Hd(e, t), typeof r != "function" && (no === null ? no = /* @__PURE__ */ new Set([this]) : no.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function th(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bb();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = Ab.bind(null, e, t, n), t.then(e, e));
}
function nh(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function rh(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pr(-1, 1), t.tag = 2, to(n, t, 1))), n.lanes |= 1), e);
}
var wb = Ar.ReactCurrentOwner, an = !1;
function qt(e, t, n, r) {
  t.child = e === null ? Cv(t, null, n, r) : Ns(t, e.child, n, r);
}
function oh(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return Rs(t, o), r = lp(e, t, n, r, s, o), n = ap(), e !== null && !an ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (ut && n && Qf(t), t.flags |= 1, qt(e, t, r, o), t.child);
}
function sh(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" && !vp(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Qv(e, t, s, r, o)) : (e = ga(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (s = e.child, !(e.lanes & o)) {
    var i = s.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wi, n(i, r) && e.ref === t.ref) return jr(e, t, o);
  }
  return t.flags |= 1, e = oo(s, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Qv(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Wi(s, r) && e.ref === t.ref) if (an = !1, t.pendingProps = r = s, (e.lanes & o) !== 0) e.flags & 131072 && (an = !0);
    else return t.lanes = e.lanes, jr(e, t, o);
  }
  return Vd(e, t, n, r, o);
}
function Xv(e, t, n) {
  var r = t.pendingProps, o = r.children, s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(bs, gn), gn |= n;
  else {
    if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, et(bs, gn), gn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = s !== null ? s.baseLanes : n, et(bs, gn), gn |= r;
  }
  else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, et(bs, gn), gn |= r;
  return qt(e, t, o, n), t.child;
}
function qv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vd(e, t, n, r, o) {
  var s = un(n) ? _o : Qt.current;
  return s = Os(t, s), Rs(t, o), n = lp(e, t, n, r, s, o), r = ap(), e !== null && !an ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, jr(e, t, o)) : (ut && r && Qf(t), t.flags |= 1, qt(e, t, n, o), t.child);
}
function ih(e, t, n, r, o) {
  if (un(n)) {
    var s = !0;
    Oa(t);
  } else s = !1;
  if (Rs(t, o), t.stateNode === null) pa(e, t), Kv(t, n, r), Ud(t, n, r, o), r = !0;
  else if (e === null) {
    var i = t.stateNode, l = t.memoizedProps;
    i.props = l;
    var a = i.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Nn(c) : (c = un(n) ? _o : Qt.current, c = Os(t, c));
    var f = n.getDerivedStateFromProps, m = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== r || a !== c) && eh(t, i, r, c), Kr = !1;
    var x = t.memoizedState;
    i.state = x, Fa(t, r, i, o), a = t.memoizedState, l !== r || x !== a || cn.current || Kr ? (typeof f == "function" && (Wd(t, n, f, r), a = t.memoizedState), (l = Kr || Jm(t, n, l, r, x, a, c)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), i.props = r, i.state = a, i.context = c, r = l) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Ev(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Xn(t.type, l), i.props = c, m = t.pendingProps, x = i.context, a = n.contextType, typeof a == "object" && a !== null ? a = Nn(a) : (a = un(n) ? _o : Qt.current, a = Os(t, a));
    var d = n.getDerivedStateFromProps;
    (f = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (l !== m || x !== a) && eh(t, i, r, a), Kr = !1, x = t.memoizedState, i.state = x, Fa(t, r, i, o);
    var v = t.memoizedState;
    l !== m || x !== v || cn.current || Kr ? (typeof d == "function" && (Wd(t, n, d, r), v = t.memoizedState), (c = Kr || Jm(t, n, c, r, x, v, a) || !1) ? (f || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, v, a), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, v, a)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), i.props = r, i.state = v, i.context = a, r = c) : (typeof i.componentDidUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Kd(e, t, n, r, s, o);
}
function Kd(e, t, n, r, o, s) {
  qv(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && Vm(t, n, !1), jr(e, t, s);
  r = t.stateNode, wb.current = t;
  var l = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = Ns(t, e.child, null, s), t.child = Ns(t, null, l, s)) : qt(e, t, l, s), t.memoizedState = r.state, o && Vm(t, n, !0), t.child;
}
function Zv(e) {
  var t = e.stateNode;
  t.pendingContext ? Hm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Hm(e, t.context, !1), rp(e, t.containerInfo);
}
function lh(e, t, n, r, o) {
  return As(), qf(o), t.flags |= 256, qt(e, t, n, r), t.child;
}
var Gd = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Jv(e, t, n) {
  var r = t.pendingProps, o = ft.current, s = !1, i = (t.flags & 128) !== 0, l;
  if ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), et(ft, o & 1), e === null)
    return Dd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = { mode: "hidden", children: i }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = vc(i, r, 0, null), e = zo(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Yd(n), t.memoizedState = Gd, e) : dp(t, i));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return Cb(e, t, i, r, l, o, n);
  if (s) {
    s = r.fallback, i = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = oo(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? s = oo(l, s) : (s = zo(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Yd(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Gd, r;
  }
  return s = e.child, e = s.sibling, r = oo(s, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function dp(e, t) {
  return t = vc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _l(e, t, n, r) {
  return r !== null && qf(r), Ns(t, e.child, null, n), e = dp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Cb(e, t, n, r, o, s, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Wu(Error(Y(422))), _l(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, o = t.mode, r = vc({ mode: "visible", children: r.children }, o, 0, null), s = zo(s, o, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && Ns(t, e.child, null, i), t.child.memoizedState = Yd(i), t.memoizedState = Gd, s);
  if (!(t.mode & 1)) return _l(e, t, i, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, s = Error(Y(419)), r = Wu(s, r, void 0), _l(e, t, i, r);
  }
  if (l = (i & e.childLanes) !== 0, an || l) {
    if (r = Ot, r !== null) {
      switch (i & -i) {
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
      o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== s.retryLane && (s.retryLane = o, $r(e, o), er(r, e, o, -1));
    }
    return yp(), r = Wu(Error(Y(421))), _l(e, t, i, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Nb.bind(null, e), o._reactRetry = t, null) : (e = s.treeContext, xn = eo(o.nextSibling), Sn = t, ut = !0, Zn = null, e !== null && (In[Mn++] = Tr, In[Mn++] = Rr, In[Mn++] = Wo, Tr = e.id, Rr = e.overflow, Wo = t), t = dp(t, r.children), t.flags |= 4096, t);
}
function ah(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _d(e.return, t, n);
}
function Uu(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = o);
}
function e0(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, s = r.tail;
  if (qt(e, t, r.children, n), r = ft.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ah(e, n, t);
      else if (e.tag === 19) ah(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && Da(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Uu(t, !1, o, n, s);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && Da(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Uu(t, !0, n, null, s);
      break;
    case "together":
      Uu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function pa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function jr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ho |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(Y(153));
  if (t.child !== null) {
    for (e = t.child, n = oo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = oo(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function kb(e, t, n) {
  switch (t.tag) {
    case 3:
      Zv(t), As();
      break;
    case 5:
      Tv(t);
      break;
    case 1:
      un(t.type) && Oa(t);
      break;
    case 4:
      rp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      et(za, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (et(ft, ft.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Jv(e, t, n) : (et(ft, ft.current & 1), e = jr(e, t, n), e !== null ? e.sibling : null);
      et(ft, ft.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return e0(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), et(ft, ft.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Xv(e, t, n);
  }
  return jr(e, t, n);
}
var t0, Qd, n0, r0;
t0 = function(e, t) {
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
Qd = function() {
};
n0 = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Oo(hr.current);
    var s = null;
    switch (n) {
      case "input":
        o = yd(e, o), r = yd(e, r), s = [];
        break;
      case "select":
        o = ht({}, o, { value: void 0 }), r = ht({}, r, { value: void 0 }), s = [];
        break;
      case "textarea":
        o = Sd(e, o), r = Sd(e, r), s = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ja);
    }
    wd(n, r);
    var i;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Ai.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (i in l) !l.hasOwnProperty(i) || a && a.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in a) a.hasOwnProperty(i) && l[i] !== a[i] && (n || (n = {}), n[i] = a[i]);
      } else n || (s || (s = []), s.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (s = s || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Ai.hasOwnProperty(c) ? (a != null && c === "onScroll" && rt("scroll", e), s || l === a || (s = [])) : (s = s || []).push(c, a));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
r0 = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function si(e, t) {
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
function Kt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Eb(e, t, n) {
  var r = t.pendingProps;
  switch (Xf(t), t.tag) {
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
      return Kt(t), null;
    case 1:
      return un(t.type) && La(), Kt(t), null;
    case 3:
      return r = t.stateNode, zs(), ot(cn), ot(Qt), sp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Fl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zn !== null && (rf(Zn), Zn = null))), Qd(e, t), Kt(t), null;
    case 5:
      op(t);
      var o = Oo(Gi.current);
      if (n = t.type, e !== null && t.stateNode != null) n0(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(Y(166));
          return Kt(t), null;
        }
        if (e = Oo(hr.current), Fl(t)) {
          r = t.stateNode, n = t.type;
          var s = t.memoizedProps;
          switch (r[dr] = t, r[Vi] = s, e = (t.mode & 1) !== 0, n) {
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
              for (o = 0; o < gi.length; o++) rt(gi[o], r);
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
              ym(r, s), rt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!s.multiple }, rt("invalid", r);
              break;
            case "textarea":
              xm(r, s), rt("invalid", r);
          }
          wd(n, s), o = null;
          for (var i in s) if (s.hasOwnProperty(i)) {
            var l = s[i];
            i === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Bl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Bl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Ai.hasOwnProperty(i) && l != null && i === "onScroll" && rt("scroll", r);
          }
          switch (n) {
            case "input":
              Ml(r), vm(r, s, !0);
              break;
            case "textarea":
              Ml(r), Sm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ja);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $y(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[dr] = t, e[Vi] = r, t0(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Cd(n, r), n) {
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
                for (o = 0; o < gi.length; o++) rt(gi[o], e);
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
                ym(e, r), o = yd(e, r), rt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ht({}, r, { value: void 0 }), rt("invalid", e);
                break;
              case "textarea":
                xm(e, r), o = Sd(e, r), rt("invalid", e);
                break;
              default:
                o = r;
            }
            wd(n, o), l = o;
            for (s in l) if (l.hasOwnProperty(s)) {
              var a = l[s];
              s === "style" ? Oy(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && jy(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ni(e, a) : typeof a == "number" && Ni(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Ai.hasOwnProperty(s) ? a != null && s === "onScroll" && rt("scroll", e) : a != null && Af(e, s, a, i));
            }
            switch (n) {
              case "input":
                Ml(e), vm(e, r, !1);
                break;
              case "textarea":
                Ml(e), Sm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + io(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, s = r.value, s != null ? Cs(e, !!r.multiple, s, !1) : r.defaultValue != null && Cs(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ja);
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
      return Kt(t), null;
    case 6:
      if (e && t.stateNode != null) r0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(Y(166));
        if (n = Oo(Gi.current), Oo(hr.current), Fl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[dr] = t, (s = r.nodeValue !== n) && (e = Sn, e !== null)) switch (e.tag) {
            case 3:
              Bl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Bl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          s && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dr] = t, t.stateNode = r;
      }
      return Kt(t), null;
    case 13:
      if (ot(ft), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ut && xn !== null && t.mode & 1 && !(t.flags & 128)) bv(), As(), t.flags |= 98560, s = !1;
        else if (s = Fl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!s) throw Error(Y(318));
            if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(Y(317));
            s[dr] = t;
          } else As(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Kt(t), s = !1;
        } else Zn !== null && (rf(Zn), Zn = null), s = !0;
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ft.current & 1 ? $t === 0 && ($t = 3) : yp())), t.updateQueue !== null && (t.flags |= 4), Kt(t), null);
    case 4:
      return zs(), Qd(e, t), e === null && Ui(t.stateNode.containerInfo), Kt(t), null;
    case 10:
      return ep(t.type._context), Kt(t), null;
    case 17:
      return un(t.type) && La(), Kt(t), null;
    case 19:
      if (ot(ft), s = t.memoizedState, s === null) return Kt(t), null;
      if (r = (t.flags & 128) !== 0, i = s.rendering, i === null) if (r) si(s, !1);
      else {
        if ($t !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = Da(e), i !== null) {
            for (t.flags |= 128, si(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return et(ft, ft.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        s.tail !== null && St() > Fs && (t.flags |= 128, r = !0, si(s, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Da(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), si(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !ut) return Kt(t), null;
        } else 2 * St() - s.renderingStartTime > Fs && n !== 1073741824 && (t.flags |= 128, r = !0, si(s, !1), t.lanes = 4194304);
        s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i);
      }
      return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = St(), t.sibling = null, n = ft.current, et(ft, r ? n & 1 | 2 : n & 1), t) : (Kt(t), null);
    case 22:
    case 23:
      return gp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? gn & 1073741824 && (Kt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Kt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Y(156, t.tag));
}
function Tb(e, t) {
  switch (Xf(t), t.tag) {
    case 1:
      return un(t.type) && La(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return zs(), ot(cn), ot(Qt), sp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return op(t), null;
    case 13:
      if (ot(ft), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(Y(340));
        As();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ot(ft), null;
    case 4:
      return zs(), null;
    case 10:
      return ep(t.type._context), null;
    case 22:
    case 23:
      return gp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1, Yt = !1, Rb = typeof WeakSet == "function" ? WeakSet : Set, re = null;
function Ss(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    yt(e, t, r);
  }
  else n.current = null;
}
function Xd(e, t, n) {
  try {
    n();
  } catch (r) {
    yt(e, t, r);
  }
}
var ch = !1;
function Pb(e, t) {
  if (Ld = Ia, e = av(), Yf(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, s = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, s.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, l = -1, a = -1, c = 0, f = 0, m = e, x = null;
        t: for (; ; ) {
          for (var d; m !== n || o !== 0 && m.nodeType !== 3 || (l = i + o), m !== s || r !== 0 && m.nodeType !== 3 || (a = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (d = m.firstChild) !== null; )
            x = m, m = d;
          for (; ; ) {
            if (m === e) break t;
            if (x === n && ++c === o && (l = i), x === s && ++f === r && (a = i), (d = m.nextSibling) !== null) break;
            m = x, x = m.parentNode;
          }
          m = d;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Od = { focusedElem: e, selectionRange: n }, Ia = !1, re = t; re !== null; ) if (t = re, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, re = e;
  else for (; re !== null; ) {
    t = re;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var b = v.memoizedProps, C = v.memoizedState, g = t.stateNode, h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Xn(t.type, b), C);
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
          throw Error(Y(163));
      }
    } catch (w) {
      yt(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, re = e;
      break;
    }
    re = t.return;
  }
  return v = ch, ch = !1, v;
}
function Ti(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        o.destroy = void 0, s !== void 0 && Xd(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function gc(e, t) {
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
function qd(e) {
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
function o0(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, o0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dr], delete t[Vi], delete t[zd], delete t[ub], delete t[db])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function s0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || s0(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ja));
  else if (r !== 4 && (e = e.child, e !== null)) for (Zd(e, t, n), e = e.sibling; e !== null; ) Zd(e, t, n), e = e.sibling;
}
function Jd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Jd(e, t, n), e = e.sibling; e !== null; ) Jd(e, t, n), e = e.sibling;
}
var zt = null, qn = !1;
function Wr(e, t, n) {
  for (n = n.child; n !== null; ) i0(e, t, n), n = n.sibling;
}
function i0(e, t, n) {
  if (mr && typeof mr.onCommitFiberUnmount == "function") try {
    mr.onCommitFiberUnmount(ac, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Yt || Ss(n, t);
    case 6:
      var r = zt, o = qn;
      zt = null, Wr(e, t, n), zt = r, qn = o, zt !== null && (qn ? (e = zt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : zt.removeChild(n.stateNode));
      break;
    case 18:
      zt !== null && (qn ? (e = zt, n = n.stateNode, e.nodeType === 8 ? Nu(e.parentNode, n) : e.nodeType === 1 && Nu(e, n), Di(e)) : Nu(zt, n.stateNode));
      break;
    case 4:
      r = zt, o = qn, zt = n.stateNode.containerInfo, qn = !0, Wr(e, t, n), zt = r, qn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Yt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var s = o, i = s.destroy;
          s = s.tag, i !== void 0 && (s & 2 || s & 4) && Xd(n, t, i), o = o.next;
        } while (o !== r);
      }
      Wr(e, t, n);
      break;
    case 1:
      if (!Yt && (Ss(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        yt(n, t, l);
      }
      Wr(e, t, n);
      break;
    case 21:
      Wr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Yt = (r = Yt) || n.memoizedState !== null, Wr(e, t, n), Yt = r) : Wr(e, t, n);
      break;
    default:
      Wr(e, t, n);
  }
}
function dh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Rb()), t.forEach(function(r) {
      var o = zb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Hn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var s = e, i = t, l = i;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            zt = l.stateNode, qn = !1;
            break e;
          case 3:
            zt = l.stateNode.containerInfo, qn = !0;
            break e;
          case 4:
            zt = l.stateNode.containerInfo, qn = !0;
            break e;
        }
        l = l.return;
      }
      if (zt === null) throw Error(Y(160));
      i0(s, i, o), zt = null, qn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      yt(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) l0(t, e), t = t.sibling;
}
function l0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Hn(t, e), sr(e), r & 4) {
        try {
          Ti(3, e, e.return), gc(3, e);
        } catch (b) {
          yt(e, e.return, b);
        }
        try {
          Ti(5, e, e.return);
        } catch (b) {
          yt(e, e.return, b);
        }
      }
      break;
    case 1:
      Hn(t, e), sr(e), r & 512 && n !== null && Ss(n, n.return);
      break;
    case 5:
      if (Hn(t, e), sr(e), r & 512 && n !== null && Ss(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ni(o, "");
        } catch (b) {
          yt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var s = e.memoizedProps, i = n !== null ? n.memoizedProps : s, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && s.type === "radio" && s.name != null && Iy(o, s), Cd(l, i);
          var c = Cd(l, s);
          for (i = 0; i < a.length; i += 2) {
            var f = a[i], m = a[i + 1];
            f === "style" ? Oy(o, m) : f === "dangerouslySetInnerHTML" ? jy(o, m) : f === "children" ? Ni(o, m) : Af(o, f, m, c);
          }
          switch (l) {
            case "input":
              vd(o, s);
              break;
            case "textarea":
              My(o, s);
              break;
            case "select":
              var x = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!s.multiple;
              var d = s.value;
              d != null ? Cs(o, !!s.multiple, d, !1) : x !== !!s.multiple && (s.defaultValue != null ? Cs(
                o,
                !!s.multiple,
                s.defaultValue,
                !0
              ) : Cs(o, !!s.multiple, s.multiple ? [] : "", !1));
          }
          o[Vi] = s;
        } catch (b) {
          yt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Hn(t, e), sr(e), r & 4) {
        if (e.stateNode === null) throw Error(Y(162));
        o = e.stateNode, s = e.memoizedProps;
        try {
          o.nodeValue = s;
        } catch (b) {
          yt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Hn(t, e), sr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Di(t.containerInfo);
      } catch (b) {
        yt(e, e.return, b);
      }
      break;
    case 4:
      Hn(t, e), sr(e);
      break;
    case 13:
      Hn(t, e), sr(e), o = e.child, o.flags & 8192 && (s = o.memoizedState !== null, o.stateNode.isHidden = s, !s || o.alternate !== null && o.alternate.memoizedState !== null || (mp = St())), r & 4 && dh(e);
      break;
    case 22:
      if (f = n !== null && n.memoizedState !== null, e.mode & 1 ? (Yt = (c = Yt) || f, Hn(t, e), Yt = c) : Hn(t, e), sr(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !f && e.mode & 1) for (re = e, f = e.child; f !== null; ) {
          for (m = re = f; re !== null; ) {
            switch (x = re, d = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Ti(4, x, x.return);
                break;
              case 1:
                Ss(x, x.return);
                var v = x.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = x, n = x.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (b) {
                    yt(r, n, b);
                  }
                }
                break;
              case 5:
                Ss(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  ph(m);
                  continue;
                }
            }
            d !== null ? (d.return = x, re = d) : ph(m);
          }
          f = f.sibling;
        }
        e: for (f = null, m = e; ; ) {
          if (m.tag === 5) {
            if (f === null) {
              f = m;
              try {
                o = m.stateNode, c ? (s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = m.stateNode, a = m.memoizedProps.style, i = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Ly("display", i));
              } catch (b) {
                yt(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (f === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (b) {
              yt(e, e.return, b);
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
      Hn(t, e), sr(e), r & 4 && dh(e);
      break;
    case 21:
      break;
    default:
      Hn(
        t,
        e
      ), sr(e);
  }
}
function sr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (s0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Y(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Ni(o, ""), r.flags &= -33);
          var s = uh(e);
          Jd(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, l = uh(e);
          Zd(e, l, i);
          break;
        default:
          throw Error(Y(161));
      }
    } catch (a) {
      yt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ib(e, t, n) {
  re = e, a0(e);
}
function a0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; re !== null; ) {
    var o = re, s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || Wl;
      if (!i) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Yt;
        l = Wl;
        var c = Yt;
        if (Wl = i, (Yt = a) && !c) for (re = o; re !== null; ) i = re, a = i.child, i.tag === 22 && i.memoizedState !== null ? mh(o) : a !== null ? (a.return = i, re = a) : mh(o);
        for (; s !== null; ) re = s, a0(s), s = s.sibling;
        re = o, Wl = l, Yt = c;
      }
      fh(e);
    } else o.subtreeFlags & 8772 && s !== null ? (s.return = o, re = s) : fh(e);
  }
}
function fh(e) {
  for (; re !== null; ) {
    var t = re;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Yt || gc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Yt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Xn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var s = t.updateQueue;
            s !== null && Xm(t, s, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Xm(t, i, n);
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
                var f = c.memoizedState;
                if (f !== null) {
                  var m = f.dehydrated;
                  m !== null && Di(m);
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
            throw Error(Y(163));
        }
        Yt || t.flags & 512 && qd(t);
      } catch (x) {
        yt(t, t.return, x);
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
function ph(e) {
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
function mh(e) {
  for (; re !== null; ) {
    var t = re;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            gc(4, t);
          } catch (a) {
            yt(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              yt(t, o, a);
            }
          }
          var s = t.return;
          try {
            qd(t);
          } catch (a) {
            yt(t, s, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            qd(t);
          } catch (a) {
            yt(t, i, a);
          }
      }
    } catch (a) {
      yt(t, t.return, a);
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
var Mb = Math.ceil, Ua = Ar.ReactCurrentDispatcher, fp = Ar.ReactCurrentOwner, On = Ar.ReactCurrentBatchConfig, ze = 0, Ot = null, It = null, _t = 0, gn = 0, bs = po(0), $t = 0, qi = null, Ho = 0, yc = 0, pp = 0, Ri = null, ln = null, mp = 0, Fs = 1 / 0, Cr = null, Ha = !1, ef = null, no = null, Ul = !1, Xr = null, Va = 0, Pi = 0, tf = null, ma = -1, ha = 0;
function Jt() {
  return ze & 6 ? St() : ma !== -1 ? ma : ma = St();
}
function ro(e) {
  return e.mode & 1 ? ze & 2 && _t !== 0 ? _t & -_t : pb.transition !== null ? (ha === 0 && (ha = Ky()), ha) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jy(e.type)), e) : 1;
}
function er(e, t, n, r) {
  if (50 < Pi) throw Pi = 0, tf = null, Error(Y(185));
  cl(e, n, r), (!(ze & 2) || e !== Ot) && (e === Ot && (!(ze & 2) && (yc |= n), $t === 4 && Yr(e, _t)), dn(e, r), n === 1 && ze === 0 && !(t.mode & 1) && (Fs = St() + 500, pc && mo()));
}
function dn(e, t) {
  var n = e.callbackNode;
  pS(e, t);
  var r = Pa(e, e === Ot ? _t : 0);
  if (r === 0) n !== null && Cm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Cm(n), t === 1) e.tag === 0 ? fb(hh.bind(null, e)) : vv(hh.bind(null, e)), ab(function() {
      !(ze & 6) && mo();
    }), n = null;
    else {
      switch (Gy(r)) {
        case 1:
          n = Df;
          break;
        case 4:
          n = Hy;
          break;
        case 16:
          n = Ra;
          break;
        case 536870912:
          n = Vy;
          break;
        default:
          n = Ra;
      }
      n = g0(n, c0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function c0(e, t) {
  if (ma = -1, ha = 0, ze & 6) throw Error(Y(327));
  var n = e.callbackNode;
  if (Ps() && e.callbackNode !== n) return null;
  var r = Pa(e, e === Ot ? _t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ka(e, r);
  else {
    t = r;
    var o = ze;
    ze |= 2;
    var s = d0();
    (Ot !== e || _t !== t) && (Cr = null, Fs = St() + 500, No(e, t));
    do
      try {
        Lb();
        break;
      } catch (l) {
        u0(e, l);
      }
    while (!0);
    Jf(), Ua.current = s, ze = o, It !== null ? t = 0 : (Ot = null, _t = 0, t = $t);
  }
  if (t !== 0) {
    if (t === 2 && (o = Pd(e), o !== 0 && (r = o, t = nf(e, o))), t === 1) throw n = qi, No(e, 0), Yr(e, r), dn(e, St()), n;
    if (t === 6) Yr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !$b(o) && (t = Ka(e, r), t === 2 && (s = Pd(e), s !== 0 && (r = s, t = nf(e, s))), t === 1)) throw n = qi, No(e, 0), Yr(e, r), dn(e, St()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(Y(345));
        case 2:
          Io(e, ln, Cr);
          break;
        case 3:
          if (Yr(e, r), (r & 130023424) === r && (t = mp + 500 - St(), 10 < t)) {
            if (Pa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Jt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Nd(Io.bind(null, e, ln, Cr), t);
            break;
          }
          Io(e, ln, Cr);
          break;
        case 4:
          if (Yr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - Jn(r);
            s = 1 << i, i = t[i], i > o && (o = i), r &= ~s;
          }
          if (r = o, r = St() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Mb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Nd(Io.bind(null, e, ln, Cr), r);
            break;
          }
          Io(e, ln, Cr);
          break;
        case 5:
          Io(e, ln, Cr);
          break;
        default:
          throw Error(Y(329));
      }
    }
  }
  return dn(e, St()), e.callbackNode === n ? c0.bind(null, e) : null;
}
function nf(e, t) {
  var n = Ri;
  return e.current.memoizedState.isDehydrated && (No(e, t).flags |= 256), e = Ka(e, t), e !== 2 && (t = ln, ln = n, t !== null && rf(t)), e;
}
function rf(e) {
  ln === null ? ln = e : ln.push.apply(ln, e);
}
function $b(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], s = o.getSnapshot;
        o = o.value;
        try {
          if (!tr(s(), o)) return !1;
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
function Yr(e, t) {
  for (t &= ~pp, t &= ~yc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Jn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function hh(e) {
  if (ze & 6) throw Error(Y(327));
  Ps();
  var t = Pa(e, 0);
  if (!(t & 1)) return dn(e, St()), null;
  var n = Ka(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pd(e);
    r !== 0 && (t = r, n = nf(e, r));
  }
  if (n === 1) throw n = qi, No(e, 0), Yr(e, t), dn(e, St()), n;
  if (n === 6) throw Error(Y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Io(e, ln, Cr), dn(e, St()), null;
}
function hp(e, t) {
  var n = ze;
  ze |= 1;
  try {
    return e(t);
  } finally {
    ze = n, ze === 0 && (Fs = St() + 500, pc && mo());
  }
}
function Vo(e) {
  Xr !== null && Xr.tag === 0 && !(ze & 6) && Ps();
  var t = ze;
  ze |= 1;
  var n = On.transition, r = Ge;
  try {
    if (On.transition = null, Ge = 1, e) return e();
  } finally {
    Ge = r, On.transition = n, ze = t, !(ze & 6) && mo();
  }
}
function gp() {
  gn = bs.current, ot(bs);
}
function No(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, lb(n)), It !== null) for (n = It.return; n !== null; ) {
    var r = n;
    switch (Xf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && La();
        break;
      case 3:
        zs(), ot(cn), ot(Qt), sp();
        break;
      case 5:
        op(r);
        break;
      case 4:
        zs();
        break;
      case 13:
        ot(ft);
        break;
      case 19:
        ot(ft);
        break;
      case 10:
        ep(r.type._context);
        break;
      case 22:
      case 23:
        gp();
    }
    n = n.return;
  }
  if (Ot = e, It = e = oo(e.current, null), _t = gn = t, $t = 0, qi = null, pp = yc = Ho = 0, ln = Ri = null, Lo !== null) {
    for (t = 0; t < Lo.length; t++) if (n = Lo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, s = n.pending;
      if (s !== null) {
        var i = s.next;
        s.next = o, r.next = i;
      }
      n.pending = r;
    }
    Lo = null;
  }
  return e;
}
function u0(e, t) {
  do {
    var n = It;
    try {
      if (Jf(), da.current = Wa, _a) {
        for (var r = pt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        _a = !1;
      }
      if (Uo = 0, Lt = Mt = pt = null, Ei = !1, Yi = 0, fp.current = null, n === null || n.return === null) {
        $t = 1, qi = t, It = null;
        break;
      }
      e: {
        var s = e, i = n.return, l = n, a = t;
        if (t = _t, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, f = l, m = f.tag;
          if (!(f.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var x = f.alternate;
            x ? (f.updateQueue = x.updateQueue, f.memoizedState = x.memoizedState, f.lanes = x.lanes) : (f.updateQueue = null, f.memoizedState = null);
          }
          var d = nh(i);
          if (d !== null) {
            d.flags &= -257, rh(d, i, l, s, t), d.mode & 1 && th(s, c, t), t = d, a = c;
            var v = t.updateQueue;
            if (v === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              th(s, c, t), yp();
              break e;
            }
            a = Error(Y(426));
          }
        } else if (ut && l.mode & 1) {
          var C = nh(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), rh(C, i, l, s, t), qf(Bs(a, l));
            break e;
          }
        }
        s = a = Bs(a, l), $t !== 4 && ($t = 2), Ri === null ? Ri = [s] : Ri.push(s), s = i;
        do {
          switch (s.tag) {
            case 3:
              s.flags |= 65536, t &= -t, s.lanes |= t;
              var g = Gv(s, a, t);
              Qm(s, g);
              break e;
            case 1:
              l = a;
              var h = s.type, S = s.stateNode;
              if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (no === null || !no.has(S)))) {
                s.flags |= 65536, t &= -t, s.lanes |= t;
                var w = Yv(s, l, t);
                Qm(s, w);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      p0(n);
    } catch (R) {
      t = R, It === n && n !== null && (It = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function d0() {
  var e = Ua.current;
  return Ua.current = Wa, e === null ? Wa : e;
}
function yp() {
  ($t === 0 || $t === 3 || $t === 2) && ($t = 4), Ot === null || !(Ho & 268435455) && !(yc & 268435455) || Yr(Ot, _t);
}
function Ka(e, t) {
  var n = ze;
  ze |= 2;
  var r = d0();
  (Ot !== e || _t !== t) && (Cr = null, No(e, t));
  do
    try {
      jb();
      break;
    } catch (o) {
      u0(e, o);
    }
  while (!0);
  if (Jf(), ze = n, Ua.current = r, It !== null) throw Error(Y(261));
  return Ot = null, _t = 0, $t;
}
function jb() {
  for (; It !== null; ) f0(It);
}
function Lb() {
  for (; It !== null && !oS(); ) f0(It);
}
function f0(e) {
  var t = h0(e.alternate, e, gn);
  e.memoizedProps = e.pendingProps, t === null ? p0(e) : It = t, fp.current = null;
}
function p0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Tb(n, t), n !== null) {
        n.flags &= 32767, It = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        $t = 6, It = null;
        return;
      }
    } else if (n = Eb(n, t, gn), n !== null) {
      It = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      It = t;
      return;
    }
    It = t = e;
  } while (t !== null);
  $t === 0 && ($t = 5);
}
function Io(e, t, n) {
  var r = Ge, o = On.transition;
  try {
    On.transition = null, Ge = 1, Ob(e, t, n, r);
  } finally {
    On.transition = o, Ge = r;
  }
  return null;
}
function Ob(e, t, n, r) {
  do
    Ps();
  while (Xr !== null);
  if (ze & 6) throw Error(Y(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(Y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var s = n.lanes | n.childLanes;
  if (mS(e, s), e === Ot && (It = Ot = null, _t = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ul || (Ul = !0, g0(Ra, function() {
    return Ps(), null;
  })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
    s = On.transition, On.transition = null;
    var i = Ge;
    Ge = 1;
    var l = ze;
    ze |= 4, fp.current = null, Pb(e, n), l0(n, e), eb(Od), Ia = !!Ld, Od = Ld = null, e.current = n, Ib(n), sS(), ze = l, Ge = i, On.transition = s;
  } else e.current = n;
  if (Ul && (Ul = !1, Xr = e, Va = o), s = e.pendingLanes, s === 0 && (no = null), aS(n.stateNode), dn(e, St()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ha) throw Ha = !1, e = ef, ef = null, e;
  return Va & 1 && e.tag !== 0 && Ps(), s = e.pendingLanes, s & 1 ? e === tf ? Pi++ : (Pi = 0, tf = e) : Pi = 0, mo(), null;
}
function Ps() {
  if (Xr !== null) {
    var e = Gy(Va), t = On.transition, n = Ge;
    try {
      if (On.transition = null, Ge = 16 > e ? 16 : e, Xr === null) var r = !1;
      else {
        if (e = Xr, Xr = null, Va = 0, ze & 6) throw Error(Y(331));
        var o = ze;
        for (ze |= 4, re = e.current; re !== null; ) {
          var s = re, i = s.child;
          if (re.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var c = l[a];
                for (re = c; re !== null; ) {
                  var f = re;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ti(8, f, s);
                  }
                  var m = f.child;
                  if (m !== null) m.return = f, re = m;
                  else for (; re !== null; ) {
                    f = re;
                    var x = f.sibling, d = f.return;
                    if (o0(f), f === c) {
                      re = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = d, re = x;
                      break;
                    }
                    re = d;
                  }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var b = v.child;
                if (b !== null) {
                  v.child = null;
                  do {
                    var C = b.sibling;
                    b.sibling = null, b = C;
                  } while (b !== null);
                }
              }
              re = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) i.return = s, re = i;
          else e: for (; re !== null; ) {
            if (s = re, s.flags & 2048) switch (s.tag) {
              case 0:
              case 11:
              case 15:
                Ti(9, s, s.return);
            }
            var g = s.sibling;
            if (g !== null) {
              g.return = s.return, re = g;
              break e;
            }
            re = s.return;
          }
        }
        var h = e.current;
        for (re = h; re !== null; ) {
          i = re;
          var S = i.child;
          if (i.subtreeFlags & 2064 && S !== null) S.return = i, re = S;
          else e: for (i = h; re !== null; ) {
            if (l = re, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  gc(9, l);
              }
            } catch (R) {
              yt(l, l.return, R);
            }
            if (l === i) {
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
        if (ze = o, mo(), mr && typeof mr.onPostCommitFiberRoot == "function") try {
          mr.onPostCommitFiberRoot(ac, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ge = n, On.transition = t;
    }
  }
  return !1;
}
function gh(e, t, n) {
  t = Bs(n, t), t = Gv(e, t, 1), e = to(e, t, 1), t = Jt(), e !== null && (cl(e, 1, t), dn(e, t));
}
function yt(e, t, n) {
  if (e.tag === 3) gh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      gh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (no === null || !no.has(r))) {
        e = Bs(n, e), e = Yv(t, e, 1), t = to(t, e, 1), e = Jt(), t !== null && (cl(t, 1, e), dn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ab(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Jt(), e.pingedLanes |= e.suspendedLanes & n, Ot === e && (_t & n) === n && ($t === 4 || $t === 3 && (_t & 130023424) === _t && 500 > St() - mp ? No(e, 0) : pp |= n), dn(e, t);
}
function m0(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ll, Ll <<= 1, !(Ll & 130023424) && (Ll = 4194304)) : t = 1);
  var n = Jt();
  e = $r(e, t), e !== null && (cl(e, t, n), dn(e, n));
}
function Nb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), m0(e, n);
}
function zb(e, t) {
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
      throw Error(Y(314));
  }
  r !== null && r.delete(t), m0(e, n);
}
var h0;
h0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || cn.current) an = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return an = !1, kb(e, t, n);
    an = !!(e.flags & 131072);
  }
  else an = !1, ut && t.flags & 1048576 && xv(t, Na, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      pa(e, t), e = t.pendingProps;
      var o = Os(t, Qt.current);
      Rs(t, n), o = lp(null, t, r, e, o, n);
      var s = ap();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, un(r) ? (s = !0, Oa(t)) : s = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, np(t), o.updater = hc, t.stateNode = o, o._reactInternals = t, Ud(t, r, e, n), t = Kd(null, t, r, !0, s, n)) : (t.tag = 0, ut && s && Qf(t), qt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (pa(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Fb(r), e = Xn(r, e), o) {
          case 0:
            t = Vd(null, t, r, e, n);
            break e;
          case 1:
            t = ih(null, t, r, e, n);
            break e;
          case 11:
            t = oh(null, t, r, e, n);
            break e;
          case 14:
            t = sh(null, t, r, Xn(r.type, e), n);
            break e;
        }
        throw Error(Y(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), Vd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), ih(e, t, r, o, n);
    case 3:
      e: {
        if (Zv(t), e === null) throw Error(Y(387));
        r = t.pendingProps, s = t.memoizedState, o = s.element, Ev(e, t), Fa(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, s.isDehydrated) if (s = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
          o = Bs(Error(Y(423)), t), t = lh(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Bs(Error(Y(424)), t), t = lh(e, t, r, n, o);
          break e;
        } else for (xn = eo(t.stateNode.containerInfo.firstChild), Sn = t, ut = !0, Zn = null, n = Cv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (As(), r === o) {
            t = jr(e, t, n);
            break e;
          }
          qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Tv(t), e === null && Dd(t), r = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = o.children, Ad(r, o) ? i = null : s !== null && Ad(r, s) && (t.flags |= 32), qv(e, t), qt(e, t, i, n), t.child;
    case 6:
      return e === null && Dd(t), null;
    case 13:
      return Jv(e, t, n);
    case 4:
      return rp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ns(t, null, r, n) : qt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), oh(e, t, r, o, n);
    case 7:
      return qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, i = o.value, et(za, r._currentValue), r._currentValue = i, s !== null) if (tr(s.value, i)) {
          if (s.children === o.children && !cn.current) {
            t = jr(e, t, n);
            break e;
          }
        } else for (s = t.child, s !== null && (s.return = t); s !== null; ) {
          var l = s.dependencies;
          if (l !== null) {
            i = s.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (s.tag === 1) {
                  a = Pr(-1, n & -n), a.tag = 2;
                  var c = s.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var f = c.pending;
                    f === null ? a.next = a : (a.next = f.next, f.next = a), c.pending = a;
                  }
                }
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), _d(
                  s.return,
                  n,
                  t
                ), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
          else if (s.tag === 18) {
            if (i = s.return, i === null) throw Error(Y(341));
            i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), _d(i, n, t), i = s.sibling;
          } else i = s.child;
          if (i !== null) i.return = s;
          else for (i = s; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (s = i.sibling, s !== null) {
              s.return = i.return, i = s;
              break;
            }
            i = i.return;
          }
          s = i;
        }
        qt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Rs(t, n), o = Nn(o), r = r(o), t.flags |= 1, qt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Xn(r, t.pendingProps), o = Xn(r.type, o), sh(e, t, r, o, n);
    case 15:
      return Qv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Xn(r, o), pa(e, t), t.tag = 1, un(r) ? (e = !0, Oa(t)) : e = !1, Rs(t, n), Kv(t, r, o), Ud(t, r, o, n), Kd(null, t, r, !0, e, n);
    case 19:
      return e0(e, t, n);
    case 22:
      return Xv(e, t, n);
  }
  throw Error(Y(156, t.tag));
};
function g0(e, t) {
  return Uy(e, t);
}
function Bb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ln(e, t, n, r) {
  return new Bb(e, t, n, r);
}
function vp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Fb(e) {
  if (typeof e == "function") return vp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === zf) return 11;
    if (e === Bf) return 14;
  }
  return 2;
}
function oo(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ln(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ga(e, t, n, r, o, s) {
  var i = 2;
  if (r = e, typeof e == "function") vp(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case ds:
      return zo(n.children, o, s, t);
    case Nf:
      i = 8, o |= 8;
      break;
    case pd:
      return e = Ln(12, n, t, o | 2), e.elementType = pd, e.lanes = s, e;
    case md:
      return e = Ln(13, n, t, o), e.elementType = md, e.lanes = s, e;
    case hd:
      return e = Ln(19, n, t, o), e.elementType = hd, e.lanes = s, e;
    case Ty:
      return vc(n, o, s, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case ky:
          i = 10;
          break e;
        case Ey:
          i = 9;
          break e;
        case zf:
          i = 11;
          break e;
        case Bf:
          i = 14;
          break e;
        case Vr:
          i = 16, r = null;
          break e;
      }
      throw Error(Y(130, e == null ? e : typeof e, ""));
  }
  return t = Ln(i, n, t, o), t.elementType = e, t.type = r, t.lanes = s, t;
}
function zo(e, t, n, r) {
  return e = Ln(7, e, r, t), e.lanes = n, e;
}
function vc(e, t, n, r) {
  return e = Ln(22, e, r, t), e.elementType = Ty, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Hu(e, t, n) {
  return e = Ln(6, e, null, t), e.lanes = n, e;
}
function Vu(e, t, n) {
  return t = Ln(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Db(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Eu(0), this.expirationTimes = Eu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function xp(e, t, n, r, o, s, i, l, a) {
  return e = new Db(e, t, n, l, a), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Ln(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, np(s), e;
}
function _b(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: us, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function y0(e) {
  if (!e) return lo;
  e = e._reactInternals;
  e: {
    if (Xo(e) !== e || e.tag !== 1) throw Error(Y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (un(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (un(n)) return yv(e, n, t);
  }
  return t;
}
function v0(e, t, n, r, o, s, i, l, a) {
  return e = xp(n, r, !0, e, o, s, i, l, a), e.context = y0(null), n = e.current, r = Jt(), o = ro(n), s = Pr(r, o), s.callback = t ?? null, to(n, s, o), e.current.lanes = o, cl(e, o, r), dn(e, r), e;
}
function xc(e, t, n, r) {
  var o = t.current, s = Jt(), i = ro(o);
  return n = y0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pr(s, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = to(o, t, i), e !== null && (er(e, o, i, s), ua(e, o, i)), i;
}
function Ga(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function yh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Sp(e, t) {
  yh(e, t), (e = e.alternate) && yh(e, t);
}
function Wb() {
  return null;
}
var x0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function bp(e) {
  this._internalRoot = e;
}
Sc.prototype.render = bp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Y(409));
  xc(e, t, null, null);
};
Sc.prototype.unmount = bp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Vo(function() {
      xc(null, e, null, null);
    }), t[Mr] = null;
  }
};
function Sc(e) {
  this._internalRoot = e;
}
Sc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Xy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gr.length && t !== 0 && t < Gr[n].priority; n++) ;
    Gr.splice(n, 0, e), n === 0 && Zy(e);
  }
};
function wp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function bc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function vh() {
}
function Ub(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var s = r;
      r = function() {
        var c = Ga(i);
        s.call(c);
      };
    }
    var i = v0(t, r, e, 0, null, !1, !1, "", vh);
    return e._reactRootContainer = i, e[Mr] = i.current, Ui(e.nodeType === 8 ? e.parentNode : e), Vo(), i;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = Ga(a);
      l.call(c);
    };
  }
  var a = xp(e, 0, !1, null, null, !1, !1, "", vh);
  return e._reactRootContainer = a, e[Mr] = a.current, Ui(e.nodeType === 8 ? e.parentNode : e), Vo(function() {
    xc(t, a, n, r);
  }), a;
}
function wc(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = Ga(i);
        l.call(a);
      };
    }
    xc(t, i, e, o);
  } else i = Ub(n, t, e, o, r);
  return Ga(i);
}
Yy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = hi(t.pendingLanes);
        n !== 0 && (_f(t, n | 1), dn(t, St()), !(ze & 6) && (Fs = St() + 500, mo()));
      }
      break;
    case 13:
      Vo(function() {
        var r = $r(e, 1);
        if (r !== null) {
          var o = Jt();
          er(r, e, 1, o);
        }
      }), Sp(e, 1);
  }
};
Wf = function(e) {
  if (e.tag === 13) {
    var t = $r(e, 134217728);
    if (t !== null) {
      var n = Jt();
      er(t, e, 134217728, n);
    }
    Sp(e, 134217728);
  }
};
Qy = function(e) {
  if (e.tag === 13) {
    var t = ro(e), n = $r(e, t);
    if (n !== null) {
      var r = Jt();
      er(n, e, t, r);
    }
    Sp(e, t);
  }
};
Xy = function() {
  return Ge;
};
qy = function(e, t) {
  var n = Ge;
  try {
    return Ge = e, t();
  } finally {
    Ge = n;
  }
};
Ed = function(e, t, n) {
  switch (t) {
    case "input":
      if (vd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = fc(r);
            if (!o) throw Error(Y(90));
            Py(r), vd(r, o);
          }
        }
      }
      break;
    case "textarea":
      My(e, n);
      break;
    case "select":
      t = n.value, t != null && Cs(e, !!n.multiple, t, !1);
  }
};
zy = hp;
By = Vo;
var Hb = { usingClientEntryPoint: !1, Events: [dl, hs, fc, Ay, Ny, hp] }, ii = { findFiberByHostInstance: jo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Vb = { bundleType: ii.bundleType, version: ii.version, rendererPackageName: ii.rendererPackageName, rendererConfig: ii.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ar.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = _y(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: ii.findFiberByHostInstance || Wb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Hl.isDisabled && Hl.supportsFiber) try {
    ac = Hl.inject(Vb), mr = Hl;
  } catch {
  }
}
kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hb;
kn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wp(t)) throw Error(Y(200));
  return _b(e, t, null, n);
};
kn.createRoot = function(e, t) {
  if (!wp(e)) throw Error(Y(299));
  var n = !1, r = "", o = x0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = xp(e, 1, !1, null, null, n, !1, r, o), e[Mr] = t.current, Ui(e.nodeType === 8 ? e.parentNode : e), new bp(t);
};
kn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(Y(188)) : (e = Object.keys(e).join(","), Error(Y(268, e)));
  return e = _y(t), e = e === null ? null : e.stateNode, e;
};
kn.flushSync = function(e) {
  return Vo(e);
};
kn.hydrate = function(e, t, n) {
  if (!bc(t)) throw Error(Y(200));
  return wc(null, e, t, !0, n);
};
kn.hydrateRoot = function(e, t, n) {
  if (!wp(e)) throw Error(Y(405));
  var r = n != null && n.hydratedSources || null, o = !1, s = "", i = x0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = v0(t, null, e, 1, n ?? null, o, !1, s, i), e[Mr] = t.current, Ui(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Sc(t);
};
kn.render = function(e, t, n) {
  if (!bc(t)) throw Error(Y(200));
  return wc(null, e, t, !1, n);
};
kn.unmountComponentAtNode = function(e) {
  if (!bc(e)) throw Error(Y(40));
  return e._reactRootContainer ? (Vo(function() {
    wc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mr] = null;
    });
  }), !0) : !1;
};
kn.unstable_batchedUpdates = hp;
kn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!bc(n)) throw Error(Y(200));
  if (e == null || e._reactInternals === void 0) throw Error(Y(38));
  return wc(e, t, n, !1, r);
};
kn.version = "18.3.1-next-f1338f8080-20240426";
function S0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0);
    } catch (e) {
      console.error(e);
    }
}
S0(), Sy.exports = kn;
var b0 = Sy.exports, w0, xh = b0;
w0 = xh.createRoot, xh.hydrateRoot;
const Zi = {
  black: "#000",
  white: "#fff"
}, rs = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, os = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ss = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, is = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ls = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, li = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Kb = {
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
function Lr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const gr = "$$material";
function of() {
  return of = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, of.apply(null, arguments);
}
function Gb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Yb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Qb = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, s), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Yb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = Gb(o);
      try {
        s.insertRule(r, s.cssRules.length);
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
}(), Gt = "-ms-", Ya = "-moz-", Fe = "-webkit-", C0 = "comm", Cp = "rule", kp = "decl", Xb = "@import", k0 = "@keyframes", qb = "@layer", Zb = Math.abs, Cc = String.fromCharCode, Jb = Object.assign;
function ew(e, t) {
  return Ft(e, 0) ^ 45 ? (((t << 2 ^ Ft(e, 0)) << 2 ^ Ft(e, 1)) << 2 ^ Ft(e, 2)) << 2 ^ Ft(e, 3) : 0;
}
function E0(e) {
  return e.trim();
}
function tw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function De(e, t, n) {
  return e.replace(t, n);
}
function sf(e, t) {
  return e.indexOf(t);
}
function Ft(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ji(e, t, n) {
  return e.slice(t, n);
}
function cr(e) {
  return e.length;
}
function Ep(e) {
  return e.length;
}
function Vl(e, t) {
  return t.push(e), e;
}
function nw(e, t) {
  return e.map(t).join("");
}
var kc = 1, Ds = 1, T0 = 0, mn = 0, Pt = 0, Xs = "";
function Ec(e, t, n, r, o, s, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: s, line: kc, column: Ds, length: i, return: "" };
}
function ai(e, t) {
  return Jb(Ec("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function rw() {
  return Pt;
}
function ow() {
  return Pt = mn > 0 ? Ft(Xs, --mn) : 0, Ds--, Pt === 10 && (Ds = 1, kc--), Pt;
}
function bn() {
  return Pt = mn < T0 ? Ft(Xs, mn++) : 0, Ds++, Pt === 10 && (Ds = 1, kc++), Pt;
}
function yr() {
  return Ft(Xs, mn);
}
function ya() {
  return mn;
}
function pl(e, t) {
  return Ji(Xs, e, t);
}
function el(e) {
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
function R0(e) {
  return kc = Ds = 1, T0 = cr(Xs = e), mn = 0, [];
}
function P0(e) {
  return Xs = "", e;
}
function va(e) {
  return E0(pl(mn - 1, lf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function sw(e) {
  for (; (Pt = yr()) && Pt < 33; )
    bn();
  return el(e) > 2 || el(Pt) > 3 ? "" : " ";
}
function iw(e, t) {
  for (; --t && bn() && !(Pt < 48 || Pt > 102 || Pt > 57 && Pt < 65 || Pt > 70 && Pt < 97); )
    ;
  return pl(e, ya() + (t < 6 && yr() == 32 && bn() == 32));
}
function lf(e) {
  for (; bn(); )
    switch (Pt) {
      case e:
        return mn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && lf(Pt);
        break;
      case 40:
        e === 41 && lf(e);
        break;
      case 92:
        bn();
        break;
    }
  return mn;
}
function lw(e, t) {
  for (; bn() && e + Pt !== 57; )
    if (e + Pt === 84 && yr() === 47)
      break;
  return "/*" + pl(t, mn - 1) + "*" + Cc(e === 47 ? e : bn());
}
function aw(e) {
  for (; !el(yr()); )
    bn();
  return pl(e, mn);
}
function cw(e) {
  return P0(xa("", null, null, null, [""], e = R0(e), 0, [0], e));
}
function xa(e, t, n, r, o, s, i, l, a) {
  for (var c = 0, f = 0, m = i, x = 0, d = 0, v = 0, b = 1, C = 1, g = 1, h = 0, S = "", w = o, R = s, k = r, T = S; C; )
    switch (v = h, h = bn()) {
      case 40:
        if (v != 108 && Ft(T, m - 1) == 58) {
          sf(T += De(va(h), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += va(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += sw(v);
        break;
      case 92:
        T += iw(ya() - 1, 7);
        continue;
      case 47:
        switch (yr()) {
          case 42:
          case 47:
            Vl(uw(lw(bn(), ya()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * b:
        l[c++] = cr(T) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0;
          case 59 + f:
            g == -1 && (T = De(T, /\f/g, "")), d > 0 && cr(T) - m && Vl(d > 32 ? bh(T + ";", r, n, m - 1) : bh(De(T, " ", "") + ";", r, n, m - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (Vl(k = Sh(T, t, n, c, f, o, l, S, w = [], R = [], m), s), h === 123)
              if (f === 0)
                xa(T, t, k, k, w, s, m, l, R);
              else
                switch (x === 99 && Ft(T, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    xa(e, k, k, r && Vl(Sh(e, k, k, 0, 0, o, l, S, o, w = [], m), R), o, R, m, l, r ? w : R);
                    break;
                  default:
                    xa(T, k, k, k, [""], R, 0, l, R);
                }
        }
        c = f = d = 0, b = g = 1, S = T = "", m = i;
        break;
      case 58:
        m = 1 + cr(T), d = v;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && ow() == 125)
            continue;
        }
        switch (T += Cc(h), h * b) {
          case 38:
            g = f > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[c++] = (cr(T) - 1) * g, g = 1;
            break;
          case 64:
            yr() === 45 && (T += va(bn())), x = yr(), f = m = cr(S = T += aw(ya())), h++;
            break;
          case 45:
            v === 45 && cr(T) == 2 && (b = 0);
        }
    }
  return s;
}
function Sh(e, t, n, r, o, s, i, l, a, c, f) {
  for (var m = o - 1, x = o === 0 ? s : [""], d = Ep(x), v = 0, b = 0, C = 0; v < r; ++v)
    for (var g = 0, h = Ji(e, m + 1, m = Zb(b = i[v])), S = e; g < d; ++g)
      (S = E0(b > 0 ? x[g] + " " + h : De(h, /&\f/g, x[g]))) && (a[C++] = S);
  return Ec(e, t, n, o === 0 ? Cp : l, a, c, f);
}
function uw(e, t, n) {
  return Ec(e, t, n, C0, Cc(rw()), Ji(e, 2, -2), 0);
}
function bh(e, t, n, r) {
  return Ec(e, t, n, kp, Ji(e, 0, r), Ji(e, r + 1, -1), r);
}
function Is(e, t) {
  for (var n = "", r = Ep(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function dw(e, t, n, r) {
  switch (e.type) {
    case qb:
      if (e.children.length) break;
    case Xb:
    case kp:
      return e.return = e.return || e.value;
    case C0:
      return "";
    case k0:
      return e.return = e.value + "{" + Is(e.children, r) + "}";
    case Cp:
      e.value = e.props.join(",");
  }
  return cr(n = Is(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function fw(e) {
  var t = Ep(e);
  return function(n, r, o, s) {
    for (var i = "", l = 0; l < t; l++)
      i += e[l](n, r, o, s) || "";
    return i;
  };
}
function pw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function I0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var mw = function(t, n, r) {
  for (var o = 0, s = 0; o = s, s = yr(), o === 38 && s === 12 && (n[r] = 1), !el(s); )
    bn();
  return pl(t, mn);
}, hw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (el(o)) {
      case 0:
        o === 38 && yr() === 12 && (n[r] = 1), t[r] += mw(mn - 1, n, r);
        break;
      case 2:
        t[r] += va(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = yr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Cc(o);
    }
  while (o = bn());
  return t;
}, gw = function(t, n) {
  return P0(hw(R0(t), n));
}, wh = /* @__PURE__ */ new WeakMap(), yw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !wh.get(r)) && !o) {
      wh.set(t, !0);
      for (var s = [], i = gw(n, s), l = r.props, a = 0, c = 0; a < i.length; a++)
        for (var f = 0; f < l.length; f++, c++)
          t.props[c] = s[a] ? i[a].replace(/&\f/g, l[f]) : l[f] + " " + i[a];
    }
  }
}, vw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function M0(e, t) {
  switch (ew(e, t)) {
    case 5103:
      return Fe + "print-" + e + e;
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
      return Fe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Fe + e + Ya + e + Gt + e + e;
    case 6828:
    case 4268:
      return Fe + e + Gt + e + e;
    case 6165:
      return Fe + e + Gt + "flex-" + e + e;
    case 5187:
      return Fe + e + De(e, /(\w+).+(:[^]+)/, Fe + "box-$1$2" + Gt + "flex-$1$2") + e;
    case 5443:
      return Fe + e + Gt + "flex-item-" + De(e, /flex-|-self/, "") + e;
    case 4675:
      return Fe + e + Gt + "flex-line-pack" + De(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Fe + e + Gt + De(e, "shrink", "negative") + e;
    case 5292:
      return Fe + e + Gt + De(e, "basis", "preferred-size") + e;
    case 6060:
      return Fe + "box-" + De(e, "-grow", "") + Fe + e + Gt + De(e, "grow", "positive") + e;
    case 4554:
      return Fe + De(e, /([^-])(transform)/g, "$1" + Fe + "$2") + e;
    case 6187:
      return De(De(De(e, /(zoom-|grab)/, Fe + "$1"), /(image-set)/, Fe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return De(e, /(image-set\([^]*)/, Fe + "$1$`$1");
    case 4968:
      return De(De(e, /(.+:)(flex-)?(.*)/, Fe + "box-pack:$3" + Gt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Fe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return De(e, /(.+)-inline(.+)/, Fe + "$1$2") + e;
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
      if (cr(e) - 1 - t > 6) switch (Ft(e, t + 1)) {
        case 109:
          if (Ft(e, t + 4) !== 45) break;
        case 102:
          return De(e, /(.+:)(.+)-([^]+)/, "$1" + Fe + "$2-$3$1" + Ya + (Ft(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~sf(e, "stretch") ? M0(De(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Ft(e, t + 1) !== 115) break;
    case 6444:
      switch (Ft(e, cr(e) - 3 - (~sf(e, "!important") && 10))) {
        case 107:
          return De(e, ":", ":" + Fe) + e;
        case 101:
          return De(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Fe + (Ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Fe + "$2$3$1" + Gt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Ft(e, t + 11)) {
        case 114:
          return Fe + e + Gt + De(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Fe + e + Gt + De(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Fe + e + Gt + De(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Fe + e + Gt + e + e;
  }
  return e;
}
var xw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case kp:
      t.return = M0(t.value, t.length);
      break;
    case k0:
      return Is([ai(t, {
        value: De(t.value, "@", "@" + Fe)
      })], o);
    case Cp:
      if (t.length) return nw(t.props, function(s) {
        switch (tw(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Is([ai(t, {
              props: [De(s, /:(read-\w+)/, ":" + Ya + "$1")]
            })], o);
          case "::placeholder":
            return Is([ai(t, {
              props: [De(s, /:(plac\w+)/, ":" + Fe + "input-$1")]
            }), ai(t, {
              props: [De(s, /:(plac\w+)/, ":" + Ya + "$1")]
            }), ai(t, {
              props: [De(s, /:(plac\w+)/, Gt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Sw = [xw], bw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Sw, s = {}, i, l = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var C = b.getAttribute("data-emotion").split(" "), g = 1; g < C.length; g++)
        s[C[g]] = !0;
      l.push(b);
    }
  );
  var a, c = [yw, vw];
  {
    var f, m = [dw, pw(function(b) {
      f.insert(b);
    })], x = fw(c.concat(o, m)), d = function(C) {
      return Is(cw(C), x);
    };
    a = function(C, g, h, S) {
      f = h, d(C ? C + "{" + g.styles + "}" : g.styles), S && (v.inserted[g.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new Qb({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: s,
    registered: {},
    insert: a
  };
  return v.sheet.hydrate(l), v;
}, $0 = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At = typeof Symbol == "function" && Symbol.for, Tp = At ? Symbol.for("react.element") : 60103, Rp = At ? Symbol.for("react.portal") : 60106, Tc = At ? Symbol.for("react.fragment") : 60107, Rc = At ? Symbol.for("react.strict_mode") : 60108, Pc = At ? Symbol.for("react.profiler") : 60114, Ic = At ? Symbol.for("react.provider") : 60109, Mc = At ? Symbol.for("react.context") : 60110, Pp = At ? Symbol.for("react.async_mode") : 60111, $c = At ? Symbol.for("react.concurrent_mode") : 60111, jc = At ? Symbol.for("react.forward_ref") : 60112, Lc = At ? Symbol.for("react.suspense") : 60113, ww = At ? Symbol.for("react.suspense_list") : 60120, Oc = At ? Symbol.for("react.memo") : 60115, Ac = At ? Symbol.for("react.lazy") : 60116, Cw = At ? Symbol.for("react.block") : 60121, kw = At ? Symbol.for("react.fundamental") : 60117, Ew = At ? Symbol.for("react.responder") : 60118, Tw = At ? Symbol.for("react.scope") : 60119;
function Tn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Tp:
        switch (e = e.type, e) {
          case Pp:
          case $c:
          case Tc:
          case Pc:
          case Rc:
          case Lc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Mc:
              case jc:
              case Ac:
              case Oc:
              case Ic:
                return e;
              default:
                return t;
            }
        }
      case Rp:
        return t;
    }
  }
}
function j0(e) {
  return Tn(e) === $c;
}
Ye.AsyncMode = Pp;
Ye.ConcurrentMode = $c;
Ye.ContextConsumer = Mc;
Ye.ContextProvider = Ic;
Ye.Element = Tp;
Ye.ForwardRef = jc;
Ye.Fragment = Tc;
Ye.Lazy = Ac;
Ye.Memo = Oc;
Ye.Portal = Rp;
Ye.Profiler = Pc;
Ye.StrictMode = Rc;
Ye.Suspense = Lc;
Ye.isAsyncMode = function(e) {
  return j0(e) || Tn(e) === Pp;
};
Ye.isConcurrentMode = j0;
Ye.isContextConsumer = function(e) {
  return Tn(e) === Mc;
};
Ye.isContextProvider = function(e) {
  return Tn(e) === Ic;
};
Ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tp;
};
Ye.isForwardRef = function(e) {
  return Tn(e) === jc;
};
Ye.isFragment = function(e) {
  return Tn(e) === Tc;
};
Ye.isLazy = function(e) {
  return Tn(e) === Ac;
};
Ye.isMemo = function(e) {
  return Tn(e) === Oc;
};
Ye.isPortal = function(e) {
  return Tn(e) === Rp;
};
Ye.isProfiler = function(e) {
  return Tn(e) === Pc;
};
Ye.isStrictMode = function(e) {
  return Tn(e) === Rc;
};
Ye.isSuspense = function(e) {
  return Tn(e) === Lc;
};
Ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Tc || e === $c || e === Pc || e === Rc || e === Lc || e === ww || typeof e == "object" && e !== null && (e.$$typeof === Ac || e.$$typeof === Oc || e.$$typeof === Ic || e.$$typeof === Mc || e.$$typeof === jc || e.$$typeof === kw || e.$$typeof === Ew || e.$$typeof === Tw || e.$$typeof === Cw);
};
Ye.typeOf = Tn;
$0.exports = Ye;
var Rw = $0.exports, L0 = Rw, Pw = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Iw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, O0 = {};
O0[L0.ForwardRef] = Pw;
O0[L0.Memo] = Iw;
var Mw = !0;
function A0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Ip = function(t, n, r) {
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
  Mw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Mp = function(t, n, r) {
  Ip(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var s = n;
    do
      t.insert(n === s ? "." + o : "", s, t.sheet, !0), s = s.next;
    while (s !== void 0);
  }
};
function $w(e) {
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
var jw = {
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
}, Lw = /[A-Z]|^ms/g, Ow = /_EMO_([^_]+?)_([^]*?)_EMO_/g, N0 = function(t) {
  return t.charCodeAt(1) === 45;
}, Ch = function(t) {
  return t != null && typeof t != "boolean";
}, Ku = /* @__PURE__ */ I0(function(e) {
  return N0(e) ? e : e.replace(Lw, "-$&").toLowerCase();
}), kh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Ow, function(r, o, s) {
          return ur = {
            name: o,
            styles: s,
            next: ur
          }, o;
        });
  }
  return jw[t] !== 1 && !N0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function tl(e, t, n) {
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
        return ur = {
          name: o.name,
          styles: o.styles,
          next: ur
        }, o.name;
      var s = n;
      if (s.styles !== void 0) {
        var i = s.next;
        if (i !== void 0)
          for (; i !== void 0; )
            ur = {
              name: i.name,
              styles: i.styles,
              next: ur
            }, i = i.next;
        var l = s.styles + ";";
        return l;
      }
      return Aw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = ur, c = n(e);
        return ur = a, tl(e, t, c);
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
function Aw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += tl(e, t, n[o]) + ";";
  else
    for (var s in n) {
      var i = n[s];
      if (typeof i != "object") {
        var l = i;
        t != null && t[l] !== void 0 ? r += s + "{" + t[l] + "}" : Ch(l) && (r += Ku(s) + ":" + kh(s, l) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var a = 0; a < i.length; a++)
          Ch(i[a]) && (r += Ku(s) + ":" + kh(s, i[a]) + ";");
      else {
        var c = tl(e, t, i);
        switch (s) {
          case "animation":
          case "animationName": {
            r += Ku(s) + ":" + c + ";";
            break;
          }
          default:
            r += s + "{" + c + "}";
        }
      }
    }
  return r;
}
var Eh = /label:\s*([^\s;{]+)\s*(;|$)/g, ur;
function ml(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  ur = void 0;
  var s = e[0];
  if (s == null || s.raw === void 0)
    r = !1, o += tl(n, t, s);
  else {
    var i = s;
    o += i[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += tl(n, t, e[l]), r) {
      var a = s;
      o += a[l];
    }
  Eh.lastIndex = 0;
  for (var c = "", f; (f = Eh.exec(o)) !== null; )
    c += "-" + f[1];
  var m = $w(o) + c;
  return {
    name: m,
    styles: o,
    next: ur
  };
}
var Nw = function(t) {
  return t();
}, z0 = Ca.useInsertionEffect ? Ca.useInsertionEffect : !1, B0 = z0 || Nw, Th = z0 || p.useLayoutEffect, F0 = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ bw({
    key: "css"
  }) : null
);
F0.Provider;
var $p = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(F0);
    return t(n, o, r);
  });
}, hl = /* @__PURE__ */ p.createContext({}), jp = {}.hasOwnProperty, af = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", zw = function(t, n) {
  var r = {};
  for (var o in n)
    jp.call(n, o) && (r[o] = n[o]);
  return r[af] = t, r;
}, Bw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ip(n, r, o), B0(function() {
    return Mp(n, r, o);
  }), null;
}, Fw = /* @__PURE__ */ $p(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[af], s = [r], i = "";
  typeof e.className == "string" ? i = A0(t.registered, s, e.className) : e.className != null && (i = e.className + " ");
  var l = ml(s, void 0, p.useContext(hl));
  i += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    jp.call(e, c) && c !== "css" && c !== af && (a[c] = e[c]);
  return a.className = i, n && (a.ref = n), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Bw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, a));
}), Dw = Fw, Rh = function(t, n) {
  var r = arguments;
  if (n == null || !jp.call(n, "css"))
    return p.createElement.apply(void 0, r);
  var o = r.length, s = new Array(o);
  s[0] = Dw, s[1] = zw(t, n);
  for (var i = 2; i < o; i++)
    s[i] = r[i];
  return p.createElement.apply(null, s);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Rh || (Rh = {}));
var _w = /* @__PURE__ */ $p(function(e, t) {
  var n = e.styles, r = ml([n], void 0, p.useContext(hl)), o = p.useRef();
  return Th(function() {
    var s = t.key + "-global", i = new t.sheet.constructor({
      key: s,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + s + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", s), i.hydrate([a])), o.current = [i, l], function() {
      i.flush();
    };
  }, [t]), Th(function() {
    var s = o.current, i = s[0], l = s[1];
    if (l) {
      s[1] = !1;
      return;
    }
    if (r.next !== void 0 && Mp(t, r.next, !0), i.tags.length) {
      var a = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = a, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
});
function nl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ml(t);
}
function gl() {
  var e = nl.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Ww = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uw = /* @__PURE__ */ I0(
  function(e) {
    return Ww.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Hw = Uw, Vw = function(t) {
  return t !== "theme";
}, Ph = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Hw : Vw;
}, Ih = function(t, n, r) {
  var o;
  if (n) {
    var s = n.shouldForwardProp;
    o = t.__emotion_forwardProp && s ? function(i) {
      return t.__emotion_forwardProp(i) && s(i);
    } : s;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Kw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Ip(n, r, o), B0(function() {
    return Mp(n, r, o);
  }), null;
}, Gw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, s, i;
  n !== void 0 && (s = n.label, i = n.target);
  var l = Ih(t, n, r), a = l || Ph(o), c = !a("as");
  return function() {
    var f = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (s !== void 0 && m.push("label:" + s + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      var x = f[0];
      m.push(x[0]);
      for (var d = f.length, v = 1; v < d; v++)
        m.push(f[v], x[v]);
    }
    var b = $p(function(C, g, h) {
      var S = c && C.as || o, w = "", R = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var T in C)
          k[T] = C[T];
        k.theme = p.useContext(hl);
      }
      typeof C.className == "string" ? w = A0(g.registered, R, C.className) : C.className != null && (w = C.className + " ");
      var E = ml(m.concat(R), g.registered, k);
      w += g.key + "-" + E.name, i !== void 0 && (w += " " + i);
      var L = c && l === void 0 ? Ph(S) : a, A = {};
      for (var P in C)
        c && P === "as" || L(P) && (A[P] = C[P]);
      return A.className = w, h && (A.ref = h), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Kw, {
        cache: g,
        serialized: E,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ p.createElement(S, A));
    });
    return b.displayName = s !== void 0 ? s : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + i;
      }
    }), b.withComponent = function(C, g) {
      var h = e(C, of({}, n, g, {
        shouldForwardProp: Ih(b, g, !0)
      }));
      return h.apply(void 0, m);
    }, b;
  };
}, Yw = [
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
], cf = Gw.bind(null);
Yw.forEach(function(e) {
  cf[e] = cf(e);
});
function Qw(e) {
  return e == null || Object.keys(e).length === 0;
}
function D0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Qw(o) ? n : o) : t;
  return /* @__PURE__ */ u.jsx(_w, {
    styles: r
  });
}
function _0(e, t) {
  return cf(e, t);
}
function Xw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Mh = [];
function so(e) {
  return Mh[0] = e, ml(Mh);
}
var W0 = { exports: {} }, Je = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lp = Symbol.for("react.transitional.element"), Op = Symbol.for("react.portal"), Nc = Symbol.for("react.fragment"), zc = Symbol.for("react.strict_mode"), Bc = Symbol.for("react.profiler"), Fc = Symbol.for("react.consumer"), Dc = Symbol.for("react.context"), _c = Symbol.for("react.forward_ref"), Wc = Symbol.for("react.suspense"), Uc = Symbol.for("react.suspense_list"), Hc = Symbol.for("react.memo"), Vc = Symbol.for("react.lazy"), qw = Symbol.for("react.view_transition"), Zw = Symbol.for("react.client.reference");
function Dn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Lp:
        switch (e = e.type, e) {
          case Nc:
          case Bc:
          case zc:
          case Wc:
          case Uc:
          case qw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Dc:
              case _c:
              case Vc:
              case Hc:
                return e;
              case Fc:
                return e;
              default:
                return t;
            }
        }
      case Op:
        return t;
    }
  }
}
Je.ContextConsumer = Fc;
Je.ContextProvider = Dc;
Je.Element = Lp;
Je.ForwardRef = _c;
Je.Fragment = Nc;
Je.Lazy = Vc;
Je.Memo = Hc;
Je.Portal = Op;
Je.Profiler = Bc;
Je.StrictMode = zc;
Je.Suspense = Wc;
Je.SuspenseList = Uc;
Je.isContextConsumer = function(e) {
  return Dn(e) === Fc;
};
Je.isContextProvider = function(e) {
  return Dn(e) === Dc;
};
Je.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Lp;
};
Je.isForwardRef = function(e) {
  return Dn(e) === _c;
};
Je.isFragment = function(e) {
  return Dn(e) === Nc;
};
Je.isLazy = function(e) {
  return Dn(e) === Vc;
};
Je.isMemo = function(e) {
  return Dn(e) === Hc;
};
Je.isPortal = function(e) {
  return Dn(e) === Op;
};
Je.isProfiler = function(e) {
  return Dn(e) === Bc;
};
Je.isStrictMode = function(e) {
  return Dn(e) === zc;
};
Je.isSuspense = function(e) {
  return Dn(e) === Wc;
};
Je.isSuspenseList = function(e) {
  return Dn(e) === Uc;
};
Je.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Nc || e === Bc || e === zc || e === Wc || e === Uc || typeof e == "object" && e !== null && (e.$$typeof === Vc || e.$$typeof === Hc || e.$$typeof === Dc || e.$$typeof === Fc || e.$$typeof === _c || e.$$typeof === Zw || e.getModuleId !== void 0);
};
Je.typeOf = Dn;
W0.exports = Je;
var U0 = W0.exports;
function Er(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function H0(e) {
  if (/* @__PURE__ */ p.isValidElement(e) || U0.isValidElementType(e) || !Er(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = H0(e[n]);
  }), t;
}
function Wt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Er(e) && Er(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ p.isValidElement(t[o]) || U0.isValidElementType(t[o]) ? r[o] = t[o] : Er(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Er(e[o]) ? r[o] = Wt(e[o], t[o], n) : n.clone ? r[o] = Er(t[o]) ? H0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Jw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function V0(e) {
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
  } = e, s = Jw(t), i = Object.keys(s);
  function l(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function a(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - r / 100}${n})`;
  }
  function c(d, v) {
    const b = i.indexOf(v);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n}) and (max-width:${(b !== -1 && typeof t[i[b]] == "number" ? t[i[b]] : v) - r / 100}${n})`;
  }
  function f(d) {
    return i.indexOf(d) + 1 < i.length ? c(d, i[i.indexOf(d) + 1]) : l(d);
  }
  function m(d) {
    const v = i.indexOf(d);
    return v === 0 ? l(i[1]) : v === i.length - 1 ? a(i[v]) : c(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  const x = [];
  for (let d = 0; d < i.length; d += 1)
    x.push(l(i[d]));
  return {
    keys: i,
    values: s,
    up: l,
    down: a,
    between: c,
    only: f,
    not: m,
    unit: n,
    internal_mediaKeys: x,
    ...o
  };
}
const $h = /min-width:\s*([0-9.]+)/;
function jh(e, t) {
  if (!e.containerQueries || !eC(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, s) => {
    var i, l;
    return +(((i = o.match($h)) == null ? void 0 : i[1]) || 0) - +(((l = s.match($h)) == null ? void 0 : l[1]) || 0);
  });
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const s = n[o], i = r[s];
    delete r[s], r[s] = i;
  }
  return r;
}
function eC(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function K0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function tC(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, s = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(s);
}
function nC(e) {
  const t = (s, i) => s.replace("@media", i ? `@container ${i}` : "@container");
  function n(s, i) {
    s.up = (...l) => t(e.breakpoints.up(...l), i), s.down = (...l) => t(e.breakpoints.down(...l), i), s.between = (...l) => t(e.breakpoints.between(...l), i), s.only = (...l) => t(e.breakpoints.only(...l), i), s.not = (...l) => {
      const a = t(e.breakpoints.not(...l), i);
      return a.includes("not all and") ? a.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : a;
    };
  }
  const r = {}, o = (s) => (n(r, s), r);
  return n(o), {
    ...e,
    containerQueries: o
  };
}
const rC = {
  borderRadius: 4
};
function G0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Ms(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return aC(t) ? t : cC(e) ? _s(t) : n && r ? iC(e, t) : n !== r ? _s(t) : uC(e, t);
}
function oC(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = _s(e[t]);
  return r;
}
function sC(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = _s(e[n]));
  return t;
}
function iC(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = _s(t[r]);
  return e;
}
function lC(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function aC(e) {
  return typeof e != "object" || e === null;
}
function cC(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function _s(e) {
  return lC(e) ? Array.isArray(e) ? oC(e) : sC(e) : e;
}
function uC(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = Ms(e[n], t[n]) : e[n] = _s(t[n]));
  return e;
}
const dC = {}, Kc = {
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
}, Qa = V0({
  values: Kc
}), fC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : Kc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function ao(e, t, n) {
  const r = {};
  return Gc(r, e.theme, t, (o, s, i) => {
    const l = n(s, i);
    o ? r[o] = l : Ms(r, l);
  });
}
function Gc(e, t, n, r) {
  if (t ?? (t = dC), Array.isArray(n)) {
    const o = t.breakpoints ?? Qa;
    for (let s = 0; s < n.length; s += 1)
      Gu(e, o.up(o.keys[s]), n[s], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Qa, s = o.values ?? Kc;
    for (const i in n)
      if (K0(o.keys, i)) {
        const l = tC(t.containerQueries ? t : fC, i);
        l && Gu(e, l, n[i], i, r);
      } else if (i in s) {
        const l = o.up(i);
        Gu(e, l, n[i], i, r);
      } else {
        const l = i;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function Gu(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function Y0(e = Qa) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function uf(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    G0(t[o]) && delete t[o];
  }
  return t;
}
function pC(e, ...t) {
  const r = [Y0(e), ...t].reduce((o, s) => Wt(o, s), {});
  return uf(e, r);
}
function mC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, s) => {
    s < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Yu(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || mC(t, n), s = Object.keys(o);
  if (s.length === 0)
    return t;
  let i;
  return s.reduce((l, a, c) => {
    if (Array.isArray(t))
      l[a] = t[c] != null ? t[c] : t[i], i = c;
    else if (typeof t == "object" && t) {
      const f = t;
      l[a] = f[a] != null ? f[a] : f[i], i = a;
    } else
      l[a] = t;
    return l;
  }, {});
}
function hC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (K0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function oe(e) {
  if (typeof e != "string")
    throw new Error(Lr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Q0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Yc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Yc(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const s = Lh(e.vars, o, r);
    if (s != null)
      return s;
  }
  return Lh(e, o, r);
}
function Lh(e, t, n = void 0) {
  let r, o = e, s = 0;
  for (; s < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[s]], s += 1;
  }
  if (n && o === void 0) {
    const i = t[t.length - 1], l = `${n}${i === "default" ? "" : oe(i)}`;
    return r == null ? void 0 : r[l];
  }
  return o;
}
function wt(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, s = (i) => {
    if (i[t] == null)
      return null;
    const l = i[t], a = i.theme, c = Yc(a, r) || {};
    return ao(i, l, (m) => {
      const x = Q0(c, o, m, t);
      return n === !1 ? x : {
        [n]: x
      };
    });
  };
  return s.propTypes = {}, s.filterProps = [t], s;
}
const gC = {
  internal_cache: {}
}, Xa = {
  m: "margin",
  p: "padding"
}, Oh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ah = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, rl = {};
for (const e in Xa)
  rl[e] = [Xa[e]];
for (const e in Xa)
  for (const t in Oh) {
    const n = Xa[e], r = Oh[t], o = Array.isArray(r) ? r.map((s) => n + s) : [n + r];
    rl[e + t] = o;
  }
for (const e in Ah)
  rl[e] = rl[Ah[e]];
const Ap = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Np = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Ap, ...Np];
function yl(e, t, n, r) {
  const o = Yc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (s) => typeof s == "string" ? s : typeof o == "string" ? o.startsWith("var(") && s === 0 ? 0 : o.startsWith("var(") && s === 1 ? o : `calc(${s} * ${o})` : o * s : Array.isArray(o) ? (s) => {
    if (typeof s == "string")
      return s;
    const i = Math.abs(s), l = o[i];
    return s >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Qc(e) {
  return yl(e, "spacing", 8);
}
function Ko(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Nh = [""];
function X0(e, t) {
  var s;
  const n = e.theme ?? gC, r = ((s = n == null ? void 0 : n.internal_cache) == null ? void 0 : s.unarySpacing) ?? Qc(n), o = {};
  for (const i in e) {
    if (!t.has(i))
      continue;
    const l = rl[i] ?? (Nh[0] = i, Nh), a = e[i];
    Gc(o, e.theme, a, (c, f) => {
      const m = c ? o[c] : o;
      for (let x = 0; x < l.length; x += 1)
        m[l[x]] = Ko(r, f);
    });
  }
  return o;
}
function zp(e) {
  return X0(e, Ap);
}
zp.propTypes = {};
zp.filterProps = Ap;
const kt = zp;
function Bp(e) {
  return X0(e, Np);
}
Bp.propTypes = {};
Bp.filterProps = Np;
const Et = Bp;
function q0(e = 8, t = Qc({
  spacing: e
})) {
  if (e.mui)
    return e;
  const n = (...r) => (r.length === 0 ? [1] : r).map((s) => {
    const i = t(s);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" ");
  return n.mui = !0, n;
}
function Xc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((s) => {
    r[s] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const s in r)
      t[s] && Ms(o, t[s](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function $n(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function _n(e, t) {
  return wt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const yC = _n("border", $n), vC = _n("borderTop", $n), xC = _n("borderRight", $n), SC = _n("borderBottom", $n), bC = _n("borderLeft", $n), wC = _n("borderColor"), CC = _n("borderTopColor"), kC = _n("borderRightColor"), EC = _n("borderBottomColor"), TC = _n("borderLeftColor"), RC = _n("outline", $n), PC = _n("outlineColor"), qc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = yl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ko(t, r)
    });
    return ao(e, e.borderRadius, n);
  }
  return null;
};
qc.propTypes = {};
qc.filterProps = ["borderRadius"];
Xc(yC, vC, xC, SC, bC, wC, CC, kC, EC, TC, qc, RC, PC);
const Zc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = yl(e.theme, "spacing", 8), n = (r) => ({
      gap: Ko(t, r)
    });
    return ao(e, e.gap, n);
  }
  return null;
};
Zc.propTypes = {};
Zc.filterProps = ["gap"];
const Jc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = yl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ko(t, r)
    });
    return ao(e, e.columnGap, n);
  }
  return null;
};
Jc.propTypes = {};
Jc.filterProps = ["columnGap"];
const eu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = yl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ko(t, r)
    });
    return ao(e, e.rowGap, n);
  }
  return null;
};
eu.propTypes = {};
eu.filterProps = ["rowGap"];
const IC = wt({
  prop: "gridColumn"
}), MC = wt({
  prop: "gridRow"
}), $C = wt({
  prop: "gridAutoFlow"
}), jC = wt({
  prop: "gridAutoColumns"
}), LC = wt({
  prop: "gridAutoRows"
}), OC = wt({
  prop: "gridTemplateColumns"
}), AC = wt({
  prop: "gridTemplateRows"
}), NC = wt({
  prop: "gridTemplateAreas"
}), zC = wt({
  prop: "gridArea"
});
Xc(Zc, Jc, eu, IC, MC, $C, jC, LC, OC, AC, NC, zC);
function $s(e, t) {
  return t === "grey" ? t : e;
}
const BC = wt({
  prop: "color",
  themeKey: "palette",
  transform: $s
}), FC = wt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: $s
}), DC = wt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: $s
});
Xc(BC, FC, DC);
const _C = Kc;
function vn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const WC = wt({
  prop: "width",
  transform: vn
}), Fp = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, s, i, l, a;
      const r = ((i = (s = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : s.values) == null ? void 0 : i[n]) || _C[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: vn(n)
      };
    };
    return ao(e, e.maxWidth, t);
  }
  return null;
};
Fp.filterProps = ["maxWidth"];
const UC = wt({
  prop: "minWidth",
  transform: vn
}), HC = wt({
  prop: "height",
  transform: vn
}), VC = wt({
  prop: "maxHeight",
  transform: vn
}), KC = wt({
  prop: "minHeight",
  transform: vn
});
wt({
  prop: "size",
  cssProperty: "width",
  transform: vn
});
wt({
  prop: "size",
  cssProperty: "height",
  transform: vn
});
const GC = wt({
  prop: "boxSizing"
});
Xc(WC, Fp, UC, HC, VC, KC, GC);
const tu = {
  // borders
  border: {
    themeKey: "borders",
    transform: $n
  },
  borderTop: {
    themeKey: "borders",
    transform: $n
  },
  borderRight: {
    themeKey: "borders",
    transform: $n
  },
  borderBottom: {
    themeKey: "borders",
    transform: $n
  },
  borderLeft: {
    themeKey: "borders",
    transform: $n
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
    transform: $n
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: qc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: $s
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: $s
  },
  backgroundColor: {
    themeKey: "palette",
    transform: $s
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
    style: kt
  },
  mt: {
    style: kt
  },
  mr: {
    style: kt
  },
  mb: {
    style: kt
  },
  ml: {
    style: kt
  },
  mx: {
    style: kt
  },
  my: {
    style: kt
  },
  margin: {
    style: kt
  },
  marginTop: {
    style: kt
  },
  marginRight: {
    style: kt
  },
  marginBottom: {
    style: kt
  },
  marginLeft: {
    style: kt
  },
  marginX: {
    style: kt
  },
  marginY: {
    style: kt
  },
  marginInline: {
    style: kt
  },
  marginInlineStart: {
    style: kt
  },
  marginInlineEnd: {
    style: kt
  },
  marginBlock: {
    style: kt
  },
  marginBlockStart: {
    style: kt
  },
  marginBlockEnd: {
    style: kt
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
    style: Zc
  },
  rowGap: {
    style: eu
  },
  columnGap: {
    style: Jc
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
    transform: vn
  },
  maxWidth: {
    style: Fp
  },
  minWidth: {
    transform: vn
  },
  height: {
    transform: vn
  },
  maxHeight: {
    transform: vn
  },
  minHeight: {
    transform: vn
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
}, YC = {};
function QC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = YC,
      nested: o
    } = t, s = r.unstable_sxConfig ?? tu, i = {
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
      const f = r.breakpoints ?? Qa, m = Y0(f);
      for (const x in c) {
        const d = XC(c[x], r);
        if (d != null) {
          if (typeof d != "object") {
            zh(m, x, d, r, s);
            continue;
          }
          if (s[x]) {
            zh(m, x, d, r, s);
            continue;
          }
          hC(f, d) ? Gc(m, t.theme, d, (v, b) => {
            m[v][x] = b;
          }) : (i.sx = d, m[x] = e(i));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": jh(r, uf(f, m))
      } : jh(r, uf(f, m));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Go = QC();
function zh(e, t, n, r, o) {
  const s = o[t];
  if (!s) {
    e[t] = n;
    return;
  }
  if (n == null)
    return;
  const {
    themeKey: i
  } = s;
  if (i === "typography" && n === "inherit") {
    e[t] = n;
    return;
  }
  const {
    style: l
  } = s;
  if (l) {
    Ms(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: c
  } = s, f = Yc(r, i);
  Gc(e, r, n, (m, x) => {
    const d = Q0(f, c, x, t);
    a === !1 ? Ms(m ? e[m] : e, d) : m ? e[m][a] = d : e[a] = d;
  });
}
function XC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qC(e, t) {
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
    shape: s = {},
    ...i
  } = e, l = V0(n), a = q0(o);
  let c = Wt({
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
      ...rC,
      ...s
    }
  }, i);
  return c = nC(c), c.applyStyles = qC, c = t.reduce((f, m) => Wt(f, m), c), c.unstable_sxConfig = {
    ...tu,
    ...i == null ? void 0 : i.unstable_sxConfig
  }, c.unstable_sx = function(m) {
    return Go({
      sx: m,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function ZC(e) {
  return Object.keys(e).length === 0;
}
function Dp(e = null) {
  const t = p.useContext(hl);
  return !t || ZC(t) ? e : t;
}
const JC = nu();
function ru(e = JC) {
  return Dp(e);
}
function Qu(e) {
  const t = so(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Z0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = ru(n), o = t && r[t] || r;
  let s = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(s) ? s = s.map((i) => Qu(typeof i == "function" ? i(o) : i)) : s = Qu(s)), /* @__PURE__ */ u.jsx(D0, {
    styles: s
  });
}
const Bh = (e) => e, ek = () => {
  let e = Bh;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Bh;
    }
  };
}, J0 = ek();
function ex(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = ex(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = ex(e)) && (r && (r += " "), r += t);
  return r;
}
function tk(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, s = _0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Go);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const f = ru(n), {
      className: m,
      component: x = "div",
      ...d
    } = a;
    return /* @__PURE__ */ u.jsx(s, {
      as: x,
      ref: c,
      className: te(m, o ? o(r) : r),
      theme: t && f[t] || f,
      ...d
    });
  });
}
const nk = {
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
function fe(e, t, n = "Mui") {
  const r = nk[t];
  return r ? `${n}-${r}` : `${J0.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = fe(e, o, n);
  }), r;
}
function tx(e) {
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
const rk = nu();
function Xu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ao(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function ok(e) {
  return e ? (t, n) => n[e] : null;
}
function sk(e, t, n) {
  e.theme = G0(e.theme) ? n : e.theme[t] || e.theme;
}
function Sa(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Sa(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Ao(r.style, n) : r.style;
    else {
      const {
        variants: s,
        ...i
      } = r;
      o = n ? Ao(so(i), n) : i;
    }
    return nx(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Ao(so(r.style), n) : r.style : n ? Ao(so(r), n) : r;
}
function nx(e, t, n = [], r = void 0) {
  var s;
  let o;
  e: for (let i = 0; i < t.length; i += 1) {
    const l = t[i];
    if (typeof l.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(o))
        continue;
    } else
      for (const a in l.props)
        if (e[a] !== l.props[a] && ((s = e.ownerState) == null ? void 0 : s[a]) !== l.props[a])
          continue e;
    typeof l.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(r ? Ao(so(l.style(o)), r) : l.style(o))) : n.push(r ? Ao(so(l.style), r) : l.style);
  }
  return n;
}
function rx(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = rk,
    rootShouldForwardProp: r = Xu,
    slotShouldForwardProp: o = Xu
  } = e;
  function s(l) {
    sk(l, t, n);
  }
  return (l, a = {}) => {
    Xw(l, (k) => k.filter((T) => T !== Go));
    const {
      name: c,
      slot: f,
      skipVariantsResolver: m,
      skipSx: x,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = ok(ak(f)),
      ...v
    } = a, b = c && c.startsWith("Mui") || f ? "components" : "custom", C = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), g = x || !1;
    let h = Xu;
    f === "Root" || f === "root" ? h = r : f ? h = o : lk(l) && (h = void 0);
    const S = _0(l, {
      shouldForwardProp: h,
      label: ik(),
      ...v
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(E) {
          return Sa(E, k, E.theme.modularCssLayers ? b : void 0);
        };
      if (Er(k)) {
        const T = tx(k);
        return function(L) {
          return T.variants ? Sa(L, T, L.theme.modularCssLayers ? b : void 0) : L.theme.modularCssLayers ? Ao(T.style, b) : T.style;
        };
      }
      return k;
    }, R = (...k) => {
      const T = [], E = k.map(w), L = [];
      if (T.push(s), c && d && L.push(function(M) {
        var N, $;
        const j = ($ = (N = M.theme.components) == null ? void 0 : N[c]) == null ? void 0 : $.styleOverrides;
        if (!j)
          return null;
        const O = {};
        for (const B in j)
          O[B] = Sa(M, j[B], M.theme.modularCssLayers ? "theme" : void 0);
        return d(M, O);
      }), c && !C && L.push(function(M) {
        var O, N;
        const I = M.theme, j = (N = (O = I == null ? void 0 : I.components) == null ? void 0 : O[c]) == null ? void 0 : N.variants;
        return j ? nx(M, j, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || L.push(Go), Array.isArray(E[0])) {
        const y = E.shift(), M = new Array(T.length).fill(""), I = new Array(L.length).fill("");
        let j;
        j = [...M, ...y, ...I], j.raw = [...M, ...y.raw, ...I], T.unshift(j);
      }
      const A = [...T, ...E, ...L], P = S(...A);
      return l.muiName && (P.muiName = l.muiName), P;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
function ik(e, t) {
  return void 0;
}
function lk(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ak(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ck = rx();
function ol(e, t, n = !1) {
  const r = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const s = o;
      if (s === "components" || s === "slots")
        r[s] = {
          ...e[s],
          ...r[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const i = e[s], l = t[s];
        if (!l)
          r[s] = i || {};
        else if (!i)
          r[s] = l;
        else {
          r[s] = {
            ...l
          };
          for (const a in i)
            if (Object.prototype.hasOwnProperty.call(i, a)) {
              const c = a;
              r[s][c] = ol(i[c], l[c], n);
            }
        }
      } else s === "className" && n && t.className !== void 0 ? r.className = te(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : s === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
function uk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ol(t.components[n].defaultProps, r);
}
function dk(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let s = ru(r);
  return o && (s = s[o] || s), uk({
    theme: s,
    name: n,
    props: t
  });
}
const mt = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function fk(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function _p(e, t = 0, n = 1) {
  return fk(e, t, n);
}
function pk(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function co(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return co(pk(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Lr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Lr(10, o));
  } else
    r = r.split(",");
  return r = r.map((s) => parseFloat(s)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const mk = (e) => {
  const t = co(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, yi = (e, t) => {
  try {
    return mk(e);
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
  return t.includes("rgb") ? r = r.map((o, s) => s < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function ox(e) {
  e = co(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, s = r * Math.min(o, 1 - o), i = (c, f = (c + n / 30) % 12) => o - s * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let l = "rgb";
  const a = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), ou({
    type: l,
    values: a
  });
}
function df(e) {
  e = co(e);
  let t = e.type === "hsl" || e.type === "hsla" ? co(ox(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function hk(e, t) {
  const n = df(e), r = df(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Bo(e, t) {
  return e = co(e), t = _p(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, ou(e);
}
function So(e, t, n) {
  try {
    return Bo(e, t);
  } catch {
    return e;
  }
}
function su(e, t) {
  if (e = co(e), t = _p(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return ou(e);
}
function Ve(e, t, n) {
  try {
    return su(e, t);
  } catch {
    return e;
  }
}
function iu(e, t) {
  if (e = co(e), t = _p(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return ou(e);
}
function Ke(e, t, n) {
  try {
    return iu(e, t);
  } catch {
    return e;
  }
}
function ff(e, t = 0.15) {
  return df(e) > 0.5 ? su(e, t) : iu(e, t);
}
function Kl(e, t, n) {
  try {
    return ff(e, t);
  } catch {
    return e;
  }
}
const sx = /* @__PURE__ */ p.createContext(null);
function Wp() {
  return p.useContext(sx);
}
const gk = typeof Symbol == "function" && Symbol.for, yk = gk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function vk(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function xk(e) {
  const {
    children: t,
    theme: n
  } = e, r = Wp(), o = p.useMemo(() => {
    const s = r === null ? {
      ...n
    } : vk(r, n);
    return s != null && (s[yk] = r !== null), s;
  }, [n, r]);
  return /* @__PURE__ */ u.jsx(sx.Provider, {
    value: o,
    children: t
  });
}
const ix = /* @__PURE__ */ p.createContext();
function Sk({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(ix.Provider, {
    value: e ?? !0,
    ...t
  });
}
const vl = () => p.useContext(ix) ?? !1, lx = /* @__PURE__ */ p.createContext(void 0);
function bk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u.jsx(lx.Provider, {
    value: e,
    children: t
  });
}
function wk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? ol(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? ol(o, r, t.components.mergeClassNameAndStyle) : r;
}
function Ck({
  props: e,
  name: t
}) {
  const n = p.useContext(lx);
  return wk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Fh = 0;
function kk(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (Fh += 1, n(`mui-${Fh}`));
  }, [t]), r;
}
const Ek = {
  ...Ca
}, Dh = Ek.useId;
function nr(e) {
  if (Dh !== void 0) {
    const t = Dh();
    return e ?? t;
  }
  return kk(e);
}
function Tk(e) {
  const t = Dp(), n = nr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, mt(() => {
    var l, a;
    const s = document.querySelector("head");
    if (!s)
      return;
    const i = s.firstChild;
    if (o) {
      if (i && ((l = i.hasAttribute) != null && l.call(i, "data-mui-layer-order")) && i.getAttribute("data-mui-layer-order") === n)
        return;
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, s.prepend(c);
    } else
      (a = s.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ u.jsx(Z0, {
    styles: o
  }) : null;
}
const _h = {};
function Wh(e, t, n, r = !1) {
  return p.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const s = n(o), i = e ? {
        ...t,
        [e]: s
      } : s;
      return r ? () => i : i;
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
function ax(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Dp(_h), s = Wp() || _h, i = Wh(r, o, n), l = Wh(r, s, n, !0), a = (r ? i[r] : i).direction === "rtl", c = Tk(i);
  return /* @__PURE__ */ u.jsx(xk, {
    theme: l,
    children: /* @__PURE__ */ u.jsx(hl.Provider, {
      value: i,
      children: /* @__PURE__ */ u.jsx(Sk, {
        value: a,
        children: /* @__PURE__ */ u.jsxs(bk, {
          value: r ? i[r].components : i.components,
          children: [c, t]
        })
      })
    })
  });
}
const Uh = {
  theme: void 0
};
function Rk(e) {
  let t, n;
  return function(o) {
    let s = t;
    return (s === void 0 || o.theme !== n) && (Uh.theme = o.theme, s = tx(e(Uh)), t = s, n = o.theme), s;
  };
}
const Up = "mode", Hp = "color-scheme", Pk = "data-color-scheme";
function Ik(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Up,
    colorSchemeStorageKey: s = Hp,
    attribute: i = Pk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", f = i;
  if (i === "class" && (f = ".%s"), i === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const x = f.substring(1);
    c += `${l}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${l}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const m = f.match(/\[([^[\]]+)\]/);
  if (m) {
    const [x, d] = m[1].split("=");
    d || (c += `${l}.removeAttribute('${x}'.replace('%s', light));
      ${l}.removeAttribute('${x}'.replace('%s', dark));`), c += `
      ${l}.setAttribute('${x}'.replace('%s', colorScheme), ${d ? `${d}.replace('%s', colorScheme)` : '""'});`;
  } else f !== ".%s" && (c += `${l}.setAttribute('${f}', colorScheme);`);
  return /* @__PURE__ */ u.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? a : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${r}';
  const light = localStorage.getItem('${s}-light') || '${n}';
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
function Mk() {
}
const $k = ({
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
      return Mk;
    const r = (o) => {
      const s = o.newValue;
      o.key === e && n(s);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function qu() {
}
function Hh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function cx(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function jk(e) {
  return cx(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Lk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: s = Up,
    colorSchemeStorageKey: i = Hp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = $k,
    noSsr: c = !1
  } = e, f = o.join(","), m = o.length > 1, x = p.useMemo(() => a == null ? void 0 : a({
    key: s,
    storageWindow: l
  }), [a, s, l]), d = p.useMemo(() => a == null ? void 0 : a({
    key: `${i}-light`,
    storageWindow: l
  }), [a, i, l]), v = p.useMemo(() => a == null ? void 0 : a({
    key: `${i}-dark`,
    storageWindow: l
  }), [a, i, l]), [b, C] = p.useState(() => {
    const E = (x == null ? void 0 : x.get(t)) || t, L = (d == null ? void 0 : d.get(n)) || n, A = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: E,
      systemMode: Hh(E),
      lightColorScheme: L,
      darkColorScheme: A
    };
  }), [g, h] = p.useState(c || !m);
  p.useEffect(() => {
    h(!0);
  }, []);
  const S = jk(b), w = p.useCallback((E) => {
    C((L) => {
      if (E === L.mode)
        return L;
      const A = E ?? t;
      return x == null || x.set(A), {
        ...L,
        mode: A,
        systemMode: Hh(A)
      };
    });
  }, [x, t]), R = p.useCallback((E) => {
    E ? typeof E == "string" ? E && !f.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : C((L) => {
      const A = {
        ...L
      };
      return cx(L, (P) => {
        P === "light" && (d == null || d.set(E), A.lightColorScheme = E), P === "dark" && (v == null || v.set(E), A.darkColorScheme = E);
      }), A;
    }) : C((L) => {
      const A = {
        ...L
      }, P = E.light === null ? n : E.light, y = E.dark === null ? r : E.dark;
      return P && (f.includes(P) ? (A.lightColorScheme = P, d == null || d.set(P)) : console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`)), y && (f.includes(y) ? (A.darkColorScheme = y, v == null || v.set(y)) : console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`)), A;
    }) : C((L) => (d == null || d.set(n), v == null || v.set(r), {
      ...L,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [f, d, v, n, r]), k = p.useCallback((E) => {
    b.mode === "system" && C((L) => {
      const A = E != null && E.matches ? "dark" : "light";
      return L.systemMode === A ? L : {
        ...L,
        systemMode: A
      };
    });
  }, [b.mode]), T = p.useRef(k);
  return T.current = k, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const E = (...A) => T.current(...A), L = window.matchMedia("(prefers-color-scheme: dark)");
    return L.addListener(E), E(L), () => {
      L.removeListener(E);
    };
  }, [m]), p.useEffect(() => {
    if (m) {
      const E = (x == null ? void 0 : x.subscribe((P) => {
        (!P || ["light", "dark", "system"].includes(P)) && w(P || t);
      })) || qu, L = (d == null ? void 0 : d.subscribe((P) => {
        (!P || f.match(P)) && R({
          light: P
        });
      })) || qu, A = (v == null ? void 0 : v.subscribe((P) => {
        (!P || f.match(P)) && R({
          dark: P
        });
      })) || qu;
      return () => {
        E(), L(), A();
      };
    }
  }, [R, w, f, t, l, m, x, d, v]), {
    ...b,
    mode: g ? b.mode : void 0,
    systemMode: g ? b.systemMode : void 0,
    colorScheme: g ? S : void 0,
    setMode: w,
    setColorScheme: R
  };
}
const Ok = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ak(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Up,
    colorSchemeStorageKey: o = Hp,
    disableTransitionOnChange: s = !1,
    defaultColorScheme: i,
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
  }, c = /* @__PURE__ */ p.createContext(void 0), f = () => p.useContext(c) || a, m = {}, x = {};
  function d(g) {
    var Ne, be, Ue, xt;
    const {
      children: h,
      theme: S,
      modeStorageKey: w = r,
      colorSchemeStorageKey: R = o,
      disableTransitionOnChange: k = s,
      storageManager: T,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: L = typeof document > "u" ? void 0 : document,
      colorSchemeNode: A = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: P = !1,
      disableStyleSheetGeneration: y = !1,
      defaultMode: M = "system",
      forceThemeRerender: I = !1,
      noSsr: j
    } = g, O = p.useRef(!1), N = Wp(), $ = p.useContext(c), B = !!$ && !P, D = p.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), H = D[t], _ = H || D, {
      colorSchemes: q = m,
      components: V = x,
      cssVarPrefix: K
    } = _, G = Object.keys(q).filter((ie) => !!q[ie]).join(","), Q = p.useMemo(() => G.split(","), [G]), U = typeof i == "string" ? i : i.light, ee = typeof i == "string" ? i : i.dark, ae = q[U] && q[ee] ? M : ((be = (Ne = q[_.defaultColorScheme]) == null ? void 0 : Ne.palette) == null ? void 0 : be.mode) || ((Ue = _.palette) == null ? void 0 : Ue.mode), {
      mode: Te,
      setMode: we,
      systemMode: ge,
      lightColorScheme: ue,
      darkColorScheme: je,
      colorScheme: _e,
      setColorScheme: Ie
    } = Lk({
      supportedColorSchemes: Q,
      defaultLightColorScheme: U,
      defaultDarkColorScheme: ee,
      modeStorageKey: w,
      colorSchemeStorageKey: R,
      defaultMode: ae,
      storageManager: T,
      storageWindow: E,
      noSsr: j
    });
    let Me = Te, se = _e;
    B && (Me = $.mode, se = $.colorScheme);
    let Le = se || _.defaultColorScheme;
    _.vars && !I && (Le = _.defaultColorScheme);
    const Ae = p.useMemo(() => {
      var Be;
      const ie = ((Be = _.generateThemeVars) == null ? void 0 : Be.call(_)) || _.vars, xe = {
        ..._,
        components: V,
        colorSchemes: q,
        cssVarPrefix: K,
        vars: ie
      };
      if (typeof xe.generateSpacing == "function" && (xe.spacing = xe.generateSpacing()), Le) {
        const it = q[Le];
        it && typeof it == "object" && Object.keys(it).forEach((Ce) => {
          it[Ce] && typeof it[Ce] == "object" ? xe[Ce] = {
            ...xe[Ce],
            ...it[Ce]
          } : xe[Ce] = it[Ce];
        });
      }
      return l ? l(xe) : xe;
    }, [_, Le, V, q, K]), We = _.colorSchemeSelector;
    mt(() => {
      if (se && A && We && We !== "media") {
        const ie = We;
        let xe = We;
        if (ie === "class" && (xe = ".%s"), ie === "data" && (xe = "[data-%s]"), ie != null && ie.startsWith("data-") && !ie.includes("%s") && (xe = `[${ie}="%s"]`), xe.startsWith("."))
          A.classList.remove(...Q.map((Be) => xe.substring(1).replace("%s", Be))), A.classList.add(xe.substring(1).replace("%s", se));
        else {
          const Be = xe.replace("%s", se).match(/\[([^\]]+)\]/);
          if (Be) {
            const [it, Ce] = Be[1].split("=");
            Ce || Q.forEach((or) => {
              A.removeAttribute(it.replace(se, or));
            }), A.setAttribute(it, Ce ? Ce.replace(/"|'/g, "") : "");
          } else
            A.setAttribute(xe, se);
        }
      }
    }, [se, We, A, Q]), p.useEffect(() => {
      let ie;
      if (k && O.current && L) {
        const xe = L.createElement("style");
        xe.appendChild(L.createTextNode(Ok)), L.head.appendChild(xe), window.getComputedStyle(L.body), ie = setTimeout(() => {
          L.head.removeChild(xe);
        }, 1);
      }
      return () => {
        clearTimeout(ie);
      };
    }, [se, k, L]), p.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const ke = p.useMemo(() => ({
      allColorSchemes: Q,
      colorScheme: se,
      darkColorScheme: je,
      lightColorScheme: ue,
      mode: Me,
      setColorScheme: Ie,
      setMode: we,
      systemMode: ge
    }), [Q, se, je, ue, Me, Ie, we, ge, Ae.colorSchemeSelector]);
    let $e = !0;
    (y || _.cssVariables === !1 || B && (N == null ? void 0 : N.cssVarPrefix) === K) && ($e = !1);
    const st = /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [/* @__PURE__ */ u.jsx(ax, {
        themeId: H ? t : void 0,
        theme: Ae,
        children: h
      }), $e && /* @__PURE__ */ u.jsx(D0, {
        styles: ((xt = Ae.generateStyleSheets) == null ? void 0 : xt.call(Ae)) || []
      })]
    });
    return B ? st : /* @__PURE__ */ u.jsx(c.Provider, {
      value: ke,
      children: st
    });
  }
  const v = typeof i == "string" ? i : i.light, b = typeof i == "string" ? i : i.dark;
  return {
    CssVarsProvider: d,
    useColorScheme: f,
    getInitColorSchemeScript: (g) => Ik({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...g
    })
  };
}
function Nk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const zk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Vh = (e, t, n, r = []) => {
  let o = e;
  for (let s = 0; s < t.length; s += 1) {
    const i = t[s];
    if (zk.has(i))
      break;
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = n : o && typeof o == "object" && (o[i] = n) : o && typeof o == "object" && (o[i] || (o[i] = r.includes(i) ? [] : {}), o = o[i]);
  }
}, Bk = (e, t, n) => {
  function r(o, s = [], i = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...s, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...s, l], Array.isArray(a) ? [...i, l] : i) : t([...s, l], a, i));
    });
  }
  r(e);
}, Fk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Zu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, s = {}, i = {};
  return Bk(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const f = `--${n ? `${n}-` : ""}${l.join("-")}`, m = Fk(l, a);
        Object.assign(o, {
          [f]: m
        }), Vh(s, l, `var(${f})`, c), Vh(i, l, `var(${f}, ${m})`, c);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: s,
    varsWithDefaults: i
  };
}
function Dk(e, t = {}) {
  const {
    getSelector: n = g,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: s
  } = t, {
    colorSchemes: i = {},
    components: l,
    defaultColorScheme: a = "light",
    ...c
  } = e, {
    vars: f,
    css: m,
    varsWithDefaults: x
  } = Zu(c, t);
  let d = x;
  const v = {}, {
    [a]: b,
    ...C
  } = i;
  if (Object.entries(C || {}).forEach(([w, R]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: E
    } = Zu(R, t);
    d = Wt(d, E), v[w] = {
      css: T,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: R,
      varsWithDefaults: k
    } = Zu(b, t);
    d = Wt(d, k), v[a] = {
      css: w,
      vars: R
    };
  }
  function g(w, R) {
    var T, E;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (T = i[w]) == null ? void 0 : T.palette) == null ? void 0 : E.mode) || w})`]: {
            ":root": R
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
      return Object.entries(v).forEach(([, {
        vars: R
      }]) => {
        w = Wt(w, R);
      }), w;
    },
    generateStyleSheets: () => {
      var L, A;
      const w = [], R = e.defaultColorScheme || "light";
      function k(P, y) {
        Object.keys(y).length && w.push(typeof P == "string" ? {
          [P]: {
            ...y
          }
        } : P);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [R]: T,
        ...E
      } = v;
      if (T) {
        const {
          css: P
        } = T, y = (A = (L = i[R]) == null ? void 0 : L.palette) == null ? void 0 : A.mode, M = !r && y ? {
          colorScheme: y,
          ...P
        } : {
          ...P
        };
        k(n(R, {
          ...M
        }), M);
      }
      return Object.entries(E).forEach(([P, {
        css: y
      }]) => {
        var j, O;
        const M = (O = (j = i[P]) == null ? void 0 : j.palette) == null ? void 0 : O.mode, I = !r && M ? {
          colorScheme: M,
          ...y
        } : {
          ...y
        };
        k(n(P, {
          ...I
        }), I);
      }), s && w.push({
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
function _k(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function pe(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const s = e[o];
    let i = "", l = !0;
    for (let a = 0; a < s.length; a += 1) {
      const c = s[a];
      c && (i += (l === !0 ? "" : " ") + t(c), l = !1, n && n[c] && (i += " " + n[c]));
    }
    r[o] = i;
  }
  return r;
}
function Ju(e, t) {
  var n, r, o;
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const Wk = nu(), Uk = ck("div", {
  name: "MuiStack",
  slot: "Root"
});
function Hk(e) {
  return dk({
    props: e,
    name: "MuiStack",
    defaultTheme: Wk
  });
}
function Vk(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, s) => (r.push(o), s < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${s}`
  })), r), []);
}
const Kk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Gk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...ao({
      theme: t
    }, Yu({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Qc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), s = Yu({
      values: e.direction,
      base: o
    }), i = Yu({
      values: e.spacing,
      base: o
    });
    typeof s == "object" && Object.keys(s).forEach((a, c, f) => {
      if (!s[a]) {
        const x = c > 0 ? s[f[c - 1]] : "column";
        s[a] = x;
      }
    }), n = Wt(n, ao({
      theme: t
    }, i, (a, c) => e.useFlexGap ? {
      gap: Ko(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Kk(c ? s[c] : e.direction)}`]: Ko(r, a)
      }
    }));
  }
  return n = pC(t.breakpoints, n), n;
};
function Yk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Uk,
    useThemeProps: n = Hk,
    componentName: r = "MuiStack"
  } = e, o = () => pe({
    root: ["root"]
  }, (a) => fe(r, a), {}), s = t(Gk);
  return /* @__PURE__ */ p.forwardRef(function(a, c) {
    const f = n(a), {
      component: m = "div",
      direction: x = "column",
      spacing: d = 0,
      divider: v,
      children: b,
      className: C,
      useFlexGap: g = !1,
      ...h
    } = f, S = {
      direction: x,
      spacing: d,
      useFlexGap: g
    }, w = o();
    return /* @__PURE__ */ u.jsx(s, {
      as: m,
      ownerState: S,
      ref: c,
      className: te(w.root, C),
      ...h,
      children: v ? Vk(b, v) : b
    });
  });
}
function ux() {
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
      paper: Zi.white,
      default: Zi.white
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
const dx = ux();
function fx() {
  return {
    text: {
      primary: Zi.white,
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
      active: Zi.white,
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
const pf = fx();
function Kh(e, t, n, r) {
  const o = r.light || r, s = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = iu(e.main, o) : t === "dark" && (e.dark = su(e.main, s)));
}
function Gh(e, t, n, r, o) {
  const s = o.light || o, i = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(s * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(i * 100).toFixed(0)}%)`));
}
function Qk(e = "light") {
  return e === "dark" ? {
    main: ss[200],
    light: ss[50],
    dark: ss[400]
  } : {
    main: ss[700],
    light: ss[400],
    dark: ss[800]
  };
}
function Xk(e = "light") {
  return e === "dark" ? {
    main: os[200],
    light: os[50],
    dark: os[400]
  } : {
    main: os[500],
    light: os[300],
    dark: os[700]
  };
}
function qk(e = "light") {
  return e === "dark" ? {
    main: rs[500],
    light: rs[300],
    dark: rs[700]
  } : {
    main: rs[700],
    light: rs[400],
    dark: rs[800]
  };
}
function Zk(e = "light") {
  return e === "dark" ? {
    main: is[400],
    light: is[300],
    dark: is[700]
  } : {
    main: is[700],
    light: is[500],
    dark: is[900]
  };
}
function Jk(e = "light") {
  return e === "dark" ? {
    main: ls[400],
    light: ls[300],
    dark: ls[700]
  } : {
    main: ls[800],
    light: ls[500],
    dark: ls[900]
  };
}
function e2(e = "light") {
  return e === "dark" ? {
    main: li[400],
    light: li[300],
    dark: li[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: li[500],
    dark: li[900]
  };
}
function t2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Vp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...s
  } = e, i = e.primary || Qk(t), l = e.secondary || Xk(t), a = e.error || qk(t), c = e.info || Zk(t), f = e.success || Jk(t), m = e.warning || e2(t);
  function x(C) {
    return o ? t2(C) : hk(C, pf.text.primary) >= n ? pf.text.primary : dx.text.primary;
  }
  const d = ({
    color: C,
    name: g,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[h] && (C.main = C[h]), !C.hasOwnProperty("main"))
      throw new Error(Lr(11, g ? ` (${g})` : "", h));
    if (typeof C.main != "string")
      throw new Error(Lr(12, g ? ` (${g})` : "", JSON.stringify(C.main)));
    return o ? (Gh(o, C, "light", S, r), Gh(o, C, "dark", w, r)) : (Kh(C, "light", S, r), Kh(C, "dark", w, r)), C.contrastText || (C.contrastText = x(C.main)), C;
  };
  let v;
  return t === "light" ? v = ux() : t === "dark" && (v = fx()), Wt({
    // A collection of common colors.
    common: {
      ...Zi
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
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
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Kb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: x,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r,
    // The light and dark mode object.
    ...v
  }, s);
}
function n2(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, s] = r;
    typeof s == "object" && (t[o] = `${s.fontStyle ? `${s.fontStyle} ` : ""}${s.fontVariant ? `${s.fontVariant} ` : ""}${s.fontWeight ? `${s.fontWeight} ` : ""}${s.fontStretch ? `${s.fontStretch} ` : ""}${s.fontSize || ""}${s.lineHeight ? `/${s.lineHeight} ` : ""}${s.fontFamily || ""}`);
  }), t;
}
function r2(e, t) {
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
function o2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yh = {
  textTransform: "uppercase"
}, Qh = '"Roboto", "Helvetica", "Arial", sans-serif';
function px(e, t) {
  const {
    fontFamily: n = Qh,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: i = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: a = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: f,
    ...m
  } = typeof t == "function" ? t(e) : t, x = r / 14, d = f || ((C) => `${C / a * x}rem`), v = (C, g, h, S, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: d(g),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Qh ? {
      letterSpacing: `${o2(S / g)}em`
    } : {},
    ...w,
    ...c
  }), b = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(s, 48, 1.167, 0),
    h4: v(s, 34, 1.235, 0.25),
    h5: v(s, 24, 1.334, 0),
    h6: v(i, 20, 1.6, 0.15),
    subtitle1: v(s, 16, 1.75, 0.15),
    subtitle2: v(i, 14, 1.57, 0.1),
    body1: v(s, 16, 1.5, 0.15),
    body2: v(s, 14, 1.43, 0.15),
    button: v(i, 14, 1.75, 0.4, Yh),
    caption: v(s, 12, 1.66, 0.4),
    overline: v(s, 12, 2.66, 1, Yh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Wt({
    htmlFontSize: a,
    pxToRem: d,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: s,
    fontWeightMedium: i,
    fontWeightBold: l,
    ...b
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const s2 = 0.2, i2 = 0.14, l2 = 0.12;
function lt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${s2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${i2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${l2})`].join(",");
}
const a2 = ["none", lt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), lt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), lt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), lt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), lt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), lt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), lt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), lt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), lt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), lt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), lt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), lt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), lt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), lt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), lt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), lt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), lt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), lt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), lt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), lt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), lt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), lt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), lt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), lt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], c2 = ["all"], u2 = {}, d2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, f2 = {
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
function Xh(e) {
  return `${Math.round(e)}ms`;
}
function p2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function m2(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...d2,
    ...t.easing
  }, r = {
    ...f2,
    ...t.duration
  }, o = (i = c2, l = u2) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: f = 0,
      ...m
    } = l;
    return (Array.isArray(i) ? i : [i]).map((x) => `${x} ${typeof a == "string" ? a : Xh(a)} ${c} ${typeof f == "string" ? f : Xh(f)}`).join(",");
  }, s = t.create ?? o;
  return {
    getAutoHeightDuration: p2,
    create: s,
    ...t,
    easing: n,
    duration: r
  };
}
const h2 = {};
function g2(e = h2) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const y2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function v2(e) {
  return Er(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function mx(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let s = 0; s < o.length; s++) {
      const [i, l] = o[s];
      !v2(l) || i.startsWith("unstable_") || i.startsWith("internal_") ? delete r[i] : Er(l) && (r[i] = {
        ...l
      }, n(r[i]));
    }
  }
  return n(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function qh(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const x2 = (e) => {
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
function S2(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Bo(t, x2(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${qh(n)})` : iu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${qh(n)})` : su(t, n);
    }
  });
}
function mf(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: s = {},
    motion: i = {},
    transitions: l = {},
    typography: a = {},
    shape: c,
    colorSpace: f,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Lr(22));
  const x = Vp({
    ...s,
    colorSpace: f
  }), d = nu(e);
  let v = Wt(d, {
    mixins: r2(d.breakpoints, r),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: a2.slice(),
    typography: px(x, a),
    motion: g2(i),
    transitions: m2(l),
    zIndex: {
      ...y2
    }
  });
  return v = Wt(v, m), v = t.reduce((b, C) => Wt(b, C), v), delete v.transitions.reducedMotion, v.unstable_sxConfig = {
    ...tu,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, v.unstable_sx = function(C) {
    return Go({
      sx: C,
      theme: this
    });
  }, v.toRuntimeSource = mx, S2(v), v;
}
function hf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const b2 = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = hf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function hx(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function gx(e) {
  return e === "dark" ? b2 : [];
}
function w2(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...s
  } = e, i = Vp({
    ...t,
    colorSpace: o
  });
  return {
    palette: i,
    opacity: {
      ...hx(i.mode),
      ...n
    },
    overlays: r || gx(i.mode),
    ...s
  };
}
function C2(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const k2 = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], E2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let s = o;
  if (o === "class" && (s = ".%s"), o === "data" && (s = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (s = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const i = {};
      return k2(e.cssVarPrefix).forEach((l) => {
        i[l] = n[l], delete n[l];
      }), s === "media" ? {
        [r]: n,
        "@media (prefers-color-scheme: dark)": {
          [r]: i
        }
      } : s ? {
        [s.replace("%s", t)]: i,
        [`${r}, ${s.replace("%s", t)}`]: n
      } : {
        [r]: {
          ...n,
          ...i
        }
      };
    }
    if (s && s !== "media")
      return `${r}, ${s.replace("%s", String(t))}`;
  } else if (t) {
    if (s === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [r]: n
        }
      };
    if (s)
      return s.replace("%s", String(t));
  }
  return r;
};
function T2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function vi(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ox(e);
}
function Sr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = yi(vi(e[t])));
}
function R2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ir = (e) => {
  try {
    return e();
  } catch {
  }
}, P2 = (e = "mui") => Nk(e);
function ed(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const s = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = w2({
      ...n,
      palette: {
        mode: s,
        ...n == null ? void 0 : n.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: i,
    ...l
  } = mf({
    ...r,
    palette: {
      mode: s,
      ...n == null ? void 0 : n.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...n,
    palette: i,
    opacity: {
      ...hx(s),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || gx(s)
  }, l;
}
function I2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: s = "mui",
    nativeColor: i = !1,
    shouldSkipGeneratingVar: l = C2,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...f
  } = e, m = Object.keys(n)[0], x = r || (n.light && m !== "light" ? "light" : m), d = P2(s), {
    [x]: v,
    light: b,
    dark: C,
    ...g
  } = n, h = {
    ...g
  };
  let S = v;
  if ((x === "dark" && !("dark" in n) || x === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(Lr(21, x));
  let w;
  i && (w = "oklch");
  const R = ed(w, h, S, f, x);
  b && !h.light && ed(w, h, b, void 0, "light"), C && !h.dark && ed(w, h, C, void 0, "dark");
  let k = {
    defaultColorScheme: x,
    ...R,
    cssVarPrefix: s,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: d,
    colorSchemes: h,
    font: {
      ...n2(R.typography),
      ...R.font
    },
    spacing: R2(f.spacing)
  };
  Object.keys(k.colorSchemes).forEach((P) => {
    const y = k.colorSchemes[P].palette, M = (j) => {
      const O = j.split("-"), N = O[1], $ = O[2];
      return d(j, y[N][$]);
    };
    y.mode === "light" && (F(y.common, "background", "#fff"), F(y.common, "onBackground", "#000")), y.mode === "dark" && (F(y.common, "background", "#000"), F(y.common, "onBackground", "#fff"));
    function I(j, O, N) {
      if (w) {
        let $;
        return j === So && ($ = `transparent ${((1 - N) * 100).toFixed(0)}%`), j === Ve && ($ = `#000 ${(N * 100).toFixed(0)}%`), j === Ke && ($ = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${w}, ${O}, ${$})`;
      }
      return j(O, N);
    }
    if (T2(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      F(y.Alert, "errorColor", I(Ve, i ? d("palette-error-light") : y.error.light, 0.6)), F(y.Alert, "infoColor", I(Ve, i ? d("palette-info-light") : y.info.light, 0.6)), F(y.Alert, "successColor", I(Ve, i ? d("palette-success-light") : y.success.light, 0.6)), F(y.Alert, "warningColor", I(Ve, i ? d("palette-warning-light") : y.warning.light, 0.6)), F(y.Alert, "errorFilledBg", M("palette-error-main")), F(y.Alert, "infoFilledBg", M("palette-info-main")), F(y.Alert, "successFilledBg", M("palette-success-main")), F(y.Alert, "warningFilledBg", M("palette-warning-main")), F(y.Alert, "errorFilledColor", ir(() => y.getContrastText(y.error.main))), F(y.Alert, "infoFilledColor", ir(() => y.getContrastText(y.info.main))), F(y.Alert, "successFilledColor", ir(() => y.getContrastText(y.success.main))), F(y.Alert, "warningFilledColor", ir(() => y.getContrastText(y.warning.main))), F(y.Alert, "errorStandardBg", I(Ke, i ? d("palette-error-light") : y.error.light, 0.9)), F(y.Alert, "infoStandardBg", I(Ke, i ? d("palette-info-light") : y.info.light, 0.9)), F(y.Alert, "successStandardBg", I(Ke, i ? d("palette-success-light") : y.success.light, 0.9)), F(y.Alert, "warningStandardBg", I(Ke, i ? d("palette-warning-light") : y.warning.light, 0.9)), F(y.Alert, "errorIconColor", M("palette-error-main")), F(y.Alert, "infoIconColor", M("palette-info-main")), F(y.Alert, "successIconColor", M("palette-success-main")), F(y.Alert, "warningIconColor", M("palette-warning-main")), F(y.AppBar, "defaultBg", M("palette-grey-100")), F(y.Avatar, "defaultBg", M("palette-grey-400")), F(y.Button, "inheritContainedBg", M("palette-grey-300")), F(y.Button, "inheritContainedHoverBg", M("palette-grey-A100")), F(y.Chip, "defaultBorder", M("palette-grey-400")), F(y.Chip, "defaultAvatarColor", M("palette-grey-700")), F(y.Chip, "defaultIconColor", M("palette-grey-700")), F(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(y.LinearProgress, "primaryBg", I(Ke, i ? d("palette-primary-main") : y.primary.main, 0.62)), F(y.LinearProgress, "secondaryBg", I(Ke, i ? d("palette-secondary-main") : y.secondary.main, 0.62)), F(y.LinearProgress, "errorBg", I(Ke, i ? d("palette-error-main") : y.error.main, 0.62)), F(y.LinearProgress, "infoBg", I(Ke, i ? d("palette-info-main") : y.info.main, 0.62)), F(y.LinearProgress, "successBg", I(Ke, i ? d("palette-success-main") : y.success.main, 0.62)), F(y.LinearProgress, "warningBg", I(Ke, i ? d("palette-warning-light") : y.warning.main, 0.62)), F(y.Skeleton, "bg", w ? I(So, i ? d("palette-text-primary") : y.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), F(y.Slider, "primaryTrack", I(Ke, i ? d("palette-primary-main") : y.primary.main, 0.62)), F(y.Slider, "secondaryTrack", I(Ke, i ? d("palette-secondary-main") : y.secondary.main, 0.62)), F(y.Slider, "errorTrack", I(Ke, i ? d("palette-error-main") : y.error.main, 0.62)), F(y.Slider, "infoTrack", I(Ke, i ? d("palette-info-main") : y.info.main, 0.62)), F(y.Slider, "successTrack", I(Ke, i ? d("palette-success-main") : y.success.main, 0.62)), F(y.Slider, "warningTrack", I(Ke, i ? d("palette-warning-main") : y.warning.main, 0.62));
      const j = w ? I(Ve, i ? d("palette-background-default") : y.background.default, 0.6825) : Kl(y.background.default, 0.8);
      F(y.SnackbarContent, "bg", j), F(y.SnackbarContent, "color", ir(() => w ? pf.text.primary : y.getContrastText(j))), F(y.SpeedDialAction, "fabHoverBg", Kl(y.background.paper, 0.15)), F(y.StepConnector, "border", M("palette-grey-400")), F(y.StepContent, "border", M("palette-grey-400")), F(y.Switch, "defaultColor", M("palette-common-white")), F(y.Switch, "defaultDisabledColor", M("palette-grey-100")), F(y.Switch, "primaryDisabledColor", I(Ke, i ? d("palette-primary-main") : y.primary.main, 0.62)), F(y.Switch, "secondaryDisabledColor", I(Ke, i ? d("palette-secondary-main") : y.secondary.main, 0.62)), F(y.Switch, "errorDisabledColor", I(Ke, i ? d("palette-error-main") : y.error.main, 0.62)), F(y.Switch, "infoDisabledColor", I(Ke, i ? d("palette-info-main") : y.info.main, 0.62)), F(y.Switch, "successDisabledColor", I(Ke, i ? d("palette-success-main") : y.success.main, 0.62)), F(y.Switch, "warningDisabledColor", I(Ke, i ? d("palette-warning-main") : y.warning.main, 0.62)), F(y.TableCell, "border", I(Ke, So(i ? d("palette-divider") : y.divider, 1), 0.88)), F(y.Tooltip, "bg", I(So, i ? d("palette-grey-700") : y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      F(y.Alert, "errorColor", I(Ke, i ? d("palette-error-light") : y.error.light, 0.6)), F(y.Alert, "infoColor", I(Ke, i ? d("palette-info-light") : y.info.light, 0.6)), F(y.Alert, "successColor", I(Ke, i ? d("palette-success-light") : y.success.light, 0.6)), F(y.Alert, "warningColor", I(Ke, i ? d("palette-warning-light") : y.warning.light, 0.6)), F(y.Alert, "errorFilledBg", M("palette-error-dark")), F(y.Alert, "infoFilledBg", M("palette-info-dark")), F(y.Alert, "successFilledBg", M("palette-success-dark")), F(y.Alert, "warningFilledBg", M("palette-warning-dark")), F(y.Alert, "errorFilledColor", ir(() => y.getContrastText(y.error.dark))), F(y.Alert, "infoFilledColor", ir(() => y.getContrastText(y.info.dark))), F(y.Alert, "successFilledColor", ir(() => y.getContrastText(y.success.dark))), F(y.Alert, "warningFilledColor", ir(() => y.getContrastText(y.warning.dark))), F(y.Alert, "errorStandardBg", I(Ve, i ? d("palette-error-light") : y.error.light, 0.9)), F(y.Alert, "infoStandardBg", I(Ve, i ? d("palette-info-light") : y.info.light, 0.9)), F(y.Alert, "successStandardBg", I(Ve, i ? d("palette-success-light") : y.success.light, 0.9)), F(y.Alert, "warningStandardBg", I(Ve, i ? d("palette-warning-light") : y.warning.light, 0.9)), F(y.Alert, "errorIconColor", M("palette-error-main")), F(y.Alert, "infoIconColor", M("palette-info-main")), F(y.Alert, "successIconColor", M("palette-success-main")), F(y.Alert, "warningIconColor", M("palette-warning-main")), F(y.AppBar, "defaultBg", M("palette-grey-900")), F(y.AppBar, "darkBg", M("palette-background-paper")), F(y.AppBar, "darkColor", M("palette-text-primary")), F(y.Avatar, "defaultBg", M("palette-grey-600")), F(y.Button, "inheritContainedBg", M("palette-grey-800")), F(y.Button, "inheritContainedHoverBg", M("palette-grey-700")), F(y.Chip, "defaultBorder", M("palette-grey-700")), F(y.Chip, "defaultAvatarColor", M("palette-grey-300")), F(y.Chip, "defaultIconColor", M("palette-grey-300")), F(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(y.LinearProgress, "primaryBg", I(Ve, i ? d("palette-primary-main") : y.primary.main, 0.5)), F(y.LinearProgress, "secondaryBg", I(Ve, i ? d("palette-secondary-main") : y.secondary.main, 0.5)), F(y.LinearProgress, "errorBg", I(Ve, i ? d("palette-error-main") : y.error.main, 0.5)), F(y.LinearProgress, "infoBg", I(Ve, i ? d("palette-info-main") : y.info.main, 0.5)), F(y.LinearProgress, "successBg", I(Ve, i ? d("palette-success-main") : y.success.main, 0.5)), F(y.LinearProgress, "warningBg", I(Ve, i ? d("palette-warning-main") : y.warning.main, 0.5)), F(y.Skeleton, "bg", w ? I(So, i ? d("palette-text-primary") : y.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), F(y.Slider, "primaryTrack", I(Ve, i ? d("palette-primary-main") : y.primary.main, 0.5)), F(y.Slider, "secondaryTrack", I(Ve, i ? d("palette-secondary-main") : y.secondary.main, 0.5)), F(y.Slider, "errorTrack", I(Ve, i ? d("palette-error-main") : y.error.main, 0.5)), F(y.Slider, "infoTrack", I(Ve, i ? d("palette-info-main") : y.info.main, 0.5)), F(y.Slider, "successTrack", I(Ve, i ? d("palette-success-main") : y.success.main, 0.5)), F(y.Slider, "warningTrack", I(Ve, i ? d("palette-warning-light") : y.warning.main, 0.5));
      const j = w ? I(Ke, i ? d("palette-background-default") : y.background.default, 0.985) : Kl(y.background.default, 0.98);
      F(y.SnackbarContent, "bg", j), F(y.SnackbarContent, "color", ir(() => w ? dx.text.primary : y.getContrastText(j))), F(y.SpeedDialAction, "fabHoverBg", Kl(y.background.paper, 0.15)), F(y.StepConnector, "border", M("palette-grey-600")), F(y.StepContent, "border", M("palette-grey-600")), F(y.Switch, "defaultColor", M("palette-grey-300")), F(y.Switch, "defaultDisabledColor", M("palette-grey-600")), F(y.Switch, "primaryDisabledColor", I(Ve, i ? d("palette-primary-main") : y.primary.main, 0.55)), F(y.Switch, "secondaryDisabledColor", I(Ve, i ? d("palette-secondary-main") : y.secondary.main, 0.55)), F(y.Switch, "errorDisabledColor", I(Ve, i ? d("palette-error-main") : y.error.main, 0.55)), F(y.Switch, "infoDisabledColor", I(Ve, i ? d("palette-info-main") : y.info.main, 0.55)), F(y.Switch, "successDisabledColor", I(Ve, i ? d("palette-success-main") : y.success.main, 0.55)), F(y.Switch, "warningDisabledColor", I(Ve, i ? d("palette-warning-light") : y.warning.main, 0.55)), F(y.TableCell, "border", I(Ve, So(i ? d("palette-divider") : y.divider, 1), 0.68)), F(y.Tooltip, "bg", I(So, i ? d("palette-grey-700") : y.grey[700], 0.92));
    }
    i || (Sr(y.background, "default"), Sr(y.background, "paper"), Sr(y.common, "background"), Sr(y.common, "onBackground"), Sr(y, "divider")), Object.keys(y).forEach((j) => {
      const O = y[j];
      j !== "tonalOffset" && !i && O && typeof O == "object" && (O.main && F(y[j], "mainChannel", yi(vi(O.main))), O.light && F(y[j], "lightChannel", yi(vi(O.light))), O.dark && F(y[j], "darkChannel", yi(vi(O.dark))), O.contrastText && F(y[j], "contrastTextChannel", yi(vi(O.contrastText))), j === "text" && (Sr(y[j], "primary"), Sr(y[j], "secondary")), j === "action" && (O.active && Sr(y[j], "active"), O.selected && Sr(y[j], "selected")));
    });
  }), k = t.reduce((P, y) => Wt(P, y), k);
  const T = {
    prefix: s,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: E2(k),
    enableContrastVars: i
  }, {
    vars: E,
    generateThemeVars: L,
    generateStyleSheets: A
  } = Dk(k, T);
  return k.vars = E, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([P, y]) => {
    k[P] = y;
  }), k.generateThemeVars = L, k.generateStyleSheets = A, k.generateSpacing = function() {
    return q0(f.spacing, Qc(this));
  }, k.getColorSchemeSelector = _k(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...tu,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, k.unstable_sx = function(y) {
    return Go({
      sx: y,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = mx, k;
}
function Zh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Vp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function lu(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: s = n == null ? void 0 : n.mode,
    ...i
  } = e, l = s || "light", a = o == null ? void 0 : o[l], c = {
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
      return mf(e, ...t);
    let f = n;
    "palette" in e || c[l] && (c[l] !== !0 ? f = c[l].palette : l === "dark" && (f = {
      mode: "dark"
    }));
    const m = mf({
      ...e,
      palette: f
    }, ...t);
    return m.defaultColorScheme = l, m.colorSchemes = c, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: m.palette
    }, Zh(m, "dark", c.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: m.palette
    }, Zh(m, "light", c.light)), m;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), I2({
    ...i,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function M2(e) {
  return fe("MuiCheckbox", e);
}
const td = ce("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
function qa(e) {
  return typeof e == "string";
}
function au(e, t = 166) {
  let n;
  function r(...o) {
    const s = () => {
      e.apply(this, o);
    };
    clearTimeout(n), n = setTimeout(s, t);
  }
  return r.clear = () => {
    clearTimeout(n);
  }, r;
}
function gt(...e) {
  const t = p.useRef(void 0), n = p.useCallback((r) => {
    const o = e.map((s) => {
      if (s == null)
        return null;
      if (typeof s == "function") {
        const i = s, l = i(r);
        return typeof l == "function" ? l : () => {
          i(null);
        };
      }
      return s.current = r, () => {
        s.current = null;
      };
    });
    return () => {
      o.forEach((s) => s == null ? void 0 : s());
    };
  }, e);
  return p.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function tt(e) {
  const t = p.useRef(e);
  return mt(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function vt(e) {
  return e && e.ownerDocument || document;
}
function rr(e) {
  return vt(e).defaultView || window;
}
function Gl(e) {
  return parseInt(e, 10) || 0;
}
const $2 = {
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
function j2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Jh(e) {
  return j2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const L2 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: s = 1,
    style: i,
    value: l,
    ...a
  } = t, {
    current: c
  } = p.useRef(l != null), f = p.useRef(null), m = gt(n, f), x = p.useRef(null), d = p.useRef(null), v = p.useCallback(() => {
    const S = f.current, w = d.current;
    if (!S || !w)
      return;
    const k = rr(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = S.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const T = k.boxSizing, E = Gl(k.paddingBottom) + Gl(k.paddingTop), L = Gl(k.borderBottomWidth) + Gl(k.borderTopWidth), A = w.scrollHeight;
    w.value = "x";
    const P = w.scrollHeight;
    let y = A;
    s && (y = Math.max(Number(s) * P, y)), o && (y = Math.min(Number(o) * P, y)), y = Math.max(y, P);
    const M = y + (T === "border-box" ? E + L : 0), I = Math.abs(y - A) <= 1;
    return {
      outerHeightStyle: M,
      overflowing: I
    };
  }, [o, s, t.placeholder]), b = tt(() => {
    const S = f.current, w = v();
    if (!S || !w || Jh(w))
      return !1;
    const R = w.outerHeightStyle;
    return x.current != null && x.current !== R;
  }), C = p.useCallback(() => {
    const S = f.current, w = v();
    if (!S || !w || Jh(w))
      return;
    const R = w.outerHeightStyle;
    x.current !== R && (x.current = R, S.style.height = `${R}px`), S.style.overflow = w.overflowing ? "hidden" : "";
  }, [v]), g = p.useRef(-1);
  mt(() => {
    const S = au(C), w = f == null ? void 0 : f.current;
    if (!w)
      return;
    const R = rr(w);
    R.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(g.current), C(), g.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      S.clear(), cancelAnimationFrame(g.current), R.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [v, C, b]), mt(() => {
    C();
  });
  const h = (S) => {
    c || C();
    const w = S.target, R = w.value.length, k = w.value.endsWith(`
`), T = w.selectionStart === R;
    k && T && w.setSelectionRange(R, R), r && r(S);
  };
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx("textarea", {
      value: l,
      onChange: h,
      ref: m,
      rows: s,
      style: i,
      ...a
    }), /* @__PURE__ */ u.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: d,
      tabIndex: -1,
      style: {
        ...$2.shadow,
        ...i,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), xl = /* @__PURE__ */ p.createContext(void 0);
function yx() {
  return p.useContext(xl);
}
function qo({
  props: e,
  states: t
}) {
  const n = p.useContext(xl), r = {};
  return t.forEach((o) => {
    const s = e[o];
    r[o] = s === void 0 && n ? n[o] : s;
  }), [r, n];
}
const Kp = lu();
function ho() {
  const e = ru(Kp);
  return e[gr] || e;
}
function O2(e) {
  return /* @__PURE__ */ u.jsx(Z0, {
    ...e,
    defaultTheme: Kp,
    themeId: gr
  });
}
function vx(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const nn = (e) => vx(e) && e !== "classes", W = rx({
  themeId: gr,
  defaultTheme: Kp,
  rootShouldForwardProp: nn
});
function A2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ u.jsx(O2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ye = Rk;
function me(e) {
  return Ck(e);
}
function fr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function eg(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Za(e, t = !1) {
  return e && (eg(e.value) && e.value !== "" || t && eg(e.defaultValue) && e.defaultValue !== "");
}
function N2(e) {
  return e.startAdornment;
}
function z2(e) {
  return fe("MuiInputBase", e);
}
const yn = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), B2 = {
  transition: "none"
};
function F2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Gp = (e) => e.scrollTop, xx = {}, D2 = ["all"], _2 = {};
function jn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function Sx(e, t, n, r, o, s) {
  const i = e === "exited" && !t ? r : n[e] || n.exited;
  return o || s ? {
    ...i,
    ...o,
    ...s
  } : i;
}
function Ja(e, t) {
  const {
    timeout: n,
    easing: r,
    style: o = xx
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Yp(e, t) {
  var r;
  const n = t ?? B2;
  return F2((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function bt(e, t = D2, n = _2) {
  var i, l;
  const r = (l = (i = e.transitions) == null ? void 0 : i.create) == null ? void 0 : l.call(i, t, n), o = Yp(e);
  if (r === void 0)
    return o ?? xx;
  const s = {
    transition: r
  };
  return o ? {
    ...s,
    ...o
  } : s;
}
var tg;
const gf = "mui-auto-fill", ec = "mui-auto-fill-cancel", cu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${oe(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, uu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, W2 = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: s,
    focused: i,
    formControl: l,
    fullWidth: a,
    hiddenLabel: c,
    multiline: f,
    readOnly: m,
    size: x,
    startAdornment: d,
    type: v
  } = e, b = {
    root: ["root", `color${oe(n)}`, r && "disabled", o && "error", a && "fullWidth", i && "focused", l && "formControl", x && x !== "medium" && `size${oe(x)}`, f && "multiline", d && "adornedStart", s && "adornedEnd", c && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return pe(b, z2, t);
}, du = W("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: cu
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
  [`&.${yn.disabled}`]: {
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
}))), fu = W("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: uu
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
    ...bt(e, "opacity", {
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
    [`label[data-shrink=false] + .${yn.formControl} &`]: {
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
    [`&.${yn.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    variants: [{
      props: ({
        ownerState: s
      }) => !s.disableInjectingGlobalStyles,
      style: {
        animationName: ec,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: gf
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
        ownerState: s
      }) => s.multiline,
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
})), ng = A2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${gf}`]: {
    from: {
      animationName: gf
    }
  },
  [`@keyframes ${ec}`]: {
    from: {
      animationName: ec
    }
  }
}), pu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": s,
    autoComplete: i,
    autoFocus: l,
    className: a,
    color: c,
    defaultValue: f,
    disabled: m,
    disableInjectingGlobalStyles: x,
    endAdornment: d,
    error: v,
    fullWidth: b = !1,
    id: C,
    inputComponent: g = "input",
    inputProps: h = {},
    inputRef: S,
    margin: w,
    maxRows: R,
    minRows: k,
    multiline: T = !1,
    name: E,
    onBlur: L,
    onChange: A,
    onClick: P,
    onFocus: y,
    onKeyDown: M,
    onKeyUp: I,
    placeholder: j,
    readOnly: O,
    renderSuffix: N,
    rows: $,
    size: B,
    slotProps: D = {},
    slots: H = {},
    startAdornment: _,
    type: q = "text",
    value: V,
    ...K
  } = r, G = h.value != null ? h.value : V, {
    current: Q
  } = p.useRef(G != null), U = p.useRef(), ee = p.useCallback((ie) => {
  }, []), ae = gt(U, S, h.ref, ee), [Te, we] = p.useState(!1), [ge, ue] = qo({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ge.focused = ue ? ue.focused : Te, p.useEffect(() => {
    !ue && m && Te && (we(!1), L && L());
  }, [ue, m, Te, L]);
  const je = ue && ue.onFilled, _e = ue && ue.onEmpty, Ie = p.useCallback((ie) => {
    Za(ie) ? je && je() : _e && _e();
  }, [je, _e]);
  mt(() => {
    Q && Ie({
      value: G
    });
  }, [G, Ie, Q]), mt(() => {
    if (!l)
      return;
    const ie = U.current;
    if (!ie)
      return;
    const xe = vt(ie), Be = fr(xe), it = Be == null || Be === xe.body || Be === xe.documentElement;
    ie === Be ? ue && ue.onFocus ? ue.onFocus() : we(!0) : it && ie.focus();
  }, [l]);
  const Me = (ie) => {
    y && y(ie), h.onFocus && h.onFocus(ie), ue && ue.onFocus ? ue.onFocus(ie) : we(!0);
  }, se = (ie) => {
    L && L(ie), h.onBlur && h.onBlur(ie), ue && ue.onBlur ? ue.onBlur(ie) : we(!1);
  }, Le = (ie, ...xe) => {
    if (!Q) {
      const Be = ie.target || U.current;
      if (Be == null)
        throw new Error(Lr(1));
      Ie({
        value: Be.value
      });
    }
    h.onChange && h.onChange(ie, ...xe), A && A(ie, ...xe);
  };
  p.useEffect(() => {
    Ie(U.current);
  }, []);
  const Ae = (ie) => {
    U.current && ie.currentTarget === ie.target && U.current.focus(), P && P(ie);
  };
  let We = g, ke = h;
  T && We === "input" && ($ ? ke = {
    type: void 0,
    minRows: $,
    maxRows: $,
    ...ke
  } : ke = {
    type: void 0,
    maxRows: R,
    minRows: k,
    ...ke
  }, We = L2);
  const $e = (ie) => {
    Ie(ie.animationName === ec ? U.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    ue && ue.setAdornedStart(!!_);
  }, [ue, _]);
  const st = {
    ...r,
    color: ge.color || "primary",
    disabled: ge.disabled,
    endAdornment: d,
    error: ge.error,
    focused: ge.focused,
    formControl: ue,
    fullWidth: b,
    hiddenLabel: ge.hiddenLabel,
    multiline: T,
    size: ge.size,
    startAdornment: _,
    type: q
  }, Ne = W2(st), be = H.root || du, Ue = D.root || {}, xt = H.input || fu;
  return ke = {
    ...ke,
    ...D.input
  }, /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [!x && typeof ng == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (tg || (tg = /* @__PURE__ */ u.jsx(ng, {}))), /* @__PURE__ */ u.jsxs(be, {
      ...Ue,
      ref: n,
      onClick: Ae,
      ...K,
      ...!qa(be) && {
        ownerState: {
          ...st,
          ...Ue.ownerState
        }
      },
      className: te(Ne.root, Ue.className, a, O && "MuiInputBase-readOnly"),
      children: [_, /* @__PURE__ */ u.jsx(xl.Provider, {
        value: null,
        children: /* @__PURE__ */ u.jsx(xt, {
          "aria-invalid": ge.error,
          "aria-describedby": o,
          "aria-label": s,
          autoComplete: i,
          autoFocus: l,
          defaultValue: f,
          disabled: ge.disabled,
          id: C,
          onAnimationStart: $e,
          name: E,
          placeholder: j,
          readOnly: O,
          required: ge.required,
          rows: $,
          value: G,
          onKeyDown: M,
          onKeyUp: I,
          type: q,
          ...ke,
          ...!qa(xt) && {
            as: We,
            ownerState: {
              ...st,
              ...ke.ownerState
            }
          },
          ref: ae,
          className: te(Ne.input, ke.className, O && "MuiInputBase-readOnly"),
          onBlur: se,
          onChange: Le,
          onFocus: Me
        })
      }), d, N ? N({
        ...ge,
        startAdornment: _
      }) : null]
    })]
  });
});
function U2(e) {
  return fe("MuiFilledInput", e);
}
const bo = {
  ...yn,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function H2(e) {
  return fe("MuiFormControlLabel", e);
}
const xi = ce("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementEnd", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function V2(e) {
  return fe("MuiFormHelperText", e);
}
const rg = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function K2(e) {
  return fe("MuiFormLabel", e);
}
const Ii = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function G2(e) {
  return fe("MuiInput", e);
}
const ci = {
  ...yn,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function Y2(e) {
  return fe("MuiMenuItem", e);
}
const ui = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function Q2(e) {
  return fe("MuiNativeSelect", e);
}
const Qp = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function X2(e) {
  return fe("MuiOutlinedInput", e);
}
const lr = {
  ...yn,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function q2({
  theme: e,
  ...t
}) {
  const n = gr in e ? e[gr] : void 0;
  return /* @__PURE__ */ u.jsx(ax, {
    ...t,
    themeId: n ? gr : void 0,
    theme: n || e
  });
}
const Yl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Z2
} = Ak({
  themeId: gr,
  // @ts-ignore ignore module augmentation tests
  theme: () => lu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Yl.colorSchemeStorageKey,
  modeStorageKey: Yl.modeStorageKey,
  defaultColorScheme: {
    light: Yl.defaultLightColorScheme,
    dark: Yl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: px(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Go({
        sx: r,
        theme: this
      });
    }, t;
  }
}), J2 = Z2;
function eE({
  theme: e,
  ...t
}) {
  const n = p.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = gr in e ? e[gr] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ u.jsx(q2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ u.jsx(J2, {
    theme: e,
    ...t
  });
}
function og(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function tE(e) {
  return fe("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const nE = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${oe(t)}`, `fontSize${oe(n)}`]
  };
  return pe(o, tE, r);
}, rE = W("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${oe(n.color)}`], t[`fontSize${oe(n.fontSize)}`]];
  }
})(ye(({
  theme: e
}) => {
  var t, n, r, o, s, i, l, a, c, f, m, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...bt(e, "fill", {
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
          fontSize: ((i = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : i.call(s, 24)) || "1.5rem"
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
        var v, b;
        return {
          props: {
            color: d
          },
          style: {
            color: (b = (v = (e.vars ?? e).palette) == null ? void 0 : v[d]) == null ? void 0 : b.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (f = (c = (e.vars ?? e).palette) == null ? void 0 : c.action) == null ? void 0 : f.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (x = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : x.disabled
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
})), yf = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: s,
    color: i = "inherit",
    component: l = "svg",
    fontSize: a = "medium",
    htmlColor: c,
    inheritViewBox: f = !1,
    titleAccess: m,
    viewBox: x = "0 0 24 24",
    ...d
  } = r, v = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: i,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: x,
    hasSvgAsChild: v
  }, C = {};
  f || (C.viewBox = x);
  const g = nE(b);
  return /* @__PURE__ */ u.jsxs(rE, {
    as: l,
    className: te(g.root, s),
    focusable: "false",
    color: c,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...C,
    ...d,
    ...v && o.props,
    ownerState: b,
    children: [v ? o.props.children : o, m ? /* @__PURE__ */ u.jsx("title", {
      children: m
    }) : null]
  });
});
yf.muiName = "SvgIcon";
function Qe(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ u.jsx(yf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = yf.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
}
function vf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function tc(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: s
  } = p.useRef(t !== void 0), [i, l] = p.useState(n), a = s ? t : i, c = p.useCallback((f) => {
    s || l(f);
  }, []);
  return [a, c];
}
function bx(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function wx(e, t) {
  if (!e)
    return t;
  function n(i, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      bx(c, l[c]) && typeof i[c] == "function" && (a[c] = (...f) => {
        i[c](...f), l[c](...f);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (i) => {
      const l = typeof t == "function" ? t(i) : t, a = typeof e == "function" ? e({
        ...i,
        ...l
      }) : e, c = te(i == null ? void 0 : i.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), f = n(a, l);
      return {
        ...l,
        ...a,
        ...f,
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
  const r = t, o = n(e, r), s = te(r == null ? void 0 : r.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...o,
    ...!!s && {
      className: s
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
const sg = {};
function Xp(e, t) {
  const n = p.useRef(sg);
  return n.current === sg && (n.current = e(t)), n;
}
function oE(e) {
  const t = Xp(() => sE(e)).current;
  return t.next = e, mt(t.effect), t;
}
function sE(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const ig = vy.createContext(null);
function iE(e) {
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
function lE(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = iE(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function Cx(e) {
  const {
    in: t = !1,
    appear: n = !1,
    enter: r = !0,
    exit: o = !0,
    mountOnEnter: s = !1,
    unmountOnExit: i = !1,
    timeout: l,
    addEndListener: a,
    reduceMotion: c = !1,
    getAutoTimeout: f,
    nodeRef: m,
    onEnter: x,
    onEntering: d,
    onEntered: v,
    onExit: b,
    onExiting: C,
    onExited: g,
    children: h,
    ...S
  } = e, w = p.useContext(ig), R = w && !w.isMounting ? r : n, [k, T] = p.useState(() => t ? R ? "exited" : "entered" : s || i ? "unmounted" : "exited"), E = p.useRef(k);
  E.current = k, t && k === "unmounted" && (E.current = "exited", T("exited"));
  const L = p.useRef(t && R), A = p.useRef(!1), P = p.useRef(null), y = p.useRef(k), M = p.useRef(!1), I = p.useRef(c), j = oE({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: f,
    onEnter: x,
    onEntering: d,
    onEntered: v,
    onExit: b,
    onExiting: C,
    onExited: g,
    enter: r,
    exit: o,
    mountOnEnter: s,
    unmountOnExit: i,
    nodeRef: m,
    parentGroup: w
  }), O = p.useCallback(() => {
    P.current !== null && (P.current.cancel(), P.current = null);
  }, []), N = p.useCallback((_) => {
    let q = !0;
    const V = () => {
      q && (q = !1, P.current = null, _());
    };
    return V.cancel = () => {
      q = !1;
    }, P.current = V, V;
  }, []), $ = p.useCallback((_, q) => {
    var _e, Ie;
    let V;
    const K = () => {
      V !== void 0 && (clearTimeout(V), V = void 0);
    }, G = N(() => {
      K(), E.current = _, T(_);
    }), Q = G.cancel;
    G.cancel = () => {
      K(), Q();
    };
    const U = j.current.nodeRef.current, ee = j.current.addEndListener, ae = j.current.getAutoTimeout !== void 0, Te = (Ie = (_e = j.current).getAutoTimeout) == null ? void 0 : Ie.call(_e), we = lE({
      currentStatus: q,
      isAppearing: M.current,
      timeout: j.current.timeout,
      autoTimeout: Te
    }), ge = I.current, ue = we ?? (ge && ae ? 0 : null), je = (Me) => {
      V = setTimeout(G, Me);
    };
    if (!U) {
      je(0);
      return;
    }
    if (ee) {
      ue != null && je(ge ? 0 : ue), ee.length >= 2 ? ee(U, G) : ee(G);
      return;
    }
    je(ge ? 0 : we ?? 0);
  }, [N, j]), B = p.useCallback((_) => {
    var K;
    const q = j.current, V = q.parentGroup ? q.parentGroup.isMounting : _;
    if (M.current = V, !_ && !q.enter) {
      E.current = "entered", T("entered");
      return;
    }
    I.current = q.reduceMotion, (K = q.onEnter) == null || K.call(q, V), E.current = "entering", T("entering");
  }, [j]), D = p.useCallback(() => {
    var q;
    const _ = j.current;
    if (!_.exit) {
      E.current = "exited", T("exited");
      return;
    }
    I.current = _.reduceMotion, (q = _.onExit) == null || q.call(_), E.current = "exiting", T("exiting");
  }, [j]), H = p.useCallback((_, q) => {
    if (O(), q === "entering") {
      const V = j.current;
      if (V.mountOnEnter || V.unmountOnExit) {
        const K = V.nodeRef.current;
        K && Gp(K);
      }
      B(_);
    } else
      D();
  }, [O, B, D, j]);
  return mt(() => (A.current = !0, L.current && (L.current = !1, H(!0, "entering")), () => {
    A.current = !1, O();
  }), [O, H]), mt(() => {
    if (!A.current)
      return;
    const _ = E.current;
    t ? _ !== "entering" && _ !== "entered" && H(!1, "entering") : _ === "entering" || _ === "entered" ? H(!1, "exiting") : _ === "exited" && i && (E.current = "unmounted", T("unmounted"));
  }, [t, k, i, H]), mt(() => {
    var K, G, Q, U;
    if (k === "unmounted" || y.current === "unmounted") {
      y.current = k;
      return;
    }
    const q = y.current !== k;
    q && (y.current = k);
    const V = j.current;
    k === "entering" ? (q && ((K = V.onEntering) == null || K.call(V, M.current)), P.current === null && E.current === k && $("entered", "entering")) : k === "exiting" ? (q && ((G = V.onExiting) == null || G.call(V)), P.current === null && E.current === k && $("exited", "exiting")) : k === "entered" && q ? (Q = V.onEntered) == null || Q.call(V, M.current) : k === "exited" && q && ((U = V.onExited) == null || U.call(V));
  }, [j, $, k]), k === "unmounted" ? null : /* @__PURE__ */ u.jsx(ig.Provider, {
    value: null,
    children: h(k, S)
  });
}
const kx = "(prefers-reduced-motion: reduce)", aE = 0, cE = "0ms", uE = () => {
}, lg = () => !1, dE = () => !0, fE = () => uE;
function pE(e) {
  const [t, n] = p.useState(() => ({
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
    const s = window.matchMedia(kx), i = () => {
      o(s.matches);
    };
    return i(), s.addEventListener("change", i), () => {
      s.removeEventListener("change", i);
    };
  }, [e, t.enabled]), r;
}
const mE = {
  ...Ca
}, Ex = mE.useSyncExternalStore;
function hE(e) {
  const t = e ? dE : lg, [n, r] = p.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [lg, fE];
    const o = window.matchMedia(kx);
    return [() => o.matches, (s) => (o.addEventListener("change", s), () => {
      o.removeEventListener("change", s);
    })];
  }, [e]);
  return Ex(r, n, t);
}
const gE = Ex !== void 0 ? hE : pE;
function mu(e, t) {
  const n = gE(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return p.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: aE,
        delay: cE
      } : o;
    }
  }), [r]);
}
function Tx(e, t, n) {
  return e === void 0 || qa(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function Rx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function nc(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    bx(n, e[n]) && (t[n] = e[n]);
  return t;
}
function ag(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function Px(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: s
  } = e;
  if (!t) {
    const d = te(n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return d.length > 0 && (b.className = d), Object.keys(v).length > 0 && (b.style = v), {
      props: b,
      internalRef: void 0
    };
  }
  const i = nc({
    ...o,
    ...r
  }), l = ag(r), a = ag(o), c = t(i), f = te(c == null ? void 0 : c.className, n == null ? void 0 : n.className, s, o == null ? void 0 : o.className, r == null ? void 0 : r.className), m = {
    ...c == null ? void 0 : c.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, x = {
    ...c,
    ...n,
    ...a,
    ...l
  };
  return f.length > 0 && (x.className = f), Object.keys(m).length > 0 && (x.style = m), {
    props: x,
    internalRef: c.ref
  };
}
function de(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: s,
    internalForwardedProps: i,
    shouldForwardComponentProp: l = !1,
    ...a
  } = t, {
    component: c,
    slots: f = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...x
  } = s, d = f[e] || r, v = Rx(m[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: g
  } = Px({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? x : void 0,
    externalSlotProps: v
  }), h = gt(g, v == null ? void 0 : v.ref, t.ref), S = e === "root" ? b || c : b, w = Tx(d, {
    ...e === "root" && !c && !f[e] && i,
    ...e !== "root" && !f[e] && i,
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
function yE(e) {
  return fe("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const vE = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, s = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return pe(s, yE, o);
}, xE = W("div", {
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
  ...bt(e, "box-shadow"),
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
}))), sn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var d;
  const r = me({
    props: t,
    name: "MuiPaper"
  }), o = ho(), {
    className: s,
    component: i = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...f
  } = r, m = {
    ...r,
    component: i,
    elevation: l,
    square: a,
    variant: c
  }, x = vE(m);
  return /* @__PURE__ */ u.jsx(xE, {
    as: i,
    ownerState: m,
    className: te(x.root, s),
    ref: n,
    ...f,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (d = o.vars.overlays) == null ? void 0 : d[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Bo("#fff", hf(l))}, ${Bo("#fff", hf(l))})`
        }
      },
      ...f.style
    }
  });
});
function rc(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function SE(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: s
  } = e, i = r && t !== !1, l = r && t === !1;
  return p.useMemo(() => {
    const c = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(f) {
        n && t && f.key !== "Tab" && f.preventDefault();
      }
    };
    return r || (c.tabIndex = o, !s && n && (c.tabIndex = t ? o : -1)), (s && (t || i) || !s && n) && (c["aria-disabled"] = n), s && (!t || l) && (c.disabled = n), c;
  }, [r, n, t, i, l, s, o]);
}
const bE = {};
function wE(e) {
  const {
    nativeButton: t,
    disabled: n,
    type: r,
    hasFormAction: o = !1,
    tabIndex: s = 0,
    focusableWhenDisabled: i,
    stopEventPropagation: l = !1,
    onBeforeKeyDown: a,
    onBeforeKeyUp: c
  } = e, f = p.useRef(null), m = i === !0, x = SE({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: s
  }), d = p.useCallback(() => {
    const C = f.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), v = p.useMemo(() => {
    const C = m ? {} : {
      tabIndex: n ? -1 : s
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, m || (C.disabled = n)) : (C.role = "button", !m && n && (C["aria-disabled"] = n)), m ? {
      ...C,
      ...x
    } : C;
  }, [n, m, x, o, t, s, r]);
  return {
    getButtonProps: p.useCallback((C = bE) => {
      const {
        onClick: g,
        onKeyDown: h,
        onKeyUp: S,
        ...w
      } = C;
      return {
        ...v,
        ...w,
        onClick: (E) => {
          if (l && E.stopPropagation(), n) {
            E.preventDefault();
            return;
          }
          g == null || g(E);
        },
        onKeyDown: (E) => {
          if (m && x.onKeyDown(E), !n && (a == null || a(E), h == null || h(E), !(E.target !== E.currentTarget || d()))) {
            if (E.key === " ") {
              E.preventDefault();
              return;
            }
            E.key === "Enter" && (E.preventDefault(), E.currentTarget.click());
          }
        },
        onKeyUp: (E) => {
          n || (c == null || c(E), S == null || S(E), E.target === E.currentTarget && !d() && E.key === " " && !E.defaultPrevented && E.currentTarget.click());
        }
      };
    }, [v, n, m, x, d, a, c, l]),
    rootRef: f
  };
}
class oc {
  constructor() {
    Zs(this, "mountEffect", () => {
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
    return new oc();
  }
  static use() {
    const t = Xp(oc.create).current, [n, r] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, p.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = kE(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function CE() {
  return oc.use();
}
function kE() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const EE = [];
function Ix(e) {
  p.useEffect(e, EE);
}
class hu {
  constructor() {
    Zs(this, "currentId", null);
    Zs(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Zs(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new hu();
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
function pr() {
  const e = Xp(hu.create).current;
  return Ix(e.disposeEffect), e;
}
function TE(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: s,
    rippleSize: i,
    in: l,
    onExited: a,
    timeout: c
  } = e, [f, m] = p.useState(!1), x = pr(), d = p.useRef(!1), v = p.useRef(a);
  v.current = a;
  const b = a != null, C = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: i,
    height: i,
    top: -(i / 2) + s,
    left: -(i / 2) + o
  }, h = te(n.child, f && n.childLeaving, r && n.childPulsate);
  return !l && !f && m(!0), p.useEffect(() => {
    !l && b ? d.current || (d.current = !0, x.start(c, () => {
      var S;
      d.current = !1, (S = v.current) == null || S.call(v);
    })) : (d.current = !1, x.clear());
  }, [x, b, l, c]), /* @__PURE__ */ u.jsx("span", {
    className: C,
    style: g,
    children: /* @__PURE__ */ u.jsx("span", {
      className: h
    })
  });
}
const Zt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), xf = 550, RE = 80, Ql = {}, cg = [], PE = () => {
};
function nd(e, t) {
  const n = new Set(t), r = /* @__PURE__ */ new Map();
  let o = [];
  for (const i of e)
    n.has(i) ? o.length > 0 && (r.set(i, o), o = []) : o.push(i);
  const s = [];
  for (const i of t) {
    const l = r.get(i);
    l && s.push(...l), s.push(i);
  }
  return s.push(...o), s;
}
function IE({
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
  let o, s;
  if (n || e === void 0 || e.clientX === 0 && e.clientY === 0 || !e.clientX && !e.touches)
    o = Math.round(r.width / 2), s = Math.round(r.height / 2);
  else {
    const {
      clientX: l,
      clientY: a
    } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
    o = Math.round(l - r.left), s = Math.round(a - r.top);
  }
  let i;
  if (n)
    i = Math.sqrt((2 * r.width ** 2 + r.height ** 2) / 3), i % 2 === 0 && (i += 1);
  else {
    const l = Math.max(Math.abs((t ? t.clientWidth : 0) - o), o) * 2 + 2, a = Math.max(Math.abs((t ? t.clientHeight : 0) - s), s) * 2 + 2;
    i = Math.sqrt(l ** 2 + a ** 2);
  }
  return {
    rippleX: o,
    rippleY: s,
    rippleSize: i
  };
}
const ME = gl`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, $E = gl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, jE = gl`
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
function LE(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = nl`
    &.${Zt.rippleVisible} {
      animation-name: ${ME};
      animation-duration: ${xf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Zt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Zt.childLeaving} {
      animation-name: ${$E};
      animation-duration: ${xf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Zt.childPulsate} {
      animation-name: ${jE};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? nl`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const OE = W("span", {
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
}), AE = W(TE, {
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
}) => LE(e)}
`, NE = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTouchRipple"
  }), o = ho(), s = mu(o.motion.reducedMotion, !1), {
    center: i = !1,
    classes: l = Ql,
    className: a,
    ...c
  } = r, [f, m] = p.useState({
    items: cg,
    order: cg
  }), x = f.items, d = p.useRef(0), v = p.useRef(null), b = p.useRef(!1);
  Ix(() => (b.current = !0, () => {
    b.current = !1;
  })), p.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [x]);
  const C = p.useRef(!1), g = pr(), h = p.useRef(null), S = p.useRef(null), w = tt((P) => {
    b.current && m((y) => {
      const M = y.items.filter((j) => j.key !== P), I = nd(y.order.filter((j) => j !== P), M.filter((j) => !j.exiting).map((j) => j.key));
      return {
        items: M,
        order: I
      };
    });
  }), R = tt((P) => {
    const {
      pulsate: y,
      rippleX: M,
      rippleY: I,
      rippleSize: j,
      cb: O
    } = P, N = d.current;
    d.current += 1, m(($) => {
      const B = [...$.items, {
        key: N,
        pulsate: y,
        rippleX: M,
        rippleY: I,
        rippleSize: j,
        exiting: !1
      }];
      return {
        items: B,
        order: nd($.order, B.filter((D) => !D.exiting).map((D) => D.key))
      };
    }), v.current = O;
  }), k = tt((P = Ql, y = Ql, M = PE) => {
    const {
      pulsate: I = !1,
      center: j = i || y.pulsate,
      fakeElement: O = !1
      // Used only by tests.
    } = y;
    if ((P == null ? void 0 : P.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (P == null ? void 0 : P.type) === "touchstart" && (C.current = !0);
    const N = O ? null : S.current, {
      rippleX: $,
      rippleY: B,
      rippleSize: D
    } = IE({
      event: P,
      element: N,
      center: j
    });
    P != null && P.touches ? h.current === null && (h.current = () => {
      R({
        pulsate: I,
        rippleX: $,
        rippleY: B,
        rippleSize: D,
        cb: M
      });
    }, g.start(RE, () => {
      h.current && (h.current(), h.current = null);
    })) : R({
      pulsate: I,
      rippleX: $,
      rippleY: B,
      rippleSize: D,
      cb: M
    });
  }), T = tt(() => {
    k(Ql, {
      pulsate: !0
    });
  }), E = tt((P, y) => {
    if (g.clear(), (P == null ? void 0 : P.type) === "touchend" && h.current) {
      h.current(), h.current = null, g.start(0, () => {
        E(P, y);
      });
      return;
    }
    h.current = null, m((M) => {
      const I = M.items.findIndex((O) => !O.exiting);
      if (I === -1)
        return M;
      const j = M.items.slice();
      return j[I] = {
        ...j[I],
        exiting: !0
      }, {
        items: j,
        order: nd(M.order, j.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), v.current = y;
  });
  p.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: E
  }), [T, k, E]);
  const L = new Map(x.map((P) => [P.key, P])), A = f.order.map((P) => L.get(P)).filter(Boolean);
  return /* @__PURE__ */ u.jsx(OE, {
    className: te(Zt.root, l.root, a),
    ref: S,
    ...c,
    children: A.map((P) => /* @__PURE__ */ u.jsx(AE, {
      classes: {
        ripple: te(l.ripple, Zt.ripple),
        rippleVisible: te(l.rippleVisible, Zt.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Zt.ripplePulsate),
        child: te(l.child, Zt.child),
        childLeaving: te(l.childLeaving, Zt.childLeaving),
        childPulsate: te(l.childPulsate, Zt.childPulsate)
      },
      timeout: s.shouldReduceMotion ? 0 : xf,
      pulsate: P.pulsate,
      rippleX: P.rippleX,
      rippleY: P.rippleY,
      rippleSize: P.rippleSize,
      in: !P.exiting,
      onExited: () => w(P.key)
    }, P.key))
  });
});
function zE(e) {
  return fe("MuiButtonBase", e);
}
const BE = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), FE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: s
  } = e, l = pe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, zE, s);
  return n && !o && r && (l.root += ` ${r}`), l;
}, DE = W("button", {
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
  [`&.${BE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), uo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: s = !1,
    children: i,
    className: l,
    component: a = "button",
    disabled: c = !1,
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
    focusRipple: x = !1,
    focusVisibleClassName: d,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: v,
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
    onContextMenu: R,
    onDragLeave: k,
    onFocus: T,
    onFocusVisible: E,
    onKeyDown: L,
    onKeyUp: A,
    onMouseDown: P,
    onMouseLeave: y,
    onMouseUp: M,
    onTouchEnd: I,
    onTouchMove: j,
    onTouchStart: O,
    tabIndex: N = 0,
    TouchRippleProps: $,
    touchRippleRef: B,
    type: D,
    ...H
  } = r, _ = !!(H.href || H.to), q = !!H.formAction;
  let V = a;
  V === "button" && _ && (V = g);
  const G = h ?? (typeof V == "string" ? V === "button" : C ?? !1), Q = CE(), U = gt(Q.ref, B), [ee, ae] = p.useState(!1);
  (c || b) && ee && ae(!1);
  const Te = tt((Ce) => {
    x && !Ce.repeat && ee && Ce.key === " " && Q.stop(Ce, () => {
      Q.start(Ce);
    });
  }), we = tt((Ce) => {
    x && Ce.key === " " && ee && !Ce.defaultPrevented && Q.stop(Ce, () => {
      Q.pulsate(Ce);
    });
  }), {
    getButtonProps: ge,
    rootRef: ue
  } = wE({
    nativeButton: G,
    disabled: c,
    type: D,
    hasFormAction: q,
    tabIndex: N,
    onBeforeKeyDown: Te,
    onBeforeKeyUp: we
  }), {
    onClick: je,
    onKeyDown: _e,
    onKeyUp: Ie,
    ...Me
  } = ge({
    onClick: w,
    onKeyDown: L,
    onKeyUp: A
  });
  p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ae(!0), ue.current.focus();
    }
  }), [ue]);
  const se = Q.shouldMount && !f && !c;
  p.useEffect(() => {
    ee && x && !f && Q.pulsate();
  }, [f, x, ee, Q]);
  const Le = br(Q, "start", P, m), Ae = br(Q, "stop", R, m), We = br(Q, "stop", k, m), ke = br(Q, "stop", M, m), $e = br(Q, "stop", (Ce) => {
    ee && Ce.preventDefault(), y && y(Ce);
  }, m), st = br(Q, "start", O, m), Ne = br(Q, "stop", I, m), be = br(Q, "stop", j, m), Ue = br(Q, "stop", (Ce) => {
    rc(Ce.target) || ae(!1), S && S(Ce);
  }, !1), xt = tt((Ce) => {
    ue.current || (ue.current = Ce.currentTarget), !b && rc(Ce.target) && (ae(!0), E && E(Ce)), T && T(Ce);
  }), ie = {};
  _ && (ie.tabIndex = c ? -1 : N, c && (ie["aria-disabled"] = c), ie.type = D);
  const xe = gt(n, ue), Be = {
    ...r,
    centerRipple: s,
    component: a,
    disabled: c,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: x,
    suppressFocusVisible: b,
    tabIndex: N,
    focusVisible: ee
  }, it = FE(Be);
  return /* @__PURE__ */ u.jsxs(DE, {
    as: V,
    className: te(it.root, l),
    ownerState: Be,
    onBlur: Ue,
    onClick: je,
    onContextMenu: Ae,
    onFocus: xt,
    onKeyDown: _e,
    onKeyUp: Ie,
    onMouseDown: Le,
    onMouseLeave: $e,
    onMouseUp: ke,
    onDragLeave: We,
    onTouchEnd: Ne,
    onTouchMove: be,
    onTouchStart: st,
    ref: xe,
    ..._ ? ie : Me,
    ...H,
    children: [i, se ? /* @__PURE__ */ u.jsx(NE, {
      ref: U,
      center: s,
      ...$
    }) : null]
  });
});
function br(e, t, n, r = !1) {
  return tt((o) => (n && n(o), r || e[t](o), !0));
}
function _E(e) {
  return typeof e.main == "string";
}
function WE(e, t = []) {
  if (!_E(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Dt(e = []) {
  return ([, t]) => t && WE(t, e);
}
function UE(e) {
  return fe("MuiAlert", e);
}
const ug = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function HE(e) {
  return fe("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Vn = 44, Sf = gl`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, bf = gl`
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
`, VE = typeof Sf != "string" ? nl`
        animation: ${Sf} 1.4s linear infinite;
      ` : null, KE = typeof bf != "string" ? nl`
        animation: ${bf} 1.4s ease-in-out infinite;
      ` : null, GE = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, s = {
    root: ["root", n, `color${oe(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return pe(s, HE, t);
}, YE = W("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${oe(n.color)}`]];
  }
})(ye(({
  theme: e
}) => {
  const t = Yp(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...bt(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: VE || {
        animation: `${Sf} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), QE = W("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), XE = W("circle", {
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
  const t = Yp(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...bt(e, "stroke-dashoffset")
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
      style: KE || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${bf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), qE = W("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ye(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Mo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: s = "primary",
    disableShrink: i = !1,
    enableTrackSlot: l = !1,
    min: a,
    max: c,
    size: f = 40,
    style: m,
    thickness: x = 3.6,
    value: d = r.min ?? 0,
    variant: v = "indeterminate",
    ...b
  } = r, C = a ?? 0, g = c ?? 100, h = {
    ...r,
    color: s,
    disableShrink: i,
    size: f,
    thickness: x,
    value: d,
    variant: v,
    enableTrackSlot: l
  }, S = GE(h), w = {}, R = {}, k = {};
  if (v === "determinate") {
    const T = 2 * Math.PI * ((Vn - x) / 2), E = g - C;
    w.strokeDasharray = T.toFixed(3), w.strokeDashoffset = E > 0 ? `${((g - d) / E * T).toFixed(3)}px` : `${T.toFixed(3)}px`, R.transform = "rotate(-90deg)", k["aria-valuenow"] = d, k["aria-valuemin"] = C, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ u.jsx(YE, {
    className: te(S.root, o),
    style: {
      width: f,
      height: f,
      ...R,
      ...m
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ u.jsxs(QE, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Vn / 2} ${Vn / 2} ${Vn} ${Vn}`,
      children: [l ? /* @__PURE__ */ u.jsx(qE, {
        className: S.track,
        ownerState: h,
        cx: Vn,
        cy: Vn,
        r: (Vn - x) / 2,
        fill: "none",
        strokeWidth: x,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ u.jsx(XE, {
        className: S.circle,
        style: w,
        ownerState: h,
        cx: Vn,
        cy: Vn,
        r: (Vn - x) / 2,
        fill: "none",
        strokeWidth: x
      })]
    })
  });
});
function ZE(e) {
  return fe("MuiIconButton", e);
}
const dg = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), JE = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: s,
    loading: i
  } = e, l = {
    root: ["root", i && "loading", n && "disabled", r !== "default" && `color${oe(r)}`, o && `edge${oe(o)}`, `size${oe(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return pe(l, ZE, t);
}, eT = W(uo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${oe(n.color)}`], n.edge && t[`edge${oe(n.edge)}`], t[`size${oe(n.size)}`]];
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
  ...bt(e, "background-color", {
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
  }, ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
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
  [`&.${dg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${dg.loading}`]: {
    color: "transparent"
  }
}))), tT = W("span", {
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
})), Bt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: s,
    className: i,
    color: l = "default",
    disabled: a = !1,
    disableFocusRipple: c = !1,
    size: f = "medium",
    id: m,
    loading: x = null,
    loadingIndicator: d,
    ...v
  } = r, b = nr(m), C = d ?? /* @__PURE__ */ u.jsx(Mo, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), g = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: c,
    loading: x,
    loadingIndicator: C,
    size: f
  }, h = JE(g);
  return /* @__PURE__ */ u.jsxs(eT, {
    id: x ? b : m,
    className: te(h.root, i),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || x,
    ref: n,
    ...v,
    ownerState: g,
    children: [typeof x == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ u.jsx(tT, {
        className: h.loadingIndicator,
        ownerState: g,
        children: x && C
      })
    }), s]
  });
}), nT = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), rT = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), oT = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), sT = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), iT = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), lT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, s = {
    root: ["root", `color${oe(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return pe(s, UE, o);
}, aT = W(sn, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Dt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${ug.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Dt(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${ug.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(Dt(["dark"])).map(([r]) => ({
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
})), cT = W("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), uT = W("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), dT = W("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), fg = {
  success: /* @__PURE__ */ u.jsx(nT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ u.jsx(rT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ u.jsx(oT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ u.jsx(sT, {
    fontSize: "inherit"
  })
}, pg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: s,
    className: i,
    closeText: l = "Close",
    color: a,
    icon: c,
    iconMapping: f = fg,
    onClose: m,
    role: x = "alert",
    severity: d = "success",
    slotProps: v = {},
    slots: b = {},
    variant: C = "standard",
    ...g
  } = r, h = {
    ...r,
    color: a,
    severity: d,
    variant: C,
    colorSeverity: a || d
  }, S = lT(h), w = {
    slots: b,
    slotProps: v
  }, [R, k] = de("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: te(S.root, i),
    elementType: aT,
    externalForwardedProps: {
      ...w,
      ...g
    },
    ownerState: h,
    additionalProps: {
      role: x,
      elevation: 0
    }
  }), [T, E] = de("icon", {
    className: S.icon,
    elementType: cT,
    externalForwardedProps: w,
    ownerState: h
  }), [L, A] = de("message", {
    className: S.message,
    elementType: uT,
    externalForwardedProps: w,
    ownerState: h
  }), [P, y] = de("action", {
    className: S.action,
    elementType: dT,
    externalForwardedProps: w,
    ownerState: h
  }), [M, I] = de("closeButton", {
    elementType: Bt,
    externalForwardedProps: w,
    ownerState: h
  }), [j, O] = de("closeIcon", {
    elementType: iT,
    externalForwardedProps: w,
    ownerState: h
  });
  return /* @__PURE__ */ u.jsxs(R, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ u.jsx(T, {
      ...E,
      children: c || f[d] || fg[d]
    }) : null, /* @__PURE__ */ u.jsx(L, {
      ...A,
      children: s
    }), o != null ? /* @__PURE__ */ u.jsx(P, {
      ...y,
      children: o
    }) : null, o == null && m ? /* @__PURE__ */ u.jsx(P, {
      ...y,
      children: /* @__PURE__ */ u.jsx(M, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: m,
        ...I,
        children: /* @__PURE__ */ u.jsx(j, {
          fontSize: "small",
          ...O
        })
      })
    }) : null]
  });
});
function fT(e) {
  return fe("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const pT = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: s
  } = e, i = {
    root: ["root", o, e.align !== "inherit" && `align${oe(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return pe(i, fT, s);
}, mT = W("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${oe(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ye(({
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
    })), ...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${oe(n)}`
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
})), mg = {
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
}, Oe = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: s = "inherit",
    className: i,
    component: l,
    gutterBottom: a = !1,
    noWrap: c = !1,
    variant: f = "body1",
    variantMapping: m = mg,
    ...x
  } = r, d = {
    ...r,
    align: s,
    color: o,
    className: i,
    component: l,
    gutterBottom: a,
    noWrap: c,
    variant: f,
    variantMapping: m
  }, v = l || m[f] || mg[f] || "span", b = pT(d);
  return /* @__PURE__ */ u.jsx(mT, {
    as: v,
    ref: n,
    className: te(b.root, i),
    ...x,
    ownerState: d,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...x.style
    }
  });
});
function Fo(e, t) {
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
var fn = "top", Bn = "bottom", Fn = "right", pn = "left", qp = "auto", Sl = [fn, Bn, Fn, pn], Ws = "start", sl = "end", hT = "clippingParents", Mx = "viewport", di = "popper", gT = "reference", hg = /* @__PURE__ */ Sl.reduce(function(e, t) {
  return e.concat([t + "-" + Ws, t + "-" + sl]);
}, []), $x = /* @__PURE__ */ [].concat(Sl, [qp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ws, t + "-" + sl]);
}, []), yT = "beforeRead", vT = "read", xT = "afterRead", ST = "beforeMain", bT = "main", wT = "afterMain", CT = "beforeWrite", kT = "write", ET = "afterWrite", TT = [yT, vT, xT, ST, bT, wT, CT, kT, ET];
function xr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Cn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Yo(e) {
  var t = Cn(e).Element;
  return e instanceof t || e instanceof Element;
}
function An(e) {
  var t = Cn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Cn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function RT(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, s = t.elements[n];
    !An(s) || !xr(s) || (Object.assign(s.style, r), Object.keys(o).forEach(function(i) {
      var l = o[i];
      l === !1 ? s.removeAttribute(i) : s.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function PT(e) {
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
      var o = t.elements[r], s = t.attributes[r] || {}, i = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), l = i.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !An(o) || !xr(o) || (Object.assign(o.style, l), Object.keys(s).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const IT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: RT,
  effect: PT,
  requires: ["computeStyles"]
};
function vr(e) {
  return e.split("-")[0];
}
var Do = Math.max, sc = Math.min, Us = Math.round;
function wf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function jx() {
  return !/^((?!chrome|android).)*safari/i.test(wf());
}
function Hs(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, s = 1;
  t && An(e) && (o = e.offsetWidth > 0 && Us(r.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Us(r.height) / e.offsetHeight || 1);
  var i = Yo(e) ? Cn(e) : window, l = i.visualViewport, a = !jx() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, f = (r.top + (a && l ? l.offsetTop : 0)) / s, m = r.width / o, x = r.height / s;
  return {
    width: m,
    height: x,
    top: f,
    right: c + m,
    bottom: f + x,
    left: c,
    x: c,
    y: f
  };
}
function Jp(e) {
  var t = Hs(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function Lx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Zp(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Or(e) {
  return Cn(e).getComputedStyle(e);
}
function MT(e) {
  return ["table", "td", "th"].indexOf(xr(e)) >= 0;
}
function go(e) {
  return ((Yo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function gu(e) {
  return xr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Zp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    go(e)
  );
}
function gg(e) {
  return !An(e) || // https://github.com/popperjs/popper-core/issues/837
  Or(e).position === "fixed" ? null : e.offsetParent;
}
function $T(e) {
  var t = /firefox/i.test(wf()), n = /Trident/i.test(wf());
  if (n && An(e)) {
    var r = Or(e);
    if (r.position === "fixed")
      return null;
  }
  var o = gu(e);
  for (Zp(o) && (o = o.host); An(o) && ["html", "body"].indexOf(xr(o)) < 0; ) {
    var s = Or(o);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function bl(e) {
  for (var t = Cn(e), n = gg(e); n && MT(n) && Or(n).position === "static"; )
    n = gg(n);
  return n && (xr(n) === "html" || xr(n) === "body" && Or(n).position === "static") ? t : n || $T(e) || t;
}
function em(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Mi(e, t, n) {
  return Do(e, sc(t, n));
}
function jT(e, t, n) {
  var r = Mi(e, t, n);
  return r > n ? n : r;
}
function Ox() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ax(e) {
  return Object.assign({}, Ox(), e);
}
function Nx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var LT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, Ax(typeof t != "number" ? t : Nx(t, Sl));
};
function OT(e) {
  var t, n = e.state, r = e.name, o = e.options, s = n.elements.arrow, i = n.modifiersData.popperOffsets, l = vr(n.placement), a = em(l), c = [pn, Fn].indexOf(l) >= 0, f = c ? "height" : "width";
  if (!(!s || !i)) {
    var m = LT(o.padding, n), x = Jp(s), d = a === "y" ? fn : pn, v = a === "y" ? Bn : Fn, b = n.rects.reference[f] + n.rects.reference[a] - i[a] - n.rects.popper[f], C = i[a] - n.rects.reference[a], g = bl(s), h = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, S = b / 2 - C / 2, w = m[d], R = h - x[f] - m[v], k = h / 2 - x[f] / 2 + S, T = Mi(w, k, R), E = a;
    n.modifiersData[r] = (t = {}, t[E] = T, t.centerOffset = T - k, t);
  }
}
function AT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || Lx(t.elements.popper, o) && (t.elements.arrow = o));
}
const NT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: OT,
  effect: AT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Vs(e) {
  return e.split("-")[1];
}
var zT = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function BT(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Us(n * o) / o || 0,
    y: Us(r * o) / o || 0
  };
}
function yg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, s = e.variation, i = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, m = e.isFixed, x = i.x, d = x === void 0 ? 0 : x, v = i.y, b = v === void 0 ? 0 : v, C = typeof f == "function" ? f({
    x: d,
    y: b
  }) : {
    x: d,
    y: b
  };
  d = C.x, b = C.y;
  var g = i.hasOwnProperty("x"), h = i.hasOwnProperty("y"), S = pn, w = fn, R = window;
  if (c) {
    var k = bl(n), T = "clientHeight", E = "clientWidth";
    if (k === Cn(n) && (k = go(n), Or(k).position !== "static" && l === "absolute" && (T = "scrollHeight", E = "scrollWidth")), k = k, o === fn || (o === pn || o === Fn) && s === sl) {
      w = Bn;
      var L = m && k === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      b -= L - r.height, b *= a ? 1 : -1;
    }
    if (o === pn || (o === fn || o === Bn) && s === sl) {
      S = Fn;
      var A = m && k === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[E]
      );
      d -= A - r.width, d *= a ? 1 : -1;
    }
  }
  var P = Object.assign({
    position: l
  }, c && zT), y = f === !0 ? BT({
    x: d,
    y: b
  }, Cn(n)) : {
    x: d,
    y: b
  };
  if (d = y.x, b = y.y, a) {
    var M;
    return Object.assign({}, P, (M = {}, M[w] = h ? "0" : "", M[S] = g ? "0" : "", M.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + b + "px)" : "translate3d(" + d + "px, " + b + "px, 0)", M));
  }
  return Object.assign({}, P, (t = {}, t[w] = h ? b + "px" : "", t[S] = g ? d + "px" : "", t.transform = "", t));
}
function FT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, s = n.adaptive, i = s === void 0 ? !0 : s, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: vr(t.placement),
    variation: Vs(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, yg(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, yg(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const DT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: FT,
  data: {}
};
var Xl = {
  passive: !0
};
function _T(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, s = o === void 0 ? !0 : o, i = r.resize, l = i === void 0 ? !0 : i, a = Cn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, Xl);
  }), l && a.addEventListener("resize", n.update, Xl), function() {
    s && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Xl);
    }), l && a.removeEventListener("resize", n.update, Xl);
  };
}
const WT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: _T,
  data: {}
};
var UT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ba(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return UT[t];
  });
}
var HT = {
  start: "end",
  end: "start"
};
function vg(e) {
  return e.replace(/start|end/g, function(t) {
    return HT[t];
  });
}
function tm(e) {
  var t = Cn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function nm(e) {
  return Hs(go(e)).left + tm(e).scrollLeft;
}
function VT(e, t) {
  var n = Cn(e), r = go(e), o = n.visualViewport, s = r.clientWidth, i = r.clientHeight, l = 0, a = 0;
  if (o) {
    s = o.width, i = o.height;
    var c = jx();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: l + nm(e),
    y: a
  };
}
function KT(e) {
  var t, n = go(e), r = tm(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, s = Do(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Do(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + nm(e), a = -r.scrollTop;
  return Or(o || n).direction === "rtl" && (l += Do(n.clientWidth, o ? o.clientWidth : 0) - s), {
    width: s,
    height: i,
    x: l,
    y: a
  };
}
function rm(e) {
  var t = Or(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function zx(e) {
  return ["html", "body", "#document"].indexOf(xr(e)) >= 0 ? e.ownerDocument.body : An(e) && rm(e) ? e : zx(gu(e));
}
function $i(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = zx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), s = Cn(r), i = o ? [s].concat(s.visualViewport || [], rm(r) ? r : []) : r, l = t.concat(i);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat($i(gu(i)))
  );
}
function Cf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function GT(e, t) {
  var n = Hs(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function xg(e, t, n) {
  return t === Mx ? Cf(VT(e, n)) : Yo(t) ? GT(t, n) : Cf(KT(go(e)));
}
function YT(e) {
  var t = $i(gu(e)), n = ["absolute", "fixed"].indexOf(Or(e).position) >= 0, r = n && An(e) ? bl(e) : e;
  return Yo(r) ? t.filter(function(o) {
    return Yo(o) && Lx(o, r) && xr(o) !== "body";
  }) : [];
}
function QT(e, t, n, r) {
  var o = t === "clippingParents" ? YT(e) : [].concat(t), s = [].concat(o, [n]), i = s[0], l = s.reduce(function(a, c) {
    var f = xg(e, c, r);
    return a.top = Do(f.top, a.top), a.right = sc(f.right, a.right), a.bottom = sc(f.bottom, a.bottom), a.left = Do(f.left, a.left), a;
  }, xg(e, i, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Bx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? vr(r) : null, s = r ? Vs(r) : null, i = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case fn:
      a = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Bn:
      a = {
        x: i,
        y: t.y + t.height
      };
      break;
    case Fn:
      a = {
        x: t.x + t.width,
        y: l
      };
      break;
    case pn:
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
  var c = o ? em(o) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (s) {
      case Ws:
        a[c] = a[c] - (t[f] / 2 - n[f] / 2);
        break;
      case sl:
        a[c] = a[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return a;
}
function il(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, s = n.strategy, i = s === void 0 ? e.strategy : s, l = n.boundary, a = l === void 0 ? hT : l, c = n.rootBoundary, f = c === void 0 ? Mx : c, m = n.elementContext, x = m === void 0 ? di : m, d = n.altBoundary, v = d === void 0 ? !1 : d, b = n.padding, C = b === void 0 ? 0 : b, g = Ax(typeof C != "number" ? C : Nx(C, Sl)), h = x === di ? gT : di, S = e.rects.popper, w = e.elements[v ? h : x], R = QT(Yo(w) ? w : w.contextElement || go(e.elements.popper), a, f, i), k = Hs(e.elements.reference), T = Bx({
    reference: k,
    element: S,
    placement: o
  }), E = Cf(Object.assign({}, S, T)), L = x === di ? E : k, A = {
    top: R.top - L.top + g.top,
    bottom: L.bottom - R.bottom + g.bottom,
    left: R.left - L.left + g.left,
    right: L.right - R.right + g.right
  }, P = e.modifiersData.offset;
  if (x === di && P) {
    var y = P[o];
    Object.keys(A).forEach(function(M) {
      var I = [Fn, Bn].indexOf(M) >= 0 ? 1 : -1, j = [fn, Bn].indexOf(M) >= 0 ? "y" : "x";
      A[M] += y[j] * I;
    });
  }
  return A;
}
function XT(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, s = n.rootBoundary, i = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? $x : a, f = Vs(r), m = f ? l ? hg : hg.filter(function(v) {
    return Vs(v) === f;
  }) : Sl, x = m.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  x.length === 0 && (x = m);
  var d = x.reduce(function(v, b) {
    return v[b] = il(e, {
      placement: b,
      boundary: o,
      rootBoundary: s,
      padding: i
    })[vr(b)], v;
  }, {});
  return Object.keys(d).sort(function(v, b) {
    return d[v] - d[b];
  });
}
function qT(e) {
  if (vr(e) === qp)
    return [];
  var t = ba(e);
  return [vg(e), t, vg(t)];
}
function ZT(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, s = o === void 0 ? !0 : o, i = n.altAxis, l = i === void 0 ? !0 : i, a = n.fallbackPlacements, c = n.padding, f = n.boundary, m = n.rootBoundary, x = n.altBoundary, d = n.flipVariations, v = d === void 0 ? !0 : d, b = n.allowedAutoPlacements, C = t.options.placement, g = vr(C), h = g === C, S = a || (h || !v ? [ba(C)] : qT(C)), w = [C].concat(S).reduce(function(V, K) {
      return V.concat(vr(K) === qp ? XT(t, {
        placement: K,
        boundary: f,
        rootBoundary: m,
        padding: c,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : K);
    }, []), R = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), E = !0, L = w[0], A = 0; A < w.length; A++) {
      var P = w[A], y = vr(P), M = Vs(P) === Ws, I = [fn, Bn].indexOf(y) >= 0, j = I ? "width" : "height", O = il(t, {
        placement: P,
        boundary: f,
        rootBoundary: m,
        altBoundary: x,
        padding: c
      }), N = I ? M ? Fn : pn : M ? Bn : fn;
      R[j] > k[j] && (N = ba(N));
      var $ = ba(N), B = [];
      if (s && B.push(O[y] <= 0), l && B.push(O[N] <= 0, O[$] <= 0), B.every(function(V) {
        return V;
      })) {
        L = P, E = !1;
        break;
      }
      T.set(P, B);
    }
    if (E)
      for (var D = v ? 3 : 1, H = function(K) {
        var G = w.find(function(Q) {
          var U = T.get(Q);
          if (U)
            return U.slice(0, K).every(function(ee) {
              return ee;
            });
        });
        if (G)
          return L = G, "break";
      }, _ = D; _ > 0; _--) {
        var q = H(_);
        if (q === "break") break;
      }
    t.placement !== L && (t.modifiersData[r]._skip = !0, t.placement = L, t.reset = !0);
  }
}
const JT = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ZT,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Sg(e, t, n) {
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
function bg(e) {
  return [fn, Fn, Bn, pn].some(function(t) {
    return e[t] >= 0;
  });
}
function eR(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, s = t.modifiersData.preventOverflow, i = il(t, {
    elementContext: "reference"
  }), l = il(t, {
    altBoundary: !0
  }), a = Sg(i, r), c = Sg(l, o, s), f = bg(a), m = bg(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: f,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": f,
    "data-popper-escaped": m
  });
}
const tR = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: eR
};
function nR(e, t, n) {
  var r = vr(e), o = [pn, fn].indexOf(r) >= 0 ? -1 : 1, s = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = s[0], l = s[1];
  return i = i || 0, l = (l || 0) * o, [pn, Fn].indexOf(r) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function rR(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, s = o === void 0 ? [0, 0] : o, i = $x.reduce(function(f, m) {
    return f[m] = nR(m, t.rects, s), f;
  }, {}), l = i[t.placement], a = l.x, c = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = i;
}
const oR = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: rR
};
function sR(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Bx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const iR = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sR,
  data: {}
};
function lR(e) {
  return e === "x" ? "y" : "x";
}
function aR(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, s = o === void 0 ? !0 : o, i = n.altAxis, l = i === void 0 ? !1 : i, a = n.boundary, c = n.rootBoundary, f = n.altBoundary, m = n.padding, x = n.tether, d = x === void 0 ? !0 : x, v = n.tetherOffset, b = v === void 0 ? 0 : v, C = il(t, {
    boundary: a,
    rootBoundary: c,
    padding: m,
    altBoundary: f
  }), g = vr(t.placement), h = Vs(t.placement), S = !h, w = em(g), R = lR(w), k = t.modifiersData.popperOffsets, T = t.rects.reference, E = t.rects.popper, L = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, A = typeof L == "number" ? {
    mainAxis: L,
    altAxis: L
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, L), P = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, y = {
    x: 0,
    y: 0
  };
  if (k) {
    if (s) {
      var M, I = w === "y" ? fn : pn, j = w === "y" ? Bn : Fn, O = w === "y" ? "height" : "width", N = k[w], $ = N + C[I], B = N - C[j], D = d ? -E[O] / 2 : 0, H = h === Ws ? T[O] : E[O], _ = h === Ws ? -E[O] : -T[O], q = t.elements.arrow, V = d && q ? Jp(q) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ox(), G = K[I], Q = K[j], U = Mi(0, T[O], V[O]), ee = S ? T[O] / 2 - D - U - G - A.mainAxis : H - U - G - A.mainAxis, ae = S ? -T[O] / 2 + D + U + Q + A.mainAxis : _ + U + Q + A.mainAxis, Te = t.elements.arrow && bl(t.elements.arrow), we = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, ge = (M = P == null ? void 0 : P[w]) != null ? M : 0, ue = N + ee - ge - we, je = N + ae - ge, _e = Mi(d ? sc($, ue) : $, N, d ? Do(B, je) : B);
      k[w] = _e, y[w] = _e - N;
    }
    if (l) {
      var Ie, Me = w === "x" ? fn : pn, se = w === "x" ? Bn : Fn, Le = k[R], Ae = R === "y" ? "height" : "width", We = Le + C[Me], ke = Le - C[se], $e = [fn, pn].indexOf(g) !== -1, st = (Ie = P == null ? void 0 : P[R]) != null ? Ie : 0, Ne = $e ? We : Le - T[Ae] - E[Ae] - st + A.altAxis, be = $e ? Le + T[Ae] + E[Ae] - st - A.altAxis : ke, Ue = d && $e ? jT(Ne, Le, be) : Mi(d ? Ne : We, Le, d ? be : ke);
      k[R] = Ue, y[R] = Ue - Le;
    }
    t.modifiersData[r] = y;
  }
}
const cR = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: aR,
  requiresIfExists: ["offset"]
};
function uR(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function dR(e) {
  return e === Cn(e) || !An(e) ? tm(e) : uR(e);
}
function fR(e) {
  var t = e.getBoundingClientRect(), n = Us(t.width) / e.offsetWidth || 1, r = Us(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function pR(e, t, n) {
  n === void 0 && (n = !1);
  var r = An(t), o = An(t) && fR(t), s = go(t), i = Hs(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((xr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rm(s)) && (l = dR(t)), An(t) ? (a = Hs(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : s && (a.x = nm(s))), {
    x: i.left + l.scrollLeft - a.x,
    y: i.top + l.scrollTop - a.y,
    width: i.width,
    height: i.height
  };
}
function mR(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function o(s) {
    n.add(s.name);
    var i = [].concat(s.requires || [], s.requiresIfExists || []);
    i.forEach(function(l) {
      if (!n.has(l)) {
        var a = t.get(l);
        a && o(a);
      }
    }), r.push(s);
  }
  return e.forEach(function(s) {
    n.has(s.name) || o(s);
  }), r;
}
function hR(e) {
  var t = mR(e);
  return TT.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function gR(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function yR(e) {
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
var wg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Cg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function vR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, s = o === void 0 ? wg : o;
  return function(l, a, c) {
    c === void 0 && (c = s);
    var f = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wg, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, m = [], x = !1, d = {
      state: f,
      setOptions: function(g) {
        var h = typeof g == "function" ? g(f.options) : g;
        b(), f.options = Object.assign({}, s, f.options, h), f.scrollParents = {
          reference: Yo(l) ? $i(l) : l.contextElement ? $i(l.contextElement) : [],
          popper: $i(a)
        };
        var S = hR(yR([].concat(r, f.options.modifiers)));
        return f.orderedModifiers = S.filter(function(w) {
          return w.enabled;
        }), v(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var g = f.elements, h = g.reference, S = g.popper;
          if (Cg(h, S)) {
            f.rects = {
              reference: pR(h, bl(S), f.options.strategy === "fixed"),
              popper: Jp(S)
            }, f.reset = !1, f.placement = f.options.placement, f.orderedModifiers.forEach(function(A) {
              return f.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var w = 0; w < f.orderedModifiers.length; w++) {
              if (f.reset === !0) {
                f.reset = !1, w = -1;
                continue;
              }
              var R = f.orderedModifiers[w], k = R.fn, T = R.options, E = T === void 0 ? {} : T, L = R.name;
              typeof k == "function" && (f = k({
                state: f,
                options: E,
                name: L,
                instance: d
              }) || f);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: gR(function() {
        return new Promise(function(C) {
          d.forceUpdate(), C(f);
        });
      }),
      destroy: function() {
        b(), x = !0;
      }
    };
    if (!Cg(l, a))
      return d;
    d.setOptions(c).then(function(C) {
      !x && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function v() {
      f.orderedModifiers.forEach(function(C) {
        var g = C.name, h = C.options, S = h === void 0 ? {} : h, w = C.effect;
        if (typeof w == "function") {
          var R = w({
            state: f,
            name: g,
            instance: d,
            options: S
          }), k = function() {
          };
          m.push(R || k);
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
var xR = [WT, iR, DT, IT, oR, JT, cR, NT, tR], SR = /* @__PURE__ */ vR({
  defaultModifiers: xR
});
function Ks(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...s
  } = e, i = o ? {} : Rx(n, r), {
    props: l,
    internalRef: a
  } = Px({
    ...s,
    externalSlotProps: i
  }), c = gt(a, i == null ? void 0 : i.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return Tx(t, {
    ...l,
    ref: c
  }, r);
}
function Zo(e) {
  var t;
  return parseInt(p.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function bR(e) {
  return typeof e == "function" ? e() : e;
}
const Fx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: s = !1
  } = t, [i, l] = p.useState(null), a = gt(/* @__PURE__ */ p.isValidElement(r) ? Zo(r) : null, n);
  if (mt(() => {
    s || l(bR(o) || document.body);
  }, [o, s]), mt(() => {
    if (i && !s)
      return vf(n, i), () => {
        vf(n, null);
      };
  }, [n, i, s]), s) {
    if (/* @__PURE__ */ p.isValidElement(r)) {
      const c = {
        ref: a
      };
      return /* @__PURE__ */ p.cloneElement(r, c);
    }
    return r;
  }
  return i && /* @__PURE__ */ b0.createPortal(r, i);
});
function wR(e) {
  return fe("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function CR(e, t) {
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
function Dx(e) {
  return typeof e == "function" ? e() : e;
}
function kR(e) {
  return e.nodeType !== void 0;
}
const ER = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, wR, t);
}, TR = {}, RR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: s,
    disablePortal: i,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: f,
    popperRef: m,
    slotProps: x = {},
    slots: d = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, g = p.useRef(null), h = gt(g, n), S = p.useRef(null), w = gt(S, m), R = p.useRef(w);
  mt(() => {
    R.current = w;
  }, [w]), p.useImperativeHandle(m, () => S.current, []);
  const k = CR(c, s), [T, E] = p.useState(k), L = p.useMemo(() => Dx(r), [r]);
  p.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), mt(() => {
    if (!L || !a)
      return;
    const I = ($) => {
      E($.placement);
    };
    let j = [{
      name: "preventOverflow",
      options: {
        altBoundary: i
      }
    }, {
      name: "flip",
      options: {
        altBoundary: i
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: $
      }) => {
        I($);
      }
    }];
    l != null && (j = j.concat(l)), f && f.modifiers != null && (j = j.concat(f.modifiers));
    const O = SR(L, g.current, {
      placement: k,
      ...f,
      modifiers: j
    });
    R.current(O);
    const N = g.current;
    return () => {
      if (N) {
        const {
          style: $
        } = N, B = $.position, D = $.top, H = $.left, _ = $.transform;
        O.destroy(), $.position = B, $.top = D, $.left = H, $.transform = _;
      } else
        O.destroy();
      R.current(null);
    };
  }, [L, i, l, a, f, k]);
  const A = {
    placement: T
  };
  v !== null && (A.TransitionProps = v);
  const P = ER(t), y = d.root ?? "div", M = Ks({
    elementType: y,
    externalSlotProps: x.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: P.root
  });
  return /* @__PURE__ */ u.jsx(y, {
    ...M,
    children: typeof o == "function" ? o(A) : o
  });
}), PR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: s,
    direction: i = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: f,
    placement: m = "bottom",
    popperOptions: x = TR,
    popperRef: d,
    style: v,
    transition: b = !1,
    slotProps: C = {},
    slots: g = {},
    ...h
  } = t, [S, w] = p.useState(!0), R = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !f && (!b || S))
    return null;
  let T;
  if (s)
    T = s;
  else if (r) {
    const A = Dx(r);
    T = A && kR(A) ? vt(A).body : vt(null).body;
  }
  const E = !f && a && (!b || S) ? "none" : void 0, L = b ? {
    in: f,
    onEnter: R,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ u.jsx(Fx, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ u.jsx(RR, {
      anchorEl: r,
      direction: i,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: b ? !S : f,
      placement: m,
      popperOptions: x,
      popperRef: d,
      slotProps: C,
      slots: g,
      ...h,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: E,
        ...v
      },
      TransitionProps: L,
      children: o
    })
  });
}), IR = W(PR, {
  name: "MuiPopper",
  slot: "Root"
})({}), _x = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = vl(), o = me({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: i,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: f,
    open: m,
    placement: x,
    popperOptions: d,
    popperRef: v,
    transition: b,
    slots: C,
    slotProps: g,
    ...h
  } = o, S = {
    anchorEl: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: f,
    open: m,
    placement: x,
    popperOptions: d,
    popperRef: v,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ u.jsx(IR, {
    as: i,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: g,
    ...S,
    ref: n
  });
}), MR = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function $R(e) {
  return fe("MuiChip", e);
}
const He = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), jR = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: s,
    clickable: i,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${oe(r)}`, `color${oe(o)}`, i && "clickable", s && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return pe(a, $R, t);
}, LR = W("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => nn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      clickable: o,
      onDelete: s,
      size: i,
      variant: l
    } = n;
    return [{
      [`& .${He.avatar}`]: t.avatar
    }, {
      [`& .${He.icon}`]: t.icon
    }, {
      [`& .${He.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${oe(i)}`], t[`color${oe(r)}`], o && t.clickable, s && t.deletable, t[l]];
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
    ...bt(e, ["background-color", "box-shadow"]),
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
    }, ...Object.entries(e.palette).filter(Dt(["contrastText"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Dt(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Dt(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
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
})), OR = W("span", {
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
function kg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ur = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: s,
    clickable: i,
    color: l = "default",
    component: a,
    deleteIcon: c,
    disabled: f = !1,
    icon: m,
    label: x,
    onClick: d,
    onDelete: v,
    onKeyDown: b,
    onKeyUp: C,
    size: g = "medium",
    variant: h = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: R = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: E,
    ...L
  } = T, A = p.useRef(null), P = gt(A, n), y = (U) => {
    U.stopPropagation(), v(U);
  }, M = (U) => {
    U.currentTarget === U.target && kg(U) && U.preventDefault(), b && b(U);
  }, I = (U) => {
    U.currentTarget === U.target && v && kg(U) && v(U), C && C(U);
  }, j = i !== !1 && d ? !0 : i, O = j || v ? uo : a || "div", N = {
    ...r,
    component: O,
    disabled: f,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ p.isValidElement(m) && m.props.color || l,
    onDelete: !!v,
    clickable: j,
    variant: h
  }, $ = jR(N), B = O === uo ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: $.focusVisible,
    ...v && {
      disableRipple: !0
    },
    ...E !== void 0 && {
      nativeButton: E
    }
  } : {};
  let D = null;
  v && (D = c && /* @__PURE__ */ p.isValidElement(c) ? /* @__PURE__ */ p.cloneElement(c, {
    className: te(c.props.className, $.deleteIcon),
    onClick: y
  }) : /* @__PURE__ */ u.jsx(MR, {
    className: $.deleteIcon,
    onClick: y
  }));
  let H = null;
  o && /* @__PURE__ */ p.isValidElement(o) && (H = /* @__PURE__ */ p.cloneElement(o, {
    className: te($.avatar, o.props.className)
  }));
  let _ = null;
  m && /* @__PURE__ */ p.isValidElement(m) && (_ = /* @__PURE__ */ p.cloneElement(m, {
    className: te($.icon, m.props.className)
  }));
  const q = {
    slots: R,
    slotProps: k
  }, [V, K] = de("root", {
    elementType: LR,
    externalForwardedProps: {
      ...q,
      ...L
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: P,
    className: te($.root, s),
    additionalProps: {
      disabled: j && f ? !0 : void 0,
      tabIndex: w && f ? -1 : S,
      ...B
    },
    getSlotProps: (U) => ({
      ...U,
      onClick: (ee) => {
        var ae;
        (ae = U.onClick) == null || ae.call(U, ee), d == null || d(ee);
      },
      onKeyDown: (ee) => {
        var ae;
        (ae = U.onKeyDown) == null || ae.call(U, ee), M(ee);
      },
      onKeyUp: (ee) => {
        var ae;
        (ae = U.onKeyUp) == null || ae.call(U, ee), I(ee);
      }
    })
  }), [G, Q] = de("label", {
    elementType: OR,
    externalForwardedProps: q,
    ownerState: N,
    className: $.label
  });
  return /* @__PURE__ */ u.jsxs(V, {
    as: O,
    ...K,
    children: [H || _, /* @__PURE__ */ u.jsx(G, {
      ...Q,
      children: x
    }), D]
  });
}), AR = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), NR = {
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
}, zR = {
  opacity: 0,
  visibility: "hidden"
}, Wx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ho(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: i = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: f,
    onEnter: m,
    onEntered: x,
    onEntering: d,
    onExit: v,
    onExited: b,
    onExiting: C,
    style: g,
    timeout: h = o,
    ...S
  } = t, w = mu(r.motion.reducedMotion, a), R = p.useRef(null), k = gt(R, Zo(l), n), T = jn(R, d), E = jn(R, (I, j) => {
    w.shouldReduceMotion || Gp(I);
    const O = Ja({
      style: g,
      timeout: h,
      easing: c
    }, {
      mode: "enter"
    }), N = w.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    I.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: O.easing,
      delay: N.delay
    }), m && m(I, j);
  }), L = jn(R, x), A = jn(R, C), P = jn(R, (I) => {
    const j = Ja({
      style: g,
      timeout: h,
      easing: c
    }, {
      mode: "exit"
    }), O = w.getTransitionTiming({
      duration: j.duration,
      delay: j.delay
    });
    I.style.transition = r.transitions.create("opacity", {
      duration: O.duration,
      easing: j.easing,
      delay: O.delay
    }), v && v(I);
  }), y = jn(R, (I) => {
    I.style.transition = "", b && b(I);
  }), M = s ? (I) => {
    s(R.current, I);
  } : void 0;
  return /* @__PURE__ */ u.jsx(Cx, {
    appear: i,
    in: f,
    nodeRef: R,
    onEnter: E,
    onEntered: L,
    onEntering: T,
    onExit: P,
    onExited: y,
    onExiting: A,
    addEndListener: M,
    reduceMotion: w.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (I, {
      ownerState: j,
      ...O
    }) => {
      const N = Sx(I, f, NR, zR, g, l.props.style);
      return /* @__PURE__ */ p.cloneElement(l, {
        style: N,
        ref: k,
        ...O
      });
    }
  });
});
function BR(e) {
  return fe("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const FR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return pe({
    root: ["root", n && "invisible"]
  }, BR, t);
}, DR = W("div", {
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
}), Ux = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: s,
    component: i = "div",
    invisible: l = !1,
    open: a,
    slotProps: c = {},
    slots: f = {},
    transitionDuration: m,
    ...x
  } = r, d = {
    ...r,
    component: i,
    invisible: l
  }, v = FR(d), b = {
    component: i,
    slots: f,
    slotProps: c
  }, [C, g] = de("root", {
    elementType: DR,
    externalForwardedProps: b,
    className: te(v.root, s),
    ownerState: d
  }), [h, S] = de("transition", {
    elementType: Wx,
    externalForwardedProps: b,
    ownerState: d
  });
  return /* @__PURE__ */ u.jsx(h, {
    in: a,
    timeout: m,
    ...x,
    ...S,
    children: /* @__PURE__ */ u.jsx(C, {
      ...g,
      ref: n,
      children: o
    })
  });
}), _R = ce("MuiBox", ["root"]), WR = lu(), jt = tk({
  themeId: gr,
  defaultTheme: WR,
  defaultClassName: _R.root,
  generateClassName: J0.generate
});
function UR(e) {
  return fe("MuiButton", e);
}
const wo = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), HR = /* @__PURE__ */ p.createContext({}), VR = /* @__PURE__ */ p.createContext(void 0), KR = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: s,
    loading: i,
    loadingPosition: l,
    classes: a
  } = e, c = {
    root: ["root", i && "loading", s, `size${oe(o)}`, `color${oe(t)}`, n && "disableElevation", r && "fullWidth", i && `loadingPosition${oe(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, f = pe(c, UR, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...f
  };
}, Hx = [{
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
}], GR = W(uo, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${oe(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
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
    ...bt(e, ["background-color", "box-shadow", "border-color", "color"], {
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
    }, ...Object.entries(e.palette).filter(Dt()).map(([r]) => ({
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
        ...bt(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${wo.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), YR = W("span", {
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
      ...bt(e, ["opacity"], {
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
  }, ...Hx]
})), QR = W("span", {
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
      ...bt(e, ["opacity"], {
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
  }, ...Hx]
})), XR = W("span", {
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
})), Eg = W("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Tt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(HR), o = p.useContext(VR), s = ol(r, t), i = me({
    props: s,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: f,
    disabled: m = !1,
    disableElevation: x = !1,
    disableFocusRipple: d = !1,
    endIcon: v,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: g,
    loading: h = null,
    loadingIndicator: S,
    loadingPosition: w = "center",
    size: R = "medium",
    startIcon: k,
    type: T,
    variant: E = "text",
    ...L
  } = i, A = nr(g), P = S ?? /* @__PURE__ */ u.jsx(Mo, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), y = {
    ...i,
    color: a,
    component: c,
    disabled: m,
    disableElevation: x,
    disableFocusRipple: d,
    fullWidth: C,
    loading: h,
    loadingIndicator: P,
    loadingPosition: w,
    size: R,
    type: T,
    variant: E
  }, M = KR(y), I = (k || h && w === "start") && /* @__PURE__ */ u.jsx(YR, {
    className: M.startIcon,
    ownerState: y,
    children: k || /* @__PURE__ */ u.jsx(Eg, {
      className: M.loadingIconPlaceholder,
      ownerState: y
    })
  }), j = (v || h && w === "end") && /* @__PURE__ */ u.jsx(QR, {
    className: M.endIcon,
    ownerState: y,
    children: v || /* @__PURE__ */ u.jsx(Eg, {
      className: M.loadingIconPlaceholder,
      ownerState: y
    })
  }), O = o || "", N = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ u.jsx(XR, {
        className: M.loadingIndicator,
        ownerState: y,
        children: P
      })
    })
  ) : null, {
    root: $,
    ...B
  } = M;
  return /* @__PURE__ */ u.jsxs(GR, {
    ownerState: y,
    className: te(r.className, M.root, f, O),
    component: c,
    disabled: m || h,
    focusRipple: !d,
    focusVisibleClassName: te(M.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: h ? A : g,
    ...L,
    classes: B,
    children: [I, w !== "end" && N, l, w === "end" && N, j]
  });
});
function qR(e) {
  return fe("MuiCard", e);
}
ce("MuiCard", ["root"]);
const ZR = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, qR, t);
}, JR = W(sn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), rd = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: s = !1,
    ...i
  } = r, l = {
    ...r,
    raised: s
  }, a = ZR(l);
  return /* @__PURE__ */ u.jsx(JR, {
    className: te(a.root, o),
    elevation: s ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...i
  });
});
function eP(e) {
  return fe("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const tP = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, eP, t);
}, nP = W("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), od = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: s = "div",
    ...i
  } = r, l = {
    ...r,
    component: s
  }, a = tP(l);
  return /* @__PURE__ */ u.jsx(nP, {
    as: s,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...i
  });
});
function rP(e) {
  return fe("PrivateSwitchBase", e);
}
ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const oP = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, s = {
    root: ["root", n && "checked", r && "disabled", o && `edge${oe(o)}`],
    input: ["input"]
  };
  return pe(s, rP, t);
}, sP = W(uo, {
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
}), iP = W("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: nn
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
}), lP = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: s,
    defaultChecked: i,
    disabled: l,
    disableFocusRipple: a = !1,
    edge: c = !1,
    icon: f,
    id: m,
    name: x,
    onBlur: d,
    onChange: v,
    onFocus: b,
    readOnly: C,
    required: g = !1,
    tabIndex: h,
    type: S,
    value: w,
    slots: R = {},
    slotProps: k = {},
    ...T
  } = t, {
    nativeButton: E,
    ...L
  } = T, [A, P] = tc({
    controlled: o,
    default: !!i,
    name: "SwitchBase",
    state: "checked"
  }), y = yx(), M = (K) => {
    b && b(K), y && y.onFocus && y.onFocus(K);
  }, I = (K) => {
    d && d(K), y && y.onBlur && y.onBlur(K);
  }, j = (K) => {
    if (K.nativeEvent.defaultPrevented || C)
      return;
    const G = K.target.checked;
    P(G), v && v(K, G);
  };
  let O = l;
  y && typeof O > "u" && (O = y.disabled);
  const N = S === "checkbox" || S === "radio", $ = {
    ...t,
    checked: A,
    disabled: O,
    disableFocusRipple: a,
    edge: c
  }, B = oP($), D = {
    slots: R,
    slotProps: k
  }, [H, _] = de("root", {
    ref: n,
    elementType: sP,
    className: B.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...D,
      component: "span",
      ...L
    },
    getSlotProps: (K) => ({
      ...K,
      onFocus: (G) => {
        var Q;
        (Q = K.onFocus) == null || Q.call(K, G), M(G);
      },
      onBlur: (G) => {
        var Q;
        (Q = K.onBlur) == null || Q.call(K, G), I(G);
      }
    }),
    ownerState: $,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !a,
      role: void 0,
      tabIndex: null
    }
  }), [q, V] = de("input", {
    elementType: iP,
    className: B.input,
    externalForwardedProps: D,
    getSlotProps: (K) => ({
      ...K,
      onChange: (G) => {
        var Q;
        (Q = K.onChange) == null || Q.call(K, G), j(G);
      }
    }),
    ownerState: $,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: i,
      disabled: O,
      id: N ? m : void 0,
      name: x,
      readOnly: C,
      required: g,
      tabIndex: h,
      type: S,
      ...S === "checkbox" && w === void 0 ? {} : {
        value: w
      }
    }
  });
  return /* @__PURE__ */ u.jsxs(H, {
    ..._,
    children: [/* @__PURE__ */ u.jsx(q, {
      ...V
    }), A ? s : f]
  });
}), aP = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
})), cP = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
})), uP = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
})), dP = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: o
  } = e, s = {
    root: ["root", n && "indeterminate", `color${oe(r)}`, `size${oe(o)}`]
  }, i = pe(s, M2, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...i
  };
}, fP = W(lP, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${oe(n.size)}`], n.color !== "default" && t[`color${oe(n.color)}`]];
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
  }, ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${td.checked}, &.${td.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${td.disabled}`]: {
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
}))), pP = /* @__PURE__ */ u.jsx(cP, {}), mP = /* @__PURE__ */ u.jsx(aP, {}), hP = /* @__PURE__ */ u.jsx(uP, {}), Tg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = pP,
    color: s = "primary",
    icon: i = mP,
    indeterminate: l = !1,
    indeterminateIcon: a = hP,
    size: c = "medium",
    disableRipple: f = !1,
    className: m,
    slots: x = {},
    slotProps: d = {},
    ...v
  } = r, b = l ? a : i, C = l ? a : o, g = {
    ...r,
    disableRipple: f,
    color: s,
    indeterminate: l,
    size: c
  }, h = dP(g), S = d.input, [w, R] = de("root", {
    ref: n,
    elementType: fP,
    className: te(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: x,
      slotProps: d,
      ...v
    },
    ownerState: g,
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
      slots: x,
      slotProps: {
        input: wx(typeof S == "function" ? S(g) : S, {
          "data-indeterminate": l,
          "aria-checked": l ? "mixed" : void 0
        })
      }
    }
  });
  return /* @__PURE__ */ u.jsx(w, {
    ...R,
    classes: h
  });
});
function Rg(e) {
  return e.substring(2).toLowerCase();
}
function gP(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function yP(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: s = "onTouchEnd"
  } = e, i = p.useRef(!1), l = p.useRef(null), a = p.useRef(!1), c = p.useRef(!1);
  p.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const f = gt(Zo(t), l), m = tt((v) => {
    const b = c.current;
    c.current = !1;
    const C = vt(l.current);
    if (!a.current || !l.current || "clientX" in v && gP(v, C))
      return;
    if (i.current) {
      i.current = !1;
      return;
    }
    let g;
    v.composedPath ? g = v.composedPath().includes(l.current) : g = !Fo(C.documentElement, v.target) || Fo(l.current, v.target), !g && (n || !b) && o(v);
  }), x = (v) => (b) => {
    c.current = !0;
    const C = t.props[v];
    C && C(b);
  }, d = {
    ref: f
  };
  return s !== !1 && (d[s] = x(s)), p.useEffect(() => {
    if (s !== !1) {
      const v = Rg(s), b = vt(l.current), C = () => {
        i.current = !0;
      };
      return b.addEventListener(v, m), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(v, m), b.removeEventListener("touchmove", C);
      };
    }
  }, [m, s]), r !== !1 && (d[r] = x(r)), p.useEffect(() => {
    if (r !== !1) {
      const v = Rg(r), b = vt(l.current);
      return b.addEventListener(v, m), () => {
        b.removeEventListener(v, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ p.cloneElement(t, d);
}
function Vx(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function vP(e) {
  const t = vt(e);
  return e === t.body || e === t.documentElement ? rr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ji(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Pg(e) {
  return parseFloat(rr(e).getComputedStyle(e).paddingRight) || 0;
}
function xP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Ig(e, t, n, r, o) {
  const s = [t, n, ...r];
  [].forEach.call(e.children, (i) => {
    const l = !s.includes(i), a = !xP(i);
    l && a && ji(i, o);
  });
}
function SP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let s;
    if (r.parentNode instanceof DocumentFragment)
      s = vt(r).body;
    else {
      const i = r.parentElement, l = rr(r);
      s = (i == null ? void 0 : i.nodeName) === "HTML" && l.getComputedStyle(i).overflowY === "scroll" ? i : r;
    }
    if (vP(s)) {
      const i = Vx(rr(s));
      n.push({
        value: s.style.paddingRight,
        property: "padding-right",
        el: s
      }), s.style.paddingRight = `${Pg(s) + i}px`;
      const l = vt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${Pg(a) + i}px`;
      });
    }
    n.push({
      value: s.style.overflow,
      property: "overflow",
      el: s
    }, {
      value: s.style.overflowX,
      property: "overflow-x",
      el: s
    }, {
      value: s.style.overflowY,
      property: "overflow-y",
      el: s
    }), s.style.overflow = "hidden";
  }
  return () => {
    n.forEach(({
      value: s,
      el: i,
      property: l
    }) => {
      s ? i.style.setProperty(l, s) : i.style.removeProperty(l);
    });
  };
}
function bP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class wP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ji(t.modalRef, !1);
    const o = bP(n);
    Ig(n, t.mount, t.modalRef, o, !0);
    const s = this.containers.findIndex((i) => i.container === n);
    return s !== -1 ? (this.containers[s].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r);
  }
  mount(t, n) {
    const r = this.containers.findIndex((s) => s.modals.includes(t)), o = this.containers[r];
    o.restore || (o.restore = SP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((i) => i.modals.includes(t)), s = this.containers[o];
    if (s.modals.splice(s.modals.indexOf(t), 1), this.modals.splice(r, 1), s.modals.length === 0)
      s.restore && s.restore(), t.modalRef && ji(t.modalRef, n), Ig(s.container, t.mount, t.modalRef, s.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const i = s.modals[s.modals.length - 1];
      i.modalRef && ji(i.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const kf = "data-mui-focusable";
function Mg(e) {
  return e ? e.hasAttribute(kf) ? e : e.querySelector(`[${kf}]`) : null;
}
const CP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Kx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function kP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function EP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || kP(e));
}
function TP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(CP)).forEach((r, o) => {
    const s = Kx(r);
    s === -1 || !EP(r) || (s === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: s,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function RP() {
  return !0;
}
function PP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: s = TP,
    isEnabled: i = RP,
    open: l
  } = e, a = p.useRef(!1), c = p.useRef(null), f = p.useRef(null), m = p.useRef(null), x = p.useRef(null), d = p.useRef(!1), v = p.useRef(null), b = gt(Zo(t), v), C = p.useRef(null);
  p.useEffect(() => {
    !l || !v.current || (d.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (a.current = !1, !l || !v.current)
      return;
    const S = vt(v.current), w = fr(S), R = Mg(v.current) ?? v.current;
    return Fo(v.current, w) || (R.hasAttribute("tabIndex") || R.setAttribute("tabIndex", "-1"), d.current && R.focus()), () => {
      !o && m.current && (a.current = !0, m.current.focus(), m.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !v.current)
      return;
    const S = vt(v.current), w = (T) => {
      if (C.current = T, r || !i() || T.key !== "Tab")
        return;
      const E = v.current, L = fr(S);
      if (E === null)
        return;
      const A = Mg(E);
      if (L === E || L === A) {
        const y = s(E);
        if (y.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? y[y.length - 1].focus() : y[0].focus();
        return;
      }
      if (Fo(E, L)) {
        const y = s(E), M = y.indexOf(L);
        if (M === -1 || !y.some((O) => Kx(O) > 0))
          return;
        T.preventDefault();
        let j = 0;
        T.shiftKey ? j = M <= 0 ? y.length - 1 : M - 1 : j = M === y.length - 1 ? 0 : M + 1, y[j].focus();
      }
    }, R = () => {
      var A, P;
      const T = v.current;
      if (T === null)
        return;
      const E = fr(S);
      if (!S.hasFocus() || !i() || a.current) {
        a.current = !1;
        return;
      }
      if (Fo(T, E) || r && E !== c.current && E !== f.current)
        return;
      if (E !== x.current)
        x.current = null;
      else if (x.current !== null)
        return;
      if (!d.current)
        return;
      let L = [];
      if ((E === c.current || E === f.current) && (L = s(v.current)), L.length > 0) {
        const y = !!((A = C.current) != null && A.shiftKey && ((P = C.current) == null ? void 0 : P.key) === "Tab"), M = L[0], I = L[L.length - 1];
        typeof M != "string" && typeof I != "string" && (y ? I.focus() : M.focus());
      } else
        T.focus();
    };
    S.addEventListener("focusin", R), S.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const T = fr(S);
      T && T.tagName === "BODY" && R();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", R), S.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, i, l, s]);
  const g = (S) => {
    m.current === null && (m.current = S.relatedTarget), d.current = !0, x.current = S.target;
    const w = t.props.onFocus;
    w && w(S);
  }, h = (S) => {
    m.current === null && (m.current = S.relatedTarget), d.current = !0;
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
      ref: f,
      "data-testid": "sentinelEnd"
    })]
  });
}
function IP(e) {
  return typeof e == "function" ? e() : e;
}
function MP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const $g = () => {
}, ql = new wP();
function $P(e) {
  const {
    container: t,
    disableScrollLock: n = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: o,
    onTransitionExited: s,
    children: i,
    onClose: l,
    open: a,
    rootRef: c
  } = e, f = p.useRef({}), m = p.useRef(null), x = p.useRef(null), d = p.useRef(null), v = gt(d, c), [b, C] = p.useState(!a), g = MP(i);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => vt(m.current), w = () => (f.current.modalRef = d.current, f.current.mount = m.current, f.current), R = () => {
    ql.mount(w(), {
      disableScrollLock: n
    }), d.current && (d.current.scrollTop = 0);
  }, k = tt(() => {
    const O = IP(t) || S().body;
    ql.add(w(), O), d.current && R();
  }), T = () => ql.isTopModal(w()), E = tt((O) => {
    m.current = O, O && (x.current = O, a && T() ? R() : d.current && ji(d.current, h));
  }), L = p.useCallback(() => {
    ql.remove(w(), h);
  }, [h]);
  p.useEffect(() => () => {
    L();
  }, [L]), p.useEffect(() => {
    a ? k() : (!g || !r) && L();
  }, [a, L, g, r, k]);
  const A = (O) => (N) => {
    var $;
    ($ = O.onKeyDown) == null || $.call(O, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !T()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, P = (O) => (N) => {
    var $;
    ($ = O.onClick) == null || $.call(O, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, y = (O = {}) => {
    const N = nc(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const $ = {
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
      ...$,
      onKeyDown: A($),
      ref: v
    };
  }, M = (O = {}) => {
    const N = O;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: P(N),
      open: a
    };
  }, I = () => {
    const O = () => {
      C(!1), o && o();
    }, N = () => {
      C(!0), s && s(), r && L();
    };
    return {
      onEnter: og(O, (i == null ? void 0 : i.props.onEnter) ?? $g),
      onExited: og(N, (i == null ? void 0 : i.props.onExited) ?? $g)
    };
  }, j = !a && g && !b ? x.current ?? t : t;
  return {
    getRootProps: y,
    getBackdropProps: M,
    getTransitionProps: I,
    rootRef: v,
    portalRef: E,
    portalContainer: j,
    isTopModal: T,
    exited: b,
    hasTransition: g
  };
}
function jP(e) {
  return fe("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const LP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return pe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, jP, r);
}, OP = W("div", {
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
}))), AP = W(Ux, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Gx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: s,
    closeAfterTransition: i = !1,
    children: l,
    container: a,
    component: c,
    disableAutoFocus: f = !1,
    disableEnforceFocus: m = !1,
    disablePortal: x = !1,
    disableRestoreFocus: d = !1,
    disableScrollLock: v = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: g,
    onTransitionEnter: h,
    onTransitionExited: S,
    open: w,
    slotProps: R = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...E
  } = r, L = {
    ...r,
    closeAfterTransition: i,
    disableAutoFocus: f,
    disableEnforceFocus: m,
    disablePortal: x,
    disableRestoreFocus: d,
    disableScrollLock: v,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: A,
    getBackdropProps: P,
    getTransitionProps: y,
    portalRef: M,
    portalContainer: I,
    isTopModal: j,
    exited: O,
    hasTransition: N
  } = $P({
    ...L,
    rootRef: n
  }), $ = {
    ...L,
    exited: O
  }, B = LP($), D = {};
  if (l.props.tabIndex === void 0 && (D.tabIndex = "-1"), N) {
    const {
      onEnter: G,
      onExited: Q
    } = y();
    D.onEnter = G, D.onExited = Q;
  }
  const H = {
    slots: k,
    slotProps: R
  }, [_, q] = de("root", {
    ref: n,
    elementType: OP,
    externalForwardedProps: {
      ...H,
      ...E,
      component: c
    },
    getSlotProps: A,
    ownerState: $,
    className: te(s, B == null ? void 0 : B.root, !$.open && $.exited && (B == null ? void 0 : B.hidden))
  }), [V, K] = de("backdrop", {
    elementType: AP,
    externalForwardedProps: H,
    shouldForwardComponentProp: !0,
    getSlotProps: (G) => P({
      ...G,
      onClick: (Q) => {
        G != null && G.onClick && G.onClick(Q);
      }
    }),
    className: B == null ? void 0 : B.backdrop,
    ownerState: $
  });
  return !C && !w && (!N || O) ? null : /* @__PURE__ */ u.jsx(Fx, {
    ref: M,
    container: I,
    disablePortal: x,
    children: /* @__PURE__ */ u.jsxs(_, {
      ...q,
      children: [b ? null : /* @__PURE__ */ u.jsx(V, {
        ...K
      }), /* @__PURE__ */ u.jsx(PP, {
        disableEnforceFocus: m,
        disableAutoFocus: f,
        disableRestoreFocus: d,
        isEnabled: j,
        open: w,
        children: /* @__PURE__ */ p.cloneElement(l, D)
      })]
    })
  });
});
function NP(e) {
  return fe("MuiDialog", e);
}
ce("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Yx = /* @__PURE__ */ p.createContext({}), zP = W(Ux, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), BP = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: s
  } = e, i = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${oe(n)}`],
    paper: ["paper", `paperWidth${oe(String(r))}`, o && "paperFullWidth", s && "paperFullScreen"]
  };
  return pe(i, NP, t);
}, FP = W(Gx, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), DP = W("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${oe(n.scroll)}`]];
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
}), _P = W(sn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${oe(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
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
}))), Co = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialog"
  }), o = ho(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": i,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: f,
    fullScreen: m = !1,
    fullWidth: x = !1,
    maxWidth: d = "sm",
    onClick: v,
    onClose: b,
    open: C,
    PaperComponent: g = sn,
    role: h = "dialog",
    scroll: S = "paper",
    slots: w = {},
    slotProps: R = {},
    transitionDuration: k = s,
    ...T
  } = r, E = {
    ...r,
    fullScreen: m,
    fullWidth: x,
    maxWidth: d,
    scroll: S
  }, L = BP(E), A = p.useRef(), P = (G) => {
    A.current = G.target === G.currentTarget;
  }, y = (G) => {
    v && v(G), A.current && (A.current = null, b && b(G, "backdropClick"));
  }, M = nr(l), I = p.useMemo(() => ({
    titleId: M
  }), [M]), j = {
    slots: w,
    slotProps: R
  }, [O, N] = de("root", {
    elementType: FP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: E,
    className: te(L.root, f),
    ref: n
  }), [$, B] = de("backdrop", {
    elementType: zP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: E,
    className: L.backdrop
  }), [D, H] = de("paper", {
    elementType: _P,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    ownerState: E,
    className: L.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": i,
      "aria-labelledby": M,
      "aria-modal": a,
      tabIndex: -1,
      [kf]: ""
    }
  }), [_, q] = de("container", {
    elementType: DP,
    externalForwardedProps: j,
    ownerState: E,
    className: L.container
  }), [V, K] = de("transition", {
    elementType: Wx,
    externalForwardedProps: j,
    ownerState: E,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ u.jsx(O, {
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
    ...N,
    ...T,
    children: /* @__PURE__ */ u.jsx(V, {
      ...K,
      children: /* @__PURE__ */ u.jsx(_, {
        onMouseDown: P,
        ...q,
        children: /* @__PURE__ */ u.jsx(D, {
          as: g,
          ...H,
          children: /* @__PURE__ */ u.jsx(Yx.Provider, {
            value: I,
            children: c
          })
        })
      })
    })
  });
});
function WP(e) {
  return fe("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const UP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return pe({
    root: ["root", !n && "spacing"]
  }, WP, t);
}, HP = W("div", {
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
}), ko = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: s = !1,
    ...i
  } = r, l = {
    ...r,
    disableSpacing: s
  }, a = UP(l);
  return /* @__PURE__ */ u.jsx(HP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...i
  });
});
function VP(e) {
  return fe("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function KP(e) {
  return fe("MuiDialogTitle", e);
}
const GP = ce("MuiDialogTitle", ["root"]), YP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return pe({
    root: ["root", n && "dividers"]
  }, VP, t);
}, QP = W("div", {
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
      [`.${GP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Eo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: s = !1,
    ...i
  } = r, l = {
    ...r,
    dividers: s
  }, a = YP(l);
  return /* @__PURE__ */ u.jsx(QP, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...i
  });
}), XP = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, KP, t);
}, qP = W(Oe, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), To = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: s,
    ...i
  } = r, l = r, a = XP(l), {
    titleId: c = s
  } = p.useContext(Yx);
  return /* @__PURE__ */ u.jsx(qP, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: s ?? c,
    ...i
  });
}), jg = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Qx(e) {
  return fe("MuiSelect", e);
}
const $o = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), ZP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: s,
    hiddenLabel: i,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", s === "small" && `size${oe(s)}`, i && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, c = pe(a, U2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, JP = W(du, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...cu(e, t), !n.disableUnderline && t.underline];
  }
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", s = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...bt(e, "background-color", {
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
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : s
    },
    variants: [{
      props: ({
        ownerState: i
      }) => !i.disableUnderline,
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          ...bt(e, "transform", {
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
          ...bt(e, "border-bottom-color", {
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
    }, ...Object.entries(e.palette).filter(Dt()).map(([i]) => {
      var l;
      return {
        props: {
          disableUnderline: !1,
          color: i
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(l = (e.vars || e).palette[i]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: ({
        ownerState: i
      }) => i.startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        ownerState: i
      }) => i.endAdornment,
      style: {
        // use CSS variable to keep specificity
        "--_trailingPad": "12px",
        paddingRight: "var(--_trailingPad)",
        [`&.${$o.root}`]: {
          "--_trailingPad": "0px"
        }
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline,
      style: {
        padding: "25px 12px 8px"
      }
    }, {
      props: ({
        ownerState: i,
        size: l
      }) => i.multiline && l === "small",
      style: {
        paddingTop: 21,
        paddingBottom: 4
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline && i.hiddenLabel,
      style: {
        paddingTop: 16,
        paddingBottom: 17
      }
    }, {
      props: ({
        ownerState: i
      }) => i.multiline && i.hiddenLabel && i.size === "small",
      style: {
        paddingTop: 8,
        paddingBottom: 9
      }
    }]
  };
})), eI = W(fu, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: uu
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
}))), om = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: s = !1,
    hiddenLabel: i,
    // declare here to prevent spreading to DOM
    inputComponent: l = "input",
    multiline: a = !1,
    notched: c,
    // declare here to prevent spreading to DOM
    slotProps: f,
    slots: m = {},
    type: x = "text",
    ...d
  } = r, v = {
    ...r,
    disableUnderline: o,
    fullWidth: s,
    inputComponent: l,
    multiline: a,
    type: x
  }, b = ZP(r), C = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, g = f ? Wt(C, f) : C, h = m.root ?? JP, S = m.input ?? eI;
  return /* @__PURE__ */ u.jsx(pu, {
    slots: {
      root: h,
      input: S
    },
    slotProps: g,
    fullWidth: s,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: x,
    ...d,
    classes: b
  });
});
om.muiName = "Input";
function tI(e) {
  return fe("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const nI = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${oe(n)}`, r && "fullWidth"]
  };
  return pe(o, tI, t);
}, rI = W("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${oe(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), Ef = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: s,
    color: i = "primary",
    component: l = "div",
    disabled: a = !1,
    error: c = !1,
    focused: f,
    fullWidth: m = !1,
    hiddenLabel: x = !1,
    margin: d = "none",
    required: v = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...g
  } = r, h = {
    ...r,
    color: i,
    component: l,
    disabled: a,
    error: c,
    fullWidth: m,
    hiddenLabel: x,
    margin: d,
    required: v,
    size: b,
    variant: C
  }, S = nI(h), [w, R] = p.useState(() => {
    let j = !1;
    return o && p.Children.forEach(o, (O) => {
      if (!Ju(O, ["Input", "Select"]))
        return;
      const N = Ju(O, ["Select"]) ? O.props.input : O;
      N && N2(N.props) && (j = !0);
    }), j;
  }), [k, T] = p.useState(() => {
    let j = !1;
    return o && p.Children.forEach(o, (O) => {
      Ju(O, ["Input", "Select"]) && (Za(O.props, !0) || Za(O.props.inputProps, !0)) && (j = !0);
    }), j;
  }), [E, L] = p.useState(!1);
  a && E && L(!1);
  const A = f !== void 0 && !a ? f : E;
  let P;
  p.useRef(!1);
  const y = p.useCallback(() => {
    T(!0);
  }, []), M = p.useCallback(() => {
    T(!1);
  }, []), I = p.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: R,
    color: i,
    disabled: a,
    error: c,
    filled: k,
    focused: A,
    fullWidth: m,
    hiddenLabel: x,
    size: b,
    onBlur: () => {
      L(!1);
    },
    onFocus: () => {
      L(!0);
    },
    onEmpty: M,
    onFilled: y,
    registerEffect: P,
    required: v,
    variant: C
  }), [w, i, a, c, k, A, m, x, P, M, y, v, b, C]);
  return /* @__PURE__ */ u.jsx(xl.Provider, {
    value: I,
    children: /* @__PURE__ */ u.jsx(rI, {
      as: l,
      ownerState: h,
      className: te(S.root, s),
      ref: n,
      ...g,
      children: o
    })
  });
}), oI = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: s
  } = e, i = {
    root: ["root", n && "disabled", `labelPlacement${oe(r)}`, o && "error", s && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return pe(i, H2, t);
}, sI = W("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${xi.label}`]: t.label
    }, t.root, t[`labelPlacement${oe(n.labelPlacement)}`]];
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
  [`&.${xi.disabled}`]: {
    cursor: "default"
  },
  [`& .${xi.label}`]: {
    [`&.${xi.disabled}`]: {
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
}))), iI = W("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(ye(({
  theme: e
}) => ({
  [`&.${xi.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), lI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: o,
    className: s,
    control: i,
    disabled: l,
    disableTypography: a,
    inputRef: c,
    label: f,
    labelPlacement: m = "end",
    name: x,
    onChange: d,
    required: v,
    slots: b = {},
    slotProps: C = {},
    value: g,
    ...h
  } = r, [S, w] = qo({
    props: r,
    states: ["error"]
  }), R = l ?? i.props.disabled ?? (w == null ? void 0 : w.disabled), k = v ?? i.props.required, T = {
    disabled: R,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((I) => {
    typeof i.props[I] > "u" && typeof r[I] < "u" && (T[I] = r[I]);
  });
  const E = {
    ...r,
    disabled: R,
    labelPlacement: m,
    required: k,
    error: S.error
  }, L = oI(E), A = {
    slots: b,
    slotProps: C
  }, [P, y] = de("typography", {
    elementType: Oe,
    externalForwardedProps: A,
    ownerState: E
  });
  let M = f;
  return M != null && M.type !== Oe && !a && (M = /* @__PURE__ */ u.jsx(P, {
    component: "span",
    ...y,
    className: te(L.label, y == null ? void 0 : y.className),
    children: M
  })), /* @__PURE__ */ u.jsxs(sI, {
    className: te(L.root, s),
    ownerState: E,
    ref: n,
    ...h,
    children: [/* @__PURE__ */ p.cloneElement(i, T), k ? /* @__PURE__ */ u.jsxs("div", {
      children: [M, /* @__PURE__ */ u.jsxs(iI, {
        ownerState: E,
        "aria-hidden": !0,
        className: L.asterisk,
        children: [" ", "*"]
      })]
    }) : M]
  });
});
var Lg;
const aI = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: s,
    filled: i,
    focused: l,
    required: a
  } = e, c = {
    root: ["root", o && "disabled", s && "error", r && `size${oe(r)}`, n && "contained", l && "focused", i && "filled", a && "required"]
  };
  return pe(c, V2, t);
}, cI = W("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${oe(n.size)}`], n.contained && t.contained, n.filled && t.filled];
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
  [`&.${rg.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${rg.error}`]: {
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
}))), uI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: s,
    component: i = "p",
    disabled: l,
    error: a,
    filled: c,
    focused: f,
    margin: m,
    required: x,
    variant: d,
    ...v
  } = r, [b] = qo({
    props: r,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), C = {
    ...r,
    component: i,
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
  const g = aI(C);
  return /* @__PURE__ */ u.jsx(cI, {
    as: i,
    className: te(g.root, s),
    ref: n,
    ...v,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Lg || (Lg = /* @__PURE__ */ u.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), dI = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: s,
    filled: i,
    required: l
  } = e, a = {
    root: ["root", `color${oe(n)}`, o && "disabled", s && "error", i && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", s && "error"]
  };
  return pe(a, K2, t);
}, fI = W("label", {
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
  variants: [...Object.entries(e.palette).filter(Dt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ii.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ii.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ii.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), pI = W("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ye(({
  theme: e
}) => ({
  [`&.${Ii.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), mI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: s,
    color: i,
    component: l = "label",
    disabled: a,
    error: c,
    filled: f,
    focused: m,
    required: x,
    ...d
  } = r, [v] = qo({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), b = {
    ...r,
    color: v.color || "primary",
    component: l,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, C = dI(b);
  return /* @__PURE__ */ u.jsxs(fI, {
    as: l,
    ownerState: b,
    className: te(C.root, s),
    ref: n,
    ...d,
    children: [o, v.required && /* @__PURE__ */ u.jsxs(pI, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Li(e) {
  return `scale(${e}, ${e ** 2})`;
}
const hI = {
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
}, gI = {
  opacity: 0,
  transform: Li(0.75),
  visibility: "hidden"
}, ll = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: s,
    disablePrefersReducedMotion: i = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: f,
    onEntering: m,
    onExit: x,
    onExited: d,
    onExiting: v,
    style: b,
    timeout: C = "auto",
    ...g
  } = t, h = p.useRef(null), S = ho(), w = mu(S.motion.reducedMotion, i), R = p.useRef(null), k = gt(R, Zo(s), n), T = jn(R, m), E = jn(R, (I, j) => {
    w.shouldReduceMotion || Gp(I);
    const {
      duration: O,
      delay: N,
      easing: $
    } = Ja({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let B;
    C === "auto" && !w.shouldReduceMotion ? (B = S.transitions.getAutoHeightDuration(I.clientHeight), h.current = B) : (B = O, h.current = null);
    const D = w.getTransitionTiming({
      duration: B,
      delay: N
    });
    I.style.transition = [S.transitions.create("opacity", {
      duration: D.duration,
      delay: D.delay
    }), S.transitions.create("transform", {
      duration: typeof D.duration == "string" ? D.duration : D.duration * 0.666,
      delay: D.delay,
      easing: $
    })].join(","), c && c(I, j);
  }), L = jn(R, f), A = jn(R, v), P = jn(R, (I) => {
    const {
      duration: j,
      delay: O,
      easing: N
    } = Ja({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let $;
    C === "auto" && !w.shouldReduceMotion ? ($ = S.transitions.getAutoHeightDuration(I.clientHeight), h.current = $) : ($ = j, h.current = null);
    const B = w.getTransitionTiming({
      duration: $,
      delay: O
    });
    I.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay || (typeof B.duration == "string" ? B.duration : B.duration * 0.333),
      easing: N
    })].join(","), I.style.opacity = 0, I.style.transform = Li(0.75), x && x(I);
  }), y = jn(R, (I) => {
    I.style.transition = "", d && d(I);
  }), M = r ? (I) => {
    r(R.current, I);
  } : void 0;
  return /* @__PURE__ */ u.jsx(Cx, {
    appear: o,
    in: a,
    nodeRef: R,
    onEnter: E,
    onEntered: L,
    onEntering: T,
    onExit: P,
    onExited: y,
    onExiting: A,
    addEndListener: M,
    getAutoTimeout: C === "auto" ? () => h.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...g,
    children: (I, {
      ownerState: j,
      ...O
    }) => {
      const N = Sx(I, a, hI, gI, b, s.props.style);
      return /* @__PURE__ */ p.cloneElement(s, {
        style: N,
        ref: k,
        ...O
      });
    }
  });
});
ll && (ll.muiSupportAuto = !0);
function yI(e) {
  return fe("MuiInputLabel", e);
}
const vI = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), xI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = pe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, G2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, SI = W(du, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...cu(e, t), !n.disableUnderline && t.underline];
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
        [`label + &, .${vI.root} + &`]: {
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
          ...bt(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${ci.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${ci.error}`]: {
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
          ...bt(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${ci.disabled}, .${ci.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${ci.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Dt()).map(([r]) => ({
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
})), bI = W(fu, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: uu
})({}), sm = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: s = !1,
    inputComponent: i = "input",
    multiline: l = !1,
    notched: a,
    // declare here to prevent spreading to DOM
    slotProps: c,
    slots: f = {},
    type: m = "text",
    ...x
  } = r, d = xI(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? Wt(c, b) : b, g = f.root ?? SI, h = f.input ?? bI;
  return /* @__PURE__ */ u.jsx(pu, {
    slots: {
      root: g,
      input: h
    },
    slotProps: C,
    fullWidth: s,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: m,
    ...x,
    classes: d
  });
});
sm.muiName = "Input";
function wI(e) {
  return fe("MuiInputAdornment", e);
}
const ws = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Og;
const CI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${oe(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, kI = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: s,
    variant: i
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${oe(o)}`, i, r && "hiddenLabel", s && `size${oe(s)}`]
  };
  return pe(l, wI, t);
}, EI = W("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: CI
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
      [`&.${ws.positionStart}&:not(.${ws.hiddenLabel})`]: {
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
}))), Ag = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: s,
    component: i = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: c,
    variant: f,
    ...m
  } = r, x = yx() || {};
  let d = f;
  f && x.variant, x && !d && (d = x.variant);
  const v = {
    ...r,
    hiddenLabel: x.hiddenLabel,
    size: x.size,
    disablePointerEvents: l,
    position: c,
    variant: d
  }, b = kI(v);
  return /* @__PURE__ */ u.jsx(xl.Provider, {
    value: null,
    children: /* @__PURE__ */ u.jsx(EI, {
      as: i,
      ownerState: v,
      className: te(b.root, s),
      ref: n,
      ...m,
      children: typeof o == "string" && !a ? /* @__PURE__ */ u.jsx(Oe, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ u.jsxs(p.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Og || (Og = /* @__PURE__ */ u.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), TI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: s,
    variant: i,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !s && "animated", o && "shrink", r && r !== "medium" && `size${oe(r)}`, i],
    asterisk: [l && "asterisk"]
  }, c = pe(a, yI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, RI = W(mI, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ii.asterisk}`]: t.asterisk
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
      ...bt(e, ["color", "transform", "max-width"], {
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
}))), PI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: s,
    shrink: i,
    variant: l,
    className: a,
    ...c
  } = r, [f, m] = qo({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let x = i;
  typeof x > "u" && m && (x = m.filled || m.focused || m.adornedStart);
  const d = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: x,
    size: f.size,
    variant: f.variant,
    required: f.required,
    focused: f.focused
  }, v = TI(d);
  return /* @__PURE__ */ u.jsx(RI, {
    "data-shrink": x,
    ref: n,
    className: te(v.root, a),
    ...c,
    ownerState: d,
    classes: v
  });
}), Tf = /* @__PURE__ */ p.createContext({});
function II(e) {
  return fe("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const MI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return pe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, II, t);
}, $I = W("ul", {
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
}), jI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: s,
    component: i = "ul",
    dense: l = !1,
    disablePadding: a = !1,
    subheader: c,
    ...f
  } = r, m = p.useMemo(() => ({
    dense: l
  }), [l]), x = {
    ...r,
    component: i,
    dense: l,
    disablePadding: a
  }, d = MI(x);
  return /* @__PURE__ */ u.jsx(Tf.Provider, {
    value: m,
    children: /* @__PURE__ */ u.jsxs($I, {
      as: i,
      className: te(d.root, s),
      ref: n,
      ownerState: x,
      ...f,
      children: [c, o]
    })
  });
}), Ng = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), zg = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), im = /* @__PURE__ */ p.createContext(void 0);
function Xx() {
  const e = p.useContext(im);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const LI = Object.is;
function OI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !LI(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const AI = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function qx(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: s = Oi,
    wrap: i = !0
  } = e, [l, a] = p.useState(t), [c, f] = p.useState(t);
  let m = l;
  t !== c && (f(t), t !== void 0 && t !== l && (m = t, a(t)));
  const x = p.useRef(null), d = p.useRef(/* @__PURE__ */ new Map()), [v, b] = p.useState(0), C = p.useMemo(() => Rf(d.current), [v]), g = Bg(m, C, s, n), h = p.useRef(g);
  h.current = g;
  const S = p.useCallback(() => {
    const y = Rf(d.current), M = Bg(h.current, y, s, n);
    return t1(y, M);
  }, [n, s]), w = p.useCallback(() => d.current, []), R = tt((y) => {
    const M = d.current.get(y.id);
    OI(M ?? null, y) || (d.current.set(y.id, y), b((I) => I + 1));
  }), k = tt((y) => {
    d.current.delete(y) && b((M) => M + 1);
  }), T = tt((y) => {
    a(y);
  }), E = p.useCallback((y) => h.current === y, []), L = p.useCallback((y, M, I, j) => {
    var $;
    const O = Zl(d.current), N = Jx(O, y, M, I, j ?? s);
    return N ? (($ = N.element) == null || $.focus(), a(N.id), N) : null;
  }, [s]), A = p.useCallback((y, M, I) => ({
    onFocus: (N) => {
      M == null || M(N);
      const $ = Zl(d.current), B = r1($, N.target);
      B !== -1 && a($[B].id);
    },
    onKeyDown: (N) => {
      if (I == null || I(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !AI.includes(N.key))
        return;
      let $ = r === "horizontal" ? "ArrowLeft" : "ArrowUp", B = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && ($ = "ArrowRight", B = "ArrowLeft");
      const D = Zl(d.current), H = fr(vt(x.current)), _ = H === x.current;
      let q = Fg(D, H, h.current), V = "next";
      switch (N.key) {
        case $:
          V = "previous", N.preventDefault(), _ && (q = D.length);
          break;
        case B:
          N.preventDefault(), _ && (q = -1);
          break;
        case "Home":
          N.preventDefault(), q = -1;
          break;
        case "End":
          N.preventDefault(), V = "previous", q = D.length;
          break;
        default:
          return;
      }
      L(q, V, i);
    },
    ref: FI(y, (N) => {
      x.current = N;
    })
  }), [L, o, r, i]), P = p.useCallback((y) => {
    var N;
    const M = Zl(d.current), I = fr(vt(x.current)), O = I === x.current ? -1 : Fg(M, I, h.current);
    return ((N = L(O, "next", !0, y)) == null ? void 0 : N.id) ?? null;
  }, [L]);
  return p.useMemo(() => ({
    activeItemId: g,
    focusNext: P,
    getActiveItem: S,
    getContainerProps: A,
    getItemMap: w,
    isItemActive: E,
    registerItem: R,
    setActiveItemId: T,
    unregisterItem: k
  }), [g, P, S, A, w, E, R, T, k]);
}
function Zx(e) {
  const t = Xx(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, s = p.useRef(null), i = p.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), l = p.useRef(i);
  l.current = i;
  const a = p.useCallback((f) => {
    if (s.current = f, f == null) {
      queueMicrotask(() => {
        s.current == null && o(e.id);
      });
      return;
    }
    r({
      ...l.current,
      element: f
    });
  }, [e.id, r, o]), c = gt(e.ref, a);
  return mt(() => {
    s.current && r({
      ...i,
      element: s.current
    });
  }, [i, r]), mt(() => {
    const f = e.id;
    return () => {
      o(f);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Bg(e, t, n, r) {
  return e != null ? NI(e, t, n) : zI(t, n, r);
}
function NI(e, t, n) {
  var o;
  const r = n1(t, e);
  return r === -1 ? e1(t, n) : n(t[r]) ? t[r].id : ((o = Jx(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function zI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = t1(e, r);
    if (o && t(o))
      return o.id;
  }
  return e1(e, t);
}
function Fg(e, t, n) {
  if (t) {
    const r = r1(e, t);
    if (r !== -1)
      return r;
  }
  return n1(e, n);
}
function Jx(e, t, n, r, o) {
  const s = e.length - 1;
  if (s === -1)
    return null;
  let i = !1, l = Dg(t, s, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (i)
        return null;
      i = !0;
    }
    const c = e[l];
    if (!c || !o(c))
      l = Dg(l, s, n, r);
    else
      return c;
  }
  return null;
}
function e1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function t1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function n1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function r1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function Rf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Pf).sort((o, s) => BI(o.element, s.element)), r = t.filter((o) => !Pf(o));
  return [...n, ...r];
}
function Zl(e) {
  return Rf(e).filter(Pf);
}
function Dg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Oi(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Pf(e) {
  return e.element != null && e.element.isConnected;
}
function BI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function FI(...e) {
  return (t) => {
    e.forEach((n) => {
      vf(n ?? null, t);
    });
  };
}
function o1(e, t) {
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
function DI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function _I(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function wa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const s1 = /* @__PURE__ */ p.createContext(null);
function i1() {
  return p.useContext(s1);
}
const WI = s1.Provider, l1 = /* @__PURE__ */ p.createContext(void 0);
function UI() {
  const e = p.useContext(l1);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function HI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function a1(e, t) {
  if (t === void 0)
    return !0;
  let n = HI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function VI(e, t) {
  return a1(e, t) ? Oi(e) : !1;
}
function KI(e, t) {
  o1(e, t);
}
const GI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: s = !1,
    children: i,
    className: l,
    disabledItemsFocusable: a = !1,
    disableListWrap: c = !1,
    onKeyDown: f,
    variant: m = "selectedMenu",
    ...x
  } = t, d = p.useRef(null), v = p.useRef(!1), [b, C] = p.useState(!1), g = i1(), h = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = p.useCallback((j) => {
    var O, N, $;
    return m === "selectedMenu" ? ((O = j.find((B) => B.selected && Oi(B))) == null ? void 0 : O.id) ?? ((N = j.find((B) => Oi(B))) == null ? void 0 : N.id) ?? null : (($ = j.find((B) => Oi(B))) == null ? void 0 : $.id) ?? null;
  }, [m]), w = qx({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !c
  }), {
    activeItemId: R,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: E,
    getItemMap: L
  } = w, A = tt((j = !1) => {
    if (!d.current || !j && v.current)
      return null;
    if (s) {
      const O = T();
      if (O != null && O.element) {
        const N = Array.from(L().values()).some((B) => B.selected), $ = m === "menu" && N && !O.selected && g == null;
        return C($), KI(O.element, g), v.current = !0, O.element;
      }
      return o ? (C(!1), d.current.focus(), d.current) : null;
    }
    return o ? (C(!1), d.current.focus(), v.current = !0, d.current) : (C(!1), null);
  });
  mt(() => {
    if (!o && !s) {
      v.current = !1, C(!1);
      return;
    }
    A();
  }, [R, s, o, A]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (j, {
      direction: O
    }) => {
      const N = !d.current.style.width;
      if (j.clientHeight < d.current.clientHeight && N) {
        const $ = `${Vx(rr(j))}px`;
        d.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = $, d.current.style.width = `calc(100% + ${$})`;
      }
      return d.current;
    },
    focusInitialTarget: () => {
      if (!d.current)
        return null;
      const j = fr(vt(d.current));
      return j && Fo(d.current, j) ? j : A(!0);
    }
  }), [A]);
  const P = E(void 0, x.onFocus), y = gt(d, P.ref, n), M = p.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: m
  }), [a, b, m]), I = tt((j) => {
    if (b && C(!1), (j.ctrlKey || j.metaKey || j.altKey) && f) {
      f(j);
      return;
    }
    if (P.onKeyDown(j), j.key.length === 1) {
      const N = h.current, $ = j.key.toLowerCase(), B = performance.now();
      N.keys.length > 0 && (B - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && $ !== N.keys[0] && (N.repeating = !1)), N.lastTime = B, N.keys.push($);
      const D = fr(vt(d.current)), H = D && !N.repeating && a1(D, N);
      N.previousKeyMatched && (H || k((_) => VI(_, N)) != null) ? j.preventDefault() : N.previousKeyMatched = !1;
    }
    f && f(j);
  });
  return /* @__PURE__ */ u.jsx(jI, {
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: I,
    tabIndex: -1,
    ...x,
    onFocus: P.onFocus,
    children: /* @__PURE__ */ u.jsx(l1.Provider, {
      value: M,
      children: /* @__PURE__ */ u.jsx(im.Provider, {
        value: w,
        children: i
      })
    })
  });
});
function YI(e) {
  return fe("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function _g(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Wg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function Ug(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Jl(e) {
  return typeof e == "function" ? e() : e;
}
const QI = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"]
  }, YI, t);
}, XI = W(Gx, {
  name: "MuiPopover",
  slot: "Root"
})({}), c1 = W(sn, {
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
}), qI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: s,
    anchorOrigin: i = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: l,
    anchorReference: a = "anchorEl",
    children: c,
    className: f,
    container: m,
    disableAutoFocus: x = !1,
    elevation: d = 8,
    marginThreshold: v = 16,
    open: b,
    slots: C = {},
    slotProps: g = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: w = !1,
    ...R
  } = r, k = p.useRef(), T = {
    ...r,
    anchorOrigin: i,
    anchorReference: a,
    elevation: d,
    marginThreshold: v,
    transformOrigin: h,
    transitionDuration: S
  }, E = QI(T), L = p.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const U = Jl(s), ae = (U && U.nodeType === 1 ? U : vt(k.current).body).getBoundingClientRect();
    return {
      top: ae.top + _g(ae, i.vertical),
      left: ae.left + Wg(ae, i.horizontal)
    };
  }, [s, i.horizontal, i.vertical, l, a]), A = p.useCallback((U) => ({
    vertical: _g(U, h.vertical),
    horizontal: Wg(U, h.horizontal)
  }), [h.horizontal, h.vertical]), P = p.useCallback((U) => {
    const ee = {
      width: U.offsetWidth,
      height: U.offsetHeight
    }, ae = A(ee);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Ug(ae)
      };
    const Te = L();
    let we = Te.top - ae.vertical, ge = Te.left - ae.horizontal;
    const ue = we + ee.height, je = ge + ee.width, _e = rr(Jl(s)), Ie = _e.innerHeight - v, Me = _e.innerWidth - v;
    if (v != null && we < v) {
      const se = we - v;
      we -= se, ae.vertical += se;
    } else if (v != null && ue > Ie) {
      const se = ue - Ie;
      we -= se, ae.vertical += se;
    }
    if (v != null && ge < v) {
      const se = ge - v;
      ge -= se, ae.horizontal += se;
    } else if (je > Me) {
      const se = je - Me;
      ge -= se, ae.horizontal += se;
    }
    return {
      top: `${Math.round(we)}px`,
      left: `${Math.round(ge)}px`,
      transformOrigin: Ug(ae)
    };
  }, [s, a, L, A, v]), [y, M] = p.useState(b), I = p.useCallback(() => {
    const U = k.current;
    if (!U)
      return;
    const ee = P(U);
    ee.top != null && U.style.setProperty("top", ee.top), ee.left != null && (U.style.left = ee.left), U.style.transformOrigin = ee.transformOrigin, M(!0);
  }, [P]);
  p.useEffect(() => (w && window.addEventListener("scroll", I), () => window.removeEventListener("scroll", I)), [s, w, I]);
  const j = () => {
    I();
  }, O = () => {
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
    const U = au(() => {
      I();
    }), ee = rr(Jl(s));
    return ee.addEventListener("resize", U), () => {
      U.clear(), ee.removeEventListener("resize", U);
    };
  }, [s, b, I]);
  let N = S;
  const $ = {
    slots: C,
    slotProps: g
  }, [B, D] = de("transition", {
    elementType: ll,
    externalForwardedProps: $,
    ownerState: T,
    getSlotProps: (U) => ({
      ...U,
      onEntering: (ee, ae) => {
        var Te;
        (Te = U.onEntering) == null || Te.call(U, ee, ae), j();
      },
      onExited: (ee) => {
        var ae;
        (ae = U.onExited) == null || ae.call(U, ee), O();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !B.muiSupportAuto && (N = void 0);
  const H = m || (s ? vt(Jl(s)).body : void 0), [_, {
    slots: q,
    slotProps: V,
    ...K
  }] = de("root", {
    ref: n,
    elementType: XI,
    externalForwardedProps: {
      ...$,
      ...R
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: wx(typeof g.backdrop == "function" ? g.backdrop(T) : g.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: b
    },
    ownerState: T,
    className: te(E.root, f)
  }), [G, Q] = de("paper", {
    ref: k,
    className: E.paper,
    elementType: c1,
    externalForwardedProps: $,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: d,
      style: y ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ u.jsx(_, {
    ...K,
    ...!qa(_) && {
      slots: q,
      slotProps: V,
      disableAutoFocus: x,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ u.jsx(B, {
      ...D,
      timeout: N,
      children: /* @__PURE__ */ u.jsx(G, {
        ...Q,
        children: c
      })
    })
  });
});
function ZI(e) {
  return fe("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const JI = {
  vertical: "top",
  horizontal: "right"
}, eM = {
  vertical: "top",
  horizontal: "left"
}, tM = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, ZI, t);
}, nM = W(qI, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), rM = W(c1, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), oM = W(GI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), sM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: s,
    className: i,
    disableAutoFocusItem: l = !1,
    onClose: a,
    open: c,
    PopoverClasses: f,
    transitionDuration: m = "auto",
    variant: x = "selectedMenu",
    slots: d = {},
    slotProps: v = {},
    ...b
  } = r, C = vl(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: m,
    variant: x
  }, h = tM(g), S = o && c, w = S && !l, R = p.useRef(null), k = (j, O) => {
    var N, $;
    R.current && (R.current.adjustStyleForScrollbar(j, {
      direction: C ? "rtl" : "ltr"
    }), S && (($ = (N = R.current).focusInitialTarget) == null || $.call(N)));
  }, T = (j) => {
    j.key === "Tab" && (j.preventDefault(), a && a(j, "tabKeyDown"));
  }, E = {
    slots: d,
    slotProps: v
  }, L = Ks({
    elementType: d.root,
    externalSlotProps: v.root,
    ownerState: g,
    className: [h.root, i]
  }), [A, P] = de("paper", {
    className: h.paper,
    elementType: rM,
    externalForwardedProps: E,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [y, M] = de("list", {
    className: h.list,
    elementType: oM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: E,
    getSlotProps: (j) => ({
      ...j,
      onKeyDown: (O) => {
        var N;
        T(O), (N = j.onKeyDown) == null || N.call(j, O);
      }
    }),
    ownerState: g
  }), I = typeof v.transition == "function" ? v.transition(g) : v.transition;
  return /* @__PURE__ */ u.jsx(
    nM,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? JI : eM,
      slots: {
        root: d.root,
        paper: A,
        backdrop: d.backdrop,
        transition: d.transition
      },
      slotProps: {
        root: L,
        paper: P,
        backdrop: typeof v.backdrop == "function" ? v.backdrop(g) : v.backdrop,
        transition: {
          ...I,
          onEntering: (...j) => {
            var O;
            k(...j), (O = I == null ? void 0 : I.onEntering) == null || O.call(I, ...j);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: m,
      ownerState: g,
      ...b,
      classes: f,
      children: /* @__PURE__ */ u.jsx(y, {
        actions: R,
        autoFocus: S,
        autoFocusItem: w,
        variant: x,
        ...M,
        children: s
      })
    }
  );
}), iM = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, lM = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: s,
    classes: i
  } = e, a = pe({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", s && "selected"]
  }, Y2, i);
  return {
    ...i,
    ...a
  };
}, aM = W(uo, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: iM
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
  [`&.${ui.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${ui.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${ui.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${ui.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ui.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${jg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${jg.inset}`]: {
    marginLeft: 52
  },
  [`& .${zg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${zg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${Ng.root}`]: {
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
      [`& .${Ng.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), cs = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: s = "li",
    dense: i = !1,
    divider: l = !1,
    disableGutters: a = !1,
    focusVisibleClassName: c,
    role: f = "menuitem",
    tabIndex: m,
    className: x,
    ...d
  } = r, b = f === "menuitemcheckbox" || f === "menuitemradio" ? !!r.selected : void 0, C = i1(), g = p.useContext(Tf), h = p.useMemo(() => ({
    dense: i || g.dense || !1,
    disableGutters: a
  }), [g.dense, i, a]), S = UI(), w = nr(), R = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, T = p.useRef(null);
  mt(() => {
    o && T.current && o1(T.current, C);
  }, [o]);
  const E = {
    ...r,
    dense: h.dense,
    divider: l,
    disableGutters: a
  }, L = lM(r), {
    root: A,
    ...P
  } = L, y = Zx({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), M = gt(T, y.ref);
  let I;
  return m !== void 0 ? I = m : S.variant === "selectedMenu" ? I = y.tabIndex : (!r.disabled || k) && (I = -1), /* @__PURE__ */ u.jsx(Tf.Provider, {
    value: h,
    children: /* @__PURE__ */ u.jsx(aM, {
      ref: M,
      role: f,
      "aria-checked": b,
      tabIndex: I,
      component: s,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: R,
      focusVisibleClassName: te(L.focusVisible, c),
      className: te(L.root, x),
      ...d,
      ownerState: E,
      classes: P
    })
  });
}), cM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: i
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", i && "error"],
    icon: ["icon", `icon${oe(n)}`, s && "iconOpen", r && "disabled"]
  };
  return pe(l, Q2, t);
}, u1 = W("select", {
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
  [`&.${Qp.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${ws.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${yn.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${yn.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${yn.root}:has(> & ~ .${ws.root})`]: {
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
      [`.${yn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${yn.root}:has(> & ~ .${ws.root})`]: {
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
      [`.${yn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${yn.root}:has(> & ~ .${ws.root})`]: {
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
})), uM = W(u1, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: nn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Qp.multiple}`]: t.multiple
    }];
  }
})({}), d1 = W("svg", {
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
  [`&.${Qp.disabled}`]: {
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
})), dM = W(d1, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${oe(n.variant)}`], n.open && t.iconOpen];
  }
})({}), fM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: s,
    IconComponent: i,
    inputRef: l,
    variant: a = "standard",
    ...c
  } = t, f = {
    ...t,
    disabled: o,
    variant: a,
    error: s
  }, m = cM(f);
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx(uM, {
      ownerState: f,
      className: te(m.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ u.jsx(dM, {
      as: i,
      ownerState: f,
      className: m.icon
    })]
  });
});
var Hg;
const pM = W("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: nn
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
}), mM = W("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: nn
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
      ...bt(e, "width", {
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
      ...bt(e, "max-width", {
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
      ...bt(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function hM(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: s,
    ...i
  } = e, l = o != null && o !== "", a = {
    ...e,
    notched: s,
    withLabel: l
  };
  return /* @__PURE__ */ u.jsx(pM, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...i,
    children: /* @__PURE__ */ u.jsx(mM, {
      ownerState: a,
      children: l ? /* @__PURE__ */ u.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Hg || (Hg = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const gM = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, X2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, yM = W(du, {
  shouldForwardProp: (e) => nn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: cu
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${lr.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${lr.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${lr.focused} .${lr.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Dt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${lr.focused} .${lr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${lr.error} .${lr.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${lr.disabled} .${lr.notchedOutline}`]: {
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
        [`&.${$o.root}`]: {
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
})), vM = W(hM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), xM = W(fu, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: uu
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
}))), lm = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: s = "input",
    label: i,
    multiline: l = !1,
    notched: a,
    slots: c = {},
    slotProps: f = {},
    type: m = "text",
    ...x
  } = r, d = gM(r), [v, b] = qo({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: b,
    fullWidth: o,
    hiddenLabel: v.hiddenLabel,
    multiline: l,
    size: v.size,
    type: m
  }, g = c.root ?? yM, h = c.input ?? xM, [S, w] = de("notchedOutline", {
    elementType: vM,
    className: d.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: f
    },
    additionalProps: {
      label: i != null && i !== "" && v.required ? /* @__PURE__ */ u.jsxs(p.Fragment, {
        children: [i, " ", "*"]
      }) : i
    }
  });
  return /* @__PURE__ */ u.jsx(pu, {
    slots: {
      root: g,
      input: h
    },
    slotProps: f,
    renderSuffix: (R) => /* @__PURE__ */ u.jsx(S, {
      ...w,
      notched: typeof a < "u" ? a : !!(R.startAdornment || R.filled || R.focused)
    }),
    fullWidth: o,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: m,
    ...x,
    classes: {
      ...d,
      notchedOutline: null
    }
  });
});
lm.muiName = "Input";
const SM = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
})), bM = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}));
function wM(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function f1(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return p.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ p.isValidElement(n) && (t += f1(n.props.children));
  }), t;
}
function CM(e, t, n = 0) {
  if (e.length === 0)
    return -1;
  const r = (n % e.length + e.length) % e.length;
  for (let o = 0; o < e.length; o += 1) {
    const s = (r + o) % e.length;
    if (e[s].label.startsWith(t))
      return s;
  }
  return -1;
}
function kM(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function EM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const s = e[o];
    if (!/* @__PURE__ */ p.isValidElement(s) || !wM(s) || s.props.disabled)
      continue;
    const i = f1(s.props.children).trim().toLowerCase();
    i !== "" && (r === -1 && wa(t, s.props.value) && (r = n.length), n.push({
      child: s,
      label: i,
      value: s.props.value
    }));
  }
  return {
    options: n,
    selectedIndex: r
  };
}
var Vg;
const ea = 2, TM = 400, Kg = 200, RM = 750, Ro = " ", PM = "ArrowUp", IM = "ArrowDown", MM = "Enter";
function Gg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - ea && e.clientX <= r.right + ea && e.clientY >= r.top - ea && e.clientY <= r.bottom + ea;
}
const $M = W(u1, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${$o.select}`]: t.select
      },
      {
        [`&.${$o.select}`]: t[n.variant]
      },
      {
        [`&.${$o.error}`]: t.error
      },
      {
        [`&.${$o.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${$o.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), jM = W(d1, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), LM = W("input", {
  shouldForwardProp: (e) => vx(e) && e !== "classes",
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
}), OM = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: s,
    error: i
  } = e;
  return pe({
    select: ["select", n, r && "disabled", o && "multiple", i && "error"],
    icon: ["icon", s && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Qx, t);
}, AM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  var xo, Dr, Cl, kl;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: s,
    autoWidth: i,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: f,
    disabled: m,
    displayEmpty: x,
    error: d = !1,
    IconComponent: v,
    inputRef: b,
    labelId: C,
    MenuProps: g = {},
    multiple: h,
    name: S,
    onBlur: w,
    onChange: R,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: E,
    // eslint-disable-next-line react/prop-types
    onMouseDown: L,
    onOpen: A,
    open: P,
    readOnly: y,
    renderValue: M,
    required: I,
    SelectDisplayProps: j = {},
    tabIndex: O,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: $,
    variant: B = "standard",
    ...D
  } = t, [H, _] = tc({
    controlled: $,
    default: f,
    name: "Select"
  }), [q, V] = tc({
    controlled: P,
    default: c,
    name: "Select"
  }), K = p.useRef(null), G = p.useRef(null), Q = p.useRef(null), U = p.useRef(!1), ee = p.useRef(!1), ae = p.useRef(null), Te = p.useRef(!1), we = p.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ge = p.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), ue = pr(), je = pr(), _e = pr(), [Ie, Me] = p.useState(null), {
    current: se
  } = p.useRef(P != null), [Le, Ae] = p.useState(), [We, ke] = p.useState(null), $e = gt(n, b), st = p.useCallback((X) => {
    G.current = X, X && Me(X);
  }, []), Ne = Ie == null ? void 0 : Ie.parentNode;
  p.useImperativeHandle($e, () => ({
    focus: () => {
      G.current.focus();
    },
    node: K.current,
    value: H
  }), [H]);
  const be = Ie !== null && q, Ue = p.useCallback(() => {
    _e.clear(), ge.current.buffer = "", ge.current.previousSearchIndex = null, ge.current.matchedIndex = null;
  }, [_e]);
  mt(() => {
    U.current = be, be && Ue();
  }, [be, Ue]);
  const xt = p.useCallback(() => {
    ue.clear(), je.clear();
  }, [ue, je]), ie = p.useCallback(() => {
    xt(), Te.current = !1, we.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [xt]), xe = p.useCallback(() => {
    ae.current && (ae.current(), ae.current = null);
  }, []);
  p.useEffect(() => {
    be || (ie(), xe());
  }, [be, ie, xe]), p.useEffect(() => () => {
    ie(), xe(), Ue();
  }, [ie, xe, Ue]), p.useEffect(() => {
    if (!be || !Ne || i || typeof ResizeObserver > "u")
      return;
    const X = new ResizeObserver(() => {
      Ae(Ne.clientWidth);
    });
    return X.observe(Ne), () => {
      X.disconnect();
    };
  }, [be, Ne, i]), p.useEffect(() => {
    c && q && Ie && !se && (Ae(i ? null : Ne.clientWidth), G.current.focus());
  }, [Ie, i]), p.useEffect(() => {
    s && G.current.focus();
  }, [s]), p.useEffect(() => {
    if (!C)
      return;
    const X = vt(G.current).getElementById(C);
    if (X) {
      const le = () => {
        getSelection().isCollapsed && G.current.focus();
      };
      return X.addEventListener("click", le), () => {
        X.removeEventListener("click", le);
      };
    }
  }, [C]);
  const Be = tt((X, le) => {
    X || (ie(), xe()), X ? (Ue(), ke(DI(le)), A && A(le)) : (ke(null), k && k(le)), se || (U.current = X, Ae(i ? null : Ne.clientWidth), V(X));
  }), it = () => {
    ie(), ee.current ? je.start(Kg, () => {
      we.current.allowUnselectedMouseUp = !0, ue.start(Kg, () => {
        we.current.allowSelectedMouseUp = !0;
      });
    }) : ue.start(TM, () => {
      we.current.allowSelectedMouseUp = !0, we.current.allowUnselectedMouseUp = !0;
    });
  }, Ce = (X) => {
    if (L == null || L(X), X.button !== 0 || (X.preventDefault(), !G.current))
      return;
    G.current.focus();
    const le = vt(X.currentTarget);
    it(), xe();
    const Ee = (Ze) => {
      ae.current = null, G.current && (Gg(Ze, G.current) || Gg(Ze, Q.current) || !U.current && se || Be(!1, Ze));
    };
    le.addEventListener("mouseup", Ee, {
      capture: !0,
      once: !0
    }), ae.current = () => {
      le.removeEventListener("mouseup", Ee, !0);
    }, Be(!0, X);
  }, or = (X) => {
    Be(!1, X);
  }, rn = p.Children.toArray(l), yo = (X) => {
    const le = rn.find((Ee) => Ee.props.value === X.target.value);
    le !== void 0 && (_(le.props.value), R && R(X, le));
  }, Nr = (X, le, Ee) => {
    if (_(Ee), R) {
      const Ze = X.nativeEvent || X, Nt = new Ze.constructor(Ze.type, Ze);
      Object.defineProperty(Nt, "target", {
        writable: !0,
        value: {
          value: Ee,
          name: S
        }
      }), R(Nt, le);
    }
  }, ve = (X) => (le) => {
    Te.current = !1;
    let Ee;
    if (le.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Ee = Array.isArray(H) ? H.slice() : [];
        const Ze = H.indexOf(X.props.value);
        Ze === -1 ? Ee.push(X.props.value) : Ee.splice(Ze, 1);
      } else
        Ee = X.props.value;
      X.props.onClick && X.props.onClick(le), H !== Ee && Nr(le, X, Ee), h || Be(!1, le);
    }
  }, Xe = (X, le) => (Ee) => {
    var es, _r;
    if ((_r = (es = X.props).onMouseUp) == null || _r.call(es, Ee), Te.current) {
      Te.current = !1;
      return;
    }
    const Ze = !we.current.allowSelectedMouseUp && le, Nt = !we.current.allowUnselectedMouseUp && !le;
    Ze || Nt || Ee.currentTarget.click();
  }, Ht = (X) => {
    var El;
    const le = ge.current, Ee = le.buffer !== "";
    if (be || h || m || X.defaultPrevented || (El = X.nativeEvent) != null && El.isComposing || X.key.length !== 1 || X.ctrlKey || X.metaKey || X.altKey || X.key === Ro && !Ee)
      return !1;
    X.key === Ro && X.preventDefault();
    const Ze = le.buffer === "", {
      options: Nt,
      selectedIndex: es
    } = EM(rn, H);
    if (Nt.length === 0)
      return X.key !== Ro && Ue(), !0;
    Ze && (le.previousSearchIndex = es);
    const _r = X.key.toLowerCase();
    le.buffer === _r && kM(Nt, _r) && (le.buffer = "", le.previousSearchIndex = le.matchedIndex), le.buffer += _r, _e.start(RM, Ue);
    const qs = CM(Nt, le.buffer, (le.previousSearchIndex ?? -1) + 1);
    if (qs !== -1) {
      const ts = Nt[qs];
      return le.matchedIndex = qs, wa(H, ts.value) || Nr(X, ts.child, ts.value), !0;
    }
    return X.key !== Ro && Ue(), !0;
  }, wl = (X) => {
    if (!y) {
      const le = Ht(X), Ee = X.key === Ro || X.key === PM || X.key === IM || X.key === MM;
      !le && Ee && (X.preventDefault(), Be(!0, X)), E == null || E(X);
    }
  }, on = (X) => {
    Ue(), !be && w && (Object.defineProperty(X, "target", {
      writable: !0,
      value: {
        value: H,
        name: S
      }
    }), w(X));
  }, vo = (X) => (le) => {
    var Ee, Ze;
    (Ze = (Ee = X == null ? void 0 : X.props) == null ? void 0 : Ee.onKeyDown) == null || Ze.call(Ee, le), le.key === Ro && le.target === le.currentTarget && !le.defaultPrevented && (le.preventDefault(), le.repeat || le.currentTarget.click());
  };
  delete D["aria-invalid"];
  let nt, zr;
  const dt = [];
  let Br = !1, Xt = !1;
  (Za({
    value: H
  }) || x) && (M ? nt = M(H) : Br = !0);
  const Jo = rn.map((X) => {
    if (!/* @__PURE__ */ p.isValidElement(X))
      return null;
    let le;
    if (h) {
      if (!Array.isArray(H))
        throw new Error(Lr(2));
      le = H.some((Ee) => wa(Ee, X.props.value)), le && Br && dt.push(X.props.children);
    } else
      le = wa(H, X.props.value), le && Br && (zr = X.props.children);
    return le && (Xt = !0), /* @__PURE__ */ p.cloneElement(X, {
      "aria-selected": le ? "true" : "false",
      onMouseDown: (Ee) => {
        var Ze, Nt;
        Te.current = !0, (Nt = (Ze = X.props).onMouseDown) == null || Nt.call(Ze, Ee);
      },
      onPointerDown: (Ee) => {
        var Ze, Nt;
        Te.current = !0, (Nt = (Ze = X.props).onPointerDown) == null || Nt.call(Ze, Ee);
      },
      onClick: ve(X),
      onMouseUp: Xe(X, le),
      onKeyUp: (Ee) => {
        Ee.key === Ro && Ee.preventDefault(), X.props.onKeyUp && X.props.onKeyUp(Ee);
      },
      onKeyDown: vo(X),
      role: "option",
      selected: le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": X.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  mt(() => {
    ee.current = Xt, !be && !h && !Xt && Ue();
  }, [Xt, h, be, Ue]), Br && (h ? dt.length === 0 ? nt = null : nt = dt.reduce((X, le, Ee) => (X.push(le), Ee < dt.length - 1 && X.push(", "), X), []) : nt = zr);
  let Ct = Le;
  !i && se && Ie && (Ct = Ne.clientWidth);
  let Fr;
  typeof O < "u" ? Fr = O : Fr = m ? null : 0;
  const ne = j.id || (S ? `mui-component-select-${S}` : void 0), J = {
    ...t,
    variant: B,
    value: H,
    open: be,
    error: d
  }, he = OM(J), Se = typeof ((xo = g.slotProps) == null ? void 0 : xo.paper) == "function" ? g.slotProps.paper(J) : (Dr = g.slotProps) == null ? void 0 : Dr.paper, qe = gt(Se == null ? void 0 : Se.ref, Q), Wn = typeof ((Cl = g.slotProps) == null ? void 0 : Cl.list) == "function" ? g.slotProps.list(J) : (kl = g.slotProps) == null ? void 0 : kl.list, Rn = nr(), Un = nr();
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ u.jsx($M, {
      as: "div",
      ref: st,
      tabIndex: Fr,
      role: "combobox",
      "aria-controls": be ? Rn : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": be ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": y ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": I ? "true" : void 0,
      "aria-invalid": d ? "true" : void 0,
      onKeyDown: wl,
      onMouseDown: m || y ? null : Ce,
      onBlur: on,
      onFocus: T,
      ...j,
      ownerState: J,
      className: te(j.className, he.select, a),
      id: ne,
      children: _I(nt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Vg || (Vg = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : nt
    }), /* @__PURE__ */ u.jsx(LM, {
      "aria-invalid": d,
      value: Array.isArray(H) ? H.join(",") : H,
      name: S,
      ref: K,
      "aria-hidden": !0,
      onChange: yo,
      tabIndex: -1,
      disabled: m,
      readOnly: y,
      className: he.nativeInput,
      autoFocus: s,
      required: I,
      ...D,
      id: D.id ?? Un,
      ownerState: J
    }), /* @__PURE__ */ u.jsx(jM, {
      as: v,
      className: he.icon,
      ownerState: J
    }), /* @__PURE__ */ u.jsx(WI, {
      value: We,
      children: /* @__PURE__ */ u.jsx(sM, {
        id: `menu-${S || ""}`,
        anchorEl: Ne,
        open: be,
        onClose: or,
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
            id: Rn,
            ...Wn
          },
          paper: {
            ...Se,
            ref: qe,
            style: {
              minWidth: Ct,
              ...Se == null ? void 0 : Se.style
            }
          }
        },
        children: Jo
      })
    })]
  });
}), NM = (e) => {
  const {
    classes: t
  } = e, r = pe({
    root: ["root"]
  }, Qx, t);
  return {
    ...t,
    ...r
  };
}, am = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => nn(e) && e !== "variant"
}, zM = W(sm, am)(""), BM = W(lm, am)(""), FM = W(om, am)(""), yu = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: s,
    classes: i = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: c = !1,
    IconComponent: f = AR,
    id: m,
    input: x,
    inputProps: d,
    label: v,
    labelId: b,
    MenuProps: C,
    multiple: g = !1,
    native: h = !1,
    onClose: S,
    onOpen: w,
    open: R,
    renderValue: k,
    SelectDisplayProps: T,
    variant: E = "outlined",
    ...L
  } = r, A = h ? fM : AM, [P] = qo({
    props: r,
    states: ["variant", "error"]
  }), y = P.variant || E, M = {
    ...r,
    variant: y,
    classes: i
  }, I = NM(M), {
    root: j,
    ...O
  } = I, N = x || {
    standard: /* @__PURE__ */ u.jsx(zM, {
      ownerState: M
    }),
    outlined: /* @__PURE__ */ u.jsx(BM, {
      label: v,
      ownerState: M
    }),
    filled: /* @__PURE__ */ u.jsx(FM, {
      ownerState: M
    })
  }[y], $ = gt(n, Zo(N));
  return /* @__PURE__ */ u.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: {
        children: s,
        error: P.error,
        IconComponent: f,
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
          open: R,
          renderValue: k,
          SelectDisplayProps: {
            id: m,
            ...T
          }
        },
        ...d,
        classes: d ? Wt(O, d.classes) : O,
        ...x ? x.props.inputProps : {}
      },
      ...(g && h || c) && y === "outlined" ? {
        notched: !0
      } : {},
      ref: $,
      className: te(N.props.className, l, I.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!x && {
        variant: y
      },
      ...L
    })
  });
});
yu.muiName = "Select";
function DM(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: s
  } = e, i = pr();
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
  const l = tt((g, h) => {
    r == null || r(g, h);
  }), a = tt((g) => {
    !r || g == null || i.start(g, () => {
      l(null, "timeout");
    });
  });
  p.useEffect(() => (o && a(t), i.clear), [o, t, a, i]);
  const c = (g) => {
    r == null || r(g, "clickaway");
  }, f = i.clear, m = p.useCallback(() => {
    t != null && a(s ?? t * 0.5);
  }, [t, s, a]), x = (g) => (h) => {
    const S = g.onBlur;
    S == null || S(h), m();
  }, d = (g) => (h) => {
    const S = g.onFocus;
    S == null || S(h), f();
  }, v = (g) => (h) => {
    const S = g.onMouseEnter;
    S == null || S(h), f();
  }, b = (g) => (h) => {
    const S = g.onMouseLeave;
    S == null || S(h), m();
  };
  return p.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", f), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", f);
      };
  }, [n, o, m, f]), {
    getRootProps: (g = {}) => {
      const h = {
        ...nc(e),
        ...nc(g)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...g,
        ...h,
        onBlur: x(h),
        onFocus: d(h),
        onMouseEnter: v(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: c
  };
}
function _M(e) {
  return fe("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const WM = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, _M, t);
}, UM = W(sn, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(ff(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : ff(e.palette.background.default, t),
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
})), HM = W("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), VM = W("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), KM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: s,
    message: i,
    role: l = "alert",
    ...a
  } = r, c = r, f = WM(c);
  return /* @__PURE__ */ u.jsxs(UM, {
    role: l,
    elevation: 6,
    className: te(f.root, s),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ u.jsx(HM, {
      className: f.message,
      ownerState: c,
      children: i
    }), o ? /* @__PURE__ */ u.jsx(VM, {
      className: f.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function GM(e) {
  return fe("MuiSnackbar", e);
}
ce("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const YM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${oe(n.vertical)}${oe(n.horizontal)}`]
  };
  return pe(r, GM, t);
}, QM = W("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${oe(n.anchorOrigin.vertical)}${oe(n.anchorOrigin.horizontal)}`]];
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
}))), XM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiSnackbar"
  }), o = ho(), s = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    action: i,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: c = null,
    children: f,
    className: m,
    disableWindowBlurListener: x = !1,
    message: d,
    onBlur: v,
    onClose: b,
    onFocus: C,
    onMouseEnter: g,
    onMouseLeave: h,
    open: S,
    resumeHideDuration: w,
    slots: R = {},
    slotProps: k = {},
    transitionDuration: T = s,
    ...E
  } = r, L = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: c,
    disableWindowBlurListener: x,
    transitionDuration: T
  }, A = YM(L), {
    getRootProps: P,
    onClickAway: y
  } = DM(L), [M, I] = p.useState(!0), j = {
    slots: R,
    slotProps: k
  }, [O, N] = de("root", {
    ref: n,
    className: [A.root, m],
    elementType: QM,
    getSlotProps: P,
    externalForwardedProps: {
      ...j,
      ...E
    },
    ownerState: L
  }), [$, {
    ownerState: B,
    ...D
  }] = de("clickAwayListener", {
    elementType: yP,
    externalForwardedProps: j,
    getSlotProps: (K) => ({
      onClickAway: (...G) => {
        var U;
        const Q = G[0];
        (U = K.onClickAway) == null || U.call(K, ...G), !(Q != null && Q.defaultMuiPrevented) && y(...G);
      }
    }),
    ownerState: L
  }), [H, _] = de("content", {
    elementType: KM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: j,
    additionalProps: {
      message: d,
      action: i
    },
    ownerState: L
  }), [q, V] = de("transition", {
    elementType: ll,
    externalForwardedProps: j,
    getSlotProps: (K) => ({
      onEnter: (...G) => {
        var Q;
        (Q = K.onEnter) == null || Q.call(K, ...G), I(!1);
      },
      onExited: (...G) => {
        var Q;
        (Q = K.onExited) == null || Q.call(K, ...G), I(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: T,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: L
  });
  return !S && M ? null : /* @__PURE__ */ u.jsx($, {
    ...D,
    ...R.clickAwayListener && {
      ownerState: B
    },
    children: /* @__PURE__ */ u.jsx(O, {
      ...N,
      children: /* @__PURE__ */ u.jsx(q, {
        ...V,
        children: f || /* @__PURE__ */ u.jsx(H, {
          ..._
        })
      })
    })
  });
});
function qM(e) {
  return fe("MuiTooltip", e);
}
const Pn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function ZM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const JM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: s
  } = e, i = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${oe(s.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return pe(i, qM, t);
}, e$ = W(_x, {
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
      [`&[data-popper-placement*="bottom"] .${Pn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Pn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Pn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Pn.arrow}`]: {
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
}))), t$ = W("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${oe(n.placement.split("-")[0])}`]];
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
  [`.${Pn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${Pn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${Pn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Pn.popper}[data-popper-placement*="bottom"] &`]: {
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
      lineHeight: `${ZM(16 / 14)}em`,
      fontWeight: e.typography.fontWeightRegular
    }
  }, {
    props: ({
      ownerState: t
    }) => t.touch,
    style: {
      [`.${Pn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${Pn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${Pn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${Pn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), n$ = W("span", {
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
let ta = !1;
const Yg = new hu();
let fi = {
  x: 0,
  y: 0
};
function na(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const Kn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: s,
    classes: i,
    describeChild: l = !1,
    disableFocusListener: a = !1,
    disableHoverListener: c = !1,
    disableInteractive: f = !1,
    disableTouchListener: m = !1,
    enterDelay: x = 100,
    enterNextDelay: d = 0,
    enterTouchDelay: v = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: g = 0,
    leaveTouchDelay: h = 1500,
    onClose: S,
    onOpen: w,
    open: R,
    placement: k = "bottom",
    slotProps: T = {},
    slots: E = {},
    title: L,
    ...A
  } = r, P = /* @__PURE__ */ p.isValidElement(s) ? s : /* @__PURE__ */ u.jsx("span", {
    children: s
  }), y = ho(), [M, I] = p.useState(), [j, O] = p.useState(null), N = p.useRef(!1), $ = f || b, B = pr(), D = pr(), H = pr(), _ = pr(), [q, V] = tc({
    controlled: R,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let K = q;
  const G = nr(C), Q = p.useRef(), U = tt(() => {
    Q.current !== void 0 && (document.body.style.WebkitUserSelect = Q.current, Q.current = void 0), _.clear();
  });
  p.useEffect(() => U, [U]);
  const ee = (ve) => {
    Yg.clear(), ta = !0, V(!0), w && !K && w(ve);
  }, ae = tt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (ve) => {
      Yg.start(800 + g, () => {
        ta = !1;
      }), V(!1), S && K && S(ve), B.start(y.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), Te = (ve) => {
    M != null && M.disabled || N.current && ve.type !== "touchstart" || (M && M.removeAttribute("title"), D.clear(), H.clear(), x || ta && d ? D.start(ta ? d : x, () => {
      ee(ve);
    }) : ee(ve));
  }, we = (ve) => {
    D.clear(), H.start(g, () => {
      ae(ve);
    });
  }, [, ge] = p.useState(!1), ue = (ve) => {
    const Xe = (ve == null ? void 0 : ve.target) ?? M;
    if (!Xe || Xe.disabled || !rc(Xe)) {
      ge(!1);
      const Ht = ve ?? new Event("blur");
      !ve && Xe && (Object.defineProperty(Ht, "target", {
        value: Xe
      }), Object.defineProperty(Ht, "currentTarget", {
        value: Xe
      })), we(Ht);
    }
  }, je = (ve) => {
    if (M || I(ve.currentTarget), rc(ve.target)) {
      const Xe = (Ht) => {
        Ht.target.disabled && ue(Ht), Ht.target.removeEventListener("blur", Xe);
      };
      ve.target.addEventListener("blur", Xe), ge(!0), Te(ve);
    }
  }, _e = (ve) => {
    N.current = !0;
    const Xe = P.props;
    Xe.onTouchStart && Xe.onTouchStart(ve);
  }, Ie = (ve) => {
    _e(ve), H.clear(), B.clear(), U(), Q.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", _.start(v, () => {
      document.body.style.WebkitUserSelect = Q.current, Te(ve);
    });
  }, Me = (ve) => {
    P.props.onTouchEnd && P.props.onTouchEnd(ve), U(), H.start(h, () => {
      ae(ve);
    });
  };
  p.useEffect(() => {
    if (!K)
      return;
    function ve(Xe) {
      Xe.key === "Escape" && ae(Xe);
    }
    return document.addEventListener("keydown", ve), () => {
      document.removeEventListener("keydown", ve);
    };
  }, [ae, K]);
  const se = gt(Zo(P), I, n);
  !L && L !== 0 && (K = !1);
  const Le = p.useRef(), Ae = (ve) => {
    const Xe = P.props;
    Xe.onMouseMove && Xe.onMouseMove(ve), fi = {
      x: ve.clientX,
      y: ve.clientY
    }, Le.current && Le.current.update();
  }, We = {}, ke = typeof L == "string";
  l ? (We.title = !K && ke && !c ? L : null, We["aria-describedby"] = K ? G : null) : (We["aria-label"] = ke ? L : null, We["aria-labelledby"] = K && !ke ? G : null);
  const $e = {
    ...We,
    ...A,
    ...P.props,
    className: te(A.className, P.props.className),
    onTouchStart: _e,
    ref: se,
    ...b ? {
      onMouseMove: Ae
    } : {}
  }, st = {};
  m || ($e.onTouchStart = Ie, $e.onTouchEnd = Me), c || ($e.onMouseOver = na(Te, $e.onMouseOver), $e.onMouseLeave = na(we, $e.onMouseLeave), $ || (st.onMouseOver = Te, st.onMouseLeave = we)), a || ($e.onFocus = na(je, $e.onFocus), $e.onBlur = na(ue, $e.onBlur), $ || (st.onFocus = je, st.onBlur = ue));
  const Ne = {
    ...r,
    arrow: o,
    disableInteractive: $,
    placement: k,
    touch: N.current
  }, be = typeof T.popper == "function" ? T.popper(Ne) : T.popper, Ue = p.useMemo(() => {
    var Xe;
    let ve = [{
      name: "arrow",
      enabled: !!j,
      options: {
        element: j,
        padding: 4
      }
    }];
    return (Xe = be == null ? void 0 : be.popperOptions) != null && Xe.modifiers && (ve = ve.concat(be.popperOptions.modifiers)), {
      ...be == null ? void 0 : be.popperOptions,
      modifiers: ve
    };
  }, [j, be == null ? void 0 : be.popperOptions]), xt = JM(Ne), ie = {
    slots: E,
    slotProps: {
      arrow: T.arrow,
      popper: be,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [xe, Be] = de("popper", {
    elementType: e$,
    externalForwardedProps: ie,
    ownerState: Ne,
    className: xt.popper
  }), [it, Ce] = de("transition", {
    elementType: ll,
    externalForwardedProps: ie,
    ownerState: Ne
  }), [or, rn] = de("tooltip", {
    elementType: t$,
    className: xt.tooltip,
    externalForwardedProps: ie,
    ownerState: Ne
  }), [yo, Nr] = de("arrow", {
    elementType: n$,
    className: xt.arrow,
    externalForwardedProps: ie,
    ownerState: Ne,
    ref: O
  });
  return /* @__PURE__ */ u.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement(P, $e), /* @__PURE__ */ u.jsx(xe, {
      as: _x,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: fi.y,
          left: fi.x,
          right: fi.x,
          bottom: fi.y,
          width: 0,
          height: 0
        })
      } : M,
      popperRef: Le,
      open: M ? K : !1,
      id: G,
      transition: !0,
      ...st,
      ...Be,
      popperOptions: Ue,
      children: ({
        TransitionProps: ve
      }) => /* @__PURE__ */ u.jsx(it, {
        timeout: y.transitions.duration.shorter,
        ...ve,
        ...Ce,
        children: /* @__PURE__ */ u.jsxs(or, {
          ...rn,
          children: [L, o ? /* @__PURE__ */ u.jsx(yo, {
            ...Nr
          }) : null]
        })
      })
    })]
  });
}), at = Yk({
  createStyledComponent: W("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => me({
    props: e,
    name: "MuiStack"
  })
});
function r$(e) {
  return fe("MuiTab", e);
}
const Gn = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), o$ = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: r,
    wrapped: o,
    icon: s,
    label: i,
    selected: l,
    disabled: a
  } = e, c = {
    root: ["root", s && i && "labelIcon", `textColor${oe(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return pe(c, r$, t);
}, s$ = W(uo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${oe(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Gn.icon}`]: t.icon
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
      [`& > .${Gn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Gn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Gn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Gn.icon}`]: {
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
      [`&.${Gn.selected}`]: {
        opacity: 1
      },
      [`&.${Gn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Gn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Gn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Gn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Gn.disabled}`]: {
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
}))), ra = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTab"
  }), {
    className: o,
    disabled: s = !1,
    disableFocusRipple: i = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: l,
    icon: a,
    iconPosition: c = "top",
    // eslint-disable-next-line react/prop-types
    indicator: f,
    label: m,
    onChange: x,
    onClick: d,
    onFocus: v,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: g = "inherit",
    value: h,
    wrapped: S = !1,
    ...w
  } = r, R = Xx(), k = Zx({
    id: h,
    ref: n,
    disabled: s,
    selected: b
  }), E = R.getItemMap().size === 0 && b ? 0 : k.tabIndex, L = {
    ...r,
    disabled: s,
    disableFocusRipple: i,
    selected: b,
    icon: !!a,
    iconPosition: c,
    label: !!m,
    fullWidth: l,
    textColor: g,
    wrapped: S
  }, A = o$(L), P = a && m && /* @__PURE__ */ p.isValidElement(a) ? /* @__PURE__ */ p.cloneElement(a, {
    className: te(A.icon, a.props.className)
  }) : a, y = (I) => {
    !b && x && x(I, h), d && d(I);
  }, M = (I) => {
    C && !b && x && x(I, h), v && v(I);
  };
  return /* @__PURE__ */ u.jsxs(s$, {
    internalNativeButton: !0,
    focusRipple: !i,
    className: te(A.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: s,
    onClick: y,
    onFocus: M,
    tabIndex: E,
    ownerState: L,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [P, m]
    }) : /* @__PURE__ */ u.jsxs(p.Fragment, {
      children: [m, P]
    }), f]
  });
}), p1 = /* @__PURE__ */ p.createContext();
function i$(e) {
  return fe("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const l$ = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return pe({
    root: ["root", n && "stickyHeader"]
  }, i$, t);
}, a$ = W("table", {
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
}))), Qg = "table", sd = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: s = Qg,
    padding: i = "normal",
    size: l = "medium",
    stickyHeader: a = !1,
    ...c
  } = r, f = {
    ...r,
    component: s,
    padding: i,
    size: l,
    stickyHeader: a
  }, m = l$(f), x = p.useMemo(() => ({
    padding: i,
    size: l,
    stickyHeader: a
  }), [i, l, a]);
  return /* @__PURE__ */ u.jsx(p1.Provider, {
    value: x,
    children: /* @__PURE__ */ u.jsx(a$, {
      as: s,
      role: s === Qg ? null : "table",
      ref: n,
      className: te(m.root, o),
      ownerState: f,
      ...c
    })
  });
}), vu = /* @__PURE__ */ p.createContext();
function c$(e) {
  return fe("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const u$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, c$, t);
}, d$ = W("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), f$ = {
  variant: "body"
}, Xg = "tbody", id = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: s = Xg,
    ...i
  } = r, l = {
    ...r,
    component: s
  }, a = u$(l);
  return /* @__PURE__ */ u.jsx(vu.Provider, {
    value: f$,
    children: /* @__PURE__ */ u.jsx(d$, {
      className: te(a.root, o),
      as: s,
      ref: n,
      role: s === Xg ? null : "rowgroup",
      ownerState: l,
      ...i
    })
  });
});
function p$(e) {
  return fe("MuiTableCell", e);
}
const m$ = ce("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), h$ = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: s,
    stickyHeader: i
  } = e, l = {
    root: ["root", n, i && "stickyHeader", r !== "inherit" && `align${oe(r)}`, o !== "normal" && `padding${oe(o)}`, `size${oe(s)}`]
  };
  return pe(l, p$, t);
}, g$ = W("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${oe(n.size)}`], n.padding !== "normal" && t[`padding${oe(n.padding)}`], n.align !== "inherit" && t[`align${oe(n.align)}`], n.stickyHeader && t.stickyHeader];
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
      [`&.${m$.paddingCheckbox}`]: {
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
}))), ct = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableCell"
  }), {
    align: o = "inherit",
    className: s,
    component: i,
    padding: l,
    scope: a,
    size: c,
    sortDirection: f,
    variant: m,
    ...x
  } = r, d = p.useContext(p1), v = p.useContext(vu), b = v && v.variant === "head";
  let C;
  i ? C = i : C = b ? "th" : "td";
  let g = a;
  C === "td" ? g = void 0 : !g && b && (g = "col");
  const h = m || v && v.variant, S = {
    ...r,
    align: o,
    component: C,
    padding: l || (d && d.padding ? d.padding : "normal"),
    size: c || (d && d.size ? d.size : "medium"),
    sortDirection: f,
    stickyHeader: h === "head" && d && d.stickyHeader,
    variant: h
  }, w = h$(S);
  let R = null;
  return f && (R = f === "asc" ? "ascending" : "descending"), /* @__PURE__ */ u.jsx(g$, {
    as: C,
    ref: n,
    className: te(w.root, s),
    "aria-sort": R,
    scope: g,
    ownerState: S,
    ...x
  });
});
function y$(e) {
  return fe("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const v$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, y$, t);
}, x$ = W("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), ld = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: s = "div",
    ...i
  } = r, l = {
    ...r,
    component: s
  }, a = v$(l);
  return /* @__PURE__ */ u.jsx(x$, {
    ref: n,
    as: s,
    className: te(a.root, o),
    ownerState: l,
    ...i
  });
});
function S$(e) {
  return fe("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const b$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, S$, t);
}, w$ = W("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), C$ = {
  variant: "head"
}, qg = "thead", ad = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: s = qg,
    ...i
  } = r, l = {
    ...r,
    component: s
  }, a = b$(l);
  return /* @__PURE__ */ u.jsx(vu.Provider, {
    value: C$,
    children: /* @__PURE__ */ u.jsx(w$, {
      as: s,
      className: te(a.root, o),
      ref: n,
      role: s === qg ? null : "rowgroup",
      ownerState: l,
      ...i
    })
  });
});
function k$(e) {
  return fe("MuiToolbar", e);
}
ce("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const E$ = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: r
  } = e;
  return pe({
    root: ["root", !n && "gutters", r]
  }, k$, t);
}, T$ = W("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(ye(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), R$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: s = "div",
    disableGutters: i = !1,
    variant: l = "regular",
    ...a
  } = r, c = {
    ...r,
    component: s,
    disableGutters: i,
    variant: l
  }, f = E$(c);
  return /* @__PURE__ */ u.jsx(T$, {
    as: s,
    className: te(f.root, o),
    ref: n,
    ownerState: c,
    ...a
  });
}), m1 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), h1 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function P$(e) {
  return fe("MuiTablePaginationActions", e);
}
ce("MuiTablePaginationActions", ["root"]);
const I$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, P$, t);
}, M$ = W("div", {
  name: "MuiTablePaginationActions",
  slot: "Root"
})({}), $$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTablePaginationActions"
  }), {
    className: o,
    count: s,
    disabled: i = !1,
    getItemAriaLabel: l,
    onPageChange: a,
    page: c,
    rowsPerPage: f,
    showFirstButton: m,
    showLastButton: x,
    slots: d = {},
    slotProps: v = {},
    ...b
  } = r, C = vl(), h = I$(r), S = (q) => {
    a(q, 0);
  }, w = (q) => {
    a(q, c - 1);
  }, R = (q) => {
    a(q, c + 1);
  }, k = (q) => {
    a(q, Math.max(0, Math.ceil(s / f) - 1));
  }, T = d.firstButton ?? Bt, E = d.lastButton ?? Bt, L = d.nextButton ?? Bt, A = d.previousButton ?? Bt, P = d.firstButtonIcon ?? SM, y = d.lastButtonIcon ?? bM, M = d.nextButtonIcon ?? h1, I = d.previousButtonIcon ?? m1, j = C ? E : T, O = C ? L : A, N = C ? A : L, $ = C ? T : E, B = C ? v.lastButton : v.firstButton, D = C ? v.nextButton : v.previousButton, H = C ? v.previousButton : v.nextButton, _ = C ? v.firstButton : v.lastButton;
  return /* @__PURE__ */ u.jsxs(M$, {
    ref: n,
    className: te(h.root, o),
    ...b,
    children: [m && /* @__PURE__ */ u.jsx(j, {
      onClick: S,
      disabled: i || c === 0,
      "aria-label": l("first", c),
      title: l("first", c),
      ...B,
      children: C ? /* @__PURE__ */ u.jsx(y, {
        ...v.lastButtonIcon
      }) : /* @__PURE__ */ u.jsx(P, {
        ...v.firstButtonIcon
      })
    }), /* @__PURE__ */ u.jsx(O, {
      onClick: w,
      disabled: i || c === 0,
      color: "inherit",
      "aria-label": l("previous", c),
      title: l("previous", c),
      ...D,
      children: C ? /* @__PURE__ */ u.jsx(M, {
        ...v.nextButtonIcon
      }) : /* @__PURE__ */ u.jsx(I, {
        ...v.previousButtonIcon
      })
    }), /* @__PURE__ */ u.jsx(N, {
      onClick: R,
      disabled: i || (s !== -1 ? c >= Math.ceil(s / f) - 1 : !1),
      color: "inherit",
      "aria-label": l("next", c),
      title: l("next", c),
      ...H,
      children: C ? /* @__PURE__ */ u.jsx(I, {
        ...v.previousButtonIcon
      }) : /* @__PURE__ */ u.jsx(M, {
        ...v.nextButtonIcon
      })
    }), x && /* @__PURE__ */ u.jsx($, {
      onClick: k,
      disabled: i || c >= Math.ceil(s / f) - 1,
      "aria-label": l("last", c),
      title: l("last", c),
      ..._,
      children: C ? /* @__PURE__ */ u.jsx(P, {
        ...v.firstButtonIcon
      }) : /* @__PURE__ */ u.jsx(y, {
        ...v.lastButtonIcon
      })
    })]
  });
});
function j$(e) {
  return fe("MuiTablePagination", e);
}
const js = ce("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]), L$ = (e) => {
  let t;
  if (typeof Intl < "u" && Intl.NumberFormat)
    try {
      t = new Intl.NumberFormat(e);
    } catch {
    }
  return (n) => Number.isFinite(n) && t ? t.format(n) : String(n);
};
var Zg;
const oa = L$("en-US"), O$ = W(ct, {
  name: "MuiTablePagination",
  slot: "Root"
})(ye(({
  theme: e
}) => ({
  overflow: "auto",
  color: (e.vars || e).palette.text.primary,
  fontSize: e.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
}))), A$ = W(R$, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => ({
    [`& .${js.actions}`]: t.actions,
    ...t.toolbar
  })
})(ye(({
  theme: e
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [e.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${js.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
}))), N$ = W("div", {
  name: "MuiTablePagination",
  slot: "Spacer"
})({
  flex: "1 1 100%"
}), z$ = W("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel"
})(ye(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
}))), B$ = W(yu, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => ({
    [`& .${js.selectIcon}`]: t.selectIcon,
    [`& .${js.select}`]: t.select,
    ...t.input,
    ...t.selectRoot
  })
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${js.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), F$ = W(pu)(ye(({
  theme: e
}) => ({
  [`& .${js.select}:focus`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  }
}))), D$ = W(cs, {
  name: "MuiTablePagination",
  slot: "MenuItem"
})({}), _$ = W("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows"
})(ye(({
  theme: e
}) => ({
  ...e.typography.body2,
  flexShrink: 0
})));
function W$({
  from: e,
  to: t,
  count: n
}) {
  return `${oa(e)}–${oa(t)} of ${n !== -1 ? oa(n) : `more than ${oa(t)}`}`;
}
function U$(e) {
  return `Go to ${e} page`;
}
const H$ = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  }, j$, t);
}, V$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: o = $$,
    colSpan: s,
    component: i = ct,
    count: l,
    disabled: a = !1,
    getItemAriaLabel: c = U$,
    labelDisplayedRows: f = W$,
    labelRowsPerPage: m = "Rows per page:",
    onPageChange: x,
    onRowsPerPageChange: d,
    page: v,
    rowsPerPage: b,
    rowsPerPageOptions: C = [10, 25, 50, 100],
    showFirstButton: g = !1,
    showLastButton: h = !1,
    slotProps: S = {},
    slots: w = {},
    ...R
  } = r, k = r, T = H$(k), E = typeof (S == null ? void 0 : S.select) == "function" ? S.select(k) : (S == null ? void 0 : S.select) ?? {}, L = E.native ? "option" : D$;
  let A;
  (i === ct || i === "td") && (A = s || 1e3);
  const P = nr(E.id), y = nr(E.labelId), M = () => l === -1 ? (v + 1) * b : b === -1 ? l : Math.min(l, (v + 1) * b), I = {
    slots: w,
    slotProps: S
  }, [j, O] = de("root", {
    ref: n,
    className: T.root,
    elementType: O$,
    externalForwardedProps: {
      ...I,
      component: i,
      ...R
    },
    ownerState: k,
    additionalProps: {
      colSpan: A
    }
  }), [N, $] = de("toolbar", {
    className: T.toolbar,
    elementType: A$,
    externalForwardedProps: I,
    ownerState: k
  }), [B, D] = de("spacer", {
    className: T.spacer,
    elementType: N$,
    externalForwardedProps: I,
    ownerState: k
  }), [H, _] = de("selectLabel", {
    className: T.selectLabel,
    elementType: z$,
    externalForwardedProps: I,
    ownerState: k,
    additionalProps: {
      id: y
    }
  }), [q, V] = de("select", {
    className: T.select,
    elementType: B$,
    externalForwardedProps: I,
    ownerState: k
  }), [K, G] = de("menuItem", {
    className: T.menuItem,
    elementType: L,
    externalForwardedProps: I,
    ownerState: k
  }), [Q, U] = de("displayedRows", {
    className: T.displayedRows,
    elementType: _$,
    externalForwardedProps: I,
    ownerState: k
  });
  return /* @__PURE__ */ u.jsx(j, {
    ...O,
    children: /* @__PURE__ */ u.jsxs(N, {
      ...$,
      children: [/* @__PURE__ */ u.jsx(B, {
        ...D
      }), C.length > 1 && /* @__PURE__ */ u.jsx(H, {
        ..._,
        children: m
      }), C.length > 1 && /* @__PURE__ */ u.jsx(q, {
        variant: "standard",
        ...!E.variant && {
          input: Zg || (Zg = /* @__PURE__ */ u.jsx(F$, {}))
        },
        value: b,
        onChange: d,
        id: P,
        labelId: y,
        ...E,
        classes: {
          ...E.classes,
          // TODO v5 remove `classes.input`
          root: te(T.input, T.selectRoot, (E.classes || {}).root),
          select: te(T.select, (E.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: te(T.selectIcon, (E.classes || {}).icon)
        },
        disabled: a,
        ...V,
        children: C.map((ee) => /* @__PURE__ */ p.createElement(K, {
          ...G,
          key: ee.label ? ee.label : ee,
          value: ee.value ? ee.value : ee
        }, ee.label ? ee.label : ee))
      }), /* @__PURE__ */ u.jsx(Q, {
        ...U,
        children: f({
          from: l === 0 ? 0 : v * b + 1,
          to: M(),
          count: l === -1 ? -1 : l,
          page: v
        })
      }), /* @__PURE__ */ u.jsx(o, {
        className: T.actions,
        count: l,
        onPageChange: x,
        page: v,
        rowsPerPage: b,
        showFirstButton: g,
        showLastButton: h,
        slotProps: S.actions,
        slots: w.actions,
        getItemAriaLabel: c,
        disabled: a
      })]
    })
  });
});
function K$(e) {
  return fe("MuiTableRow", e);
}
const Jg = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), G$ = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: s
  } = e;
  return pe({
    root: ["root", n && "selected", r && "hover", o && "head", s && "footer"]
  }, K$, t);
}, Y$ = W("tr", {
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
  [`&.${Jg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Jg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), ey = "tr", wr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: s = ey,
    hover: i = !1,
    selected: l = !1,
    ...a
  } = r, c = p.useContext(vu), f = {
    ...r,
    component: s,
    hover: i,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, m = G$(f);
  return /* @__PURE__ */ u.jsx(Y$, {
    as: s,
    ref: n,
    className: te(m.root, o),
    role: s === ey ? null : "row",
    ownerState: f,
    ...a
  });
});
function Q$(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function X$(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: s = Q$,
    duration: i = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const f = () => {
    c = !0;
  }, m = (x) => {
    if (c) {
      o(new Error("Animation cancelled"));
      return;
    }
    l === null && (l = x);
    const d = Math.min(1, (x - l) / i);
    if (t[e] = s(d) * (n - a) + a, d >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(m);
  };
  return a === n ? (o(new Error("Element already at target position")), f) : (requestAnimationFrame(m), f);
}
const q$ = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function Z$(e) {
  const {
    onChange: t,
    ...n
  } = e, r = p.useRef(), o = p.useRef(null), s = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return mt(() => {
    const i = au(() => {
      const a = r.current;
      s(), a !== r.current && t(r.current);
    }), l = rr(o.current);
    return l.addEventListener("resize", i), () => {
      i.clear(), l.removeEventListener("resize", i);
    };
  }, [t]), p.useEffect(() => {
    s(), t(r.current);
  }, [t]), /* @__PURE__ */ u.jsx("div", {
    style: q$,
    ...n,
    ref: o
  });
}
function J$(e) {
  return fe("MuiTabScrollButton", e);
}
const e5 = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), t5 = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return pe({
    root: ["root", n, r && "disabled"]
  }, J$, t);
}, n5 = W(uo, {
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
  [`&.${e5.disabled}`]: {
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
}), r5 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: s = {},
    slotProps: i = {},
    direction: l,
    orientation: a,
    disabled: c,
    ...f
  } = r, {
    nativeButton: m,
    ...x
  } = f, d = vl(), v = {
    isRtl: d,
    ...r
  }, b = t5(v), C = s.StartScrollButtonIcon ?? m1, g = s.EndScrollButtonIcon ?? h1, h = Ks({
    elementType: C,
    externalSlotProps: i.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), S = Ks({
    elementType: g,
    externalSlotProps: i.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ u.jsx(n5, {
    component: "div",
    className: te(b.root, o),
    ref: n,
    role: null,
    ownerState: v,
    tabIndex: null,
    ...x,
    style: {
      ...x.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${d ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ u.jsx(C, {
      ...h
    }) : /* @__PURE__ */ u.jsx(g, {
      ...S
    })
  });
});
function o5(e) {
  return fe("MuiTabs", e);
}
const cd = ce("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), s5 = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: r,
    scrollableX: o,
    scrollableY: s,
    centered: i,
    scrollButtonsHideMobile: l,
    classes: a
  } = e;
  return pe({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", s && "scrollableY"],
    list: ["list", t && "vertical", i && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", l && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, o5, a);
}, i5 = W("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${cd.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${cd.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
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
      [`& .${cd.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), l5 = W("div", {
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
}), a5 = W("div", {
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
}), c5 = W("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(ye(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...bt(e),
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
}))), u5 = W(Z$)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), ty = {}, d5 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTabs"
  }), o = ho(), s = vl(), i = mu(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: f = !1,
    children: m,
    className: x,
    component: d = "div",
    allowScrollButtonsMobile: v = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: g = "horizontal",
    scrollButtons: h = "auto",
    selectionFollowsFocus: S,
    slots: w = {},
    slotProps: R = {},
    textColor: k = "primary",
    value: T,
    variant: E = "standard",
    visibleScrollbar: L = !1,
    ...A
  } = r, P = E === "scrollable", y = g === "vertical", M = y ? "scrollTop" : "scrollLeft", I = y ? "top" : "left", j = y ? "bottom" : "right", O = y ? "clientHeight" : "clientWidth", N = y ? "height" : "width", $ = {
    ...r,
    component: d,
    allowScrollButtonsMobile: v,
    indicatorColor: b,
    orientation: g,
    vertical: y,
    scrollButtons: h,
    textColor: k,
    variant: E,
    visibleScrollbar: L,
    fixed: !P,
    hideScrollbar: P && !L,
    scrollableX: P && !y,
    scrollableY: P && y,
    centered: f && !P,
    scrollButtonsHideMobile: !v
  }, B = s5($), D = Ks({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: R.startScrollButtonIcon,
    ownerState: $
  }), H = Ks({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: R.endScrollButtonIcon,
    ownerState: $
  }), [_, q] = p.useState(!1), [V, K] = p.useState(ty), [G, Q] = p.useState(!1), [U, ee] = p.useState(!1), [ae, Te] = p.useState(!1), we = T === !1 ? null : T, [ge, ue] = p.useState(!1), [je, _e] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ie = /* @__PURE__ */ new Map(), Me = p.useRef(null), se = p.useRef(null), Le = {
    slots: w,
    slotProps: R
  }, Ae = () => {
    const ne = Me.current;
    let J;
    if (ne) {
      const Se = ne.getBoundingClientRect();
      J = {
        clientWidth: ne.clientWidth,
        scrollLeft: ne.scrollLeft,
        scrollTop: ne.scrollTop,
        scrollWidth: ne.scrollWidth,
        top: Se.top,
        bottom: Se.bottom,
        left: Se.left,
        right: Se.right
      };
    }
    let he;
    if (ne && T !== !1) {
      const Se = se.current.children;
      if (Se.length > 0) {
        const qe = Se[Ie.get(T)];
        he = qe ? qe.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: J,
      tabMeta: he
    };
  }, We = tt(() => {
    const {
      tabsMeta: ne,
      tabMeta: J
    } = Ae();
    let he = 0, Se;
    y ? (Se = "top", J && ne && (he = J.top - ne.top + ne.scrollTop)) : (Se = s ? "right" : "left", J && ne && (he = (s ? -1 : 1) * (J[Se] - ne[Se] + ne.scrollLeft)));
    const qe = {
      [Se]: he,
      // May be wrong until the font is loaded.
      [N]: J ? J[N] : 0
    };
    if (typeof V[Se] != "number" || typeof V[N] != "number")
      K(qe);
    else {
      const Wn = Math.abs(V[Se] - qe[Se]), Rn = Math.abs(V[N] - qe[N]);
      (Wn >= 1 || Rn >= 1) && K(qe);
    }
  }), ke = (ne, {
    animation: J = !0
  } = {}) => {
    J && !i.shouldReduceMotion ? X$(M, Me.current, ne, {
      duration: o.transitions.duration.standard
    }) : Me.current[M] = ne;
  }, $e = (ne) => {
    let J = Me.current[M];
    y ? J += ne : J += ne * (s ? -1 : 1), ke(J);
  }, st = () => {
    const ne = Me.current[O];
    let J = 0;
    const he = Array.from(se.current.children);
    for (let Se = 0; Se < he.length; Se += 1) {
      const qe = he[Se];
      if (J + qe[O] > ne) {
        Se === 0 && (J = ne);
        break;
      }
      J += qe[O];
    }
    return J;
  }, Ne = () => {
    $e(-1 * st());
  }, be = () => {
    $e(st());
  }, [Ue, {
    onChange: xt,
    ...ie
  }] = de("scrollbar", {
    className: te(B.scrollableX, B.hideScrollbar),
    elementType: u5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Le,
    ownerState: $
  }), xe = p.useCallback((ne) => {
    xt == null || xt(ne), _e({
      overflow: null,
      scrollbarWidth: ne
    });
  }, [xt]), [Be, it] = de("scrollButtons", {
    className: B.scrollButtons,
    elementType: r5,
    externalForwardedProps: Le,
    ownerState: $,
    additionalProps: {
      orientation: g,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: D,
        endScrollButtonIcon: H
      }
    }
  }), Ce = () => {
    const ne = {};
    ne.scrollbarSizeListener = P ? /* @__PURE__ */ u.jsx(Ue, {
      ...ie,
      onChange: xe
    }) : null;
    const he = P && (h === "auto" && (G || U) || h === !0);
    return ne.scrollButtonStart = he ? /* @__PURE__ */ u.jsx(Be, {
      direction: s ? "right" : "left",
      onClick: Ne,
      disabled: !G,
      ...it
    }) : null, ne.scrollButtonEnd = he ? /* @__PURE__ */ u.jsx(Be, {
      direction: s ? "left" : "right",
      onClick: be,
      disabled: !U,
      ...it
    }) : null, ne;
  }, or = tt((ne) => {
    const {
      tabsMeta: J,
      tabMeta: he
    } = Ae();
    if (!(!he || !J)) {
      if (he[I] < J[I]) {
        const Se = J[M] + (he[I] - J[I]);
        ke(Se, {
          animation: ne
        });
      } else if (he[j] > J[j]) {
        const Se = J[M] + (he[j] - J[j]);
        ke(Se, {
          animation: ne
        });
      }
    }
  }), rn = tt(() => {
    P && h !== !1 && Te(!ae);
  });
  p.useEffect(() => {
    const ne = au(() => {
      Me.current && We();
    });
    let J;
    const he = (Wn) => {
      Wn.forEach((Rn) => {
        Rn.removedNodes.forEach((Un) => {
          J == null || J.unobserve(Un);
        }), Rn.addedNodes.forEach((Un) => {
          J == null || J.observe(Un);
        });
      }), ne(), rn();
    }, Se = rr(Me.current);
    Se.addEventListener("resize", ne);
    let qe;
    return typeof ResizeObserver < "u" && (J = new ResizeObserver(ne), Array.from(se.current.children).forEach((Wn) => {
      J.observe(Wn);
    })), typeof MutationObserver < "u" && (qe = new MutationObserver(he), qe.observe(se.current, {
      childList: !0
    })), () => {
      ne.clear(), Se.removeEventListener("resize", ne), qe == null || qe.disconnect(), J == null || J.disconnect();
    };
  }, [We, rn]), p.useEffect(() => {
    const ne = Array.from(se.current.children), J = ne.length;
    if (typeof IntersectionObserver < "u" && J > 0 && P && h !== !1) {
      const he = ne[0], Se = ne[J - 1], qe = {
        root: Me.current,
        threshold: 0.99
      }, Wn = (Dr) => {
        Q(!Dr[0].isIntersecting);
      }, Rn = new IntersectionObserver(Wn, qe);
      Rn.observe(he);
      const Un = (Dr) => {
        ee(!Dr[0].isIntersecting);
      }, xo = new IntersectionObserver(Un, qe);
      return xo.observe(Se), () => {
        Rn.disconnect(), xo.disconnect();
      };
    }
  }, [P, h, ae, m == null ? void 0 : m.length]), p.useEffect(() => {
    q(!0);
  }, []), p.useEffect(() => {
    We();
  }), p.useEffect(() => {
    or(ty !== V);
  }, [or, V]), p.useImperativeHandle(c, () => ({
    updateIndicator: We,
    updateScrollButtons: rn
  }), [We, rn]);
  const [yo, Nr] = de("indicator", {
    className: B.indicator,
    elementType: c5,
    externalForwardedProps: Le,
    ownerState: $,
    additionalProps: {
      style: V
    }
  }), ve = /* @__PURE__ */ u.jsx(yo, {
    ...Nr
  }), Xe = qx({
    activeItemId: ge ? void 0 : we,
    orientation: g,
    isRtl: s
  }), Ht = Xe.getContainerProps(), on = p.Children.toArray(m).filter(p.isValidElement).map((ne, J) => {
    const he = ne.props.value === void 0 ? J : ne.props.value;
    return Ie.set(he, J), {
      child: ne,
      index: J,
      childValue: he
    };
  }).map(({
    child: ne,
    childValue: J
  }) => {
    const he = J === T;
    return /* @__PURE__ */ p.cloneElement(ne, {
      fullWidth: E === "fullWidth",
      indicator: he && !_ && ve,
      selected: he,
      selectionFollowsFocus: S,
      onChange: C,
      textColor: k,
      value: J
    });
  }), vo = Ce(), [nt, zr] = de("root", {
    ref: n,
    className: te(B.root, x),
    elementType: i5,
    externalForwardedProps: {
      ...Le,
      ...A,
      component: d
    },
    ownerState: $
  }), [dt, Br] = de("scroller", {
    ref: Me,
    className: B.scroller,
    elementType: l5,
    externalForwardedProps: Le,
    ownerState: $,
    additionalProps: {
      style: {
        overflow: je.overflow,
        [y ? `margin${s ? "Left" : "Right"}` : "marginBottom"]: L ? void 0 : -je.scrollbarWidth
      }
    }
  }), Xt = gt(Ht.ref, se), Jo = (ne) => {
    const J = se.current, he = fr(vt(J));
    (he == null ? void 0 : he.getAttribute("role")) === "tab" && Ht.onKeyDown(ne);
  }, [Ct, Fr] = de("list", {
    ref: Xt,
    className: B.list,
    elementType: a5,
    externalForwardedProps: Le,
    ownerState: $,
    getSlotProps: (ne) => ({
      ...ne,
      onBlur: (J) => {
        var he;
        Fo(J.currentTarget, J.relatedTarget) || ue(!1), (he = ne.onBlur) == null || he.call(ne, J);
      },
      onKeyDown: (J) => {
        var he;
        Jo(J), (he = ne.onKeyDown) == null || he.call(ne, J);
      },
      onFocus: (J) => {
        var he;
        ue(!0), Ht.onFocus(J), (he = ne.onFocus) == null || he.call(ne, J);
      }
    })
  });
  return /* @__PURE__ */ u.jsxs(nt, {
    ...zr,
    children: [vo.scrollButtonStart, vo.scrollbarSizeListener, /* @__PURE__ */ u.jsxs(dt, {
      ...Br,
      children: [/* @__PURE__ */ u.jsx(Ct, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Fr,
        children: /* @__PURE__ */ u.jsx(im.Provider, {
          value: Xe,
          children: on
        })
      }), _ && ve]
    }), vo.scrollButtonEnd]
  });
});
function f5(e) {
  return fe("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const p5 = {
  standard: sm,
  filled: om,
  outlined: lm
}, m5 = (e) => {
  const {
    classes: t
  } = e;
  return pe({
    root: ["root"]
  }, f5, t);
}, h5 = W(Ef, {
  name: "MuiTextField",
  slot: "Root"
})({}), Yn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = me({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: s = !1,
    children: i,
    className: l,
    color: a = "primary",
    defaultValue: c,
    disabled: f = !1,
    error: m = !1,
    fullWidth: x = !1,
    helperText: d,
    id: v,
    inputRef: b,
    label: C,
    maxRows: g,
    minRows: h,
    multiline: S = !1,
    name: w,
    onBlur: R,
    onChange: k,
    onFocus: T,
    placeholder: E,
    required: L = !1,
    rows: A,
    select: P = !1,
    slots: y = {},
    slotProps: M = {},
    type: I,
    value: j,
    variant: O = "outlined",
    ...N
  } = r, $ = {
    ...r,
    autoFocus: s,
    color: a,
    disabled: f,
    error: m,
    fullWidth: x,
    multiline: S,
    required: L,
    select: P,
    variant: O
  }, B = m5($), D = nr(v), H = d && D ? `${D}-helper-text` : void 0, _ = C && D ? `${D}-label` : void 0, q = p5[O], V = {
    slots: y,
    slotProps: M
  }, [K, G] = de("select", {
    elementType: yu,
    externalForwardedProps: V,
    ownerState: $
  }), Q = P && G.native, U = {}, ee = V.slotProps.inputLabel;
  O === "outlined" && (ee && typeof ee.shrink < "u" && (U.notched = ee.shrink), U.label = C), P && (Q || (U.id = void 0), U["aria-describedby"] = void 0);
  const [ae, Te] = de("root", {
    elementType: h5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...V,
      ...N
    },
    ownerState: $,
    className: te(B.root, l),
    ref: n,
    additionalProps: {
      disabled: f,
      error: m,
      fullWidth: x,
      required: L,
      color: a,
      variant: O
    }
  }), [we, ge] = de("input", {
    elementType: q,
    externalForwardedProps: V,
    additionalProps: U,
    ownerState: $
  }), [ue, je] = de("inputLabel", {
    elementType: PI,
    externalForwardedProps: V,
    ownerState: $
  }), [_e, Ie] = de("htmlInput", {
    elementType: "input",
    externalForwardedProps: V,
    ownerState: $
  }), [Me, se] = de("formHelperText", {
    elementType: uI,
    externalForwardedProps: V,
    ownerState: $
  }), Le = /* @__PURE__ */ u.jsx(we, {
    "aria-describedby": H,
    autoComplete: o,
    autoFocus: s,
    defaultValue: c,
    fullWidth: x,
    multiline: S,
    name: w,
    rows: A,
    maxRows: g,
    minRows: h,
    type: I,
    value: j,
    id: D,
    inputRef: b,
    onBlur: R,
    onChange: k,
    onFocus: T,
    placeholder: E,
    inputProps: Ie,
    slots: {
      input: y.htmlInput ? _e : void 0
    },
    ...ge
  });
  return /* @__PURE__ */ u.jsxs(ae, {
    ...Te,
    children: [C != null && C !== "" && /* @__PURE__ */ u.jsx(ue, {
      htmlFor: P && !Q ? void 0 : D,
      id: _,
      ...P && !Q && {
        component: "div"
      },
      ...je,
      children: C
    }), P ? /* @__PURE__ */ u.jsx(K, {
      "aria-describedby": H,
      id: D,
      labelId: _,
      value: j,
      input: Le,
      ...G,
      children: i
    }) : Le, d && /* @__PURE__ */ u.jsx(Me, {
      id: H,
      ...se,
      children: d
    })]
  });
}), ny = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), ry = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
})), ud = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), g5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), oy = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M8 5v14l11-7z"
})), sy = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), iy = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), y5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8m-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34C4.9 8.79 4 10.79 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91"
})), v5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M6 6h12v12H6z"
})), x5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6z"
})), S5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M19 5v14H5V5zm1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"
})), b5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
})), w5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2m0 14H4V8h16zm-2-1h-6v-2h6zM7.5 17l-1.41-1.41L8.67 13l-2.59-2.59L7.5 9l4 4z"
})), C5 = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2M3 19c0 1.1.9 2 2 2h3V10H3z"
})), ly = Qe(/* @__PURE__ */ u.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), Rt = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', as = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function dd({ children: e, sx: t }) {
  return /* @__PURE__ */ u.jsx(
    Oe,
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
function Hr(e, t) {
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
function k5({ lines: e, running: t }) {
  const n = p.useRef(null), r = p.useRef(null), o = p.useRef(!0);
  return p.useEffect(() => {
    const s = r.current;
    if (!s) return;
    const i = () => {
      o.current = s.scrollHeight - s.scrollTop - s.clientHeight < 40;
    };
    return s.addEventListener("scroll", i), () => s.removeEventListener("scroll", i);
  }, []), p.useEffect(() => {
    var s;
    o.current && ((s = n.current) == null || s.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ u.jsxs(
    sn,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: as.bg,
        color: as.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: Rt,
        fontSize: 12,
        lineHeight: 1.55,
        // Preserve the script's own spacing: bash output is aligned with spaces,
        // and collapsing them turns readable output into a wall of text.
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((s, i) => /* @__PURE__ */ u.jsx(
          jt,
          {
            sx: {
              color: s.stream === "stderr" ? as.err : s.stream === "meta" ? as.dim : as.fg
            },
            children: s.text || " "
          },
          i
        )),
        t && /* @__PURE__ */ u.jsx(jt, { sx: { color: as.dim }, children: "▍running…" }),
        /* @__PURE__ */ u.jsx("div", { ref: n })
      ]
    }
  );
}
const Qn = [
  { key: "SELECT", label: "SELECT", desc: "Retrieve data from tables", category: "data" },
  { key: "INSERT", label: "INSERT", desc: "Insert new rows into tables", category: "data" },
  { key: "UPDATE", label: "UPDATE", desc: "Modify existing rows in tables", category: "data" },
  { key: "DELETE", label: "DELETE", desc: "Delete rows from tables", category: "data" },
  { key: "CREATE", label: "CREATE", desc: "Create new tables and databases", category: "structure" },
  { key: "DROP", label: "DROP", desc: "Drop databases, tables, and views", category: "structure" },
  { key: "ALTER", label: "ALTER", desc: "Alter existing table structures", category: "structure" },
  { key: "INDEX", label: "INDEX", desc: "Create and drop table indexes", category: "structure" },
  { key: "REFERENCES", label: "REFERENCES", desc: "Create foreign key constraints", category: "structure" },
  { key: "CREATE TEMPORARY TABLES", label: "CREATE TEMPORARY TABLES", desc: "Create temporary session tables", category: "structure" },
  { key: "LOCK TABLES", label: "LOCK TABLES", desc: "Lock tables for thread", category: "admin" },
  { key: "EXECUTE", label: "EXECUTE", desc: "Execute stored procedures & routines", category: "admin" },
  { key: "CREATE VIEW", label: "CREATE VIEW", desc: "Create new views", category: "structure" },
  { key: "SHOW VIEW", label: "SHOW VIEW", desc: "Inspect view definitions", category: "data" },
  { key: "CREATE ROUTINE", label: "CREATE ROUTINE", desc: "Create stored routines & functions", category: "structure" },
  { key: "ALTER ROUTINE", label: "ALTER ROUTINE", desc: "Modify/drop stored routines", category: "structure" },
  { key: "EVENT", label: "EVENT", desc: "Create and manage scheduled events", category: "admin" },
  { key: "TRIGGER", label: "TRIGGER", desc: "Create and manage table triggers", category: "structure" }
];
function E5({ ctx: e }) {
  const t = p.useMemo(() => lu(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ u.jsx(eE, { theme: t, children: /* @__PURE__ */ u.jsx(T5, { ctx: e }) });
}
function T5({ ctx: e }) {
  var um;
  const [t, n] = p.useState("databases"), [r, o] = p.useState(null), [s, i] = p.useState(!1), [l, a] = p.useState(!1), [c, f] = p.useState([]), [m, x] = p.useState([]), [d, v] = p.useState(""), [b, C] = p.useState(""), [g, h] = p.useState(""), [S, w] = p.useState([]), [R, k] = p.useState(!1), [T, E] = p.useState("SELECT 1 as test, 'HostPanel MySQL' as server;"), [L, A] = p.useState(!1), [P, y] = p.useState(null), [M, I] = p.useState(0), [j, O] = p.useState(25), [N, $] = p.useState(!1), [B, D] = p.useState(""), [H, _] = p.useState("utf8mb4"), [q, V] = p.useState(!1), [K, G] = p.useState(""), [Q, U] = p.useState(""), [ee, ae] = p.useState("%"), [Te, we] = p.useState(!1), [ge, ue] = p.useState(null), [je, _e] = p.useState(""), [Ie, Me] = p.useState(!1), [se, Le] = p.useState(null), [Ae, We] = p.useState(""), [ke, $e] = p.useState(Qn.map((z) => z.key)), [st, Ne] = p.useState(!1), [be, Ue] = p.useState(""), [xt, ie] = p.useState(""), [xe, Be] = p.useState(!1), [it, Ce] = p.useState(!1), [or, rn] = p.useState(!1), [yo, Nr] = p.useState(""), [ve] = p.useState(50), [Xe, Ht] = p.useState(!1), [wl, on] = p.useState(!1), [vo, nt] = p.useState([]), [zr, dt] = p.useState(!1), [Br, Xt] = p.useState(""), [Jo, Ct] = p.useState(null), Fr = p.useCallback(async () => {
    try {
      i(!0);
      const z = await e.api("/engine/status");
      if (z.ok) {
        const Z = await z.json();
        o(Z);
      }
    } catch {
    } finally {
      i(!1);
    }
  }, [e]), ne = p.useCallback(async () => {
    try {
      const z = await e.api("/databases");
      if (z.ok) {
        const Re = (await z.json()).databases || [];
        f(Re), Re.length > 0 && !g && h(Re[0].name);
      }
    } catch {
    }
  }, [e, g]), J = p.useCallback(async () => {
    try {
      const z = await e.api("/users");
      if (z.ok) {
        const Z = await z.json();
        x(Z.users || []);
      }
    } catch {
    }
  }, [e]), he = p.useCallback(async (z) => {
    if (z)
      try {
        k(!0);
        const Z = await e.api(`/databases/${encodeURIComponent(z)}/tables`);
        if (Z.ok) {
          const Re = await Z.json();
          w(Re.tables || []);
        }
      } catch {
        w([]);
      } finally {
        k(!1);
      }
  }, [e]);
  p.useEffect(() => {
    g && he(g);
  }, [g, he]);
  const Se = p.useCallback(() => {
    Fr(), ne(), J(), g && he(g);
  }, [Fr, ne, J, he, g]);
  p.useEffect(() => {
    Se();
  }, [Se]);
  const qe = async (z) => {
    const Z = z || T;
    if (!(!g || !Z.trim())) {
      A(!0), I(0);
      try {
        const hn = await (await e.api(`/databases/${encodeURIComponent(g)}/query`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: Z })
        })).json();
        y(hn), hn.ok || Ct(`Query Error: ${hn.error || "Execution failed"}`);
      } catch (Re) {
        y({ ok: !1, error: (Re == null ? void 0 : Re.message) || String(Re) }), Ct(`Network error executing query: ${Re == null ? void 0 : Re.message}`);
      } finally {
        A(!1);
      }
    }
  }, Wn = () => {
    if (!P || !P.columns || !P.rows) return;
    const z = P.columns.join(","), Z = P.rows.map((Rl) => Rl.map((xu) => `"${String(xu ?? "").replace(/"/g, '""')}"`).join(",")).join(`
`), Re = "data:text/csv;charset=utf-8," + encodeURIComponent(z + `
` + Z), hn = document.createElement("a");
    hn.setAttribute("href", Re), hn.setAttribute("download", `${g}_query_results.csv`), document.body.appendChild(hn), hn.click(), document.body.removeChild(hn);
  }, Rn = () => {
    if (!P || !P.columns || !P.rows) return;
    const z = P.rows.map((hn) => {
      const Rl = {};
      return P.columns.forEach((xu, g1) => {
        Rl[xu] = hn[g1];
      }), Rl;
    }), Z = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(z, null, 2)), Re = document.createElement("a");
    Re.setAttribute("href", Z), Re.setAttribute("download", `${g}_query_results.json`), document.body.appendChild(Re), Re.click(), document.body.removeChild(Re);
  }, Un = async (z) => {
    a(!0), Xt(`MySQL: ${z.toUpperCase()}`), nt([]), dt(!0), on(!0);
    try {
      for await (const Z of e.run(`/engine/${z}`, { method: "POST" }))
        nt((Re) => Hr(Re, Z));
    } catch (Z) {
      Ct(`Error: ${(Z == null ? void 0 : Z.message) || Z}`);
    } finally {
      dt(!1), a(!1), Se();
    }
  }, xo = async () => {
    if (B) {
      $(!1), Xt(`MySQL: Create Database '${B}'`), nt([]), dt(!0), on(!0);
      try {
        for await (const z of e.run("/databases", {
          method: "POST",
          body: { name: B, charset: H }
        }))
          nt((Z) => Hr(Z, z));
        D("");
      } catch (z) {
        Ct(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        dt(!1), ne();
      }
    }
  }, Dr = async (z) => {
    if (confirm(`Are you sure you want to permanently drop database '${z}'?`)) {
      Xt(`MySQL: Drop Database '${z}'`), nt([]), dt(!0), on(!0);
      try {
        for await (const Z of e.run(`/databases/${z}`, { method: "DELETE" }))
          nt((Re) => Hr(Re, Z));
      } catch (Z) {
        Ct(`Error: ${(Z == null ? void 0 : Z.message) || Z}`);
      } finally {
        dt(!1), ne();
      }
    }
  }, Cl = async () => {
    if (!(!K || !Q)) {
      V(!1), Xt(`MySQL: Create User '${K}'@'${ee}'`), nt([]), dt(!0), on(!0);
      try {
        for await (const z of e.run("/users", {
          method: "POST",
          body: { username: K, password: Q, host: ee }
        }))
          nt((Z) => Hr(Z, z));
        G(""), U("");
      } catch (z) {
        Ct(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        dt(!1), J();
      }
    }
  }, kl = async (z) => {
    if (confirm(`Drop user '${z.username}'@'${z.host}'?`)) {
      Xt(`MySQL: Drop User '${z.username}'`), nt([]), dt(!0), on(!0);
      try {
        for await (const Z of e.run(`/users/${z.username}?host=${encodeURIComponent(z.host)}`, {
          method: "DELETE"
        }))
          nt((Re) => Hr(Re, Z));
      } catch (Z) {
        Ct(`Error: ${(Z == null ? void 0 : Z.message) || Z}`);
      } finally {
        dt(!1), J();
      }
    }
  }, X = async () => {
    if (!(!ge || !je)) {
      we(!1), Xt(`MySQL: Reset Password for '${ge.username}'`), nt([]), dt(!0), on(!0);
      try {
        for await (const z of e.run(`/users/${ge.username}/password`, {
          method: "POST",
          body: { password: je, host: ge.host }
        }))
          nt((Z) => Hr(Z, z));
        _e("");
      } catch (z) {
        Ct(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        dt(!1);
      }
    }
  }, le = (z) => {
    $e(
      (Z) => Z.includes(z) ? Z.filter((Re) => Re !== z) : [...Z, z]
    );
  }, Ee = (z) => {
    $e(z ? Qn.map((Z) => Z.key) : []);
  }, Ze = (z) => {
    switch (z) {
      case "all":
        $e(Qn.map((Z) => Z.key));
        break;
      case "readonly":
        $e(["SELECT", "SHOW VIEW"]);
        break;
      case "readwrite":
        $e(["SELECT", "INSERT", "UPDATE", "DELETE"]);
        break;
      case "ddl":
        $e([
          "SELECT",
          "INSERT",
          "UPDATE",
          "DELETE",
          "CREATE",
          "DROP",
          "ALTER",
          "INDEX",
          "CREATE TEMPORARY TABLES",
          "LOCK TABLES",
          "CREATE VIEW",
          "SHOW VIEW",
          "CREATE ROUTINE",
          "ALTER ROUTINE",
          "EXECUTE",
          "EVENT",
          "TRIGGER"
        ]);
        break;
      case "clear":
        $e([]);
        break;
    }
  }, Nt = async () => {
    if (!se || !Ae) return;
    if (ke.length === 0) {
      Ct("Please select at least one privilege to grant, or use Revoke.");
      return;
    }
    const z = ke.length === Qn.length ? "ALL PRIVILEGES" : ke.join(", ");
    Me(!1), Xt(`MySQL: Grant Privileges on '${Ae}' to '${se.username}'`), nt([]), dt(!0), on(!0);
    try {
      for await (const Z of e.run("/grants", {
        method: "POST",
        body: { username: se.username, database: Ae, privileges: z, host: se.host }
      }))
        nt((Re) => Hr(Re, Z));
    } catch (Z) {
      Ct(`Error: ${(Z == null ? void 0 : Z.message) || Z}`);
    } finally {
      dt(!1);
    }
  }, es = async () => {
    if (!(!se || !Ae)) {
      Me(!1), Xt(`MySQL: Revoke Privileges on '${Ae}' from '${se.username}'`), nt([]), dt(!0), on(!0);
      try {
        for await (const z of e.run("/grants/revoke", {
          method: "POST",
          body: { username: se.username, database: Ae, host: se.host }
        }))
          nt((Z) => Hr(Z, z));
      } catch (z) {
        Ct(`Error: ${(z == null ? void 0 : z.message) || z}`);
      } finally {
        dt(!1);
      }
    }
  }, _r = async () => {
    Ne(!0), Be(!0);
    try {
      const z = await e.api("/engine/config");
      if (z.ok) {
        const Z = await z.json();
        ie(Z.path || "/opt/hostpanel/etc/mysql/my.cnf"), Ue(Z.content || "");
      }
    } catch {
    } finally {
      Be(!1);
    }
  }, qs = async () => {
    Ce(!0);
    try {
      const z = await e.api("/engine/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: be })
      });
      if (z.ok)
        Ct("Configuration saved successfully."), Ne(!1);
      else {
        const Z = await z.json();
        Ct(`Error saving config: ${(Z == null ? void 0 : Z.error) || "Unknown error"}`);
      }
    } catch (z) {
      Ct(`Failed to save config: ${z.message}`);
    } finally {
      Ce(!1);
    }
  }, El = async () => {
    rn(!0), Ht(!0);
    try {
      const z = await e.api(`/engine/logs?lines=${ve}`);
      if (z.ok) {
        const Z = await z.json();
        Nr(Z.content || "No logs available.");
      }
    } catch {
    } finally {
      Ht(!1);
    }
  }, ts = p.useMemo(() => d ? c.filter((z) => z.name.toLowerCase().includes(d.toLowerCase())) : c, [c, d]), cm = p.useMemo(() => b ? m.filter((z) => z.username.toLowerCase().includes(b.toLowerCase())) : m, [m, b]), Tl = (r == null ? void 0 : r.active) === !0 || (r == null ? void 0 : r.status) === "running";
  return /* @__PURE__ */ u.jsxs(jt, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ u.jsxs(
      at,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 1.5,
        sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
        children: [
          /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ u.jsx(
              Ur,
              {
                size: "small",
                label: Tl ? "RUNNING" : "STOPPED",
                color: Tl ? "success" : "error",
                sx: { fontWeight: 700, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ u.jsxs(Oe, { variant: "body2", sx: { color: "text.secondary" }, children: [
              (r == null ? void 0 : r.version) || "MariaDB 11.8",
              " • Port 3306 • Socket: /opt/hostpanel/run/mysql/mysqld.sock"
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ u.jsx(Kn, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Bt,
              {
                size: "small",
                onClick: Se,
                disabled: s || l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: s ? /* @__PURE__ */ u.jsx(Mo, { size: 16, color: "inherit" }) : /* @__PURE__ */ u.jsx(sy, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(Kn, { title: "MySQL Configuration", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Bt,
              {
                size: "small",
                onClick: _r,
                disabled: l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ u.jsx(x5, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(Kn, { title: "Engine Logs", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Bt,
              {
                size: "small",
                onClick: El,
                disabled: l,
                sx: { border: "1px solid", borderColor: "divider" },
                children: /* @__PURE__ */ u.jsx(S5, { sx: { fontSize: 18 } })
              }
            ) }) }),
            Tl ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(Kn, { title: "Restart MySQL", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
                Bt,
                {
                  size: "small",
                  color: "warning",
                  onClick: () => Un("restart"),
                  disabled: l,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ u.jsx(y5, { sx: { fontSize: 18 } })
                }
              ) }) }),
              /* @__PURE__ */ u.jsx(Kn, { title: "Stop MySQL", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
                Bt,
                {
                  size: "small",
                  color: "error",
                  onClick: () => Un("stop"),
                  disabled: l,
                  sx: { border: "1px solid", borderColor: "divider" },
                  children: /* @__PURE__ */ u.jsx(v5, { sx: { fontSize: 18 } })
                }
              ) }) })
            ] }) : /* @__PURE__ */ u.jsx(Kn, { title: "Start MySQL Engine", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Bt,
              {
                size: "small",
                color: "success",
                onClick: () => Un("start"),
                disabled: l,
                sx: { border: "1px solid", borderColor: "success.main", bgcolor: (z) => Bo(z.palette.success.main, 0.1) },
                children: /* @__PURE__ */ u.jsx(oy, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(
              Tt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(ny, {}),
                onClick: () => $(!0),
                sx: { ml: 1, whiteSpace: "nowrap" },
                children: "New Database"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Tt,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(ry, {}),
                onClick: () => V(!0),
                sx: { whiteSpace: "nowrap" },
                children: "New User"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(at, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
      /* @__PURE__ */ u.jsx(rd, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsxs(od, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(dd, { children: "DAEMON STATUS" }),
        /* @__PURE__ */ u.jsx(Oe, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: Tl ? "Online" : "Offline" }),
        /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { color: "text.secondary" }, children: [
          "PID: ",
          (r == null ? void 0 : r.pid) || 0,
          " • Uptime: ",
          (r == null ? void 0 : r.uptime) || "0s"
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx(rd, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsxs(od, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(dd, { children: "ENGINE VERSION" }),
        /* @__PURE__ */ u.jsx(Oe, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: (r == null ? void 0 : r.version) || "MariaDB 11.8" }),
        /* @__PURE__ */ u.jsx(Oe, { variant: "caption", sx: { color: "text.secondary" }, children: "Port: 3306 • Socket: /opt/hostpanel/run/mysql/mysqld.sock" })
      ] }) }),
      /* @__PURE__ */ u.jsx(rd, { variant: "outlined", sx: { flex: 1 }, children: /* @__PURE__ */ u.jsxs(od, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(dd, { children: "DATABASES & USERS" }),
        /* @__PURE__ */ u.jsxs(Oe, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          c.length,
          " DBs / ",
          m.length,
          " Users"
        ] }),
        /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { color: "text.secondary" }, children: [
          "Active Sessions: ",
          (r == null ? void 0 : r.connections) ?? 0
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsxs(sn, { children: [
      /* @__PURE__ */ u.jsxs(d5, { value: t, onChange: (z, Z) => n(Z), sx: { borderBottom: 1, borderColor: "divider", px: 2 }, children: [
        /* @__PURE__ */ u.jsx(ra, { value: "databases", label: `Databases (${c.length})` }),
        /* @__PURE__ */ u.jsx(ra, { value: "users", label: `Users & Privileges (${m.length})` }),
        /* @__PURE__ */ u.jsx(ra, { value: "query", label: "⚡ SQL Query Browser" }),
        /* @__PURE__ */ u.jsx(ra, { value: "service", label: "Service & Configuration" })
      ] }),
      t === "databases" && /* @__PURE__ */ u.jsxs(jt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ u.jsx(
            Yn,
            {
              size: "small",
              placeholder: "Search databases...",
              value: d,
              onChange: (z) => v(z.target.value),
              slotProps: {
                input: {
                  startAdornment: /* @__PURE__ */ u.jsx(Ag, { position: "start", children: /* @__PURE__ */ u.jsx(iy, { fontSize: "small" }) })
                }
              },
              sx: { width: { xs: "100%", sm: 280 } }
            }
          ),
          /* @__PURE__ */ u.jsx(Tt, { variant: "contained", size: "small", startIcon: /* @__PURE__ */ u.jsx(ny, {}), onClick: () => $(!0), children: "New Database" })
        ] }),
        /* @__PURE__ */ u.jsx(ld, { children: /* @__PURE__ */ u.jsxs(sd, { size: "small", children: [
          /* @__PURE__ */ u.jsx(ad, { children: /* @__PURE__ */ u.jsxs(wr, { children: [
            /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 600 }, children: "Database Name" }),
            /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 600 }, children: "Charset / Collation" }),
            /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 600 }, children: "Tables" }),
            /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 600 }, children: "Size" }),
            /* @__PURE__ */ u.jsx(ct, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(id, { children: ts.length === 0 ? /* @__PURE__ */ u.jsx(wr, { children: /* @__PURE__ */ u.jsx(ct, { colSpan: 5, align: "center", sx: { py: 3, color: "text.secondary" }, children: "No databases found." }) }) : ts.map((z) => /* @__PURE__ */ u.jsxs(wr, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(ct, { sx: { fontFamily: Rt, fontWeight: 600 }, children: z.name }),
            /* @__PURE__ */ u.jsx(ct, { sx: { color: "text.secondary" }, children: z.charset || "utf8mb4" }),
            /* @__PURE__ */ u.jsx(ct, { sx: { color: "text.secondary" }, children: z.tables_count ?? 0 }),
            /* @__PURE__ */ u.jsx(ct, { sx: { color: "text.secondary" }, children: z.size_human || "0 B" }),
            /* @__PURE__ */ u.jsxs(ct, { align: "right", children: [
              /* @__PURE__ */ u.jsx(Kn, { title: "Query Database", children: /* @__PURE__ */ u.jsx(
                Bt,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => {
                    h(z.name), n("query");
                  },
                  children: /* @__PURE__ */ u.jsx(w5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(Kn, { title: "Drop Database", children: /* @__PURE__ */ u.jsx(Bt, { size: "small", color: "error", onClick: () => Dr(z.name), children: /* @__PURE__ */ u.jsx(ud, { fontSize: "small" }) }) })
            ] })
          ] }, z.name)) })
        ] }) })
      ] }),
      t === "users" && /* @__PURE__ */ u.jsxs(jt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center", mb: 2 }, children: [
          /* @__PURE__ */ u.jsx(
            Yn,
            {
              size: "small",
              placeholder: "Search users...",
              value: b,
              onChange: (z) => C(z.target.value),
              slotProps: {
                input: {
                  startAdornment: /* @__PURE__ */ u.jsx(Ag, { position: "start", children: /* @__PURE__ */ u.jsx(iy, { fontSize: "small" }) })
                }
              },
              sx: { width: { xs: "100%", sm: 280 } }
            }
          ),
          /* @__PURE__ */ u.jsx(Tt, { variant: "contained", size: "small", startIcon: /* @__PURE__ */ u.jsx(ry, {}), onClick: () => V(!0), children: "New User" })
        ] }),
        /* @__PURE__ */ u.jsx(ld, { children: /* @__PURE__ */ u.jsxs(sd, { size: "small", children: [
          /* @__PURE__ */ u.jsx(ad, { children: /* @__PURE__ */ u.jsxs(wr, { children: [
            /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 600 }, children: "Username" }),
            /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 600 }, children: "Allowed Host" }),
            /* @__PURE__ */ u.jsx(ct, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(id, { children: cm.length === 0 ? /* @__PURE__ */ u.jsx(wr, { children: /* @__PURE__ */ u.jsx(ct, { colSpan: 3, align: "center", sx: { py: 3, color: "text.secondary" }, children: "No custom database users found." }) }) : cm.map((z) => /* @__PURE__ */ u.jsxs(wr, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(ct, { sx: { fontFamily: Rt, fontWeight: 600 }, children: z.username }),
            /* @__PURE__ */ u.jsx(ct, { sx: { fontFamily: Rt, color: "text.secondary" }, children: z.host }),
            /* @__PURE__ */ u.jsxs(ct, { align: "right", children: [
              /* @__PURE__ */ u.jsx(Kn, { title: "Grant Privileges", children: /* @__PURE__ */ u.jsx(
                Bt,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => {
                    Le(z), Me(!0);
                  },
                  children: /* @__PURE__ */ u.jsx(b5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(Kn, { title: "Change Password", children: /* @__PURE__ */ u.jsx(
                Bt,
                {
                  size: "small",
                  color: "warning",
                  onClick: () => {
                    ue(z), we(!0);
                  },
                  children: /* @__PURE__ */ u.jsx(g5, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(Kn, { title: "Drop User", children: /* @__PURE__ */ u.jsx(Bt, { size: "small", color: "error", onClick: () => kl(z), children: /* @__PURE__ */ u.jsx(ud, { fontSize: "small" }) }) })
            ] })
          ] }, `${z.username}@${z.host}`)) })
        ] }) })
      ] }),
      t === "query" && /* @__PURE__ */ u.jsx(jt, { sx: { p: 2 }, children: /* @__PURE__ */ u.jsxs(at, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
        /* @__PURE__ */ u.jsx(jt, { sx: { width: { xs: "100%", md: 280 }, flexShrink: 0 }, children: /* @__PURE__ */ u.jsxs(sn, { variant: "outlined", sx: { p: 1.5 }, children: [
          /* @__PURE__ */ u.jsx(Oe, { variant: "subtitle2", sx: { fontWeight: 700, mb: 1 }, children: "Target Database" }),
          /* @__PURE__ */ u.jsx(Ef, { fullWidth: !0, size: "small", sx: { mb: 2 }, children: /* @__PURE__ */ u.jsx(yu, { value: g, onChange: (z) => h(z.target.value), children: c.map((z) => /* @__PURE__ */ u.jsx(cs, { value: z.name, children: z.name }, z.name)) }) }),
          /* @__PURE__ */ u.jsxs(at, { direction: "row", sx: { justifyContent: "space-between", alignItems: "center", mb: 1 }, children: [
            /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { fontWeight: 700, color: "text.secondary" }, children: [
              "TABLES (",
              S.length,
              ")"
            ] }),
            /* @__PURE__ */ u.jsx(Bt, { size: "small", onClick: () => he(g), disabled: R, children: /* @__PURE__ */ u.jsx(sy, { sx: { fontSize: 14 } }) })
          ] }),
          R ? /* @__PURE__ */ u.jsx(jt, { sx: { display: "flex", justifyContent: "center", py: 2 }, children: /* @__PURE__ */ u.jsx(Mo, { size: 20 }) }) : S.length === 0 ? /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { color: "text.disabled", display: "block", py: 1 }, children: [
            "No tables found in ",
            g || "selected database",
            "."
          ] }) : /* @__PURE__ */ u.jsx(jt, { sx: { maxHeight: 300, overflow: "auto" }, children: S.map((z) => /* @__PURE__ */ u.jsxs(
            jt,
            {
              onClick: () => {
                const Z = `SELECT * FROM \`${z.name}\` LIMIT 50;`;
                E(Z), qe(Z);
              },
              sx: {
                p: 0.75,
                borderRadius: 1,
                cursor: "pointer",
                "&:hover": { bgcolor: "action.hover" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1, sx: { alignItems: "center", minWidth: 0 }, children: [
                  /* @__PURE__ */ u.jsx(C5, { sx: { fontSize: 16, color: "primary.main" } }),
                  /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { fontFamily: Rt, fontSize: "0.8125rem", overflow: "hidden", textOverflow: "ellipsis" }, children: z.name })
                ] }),
                /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { color: "text.secondary", ml: 1, flexShrink: 0 }, children: [
                  z.rows,
                  " r"
                ] })
              ]
            },
            z.name
          )) })
        ] }) }),
        /* @__PURE__ */ u.jsxs(jt, { sx: { flex: 1, minWidth: 0 }, children: [
          /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1, sx: { mb: 1, flexWrap: "wrap", gap: 0.5 }, children: [
            /* @__PURE__ */ u.jsx(
              Ur,
              {
                size: "small",
                label: "SHOW TABLES",
                onClick: () => {
                  E("SHOW TABLES;"), qe("SHOW TABLES;");
                },
                sx: { cursor: "pointer", fontFamily: Rt, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ u.jsx(
              Ur,
              {
                size: "small",
                label: "SHOW PROCESSLIST",
                onClick: () => {
                  E("SHOW FULL PROCESSLIST;"), qe("SHOW FULL PROCESSLIST;");
                },
                sx: { cursor: "pointer", fontFamily: Rt, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ u.jsx(
              Ur,
              {
                size: "small",
                label: "SHOW STATUS",
                onClick: () => {
                  E("SHOW STATUS LIKE '%threads%';"), qe("SHOW STATUS LIKE '%threads%';");
                },
                sx: { cursor: "pointer", fontFamily: Rt, fontSize: "0.75rem" }
              }
            )
          ] }),
          /* @__PURE__ */ u.jsx(
            Yn,
            {
              multiline: !0,
              rows: 4,
              fullWidth: !0,
              value: T,
              onChange: (z) => E(z.target.value),
              placeholder: "Enter SQL statement (e.g. SELECT * FROM users LIMIT 25;)",
              slotProps: {
                input: {
                  sx: { fontFamily: Rt, fontSize: "0.875rem", bgcolor: "background.paper" }
                }
              },
              onKeyDown: (z) => {
                (z.ctrlKey || z.metaKey) && z.key === "Enter" && (z.preventDefault(), qe());
              }
            }
          ),
          /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1.5, sx: { mt: 1.5, mb: 2, alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(
              Tt,
              {
                variant: "contained",
                size: "small",
                startIcon: L ? /* @__PURE__ */ u.jsx(Mo, { size: 16, color: "inherit" }) : /* @__PURE__ */ u.jsx(oy, {}),
                onClick: () => qe(),
                disabled: L || !g || !T.trim(),
                children: "Execute Query"
              }
            ),
            P && P.ok && /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { color: "text.secondary" }, children: [
                P.total_rows ?? (((um = P.rows) == null ? void 0 : um.length) || 0),
                " rows • ",
                P.execution_time_ms || 0,
                " ms"
              ] }),
              /* @__PURE__ */ u.jsx(Tt, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ u.jsx(ly, {}), onClick: Wn, children: "CSV" }),
              /* @__PURE__ */ u.jsx(Tt, { size: "small", variant: "outlined", startIcon: /* @__PURE__ */ u.jsx(ly, {}), onClick: Rn, children: "JSON" })
            ] })
          ] }),
          P && /* @__PURE__ */ u.jsx(jt, { children: P.ok ? P.columns && P.columns.length > 0 ? /* @__PURE__ */ u.jsxs(sn, { variant: "outlined", children: [
            /* @__PURE__ */ u.jsx(ld, { sx: { maxHeight: 400 }, children: /* @__PURE__ */ u.jsxs(sd, { size: "small", stickyHeader: !0, children: [
              /* @__PURE__ */ u.jsx(ad, { children: /* @__PURE__ */ u.jsx(wr, { children: P.columns.map((z) => /* @__PURE__ */ u.jsx(ct, { sx: { fontWeight: 700, fontFamily: Rt, fontSize: "0.75rem", bgcolor: "action.hover" }, children: z }, z)) }) }),
              /* @__PURE__ */ u.jsx(id, { children: P.rows && P.rows.length === 0 ? /* @__PURE__ */ u.jsx(wr, { children: /* @__PURE__ */ u.jsx(ct, { colSpan: P.columns.length, align: "center", sx: { py: 3, color: "text.secondary" }, children: "Empty result set (0 rows returned)." }) }) : (P.rows || []).slice(M * j, M * j + j).map((z, Z) => /* @__PURE__ */ u.jsx(wr, { hover: !0, children: z.map((Re, hn) => /* @__PURE__ */ u.jsx(ct, { sx: { fontFamily: Rt, fontSize: "0.8125rem", whiteSpace: "nowrap" }, children: Re === null ? /* @__PURE__ */ u.jsx("em", { style: { color: "gray" }, children: "NULL" }) : String(Re) }, hn)) }, Z)) })
            ] }) }),
            P.rows && P.rows.length > j && /* @__PURE__ */ u.jsx(
              V$,
              {
                component: "div",
                count: P.rows.length,
                page: M,
                onPageChange: (z, Z) => I(Z),
                rowsPerPage: j,
                onRowsPerPageChange: (z) => {
                  O(parseInt(z.target.value, 10)), I(0);
                },
                rowsPerPageOptions: [10, 25, 50, 100]
              }
            )
          ] }) : /* @__PURE__ */ u.jsxs(pg, { severity: "success", children: [
            "Query executed successfully in ",
            P.execution_time_ms || 0,
            " ms. (0 columns returned)"
          ] }) : /* @__PURE__ */ u.jsx(pg, { severity: "error", sx: { fontFamily: Rt }, children: P.error || "Query failed" }) })
        ] })
      ] }) }),
      t === "service" && /* @__PURE__ */ u.jsxs(jt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ u.jsx(Oe, { variant: "h6", sx: { fontWeight: 700, mb: 2 }, children: "Isolation & Environment Parameters" }),
        /* @__PURE__ */ u.jsx(at, { spacing: 2, children: /* @__PURE__ */ u.jsx(sn, { variant: "outlined", sx: { p: 2 }, children: /* @__PURE__ */ u.jsxs(at, { spacing: 1, children: [
          /* @__PURE__ */ u.jsxs(at, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { color: "text.secondary" }, children: "Configuration File:" }),
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { fontFamily: Rt, fontWeight: 600 }, children: "/opt/hostpanel/etc/mysql/my.cnf" })
          ] }),
          /* @__PURE__ */ u.jsxs(at, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { color: "text.secondary" }, children: "Data Directory:" }),
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { fontFamily: Rt, fontWeight: 600 }, children: "/opt/hostpanel/data/mysql" })
          ] }),
          /* @__PURE__ */ u.jsxs(at, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { color: "text.secondary" }, children: "Log Directory:" }),
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { fontFamily: Rt, fontWeight: 600 }, children: "/opt/hostpanel/logs/mysql/mariadb.log" })
          ] }),
          /* @__PURE__ */ u.jsxs(at, { direction: "row", sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { color: "text.secondary" }, children: "Unix Domain Socket:" }),
            /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { fontFamily: Rt, fontWeight: 600 }, children: "/opt/hostpanel/run/mysql/mysqld.sock" })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Co, { open: N, onClose: () => $(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(To, { children: "Create New Database" }),
      /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(at, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsx(
          Yn,
          {
            label: "Database Name",
            size: "small",
            fullWidth: !0,
            value: B,
            onChange: (z) => D(z.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "")),
            placeholder: "e.g. app_production"
          }
        ),
        /* @__PURE__ */ u.jsxs(
          Yn,
          {
            select: !0,
            label: "Character Set",
            size: "small",
            fullWidth: !0,
            value: H,
            onChange: (z) => _(z.target.value),
            children: [
              /* @__PURE__ */ u.jsx(cs, { value: "utf8mb4", children: "utf8mb4 (Recommended)" }),
              /* @__PURE__ */ u.jsx(cs, { value: "utf8", children: "utf8" }),
              /* @__PURE__ */ u.jsx(cs, { value: "latin1", children: "latin1" })
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ u.jsxs(ko, { children: [
        /* @__PURE__ */ u.jsx(Tt, { onClick: () => $(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Tt, { variant: "contained", onClick: xo, disabled: !B, children: "Create" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Co, { open: q, onClose: () => V(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(To, { children: "Create New MySQL User" }),
      /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(at, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsx(
          Yn,
          {
            label: "Username",
            size: "small",
            fullWidth: !0,
            value: K,
            onChange: (z) => G(z.target.value.replace(/[^a-zA-Z0-9_]/g, "")),
            placeholder: "e.g. dbuser"
          }
        ),
        /* @__PURE__ */ u.jsx(
          Yn,
          {
            label: "Host",
            size: "small",
            fullWidth: !0,
            value: ee,
            onChange: (z) => ae(z.target.value),
            helperText: "% for any host, localhost for local only"
          }
        ),
        /* @__PURE__ */ u.jsx(
          Yn,
          {
            label: "Password",
            size: "small",
            type: "password",
            fullWidth: !0,
            value: Q,
            onChange: (z) => U(z.target.value)
          }
        )
      ] }) }),
      /* @__PURE__ */ u.jsxs(ko, { children: [
        /* @__PURE__ */ u.jsx(Tt, { onClick: () => V(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Tt, { variant: "contained", onClick: Cl, disabled: !K || !Q, children: "Create User" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Co, { open: Te, onClose: () => we(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsxs(To, { children: [
        "Reset Password for ",
        ge == null ? void 0 : ge.username
      ] }),
      /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsx(at, { spacing: 2, sx: { mt: 1 }, children: /* @__PURE__ */ u.jsx(
        Yn,
        {
          label: "New Password",
          size: "small",
          type: "password",
          fullWidth: !0,
          value: je,
          onChange: (z) => _e(z.target.value)
        }
      ) }) }),
      /* @__PURE__ */ u.jsxs(ko, { children: [
        /* @__PURE__ */ u.jsx(Tt, { onClick: () => we(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Tt, { variant: "contained", onClick: X, disabled: !je, children: "Save Password" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Co, { open: Ie, onClose: () => Me(!1), maxWidth: "md", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsxs(To, { sx: { pb: 1 }, children: [
        /* @__PURE__ */ u.jsx(Oe, { variant: "h6", sx: { fontWeight: 700 }, children: "Manage User Privileges" }),
        /* @__PURE__ */ u.jsxs(Oe, { variant: "body2", sx: { color: "text.secondary" }, children: [
          "Assigning database permissions for user ",
          /* @__PURE__ */ u.jsx("strong", { style: { fontFamily: Rt }, children: se == null ? void 0 : se.username }),
          "@",
          se == null ? void 0 : se.host
        ] })
      ] }),
      /* @__PURE__ */ u.jsx(Eo, { dividers: !0, sx: { p: 2.5 }, children: /* @__PURE__ */ u.jsxs(at, { spacing: 2.5, children: [
        /* @__PURE__ */ u.jsx(Ef, { fullWidth: !0, size: "small", children: /* @__PURE__ */ u.jsx(
          Yn,
          {
            select: !0,
            label: "Target Database",
            size: "small",
            fullWidth: !0,
            value: Ae,
            onChange: (z) => We(z.target.value),
            helperText: "Select the database to apply these privileges to",
            children: c.map((z) => /* @__PURE__ */ u.jsx(cs, { value: z.name, children: z.name }, z.name))
          }
        ) }),
        /* @__PURE__ */ u.jsxs(
          sn,
          {
            variant: "outlined",
            sx: {
              p: 1.5,
              borderRadius: 1.5,
              bgcolor: (z) => ke.length === Qn.length ? Bo(z.palette.primary.main, 0.08) : "transparent",
              borderColor: ke.length === Qn.length ? "primary.main" : "divider",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 1.5
            },
            children: [
              /* @__PURE__ */ u.jsx(
                lI,
                {
                  control: /* @__PURE__ */ u.jsx(
                    Tg,
                    {
                      checked: ke.length === Qn.length,
                      indeterminate: ke.length > 0 && ke.length < Qn.length,
                      onChange: (z) => Ee(z.target.checked),
                      color: "primary"
                    }
                  ),
                  label: /* @__PURE__ */ u.jsxs(jt, { children: [
                    /* @__PURE__ */ u.jsx(Oe, { sx: { fontWeight: 700, fontSize: "0.9375rem" }, children: "ALL PRIVILEGES" }),
                    /* @__PURE__ */ u.jsx(Oe, { variant: "caption", sx: { color: "text.secondary" }, children: "Grant full administrative and data control over the target database" })
                  ] }),
                  sx: { m: 0 }
                }
              ),
              /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1, sx: { flexWrap: "wrap", gap: 0.5 }, children: [
                /* @__PURE__ */ u.jsx(
                  Ur,
                  {
                    size: "small",
                    label: "Select All",
                    onClick: () => Ze("all"),
                    color: ke.length === Qn.length ? "primary" : "default",
                    sx: { cursor: "pointer", fontWeight: 600 }
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  Ur,
                  {
                    size: "small",
                    label: "Read Only",
                    onClick: () => Ze("readonly"),
                    sx: { cursor: "pointer", fontWeight: 600 }
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  Ur,
                  {
                    size: "small",
                    label: "Read / Write",
                    onClick: () => Ze("readwrite"),
                    sx: { cursor: "pointer", fontWeight: 600 }
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  Ur,
                  {
                    size: "small",
                    label: "Clear",
                    onClick: () => Ze("clear"),
                    sx: { cursor: "pointer" }
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ u.jsxs(jt, { children: [
          /* @__PURE__ */ u.jsxs(Oe, { variant: "caption", sx: { fontWeight: 700, color: "text.secondary", letterSpacing: "0.05em", mb: 1, display: "block" }, children: [
            "INDIVIDUAL PRIVILEGES (",
            ke.length,
            " OF ",
            Qn.length,
            " SELECTED)"
          ] }),
          /* @__PURE__ */ u.jsx(
            jt,
            {
              sx: {
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                gap: 1,
                maxHeight: "320px",
                overflowY: "auto",
                p: 0.5
              },
              children: Qn.map((z) => {
                const Z = ke.includes(z.key);
                return /* @__PURE__ */ u.jsxs(
                  sn,
                  {
                    variant: "outlined",
                    onClick: () => le(z.key),
                    sx: {
                      p: 1,
                      borderRadius: 1,
                      cursor: "pointer",
                      borderColor: Z ? "primary.main" : "divider",
                      bgcolor: (Re) => Z ? Bo(Re.palette.primary.main, 0.06) : "transparent",
                      transition: "all 0.15s ease",
                      "&:hover": { borderColor: "primary.main", bgcolor: "action.hover" },
                      display: "flex",
                      alignItems: "flex-start"
                    },
                    children: [
                      /* @__PURE__ */ u.jsx(
                        Tg,
                        {
                          size: "small",
                          checked: Z,
                          onChange: () => le(z.key),
                          sx: { p: 0.25, mr: 0.75, mt: -0.25 }
                        }
                      ),
                      /* @__PURE__ */ u.jsxs(jt, { sx: { minWidth: 0 }, children: [
                        /* @__PURE__ */ u.jsx(Oe, { variant: "body2", sx: { fontWeight: 700, fontSize: "0.8125rem", fontFamily: Rt }, children: z.label }),
                        /* @__PURE__ */ u.jsx(Oe, { variant: "caption", sx: { color: "text.secondary", fontSize: "0.6875rem", display: "block", lineHeight: 1.2 }, children: z.desc })
                      ] })
                    ]
                  },
                  z.key
                );
              })
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs(ko, { sx: { px: 2.5, py: 1.5, justifyContent: "space-between" }, children: [
        /* @__PURE__ */ u.jsx(
          Tt,
          {
            color: "error",
            variant: "outlined",
            size: "small",
            startIcon: /* @__PURE__ */ u.jsx(ud, {}),
            onClick: es,
            disabled: !Ae,
            children: "Revoke All Privileges"
          }
        ),
        /* @__PURE__ */ u.jsxs(at, { direction: "row", spacing: 1.5, children: [
          /* @__PURE__ */ u.jsx(Tt, { onClick: () => Me(!1), children: "Cancel" }),
          /* @__PURE__ */ u.jsx(
            Tt,
            {
              variant: "contained",
              onClick: Nt,
              disabled: !Ae || ke.length === 0,
              children: "Save Privileges"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Co, { open: st, onClose: () => Ne(!1), maxWidth: "md", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsxs(To, { children: [
        "Edit MySQL Configuration (",
        xt,
        ")"
      ] }),
      /* @__PURE__ */ u.jsx(Eo, { children: xe ? /* @__PURE__ */ u.jsx(jt, { sx: { display: "flex", justifyContent: "center", py: 4 }, children: /* @__PURE__ */ u.jsx(Mo, { size: 28 }) }) : /* @__PURE__ */ u.jsx(
        Yn,
        {
          multiline: !0,
          rows: 15,
          fullWidth: !0,
          value: be,
          onChange: (z) => Ue(z.target.value),
          sx: { mt: 1, fontFamily: Rt }
        }
      ) }),
      /* @__PURE__ */ u.jsxs(ko, { children: [
        /* @__PURE__ */ u.jsx(Tt, { onClick: () => Ne(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Tt, { variant: "contained", onClick: qs, disabled: it || xe, children: it ? "Saving..." : "Save Configuration" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Co, { open: or, onClose: () => rn(!1), maxWidth: "md", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(To, { children: "MySQL Service Logs" }),
      /* @__PURE__ */ u.jsx(Eo, { children: Xe ? /* @__PURE__ */ u.jsx(Mo, { size: 24, sx: { my: 3 } }) : /* @__PURE__ */ u.jsx(
        sn,
        {
          sx: {
            p: 2,
            bgcolor: "grey.900",
            color: "grey.100",
            fontFamily: Rt,
            fontSize: "0.8125rem",
            maxHeight: 400,
            overflow: "auto",
            whiteSpace: "pre-wrap"
          },
          children: yo
        }
      ) }),
      /* @__PURE__ */ u.jsx(ko, { children: /* @__PURE__ */ u.jsx(Tt, { onClick: () => rn(!1), children: "Close" }) })
    ] }),
    /* @__PURE__ */ u.jsxs(
      Co,
      {
        open: wl,
        onClose: () => {
          zr || on(!1);
        },
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(To, { children: Br }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsx(k5, { lines: vo, running: zr }) }),
          /* @__PURE__ */ u.jsx(ko, { children: /* @__PURE__ */ u.jsx(Tt, { onClick: () => on(!1), disabled: zr, children: "Close" }) })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(
      XM,
      {
        open: !!Jo,
        autoHideDuration: 4e3,
        onClose: () => Ct(null),
        message: Jo
      }
    )
  ] });
}
let ic = null;
function R5(e, t) {
  ic = w0(e), ic.render(
    /* @__PURE__ */ u.jsx(p.StrictMode, { children: /* @__PURE__ */ u.jsx(E5, { ctx: t }) })
  );
}
function P5() {
  const e = ic;
  ic = null, e && queueMicrotask(() => e.unmount());
}
const M5 = { mount: R5, unmount: P5 };
export {
  M5 as default,
  R5 as mount,
  P5 as unmount
};
//# sourceMappingURL=main.js.map
