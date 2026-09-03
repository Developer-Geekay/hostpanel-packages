var iS = Object.defineProperty;
var sS = (e, t, n) => t in e ? iS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ds = (e, t, n) => sS(e, typeof t != "symbol" ? t + "" : t, n);
function aS(e, t) {
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
function lS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dy = { exports: {} }, $c = {}, _y = { exports: {} }, Ae = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea = Symbol.for("react.element"), cS = Symbol.for("react.portal"), uS = Symbol.for("react.fragment"), dS = Symbol.for("react.strict_mode"), fS = Symbol.for("react.profiler"), pS = Symbol.for("react.provider"), mS = Symbol.for("react.context"), hS = Symbol.for("react.forward_ref"), gS = Symbol.for("react.suspense"), yS = Symbol.for("react.memo"), vS = Symbol.for("react.lazy"), Bm = Symbol.iterator;
function xS(e) {
  return e === null || typeof e != "object" ? null : (e = Bm && e[Bm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Wy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Uy = Object.assign, Hy = {};
function ts(e, t, n) {
  this.props = e, this.context = t, this.refs = Hy, this.updater = n || Wy;
}
ts.prototype.isReactComponent = {};
ts.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
ts.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vy() {
}
Vy.prototype = ts.prototype;
function Xf(e, t, n) {
  this.props = e, this.context = t, this.refs = Hy, this.updater = n || Wy;
}
var Qf = Xf.prototype = new Vy();
Qf.constructor = Xf;
Uy(Qf, ts.prototype);
Qf.isPureReactComponent = !0;
var Fm = Array.isArray, Ky = Object.prototype.hasOwnProperty, qf = { current: null }, Yy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ky.call(t, r) && !Yy.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), d = 0; d < a; d++) l[d] = arguments[d + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Ea, type: e, key: i, ref: s, props: o, _owner: qf.current };
}
function SS(e, t) {
  return { $$typeof: Ea, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ea;
}
function bS(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Dm = /\/+/g;
function Nu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? bS("" + e.key) : t.toString(36);
}
function El(e, t, n, r, o) {
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
        case Ea:
        case cS:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + Nu(s, 0) : r, Fm(o) ? (n = "", e != null && (n = e.replace(Dm, "$&/") + "/"), El(o, t, n, "", function(d) {
    return d;
  })) : o != null && (Zf(o) && (o = SS(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Dm, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Fm(e)) for (var a = 0; a < e.length; a++) {
    i = e[a];
    var l = r + Nu(i, a);
    s += El(i, t, n, l, o);
  }
  else if (l = xS(e), typeof l == "function") for (e = l.call(e), a = 0; !(i = e.next()).done; ) i = i.value, l = r + Nu(i, a++), s += El(i, t, n, l, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function Ha(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return El(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function CS(e) {
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
var tn = { current: null }, Pl = { transition: null }, wS = { ReactCurrentDispatcher: tn, ReactCurrentBatchConfig: Pl, ReactCurrentOwner: qf };
function Xy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Ae.Children = { map: Ha, forEach: function(e, t, n) {
  Ha(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ha(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ha(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zf(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Ae.Component = ts;
Ae.Fragment = uS;
Ae.Profiler = fS;
Ae.PureComponent = Xf;
Ae.StrictMode = dS;
Ae.Suspense = gS;
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wS;
Ae.act = Xy;
Ae.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Uy({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = qf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Ky.call(t, l) && !Yy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var d = 0; d < l; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: Ea, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Ae.createContext = function(e) {
  return e = { $$typeof: mS, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: pS, _context: e }, e.Consumer = e;
};
Ae.createElement = Gy;
Ae.createFactory = function(e) {
  var t = Gy.bind(null, e);
  return t.type = e, t;
};
Ae.createRef = function() {
  return { current: null };
};
Ae.forwardRef = function(e) {
  return { $$typeof: hS, render: e };
};
Ae.isValidElement = Zf;
Ae.lazy = function(e) {
  return { $$typeof: vS, _payload: { _status: -1, _result: e }, _init: CS };
};
Ae.memo = function(e, t) {
  return { $$typeof: yS, type: e, compare: t === void 0 ? null : t };
};
Ae.startTransition = function(e) {
  var t = Pl.transition;
  Pl.transition = {};
  try {
    e();
  } finally {
    Pl.transition = t;
  }
};
Ae.unstable_act = Xy;
Ae.useCallback = function(e, t) {
  return tn.current.useCallback(e, t);
};
Ae.useContext = function(e) {
  return tn.current.useContext(e);
};
Ae.useDebugValue = function() {
};
Ae.useDeferredValue = function(e) {
  return tn.current.useDeferredValue(e);
};
Ae.useEffect = function(e, t) {
  return tn.current.useEffect(e, t);
};
Ae.useId = function() {
  return tn.current.useId();
};
Ae.useImperativeHandle = function(e, t, n) {
  return tn.current.useImperativeHandle(e, t, n);
};
Ae.useInsertionEffect = function(e, t) {
  return tn.current.useInsertionEffect(e, t);
};
Ae.useLayoutEffect = function(e, t) {
  return tn.current.useLayoutEffect(e, t);
};
Ae.useMemo = function(e, t) {
  return tn.current.useMemo(e, t);
};
Ae.useReducer = function(e, t, n) {
  return tn.current.useReducer(e, t, n);
};
Ae.useRef = function(e) {
  return tn.current.useRef(e);
};
Ae.useState = function(e) {
  return tn.current.useState(e);
};
Ae.useSyncExternalStore = function(e, t, n) {
  return tn.current.useSyncExternalStore(e, t, n);
};
Ae.useTransition = function() {
  return tn.current.useTransition();
};
Ae.version = "18.3.1";
_y.exports = Ae;
var g = _y.exports;
const Qy = /* @__PURE__ */ lS(g), Vl = /* @__PURE__ */ aS({
  __proto__: null,
  default: Qy
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kS = g, TS = Symbol.for("react.element"), RS = Symbol.for("react.fragment"), ES = Object.prototype.hasOwnProperty, PS = kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $S = { key: !0, ref: !0, __self: !0, __source: !0 };
function qy(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) ES.call(t, r) && !$S.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: TS, type: e, key: i, ref: s, props: o, _owner: PS.current };
}
$c.Fragment = RS;
$c.jsx = qy;
$c.jsxs = qy;
Dy.exports = $c;
var u = Dy.exports, Zy = { exports: {} }, Tn = {}, Jy = { exports: {} }, e0 = {};
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
  function t(j, B) {
    var _ = j.length;
    j.push(B);
    e: for (; 0 < _; ) {
      var G = _ - 1 >>> 1, W = j[G];
      if (0 < o(W, B)) j[G] = B, j[_] = W, _ = G;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var B = j[0], _ = j.pop();
    if (_ !== B) {
      j[0] = _;
      e: for (var G = 0, W = j.length, Z = W >>> 1; G < Z; ) {
        var V = 2 * (G + 1) - 1, Y = j[V], K = V + 1, Q = j[K];
        if (0 > o(Y, _)) K < W && 0 > o(Q, Y) ? (j[G] = Q, j[K] = _, G = K) : (j[G] = Y, j[V] = _, G = V);
        else if (K < W && 0 > o(Q, _)) j[G] = Q, j[K] = _, G = K;
        else break e;
      }
    }
    return B;
  }
  function o(j, B) {
    var _ = j.sortIndex - B.sortIndex;
    return _ !== 0 ? _ : j.id - B.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, a = s.now();
    e.unstable_now = function() {
      return s.now() - a;
    };
  }
  var l = [], d = [], p = 1, m = null, x = 3, f = !1, v = !1, b = !1, w = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function S(j) {
    for (var B = n(d); B !== null; ) {
      if (B.callback === null) r(d);
      else if (B.startTime <= j) r(d), B.sortIndex = B.expirationTime, t(l, B);
      else break;
      B = n(d);
    }
  }
  function C(j) {
    if (b = !1, S(j), !v) if (n(l) !== null) v = !0, O(R);
    else {
      var B = n(d);
      B !== null && N(C, B.startTime - j);
    }
  }
  function R(j, B) {
    v = !1, b && (b = !1, y(E), E = -1), f = !0;
    var _ = x;
    try {
      for (S(B), m = n(l); m !== null && (!(m.expirationTime > B) || j && !M()); ) {
        var G = m.callback;
        if (typeof G == "function") {
          m.callback = null, x = m.priorityLevel;
          var W = G(m.expirationTime <= B);
          B = e.unstable_now(), typeof W == "function" ? m.callback = W : m === n(l) && r(l), S(B);
        } else r(l);
        m = n(l);
      }
      if (m !== null) var Z = !0;
      else {
        var V = n(d);
        V !== null && N(C, V.startTime - B), Z = !1;
      }
      return Z;
    } finally {
      m = null, x = _, f = !1;
    }
  }
  var k = !1, $ = null, E = -1, A = 5, z = -1;
  function M() {
    return !(e.unstable_now() - z < A);
  }
  function c() {
    if ($ !== null) {
      var j = e.unstable_now();
      z = j;
      var B = !0;
      try {
        B = $(!0, j);
      } finally {
        B ? P() : (k = !1, $ = null);
      }
    } else k = !1;
  }
  var P;
  if (typeof h == "function") P = function() {
    h(c);
  };
  else if (typeof MessageChannel < "u") {
    var T = new MessageChannel(), I = T.port2;
    T.port1.onmessage = c, P = function() {
      I.postMessage(null);
    };
  } else P = function() {
    w(c, 0);
  };
  function O(j) {
    $ = j, k || (k = !0, P());
  }
  function N(j, B) {
    E = w(function() {
      j(e.unstable_now());
    }, B);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    v || f || (v = !0, O(R));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return x;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(j) {
    switch (x) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = x;
    }
    var _ = x;
    x = B;
    try {
      return j();
    } finally {
      x = _;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, B) {
    switch (j) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        j = 3;
    }
    var _ = x;
    x = j;
    try {
      return B();
    } finally {
      x = _;
    }
  }, e.unstable_scheduleCallback = function(j, B, _) {
    var G = e.unstable_now();
    switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? G + _ : G) : _ = G, j) {
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
    return W = _ + W, j = { id: p++, callback: B, priorityLevel: j, startTime: _, expirationTime: W, sortIndex: -1 }, _ > G ? (j.sortIndex = _, t(d, j), n(l) === null && j === n(d) && (b ? (y(E), E = -1) : b = !0, N(C, _ - G))) : (j.sortIndex = W, t(l, j), v || f || (v = !0, O(R))), j;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(j) {
    var B = x;
    return function() {
      var _ = x;
      x = B;
      try {
        return j.apply(this, arguments);
      } finally {
        x = _;
      }
    };
  };
})(e0);
Jy.exports = e0;
var IS = Jy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var MS = g, Cn = IS;
function X(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var t0 = /* @__PURE__ */ new Set(), Zs = {};
function qo(e, t) {
  _i(e, t), _i(e + "Capture", t);
}
function _i(e, t) {
  for (Zs[e] = t, e = 0; e < t.length; e++) t0.add(t[e]);
}
var zr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Td = Object.prototype.hasOwnProperty, jS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _m = {}, Wm = {};
function AS(e) {
  return Td.call(Wm, e) ? !0 : Td.call(_m, e) ? !1 : jS.test(e) ? Wm[e] = !0 : (_m[e] = !0, !1);
}
function OS(e, t, n, r) {
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
function zS(e, t, n, r) {
  if (t === null || typeof t > "u" || OS(e, t, n, r)) return !0;
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
var Wt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Wt[e] = new nn(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Wt[t] = new nn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Wt[e] = new nn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Wt[e] = new nn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Wt[e] = new nn(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Wt[e] = new nn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Wt[e] = new nn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Wt[e] = new nn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Wt[e] = new nn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jf = /[\-:]([a-z])/g;
function ep(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Jf,
    ep
  );
  Wt[t] = new nn(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Jf, ep);
  Wt[t] = new nn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Jf, ep);
  Wt[t] = new nn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Wt[e] = new nn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Wt.xlinkHref = new nn("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Wt[e] = new nn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function tp(e, t, n, r) {
  var o = Wt.hasOwnProperty(t) ? Wt[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zS(t, n, o, r) && (n = null), r || o === null ? AS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _r = MS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Va = Symbol.for("react.element"), yi = Symbol.for("react.portal"), vi = Symbol.for("react.fragment"), np = Symbol.for("react.strict_mode"), Rd = Symbol.for("react.profiler"), n0 = Symbol.for("react.provider"), r0 = Symbol.for("react.context"), rp = Symbol.for("react.forward_ref"), Ed = Symbol.for("react.suspense"), Pd = Symbol.for("react.suspense_list"), op = Symbol.for("react.memo"), Vr = Symbol.for("react.lazy"), o0 = Symbol.for("react.offscreen"), Um = Symbol.iterator;
function fs(e) {
  return e === null || typeof e != "object" ? null : (e = Um && e[Um] || e["@@iterator"], typeof e == "function" ? e : null);
}
var yt = Object.assign, Lu;
function Is(e) {
  if (Lu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Lu = t && t[1] || "";
  }
  return `
` + Lu + e;
}
var Bu = !1;
function Fu(e, t) {
  if (!e || Bu) return "";
  Bu = !0;
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
      } catch (d) {
        var r = d;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (d) {
        r = d;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (var o = d.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a]; ) a--;
      for (; 1 <= s && 0 <= a; s--, a--) if (o[s] !== i[a]) {
        if (s !== 1 || a !== 1)
          do
            if (s--, a--, 0 > a || o[s] !== i[a]) {
              var l = `
` + o[s].replace(" at new ", " at ");
              return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
            }
          while (1 <= s && 0 <= a);
        break;
      }
    }
  } finally {
    Bu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Is(e) : "";
}
function NS(e) {
  switch (e.tag) {
    case 5:
      return Is(e.type);
    case 16:
      return Is("Lazy");
    case 13:
      return Is("Suspense");
    case 19:
      return Is("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Fu(e.type, !1), e;
    case 11:
      return e = Fu(e.type.render, !1), e;
    case 1:
      return e = Fu(e.type, !0), e;
    default:
      return "";
  }
}
function $d(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case vi:
      return "Fragment";
    case yi:
      return "Portal";
    case Rd:
      return "Profiler";
    case np:
      return "StrictMode";
    case Ed:
      return "Suspense";
    case Pd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case r0:
      return (e.displayName || "Context") + ".Consumer";
    case n0:
      return (e._context.displayName || "Context") + ".Provider";
    case rp:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case op:
      return t = e.displayName || null, t !== null ? t : $d(e.type) || "Memo";
    case Vr:
      t = e._payload, e = e._init;
      try {
        return $d(e(t));
      } catch {
      }
  }
  return null;
}
function LS(e) {
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
      return $d(t);
    case 8:
      return t === np ? "StrictMode" : "Mode";
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
function ao(e) {
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
function i0(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function BS(e) {
  var t = i0(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function Ka(e) {
  e._valueTracker || (e._valueTracker = BS(e));
}
function s0(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = i0(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Kl(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Id(e, t) {
  var n = t.checked;
  return yt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Hm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = ao(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function a0(e, t) {
  t = t.checked, t != null && tp(e, "checked", t, !1);
}
function Md(e, t) {
  a0(e, t);
  var n = ao(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? jd(e, t.type, n) : t.hasOwnProperty("defaultValue") && jd(e, t.type, ao(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Vm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function jd(e, t, n) {
  (t !== "number" || Kl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ms = Array.isArray;
function ji(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ao(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ad(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(X(91));
  return yt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Km(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(X(92));
      if (Ms(n)) {
        if (1 < n.length) throw Error(X(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: ao(n) };
}
function l0(e, t) {
  var n = ao(t.value), r = ao(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ym(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function c0(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Od(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? c0(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Ya, u0 = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Ya = Ya || document.createElement("div"), Ya.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ya.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Js(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ls = {
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
}, FS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ls).forEach(function(e) {
  FS.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ls[t] = Ls[e];
  });
});
function d0(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ls.hasOwnProperty(e) && Ls[e] ? ("" + t).trim() : t + "px";
}
function f0(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = d0(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var DS = yt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function zd(e, t) {
  if (t) {
    if (DS[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(X(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(X(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(X(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(X(62));
  }
}
function Nd(e, t) {
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
var Ld = null;
function ip(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Bd = null, Ai = null, Oi = null;
function Gm(e) {
  if (e = Ia(e)) {
    if (typeof Bd != "function") throw Error(X(280));
    var t = e.stateNode;
    t && (t = Oc(t), Bd(e.stateNode, e.type, t));
  }
}
function p0(e) {
  Ai ? Oi ? Oi.push(e) : Oi = [e] : Ai = e;
}
function m0() {
  if (Ai) {
    var e = Ai, t = Oi;
    if (Oi = Ai = null, Gm(e), t) for (e = 0; e < t.length; e++) Gm(t[e]);
  }
}
function h0(e, t) {
  return e(t);
}
function g0() {
}
var Du = !1;
function y0(e, t, n) {
  if (Du) return e(t, n);
  Du = !0;
  try {
    return h0(e, t, n);
  } finally {
    Du = !1, (Ai !== null || Oi !== null) && (g0(), m0());
  }
}
function ea(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Oc(n);
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
  if (n && typeof n != "function") throw Error(X(231, t, typeof n));
  return n;
}
var Fd = !1;
if (zr) try {
  var ps = {};
  Object.defineProperty(ps, "passive", { get: function() {
    Fd = !0;
  } }), window.addEventListener("test", ps, ps), window.removeEventListener("test", ps, ps);
} catch {
  Fd = !1;
}
function _S(e, t, n, r, o, i, s, a, l) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (p) {
    this.onError(p);
  }
}
var Bs = !1, Yl = null, Gl = !1, Dd = null, WS = { onError: function(e) {
  Bs = !0, Yl = e;
} };
function US(e, t, n, r, o, i, s, a, l) {
  Bs = !1, Yl = null, _S.apply(WS, arguments);
}
function HS(e, t, n, r, o, i, s, a, l) {
  if (US.apply(this, arguments), Bs) {
    if (Bs) {
      var d = Yl;
      Bs = !1, Yl = null;
    } else throw Error(X(198));
    Gl || (Gl = !0, Dd = d);
  }
}
function Zo(e) {
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
function v0(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Xm(e) {
  if (Zo(e) !== e) throw Error(X(188));
}
function VS(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Zo(e), t === null) throw Error(X(188));
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
        if (i === n) return Xm(o), e;
        if (i === r) return Xm(o), t;
        i = i.sibling;
      }
      throw Error(X(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          s = !0, n = o, r = i;
          break;
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            s = !0, n = i, r = o;
            break;
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(X(189));
      }
    }
    if (n.alternate !== r) throw Error(X(190));
  }
  if (n.tag !== 3) throw Error(X(188));
  return n.stateNode.current === n ? e : t;
}
function x0(e) {
  return e = VS(e), e !== null ? S0(e) : null;
}
function S0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = S0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var b0 = Cn.unstable_scheduleCallback, Qm = Cn.unstable_cancelCallback, KS = Cn.unstable_shouldYield, YS = Cn.unstable_requestPaint, wt = Cn.unstable_now, GS = Cn.unstable_getCurrentPriorityLevel, sp = Cn.unstable_ImmediatePriority, C0 = Cn.unstable_UserBlockingPriority, Xl = Cn.unstable_NormalPriority, XS = Cn.unstable_LowPriority, w0 = Cn.unstable_IdlePriority, Ic = null, xr = null;
function QS(e) {
  if (xr && typeof xr.onCommitFiberRoot == "function") try {
    xr.onCommitFiberRoot(Ic, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var er = Math.clz32 ? Math.clz32 : JS, qS = Math.log, ZS = Math.LN2;
function JS(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (qS(e) / ZS | 0) | 0;
}
var Ga = 64, Xa = 4194304;
function js(e) {
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
function Ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = js(a) : (i &= s, i !== 0 && (r = js(i)));
  } else s = n & ~o, s !== 0 ? r = js(s) : i !== 0 && (r = js(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - er(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function eb(e, t) {
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
function tb(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - er(i), a = 1 << s, l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = eb(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a;
  }
}
function _d(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function k0() {
  var e = Ga;
  return Ga <<= 1, !(Ga & 4194240) && (Ga = 64), e;
}
function _u(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Pa(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - er(t), e[t] = n;
}
function nb(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - er(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function ap(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - er(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ye = 0;
function T0(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var R0, lp, E0, P0, $0, Wd = !1, Qa = [], Zr = null, Jr = null, eo = null, ta = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Map(), Yr = [], rb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function qm(e, t) {
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
      ta.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      na.delete(t.pointerId);
  }
}
function ms(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = Ia(t), t !== null && lp(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ob(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Zr = ms(Zr, e, t, n, r, o), !0;
    case "dragenter":
      return Jr = ms(Jr, e, t, n, r, o), !0;
    case "mouseover":
      return eo = ms(eo, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return ta.set(i, ms(ta.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, na.set(i, ms(na.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function I0(e) {
  var t = No(e.target);
  if (t !== null) {
    var n = Zo(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = v0(n), t !== null) {
          e.blockedOn = t, $0(e.priority, function() {
            E0(n);
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
function $l(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ud(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ld = r, n.target.dispatchEvent(r), Ld = null;
    } else return t = Ia(n), t !== null && lp(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Zm(e, t, n) {
  $l(e) && n.delete(t);
}
function ib() {
  Wd = !1, Zr !== null && $l(Zr) && (Zr = null), Jr !== null && $l(Jr) && (Jr = null), eo !== null && $l(eo) && (eo = null), ta.forEach(Zm), na.forEach(Zm);
}
function hs(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Wd || (Wd = !0, Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority, ib)));
}
function ra(e) {
  function t(o) {
    return hs(o, e);
  }
  if (0 < Qa.length) {
    hs(Qa[0], e);
    for (var n = 1; n < Qa.length; n++) {
      var r = Qa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Zr !== null && hs(Zr, e), Jr !== null && hs(Jr, e), eo !== null && hs(eo, e), ta.forEach(t), na.forEach(t), n = 0; n < Yr.length; n++) r = Yr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yr.length && (n = Yr[0], n.blockedOn === null); ) I0(n), n.blockedOn === null && Yr.shift();
}
var zi = _r.ReactCurrentBatchConfig, ql = !0;
function sb(e, t, n, r) {
  var o = Ye, i = zi.transition;
  zi.transition = null;
  try {
    Ye = 1, cp(e, t, n, r);
  } finally {
    Ye = o, zi.transition = i;
  }
}
function ab(e, t, n, r) {
  var o = Ye, i = zi.transition;
  zi.transition = null;
  try {
    Ye = 4, cp(e, t, n, r);
  } finally {
    Ye = o, zi.transition = i;
  }
}
function cp(e, t, n, r) {
  if (ql) {
    var o = Ud(e, t, n, r);
    if (o === null) qu(e, t, r, Zl, n), qm(e, r);
    else if (ob(o, e, t, n, r)) r.stopPropagation();
    else if (qm(e, r), t & 4 && -1 < rb.indexOf(e)) {
      for (; o !== null; ) {
        var i = Ia(o);
        if (i !== null && R0(i), i = Ud(e, t, n, r), i === null && qu(e, t, r, Zl, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else qu(e, t, r, null, n);
  }
}
var Zl = null;
function Ud(e, t, n, r) {
  if (Zl = null, e = ip(r), e = No(e), e !== null) if (t = Zo(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = v0(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Zl = e, null;
}
function M0(e) {
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
      switch (GS()) {
        case sp:
          return 1;
        case C0:
          return 4;
        case Xl:
        case XS:
          return 16;
        case w0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null, up = null, Il = null;
function j0() {
  if (Il) return Il;
  var e, t = up, n = t.length, r, o = "value" in Xr ? Xr.value : Xr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Il = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Ml(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function qa() {
  return !0;
}
function Jm() {
  return !1;
}
function Rn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? qa : Jm, this.isPropagationStopped = Jm, this;
  }
  return yt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qa);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qa);
  }, persist: function() {
  }, isPersistent: qa }), t;
}
var ns = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, dp = Rn(ns), $a = yt({}, ns, { view: 0, detail: 0 }), lb = Rn($a), Wu, Uu, gs, Mc = yt({}, $a, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fp, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== gs && (gs && e.type === "mousemove" ? (Wu = e.screenX - gs.screenX, Uu = e.screenY - gs.screenY) : Uu = Wu = 0, gs = e), Wu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Uu;
} }), eh = Rn(Mc), cb = yt({}, Mc, { dataTransfer: 0 }), ub = Rn(cb), db = yt({}, $a, { relatedTarget: 0 }), Hu = Rn(db), fb = yt({}, ns, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pb = Rn(fb), mb = yt({}, ns, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), hb = Rn(mb), gb = yt({}, ns, { data: 0 }), th = Rn(gb), yb = {
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
}, vb = {
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
}, xb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Sb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = xb[e]) ? !!t[e] : !1;
}
function fp() {
  return Sb;
}
var bb = yt({}, $a, { key: function(e) {
  if (e.key) {
    var t = yb[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ml(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vb[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fp, charCode: function(e) {
  return e.type === "keypress" ? Ml(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ml(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Cb = Rn(bb), wb = yt({}, Mc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), nh = Rn(wb), kb = yt({}, $a, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fp }), Tb = Rn(kb), Rb = yt({}, ns, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Eb = Rn(Rb), Pb = yt({}, Mc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), $b = Rn(Pb), Ib = [9, 13, 27, 32], pp = zr && "CompositionEvent" in window, Fs = null;
zr && "documentMode" in document && (Fs = document.documentMode);
var Mb = zr && "TextEvent" in window && !Fs, A0 = zr && (!pp || Fs && 8 < Fs && 11 >= Fs), rh = " ", oh = !1;
function O0(e, t) {
  switch (e) {
    case "keyup":
      return Ib.indexOf(t.keyCode) !== -1;
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
function z0(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var xi = !1;
function jb(e, t) {
  switch (e) {
    case "compositionend":
      return z0(t);
    case "keypress":
      return t.which !== 32 ? null : (oh = !0, rh);
    case "textInput":
      return e = t.data, e === rh && oh ? null : e;
    default:
      return null;
  }
}
function Ab(e, t) {
  if (xi) return e === "compositionend" || !pp && O0(e, t) ? (e = j0(), Il = up = Xr = null, xi = !1, e) : null;
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
      return A0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ob = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ih(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ob[e.type] : t === "textarea";
}
function N0(e, t, n, r) {
  p0(r), t = Jl(t, "onChange"), 0 < t.length && (n = new dp("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Ds = null, oa = null;
function zb(e) {
  Y0(e, 0);
}
function jc(e) {
  var t = Ci(e);
  if (s0(t)) return e;
}
function Nb(e, t) {
  if (e === "change") return t;
}
var L0 = !1;
if (zr) {
  var Vu;
  if (zr) {
    var Ku = "oninput" in document;
    if (!Ku) {
      var sh = document.createElement("div");
      sh.setAttribute("oninput", "return;"), Ku = typeof sh.oninput == "function";
    }
    Vu = Ku;
  } else Vu = !1;
  L0 = Vu && (!document.documentMode || 9 < document.documentMode);
}
function ah() {
  Ds && (Ds.detachEvent("onpropertychange", B0), oa = Ds = null);
}
function B0(e) {
  if (e.propertyName === "value" && jc(oa)) {
    var t = [];
    N0(t, oa, e, ip(e)), y0(zb, t);
  }
}
function Lb(e, t, n) {
  e === "focusin" ? (ah(), Ds = t, oa = n, Ds.attachEvent("onpropertychange", B0)) : e === "focusout" && ah();
}
function Bb(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return jc(oa);
}
function Fb(e, t) {
  if (e === "click") return jc(t);
}
function Db(e, t) {
  if (e === "input" || e === "change") return jc(t);
}
function _b(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nr = typeof Object.is == "function" ? Object.is : _b;
function ia(e, t) {
  if (nr(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Td.call(t, o) || !nr(e[o], t[o])) return !1;
  }
  return !0;
}
function lh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ch(e, t) {
  var n = lh(e);
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
    n = lh(n);
  }
}
function F0(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? F0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function D0() {
  for (var e = window, t = Kl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Kl(e.document);
  }
  return t;
}
function mp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Wb(e) {
  var t = D0(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && F0(n.ownerDocument.documentElement, n)) {
    if (r !== null && mp(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = ch(n, i);
        var s = ch(
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
var Ub = zr && "documentMode" in document && 11 >= document.documentMode, Si = null, Hd = null, _s = null, Vd = !1;
function uh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Vd || Si == null || Si !== Kl(r) || (r = Si, "selectionStart" in r && mp(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), _s && ia(_s, r) || (_s = r, r = Jl(Hd, "onSelect"), 0 < r.length && (t = new dp("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Si)));
}
function Za(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var bi = { animationend: Za("Animation", "AnimationEnd"), animationiteration: Za("Animation", "AnimationIteration"), animationstart: Za("Animation", "AnimationStart"), transitionend: Za("Transition", "TransitionEnd") }, Yu = {}, _0 = {};
zr && (_0 = document.createElement("div").style, "AnimationEvent" in window || (delete bi.animationend.animation, delete bi.animationiteration.animation, delete bi.animationstart.animation), "TransitionEvent" in window || delete bi.transitionend.transition);
function Ac(e) {
  if (Yu[e]) return Yu[e];
  if (!bi[e]) return e;
  var t = bi[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in _0) return Yu[e] = t[n];
  return e;
}
var W0 = Ac("animationend"), U0 = Ac("animationiteration"), H0 = Ac("animationstart"), V0 = Ac("transitionend"), K0 = /* @__PURE__ */ new Map(), dh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function mo(e, t) {
  K0.set(e, t), qo(t, [e]);
}
for (var Gu = 0; Gu < dh.length; Gu++) {
  var Xu = dh[Gu], Hb = Xu.toLowerCase(), Vb = Xu[0].toUpperCase() + Xu.slice(1);
  mo(Hb, "on" + Vb);
}
mo(W0, "onAnimationEnd");
mo(U0, "onAnimationIteration");
mo(H0, "onAnimationStart");
mo("dblclick", "onDoubleClick");
mo("focusin", "onFocus");
mo("focusout", "onBlur");
mo(V0, "onTransitionEnd");
_i("onMouseEnter", ["mouseout", "mouseover"]);
_i("onMouseLeave", ["mouseout", "mouseover"]);
_i("onPointerEnter", ["pointerout", "pointerover"]);
_i("onPointerLeave", ["pointerout", "pointerover"]);
qo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
qo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
qo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
qo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Kb = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));
function fh(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, HS(r, t, void 0, e), e.currentTarget = null;
}
function Y0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var a = r[s], l = a.instance, d = a.currentTarget;
        if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
        fh(o, a, d), i = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (a = r[s], l = a.instance, d = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
        fh(o, a, d), i = l;
      }
    }
  }
  if (Gl) throw e = Dd, Gl = !1, Dd = null, e;
}
function nt(e, t) {
  var n = t[Qd];
  n === void 0 && (n = t[Qd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (G0(t, e, 2, !1), n.add(r));
}
function Qu(e, t, n) {
  var r = 0;
  t && (r |= 4), G0(n, e, r, t);
}
var Ja = "_reactListening" + Math.random().toString(36).slice(2);
function sa(e) {
  if (!e[Ja]) {
    e[Ja] = !0, t0.forEach(function(n) {
      n !== "selectionchange" && (Kb.has(n) || Qu(n, !1, e), Qu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ja] || (t[Ja] = !0, Qu("selectionchange", !1, t));
  }
}
function G0(e, t, n, r) {
  switch (M0(t)) {
    case 1:
      var o = sb;
      break;
    case 4:
      o = ab;
      break;
    default:
      o = cp;
  }
  n = o.bind(null, t, n, e), o = void 0, !Fd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function qu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var l = s.tag;
        if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
        s = s.return;
      }
      for (; a !== null; ) {
        if (s = No(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e;
        }
        a = a.parentNode;
      }
    }
    r = r.return;
  }
  y0(function() {
    var d = i, p = ip(n), m = [];
    e: {
      var x = K0.get(e);
      if (x !== void 0) {
        var f = dp, v = e;
        switch (e) {
          case "keypress":
            if (Ml(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Cb;
            break;
          case "focusin":
            v = "focus", f = Hu;
            break;
          case "focusout":
            v = "blur", f = Hu;
            break;
          case "beforeblur":
          case "afterblur":
            f = Hu;
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
            f = eh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = ub;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Tb;
            break;
          case W0:
          case U0:
          case H0:
            f = pb;
            break;
          case V0:
            f = Eb;
            break;
          case "scroll":
            f = lb;
            break;
          case "wheel":
            f = $b;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = hb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = nh;
        }
        var b = (t & 4) !== 0, w = !b && e === "scroll", y = b ? x !== null ? x + "Capture" : null : x;
        b = [];
        for (var h = d, S; h !== null; ) {
          S = h;
          var C = S.stateNode;
          if (S.tag === 5 && C !== null && (S = C, y !== null && (C = ea(h, y), C != null && b.push(aa(h, C, S)))), w) break;
          h = h.return;
        }
        0 < b.length && (x = new f(x, v, null, n, p), m.push({ event: x, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (x = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", x && n !== Ld && (v = n.relatedTarget || n.fromElement) && (No(v) || v[Nr])) break e;
        if ((f || x) && (x = p.window === p ? p : (x = p.ownerDocument) ? x.defaultView || x.parentWindow : window, f ? (v = n.relatedTarget || n.toElement, f = d, v = v ? No(v) : null, v !== null && (w = Zo(v), v !== w || v.tag !== 5 && v.tag !== 6) && (v = null)) : (f = null, v = d), f !== v)) {
          if (b = eh, C = "onMouseLeave", y = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (b = nh, C = "onPointerLeave", y = "onPointerEnter", h = "pointer"), w = f == null ? x : Ci(f), S = v == null ? x : Ci(v), x = new b(C, h + "leave", f, n, p), x.target = w, x.relatedTarget = S, C = null, No(p) === d && (b = new b(y, h + "enter", v, n, p), b.target = S, b.relatedTarget = w, C = b), w = C, f && v) t: {
            for (b = f, y = v, h = 0, S = b; S; S = ri(S)) h++;
            for (S = 0, C = y; C; C = ri(C)) S++;
            for (; 0 < h - S; ) b = ri(b), h--;
            for (; 0 < S - h; ) y = ri(y), S--;
            for (; h--; ) {
              if (b === y || y !== null && b === y.alternate) break t;
              b = ri(b), y = ri(y);
            }
            b = null;
          }
          else b = null;
          f !== null && ph(m, x, f, b, !1), v !== null && w !== null && ph(m, w, v, b, !0);
        }
      }
      e: {
        if (x = d ? Ci(d) : window, f = x.nodeName && x.nodeName.toLowerCase(), f === "select" || f === "input" && x.type === "file") var R = Nb;
        else if (ih(x)) if (L0) R = Db;
        else {
          R = Bb;
          var k = Lb;
        }
        else (f = x.nodeName) && f.toLowerCase() === "input" && (x.type === "checkbox" || x.type === "radio") && (R = Fb);
        if (R && (R = R(e, d))) {
          N0(m, R, n, p);
          break e;
        }
        k && k(e, x, d), e === "focusout" && (k = x._wrapperState) && k.controlled && x.type === "number" && jd(x, "number", x.value);
      }
      switch (k = d ? Ci(d) : window, e) {
        case "focusin":
          (ih(k) || k.contentEditable === "true") && (Si = k, Hd = d, _s = null);
          break;
        case "focusout":
          _s = Hd = Si = null;
          break;
        case "mousedown":
          Vd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Vd = !1, uh(m, n, p);
          break;
        case "selectionchange":
          if (Ub) break;
        case "keydown":
        case "keyup":
          uh(m, n, p);
      }
      var $;
      if (pp) e: {
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
      else xi ? O0(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (A0 && n.locale !== "ko" && (xi || E !== "onCompositionStart" ? E === "onCompositionEnd" && xi && ($ = j0()) : (Xr = p, up = "value" in Xr ? Xr.value : Xr.textContent, xi = !0)), k = Jl(d, E), 0 < k.length && (E = new th(E, e, null, n, p), m.push({ event: E, listeners: k }), $ ? E.data = $ : ($ = z0(n), $ !== null && (E.data = $)))), ($ = Mb ? jb(e, n) : Ab(e, n)) && (d = Jl(d, "onBeforeInput"), 0 < d.length && (p = new th("onBeforeInput", "beforeinput", null, n, p), m.push({ event: p, listeners: d }), p.data = $));
    }
    Y0(m, t);
  });
}
function aa(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Jl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ea(e, n), i != null && r.unshift(aa(e, i, o)), i = ea(e, t), i != null && r.push(aa(e, i, o))), e = e.return;
  }
  return r;
}
function ri(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ph(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n, l = a.alternate, d = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && d !== null && (a = d, o ? (l = ea(n, i), l != null && s.unshift(aa(n, l, a))) : o || (l = ea(n, i), l != null && s.push(aa(n, l, a)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Yb = /\r\n?/g, Gb = /\u0000|\uFFFD/g;
function mh(e) {
  return (typeof e == "string" ? e : "" + e).replace(Yb, `
`).replace(Gb, "");
}
function el(e, t, n) {
  if (t = mh(t), mh(e) !== t && n) throw Error(X(425));
}
function ec() {
}
var Kd = null, Yd = null;
function Gd(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Xd = typeof setTimeout == "function" ? setTimeout : void 0, Xb = typeof clearTimeout == "function" ? clearTimeout : void 0, hh = typeof Promise == "function" ? Promise : void 0, Qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof hh < "u" ? function(e) {
  return hh.resolve(null).then(e).catch(qb);
} : Xd;
function qb(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), ra(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  ra(t);
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
function gh(e) {
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
var rs = Math.random().toString(36).slice(2), hr = "__reactFiber$" + rs, la = "__reactProps$" + rs, Nr = "__reactContainer$" + rs, Qd = "__reactEvents$" + rs, Zb = "__reactListeners$" + rs, Jb = "__reactHandles$" + rs;
function No(e) {
  var t = e[hr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Nr] || n[hr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = gh(e); e !== null; ) {
        if (n = e[hr]) return n;
        e = gh(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Ia(e) {
  return e = e[hr] || e[Nr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ci(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(X(33));
}
function Oc(e) {
  return e[la] || null;
}
var qd = [], wi = -1;
function ho(e) {
  return { current: e };
}
function ot(e) {
  0 > wi || (e.current = qd[wi], qd[wi] = null, wi--);
}
function et(e, t) {
  wi++, qd[wi] = e.current, e.current = t;
}
var lo = {}, Xt = ho(lo), ln = ho(!1), Ho = lo;
function Wi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return lo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function cn(e) {
  return e = e.childContextTypes, e != null;
}
function tc() {
  ot(ln), ot(Xt);
}
function yh(e, t, n) {
  if (Xt.current !== lo) throw Error(X(168));
  et(Xt, t), et(ln, n);
}
function X0(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(X(108, LS(e) || "Unknown", o));
  return yt({}, n, r);
}
function nc(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || lo, Ho = Xt.current, et(Xt, e), et(ln, ln.current), !0;
}
function vh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(X(169));
  n ? (e = X0(e, t, Ho), r.__reactInternalMemoizedMergedChildContext = e, ot(ln), ot(Xt), et(Xt, e)) : ot(ln), et(ln, n);
}
var Mr = null, zc = !1, Ju = !1;
function Q0(e) {
  Mr === null ? Mr = [e] : Mr.push(e);
}
function eC(e) {
  zc = !0, Q0(e);
}
function go() {
  if (!Ju && Mr !== null) {
    Ju = !0;
    var e = 0, t = Ye;
    try {
      var n = Mr;
      for (Ye = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Mr = null, zc = !1;
    } catch (o) {
      throw Mr !== null && (Mr = Mr.slice(e + 1)), b0(sp, go), o;
    } finally {
      Ye = t, Ju = !1;
    }
  }
  return null;
}
var ki = [], Ti = 0, rc = null, oc = 0, jn = [], An = 0, Vo = null, jr = 1, Ar = "";
function jo(e, t) {
  ki[Ti++] = oc, ki[Ti++] = rc, rc = e, oc = t;
}
function q0(e, t, n) {
  jn[An++] = jr, jn[An++] = Ar, jn[An++] = Vo, Vo = e;
  var r = jr;
  e = Ar;
  var o = 32 - er(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - er(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, jr = 1 << 32 - er(t) + o | n << o | r, Ar = i + e;
  } else jr = 1 << i | n << o | r, Ar = e;
}
function hp(e) {
  e.return !== null && (jo(e, 1), q0(e, 1, 0));
}
function gp(e) {
  for (; e === rc; ) rc = ki[--Ti], ki[Ti] = null, oc = ki[--Ti], ki[Ti] = null;
  for (; e === Vo; ) Vo = jn[--An], jn[An] = null, Ar = jn[--An], jn[An] = null, jr = jn[--An], jn[An] = null;
}
var Sn = null, xn = null, ct = !1, Zn = null;
function Z0(e, t) {
  var n = Nn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function xh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Sn = e, xn = to(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Sn = e, xn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vo !== null ? { id: jr, overflow: Ar } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Nn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Sn = e, xn = null, !0) : !1;
    default:
      return !1;
  }
}
function Zd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Jd(e) {
  if (ct) {
    var t = xn;
    if (t) {
      var n = t;
      if (!xh(e, t)) {
        if (Zd(e)) throw Error(X(418));
        t = to(n.nextSibling);
        var r = Sn;
        t && xh(e, t) ? Z0(r, n) : (e.flags = e.flags & -4097 | 2, ct = !1, Sn = e);
      }
    } else {
      if (Zd(e)) throw Error(X(418));
      e.flags = e.flags & -4097 | 2, ct = !1, Sn = e;
    }
  }
}
function Sh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Sn = e;
}
function tl(e) {
  if (e !== Sn) return !1;
  if (!ct) return Sh(e), ct = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Gd(e.type, e.memoizedProps)), t && (t = xn)) {
    if (Zd(e)) throw J0(), Error(X(418));
    for (; t; ) Z0(e, t), t = to(t.nextSibling);
  }
  if (Sh(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(X(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xn = to(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xn = null;
    }
  } else xn = Sn ? to(e.stateNode.nextSibling) : null;
  return !0;
}
function J0() {
  for (var e = xn; e; ) e = to(e.nextSibling);
}
function Ui() {
  xn = Sn = null, ct = !1;
}
function yp(e) {
  Zn === null ? Zn = [e] : Zn.push(e);
}
var tC = _r.ReactCurrentBatchConfig;
function ys(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(X(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(X(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        s === null ? delete a[i] : a[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(X(284));
    if (!n._owner) throw Error(X(290, e));
  }
  return e;
}
function nl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(X(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function bh(e) {
  var t = e._init;
  return t(e._payload);
}
function ev(e) {
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
    return y = io(y, h), y.index = 0, y.sibling = null, y;
  }
  function i(y, h, S) {
    return y.index = S, e ? (S = y.alternate, S !== null ? (S = S.index, S < h ? (y.flags |= 2, h) : S) : (y.flags |= 2, h)) : (y.flags |= 1048576, h);
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function a(y, h, S, C) {
    return h === null || h.tag !== 6 ? (h = sd(S, y.mode, C), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function l(y, h, S, C) {
    var R = S.type;
    return R === vi ? p(y, h, S.props.children, C, S.key) : h !== null && (h.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Vr && bh(R) === h.type) ? (C = o(h, S.props), C.ref = ys(y, h, S), C.return = y, C) : (C = Bl(S.type, S.key, S.props, null, y.mode, C), C.ref = ys(y, h, S), C.return = y, C);
  }
  function d(y, h, S, C) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = ad(S, y.mode, C), h.return = y, h) : (h = o(h, S.children || []), h.return = y, h);
  }
  function p(y, h, S, C, R) {
    return h === null || h.tag !== 7 ? (h = _o(S, y.mode, C, R), h.return = y, h) : (h = o(h, S), h.return = y, h);
  }
  function m(y, h, S) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return h = sd("" + h, y.mode, S), h.return = y, h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Va:
          return S = Bl(h.type, h.key, h.props, null, y.mode, S), S.ref = ys(y, null, h), S.return = y, S;
        case yi:
          return h = ad(h, y.mode, S), h.return = y, h;
        case Vr:
          var C = h._init;
          return m(y, C(h._payload), S);
      }
      if (Ms(h) || fs(h)) return h = _o(h, y.mode, S, null), h.return = y, h;
      nl(y, h);
    }
    return null;
  }
  function x(y, h, S, C) {
    var R = h !== null ? h.key : null;
    if (typeof S == "string" && S !== "" || typeof S == "number") return R !== null ? null : a(y, h, "" + S, C);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Va:
          return S.key === R ? l(y, h, S, C) : null;
        case yi:
          return S.key === R ? d(y, h, S, C) : null;
        case Vr:
          return R = S._init, x(
            y,
            h,
            R(S._payload),
            C
          );
      }
      if (Ms(S) || fs(S)) return R !== null ? null : p(y, h, S, C, null);
      nl(y, S);
    }
    return null;
  }
  function f(y, h, S, C, R) {
    if (typeof C == "string" && C !== "" || typeof C == "number") return y = y.get(S) || null, a(h, y, "" + C, R);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Va:
          return y = y.get(C.key === null ? S : C.key) || null, l(h, y, C, R);
        case yi:
          return y = y.get(C.key === null ? S : C.key) || null, d(h, y, C, R);
        case Vr:
          var k = C._init;
          return f(y, h, S, k(C._payload), R);
      }
      if (Ms(C) || fs(C)) return y = y.get(S) || null, p(h, y, C, R, null);
      nl(h, C);
    }
    return null;
  }
  function v(y, h, S, C) {
    for (var R = null, k = null, $ = h, E = h = 0, A = null; $ !== null && E < S.length; E++) {
      $.index > E ? (A = $, $ = null) : A = $.sibling;
      var z = x(y, $, S[E], C);
      if (z === null) {
        $ === null && ($ = A);
        break;
      }
      e && $ && z.alternate === null && t(y, $), h = i(z, h, E), k === null ? R = z : k.sibling = z, k = z, $ = A;
    }
    if (E === S.length) return n(y, $), ct && jo(y, E), R;
    if ($ === null) {
      for (; E < S.length; E++) $ = m(y, S[E], C), $ !== null && (h = i($, h, E), k === null ? R = $ : k.sibling = $, k = $);
      return ct && jo(y, E), R;
    }
    for ($ = r(y, $); E < S.length; E++) A = f($, y, E, S[E], C), A !== null && (e && A.alternate !== null && $.delete(A.key === null ? E : A.key), h = i(A, h, E), k === null ? R = A : k.sibling = A, k = A);
    return e && $.forEach(function(M) {
      return t(y, M);
    }), ct && jo(y, E), R;
  }
  function b(y, h, S, C) {
    var R = fs(S);
    if (typeof R != "function") throw Error(X(150));
    if (S = R.call(S), S == null) throw Error(X(151));
    for (var k = R = null, $ = h, E = h = 0, A = null, z = S.next(); $ !== null && !z.done; E++, z = S.next()) {
      $.index > E ? (A = $, $ = null) : A = $.sibling;
      var M = x(y, $, z.value, C);
      if (M === null) {
        $ === null && ($ = A);
        break;
      }
      e && $ && M.alternate === null && t(y, $), h = i(M, h, E), k === null ? R = M : k.sibling = M, k = M, $ = A;
    }
    if (z.done) return n(
      y,
      $
    ), ct && jo(y, E), R;
    if ($ === null) {
      for (; !z.done; E++, z = S.next()) z = m(y, z.value, C), z !== null && (h = i(z, h, E), k === null ? R = z : k.sibling = z, k = z);
      return ct && jo(y, E), R;
    }
    for ($ = r(y, $); !z.done; E++, z = S.next()) z = f($, y, E, z.value, C), z !== null && (e && z.alternate !== null && $.delete(z.key === null ? E : z.key), h = i(z, h, E), k === null ? R = z : k.sibling = z, k = z);
    return e && $.forEach(function(c) {
      return t(y, c);
    }), ct && jo(y, E), R;
  }
  function w(y, h, S, C) {
    if (typeof S == "object" && S !== null && S.type === vi && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Va:
          e: {
            for (var R = S.key, k = h; k !== null; ) {
              if (k.key === R) {
                if (R = S.type, R === vi) {
                  if (k.tag === 7) {
                    n(y, k.sibling), h = o(k, S.props.children), h.return = y, y = h;
                    break e;
                  }
                } else if (k.elementType === R || typeof R == "object" && R !== null && R.$$typeof === Vr && bh(R) === k.type) {
                  n(y, k.sibling), h = o(k, S.props), h.ref = ys(y, k, S), h.return = y, y = h;
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            S.type === vi ? (h = _o(S.props.children, y.mode, C, S.key), h.return = y, y = h) : (C = Bl(S.type, S.key, S.props, null, y.mode, C), C.ref = ys(y, h, S), C.return = y, y = C);
          }
          return s(y);
        case yi:
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
            h = ad(S, y.mode, C), h.return = y, y = h;
          }
          return s(y);
        case Vr:
          return k = S._init, w(y, h, k(S._payload), C);
      }
      if (Ms(S)) return v(y, h, S, C);
      if (fs(S)) return b(y, h, S, C);
      nl(y, S);
    }
    return typeof S == "string" && S !== "" || typeof S == "number" ? (S = "" + S, h !== null && h.tag === 6 ? (n(y, h.sibling), h = o(h, S), h.return = y, y = h) : (n(y, h), h = sd(S, y.mode, C), h.return = y, y = h), s(y)) : n(y, h);
  }
  return w;
}
var Hi = ev(!0), tv = ev(!1), ic = ho(null), sc = null, Ri = null, vp = null;
function xp() {
  vp = Ri = sc = null;
}
function Sp(e) {
  var t = ic.current;
  ot(ic), e._currentValue = t;
}
function ef(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Ni(e, t) {
  sc = e, vp = Ri = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (an = !0), e.firstContext = null);
}
function Dn(e) {
  var t = e._currentValue;
  if (vp !== e) if (e = { context: e, memoizedValue: t, next: null }, Ri === null) {
    if (sc === null) throw Error(X(308));
    Ri = e, sc.dependencies = { lanes: 0, firstContext: e };
  } else Ri = Ri.next = e;
  return t;
}
var Lo = null;
function bp(e) {
  Lo === null ? Lo = [e] : Lo.push(e);
}
function nv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, bp(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Lr(e, r);
}
function Lr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Kr = !1;
function Cp(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function rv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Or(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function no(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Le & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Lr(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, bp(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Lr(e, n);
}
function jl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ap(e, n);
  }
}
function Ch(e, t) {
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
function ac(e, t, n, r) {
  var o = e.updateQueue;
  Kr = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a, d = l.next;
    l.next = null, s === null ? i = d : s.next = d, s = l;
    var p = e.alternate;
    p !== null && (p = p.updateQueue, a = p.lastBaseUpdate, a !== s && (a === null ? p.firstBaseUpdate = d : a.next = d, p.lastBaseUpdate = l));
  }
  if (i !== null) {
    var m = o.baseState;
    s = 0, p = d = l = null, a = i;
    do {
      var x = a.lane, f = a.eventTime;
      if ((r & x) === x) {
        p !== null && (p = p.next = {
          eventTime: f,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var v = e, b = a;
          switch (x = t, f = n, b.tag) {
            case 1:
              if (v = b.payload, typeof v == "function") {
                m = v.call(f, m, x);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = b.payload, x = typeof v == "function" ? v.call(f, m, x) : v, x == null) break e;
              m = yt({}, m, x);
              break e;
            case 2:
              Kr = !0;
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, x = o.effects, x === null ? o.effects = [a] : x.push(a));
      } else f = { eventTime: f, lane: x, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, p === null ? (d = p = f, l = m) : p = p.next = f, s |= x;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        x = a, a = x.next, x.next = null, o.lastBaseUpdate = x, o.shared.pending = null;
      }
    } while (!0);
    if (p === null && (l = m), o.baseState = l, o.firstBaseUpdate = d, o.lastBaseUpdate = p, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Yo |= s, e.lanes = s, e.memoizedState = m;
  }
}
function wh(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(X(191, o));
      o.call(r);
    }
  }
}
var Ma = {}, Sr = ho(Ma), ca = ho(Ma), ua = ho(Ma);
function Bo(e) {
  if (e === Ma) throw Error(X(174));
  return e;
}
function wp(e, t) {
  switch (et(ua, t), et(ca, e), et(Sr, Ma), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Od(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Od(t, e);
  }
  ot(Sr), et(Sr, t);
}
function Vi() {
  ot(Sr), ot(ca), ot(ua);
}
function ov(e) {
  Bo(ua.current);
  var t = Bo(Sr.current), n = Od(t, e.type);
  t !== n && (et(ca, e), et(Sr, n));
}
function kp(e) {
  ca.current === e && (ot(Sr), ot(ca));
}
var pt = ho(0);
function lc(e) {
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
var ed = [];
function Tp() {
  for (var e = 0; e < ed.length; e++) ed[e]._workInProgressVersionPrimary = null;
  ed.length = 0;
}
var Al = _r.ReactCurrentDispatcher, td = _r.ReactCurrentBatchConfig, Ko = 0, mt = null, $t = null, At = null, cc = !1, Ws = !1, da = 0, nC = 0;
function Ht() {
  throw Error(X(321));
}
function Rp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nr(e[n], t[n])) return !1;
  return !0;
}
function Ep(e, t, n, r, o, i) {
  if (Ko = i, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Al.current = e === null || e.memoizedState === null ? sC : aC, e = n(r, o), Ws) {
    i = 0;
    do {
      if (Ws = !1, da = 0, 25 <= i) throw Error(X(301));
      i += 1, At = $t = null, t.updateQueue = null, Al.current = lC, e = n(r, o);
    } while (Ws);
  }
  if (Al.current = uc, t = $t !== null && $t.next !== null, Ko = 0, At = $t = mt = null, cc = !1, t) throw Error(X(300));
  return e;
}
function Pp() {
  var e = da !== 0;
  return da = 0, e;
}
function fr() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return At === null ? mt.memoizedState = At = e : At = At.next = e, At;
}
function _n() {
  if ($t === null) {
    var e = mt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = $t.next;
  var t = At === null ? mt.memoizedState : At.next;
  if (t !== null) At = t, $t = e;
  else {
    if (e === null) throw Error(X(310));
    $t = e, e = { memoizedState: $t.memoizedState, baseState: $t.baseState, baseQueue: $t.baseQueue, queue: $t.queue, next: null }, At === null ? mt.memoizedState = At = e : At = At.next = e;
  }
  return At;
}
function fa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nd(e) {
  var t = _n(), n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = $t, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null, l = null, d = i;
    do {
      var p = d.lane;
      if ((Ko & p) === p) l !== null && (l = l.next = { lane: 0, action: d.action, hasEagerState: d.hasEagerState, eagerState: d.eagerState, next: null }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
      else {
        var m = {
          lane: p,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null
        };
        l === null ? (a = l = m, s = r) : l = l.next = m, mt.lanes |= p, Yo |= p;
      }
      d = d.next;
    } while (d !== null && d !== i);
    l === null ? s = r : l.next = a, nr(r, t.memoizedState) || (an = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, mt.lanes |= i, Yo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function rd(e) {
  var t = _n(), n = t.queue;
  if (n === null) throw Error(X(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    nr(i, t.memoizedState) || (an = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function iv() {
}
function sv(e, t) {
  var n = mt, r = _n(), o = t(), i = !nr(r.memoizedState, o);
  if (i && (r.memoizedState = o, an = !0), r = r.queue, $p(cv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || At !== null && At.memoizedState.tag & 1) {
    if (n.flags |= 2048, pa(9, lv.bind(null, n, r, o, t), void 0, null), Ot === null) throw Error(X(349));
    Ko & 30 || av(n, t, o);
  }
  return o;
}
function av(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function lv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, uv(t) && dv(e);
}
function cv(e, t, n) {
  return n(function() {
    uv(t) && dv(e);
  });
}
function uv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nr(e, n);
  } catch {
    return !0;
  }
}
function dv(e) {
  var t = Lr(e, 1);
  t !== null && tr(t, e, 1, -1);
}
function kh(e) {
  var t = fr();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fa, lastRenderedState: e }, t.queue = e, e = e.dispatch = iC.bind(null, mt, e), [t.memoizedState, e];
}
function pa(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function fv() {
  return _n().memoizedState;
}
function Ol(e, t, n, r) {
  var o = fr();
  mt.flags |= e, o.memoizedState = pa(1 | t, n, void 0, r === void 0 ? null : r);
}
function Nc(e, t, n, r) {
  var o = _n();
  r = r === void 0 ? null : r;
  var i = void 0;
  if ($t !== null) {
    var s = $t.memoizedState;
    if (i = s.destroy, r !== null && Rp(r, s.deps)) {
      o.memoizedState = pa(t, n, i, r);
      return;
    }
  }
  mt.flags |= e, o.memoizedState = pa(1 | t, n, i, r);
}
function Th(e, t) {
  return Ol(8390656, 8, e, t);
}
function $p(e, t) {
  return Nc(2048, 8, e, t);
}
function pv(e, t) {
  return Nc(4, 2, e, t);
}
function mv(e, t) {
  return Nc(4, 4, e, t);
}
function hv(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function gv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Nc(4, 4, hv.bind(null, t, e), n);
}
function Ip() {
}
function yv(e, t) {
  var n = _n();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rp(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function vv(e, t) {
  var n = _n();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rp(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function xv(e, t, n) {
  return Ko & 21 ? (nr(n, t) || (n = k0(), mt.lanes |= n, Yo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, an = !0), e.memoizedState = n);
}
function rC(e, t) {
  var n = Ye;
  Ye = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = td.transition;
  td.transition = {};
  try {
    e(!1), t();
  } finally {
    Ye = n, td.transition = r;
  }
}
function Sv() {
  return _n().memoizedState;
}
function oC(e, t, n) {
  var r = oo(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, bv(e)) Cv(t, n);
  else if (n = nv(e, t, n, r), n !== null) {
    var o = en();
    tr(n, e, r, o), wv(n, t, r);
  }
}
function iC(e, t, n) {
  var r = oo(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (bv(e)) Cv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, nr(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, bp(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = nv(e, t, o, r), n !== null && (o = en(), tr(n, e, r, o), wv(n, t, r));
  }
}
function bv(e) {
  var t = e.alternate;
  return e === mt || t !== null && t === mt;
}
function Cv(e, t) {
  Ws = cc = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function wv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ap(e, n);
  }
}
var uc = { readContext: Dn, useCallback: Ht, useContext: Ht, useEffect: Ht, useImperativeHandle: Ht, useInsertionEffect: Ht, useLayoutEffect: Ht, useMemo: Ht, useReducer: Ht, useRef: Ht, useState: Ht, useDebugValue: Ht, useDeferredValue: Ht, useTransition: Ht, useMutableSource: Ht, useSyncExternalStore: Ht, useId: Ht, unstable_isNewReconciler: !1 }, sC = { readContext: Dn, useCallback: function(e, t) {
  return fr().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Dn, useEffect: Th, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ol(
    4194308,
    4,
    hv.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Ol(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Ol(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = fr();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = fr();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oC.bind(null, mt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = fr();
  return e = { current: e }, t.memoizedState = e;
}, useState: kh, useDebugValue: Ip, useDeferredValue: function(e) {
  return fr().memoizedState = e;
}, useTransition: function() {
  var e = kh(!1), t = e[0];
  return e = rC.bind(null, e[1]), fr().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = mt, o = fr();
  if (ct) {
    if (n === void 0) throw Error(X(407));
    n = n();
  } else {
    if (n = t(), Ot === null) throw Error(X(349));
    Ko & 30 || av(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Th(cv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, pa(9, lv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = fr(), t = Ot.identifierPrefix;
  if (ct) {
    var n = Ar, r = jr;
    n = (r & ~(1 << 32 - er(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = da++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nC++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, aC = {
  readContext: Dn,
  useCallback: yv,
  useContext: Dn,
  useEffect: $p,
  useImperativeHandle: gv,
  useInsertionEffect: pv,
  useLayoutEffect: mv,
  useMemo: vv,
  useReducer: nd,
  useRef: fv,
  useState: function() {
    return nd(fa);
  },
  useDebugValue: Ip,
  useDeferredValue: function(e) {
    var t = _n();
    return xv(t, $t.memoizedState, e);
  },
  useTransition: function() {
    var e = nd(fa)[0], t = _n().memoizedState;
    return [e, t];
  },
  useMutableSource: iv,
  useSyncExternalStore: sv,
  useId: Sv,
  unstable_isNewReconciler: !1
}, lC = { readContext: Dn, useCallback: yv, useContext: Dn, useEffect: $p, useImperativeHandle: gv, useInsertionEffect: pv, useLayoutEffect: mv, useMemo: vv, useReducer: rd, useRef: fv, useState: function() {
  return rd(fa);
}, useDebugValue: Ip, useDeferredValue: function(e) {
  var t = _n();
  return $t === null ? t.memoizedState = e : xv(t, $t.memoizedState, e);
}, useTransition: function() {
  var e = rd(fa)[0], t = _n().memoizedState;
  return [e, t];
}, useMutableSource: iv, useSyncExternalStore: sv, useId: Sv, unstable_isNewReconciler: !1 };
function Qn(e, t) {
  if (e && e.defaultProps) {
    t = yt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function tf(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : yt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Lc = { isMounted: function(e) {
  return (e = e._reactInternals) ? Zo(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = en(), o = oo(e), i = Or(r, o);
  i.payload = t, n != null && (i.callback = n), t = no(e, i, o), t !== null && (tr(t, e, o, r), jl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = en(), o = oo(e), i = Or(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = no(e, i, o), t !== null && (tr(t, e, o, r), jl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = en(), r = oo(e), o = Or(n, r);
  o.tag = 2, t != null && (o.callback = t), t = no(e, o, r), t !== null && (tr(t, e, r, n), jl(t, e, r));
} };
function Rh(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !ia(n, r) || !ia(o, i) : !0;
}
function kv(e, t, n) {
  var r = !1, o = lo, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Dn(i) : (o = cn(t) ? Ho : Xt.current, r = t.contextTypes, i = (r = r != null) ? Wi(e, o) : lo), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Lc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Eh(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Lc.enqueueReplaceState(t, t.state, null);
}
function nf(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Cp(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Dn(i) : (i = cn(t) ? Ho : Xt.current, o.context = Wi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (tf(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Lc.enqueueReplaceState(o, o.state, null), ac(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ki(e, t) {
  try {
    var n = "", r = t;
    do
      n += NS(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function od(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function rf(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var cC = typeof WeakMap == "function" ? WeakMap : Map;
function Tv(e, t, n) {
  n = Or(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fc || (fc = !0, mf = r), rf(e, t);
  }, n;
}
function Rv(e, t, n) {
  n = Or(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      rf(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    rf(e, t), typeof r != "function" && (ro === null ? ro = /* @__PURE__ */ new Set([this]) : ro.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Ph(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new cC();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = wC.bind(null, e, t, n), t.then(e, e));
}
function $h(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ih(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Or(-1, 1), t.tag = 2, no(n, t, 1))), n.lanes |= 1), e);
}
var uC = _r.ReactCurrentOwner, an = !1;
function Zt(e, t, n, r) {
  t.child = e === null ? tv(t, null, n, r) : Hi(t, e.child, n, r);
}
function Mh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Ni(t, o), r = Ep(e, t, n, r, i, o), n = Pp(), e !== null && !an ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Br(e, t, o)) : (ct && n && hp(t), t.flags |= 1, Zt(e, t, r, o), t.child);
}
function jh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Bp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ev(e, t, i, r, o)) : (e = Bl(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ia, n(s, r) && e.ref === t.ref) return Br(e, t, o);
  }
  return t.flags |= 1, e = io(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ev(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ia(i, r) && e.ref === t.ref) if (an = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (an = !0);
    else return t.lanes = e.lanes, Br(e, t, o);
  }
  return of(e, t, n, r, o);
}
function Pv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, et(Pi, gn), gn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, et(Pi, gn), gn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, et(Pi, gn), gn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, et(Pi, gn), gn |= r;
  return Zt(e, t, o, n), t.child;
}
function $v(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function of(e, t, n, r, o) {
  var i = cn(n) ? Ho : Xt.current;
  return i = Wi(t, i), Ni(t, o), n = Ep(e, t, n, r, i, o), r = Pp(), e !== null && !an ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Br(e, t, o)) : (ct && r && hp(t), t.flags |= 1, Zt(e, t, n, o), t.child);
}
function Ah(e, t, n, r, o) {
  if (cn(n)) {
    var i = !0;
    nc(t);
  } else i = !1;
  if (Ni(t, o), t.stateNode === null) zl(e, t), kv(t, n, r), nf(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, a = t.memoizedProps;
    s.props = a;
    var l = s.context, d = n.contextType;
    typeof d == "object" && d !== null ? d = Dn(d) : (d = cn(n) ? Ho : Xt.current, d = Wi(t, d));
    var p = n.getDerivedStateFromProps, m = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    m || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== d) && Eh(t, s, r, d), Kr = !1;
    var x = t.memoizedState;
    s.state = x, ac(t, r, s, o), l = t.memoizedState, a !== r || x !== l || ln.current || Kr ? (typeof p == "function" && (tf(t, n, p, r), l = t.memoizedState), (a = Kr || Rh(t, n, a, r, x, l, d)) ? (m || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = d, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, rv(e, t), a = t.memoizedProps, d = t.type === t.elementType ? a : Qn(t.type, a), s.props = d, m = t.pendingProps, x = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Dn(l) : (l = cn(n) ? Ho : Xt.current, l = Wi(t, l));
    var f = n.getDerivedStateFromProps;
    (p = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== m || x !== l) && Eh(t, s, r, l), Kr = !1, x = t.memoizedState, s.state = x, ac(t, r, s, o);
    var v = t.memoizedState;
    a !== m || x !== v || ln.current || Kr ? (typeof f == "function" && (tf(t, n, f, r), v = t.memoizedState), (d = Kr || Rh(t, n, d, r, x, v, l) || !1) ? (p || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, v, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, v, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), s.props = r, s.state = v, s.context = l, r = d) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return sf(e, t, n, r, i, o);
}
function sf(e, t, n, r, o, i) {
  $v(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && vh(t, n, !1), Br(e, t, i);
  r = t.stateNode, uC.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Hi(t, e.child, null, i), t.child = Hi(t, null, a, i)) : Zt(e, t, a, i), t.memoizedState = r.state, o && vh(t, n, !0), t.child;
}
function Iv(e) {
  var t = e.stateNode;
  t.pendingContext ? yh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && yh(e, t.context, !1), wp(e, t.containerInfo);
}
function Oh(e, t, n, r, o) {
  return Ui(), yp(o), t.flags |= 256, Zt(e, t, n, r), t.child;
}
var af = { dehydrated: null, treeContext: null, retryLane: 0 };
function lf(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mv(e, t, n) {
  var r = t.pendingProps, o = pt.current, i = !1, s = (t.flags & 128) !== 0, a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), et(pt, o & 1), e === null)
    return Jd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = Dc(s, r, 0, null), e = _o(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = lf(n), t.memoizedState = af, e) : Mp(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return dC(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = io(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = io(a, i) : (i = _o(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? lf(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = af, r;
  }
  return i = e.child, e = i.sibling, r = io(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Mp(e, t) {
  return t = Dc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function rl(e, t, n, r) {
  return r !== null && yp(r), Hi(t, e.child, null, n), e = Mp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dC(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = od(Error(X(422))), rl(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Dc({ mode: "visible", children: r.children }, o, 0, null), i = _o(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Hi(t, e.child, null, s), t.child.memoizedState = lf(s), t.memoizedState = af, i);
  if (!(t.mode & 1)) return rl(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(X(419)), r = od(i, r, void 0), rl(e, t, s, r);
  }
  if (a = (s & e.childLanes) !== 0, an || a) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Lr(e, o), tr(r, e, o, -1));
    }
    return Lp(), r = od(Error(X(421))), rl(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = kC.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, xn = to(o.nextSibling), Sn = t, ct = !0, Zn = null, e !== null && (jn[An++] = jr, jn[An++] = Ar, jn[An++] = Vo, jr = e.id, Ar = e.overflow, Vo = t), t = Mp(t, r.children), t.flags |= 4096, t);
}
function zh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ef(e.return, t, n);
}
function id(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function jv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Zt(e, t, r.children, n), r = pt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && zh(e, n, t);
      else if (e.tag === 19) zh(e, n, t);
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
  if (et(pt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && lc(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), id(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && lc(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      id(t, !0, n, null, i);
      break;
    case "together":
      id(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function zl(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Br(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Yo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(X(153));
  if (t.child !== null) {
    for (e = t.child, n = io(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = io(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fC(e, t, n) {
  switch (t.tag) {
    case 3:
      Iv(t), Ui();
      break;
    case 5:
      ov(t);
      break;
    case 1:
      cn(t.type) && nc(t);
      break;
    case 4:
      wp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      et(ic, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (et(pt, pt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mv(e, t, n) : (et(pt, pt.current & 1), e = Br(e, t, n), e !== null ? e.sibling : null);
      et(pt, pt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return jv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), et(pt, pt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Pv(e, t, n);
  }
  return Br(e, t, n);
}
var Av, cf, Ov, zv;
Av = function(e, t) {
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
cf = function() {
};
Ov = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Bo(Sr.current);
    var i = null;
    switch (n) {
      case "input":
        o = Id(e, o), r = Id(e, r), i = [];
        break;
      case "select":
        o = yt({}, o, { value: void 0 }), r = yt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Ad(e, o), r = Ad(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ec);
    }
    zd(n, r);
    var s;
    n = null;
    for (d in o) if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && o[d] != null) if (d === "style") {
      var a = o[d];
      for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Zs.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
    for (d in r) {
      var l = r[d];
      if (a = o != null ? o[d] : void 0, r.hasOwnProperty(d) && l !== a && (l != null || a != null)) if (d === "style") if (a) {
        for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (i || (i = []), i.push(
        d,
        n
      )), n = l;
      else d === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(d, l)) : d === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(d, "" + l) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Zs.hasOwnProperty(d) ? (l != null && d === "onScroll" && nt("scroll", e), i || a === l || (i = [])) : (i = i || []).push(d, l));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
zv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vs(e, t) {
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
function Vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function pC(e, t, n) {
  var r = t.pendingProps;
  switch (gp(t), t.tag) {
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
      return Vt(t), null;
    case 1:
      return cn(t.type) && tc(), Vt(t), null;
    case 3:
      return r = t.stateNode, Vi(), ot(ln), ot(Xt), Tp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (tl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Zn !== null && (yf(Zn), Zn = null))), cf(e, t), Vt(t), null;
    case 5:
      kp(t);
      var o = Bo(ua.current);
      if (n = t.type, e !== null && t.stateNode != null) Ov(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(X(166));
          return Vt(t), null;
        }
        if (e = Bo(Sr.current), tl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[hr] = t, r[la] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              nt("cancel", r), nt("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              nt("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < As.length; o++) nt(As[o], r);
              break;
            case "source":
              nt("error", r);
              break;
            case "img":
            case "image":
            case "link":
              nt(
                "error",
                r
              ), nt("load", r);
              break;
            case "details":
              nt("toggle", r);
              break;
            case "input":
              Hm(r, i), nt("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, nt("invalid", r);
              break;
            case "textarea":
              Km(r, i), nt("invalid", r);
          }
          zd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var a = i[s];
            s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && el(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && el(
              r.textContent,
              a,
              e
            ), o = ["children", "" + a]) : Zs.hasOwnProperty(s) && a != null && s === "onScroll" && nt("scroll", r);
          }
          switch (n) {
            case "input":
              Ka(r), Vm(r, i, !0);
              break;
            case "textarea":
              Ka(r), Ym(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ec);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = c0(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[hr] = t, e[la] = r, Av(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = Nd(n, r), n) {
              case "dialog":
                nt("cancel", e), nt("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                nt("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < As.length; o++) nt(As[o], e);
                o = r;
                break;
              case "source":
                nt("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                nt(
                  "error",
                  e
                ), nt("load", e), o = r;
                break;
              case "details":
                nt("toggle", e), o = r;
                break;
              case "input":
                Hm(e, r), o = Id(e, r), nt("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = yt({}, r, { value: void 0 }), nt("invalid", e);
                break;
              case "textarea":
                Km(e, r), o = Ad(e, r), nt("invalid", e);
                break;
              default:
                o = r;
            }
            zd(n, o), a = o;
            for (i in a) if (a.hasOwnProperty(i)) {
              var l = a[i];
              i === "style" ? f0(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && u0(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Js(e, l) : typeof l == "number" && Js(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Zs.hasOwnProperty(i) ? l != null && i === "onScroll" && nt("scroll", e) : l != null && tp(e, i, l, s));
            }
            switch (n) {
              case "input":
                Ka(e), Vm(e, r, !1);
                break;
              case "textarea":
                Ka(e), Ym(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ao(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ji(e, !!r.multiple, i, !1) : r.defaultValue != null && ji(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ec);
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
      return Vt(t), null;
    case 6:
      if (e && t.stateNode != null) zv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(X(166));
        if (n = Bo(ua.current), Bo(Sr.current), tl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[hr] = t, (i = r.nodeValue !== n) && (e = Sn, e !== null)) switch (e.tag) {
            case 3:
              el(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && el(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[hr] = t, t.stateNode = r;
      }
      return Vt(t), null;
    case 13:
      if (ot(pt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ct && xn !== null && t.mode & 1 && !(t.flags & 128)) J0(), Ui(), t.flags |= 98560, i = !1;
        else if (i = tl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(X(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(X(317));
            i[hr] = t;
          } else Ui(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Vt(t), i = !1;
        } else Zn !== null && (yf(Zn), Zn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pt.current & 1 ? It === 0 && (It = 3) : Lp())), t.updateQueue !== null && (t.flags |= 4), Vt(t), null);
    case 4:
      return Vi(), cf(e, t), e === null && sa(t.stateNode.containerInfo), Vt(t), null;
    case 10:
      return Sp(t.type._context), Vt(t), null;
    case 17:
      return cn(t.type) && tc(), Vt(t), null;
    case 19:
      if (ot(pt), i = t.memoizedState, i === null) return Vt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) vs(i, !1);
      else {
        if (It !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = lc(e), s !== null) {
            for (t.flags |= 128, vs(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return et(pt, pt.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && wt() > Yi && (t.flags |= 128, r = !0, vs(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = lc(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), vs(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ct) return Vt(t), null;
        } else 2 * wt() - i.renderingStartTime > Yi && n !== 1073741824 && (t.flags |= 128, r = !0, vs(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = wt(), t.sibling = null, n = pt.current, et(pt, r ? n & 1 | 2 : n & 1), t) : (Vt(t), null);
    case 22:
    case 23:
      return Np(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? gn & 1073741824 && (Vt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Vt(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(X(156, t.tag));
}
function mC(e, t) {
  switch (gp(t), t.tag) {
    case 1:
      return cn(t.type) && tc(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vi(), ot(ln), ot(Xt), Tp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return kp(t), null;
    case 13:
      if (ot(pt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(X(340));
        Ui();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ot(pt), null;
    case 4:
      return Vi(), null;
    case 10:
      return Sp(t.type._context), null;
    case 22:
    case 23:
      return Np(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ol = !1, Gt = !1, hC = typeof WeakSet == "function" ? WeakSet : Set, re = null;
function Ei(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    xt(e, t, r);
  }
  else n.current = null;
}
function uf(e, t, n) {
  try {
    n();
  } catch (r) {
    xt(e, t, r);
  }
}
var Nh = !1;
function gC(e, t) {
  if (Kd = ql, e = D0(), mp(e)) {
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
        var s = 0, a = -1, l = -1, d = 0, p = 0, m = e, x = null;
        t: for (; ; ) {
          for (var f; m !== n || o !== 0 && m.nodeType !== 3 || (a = s + o), m !== i || r !== 0 && m.nodeType !== 3 || (l = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (f = m.firstChild) !== null; )
            x = m, m = f;
          for (; ; ) {
            if (m === e) break t;
            if (x === n && ++d === o && (a = s), x === i && ++p === r && (l = s), (f = m.nextSibling) !== null) break;
            m = x, x = m.parentNode;
          }
          m = f;
        }
        n = a === -1 || l === -1 ? null : { start: a, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yd = { focusedElem: e, selectionRange: n }, ql = !1, re = t; re !== null; ) if (t = re, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, re = e;
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
            var b = v.memoizedProps, w = v.memoizedState, y = t.stateNode, h = y.getSnapshotBeforeUpdate(t.elementType === t.type ? b : Qn(t.type, b), w);
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
          throw Error(X(163));
      }
    } catch (C) {
      xt(t, t.return, C);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, re = e;
      break;
    }
    re = t.return;
  }
  return v = Nh, Nh = !1, v;
}
function Us(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && uf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Bc(e, t) {
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
function df(e) {
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
function Nv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Nv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[hr], delete t[la], delete t[Qd], delete t[Zb], delete t[Jb])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Lv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Lh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ff(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ec));
  else if (r !== 4 && (e = e.child, e !== null)) for (ff(e, t, n), e = e.sibling; e !== null; ) ff(e, t, n), e = e.sibling;
}
function pf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (pf(e, t, n), e = e.sibling; e !== null; ) pf(e, t, n), e = e.sibling;
}
var Ft = null, qn = !1;
function Hr(e, t, n) {
  for (n = n.child; n !== null; ) Bv(e, t, n), n = n.sibling;
}
function Bv(e, t, n) {
  if (xr && typeof xr.onCommitFiberUnmount == "function") try {
    xr.onCommitFiberUnmount(Ic, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Gt || Ei(n, t);
    case 6:
      var r = Ft, o = qn;
      Ft = null, Hr(e, t, n), Ft = r, qn = o, Ft !== null && (qn ? (e = Ft, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ft.removeChild(n.stateNode));
      break;
    case 18:
      Ft !== null && (qn ? (e = Ft, n = n.stateNode, e.nodeType === 8 ? Zu(e.parentNode, n) : e.nodeType === 1 && Zu(e, n), ra(e)) : Zu(Ft, n.stateNode));
      break;
    case 4:
      r = Ft, o = qn, Ft = n.stateNode.containerInfo, qn = !0, Hr(e, t, n), Ft = r, qn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Gt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && uf(n, t, s), o = o.next;
        } while (o !== r);
      }
      Hr(e, t, n);
      break;
    case 1:
      if (!Gt && (Ei(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (a) {
        xt(n, t, a);
      }
      Hr(e, t, n);
      break;
    case 21:
      Hr(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Gt = (r = Gt) || n.memoizedState !== null, Hr(e, t, n), Gt = r) : Hr(e, t, n);
      break;
    default:
      Hr(e, t, n);
  }
}
function Bh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hC()), t.forEach(function(r) {
      var o = TC.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Yn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, a = s;
      e: for (; a !== null; ) {
        switch (a.tag) {
          case 5:
            Ft = a.stateNode, qn = !1;
            break e;
          case 3:
            Ft = a.stateNode.containerInfo, qn = !0;
            break e;
          case 4:
            Ft = a.stateNode.containerInfo, qn = !0;
            break e;
        }
        a = a.return;
      }
      if (Ft === null) throw Error(X(160));
      Bv(i, s, o), Ft = null, qn = !1;
      var l = o.alternate;
      l !== null && (l.return = null), o.return = null;
    } catch (d) {
      xt(o, t, d);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Fv(t, e), t = t.sibling;
}
function Fv(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Yn(t, e), sr(e), r & 4) {
        try {
          Us(3, e, e.return), Bc(3, e);
        } catch (b) {
          xt(e, e.return, b);
        }
        try {
          Us(5, e, e.return);
        } catch (b) {
          xt(e, e.return, b);
        }
      }
      break;
    case 1:
      Yn(t, e), sr(e), r & 512 && n !== null && Ei(n, n.return);
      break;
    case 5:
      if (Yn(t, e), sr(e), r & 512 && n !== null && Ei(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Js(o, "");
        } catch (b) {
          xt(e, e.return, b);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, a = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && a0(o, i), Nd(a, s);
          var d = Nd(a, i);
          for (s = 0; s < l.length; s += 2) {
            var p = l[s], m = l[s + 1];
            p === "style" ? f0(o, m) : p === "dangerouslySetInnerHTML" ? u0(o, m) : p === "children" ? Js(o, m) : tp(o, p, m, d);
          }
          switch (a) {
            case "input":
              Md(o, i);
              break;
            case "textarea":
              l0(o, i);
              break;
            case "select":
              var x = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? ji(o, !!i.multiple, f, !1) : x !== !!i.multiple && (i.defaultValue != null ? ji(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ji(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[la] = i;
        } catch (b) {
          xt(e, e.return, b);
        }
      }
      break;
    case 6:
      if (Yn(t, e), sr(e), r & 4) {
        if (e.stateNode === null) throw Error(X(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (b) {
          xt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (Yn(t, e), sr(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        ra(t.containerInfo);
      } catch (b) {
        xt(e, e.return, b);
      }
      break;
    case 4:
      Yn(t, e), sr(e);
      break;
    case 13:
      Yn(t, e), sr(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Op = wt())), r & 4 && Bh(e);
      break;
    case 22:
      if (p = n !== null && n.memoizedState !== null, e.mode & 1 ? (Gt = (d = Gt) || p, Yn(t, e), Gt = d) : Yn(t, e), sr(e), r & 8192) {
        if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !p && e.mode & 1) for (re = e, p = e.child; p !== null; ) {
          for (m = re = p; re !== null; ) {
            switch (x = re, f = x.child, x.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Us(4, x, x.return);
                break;
              case 1:
                Ei(x, x.return);
                var v = x.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = x, n = x.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (b) {
                    xt(r, n, b);
                  }
                }
                break;
              case 5:
                Ei(x, x.return);
                break;
              case 22:
                if (x.memoizedState !== null) {
                  Dh(m);
                  continue;
                }
            }
            f !== null ? (f.return = x, re = f) : Dh(m);
          }
          p = p.sibling;
        }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                o = m.stateNode, d ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = m.stateNode, l = m.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = d0("display", s));
              } catch (b) {
                xt(e, e.return, b);
              }
            }
          } else if (m.tag === 6) {
            if (p === null) try {
              m.stateNode.nodeValue = d ? "" : m.memoizedProps;
            } catch (b) {
              xt(e, e.return, b);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), m = m.return;
          }
          p === m && (p = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Yn(t, e), sr(e), r & 4 && Bh(e);
      break;
    case 21:
      break;
    default:
      Yn(
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
          if (Lv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(X(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Js(o, ""), r.flags &= -33);
          var i = Lh(e);
          pf(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, a = Lh(e);
          ff(e, a, s);
          break;
        default:
          throw Error(X(161));
      }
    } catch (l) {
      xt(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yC(e, t, n) {
  re = e, Dv(e);
}
function Dv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; re !== null; ) {
    var o = re, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ol;
      if (!s) {
        var a = o.alternate, l = a !== null && a.memoizedState !== null || Gt;
        a = ol;
        var d = Gt;
        if (ol = s, (Gt = l) && !d) for (re = o; re !== null; ) s = re, l = s.child, s.tag === 22 && s.memoizedState !== null ? _h(o) : l !== null ? (l.return = s, re = l) : _h(o);
        for (; i !== null; ) re = i, Dv(i), i = i.sibling;
        re = o, ol = a, Gt = d;
      }
      Fh(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, re = i) : Fh(e);
  }
}
function Fh(e) {
  for (; re !== null; ) {
    var t = re;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Gt || Bc(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Gt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Qn(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && wh(t, i, r);
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
              wh(t, s, n);
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src);
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
              var d = t.alternate;
              if (d !== null) {
                var p = d.memoizedState;
                if (p !== null) {
                  var m = p.dehydrated;
                  m !== null && ra(m);
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
            throw Error(X(163));
        }
        Gt || t.flags & 512 && df(t);
      } catch (x) {
        xt(t, t.return, x);
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
function Dh(e) {
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
function _h(e) {
  for (; re !== null; ) {
    var t = re;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Bc(4, t);
          } catch (l) {
            xt(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              xt(t, o, l);
            }
          }
          var i = t.return;
          try {
            df(t);
          } catch (l) {
            xt(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            df(t);
          } catch (l) {
            xt(t, s, l);
          }
      }
    } catch (l) {
      xt(t, t.return, l);
    }
    if (t === e) {
      re = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, re = a;
      break;
    }
    re = t.return;
  }
}
var vC = Math.ceil, dc = _r.ReactCurrentDispatcher, jp = _r.ReactCurrentOwner, Bn = _r.ReactCurrentBatchConfig, Le = 0, Ot = null, Pt = null, _t = 0, gn = 0, Pi = ho(0), It = 0, ma = null, Yo = 0, Fc = 0, Ap = 0, Hs = null, sn = null, Op = 0, Yi = 1 / 0, Ir = null, fc = !1, mf = null, ro = null, il = !1, Qr = null, pc = 0, Vs = 0, hf = null, Nl = -1, Ll = 0;
function en() {
  return Le & 6 ? wt() : Nl !== -1 ? Nl : Nl = wt();
}
function oo(e) {
  return e.mode & 1 ? Le & 2 && _t !== 0 ? _t & -_t : tC.transition !== null ? (Ll === 0 && (Ll = k0()), Ll) : (e = Ye, e !== 0 || (e = window.event, e = e === void 0 ? 16 : M0(e.type)), e) : 1;
}
function tr(e, t, n, r) {
  if (50 < Vs) throw Vs = 0, hf = null, Error(X(185));
  Pa(e, n, r), (!(Le & 2) || e !== Ot) && (e === Ot && (!(Le & 2) && (Fc |= n), It === 4 && Gr(e, _t)), un(e, r), n === 1 && Le === 0 && !(t.mode & 1) && (Yi = wt() + 500, zc && go()));
}
function un(e, t) {
  var n = e.callbackNode;
  tb(e, t);
  var r = Ql(e, e === Ot ? _t : 0);
  if (r === 0) n !== null && Qm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Qm(n), t === 1) e.tag === 0 ? eC(Wh.bind(null, e)) : Q0(Wh.bind(null, e)), Qb(function() {
      !(Le & 6) && go();
    }), n = null;
    else {
      switch (T0(r)) {
        case 1:
          n = sp;
          break;
        case 4:
          n = C0;
          break;
        case 16:
          n = Xl;
          break;
        case 536870912:
          n = w0;
          break;
        default:
          n = Xl;
      }
      n = Gv(n, _v.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function _v(e, t) {
  if (Nl = -1, Ll = 0, Le & 6) throw Error(X(327));
  var n = e.callbackNode;
  if (Li() && e.callbackNode !== n) return null;
  var r = Ql(e, e === Ot ? _t : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = mc(e, r);
  else {
    t = r;
    var o = Le;
    Le |= 2;
    var i = Uv();
    (Ot !== e || _t !== t) && (Ir = null, Yi = wt() + 500, Do(e, t));
    do
      try {
        bC();
        break;
      } catch (a) {
        Wv(e, a);
      }
    while (!0);
    xp(), dc.current = i, Le = o, Pt !== null ? t = 0 : (Ot = null, _t = 0, t = It);
  }
  if (t !== 0) {
    if (t === 2 && (o = _d(e), o !== 0 && (r = o, t = gf(e, o))), t === 1) throw n = ma, Do(e, 0), Gr(e, r), un(e, wt()), n;
    if (t === 6) Gr(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !xC(o) && (t = mc(e, r), t === 2 && (i = _d(e), i !== 0 && (r = i, t = gf(e, i))), t === 1)) throw n = ma, Do(e, 0), Gr(e, r), un(e, wt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(X(345));
        case 2:
          Ao(e, sn, Ir);
          break;
        case 3:
          if (Gr(e, r), (r & 130023424) === r && (t = Op + 500 - wt(), 10 < t)) {
            if (Ql(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              en(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Xd(Ao.bind(null, e, sn, Ir), t);
            break;
          }
          Ao(e, sn, Ir);
          break;
        case 4:
          if (Gr(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - er(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = wt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vC(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Xd(Ao.bind(null, e, sn, Ir), r);
            break;
          }
          Ao(e, sn, Ir);
          break;
        case 5:
          Ao(e, sn, Ir);
          break;
        default:
          throw Error(X(329));
      }
    }
  }
  return un(e, wt()), e.callbackNode === n ? _v.bind(null, e) : null;
}
function gf(e, t) {
  var n = Hs;
  return e.current.memoizedState.isDehydrated && (Do(e, t).flags |= 256), e = mc(e, t), e !== 2 && (t = sn, sn = n, t !== null && yf(t)), e;
}
function yf(e) {
  sn === null ? sn = e : sn.push.apply(sn, e);
}
function xC(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!nr(i(), o)) return !1;
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
function Gr(e, t) {
  for (t &= ~Ap, t &= ~Fc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - er(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Wh(e) {
  if (Le & 6) throw Error(X(327));
  Li();
  var t = Ql(e, 0);
  if (!(t & 1)) return un(e, wt()), null;
  var n = mc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _d(e);
    r !== 0 && (t = r, n = gf(e, r));
  }
  if (n === 1) throw n = ma, Do(e, 0), Gr(e, t), un(e, wt()), n;
  if (n === 6) throw Error(X(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ao(e, sn, Ir), un(e, wt()), null;
}
function zp(e, t) {
  var n = Le;
  Le |= 1;
  try {
    return e(t);
  } finally {
    Le = n, Le === 0 && (Yi = wt() + 500, zc && go());
  }
}
function Go(e) {
  Qr !== null && Qr.tag === 0 && !(Le & 6) && Li();
  var t = Le;
  Le |= 1;
  var n = Bn.transition, r = Ye;
  try {
    if (Bn.transition = null, Ye = 1, e) return e();
  } finally {
    Ye = r, Bn.transition = n, Le = t, !(Le & 6) && go();
  }
}
function Np() {
  gn = Pi.current, ot(Pi);
}
function Do(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Xb(n)), Pt !== null) for (n = Pt.return; n !== null; ) {
    var r = n;
    switch (gp(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && tc();
        break;
      case 3:
        Vi(), ot(ln), ot(Xt), Tp();
        break;
      case 5:
        kp(r);
        break;
      case 4:
        Vi();
        break;
      case 13:
        ot(pt);
        break;
      case 19:
        ot(pt);
        break;
      case 10:
        Sp(r.type._context);
        break;
      case 22:
      case 23:
        Np();
    }
    n = n.return;
  }
  if (Ot = e, Pt = e = io(e.current, null), _t = gn = t, It = 0, ma = null, Ap = Fc = Yo = 0, sn = Hs = null, Lo !== null) {
    for (t = 0; t < Lo.length; t++) if (n = Lo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Lo = null;
  }
  return e;
}
function Wv(e, t) {
  do {
    var n = Pt;
    try {
      if (xp(), Al.current = uc, cc) {
        for (var r = mt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        cc = !1;
      }
      if (Ko = 0, At = $t = mt = null, Ws = !1, da = 0, jp.current = null, n === null || n.return === null) {
        It = 1, ma = t, Pt = null;
        break;
      }
      e: {
        var i = e, s = n.return, a = n, l = t;
        if (t = _t, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var d = l, p = a, m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var x = p.alternate;
            x ? (p.updateQueue = x.updateQueue, p.memoizedState = x.memoizedState, p.lanes = x.lanes) : (p.updateQueue = null, p.memoizedState = null);
          }
          var f = $h(s);
          if (f !== null) {
            f.flags &= -257, Ih(f, s, a, i, t), f.mode & 1 && Ph(i, d, t), t = f, l = d;
            var v = t.updateQueue;
            if (v === null) {
              var b = /* @__PURE__ */ new Set();
              b.add(l), t.updateQueue = b;
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Ph(i, d, t), Lp();
              break e;
            }
            l = Error(X(426));
          }
        } else if (ct && a.mode & 1) {
          var w = $h(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256), Ih(w, s, a, i, t), yp(Ki(l, a));
            break e;
          }
        }
        i = l = Ki(l, a), It !== 4 && (It = 2), Hs === null ? Hs = [i] : Hs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var y = Tv(i, l, t);
              Ch(i, y);
              break e;
            case 1:
              a = l;
              var h = i.type, S = i.stateNode;
              if (!(i.flags & 128) && (typeof h.getDerivedStateFromError == "function" || S !== null && typeof S.componentDidCatch == "function" && (ro === null || !ro.has(S)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var C = Rv(i, a, t);
                Ch(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Vv(n);
    } catch (R) {
      t = R, Pt === n && n !== null && (Pt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uv() {
  var e = dc.current;
  return dc.current = uc, e === null ? uc : e;
}
function Lp() {
  (It === 0 || It === 3 || It === 2) && (It = 4), Ot === null || !(Yo & 268435455) && !(Fc & 268435455) || Gr(Ot, _t);
}
function mc(e, t) {
  var n = Le;
  Le |= 2;
  var r = Uv();
  (Ot !== e || _t !== t) && (Ir = null, Do(e, t));
  do
    try {
      SC();
      break;
    } catch (o) {
      Wv(e, o);
    }
  while (!0);
  if (xp(), Le = n, dc.current = r, Pt !== null) throw Error(X(261));
  return Ot = null, _t = 0, It;
}
function SC() {
  for (; Pt !== null; ) Hv(Pt);
}
function bC() {
  for (; Pt !== null && !KS(); ) Hv(Pt);
}
function Hv(e) {
  var t = Yv(e.alternate, e, gn);
  e.memoizedProps = e.pendingProps, t === null ? Vv(e) : Pt = t, jp.current = null;
}
function Vv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = mC(n, t), n !== null) {
        n.flags &= 32767, Pt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        It = 6, Pt = null;
        return;
      }
    } else if (n = pC(n, t, gn), n !== null) {
      Pt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Pt = t;
      return;
    }
    Pt = t = e;
  } while (t !== null);
  It === 0 && (It = 5);
}
function Ao(e, t, n) {
  var r = Ye, o = Bn.transition;
  try {
    Bn.transition = null, Ye = 1, CC(e, t, n, r);
  } finally {
    Bn.transition = o, Ye = r;
  }
  return null;
}
function CC(e, t, n, r) {
  do
    Li();
  while (Qr !== null);
  if (Le & 6) throw Error(X(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(X(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (nb(e, i), e === Ot && (Pt = Ot = null, _t = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || il || (il = !0, Gv(Xl, function() {
    return Li(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Bn.transition, Bn.transition = null;
    var s = Ye;
    Ye = 1;
    var a = Le;
    Le |= 4, jp.current = null, gC(e, n), Fv(n, e), Wb(Yd), ql = !!Kd, Yd = Kd = null, e.current = n, yC(n), YS(), Le = a, Ye = s, Bn.transition = i;
  } else e.current = n;
  if (il && (il = !1, Qr = e, pc = o), i = e.pendingLanes, i === 0 && (ro = null), QS(n.stateNode), un(e, wt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (fc) throw fc = !1, e = mf, mf = null, e;
  return pc & 1 && e.tag !== 0 && Li(), i = e.pendingLanes, i & 1 ? e === hf ? Vs++ : (Vs = 0, hf = e) : Vs = 0, go(), null;
}
function Li() {
  if (Qr !== null) {
    var e = T0(pc), t = Bn.transition, n = Ye;
    try {
      if (Bn.transition = null, Ye = 16 > e ? 16 : e, Qr === null) var r = !1;
      else {
        if (e = Qr, Qr = null, pc = 0, Le & 6) throw Error(X(331));
        var o = Le;
        for (Le |= 4, re = e.current; re !== null; ) {
          var i = re, s = i.child;
          if (re.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var d = a[l];
                for (re = d; re !== null; ) {
                  var p = re;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Us(8, p, i);
                  }
                  var m = p.child;
                  if (m !== null) m.return = p, re = m;
                  else for (; re !== null; ) {
                    p = re;
                    var x = p.sibling, f = p.return;
                    if (Nv(p), p === d) {
                      re = null;
                      break;
                    }
                    if (x !== null) {
                      x.return = f, re = x;
                      break;
                    }
                    re = f;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var b = v.child;
                if (b !== null) {
                  v.child = null;
                  do {
                    var w = b.sibling;
                    b.sibling = null, b = w;
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
                Us(9, i, i.return);
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, re = y;
              break e;
            }
            re = i.return;
          }
        }
        var h = e.current;
        for (re = h; re !== null; ) {
          s = re;
          var S = s.child;
          if (s.subtreeFlags & 2064 && S !== null) S.return = s, re = S;
          else e: for (s = h; re !== null; ) {
            if (a = re, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Bc(9, a);
              }
            } catch (R) {
              xt(a, a.return, R);
            }
            if (a === s) {
              re = null;
              break e;
            }
            var C = a.sibling;
            if (C !== null) {
              C.return = a.return, re = C;
              break e;
            }
            re = a.return;
          }
        }
        if (Le = o, go(), xr && typeof xr.onPostCommitFiberRoot == "function") try {
          xr.onPostCommitFiberRoot(Ic, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ye = n, Bn.transition = t;
    }
  }
  return !1;
}
function Uh(e, t, n) {
  t = Ki(n, t), t = Tv(e, t, 1), e = no(e, t, 1), t = en(), e !== null && (Pa(e, 1, t), un(e, t));
}
function xt(e, t, n) {
  if (e.tag === 3) Uh(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Uh(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ro === null || !ro.has(r))) {
        e = Ki(n, e), e = Rv(t, e, 1), t = no(t, e, 1), e = en(), t !== null && (Pa(t, 1, e), un(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function wC(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = en(), e.pingedLanes |= e.suspendedLanes & n, Ot === e && (_t & n) === n && (It === 4 || It === 3 && (_t & 130023424) === _t && 500 > wt() - Op ? Do(e, 0) : Ap |= n), un(e, t);
}
function Kv(e, t) {
  t === 0 && (e.mode & 1 ? (t = Xa, Xa <<= 1, !(Xa & 130023424) && (Xa = 4194304)) : t = 1);
  var n = en();
  e = Lr(e, t), e !== null && (Pa(e, t, n), un(e, n));
}
function kC(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Kv(e, n);
}
function TC(e, t) {
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
      throw Error(X(314));
  }
  r !== null && r.delete(t), Kv(e, n);
}
var Yv;
Yv = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ln.current) an = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return an = !1, fC(e, t, n);
    an = !!(e.flags & 131072);
  }
  else an = !1, ct && t.flags & 1048576 && q0(t, oc, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      zl(e, t), e = t.pendingProps;
      var o = Wi(t, Xt.current);
      Ni(t, n), o = Ep(null, t, r, e, o, n);
      var i = Pp();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, cn(r) ? (i = !0, nc(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Cp(t), o.updater = Lc, t.stateNode = o, o._reactInternals = t, nf(t, r, e, n), t = sf(null, t, r, !0, i, n)) : (t.tag = 0, ct && i && hp(t), Zt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (zl(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = EC(r), e = Qn(r, e), o) {
          case 0:
            t = of(null, t, r, e, n);
            break e;
          case 1:
            t = Ah(null, t, r, e, n);
            break e;
          case 11:
            t = Mh(null, t, r, e, n);
            break e;
          case 14:
            t = jh(null, t, r, Qn(r.type, e), n);
            break e;
        }
        throw Error(X(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qn(r, o), of(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qn(r, o), Ah(e, t, r, o, n);
    case 3:
      e: {
        if (Iv(t), e === null) throw Error(X(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, rv(e, t), ac(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ki(Error(X(423)), t), t = Oh(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ki(Error(X(424)), t), t = Oh(e, t, r, n, o);
          break e;
        } else for (xn = to(t.stateNode.containerInfo.firstChild), Sn = t, ct = !0, Zn = null, n = tv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ui(), r === o) {
            t = Br(e, t, n);
            break e;
          }
          Zt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return ov(t), e === null && Jd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Gd(r, o) ? s = null : i !== null && Gd(r, i) && (t.flags |= 32), $v(e, t), Zt(e, t, s, n), t.child;
    case 6:
      return e === null && Jd(t), null;
    case 13:
      return Mv(e, t, n);
    case 4:
      return wp(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Hi(t, null, r, n) : Zt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qn(r, o), Mh(e, t, r, o, n);
    case 7:
      return Zt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Zt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Zt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, et(ic, r._currentValue), r._currentValue = s, i !== null) if (nr(i.value, s)) {
          if (i.children === o.children && !ln.current) {
            t = Br(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var a = i.dependencies;
          if (a !== null) {
            s = i.child;
            for (var l = a.firstContext; l !== null; ) {
              if (l.context === r) {
                if (i.tag === 1) {
                  l = Or(-1, n & -n), l.tag = 2;
                  var d = i.updateQueue;
                  if (d !== null) {
                    d = d.shared;
                    var p = d.pending;
                    p === null ? l.next = l : (l.next = p.next, p.next = l), d.pending = l;
                  }
                }
                i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), ef(
                  i.return,
                  n,
                  t
                ), a.lanes |= n;
                break;
              }
              l = l.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(X(341));
            s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), ef(s, n, t), s = i.sibling;
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
        Zt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, Ni(t, n), o = Dn(o), r = r(o), t.flags |= 1, Zt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Qn(r, t.pendingProps), o = Qn(r.type, o), jh(e, t, r, o, n);
    case 15:
      return Ev(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Qn(r, o), zl(e, t), t.tag = 1, cn(r) ? (e = !0, nc(t)) : e = !1, Ni(t, n), kv(t, r, o), nf(t, r, o, n), sf(null, t, r, !0, e, n);
    case 19:
      return jv(e, t, n);
    case 22:
      return Pv(e, t, n);
  }
  throw Error(X(156, t.tag));
};
function Gv(e, t) {
  return b0(e, t);
}
function RC(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Nn(e, t, n, r) {
  return new RC(e, t, n, r);
}
function Bp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function EC(e) {
  if (typeof e == "function") return Bp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === rp) return 11;
    if (e === op) return 14;
  }
  return 2;
}
function io(e, t) {
  var n = e.alternate;
  return n === null ? (n = Nn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Bl(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Bp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case vi:
      return _o(n.children, o, i, t);
    case np:
      s = 8, o |= 8;
      break;
    case Rd:
      return e = Nn(12, n, t, o | 2), e.elementType = Rd, e.lanes = i, e;
    case Ed:
      return e = Nn(13, n, t, o), e.elementType = Ed, e.lanes = i, e;
    case Pd:
      return e = Nn(19, n, t, o), e.elementType = Pd, e.lanes = i, e;
    case o0:
      return Dc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case n0:
          s = 10;
          break e;
        case r0:
          s = 9;
          break e;
        case rp:
          s = 11;
          break e;
        case op:
          s = 14;
          break e;
        case Vr:
          s = 16, r = null;
          break e;
      }
      throw Error(X(130, e == null ? e : typeof e, ""));
  }
  return t = Nn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function _o(e, t, n, r) {
  return e = Nn(7, e, r, t), e.lanes = n, e;
}
function Dc(e, t, n, r) {
  return e = Nn(22, e, r, t), e.elementType = o0, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function sd(e, t, n) {
  return e = Nn(6, e, null, t), e.lanes = n, e;
}
function ad(e, t, n) {
  return t = Nn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function PC(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _u(0), this.expirationTimes = _u(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _u(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Fp(e, t, n, r, o, i, s, a, l) {
  return e = new PC(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Nn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Cp(i), e;
}
function $C(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: yi, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xv(e) {
  if (!e) return lo;
  e = e._reactInternals;
  e: {
    if (Zo(e) !== e || e.tag !== 1) throw Error(X(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (cn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(X(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (cn(n)) return X0(e, n, t);
  }
  return t;
}
function Qv(e, t, n, r, o, i, s, a, l) {
  return e = Fp(n, r, !0, e, o, i, s, a, l), e.context = Xv(null), n = e.current, r = en(), o = oo(n), i = Or(r, o), i.callback = t ?? null, no(n, i, o), e.current.lanes = o, Pa(e, o, r), un(e, r), e;
}
function _c(e, t, n, r) {
  var o = t.current, i = en(), s = oo(o);
  return n = Xv(n), t.context === null ? t.context = n : t.pendingContext = n, t = Or(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = no(o, t, s), e !== null && (tr(e, o, s, i), jl(e, o, s)), s;
}
function hc(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hh(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Dp(e, t) {
  Hh(e, t), (e = e.alternate) && Hh(e, t);
}
function IC() {
  return null;
}
var qv = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function _p(e) {
  this._internalRoot = e;
}
Wc.prototype.render = _p.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(X(409));
  _c(e, t, null, null);
};
Wc.prototype.unmount = _p.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Go(function() {
      _c(null, e, null, null);
    }), t[Nr] = null;
  }
};
function Wc(e) {
  this._internalRoot = e;
}
Wc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = P0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yr.length && t !== 0 && t < Yr[n].priority; n++) ;
    Yr.splice(n, 0, e), n === 0 && I0(e);
  }
};
function Wp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Uc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Vh() {
}
function MC(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var d = hc(s);
        i.call(d);
      };
    }
    var s = Qv(t, r, e, 0, null, !1, !1, "", Vh);
    return e._reactRootContainer = s, e[Nr] = s.current, sa(e.nodeType === 8 ? e.parentNode : e), Go(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var d = hc(l);
      a.call(d);
    };
  }
  var l = Fp(e, 0, !1, null, null, !1, !1, "", Vh);
  return e._reactRootContainer = l, e[Nr] = l.current, sa(e.nodeType === 8 ? e.parentNode : e), Go(function() {
    _c(t, l, n, r);
  }), l;
}
function Hc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = hc(s);
        a.call(l);
      };
    }
    _c(t, s, e, o);
  } else s = MC(n, t, e, o, r);
  return hc(s);
}
R0 = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = js(t.pendingLanes);
        n !== 0 && (ap(t, n | 1), un(t, wt()), !(Le & 6) && (Yi = wt() + 500, go()));
      }
      break;
    case 13:
      Go(function() {
        var r = Lr(e, 1);
        if (r !== null) {
          var o = en();
          tr(r, e, 1, o);
        }
      }), Dp(e, 1);
  }
};
lp = function(e) {
  if (e.tag === 13) {
    var t = Lr(e, 134217728);
    if (t !== null) {
      var n = en();
      tr(t, e, 134217728, n);
    }
    Dp(e, 134217728);
  }
};
E0 = function(e) {
  if (e.tag === 13) {
    var t = oo(e), n = Lr(e, t);
    if (n !== null) {
      var r = en();
      tr(n, e, t, r);
    }
    Dp(e, t);
  }
};
P0 = function() {
  return Ye;
};
$0 = function(e, t) {
  var n = Ye;
  try {
    return Ye = e, t();
  } finally {
    Ye = n;
  }
};
Bd = function(e, t, n) {
  switch (t) {
    case "input":
      if (Md(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Oc(r);
            if (!o) throw Error(X(90));
            s0(r), Md(r, o);
          }
        }
      }
      break;
    case "textarea":
      l0(e, n);
      break;
    case "select":
      t = n.value, t != null && ji(e, !!n.multiple, t, !1);
  }
};
h0 = zp;
g0 = Go;
var jC = { usingClientEntryPoint: !1, Events: [Ia, Ci, Oc, p0, m0, zp] }, xs = { findFiberByHostInstance: No, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, AC = { bundleType: xs.bundleType, version: xs.version, rendererPackageName: xs.rendererPackageName, rendererConfig: xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = x0(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xs.findFiberByHostInstance || IC, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var sl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!sl.isDisabled && sl.supportsFiber) try {
    Ic = sl.inject(AC), xr = sl;
  } catch {
  }
}
Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jC;
Tn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Wp(t)) throw Error(X(200));
  return $C(e, t, null, n);
};
Tn.createRoot = function(e, t) {
  if (!Wp(e)) throw Error(X(299));
  var n = !1, r = "", o = qv;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Fp(e, 1, !1, null, null, n, !1, r, o), e[Nr] = t.current, sa(e.nodeType === 8 ? e.parentNode : e), new _p(t);
};
Tn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(X(188)) : (e = Object.keys(e).join(","), Error(X(268, e)));
  return e = x0(t), e = e === null ? null : e.stateNode, e;
};
Tn.flushSync = function(e) {
  return Go(e);
};
Tn.hydrate = function(e, t, n) {
  if (!Uc(t)) throw Error(X(200));
  return Hc(null, e, t, !0, n);
};
Tn.hydrateRoot = function(e, t, n) {
  if (!Wp(e)) throw Error(X(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = qv;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Qv(t, null, e, 1, n ?? null, o, !1, i, s), e[Nr] = t.current, sa(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new Wc(t);
};
Tn.render = function(e, t, n) {
  if (!Uc(t)) throw Error(X(200));
  return Hc(null, e, t, !1, n);
};
Tn.unmountComponentAtNode = function(e) {
  if (!Uc(e)) throw Error(X(40));
  return e._reactRootContainer ? (Go(function() {
    Hc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Nr] = null;
    });
  }), !0) : !1;
};
Tn.unstable_batchedUpdates = zp;
Tn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Uc(n)) throw Error(X(200));
  if (e == null || e._reactInternals === void 0) throw Error(X(38));
  return Hc(e, t, n, !1, r);
};
Tn.version = "18.3.1-next-f1338f8080-20240426";
function Zv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zv);
    } catch (e) {
      console.error(e);
    }
}
Zv(), Zy.exports = Tn;
var Jv = Zy.exports, e1, Kh = Jv;
e1 = Kh.createRoot, Kh.hydrateRoot;
const ha = {
  black: "#000",
  white: "#fff"
}, oi = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, ii = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, si = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ai = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, li = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ss = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, OC = {
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
function wn(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const br = "$$material";
function vf() {
  return vf = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vf.apply(null, arguments);
}
function zC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function NC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var LC = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(NC(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = zC(o);
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
}(), Yt = "-ms-", gc = "-moz-", De = "-webkit-", t1 = "comm", Up = "rule", Hp = "decl", BC = "@import", n1 = "@keyframes", FC = "@layer", DC = Math.abs, Vc = String.fromCharCode, _C = Object.assign;
function WC(e, t) {
  return Dt(e, 0) ^ 45 ? (((t << 2 ^ Dt(e, 0)) << 2 ^ Dt(e, 1)) << 2 ^ Dt(e, 2)) << 2 ^ Dt(e, 3) : 0;
}
function r1(e) {
  return e.trim();
}
function UC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, n) {
  return e.replace(t, n);
}
function xf(e, t) {
  return e.indexOf(t);
}
function Dt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ga(e, t, n) {
  return e.slice(t, n);
}
function pr(e) {
  return e.length;
}
function Vp(e) {
  return e.length;
}
function al(e, t) {
  return t.push(e), e;
}
function HC(e, t) {
  return e.map(t).join("");
}
var Kc = 1, Gi = 1, o1 = 0, pn = 0, Et = 0, os = "";
function Yc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Kc, column: Gi, length: s, return: "" };
}
function bs(e, t) {
  return _C(Yc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function VC() {
  return Et;
}
function KC() {
  return Et = pn > 0 ? Dt(os, --pn) : 0, Gi--, Et === 10 && (Gi = 1, Kc--), Et;
}
function bn() {
  return Et = pn < o1 ? Dt(os, pn++) : 0, Gi++, Et === 10 && (Gi = 1, Kc++), Et;
}
function Cr() {
  return Dt(os, pn);
}
function Fl() {
  return pn;
}
function ja(e, t) {
  return ga(os, e, t);
}
function ya(e) {
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
function i1(e) {
  return Kc = Gi = 1, o1 = pr(os = e), pn = 0, [];
}
function s1(e) {
  return os = "", e;
}
function Dl(e) {
  return r1(ja(pn - 1, Sf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function YC(e) {
  for (; (Et = Cr()) && Et < 33; )
    bn();
  return ya(e) > 2 || ya(Et) > 3 ? "" : " ";
}
function GC(e, t) {
  for (; --t && bn() && !(Et < 48 || Et > 102 || Et > 57 && Et < 65 || Et > 70 && Et < 97); )
    ;
  return ja(e, Fl() + (t < 6 && Cr() == 32 && bn() == 32));
}
function Sf(e) {
  for (; bn(); )
    switch (Et) {
      case e:
        return pn;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sf(Et);
        break;
      case 40:
        e === 41 && Sf(e);
        break;
      case 92:
        bn();
        break;
    }
  return pn;
}
function XC(e, t) {
  for (; bn() && e + Et !== 57; )
    if (e + Et === 84 && Cr() === 47)
      break;
  return "/*" + ja(t, pn - 1) + "*" + Vc(e === 47 ? e : bn());
}
function QC(e) {
  for (; !ya(Cr()); )
    bn();
  return ja(e, pn);
}
function qC(e) {
  return s1(_l("", null, null, null, [""], e = i1(e), 0, [0], e));
}
function _l(e, t, n, r, o, i, s, a, l) {
  for (var d = 0, p = 0, m = s, x = 0, f = 0, v = 0, b = 1, w = 1, y = 1, h = 0, S = "", C = o, R = i, k = r, $ = S; w; )
    switch (v = h, h = bn()) {
      case 40:
        if (v != 108 && Dt($, m - 1) == 58) {
          xf($ += _e(Dl(h), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        $ += Dl(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        $ += YC(v);
        break;
      case 92:
        $ += GC(Fl() - 1, 7);
        continue;
      case 47:
        switch (Cr()) {
          case 42:
          case 47:
            al(ZC(XC(bn(), Fl()), t, n), l);
            break;
          default:
            $ += "/";
        }
        break;
      case 123 * b:
        a[d++] = pr($) * y;
      case 125 * b:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            w = 0;
          case 59 + p:
            y == -1 && ($ = _e($, /\f/g, "")), f > 0 && pr($) - m && al(f > 32 ? Gh($ + ";", r, n, m - 1) : Gh(_e($, " ", "") + ";", r, n, m - 2), l);
            break;
          case 59:
            $ += ";";
          default:
            if (al(k = Yh($, t, n, d, p, o, a, S, C = [], R = [], m), i), h === 123)
              if (p === 0)
                _l($, t, k, k, C, i, m, a, R);
              else
                switch (x === 99 && Dt($, 3) === 110 ? 100 : x) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _l(e, k, k, r && al(Yh(e, k, k, 0, 0, o, a, S, o, C = [], m), R), o, R, m, a, r ? C : R);
                    break;
                  default:
                    _l($, k, k, k, [""], R, 0, a, R);
                }
        }
        d = p = f = 0, b = y = 1, S = $ = "", m = s;
        break;
      case 58:
        m = 1 + pr($), f = v;
      default:
        if (b < 1) {
          if (h == 123)
            --b;
          else if (h == 125 && b++ == 0 && KC() == 125)
            continue;
        }
        switch ($ += Vc(h), h * b) {
          case 38:
            y = p > 0 ? 1 : ($ += "\f", -1);
            break;
          case 44:
            a[d++] = (pr($) - 1) * y, y = 1;
            break;
          case 64:
            Cr() === 45 && ($ += Dl(bn())), x = Cr(), p = m = pr(S = $ += QC(Fl())), h++;
            break;
          case 45:
            v === 45 && pr($) == 2 && (b = 0);
        }
    }
  return i;
}
function Yh(e, t, n, r, o, i, s, a, l, d, p) {
  for (var m = o - 1, x = o === 0 ? i : [""], f = Vp(x), v = 0, b = 0, w = 0; v < r; ++v)
    for (var y = 0, h = ga(e, m + 1, m = DC(b = s[v])), S = e; y < f; ++y)
      (S = r1(b > 0 ? x[y] + " " + h : _e(h, /&\f/g, x[y]))) && (l[w++] = S);
  return Yc(e, t, n, o === 0 ? Up : a, l, d, p);
}
function ZC(e, t, n) {
  return Yc(e, t, n, t1, Vc(VC()), ga(e, 2, -2), 0);
}
function Gh(e, t, n, r) {
  return Yc(e, t, n, Hp, ga(e, 0, r), ga(e, r + 1, -1), r);
}
function Bi(e, t) {
  for (var n = "", r = Vp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function JC(e, t, n, r) {
  switch (e.type) {
    case FC:
      if (e.children.length) break;
    case BC:
    case Hp:
      return e.return = e.return || e.value;
    case t1:
      return "";
    case n1:
      return e.return = e.value + "{" + Bi(e.children, r) + "}";
    case Up:
      e.value = e.props.join(",");
  }
  return pr(n = Bi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ew(e) {
  var t = Vp(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](n, r, o, i) || "";
    return s;
  };
}
function tw(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function a1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var nw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = Cr(), o === 38 && i === 12 && (n[r] = 1), !ya(i); )
    bn();
  return ja(t, pn);
}, rw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (ya(o)) {
      case 0:
        o === 38 && Cr() === 12 && (n[r] = 1), t[r] += nw(pn - 1, n, r);
        break;
      case 2:
        t[r] += Dl(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Cr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Vc(o);
    }
  while (o = bn());
  return t;
}, ow = function(t, n) {
  return s1(rw(i1(t), n));
}, Xh = /* @__PURE__ */ new WeakMap(), iw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Xh.get(r)) && !o) {
      Xh.set(t, !0);
      for (var i = [], s = ow(n, i), a = r.props, l = 0, d = 0; l < s.length; l++)
        for (var p = 0; p < a.length; p++, d++)
          t.props[d] = i[l] ? s[l].replace(/&\f/g, a[p]) : a[p] + " " + s[l];
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
function l1(e, t) {
  switch (WC(e, t)) {
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
      return De + e + gc + e + Yt + e + e;
    case 6828:
    case 4268:
      return De + e + Yt + e + e;
    case 6165:
      return De + e + Yt + "flex-" + e + e;
    case 5187:
      return De + e + _e(e, /(\w+).+(:[^]+)/, De + "box-$1$2" + Yt + "flex-$1$2") + e;
    case 5443:
      return De + e + Yt + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return De + e + Yt + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return De + e + Yt + _e(e, "shrink", "negative") + e;
    case 5292:
      return De + e + Yt + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return De + "box-" + _e(e, "-grow", "") + De + e + Yt + _e(e, "grow", "positive") + e;
    case 4554:
      return De + _e(e, /([^-])(transform)/g, "$1" + De + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, De + "$1"), /(image-set)/, De + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, De + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, De + "box-pack:$3" + Yt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + De + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, De + "$1$2") + e;
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
      if (pr(e) - 1 - t > 6) switch (Dt(e, t + 1)) {
        case 109:
          if (Dt(e, t + 4) !== 45) break;
        case 102:
          return _e(e, /(.+:)(.+)-([^]+)/, "$1" + De + "$2-$3$1" + gc + (Dt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~xf(e, "stretch") ? l1(_e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Dt(e, t + 1) !== 115) break;
    case 6444:
      switch (Dt(e, pr(e) - 3 - (~xf(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + De) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + De + (Dt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + De + "$2$3$1" + Yt + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Dt(e, t + 11)) {
        case 114:
          return De + e + Yt + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return De + e + Yt + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return De + e + Yt + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return De + e + Yt + e + e;
  }
  return e;
}
var aw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Hp:
      t.return = l1(t.value, t.length);
      break;
    case n1:
      return Bi([bs(t, {
        value: _e(t.value, "@", "@" + De)
      })], o);
    case Up:
      if (t.length) return HC(t.props, function(i) {
        switch (UC(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Bi([bs(t, {
              props: [_e(i, /:(read-\w+)/, ":" + gc + "$1")]
            })], o);
          case "::placeholder":
            return Bi([bs(t, {
              props: [_e(i, /:(plac\w+)/, ":" + De + "input-$1")]
            }), bs(t, {
              props: [_e(i, /:(plac\w+)/, ":" + gc + "$1")]
            }), bs(t, {
              props: [_e(i, /:(plac\w+)/, Yt + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, lw = [aw], cw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var w = b.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || lw, i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(b) {
      for (var w = b.getAttribute("data-emotion").split(" "), y = 1; y < w.length; y++)
        i[w[y]] = !0;
      a.push(b);
    }
  );
  var l, d = [iw, sw];
  {
    var p, m = [JC, tw(function(b) {
      p.insert(b);
    })], x = ew(d.concat(o, m)), f = function(w) {
      return Bi(qC(w), x);
    };
    l = function(w, y, h, S) {
      p = h, f(w ? w + "{" + y.styles + "}" : y.styles), S && (v.inserted[y.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new LC({
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
    insert: l
  };
  return v.sheet.hydrate(a), v;
}, c1 = { exports: {} }, Ge = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt = typeof Symbol == "function" && Symbol.for, Kp = zt ? Symbol.for("react.element") : 60103, Yp = zt ? Symbol.for("react.portal") : 60106, Gc = zt ? Symbol.for("react.fragment") : 60107, Xc = zt ? Symbol.for("react.strict_mode") : 60108, Qc = zt ? Symbol.for("react.profiler") : 60114, qc = zt ? Symbol.for("react.provider") : 60109, Zc = zt ? Symbol.for("react.context") : 60110, Gp = zt ? Symbol.for("react.async_mode") : 60111, Jc = zt ? Symbol.for("react.concurrent_mode") : 60111, eu = zt ? Symbol.for("react.forward_ref") : 60112, tu = zt ? Symbol.for("react.suspense") : 60113, uw = zt ? Symbol.for("react.suspense_list") : 60120, nu = zt ? Symbol.for("react.memo") : 60115, ru = zt ? Symbol.for("react.lazy") : 60116, dw = zt ? Symbol.for("react.block") : 60121, fw = zt ? Symbol.for("react.fundamental") : 60117, pw = zt ? Symbol.for("react.responder") : 60118, mw = zt ? Symbol.for("react.scope") : 60119;
function En(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Kp:
        switch (e = e.type, e) {
          case Gp:
          case Jc:
          case Gc:
          case Qc:
          case Xc:
          case tu:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Zc:
              case eu:
              case ru:
              case nu:
              case qc:
                return e;
              default:
                return t;
            }
        }
      case Yp:
        return t;
    }
  }
}
function u1(e) {
  return En(e) === Jc;
}
Ge.AsyncMode = Gp;
Ge.ConcurrentMode = Jc;
Ge.ContextConsumer = Zc;
Ge.ContextProvider = qc;
Ge.Element = Kp;
Ge.ForwardRef = eu;
Ge.Fragment = Gc;
Ge.Lazy = ru;
Ge.Memo = nu;
Ge.Portal = Yp;
Ge.Profiler = Qc;
Ge.StrictMode = Xc;
Ge.Suspense = tu;
Ge.isAsyncMode = function(e) {
  return u1(e) || En(e) === Gp;
};
Ge.isConcurrentMode = u1;
Ge.isContextConsumer = function(e) {
  return En(e) === Zc;
};
Ge.isContextProvider = function(e) {
  return En(e) === qc;
};
Ge.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kp;
};
Ge.isForwardRef = function(e) {
  return En(e) === eu;
};
Ge.isFragment = function(e) {
  return En(e) === Gc;
};
Ge.isLazy = function(e) {
  return En(e) === ru;
};
Ge.isMemo = function(e) {
  return En(e) === nu;
};
Ge.isPortal = function(e) {
  return En(e) === Yp;
};
Ge.isProfiler = function(e) {
  return En(e) === Qc;
};
Ge.isStrictMode = function(e) {
  return En(e) === Xc;
};
Ge.isSuspense = function(e) {
  return En(e) === tu;
};
Ge.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Gc || e === Jc || e === Qc || e === Xc || e === tu || e === uw || typeof e == "object" && e !== null && (e.$$typeof === ru || e.$$typeof === nu || e.$$typeof === qc || e.$$typeof === Zc || e.$$typeof === eu || e.$$typeof === fw || e.$$typeof === pw || e.$$typeof === mw || e.$$typeof === dw);
};
Ge.typeOf = En;
c1.exports = Ge;
var hw = c1.exports, d1 = hw, gw = {
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
}, f1 = {};
f1[d1.ForwardRef] = gw;
f1[d1.Memo] = yw;
var vw = !0;
function p1(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Xp = function(t, n, r) {
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
}, Qp = function(t, n, r) {
  Xp(t, n, r);
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
}, bw = /[A-Z]|^ms/g, Cw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, m1 = function(t) {
  return t.charCodeAt(1) === 45;
}, Qh = function(t) {
  return t != null && typeof t != "boolean";
}, ld = /* @__PURE__ */ a1(function(e) {
  return m1(e) ? e : e.replace(bw, "-$&").toLowerCase();
}), qh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Cw, function(r, o, i) {
          return mr = {
            name: o,
            styles: i,
            next: mr
          }, o;
        });
  }
  return Sw[t] !== 1 && !m1(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function va(e, t, n) {
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
        return mr = {
          name: o.name,
          styles: o.styles,
          next: mr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            mr = {
              name: s.name,
              styles: s.styles,
              next: mr
            }, s = s.next;
        var a = i.styles + ";";
        return a;
      }
      return ww(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var l = mr, d = n(e);
        return mr = l, va(e, t, d);
      }
      break;
    }
  }
  var p = n;
  if (t == null)
    return p;
  var m = t[p];
  return m !== void 0 ? m : p;
}
function ww(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += va(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var a = s;
        t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Qh(a) && (r += ld(i) + ":" + qh(i, a) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var l = 0; l < s.length; l++)
          Qh(s[l]) && (r += ld(i) + ":" + qh(i, s[l]) + ";");
      else {
        var d = va(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += ld(i) + ":" + d + ";";
            break;
          }
          default:
            r += i + "{" + d + "}";
        }
      }
    }
  return r;
}
var Zh = /label:\s*([^\s;{]+)\s*(;|$)/g, mr;
function Aa(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  mr = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += va(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var a = 1; a < e.length; a++)
    if (o += va(n, t, e[a]), r) {
      var l = i;
      o += l[a];
    }
  Zh.lastIndex = 0;
  for (var d = "", p; (p = Zh.exec(o)) !== null; )
    d += "-" + p[1];
  var m = xw(o) + d;
  return {
    name: m,
    styles: o,
    next: mr
  };
}
var kw = function(t) {
  return t();
}, h1 = Vl.useInsertionEffect ? Vl.useInsertionEffect : !1, g1 = h1 || kw, Jh = h1 || g.useLayoutEffect, y1 = /* @__PURE__ */ g.createContext(
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
y1.Provider;
var qp = function(t) {
  return /* @__PURE__ */ g.forwardRef(function(n, r) {
    var o = g.useContext(y1);
    return t(n, o, r);
  });
}, Oa = /* @__PURE__ */ g.createContext({}), Zp = {}.hasOwnProperty, bf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Tw = function(t, n) {
  var r = {};
  for (var o in n)
    Zp.call(n, o) && (r[o] = n[o]);
  return r[bf] = t, r;
}, Rw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Xp(n, r, o), g1(function() {
    return Qp(n, r, o);
  }), null;
}, Ew = /* @__PURE__ */ qp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[bf], i = [r], s = "";
  typeof e.className == "string" ? s = p1(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Aa(i, void 0, g.useContext(Oa));
  s += t.key + "-" + a.name;
  var l = {};
  for (var d in e)
    Zp.call(e, d) && d !== "css" && d !== bf && (l[d] = e[d]);
  return l.className = s, n && (l.ref = n), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Rw, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ g.createElement(o, l));
}), Pw = Ew, eg = function(t, n) {
  var r = arguments;
  if (n == null || !Zp.call(n, "css"))
    return g.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = Pw, i[1] = Tw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return g.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(eg || (eg = {}));
var $w = /* @__PURE__ */ qp(function(e, t) {
  var n = e.styles, r = Aa([n], void 0, g.useContext(Oa)), o = g.useRef();
  return Jh(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), l !== null && (a = !0, l.setAttribute("data-emotion", i), s.hydrate([l])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), Jh(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Qp(t, r.next, !0), s.tags.length) {
      var l = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = l, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function co() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Aa(t);
}
function yo() {
  var e = co.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Iw = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Mw = /* @__PURE__ */ a1(
  function(e) {
    return Iw.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), jw = Mw, Aw = function(t) {
  return t !== "theme";
}, tg = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? jw : Aw;
}, ng = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Ow = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Xp(n, r, o), g1(function() {
    return Qp(n, r, o);
  }), null;
}, zw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var a = ng(t, n, r), l = a || tg(o), d = !l("as");
  return function() {
    var p = arguments, m = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), p[0] == null || p[0].raw === void 0)
      m.push.apply(m, p);
    else {
      var x = p[0];
      m.push(x[0]);
      for (var f = p.length, v = 1; v < f; v++)
        m.push(p[v], x[v]);
    }
    var b = qp(function(w, y, h) {
      var S = d && w.as || o, C = "", R = [], k = w;
      if (w.theme == null) {
        k = {};
        for (var $ in w)
          k[$] = w[$];
        k.theme = g.useContext(Oa);
      }
      typeof w.className == "string" ? C = p1(y.registered, R, w.className) : w.className != null && (C = w.className + " ");
      var E = Aa(m.concat(R), y.registered, k);
      C += y.key + "-" + E.name, s !== void 0 && (C += " " + s);
      var A = d && a === void 0 ? tg(S) : l, z = {};
      for (var M in w)
        d && M === "as" || A(M) && (z[M] = w[M]);
      return z.className = C, h && (z.ref = h), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ow, {
        cache: y,
        serialized: E,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ g.createElement(S, z));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = a, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + s;
      }
    }), b.withComponent = function(w, y) {
      var h = e(w, vf({}, n, y, {
        shouldForwardProp: ng(b, y, !0)
      }));
      return h.apply(void 0, m);
    }, b;
  };
}, Nw = [
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
], Cf = zw.bind(null);
Nw.forEach(function(e) {
  Cf[e] = Cf(e);
});
function Lw(e) {
  return e == null || Object.keys(e).length === 0;
}
function v1(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Lw(o) ? n : o) : t;
  return /* @__PURE__ */ u.jsx($w, {
    styles: r
  });
}
function x1(e, t) {
  return Cf(e, t);
}
function Bw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const rg = [];
function so(e) {
  return rg[0] = e, Aa(rg);
}
var S1 = { exports: {} }, Ze = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jp = Symbol.for("react.transitional.element"), em = Symbol.for("react.portal"), ou = Symbol.for("react.fragment"), iu = Symbol.for("react.strict_mode"), su = Symbol.for("react.profiler"), au = Symbol.for("react.consumer"), lu = Symbol.for("react.context"), cu = Symbol.for("react.forward_ref"), uu = Symbol.for("react.suspense"), du = Symbol.for("react.suspense_list"), fu = Symbol.for("react.memo"), pu = Symbol.for("react.lazy"), Fw = Symbol.for("react.view_transition"), Dw = Symbol.for("react.client.reference");
function Hn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Jp:
        switch (e = e.type, e) {
          case ou:
          case su:
          case iu:
          case uu:
          case du:
          case Fw:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case lu:
              case cu:
              case pu:
              case fu:
                return e;
              case au:
                return e;
              default:
                return t;
            }
        }
      case em:
        return t;
    }
  }
}
Ze.ContextConsumer = au;
Ze.ContextProvider = lu;
Ze.Element = Jp;
Ze.ForwardRef = cu;
Ze.Fragment = ou;
Ze.Lazy = pu;
Ze.Memo = fu;
Ze.Portal = em;
Ze.Profiler = su;
Ze.StrictMode = iu;
Ze.Suspense = uu;
Ze.SuspenseList = du;
Ze.isContextConsumer = function(e) {
  return Hn(e) === au;
};
Ze.isContextProvider = function(e) {
  return Hn(e) === lu;
};
Ze.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jp;
};
Ze.isForwardRef = function(e) {
  return Hn(e) === cu;
};
Ze.isFragment = function(e) {
  return Hn(e) === ou;
};
Ze.isLazy = function(e) {
  return Hn(e) === pu;
};
Ze.isMemo = function(e) {
  return Hn(e) === fu;
};
Ze.isPortal = function(e) {
  return Hn(e) === em;
};
Ze.isProfiler = function(e) {
  return Hn(e) === su;
};
Ze.isStrictMode = function(e) {
  return Hn(e) === iu;
};
Ze.isSuspense = function(e) {
  return Hn(e) === uu;
};
Ze.isSuspenseList = function(e) {
  return Hn(e) === du;
};
Ze.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === ou || e === su || e === iu || e === uu || e === du || typeof e == "object" && e !== null && (e.$$typeof === pu || e.$$typeof === fu || e.$$typeof === lu || e.$$typeof === au || e.$$typeof === cu || e.$$typeof === Dw || e.getModuleId !== void 0);
};
Ze.typeOf = Hn;
S1.exports = Ze;
var b1 = S1.exports;
function Jn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function C1(e) {
  if (/* @__PURE__ */ g.isValidElement(e) || b1.isValidElementType(e) || !Jn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = C1(e[n]);
  }), t;
}
function ht(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return Jn(e) && Jn(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ g.isValidElement(t[o]) || b1.isValidElementType(t[o]) ? r[o] = t[o] : Jn(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Jn(e[o]) ? r[o] = ht(e[o], t[o], n) : n.clone ? r[o] = Jn(t[o]) ? C1(t[o]) : t[o] : r[o] = t[o];
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
function w1(e) {
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
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function l(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function d(f, v) {
    const b = s.indexOf(v);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : v) - r / 100}${n})`;
  }
  function p(f) {
    return s.indexOf(f) + 1 < s.length ? d(f, s[s.indexOf(f) + 1]) : a(f);
  }
  function m(f) {
    const v = s.indexOf(f);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? l(s[v]) : d(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const x = [];
  for (let f = 0; f < s.length; f += 1)
    x.push(a(s[f]));
  return {
    keys: s,
    values: i,
    up: a,
    down: l,
    between: d,
    only: p,
    not: m,
    unit: n,
    internal_mediaKeys: x,
    ...o
  };
}
const og = /min-width:\s*([0-9.]+)/;
function ig(e, t) {
  if (!e.containerQueries || !Ww(t))
    return t;
  const n = [];
  for (const o in t)
    o.startsWith("@container") && n.push(o);
  n.sort((o, i) => {
    var s, a;
    return +(((s = o.match(og)) == null ? void 0 : s[1]) || 0) - +(((a = i.match(og)) == null ? void 0 : a[1]) || 0);
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
function k1(e, t) {
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
    i.up = (...a) => t(e.breakpoints.up(...a), s), i.down = (...a) => t(e.breakpoints.down(...a), s), i.between = (...a) => t(e.breakpoints.between(...a), s), i.only = (...a) => t(e.breakpoints.only(...a), s), i.not = (...a) => {
      const l = t(e.breakpoints.not(...a), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
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
function T1(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Fi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Qw(t) ? t : qw(e) ? Xi(t) : n && r ? Gw(e, t) : n !== r ? Xi(t) : Zw(e, t);
}
function Kw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Xi(e[t]);
  return r;
}
function Yw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Xi(e[n]));
  return t;
}
function Gw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Xi(t[r]);
  return e;
}
function Xw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Qw(e) {
  return typeof e != "object" || e === null;
}
function qw(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Xi(e) {
  return Xw(e) ? Array.isArray(e) ? Kw(e) : Yw(e) : e;
}
function Zw(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = Fi(e[n], t[n]) : e[n] = Xi(t[n]));
  return e;
}
const Jw = {}, mu = {
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
}, yc = w1({
  values: mu
}), ek = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : mu[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function uo(e, t, n) {
  const r = {};
  return hu(r, e.theme, t, (o, i, s) => {
    const a = n(i, s);
    o ? r[o] = a : Fi(r, a);
  });
}
function hu(e, t, n, r) {
  if (t ?? (t = Jw), Array.isArray(n)) {
    const o = t.breakpoints ?? yc;
    for (let i = 0; i < n.length; i += 1)
      cd(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? yc, i = o.values ?? mu;
    for (const s in n)
      if (k1(o.keys, s)) {
        const a = Uw(t.containerQueries ? t : ek, s);
        a && cd(e, a, n[s], s, r);
      } else if (s in i) {
        const a = o.up(s);
        cd(e, a, n[s], s, r);
      } else {
        const a = s;
        e[a] = n[a];
      }
    return e;
  }
  return r(void 0, n), e;
}
function cd(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function R1(e = yc) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function wf(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    T1(t[o]) && delete t[o];
  }
  return t;
}
function tk(e, ...t) {
  const r = [R1(e), ...t].reduce((o, i) => ht(o, i), {});
  return wf(e, r);
}
function nk(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function ud(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || nk(t, n), i = Object.keys(o);
  if (i.length === 0)
    return t;
  let s;
  return i.reduce((a, l, d) => {
    if (Array.isArray(t))
      a[l] = t[d] != null ? t[d] : t[s], s = d;
    else if (typeof t == "object" && t) {
      const p = t;
      a[l] = p[l] != null ? p[l] : p[s], s = l;
    } else
      a[l] = t;
    return a;
  }, {});
}
function rk(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (k1(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function J(e) {
  if (typeof e != "string")
    throw new Error(wn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function E1(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = gu(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function gu(e, t, n = !0, r = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && n) {
    const i = sg(e.vars, o, r);
    if (i != null)
      return i;
  }
  return sg(e, o, r);
}
function sg(e, t, n = void 0) {
  let r, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    r = o, o = o[t[i]], i += 1;
  }
  if (n && o === void 0) {
    const s = t[t.length - 1], a = `${n}${s === "default" ? "" : J(s)}`;
    return r == null ? void 0 : r[a];
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
    const a = s[t], l = s.theme, d = gu(l, r) || {};
    return uo(s, a, (m) => {
      const x = E1(d, o, m, t);
      return n === !1 ? x : {
        [n]: x
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const ok = {
  internal_cache: {}
}, vc = {
  m: "margin",
  p: "padding"
}, ag = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, lg = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, xa = {};
for (const e in vc)
  xa[e] = [vc[e]];
for (const e in vc)
  for (const t in ag) {
    const n = vc[e], r = ag[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    xa[e + t] = o;
  }
for (const e in lg)
  xa[e] = xa[lg[e]];
const tm = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), nm = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...tm, ...nm];
function za(e, t, n, r) {
  const o = gu(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), a = o[s];
    return i >= 0 ? a : typeof a == "number" ? -a : typeof a == "string" && a.startsWith("var(") ? `calc(-1 * ${a})` : `-${a}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Na(e) {
  return za(e, "spacing", 8);
}
function Xo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const cg = [""];
function P1(e, t) {
  var i;
  const n = e.theme ?? ok, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Na(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const a = xa[s] ?? (cg[0] = s, cg), l = e[s];
    hu(o, e.theme, l, (d, p) => {
      const m = d ? o[d] : o;
      for (let x = 0; x < a.length; x += 1)
        m[a[x]] = Xo(r, p);
    });
  }
  return o;
}
function rm(e) {
  return P1(e, tm);
}
rm.propTypes = {};
rm.filterProps = tm;
const Tt = rm;
function om(e) {
  return P1(e, nm);
}
om.propTypes = {};
om.filterProps = nm;
const Rt = om;
function im(e = 8, t = Na({
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
function yu(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && Fi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function On(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Vn(e, t) {
  return kt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ik = Vn("border", On), sk = Vn("borderTop", On), ak = Vn("borderRight", On), lk = Vn("borderBottom", On), ck = Vn("borderLeft", On), uk = Vn("borderColor"), dk = Vn("borderTopColor"), fk = Vn("borderRightColor"), pk = Vn("borderBottomColor"), mk = Vn("borderLeftColor"), hk = Vn("outline", On), gk = Vn("outlineColor"), vu = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = za(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: Xo(t, r)
    });
    return uo(e, e.borderRadius, n);
  }
  return null;
};
vu.propTypes = {};
vu.filterProps = ["borderRadius"];
yu(ik, sk, ak, lk, ck, uk, dk, fk, pk, mk, vu, hk, gk);
const xu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = za(e.theme, "spacing", 8), n = (r) => ({
      gap: Xo(t, r)
    });
    return uo(e, e.gap, n);
  }
  return null;
};
xu.propTypes = {};
xu.filterProps = ["gap"];
const Su = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = za(e.theme, "spacing", 8), n = (r) => ({
      columnGap: Xo(t, r)
    });
    return uo(e, e.columnGap, n);
  }
  return null;
};
Su.propTypes = {};
Su.filterProps = ["columnGap"];
const bu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = za(e.theme, "spacing", 8), n = (r) => ({
      rowGap: Xo(t, r)
    });
    return uo(e, e.rowGap, n);
  }
  return null;
};
bu.propTypes = {};
bu.filterProps = ["rowGap"];
const yk = kt({
  prop: "gridColumn"
}), vk = kt({
  prop: "gridRow"
}), xk = kt({
  prop: "gridAutoFlow"
}), Sk = kt({
  prop: "gridAutoColumns"
}), bk = kt({
  prop: "gridAutoRows"
}), Ck = kt({
  prop: "gridTemplateColumns"
}), wk = kt({
  prop: "gridTemplateRows"
}), kk = kt({
  prop: "gridTemplateAreas"
}), Tk = kt({
  prop: "gridArea"
});
yu(xu, Su, bu, yk, vk, xk, Sk, bk, Ck, wk, kk, Tk);
function Di(e, t) {
  return t === "grey" ? t : e;
}
const Rk = kt({
  prop: "color",
  themeKey: "palette",
  transform: Di
}), Ek = kt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Di
}), Pk = kt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Di
});
yu(Rk, Ek, Pk);
const $k = mu;
function vn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ik = kt({
  prop: "width",
  transform: vn
}), sm = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, a, l;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || $k[n];
      return r ? ((l = (a = e.theme) == null ? void 0 : a.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: vn(n)
      };
    };
    return uo(e, e.maxWidth, t);
  }
  return null;
};
sm.filterProps = ["maxWidth"];
const Mk = kt({
  prop: "minWidth",
  transform: vn
}), jk = kt({
  prop: "height",
  transform: vn
}), Ak = kt({
  prop: "maxHeight",
  transform: vn
}), Ok = kt({
  prop: "minHeight",
  transform: vn
});
kt({
  prop: "size",
  cssProperty: "width",
  transform: vn
});
kt({
  prop: "size",
  cssProperty: "height",
  transform: vn
});
const zk = kt({
  prop: "boxSizing"
});
yu(Ik, sm, Mk, jk, Ak, Ok, zk);
const is = {
  // borders
  border: {
    themeKey: "borders",
    transform: On
  },
  borderTop: {
    themeKey: "borders",
    transform: On
  },
  borderRight: {
    themeKey: "borders",
    transform: On
  },
  borderBottom: {
    themeKey: "borders",
    transform: On
  },
  borderLeft: {
    themeKey: "borders",
    transform: On
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
    transform: On
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: vu
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Di
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Di
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Di
  },
  // spacing
  p: {
    style: Rt
  },
  pt: {
    style: Rt
  },
  pr: {
    style: Rt
  },
  pb: {
    style: Rt
  },
  pl: {
    style: Rt
  },
  px: {
    style: Rt
  },
  py: {
    style: Rt
  },
  padding: {
    style: Rt
  },
  paddingTop: {
    style: Rt
  },
  paddingRight: {
    style: Rt
  },
  paddingBottom: {
    style: Rt
  },
  paddingLeft: {
    style: Rt
  },
  paddingX: {
    style: Rt
  },
  paddingY: {
    style: Rt
  },
  paddingInline: {
    style: Rt
  },
  paddingInlineStart: {
    style: Rt
  },
  paddingInlineEnd: {
    style: Rt
  },
  paddingBlock: {
    style: Rt
  },
  paddingBlockStart: {
    style: Rt
  },
  paddingBlockEnd: {
    style: Rt
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
    style: xu
  },
  rowGap: {
    style: bu
  },
  columnGap: {
    style: Su
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
    style: sm
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
}, Nk = {};
function Lk() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = Nk,
      nested: o
    } = t, i = r.unstable_sxConfig ?? is, s = {
      sx: null,
      theme: r,
      nested: !0
    };
    function a(l) {
      let d = l;
      if (typeof l == "function")
        d = l(r);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const p = r.breakpoints ?? yc, m = R1(p);
      for (const x in d) {
        const f = Bk(d[x], r);
        if (f != null) {
          if (typeof f != "object") {
            ug(m, x, f, r, i);
            continue;
          }
          if (i[x]) {
            ug(m, x, f, r, i);
            continue;
          }
          rk(p, f) ? hu(m, t.theme, f, (v, b) => {
            m[v][x] = b;
          }) : (s.sx = f, m[x] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": ig(r, wf(p, m))
      } : ig(r, wf(p, m));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return e.filterProps = ["sx"], e;
}
const Fr = Lk();
function ug(e, t, n, r, o) {
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
    style: a
  } = i;
  if (a) {
    Fi(e, a({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: l = t,
    transform: d
  } = i, p = gu(r, s);
  hu(e, r, n, (m, x) => {
    const f = E1(p, d, x, t);
    l === !1 ? Fi(m ? e[m] : e, f) : m ? e[m][l] = f : e[l] = f;
  });
}
function Bk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fk(e, t) {
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
function La(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, a = w1(n), l = im(o);
  let d = ht({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...r
    },
    spacing: l,
    shape: {
      ...Vw,
      ...i
    }
  }, s);
  return d = Hw(d), d.applyStyles = Fk, d = t.reduce((p, m) => ht(p, m), d), d.unstable_sxConfig = {
    ...is,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(m) {
    return Fr({
      sx: m,
      theme: this
    });
  }, d.internal_cache = {}, d;
}
function Dk(e) {
  return Object.keys(e).length === 0;
}
function am(e = null) {
  const t = g.useContext(Oa);
  return !t || Dk(t) ? e : t;
}
const _k = La();
function Cu(e = _k) {
  return am(e);
}
function dd(e) {
  const t = so(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function $1({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Cu(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => dd(typeof s == "function" ? s(o) : s)) : i = dd(i)), /* @__PURE__ */ u.jsx(v1, {
    styles: i
  });
}
const dg = (e) => e, Wk = () => {
  let e = dg;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = dg;
    }
  };
}, I1 = Wk();
function M1(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = M1(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ee() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = M1(e)) && (r && (r += " "), r += t);
  return r;
}
function Uk(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = x1("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(Fr);
  return /* @__PURE__ */ g.forwardRef(function(l, d) {
    const p = Cu(n), {
      className: m,
      component: x = "div",
      ...f
    } = l;
    return /* @__PURE__ */ u.jsx(i, {
      as: x,
      ref: d,
      className: ee(m, o ? o(r) : r),
      theme: t && p[t] || p,
      ...f
    });
  });
}
const Hk = {
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
  const r = Hk[t];
  return r ? `${n}-${r}` : `${I1.generate(e)}-${t}`;
}
function ce(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = pe(e, o, n);
  }), r;
}
function j1(e) {
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
const Vk = La();
function fd(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Fo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Kk(e) {
  return e ? (t, n) => n[e] : null;
}
function Yk(e, t, n) {
  e.theme = T1(e.theme) ? n : e.theme[t] || e.theme;
}
function Wl(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => Wl(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? Fo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? Fo(so(s), n) : s;
    }
    return A1(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? Fo(so(r.style), n) : r.style : n ? Fo(so(r), n) : r;
}
function A1(e, t, n = [], r = void 0) {
  var i;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const a = t[s];
    if (typeof a.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(o))
        continue;
    } else
      for (const l in a.props)
        if (e[l] !== a.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== a.props[l])
          continue e;
    typeof a.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), n.push(r ? Fo(so(a.style(o)), r) : a.style(o))) : n.push(r ? Fo(so(a.style), r) : a.style);
  }
  return n;
}
function lm(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = Vk,
    rootShouldForwardProp: r = fd,
    slotShouldForwardProp: o = fd
  } = e;
  function i(a) {
    Yk(a, t, n);
  }
  return (a, l = {}) => {
    Bw(a, (k) => k.filter(($) => $ !== Fr));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: m,
      skipSx: x,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Kk(Qk(p)),
      ...v
    } = l, b = d && d.startsWith("Mui") || p ? "components" : "custom", w = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), y = x || !1;
    let h = fd;
    p === "Root" || p === "root" ? h = r : p ? h = o : Xk(a) && (h = void 0);
    const S = x1(a, {
      shouldForwardProp: h,
      label: Gk(),
      ...v
    }), C = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(E) {
          return Wl(E, k, E.theme.modularCssLayers ? b : void 0);
        };
      if (Jn(k)) {
        const $ = j1(k);
        return function(A) {
          return $.variants ? Wl(A, $, A.theme.modularCssLayers ? b : void 0) : A.theme.modularCssLayers ? Fo($.style, b) : $.style;
        };
      }
      return k;
    }, R = (...k) => {
      const $ = [], E = k.map(C), A = [];
      if ($.push(i), d && f && A.push(function(P) {
        var N, j;
        const I = (j = (N = P.theme.components) == null ? void 0 : N[d]) == null ? void 0 : j.styleOverrides;
        if (!I)
          return null;
        const O = {};
        for (const B in I)
          O[B] = Wl(P, I[B], P.theme.modularCssLayers ? "theme" : void 0);
        return f(P, O);
      }), d && !w && A.push(function(P) {
        var O, N;
        const T = P.theme, I = (N = (O = T == null ? void 0 : T.components) == null ? void 0 : O[d]) == null ? void 0 : N.variants;
        return I ? A1(P, I, [], P.theme.modularCssLayers ? "theme" : void 0) : null;
      }), y || A.push(Fr), Array.isArray(E[0])) {
        const c = E.shift(), P = new Array($.length).fill(""), T = new Array(A.length).fill("");
        let I;
        I = [...P, ...c, ...T], I.raw = [...P, ...c.raw, ...T], $.unshift(I);
      }
      const z = [...$, ...E, ...A], M = S(...z);
      return a.muiName && (M.muiName = a.muiName), M;
    };
    return S.withConfig && (R.withConfig = S.withConfig), R;
  };
}
function Gk(e, t) {
  return void 0;
}
function Xk(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qk(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const qk = lm();
function Sa(e, t, n = !1) {
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
        const s = e[i], a = t[i];
        if (!a)
          r[i] = s || {};
        else if (!s)
          r[i] = a;
        else {
          r[i] = {
            ...a
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const d = l;
              r[i][d] = Sa(s[d], a[d], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = ee(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function Zk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : Sa(t.components[n].defaultProps, r);
}
function Jk(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Cu(r);
  return o && (i = i[o] || i), Zk({
    theme: i,
    name: n,
    props: t
  });
}
const gt = typeof window < "u" ? g.useLayoutEffect : g.useEffect;
function e2(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function cm(e, t = 0, n = 1) {
  return e2(e, t, n);
}
function t2(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function fo(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return fo(t2(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(wn(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(wn(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const n2 = (e) => {
  const t = fo(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, gr = (e, t) => {
  try {
    return n2(e);
  } catch {
    return e;
  }
};
function wu(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function um(e) {
  e = fo(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (d, p = (d + n / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), wu({
    type: a,
    values: l
  });
}
function kf(e) {
  e = fo(e);
  let t = e.type === "hsl" || e.type === "hsla" ? fo(um(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function O1(e, t) {
  const n = kf(e), r = kf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ba(e, t) {
  return e = fo(e), t = cm(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, wu(e);
}
function on(e, t, n) {
  try {
    return ba(e, t);
  } catch {
    return e;
  }
}
function ss(e, t) {
  if (e = fo(e), t = cm(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return wu(e);
}
function ue(e, t, n) {
  try {
    return ss(e, t);
  } catch {
    return e;
  }
}
function as(e, t) {
  if (e = fo(e), t = cm(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return wu(e);
}
function de(e, t, n) {
  try {
    return as(e, t);
  } catch {
    return e;
  }
}
function Tf(e, t = 0.15) {
  return kf(e) > 0.5 ? ss(e, t) : as(e, t);
}
function qr(e, t, n) {
  try {
    return Tf(e, t);
  } catch {
    return e;
  }
}
const z1 = /* @__PURE__ */ g.createContext(null);
function dm() {
  return g.useContext(z1);
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
  } = e, r = dm(), o = g.useMemo(() => {
    const i = r === null ? {
      ...n
    } : i2(r, n);
    return i != null && (i[o2] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ u.jsx(z1.Provider, {
    value: o,
    children: t
  });
}
const N1 = /* @__PURE__ */ g.createContext();
function a2({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(N1.Provider, {
    value: e ?? !0,
    ...t
  });
}
const Ba = () => g.useContext(N1) ?? !1, L1 = /* @__PURE__ */ g.createContext(void 0);
function l2({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u.jsx(L1.Provider, {
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
  return o.defaultProps ? Sa(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Sa(o, r, t.components.mergeClassNameAndStyle) : r;
}
function B1({
  props: e,
  name: t
}) {
  const n = g.useContext(L1);
  return c2({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let fg = 0;
function u2(e) {
  const [t, n] = g.useState(e), r = e || t;
  return g.useEffect(() => {
    t == null && (fg += 1, n(`mui-${fg}`));
  }, [t]), r;
}
const d2 = {
  ...Vl
}, pg = d2.useId;
function kr(e) {
  if (pg !== void 0) {
    const t = pg();
    return e ?? t;
  }
  return u2(e);
}
function f2(e) {
  const t = am(), n = kr() || "", {
    modularCssLayers: r
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !r || t !== null ? o = "" : typeof r == "string" ? o = r.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, gt(() => {
    var a, l;
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      if (s && ((a = s.hasAttribute) != null && a.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === n)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", n), d.textContent = o, i.prepend(d);
    } else
      (l = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || l.remove();
  }, [o, n]), o ? /* @__PURE__ */ u.jsx($1, {
    styles: o
  }) : null;
}
const mg = {};
function hg(e, t, n, r = !1) {
  return g.useMemo(() => {
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
function F1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = am(mg), i = dm() || mg, s = hg(r, o, n), a = hg(r, i, n, !0), l = (r ? s[r] : s).direction === "rtl", d = f2(s);
  return /* @__PURE__ */ u.jsx(s2, {
    theme: a,
    children: /* @__PURE__ */ u.jsx(Oa.Provider, {
      value: s,
      children: /* @__PURE__ */ u.jsx(a2, {
        value: l,
        children: /* @__PURE__ */ u.jsxs(l2, {
          value: r ? s[r].components : s.components,
          children: [d, t]
        })
      })
    })
  });
}
const gg = {
  theme: void 0
};
function D1(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (gg.theme = o.theme, i = j1(e(gg)), t = i, n = o.theme), i;
  };
}
const fm = "mode", pm = "color-scheme", p2 = "data-color-scheme";
function m2(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = fm,
    colorSchemeStorageKey: i = pm,
    attribute: s = p2,
    colorSchemeNode: a = "document.documentElement",
    nonce: l
  } = e || {};
  let d = "", p = s;
  if (s === "class" && (p = ".%s"), s === "data" && (p = "[data-%s]"), p.startsWith(".")) {
    const x = p.substring(1);
    d += `${a}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${a}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const m = p.match(/\[([^[\]]+)\]/);
  if (m) {
    const [x, f] = m[1].split("=");
    f || (d += `${a}.removeAttribute('${x}'.replace('%s', light));
      ${a}.removeAttribute('${x}'.replace('%s', dark));`), d += `
      ${a}.setAttribute('${x}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
  } else p !== ".%s" && (d += `${a}.setAttribute('${p}', colorScheme);`);
  return /* @__PURE__ */ u.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
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
    ${d}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function h2() {
}
const g2 = ({
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
      return h2;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function pd() {
}
function yg(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function _1(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function y2(e) {
  return _1(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function v2(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = fm,
    colorSchemeStorageKey: s = pm,
    storageWindow: a = typeof window > "u" ? void 0 : window,
    storageManager: l = g2,
    noSsr: d = !1
  } = e, p = o.join(","), m = o.length > 1, x = g.useMemo(() => l == null ? void 0 : l({
    key: i,
    storageWindow: a
  }), [l, i, a]), f = g.useMemo(() => l == null ? void 0 : l({
    key: `${s}-light`,
    storageWindow: a
  }), [l, s, a]), v = g.useMemo(() => l == null ? void 0 : l({
    key: `${s}-dark`,
    storageWindow: a
  }), [l, s, a]), [b, w] = g.useState(() => {
    const E = (x == null ? void 0 : x.get(t)) || t, A = (f == null ? void 0 : f.get(n)) || n, z = (v == null ? void 0 : v.get(r)) || r;
    return {
      mode: E,
      systemMode: yg(E),
      lightColorScheme: A,
      darkColorScheme: z
    };
  }), [y, h] = g.useState(d || !m);
  g.useEffect(() => {
    h(!0);
  }, []);
  const S = y2(b), C = g.useCallback((E) => {
    w((A) => {
      if (E === A.mode)
        return A;
      const z = E ?? t;
      return x == null || x.set(z), {
        ...A,
        mode: z,
        systemMode: yg(z)
      };
    });
  }, [x, t]), R = g.useCallback((E) => {
    E ? typeof E == "string" ? E && !p.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : w((A) => {
      const z = {
        ...A
      };
      return _1(A, (M) => {
        M === "light" && (f == null || f.set(E), z.lightColorScheme = E), M === "dark" && (v == null || v.set(E), z.darkColorScheme = E);
      }), z;
    }) : w((A) => {
      const z = {
        ...A
      }, M = E.light === null ? n : E.light, c = E.dark === null ? r : E.dark;
      return M && (p.includes(M) ? (z.lightColorScheme = M, f == null || f.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), c && (p.includes(c) ? (z.darkColorScheme = c, v == null || v.set(c)) : console.error(`\`${c}\` does not exist in \`theme.colorSchemes\`.`)), z;
    }) : w((A) => (f == null || f.set(n), v == null || v.set(r), {
      ...A,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [p, f, v, n, r]), k = g.useCallback((E) => {
    b.mode === "system" && w((A) => {
      const z = E != null && E.matches ? "dark" : "light";
      return A.systemMode === z ? A : {
        ...A,
        systemMode: z
      };
    });
  }, [b.mode]), $ = g.useRef(k);
  return $.current = k, g.useEffect(() => {
    if (typeof window.matchMedia != "function" || !m)
      return;
    const E = (...z) => $.current(...z), A = window.matchMedia("(prefers-color-scheme: dark)");
    return A.addListener(E), E(A), () => {
      A.removeListener(E);
    };
  }, [m]), g.useEffect(() => {
    if (m) {
      const E = (x == null ? void 0 : x.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && C(M || t);
      })) || pd, A = (f == null ? void 0 : f.subscribe((M) => {
        (!M || p.match(M)) && R({
          light: M
        });
      })) || pd, z = (v == null ? void 0 : v.subscribe((M) => {
        (!M || p.match(M)) && R({
          dark: M
        });
      })) || pd;
      return () => {
        E(), A(), z();
      };
    }
  }, [R, C, p, t, a, m, x, f, v]), {
    ...b,
    mode: y ? b.mode : void 0,
    systemMode: y ? b.systemMode : void 0,
    colorScheme: y ? S : void 0,
    setMode: C,
    setColorScheme: R
  };
}
const x2 = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function S2(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = fm,
    colorSchemeStorageKey: o = pm,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: a
  } = e, l = {
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
  }, d = /* @__PURE__ */ g.createContext(void 0), p = () => g.useContext(d) || l, m = {}, x = {};
  function f(y) {
    var Fe, Te, Ue, bt;
    const {
      children: h,
      theme: S,
      modeStorageKey: C = r,
      colorSchemeStorageKey: R = o,
      disableTransitionOnChange: k = i,
      storageManager: $,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: A = typeof document > "u" ? void 0 : document,
      colorSchemeNode: z = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: c = !1,
      defaultMode: P = "system",
      forceThemeRerender: T = !1,
      noSsr: I
    } = y, O = g.useRef(!1), N = dm(), j = g.useContext(d), B = !!j && !M, _ = g.useMemo(() => S || (typeof n == "function" ? n() : n), [S]), G = _[t], W = G || _, {
      colorSchemes: Z = m,
      components: V = x,
      cssVarPrefix: Y
    } = W, K = Object.keys(Z).filter((ie) => !!Z[ie]).join(","), Q = g.useMemo(() => K.split(","), [K]), H = typeof s == "string" ? s : s.light, ne = typeof s == "string" ? s : s.dark, ae = Z[H] && Z[ne] ? P : ((Te = (Fe = Z[W.defaultColorScheme]) == null ? void 0 : Fe.palette) == null ? void 0 : Te.mode) || ((Ue = W.palette) == null ? void 0 : Ue.mode), {
      mode: Ee,
      setMode: Pe,
      systemMode: we,
      lightColorScheme: le,
      darkColorScheme: Ne,
      colorScheme: Ve,
      setColorScheme: Re
    } = v2({
      supportedColorSchemes: Q,
      defaultLightColorScheme: H,
      defaultDarkColorScheme: ne,
      modeStorageKey: C,
      colorSchemeStorageKey: R,
      defaultMode: ae,
      storageManager: $,
      storageWindow: E,
      noSsr: I
    });
    let Oe = Ee, ye = Ve;
    B && (Oe = j.mode, ye = j.colorScheme);
    let ze = ye || W.defaultColorScheme;
    W.vars && !T && (ze = W.defaultColorScheme);
    const Xe = g.useMemo(() => {
      var Me;
      const ie = ((Me = W.generateThemeVars) == null ? void 0 : Me.call(W)) || W.vars, ke = {
        ...W,
        components: V,
        colorSchemes: Z,
        cssVarPrefix: Y,
        vars: ie
      };
      if (typeof ke.generateSpacing == "function" && (ke.spacing = ke.generateSpacing()), ze) {
        const Je = Z[ze];
        Je && typeof Je == "object" && Object.keys(Je).forEach((xe) => {
          Je[xe] && typeof Je[xe] == "object" ? ke[xe] = {
            ...ke[xe],
            ...Je[xe]
          } : ke[xe] = Je[xe];
        });
      }
      return a ? a(ke) : ke;
    }, [W, ze, V, Z, Y]), Be = W.colorSchemeSelector;
    gt(() => {
      if (ye && z && Be && Be !== "media") {
        const ie = Be;
        let ke = Be;
        if (ie === "class" && (ke = ".%s"), ie === "data" && (ke = "[data-%s]"), ie != null && ie.startsWith("data-") && !ie.includes("%s") && (ke = `[${ie}="%s"]`), ke.startsWith("."))
          z.classList.remove(...Q.map((Me) => ke.substring(1).replace("%s", Me))), z.classList.add(ke.substring(1).replace("%s", ye));
        else {
          const Me = ke.replace("%s", ye).match(/\[([^\]]+)\]/);
          if (Me) {
            const [Je, xe] = Me[1].split("=");
            xe || Q.forEach((or) => {
              z.removeAttribute(Je.replace(ye, or));
            }), z.setAttribute(Je, xe ? xe.replace(/"|'/g, "") : "");
          } else
            z.setAttribute(ke, ye);
        }
      }
    }, [ye, Be, z, Q]), g.useEffect(() => {
      let ie;
      if (k && O.current && A) {
        const ke = A.createElement("style");
        ke.appendChild(A.createTextNode(x2)), A.head.appendChild(ke), window.getComputedStyle(A.body), ie = setTimeout(() => {
          A.head.removeChild(ke);
        }, 1);
      }
      return () => {
        clearTimeout(ie);
      };
    }, [ye, k, A]), g.useEffect(() => (O.current = !0, () => {
      O.current = !1;
    }), []);
    const Ke = g.useMemo(() => ({
      allColorSchemes: Q,
      colorScheme: ye,
      darkColorScheme: Ne,
      lightColorScheme: le,
      mode: Oe,
      setColorScheme: Re,
      setMode: Pe,
      systemMode: we
    }), [Q, ye, Ne, le, Oe, Re, Pe, we, Xe.colorSchemeSelector]);
    let We = !0;
    (c || W.cssVariables === !1 || B && (N == null ? void 0 : N.cssVarPrefix) === Y) && (We = !1);
    const it = /* @__PURE__ */ u.jsxs(g.Fragment, {
      children: [/* @__PURE__ */ u.jsx(F1, {
        themeId: G ? t : void 0,
        theme: Xe,
        children: h
      }), We && /* @__PURE__ */ u.jsx(v1, {
        styles: ((bt = Xe.generateStyleSheets) == null ? void 0 : bt.call(Xe)) || []
      })]
    });
    return B ? it : /* @__PURE__ */ u.jsx(d.Provider, {
      value: Ke,
      children: it
    });
  }
  const v = typeof s == "string" ? s : s.light, b = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: p,
    getInitColorSchemeScript: (y) => m2({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: b,
      modeStorageKey: r,
      ...y
    })
  };
}
function W1(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const b2 = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), vg = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (b2.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, C2 = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([a, l]) => {
      (!n || n && !n([...i, a])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? r(l, [...i, a], Array.isArray(l) ? [...s, a] : s) : t([...i, a], l, s));
    });
  }
  r(e);
}, w2 = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function md(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return C2(
    e,
    (a, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!r || !r(a, l))) {
        const p = `--${n ? `${n}-` : ""}${a.join("-")}`, m = w2(a, l);
        Object.assign(o, {
          [p]: m
        }), vg(i, a, `var(${p})`, d), vg(s, a, `var(${p}, ${m})`, d);
      }
    },
    (a) => a[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function U1(e, t = {}) {
  const {
    getSelector: n = y,
    disableCssColorScheme: r,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: a,
    defaultColorScheme: l = "light",
    ...d
  } = e, {
    vars: p,
    css: m,
    varsWithDefaults: x
  } = md(d, t);
  let f = x;
  const v = {}, {
    [l]: b,
    ...w
  } = s;
  if (Object.entries(w || {}).forEach(([C, R]) => {
    const {
      vars: k,
      css: $,
      varsWithDefaults: E
    } = md(R, t);
    f = ht(f, E), v[C] = {
      css: $,
      vars: k
    };
  }), b) {
    const {
      css: C,
      vars: R,
      varsWithDefaults: k
    } = md(b, t);
    f = ht(f, k), v[l] = {
      css: C,
      vars: R
    };
  }
  function y(C, R) {
    var $, E;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), C) {
      if (k === "media")
        return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = ($ = s[C]) == null ? void 0 : $.palette) == null ? void 0 : E.mode) || C})`]: {
            ":root": R
          }
        };
      if (k)
        return e.defaultColorScheme === C ? `:root, ${k.replace("%s", String(C))}` : k.replace("%s", String(C));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let C = {
        ...p
      };
      return Object.entries(v).forEach(([, {
        vars: R
      }]) => {
        C = ht(C, R);
      }), C;
    },
    generateStyleSheets: () => {
      var A, z;
      const C = [], R = e.defaultColorScheme || "light";
      function k(M, c) {
        Object.keys(c).length && C.push(typeof M == "string" ? {
          [M]: {
            ...c
          }
        } : M);
      }
      k(n(void 0, {
        ...m
      }), m);
      const {
        [R]: $,
        ...E
      } = v;
      if ($) {
        const {
          css: M
        } = $, c = (z = (A = s[R]) == null ? void 0 : A.palette) == null ? void 0 : z.mode, P = !r && c ? {
          colorScheme: c,
          ...M
        } : {
          ...M
        };
        k(n(R, {
          ...P
        }), P);
      }
      return Object.entries(E).forEach(([M, {
        css: c
      }]) => {
        var I, O;
        const P = (O = (I = s[M]) == null ? void 0 : I.palette) == null ? void 0 : O.mode, T = !r && P ? {
          colorScheme: P,
          ...c
        } : {
          ...c
        };
        k(n(M, {
          ...T
        }), T);
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
function H1(e) {
  return function(n) {
    return e === "media" ? `@media (prefers-color-scheme: ${n})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${n}"] &` : e === "class" ? `.${n} &` : e === "data" ? `[data-${n}] &` : `${e.replace("%s", n)} &` : "&";
  };
}
function me(e, t, n = void 0) {
  const r = {};
  for (const o in e) {
    const i = e[o];
    let s = "", a = !0;
    for (let l = 0; l < i.length; l += 1) {
      const d = i[l];
      d && (s += (a === !0 ? "" : " ") + t(d), a = !1, n && n[d] && (s += " " + n[d]));
    }
    r[o] = s;
  }
  return r;
}
function hd(e, t) {
  var n, r, o;
  return /* @__PURE__ */ g.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const k2 = La(), T2 = qk("div", {
  name: "MuiStack",
  slot: "Root"
});
function R2(e) {
  return Jk({
    props: e,
    name: "MuiStack",
    defaultTheme: k2
  });
}
function E2(e, t) {
  const n = g.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ g.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const P2 = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], $2 = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...uo({
      theme: t
    }, ud({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Na(t), o = Object.keys(t.breakpoints.values).reduce((l, d) => ((typeof e.spacing == "object" && e.spacing[d] != null || typeof e.direction == "object" && e.direction[d] != null) && (l[d] = !0), l), {}), i = ud({
      values: e.direction,
      base: o
    }), s = ud({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((l, d, p) => {
      if (!i[l]) {
        const x = d > 0 ? i[p[d - 1]] : "column";
        i[l] = x;
      }
    }), n = ht(n, uo({
      theme: t
    }, s, (l, d) => e.useFlexGap ? {
      gap: Xo(r, l)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${P2(d ? i[d] : e.direction)}`]: Xo(r, l)
      }
    }));
  }
  return n = tk(t.breakpoints, n), n;
};
function I2(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = T2,
    useThemeProps: n = R2,
    componentName: r = "MuiStack"
  } = e, o = () => me({
    root: ["root"]
  }, (l) => pe(r, l), {}), i = t($2);
  return /* @__PURE__ */ g.forwardRef(function(l, d) {
    const p = n(l), {
      component: m = "div",
      direction: x = "column",
      spacing: f = 0,
      divider: v,
      children: b,
      className: w,
      useFlexGap: y = !1,
      ...h
    } = p, S = {
      direction: x,
      spacing: f,
      useFlexGap: y
    }, C = o();
    return /* @__PURE__ */ u.jsx(i, {
      as: m,
      ownerState: S,
      ref: d,
      className: ee(C.root, w),
      ...h,
      children: v ? E2(b, v) : b
    });
  });
}
function V1() {
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
      paper: ha.white,
      default: ha.white
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
const K1 = V1();
function Y1() {
  return {
    text: {
      primary: ha.white,
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
      active: ha.white,
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
const Rf = Y1();
function xg(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = as(e.main, o) : t === "dark" && (e.dark = ss(e.main, i)));
}
function Sg(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function M2(e = "light") {
  return e === "dark" ? {
    main: si[200],
    light: si[50],
    dark: si[400]
  } : {
    main: si[700],
    light: si[400],
    dark: si[800]
  };
}
function j2(e = "light") {
  return e === "dark" ? {
    main: ii[200],
    light: ii[50],
    dark: ii[400]
  } : {
    main: ii[500],
    light: ii[300],
    dark: ii[700]
  };
}
function A2(e = "light") {
  return e === "dark" ? {
    main: oi[500],
    light: oi[300],
    dark: oi[700]
  } : {
    main: oi[700],
    light: oi[400],
    dark: oi[800]
  };
}
function O2(e = "light") {
  return e === "dark" ? {
    main: ai[400],
    light: ai[300],
    dark: ai[700]
  } : {
    main: ai[700],
    light: ai[500],
    dark: ai[900]
  };
}
function z2(e = "light") {
  return e === "dark" ? {
    main: li[400],
    light: li[300],
    dark: li[700]
  } : {
    main: li[800],
    light: li[500],
    dark: li[900]
  };
}
function N2(e = "light") {
  return e === "dark" ? {
    main: Ss[400],
    light: Ss[300],
    dark: Ss[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ss[500],
    dark: Ss[900]
  };
}
function L2(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function mm(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || M2(t), a = e.secondary || j2(t), l = e.error || A2(t), d = e.info || O2(t), p = e.success || z2(t), m = e.warning || N2(t);
  function x(w) {
    return o ? L2(w) : O1(w, Rf.text.primary) >= n ? Rf.text.primary : K1.text.primary;
  }
  const f = ({
    color: w,
    name: y,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: C = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[h] && (w.main = w[h]), !w.hasOwnProperty("main"))
      throw new Error(wn(11, y ? ` (${y})` : "", h));
    if (typeof w.main != "string")
      throw new Error(wn(12, y ? ` (${y})` : "", JSON.stringify(w.main)));
    return o ? (Sg(o, w, "light", S, r), Sg(o, w, "dark", C, r)) : (xg(w, "light", S, r), xg(w, "dark", C, r)), w.contrastText || (w.contrastText = x(w.main)), w;
  };
  let v;
  return t === "light" ? v = V1() : t === "dark" && (v = Y1()), ht({
    // A collection of common colors.
    common: {
      ...ha
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
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: OC,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: x,
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
function G1(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function B2(e, t) {
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
function F2(e) {
  return Math.round(e * 1e5) / 1e5;
}
const bg = {
  textTransform: "uppercase"
}, Cg = '"Roboto", "Helvetica", "Arial", sans-serif';
function X1(e, t) {
  const {
    fontFamily: n = Cg,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t, x = r / 14, f = p || ((w) => `${w / l * x}rem`), v = (w, y, h, S, C) => ({
    fontFamily: n,
    fontWeight: w,
    fontSize: f(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Cg ? {
      letterSpacing: `${F2(S / y)}em`
    } : {},
    ...C,
    ...d
  }), b = {
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
    button: v(s, 14, 1.75, 0.4, bg),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, bg),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ht({
    htmlFontSize: l,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...b
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const D2 = 0.2, _2 = 0.14, W2 = 0.12;
function st(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${D2})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${_2})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${W2})`].join(",");
}
const U2 = ["none", st(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), st(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), st(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), st(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), st(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), st(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), st(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), st(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), st(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), st(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), st(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), st(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), st(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), st(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), st(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), st(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), st(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), st(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), st(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), st(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), st(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), st(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), st(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), st(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], H2 = ["all"], V2 = {}, K2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Y2 = {
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
function wg(e) {
  return `${Math.round(e)}ms`;
}
function G2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function X2(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...K2,
    ...t.easing
  }, r = {
    ...Y2,
    ...t.duration
  }, o = (s = H2, a = V2) => {
    const {
      duration: l = r.standard,
      easing: d = n.easeInOut,
      delay: p = 0,
      ...m
    } = a;
    return (Array.isArray(s) ? s : [s]).map((x) => `${x} ${typeof l == "string" ? l : wg(l)} ${d} ${typeof p == "string" ? p : wg(p)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: G2,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Q2 = {};
function q2(e = Q2) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const Z2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function J2(e) {
  return Jn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Q1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !J2(a) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Jn(a) && (r[s] = {
        ...a
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
function kg(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const eT = (e) => {
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
function tT(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : ba(t, eT(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${kg(n)})` : as(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${kg(n)})` : ss(t, n);
    }
  });
}
function Ef(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: a = {},
    typography: l = {},
    shape: d,
    colorSpace: p,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(wn(22));
  const x = mm({
    ...i,
    colorSpace: p
  }), f = La(e);
  let v = ht(f, {
    mixins: B2(f.breakpoints, r),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: U2.slice(),
    typography: X1(x, l),
    motion: q2(s),
    transitions: X2(a),
    zIndex: {
      ...Z2
    }
  });
  return v = ht(v, m), v = t.reduce((b, w) => ht(b, w), v), delete v.transitions.reducedMotion, v.unstable_sxConfig = {
    ...is,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, v.unstable_sx = function(w) {
    return Fr({
      sx: w,
      theme: this
    });
  }, v.toRuntimeSource = Q1, tT(v), v;
}
function Pf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const nT = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Pf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function q1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Z1(e) {
  return e === "dark" ? nT : [];
}
function rT(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = mm({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...q1(s.mode),
      ...n
    },
    overlays: r || Z1(s.mode),
    ...i
  };
}
function oT(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const iT = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], sT = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return iT(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
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
function aT(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function F(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Os(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : um(e);
}
function Er(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = gr(Os(e[t])));
}
function lT(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ar = (e) => {
  try {
    return e();
  } catch {
  }
}, cT = (e = "mui") => W1(e);
function gd(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = rT({
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
    ...a
  } = Ef({
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
      ...q1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || Z1(i)
  }, a;
}
function uT(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: a = oT,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...p
  } = e, m = Object.keys(n)[0], x = r || (n.light && m !== "light" ? "light" : m), f = cT(i), {
    [x]: v,
    light: b,
    dark: w,
    ...y
  } = n, h = {
    ...y
  };
  let S = v;
  if ((x === "dark" && !("dark" in n) || x === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(wn(21, x));
  let C;
  s && (C = "oklch");
  const R = gd(C, h, S, p, x);
  b && !h.light && gd(C, h, b, void 0, "light"), w && !h.dark && gd(C, h, w, void 0, "dark");
  let k = {
    defaultColorScheme: x,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: d,
    getCssVar: f,
    colorSchemes: h,
    font: {
      ...G1(R.typography),
      ...R.font
    },
    spacing: lT(p.spacing)
  };
  Object.keys(k.colorSchemes).forEach((M) => {
    const c = k.colorSchemes[M].palette, P = (I) => {
      const O = I.split("-"), N = O[1], j = O[2];
      return f(I, c[N][j]);
    };
    c.mode === "light" && (F(c.common, "background", "#fff"), F(c.common, "onBackground", "#000")), c.mode === "dark" && (F(c.common, "background", "#000"), F(c.common, "onBackground", "#fff"));
    function T(I, O, N) {
      if (C) {
        let j;
        return I === on && (j = `transparent ${((1 - N) * 100).toFixed(0)}%`), I === ue && (j = `#000 ${(N * 100).toFixed(0)}%`), I === de && (j = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${C}, ${O}, ${j})`;
      }
      return I(O, N);
    }
    if (aT(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      F(c.Alert, "errorColor", T(ue, s ? f("palette-error-light") : c.error.light, 0.6)), F(c.Alert, "infoColor", T(ue, s ? f("palette-info-light") : c.info.light, 0.6)), F(c.Alert, "successColor", T(ue, s ? f("palette-success-light") : c.success.light, 0.6)), F(c.Alert, "warningColor", T(ue, s ? f("palette-warning-light") : c.warning.light, 0.6)), F(c.Alert, "errorFilledBg", P("palette-error-main")), F(c.Alert, "infoFilledBg", P("palette-info-main")), F(c.Alert, "successFilledBg", P("palette-success-main")), F(c.Alert, "warningFilledBg", P("palette-warning-main")), F(c.Alert, "errorFilledColor", ar(() => c.getContrastText(c.error.main))), F(c.Alert, "infoFilledColor", ar(() => c.getContrastText(c.info.main))), F(c.Alert, "successFilledColor", ar(() => c.getContrastText(c.success.main))), F(c.Alert, "warningFilledColor", ar(() => c.getContrastText(c.warning.main))), F(c.Alert, "errorStandardBg", T(de, s ? f("palette-error-light") : c.error.light, 0.9)), F(c.Alert, "infoStandardBg", T(de, s ? f("palette-info-light") : c.info.light, 0.9)), F(c.Alert, "successStandardBg", T(de, s ? f("palette-success-light") : c.success.light, 0.9)), F(c.Alert, "warningStandardBg", T(de, s ? f("palette-warning-light") : c.warning.light, 0.9)), F(c.Alert, "errorIconColor", P("palette-error-main")), F(c.Alert, "infoIconColor", P("palette-info-main")), F(c.Alert, "successIconColor", P("palette-success-main")), F(c.Alert, "warningIconColor", P("palette-warning-main")), F(c.AppBar, "defaultBg", P("palette-grey-100")), F(c.Avatar, "defaultBg", P("palette-grey-400")), F(c.Button, "inheritContainedBg", P("palette-grey-300")), F(c.Button, "inheritContainedHoverBg", P("palette-grey-A100")), F(c.Chip, "defaultBorder", P("palette-grey-400")), F(c.Chip, "defaultAvatarColor", P("palette-grey-700")), F(c.Chip, "defaultIconColor", P("palette-grey-700")), F(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), F(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), F(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), F(c.LinearProgress, "primaryBg", T(de, s ? f("palette-primary-main") : c.primary.main, 0.62)), F(c.LinearProgress, "secondaryBg", T(de, s ? f("palette-secondary-main") : c.secondary.main, 0.62)), F(c.LinearProgress, "errorBg", T(de, s ? f("palette-error-main") : c.error.main, 0.62)), F(c.LinearProgress, "infoBg", T(de, s ? f("palette-info-main") : c.info.main, 0.62)), F(c.LinearProgress, "successBg", T(de, s ? f("palette-success-main") : c.success.main, 0.62)), F(c.LinearProgress, "warningBg", T(de, s ? f("palette-warning-light") : c.warning.main, 0.62)), F(c.Skeleton, "bg", C ? T(on, s ? f("palette-text-primary") : c.text.primary, 0.11) : `rgba(${P("palette-text-primaryChannel")} / 0.11)`), F(c.Slider, "primaryTrack", T(de, s ? f("palette-primary-main") : c.primary.main, 0.62)), F(c.Slider, "secondaryTrack", T(de, s ? f("palette-secondary-main") : c.secondary.main, 0.62)), F(c.Slider, "errorTrack", T(de, s ? f("palette-error-main") : c.error.main, 0.62)), F(c.Slider, "infoTrack", T(de, s ? f("palette-info-main") : c.info.main, 0.62)), F(c.Slider, "successTrack", T(de, s ? f("palette-success-main") : c.success.main, 0.62)), F(c.Slider, "warningTrack", T(de, s ? f("palette-warning-main") : c.warning.main, 0.62));
      const I = C ? T(ue, s ? f("palette-background-default") : c.background.default, 0.6825) : qr(c.background.default, 0.8);
      F(c.SnackbarContent, "bg", I), F(c.SnackbarContent, "color", ar(() => C ? Rf.text.primary : c.getContrastText(I))), F(c.SpeedDialAction, "fabHoverBg", qr(c.background.paper, 0.15)), F(c.StepConnector, "border", P("palette-grey-400")), F(c.StepContent, "border", P("palette-grey-400")), F(c.Switch, "defaultColor", P("palette-common-white")), F(c.Switch, "defaultDisabledColor", P("palette-grey-100")), F(c.Switch, "primaryDisabledColor", T(de, s ? f("palette-primary-main") : c.primary.main, 0.62)), F(c.Switch, "secondaryDisabledColor", T(de, s ? f("palette-secondary-main") : c.secondary.main, 0.62)), F(c.Switch, "errorDisabledColor", T(de, s ? f("palette-error-main") : c.error.main, 0.62)), F(c.Switch, "infoDisabledColor", T(de, s ? f("palette-info-main") : c.info.main, 0.62)), F(c.Switch, "successDisabledColor", T(de, s ? f("palette-success-main") : c.success.main, 0.62)), F(c.Switch, "warningDisabledColor", T(de, s ? f("palette-warning-main") : c.warning.main, 0.62)), F(c.TableCell, "border", T(de, on(s ? f("palette-divider") : c.divider, 1), 0.88)), F(c.Tooltip, "bg", T(on, s ? f("palette-grey-700") : c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      F(c.Alert, "errorColor", T(de, s ? f("palette-error-light") : c.error.light, 0.6)), F(c.Alert, "infoColor", T(de, s ? f("palette-info-light") : c.info.light, 0.6)), F(c.Alert, "successColor", T(de, s ? f("palette-success-light") : c.success.light, 0.6)), F(c.Alert, "warningColor", T(de, s ? f("palette-warning-light") : c.warning.light, 0.6)), F(c.Alert, "errorFilledBg", P("palette-error-dark")), F(c.Alert, "infoFilledBg", P("palette-info-dark")), F(c.Alert, "successFilledBg", P("palette-success-dark")), F(c.Alert, "warningFilledBg", P("palette-warning-dark")), F(c.Alert, "errorFilledColor", ar(() => c.getContrastText(c.error.dark))), F(c.Alert, "infoFilledColor", ar(() => c.getContrastText(c.info.dark))), F(c.Alert, "successFilledColor", ar(() => c.getContrastText(c.success.dark))), F(c.Alert, "warningFilledColor", ar(() => c.getContrastText(c.warning.dark))), F(c.Alert, "errorStandardBg", T(ue, s ? f("palette-error-light") : c.error.light, 0.9)), F(c.Alert, "infoStandardBg", T(ue, s ? f("palette-info-light") : c.info.light, 0.9)), F(c.Alert, "successStandardBg", T(ue, s ? f("palette-success-light") : c.success.light, 0.9)), F(c.Alert, "warningStandardBg", T(ue, s ? f("palette-warning-light") : c.warning.light, 0.9)), F(c.Alert, "errorIconColor", P("palette-error-main")), F(c.Alert, "infoIconColor", P("palette-info-main")), F(c.Alert, "successIconColor", P("palette-success-main")), F(c.Alert, "warningIconColor", P("palette-warning-main")), F(c.AppBar, "defaultBg", P("palette-grey-900")), F(c.AppBar, "darkBg", P("palette-background-paper")), F(c.AppBar, "darkColor", P("palette-text-primary")), F(c.Avatar, "defaultBg", P("palette-grey-600")), F(c.Button, "inheritContainedBg", P("palette-grey-800")), F(c.Button, "inheritContainedHoverBg", P("palette-grey-700")), F(c.Chip, "defaultBorder", P("palette-grey-700")), F(c.Chip, "defaultAvatarColor", P("palette-grey-300")), F(c.Chip, "defaultIconColor", P("palette-grey-300")), F(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), F(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), F(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), F(c.LinearProgress, "primaryBg", T(ue, s ? f("palette-primary-main") : c.primary.main, 0.5)), F(c.LinearProgress, "secondaryBg", T(ue, s ? f("palette-secondary-main") : c.secondary.main, 0.5)), F(c.LinearProgress, "errorBg", T(ue, s ? f("palette-error-main") : c.error.main, 0.5)), F(c.LinearProgress, "infoBg", T(ue, s ? f("palette-info-main") : c.info.main, 0.5)), F(c.LinearProgress, "successBg", T(ue, s ? f("palette-success-main") : c.success.main, 0.5)), F(c.LinearProgress, "warningBg", T(ue, s ? f("palette-warning-main") : c.warning.main, 0.5)), F(c.Skeleton, "bg", C ? T(on, s ? f("palette-text-primary") : c.text.primary, 0.13) : `rgba(${P("palette-text-primaryChannel")} / 0.13)`), F(c.Slider, "primaryTrack", T(ue, s ? f("palette-primary-main") : c.primary.main, 0.5)), F(c.Slider, "secondaryTrack", T(ue, s ? f("palette-secondary-main") : c.secondary.main, 0.5)), F(c.Slider, "errorTrack", T(ue, s ? f("palette-error-main") : c.error.main, 0.5)), F(c.Slider, "infoTrack", T(ue, s ? f("palette-info-main") : c.info.main, 0.5)), F(c.Slider, "successTrack", T(ue, s ? f("palette-success-main") : c.success.main, 0.5)), F(c.Slider, "warningTrack", T(ue, s ? f("palette-warning-light") : c.warning.main, 0.5));
      const I = C ? T(de, s ? f("palette-background-default") : c.background.default, 0.985) : qr(c.background.default, 0.98);
      F(c.SnackbarContent, "bg", I), F(c.SnackbarContent, "color", ar(() => C ? K1.text.primary : c.getContrastText(I))), F(c.SpeedDialAction, "fabHoverBg", qr(c.background.paper, 0.15)), F(c.StepConnector, "border", P("palette-grey-600")), F(c.StepContent, "border", P("palette-grey-600")), F(c.Switch, "defaultColor", P("palette-grey-300")), F(c.Switch, "defaultDisabledColor", P("palette-grey-600")), F(c.Switch, "primaryDisabledColor", T(ue, s ? f("palette-primary-main") : c.primary.main, 0.55)), F(c.Switch, "secondaryDisabledColor", T(ue, s ? f("palette-secondary-main") : c.secondary.main, 0.55)), F(c.Switch, "errorDisabledColor", T(ue, s ? f("palette-error-main") : c.error.main, 0.55)), F(c.Switch, "infoDisabledColor", T(ue, s ? f("palette-info-main") : c.info.main, 0.55)), F(c.Switch, "successDisabledColor", T(ue, s ? f("palette-success-main") : c.success.main, 0.55)), F(c.Switch, "warningDisabledColor", T(ue, s ? f("palette-warning-light") : c.warning.main, 0.55)), F(c.TableCell, "border", T(ue, on(s ? f("palette-divider") : c.divider, 1), 0.68)), F(c.Tooltip, "bg", T(on, s ? f("palette-grey-700") : c.grey[700], 0.92));
    }
    s || (Er(c.background, "default"), Er(c.background, "paper"), Er(c.common, "background"), Er(c.common, "onBackground"), Er(c, "divider")), Object.keys(c).forEach((I) => {
      const O = c[I];
      I !== "tonalOffset" && !s && O && typeof O == "object" && (O.main && F(c[I], "mainChannel", gr(Os(O.main))), O.light && F(c[I], "lightChannel", gr(Os(O.light))), O.dark && F(c[I], "darkChannel", gr(Os(O.dark))), O.contrastText && F(c[I], "contrastTextChannel", gr(Os(O.contrastText))), I === "text" && (Er(c[I], "primary"), Er(c[I], "secondary")), I === "action" && (O.active && Er(c[I], "active"), O.selected && Er(c[I], "selected")));
    });
  }), k = t.reduce((M, c) => ht(M, c), k);
  const $ = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: sT(k),
    enableContrastVars: s
  }, {
    vars: E,
    generateThemeVars: A,
    generateStyleSheets: z
  } = U1(k, $);
  return k.vars = E, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([M, c]) => {
    k[M] = c;
  }), k.generateThemeVars = A, k.generateStyleSheets = z, k.generateSpacing = function() {
    return im(p.spacing, Na(this));
  }, k.getColorSchemeSelector = H1(l), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = a, k.unstable_sxConfig = {
    ...is,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, k.unstable_sx = function(c) {
    return Fr({
      sx: c,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = Q1, k;
}
function Tg(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: mm({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ku(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", l = o == null ? void 0 : o[a], d = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof l != "boolean" && l,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Ef(e, ...t);
    let p = n;
    "palette" in e || d[a] && (d[a] !== !0 ? p = d[a].palette : a === "dark" && (p = {
      mode: "dark"
    }));
    const m = Ef({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = a, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, Tg(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, Tg(m, "light", d.light)), m;
  }
  return !n && !("light" in d) && a === "light" && (d.light = !0), uT({
    ...s,
    colorSchemes: d,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
function dT(e) {
  return pe("MuiCheckbox", e);
}
const yd = ce("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]);
function xc(e) {
  return typeof e == "string";
}
function Tu(e, t = 166) {
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
function dt(...e) {
  const t = g.useRef(void 0), n = g.useCallback((r) => {
    const o = e.map((i) => {
      if (i == null)
        return null;
      if (typeof i == "function") {
        const s = i, a = s(r);
        return typeof a == "function" ? a : () => {
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
  return g.useMemo(() => e.every((r) => r == null) ? null : (r) => {
    t.current && (t.current(), t.current = void 0), r != null && (t.current = n(r));
  }, e);
}
function tt(e) {
  const t = g.useRef(e);
  return gt(() => {
    t.current = e;
  }), g.useRef((...n) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...n)
  )).current;
}
function St(e) {
  return e && e.ownerDocument || document;
}
function rr(e) {
  return St(e).defaultView || window;
}
function ll(e) {
  return parseInt(e, 10) || 0;
}
const fT = {
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
function pT(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Rg(e) {
  return pT(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const mT = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: a,
    ...l
  } = t, {
    current: d
  } = g.useRef(a != null), p = g.useRef(null), m = dt(n, p), x = g.useRef(null), f = g.useRef(null), v = g.useCallback(() => {
    const S = p.current, C = f.current;
    if (!S || !C)
      return;
    const k = rr(S).getComputedStyle(S);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    C.style.width = k.width, C.value = S.value || t.placeholder || "x", C.value.slice(-1) === `
` && (C.value += " ");
    const $ = k.boxSizing, E = ll(k.paddingBottom) + ll(k.paddingTop), A = ll(k.borderBottomWidth) + ll(k.borderTopWidth), z = C.scrollHeight;
    C.value = "x";
    const M = C.scrollHeight;
    let c = z;
    i && (c = Math.max(Number(i) * M, c)), o && (c = Math.min(Number(o) * M, c)), c = Math.max(c, M);
    const P = c + ($ === "border-box" ? E + A : 0), T = Math.abs(c - z) <= 1;
    return {
      outerHeightStyle: P,
      overflowing: T
    };
  }, [o, i, t.placeholder]), b = tt(() => {
    const S = p.current, C = v();
    if (!S || !C || Rg(C))
      return !1;
    const R = C.outerHeightStyle;
    return x.current != null && x.current !== R;
  }), w = g.useCallback(() => {
    const S = p.current, C = v();
    if (!S || !C || Rg(C))
      return;
    const R = C.outerHeightStyle;
    x.current !== R && (x.current = R, S.style.height = `${R}px`), S.style.overflow = C.overflowing ? "hidden" : "";
  }, [v]), y = g.useRef(-1);
  gt(() => {
    const S = Tu(w), C = p == null ? void 0 : p.current;
    if (!C)
      return;
    const R = rr(C);
    R.addEventListener("resize", S);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      b() && (k.unobserve(C), cancelAnimationFrame(y.current), w(), y.current = requestAnimationFrame(() => {
        k.observe(C);
      }));
    }), k.observe(C)), () => {
      S.clear(), cancelAnimationFrame(y.current), R.removeEventListener("resize", S), k && k.disconnect();
    };
  }, [v, w, b]), gt(() => {
    w();
  });
  const h = (S) => {
    d || w();
    const C = S.target, R = C.value.length, k = C.value.endsWith(`
`), $ = C.selectionStart === R;
    k && $ && C.setSelectionRange(R, R), r && r(S);
  };
  return /* @__PURE__ */ u.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ u.jsx("textarea", {
      value: a,
      onChange: h,
      ref: m,
      rows: i,
      style: s,
      ...l
    }), /* @__PURE__ */ u.jsx("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: f,
      tabIndex: -1,
      style: {
        ...fT.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), Fa = /* @__PURE__ */ g.createContext(void 0);
function hm() {
  return g.useContext(Fa);
}
function vo({
  props: e,
  states: t
}) {
  const n = g.useContext(Fa), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const gm = ku();
function xo() {
  const e = Cu(gm);
  return e[br] || e;
}
function hT(e) {
  return /* @__PURE__ */ u.jsx($1, {
    ...e,
    defaultTheme: gm,
    themeId: br
  });
}
function J1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Nt = (e) => J1(e) && e !== "classes", U = lm({
  themeId: br,
  defaultTheme: gm,
  rootShouldForwardProp: Nt
});
function gT(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ u.jsx(hT, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const ve = D1;
function ge(e) {
  return B1(e);
}
function yr(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function Eg(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Sc(e, t = !1) {
  return e && (Eg(e.value) && e.value !== "" || t && Eg(e.defaultValue) && e.defaultValue !== "");
}
function yT(e) {
  return e.startAdornment;
}
function vT(e) {
  return pe("MuiInputBase", e);
}
const yn = ce("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), xT = {
  transition: "none"
};
function ST(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const ym = (e) => e.scrollTop, ex = {}, bT = ["all"], CT = {};
function zn(e, t) {
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
function bc(e, t) {
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
function ls(e, t) {
  var r;
  const n = t ?? xT;
  return ST((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function qe(e, t = bT, n = CT) {
  var s, a;
  const r = (a = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : a.call(s, t, n), o = ls(e);
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
var Pg;
const $f = "mui-auto-fill", Cc = "mui-auto-fill-cancel", Ru = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${J(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, Eu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, wT = (e) => {
  const {
    classes: t,
    color: n,
    disabled: r,
    error: o,
    endAdornment: i,
    focused: s,
    formControl: a,
    fullWidth: l,
    hiddenLabel: d,
    multiline: p,
    readOnly: m,
    size: x,
    startAdornment: f,
    type: v
  } = e, b = {
    root: ["root", `color${J(n)}`, r && "disabled", o && "error", l && "fullWidth", s && "focused", a && "formControl", x && x !== "medium" && `size${J(x)}`, p && "multiline", f && "adornedStart", i && "adornedEnd", d && "hiddenLabel", m && "readOnly"],
    input: ["input", r && "disabled", v === "search" && "inputTypeSearch", m && "readOnly"]
  };
  return me(b, vT, t);
}, Pu = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: Ru
})(ve(({
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
}))), $u = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: Eu
})(ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = {
    color: "currentColor",
    ...e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: t ? 0.42 : 0.5
    },
    ...qe(e, "opacity", {
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
        ownerState: i
      }) => !i.disableInjectingGlobalStyles,
      style: {
        animationName: Cc,
        animationDuration: "10ms",
        "&:-webkit-autofill": {
          animationDuration: "5000s",
          animationName: $f
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
})), $g = gT({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${$f}`]: {
    from: {
      animationName: $f
    }
  },
  [`@keyframes ${Cc}`]: {
    from: {
      animationName: Cc
    }
  }
}), vm = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": o,
    "aria-label": i,
    autoComplete: s,
    autoFocus: a,
    className: l,
    color: d,
    defaultValue: p,
    disabled: m,
    disableInjectingGlobalStyles: x,
    endAdornment: f,
    error: v,
    fullWidth: b = !1,
    id: w,
    inputComponent: y = "input",
    inputProps: h = {},
    inputRef: S,
    margin: C,
    maxRows: R,
    minRows: k,
    multiline: $ = !1,
    name: E,
    onBlur: A,
    onChange: z,
    onClick: M,
    onFocus: c,
    onKeyDown: P,
    onKeyUp: T,
    placeholder: I,
    readOnly: O,
    renderSuffix: N,
    rows: j,
    size: B,
    slotProps: _ = {},
    slots: G = {},
    startAdornment: W,
    type: Z = "text",
    value: V,
    ...Y
  } = r, K = h.value != null ? h.value : V, {
    current: Q
  } = g.useRef(K != null), H = g.useRef(), ne = g.useCallback((ie) => {
  }, []), ae = dt(H, S, h.ref, ne), [Ee, Pe] = g.useState(!1), [we, le] = vo({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  we.focused = le ? le.focused : Ee, g.useEffect(() => {
    !le && m && Ee && (Pe(!1), A && A());
  }, [le, m, Ee, A]);
  const Ne = le && le.onFilled, Ve = le && le.onEmpty, Re = g.useCallback((ie) => {
    Sc(ie) ? Ne && Ne() : Ve && Ve();
  }, [Ne, Ve]);
  gt(() => {
    Q && Re({
      value: K
    });
  }, [K, Re, Q]), gt(() => {
    if (!a)
      return;
    const ie = H.current;
    if (!ie)
      return;
    const ke = St(ie), Me = yr(ke), Je = Me == null || Me === ke.body || Me === ke.documentElement;
    ie === Me ? le && le.onFocus ? le.onFocus() : Pe(!0) : Je && ie.focus();
  }, [a]);
  const Oe = (ie) => {
    c && c(ie), h.onFocus && h.onFocus(ie), le && le.onFocus ? le.onFocus(ie) : Pe(!0);
  }, ye = (ie) => {
    A && A(ie), h.onBlur && h.onBlur(ie), le && le.onBlur ? le.onBlur(ie) : Pe(!1);
  }, ze = (ie, ...ke) => {
    if (!Q) {
      const Me = ie.target || H.current;
      if (Me == null)
        throw new Error(wn(1));
      Re({
        value: Me.value
      });
    }
    h.onChange && h.onChange(ie, ...ke), z && z(ie, ...ke);
  };
  g.useEffect(() => {
    Re(H.current);
  }, []);
  const Xe = (ie) => {
    H.current && ie.currentTarget === ie.target && H.current.focus(), M && M(ie);
  };
  let Be = y, Ke = h;
  $ && Be === "input" && (j ? Ke = {
    type: void 0,
    minRows: j,
    maxRows: j,
    ...Ke
  } : Ke = {
    type: void 0,
    maxRows: R,
    minRows: k,
    ...Ke
  }, Be = mT);
  const We = (ie) => {
    Re(ie.animationName === Cc ? H.current : {
      value: "x"
    });
  };
  g.useEffect(() => {
    le && le.setAdornedStart(!!W);
  }, [le, W]);
  const it = {
    ...r,
    color: we.color || "primary",
    disabled: we.disabled,
    endAdornment: f,
    error: we.error,
    focused: we.focused,
    formControl: le,
    fullWidth: b,
    hiddenLabel: we.hiddenLabel,
    multiline: $,
    size: we.size,
    startAdornment: W,
    type: Z
  }, Fe = wT(it), Te = G.root || Pu, Ue = _.root || {}, bt = G.input || $u;
  return Ke = {
    ...Ke,
    ..._.input
  }, /* @__PURE__ */ u.jsxs(g.Fragment, {
    children: [!x && typeof $g == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Pg || (Pg = /* @__PURE__ */ u.jsx($g, {}))), /* @__PURE__ */ u.jsxs(Te, {
      ...Ue,
      ref: n,
      onClick: Xe,
      ...Y,
      ...!xc(Te) && {
        ownerState: {
          ...it,
          ...Ue.ownerState
        }
      },
      className: ee(Fe.root, Ue.className, l, O && "MuiInputBase-readOnly"),
      children: [W, /* @__PURE__ */ u.jsx(Fa.Provider, {
        value: null,
        children: /* @__PURE__ */ u.jsx(bt, {
          "aria-invalid": we.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: a,
          defaultValue: p,
          disabled: we.disabled,
          id: w,
          onAnimationStart: We,
          name: E,
          placeholder: I,
          readOnly: O,
          required: we.required,
          rows: j,
          value: K,
          onKeyDown: P,
          onKeyUp: T,
          type: Z,
          ...Ke,
          ...!xc(bt) && {
            as: Be,
            ownerState: {
              ...it,
              ...Ke.ownerState
            }
          },
          ref: ae,
          className: ee(Fe.input, Ke.className, O && "MuiInputBase-readOnly"),
          onBlur: ye,
          onChange: ze,
          onFocus: Oe
        })
      }), f, N ? N({
        ...we,
        startAdornment: W
      }) : null]
    })]
  });
});
function kT(e) {
  return pe("MuiFilledInput", e);
}
const wo = {
  ...yn,
  ...ce("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function TT(e) {
  return pe("MuiFormControlLabel", e);
}
const zs = ce("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementEnd", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function RT(e) {
  return pe("MuiFormHelperText", e);
}
const Ig = ce("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function ET(e) {
  return pe("MuiFormLabel", e);
}
const Ks = ce("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function PT(e) {
  return pe("MuiInput", e);
}
const Cs = {
  ...yn,
  ...ce("MuiInput", ["root", "underline", "input"])
};
function $T(e) {
  return pe("MuiMenuItem", e);
}
const ws = ce("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function IT(e) {
  return pe("MuiNativeSelect", e);
}
const xm = ce("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function MT(e) {
  return pe("MuiOutlinedInput", e);
}
const lr = {
  ...yn,
  ...ce("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function jT(e) {
  return pe("MuiRadio", e);
}
const Mg = ce("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]);
function AT({
  theme: e,
  ...t
}) {
  const n = br in e ? e[br] : void 0;
  return /* @__PURE__ */ u.jsx(F1, {
    ...t,
    themeId: n ? br : void 0,
    theme: n || e
  });
}
const cl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: OT
} = S2({
  themeId: br,
  // @ts-ignore ignore module augmentation tests
  theme: () => ku({
    cssVariables: !0
  }),
  colorSchemeStorageKey: cl.colorSchemeStorageKey,
  modeStorageKey: cl.modeStorageKey,
  defaultColorScheme: {
    light: cl.defaultLightColorScheme,
    dark: cl.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: X1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Fr({
        sx: r,
        theme: this
      });
    }, t;
  }
}), zT = OT;
function NT({
  theme: e,
  ...t
}) {
  const n = g.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = br in e ? e[br] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ u.jsx(AT, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ u.jsx(zT, {
    theme: e,
    ...t
  });
}
function If(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o);
  }, () => {
  });
}
function LT(e) {
  return pe("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const BT = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(n)}`]
  };
  return me(o, LT, r);
}, FT = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${J(n.color)}`], t[`fontSize${J(n.fontSize)}`]];
  }
})(ve(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, l, d, p, m, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...qe(e, "fill", {
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
          fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var v, b;
        return {
          props: {
            color: f
          },
          style: {
            color: (b = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : b.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (p = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) == null ? void 0 : p.active
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
})), Mf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: x = "0 0 24 24",
    ...f
  } = r, v = /* @__PURE__ */ g.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: x,
    hasSvgAsChild: v
  }, w = {};
  p || (w.viewBox = x);
  const y = BT(b);
  return /* @__PURE__ */ u.jsxs(FT, {
    as: a,
    className: ee(y.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...w,
    ...f,
    ...v && o.props,
    ownerState: b,
    children: [v ? o.props.children : o, m ? /* @__PURE__ */ u.jsx("title", {
      children: m
    }) : null]
  });
});
Mf.muiName = "SvgIcon";
function mn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ u.jsx(Mf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Mf.muiName, /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(n));
}
function jf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ca(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = g.useRef(t !== void 0), [s, a] = g.useState(n), l = i ? t : s, d = g.useCallback((p) => {
    i || a(p);
  }, []);
  return [l, d];
}
function nx(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function rx(e, t) {
  if (!e)
    return t;
  function n(s, a) {
    const l = {};
    return Object.keys(a).forEach((d) => {
      nx(d, a[d]) && typeof s[d] == "function" && (l[d] = (...p) => {
        s[d](...p), a[d](...p);
      });
    }), l;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const a = typeof t == "function" ? t(s) : t, l = typeof e == "function" ? e({
        ...s,
        ...a
      }) : e, d = ee(s == null ? void 0 : s.className, a == null ? void 0 : a.className, l == null ? void 0 : l.className), p = n(l, a);
      return {
        ...a,
        ...l,
        ...p,
        ...!!d && {
          className: d
        },
        ...(a == null ? void 0 : a.style) && (l == null ? void 0 : l.style) && {
          style: {
            ...a.style,
            ...l.style
          }
        },
        ...(a == null ? void 0 : a.sx) && (l == null ? void 0 : l.sx) && {
          sx: [...Array.isArray(a.sx) ? a.sx : [a.sx], ...Array.isArray(l.sx) ? l.sx : [l.sx]]
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
const jg = {};
function Sm(e, t) {
  const n = g.useRef(jg);
  return n.current === jg && (n.current = e(t)), n;
}
function DT(e) {
  const t = Sm(() => _T(e)).current;
  return t.next = e, gt(t.effect), t;
}
function _T(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const Ag = Qy.createContext(null);
function WT(e) {
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
function UT(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = WT(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function ox(e) {
  const {
    in: t = !1,
    appear: n = !1,
    enter: r = !0,
    exit: o = !0,
    mountOnEnter: i = !1,
    unmountOnExit: s = !1,
    timeout: a,
    addEndListener: l,
    reduceMotion: d = !1,
    getAutoTimeout: p,
    nodeRef: m,
    onEnter: x,
    onEntering: f,
    onEntered: v,
    onExit: b,
    onExiting: w,
    onExited: y,
    children: h,
    ...S
  } = e, C = g.useContext(Ag), R = C && !C.isMounting ? r : n, [k, $] = g.useState(() => t ? R ? "exited" : "entered" : i || s ? "unmounted" : "exited"), E = g.useRef(k);
  E.current = k, t && k === "unmounted" && (E.current = "exited", $("exited"));
  const A = g.useRef(t && R), z = g.useRef(!1), M = g.useRef(null), c = g.useRef(k), P = g.useRef(!1), T = g.useRef(d), I = DT({
    timeout: a,
    addEndListener: l,
    reduceMotion: d,
    getAutoTimeout: p,
    onEnter: x,
    onEntering: f,
    onEntered: v,
    onExit: b,
    onExiting: w,
    onExited: y,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: m,
    parentGroup: C
  }), O = g.useCallback(() => {
    M.current !== null && (M.current.cancel(), M.current = null);
  }, []), N = g.useCallback((W) => {
    let Z = !0;
    const V = () => {
      Z && (Z = !1, M.current = null, W());
    };
    return V.cancel = () => {
      Z = !1;
    }, M.current = V, V;
  }, []), j = g.useCallback((W, Z) => {
    var Ve, Re;
    let V;
    const Y = () => {
      V !== void 0 && (clearTimeout(V), V = void 0);
    }, K = N(() => {
      Y(), E.current = W, $(W);
    }), Q = K.cancel;
    K.cancel = () => {
      Y(), Q();
    };
    const H = I.current.nodeRef.current, ne = I.current.addEndListener, ae = I.current.getAutoTimeout !== void 0, Ee = (Re = (Ve = I.current).getAutoTimeout) == null ? void 0 : Re.call(Ve), Pe = UT({
      currentStatus: Z,
      isAppearing: P.current,
      timeout: I.current.timeout,
      autoTimeout: Ee
    }), we = T.current, le = Pe ?? (we && ae ? 0 : null), Ne = (Oe) => {
      V = setTimeout(K, Oe);
    };
    if (!H) {
      Ne(0);
      return;
    }
    if (ne) {
      le != null && Ne(we ? 0 : le), ne.length >= 2 ? ne(H, K) : ne(K);
      return;
    }
    Ne(we ? 0 : Pe ?? 0);
  }, [N, I]), B = g.useCallback((W) => {
    var Y;
    const Z = I.current, V = Z.parentGroup ? Z.parentGroup.isMounting : W;
    if (P.current = V, !W && !Z.enter) {
      E.current = "entered", $("entered");
      return;
    }
    T.current = Z.reduceMotion, (Y = Z.onEnter) == null || Y.call(Z, V), E.current = "entering", $("entering");
  }, [I]), _ = g.useCallback(() => {
    var Z;
    const W = I.current;
    if (!W.exit) {
      E.current = "exited", $("exited");
      return;
    }
    T.current = W.reduceMotion, (Z = W.onExit) == null || Z.call(W), E.current = "exiting", $("exiting");
  }, [I]), G = g.useCallback((W, Z) => {
    if (O(), Z === "entering") {
      const V = I.current;
      if (V.mountOnEnter || V.unmountOnExit) {
        const Y = V.nodeRef.current;
        Y && ym(Y);
      }
      B(W);
    } else
      _();
  }, [O, B, _, I]);
  return gt(() => (z.current = !0, A.current && (A.current = !1, G(!0, "entering")), () => {
    z.current = !1, O();
  }), [O, G]), gt(() => {
    if (!z.current)
      return;
    const W = E.current;
    t ? W !== "entering" && W !== "entered" && G(!1, "entering") : W === "entering" || W === "entered" ? G(!1, "exiting") : W === "exited" && s && (E.current = "unmounted", $("unmounted"));
  }, [t, k, s, G]), gt(() => {
    var Y, K, Q, H;
    if (k === "unmounted" || c.current === "unmounted") {
      c.current = k;
      return;
    }
    const Z = c.current !== k;
    Z && (c.current = k);
    const V = I.current;
    k === "entering" ? (Z && ((Y = V.onEntering) == null || Y.call(V, P.current)), M.current === null && E.current === k && j("entered", "entering")) : k === "exiting" ? (Z && ((K = V.onExiting) == null || K.call(V)), M.current === null && E.current === k && j("exited", "exiting")) : k === "entered" && Z ? (Q = V.onEntered) == null || Q.call(V, P.current) : k === "exited" && Z && ((H = V.onExited) == null || H.call(V));
  }, [I, j, k]), k === "unmounted" ? null : /* @__PURE__ */ u.jsx(Ag.Provider, {
    value: null,
    children: h(k, S)
  });
}
const ix = "(prefers-reduced-motion: reduce)", HT = 0, VT = "0ms", KT = () => {
}, Og = () => !1, YT = () => !0, GT = () => KT;
function XT(e) {
  const [t, n] = g.useState(() => ({
    enabled: e,
    matches: e ? null : !1
  }));
  let r = t.matches;
  return t.enabled !== e && (r = null, e || (r = !1)), gt(() => {
    const o = (a) => {
      n((l) => l.enabled === e && l.matches === a ? l : {
        enabled: e,
        matches: a
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
    const i = window.matchMedia(ix), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const QT = {
  ...Vl
}, sx = QT.useSyncExternalStore;
function qT(e) {
  const t = e ? YT : Og, [n, r] = g.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [Og, GT];
    const o = window.matchMedia(ix);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return sx(r, n, t);
}
const ZT = sx !== void 0 ? qT : XT;
function Iu(e, t) {
  const n = ZT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return g.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: HT,
        delay: VT
      } : o;
    }
  }), [r]);
}
function ax(e, t, n) {
  return e === void 0 || xc(e) ? t : {
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
function wc(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    nx(n, e[n]) && (t[n] = e[n]);
  return t;
}
function zg(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach((n) => {
    t[n] = e[n];
  }), t;
}
function cx(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = ee(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), v = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, b = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (b.className = f), Object.keys(v).length > 0 && (b.style = v), {
      props: b,
      internalRef: void 0
    };
  }
  const s = wc({
    ...o,
    ...r
  }), a = zg(r), l = zg(o), d = t(s), p = ee(d == null ? void 0 : d.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), m = {
    ...d == null ? void 0 : d.style,
    ...n == null ? void 0 : n.style,
    ...o == null ? void 0 : o.style,
    ...r == null ? void 0 : r.style
  }, x = {
    ...d,
    ...n,
    ...l,
    ...a
  };
  return p.length > 0 && (x.className = p), Object.keys(m).length > 0 && (x.style = m), {
    props: x,
    internalRef: d.ref
  };
}
function be(e, t) {
  const {
    className: n,
    elementType: r,
    ownerState: o,
    externalForwardedProps: i,
    internalForwardedProps: s,
    shouldForwardComponentProp: a = !1,
    ...l
  } = t, {
    component: d,
    slots: p = {
      [e]: void 0
    },
    slotProps: m = {
      [e]: void 0
    },
    ...x
  } = i, f = p[e] || r, v = lx(m[e], o), {
    props: {
      component: b,
      ...w
    },
    internalRef: y
  } = cx({
    className: n,
    ...l,
    externalForwardedProps: e === "root" ? x : void 0,
    externalSlotProps: v
  }), h = dt(y, v == null ? void 0 : v.ref, t.ref), S = e === "root" ? b || d : b, C = ax(f, {
    ...e === "root" && !d && !p[e] && s,
    ...e !== "root" && !p[e] && s,
    ...w,
    ...S && !a && {
      as: S
    },
    ...S && a && {
      component: S
    },
    ref: h
  }, o);
  return [f, C];
}
function JT(e) {
  return pe("MuiPaper", e);
}
ce("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const eR = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return me(i, JT, o);
}, tR = U("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(ve(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  ...qe(e, "box-shadow"),
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
}))), Ln = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var f;
  const r = ge({
    props: t,
    name: "MuiPaper"
  }), o = xo(), {
    className: i,
    component: s = "div",
    elevation: a = 1,
    square: l = !1,
    variant: d = "elevation",
    ...p
  } = r, m = {
    ...r,
    component: s,
    elevation: a,
    square: l,
    variant: d
  }, x = eR(m);
  return /* @__PURE__ */ u.jsx(tR, {
    as: s,
    ownerState: m,
    className: ee(x.root, i),
    ref: n,
    ...p,
    style: {
      ...d === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[a],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[a]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${ba("#fff", Pf(a))}, ${ba("#fff", Pf(a))})`
        }
      },
      ...p.style
    }
  });
});
function kc(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function nR(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, a = r && t === !1;
  return g.useMemo(() => {
    const d = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(p) {
        n && t && p.key !== "Tab" && p.preventDefault();
      }
    };
    return r || (d.tabIndex = o, !i && n && (d.tabIndex = t ? o : -1)), (i && (t || s) || !i && n) && (d["aria-disabled"] = n), i && (!t || a) && (d.disabled = n), d;
  }, [r, n, t, s, a, i, o]);
}
const rR = {};
function oR(e) {
  const {
    nativeButton: t,
    disabled: n,
    type: r,
    hasFormAction: o = !1,
    tabIndex: i = 0,
    focusableWhenDisabled: s,
    stopEventPropagation: a = !1,
    onBeforeKeyDown: l,
    onBeforeKeyUp: d
  } = e, p = g.useRef(null), m = s === !0, x = nR({
    focusableWhenDisabled: m,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = g.useCallback(() => {
    const w = p.current;
    return w == null ? t : w.tagName === "BUTTON" ? !0 : !!(w.tagName === "A" && w.href);
  }, [t]), v = g.useMemo(() => {
    const w = m ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (w.type = r === void 0 && !o ? "button" : r, m || (w.disabled = n)) : (w.role = "button", !m && n && (w["aria-disabled"] = n)), m ? {
      ...w,
      ...x
    } : w;
  }, [n, m, x, o, t, i, r]);
  return {
    getButtonProps: g.useCallback((w = rR) => {
      const {
        onClick: y,
        onKeyDown: h,
        onKeyUp: S,
        ...C
      } = w;
      return {
        ...v,
        ...C,
        onClick: (E) => {
          if (a && E.stopPropagation(), n) {
            E.preventDefault();
            return;
          }
          y == null || y(E);
        },
        onKeyDown: (E) => {
          if (m && x.onKeyDown(E), !n && (l == null || l(E), h == null || h(E), !(E.target !== E.currentTarget || f()))) {
            if (E.key === " ") {
              E.preventDefault();
              return;
            }
            E.key === "Enter" && (E.preventDefault(), E.currentTarget.click());
          }
        },
        onKeyUp: (E) => {
          n || (d == null || d(E), S == null || S(E), E.target === E.currentTarget && !f() && E.key === " " && !E.defaultPrevented && E.currentTarget.click());
        }
      };
    }, [v, n, m, x, f, l, d, a]),
    rootRef: p
  };
}
class Tc {
  constructor() {
    ds(this, "mountEffect", () => {
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
    return new Tc();
  }
  static use() {
    const t = Sm(Tc.create).current, [n, r] = g.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, g.useEffect(t.mountEffect, [n]), t;
  }
  mount() {
    return this.mounted || (this.mounted = sR(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function iR() {
  return Tc.use();
}
function sR() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const aR = [];
function ux(e) {
  g.useEffect(e, aR);
}
class Mu {
  constructor() {
    ds(this, "currentId", null);
    ds(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    ds(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Mu();
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
function vr() {
  const e = Sm(Mu.create).current;
  return ux(e.disposeEffect), e;
}
function lR(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: l,
    timeout: d
  } = e, [p, m] = g.useState(!1), x = vr(), f = g.useRef(!1), v = g.useRef(l);
  v.current = l;
  const b = l != null, w = ee(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = ee(n.child, p && n.childLeaving, r && n.childPulsate);
  return !a && !p && m(!0), g.useEffect(() => {
    !a && b ? f.current || (f.current = !0, x.start(d, () => {
      var S;
      f.current = !1, (S = v.current) == null || S.call(v);
    })) : (f.current = !1, x.clear());
  }, [x, b, a, d]), /* @__PURE__ */ u.jsx("span", {
    className: w,
    style: y,
    children: /* @__PURE__ */ u.jsx("span", {
      className: h
    })
  });
}
const Jt = ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Af = 550, cR = 80, ul = {}, Ng = [], uR = () => {
};
function vd(e, t) {
  const n = new Set(t), r = /* @__PURE__ */ new Map();
  let o = [];
  for (const s of e)
    n.has(s) ? o.length > 0 && (r.set(s, o), o = []) : o.push(s);
  const i = [];
  for (const s of t) {
    const a = r.get(s);
    a && i.push(...a), i.push(s);
  }
  return i.push(...o), i;
}
function dR({
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
      clientX: a,
      clientY: l
    } = e.touches && e.touches.length > 0 ? e.touches[0] : e;
    o = Math.round(a - r.left), i = Math.round(l - r.top);
  }
  let s;
  if (n)
    s = Math.sqrt((2 * r.width ** 2 + r.height ** 2) / 3), s % 2 === 0 && (s += 1);
  else {
    const a = Math.max(Math.abs((t ? t.clientWidth : 0) - o), o) * 2 + 2, l = Math.max(Math.abs((t ? t.clientHeight : 0) - i), i) * 2 + 2;
    s = Math.sqrt(a ** 2 + l ** 2);
  }
  return {
    rippleX: o,
    rippleY: i,
    rippleSize: s
  };
}
const fR = yo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, pR = yo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, mR = yo`
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
function hR(e) {
  if (e.motion.reducedMotion === "always")
    return null;
  const t = co`
    &.${Jt.rippleVisible} {
      animation-name: ${fR};
      animation-duration: ${Af}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${Jt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${Jt.childLeaving} {
      animation-name: ${pR};
      animation-duration: ${Af}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${Jt.childPulsate} {
      animation-name: ${mR};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? co`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const gR = U("span", {
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
}), yR = U(lR, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Jt.rippleVisible} {
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
  & .${Jt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Jt.childLeaving} {
    opacity: 0;
  }

  & .${Jt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => hR(e)}
`, vR = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTouchRipple"
  }), o = xo(), i = Iu(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: a = ul,
    className: l,
    ...d
  } = r, [p, m] = g.useState({
    items: Ng,
    order: Ng
  }), x = p.items, f = g.useRef(0), v = g.useRef(null), b = g.useRef(!1);
  ux(() => (b.current = !0, () => {
    b.current = !1;
  })), g.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [x]);
  const w = g.useRef(!1), y = vr(), h = g.useRef(null), S = g.useRef(null), C = tt((M) => {
    b.current && m((c) => {
      const P = c.items.filter((I) => I.key !== M), T = vd(c.order.filter((I) => I !== M), P.filter((I) => !I.exiting).map((I) => I.key));
      return {
        items: P,
        order: T
      };
    });
  }), R = tt((M) => {
    const {
      pulsate: c,
      rippleX: P,
      rippleY: T,
      rippleSize: I,
      cb: O
    } = M, N = f.current;
    f.current += 1, m((j) => {
      const B = [...j.items, {
        key: N,
        pulsate: c,
        rippleX: P,
        rippleY: T,
        rippleSize: I,
        exiting: !1
      }];
      return {
        items: B,
        order: vd(j.order, B.filter((_) => !_.exiting).map((_) => _.key))
      };
    }), v.current = O;
  }), k = tt((M = ul, c = ul, P = uR) => {
    const {
      pulsate: T = !1,
      center: I = s || c.pulsate,
      fakeElement: O = !1
      // Used only by tests.
    } = c;
    if ((M == null ? void 0 : M.type) === "mousedown" && w.current) {
      w.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (w.current = !0);
    const N = O ? null : S.current, {
      rippleX: j,
      rippleY: B,
      rippleSize: _
    } = dR({
      event: M,
      element: N,
      center: I
    });
    M != null && M.touches ? h.current === null && (h.current = () => {
      R({
        pulsate: T,
        rippleX: j,
        rippleY: B,
        rippleSize: _,
        cb: P
      });
    }, y.start(cR, () => {
      h.current && (h.current(), h.current = null);
    })) : R({
      pulsate: T,
      rippleX: j,
      rippleY: B,
      rippleSize: _,
      cb: P
    });
  }), $ = tt(() => {
    k(ul, {
      pulsate: !0
    });
  }), E = tt((M, c) => {
    if (y.clear(), (M == null ? void 0 : M.type) === "touchend" && h.current) {
      h.current(), h.current = null, y.start(0, () => {
        E(M, c);
      });
      return;
    }
    h.current = null, m((P) => {
      const T = P.items.findIndex((O) => !O.exiting);
      if (T === -1)
        return P;
      const I = P.items.slice();
      return I[T] = {
        ...I[T],
        exiting: !0
      }, {
        items: I,
        order: vd(P.order, I.filter((O) => !O.exiting).map((O) => O.key))
      };
    }), v.current = c;
  });
  g.useImperativeHandle(n, () => ({
    pulsate: $,
    start: k,
    stop: E
  }), [$, k, E]);
  const A = new Map(x.map((M) => [M.key, M])), z = p.order.map((M) => A.get(M)).filter(Boolean);
  return /* @__PURE__ */ u.jsx(gR, {
    className: ee(Jt.root, a.root, l),
    ref: S,
    ...d,
    children: z.map((M) => /* @__PURE__ */ u.jsx(yR, {
      classes: {
        ripple: ee(a.ripple, Jt.ripple),
        rippleVisible: ee(a.rippleVisible, Jt.rippleVisible),
        ripplePulsate: ee(a.ripplePulsate, Jt.ripplePulsate),
        child: ee(a.child, Jt.child),
        childLeaving: ee(a.childLeaving, Jt.childLeaving),
        childPulsate: ee(a.childPulsate, Jt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : Af,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => C(M.key)
    }, M.key))
  });
});
function xR(e) {
  return pe("MuiButtonBase", e);
}
const SR = ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), bR = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, a = me({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, xR, i);
  return n && !o && r && (a.root += ` ${r}`), a;
}, CR = U("button", {
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
  [`&.${SR.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), po = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: l = "button",
    disabled: d = !1,
    disableRipple: p = !1,
    disableTouchRipple: m = !1,
    focusRipple: x = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: v,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: b = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: w,
    /* eslint-enable react/prop-types */
    LinkComponent: y = "a",
    nativeButton: h,
    onBlur: S,
    onClick: C,
    onContextMenu: R,
    onDragLeave: k,
    onFocus: $,
    onFocusVisible: E,
    onKeyDown: A,
    onKeyUp: z,
    onMouseDown: M,
    onMouseLeave: c,
    onMouseUp: P,
    onTouchEnd: T,
    onTouchMove: I,
    onTouchStart: O,
    tabIndex: N = 0,
    TouchRippleProps: j,
    touchRippleRef: B,
    type: _,
    ...G
  } = r, W = !!(G.href || G.to), Z = !!G.formAction;
  let V = l;
  V === "button" && W && (V = y);
  const K = h ?? (typeof V == "string" ? V === "button" : w ?? !1), Q = iR(), H = dt(Q.ref, B), [ne, ae] = g.useState(!1);
  (d || b) && ne && ae(!1);
  const Ee = tt((xe) => {
    x && !xe.repeat && ne && xe.key === " " && Q.stop(xe, () => {
      Q.start(xe);
    });
  }), Pe = tt((xe) => {
    x && xe.key === " " && ne && !xe.defaultPrevented && Q.stop(xe, () => {
      Q.pulsate(xe);
    });
  }), {
    getButtonProps: we,
    rootRef: le
  } = oR({
    nativeButton: K,
    disabled: d,
    type: _,
    hasFormAction: Z,
    tabIndex: N,
    onBeforeKeyDown: Ee,
    onBeforeKeyUp: Pe
  }), {
    onClick: Ne,
    onKeyDown: Ve,
    onKeyUp: Re,
    ...Oe
  } = we({
    onClick: C,
    onKeyDown: A,
    onKeyUp: z
  });
  g.useImperativeHandle(o, () => ({
    focusVisible: () => {
      ae(!0), le.current.focus();
    }
  }), [le]);
  const ye = Q.shouldMount && !p && !d;
  g.useEffect(() => {
    ne && x && !p && Q.pulsate();
  }, [p, x, ne, Q]);
  const ze = Pr(Q, "start", M, m), Xe = Pr(Q, "stop", R, m), Be = Pr(Q, "stop", k, m), Ke = Pr(Q, "stop", P, m), We = Pr(Q, "stop", (xe) => {
    ne && xe.preventDefault(), c && c(xe);
  }, m), it = Pr(Q, "start", O, m), Fe = Pr(Q, "stop", T, m), Te = Pr(Q, "stop", I, m), Ue = Pr(Q, "stop", (xe) => {
    kc(xe.target) || ae(!1), S && S(xe);
  }, !1), bt = tt((xe) => {
    le.current || (le.current = xe.currentTarget), !b && kc(xe.target) && (ae(!0), E && E(xe)), $ && $(xe);
  }), ie = {};
  W && (ie.tabIndex = d ? -1 : N, d && (ie["aria-disabled"] = d), ie.type = _);
  const ke = dt(n, le), Me = {
    ...r,
    centerRipple: i,
    component: l,
    disabled: d,
    disableRipple: p,
    disableTouchRipple: m,
    focusRipple: x,
    suppressFocusVisible: b,
    tabIndex: N,
    focusVisible: ne
  }, Je = bR(Me);
  return /* @__PURE__ */ u.jsxs(CR, {
    as: V,
    className: ee(Je.root, a),
    ownerState: Me,
    onBlur: Ue,
    onClick: Ne,
    onContextMenu: Xe,
    onFocus: bt,
    onKeyDown: Ve,
    onKeyUp: Re,
    onMouseDown: ze,
    onMouseLeave: We,
    onMouseUp: Ke,
    onDragLeave: Be,
    onTouchEnd: Fe,
    onTouchMove: Te,
    onTouchStart: it,
    ref: ke,
    ...W ? ie : Oe,
    ...G,
    children: [s, ye ? /* @__PURE__ */ u.jsx(vR, {
      ref: H,
      center: i,
      ...j
    }) : null]
  });
});
function Pr(e, t, n, r = !1) {
  return tt((o) => (n && n(o), r || e[t](o), !0));
}
function wR(e) {
  return typeof e.main == "string";
}
function kR(e, t = []) {
  if (!wR(e))
    return !1;
  for (const n of t)
    if (!e.hasOwnProperty(n) || typeof e[n] != "string")
      return !1;
  return !0;
}
function ut(e = []) {
  return ([, t]) => t && kR(t, e);
}
function TR(e) {
  return pe("MuiAlert", e);
}
const Lg = ce("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function RR(e) {
  return pe("MuiCircularProgress", e);
}
ce("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const Gn = 44, Of = yo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, zf = yo`
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
`, ER = typeof Of != "string" ? co`
        animation: ${Of} 1.4s linear infinite;
      ` : null, PR = typeof zf != "string" ? co`
        animation: ${zf} 1.4s ease-in-out infinite;
      ` : null, $R = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${J(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return me(i, RR, t);
}, IR = U("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${J(n.color)}`]];
  }
})(ve(({
  theme: e
}) => {
  const t = ls(e, {
    animation: "none"
  });
  return {
    display: "inline-block",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...qe(e, "transform")
      }
    }, {
      props: {
        variant: "indeterminate"
      },
      style: ER || {
        animation: `${Of} 1.4s linear infinite`
      }
    }, ...t ? [{
      props: {
        variant: "indeterminate"
      },
      style: t
    }] : [], ...Object.entries(e.palette).filter(ut()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    }))]
  };
})), MR = U("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), jR = U("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(ve(({
  theme: e
}) => {
  const t = ls(e, {
    animation: "none"
  });
  return {
    stroke: "currentColor",
    variants: [{
      props: {
        variant: "determinate"
      },
      style: {
        ...qe(e, "stroke-dashoffset")
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
      style: PR || {
        // At runtime for Pigment CSS, `dashAnimation` will be null and the generated keyframe will be used.
        animation: `${zf} 1.4s ease-in-out infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" && !n.disableShrink,
      style: t
    }] : []]
  };
})), AR = U("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(ve(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Rc = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: s = !1,
    enableTrackSlot: a = !1,
    min: l,
    max: d,
    size: p = 40,
    style: m,
    thickness: x = 3.6,
    value: f = r.min ?? 0,
    variant: v = "indeterminate",
    ...b
  } = r, w = l ?? 0, y = d ?? 100, h = {
    ...r,
    color: i,
    disableShrink: s,
    size: p,
    thickness: x,
    value: f,
    variant: v,
    enableTrackSlot: a
  }, S = $R(h), C = {}, R = {}, k = {};
  if (v === "determinate") {
    const $ = 2 * Math.PI * ((Gn - x) / 2), E = y - w;
    C.strokeDasharray = $.toFixed(3), C.strokeDashoffset = E > 0 ? `${((y - f) / E * $).toFixed(3)}px` : `${$.toFixed(3)}px`, R.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = w, k["aria-valuemax"] = y;
  }
  return /* @__PURE__ */ u.jsx(IR, {
    className: ee(S.root, o),
    style: {
      width: p,
      height: p,
      ...R,
      ...m
    },
    ownerState: h,
    ref: n,
    role: "progressbar",
    ...k,
    ...b,
    children: /* @__PURE__ */ u.jsxs(MR, {
      className: S.svg,
      ownerState: h,
      viewBox: `${Gn / 2} ${Gn / 2} ${Gn} ${Gn}`,
      children: [a ? /* @__PURE__ */ u.jsx(AR, {
        className: S.track,
        ownerState: h,
        cx: Gn,
        cy: Gn,
        r: (Gn - x) / 2,
        fill: "none",
        strokeWidth: x,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ u.jsx(jR, {
        className: S.circle,
        style: C,
        ownerState: h,
        cx: Gn,
        cy: Gn,
        r: (Gn - x) / 2,
        fill: "none",
        strokeWidth: x
      })]
    })
  });
});
function OR(e) {
  return pe("MuiIconButton", e);
}
const Bg = ce("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), zR = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, a = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${J(r)}`, o && `edge${J(o)}`, `size${J(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return me(a, OR, t);
}, NR = U(po, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${J(n.color)}`], n.edge && t[`edge${J(n.edge)}`], t[`size${J(n.size)}`]];
  }
})(ve(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  ...qe(e, "background-color", {
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
})), ve(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
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
  [`&.${Bg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${Bg.loading}`]: {
    color: "transparent"
  }
}))), LR = U("span", {
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
})), Oo = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: s,
    color: a = "default",
    disabled: l = !1,
    disableFocusRipple: d = !1,
    size: p = "medium",
    id: m,
    loading: x = null,
    loadingIndicator: f,
    ...v
  } = r, b = kr(m), w = f ?? /* @__PURE__ */ u.jsx(Rc, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), y = {
    ...r,
    edge: o,
    color: a,
    disabled: l,
    disableFocusRipple: d,
    loading: x,
    loadingIndicator: w,
    size: p
  }, h = zR(y);
  return /* @__PURE__ */ u.jsxs(NR, {
    id: x ? b : m,
    className: ee(h.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !d,
    disabled: l || x,
    ref: n,
    ...v,
    ownerState: y,
    children: [typeof x == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: h.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ u.jsx(LR, {
        className: h.loadingIndicator,
        ownerState: y,
        children: x && w
      })
    }), i]
  });
}), BR = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), FR = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), DR = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), _R = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), WR = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), UR = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${J(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return me(i, TR, o);
}, HR = U(Ln, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.darken : e.lighten, n = e.palette.mode === "light" ? e.lighten : e.darken;
  return {
    ...e.typography.body2,
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px",
    variants: [...Object.entries(e.palette).filter(ut(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "standard"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        backgroundColor: e.vars ? e.vars.palette.Alert[`${r}StandardBg`] : n(e.palette[r].light, 0.9),
        [`& .${Lg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(ut(["light"])).map(([r]) => ({
      props: {
        colorSeverity: r,
        variant: "outlined"
      },
      style: {
        color: e.vars ? e.vars.palette.Alert[`${r}Color`] : t(e.palette[r].light, 0.6),
        border: `1px solid ${(e.vars || e).palette[r].light}`,
        [`& .${Lg.icon}`]: e.vars ? {
          color: e.vars.palette.Alert[`${r}IconColor`]
        } : {
          color: e.palette[r].main
        }
      }
    })), ...Object.entries(e.palette).filter(ut(["dark"])).map(([r]) => ({
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
})), VR = U("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), KR = U("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), YR = U("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), Fg = {
  success: /* @__PURE__ */ u.jsx(BR, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ u.jsx(FR, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ u.jsx(DR, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ u.jsx(_R, {
    fontSize: "inherit"
  })
}, Dg = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: a = "Close",
    color: l,
    icon: d,
    iconMapping: p = Fg,
    onClose: m,
    role: x = "alert",
    severity: f = "success",
    slotProps: v = {},
    slots: b = {},
    variant: w = "standard",
    ...y
  } = r, h = {
    ...r,
    color: l,
    severity: f,
    variant: w,
    colorSeverity: l || f
  }, S = UR(h), C = {
    slots: b,
    slotProps: v
  }, [R, k] = be("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: ee(S.root, s),
    elementType: HR,
    externalForwardedProps: {
      ...C,
      ...y
    },
    ownerState: h,
    additionalProps: {
      role: x,
      elevation: 0
    }
  }), [$, E] = be("icon", {
    className: S.icon,
    elementType: VR,
    externalForwardedProps: C,
    ownerState: h
  }), [A, z] = be("message", {
    className: S.message,
    elementType: KR,
    externalForwardedProps: C,
    ownerState: h
  }), [M, c] = be("action", {
    className: S.action,
    elementType: YR,
    externalForwardedProps: C,
    ownerState: h
  }), [P, T] = be("closeButton", {
    elementType: Oo,
    externalForwardedProps: C,
    ownerState: h
  }), [I, O] = be("closeIcon", {
    elementType: WR,
    externalForwardedProps: C,
    ownerState: h
  });
  return /* @__PURE__ */ u.jsxs(R, {
    ...k,
    children: [d !== !1 ? /* @__PURE__ */ u.jsx($, {
      ...E,
      children: d || p[f] || Fg[f]
    }) : null, /* @__PURE__ */ u.jsx(A, {
      ...z,
      children: i
    }), o != null ? /* @__PURE__ */ u.jsx(M, {
      ...c,
      children: o
    }) : null, o == null && m ? /* @__PURE__ */ u.jsx(M, {
      ...c,
      children: /* @__PURE__ */ u.jsx(P, {
        size: "small",
        "aria-label": a,
        title: a,
        color: "inherit",
        onClick: m,
        ...T,
        children: /* @__PURE__ */ u.jsx(I, {
          fontSize: "small",
          ...O
        })
      })
    }) : null]
  });
});
function GR(e) {
  return pe("MuiTypography", e);
}
ce("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const XR = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${J(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return me(s, GR, i);
}, QR = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${J(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(ve(({
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
    })), ...Object.entries(e.palette).filter(ut()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars || e).palette[n].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
      props: {
        color: `text${J(n)}`
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
})), _g = {
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
}, je = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTypography"
  }), {
    color: o,
    align: i = "inherit",
    className: s,
    component: a,
    gutterBottom: l = !1,
    noWrap: d = !1,
    variant: p = "body1",
    variantMapping: m = _g,
    ...x
  } = r, f = {
    ...r,
    align: i,
    color: o,
    className: s,
    component: a,
    gutterBottom: l,
    noWrap: d,
    variant: p,
    variantMapping: m
  }, v = a || m[p] || _g[p] || "span", b = XR(f);
  return /* @__PURE__ */ u.jsx(QR, {
    as: v,
    ref: n,
    className: ee(b.root, s),
    ...x,
    ownerState: f,
    style: {
      ...i !== "inherit" && {
        "--Typography-textAlign": i
      },
      ...x.style
    }
  });
});
function Wo(e, t) {
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
var dn = "top", Wn = "bottom", Un = "right", fn = "left", bm = "auto", Da = [dn, Wn, Un, fn], Qi = "start", wa = "end", qR = "clippingParents", dx = "viewport", ks = "popper", ZR = "reference", Wg = /* @__PURE__ */ Da.reduce(function(e, t) {
  return e.concat([t + "-" + Qi, t + "-" + wa]);
}, []), fx = /* @__PURE__ */ [].concat(Da, [bm]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qi, t + "-" + wa]);
}, []), JR = "beforeRead", eE = "read", tE = "afterRead", nE = "beforeMain", rE = "main", oE = "afterMain", iE = "beforeWrite", sE = "write", aE = "afterWrite", lE = [JR, eE, tE, nE, rE, oE, iE, sE, aE];
function Tr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function kn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Qo(e) {
  var t = kn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Fn(e) {
  var t = kn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Cm(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = kn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function cE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Fn(i) || !Tr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
      var a = o[s];
      a === !1 ? i.removeAttribute(s) : i.setAttribute(s, a === !0 ? "" : a);
    }));
  });
}
function uE(e) {
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
      var o = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), a = s.reduce(function(l, d) {
        return l[d] = "", l;
      }, {});
      !Fn(o) || !Tr(o) || (Object.assign(o.style, a), Object.keys(i).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const dE = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: cE,
  effect: uE,
  requires: ["computeStyles"]
};
function wr(e) {
  return e.split("-")[0];
}
var Uo = Math.max, Ec = Math.min, qi = Math.round;
function Nf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function px() {
  return !/^((?!chrome|android).)*safari/i.test(Nf());
}
function Zi(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Fn(e) && (o = e.offsetWidth > 0 && qi(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && qi(r.height) / e.offsetHeight || 1);
  var s = Qo(e) ? kn(e) : window, a = s.visualViewport, l = !px() && n, d = (r.left + (l && a ? a.offsetLeft : 0)) / o, p = (r.top + (l && a ? a.offsetTop : 0)) / i, m = r.width / o, x = r.height / i;
  return {
    width: m,
    height: x,
    top: p,
    right: d + m,
    bottom: p + x,
    left: d,
    x: d,
    y: p
  };
}
function wm(e) {
  var t = Zi(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function mx(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Cm(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dr(e) {
  return kn(e).getComputedStyle(e);
}
function fE(e) {
  return ["table", "td", "th"].indexOf(Tr(e)) >= 0;
}
function So(e) {
  return ((Qo(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ju(e) {
  return Tr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Cm(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    So(e)
  );
}
function Ug(e) {
  return !Fn(e) || // https://github.com/popperjs/popper-core/issues/837
  Dr(e).position === "fixed" ? null : e.offsetParent;
}
function pE(e) {
  var t = /firefox/i.test(Nf()), n = /Trident/i.test(Nf());
  if (n && Fn(e)) {
    var r = Dr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = ju(e);
  for (Cm(o) && (o = o.host); Fn(o) && ["html", "body"].indexOf(Tr(o)) < 0; ) {
    var i = Dr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function _a(e) {
  for (var t = kn(e), n = Ug(e); n && fE(n) && Dr(n).position === "static"; )
    n = Ug(n);
  return n && (Tr(n) === "html" || Tr(n) === "body" && Dr(n).position === "static") ? t : n || pE(e) || t;
}
function km(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ys(e, t, n) {
  return Uo(e, Ec(t, n));
}
function mE(e, t, n) {
  var r = Ys(e, t, n);
  return r > n ? n : r;
}
function hx() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gx(e) {
  return Object.assign({}, hx(), e);
}
function yx(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var hE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, gx(typeof t != "number" ? t : yx(t, Da));
};
function gE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, a = wr(n.placement), l = km(a), d = [fn, Un].indexOf(a) >= 0, p = d ? "height" : "width";
  if (!(!i || !s)) {
    var m = hE(o.padding, n), x = wm(i), f = l === "y" ? dn : fn, v = l === "y" ? Wn : Un, b = n.rects.reference[p] + n.rects.reference[l] - s[l] - n.rects.popper[p], w = s[l] - n.rects.reference[l], y = _a(i), h = y ? l === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, S = b / 2 - w / 2, C = m[f], R = h - x[p] - m[v], k = h / 2 - x[p] / 2 + S, $ = Ys(C, k, R), E = l;
    n.modifiersData[r] = (t = {}, t[E] = $, t.centerOffset = $ - k, t);
  }
}
function yE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || mx(t.elements.popper, o) && (t.elements.arrow = o));
}
const vE = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: gE,
  effect: yE,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Ji(e) {
  return e.split("-")[1];
}
var xE = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function SE(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: qi(n * o) / o || 0,
    y: qi(r * o) / o || 0
  };
}
function Hg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, a = e.position, l = e.gpuAcceleration, d = e.adaptive, p = e.roundOffsets, m = e.isFixed, x = s.x, f = x === void 0 ? 0 : x, v = s.y, b = v === void 0 ? 0 : v, w = typeof p == "function" ? p({
    x: f,
    y: b
  }) : {
    x: f,
    y: b
  };
  f = w.x, b = w.y;
  var y = s.hasOwnProperty("x"), h = s.hasOwnProperty("y"), S = fn, C = dn, R = window;
  if (d) {
    var k = _a(n), $ = "clientHeight", E = "clientWidth";
    if (k === kn(n) && (k = So(n), Dr(k).position !== "static" && a === "absolute" && ($ = "scrollHeight", E = "scrollWidth")), k = k, o === dn || (o === fn || o === Un) && i === wa) {
      C = Wn;
      var A = m && k === R && R.visualViewport ? R.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[$]
      );
      b -= A - r.height, b *= l ? 1 : -1;
    }
    if (o === fn || (o === dn || o === Wn) && i === wa) {
      S = Un;
      var z = m && k === R && R.visualViewport ? R.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[E]
      );
      f -= z - r.width, f *= l ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: a
  }, d && xE), c = p === !0 ? SE({
    x: f,
    y: b
  }, kn(n)) : {
    x: f,
    y: b
  };
  if (f = c.x, b = c.y, l) {
    var P;
    return Object.assign({}, M, (P = {}, P[C] = h ? "0" : "", P[S] = y ? "0" : "", P.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + b + "px)" : "translate3d(" + f + "px, " + b + "px, 0)", P));
  }
  return Object.assign({}, M, (t = {}, t[C] = h ? b + "px" : "", t[S] = y ? f + "px" : "", t.transform = "", t));
}
function bE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, a = n.roundOffsets, l = a === void 0 ? !0 : a, d = {
    placement: wr(t.placement),
    variation: Ji(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Hg(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Hg(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const CE = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: bE,
  data: {}
};
var dl = {
  passive: !0
};
function wE(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, a = s === void 0 ? !0 : s, l = kn(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && d.forEach(function(p) {
    p.addEventListener("scroll", n.update, dl);
  }), a && l.addEventListener("resize", n.update, dl), function() {
    i && d.forEach(function(p) {
      p.removeEventListener("scroll", n.update, dl);
    }), a && l.removeEventListener("resize", n.update, dl);
  };
}
const kE = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: wE,
  data: {}
};
var TE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ul(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return TE[t];
  });
}
var RE = {
  start: "end",
  end: "start"
};
function Vg(e) {
  return e.replace(/start|end/g, function(t) {
    return RE[t];
  });
}
function Tm(e) {
  var t = kn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function Rm(e) {
  return Zi(So(e)).left + Tm(e).scrollLeft;
}
function EE(e, t) {
  var n = kn(e), r = So(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (o) {
    i = o.width, s = o.height;
    var d = px();
    (d || !d && t === "fixed") && (a = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: a + Rm(e),
    y: l
  };
}
function PE(e) {
  var t, n = So(e), r = Tm(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Uo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Uo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), a = -r.scrollLeft + Rm(e), l = -r.scrollTop;
  return Dr(o || n).direction === "rtl" && (a += Uo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: a,
    y: l
  };
}
function Em(e) {
  var t = Dr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function vx(e) {
  return ["html", "body", "#document"].indexOf(Tr(e)) >= 0 ? e.ownerDocument.body : Fn(e) && Em(e) ? e : vx(ju(e));
}
function Gs(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = vx(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = kn(r), s = o ? [i].concat(i.visualViewport || [], Em(r) ? r : []) : r, a = t.concat(s);
  return o ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(Gs(ju(s)))
  );
}
function Lf(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function $E(e, t) {
  var n = Zi(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Kg(e, t, n) {
  return t === dx ? Lf(EE(e, n)) : Qo(t) ? $E(t, n) : Lf(PE(So(e)));
}
function IE(e) {
  var t = Gs(ju(e)), n = ["absolute", "fixed"].indexOf(Dr(e).position) >= 0, r = n && Fn(e) ? _a(e) : e;
  return Qo(r) ? t.filter(function(o) {
    return Qo(o) && mx(o, r) && Tr(o) !== "body";
  }) : [];
}
function ME(e, t, n, r) {
  var o = t === "clippingParents" ? IE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], a = i.reduce(function(l, d) {
    var p = Kg(e, d, r);
    return l.top = Uo(p.top, l.top), l.right = Ec(p.right, l.right), l.bottom = Ec(p.bottom, l.bottom), l.left = Uo(p.left, l.left), l;
  }, Kg(e, s, r));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function xx(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? wr(r) : null, i = r ? Ji(r) : null, s = t.x + t.width / 2 - n.width / 2, a = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case dn:
      l = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Wn:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Un:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case fn:
      l = {
        x: t.x - n.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var d = o ? km(o) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (i) {
      case Qi:
        l[d] = l[d] - (t[p] / 2 - n[p] / 2);
        break;
      case wa:
        l[d] = l[d] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function ka(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, a = n.boundary, l = a === void 0 ? qR : a, d = n.rootBoundary, p = d === void 0 ? dx : d, m = n.elementContext, x = m === void 0 ? ks : m, f = n.altBoundary, v = f === void 0 ? !1 : f, b = n.padding, w = b === void 0 ? 0 : b, y = gx(typeof w != "number" ? w : yx(w, Da)), h = x === ks ? ZR : ks, S = e.rects.popper, C = e.elements[v ? h : x], R = ME(Qo(C) ? C : C.contextElement || So(e.elements.popper), l, p, s), k = Zi(e.elements.reference), $ = xx({
    reference: k,
    element: S,
    placement: o
  }), E = Lf(Object.assign({}, S, $)), A = x === ks ? E : k, z = {
    top: R.top - A.top + y.top,
    bottom: A.bottom - R.bottom + y.bottom,
    left: R.left - A.left + y.left,
    right: A.right - R.right + y.right
  }, M = e.modifiersData.offset;
  if (x === ks && M) {
    var c = M[o];
    Object.keys(z).forEach(function(P) {
      var T = [Un, Wn].indexOf(P) >= 0 ? 1 : -1, I = [dn, Wn].indexOf(P) >= 0 ? "y" : "x";
      z[P] += c[I] * T;
    });
  }
  return z;
}
function jE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, a = n.flipVariations, l = n.allowedAutoPlacements, d = l === void 0 ? fx : l, p = Ji(r), m = p ? a ? Wg : Wg.filter(function(v) {
    return Ji(v) === p;
  }) : Da, x = m.filter(function(v) {
    return d.indexOf(v) >= 0;
  });
  x.length === 0 && (x = m);
  var f = x.reduce(function(v, b) {
    return v[b] = ka(e, {
      placement: b,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[wr(b)], v;
  }, {});
  return Object.keys(f).sort(function(v, b) {
    return f[v] - f[b];
  });
}
function AE(e) {
  if (wr(e) === bm)
    return [];
  var t = Ul(e);
  return [Vg(e), t, Vg(t)];
}
function OE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !0 : s, l = n.fallbackPlacements, d = n.padding, p = n.boundary, m = n.rootBoundary, x = n.altBoundary, f = n.flipVariations, v = f === void 0 ? !0 : f, b = n.allowedAutoPlacements, w = t.options.placement, y = wr(w), h = y === w, S = l || (h || !v ? [Ul(w)] : AE(w)), C = [w].concat(S).reduce(function(V, Y) {
      return V.concat(wr(Y) === bm ? jE(t, {
        placement: Y,
        boundary: p,
        rootBoundary: m,
        padding: d,
        flipVariations: v,
        allowedAutoPlacements: b
      }) : Y);
    }, []), R = t.rects.reference, k = t.rects.popper, $ = /* @__PURE__ */ new Map(), E = !0, A = C[0], z = 0; z < C.length; z++) {
      var M = C[z], c = wr(M), P = Ji(M) === Qi, T = [dn, Wn].indexOf(c) >= 0, I = T ? "width" : "height", O = ka(t, {
        placement: M,
        boundary: p,
        rootBoundary: m,
        altBoundary: x,
        padding: d
      }), N = T ? P ? Un : fn : P ? Wn : dn;
      R[I] > k[I] && (N = Ul(N));
      var j = Ul(N), B = [];
      if (i && B.push(O[c] <= 0), a && B.push(O[N] <= 0, O[j] <= 0), B.every(function(V) {
        return V;
      })) {
        A = M, E = !1;
        break;
      }
      $.set(M, B);
    }
    if (E)
      for (var _ = v ? 3 : 1, G = function(Y) {
        var K = C.find(function(Q) {
          var H = $.get(Q);
          if (H)
            return H.slice(0, Y).every(function(ne) {
              return ne;
            });
        });
        if (K)
          return A = K, "break";
      }, W = _; W > 0; W--) {
        var Z = G(W);
        if (Z === "break") break;
      }
    t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const zE = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: OE,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yg(e, t, n) {
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
function Gg(e) {
  return [dn, Un, Wn, fn].some(function(t) {
    return e[t] >= 0;
  });
}
function NE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = ka(t, {
    elementContext: "reference"
  }), a = ka(t, {
    altBoundary: !0
  }), l = Yg(s, r), d = Yg(a, o, i), p = Gg(l), m = Gg(d);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": m
  });
}
const LE = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: NE
};
function BE(e, t, n) {
  var r = wr(e), o = [fn, dn].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], a = i[1];
  return s = s || 0, a = (a || 0) * o, [fn, Un].indexOf(r) >= 0 ? {
    x: a,
    y: s
  } : {
    x: s,
    y: a
  };
}
function FE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = fx.reduce(function(p, m) {
    return p[m] = BE(m, t.rects, i), p;
  }, {}), a = s[t.placement], l = a.x, d = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = s;
}
const DE = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: FE
};
function _E(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = xx({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const WE = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _E,
  data: {}
};
function UE(e) {
  return e === "x" ? "y" : "x";
}
function HE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, a = s === void 0 ? !1 : s, l = n.boundary, d = n.rootBoundary, p = n.altBoundary, m = n.padding, x = n.tether, f = x === void 0 ? !0 : x, v = n.tetherOffset, b = v === void 0 ? 0 : v, w = ka(t, {
    boundary: l,
    rootBoundary: d,
    padding: m,
    altBoundary: p
  }), y = wr(t.placement), h = Ji(t.placement), S = !h, C = km(y), R = UE(C), k = t.modifiersData.popperOffsets, $ = t.rects.reference, E = t.rects.popper, A = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, z = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, c = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var P, T = C === "y" ? dn : fn, I = C === "y" ? Wn : Un, O = C === "y" ? "height" : "width", N = k[C], j = N + w[T], B = N - w[I], _ = f ? -E[O] / 2 : 0, G = h === Qi ? $[O] : E[O], W = h === Qi ? -E[O] : -$[O], Z = t.elements.arrow, V = f && Z ? wm(Z) : {
        width: 0,
        height: 0
      }, Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hx(), K = Y[T], Q = Y[I], H = Ys(0, $[O], V[O]), ne = S ? $[O] / 2 - _ - H - K - z.mainAxis : G - H - K - z.mainAxis, ae = S ? -$[O] / 2 + _ + H + Q + z.mainAxis : W + H + Q + z.mainAxis, Ee = t.elements.arrow && _a(t.elements.arrow), Pe = Ee ? C === "y" ? Ee.clientTop || 0 : Ee.clientLeft || 0 : 0, we = (P = M == null ? void 0 : M[C]) != null ? P : 0, le = N + ne - we - Pe, Ne = N + ae - we, Ve = Ys(f ? Ec(j, le) : j, N, f ? Uo(B, Ne) : B);
      k[C] = Ve, c[C] = Ve - N;
    }
    if (a) {
      var Re, Oe = C === "x" ? dn : fn, ye = C === "x" ? Wn : Un, ze = k[R], Xe = R === "y" ? "height" : "width", Be = ze + w[Oe], Ke = ze - w[ye], We = [dn, fn].indexOf(y) !== -1, it = (Re = M == null ? void 0 : M[R]) != null ? Re : 0, Fe = We ? Be : ze - $[Xe] - E[Xe] - it + z.altAxis, Te = We ? ze + $[Xe] + E[Xe] - it - z.altAxis : Ke, Ue = f && We ? mE(Fe, ze, Te) : Ys(f ? Fe : Be, ze, f ? Te : Ke);
      k[R] = Ue, c[R] = Ue - ze;
    }
    t.modifiersData[r] = c;
  }
}
const VE = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: HE,
  requiresIfExists: ["offset"]
};
function KE(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function YE(e) {
  return e === kn(e) || !Fn(e) ? Tm(e) : KE(e);
}
function GE(e) {
  var t = e.getBoundingClientRect(), n = qi(t.width) / e.offsetWidth || 1, r = qi(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function XE(e, t, n) {
  n === void 0 && (n = !1);
  var r = Fn(t), o = Fn(t) && GE(t), i = So(t), s = Zi(e, o, n), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((Tr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Em(i)) && (a = YE(t)), Fn(t) ? (l = Zi(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = Rm(i))), {
    x: s.left + a.scrollLeft - l.x,
    y: s.top + a.scrollTop - l.y,
    width: s.width,
    height: s.height
  };
}
function QE(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && o(l);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || o(i);
  }), r;
}
function qE(e) {
  var t = QE(e);
  return lE.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function ZE(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function JE(e) {
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
var Xg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Qg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function eP(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? Xg : o;
  return function(a, l, d) {
    d === void 0 && (d = i);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xg, i),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, m = [], x = !1, f = {
      state: p,
      setOptions: function(y) {
        var h = typeof y == "function" ? y(p.options) : y;
        b(), p.options = Object.assign({}, i, p.options, h), p.scrollParents = {
          reference: Qo(a) ? Gs(a) : a.contextElement ? Gs(a.contextElement) : [],
          popper: Gs(l)
        };
        var S = qE(JE([].concat(r, p.options.modifiers)));
        return p.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), v(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var y = p.elements, h = y.reference, S = y.popper;
          if (Qg(h, S)) {
            p.rects = {
              reference: XE(h, _a(S), p.options.strategy === "fixed"),
              popper: wm(S)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(z) {
              return p.modifiersData[z.name] = Object.assign({}, z.data);
            });
            for (var C = 0; C < p.orderedModifiers.length; C++) {
              if (p.reset === !0) {
                p.reset = !1, C = -1;
                continue;
              }
              var R = p.orderedModifiers[C], k = R.fn, $ = R.options, E = $ === void 0 ? {} : $, A = R.name;
              typeof k == "function" && (p = k({
                state: p,
                options: E,
                name: A,
                instance: f
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: ZE(function() {
        return new Promise(function(w) {
          f.forceUpdate(), w(p);
        });
      }),
      destroy: function() {
        b(), x = !0;
      }
    };
    if (!Qg(a, l))
      return f;
    f.setOptions(d).then(function(w) {
      !x && d.onFirstUpdate && d.onFirstUpdate(w);
    });
    function v() {
      p.orderedModifiers.forEach(function(w) {
        var y = w.name, h = w.options, S = h === void 0 ? {} : h, C = w.effect;
        if (typeof C == "function") {
          var R = C({
            state: p,
            name: y,
            instance: f,
            options: S
          }), k = function() {
          };
          m.push(R || k);
        }
      });
    }
    function b() {
      m.forEach(function(w) {
        return w();
      }), m = [];
    }
    return f;
  };
}
var tP = [kE, WE, CE, dE, DE, zE, VE, vE, LE], nP = /* @__PURE__ */ eP({
  defaultModifiers: tP
});
function es(e) {
  var m;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : lx(n, r), {
    props: a,
    internalRef: l
  } = cx({
    ...i,
    externalSlotProps: s
  }), d = dt(l, s == null ? void 0 : s.ref, (m = e.additionalProps) == null ? void 0 : m.ref);
  return ax(t, {
    ...a,
    ref: d
  }, r);
}
function Jo(e) {
  var t;
  return parseInt(g.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function rP(e) {
  return typeof e == "function" ? e() : e;
}
const Sx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = g.useState(null), l = dt(/* @__PURE__ */ g.isValidElement(r) ? Jo(r) : null, n);
  if (gt(() => {
    i || a(rP(o) || document.body);
  }, [o, i]), gt(() => {
    if (s && !i)
      return jf(n, s), () => {
        jf(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ g.isValidElement(r)) {
      const d = {
        ref: l
      };
      return /* @__PURE__ */ g.cloneElement(r, d);
    }
    return r;
  }
  return s && /* @__PURE__ */ Jv.createPortal(r, s);
});
function oP(e) {
  return pe("MuiPopper", e);
}
ce("MuiPopper", ["root"]);
function iP(e, t) {
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
function bx(e) {
  return typeof e == "function" ? e() : e;
}
function sP(e) {
  return e.nodeType !== void 0;
}
const aP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, oP, t);
}, lP = {}, cP = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: a,
    open: l,
    placement: d,
    popperOptions: p,
    popperRef: m,
    slotProps: x = {},
    slots: f = {},
    TransitionProps: v,
    // @ts-ignore internal logic
    ownerState: b,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...w
  } = t, y = g.useRef(null), h = dt(y, n), S = g.useRef(null), C = dt(S, m), R = g.useRef(C);
  gt(() => {
    R.current = C;
  }, [C]), g.useImperativeHandle(m, () => S.current, []);
  const k = iP(d, i), [$, E] = g.useState(k), A = g.useMemo(() => bx(r), [r]);
  g.useEffect(() => {
    S.current && S.current.forceUpdate();
  }), gt(() => {
    if (!A || !l)
      return;
    const T = (j) => {
      E(j.placement);
    };
    let I = [{
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
        state: j
      }) => {
        T(j);
      }
    }];
    a != null && (I = I.concat(a)), p && p.modifiers != null && (I = I.concat(p.modifiers));
    const O = nP(A, y.current, {
      placement: k,
      ...p,
      modifiers: I
    });
    R.current(O);
    const N = y.current;
    return () => {
      if (N) {
        const {
          style: j
        } = N, B = j.position, _ = j.top, G = j.left, W = j.transform;
        O.destroy(), j.position = B, j.top = _, j.left = G, j.transform = W;
      } else
        O.destroy();
      R.current(null);
    };
  }, [A, s, a, l, p, k]);
  const z = {
    placement: $
  };
  v !== null && (z.TransitionProps = v);
  const M = aP(t), c = f.root ?? "div", P = es({
    elementType: c,
    externalSlotProps: x.root,
    externalForwardedProps: w,
    additionalProps: {
      role: "tooltip",
      ref: h
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ u.jsx(c, {
    ...P,
    children: typeof o == "function" ? o(z) : o
  });
}), uP = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: a = !1,
    keepMounted: l = !1,
    modifiers: d,
    open: p,
    placement: m = "bottom",
    popperOptions: x = lP,
    popperRef: f,
    style: v,
    transition: b = !1,
    slotProps: w = {},
    slots: y = {},
    ...h
  } = t, [S, C] = g.useState(!0), R = () => {
    C(!1);
  }, k = () => {
    C(!0);
  };
  if (!l && !p && (!b || S))
    return null;
  let $;
  if (i)
    $ = i;
  else if (r) {
    const z = bx(r);
    $ = z && sP(z) ? St(z).body : St(null).body;
  }
  const E = !p && l && (!b || S) ? "none" : void 0, A = b ? {
    in: p,
    onEnter: R,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ u.jsx(Sx, {
    disablePortal: a,
    container: $,
    children: /* @__PURE__ */ u.jsx(cP, {
      anchorEl: r,
      direction: s,
      disablePortal: a,
      modifiers: d,
      ref: n,
      open: b ? !S : p,
      placement: m,
      popperOptions: x,
      popperRef: f,
      slotProps: w,
      slots: y,
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
      TransitionProps: A,
      children: o
    })
  });
}), dP = U(uP, {
  name: "MuiPopper",
  slot: "Root"
})({}), Cx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Ba(), o = ge({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: a,
    disablePortal: l,
    keepMounted: d,
    modifiers: p,
    open: m,
    placement: x,
    popperOptions: f,
    popperRef: v,
    transition: b,
    slots: w,
    slotProps: y,
    ...h
  } = o, S = {
    anchorEl: i,
    container: a,
    disablePortal: l,
    keepMounted: d,
    modifiers: p,
    open: m,
    placement: x,
    popperOptions: f,
    popperRef: v,
    transition: b,
    ...h
  };
  return /* @__PURE__ */ u.jsx(dP, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: w,
    slotProps: y,
    ...S,
    ref: n
  });
}), fP = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function pP(e) {
  return pe("MuiChip", e);
}
const He = ce("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), mP = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: a
  } = e, l = {
    root: ["root", a, n && "disabled", `size${J(r)}`, `color${J(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return me(l, pP, t);
}, hP = U("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => Nt(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      color: r,
      clickable: o,
      onDelete: i,
      size: s,
      variant: a
    } = n;
    return [{
      [`& .${He.avatar}`]: t.avatar
    }, {
      [`& .${He.icon}`]: t.icon
    }, {
      [`& .${He.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${J(s)}`], t[`color${J(r)}`], o && t.clickable, i && t.deletable, t[a]];
  }
})(ve(({
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
    ...qe(e, ["background-color", "box-shadow"]),
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
    }, ...Object.entries(e.palette).filter(ut(["contrastText"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(ut(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(ut(["dark"])).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(ut()).map(([n]) => ({
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
})), gP = U("span", {
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
function qg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Mt = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiChip"
  }), {
    avatar: o,
    className: i,
    clickable: s,
    color: a = "default",
    component: l,
    deleteIcon: d,
    disabled: p = !1,
    icon: m,
    label: x,
    onClick: f,
    onDelete: v,
    onKeyDown: b,
    onKeyUp: w,
    size: y = "medium",
    variant: h = "filled",
    tabIndex: S,
    skipFocusWhenDisabled: C = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: R = {},
    slotProps: k = {},
    ...$
  } = r, {
    nativeButton: E,
    ...A
  } = $, z = g.useRef(null), M = dt(z, n), c = (H) => {
    H.stopPropagation(), v(H);
  }, P = (H) => {
    H.currentTarget === H.target && qg(H) && H.preventDefault(), b && b(H);
  }, T = (H) => {
    H.currentTarget === H.target && v && qg(H) && v(H), w && w(H);
  }, I = s !== !1 && f ? !0 : s, O = I || v ? po : l || "div", N = {
    ...r,
    component: O,
    disabled: p,
    size: y,
    color: a,
    iconColor: /* @__PURE__ */ g.isValidElement(m) && m.props.color || a,
    onDelete: !!v,
    clickable: I,
    variant: h
  }, j = mP(N), B = O === po ? {
    component: l || "div",
    internalNativeButton: !1,
    focusVisibleClassName: j.focusVisible,
    ...v && {
      disableRipple: !0
    },
    ...E !== void 0 && {
      nativeButton: E
    }
  } : {};
  let _ = null;
  v && (_ = d && /* @__PURE__ */ g.isValidElement(d) ? /* @__PURE__ */ g.cloneElement(d, {
    className: ee(d.props.className, j.deleteIcon),
    onClick: c
  }) : /* @__PURE__ */ u.jsx(fP, {
    className: j.deleteIcon,
    onClick: c
  }));
  let G = null;
  o && /* @__PURE__ */ g.isValidElement(o) && (G = /* @__PURE__ */ g.cloneElement(o, {
    className: ee(j.avatar, o.props.className)
  }));
  let W = null;
  m && /* @__PURE__ */ g.isValidElement(m) && (W = /* @__PURE__ */ g.cloneElement(m, {
    className: ee(j.icon, m.props.className)
  }));
  const Z = {
    slots: R,
    slotProps: k
  }, [V, Y] = be("root", {
    elementType: hP,
    externalForwardedProps: {
      ...Z,
      ...A
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: ee(j.root, i),
    additionalProps: {
      disabled: I && p ? !0 : void 0,
      tabIndex: C && p ? -1 : S,
      ...B
    },
    getSlotProps: (H) => ({
      ...H,
      onClick: (ne) => {
        var ae;
        (ae = H.onClick) == null || ae.call(H, ne), f == null || f(ne);
      },
      onKeyDown: (ne) => {
        var ae;
        (ae = H.onKeyDown) == null || ae.call(H, ne), P(ne);
      },
      onKeyUp: (ne) => {
        var ae;
        (ae = H.onKeyUp) == null || ae.call(H, ne), T(ne);
      }
    })
  }), [K, Q] = be("label", {
    elementType: gP,
    externalForwardedProps: Z,
    ownerState: N,
    className: j.label
  });
  return /* @__PURE__ */ u.jsxs(V, {
    as: O,
    ...Y,
    children: [G || W, /* @__PURE__ */ u.jsx(K, {
      ...Q,
      children: x
    }), _]
  });
}), yP = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M7 10l5 5 5-5z"
})), vP = {
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
}, xP = {
  opacity: 0,
  visibility: "hidden"
}, wx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = xo(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: a,
    disablePrefersReducedMotion: l = !1,
    easing: d,
    in: p,
    onEnter: m,
    onEntered: x,
    onEntering: f,
    onExit: v,
    onExited: b,
    onExiting: w,
    style: y,
    timeout: h = o,
    ...S
  } = t, C = Iu(r.motion.reducedMotion, l), R = g.useRef(null), k = dt(R, Jo(a), n), $ = zn(R, f), E = zn(R, (T, I) => {
    C.shouldReduceMotion || ym(T);
    const O = bc({
      style: y,
      timeout: h,
      easing: d
    }, {
      mode: "enter"
    }), N = C.getTransitionTiming({
      duration: O.duration,
      delay: O.delay
    });
    T.style.transition = r.transitions.create("opacity", {
      duration: N.duration,
      easing: O.easing,
      delay: N.delay
    }), m && m(T, I);
  }), A = zn(R, x), z = zn(R, w), M = zn(R, (T) => {
    const I = bc({
      style: y,
      timeout: h,
      easing: d
    }, {
      mode: "exit"
    }), O = C.getTransitionTiming({
      duration: I.duration,
      delay: I.delay
    });
    T.style.transition = r.transitions.create("opacity", {
      duration: O.duration,
      easing: I.easing,
      delay: O.delay
    }), v && v(T);
  }), c = zn(R, (T) => {
    T.style.transition = "", b && b(T);
  }), P = i ? (T) => {
    i(R.current, T);
  } : void 0;
  return /* @__PURE__ */ u.jsx(ox, {
    appear: s,
    in: p,
    nodeRef: R,
    onEnter: E,
    onEntered: A,
    onEntering: $,
    onExit: M,
    onExited: c,
    onExiting: z,
    addEndListener: P,
    reduceMotion: C.shouldReduceMotion,
    timeout: h,
    ...S,
    children: (T, {
      ownerState: I,
      ...O
    }) => {
      const N = tx(T, p, vP, xP, y, a.props.style);
      return /* @__PURE__ */ g.cloneElement(a, {
        style: N,
        ref: k,
        ...O
      });
    }
  });
});
function SP(e) {
  return pe("MuiBackdrop", e);
}
ce("MuiBackdrop", ["root", "invisible"]);
const bP = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return me({
    root: ["root", n && "invisible"]
  }, SP, t);
}, CP = U("div", {
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
}), kx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: o,
    className: i,
    component: s = "div",
    invisible: a = !1,
    open: l,
    slotProps: d = {},
    slots: p = {},
    transitionDuration: m,
    ...x
  } = r, f = {
    ...r,
    component: s,
    invisible: a
  }, v = bP(f), b = {
    component: s,
    slots: p,
    slotProps: d
  }, [w, y] = be("root", {
    elementType: CP,
    externalForwardedProps: b,
    className: ee(v.root, i),
    ownerState: f
  }), [h, S] = be("transition", {
    elementType: wx,
    externalForwardedProps: b,
    ownerState: f
  });
  return /* @__PURE__ */ u.jsx(h, {
    in: l,
    timeout: m,
    ...x,
    ...S,
    children: /* @__PURE__ */ u.jsx(w, {
      ...y,
      ref: n,
      children: o
    })
  });
}), wP = ce("MuiBox", ["root"]), kP = ku(), jt = Uk({
  themeId: br,
  defaultTheme: kP,
  defaultClassName: wP.root,
  generateClassName: I1.generate
});
function TP(e) {
  return pe("MuiButton", e);
}
const ko = ce("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), RP = /* @__PURE__ */ g.createContext({}), EP = /* @__PURE__ */ g.createContext(void 0), PP = (e) => {
  const {
    color: t,
    disableElevation: n,
    fullWidth: r,
    size: o,
    variant: i,
    loading: s,
    loadingPosition: a,
    classes: l
  } = e, d = {
    root: ["root", s && "loading", i, `size${J(o)}`, `color${J(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${J(a)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, p = me(d, TP, l);
  return {
    ...l,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...p
  };
}, Tx = [{
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
}], $P = U(po, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${J(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], n = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    ...qe(e, ["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${ko.disabled}`]: {
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
        [`&.${ko.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ko.disabled}`]: {
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
        [`&.${ko.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ut()).map(([r]) => ({
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
        [`&.${ko.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ko.disabled}`]: {
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
        ...qe(e, ["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${ko.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), IP = U("span", {
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
      ...qe(e, ["opacity"], {
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
  }, ...Tx]
})), MP = U("span", {
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
      ...qe(e, ["opacity"], {
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
  }, ...Tx]
})), jP = U("span", {
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
})), Zg = U("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder"
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), at = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = g.useContext(RP), o = g.useContext(EP), i = Sa(r, t), s = ge({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: l = "primary",
    component: d = "button",
    className: p,
    disabled: m = !1,
    disableElevation: x = !1,
    disableFocusRipple: f = !1,
    endIcon: v,
    focusVisibleClassName: b,
    fullWidth: w = !1,
    id: y,
    loading: h = null,
    loadingIndicator: S,
    loadingPosition: C = "center",
    size: R = "medium",
    startIcon: k,
    type: $,
    variant: E = "text",
    ...A
  } = s, z = kr(y), M = S ?? /* @__PURE__ */ u.jsx(Rc, {
    "aria-labelledby": z,
    color: "inherit",
    size: 16
  }), c = {
    ...s,
    color: l,
    component: d,
    disabled: m,
    disableElevation: x,
    disableFocusRipple: f,
    fullWidth: w,
    loading: h,
    loadingIndicator: M,
    loadingPosition: C,
    size: R,
    type: $,
    variant: E
  }, P = PP(c), T = (k || h && C === "start") && /* @__PURE__ */ u.jsx(IP, {
    className: P.startIcon,
    ownerState: c,
    children: k || /* @__PURE__ */ u.jsx(Zg, {
      className: P.loadingIconPlaceholder,
      ownerState: c
    })
  }), I = (v || h && C === "end") && /* @__PURE__ */ u.jsx(MP, {
    className: P.endIcon,
    ownerState: c,
    children: v || /* @__PURE__ */ u.jsx(Zg, {
      className: P.loadingIconPlaceholder,
      ownerState: c
    })
  }), O = o || "", N = typeof h == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: P.loadingWrapper,
      style: {
        display: "contents"
      },
      children: h && /* @__PURE__ */ u.jsx(jP, {
        className: P.loadingIndicator,
        ownerState: c,
        children: M
      })
    })
  ) : null, {
    root: j,
    ...B
  } = P;
  return /* @__PURE__ */ u.jsxs($P, {
    ownerState: c,
    className: ee(r.className, P.root, p, O),
    component: d,
    disabled: m || h,
    focusRipple: !f,
    focusVisibleClassName: ee(P.focusVisible, b),
    ref: n,
    internalNativeButton: !0,
    type: $,
    id: h ? z : y,
    ...A,
    classes: B,
    children: [T, C !== "end" && N, a, C === "end" && N, I]
  });
});
function AP(e) {
  return pe("MuiCard", e);
}
ce("MuiCard", ["root"]);
const OP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, AP, t);
}, zP = U(Ln, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), fl = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiCard"
  }), {
    className: o,
    raised: i = !1,
    ...s
  } = r, a = {
    ...r,
    raised: i
  }, l = OP(a);
  return /* @__PURE__ */ u.jsx(zP, {
    className: ee(l.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: a,
    ...s
  });
});
function NP(e) {
  return pe("MuiCardContent", e);
}
ce("MuiCardContent", ["root"]);
const LP = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, NP, t);
}, BP = U("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), pl = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiCardContent"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, a = {
    ...r,
    component: i
  }, l = LP(a);
  return /* @__PURE__ */ u.jsx(BP, {
    as: i,
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
function FP(e) {
  return pe("PrivateSwitchBase", e);
}
ce("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const DP = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${J(o)}`],
    input: ["input"]
  };
  return me(i, FP, t);
}, _P = U(po, {
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
}), WP = U("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: Nt
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
}), Rx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: i,
    defaultChecked: s,
    disabled: a,
    disableFocusRipple: l = !1,
    edge: d = !1,
    icon: p,
    id: m,
    name: x,
    onBlur: f,
    onChange: v,
    onFocus: b,
    readOnly: w,
    required: y = !1,
    tabIndex: h,
    type: S,
    value: C,
    slots: R = {},
    slotProps: k = {},
    ...$
  } = t, {
    nativeButton: E,
    ...A
  } = $, [z, M] = Ca({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), c = hm(), P = (Y) => {
    b && b(Y), c && c.onFocus && c.onFocus(Y);
  }, T = (Y) => {
    f && f(Y), c && c.onBlur && c.onBlur(Y);
  }, I = (Y) => {
    if (Y.nativeEvent.defaultPrevented || w)
      return;
    const K = Y.target.checked;
    M(K), v && v(Y, K);
  };
  let O = a;
  c && typeof O > "u" && (O = c.disabled);
  const N = S === "checkbox" || S === "radio", j = {
    ...t,
    checked: z,
    disabled: O,
    disableFocusRipple: l,
    edge: d
  }, B = DP(j), _ = {
    slots: R,
    slotProps: k
  }, [G, W] = be("root", {
    ref: n,
    elementType: _P,
    className: B.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ..._,
      component: "span",
      ...A
    },
    getSlotProps: (Y) => ({
      ...Y,
      onFocus: (K) => {
        var Q;
        (Q = Y.onFocus) == null || Q.call(Y, K), P(K);
      },
      onBlur: (K) => {
        var Q;
        (Q = Y.onBlur) == null || Q.call(Y, K), T(K);
      }
    }),
    ownerState: j,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !l,
      role: void 0,
      tabIndex: null
    }
  }), [Z, V] = be("input", {
    elementType: WP,
    className: B.input,
    externalForwardedProps: _,
    getSlotProps: (Y) => ({
      ...Y,
      onChange: (K) => {
        var Q;
        (Q = Y.onChange) == null || Q.call(Y, K), I(K);
      }
    }),
    ownerState: j,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: s,
      disabled: O,
      id: N ? m : void 0,
      name: x,
      readOnly: w,
      required: y,
      tabIndex: h,
      type: S,
      ...S === "checkbox" && C === void 0 ? {} : {
        value: C
      }
    }
  });
  return /* @__PURE__ */ u.jsxs(G, {
    ...W,
    children: [/* @__PURE__ */ u.jsx(Z, {
      ...V
    }), z ? i : p]
  });
}), UP = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
})), HP = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
})), VP = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
})), KP = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: r,
    size: o
  } = e, i = {
    root: ["root", n && "indeterminate", `color${J(r)}`, `size${J(o)}`]
  }, s = me(i, dT, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...s
  };
}, YP = U(Rx, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${J(n.size)}`], n.color !== "default" && t[`color${J(n.color)}`]];
  }
})(ve(({
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
  }, ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${yd.checked}, &.${yd.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${yd.disabled}`]: {
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
}))), GP = /* @__PURE__ */ u.jsx(HP, {}), XP = /* @__PURE__ */ u.jsx(UP, {}), QP = /* @__PURE__ */ u.jsx(VP, {}), ml = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: o = GP,
    color: i = "primary",
    icon: s = XP,
    indeterminate: a = !1,
    indeterminateIcon: l = QP,
    size: d = "medium",
    disableRipple: p = !1,
    className: m,
    slots: x = {},
    slotProps: f = {},
    ...v
  } = r, b = a ? l : s, w = a ? l : o, y = {
    ...r,
    disableRipple: p,
    color: i,
    indeterminate: a,
    size: d
  }, h = KP(y), S = f.input, [C, R] = be("root", {
    ref: n,
    elementType: YP,
    className: ee(h.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: x,
      slotProps: f,
      ...v
    },
    ownerState: y,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ g.cloneElement(b, {
        fontSize: b.props.fontSize ?? d
      }),
      checkedIcon: /* @__PURE__ */ g.cloneElement(w, {
        fontSize: w.props.fontSize ?? d
      }),
      // Forward the raw prop so an unset value stays `undefined` and ButtonBase resolves its
      // own default — letting a global `MuiButtonBase.defaultProps.disableRipple` apply here.
      disableRipple: r.disableRipple,
      slots: x,
      slotProps: {
        input: rx(typeof S == "function" ? S(y) : S, {
          "data-indeterminate": a,
          "aria-checked": a ? "mixed" : void 0
        })
      }
    }
  });
  return /* @__PURE__ */ u.jsx(C, {
    ...R,
    classes: h
  });
});
function Jg(e) {
  return e.substring(2).toLowerCase();
}
function qP(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function ZP(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = g.useRef(!1), a = g.useRef(null), l = g.useRef(!1), d = g.useRef(!1);
  g.useEffect(() => (setTimeout(() => {
    l.current = !0;
  }, 0), () => {
    l.current = !1;
  }), []);
  const p = dt(Jo(t), a), m = tt((v) => {
    const b = d.current;
    d.current = !1;
    const w = St(a.current);
    if (!l.current || !a.current || "clientX" in v && qP(v, w))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let y;
    v.composedPath ? y = v.composedPath().includes(a.current) : y = !Wo(w.documentElement, v.target) || Wo(a.current, v.target), !y && (n || !b) && o(v);
  }), x = (v) => (b) => {
    d.current = !0;
    const w = t.props[v];
    w && w(b);
  }, f = {
    ref: p
  };
  return i !== !1 && (f[i] = x(i)), g.useEffect(() => {
    if (i !== !1) {
      const v = Jg(i), b = St(a.current), w = () => {
        s.current = !0;
      };
      return b.addEventListener(v, m), b.addEventListener("touchmove", w), () => {
        b.removeEventListener(v, m), b.removeEventListener("touchmove", w);
      };
    }
  }, [m, i]), r !== !1 && (f[r] = x(r)), g.useEffect(() => {
    if (r !== !1) {
      const v = Jg(r), b = St(a.current);
      return b.addEventListener(v, m), () => {
        b.removeEventListener(v, m);
      };
    }
  }, [m, r]), /* @__PURE__ */ g.cloneElement(t, f);
}
function Ex(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function JP(e) {
  const t = St(e);
  return e === t.body || e === t.documentElement ? rr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Xs(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function ey(e) {
  return parseFloat(rr(e).getComputedStyle(e).paddingRight) || 0;
}
function e5(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function ty(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = !i.includes(s), l = !e5(s);
    a && l && Xs(s, o);
  });
}
function t5(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = St(r).body;
    else {
      const s = r.parentElement, a = rr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (JP(i)) {
      const s = Ex(rr(i));
      n.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${ey(i) + s}px`;
      const a = St(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${ey(l) + s}px`;
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
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function n5(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class r5 {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Xs(t.modalRef, !1);
    const o = n5(n);
    ty(n, t.mount, t.modalRef, o, !0);
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
    o.restore || (o.restore = t5(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Xs(t.modalRef, n), ty(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Xs(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const Bf = "data-mui-focusable";
function ny(e) {
  return e ? e.hasAttribute(Bf) ? e : e.querySelector(`[${Bf}]`) : null;
}
const o5 = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function Px(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function i5(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function s5(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || i5(e));
}
function a5(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(o5)).forEach((r, o) => {
    const i = Px(r);
    i === -1 || !s5(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function l5() {
  return !0;
}
function c5(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = a5,
    isEnabled: s = l5,
    open: a
  } = e, l = g.useRef(!1), d = g.useRef(null), p = g.useRef(null), m = g.useRef(null), x = g.useRef(null), f = g.useRef(!1), v = g.useRef(null), b = dt(Jo(t), v), w = g.useRef(null);
  g.useEffect(() => {
    !a || !v.current || (f.current = !n);
  }, [n, a]), g.useEffect(() => {
    if (l.current = !1, !a || !v.current)
      return;
    const S = St(v.current), C = yr(S), R = ny(v.current) ?? v.current;
    return Wo(v.current, C) || (R.hasAttribute("tabIndex") || R.setAttribute("tabIndex", "-1"), f.current && R.focus()), () => {
      !o && m.current && (l.current = !0, m.current.focus(), m.current = null);
    };
  }, [a]), g.useEffect(() => {
    if (!a || !v.current)
      return;
    const S = St(v.current), C = ($) => {
      if (w.current = $, r || !s() || $.key !== "Tab")
        return;
      const E = v.current, A = yr(S);
      if (E === null)
        return;
      const z = ny(E);
      if (A === E || A === z) {
        const c = i(E);
        if (c.length === 0)
          return;
        $.preventDefault(), $.shiftKey ? c[c.length - 1].focus() : c[0].focus();
        return;
      }
      if (Wo(E, A)) {
        const c = i(E), P = c.indexOf(A);
        if (P === -1 || !c.some((O) => Px(O) > 0))
          return;
        $.preventDefault();
        let I = 0;
        $.shiftKey ? I = P <= 0 ? c.length - 1 : P - 1 : I = P === c.length - 1 ? 0 : P + 1, c[I].focus();
      }
    }, R = () => {
      var z, M;
      const $ = v.current;
      if ($ === null)
        return;
      const E = yr(S);
      if (!S.hasFocus() || !s() || l.current) {
        l.current = !1;
        return;
      }
      if (Wo($, E) || r && E !== d.current && E !== p.current)
        return;
      if (E !== x.current)
        x.current = null;
      else if (x.current !== null)
        return;
      if (!f.current)
        return;
      let A = [];
      if ((E === d.current || E === p.current) && (A = i(v.current)), A.length > 0) {
        const c = !!((z = w.current) != null && z.shiftKey && ((M = w.current) == null ? void 0 : M.key) === "Tab"), P = A[0], T = A[A.length - 1];
        typeof P != "string" && typeof T != "string" && (c ? T.focus() : P.focus());
      } else
        $.focus();
    };
    S.addEventListener("focusin", R), S.addEventListener("keydown", C, !0);
    const k = setInterval(() => {
      const $ = yr(S);
      $ && $.tagName === "BODY" && R();
    }, 50);
    return () => {
      clearInterval(k), S.removeEventListener("focusin", R), S.removeEventListener("keydown", C, !0);
    };
  }, [n, r, o, s, a, i]);
  const y = (S) => {
    m.current === null && (m.current = S.relatedTarget), f.current = !0, x.current = S.target;
    const C = t.props.onFocus;
    C && C(S);
  }, h = (S) => {
    m.current === null && (m.current = S.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ u.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ u.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: h,
      ref: d,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ g.cloneElement(t, {
      ref: b,
      onFocus: y
    }), /* @__PURE__ */ u.jsx("div", {
      tabIndex: a ? 0 : -1,
      onFocus: h,
      ref: p,
      "data-testid": "sentinelEnd"
    })]
  });
}
function u5(e) {
  return typeof e == "function" ? e() : e;
}
function d5(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const ry = () => {
}, hl = new r5();
function f5(e) {
  const {
    container: t,
    disableScrollLock: n = !1,
    closeAfterTransition: r = !1,
    onTransitionEnter: o,
    onTransitionExited: i,
    children: s,
    onClose: a,
    open: l,
    rootRef: d
  } = e, p = g.useRef({}), m = g.useRef(null), x = g.useRef(null), f = g.useRef(null), v = dt(f, d), [b, w] = g.useState(!l), y = d5(s);
  let h = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (h = !1);
  const S = () => St(m.current), C = () => (p.current.modalRef = f.current, p.current.mount = m.current, p.current), R = () => {
    hl.mount(C(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = tt(() => {
    const O = u5(t) || S().body;
    hl.add(C(), O), f.current && R();
  }), $ = () => hl.isTopModal(C()), E = tt((O) => {
    m.current = O, O && (x.current = O, l && $() ? R() : f.current && Xs(f.current, h));
  }), A = g.useCallback(() => {
    hl.remove(C(), h);
  }, [h]);
  g.useEffect(() => () => {
    A();
  }, [A]), g.useEffect(() => {
    l ? k() : (!y || !r) && A();
  }, [l, A, y, r, k]);
  const z = (O) => (N) => {
    var j;
    (j = O.onKeyDown) == null || j.call(O, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !$()) && (N.stopPropagation(), a && a(N, "escapeKeyDown"));
  }, M = (O) => (N) => {
    var j;
    (j = O.onClick) == null || j.call(O, N), N.target === N.currentTarget && a && a(N, "backdropClick");
  }, c = (O = {}) => {
    const N = wc(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const j = {
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
      ...j,
      onKeyDown: z(j),
      ref: v
    };
  }, P = (O = {}) => {
    const N = O;
    return {
      "aria-hidden": !0,
      ...N,
      onClick: M(N),
      open: l
    };
  }, T = () => {
    const O = () => {
      w(!1), o && o();
    }, N = () => {
      w(!0), i && i(), r && A();
    };
    return {
      onEnter: If(O, (s == null ? void 0 : s.props.onEnter) ?? ry),
      onExited: If(N, (s == null ? void 0 : s.props.onExited) ?? ry)
    };
  }, I = !l && y && !b ? x.current ?? t : t;
  return {
    getRootProps: c,
    getBackdropProps: P,
    getTransitionProps: T,
    rootRef: v,
    portalRef: E,
    portalContainer: I,
    isTopModal: $,
    exited: b,
    hasTransition: y
  };
}
function p5(e) {
  return pe("MuiModal", e);
}
ce("MuiModal", ["root", "hidden", "backdrop"]);
const m5 = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return me({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, p5, r);
}, h5 = U("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(ve(({
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
}))), g5 = U(kx, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), $x = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    name: "MuiModal",
    props: t
  }), {
    classes: o,
    className: i,
    closeAfterTransition: s = !1,
    children: a,
    container: l,
    component: d,
    disableAutoFocus: p = !1,
    disableEnforceFocus: m = !1,
    disablePortal: x = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: v = !1,
    hideBackdrop: b = !1,
    keepMounted: w = !1,
    onClose: y,
    onTransitionEnter: h,
    onTransitionExited: S,
    open: C,
    slotProps: R = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: $,
    ...E
  } = r, A = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: p,
    disableEnforceFocus: m,
    disablePortal: x,
    disableRestoreFocus: f,
    disableScrollLock: v,
    hideBackdrop: b,
    keepMounted: w
  }, {
    getRootProps: z,
    getBackdropProps: M,
    getTransitionProps: c,
    portalRef: P,
    portalContainer: T,
    isTopModal: I,
    exited: O,
    hasTransition: N
  } = f5({
    ...A,
    rootRef: n
  }), j = {
    ...A,
    exited: O
  }, B = m5(j), _ = {};
  if (a.props.tabIndex === void 0 && (_.tabIndex = "-1"), N) {
    const {
      onEnter: K,
      onExited: Q
    } = c();
    _.onEnter = K, _.onExited = Q;
  }
  const G = {
    slots: k,
    slotProps: R
  }, [W, Z] = be("root", {
    ref: n,
    elementType: h5,
    externalForwardedProps: {
      ...G,
      ...E,
      component: d
    },
    getSlotProps: z,
    ownerState: j,
    className: ee(i, B == null ? void 0 : B.root, !j.open && j.exited && (B == null ? void 0 : B.hidden))
  }), [V, Y] = be("backdrop", {
    elementType: g5,
    externalForwardedProps: G,
    shouldForwardComponentProp: !0,
    getSlotProps: (K) => M({
      ...K,
      onClick: (Q) => {
        K != null && K.onClick && K.onClick(Q);
      }
    }),
    className: B == null ? void 0 : B.backdrop,
    ownerState: j
  });
  return !w && !C && (!N || O) ? null : /* @__PURE__ */ u.jsx(Sx, {
    ref: P,
    container: T,
    disablePortal: x,
    children: /* @__PURE__ */ u.jsxs(W, {
      ...Z,
      children: [b ? null : /* @__PURE__ */ u.jsx(V, {
        ...Y
      }), /* @__PURE__ */ u.jsx(c5, {
        disableEnforceFocus: m,
        disableAutoFocus: p,
        disableRestoreFocus: f,
        isEnabled: I,
        open: C,
        children: /* @__PURE__ */ g.cloneElement(a, _)
      })]
    })
  });
});
function y5(e) {
  return pe("MuiDialog", e);
}
ce("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const Ix = /* @__PURE__ */ g.createContext({}), v5 = U(kx, {
  name: "MuiDialog",
  slot: "Backdrop"
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), x5 = (e) => {
  const {
    classes: t,
    scroll: n,
    maxWidth: r,
    fullWidth: o,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    backdrop: ["backdrop"],
    container: ["container", `scroll${J(n)}`],
    paper: ["paper", `paperWidth${J(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return me(s, y5, t);
}, S5 = U($x, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), b5 = U("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${J(n.scroll)}`]];
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
}), C5 = U(Ln, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${J(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(ve(({
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
}))), To = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialog"
  }), o = xo(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": a,
    "aria-modal": l = !0,
    children: d,
    className: p,
    fullScreen: m = !1,
    fullWidth: x = !1,
    maxWidth: f = "sm",
    onClick: v,
    onClose: b,
    open: w,
    PaperComponent: y = Ln,
    role: h = "dialog",
    scroll: S = "paper",
    slots: C = {},
    slotProps: R = {},
    transitionDuration: k = i,
    ...$
  } = r, E = {
    ...r,
    fullScreen: m,
    fullWidth: x,
    maxWidth: f,
    scroll: S
  }, A = x5(E), z = g.useRef(), M = (K) => {
    z.current = K.target === K.currentTarget;
  }, c = (K) => {
    v && v(K), z.current && (z.current = null, b && b(K, "backdropClick"));
  }, P = kr(a), T = g.useMemo(() => ({
    titleId: P
  }), [P]), I = {
    slots: C,
    slotProps: R
  }, [O, N] = be("root", {
    elementType: S5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: I,
    ownerState: E,
    className: ee(A.root, p),
    ref: n
  }), [j, B] = be("backdrop", {
    elementType: v5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: I,
    ownerState: E,
    className: A.backdrop
  }), [_, G] = be("paper", {
    elementType: C5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: I,
    ownerState: E,
    className: A.paper,
    additionalProps: {
      elevation: 24,
      role: h,
      "aria-describedby": s,
      "aria-labelledby": P,
      "aria-modal": l,
      tabIndex: -1,
      [Bf]: ""
    }
  }), [W, Z] = be("container", {
    elementType: b5,
    externalForwardedProps: I,
    ownerState: E,
    className: A.container
  }), [V, Y] = be("transition", {
    elementType: wx,
    externalForwardedProps: I,
    ownerState: E,
    additionalProps: {
      appear: !0,
      in: w,
      timeout: k,
      role: "presentation"
    }
  });
  return /* @__PURE__ */ u.jsx(O, {
    closeAfterTransition: !0,
    slots: {
      backdrop: j
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...B
      }
    },
    onClose: b,
    open: w,
    onClick: c,
    ...N,
    ...$,
    children: /* @__PURE__ */ u.jsx(V, {
      ...Y,
      children: /* @__PURE__ */ u.jsx(W, {
        onMouseDown: M,
        ...Z,
        children: /* @__PURE__ */ u.jsx(_, {
          as: y,
          ...G,
          children: /* @__PURE__ */ u.jsx(Ix.Provider, {
            value: T,
            children: d
          })
        })
      })
    })
  });
});
function w5(e) {
  return pe("MuiDialogActions", e);
}
ce("MuiDialogActions", ["root", "spacing"]);
const k5 = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return me({
    root: ["root", !n && "spacing"]
  }, w5, t);
}, T5 = U("div", {
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
}), Ro = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, a = {
    ...r,
    disableSpacing: i
  }, l = k5(a);
  return /* @__PURE__ */ u.jsx(T5, {
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
function R5(e) {
  return pe("MuiDialogContent", e);
}
ce("MuiDialogContent", ["root", "dividers"]);
function E5(e) {
  return pe("MuiDialogTitle", e);
}
const P5 = ce("MuiDialogTitle", ["root"]), $5 = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return me({
    root: ["root", n && "dividers"]
  }, R5, t);
}, I5 = U("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(ve(({
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
      [`.${P5.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Eo = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, a = {
    ...r,
    dividers: i
  }, l = $5(a);
  return /* @__PURE__ */ u.jsx(I5, {
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    ...s
  });
});
function M5(e) {
  return pe("MuiDialogContentText", e);
}
ce("MuiDialogContentText", ["root"]);
const j5 = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"]
  }, M5, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, A5 = U(je, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root"
})({}), Ts = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: o,
    className: i,
    ...s
  } = r, a = j5(s);
  return /* @__PURE__ */ u.jsx(A5, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: n,
    ownerState: s,
    className: ee(a.root, i),
    ...r,
    classes: a
  });
}), O5 = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, E5, t);
}, z5 = U(je, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), Po = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, a = r, l = O5(a), {
    titleId: d = i
  } = g.useContext(Ix);
  return /* @__PURE__ */ u.jsx(z5, {
    component: "h2",
    className: ee(l.root, o),
    ownerState: a,
    ref: n,
    variant: "h6",
    id: i ?? d,
    ...s
  });
}), oy = ce("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function Mx(e) {
  return pe("MuiSelect", e);
}
const zo = ce("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), N5 = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: a
  } = e, l = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${J(i)}`, s && "hiddenLabel", a && "multiline"],
    input: ["input"]
  }, d = me(l, kT, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...d
  };
}, L5 = U(Pu, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ru(e, t), !n.disableUnderline && t.underline];
  }
})(ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light", n = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", o = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    ...qe(e, "background-color", {
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
    [`&.${wo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${wo.disabled}`]: {
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
          ...qe(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${wo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${wo.error}`]: {
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
          ...qe(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${wo.disabled}, .${wo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${wo.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ut()).map(([s]) => {
      var a;
      return {
        props: {
          disableUnderline: !1,
          color: s
        },
        style: {
          "&::after": {
            borderBottom: `2px solid ${(a = (e.vars || e).palette[s]) == null ? void 0 : a.main}`
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
        [`&.${zo.root}`]: {
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
        size: a
      }) => s.multiline && a === "small",
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
})), B5 = U($u, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: Eu
})(ve(({
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
}))), Pm = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiFilledInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    hiddenLabel: s,
    // declare here to prevent spreading to DOM
    inputComponent: a = "input",
    multiline: l = !1,
    notched: d,
    // declare here to prevent spreading to DOM
    slotProps: p,
    slots: m = {},
    type: x = "text",
    ...f
  } = r, v = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: a,
    multiline: l,
    type: x
  }, b = N5(r), w = {
    root: {
      ownerState: v
    },
    input: {
      ownerState: v
    }
  }, y = p ? ht(w, p) : w, h = m.root ?? L5, S = m.input ?? B5;
  return /* @__PURE__ */ u.jsx(vm, {
    slots: {
      root: h,
      input: S
    },
    slotProps: y,
    fullWidth: i,
    inputComponent: a,
    multiline: l,
    ref: n,
    type: x,
    ...f,
    classes: b
  });
});
Pm.muiName = "Input";
function F5(e) {
  return pe("MuiFormControl", e);
}
ce("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const D5 = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${J(n)}`, r && "fullWidth"]
  };
  return me(o, F5, t);
}, _5 = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${J(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), W5 = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiFormControl"
  }), {
    children: o,
    className: i,
    color: s = "primary",
    component: a = "div",
    disabled: l = !1,
    error: d = !1,
    focused: p,
    fullWidth: m = !1,
    hiddenLabel: x = !1,
    margin: f = "none",
    required: v = !1,
    size: b = "medium",
    variant: w = "outlined",
    ...y
  } = r, h = {
    ...r,
    color: s,
    component: a,
    disabled: l,
    error: d,
    fullWidth: m,
    hiddenLabel: x,
    margin: f,
    required: v,
    size: b,
    variant: w
  }, S = D5(h), [C, R] = g.useState(() => {
    let I = !1;
    return o && g.Children.forEach(o, (O) => {
      if (!hd(O, ["Input", "Select"]))
        return;
      const N = hd(O, ["Select"]) ? O.props.input : O;
      N && yT(N.props) && (I = !0);
    }), I;
  }), [k, $] = g.useState(() => {
    let I = !1;
    return o && g.Children.forEach(o, (O) => {
      hd(O, ["Input", "Select"]) && (Sc(O.props, !0) || Sc(O.props.inputProps, !0)) && (I = !0);
    }), I;
  }), [E, A] = g.useState(!1);
  l && E && A(!1);
  const z = p !== void 0 && !l ? p : E;
  let M;
  g.useRef(!1);
  const c = g.useCallback(() => {
    $(!0);
  }, []), P = g.useCallback(() => {
    $(!1);
  }, []), T = g.useMemo(() => ({
    adornedStart: C,
    setAdornedStart: R,
    color: s,
    disabled: l,
    error: d,
    filled: k,
    focused: z,
    fullWidth: m,
    hiddenLabel: x,
    size: b,
    onBlur: () => {
      A(!1);
    },
    onFocus: () => {
      A(!0);
    },
    onEmpty: P,
    onFilled: c,
    registerEffect: M,
    required: v,
    variant: w
  }), [C, s, l, d, k, z, m, x, M, P, c, v, b, w]);
  return /* @__PURE__ */ u.jsx(Fa.Provider, {
    value: T,
    children: /* @__PURE__ */ u.jsx(_5, {
      as: a,
      ownerState: h,
      className: ee(S.root, i),
      ref: n,
      ...y,
      children: o
    })
  });
}), U5 = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${J(r)}`, o && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return me(s, TT, t);
}, H5 = U("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${zs.label}`]: t.label
    }, t.root, t[`labelPlacement${J(n.labelPlacement)}`]];
  }
})(ve(({
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
  [`&.${zs.disabled}`]: {
    cursor: "default"
  },
  [`& .${zs.label}`]: {
    [`&.${zs.disabled}`]: {
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
}))), V5 = U("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(ve(({
  theme: e
}) => ({
  [`&.${zs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), cr = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: o,
    className: i,
    control: s,
    disabled: a,
    disableTypography: l,
    inputRef: d,
    label: p,
    labelPlacement: m = "end",
    name: x,
    onChange: f,
    required: v,
    slots: b = {},
    slotProps: w = {},
    value: y,
    ...h
  } = r, [S, C] = vo({
    props: r,
    states: ["error"]
  }), R = a ?? s.props.disabled ?? (C == null ? void 0 : C.disabled), k = v ?? s.props.required, $ = {
    disabled: R,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((T) => {
    typeof s.props[T] > "u" && typeof r[T] < "u" && ($[T] = r[T]);
  });
  const E = {
    ...r,
    disabled: R,
    labelPlacement: m,
    required: k,
    error: S.error
  }, A = U5(E), z = {
    slots: b,
    slotProps: w
  }, [M, c] = be("typography", {
    elementType: je,
    externalForwardedProps: z,
    ownerState: E
  });
  let P = p;
  return P != null && P.type !== je && !l && (P = /* @__PURE__ */ u.jsx(M, {
    component: "span",
    ...c,
    className: ee(A.label, c == null ? void 0 : c.className),
    children: P
  })), /* @__PURE__ */ u.jsxs(H5, {
    className: ee(A.root, i),
    ownerState: E,
    ref: n,
    ...h,
    children: [/* @__PURE__ */ g.cloneElement(s, $), k ? /* @__PURE__ */ u.jsxs("div", {
      children: [P, /* @__PURE__ */ u.jsxs(V5, {
        ownerState: E,
        "aria-hidden": !0,
        className: A.asterisk,
        children: [" ", "*"]
      })]
    }) : P]
  });
});
function K5(e) {
  return pe("MuiFormGroup", e);
}
ce("MuiFormGroup", ["root", "row", "error"]);
const Y5 = (e) => {
  const {
    classes: t,
    row: n,
    error: r
  } = e;
  return me({
    root: ["root", n && "row", r && "error"]
  }, K5, t);
}, G5 = U("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.row && t.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: !0
    },
    style: {
      flexDirection: "row"
    }
  }]
}), jx = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: o,
    row: i = !1,
    ...s
  } = r, [a] = vo({
    props: r,
    states: ["error"]
  }), l = {
    ...r,
    row: i,
    error: a.error
  }, d = Y5(l);
  return /* @__PURE__ */ u.jsx(G5, {
    className: ee(d.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
var iy;
const X5 = (e) => {
  const {
    classes: t,
    contained: n,
    size: r,
    disabled: o,
    error: i,
    filled: s,
    focused: a,
    required: l
  } = e, d = {
    root: ["root", o && "disabled", i && "error", r && `size${J(r)}`, n && "contained", a && "focused", s && "filled", l && "required"]
  };
  return me(d, RT, t);
}, Q5 = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${J(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.caption,
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${Ig.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${Ig.error}`]: {
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
}))), q5 = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: o,
    className: i,
    component: s = "p",
    disabled: a,
    error: l,
    filled: d,
    focused: p,
    margin: m,
    required: x,
    variant: f,
    ...v
  } = r, [b] = vo({
    props: r,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), w = {
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
  delete w.ownerState;
  const y = X5(w);
  return /* @__PURE__ */ u.jsx(Q5, {
    as: s,
    className: ee(y.root, i),
    ref: n,
    ...v,
    ownerState: w,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      iy || (iy = /* @__PURE__ */ u.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), Z5 = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: a
  } = e, l = {
    root: ["root", `color${J(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return me(l, ET, t);
}, J5 = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  ...e.typography.body1,
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  variants: [...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Ks.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${Ks.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${Ks.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), e$ = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(ve(({
  theme: e
}) => ({
  [`&.${Ks.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), t$ = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: o,
    className: i,
    color: s,
    component: a = "label",
    disabled: l,
    error: d,
    filled: p,
    focused: m,
    required: x,
    ...f
  } = r, [v] = vo({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), b = {
    ...r,
    color: v.color || "primary",
    component: a,
    disabled: v.disabled,
    error: v.error,
    filled: v.filled,
    focused: v.focused,
    required: v.required
  }, w = Z5(b);
  return /* @__PURE__ */ u.jsxs(J5, {
    as: a,
    ownerState: b,
    className: ee(w.root, i),
    ref: n,
    ...f,
    children: [o, v.required && /* @__PURE__ */ u.jsxs(e$, {
      ownerState: b,
      "aria-hidden": !0,
      className: w.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Qs(e) {
  return `scale(${e}, ${e ** 2})`;
}
const n$ = {
  entering: {
    opacity: 1,
    transform: Qs(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  },
  exiting: {
    opacity: 0,
    transform: Qs(0.75)
  },
  exited: {
    opacity: 0,
    transform: Qs(0.75)
  }
}, r$ = {
  opacity: 0,
  transform: Qs(0.75),
  visibility: "hidden"
}, Ta = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: a,
    in: l,
    onEnter: d,
    onEntered: p,
    onEntering: m,
    onExit: x,
    onExited: f,
    onExiting: v,
    style: b,
    timeout: w = "auto",
    ...y
  } = t, h = g.useRef(null), S = xo(), C = Iu(S.motion.reducedMotion, s), R = g.useRef(null), k = dt(R, Jo(i), n), $ = zn(R, m), E = zn(R, (T, I) => {
    C.shouldReduceMotion || ym(T);
    const {
      duration: O,
      delay: N,
      easing: j
    } = bc({
      style: b,
      timeout: w,
      easing: a
    }, {
      mode: "enter"
    });
    let B;
    w === "auto" && !C.shouldReduceMotion ? (B = S.transitions.getAutoHeightDuration(T.clientHeight), h.current = B) : (B = O, h.current = null);
    const _ = C.getTransitionTiming({
      duration: B,
      delay: N
    });
    T.style.transition = [S.transitions.create("opacity", {
      duration: _.duration,
      delay: _.delay
    }), S.transitions.create("transform", {
      duration: typeof _.duration == "string" ? _.duration : _.duration * 0.666,
      delay: _.delay,
      easing: j
    })].join(","), d && d(T, I);
  }), A = zn(R, p), z = zn(R, v), M = zn(R, (T) => {
    const {
      duration: I,
      delay: O,
      easing: N
    } = bc({
      style: b,
      timeout: w,
      easing: a
    }, {
      mode: "exit"
    });
    let j;
    w === "auto" && !C.shouldReduceMotion ? (j = S.transitions.getAutoHeightDuration(T.clientHeight), h.current = j) : (j = I, h.current = null);
    const B = C.getTransitionTiming({
      duration: j,
      delay: O
    });
    T.style.transition = [S.transitions.create("opacity", {
      duration: B.duration,
      delay: B.delay
    }), S.transitions.create("transform", {
      duration: typeof B.duration == "string" ? B.duration : B.duration * 0.666,
      delay: B.delay || (typeof B.duration == "string" ? B.duration : B.duration * 0.333),
      easing: N
    })].join(","), T.style.opacity = 0, T.style.transform = Qs(0.75), x && x(T);
  }), c = zn(R, (T) => {
    T.style.transition = "", f && f(T);
  }), P = r ? (T) => {
    r(R.current, T);
  } : void 0;
  return /* @__PURE__ */ u.jsx(ox, {
    appear: o,
    in: l,
    nodeRef: R,
    onEnter: E,
    onEntered: A,
    onEntering: $,
    onExit: M,
    onExited: c,
    onExiting: z,
    addEndListener: P,
    getAutoTimeout: w === "auto" ? () => h.current : void 0,
    reduceMotion: C.shouldReduceMotion,
    timeout: w === "auto" ? null : w,
    ...y,
    children: (T, {
      ownerState: I,
      ...O
    }) => {
      const N = tx(T, l, n$, r$, b, i.props.style);
      return /* @__PURE__ */ g.cloneElement(i, {
        style: N,
        ref: k,
        ...O
      });
    }
  });
});
Ta && (Ta.muiSupportAuto = !0);
function o$(e) {
  return pe("MuiInputLabel", e);
}
const i$ = ce("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), s$ = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = me({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, PT, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, a$ = U(Pu, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...Ru(e, t), !n.disableUnderline && t.underline];
  }
})(ve(({
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
        [`label + &, .${i$.root} + &`]: {
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
          ...qe(e, "transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Cs.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Cs.error}`]: {
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
          ...qe(e, "border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Cs.disabled}, .${Cs.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${n}`
          }
        },
        [`&.${Cs.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, ...Object.entries(e.palette).filter(ut()).map(([r]) => ({
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
})), l$ = U($u, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: Eu
})({}), $m = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: o = !1,
    fullWidth: i = !1,
    inputComponent: s = "input",
    multiline: a = !1,
    notched: l,
    // declare here to prevent spreading to DOM
    slotProps: d,
    slots: p = {},
    type: m = "text",
    ...x
  } = r, f = s$(r), b = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, w = d ? ht(d, b) : b, y = p.root ?? a$, h = p.input ?? l$;
  return /* @__PURE__ */ u.jsx(vm, {
    slots: {
      root: y,
      input: h
    },
    slotProps: w,
    fullWidth: i,
    inputComponent: s,
    multiline: a,
    ref: n,
    type: m,
    ...x,
    classes: f
  });
});
$m.muiName = "Input";
function c$(e) {
  return pe("MuiInputAdornment", e);
}
const $i = ce("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var sy;
const u$ = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${J(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, d$ = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, a = {
    root: ["root", n && "disablePointerEvents", o && `position${J(o)}`, s, r && "hiddenLabel", i && `size${J(i)}`]
  };
  return me(a, c$, t);
}, f$ = U("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: u$
})(ve(({
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
      [`&.${$i.positionStart}&:not(.${$i.hiddenLabel})`]: {
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
}))), ay = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: o,
    className: i,
    component: s = "div",
    disablePointerEvents: a = !1,
    disableTypography: l = !1,
    position: d,
    variant: p,
    ...m
  } = r, x = hm() || {};
  let f = p;
  p && x.variant, x && !f && (f = x.variant);
  const v = {
    ...r,
    hiddenLabel: x.hiddenLabel,
    size: x.size,
    disablePointerEvents: a,
    position: d,
    variant: f
  }, b = d$(v);
  return /* @__PURE__ */ u.jsx(Fa.Provider, {
    value: null,
    children: /* @__PURE__ */ u.jsx(f$, {
      as: s,
      ownerState: v,
      className: ee(b.root, i),
      ref: n,
      ...m,
      children: typeof o == "string" && !l ? /* @__PURE__ */ u.jsx(je, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ u.jsxs(g.Fragment, {
        children: [d === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          sy || (sy = /* @__PURE__ */ u.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), p$ = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: a
  } = e, l = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${J(r)}`, s],
    asterisk: [a && "asterisk"]
  }, d = me(l, o$, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...d
  };
}, m$ = U(t$, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ks.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(ve(({
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
      ...qe(e, ["color", "transform", "max-width"], {
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
}))), h$ = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: a,
    className: l,
    ...d
  } = r, [p, m] = vo({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let x = s;
  typeof x > "u" && m && (x = m.filled || m.focused || m.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: m,
    shrink: x,
    size: p.size,
    variant: p.variant,
    required: p.required,
    focused: p.focused
  }, v = p$(f);
  return /* @__PURE__ */ u.jsx(m$, {
    "data-shrink": x,
    ref: n,
    className: ee(v.root, l),
    ...d,
    ownerState: f,
    classes: v
  });
});
function g$(e) {
  return pe("MuiLinearProgress", e);
}
ce("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "bar", "bar1", "bar2"]);
const Ff = 4, y$ = {}, Df = yo`
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
`, v$ = typeof Df != "string" ? co`
        animation: ${Df} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, _f = yo`
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
`, x$ = typeof _f != "string" ? co`
        animation: ${_f} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, Wf = yo`
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
`, S$ = typeof Wf != "string" ? co`
        animation: ${Wf} 3s infinite linear;
      ` : null, b$ = (e) => {
  const {
    classes: t,
    variant: n,
    color: r
  } = e, o = {
    root: ["root", `color${J(r)}`, n],
    dashed: ["dashed"],
    bar1: ["bar", "bar1"],
    bar2: ["bar", "bar2", n === "buffer" && `color${J(r)}`]
  };
  return me(o, g$, t);
}, Im = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.5), C$ = U("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${J(n.color)}`], t[n.variant]];
  }
})(ve(({
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
  variants: [...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      backgroundColor: Im(e, t)
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
}))), w$ = U("span", {
  name: "MuiLinearProgress",
  slot: "Dashed"
})(ve(({
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
  }, ...Object.entries(e.palette).filter(ut()).map(([t]) => {
    const n = Im(e, t);
    return {
      props: {
        color: t
      },
      style: {
        backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`
      }
    };
  })]
})), S$ || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${Wf} 3s infinite linear`
}, ve(({
  theme: e
}) => ls(e, {
  animation: "none"
}) || y$)), k$ = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => [t.bar, t.bar1]
})(ve(({
  theme: e
}) => {
  const t = ls(e, {
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
    ...qe(e, "transform", {
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
    }, ...Object.entries(e.palette).filter(ut()).map(([n]) => ({
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
        ...qe(e, "transform", {
          duration: `.${Ff}s`,
          easing: "linear"
        })
      }
    }, {
      props: {
        variant: "buffer"
      },
      style: {
        zIndex: 1,
        ...qe(e, "transform", {
          duration: `.${Ff}s`,
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
      style: v$ || {
        animation: `${Df} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), T$ = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => [t.bar, t.bar2]
})(ve(({
  theme: e
}) => {
  const t = ls(e, {
    animation: "none",
    display: "none"
  });
  return {
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    ...qe(e, "transform", {
      duration: "0.2s",
      easing: "linear"
    }),
    transformOrigin: "left",
    variants: [...Object.entries(e.palette).filter(ut()).map(([n]) => ({
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
    }, ...Object.entries(e.palette).filter(ut()).map(([n]) => ({
      props: {
        color: n,
        variant: "buffer"
      },
      style: {
        backgroundColor: Im(e, n),
        ...qe(e, "transform", {
          duration: `.${Ff}s`,
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
      style: x$ || {
        animation: `${_f} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), ly = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: o,
    color: i = "primary",
    max: s,
    min: a,
    value: l,
    valueBuffer: d,
    variant: p = "indeterminate",
    ...m
  } = r, x = {
    ...r,
    color: i,
    variant: p
  }, f = a ?? 0, v = s ?? 100, b = b$(x), w = Ba(), y = {}, h = {
    bar1: {},
    bar2: {}
  };
  if ((p === "determinate" || p === "buffer") && l !== void 0) {
    const S = v - f;
    let C = (l - f) / S * 100 - 100;
    w && (C = -C), h.bar1.transform = S > 0 ? `translateX(${C}%)` : "translateX(-100%)", y["aria-valuenow"] = l, y["aria-valuemin"] = f, y["aria-valuemax"] = v;
  }
  if (p === "buffer" && d !== void 0) {
    const S = v - f;
    let C = (d - f) / S * 100 - 100;
    w && (C = -C), h.bar2.transform = S > 0 ? `translateX(${C}%)` : "translateX(-100%)";
  }
  return /* @__PURE__ */ u.jsxs(C$, {
    className: ee(b.root, o),
    ownerState: x,
    role: "progressbar",
    ...y,
    ref: n,
    ...m,
    children: [p === "buffer" ? /* @__PURE__ */ u.jsx(w$, {
      className: b.dashed,
      ownerState: x
    }) : null, /* @__PURE__ */ u.jsx(k$, {
      className: b.bar1,
      ownerState: x,
      style: h.bar1
    }), p === "determinate" ? null : /* @__PURE__ */ u.jsx(T$, {
      className: b.bar2,
      ownerState: x,
      style: h.bar2
    })]
  });
}), Uf = /* @__PURE__ */ g.createContext({});
function R$(e) {
  return pe("MuiList", e);
}
ce("MuiList", ["root", "padding", "dense", "subheader"]);
const E$ = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return me({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, R$, t);
}, P$ = U("ul", {
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
}), $$ = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiList"
  }), {
    children: o,
    className: i,
    component: s = "ul",
    dense: a = !1,
    disablePadding: l = !1,
    subheader: d,
    ...p
  } = r, m = g.useMemo(() => ({
    dense: a
  }), [a]), x = {
    ...r,
    component: s,
    dense: a,
    disablePadding: l
  }, f = E$(x);
  return /* @__PURE__ */ u.jsx(Uf.Provider, {
    value: m,
    children: /* @__PURE__ */ u.jsxs(P$, {
      as: s,
      className: ee(f.root, i),
      ref: n,
      ownerState: x,
      ...p,
      children: [d, o]
    })
  });
}), cy = ce("MuiListItemIcon", ["root", "alignItemsFlexStart"]), uy = ce("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Mm = /* @__PURE__ */ g.createContext(void 0);
function Ax() {
  const e = g.useContext(Mm);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const I$ = Object.is;
function M$(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !I$(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const j$ = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function Ox(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = qs,
    wrap: s = !0
  } = e, [a, l] = g.useState(t), [d, p] = g.useState(t);
  let m = a;
  t !== d && (p(t), t !== void 0 && t !== a && (m = t, l(t)));
  const x = g.useRef(null), f = g.useRef(/* @__PURE__ */ new Map()), [v, b] = g.useState(0), w = g.useMemo(() => Hf(f.current), [v]), y = dy(m, w, i, n), h = g.useRef(y);
  h.current = y;
  const S = g.useCallback(() => {
    const c = Hf(f.current), P = dy(h.current, c, i, n);
    return Bx(c, P);
  }, [n, i]), C = g.useCallback(() => f.current, []), R = tt((c) => {
    const P = f.current.get(c.id);
    M$(P ?? null, c) || (f.current.set(c.id, c), b((T) => T + 1));
  }), k = tt((c) => {
    f.current.delete(c) && b((P) => P + 1);
  }), $ = tt((c) => {
    l(c);
  }), E = g.useCallback((c) => h.current === c, []), A = g.useCallback((c, P, T, I) => {
    var j;
    const O = gl(f.current), N = Nx(O, c, P, T, I ?? i);
    return N ? ((j = N.element) == null || j.focus(), l(N.id), N) : null;
  }, [i]), z = g.useCallback((c, P, T) => ({
    onFocus: (N) => {
      P == null || P(N);
      const j = gl(f.current), B = Dx(j, N.target);
      B !== -1 && l(j[B].id);
    },
    onKeyDown: (N) => {
      if (T == null || T(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !j$.includes(N.key))
        return;
      let j = r === "horizontal" ? "ArrowLeft" : "ArrowUp", B = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (j = "ArrowRight", B = "ArrowLeft");
      const _ = gl(f.current), G = yr(St(x.current)), W = G === x.current;
      let Z = fy(_, G, h.current), V = "next";
      switch (N.key) {
        case j:
          V = "previous", N.preventDefault(), W && (Z = _.length);
          break;
        case B:
          N.preventDefault(), W && (Z = -1);
          break;
        case "Home":
          N.preventDefault(), Z = -1;
          break;
        case "End":
          N.preventDefault(), V = "previous", Z = _.length;
          break;
        default:
          return;
      }
      A(Z, V, s);
    },
    ref: N$(c, (N) => {
      x.current = N;
    })
  }), [A, o, r, s]), M = g.useCallback((c) => {
    var N;
    const P = gl(f.current), T = yr(St(x.current)), O = T === x.current ? -1 : fy(P, T, h.current);
    return ((N = A(O, "next", !0, c)) == null ? void 0 : N.id) ?? null;
  }, [A]);
  return g.useMemo(() => ({
    activeItemId: y,
    focusNext: M,
    getActiveItem: S,
    getContainerProps: z,
    getItemMap: C,
    isItemActive: E,
    registerItem: R,
    setActiveItemId: $,
    unregisterItem: k
  }), [y, M, S, z, C, E, R, $, k]);
}
function zx(e) {
  const t = Ax(), {
    activeItemId: n,
    registerItem: r,
    unregisterItem: o
  } = t, i = g.useRef(null), s = g.useMemo(() => ({
    disabled: e.disabled ?? !1,
    element: null,
    focusableWhenDisabled: e.focusableWhenDisabled ?? !1,
    id: e.id,
    selected: e.selected ?? !1,
    textValue: e.textValue
  }), [e.disabled, e.focusableWhenDisabled, e.id, e.selected, e.textValue]), a = g.useRef(s);
  a.current = s;
  const l = g.useCallback((p) => {
    if (i.current = p, p == null) {
      queueMicrotask(() => {
        i.current == null && o(e.id);
      });
      return;
    }
    r({
      ...a.current,
      element: p
    });
  }, [e.id, r, o]), d = dt(e.ref, l);
  return gt(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), gt(() => {
    const p = e.id;
    return () => {
      o(p);
    };
  }, [e.id, o]), {
    ref: d,
    tabIndex: n === e.id ? 0 : -1
  };
}
function dy(e, t, n, r) {
  return e != null ? A$(e, t, n) : O$(t, n, r);
}
function A$(e, t, n) {
  var o;
  const r = Fx(t, e);
  return r === -1 ? Lx(t, n) : n(t[r]) ? t[r].id : ((o = Nx(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function O$(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = Bx(e, r);
    if (o && t(o))
      return o.id;
  }
  return Lx(e, t);
}
function fy(e, t, n) {
  if (t) {
    const r = Dx(e, t);
    if (r !== -1)
      return r;
  }
  return Fx(e, n);
}
function Nx(e, t, n, r, o) {
  const i = e.length - 1;
  if (i === -1)
    return null;
  let s = !1, a = py(t, i, n, r);
  const l = a;
  for (; a !== -1; ) {
    if (a === l) {
      if (s)
        return null;
      s = !0;
    }
    const d = e[a];
    if (!d || !o(d))
      a = py(a, i, n, r);
    else
      return d;
  }
  return null;
}
function Lx(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function Bx(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Fx(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function Dx(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function Hf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(Vf).sort((o, i) => z$(o.element, i.element)), r = t.filter((o) => !Vf(o));
  return [...n, ...r];
}
function gl(e) {
  return Hf(e).filter(Vf);
}
function py(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function qs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function Vf(e) {
  return e.element != null && e.element.isConnected;
}
function z$(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function N$(...e) {
  return (t) => {
    e.forEach((n) => {
      jf(n ?? null, t);
    });
  };
}
function _x(e, t) {
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
function L$(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function B$(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function Hl(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const Wx = /* @__PURE__ */ g.createContext(null);
function Ux() {
  return g.useContext(Wx);
}
const F$ = Wx.Provider, Hx = /* @__PURE__ */ g.createContext(void 0);
function D$() {
  const e = g.useContext(Hx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function _$(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function Vx(e, t) {
  if (t === void 0)
    return !0;
  let n = _$(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function W$(e, t) {
  return Vx(e, t) ? qs(e) : !1;
}
function U$(e, t) {
  _x(e, t);
}
const H$ = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: o = !1,
    autoFocusItem: i = !1,
    children: s,
    className: a,
    disabledItemsFocusable: l = !1,
    disableListWrap: d = !1,
    onKeyDown: p,
    variant: m = "selectedMenu",
    ...x
  } = t, f = g.useRef(null), v = g.useRef(!1), [b, w] = g.useState(!1), y = Ux(), h = g.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), S = g.useCallback((I) => {
    var O, N, j;
    return m === "selectedMenu" ? ((O = I.find((B) => B.selected && qs(B))) == null ? void 0 : O.id) ?? ((N = I.find((B) => qs(B))) == null ? void 0 : N.id) ?? null : ((j = I.find((B) => qs(B))) == null ? void 0 : j.id) ?? null;
  }, [m]), C = Ox({
    activeItemId: void 0,
    getDefaultActiveItemId: S,
    orientation: "vertical",
    wrap: !d
  }), {
    activeItemId: R,
    focusNext: k,
    getActiveItem: $,
    getContainerProps: E,
    getItemMap: A
  } = C, z = tt((I = !1) => {
    if (!f.current || !I && v.current)
      return null;
    if (i) {
      const O = $();
      if (O != null && O.element) {
        const N = Array.from(A().values()).some((B) => B.selected), j = m === "menu" && N && !O.selected && y == null;
        return w(j), U$(O.element, y), v.current = !0, O.element;
      }
      return o ? (w(!1), f.current.focus(), f.current) : null;
    }
    return o ? (w(!1), f.current.focus(), v.current = !0, f.current) : (w(!1), null);
  });
  gt(() => {
    if (!o && !i) {
      v.current = !1, w(!1);
      return;
    }
    z();
  }, [R, i, o, z]), g.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (I, {
      direction: O
    }) => {
      const N = !f.current.style.width;
      if (I.clientHeight < f.current.clientHeight && N) {
        const j = `${Ex(rr(I))}px`;
        f.current.style[O === "rtl" ? "paddingLeft" : "paddingRight"] = j, f.current.style.width = `calc(100% + ${j})`;
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const I = yr(St(f.current));
      return I && Wo(f.current, I) ? I : z(!0);
    }
  }), [z]);
  const M = E(void 0, x.onFocus), c = dt(f, M.ref, n), P = g.useMemo(() => ({
    itemsFocusableWhenDisabled: l,
    suppressInitialFocusVisible: b,
    variant: m
  }), [l, b, m]), T = tt((I) => {
    if (b && w(!1), (I.ctrlKey || I.metaKey || I.altKey) && p) {
      p(I);
      return;
    }
    if (M.onKeyDown(I), I.key.length === 1) {
      const N = h.current, j = I.key.toLowerCase(), B = performance.now();
      N.keys.length > 0 && (B - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && j !== N.keys[0] && (N.repeating = !1)), N.lastTime = B, N.keys.push(j);
      const _ = yr(St(f.current)), G = _ && !N.repeating && Vx(_, N);
      N.previousKeyMatched && (G || k((W) => W$(W, N)) != null) ? I.preventDefault() : N.previousKeyMatched = !1;
    }
    p && p(I);
  });
  return /* @__PURE__ */ u.jsx($$, {
    role: "menu",
    ref: c,
    className: a,
    onKeyDown: T,
    tabIndex: -1,
    ...x,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ u.jsx(Hx.Provider, {
      value: P,
      children: /* @__PURE__ */ u.jsx(Mm.Provider, {
        value: C,
        children: s
      })
    })
  });
});
function V$(e) {
  return pe("MuiPopover", e);
}
ce("MuiPopover", ["root", "paper"]);
function my(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.height / 2 : t === "bottom" && (n = e.height), n;
}
function hy(e, t) {
  let n = 0;
  return typeof t == "number" ? n = t : t === "center" ? n = e.width / 2 : t === "right" && (n = e.width), n;
}
function gy(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function yl(e) {
  return typeof e == "function" ? e() : e;
}
const K$ = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"]
  }, V$, t);
}, Y$ = U($x, {
  name: "MuiPopover",
  slot: "Root"
})({}), Kx = U(Ln, {
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
}), G$ = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiPopover"
  }), {
    action: o,
    anchorEl: i,
    anchorOrigin: s = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: a,
    anchorReference: l = "anchorEl",
    children: d,
    className: p,
    container: m,
    disableAutoFocus: x = !1,
    elevation: f = 8,
    marginThreshold: v = 16,
    open: b,
    slots: w = {},
    slotProps: y = {},
    transformOrigin: h = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: S = "auto",
    disableScrollLock: C = !1,
    ...R
  } = r, k = g.useRef(), $ = {
    ...r,
    anchorOrigin: s,
    anchorReference: l,
    elevation: f,
    marginThreshold: v,
    transformOrigin: h,
    transitionDuration: S
  }, E = K$($), A = g.useCallback(() => {
    if (l === "anchorPosition")
      return a;
    const H = yl(i), ae = (H && H.nodeType === 1 ? H : St(k.current).body).getBoundingClientRect();
    return {
      top: ae.top + my(ae, s.vertical),
      left: ae.left + hy(ae, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, a, l]), z = g.useCallback((H) => ({
    vertical: my(H, h.vertical),
    horizontal: hy(H, h.horizontal)
  }), [h.horizontal, h.vertical]), M = g.useCallback((H) => {
    const ne = {
      width: H.offsetWidth,
      height: H.offsetHeight
    }, ae = z(ne);
    if (l === "none")
      return {
        top: null,
        left: null,
        transformOrigin: gy(ae)
      };
    const Ee = A();
    let Pe = Ee.top - ae.vertical, we = Ee.left - ae.horizontal;
    const le = Pe + ne.height, Ne = we + ne.width, Ve = rr(yl(i)), Re = Ve.innerHeight - v, Oe = Ve.innerWidth - v;
    if (v != null && Pe < v) {
      const ye = Pe - v;
      Pe -= ye, ae.vertical += ye;
    } else if (v != null && le > Re) {
      const ye = le - Re;
      Pe -= ye, ae.vertical += ye;
    }
    if (v != null && we < v) {
      const ye = we - v;
      we -= ye, ae.horizontal += ye;
    } else if (Ne > Oe) {
      const ye = Ne - Oe;
      we -= ye, ae.horizontal += ye;
    }
    return {
      top: `${Math.round(Pe)}px`,
      left: `${Math.round(we)}px`,
      transformOrigin: gy(ae)
    };
  }, [i, l, A, z, v]), [c, P] = g.useState(b), T = g.useCallback(() => {
    const H = k.current;
    if (!H)
      return;
    const ne = M(H);
    ne.top != null && H.style.setProperty("top", ne.top), ne.left != null && (H.style.left = ne.left), H.style.transformOrigin = ne.transformOrigin, P(!0);
  }, [M]);
  g.useEffect(() => (C && window.addEventListener("scroll", T), () => window.removeEventListener("scroll", T)), [i, C, T]);
  const I = () => {
    T();
  }, O = () => {
    P(!1);
  };
  g.useEffect(() => {
    b && T();
  }), g.useImperativeHandle(o, () => b ? {
    updatePosition: () => {
      T();
    }
  } : null, [b, T]), g.useEffect(() => {
    if (!b)
      return;
    const H = Tu(() => {
      T();
    }), ne = rr(yl(i));
    return ne.addEventListener("resize", H), () => {
      H.clear(), ne.removeEventListener("resize", H);
    };
  }, [i, b, T]);
  let N = S;
  const j = {
    slots: w,
    slotProps: y
  }, [B, _] = be("transition", {
    elementType: Ta,
    externalForwardedProps: j,
    ownerState: $,
    getSlotProps: (H) => ({
      ...H,
      onEntering: (ne, ae) => {
        var Ee;
        (Ee = H.onEntering) == null || Ee.call(H, ne, ae), I();
      },
      onExited: (ne) => {
        var ae;
        (ae = H.onExited) == null || ae.call(H, ne), O();
      }
    }),
    additionalProps: {
      appear: !0,
      in: b
    }
  });
  S === "auto" && !B.muiSupportAuto && (N = void 0);
  const G = m || (i ? St(yl(i)).body : void 0), [W, {
    slots: Z,
    slotProps: V,
    ...Y
  }] = be("root", {
    ref: n,
    elementType: Y$,
    externalForwardedProps: {
      ...j,
      ...R
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: w.backdrop
      },
      slotProps: {
        backdrop: rx(typeof y.backdrop == "function" ? y.backdrop($) : y.backdrop, {
          invisible: !0
        })
      },
      container: G,
      open: b
    },
    ownerState: $,
    className: ee(E.root, p)
  }), [K, Q] = be("paper", {
    ref: k,
    className: E.paper,
    elementType: Kx,
    externalForwardedProps: j,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: c ? void 0 : {
        opacity: 0
      }
    },
    ownerState: $
  });
  return /* @__PURE__ */ u.jsx(W, {
    ...Y,
    ...!xc(W) && {
      slots: Z,
      slotProps: V,
      disableAutoFocus: x,
      disableScrollLock: C
    },
    children: /* @__PURE__ */ u.jsx(B, {
      ..._,
      timeout: N,
      children: /* @__PURE__ */ u.jsx(K, {
        ...Q,
        children: d
      })
    })
  });
});
function X$(e) {
  return pe("MuiMenu", e);
}
ce("MuiMenu", ["root", "paper", "list"]);
const Q$ = {
  vertical: "top",
  horizontal: "right"
}, q$ = {
  vertical: "top",
  horizontal: "left"
}, Z$ = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, X$, t);
}, J$ = U(G$, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), eI = U(Kx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), tI = U(H$, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), nI = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: o = !0,
    children: i,
    className: s,
    disableAutoFocusItem: a = !1,
    onClose: l,
    open: d,
    PopoverClasses: p,
    transitionDuration: m = "auto",
    variant: x = "selectedMenu",
    slots: f = {},
    slotProps: v = {},
    ...b
  } = r, w = Ba(), y = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: a,
    transitionDuration: m,
    variant: x
  }, h = Z$(y), S = o && d, C = S && !a, R = g.useRef(null), k = (I, O) => {
    var N, j;
    R.current && (R.current.adjustStyleForScrollbar(I, {
      direction: w ? "rtl" : "ltr"
    }), S && ((j = (N = R.current).focusInitialTarget) == null || j.call(N)));
  }, $ = (I) => {
    I.key === "Tab" && (I.preventDefault(), l && l(I, "tabKeyDown"));
  }, E = {
    slots: f,
    slotProps: v
  }, A = es({
    elementType: f.root,
    externalSlotProps: v.root,
    ownerState: y,
    className: [h.root, s]
  }), [z, M] = be("paper", {
    className: h.paper,
    elementType: eI,
    externalForwardedProps: E,
    shouldForwardComponentProp: !0,
    ownerState: y
  }), [c, P] = be("list", {
    className: h.list,
    elementType: tI,
    shouldForwardComponentProp: !0,
    externalForwardedProps: E,
    getSlotProps: (I) => ({
      ...I,
      onKeyDown: (O) => {
        var N;
        $(O), (N = I.onKeyDown) == null || N.call(I, O);
      }
    }),
    ownerState: y
  }), T = typeof v.transition == "function" ? v.transition(y) : v.transition;
  return /* @__PURE__ */ u.jsx(
    J$,
    {
      disableAutoFocus: o,
      onClose: l,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: w ? "right" : "left"
      },
      transformOrigin: w ? Q$ : q$,
      slots: {
        root: f.root,
        paper: z,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: A,
        paper: M,
        backdrop: typeof v.backdrop == "function" ? v.backdrop(y) : v.backdrop,
        transition: {
          ...T,
          onEntering: (...I) => {
            var O;
            k(...I), (O = T == null ? void 0 : T.onEntering) == null || O.call(T, ...I);
          }
        }
      },
      open: d,
      ref: n,
      transitionDuration: m,
      ownerState: y,
      ...b,
      classes: p,
      children: /* @__PURE__ */ u.jsx(c, {
        actions: R,
        autoFocus: S,
        autoFocusItem: C,
        variant: x,
        ...P,
        children: i
      })
    }
  );
}), rI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, oI = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, l = me({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, $T, s);
  return {
    ...s,
    ...l
  };
}, iI = U(po, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: rI
})(ve(({
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
  [`&.${ws.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    [`&.${ws.focusVisible}`]: {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
    }
  },
  [`&.${ws.selected}:hover`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity)
    }
  },
  [`&.${ws.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${ws.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${oy.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${oy.inset}`]: {
    marginLeft: 52
  },
  [`& .${uy.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${uy.inset}`]: {
    paddingLeft: 36
  },
  [`& .${cy.root}`]: {
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
      [`& .${cy.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), rn = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: o = !1,
    component: i = "li",
    dense: s = !1,
    divider: a = !1,
    disableGutters: l = !1,
    focusVisibleClassName: d,
    role: p = "menuitem",
    tabIndex: m,
    className: x,
    ...f
  } = r, b = p === "menuitemcheckbox" || p === "menuitemradio" ? !!r.selected : void 0, w = Ux(), y = g.useContext(Uf), h = g.useMemo(() => ({
    dense: s || y.dense || !1,
    disableGutters: l
  }), [y.dense, s, l]), S = D$(), C = kr(), R = S.suppressInitialFocusVisible, k = S.itemsFocusableWhenDisabled, $ = g.useRef(null);
  gt(() => {
    o && $.current && _x($.current, w);
  }, [o]);
  const E = {
    ...r,
    dense: h.dense,
    divider: a,
    disableGutters: l
  }, A = oI(r), {
    root: z,
    ...M
  } = A, c = zx({
    id: C,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), P = dt($, c.ref);
  let T;
  return m !== void 0 ? T = m : S.variant === "selectedMenu" ? T = c.tabIndex : (!r.disabled || k) && (T = -1), /* @__PURE__ */ u.jsx(Uf.Provider, {
    value: h,
    children: /* @__PURE__ */ u.jsx(iI, {
      ref: P,
      role: p,
      "aria-checked": b,
      tabIndex: T,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: R,
      focusVisibleClassName: ee(A.focusVisible, d),
      className: ee(A.root, x),
      ...f,
      ownerState: E,
      classes: M
    })
  });
}), sI = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, a = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${J(n)}`, i && "iconOpen", r && "disabled"]
  };
  return me(a, IT, t);
}, Yx = U("select", {
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
  [`&.${xm.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${$i.root}`]: {
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
      [`.${yn.root}:has(> & ~ .${$i.root})`]: {
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
      [`.${yn.root}:has(> & ~ .${$i.root})`]: {
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
      [`.${yn.root}:has(> & ~ .${$i.root})`]: {
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
})), aI = U(Yx, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: Nt,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${xm.multiple}`]: t.multiple
    }];
  }
})({}), Gx = U("svg", {
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
  [`&.${xm.disabled}`]: {
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
})), lI = U(Gx, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${J(n.variant)}`], n.open && t.iconOpen];
  }
})({}), cI = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    className: r,
    disabled: o,
    error: i,
    IconComponent: s,
    inputRef: a,
    variant: l = "standard",
    ...d
  } = t, p = {
    ...t,
    disabled: o,
    variant: l,
    error: i
  }, m = sI(p);
  return /* @__PURE__ */ u.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ u.jsx(aI, {
      ownerState: p,
      className: ee(m.select, r),
      disabled: o,
      ref: a || n,
      ...d
    }), t.multiple ? null : /* @__PURE__ */ u.jsx(lI, {
      as: s,
      ownerState: p,
      className: m.icon
    })]
  });
});
var yy;
const uI = U("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Nt
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
}), dI = U("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: Nt
})(ve(({
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
      ...qe(e, "width", {
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
      ...qe(e, "max-width", {
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
      ...qe(e, "max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
})));
function fI(e) {
  const {
    children: t,
    classes: n,
    className: r,
    label: o,
    notched: i,
    ...s
  } = e, a = o != null && o !== "", l = {
    ...e,
    notched: i,
    withLabel: a
  };
  return /* @__PURE__ */ u.jsx(uI, {
    "aria-hidden": !0,
    className: r,
    ownerState: l,
    ...s,
    children: /* @__PURE__ */ u.jsx(dI, {
      ownerState: l,
      children: a ? /* @__PURE__ */ u.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        yy || (yy = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const pI = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, MT, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, mI = U(Pu, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: Ru
})(ve(({
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
    variants: [...Object.entries(e.palette).filter(ut()).map(([n]) => ({
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
        [`&.${zo.root}`]: {
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
})), hI = U(fI, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), gI = U($u, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: Eu
})(ve(({
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
}))), jm = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    fullWidth: o = !1,
    inputComponent: i = "input",
    label: s,
    multiline: a = !1,
    notched: l,
    slots: d = {},
    slotProps: p = {},
    type: m = "text",
    ...x
  } = r, f = pI(r), [v, b] = vo({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), w = {
    ...r,
    color: v.color || "primary",
    disabled: v.disabled,
    error: v.error,
    focused: v.focused,
    formControl: b,
    fullWidth: o,
    hiddenLabel: v.hiddenLabel,
    multiline: a,
    size: v.size,
    type: m
  }, y = d.root ?? mI, h = d.input ?? gI, [S, C] = be("notchedOutline", {
    elementType: hI,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: w,
    externalForwardedProps: {
      slots: d,
      slotProps: p
    },
    additionalProps: {
      label: s != null && s !== "" && v.required ? /* @__PURE__ */ u.jsxs(g.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ u.jsx(vm, {
    slots: {
      root: y,
      input: h
    },
    slotProps: p,
    renderSuffix: (R) => /* @__PURE__ */ u.jsx(S, {
      ...C,
      notched: typeof l < "u" ? l : !!(R.startAdornment || R.filled || R.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: a,
    ref: n,
    type: m,
    ...x,
    classes: {
      ...f,
      notchedOutline: null
    }
  });
});
jm.muiName = "Input";
const yI = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), vI = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
})), xI = U("span", {
  name: "MuiRadioButtonIcon",
  shouldForwardProp: Nt
})({
  position: "relative",
  display: "flex"
}), SI = U(yI, {
  name: "MuiRadioButtonIcon"
})({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), bI = U(vI, {
  name: "MuiRadioButtonIcon"
})(ve(({
  theme: e
}) => ({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  ...qe(e, "transform", {
    easing: e.transitions.easing.easeIn,
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: {
      checked: !0
    },
    style: {
      transform: "scale(1)",
      ...qe(e, "transform", {
        easing: e.transitions.easing.easeOut,
        duration: e.transitions.duration.shortest
      })
    }
  }]
})));
function Xx(e) {
  const {
    checked: t = !1,
    classes: n = {},
    fontSize: r
  } = e, o = {
    ...e,
    checked: t
  };
  return /* @__PURE__ */ u.jsxs(xI, {
    className: n.root,
    ownerState: o,
    children: [/* @__PURE__ */ u.jsx(SI, {
      fontSize: r,
      className: n.background,
      ownerState: o
    }), /* @__PURE__ */ u.jsx(bI, {
      fontSize: r,
      className: n.dot,
      ownerState: o
    })]
  });
}
const Qx = /* @__PURE__ */ g.createContext(void 0);
function CI() {
  return g.useContext(Qx);
}
const wI = (e) => {
  const {
    classes: t,
    color: n,
    size: r
  } = e, o = {
    root: ["root", `color${J(n)}`, r !== "medium" && `size${J(r)}`]
  };
  return {
    ...t,
    ...me(o, jT, t)
  };
}, kI = U(Rx, {
  shouldForwardProp: (e) => Nt(e) || e === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size !== "medium" && t[`size${J(n.size)}`], t[`color${J(n.color)}`]];
  }
})(ve(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  [`&.${Mg.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  },
  variants: [{
    props: {
      color: "default",
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette.action.active, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(ut()).map(([t]) => ({
    props: {
      color: t,
      disabled: !1
    },
    style: {
      [`&.${Mg.checked}`]: {
        color: (e.vars || e).palette[t].main
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
})));
function TI(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const RI = /* @__PURE__ */ u.jsx(Xx, {
  checked: !0
}), EI = /* @__PURE__ */ u.jsx(Xx, {}), ci = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiRadio"
  }), {
    checked: o,
    checkedIcon: i = RI,
    color: s = "primary",
    icon: a = EI,
    name: l,
    onChange: d,
    size: p = "medium",
    className: m,
    disabled: x,
    disableRipple: f = !1,
    slots: v = {},
    slotProps: b = {},
    ...w
  } = r, y = hm();
  let h = x;
  y && typeof h > "u" && (h = y.disabled), h ?? (h = !1);
  const S = {
    ...r,
    disabled: h,
    disableRipple: f,
    color: s,
    size: p
  }, C = wI(S), R = CI();
  let k = o;
  const $ = If(d, R && R.onChange);
  let E = l;
  R && (typeof k > "u" && (k = TI(R.value, r.value)), typeof E > "u" && (E = R.name));
  const A = b.input, [z, M] = be("root", {
    ref: n,
    elementType: kI,
    className: ee(C.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: v,
      slotProps: b,
      ...w
    },
    getSlotProps: (c) => ({
      ...c,
      onChange: (P, ...T) => {
        var I;
        (I = c.onChange) == null || I.call(c, P, ...T), $(P, ...T);
      }
    }),
    ownerState: S,
    additionalProps: {
      type: "radio",
      icon: /* @__PURE__ */ g.cloneElement(a, {
        fontSize: a.props.fontSize ?? p
      }),
      checkedIcon: /* @__PURE__ */ g.cloneElement(i, {
        fontSize: i.props.fontSize ?? p
      }),
      disabled: h,
      name: E,
      checked: k,
      // Forward the raw prop so an unset value stays `undefined` and ButtonBase resolves its
      // own default — letting a global `MuiButtonBase.defaultProps.disableRipple` apply here.
      disableRipple: r.disableRipple,
      slots: v,
      slotProps: {
        // Do not forward `slotProps.root` again because it's already handled by the `RootSlot` in this file.
        input: typeof A == "function" ? A(S) : A
      }
    }
  });
  return /* @__PURE__ */ u.jsx(z, {
    ...M,
    classes: C
  });
});
function PI(e) {
  return pe("MuiRadioGroup", e);
}
ce("MuiRadioGroup", ["root", "row", "error"]);
const $I = (e) => {
  const {
    classes: t,
    row: n,
    error: r
  } = e;
  return me({
    root: ["root", n && "row", r && "error"]
  }, PI, t);
}, vy = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    children: o,
    className: i,
    defaultValue: s,
    name: a,
    onChange: l,
    value: d,
    ...p
  } = t, m = g.useRef(null), x = $I(t), [f, v] = Ca({
    controlled: d,
    default: s,
    name: "RadioGroup"
  });
  g.useImperativeHandle(r, () => ({
    focus: () => {
      let h = m.current.querySelector("input:not(:disabled):checked");
      h || (h = m.current.querySelector("input:not(:disabled)")), h && h.focus();
    }
  }), []);
  const b = dt(n, m), w = kr(a), y = g.useMemo(() => ({
    name: w,
    onChange(h) {
      v(h.target.value), l && l(h, h.target.value);
    },
    value: f
  }), [w, l, v, f]);
  return /* @__PURE__ */ u.jsx(Qx.Provider, {
    value: y,
    children: /* @__PURE__ */ u.jsx(jx, {
      role: "radiogroup",
      ref: b,
      className: ee(x.root, i),
      ...p,
      children: o
    })
  });
});
function II(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function qx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return g.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ g.isValidElement(n) && (t += qx(n.props.children));
  }), t;
}
function MI(e, t, n = 0) {
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
function jI(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function AI(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ g.isValidElement(i) || !II(i) || i.props.disabled)
      continue;
    const s = qx(i.props.children).trim().toLowerCase();
    s !== "" && (r === -1 && Hl(t, i.props.value) && (r = n.length), n.push({
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
var xy;
const vl = 2, OI = 400, Sy = 200, zI = 750, $o = " ", NI = "ArrowUp", LI = "ArrowDown", BI = "Enter";
function by(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - vl && e.clientX <= r.right + vl && e.clientY >= r.top - vl && e.clientY <= r.bottom + vl;
}
const FI = U(Yx, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${zo.select}`]: t.select
      },
      {
        [`&.${zo.select}`]: t[n.variant]
      },
      {
        [`&.${zo.error}`]: t.error
      },
      {
        [`&.${zo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${zo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), DI = U(Gx, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), _I = U("input", {
  shouldForwardProp: (e) => J1(e) && e !== "classes",
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
}), WI = (e) => {
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
  }, Mx, t);
}, UI = /* @__PURE__ */ g.forwardRef(function(t, n) {
  var us, ti, zm, Nm;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: a,
    className: l,
    defaultOpen: d,
    defaultValue: p,
    disabled: m,
    displayEmpty: x,
    error: f = !1,
    IconComponent: v,
    inputRef: b,
    labelId: w,
    MenuProps: y = {},
    multiple: h,
    name: S,
    onBlur: C,
    onChange: R,
    onClose: k,
    onFocus: $,
    // eslint-disable-next-line react/prop-types
    onKeyDown: E,
    // eslint-disable-next-line react/prop-types
    onMouseDown: A,
    onOpen: z,
    open: M,
    readOnly: c,
    renderValue: P,
    required: T,
    SelectDisplayProps: I = {},
    tabIndex: O,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: j,
    variant: B = "standard",
    ..._
  } = t, [G, W] = Ca({
    controlled: j,
    default: p,
    name: "Select"
  }), [Z, V] = Ca({
    controlled: M,
    default: d,
    name: "Select"
  }), Y = g.useRef(null), K = g.useRef(null), Q = g.useRef(null), H = g.useRef(!1), ne = g.useRef(!1), ae = g.useRef(null), Ee = g.useRef(!1), Pe = g.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), we = g.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), le = vr(), Ne = vr(), Ve = vr(), [Re, Oe] = g.useState(null), {
    current: ye
  } = g.useRef(M != null), [ze, Xe] = g.useState(), [Be, Ke] = g.useState(null), We = dt(n, b), it = g.useCallback((q) => {
    K.current = q, q && Oe(q);
  }, []), Fe = Re == null ? void 0 : Re.parentNode;
  g.useImperativeHandle(We, () => ({
    focus: () => {
      K.current.focus();
    },
    node: Y.current,
    value: G
  }), [G]);
  const Te = Re !== null && Z, Ue = g.useCallback(() => {
    Ve.clear(), we.current.buffer = "", we.current.previousSearchIndex = null, we.current.matchedIndex = null;
  }, [Ve]);
  gt(() => {
    H.current = Te, Te && Ue();
  }, [Te, Ue]);
  const bt = g.useCallback(() => {
    le.clear(), Ne.clear();
  }, [le, Ne]), ie = g.useCallback(() => {
    bt(), Ee.current = !1, Pe.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [bt]), ke = g.useCallback(() => {
    ae.current && (ae.current(), ae.current = null);
  }, []);
  g.useEffect(() => {
    Te || (ie(), ke());
  }, [Te, ie, ke]), g.useEffect(() => () => {
    ie(), ke(), Ue();
  }, [ie, ke, Ue]), g.useEffect(() => {
    if (!Te || !Fe || s || typeof ResizeObserver > "u")
      return;
    const q = new ResizeObserver(() => {
      Xe(Fe.clientWidth);
    });
    return q.observe(Fe), () => {
      q.disconnect();
    };
  }, [Te, Fe, s]), g.useEffect(() => {
    d && Z && Re && !ye && (Xe(s ? null : Fe.clientWidth), K.current.focus());
  }, [Re, s]), g.useEffect(() => {
    i && K.current.focus();
  }, [i]), g.useEffect(() => {
    if (!w)
      return;
    const q = St(K.current).getElementById(w);
    if (q) {
      const fe = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return q.addEventListener("click", fe), () => {
        q.removeEventListener("click", fe);
      };
    }
  }, [w]);
  const Me = tt((q, fe) => {
    q || (ie(), ke()), q ? (Ue(), Ke(L$(fe)), z && z(fe)) : (Ke(null), k && k(fe)), ye || (H.current = q, Xe(s ? null : Fe.clientWidth), V(q));
  }), Je = () => {
    ie(), ne.current ? Ne.start(Sy, () => {
      Pe.current.allowUnselectedMouseUp = !0, le.start(Sy, () => {
        Pe.current.allowSelectedMouseUp = !0;
      });
    }) : le.start(OI, () => {
      Pe.current.allowSelectedMouseUp = !0, Pe.current.allowUnselectedMouseUp = !0;
    });
  }, xe = (q) => {
    if (A == null || A(q), q.button !== 0 || (q.preventDefault(), !K.current))
      return;
    K.current.focus();
    const fe = St(q.currentTarget);
    Je(), ke();
    const Ie = (ft) => {
      ae.current = null, K.current && (by(ft, K.current) || by(ft, Q.current) || !H.current && ye || Me(!1, ft));
    };
    fe.addEventListener("mouseup", Ie, {
      capture: !0,
      once: !0
    }), ae.current = () => {
      fe.removeEventListener("mouseup", Ie, !0);
    }, Me(!0, q);
  }, or = (q) => {
    Me(!1, q);
  }, $n = g.Children.toArray(a), bo = (q) => {
    const fe = $n.find((Ie) => Ie.props.value === q.target.value);
    fe !== void 0 && (W(fe.props.value), R && R(q, fe));
  }, Wr = (q, fe, Ie) => {
    if (W(Ie), R) {
      const ft = q.nativeEvent || q, qt = new ft.constructor(ft.type, ft);
      Object.defineProperty(qt, "target", {
        writable: !0,
        value: {
          value: Ie,
          name: S
        }
      }), R(qt, fe);
    }
  }, Se = (q) => (fe) => {
    Ee.current = !1;
    let Ie;
    if (fe.currentTarget.hasAttribute("tabindex")) {
      if (h) {
        Ie = Array.isArray(G) ? G.slice() : [];
        const ft = G.indexOf(q.props.value);
        ft === -1 ? Ie.push(q.props.value) : Ie.splice(ft, 1);
      } else
        Ie = q.props.value;
      q.props.onClick && q.props.onClick(fe), G !== Ie && Wr(fe, q, Ie), h || Me(!1, fe);
    }
  }, Qe = (q, fe) => (Ie) => {
    var Ua, ni;
    if ((ni = (Ua = q.props).onMouseUp) == null || ni.call(Ua, Ie), Ee.current) {
      Ee.current = !1;
      return;
    }
    const ft = !Pe.current.allowSelectedMouseUp && fe, qt = !Pe.current.allowUnselectedMouseUp && !fe;
    ft || qt || Ie.currentTarget.click();
  }, Qt = (q) => {
    var Lm;
    const fe = we.current, Ie = fe.buffer !== "";
    if (Te || h || m || q.defaultPrevented || (Lm = q.nativeEvent) != null && Lm.isComposing || q.key.length !== 1 || q.ctrlKey || q.metaKey || q.altKey || q.key === $o && !Ie)
      return !1;
    q.key === $o && q.preventDefault();
    const ft = fe.buffer === "", {
      options: qt,
      selectedIndex: Ua
    } = AI($n, G);
    if (qt.length === 0)
      return q.key !== $o && Ue(), !0;
    ft && (fe.previousSearchIndex = Ua);
    const ni = q.key.toLowerCase();
    fe.buffer === ni && jI(qt, ni) && (fe.buffer = "", fe.previousSearchIndex = fe.matchedIndex), fe.buffer += ni, Ve.start(zI, Ue);
    const Ou = MI(qt, fe.buffer, (fe.previousSearchIndex ?? -1) + 1);
    if (Ou !== -1) {
      const zu = qt[Ou];
      return fe.matchedIndex = Ou, Hl(G, zu.value) || Wr(q, zu.child, zu.value), !0;
    }
    return q.key !== $o && Ue(), !0;
  }, Wa = (q) => {
    if (!c) {
      const fe = Qt(q), Ie = q.key === $o || q.key === NI || q.key === LI || q.key === BI;
      !fe && Ie && (q.preventDefault(), Me(!0, q)), E == null || E(q);
    }
  }, ei = (q) => {
    Ue(), !Te && C && (Object.defineProperty(q, "target", {
      writable: !0,
      value: {
        value: G,
        name: S
      }
    }), C(q));
  }, Ur = (q) => (fe) => {
    var Ie, ft;
    (ft = (Ie = q == null ? void 0 : q.props) == null ? void 0 : Ie.onKeyDown) == null || ft.call(Ie, fe), fe.key === $o && fe.target === fe.currentTarget && !fe.defaultPrevented && (fe.preventDefault(), fe.repeat || fe.currentTarget.click());
  };
  delete _["aria-invalid"];
  let Kn, L;
  const he = [];
  let Lt = !1, Bt = !1;
  (Sc({
    value: G
  }) || x) && (P ? Kn = P(G) : Lt = !0);
  const In = $n.map((q) => {
    if (!/* @__PURE__ */ g.isValidElement(q))
      return null;
    let fe;
    if (h) {
      if (!Array.isArray(G))
        throw new Error(wn(2));
      fe = G.some((Ie) => Hl(Ie, q.props.value)), fe && Lt && he.push(q.props.children);
    } else
      fe = Hl(G, q.props.value), fe && Lt && (L = q.props.children);
    return fe && (Bt = !0), /* @__PURE__ */ g.cloneElement(q, {
      "aria-selected": fe ? "true" : "false",
      onMouseDown: (Ie) => {
        var ft, qt;
        Ee.current = !0, (qt = (ft = q.props).onMouseDown) == null || qt.call(ft, Ie);
      },
      onPointerDown: (Ie) => {
        var ft, qt;
        Ee.current = !0, (qt = (ft = q.props).onPointerDown) == null || qt.call(ft, Ie);
      },
      onClick: Se(q),
      onMouseUp: Qe(q, fe),
      onKeyUp: (Ie) => {
        Ie.key === $o && Ie.preventDefault(), q.props.onKeyUp && q.props.onKeyUp(Ie);
      },
      onKeyDown: Ur(q),
      role: "option",
      selected: fe,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  gt(() => {
    ne.current = Bt, !Te && !h && !Bt && Ue();
  }, [Bt, h, Te, Ue]), Lt && (h ? he.length === 0 ? Kn = null : Kn = he.reduce((q, fe, Ie) => (q.push(fe), Ie < he.length - 1 && q.push(", "), q), []) : Kn = L);
  let Ut = ze;
  !s && ye && Re && (Ut = Fe.clientWidth);
  let cs;
  typeof O < "u" ? cs = O : cs = m ? null : 0;
  const oe = I.id || (S ? `mui-component-select-${S}` : void 0), te = {
    ...t,
    variant: B,
    value: G,
    open: Te,
    error: f
  }, Ce = WI(te), $e = typeof ((us = y.slotProps) == null ? void 0 : us.paper) == "function" ? y.slotProps.paper(te) : (ti = y.slotProps) == null ? void 0 : ti.paper, Ct = dt($e == null ? void 0 : $e.ref, Q), Rr = typeof ((zm = y.slotProps) == null ? void 0 : zm.list) == "function" ? y.slotProps.list(te) : (Nm = y.slotProps) == null ? void 0 : Nm.list, ir = kr(), Co = kr();
  return /* @__PURE__ */ u.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ u.jsx(FI, {
      as: "div",
      ref: it,
      tabIndex: cs,
      role: "combobox",
      "aria-controls": Te ? ir : void 0,
      "aria-disabled": m ? "true" : void 0,
      "aria-expanded": Te ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": c ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": w,
      "aria-describedby": r,
      "aria-required": T ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: Wa,
      onMouseDown: m || c ? null : xe,
      onBlur: ei,
      onFocus: $,
      ...I,
      ownerState: te,
      className: ee(I.className, Ce.select, l),
      id: oe,
      children: B$(Kn) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        xy || (xy = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Kn
    }), /* @__PURE__ */ u.jsx(_I, {
      "aria-invalid": f,
      value: Array.isArray(G) ? G.join(",") : G,
      name: S,
      ref: Y,
      "aria-hidden": !0,
      onChange: bo,
      tabIndex: -1,
      disabled: m,
      readOnly: c,
      className: Ce.nativeInput,
      autoFocus: i,
      required: T,
      ..._,
      id: _.id ?? Co,
      ownerState: te
    }), /* @__PURE__ */ u.jsx(DI, {
      as: v,
      className: Ce.icon,
      ownerState: te
    }), /* @__PURE__ */ u.jsx(F$, {
      value: Be,
      children: /* @__PURE__ */ u.jsx(nI, {
        id: `menu-${S || ""}`,
        anchorEl: Fe,
        open: Te,
        onClose: or,
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
            "aria-labelledby": w,
            role: "listbox",
            "aria-multiselectable": h ? "true" : void 0,
            disableListWrap: !0,
            id: ir,
            ...Rr
          },
          paper: {
            ...$e,
            ref: Ct,
            style: {
              minWidth: Ut,
              ...$e == null ? void 0 : $e.style
            }
          }
        },
        children: In
      })
    })]
  });
}), HI = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"]
  }, Mx, t);
  return {
    ...t,
    ...r
  };
}, Am = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => Nt(e) && e !== "variant"
}, VI = U($m, Am)(""), KI = U(jm, Am)(""), YI = U(Pm, Am)(""), Ii = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: a,
    defaultOpen: l = !1,
    displayEmpty: d = !1,
    IconComponent: p = yP,
    id: m,
    input: x,
    inputProps: f,
    label: v,
    labelId: b,
    MenuProps: w,
    multiple: y = !1,
    native: h = !1,
    onClose: S,
    onOpen: C,
    open: R,
    renderValue: k,
    SelectDisplayProps: $,
    variant: E = "outlined",
    ...A
  } = r, z = h ? cI : UI, [M] = vo({
    props: r,
    states: ["variant", "error"]
  }), c = M.variant || E, P = {
    ...r,
    variant: c,
    classes: s
  }, T = HI(P), {
    root: I,
    ...O
  } = T, N = x || {
    standard: /* @__PURE__ */ u.jsx(VI, {
      ownerState: P
    }),
    outlined: /* @__PURE__ */ u.jsx(KI, {
      label: v,
      ownerState: P
    }),
    filled: /* @__PURE__ */ u.jsx(YI, {
      ownerState: P
    })
  }[c], j = dt(n, Jo(N));
  return /* @__PURE__ */ u.jsx(g.Fragment, {
    children: /* @__PURE__ */ g.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: z,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: p,
        variant: c,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: y,
        ...h ? {
          id: m
        } : {
          autoWidth: o,
          defaultOpen: l,
          displayEmpty: d,
          labelId: b,
          MenuProps: w,
          onClose: S,
          onOpen: C,
          open: R,
          renderValue: k,
          SelectDisplayProps: {
            id: m,
            ...$
          }
        },
        ...f,
        classes: f ? ht(O, f.classes) : O,
        ...x ? x.props.inputProps : {}
      },
      ...(y && h || d) && c === "outlined" ? {
        notched: !0
      } : {},
      ref: j,
      className: ee(N.props.className, a, T.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!x && {
        variant: c
      },
      ...A
    })
  });
});
Ii.muiName = "Select";
function GI(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = vr();
  g.useEffect(() => {
    if (!o)
      return;
    function y(h) {
      h.defaultPrevented || h.key === "Escape" && (r == null || r(h, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [o, r]);
  const a = tt((y, h) => {
    r == null || r(y, h);
  }), l = tt((y) => {
    !r || y == null || s.start(y, () => {
      a(null, "timeout");
    });
  });
  g.useEffect(() => (o && l(t), s.clear), [o, t, l, s]);
  const d = (y) => {
    r == null || r(y, "clickaway");
  }, p = s.clear, m = g.useCallback(() => {
    t != null && l(i ?? t * 0.5);
  }, [t, i, l]), x = (y) => (h) => {
    const S = y.onBlur;
    S == null || S(h), m();
  }, f = (y) => (h) => {
    const S = y.onFocus;
    S == null || S(h), p();
  }, v = (y) => (h) => {
    const S = y.onMouseEnter;
    S == null || S(h), p();
  }, b = (y) => (h) => {
    const S = y.onMouseLeave;
    S == null || S(h), m();
  };
  return g.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", m), window.addEventListener("blur", p), () => {
        window.removeEventListener("focus", m), window.removeEventListener("blur", p);
      };
  }, [n, o, m, p]), {
    getRootProps: (y = {}) => {
      const h = {
        ...wc(e),
        ...wc(y)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...y,
        ...h,
        onBlur: x(h),
        onFocus: f(h),
        onMouseEnter: v(h),
        onMouseLeave: b(h)
      };
    },
    onClickAway: d
  };
}
function XI(e) {
  return pe("MuiSnackbarContent", e);
}
ce("MuiSnackbarContent", ["root", "message", "action"]);
const QI = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, XI, t);
}, qI = U(Ln, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(ve(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(Tf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : Tf(e.palette.background.default, t),
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
})), ZI = U("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), JI = U("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), eM = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: a = "alert",
    ...l
  } = r, d = r, p = QI(d);
  return /* @__PURE__ */ u.jsxs(qI, {
    role: a,
    elevation: 6,
    className: ee(p.root, i),
    ownerState: d,
    ref: n,
    ...l,
    children: [/* @__PURE__ */ u.jsx(ZI, {
      className: p.message,
      ownerState: d,
      children: s
    }), o ? /* @__PURE__ */ u.jsx(JI, {
      className: p.action,
      ownerState: d,
      children: o
    }) : null]
  });
});
function tM(e) {
  return pe("MuiSnackbar", e);
}
ce("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const nM = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${J(n.vertical)}${J(n.horizontal)}`]
  };
  return me(r, tM, t);
}, rM = U("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${J(n.anchorOrigin.vertical)}${J(n.anchorOrigin.horizontal)}`]];
  }
})(ve(({
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
}))), oM = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiSnackbar"
  }), o = xo(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    action: s,
    anchorOrigin: {
      vertical: a,
      horizontal: l
    } = {
      vertical: "bottom",
      horizontal: "left"
    },
    autoHideDuration: d = null,
    children: p,
    className: m,
    disableWindowBlurListener: x = !1,
    message: f,
    onBlur: v,
    onClose: b,
    onFocus: w,
    onMouseEnter: y,
    onMouseLeave: h,
    open: S,
    resumeHideDuration: C,
    slots: R = {},
    slotProps: k = {},
    transitionDuration: $ = i,
    ...E
  } = r, A = {
    ...r,
    anchorOrigin: {
      vertical: a,
      horizontal: l
    },
    autoHideDuration: d,
    disableWindowBlurListener: x,
    transitionDuration: $
  }, z = nM(A), {
    getRootProps: M,
    onClickAway: c
  } = GI(A), [P, T] = g.useState(!0), I = {
    slots: R,
    slotProps: k
  }, [O, N] = be("root", {
    ref: n,
    className: [z.root, m],
    elementType: rM,
    getSlotProps: M,
    externalForwardedProps: {
      ...I,
      ...E
    },
    ownerState: A
  }), [j, {
    ownerState: B,
    ..._
  }] = be("clickAwayListener", {
    elementType: ZP,
    externalForwardedProps: I,
    getSlotProps: (Y) => ({
      onClickAway: (...K) => {
        var H;
        const Q = K[0];
        (H = Y.onClickAway) == null || H.call(Y, ...K), !(Q != null && Q.defaultMuiPrevented) && c(...K);
      }
    }),
    ownerState: A
  }), [G, W] = be("content", {
    elementType: eM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: I,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: A
  }), [Z, V] = be("transition", {
    elementType: Ta,
    externalForwardedProps: I,
    getSlotProps: (Y) => ({
      onEnter: (...K) => {
        var Q;
        (Q = Y.onEnter) == null || Q.call(Y, ...K), T(!1);
      },
      onExited: (...K) => {
        var Q;
        (Q = Y.onExited) == null || Q.call(Y, ...K), T(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: S,
      timeout: $,
      direction: a === "top" ? "down" : "up"
    },
    ownerState: A
  });
  return !S && P ? null : /* @__PURE__ */ u.jsx(j, {
    ..._,
    ...R.clickAwayListener && {
      ownerState: B
    },
    children: /* @__PURE__ */ u.jsx(O, {
      ...N,
      children: /* @__PURE__ */ u.jsx(Z, {
        ...V,
        children: p || /* @__PURE__ */ u.jsx(G, {
          ...W
        })
      })
    })
  });
});
function iM(e) {
  return pe("MuiTooltip", e);
}
const Mn = ce("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function sM(e) {
  return Math.round(e * 1e5) / 1e5;
}
const aM = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${J(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return me(s, iM, t);
}, lM = U(Cx, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(ve(({
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
}))), cM = U("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${J(n.placement.split("-")[0])}`]];
  }
})(ve(({
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
      lineHeight: `${sM(16 / 14)}em`,
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
}))), uM = U("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(ve(({
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
let xl = !1;
const Cy = new Mu();
let Rs = {
  x: 0,
  y: 0
};
function Sl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const ui = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: o = !1,
    children: i,
    classes: s,
    describeChild: a = !1,
    disableFocusListener: l = !1,
    disableHoverListener: d = !1,
    disableInteractive: p = !1,
    disableTouchListener: m = !1,
    enterDelay: x = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: v = 700,
    followCursor: b = !1,
    id: w,
    leaveDelay: y = 0,
    leaveTouchDelay: h = 1500,
    onClose: S,
    onOpen: C,
    open: R,
    placement: k = "bottom",
    slotProps: $ = {},
    slots: E = {},
    title: A,
    ...z
  } = r, M = /* @__PURE__ */ g.isValidElement(i) ? i : /* @__PURE__ */ u.jsx("span", {
    children: i
  }), c = xo(), [P, T] = g.useState(), [I, O] = g.useState(null), N = g.useRef(!1), j = p || b, B = vr(), _ = vr(), G = vr(), W = vr(), [Z, V] = Ca({
    controlled: R,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let Y = Z;
  const K = kr(w), Q = g.useRef(), H = tt(() => {
    Q.current !== void 0 && (document.body.style.WebkitUserSelect = Q.current, Q.current = void 0), W.clear();
  });
  g.useEffect(() => H, [H]);
  const ne = (Se) => {
    Cy.clear(), xl = !0, V(!0), C && !Y && C(Se);
  }, ae = tt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (Se) => {
      Cy.start(800 + y, () => {
        xl = !1;
      }), V(!1), S && Y && S(Se), B.start(c.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), Ee = (Se) => {
    P != null && P.disabled || N.current && Se.type !== "touchstart" || (P && P.removeAttribute("title"), _.clear(), G.clear(), x || xl && f ? _.start(xl ? f : x, () => {
      ne(Se);
    }) : ne(Se));
  }, Pe = (Se) => {
    _.clear(), G.start(y, () => {
      ae(Se);
    });
  }, [, we] = g.useState(!1), le = (Se) => {
    const Qe = (Se == null ? void 0 : Se.target) ?? P;
    if (!Qe || Qe.disabled || !kc(Qe)) {
      we(!1);
      const Qt = Se ?? new Event("blur");
      !Se && Qe && (Object.defineProperty(Qt, "target", {
        value: Qe
      }), Object.defineProperty(Qt, "currentTarget", {
        value: Qe
      })), Pe(Qt);
    }
  }, Ne = (Se) => {
    if (P || T(Se.currentTarget), kc(Se.target)) {
      const Qe = (Qt) => {
        Qt.target.disabled && le(Qt), Qt.target.removeEventListener("blur", Qe);
      };
      Se.target.addEventListener("blur", Qe), we(!0), Ee(Se);
    }
  }, Ve = (Se) => {
    N.current = !0;
    const Qe = M.props;
    Qe.onTouchStart && Qe.onTouchStart(Se);
  }, Re = (Se) => {
    Ve(Se), G.clear(), B.clear(), H(), Q.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", W.start(v, () => {
      document.body.style.WebkitUserSelect = Q.current, Ee(Se);
    });
  }, Oe = (Se) => {
    M.props.onTouchEnd && M.props.onTouchEnd(Se), H(), G.start(h, () => {
      ae(Se);
    });
  };
  g.useEffect(() => {
    if (!Y)
      return;
    function Se(Qe) {
      Qe.key === "Escape" && ae(Qe);
    }
    return document.addEventListener("keydown", Se), () => {
      document.removeEventListener("keydown", Se);
    };
  }, [ae, Y]);
  const ye = dt(Jo(M), T, n);
  !A && A !== 0 && (Y = !1);
  const ze = g.useRef(), Xe = (Se) => {
    const Qe = M.props;
    Qe.onMouseMove && Qe.onMouseMove(Se), Rs = {
      x: Se.clientX,
      y: Se.clientY
    }, ze.current && ze.current.update();
  }, Be = {}, Ke = typeof A == "string";
  a ? (Be.title = !Y && Ke && !d ? A : null, Be["aria-describedby"] = Y ? K : null) : (Be["aria-label"] = Ke ? A : null, Be["aria-labelledby"] = Y && !Ke ? K : null);
  const We = {
    ...Be,
    ...z,
    ...M.props,
    className: ee(z.className, M.props.className),
    onTouchStart: Ve,
    ref: ye,
    ...b ? {
      onMouseMove: Xe
    } : {}
  }, it = {};
  m || (We.onTouchStart = Re, We.onTouchEnd = Oe), d || (We.onMouseOver = Sl(Ee, We.onMouseOver), We.onMouseLeave = Sl(Pe, We.onMouseLeave), j || (it.onMouseOver = Ee, it.onMouseLeave = Pe)), l || (We.onFocus = Sl(Ne, We.onFocus), We.onBlur = Sl(le, We.onBlur), j || (it.onFocus = Ne, it.onBlur = le));
  const Fe = {
    ...r,
    arrow: o,
    disableInteractive: j,
    placement: k,
    touch: N.current
  }, Te = typeof $.popper == "function" ? $.popper(Fe) : $.popper, Ue = g.useMemo(() => {
    var Qe;
    let Se = [{
      name: "arrow",
      enabled: !!I,
      options: {
        element: I,
        padding: 4
      }
    }];
    return (Qe = Te == null ? void 0 : Te.popperOptions) != null && Qe.modifiers && (Se = Se.concat(Te.popperOptions.modifiers)), {
      ...Te == null ? void 0 : Te.popperOptions,
      modifiers: Se
    };
  }, [I, Te == null ? void 0 : Te.popperOptions]), bt = aM(Fe), ie = {
    slots: E,
    slotProps: {
      arrow: $.arrow,
      popper: Te,
      tooltip: $.tooltip,
      transition: $.transition
    }
  }, [ke, Me] = be("popper", {
    elementType: lM,
    externalForwardedProps: ie,
    ownerState: Fe,
    className: bt.popper
  }), [Je, xe] = be("transition", {
    elementType: Ta,
    externalForwardedProps: ie,
    ownerState: Fe
  }), [or, $n] = be("tooltip", {
    elementType: cM,
    className: bt.tooltip,
    externalForwardedProps: ie,
    ownerState: Fe
  }), [bo, Wr] = be("arrow", {
    elementType: uM,
    className: bt.arrow,
    externalForwardedProps: ie,
    ownerState: Fe,
    ref: O
  });
  return /* @__PURE__ */ u.jsxs(g.Fragment, {
    children: [/* @__PURE__ */ g.cloneElement(M, We), /* @__PURE__ */ u.jsx(ke, {
      as: Cx,
      placement: k,
      anchorEl: b ? {
        getBoundingClientRect: () => ({
          top: Rs.y,
          left: Rs.x,
          right: Rs.x,
          bottom: Rs.y,
          width: 0,
          height: 0
        })
      } : P,
      popperRef: ze,
      open: P ? Y : !1,
      id: K,
      transition: !0,
      ...it,
      ...Me,
      popperOptions: Ue,
      children: ({
        TransitionProps: Se
      }) => /* @__PURE__ */ u.jsx(Je, {
        timeout: c.transitions.duration.shorter,
        ...Se,
        ...xe,
        children: /* @__PURE__ */ u.jsxs(or, {
          ...$n,
          children: [A, o ? /* @__PURE__ */ u.jsx(bo, {
            ...Wr
          }) : null]
        })
      })
    })]
  });
}), rt = I2({
  createStyledComponent: U("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => ge({
    props: e,
    name: "MuiStack"
  })
});
function dM(e) {
  return pe("MuiTab", e);
}
const Xn = ce("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), fM = (e) => {
  const {
    classes: t,
    textColor: n,
    fullWidth: r,
    wrapped: o,
    icon: i,
    label: s,
    selected: a,
    disabled: l
  } = e, d = {
    root: ["root", i && s && "labelIcon", `textColor${J(n)}`, r && "fullWidth", o && "wrapped", a && "selected", l && "disabled"],
    icon: ["icon"]
  };
  return me(d, dM, t);
}, pM = U(po, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${J(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${Xn.icon}`]: t.icon
    }];
  }
})(ve(({
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
      [`& > .${Xn.icon}`]: {
        marginBottom: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "bottom",
    style: {
      [`& > .${Xn.icon}`]: {
        marginTop: 6
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "start",
    style: {
      [`& > .${Xn.icon}`]: {
        marginRight: e.spacing(1)
      }
    }
  }, {
    props: ({
      ownerState: t,
      iconPosition: n
    }) => t.icon && t.label && n === "end",
    style: {
      [`& > .${Xn.icon}`]: {
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
      [`&.${Xn.selected}`]: {
        opacity: 1
      },
      [`&.${Xn.disabled}`]: {
        opacity: (e.vars || e).palette.action.disabledOpacity
      }
    }
  }, {
    props: {
      textColor: "primary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Xn.selected}`]: {
        color: (e.vars || e).palette.primary.main
      },
      [`&.${Xn.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      }
    }
  }, {
    props: {
      textColor: "secondary"
    },
    style: {
      color: (e.vars || e).palette.text.secondary,
      [`&.${Xn.selected}`]: {
        color: (e.vars || e).palette.secondary.main
      },
      [`&.${Xn.disabled}`]: {
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
}))), Es = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTab"
  }), {
    className: o,
    disabled: i = !1,
    disableFocusRipple: s = !1,
    // eslint-disable-next-line react/prop-types
    fullWidth: a,
    icon: l,
    iconPosition: d = "top",
    // eslint-disable-next-line react/prop-types
    indicator: p,
    label: m,
    onChange: x,
    onClick: f,
    onFocus: v,
    // eslint-disable-next-line react/prop-types
    selected: b,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: w,
    // eslint-disable-next-line react/prop-types
    textColor: y = "inherit",
    value: h,
    wrapped: S = !1,
    ...C
  } = r, R = Ax(), k = zx({
    id: h,
    ref: n,
    disabled: i,
    selected: b
  }), E = R.getItemMap().size === 0 && b ? 0 : k.tabIndex, A = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: b,
    icon: !!l,
    iconPosition: d,
    label: !!m,
    fullWidth: a,
    textColor: y,
    wrapped: S
  }, z = fM(A), M = l && m && /* @__PURE__ */ g.isValidElement(l) ? /* @__PURE__ */ g.cloneElement(l, {
    className: ee(z.icon, l.props.className)
  }) : l, c = (T) => {
    !b && x && x(T, h), f && f(T);
  }, P = (T) => {
    w && !b && x && x(T, h), v && v(T);
  };
  return /* @__PURE__ */ u.jsxs(pM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: ee(z.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": b,
    disabled: i,
    onClick: c,
    onFocus: P,
    tabIndex: E,
    ownerState: A,
    ...C,
    children: [d === "top" || d === "start" ? /* @__PURE__ */ u.jsxs(g.Fragment, {
      children: [M, m]
    }) : /* @__PURE__ */ u.jsxs(g.Fragment, {
      children: [m, M]
    }), p]
  });
}), Zx = /* @__PURE__ */ g.createContext();
function mM(e) {
  return pe("MuiTable", e);
}
ce("MuiTable", ["root", "stickyHeader"]);
const hM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return me({
    root: ["root", n && "stickyHeader"]
  }, mM, t);
}, gM = U("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(ve(({
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
}))), wy = "table", bl = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = wy,
    padding: s = "normal",
    size: a = "medium",
    stickyHeader: l = !1,
    ...d
  } = r, p = {
    ...r,
    component: i,
    padding: s,
    size: a,
    stickyHeader: l
  }, m = hM(p), x = g.useMemo(() => ({
    padding: s,
    size: a,
    stickyHeader: l
  }), [s, a, l]);
  return /* @__PURE__ */ u.jsx(Zx.Provider, {
    value: x,
    children: /* @__PURE__ */ u.jsx(gM, {
      as: i,
      role: i === wy ? null : "table",
      ref: n,
      className: ee(m.root, o),
      ownerState: p,
      ...d
    })
  });
}), Au = /* @__PURE__ */ g.createContext();
function yM(e) {
  return pe("MuiTableBody", e);
}
ce("MuiTableBody", ["root"]);
const vM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, yM, t);
}, xM = U("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), SM = {
  variant: "body"
}, ky = "tbody", Cl = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = ky,
    ...s
  } = r, a = {
    ...r,
    component: i
  }, l = vM(a);
  return /* @__PURE__ */ u.jsx(Au.Provider, {
    value: SM,
    children: /* @__PURE__ */ u.jsx(xM, {
      className: ee(l.root, o),
      as: i,
      ref: n,
      role: i === ky ? null : "rowgroup",
      ownerState: a,
      ...s
    })
  });
});
function bM(e) {
  return pe("MuiTableCell", e);
}
const CM = ce("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), wM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, a = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${J(r)}`, o !== "normal" && `padding${J(o)}`, `size${J(i)}`]
  };
  return me(a, bM, t);
}, kM = U("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${J(n.size)}`], n.padding !== "normal" && t[`padding${J(n.padding)}`], n.align !== "inherit" && t[`align${J(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(ve(({
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
      [`&.${CM.paddingCheckbox}`]: {
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
}))), se = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableCell"
  }), {
    align: o = "inherit",
    className: i,
    component: s,
    padding: a,
    scope: l,
    size: d,
    sortDirection: p,
    variant: m,
    ...x
  } = r, f = g.useContext(Zx), v = g.useContext(Au), b = v && v.variant === "head";
  let w;
  s ? w = s : w = b ? "th" : "td";
  let y = l;
  w === "td" ? y = void 0 : !y && b && (y = "col");
  const h = m || v && v.variant, S = {
    ...r,
    align: o,
    component: w,
    padding: a || (f && f.padding ? f.padding : "normal"),
    size: d || (f && f.size ? f.size : "medium"),
    sortDirection: p,
    stickyHeader: h === "head" && f && f.stickyHeader,
    variant: h
  }, C = wM(S);
  let R = null;
  return p && (R = p === "asc" ? "ascending" : "descending"), /* @__PURE__ */ u.jsx(kM, {
    as: w,
    ref: n,
    className: ee(C.root, i),
    "aria-sort": R,
    scope: y,
    ownerState: S,
    ...x
  });
});
function TM(e) {
  return pe("MuiTableContainer", e);
}
ce("MuiTableContainer", ["root"]);
const RM = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, TM, t);
}, EM = U("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), wl = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, a = {
    ...r,
    component: i
  }, l = RM(a);
  return /* @__PURE__ */ u.jsx(EM, {
    ref: n,
    as: i,
    className: ee(l.root, o),
    ownerState: a,
    ...s
  });
});
function PM(e) {
  return pe("MuiTableHead", e);
}
ce("MuiTableHead", ["root"]);
const $M = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, PM, t);
}, IM = U("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), MM = {
  variant: "head"
}, Ty = "thead", kl = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Ty,
    ...s
  } = r, a = {
    ...r,
    component: i
  }, l = $M(a);
  return /* @__PURE__ */ u.jsx(Au.Provider, {
    value: MM,
    children: /* @__PURE__ */ u.jsx(IM, {
      as: i,
      className: ee(l.root, o),
      ref: n,
      role: i === Ty ? null : "rowgroup",
      ownerState: a,
      ...s
    })
  });
}), jM = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), AM = mn(/* @__PURE__ */ u.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function OM(e) {
  return pe("MuiTableRow", e);
}
const Ry = ce("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), zM = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return me({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, OM, t);
}, NM = U("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(ve(({
  theme: e
}) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  [`&.${Ry.hover}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ry.selected}`]: {
    backgroundColor: e.alpha((e.vars || e).palette.primary.main, (e.vars || e).palette.action.selectedOpacity),
    "&:hover": {
      backgroundColor: e.alpha((e.vars || e).palette.primary.main, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`)
    }
  }
}))), Ey = "tr", Kt = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Ey,
    hover: s = !1,
    selected: a = !1,
    ...l
  } = r, d = g.useContext(Au), p = {
    ...r,
    component: i,
    hover: s,
    selected: a,
    head: d && d.variant === "head",
    footer: d && d.variant === "footer"
  }, m = zM(p);
  return /* @__PURE__ */ u.jsx(NM, {
    as: i,
    ref: n,
    className: ee(m.root, o),
    role: i === Ey ? null : "row",
    ownerState: p,
    ...l
  });
});
function LM(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function BM(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = LM,
    duration: s = 300
    // standard
  } = r;
  let a = null;
  const l = t[e];
  let d = !1;
  const p = () => {
    d = !0;
  }, m = (x) => {
    if (d) {
      o(new Error("Animation cancelled"));
      return;
    }
    a === null && (a = x);
    const f = Math.min(1, (x - a) / s);
    if (t[e] = i(f) * (n - l) + l, f >= 1) {
      requestAnimationFrame(() => {
        o(null);
      });
      return;
    }
    requestAnimationFrame(m);
  };
  return l === n ? (o(new Error("Element already at target position")), p) : (requestAnimationFrame(m), p);
}
const FM = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function DM(e) {
  const {
    onChange: t,
    ...n
  } = e, r = g.useRef(), o = g.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return gt(() => {
    const s = Tu(() => {
      const l = r.current;
      i(), l !== r.current && t(r.current);
    }), a = rr(o.current);
    return a.addEventListener("resize", s), () => {
      s.clear(), a.removeEventListener("resize", s);
    };
  }, [t]), g.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ u.jsx("div", {
    style: FM,
    ...n,
    ref: o
  });
}
function _M(e) {
  return pe("MuiTabScrollButton", e);
}
const WM = ce("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), UM = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return me({
    root: ["root", n, r && "disabled"]
  }, _M, t);
}, HM = U(po, {
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
  [`&.${WM.disabled}`]: {
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
}), VM = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTabScrollButton"
  }), {
    className: o,
    slots: i = {},
    slotProps: s = {},
    direction: a,
    orientation: l,
    disabled: d,
    ...p
  } = r, {
    nativeButton: m,
    ...x
  } = p, f = Ba(), v = {
    isRtl: f,
    ...r
  }, b = UM(v), w = i.StartScrollButtonIcon ?? jM, y = i.EndScrollButtonIcon ?? AM, h = es({
    elementType: w,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  }), S = es({
    elementType: y,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: v
  });
  return /* @__PURE__ */ u.jsx(HM, {
    component: "div",
    className: ee(b.root, o),
    ref: n,
    role: null,
    ownerState: v,
    tabIndex: null,
    ...x,
    style: {
      ...x.style,
      ...l === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: a === "left" ? /* @__PURE__ */ u.jsx(w, {
      ...h
    }) : /* @__PURE__ */ u.jsx(y, {
      ...S
    })
  });
});
function KM(e) {
  return pe("MuiTabs", e);
}
const xd = ce("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), YM = (e) => {
  const {
    vertical: t,
    fixed: n,
    hideScrollbar: r,
    scrollableX: o,
    scrollableY: i,
    centered: s,
    scrollButtonsHideMobile: a,
    classes: l
  } = e;
  return me({
    root: ["root", t && "vertical"],
    scroller: ["scroller", n && "fixed", r && "hideScrollbar", o && "scrollableX", i && "scrollableY"],
    list: ["list", t && "vertical", s && "centered"],
    indicator: ["indicator"],
    scrollButtons: ["scrollButtons", a && "scrollButtonsHideMobile"],
    scrollableX: [o && "scrollableX"],
    hideScrollbar: [r && "hideScrollbar"]
  }, KM, l);
}, GM = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${xd.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${xd.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(ve(({
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
      [`& .${xd.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), XM = U("div", {
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
}), QM = U("div", {
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
}), qM = U("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(ve(({
  theme: e
}) => ({
  position: "absolute",
  height: 2,
  bottom: 0,
  width: "100%",
  ...qe(e),
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
}))), ZM = U(DM)({
  overflowX: "auto",
  overflowY: "hidden",
  // Hide dimensionless scrollbar on macOS
  scrollbarWidth: "none",
  // Firefox
  "&::-webkit-scrollbar": {
    display: "none"
    // Safari + Chrome
  }
}), Py = {}, JM = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTabs"
  }), o = xo(), i = Ba(), s = Iu(o.motion.reducedMotion, !1), {
    "aria-label": a,
    "aria-labelledby": l,
    action: d,
    centered: p = !1,
    children: m,
    className: x,
    component: f = "div",
    allowScrollButtonsMobile: v = !1,
    indicatorColor: b = "primary",
    onChange: w,
    orientation: y = "horizontal",
    scrollButtons: h = "auto",
    selectionFollowsFocus: S,
    slots: C = {},
    slotProps: R = {},
    textColor: k = "primary",
    value: $,
    variant: E = "standard",
    visibleScrollbar: A = !1,
    ...z
  } = r, M = E === "scrollable", c = y === "vertical", P = c ? "scrollTop" : "scrollLeft", T = c ? "top" : "left", I = c ? "bottom" : "right", O = c ? "clientHeight" : "clientWidth", N = c ? "height" : "width", j = {
    ...r,
    component: f,
    allowScrollButtonsMobile: v,
    indicatorColor: b,
    orientation: y,
    vertical: c,
    scrollButtons: h,
    textColor: k,
    variant: E,
    visibleScrollbar: A,
    fixed: !M,
    hideScrollbar: M && !A,
    scrollableX: M && !c,
    scrollableY: M && c,
    centered: p && !M,
    scrollButtonsHideMobile: !v
  }, B = YM(j), _ = es({
    elementType: C.startScrollButtonIcon,
    externalSlotProps: R.startScrollButtonIcon,
    ownerState: j
  }), G = es({
    elementType: C.endScrollButtonIcon,
    externalSlotProps: R.endScrollButtonIcon,
    ownerState: j
  }), [W, Z] = g.useState(!1), [V, Y] = g.useState(Py), [K, Q] = g.useState(!1), [H, ne] = g.useState(!1), [ae, Ee] = g.useState(!1), Pe = $ === !1 ? null : $, [we, le] = g.useState(!1), [Ne, Ve] = g.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), Re = /* @__PURE__ */ new Map(), Oe = g.useRef(null), ye = g.useRef(null), ze = {
    slots: C,
    slotProps: R
  }, Xe = () => {
    const oe = Oe.current;
    let te;
    if (oe) {
      const $e = oe.getBoundingClientRect();
      te = {
        clientWidth: oe.clientWidth,
        scrollLeft: oe.scrollLeft,
        scrollTop: oe.scrollTop,
        scrollWidth: oe.scrollWidth,
        top: $e.top,
        bottom: $e.bottom,
        left: $e.left,
        right: $e.right
      };
    }
    let Ce;
    if (oe && $ !== !1) {
      const $e = ye.current.children;
      if ($e.length > 0) {
        const Ct = $e[Re.get($)];
        Ce = Ct ? Ct.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: te,
      tabMeta: Ce
    };
  }, Be = tt(() => {
    const {
      tabsMeta: oe,
      tabMeta: te
    } = Xe();
    let Ce = 0, $e;
    c ? ($e = "top", te && oe && (Ce = te.top - oe.top + oe.scrollTop)) : ($e = i ? "right" : "left", te && oe && (Ce = (i ? -1 : 1) * (te[$e] - oe[$e] + oe.scrollLeft)));
    const Ct = {
      [$e]: Ce,
      // May be wrong until the font is loaded.
      [N]: te ? te[N] : 0
    };
    if (typeof V[$e] != "number" || typeof V[N] != "number")
      Y(Ct);
    else {
      const Rr = Math.abs(V[$e] - Ct[$e]), ir = Math.abs(V[N] - Ct[N]);
      (Rr >= 1 || ir >= 1) && Y(Ct);
    }
  }), Ke = (oe, {
    animation: te = !0
  } = {}) => {
    te && !s.shouldReduceMotion ? BM(P, Oe.current, oe, {
      duration: o.transitions.duration.standard
    }) : Oe.current[P] = oe;
  }, We = (oe) => {
    let te = Oe.current[P];
    c ? te += oe : te += oe * (i ? -1 : 1), Ke(te);
  }, it = () => {
    const oe = Oe.current[O];
    let te = 0;
    const Ce = Array.from(ye.current.children);
    for (let $e = 0; $e < Ce.length; $e += 1) {
      const Ct = Ce[$e];
      if (te + Ct[O] > oe) {
        $e === 0 && (te = oe);
        break;
      }
      te += Ct[O];
    }
    return te;
  }, Fe = () => {
    We(-1 * it());
  }, Te = () => {
    We(it());
  }, [Ue, {
    onChange: bt,
    ...ie
  }] = be("scrollbar", {
    className: ee(B.scrollableX, B.hideScrollbar),
    elementType: ZM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: ze,
    ownerState: j
  }), ke = g.useCallback((oe) => {
    bt == null || bt(oe), Ve({
      overflow: null,
      scrollbarWidth: oe
    });
  }, [bt]), [Me, Je] = be("scrollButtons", {
    className: B.scrollButtons,
    elementType: VM,
    externalForwardedProps: ze,
    ownerState: j,
    additionalProps: {
      orientation: y,
      slots: {
        StartScrollButtonIcon: C.startScrollButtonIcon,
        EndScrollButtonIcon: C.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: _,
        endScrollButtonIcon: G
      }
    }
  }), xe = () => {
    const oe = {};
    oe.scrollbarSizeListener = M ? /* @__PURE__ */ u.jsx(Ue, {
      ...ie,
      onChange: ke
    }) : null;
    const Ce = M && (h === "auto" && (K || H) || h === !0);
    return oe.scrollButtonStart = Ce ? /* @__PURE__ */ u.jsx(Me, {
      direction: i ? "right" : "left",
      onClick: Fe,
      disabled: !K,
      ...Je
    }) : null, oe.scrollButtonEnd = Ce ? /* @__PURE__ */ u.jsx(Me, {
      direction: i ? "left" : "right",
      onClick: Te,
      disabled: !H,
      ...Je
    }) : null, oe;
  }, or = tt((oe) => {
    const {
      tabsMeta: te,
      tabMeta: Ce
    } = Xe();
    if (!(!Ce || !te)) {
      if (Ce[T] < te[T]) {
        const $e = te[P] + (Ce[T] - te[T]);
        Ke($e, {
          animation: oe
        });
      } else if (Ce[I] > te[I]) {
        const $e = te[P] + (Ce[I] - te[I]);
        Ke($e, {
          animation: oe
        });
      }
    }
  }), $n = tt(() => {
    M && h !== !1 && Ee(!ae);
  });
  g.useEffect(() => {
    const oe = Tu(() => {
      Oe.current && Be();
    });
    let te;
    const Ce = (Rr) => {
      Rr.forEach((ir) => {
        ir.removedNodes.forEach((Co) => {
          te == null || te.unobserve(Co);
        }), ir.addedNodes.forEach((Co) => {
          te == null || te.observe(Co);
        });
      }), oe(), $n();
    }, $e = rr(Oe.current);
    $e.addEventListener("resize", oe);
    let Ct;
    return typeof ResizeObserver < "u" && (te = new ResizeObserver(oe), Array.from(ye.current.children).forEach((Rr) => {
      te.observe(Rr);
    })), typeof MutationObserver < "u" && (Ct = new MutationObserver(Ce), Ct.observe(ye.current, {
      childList: !0
    })), () => {
      oe.clear(), $e.removeEventListener("resize", oe), Ct == null || Ct.disconnect(), te == null || te.disconnect();
    };
  }, [Be, $n]), g.useEffect(() => {
    const oe = Array.from(ye.current.children), te = oe.length;
    if (typeof IntersectionObserver < "u" && te > 0 && M && h !== !1) {
      const Ce = oe[0], $e = oe[te - 1], Ct = {
        root: Oe.current,
        threshold: 0.99
      }, Rr = (ti) => {
        Q(!ti[0].isIntersecting);
      }, ir = new IntersectionObserver(Rr, Ct);
      ir.observe(Ce);
      const Co = (ti) => {
        ne(!ti[0].isIntersecting);
      }, us = new IntersectionObserver(Co, Ct);
      return us.observe($e), () => {
        ir.disconnect(), us.disconnect();
      };
    }
  }, [M, h, ae, m == null ? void 0 : m.length]), g.useEffect(() => {
    Z(!0);
  }, []), g.useEffect(() => {
    Be();
  }), g.useEffect(() => {
    or(Py !== V);
  }, [or, V]), g.useImperativeHandle(d, () => ({
    updateIndicator: Be,
    updateScrollButtons: $n
  }), [Be, $n]);
  const [bo, Wr] = be("indicator", {
    className: B.indicator,
    elementType: qM,
    externalForwardedProps: ze,
    ownerState: j,
    additionalProps: {
      style: V
    }
  }), Se = /* @__PURE__ */ u.jsx(bo, {
    ...Wr
  }), Qe = Ox({
    activeItemId: we ? void 0 : Pe,
    orientation: y,
    isRtl: i
  }), Qt = Qe.getContainerProps(), ei = g.Children.toArray(m).filter(g.isValidElement).map((oe, te) => {
    const Ce = oe.props.value === void 0 ? te : oe.props.value;
    return Re.set(Ce, te), {
      child: oe,
      index: te,
      childValue: Ce
    };
  }).map(({
    child: oe,
    childValue: te
  }) => {
    const Ce = te === $;
    return /* @__PURE__ */ g.cloneElement(oe, {
      fullWidth: E === "fullWidth",
      indicator: Ce && !W && Se,
      selected: Ce,
      selectionFollowsFocus: S,
      onChange: w,
      textColor: k,
      value: te
    });
  }), Ur = xe(), [Kn, L] = be("root", {
    ref: n,
    className: ee(B.root, x),
    elementType: GM,
    externalForwardedProps: {
      ...ze,
      ...z,
      component: f
    },
    ownerState: j
  }), [he, Lt] = be("scroller", {
    ref: Oe,
    className: B.scroller,
    elementType: XM,
    externalForwardedProps: ze,
    ownerState: j,
    additionalProps: {
      style: {
        overflow: Ne.overflow,
        [c ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: A ? void 0 : -Ne.scrollbarWidth
      }
    }
  }), Bt = dt(Qt.ref, ye), In = (oe) => {
    const te = ye.current, Ce = yr(St(te));
    (Ce == null ? void 0 : Ce.getAttribute("role")) === "tab" && Qt.onKeyDown(oe);
  }, [Ut, cs] = be("list", {
    ref: Bt,
    className: B.list,
    elementType: QM,
    externalForwardedProps: ze,
    ownerState: j,
    getSlotProps: (oe) => ({
      ...oe,
      onBlur: (te) => {
        var Ce;
        Wo(te.currentTarget, te.relatedTarget) || le(!1), (Ce = oe.onBlur) == null || Ce.call(oe, te);
      },
      onKeyDown: (te) => {
        var Ce;
        In(te), (Ce = oe.onKeyDown) == null || Ce.call(oe, te);
      },
      onFocus: (te) => {
        var Ce;
        le(!0), Qt.onFocus(te), (Ce = oe.onFocus) == null || Ce.call(oe, te);
      }
    })
  });
  return /* @__PURE__ */ u.jsxs(Kn, {
    ...L,
    children: [Ur.scrollButtonStart, Ur.scrollbarSizeListener, /* @__PURE__ */ u.jsxs(he, {
      ...Lt,
      children: [/* @__PURE__ */ u.jsx(Ut, {
        "aria-label": a,
        "aria-labelledby": l,
        "aria-orientation": y === "vertical" ? "vertical" : null,
        role: "tablist",
        ...cs,
        children: /* @__PURE__ */ u.jsx(Mm.Provider, {
          value: Qe,
          children: ei
        })
      }), W && Se]
    }), Ur.scrollButtonEnd]
  });
});
function ej(e) {
  return pe("MuiTextField", e);
}
ce("MuiTextField", ["root"]);
const tj = {
  standard: $m,
  filled: Pm,
  outlined: jm
}, nj = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, ej, t);
}, rj = U(W5, {
  name: "MuiTextField",
  slot: "Root"
})({}), Io = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = ge({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: o,
    autoFocus: i = !1,
    children: s,
    className: a,
    color: l = "primary",
    defaultValue: d,
    disabled: p = !1,
    error: m = !1,
    fullWidth: x = !1,
    helperText: f,
    id: v,
    inputRef: b,
    label: w,
    maxRows: y,
    minRows: h,
    multiline: S = !1,
    name: C,
    onBlur: R,
    onChange: k,
    onFocus: $,
    placeholder: E,
    required: A = !1,
    rows: z,
    select: M = !1,
    slots: c = {},
    slotProps: P = {},
    type: T,
    value: I,
    variant: O = "outlined",
    ...N
  } = r, j = {
    ...r,
    autoFocus: i,
    color: l,
    disabled: p,
    error: m,
    fullWidth: x,
    multiline: S,
    required: A,
    select: M,
    variant: O
  }, B = nj(j), _ = kr(v), G = f && _ ? `${_}-helper-text` : void 0, W = w && _ ? `${_}-label` : void 0, Z = tj[O], V = {
    slots: c,
    slotProps: P
  }, [Y, K] = be("select", {
    elementType: Ii,
    externalForwardedProps: V,
    ownerState: j
  }), Q = M && K.native, H = {}, ne = V.slotProps.inputLabel;
  O === "outlined" && (ne && typeof ne.shrink < "u" && (H.notched = ne.shrink), H.label = w), M && (Q || (H.id = void 0), H["aria-describedby"] = void 0);
  const [ae, Ee] = be("root", {
    elementType: rj,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...V,
      ...N
    },
    ownerState: j,
    className: ee(B.root, a),
    ref: n,
    additionalProps: {
      disabled: p,
      error: m,
      fullWidth: x,
      required: A,
      color: l,
      variant: O
    }
  }), [Pe, we] = be("input", {
    elementType: Z,
    externalForwardedProps: V,
    additionalProps: H,
    ownerState: j
  }), [le, Ne] = be("inputLabel", {
    elementType: h$,
    externalForwardedProps: V,
    ownerState: j
  }), [Ve, Re] = be("htmlInput", {
    elementType: "input",
    externalForwardedProps: V,
    ownerState: j
  }), [Oe, ye] = be("formHelperText", {
    elementType: q5,
    externalForwardedProps: V,
    ownerState: j
  }), ze = /* @__PURE__ */ u.jsx(Pe, {
    "aria-describedby": G,
    autoComplete: o,
    autoFocus: i,
    defaultValue: d,
    fullWidth: x,
    multiline: S,
    name: C,
    rows: z,
    maxRows: y,
    minRows: h,
    type: T,
    value: I,
    id: _,
    inputRef: b,
    onBlur: R,
    onChange: k,
    onFocus: $,
    placeholder: E,
    inputProps: Re,
    slots: {
      input: c.htmlInput ? Ve : void 0
    },
    ...we
  });
  return /* @__PURE__ */ u.jsxs(ae, {
    ...Ee,
    children: [w != null && w !== "" && /* @__PURE__ */ u.jsx(le, {
      htmlFor: M && !Q ? void 0 : _,
      id: W,
      ...M && !Q && {
        component: "div"
      },
      ...Ne,
      children: w
    }), M ? /* @__PURE__ */ u.jsx(Y, {
      "aria-describedby": G,
      id: _,
      labelId: W,
      value: I,
      input: ze,
      ...K,
      children: s
    }) : ze, f && /* @__PURE__ */ u.jsx(Oe, {
      id: G,
      ...ye,
      children: f
    })]
  });
}), Ra = {
  black: "#000",
  white: "#fff"
}, oj = {
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
}, di = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, fi = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ps = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, pi = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, mi = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, hi = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Jx() {
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
      paper: Ra.white,
      default: Ra.white
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
const eS = Jx();
function tS() {
  return {
    text: {
      primary: Ra.white,
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
      active: Ra.white,
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
const Kf = tS();
function $y(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = as(e.main, o) : t === "dark" && (e.dark = ss(e.main, i)));
}
function Iy(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function ij(e = "light") {
  return e === "dark" ? {
    main: pi[200],
    light: pi[50],
    dark: pi[400]
  } : {
    main: pi[700],
    light: pi[400],
    dark: pi[800]
  };
}
function sj(e = "light") {
  return e === "dark" ? {
    main: di[200],
    light: di[50],
    dark: di[400]
  } : {
    main: di[500],
    light: di[300],
    dark: di[700]
  };
}
function aj(e = "light") {
  return e === "dark" ? {
    main: fi[500],
    light: fi[300],
    dark: fi[700]
  } : {
    main: fi[700],
    light: fi[400],
    dark: fi[800]
  };
}
function lj(e = "light") {
  return e === "dark" ? {
    main: mi[400],
    light: mi[300],
    dark: mi[700]
  } : {
    main: mi[700],
    light: mi[500],
    dark: mi[900]
  };
}
function cj(e = "light") {
  return e === "dark" ? {
    main: hi[400],
    light: hi[300],
    dark: hi[700]
  } : {
    main: hi[800],
    light: hi[500],
    dark: hi[900]
  };
}
function uj(e = "light") {
  return e === "dark" ? {
    main: Ps[400],
    light: Ps[300],
    dark: Ps[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ps[500],
    dark: Ps[900]
  };
}
function dj(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Om(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || ij(t), a = e.secondary || sj(t), l = e.error || aj(t), d = e.info || lj(t), p = e.success || cj(t), m = e.warning || uj(t);
  function x(w) {
    return o ? dj(w) : O1(w, Kf.text.primary) >= n ? Kf.text.primary : eS.text.primary;
  }
  const f = ({
    color: w,
    name: y,
    mainShade: h = 500,
    lightShade: S = 300,
    darkShade: C = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[h] && (w.main = w[h]), !w.hasOwnProperty("main"))
      throw new Error(wn(11, y ? ` (${y})` : "", h));
    if (typeof w.main != "string")
      throw new Error(wn(12, y ? ` (${y})` : "", JSON.stringify(w.main)));
    return o ? (Iy(o, w, "light", S, r), Iy(o, w, "dark", C, r)) : ($y(w, "light", S, r), $y(w, "dark", C, r)), w.contrastText || (w.contrastText = x(w.main)), w;
  };
  let v;
  return t === "light" ? v = Jx() : t === "dark" && (v = tS()), ht({
    // A collection of common colors.
    common: {
      ...Ra
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
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: oj,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: x,
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
function fj(e, t) {
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
function pj(e) {
  return Math.round(e * 1e5) / 1e5;
}
const My = {
  textTransform: "uppercase"
}, jy = '"Roboto", "Helvetica", "Arial", sans-serif';
function mj(e, t) {
  const {
    fontFamily: n = jy,
    // The default font size of the Material Specification.
    fontSize: r = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: a = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...m
  } = typeof t == "function" ? t(e) : t, x = r / 14, f = p || ((w) => `${w / l * x}rem`), v = (w, y, h, S, C) => ({
    fontFamily: n,
    fontWeight: w,
    fontSize: f(y),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: h,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === jy ? {
      letterSpacing: `${pj(S / y)}em`
    } : {},
    ...C,
    ...d
  }), b = {
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
    button: v(s, 14, 1.75, 0.4, My),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, My),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ht({
    htmlFontSize: l,
    pxToRem: f,
    fontFamily: n,
    fontSize: r,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: a,
    ...b
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const hj = 0.2, gj = 0.14, yj = 0.12;
function lt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${hj})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${gj})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${yj})`].join(",");
}
const vj = ["none", lt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), lt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), lt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), lt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), lt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), lt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), lt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), lt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), lt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), lt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), lt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), lt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), lt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), lt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), lt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), lt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), lt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), lt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), lt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), lt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), lt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), lt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), lt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), lt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], xj = ["all"], Sj = {}, bj = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Cj = {
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
function Ay(e) {
  return `${Math.round(e)}ms`;
}
function wj(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function kj(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...bj,
    ...t.easing
  }, r = {
    ...Cj,
    ...t.duration
  }, o = (s = xj, a = Sj) => {
    const {
      duration: l = r.standard,
      easing: d = n.easeInOut,
      delay: p = 0,
      ...m
    } = a;
    return (Array.isArray(s) ? s : [s]).map((x) => `${x} ${typeof l == "string" ? l : Ay(l)} ${d} ${typeof p == "string" ? p : Ay(p)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: wj,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const Tj = {};
function Rj(e = Tj) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const Ej = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Pj(e) {
  return Jn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function nS(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, a] = o[i];
      !Pj(a) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : Jn(a) && (r[s] = {
        ...a
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
function Oy(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const $j = (e) => {
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
function Ij(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : ba(t, $j(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Oy(n)})` : as(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Oy(n)})` : ss(t, n);
    }
  });
}
function Yf(e = {}, ...t) {
  const {
    breakpoints: n,
    mixins: r = {},
    spacing: o,
    palette: i = {},
    motion: s = {},
    transitions: a = {},
    typography: l = {},
    shape: d,
    colorSpace: p,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(wn(22));
  const x = Om({
    ...i,
    colorSpace: p
  }), f = La(e);
  let v = ht(f, {
    mixins: fj(f.breakpoints, r),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: vj.slice(),
    typography: mj(x, l),
    motion: Rj(s),
    transitions: kj(a),
    zIndex: {
      ...Ej
    }
  });
  return v = ht(v, m), v = t.reduce((b, w) => ht(b, w), v), delete v.transitions.reducedMotion, v.unstable_sxConfig = {
    ...is,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, v.unstable_sx = function(w) {
    return Fr({
      sx: w,
      theme: this
    });
  }, v.toRuntimeSource = nS, Ij(v), v;
}
function Mj(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const jj = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = Mj(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function rS(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function oS(e) {
  return e === "dark" ? jj : [];
}
function Aj(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = Om({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...rS(s.mode),
      ...n
    },
    overlays: r || oS(s.mode),
    ...i
  };
}
function Oj(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const zj = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Nj = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return zj(e.cssVarPrefix).forEach((a) => {
        s[a] = n[a], delete n[a];
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
function Lj(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function D(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function Ns(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : um(e);
}
function $r(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = gr(Ns(e[t])));
}
function Bj(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ur = (e) => {
  try {
    return e();
  } catch {
  }
}, Fj = (e = "mui") => W1(e);
function Sd(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = Aj({
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
    ...a
  } = Yf({
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
      ...rS(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || oS(i)
  }, a;
}
function Dj(e = {}, ...t) {
  const {
    colorSchemes: n = {
      light: !0
    },
    defaultColorScheme: r,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: a = Oj,
    colorSchemeSelector: l = n.light && n.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...p
  } = e, m = Object.keys(n)[0], x = r || (n.light && m !== "light" ? "light" : m), f = Fj(i), {
    [x]: v,
    light: b,
    dark: w,
    ...y
  } = n, h = {
    ...y
  };
  let S = v;
  if ((x === "dark" && !("dark" in n) || x === "light" && !("light" in n)) && (S = !0), !S)
    throw new Error(wn(21, x));
  let C;
  s && (C = "oklch");
  const R = Sd(C, h, S, p, x);
  b && !h.light && Sd(C, h, b, void 0, "light"), w && !h.dark && Sd(C, h, w, void 0, "dark");
  let k = {
    defaultColorScheme: x,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: d,
    getCssVar: f,
    colorSchemes: h,
    font: {
      ...G1(R.typography),
      ...R.font
    },
    spacing: Bj(p.spacing)
  };
  Object.keys(k.colorSchemes).forEach((M) => {
    const c = k.colorSchemes[M].palette, P = (I) => {
      const O = I.split("-"), N = O[1], j = O[2];
      return f(I, c[N][j]);
    };
    c.mode === "light" && (D(c.common, "background", "#fff"), D(c.common, "onBackground", "#000")), c.mode === "dark" && (D(c.common, "background", "#000"), D(c.common, "onBackground", "#fff"));
    function T(I, O, N) {
      if (C) {
        let j;
        return I === on && (j = `transparent ${((1 - N) * 100).toFixed(0)}%`), I === ue && (j = `#000 ${(N * 100).toFixed(0)}%`), I === de && (j = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${C}, ${O}, ${j})`;
      }
      return I(O, N);
    }
    if (Lj(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      D(c.Alert, "errorColor", T(ue, s ? f("palette-error-light") : c.error.light, 0.6)), D(c.Alert, "infoColor", T(ue, s ? f("palette-info-light") : c.info.light, 0.6)), D(c.Alert, "successColor", T(ue, s ? f("palette-success-light") : c.success.light, 0.6)), D(c.Alert, "warningColor", T(ue, s ? f("palette-warning-light") : c.warning.light, 0.6)), D(c.Alert, "errorFilledBg", P("palette-error-main")), D(c.Alert, "infoFilledBg", P("palette-info-main")), D(c.Alert, "successFilledBg", P("palette-success-main")), D(c.Alert, "warningFilledBg", P("palette-warning-main")), D(c.Alert, "errorFilledColor", ur(() => c.getContrastText(c.error.main))), D(c.Alert, "infoFilledColor", ur(() => c.getContrastText(c.info.main))), D(c.Alert, "successFilledColor", ur(() => c.getContrastText(c.success.main))), D(c.Alert, "warningFilledColor", ur(() => c.getContrastText(c.warning.main))), D(c.Alert, "errorStandardBg", T(de, s ? f("palette-error-light") : c.error.light, 0.9)), D(c.Alert, "infoStandardBg", T(de, s ? f("palette-info-light") : c.info.light, 0.9)), D(c.Alert, "successStandardBg", T(de, s ? f("palette-success-light") : c.success.light, 0.9)), D(c.Alert, "warningStandardBg", T(de, s ? f("palette-warning-light") : c.warning.light, 0.9)), D(c.Alert, "errorIconColor", P("palette-error-main")), D(c.Alert, "infoIconColor", P("palette-info-main")), D(c.Alert, "successIconColor", P("palette-success-main")), D(c.Alert, "warningIconColor", P("palette-warning-main")), D(c.AppBar, "defaultBg", P("palette-grey-100")), D(c.Avatar, "defaultBg", P("palette-grey-400")), D(c.Button, "inheritContainedBg", P("palette-grey-300")), D(c.Button, "inheritContainedHoverBg", P("palette-grey-A100")), D(c.Chip, "defaultBorder", P("palette-grey-400")), D(c.Chip, "defaultAvatarColor", P("palette-grey-700")), D(c.Chip, "defaultIconColor", P("palette-grey-700")), D(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), D(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), D(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), D(c.LinearProgress, "primaryBg", T(de, s ? f("palette-primary-main") : c.primary.main, 0.62)), D(c.LinearProgress, "secondaryBg", T(de, s ? f("palette-secondary-main") : c.secondary.main, 0.62)), D(c.LinearProgress, "errorBg", T(de, s ? f("palette-error-main") : c.error.main, 0.62)), D(c.LinearProgress, "infoBg", T(de, s ? f("palette-info-main") : c.info.main, 0.62)), D(c.LinearProgress, "successBg", T(de, s ? f("palette-success-main") : c.success.main, 0.62)), D(c.LinearProgress, "warningBg", T(de, s ? f("palette-warning-light") : c.warning.main, 0.62)), D(c.Skeleton, "bg", C ? T(on, s ? f("palette-text-primary") : c.text.primary, 0.11) : `rgba(${P("palette-text-primaryChannel")} / 0.11)`), D(c.Slider, "primaryTrack", T(de, s ? f("palette-primary-main") : c.primary.main, 0.62)), D(c.Slider, "secondaryTrack", T(de, s ? f("palette-secondary-main") : c.secondary.main, 0.62)), D(c.Slider, "errorTrack", T(de, s ? f("palette-error-main") : c.error.main, 0.62)), D(c.Slider, "infoTrack", T(de, s ? f("palette-info-main") : c.info.main, 0.62)), D(c.Slider, "successTrack", T(de, s ? f("palette-success-main") : c.success.main, 0.62)), D(c.Slider, "warningTrack", T(de, s ? f("palette-warning-main") : c.warning.main, 0.62));
      const I = C ? T(ue, s ? f("palette-background-default") : c.background.default, 0.6825) : qr(c.background.default, 0.8);
      D(c.SnackbarContent, "bg", I), D(c.SnackbarContent, "color", ur(() => C ? Kf.text.primary : c.getContrastText(I))), D(c.SpeedDialAction, "fabHoverBg", qr(c.background.paper, 0.15)), D(c.StepConnector, "border", P("palette-grey-400")), D(c.StepContent, "border", P("palette-grey-400")), D(c.Switch, "defaultColor", P("palette-common-white")), D(c.Switch, "defaultDisabledColor", P("palette-grey-100")), D(c.Switch, "primaryDisabledColor", T(de, s ? f("palette-primary-main") : c.primary.main, 0.62)), D(c.Switch, "secondaryDisabledColor", T(de, s ? f("palette-secondary-main") : c.secondary.main, 0.62)), D(c.Switch, "errorDisabledColor", T(de, s ? f("palette-error-main") : c.error.main, 0.62)), D(c.Switch, "infoDisabledColor", T(de, s ? f("palette-info-main") : c.info.main, 0.62)), D(c.Switch, "successDisabledColor", T(de, s ? f("palette-success-main") : c.success.main, 0.62)), D(c.Switch, "warningDisabledColor", T(de, s ? f("palette-warning-main") : c.warning.main, 0.62)), D(c.TableCell, "border", T(de, on(s ? f("palette-divider") : c.divider, 1), 0.88)), D(c.Tooltip, "bg", T(on, s ? f("palette-grey-700") : c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      D(c.Alert, "errorColor", T(de, s ? f("palette-error-light") : c.error.light, 0.6)), D(c.Alert, "infoColor", T(de, s ? f("palette-info-light") : c.info.light, 0.6)), D(c.Alert, "successColor", T(de, s ? f("palette-success-light") : c.success.light, 0.6)), D(c.Alert, "warningColor", T(de, s ? f("palette-warning-light") : c.warning.light, 0.6)), D(c.Alert, "errorFilledBg", P("palette-error-dark")), D(c.Alert, "infoFilledBg", P("palette-info-dark")), D(c.Alert, "successFilledBg", P("palette-success-dark")), D(c.Alert, "warningFilledBg", P("palette-warning-dark")), D(c.Alert, "errorFilledColor", ur(() => c.getContrastText(c.error.dark))), D(c.Alert, "infoFilledColor", ur(() => c.getContrastText(c.info.dark))), D(c.Alert, "successFilledColor", ur(() => c.getContrastText(c.success.dark))), D(c.Alert, "warningFilledColor", ur(() => c.getContrastText(c.warning.dark))), D(c.Alert, "errorStandardBg", T(ue, s ? f("palette-error-light") : c.error.light, 0.9)), D(c.Alert, "infoStandardBg", T(ue, s ? f("palette-info-light") : c.info.light, 0.9)), D(c.Alert, "successStandardBg", T(ue, s ? f("palette-success-light") : c.success.light, 0.9)), D(c.Alert, "warningStandardBg", T(ue, s ? f("palette-warning-light") : c.warning.light, 0.9)), D(c.Alert, "errorIconColor", P("palette-error-main")), D(c.Alert, "infoIconColor", P("palette-info-main")), D(c.Alert, "successIconColor", P("palette-success-main")), D(c.Alert, "warningIconColor", P("palette-warning-main")), D(c.AppBar, "defaultBg", P("palette-grey-900")), D(c.AppBar, "darkBg", P("palette-background-paper")), D(c.AppBar, "darkColor", P("palette-text-primary")), D(c.Avatar, "defaultBg", P("palette-grey-600")), D(c.Button, "inheritContainedBg", P("palette-grey-800")), D(c.Button, "inheritContainedHoverBg", P("palette-grey-700")), D(c.Chip, "defaultBorder", P("palette-grey-700")), D(c.Chip, "defaultAvatarColor", P("palette-grey-300")), D(c.Chip, "defaultIconColor", P("palette-grey-300")), D(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), D(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), D(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), D(c.LinearProgress, "primaryBg", T(ue, s ? f("palette-primary-main") : c.primary.main, 0.5)), D(c.LinearProgress, "secondaryBg", T(ue, s ? f("palette-secondary-main") : c.secondary.main, 0.5)), D(c.LinearProgress, "errorBg", T(ue, s ? f("palette-error-main") : c.error.main, 0.5)), D(c.LinearProgress, "infoBg", T(ue, s ? f("palette-info-main") : c.info.main, 0.5)), D(c.LinearProgress, "successBg", T(ue, s ? f("palette-success-main") : c.success.main, 0.5)), D(c.LinearProgress, "warningBg", T(ue, s ? f("palette-warning-main") : c.warning.main, 0.5)), D(c.Skeleton, "bg", C ? T(on, s ? f("palette-text-primary") : c.text.primary, 0.13) : `rgba(${P("palette-text-primaryChannel")} / 0.13)`), D(c.Slider, "primaryTrack", T(ue, s ? f("palette-primary-main") : c.primary.main, 0.5)), D(c.Slider, "secondaryTrack", T(ue, s ? f("palette-secondary-main") : c.secondary.main, 0.5)), D(c.Slider, "errorTrack", T(ue, s ? f("palette-error-main") : c.error.main, 0.5)), D(c.Slider, "infoTrack", T(ue, s ? f("palette-info-main") : c.info.main, 0.5)), D(c.Slider, "successTrack", T(ue, s ? f("palette-success-main") : c.success.main, 0.5)), D(c.Slider, "warningTrack", T(ue, s ? f("palette-warning-light") : c.warning.main, 0.5));
      const I = C ? T(de, s ? f("palette-background-default") : c.background.default, 0.985) : qr(c.background.default, 0.98);
      D(c.SnackbarContent, "bg", I), D(c.SnackbarContent, "color", ur(() => C ? eS.text.primary : c.getContrastText(I))), D(c.SpeedDialAction, "fabHoverBg", qr(c.background.paper, 0.15)), D(c.StepConnector, "border", P("palette-grey-600")), D(c.StepContent, "border", P("palette-grey-600")), D(c.Switch, "defaultColor", P("palette-grey-300")), D(c.Switch, "defaultDisabledColor", P("palette-grey-600")), D(c.Switch, "primaryDisabledColor", T(ue, s ? f("palette-primary-main") : c.primary.main, 0.55)), D(c.Switch, "secondaryDisabledColor", T(ue, s ? f("palette-secondary-main") : c.secondary.main, 0.55)), D(c.Switch, "errorDisabledColor", T(ue, s ? f("palette-error-main") : c.error.main, 0.55)), D(c.Switch, "infoDisabledColor", T(ue, s ? f("palette-info-main") : c.info.main, 0.55)), D(c.Switch, "successDisabledColor", T(ue, s ? f("palette-success-main") : c.success.main, 0.55)), D(c.Switch, "warningDisabledColor", T(ue, s ? f("palette-warning-light") : c.warning.main, 0.55)), D(c.TableCell, "border", T(ue, on(s ? f("palette-divider") : c.divider, 1), 0.68)), D(c.Tooltip, "bg", T(on, s ? f("palette-grey-700") : c.grey[700], 0.92));
    }
    s || ($r(c.background, "default"), $r(c.background, "paper"), $r(c.common, "background"), $r(c.common, "onBackground"), $r(c, "divider")), Object.keys(c).forEach((I) => {
      const O = c[I];
      I !== "tonalOffset" && !s && O && typeof O == "object" && (O.main && D(c[I], "mainChannel", gr(Ns(O.main))), O.light && D(c[I], "lightChannel", gr(Ns(O.light))), O.dark && D(c[I], "darkChannel", gr(Ns(O.dark))), O.contrastText && D(c[I], "contrastTextChannel", gr(Ns(O.contrastText))), I === "text" && ($r(c[I], "primary"), $r(c[I], "secondary")), I === "action" && (O.active && $r(c[I], "active"), O.selected && $r(c[I], "selected")));
    });
  }), k = t.reduce((M, c) => ht(M, c), k);
  const $ = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Nj(k),
    enableContrastVars: s
  }, {
    vars: E,
    generateThemeVars: A,
    generateStyleSheets: z
  } = U1(k, $);
  return k.vars = E, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([M, c]) => {
    k[M] = c;
  }), k.generateThemeVars = A, k.generateStyleSheets = z, k.generateSpacing = function() {
    return im(p.spacing, Na(this));
  }, k.getColorSchemeSelector = H1(l), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = a, k.unstable_sxConfig = {
    ...is,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, k.unstable_sx = function(c) {
    return Fr({
      sx: c,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = nS, k;
}
function zy(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: Om({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function _j(e = {}, ...t) {
  const {
    palette: n,
    cssVariables: r = !1,
    colorSchemes: o = n ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = n == null ? void 0 : n.mode,
    ...s
  } = e, a = i || "light", l = o == null ? void 0 : o[a], d = {
    ...o,
    ...n ? {
      [a]: {
        ...typeof l != "boolean" && l,
        palette: n
      }
    } : void 0
  };
  if (r === !1) {
    if (!("colorSchemes" in e))
      return Yf(e, ...t);
    let p = n;
    "palette" in e || d[a] && (d[a] !== !0 ? p = d[a].palette : a === "dark" && (p = {
      mode: "dark"
    }));
    const m = Yf({
      ...e,
      palette: p
    }, ...t);
    return m.defaultColorScheme = a, m.colorSchemes = d, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: m.palette
    }, zy(m, "dark", d.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: m.palette
    }, zy(m, "light", d.light)), m;
  }
  return !n && !("light" in d) && a === "light" && (d.light = !0), Dj({
    ...s,
    colorSchemes: d,
    defaultColorScheme: a,
    ...typeof r != "boolean" && r
  }, ...t);
}
const Wj = _j(), Uj = "$$material";
function Hj(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vj = (e) => Hj(e) && e !== "classes", Kj = lm({
  themeId: Uj,
  defaultTheme: Wj,
  rootShouldForwardProp: Vj
}), Yj = D1;
function Gj(e) {
  return B1(e);
}
function Xj(e) {
  return pe("MuiSvgIcon", e);
}
ce("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Qj = {
  transition: "none"
};
function qj(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Zj = {}, Jj = ["all"], e4 = {};
function t4(e, t) {
  var r;
  const n = Qj;
  return qj((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function n4(e, t = Jj, n = e4) {
  var s, a;
  const r = (a = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : a.call(s, t, n), o = t4(e);
  if (r === void 0)
    return o ?? Zj;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
const r4 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${J(t)}`, `fontSize${J(n)}`]
  };
  return me(o, Xj, r);
}, o4 = Kj("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${J(n.color)}`], t[`fontSize${J(n.fontSize)}`]];
  }
})(Yj(({
  theme: e
}) => {
  var t, n, r, o, i, s, a, l, d, p, m, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    ...n4(e, "fill", {
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
          fontSize: ((l = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : l.call(a, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, f]) => f && f.main).map(([f]) => {
        var v, b;
        return {
          props: {
            color: f
          },
          style: {
            color: (b = (v = (e.vars ?? e).palette) == null ? void 0 : v[f]) == null ? void 0 : b.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (p = (d = (e.vars ?? e).palette) == null ? void 0 : d.action) == null ? void 0 : p.active
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
})), Gf = /* @__PURE__ */ g.forwardRef(function(t, n) {
  const r = Gj({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: a = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: m,
    viewBox: x = "0 0 24 24",
    ...f
  } = r, v = /* @__PURE__ */ g.isValidElement(o) && o.type === "svg", b = {
    ...r,
    color: s,
    component: a,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: x,
    hasSvgAsChild: v
  }, w = {};
  p || (w.viewBox = x);
  const y = r4(b);
  return /* @__PURE__ */ u.jsxs(o4, {
    as: a,
    className: ee(y.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: n,
    ...w,
    ...f,
    ...v && o.props,
    ownerState: b,
    children: [v ? o.props.children : o, m ? /* @__PURE__ */ u.jsx("title", {
      children: m
    }) : null]
  });
});
Gf.muiName = "SvgIcon";
function Pn(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ u.jsx(Gf, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = Gf.muiName, /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef(n));
}
const i4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), bd = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), Cd = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), s4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"
})), a4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), Tl = Pn([/* @__PURE__ */ u.jsx("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}, "0"), /* @__PURE__ */ u.jsx("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")]), l4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"
})), c4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3"
})), Rl = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"
})), u4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10m2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99m0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99z"
})), d4 = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
})), Ny = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), $s = Pn(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"
})), vt = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace', gi = {
  bg: "#08080a",
  fg: "#e6edf3",
  dim: "#8b949e",
  err: "#ff7b72"
};
function Mi({ children: e, sx: t }) {
  return /* @__PURE__ */ u.jsx(
    je,
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
function Ly({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ u.jsxs(Ln, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ u.jsxs(
      rt,
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
          typeof e == "string" ? /* @__PURE__ */ u.jsx(Mi, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(jt, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function hn({
  label: e,
  hint: t,
  sx: n,
  children: r
}) {
  return /* @__PURE__ */ u.jsxs(jt, { sx: n, children: [
    /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 0.75, sx: { alignItems: "baseline", mb: 0.75 }, children: [
      /* @__PURE__ */ u.jsx(
        je,
        {
          component: "label",
          sx: { fontSize: "0.75rem", fontWeight: 500, color: "text.secondary" },
          children: e
        }
      ),
      t && /* @__PURE__ */ u.jsx(je, { sx: { fontSize: "0.6875rem", color: "text.disabled" }, children: t })
    ] }),
    r
  ] });
}
function dr({
  label: e,
  value: t,
  mono: n = !0
}) {
  return /* @__PURE__ */ u.jsxs(jt, { sx: { minWidth: 0 }, children: [
    /* @__PURE__ */ u.jsx(Mi, { sx: { mb: 0.5 }, children: e }),
    /* @__PURE__ */ u.jsx(
      je,
      {
        sx: {
          fontFamily: n ? vt : void 0,
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
function wd({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ u.jsx(
    jt,
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
function By(e, t) {
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
function f4({ lines: e, running: t }) {
  const n = g.useRef(null), r = g.useRef(null), o = g.useRef(!0);
  return g.useEffect(() => {
    const i = r.current;
    if (!i) return;
    const s = () => {
      o.current = i.scrollHeight - i.scrollTop - i.clientHeight < 40;
    };
    return i.addEventListener("scroll", s), () => i.removeEventListener("scroll", s);
  }, []), g.useEffect(() => {
    var i;
    o.current && ((i = n.current) == null || i.scrollIntoView({ block: "end" }));
  }, [e]), !e.length && !t ? null : /* @__PURE__ */ u.jsxs(
    Ln,
    {
      ref: r,
      role: "log",
      "aria-live": "polite",
      sx: {
        bgcolor: gi.bg,
        color: gi.fg,
        borderRadius: "8px",
        px: 2,
        py: 1.5,
        maxHeight: "18rem",
        overflowY: "auto",
        fontFamily: vt,
        fontSize: 12,
        lineHeight: 1.55,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word"
      },
      children: [
        e.map((i, s) => /* @__PURE__ */ u.jsx(
          jt,
          {
            sx: {
              color: i.stream === "stderr" ? gi.err : i.stream === "meta" ? gi.dim : gi.fg
            },
            children: i.text || " "
          },
          s
        )),
        t && /* @__PURE__ */ u.jsx(jt, { sx: { color: gi.dim }, children: "▍running…" }),
        /* @__PURE__ */ u.jsx("div", { ref: n })
      ]
    }
  );
}
const Fy = 2.25;
function p4({ ctx: e }) {
  const t = g.useMemo(
    () => ku(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ u.jsx(NT, { theme: t, children: /* @__PURE__ */ u.jsx(m4, { ctx: e }) });
}
function Mo(e) {
  if (isNaN(e) || e === 0) return "0 B";
  const t = 1024, n = ["B", "KB", "MB", "GB", "TB"], r = Math.floor(Math.log(e) / Math.log(t));
  return `${parseFloat((e / Math.pow(t, r)).toFixed(2))} ${n[r]}`;
}
function kd(e) {
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
function m4({ ctx: e }) {
  var Kn;
  const [t, n] = g.useState(0), [r, o] = g.useState(!0), [i, s] = g.useState(null), [a, l] = g.useState(null), [d, p] = g.useState([]), [m, x] = g.useState([]), [f, v] = g.useState([]), [b, w] = g.useState(null), [y, h] = g.useState(null), [S, C] = g.useState(""), [R, k] = g.useState([]), [$, E] = g.useState(!1), A = g.useRef(null), [z, M] = g.useState(!1), [c, P] = g.useState(""), [T, I] = g.useState(!0), [O, N] = g.useState(!0), [j, B] = g.useState(!0), [_, G] = g.useState("local"), [W, Z] = g.useState("zstd"), [V, Y] = g.useState(null), [K, Q] = g.useState(null), [H, ne] = g.useState(!1), [ae, Ee] = g.useState(""), [Pe, we] = g.useState("private"), [le, Ne] = g.useState(null), [Ve, Re] = g.useState(!1), [Oe, ye] = g.useState(""), [ze, Xe] = g.useState("0 2 * * *"), [Be, Ke] = g.useState("daily"), [We, it] = g.useState(7), [Fe, Te] = g.useState("local"), [Ue, bt] = g.useState(!0), [ie, ke] = g.useState("all"), [Me, Je] = g.useState(null), xe = g.useCallback(async () => {
    o(!0), s(null);
    try {
      const [L, he, Lt, Bt, In] = await Promise.all([
        e.api("/buckets").then((Ut) => Ut.json()).catch(() => ({ buckets: [] })),
        e.api("/backups").then((Ut) => Ut.json()).catch(() => ({ backups: [] })),
        e.api("/schedules").then((Ut) => Ut.json()).catch(() => ({ schedules: [] })),
        e.api("/disk-usage").then((Ut) => Ut.json()).catch(() => null),
        e.api("/meta").then((Ut) => Ut.json()).catch(() => null)
      ]);
      p(L.buckets ?? []), x(he.backups ?? []), v(Lt.schedules ?? []), Bt && w(Bt), In && h(In);
    } catch (L) {
      s(L instanceof Error ? L.message : String(L));
    } finally {
      o(!1);
    }
  }, [e]);
  g.useEffect(() => {
    xe();
  }, [xe]);
  const or = async () => {
    const L = [];
    T && L.push("websites"), O && L.push("databases"), j && L.push("configs");
    const he = L.length === 3 ? "all" : L.join(",") || "all";
    E(!0), k([]);
    const Lt = new AbortController();
    A.current = Lt;
    try {
      const Bt = e.run("/backups", {
        method: "POST",
        body: {
          name: c.trim() || void 0,
          targets: he,
          destination: _,
          compression: W
        },
        signal: Lt.signal
      });
      for await (const In of Bt)
        k((Ut) => By(Ut, In)), In.kind === "result" && In.ok && (l("Backup snapshot created successfully."), xe());
    } catch (Bt) {
      k((In) => [
        ...In,
        { stream: "stderr", text: Bt instanceof Error ? Bt.message : String(Bt) }
      ]);
    } finally {
      E(!1);
    }
  }, $n = async () => {
    if (!V) return;
    E(!0), k([]);
    const L = new AbortController();
    A.current = L;
    try {
      const he = e.run(`/backups/${V.id}/restore`, {
        method: "POST",
        body: { targets: "all" },
        signal: L.signal
      });
      for await (const Lt of he)
        k((Bt) => By(Bt, Lt)), Lt.kind === "result" && Lt.ok && (l(`Snapshot ${V.id} restored successfully.`), xe());
    } catch (he) {
      k((Lt) => [
        ...Lt,
        { stream: "stderr", text: he instanceof Error ? he.message : String(he) }
      ]);
    } finally {
      E(!1);
    }
  }, bo = async () => {
    if (K)
      try {
        const L = await e.api(`/backups/${K.id}`, { method: "DELETE" });
        if (!L.ok) {
          const he = await L.json().catch(() => ({}));
          throw new Error(he.message ?? `HTTP ${L.status}`);
        }
        l(`Snapshot ${K.id} deleted.`), Q(null), xe();
      } catch (L) {
        s(L instanceof Error ? L.message : String(L));
      }
  }, Wr = async () => {
    if (ae.trim())
      try {
        const L = await e.api("/buckets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: ae.trim(),
            policy: Pe
          })
        });
        if (!L.ok) {
          const he = await L.json().catch(() => ({}));
          throw new Error(he.message ?? `HTTP ${L.status}`);
        }
        l(`S3 Bucket '${ae}' created.`), ne(!1), Ee(""), xe();
      } catch (L) {
        s(L instanceof Error ? L.message : String(L));
      }
  }, Se = async () => {
    if (le)
      try {
        const L = await e.api(`/buckets/${le.name}`, { method: "DELETE" });
        if (!L.ok) {
          const he = await L.json().catch(() => ({}));
          throw new Error(he.message ?? `HTTP ${L.status}`);
        }
        l(`Bucket '${le.name}' deleted.`), Ne(null), xe();
      } catch (L) {
        s(L instanceof Error ? L.message : String(L));
      }
  }, Qe = async () => {
    if (Oe.trim())
      try {
        const L = await e.api("/schedules", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: Oe.trim(),
            cron: ze,
            targets: ie,
            retention_days: We,
            destination: Fe,
            enabled: Ue
          })
        });
        if (!L.ok) {
          const he = await L.json().catch(() => ({}));
          throw new Error(he.message ?? `HTTP ${L.status}`);
        }
        l(`Schedule '${Oe}' saved.`), Re(!1), ye(""), xe();
      } catch (L) {
        s(L instanceof Error ? L.message : String(L));
      }
  }, Qt = async () => {
    if (Me)
      try {
        const L = await e.api(`/schedules/${Me.name}`, { method: "DELETE" });
        if (!L.ok) {
          const he = await L.json().catch(() => ({}));
          throw new Error(he.message ?? `HTTP ${L.status}`);
        }
        l(`Schedule '${Me.name}' removed.`), Je(null), xe();
      } catch (L) {
        s(L instanceof Error ? L.message : String(L));
      }
  }, Wa = g.useMemo(() => b ? b.used_bytes : d.reduce((L, he) => L + (he.size_bytes || 0), 0) + m.reduce((L, he) => L + (he.size_bytes || 0), 0), [b, d, m]), ei = g.useMemo(() => {
    if (!S) return m;
    const L = S.toLowerCase();
    return m.filter(
      (he) => he.name.toLowerCase().includes(L) || he.id.toLowerCase().includes(L) || he.targets.toLowerCase().includes(L) || he.destination.toLowerCase().includes(L)
    );
  }, [m, S]), Ur = g.useMemo(() => {
    if (!S) return d;
    const L = S.toLowerCase();
    return d.filter(
      (he) => he.name.toLowerCase().includes(L) || he.policy.toLowerCase().includes(L)
    );
  }, [d, S]);
  return /* @__PURE__ */ u.jsxs(jt, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ u.jsxs(
      rt,
      {
        direction: { xs: "column", md: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ u.jsxs(jt, { children: [
            /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 0.5 }, children: [
              /* @__PURE__ */ u.jsx(je, { variant: "h5", sx: { fontWeight: 700, letterSpacing: "-0.02em" }, children: "Storage & Backups" }),
              /* @__PURE__ */ u.jsx(
                Mt,
                {
                  icon: /* @__PURE__ */ u.jsx(wd, { ok: !0, size: 8 }),
                  label: "Active",
                  size: "small",
                  sx: { fontWeight: 600, bgcolor: "success.light", color: "success.contrastText" }
                }
              ),
              /* @__PURE__ */ u.jsx(
                Mt,
                {
                  label: `Port ${(y == null ? void 0 : y.port) ?? "—"}`,
                  size: "small",
                  variant: "outlined",
                  sx: { fontFamily: vt, fontSize: "0.75rem" }
                }
              ),
              /* @__PURE__ */ u.jsx(
                Mt,
                {
                  label: "100% Isolated /opt/hostpanel",
                  size: "small",
                  color: "primary",
                  variant: "outlined",
                  sx: { fontSize: "0.75rem", fontWeight: 600 }
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary" }, children: "S3-compatible object storage, compressed snapshot archives, automated schedules & storage isolation." })
          ] }),
          /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 0.75, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ u.jsx(ui, { title: "Refresh Status", arrow: !0, children: /* @__PURE__ */ u.jsx("span", { children: /* @__PURE__ */ u.jsx(
              Oo,
              {
                size: "small",
                onClick: xe,
                disabled: r,
                sx: { border: "1px solid", borderColor: "divider" },
                children: r ? /* @__PURE__ */ u.jsx(Rc, { size: 16, color: "inherit" }) : /* @__PURE__ */ u.jsx(i4, { sx: { fontSize: 18 } })
              }
            ) }) }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(bd, {}),
                onClick: () => {
                  Ee(""), ne(!0);
                },
                sx: { whiteSpace: "nowrap" },
                children: "New Bucket"
              }
            ),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Tl, {}),
                onClick: () => {
                  ye(`backup-${f.length + 1}`), Re(!0);
                },
                sx: { whiteSpace: "nowrap" },
                children: "Schedule"
              }
            ),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "contained",
                size: "small",
                color: "primary",
                startIcon: /* @__PURE__ */ u.jsx(Rl, {}),
                onClick: () => {
                  P(""), M(!0);
                },
                sx: { ml: 0.5, whiteSpace: "nowrap" },
                children: "Create Snapshot"
              }
            )
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ u.jsx(Dg, { severity: "error", onClose: () => s(null), children: i }),
    /* @__PURE__ */ u.jsxs(
      rt,
      {
        direction: { xs: "column", sm: "row" },
        spacing: 2,
        children: [
          /* @__PURE__ */ u.jsx(fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(pl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsx(Mi, { sx: { mb: 0.5 }, children: "STORAGE SERVICE STATUS" }),
            /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 1, sx: { alignItems: "center", mb: 0.5 }, children: [
              /* @__PURE__ */ u.jsx(wd, { ok: !0, size: 10 }),
              /* @__PURE__ */ u.jsxs(je, { variant: "h6", sx: { fontWeight: 700 }, children: [
                "Active · ",
                (y == null ? void 0 : y.port) ?? "—"
              ] })
            ] }),
            /* @__PURE__ */ u.jsx(je, { variant: "caption", sx: { color: "text.disabled", fontFamily: vt }, children: y ? `${y.unit} (${y.run_as})` : "—" })
          ] }) }),
          /* @__PURE__ */ u.jsx(fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(pl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsx(Mi, { sx: { mb: 0.5 }, children: "TOTAL STORAGE USED" }),
            /* @__PURE__ */ u.jsx(je, { variant: "h6", sx: { fontWeight: 700, fontFamily: vt, mb: 0.5 }, children: Mo(Wa) }),
            /* @__PURE__ */ u.jsx(je, { variant: "caption", sx: { color: "text.secondary" }, children: "Across /opt/hostpanel data assets" })
          ] }) }),
          /* @__PURE__ */ u.jsx(fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(pl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsx(Mi, { sx: { mb: 0.5 }, children: "BACKUP SNAPSHOTS COUNT" }),
            /* @__PURE__ */ u.jsxs(je, { variant: "h6", sx: { fontWeight: 700, mb: 0.5 }, children: [
              m.length,
              " ",
              m.length === 1 ? "Snapshot" : "Snapshots"
            ] }),
            /* @__PURE__ */ u.jsx(je, { variant: "caption", sx: { color: "text.secondary" }, children: m.length > 0 ? `Latest: ${kd((Kn = m[0]) == null ? void 0 : Kn.created_at)}` : "No snapshots recorded yet" })
          ] }) }),
          /* @__PURE__ */ u.jsx(fl, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(pl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
            /* @__PURE__ */ u.jsx(Mi, { sx: { mb: 0.5 }, children: "S3 BUCKETS COUNT" }),
            /* @__PURE__ */ u.jsxs(je, { variant: "h6", sx: { fontWeight: 700, mb: 0.5 }, children: [
              d.length,
              " ",
              d.length === 1 ? "Bucket" : "Buckets"
            ] }),
            /* @__PURE__ */ u.jsxs(je, { variant: "caption", sx: { color: "text.secondary" }, children: [
              "Total objects: ",
              d.reduce((L, he) => L + (he.objects_count || 0), 0)
            ] })
          ] }) })
        ]
      }
    ),
    (R.length > 0 || $) && /* @__PURE__ */ u.jsx(jt, { children: /* @__PURE__ */ u.jsx(
      Ly,
      {
        label: "Live Operations Progress",
        action: $ && /* @__PURE__ */ u.jsx(
          at,
          {
            size: "small",
            color: "error",
            onClick: () => {
              var L;
              return (L = A.current) == null ? void 0 : L.abort();
            },
            children: "Cancel"
          }
        ),
        children: /* @__PURE__ */ u.jsx(f4, { lines: R, running: $ })
      }
    ) }),
    /* @__PURE__ */ u.jsxs(Ln, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ u.jsx(jt, { sx: { borderBottom: 1, borderColor: "divider", px: 2, pt: 1 }, children: /* @__PURE__ */ u.jsxs(
        JM,
        {
          value: t,
          onChange: (L, he) => n(he),
          variant: "scrollable",
          scrollButtons: "auto",
          children: [
            /* @__PURE__ */ u.jsx(
              Es,
              {
                icon: /* @__PURE__ */ u.jsx(Rl, { fontSize: "small" }),
                iconPosition: "start",
                label: `Backup Snapshots (${m.length})`
              }
            ),
            /* @__PURE__ */ u.jsx(
              Es,
              {
                icon: /* @__PURE__ */ u.jsx(c4, { fontSize: "small" }),
                iconPosition: "start",
                label: `S3 Buckets (${d.length})`
              }
            ),
            /* @__PURE__ */ u.jsx(
              Es,
              {
                icon: /* @__PURE__ */ u.jsx(Tl, { fontSize: "small" }),
                iconPosition: "start",
                label: `Automated Schedules (${f.length})`
              }
            ),
            /* @__PURE__ */ u.jsx(
              Es,
              {
                icon: /* @__PURE__ */ u.jsx(u4, { fontSize: "small" }),
                iconPosition: "start",
                label: "Disk Usage Visualizer"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Es,
              {
                icon: /* @__PURE__ */ u.jsx(d4, { fontSize: "small" }),
                iconPosition: "start",
                label: "Service & Isolation"
              }
            )
          ]
        }
      ) }),
      t === 0 && /* @__PURE__ */ u.jsxs(jt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(
          rt,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ u.jsx(
                Io,
                {
                  size: "small",
                  placeholder: "Search snapshots by name, ID or destination...",
                  value: S,
                  onChange: (L) => C(L.target.value),
                  sx: { width: { xs: "100%", sm: 360 } },
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ u.jsx(ay, { position: "start", children: /* @__PURE__ */ u.jsx(Ny, { fontSize: "small", sx: { color: "text.disabled" } }) })
                    }
                  }
                }
              ),
              /* @__PURE__ */ u.jsx(
                at,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ u.jsx(Rl, {}),
                  onClick: () => {
                    P(""), M(!0);
                  },
                  children: "Create Snapshot"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(wl, { children: /* @__PURE__ */ u.jsxs(bl, { size: "small", children: [
          /* @__PURE__ */ u.jsx(kl, { children: /* @__PURE__ */ u.jsxs(Kt, { children: [
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Snapshot Name / ID" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Targets Included" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Archive Size" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Created At" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Destination" }),
            /* @__PURE__ */ u.jsx(se, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Cl, { children: r && m.length === 0 ? /* @__PURE__ */ u.jsx(Kt, { children: /* @__PURE__ */ u.jsx(se, { colSpan: 6, align: "center", sx: { py: 4 }, children: /* @__PURE__ */ u.jsx(Rc, { size: 28 }) }) }) : ei.length === 0 ? /* @__PURE__ */ u.jsx(Kt, { children: /* @__PURE__ */ u.jsxs(se, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No backup snapshots found." }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Rl, {}),
                onClick: () => M(!0),
                children: "Create your first snapshot"
              }
            )
          ] }) }) : ei.map((L) => /* @__PURE__ */ u.jsxs(Kt, { hover: !0, children: [
            /* @__PURE__ */ u.jsxs(se, { children: [
              /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { fontWeight: 600 }, children: L.name || L.id }),
              /* @__PURE__ */ u.jsx(
                je,
                {
                  variant: "caption",
                  sx: { fontFamily: vt, color: "text.disabled" },
                  children: L.id
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(rt, { direction: "row", spacing: 0.5, sx: { flexWrap: "wrap", gap: 0.5 }, children: L.targets === "all" ? /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
              /* @__PURE__ */ u.jsx(Mt, { label: "Websites", size: "small", variant: "outlined" }),
              /* @__PURE__ */ u.jsx(Mt, { label: "Databases", size: "small", variant: "outlined" }),
              /* @__PURE__ */ u.jsx(Mt, { label: "Configs", size: "small", variant: "outlined" })
            ] }) : L.targets.split(",").map((he) => /* @__PURE__ */ u.jsx(
              Mt,
              {
                label: he.trim(),
                size: "small",
                variant: "outlined"
              },
              he
            )) }) }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt, fontSize: "0.8125rem" }, children: Mo(L.size_bytes) }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontSize: "0.8125rem" }, children: kd(L.created_at) }),
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
              Mt,
              {
                label: L.destination.toUpperCase(),
                size: "small",
                color: L.destination === "local" ? "default" : L.destination === "s3" ? "primary" : "secondary",
                sx: { fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(se, { align: "right", children: /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ u.jsx(ui, { title: "Restore snapshot payload", children: /* @__PURE__ */ u.jsx(
                Oo,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => Y(L),
                  children: /* @__PURE__ */ u.jsx(s4, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(ui, { title: "Download archive (.tar.zst)", children: /* @__PURE__ */ u.jsx(
                Oo,
                {
                  size: "small",
                  onClick: () => {
                    window.open(`/cpanelapi/storage/backups/${L.id}/download`, "_blank");
                  },
                  children: /* @__PURE__ */ u.jsx(a4, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(ui, { title: "Delete snapshot", children: /* @__PURE__ */ u.jsx(
                Oo,
                {
                  size: "small",
                  color: "error",
                  onClick: () => Q(L),
                  children: /* @__PURE__ */ u.jsx(Cd, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, L.id)) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ u.jsxs(jt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(
          rt,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ u.jsx(
                Io,
                {
                  size: "small",
                  placeholder: "Search S3 buckets...",
                  value: S,
                  onChange: (L) => C(L.target.value),
                  sx: { width: { xs: "100%", sm: 360 } },
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ u.jsx(ay, { position: "start", children: /* @__PURE__ */ u.jsx(Ny, { fontSize: "small", sx: { color: "text.disabled" } }) })
                    }
                  }
                }
              ),
              /* @__PURE__ */ u.jsx(
                at,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ u.jsx(bd, {}),
                  onClick: () => {
                    Ee(""), ne(!0);
                  },
                  children: "New S3 Bucket"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(wl, { children: /* @__PURE__ */ u.jsxs(bl, { size: "small", children: [
          /* @__PURE__ */ u.jsx(kl, { children: /* @__PURE__ */ u.jsxs(Kt, { children: [
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Bucket Name" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Access Policy" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Object Count" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Total Size" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Created At" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "S3 URI / Path" }),
            /* @__PURE__ */ u.jsx(se, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Cl, { children: Ur.length === 0 ? /* @__PURE__ */ u.jsx(Kt, { children: /* @__PURE__ */ u.jsxs(se, { colSpan: 7, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No S3 buckets created yet." }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(bd, {}),
                onClick: () => ne(!0),
                children: "Create New S3 Bucket"
              }
            )
          ] }) }) : Ur.map((L) => /* @__PURE__ */ u.jsxs(Kt, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(l4, { fontSize: "small", sx: { color: "primary.main" } }),
              /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { fontWeight: 600, fontFamily: vt }, children: L.name })
            ] }) }),
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
              Mt,
              {
                label: L.policy,
                size: "small",
                color: L.policy === "private" ? "default" : L.policy === "public-read" ? "warning" : "info",
                sx: { fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: L.objects_count ?? 0 }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: Mo(L.size_bytes ?? 0) }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontSize: "0.8125rem" }, children: kd(L.created_at) }),
            /* @__PURE__ */ u.jsxs(se, { sx: { fontFamily: vt, fontSize: "0.75rem", color: "text.secondary" }, children: [
              "s3://",
              L.name
            ] }),
            /* @__PURE__ */ u.jsx(se, { align: "right", children: /* @__PURE__ */ u.jsx(ui, { title: "Delete bucket", children: /* @__PURE__ */ u.jsx(
              Oo,
              {
                size: "small",
                color: "error",
                onClick: () => Ne(L),
                children: /* @__PURE__ */ u.jsx(Cd, { fontSize: "small" })
              }
            ) }) })
          ] }, L.name)) })
        ] }) }),
        /* @__PURE__ */ u.jsxs(Dg, { severity: "info", sx: { mt: 3 }, children: [
          /* @__PURE__ */ u.jsx(je, { variant: "caption", sx: { display: "block", fontWeight: 600 }, children: "S3 Object Storage Isolation:" }),
          /* @__PURE__ */ u.jsxs(je, { variant: "caption", children: [
            "All bucket data is strictly stored under",
            " ",
            /* @__PURE__ */ u.jsx("code", { children: "/opt/hostpanel/data/storage/<bucket_name>" }),
            " and managed by daemon",
            " ",
            /* @__PURE__ */ u.jsx("code", { children: (y == null ? void 0 : y.unit) ?? "—" }),
            " (Port ",
            (y == null ? void 0 : y.port) ?? "—",
            ")."
          ] })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ u.jsxs(jt, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(
          rt,
          {
            direction: "row",
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary" }, children: "Automated backup snapshots running via cron with retention pruning and remote replication." }),
              /* @__PURE__ */ u.jsx(
                at,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ u.jsx(Tl, {}),
                  onClick: () => {
                    ye(`schedule-${f.length + 1}`), Re(!0);
                  },
                  children: "Set Schedule"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(wl, { children: /* @__PURE__ */ u.jsxs(bl, { size: "small", children: [
          /* @__PURE__ */ u.jsx(kl, { children: /* @__PURE__ */ u.jsxs(Kt, { children: [
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Schedule Name" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Frequency / Cron" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Targets" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Retention Policy" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Destination" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Status" }),
            /* @__PURE__ */ u.jsx(se, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Cl, { children: f.length === 0 ? /* @__PURE__ */ u.jsx(Kt, { children: /* @__PURE__ */ u.jsxs(se, { colSpan: 7, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No automated schedules configured." }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Tl, {}),
                onClick: () => Re(!0),
                children: "Configure Daily Snapshot Schedule"
              }
            )
          ] }) }) : f.map((L) => /* @__PURE__ */ u.jsxs(Kt, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: L.name }),
            /* @__PURE__ */ u.jsxs(se, { children: [
              /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { fontFamily: vt }, children: L.cron }),
              /* @__PURE__ */ u.jsx(je, { variant: "caption", sx: { color: "text.disabled" }, children: L.cron === "0 2 * * *" ? "Daily at 02:00 UTC" : L.cron === "0 3 * * 0" ? "Weekly on Sunday at 03:00 UTC" : "Custom cron schedule" })
            ] }),
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(Mt, { label: L.targets || "all", size: "small", variant: "outlined" }) }),
            /* @__PURE__ */ u.jsxs(se, { sx: { fontFamily: vt, fontSize: "0.8125rem" }, children: [
              "Keep ",
              L.retention_days,
              " days"
            ] }),
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
              Mt,
              {
                label: L.destination.toUpperCase(),
                size: "small",
                color: L.destination === "local" ? "default" : L.destination === "s3" ? "primary" : "secondary",
                sx: { fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
              Mt,
              {
                icon: /* @__PURE__ */ u.jsx(wd, { ok: L.enabled, size: 6 }),
                label: L.enabled ? "Active" : "Disabled",
                size: "small",
                variant: "outlined",
                sx: { fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(se, { align: "right", children: /* @__PURE__ */ u.jsx(ui, { title: "Delete schedule", children: /* @__PURE__ */ u.jsx(
              Oo,
              {
                size: "small",
                color: "error",
                onClick: () => Je(L),
                children: /* @__PURE__ */ u.jsx(Cd, { fontSize: "small" })
              }
            ) }) })
          ] }, L.name)) })
        ] }) })
      ] }),
      t === 3 && /* @__PURE__ */ u.jsx(jt, { sx: { p: Fy }, children: /* @__PURE__ */ u.jsxs(rt, { spacing: 3, children: [
        /* @__PURE__ */ u.jsxs(jt, { children: [
          /* @__PURE__ */ u.jsx(je, { variant: "subtitle1", sx: { fontWeight: 700, mb: 1 }, children: "HostPanel Storage Breakdown (/opt/hostpanel)" }),
          /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: "Visual breakdown of storage usage across isolated directories under /opt/hostpanel." }),
          b && /* @__PURE__ */ u.jsxs(Ln, { sx: { p: 2, mb: 3, bgcolor: "background.default" }, children: [
            /* @__PURE__ */ u.jsxs(
              rt,
              {
                direction: { xs: "column", sm: "row" },
                spacing: 3,
                sx: { justifyContent: "space-between", mb: 2 },
                children: [
                  /* @__PURE__ */ u.jsx(
                    dr,
                    {
                      label: "TOTAL DISK CAPACITY",
                      value: Mo(b.total_bytes)
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    dr,
                    {
                      label: "TOTAL USED SPACE",
                      value: Mo(b.used_bytes)
                    }
                  ),
                  /* @__PURE__ */ u.jsx(
                    dr,
                    {
                      label: "FREE AVAILABLE SPACE",
                      value: Mo(b.free_bytes)
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ u.jsx(
              ly,
              {
                variant: "determinate",
                value: Math.min(
                  100,
                  b.used_bytes / (b.total_bytes || 1) * 100
                ),
                sx: { height: 8, borderRadius: 4 }
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(rt, { spacing: 2, children: ((b == null ? void 0 : b.breakdown) ?? [
          { category: "websites", path: "/opt/hostpanel/data/vhosts", size_bytes: 524288e4 },
          { category: "databases", path: "/opt/hostpanel/data", size_bytes: 3145728e3 },
          { category: "storage", path: "/opt/hostpanel/data/storage", size_bytes: 2097152e3 },
          { category: "backups", path: "/opt/hostpanel/data/backups", size_bytes: 262144e4 },
          { category: "logs", path: "/opt/hostpanel/logs", size_bytes: 524288e3 },
          { category: "runtimes", path: "/opt/hostpanel/runtimes", size_bytes: 568512e3 }
        ]).map((L) => {
          const he = b != null && b.used_bytes ? (L.size_bytes / b.used_bytes * 100).toFixed(1) : "0";
          return /* @__PURE__ */ u.jsxs(Ln, { sx: { p: 2 }, children: [
            /* @__PURE__ */ u.jsxs(
              rt,
              {
                direction: "row",
                sx: { justifyContent: "space-between", alignItems: "center", mb: 1 },
                children: [
                  /* @__PURE__ */ u.jsxs(jt, { children: [
                    /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { fontWeight: 700, textTransform: "capitalize" }, children: L.category }),
                    /* @__PURE__ */ u.jsx(
                      je,
                      {
                        variant: "caption",
                        sx: { fontFamily: vt, color: "text.disabled" },
                        children: L.path
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u.jsxs(rt, { direction: "row", spacing: 2, sx: { alignItems: "center" }, children: [
                    /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { fontWeight: 600, fontFamily: vt }, children: Mo(L.size_bytes) }),
                    /* @__PURE__ */ u.jsx(
                      Mt,
                      {
                        label: `${he}%`,
                        size: "small",
                        variant: "outlined",
                        sx: { fontFamily: vt, fontSize: "0.75rem" }
                      }
                    )
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ u.jsx(
              ly,
              {
                variant: "determinate",
                value: parseFloat(he) || 0,
                sx: { height: 6, borderRadius: 3 }
              }
            )
          ] }, L.category);
        }) })
      ] }) }),
      t === 4 && /* @__PURE__ */ u.jsx(jt, { sx: { p: Fy }, children: /* @__PURE__ */ u.jsxs(rt, { spacing: 3, children: [
        /* @__PURE__ */ u.jsxs(jt, { children: [
          /* @__PURE__ */ u.jsx(je, { variant: "subtitle1", sx: { fontWeight: 700, mb: 1 }, children: "100% Strict Filesystem Isolation Under /opt/hostpanel" }),
          /* @__PURE__ */ u.jsx(je, { variant: "body2", sx: { color: "text.secondary", mb: 2 }, children: "All storage assets, backup archives, configs, logs, and sockets live strictly under /opt/hostpanel. Never in /var/backups, /etc, or /tmp." })
        ] }),
        /* @__PURE__ */ u.jsx(wl, { component: Ln, children: /* @__PURE__ */ u.jsxs(bl, { size: "small", children: [
          /* @__PURE__ */ u.jsx(kl, { children: /* @__PURE__ */ u.jsxs(Kt, { children: [
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Asset Classification" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Strict Isolated Path" }),
            /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Status / Security Constraint" })
          ] }) }),
          /* @__PURE__ */ u.jsxs(Cl, { children: [
            /* @__PURE__ */ u.jsxs(Kt, { children: [
              /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "S3 Object Storage" }),
              /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: "/opt/hostpanel/data/storage" }),
              /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
                Mt,
                {
                  icon: /* @__PURE__ */ u.jsx($s, { fontSize: "small" }),
                  label: `${(y == null ? void 0 : y.run_as) ?? "service"} owned`,
                  size: "small",
                  color: "success",
                  variant: "outlined"
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs(Kt, { children: [
              /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Backup Snapshots" }),
              /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: "/opt/hostpanel/data/backups" }),
              /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
                Mt,
                {
                  icon: /* @__PURE__ */ u.jsx($s, { fontSize: "small" }),
                  label: "tar.zst / tar.gz only",
                  size: "small",
                  color: "success",
                  variant: "outlined"
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs(Kt, { children: [
              /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Configuration & Schedules" }),
              /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: "/opt/hostpanel/etc/storage" }),
              /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
                Mt,
                {
                  icon: /* @__PURE__ */ u.jsx($s, { fontSize: "small" }),
                  label: "Atomic JSON Store",
                  size: "small",
                  color: "success",
                  variant: "outlined"
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs(Kt, { children: [
              /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Service Logs" }),
              /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: "/opt/hostpanel/logs/storage" }),
              /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
                Mt,
                {
                  icon: /* @__PURE__ */ u.jsx($s, { fontSize: "small" }),
                  label: "Isolated logs",
                  size: "small",
                  color: "success",
                  variant: "outlined"
                }
              ) })
            ] }),
            /* @__PURE__ */ u.jsxs(Kt, { children: [
              /* @__PURE__ */ u.jsx(se, { sx: { fontWeight: 600 }, children: "Runtime Sockets & PIDs" }),
              /* @__PURE__ */ u.jsx(se, { sx: { fontFamily: vt }, children: "/opt/hostpanel/run/storage" }),
              /* @__PURE__ */ u.jsx(se, { children: /* @__PURE__ */ u.jsx(
                Mt,
                {
                  icon: /* @__PURE__ */ u.jsx($s, { fontSize: "small" }),
                  label: "Isolated run",
                  size: "small",
                  color: "success",
                  variant: "outlined"
                }
              ) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ u.jsx(Ly, { label: "Daemon & Sandbox Specifications", children: /* @__PURE__ */ u.jsxs(rt, { spacing: 2, sx: { p: 2 }, children: [
          /* @__PURE__ */ u.jsxs(rt, { direction: { xs: "column", sm: "row" }, spacing: 3, children: [
            /* @__PURE__ */ u.jsx(dr, { label: "DAEMON UNIT", value: (y == null ? void 0 : y.unit) ?? "—" }),
            /* @__PURE__ */ u.jsx(dr, { label: "PORT", value: y != null && y.port ? `${y.port} (${y.host} loopback only)` : "—" }),
            /* @__PURE__ */ u.jsx(dr, { label: "SERVICE USER", value: (y == null ? void 0 : y.run_as) ?? "—" }),
            /* @__PURE__ */ u.jsx(dr, { label: "OPS SCRIPT", value: (y == null ? void 0 : y.ops_script) ?? "—" })
          ] }),
          /* @__PURE__ */ u.jsxs(rt, { direction: { xs: "column", sm: "row" }, spacing: 3, children: [
            /* @__PURE__ */ u.jsx(dr, { label: "SANDBOX POLICY", value: "ProtectSystem=strict" }),
            /* @__PURE__ */ u.jsx(dr, { label: "PRIVILEGES", value: "NoNewPrivileges=no" }),
            /* @__PURE__ */ u.jsx(dr, { label: "PERSISTENCE", value: "SQLite / JSON (No /var pollution)" })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: z,
        onClose: () => M(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Create Backup Snapshot" }),
          /* @__PURE__ */ u.jsxs(Eo, { children: [
            /* @__PURE__ */ u.jsx(Ts, { sx: { mb: 2 }, children: "Creates a compressed snapshot archive of selected HostPanel components directly under /opt/hostpanel/data/backups/." }),
            /* @__PURE__ */ u.jsxs(rt, { spacing: 2, children: [
              /* @__PURE__ */ u.jsx(hn, { label: "Snapshot Name (Optional)", hint: "e.g. pre-upgrade-snap", children: /* @__PURE__ */ u.jsx(
                Io,
                {
                  fullWidth: !0,
                  size: "small",
                  placeholder: "Leave blank for auto timestamp",
                  value: c,
                  onChange: (L) => P(L.target.value)
                }
              ) }),
              /* @__PURE__ */ u.jsx(hn, { label: "Components to Back Up", children: /* @__PURE__ */ u.jsxs(jx, { row: !0, children: [
                /* @__PURE__ */ u.jsx(
                  cr,
                  {
                    control: /* @__PURE__ */ u.jsx(
                      ml,
                      {
                        checked: T,
                        onChange: (L) => I(L.target.checked)
                      }
                    ),
                    label: "Websites (/data/vhosts)"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  cr,
                  {
                    control: /* @__PURE__ */ u.jsx(
                      ml,
                      {
                        checked: O,
                        onChange: (L) => N(L.target.checked)
                      }
                    ),
                    label: "Databases (/data)"
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  cr,
                  {
                    control: /* @__PURE__ */ u.jsx(
                      ml,
                      {
                        checked: j,
                        onChange: (L) => B(L.target.checked)
                      }
                    ),
                    label: "Configuration (/etc)"
                  }
                )
              ] }) }),
              /* @__PURE__ */ u.jsx(hn, { label: "Storage Destination", children: /* @__PURE__ */ u.jsxs(
                vy,
                {
                  row: !0,
                  value: _,
                  onChange: (L) => G(L.target.value),
                  children: [
                    /* @__PURE__ */ u.jsx(cr, { value: "local", control: /* @__PURE__ */ u.jsx(ci, { size: "small" }), label: "Local (/data/backups)" }),
                    /* @__PURE__ */ u.jsx(cr, { value: "s3", control: /* @__PURE__ */ u.jsx(ci, { size: "small" }), label: "AWS S3" }),
                    /* @__PURE__ */ u.jsx(cr, { value: "r2", control: /* @__PURE__ */ u.jsx(ci, { size: "small" }), label: "Cloudflare R2" })
                  ]
                }
              ) }),
              /* @__PURE__ */ u.jsx(hn, { label: "Compression Algorithm", children: /* @__PURE__ */ u.jsxs(
                Ii,
                {
                  size: "small",
                  value: W,
                  onChange: (L) => Z(L.target.value),
                  fullWidth: !0,
                  children: [
                    /* @__PURE__ */ u.jsx(rn, { value: "zstd", children: "Zstandard (.tar.zst) - Recommended: High speed & compression" }),
                    /* @__PURE__ */ u.jsx(rn, { value: "gzip", children: "Gzip (.tar.gz) - Universal compatibility" }),
                    /* @__PURE__ */ u.jsx(rn, { value: "none", children: "None (.tar) - Uncompressed" })
                  ]
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => M(!1), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "contained",
                onClick: () => {
                  M(!1), or();
                },
                children: "Start Snapshot"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: !!V,
        onClose: () => Y(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Restore Snapshot?" }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(Ts, { children: [
            "Are you sure you want to restore snapshot",
            " ",
            /* @__PURE__ */ u.jsx("strong", { children: (V == null ? void 0 : V.name) || (V == null ? void 0 : V.id) }),
            "? Existing files in target directories will be updated to match the snapshot state."
          ] }) }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => Y(null), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "contained",
                color: "primary",
                onClick: () => {
                  $n(), Y(null);
                },
                children: "Restore Payload"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: !!K,
        onClose: () => Q(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Delete Snapshot?" }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(Ts, { children: [
            "Are you sure you want to permanently delete snapshot",
            " ",
            /* @__PURE__ */ u.jsx("strong", { children: (K == null ? void 0 : K.name) || (K == null ? void 0 : K.id) }),
            "?"
          ] }) }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => Q(null), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "contained",
                color: "error",
                onClick: bo,
                children: "Delete Snapshot"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: H,
        onClose: () => ne(!1),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Create S3 Bucket" }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(rt, { spacing: 2, sx: { mt: 1 }, children: [
            /* @__PURE__ */ u.jsx(hn, { label: "Bucket Name", hint: "lowercase alphanumeric and hyphens", children: /* @__PURE__ */ u.jsx(
              Io,
              {
                fullWidth: !0,
                size: "small",
                placeholder: "my-app-assets",
                value: ae,
                onChange: (L) => Ee(L.target.value.toLowerCase())
              }
            ) }),
            /* @__PURE__ */ u.jsx(hn, { label: "Access Policy", children: /* @__PURE__ */ u.jsxs(
              Ii,
              {
                size: "small",
                value: Pe,
                onChange: (L) => we(L.target.value),
                fullWidth: !0,
                children: [
                  /* @__PURE__ */ u.jsx(rn, { value: "private", children: "Private (Default)" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "public-read", children: "Public Read (Static Assets)" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "authenticated-read", children: "Authenticated Read" })
                ]
              }
            ) })
          ] }) }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => ne(!1), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(at, { variant: "contained", onClick: Wr, children: "Create Bucket" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: !!le,
        onClose: () => Ne(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Delete Bucket?" }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(Ts, { children: [
            "Are you sure you want to permanently delete bucket",
            " ",
            /* @__PURE__ */ u.jsx("strong", { children: le == null ? void 0 : le.name }),
            " and all its objects?"
          ] }) }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => Ne(null), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(at, { variant: "contained", color: "error", onClick: Se, children: "Delete Bucket" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: Ve,
        onClose: () => Re(!1),
        maxWidth: "sm",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Set Automated Backup Schedule" }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(rt, { spacing: 2, sx: { mt: 1 }, children: [
            /* @__PURE__ */ u.jsx(hn, { label: "Schedule Name", hint: "alphanumeric identifier", children: /* @__PURE__ */ u.jsx(
              Io,
              {
                fullWidth: !0,
                size: "small",
                placeholder: "daily-full-backup",
                value: Oe,
                onChange: (L) => ye(L.target.value)
              }
            ) }),
            /* @__PURE__ */ u.jsx(hn, { label: "Frequency Preset", children: /* @__PURE__ */ u.jsxs(
              Ii,
              {
                size: "small",
                value: Be,
                onChange: (L) => {
                  const he = L.target.value;
                  Ke(he), he === "daily" && Xe("0 2 * * *"), he === "weekly" && Xe("0 3 * * 0"), he === "monthly" && Xe("0 4 1 * *");
                },
                fullWidth: !0,
                children: [
                  /* @__PURE__ */ u.jsx(rn, { value: "daily", children: "Daily at 02:00 UTC (0 2 * * *)" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "weekly", children: "Weekly on Sunday at 03:00 UTC (0 3 * * 0)" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "monthly", children: "Monthly on 1st at 04:00 UTC (0 4 1 * *)" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "custom", children: "Custom Cron Expression" })
                ]
              }
            ) }),
            Be === "custom" && /* @__PURE__ */ u.jsx(hn, { label: "Cron Expression", hint: "minute hour day month weekday", children: /* @__PURE__ */ u.jsx(
              Io,
              {
                fullWidth: !0,
                size: "small",
                value: ze,
                onChange: (L) => Xe(L.target.value),
                placeholder: "0 2 * * *",
                sx: { fontFamily: vt }
              }
            ) }),
            /* @__PURE__ */ u.jsx(hn, { label: "Backup Targets", children: /* @__PURE__ */ u.jsxs(
              Ii,
              {
                size: "small",
                value: ie,
                onChange: (L) => ke(L.target.value),
                fullWidth: !0,
                children: [
                  /* @__PURE__ */ u.jsx(rn, { value: "all", children: "All Components (Websites, Databases, Configs)" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "websites", children: "Websites Only" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "databases", children: "Databases Only" }),
                  /* @__PURE__ */ u.jsx(rn, { value: "configs", children: "Configurations Only" })
                ]
              }
            ) }),
            /* @__PURE__ */ u.jsx(hn, { label: "Retention Period (Days)", hint: "Automatically prune older snapshots", children: /* @__PURE__ */ u.jsx(
              Io,
              {
                type: "number",
                fullWidth: !0,
                size: "small",
                value: We,
                onChange: (L) => it(parseInt(L.target.value, 10) || 7)
              }
            ) }),
            /* @__PURE__ */ u.jsx(hn, { label: "Replication Destination", children: /* @__PURE__ */ u.jsxs(
              vy,
              {
                row: !0,
                value: Fe,
                onChange: (L) => Te(L.target.value),
                children: [
                  /* @__PURE__ */ u.jsx(cr, { value: "local", control: /* @__PURE__ */ u.jsx(ci, { size: "small" }), label: "Local Storage" }),
                  /* @__PURE__ */ u.jsx(cr, { value: "s3", control: /* @__PURE__ */ u.jsx(ci, { size: "small" }), label: "AWS S3" }),
                  /* @__PURE__ */ u.jsx(cr, { value: "r2", control: /* @__PURE__ */ u.jsx(ci, { size: "small" }), label: "Cloudflare R2" })
                ]
              }
            ) }),
            /* @__PURE__ */ u.jsx(hn, { label: "Schedule State", children: /* @__PURE__ */ u.jsx(
              cr,
              {
                control: /* @__PURE__ */ u.jsx(
                  ml,
                  {
                    checked: Ue,
                    onChange: (L) => bt(L.target.checked)
                  }
                ),
                label: "Enabled (Active cron execution)"
              }
            ) })
          ] }) }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => Re(!1), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(at, { variant: "contained", onClick: Qe, children: "Save Schedule" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsxs(
      To,
      {
        open: !!Me,
        onClose: () => Je(null),
        maxWidth: "xs",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ u.jsx(Po, { children: "Delete Schedule?" }),
          /* @__PURE__ */ u.jsx(Eo, { children: /* @__PURE__ */ u.jsxs(Ts, { children: [
            "Are you sure you want to delete schedule",
            " ",
            /* @__PURE__ */ u.jsx("strong", { children: Me == null ? void 0 : Me.name }),
            "?"
          ] }) }),
          /* @__PURE__ */ u.jsxs(Ro, { sx: { px: 3, pb: 2 }, children: [
            /* @__PURE__ */ u.jsx(at, { onClick: () => Je(null), children: "Cancel" }),
            /* @__PURE__ */ u.jsx(
              at,
              {
                variant: "contained",
                color: "error",
                onClick: Qt,
                children: "Delete"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(
      oM,
      {
        open: !!a,
        autoHideDuration: 4e3,
        onClose: () => l(null),
        message: a
      }
    )
  ] });
}
let Pc = null;
function h4(e, t) {
  Pc = e1(e), Pc.render(
    /* @__PURE__ */ u.jsx(g.StrictMode, { children: /* @__PURE__ */ u.jsx(p4, { ctx: t }) })
  );
}
function g4() {
  const e = Pc;
  Pc = null, e && queueMicrotask(() => e.unmount());
}
const v4 = { mount: h4, unmount: g4 };
export {
  v4 as default,
  h4 as mount,
  g4 as unmount
};
//# sourceMappingURL=main.js.map
