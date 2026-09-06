function Gx(e, t) {
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
function Xx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hg = { exports: {} }, Za = {}, Vg = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var el = Symbol.for("react.element"), qx = Symbol.for("react.portal"), Zx = Symbol.for("react.fragment"), Jx = Symbol.for("react.strict_mode"), e1 = Symbol.for("react.profiler"), t1 = Symbol.for("react.provider"), n1 = Symbol.for("react.context"), r1 = Symbol.for("react.forward_ref"), o1 = Symbol.for("react.suspense"), i1 = Symbol.for("react.memo"), s1 = Symbol.for("react.lazy"), tm = Symbol.iterator;
function l1(e) {
  return e === null || typeof e != "object" ? null : (e = tm && e[tm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Kg = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Yg = Object.assign, Qg = {};
function zi(e, t, n) {
  this.props = e, this.context = t, this.refs = Qg, this.updater = n || Kg;
}
zi.prototype.isReactComponent = {};
zi.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
zi.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gg() {
}
Gg.prototype = zi.prototype;
function Sf(e, t, n) {
  this.props = e, this.context = t, this.refs = Qg, this.updater = n || Kg;
}
var bf = Sf.prototype = new Gg();
bf.constructor = Sf;
Yg(bf, zi.prototype);
bf.isPureReactComponent = !0;
var nm = Array.isArray, Xg = Object.prototype.hasOwnProperty, wf = { current: null }, qg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zg(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Xg.call(t, r) && !qg.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: el, type: e, key: i, ref: s, props: o, _owner: wf.current };
}
function a1(e, t) {
  return { $$typeof: el, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Cf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === el;
}
function u1(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var rm = /\/+/g;
function dc(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? u1("" + e.key) : t.toString(36);
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
        case el:
        case qx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + dc(s, 0) : r, nm(o) ? (n = "", e != null && (n = e.replace(rm, "$&/") + "/"), Xl(o, t, n, "", function(u) {
    return u;
  })) : o != null && (Cf(o) && (o = a1(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(rm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", nm(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + dc(i, l);
    s += Xl(i, t, n, a, o);
  }
  else if (a = l1(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + dc(i, l++), s += Xl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function pl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Xl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function c1(e) {
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
var Gt = { current: null }, ql = { transition: null }, d1 = { ReactCurrentDispatcher: Gt, ReactCurrentBatchConfig: ql, ReactCurrentOwner: wf };
function Jg() {
  throw Error("act(...) is not supported in production builds of React.");
}
ke.Children = { map: pl, forEach: function(e, t, n) {
  pl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Cf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
ke.Component = zi;
ke.Fragment = Zx;
ke.Profiler = e1;
ke.PureComponent = Sf;
ke.StrictMode = Jx;
ke.Suspense = o1;
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = d1;
ke.act = Jg;
ke.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yg({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = wf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Xg.call(t, a) && !qg.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: el, type: e.type, key: o, ref: i, props: r, _owner: s };
};
ke.createContext = function(e) {
  return e = { $$typeof: n1, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: t1, _context: e }, e.Consumer = e;
};
ke.createElement = Zg;
ke.createFactory = function(e) {
  var t = Zg.bind(null, e);
  return t.type = e, t;
};
ke.createRef = function() {
  return { current: null };
};
ke.forwardRef = function(e) {
  return { $$typeof: r1, render: e };
};
ke.isValidElement = Cf;
ke.lazy = function(e) {
  return { $$typeof: s1, _payload: { _status: -1, _result: e }, _init: c1 };
};
ke.memo = function(e, t) {
  return { $$typeof: i1, type: e, compare: t === void 0 ? null : t };
};
ke.startTransition = function(e) {
  var t = ql.transition;
  ql.transition = {};
  try {
    e();
  } finally {
    ql.transition = t;
  }
};
ke.unstable_act = Jg;
ke.useCallback = function(e, t) {
  return Gt.current.useCallback(e, t);
};
ke.useContext = function(e) {
  return Gt.current.useContext(e);
};
ke.useDebugValue = function() {
};
ke.useDeferredValue = function(e) {
  return Gt.current.useDeferredValue(e);
};
ke.useEffect = function(e, t) {
  return Gt.current.useEffect(e, t);
};
ke.useId = function() {
  return Gt.current.useId();
};
ke.useImperativeHandle = function(e, t, n) {
  return Gt.current.useImperativeHandle(e, t, n);
};
ke.useInsertionEffect = function(e, t) {
  return Gt.current.useInsertionEffect(e, t);
};
ke.useLayoutEffect = function(e, t) {
  return Gt.current.useLayoutEffect(e, t);
};
ke.useMemo = function(e, t) {
  return Gt.current.useMemo(e, t);
};
ke.useReducer = function(e, t, n) {
  return Gt.current.useReducer(e, t, n);
};
ke.useRef = function(e) {
  return Gt.current.useRef(e);
};
ke.useState = function(e) {
  return Gt.current.useState(e);
};
ke.useSyncExternalStore = function(e, t, n) {
  return Gt.current.useSyncExternalStore(e, t, n);
};
ke.useTransition = function() {
  return Gt.current.useTransition();
};
ke.version = "18.3.1";
Vg.exports = ke;
var p = Vg.exports;
const ey = /* @__PURE__ */ Xx(p), ma = /* @__PURE__ */ Gx({
  __proto__: null,
  default: ey
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
var f1 = p, p1 = Symbol.for("react.element"), m1 = Symbol.for("react.fragment"), h1 = Object.prototype.hasOwnProperty, g1 = f1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function ty(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) h1.call(t, r) && !y1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: p1, type: e, key: i, ref: s, props: o, _owner: g1.current };
}
Za.Fragment = m1;
Za.jsx = ty;
Za.jsxs = ty;
Hg.exports = Za;
var c = Hg.exports, ny = { exports: {} }, yn = {}, ry = { exports: {} }, oy = {};
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
  function t(O, D) {
    var B = O.length;
    O.push(D);
    e: for (; 0 < B; ) {
      var H = B - 1 >>> 1, W = O[H];
      if (0 < o(W, D)) O[H] = D, O[B] = W, B = H;
      else break e;
    }
  }
  function n(O) {
    return O.length === 0 ? null : O[0];
  }
  function r(O) {
    if (O.length === 0) return null;
    var D = O[0], B = O.pop();
    if (B !== D) {
      O[0] = B;
      e: for (var H = 0, W = O.length, G = W >>> 1; H < G; ) {
        var Y = 2 * (H + 1) - 1, re = O[Y], Q = Y + 1, X = O[Q];
        if (0 > o(re, B)) Q < W && 0 > o(X, re) ? (O[H] = X, O[Q] = B, H = Q) : (O[H] = re, O[Y] = B, H = Y);
        else if (Q < W && 0 > o(X, B)) O[H] = X, O[Q] = B, H = Q;
        else break e;
      }
    }
    return D;
  }
  function o(O, D) {
    var B = O.sortIndex - D.sortIndex;
    return B !== 0 ? B : O.id - D.id;
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
  var a = [], u = [], d = 1, h = null, v = 3, f = !1, S = !1, b = !1, C = typeof setTimeout == "function" ? setTimeout : null, g = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(O) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= O) r(u), D.sortIndex = D.expirationTime, t(a, D);
      else break;
      D = n(u);
    }
  }
  function w(O) {
    if (b = !1, x(O), !S) if (n(a) !== null) S = !0, N(E);
    else {
      var D = n(u);
      D !== null && L(w, D.startTime - O);
    }
  }
  function E(O, D) {
    S = !1, b && (b = !1, g(P), P = -1), f = !0;
    var B = v;
    try {
      for (x(D), h = n(a); h !== null && (!(h.expirationTime > D) || O && !I()); ) {
        var H = h.callback;
        if (typeof H == "function") {
          h.callback = null, v = h.priorityLevel;
          var W = H(h.expirationTime <= D);
          D = e.unstable_now(), typeof W == "function" ? h.callback = W : h === n(a) && r(a), x(D);
        } else r(a);
        h = n(a);
      }
      if (h !== null) var G = !0;
      else {
        var Y = n(u);
        Y !== null && L(w, Y.startTime - D), G = !1;
      }
      return G;
    } finally {
      h = null, v = B, f = !1;
    }
  }
  var k = !1, T = null, P = -1, M = 5, A = -1;
  function I() {
    return !(e.unstable_now() - A < M);
  }
  function y() {
    if (T !== null) {
      var O = e.unstable_now();
      A = O;
      var D = !0;
      try {
        D = T(!0, O);
      } finally {
        D ? j() : (k = !1, T = null);
      }
    } else k = !1;
  }
  var j;
  if (typeof m == "function") j = function() {
    m(y);
  };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(), $ = R.port2;
    R.port1.onmessage = y, j = function() {
      $.postMessage(null);
    };
  } else j = function() {
    C(y, 0);
  };
  function N(O) {
    T = O, k || (k = !0, j());
  }
  function L(O, D) {
    P = C(function() {
      O(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    S || f || (S = !0, N(E));
  }, e.unstable_forceFrameRate = function(O) {
    0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < O ? Math.floor(1e3 / O) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(O) {
    switch (v) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = v;
    }
    var B = v;
    v = D;
    try {
      return O();
    } finally {
      v = B;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(O, D) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var B = v;
    v = O;
    try {
      return D();
    } finally {
      v = B;
    }
  }, e.unstable_scheduleCallback = function(O, D, B) {
    var H = e.unstable_now();
    switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? H + B : H) : B = H, O) {
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
    return W = B + W, O = { id: d++, callback: D, priorityLevel: O, startTime: B, expirationTime: W, sortIndex: -1 }, B > H ? (O.sortIndex = B, t(u, O), n(a) === null && O === n(u) && (b ? (g(P), P = -1) : b = !0, L(w, B - H))) : (O.sortIndex = W, t(a, O), S || f || (S = !0, N(E))), O;
  }, e.unstable_shouldYield = I, e.unstable_wrapCallback = function(O) {
    var D = v;
    return function() {
      var B = v;
      v = D;
      try {
        return O.apply(this, arguments);
      } finally {
        v = B;
      }
    };
  };
})(oy);
ry.exports = oy;
var v1 = ry.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x1 = p, hn = v1;
function V(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var iy = /* @__PURE__ */ new Set(), Rs = {};
function Do(e, t) {
  Ci(e, t), Ci(e + "Capture", t);
}
function Ci(e, t) {
  for (Rs[e] = t, e = 0; e < t.length; e++) iy.add(t[e]);
}
var Rr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Jc = Object.prototype.hasOwnProperty, S1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, om = {}, im = {};
function b1(e) {
  return Jc.call(im, e) ? !0 : Jc.call(om, e) ? !1 : S1.test(e) ? im[e] = !0 : (om[e] = !0, !1);
}
function w1(e, t, n, r) {
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
function C1(e, t, n, r) {
  if (t === null || typeof t > "u" || w1(e, t, n, r)) return !0;
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
function Xt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Bt[e] = new Xt(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Bt[t] = new Xt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Bt[e] = new Xt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Bt[e] = new Xt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Bt[e] = new Xt(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Bt[e] = new Xt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Bt[e] = new Xt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Bt[e] = new Xt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Bt[e] = new Xt(e, 5, !1, e.toLowerCase(), null, !1, !1);
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
  Bt[t] = new Xt(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(kf, Ef);
  Bt[t] = new Xt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(kf, Ef);
  Bt[t] = new Xt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Bt[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Bt.xlinkHref = new Xt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Bt[e] = new Xt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tf(e, t, n, r) {
  var o = Bt.hasOwnProperty(t) ? Bt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C1(t, n, o, r) && (n = null), r || o === null ? b1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nr = x1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ml = Symbol.for("react.element"), Jo = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), Pf = Symbol.for("react.strict_mode"), ed = Symbol.for("react.profiler"), sy = Symbol.for("react.provider"), ly = Symbol.for("react.context"), Rf = Symbol.for("react.forward_ref"), td = Symbol.for("react.suspense"), nd = Symbol.for("react.suspense_list"), Mf = Symbol.for("react.memo"), Fr = Symbol.for("react.lazy"), ay = Symbol.for("react.offscreen"), sm = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object" ? null : (e = sm && e[sm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ft = Object.assign, fc;
function ss(e) {
  if (fc === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    fc = t && t[1] || "";
  }
  return `
` + fc + e;
}
var pc = !1;
function mc(e, t) {
  if (!e || pc) return "";
  pc = !0;
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
    pc = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ss(e) : "";
}
function k1(e) {
  switch (e.tag) {
    case 5:
      return ss(e.type);
    case 16:
      return ss("Lazy");
    case 13:
      return ss("Suspense");
    case 19:
      return ss("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = mc(e.type, !1), e;
    case 11:
      return e = mc(e.type.render, !1), e;
    case 1:
      return e = mc(e.type, !0), e;
    default:
      return "";
  }
}
function rd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ei:
      return "Fragment";
    case Jo:
      return "Portal";
    case ed:
      return "Profiler";
    case Pf:
      return "StrictMode";
    case td:
      return "Suspense";
    case nd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ly:
      return (e.displayName || "Context") + ".Consumer";
    case sy:
      return (e._context.displayName || "Context") + ".Provider";
    case Rf:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Mf:
      return t = e.displayName || null, t !== null ? t : rd(e.type) || "Memo";
    case Fr:
      t = e._payload, e = e._init;
      try {
        return rd(e(t));
      } catch {
      }
  }
  return null;
}
function E1(e) {
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
      return t === Pf ? "StrictMode" : "Mode";
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
function eo(e) {
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
function uy(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function T1(e) {
  var t = uy(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function hl(e) {
  e._valueTracker || (e._valueTracker = T1(e));
}
function cy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = uy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ha(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function od(e, t) {
  var n = t.checked;
  return ft({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function lm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = eo(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function dy(e, t) {
  t = t.checked, t != null && Tf(e, "checked", t, !1);
}
function id(e, t) {
  dy(e, t);
  var n = eo(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? sd(e, t.type, n) : t.hasOwnProperty("defaultValue") && sd(e, t.type, eo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function am(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function sd(e, t, n) {
  (t !== "number" || ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ls = Array.isArray;
function mi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + eo(n), t = null, o = 0; o < e.length; o++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(V(91));
  return ft({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function um(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(V(92));
      if (ls(n)) {
        if (1 < n.length) throw Error(V(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: eo(n) };
}
function fy(e, t) {
  var n = eo(t.value), r = eo(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function cm(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function py(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? py(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gl, my = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (gl = gl || document.createElement("div"), gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Ms(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var fs = {
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
}, P1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(fs).forEach(function(e) {
  P1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), fs[t] = fs[e];
  });
});
function hy(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || fs.hasOwnProperty(e) && fs[e] ? ("" + t).trim() : t + "px";
}
function gy(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = hy(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var R1 = ft({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function ud(e, t) {
  if (t) {
    if (R1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(V(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(V(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(V(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(V(62));
  }
}
function cd(e, t) {
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
function If(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fd = null, hi = null, gi = null;
function dm(e) {
  if (e = rl(e)) {
    if (typeof fd != "function") throw Error(V(280));
    var t = e.stateNode;
    t && (t = ru(t), fd(e.stateNode, e.type, t));
  }
}
function yy(e) {
  hi ? gi ? gi.push(e) : gi = [e] : hi = e;
}
function vy() {
  if (hi) {
    var e = hi, t = gi;
    if (gi = hi = null, dm(e), t) for (e = 0; e < t.length; e++) dm(t[e]);
  }
}
function xy(e, t) {
  return e(t);
}
function Sy() {
}
var hc = !1;
function by(e, t, n) {
  if (hc) return e(t, n);
  hc = !0;
  try {
    return xy(e, t, n);
  } finally {
    hc = !1, (hi !== null || gi !== null) && (Sy(), vy());
  }
}
function Is(e, t) {
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
var pd = !1;
if (Rr) try {
  var Vi = {};
  Object.defineProperty(Vi, "passive", { get: function() {
    pd = !0;
  } }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
} catch {
  pd = !1;
}
function M1(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ps = !1, ga = null, ya = !1, md = null, I1 = { onError: function(e) {
  ps = !0, ga = e;
} };
function $1(e, t, n, r, o, i, s, l, a) {
  ps = !1, ga = null, M1.apply(I1, arguments);
}
function j1(e, t, n, r, o, i, s, l, a) {
  if ($1.apply(this, arguments), ps) {
    if (ps) {
      var u = ga;
      ps = !1, ga = null;
    } else throw Error(V(198));
    ya || (ya = !0, md = u);
  }
}
function Fo(e) {
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
function wy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fm(e) {
  if (Fo(e) !== e) throw Error(V(188));
}
function O1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Fo(e), t === null) throw Error(V(188));
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
        if (i === n) return fm(o), e;
        if (i === r) return fm(o), t;
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
function Cy(e) {
  return e = O1(e), e !== null ? ky(e) : null;
}
function ky(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ky(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ey = hn.unstable_scheduleCallback, pm = hn.unstable_cancelCallback, A1 = hn.unstable_shouldYield, N1 = hn.unstable_requestPaint, xt = hn.unstable_now, L1 = hn.unstable_getCurrentPriorityLevel, $f = hn.unstable_ImmediatePriority, Ty = hn.unstable_UserBlockingPriority, va = hn.unstable_NormalPriority, z1 = hn.unstable_LowPriority, Py = hn.unstable_IdlePriority, Ja = null, lr = null;
function D1(e) {
  if (lr && typeof lr.onCommitFiberRoot == "function") try {
    lr.onCommitFiberRoot(Ja, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Yn = Math.clz32 ? Math.clz32 : _1, F1 = Math.log, B1 = Math.LN2;
function _1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (F1(e) / B1 | 0) | 0;
}
var yl = 64, vl = 4194304;
function as(e) {
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
    l !== 0 ? r = as(l) : (i &= s, i !== 0 && (r = as(i)));
  } else s = n & ~o, s !== 0 ? r = as(s) : i !== 0 && (r = as(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Yn(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function W1(e, t) {
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
function U1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Yn(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = W1(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function hd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ry() {
  var e = yl;
  return yl <<= 1, !(yl & 4194240) && (yl = 64), e;
}
function gc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Yn(t), e[t] = n;
}
function H1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Yn(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function jf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Yn(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ke = 0;
function My(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Iy, Of, $y, jy, Oy, gd = !1, xl = [], Vr = null, Kr = null, Yr = null, $s = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ new Map(), _r = [], V1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function mm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vr = null;
      break;
    case "dragenter":
    case "dragleave":
      Kr = null;
      break;
    case "mouseover":
    case "mouseout":
      Yr = null;
      break;
    case "pointerover":
    case "pointerout":
      $s.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      js.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = rl(t), t !== null && Of(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function K1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Vr = Ki(Vr, e, t, n, r, o), !0;
    case "dragenter":
      return Kr = Ki(Kr, e, t, n, r, o), !0;
    case "mouseover":
      return Yr = Ki(Yr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return $s.set(i, Ki($s.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, js.set(i, Ki(js.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ay(e) {
  var t = bo(e.target);
  if (t !== null) {
    var n = Fo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = wy(n), t !== null) {
          e.blockedOn = t, Oy(e.priority, function() {
            $y(n);
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
    var n = yd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      dd = r, n.target.dispatchEvent(r), dd = null;
    } else return t = rl(n), t !== null && Of(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function hm(e, t, n) {
  Zl(e) && n.delete(t);
}
function Y1() {
  gd = !1, Vr !== null && Zl(Vr) && (Vr = null), Kr !== null && Zl(Kr) && (Kr = null), Yr !== null && Zl(Yr) && (Yr = null), $s.forEach(hm), js.forEach(hm);
}
function Yi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, gd || (gd = !0, hn.unstable_scheduleCallback(hn.unstable_NormalPriority, Y1)));
}
function Os(e) {
  function t(o) {
    return Yi(o, e);
  }
  if (0 < xl.length) {
    Yi(xl[0], e);
    for (var n = 1; n < xl.length; n++) {
      var r = xl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Vr !== null && Yi(Vr, e), Kr !== null && Yi(Kr, e), Yr !== null && Yi(Yr, e), $s.forEach(t), js.forEach(t), n = 0; n < _r.length; n++) r = _r[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < _r.length && (n = _r[0], n.blockedOn === null); ) Ay(n), n.blockedOn === null && _r.shift();
}
var yi = Nr.ReactCurrentBatchConfig, Sa = !0;
function Q1(e, t, n, r) {
  var o = Ke, i = yi.transition;
  yi.transition = null;
  try {
    Ke = 1, Af(e, t, n, r);
  } finally {
    Ke = o, yi.transition = i;
  }
}
function G1(e, t, n, r) {
  var o = Ke, i = yi.transition;
  yi.transition = null;
  try {
    Ke = 4, Af(e, t, n, r);
  } finally {
    Ke = o, yi.transition = i;
  }
}
function Af(e, t, n, r) {
  if (Sa) {
    var o = yd(e, t, n, r);
    if (o === null) Tc(e, t, r, ba, n), mm(e, r);
    else if (K1(o, e, t, n, r)) r.stopPropagation();
    else if (mm(e, r), t & 4 && -1 < V1.indexOf(e)) {
      for (; o !== null; ) {
        var i = rl(o);
        if (i !== null && Iy(i), i = yd(e, t, n, r), i === null && Tc(e, t, r, ba, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Tc(e, t, r, null, n);
  }
}
var ba = null;
function yd(e, t, n, r) {
  if (ba = null, e = If(r), e = bo(e), e !== null) if (t = Fo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = wy(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ba = e, null;
}
function Ny(e) {
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
      switch (L1()) {
        case $f:
          return 1;
        case Ty:
          return 4;
        case va:
        case z1:
          return 16;
        case Py:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null, Nf = null, Jl = null;
function Ly() {
  if (Jl) return Jl;
  var e, t = Nf, n = t.length, r, o = "value" in Ur ? Ur.value : Ur.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Jl = o.slice(e, 1 < r ? 1 - r : void 0);
}
function ea(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sl() {
  return !0;
}
function gm() {
  return !1;
}
function vn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Sl : gm, this.isPropagationStopped = gm, this;
  }
  return ft(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sl);
  }, persist: function() {
  }, isPersistent: Sl }), t;
}
var Di = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Lf = vn(Di), nl = ft({}, Di, { view: 0, detail: 0 }), X1 = vn(nl), yc, vc, Qi, eu = ft({}, nl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zf, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qi && (Qi && e.type === "mousemove" ? (yc = e.screenX - Qi.screenX, vc = e.screenY - Qi.screenY) : vc = yc = 0, Qi = e), yc);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : vc;
} }), ym = vn(eu), q1 = ft({}, eu, { dataTransfer: 0 }), Z1 = vn(q1), J1 = ft({}, nl, { relatedTarget: 0 }), xc = vn(J1), eS = ft({}, Di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), tS = vn(eS), nS = ft({}, Di, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), rS = vn(nS), oS = ft({}, Di, { data: 0 }), vm = vn(oS), iS = {
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
}, sS = {
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
}, lS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function aS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lS[e]) ? !!t[e] : !1;
}
function zf() {
  return aS;
}
var uS = ft({}, nl, { key: function(e) {
  if (e.key) {
    var t = iS[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ea(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? sS[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zf, charCode: function(e) {
  return e.type === "keypress" ? ea(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ea(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), cS = vn(uS), dS = ft({}, eu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), xm = vn(dS), fS = ft({}, nl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zf }), pS = vn(fS), mS = ft({}, Di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), hS = vn(mS), gS = ft({}, eu, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), yS = vn(gS), vS = [9, 13, 27, 32], Df = Rr && "CompositionEvent" in window, ms = null;
Rr && "documentMode" in document && (ms = document.documentMode);
var xS = Rr && "TextEvent" in window && !ms, zy = Rr && (!Df || ms && 8 < ms && 11 >= ms), Sm = " ", bm = !1;
function Dy(e, t) {
  switch (e) {
    case "keyup":
      return vS.indexOf(t.keyCode) !== -1;
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
function Fy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ti = !1;
function SS(e, t) {
  switch (e) {
    case "compositionend":
      return Fy(t);
    case "keypress":
      return t.which !== 32 ? null : (bm = !0, Sm);
    case "textInput":
      return e = t.data, e === Sm && bm ? null : e;
    default:
      return null;
  }
}
function bS(e, t) {
  if (ti) return e === "compositionend" || !Df && Dy(e, t) ? (e = Ly(), Jl = Nf = Ur = null, ti = !1, e) : null;
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
      return zy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wS[e.type] : t === "textarea";
}
function By(e, t, n, r) {
  yy(r), t = wa(t, "onChange"), 0 < t.length && (n = new Lf("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var hs = null, As = null;
function CS(e) {
  qy(e, 0);
}
function tu(e) {
  var t = oi(e);
  if (cy(t)) return e;
}
function kS(e, t) {
  if (e === "change") return t;
}
var _y = !1;
if (Rr) {
  var Sc;
  if (Rr) {
    var bc = "oninput" in document;
    if (!bc) {
      var Cm = document.createElement("div");
      Cm.setAttribute("oninput", "return;"), bc = typeof Cm.oninput == "function";
    }
    Sc = bc;
  } else Sc = !1;
  _y = Sc && (!document.documentMode || 9 < document.documentMode);
}
function km() {
  hs && (hs.detachEvent("onpropertychange", Wy), As = hs = null);
}
function Wy(e) {
  if (e.propertyName === "value" && tu(As)) {
    var t = [];
    By(t, As, e, If(e)), by(CS, t);
  }
}
function ES(e, t, n) {
  e === "focusin" ? (km(), hs = t, As = n, hs.attachEvent("onpropertychange", Wy)) : e === "focusout" && km();
}
function TS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return tu(As);
}
function PS(e, t) {
  if (e === "click") return tu(t);
}
function RS(e, t) {
  if (e === "input" || e === "change") return tu(t);
}
function MS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gn = typeof Object.is == "function" ? Object.is : MS;
function Ns(e, t) {
  if (Gn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Jc.call(t, o) || !Gn(e[o], t[o])) return !1;
  }
  return !0;
}
function Em(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tm(e, t) {
  var n = Em(e);
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
    n = Em(n);
  }
}
function Uy(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Uy(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Hy() {
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
function Ff(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function IS(e) {
  var t = Hy(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Uy(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ff(n)) {
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
var $S = Rr && "documentMode" in document && 11 >= document.documentMode, ni = null, vd = null, gs = null, xd = !1;
function Pm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xd || ni == null || ni !== ha(r) || (r = ni, "selectionStart" in r && Ff(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), gs && Ns(gs, r) || (gs = r, r = wa(vd, "onSelect"), 0 < r.length && (t = new Lf("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ni)));
}
function bl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ri = { animationend: bl("Animation", "AnimationEnd"), animationiteration: bl("Animation", "AnimationIteration"), animationstart: bl("Animation", "AnimationStart"), transitionend: bl("Transition", "TransitionEnd") }, wc = {}, Vy = {};
Rr && (Vy = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
function nu(e) {
  if (wc[e]) return wc[e];
  if (!ri[e]) return e;
  var t = ri[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vy) return wc[e] = t[n];
  return e;
}
var Ky = nu("animationend"), Yy = nu("animationiteration"), Qy = nu("animationstart"), Gy = nu("transitionend"), Xy = /* @__PURE__ */ new Map(), Rm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function io(e, t) {
  Xy.set(e, t), Do(t, [e]);
}
for (var Cc = 0; Cc < Rm.length; Cc++) {
  var kc = Rm[Cc], jS = kc.toLowerCase(), OS = kc[0].toUpperCase() + kc.slice(1);
  io(jS, "on" + OS);
}
io(Ky, "onAnimationEnd");
io(Yy, "onAnimationIteration");
io(Qy, "onAnimationStart");
io("dblclick", "onDoubleClick");
io("focusin", "onFocus");
io("focusout", "onBlur");
io(Gy, "onTransitionEnd");
Ci("onMouseEnter", ["mouseout", "mouseover"]);
Ci("onMouseLeave", ["mouseout", "mouseover"]);
Ci("onPointerEnter", ["pointerout", "pointerover"]);
Ci("onPointerLeave", ["pointerout", "pointerover"]);
Do("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Do("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Do("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Do("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Do("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Do("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), AS = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
function Mm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, j1(r, t, void 0, e), e.currentTarget = null;
}
function qy(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Mm(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Mm(o, l, u), i = a;
      }
    }
  }
  if (ya) throw e = md, ya = !1, md = null, e;
}
function ot(e, t) {
  var n = t[kd];
  n === void 0 && (n = t[kd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Zy(t, e, 2, !1), n.add(r));
}
function Ec(e, t, n) {
  var r = 0;
  t && (r |= 4), Zy(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function Ls(e) {
  if (!e[wl]) {
    e[wl] = !0, iy.forEach(function(n) {
      n !== "selectionchange" && (AS.has(n) || Ec(n, !1, e), Ec(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || (t[wl] = !0, Ec("selectionchange", !1, t));
  }
}
function Zy(e, t, n, r) {
  switch (Ny(t)) {
    case 1:
      var o = Q1;
      break;
    case 4:
      o = G1;
      break;
    default:
      o = Af;
  }
  n = o.bind(null, t, n, e), o = void 0, !pd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Tc(e, t, n, r, o) {
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
        if (s = bo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  by(function() {
    var u = i, d = If(n), h = [];
    e: {
      var v = Xy.get(e);
      if (v !== void 0) {
        var f = Lf, S = e;
        switch (e) {
          case "keypress":
            if (ea(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = cS;
            break;
          case "focusin":
            S = "focus", f = xc;
            break;
          case "focusout":
            S = "blur", f = xc;
            break;
          case "beforeblur":
          case "afterblur":
            f = xc;
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
            f = ym;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = Z1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = pS;
            break;
          case Ky:
          case Yy:
          case Qy:
            f = tS;
            break;
          case Gy:
            f = hS;
            break;
          case "scroll":
            f = X1;
            break;
          case "wheel":
            f = yS;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = rS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = xm;
        }
        var b = (t & 4) !== 0, C = !b && e === "scroll", g = b ? v !== null ? v + "Capture" : null : v;
        b = [];
        for (var m = u, x; m !== null; ) {
          x = m;
          var w = x.stateNode;
          if (x.tag === 5 && w !== null && (x = w, g !== null && (w = Is(m, g), w != null && b.push(zs(m, w, x)))), C) break;
          m = m.return;
        }
        0 < b.length && (v = new f(v, S, null, n, d), h.push({ event: v, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", v && n !== dd && (S = n.relatedTarget || n.fromElement) && (bo(S) || S[Mr])) break e;
        if ((f || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, f ? (S = n.relatedTarget || n.toElement, f = u, S = S ? bo(S) : null, S !== null && (C = Fo(S), S !== C || S.tag !== 5 && S.tag !== 6) && (S = null)) : (f = null, S = u), f !== S)) {
          if (b = ym, w = "onMouseLeave", g = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (b = xm, w = "onPointerLeave", g = "onPointerEnter", m = "pointer"), C = f == null ? v : oi(f), x = S == null ? v : oi(S), v = new b(w, m + "leave", f, n, d), v.target = C, v.relatedTarget = x, w = null, bo(d) === u && (b = new b(g, m + "enter", S, n, d), b.target = x, b.relatedTarget = C, w = b), C = w, f && S) t: {
            for (b = f, g = S, m = 0, x = b; x; x = Wo(x)) m++;
            for (x = 0, w = g; w; w = Wo(w)) x++;
            for (; 0 < m - x; ) b = Wo(b), m--;
            for (; 0 < x - m; ) g = Wo(g), x--;
            for (; m--; ) {
              if (b === g || g !== null && b === g.alternate) break t;
              b = Wo(b), g = Wo(g);
            }
            b = null;
          }
          else b = null;
          f !== null && Im(h, v, f, b, !1), S !== null && C !== null && Im(h, C, S, b, !0);
        }
      }
      e: {
        if (v = u ? oi(u) : window, f = v.nodeName && v.nodeName.toLowerCase(), f === "select" || f === "input" && v.type === "file") var E = kS;
        else if (wm(v)) if (_y) E = RS;
        else {
          E = TS;
          var k = ES;
        }
        else (f = v.nodeName) && f.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = PS);
        if (E && (E = E(e, u))) {
          By(h, E, n, d);
          break e;
        }
        k && k(e, v, u), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && sd(v, "number", v.value);
      }
      switch (k = u ? oi(u) : window, e) {
        case "focusin":
          (wm(k) || k.contentEditable === "true") && (ni = k, vd = u, gs = null);
          break;
        case "focusout":
          gs = vd = ni = null;
          break;
        case "mousedown":
          xd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xd = !1, Pm(h, n, d);
          break;
        case "selectionchange":
          if ($S) break;
        case "keydown":
        case "keyup":
          Pm(h, n, d);
      }
      var T;
      if (Df) e: {
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
      else ti ? Dy(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (zy && n.locale !== "ko" && (ti || P !== "onCompositionStart" ? P === "onCompositionEnd" && ti && (T = Ly()) : (Ur = d, Nf = "value" in Ur ? Ur.value : Ur.textContent, ti = !0)), k = wa(u, P), 0 < k.length && (P = new vm(P, e, null, n, d), h.push({ event: P, listeners: k }), T ? P.data = T : (T = Fy(n), T !== null && (P.data = T)))), (T = xS ? SS(e, n) : bS(e, n)) && (u = wa(u, "onBeforeInput"), 0 < u.length && (d = new vm("onBeforeInput", "beforeinput", null, n, d), h.push({ event: d, listeners: u }), d.data = T));
    }
    qy(h, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Is(e, n), i != null && r.unshift(zs(e, i, o)), i = Is(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
  }
  return r;
}
function Wo(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Im(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = Is(n, i), a != null && s.unshift(zs(n, a, l))) : o || (a = Is(n, i), a != null && s.push(zs(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var NS = /\r\n?/g, LS = /\u0000|\uFFFD/g;
function $m(e) {
  return (typeof e == "string" ? e : "" + e).replace(NS, `
`).replace(LS, "");
}
function Cl(e, t, n) {
  if (t = $m(t), $m(e) !== t && n) throw Error(V(425));
}
function Ca() {
}
var Sd = null, bd = null;
function wd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Cd = typeof setTimeout == "function" ? setTimeout : void 0, zS = typeof clearTimeout == "function" ? clearTimeout : void 0, jm = typeof Promise == "function" ? Promise : void 0, DS = typeof queueMicrotask == "function" ? queueMicrotask : typeof jm < "u" ? function(e) {
  return jm.resolve(null).then(e).catch(FS);
} : Cd;
function FS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Pc(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Os(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Os(t);
}
function Qr(e) {
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
function Om(e) {
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
var Fi = Math.random().toString(36).slice(2), or = "__reactFiber$" + Fi, Ds = "__reactProps$" + Fi, Mr = "__reactContainer$" + Fi, kd = "__reactEvents$" + Fi, BS = "__reactListeners$" + Fi, _S = "__reactHandles$" + Fi;
function bo(e) {
  var t = e[or];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Mr] || n[or]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Om(e); e !== null; ) {
        if (n = e[or]) return n;
        e = Om(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function rl(e) {
  return e = e[or] || e[Mr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(V(33));
}
function ru(e) {
  return e[Ds] || null;
}
var Ed = [], ii = -1;
function so(e) {
  return { current: e };
}
function st(e) {
  0 > ii || (e.current = Ed[ii], Ed[ii] = null, ii--);
}
function Ze(e, t) {
  ii++, Ed[ii] = e.current, e.current = t;
}
var to = {}, Vt = so(to), en = so(!1), Mo = to;
function ki(e, t) {
  var n = e.type.contextTypes;
  if (!n) return to;
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
  st(en), st(Vt);
}
function Am(e, t, n) {
  if (Vt.current !== to) throw Error(V(168));
  Ze(Vt, t), Ze(en, n);
}
function Jy(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(V(108, E1(e) || "Unknown", o));
  return ft({}, n, r);
}
function Ea(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || to, Mo = Vt.current, Ze(Vt, e), Ze(en, en.current), !0;
}
function Nm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(V(169));
  n ? (e = Jy(e, t, Mo), r.__reactInternalMemoizedMergedChildContext = e, st(en), st(Vt), Ze(Vt, e)) : st(en), Ze(en, n);
}
var Cr = null, ou = !1, Rc = !1;
function ev(e) {
  Cr === null ? Cr = [e] : Cr.push(e);
}
function WS(e) {
  ou = !0, ev(e);
}
function lo() {
  if (!Rc && Cr !== null) {
    Rc = !0;
    var e = 0, t = Ke;
    try {
      var n = Cr;
      for (Ke = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Cr = null, ou = !1;
    } catch (o) {
      throw Cr !== null && (Cr = Cr.slice(e + 1)), Ey($f, lo), o;
    } finally {
      Ke = t, Rc = !1;
    }
  }
  return null;
}
var si = [], li = 0, Ta = null, Pa = 0, kn = [], En = 0, Io = null, Er = 1, Tr = "";
function vo(e, t) {
  si[li++] = Pa, si[li++] = Ta, Ta = e, Pa = t;
}
function tv(e, t, n) {
  kn[En++] = Er, kn[En++] = Tr, kn[En++] = Io, Io = e;
  var r = Er;
  e = Tr;
  var o = 32 - Yn(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Yn(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Er = 1 << 32 - Yn(t) + o | n << o | r, Tr = i + e;
  } else Er = 1 << i | n << o | r, Tr = e;
}
function Bf(e) {
  e.return !== null && (vo(e, 1), tv(e, 1, 0));
}
function _f(e) {
  for (; e === Ta; ) Ta = si[--li], si[li] = null, Pa = si[--li], si[li] = null;
  for (; e === Io; ) Io = kn[--En], kn[En] = null, Tr = kn[--En], kn[En] = null, Er = kn[--En], kn[En] = null;
}
var pn = null, fn = null, at = !1, Kn = null;
function nv(e, t) {
  var n = Rn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Lm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = Qr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, pn = e, fn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Io !== null ? { id: Er, overflow: Tr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Rn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, pn = e, fn = null, !0) : !1;
    default:
      return !1;
  }
}
function Td(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pd(e) {
  if (at) {
    var t = fn;
    if (t) {
      var n = t;
      if (!Lm(e, t)) {
        if (Td(e)) throw Error(V(418));
        t = Qr(n.nextSibling);
        var r = pn;
        t && Lm(e, t) ? nv(r, n) : (e.flags = e.flags & -4097 | 2, at = !1, pn = e);
      }
    } else {
      if (Td(e)) throw Error(V(418));
      e.flags = e.flags & -4097 | 2, at = !1, pn = e;
    }
  }
}
function zm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  pn = e;
}
function kl(e) {
  if (e !== pn) return !1;
  if (!at) return zm(e), at = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wd(e.type, e.memoizedProps)), t && (t = fn)) {
    if (Td(e)) throw rv(), Error(V(418));
    for (; t; ) nv(e, t), t = Qr(t.nextSibling);
  }
  if (zm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(V(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              fn = Qr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      fn = null;
    }
  } else fn = pn ? Qr(e.stateNode.nextSibling) : null;
  return !0;
}
function rv() {
  for (var e = fn; e; ) e = Qr(e.nextSibling);
}
function Ei() {
  fn = pn = null, at = !1;
}
function Wf(e) {
  Kn === null ? Kn = [e] : Kn.push(e);
}
var US = Nr.ReactCurrentBatchConfig;
function Gi(e, t, n) {
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
function ov(e) {
  function t(g, m) {
    if (e) {
      var x = g.deletions;
      x === null ? (g.deletions = [m], g.flags |= 16) : x.push(m);
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
    return g = Zr(g, m), g.index = 0, g.sibling = null, g;
  }
  function i(g, m, x) {
    return g.index = x, e ? (x = g.alternate, x !== null ? (x = x.index, x < m ? (g.flags |= 2, m) : x) : (g.flags |= 2, m)) : (g.flags |= 1048576, m);
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, m, x, w) {
    return m === null || m.tag !== 6 ? (m = Nc(x, g.mode, w), m.return = g, m) : (m = o(m, x), m.return = g, m);
  }
  function a(g, m, x, w) {
    var E = x.type;
    return E === ei ? d(g, m, x.props.children, w, x.key) : m !== null && (m.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Fr && Dm(E) === m.type) ? (w = o(m, x.props), w.ref = Gi(g, m, x), w.return = g, w) : (w = la(x.type, x.key, x.props, null, g.mode, w), w.ref = Gi(g, m, x), w.return = g, w);
  }
  function u(g, m, x, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== x.containerInfo || m.stateNode.implementation !== x.implementation ? (m = Lc(x, g.mode, w), m.return = g, m) : (m = o(m, x.children || []), m.return = g, m);
  }
  function d(g, m, x, w, E) {
    return m === null || m.tag !== 7 ? (m = To(x, g.mode, w, E), m.return = g, m) : (m = o(m, x), m.return = g, m);
  }
  function h(g, m, x) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Nc("" + m, g.mode, x), m.return = g, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ml:
          return x = la(m.type, m.key, m.props, null, g.mode, x), x.ref = Gi(g, null, m), x.return = g, x;
        case Jo:
          return m = Lc(m, g.mode, x), m.return = g, m;
        case Fr:
          var w = m._init;
          return h(g, w(m._payload), x);
      }
      if (ls(m) || Hi(m)) return m = To(m, g.mode, x, null), m.return = g, m;
      El(g, m);
    }
    return null;
  }
  function v(g, m, x, w) {
    var E = m !== null ? m.key : null;
    if (typeof x == "string" && x !== "" || typeof x == "number") return E !== null ? null : l(g, m, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ml:
          return x.key === E ? a(g, m, x, w) : null;
        case Jo:
          return x.key === E ? u(g, m, x, w) : null;
        case Fr:
          return E = x._init, v(
            g,
            m,
            E(x._payload),
            w
          );
      }
      if (ls(x) || Hi(x)) return E !== null ? null : d(g, m, x, w, null);
      El(g, x);
    }
    return null;
  }
  function f(g, m, x, w, E) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return g = g.get(x) || null, l(m, g, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ml:
          return g = g.get(w.key === null ? x : w.key) || null, a(m, g, w, E);
        case Jo:
          return g = g.get(w.key === null ? x : w.key) || null, u(m, g, w, E);
        case Fr:
          var k = w._init;
          return f(g, m, x, k(w._payload), E);
      }
      if (ls(w) || Hi(w)) return g = g.get(x) || null, d(m, g, w, E, null);
      El(m, w);
    }
    return null;
  }
  function S(g, m, x, w) {
    for (var E = null, k = null, T = m, P = m = 0, M = null; T !== null && P < x.length; P++) {
      T.index > P ? (M = T, T = null) : M = T.sibling;
      var A = v(g, T, x[P], w);
      if (A === null) {
        T === null && (T = M);
        break;
      }
      e && T && A.alternate === null && t(g, T), m = i(A, m, P), k === null ? E = A : k.sibling = A, k = A, T = M;
    }
    if (P === x.length) return n(g, T), at && vo(g, P), E;
    if (T === null) {
      for (; P < x.length; P++) T = h(g, x[P], w), T !== null && (m = i(T, m, P), k === null ? E = T : k.sibling = T, k = T);
      return at && vo(g, P), E;
    }
    for (T = r(g, T); P < x.length; P++) M = f(T, g, P, x[P], w), M !== null && (e && M.alternate !== null && T.delete(M.key === null ? P : M.key), m = i(M, m, P), k === null ? E = M : k.sibling = M, k = M);
    return e && T.forEach(function(I) {
      return t(g, I);
    }), at && vo(g, P), E;
  }
  function b(g, m, x, w) {
    var E = Hi(x);
    if (typeof E != "function") throw Error(V(150));
    if (x = E.call(x), x == null) throw Error(V(151));
    for (var k = E = null, T = m, P = m = 0, M = null, A = x.next(); T !== null && !A.done; P++, A = x.next()) {
      T.index > P ? (M = T, T = null) : M = T.sibling;
      var I = v(g, T, A.value, w);
      if (I === null) {
        T === null && (T = M);
        break;
      }
      e && T && I.alternate === null && t(g, T), m = i(I, m, P), k === null ? E = I : k.sibling = I, k = I, T = M;
    }
    if (A.done) return n(
      g,
      T
    ), at && vo(g, P), E;
    if (T === null) {
      for (; !A.done; P++, A = x.next()) A = h(g, A.value, w), A !== null && (m = i(A, m, P), k === null ? E = A : k.sibling = A, k = A);
      return at && vo(g, P), E;
    }
    for (T = r(g, T); !A.done; P++, A = x.next()) A = f(T, g, P, A.value, w), A !== null && (e && A.alternate !== null && T.delete(A.key === null ? P : A.key), m = i(A, m, P), k === null ? E = A : k.sibling = A, k = A);
    return e && T.forEach(function(y) {
      return t(g, y);
    }), at && vo(g, P), E;
  }
  function C(g, m, x, w) {
    if (typeof x == "object" && x !== null && x.type === ei && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ml:
          e: {
            for (var E = x.key, k = m; k !== null; ) {
              if (k.key === E) {
                if (E = x.type, E === ei) {
                  if (k.tag === 7) {
                    n(g, k.sibling), m = o(k, x.props.children), m.return = g, g = m;
                    break e;
                  }
                } else if (k.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Fr && Dm(E) === k.type) {
                  n(g, k.sibling), m = o(k, x.props), m.ref = Gi(g, k, x), m.return = g, g = m;
                  break e;
                }
                n(g, k);
                break;
              } else t(g, k);
              k = k.sibling;
            }
            x.type === ei ? (m = To(x.props.children, g.mode, w, x.key), m.return = g, g = m) : (w = la(x.type, x.key, x.props, null, g.mode, w), w.ref = Gi(g, m, x), w.return = g, g = w);
          }
          return s(g);
        case Jo:
          e: {
            for (k = x.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === x.containerInfo && m.stateNode.implementation === x.implementation) {
                n(g, m.sibling), m = o(m, x.children || []), m.return = g, g = m;
                break e;
              } else {
                n(g, m);
                break;
              }
              else t(g, m);
              m = m.sibling;
            }
            m = Lc(x, g.mode, w), m.return = g, g = m;
          }
          return s(g);
        case Fr:
          return k = x._init, C(g, m, k(x._payload), w);
      }
      if (ls(x)) return S(g, m, x, w);
      if (Hi(x)) return b(g, m, x, w);
      El(g, x);
    }
    return typeof x == "string" && x !== "" || typeof x == "number" ? (x = "" + x, m !== null && m.tag === 6 ? (n(g, m.sibling), m = o(m, x), m.return = g, g = m) : (n(g, m), m = Nc(x, g.mode, w), m.return = g, g = m), s(g)) : n(g, m);
  }
  return C;
}
var Ti = ov(!0), iv = ov(!1), Ra = so(null), Ma = null, ai = null, Uf = null;
function Hf() {
  Uf = ai = Ma = null;
}
function Vf(e) {
  var t = Ra.current;
  st(Ra), e._currentValue = t;
}
function Rd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function vi(e, t) {
  Ma = e, Uf = ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Jt = !0), e.firstContext = null);
}
function $n(e) {
  var t = e._currentValue;
  if (Uf !== e) if (e = { context: e, memoizedValue: t, next: null }, ai === null) {
    if (Ma === null) throw Error(V(308));
    ai = e, Ma.dependencies = { lanes: 0, firstContext: e };
  } else ai = ai.next = e;
  return t;
}
var wo = null;
function Kf(e) {
  wo === null ? wo = [e] : wo.push(e);
}
function sv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Kf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Ir(e, r);
}
function Ir(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Br = !1;
function Yf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Pr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Gr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Oe & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Ir(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Kf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Ir(e, n);
}
function ta(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jf(e, n);
  }
}
function Fm(e, t) {
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
function Ia(e, t, n, r) {
  var o = e.updateQueue;
  Br = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var h = o.baseState;
    s = 0, d = u = a = null, l = i;
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
          var S = e, b = l;
          switch (v = t, f = n, b.tag) {
            case 1:
              if (S = b.payload, typeof S == "function") {
                h = S.call(f, h, v);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = b.payload, v = typeof S == "function" ? S.call(f, h, v) : S, v == null) break e;
              h = ft({}, h, v);
              break e;
            case 2:
              Br = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else f = { eventTime: f, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = f, a = h) : d = d.next = f, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = h), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    jo |= s, e.lanes = s, e.memoizedState = h;
  }
}
function Bm(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(V(191, o));
      o.call(r);
    }
  }
}
var ol = {}, ar = so(ol), Fs = so(ol), Bs = so(ol);
function Co(e) {
  if (e === ol) throw Error(V(174));
  return e;
}
function Qf(e, t) {
  switch (Ze(Bs, t), Ze(Fs, e), Ze(ar, ol), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ad(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ad(t, e);
  }
  st(ar), Ze(ar, t);
}
function Pi() {
  st(ar), st(Fs), st(Bs);
}
function av(e) {
  Co(Bs.current);
  var t = Co(ar.current), n = ad(t, e.type);
  t !== n && (Ze(Fs, e), Ze(ar, n));
}
function Gf(e) {
  Fs.current === e && (st(ar), st(Fs));
}
var ut = so(0);
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
var Mc = [];
function Xf() {
  for (var e = 0; e < Mc.length; e++) Mc[e]._workInProgressVersionPrimary = null;
  Mc.length = 0;
}
var na = Nr.ReactCurrentDispatcher, Ic = Nr.ReactCurrentBatchConfig, $o = 0, ct = null, Rt = null, jt = null, ja = !1, ys = !1, _s = 0, HS = 0;
function _t() {
  throw Error(V(321));
}
function qf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Gn(e[n], t[n])) return !1;
  return !0;
}
function Zf(e, t, n, r, o, i) {
  if ($o = i, ct = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, na.current = e === null || e.memoizedState === null ? QS : GS, e = n(r, o), ys) {
    i = 0;
    do {
      if (ys = !1, _s = 0, 25 <= i) throw Error(V(301));
      i += 1, jt = Rt = null, t.updateQueue = null, na.current = XS, e = n(r, o);
    } while (ys);
  }
  if (na.current = Oa, t = Rt !== null && Rt.next !== null, $o = 0, jt = Rt = ct = null, ja = !1, t) throw Error(V(300));
  return e;
}
function Jf() {
  var e = _s !== 0;
  return _s = 0, e;
}
function tr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return jt === null ? ct.memoizedState = jt = e : jt = jt.next = e, jt;
}
function jn() {
  if (Rt === null) {
    var e = ct.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Rt.next;
  var t = jt === null ? ct.memoizedState : jt.next;
  if (t !== null) jt = t, Rt = e;
  else {
    if (e === null) throw Error(V(310));
    Rt = e, e = { memoizedState: Rt.memoizedState, baseState: Rt.baseState, baseQueue: Rt.baseQueue, queue: Rt.queue, next: null }, jt === null ? ct.memoizedState = jt = e : jt = jt.next = e;
  }
  return jt;
}
function Ws(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function $c(e) {
  var t = jn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = Rt, o = r.baseQueue, i = n.pending;
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
      if (($o & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var h = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        a === null ? (l = a = h, s = r) : a = a.next = h, ct.lanes |= d, jo |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, Gn(r, t.memoizedState) || (Jt = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ct.lanes |= i, jo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function jc(e) {
  var t = jn(), n = t.queue;
  if (n === null) throw Error(V(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Gn(i, t.memoizedState) || (Jt = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function uv() {
}
function cv(e, t) {
  var n = ct, r = jn(), o = t(), i = !Gn(r.memoizedState, o);
  if (i && (r.memoizedState = o, Jt = !0), r = r.queue, ep(pv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || jt !== null && jt.memoizedState.tag & 1) {
    if (n.flags |= 2048, Us(9, fv.bind(null, n, r, o, t), void 0, null), Ot === null) throw Error(V(349));
    $o & 30 || dv(n, t, o);
  }
  return o;
}
function dv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function fv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, mv(t) && hv(e);
}
function pv(e, t, n) {
  return n(function() {
    mv(t) && hv(e);
  });
}
function mv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gn(e, n);
  } catch {
    return !0;
  }
}
function hv(e) {
  var t = Ir(e, 1);
  t !== null && Qn(t, e, 1, -1);
}
function _m(e) {
  var t = tr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ws, lastRenderedState: e }, t.queue = e, e = e.dispatch = YS.bind(null, ct, e), [t.memoizedState, e];
}
function Us(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ct.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ct.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function gv() {
  return jn().memoizedState;
}
function ra(e, t, n, r) {
  var o = tr();
  ct.flags |= e, o.memoizedState = Us(1 | t, n, void 0, r === void 0 ? null : r);
}
function iu(e, t, n, r) {
  var o = jn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Rt !== null) {
    var s = Rt.memoizedState;
    if (i = s.destroy, r !== null && qf(r, s.deps)) {
      o.memoizedState = Us(t, n, i, r);
      return;
    }
  }
  ct.flags |= e, o.memoizedState = Us(1 | t, n, i, r);
}
function Wm(e, t) {
  return ra(8390656, 8, e, t);
}
function ep(e, t) {
  return iu(2048, 8, e, t);
}
function yv(e, t) {
  return iu(4, 2, e, t);
}
function vv(e, t) {
  return iu(4, 4, e, t);
}
function xv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Sv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, iu(4, 4, xv.bind(null, t, e), n);
}
function tp() {
}
function bv(e, t) {
  var n = jn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qf(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function wv(e, t) {
  var n = jn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && qf(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Cv(e, t, n) {
  return $o & 21 ? (Gn(n, t) || (n = Ry(), ct.lanes |= n, jo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Jt = !0), e.memoizedState = n);
}
function VS(e, t) {
  var n = Ke;
  Ke = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Ic.transition;
  Ic.transition = {};
  try {
    e(!1), t();
  } finally {
    Ke = n, Ic.transition = r;
  }
}
function kv() {
  return jn().memoizedState;
}
function KS(e, t, n) {
  var r = qr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ev(e)) Tv(t, n);
  else if (n = sv(e, t, n, r), n !== null) {
    var o = Qt();
    Qn(n, e, r, o), Pv(n, t, r);
  }
}
function YS(e, t, n) {
  var r = qr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ev(e)) Tv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Gn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Kf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = sv(e, t, o, r), n !== null && (o = Qt(), Qn(n, e, r, o), Pv(n, t, r));
  }
}
function Ev(e) {
  var t = e.alternate;
  return e === ct || t !== null && t === ct;
}
function Tv(e, t) {
  ys = ja = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Pv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, jf(e, n);
  }
}
var Oa = { readContext: $n, useCallback: _t, useContext: _t, useEffect: _t, useImperativeHandle: _t, useInsertionEffect: _t, useLayoutEffect: _t, useMemo: _t, useReducer: _t, useRef: _t, useState: _t, useDebugValue: _t, useDeferredValue: _t, useTransition: _t, useMutableSource: _t, useSyncExternalStore: _t, useId: _t, unstable_isNewReconciler: !1 }, QS = { readContext: $n, useCallback: function(e, t) {
  return tr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: $n, useEffect: Wm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ra(
    4194308,
    4,
    xv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ra(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ra(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = tr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = tr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = KS.bind(null, ct, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = tr();
  return e = { current: e }, t.memoizedState = e;
}, useState: _m, useDebugValue: tp, useDeferredValue: function(e) {
  return tr().memoizedState = e;
}, useTransition: function() {
  var e = _m(!1), t = e[0];
  return e = VS.bind(null, e[1]), tr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ct, o = tr();
  if (at) {
    if (n === void 0) throw Error(V(407));
    n = n();
  } else {
    if (n = t(), Ot === null) throw Error(V(349));
    $o & 30 || dv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Wm(pv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Us(9, fv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = tr(), t = Ot.identifierPrefix;
  if (at) {
    var n = Tr, r = Er;
    n = (r & ~(1 << 32 - Yn(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _s++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = HS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, GS = {
  readContext: $n,
  useCallback: bv,
  useContext: $n,
  useEffect: ep,
  useImperativeHandle: Sv,
  useInsertionEffect: yv,
  useLayoutEffect: vv,
  useMemo: wv,
  useReducer: $c,
  useRef: gv,
  useState: function() {
    return $c(Ws);
  },
  useDebugValue: tp,
  useDeferredValue: function(e) {
    var t = jn();
    return Cv(t, Rt.memoizedState, e);
  },
  useTransition: function() {
    var e = $c(Ws)[0], t = jn().memoizedState;
    return [e, t];
  },
  useMutableSource: uv,
  useSyncExternalStore: cv,
  useId: kv,
  unstable_isNewReconciler: !1
}, XS = { readContext: $n, useCallback: bv, useContext: $n, useEffect: ep, useImperativeHandle: Sv, useInsertionEffect: yv, useLayoutEffect: vv, useMemo: wv, useReducer: jc, useRef: gv, useState: function() {
  return jc(Ws);
}, useDebugValue: tp, useDeferredValue: function(e) {
  var t = jn();
  return Rt === null ? t.memoizedState = e : Cv(t, Rt.memoizedState, e);
}, useTransition: function() {
  var e = jc(Ws)[0], t = jn().memoizedState;
  return [e, t];
}, useMutableSource: uv, useSyncExternalStore: cv, useId: kv, unstable_isNewReconciler: !1 };
function Hn(e, t) {
  if (e && e.defaultProps) {
    t = ft({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Md(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ft({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var su = { isMounted: function(e) {
  return (e = e._reactInternals) ? Fo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = qr(e), i = Pr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Gr(e, i, o), t !== null && (Qn(t, e, o, r), ta(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Qt(), o = qr(e), i = Pr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gr(e, i, o), t !== null && (Qn(t, e, o, r), ta(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Qt(), r = qr(e), o = Pr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Gr(e, o, r), t !== null && (Qn(t, e, r, n), ta(t, e, r));
} };
function Um(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ns(n, r) || !Ns(o, i) : !0;
}
function Rv(e, t, n) {
  var r = !1, o = to, i = t.contextType;
  return typeof i == "object" && i !== null ? i = $n(i) : (o = tn(t) ? Mo : Vt.current, r = t.contextTypes, i = (r = r != null) ? ki(e, o) : to), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = su, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Hm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && su.enqueueReplaceState(t, t.state, null);
}
function Id(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Yf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = $n(i) : (i = tn(t) ? Mo : Vt.current, o.context = ki(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Md(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && su.enqueueReplaceState(o, o.state, null), Ia(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ri(e, t) {
  try {
    var n = "", r = t;
    do
      n += k1(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Oc(e, t, n) {
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
var qS = typeof WeakMap == "function" ? WeakMap : Map;
function Mv(e, t, n) {
  n = Pr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Na || (Na = !0, _d = r), $d(e, t);
  }, n;
}
function Iv(e, t, n) {
  n = Pr(-1, n), n.tag = 3;
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
    $d(e, t), typeof r != "function" && (Xr === null ? Xr = /* @__PURE__ */ new Set([this]) : Xr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Vm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = db.bind(null, e, t, n), t.then(e, e));
}
function Km(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ym(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pr(-1, 1), t.tag = 2, Gr(n, t, 1))), n.lanes |= 1), e);
}
var ZS = Nr.ReactCurrentOwner, Jt = !1;
function Kt(e, t, n, r) {
  t.child = e === null ? iv(t, null, n, r) : Ti(t, e.child, n, r);
}
function Qm(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return vi(t, o), r = Zf(e, t, n, r, i, o), n = Jf(), e !== null && !Jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $r(e, t, o)) : (at && n && Bf(t), t.flags |= 1, Kt(e, t, r, o), t.child);
}
function Gm(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !up(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, $v(e, t, i, r, o)) : (e = la(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ns, n(s, r) && e.ref === t.ref) return $r(e, t, o);
  }
  return t.flags |= 1, e = Zr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function $v(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ns(i, r) && e.ref === t.ref) if (Jt = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Jt = !0);
    else return t.lanes = e.lanes, $r(e, t, o);
  }
  return jd(e, t, n, r, o);
}
function jv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ze(ci, an), an |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Ze(ci, an), an |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Ze(ci, an), an |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Ze(ci, an), an |= r;
  return Kt(e, t, o, n), t.child;
}
function Ov(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function jd(e, t, n, r, o) {
  var i = tn(n) ? Mo : Vt.current;
  return i = ki(t, i), vi(t, o), n = Zf(e, t, n, r, i, o), r = Jf(), e !== null && !Jt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, $r(e, t, o)) : (at && r && Bf(t), t.flags |= 1, Kt(e, t, n, o), t.child);
}
function Xm(e, t, n, r, o) {
  if (tn(n)) {
    var i = !0;
    Ea(t);
  } else i = !1;
  if (vi(t, o), t.stateNode === null) oa(e, t), Rv(t, n, r), Id(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = $n(u) : (u = tn(n) ? Mo : Vt.current, u = ki(t, u));
    var d = n.getDerivedStateFromProps, h = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    h || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && Hm(t, s, r, u), Br = !1;
    var v = t.memoizedState;
    s.state = v, Ia(t, r, s, o), a = t.memoizedState, l !== r || v !== a || en.current || Br ? (typeof d == "function" && (Md(t, n, d, r), a = t.memoizedState), (l = Br || Um(t, n, l, r, v, a, u)) ? (h || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, lv(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : Hn(t.type, l), s.props = u, h = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = $n(a) : (a = tn(n) ? Mo : Vt.current, a = ki(t, a));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== h || v !== a) && Hm(t, s, r, a), Br = !1, v = t.memoizedState, s.state = v, Ia(t, r, s, o);
    var S = t.memoizedState;
    l !== h || v !== S || en.current || Br ? (typeof f == "function" && (Md(t, n, f, r), S = t.memoizedState), (u = Br || Um(t, n, u, r, v, S, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, S, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, S, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), s.props = r, s.state = S, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Od(e, t, n, r, i, o);
}
function Od(e, t, n, r, o, i) {
  Ov(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Nm(t, n, !1), $r(e, t, i);
  r = t.stateNode, ZS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ti(t, e.child, null, i), t.child = Ti(t, null, l, i)) : Kt(e, t, l, i), t.memoizedState = r.state, o && Nm(t, n, !0), t.child;
}
function Av(e) {
  var t = e.stateNode;
  t.pendingContext ? Am(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Am(e, t.context, !1), Qf(e, t.containerInfo);
}
function qm(e, t, n, r, o) {
  return Ei(), Wf(o), t.flags |= 256, Kt(e, t, n, r), t.child;
}
var Ad = { dehydrated: null, treeContext: null, retryLane: 0 };
function Nd(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Nv(e, t, n) {
  var r = t.pendingProps, o = ut.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Ze(ut, o & 1), e === null)
    return Pd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = uu(s, r, 0, null), e = To(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Nd(n), t.memoizedState = Ad, e) : np(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return JS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Zr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Zr(l, i) : (i = To(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Nd(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Ad, r;
  }
  return i = e.child, e = i.sibling, r = Zr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function np(e, t) {
  return t = uu({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Tl(e, t, n, r) {
  return r !== null && Wf(r), Ti(t, e.child, null, n), e = np(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function JS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Oc(Error(V(422))), Tl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = uu({ mode: "visible", children: r.children }, o, 0, null), i = To(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ti(t, e.child, null, s), t.child.memoizedState = Nd(s), t.memoizedState = Ad, i);
  if (!(t.mode & 1)) return Tl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(V(419)), r = Oc(i, r, void 0), Tl(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Jt || l) {
    if (r = Ot, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Ir(e, o), Qn(r, e, o, -1));
    }
    return ap(), r = Oc(Error(V(421))), Tl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = fb.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, fn = Qr(o.nextSibling), pn = t, at = !0, Kn = null, e !== null && (kn[En++] = Er, kn[En++] = Tr, kn[En++] = Io, Er = e.id, Tr = e.overflow, Io = t), t = np(t, r.children), t.flags |= 4096, t);
}
function Zm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Rd(e.return, t, n);
}
function Ac(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Lv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Kt(e, t, r.children, n), r = ut.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Zm(e, n, t);
      else if (e.tag === 19) Zm(e, n, t);
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
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && $a(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Ac(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && $a(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Ac(t, !0, n, null, i);
      break;
    case "together":
      Ac(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function oa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $r(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(V(153));
  if (t.child !== null) {
    for (e = t.child, n = Zr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Zr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function eb(e, t, n) {
  switch (t.tag) {
    case 3:
      Av(t), Ei();
      break;
    case 5:
      av(t);
      break;
    case 1:
      tn(t.type) && Ea(t);
      break;
    case 4:
      Qf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      Ze(Ra, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Ze(ut, ut.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Nv(e, t, n) : (Ze(ut, ut.current & 1), e = $r(e, t, n), e !== null ? e.sibling : null);
      Ze(ut, ut.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Lv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ze(ut, ut.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, jv(e, t, n);
  }
  return $r(e, t, n);
}
var zv, Ld, Dv, Fv;
zv = function(e, t) {
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
Dv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Co(ar.current);
    var i = null;
    switch (n) {
      case "input":
        o = od(e, o), r = od(e, r), i = [];
        break;
      case "select":
        o = ft({}, o, { value: void 0 }), r = ft({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = ld(e, o), r = ld(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ca);
    }
    ud(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Rs.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o?.[u], r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        u,
        n
      )), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Rs.hasOwnProperty(u) ? (a != null && u === "onScroll" && ot("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Fv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xi(e, t) {
  if (!at) switch (e.tailMode) {
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
function Wt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function tb(e, t, n) {
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
      return Wt(t), null;
    case 1:
      return tn(t.type) && ka(), Wt(t), null;
    case 3:
      return r = t.stateNode, Pi(), st(en), st(Vt), Xf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Kn !== null && (Hd(Kn), Kn = null))), Ld(e, t), Wt(t), null;
    case 5:
      Gf(t);
      var o = Co(Bs.current);
      if (n = t.type, e !== null && t.stateNode != null) Dv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(V(166));
          return Wt(t), null;
        }
        if (e = Co(ar.current), kl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[or] = t, r[Ds] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              ot("cancel", r), ot("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ot("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < us.length; o++) ot(us[o], r);
              break;
            case "source":
              ot("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ot(
                "error",
                r
              ), ot("load", r);
              break;
            case "details":
              ot("toggle", r);
              break;
            case "input":
              lm(r, i), ot("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, ot("invalid", r);
              break;
            case "textarea":
              um(r, i), ot("invalid", r);
          }
          ud(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && Cl(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && Cl(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Rs.hasOwnProperty(s) && l != null && s === "onScroll" && ot("scroll", r);
          }
          switch (n) {
            case "input":
              hl(r), am(r, i, !0);
              break;
            case "textarea":
              hl(r), cm(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ca);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = py(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[or] = t, e[Ds] = r, zv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = cd(n, r), n) {
              case "dialog":
                ot("cancel", e), ot("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                ot("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < us.length; o++) ot(us[o], e);
                o = r;
                break;
              case "source":
                ot("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                ot(
                  "error",
                  e
                ), ot("load", e), o = r;
                break;
              case "details":
                ot("toggle", e), o = r;
                break;
              case "input":
                lm(e, r), o = od(e, r), ot("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ft({}, r, { value: void 0 }), ot("invalid", e);
                break;
              case "textarea":
                um(e, r), o = ld(e, r), ot("invalid", e);
                break;
              default:
                o = r;
            }
            ud(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? gy(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && my(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ms(e, a) : typeof a == "number" && Ms(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Rs.hasOwnProperty(i) ? a != null && i === "onScroll" && ot("scroll", e) : a != null && Tf(e, i, a, s));
            }
            switch (n) {
              case "input":
                hl(e), am(e, r, !1);
                break;
              case "textarea":
                hl(e), cm(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + eo(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? mi(e, !!r.multiple, i, !1) : r.defaultValue != null && mi(
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
      return Wt(t), null;
    case 6:
      if (e && t.stateNode != null) Fv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(V(166));
        if (n = Co(Bs.current), Co(ar.current), kl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[or] = t, (i = r.nodeValue !== n) && (e = pn, e !== null)) switch (e.tag) {
            case 3:
              Cl(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Cl(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[or] = t, t.stateNode = r;
      }
      return Wt(t), null;
    case 13:
      if (st(ut), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (at && fn !== null && t.mode & 1 && !(t.flags & 128)) rv(), Ei(), t.flags |= 98560, i = !1;
        else if (i = kl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(V(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(V(317));
            i[or] = t;
          } else Ei(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Wt(t), i = !1;
        } else Kn !== null && (Hd(Kn), Kn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ut.current & 1 ? Mt === 0 && (Mt = 3) : ap())), t.updateQueue !== null && (t.flags |= 4), Wt(t), null);
    case 4:
      return Pi(), Ld(e, t), e === null && Ls(t.stateNode.containerInfo), Wt(t), null;
    case 10:
      return Vf(t.type._context), Wt(t), null;
    case 17:
      return tn(t.type) && ka(), Wt(t), null;
    case 19:
      if (st(ut), i = t.memoizedState, i === null) return Wt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Xi(i, !1);
      else {
        if (Mt !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = $a(e), s !== null) {
            for (t.flags |= 128, Xi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Ze(ut, ut.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && xt() > Mi && (t.flags |= 128, r = !0, Xi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = $a(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Xi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !at) return Wt(t), null;
        } else 2 * xt() - i.renderingStartTime > Mi && n !== 1073741824 && (t.flags |= 128, r = !0, Xi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = xt(), t.sibling = null, n = ut.current, Ze(ut, r ? n & 1 | 2 : n & 1), t) : (Wt(t), null);
    case 22:
    case 23:
      return lp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? an & 1073741824 && (Wt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Wt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(V(156, t.tag));
}
function nb(e, t) {
  switch (_f(t), t.tag) {
    case 1:
      return tn(t.type) && ka(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Pi(), st(en), st(Vt), Xf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Gf(t), null;
    case 13:
      if (st(ut), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(V(340));
        Ei();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return st(ut), null;
    case 4:
      return Pi(), null;
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
var Pl = !1, Ht = !1, rb = typeof WeakSet == "function" ? WeakSet : Set, ee = null;
function ui(e, t) {
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
var Jm = !1;
function ob(e, t) {
  if (Sd = Sa, e = Hy(), Ff(e)) {
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
        var s = 0, l = -1, a = -1, u = 0, d = 0, h = e, v = null;
        t: for (; ; ) {
          for (var f; h !== n || o !== 0 && h.nodeType !== 3 || (l = s + o), h !== i || r !== 0 && h.nodeType !== 3 || (a = s + r), h.nodeType === 3 && (s += h.nodeValue.length), (f = h.firstChild) !== null; )
            v = h, h = f;
          for (; ; ) {
            if (h === e) break t;
            if (v === n && ++u === o && (l = s), v === i && ++d === r && (a = s), (f = h.nextSibling) !== null) break;
            h = v, v = h.parentNode;
          }
          h = f;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (bd = { focusedElem: e, selectionRange: n }, Sa = !1, ee = t; ee !== null; ) if (t = ee, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ee = e;
  else for (; ee !== null; ) {
    t = ee;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var b = S.memoizedProps, C = S.memoizedState, g = t.stateNode, m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Hn(t.type, b), C);
            g.__reactInternalSnapshotBeforeUpdate = m;
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
          throw Error(V(163));
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
  return S = Jm, Jm = !1, S;
}
function vs(e, t, n) {
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
function Dd(e) {
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
function Bv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Bv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[or], delete t[Ds], delete t[kd], delete t[BS], delete t[_S])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function _v(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function eh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || _v(e.return)) return null;
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
function Bd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bd(e, t, n), e = e.sibling; e !== null; ) Bd(e, t, n), e = e.sibling;
}
var Lt = null, Vn = !1;
function Dr(e, t, n) {
  for (n = n.child; n !== null; ) Wv(e, t, n), n = n.sibling;
}
function Wv(e, t, n) {
  if (lr && typeof lr.onCommitFiberUnmount == "function") try {
    lr.onCommitFiberUnmount(Ja, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Ht || ui(n, t);
    case 6:
      var r = Lt, o = Vn;
      Lt = null, Dr(e, t, n), Lt = r, Vn = o, Lt !== null && (Vn ? (e = Lt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Lt.removeChild(n.stateNode));
      break;
    case 18:
      Lt !== null && (Vn ? (e = Lt, n = n.stateNode, e.nodeType === 8 ? Pc(e.parentNode, n) : e.nodeType === 1 && Pc(e, n), Os(e)) : Pc(Lt, n.stateNode));
      break;
    case 4:
      r = Lt, o = Vn, Lt = n.stateNode.containerInfo, Vn = !0, Dr(e, t, n), Lt = r, Vn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ht && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && zd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Dr(e, t, n);
      break;
    case 1:
      if (!Ht && (ui(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        gt(n, t, l);
      }
      Dr(e, t, n);
      break;
    case 21:
      Dr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Ht = (r = Ht) || n.memoizedState !== null, Dr(e, t, n), Ht = r) : Dr(e, t, n);
      break;
    default:
      Dr(e, t, n);
  }
}
function th(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new rb()), t.forEach(function(r) {
      var o = pb.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Fn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Lt = l.stateNode, Vn = !1;
            break e;
          case 3:
            Lt = l.stateNode.containerInfo, Vn = !0;
            break e;
          case 4:
            Lt = l.stateNode.containerInfo, Vn = !0;
            break e;
        }
        l = l.return;
      }
      if (Lt === null) throw Error(V(160));
      Wv(i, s, o), Lt = null, Vn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      gt(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Uv(t, e), t = t.sibling;
}
function Uv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Fn(t, e), Zn(e), r & 4) {
        try {
          vs(3, e, e.return), lu(3, e);
        } catch (b) {
          gt(e, e.return, b);
        }
        try {
          vs(5, e, e.return);
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      break;
    case 1:
      Fn(t, e), Zn(e), r & 512 && n !== null && ui(n, n.return);
      break;
    case 5:
      if (Fn(t, e), Zn(e), r & 512 && n !== null && ui(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ms(o, "");
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && dy(o, i), cd(l, s);
          var u = cd(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], h = a[s + 1];
            d === "style" ? gy(o, h) : d === "dangerouslySetInnerHTML" ? my(o, h) : d === "children" ? Ms(o, h) : Tf(o, d, h, u);
          }
          switch (l) {
            case "input":
              id(o, i);
              break;
            case "textarea":
              fy(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? mi(o, !!i.multiple, f, !1) : v !== !!i.multiple && (i.defaultValue != null ? mi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : mi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[Ds] = i;
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Fn(t, e), Zn(e), r & 4) {
        if (e.stateNode === null) throw Error(V(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          gt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Fn(t, e), Zn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Os(t.containerInfo);
      } catch (b) {
        gt(e, e.return, b);
      }
      break;
    case 4:
      Fn(t, e), Zn(e);
      break;
    case 13:
      Fn(t, e), Zn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ip = xt())), r & 4 && th(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ht = (u = Ht) || d, Fn(t, e), Ht = u) : Fn(t, e), Zn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (ee = e, d = e.child; d !== null; ) {
          for (h = ee = d; ee !== null; ) {
            switch (v = ee, f = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                vs(4, v, v.return);
                break;
              case 1:
                ui(v, v.return);
                var S = v.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (b) {
                    gt(r, n, b);
                  }
                }
                break;
              case 5:
                ui(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  rh(h);
                  continue;
                }
            }
            f !== null ? (f.return = v, ee = f) : rh(h);
          }
          d = d.sibling;
        }
        e: for (d = null, h = e; ; ) {
          if (h.tag === 5) {
            if (d === null) {
              d = h;
              try {
                o = h.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = h.stateNode, a = h.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = hy("display", s));
              } catch (b) {
                gt(e, e.return, b);
              }
            }
          } else if (h.tag === 6) {
            if (d === null) try {
              h.stateNode.nodeValue = u ? "" : h.memoizedProps;
            } catch (b) {
              gt(e, e.return, b);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            d === h && (d = null), h = h.return;
          }
          d === h && (d = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Fn(t, e), Zn(e), r & 4 && th(e);
      break;
    case 21:
      break;
    default:
      Fn(
        t,
        e
      ), Zn(e);
  }
}
function Zn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_v(n)) {
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
          r.flags & 32 && (Ms(o, ""), r.flags &= -33);
          var i = eh(e);
          Bd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = eh(e);
          Fd(e, l, s);
          break;
        default:
          throw Error(V(161));
      }
    } catch (a) {
      gt(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ib(e, t, n) {
  ee = e, Hv(e);
}
function Hv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ee !== null; ) {
    var o = ee, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Pl;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Ht;
        l = Pl;
        var u = Ht;
        if (Pl = s, (Ht = a) && !u) for (ee = o; ee !== null; ) s = ee, a = s.child, s.tag === 22 && s.memoizedState !== null ? oh(o) : a !== null ? (a.return = s, ee = a) : oh(o);
        for (; i !== null; ) ee = i, Hv(i), i = i.sibling;
        ee = o, Pl = l, Ht = u;
      }
      nh(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, ee = i) : nh(e);
  }
}
function nh(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Ht || lu(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Ht) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Hn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Bm(t, i, r);
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
              Bm(t, s, n);
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
                  var h = d.dehydrated;
                  h !== null && Os(h);
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
        Ht || t.flags & 512 && Dd(t);
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
function rh(e) {
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
function oh(e) {
  for (; ee !== null; ) {
    var t = ee;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            lu(4, t);
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
            Dd(t);
          } catch (a) {
            gt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Dd(t);
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
var sb = Math.ceil, Aa = Nr.ReactCurrentDispatcher, rp = Nr.ReactCurrentOwner, Mn = Nr.ReactCurrentBatchConfig, Oe = 0, Ot = null, Et = null, Dt = 0, an = 0, ci = so(0), Mt = 0, Hs = null, jo = 0, au = 0, op = 0, xs = null, Zt = null, ip = 0, Mi = 1 / 0, wr = null, Na = !1, _d = null, Xr = null, Rl = !1, Hr = null, La = 0, Ss = 0, Wd = null, ia = -1, sa = 0;
function Qt() {
  return Oe & 6 ? xt() : ia !== -1 ? ia : ia = xt();
}
function qr(e) {
  return e.mode & 1 ? Oe & 2 && Dt !== 0 ? Dt & -Dt : US.transition !== null ? (sa === 0 && (sa = Ry()), sa) : (e = Ke, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ny(e.type)), e) : 1;
}
function Qn(e, t, n, r) {
  if (50 < Ss) throw Ss = 0, Wd = null, Error(V(185));
  tl(e, n, r), (!(Oe & 2) || e !== Ot) && (e === Ot && (!(Oe & 2) && (au |= n), Mt === 4 && Wr(e, Dt)), nn(e, r), n === 1 && Oe === 0 && !(t.mode & 1) && (Mi = xt() + 500, ou && lo()));
}
function nn(e, t) {
  var n = e.callbackNode;
  U1(e, t);
  var r = xa(e, e === Ot ? Dt : 0);
  if (r === 0) n !== null && pm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && pm(n), t === 1) e.tag === 0 ? WS(ih.bind(null, e)) : ev(ih.bind(null, e)), DS(function() {
      !(Oe & 6) && lo();
    }), n = null;
    else {
      switch (My(r)) {
        case 1:
          n = $f;
          break;
        case 4:
          n = Ty;
          break;
        case 16:
          n = va;
          break;
        case 536870912:
          n = Py;
          break;
        default:
          n = va;
      }
      n = Zv(n, Vv.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vv(e, t) {
  if (ia = -1, sa = 0, Oe & 6) throw Error(V(327));
  var n = e.callbackNode;
  if (xi() && e.callbackNode !== n) return null;
  var r = xa(e, e === Ot ? Dt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = za(e, r);
  else {
    t = r;
    var o = Oe;
    Oe |= 2;
    var i = Yv();
    (Ot !== e || Dt !== t) && (wr = null, Mi = xt() + 500, Eo(e, t));
    do
      try {
        ub();
        break;
      } catch (l) {
        Kv(e, l);
      }
    while (!0);
    Hf(), Aa.current = i, Oe = o, Et !== null ? t = 0 : (Ot = null, Dt = 0, t = Mt);
  }
  if (t !== 0) {
    if (t === 2 && (o = hd(e), o !== 0 && (r = o, t = Ud(e, o))), t === 1) throw n = Hs, Eo(e, 0), Wr(e, r), nn(e, xt()), n;
    if (t === 6) Wr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !lb(o) && (t = za(e, r), t === 2 && (i = hd(e), i !== 0 && (r = i, t = Ud(e, i))), t === 1)) throw n = Hs, Eo(e, 0), Wr(e, r), nn(e, xt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(V(345));
        case 2:
          xo(e, Zt, wr);
          break;
        case 3:
          if (Wr(e, r), (r & 130023424) === r && (t = ip + 500 - xt(), 10 < t)) {
            if (xa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Qt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Cd(xo.bind(null, e, Zt, wr), t);
            break;
          }
          xo(e, Zt, wr);
          break;
        case 4:
          if (Wr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Yn(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = xt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * sb(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Cd(xo.bind(null, e, Zt, wr), r);
            break;
          }
          xo(e, Zt, wr);
          break;
        case 5:
          xo(e, Zt, wr);
          break;
        default:
          throw Error(V(329));
      }
    }
  }
  return nn(e, xt()), e.callbackNode === n ? Vv.bind(null, e) : null;
}
function Ud(e, t) {
  var n = xs;
  return e.current.memoizedState.isDehydrated && (Eo(e, t).flags |= 256), e = za(e, t), e !== 2 && (t = Zt, Zt = n, t !== null && Hd(t)), e;
}
function Hd(e) {
  Zt === null ? Zt = e : Zt.push.apply(Zt, e);
}
function lb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Gn(i(), o)) return !1;
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
function Wr(e, t) {
  for (t &= ~op, t &= ~au, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Yn(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ih(e) {
  if (Oe & 6) throw Error(V(327));
  xi();
  var t = xa(e, 0);
  if (!(t & 1)) return nn(e, xt()), null;
  var n = za(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = hd(e);
    r !== 0 && (t = r, n = Ud(e, r));
  }
  if (n === 1) throw n = Hs, Eo(e, 0), Wr(e, t), nn(e, xt()), n;
  if (n === 6) throw Error(V(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xo(e, Zt, wr), nn(e, xt()), null;
}
function sp(e, t) {
  var n = Oe;
  Oe |= 1;
  try {
    return e(t);
  } finally {
    Oe = n, Oe === 0 && (Mi = xt() + 500, ou && lo());
  }
}
function Oo(e) {
  Hr !== null && Hr.tag === 0 && !(Oe & 6) && xi();
  var t = Oe;
  Oe |= 1;
  var n = Mn.transition, r = Ke;
  try {
    if (Mn.transition = null, Ke = 1, e) return e();
  } finally {
    Ke = r, Mn.transition = n, Oe = t, !(Oe & 6) && lo();
  }
}
function lp() {
  an = ci.current, st(ci);
}
function Eo(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, zS(n)), Et !== null) for (n = Et.return; n !== null; ) {
    var r = n;
    switch (_f(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ka();
        break;
      case 3:
        Pi(), st(en), st(Vt), Xf();
        break;
      case 5:
        Gf(r);
        break;
      case 4:
        Pi();
        break;
      case 13:
        st(ut);
        break;
      case 19:
        st(ut);
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
  if (Ot = e, Et = e = Zr(e.current, null), Dt = an = t, Mt = 0, Hs = null, op = au = jo = 0, Zt = xs = null, wo !== null) {
    for (t = 0; t < wo.length; t++) if (n = wo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    wo = null;
  }
  return e;
}
function Kv(e, t) {
  do {
    var n = Et;
    try {
      if (Hf(), na.current = Oa, ja) {
        for (var r = ct.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ja = !1;
      }
      if ($o = 0, jt = Rt = ct = null, ys = !1, _s = 0, rp.current = null, n === null || n.return === null) {
        Mt = 1, Hs = t, Et = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Dt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, h = d.tag;
          if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = Km(s);
          if (f !== null) {
            f.flags &= -257, Ym(f, s, l, i, t), f.mode & 1 && Vm(i, u, t), t = f, a = u;
            var S = t.updateQueue;
            if (S === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(a), t.updateQueue = b;
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Vm(i, u, t), ap();
              break e;
            }
            a = Error(V(426));
          }
        } else if (at && l.mode & 1) {
          var C = Km(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), Ym(C, s, l, i, t), Wf(Ri(a, l));
            break e;
          }
        }
        i = a = Ri(a, l), Mt !== 4 && (Mt = 2), xs === null ? xs = [i] : xs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Mv(i, a, t);
              Fm(i, g);
              break e;
            case 1:
              l = a;
              var m = i.type, x = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || x !== null && typeof x.componentDidCatch == "function" && (Xr === null || !Xr.has(x)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Iv(i, l, t);
                Fm(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gv(n);
    } catch (E) {
      t = E, Et === n && n !== null && (Et = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yv() {
  var e = Aa.current;
  return Aa.current = Oa, e === null ? Oa : e;
}
function ap() {
  (Mt === 0 || Mt === 3 || Mt === 2) && (Mt = 4), Ot === null || !(jo & 268435455) && !(au & 268435455) || Wr(Ot, Dt);
}
function za(e, t) {
  var n = Oe;
  Oe |= 2;
  var r = Yv();
  (Ot !== e || Dt !== t) && (wr = null, Eo(e, t));
  do
    try {
      ab();
      break;
    } catch (o) {
      Kv(e, o);
    }
  while (!0);
  if (Hf(), Oe = n, Aa.current = r, Et !== null) throw Error(V(261));
  return Ot = null, Dt = 0, Mt;
}
function ab() {
  for (; Et !== null; ) Qv(Et);
}
function ub() {
  for (; Et !== null && !A1(); ) Qv(Et);
}
function Qv(e) {
  var t = qv(e.alternate, e, an);
  e.memoizedProps = e.pendingProps, t === null ? Gv(e) : Et = t, rp.current = null;
}
function Gv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = nb(n, t), n !== null) {
        n.flags &= 32767, Et = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Mt = 6, Et = null;
        return;
      }
    } else if (n = tb(n, t, an), n !== null) {
      Et = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Et = t;
      return;
    }
    Et = t = e;
  } while (t !== null);
  Mt === 0 && (Mt = 5);
}
function xo(e, t, n) {
  var r = Ke, o = Mn.transition;
  try {
    Mn.transition = null, Ke = 1, cb(e, t, n, r);
  } finally {
    Mn.transition = o, Ke = r;
  }
  return null;
}
function cb(e, t, n, r) {
  do
    xi();
  while (Hr !== null);
  if (Oe & 6) throw Error(V(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(V(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (H1(e, i), e === Ot && (Et = Ot = null, Dt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Rl || (Rl = !0, Zv(va, function() {
    return xi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Mn.transition, Mn.transition = null;
    var s = Ke;
    Ke = 1;
    var l = Oe;
    Oe |= 4, rp.current = null, ob(e, n), Uv(n, e), IS(bd), Sa = !!Sd, bd = Sd = null, e.current = n, ib(n), N1(), Oe = l, Ke = s, Mn.transition = i;
  } else e.current = n;
  if (Rl && (Rl = !1, Hr = e, La = o), i = e.pendingLanes, i === 0 && (Xr = null), D1(n.stateNode), nn(e, xt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Na) throw Na = !1, e = _d, _d = null, e;
  return La & 1 && e.tag !== 0 && xi(), i = e.pendingLanes, i & 1 ? e === Wd ? Ss++ : (Ss = 0, Wd = e) : Ss = 0, lo(), null;
}
function xi() {
  if (Hr !== null) {
    var e = My(La), t = Mn.transition, n = Ke;
    try {
      if (Mn.transition = null, Ke = 16 > e ? 16 : e, Hr === null) var r = !1;
      else {
        if (e = Hr, Hr = null, La = 0, Oe & 6) throw Error(V(331));
        var o = Oe;
        for (Oe |= 4, ee = e.current; ee !== null; ) {
          var i = ee, s = i.child;
          if (ee.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (ee = u; ee !== null; ) {
                  var d = ee;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vs(8, d, i);
                  }
                  var h = d.child;
                  if (h !== null) h.return = d, ee = h;
                  else for (; ee !== null; ) {
                    d = ee;
                    var v = d.sibling, f = d.return;
                    if (Bv(d), d === u) {
                      ee = null;
                      break;
                    }
                    if (v !== null) {
                      v.return = f, ee = v;
                      break;
                    }
                    ee = f;
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
              ee = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, ee = s;
          else e: for (; ee !== null; ) {
            if (i = ee, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                vs(9, i, i.return);
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, ee = g;
              break e;
            }
            ee = i.return;
          }
        }
        var m = e.current;
        for (ee = m; ee !== null; ) {
          s = ee;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) x.return = s, ee = x;
          else e: for (s = m; ee !== null; ) {
            if (l = ee, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  lu(9, l);
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
        if (Oe = o, lo(), lr && typeof lr.onPostCommitFiberRoot == "function") try {
          lr.onPostCommitFiberRoot(Ja, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ke = n, Mn.transition = t;
    }
  }
  return !1;
}
function sh(e, t, n) {
  t = Ri(n, t), t = Mv(e, t, 1), e = Gr(e, t, 1), t = Qt(), e !== null && (tl(e, 1, t), nn(e, t));
}
function gt(e, t, n) {
  if (e.tag === 3) sh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      sh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xr === null || !Xr.has(r))) {
        e = Ri(n, e), e = Iv(t, e, 1), t = Gr(t, e, 1), e = Qt(), t !== null && (tl(t, 1, e), nn(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function db(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Qt(), e.pingedLanes |= e.suspendedLanes & n, Ot === e && (Dt & n) === n && (Mt === 4 || Mt === 3 && (Dt & 130023424) === Dt && 500 > xt() - ip ? Eo(e, 0) : op |= n), nn(e, t);
}
function Xv(e, t) {
  t === 0 && (e.mode & 1 ? (t = vl, vl <<= 1, !(vl & 130023424) && (vl = 4194304)) : t = 1);
  var n = Qt();
  e = Ir(e, t), e !== null && (tl(e, t, n), nn(e, n));
}
function fb(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Xv(e, n);
}
function pb(e, t) {
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
  r !== null && r.delete(t), Xv(e, n);
}
var qv;
qv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || en.current) Jt = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Jt = !1, eb(e, t, n);
    Jt = !!(e.flags & 131072);
  }
  else Jt = !1, at && t.flags & 1048576 && tv(t, Pa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      oa(e, t), e = t.pendingProps;
      var o = ki(t, Vt.current);
      vi(t, n), o = Zf(null, t, r, e, o, n);
      var i = Jf();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, tn(r) ? (i = !0, Ea(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Yf(t), o.updater = su, t.stateNode = o, o._reactInternals = t, Id(t, r, e, n), t = Od(null, t, r, !0, i, n)) : (t.tag = 0, at && i && Bf(t), Kt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (oa(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = hb(r), e = Hn(r, e), o) {
          case 0:
            t = jd(null, t, r, e, n);
            break e;
          case 1:
            t = Xm(null, t, r, e, n);
            break e;
          case 11:
            t = Qm(null, t, r, e, n);
            break e;
          case 14:
            t = Gm(null, t, r, Hn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Hn(r, o), jd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Hn(r, o), Xm(e, t, r, o, n);
    case 3:
      e: {
        if (Av(t), e === null) throw Error(V(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, lv(e, t), Ia(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ri(Error(V(423)), t), t = qm(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ri(Error(V(424)), t), t = qm(e, t, r, n, o);
          break e;
        } else for (fn = Qr(t.stateNode.containerInfo.firstChild), pn = t, at = !0, Kn = null, n = iv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ei(), r === o) {
            t = $r(e, t, n);
            break e;
          }
          Kt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return av(t), e === null && Pd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, wd(r, o) ? s = null : i !== null && wd(r, i) && (t.flags |= 32), Ov(e, t), Kt(e, t, s, n), t.child;
    case 6:
      return e === null && Pd(t), null;
    case 13:
      return Nv(e, t, n);
    case 4:
      return Qf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ti(t, null, r, n) : Kt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Hn(r, o), Qm(e, t, r, o, n);
    case 7:
      return Kt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Kt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Kt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Ze(Ra, r._currentValue), r._currentValue = s, i !== null) if (Gn(i.value, s)) {
          if (i.children === o.children && !en.current) {
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
                  a = Pr(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Rd(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), Rd(s, n, t), s = i.sibling;
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
        Kt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, vi(t, n), o = $n(o), r = r(o), t.flags |= 1, Kt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Hn(r, t.pendingProps), o = Hn(r.type, o), Gm(e, t, r, o, n);
    case 15:
      return $v(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Hn(r, o), oa(e, t), t.tag = 1, tn(r) ? (e = !0, Ea(t)) : e = !1, vi(t, n), Rv(t, r, o), Id(t, r, o, n), Od(null, t, r, !0, e, n);
    case 19:
      return Lv(e, t, n);
    case 22:
      return jv(e, t, n);
  }
  throw Error(V(156, t.tag));
};
function Zv(e, t) {
  return Ey(e, t);
}
function mb(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Rn(e, t, n, r) {
  return new mb(e, t, n, r);
}
function up(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function hb(e) {
  if (typeof e == "function") return up(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Rf) return 11;
    if (e === Mf) return 14;
  }
  return 2;
}
function Zr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Rn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function la(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") up(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ei:
      return To(n.children, o, i, t);
    case Pf:
      s = 8, o |= 8;
      break;
    case ed:
      return e = Rn(12, n, t, o | 2), e.elementType = ed, e.lanes = i, e;
    case td:
      return e = Rn(13, n, t, o), e.elementType = td, e.lanes = i, e;
    case nd:
      return e = Rn(19, n, t, o), e.elementType = nd, e.lanes = i, e;
    case ay:
      return uu(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case sy:
          s = 10;
          break e;
        case ly:
          s = 9;
          break e;
        case Rf:
          s = 11;
          break e;
        case Mf:
          s = 14;
          break e;
        case Fr:
          s = 16, r = null;
          break e;
      }
      throw Error(V(130, e == null ? e : typeof e, ""));
  }
  return t = Rn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function To(e, t, n, r) {
  return e = Rn(7, e, r, t), e.lanes = n, e;
}
function uu(e, t, n, r) {
  return e = Rn(22, e, r, t), e.elementType = ay, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Nc(e, t, n) {
  return e = Rn(6, e, null, t), e.lanes = n, e;
}
function Lc(e, t, n) {
  return t = Rn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function gb(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = gc(0), this.expirationTimes = gc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gc(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function cp(e, t, n, r, o, i, s, l, a) {
  return e = new gb(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Rn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Yf(i), e;
}
function yb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Jv(e) {
  if (!e) return to;
  e = e._reactInternals;
  e: {
    if (Fo(e) !== e || e.tag !== 1) throw Error(V(170));
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
    if (tn(n)) return Jy(e, n, t);
  }
  return t;
}
function e0(e, t, n, r, o, i, s, l, a) {
  return e = cp(n, r, !0, e, o, i, s, l, a), e.context = Jv(null), n = e.current, r = Qt(), o = qr(n), i = Pr(r, o), i.callback = t ?? null, Gr(n, i, o), e.current.lanes = o, tl(e, o, r), nn(e, r), e;
}
function cu(e, t, n, r) {
  var o = t.current, i = Qt(), s = qr(o);
  return n = Jv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gr(o, t, s), e !== null && (Qn(e, o, s, i), ta(e, o, s)), s;
}
function Da(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function dp(e, t) {
  lh(e, t), (e = e.alternate) && lh(e, t);
}
function vb() {
  return null;
}
var t0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function fp(e) {
  this._internalRoot = e;
}
du.prototype.render = fp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(V(409));
  cu(e, t, null, null);
};
du.prototype.unmount = fp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Oo(function() {
      cu(null, e, null, null);
    }), t[Mr] = null;
  }
};
function du(e) {
  this._internalRoot = e;
}
du.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = jy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < _r.length && t !== 0 && t < _r[n].priority; n++) ;
    _r.splice(n, 0, e), n === 0 && Ay(e);
  }
};
function pp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function fu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ah() {
}
function xb(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = Da(s);
        i.call(u);
      };
    }
    var s = e0(t, r, e, 0, null, !1, !1, "", ah);
    return e._reactRootContainer = s, e[Mr] = s.current, Ls(e.nodeType === 8 ? e.parentNode : e), Oo(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = Da(a);
      l.call(u);
    };
  }
  var a = cp(e, 0, !1, null, null, !1, !1, "", ah);
  return e._reactRootContainer = a, e[Mr] = a.current, Ls(e.nodeType === 8 ? e.parentNode : e), Oo(function() {
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
        var a = Da(s);
        l.call(a);
      };
    }
    cu(t, s, e, o);
  } else s = xb(n, t, e, o, r);
  return Da(s);
}
Iy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = as(t.pendingLanes);
        n !== 0 && (jf(t, n | 1), nn(t, xt()), !(Oe & 6) && (Mi = xt() + 500, lo()));
      }
      break;
    case 13:
      Oo(function() {
        var r = Ir(e, 1);
        if (r !== null) {
          var o = Qt();
          Qn(r, e, 1, o);
        }
      }), dp(e, 1);
  }
};
Of = function(e) {
  if (e.tag === 13) {
    var t = Ir(e, 134217728);
    if (t !== null) {
      var n = Qt();
      Qn(t, e, 134217728, n);
    }
    dp(e, 134217728);
  }
};
$y = function(e) {
  if (e.tag === 13) {
    var t = qr(e), n = Ir(e, t);
    if (n !== null) {
      var r = Qt();
      Qn(n, e, t, r);
    }
    dp(e, t);
  }
};
jy = function() {
  return Ke;
};
Oy = function(e, t) {
  var n = Ke;
  try {
    return Ke = e, t();
  } finally {
    Ke = n;
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
            var o = ru(r);
            if (!o) throw Error(V(90));
            cy(r), id(r, o);
          }
        }
      }
      break;
    case "textarea":
      fy(e, n);
      break;
    case "select":
      t = n.value, t != null && mi(e, !!n.multiple, t, !1);
  }
};
xy = sp;
Sy = Oo;
var Sb = { usingClientEntryPoint: !1, Events: [rl, oi, ru, yy, vy, sp] }, qi = { findFiberByHostInstance: bo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, bb = { bundleType: qi.bundleType, version: qi.version, rendererPackageName: qi.rendererPackageName, rendererConfig: qi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nr.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Cy(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qi.findFiberByHostInstance || vb, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ml = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ml.isDisabled && Ml.supportsFiber) try {
    Ja = Ml.inject(bb), lr = Ml;
  } catch {
  }
}
yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sb;
yn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pp(t)) throw Error(V(200));
  return yb(e, t, null, n);
};
yn.createRoot = function(e, t) {
  if (!pp(e)) throw Error(V(299));
  var n = !1, r = "", o = t0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = cp(e, 1, !1, null, null, n, !1, r, o), e[Mr] = t.current, Ls(e.nodeType === 8 ? e.parentNode : e), new fp(t);
};
yn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(V(188)) : (e = Object.keys(e).join(","), Error(V(268, e)));
  return e = Cy(t), e = e === null ? null : e.stateNode, e;
};
yn.flushSync = function(e) {
  return Oo(e);
};
yn.hydrate = function(e, t, n) {
  if (!fu(t)) throw Error(V(200));
  return pu(null, e, t, !0, n);
};
yn.hydrateRoot = function(e, t, n) {
  if (!pp(e)) throw Error(V(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = t0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = e0(t, null, e, 1, n ?? null, o, !1, i, s), e[Mr] = t.current, Ls(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new du(t);
};
yn.render = function(e, t, n) {
  if (!fu(t)) throw Error(V(200));
  return pu(null, e, t, !1, n);
};
yn.unmountComponentAtNode = function(e) {
  if (!fu(e)) throw Error(V(40));
  return e._reactRootContainer ? (Oo(function() {
    pu(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Mr] = null;
    });
  }), !0) : !1;
};
yn.unstable_batchedUpdates = sp;
yn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!fu(n)) throw Error(V(200));
  if (e == null || e._reactInternals === void 0) throw Error(V(38));
  return pu(e, t, n, !1, r);
};
yn.version = "18.3.1-next-f1338f8080-20240426";
function n0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0);
    } catch (e) {
      console.error(e);
    }
}
n0(), ny.exports = yn;
var r0 = ny.exports, o0, uh = r0;
o0 = uh.createRoot, uh.hydrateRoot;
const Vs = {
  black: "#000",
  white: "#fff"
}, Uo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ho = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Vo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ko = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Yo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Zi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, wb = {
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
const ur = "$$material";
function Vd() {
  return Vd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Vd.apply(null, arguments);
}
function Cb(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function kb(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Eb = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(kb(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Cb(o);
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
}(), Ut = "-ms-", Fa = "-moz-", De = "-webkit-", i0 = "comm", mp = "rule", hp = "decl", Tb = "@import", s0 = "@keyframes", Pb = "@layer", Rb = Math.abs, mu = String.fromCharCode, Mb = Object.assign;
function Ib(e, t) {
  return zt(e, 0) ^ 45 ? (((t << 2 ^ zt(e, 0)) << 2 ^ zt(e, 1)) << 2 ^ zt(e, 2)) << 2 ^ zt(e, 3) : 0;
}
function l0(e) {
  return e.trim();
}
function $b(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Fe(e, t, n) {
  return e.replace(t, n);
}
function Kd(e, t) {
  return e.indexOf(t);
}
function zt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ks(e, t, n) {
  return e.slice(t, n);
}
function nr(e) {
  return e.length;
}
function gp(e) {
  return e.length;
}
function Il(e, t) {
  return t.push(e), e;
}
function jb(e, t) {
  return e.map(t).join("");
}
var hu = 1, Ii = 1, a0 = 0, sn = 0, kt = 0, Bi = "";
function gu(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: hu, column: Ii, length: s, return: "" };
}
function Ji(e, t) {
  return Mb(gu("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ob() {
  return kt;
}
function Ab() {
  return kt = sn > 0 ? zt(Bi, --sn) : 0, Ii--, kt === 10 && (Ii = 1, hu--), kt;
}
function mn() {
  return kt = sn < a0 ? zt(Bi, sn++) : 0, Ii++, kt === 10 && (Ii = 1, hu++), kt;
}
function cr() {
  return zt(Bi, sn);
}
function aa() {
  return sn;
}
function il(e, t) {
  return Ks(Bi, e, t);
}
function Ys(e) {
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
function u0(e) {
  return hu = Ii = 1, a0 = nr(Bi = e), sn = 0, [];
}
function c0(e) {
  return Bi = "", e;
}
function ua(e) {
  return l0(il(sn - 1, Yd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Nb(e) {
  for (; (kt = cr()) && kt < 33; )
    mn();
  return Ys(e) > 2 || Ys(kt) > 3 ? "" : " ";
}
function Lb(e, t) {
  for (; --t && mn() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
    ;
  return il(e, aa() + (t < 6 && cr() == 32 && mn() == 32));
}
function Yd(e) {
  for (; mn(); )
    switch (kt) {
      case e:
        return sn;
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
  return sn;
}
function zb(e, t) {
  for (; mn() && e + kt !== 57; )
    if (e + kt === 84 && cr() === 47)
      break;
  return "/*" + il(t, sn - 1) + "*" + mu(e === 47 ? e : mn());
}
function Db(e) {
  for (; !Ys(cr()); )
    mn();
  return il(e, sn);
}
function Fb(e) {
  return c0(ca("", null, null, null, [""], e = u0(e), 0, [0], e));
}
function ca(e, t, n, r, o, i, s, l, a) {
  for (var u = 0, d = 0, h = s, v = 0, f = 0, S = 0, b = 1, C = 1, g = 1, m = 0, x = "", w = o, E = i, k = r, T = x; C; )
    switch (S = m, m = mn()) {
      case 40:
        if (S != 108 && zt(T, h - 1) == 58) {
          Kd(T += Fe(ua(m), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += ua(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Nb(S);
        break;
      case 92:
        T += Lb(aa() - 1, 7);
        continue;
      case 47:
        switch (cr()) {
          case 42:
          case 47:
            Il(Bb(zb(mn(), aa()), t, n), a);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * b:
        l[u++] = nr(T) * g;
      case 125 * b:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            g == -1 && (T = Fe(T, /\f/g, "")), f > 0 && nr(T) - h && Il(f > 32 ? dh(T + ";", r, n, h - 1) : dh(Fe(T, " ", "") + ";", r, n, h - 2), a);
            break;
          case 59:
            T += ";";
          default:
            if (Il(k = ch(T, t, n, u, d, o, l, x, w = [], E = [], h), i), m === 123)
              if (d === 0)
                ca(T, t, k, k, w, i, h, l, E);
              else
                switch (v === 99 && zt(T, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ca(e, k, k, r && Il(ch(e, k, k, 0, 0, o, l, x, o, w = [], h), E), o, E, h, l, r ? w : E);
                    break;
                  default:
                    ca(T, k, k, k, [""], E, 0, l, E);
                }
        }
        u = d = f = 0, b = g = 1, x = T = "", h = s;
        break;
      case 58:
        h = 1 + nr(T), f = S;
      default:
        if (b < 1) {
          if (m == 123)
            --b;
          else if (m == 125 && b++ == 0 && Ab() == 125)
            continue;
        }
        switch (T += mu(m), m * b) {
          case 38:
            g = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[u++] = (nr(T) - 1) * g, g = 1;
            break;
          case 64:
            cr() === 45 && (T += ua(mn())), v = cr(), d = h = nr(x = T += Db(aa())), m++;
            break;
          case 45:
            S === 45 && nr(T) == 2 && (b = 0);
        }
    }
  return i;
}
function ch(e, t, n, r, o, i, s, l, a, u, d) {
  for (var h = o - 1, v = o === 0 ? i : [""], f = gp(v), S = 0, b = 0, C = 0; S < r; ++S)
    for (var g = 0, m = Ks(e, h + 1, h = Rb(b = s[S])), x = e; g < f; ++g)
      (x = l0(b > 0 ? v[g] + " " + m : Fe(m, /&\f/g, v[g]))) && (a[C++] = x);
  return gu(e, t, n, o === 0 ? mp : l, a, u, d);
}
function Bb(e, t, n) {
  return gu(e, t, n, i0, mu(Ob()), Ks(e, 2, -2), 0);
}
function dh(e, t, n, r) {
  return gu(e, t, n, hp, Ks(e, 0, r), Ks(e, r + 1, -1), r);
}
function Si(e, t) {
  for (var n = "", r = gp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function _b(e, t, n, r) {
  switch (e.type) {
    case Pb:
      if (e.children.length) break;
    case Tb:
    case hp:
      return e.return = e.return || e.value;
    case i0:
      return "";
    case s0:
      return e.return = e.value + "{" + Si(e.children, r) + "}";
    case mp:
      e.value = e.props.join(",");
  }
  return nr(n = Si(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Wb(e) {
  var t = gp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function Ub(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function d0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Hb = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = cr(), o === 38 && i === 12 && (n[r] = 1), !Ys(i); )
    mn();
  return il(t, sn);
}, Vb = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Ys(o)) {
      case 0:
        o === 38 && cr() === 12 && (n[r] = 1), t[r] += Hb(sn - 1, n, r);
        break;
      case 2:
        t[r] += ua(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = cr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += mu(o);
    }
  while (o = mn());
  return t;
}, Kb = function(t, n) {
  return c0(Vb(u0(t), n));
}, fh = /* @__PURE__ */ new WeakMap(), Yb = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !fh.get(r)) && !o) {
      fh.set(t, !0);
      for (var i = [], s = Kb(n, i), l = r.props, a = 0, u = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, Qb = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function f0(e, t) {
  switch (Ib(e, t)) {
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
      return De + e + Fa + e + Ut + e + e;
    case 6828:
    case 4268:
      return De + e + Ut + e + e;
    case 6165:
      return De + e + Ut + "flex-" + e + e;
    case 5187:
      return De + e + Fe(e, /(\w+).+(:[^]+)/, De + "box-$1$2" + Ut + "flex-$1$2") + e;
    case 5443:
      return De + e + Ut + "flex-item-" + Fe(e, /flex-|-self/, "") + e;
    case 4675:
      return De + e + Ut + "flex-line-pack" + Fe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return De + e + Ut + Fe(e, "shrink", "negative") + e;
    case 5292:
      return De + e + Ut + Fe(e, "basis", "preferred-size") + e;
    case 6060:
      return De + "box-" + Fe(e, "-grow", "") + De + e + Ut + Fe(e, "grow", "positive") + e;
    case 4554:
      return De + Fe(e, /([^-])(transform)/g, "$1" + De + "$2") + e;
    case 6187:
      return Fe(Fe(Fe(e, /(zoom-|grab)/, De + "$1"), /(image-set)/, De + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Fe(e, /(image-set\([^]*)/, De + "$1$`$1");
    case 4968:
      return Fe(Fe(e, /(.+:)(flex-)?(.*)/, De + "box-pack:$3" + Ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + De + e + e;
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
      if (nr(e) - 1 - t > 6) switch (zt(e, t + 1)) {
        case 109:
          if (zt(e, t + 4) !== 45) break;
        case 102:
          return Fe(e, /(.+:)(.+)-([^]+)/, "$1" + De + "$2-$3$1" + Fa + (zt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Kd(e, "stretch") ? f0(Fe(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (zt(e, t + 1) !== 115) break;
    case 6444:
      switch (zt(e, nr(e) - 3 - (~Kd(e, "!important") && 10))) {
        case 107:
          return Fe(e, ":", ":" + De) + e;
        case 101:
          return Fe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + De + (zt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + De + "$2$3$1" + Ut + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (zt(e, t + 11)) {
        case 114:
          return De + e + Ut + Fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return De + e + Ut + Fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return De + e + Ut + Fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return De + e + Ut + e + e;
  }
  return e;
}
var Gb = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case hp:
      t.return = f0(t.value, t.length);
      break;
    case s0:
      return Si([Ji(t, {
        value: Fe(t.value, "@", "@" + De)
      })], o);
    case mp:
      if (t.length) return jb(t.props, function(i) {
        switch ($b(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Si([Ji(t, {
              props: [Fe(i, /:(read-\w+)/, ":" + Fa + "$1")]
            })], o);
          case "::placeholder":
            return Si([Ji(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + De + "input-$1")]
            }), Ji(t, {
              props: [Fe(i, /:(plac\w+)/, ":" + Fa + "$1")]
            }), Ji(t, {
              props: [Fe(i, /:(plac\w+)/, Ut + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Xb = [Gb], qb = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var C = b.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Xb, i = {}, s, l = [];
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
  var a, u = [Yb, Qb];
  {
    var d, h = [_b, Ub(function(b) {
      d.insert(b);
    })], v = Wb(u.concat(o, h)), f = function(C) {
      return Si(Fb(C), v);
    };
    a = function(C, g, m, x) {
      d = m, f(C ? C + "{" + g.styles + "}" : g.styles), x && (S.inserted[g.name] = !0);
    };
  }
  var S = {
    key: n,
    sheet: new Eb({
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
}, p0 = { exports: {} }, Ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At = typeof Symbol == "function" && Symbol.for, yp = At ? Symbol.for("react.element") : 60103, vp = At ? Symbol.for("react.portal") : 60106, yu = At ? Symbol.for("react.fragment") : 60107, vu = At ? Symbol.for("react.strict_mode") : 60108, xu = At ? Symbol.for("react.profiler") : 60114, Su = At ? Symbol.for("react.provider") : 60109, bu = At ? Symbol.for("react.context") : 60110, xp = At ? Symbol.for("react.async_mode") : 60111, wu = At ? Symbol.for("react.concurrent_mode") : 60111, Cu = At ? Symbol.for("react.forward_ref") : 60112, ku = At ? Symbol.for("react.suspense") : 60113, Zb = At ? Symbol.for("react.suspense_list") : 60120, Eu = At ? Symbol.for("react.memo") : 60115, Tu = At ? Symbol.for("react.lazy") : 60116, Jb = At ? Symbol.for("react.block") : 60121, ew = At ? Symbol.for("react.fundamental") : 60117, tw = At ? Symbol.for("react.responder") : 60118, nw = At ? Symbol.for("react.scope") : 60119;
function xn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case yp:
        switch (e = e.type, e) {
          case xp:
          case wu:
          case yu:
          case xu:
          case vu:
          case ku:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case bu:
              case Cu:
              case Tu:
              case Eu:
              case Su:
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
function m0(e) {
  return xn(e) === wu;
}
Ye.AsyncMode = xp;
Ye.ConcurrentMode = wu;
Ye.ContextConsumer = bu;
Ye.ContextProvider = Su;
Ye.Element = yp;
Ye.ForwardRef = Cu;
Ye.Fragment = yu;
Ye.Lazy = Tu;
Ye.Memo = Eu;
Ye.Portal = vp;
Ye.Profiler = xu;
Ye.StrictMode = vu;
Ye.Suspense = ku;
Ye.isAsyncMode = function(e) {
  return m0(e) || xn(e) === xp;
};
Ye.isConcurrentMode = m0;
Ye.isContextConsumer = function(e) {
  return xn(e) === bu;
};
Ye.isContextProvider = function(e) {
  return xn(e) === Su;
};
Ye.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === yp;
};
Ye.isForwardRef = function(e) {
  return xn(e) === Cu;
};
Ye.isFragment = function(e) {
  return xn(e) === yu;
};
Ye.isLazy = function(e) {
  return xn(e) === Tu;
};
Ye.isMemo = function(e) {
  return xn(e) === Eu;
};
Ye.isPortal = function(e) {
  return xn(e) === vp;
};
Ye.isProfiler = function(e) {
  return xn(e) === xu;
};
Ye.isStrictMode = function(e) {
  return xn(e) === vu;
};
Ye.isSuspense = function(e) {
  return xn(e) === ku;
};
Ye.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === yu || e === wu || e === xu || e === vu || e === ku || e === Zb || typeof e == "object" && e !== null && (e.$$typeof === Tu || e.$$typeof === Eu || e.$$typeof === Su || e.$$typeof === bu || e.$$typeof === Cu || e.$$typeof === ew || e.$$typeof === tw || e.$$typeof === nw || e.$$typeof === Jb);
};
Ye.typeOf = xn;
p0.exports = Ye;
var rw = p0.exports, h0 = rw, ow = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, iw = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, g0 = {};
g0[h0.ForwardRef] = ow;
g0[h0.Memo] = iw;
var sw = !0;
function y0(e, t, n) {
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
  sw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
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
function lw(e) {
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
var aw = {
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
}, uw = /[A-Z]|^ms/g, cw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, v0 = function(t) {
  return t.charCodeAt(1) === 45;
}, ph = function(t) {
  return t != null && typeof t != "boolean";
}, zc = /* @__PURE__ */ d0(function(e) {
  return v0(e) ? e : e.replace(uw, "-$&").toLowerCase();
}), mh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(cw, function(r, o, i) {
          return rr = {
            name: o,
            styles: i,
            next: rr
          }, o;
        });
  }
  return aw[t] !== 1 && !v0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
        return rr = {
          name: o.name,
          styles: o.styles,
          next: rr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            rr = {
              name: s.name,
              styles: s.styles,
              next: rr
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return dw(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = rr, u = n(e);
        return rr = a, Qs(e, t, u);
      }
      break;
    }
  }
  var d = n;
  if (t == null)
    return d;
  var h = t[d];
  return h !== void 0 ? h : d;
}
function dw(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Qs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : ph(l) && (r += zc(i) + ":" + mh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          ph(s[a]) && (r += zc(i) + ":" + mh(i, s[a]) + ";");
      else {
        var u = Qs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += zc(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var hh = /label:\s*([^\s;{]+)\s*(;|$)/g, rr;
function sl(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  rr = void 0;
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
  hh.lastIndex = 0;
  for (var u = "", d; (d = hh.exec(o)) !== null; )
    u += "-" + d[1];
  var h = lw(o) + u;
  return {
    name: h,
    styles: o,
    next: rr
  };
}
var fw = function(t) {
  return t();
}, x0 = ma.useInsertionEffect ? ma.useInsertionEffect : !1, S0 = x0 || fw, gh = x0 || p.useLayoutEffect, b0 = /* @__PURE__ */ p.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ qb({
    key: "css"
  }) : null
);
b0.Provider;
var wp = function(t) {
  return /* @__PURE__ */ p.forwardRef(function(n, r) {
    var o = p.useContext(b0);
    return t(n, o, r);
  });
}, ll = /* @__PURE__ */ p.createContext({}), Cp = {}.hasOwnProperty, Qd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", pw = function(t, n) {
  var r = {};
  for (var o in n)
    Cp.call(n, o) && (r[o] = n[o]);
  return r[Qd] = t, r;
}, mw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Sp(n, r, o), S0(function() {
    return bp(n, r, o);
  }), null;
}, hw = /* @__PURE__ */ wp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Qd], i = [r], s = "";
  typeof e.className == "string" ? s = y0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = sl(i, void 0, p.useContext(ll));
  s += t.key + "-" + l.name;
  var a = {};
  for (var u in e)
    Cp.call(e, u) && u !== "css" && u !== Qd && (a[u] = e[u]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(mw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ p.createElement(o, a));
}), gw = hw, yh = function(t, n) {
  var r = arguments;
  if (n == null || !Cp.call(n, "css"))
    return p.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = gw, i[1] = pw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return p.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(yh || (yh = {}));
var yw = /* @__PURE__ */ wp(function(e, t) {
  var n = e.styles, r = sl([n], void 0, p.useContext(ll)), o = p.useRef();
  return gh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, a = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), a !== null && (l = !0, a.setAttribute("data-emotion", i), s.hydrate([a])), o.current = [s, l], function() {
      s.flush();
    };
  }, [t]), gh(function() {
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
function no() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return sl(t);
}
function ao() {
  var e = no.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var vw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xw = /* @__PURE__ */ d0(
  function(e) {
    return vw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Sw = xw, bw = function(t) {
  return t !== "theme";
}, vh = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Sw : bw;
}, xh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, ww = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Sp(n, r, o), S0(function() {
    return bp(n, r, o);
  }), null;
}, Cw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = xh(t, n, r), a = l || vh(o), u = !a("as");
  return function() {
    var d = arguments, h = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      var v = d[0];
      h.push(v[0]);
      for (var f = d.length, S = 1; S < f; S++)
        h.push(d[S], v[S]);
    }
    var b = wp(function(C, g, m) {
      var x = u && C.as || o, w = "", E = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var T in C)
          k[T] = C[T];
        k.theme = p.useContext(ll);
      }
      typeof C.className == "string" ? w = y0(g.registered, E, C.className) : C.className != null && (w = C.className + " ");
      var P = sl(h.concat(E), g.registered, k);
      w += g.key + "-" + P.name, s !== void 0 && (w += " " + s);
      var M = u && l === void 0 ? vh(x) : a, A = {};
      for (var I in C)
        u && I === "as" || M(I) && (A[I] = C[I]);
      return A.className = w, m && (A.ref = m), /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(ww, {
        cache: g,
        serialized: P,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ p.createElement(x, A));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = h, b.__emotion_forwardProp = l, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(C, g) {
      var m = e(C, Vd({}, n, g, {
        shouldForwardProp: xh(b, g, !0)
      }));
      return m.apply(void 0, h);
    }, b;
  };
}, kw = [
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
], Gd = Cw.bind(null);
kw.forEach(function(e) {
  Gd[e] = Gd(e);
});
function Ew(e) {
  return e == null || Object.keys(e).length === 0;
}
function w0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Ew(o) ? n : o) : t;
  return /* @__PURE__ */ c.jsx(yw, {
    styles: r
  });
}
function C0(e, t) {
  return Gd(e, t);
}
function Tw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Sh = [];
function Jr(e) {
  return Sh[0] = e, sl(Sh);
}
var k0 = { exports: {} }, Xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kp = Symbol.for("react.transitional.element"), Ep = Symbol.for("react.portal"), Pu = Symbol.for("react.fragment"), Ru = Symbol.for("react.strict_mode"), Mu = Symbol.for("react.profiler"), Iu = Symbol.for("react.consumer"), $u = Symbol.for("react.context"), ju = Symbol.for("react.forward_ref"), Ou = Symbol.for("react.suspense"), Au = Symbol.for("react.suspense_list"), Nu = Symbol.for("react.memo"), Lu = Symbol.for("react.lazy"), Pw = Symbol.for("react.view_transition"), Rw = Symbol.for("react.client.reference");
function Nn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case kp:
        switch (e = e.type, e) {
          case Pu:
          case Mu:
          case Ru:
          case Ou:
          case Au:
          case Pw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case $u:
              case ju:
              case Lu:
              case Nu:
                return e;
              case Iu:
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
Xe.ContextConsumer = Iu;
Xe.ContextProvider = $u;
Xe.Element = kp;
Xe.ForwardRef = ju;
Xe.Fragment = Pu;
Xe.Lazy = Lu;
Xe.Memo = Nu;
Xe.Portal = Ep;
Xe.Profiler = Mu;
Xe.StrictMode = Ru;
Xe.Suspense = Ou;
Xe.SuspenseList = Au;
Xe.isContextConsumer = function(e) {
  return Nn(e) === Iu;
};
Xe.isContextProvider = function(e) {
  return Nn(e) === $u;
};
Xe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === kp;
};
Xe.isForwardRef = function(e) {
  return Nn(e) === ju;
};
Xe.isFragment = function(e) {
  return Nn(e) === Pu;
};
Xe.isLazy = function(e) {
  return Nn(e) === Lu;
};
Xe.isMemo = function(e) {
  return Nn(e) === Nu;
};
Xe.isPortal = function(e) {
  return Nn(e) === Ep;
};
Xe.isProfiler = function(e) {
  return Nn(e) === Mu;
};
Xe.isStrictMode = function(e) {
  return Nn(e) === Ru;
};
Xe.isSuspense = function(e) {
  return Nn(e) === Ou;
};
Xe.isSuspenseList = function(e) {
  return Nn(e) === Au;
};
Xe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Pu || e === Mu || e === Ru || e === Ou || e === Au || typeof e == "object" && e !== null && (e.$$typeof === Lu || e.$$typeof === Nu || e.$$typeof === $u || e.$$typeof === Iu || e.$$typeof === ju || e.$$typeof === Rw || e.getModuleId !== void 0);
};
Xe.typeOf = Nn;
k0.exports = Xe;
var E0 = k0.exports;
function kr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function T0(e) {
  if (/* @__PURE__ */ p.isValidElement(e) || E0.isValidElementType(e) || !kr(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = T0(e[n]);
  }), t;
}
function Ft(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return kr(e) && kr(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ p.isValidElement(t[o]) || E0.isValidElementType(t[o]) ? r[o] = t[o] : kr(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && kr(e[o]) ? r[o] = Ft(e[o], t[o], n) : n.clone ? r[o] = kr(t[o]) ? T0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Mw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function P0(e) {
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
  } = e, i = Mw(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function u(f, S) {
    const b = s.indexOf(S);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : S) - r / 100}${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function h(f) {
    const S = s.indexOf(f);
    return S === 0 ? l(s[1]) : S === s.length - 1 ? a(s[S]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const v = [];
  for (let f = 0; f < s.length; f += 1)
    v.push(l(s[f]));
  return {
    keys: s,
    values: i,
    up: l,
    down: a,
    between: u,
    only: d,
    not: h,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const bh = /min-width:\s*([0-9.]+)/;
function wh(e, t) {
  if (!e.containerQueries || !Iw(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => +(o.match(bh)?.[1] || 0) - +(i.match(bh)?.[1] || 0));
  const r = t;
  for (let o = 0; o < n.length; o += 1) {
    const i = n[o], s = r[i];
    delete r[i], r[i] = s;
  }
  return r;
}
function Iw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function R0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function $w(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function jw(e) {
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
const Ow = {
  borderRadius: 4
};
function M0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function bi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Dw(t) ? t : Fw(e) ? $i(t) : n && r ? Lw(e, t) : n !== r ? $i(t) : Bw(e, t);
}
function Aw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = $i(e[t]);
  return r;
}
function Nw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = $i(e[n]));
  return t;
}
function Lw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = $i(t[r]);
  return e;
}
function zw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Dw(e) {
  return typeof e != "object" || e === null;
}
function Fw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function $i(e) {
  return zw(e) ? Array.isArray(e) ? Aw(e) : Nw(e) : e;
}
function Bw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = bi(e[n], t[n]) : e[n] = $i(t[n]));
  return e;
}
const _w = {}, zu = {
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
}, Ba = P0({
  values: zu
}), Ww = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : zu[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function ro(e, t, n) {
  const r = {};
  return Du(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : bi(r, l);
  });
}
function Du(e, t, n, r) {
  if (t ??= _w, Array.isArray(n)) {
    const o = t.breakpoints ?? Ba;
    for (let i = 0; i < n.length; i += 1)
      Dc(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Ba, i = o.values ?? zu;
    for (const s in n)
      if (R0(o.keys, s)) {
        const l = $w(t.containerQueries ? t : Ww, s);
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
  e[t] ??= {}, o(t, n, r);
}
function I0(e = Ba) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function Xd(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    M0(t[o]) && delete t[o];
  }
  return t;
}
function Uw(e, ...t) {
  const r = [I0(e), ...t].reduce((o, i) => Ft(o, i), {});
  return Xd(e, r);
}
function Hw(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Fc(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || Hw(t, n), i = Object.keys(o);
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
function Vw(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (R0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ie(e) {
  if (typeof e != "string")
    throw new Error(jr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function $0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Fu(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Fu(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = Ch(e.vars, o, r);
    if (i != null)
      return i;
  }
  return Ch(e, o, r);
}
function Ch(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ie(s)}`;
    return r?.[l];
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
    const l = s[t], a = s.theme, u = Fu(a, r) || {};
    return ro(s, l, (h) => {
      const v = $0(u, o, h, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const Kw = {
  internal_cache: {}
}, _a = {
  m: "margin",
  p: "padding"
}, kh = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Eh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Gs = {};
for (const e in _a)
  Gs[e] = [_a[e]];
for (const e in _a)
  for (const t in kh) {
    const n = _a[e], r = kh[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Gs[e + t] = o;
  }
for (const e in Eh)
  Gs[e] = Gs[Eh[e]];
const Tp = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Pp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Tp, ...Pp];
function al(e, t, n, r) {
  const o = Fu(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Bu(e) {
  return al(e, "spacing", 8);
}
function Ao(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Th = [""];
function j0(e, t) {
  const n = e.theme ?? Kw, r = n?.internal_cache?.unarySpacing ?? Bu(n), o = {};
  for (const i in e) {
    if (!t.has(i))
      continue;
    const s = Gs[i] ?? (Th[0] = i, Th), l = e[i];
    Du(o, e.theme, l, (a, u) => {
      const d = a ? o[a] : o;
      for (let h = 0; h < s.length; h += 1)
        d[s[h]] = Ao(r, u);
    });
  }
  return o;
}
function Rp(e) {
  return j0(e, Tp);
}
Rp.propTypes = {};
Rp.filterProps = Tp;
const wt = Rp;
function Mp(e) {
  return j0(e, Pp);
}
Mp.propTypes = {};
Mp.filterProps = Pp;
const Ct = Mp;
function O0(e = 8, t = Bu({
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
function _u(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && bi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function Tn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ln(e, t) {
  return St({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Yw = Ln("border", Tn), Qw = Ln("borderTop", Tn), Gw = Ln("borderRight", Tn), Xw = Ln("borderBottom", Tn), qw = Ln("borderLeft", Tn), Zw = Ln("borderColor"), Jw = Ln("borderTopColor"), eC = Ln("borderRightColor"), tC = Ln("borderBottomColor"), nC = Ln("borderLeftColor"), rC = Ln("outline", Tn), oC = Ln("outlineColor"), Wu = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = al(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Ao(t, r)
    });
    return ro(e, e.borderRadius, n);
  }
  return null;
};
Wu.propTypes = {};
Wu.filterProps = ["borderRadius"];
_u(Yw, Qw, Gw, Xw, qw, Zw, Jw, eC, tC, nC, Wu, rC, oC);
const Uu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = al(e.theme, "spacing", 8), n = (r) => ({
      gap: Ao(t, r)
    });
    return ro(e, e.gap, n);
  }
  return null;
};
Uu.propTypes = {};
Uu.filterProps = ["gap"];
const Hu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = al(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Ao(t, r)
    });
    return ro(e, e.columnGap, n);
  }
  return null;
};
Hu.propTypes = {};
Hu.filterProps = ["columnGap"];
const Vu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = al(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Ao(t, r)
    });
    return ro(e, e.rowGap, n);
  }
  return null;
};
Vu.propTypes = {};
Vu.filterProps = ["rowGap"];
const iC = St({
  prop: "gridColumn"
}), sC = St({
  prop: "gridRow"
}), lC = St({
  prop: "gridAutoFlow"
}), aC = St({
  prop: "gridAutoColumns"
}), uC = St({
  prop: "gridAutoRows"
}), cC = St({
  prop: "gridTemplateColumns"
}), dC = St({
  prop: "gridTemplateRows"
}), fC = St({
  prop: "gridTemplateAreas"
}), pC = St({
  prop: "gridArea"
});
_u(Uu, Hu, Vu, iC, sC, lC, aC, uC, cC, dC, fC, pC);
function wi(e, t) {
  return t === "grey" ? t : e;
}
const mC = St({
  prop: "color",
  themeKey: "palette",
  transform: wi
}), hC = St({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: wi
}), gC = St({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: wi
});
_u(mC, hC, gC);
const yC = zu;
function dn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const vC = St({
  prop: "width",
  transform: dn
}), Ip = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      const r = e.theme?.breakpoints?.values?.[n] || yC[n];
      return r ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: dn(n)
      };
    };
    return ro(e, e.maxWidth, t);
  }
  return null;
};
Ip.filterProps = ["maxWidth"];
const xC = St({
  prop: "minWidth",
  transform: dn
}), SC = St({
  prop: "height",
  transform: dn
}), bC = St({
  prop: "maxHeight",
  transform: dn
}), wC = St({
  prop: "minHeight",
  transform: dn
});
St({
  prop: "size",
  cssProperty: "width",
  transform: dn
});
St({
  prop: "size",
  cssProperty: "height",
  transform: dn
});
const CC = St({
  prop: "boxSizing"
});
_u(vC, Ip, xC, SC, bC, wC, CC);
const Ku = {
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
    style: Wu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: wi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: wi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: wi
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
    style: Uu
  },
  rowGap: {
    style: Vu
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
    transform: dn
  },
  maxWidth: {
    style: Ip
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
}, kC = {};
function EC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = kC,
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
      const d = r.breakpoints ?? Ba, h = I0(d);
      for (const v in u) {
        const f = TC(u[v], r);
        if (f != null) {
          if (typeof f != "object") {
            Ph(h, v, f, r, i);
            continue;
          }
          if (i[v]) {
            Ph(h, v, f, r, i);
            continue;
          }
          Vw(d, f) ? Du(h, t.theme, f, (S, b) => {
            h[S][v] = b;
          }) : (s.sx = f, h[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": wh(r, Xd(d, h))
      } : wh(r, Xd(d, h));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const No = EC();
function Ph(e, t, n, r, o) {
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
    bi(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: u
  } = i, d = Fu(r, s);
  Du(e, r, n, (h, v) => {
    const f = $0(d, u, v, t);
    a === !1 ? bi(h ? e[h] : e, f) : h ? e[h][a] = f : e[a] = f;
  });
}
function TC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function PC(e, t) {
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
function Yu(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = P0(n), a = O0(o);
  let u = Ft({
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
      ...Ow,
      ...i
    }
  }, s);
  return u = jw(u), u.applyStyles = PC, u = t.reduce((d, h) => Ft(d, h), u), u.unstable_sxConfig = {
    ...Ku,
    ...s?.unstable_sxConfig
  }, u.unstable_sx = function(h) {
    return No({
      sx: h,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function RC(e) {
  return Object.keys(e).length === 0;
}
function $p(e = null) {
  const t = p.useContext(ll);
  return !t || RC(t) ? e : t;
}
const MC = Yu();
function Qu(e = MC) {
  return $p(e);
}
function Bc(e) {
  const t = Jr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function A0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Qu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Bc(typeof s == "function" ? s(o) : s)) : i = Bc(i)), /* @__PURE__ */ c.jsx(w0, {
    styles: i
  });
}
const Rh = (e) => e, IC = () => {
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
}, N0 = IC();
function L0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = L0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function te() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = L0(e)) && (r && (r += " "), r += t);
  return r;
}
function $C(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = C0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(No);
  return /* @__PURE__ */ p.forwardRef(function(a, u) {
    const d = Qu(n), {
      className: h,
      component: v = "div",
      ...f
    } = a;
    return /* @__PURE__ */ c.jsx(i, {
      as: v,
      ref: u,
      className: te(h, o ? o(r) : r),
      theme: t && d[t] || d,
      ...f
    });
  });
}
const jC = {
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
  const r = jC[t];
  return r ? `${n}-${r}` : `${N0.generate(e)}-${t}`;
}
function ue(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = de(e, o, n);
  }), r;
}
function z0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Jr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Jr(o.style));
  }), r;
}
const OC = Yu();
function _c(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ko(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function AC(e) {
  return e ? (t, n) => n[e] : null;
}
function NC(e, t, n) {
  e.theme = M0(e.theme) ? n : e.theme[t] || e.theme;
}
function da(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => da(e, o, n));
  if (Array.isArray(r?.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? ko(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? ko(Jr(s), n) : s;
    }
    return D0(e, r.variants, [o], n);
  }
  return r?.isProcessed ? n ? ko(Jr(r.style), n) : r.style : n ? ko(Jr(r), n) : r;
}
function D0(e, t, n = [], r = void 0) {
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
    }, n.push(r ? ko(Jr(s.style(o)), r) : s.style(o))) : n.push(r ? ko(Jr(s.style), r) : s.style);
  }
  return n;
}
function F0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = OC,
    rootShouldForwardProp: r = _c,
    slotShouldForwardProp: o = _c
  } = e;
  function i(l) {
    NC(l, t, n);
  }
  return (l, a = {}) => {
    Tw(l, (k) => k.filter((T) => T !== No));
    const {
      name: u,
      slot: d,
      skipVariantsResolver: h,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = AC(DC(d)),
      ...S
    } = a, b = u && u.startsWith("Mui") || d ? "components" : "custom", C = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), g = v || !1;
    let m = _c;
    d === "Root" || d === "root" ? m = r : d ? m = o : zC(l) && (m = void 0);
    const x = C0(l, {
      shouldForwardProp: m,
      label: LC(),
      ...S
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(P) {
          return da(P, k, P.theme.modularCssLayers ? b : void 0);
        };
      if (kr(k)) {
        const T = z0(k);
        return function(M) {
          return T.variants ? da(M, T, M.theme.modularCssLayers ? b : void 0) : M.theme.modularCssLayers ? ko(T.style, b) : T.style;
        };
      }
      return k;
    }, E = (...k) => {
      const T = [], P = k.map(w), M = [];
      if (T.push(i), u && f && M.push(function(j) {
        const $ = j.theme.components?.[u]?.styleOverrides;
        if (!$)
          return null;
        const N = {};
        for (const L in $)
          N[L] = da(j, $[L], j.theme.modularCssLayers ? "theme" : void 0);
        return f(j, N);
      }), u && !C && M.push(function(j) {
        const $ = j.theme?.components?.[u]?.variants;
        return $ ? D0(j, $, [], j.theme.modularCssLayers ? "theme" : void 0) : null;
      }), g || M.push(No), Array.isArray(P[0])) {
        const y = P.shift(), j = new Array(T.length).fill(""), R = new Array(M.length).fill("");
        let $;
        $ = [...j, ...y, ...R], $.raw = [...j, ...y.raw, ...R], T.unshift($);
      }
      const A = [...T, ...P, ...M], I = x(...A);
      return l.muiName && (I.muiName = l.muiName), I;
    };
    return x.withConfig && (E.withConfig = x.withConfig), E;
  };
}
function LC(e, t) {
  return void 0;
}
function zC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function DC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const FC = F0();
function Xs(e, t, n = !1) {
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
              r[i][u] = Xs(s[u], l[u], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = te(e?.className, t?.className) : i === "style" && n && t.style ? r.style = {
        ...e?.style,
        ...t?.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function BC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Xs(t.components[n].defaultProps, r);
}
function _C(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Qu(r);
  return o && (i = i[o] || i), BC({
    theme: i,
    name: n,
    props: t
  });
}
const dt = typeof window < "u" ? p.useLayoutEffect : p.useEffect;
function WC(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function jp(e, t = 0, n = 1) {
  return WC(e, t, n);
}
function UC(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function oo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return oo(UC(e));
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
const HC = (e) => {
  const t = oo(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, cs = (e, t) => {
  try {
    return HC(e);
  } catch {
    return e;
  }
};
function Gu(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function B0(e) {
  e = oo(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Gu({
    type: l,
    values: a
  });
}
function qd(e) {
  e = oo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? oo(B0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function VC(e, t) {
  const n = qd(e), r = qd(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wa(e, t) {
  return e = oo(e), t = jp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Gu(e);
}
function po(e, t, n) {
  try {
    return Wa(e, t);
  } catch {
    return e;
  }
}
function Xu(e, t) {
  if (e = oo(e), t = jp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Gu(e);
}
function He(e, t, n) {
  try {
    return Xu(e, t);
  } catch {
    return e;
  }
}
function qu(e, t) {
  if (e = oo(e), t = jp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Gu(e);
}
function Ve(e, t, n) {
  try {
    return qu(e, t);
  } catch {
    return e;
  }
}
function Zd(e, t = 0.15) {
  return qd(e) > 0.5 ? Xu(e, t) : qu(e, t);
}
function $l(e, t, n) {
  try {
    return Zd(e, t);
  } catch {
    return e;
  }
}
const _0 = /* @__PURE__ */ p.createContext(null);
function Op() {
  return p.useContext(_0);
}
const KC = typeof Symbol == "function" && Symbol.for, YC = KC ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function QC(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function GC(e) {
  const {
    children: t,
    theme: n
  } = e, r = Op(), o = p.useMemo(() => {
    const i = r === null ? {
      ...n
    } : QC(r, n);
    return i != null && (i[YC] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ c.jsx(_0.Provider, {
    value: o,
    children: t
  });
}
const W0 = /* @__PURE__ */ p.createContext();
function XC({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c.jsx(W0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const ul = () => p.useContext(W0) ?? !1, U0 = /* @__PURE__ */ p.createContext(void 0);
function qC({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c.jsx(U0.Provider, {
    value: e,
    children: t
  });
}
function ZC(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? Xs(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Xs(o, r, t.components.mergeClassNameAndStyle) : r;
}
function JC({
  props: e,
  name: t
}) {
  const n = p.useContext(U0);
  return ZC({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Mh = 0;
function ek(e) {
  const [t, n] = p.useState(e), r = e || t;
  return p.useEffect(() => {
    t == null && (Mh += 1, n(`mui-${Mh}`));
  }, [t]), r;
}
const tk = {
  ...ma
}, Ih = tk.useId;
function Or(e) {
  if (Ih !== void 0) {
    const t = Ih();
    return e ?? t;
  }
  return ek(e);
}
function nk(e) {
  const t = $p(), n = Or() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, dt(() => {
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
  }, [o, n]), o ? /* @__PURE__ */ c.jsx(A0, {
    styles: o
  }) : null;
}
const $h = {};
function jh(e, t, n, r = !1) {
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
function H0(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = $p($h), i = Op() || $h, s = jh(r, o, n), l = jh(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", u = nk(s);
  return /* @__PURE__ */ c.jsx(GC, {
    theme: l,
    children: /* @__PURE__ */ c.jsx(ll.Provider, {
      value: s,
      children: /* @__PURE__ */ c.jsx(XC, {
        value: a,
        children: /* @__PURE__ */ c.jsxs(qC, {
          value: r ? s[r].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
const Oh = {
  theme: void 0
};
function rk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Oh.theme = o.theme, i = z0(e(Oh)), t = i, n = o.theme), i;
  };
}
const Ap = "mode", Np = "color-scheme", ok = "data-color-scheme";
function ik(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Ap,
    colorSchemeStorageKey: i = Np,
    attribute: s = ok,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let u = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const v = d.substring(1);
    u += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const h = d.match(/\[([^[\]]+)\]/);
  if (h) {
    const [v, f] = h[1].split("=");
    f || (u += `${l}.removeAttribute('${v}'.replace('%s', light));
      ${l}.removeAttribute('${v}'.replace('%s', dark));`), u += `
      ${l}.setAttribute('${v}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
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
function sk() {
}
const lk = ({
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
      return sk;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Wc() {
}
function Ah(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function V0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function ak(e) {
  return V0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function uk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Ap,
    colorSchemeStorageKey: s = Np,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = lk,
    noSsr: u = !1
  } = e, d = o.join(","), h = o.length > 1, v = p.useMemo(() => a?.({
    key: i,
    storageWindow: l
  }), [a, i, l]), f = p.useMemo(() => a?.({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), S = p.useMemo(() => a?.({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [b, C] = p.useState(() => {
    const P = v?.get(t) || t, M = f?.get(n) || n, A = S?.get(r) || r;
    return {
      mode: P,
      systemMode: Ah(P),
      lightColorScheme: M,
      darkColorScheme: A
    };
  }), [g, m] = p.useState(u || !h);
  p.useEffect(() => {
    m(!0);
  }, []);
  const x = ak(b), w = p.useCallback((P) => {
    C((M) => {
      if (P === M.mode)
        return M;
      const A = P ?? t;
      return v?.set(A), {
        ...M,
        mode: A,
        systemMode: Ah(A)
      };
    });
  }, [v, t]), E = p.useCallback((P) => {
    P ? typeof P == "string" ? P && !d.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : C((M) => {
      const A = {
        ...M
      };
      return V0(M, (I) => {
        I === "light" && (f?.set(P), A.lightColorScheme = P), I === "dark" && (S?.set(P), A.darkColorScheme = P);
      }), A;
    }) : C((M) => {
      const A = {
        ...M
      }, I = P.light === null ? n : P.light, y = P.dark === null ? r : P.dark;
      return I && (d.includes(I) ? (A.lightColorScheme = I, f?.set(I)) : console.error(`\`${I}\` does not exist in \`theme.colorSchemes\`.`)), y && (d.includes(y) ? (A.darkColorScheme = y, S?.set(y)) : console.error(`\`${y}\` does not exist in \`theme.colorSchemes\`.`)), A;
    }) : C((M) => (f?.set(n), S?.set(r), {
      ...M,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, f, S, n, r]), k = p.useCallback((P) => {
    b.mode === "system" && C((M) => {
      const A = P?.matches ? "dark" : "light";
      return M.systemMode === A ? M : {
        ...M,
        systemMode: A
      };
    });
  }, [b.mode]), T = p.useRef(k);
  return T.current = k, p.useEffect(() => {
    if (typeof window.matchMedia != "function" || !h)
      return;
    const P = (...A) => T.current(...A), M = window.matchMedia("(prefers-color-scheme: dark)");
    return M.addListener(P), P(M), () => {
      M.removeListener(P);
    };
  }, [h]), p.useEffect(() => {
    if (h) {
      const P = v?.subscribe((I) => {
        (!I || ["light", "dark", "system"].includes(I)) && w(I || t);
      }) || Wc, M = f?.subscribe((I) => {
        (!I || d.match(I)) && E({
          light: I
        });
      }) || Wc, A = S?.subscribe((I) => {
        (!I || d.match(I)) && E({
          dark: I
        });
      }) || Wc;
      return () => {
        P(), M(), A();
      };
    }
  }, [E, w, d, t, l, h, v, f, S]), {
    ...b,
    mode: g ? b.mode : void 0,
    systemMode: g ? b.systemMode : void 0,
    colorScheme: g ? x : void 0,
    setMode: w,
    setColorScheme: E
  };
}
const ck = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function dk(e) {
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
  }, u = /* @__PURE__ */ p.createContext(void 0), d = () => p.useContext(u) || a, h = {}, v = {};
  function f(g) {
    const {
      children: m,
      theme: x,
      modeStorageKey: w = r,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: k = i,
      storageManager: T,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: M = typeof document > "u" ? void 0 : document,
      colorSchemeNode: A = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: I = !1,
      disableStyleSheetGeneration: y = !1,
      defaultMode: j = "system",
      forceThemeRerender: R = !1,
      noSsr: $
    } = g, N = p.useRef(!1), L = Op(), O = p.useContext(u), D = !!O && !I, B = p.useMemo(() => x || (typeof n == "function" ? n() : n), [x]), H = B[t], W = H || B, {
      colorSchemes: G = h,
      components: Y = v,
      cssVarPrefix: re
    } = W, Q = Object.keys(G).filter((xe) => !!G[xe]).join(","), X = p.useMemo(() => Q.split(","), [Q]), K = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, he = G[K] && G[ne] ? j : G[W.defaultColorScheme]?.palette?.mode || W.palette?.mode, {
      mode: Re,
      setMode: ve,
      systemMode: me,
      lightColorScheme: le,
      darkColorScheme: Me,
      colorScheme: _e,
      setColorScheme: Ae
    } = uk({
      supportedColorSchemes: X,
      defaultLightColorScheme: K,
      defaultDarkColorScheme: ne,
      modeStorageKey: w,
      colorSchemeStorageKey: E,
      defaultMode: he,
      storageManager: T,
      storageWindow: P,
      noSsr: $
    });
    let Ie = Re, ce = _e;
    D && (Ie = O.mode, ce = O.colorScheme);
    let Pe = ce || W.defaultColorScheme;
    W.vars && !R && (Pe = W.defaultColorScheme);
    const tt = p.useMemo(() => {
      const xe = W.generateThemeVars?.() || W.vars, se = {
        ...W,
        components: Y,
        colorSchemes: G,
        cssVarPrefix: re,
        vars: xe
      };
      if (typeof se.generateSpacing == "function" && (se.spacing = se.generateSpacing()), Pe) {
        const Se = G[Pe];
        Se && typeof Se == "object" && Object.keys(Se).forEach((Ge) => {
          Se[Ge] && typeof Se[Ge] == "object" ? se[Ge] = {
            ...se[Ge],
            ...Se[Ge]
          } : se[Ge] = Se[Ge];
        });
      }
      return l ? l(se) : se;
    }, [W, Pe, Y, G, re]), Ne = W.colorSchemeSelector;
    dt(() => {
      if (ce && A && Ne && Ne !== "media") {
        const xe = Ne;
        let se = Ne;
        if (xe === "class" && (se = ".%s"), xe === "data" && (se = "[data-%s]"), xe?.startsWith("data-") && !xe.includes("%s") && (se = `[${xe}="%s"]`), se.startsWith("."))
          A.classList.remove(...X.map((Se) => se.substring(1).replace("%s", Se))), A.classList.add(se.substring(1).replace("%s", ce));
        else {
          const Se = se.replace("%s", ce).match(/\[([^\]]+)\]/);
          if (Se) {
            const [Ge, ae] = Se[1].split("=");
            ae || X.forEach((Ue) => {
              A.removeAttribute(Ge.replace(ce, Ue));
            }), A.setAttribute(Ge, ae ? ae.replace(/"|'/g, "") : "");
          } else
            A.setAttribute(se, ce);
        }
      }
    }, [ce, Ne, A, X]), p.useEffect(() => {
      let xe;
      if (k && N.current && M) {
        const se = M.createElement("style");
        se.appendChild(M.createTextNode(ck)), M.head.appendChild(se), window.getComputedStyle(M.body), xe = setTimeout(() => {
          M.head.removeChild(se);
        }, 1);
      }
      return () => {
        clearTimeout(xe);
      };
    }, [ce, k, M]), p.useEffect(() => (N.current = !0, () => {
      N.current = !1;
    }), []);
    const We = p.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: ce,
      darkColorScheme: Me,
      lightColorScheme: le,
      mode: Ie,
      setColorScheme: Ae,
      setMode: ve,
      systemMode: me
    }), [X, ce, Me, le, Ie, Ae, ve, me, tt.colorSchemeSelector]);
    let $e = !0;
    (y || W.cssVariables === !1 || D && L?.cssVarPrefix === re) && ($e = !1);
    const Qe = /* @__PURE__ */ c.jsxs(p.Fragment, {
      children: [/* @__PURE__ */ c.jsx(H0, {
        themeId: H ? t : void 0,
        theme: tt,
        children: m
      }), $e && /* @__PURE__ */ c.jsx(w0, {
        styles: tt.generateStyleSheets?.() || []
      })]
    });
    return D ? Qe : /* @__PURE__ */ c.jsx(u.Provider, {
      value: We,
      children: Qe
    });
  }
  const S = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (g) => ik({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: S,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...g
    })
  };
}
function fk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const pk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Nh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (pk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, mk = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, hk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Uc(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return mk(
    e,
    (l, a, u) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, h = hk(l, a);
        Object.assign(o, {
          [d]: h
        }), Nh(i, l, `var(${d})`, u), Nh(s, l, `var(${d}, ${h})`, u);
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
function gk(e, t = {}) {
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
    css: h,
    varsWithDefaults: v
  } = Uc(u, t);
  let f = v;
  const S = {}, {
    [a]: b,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, E]) => {
    const {
      vars: k,
      css: T,
      varsWithDefaults: P
    } = Uc(E, t);
    f = Ft(f, P), S[w] = {
      css: T,
      vars: k
    };
  }), b) {
    const {
      css: w,
      vars: E,
      varsWithDefaults: k
    } = Uc(b, t);
    f = Ft(f, k), S[a] = {
      css: w,
      vars: E
    };
  }
  function g(w, E) {
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
    vars: f,
    generateThemeVars: () => {
      let w = {
        ...d
      };
      return Object.entries(S).forEach(([, {
        vars: E
      }]) => {
        w = Ft(w, E);
      }), w;
    },
    generateStyleSheets: () => {
      const w = [], E = e.defaultColorScheme || "light";
      function k(M, A) {
        Object.keys(A).length && w.push(typeof M == "string" ? {
          [M]: {
            ...A
          }
        } : M);
      }
      k(n(void 0, {
        ...h
      }), h);
      const {
        [E]: T,
        ...P
      } = S;
      if (T) {
        const {
          css: M
        } = T, A = s[E]?.palette?.mode, I = !r && A ? {
          colorScheme: A,
          ...M
        } : {
          ...M
        };
        k(n(E, {
          ...I
        }), I);
      }
      return Object.entries(P).forEach(([M, {
        css: A
      }]) => {
        const I = s[M]?.palette?.mode, y = !r && I ? {
          colorScheme: I,
          ...A
        } : {
          ...A
        };
        k(n(M, {
          ...y
        }), y);
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
function yk(e) {
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
      const u = i[a];
      u && (s += (l === !0 ? "" : " ") + t(u), l = !1, n && n[u] && (s += " " + n[u]));
    }
    r[o] = s;
  }
  return r;
}
function Hc(e, t) {
  return /* @__PURE__ */ p.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? e.type?._payload?.value?.muiName
  ) !== -1;
}
const vk = Yu(), xk = FC("div", {
  name: "MuiStack",
  slot: "Root"
});
function Sk(e) {
  return _C({
    props: e,
    name: "MuiStack",
    defaultTheme: vk
  });
}
function bk(e, t) {
  const n = p.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ p.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const wk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], Ck = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...ro({
      theme: t
    }, Fc({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Bu(t), o = Object.keys(t.breakpoints.values).reduce((a, u) => ((typeof e.spacing == "object" && e.spacing[u] != null || typeof e.direction == "object" && e.direction[u] != null) && (a[u] = !0), a), {}), i = Fc({
      values: e.direction,
      base: o
    }), s = Fc({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, u, d) => {
      if (!i[a]) {
        const v = u > 0 ? i[d[u - 1]] : "column";
        i[a] = v;
      }
    }), n = Ft(n, ro({
      theme: t
    }, s, (a, u) => e.useFlexGap ? {
      gap: Ao(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${wk(u ? i[u] : e.direction)}`]: Ao(r, a)
      }
    }));
  }
  return n = Uw(t.breakpoints, n), n;
};
function kk(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = xk,
    useThemeProps: n = Sk,
    componentName: r = "MuiStack"
  } = e, o = () => fe({
    root: ["root"]
  }, (a) => de(r, a), {}), i = t(Ck);
  return /* @__PURE__ */ p.forwardRef(function(a, u) {
    const d = n(a), {
      component: h = "div",
      direction: v = "column",
      spacing: f = 0,
      divider: S,
      children: b,
      className: C,
      useFlexGap: g = !1,
      ...m
    } = d, x = {
      direction: v,
      spacing: f,
      useFlexGap: g
    }, w = o();
    return /* @__PURE__ */ c.jsx(i, {
      as: h,
      ownerState: x,
      ref: u,
      className: te(w.root, C),
      ...m,
      children: S ? bk(b, S) : b
    });
  });
}
function K0() {
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
      paper: Vs.white,
      default: Vs.white
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
const Y0 = K0();
function Q0() {
  return {
    text: {
      primary: Vs.white,
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
      active: Vs.white,
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
const Jd = Q0();
function Lh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = qu(e.main, o) : t === "dark" && (e.dark = Xu(e.main, i)));
}
function zh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Ek(e = "light") {
  return e === "dark" ? {
    main: Vo[200],
    light: Vo[50],
    dark: Vo[400]
  } : {
    main: Vo[700],
    light: Vo[400],
    dark: Vo[800]
  };
}
function Tk(e = "light") {
  return e === "dark" ? {
    main: Ho[200],
    light: Ho[50],
    dark: Ho[400]
  } : {
    main: Ho[500],
    light: Ho[300],
    dark: Ho[700]
  };
}
function Pk(e = "light") {
  return e === "dark" ? {
    main: Uo[500],
    light: Uo[300],
    dark: Uo[700]
  } : {
    main: Uo[700],
    light: Uo[400],
    dark: Uo[800]
  };
}
function Rk(e = "light") {
  return e === "dark" ? {
    main: Ko[400],
    light: Ko[300],
    dark: Ko[700]
  } : {
    main: Ko[700],
    light: Ko[500],
    dark: Ko[900]
  };
}
function Mk(e = "light") {
  return e === "dark" ? {
    main: Yo[400],
    light: Yo[300],
    dark: Yo[700]
  } : {
    main: Yo[800],
    light: Yo[500],
    dark: Yo[900]
  };
}
function Ik(e = "light") {
  return e === "dark" ? {
    main: Zi[400],
    light: Zi[300],
    dark: Zi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Zi[500],
    dark: Zi[900]
  };
}
function $k(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Lp(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Ek(t), l = e.secondary || Tk(t), a = e.error || Pk(t), u = e.info || Rk(t), d = e.success || Mk(t), h = e.warning || Ik(t);
  function v(C) {
    return o ? $k(C) : VC(C, Jd.text.primary) >= n ? Jd.text.primary : Y0.text.primary;
  }
  const f = ({
    color: C,
    name: g,
    mainShade: m = 500,
    lightShade: x = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[m] && (C.main = C[m]), !C.hasOwnProperty("main"))
      throw new Error(jr(11, g ? ` (${g})` : "", m));
    if (typeof C.main != "string")
      throw new Error(jr(12, g ? ` (${g})` : "", JSON.stringify(C.main)));
    return o ? (zh(o, C, "light", x, r), zh(o, C, "dark", w, r)) : (Lh(C, "light", x, r), Lh(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let S;
  return t === "light" ? S = K0() : t === "dark" && (S = Q0()), Ft({
    // A collection of common colors.
    common: {
      ...Vs
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
      color: h,
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
    grey: wb,
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
    ...S
  }, i);
}
function jk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Ok(e, t) {
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
function Ak(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Dh = {
  textTransform: "uppercase"
}, Fh = '"Roboto", "Helvetica", "Arial", sans-serif';
function G0(e, t) {
  const {
    fontFamily: n = Fh,
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
    ...h
  } = typeof t == "function" ? t(e) : t, v = r / 14, f = d || ((C) => `${C / a * v}rem`), S = (C, g, m, x, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: f(g),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Fh ? {
      letterSpacing: `${Ak(x / g)}em`
    } : {},
    ...w,
    ...u
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
    button: S(s, 14, 1.75, 0.4, Dh),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, Dh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ft({
    htmlFontSize: a,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...b
  }, h, {
    clone: !1
    // No need to clone deep
  });
}
const Nk = 0.2, Lk = 0.14, zk = 0.12;
function lt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Nk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Lk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${zk})`].join(",");
}
const Dk = ["none", lt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), lt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), lt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), lt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), lt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), lt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), lt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), lt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), lt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), lt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), lt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), lt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), lt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), lt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), lt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), lt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), lt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), lt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), lt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), lt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), lt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), lt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), lt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), lt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Fk = ["all"], Bk = {}, _k = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wk = {
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
function Bh(e) {
  return `${Math.round(e)}ms`;
}
function Uk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Hk(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ..._k,
    ...t.easing
  }, r = {
    ...Wk,
    ...t.duration
  }, o = (s = Fk, l = Bk) => {
    const {
      duration: a = r.standard,
      easing: u = n.easeInOut,
      delay: d = 0,
      ...h
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : Bh(a)} ${u} ${typeof d == "string" ? d : Bh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: Uk,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Vk = {};
function Kk(e = Vk) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const Yk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Qk(e) {
  return kr(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function X0(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !Qk(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : kr(l) && (r[s] = {
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
function _h(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Gk = (e) => {
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
function Xk(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Wa(t, Gk(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${_h(n)})` : qu(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${_h(n)})` : Xu(t, n);
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
    shape: u,
    colorSpace: d,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(jr(22));
  const v = Lp({
    ...i,
    colorSpace: d
  }), f = Yu(e);
  let S = Ft(f, {
    mixins: Ok(f.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Dk.slice(),
    typography: G0(v, a),
    motion: Kk(s),
    transitions: Hk(l),
    zIndex: {
      ...Yk
    }
  });
  return S = Ft(S, h), S = t.reduce((b, C) => Ft(b, C), S), delete S.transitions.reducedMotion, S.unstable_sxConfig = {
    ...Ku,
    ...h?.unstable_sxConfig
  }, S.unstable_sx = function(C) {
    return No({
      sx: C,
      theme: this
    });
  }, S.toRuntimeSource = X0, Xk(S), S;
}
function tf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const qk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = tf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function q0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Z0(e) {
  return e === "dark" ? qk : [];
}
function Zk(e) {
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
      ...q0(s.mode),
      ...n
    },
    overlays: r || Z0(s.mode),
    ...i
  };
}
function Jk(e) {
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const e2 = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], t2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o?.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return e2(e.cssVarPrefix).forEach((l) => {
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
function n2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ds(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : B0(e);
}
function yr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = cs(ds(e[t])));
}
function r2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Jn = (e) => {
  try {
    return e();
  } catch {
  }
}, o2 = (e = "mui") => fk(e);
function Vc(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = Zk({
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
  } = ef({
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
      ...q0(i),
      ...n?.opacity
    },
    overlays: n?.overlays || Z0(i)
  }, l;
}
function i2(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Jk,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, h = Object.keys(n)[0], v = r || (n.light && h !== "light" ? "light" : h), f = o2(i), {
    [v]: S,
    light: b,
    dark: C,
    ...g
  } = n, m = {
    ...g
  };
  let x = S;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (x = !0), !x)
    throw new Error(jr(21, v));
  let w;
  s && (w = "oklch");
  const E = Vc(w, m, x, d, v);
  b && !m.light && Vc(w, m, b, void 0, "light"), C && !m.dark && Vc(w, m, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...E,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...jk(E.typography),
      ...E.font
    },
    spacing: r2(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((I) => {
    const y = k.colorSchemes[I].palette, j = ($) => {
      const N = $.split("-"), L = N[1], O = N[2];
      return f($, y[L][O]);
    };
    y.mode === "light" && (F(y.common, "background", "#fff"), F(y.common, "onBackground", "#000")), y.mode === "dark" && (F(y.common, "background", "#000"), F(y.common, "onBackground", "#fff"));
    function R($, N, L) {
      if (w) {
        let O;
        return $ === po && (O = `transparent ${((1 - L) * 100).toFixed(0)}%`), $ === He && (O = `#000 ${(L * 100).toFixed(0)}%`), $ === Ve && (O = `#fff ${(L * 100).toFixed(0)}%`), `color-mix(in ${w}, ${N}, ${O})`;
      }
      return $(N, L);
    }
    if (n2(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      F(y.Alert, "errorColor", R(He, s ? f("palette-error-light") : y.error.light, 0.6)), F(y.Alert, "infoColor", R(He, s ? f("palette-info-light") : y.info.light, 0.6)), F(y.Alert, "successColor", R(He, s ? f("palette-success-light") : y.success.light, 0.6)), F(y.Alert, "warningColor", R(He, s ? f("palette-warning-light") : y.warning.light, 0.6)), F(y.Alert, "errorFilledBg", j("palette-error-main")), F(y.Alert, "infoFilledBg", j("palette-info-main")), F(y.Alert, "successFilledBg", j("palette-success-main")), F(y.Alert, "warningFilledBg", j("palette-warning-main")), F(y.Alert, "errorFilledColor", Jn(() => y.getContrastText(y.error.main))), F(y.Alert, "infoFilledColor", Jn(() => y.getContrastText(y.info.main))), F(y.Alert, "successFilledColor", Jn(() => y.getContrastText(y.success.main))), F(y.Alert, "warningFilledColor", Jn(() => y.getContrastText(y.warning.main))), F(y.Alert, "errorStandardBg", R(Ve, s ? f("palette-error-light") : y.error.light, 0.9)), F(y.Alert, "infoStandardBg", R(Ve, s ? f("palette-info-light") : y.info.light, 0.9)), F(y.Alert, "successStandardBg", R(Ve, s ? f("palette-success-light") : y.success.light, 0.9)), F(y.Alert, "warningStandardBg", R(Ve, s ? f("palette-warning-light") : y.warning.light, 0.9)), F(y.Alert, "errorIconColor", j("palette-error-main")), F(y.Alert, "infoIconColor", j("palette-info-main")), F(y.Alert, "successIconColor", j("palette-success-main")), F(y.Alert, "warningIconColor", j("palette-warning-main")), F(y.AppBar, "defaultBg", j("palette-grey-100")), F(y.Avatar, "defaultBg", j("palette-grey-400")), F(y.Button, "inheritContainedBg", j("palette-grey-300")), F(y.Button, "inheritContainedHoverBg", j("palette-grey-A100")), F(y.Chip, "defaultBorder", j("palette-grey-400")), F(y.Chip, "defaultAvatarColor", j("palette-grey-700")), F(y.Chip, "defaultIconColor", j("palette-grey-700")), F(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(y.LinearProgress, "primaryBg", R(Ve, s ? f("palette-primary-main") : y.primary.main, 0.62)), F(y.LinearProgress, "secondaryBg", R(Ve, s ? f("palette-secondary-main") : y.secondary.main, 0.62)), F(y.LinearProgress, "errorBg", R(Ve, s ? f("palette-error-main") : y.error.main, 0.62)), F(y.LinearProgress, "infoBg", R(Ve, s ? f("palette-info-main") : y.info.main, 0.62)), F(y.LinearProgress, "successBg", R(Ve, s ? f("palette-success-main") : y.success.main, 0.62)), F(y.LinearProgress, "warningBg", R(Ve, s ? f("palette-warning-light") : y.warning.main, 0.62)), F(y.Skeleton, "bg", w ? R(po, s ? f("palette-text-primary") : y.text.primary, 0.11) : `rgba(${j("palette-text-primaryChannel")} / 0.11)`), F(y.Slider, "primaryTrack", R(Ve, s ? f("palette-primary-main") : y.primary.main, 0.62)), F(y.Slider, "secondaryTrack", R(Ve, s ? f("palette-secondary-main") : y.secondary.main, 0.62)), F(y.Slider, "errorTrack", R(Ve, s ? f("palette-error-main") : y.error.main, 0.62)), F(y.Slider, "infoTrack", R(Ve, s ? f("palette-info-main") : y.info.main, 0.62)), F(y.Slider, "successTrack", R(Ve, s ? f("palette-success-main") : y.success.main, 0.62)), F(y.Slider, "warningTrack", R(Ve, s ? f("palette-warning-main") : y.warning.main, 0.62));
      const $ = w ? R(He, s ? f("palette-background-default") : y.background.default, 0.6825) : $l(y.background.default, 0.8);
      F(y.SnackbarContent, "bg", $), F(y.SnackbarContent, "color", Jn(() => w ? Jd.text.primary : y.getContrastText($))), F(y.SpeedDialAction, "fabHoverBg", $l(y.background.paper, 0.15)), F(y.StepConnector, "border", j("palette-grey-400")), F(y.StepContent, "border", j("palette-grey-400")), F(y.Switch, "defaultColor", j("palette-common-white")), F(y.Switch, "defaultDisabledColor", j("palette-grey-100")), F(y.Switch, "primaryDisabledColor", R(Ve, s ? f("palette-primary-main") : y.primary.main, 0.62)), F(y.Switch, "secondaryDisabledColor", R(Ve, s ? f("palette-secondary-main") : y.secondary.main, 0.62)), F(y.Switch, "errorDisabledColor", R(Ve, s ? f("palette-error-main") : y.error.main, 0.62)), F(y.Switch, "infoDisabledColor", R(Ve, s ? f("palette-info-main") : y.info.main, 0.62)), F(y.Switch, "successDisabledColor", R(Ve, s ? f("palette-success-main") : y.success.main, 0.62)), F(y.Switch, "warningDisabledColor", R(Ve, s ? f("palette-warning-main") : y.warning.main, 0.62)), F(y.TableCell, "border", R(Ve, po(s ? f("palette-divider") : y.divider, 1), 0.88)), F(y.Tooltip, "bg", R(po, s ? f("palette-grey-700") : y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      F(y.Alert, "errorColor", R(Ve, s ? f("palette-error-light") : y.error.light, 0.6)), F(y.Alert, "infoColor", R(Ve, s ? f("palette-info-light") : y.info.light, 0.6)), F(y.Alert, "successColor", R(Ve, s ? f("palette-success-light") : y.success.light, 0.6)), F(y.Alert, "warningColor", R(Ve, s ? f("palette-warning-light") : y.warning.light, 0.6)), F(y.Alert, "errorFilledBg", j("palette-error-dark")), F(y.Alert, "infoFilledBg", j("palette-info-dark")), F(y.Alert, "successFilledBg", j("palette-success-dark")), F(y.Alert, "warningFilledBg", j("palette-warning-dark")), F(y.Alert, "errorFilledColor", Jn(() => y.getContrastText(y.error.dark))), F(y.Alert, "infoFilledColor", Jn(() => y.getContrastText(y.info.dark))), F(y.Alert, "successFilledColor", Jn(() => y.getContrastText(y.success.dark))), F(y.Alert, "warningFilledColor", Jn(() => y.getContrastText(y.warning.dark))), F(y.Alert, "errorStandardBg", R(He, s ? f("palette-error-light") : y.error.light, 0.9)), F(y.Alert, "infoStandardBg", R(He, s ? f("palette-info-light") : y.info.light, 0.9)), F(y.Alert, "successStandardBg", R(He, s ? f("palette-success-light") : y.success.light, 0.9)), F(y.Alert, "warningStandardBg", R(He, s ? f("palette-warning-light") : y.warning.light, 0.9)), F(y.Alert, "errorIconColor", j("palette-error-main")), F(y.Alert, "infoIconColor", j("palette-info-main")), F(y.Alert, "successIconColor", j("palette-success-main")), F(y.Alert, "warningIconColor", j("palette-warning-main")), F(y.AppBar, "defaultBg", j("palette-grey-900")), F(y.AppBar, "darkBg", j("palette-background-paper")), F(y.AppBar, "darkColor", j("palette-text-primary")), F(y.Avatar, "defaultBg", j("palette-grey-600")), F(y.Button, "inheritContainedBg", j("palette-grey-800")), F(y.Button, "inheritContainedHoverBg", j("palette-grey-700")), F(y.Chip, "defaultBorder", j("palette-grey-700")), F(y.Chip, "defaultAvatarColor", j("palette-grey-300")), F(y.Chip, "defaultIconColor", j("palette-grey-300")), F(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(y.LinearProgress, "primaryBg", R(He, s ? f("palette-primary-main") : y.primary.main, 0.5)), F(y.LinearProgress, "secondaryBg", R(He, s ? f("palette-secondary-main") : y.secondary.main, 0.5)), F(y.LinearProgress, "errorBg", R(He, s ? f("palette-error-main") : y.error.main, 0.5)), F(y.LinearProgress, "infoBg", R(He, s ? f("palette-info-main") : y.info.main, 0.5)), F(y.LinearProgress, "successBg", R(He, s ? f("palette-success-main") : y.success.main, 0.5)), F(y.LinearProgress, "warningBg", R(He, s ? f("palette-warning-main") : y.warning.main, 0.5)), F(y.Skeleton, "bg", w ? R(po, s ? f("palette-text-primary") : y.text.primary, 0.13) : `rgba(${j("palette-text-primaryChannel")} / 0.13)`), F(y.Slider, "primaryTrack", R(He, s ? f("palette-primary-main") : y.primary.main, 0.5)), F(y.Slider, "secondaryTrack", R(He, s ? f("palette-secondary-main") : y.secondary.main, 0.5)), F(y.Slider, "errorTrack", R(He, s ? f("palette-error-main") : y.error.main, 0.5)), F(y.Slider, "infoTrack", R(He, s ? f("palette-info-main") : y.info.main, 0.5)), F(y.Slider, "successTrack", R(He, s ? f("palette-success-main") : y.success.main, 0.5)), F(y.Slider, "warningTrack", R(He, s ? f("palette-warning-light") : y.warning.main, 0.5));
      const $ = w ? R(Ve, s ? f("palette-background-default") : y.background.default, 0.985) : $l(y.background.default, 0.98);
      F(y.SnackbarContent, "bg", $), F(y.SnackbarContent, "color", Jn(() => w ? Y0.text.primary : y.getContrastText($))), F(y.SpeedDialAction, "fabHoverBg", $l(y.background.paper, 0.15)), F(y.StepConnector, "border", j("palette-grey-600")), F(y.StepContent, "border", j("palette-grey-600")), F(y.Switch, "defaultColor", j("palette-grey-300")), F(y.Switch, "defaultDisabledColor", j("palette-grey-600")), F(y.Switch, "primaryDisabledColor", R(He, s ? f("palette-primary-main") : y.primary.main, 0.55)), F(y.Switch, "secondaryDisabledColor", R(He, s ? f("palette-secondary-main") : y.secondary.main, 0.55)), F(y.Switch, "errorDisabledColor", R(He, s ? f("palette-error-main") : y.error.main, 0.55)), F(y.Switch, "infoDisabledColor", R(He, s ? f("palette-info-main") : y.info.main, 0.55)), F(y.Switch, "successDisabledColor", R(He, s ? f("palette-success-main") : y.success.main, 0.55)), F(y.Switch, "warningDisabledColor", R(He, s ? f("palette-warning-light") : y.warning.main, 0.55)), F(y.TableCell, "border", R(He, po(s ? f("palette-divider") : y.divider, 1), 0.68)), F(y.Tooltip, "bg", R(po, s ? f("palette-grey-700") : y.grey[700], 0.92));
    }
    s || (yr(y.background, "default"), yr(y.background, "paper"), yr(y.common, "background"), yr(y.common, "onBackground"), yr(y, "divider")), Object.keys(y).forEach(($) => {
      const N = y[$];
      $ !== "tonalOffset" && !s && N && typeof N == "object" && (N.main && F(y[$], "mainChannel", cs(ds(N.main))), N.light && F(y[$], "lightChannel", cs(ds(N.light))), N.dark && F(y[$], "darkChannel", cs(ds(N.dark))), N.contrastText && F(y[$], "contrastTextChannel", cs(ds(N.contrastText))), $ === "text" && (yr(y[$], "primary"), yr(y[$], "secondary")), $ === "action" && (N.active && yr(y[$], "active"), N.selected && yr(y[$], "selected")));
    });
  }), k = t.reduce((I, y) => Ft(I, y), k);
  const T = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: t2(k),
    enableContrastVars: s
  }, {
    vars: P,
    generateThemeVars: M,
    generateStyleSheets: A
  } = gk(k, T);
  return k.vars = P, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([I, y]) => {
    k[I] = y;
  }), k.generateThemeVars = M, k.generateStyleSheets = A, k.generateSpacing = function() {
    return O0(d.spacing, Bu(this));
  }, k.getColorSchemeSelector = yk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Ku,
    ...d?.unstable_sxConfig
  }, k.unstable_sx = function(y) {
    return No({
      sx: y,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = X0, k;
}
function Wh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Lp({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Zu(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n?.mode,
    ...s
  } = e, l = i || "light", a = o?.[l], u = {
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
    "palette" in e || u[l] && (u[l] !== !0 ? d = u[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const h = ef({
      ...e,
      palette: d
    }, ...t);
    return h.defaultColorScheme = l, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: h.palette
    }, Wh(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: h.palette
    }, Wh(h, "light", u.light)), h;
  }
  return !n && !("light" in u) && l === "light" && (u.light = !0), i2({
    ...s,
    colorSchemes: u,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ua(e) {
  return typeof e == "string";
}
function Ju(e, t = 166) {
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
function Je(e) {
  const t = p.useRef(e);
  return dt(() => {
    t.current = e;
  }), p.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function yt(e) {
  return e && e.ownerDocument || document;
}
function Xn(e) {
  return yt(e).defaultView || window;
}
function jl(e) {
  return parseInt(e, 10) || 0;
}
const s2 = {
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
function l2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Uh(e) {
  return l2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const a2 = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: u
  } = p.useRef(l != null), d = p.useRef(null), h = pt(n, d), v = p.useRef(null), f = p.useRef(null), S = p.useCallback(() => {
    const x = d.current, w = f.current;
    if (!x || !w)
      return;
    const k = Xn(x).getComputedStyle(x);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = x.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const T = k.boxSizing, P = jl(k.paddingBottom) + jl(k.paddingTop), M = jl(k.borderBottomWidth) + jl(k.borderTopWidth), A = w.scrollHeight;
    w.value = "x";
    const I = w.scrollHeight;
    let y = A;
    i && (y = Math.max(Number(i) * I, y)), o && (y = Math.min(Number(o) * I, y)), y = Math.max(y, I);
    const j = y + (T === "border-box" ? P + M : 0), R = Math.abs(y - A) <= 1;
    return {
      outerHeightStyle: j,
      overflowing: R
    };
  }, [o, i, t.placeholder]), b = Je(() => {
    const x = d.current, w = S();
    if (!x || !w || Uh(w))
      return !1;
    const E = w.outerHeightStyle;
    return v.current != null && v.current !== E;
  }), C = p.useCallback(() => {
    const x = d.current, w = S();
    if (!x || !w || Uh(w))
      return;
    const E = w.outerHeightStyle;
    v.current !== E && (v.current = E, x.style.height = `${E}px`), x.style.overflow = w.overflowing ? "hidden" : "";
  }, [S]), g = p.useRef(-1);
  dt(() => {
    const x = Ju(C), w = d?.current;
    if (!w)
      return;
    const E = Xn(w);
    E.addEventListener("resize", x);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(w), cancelAnimationFrame(g.current), C(), g.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      x.clear(), cancelAnimationFrame(g.current), E.removeEventListener("resize", x), k && k.disconnect();
    };
  }, [S, C, b]), dt(() => {
    C();
  });
  const m = (x) => {
    u || C();
    const w = x.target, E = w.value.length, k = w.value.endsWith(`
`), T = w.selectionStart === E;
    k && T && w.setSelectionRange(E, E), r && r(x);
  };
  return /* @__PURE__ */ c.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ c.jsx("textarea", {
      value: l,
      onChange: m,
      ref: h,
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
        ...s2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), cl = /* @__PURE__ */ p.createContext(void 0);
function u2() {
  return p.useContext(cl);
}
function _i({
  props: e,
  states: t
}) {
  const n = p.useContext(cl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const zp = Zu();
function uo() {
  const e = Qu(zp);
  return e[ur] || e;
}
function c2(e) {
  return /* @__PURE__ */ c.jsx(A0, {
    ...e,
    defaultTheme: zp,
    themeId: ur
  });
}
function J0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Sn = (e) => J0(e) && e !== "classes", U = F0({
  themeId: ur,
  defaultTheme: zp,
  rootShouldForwardProp: Sn
});
function d2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ c.jsx(c2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ge = rk;
function pe(e) {
  return JC(e);
}
function ir(e) {
  let t = e.activeElement;
  for (; t?.shadowRoot?.activeElement != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Hh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ha(e, t = !1) {
  return e && (Hh(e.value) && e.value !== "" || t && Hh(e.defaultValue) && e.defaultValue !== "");
}
function f2(e) {
  return e.startAdornment;
}
function p2(e) {
  return de("MuiInputBase", e);
}
const un = ue("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), m2 = {
  transition: "none"
};
function h2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Dp = (e) => e.scrollTop, ex = {}, g2 = ["all"], y2 = {};
function Pn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function tx(e, t, n, r, o, i) {
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
    style: o = ex
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function Wi(e, t) {
  const n = t ?? m2;
  return h2(e.motion?.reducedMotion, n);
}
function et(e, t = g2, n = y2) {
  const r = e.transitions?.create?.(t, n), o = Wi(e);
  if (r === void 0)
    return o ?? ex;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Vh;
const nf = "mui-auto-fill", Ka = "mui-auto-fill-cancel", ec = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ie(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, tc = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, v2 = (e) => {
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
    readOnly: h,
    size: v,
    startAdornment: f,
    type: S
  } = e, b = {
    root: ["root", `color${ie(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${ie(v)}`, d && "multiline", f && "adornedStart", i && "adornedEnd", u && "hiddenLabel", h && "readOnly"],
    input: ["input", r && "disabled", S === "search" && "inputTypeSearch", h && "readOnly"]
  };
  return fe(b, p2, t);
}, nc = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: ec
})(ge(({
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
}))), rc = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: tc
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...et(e, "opacity", {
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
        animationName: Ka,
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
})), Kh = d2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${nf}`]: {
    from: {
      animationName: nf
    }
  },
  [`@keyframes ${Ka}`]: {
    from: {
      animationName: Ka
    }
  }
}), Fp = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    disabled: h,
    disableInjectingGlobalStyles: v,
    endAdornment: f,
    error: S,
    fullWidth: b = !1,
    id: C,
    inputComponent: g = "input",
    inputProps: m = {},
    inputRef: x,
    margin: w,
    maxRows: E,
    minRows: k,
    multiline: T = !1,
    name: P,
    onBlur: M,
    onChange: A,
    onClick: I,
    onFocus: y,
    onKeyDown: j,
    onKeyUp: R,
    placeholder: $,
    readOnly: N,
    renderSuffix: L,
    rows: O,
    size: D,
    slotProps: B = {},
    slots: H = {},
    startAdornment: W,
    type: G = "text",
    value: Y,
    ...re
  } = r, Q = m.value != null ? m.value : Y, {
    current: X
  } = p.useRef(Q != null), K = p.useRef(), ne = p.useCallback((ae) => {
  }, []), he = pt(K, x, m.ref, ne), [Re, ve] = p.useState(!1), [me, le] = _i({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  me.focused = le ? le.focused : Re, p.useEffect(() => {
    !le && h && Re && (ve(!1), M && M());
  }, [le, h, Re, M]);
  const Me = le && le.onFilled, _e = le && le.onEmpty, Ae = p.useCallback((ae) => {
    Ha(ae) ? Me && Me() : _e && _e();
  }, [Me, _e]);
  dt(() => {
    X && Ae({
      value: Q
    });
  }, [Q, Ae, X]), dt(() => {
    if (!l)
      return;
    const ae = K.current;
    if (!ae)
      return;
    const Ue = yt(ae), qe = ir(Ue), Pt = qe == null || qe === Ue.body || qe === Ue.documentElement;
    ae === qe ? le && le.onFocus ? le.onFocus() : ve(!0) : Pt && ae.focus();
  }, [l]);
  const Ie = (ae) => {
    y && y(ae), m.onFocus && m.onFocus(ae), le && le.onFocus ? le.onFocus(ae) : ve(!0);
  }, ce = (ae) => {
    M && M(ae), m.onBlur && m.onBlur(ae), le && le.onBlur ? le.onBlur(ae) : ve(!1);
  }, Pe = (ae, ...Ue) => {
    if (!X) {
      const qe = ae.target || K.current;
      if (qe == null)
        throw new Error(jr(1));
      Ae({
        value: qe.value
      });
    }
    m.onChange && m.onChange(ae, ...Ue), A && A(ae, ...Ue);
  };
  p.useEffect(() => {
    Ae(K.current);
  }, []);
  const tt = (ae) => {
    K.current && ae.currentTarget === ae.target && K.current.focus(), I && I(ae);
  };
  let Ne = g, We = m;
  T && Ne === "input" && (O ? We = {
    type: void 0,
    minRows: O,
    maxRows: O,
    ...We
  } : We = {
    type: void 0,
    maxRows: E,
    minRows: k,
    ...We
  }, Ne = a2);
  const $e = (ae) => {
    Ae(ae.animationName === Ka ? K.current : {
      value: "x"
    });
  };
  p.useEffect(() => {
    le && le.setAdornedStart(!!W);
  }, [le, W]);
  const Qe = {
    ...r,
    color: me.color || "primary",
    disabled: me.disabled,
    endAdornment: f,
    error: me.error,
    focused: me.focused,
    formControl: le,
    fullWidth: b,
    hiddenLabel: me.hiddenLabel,
    multiline: T,
    size: me.size,
    startAdornment: W,
    type: G
  }, xe = v2(Qe), se = H.root || nc, Se = B.root || {}, Ge = H.input || rc;
  return We = {
    ...We,
    ...B.input
  }, /* @__PURE__ */ c.jsxs(p.Fragment, {
    children: [!v && typeof Kh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Vh || (Vh = /* @__PURE__ */ c.jsx(Kh, {}))), /* @__PURE__ */ c.jsxs(se, {
      ...Se,
      ref: n,
      onClick: tt,
      ...re,
      ...!Ua(se) && {
        ownerState: {
          ...Qe,
          ...Se.ownerState
        }
      },
      className: te(xe.root, Se.className, a, N && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ c.jsx(cl.Provider, {
        value: null,
        children: /* @__PURE__ */ c.jsx(Ge, {
          "aria-invalid": me.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: me.disabled,
          id: C,
          onAnimationStart: $e,
          name: P,
          placeholder: $,
          readOnly: N,
          required: me.required,
          rows: O,
          value: Q,
          onKeyDown: j,
          onKeyUp: R,
          type: G,
          ...We,
          ...!Ua(Ge) && {
            as: Ne,
            ownerState: {
              ...Qe,
              ...We.ownerState
            }
          },
          ref: he,
          className: te(xe.input, We.className, N && "MuiInputBase-readOnly"),
          onBlur: ce,
          onChange: Pe,
          onFocus: Ie
        })
      }), f, L ? L({
        ...me,
        startAdornment: W
      }) : null]
    })]
  });
});
function x2(e) {
  return de("MuiFilledInput", e);
}
const mo = {
  ...un,
  ...ue("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function S2(e) {
  return de("MuiFormHelperText", e);
}
const Yh = ue("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function b2(e) {
  return de("MuiFormLabel", e);
}
const bs = ue("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function w2(e) {
  return de("MuiInput", e);
}
const es = {
  ...un,
  ...ue("MuiInput", ["root", "underline", "input"])
};
function C2(e) {
  return de("MuiMenuItem", e);
}
const ts = ue("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function k2(e) {
  return de("MuiNativeSelect", e);
}
const Bp = ue("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function E2(e) {
  return de("MuiOutlinedInput", e);
}
const er = {
  ...un,
  ...ue("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function T2({
  theme: e,
  ...t
}) {
  const n = ur in e ? e[ur] : void 0;
  return /* @__PURE__ */ c.jsx(H0, {
    ...t,
    themeId: n ? ur : void 0,
    theme: n || e
  });
}
const Ol = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: P2
} = dk({
  themeId: ur,
  // @ts-ignore ignore module augmentation tests
  theme: () => Zu({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ol.colorSchemeStorageKey,
  modeStorageKey: Ol.modeStorageKey,
  defaultColorScheme: {
    light: Ol.defaultLightColorScheme,
    dark: Ol.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: G0(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return No({
        sx: r,
        theme: this
      });
    }, t;
  }
}), R2 = P2;
function M2({
  theme: e,
  ...t
}) {
  const n = p.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = ur in e ? e[ur] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ c.jsx(T2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ c.jsx(R2, {
    theme: e,
    ...t
  });
}
function Qh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function I2(e) {
  return de("MuiSvgIcon", e);
}
ue("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const $2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ie(t)}`, `fontSize${ie(n)}`]
  };
  return fe(o, I2, r);
}, j2 = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ie(n.color)}`], t[`fontSize${ie(n.fontSize)}`]];
  }
})(ge(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  ...et(e, "fill", {
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
}))), rf = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    titleAccess: h,
    viewBox: v = "0 0 24 24",
    ...f
  } = r, S = /* @__PURE__ */ p.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: S
  }, C = {};
  d || (C.viewBox = v);
  const g = $2(b);
  return /* @__PURE__ */ c.jsxs(j2, {
    as: l,
    className: te(g.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": h ? void 0 : !0,
    role: h ? "img" : void 0,
    ref: n,
    ...C,
    ...f,
    ...S && o.props,
    ownerState: b,
    children: [S ? o.props.children : o, h ? /* @__PURE__ */ c.jsx("title", {
      children: h
    }) : null]
  });
});
rf.muiName = "SvgIcon";
function bt(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ c.jsx(rf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = rf.muiName, /* @__PURE__ */ p.memo(/* @__PURE__ */ p.forwardRef(n));
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
  } = p.useRef(t !== void 0), [s, l] = p.useState(n), a = i ? t : s, u = p.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, u];
}
function nx(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function O2(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((u) => {
      nx(u, l[u]) && typeof s[u] == "function" && (a[u] = (...d) => {
        s[u](...d), l[u](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, u = te(s?.className, l?.className, a?.className), d = n(a, l);
      return {
        ...l,
        ...a,
        ...d,
        ...!!u && {
          className: u
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
  const r = t, o = n(e, r), i = te(r?.className, e?.className);
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
const Gh = {};
function _p(e, t) {
  const n = p.useRef(Gh);
  return n.current === Gh && (n.current = e(t)), n;
}
function A2(e) {
  const t = _p(() => N2(e)).current;
  return t.next = e, dt(t.effect), t;
}
function N2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Xh = ey.createContext(null);
function L2(e) {
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
function z2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = L2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function rx(e) {
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
    nodeRef: h,
    onEnter: v,
    onEntering: f,
    onEntered: S,
    onExit: b,
    onExiting: C,
    onExited: g,
    children: m,
    ...x
  } = e, w = p.useContext(Xh), E = w && !w.isMounting ? r : n, [k, T] = p.useState(() => t ? E ? "exited" : "entered" : i || s ? "unmounted" : "exited"), P = p.useRef(k);
  P.current = k, t && k === "unmounted" && (P.current = "exited", T("exited"));
  const M = p.useRef(t && E), A = p.useRef(!1), I = p.useRef(null), y = p.useRef(k), j = p.useRef(!1), R = p.useRef(u), $ = A2({
    timeout: l,
    addEndListener: a,
    reduceMotion: u,
    getAutoTimeout: d,
    onEnter: v,
    onEntering: f,
    onEntered: S,
    onExit: b,
    onExiting: C,
    onExited: g,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: h,
    parentGroup: w
  }), N = p.useCallback(() => {
    I.current !== null && (I.current.cancel(), I.current = null);
  }, []), L = p.useCallback((W) => {
    let G = !0;
    const Y = () => {
      G && (G = !1, I.current = null, W());
    };
    return Y.cancel = () => {
      G = !1;
    }, I.current = Y, Y;
  }, []), O = p.useCallback((W, G) => {
    let Y;
    const re = () => {
      Y !== void 0 && (clearTimeout(Y), Y = void 0);
    }, Q = L(() => {
      re(), P.current = W, T(W);
    }), X = Q.cancel;
    Q.cancel = () => {
      re(), X();
    };
    const K = $.current.nodeRef.current, ne = $.current.addEndListener, he = $.current.getAutoTimeout !== void 0, Re = $.current.getAutoTimeout?.(), ve = z2({
      currentStatus: G,
      isAppearing: j.current,
      timeout: $.current.timeout,
      autoTimeout: Re
    }), me = R.current, le = ve ?? (me && he ? 0 : null), Me = (_e) => {
      Y = setTimeout(Q, _e);
    };
    if (!K) {
      Me(0);
      return;
    }
    if (ne) {
      le != null && Me(me ? 0 : le), ne.length >= 2 ? ne(K, Q) : ne(Q);
      return;
    }
    Me(me ? 0 : ve ?? 0);
  }, [L, $]), D = p.useCallback((W) => {
    const G = $.current, Y = G.parentGroup ? G.parentGroup.isMounting : W;
    if (j.current = Y, !W && !G.enter) {
      P.current = "entered", T("entered");
      return;
    }
    R.current = G.reduceMotion, G.onEnter?.(Y), P.current = "entering", T("entering");
  }, [$]), B = p.useCallback(() => {
    const W = $.current;
    if (!W.exit) {
      P.current = "exited", T("exited");
      return;
    }
    R.current = W.reduceMotion, W.onExit?.(), P.current = "exiting", T("exiting");
  }, [$]), H = p.useCallback((W, G) => {
    if (N(), G === "entering") {
      const Y = $.current;
      if (Y.mountOnEnter || Y.unmountOnExit) {
        const re = Y.nodeRef.current;
        re && Dp(re);
      }
      D(W);
    } else
      B();
  }, [N, D, B, $]);
  return dt(() => (A.current = !0, M.current && (M.current = !1, H(!0, "entering")), () => {
    A.current = !1, N();
  }), [N, H]), dt(() => {
    if (!A.current)
      return;
    const W = P.current;
    t ? W !== "entering" && W !== "entered" && H(!1, "entering") : W === "entering" || W === "entered" ? H(!1, "exiting") : W === "exited" && s && (P.current = "unmounted", T("unmounted"));
  }, [t, k, s, H]), dt(() => {
    if (k === "unmounted" || y.current === "unmounted") {
      y.current = k;
      return;
    }
    const G = y.current !== k;
    G && (y.current = k);
    const Y = $.current;
    k === "entering" ? (G && Y.onEntering?.(j.current), I.current === null && P.current === k && O("entered", "entering")) : k === "exiting" ? (G && Y.onExiting?.(), I.current === null && P.current === k && O("exited", "exiting")) : k === "entered" && G ? Y.onEntered?.(j.current) : k === "exited" && G && Y.onExited?.();
  }, [$, O, k]), k === "unmounted" ? null : /* @__PURE__ */ c.jsx(Xh.Provider, {
    value: null,
    children: m(k, x)
  });
}
const ox = "(prefers-reduced-motion: reduce)", D2 = 0, F2 = "0ms", B2 = () => {
}, qh = () => !1, _2 = () => !0, W2 = () => B2;
function U2(e) {
  const [t, n] = p.useState(() => ({
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
    const i = window.matchMedia(ox), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const H2 = {
  ...ma
}, ix = H2.useSyncExternalStore;
function V2(e) {
  const t = e ? _2 : qh, [n, r] = p.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [qh, W2];
    const o = window.matchMedia(ox);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return ix(r, n, t);
}
const K2 = ix !== void 0 ? V2 : U2;
function oc(e, t) {
  const n = K2(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return p.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: D2,
        delay: F2
      } : o;
    }
  }), [r]);
}
function sx(e, t, n) {
  return e === void 0 || Ua(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function lx(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ya(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    nx(n, e[n]) && (t[n] = e[n]);
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
function ax(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = te(n?.className, i, o?.className, r?.className), S = {
      ...n?.style,
      ...o?.style,
      ...r?.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (b.className = f), Object.keys(S).length > 0 && (b.style = S), {
      props: b,
      internalRef: void 0
    };
  }
  const s = Ya({
    ...o,
    ...r
  }), l = Zh(r), a = Zh(o), u = t(s), d = te(u?.className, n?.className, i, o?.className, r?.className), h = {
    ...u?.style,
    ...n?.style,
    ...o?.style,
    ...r?.style
  }, v = {
    ...u,
    ...n,
    ...a,
    ...l
  };
  return d.length > 0 && (v.className = d), Object.keys(h).length > 0 && (v.style = h), {
    props: v,
    internalRef: u.ref
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
    component: u,
    slots: d = {
      [e]: void 0
    },
    slotProps: h = {
      [e]: void 0
    },
    ...v
  } = i, f = d[e] || r, S = lx(h[e], o), {
    props: {
      component: b,
      ...C
    },
    internalRef: g
  } = ax({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: S
  }), m = pt(g, S?.ref, t.ref), x = e === "root" ? b || u : b, w = sx(f, {
    ...e === "root" && !u && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...C,
    ...x && !l && {
      as: x
    },
    ...x && l && {
      component: x
    },
    ref: m
  }, o);
  return [f, w];
}
function Y2(e) {
  return de("MuiPaper", e);
}
ue("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Q2 = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return fe(i, Y2, o);
}, G2 = U("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ge(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...et(e, "box-shadow"),
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
}))), cn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiPaper"
  }), o = uo(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: u = "elevation",
    ...d
  } = r, h = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: u
  }, v = Q2(h);
  return /* @__PURE__ */ c.jsx(G2, {
    as: s,
    ownerState: h,
    className: te(v.root, i),
    ref: n,
    ...d,
    style: {
      ...u === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": o.vars.overlays?.[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Wa("#fff", tf(l))}, ${Wa("#fff", tf(l))})`
        }
      },
      ...d.style
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
function X2(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return p.useMemo(() => {
    const u = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(d) {
        n && t && d.key !== "Tab" && d.preventDefault();
      }
    };
    return r || (u.tabIndex = o, !i && n && (u.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (u["aria-disabled"] = n), i && (!t || l) && (u.disabled = n), u;
  }, [r, n, t, s, l, i, o]);
}
const q2 = {};
function Z2(e) {
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
  } = e, d = p.useRef(null), h = s === !0, v = X2({
    focusableWhenDisabled: h,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = p.useCallback(() => {
    const C = d.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), S = p.useMemo(() => {
    const C = h ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, h || (C.disabled = n)) : (C.role = "button", !h && n && (C["aria-disabled"] = n)), h ? {
      ...C,
      ...v
    } : C;
  }, [n, h, v, o, t, i, r]);
  return {
    getButtonProps: p.useCallback((C = q2) => {
      const {
        onClick: g,
        onKeyDown: m,
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
          g?.(P);
        },
        onKeyDown: (P) => {
          if (h && v.onKeyDown(P), !n && (a?.(P), m?.(P), !(P.target !== P.currentTarget || f()))) {
            if (P.key === " ") {
              P.preventDefault();
              return;
            }
            P.key === "Enter" && (P.preventDefault(), P.currentTarget.click());
          }
        },
        onKeyUp: (P) => {
          n || (u?.(P), x?.(P), P.target === P.currentTarget && !f() && P.key === " " && !P.defaultPrevented && P.currentTarget.click());
        }
      };
    }, [S, n, h, v, f, a, u, l]),
    rootRef: d
  };
}
class Ga {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Ga();
  }
  static use() {
    const t = _p(Ga.create).current, [n, r] = p.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, p.useEffect(t.mountEffect, [n]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = eE(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function J2() {
  return Ga.use();
}
function eE() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const tE = [];
function ux(e) {
  p.useEffect(e, tE);
}
class ic {
  static create() {
    return new ic();
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
function sr() {
  const e = _p(ic.create).current;
  return ux(e.disposeEffect), e;
}
function nE(e) {
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
  } = e, [d, h] = p.useState(!1), v = sr(), f = p.useRef(!1), S = p.useRef(a);
  S.current = a;
  const b = a != null, C = te(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), g = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = te(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && h(!0), p.useEffect(() => {
    !l && b ? f.current || (f.current = !0, v.start(u, () => {
      f.current = !1, S.current?.();
    })) : (f.current = !1, v.clear());
  }, [v, b, l, u]), /* @__PURE__ */ c.jsx("span", {
    className: C,
    style: g,
    children: /* @__PURE__ */ c.jsx("span", {
      className: m
    })
  });
}
const Yt = ue("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), lf = 550, rE = 80, Al = {}, Jh = [], oE = () => {
};
function Kc(e, t) {
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
function iE({
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
const sE = ao`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, lE = ao`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, aE = ao`
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
function uE(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = no`
    &.${Yt.rippleVisible} {
      animation-name: ${sE};
      animation-duration: ${lf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Yt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Yt.childLeaving} {
      animation-name: ${lE};
      animation-duration: ${lf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Yt.childPulsate} {
      animation-name: ${aE};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? no`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const cE = U("span", {
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
}), dE = U(nE, {
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
}) => uE(e)}
`, fE = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTouchRipple"
  }), o = uo(), i = oc(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Al,
    className: a,
    ...u
  } = r, [d, h] = p.useState({
    items: Jh,
    order: Jh
  }), v = d.items, f = p.useRef(0), S = p.useRef(null), b = p.useRef(!1);
  ux(() => (b.current = !0, () => {
    b.current = !1;
  })), p.useEffect(() => {
    S.current && (S.current(), S.current = null);
  }, [v]);
  const C = p.useRef(!1), g = sr(), m = p.useRef(null), x = p.useRef(null), w = Je((I) => {
    b.current && h((y) => {
      const j = y.items.filter(($) => $.key !== I), R = Kc(y.order.filter(($) => $ !== I), j.filter(($) => !$.exiting).map(($) => $.key));
      return {
        items: j,
        order: R
      };
    });
  }), E = Je((I) => {
    const {
      pulsate: y,
      rippleX: j,
      rippleY: R,
      rippleSize: $,
      cb: N
    } = I, L = f.current;
    f.current += 1, h((O) => {
      const D = [...O.items, {
        key: L,
        pulsate: y,
        rippleX: j,
        rippleY: R,
        rippleSize: $,
        exiting: !1
      }];
      return {
        items: D,
        order: Kc(O.order, D.filter((B) => !B.exiting).map((B) => B.key))
      };
    }), S.current = N;
  }), k = Je((I = Al, y = Al, j = oE) => {
    const {
      pulsate: R = !1,
      center: $ = s || y.pulsate,
      fakeElement: N = !1
      // Used only by tests.
    } = y;
    if (I?.type === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    I?.type === "touchstart" && (C.current = !0);
    const L = N ? null : x.current, {
      rippleX: O,
      rippleY: D,
      rippleSize: B
    } = iE({
      event: I,
      element: L,
      center: $
    });
    I?.touches ? m.current === null && (m.current = () => {
      E({
        pulsate: R,
        rippleX: O,
        rippleY: D,
        rippleSize: B,
        cb: j
      });
    }, g.start(rE, () => {
      m.current && (m.current(), m.current = null);
    })) : E({
      pulsate: R,
      rippleX: O,
      rippleY: D,
      rippleSize: B,
      cb: j
    });
  }), T = Je(() => {
    k(Al, {
      pulsate: !0
    });
  }), P = Je((I, y) => {
    if (g.clear(), I?.type === "touchend" && m.current) {
      m.current(), m.current = null, g.start(0, () => {
        P(I, y);
      });
      return;
    }
    m.current = null, h((j) => {
      const R = j.items.findIndex((N) => !N.exiting);
      if (R === -1)
        return j;
      const $ = j.items.slice();
      return $[R] = {
        ...$[R],
        exiting: !0
      }, {
        items: $,
        order: Kc(j.order, $.filter((N) => !N.exiting).map((N) => N.key))
      };
    }), S.current = y;
  });
  p.useImperativeHandle(n, () => ({
    pulsate: T,
    start: k,
    stop: P
  }), [T, k, P]);
  const M = new Map(v.map((I) => [I.key, I])), A = d.order.map((I) => M.get(I)).filter(Boolean);
  return /* @__PURE__ */ c.jsx(cE, {
    className: te(Yt.root, l.root, a),
    ref: x,
    ...u,
    children: A.map((I) => /* @__PURE__ */ c.jsx(dE, {
      classes: {
        ripple: te(l.ripple, Yt.ripple),
        rippleVisible: te(l.rippleVisible, Yt.rippleVisible),
        ripplePulsate: te(l.ripplePulsate, Yt.ripplePulsate),
        child: te(l.child, Yt.child),
        childLeaving: te(l.childLeaving, Yt.childLeaving),
        childPulsate: te(l.childPulsate, Yt.childPulsate)
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
function pE(e) {
  return de("MuiButtonBase", e);
}
const mE = ue("MuiButtonBase", ["root", "disabled", "focusVisible"]), hE = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = fe({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, pE, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, gE = U("button", {
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
  [`&.${mE.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Lo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    disableTouchRipple: h = !1,
    focusRipple: v = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: S,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: b = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    /* eslint-enable react/prop-types */
    LinkComponent: g = "a",
    nativeButton: m,
    onBlur: x,
    onClick: w,
    onContextMenu: E,
    onDragLeave: k,
    onFocus: T,
    onFocusVisible: P,
    onKeyDown: M,
    onKeyUp: A,
    onMouseDown: I,
    onMouseLeave: y,
    onMouseUp: j,
    onTouchEnd: R,
    onTouchMove: $,
    onTouchStart: N,
    tabIndex: L = 0,
    TouchRippleProps: O,
    touchRippleRef: D,
    type: B,
    ...H
  } = r, W = !!(H.href || H.to), G = !!H.formAction;
  let Y = a;
  Y === "button" && W && (Y = g);
  const Q = m ?? (typeof Y == "string" ? Y === "button" : C ?? !1), X = J2(), K = pt(X.ref, D), [ne, he] = p.useState(!1);
  (u || b) && ne && he(!1);
  const Re = Je((Le) => {
    v && !Le.repeat && ne && Le.key === " " && X.stop(Le, () => {
      X.start(Le);
    });
  }), ve = Je((Le) => {
    v && Le.key === " " && ne && !Le.defaultPrevented && X.stop(Le, () => {
      X.pulsate(Le);
    });
  }), {
    getButtonProps: me,
    rootRef: le
  } = Z2({
    nativeButton: Q,
    disabled: u,
    type: B,
    hasFormAction: G,
    tabIndex: L,
    onBeforeKeyDown: Re,
    onBeforeKeyUp: ve
  }), {
    onClick: Me,
    onKeyDown: _e,
    onKeyUp: Ae,
    ...Ie
  } = me({
    onClick: w,
    onKeyDown: M,
    onKeyUp: A
  });
  p.useImperativeHandle(o, () => ({
    focusVisible: () => {
      he(!0), le.current.focus();
    }
  }), [le]);
  const ce = X.shouldMount && !d && !u;
  p.useEffect(() => {
    ne && v && !d && X.pulsate();
  }, [d, v, ne, X]);
  const Pe = vr(X, "start", I, h), tt = vr(X, "stop", E, h), Ne = vr(X, "stop", k, h), We = vr(X, "stop", j, h), $e = vr(X, "stop", (Le) => {
    ne && Le.preventDefault(), y && y(Le);
  }, h), Qe = vr(X, "start", N, h), xe = vr(X, "stop", R, h), se = vr(X, "stop", $, h), Se = vr(X, "stop", (Le) => {
    Qa(Le.target) || he(!1), x && x(Le);
  }, !1), Ge = Je((Le) => {
    le.current || (le.current = Le.currentTarget), !b && Qa(Le.target) && (he(!0), P && P(Le)), T && T(Le);
  }), ae = {};
  W && (ae.tabIndex = u ? -1 : L, u && (ae["aria-disabled"] = u), ae.type = B);
  const Ue = pt(n, le), qe = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: h,
    focusRipple: v,
    suppressFocusVisible: b,
    tabIndex: L,
    focusVisible: ne
  }, Pt = hE(qe);
  return /* @__PURE__ */ c.jsxs(gE, {
    as: Y,
    className: te(Pt.root, l),
    ownerState: qe,
    onBlur: Se,
    onClick: Me,
    onContextMenu: tt,
    onFocus: Ge,
    onKeyDown: _e,
    onKeyUp: Ae,
    onMouseDown: Pe,
    onMouseLeave: $e,
    onMouseUp: We,
    onDragLeave: Ne,
    onTouchEnd: xe,
    onTouchMove: se,
    onTouchStart: Qe,
    ref: Ue,
    ...W ? ae : Ie,
    ...H,
    children: [s, ce ? /* @__PURE__ */ c.jsx(fE, {
      ref: K,
      center: i,
      ...O
    }) : null]
  });
});
function vr(e, t, n, r = !1) {
  return Je((o) => (n && n(o), r || e[t](o), !0));
}
function yE(e) {
  return typeof e.main == "string";
}
function vE(e, t = []) {
  if (!yE(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function Tt(e = []) {
  return ([, t]) => t && vE(t, e);
}
function xE(e) {
  return de("MuiAlert", e);
}
const eg = ue("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function SE(e) {
  return de("MuiCircularProgress", e);
}
ue("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Bn = 44, af = ao`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, uf = ao`
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
`, bE = typeof af != "string" ? no`
        animation: ${af} 1.4s linear infinite;
      ` : null, wE = typeof uf != "string" ? no`
        animation: ${uf} 1.4s ease-in-out infinite;
      ` : null, CE = (e) => {
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
  return fe(i, SE, t);
}, kE = U("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ie(n.color)}`]];
  }
})(ge(({
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
        ...et(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: bE || {
        animation: `${af} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), EE = U("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), TE = U("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(ge(({
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
        ...et(e, "stroke-dashoffset")
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
      style: wE || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${uf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), PE = U("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ge(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), di = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    style: h,
    thickness: v = 3.6,
    value: f = r.min ?? 0,
    variant: S = "indeterminate",
    ...b
  } = r, C = a ?? 0, g = u ?? 100, m = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: v,
    value: f,
    variant: S,
    enableTrackSlot: l
  }, x = CE(m), w = {}, E = {}, k = {};
  if (S === "determinate") {
    const T = 2 * Math.PI * ((Bn - v) / 2), P = g - C;
    w.strokeDasharray = T.toFixed(3), w.strokeDashoffset = P > 0 ? `${((g - f) / P * T).toFixed(3)}px` : `${T.toFixed(3)}px`, E.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = g;
  }
  return /* @__PURE__ */ c.jsx(kE, {
    className: te(x.root, o),
    style: {
      width: d,
      height: d,
      ...E,
      ...h
    },
    ownerState: m,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ c.jsxs(EE, {
      className: x.svg,
      ownerState: m,
      viewBox: `${Bn / 2} ${Bn / 2} ${Bn} ${Bn}`,
      children: [l ? /* @__PURE__ */ c.jsx(PE, {
        className: x.track,
        ownerState: m,
        cx: Bn,
        cy: Bn,
        r: (Bn - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ c.jsx(TE, {
        className: x.circle,
        style: w,
        ownerState: m,
        cx: Bn,
        cy: Bn,
        r: (Bn - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function RE(e) {
  return de("MuiIconButton", e);
}
const tg = ue("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), ME = (e) => {
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
  return fe(l, RE, t);
}, IE = U(Lo, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ie(n.color)}`], n.edge && t[`edge${ie(n.edge)}`], t[`size${ie(n.size)}`]];
  }
})(ge(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...et(e, "background-color", {
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
})), ge(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Tt()).map(([t]) => ({
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
}))), $E = U("span", {
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
})), br = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    id: h,
    loading: v = null,
    loadingIndicator: f,
    ...S
  } = r, b = Or(h), C = f ?? /* @__PURE__ */ c.jsx(di, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), g = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: u,
    loading: v,
    loadingIndicator: C,
    size: d
  }, m = ME(g);
  return /* @__PURE__ */ c.jsxs(IE, {
    id: v ? b : h,
    className: te(m.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !u,
    disabled: a || v,
    ref: n,
    ...S,
    ownerState: g,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: m.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ c.jsx($E, {
        className: m.loadingIndicator,
        ownerState: g,
        children: v && C
      })
    }), i]
  });
}), jE = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), OE = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), AE = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), NE = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), LE = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), zE = (e) => {
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
  return fe(i, xE, o);
}, DE = U(cn, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(Tt(["light"])).map(([r]) => ({
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
    })), ...Object.entries(e.palette).filter(Tt(["light"])).map(([r]) => ({
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
    })), ...Object.entries(e.palette).filter(Tt(["dark"])).map(([r]) => ({
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
})), FE = U("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), BE = U("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), _E = U("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), ng = {
  success: /* @__PURE__ */ c.jsx(jE, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ c.jsx(OE, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ c.jsx(AE, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ c.jsx(NE, {
    fontSize: "inherit"
  })
}, rg = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: u,
    iconMapping: d = ng,
    onClose: h,
    role: v = "alert",
    severity: f = "success",
    slotProps: S = {},
    slots: b = {},
    variant: C = "standard",
    ...g
  } = r, m = {
    ...r,
    color: a,
    severity: f,
    variant: C,
    colorSeverity: a || f
  }, x = zE(m), w = {
    slots: b,
    slotProps: S
  }, [E, k] = ye("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: te(x.root, s),
    elementType: DE,
    externalForwardedProps: {
      ...w,
      ...g
    },
    ownerState: m,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [T, P] = ye("icon", {
    className: x.icon,
    elementType: FE,
    externalForwardedProps: w,
    ownerState: m
  }), [M, A] = ye("message", {
    className: x.message,
    elementType: BE,
    externalForwardedProps: w,
    ownerState: m
  }), [I, y] = ye("action", {
    className: x.action,
    elementType: _E,
    externalForwardedProps: w,
    ownerState: m
  }), [j, R] = ye("closeButton", {
    elementType: br,
    externalForwardedProps: w,
    ownerState: m
  }), [$, N] = ye("closeIcon", {
    elementType: LE,
    externalForwardedProps: w,
    ownerState: m
  });
  return /* @__PURE__ */ c.jsxs(E, {
    ...k,
    children: [u !== !1 ? /* @__PURE__ */ c.jsx(T, {
      ...P,
      children: u || d[f] || ng[f]
    }) : null, /* @__PURE__ */ c.jsx(M, {
      ...A,
      children: i
    }), o != null ? /* @__PURE__ */ c.jsx(I, {
      ...y,
      children: o
    }) : null, o == null && h ? /* @__PURE__ */ c.jsx(I, {
      ...y,
      children: /* @__PURE__ */ c.jsx(j, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: h,
        ...R,
        children: /* @__PURE__ */ c.jsx($, {
          fontSize: "small",
          ...N
        })
      })
    }) : null]
  });
});
function WE(e) {
  return de("MuiTypography", e);
}
ue("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const UE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ie(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return fe(s, WE, i);
}, HE = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ie(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ge(({
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
  })), ...Object.entries(e.palette).filter(Tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${ie(t)}`
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
}))), og = {
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
}, it = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    variantMapping: h = og,
    ...v
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: l,
    gutterBottom: a,
    noWrap: u,
    variant: d,
    variantMapping: h
  }, S = l || h[d] || og[d] || "span", b = UE(f);
  return /* @__PURE__ */ c.jsx(HE, {
    as: S,
    ref: n,
    className: te(b.root, s),
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
function Po(e, t) {
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
var rn = "top", On = "bottom", An = "right", on = "left", Wp = "auto", dl = [rn, On, An, on], ji = "start", qs = "end", VE = "clippingParents", cx = "viewport", ns = "popper", KE = "reference", ig = /* @__PURE__ */ dl.reduce(function(e, t) {
  return e.concat([t + "-" + ji, t + "-" + qs]);
}, []), dx = /* @__PURE__ */ [].concat(dl, [Wp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ji, t + "-" + qs]);
}, []), YE = "beforeRead", QE = "read", GE = "afterRead", XE = "beforeMain", qE = "main", ZE = "afterMain", JE = "beforeWrite", eT = "write", tT = "afterWrite", nT = [YE, QE, GE, XE, qE, ZE, JE, eT, tT];
function fr(e) {
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
function zo(e) {
  var t = gn(e).Element;
  return e instanceof t || e instanceof Element;
}
function In(e) {
  var t = gn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Up(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = gn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function rT(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !In(i) || !fr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var l = o[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function oT(e) {
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
      !In(o) || !fr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
        o.removeAttribute(a);
      }));
    });
  };
}
const iT = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: rT,
  effect: oT,
  requires: ["computeStyles"]
};
function dr(e) {
  return e.split("-")[0];
}
var Ro = Math.max, Xa = Math.min, Oi = Math.round;
function cf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fx() {
  return !/^((?!chrome|android).)*safari/i.test(cf());
}
function Ai(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && In(e) && (o = e.offsetWidth > 0 && Oi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Oi(r.height) / e.offsetHeight || 1);
  var s = zo(e) ? gn(e) : window, l = s.visualViewport, a = !fx() && n, u = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, h = r.width / o, v = r.height / i;
  return {
    width: h,
    height: v,
    top: d,
    right: u + h,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function Hp(e) {
  var t = Ai(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function px(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Up(n)) {
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
  return gn(e).getComputedStyle(e);
}
function sT(e) {
  return ["table", "td", "th"].indexOf(fr(e)) >= 0;
}
function co(e) {
  return ((zo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function sc(e) {
  return fr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Up(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    co(e)
  );
}
function sg(e) {
  return !In(e) || // https://github.com/popperjs/popper-core/issues/837
  Ar(e).position === "fixed" ? null : e.offsetParent;
}
function lT(e) {
  var t = /firefox/i.test(cf()), n = /Trident/i.test(cf());
  if (n && In(e)) {
    var r = Ar(e);
    if (r.position === "fixed")
      return null;
  }
  var o = sc(e);
  for (Up(o) && (o = o.host); In(o) && ["html", "body"].indexOf(fr(o)) < 0; ) {
    var i = Ar(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function fl(e) {
  for (var t = gn(e), n = sg(e); n && sT(n) && Ar(n).position === "static"; )
    n = sg(n);
  return n && (fr(n) === "html" || fr(n) === "body" && Ar(n).position === "static") ? t : n || lT(e) || t;
}
function Vp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ws(e, t, n) {
  return Ro(e, Xa(t, n));
}
function aT(e, t, n) {
  var r = ws(e, t, n);
  return r > n ? n : r;
}
function mx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function hx(e) {
  return Object.assign({}, mx(), e);
}
function gx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var uT = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, hx(typeof t != "number" ? t : gx(t, dl));
};
function cT(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = dr(n.placement), a = Vp(l), u = [on, An].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var h = uT(o.padding, n), v = Hp(i), f = a === "y" ? rn : on, S = a === "y" ? On : An, b = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], g = fl(i), m = g ? a === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, x = b / 2 - C / 2, w = h[f], E = m - v[d] - h[S], k = m / 2 - v[d] / 2 + x, T = ws(w, k, E), P = a;
    n.modifiersData[r] = (t = {}, t[P] = T, t.centerOffset = T - k, t);
  }
}
function dT(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || px(t.elements.popper, o) && (t.elements.arrow = o));
}
const fT = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: cT,
  effect: dT,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ni(e) {
  return e.split("-")[1];
}
var pT = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function mT(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: Oi(n * o) / o || 0,
    y: Oi(r * o) / o || 0
  };
}
function lg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, h = e.isFixed, v = s.x, f = v === void 0 ? 0 : v, S = s.y, b = S === void 0 ? 0 : S, C = typeof d == "function" ? d({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  f = C.x, b = C.y;
  var g = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), x = on, w = rn, E = window;
  if (u) {
    var k = fl(n), T = "clientHeight", P = "clientWidth";
    if (k === gn(n) && (k = co(n), Ar(k).position !== "static" && l === "absolute" && (T = "scrollHeight", P = "scrollWidth")), k = k, o === rn || (o === on || o === An) && i === qs) {
      w = On;
      var M = h && k === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[T]
      );
      b -= M - r.height, b *= a ? 1 : -1;
    }
    if (o === on || (o === rn || o === On) && i === qs) {
      x = An;
      var A = h && k === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[P]
      );
      f -= A - r.width, f *= a ? 1 : -1;
    }
  }
  var I = Object.assign({
    position: l
  }, u && pT), y = d === !0 ? mT({
    x: f,
    y: b
  }, gn(n)) : {
    x: f,
    y: b
  };
  if (f = y.x, b = y.y, a) {
    var j;
    return Object.assign({}, I, (j = {}, j[w] = m ? "0" : "", j[x] = g ? "0" : "", j.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + b + "px)" : "translate3d(" + f + "px, " + b + "px, 0)", j));
  }
  return Object.assign({}, I, (t = {}, t[w] = m ? b + "px" : "", t[x] = g ? f + "px" : "", t.transform = "", t));
}
function hT(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, u = {
    placement: dr(t.placement),
    variation: Ni(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, lg(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, lg(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const gT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: hT,
  data: {}
};
var Nl = {
  passive: !0
};
function yT(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = gn(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", n.update, Nl);
  }), l && a.addEventListener("resize", n.update, Nl), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", n.update, Nl);
    }), l && a.removeEventListener("resize", n.update, Nl);
  };
}
const vT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: yT,
  data: {}
};
var xT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function fa(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return xT[t];
  });
}
var ST = {
  start: "end",
  end: "start"
};
function ag(e) {
  return e.replace(/start|end/g, function(t) {
    return ST[t];
  });
}
function Kp(e) {
  var t = gn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Yp(e) {
  return Ai(co(e)).left + Kp(e).scrollLeft;
}
function bT(e, t) {
  var n = gn(e), r = co(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var u = fx();
    (u || !u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + Yp(e),
    y: a
  };
}
function wT(e) {
  var t, n = co(e), r = Kp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Ro(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Ro(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + Yp(e), a = -r.scrollTop;
  return Ar(o || n).direction === "rtl" && (l += Ro(n.clientWidth, o ? o.clientWidth : 0) - i), {
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
function yx(e) {
  return ["html", "body", "#document"].indexOf(fr(e)) >= 0 ? e.ownerDocument.body : In(e) && Qp(e) ? e : yx(sc(e));
}
function Cs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = yx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = gn(r), s = o ? [i].concat(i.visualViewport || [], Qp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Cs(sc(s)))
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
function CT(e, t) {
  var n = Ai(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function ug(e, t, n) {
  return t === cx ? df(bT(e, n)) : zo(t) ? CT(t, n) : df(wT(co(e)));
}
function kT(e) {
  var t = Cs(sc(e)), n = ["absolute", "fixed"].indexOf(Ar(e).position) >= 0, r = n && In(e) ? fl(e) : e;
  return zo(r) ? t.filter(function(o) {
    return zo(o) && px(o, r) && fr(o) !== "body";
  }) : [];
}
function ET(e, t, n, r) {
  var o = t === "clippingParents" ? kT(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, u) {
    var d = ug(e, u, r);
    return a.top = Ro(d.top, a.top), a.right = Xa(d.right, a.right), a.bottom = Xa(d.bottom, a.bottom), a.left = Ro(d.left, a.left), a;
  }, ug(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function vx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? dr(r) : null, i = r ? Ni(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case rn:
      a = {
        x: s,
        y: t.y - n.height
      };
      break;
    case On:
      a = {
        x: s,
        y: t.y + t.height
      };
      break;
    case An:
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
  var u = o ? Vp(o) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case ji:
        a[u] = a[u] - (t[d] / 2 - n[d] / 2);
        break;
      case qs:
        a[u] = a[u] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function Zs(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? VE : l, u = n.rootBoundary, d = u === void 0 ? cx : u, h = n.elementContext, v = h === void 0 ? ns : h, f = n.altBoundary, S = f === void 0 ? !1 : f, b = n.padding, C = b === void 0 ? 0 : b, g = hx(typeof C != "number" ? C : gx(C, dl)), m = v === ns ? KE : ns, x = e.rects.popper, w = e.elements[S ? m : v], E = ET(zo(w) ? w : w.contextElement || co(e.elements.popper), a, d, s), k = Ai(e.elements.reference), T = vx({
    reference: k,
    element: x,
    placement: o
  }), P = df(Object.assign({}, x, T)), M = v === ns ? P : k, A = {
    top: E.top - M.top + g.top,
    bottom: M.bottom - E.bottom + g.bottom,
    left: E.left - M.left + g.left,
    right: M.right - E.right + g.right
  }, I = e.modifiersData.offset;
  if (v === ns && I) {
    var y = I[o];
    Object.keys(A).forEach(function(j) {
      var R = [An, On].indexOf(j) >= 0 ? 1 : -1, $ = [rn, On].indexOf(j) >= 0 ? "y" : "x";
      A[j] += y[$] * R;
    });
  }
  return A;
}
function TT(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, u = a === void 0 ? dx : a, d = Ni(r), h = d ? l ? ig : ig.filter(function(S) {
    return Ni(S) === d;
  }) : dl, v = h.filter(function(S) {
    return u.indexOf(S) >= 0;
  });
  v.length === 0 && (v = h);
  var f = v.reduce(function(S, b) {
    return S[b] = Zs(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[dr(b)], S;
  }, {});
  return Object.keys(f).sort(function(S, b) {
    return f[S] - f[b];
  });
}
function PT(e) {
  if (dr(e) === Wp)
    return [];
  var t = fa(e);
  return [ag(e), t, ag(t)];
}
function RT(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, u = n.padding, d = n.boundary, h = n.rootBoundary, v = n.altBoundary, f = n.flipVariations, S = f === void 0 ? !0 : f, b = n.allowedAutoPlacements, C = t.options.placement, g = dr(C), m = g === C, x = a || (m || !S ? [fa(C)] : PT(C)), w = [C].concat(x).reduce(function(Y, re) {
      return Y.concat(dr(re) === Wp ? TT(t, {
        placement: re,
        boundary: d,
        rootBoundary: h,
        padding: u,
        flipVariations: S,
        allowedAutoPlacements: b
      }) : re);
    }, []), E = t.rects.reference, k = t.rects.popper, T = /* @__PURE__ */ new Map(), P = !0, M = w[0], A = 0; A < w.length; A++) {
      var I = w[A], y = dr(I), j = Ni(I) === ji, R = [rn, On].indexOf(y) >= 0, $ = R ? "width" : "height", N = Zs(t, {
        placement: I,
        boundary: d,
        rootBoundary: h,
        altBoundary: v,
        padding: u
      }), L = R ? j ? An : on : j ? On : rn;
      E[$] > k[$] && (L = fa(L));
      var O = fa(L), D = [];
      if (i && D.push(N[y] <= 0), l && D.push(N[L] <= 0, N[O] <= 0), D.every(function(Y) {
        return Y;
      })) {
        M = I, P = !1;
        break;
      }
      T.set(I, D);
    }
    if (P)
      for (var B = S ? 3 : 1, H = function(re) {
        var Q = w.find(function(X) {
          var K = T.get(X);
          if (K)
            return K.slice(0, re).every(function(ne) {
              return ne;
            });
        });
        if (Q)
          return M = Q, "break";
      }, W = B; W > 0; W--) {
        var G = H(W);
        if (G === "break") break;
      }
    t.placement !== M && (t.modifiersData[r]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const MT = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: RT,
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
function dg(e) {
  return [rn, An, On, on].some(function(t) {
    return e[t] >= 0;
  });
}
function IT(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Zs(t, {
    elementContext: "reference"
  }), l = Zs(t, {
    altBoundary: !0
  }), a = cg(s, r), u = cg(l, o, i), d = dg(a), h = dg(u);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": h
  });
}
const $T = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: IT
};
function jT(e, t, n) {
  var r = dr(e), o = [on, rn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [on, An].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function OT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = dx.reduce(function(d, h) {
    return d[h] = jT(h, t.rects, i), d;
  }, {}), l = s[t.placement], a = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += a, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const AT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: OT
};
function NT(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = vx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const LT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: NT,
  data: {}
};
function zT(e) {
  return e === "x" ? "y" : "x";
}
function DT(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, u = n.rootBoundary, d = n.altBoundary, h = n.padding, v = n.tether, f = v === void 0 ? !0 : v, S = n.tetherOffset, b = S === void 0 ? 0 : S, C = Zs(t, {
    boundary: a,
    rootBoundary: u,
    padding: h,
    altBoundary: d
  }), g = dr(t.placement), m = Ni(t.placement), x = !m, w = Vp(g), E = zT(w), k = t.modifiersData.popperOffsets, T = t.rects.reference, P = t.rects.popper, M = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, A = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), I = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, y = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var j, R = w === "y" ? rn : on, $ = w === "y" ? On : An, N = w === "y" ? "height" : "width", L = k[w], O = L + C[R], D = L - C[$], B = f ? -P[N] / 2 : 0, H = m === ji ? T[N] : P[N], W = m === ji ? -P[N] : -T[N], G = t.elements.arrow, Y = f && G ? Hp(G) : {
        width: 0,
        height: 0
      }, re = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mx(), Q = re[R], X = re[$], K = ws(0, T[N], Y[N]), ne = x ? T[N] / 2 - B - K - Q - A.mainAxis : H - K - Q - A.mainAxis, he = x ? -T[N] / 2 + B + K + X + A.mainAxis : W + K + X + A.mainAxis, Re = t.elements.arrow && fl(t.elements.arrow), ve = Re ? w === "y" ? Re.clientTop || 0 : Re.clientLeft || 0 : 0, me = (j = I?.[w]) != null ? j : 0, le = L + ne - me - ve, Me = L + he - me, _e = ws(f ? Xa(O, le) : O, L, f ? Ro(D, Me) : D);
      k[w] = _e, y[w] = _e - L;
    }
    if (l) {
      var Ae, Ie = w === "x" ? rn : on, ce = w === "x" ? On : An, Pe = k[E], tt = E === "y" ? "height" : "width", Ne = Pe + C[Ie], We = Pe - C[ce], $e = [rn, on].indexOf(g) !== -1, Qe = (Ae = I?.[E]) != null ? Ae : 0, xe = $e ? Ne : Pe - T[tt] - P[tt] - Qe + A.altAxis, se = $e ? Pe + T[tt] + P[tt] - Qe - A.altAxis : We, Se = f && $e ? aT(xe, Pe, se) : ws(f ? xe : Ne, Pe, f ? se : We);
      k[E] = Se, y[E] = Se - Pe;
    }
    t.modifiersData[r] = y;
  }
}
const FT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: DT,
  requiresIfExists: ["offset"]
};
function BT(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function _T(e) {
  return e === gn(e) || !In(e) ? Kp(e) : BT(e);
}
function WT(e) {
  var t = e.getBoundingClientRect(), n = Oi(t.width) / e.offsetWidth || 1, r = Oi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function UT(e, t, n) {
  n === void 0 && (n = !1);
  var r = In(t), o = In(t) && WT(t), i = co(t), s = Ai(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((fr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qp(i)) && (l = _T(t)), In(t) ? (a = Ai(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = Yp(i))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function HT(e) {
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
function VT(e) {
  var t = HT(e);
  return nT.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function KT(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function YT(e) {
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
var fg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function pg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function QT(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? fg : o;
  return function(l, a, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fg, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, h = [], v = !1, f = {
      state: d,
      setOptions: function(g) {
        var m = typeof g == "function" ? g(d.options) : g;
        b(), d.options = Object.assign({}, i, d.options, m), d.scrollParents = {
          reference: zo(l) ? Cs(l) : l.contextElement ? Cs(l.contextElement) : [],
          popper: Cs(a)
        };
        var x = VT(YT([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = x.filter(function(w) {
          return w.enabled;
        }), S(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var g = d.elements, m = g.reference, x = g.popper;
          if (pg(m, x)) {
            d.rects = {
              reference: UT(m, fl(x), d.options.strategy === "fixed"),
              popper: Hp(x)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(A) {
              return d.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var E = d.orderedModifiers[w], k = E.fn, T = E.options, P = T === void 0 ? {} : T, M = E.name;
              typeof k == "function" && (d = k({
                state: d,
                options: P,
                name: M,
                instance: f
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: KT(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        b(), v = !0;
      }
    };
    if (!pg(l, a))
      return f;
    f.setOptions(u).then(function(C) {
      !v && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function S() {
      d.orderedModifiers.forEach(function(C) {
        var g = C.name, m = C.options, x = m === void 0 ? {} : m, w = C.effect;
        if (typeof w == "function") {
          var E = w({
            state: d,
            name: g,
            instance: f,
            options: x
          }), k = function() {
          };
          h.push(E || k);
        }
      });
    }
    function b() {
      h.forEach(function(C) {
        return C();
      }), h = [];
    }
    return f;
  };
}
var GT = [vT, LT, gT, iT, AT, MT, FT, fT, $T], XT = /* @__PURE__ */ QT({
  defaultModifiers: GT
});
function Li(e) {
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : lx(n, r), {
    props: l,
    internalRef: a
  } = ax({
    ...i,
    externalSlotProps: s
  }), u = pt(a, s?.ref, e.additionalProps?.ref);
  return sx(t, {
    ...l,
    ref: u
  }, r);
}
function Bo(e) {
  return parseInt(p.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
function qT(e) {
  return typeof e == "function" ? e() : e;
}
const xx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = p.useState(null), a = pt(/* @__PURE__ */ p.isValidElement(r) ? Bo(r) : null, n);
  if (dt(() => {
    i || l(qT(o) || document.body);
  }, [o, i]), dt(() => {
    if (s && !i)
      return of(n, s), () => {
        of(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ p.isValidElement(r)) {
      const u = {
        ref: a
      };
      return /* @__PURE__ */ p.cloneElement(r, u);
    }
    return r;
  }
  return s && /* @__PURE__ */ r0.createPortal(r, s);
});
function ZT(e) {
  return de("MuiPopper", e);
}
ue("MuiPopper", ["root"]);
function JT(e, t) {
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
function Sx(e) {
  return typeof e == "function" ? e() : e;
}
function eP(e) {
  return e.nodeType !== void 0;
}
const tP = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, ZT, t);
}, nP = {}, rP = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: u,
    popperOptions: d,
    popperRef: h,
    slotProps: v = {},
    slots: f = {},
    TransitionProps: S,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, g = p.useRef(null), m = pt(g, n), x = p.useRef(null), w = pt(x, h), E = p.useRef(w);
  dt(() => {
    E.current = w;
  }, [w]), p.useImperativeHandle(h, () => x.current, []);
  const k = JT(u, i), [T, P] = p.useState(k), M = p.useMemo(() => Sx(r), [r]);
  p.useEffect(() => {
    x.current && x.current.forceUpdate();
  }), dt(() => {
    if (!M || !a)
      return;
    const R = (O) => {
      P(O.placement);
    };
    let $ = [{
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
        state: O
      }) => {
        R(O);
      }
    }];
    l != null && ($ = $.concat(l)), d && d.modifiers != null && ($ = $.concat(d.modifiers));
    const N = XT(M, g.current, {
      placement: k,
      ...d,
      modifiers: $
    });
    E.current(N);
    const L = g.current;
    return () => {
      if (L) {
        const {
          style: O
        } = L, D = O.position, B = O.top, H = O.left, W = O.transform;
        N.destroy(), O.position = D, O.top = B, O.left = H, O.transform = W;
      } else
        N.destroy();
      E.current(null);
    };
  }, [M, s, l, a, d, k]);
  const A = {
    placement: T
  };
  S !== null && (A.TransitionProps = S);
  const I = tP(t), y = f.root ?? "div", j = Li({
    elementType: y,
    externalSlotProps: v.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: I.root
  });
  return /* @__PURE__ */ c.jsx(y, {
    ...j,
    children: typeof o == "function" ? o(A) : o
  });
}), oP = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: u,
    open: d,
    placement: h = "bottom",
    popperOptions: v = nP,
    popperRef: f,
    style: S,
    transition: b = !1,
    slotProps: C = {},
    slots: g = {},
    ...m
  } = t, [x, w] = p.useState(!0), E = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !d && (!b || x))
    return null;
  let T;
  if (i)
    T = i;
  else if (r) {
    const A = Sx(r);
    T = A && eP(A) ? yt(A).body : yt(null).body;
  }
  const P = !d && a && (!b || x) ? "none" : void 0, M = b ? {
    in: d,
    onEnter: E,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ c.jsx(xx, {
    disablePortal: l,
    container: T,
    children: /* @__PURE__ */ c.jsx(rP, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: n,
      open: b ? !x : d,
      placement: h,
      popperOptions: v,
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
        display: P,
        ...S
      },
      TransitionProps: M,
      children: o
    })
  });
}), iP = U(oP, {
  name: "MuiPopper",
  slot: "Root"
})({}), bx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = ul(), o = pe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: h,
    placement: v,
    popperOptions: f,
    popperRef: S,
    transition: b,
    slots: C,
    slotProps: g,
    ...m
  } = o, x = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: u,
    modifiers: d,
    open: h,
    placement: v,
    popperOptions: f,
    popperRef: S,
    transition: b,
    ...m
  };
  return /* @__PURE__ */ c.jsx(iP, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: g,
    ...x,
    ref: n
  });
}), sP = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function lP(e) {
  return de("MuiChip", e);
}
const Be = ue("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), aP = (e) => {
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
  return fe(a, lP, t);
}, uP = U("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Sn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${Be.avatar}`]: t.avatar
    }, {
      [`& .${Be.icon}`]: t.icon
    }, {
      [`& .${Be.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ie(s)}`], t[`color${ie(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(ge(({
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
    ...et(e, ["background-color", "box-shadow"]),
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
    [`&.${Be.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Be.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Be.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${Be.deleteIcon}`]: {
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
        [`& .${Be.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${Be.avatar}`]: {
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
        [`& .${Be.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${Be.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${Be.deleteIcon}`]: {
          fontSize: 16,
          marginRight: 4,
          marginLeft: -4
        }
      }
    }, ...Object.entries(e.palette).filter(Tt(["contrastText"])).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText,
        [`& .${Be.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${Be.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${Be.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${Be.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Tt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${Be.focusVisible}`]: {
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
        [`&.${Be.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[1]
        }
      }
    }, ...Object.entries(e.palette).filter(Tt(["dark"])).map(([n]) => ({
      props: {
        color: n,
        clickable: !0
      },
      style: {
        [`&:hover, &.${Be.focusVisible}`]: {
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
        [`&.${Be.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${Be.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${Be.avatar}`]: {
          marginLeft: 4
        },
        [`& .${Be.icon}`]: {
          marginLeft: 4
        },
        [`& .${Be.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${Be.avatar}`]: {
          marginLeft: 2
        },
        [`& .${Be.icon}`]: {
          marginLeft: 2
        },
        [`& .${Be.deleteIcon}`]: {
          marginRight: 3
        }
      }
    }, ...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
      props: {
        variant: "outlined",
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main,
        border: `1px solid ${e.alpha((e.vars || e).palette[n].main, 0.7)}`,
        [`&.${Be.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${Be.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${Be.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), cP = U("span", {
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
function mg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Yc = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    icon: h,
    label: v,
    onClick: f,
    onDelete: S,
    onKeyDown: b,
    onKeyUp: C,
    size: g = "medium",
    variant: m = "filled",
    tabIndex: x,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: E = {},
    slotProps: k = {},
    ...T
  } = r, {
    nativeButton: P,
    ...M
  } = T, A = p.useRef(null), I = pt(A, n), y = (K) => {
    K.stopPropagation(), S(K);
  }, j = (K) => {
    K.currentTarget === K.target && mg(K) && K.preventDefault(), b && b(K);
  }, R = (K) => {
    K.currentTarget === K.target && S && mg(K) && S(K), C && C(K);
  }, $ = s !== !1 && f ? !0 : s, N = $ || S ? Lo : a || "div", L = {
    ...r,
    component: N,
    disabled: d,
    size: g,
    color: l,
    iconColor: /* @__PURE__ */ p.isValidElement(h) && h.props.color || l,
    onDelete: !!S,
    clickable: $,
    variant: m
  }, O = aP(L), D = N === Lo ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: O.focusVisible,
    ...S && {
      disableRipple: !0
    },
    ...P !== void 0 && {
      nativeButton: P
    }
  } : {};
  let B = null;
  S && (B = u && /* @__PURE__ */ p.isValidElement(u) ? /* @__PURE__ */ p.cloneElement(u, {
    className: te(u.props.className, O.deleteIcon),
    onClick: y
  }) : /* @__PURE__ */ c.jsx(sP, {
    className: O.deleteIcon,
    onClick: y
  }));
  let H = null;
  o && /* @__PURE__ */ p.isValidElement(o) && (H = /* @__PURE__ */ p.cloneElement(o, {
    className: te(O.avatar, o.props.className)
  }));
  let W = null;
  h && /* @__PURE__ */ p.isValidElement(h) && (W = /* @__PURE__ */ p.cloneElement(h, {
    className: te(O.icon, h.props.className)
  }));
  const G = {
    slots: E,
    slotProps: k
  }, [Y, re] = ye("root", {
    elementType: uP,
    externalForwardedProps: {
      ...G,
      ...M
    },
    ownerState: L,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: I,
    className: te(O.root, i),
    additionalProps: {
      disabled: $ && d ? !0 : void 0,
      tabIndex: w && d ? -1 : x,
      ...D
    },
    getSlotProps: (K) => ({
      ...K,
      onClick: (ne) => {
        K.onClick?.(ne), f?.(ne);
      },
      onKeyDown: (ne) => {
        K.onKeyDown?.(ne), j(ne);
      },
      onKeyUp: (ne) => {
        K.onKeyUp?.(ne), R(ne);
      }
    })
  }), [Q, X] = ye("label", {
    elementType: cP,
    externalForwardedProps: G,
    ownerState: L,
    className: O.label
  });
  return /* @__PURE__ */ c.jsxs(Y, {
    as: N,
    ...re,
    children: [H || W, /* @__PURE__ */ c.jsx(Q, {
      ...X,
      children: v
    }), B]
  });
}), dP = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), fP = {
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
}, pP = {
  opacity: 0,
  visibility: "hidden"
}, wx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = uo(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: u,
    in: d,
    onEnter: h,
    onEntered: v,
    onEntering: f,
    onExit: S,
    onExited: b,
    onExiting: C,
    style: g,
    timeout: m = o,
    ...x
  } = t, w = oc(r.motion.reducedMotion, a), E = p.useRef(null), k = pt(E, Bo(l), n), T = Pn(E, f), P = Pn(E, (R, $) => {
    w.shouldReduceMotion || Dp(R);
    const N = Va({
      style: g,
      timeout: m,
      easing: u
    }, {
      mode: "enter"
    }), L = w.getTransitionTiming({
      duration: N.duration,
      delay: N.delay
    });
    R.style.transition = r.transitions.create("opacity", {
      duration: L.duration,
      easing: N.easing,
      delay: L.delay
    }), h && h(R, $);
  }), M = Pn(E, v), A = Pn(E, C), I = Pn(E, (R) => {
    const $ = Va({
      style: g,
      timeout: m,
      easing: u
    }, {
      mode: "exit"
    }), N = w.getTransitionTiming({
      duration: $.duration,
      delay: $.delay
    });
    R.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: $.easing,
      delay: N.delay
    }), S && S(R);
  }), y = Pn(E, (R) => {
    R.style.transition = "", b && b(R);
  }), j = i ? (R) => {
    i(E.current, R);
  } : void 0;
  return /* @__PURE__ */ c.jsx(rx, {
    appear: s,
    in: d,
    nodeRef: E,
    onEnter: P,
    onEntered: M,
    onEntering: T,
    onExit: I,
    onExited: y,
    onExiting: A,
    addEndListener: j,
    reduceMotion: w.shouldReduceMotion,
    timeout: m,
    ...x,
    children: (R, {
      ownerState: $,
      ...N
    }) => {
      const L = tx(R, d, fP, pP, g, l.props.style);
      return /* @__PURE__ */ p.cloneElement(l, {
        style: L,
        ref: k,
        ...N
      });
    }
  });
});
function mP(e) {
  return de("MuiBackdrop", e);
}
ue("MuiBackdrop", ["root", "invisible"]);
const hP = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return fe({
    root: ["root", n && "invisible"]
  }, mP, t);
}, gP = U("div", {
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
}), Cx = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    transitionDuration: h,
    ...v
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, S = hP(f), b = {
    component: s,
    slots: d,
    slotProps: u
  }, [C, g] = ye("root", {
    elementType: gP,
    externalForwardedProps: b,
    className: te(S.root, i),
    ownerState: f
  }), [m, x] = ye("transition", {
    elementType: wx,
    externalForwardedProps: b,
    ownerState: f
  });
  return /* @__PURE__ */ c.jsx(m, {
    in: a,
    timeout: h,
    ...v,
    ...x,
    children: /* @__PURE__ */ c.jsx(C, {
      ...g,
      ref: n,
      children: o
    })
  });
}), yP = ue("MuiBox", ["root"]), vP = Zu(), $t = $C({
  themeId: ur,
  defaultTheme: vP,
  defaultClassName: yP.root,
  generateClassName: N0.generate
});
function xP(e) {
  return de("MuiButton", e);
}
const ho = ue("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), SP = /* @__PURE__ */ p.createContext({}), bP = /* @__PURE__ */ p.createContext(void 0), wP = (e) => {
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
  }, d = fe(u, xP, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...d
  };
}, kx = [{
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
}], CP = U(Lo, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ie(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...et(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${ho.disabled}`]: {
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
        [`&.${ho.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ho.disabled}`]: {
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
        [`&.${ho.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Tt()).map(([r]) => ({
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
        [`&.${ho.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ho.disabled}`]: {
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
        ...et(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${ho.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), kP = U("span", {
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
      ...et(e, ["opacity"], {
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
  }, ...kx]
})), EP = U("span", {
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
      ...et(e, ["opacity"], {
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
  }, ...kx]
})), TP = U("span", {
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
})), hg = U("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), rt = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = p.useContext(SP), o = p.useContext(bP), i = Xs(r, t), s = pe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: u = "button",
    className: d,
    disabled: h = !1,
    disableElevation: v = !1,
    disableFocusRipple: f = !1,
    endIcon: S,
    focusVisibleClassName: b,
    fullWidth: C = !1,
    id: g,
    loading: m = null,
    loadingIndicator: x,
    loadingPosition: w = "center",
    size: E = "medium",
    startIcon: k,
    type: T,
    variant: P = "text",
    ...M
  } = s, A = Or(g), I = x ?? /* @__PURE__ */ c.jsx(di, {
    "aria-labelledby": A,
    color: "inherit",
    size: 16
  }), y = {
    ...s,
    color: a,
    component: u,
    disabled: h,
    disableElevation: v,
    disableFocusRipple: f,
    fullWidth: C,
    loading: m,
    loadingIndicator: I,
    loadingPosition: w,
    size: E,
    type: T,
    variant: P
  }, j = wP(y), R = (k || m && w === "start") && /* @__PURE__ */ c.jsx(kP, {
    className: j.startIcon,
    ownerState: y,
    children: k || /* @__PURE__ */ c.jsx(hg, {
      className: j.loadingIconPlaceholder,
      ownerState: y
    })
  }), $ = (S || m && w === "end") && /* @__PURE__ */ c.jsx(EP, {
    className: j.endIcon,
    ownerState: y,
    children: S || /* @__PURE__ */ c.jsx(hg, {
      className: j.loadingIconPlaceholder,
      ownerState: y
    })
  }), N = o || "", L = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ c.jsx("span", {
      className: j.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ c.jsx(TP, {
        className: j.loadingIndicator,
        ownerState: y,
        children: I
      })
    })
  ) : null, {
    root: O,
    ...D
  } = j;
  return /* @__PURE__ */ c.jsxs(CP, {
    ownerState: y,
    className: te(r.className, j.root, d, N),
    component: u,
    disabled: h || m,
    focusRipple: !f,
    focusVisibleClassName: te(j.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: T,
    id: m ? A : g,
    ...M,
    classes: D,
    children: [R, w !== "end" && L, l, w === "end" && L, $]
  });
});
function PP(e) {
  return de("MuiCard", e);
}
ue("MuiCard", ["root"]);
const RP = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, PP, t);
}, MP = U(cn, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), Ll = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = RP(l);
  return /* @__PURE__ */ c.jsx(MP, {
    className: te(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function IP(e) {
  return de("MuiCardContent", e);
}
ue("MuiCardContent", ["root"]);
const $P = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, IP, t);
}, jP = U("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), zl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = $P(l);
  return /* @__PURE__ */ c.jsx(jP, {
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function gg(e) {
  return e.substring(2).toLowerCase();
}
function OP(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function AP(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = p.useRef(!1), l = p.useRef(null), a = p.useRef(!1), u = p.useRef(!1);
  p.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const d = pt(Bo(t), l), h = Je((S) => {
    const b = u.current;
    u.current = !1;
    const C = yt(l.current);
    if (!a.current || !l.current || "clientX" in S && OP(S, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let g;
    S.composedPath ? g = S.composedPath().includes(l.current) : g = !Po(C.documentElement, S.target) || Po(l.current, S.target), !g && (n || !b) && o(S);
  }), v = (S) => (b) => {
    u.current = !0;
    const C = t.props[S];
    C && C(b);
  }, f = {
    ref: d
  };
  return i !== !1 && (f[i] = v(i)), p.useEffect(() => {
    if (i !== !1) {
      const S = gg(i), b = yt(l.current), C = () => {
        s.current = !0;
      };
      return b.addEventListener(S, h), b.addEventListener("touchmove", C), () => {
        b.removeEventListener(S, h), b.removeEventListener("touchmove", C);
      };
    }
  }, [h, i]), r !== !1 && (f[r] = v(r)), p.useEffect(() => {
    if (r !== !1) {
      const S = gg(r), b = yt(l.current);
      return b.addEventListener(S, h), () => {
        b.removeEventListener(S, h);
      };
    }
  }, [h, r]), /* @__PURE__ */ p.cloneElement(t, f);
}
function Ex(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function NP(e) {
  const t = yt(e);
  return e === t.body || e === t.documentElement ? Xn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ks(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function yg(e) {
  return parseFloat(Xn(e).getComputedStyle(e).paddingRight) || 0;
}
function LP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function vg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !LP(s);
    l && a && ks(s, o);
  });
}
function zP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = yt(r).body;
    else {
      const s = r.parentElement, l = Xn(r);
      i = s?.nodeName === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (NP(i)) {
      const s = Ex(Xn(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${yg(i) + s}px`;
      const l = yt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (a) => {
        n.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a
        }), a.style.paddingRight = `${yg(a) + s}px`;
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
function DP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class FP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && ks(t.modalRef, !1);
    const o = DP(n);
    vg(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = zP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && ks(t.modalRef, n), vg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && ks(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const ff = "data-mui-focusable";
function xg(e) {
  return e ? e.hasAttribute(ff) ? e : e.querySelector(`[${ff}]`) : null;
}
const BP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Tx(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function _P(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function WP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || _P(e));
}
function UP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(BP)).forEach((r, o) => {
    const i = Tx(r);
    i === -1 || !WP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function HP() {
  return !0;
}
function VP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = UP,
    isEnabled: s = HP,
    open: l
  } = e, a = p.useRef(!1), u = p.useRef(null), d = p.useRef(null), h = p.useRef(null), v = p.useRef(null), f = p.useRef(!1), S = p.useRef(null), b = pt(Bo(t), S), C = p.useRef(null);
  p.useEffect(() => {
    !l || !S.current || (f.current = !n);
  }, [n, l]), p.useEffect(() => {
    if (a.current = !1, !l || !S.current)
      return;
    const x = yt(S.current), w = ir(x), E = xg(S.current) ?? S.current;
    return Po(S.current, w) || (E.hasAttribute("tabIndex") || E.setAttribute("tabIndex", "-1"), f.current && E.focus()), () => {
      !o && h.current && (a.current = !0, h.current.focus(), h.current = null);
    };
  }, [l]), p.useEffect(() => {
    if (!l || !S.current)
      return;
    const x = yt(S.current), w = (T) => {
      if (C.current = T, r || !s() || T.key !== "Tab")
        return;
      const P = S.current, M = ir(x);
      if (P === null)
        return;
      const A = xg(P);
      if (M === P || M === A) {
        const y = i(P);
        if (y.length === 0)
          return;
        T.preventDefault(), T.shiftKey ? y[y.length - 1].focus() : y[0].focus();
        return;
      }
      if (Po(P, M)) {
        const y = i(P), j = y.indexOf(M);
        if (j === -1 || !y.some((N) => Tx(N) > 0))
          return;
        T.preventDefault();
        let $ = 0;
        T.shiftKey ? $ = j <= 0 ? y.length - 1 : j - 1 : $ = j === y.length - 1 ? 0 : j + 1, y[$].focus();
      }
    }, E = () => {
      const T = S.current;
      if (T === null)
        return;
      const P = ir(x);
      if (!x.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (Po(T, P) || r && P !== u.current && P !== d.current)
        return;
      if (P !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!f.current)
        return;
      let M = [];
      if ((P === u.current || P === d.current) && (M = i(S.current)), M.length > 0) {
        const A = !!(C.current?.shiftKey && C.current?.key === "Tab"), I = M[0], y = M[M.length - 1];
        typeof I != "string" && typeof y != "string" && (A ? y.focus() : I.focus());
      } else
        T.focus();
    };
    x.addEventListener("focusin", E), x.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const T = ir(x);
      T && T.tagName === "BODY" && E();
    }, 50);
    return () => {
      clearInterval(k), x.removeEventListener("focusin", E), x.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const g = (x) => {
    h.current === null && (h.current = x.relatedTarget), f.current = !0, v.current = x.target;
    const w = t.props.onFocus;
    w && w(x);
  }, m = (x) => {
    h.current === null && (h.current = x.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ c.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ p.cloneElement(t, {
      ref: b,
      onFocus: g
    }), /* @__PURE__ */ c.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function KP(e) {
  return typeof e == "function" ? e() : e;
}
function YP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Sg = () => {
}, Dl = new FP();
function QP(e) {
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
  } = e, d = p.useRef({}), h = p.useRef(null), v = p.useRef(null), f = p.useRef(null), S = pt(f, u), [b, C] = p.useState(!a), g = YP(s);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const x = () => yt(h.current), w = () => (d.current.modalRef = f.current, d.current.mount = h.current, d.current), E = () => {
    Dl.mount(w(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = Je(() => {
    const N = KP(t) || x().body;
    Dl.add(w(), N), f.current && E();
  }), T = () => Dl.isTopModal(w()), P = Je((N) => {
    h.current = N, N && (v.current = N, a && T() ? E() : f.current && ks(f.current, m));
  }), M = p.useCallback(() => {
    Dl.remove(w(), m);
  }, [m]);
  p.useEffect(() => () => {
    M();
  }, [M]), p.useEffect(() => {
    a ? k() : (!g || !r) && M();
  }, [a, M, g, r, k]);
  const A = (N) => (L) => {
    N.onKeyDown?.(L), !(L.key !== "Escape" || L.which === 229 || // Wait until IME is settled.
    !T()) && (L.stopPropagation(), l && l(L, "escapeKeyDown"));
  }, I = (N) => (L) => {
    N.onClick?.(L), L.target === L.currentTarget && l && l(L, "backdropClick");
  }, y = (N = {}) => {
    const L = Ya(e);
    delete L.onTransitionEnter, delete L.onTransitionExited;
    const O = {
      ...L,
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
      ...O,
      onKeyDown: A(O),
      ref: S
    };
  }, j = (N = {}) => {
    const L = N;
    return {
      "aria-hidden": !0,
      ...L,
      onClick: I(L),
      open: a
    };
  }, R = () => {
    const N = () => {
      C(!1), o && o();
    }, L = () => {
      C(!0), i && i(), r && M();
    };
    return {
      onEnter: Qh(N, s?.props.onEnter ?? Sg),
      onExited: Qh(L, s?.props.onExited ?? Sg)
    };
  }, $ = !a && g && !b ? v.current ?? t : t;
  return {
    getRootProps: y,
    getBackdropProps: j,
    getTransitionProps: R,
    rootRef: S,
    portalRef: P,
    portalContainer: $,
    isTopModal: T,
    exited: b,
    hasTransition: g
  };
}
function GP(e) {
  return de("MuiModal", e);
}
ue("MuiModal", ["root", "hidden", "backdrop"]);
const XP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return fe({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, GP, r);
}, qP = U("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ge(({
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
}))), ZP = U(Cx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), Px = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    disableEnforceFocus: h = !1,
    disablePortal: v = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: S = !1,
    hideBackdrop: b = !1,
    keepMounted: C = !1,
    onClose: g,
    onTransitionEnter: m,
    onTransitionExited: x,
    open: w,
    slotProps: E = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: T,
    ...P
  } = r, M = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: d,
    disableEnforceFocus: h,
    disablePortal: v,
    disableRestoreFocus: f,
    disableScrollLock: S,
    hideBackdrop: b,
    keepMounted: C
  }, {
    getRootProps: A,
    getBackdropProps: I,
    getTransitionProps: y,
    portalRef: j,
    portalContainer: R,
    isTopModal: $,
    exited: N,
    hasTransition: L
  } = QP({
    ...M,
    rootRef: n
  }), O = {
    ...M,
    exited: N
  }, D = XP(O), B = {};
  if (l.props.tabIndex === void 0 && (B.tabIndex = "-1"), L) {
    const {
      onEnter: Q,
      onExited: X
    } = y();
    B.onEnter = Q, B.onExited = X;
  }
  const H = {
    slots: k,
    slotProps: E
  }, [W, G] = ye("root", {
    ref: n,
    elementType: qP,
    externalForwardedProps: {
      ...H,
      ...P,
      component: u
    },
    getSlotProps: A,
    ownerState: O,
    className: te(i, D?.root, !O.open && O.exited && D?.hidden)
  }), [Y, re] = ye("backdrop", {
    elementType: ZP,
    externalForwardedProps: H,
    shouldForwardComponentProp: !0,
    getSlotProps: (Q) => I({
      ...Q,
      onClick: (X) => {
        Q?.onClick && Q.onClick(X);
      }
    }),
    className: D?.backdrop,
    ownerState: O
  });
  return !C && !w && (!L || N) ? null : /* @__PURE__ */ c.jsx(xx, {
    ref: j,
    container: R,
    disablePortal: v,
    children: /* @__PURE__ */ c.jsxs(W, {
      ...G,
      children: [b ? null : /* @__PURE__ */ c.jsx(Y, {
        ...re
      }), /* @__PURE__ */ c.jsx(VP, {
        disableEnforceFocus: h,
        disableAutoFocus: d,
        disableRestoreFocus: f,
        isEnabled: $,
        open: w,
        children: /* @__PURE__ */ p.cloneElement(l, B)
      })]
    })
  });
});
function JP(e) {
  return de("MuiDialog", e);
}
ue("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Rx = /* @__PURE__ */ p.createContext({}), eR = U(Cx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), tR = (e) => {
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
  return fe(s, JP, t);
}, nR = U(Px, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), rR = U("div", {
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
}), oR = U(cn, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ie(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(ge(({
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
}))), Qo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    className: d,
    fullScreen: h = !1,
    fullWidth: v = !1,
    maxWidth: f = "sm",
    onClick: S,
    onClose: b,
    open: C,
    PaperComponent: g = cn,
    role: m = "dialog",
    scroll: x = "paper",
    slots: w = {},
    slotProps: E = {},
    transitionDuration: k = i,
    ...T
  } = r, P = {
    ...r,
    fullScreen: h,
    fullWidth: v,
    maxWidth: f,
    scroll: x
  }, M = tR(P), A = p.useRef(), I = (Q) => {
    A.current = Q.target === Q.currentTarget;
  }, y = (Q) => {
    S && S(Q), A.current && (A.current = null, b && b(Q, "backdropClick"));
  }, j = Or(l), R = p.useMemo(() => ({
    titleId: j
  }), [j]), $ = {
    slots: w,
    slotProps: E
  }, [N, L] = ye("root", {
    elementType: nR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: P,
    className: te(M.root, d),
    ref: n
  }), [O, D] = ye("backdrop", {
    elementType: eR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: P,
    className: M.backdrop
  }), [B, H] = ye("paper", {
    elementType: oR,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: P,
    className: M.paper,
    additionalProps: {
      elevation: 24,
      role: m,
      "aria-describedby": s,
      "aria-labelledby": j,
      "aria-modal": a,
      tabIndex: -1,
      [ff]: ""
    }
  }), [W, G] = ye("container", {
    elementType: rR,
    externalForwardedProps: $,
    ownerState: P,
    className: M.container
  }), [Y, re] = ye("transition", {
    elementType: wx,
    externalForwardedProps: $,
    ownerState: P,
    additionalProps: {
      appear: !0,
      in: C,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ c.jsx(N, {
    closeAfterTransition: !0,
    slots: {
      backdrop: O
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...D
      }
    },
    onClose: b,
    open: C,
    onClick: y,
    ...L,
    ...T,
    children: /* @__PURE__ */ c.jsx(Y, {
      ...re,
      children: /* @__PURE__ */ c.jsx(W, {
        onMouseDown: I,
        ...G,
        children: /* @__PURE__ */ c.jsx(B, {
          as: g,
          ...H,
          children: /* @__PURE__ */ c.jsx(Rx.Provider, {
            value: R,
            children: u
          })
        })
      })
    })
  });
});
function iR(e) {
  return de("MuiDialogActions", e);
}
ue("MuiDialogActions", ["root", "spacing"]);
const sR = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return fe({
    root: ["root", !n && "spacing"]
  }, iR, t);
}, lR = U("div", {
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
}), Go = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = sR(l);
  return /* @__PURE__ */ c.jsx(lR, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function aR(e) {
  return de("MuiDialogContent", e);
}
ue("MuiDialogContent", ["root", "dividers"]);
function uR(e) {
  return de("MuiDialogTitle", e);
}
const cR = ue("MuiDialogTitle", ["root"]), dR = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return fe({
    root: ["root", n && "dividers"]
  }, aR, t);
}, fR = U("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(ge(({
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
      [`.${cR.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Xo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = dR(l);
  return /* @__PURE__ */ c.jsx(fR, {
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
}), pR = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, uR, t);
}, mR = U(it, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), qo = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = pR(l), {
    titleId: u = i
  } = p.useContext(Rx);
  return /* @__PURE__ */ c.jsx(mR, {
    component: "h2",
    className: te(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? u,
    ...s
  });
}), bg = ue("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Mx(e) {
  return de("MuiSelect", e);
}
const So = ue("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), hR = (e) => {
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
  }, u = fe(a, x2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...u
  };
}, gR = U(nc, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ec(e, t), !n.disableUnderline && t.underline];
  }
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...et(e, "background-color", {
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
    [`&.${mo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${mo.disabled}`]: {
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
          ...et(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${mo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${mo.error}`]: {
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
          ...et(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${mo.disabled}, .${mo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${mo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Tt()).map(([s]) => ({
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
        [`&.${So.root}`]: {
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
})), yR = U(rc, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: tc
})(ge(({
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
}))), Gp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    notched: u,
    // declare here to prevent spreading to DOM
    slotProps: d,
    slots: h = {},
    type: v = "text",
    ...f
  } = r, S = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: v
  }, b = hR(r), C = {
    root: {
      ownerState: S
    },
    input: {
      ownerState: S
    }
  }, g = d ? Ft(C, d) : C, m = h.root ?? gR, x = h.input ?? yR;
  return /* @__PURE__ */ c.jsx(Fp, {
    slots: {
      root: m,
      input: x
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
Gp.muiName = "Input";
function vR(e) {
  return de("MuiFormControl", e);
}
ue("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const xR = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ie(n)}`, r && "fullWidth"]
  };
  return fe(o, vR, t);
}, SR = U("div", {
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
}), bR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    fullWidth: h = !1,
    hiddenLabel: v = !1,
    margin: f = "none",
    required: S = !1,
    size: b = "medium",
    variant: C = "outlined",
    ...g
  } = r, m = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: u,
    fullWidth: h,
    hiddenLabel: v,
    margin: f,
    required: S,
    size: b,
    variant: C
  }, x = xR(m), [w, E] = p.useState(() => {
    let $ = !1;
    return o && p.Children.forEach(o, (N) => {
      if (!Hc(N, ["Input", "Select"]))
        return;
      const L = Hc(N, ["Select"]) ? N.props.input : N;
      L && f2(L.props) && ($ = !0);
    }), $;
  }), [k, T] = p.useState(() => {
    let $ = !1;
    return o && p.Children.forEach(o, (N) => {
      Hc(N, ["Input", "Select"]) && (Ha(N.props, !0) || Ha(N.props.inputProps, !0)) && ($ = !0);
    }), $;
  }), [P, M] = p.useState(!1);
  a && P && M(!1);
  const A = d !== void 0 && !a ? d : P;
  let I;
  p.useRef(!1);
  const y = p.useCallback(() => {
    T(!0);
  }, []), j = p.useCallback(() => {
    T(!1);
  }, []), R = p.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: E,
    color: s,
    disabled: a,
    error: u,
    filled: k,
    focused: A,
    fullWidth: h,
    hiddenLabel: v,
    size: b,
    onBlur: () => {
      M(!1);
    },
    onFocus: () => {
      M(!0);
    },
    onEmpty: j,
    onFilled: y,
    registerEffect: I,
    required: S,
    variant: C
  }), [w, s, a, u, k, A, h, v, I, j, y, S, b, C]);
  return /* @__PURE__ */ c.jsx(cl.Provider, {
    value: R,
    children: /* @__PURE__ */ c.jsx(SR, {
      as: l,
      ownerState: m,
      className: te(x.root, i),
      ref: n,
      ...g,
      children: o
    })
  });
});
var wg;
const wR = (e) => {
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
  return fe(u, S2, t);
}, CR = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ie(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(ge(({
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
}))), kR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    margin: h,
    required: v,
    variant: f,
    ...S
  } = r, [b] = _i({
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
  const g = wR(C);
  return /* @__PURE__ */ c.jsx(CR, {
    as: s,
    className: te(g.root, i),
    ref: n,
    ...S,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      wg || (wg = /* @__PURE__ */ c.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), ER = (e) => {
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
  return fe(a, b2, t);
}, TR = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(ge(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(Tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${bs.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${bs.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${bs.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), PR = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ge(({
  theme: e
}) => ({
  [`&.${bs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), RR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    focused: h,
    required: v,
    ...f
  } = r, [S] = _i({
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
  }, C = ER(b);
  return /* @__PURE__ */ c.jsxs(TR, {
    as: l,
    ownerState: b,
    className: te(C.root, i),
    ref: n,
    ...f,
    children: [o, S.required && /* @__PURE__ */ c.jsxs(PR, {
      ownerState: b,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Es(e) {
  return `scale(${e}, ${e ** 2})`;
}
const MR = {
  entering: {
    opacity: 1,
    transform: Es(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Es(0.75)
  },
  exited: {
    opacity: 0,
    transform: Es(0.75)
  }
}, IR = {
  opacity: 0,
  transform: Es(0.75),
  visibility: "hidden"
}, Js = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: u,
    onEntered: d,
    onEntering: h,
    onExit: v,
    onExited: f,
    onExiting: S,
    style: b,
    timeout: C = "auto",
    ...g
  } = t, m = p.useRef(null), x = uo(), w = oc(x.motion.reducedMotion, s), E = p.useRef(null), k = pt(E, Bo(i), n), T = Pn(E, h), P = Pn(E, (R, $) => {
    w.shouldReduceMotion || Dp(R);
    const {
      duration: N,
      delay: L,
      easing: O
    } = Va({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let D;
    C === "auto" && !w.shouldReduceMotion ? (D = x.transitions.getAutoHeightDuration(R.clientHeight), m.current = D) : (D = N, m.current = null);
    const B = w.getTransitionTiming({
      duration: D,
      delay: L
    });
    R.style.transition = [x.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), x.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay,
      easing: O
    })].join(","), u && u(R, $);
  }), M = Pn(E, d), A = Pn(E, S), I = Pn(E, (R) => {
    const {
      duration: $,
      delay: N,
      easing: L
    } = Va({
      style: b,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let O;
    C === "auto" && !w.shouldReduceMotion ? (O = x.transitions.getAutoHeightDuration(R.clientHeight), m.current = O) : (O = $, m.current = null);
    const D = w.getTransitionTiming({
      duration: O,
      delay: N
    });
    R.style.transition = [x.transitions.create("opacity", {
      duration: D.duration,
      delay: D.delay
    }), x.transitions.create("transform", {
      duration: typeof D.duration == "string" ? D.duration : D.duration * 0.666,
      delay: D.delay || (typeof D.duration == "string" ? D.duration : D.duration * 0.333),
      easing: L
    })].join(","), R.style.opacity = 0, R.style.transform = Es(0.75), v && v(R);
  }), y = Pn(E, (R) => {
    R.style.transition = "", f && f(R);
  }), j = r ? (R) => {
    r(E.current, R);
  } : void 0;
  return /* @__PURE__ */ c.jsx(rx, {
    appear: o,
    in: a,
    nodeRef: E,
    onEnter: P,
    onEntered: M,
    onEntering: T,
    onExit: I,
    onExited: y,
    onExiting: A,
    addEndListener: j,
    getAutoTimeout: C === "auto" ? () => m.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...g,
    children: (R, {
      ownerState: $,
      ...N
    }) => {
      const L = tx(R, a, MR, IR, b, i.props.style);
      return /* @__PURE__ */ p.cloneElement(i, {
        style: L,
        ref: k,
        ...N
      });
    }
  });
});
Js && (Js.muiSupportAuto = !0);
function $R(e) {
  return de("MuiInputLabel", e);
}
const jR = ue("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), OR = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = fe({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, w2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, AR = U(nc, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...ec(e, t), !n.disableUnderline && t.underline];
  }
})(ge(({
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
        [`label + &, .${jR.root} + &`]: {
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
          ...et(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${es.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${es.error}`]: {
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
          ...et(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${es.disabled}, .${es.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${es.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(Tt()).map(([r]) => ({
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
})), NR = U(rc, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: tc
})({}), Xp = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    slotProps: u,
    slots: d = {},
    type: h = "text",
    ...v
  } = r, f = OR(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = u ? Ft(u, b) : b, g = d.root ?? AR, m = d.input ?? NR;
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
    type: h,
    ...v,
    classes: f
  });
});
Xp.muiName = "Input";
function LR(e) {
  return de("MuiInputAdornment", e);
}
const fi = ue("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Cg;
const zR = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${ie(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, DR = (e) => {
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
  return fe(l, LR, t);
}, FR = U("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: zR
})(ge(({
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
      [`&.${fi.positionStart}&:not(.${fi.hiddenLabel})`]: {
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
}))), Qc = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: a = !1,
    position: u,
    variant: d,
    ...h
  } = r, v = u2() || {};
  let f = d;
  d && v.variant, v && !f && (f = v.variant);
  const S = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: u,
    variant: f
  }, b = DR(S);
  return /* @__PURE__ */ c.jsx(cl.Provider, {
    value: null,
    children: /* @__PURE__ */ c.jsx(FR, {
      as: s,
      ownerState: S,
      className: te(b.root, i),
      ref: n,
      ...h,
      children: typeof o == "string" && !a ? /* @__PURE__ */ c.jsx(it, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ c.jsxs(p.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Cg || (Cg = /* @__PURE__ */ c.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), BR = (e) => {
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
  }, u = fe(a, $R, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...u
  };
}, _R = U(RR, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${bs.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(ge(({
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
      ...et(e, ["color", "transform", "max-width"], {
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
  const r = pe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...u
  } = r, [d, h] = _i({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let v = s;
  typeof v > "u" && h && (v = h.filled || h.focused || h.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: h,
    shrink: v,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, S = BR(f);
  return /* @__PURE__ */ c.jsx(_R, {
    "data-shrink": v,
    ref: n,
    className: te(S.root, a),
    ...u,
    ownerState: f,
    classes: S
  });
});
function UR(e) {
  return de("MuiLinearProgress", e);
}
ue("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "bar", "bar1", "bar2"]);
const pf = 4, HR = {}, mf = ao`
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
`, VR = typeof mf != "string" ? no`
        animation: ${mf} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, hf = ao`
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
`, KR = typeof hf != "string" ? no`
        animation: ${hf} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, gf = ao`
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
`, YR = typeof gf != "string" ? no`
        animation: ${gf} 3s infinite linear;
      ` : null, QR = (e) => {
  const {
    classes: t,
    variant: n,
    color: r
  } = e, o = {
    root: ["root", `color${ie(r)}`, n],
    dashed: ["dashed"],
    bar1: ["bar", "bar1"],
    bar2: ["bar", "bar2", n === "buffer" && `color${ie(r)}`]
  };
  return fe(o, UR, t);
}, qp = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.5), GR = U("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${ie(n.color)}`], t[n.variant]];
  }
})(ge(({
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
  variants: [...Object.entries(e.palette).filter(Tt()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: qp(e, t)
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
}))), XR = U("span", {
  name: "MuiLinearProgress",
  slot: "Dashed"
})(ge(({
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
  }, ...Object.entries(e.palette).filter(Tt()).map(([t]) => {
    const n = qp(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
      }
    };
  })]
})), YR || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${gf} 3s infinite linear`
}, ge(({
  theme: e
}) => Wi(e, {
  animation: "none"
}) || HR)), qR = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => [t.bar, t.bar1]
})(ge(({
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
    ...et(e, "transform", {
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
    }, ...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
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
        ...et(e, "transform", {
          duration: `.${pf}s`,
          easing: "linear"
        })
      }
    }, {
      props: {
        variant: "buffer"
      },
      style: {
        zIndex: 1,
        ...et(e, "transform", {
          duration: `.${pf}s`,
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
      style: VR || {
        animation: `${mf} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), ZR = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => [t.bar, t.bar2]
})(ge(({
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
    ...et(e, "transform", {
      duration: "0.2s",
      easing: "linear"
    }),
    transformOrigin: "left",
    variants: [...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
      props: {
        color: n,
        variant: "buffer"
      },
      style: {
        backgroundColor: qp(e, n),
        ...et(e, "transform", {
          duration: `.${pf}s`,
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
      style: KR || {
        animation: `${hf} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), JR = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: o,
    color: i = "primary",
    max: s,
    min: l,
    value: a,
    valueBuffer: u,
    variant: d = "indeterminate",
    ...h
  } = r, v = {
    ...r,
    color: i,
    variant: d
  }, f = l ?? 0, S = s ?? 100, b = QR(v), C = ul(), g = {}, m = {
    bar1: {},
    bar2: {}
  };
  if ((d === "determinate" || d === "buffer") && a !== void 0) {
    const x = S - f;
    let w = (a - f) / x * 100 - 100;
    C && (w = -w), m.bar1.transform = x > 0 ? `translateX(${w}%)` : "translateX(-100%)", g["aria-valuenow"] = a, g["aria-valuemin"] = f, g["aria-valuemax"] = S;
  }
  if (d === "buffer" && u !== void 0) {
    const x = S - f;
    let w = (u - f) / x * 100 - 100;
    C && (w = -w), m.bar2.transform = x > 0 ? `translateX(${w}%)` : "translateX(-100%)";
  }
  return /* @__PURE__ */ c.jsxs(GR, {
    className: te(b.root, o),
    ownerState: v,
    role: "progressbar",
    ...g,
    ref: n,
    ...h,
    children: [d === "buffer" ? /* @__PURE__ */ c.jsx(XR, {
      className: b.dashed,
      ownerState: v
    }) : null, /* @__PURE__ */ c.jsx(qR, {
      className: b.bar1,
      ownerState: v,
      style: m.bar1
    }), d === "determinate" ? null : /* @__PURE__ */ c.jsx(ZR, {
      className: b.bar2,
      ownerState: v,
      style: m.bar2
    })]
  });
}), yf = /* @__PURE__ */ p.createContext({});
function eM(e) {
  return de("MuiList", e);
}
ue("MuiList", ["root", "padding", "dense", "subheader"]);
const tM = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return fe({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, eM, t);
}, nM = U("ul", {
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
  const r = pe({
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
  } = r, h = p.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, f = tM(v);
  return /* @__PURE__ */ c.jsx(yf.Provider, {
    value: h,
    children: /* @__PURE__ */ c.jsxs(nM, {
      as: s,
      className: te(f.root, i),
      ref: n,
      ownerState: v,
      ...d,
      children: [u, o]
    })
  });
}), kg = ue("MuiListItemIcon", ["root", "alignItemsFlexStart"]), Eg = ue("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Zp = /* @__PURE__ */ p.createContext(void 0);
function Ix() {
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
function $x(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Ts,
    wrap: s = !0
  } = e, [l, a] = p.useState(t), [u, d] = p.useState(t);
  let h = l;
  t !== u && (d(t), t !== void 0 && t !== l && (h = t, a(t)));
  const v = p.useRef(null), f = p.useRef(/* @__PURE__ */ new Map()), [S, b] = p.useState(0), C = p.useMemo(() => vf(f.current), [S]), g = Tg(h, C, i, n), m = p.useRef(g);
  m.current = g;
  const x = p.useCallback(() => {
    const y = vf(f.current), j = Tg(m.current, y, i, n);
    return Nx(y, j);
  }, [n, i]), w = p.useCallback(() => f.current, []), E = Je((y) => {
    const j = f.current.get(y.id);
    iM(j ?? null, y) || (f.current.set(y.id, y), b((R) => R + 1));
  }), k = Je((y) => {
    f.current.delete(y) && b((j) => j + 1);
  }), T = Je((y) => {
    a(y);
  }), P = p.useCallback((y) => m.current === y, []), M = p.useCallback((y, j, R, $) => {
    const N = Fl(f.current), L = Ox(N, y, j, R, $ ?? i);
    return L ? (L.element?.focus(), a(L.id), L) : null;
  }, [i]), A = p.useCallback((y, j, R) => ({
    onFocus: (L) => {
      j?.(L);
      const O = Fl(f.current), D = zx(O, L.target);
      D !== -1 && a(O[D].id);
    },
    onKeyDown: (L) => {
      if (R?.(L), L.defaultPrevented || L.altKey || L.shiftKey || L.ctrlKey || L.metaKey || !sM.includes(L.key))
        return;
      let O = r === "horizontal" ? "ArrowLeft" : "ArrowUp", D = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (O = "ArrowRight", D = "ArrowLeft");
      const B = Fl(f.current), H = ir(yt(v.current)), W = H === v.current;
      let G = Pg(B, H, m.current), Y = "next";
      switch (L.key) {
        case O:
          Y = "previous", L.preventDefault(), W && (G = B.length);
          break;
        case D:
          L.preventDefault(), W && (G = -1);
          break;
        case "Home":
          L.preventDefault(), G = -1;
          break;
        case "End":
          L.preventDefault(), Y = "previous", G = B.length;
          break;
        default:
          return;
      }
      M(G, Y, s);
    },
    ref: cM(y, (L) => {
      v.current = L;
    })
  }), [M, o, r, s]), I = p.useCallback((y) => {
    const j = Fl(f.current), R = ir(yt(v.current)), N = R === v.current ? -1 : Pg(j, R, m.current);
    return M(N, "next", !0, y)?.id ?? null;
  }, [M]);
  return p.useMemo(() => ({
    activeItemId: g,
    focusNext: I,
    getActiveItem: x,
    getContainerProps: A,
    getItemMap: w,
    isItemActive: P,
    registerItem: E,
    setActiveItemId: T,
    unregisterItem: k
  }), [g, I, x, A, w, P, E, T, k]);
}
function jx(e) {
  const t = Ix(), {
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
function Tg(e, t, n, r) {
  return e != null ? lM(e, t, n) : aM(t, n, r);
}
function lM(e, t, n) {
  const r = Lx(t, e);
  return r === -1 ? Ax(t, n) : n(t[r]) ? t[r].id : Ox(t, r, "next", !1, n)?.id ?? null;
}
function aM(e, t, n) {
  const r = n?.(e);
  if (r != null) {
    const o = Nx(e, r);
    if (o && t(o))
      return o.id;
  }
  return Ax(e, t);
}
function Pg(e, t, n) {
  if (t) {
    const r = zx(e, t);
    if (r !== -1)
      return r;
  }
  return Lx(e, n);
}
function Ox(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, l = Rg(t, i, n, r);
  const a = l;
  for (; l !== -1; ) {
    if (l === a) {
      if (s)
        return null;
      s = !0;
    }
    const u = e[l];
    if (!u || !o(u))
      l = Rg(l, i, n, r);
    else
      return u;
  }
  return null;
}
function Ax(e, t) {
  return e.find((n) => t(n))?.id ?? null;
}
function Nx(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Lx(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function zx(e, t) {
  return t ? e.findIndex((n) => n.element === t || n.element?.contains(t)) : -1;
}
function vf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(xf).sort((o, i) => uM(o.element, i.element)), r = t.filter((o) => !xf(o));
  return [...n, ...r];
}
function Fl(e) {
  return vf(e).filter(xf);
}
function Rg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Ts(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function xf(e) {
  return e.element != null && e.element.isConnected;
}
function uM(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function cM(...e) {
  return (t) => {
    e.forEach((n) => {
      of(n ?? null, t);
    });
  };
}
function Dx(e, t) {
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
function pa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Fx = /* @__PURE__ */ p.createContext(null);
function Bx() {
  return p.useContext(Fx);
}
const pM = Fx.Provider, _x = /* @__PURE__ */ p.createContext(void 0);
function mM() {
  const e = p.useContext(_x);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function hM(e) {
  const t = e?.element ?? e;
  if (!t)
    return "";
  if (e?.textValue !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Wx(e, t) {
  if (t === void 0)
    return !0;
  let n = hM(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function gM(e, t) {
  return Wx(e, t) ? Ts(e) : !1;
}
function yM(e, t) {
  Dx(e, t);
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
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: h = "selectedMenu",
    ...v
  } = t, f = p.useRef(null), S = p.useRef(!1), [b, C] = p.useState(!1), g = Bx(), m = p.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), x = p.useCallback(($) => h === "selectedMenu" ? $.find((N) => N.selected && Ts(N))?.id ?? $.find((N) => Ts(N))?.id ?? null : $.find((N) => Ts(N))?.id ?? null, [h]), w = $x({
    activeItemId: void 0,
    getDefaultActiveItemId: x,
    orientation: "vertical",
    wrap: !u
  }), {
    activeItemId: E,
    focusNext: k,
    getActiveItem: T,
    getContainerProps: P,
    getItemMap: M
  } = w, A = Je(($ = !1) => {
    if (!f.current || !$ && S.current)
      return null;
    if (i) {
      const N = T();
      if (N?.element) {
        const L = Array.from(M().values()).some((D) => D.selected), O = h === "menu" && L && !N.selected && g == null;
        return C(O), yM(N.element, g), S.current = !0, N.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), S.current = !0, f.current) : (C(!1), null);
  });
  dt(() => {
    if (!o && !i) {
      S.current = !1, C(!1);
      return;
    }
    A();
  }, [E, i, o, A]), p.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: ($, {
      direction: N
    }) => {
      const L = !f.current.style.width;
      if ($.clientHeight < f.current.clientHeight && L) {
        const O = `${Ex(Xn($))}px`;
        f.current.style[N === "rtl" ? "paddingLeft" : "paddingRight"] = O, f.current.style.width = `calc(100% + ${O})`;
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const $ = ir(yt(f.current));
      return $ && Po(f.current, $) ? $ : A(!0);
    }
  }), [A]);
  const I = P(void 0, v.onFocus), y = pt(f, I.ref, n), j = p.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: b,
    variant: h
  }), [a, b, h]), R = Je(($) => {
    if (b && C(!1), ($.ctrlKey || $.metaKey || $.altKey) && d) {
      d($);
      return;
    }
    if (I.onKeyDown($), $.key.length === 1) {
      const L = m.current, O = $.key.toLowerCase(), D = performance.now();
      L.keys.length > 0 && (D - L.lastTime > 500 ? (L.keys = [], L.repeating = !0, L.previousKeyMatched = !0) : L.repeating && O !== L.keys[0] && (L.repeating = !1)), L.lastTime = D, L.keys.push(O);
      const B = ir(yt(f.current)), H = B && !L.repeating && Wx(B, L);
      L.previousKeyMatched && (H || k((W) => gM(W, L)) != null) ? $.preventDefault() : L.previousKeyMatched = !1;
    }
    d && d($);
  });
  return /* @__PURE__ */ c.jsx(rM, {
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: R,
    tabIndex: -1,
    ...v,
    onFocus: I.onFocus,
    children: /* @__PURE__ */ c.jsx(_x.Provider, {
      value: j,
      children: /* @__PURE__ */ c.jsx(Zp.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function xM(e) {
  return de("MuiPopover", e);
}
ue("MuiPopover", ["root", "paper"]);
function Mg(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function Ig(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function $g(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Bl(e) {
  return typeof e == "function" ? e() : e;
}
const SM = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    paper: ["paper"]
  }, xM, t);
}, bM = U(Px, {
  name: "MuiPopover",
  slot: "Root"
})({}), Ux = U(cn, {
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
    children: u,
    className: d,
    container: h,
    disableAutoFocus: v = !1,
    elevation: f = 8,
    marginThreshold: S = 16,
    open: b,
    slots: C = {},
    slotProps: g = {},
    transformOrigin: m = {
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
    elevation: f,
    marginThreshold: S,
    transformOrigin: m,
    transitionDuration: x
  }, P = SM(T), M = p.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const K = Bl(i), he = (K && K.nodeType === 1 ? K : yt(k.current).body).getBoundingClientRect();
    return {
      top: he.top + Mg(he, s.vertical),
      left: he.left + Ig(he, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), A = p.useCallback((K) => ({
    vertical: Mg(K, m.vertical),
    horizontal: Ig(K, m.horizontal)
  }), [m.horizontal, m.vertical]), I = p.useCallback((K) => {
    const ne = {
      width: K.offsetWidth,
      height: K.offsetHeight
    }, he = A(ne);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: $g(he)
      };
    const Re = M();
    let ve = Re.top - he.vertical, me = Re.left - he.horizontal;
    const le = ve + ne.height, Me = me + ne.width, _e = Xn(Bl(i)), Ae = _e.innerHeight - S, Ie = _e.innerWidth - S;
    if (S != null && ve < S) {
      const ce = ve - S;
      ve -= ce, he.vertical += ce;
    } else if (S != null && le > Ae) {
      const ce = le - Ae;
      ve -= ce, he.vertical += ce;
    }
    if (S != null && me < S) {
      const ce = me - S;
      me -= ce, he.horizontal += ce;
    } else if (Me > Ie) {
      const ce = Me - Ie;
      me -= ce, he.horizontal += ce;
    }
    return {
      top: `${Math.round(ve)}px`,
      left: `${Math.round(me)}px`,
      transformOrigin: $g(he)
    };
  }, [i, a, M, A, S]), [y, j] = p.useState(b), R = p.useCallback(() => {
    const K = k.current;
    if (!K)
      return;
    const ne = I(K);
    ne.top != null && K.style.setProperty("top", ne.top), ne.left != null && (K.style.left = ne.left), K.style.transformOrigin = ne.transformOrigin, j(!0);
  }, [I]);
  p.useEffect(() => (w && window.addEventListener("scroll", R), () => window.removeEventListener("scroll", R)), [i, w, R]);
  const $ = () => {
    R();
  }, N = () => {
    j(!1);
  };
  p.useEffect(() => {
    b && R();
  }), p.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      R();
    }
  } : null, [b, R]), p.useEffect(() => {
    if (!b)
      return;
    const K = Ju(() => {
      R();
    }), ne = Xn(Bl(i));
    return ne.addEventListener("resize", K), () => {
      K.clear(), ne.removeEventListener("resize", K);
    };
  }, [i, b, R]);
  let L = x;
  const O = {
    slots: C,
    slotProps: g
  }, [D, B] = ye("transition", {
    elementType: Js,
    externalForwardedProps: O,
    ownerState: T,
    getSlotProps: (K) => ({
      ...K,
      onEntering: (ne, he) => {
        K.onEntering?.(ne, he), $();
      },
      onExited: (ne) => {
        K.onExited?.(ne), N();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  x === "auto" && !D.muiSupportAuto && (L = void 0);
  const H = h || (i ? yt(Bl(i)).body : void 0), [W, {
    slots: G,
    slotProps: Y,
    ...re
  }] = ye("root", {
    ref: n,
    elementType: bM,
    externalForwardedProps: {
      ...O,
      ...E
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: O2(typeof g.backdrop == "function" ? g.backdrop(T) : g.backdrop, {
          invisible: !0
        })
      },
      container: H,
      open: b
    },
    ownerState: T,
    className: te(P.root, d)
  }), [Q, X] = ye("paper", {
    ref: k,
    className: P.paper,
    elementType: Ux,
    externalForwardedProps: O,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: y ? void 0 : {
        opacity: 0
      }
    },
    ownerState: T
  });
  return /* @__PURE__ */ c.jsx(W, {
    ...re,
    ...!Ua(W) && {
      slots: G,
      slotProps: Y,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ c.jsx(D, {
      ...B,
      timeout: L,
      children: /* @__PURE__ */ c.jsx(Q, {
        ...X,
        children: u
      })
    })
  });
});
function CM(e) {
  return de("MuiMenu", e);
}
ue("MuiMenu", ["root", "paper", "list"]);
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
  return fe({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, CM, t);
}, PM = U(wM, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), RM = U(Ux, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), MM = U(vM, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), IM = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    transitionDuration: h = "auto",
    variant: v = "selectedMenu",
    slots: f = {},
    slotProps: S = {},
    ...b
  } = r, C = ul(), g = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: h,
    variant: v
  }, m = TM(g), x = o && u, w = x && !l, E = p.useRef(null), k = ($, N) => {
    E.current && (E.current.adjustStyleForScrollbar($, {
      direction: C ? "rtl" : "ltr"
    }), x && E.current.focusInitialTarget?.());
  }, T = ($) => {
    $.key === "Tab" && ($.preventDefault(), a && a($, "tabKeyDown"));
  }, P = {
    slots: f,
    slotProps: S
  }, M = Li({
    elementType: f.root,
    externalSlotProps: S.root,
    ownerState: g,
    className: [m.root, s]
  }), [A, I] = ye("paper", {
    className: m.paper,
    elementType: RM,
    externalForwardedProps: P,
    shouldForwardComponentProp: !0,
    ownerState: g
  }), [y, j] = ye("list", {
    className: m.list,
    elementType: MM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: P,
    getSlotProps: ($) => ({
      ...$,
      onKeyDown: (N) => {
        T(N), $.onKeyDown?.(N);
      }
    }),
    ownerState: g
  }), R = typeof S.transition == "function" ? S.transition(g) : S.transition;
  return /* @__PURE__ */ c.jsx(
    PM,
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
        paper: A,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: M,
        paper: I,
        backdrop: typeof S.backdrop == "function" ? S.backdrop(g) : S.backdrop,
        transition: {
          ...R,
          onEntering: (...$) => {
            k(...$), R?.onEntering?.(...$);
          }
        }
      },
      open: u,
      ref: n,
      transitionDuration: h,
      ownerState: g,
      ...b,
      classes: d,
      children: /* @__PURE__ */ c.jsx(y, {
        actions: E,
        autoFocus: x,
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
  } = e, a = fe({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, C2, s);
  return {
    ...s,
    ...a
  };
}, OM = U(Lo, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: $M
})(ge(({
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
  [`&.${ts.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${ts.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${ts.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${ts.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ts.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${bg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${bg.inset}`]: {
    marginLeft: 52
  },
  [`& .${Eg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Eg.inset}`]: {
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
}))), rs = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    tabIndex: h,
    className: v,
    ...f
  } = r, b = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = Bx(), g = p.useContext(yf), m = p.useMemo(() => ({
    dense: s || g.dense || !1,
    disableGutters: a
  }), [g.dense, s, a]), x = mM(), w = Or(), E = x.suppressInitialFocusVisible, k = x.itemsFocusableWhenDisabled, T = p.useRef(null);
  dt(() => {
    o && T.current && Dx(T.current, C);
  }, [o]);
  const P = {
    ...r,
    dense: m.dense,
    divider: l,
    disableGutters: a
  }, M = jM(r), {
    root: A,
    ...I
  } = M, y = jx({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), j = pt(T, y.ref);
  let R;
  return h !== void 0 ? R = h : x.variant === "selectedMenu" ? R = y.tabIndex : (!r.disabled || k) && (R = -1), /* @__PURE__ */ c.jsx(yf.Provider, {
    value: m,
    children: /* @__PURE__ */ c.jsx(OM, {
      ref: j,
      role: d,
      "aria-checked": b,
      tabIndex: R,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: E,
      focusVisibleClassName: te(M.focusVisible, u),
      className: te(M.root, v),
      ...f,
      ownerState: P,
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
    icon: ["icon", `icon${ie(n)}`, i && "iconOpen", r && "disabled"]
  };
  return fe(l, k2, t);
}, Hx = U("select", {
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
  [`&.${Bp.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${fi.root}`]: {
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
      [`.${un.root}:has(> & ~ .${fi.root})`]: {
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
      [`.${un.root}:has(> & ~ .${fi.root})`]: {
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
      [`.${un.root}:has(> & ~ .${fi.root})`]: {
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
})), NM = U(Hx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Sn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Bp.multiple}`]: t.multiple
    }];
  }
})({}), Vx = U("svg", {
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
  [`&.${Bp.disabled}`]: {
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
})), LM = U(Vx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ie(n.variant)}`], n.open && t.iconOpen];
  }
})({}), zM = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, h = AM(d);
  return /* @__PURE__ */ c.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ c.jsx(NM, {
      ownerState: d,
      className: te(h.select, r),
      disabled: o,
      ref: l || n,
      ...u
    }), t.multiple ? null : /* @__PURE__ */ c.jsx(LM, {
      as: s,
      ownerState: d,
      className: h.icon
    })]
  });
});
var jg;
const DM = U("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Sn
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
}), FM = U("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Sn
})(ge(({
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
      ...et(e, "width", {
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
      ...et(e, "max-width", {
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
      ...et(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function BM(e) {
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
  return /* @__PURE__ */ c.jsx(DM, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ c.jsx(FM, {
      ownerState: a,
      children: l ? /* @__PURE__ */ c.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        jg || (jg = /* @__PURE__ */ c.jsx("span", {
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
  } = e, r = fe({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, E2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, WM = U(nc, {
  shouldForwardProp: (e) => Sn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: ec
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${er.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${er.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${er.focused} .${er.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Tt()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${er.focused} .${er.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${er.error} .${er.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${er.disabled} .${er.notchedOutline}`]: {
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
        [`&.${So.root}`]: {
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
})), UM = U(BM, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ge(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), HM = U(rc, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: tc
})(ge(({
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
  const r = pe({
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
    type: h = "text",
    ...v
  } = r, f = _M(r), [S, b] = _i({
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
    type: h
  }, g = u.root ?? WM, m = u.input ?? HM, [x, w] = ye("notchedOutline", {
    elementType: UM,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: u,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && S.required ? /* @__PURE__ */ c.jsxs(p.Fragment, {
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
    renderSuffix: (E) => /* @__PURE__ */ c.jsx(x, {
      ...w,
      notched: typeof a < "u" ? a : !!(E.startAdornment || E.filled || E.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: h,
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
function Kx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return p.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ p.isValidElement(n) && (t += Kx(n.props.children));
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
function QM(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ p.isValidElement(i) || !VM(i) || i.props.disabled)
      continue;
    const s = Kx(i.props.children).trim().toLowerCase();
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
var Og;
const _l = 2, GM = 400, Ag = 200, XM = 750, go = " ", qM = "ArrowUp", ZM = "ArrowDown", JM = "Enter";
function Ng(e, t) {
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || e.target?.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - _l && e.clientX <= r.right + _l && e.clientY >= r.top - _l && e.clientY <= r.bottom + _l;
}
const eI = U(Hx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${So.select}`]: t.select
      },
      {
        [`&.${So.select}`]: t[n.variant]
      },
      {
        [`&.${So.error}`]: t.error
      },
      {
        [`&.${So.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${So.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), tI = U(Vx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), nI = U("input", {
  shouldForwardProp: (e) => J0(e) && e !== "classes",
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
  return fe({
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  }, Mx, t);
}, oI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: u,
    defaultValue: d,
    disabled: h,
    displayEmpty: v,
    error: f = !1,
    IconComponent: S,
    inputRef: b,
    labelId: C,
    MenuProps: g = {},
    multiple: m,
    name: x,
    onBlur: w,
    onChange: E,
    onClose: k,
    onFocus: T,
    // eslint-disable-next-line react/prop-types
    onKeyDown: P,
    // eslint-disable-next-line react/prop-types
    onMouseDown: M,
    onOpen: A,
    open: I,
    readOnly: y,
    renderValue: j,
    required: R,
    SelectDisplayProps: $ = {},
    tabIndex: N,
    // catching `type` from Input which makes no sense for SelectInput
    type: L,
    value: O,
    variant: D = "standard",
    ...B
  } = t, [H, W] = sf({
    controlled: O,
    default: d,
    name: "Select"
  }), [G, Y] = sf({
    controlled: I,
    default: u,
    name: "Select"
  }), re = p.useRef(null), Q = p.useRef(null), X = p.useRef(null), K = p.useRef(!1), ne = p.useRef(!1), he = p.useRef(null), Re = p.useRef(!1), ve = p.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), me = p.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), le = sr(), Me = sr(), _e = sr(), [Ae, Ie] = p.useState(null), {
    current: ce
  } = p.useRef(I != null), [Pe, tt] = p.useState(), [Ne, We] = p.useState(null), $e = pt(n, b), Qe = p.useCallback((_) => {
    Q.current = _, _ && Ie(_);
  }, []), xe = Ae?.parentNode;
  p.useImperativeHandle($e, () => ({
    focus: () => {
      Q.current.focus();
    },
    node: re.current,
    value: H
  }), [H]);
  const se = Ae !== null && G, Se = p.useCallback(() => {
    _e.clear(), me.current.buffer = "", me.current.previousSearchIndex = null, me.current.matchedIndex = null;
  }, [_e]);
  dt(() => {
    K.current = se, se && Se();
  }, [se, Se]);
  const Ge = p.useCallback(() => {
    le.clear(), Me.clear();
  }, [le, Me]), ae = p.useCallback(() => {
    Ge(), Re.current = !1, ve.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [Ge]), Ue = p.useCallback(() => {
    he.current && (he.current(), he.current = null);
  }, []);
  p.useEffect(() => {
    se || (ae(), Ue());
  }, [se, ae, Ue]), p.useEffect(() => () => {
    ae(), Ue(), Se();
  }, [ae, Ue, Se]), p.useEffect(() => {
    if (!se || !xe || s || typeof ResizeObserver > "u")
      return;
    const _ = new ResizeObserver(() => {
      tt(xe.clientWidth);
    });
    return _.observe(xe), () => {
      _.disconnect();
    };
  }, [se, xe, s]), p.useEffect(() => {
    u && G && Ae && !ce && (tt(s ? null : xe.clientWidth), Q.current.focus());
  }, [Ae, s]), p.useEffect(() => {
    i && Q.current.focus();
  }, [i]), p.useEffect(() => {
    if (!C)
      return;
    const _ = yt(Q.current).getElementById(C);
    if (_) {
      const Z = () => {
        getSelection().isCollapsed && Q.current.focus();
      };
      return _.addEventListener("click", Z), () => {
        _.removeEventListener("click", Z);
      };
    }
  }, [C]);
  const qe = Je((_, Z) => {
    _ || (ae(), Ue()), _ ? (Se(), We(dM(Z)), A && A(Z)) : (We(null), k && k(Z)), ce || (K.current = _, tt(s ? null : xe.clientWidth), Y(_));
  }), Pt = () => {
    ae(), ne.current ? Me.start(Ag, () => {
      ve.current.allowUnselectedMouseUp = !0, le.start(Ag, () => {
        ve.current.allowSelectedMouseUp = !0;
      });
    }) : le.start(GM, () => {
      ve.current.allowSelectedMouseUp = !0, ve.current.allowUnselectedMouseUp = !0;
    });
  }, Le = (_) => {
    if (M?.(_), _.button !== 0 || (_.preventDefault(), !Q.current))
      return;
    Q.current.focus();
    const Z = yt(_.currentTarget);
    Pt(), Ue();
    const Te = (qt) => {
      he.current = null, Q.current && (Ng(qt, Q.current) || Ng(qt, X.current) || !K.current && ce || qe(!1, qt));
    };
    Z.addEventListener("mouseup", Te, {
      capture: !0,
      once: !0
    }), he.current = () => {
      Z.removeEventListener("mouseup", Te, !0);
    }, qe(!0, _);
  }, mt = (_) => {
    qe(!1, _);
  }, nt = p.Children.toArray(l), Lr = (_) => {
    const Z = nt.find((Te) => Te.props.value === _.target.value);
    Z !== void 0 && (W(Z.props.value), E && E(_, Z));
  }, ze = (_, Z, Te) => {
    if (W(Te), E) {
      const qt = _.nativeEvent || _, gr = new qt.constructor(qt.type, qt);
      Object.defineProperty(gr, "target", {
        writable: !0,
        value: {
          value: Te,
          name: x
        }
      }), E(gr, Z);
    }
  }, q = (_) => (Z) => {
    Re.current = !1;
    let Te;
    if (Z.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Te = Array.isArray(H) ? H.slice() : [];
        const qt = H.indexOf(_.props.value);
        qt === -1 ? Te.push(_.props.value) : Te.splice(qt, 1);
      } else
        Te = _.props.value;
      _.props.onClick && _.props.onClick(Z), H !== Te && ze(Z, _, Te), m || qe(!1, Z);
    }
  }, je = (_, Z) => (Te) => {
    if (_.props.onMouseUp?.(Te), Re.current) {
      Re.current = !1;
      return;
    }
    const qt = !ve.current.allowSelectedMouseUp && Z, gr = !ve.current.allowUnselectedMouseUp && !Z;
    qt || gr || Te.currentTarget.click();
  }, It = (_) => {
    const Z = me.current, Te = Z.buffer !== "";
    if (se || m || h || _.defaultPrevented || _.nativeEvent?.isComposing || _.key.length !== 1 || _.ctrlKey || _.metaKey || _.altKey || _.key === go && !Te)
      return !1;
    _.key === go && _.preventDefault();
    const qt = Z.buffer === "", {
      options: gr,
      selectedIndex: Qx
    } = QM(nt, H);
    if (gr.length === 0)
      return _.key !== go && Se(), !0;
    qt && (Z.previousSearchIndex = Qx);
    const ac = _.key.toLowerCase();
    Z.buffer === ac && YM(gr, ac) && (Z.buffer = "", Z.previousSearchIndex = Z.matchedIndex), Z.buffer += ac, _e.start(XM, Se);
    const uc = KM(gr, Z.buffer, (Z.previousSearchIndex ?? -1) + 1);
    if (uc !== -1) {
      const cc = gr[uc];
      return Z.matchedIndex = uc, pa(H, cc.value) || ze(_, cc.child, cc.value), !0;
    }
    return _.key !== go && Se(), !0;
  }, pr = (_) => {
    if (!y) {
      const Z = It(_), Te = _.key === go || _.key === qM || _.key === ZM || _.key === JM;
      !Z && Te && (_.preventDefault(), qe(!0, _)), P?.(_);
    }
  }, mr = (_) => {
    Se(), !se && w && (Object.defineProperty(_, "target", {
      writable: !0,
      value: {
        value: H,
        name: x
      }
    }), w(_));
  }, zn = (_) => (Z) => {
    _?.props?.onKeyDown?.(Z), Z.key === go && Z.target === Z.currentTarget && !Z.defaultPrevented && (Z.preventDefault(), Z.repeat || Z.currentTarget.click());
  };
  delete B["aria-invalid"];
  let bn, hr;
  const qn = [];
  let Dn = !1, zr = !1;
  (Ha({
    value: H
  }) || v) && (j ? bn = j(H) : Dn = !0);
  const Ui = nt.map((_) => {
    if (!/* @__PURE__ */ p.isValidElement(_))
      return null;
    let Z;
    if (m) {
      if (!Array.isArray(H))
        throw new Error(jr(2));
      Z = H.some((Te) => pa(Te, _.props.value)), Z && Dn && qn.push(_.props.children);
    } else
      Z = pa(H, _.props.value), Z && Dn && (hr = _.props.children);
    return Z && (zr = !0), /* @__PURE__ */ p.cloneElement(_, {
      "aria-selected": Z ? "true" : "false",
      onMouseDown: (Te) => {
        Re.current = !0, _.props.onMouseDown?.(Te);
      },
      onPointerDown: (Te) => {
        Re.current = !0, _.props.onPointerDown?.(Te);
      },
      onClick: q(_),
      onMouseUp: je(_, Z),
      onKeyUp: (Te) => {
        Te.key === go && Te.preventDefault(), _.props.onKeyUp && _.props.onKeyUp(Te);
      },
      onKeyDown: zn(_),
      role: "option",
      selected: Z,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": _.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  dt(() => {
    ne.current = zr, !se && !m && !zr && Se();
  }, [zr, m, se, Se]), Dn && (m ? qn.length === 0 ? bn = null : bn = qn.reduce((_, Z, Te) => (_.push(Z), Te < qn.length - 1 && _.push(", "), _), []) : bn = hr);
  let _o = Pe;
  !s && ce && Ae && (_o = xe.clientWidth);
  let fo;
  typeof N < "u" ? fo = N : fo = h ? null : 0;
  const oe = $.id || (x ? `mui-component-select-${x}` : void 0), J = {
    ...t,
    variant: D,
    value: H,
    open: se,
    error: f
  }, Ee = rI(J), Ce = typeof g.slotProps?.paper == "function" ? g.slotProps.paper(J) : g.slotProps?.paper, ht = pt(Ce?.ref, X), wn = typeof g.slotProps?.list == "function" ? g.slotProps.list(J) : g.slotProps?.list, ln = Or(), z = Or();
  return /* @__PURE__ */ c.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ c.jsx(eI, {
      as: "div",
      ref: Qe,
      tabIndex: fo,
      role: "combobox",
      "aria-controls": se ? ln : void 0,
      "aria-disabled": h ? "true" : void 0,
      "aria-expanded": se ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": y ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": R ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: pr,
      onMouseDown: h || y ? null : Le,
      onBlur: mr,
      onFocus: T,
      ...$,
      ownerState: J,
      className: te($.className, Ee.select, a),
      id: oe,
      children: fM(bn) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Og || (Og = /* @__PURE__ */ c.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : bn
    }), /* @__PURE__ */ c.jsx(nI, {
      "aria-invalid": f,
      value: Array.isArray(H) ? H.join(",") : H,
      name: x,
      ref: re,
      "aria-hidden": !0,
      onChange: Lr,
      tabIndex: -1,
      disabled: h,
      readOnly: y,
      className: Ee.nativeInput,
      autoFocus: i,
      required: R,
      ...B,
      id: B.id ?? z,
      ownerState: J
    }), /* @__PURE__ */ c.jsx(tI, {
      as: S,
      className: Ee.icon,
      ownerState: J
    }), /* @__PURE__ */ c.jsx(pM, {
      value: Ne,
      children: /* @__PURE__ */ c.jsx(IM, {
        id: `menu-${x || ""}`,
        anchorEl: xe,
        open: se,
        onClose: mt,
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
            id: ln,
            ...wn
          },
          paper: {
            ...Ce,
            ref: ht,
            style: {
              minWidth: _o,
              ...Ce?.style
            }
          }
        },
        children: Ui
      })
    })]
  });
}), iI = (e) => {
  const {
    classes: t
  } = e, r = fe({
    root: ["root"]
  }, Mx, t);
  return {
    ...t,
    ...r
  };
}, em = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Sn(e) && e !== "variant"
}, sI = U(Xp, em)(""), lI = U(Jp, em)(""), aI = U(Gp, em)(""), Ps = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: u = !1,
    IconComponent: d = dP,
    id: h,
    input: v,
    inputProps: f,
    label: S,
    labelId: b,
    MenuProps: C,
    multiple: g = !1,
    native: m = !1,
    onClose: x,
    onOpen: w,
    open: E,
    renderValue: k,
    SelectDisplayProps: T,
    variant: P = "outlined",
    ...M
  } = r, A = m ? zM : oI, [I] = _i({
    props: r,
    states: ["variant", "error"]
  }), y = I.variant || P, j = {
    ...r,
    variant: y,
    classes: s
  }, R = iI(j), {
    root: $,
    ...N
  } = R, L = v || {
    standard: /* @__PURE__ */ c.jsx(sI, {
      ownerState: j
    }),
    outlined: /* @__PURE__ */ c.jsx(lI, {
      label: S,
      ownerState: j
    }),
    filled: /* @__PURE__ */ c.jsx(aI, {
      ownerState: j
    })
  }[y], O = pt(n, Bo(L));
  return /* @__PURE__ */ c.jsx(p.Fragment, {
    children: /* @__PURE__ */ p.cloneElement(L, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: A,
      inputProps: {
        children: i,
        error: I.error,
        IconComponent: d,
        variant: y,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: g,
        ...m ? {
          id: h
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: u,
          labelId: b,
          MenuProps: C,
          onClose: x,
          onOpen: w,
          open: E,
          renderValue: k,
          SelectDisplayProps: {
            id: h,
            ...T
          }
        },
        ...f,
        classes: f ? Ft(N, f.classes) : N,
        ...v ? v.props.inputProps : {}
      },
      ...(g && m || u) && y === "outlined" ? {
        notched: !0
      } : {},
      ref: O,
      className: te(L.props.className, l, R.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: y
      },
      ...M
    })
  });
});
Ps.muiName = "Select";
function uI(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = sr();
  p.useEffect(() => {
    if (!o)
      return;
    function g(m) {
      m.defaultPrevented || m.key === "Escape" && r?.(m, "escapeKeyDown");
    }
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [o, r]);
  const l = Je((g, m) => {
    r?.(g, m);
  }), a = Je((g) => {
    !r || g == null || s.start(g, () => {
      l(null, "timeout");
    });
  });
  p.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const u = (g) => {
    r?.(g, "clickaway");
  }, d = s.clear, h = p.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (g) => (m) => {
    const x = g.onBlur;
    x?.(m), h();
  }, f = (g) => (m) => {
    const x = g.onFocus;
    x?.(m), d();
  }, S = (g) => (m) => {
    const x = g.onMouseEnter;
    x?.(m), d();
  }, b = (g) => (m) => {
    const x = g.onMouseLeave;
    x?.(m), h();
  };
  return p.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", h), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", h), window.removeEventListener("blur", d);
      };
  }, [n, o, h, d]), {
    getRootProps: (g = {}) => {
      const m = {
        ...Ya(e),
        ...Ya(g)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...g,
        ...m,
        onBlur: v(m),
        onFocus: f(m),
        onMouseEnter: S(m),
        onMouseLeave: b(m)
      };
    },
    onClickAway: u
  };
}
function cI(e) {
  return de("MuiSnackbarContent", e);
}
ue("MuiSnackbarContent", ["root", "message", "action"]);
const dI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, cI, t);
}, fI = U(cn, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(ge(({
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
})), pI = U("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), mI = U("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), hI = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, u = r, d = dI(u);
  return /* @__PURE__ */ c.jsxs(fI, {
    role: l,
    elevation: 6,
    className: te(d.root, i),
    ownerState: u,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ c.jsx(pI, {
      className: d.message,
      ownerState: u,
      children: s
    }), o ? /* @__PURE__ */ c.jsx(mI, {
      className: d.action,
      ownerState: u,
      children: o
    }) : null]
  });
});
function gI(e) {
  return de("MuiSnackbar", e);
}
ue("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const yI = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ie(n.vertical)}${ie(n.horizontal)}`]
  };
  return fe(r, gI, t);
}, vI = U("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ie(n.anchorOrigin.vertical)}${ie(n.anchorOrigin.horizontal)}`]];
  }
})(ge(({
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
  const r = pe({
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
    children: d,
    className: h,
    disableWindowBlurListener: v = !1,
    message: f,
    onBlur: S,
    onClose: b,
    onFocus: C,
    onMouseEnter: g,
    onMouseLeave: m,
    open: x,
    resumeHideDuration: w,
    slots: E = {},
    slotProps: k = {},
    transitionDuration: T = i,
    ...P
  } = r, M = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: u,
    disableWindowBlurListener: v,
    transitionDuration: T
  }, A = yI(M), {
    getRootProps: I,
    onClickAway: y
  } = uI(M), [j, R] = p.useState(!0), $ = {
    slots: E,
    slotProps: k
  }, [N, L] = ye("root", {
    ref: n,
    className: [A.root, h],
    elementType: vI,
    getSlotProps: I,
    externalForwardedProps: {
      ...$,
      ...P
    },
    ownerState: M
  }), [O, {
    ownerState: D,
    ...B
  }] = ye("clickAwayListener", {
    elementType: AP,
    externalForwardedProps: $,
    getSlotProps: (re) => ({
      onClickAway: (...Q) => {
        const X = Q[0];
        re.onClickAway?.(...Q), !X?.defaultMuiPrevented && y(...Q);
      }
    }),
    ownerState: M
  }), [H, W] = ye("content", {
    elementType: hI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: M
  }), [G, Y] = ye("transition", {
    elementType: Js,
    externalForwardedProps: $,
    getSlotProps: (re) => ({
      onEnter: (...Q) => {
        re.onEnter?.(...Q), R(!1);
      },
      onExited: (...Q) => {
        re.onExited?.(...Q), R(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: x,
      timeout: T,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: M
  });
  return !x && j ? null : /* @__PURE__ */ c.jsx(O, {
    ...B,
    ...E.clickAwayListener && {
      ownerState: D
    },
    children: /* @__PURE__ */ c.jsx(N, {
      ...L,
      children: /* @__PURE__ */ c.jsx(G, {
        ...Y,
        children: d || /* @__PURE__ */ c.jsx(H, {
          ...W
        })
      })
    })
  });
});
function SI(e) {
  return de("MuiTooltip", e);
}
const Cn = ue("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
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
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ie(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return fe(s, SI, t);
}, CI = U(bx, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(ge(({
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
      [`&[data-popper-placement*="bottom"] .${Cn.arrow}`]: {
        top: 0,
        marginTop: "-0.71em",
        "&::before": {
          transformOrigin: "0 100%"
        }
      },
      [`&[data-popper-placement*="top"] .${Cn.arrow}`]: {
        bottom: 0,
        marginBottom: "-0.71em",
        "&::before": {
          transformOrigin: "100% 0"
        }
      },
      [`&[data-popper-placement*="right"] .${Cn.arrow}`]: {
        height: "1em",
        width: "0.71em",
        insetInlineStart: 0,
        marginInlineStart: "-0.71em",
        "&::before": {
          transformOrigin: "100% 100%"
        }
      },
      [`&[data-popper-placement*="left"] .${Cn.arrow}`]: {
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
}))), kI = U("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ie(n.placement.split("-")[0])}`]];
  }
})(ge(({
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
  [`.${Cn.popper}[data-popper-placement*="left"] &`]: {
    transformOrigin: "right center",
    marginInlineEnd: "14px"
  },
  [`.${Cn.popper}[data-popper-placement*="right"] &`]: {
    transformOrigin: "left center",
    marginInlineStart: "14px"
  },
  [`.${Cn.popper}[data-popper-placement*="top"] &`]: {
    transformOrigin: "center bottom",
    marginBottom: "14px"
  },
  [`.${Cn.popper}[data-popper-placement*="bottom"] &`]: {
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
      [`.${Cn.popper}[data-popper-placement*="left"] &`]: {
        marginInlineEnd: "24px"
      },
      [`.${Cn.popper}[data-popper-placement*="right"] &`]: {
        marginInlineStart: "24px"
      },
      [`.${Cn.popper}[data-popper-placement*="top"] &`]: {
        marginBottom: "24px"
      },
      [`.${Cn.popper}[data-popper-placement*="bottom"] &`]: {
        marginTop: "24px"
      }
    }
  }]
}))), EI = U("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(ge(({
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
let Wl = !1;
const Lg = new ic();
let os = {
  x: 0,
  y: 0
};
function Ul(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const xr = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    disableTouchListener: h = !1,
    enterDelay: v = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: S = 700,
    followCursor: b = !1,
    id: C,
    leaveDelay: g = 0,
    leaveTouchDelay: m = 1500,
    onClose: x,
    onOpen: w,
    open: E,
    placement: k = "bottom",
    slotProps: T = {},
    slots: P = {},
    title: M,
    ...A
  } = r, I = /* @__PURE__ */ p.isValidElement(i) ? i : /* @__PURE__ */ c.jsx("span", {
    children: i
  }), y = uo(), [j, R] = p.useState(), [$, N] = p.useState(null), L = p.useRef(!1), O = d || b, D = sr(), B = sr(), H = sr(), W = sr(), [G, Y] = sf({
    controlled: E,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let re = G;
  const Q = Or(C), X = p.useRef(), K = Je(() => {
    X.current !== void 0 && (document.body.style.WebkitUserSelect = X.current, X.current = void 0), W.clear();
  });
  p.useEffect(() => K, [K]);
  const ne = (q) => {
    Lg.clear(), Wl = !0, Y(!0), w && !re && w(q);
  }, he = Je(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (q) => {
      Lg.start(800 + g, () => {
        Wl = !1;
      }), Y(!1), x && re && x(q), D.start(y.transitions.duration.shortest, () => {
        L.current = !1;
      });
    }
  ), Re = (q) => {
    j?.disabled || L.current && q.type !== "touchstart" || (j && j.removeAttribute("title"), B.clear(), H.clear(), v || Wl && f ? B.start(Wl ? f : v, () => {
      ne(q);
    }) : ne(q));
  }, ve = (q) => {
    B.clear(), H.start(g, () => {
      he(q);
    });
  }, [, me] = p.useState(!1), le = (q) => {
    const je = q?.target ?? j;
    if (!je || je.disabled || !Qa(je)) {
      me(!1);
      const It = q ?? new Event("blur");
      !q && je && (Object.defineProperty(It, "target", {
        value: je
      }), Object.defineProperty(It, "currentTarget", {
        value: je
      })), ve(It);
    }
  }, Me = (q) => {
    if (j || R(q.currentTarget), Qa(q.target)) {
      const je = (It) => {
        It.target.disabled && le(It), It.target.removeEventListener("blur", je);
      };
      q.target.addEventListener("blur", je), me(!0), Re(q);
    }
  }, _e = (q) => {
    L.current = !0;
    const je = I.props;
    je.onTouchStart && je.onTouchStart(q);
  }, Ae = (q) => {
    _e(q), H.clear(), D.clear(), K(), X.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", W.start(S, () => {
      document.body.style.WebkitUserSelect = X.current, Re(q);
    });
  }, Ie = (q) => {
    I.props.onTouchEnd && I.props.onTouchEnd(q), K(), H.start(m, () => {
      he(q);
    });
  };
  p.useEffect(() => {
    if (!re)
      return;
    function q(je) {
      je.key === "Escape" && he(je);
    }
    return document.addEventListener("keydown", q), () => {
      document.removeEventListener("keydown", q);
    };
  }, [he, re]);
  const ce = pt(Bo(I), R, n);
  !M && M !== 0 && (re = !1);
  const Pe = p.useRef(), tt = (q) => {
    const je = I.props;
    je.onMouseMove && je.onMouseMove(q), os = {
      x: q.clientX,
      y: q.clientY
    }, Pe.current && Pe.current.update();
  }, Ne = {}, We = typeof M == "string";
  l ? (Ne.title = !re && We && !u ? M : null, Ne["aria-describedby"] = re ? Q : null) : (Ne["aria-label"] = We ? M : null, Ne["aria-labelledby"] = re && !We ? Q : null);
  const $e = {
    ...Ne,
    ...A,
    ...I.props,
    className: te(A.className, I.props.className),
    onTouchStart: _e,
    ref: ce,
    ...b ? {
      onMouseMove: tt
    } : {}
  }, Qe = {};
  h || ($e.onTouchStart = Ae, $e.onTouchEnd = Ie), u || ($e.onMouseOver = Ul(Re, $e.onMouseOver), $e.onMouseLeave = Ul(ve, $e.onMouseLeave), O || (Qe.onMouseOver = Re, Qe.onMouseLeave = ve)), a || ($e.onFocus = Ul(Me, $e.onFocus), $e.onBlur = Ul(le, $e.onBlur), O || (Qe.onFocus = Me, Qe.onBlur = le));
  const xe = {
    ...r,
    arrow: o,
    disableInteractive: O,
    placement: k,
    touch: L.current
  }, se = typeof T.popper == "function" ? T.popper(xe) : T.popper, Se = p.useMemo(() => {
    let q = [{
      name: "arrow",
      enabled: !!$,
      options: {
        element: $,
        padding: 4
      }
    }];
    return se?.popperOptions?.modifiers && (q = q.concat(se.popperOptions.modifiers)), {
      ...se?.popperOptions,
      modifiers: q
    };
  }, [$, se?.popperOptions]), Ge = wI(xe), ae = {
    slots: P,
    slotProps: {
      arrow: T.arrow,
      popper: se,
      tooltip: T.tooltip,
      transition: T.transition
    }
  }, [Ue, qe] = ye("popper", {
    elementType: CI,
    externalForwardedProps: ae,
    ownerState: xe,
    className: Ge.popper
  }), [Pt, Le] = ye("transition", {
    elementType: Js,
    externalForwardedProps: ae,
    ownerState: xe
  }), [mt, nt] = ye("tooltip", {
    elementType: kI,
    className: Ge.tooltip,
    externalForwardedProps: ae,
    ownerState: xe
  }), [Lr, ze] = ye("arrow", {
    elementType: EI,
    className: Ge.arrow,
    externalForwardedProps: ae,
    ownerState: xe,
    ref: N
  });
  return /* @__PURE__ */ c.jsxs(p.Fragment, {
    children: [/* @__PURE__ */ p.cloneElement(I, $e), /* @__PURE__ */ c.jsx(Ue, {
      as: bx,
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
      popperRef: Pe,
      open: j ? re : !1,
      id: Q,
      transition: !0,
      ...Qe,
      ...qe,
      popperOptions: Se,
      children: ({
        TransitionProps: q
      }) => /* @__PURE__ */ c.jsx(Pt, {
        timeout: y.transitions.duration.shorter,
        ...q,
        ...Le,
        children: /* @__PURE__ */ c.jsxs(mt, {
          ...nt,
          children: [M, o ? /* @__PURE__ */ c.jsx(Lr, {
            ...ze
          }) : null]
        })
      })
    })]
  });
}), we = kk({
  createStyledComponent: U("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => pe({
    props: e,
    name: "MuiStack"
  })
});
function TI(e) {
  return de("MuiTab", e);
}
const _n = ue("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), PI = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ie(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return fe(u, TI, t);
}, RI = U(Lo, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ie(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${_n.icon}`]: t.icon
    }];
  }
})(ge(({
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
      [`& > .${_n.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${_n.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${_n.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${_n.icon}`]: {
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
      [`&.${_n.selected}`]: {
        opacity: 1
      },
      [`&.${_n.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${_n.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${_n.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${_n.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${_n.disabled}`]: {
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
}))), Zo = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
    iconPosition: u = "top",
    // eslint-disable-next-line react/prop-types
    indicator: d,
    label: h,
    onChange: v,
    onClick: f,
    onFocus: S,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: g = "inherit",
    value: m,
    wrapped: x = !1,
    ...w
  } = r, E = Ix(), k = jx({
    id: m,
    ref: n,
    disabled: i,
    selected: b
  }), P = E.getItemMap().size === 0 && b ? 0 : k.tabIndex, M = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!a,
    iconPosition: u,
    label: !!h,
    fullWidth: l,
    textColor: g,
    wrapped: x
  }, A = PI(M), I = a && h && /* @__PURE__ */ p.isValidElement(a) ? /* @__PURE__ */ p.cloneElement(a, {
    className: te(A.icon, a.props.className)
  }) : a, y = (R) => {
    !b && v && v(R, m), f && f(R);
  }, j = (R) => {
    C && !b && v && v(R, m), S && S(R);
  };
  return /* @__PURE__ */ c.jsxs(RI, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: te(A.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: y,
    onFocus: j,
    tabIndex: P,
    ownerState: M,
    ...w,
    children: [u === "top" || u === "start" ? /* @__PURE__ */ c.jsxs(p.Fragment, {
      children: [I, h]
    }) : /* @__PURE__ */ c.jsxs(p.Fragment, {
      children: [h, I]
    }), d]
  });
}), Yx = /* @__PURE__ */ p.createContext();
function MI(e) {
  return de("MuiTable", e);
}
ue("MuiTable", ["root", "stickyHeader"]);
const II = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return fe({
    root: ["root", n && "stickyHeader"]
  }, MI, t);
}, $I = U("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(ge(({
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
}))), zg = "table", Hl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = zg,
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
  }, h = II(d), v = p.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ c.jsx(Yx.Provider, {
    value: v,
    children: /* @__PURE__ */ c.jsx($I, {
      as: i,
      role: i === zg ? null : "table",
      ref: n,
      className: te(h.root, o),
      ownerState: d,
      ...u
    })
  });
}), lc = /* @__PURE__ */ p.createContext();
function jI(e) {
  return de("MuiTableBody", e);
}
ue("MuiTableBody", ["root"]);
const OI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, jI, t);
}, AI = U("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), NI = {
  variant: "body"
}, Dg = "tbody", Vl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Dg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = OI(l);
  return /* @__PURE__ */ c.jsx(lc.Provider, {
    value: NI,
    children: /* @__PURE__ */ c.jsx(AI, {
      className: te(a.root, o),
      as: i,
      ref: n,
      role: i === Dg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function LI(e) {
  return de("MuiTableCell", e);
}
const zI = ue("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), DI = (e) => {
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
  return fe(l, LI, t);
}, FI = U("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ie(n.size)}`], n.padding !== "normal" && t[`padding${ie(n.padding)}`], n.align !== "inherit" && t[`align${ie(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(ge(({
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
}))), be = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    variant: h,
    ...v
  } = r, f = p.useContext(Yx), S = p.useContext(lc), b = S && S.variant === "head";
  let C;
  s ? C = s : C = b ? "th" : "td";
  let g = a;
  C === "td" ? g = void 0 : !g && b && (g = "col");
  const m = h || S && S.variant, x = {
    ...r,
    align: o,
    component: C,
    padding: l || (f && f.padding ? f.padding : "normal"),
    size: u || (f && f.size ? f.size : "medium"),
    sortDirection: d,
    stickyHeader: m === "head" && f && f.stickyHeader,
    variant: m
  }, w = DI(x);
  let E = null;
  return d && (E = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ c.jsx(FI, {
    as: C,
    ref: n,
    className: te(w.root, i),
    "aria-sort": E,
    scope: g,
    ownerState: x,
    ...v
  });
});
function BI(e) {
  return de("MuiTableContainer", e);
}
ue("MuiTableContainer", ["root"]);
const _I = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, BI, t);
}, WI = U("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), Kl = /* @__PURE__ */ p.forwardRef(function(t, n) {
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
  }, a = _I(l);
  return /* @__PURE__ */ c.jsx(WI, {
    ref: n,
    as: i,
    className: te(a.root, o),
    ownerState: l,
    ...s
  });
});
function UI(e) {
  return de("MuiTableHead", e);
}
ue("MuiTableHead", ["root"]);
const HI = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, UI, t);
}, VI = U("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), KI = {
  variant: "head"
}, Fg = "thead", Yl = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Fg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = HI(l);
  return /* @__PURE__ */ c.jsx(lc.Provider, {
    value: KI,
    children: /* @__PURE__ */ c.jsx(VI, {
      as: i,
      className: te(a.root, o),
      ref: n,
      role: i === Fg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), YI = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), QI = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function GI(e) {
  return de("MuiTableRow", e);
}
const Bg = ue("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), XI = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return fe({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, GI, t);
}, qI = U("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(ge(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Bg.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Bg.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), _g = "tr", Wn = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = _g,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, u = p.useContext(lc), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer"
  }, h = XI(d);
  return /* @__PURE__ */ c.jsx(qI, {
    as: i,
    ref: n,
    className: te(h.root, o),
    role: i === _g ? null : "row",
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
  let u = !1;
  const d = () => {
    u = !0;
  }, h = (v) => {
    if (u) {
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
    requestAnimationFrame(h);
  };
  return a === n ? (o(new Error("Element already at target position")), d) : (requestAnimationFrame(h), d);
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
  return dt(() => {
    const s = Ju(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Xn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), p.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ c.jsx("div", {
    style: e$,
    ...n,
    ref: o
  });
}
function n$(e) {
  return de("MuiTabScrollButton", e);
}
const r$ = ue("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), o$ = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return fe({
    root: ["root", n, r && "disabled"]
  }, n$, t);
}, i$ = U(Lo, {
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
  const r = pe({
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
    nativeButton: h,
    ...v
  } = d, f = ul(), S = {
    isRtl: f,
    ...r
  }, b = o$(S), C = i.StartScrollButtonIcon ?? YI, g = i.EndScrollButtonIcon ?? QI, m = Li({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: S
  }), x = Li({
    elementType: g,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: S
  });
  return /* @__PURE__ */ c.jsx(i$, {
    component: "div",
    className: te(b.root, o),
    ref: n,
    role: null,
    ownerState: S,
    tabIndex: null,
    ...v,
    style: {
      ...v.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ c.jsx(C, {
      ...m
    }) : /* @__PURE__ */ c.jsx(g, {
      ...x
    })
  });
});
function l$(e) {
  return de("MuiTabs", e);
}
const Gc = ue("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), a$ = (e) => {
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
  }, l$, a);
}, u$ = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Gc.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Gc.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(ge(({
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
      [`& .${Gc.scrollButtons}`]: {
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
}), d$ = U("div", {
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
}), f$ = U("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(ge(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...et(e),
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
}))), p$ = U(t$)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Wg = {}, m$ = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
    props: t,
    name: "MuiTabs"
  }), o = uo(), i = ul(), s = oc(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: u,
    centered: d = !1,
    children: h,
    className: v,
    component: f = "div",
    allowScrollButtonsMobile: S = !1,
    indicatorColor: b = "primary",
    onChange: C,
    orientation: g = "horizontal",
    scrollButtons: m = "auto",
    selectionFollowsFocus: x,
    slots: w = {},
    slotProps: E = {},
    textColor: k = "primary",
    value: T,
    variant: P = "standard",
    visibleScrollbar: M = !1,
    ...A
  } = r, I = P === "scrollable", y = g === "vertical", j = y ? "scrollTop" : "scrollLeft", R = y ? "top" : "left", $ = y ? "bottom" : "right", N = y ? "clientHeight" : "clientWidth", L = y ? "height" : "width", O = {
    ...r,
    component: f,
    allowScrollButtonsMobile: S,
    indicatorColor: b,
    orientation: g,
    vertical: y,
    scrollButtons: m,
    textColor: k,
    variant: P,
    visibleScrollbar: M,
    fixed: !I,
    hideScrollbar: I && !M,
    scrollableX: I && !y,
    scrollableY: I && y,
    centered: d && !I,
    scrollButtonsHideMobile: !S
  }, D = a$(O), B = Li({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: E.startScrollButtonIcon,
    ownerState: O
  }), H = Li({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: E.endScrollButtonIcon,
    ownerState: O
  }), [W, G] = p.useState(!1), [Y, re] = p.useState(Wg), [Q, X] = p.useState(!1), [K, ne] = p.useState(!1), [he, Re] = p.useState(!1), ve = T === !1 ? null : T, [me, le] = p.useState(!1), [Me, _e] = p.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Ae = /* @__PURE__ */ new Map(), Ie = p.useRef(null), ce = p.useRef(null), Pe = {
    slots: w,
    slotProps: E
  }, tt = () => {
    const oe = Ie.current;
    let J;
    if (oe) {
      const Ce = oe.getBoundingClientRect();
      J = {
        clientWidth: oe.clientWidth,
        scrollLeft: oe.scrollLeft,
        scrollTop: oe.scrollTop,
        scrollWidth: oe.scrollWidth,
        top: Ce.top,
        bottom: Ce.bottom,
        left: Ce.left,
        right: Ce.right
      };
    }
    let Ee;
    if (oe && T !== !1) {
      const Ce = ce.current.children;
      if (Ce.length > 0) {
        const ht = Ce[Ae.get(T)];
        Ee = ht ? ht.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: J,
      tabMeta: Ee
    };
  }, Ne = Je(() => {
    const {
      tabsMeta: oe,
      tabMeta: J
    } = tt();
    let Ee = 0, Ce;
    y ? (Ce = "top", J && oe && (Ee = J.top - oe.top + oe.scrollTop)) : (Ce = i ? "right" : "left", J && oe && (Ee = (i ? -1 : 1) * (J[Ce] - oe[Ce] + oe.scrollLeft)));
    const ht = {
      [Ce]: Ee,
      // May be wrong until the font is loaded.
      [L]: J ? J[L] : 0
    };
    if (typeof Y[Ce] != "number" || typeof Y[L] != "number")
      re(ht);
    else {
      const wn = Math.abs(Y[Ce] - ht[Ce]), ln = Math.abs(Y[L] - ht[L]);
      (wn >= 1 || ln >= 1) && re(ht);
    }
  }), We = (oe, {
    animation: J = !0
  } = {}) => {
    J && !s.shouldReduceMotion ? JI(j, Ie.current, oe, {
      duration: o.transitions.duration.standard
    }) : Ie.current[j] = oe;
  }, $e = (oe) => {
    let J = Ie.current[j];
    y ? J += oe : J += oe * (i ? -1 : 1), We(J);
  }, Qe = () => {
    const oe = Ie.current[N];
    let J = 0;
    const Ee = Array.from(ce.current.children);
    for (let Ce = 0; Ce < Ee.length; Ce += 1) {
      const ht = Ee[Ce];
      if (J + ht[N] > oe) {
        Ce === 0 && (J = oe);
        break;
      }
      J += ht[N];
    }
    return J;
  }, xe = () => {
    $e(-1 * Qe());
  }, se = () => {
    $e(Qe());
  }, [Se, {
    onChange: Ge,
    ...ae
  }] = ye("scrollbar", {
    className: te(D.scrollableX, D.hideScrollbar),
    elementType: p$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Pe,
    ownerState: O
  }), Ue = p.useCallback((oe) => {
    Ge?.(oe), _e({
      overflow: null,
      scrollbarWidth: oe
    });
  }, [Ge]), [qe, Pt] = ye("scrollButtons", {
    className: D.scrollButtons,
    elementType: s$,
    externalForwardedProps: Pe,
    ownerState: O,
    additionalProps: {
      orientation: g,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: B,
        endScrollButtonIcon: H
      }
    }
  }), Le = () => {
    const oe = {};
    oe.scrollbarSizeListener = I ? /* @__PURE__ */ c.jsx(Se, {
      ...ae,
      onChange: Ue
    }) : null;
    const Ee = I && (m === "auto" && (Q || K) || m === !0);
    return oe.scrollButtonStart = Ee ? /* @__PURE__ */ c.jsx(qe, {
      direction: i ? "right" : "left",
      onClick: xe,
      disabled: !Q,
      ...Pt
    }) : null, oe.scrollButtonEnd = Ee ? /* @__PURE__ */ c.jsx(qe, {
      direction: i ? "left" : "right",
      onClick: se,
      disabled: !K,
      ...Pt
    }) : null, oe;
  }, mt = Je((oe) => {
    const {
      tabsMeta: J,
      tabMeta: Ee
    } = tt();
    if (!(!Ee || !J)) {
      if (Ee[R] < J[R]) {
        const Ce = J[j] + (Ee[R] - J[R]);
        We(Ce, {
          animation: oe
        });
      } else if (Ee[$] > J[$]) {
        const Ce = J[j] + (Ee[$] - J[$]);
        We(Ce, {
          animation: oe
        });
      }
    }
  }), nt = Je(() => {
    I && m !== !1 && Re(!he);
  });
  p.useEffect(() => {
    const oe = Ju(() => {
      Ie.current && Ne();
    });
    let J;
    const Ee = (wn) => {
      wn.forEach((ln) => {
        ln.removedNodes.forEach((z) => {
          J?.unobserve(z);
        }), ln.addedNodes.forEach((z) => {
          J?.observe(z);
        });
      }), oe(), nt();
    }, Ce = Xn(Ie.current);
    Ce.addEventListener("resize", oe);
    let ht;
    return typeof ResizeObserver < "u" && (J = new ResizeObserver(oe), Array.from(ce.current.children).forEach((wn) => {
      J.observe(wn);
    })), typeof MutationObserver < "u" && (ht = new MutationObserver(Ee), ht.observe(ce.current, {
      childList: !0
    })), () => {
      oe.clear(), Ce.removeEventListener("resize", oe), ht?.disconnect(), J?.disconnect();
    };
  }, [Ne, nt]), p.useEffect(() => {
    const oe = Array.from(ce.current.children), J = oe.length;
    if (typeof IntersectionObserver < "u" && J > 0 && I && m !== !1) {
      const Ee = oe[0], Ce = oe[J - 1], ht = {
        root: Ie.current,
        threshold: 0.99
      }, wn = (Z) => {
        X(!Z[0].isIntersecting);
      }, ln = new IntersectionObserver(wn, ht);
      ln.observe(Ee);
      const z = (Z) => {
        ne(!Z[0].isIntersecting);
      }, _ = new IntersectionObserver(z, ht);
      return _.observe(Ce), () => {
        ln.disconnect(), _.disconnect();
      };
    }
  }, [I, m, he, h?.length]), p.useEffect(() => {
    G(!0);
  }, []), p.useEffect(() => {
    Ne();
  }), p.useEffect(() => {
    mt(Wg !== Y);
  }, [mt, Y]), p.useImperativeHandle(u, () => ({
    updateIndicator: Ne,
    updateScrollButtons: nt
  }), [Ne, nt]);
  const [Lr, ze] = ye("indicator", {
    className: D.indicator,
    elementType: f$,
    externalForwardedProps: Pe,
    ownerState: O,
    additionalProps: {
      style: Y
    }
  }), q = /* @__PURE__ */ c.jsx(Lr, {
    ...ze
  }), je = $x({
    activeItemId: me ? void 0 : ve,
    orientation: g,
    isRtl: i
  }), It = je.getContainerProps(), mr = p.Children.toArray(h).filter(p.isValidElement).map((oe, J) => {
    const Ee = oe.props.value === void 0 ? J : oe.props.value;
    return Ae.set(Ee, J), {
      child: oe,
      index: J,
      childValue: Ee
    };
  }).map(({
    child: oe,
    childValue: J
  }) => {
    const Ee = J === T;
    return /* @__PURE__ */ p.cloneElement(oe, {
      fullWidth: P === "fullWidth",
      indicator: Ee && !W && q,
      selected: Ee,
      selectionFollowsFocus: x,
      onChange: C,
      textColor: k,
      value: J
    });
  }), zn = Le(), [bn, hr] = ye("root", {
    ref: n,
    className: te(D.root, v),
    elementType: u$,
    externalForwardedProps: {
      ...Pe,
      ...A,
      component: f
    },
    ownerState: O
  }), [qn, Dn] = ye("scroller", {
    ref: Ie,
    className: D.scroller,
    elementType: c$,
    externalForwardedProps: Pe,
    ownerState: O,
    additionalProps: {
      style: {
        overflow: Me.overflow,
        [y ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: M ? void 0 : -Me.scrollbarWidth
      }
    }
  }), zr = pt(It.ref, ce), Ui = (oe) => {
    const J = ce.current;
    ir(yt(J))?.getAttribute("role") === "tab" && It.onKeyDown(oe);
  }, [_o, fo] = ye("list", {
    ref: zr,
    className: D.list,
    elementType: d$,
    externalForwardedProps: Pe,
    ownerState: O,
    getSlotProps: (oe) => ({
      ...oe,
      onBlur: (J) => {
        Po(J.currentTarget, J.relatedTarget) || le(!1), oe.onBlur?.(J);
      },
      onKeyDown: (J) => {
        Ui(J), oe.onKeyDown?.(J);
      },
      onFocus: (J) => {
        le(!0), It.onFocus(J), oe.onFocus?.(J);
      }
    })
  });
  return /* @__PURE__ */ c.jsxs(bn, {
    ...hr,
    children: [zn.scrollButtonStart, zn.scrollbarSizeListener, /* @__PURE__ */ c.jsxs(qn, {
      ...Dn,
      children: [/* @__PURE__ */ c.jsx(_o, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": g === "vertical" ? "vertical" : null,
        role: "tablist",
        ...fo,
        children: /* @__PURE__ */ c.jsx(Zp.Provider, {
          value: je,
          children: mr
        })
      }), W && q]
    }), zn.scrollButtonEnd]
  });
});
function h$(e) {
  return de("MuiTextField", e);
}
ue("MuiTextField", ["root"]);
const g$ = {
  standard: Xp,
  filled: Gp,
  outlined: Jp
}, y$ = (e) => {
  const {
    classes: t
  } = e;
  return fe({
    root: ["root"]
  }, h$, t);
}, v$ = U(bR, {
  name: "MuiTextField",
  slot: "Root"
})({}), Un = /* @__PURE__ */ p.forwardRef(function(t, n) {
  const r = pe({
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
    error: h = !1,
    fullWidth: v = !1,
    helperText: f,
    id: S,
    inputRef: b,
    label: C,
    maxRows: g,
    minRows: m,
    multiline: x = !1,
    name: w,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: P,
    required: M = !1,
    rows: A,
    select: I = !1,
    slots: y = {},
    slotProps: j = {},
    type: R,
    value: $,
    variant: N = "outlined",
    ...L
  } = r, O = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: h,
    fullWidth: v,
    multiline: x,
    required: M,
    select: I,
    variant: N
  }, D = y$(O), B = Or(S), H = f && B ? `${B}-helper-text` : void 0, W = C && B ? `${B}-label` : void 0, G = g$[N], Y = {
    slots: y,
    slotProps: j
  }, [re, Q] = ye("select", {
    elementType: Ps,
    externalForwardedProps: Y,
    ownerState: O
  }), X = I && Q.native, K = {}, ne = Y.slotProps.inputLabel;
  N === "outlined" && (ne && typeof ne.shrink < "u" && (K.notched = ne.shrink), K.label = C), I && (X || (K.id = void 0), K["aria-describedby"] = void 0);
  const [he, Re] = ye("root", {
    elementType: v$,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Y,
      ...L
    },
    ownerState: O,
    className: te(D.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: h,
      fullWidth: v,
      required: M,
      color: a,
      variant: N
    }
  }), [ve, me] = ye("input", {
    elementType: G,
    externalForwardedProps: Y,
    additionalProps: K,
    ownerState: O
  }), [le, Me] = ye("inputLabel", {
    elementType: WR,
    externalForwardedProps: Y,
    ownerState: O
  }), [_e, Ae] = ye("htmlInput", {
    elementType: "input",
    externalForwardedProps: Y,
    ownerState: O
  }), [Ie, ce] = ye("formHelperText", {
    elementType: kR,
    externalForwardedProps: Y,
    ownerState: O
  }), Pe = /* @__PURE__ */ c.jsx(ve, {
    "aria-describedby": H,
    autoComplete: o,
    autoFocus: i,
    defaultValue: u,
    fullWidth: v,
    multiline: x,
    name: w,
    rows: A,
    maxRows: g,
    minRows: m,
    type: R,
    value: $,
    id: B,
    inputRef: b,
    onBlur: E,
    onChange: k,
    onFocus: T,
    placeholder: P,
    inputProps: Ae,
    slots: {
      input: y.htmlInput ? _e : void 0
    },
    ...me
  });
  return /* @__PURE__ */ c.jsxs(he, {
    ...Re,
    children: [C != null && C !== "" && /* @__PURE__ */ c.jsx(le, {
      htmlFor: I && !X ? void 0 : B,
      id: W,
      ...I && !X && {
        component: "div"
      },
      ...Me,
      children: C
    }), I ? /* @__PURE__ */ c.jsx(re, {
      "aria-describedby": H,
      id: B,
      labelId: W,
      value: $,
      input: Pe,
      ...Q,
      children: s
    }) : Pe, f && /* @__PURE__ */ c.jsx(Ie, {
      id: H,
      ...ce,
      children: f
    })]
  });
}), Ql = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Gl = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), Xc = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), x$ = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
})), S$ = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M21 10h-8.35C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H13l2 2 2-2 2 2 4-4.04zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3"
})), b$ = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
})), qc = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), Zc = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), Ug = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
})), w$ = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"
})), C$ = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9z"
})), k$ = bt(/* @__PURE__ */ c.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), Nt = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', is = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e"
};
function pi({ children: e, sx: t }) {
  return /* @__PURE__ */ c.jsx(
    it,
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
function yo({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ c.jsxs(cn, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ c.jsxs(
      we,
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
          typeof e == "string" ? /* @__PURE__ */ c.jsx(pi, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ c.jsx($t, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function Sr({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ c.jsxs($t, { sx: n, children: [
    /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ c.jsx(
        it,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ c.jsx(it, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function vt({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ c.jsxs($t, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ c.jsx(pi, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ c.jsx(
      it,
      {
        sx: {
          fontFamily: n ? Nt : void 0,
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
function E$({ ctx: e }) {
  const t = p.useMemo(() => Zu(e.theme ?? {}), [e.theme]);
  return /* @__PURE__ */ c.jsx(M2, { theme: t, children: /* @__PURE__ */ c.jsx(T$, { ctx: e }) });
}
function T$({ ctx: e }) {
  const [t, n] = p.useState("mailboxes"), [r, o] = p.useState(null), [i, s] = p.useState(!1), [l, a] = p.useState([]), [u, d] = p.useState([]), [h, v] = p.useState([]), [f, S] = p.useState([]), [b, C] = p.useState([]), [g, m] = p.useState(50), [x, w] = p.useState(!1), [E, k] = p.useState(""), [T, P] = p.useState(null), [M, A] = p.useState(!1), [I, y] = p.useState(""), [j, R] = p.useState(""), [$, N] = p.useState(""), [L, O] = p.useState(!1), [D, B] = p.useState(""), [H, W] = p.useState(!1), [G, Y] = p.useState(""), [re, Q] = p.useState(""), [X, K] = p.useState(""), [ne, he] = p.useState(1024), [Re, ve] = p.useState(!1), [me, le] = p.useState(null), [Me, _e] = p.useState(""), [Ae, Ie] = p.useState(!1), [ce, Pe] = p.useState(null), [tt, Ne] = p.useState(1024), [We, $e] = p.useState(!1), [Qe, xe] = p.useState(""), [se, Se] = p.useState(""), [Ge, ae] = p.useState(!1), [Ue, qe] = p.useState(null), [Pt, Le] = p.useState(null), [mt, nt] = p.useState(!1), [Lr, ze] = p.useState(null), q = p.useCallback(
    async (z, _ = {}) => {
      const Z = await e.api(z, _);
      if (!Z.ok) {
        const Te = await Z.json().catch(() => ({ detail: Z.statusText }));
        throw new Error(Te.message || Te.detail || `Request failed with status ${Z.status}`);
      }
      return Z.json();
    },
    [e]
  ), je = p.useCallback(async () => {
    try {
      s(!0);
      const z = await q("/status");
      o(z);
    } catch {
      o(null);
    } finally {
      s(!1);
    }
  }, [q]), It = p.useCallback(async () => {
    try {
      const z = await q("/domains");
      z && Array.isArray(z.domains) && (a(z.domains), !E && z.domains.length > 0 && k(z.domains[0].domain));
    } catch {
      a([]);
    }
  }, [q, E]), pr = p.useCallback(async () => {
    try {
      const z = await q("/mailboxes");
      z && Array.isArray(z.mailboxes) && d(z.mailboxes);
    } catch {
      d([]);
    }
  }, [q]), mr = p.useCallback(async () => {
    try {
      const z = await q("/aliases");
      z && Array.isArray(z.aliases) && v(z.aliases);
    } catch {
      v([]);
    }
  }, [q]), zn = p.useCallback(async () => {
    try {
      const z = await q("/queue");
      z && Array.isArray(z.messages) && S(z.messages);
    } catch {
      S([]);
    }
  }, [q]), bn = p.useCallback(async () => {
    w(!0);
    try {
      const z = await q(`/logs?lines=${g}`);
      z && Array.isArray(z.lines) && C(z.lines);
    } catch (z) {
      ze(z.message);
    } finally {
      w(!1);
    }
  }, [q, g]), hr = p.useCallback(
    async (z) => {
      if (z) {
        A(!0);
        try {
          const _ = await q(`/domains/${encodeURIComponent(z)}/dkim`);
          P(_);
        } catch (_) {
          ze(`Error loading DKIM: ${_.message}`), P(null);
        } finally {
          A(!1);
        }
      }
    },
    [q]
  ), qn = p.useCallback(async () => {
    await Promise.all([je(), It(), pr(), mr(), zn()]);
  }, [je, It, pr, mr, zn]);
  p.useEffect(() => {
    qn();
  }, [qn]), p.useEffect(() => {
    t === "dns" && E ? hr(E) : t === "logs" && (bn(), zn());
  }, [t, E, hr, bn, zn]);
  const Dn = (z, _) => {
    navigator.clipboard.writeText(z), ze(`Copied ${_} to clipboard!`);
  }, zr = async () => {
    if (!D.trim()) {
      ze("Domain name is required.");
      return;
    }
    nt(!0);
    try {
      await q("/domains", {
        method: "POST",
        body: JSON.stringify({ domain: D.trim() })
      }), ze(`Domain ${D} added with DKIM keys generated.`), O(!1), B(""), await Promise.all([It(), je()]);
    } catch (z) {
      ze(`Failed to add domain: ${z.message}`);
    } finally {
      nt(!1);
    }
  }, Ui = async () => {
    if (!G.trim() || !re.trim()) {
      ze("Username and Domain are required.");
      return;
    }
    if (!X) {
      ze("Password is required.");
      return;
    }
    const z = `${G.trim()}@${re.trim()}`;
    nt(!0);
    try {
      await q("/mailboxes", {
        method: "POST",
        body: JSON.stringify({
          email: z,
          password: X,
          quota_mb: Number(ne) || 1024
        })
      }), ze(`Mailbox ${z} created successfully.`), W(!1), Y(""), K(""), await Promise.all([pr(), je()]);
    } catch (_) {
      ze(`Failed to create mailbox: ${_.message}`);
    } finally {
      nt(!1);
    }
  }, _o = async () => {
    if (!(!me || !Me)) {
      nt(!0);
      try {
        await q(`/mailboxes/${encodeURIComponent(me)}/password`, {
          method: "PUT",
          body: JSON.stringify({ password: Me })
        }), ze(`Password updated for ${me}.`), ve(!1), le(null), _e("");
      } catch (z) {
        ze(`Failed to update password: ${z.message}`);
      } finally {
        nt(!1);
      }
    }
  }, fo = async () => {
    if (ce) {
      nt(!0);
      try {
        await q(`/mailboxes/${encodeURIComponent(ce)}/quota`, {
          method: "PUT",
          body: JSON.stringify({ quota_mb: Number(tt) })
        }), ze(`Quota updated to ${tt} MB for ${ce}.`), Ie(!1), Pe(null), await pr();
      } catch (z) {
        ze(`Failed to update quota: ${z.message}`);
      } finally {
        nt(!1);
      }
    }
  }, oe = async () => {
    if (!Qe.trim() || !se.trim()) {
      ze("Source and Destination addresses are required.");
      return;
    }
    nt(!0);
    try {
      await q("/aliases", {
        method: "POST",
        body: JSON.stringify({
          source: Qe.trim(),
          destination: se.trim()
        })
      }), ze(`Alias ${Qe} -> ${se} created.`), $e(!1), xe(""), Se(""), await Promise.all([mr(), je()]);
    } catch (z) {
      ze(`Failed to create alias: ${z.message}`);
    } finally {
      nt(!1);
    }
  }, J = async () => {
    if (!(!Pt || !Ue)) {
      nt(!0);
      try {
        Ue === "domain" ? (await q(`/domains/${encodeURIComponent(Pt)}`, { method: "DELETE" }), ze(`Domain ${Pt} deleted.`), await Promise.all([It(), pr(), mr(), je()])) : Ue === "mailbox" ? (await q(`/mailboxes/${encodeURIComponent(Pt)}`, { method: "DELETE" }), ze(`Mailbox ${Pt} deleted.`), await Promise.all([pr(), je()])) : Ue === "alias" && (await q(`/aliases/${encodeURIComponent(Pt)}`, { method: "DELETE" }), ze(`Alias ${Pt} deleted.`), await Promise.all([mr(), je()])), ae(!1), Le(null), qe(null);
      } catch (z) {
        ze(`Delete failed: ${z.message}`);
      } finally {
        nt(!1);
      }
    }
  }, Ee = async () => {
    nt(!0);
    try {
      await q("/queue/flush", { method: "POST" }), ze("Postfix mail delivery queue flushed."), await Promise.all([zn(), je()]);
    } catch (z) {
      ze(`Failed to flush queue: ${z.message}`);
    } finally {
      nt(!1);
    }
  }, Ce = !!r?.active, ht = p.useMemo(() => I ? u.filter(
    (z) => z.email.toLowerCase().includes(I.toLowerCase()) || z.domain.toLowerCase().includes(I.toLowerCase())
  ) : u, [u, I]), wn = p.useMemo(() => j ? l.filter((z) => z.domain.toLowerCase().includes(j.toLowerCase())) : l, [l, j]), ln = p.useMemo(() => $ ? h.filter(
    (z) => z.source.toLowerCase().includes($.toLowerCase()) || z.destination.toLowerCase().includes($.toLowerCase())
  ) : h, [h, $]);
  return /* @__PURE__ */ c.jsxs($t, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ c.jsxs(
      we,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 1.5,
        sx: { justifyContent: "space-between", alignItems: { sm: "center" } },
        children: [
          /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
            /* @__PURE__ */ c.jsx(
              Yc,
              {
                size: "small",
                label: Ce ? "RUNNING" : "ACTIVE",
                color: Ce ? "success" : "default",
                sx: { fontWeight: 700, fontSize: "0.75rem" }
              }
            ),
            /* @__PURE__ */ c.jsx(it, { variant: "body2", sx: { color: "text.secondary" }, children: "Postfix / Dovecot • 100% Isolated in /opt/hostpanel" })
          ] }),
          /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexWrap: "wrap", gap: 0.75 }, children: [
            /* @__PURE__ */ c.jsx(xr, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              br,
              {
                size: "small",
                onClick: qn,
                disabled: i,
                sx: { border: "1px solid", borderColor: "divider" },
                children: i ? /* @__PURE__ */ c.jsx(di, { size: 16, color: "inherit" }) : /* @__PURE__ */ c.jsx(qc, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ c.jsx(xr, { title: "Flush Mail Queue", arrow: !0, children: /* @__PURE__ */ c.jsx("span", { children: /* @__PURE__ */ c.jsx(
              br,
              {
                size: "small",
                color: "info",
                onClick: Ee,
                disabled: mt,
                sx: { border: "1px solid", borderColor: "divider" },
                children: mt ? /* @__PURE__ */ c.jsx(di, { size: 16, color: "inherit" }) : /* @__PURE__ */ c.jsx(Ug, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ c.jsx(
              rt,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(Ql, {}),
                onClick: () => O(!0),
                sx: { whiteSpace: "nowrap" },
                children: "Add Domain"
              }
            ),
            /* @__PURE__ */ c.jsx(
              rt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(b$, {}),
                onClick: () => {
                  l.length > 0 && !re && Q(l[0].domain), W(!0);
                },
                sx: { ml: 0.5, whiteSpace: "nowrap" },
                children: "New Mailbox"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", sm: "row" }, spacing: 2, sx: { flexWrap: "wrap" }, children: [
      /* @__PURE__ */ c.jsx(Ll, { variant: "outlined", sx: { flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }, children: /* @__PURE__ */ c.jsxs(zl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(pi, { children: "MAIL SERVER STATUS" }),
        /* @__PURE__ */ c.jsxs(it, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          r?.postfix || "Online",
          " / ",
          r?.dovecot || "Running"
        ] }),
        /* @__PURE__ */ c.jsx(it, { variant: "caption", sx: { color: "text.secondary" }, children: "SMTP 25/587 • IMAP 993" })
      ] }) }),
      /* @__PURE__ */ c.jsx(Ll, { variant: "outlined", sx: { flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }, children: /* @__PURE__ */ c.jsxs(zl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(pi, { children: "ACTIVE DOMAINS" }),
        /* @__PURE__ */ c.jsxs(it, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          l.length,
          " Domain",
          l.length === 1 ? "" : "s"
        ] }),
        /* @__PURE__ */ c.jsx(it, { variant: "caption", sx: { color: "text.secondary" }, children: "DKIM Keys Generated & Managed" })
      ] }) }),
      /* @__PURE__ */ c.jsx(Ll, { variant: "outlined", sx: { flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }, children: /* @__PURE__ */ c.jsxs(zl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(pi, { children: "TOTAL MAILBOXES" }),
        /* @__PURE__ */ c.jsxs(it, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          u.length,
          " Account",
          u.length === 1 ? "" : "s"
        ] }),
        /* @__PURE__ */ c.jsxs(it, { variant: "caption", sx: { color: "text.secondary" }, children: [
          u.reduce((z, _) => z + (_.used_mb || 0), 0).toFixed(1),
          " MB Stored"
        ] })
      ] }) }),
      /* @__PURE__ */ c.jsx(Ll, { variant: "outlined", sx: { flex: { xs: "1 1 100%", sm: "1 1 calc(50% - 16px)", md: 1 } }, children: /* @__PURE__ */ c.jsxs(zl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ c.jsx(pi, { children: "QUEUE COUNT" }),
        /* @__PURE__ */ c.jsxs(it, { variant: "h6", sx: { fontWeight: 700, mt: 0.5 }, children: [
          r?.queue_count ?? f.length,
          " Queued"
        ] }),
        /* @__PURE__ */ c.jsx(it, { variant: "caption", sx: { color: "text.secondary" }, children: "Postfix Mail Spool" })
      ] }) })
    ] }),
    /* @__PURE__ */ c.jsxs(cn, { sx: { border: "1px solid", borderColor: "divider" }, children: [
      /* @__PURE__ */ c.jsxs(
        m$,
        {
          value: t,
          onChange: (z, _) => n(_),
          variant: "scrollable",
          scrollButtons: "auto",
          allowScrollButtonsMobile: !0,
          sx: {
            borderBottom: "1px solid",
            borderColor: "divider",
            px: 1,
            "& .MuiTab-root": { textTransform: "none", fontWeight: 600, minHeight: 44, fontSize: "0.8125rem" }
          },
          children: [
            /* @__PURE__ */ c.jsx(Zo, { label: `Mailboxes (${u.length})`, value: "mailboxes" }),
            /* @__PURE__ */ c.jsx(Zo, { label: "DNS & Deliverability", value: "dns" }),
            /* @__PURE__ */ c.jsx(Zo, { label: `Aliases & Forwarders (${h.length})`, value: "aliases" }),
            /* @__PURE__ */ c.jsx(Zo, { label: `Mail Domains (${l.length})`, value: "domains" }),
            /* @__PURE__ */ c.jsx(Zo, { label: "Live Logs & Queue", value: "logs" }),
            /* @__PURE__ */ c.jsx(Zo, { label: "Service & Isolation", value: "service" })
          ]
        }
      ),
      /* @__PURE__ */ c.jsxs($t, { sx: { p: 2.25 }, children: [
        t === "mailboxes" && /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
          /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", sm: "row" }, spacing: 1.5, sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ c.jsx(
              Un,
              {
                size: "small",
                placeholder: "Search mailboxes...",
                value: I,
                onChange: (z) => y(z.target.value),
                slotProps: {
                  input: {
                    startAdornment: /* @__PURE__ */ c.jsx(Qc, { position: "start", children: /* @__PURE__ */ c.jsx(Zc, { sx: { fontSize: 18, color: "text.secondary" } }) })
                  }
                },
                sx: { width: { xs: "100%", sm: 280 } }
              }
            ),
            /* @__PURE__ */ c.jsx(
              rt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(Ql, {}),
                onClick: () => {
                  l.length > 0 && !re && Q(l[0].domain), W(!0);
                },
                children: "New Mailbox"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(Kl, { component: cn, variant: "outlined", sx: { overflowX: "auto", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ c.jsxs(Hl, { size: "small", sx: { minWidth: 680 }, children: [
            /* @__PURE__ */ c.jsx(Yl, { children: /* @__PURE__ */ c.jsxs(Wn, { children: [
              /* @__PURE__ */ c.jsx(be, { children: "Email Address" }),
              /* @__PURE__ */ c.jsx(be, { children: "Domain" }),
              /* @__PURE__ */ c.jsx(be, { sx: { minWidth: 200 }, children: "Quota Usage" }),
              /* @__PURE__ */ c.jsx(be, { children: "Status" }),
              /* @__PURE__ */ c.jsx(be, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ c.jsx(Vl, { children: ht.length === 0 ? /* @__PURE__ */ c.jsx(Wn, { children: /* @__PURE__ */ c.jsx(be, { colSpan: 5, align: "center", sx: { py: 4, color: "text.secondary" }, children: 'No mailboxes configured. Click "New Mailbox" to create one.' }) }) : ht.map((z) => {
              const _ = z.quota_mb > 0 ? Math.min(100, Math.round(z.used_mb / z.quota_mb * 100)) : 0;
              return /* @__PURE__ */ c.jsxs(Wn, { hover: !0, children: [
                /* @__PURE__ */ c.jsx(be, { sx: { fontFamily: Nt, fontWeight: 600 }, children: z.email }),
                /* @__PURE__ */ c.jsx(be, { sx: { color: "text.secondary" }, children: z.domain }),
                /* @__PURE__ */ c.jsx(be, { children: /* @__PURE__ */ c.jsxs($t, { sx: { display: "flex", flexDirection: "column", gap: 0.5 }, children: [
                  /* @__PURE__ */ c.jsxs(we, { direction: "row", sx: { justifyContent: "space-between" }, children: [
                    /* @__PURE__ */ c.jsxs(it, { variant: "caption", sx: { fontFamily: Nt, color: "text.secondary" }, children: [
                      z.used_mb,
                      " MB / ",
                      z.quota_mb,
                      " MB"
                    ] }),
                    /* @__PURE__ */ c.jsxs(it, { variant: "caption", sx: { fontFamily: Nt, fontWeight: 600 }, children: [
                      _,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ c.jsx(
                    JR,
                    {
                      variant: "determinate",
                      value: _,
                      color: _ > 90 ? "error" : _ > 75 ? "warning" : "primary",
                      sx: { height: 6, borderRadius: 1 }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ c.jsx(be, { children: /* @__PURE__ */ c.jsx(
                  Yc,
                  {
                    label: z.status || "active",
                    size: "small",
                    color: "success",
                    sx: { textTransform: "capitalize" }
                  }
                ) }),
                /* @__PURE__ */ c.jsx(be, { align: "right", children: /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                  /* @__PURE__ */ c.jsx(xr, { title: "Change Password", children: /* @__PURE__ */ c.jsx(
                    br,
                    {
                      size: "small",
                      onClick: () => {
                        le(z.email), ve(!0);
                      },
                      children: /* @__PURE__ */ c.jsx(S$, { sx: { fontSize: 16 } })
                    }
                  ) }),
                  /* @__PURE__ */ c.jsx(xr, { title: "Edit Quota", children: /* @__PURE__ */ c.jsx(
                    br,
                    {
                      size: "small",
                      onClick: () => {
                        Pe(z.email), Ne(z.quota_mb), Ie(!0);
                      },
                      children: /* @__PURE__ */ c.jsx(w$, { sx: { fontSize: 16 } })
                    }
                  ) }),
                  /* @__PURE__ */ c.jsx(xr, { title: "Delete Mailbox", children: /* @__PURE__ */ c.jsx(
                    br,
                    {
                      size: "small",
                      color: "error",
                      onClick: () => {
                        Le(z.email), qe("mailbox"), ae(!0);
                      },
                      children: /* @__PURE__ */ c.jsx(Xc, { sx: { fontSize: 16 } })
                    }
                  ) })
                ] }) })
              ] }, z.email);
            }) })
          ] }) })
        ] }),
        t === "dns" && /* @__PURE__ */ c.jsxs(we, { spacing: 2.5, children: [
          /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", sm: "row" }, spacing: 2, sx: { alignItems: { sm: "center" } }, children: [
            /* @__PURE__ */ c.jsx(it, { variant: "subtitle2", sx: { fontWeight: 600 }, children: "Select Mail Domain:" }),
            /* @__PURE__ */ c.jsx(
              Ps,
              {
                size: "small",
                value: E,
                onChange: (z) => {
                  k(z.target.value), hr(z.target.value);
                },
                sx: { minWidth: 220 },
                children: l.map((z) => /* @__PURE__ */ c.jsx(rs, { value: z.domain, children: z.domain }, z.domain))
              }
            ),
            /* @__PURE__ */ c.jsx(
              rt,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(qc, {}),
                onClick: () => hr(E),
                disabled: M || !E,
                children: "Reload DNS Records"
              }
            )
          ] }),
          M ? /* @__PURE__ */ c.jsx($t, { sx: { display: "grid", placeItems: "center", py: 6 }, children: /* @__PURE__ */ c.jsx(di, { size: 28 }) }) : E ? /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
            /* @__PURE__ */ c.jsxs(rg, { severity: "success", icon: /* @__PURE__ */ c.jsx(C$, {}), children: [
              "DNS records for ",
              /* @__PURE__ */ c.jsx("strong", { children: E }),
              ". Add these records to your authoritative DNS zone to ensure 100% email deliverability and avoid spam folders."
            ] }),
            /* @__PURE__ */ c.jsx(yo, { label: "1. MX RECORD (MAIL EXCHANGE)", children: /* @__PURE__ */ c.jsx(we, { spacing: 1.5, children: /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
              /* @__PURE__ */ c.jsx(vt, { label: "HOST / NAME", value: "@" }),
              /* @__PURE__ */ c.jsx(vt, { label: "RECORD TYPE", value: "MX" }),
              /* @__PURE__ */ c.jsx(vt, { label: "PRIORITY", value: "10" }),
              /* @__PURE__ */ c.jsx($t, { sx: { flex: 1 }, children: /* @__PURE__ */ c.jsx(vt, { label: "VALUE / TARGET", value: `mail.${E}.` }) }),
              /* @__PURE__ */ c.jsx($t, { sx: { display: "flex", alignItems: "flex-end" }, children: /* @__PURE__ */ c.jsx(
                rt,
                {
                  size: "small",
                  variant: "outlined",
                  startIcon: /* @__PURE__ */ c.jsx(Gl, {}),
                  onClick: () => Dn(`10 mail.${E}.`, "MX Record"),
                  children: "Copy Value"
                }
              ) })
            ] }) }) }),
            /* @__PURE__ */ c.jsx(yo, { label: "2. SPF RECORD (SENDER POLICY FRAMEWORK)", children: /* @__PURE__ */ c.jsx(we, { spacing: 1.5, children: /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
              /* @__PURE__ */ c.jsx(vt, { label: "HOST / NAME", value: "@" }),
              /* @__PURE__ */ c.jsx(vt, { label: "RECORD TYPE", value: "TXT" }),
              /* @__PURE__ */ c.jsx($t, { sx: { flex: 1 }, children: /* @__PURE__ */ c.jsx(vt, { label: "VALUE", value: "v=spf1 mx a ~all" }) }),
              /* @__PURE__ */ c.jsx($t, { sx: { display: "flex", alignItems: "flex-end" }, children: /* @__PURE__ */ c.jsx(
                rt,
                {
                  size: "small",
                  variant: "outlined",
                  startIcon: /* @__PURE__ */ c.jsx(Gl, {}),
                  onClick: () => Dn("v=spf1 mx a ~all", "SPF Record"),
                  children: "Copy Value"
                }
              ) })
            ] }) }) }),
            /* @__PURE__ */ c.jsx(yo, { label: "3. DKIM RECORD (DOMAINKEYS IDENTIFIED MAIL)", children: /* @__PURE__ */ c.jsxs(we, { spacing: 1.5, children: [
              /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
                /* @__PURE__ */ c.jsx(vt, { label: "HOST / NAME", value: `default._domainkey.${E}` }),
                /* @__PURE__ */ c.jsx(vt, { label: "RECORD TYPE", value: "TXT" }),
                /* @__PURE__ */ c.jsx($t, { sx: { display: "flex", alignItems: "flex-end" }, children: /* @__PURE__ */ c.jsx(
                  rt,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ c.jsx(Gl, {}),
                    onClick: () => Dn(
                      T?.dns_records?.dkim || `v=DKIM1; k=rsa; p=${T?.public_key}`,
                      "DKIM Record"
                    ),
                    children: "Copy DKIM Value"
                  }
                ) })
              ] }),
              /* @__PURE__ */ c.jsx(
                $t,
                {
                  sx: {
                    p: 1.5,
                    bgcolor: is.bg,
                    color: is.fg,
                    borderRadius: 1,
                    fontFamily: Nt,
                    fontSize: "0.75rem",
                    wordBreak: "break-all",
                    whiteSpace: "pre-wrap"
                  },
                  children: T?.dns_records?.dkim || `v=DKIM1; k=rsa; p=${T?.public_key || "..."}`
                }
              )
            ] }) }),
            /* @__PURE__ */ c.jsx(yo, { label: "4. DMARC RECORD", children: /* @__PURE__ */ c.jsx(we, { spacing: 1.5, children: /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", md: "row" }, spacing: 2, children: [
              /* @__PURE__ */ c.jsx(vt, { label: "HOST / NAME", value: `_dmarc.${E}` }),
              /* @__PURE__ */ c.jsx(vt, { label: "RECORD TYPE", value: "TXT" }),
              /* @__PURE__ */ c.jsx($t, { sx: { flex: 1 }, children: /* @__PURE__ */ c.jsx(
                vt,
                {
                  label: "VALUE",
                  value: T?.dns_records?.dmarc || `v=DMARC1; p=quarantine; rua=mailto:postmaster@${E}`
                }
              ) }),
              /* @__PURE__ */ c.jsx($t, { sx: { display: "flex", alignItems: "flex-end" }, children: /* @__PURE__ */ c.jsx(
                rt,
                {
                  size: "small",
                  variant: "outlined",
                  startIcon: /* @__PURE__ */ c.jsx(Gl, {}),
                  onClick: () => Dn(
                    T?.dns_records?.dmarc || `v=DMARC1; p=quarantine; rua=mailto:postmaster@${E}`,
                    "DMARC Record"
                  ),
                  children: "Copy Value"
                }
              ) })
            ] }) }) })
          ] }) : /* @__PURE__ */ c.jsx(rg, { severity: "info", children: "Add or select a mail domain above to view its DNS records." })
        ] }),
        t === "aliases" && /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
          /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", sm: "row" }, spacing: 1.5, sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ c.jsx(
              Un,
              {
                size: "small",
                placeholder: "Search aliases...",
                value: $,
                onChange: (z) => N(z.target.value),
                slotProps: {
                  input: {
                    startAdornment: /* @__PURE__ */ c.jsx(Qc, { position: "start", children: /* @__PURE__ */ c.jsx(Zc, { sx: { fontSize: 18, color: "text.secondary" } }) })
                  }
                },
                sx: { width: { xs: "100%", sm: 280 } }
              }
            ),
            /* @__PURE__ */ c.jsx(
              rt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(Ql, {}),
                onClick: () => $e(!0),
                children: "New Alias / Forwarder"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(Kl, { component: cn, variant: "outlined", sx: { overflowX: "auto", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ c.jsxs(Hl, { size: "small", sx: { minWidth: 680 }, children: [
            /* @__PURE__ */ c.jsx(Yl, { children: /* @__PURE__ */ c.jsxs(Wn, { children: [
              /* @__PURE__ */ c.jsx(be, { children: "Source Address" }),
              /* @__PURE__ */ c.jsx(be, { children: "Domain" }),
              /* @__PURE__ */ c.jsx(be, { children: "Destination Addresses (Forward To)" }),
              /* @__PURE__ */ c.jsx(be, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ c.jsx(Vl, { children: ln.length === 0 ? /* @__PURE__ */ c.jsx(Wn, { children: /* @__PURE__ */ c.jsx(be, { colSpan: 4, align: "center", sx: { py: 4, color: "text.secondary" }, children: "No mail aliases configured." }) }) : ln.map((z) => /* @__PURE__ */ c.jsxs(Wn, { hover: !0, children: [
              /* @__PURE__ */ c.jsx(be, { sx: { fontFamily: Nt, fontWeight: 600 }, children: z.source }),
              /* @__PURE__ */ c.jsx(be, { sx: { color: "text.secondary" }, children: z.domain }),
              /* @__PURE__ */ c.jsx(be, { sx: { fontFamily: Nt, fontSize: "0.75rem" }, children: z.destination }),
              /* @__PURE__ */ c.jsx(be, { align: "right", children: /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ c.jsx(xr, { title: "Edit Destinations", children: /* @__PURE__ */ c.jsx(
                  br,
                  {
                    size: "small",
                    onClick: () => {
                      xe(z.source), Se(z.destination), $e(!0);
                    },
                    children: /* @__PURE__ */ c.jsx(x$, { sx: { fontSize: 16 } })
                  }
                ) }),
                /* @__PURE__ */ c.jsx(xr, { title: "Delete Alias", children: /* @__PURE__ */ c.jsx(
                  br,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => {
                      Le(z.source), qe("alias"), ae(!0);
                    },
                    children: /* @__PURE__ */ c.jsx(Xc, { sx: { fontSize: 16 } })
                  }
                ) })
              ] }) })
            ] }, z.source)) })
          ] }) })
        ] }),
        t === "domains" && /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
          /* @__PURE__ */ c.jsxs(we, { direction: { xs: "column", sm: "row" }, spacing: 1.5, sx: { justifyContent: "space-between" }, children: [
            /* @__PURE__ */ c.jsx(
              Un,
              {
                size: "small",
                placeholder: "Search domains...",
                value: j,
                onChange: (z) => R(z.target.value),
                slotProps: {
                  input: {
                    startAdornment: /* @__PURE__ */ c.jsx(Qc, { position: "start", children: /* @__PURE__ */ c.jsx(Zc, { sx: { fontSize: 18, color: "text.secondary" } }) })
                  }
                },
                sx: { width: { xs: "100%", sm: 280 } }
              }
            ),
            /* @__PURE__ */ c.jsx(
              rt,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ c.jsx(Ql, {}),
                onClick: () => O(!0),
                children: "Add Mail Domain"
              }
            )
          ] }),
          /* @__PURE__ */ c.jsx(Kl, { component: cn, variant: "outlined", sx: { overflowX: "auto", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ c.jsxs(Hl, { size: "small", sx: { minWidth: 680 }, children: [
            /* @__PURE__ */ c.jsx(Yl, { children: /* @__PURE__ */ c.jsxs(Wn, { children: [
              /* @__PURE__ */ c.jsx(be, { children: "Domain Name" }),
              /* @__PURE__ */ c.jsx(be, { children: "DKIM Status" }),
              /* @__PURE__ */ c.jsx(be, { children: "Mailboxes" }),
              /* @__PURE__ */ c.jsx(be, { align: "right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ c.jsx(Vl, { children: wn.length === 0 ? /* @__PURE__ */ c.jsx(Wn, { children: /* @__PURE__ */ c.jsx(be, { colSpan: 4, align: "center", sx: { py: 4, color: "text.secondary" }, children: 'No mail domains configured. Click "Add Mail Domain" to start.' }) }) : wn.map((z) => /* @__PURE__ */ c.jsxs(Wn, { hover: !0, children: [
              /* @__PURE__ */ c.jsx(be, { sx: { fontFamily: Nt, fontWeight: 600 }, children: z.domain }),
              /* @__PURE__ */ c.jsx(be, { children: /* @__PURE__ */ c.jsx(
                Yc,
                {
                  icon: /* @__PURE__ */ c.jsx(k$, { sx: { fontSize: "12px !important" } }),
                  label: z.dkim_enabled ? "DKIM Ready" : "Configured",
                  color: z.dkim_enabled ? "success" : "default",
                  size: "small"
                }
              ) }),
              /* @__PURE__ */ c.jsxs(be, { children: [
                z.mailboxes_count ?? u.filter((_) => _.domain === z.domain).length,
                " accounts"
              ] }),
              /* @__PURE__ */ c.jsx(be, { align: "right", children: /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ c.jsx(xr, { title: "View Deliverability & DKIM DNS Records", children: /* @__PURE__ */ c.jsx(
                  rt,
                  {
                    size: "small",
                    variant: "outlined",
                    onClick: () => {
                      k(z.domain), n("dns");
                    },
                    sx: { mr: 1, textTransform: "none", fontSize: "0.75rem", py: 0.25 },
                    children: "DNS Records"
                  }
                ) }),
                /* @__PURE__ */ c.jsx(xr, { title: "Delete Domain", children: /* @__PURE__ */ c.jsx(
                  br,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => {
                      Le(z.domain), qe("domain"), ae(!0);
                    },
                    children: /* @__PURE__ */ c.jsx(Xc, { sx: { fontSize: 16 } })
                  }
                ) })
              ] }) })
            ] }, z.domain)) })
          ] }) })
        ] }),
        t === "logs" && /* @__PURE__ */ c.jsxs(we, { spacing: 3, children: [
          /* @__PURE__ */ c.jsx(
            yo,
            {
              label: `ACTIVE MAIL QUEUE (${f.length} MESSAGES)`,
              action: /* @__PURE__ */ c.jsx(
                rt,
                {
                  size: "small",
                  variant: "outlined",
                  startIcon: /* @__PURE__ */ c.jsx(Ug, {}),
                  onClick: Ee,
                  disabled: mt,
                  children: "Flush Queue"
                }
              ),
              children: f.length === 0 ? /* @__PURE__ */ c.jsx(it, { variant: "body2", sx: { color: "text.secondary", py: 1 }, children: "Mail queue is clean. No outbound or delayed messages pending." }) : /* @__PURE__ */ c.jsx(Kl, { component: cn, variant: "outlined", sx: { overflowX: "auto", WebkitOverflowScrolling: "touch" }, children: /* @__PURE__ */ c.jsxs(Hl, { size: "small", sx: { minWidth: 680 }, children: [
                /* @__PURE__ */ c.jsx(Yl, { children: /* @__PURE__ */ c.jsxs(Wn, { children: [
                  /* @__PURE__ */ c.jsx(be, { children: "Queue ID" }),
                  /* @__PURE__ */ c.jsx(be, { children: "Sender" }),
                  /* @__PURE__ */ c.jsx(be, { children: "Recipient" }),
                  /* @__PURE__ */ c.jsx(be, { children: "Size" }),
                  /* @__PURE__ */ c.jsx(be, { children: "Arrival" }),
                  /* @__PURE__ */ c.jsx(be, { children: "Status / Error" })
                ] }) }),
                /* @__PURE__ */ c.jsx(Vl, { children: f.map((z) => /* @__PURE__ */ c.jsxs(Wn, { hover: !0, children: [
                  /* @__PURE__ */ c.jsx(be, { sx: { fontFamily: Nt }, children: z.id }),
                  /* @__PURE__ */ c.jsx(be, { children: z.sender }),
                  /* @__PURE__ */ c.jsx(be, { children: z.recipient }),
                  /* @__PURE__ */ c.jsx(be, { children: z.size }),
                  /* @__PURE__ */ c.jsx(be, { children: z.arrival }),
                  /* @__PURE__ */ c.jsx(be, { sx: { color: "warning.main" }, children: z.reason || "Queued" })
                ] }, z.id)) })
              ] }) })
            }
          ),
          /* @__PURE__ */ c.jsxs(we, { spacing: 1.5, children: [
            /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 2, sx: { justifyContent: "space-between", alignItems: "center" }, children: [
              /* @__PURE__ */ c.jsx(it, { variant: "subtitle2", sx: { fontWeight: 600 }, children: "Live Mail Logs (/opt/hostpanel/logs/mail/mail.log)" }),
              /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 1, children: [
                /* @__PURE__ */ c.jsxs(
                  Ps,
                  {
                    size: "small",
                    value: g,
                    onChange: (z) => m(Number(z.target.value)),
                    sx: { minWidth: 110 },
                    children: [
                      /* @__PURE__ */ c.jsx(rs, { value: 50, children: "50 lines" }),
                      /* @__PURE__ */ c.jsx(rs, { value: 100, children: "100 lines" }),
                      /* @__PURE__ */ c.jsx(rs, { value: 200, children: "200 lines" })
                    ]
                  }
                ),
                /* @__PURE__ */ c.jsx(
                  rt,
                  {
                    variant: "outlined",
                    size: "small",
                    startIcon: /* @__PURE__ */ c.jsx(qc, {}),
                    onClick: bn,
                    disabled: x,
                    children: x ? "Refreshing..." : "Refresh Logs"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ c.jsx(
              cn,
              {
                sx: {
                  p: 2,
                  bgcolor: is.bg,
                  color: is.fg,
                  fontFamily: Nt,
                  fontSize: "0.75rem",
                  lineHeight: 1.55,
                  borderRadius: "8px",
                  maxHeight: 400,
                  overflowY: "auto",
                  whiteSpace: "pre-wrap"
                },
                children: x ? /* @__PURE__ */ c.jsx($t, { sx: { display: "grid", placeItems: "center", py: 4 }, children: /* @__PURE__ */ c.jsx(di, { size: 20 }) }) : b.length === 0 ? /* @__PURE__ */ c.jsx(it, { variant: "body2", sx: { color: is.dim, fontStyle: "italic", textAlign: "center", py: 3 }, children: "No recent log entries in /opt/hostpanel/logs/mail/mail.log" }) : b.map((z, _) => /* @__PURE__ */ c.jsx("div", { style: { lineHeight: 1.55 }, children: z }, _))
              }
            )
          ] })
        ] }),
        t === "service" && /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
          /* @__PURE__ */ c.jsxs(yo, { label: "100% ISOLATION STRUCTURE (STRICT HOSTPANEL RULE)", padded: !0, children: [
            /* @__PURE__ */ c.jsxs(it, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: [
              "Mail configs, virtual user databases, DKIM keys, mailboxes, and sockets reside strictly under ",
              /* @__PURE__ */ c.jsx("code", { style: { fontFamily: Nt }, children: "/opt/hostpanel" }),
              ". No files in /var/mail or /etc/postfix."
            ] }),
            /* @__PURE__ */ c.jsxs(we, { spacing: 1.5, children: [
              /* @__PURE__ */ c.jsx(vt, { label: "CONFIGURATION ROOT", value: "/opt/hostpanel/etc/mail" }),
              /* @__PURE__ */ c.jsx(vt, { label: "MAILBOX VIRTUAL STORE", value: "/opt/hostpanel/data/mail" }),
              /* @__PURE__ */ c.jsx(vt, { label: "LOGS DIRECTORY", value: "/opt/hostpanel/logs/mail" }),
              /* @__PURE__ */ c.jsx(vt, { label: "RUN & SOCKETS", value: "/opt/hostpanel/run/mail" }),
              /* @__PURE__ */ c.jsx(vt, { label: "OPENDKIM KEYS DIRECTORY", value: "/opt/hostpanel/etc/mail/dkim" })
            ] })
          ] }),
          /* @__PURE__ */ c.jsx(yo, { label: "SYSTEM SERVICE & DAEMON SPECS", padded: !0, children: /* @__PURE__ */ c.jsxs(we, { spacing: 1.5, children: [
            /* @__PURE__ */ c.jsx(vt, { label: "SYSTEMD SERVICE UNIT", value: "hostpanel-maild.service" }),
            /* @__PURE__ */ c.jsx(vt, { label: "SERVICE USER ACCOUNT", value: "hp-mail" }),
            /* @__PURE__ */ c.jsx(vt, { label: "INTERNAL API BINDING", value: "Isolated Loopback (127.0.0.1)" }),
            /* @__PURE__ */ c.jsx(vt, { label: "ROOT OPS HELPER SCRIPT", value: "/opt/hostpanel/packages/mail/ops/hp-mail" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(Qo, { open: L, onClose: () => O(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(qo, { sx: { fontWeight: 600 }, children: "Add Mail Domain" }),
      /* @__PURE__ */ c.jsx(Xo, { dividers: !0, sx: { p: 2.25 }, children: /* @__PURE__ */ c.jsx(Sr, { label: "Domain Name", hint: "e.g. example.com", children: /* @__PURE__ */ c.jsx(
        Un,
        {
          autoFocus: !0,
          fullWidth: !0,
          size: "small",
          placeholder: "example.com",
          value: D,
          onChange: (z) => B(z.target.value),
          slotProps: { htmlInput: { style: { fontFamily: Nt } } }
        }
      ) }) }),
      /* @__PURE__ */ c.jsxs(Go, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsx(rt, { onClick: () => O(!1), color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ c.jsx(rt, { variant: "contained", onClick: zr, disabled: mt, children: mt ? "Adding..." : "Add Domain" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(Qo, { open: H, onClose: () => W(!1), maxWidth: "sm", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(qo, { sx: { fontWeight: 600 }, children: "Create New Mailbox" }),
      /* @__PURE__ */ c.jsx(Xo, { dividers: !0, sx: { p: 2.25 }, children: /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
        /* @__PURE__ */ c.jsxs(we, { direction: "row", spacing: 1.5, children: [
          /* @__PURE__ */ c.jsx($t, { sx: { flex: 1 }, children: /* @__PURE__ */ c.jsx(Sr, { label: "Username / Local Part", hint: "e.g. contact", children: /* @__PURE__ */ c.jsx(
            Un,
            {
              autoFocus: !0,
              fullWidth: !0,
              size: "small",
              placeholder: "user",
              value: G,
              onChange: (z) => Y(z.target.value),
              slotProps: { htmlInput: { style: { fontFamily: Nt } } }
            }
          ) }) }),
          /* @__PURE__ */ c.jsx($t, { sx: { flex: 1 }, children: /* @__PURE__ */ c.jsx(Sr, { label: "Mail Domain", children: /* @__PURE__ */ c.jsx(
            Ps,
            {
              fullWidth: !0,
              size: "small",
              value: re,
              onChange: (z) => Q(z.target.value),
              children: l.map((z) => /* @__PURE__ */ c.jsxs(rs, { value: z.domain, children: [
                "@",
                z.domain
              ] }, z.domain))
            }
          ) }) })
        ] }),
        /* @__PURE__ */ c.jsx(Sr, { label: "Password", hint: "Strong mailbox password", children: /* @__PURE__ */ c.jsx(
          Un,
          {
            type: "password",
            fullWidth: !0,
            size: "small",
            placeholder: "••••••••••••",
            value: X,
            onChange: (z) => K(z.target.value)
          }
        ) }),
        /* @__PURE__ */ c.jsx(Sr, { label: "Storage Quota (MB)", hint: "Default 1024 MB (1 GB)", children: /* @__PURE__ */ c.jsx(
          Un,
          {
            type: "number",
            fullWidth: !0,
            size: "small",
            value: ne,
            onChange: (z) => he(Number(z.target.value)),
            slotProps: { htmlInput: { min: 10, max: 102400 } }
          }
        ) })
      ] }) }),
      /* @__PURE__ */ c.jsxs(Go, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsx(rt, { onClick: () => W(!1), color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ c.jsx(rt, { variant: "contained", onClick: Ui, disabled: mt, children: mt ? "Creating..." : "Create Mailbox" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(Qo, { open: Re, onClose: () => ve(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(qo, { sx: { fontWeight: 600 }, children: "Change Password" }),
      /* @__PURE__ */ c.jsx(Xo, { dividers: !0, sx: { p: 2.25 }, children: /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
        /* @__PURE__ */ c.jsxs(it, { variant: "body2", sx: { color: "text.secondary" }, children: [
          "Set a new password for ",
          /* @__PURE__ */ c.jsx("strong", { style: { fontFamily: Nt }, children: me })
        ] }),
        /* @__PURE__ */ c.jsx(Sr, { label: "New Password", children: /* @__PURE__ */ c.jsx(
          Un,
          {
            autoFocus: !0,
            type: "password",
            fullWidth: !0,
            size: "small",
            placeholder: "••••••••••••",
            value: Me,
            onChange: (z) => _e(z.target.value)
          }
        ) })
      ] }) }),
      /* @__PURE__ */ c.jsxs(Go, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsx(rt, { onClick: () => ve(!1), color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ c.jsx(rt, { variant: "contained", onClick: _o, disabled: mt, children: mt ? "Updating..." : "Set Password" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(Qo, { open: Ae, onClose: () => Ie(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(qo, { sx: { fontWeight: 600 }, children: "Edit Storage Quota" }),
      /* @__PURE__ */ c.jsx(Xo, { dividers: !0, sx: { p: 2.25 }, children: /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
        /* @__PURE__ */ c.jsxs(it, { variant: "body2", sx: { color: "text.secondary" }, children: [
          "Update storage limit for ",
          /* @__PURE__ */ c.jsx("strong", { style: { fontFamily: Nt }, children: ce })
        ] }),
        /* @__PURE__ */ c.jsx(Sr, { label: "Quota in MB", children: /* @__PURE__ */ c.jsx(
          Un,
          {
            autoFocus: !0,
            type: "number",
            fullWidth: !0,
            size: "small",
            value: tt,
            onChange: (z) => Ne(Number(z.target.value)),
            slotProps: { htmlInput: { min: 10, max: 102400 } }
          }
        ) })
      ] }) }),
      /* @__PURE__ */ c.jsxs(Go, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsx(rt, { onClick: () => Ie(!1), color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ c.jsx(rt, { variant: "contained", onClick: fo, disabled: mt, children: mt ? "Updating..." : "Save Quota" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(Qo, { open: We, onClose: () => $e(!1), maxWidth: "sm", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(qo, { sx: { fontWeight: 600 }, children: Qe ? "Edit Alias / Forwarder" : "Create New Alias / Forwarder" }),
      /* @__PURE__ */ c.jsx(Xo, { dividers: !0, sx: { p: 2.25 }, children: /* @__PURE__ */ c.jsxs(we, { spacing: 2, children: [
        /* @__PURE__ */ c.jsx(Sr, { label: "Source Email Address", hint: "e.g. sales@example.com", children: /* @__PURE__ */ c.jsx(
          Un,
          {
            autoFocus: !0,
            fullWidth: !0,
            size: "small",
            placeholder: "sales@example.com",
            value: Qe,
            onChange: (z) => xe(z.target.value),
            slotProps: { htmlInput: { style: { fontFamily: Nt } } }
          }
        ) }),
        /* @__PURE__ */ c.jsx(Sr, { label: "Destination Addresses", hint: "Comma-separated forward targets", children: /* @__PURE__ */ c.jsx(
          Un,
          {
            fullWidth: !0,
            size: "small",
            placeholder: "alice@example.com, bob@example.com",
            value: se,
            onChange: (z) => Se(z.target.value),
            slotProps: { htmlInput: { style: { fontFamily: Nt } } }
          }
        ) })
      ] }) }),
      /* @__PURE__ */ c.jsxs(Go, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsx(rt, { onClick: () => $e(!1), color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ c.jsx(rt, { variant: "contained", onClick: oe, disabled: mt, children: mt ? "Saving..." : "Save Alias" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsxs(Qo, { open: Ge, onClose: () => ae(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ c.jsx(qo, { sx: { fontWeight: 600 }, children: "Confirm Deletion" }),
      /* @__PURE__ */ c.jsx(Xo, { sx: { py: 2 }, children: /* @__PURE__ */ c.jsxs(it, { variant: "body2", children: [
        "Are you sure you want to delete ",
        Ue,
        " ",
        /* @__PURE__ */ c.jsx("strong", { children: Pt }),
        "?",
        Ue === "domain" && " All associated mailboxes and aliases will be permanently removed.",
        Ue === "mailbox" && " All stored email files will be deleted."
      ] }) }),
      /* @__PURE__ */ c.jsxs(Go, { sx: { p: 2 }, children: [
        /* @__PURE__ */ c.jsx(rt, { onClick: () => ae(!1), color: "inherit", children: "Cancel" }),
        /* @__PURE__ */ c.jsx(rt, { variant: "contained", color: "error", onClick: J, disabled: mt, children: mt ? "Deleting..." : "Delete" })
      ] })
    ] }),
    /* @__PURE__ */ c.jsx(
      xI,
      {
        open: !!Lr,
        autoHideDuration: 4e3,
        onClose: () => ze(null),
        message: Lr,
        anchorOrigin: { vertical: "bottom", horizontal: "right" }
      }
    )
  ] });
}
let qa = null;
function P$(e, t) {
  qa = o0(e), qa.render(
    /* @__PURE__ */ c.jsx(p.StrictMode, { children: /* @__PURE__ */ c.jsx(E$, { ctx: t }) })
  );
}
function R$() {
  const e = qa;
  qa = null, e && queueMicrotask(() => e.unmount());
}
const M$ = { mount: P$, unmount: R$ };
export {
  M$ as default,
  P$ as mount,
  R$ as unmount
};
//# sourceMappingURL=main.js.map
