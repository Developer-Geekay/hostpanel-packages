var ax = Object.defineProperty;
var cx = (e, t, n) => t in e ? ax(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ui = (e, t, n) => cx(e, typeof t != "symbol" ? t + "" : t, n);
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
function dx(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ny = { exports: {} }, Ja = {}, ry = { exports: {} }, Me = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tl = Symbol.for("react.element"), fx = Symbol.for("react.portal"), px = Symbol.for("react.fragment"), mx = Symbol.for("react.strict_mode"), hx = Symbol.for("react.profiler"), gx = Symbol.for("react.provider"), yx = Symbol.for("react.context"), vx = Symbol.for("react.forward_ref"), xx = Symbol.for("react.suspense"), bx = Symbol.for("react.memo"), Sx = Symbol.for("react.lazy"), am = Symbol.iterator;
function wx(e) {
  return e === null || typeof e != "object" ? null : (e = am && e[am] || e["@@iterator"], typeof e == "function" ? e : null);
}
var oy = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, iy = Object.assign, sy = {};
function Li(e, t, n) {
  this.props = e, this.context = t, this.refs = sy, this.updater = n || oy;
}
Li.prototype.isReactComponent = {};
Li.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Li.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ly() {
}
ly.prototype = Li.prototype;
function Cf(e, t, n) {
  this.props = e, this.context = t, this.refs = sy, this.updater = n || oy;
}
var kf = Cf.prototype = new ly();
kf.constructor = Cf;
iy(kf, Li.prototype);
kf.isPureReactComponent = !0;
var cm = Array.isArray, ay = Object.prototype.hasOwnProperty, Tf = { current: null }, cy = { key: !0, ref: !0, __self: !0, __source: !0 };
function uy(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) ay.call(t, r) && !cy.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: tl, type: e, key: i, ref: s, props: o, _owner: Tf.current };
}
function Cx(e, t) {
  return { $$typeof: tl, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ef(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tl;
}
function kx(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var um = /\/+/g;
function fu(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? kx("" + e.key) : t.toString(36);
}
function Gl(e, t, n, r, o) {
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
        case tl:
        case fx:
          s = !0;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + fu(s, 0) : r, cm(o) ? (n = "", e != null && (n = e.replace(um, "$&/") + "/"), Gl(o, t, n, "", function(c) {
    return c;
  })) : o != null && (Ef(o) && (o = Cx(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(um, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", cm(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + fu(i, l);
    s += Gl(i, t, n, a, o);
  }
  else if (a = wx(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + fu(i, l++), s += Gl(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function gl(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Gl(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Tx(e) {
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
var Jt = { current: null }, Xl = { transition: null }, Ex = { ReactCurrentDispatcher: Jt, ReactCurrentBatchConfig: Xl, ReactCurrentOwner: Tf };
function dy() {
  throw Error("act(...) is not supported in production builds of React.");
}
Me.Children = { map: gl, forEach: function(e, t, n) {
  gl(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return gl(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return gl(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Ef(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Me.Component = Li;
Me.Fragment = px;
Me.Profiler = hx;
Me.PureComponent = Cf;
Me.StrictMode = mx;
Me.Suspense = xx;
Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ex;
Me.act = dy;
Me.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = iy({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = Tf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) ay.call(t, a) && !cy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  return { $$typeof: tl, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Me.createContext = function(e) {
  return e = { $$typeof: yx, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: gx, _context: e }, e.Consumer = e;
};
Me.createElement = uy;
Me.createFactory = function(e) {
  var t = uy.bind(null, e);
  return t.type = e, t;
};
Me.createRef = function() {
  return { current: null };
};
Me.forwardRef = function(e) {
  return { $$typeof: vx, render: e };
};
Me.isValidElement = Ef;
Me.lazy = function(e) {
  return { $$typeof: Sx, _payload: { _status: -1, _result: e }, _init: Tx };
};
Me.memo = function(e, t) {
  return { $$typeof: bx, type: e, compare: t === void 0 ? null : t };
};
Me.startTransition = function(e) {
  var t = Xl.transition;
  Xl.transition = {};
  try {
    e();
  } finally {
    Xl.transition = t;
  }
};
Me.unstable_act = dy;
Me.useCallback = function(e, t) {
  return Jt.current.useCallback(e, t);
};
Me.useContext = function(e) {
  return Jt.current.useContext(e);
};
Me.useDebugValue = function() {
};
Me.useDeferredValue = function(e) {
  return Jt.current.useDeferredValue(e);
};
Me.useEffect = function(e, t) {
  return Jt.current.useEffect(e, t);
};
Me.useId = function() {
  return Jt.current.useId();
};
Me.useImperativeHandle = function(e, t, n) {
  return Jt.current.useImperativeHandle(e, t, n);
};
Me.useInsertionEffect = function(e, t) {
  return Jt.current.useInsertionEffect(e, t);
};
Me.useLayoutEffect = function(e, t) {
  return Jt.current.useLayoutEffect(e, t);
};
Me.useMemo = function(e, t) {
  return Jt.current.useMemo(e, t);
};
Me.useReducer = function(e, t, n) {
  return Jt.current.useReducer(e, t, n);
};
Me.useRef = function(e) {
  return Jt.current.useRef(e);
};
Me.useState = function(e) {
  return Jt.current.useState(e);
};
Me.useSyncExternalStore = function(e, t, n) {
  return Jt.current.useSyncExternalStore(e, t, n);
};
Me.useTransition = function() {
  return Jt.current.useTransition();
};
Me.version = "18.3.1";
ry.exports = Me;
var h = ry.exports;
const fy = /* @__PURE__ */ dx(h), ma = /* @__PURE__ */ ux({
  __proto__: null,
  default: fy
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
var Rx = h, Px = Symbol.for("react.element"), Ix = Symbol.for("react.fragment"), Mx = Object.prototype.hasOwnProperty, $x = Rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, jx = { key: !0, ref: !0, __self: !0, __source: !0 };
function py(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Mx.call(t, r) && !jx.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Px, type: e, key: i, ref: s, props: o, _owner: $x.current };
}
Ja.Fragment = Ix;
Ja.jsx = py;
Ja.jsxs = py;
ny.exports = Ja;
var u = ny.exports, my = { exports: {} }, bn = {}, hy = { exports: {} }, gy = {};
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
  function t(j, z) {
    var F = j.length;
    j.push(z);
    e: for (; 0 < F; ) {
      var V = F - 1 >>> 1, D = j[V];
      if (0 < o(D, z)) j[V] = z, j[F] = D, F = V;
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var z = j[0], F = j.pop();
    if (F !== z) {
      j[0] = F;
      e: for (var V = 0, D = j.length, q = D >>> 1; V < q; ) {
        var Y = 2 * (V + 1) - 1, H = j[Y], K = Y + 1, X = j[K];
        if (0 > o(H, F)) K < D && 0 > o(X, H) ? (j[V] = X, j[K] = F, V = K) : (j[V] = H, j[Y] = F, V = Y);
        else if (K < D && 0 > o(X, F)) j[V] = X, j[K] = F, V = K;
        else break e;
      }
    }
    return z;
  }
  function o(j, z) {
    var F = j.sortIndex - z.sortIndex;
    return F !== 0 ? F : j.id - z.id;
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
  var a = [], c = [], d = 1, p = null, v = 3, f = !1, b = !1, S = !1, C = typeof setTimeout == "function" ? setTimeout : null, x = typeof clearTimeout == "function" ? clearTimeout : null, m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(j) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= j) r(c), z.sortIndex = z.expirationTime, t(a, z);
      else break;
      z = n(c);
    }
  }
  function w(j) {
    if (S = !1, y(j), !b) if (n(a) !== null) b = !0, A(T);
    else {
      var z = n(c);
      z !== null && N(w, z.startTime - j);
    }
  }
  function T(j, z) {
    b = !1, S && (S = !1, x(E), E = -1), f = !0;
    var F = v;
    try {
      for (y(z), p = n(a); p !== null && (!(p.expirationTime > z) || j && !M()); ) {
        var V = p.callback;
        if (typeof V == "function") {
          p.callback = null, v = p.priorityLevel;
          var D = V(p.expirationTime <= z);
          z = e.unstable_now(), typeof D == "function" ? p.callback = D : p === n(a) && r(a), y(z);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var q = !0;
      else {
        var Y = n(c);
        Y !== null && N(w, Y.startTime - z), q = !1;
      }
      return q;
    } finally {
      p = null, v = F, f = !1;
    }
  }
  var k = !1, R = null, E = -1, O = 5, L = -1;
  function M() {
    return !(e.unstable_now() - L < O);
  }
  function g() {
    if (R !== null) {
      var j = e.unstable_now();
      L = j;
      var z = !0;
      try {
        z = R(!0, j);
      } finally {
        z ? I() : (k = !1, R = null);
      }
    } else k = !1;
  }
  var I;
  if (typeof m == "function") I = function() {
    m(g);
  };
  else if (typeof MessageChannel < "u") {
    var P = new MessageChannel(), $ = P.port2;
    P.port1.onmessage = g, I = function() {
      $.postMessage(null);
    };
  } else I = function() {
    C(g, 0);
  };
  function A(j) {
    R = j, k || (k = !0, I());
  }
  function N(j, z) {
    E = C(function() {
      j(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
    j.callback = null;
  }, e.unstable_continueExecution = function() {
    b || f || (b = !0, A(T));
  }, e.unstable_forceFrameRate = function(j) {
    0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < j ? Math.floor(1e3 / j) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return v;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(j) {
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
      return j();
    } finally {
      v = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(j, z) {
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
    var F = v;
    v = j;
    try {
      return z();
    } finally {
      v = F;
    }
  }, e.unstable_scheduleCallback = function(j, z, F) {
    var V = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? V + F : V) : F = V, j) {
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
    return D = F + D, j = { id: d++, callback: z, priorityLevel: j, startTime: F, expirationTime: D, sortIndex: -1 }, F > V ? (j.sortIndex = F, t(c, j), n(a) === null && j === n(c) && (S ? (x(E), E = -1) : S = !0, N(w, F - V))) : (j.sortIndex = D, t(a, j), b || f || (b = !0, A(T))), j;
  }, e.unstable_shouldYield = M, e.unstable_wrapCallback = function(j) {
    var z = v;
    return function() {
      var F = v;
      v = z;
      try {
        return j.apply(this, arguments);
      } finally {
        v = F;
      }
    };
  };
})(gy);
hy.exports = gy;
var Ox = hy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ax = h, vn = Ox;
function G(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var yy = /* @__PURE__ */ new Set(), Is = {};
function Lo(e, t) {
  Si(e, t), Si(e + "Capture", t);
}
function Si(e, t) {
  for (Is[e] = t, e = 0; e < t.length; e++) yy.add(t[e]);
}
var kr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rd = Object.prototype.hasOwnProperty, Lx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, dm = {}, fm = {};
function Nx(e) {
  return rd.call(fm, e) ? !0 : rd.call(dm, e) ? !1 : Lx.test(e) ? fm[e] = !0 : (dm[e] = !0, !1);
}
function Bx(e, t, n, r) {
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
  if (t === null || typeof t > "u" || Bx(e, t, n, r)) return !0;
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
function en(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var Ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Ft[e] = new en(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Ft[t] = new en(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Ft[e] = new en(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Ft[e] = new en(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Ft[e] = new en(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Ft[e] = new en(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Ft[e] = new en(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Ft[e] = new en(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Ft[e] = new en(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Rf = /[\-:]([a-z])/g;
function Pf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Rf,
    Pf
  );
  Ft[t] = new en(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Rf, Pf);
  Ft[t] = new en(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Rf, Pf);
  Ft[t] = new en(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Ft[e] = new en(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ft.xlinkHref = new en("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Ft[e] = new en(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function If(e, t, n, r) {
  var o = Ft.hasOwnProperty(t) ? Ft[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (zx(t, n, o, r) && (n = null), r || o === null ? Nx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $r = Ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yl = Symbol.for("react.element"), Jo = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), Mf = Symbol.for("react.strict_mode"), od = Symbol.for("react.profiler"), vy = Symbol.for("react.provider"), xy = Symbol.for("react.context"), $f = Symbol.for("react.forward_ref"), id = Symbol.for("react.suspense"), sd = Symbol.for("react.suspense_list"), jf = Symbol.for("react.memo"), Nr = Symbol.for("react.lazy"), by = Symbol.for("react.offscreen"), pm = Symbol.iterator;
function Hi(e) {
  return e === null || typeof e != "object" ? null : (e = pm && e[pm] || e["@@iterator"], typeof e == "function" ? e : null);
}
var gt = Object.assign, pu;
function ss(e) {
  if (pu === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    pu = t && t[1] || "";
  }
  return `
` + pu + e;
}
var mu = !1;
function hu(e, t) {
  if (!e || mu) return "";
  mu = !0;
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
    mu = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? ss(e) : "";
}
function _x(e) {
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
      return e = hu(e.type, !1), e;
    case 11:
      return e = hu(e.type.render, !1), e;
    case 1:
      return e = hu(e.type, !0), e;
    default:
      return "";
  }
}
function ld(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ei:
      return "Fragment";
    case Jo:
      return "Portal";
    case od:
      return "Profiler";
    case Mf:
      return "StrictMode";
    case id:
      return "Suspense";
    case sd:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case xy:
      return (e.displayName || "Context") + ".Consumer";
    case vy:
      return (e._context.displayName || "Context") + ".Provider";
    case $f:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case jf:
      return t = e.displayName || null, t !== null ? t : ld(e.type) || "Memo";
    case Nr:
      t = e._payload, e = e._init;
      try {
        return ld(e(t));
      } catch {
      }
  }
  return null;
}
function Fx(e) {
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
      return ld(t);
    case 8:
      return t === Mf ? "StrictMode" : "Mode";
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
function qr(e) {
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
function Dx(e) {
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
function vl(e) {
  e._valueTracker || (e._valueTracker = Dx(e));
}
function wy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Sy(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ha(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ad(e, t) {
  var n = t.checked;
  return gt({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function mm(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qr(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Cy(e, t) {
  t = t.checked, t != null && If(e, "checked", t, !1);
}
function cd(e, t) {
  Cy(e, t);
  var n = qr(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? ud(e, t.type, n) : t.hasOwnProperty("defaultValue") && ud(e, t.type, qr(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function hm(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function ud(e, t, n) {
  (t !== "number" || ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ls = Array.isArray;
function fi(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function dd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(G(91));
  return gt({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function gm(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(G(92));
      if (ls(n)) {
        if (1 < n.length) throw Error(G(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qr(n) };
}
function ky(e, t) {
  var n = qr(t.value), r = qr(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ym(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ty(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ty(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xl, Ey = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xl = xl || document.createElement("div"), xl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xl.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
var ps = {
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
}, Wx = ["Webkit", "ms", "Moz", "O"];
Object.keys(ps).forEach(function(e) {
  Wx.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ps[t] = ps[e];
  });
});
function Ry(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ps.hasOwnProperty(e) && ps[e] ? ("" + t).trim() : t + "px";
}
function Py(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = Ry(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Ux = gt({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function pd(e, t) {
  if (t) {
    if (Ux[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(G(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(G(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(G(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(G(62));
  }
}
function md(e, t) {
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
var hd = null;
function Of(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var gd = null, pi = null, mi = null;
function vm(e) {
  if (e = ol(e)) {
    if (typeof gd != "function") throw Error(G(280));
    var t = e.stateNode;
    t && (t = oc(t), gd(e.stateNode, e.type, t));
  }
}
function Iy(e) {
  pi ? mi ? mi.push(e) : mi = [e] : pi = e;
}
function My() {
  if (pi) {
    var e = pi, t = mi;
    if (mi = pi = null, vm(e), t) for (e = 0; e < t.length; e++) vm(t[e]);
  }
}
function $y(e, t) {
  return e(t);
}
function jy() {
}
var gu = !1;
function Oy(e, t, n) {
  if (gu) return e(t, n);
  gu = !0;
  try {
    return $y(e, t, n);
  } finally {
    gu = !1, (pi !== null || mi !== null) && (jy(), My());
  }
}
function $s(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oc(n);
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
var yd = !1;
if (kr) try {
  var Vi = {};
  Object.defineProperty(Vi, "passive", { get: function() {
    yd = !0;
  } }), window.addEventListener("test", Vi, Vi), window.removeEventListener("test", Vi, Vi);
} catch {
  yd = !1;
}
function Hx(e, t, n, r, o, i, s, l, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var ms = !1, ga = null, ya = !1, vd = null, Vx = { onError: function(e) {
  ms = !0, ga = e;
} };
function Kx(e, t, n, r, o, i, s, l, a) {
  ms = !1, ga = null, Hx.apply(Vx, arguments);
}
function Yx(e, t, n, r, o, i, s, l, a) {
  if (Kx.apply(this, arguments), ms) {
    if (ms) {
      var c = ga;
      ms = !1, ga = null;
    } else throw Error(G(198));
    ya || (ya = !0, vd = c);
  }
}
function No(e) {
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
function Ay(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function xm(e) {
  if (No(e) !== e) throw Error(G(188));
}
function Gx(e) {
  var t = e.alternate;
  if (!t) {
    if (t = No(e), t === null) throw Error(G(188));
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
function Ly(e) {
  return e = Gx(e), e !== null ? Ny(e) : null;
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
var By = vn.unstable_scheduleCallback, bm = vn.unstable_cancelCallback, Xx = vn.unstable_shouldYield, Qx = vn.unstable_requestPaint, wt = vn.unstable_now, qx = vn.unstable_getCurrentPriorityLevel, Af = vn.unstable_ImmediatePriority, zy = vn.unstable_UserBlockingPriority, va = vn.unstable_NormalPriority, Zx = vn.unstable_LowPriority, _y = vn.unstable_IdlePriority, ec = null, sr = null;
function Jx(e) {
  if (sr && typeof sr.onCommitFiberRoot == "function") try {
    sr.onCommitFiberRoot(ec, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Un = Math.clz32 ? Math.clz32 : nb, eb = Math.log, tb = Math.LN2;
function nb(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (eb(e) / tb | 0) | 0;
}
var bl = 64, Sl = 4194304;
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
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Un(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function rb(e, t) {
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
function ob(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - Un(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = rb(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function xd(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Fy() {
  var e = bl;
  return bl <<= 1, !(bl & 4194240) && (bl = 64), e;
}
function yu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nl(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Un(t), e[t] = n;
}
function ib(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - Un(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function Lf(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Un(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var Ge = 0;
function Dy(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Wy, Nf, Uy, Hy, Vy, bd = !1, wl = [], Wr = null, Ur = null, Hr = null, js = /* @__PURE__ */ new Map(), Os = /* @__PURE__ */ new Map(), zr = [], sb = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sm(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wr = null;
      break;
    case "dragenter":
    case "dragleave":
      Ur = null;
      break;
    case "mouseover":
    case "mouseout":
      Hr = null;
      break;
    case "pointerover":
    case "pointerout":
      js.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Os.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ol(t), t !== null && Nf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function lb(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Wr = Ki(Wr, e, t, n, r, o), !0;
    case "dragenter":
      return Ur = Ki(Ur, e, t, n, r, o), !0;
    case "mouseover":
      return Hr = Ki(Hr, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return js.set(i, Ki(js.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Os.set(i, Ki(Os.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Ky(e) {
  var t = xo(e.target);
  if (t !== null) {
    var n = No(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ay(n), t !== null) {
          e.blockedOn = t, Vy(e.priority, function() {
            Uy(n);
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
function Ql(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Sd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      hd = r, n.target.dispatchEvent(r), hd = null;
    } else return t = ol(n), t !== null && Nf(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wm(e, t, n) {
  Ql(e) && n.delete(t);
}
function ab() {
  bd = !1, Wr !== null && Ql(Wr) && (Wr = null), Ur !== null && Ql(Ur) && (Ur = null), Hr !== null && Ql(Hr) && (Hr = null), js.forEach(wm), Os.forEach(wm);
}
function Yi(e, t) {
  e.blockedOn === t && (e.blockedOn = null, bd || (bd = !0, vn.unstable_scheduleCallback(vn.unstable_NormalPriority, ab)));
}
function As(e) {
  function t(o) {
    return Yi(o, e);
  }
  if (0 < wl.length) {
    Yi(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Wr !== null && Yi(Wr, e), Ur !== null && Yi(Ur, e), Hr !== null && Yi(Hr, e), js.forEach(t), Os.forEach(t), n = 0; n < zr.length; n++) r = zr[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zr.length && (n = zr[0], n.blockedOn === null); ) Ky(n), n.blockedOn === null && zr.shift();
}
var hi = $r.ReactCurrentBatchConfig, ba = !0;
function cb(e, t, n, r) {
  var o = Ge, i = hi.transition;
  hi.transition = null;
  try {
    Ge = 1, Bf(e, t, n, r);
  } finally {
    Ge = o, hi.transition = i;
  }
}
function ub(e, t, n, r) {
  var o = Ge, i = hi.transition;
  hi.transition = null;
  try {
    Ge = 4, Bf(e, t, n, r);
  } finally {
    Ge = o, hi.transition = i;
  }
}
function Bf(e, t, n, r) {
  if (ba) {
    var o = Sd(e, t, n, r);
    if (o === null) Ru(e, t, r, Sa, n), Sm(e, r);
    else if (lb(o, e, t, n, r)) r.stopPropagation();
    else if (Sm(e, r), t & 4 && -1 < sb.indexOf(e)) {
      for (; o !== null; ) {
        var i = ol(o);
        if (i !== null && Wy(i), i = Sd(e, t, n, r), i === null && Ru(e, t, r, Sa, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ru(e, t, r, null, n);
  }
}
var Sa = null;
function Sd(e, t, n, r) {
  if (Sa = null, e = Of(r), e = xo(e), e !== null) if (t = No(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ay(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Sa = e, null;
}
function Yy(e) {
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
      switch (qx()) {
        case Af:
          return 1;
        case zy:
          return 4;
        case va:
        case Zx:
          return 16;
        case _y:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Fr = null, zf = null, ql = null;
function Gy() {
  if (ql) return ql;
  var e, t = zf, n = t.length, r, o = "value" in Fr ? Fr.value : Fr.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return ql = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Zl(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Cl() {
  return !0;
}
function Cm() {
  return !1;
}
function Sn(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Cl : Cm, this.isPropagationStopped = Cm, this;
  }
  return gt(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cl);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cl);
  }, persist: function() {
  }, isPersistent: Cl }), t;
}
var Ni = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, _f = Sn(Ni), rl = gt({}, Ni, { view: 0, detail: 0 }), db = Sn(rl), vu, xu, Gi, tc = gt({}, rl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (vu = e.screenX - Gi.screenX, xu = e.screenY - Gi.screenY) : xu = vu = 0, Gi = e), vu);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : xu;
} }), km = Sn(tc), fb = gt({}, tc, { dataTransfer: 0 }), pb = Sn(fb), mb = gt({}, rl, { relatedTarget: 0 }), bu = Sn(mb), hb = gt({}, Ni, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gb = Sn(hb), yb = gt({}, Ni, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), vb = Sn(yb), xb = gt({}, Ni, { data: 0 }), Tm = Sn(xb), bb = {
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
}, Sb = {
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
}, wb = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Cb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wb[e]) ? !!t[e] : !1;
}
function Ff() {
  return Cb;
}
var kb = gt({}, rl, { key: function(e) {
  if (e.key) {
    var t = bb[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Zl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Sb[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(e) {
  return e.type === "keypress" ? Zl(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Zl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Tb = Sn(kb), Eb = gt({}, tc, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Em = Sn(Eb), Rb = gt({}, rl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), Pb = Sn(Rb), Ib = gt({}, Ni, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Mb = Sn(Ib), $b = gt({}, tc, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), jb = Sn($b), Ob = [9, 13, 27, 32], Df = kr && "CompositionEvent" in window, hs = null;
kr && "documentMode" in document && (hs = document.documentMode);
var Ab = kr && "TextEvent" in window && !hs, Xy = kr && (!Df || hs && 8 < hs && 11 >= hs), Rm = " ", Pm = !1;
function Qy(e, t) {
  switch (e) {
    case "keyup":
      return Ob.indexOf(t.keyCode) !== -1;
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
function qy(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ti = !1;
function Lb(e, t) {
  switch (e) {
    case "compositionend":
      return qy(t);
    case "keypress":
      return t.which !== 32 ? null : (Pm = !0, Rm);
    case "textInput":
      return e = t.data, e === Rm && Pm ? null : e;
    default:
      return null;
  }
}
function Nb(e, t) {
  if (ti) return e === "compositionend" || !Df && Qy(e, t) ? (e = Gy(), ql = zf = Fr = null, ti = !1, e) : null;
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
      return Xy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bb = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Im(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bb[e.type] : t === "textarea";
}
function Zy(e, t, n, r) {
  Iy(r), t = wa(t, "onChange"), 0 < t.length && (n = new _f("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var gs = null, Ls = null;
function zb(e) {
  cv(e, 0);
}
function nc(e) {
  var t = oi(e);
  if (wy(t)) return e;
}
function _b(e, t) {
  if (e === "change") return t;
}
var Jy = !1;
if (kr) {
  var Su;
  if (kr) {
    var wu = "oninput" in document;
    if (!wu) {
      var Mm = document.createElement("div");
      Mm.setAttribute("oninput", "return;"), wu = typeof Mm.oninput == "function";
    }
    Su = wu;
  } else Su = !1;
  Jy = Su && (!document.documentMode || 9 < document.documentMode);
}
function $m() {
  gs && (gs.detachEvent("onpropertychange", ev), Ls = gs = null);
}
function ev(e) {
  if (e.propertyName === "value" && nc(Ls)) {
    var t = [];
    Zy(t, Ls, e, Of(e)), Oy(zb, t);
  }
}
function Fb(e, t, n) {
  e === "focusin" ? ($m(), gs = t, Ls = n, gs.attachEvent("onpropertychange", ev)) : e === "focusout" && $m();
}
function Db(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return nc(Ls);
}
function Wb(e, t) {
  if (e === "click") return nc(t);
}
function Ub(e, t) {
  if (e === "input" || e === "change") return nc(t);
}
function Hb(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Vn = typeof Object.is == "function" ? Object.is : Hb;
function Ns(e, t) {
  if (Vn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!rd.call(t, o) || !Vn(e[o], t[o])) return !1;
  }
  return !0;
}
function jm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Om(e, t) {
  var n = jm(e);
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
    n = jm(n);
  }
}
function tv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function nv() {
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
function Wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Vb(e) {
  var t = nv(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && tv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Wf(n)) {
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
var Kb = kr && "documentMode" in document && 11 >= document.documentMode, ni = null, wd = null, ys = null, Cd = !1;
function Am(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Cd || ni == null || ni !== ha(r) || (r = ni, "selectionStart" in r && Wf(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ys && Ns(ys, r) || (ys = r, r = wa(wd, "onSelect"), 0 < r.length && (t = new _f("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ni)));
}
function kl(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var ri = { animationend: kl("Animation", "AnimationEnd"), animationiteration: kl("Animation", "AnimationIteration"), animationstart: kl("Animation", "AnimationStart"), transitionend: kl("Transition", "TransitionEnd") }, Cu = {}, rv = {};
kr && (rv = document.createElement("div").style, "AnimationEvent" in window || (delete ri.animationend.animation, delete ri.animationiteration.animation, delete ri.animationstart.animation), "TransitionEvent" in window || delete ri.transitionend.transition);
function rc(e) {
  if (Cu[e]) return Cu[e];
  if (!ri[e]) return e;
  var t = ri[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in rv) return Cu[e] = t[n];
  return e;
}
var ov = rc("animationend"), iv = rc("animationiteration"), sv = rc("animationstart"), lv = rc("transitionend"), av = /* @__PURE__ */ new Map(), Lm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ro(e, t) {
  av.set(e, t), Lo(t, [e]);
}
for (var ku = 0; ku < Lm.length; ku++) {
  var Tu = Lm[ku], Yb = Tu.toLowerCase(), Gb = Tu[0].toUpperCase() + Tu.slice(1);
  ro(Yb, "on" + Gb);
}
ro(ov, "onAnimationEnd");
ro(iv, "onAnimationIteration");
ro(sv, "onAnimationStart");
ro("dblclick", "onDoubleClick");
ro("focusin", "onFocus");
ro("focusout", "onBlur");
ro(lv, "onTransitionEnd");
Si("onMouseEnter", ["mouseout", "mouseover"]);
Si("onMouseLeave", ["mouseout", "mouseover"]);
Si("onPointerEnter", ["pointerout", "pointerover"]);
Si("onPointerLeave", ["pointerout", "pointerover"]);
Lo("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lo("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lo("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lo("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lo("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var cs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xb = new Set("cancel close invalid load scroll toggle".split(" ").concat(cs));
function Nm(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Yx(r, t, void 0, e), e.currentTarget = null;
}
function cv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, c = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Nm(o, l, c), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        Nm(o, l, c), i = a;
      }
    }
  }
  if (ya) throw e = vd, ya = !1, vd = null, e;
}
function it(e, t) {
  var n = t[Pd];
  n === void 0 && (n = t[Pd] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (uv(t, e, 2, !1), n.add(r));
}
function Eu(e, t, n) {
  var r = 0;
  t && (r |= 4), uv(n, e, r, t);
}
var Tl = "_reactListening" + Math.random().toString(36).slice(2);
function Bs(e) {
  if (!e[Tl]) {
    e[Tl] = !0, yy.forEach(function(n) {
      n !== "selectionchange" && (Xb.has(n) || Eu(n, !1, e), Eu(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tl] || (t[Tl] = !0, Eu("selectionchange", !1, t));
  }
}
function uv(e, t, n, r) {
  switch (Yy(t)) {
    case 1:
      var o = cb;
      break;
    case 4:
      o = ub;
      break;
    default:
      o = Bf;
  }
  n = o.bind(null, t, n, e), o = void 0, !yd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function Ru(e, t, n, r, o) {
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
        if (s = xo(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  Oy(function() {
    var c = i, d = Of(n), p = [];
    e: {
      var v = av.get(e);
      if (v !== void 0) {
        var f = _f, b = e;
        switch (e) {
          case "keypress":
            if (Zl(n) === 0) break e;
          case "keydown":
          case "keyup":
            f = Tb;
            break;
          case "focusin":
            b = "focus", f = bu;
            break;
          case "focusout":
            b = "blur", f = bu;
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
            f = km;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            f = pb;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            f = Pb;
            break;
          case ov:
          case iv:
          case sv:
            f = gb;
            break;
          case lv:
            f = Mb;
            break;
          case "scroll":
            f = db;
            break;
          case "wheel":
            f = jb;
            break;
          case "copy":
          case "cut":
          case "paste":
            f = vb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            f = Em;
        }
        var S = (t & 4) !== 0, C = !S && e === "scroll", x = S ? v !== null ? v + "Capture" : null : v;
        S = [];
        for (var m = c, y; m !== null; ) {
          y = m;
          var w = y.stateNode;
          if (y.tag === 5 && w !== null && (y = w, x !== null && (w = $s(m, x), w != null && S.push(zs(m, w, y)))), C) break;
          m = m.return;
        }
        0 < S.length && (v = new f(v, b, null, n, d), p.push({ event: v, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (v = e === "mouseover" || e === "pointerover", f = e === "mouseout" || e === "pointerout", v && n !== hd && (b = n.relatedTarget || n.fromElement) && (xo(b) || b[Tr])) break e;
        if ((f || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, f ? (b = n.relatedTarget || n.toElement, f = c, b = b ? xo(b) : null, b !== null && (C = No(b), b !== C || b.tag !== 5 && b.tag !== 6) && (b = null)) : (f = null, b = c), f !== b)) {
          if (S = km, w = "onMouseLeave", x = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (S = Em, w = "onPointerLeave", x = "onPointerEnter", m = "pointer"), C = f == null ? v : oi(f), y = b == null ? v : oi(b), v = new S(w, m + "leave", f, n, d), v.target = C, v.relatedTarget = y, w = null, xo(d) === c && (S = new S(x, m + "enter", b, n, d), S.target = y, S.relatedTarget = C, w = S), C = w, f && b) t: {
            for (S = f, x = b, m = 0, y = S; y; y = Wo(y)) m++;
            for (y = 0, w = x; w; w = Wo(w)) y++;
            for (; 0 < m - y; ) S = Wo(S), m--;
            for (; 0 < y - m; ) x = Wo(x), y--;
            for (; m--; ) {
              if (S === x || x !== null && S === x.alternate) break t;
              S = Wo(S), x = Wo(x);
            }
            S = null;
          }
          else S = null;
          f !== null && Bm(p, v, f, S, !1), b !== null && C !== null && Bm(p, C, b, S, !0);
        }
      }
      e: {
        if (v = c ? oi(c) : window, f = v.nodeName && v.nodeName.toLowerCase(), f === "select" || f === "input" && v.type === "file") var T = _b;
        else if (Im(v)) if (Jy) T = Ub;
        else {
          T = Db;
          var k = Fb;
        }
        else (f = v.nodeName) && f.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (T = Wb);
        if (T && (T = T(e, c))) {
          Zy(p, T, n, d);
          break e;
        }
        k && k(e, v, c), e === "focusout" && (k = v._wrapperState) && k.controlled && v.type === "number" && ud(v, "number", v.value);
      }
      switch (k = c ? oi(c) : window, e) {
        case "focusin":
          (Im(k) || k.contentEditable === "true") && (ni = k, wd = c, ys = null);
          break;
        case "focusout":
          ys = wd = ni = null;
          break;
        case "mousedown":
          Cd = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Cd = !1, Am(p, n, d);
          break;
        case "selectionchange":
          if (Kb) break;
        case "keydown":
        case "keyup":
          Am(p, n, d);
      }
      var R;
      if (Df) e: {
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
      else ti ? Qy(e, n) && (E = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E && (Xy && n.locale !== "ko" && (ti || E !== "onCompositionStart" ? E === "onCompositionEnd" && ti && (R = Gy()) : (Fr = d, zf = "value" in Fr ? Fr.value : Fr.textContent, ti = !0)), k = wa(c, E), 0 < k.length && (E = new Tm(E, e, null, n, d), p.push({ event: E, listeners: k }), R ? E.data = R : (R = qy(n), R !== null && (E.data = R)))), (R = Ab ? Lb(e, n) : Nb(e, n)) && (c = wa(c, "onBeforeInput"), 0 < c.length && (d = new Tm("onBeforeInput", "beforeinput", null, n, d), p.push({ event: d, listeners: c }), d.data = R));
    }
    cv(p, t);
  });
}
function zs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = $s(e, n), i != null && r.unshift(zs(e, i, o)), i = $s(e, t), i != null && r.push(zs(e, i, o))), e = e.return;
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
function Bm(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, c = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && c !== null && (l = c, o ? (a = $s(n, i), a != null && s.unshift(zs(n, a, l))) : o || (a = $s(n, i), a != null && s.push(zs(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Qb = /\r\n?/g, qb = /\u0000|\uFFFD/g;
function zm(e) {
  return (typeof e == "string" ? e : "" + e).replace(Qb, `
`).replace(qb, "");
}
function El(e, t, n) {
  if (t = zm(t), zm(e) !== t && n) throw Error(G(425));
}
function Ca() {
}
var kd = null, Td = null;
function Ed(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Rd = typeof setTimeout == "function" ? setTimeout : void 0, Zb = typeof clearTimeout == "function" ? clearTimeout : void 0, _m = typeof Promise == "function" ? Promise : void 0, Jb = typeof queueMicrotask == "function" ? queueMicrotask : typeof _m < "u" ? function(e) {
  return _m.resolve(null).then(e).catch(eS);
} : Rd;
function eS(e) {
  setTimeout(function() {
    throw e;
  });
}
function Pu(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), As(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  As(t);
}
function Vr(e) {
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
var Bi = Math.random().toString(36).slice(2), rr = "__reactFiber$" + Bi, _s = "__reactProps$" + Bi, Tr = "__reactContainer$" + Bi, Pd = "__reactEvents$" + Bi, tS = "__reactListeners$" + Bi, nS = "__reactHandles$" + Bi;
function xo(e) {
  var t = e[rr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Tr] || n[rr]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fm(e); e !== null; ) {
        if (n = e[rr]) return n;
        e = Fm(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ol(e) {
  return e = e[rr] || e[Tr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function oi(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(G(33));
}
function oc(e) {
  return e[_s] || null;
}
var Id = [], ii = -1;
function oo(e) {
  return { current: e };
}
function lt(e) {
  0 > ii || (e.current = Id[ii], Id[ii] = null, ii--);
}
function nt(e, t) {
  ii++, Id[ii] = e.current, e.current = t;
}
var Zr = {}, Yt = oo(Zr), on = oo(!1), Ro = Zr;
function wi(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function sn(e) {
  return e = e.childContextTypes, e != null;
}
function ka() {
  lt(on), lt(Yt);
}
function Dm(e, t, n) {
  if (Yt.current !== Zr) throw Error(G(168));
  nt(Yt, t), nt(on, n);
}
function dv(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(G(108, Fx(e) || "Unknown", o));
  return gt({}, n, r);
}
function Ta(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zr, Ro = Yt.current, nt(Yt, e), nt(on, on.current), !0;
}
function Wm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(G(169));
  n ? (e = dv(e, t, Ro), r.__reactInternalMemoizedMergedChildContext = e, lt(on), lt(Yt), nt(Yt, e)) : lt(on), nt(on, n);
}
var xr = null, ic = !1, Iu = !1;
function fv(e) {
  xr === null ? xr = [e] : xr.push(e);
}
function rS(e) {
  ic = !0, fv(e);
}
function io() {
  if (!Iu && xr !== null) {
    Iu = !0;
    var e = 0, t = Ge;
    try {
      var n = xr;
      for (Ge = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      xr = null, ic = !1;
    } catch (o) {
      throw xr !== null && (xr = xr.slice(e + 1)), By(Af, io), o;
    } finally {
      Ge = t, Iu = !1;
    }
  }
  return null;
}
var si = [], li = 0, Ea = null, Ra = 0, kn = [], Tn = 0, Po = null, Sr = 1, wr = "";
function go(e, t) {
  si[li++] = Ra, si[li++] = Ea, Ea = e, Ra = t;
}
function pv(e, t, n) {
  kn[Tn++] = Sr, kn[Tn++] = wr, kn[Tn++] = Po, Po = e;
  var r = Sr;
  e = wr;
  var o = 32 - Un(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Un(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Sr = 1 << 32 - Un(t) + o | n << o | r, wr = i + e;
  } else Sr = 1 << i | n << o | r, wr = e;
}
function Uf(e) {
  e.return !== null && (go(e, 1), pv(e, 1, 0));
}
function Hf(e) {
  for (; e === Ea; ) Ea = si[--li], si[li] = null, Ra = si[--li], si[li] = null;
  for (; e === Po; ) Po = kn[--Tn], kn[Tn] = null, wr = kn[--Tn], kn[Tn] = null, Sr = kn[--Tn], kn[Tn] = null;
}
var gn = null, hn = null, ut = !1, Wn = null;
function mv(e, t) {
  var n = Pn(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Um(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, gn = e, hn = Vr(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, gn = e, hn = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Po !== null ? { id: Sr, overflow: wr } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Pn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, gn = e, hn = null, !0) : !1;
    default:
      return !1;
  }
}
function Md(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $d(e) {
  if (ut) {
    var t = hn;
    if (t) {
      var n = t;
      if (!Um(e, t)) {
        if (Md(e)) throw Error(G(418));
        t = Vr(n.nextSibling);
        var r = gn;
        t && Um(e, t) ? mv(r, n) : (e.flags = e.flags & -4097 | 2, ut = !1, gn = e);
      }
    } else {
      if (Md(e)) throw Error(G(418));
      e.flags = e.flags & -4097 | 2, ut = !1, gn = e;
    }
  }
}
function Hm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  gn = e;
}
function Rl(e) {
  if (e !== gn) return !1;
  if (!ut) return Hm(e), ut = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ed(e.type, e.memoizedProps)), t && (t = hn)) {
    if (Md(e)) throw hv(), Error(G(418));
    for (; t; ) mv(e, t), t = Vr(t.nextSibling);
  }
  if (Hm(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(G(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              hn = Vr(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      hn = null;
    }
  } else hn = gn ? Vr(e.stateNode.nextSibling) : null;
  return !0;
}
function hv() {
  for (var e = hn; e; ) e = Vr(e.nextSibling);
}
function Ci() {
  hn = gn = null, ut = !1;
}
function Vf(e) {
  Wn === null ? Wn = [e] : Wn.push(e);
}
var oS = $r.ReactCurrentBatchConfig;
function Xi(e, t, n) {
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
function Pl(e, t) {
  throw e = Object.prototype.toString.call(t), Error(G(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Vm(e) {
  var t = e._init;
  return t(e._payload);
}
function gv(e) {
  function t(x, m) {
    if (e) {
      var y = x.deletions;
      y === null ? (x.deletions = [m], x.flags |= 16) : y.push(m);
    }
  }
  function n(x, m) {
    if (!e) return null;
    for (; m !== null; ) t(x, m), m = m.sibling;
    return null;
  }
  function r(x, m) {
    for (x = /* @__PURE__ */ new Map(); m !== null; ) m.key !== null ? x.set(m.key, m) : x.set(m.index, m), m = m.sibling;
    return x;
  }
  function o(x, m) {
    return x = Xr(x, m), x.index = 0, x.sibling = null, x;
  }
  function i(x, m, y) {
    return x.index = y, e ? (y = x.alternate, y !== null ? (y = y.index, y < m ? (x.flags |= 2, m) : y) : (x.flags |= 2, m)) : (x.flags |= 1048576, m);
  }
  function s(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function l(x, m, y, w) {
    return m === null || m.tag !== 6 ? (m = Nu(y, x.mode, w), m.return = x, m) : (m = o(m, y), m.return = x, m);
  }
  function a(x, m, y, w) {
    var T = y.type;
    return T === ei ? d(x, m, y.props.children, w, y.key) : m !== null && (m.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Nr && Vm(T) === m.type) ? (w = o(m, y.props), w.ref = Xi(x, m, y), w.return = x, w) : (w = ia(y.type, y.key, y.props, null, x.mode, w), w.ref = Xi(x, m, y), w.return = x, w);
  }
  function c(x, m, y, w) {
    return m === null || m.tag !== 4 || m.stateNode.containerInfo !== y.containerInfo || m.stateNode.implementation !== y.implementation ? (m = Bu(y, x.mode, w), m.return = x, m) : (m = o(m, y.children || []), m.return = x, m);
  }
  function d(x, m, y, w, T) {
    return m === null || m.tag !== 7 ? (m = ko(y, x.mode, w, T), m.return = x, m) : (m = o(m, y), m.return = x, m);
  }
  function p(x, m, y) {
    if (typeof m == "string" && m !== "" || typeof m == "number") return m = Nu("" + m, x.mode, y), m.return = x, m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case yl:
          return y = ia(m.type, m.key, m.props, null, x.mode, y), y.ref = Xi(x, null, m), y.return = x, y;
        case Jo:
          return m = Bu(m, x.mode, y), m.return = x, m;
        case Nr:
          var w = m._init;
          return p(x, w(m._payload), y);
      }
      if (ls(m) || Hi(m)) return m = ko(m, x.mode, y, null), m.return = x, m;
      Pl(x, m);
    }
    return null;
  }
  function v(x, m, y, w) {
    var T = m !== null ? m.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return T !== null ? null : l(x, m, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yl:
          return y.key === T ? a(x, m, y, w) : null;
        case Jo:
          return y.key === T ? c(x, m, y, w) : null;
        case Nr:
          return T = y._init, v(
            x,
            m,
            T(y._payload),
            w
          );
      }
      if (ls(y) || Hi(y)) return T !== null ? null : d(x, m, y, w, null);
      Pl(x, y);
    }
    return null;
  }
  function f(x, m, y, w, T) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return x = x.get(y) || null, l(m, x, "" + w, T);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case yl:
          return x = x.get(w.key === null ? y : w.key) || null, a(m, x, w, T);
        case Jo:
          return x = x.get(w.key === null ? y : w.key) || null, c(m, x, w, T);
        case Nr:
          var k = w._init;
          return f(x, m, y, k(w._payload), T);
      }
      if (ls(w) || Hi(w)) return x = x.get(y) || null, d(m, x, w, T, null);
      Pl(m, w);
    }
    return null;
  }
  function b(x, m, y, w) {
    for (var T = null, k = null, R = m, E = m = 0, O = null; R !== null && E < y.length; E++) {
      R.index > E ? (O = R, R = null) : O = R.sibling;
      var L = v(x, R, y[E], w);
      if (L === null) {
        R === null && (R = O);
        break;
      }
      e && R && L.alternate === null && t(x, R), m = i(L, m, E), k === null ? T = L : k.sibling = L, k = L, R = O;
    }
    if (E === y.length) return n(x, R), ut && go(x, E), T;
    if (R === null) {
      for (; E < y.length; E++) R = p(x, y[E], w), R !== null && (m = i(R, m, E), k === null ? T = R : k.sibling = R, k = R);
      return ut && go(x, E), T;
    }
    for (R = r(x, R); E < y.length; E++) O = f(R, x, E, y[E], w), O !== null && (e && O.alternate !== null && R.delete(O.key === null ? E : O.key), m = i(O, m, E), k === null ? T = O : k.sibling = O, k = O);
    return e && R.forEach(function(M) {
      return t(x, M);
    }), ut && go(x, E), T;
  }
  function S(x, m, y, w) {
    var T = Hi(y);
    if (typeof T != "function") throw Error(G(150));
    if (y = T.call(y), y == null) throw Error(G(151));
    for (var k = T = null, R = m, E = m = 0, O = null, L = y.next(); R !== null && !L.done; E++, L = y.next()) {
      R.index > E ? (O = R, R = null) : O = R.sibling;
      var M = v(x, R, L.value, w);
      if (M === null) {
        R === null && (R = O);
        break;
      }
      e && R && M.alternate === null && t(x, R), m = i(M, m, E), k === null ? T = M : k.sibling = M, k = M, R = O;
    }
    if (L.done) return n(
      x,
      R
    ), ut && go(x, E), T;
    if (R === null) {
      for (; !L.done; E++, L = y.next()) L = p(x, L.value, w), L !== null && (m = i(L, m, E), k === null ? T = L : k.sibling = L, k = L);
      return ut && go(x, E), T;
    }
    for (R = r(x, R); !L.done; E++, L = y.next()) L = f(R, x, E, L.value, w), L !== null && (e && L.alternate !== null && R.delete(L.key === null ? E : L.key), m = i(L, m, E), k === null ? T = L : k.sibling = L, k = L);
    return e && R.forEach(function(g) {
      return t(x, g);
    }), ut && go(x, E), T;
  }
  function C(x, m, y, w) {
    if (typeof y == "object" && y !== null && y.type === ei && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case yl:
          e: {
            for (var T = y.key, k = m; k !== null; ) {
              if (k.key === T) {
                if (T = y.type, T === ei) {
                  if (k.tag === 7) {
                    n(x, k.sibling), m = o(k, y.props.children), m.return = x, x = m;
                    break e;
                  }
                } else if (k.elementType === T || typeof T == "object" && T !== null && T.$$typeof === Nr && Vm(T) === k.type) {
                  n(x, k.sibling), m = o(k, y.props), m.ref = Xi(x, k, y), m.return = x, x = m;
                  break e;
                }
                n(x, k);
                break;
              } else t(x, k);
              k = k.sibling;
            }
            y.type === ei ? (m = ko(y.props.children, x.mode, w, y.key), m.return = x, x = m) : (w = ia(y.type, y.key, y.props, null, x.mode, w), w.ref = Xi(x, m, y), w.return = x, x = w);
          }
          return s(x);
        case Jo:
          e: {
            for (k = y.key; m !== null; ) {
              if (m.key === k) if (m.tag === 4 && m.stateNode.containerInfo === y.containerInfo && m.stateNode.implementation === y.implementation) {
                n(x, m.sibling), m = o(m, y.children || []), m.return = x, x = m;
                break e;
              } else {
                n(x, m);
                break;
              }
              else t(x, m);
              m = m.sibling;
            }
            m = Bu(y, x.mode, w), m.return = x, x = m;
          }
          return s(x);
        case Nr:
          return k = y._init, C(x, m, k(y._payload), w);
      }
      if (ls(y)) return b(x, m, y, w);
      if (Hi(y)) return S(x, m, y, w);
      Pl(x, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, m !== null && m.tag === 6 ? (n(x, m.sibling), m = o(m, y), m.return = x, x = m) : (n(x, m), m = Nu(y, x.mode, w), m.return = x, x = m), s(x)) : n(x, m);
  }
  return C;
}
var ki = gv(!0), yv = gv(!1), Pa = oo(null), Ia = null, ai = null, Kf = null;
function Yf() {
  Kf = ai = Ia = null;
}
function Gf(e) {
  var t = Pa.current;
  lt(Pa), e._currentValue = t;
}
function jd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function gi(e, t) {
  Ia = e, Kf = ai = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (rn = !0), e.firstContext = null);
}
function $n(e) {
  var t = e._currentValue;
  if (Kf !== e) if (e = { context: e, memoizedValue: t, next: null }, ai === null) {
    if (Ia === null) throw Error(G(308));
    ai = e, Ia.dependencies = { lanes: 0, firstContext: e };
  } else ai = ai.next = e;
  return t;
}
var bo = null;
function Xf(e) {
  bo === null ? bo = [e] : bo.push(e);
}
function vv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Xf(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Er(e, r);
}
function Er(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Br = !1;
function Qf(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function xv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Cr(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Le & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Er(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Xf(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Er(e, n);
}
function Jl(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lf(e, n);
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
function Ma(e, t, n, r) {
  var o = e.updateQueue;
  Br = !1;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, c = a.next;
    a.next = null, s === null ? i = c : s.next = c, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = c : l.next = c, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var p = o.baseState;
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
          var b = e, S = l;
          switch (v = t, f = n, S.tag) {
            case 1:
              if (b = S.payload, typeof b == "function") {
                p = b.call(f, p, v);
                break e;
              }
              p = b;
              break e;
            case 3:
              b.flags = b.flags & -65537 | 128;
            case 0:
              if (b = S.payload, v = typeof b == "function" ? b.call(f, p, v) : b, v == null) break e;
              p = gt({}, p, v);
              break e;
            case 2:
              Br = !0;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, v = o.effects, v === null ? o.effects = [l] : v.push(l));
      } else f = { eventTime: f, lane: v, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (c = d = f, a = p) : d = d.next = f, s |= v;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        v = l, l = v.next, v.next = null, o.lastBaseUpdate = v, o.shared.pending = null;
      }
    } while (!0);
    if (d === null && (a = p), o.baseState = a, o.firstBaseUpdate = c, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Mo |= s, e.lanes = s, e.memoizedState = p;
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
var il = {}, lr = oo(il), Fs = oo(il), Ds = oo(il);
function So(e) {
  if (e === il) throw Error(G(174));
  return e;
}
function qf(e, t) {
  switch (nt(Ds, t), nt(Fs, e), nt(lr, il), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fd(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fd(t, e);
  }
  lt(lr), nt(lr, t);
}
function Ti() {
  lt(lr), lt(Fs), lt(Ds);
}
function bv(e) {
  So(Ds.current);
  var t = So(lr.current), n = fd(t, e.type);
  t !== n && (nt(Fs, e), nt(lr, n));
}
function Zf(e) {
  Fs.current === e && (lt(lr), lt(Fs));
}
var pt = oo(0);
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
var Mu = [];
function Jf() {
  for (var e = 0; e < Mu.length; e++) Mu[e]._workInProgressVersionPrimary = null;
  Mu.length = 0;
}
var ea = $r.ReactCurrentDispatcher, $u = $r.ReactCurrentBatchConfig, Io = 0, mt = null, Mt = null, Ot = null, ja = !1, vs = !1, Ws = 0, iS = 0;
function Wt() {
  throw Error(G(321));
}
function ep(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Vn(e[n], t[n])) return !1;
  return !0;
}
function tp(e, t, n, r, o, i) {
  if (Io = i, mt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ea.current = e === null || e.memoizedState === null ? cS : uS, e = n(r, o), vs) {
    i = 0;
    do {
      if (vs = !1, Ws = 0, 25 <= i) throw Error(G(301));
      i += 1, Ot = Mt = null, t.updateQueue = null, ea.current = dS, e = n(r, o);
    } while (vs);
  }
  if (ea.current = Oa, t = Mt !== null && Mt.next !== null, Io = 0, Ot = Mt = mt = null, ja = !1, t) throw Error(G(300));
  return e;
}
function np() {
  var e = Ws !== 0;
  return Ws = 0, e;
}
function er() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Ot === null ? mt.memoizedState = Ot = e : Ot = Ot.next = e, Ot;
}
function jn() {
  if (Mt === null) {
    var e = mt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Mt.next;
  var t = Ot === null ? mt.memoizedState : Ot.next;
  if (t !== null) Ot = t, Mt = e;
  else {
    if (e === null) throw Error(G(310));
    Mt = e, e = { memoizedState: Mt.memoizedState, baseState: Mt.baseState, baseQueue: Mt.baseQueue, queue: Mt.queue, next: null }, Ot === null ? mt.memoizedState = Ot = e : Ot = Ot.next = e;
  }
  return Ot;
}
function Us(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ju(e) {
  var t = jn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = Mt, o = r.baseQueue, i = n.pending;
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
      if ((Io & d) === d) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var p = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (l = a = p, s = r) : a = a.next = p, mt.lanes |= d, Mo |= d;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? s = r : a.next = l, Vn(r, t.memoizedState) || (rn = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, mt.lanes |= i, Mo |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ou(e) {
  var t = jn(), n = t.queue;
  if (n === null) throw Error(G(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    Vn(i, t.memoizedState) || (rn = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Sv() {
}
function wv(e, t) {
  var n = mt, r = jn(), o = t(), i = !Vn(r.memoizedState, o);
  if (i && (r.memoizedState = o, rn = !0), r = r.queue, rp(Tv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Ot !== null && Ot.memoizedState.tag & 1) {
    if (n.flags |= 2048, Hs(9, kv.bind(null, n, r, o, t), void 0, null), At === null) throw Error(G(349));
    Io & 30 || Cv(n, t, o);
  }
  return o;
}
function Cv(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function kv(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ev(t) && Rv(e);
}
function Tv(e, t, n) {
  return n(function() {
    Ev(t) && Rv(e);
  });
}
function Ev(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vn(e, n);
  } catch {
    return !0;
  }
}
function Rv(e) {
  var t = Er(e, 1);
  t !== null && Hn(t, e, 1, -1);
}
function Gm(e) {
  var t = er();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Us, lastRenderedState: e }, t.queue = e, e = e.dispatch = aS.bind(null, mt, e), [t.memoizedState, e];
}
function Hs(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = mt.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, mt.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Pv() {
  return jn().memoizedState;
}
function ta(e, t, n, r) {
  var o = er();
  mt.flags |= e, o.memoizedState = Hs(1 | t, n, void 0, r === void 0 ? null : r);
}
function sc(e, t, n, r) {
  var o = jn();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Mt !== null) {
    var s = Mt.memoizedState;
    if (i = s.destroy, r !== null && ep(r, s.deps)) {
      o.memoizedState = Hs(t, n, i, r);
      return;
    }
  }
  mt.flags |= e, o.memoizedState = Hs(1 | t, n, i, r);
}
function Xm(e, t) {
  return ta(8390656, 8, e, t);
}
function rp(e, t) {
  return sc(2048, 8, e, t);
}
function Iv(e, t) {
  return sc(4, 2, e, t);
}
function Mv(e, t) {
  return sc(4, 4, e, t);
}
function $v(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function jv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, sc(4, 4, $v.bind(null, t, e), n);
}
function op() {
}
function Ov(e, t) {
  var n = jn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ep(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Av(e, t) {
  var n = jn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ep(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Lv(e, t, n) {
  return Io & 21 ? (Vn(n, t) || (n = Fy(), mt.lanes |= n, Mo |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, rn = !0), e.memoizedState = n);
}
function sS(e, t) {
  var n = Ge;
  Ge = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = $u.transition;
  $u.transition = {};
  try {
    e(!1), t();
  } finally {
    Ge = n, $u.transition = r;
  }
}
function Nv() {
  return jn().memoizedState;
}
function lS(e, t, n) {
  var r = Gr(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Bv(e)) zv(t, n);
  else if (n = vv(e, t, n, r), n !== null) {
    var o = Zt();
    Hn(n, e, r, o), _v(n, t, r);
  }
}
function aS(e, t, n) {
  var r = Gr(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bv(e)) zv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = l, Vn(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Xf(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch {
    } finally {
    }
    n = vv(e, t, o, r), n !== null && (o = Zt(), Hn(n, e, r, o), _v(n, t, r));
  }
}
function Bv(e) {
  var t = e.alternate;
  return e === mt || t !== null && t === mt;
}
function zv(e, t) {
  vs = ja = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _v(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Lf(e, n);
  }
}
var Oa = { readContext: $n, useCallback: Wt, useContext: Wt, useEffect: Wt, useImperativeHandle: Wt, useInsertionEffect: Wt, useLayoutEffect: Wt, useMemo: Wt, useReducer: Wt, useRef: Wt, useState: Wt, useDebugValue: Wt, useDeferredValue: Wt, useTransition: Wt, useMutableSource: Wt, useSyncExternalStore: Wt, useId: Wt, unstable_isNewReconciler: !1 }, cS = { readContext: $n, useCallback: function(e, t) {
  return er().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: $n, useEffect: Xm, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ta(
    4194308,
    4,
    $v.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ta(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ta(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = er();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = er();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lS.bind(null, mt, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = er();
  return e = { current: e }, t.memoizedState = e;
}, useState: Gm, useDebugValue: op, useDeferredValue: function(e) {
  return er().memoizedState = e;
}, useTransition: function() {
  var e = Gm(!1), t = e[0];
  return e = sS.bind(null, e[1]), er().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = mt, o = er();
  if (ut) {
    if (n === void 0) throw Error(G(407));
    n = n();
  } else {
    if (n = t(), At === null) throw Error(G(349));
    Io & 30 || Cv(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, Xm(Tv.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Hs(9, kv.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = er(), t = At.identifierPrefix;
  if (ut) {
    var n = wr, r = Sr;
    n = (r & ~(1 << 32 - Un(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Ws++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = iS++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, uS = {
  readContext: $n,
  useCallback: Ov,
  useContext: $n,
  useEffect: rp,
  useImperativeHandle: jv,
  useInsertionEffect: Iv,
  useLayoutEffect: Mv,
  useMemo: Av,
  useReducer: ju,
  useRef: Pv,
  useState: function() {
    return ju(Us);
  },
  useDebugValue: op,
  useDeferredValue: function(e) {
    var t = jn();
    return Lv(t, Mt.memoizedState, e);
  },
  useTransition: function() {
    var e = ju(Us)[0], t = jn().memoizedState;
    return [e, t];
  },
  useMutableSource: Sv,
  useSyncExternalStore: wv,
  useId: Nv,
  unstable_isNewReconciler: !1
}, dS = { readContext: $n, useCallback: Ov, useContext: $n, useEffect: rp, useImperativeHandle: jv, useInsertionEffect: Iv, useLayoutEffect: Mv, useMemo: Av, useReducer: Ou, useRef: Pv, useState: function() {
  return Ou(Us);
}, useDebugValue: op, useDeferredValue: function(e) {
  var t = jn();
  return Mt === null ? t.memoizedState = e : Lv(t, Mt.memoizedState, e);
}, useTransition: function() {
  var e = Ou(Us)[0], t = jn().memoizedState;
  return [e, t];
}, useMutableSource: Sv, useSyncExternalStore: wv, useId: Nv, unstable_isNewReconciler: !1 };
function Fn(e, t) {
  if (e && e.defaultProps) {
    t = gt({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Od(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : gt({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var lc = { isMounted: function(e) {
  return (e = e._reactInternals) ? No(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Zt(), o = Gr(e), i = Cr(r, o);
  i.payload = t, n != null && (i.callback = n), t = Kr(e, i, o), t !== null && (Hn(t, e, o, r), Jl(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Zt(), o = Gr(e), i = Cr(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kr(e, i, o), t !== null && (Hn(t, e, o, r), Jl(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Zt(), r = Gr(e), o = Cr(n, r);
  o.tag = 2, t != null && (o.callback = t), t = Kr(e, o, r), t !== null && (Hn(t, e, r, n), Jl(t, e, r));
} };
function Qm(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Ns(n, r) || !Ns(o, i) : !0;
}
function Fv(e, t, n) {
  var r = !1, o = Zr, i = t.contextType;
  return typeof i == "object" && i !== null ? i = $n(i) : (o = sn(t) ? Ro : Yt.current, r = t.contextTypes, i = (r = r != null) ? wi(e, o) : Zr), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = lc, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function qm(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && lc.enqueueReplaceState(t, t.state, null);
}
function Ad(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Qf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = $n(i) : (i = sn(t) ? Ro : Yt.current, o.context = wi(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Od(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && lc.enqueueReplaceState(o, o.state, null), Ma(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ei(e, t) {
  try {
    var n = "", r = t;
    do
      n += _x(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Au(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ld(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var fS = typeof WeakMap == "function" ? WeakMap : Map;
function Dv(e, t, n) {
  n = Cr(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    La || (La = !0, Vd = r), Ld(e, t);
  }, n;
}
function Wv(e, t, n) {
  n = Cr(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Ld(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ld(e, t), typeof r != "function" && (Yr === null ? Yr = /* @__PURE__ */ new Set([this]) : Yr.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Zm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new fS();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = ES.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Cr(-1, 1), t.tag = 2, Kr(n, t, 1))), n.lanes |= 1), e);
}
var pS = $r.ReactCurrentOwner, rn = !1;
function Qt(e, t, n, r) {
  t.child = e === null ? yv(t, null, n, r) : ki(t, e.child, n, r);
}
function th(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return gi(t, o), r = tp(e, t, n, r, i, o), n = np(), e !== null && !rn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rr(e, t, o)) : (ut && n && Uf(t), t.flags |= 1, Qt(e, t, r, o), t.child);
}
function nh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !fp(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Uv(e, t, i, r, o)) : (e = ia(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ns, n(s, r) && e.ref === t.ref) return Rr(e, t, o);
  }
  return t.flags |= 1, e = Xr(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Uv(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ns(i, r) && e.ref === t.ref) if (rn = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (rn = !0);
    else return t.lanes = e.lanes, Rr(e, t, o);
  }
  return Nd(e, t, n, r, o);
}
function Hv(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, nt(ui, fn), fn |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, nt(ui, fn), fn |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, nt(ui, fn), fn |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, nt(ui, fn), fn |= r;
  return Qt(e, t, o, n), t.child;
}
function Vv(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Nd(e, t, n, r, o) {
  var i = sn(n) ? Ro : Yt.current;
  return i = wi(t, i), gi(t, o), n = tp(e, t, n, r, i, o), r = np(), e !== null && !rn ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rr(e, t, o)) : (ut && r && Uf(t), t.flags |= 1, Qt(e, t, n, o), t.child);
}
function rh(e, t, n, r, o) {
  if (sn(n)) {
    var i = !0;
    Ta(t);
  } else i = !1;
  if (gi(t, o), t.stateNode === null) na(e, t), Fv(t, n, r), Ad(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = $n(c) : (c = sn(n) ? Ro : Yt.current, c = wi(t, c));
    var d = n.getDerivedStateFromProps, p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && qm(t, s, r, c), Br = !1;
    var v = t.memoizedState;
    s.state = v, Ma(t, r, s, o), a = t.memoizedState, l !== r || v !== a || on.current || Br ? (typeof d == "function" && (Od(t, n, d, r), a = t.memoizedState), (l = Br || Qm(t, n, l, r, v, a, c)) ? (p || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, xv(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : Fn(t.type, l), s.props = c, p = t.pendingProps, v = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = $n(a) : (a = sn(n) ? Ro : Yt.current, a = wi(t, a));
    var f = n.getDerivedStateFromProps;
    (d = typeof f == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== p || v !== a) && qm(t, s, r, a), Br = !1, v = t.memoizedState, s.state = v, Ma(t, r, s, o);
    var b = t.memoizedState;
    l !== p || v !== b || on.current || Br ? (typeof f == "function" && (Od(t, n, f, r), b = t.memoizedState), (c = Br || Qm(t, n, c, r, v, b, a) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, b, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, b, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = b), s.props = r, s.state = b, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bd(e, t, n, r, i, o);
}
function Bd(e, t, n, r, o, i) {
  Vv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && Wm(t, n, !1), Rr(e, t, i);
  r = t.stateNode, pS.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = ki(t, e.child, null, i), t.child = ki(t, null, l, i)) : Qt(e, t, l, i), t.memoizedState = r.state, o && Wm(t, n, !0), t.child;
}
function Kv(e) {
  var t = e.stateNode;
  t.pendingContext ? Dm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dm(e, t.context, !1), qf(e, t.containerInfo);
}
function oh(e, t, n, r, o) {
  return Ci(), Vf(o), t.flags |= 256, Qt(e, t, n, r), t.child;
}
var zd = { dehydrated: null, treeContext: null, retryLane: 0 };
function _d(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Yv(e, t, n) {
  var r = t.pendingProps, o = pt.current, i = !1, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), nt(pt, o & 1), e === null)
    return $d(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = uc(s, r, 0, null), e = ko(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = _d(n), t.memoizedState = zd, e) : ip(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return mS(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Xr(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = Xr(l, i) : (i = ko(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? _d(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = zd, r;
  }
  return i = e.child, e = i.sibling, r = Xr(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ip(e, t) {
  return t = uc({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Il(e, t, n, r) {
  return r !== null && Vf(r), ki(t, e.child, null, n), e = ip(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function mS(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Au(Error(G(422))), Il(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = uc({ mode: "visible", children: r.children }, o, 0, null), i = ko(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && ki(t, e.child, null, s), t.child.memoizedState = _d(s), t.memoizedState = zd, i);
  if (!(t.mode & 1)) return Il(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(G(419)), r = Au(i, r, void 0), Il(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, rn || l) {
    if (r = At, r !== null) {
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
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Er(e, o), Hn(r, e, o, -1));
    }
    return dp(), r = Au(Error(G(421))), Il(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = RS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, hn = Vr(o.nextSibling), gn = t, ut = !0, Wn = null, e !== null && (kn[Tn++] = Sr, kn[Tn++] = wr, kn[Tn++] = Po, Sr = e.id, wr = e.overflow, Po = t), t = ip(t, r.children), t.flags |= 4096, t);
}
function ih(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), jd(e.return, t, n);
}
function Lu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function Gv(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Qt(e, t, r.children, n), r = pt.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (nt(pt, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && $a(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Lu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && $a(e) === null) {
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
function na(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Rr(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Mo |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(G(153));
  if (t.child !== null) {
    for (e = t.child, n = Xr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xr(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function hS(e, t, n) {
  switch (t.tag) {
    case 3:
      Kv(t), Ci();
      break;
    case 5:
      bv(t);
      break;
    case 1:
      sn(t.type) && Ta(t);
      break;
    case 4:
      qf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      nt(Pa, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (nt(pt, pt.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Yv(e, t, n) : (nt(pt, pt.current & 1), e = Rr(e, t, n), e !== null ? e.sibling : null);
      nt(pt, pt.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Gv(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), nt(pt, pt.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Hv(e, t, n);
  }
  return Rr(e, t, n);
}
var Xv, Fd, Qv, qv;
Xv = function(e, t) {
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
Fd = function() {
};
Qv = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, So(lr.current);
    var i = null;
    switch (n) {
      case "input":
        o = ad(e, o), r = ad(e, r), i = [];
        break;
      case "select":
        o = gt({}, o, { value: void 0 }), r = gt({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = dd(e, o), r = dd(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ca);
    }
    pd(n, r);
    var s;
    n = null;
    for (c in o) if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null) if (c === "style") {
      var l = o[c];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Is.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (l = o != null ? o[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null)) if (c === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Is.hasOwnProperty(c) ? (a != null && c === "onScroll" && it("scroll", e), i || l === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
qv = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qi(e, t) {
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
function Ut(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function gS(e, t, n) {
  var r = t.pendingProps;
  switch (Hf(t), t.tag) {
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
      return Ut(t), null;
    case 1:
      return sn(t.type) && ka(), Ut(t), null;
    case 3:
      return r = t.stateNode, Ti(), lt(on), lt(Yt), Jf(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Wn !== null && (Gd(Wn), Wn = null))), Fd(e, t), Ut(t), null;
    case 5:
      Zf(t);
      var o = So(Ds.current);
      if (n = t.type, e !== null && t.stateNode != null) Qv(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(G(166));
          return Ut(t), null;
        }
        if (e = So(lr.current), Rl(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[rr] = t, r[_s] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              it("cancel", r), it("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              it("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < cs.length; o++) it(cs[o], r);
              break;
            case "source":
              it("error", r);
              break;
            case "img":
            case "image":
            case "link":
              it(
                "error",
                r
              ), it("load", r);
              break;
            case "details":
              it("toggle", r);
              break;
            case "input":
              mm(r, i), it("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, it("invalid", r);
              break;
            case "textarea":
              gm(r, i), it("invalid", r);
          }
          pd(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== !0 && El(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== !0 && El(
              r.textContent,
              l,
              e
            ), o = ["children", "" + l]) : Is.hasOwnProperty(s) && l != null && s === "onScroll" && it("scroll", r);
          }
          switch (n) {
            case "input":
              vl(r), hm(r, i, !0);
              break;
            case "textarea":
              vl(r), ym(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ca);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ty(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[rr] = t, e[_s] = r, Xv(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = md(n, r), n) {
              case "dialog":
                it("cancel", e), it("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                it("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < cs.length; o++) it(cs[o], e);
                o = r;
                break;
              case "source":
                it("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                it(
                  "error",
                  e
                ), it("load", e), o = r;
                break;
              case "details":
                it("toggle", e), o = r;
                break;
              case "input":
                mm(e, r), o = ad(e, r), it("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = gt({}, r, { value: void 0 }), it("invalid", e);
                break;
              case "textarea":
                gm(e, r), o = dd(e, r), it("invalid", e);
                break;
              default:
                o = r;
            }
            pd(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? Py(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ey(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ms(e, a) : typeof a == "number" && Ms(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Is.hasOwnProperty(i) ? a != null && i === "onScroll" && it("scroll", e) : a != null && If(e, i, a, s));
            }
            switch (n) {
              case "input":
                vl(e), hm(e, r, !1);
                break;
              case "textarea":
                vl(e), ym(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qr(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? fi(e, !!r.multiple, i, !1) : r.defaultValue != null && fi(
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
      return Ut(t), null;
    case 6:
      if (e && t.stateNode != null) qv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(G(166));
        if (n = So(Ds.current), So(lr.current), Rl(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[rr] = t, (i = r.nodeValue !== n) && (e = gn, e !== null)) switch (e.tag) {
            case 3:
              El(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && El(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[rr] = t, t.stateNode = r;
      }
      return Ut(t), null;
    case 13:
      if (lt(pt), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ut && hn !== null && t.mode & 1 && !(t.flags & 128)) hv(), Ci(), t.flags |= 98560, i = !1;
        else if (i = Rl(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(G(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(G(317));
            i[rr] = t;
          } else Ci(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ut(t), i = !1;
        } else Wn !== null && (Gd(Wn), Wn = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || pt.current & 1 ? $t === 0 && ($t = 3) : dp())), t.updateQueue !== null && (t.flags |= 4), Ut(t), null);
    case 4:
      return Ti(), Fd(e, t), e === null && Bs(t.stateNode.containerInfo), Ut(t), null;
    case 10:
      return Gf(t.type._context), Ut(t), null;
    case 17:
      return sn(t.type) && ka(), Ut(t), null;
    case 19:
      if (lt(pt), i = t.memoizedState, i === null) return Ut(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) Qi(i, !1);
      else {
        if ($t !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = $a(e), s !== null) {
            for (t.flags |= 128, Qi(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return nt(pt, pt.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && wt() > Ri && (t.flags |= 128, r = !0, Qi(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = $a(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qi(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !ut) return Ut(t), null;
        } else 2 * wt() - i.renderingStartTime > Ri && n !== 1073741824 && (t.flags |= 128, r = !0, Qi(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = wt(), t.sibling = null, n = pt.current, nt(pt, r ? n & 1 | 2 : n & 1), t) : (Ut(t), null);
    case 22:
    case 23:
      return up(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? fn & 1073741824 && (Ut(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ut(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(G(156, t.tag));
}
function yS(e, t) {
  switch (Hf(t), t.tag) {
    case 1:
      return sn(t.type) && ka(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Ti(), lt(on), lt(Yt), Jf(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zf(t), null;
    case 13:
      if (lt(pt), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(G(340));
        Ci();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return lt(pt), null;
    case 4:
      return Ti(), null;
    case 10:
      return Gf(t.type._context), null;
    case 22:
    case 23:
      return up(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ml = !1, Kt = !1, vS = typeof WeakSet == "function" ? WeakSet : Set, te = null;
function ci(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    vt(e, t, r);
  }
  else n.current = null;
}
function Dd(e, t, n) {
  try {
    n();
  } catch (r) {
    vt(e, t, r);
  }
}
var sh = !1;
function xS(e, t) {
  if (kd = ba, e = nv(), Wf(e)) {
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
        var s = 0, l = -1, a = -1, c = 0, d = 0, p = e, v = null;
        t: for (; ; ) {
          for (var f; p !== n || o !== 0 && p.nodeType !== 3 || (l = s + o), p !== i || r !== 0 && p.nodeType !== 3 || (a = s + r), p.nodeType === 3 && (s += p.nodeValue.length), (f = p.firstChild) !== null; )
            v = p, p = f;
          for (; ; ) {
            if (p === e) break t;
            if (v === n && ++c === o && (l = s), v === i && ++d === r && (a = s), (f = p.nextSibling) !== null) break;
            p = v, v = p.parentNode;
          }
          p = f;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Td = { focusedElem: e, selectionRange: n }, ba = !1, te = t; te !== null; ) if (t = te, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, te = e;
  else for (; te !== null; ) {
    t = te;
    try {
      var b = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (b !== null) {
            var S = b.memoizedProps, C = b.memoizedState, x = t.stateNode, m = x.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Fn(t.type, S), C);
            x.__reactInternalSnapshotBeforeUpdate = m;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
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
      e.return = t.return, te = e;
      break;
    }
    te = t.return;
  }
  return b = sh, sh = !1, b;
}
function xs(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Dd(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function ac(e, t) {
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
function Wd(e) {
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
function Zv(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Zv(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[rr], delete t[_s], delete t[Pd], delete t[tS], delete t[nS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Jv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function lh(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Jv(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ud(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Ca));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ud(e, t, n), e = e.sibling; e !== null; ) Ud(e, t, n), e = e.sibling;
}
function Hd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Hd(e, t, n), e = e.sibling; e !== null; ) Hd(e, t, n), e = e.sibling;
}
var Nt = null, Dn = !1;
function Or(e, t, n) {
  for (n = n.child; n !== null; ) e0(e, t, n), n = n.sibling;
}
function e0(e, t, n) {
  if (sr && typeof sr.onCommitFiberUnmount == "function") try {
    sr.onCommitFiberUnmount(ec, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      Kt || ci(n, t);
    case 6:
      var r = Nt, o = Dn;
      Nt = null, Or(e, t, n), Nt = r, Dn = o, Nt !== null && (Dn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Nt.removeChild(n.stateNode));
      break;
    case 18:
      Nt !== null && (Dn ? (e = Nt, n = n.stateNode, e.nodeType === 8 ? Pu(e.parentNode, n) : e.nodeType === 1 && Pu(e, n), As(e)) : Pu(Nt, n.stateNode));
      break;
    case 4:
      r = Nt, o = Dn, Nt = n.stateNode.containerInfo, Dn = !0, Or(e, t, n), Nt = r, Dn = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Kt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Dd(n, t, s), o = o.next;
        } while (o !== r);
      }
      Or(e, t, n);
      break;
    case 1:
      if (!Kt && (ci(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        vt(n, t, l);
      }
      Or(e, t, n);
      break;
    case 21:
      Or(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Kt = (r = Kt) || n.memoizedState !== null, Or(e, t, n), Kt = r) : Or(e, t, n);
      break;
    default:
      Or(e, t, n);
  }
}
function ah(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vS()), t.forEach(function(r) {
      var o = PS.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function Bn(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            Nt = l.stateNode, Dn = !1;
            break e;
          case 3:
            Nt = l.stateNode.containerInfo, Dn = !0;
            break e;
          case 4:
            Nt = l.stateNode.containerInfo, Dn = !0;
            break e;
        }
        l = l.return;
      }
      if (Nt === null) throw Error(G(160));
      e0(i, s, o), Nt = null, Dn = !1;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (c) {
      vt(o, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) t0(t, e), t = t.sibling;
}
function t0(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Bn(t, e), Qn(e), r & 4) {
        try {
          xs(3, e, e.return), ac(3, e);
        } catch (S) {
          vt(e, e.return, S);
        }
        try {
          xs(5, e, e.return);
        } catch (S) {
          vt(e, e.return, S);
        }
      }
      break;
    case 1:
      Bn(t, e), Qn(e), r & 512 && n !== null && ci(n, n.return);
      break;
    case 5:
      if (Bn(t, e), Qn(e), r & 512 && n !== null && ci(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          Ms(o, "");
        } catch (S) {
          vt(e, e.return, S);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && Cy(o, i), md(l, s);
          var c = md(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], p = a[s + 1];
            d === "style" ? Py(o, p) : d === "dangerouslySetInnerHTML" ? Ey(o, p) : d === "children" ? Ms(o, p) : If(o, d, p, c);
          }
          switch (l) {
            case "input":
              cd(o, i);
              break;
            case "textarea":
              ky(o, i);
              break;
            case "select":
              var v = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var f = i.value;
              f != null ? fi(o, !!i.multiple, f, !1) : v !== !!i.multiple && (i.defaultValue != null ? fi(
                o,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : fi(o, !!i.multiple, i.multiple ? [] : "", !1));
          }
          o[_s] = i;
        } catch (S) {
          vt(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Bn(t, e), Qn(e), r & 4) {
        if (e.stateNode === null) throw Error(G(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (S) {
          vt(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Bn(t, e), Qn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        As(t.containerInfo);
      } catch (S) {
        vt(e, e.return, S);
      }
      break;
    case 4:
      Bn(t, e), Qn(e);
      break;
    case 13:
      Bn(t, e), Qn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (ap = wt())), r & 4 && ah(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Kt = (c = Kt) || d, Bn(t, e), Kt = c) : Bn(t, e), Qn(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1) for (te = e, d = e.child; d !== null; ) {
          for (p = te = d; te !== null; ) {
            switch (v = te, f = v.child, v.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                xs(4, v, v.return);
                break;
              case 1:
                ci(v, v.return);
                var b = v.stateNode;
                if (typeof b.componentWillUnmount == "function") {
                  r = v, n = v.return;
                  try {
                    t = r, b.props = t.memoizedProps, b.state = t.memoizedState, b.componentWillUnmount();
                  } catch (S) {
                    vt(r, n, S);
                  }
                }
                break;
              case 5:
                ci(v, v.return);
                break;
              case 22:
                if (v.memoizedState !== null) {
                  uh(p);
                  continue;
                }
            }
            f !== null ? (f.return = v, te = f) : uh(p);
          }
          d = d.sibling;
        }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                o = p.stateNode, c ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = p.stateNode, a = p.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = Ry("display", s));
              } catch (S) {
                vt(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (d === null) try {
              p.stateNode.nodeValue = c ? "" : p.memoizedProps;
            } catch (S) {
              vt(e, e.return, S);
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
      Bn(t, e), Qn(e), r & 4 && ah(e);
      break;
    case 21:
      break;
    default:
      Bn(
        t,
        e
      ), Qn(e);
  }
}
function Qn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Jv(n)) {
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
          r.flags & 32 && (Ms(o, ""), r.flags &= -33);
          var i = lh(e);
          Hd(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = lh(e);
          Ud(e, l, s);
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
function bS(e, t, n) {
  te = e, n0(e);
}
function n0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; te !== null; ) {
    var o = te, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || Ml;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Kt;
        l = Ml;
        var c = Kt;
        if (Ml = s, (Kt = a) && !c) for (te = o; te !== null; ) s = te, a = s.child, s.tag === 22 && s.memoizedState !== null ? dh(o) : a !== null ? (a.return = s, te = a) : dh(o);
        for (; i !== null; ) te = i, n0(i), i = i.sibling;
        te = o, Ml = l, Kt = c;
      }
      ch(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, te = i) : ch(e);
  }
}
function ch(e) {
  for (; te !== null; ) {
    var t = te;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Kt || ac(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Kt) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : Fn(t.type, n.memoizedProps);
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
              var c = t.alternate;
              if (c !== null) {
                var d = c.memoizedState;
                if (d !== null) {
                  var p = d.dehydrated;
                  p !== null && As(p);
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
        Kt || t.flags & 512 && Wd(t);
      } catch (v) {
        vt(t, t.return, v);
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
function uh(e) {
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
function dh(e) {
  for (; te !== null; ) {
    var t = te;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ac(4, t);
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
            Wd(t);
          } catch (a) {
            vt(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Wd(t);
          } catch (a) {
            vt(t, s, a);
          }
      }
    } catch (a) {
      vt(t, t.return, a);
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
var SS = Math.ceil, Aa = $r.ReactCurrentDispatcher, sp = $r.ReactCurrentOwner, In = $r.ReactCurrentBatchConfig, Le = 0, At = null, Pt = null, zt = 0, fn = 0, ui = oo(0), $t = 0, Vs = null, Mo = 0, cc = 0, lp = 0, bs = null, nn = null, ap = 0, Ri = 1 / 0, vr = null, La = !1, Vd = null, Yr = null, $l = !1, Dr = null, Na = 0, Ss = 0, Kd = null, ra = -1, oa = 0;
function Zt() {
  return Le & 6 ? wt() : ra !== -1 ? ra : ra = wt();
}
function Gr(e) {
  return e.mode & 1 ? Le & 2 && zt !== 0 ? zt & -zt : oS.transition !== null ? (oa === 0 && (oa = Fy()), oa) : (e = Ge, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Yy(e.type)), e) : 1;
}
function Hn(e, t, n, r) {
  if (50 < Ss) throw Ss = 0, Kd = null, Error(G(185));
  nl(e, n, r), (!(Le & 2) || e !== At) && (e === At && (!(Le & 2) && (cc |= n), $t === 4 && _r(e, zt)), ln(e, r), n === 1 && Le === 0 && !(t.mode & 1) && (Ri = wt() + 500, ic && io()));
}
function ln(e, t) {
  var n = e.callbackNode;
  ob(e, t);
  var r = xa(e, e === At ? zt : 0);
  if (r === 0) n !== null && bm(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && bm(n), t === 1) e.tag === 0 ? rS(fh.bind(null, e)) : fv(fh.bind(null, e)), Jb(function() {
      !(Le & 6) && io();
    }), n = null;
    else {
      switch (Dy(r)) {
        case 1:
          n = Af;
          break;
        case 4:
          n = zy;
          break;
        case 16:
          n = va;
          break;
        case 536870912:
          n = _y;
          break;
        default:
          n = va;
      }
      n = u0(n, r0.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function r0(e, t) {
  if (ra = -1, oa = 0, Le & 6) throw Error(G(327));
  var n = e.callbackNode;
  if (yi() && e.callbackNode !== n) return null;
  var r = xa(e, e === At ? zt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ba(e, r);
  else {
    t = r;
    var o = Le;
    Le |= 2;
    var i = i0();
    (At !== e || zt !== t) && (vr = null, Ri = wt() + 500, Co(e, t));
    do
      try {
        kS();
        break;
      } catch (l) {
        o0(e, l);
      }
    while (!0);
    Yf(), Aa.current = i, Le = o, Pt !== null ? t = 0 : (At = null, zt = 0, t = $t);
  }
  if (t !== 0) {
    if (t === 2 && (o = xd(e), o !== 0 && (r = o, t = Yd(e, o))), t === 1) throw n = Vs, Co(e, 0), _r(e, r), ln(e, wt()), n;
    if (t === 6) _r(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !wS(o) && (t = Ba(e, r), t === 2 && (i = xd(e), i !== 0 && (r = i, t = Yd(e, i))), t === 1)) throw n = Vs, Co(e, 0), _r(e, r), ln(e, wt()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(G(345));
        case 2:
          yo(e, nn, vr);
          break;
        case 3:
          if (_r(e, r), (r & 130023424) === r && (t = ap + 500 - wt(), 10 < t)) {
            if (xa(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              Zt(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = Rd(yo.bind(null, e, nn, vr), t);
            break;
          }
          yo(e, nn, vr);
          break;
        case 4:
          if (_r(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - Un(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = wt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * SS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Rd(yo.bind(null, e, nn, vr), r);
            break;
          }
          yo(e, nn, vr);
          break;
        case 5:
          yo(e, nn, vr);
          break;
        default:
          throw Error(G(329));
      }
    }
  }
  return ln(e, wt()), e.callbackNode === n ? r0.bind(null, e) : null;
}
function Yd(e, t) {
  var n = bs;
  return e.current.memoizedState.isDehydrated && (Co(e, t).flags |= 256), e = Ba(e, t), e !== 2 && (t = nn, nn = n, t !== null && Gd(t)), e;
}
function Gd(e) {
  nn === null ? nn = e : nn.push.apply(nn, e);
}
function wS(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!Vn(i(), o)) return !1;
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
function _r(e, t) {
  for (t &= ~lp, t &= ~cc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Un(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fh(e) {
  if (Le & 6) throw Error(G(327));
  yi();
  var t = xa(e, 0);
  if (!(t & 1)) return ln(e, wt()), null;
  var n = Ba(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xd(e);
    r !== 0 && (t = r, n = Yd(e, r));
  }
  if (n === 1) throw n = Vs, Co(e, 0), _r(e, t), ln(e, wt()), n;
  if (n === 6) throw Error(G(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, yo(e, nn, vr), ln(e, wt()), null;
}
function cp(e, t) {
  var n = Le;
  Le |= 1;
  try {
    return e(t);
  } finally {
    Le = n, Le === 0 && (Ri = wt() + 500, ic && io());
  }
}
function $o(e) {
  Dr !== null && Dr.tag === 0 && !(Le & 6) && yi();
  var t = Le;
  Le |= 1;
  var n = In.transition, r = Ge;
  try {
    if (In.transition = null, Ge = 1, e) return e();
  } finally {
    Ge = r, In.transition = n, Le = t, !(Le & 6) && io();
  }
}
function up() {
  fn = ui.current, lt(ui);
}
function Co(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Zb(n)), Pt !== null) for (n = Pt.return; n !== null; ) {
    var r = n;
    switch (Hf(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ka();
        break;
      case 3:
        Ti(), lt(on), lt(Yt), Jf();
        break;
      case 5:
        Zf(r);
        break;
      case 4:
        Ti();
        break;
      case 13:
        lt(pt);
        break;
      case 19:
        lt(pt);
        break;
      case 10:
        Gf(r.type._context);
        break;
      case 22:
      case 23:
        up();
    }
    n = n.return;
  }
  if (At = e, Pt = e = Xr(e.current, null), zt = fn = t, $t = 0, Vs = null, lp = cc = Mo = 0, nn = bs = null, bo !== null) {
    for (t = 0; t < bo.length; t++) if (n = bo[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    bo = null;
  }
  return e;
}
function o0(e, t) {
  do {
    var n = Pt;
    try {
      if (Yf(), ea.current = Oa, ja) {
        for (var r = mt.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        ja = !1;
      }
      if (Io = 0, Ot = Mt = mt = null, vs = !1, Ws = 0, sp.current = null, n === null || n.return === null) {
        $t = 1, Vs = t, Pt = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = zt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, d = l, p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var v = d.alternate;
            v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var f = Jm(s);
          if (f !== null) {
            f.flags &= -257, eh(f, s, l, i, t), f.mode & 1 && Zm(i, c, t), t = f, a = c;
            var b = t.updateQueue;
            if (b === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(a), t.updateQueue = S;
            } else b.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Zm(i, c, t), dp();
              break e;
            }
            a = Error(G(426));
          }
        } else if (ut && l.mode & 1) {
          var C = Jm(s);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256), eh(C, s, l, i, t), Vf(Ei(a, l));
            break e;
          }
        }
        i = a = Ei(a, l), $t !== 4 && ($t = 2), bs === null ? bs = [i] : bs.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var x = Dv(i, a, t);
              Km(i, x);
              break e;
            case 1:
              l = a;
              var m = i.type, y = i.stateNode;
              if (!(i.flags & 128) && (typeof m.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Yr === null || !Yr.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = Wv(i, l, t);
                Km(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      l0(n);
    } catch (T) {
      t = T, Pt === n && n !== null && (Pt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function i0() {
  var e = Aa.current;
  return Aa.current = Oa, e === null ? Oa : e;
}
function dp() {
  ($t === 0 || $t === 3 || $t === 2) && ($t = 4), At === null || !(Mo & 268435455) && !(cc & 268435455) || _r(At, zt);
}
function Ba(e, t) {
  var n = Le;
  Le |= 2;
  var r = i0();
  (At !== e || zt !== t) && (vr = null, Co(e, t));
  do
    try {
      CS();
      break;
    } catch (o) {
      o0(e, o);
    }
  while (!0);
  if (Yf(), Le = n, Aa.current = r, Pt !== null) throw Error(G(261));
  return At = null, zt = 0, $t;
}
function CS() {
  for (; Pt !== null; ) s0(Pt);
}
function kS() {
  for (; Pt !== null && !Xx(); ) s0(Pt);
}
function s0(e) {
  var t = c0(e.alternate, e, fn);
  e.memoizedProps = e.pendingProps, t === null ? l0(e) : Pt = t, sp.current = null;
}
function l0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = yS(n, t), n !== null) {
        n.flags &= 32767, Pt = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        $t = 6, Pt = null;
        return;
      }
    } else if (n = gS(n, t, fn), n !== null) {
      Pt = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Pt = t;
      return;
    }
    Pt = t = e;
  } while (t !== null);
  $t === 0 && ($t = 5);
}
function yo(e, t, n) {
  var r = Ge, o = In.transition;
  try {
    In.transition = null, Ge = 1, TS(e, t, n, r);
  } finally {
    In.transition = o, Ge = r;
  }
  return null;
}
function TS(e, t, n, r) {
  do
    yi();
  while (Dr !== null);
  if (Le & 6) throw Error(G(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(G(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (ib(e, i), e === At && (Pt = At = null, zt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || $l || ($l = !0, u0(va, function() {
    return yi(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = In.transition, In.transition = null;
    var s = Ge;
    Ge = 1;
    var l = Le;
    Le |= 4, sp.current = null, xS(e, n), t0(n, e), Vb(Td), ba = !!kd, Td = kd = null, e.current = n, bS(n), Qx(), Le = l, Ge = s, In.transition = i;
  } else e.current = n;
  if ($l && ($l = !1, Dr = e, Na = o), i = e.pendingLanes, i === 0 && (Yr = null), Jx(n.stateNode), ln(e, wt()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (La) throw La = !1, e = Vd, Vd = null, e;
  return Na & 1 && e.tag !== 0 && yi(), i = e.pendingLanes, i & 1 ? e === Kd ? Ss++ : (Ss = 0, Kd = e) : Ss = 0, io(), null;
}
function yi() {
  if (Dr !== null) {
    var e = Dy(Na), t = In.transition, n = Ge;
    try {
      if (In.transition = null, Ge = 16 > e ? 16 : e, Dr === null) var r = !1;
      else {
        if (e = Dr, Dr = null, Na = 0, Le & 6) throw Error(G(331));
        var o = Le;
        for (Le |= 4, te = e.current; te !== null; ) {
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
                      xs(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) p.return = d, te = p;
                  else for (; te !== null; ) {
                    d = te;
                    var v = d.sibling, f = d.return;
                    if (Zv(d), d === c) {
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
              var b = i.alternate;
              if (b !== null) {
                var S = b.child;
                if (S !== null) {
                  b.child = null;
                  do {
                    var C = S.sibling;
                    S.sibling = null, S = C;
                  } while (S !== null);
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
                xs(9, i, i.return);
            }
            var x = i.sibling;
            if (x !== null) {
              x.return = i.return, te = x;
              break e;
            }
            te = i.return;
          }
        }
        var m = e.current;
        for (te = m; te !== null; ) {
          s = te;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) y.return = s, te = y;
          else e: for (s = m; te !== null; ) {
            if (l = te, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  ac(9, l);
              }
            } catch (T) {
              vt(l, l.return, T);
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
        if (Le = o, io(), sr && typeof sr.onPostCommitFiberRoot == "function") try {
          sr.onPostCommitFiberRoot(ec, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      Ge = n, In.transition = t;
    }
  }
  return !1;
}
function ph(e, t, n) {
  t = Ei(n, t), t = Dv(e, t, 1), e = Kr(e, t, 1), t = Zt(), e !== null && (nl(e, 1, t), ln(e, t));
}
function vt(e, t, n) {
  if (e.tag === 3) ph(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ph(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Yr === null || !Yr.has(r))) {
        e = Ei(n, e), e = Wv(t, e, 1), t = Kr(t, e, 1), e = Zt(), t !== null && (nl(t, 1, e), ln(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ES(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Zt(), e.pingedLanes |= e.suspendedLanes & n, At === e && (zt & n) === n && ($t === 4 || $t === 3 && (zt & 130023424) === zt && 500 > wt() - ap ? Co(e, 0) : lp |= n), ln(e, t);
}
function a0(e, t) {
  t === 0 && (e.mode & 1 ? (t = Sl, Sl <<= 1, !(Sl & 130023424) && (Sl = 4194304)) : t = 1);
  var n = Zt();
  e = Er(e, t), e !== null && (nl(e, t, n), ln(e, n));
}
function RS(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), a0(e, n);
}
function PS(e, t) {
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
  r !== null && r.delete(t), a0(e, n);
}
var c0;
c0 = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || on.current) rn = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return rn = !1, hS(e, t, n);
    rn = !!(e.flags & 131072);
  }
  else rn = !1, ut && t.flags & 1048576 && pv(t, Ra, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      na(e, t), e = t.pendingProps;
      var o = wi(t, Yt.current);
      gi(t, n), o = tp(null, t, r, e, o, n);
      var i = np();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, sn(r) ? (i = !0, Ta(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Qf(t), o.updater = lc, t.stateNode = o, o._reactInternals = t, Ad(t, r, e, n), t = Bd(null, t, r, !0, i, n)) : (t.tag = 0, ut && i && Uf(t), Qt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (na(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = MS(r), e = Fn(r, e), o) {
          case 0:
            t = Nd(null, t, r, e, n);
            break e;
          case 1:
            t = rh(null, t, r, e, n);
            break e;
          case 11:
            t = th(null, t, r, e, n);
            break e;
          case 14:
            t = nh(null, t, r, Fn(r.type, e), n);
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
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fn(r, o), Nd(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fn(r, o), rh(e, t, r, o, n);
    case 3:
      e: {
        if (Kv(t), e === null) throw Error(G(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, xv(e, t), Ma(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Ei(Error(G(423)), t), t = oh(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Ei(Error(G(424)), t), t = oh(e, t, r, n, o);
          break e;
        } else for (hn = Vr(t.stateNode.containerInfo.firstChild), gn = t, ut = !0, Wn = null, n = yv(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Ci(), r === o) {
            t = Rr(e, t, n);
            break e;
          }
          Qt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return bv(t), e === null && $d(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, Ed(r, o) ? s = null : i !== null && Ed(r, i) && (t.flags |= 32), Vv(e, t), Qt(e, t, s, n), t.child;
    case 6:
      return e === null && $d(t), null;
    case 13:
      return Yv(e, t, n);
    case 4:
      return qf(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ki(t, null, r, n) : Qt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fn(r, o), th(e, t, r, o, n);
    case 7:
      return Qt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Qt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Qt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, nt(Pa, r._currentValue), r._currentValue = s, i !== null) if (Vn(i.value, s)) {
          if (i.children === o.children && !on.current) {
            t = Rr(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = Cr(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var d = c.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), jd(
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
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), jd(s, n, t), s = i.sibling;
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
        Qt(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, gi(t, n), o = $n(o), r = r(o), t.flags |= 1, Qt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = Fn(r, t.pendingProps), o = Fn(r.type, o), nh(e, t, r, o, n);
    case 15:
      return Uv(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Fn(r, o), na(e, t), t.tag = 1, sn(r) ? (e = !0, Ta(t)) : e = !1, gi(t, n), Fv(t, r, o), Ad(t, r, o, n), Bd(null, t, r, !0, e, n);
    case 19:
      return Gv(e, t, n);
    case 22:
      return Hv(e, t, n);
  }
  throw Error(G(156, t.tag));
};
function u0(e, t) {
  return By(e, t);
}
function IS(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Pn(e, t, n, r) {
  return new IS(e, t, n, r);
}
function fp(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function MS(e) {
  if (typeof e == "function") return fp(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === $f) return 11;
    if (e === jf) return 14;
  }
  return 2;
}
function Xr(e, t) {
  var n = e.alternate;
  return n === null ? (n = Pn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ia(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") fp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case ei:
      return ko(n.children, o, i, t);
    case Mf:
      s = 8, o |= 8;
      break;
    case od:
      return e = Pn(12, n, t, o | 2), e.elementType = od, e.lanes = i, e;
    case id:
      return e = Pn(13, n, t, o), e.elementType = id, e.lanes = i, e;
    case sd:
      return e = Pn(19, n, t, o), e.elementType = sd, e.lanes = i, e;
    case by:
      return uc(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vy:
          s = 10;
          break e;
        case xy:
          s = 9;
          break e;
        case $f:
          s = 11;
          break e;
        case jf:
          s = 14;
          break e;
        case Nr:
          s = 16, r = null;
          break e;
      }
      throw Error(G(130, e == null ? e : typeof e, ""));
  }
  return t = Pn(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function ko(e, t, n, r) {
  return e = Pn(7, e, r, t), e.lanes = n, e;
}
function uc(e, t, n, r) {
  return e = Pn(22, e, r, t), e.elementType = by, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Nu(e, t, n) {
  return e = Pn(6, e, null, t), e.lanes = n, e;
}
function Bu(e, t, n) {
  return t = Pn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function $S(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = yu(0), this.expirationTimes = yu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yu(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function pp(e, t, n, r, o, i, s, l, a) {
  return e = new $S(e, t, n, l, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Pn(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qf(i), e;
}
function jS(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jo, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function d0(e) {
  if (!e) return Zr;
  e = e._reactInternals;
  e: {
    if (No(e) !== e || e.tag !== 1) throw Error(G(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (sn(t.type)) {
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
    if (sn(n)) return dv(e, n, t);
  }
  return t;
}
function f0(e, t, n, r, o, i, s, l, a) {
  return e = pp(n, r, !0, e, o, i, s, l, a), e.context = d0(null), n = e.current, r = Zt(), o = Gr(n), i = Cr(r, o), i.callback = t ?? null, Kr(n, i, o), e.current.lanes = o, nl(e, o, r), ln(e, r), e;
}
function dc(e, t, n, r) {
  var o = t.current, i = Zt(), s = Gr(o);
  return n = d0(n), t.context === null ? t.context = n : t.pendingContext = n, t = Cr(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kr(o, t, s), e !== null && (Hn(e, o, s, i), Jl(e, o, s)), s;
}
function za(e) {
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
function mp(e, t) {
  mh(e, t), (e = e.alternate) && mh(e, t);
}
function OS() {
  return null;
}
var p0 = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function hp(e) {
  this._internalRoot = e;
}
fc.prototype.render = hp.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(G(409));
  dc(e, t, null, null);
};
fc.prototype.unmount = hp.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    $o(function() {
      dc(null, e, null, null);
    }), t[Tr] = null;
  }
};
function fc(e) {
  this._internalRoot = e;
}
fc.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hy();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zr.length && t !== 0 && t < zr[n].priority; n++) ;
    zr.splice(n, 0, e), n === 0 && Ky(e);
  }
};
function gp(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function pc(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function hh() {
}
function AS(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = za(s);
        i.call(c);
      };
    }
    var s = f0(t, r, e, 0, null, !1, !1, "", hh);
    return e._reactRootContainer = s, e[Tr] = s.current, Bs(e.nodeType === 8 ? e.parentNode : e), $o(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var c = za(a);
      l.call(c);
    };
  }
  var a = pp(e, 0, !1, null, null, !1, !1, "", hh);
  return e._reactRootContainer = a, e[Tr] = a.current, Bs(e.nodeType === 8 ? e.parentNode : e), $o(function() {
    dc(t, a, n, r);
  }), a;
}
function mc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = za(s);
        l.call(a);
      };
    }
    dc(t, s, e, o);
  } else s = AS(n, t, e, o, r);
  return za(s);
}
Wy = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = as(t.pendingLanes);
        n !== 0 && (Lf(t, n | 1), ln(t, wt()), !(Le & 6) && (Ri = wt() + 500, io()));
      }
      break;
    case 13:
      $o(function() {
        var r = Er(e, 1);
        if (r !== null) {
          var o = Zt();
          Hn(r, e, 1, o);
        }
      }), mp(e, 1);
  }
};
Nf = function(e) {
  if (e.tag === 13) {
    var t = Er(e, 134217728);
    if (t !== null) {
      var n = Zt();
      Hn(t, e, 134217728, n);
    }
    mp(e, 134217728);
  }
};
Uy = function(e) {
  if (e.tag === 13) {
    var t = Gr(e), n = Er(e, t);
    if (n !== null) {
      var r = Zt();
      Hn(n, e, t, r);
    }
    mp(e, t);
  }
};
Hy = function() {
  return Ge;
};
Vy = function(e, t) {
  var n = Ge;
  try {
    return Ge = e, t();
  } finally {
    Ge = n;
  }
};
gd = function(e, t, n) {
  switch (t) {
    case "input":
      if (cd(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = oc(r);
            if (!o) throw Error(G(90));
            wy(r), cd(r, o);
          }
        }
      }
      break;
    case "textarea":
      ky(e, n);
      break;
    case "select":
      t = n.value, t != null && fi(e, !!n.multiple, t, !1);
  }
};
$y = cp;
jy = $o;
var LS = { usingClientEntryPoint: !1, Events: [ol, oi, oc, Iy, My, cp] }, qi = { findFiberByHostInstance: xo, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, NS = { bundleType: qi.bundleType, version: qi.version, rendererPackageName: qi.rendererPackageName, rendererConfig: qi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $r.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ly(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: qi.findFiberByHostInstance || OS, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jl.isDisabled && jl.supportsFiber) try {
    ec = jl.inject(NS), sr = jl;
  } catch {
  }
}
bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = LS;
bn.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gp(t)) throw Error(G(200));
  return jS(e, t, null, n);
};
bn.createRoot = function(e, t) {
  if (!gp(e)) throw Error(G(299));
  var n = !1, r = "", o = p0;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = pp(e, 1, !1, null, null, n, !1, r, o), e[Tr] = t.current, Bs(e.nodeType === 8 ? e.parentNode : e), new hp(t);
};
bn.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(G(188)) : (e = Object.keys(e).join(","), Error(G(268, e)));
  return e = Ly(t), e = e === null ? null : e.stateNode, e;
};
bn.flushSync = function(e) {
  return $o(e);
};
bn.hydrate = function(e, t, n) {
  if (!pc(t)) throw Error(G(200));
  return mc(null, e, t, !0, n);
};
bn.hydrateRoot = function(e, t, n) {
  if (!gp(e)) throw Error(G(405));
  var r = n != null && n.hydratedSources || null, o = !1, i = "", s = p0;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = f0(t, null, e, 1, n ?? null, o, !1, i, s), e[Tr] = t.current, Bs(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
    n,
    o
  );
  return new fc(t);
};
bn.render = function(e, t, n) {
  if (!pc(t)) throw Error(G(200));
  return mc(null, e, t, !1, n);
};
bn.unmountComponentAtNode = function(e) {
  if (!pc(e)) throw Error(G(40));
  return e._reactRootContainer ? ($o(function() {
    mc(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Tr] = null;
    });
  }), !0) : !1;
};
bn.unstable_batchedUpdates = cp;
bn.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!pc(n)) throw Error(G(200));
  if (e == null || e._reactInternals === void 0) throw Error(G(38));
  return mc(e, t, n, !1, r);
};
bn.version = "18.3.1-next-f1338f8080-20240426";
function m0() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0);
    } catch (e) {
      console.error(e);
    }
}
m0(), my.exports = bn;
var h0 = my.exports, g0, gh = h0;
g0 = gh.createRoot, gh.hydrateRoot;
const Ks = {
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
}, BS = {
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
function Pr(e, ...t) {
  const n = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((r) => n.searchParams.append("args[]", r)), `Minified MUI error #${e}; visit ${n} for the full message.`;
}
const ar = "$$material";
function Xd() {
  return Xd = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Xd.apply(null, arguments);
}
function zS(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function _S(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var FS = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(_S(this));
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
}(), Ht = "-ms-", _a = "-moz-", ze = "-webkit-", y0 = "comm", yp = "rule", vp = "decl", DS = "@import", v0 = "@keyframes", WS = "@layer", US = Math.abs, hc = String.fromCharCode, HS = Object.assign;
function VS(e, t) {
  return Bt(e, 0) ^ 45 ? (((t << 2 ^ Bt(e, 0)) << 2 ^ Bt(e, 1)) << 2 ^ Bt(e, 2)) << 2 ^ Bt(e, 3) : 0;
}
function x0(e) {
  return e.trim();
}
function KS(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function _e(e, t, n) {
  return e.replace(t, n);
}
function Qd(e, t) {
  return e.indexOf(t);
}
function Bt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ys(e, t, n) {
  return e.slice(t, n);
}
function tr(e) {
  return e.length;
}
function xp(e) {
  return e.length;
}
function Ol(e, t) {
  return t.push(e), e;
}
function YS(e, t) {
  return e.map(t).join("");
}
var gc = 1, Pi = 1, b0 = 0, un = 0, Rt = 0, zi = "";
function yc(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: gc, column: Pi, length: s, return: "" };
}
function Ji(e, t) {
  return HS(yc("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function GS() {
  return Rt;
}
function XS() {
  return Rt = un > 0 ? Bt(zi, --un) : 0, Pi--, Rt === 10 && (Pi = 1, gc--), Rt;
}
function yn() {
  return Rt = un < b0 ? Bt(zi, un++) : 0, Pi++, Rt === 10 && (Pi = 1, gc++), Rt;
}
function cr() {
  return Bt(zi, un);
}
function sa() {
  return un;
}
function sl(e, t) {
  return Ys(zi, e, t);
}
function Gs(e) {
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
  return gc = Pi = 1, b0 = tr(zi = e), un = 0, [];
}
function w0(e) {
  return zi = "", e;
}
function la(e) {
  return x0(sl(un - 1, qd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function QS(e) {
  for (; (Rt = cr()) && Rt < 33; )
    yn();
  return Gs(e) > 2 || Gs(Rt) > 3 ? "" : " ";
}
function qS(e, t) {
  for (; --t && yn() && !(Rt < 48 || Rt > 102 || Rt > 57 && Rt < 65 || Rt > 70 && Rt < 97); )
    ;
  return sl(e, sa() + (t < 6 && cr() == 32 && yn() == 32));
}
function qd(e) {
  for (; yn(); )
    switch (Rt) {
      case e:
        return un;
      case 34:
      case 39:
        e !== 34 && e !== 39 && qd(Rt);
        break;
      case 40:
        e === 41 && qd(e);
        break;
      case 92:
        yn();
        break;
    }
  return un;
}
function ZS(e, t) {
  for (; yn() && e + Rt !== 57; )
    if (e + Rt === 84 && cr() === 47)
      break;
  return "/*" + sl(t, un - 1) + "*" + hc(e === 47 ? e : yn());
}
function JS(e) {
  for (; !Gs(cr()); )
    yn();
  return sl(e, un);
}
function ew(e) {
  return w0(aa("", null, null, null, [""], e = S0(e), 0, [0], e));
}
function aa(e, t, n, r, o, i, s, l, a) {
  for (var c = 0, d = 0, p = s, v = 0, f = 0, b = 0, S = 1, C = 1, x = 1, m = 0, y = "", w = o, T = i, k = r, R = y; C; )
    switch (b = m, m = yn()) {
      case 40:
        if (b != 108 && Bt(R, p - 1) == 58) {
          Qd(R += _e(la(m), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += la(m);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += QS(b);
        break;
      case 92:
        R += qS(sa() - 1, 7);
        continue;
      case 47:
        switch (cr()) {
          case 42:
          case 47:
            Ol(tw(ZS(yn(), sa()), t, n), a);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * S:
        l[c++] = tr(R) * x;
      case 125 * S:
      case 59:
      case 0:
        switch (m) {
          case 0:
          case 125:
            C = 0;
          case 59 + d:
            x == -1 && (R = _e(R, /\f/g, "")), f > 0 && tr(R) - p && Ol(f > 32 ? vh(R + ";", r, n, p - 1) : vh(_e(R, " ", "") + ";", r, n, p - 2), a);
            break;
          case 59:
            R += ";";
          default:
            if (Ol(k = yh(R, t, n, c, d, o, l, y, w = [], T = [], p), i), m === 123)
              if (d === 0)
                aa(R, t, k, k, w, i, p, l, T);
              else
                switch (v === 99 && Bt(R, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    aa(e, k, k, r && Ol(yh(e, k, k, 0, 0, o, l, y, o, w = [], p), T), o, T, p, l, r ? w : T);
                    break;
                  default:
                    aa(R, k, k, k, [""], T, 0, l, T);
                }
        }
        c = d = f = 0, S = x = 1, y = R = "", p = s;
        break;
      case 58:
        p = 1 + tr(R), f = b;
      default:
        if (S < 1) {
          if (m == 123)
            --S;
          else if (m == 125 && S++ == 0 && XS() == 125)
            continue;
        }
        switch (R += hc(m), m * S) {
          case 38:
            x = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[c++] = (tr(R) - 1) * x, x = 1;
            break;
          case 64:
            cr() === 45 && (R += la(yn())), v = cr(), d = p = tr(y = R += JS(sa())), m++;
            break;
          case 45:
            b === 45 && tr(R) == 2 && (S = 0);
        }
    }
  return i;
}
function yh(e, t, n, r, o, i, s, l, a, c, d) {
  for (var p = o - 1, v = o === 0 ? i : [""], f = xp(v), b = 0, S = 0, C = 0; b < r; ++b)
    for (var x = 0, m = Ys(e, p + 1, p = US(S = s[b])), y = e; x < f; ++x)
      (y = x0(S > 0 ? v[x] + " " + m : _e(m, /&\f/g, v[x]))) && (a[C++] = y);
  return yc(e, t, n, o === 0 ? yp : l, a, c, d);
}
function tw(e, t, n) {
  return yc(e, t, n, y0, hc(GS()), Ys(e, 2, -2), 0);
}
function vh(e, t, n, r) {
  return yc(e, t, n, vp, Ys(e, 0, r), Ys(e, r + 1, -1), r);
}
function vi(e, t) {
  for (var n = "", r = xp(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function nw(e, t, n, r) {
  switch (e.type) {
    case WS:
      if (e.children.length) break;
    case DS:
    case vp:
      return e.return = e.return || e.value;
    case y0:
      return "";
    case v0:
      return e.return = e.value + "{" + vi(e.children, r) + "}";
    case yp:
      e.value = e.props.join(",");
  }
  return tr(n = vi(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function rw(e) {
  var t = xp(e);
  return function(n, r, o, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](n, r, o, i) || "";
    return s;
  };
}
function ow(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function C0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var iw = function(t, n, r) {
  for (var o = 0, i = 0; o = i, i = cr(), o === 38 && i === 12 && (n[r] = 1), !Gs(i); )
    yn();
  return sl(t, un);
}, sw = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Gs(o)) {
      case 0:
        o === 38 && cr() === 12 && (n[r] = 1), t[r] += iw(un - 1, n, r);
        break;
      case 2:
        t[r] += la(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = cr() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += hc(o);
    }
  while (o = yn());
  return t;
}, lw = function(t, n) {
  return w0(sw(S0(t), n));
}, xh = /* @__PURE__ */ new WeakMap(), aw = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !xh.get(r)) && !o) {
      xh.set(t, !0);
      for (var i = [], s = lw(n, i), l = r.props, a = 0, c = 0; a < s.length; a++)
        for (var d = 0; d < l.length; d++, c++)
          t.props[c] = i[a] ? s[a].replace(/&\f/g, l[d]) : l[d] + " " + s[a];
    }
  }
}, cw = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function k0(e, t) {
  switch (VS(e, t)) {
    case 5103:
      return ze + "print-" + e + e;
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
      return ze + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ze + e + _a + e + Ht + e + e;
    case 6828:
    case 4268:
      return ze + e + Ht + e + e;
    case 6165:
      return ze + e + Ht + "flex-" + e + e;
    case 5187:
      return ze + e + _e(e, /(\w+).+(:[^]+)/, ze + "box-$1$2" + Ht + "flex-$1$2") + e;
    case 5443:
      return ze + e + Ht + "flex-item-" + _e(e, /flex-|-self/, "") + e;
    case 4675:
      return ze + e + Ht + "flex-line-pack" + _e(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ze + e + Ht + _e(e, "shrink", "negative") + e;
    case 5292:
      return ze + e + Ht + _e(e, "basis", "preferred-size") + e;
    case 6060:
      return ze + "box-" + _e(e, "-grow", "") + ze + e + Ht + _e(e, "grow", "positive") + e;
    case 4554:
      return ze + _e(e, /([^-])(transform)/g, "$1" + ze + "$2") + e;
    case 6187:
      return _e(_e(_e(e, /(zoom-|grab)/, ze + "$1"), /(image-set)/, ze + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return _e(e, /(image-set\([^]*)/, ze + "$1$`$1");
    case 4968:
      return _e(_e(e, /(.+:)(flex-)?(.*)/, ze + "box-pack:$3" + Ht + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ze + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return _e(e, /(.+)-inline(.+)/, ze + "$1$2") + e;
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
      if (tr(e) - 1 - t > 6) switch (Bt(e, t + 1)) {
        case 109:
          if (Bt(e, t + 4) !== 45) break;
        case 102:
          return _e(e, /(.+:)(.+)-([^]+)/, "$1" + ze + "$2-$3$1" + _a + (Bt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Qd(e, "stretch") ? k0(_e(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (Bt(e, t + 1) !== 115) break;
    case 6444:
      switch (Bt(e, tr(e) - 3 - (~Qd(e, "!important") && 10))) {
        case 107:
          return _e(e, ":", ":" + ze) + e;
        case 101:
          return _e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ze + (Bt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ze + "$2$3$1" + Ht + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Bt(e, t + 11)) {
        case 114:
          return ze + e + Ht + _e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ze + e + Ht + _e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ze + e + Ht + _e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ze + e + Ht + e + e;
  }
  return e;
}
var uw = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case vp:
      t.return = k0(t.value, t.length);
      break;
    case v0:
      return vi([Ji(t, {
        value: _e(t.value, "@", "@" + ze)
      })], o);
    case yp:
      if (t.length) return YS(t.props, function(i) {
        switch (KS(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return vi([Ji(t, {
              props: [_e(i, /:(read-\w+)/, ":" + _a + "$1")]
            })], o);
          case "::placeholder":
            return vi([Ji(t, {
              props: [_e(i, /:(plac\w+)/, ":" + ze + "input-$1")]
            }), Ji(t, {
              props: [_e(i, /:(plac\w+)/, ":" + _a + "$1")]
            }), Ji(t, {
              props: [_e(i, /:(plac\w+)/, Ht + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, dw = [uw], fw = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(S) {
      var C = S.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || dw, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(S) {
      for (var C = S.getAttribute("data-emotion").split(" "), x = 1; x < C.length; x++)
        i[C[x]] = !0;
      l.push(S);
    }
  );
  var a, c = [aw, cw];
  {
    var d, p = [nw, ow(function(S) {
      d.insert(S);
    })], v = rw(c.concat(o, p)), f = function(C) {
      return vi(ew(C), v);
    };
    a = function(C, x, m, y) {
      d = m, f(C ? C + "{" + x.styles + "}" : x.styles), y && (b.inserted[x.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new FS({
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
  return b.sheet.hydrate(l), b;
}, T0 = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt = typeof Symbol == "function" && Symbol.for, bp = Lt ? Symbol.for("react.element") : 60103, Sp = Lt ? Symbol.for("react.portal") : 60106, vc = Lt ? Symbol.for("react.fragment") : 60107, xc = Lt ? Symbol.for("react.strict_mode") : 60108, bc = Lt ? Symbol.for("react.profiler") : 60114, Sc = Lt ? Symbol.for("react.provider") : 60109, wc = Lt ? Symbol.for("react.context") : 60110, wp = Lt ? Symbol.for("react.async_mode") : 60111, Cc = Lt ? Symbol.for("react.concurrent_mode") : 60111, kc = Lt ? Symbol.for("react.forward_ref") : 60112, Tc = Lt ? Symbol.for("react.suspense") : 60113, pw = Lt ? Symbol.for("react.suspense_list") : 60120, Ec = Lt ? Symbol.for("react.memo") : 60115, Rc = Lt ? Symbol.for("react.lazy") : 60116, mw = Lt ? Symbol.for("react.block") : 60121, hw = Lt ? Symbol.for("react.fundamental") : 60117, gw = Lt ? Symbol.for("react.responder") : 60118, yw = Lt ? Symbol.for("react.scope") : 60119;
function wn(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case bp:
        switch (e = e.type, e) {
          case wp:
          case Cc:
          case vc:
          case bc:
          case xc:
          case Tc:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case wc:
              case kc:
              case Rc:
              case Ec:
              case Sc:
                return e;
              default:
                return t;
            }
        }
      case Sp:
        return t;
    }
  }
}
function E0(e) {
  return wn(e) === Cc;
}
Xe.AsyncMode = wp;
Xe.ConcurrentMode = Cc;
Xe.ContextConsumer = wc;
Xe.ContextProvider = Sc;
Xe.Element = bp;
Xe.ForwardRef = kc;
Xe.Fragment = vc;
Xe.Lazy = Rc;
Xe.Memo = Ec;
Xe.Portal = Sp;
Xe.Profiler = bc;
Xe.StrictMode = xc;
Xe.Suspense = Tc;
Xe.isAsyncMode = function(e) {
  return E0(e) || wn(e) === wp;
};
Xe.isConcurrentMode = E0;
Xe.isContextConsumer = function(e) {
  return wn(e) === wc;
};
Xe.isContextProvider = function(e) {
  return wn(e) === Sc;
};
Xe.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === bp;
};
Xe.isForwardRef = function(e) {
  return wn(e) === kc;
};
Xe.isFragment = function(e) {
  return wn(e) === vc;
};
Xe.isLazy = function(e) {
  return wn(e) === Rc;
};
Xe.isMemo = function(e) {
  return wn(e) === Ec;
};
Xe.isPortal = function(e) {
  return wn(e) === Sp;
};
Xe.isProfiler = function(e) {
  return wn(e) === bc;
};
Xe.isStrictMode = function(e) {
  return wn(e) === xc;
};
Xe.isSuspense = function(e) {
  return wn(e) === Tc;
};
Xe.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === vc || e === Cc || e === bc || e === xc || e === Tc || e === pw || typeof e == "object" && e !== null && (e.$$typeof === Rc || e.$$typeof === Ec || e.$$typeof === Sc || e.$$typeof === wc || e.$$typeof === kc || e.$$typeof === hw || e.$$typeof === gw || e.$$typeof === yw || e.$$typeof === mw);
};
Xe.typeOf = wn;
T0.exports = Xe;
var vw = T0.exports, R0 = vw, xw = {
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
}, P0 = {};
P0[R0.ForwardRef] = xw;
P0[R0.Memo] = bw;
var Sw = !0;
function I0(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var Cp = function(t, n, r) {
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
  Sw === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, kp = function(t, n, r) {
  Cp(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var i = n;
    do
      t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ww(e) {
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
var Cw = {
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
}, kw = /[A-Z]|^ms/g, Tw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, M0 = function(t) {
  return t.charCodeAt(1) === 45;
}, bh = function(t) {
  return t != null && typeof t != "boolean";
}, zu = /* @__PURE__ */ C0(function(e) {
  return M0(e) ? e : e.replace(kw, "-$&").toLowerCase();
}), Sh = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Tw, function(r, o, i) {
          return nr = {
            name: o,
            styles: i,
            next: nr
          }, o;
        });
  }
  return Cw[t] !== 1 && !M0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Xs(e, t, n) {
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
        return nr = {
          name: o.name,
          styles: o.styles,
          next: nr
        }, o.name;
      var i = n;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            nr = {
              name: s.name,
              styles: s.styles,
              next: nr
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return Ew(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var a = nr, c = n(e);
        return nr = a, Xs(e, t, c);
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
function Ew(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Xs(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : bh(l) && (r += zu(i) + ":" + Sh(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++)
          bh(s[a]) && (r += zu(i) + ":" + Sh(i, s[a]) + ";");
      else {
        var c = Xs(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += zu(i) + ":" + c + ";";
            break;
          }
          default:
            r += i + "{" + c + "}";
        }
      }
    }
  return r;
}
var wh = /label:\s*([^\s;{]+)\s*(;|$)/g, nr;
function ll(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  nr = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, o += Xs(n, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Xs(n, t, e[l]), r) {
      var a = i;
      o += a[l];
    }
  wh.lastIndex = 0;
  for (var c = "", d; (d = wh.exec(o)) !== null; )
    c += "-" + d[1];
  var p = ww(o) + c;
  return {
    name: p,
    styles: o,
    next: nr
  };
}
var Rw = function(t) {
  return t();
}, $0 = ma.useInsertionEffect ? ma.useInsertionEffect : !1, j0 = $0 || Rw, Ch = $0 || h.useLayoutEffect, O0 = /* @__PURE__ */ h.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fw({
    key: "css"
  }) : null
);
O0.Provider;
var Tp = function(t) {
  return /* @__PURE__ */ h.forwardRef(function(n, r) {
    var o = h.useContext(O0);
    return t(n, o, r);
  });
}, al = /* @__PURE__ */ h.createContext({}), Ep = {}.hasOwnProperty, Zd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Pw = function(t, n) {
  var r = {};
  for (var o in n)
    Ep.call(n, o) && (r[o] = n[o]);
  return r[Zd] = t, r;
}, Iw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Cp(n, r, o), j0(function() {
    return kp(n, r, o);
  }), null;
}, Mw = /* @__PURE__ */ Tp(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Zd], i = [r], s = "";
  typeof e.className == "string" ? s = I0(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = ll(i, void 0, h.useContext(al));
  s += t.key + "-" + l.name;
  var a = {};
  for (var c in e)
    Ep.call(e, c) && c !== "css" && c !== Zd && (a[c] = e[c]);
  return a.className = s, n && (a.ref = n), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Iw, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ h.createElement(o, a));
}), $w = Mw, kh = function(t, n) {
  var r = arguments;
  if (n == null || !Ep.call(n, "css"))
    return h.createElement.apply(void 0, r);
  var o = r.length, i = new Array(o);
  i[0] = $w, i[1] = Pw(t, n);
  for (var s = 2; s < o; s++)
    i[s] = r[s];
  return h.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(kh || (kh = {}));
var jw = /* @__PURE__ */ Tp(function(e, t) {
  var n = e.styles, r = ll([n], void 0, h.useContext(al)), o = h.useRef();
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
    if (r.next !== void 0 && kp(t, r.next, !0), s.tags.length) {
      var a = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = a, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
function Jr() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return ll(t);
}
function so() {
  var e = Jr.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Ow = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Aw = /* @__PURE__ */ C0(
  function(e) {
    return Ow.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Lw = Aw, Nw = function(t) {
  return t !== "theme";
}, Th = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Lw : Nw;
}, Eh = function(t, n, r) {
  var o;
  if (n) {
    var i = n.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
}, Bw = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return Cp(n, r, o), j0(function() {
    return kp(n, r, o);
  }), null;
}, zw = function e(t, n) {
  var r = t.__emotion_real === t, o = r && t.__emotion_base || t, i, s;
  n !== void 0 && (i = n.label, s = n.target);
  var l = Eh(t, n, r), a = l || Th(o), c = !a("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      var v = d[0];
      p.push(v[0]);
      for (var f = d.length, b = 1; b < f; b++)
        p.push(d[b], v[b]);
    }
    var S = Tp(function(C, x, m) {
      var y = c && C.as || o, w = "", T = [], k = C;
      if (C.theme == null) {
        k = {};
        for (var R in C)
          k[R] = C[R];
        k.theme = h.useContext(al);
      }
      typeof C.className == "string" ? w = I0(x.registered, T, C.className) : C.className != null && (w = C.className + " ");
      var E = ll(p.concat(T), x.registered, k);
      w += x.key + "-" + E.name, s !== void 0 && (w += " " + s);
      var O = c && l === void 0 ? Th(y) : a, L = {};
      for (var M in C)
        c && M === "as" || O(M) && (L[M] = C[M]);
      return L.className = w, m && (L.ref = m), /* @__PURE__ */ h.createElement(h.Fragment, null, /* @__PURE__ */ h.createElement(Bw, {
        cache: x,
        serialized: E,
        isStringTag: typeof y == "string"
      }), /* @__PURE__ */ h.createElement(y, L));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = l, Object.defineProperty(S, "toString", {
      value: function() {
        return "." + s;
      }
    }), S.withComponent = function(C, x) {
      var m = e(C, Xd({}, n, x, {
        shouldForwardProp: Eh(S, x, !0)
      }));
      return m.apply(void 0, p);
    }, S;
  };
}, _w = [
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
], Jd = zw.bind(null);
_w.forEach(function(e) {
  Jd[e] = Jd(e);
});
function Fw(e) {
  return e == null || Object.keys(e).length === 0;
}
function A0(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e, r = typeof t == "function" ? (o) => t(Fw(o) ? n : o) : t;
  return /* @__PURE__ */ u.jsx(jw, {
    styles: r
  });
}
function L0(e, t) {
  return Jd(e, t);
}
function Dw(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Rh = [];
function Qr(e) {
  return Rh[0] = e, ll(Rh);
}
var N0 = { exports: {} }, tt = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rp = Symbol.for("react.transitional.element"), Pp = Symbol.for("react.portal"), Pc = Symbol.for("react.fragment"), Ic = Symbol.for("react.strict_mode"), Mc = Symbol.for("react.profiler"), $c = Symbol.for("react.consumer"), jc = Symbol.for("react.context"), Oc = Symbol.for("react.forward_ref"), Ac = Symbol.for("react.suspense"), Lc = Symbol.for("react.suspense_list"), Nc = Symbol.for("react.memo"), Bc = Symbol.for("react.lazy"), Ww = Symbol.for("react.view_transition"), Uw = Symbol.for("react.client.reference");
function Ln(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Rp:
        switch (e = e.type, e) {
          case Pc:
          case Mc:
          case Ic:
          case Ac:
          case Lc:
          case Ww:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case jc:
              case Oc:
              case Bc:
              case Nc:
                return e;
              case $c:
                return e;
              default:
                return t;
            }
        }
      case Pp:
        return t;
    }
  }
}
tt.ContextConsumer = $c;
tt.ContextProvider = jc;
tt.Element = Rp;
tt.ForwardRef = Oc;
tt.Fragment = Pc;
tt.Lazy = Bc;
tt.Memo = Nc;
tt.Portal = Pp;
tt.Profiler = Mc;
tt.StrictMode = Ic;
tt.Suspense = Ac;
tt.SuspenseList = Lc;
tt.isContextConsumer = function(e) {
  return Ln(e) === $c;
};
tt.isContextProvider = function(e) {
  return Ln(e) === jc;
};
tt.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Rp;
};
tt.isForwardRef = function(e) {
  return Ln(e) === Oc;
};
tt.isFragment = function(e) {
  return Ln(e) === Pc;
};
tt.isLazy = function(e) {
  return Ln(e) === Bc;
};
tt.isMemo = function(e) {
  return Ln(e) === Nc;
};
tt.isPortal = function(e) {
  return Ln(e) === Pp;
};
tt.isProfiler = function(e) {
  return Ln(e) === Mc;
};
tt.isStrictMode = function(e) {
  return Ln(e) === Ic;
};
tt.isSuspense = function(e) {
  return Ln(e) === Ac;
};
tt.isSuspenseList = function(e) {
  return Ln(e) === Lc;
};
tt.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Pc || e === Mc || e === Ic || e === Ac || e === Lc || typeof e == "object" && e !== null && (e.$$typeof === Bc || e.$$typeof === Nc || e.$$typeof === jc || e.$$typeof === $c || e.$$typeof === Oc || e.$$typeof === Uw || e.getModuleId !== void 0);
};
tt.typeOf = Ln;
N0.exports = tt;
var B0 = N0.exports;
function br(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function z0(e) {
  if (/* @__PURE__ */ h.isValidElement(e) || B0.isValidElementType(e) || !br(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = z0(e[n]);
  }), t;
}
function _t(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? {
    ...e
  } : e;
  return br(e) && br(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ h.isValidElement(t[o]) || B0.isValidElementType(t[o]) ? r[o] = t[o] : br(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && br(e[o]) ? r[o] = _t(e[o], t[o], n) : n.clone ? r[o] = br(t[o]) ? z0(t[o]) : t[o] : r[o] = t[o];
  }), r;
}
const Hw = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => ({
    ...n,
    [r.key]: r.val
  }), {});
};
function _0(e) {
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
  } = e, i = Hw(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function a(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function c(f, b) {
    const S = s.indexOf(b);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(S !== -1 && typeof t[s[S]] == "number" ? t[s[S]] : b) - r / 100}${n})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? c(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function p(f) {
    const b = s.indexOf(f);
    return b === 0 ? l(s[1]) : b === s.length - 1 ? a(s[b]) : c(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
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
    not: p,
    unit: n,
    internal_mediaKeys: v,
    ...o
  };
}
const Ph = /min-width:\s*([0-9.]+)/;
function Ih(e, t) {
  if (!e.containerQueries || !Vw(t))
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
function Vw(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function F0(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/));
}
function Kw(e, t) {
  const n = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n)
    return null;
  const [, r, o] = n, i = Number.isNaN(+r) ? r || 0 : +r;
  return e.containerQueries(o).up(i);
}
function Yw(e) {
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
function D0(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function xi(e, t) {
  const n = Array.isArray(t), r = Array.isArray(e);
  return Jw(t) ? t : eC(e) ? Ii(t) : n && r ? qw(e, t) : n !== r ? Ii(t) : tC(e, t);
}
function Xw(e) {
  let t = 0;
  const n = e.length, r = new Array(n);
  for (t = 0; t < n; t += 1)
    r[t] = Ii(e[t]);
  return r;
}
function Qw(e) {
  const t = {};
  for (const n in e)
    n === "__proto__" || n === "constructor" || n === "prototype" || (t[n] = Ii(e[n]));
  return t;
}
function qw(e, t) {
  const n = e.length;
  for (let r = 0; r < t.length; r += 1)
    e[n + r] = Ii(t[r]);
  return e;
}
function Zw(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Jw(e) {
  return typeof e != "object" || e === null;
}
function eC(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function Ii(e) {
  return Zw(e) ? Array.isArray(e) ? Xw(e) : Qw(e) : e;
}
function tC(e, t) {
  for (const n in t)
    n === "__proto__" || n === "constructor" || n === "prototype" || (n in e ? e[n] = xi(e[n], t[n]) : e[n] = Ii(t[n]));
  return e;
}
const nC = {}, zc = {
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
}, Fa = _0({
  values: zc
}), rC = {
  containerQueries: (e) => ({
    up: (t) => {
      let n = typeof t == "number" ? t : zc[t] || t;
      return typeof n == "number" && (n = `${n}px`), e ? `@container ${e} (min-width:${n})` : `@container (min-width:${n})`;
    }
  })
};
function eo(e, t, n) {
  const r = {};
  return _c(r, e.theme, t, (o, i, s) => {
    const l = n(i, s);
    o ? r[o] = l : xi(r, l);
  });
}
function _c(e, t, n, r) {
  if (t ?? (t = nC), Array.isArray(n)) {
    const o = t.breakpoints ?? Fa;
    for (let i = 0; i < n.length; i += 1)
      _u(e, o.up(o.keys[i]), n[i], void 0, r);
    return e;
  }
  if (typeof n == "object") {
    const o = t.breakpoints ?? Fa, i = o.values ?? zc;
    for (const s in n)
      if (F0(o.keys, s)) {
        const l = Kw(t.containerQueries ? t : rC, s);
        l && _u(e, l, n[s], s, r);
      } else if (s in i) {
        const l = o.up(s);
        _u(e, l, n[s], s, r);
      } else {
        const l = s;
        e[l] = n[l];
      }
    return e;
  }
  return r(void 0, n), e;
}
function _u(e, t, n, r, o) {
  e[t] ?? (e[t] = {}), o(t, n, r);
}
function W0(e = Fa) {
  const {
    internal_mediaKeys: t
  } = e, n = {};
  for (let r = 0; r < t.length; r += 1)
    n[t[r]] = {};
  return n;
}
function ef(e, t) {
  const n = e.internal_mediaKeys;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    D0(t[o]) && delete t[o];
  }
  return t;
}
function oC(e, ...t) {
  const r = [W0(e), ...t].reduce((o, i) => _t(o, i), {});
  return ef(e, r);
}
function iC(e, t) {
  if (typeof e != "object")
    return {};
  const n = {}, r = Object.keys(t);
  return Array.isArray(e) ? r.forEach((o, i) => {
    i < e.length && (n[o] = !0);
  }) : r.forEach((o) => {
    e[o] != null && (n[o] = !0);
  }), n;
}
function Fu(e) {
  const {
    values: t,
    breakpoints: n,
    base: r
  } = e, o = r || iC(t, n), i = Object.keys(o);
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
function sC(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let r = 0; r < e.keys.length; r += 1)
      if (e.keys[r] in t)
        return !0;
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1)
      if (F0(e.keys, n[r]))
        return !0;
  }
  return !1;
}
function ee(e) {
  if (typeof e != "string")
    throw new Error(Pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function U0(e, t, n, r) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || n : typeof n == "string" ? o = Fc(e, n, !0, r) || n : o = n, t && (o = t(o, n, e)), o;
}
function Fc(e, t, n = !0, r = void 0) {
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
    const s = t[t.length - 1], l = `${n}${s === "default" ? "" : ee(s)}`;
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
    const l = s[t], a = s.theme, c = Fc(a, r) || {};
    return eo(s, l, (p) => {
      const v = U0(c, o, p, t);
      return n === !1 ? v : {
        [n]: v
      };
    });
  };
  return i.propTypes = {}, i.filterProps = [t], i;
}
const lC = {
  internal_cache: {}
}, Da = {
  m: "margin",
  p: "padding"
}, $h = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, jh = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Qs = {};
for (const e in Da)
  Qs[e] = [Da[e]];
for (const e in Da)
  for (const t in $h) {
    const n = Da[e], r = $h[t], o = Array.isArray(r) ? r.map((i) => n + i) : [n + r];
    Qs[e + t] = o;
  }
for (const e in jh)
  Qs[e] = Qs[jh[e]];
const Ip = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Mp = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]);
[...Ip, ...Mp];
function cl(e, t, n, r) {
  const o = Fc(e, t, !0) ?? n;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i), l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : () => {
  };
}
function Dc(e) {
  return cl(e, "spacing", 8);
}
function jo(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Oh = [""];
function H0(e, t) {
  var i;
  const n = e.theme ?? lC, r = ((i = n == null ? void 0 : n.internal_cache) == null ? void 0 : i.unarySpacing) ?? Dc(n), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Qs[s] ?? (Oh[0] = s, Oh), a = e[s];
    _c(o, e.theme, a, (c, d) => {
      const p = c ? o[c] : o;
      for (let v = 0; v < l.length; v += 1)
        p[l[v]] = jo(r, d);
    });
  }
  return o;
}
function $p(e) {
  return H0(e, Ip);
}
$p.propTypes = {};
$p.filterProps = Ip;
const Tt = $p;
function jp(e) {
  return H0(e, Mp);
}
jp.propTypes = {};
jp.filterProps = Mp;
const Et = jp;
function V0(e = 8, t = Dc({
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
function Wc(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach((i) => {
    r[i] = o;
  }), r), {}), n = (r) => {
    const o = {};
    for (const i in r)
      t[i] && xi(o, t[i](r));
    return o;
  };
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n;
}
function En(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Nn(e, t) {
  return kt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const aC = Nn("border", En), cC = Nn("borderTop", En), uC = Nn("borderRight", En), dC = Nn("borderBottom", En), fC = Nn("borderLeft", En), pC = Nn("borderColor"), mC = Nn("borderTopColor"), hC = Nn("borderRightColor"), gC = Nn("borderBottomColor"), yC = Nn("borderLeftColor"), vC = Nn("outline", En), xC = Nn("outlineColor"), Uc = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = cl(e.theme, "shape.borderRadius", 4), n = (r) => ({
      borderRadius: jo(t, r)
    });
    return eo(e, e.borderRadius, n);
  }
  return null;
};
Uc.propTypes = {};
Uc.filterProps = ["borderRadius"];
Wc(aC, cC, uC, dC, fC, pC, mC, hC, gC, yC, Uc, vC, xC);
const Hc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = cl(e.theme, "spacing", 8), n = (r) => ({
      gap: jo(t, r)
    });
    return eo(e, e.gap, n);
  }
  return null;
};
Hc.propTypes = {};
Hc.filterProps = ["gap"];
const Vc = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = cl(e.theme, "spacing", 8), n = (r) => ({
      columnGap: jo(t, r)
    });
    return eo(e, e.columnGap, n);
  }
  return null;
};
Vc.propTypes = {};
Vc.filterProps = ["columnGap"];
const Kc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = cl(e.theme, "spacing", 8), n = (r) => ({
      rowGap: jo(t, r)
    });
    return eo(e, e.rowGap, n);
  }
  return null;
};
Kc.propTypes = {};
Kc.filterProps = ["rowGap"];
const bC = kt({
  prop: "gridColumn"
}), SC = kt({
  prop: "gridRow"
}), wC = kt({
  prop: "gridAutoFlow"
}), CC = kt({
  prop: "gridAutoColumns"
}), kC = kt({
  prop: "gridAutoRows"
}), TC = kt({
  prop: "gridTemplateColumns"
}), EC = kt({
  prop: "gridTemplateRows"
}), RC = kt({
  prop: "gridTemplateAreas"
}), PC = kt({
  prop: "gridArea"
});
Wc(Hc, Vc, Kc, bC, SC, wC, CC, kC, TC, EC, RC, PC);
function bi(e, t) {
  return t === "grey" ? t : e;
}
const IC = kt({
  prop: "color",
  themeKey: "palette",
  transform: bi
}), MC = kt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: bi
}), $C = kt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: bi
});
Wc(IC, MC, $C);
const jC = zc;
function mn(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const OC = kt({
  prop: "width",
  transform: mn
}), Op = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var o, i, s, l, a;
      const r = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[n]) || jC[n];
      return r ? ((a = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${r}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: r
      } : {
        maxWidth: mn(n)
      };
    };
    return eo(e, e.maxWidth, t);
  }
  return null;
};
Op.filterProps = ["maxWidth"];
const AC = kt({
  prop: "minWidth",
  transform: mn
}), LC = kt({
  prop: "height",
  transform: mn
}), NC = kt({
  prop: "maxHeight",
  transform: mn
}), BC = kt({
  prop: "minHeight",
  transform: mn
});
kt({
  prop: "size",
  cssProperty: "width",
  transform: mn
});
kt({
  prop: "size",
  cssProperty: "height",
  transform: mn
});
const zC = kt({
  prop: "boxSizing"
});
Wc(OC, Op, AC, LC, NC, BC, zC);
const Yc = {
  // borders
  border: {
    themeKey: "borders",
    transform: En
  },
  borderTop: {
    themeKey: "borders",
    transform: En
  },
  borderRight: {
    themeKey: "borders",
    transform: En
  },
  borderBottom: {
    themeKey: "borders",
    transform: En
  },
  borderLeft: {
    themeKey: "borders",
    transform: En
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
    transform: En
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Uc
  },
  // palette
  color: {
    themeKey: "palette",
    transform: bi
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: bi
  },
  backgroundColor: {
    themeKey: "palette",
    transform: bi
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
    style: Hc
  },
  rowGap: {
    style: Kc
  },
  columnGap: {
    style: Vc
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
    transform: mn
  },
  maxWidth: {
    style: Op
  },
  minWidth: {
    transform: mn
  },
  height: {
    transform: mn
  },
  maxHeight: {
    transform: mn
  },
  minHeight: {
    transform: mn
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
}, _C = {};
function FC() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: n,
      theme: r = _C,
      nested: o
    } = t, i = r.unstable_sxConfig ?? Yc, s = {
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
      const d = r.breakpoints ?? Fa, p = W0(d);
      for (const v in c) {
        const f = DC(c[v], r);
        if (f != null) {
          if (typeof f != "object") {
            Ah(p, v, f, r, i);
            continue;
          }
          if (i[v]) {
            Ah(p, v, f, r, i);
            continue;
          }
          sC(d, f) ? _c(p, t.theme, f, (b, S) => {
            p[b][v] = S;
          }) : (s.sx = f, p[v] = e(s));
        }
      }
      return !o && r.modularCssLayers ? {
        "@layer sx": Ih(r, ef(d, p))
      } : Ih(r, ef(d, p));
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return e.filterProps = ["sx"], e;
}
const Oo = FC();
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
    xi(e, l({
      [t]: n,
      theme: r
    }));
    return;
  }
  const {
    cssProperty: a = t,
    transform: c
  } = i, d = Fc(r, s);
  _c(e, r, n, (p, v) => {
    const f = U0(d, c, v, t);
    a === !1 ? xi(p ? e[p] : e, f) : p ? e[p][a] = f : e[a] = f;
  });
}
function DC(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function WC(e, t) {
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
function Gc(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = _0(n), a = V0(o);
  let c = _t({
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
  return c = Yw(c), c.applyStyles = WC, c = t.reduce((d, p) => _t(d, p), c), c.unstable_sxConfig = {
    ...Yc,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, c.unstable_sx = function(p) {
    return Oo({
      sx: p,
      theme: this
    });
  }, c.internal_cache = {}, c;
}
function UC(e) {
  return Object.keys(e).length === 0;
}
function Ap(e = null) {
  const t = h.useContext(al);
  return !t || UC(t) ? e : t;
}
const HC = Gc();
function Xc(e = HC) {
  return Ap(e);
}
function Du(e) {
  const t = Qr(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function K0({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Xc(n), o = t && r[t] || r;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Du(typeof s == "function" ? s(o) : s)) : i = Du(i)), /* @__PURE__ */ u.jsx(A0, {
    styles: i
  });
}
const Lh = (e) => e, VC = () => {
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
}, Y0 = VC();
function G0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = G0(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function J() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = G0(e)) && (r && (r += " "), r += t);
  return r;
}
function KC(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = L0("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(Oo);
  return /* @__PURE__ */ h.forwardRef(function(a, c) {
    const d = Xc(n), {
      className: p,
      component: v = "div",
      ...f
    } = a;
    return /* @__PURE__ */ u.jsx(i, {
      as: v,
      ref: c,
      className: J(p, o ? o(r) : r),
      theme: t && d[t] || d,
      ...f
    });
  });
}
const YC = {
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
  const r = YC[t];
  return r ? `${n}-${r}` : `${Y0.generate(e)}-${t}`;
}
function ae(e, t, n = "Mui") {
  const r = {};
  return t.forEach((o) => {
    r[o] = ce(e, o, n);
  }), r;
}
function X0(e) {
  const {
    variants: t,
    ...n
  } = e, r = {
    variants: t,
    style: Qr(n),
    isProcessed: !0
  };
  return r.style === n || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Qr(o.style));
  }), r;
}
const GC = Gc();
function Wu(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function wo(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function XC(e) {
  return e ? (t, n) => n[e] : null;
}
function QC(e, t, n) {
  e.theme = D0(e.theme) ? n : e.theme[t] || e.theme;
}
function ca(e, t, n) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((o) => ca(e, o, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let o;
    if (r.isProcessed)
      o = n ? wo(r.style, n) : r.style;
    else {
      const {
        variants: i,
        ...s
      } = r;
      o = n ? wo(Qr(s), n) : s;
    }
    return Q0(e, r.variants, [o], n);
  }
  return r != null && r.isProcessed ? n ? wo(Qr(r.style), n) : r.style : n ? wo(Qr(r), n) : r;
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
    }), n.push(r ? wo(Qr(l.style(o)), r) : l.style(o))) : n.push(r ? wo(Qr(l.style), r) : l.style);
  }
  return n;
}
function q0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = GC,
    rootShouldForwardProp: r = Wu,
    slotShouldForwardProp: o = Wu
  } = e;
  function i(l) {
    QC(l, t, n);
  }
  return (l, a = {}) => {
    Dw(l, (k) => k.filter((R) => R !== Oo));
    const {
      name: c,
      slot: d,
      skipVariantsResolver: p,
      skipSx: v,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = XC(JC(d)),
      ...b
    } = a, S = c && c.startsWith("Mui") || d ? "components" : "custom", C = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), x = v || !1;
    let m = Wu;
    d === "Root" || d === "root" ? m = r : d ? m = o : ZC(l) && (m = void 0);
    const y = L0(l, {
      shouldForwardProp: m,
      label: qC(),
      ...b
    }), w = (k) => {
      if (k.__emotion_real === k)
        return k;
      if (typeof k == "function")
        return function(E) {
          return ca(E, k, E.theme.modularCssLayers ? S : void 0);
        };
      if (br(k)) {
        const R = X0(k);
        return function(O) {
          return R.variants ? ca(O, R, O.theme.modularCssLayers ? S : void 0) : O.theme.modularCssLayers ? wo(R.style, S) : R.style;
        };
      }
      return k;
    }, T = (...k) => {
      const R = [], E = k.map(w), O = [];
      if (R.push(i), c && f && O.push(function(I) {
        var N, j;
        const $ = (j = (N = I.theme.components) == null ? void 0 : N[c]) == null ? void 0 : j.styleOverrides;
        if (!$)
          return null;
        const A = {};
        for (const z in $)
          A[z] = ca(I, $[z], I.theme.modularCssLayers ? "theme" : void 0);
        return f(I, A);
      }), c && !C && O.push(function(I) {
        var A, N;
        const P = I.theme, $ = (N = (A = P == null ? void 0 : P.components) == null ? void 0 : A[c]) == null ? void 0 : N.variants;
        return $ ? Q0(I, $, [], I.theme.modularCssLayers ? "theme" : void 0) : null;
      }), x || O.push(Oo), Array.isArray(E[0])) {
        const g = E.shift(), I = new Array(R.length).fill(""), P = new Array(O.length).fill("");
        let $;
        $ = [...I, ...g, ...P], $.raw = [...I, ...g.raw, ...P], R.unshift($);
      }
      const L = [...R, ...E, ...O], M = y(...L);
      return l.muiName && (M.muiName = l.muiName), M;
    };
    return y.withConfig && (T.withConfig = y.withConfig), T;
  };
}
function qC(e, t) {
  return void 0;
}
function ZC(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function JC(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const ek = q0();
function qs(e, t, n = !1) {
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
              r[i][c] = qs(s[c], l[c], n);
            }
        }
      } else i === "className" && n && t.className !== void 0 ? r.className = J(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && n && t.style ? r.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : r[i] === void 0 && (r[i] = e[i]);
    }
  return r;
}
function tk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : qs(t.components[n].defaultProps, r);
}
function nk(e) {
  const {
    props: t,
    name: n,
    defaultTheme: r,
    themeId: o
  } = e;
  let i = Xc(r);
  return o && (i = i[o] || i), tk({
    theme: i,
    name: n,
    props: t
  });
}
const ht = typeof window < "u" ? h.useLayoutEffect : h.useEffect;
function rk(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
function Lp(e, t = 0, n = 1) {
  return rk(e, t, n);
}
function ok(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, o) => o < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function to(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return to(ok(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
    throw new Error(Pr(9, e));
  let r = e.substring(t + 1, e.length - 1), o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(Pr(10, o));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  };
}
const ik = (e) => {
  const t = to(e);
  return t.values.slice(0, 3).map((n, r) => t.type.includes("hsl") && r !== 0 ? `${n}%` : n).join(" ");
}, us = (e, t) => {
  try {
    return ik(e);
  } catch {
    return e;
  }
};
function Qc(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.includes("rgb") ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.includes("color") ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Z0(e) {
  e = to(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (c, d = (c + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const a = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", a.push(t[3])), Qc({
    type: l,
    values: a
  });
}
function tf(e) {
  e = to(e);
  let t = e.type === "hsl" || e.type === "hsla" ? to(Z0(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function sk(e, t) {
  const n = tf(e), r = tf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Wa(e, t) {
  return e = to(e), t = Lp(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Qc(e);
}
function uo(e, t, n) {
  try {
    return Wa(e, t);
  } catch {
    return e;
  }
}
function qc(e, t) {
  if (e = to(e), t = Lp(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return Qc(e);
}
function Ke(e, t, n) {
  try {
    return qc(e, t);
  } catch {
    return e;
  }
}
function Zc(e, t) {
  if (e = to(e), t = Lp(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.includes("color"))
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return Qc(e);
}
function Ye(e, t, n) {
  try {
    return Zc(e, t);
  } catch {
    return e;
  }
}
function nf(e, t = 0.15) {
  return tf(e) > 0.5 ? qc(e, t) : Zc(e, t);
}
function Al(e, t, n) {
  try {
    return nf(e, t);
  } catch {
    return e;
  }
}
const J0 = /* @__PURE__ */ h.createContext(null);
function Np() {
  return h.useContext(J0);
}
const lk = typeof Symbol == "function" && Symbol.for, ak = lk ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function ck(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function uk(e) {
  const {
    children: t,
    theme: n
  } = e, r = Np(), o = h.useMemo(() => {
    const i = r === null ? {
      ...n
    } : ck(r, n);
    return i != null && (i[ak] = r !== null), i;
  }, [n, r]);
  return /* @__PURE__ */ u.jsx(J0.Provider, {
    value: o,
    children: t
  });
}
const e1 = /* @__PURE__ */ h.createContext();
function dk({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ u.jsx(e1.Provider, {
    value: e ?? !0,
    ...t
  });
}
const ul = () => h.useContext(e1) ?? !1, t1 = /* @__PURE__ */ h.createContext(void 0);
function fk({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ u.jsx(t1.Provider, {
    value: e,
    children: t
  });
}
function pk(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  if (!t || !t.components || !t.components[n])
    return r;
  const o = t.components[n];
  return o.defaultProps ? qs(o.defaultProps, r, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? qs(o, r, t.components.mergeClassNameAndStyle) : r;
}
function mk({
  props: e,
  name: t
}) {
  const n = h.useContext(t1);
  return pk({
    props: e,
    name: t,
    theme: {
      components: n
    }
  });
}
let Nh = 0;
function hk(e) {
  const [t, n] = h.useState(e), r = e || t;
  return h.useEffect(() => {
    t == null && (Nh += 1, n(`mui-${Nh}`));
  }, [t]), r;
}
const gk = {
  ...ma
}, Bh = gk.useId;
function Ir(e) {
  if (Bh !== void 0) {
    const t = Bh();
    return e ?? t;
  }
  return hk(e);
}
function yk(e) {
  const t = Ap(), n = Ir() || "", {
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
      const c = document.createElement("style");
      c.setAttribute("data-mui-layer-order", n), c.textContent = o, i.prepend(c);
    } else
      (a = i.querySelector(`style[data-mui-layer-order="${n}"]`)) == null || a.remove();
  }, [o, n]), o ? /* @__PURE__ */ u.jsx(K0, {
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
function n1(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = Ap(zh), i = Np() || zh, s = _h(r, o, n), l = _h(r, i, n, !0), a = (r ? s[r] : s).direction === "rtl", c = yk(s);
  return /* @__PURE__ */ u.jsx(uk, {
    theme: l,
    children: /* @__PURE__ */ u.jsx(al.Provider, {
      value: s,
      children: /* @__PURE__ */ u.jsx(dk, {
        value: a,
        children: /* @__PURE__ */ u.jsxs(fk, {
          value: r ? s[r].components : s.components,
          children: [c, t]
        })
      })
    })
  });
}
const Fh = {
  theme: void 0
};
function vk(e) {
  let t, n;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== n) && (Fh.theme = o.theme, i = X0(e(Fh)), t = i, n = o.theme), i;
  };
}
const Bp = "mode", zp = "color-scheme", xk = "data-color-scheme";
function bk(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: n = "light",
    defaultDarkColorScheme: r = "dark",
    modeStorageKey: o = Bp,
    colorSchemeStorageKey: i = zp,
    attribute: s = xk,
    colorSchemeNode: l = "document.documentElement",
    nonce: a
  } = e || {};
  let c = "", d = s;
  if (s === "class" && (d = ".%s"), s === "data" && (d = "[data-%s]"), d.startsWith(".")) {
    const v = d.substring(1);
    c += `${l}.classList.remove('${v}'.replace('%s', light), '${v}'.replace('%s', dark));
      ${l}.classList.add('${v}'.replace('%s', colorScheme));`;
  }
  const p = d.match(/\[([^[\]]+)\]/);
  if (p) {
    const [v, f] = p[1].split("=");
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
function Sk() {
}
const wk = ({
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
      return Sk;
    const r = (o) => {
      const i = o.newValue;
      o.key === e && n(i);
    };
    return t.addEventListener("storage", r), () => {
      t.removeEventListener("storage", r);
    };
  }
});
function Uu() {
}
function Dh(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function r1(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Ck(e) {
  return r1(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function kk(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: n,
    defaultDarkColorScheme: r,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Bp,
    colorSchemeStorageKey: s = zp,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: a = wk,
    noSsr: c = !1
  } = e, d = o.join(","), p = o.length > 1, v = h.useMemo(() => a == null ? void 0 : a({
    key: i,
    storageWindow: l
  }), [a, i, l]), f = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-light`,
    storageWindow: l
  }), [a, s, l]), b = h.useMemo(() => a == null ? void 0 : a({
    key: `${s}-dark`,
    storageWindow: l
  }), [a, s, l]), [S, C] = h.useState(() => {
    const E = (v == null ? void 0 : v.get(t)) || t, O = (f == null ? void 0 : f.get(n)) || n, L = (b == null ? void 0 : b.get(r)) || r;
    return {
      mode: E,
      systemMode: Dh(E),
      lightColorScheme: O,
      darkColorScheme: L
    };
  }), [x, m] = h.useState(c || !p);
  h.useEffect(() => {
    m(!0);
  }, []);
  const y = Ck(S), w = h.useCallback((E) => {
    C((O) => {
      if (E === O.mode)
        return O;
      const L = E ?? t;
      return v == null || v.set(L), {
        ...O,
        mode: L,
        systemMode: Dh(L)
      };
    });
  }, [v, t]), T = h.useCallback((E) => {
    E ? typeof E == "string" ? E && !d.includes(E) ? console.error(`\`${E}\` does not exist in \`theme.colorSchemes\`.`) : C((O) => {
      const L = {
        ...O
      };
      return r1(O, (M) => {
        M === "light" && (f == null || f.set(E), L.lightColorScheme = E), M === "dark" && (b == null || b.set(E), L.darkColorScheme = E);
      }), L;
    }) : C((O) => {
      const L = {
        ...O
      }, M = E.light === null ? n : E.light, g = E.dark === null ? r : E.dark;
      return M && (d.includes(M) ? (L.lightColorScheme = M, f == null || f.set(M)) : console.error(`\`${M}\` does not exist in \`theme.colorSchemes\`.`)), g && (d.includes(g) ? (L.darkColorScheme = g, b == null || b.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), L;
    }) : C((O) => (f == null || f.set(n), b == null || b.set(r), {
      ...O,
      lightColorScheme: n,
      darkColorScheme: r
    }));
  }, [d, f, b, n, r]), k = h.useCallback((E) => {
    S.mode === "system" && C((O) => {
      const L = E != null && E.matches ? "dark" : "light";
      return O.systemMode === L ? O : {
        ...O,
        systemMode: L
      };
    });
  }, [S.mode]), R = h.useRef(k);
  return R.current = k, h.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const E = (...L) => R.current(...L), O = window.matchMedia("(prefers-color-scheme: dark)");
    return O.addListener(E), E(O), () => {
      O.removeListener(E);
    };
  }, [p]), h.useEffect(() => {
    if (p) {
      const E = (v == null ? void 0 : v.subscribe((M) => {
        (!M || ["light", "dark", "system"].includes(M)) && w(M || t);
      })) || Uu, O = (f == null ? void 0 : f.subscribe((M) => {
        (!M || d.match(M)) && T({
          light: M
        });
      })) || Uu, L = (b == null ? void 0 : b.subscribe((M) => {
        (!M || d.match(M)) && T({
          dark: M
        });
      })) || Uu;
      return () => {
        E(), O(), L();
      };
    }
  }, [T, w, d, t, l, p, v, f, b]), {
    ...S,
    mode: x ? S.mode : void 0,
    systemMode: x ? S.systemMode : void 0,
    colorScheme: x ? y : void 0,
    setMode: w,
    setColorScheme: T
  };
}
const Tk = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ek(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: n = {},
    modeStorageKey: r = Bp,
    colorSchemeStorageKey: o = zp,
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
  }, c = /* @__PURE__ */ h.createContext(void 0), d = () => h.useContext(c) || a, p = {}, v = {};
  function f(x) {
    var De, Se, He, bt;
    const {
      children: m,
      theme: y,
      modeStorageKey: w = r,
      colorSchemeStorageKey: T = o,
      disableTransitionOnChange: k = i,
      storageManager: R,
      storageWindow: E = typeof window > "u" ? void 0 : window,
      documentNode: O = typeof document > "u" ? void 0 : document,
      colorSchemeNode: L = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: M = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: I = "system",
      forceThemeRerender: P = !1,
      noSsr: $
    } = x, A = h.useRef(!1), N = Np(), j = h.useContext(c), z = !!j && !M, F = h.useMemo(() => y || (typeof n == "function" ? n() : n), [y]), V = F[t], D = V || F, {
      colorSchemes: q = p,
      components: Y = v,
      cssVarPrefix: H
    } = D, K = Object.keys(q).filter((ie) => !!q[ie]).join(","), X = h.useMemo(() => K.split(","), [K]), W = typeof s == "string" ? s : s.light, re = typeof s == "string" ? s : s.dark, oe = q[W] && q[re] ? I : ((Se = (De = q[D.defaultColorScheme]) == null ? void 0 : De.palette) == null ? void 0 : Se.mode) || ((He = D.palette) == null ? void 0 : He.mode), {
      mode: Te,
      setMode: ye,
      systemMode: ge,
      lightColorScheme: se,
      darkColorScheme: Ae,
      colorScheme: Fe,
      setColorScheme: $e
    } = kk({
      supportedColorSchemes: X,
      defaultLightColorScheme: W,
      defaultDarkColorScheme: re,
      modeStorageKey: w,
      colorSchemeStorageKey: T,
      defaultMode: oe,
      storageManager: R,
      storageWindow: E,
      noSsr: $
    });
    let je = Te, pe = Fe;
    z && (je = j.mode, pe = j.colorScheme);
    let Re = pe || D.defaultColorScheme;
    D.vars && !P && (Re = D.defaultColorScheme);
    const Qe = h.useMemo(() => {
      var Be;
      const ie = ((Be = D.generateThemeVars) == null ? void 0 : Be.call(D)) || D.vars, be = {
        ...D,
        components: Y,
        colorSchemes: q,
        cssVarPrefix: H,
        vars: ie
      };
      if (typeof be.generateSpacing == "function" && (be.spacing = be.generateSpacing()), Re) {
        const dt = q[Re];
        dt && typeof dt == "object" && Object.keys(dt).forEach((Ce) => {
          dt[Ce] && typeof dt[Ce] == "object" ? be[Ce] = {
            ...be[Ce],
            ...dt[Ce]
          } : be[Ce] = dt[Ce];
        });
      }
      return l ? l(be) : be;
    }, [D, Re, Y, q, H]), Oe = D.colorSchemeSelector;
    ht(() => {
      if (pe && L && Oe && Oe !== "media") {
        const ie = Oe;
        let be = Oe;
        if (ie === "class" && (be = ".%s"), ie === "data" && (be = "[data-%s]"), ie != null && ie.startsWith("data-") && !ie.includes("%s") && (be = `[${ie}="%s"]`), be.startsWith("."))
          L.classList.remove(...X.map((Be) => be.substring(1).replace("%s", Be))), L.classList.add(be.substring(1).replace("%s", pe));
        else {
          const Be = be.replace("%s", pe).match(/\[([^\]]+)\]/);
          if (Be) {
            const [dt, Ce] = Be[1].split("=");
            Ce || X.forEach((Yn) => {
              L.removeAttribute(dt.replace(pe, Yn));
            }), L.setAttribute(dt, Ce ? Ce.replace(/"|'/g, "") : "");
          } else
            L.setAttribute(be, pe);
        }
      }
    }, [pe, Oe, L, X]), h.useEffect(() => {
      let ie;
      if (k && A.current && O) {
        const be = O.createElement("style");
        be.appendChild(O.createTextNode(Tk)), O.head.appendChild(be), window.getComputedStyle(O.body), ie = setTimeout(() => {
          O.head.removeChild(be);
        }, 1);
      }
      return () => {
        clearTimeout(ie);
      };
    }, [pe, k, O]), h.useEffect(() => (A.current = !0, () => {
      A.current = !1;
    }), []);
    const Ue = h.useMemo(() => ({
      allColorSchemes: X,
      colorScheme: pe,
      darkColorScheme: Ae,
      lightColorScheme: se,
      mode: je,
      setColorScheme: $e,
      setMode: ye,
      systemMode: ge
    }), [X, pe, Ae, se, je, $e, ye, ge, Qe.colorSchemeSelector]);
    let Pe = !0;
    (g || D.cssVariables === !1 || z && (N == null ? void 0 : N.cssVarPrefix) === H) && (Pe = !1);
    const qe = /* @__PURE__ */ u.jsxs(h.Fragment, {
      children: [/* @__PURE__ */ u.jsx(n1, {
        themeId: V ? t : void 0,
        theme: Qe,
        children: m
      }), Pe && /* @__PURE__ */ u.jsx(A0, {
        styles: ((bt = Qe.generateStyleSheets) == null ? void 0 : bt.call(Qe)) || []
      })]
    });
    return z ? qe : /* @__PURE__ */ u.jsx(c.Provider, {
      value: Ue,
      children: qe
    });
  }
  const b = typeof s == "string" ? s : s.light, S = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: d,
    getInitColorSchemeScript: (x) => bk({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: S,
      modeStorageKey: r,
      ...x
    })
  };
}
function Rk(e = "") {
  function t(...r) {
    if (!r.length)
      return "";
    const o = r[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})` : `, ${o}`;
  }
  return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
}
const Pk = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), Wh = (e, t, n, r = []) => {
  let o = e;
  for (let i = 0; i < t.length; i += 1) {
    const s = t[i];
    if (Pk.has(s))
      break;
    i === t.length - 1 ? Array.isArray(o) ? o[Number(s)] = n : o && typeof o == "object" && (o[s] = n) : o && typeof o == "object" && (o[s] || (o[s] = r.includes(s) ? [] : {}), o = o[s]);
  }
}, Ik = (e, t, n) => {
  function r(o, i = [], s = []) {
    Object.entries(o).forEach(([l, a]) => {
      (!n || n && !n([...i, l])) && a != null && (typeof a == "object" && Object.keys(a).length > 0 ? r(a, [...i, l], Array.isArray(a) ? [...s, l] : s) : t([...i, l], a, s));
    });
  }
  r(e);
}, Mk = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) => e.includes(r)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Hu(e, t) {
  const {
    prefix: n,
    shouldSkipGeneratingVar: r
  } = t || {}, o = {}, i = {}, s = {};
  return Ik(
    e,
    (l, a, c) => {
      if ((typeof a == "string" || typeof a == "number") && (!r || !r(l, a))) {
        const d = `--${n ? `${n}-` : ""}${l.join("-")}`, p = Mk(l, a);
        Object.assign(o, {
          [d]: p
        }), Wh(i, l, `var(${d})`, c), Wh(s, l, `var(${d}, ${p})`, c);
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
    getSelector: n = x,
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
    css: p,
    varsWithDefaults: v
  } = Hu(c, t);
  let f = v;
  const b = {}, {
    [a]: S,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([w, T]) => {
    const {
      vars: k,
      css: R,
      varsWithDefaults: E
    } = Hu(T, t);
    f = _t(f, E), b[w] = {
      css: R,
      vars: k
    };
  }), S) {
    const {
      css: w,
      vars: T,
      varsWithDefaults: k
    } = Hu(S, t);
    f = _t(f, k), b[a] = {
      css: w,
      vars: T
    };
  }
  function x(w, T) {
    var R, E;
    let k = o;
    if (o === "class" && (k = ".%s"), o === "data" && (k = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (k = `[${o}="%s"]`), w) {
      if (k === "media")
        return e.defaultColorScheme === w ? ":root" : {
          [`@media (prefers-color-scheme: ${((E = (R = s[w]) == null ? void 0 : R.palette) == null ? void 0 : E.mode) || w})`]: {
            ":root": T
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
      return Object.entries(b).forEach(([, {
        vars: T
      }]) => {
        w = _t(w, T);
      }), w;
    },
    generateStyleSheets: () => {
      var O, L;
      const w = [], T = e.defaultColorScheme || "light";
      function k(M, g) {
        Object.keys(g).length && w.push(typeof M == "string" ? {
          [M]: {
            ...g
          }
        } : M);
      }
      k(n(void 0, {
        ...p
      }), p);
      const {
        [T]: R,
        ...E
      } = b;
      if (R) {
        const {
          css: M
        } = R, g = (L = (O = s[T]) == null ? void 0 : O.palette) == null ? void 0 : L.mode, I = !r && g ? {
          colorScheme: g,
          ...M
        } : {
          ...M
        };
        k(n(T, {
          ...I
        }), I);
      }
      return Object.entries(E).forEach(([M, {
        css: g
      }]) => {
        var $, A;
        const I = (A = ($ = s[M]) == null ? void 0 : $.palette) == null ? void 0 : A.mode, P = !r && I ? {
          colorScheme: I,
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
function jk(e) {
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
function Vu(e, t) {
  var n, r, o;
  return /* @__PURE__ */ h.isValidElement(e) && t.indexOf(
    // For server components `muiName` is available in element.type._payload.value.muiName
    // relevant info - https://github.com/react/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    e.type.muiName ?? ((o = (r = (n = e.type) == null ? void 0 : n._payload) == null ? void 0 : r.value) == null ? void 0 : o.muiName)
  ) !== -1;
}
const Ok = Gc(), Ak = ek("div", {
  name: "MuiStack",
  slot: "Root"
});
function Lk(e) {
  return nk({
    props: e,
    name: "MuiStack",
    defaultTheme: Ok
  });
}
function Nk(e, t) {
  const n = h.Children.toArray(e).filter(Boolean);
  return n.reduce((r, o, i) => (r.push(o), i < n.length - 1 && r.push(/* @__PURE__ */ h.cloneElement(t, {
    key: `separator-${i}`
  })), r), []);
}
const Bk = (e) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[e], zk = ({
  ownerState: e,
  theme: t
}) => {
  let n = {
    display: "flex",
    flexDirection: "column",
    ...eo({
      theme: t
    }, Fu({
      values: e.direction,
      breakpoints: t.breakpoints.values
    }), (r) => ({
      flexDirection: r
    }))
  };
  if (e.spacing) {
    const r = Dc(t), o = Object.keys(t.breakpoints.values).reduce((a, c) => ((typeof e.spacing == "object" && e.spacing[c] != null || typeof e.direction == "object" && e.direction[c] != null) && (a[c] = !0), a), {}), i = Fu({
      values: e.direction,
      base: o
    }), s = Fu({
      values: e.spacing,
      base: o
    });
    typeof i == "object" && Object.keys(i).forEach((a, c, d) => {
      if (!i[a]) {
        const v = c > 0 ? i[d[c - 1]] : "column";
        i[a] = v;
      }
    }), n = _t(n, eo({
      theme: t
    }, s, (a, c) => e.useFlexGap ? {
      gap: jo(r, a)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${Bk(c ? i[c] : e.direction)}`]: jo(r, a)
      }
    }));
  }
  return n = oC(t.breakpoints, n), n;
};
function _k(e = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: t = Ak,
    useThemeProps: n = Lk,
    componentName: r = "MuiStack"
  } = e, o = () => ue({
    root: ["root"]
  }, (a) => ce(r, a), {}), i = t(zk);
  return /* @__PURE__ */ h.forwardRef(function(a, c) {
    const d = n(a), {
      component: p = "div",
      direction: v = "column",
      spacing: f = 0,
      divider: b,
      children: S,
      className: C,
      useFlexGap: x = !1,
      ...m
    } = d, y = {
      direction: v,
      spacing: f,
      useFlexGap: x
    }, w = o();
    return /* @__PURE__ */ u.jsx(i, {
      as: p,
      ownerState: y,
      ref: c,
      className: J(w.root, C),
      ...m,
      children: b ? Nk(S, b) : S
    });
  });
}
function o1() {
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
      paper: Ks.white,
      default: Ks.white
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
const i1 = o1();
function s1() {
  return {
    text: {
      primary: Ks.white,
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
      active: Ks.white,
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
const rf = s1();
function Uh(e, t, n, r) {
  const o = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Zc(e.main, o) : t === "dark" && (e.dark = qc(e.main, i)));
}
function Hh(e, t, n, r, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[n] || (t.hasOwnProperty(r) ? t[n] = t[r] : n === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : n === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Fk(e = "light") {
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
function Dk(e = "light") {
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
function Wk(e = "light") {
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
function Uk(e = "light") {
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
function Hk(e = "light") {
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
function Vk(e = "light") {
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
function Kk(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function _p(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || Fk(t), l = e.secondary || Dk(t), a = e.error || Wk(t), c = e.info || Uk(t), d = e.success || Hk(t), p = e.warning || Vk(t);
  function v(C) {
    return o ? Kk(C) : sk(C, rf.text.primary) >= n ? rf.text.primary : i1.text.primary;
  }
  const f = ({
    color: C,
    name: x,
    mainShade: m = 500,
    lightShade: y = 300,
    darkShade: w = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[m] && (C.main = C[m]), !C.hasOwnProperty("main"))
      throw new Error(Pr(11, x ? ` (${x})` : "", m));
    if (typeof C.main != "string")
      throw new Error(Pr(12, x ? ` (${x})` : "", JSON.stringify(C.main)));
    return o ? (Hh(o, C, "light", y, r), Hh(o, C, "dark", w, r)) : (Uh(C, "light", y, r), Uh(C, "dark", w, r)), C.contrastText || (C.contrastText = v(C.main)), C;
  };
  let b;
  return t === "light" ? b = o1() : t === "dark" && (b = s1()), _t({
    // A collection of common colors.
    common: {
      ...Ks
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
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: BS,
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
    ...b
  }, i);
}
function Yk(e) {
  const t = {};
  return Object.entries(e).forEach((r) => {
    const [o, i] = r;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Gk(e, t) {
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
function Xk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Vh = {
  textTransform: "uppercase"
}, Kh = '"Roboto", "Helvetica", "Arial", sans-serif';
function l1(e, t) {
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
    allVariants: c,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t, v = r / 14, f = d || ((C) => `${C / a * v}rem`), b = (C, x, m, y, w) => ({
    fontFamily: n,
    fontWeight: C,
    fontSize: f(x),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: m,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...n === Kh ? {
      letterSpacing: `${Xk(y / x)}em`
    } : {},
    ...w,
    ...c
  }), S = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(i, 48, 1.167, 0),
    h4: b(i, 34, 1.235, 0.25),
    h5: b(i, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(i, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(i, 16, 1.5, 0.15),
    body2: b(i, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Vh),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, Vh),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return _t({
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
const Qk = 0.2, qk = 0.14, Zk = 0.12;
function at(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${qk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Zk})`].join(",");
}
const Jk = ["none", at(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), at(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), at(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), at(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), at(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), at(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), at(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), at(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), at(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), at(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), at(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), at(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), at(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), at(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), at(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), at(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), at(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), at(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), at(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), at(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), at(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), at(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), at(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), at(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], e2 = ["all"], t2 = {}, n2 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, r2 = {
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
function o2(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function i2(e) {
  const t = {
    ...e
  };
  delete t.reducedMotion;
  const n = {
    ...n2,
    ...t.easing
  }, r = {
    ...r2,
    ...t.duration
  }, o = (s = e2, l = t2) => {
    const {
      duration: a = r.standard,
      easing: c = n.easeInOut,
      delay: d = 0,
      ...p
    } = l;
    return (Array.isArray(s) ? s : [s]).map((v) => `${v} ${typeof a == "string" ? a : Yh(a)} ${c} ${typeof d == "string" ? d : Yh(d)}`).join(",");
  }, i = t.create ?? o;
  return {
    getAutoHeightDuration: o2,
    create: i,
    ...t,
    easing: n,
    duration: r
  };
}
const s2 = {};
function l2(e = s2) {
  return {
    reducedMotion: "never",
    ...e
  };
}
const a2 = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function c2(e) {
  return br(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function a1(e = {}) {
  const t = {
    ...e
  };
  function n(r) {
    const o = Object.entries(r);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !c2(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete r[s] : br(l) && (r[s] = {
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
const u2 = (e) => {
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
function d2(e) {
  Object.assign(e, {
    alpha(t, n) {
      const r = this || e;
      return r.colorSpace ? `oklch(from ${t} l c h / ${typeof n == "string" ? `calc(${n})` : n})` : r.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof n == "string" ? `calc(${n})` : n})` : Wa(t, u2(n));
    },
    lighten(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #fff ${Gh(n)})` : Zc(t, n);
    },
    darken(t, n) {
      const r = this || e;
      return r.colorSpace ? `color-mix(in ${r.colorSpace}, ${t}, #000 ${Gh(n)})` : qc(t, n);
    }
  });
}
function of(e = {}, ...t) {
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
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Pr(22));
  const v = _p({
    ...i,
    colorSpace: d
  }), f = Gc(e);
  let b = _t(f, {
    mixins: Gk(f.breakpoints, r),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Jk.slice(),
    typography: l1(v, a),
    motion: l2(s),
    transitions: i2(l),
    zIndex: {
      ...a2
    }
  });
  return b = _t(b, p), b = t.reduce((S, C) => _t(S, C), b), delete b.transitions.reducedMotion, b.unstable_sxConfig = {
    ...Yc,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, b.unstable_sx = function(C) {
    return Oo({
      sx: C,
      theme: this
    });
  }, b.toRuntimeSource = a1, d2(b), b;
}
function sf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const f2 = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const n = sf(t);
  return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
});
function c1(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function u1(e) {
  return e === "dark" ? f2 : [];
}
function p2(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: n,
    overlays: r,
    colorSpace: o,
    ...i
  } = e, s = _p({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...c1(s.mode),
      ...n
    },
    overlays: r || u1(s.mode),
    ...i
  };
}
function m2(e) {
  var t;
  return e[0] === "motion" || !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const h2 = (e) => [...[...Array(25)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], g2 = (e) => (t, n) => {
  const r = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return h2(e.cssVarPrefix).forEach((l) => {
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
function y2(e, t) {
  t.forEach((n) => {
    e[n] || (e[n] = {});
  });
}
function _(e, t, n) {
  !e[t] && n && (e[t] = n);
}
function ds(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Z0(e);
}
function mr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = us(ds(e[t])));
}
function v2(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const qn = (e) => {
  try {
    return e();
  } catch {
  }
}, x2 = (e = "mui") => Rk(e);
function Ku(e, t, n, r, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const i = o === "dark" ? "dark" : "light";
  if (!r) {
    t[o] = p2({
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
  } = of({
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
      ...c1(i),
      ...n == null ? void 0 : n.opacity
    },
    overlays: (n == null ? void 0 : n.overlays) || u1(i)
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
    shouldSkipGeneratingVar: l = m2,
    colorSchemeSelector: a = n.light && n.dark ? "media" : void 0,
    rootSelector: c = ":root",
    ...d
  } = e, p = Object.keys(n)[0], v = r || (n.light && p !== "light" ? "light" : p), f = x2(i), {
    [v]: b,
    light: S,
    dark: C,
    ...x
  } = n, m = {
    ...x
  };
  let y = b;
  if ((v === "dark" && !("dark" in n) || v === "light" && !("light" in n)) && (y = !0), !y)
    throw new Error(Pr(21, v));
  let w;
  s && (w = "oklch");
  const T = Ku(w, m, y, d, v);
  S && !m.light && Ku(w, m, S, void 0, "light"), C && !m.dark && Ku(w, m, C, void 0, "dark");
  let k = {
    defaultColorScheme: v,
    ...T,
    cssVarPrefix: i,
    colorSchemeSelector: a,
    rootSelector: c,
    getCssVar: f,
    colorSchemes: m,
    font: {
      ...Yk(T.typography),
      ...T.font
    },
    spacing: v2(d.spacing)
  };
  Object.keys(k.colorSchemes).forEach((M) => {
    const g = k.colorSchemes[M].palette, I = ($) => {
      const A = $.split("-"), N = A[1], j = A[2];
      return f($, g[N][j]);
    };
    g.mode === "light" && (_(g.common, "background", "#fff"), _(g.common, "onBackground", "#000")), g.mode === "dark" && (_(g.common, "background", "#000"), _(g.common, "onBackground", "#fff"));
    function P($, A, N) {
      if (w) {
        let j;
        return $ === uo && (j = `transparent ${((1 - N) * 100).toFixed(0)}%`), $ === Ke && (j = `#000 ${(N * 100).toFixed(0)}%`), $ === Ye && (j = `#fff ${(N * 100).toFixed(0)}%`), `color-mix(in ${w}, ${A}, ${j})`;
      }
      return $(A, N);
    }
    if (y2(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      _(g.Alert, "errorColor", P(Ke, s ? f("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", P(Ke, s ? f("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", P(Ke, s ? f("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", P(Ke, s ? f("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", I("palette-error-main")), _(g.Alert, "infoFilledBg", I("palette-info-main")), _(g.Alert, "successFilledBg", I("palette-success-main")), _(g.Alert, "warningFilledBg", I("palette-warning-main")), _(g.Alert, "errorFilledColor", qn(() => g.getContrastText(g.error.main))), _(g.Alert, "infoFilledColor", qn(() => g.getContrastText(g.info.main))), _(g.Alert, "successFilledColor", qn(() => g.getContrastText(g.success.main))), _(g.Alert, "warningFilledColor", qn(() => g.getContrastText(g.warning.main))), _(g.Alert, "errorStandardBg", P(Ye, s ? f("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", P(Ye, s ? f("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", P(Ye, s ? f("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", P(Ye, s ? f("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", I("palette-error-main")), _(g.Alert, "infoIconColor", I("palette-info-main")), _(g.Alert, "successIconColor", I("palette-success-main")), _(g.Alert, "warningIconColor", I("palette-warning-main")), _(g.AppBar, "defaultBg", I("palette-grey-100")), _(g.Avatar, "defaultBg", I("palette-grey-400")), _(g.Button, "inheritContainedBg", I("palette-grey-300")), _(g.Button, "inheritContainedHoverBg", I("palette-grey-A100")), _(g.Chip, "defaultBorder", I("palette-grey-400")), _(g.Chip, "defaultAvatarColor", I("palette-grey-700")), _(g.Chip, "defaultIconColor", I("palette-grey-700")), _(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), _(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), _(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), _(g.LinearProgress, "primaryBg", P(Ye, s ? f("palette-primary-main") : g.primary.main, 0.62)), _(g.LinearProgress, "secondaryBg", P(Ye, s ? f("palette-secondary-main") : g.secondary.main, 0.62)), _(g.LinearProgress, "errorBg", P(Ye, s ? f("palette-error-main") : g.error.main, 0.62)), _(g.LinearProgress, "infoBg", P(Ye, s ? f("palette-info-main") : g.info.main, 0.62)), _(g.LinearProgress, "successBg", P(Ye, s ? f("palette-success-main") : g.success.main, 0.62)), _(g.LinearProgress, "warningBg", P(Ye, s ? f("palette-warning-light") : g.warning.main, 0.62)), _(g.Skeleton, "bg", w ? P(uo, s ? f("palette-text-primary") : g.text.primary, 0.11) : `rgba(${I("palette-text-primaryChannel")} / 0.11)`), _(g.Slider, "primaryTrack", P(Ye, s ? f("palette-primary-main") : g.primary.main, 0.62)), _(g.Slider, "secondaryTrack", P(Ye, s ? f("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Slider, "errorTrack", P(Ye, s ? f("palette-error-main") : g.error.main, 0.62)), _(g.Slider, "infoTrack", P(Ye, s ? f("palette-info-main") : g.info.main, 0.62)), _(g.Slider, "successTrack", P(Ye, s ? f("palette-success-main") : g.success.main, 0.62)), _(g.Slider, "warningTrack", P(Ye, s ? f("palette-warning-main") : g.warning.main, 0.62));
      const $ = w ? P(Ke, s ? f("palette-background-default") : g.background.default, 0.6825) : Al(g.background.default, 0.8);
      _(g.SnackbarContent, "bg", $), _(g.SnackbarContent, "color", qn(() => w ? rf.text.primary : g.getContrastText($))), _(g.SpeedDialAction, "fabHoverBg", Al(g.background.paper, 0.15)), _(g.StepConnector, "border", I("palette-grey-400")), _(g.StepContent, "border", I("palette-grey-400")), _(g.Switch, "defaultColor", I("palette-common-white")), _(g.Switch, "defaultDisabledColor", I("palette-grey-100")), _(g.Switch, "primaryDisabledColor", P(Ye, s ? f("palette-primary-main") : g.primary.main, 0.62)), _(g.Switch, "secondaryDisabledColor", P(Ye, s ? f("palette-secondary-main") : g.secondary.main, 0.62)), _(g.Switch, "errorDisabledColor", P(Ye, s ? f("palette-error-main") : g.error.main, 0.62)), _(g.Switch, "infoDisabledColor", P(Ye, s ? f("palette-info-main") : g.info.main, 0.62)), _(g.Switch, "successDisabledColor", P(Ye, s ? f("palette-success-main") : g.success.main, 0.62)), _(g.Switch, "warningDisabledColor", P(Ye, s ? f("palette-warning-main") : g.warning.main, 0.62)), _(g.TableCell, "border", P(Ye, uo(s ? f("palette-divider") : g.divider, 1), 0.88)), _(g.Tooltip, "bg", P(uo, s ? f("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      _(g.Alert, "errorColor", P(Ye, s ? f("palette-error-light") : g.error.light, 0.6)), _(g.Alert, "infoColor", P(Ye, s ? f("palette-info-light") : g.info.light, 0.6)), _(g.Alert, "successColor", P(Ye, s ? f("palette-success-light") : g.success.light, 0.6)), _(g.Alert, "warningColor", P(Ye, s ? f("palette-warning-light") : g.warning.light, 0.6)), _(g.Alert, "errorFilledBg", I("palette-error-dark")), _(g.Alert, "infoFilledBg", I("palette-info-dark")), _(g.Alert, "successFilledBg", I("palette-success-dark")), _(g.Alert, "warningFilledBg", I("palette-warning-dark")), _(g.Alert, "errorFilledColor", qn(() => g.getContrastText(g.error.dark))), _(g.Alert, "infoFilledColor", qn(() => g.getContrastText(g.info.dark))), _(g.Alert, "successFilledColor", qn(() => g.getContrastText(g.success.dark))), _(g.Alert, "warningFilledColor", qn(() => g.getContrastText(g.warning.dark))), _(g.Alert, "errorStandardBg", P(Ke, s ? f("palette-error-light") : g.error.light, 0.9)), _(g.Alert, "infoStandardBg", P(Ke, s ? f("palette-info-light") : g.info.light, 0.9)), _(g.Alert, "successStandardBg", P(Ke, s ? f("palette-success-light") : g.success.light, 0.9)), _(g.Alert, "warningStandardBg", P(Ke, s ? f("palette-warning-light") : g.warning.light, 0.9)), _(g.Alert, "errorIconColor", I("palette-error-main")), _(g.Alert, "infoIconColor", I("palette-info-main")), _(g.Alert, "successIconColor", I("palette-success-main")), _(g.Alert, "warningIconColor", I("palette-warning-main")), _(g.AppBar, "defaultBg", I("palette-grey-900")), _(g.AppBar, "darkBg", I("palette-background-paper")), _(g.AppBar, "darkColor", I("palette-text-primary")), _(g.Avatar, "defaultBg", I("palette-grey-600")), _(g.Button, "inheritContainedBg", I("palette-grey-800")), _(g.Button, "inheritContainedHoverBg", I("palette-grey-700")), _(g.Chip, "defaultBorder", I("palette-grey-700")), _(g.Chip, "defaultAvatarColor", I("palette-grey-300")), _(g.Chip, "defaultIconColor", I("palette-grey-300")), _(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), _(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), _(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), _(g.LinearProgress, "primaryBg", P(Ke, s ? f("palette-primary-main") : g.primary.main, 0.5)), _(g.LinearProgress, "secondaryBg", P(Ke, s ? f("palette-secondary-main") : g.secondary.main, 0.5)), _(g.LinearProgress, "errorBg", P(Ke, s ? f("palette-error-main") : g.error.main, 0.5)), _(g.LinearProgress, "infoBg", P(Ke, s ? f("palette-info-main") : g.info.main, 0.5)), _(g.LinearProgress, "successBg", P(Ke, s ? f("palette-success-main") : g.success.main, 0.5)), _(g.LinearProgress, "warningBg", P(Ke, s ? f("palette-warning-main") : g.warning.main, 0.5)), _(g.Skeleton, "bg", w ? P(uo, s ? f("palette-text-primary") : g.text.primary, 0.13) : `rgba(${I("palette-text-primaryChannel")} / 0.13)`), _(g.Slider, "primaryTrack", P(Ke, s ? f("palette-primary-main") : g.primary.main, 0.5)), _(g.Slider, "secondaryTrack", P(Ke, s ? f("palette-secondary-main") : g.secondary.main, 0.5)), _(g.Slider, "errorTrack", P(Ke, s ? f("palette-error-main") : g.error.main, 0.5)), _(g.Slider, "infoTrack", P(Ke, s ? f("palette-info-main") : g.info.main, 0.5)), _(g.Slider, "successTrack", P(Ke, s ? f("palette-success-main") : g.success.main, 0.5)), _(g.Slider, "warningTrack", P(Ke, s ? f("palette-warning-light") : g.warning.main, 0.5));
      const $ = w ? P(Ye, s ? f("palette-background-default") : g.background.default, 0.985) : Al(g.background.default, 0.98);
      _(g.SnackbarContent, "bg", $), _(g.SnackbarContent, "color", qn(() => w ? i1.text.primary : g.getContrastText($))), _(g.SpeedDialAction, "fabHoverBg", Al(g.background.paper, 0.15)), _(g.StepConnector, "border", I("palette-grey-600")), _(g.StepContent, "border", I("palette-grey-600")), _(g.Switch, "defaultColor", I("palette-grey-300")), _(g.Switch, "defaultDisabledColor", I("palette-grey-600")), _(g.Switch, "primaryDisabledColor", P(Ke, s ? f("palette-primary-main") : g.primary.main, 0.55)), _(g.Switch, "secondaryDisabledColor", P(Ke, s ? f("palette-secondary-main") : g.secondary.main, 0.55)), _(g.Switch, "errorDisabledColor", P(Ke, s ? f("palette-error-main") : g.error.main, 0.55)), _(g.Switch, "infoDisabledColor", P(Ke, s ? f("palette-info-main") : g.info.main, 0.55)), _(g.Switch, "successDisabledColor", P(Ke, s ? f("palette-success-main") : g.success.main, 0.55)), _(g.Switch, "warningDisabledColor", P(Ke, s ? f("palette-warning-light") : g.warning.main, 0.55)), _(g.TableCell, "border", P(Ke, uo(s ? f("palette-divider") : g.divider, 1), 0.68)), _(g.Tooltip, "bg", P(uo, s ? f("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (mr(g.background, "default"), mr(g.background, "paper"), mr(g.common, "background"), mr(g.common, "onBackground"), mr(g, "divider")), Object.keys(g).forEach(($) => {
      const A = g[$];
      $ !== "tonalOffset" && !s && A && typeof A == "object" && (A.main && _(g[$], "mainChannel", us(ds(A.main))), A.light && _(g[$], "lightChannel", us(ds(A.light))), A.dark && _(g[$], "darkChannel", us(ds(A.dark))), A.contrastText && _(g[$], "contrastTextChannel", us(ds(A.contrastText))), $ === "text" && (mr(g[$], "primary"), mr(g[$], "secondary")), $ === "action" && (A.active && mr(g[$], "active"), A.selected && mr(g[$], "selected")));
    });
  }), k = t.reduce((M, g) => _t(M, g), k);
  const R = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: g2(k),
    enableContrastVars: s
  }, {
    vars: E,
    generateThemeVars: O,
    generateStyleSheets: L
  } = $k(k, R);
  return k.vars = E, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([M, g]) => {
    k[M] = g;
  }), k.generateThemeVars = O, k.generateStyleSheets = L, k.generateSpacing = function() {
    return V0(d.spacing, Dc(this));
  }, k.getColorSchemeSelector = jk(a), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = l, k.unstable_sxConfig = {
    ...Yc,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, k.unstable_sx = function(g) {
    return Oo({
      sx: g,
      theme: this
    });
  }, k.internal_cache = {}, k.toRuntimeSource = a1, k;
}
function Xh(e, t, n) {
  e.colorSchemes && n && (e.colorSchemes[t] = {
    ...n !== !0 && n,
    palette: _p({
      ...n === !0 ? {} : n.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Jc(e = {}, ...t) {
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
      return of(e, ...t);
    let d = n;
    "palette" in e || c[l] && (c[l] !== !0 ? d = c[l].palette : l === "dark" && (d = {
      mode: "dark"
    }));
    const p = of({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = l, p.colorSchemes = c, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...c.light !== !0 && c.light,
      palette: p.palette
    }, Xh(p, "dark", c.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...c.dark !== !0 && c.dark,
      palette: p.palette
    }, Xh(p, "light", c.light)), p;
  }
  return !n && !("light" in c) && l === "light" && (c.light = !0), b2({
    ...s,
    colorSchemes: c,
    defaultColorScheme: l,
    ...typeof r != "boolean" && r
  }, ...t);
}
function Ua(e) {
  return typeof e == "string";
}
function eu(e, t = 166) {
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
function rt(e) {
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
function Kn(e) {
  return xt(e).defaultView || window;
}
function Ll(e) {
  return parseInt(e, 10) || 0;
}
const S2 = {
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
function w2(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Qh(e) {
  return w2(e) || e.outerHeightStyle === 0 && !e.overflowing;
}
const C2 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    onChange: r,
    maxRows: o,
    minRows: i = 1,
    style: s,
    value: l,
    ...a
  } = t, {
    current: c
  } = h.useRef(l != null), d = h.useRef(null), p = yt(n, d), v = h.useRef(null), f = h.useRef(null), b = h.useCallback(() => {
    const y = d.current, w = f.current;
    if (!y || !w)
      return;
    const k = Kn(y).getComputedStyle(y);
    if (k.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    w.style.width = k.width, w.value = y.value || t.placeholder || "x", w.value.slice(-1) === `
` && (w.value += " ");
    const R = k.boxSizing, E = Ll(k.paddingBottom) + Ll(k.paddingTop), O = Ll(k.borderBottomWidth) + Ll(k.borderTopWidth), L = w.scrollHeight;
    w.value = "x";
    const M = w.scrollHeight;
    let g = L;
    i && (g = Math.max(Number(i) * M, g)), o && (g = Math.min(Number(o) * M, g)), g = Math.max(g, M);
    const I = g + (R === "border-box" ? E + O : 0), P = Math.abs(g - L) <= 1;
    return {
      outerHeightStyle: I,
      overflowing: P
    };
  }, [o, i, t.placeholder]), S = rt(() => {
    const y = d.current, w = b();
    if (!y || !w || Qh(w))
      return !1;
    const T = w.outerHeightStyle;
    return v.current != null && v.current !== T;
  }), C = h.useCallback(() => {
    const y = d.current, w = b();
    if (!y || !w || Qh(w))
      return;
    const T = w.outerHeightStyle;
    v.current !== T && (v.current = T, y.style.height = `${T}px`), y.style.overflow = w.overflowing ? "hidden" : "";
  }, [b]), x = h.useRef(-1);
  ht(() => {
    const y = eu(C), w = d == null ? void 0 : d.current;
    if (!w)
      return;
    const T = Kn(w);
    T.addEventListener("resize", y);
    let k;
    return typeof ResizeObserver < "u" && (k = new ResizeObserver(() => {
      S() && (k.unobserve(w), cancelAnimationFrame(x.current), C(), x.current = requestAnimationFrame(() => {
        k.observe(w);
      }));
    }), k.observe(w)), () => {
      y.clear(), cancelAnimationFrame(x.current), T.removeEventListener("resize", y), k && k.disconnect();
    };
  }, [b, C, S]), ht(() => {
    C();
  });
  const m = (y) => {
    c || C();
    const w = y.target, T = w.value.length, k = w.value.endsWith(`
`), R = w.selectionStart === T;
    k && R && w.setSelectionRange(T, T), r && r(y);
  };
  return /* @__PURE__ */ u.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ u.jsx("textarea", {
      value: l,
      onChange: m,
      ref: p,
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
        ...S2.shadow,
        ...s,
        paddingTop: 0,
        paddingBottom: 0
      }
    })]
  });
}), dl = /* @__PURE__ */ h.createContext(void 0);
function d1() {
  return h.useContext(dl);
}
function Bo({
  props: e,
  states: t
}) {
  const n = h.useContext(dl), r = {};
  return t.forEach((o) => {
    const i = e[o];
    r[o] = i === void 0 && n ? n[o] : i;
  }), [r, n];
}
const Fp = Jc();
function lo() {
  const e = Xc(Fp);
  return e[ar] || e;
}
function k2(e) {
  return /* @__PURE__ */ u.jsx(K0, {
    ...e,
    defaultTheme: Fp,
    themeId: ar
  });
}
function f1(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const tn = (e) => f1(e) && e !== "classes", U = q0({
  themeId: ar,
  defaultTheme: Fp,
  rootShouldForwardProp: tn
});
function T2(e) {
  return function(n) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ u.jsx(k2, {
        styles: typeof e == "function" ? (r) => e({
          theme: r,
          ...n
        }) : e
      })
    );
  };
}
const de = vk;
function fe(e) {
  return mk(e);
}
function or(e) {
  var n;
  let t = e.activeElement;
  for (; ((n = t == null ? void 0 : t.shadowRoot) == null ? void 0 : n.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
function qh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ha(e, t = !1) {
  return e && (qh(e.value) && e.value !== "" || t && qh(e.defaultValue) && e.defaultValue !== "");
}
function E2(e) {
  return e.startAdornment;
}
function R2(e) {
  return ce("MuiInputBase", e);
}
const pn = ae("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputTypeSearch"]), P2 = {
  transition: "none"
};
function I2(e, t) {
  return e === "always" ? t : e === "system" ? {
    "@media (prefers-reduced-motion: reduce)": t
  } : null;
}
const Dp = (e) => e.scrollTop, p1 = {}, M2 = ["all"], $2 = {};
function Rn(e, t) {
  return (n) => {
    if (t) {
      const r = e.current;
      n === void 0 ? t(r) : t(r, n);
    }
  };
}
function m1(e, t, n, r, o, i) {
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
    style: o = p1
  } = e;
  return {
    duration: o.transitionDuration ?? (typeof n == "number" ? n : n[t.mode] || 0),
    easing: o.transitionTimingFunction ?? (typeof r == "object" ? r[t.mode] : r),
    delay: o.transitionDelay
  };
}
function _i(e, t) {
  var r;
  const n = t ?? P2;
  return I2((r = e.motion) == null ? void 0 : r.reducedMotion, n);
}
function Ze(e, t = M2, n = $2) {
  var s, l;
  const r = (l = (s = e.transitions) == null ? void 0 : s.create) == null ? void 0 : l.call(s, t, n), o = _i(e);
  if (r === void 0)
    return o ?? p1;
  const i = {
    transition: r
  };
  return o ? {
    ...i,
    ...o
  } : i;
}
var Zh;
const lf = "mui-auto-fill", Ka = "mui-auto-fill-cancel", tu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.formControl && t.formControl, n.startAdornment && t.adornedStart, n.endAdornment && t.adornedEnd, n.error && t.error, n.size === "small" && t.sizeSmall, n.multiline && t.multiline, n.color && t[`color${ee(n.color)}`], n.fullWidth && t.fullWidth, n.hiddenLabel && t.hiddenLabel];
}, nu = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.input, n.type === "search" && t.inputTypeSearch];
}, j2 = (e) => {
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
    readOnly: p,
    size: v,
    startAdornment: f,
    type: b
  } = e, S = {
    root: ["root", `color${ee(n)}`, r && "disabled", o && "error", a && "fullWidth", s && "focused", l && "formControl", v && v !== "medium" && `size${ee(v)}`, d && "multiline", f && "adornedStart", i && "adornedEnd", c && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", b === "search" && "inputTypeSearch", p && "readOnly"]
  };
  return ue(S, R2, t);
}, ru = U("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: tu
})(de(({
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
  [`&.${pn.disabled}`]: {
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
}))), ou = U("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: nu
})(de(({
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
    [`label[data-shrink=false] + .${pn.formControl} &`]: {
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
    [`&.${pn.disabled}`]: {
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
          animationName: lf
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
})), Jh = T2({
  // Keep keyframes non-empty for Emotion production builds. Animation properties are ignored
  // inside keyframes, avoiding the visible display animation triggered by Chrome 117+.
  [`@keyframes ${lf}`]: {
    from: {
      animationName: lf
    }
  },
  [`@keyframes ${Ka}`]: {
    from: {
      animationName: Ka
    }
  }
}), Wp = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    disabled: p,
    disableInjectingGlobalStyles: v,
    endAdornment: f,
    error: b,
    fullWidth: S = !1,
    id: C,
    inputComponent: x = "input",
    inputProps: m = {},
    inputRef: y,
    margin: w,
    maxRows: T,
    minRows: k,
    multiline: R = !1,
    name: E,
    onBlur: O,
    onChange: L,
    onClick: M,
    onFocus: g,
    onKeyDown: I,
    onKeyUp: P,
    placeholder: $,
    readOnly: A,
    renderSuffix: N,
    rows: j,
    size: z,
    slotProps: F = {},
    slots: V = {},
    startAdornment: D,
    type: q = "text",
    value: Y,
    ...H
  } = r, K = m.value != null ? m.value : Y, {
    current: X
  } = h.useRef(K != null), W = h.useRef(), re = h.useCallback((ie) => {
  }, []), oe = yt(W, y, m.ref, re), [Te, ye] = h.useState(!1), [ge, se] = Bo({
    props: r,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  ge.focused = se ? se.focused : Te, h.useEffect(() => {
    !se && p && Te && (ye(!1), O && O());
  }, [se, p, Te, O]);
  const Ae = se && se.onFilled, Fe = se && se.onEmpty, $e = h.useCallback((ie) => {
    Ha(ie) ? Ae && Ae() : Fe && Fe();
  }, [Ae, Fe]);
  ht(() => {
    X && $e({
      value: K
    });
  }, [K, $e, X]), ht(() => {
    if (!l)
      return;
    const ie = W.current;
    if (!ie)
      return;
    const be = xt(ie), Be = or(be), dt = Be == null || Be === be.body || Be === be.documentElement;
    ie === Be ? se && se.onFocus ? se.onFocus() : ye(!0) : dt && ie.focus();
  }, [l]);
  const je = (ie) => {
    g && g(ie), m.onFocus && m.onFocus(ie), se && se.onFocus ? se.onFocus(ie) : ye(!0);
  }, pe = (ie) => {
    O && O(ie), m.onBlur && m.onBlur(ie), se && se.onBlur ? se.onBlur(ie) : ye(!1);
  }, Re = (ie, ...be) => {
    if (!X) {
      const Be = ie.target || W.current;
      if (Be == null)
        throw new Error(Pr(1));
      $e({
        value: Be.value
      });
    }
    m.onChange && m.onChange(ie, ...be), L && L(ie, ...be);
  };
  h.useEffect(() => {
    $e(W.current);
  }, []);
  const Qe = (ie) => {
    W.current && ie.currentTarget === ie.target && W.current.focus(), M && M(ie);
  };
  let Oe = x, Ue = m;
  R && Oe === "input" && (j ? Ue = {
    type: void 0,
    minRows: j,
    maxRows: j,
    ...Ue
  } : Ue = {
    type: void 0,
    maxRows: T,
    minRows: k,
    ...Ue
  }, Oe = C2);
  const Pe = (ie) => {
    $e(ie.animationName === Ka ? W.current : {
      value: "x"
    });
  };
  h.useEffect(() => {
    se && se.setAdornedStart(!!D);
  }, [se, D]);
  const qe = {
    ...r,
    color: ge.color || "primary",
    disabled: ge.disabled,
    endAdornment: f,
    error: ge.error,
    focused: ge.focused,
    formControl: se,
    fullWidth: S,
    hiddenLabel: ge.hiddenLabel,
    multiline: R,
    size: ge.size,
    startAdornment: D,
    type: q
  }, De = j2(qe), Se = V.root || ru, He = F.root || {}, bt = V.input || ou;
  return Ue = {
    ...Ue,
    ...F.input
  }, /* @__PURE__ */ u.jsxs(h.Fragment, {
    children: [!v && typeof Jh == "function" && // For Emotion/Styled-components, InputGlobalStyles will be a function
    // For Pigment CSS, this has no effect because the InputGlobalStyles will be null.
    (Zh || (Zh = /* @__PURE__ */ u.jsx(Jh, {}))), /* @__PURE__ */ u.jsxs(Se, {
      ...He,
      ref: n,
      onClick: Qe,
      ...H,
      ...!Ua(Se) && {
        ownerState: {
          ...qe,
          ...He.ownerState
        }
      },
      className: J(De.root, He.className, a, A && "MuiInputBase-readOnly"),
      children: [D, /* @__PURE__ */ u.jsx(dl.Provider, {
        value: null,
        children: /* @__PURE__ */ u.jsx(bt, {
          "aria-invalid": ge.error,
          "aria-describedby": o,
          "aria-label": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: d,
          disabled: ge.disabled,
          id: C,
          onAnimationStart: Pe,
          name: E,
          placeholder: $,
          readOnly: A,
          required: ge.required,
          rows: j,
          value: K,
          onKeyDown: I,
          onKeyUp: P,
          type: q,
          ...Ue,
          ...!Ua(bt) && {
            as: Oe,
            ownerState: {
              ...qe,
              ...Ue.ownerState
            }
          },
          ref: oe,
          className: J(De.input, Ue.className, A && "MuiInputBase-readOnly"),
          onBlur: pe,
          onChange: Re,
          onFocus: je
        })
      }), f, N ? N({
        ...ge,
        startAdornment: D
      }) : null]
    })]
  });
});
function O2(e) {
  return ce("MuiFilledInput", e);
}
const fo = {
  ...pn,
  ...ae("MuiFilledInput", ["root", "underline", "input", "adornedStart", "adornedEnd", "sizeSmall", "multiline", "hiddenLabel"])
};
function A2(e) {
  return ce("MuiFormControlLabel", e);
}
const fs = ae("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementEnd", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]);
function L2(e) {
  return ce("MuiFormHelperText", e);
}
const eg = ae("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
function N2(e) {
  return ce("MuiFormLabel", e);
}
const ws = ae("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
function B2(e) {
  return ce("MuiInput", e);
}
const es = {
  ...pn,
  ...ae("MuiInput", ["root", "underline", "input"])
};
function z2(e) {
  return ce("MuiMenuItem", e);
}
const ts = ae("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]);
function _2(e) {
  return ce("MuiNativeSelect", e);
}
const Up = ae("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
function F2(e) {
  return ce("MuiOutlinedInput", e);
}
const Zn = {
  ...pn,
  ...ae("MuiOutlinedInput", ["root", "notchedOutline", "input"])
};
function D2({
  theme: e,
  ...t
}) {
  const n = ar in e ? e[ar] : void 0;
  return /* @__PURE__ */ u.jsx(n1, {
    ...t,
    themeId: n ? ar : void 0,
    theme: n || e
  });
}
const Nl = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: W2
} = Ek({
  themeId: ar,
  // @ts-ignore ignore module augmentation tests
  theme: () => Jc({
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
      typography: l1(e.palette, e.typography)
    };
    return t.unstable_sx = function(r) {
      return Oo({
        sx: r,
        theme: this
      });
    }, t;
  }
}), U2 = W2;
function H2({
  theme: e,
  ...t
}) {
  const n = h.useMemo(() => {
    if (typeof e == "function")
      return e;
    const r = ar in e ? e[ar] : e;
    return "colorSchemes" in r ? null : "vars" in r ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return n ? /* @__PURE__ */ u.jsx(D2, {
    theme: n,
    ...t
  }) : /* @__PURE__ */ u.jsx(U2, {
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
function V2(e) {
  return ce("MuiSvgIcon", e);
}
ae("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const K2 = (e) => {
  const {
    color: t,
    fontSize: n,
    classes: r
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ee(t)}`, `fontSize${ee(n)}`]
  };
  return ue(o, V2, r);
}, Y2 = U("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "inherit" && t[`color${ee(n.color)}`], t[`fontSize${ee(n.fontSize)}`]];
  }
})(de(({
  theme: e
}) => {
  var t, n, r, o, i, s, l, a, c, d, p, v;
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
        var b, S;
        return {
          props: {
            color: f
          },
          style: {
            color: (S = (b = (e.vars ?? e).palette) == null ? void 0 : b[f]) == null ? void 0 : S.main
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
})), af = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    titleAccess: p,
    viewBox: v = "0 0 24 24",
    ...f
  } = r, b = /* @__PURE__ */ h.isValidElement(o) && o.type === "svg", S = {
    ...r,
    color: s,
    component: l,
    fontSize: a,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: v,
    hasSvgAsChild: b
  }, C = {};
  d || (C.viewBox = v);
  const x = K2(S);
  return /* @__PURE__ */ u.jsxs(Y2, {
    as: l,
    className: J(x.root, i),
    focusable: "false",
    color: c,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: n,
    ...C,
    ...f,
    ...b && o.props,
    ownerState: S,
    children: [b ? o.props.children : o, p ? /* @__PURE__ */ u.jsx("title", {
      children: p
    }) : null]
  });
});
af.muiName = "SvgIcon";
function ot(e, t) {
  function n(r, o) {
    return /* @__PURE__ */ u.jsx(af, {
      "data-testid": void 0,
      ref: o,
      ...r,
      children: e
    });
  }
  return n.muiName = af.muiName, /* @__PURE__ */ h.memo(/* @__PURE__ */ h.forwardRef(n));
}
function cf(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Ya(e) {
  const {
    controlled: t,
    default: n,
    name: r,
    state: o = "value"
  } = e, {
    current: i
  } = h.useRef(t !== void 0), [s, l] = h.useState(n), a = i ? t : s, c = h.useCallback((d) => {
    i || l(d);
  }, []);
  return [a, c];
}
function h1(e, t) {
  const n = e.charCodeAt(2);
  return e[0] === "o" && e[1] === "n" && n >= 65 && n <= 90 && typeof t == "function";
}
function g1(e, t) {
  if (!e)
    return t;
  function n(s, l) {
    const a = {};
    return Object.keys(l).forEach((c) => {
      h1(c, l[c]) && typeof s[c] == "function" && (a[c] = (...d) => {
        s[c](...d), l[c](...d);
      });
    }), a;
  }
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, a = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, c = J(s == null ? void 0 : s.className, l == null ? void 0 : l.className, a == null ? void 0 : a.className), d = n(a, l);
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
const ng = {};
function Hp(e, t) {
  const n = h.useRef(ng);
  return n.current === ng && (n.current = e(t)), n;
}
function G2(e) {
  const t = Hp(() => X2(e)).current;
  return t.next = e, ht(t.effect), t;
}
function X2(e) {
  const t = {
    current: e,
    next: e,
    effect: () => {
      t.current = t.next;
    }
  };
  return t;
}
const rg = fy.createContext(null);
function Q2(e) {
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
function q2(e) {
  if (e.autoTimeout != null)
    return e.autoTimeout;
  const t = Q2(e.timeout);
  return e.currentStatus === "entering" ? e.isAppearing ? t.appear ?? t.enter ?? null : t.enter ?? null : t.exit ?? null;
}
function y1(e) {
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
    nodeRef: p,
    onEnter: v,
    onEntering: f,
    onEntered: b,
    onExit: S,
    onExiting: C,
    onExited: x,
    children: m,
    ...y
  } = e, w = h.useContext(rg), T = w && !w.isMounting ? r : n, [k, R] = h.useState(() => t ? T ? "exited" : "entered" : i || s ? "unmounted" : "exited"), E = h.useRef(k);
  E.current = k, t && k === "unmounted" && (E.current = "exited", R("exited"));
  const O = h.useRef(t && T), L = h.useRef(!1), M = h.useRef(null), g = h.useRef(k), I = h.useRef(!1), P = h.useRef(c), $ = G2({
    timeout: l,
    addEndListener: a,
    reduceMotion: c,
    getAutoTimeout: d,
    onEnter: v,
    onEntering: f,
    onEntered: b,
    onExit: S,
    onExiting: C,
    onExited: x,
    enter: r,
    exit: o,
    mountOnEnter: i,
    unmountOnExit: s,
    nodeRef: p,
    parentGroup: w
  }), A = h.useCallback(() => {
    M.current !== null && (M.current.cancel(), M.current = null);
  }, []), N = h.useCallback((D) => {
    let q = !0;
    const Y = () => {
      q && (q = !1, M.current = null, D());
    };
    return Y.cancel = () => {
      q = !1;
    }, M.current = Y, Y;
  }, []), j = h.useCallback((D, q) => {
    var Fe, $e;
    let Y;
    const H = () => {
      Y !== void 0 && (clearTimeout(Y), Y = void 0);
    }, K = N(() => {
      H(), E.current = D, R(D);
    }), X = K.cancel;
    K.cancel = () => {
      H(), X();
    };
    const W = $.current.nodeRef.current, re = $.current.addEndListener, oe = $.current.getAutoTimeout !== void 0, Te = ($e = (Fe = $.current).getAutoTimeout) == null ? void 0 : $e.call(Fe), ye = q2({
      currentStatus: q,
      isAppearing: I.current,
      timeout: $.current.timeout,
      autoTimeout: Te
    }), ge = P.current, se = ye ?? (ge && oe ? 0 : null), Ae = (je) => {
      Y = setTimeout(K, je);
    };
    if (!W) {
      Ae(0);
      return;
    }
    if (re) {
      se != null && Ae(ge ? 0 : se), re.length >= 2 ? re(W, K) : re(K);
      return;
    }
    Ae(ge ? 0 : ye ?? 0);
  }, [N, $]), z = h.useCallback((D) => {
    var H;
    const q = $.current, Y = q.parentGroup ? q.parentGroup.isMounting : D;
    if (I.current = Y, !D && !q.enter) {
      E.current = "entered", R("entered");
      return;
    }
    P.current = q.reduceMotion, (H = q.onEnter) == null || H.call(q, Y), E.current = "entering", R("entering");
  }, [$]), F = h.useCallback(() => {
    var q;
    const D = $.current;
    if (!D.exit) {
      E.current = "exited", R("exited");
      return;
    }
    P.current = D.reduceMotion, (q = D.onExit) == null || q.call(D), E.current = "exiting", R("exiting");
  }, [$]), V = h.useCallback((D, q) => {
    if (A(), q === "entering") {
      const Y = $.current;
      if (Y.mountOnEnter || Y.unmountOnExit) {
        const H = Y.nodeRef.current;
        H && Dp(H);
      }
      z(D);
    } else
      F();
  }, [A, z, F, $]);
  return ht(() => (L.current = !0, O.current && (O.current = !1, V(!0, "entering")), () => {
    L.current = !1, A();
  }), [A, V]), ht(() => {
    if (!L.current)
      return;
    const D = E.current;
    t ? D !== "entering" && D !== "entered" && V(!1, "entering") : D === "entering" || D === "entered" ? V(!1, "exiting") : D === "exited" && s && (E.current = "unmounted", R("unmounted"));
  }, [t, k, s, V]), ht(() => {
    var H, K, X, W;
    if (k === "unmounted" || g.current === "unmounted") {
      g.current = k;
      return;
    }
    const q = g.current !== k;
    q && (g.current = k);
    const Y = $.current;
    k === "entering" ? (q && ((H = Y.onEntering) == null || H.call(Y, I.current)), M.current === null && E.current === k && j("entered", "entering")) : k === "exiting" ? (q && ((K = Y.onExiting) == null || K.call(Y)), M.current === null && E.current === k && j("exited", "exiting")) : k === "entered" && q ? (X = Y.onEntered) == null || X.call(Y, I.current) : k === "exited" && q && ((W = Y.onExited) == null || W.call(Y));
  }, [$, j, k]), k === "unmounted" ? null : /* @__PURE__ */ u.jsx(rg.Provider, {
    value: null,
    children: m(k, y)
  });
}
const v1 = "(prefers-reduced-motion: reduce)", Z2 = 0, J2 = "0ms", eT = () => {
}, og = () => !1, tT = () => !0, nT = () => eT;
function rT(e) {
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
    const i = window.matchMedia(v1), s = () => {
      o(i.matches);
    };
    return s(), i.addEventListener("change", s), () => {
      i.removeEventListener("change", s);
    };
  }, [e, t.enabled]), r;
}
const oT = {
  ...ma
}, x1 = oT.useSyncExternalStore;
function iT(e) {
  const t = e ? tT : og, [n, r] = h.useMemo(() => {
    if (!e || typeof window > "u" || typeof window.matchMedia != "function")
      return [og, nT];
    const o = window.matchMedia(v1);
    return [() => o.matches, (i) => (o.addEventListener("change", i), () => {
      o.removeEventListener("change", i);
    })];
  }, [e]);
  return x1(r, n, t);
}
const sT = x1 !== void 0 ? iT : rT;
function iu(e, t) {
  const n = sT(!t && e === "system"), r = !t && (e === "always" || e === "system" && n !== !1);
  return h.useMemo(() => ({
    shouldReduceMotion: r,
    getTransitionTiming(o) {
      return r ? {
        duration: Z2,
        delay: J2
      } : o;
    }
  }), [r]);
}
function b1(e, t, n) {
  return e === void 0 || Ua(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...n
    }
  };
}
function S1(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function Ga(e) {
  if (e === void 0)
    return {};
  const t = {};
  for (const n of Object.keys(e))
    h1(n, e[n]) && (t[n] = e[n]);
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
function w1(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const f = J(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), b = {
      ...n == null ? void 0 : n.style,
      ...o == null ? void 0 : o.style,
      ...r == null ? void 0 : r.style
    }, S = {
      ...n,
      ...o,
      ...r
    };
    return f.length > 0 && (S.className = f), Object.keys(b).length > 0 && (S.style = b), {
      props: S,
      internalRef: void 0
    };
  }
  const s = Ga({
    ...o,
    ...r
  }), l = ig(r), a = ig(o), c = t(s), d = J(c == null ? void 0 : c.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className), p = {
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
  return d.length > 0 && (v.className = d), Object.keys(p).length > 0 && (v.style = p), {
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
    slots: d = {
      [e]: void 0
    },
    slotProps: p = {
      [e]: void 0
    },
    ...v
  } = i, f = d[e] || r, b = S1(p[e], o), {
    props: {
      component: S,
      ...C
    },
    internalRef: x
  } = w1({
    className: n,
    ...a,
    externalForwardedProps: e === "root" ? v : void 0,
    externalSlotProps: b
  }), m = yt(x, b == null ? void 0 : b.ref, t.ref), y = e === "root" ? S || c : S, w = b1(f, {
    ...e === "root" && !c && !d[e] && s,
    ...e !== "root" && !d[e] && s,
    ...C,
    ...y && !l && {
      as: y
    },
    ...y && l && {
      component: y
    },
    ref: m
  }, o);
  return [f, w];
}
function lT(e) {
  return ce("MuiPaper", e);
}
ae("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const aT = (e) => {
  const {
    square: t,
    elevation: n,
    variant: r,
    classes: o
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
  };
  return ue(i, lT, o);
}, cT = U("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
  }
})(de(({
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
}))), Vt = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var f;
  const r = fe({
    props: t,
    name: "MuiPaper"
  }), o = lo(), {
    className: i,
    component: s = "div",
    elevation: l = 1,
    square: a = !1,
    variant: c = "elevation",
    ...d
  } = r, p = {
    ...r,
    component: s,
    elevation: l,
    square: a,
    variant: c
  }, v = aT(p);
  return /* @__PURE__ */ u.jsx(cT, {
    as: s,
    ownerState: p,
    className: J(v.root, i),
    ref: n,
    ...d,
    style: {
      ...c === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[l],
        ...o.vars && {
          "--Paper-overlay": (f = o.vars.overlays) == null ? void 0 : f[l]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Wa("#fff", sf(l))}, ${Wa("#fff", sf(l))})`
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
function uT(e) {
  const {
    focusableWhenDisabled: t,
    disabled: n,
    composite: r = !1,
    tabIndex: o = 0,
    isNativeButton: i
  } = e, s = r && t !== !1, l = r && t === !1;
  return h.useMemo(() => {
    const c = {
      // allow Tabbing away from focusableWhenDisabled elements
      onKeyDown(d) {
        n && t && d.key !== "Tab" && d.preventDefault();
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
  } = e, d = h.useRef(null), p = s === !0, v = uT({
    focusableWhenDisabled: p,
    disabled: n,
    isNativeButton: t,
    tabIndex: i
  }), f = h.useCallback(() => {
    const C = d.current;
    return C == null ? t : C.tagName === "BUTTON" ? !0 : !!(C.tagName === "A" && C.href);
  }, [t]), b = h.useMemo(() => {
    const C = p ? {} : {
      tabIndex: n ? -1 : i
    };
    return t ? (C.type = r === void 0 && !o ? "button" : r, p || (C.disabled = n)) : (C.role = "button", !p && n && (C["aria-disabled"] = n)), p ? {
      ...C,
      ...v
    } : C;
  }, [n, p, v, o, t, i, r]);
  return {
    getButtonProps: h.useCallback((C = dT) => {
      const {
        onClick: x,
        onKeyDown: m,
        onKeyUp: y,
        ...w
      } = C;
      return {
        ...b,
        ...w,
        onClick: (E) => {
          if (l && E.stopPropagation(), n) {
            E.preventDefault();
            return;
          }
          x == null || x(E);
        },
        onKeyDown: (E) => {
          if (p && v.onKeyDown(E), !n && (a == null || a(E), m == null || m(E), !(E.target !== E.currentTarget || f()))) {
            if (E.key === " ") {
              E.preventDefault();
              return;
            }
            E.key === "Enter" && (E.preventDefault(), E.currentTarget.click());
          }
        },
        onKeyUp: (E) => {
          n || (c == null || c(E), y == null || y(E), E.target === E.currentTarget && !f() && E.key === " " && !E.defaultPrevented && E.currentTarget.click());
        }
      };
    }, [b, n, p, v, f, a, c, l]),
    rootRef: d
  };
}
class Qa {
  constructor() {
    Ui(this, "mountEffect", () => {
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
    const t = Hp(Qa.create).current, [n, r] = h.useState(!1);
    return t.shouldMount = n, t.setShouldMount = r, h.useEffect(t.mountEffect, [n]), t;
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
  return Qa.use();
}
function mT() {
  let e, t;
  const n = new Promise((r, o) => {
    e = r, t = o;
  });
  return n.resolve = e, n.reject = t, n;
}
const hT = [];
function C1(e) {
  h.useEffect(e, hT);
}
class su {
  constructor() {
    Ui(this, "currentId", null);
    Ui(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ui(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new su();
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
function ir() {
  const e = Hp(su.create).current;
  return C1(e.disposeEffect), e;
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
  } = e, [d, p] = h.useState(!1), v = ir(), f = h.useRef(!1), b = h.useRef(a);
  b.current = a;
  const S = a != null, C = J(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, m = J(n.child, d && n.childLeaving, r && n.childPulsate);
  return !l && !d && p(!0), h.useEffect(() => {
    !l && S ? f.current || (f.current = !0, v.start(c, () => {
      var y;
      f.current = !1, (y = b.current) == null || y.call(b);
    })) : (f.current = !1, v.clear());
  }, [v, S, l, c]), /* @__PURE__ */ u.jsx("span", {
    className: C,
    style: x,
    children: /* @__PURE__ */ u.jsx("span", {
      className: m
    })
  });
}
const qt = ae("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), uf = 550, yT = 80, Bl = {}, sg = [], vT = () => {
};
function Yu(e, t) {
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
const bT = so`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, ST = so`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, wT = so`
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
  const t = Jr`
    &.${qt.rippleVisible} {
      animation-name: ${bT};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${qt.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${qt.childLeaving} {
      animation-name: ${ST};
      animation-duration: ${uf}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${qt.childPulsate} {
      animation-name: ${wT};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e.motion.reducedMotion === "system" ? Jr`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    ` : t;
}
const kT = U("span", {
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
}), TT = U(gT, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${qt.rippleVisible} {
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
  & .${qt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${qt.childLeaving} {
    opacity: 0;
  }

  & .${qt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({
  theme: e
}) => CT(e)}
`, ET = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTouchRipple"
  }), o = lo(), i = iu(o.motion.reducedMotion, !1), {
    center: s = !1,
    classes: l = Bl,
    className: a,
    ...c
  } = r, [d, p] = h.useState({
    items: sg,
    order: sg
  }), v = d.items, f = h.useRef(0), b = h.useRef(null), S = h.useRef(!1);
  C1(() => (S.current = !0, () => {
    S.current = !1;
  })), h.useEffect(() => {
    b.current && (b.current(), b.current = null);
  }, [v]);
  const C = h.useRef(!1), x = ir(), m = h.useRef(null), y = h.useRef(null), w = rt((M) => {
    S.current && p((g) => {
      const I = g.items.filter(($) => $.key !== M), P = Yu(g.order.filter(($) => $ !== M), I.filter(($) => !$.exiting).map(($) => $.key));
      return {
        items: I,
        order: P
      };
    });
  }), T = rt((M) => {
    const {
      pulsate: g,
      rippleX: I,
      rippleY: P,
      rippleSize: $,
      cb: A
    } = M, N = f.current;
    f.current += 1, p((j) => {
      const z = [...j.items, {
        key: N,
        pulsate: g,
        rippleX: I,
        rippleY: P,
        rippleSize: $,
        exiting: !1
      }];
      return {
        items: z,
        order: Yu(j.order, z.filter((F) => !F.exiting).map((F) => F.key))
      };
    }), b.current = A;
  }), k = rt((M = Bl, g = Bl, I = vT) => {
    const {
      pulsate: P = !1,
      center: $ = s || g.pulsate,
      fakeElement: A = !1
      // Used only by tests.
    } = g;
    if ((M == null ? void 0 : M.type) === "mousedown" && C.current) {
      C.current = !1;
      return;
    }
    (M == null ? void 0 : M.type) === "touchstart" && (C.current = !0);
    const N = A ? null : y.current, {
      rippleX: j,
      rippleY: z,
      rippleSize: F
    } = xT({
      event: M,
      element: N,
      center: $
    });
    M != null && M.touches ? m.current === null && (m.current = () => {
      T({
        pulsate: P,
        rippleX: j,
        rippleY: z,
        rippleSize: F,
        cb: I
      });
    }, x.start(yT, () => {
      m.current && (m.current(), m.current = null);
    })) : T({
      pulsate: P,
      rippleX: j,
      rippleY: z,
      rippleSize: F,
      cb: I
    });
  }), R = rt(() => {
    k(Bl, {
      pulsate: !0
    });
  }), E = rt((M, g) => {
    if (x.clear(), (M == null ? void 0 : M.type) === "touchend" && m.current) {
      m.current(), m.current = null, x.start(0, () => {
        E(M, g);
      });
      return;
    }
    m.current = null, p((I) => {
      const P = I.items.findIndex((A) => !A.exiting);
      if (P === -1)
        return I;
      const $ = I.items.slice();
      return $[P] = {
        ...$[P],
        exiting: !0
      }, {
        items: $,
        order: Yu(I.order, $.filter((A) => !A.exiting).map((A) => A.key))
      };
    }), b.current = g;
  });
  h.useImperativeHandle(n, () => ({
    pulsate: R,
    start: k,
    stop: E
  }), [R, k, E]);
  const O = new Map(v.map((M) => [M.key, M])), L = d.order.map((M) => O.get(M)).filter(Boolean);
  return /* @__PURE__ */ u.jsx(kT, {
    className: J(qt.root, l.root, a),
    ref: y,
    ...c,
    children: L.map((M) => /* @__PURE__ */ u.jsx(TT, {
      classes: {
        ripple: J(l.ripple, qt.ripple),
        rippleVisible: J(l.rippleVisible, qt.rippleVisible),
        ripplePulsate: J(l.ripplePulsate, qt.ripplePulsate),
        child: J(l.child, qt.child),
        childLeaving: J(l.childLeaving, qt.childLeaving),
        childPulsate: J(l.childPulsate, qt.childPulsate)
      },
      timeout: i.shouldReduceMotion ? 0 : uf,
      pulsate: M.pulsate,
      rippleX: M.rippleX,
      rippleY: M.rippleY,
      rippleSize: M.rippleSize,
      in: !M.exiting,
      onExited: () => w(M.key)
    }, M.key))
  });
});
function RT(e) {
  return ce("MuiButtonBase", e);
}
const PT = ae("MuiButtonBase", ["root", "disabled", "focusVisible"]), IT = (e) => {
  const {
    disabled: t,
    focusVisible: n,
    focusVisibleClassName: r,
    suppressFocusVisible: o,
    classes: i
  } = e, l = ue({
    root: ["root", t && "disabled", n && !o && "focusVisible"]
  }, RT, i);
  return n && !o && r && (l.root += ` ${r}`), l;
}, MT = U("button", {
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
}), no = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    disableTouchRipple: p = !1,
    focusRipple: v = !1,
    focusVisibleClassName: f,
    /* eslint-disable react/prop-types */
    // replaces internal handling in Chip, other components can opt-in individually to use this in the future
    focusableWhenDisabled: b,
    // escape hatch to suppress the focusVisible state and callback
    // used by anchored <Menu>s to to suppress focus visible styling when opened with a pointer
    suppressFocusVisible: S = !1,
    // private prop to allow native vs non-native button props to be resolved before mount
    internalNativeButton: C,
    /* eslint-enable react/prop-types */
    LinkComponent: x = "a",
    nativeButton: m,
    onBlur: y,
    onClick: w,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: E,
    onKeyDown: O,
    onKeyUp: L,
    onMouseDown: M,
    onMouseLeave: g,
    onMouseUp: I,
    onTouchEnd: P,
    onTouchMove: $,
    onTouchStart: A,
    tabIndex: N = 0,
    TouchRippleProps: j,
    touchRippleRef: z,
    type: F,
    ...V
  } = r, D = !!(V.href || V.to), q = !!V.formAction;
  let Y = a;
  Y === "button" && D && (Y = x);
  const K = m ?? (typeof Y == "string" ? Y === "button" : C ?? !1), X = pT(), W = yt(X.ref, z), [re, oe] = h.useState(!1);
  (c || S) && re && oe(!1);
  const Te = rt((Ce) => {
    v && !Ce.repeat && re && Ce.key === " " && X.stop(Ce, () => {
      X.start(Ce);
    });
  }), ye = rt((Ce) => {
    v && Ce.key === " " && re && !Ce.defaultPrevented && X.stop(Ce, () => {
      X.pulsate(Ce);
    });
  }), {
    getButtonProps: ge,
    rootRef: se
  } = fT({
    nativeButton: K,
    disabled: c,
    type: F,
    hasFormAction: q,
    tabIndex: N,
    onBeforeKeyDown: Te,
    onBeforeKeyUp: ye
  }), {
    onClick: Ae,
    onKeyDown: Fe,
    onKeyUp: $e,
    ...je
  } = ge({
    onClick: w,
    onKeyDown: O,
    onKeyUp: L
  });
  h.useImperativeHandle(o, () => ({
    focusVisible: () => {
      oe(!0), se.current.focus();
    }
  }), [se]);
  const pe = X.shouldMount && !d && !c;
  h.useEffect(() => {
    re && v && !d && X.pulsate();
  }, [d, v, re, X]);
  const Re = hr(X, "start", M, p), Qe = hr(X, "stop", T, p), Oe = hr(X, "stop", k, p), Ue = hr(X, "stop", I, p), Pe = hr(X, "stop", (Ce) => {
    re && Ce.preventDefault(), g && g(Ce);
  }, p), qe = hr(X, "start", A, p), De = hr(X, "stop", P, p), Se = hr(X, "stop", $, p), He = hr(X, "stop", (Ce) => {
    Xa(Ce.target) || oe(!1), y && y(Ce);
  }, !1), bt = rt((Ce) => {
    se.current || (se.current = Ce.currentTarget), !S && Xa(Ce.target) && (oe(!0), E && E(Ce)), R && R(Ce);
  }), ie = {};
  D && (ie.tabIndex = c ? -1 : N, c && (ie["aria-disabled"] = c), ie.type = F);
  const be = yt(n, se), Be = {
    ...r,
    centerRipple: i,
    component: a,
    disabled: c,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: v,
    suppressFocusVisible: S,
    tabIndex: N,
    focusVisible: re
  }, dt = IT(Be);
  return /* @__PURE__ */ u.jsxs(MT, {
    as: Y,
    className: J(dt.root, l),
    ownerState: Be,
    onBlur: He,
    onClick: Ae,
    onContextMenu: Qe,
    onFocus: bt,
    onKeyDown: Fe,
    onKeyUp: $e,
    onMouseDown: Re,
    onMouseLeave: Pe,
    onMouseUp: Ue,
    onDragLeave: Oe,
    onTouchEnd: De,
    onTouchMove: Se,
    onTouchStart: qe,
    ref: be,
    ...D ? ie : je,
    ...V,
    children: [s, pe ? /* @__PURE__ */ u.jsx(ET, {
      ref: W,
      center: i,
      ...j
    }) : null]
  });
});
function hr(e, t, n, r = !1) {
  return rt((o) => (n && n(o), r || e[t](o), !0));
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
function Ct(e = []) {
  return ([, t]) => t && jT(t, e);
}
function OT(e) {
  return ce("MuiAlert", e);
}
const lg = ae("MuiAlert", ["root", "action", "icon", "message", "filled", "colorSuccess", "colorInfo", "colorWarning", "colorError", "outlined", "standard"]);
function AT(e) {
  return ce("MuiCircularProgress", e);
}
ae("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "track", "circle", "circleDisableShrink"]);
const zn = 44, df = so`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ff = so`
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
`, LT = typeof df != "string" ? Jr`
        animation: ${df} 1.4s linear infinite;
      ` : null, NT = typeof ff != "string" ? Jr`
        animation: ${ff} 1.4s ease-in-out infinite;
      ` : null, BT = (e) => {
  const {
    classes: t,
    variant: n,
    color: r,
    disableShrink: o
  } = e, i = {
    root: ["root", n, `color${ee(r)}`],
    svg: ["svg"],
    track: ["track"],
    circle: ["circle", o && "circleDisableShrink"]
  };
  return ue(i, AT, t);
}, zT = U("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`color${ee(n.color)}`]];
  }
})(de(({
  theme: e
}) => {
  const t = _i(e, {
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
      style: LT || {
        animation: `${df} 1.4s linear infinite`
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
})), _T = U("svg", {
  name: "MuiCircularProgress",
  slot: "Svg"
})({
  display: "block"
  // Keeps the progress centered
}), FT = U("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.circle, n.disableShrink && t.circleDisableShrink];
  }
})(de(({
  theme: e
}) => {
  const t = _i(e, {
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
      style: NT || {
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
})), DT = U("circle", {
  name: "MuiCircularProgress",
  slot: "Track"
})(de(({
  theme: e
}) => ({
  stroke: "currentColor",
  opacity: (e.vars || e).palette.action.activatedOpacity
}))), Vp = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    style: p,
    thickness: v = 3.6,
    value: f = r.min ?? 0,
    variant: b = "indeterminate",
    ...S
  } = r, C = a ?? 0, x = c ?? 100, m = {
    ...r,
    color: i,
    disableShrink: s,
    size: d,
    thickness: v,
    value: f,
    variant: b,
    enableTrackSlot: l
  }, y = BT(m), w = {}, T = {}, k = {};
  if (b === "determinate") {
    const R = 2 * Math.PI * ((zn - v) / 2), E = x - C;
    w.strokeDasharray = R.toFixed(3), w.strokeDashoffset = E > 0 ? `${((x - f) / E * R).toFixed(3)}px` : `${R.toFixed(3)}px`, T.transform = "rotate(-90deg)", k["aria-valuenow"] = f, k["aria-valuemin"] = C, k["aria-valuemax"] = x;
  }
  return /* @__PURE__ */ u.jsx(zT, {
    className: J(y.root, o),
    style: {
      width: d,
      height: d,
      ...T,
      ...p
    },
    ownerState: m,
    ref: n,
    role: "progressbar",
    ...k,
    ...S,
    children: /* @__PURE__ */ u.jsxs(_T, {
      className: y.svg,
      ownerState: m,
      viewBox: `${zn / 2} ${zn / 2} ${zn} ${zn}`,
      children: [l ? /* @__PURE__ */ u.jsx(DT, {
        className: y.track,
        ownerState: m,
        cx: zn,
        cy: zn,
        r: (zn - v) / 2,
        fill: "none",
        strokeWidth: v,
        "aria-hidden": "true"
      }) : null, /* @__PURE__ */ u.jsx(FT, {
        className: y.circle,
        style: w,
        ownerState: m,
        cx: zn,
        cy: zn,
        r: (zn - v) / 2,
        fill: "none",
        strokeWidth: v
      })]
    })
  });
});
function WT(e) {
  return ce("MuiIconButton", e);
}
const ag = ae("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), UT = (e) => {
  const {
    classes: t,
    disabled: n,
    color: r,
    edge: o,
    size: i,
    loading: s
  } = e, l = {
    root: ["root", s && "loading", n && "disabled", r !== "default" && `color${ee(r)}`, o && `edge${ee(o)}`, `size${ee(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ue(l, WT, t);
}, HT = U(no, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.loading && t.loading, n.color !== "default" && t[`color${ee(n.color)}`], n.edge && t[`edge${ee(n.edge)}`], t[`size${ee(n.size)}`]];
  }
})(de(({
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
})), de(({
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
}))), VT = U("span", {
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
})), yr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    id: p,
    loading: v = null,
    loadingIndicator: f,
    ...b
  } = r, S = Ir(p), C = f ?? /* @__PURE__ */ u.jsx(Vp, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), x = {
    ...r,
    edge: o,
    color: l,
    disabled: a,
    disableFocusRipple: c,
    loading: v,
    loadingIndicator: C,
    size: d
  }, m = UT(x);
  return /* @__PURE__ */ u.jsxs(HT, {
    id: v ? S : p,
    className: J(m.root, s),
    centerRipple: !0,
    internalNativeButton: !0,
    focusRipple: !c,
    disabled: a || v,
    ref: n,
    ...b,
    ownerState: x,
    children: [typeof v == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: m.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ u.jsx(VT, {
        className: m.loadingIndicator,
        ownerState: x,
        children: v && C
      })
    }), i]
  });
}), KT = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
})), YT = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
})), GT = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
})), XT = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
})), QT = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
})), qT = (e) => {
  const {
    variant: t,
    color: n,
    severity: r,
    classes: o
  } = e, i = {
    root: ["root", `color${ee(n || r)}`, `${t}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return ue(i, OT, o);
}, ZT = U(Vt, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})(de(({
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
})), JT = U("div", {
  name: "MuiAlert",
  slot: "Icon"
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), eE = U("div", {
  name: "MuiAlert",
  slot: "Message"
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), tE = U("div", {
  name: "MuiAlert",
  slot: "Action"
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), cg = {
  success: /* @__PURE__ */ u.jsx(KT, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ u.jsx(YT, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ u.jsx(GT, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ u.jsx(XT, {
    fontSize: "inherit"
  })
}, ug = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiAlert"
  }), {
    action: o,
    children: i,
    className: s,
    closeText: l = "Close",
    color: a,
    icon: c,
    iconMapping: d = cg,
    onClose: p,
    role: v = "alert",
    severity: f = "success",
    slotProps: b = {},
    slots: S = {},
    variant: C = "standard",
    ...x
  } = r, m = {
    ...r,
    color: a,
    severity: f,
    variant: C,
    colorSeverity: a || f
  }, y = qT(m), w = {
    slots: S,
    slotProps: b
  }, [T, k] = he("root", {
    ref: n,
    shouldForwardComponentProp: !0,
    className: J(y.root, s),
    elementType: ZT,
    externalForwardedProps: {
      ...w,
      ...x
    },
    ownerState: m,
    additionalProps: {
      role: v,
      elevation: 0
    }
  }), [R, E] = he("icon", {
    className: y.icon,
    elementType: JT,
    externalForwardedProps: w,
    ownerState: m
  }), [O, L] = he("message", {
    className: y.message,
    elementType: eE,
    externalForwardedProps: w,
    ownerState: m
  }), [M, g] = he("action", {
    className: y.action,
    elementType: tE,
    externalForwardedProps: w,
    ownerState: m
  }), [I, P] = he("closeButton", {
    elementType: yr,
    externalForwardedProps: w,
    ownerState: m
  }), [$, A] = he("closeIcon", {
    elementType: QT,
    externalForwardedProps: w,
    ownerState: m
  });
  return /* @__PURE__ */ u.jsxs(T, {
    ...k,
    children: [c !== !1 ? /* @__PURE__ */ u.jsx(R, {
      ...E,
      children: c || d[f] || cg[f]
    }) : null, /* @__PURE__ */ u.jsx(O, {
      ...L,
      children: i
    }), o != null ? /* @__PURE__ */ u.jsx(M, {
      ...g,
      children: o
    }) : null, o == null && p ? /* @__PURE__ */ u.jsx(M, {
      ...g,
      children: /* @__PURE__ */ u.jsx(I, {
        size: "small",
        "aria-label": l,
        title: l,
        color: "inherit",
        onClick: p,
        ...P,
        children: /* @__PURE__ */ u.jsx($, {
          fontSize: "small",
          ...A
        })
      })
    }) : null]
  });
});
function nE(e) {
  return ce("MuiTypography", e);
}
ae("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom"]);
const rE = (e) => {
  const {
    align: t,
    gutterBottom: n,
    noWrap: r,
    variant: o,
    classes: i
  } = e, s = {
    root: ["root", o, e.align !== "inherit" && `align${ee(t)}`, n && "gutterBottom", r && "noWrap"]
  };
  return ue(s, nE, i);
}, oE = U("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${ee(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom];
  }
})(de(({
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
        color: `text${ee(n)}`
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
}, ke = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    variantMapping: p = dg,
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
    variantMapping: p
  }, b = l || p[d] || dg[d] || "span", S = rE(f);
  return /* @__PURE__ */ u.jsx(oE, {
    as: b,
    ref: n,
    className: J(S.root, s),
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
function To(e, t) {
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
var an = "top", On = "bottom", An = "right", cn = "left", Kp = "auto", fl = [an, On, An, cn], Mi = "start", Zs = "end", iE = "clippingParents", k1 = "viewport", ns = "popper", sE = "reference", fg = /* @__PURE__ */ fl.reduce(function(e, t) {
  return e.concat([t + "-" + Mi, t + "-" + Zs]);
}, []), T1 = /* @__PURE__ */ [].concat(fl, [Kp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Mi, t + "-" + Zs]);
}, []), lE = "beforeRead", aE = "read", cE = "afterRead", uE = "beforeMain", dE = "main", fE = "afterMain", pE = "beforeWrite", mE = "write", hE = "afterWrite", gE = [lE, aE, cE, uE, dE, fE, pE, mE, hE];
function dr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ao(e) {
  var t = xn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Mn(e) {
  var t = xn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Yp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yE(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, i = t.elements[n];
    !Mn(i) || !dr(i) || (Object.assign(i.style, r), Object.keys(o).forEach(function(s) {
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
      !Mn(o) || !dr(o) || (Object.assign(o.style, l), Object.keys(i).forEach(function(a) {
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
function ur(e) {
  return e.split("-")[0];
}
var Eo = Math.max, qa = Math.min, $i = Math.round;
function pf() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function E1() {
  return !/^((?!chrome|android).)*safari/i.test(pf());
}
function ji(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, i = 1;
  t && Mn(e) && (o = e.offsetWidth > 0 && $i(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && $i(r.height) / e.offsetHeight || 1);
  var s = Ao(e) ? xn(e) : window, l = s.visualViewport, a = !E1() && n, c = (r.left + (a && l ? l.offsetLeft : 0)) / o, d = (r.top + (a && l ? l.offsetTop : 0)) / i, p = r.width / o, v = r.height / i;
  return {
    width: p,
    height: v,
    top: d,
    right: c + p,
    bottom: d + v,
    left: c,
    x: c,
    y: d
  };
}
function Gp(e) {
  var t = ji(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function R1(e, t) {
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
function Mr(e) {
  return xn(e).getComputedStyle(e);
}
function bE(e) {
  return ["table", "td", "th"].indexOf(dr(e)) >= 0;
}
function ao(e) {
  return ((Ao(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function lu(e) {
  return dr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Yp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ao(e)
  );
}
function pg(e) {
  return !Mn(e) || // https://github.com/popperjs/popper-core/issues/837
  Mr(e).position === "fixed" ? null : e.offsetParent;
}
function SE(e) {
  var t = /firefox/i.test(pf()), n = /Trident/i.test(pf());
  if (n && Mn(e)) {
    var r = Mr(e);
    if (r.position === "fixed")
      return null;
  }
  var o = lu(e);
  for (Yp(o) && (o = o.host); Mn(o) && ["html", "body"].indexOf(dr(o)) < 0; ) {
    var i = Mr(o);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function pl(e) {
  for (var t = xn(e), n = pg(e); n && bE(n) && Mr(n).position === "static"; )
    n = pg(n);
  return n && (dr(n) === "html" || dr(n) === "body" && Mr(n).position === "static") ? t : n || SE(e) || t;
}
function Xp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cs(e, t, n) {
  return Eo(e, qa(t, n));
}
function wE(e, t, n) {
  var r = Cs(e, t, n);
  return r > n ? n : r;
}
function P1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function I1(e) {
  return Object.assign({}, P1(), e);
}
function M1(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var CE = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, I1(typeof t != "number" ? t : M1(t, fl));
};
function kE(e) {
  var t, n = e.state, r = e.name, o = e.options, i = n.elements.arrow, s = n.modifiersData.popperOffsets, l = ur(n.placement), a = Xp(l), c = [cn, An].indexOf(l) >= 0, d = c ? "height" : "width";
  if (!(!i || !s)) {
    var p = CE(o.padding, n), v = Gp(i), f = a === "y" ? an : cn, b = a === "y" ? On : An, S = n.rects.reference[d] + n.rects.reference[a] - s[a] - n.rects.popper[d], C = s[a] - n.rects.reference[a], x = pl(i), m = x ? a === "y" ? x.clientHeight || 0 : x.clientWidth || 0 : 0, y = S / 2 - C / 2, w = p[f], T = m - v[d] - p[b], k = m / 2 - v[d] / 2 + y, R = Cs(w, k, T), E = a;
    n.modifiersData[r] = (t = {}, t[E] = R, t.centerOffset = R - k, t);
  }
}
function TE(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || R1(t.elements.popper, o) && (t.elements.arrow = o));
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
function Oi(e) {
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
    x: $i(n * o) / o || 0,
    y: $i(r * o) / o || 0
  };
}
function mg(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, i = e.variation, s = e.offsets, l = e.position, a = e.gpuAcceleration, c = e.adaptive, d = e.roundOffsets, p = e.isFixed, v = s.x, f = v === void 0 ? 0 : v, b = s.y, S = b === void 0 ? 0 : b, C = typeof d == "function" ? d({
    x: f,
    y: S
  }) : {
    x: f,
    y: S
  };
  f = C.x, S = C.y;
  var x = s.hasOwnProperty("x"), m = s.hasOwnProperty("y"), y = cn, w = an, T = window;
  if (c) {
    var k = pl(n), R = "clientHeight", E = "clientWidth";
    if (k === xn(n) && (k = ao(n), Mr(k).position !== "static" && l === "absolute" && (R = "scrollHeight", E = "scrollWidth")), k = k, o === an || (o === cn || o === An) && i === Zs) {
      w = On;
      var O = p && k === T && T.visualViewport ? T.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[R]
      );
      S -= O - r.height, S *= a ? 1 : -1;
    }
    if (o === cn || (o === an || o === On) && i === Zs) {
      y = An;
      var L = p && k === T && T.visualViewport ? T.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[E]
      );
      f -= L - r.width, f *= a ? 1 : -1;
    }
  }
  var M = Object.assign({
    position: l
  }, c && RE), g = d === !0 ? PE({
    x: f,
    y: S
  }, xn(n)) : {
    x: f,
    y: S
  };
  if (f = g.x, S = g.y, a) {
    var I;
    return Object.assign({}, M, (I = {}, I[w] = m ? "0" : "", I[y] = x ? "0" : "", I.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + S + "px)" : "translate3d(" + f + "px, " + S + "px, 0)", I));
  }
  return Object.assign({}, M, (t = {}, t[w] = m ? S + "px" : "", t[y] = x ? f + "px" : "", t.transform = "", t));
}
function IE(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, i = n.adaptive, s = i === void 0 ? !0 : i, l = n.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: ur(t.placement),
    variation: Oi(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, mg(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, mg(Object.assign({}, c, {
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
var zl = {
  passive: !0
};
function $E(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, i = o === void 0 ? !0 : o, s = r.resize, l = s === void 0 ? !0 : s, a = xn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && c.forEach(function(d) {
    d.addEventListener("scroll", n.update, zl);
  }), l && a.addEventListener("resize", n.update, zl), function() {
    i && c.forEach(function(d) {
      d.removeEventListener("scroll", n.update, zl);
    }), l && a.removeEventListener("resize", n.update, zl);
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
var OE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ua(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return OE[t];
  });
}
var AE = {
  start: "end",
  end: "start"
};
function hg(e) {
  return e.replace(/start|end/g, function(t) {
    return AE[t];
  });
}
function Qp(e) {
  var t = xn(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function qp(e) {
  return ji(ao(e)).left + Qp(e).scrollLeft;
}
function LE(e, t) {
  var n = xn(e), r = ao(e), o = n.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    var c = E1();
    (c || !c && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + qp(e),
    y: a
  };
}
function NE(e) {
  var t, n = ao(e), r = Qp(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, i = Eo(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = Eo(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), l = -r.scrollLeft + qp(e), a = -r.scrollTop;
  return Mr(o || n).direction === "rtl" && (l += Eo(n.clientWidth, o ? o.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
function Zp(e) {
  var t = Mr(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function $1(e) {
  return ["html", "body", "#document"].indexOf(dr(e)) >= 0 ? e.ownerDocument.body : Mn(e) && Zp(e) ? e : $1(lu(e));
}
function ks(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = $1(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), i = xn(r), s = o ? [i].concat(i.visualViewport || [], Zp(r) ? r : []) : r, l = t.concat(s);
  return o ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ks(lu(s)))
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
function BE(e, t) {
  var n = ji(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function gg(e, t, n) {
  return t === k1 ? mf(LE(e, n)) : Ao(t) ? BE(t, n) : mf(NE(ao(e)));
}
function zE(e) {
  var t = ks(lu(e)), n = ["absolute", "fixed"].indexOf(Mr(e).position) >= 0, r = n && Mn(e) ? pl(e) : e;
  return Ao(r) ? t.filter(function(o) {
    return Ao(o) && R1(o, r) && dr(o) !== "body";
  }) : [];
}
function _E(e, t, n, r) {
  var o = t === "clippingParents" ? zE(e) : [].concat(t), i = [].concat(o, [n]), s = i[0], l = i.reduce(function(a, c) {
    var d = gg(e, c, r);
    return a.top = Eo(d.top, a.top), a.right = qa(d.right, a.right), a.bottom = qa(d.bottom, a.bottom), a.left = Eo(d.left, a.left), a;
  }, gg(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function j1(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ur(r) : null, i = r ? Oi(r) : null, s = t.x + t.width / 2 - n.width / 2, l = t.y + t.height / 2 - n.height / 2, a;
  switch (o) {
    case an:
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
    case cn:
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
  var c = o ? Xp(o) : null;
  if (c != null) {
    var d = c === "y" ? "height" : "width";
    switch (i) {
      case Mi:
        a[c] = a[c] - (t[d] / 2 - n[d] / 2);
        break;
      case Zs:
        a[c] = a[c] + (t[d] / 2 - n[d] / 2);
        break;
    }
  }
  return a;
}
function Js(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, i = n.strategy, s = i === void 0 ? e.strategy : i, l = n.boundary, a = l === void 0 ? iE : l, c = n.rootBoundary, d = c === void 0 ? k1 : c, p = n.elementContext, v = p === void 0 ? ns : p, f = n.altBoundary, b = f === void 0 ? !1 : f, S = n.padding, C = S === void 0 ? 0 : S, x = I1(typeof C != "number" ? C : M1(C, fl)), m = v === ns ? sE : ns, y = e.rects.popper, w = e.elements[b ? m : v], T = _E(Ao(w) ? w : w.contextElement || ao(e.elements.popper), a, d, s), k = ji(e.elements.reference), R = j1({
    reference: k,
    element: y,
    placement: o
  }), E = mf(Object.assign({}, y, R)), O = v === ns ? E : k, L = {
    top: T.top - O.top + x.top,
    bottom: O.bottom - T.bottom + x.bottom,
    left: T.left - O.left + x.left,
    right: O.right - T.right + x.right
  }, M = e.modifiersData.offset;
  if (v === ns && M) {
    var g = M[o];
    Object.keys(L).forEach(function(I) {
      var P = [An, On].indexOf(I) >= 0 ? 1 : -1, $ = [an, On].indexOf(I) >= 0 ? "y" : "x";
      L[I] += g[$] * P;
    });
  }
  return L;
}
function FE(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, i = n.rootBoundary, s = n.padding, l = n.flipVariations, a = n.allowedAutoPlacements, c = a === void 0 ? T1 : a, d = Oi(r), p = d ? l ? fg : fg.filter(function(b) {
    return Oi(b) === d;
  }) : fl, v = p.filter(function(b) {
    return c.indexOf(b) >= 0;
  });
  v.length === 0 && (v = p);
  var f = v.reduce(function(b, S) {
    return b[S] = Js(e, {
      placement: S,
      boundary: o,
      rootBoundary: i,
      padding: s
    })[ur(S)], b;
  }, {});
  return Object.keys(f).sort(function(b, S) {
    return f[b] - f[S];
  });
}
function DE(e) {
  if (ur(e) === Kp)
    return [];
  var t = ua(e);
  return [hg(e), t, hg(t)];
}
function WE(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !0 : s, a = n.fallbackPlacements, c = n.padding, d = n.boundary, p = n.rootBoundary, v = n.altBoundary, f = n.flipVariations, b = f === void 0 ? !0 : f, S = n.allowedAutoPlacements, C = t.options.placement, x = ur(C), m = x === C, y = a || (m || !b ? [ua(C)] : DE(C)), w = [C].concat(y).reduce(function(Y, H) {
      return Y.concat(ur(H) === Kp ? FE(t, {
        placement: H,
        boundary: d,
        rootBoundary: p,
        padding: c,
        flipVariations: b,
        allowedAutoPlacements: S
      }) : H);
    }, []), T = t.rects.reference, k = t.rects.popper, R = /* @__PURE__ */ new Map(), E = !0, O = w[0], L = 0; L < w.length; L++) {
      var M = w[L], g = ur(M), I = Oi(M) === Mi, P = [an, On].indexOf(g) >= 0, $ = P ? "width" : "height", A = Js(t, {
        placement: M,
        boundary: d,
        rootBoundary: p,
        altBoundary: v,
        padding: c
      }), N = P ? I ? An : cn : I ? On : an;
      T[$] > k[$] && (N = ua(N));
      var j = ua(N), z = [];
      if (i && z.push(A[g] <= 0), l && z.push(A[N] <= 0, A[j] <= 0), z.every(function(Y) {
        return Y;
      })) {
        O = M, E = !1;
        break;
      }
      R.set(M, z);
    }
    if (E)
      for (var F = b ? 3 : 1, V = function(H) {
        var K = w.find(function(X) {
          var W = R.get(X);
          if (W)
            return W.slice(0, H).every(function(re) {
              return re;
            });
        });
        if (K)
          return O = K, "break";
      }, D = F; D > 0; D--) {
        var q = V(D);
        if (q === "break") break;
      }
    t.placement !== O && (t.modifiersData[r]._skip = !0, t.placement = O, t.reset = !0);
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
  return [an, An, On, cn].some(function(t) {
    return e[t] >= 0;
  });
}
function HE(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, i = t.modifiersData.preventOverflow, s = Js(t, {
    elementContext: "reference"
  }), l = Js(t, {
    altBoundary: !0
  }), a = yg(s, r), c = yg(l, o, i), d = vg(a), p = vg(c);
  t.modifiersData[n] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
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
  var r = ur(e), o = [cn, an].indexOf(r) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * o, [cn, An].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function YE(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, i = o === void 0 ? [0, 0] : o, s = T1.reduce(function(d, p) {
    return d[p] = KE(p, t.rects, i), d;
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
  t.modifiersData[n] = j1({
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
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, i = o === void 0 ? !0 : o, s = n.altAxis, l = s === void 0 ? !1 : s, a = n.boundary, c = n.rootBoundary, d = n.altBoundary, p = n.padding, v = n.tether, f = v === void 0 ? !0 : v, b = n.tetherOffset, S = b === void 0 ? 0 : b, C = Js(t, {
    boundary: a,
    rootBoundary: c,
    padding: p,
    altBoundary: d
  }), x = ur(t.placement), m = Oi(t.placement), y = !m, w = Xp(x), T = qE(w), k = t.modifiersData.popperOffsets, R = t.rects.reference, E = t.rects.popper, O = typeof S == "function" ? S(Object.assign({}, t.rects, {
    placement: t.placement
  })) : S, L = typeof O == "number" ? {
    mainAxis: O,
    altAxis: O
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, O), M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, g = {
    x: 0,
    y: 0
  };
  if (k) {
    if (i) {
      var I, P = w === "y" ? an : cn, $ = w === "y" ? On : An, A = w === "y" ? "height" : "width", N = k[w], j = N + C[P], z = N - C[$], F = f ? -E[A] / 2 : 0, V = m === Mi ? R[A] : E[A], D = m === Mi ? -E[A] : -R[A], q = t.elements.arrow, Y = f && q ? Gp(q) : {
        width: 0,
        height: 0
      }, H = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : P1(), K = H[P], X = H[$], W = Cs(0, R[A], Y[A]), re = y ? R[A] / 2 - F - W - K - L.mainAxis : V - W - K - L.mainAxis, oe = y ? -R[A] / 2 + F + W + X + L.mainAxis : D + W + X + L.mainAxis, Te = t.elements.arrow && pl(t.elements.arrow), ye = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, ge = (I = M == null ? void 0 : M[w]) != null ? I : 0, se = N + re - ge - ye, Ae = N + oe - ge, Fe = Cs(f ? qa(j, se) : j, N, f ? Eo(z, Ae) : z);
      k[w] = Fe, g[w] = Fe - N;
    }
    if (l) {
      var $e, je = w === "x" ? an : cn, pe = w === "x" ? On : An, Re = k[T], Qe = T === "y" ? "height" : "width", Oe = Re + C[je], Ue = Re - C[pe], Pe = [an, cn].indexOf(x) !== -1, qe = ($e = M == null ? void 0 : M[T]) != null ? $e : 0, De = Pe ? Oe : Re - R[Qe] - E[Qe] - qe + L.altAxis, Se = Pe ? Re + R[Qe] + E[Qe] - qe - L.altAxis : Ue, He = f && Pe ? wE(De, Re, Se) : Cs(f ? De : Oe, Re, f ? Se : Ue);
      k[T] = He, g[T] = He - Re;
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
  return e === xn(e) || !Mn(e) ? Qp(e) : eR(e);
}
function nR(e) {
  var t = e.getBoundingClientRect(), n = $i(t.width) / e.offsetWidth || 1, r = $i(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function rR(e, t, n) {
  n === void 0 && (n = !1);
  var r = Mn(t), o = Mn(t) && nR(t), i = ao(t), s = ji(e, o, n), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((dr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Zp(i)) && (l = tR(t)), Mn(t) ? (a = ji(t, !0), a.x += t.clientLeft, a.y += t.clientTop) : i && (a.x = qp(i))), {
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
var xg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function aR(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, i = o === void 0 ? xg : o;
  return function(l, a, c) {
    c === void 0 && (c = i);
    var d = {
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
    }, p = [], v = !1, f = {
      state: d,
      setOptions: function(x) {
        var m = typeof x == "function" ? x(d.options) : x;
        S(), d.options = Object.assign({}, i, d.options, m), d.scrollParents = {
          reference: Ao(l) ? ks(l) : l.contextElement ? ks(l.contextElement) : [],
          popper: ks(a)
        };
        var y = iR(lR([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = y.filter(function(w) {
          return w.enabled;
        }), b(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var x = d.elements, m = x.reference, y = x.popper;
          if (bg(m, y)) {
            d.rects = {
              reference: rR(m, pl(y), d.options.strategy === "fixed"),
              popper: Gp(y)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(L) {
              return d.modifiersData[L.name] = Object.assign({}, L.data);
            });
            for (var w = 0; w < d.orderedModifiers.length; w++) {
              if (d.reset === !0) {
                d.reset = !1, w = -1;
                continue;
              }
              var T = d.orderedModifiers[w], k = T.fn, R = T.options, E = R === void 0 ? {} : R, O = T.name;
              typeof k == "function" && (d = k({
                state: d,
                options: E,
                name: O,
                instance: f
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: sR(function() {
        return new Promise(function(C) {
          f.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        S(), v = !0;
      }
    };
    if (!bg(l, a))
      return f;
    f.setOptions(c).then(function(C) {
      !v && c.onFirstUpdate && c.onFirstUpdate(C);
    });
    function b() {
      d.orderedModifiers.forEach(function(C) {
        var x = C.name, m = C.options, y = m === void 0 ? {} : m, w = C.effect;
        if (typeof w == "function") {
          var T = w({
            state: d,
            name: x,
            instance: f,
            options: y
          }), k = function() {
          };
          p.push(T || k);
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
var cR = [jE, QE, ME, xE, GE, UE, JE, EE, VE], uR = /* @__PURE__ */ aR({
  defaultModifiers: cR
});
function Ai(e) {
  var p;
  const {
    elementType: t,
    externalSlotProps: n,
    ownerState: r,
    skipResolvingSlotProps: o = !1,
    ...i
  } = e, s = o ? {} : S1(n, r), {
    props: l,
    internalRef: a
  } = w1({
    ...i,
    externalSlotProps: s
  }), c = yt(a, s == null ? void 0 : s.ref, (p = e.additionalProps) == null ? void 0 : p.ref);
  return b1(t, {
    ...l,
    ref: c
  }, r);
}
function zo(e) {
  var t;
  return parseInt(h.version, 10) >= 19 ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null : (e == null ? void 0 : e.ref) || null;
}
function dR(e) {
  return typeof e == "function" ? e() : e;
}
const O1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, l] = h.useState(null), a = yt(/* @__PURE__ */ h.isValidElement(r) ? zo(r) : null, n);
  if (ht(() => {
    i || l(dR(o) || document.body);
  }, [o, i]), ht(() => {
    if (s && !i)
      return cf(n, s), () => {
        cf(n, null);
      };
  }, [n, s, i]), i) {
    if (/* @__PURE__ */ h.isValidElement(r)) {
      const c = {
        ref: a
      };
      return /* @__PURE__ */ h.cloneElement(r, c);
    }
    return r;
  }
  return s && /* @__PURE__ */ h0.createPortal(r, s);
});
function fR(e) {
  return ce("MuiPopper", e);
}
ae("MuiPopper", ["root"]);
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
function A1(e) {
  return typeof e == "function" ? e() : e;
}
function mR(e) {
  return e.nodeType !== void 0;
}
const hR = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, fR, t);
}, gR = {}, yR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    direction: i,
    disablePortal: s,
    modifiers: l,
    open: a,
    placement: c,
    popperOptions: d,
    popperRef: p,
    slotProps: v = {},
    slots: f = {},
    TransitionProps: b,
    // @ts-ignore internal logic
    ownerState: S,
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    ...C
  } = t, x = h.useRef(null), m = yt(x, n), y = h.useRef(null), w = yt(y, p), T = h.useRef(w);
  ht(() => {
    T.current = w;
  }, [w]), h.useImperativeHandle(p, () => y.current, []);
  const k = pR(c, i), [R, E] = h.useState(k), O = h.useMemo(() => A1(r), [r]);
  h.useEffect(() => {
    y.current && y.current.forceUpdate();
  }), ht(() => {
    if (!O || !a)
      return;
    const P = (j) => {
      E(j.placement);
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
        state: j
      }) => {
        P(j);
      }
    }];
    l != null && ($ = $.concat(l)), d && d.modifiers != null && ($ = $.concat(d.modifiers));
    const A = uR(O, x.current, {
      placement: k,
      ...d,
      modifiers: $
    });
    T.current(A);
    const N = x.current;
    return () => {
      if (N) {
        const {
          style: j
        } = N, z = j.position, F = j.top, V = j.left, D = j.transform;
        A.destroy(), j.position = z, j.top = F, j.left = V, j.transform = D;
      } else
        A.destroy();
      T.current(null);
    };
  }, [O, s, l, a, d, k]);
  const L = {
    placement: R
  };
  b !== null && (L.TransitionProps = b);
  const M = hR(t), g = f.root ?? "div", I = Ai({
    elementType: g,
    externalSlotProps: v.root,
    externalForwardedProps: C,
    additionalProps: {
      role: "tooltip",
      ref: m
    },
    ownerState: t,
    className: M.root
  });
  return /* @__PURE__ */ u.jsx(g, {
    ...I,
    children: typeof o == "function" ? o(L) : o
  });
}), vR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    anchorEl: r,
    children: o,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: a = !1,
    modifiers: c,
    open: d,
    placement: p = "bottom",
    popperOptions: v = gR,
    popperRef: f,
    style: b,
    transition: S = !1,
    slotProps: C = {},
    slots: x = {},
    ...m
  } = t, [y, w] = h.useState(!0), T = () => {
    w(!1);
  }, k = () => {
    w(!0);
  };
  if (!a && !d && (!S || y))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const L = A1(r);
    R = L && mR(L) ? xt(L).body : xt(null).body;
  }
  const E = !d && a && (!S || y) ? "none" : void 0, O = S ? {
    in: d,
    onEnter: T,
    onExited: k
  } : void 0;
  return /* @__PURE__ */ u.jsx(O1, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ u.jsx(yR, {
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: c,
      ref: n,
      open: S ? !y : d,
      placement: p,
      popperOptions: v,
      popperRef: f,
      slotProps: C,
      slots: x,
      ...m,
      style: {
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: E,
        ...b
      },
      TransitionProps: O,
      children: o
    })
  });
}), xR = U(vR, {
  name: "MuiPopper",
  slot: "Root"
})({}), L1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = ul(), o = fe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: i,
    component: s,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: d,
    open: p,
    placement: v,
    popperOptions: f,
    popperRef: b,
    transition: S,
    slots: C,
    slotProps: x,
    ...m
  } = o, y = {
    anchorEl: i,
    container: l,
    disablePortal: a,
    keepMounted: c,
    modifiers: d,
    open: p,
    placement: v,
    popperOptions: f,
    popperRef: b,
    transition: S,
    ...m
  };
  return /* @__PURE__ */ u.jsx(xR, {
    as: s,
    direction: r ? "rtl" : "ltr",
    slots: C,
    slotProps: x,
    ...y,
    ref: n
  });
}), bR = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}));
function SR(e) {
  return ce("MuiChip", e);
}
const We = ae("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorDefault", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "deletable", "outlined", "filled", "avatar", "icon", "label", "deleteIcon", "focusVisible"]), wR = (e) => {
  const {
    classes: t,
    disabled: n,
    size: r,
    color: o,
    onDelete: i,
    clickable: s,
    variant: l
  } = e, a = {
    root: ["root", l, n && "disabled", `size${ee(r)}`, `color${ee(o)}`, s && "clickable", i && "deletable"],
    label: ["label"],
    avatar: ["avatar"],
    icon: ["icon"],
    deleteIcon: ["deleteIcon"]
  };
  return ue(a, SR, t);
}, CR = U("div", {
  name: "MuiChip",
  slot: "Root",
  shouldForwardProp: (e) => tn(e) && e !== "focusableWhenDisabled" && e !== "skipFocusWhenDisabled",
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
      [`& .${We.avatar}`]: t.avatar
    }, {
      [`& .${We.icon}`]: t.icon
    }, {
      [`& .${We.deleteIcon}`]: t.deleteIcon
    }, t.root, t[`size${ee(s)}`], t[`color${ee(r)}`], o && t.clickable, i && t.deletable, t[l]];
  }
})(de(({
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
    [`&.${We.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${We.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : t,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${We.icon}`]: {
      marginLeft: 5,
      marginRight: -6
    },
    [`& .${We.deleteIcon}`]: {
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
        [`& .${We.avatar}`]: {
          color: (e.vars || e).palette.primary.contrastText,
          backgroundColor: (e.vars || e).palette.primary.dark
        }
      }
    }, {
      props: {
        color: "secondary"
      },
      style: {
        [`& .${We.avatar}`]: {
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
        [`& .${We.avatar}`]: {
          marginLeft: 4,
          marginRight: -4,
          width: 18,
          height: 18,
          fontSize: e.typography.pxToRem(10)
        },
        [`& .${We.icon}`]: {
          fontSize: 18,
          marginLeft: 4,
          marginRight: -4
        },
        [`& .${We.deleteIcon}`]: {
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
        [`& .${We.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].contrastText, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].contrastText
          }
        }
      }
    })), {
      props: (n) => n.iconColor === n.color,
      style: {
        [`& .${We.icon}`]: {
          color: e.vars ? e.vars.palette.Chip.defaultIconColor : t
        }
      }
    }, {
      props: (n) => n.iconColor === n.color && n.color !== "default",
      style: {
        [`& .${We.icon}`]: {
          color: "inherit"
        }
      }
    }, {
      props: {
        onDelete: !0
      },
      style: {
        [`&.${We.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette.action.selected, `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`)
        }
      }
    }, ...Object.entries(e.palette).filter(Ct(["dark"])).map(([n]) => ({
      props: {
        color: n,
        onDelete: !0
      },
      style: {
        [`&.${We.focusVisible}`]: {
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
        [`&.${We.focusVisible}`]: {
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
        [`&:hover, &.${We.focusVisible}`]: {
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
        [`&.${We.clickable}:hover`]: {
          backgroundColor: (e.vars || e).palette.action.hover
        },
        [`&.${We.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus
        },
        [`& .${We.avatar}`]: {
          marginLeft: 4
        },
        [`& .${We.icon}`]: {
          marginLeft: 4
        },
        [`& .${We.deleteIcon}`]: {
          marginRight: 5
        }
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        [`& .${We.avatar}`]: {
          marginLeft: 2
        },
        [`& .${We.icon}`]: {
          marginLeft: 2
        },
        [`& .${We.deleteIcon}`]: {
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
        [`&.${We.clickable}:hover`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.hoverOpacity)
        },
        [`&.${We.focusVisible}`]: {
          backgroundColor: e.alpha((e.vars || e).palette[n].main, (e.vars || e).palette.action.focusOpacity)
        },
        [`& .${We.deleteIcon}`]: {
          color: e.alpha((e.vars || e).palette[n].main, 0.7),
          "&:hover, &:active": {
            color: (e.vars || e).palette[n].main
          }
        }
      }
    }))]
  };
})), kR = U("span", {
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
function Sg(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Ar = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    icon: p,
    label: v,
    onClick: f,
    onDelete: b,
    onKeyDown: S,
    onKeyUp: C,
    size: x = "medium",
    variant: m = "filled",
    tabIndex: y,
    skipFocusWhenDisabled: w = !1,
    // TODO v6: Rename to `focusableWhenDisabled`.
    slots: T = {},
    slotProps: k = {},
    ...R
  } = r, {
    nativeButton: E,
    ...O
  } = R, L = h.useRef(null), M = yt(L, n), g = (W) => {
    W.stopPropagation(), b(W);
  }, I = (W) => {
    W.currentTarget === W.target && Sg(W) && W.preventDefault(), S && S(W);
  }, P = (W) => {
    W.currentTarget === W.target && b && Sg(W) && b(W), C && C(W);
  }, $ = s !== !1 && f ? !0 : s, A = $ || b ? no : a || "div", N = {
    ...r,
    component: A,
    disabled: d,
    size: x,
    color: l,
    iconColor: /* @__PURE__ */ h.isValidElement(p) && p.props.color || l,
    onDelete: !!b,
    clickable: $,
    variant: m
  }, j = wR(N), z = A === no ? {
    component: a || "div",
    internalNativeButton: !1,
    focusVisibleClassName: j.focusVisible,
    ...b && {
      disableRipple: !0
    },
    ...E !== void 0 && {
      nativeButton: E
    }
  } : {};
  let F = null;
  b && (F = c && /* @__PURE__ */ h.isValidElement(c) ? /* @__PURE__ */ h.cloneElement(c, {
    className: J(c.props.className, j.deleteIcon),
    onClick: g
  }) : /* @__PURE__ */ u.jsx(bR, {
    className: j.deleteIcon,
    onClick: g
  }));
  let V = null;
  o && /* @__PURE__ */ h.isValidElement(o) && (V = /* @__PURE__ */ h.cloneElement(o, {
    className: J(j.avatar, o.props.className)
  }));
  let D = null;
  p && /* @__PURE__ */ h.isValidElement(p) && (D = /* @__PURE__ */ h.cloneElement(p, {
    className: J(j.icon, p.props.className)
  }));
  const q = {
    slots: T,
    slotProps: k
  }, [Y, H] = he("root", {
    elementType: CR,
    externalForwardedProps: {
      ...q,
      ...O
    },
    ownerState: N,
    // The `component` prop is preserved because `Chip` relies on it for internal logic. If `shouldForwardComponentProp` were `false`, `useSlot` would remove the `component` prop, potentially breaking the component's behavior.
    shouldForwardComponentProp: !0,
    ref: M,
    className: J(j.root, i),
    additionalProps: {
      disabled: $ && d ? !0 : void 0,
      tabIndex: w && d ? -1 : y,
      ...z
    },
    getSlotProps: (W) => ({
      ...W,
      onClick: (re) => {
        var oe;
        (oe = W.onClick) == null || oe.call(W, re), f == null || f(re);
      },
      onKeyDown: (re) => {
        var oe;
        (oe = W.onKeyDown) == null || oe.call(W, re), I(re);
      },
      onKeyUp: (re) => {
        var oe;
        (oe = W.onKeyUp) == null || oe.call(W, re), P(re);
      }
    })
  }), [K, X] = he("label", {
    elementType: kR,
    externalForwardedProps: q,
    ownerState: N,
    className: j.label
  });
  return /* @__PURE__ */ u.jsxs(Y, {
    as: A,
    ...H,
    children: [V || D, /* @__PURE__ */ u.jsx(K, {
      ...X,
      children: v
    }), F]
  });
}), TR = ot(/* @__PURE__ */ u.jsx("path", {
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
}, N1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = lo(), o = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    disablePrefersReducedMotion: a = !1,
    easing: c,
    in: d,
    onEnter: p,
    onEntered: v,
    onEntering: f,
    onExit: b,
    onExited: S,
    onExiting: C,
    style: x,
    timeout: m = o,
    ...y
  } = t, w = iu(r.motion.reducedMotion, a), T = h.useRef(null), k = yt(T, zo(l), n), R = Rn(T, f), E = Rn(T, (P, $) => {
    w.shouldReduceMotion || Dp(P);
    const A = Va({
      style: x,
      timeout: m,
      easing: c
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
    }), p && p(P, $);
  }), O = Rn(T, v), L = Rn(T, C), M = Rn(T, (P) => {
    const $ = Va({
      style: x,
      timeout: m,
      easing: c
    }, {
      mode: "exit"
    }), A = w.getTransitionTiming({
      duration: $.duration,
      delay: $.delay
    });
    P.style.transition = r.transitions.create("opacity", {
      duration: A.duration,
      easing: $.easing,
      delay: A.delay
    }), b && b(P);
  }), g = Rn(T, (P) => {
    P.style.transition = "", S && S(P);
  }), I = i ? (P) => {
    i(T.current, P);
  } : void 0;
  return /* @__PURE__ */ u.jsx(y1, {
    appear: s,
    in: d,
    nodeRef: T,
    onEnter: E,
    onEntered: O,
    onEntering: R,
    onExit: M,
    onExited: g,
    onExiting: L,
    addEndListener: I,
    reduceMotion: w.shouldReduceMotion,
    timeout: m,
    ...y,
    children: (P, {
      ownerState: $,
      ...A
    }) => {
      const N = m1(P, d, ER, RR, x, l.props.style);
      return /* @__PURE__ */ h.cloneElement(l, {
        style: N,
        ref: k,
        ...A
      });
    }
  });
});
function PR(e) {
  return ce("MuiBackdrop", e);
}
ae("MuiBackdrop", ["root", "invisible"]);
const IR = (e) => {
  const {
    classes: t,
    invisible: n
  } = e;
  return ue({
    root: ["root", n && "invisible"]
  }, PR, t);
}, MR = U("div", {
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
}), B1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    transitionDuration: p,
    ...v
  } = r, f = {
    ...r,
    component: s,
    invisible: l
  }, b = IR(f), S = {
    component: s,
    slots: d,
    slotProps: c
  }, [C, x] = he("root", {
    elementType: MR,
    externalForwardedProps: S,
    className: J(b.root, i),
    ownerState: f
  }), [m, y] = he("transition", {
    elementType: N1,
    externalForwardedProps: S,
    ownerState: f
  });
  return /* @__PURE__ */ u.jsx(m, {
    in: a,
    timeout: p,
    ...v,
    ...y,
    children: /* @__PURE__ */ u.jsx(C, {
      ...x,
      ref: n,
      children: o
    })
  });
}), $R = ae("MuiBox", ["root"]), jR = Jc(), et = KC({
  themeId: ar,
  defaultTheme: jR,
  defaultClassName: $R.root,
  generateClassName: Y0.generate
});
function OR(e) {
  return ce("MuiButton", e);
}
const po = ae("MuiButton", ["root", "text", "outlined", "contained", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), AR = /* @__PURE__ */ h.createContext({}), LR = /* @__PURE__ */ h.createContext(void 0), NR = (e) => {
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
    root: ["root", s && "loading", i, `size${ee(o)}`, `color${ee(t)}`, n && "disableElevation", r && "fullWidth", s && `loadingPosition${ee(l)}`],
    startIcon: ["icon", "startIcon"],
    endIcon: ["icon", "endIcon"],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, d = ue(c, OR, a);
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
}], BR = U(no, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ee(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth, n.loading && t.loading];
  }
})(de(({
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
    [`&.${po.disabled}`]: {
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
        [`&.${po.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${po.disabled}`]: {
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
        [`&.${po.disabled}`]: {
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
        [`&.${po.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${po.disabled}`]: {
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
        [`&.${po.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), zR = U("span", {
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
  }, ...z1]
})), _R = U("span", {
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
  }, ...z1]
})), FR = U("span", {
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
}), Je = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = h.useContext(AR), o = h.useContext(LR), i = qs(r, t), s = fe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: a = "primary",
    component: c = "button",
    className: d,
    disabled: p = !1,
    disableElevation: v = !1,
    disableFocusRipple: f = !1,
    endIcon: b,
    focusVisibleClassName: S,
    fullWidth: C = !1,
    id: x,
    loading: m = null,
    loadingIndicator: y,
    loadingPosition: w = "center",
    size: T = "medium",
    startIcon: k,
    type: R,
    variant: E = "text",
    ...O
  } = s, L = Ir(x), M = y ?? /* @__PURE__ */ u.jsx(Vp, {
    "aria-labelledby": L,
    color: "inherit",
    size: 16
  }), g = {
    ...s,
    color: a,
    component: c,
    disabled: p,
    disableElevation: v,
    disableFocusRipple: f,
    fullWidth: C,
    loading: m,
    loadingIndicator: M,
    loadingPosition: w,
    size: T,
    type: R,
    variant: E
  }, I = NR(g), P = (k || m && w === "start") && /* @__PURE__ */ u.jsx(zR, {
    className: I.startIcon,
    ownerState: g,
    children: k || /* @__PURE__ */ u.jsx(wg, {
      className: I.loadingIconPlaceholder,
      ownerState: g
    })
  }), $ = (b || m && w === "end") && /* @__PURE__ */ u.jsx(_R, {
    className: I.endIcon,
    ownerState: g,
    children: b || /* @__PURE__ */ u.jsx(wg, {
      className: I.loadingIconPlaceholder,
      ownerState: g
    })
  }), A = o || "", N = typeof m == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ u.jsx("span", {
      className: I.loadingWrapper,
      style: {
        display: "contents"
      },
      children: m && /* @__PURE__ */ u.jsx(FR, {
        className: I.loadingIndicator,
        ownerState: g,
        children: M
      })
    })
  ) : null, {
    root: j,
    ...z
  } = I;
  return /* @__PURE__ */ u.jsxs(BR, {
    ownerState: g,
    className: J(r.className, I.root, d, A),
    component: c,
    disabled: p || m,
    focusRipple: !f,
    focusVisibleClassName: J(I.focusVisible, S),
    ref: n,
    internalNativeButton: !0,
    type: R,
    id: m ? L : x,
    ...O,
    classes: z,
    children: [P, w !== "end" && N, l, w === "end" && N, $]
  });
});
function DR(e) {
  return ce("MuiCard", e);
}
ae("MuiCard", ["root"]);
const WR = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, DR, t);
}, UR = U(Vt, {
  name: "MuiCard",
  slot: "Root"
})({
  overflow: "hidden"
}), _l = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
  return /* @__PURE__ */ u.jsx(UR, {
    className: J(a.root, o),
    elevation: i ? 8 : void 0,
    ref: n,
    ownerState: l,
    ...s
  });
});
function HR(e) {
  return ce("MuiCardContent", e);
}
ae("MuiCardContent", ["root"]);
const VR = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, HR, t);
}, KR = U("div", {
  name: "MuiCardContent",
  slot: "Root"
})({
  padding: 16,
  "&:last-child": {
    paddingBottom: 24
  }
}), Fl = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
  return /* @__PURE__ */ u.jsx(KR, {
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function YR(e) {
  return ce("PrivateSwitchBase", e);
}
ae("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const GR = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: r,
    edge: o
  } = e, i = {
    root: ["root", n && "checked", r && "disabled", o && `edge${ee(o)}`],
    input: ["input"]
  };
  return ue(i, YR, t);
}, XR = U(no, {
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
}), QR = U("input", {
  name: "MuiSwitchBase",
  shouldForwardProp: tn
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
}), qR = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    autoFocus: r,
    checked: o,
    checkedIcon: i,
    defaultChecked: s,
    disabled: l,
    disableFocusRipple: a = !1,
    edge: c = !1,
    icon: d,
    id: p,
    name: v,
    onBlur: f,
    onChange: b,
    onFocus: S,
    readOnly: C,
    required: x = !1,
    tabIndex: m,
    type: y,
    value: w,
    slots: T = {},
    slotProps: k = {},
    ...R
  } = t, {
    nativeButton: E,
    ...O
  } = R, [L, M] = Ya({
    controlled: o,
    default: !!s,
    name: "SwitchBase",
    state: "checked"
  }), g = d1(), I = (H) => {
    S && S(H), g && g.onFocus && g.onFocus(H);
  }, P = (H) => {
    f && f(H), g && g.onBlur && g.onBlur(H);
  }, $ = (H) => {
    if (H.nativeEvent.defaultPrevented || C)
      return;
    const K = H.target.checked;
    M(K), b && b(H, K);
  };
  let A = l;
  g && typeof A > "u" && (A = g.disabled);
  const N = y === "checkbox" || y === "radio", j = {
    ...t,
    checked: L,
    disabled: A,
    disableFocusRipple: a,
    edge: c
  }, z = GR(j), F = {
    slots: T,
    slotProps: k
  }, [V, D] = he("root", {
    ref: n,
    elementType: XR,
    className: z.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...F,
      component: "span",
      ...O
    },
    getSlotProps: (H) => ({
      ...H,
      onFocus: (K) => {
        var X;
        (X = H.onFocus) == null || X.call(H, K), I(K);
      },
      onBlur: (K) => {
        var X;
        (X = H.onBlur) == null || X.call(H, K), P(K);
      }
    }),
    ownerState: j,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !a,
      role: void 0,
      tabIndex: null
    }
  }), [q, Y] = he("input", {
    elementType: QR,
    className: z.input,
    externalForwardedProps: F,
    getSlotProps: (H) => ({
      ...H,
      onChange: (K) => {
        var X;
        (X = H.onChange) == null || X.call(H, K), $(K);
      }
    }),
    ownerState: j,
    additionalProps: {
      autoFocus: r,
      checked: o,
      defaultChecked: s,
      disabled: A,
      id: N ? p : void 0,
      name: v,
      readOnly: C,
      required: x,
      tabIndex: m,
      type: y,
      ...y === "checkbox" && w === void 0 ? {} : {
        value: w
      }
    }
  });
  return /* @__PURE__ */ u.jsxs(V, {
    ...D,
    children: [/* @__PURE__ */ u.jsx(q, {
      ...Y
    }), L ? i : d]
  });
});
function Cg(e) {
  return e.substring(2).toLowerCase();
}
function ZR(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function JR(e) {
  const {
    children: t,
    disableReactTree: n = !1,
    mouseEvent: r = "onClick",
    onClickAway: o,
    touchEvent: i = "onTouchEnd"
  } = e, s = h.useRef(!1), l = h.useRef(null), a = h.useRef(!1), c = h.useRef(!1);
  h.useEffect(() => (setTimeout(() => {
    a.current = !0;
  }, 0), () => {
    a.current = !1;
  }), []);
  const d = yt(zo(t), l), p = rt((b) => {
    const S = c.current;
    c.current = !1;
    const C = xt(l.current);
    if (!a.current || !l.current || "clientX" in b && ZR(b, C))
      return;
    if (s.current) {
      s.current = !1;
      return;
    }
    let x;
    b.composedPath ? x = b.composedPath().includes(l.current) : x = !To(C.documentElement, b.target) || To(l.current, b.target), !x && (n || !S) && o(b);
  }), v = (b) => (S) => {
    c.current = !0;
    const C = t.props[b];
    C && C(S);
  }, f = {
    ref: d
  };
  return i !== !1 && (f[i] = v(i)), h.useEffect(() => {
    if (i !== !1) {
      const b = Cg(i), S = xt(l.current), C = () => {
        s.current = !0;
      };
      return S.addEventListener(b, p), S.addEventListener("touchmove", C), () => {
        S.removeEventListener(b, p), S.removeEventListener("touchmove", C);
      };
    }
  }, [p, i]), r !== !1 && (f[r] = v(r)), h.useEffect(() => {
    if (r !== !1) {
      const b = Cg(r), S = xt(l.current);
      return S.addEventListener(b, p), () => {
        S.removeEventListener(b, p);
      };
    }
  }, [p, r]), /* @__PURE__ */ h.cloneElement(t, f);
}
function _1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function eP(e) {
  const t = xt(e);
  return e === t.body || e === t.documentElement ? Kn(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ts(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function kg(e) {
  return parseFloat(Kn(e).getComputedStyle(e).paddingRight) || 0;
}
function tP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Tg(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const l = !i.includes(s), a = !tP(s);
    l && a && Ts(s, o);
  });
}
function nP(e, t) {
  const n = [], r = e.container;
  if (!t.disableScrollLock) {
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = xt(r).body;
    else {
      const s = r.parentElement, l = Kn(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    if (eP(i)) {
      const s = _1(Kn(i));
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
function rP(e) {
  const t = [];
  return [].forEach.call(e.children, (n) => {
    n.getAttribute("aria-hidden") === "true" && t.push(n);
  }), t;
}
class oP {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ts(t.modalRef, !1);
    const o = rP(n);
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
    o.restore || (o.restore = nP(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const o = this.containers.findIndex((s) => s.modals.includes(t)), i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Ts(t.modalRef, n), Tg(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ts(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const hf = "data-mui-focusable";
function Eg(e) {
  return e ? e.hasAttribute(hf) ? e : e.querySelector(`[${hf}]`) : null;
}
const iP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function F1(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function sP(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function lP(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || sP(e));
}
function aP(e) {
  const t = [], n = [];
  return Array.from(e.querySelectorAll(iP)).forEach((r, o) => {
    const i = F1(r);
    i === -1 || !lP(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }));
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map((r) => r.node).concat(t);
}
function cP() {
  return !0;
}
function uP(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = aP,
    isEnabled: s = cP,
    open: l
  } = e, a = h.useRef(!1), c = h.useRef(null), d = h.useRef(null), p = h.useRef(null), v = h.useRef(null), f = h.useRef(!1), b = h.useRef(null), S = yt(zo(t), b), C = h.useRef(null);
  h.useEffect(() => {
    !l || !b.current || (f.current = !n);
  }, [n, l]), h.useEffect(() => {
    if (a.current = !1, !l || !b.current)
      return;
    const y = xt(b.current), w = or(y), T = Eg(b.current) ?? b.current;
    return To(b.current, w) || (T.hasAttribute("tabIndex") || T.setAttribute("tabIndex", "-1"), f.current && T.focus()), () => {
      !o && p.current && (a.current = !0, p.current.focus(), p.current = null);
    };
  }, [l]), h.useEffect(() => {
    if (!l || !b.current)
      return;
    const y = xt(b.current), w = (R) => {
      if (C.current = R, r || !s() || R.key !== "Tab")
        return;
      const E = b.current, O = or(y);
      if (E === null)
        return;
      const L = Eg(E);
      if (O === E || O === L) {
        const g = i(E);
        if (g.length === 0)
          return;
        R.preventDefault(), R.shiftKey ? g[g.length - 1].focus() : g[0].focus();
        return;
      }
      if (To(E, O)) {
        const g = i(E), I = g.indexOf(O);
        if (I === -1 || !g.some((A) => F1(A) > 0))
          return;
        R.preventDefault();
        let $ = 0;
        R.shiftKey ? $ = I <= 0 ? g.length - 1 : I - 1 : $ = I === g.length - 1 ? 0 : I + 1, g[$].focus();
      }
    }, T = () => {
      var L, M;
      const R = b.current;
      if (R === null)
        return;
      const E = or(y);
      if (!y.hasFocus() || !s() || a.current) {
        a.current = !1;
        return;
      }
      if (To(R, E) || r && E !== c.current && E !== d.current)
        return;
      if (E !== v.current)
        v.current = null;
      else if (v.current !== null)
        return;
      if (!f.current)
        return;
      let O = [];
      if ((E === c.current || E === d.current) && (O = i(b.current)), O.length > 0) {
        const g = !!((L = C.current) != null && L.shiftKey && ((M = C.current) == null ? void 0 : M.key) === "Tab"), I = O[0], P = O[O.length - 1];
        typeof I != "string" && typeof P != "string" && (g ? P.focus() : I.focus());
      } else
        R.focus();
    };
    y.addEventListener("focusin", T), y.addEventListener("keydown", w, !0);
    const k = setInterval(() => {
      const R = or(y);
      R && R.tagName === "BODY" && T();
    }, 50);
    return () => {
      clearInterval(k), y.removeEventListener("focusin", T), y.removeEventListener("keydown", w, !0);
    };
  }, [n, r, o, s, l, i]);
  const x = (y) => {
    p.current === null && (p.current = y.relatedTarget), f.current = !0, v.current = y.target;
    const w = t.props.onFocus;
    w && w(y);
  }, m = (y) => {
    p.current === null && (p.current = y.relatedTarget), f.current = !0;
  };
  return /* @__PURE__ */ u.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ u.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: c,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ h.cloneElement(t, {
      ref: S,
      onFocus: x
    }), /* @__PURE__ */ u.jsx("div", {
      tabIndex: l ? 0 : -1,
      onFocus: m,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
function dP(e) {
  return typeof e == "function" ? e() : e;
}
function fP(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Rg = () => {
}, Dl = new oP();
function pP(e) {
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
  } = e, d = h.useRef({}), p = h.useRef(null), v = h.useRef(null), f = h.useRef(null), b = yt(f, c), [S, C] = h.useState(!a), x = fP(s);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const y = () => xt(p.current), w = () => (d.current.modalRef = f.current, d.current.mount = p.current, d.current), T = () => {
    Dl.mount(w(), {
      disableScrollLock: n
    }), f.current && (f.current.scrollTop = 0);
  }, k = rt(() => {
    const A = dP(t) || y().body;
    Dl.add(w(), A), f.current && T();
  }), R = () => Dl.isTopModal(w()), E = rt((A) => {
    p.current = A, A && (v.current = A, a && R() ? T() : f.current && Ts(f.current, m));
  }), O = h.useCallback(() => {
    Dl.remove(w(), m);
  }, [m]);
  h.useEffect(() => () => {
    O();
  }, [O]), h.useEffect(() => {
    a ? k() : (!x || !r) && O();
  }, [a, O, x, r, k]);
  const L = (A) => (N) => {
    var j;
    (j = A.onKeyDown) == null || j.call(A, N), !(N.key !== "Escape" || N.which === 229 || // Wait until IME is settled.
    !R()) && (N.stopPropagation(), l && l(N, "escapeKeyDown"));
  }, M = (A) => (N) => {
    var j;
    (j = A.onClick) == null || j.call(A, N), N.target === N.currentTarget && l && l(N, "backdropClick");
  }, g = (A = {}) => {
    const N = Ga(e);
    delete N.onTransitionEnter, delete N.onTransitionExited;
    const j = {
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
      ...j,
      onKeyDown: L(j),
      ref: b
    };
  }, I = (A = {}) => {
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
      C(!0), i && i(), r && O();
    };
    return {
      onEnter: tg(A, (s == null ? void 0 : s.props.onEnter) ?? Rg),
      onExited: tg(N, (s == null ? void 0 : s.props.onExited) ?? Rg)
    };
  }, $ = !a && x && !S ? v.current ?? t : t;
  return {
    getRootProps: g,
    getBackdropProps: I,
    getTransitionProps: P,
    rootRef: b,
    portalRef: E,
    portalContainer: $,
    isTopModal: R,
    exited: S,
    hasTransition: x
  };
}
function mP(e) {
  return ce("MuiModal", e);
}
ae("MuiModal", ["root", "hidden", "backdrop"]);
const hP = (e) => {
  const {
    open: t,
    exited: n,
    classes: r
  } = e;
  return ue({
    root: ["root", !t && n && "hidden"],
    backdrop: ["backdrop"]
  }, mP, r);
}, gP = U("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.open && n.exited && t.hidden];
  }
})(de(({
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
}))), yP = U(B1, {
  name: "MuiModal",
  slot: "Backdrop"
})({
  zIndex: -1
}), D1 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    disableEnforceFocus: p = !1,
    disablePortal: v = !1,
    disableRestoreFocus: f = !1,
    disableScrollLock: b = !1,
    hideBackdrop: S = !1,
    keepMounted: C = !1,
    onClose: x,
    onTransitionEnter: m,
    onTransitionExited: y,
    open: w,
    slotProps: T = {},
    slots: k = {},
    // eslint-disable-next-line react/prop-types
    theme: R,
    ...E
  } = r, O = {
    ...r,
    closeAfterTransition: s,
    disableAutoFocus: d,
    disableEnforceFocus: p,
    disablePortal: v,
    disableRestoreFocus: f,
    disableScrollLock: b,
    hideBackdrop: S,
    keepMounted: C
  }, {
    getRootProps: L,
    getBackdropProps: M,
    getTransitionProps: g,
    portalRef: I,
    portalContainer: P,
    isTopModal: $,
    exited: A,
    hasTransition: N
  } = pP({
    ...O,
    rootRef: n
  }), j = {
    ...O,
    exited: A
  }, z = hP(j), F = {};
  if (l.props.tabIndex === void 0 && (F.tabIndex = "-1"), N) {
    const {
      onEnter: K,
      onExited: X
    } = g();
    F.onEnter = K, F.onExited = X;
  }
  const V = {
    slots: k,
    slotProps: T
  }, [D, q] = he("root", {
    ref: n,
    elementType: gP,
    externalForwardedProps: {
      ...V,
      ...E,
      component: c
    },
    getSlotProps: L,
    ownerState: j,
    className: J(i, z == null ? void 0 : z.root, !j.open && j.exited && (z == null ? void 0 : z.hidden))
  }), [Y, H] = he("backdrop", {
    elementType: yP,
    externalForwardedProps: V,
    shouldForwardComponentProp: !0,
    getSlotProps: (K) => M({
      ...K,
      onClick: (X) => {
        K != null && K.onClick && K.onClick(X);
      }
    }),
    className: z == null ? void 0 : z.backdrop,
    ownerState: j
  });
  return !C && !w && (!N || A) ? null : /* @__PURE__ */ u.jsx(O1, {
    ref: I,
    container: P,
    disablePortal: v,
    children: /* @__PURE__ */ u.jsxs(D, {
      ...q,
      children: [S ? null : /* @__PURE__ */ u.jsx(Y, {
        ...H
      }), /* @__PURE__ */ u.jsx(uP, {
        disableEnforceFocus: p,
        disableAutoFocus: d,
        disableRestoreFocus: f,
        isEnabled: $,
        open: w,
        children: /* @__PURE__ */ h.cloneElement(l, F)
      })]
    })
  });
});
function vP(e) {
  return ce("MuiDialog", e);
}
ae("MuiDialog", ["root", "backdrop", "scrollPaper", "scrollBody", "container", "paper", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const W1 = /* @__PURE__ */ h.createContext({}), xP = U(B1, {
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
    container: ["container", `scroll${ee(n)}`],
    paper: ["paper", `paperWidth${ee(String(r))}`, o && "paperFullWidth", i && "paperFullScreen"]
  };
  return ue(s, vP, t);
}, SP = U(D1, {
  name: "MuiDialog",
  slot: "Root"
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), wP = U("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.container, t[`scroll${ee(n.scroll)}`]];
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
}), CP = U(Vt, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.paper, t[`paperWidth${ee(String(n.maxWidth))}`], n.fullWidth && t.paperFullWidth, n.fullScreen && t.paperFullScreen];
  }
})(de(({
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
}))), Go = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDialog"
  }), o = lo(), i = {
    enter: o.transitions.duration.enteringScreen,
    exit: o.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    "aria-modal": a = !0,
    children: c,
    className: d,
    fullScreen: p = !1,
    fullWidth: v = !1,
    maxWidth: f = "sm",
    onClick: b,
    onClose: S,
    open: C,
    PaperComponent: x = Vt,
    role: m = "dialog",
    scroll: y = "paper",
    slots: w = {},
    slotProps: T = {},
    transitionDuration: k = i,
    ...R
  } = r, E = {
    ...r,
    fullScreen: p,
    fullWidth: v,
    maxWidth: f,
    scroll: y
  }, O = bP(E), L = h.useRef(), M = (K) => {
    L.current = K.target === K.currentTarget;
  }, g = (K) => {
    b && b(K), L.current && (L.current = null, S && S(K, "backdropClick"));
  }, I = Ir(l), P = h.useMemo(() => ({
    titleId: I
  }), [I]), $ = {
    slots: w,
    slotProps: T
  }, [A, N] = he("root", {
    elementType: SP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: E,
    className: J(O.root, d),
    ref: n
  }), [j, z] = he("backdrop", {
    elementType: xP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: E,
    className: O.backdrop
  }), [F, V] = he("paper", {
    elementType: CP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    ownerState: E,
    className: O.paper,
    additionalProps: {
      elevation: 24,
      role: m,
      "aria-describedby": s,
      "aria-labelledby": I,
      "aria-modal": a,
      tabIndex: -1,
      [hf]: ""
    }
  }), [D, q] = he("container", {
    elementType: wP,
    externalForwardedProps: $,
    ownerState: E,
    className: O.container
  }), [Y, H] = he("transition", {
    elementType: N1,
    externalForwardedProps: $,
    ownerState: E,
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
      backdrop: j
    },
    slotProps: {
      backdrop: {
        transitionDuration: k,
        ...z
      }
    },
    onClose: S,
    open: C,
    onClick: g,
    ...N,
    ...R,
    children: /* @__PURE__ */ u.jsx(Y, {
      ...H,
      children: /* @__PURE__ */ u.jsx(D, {
        onMouseDown: M,
        ...q,
        children: /* @__PURE__ */ u.jsx(F, {
          as: x,
          ...V,
          children: /* @__PURE__ */ u.jsx(W1.Provider, {
            value: P,
            children: c
          })
        })
      })
    })
  });
});
function kP(e) {
  return ce("MuiDialogActions", e);
}
ae("MuiDialogActions", ["root", "spacing"]);
const TP = (e) => {
  const {
    classes: t,
    disableSpacing: n
  } = e;
  return ue({
    root: ["root", !n && "spacing"]
  }, kP, t);
}, EP = U("div", {
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
}), Xo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: o,
    disableSpacing: i = !1,
    ...s
  } = r, l = {
    ...r,
    disableSpacing: i
  }, a = TP(l);
  return /* @__PURE__ */ u.jsx(EP, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function RP(e) {
  return ce("MuiDialogContent", e);
}
ae("MuiDialogContent", ["root", "dividers"]);
function PP(e) {
  return ce("MuiDialogTitle", e);
}
const IP = ae("MuiDialogTitle", ["root"]), MP = (e) => {
  const {
    classes: t,
    dividers: n
  } = e;
  return ue({
    root: ["root", n && "dividers"]
  }, RP, t);
}, $P = U("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dividers && t.dividers];
  }
})(de(({
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
      [`.${IP.root} + &`]: {
        paddingTop: 0
      }
    }
  }]
}))), Qo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: o,
    dividers: i = !1,
    ...s
  } = r, l = {
    ...r,
    dividers: i
  }, a = MP(l);
  return /* @__PURE__ */ u.jsx($P, {
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    ...s
  });
});
function jP(e) {
  return ce("MuiDialogContentText", e);
}
ae("MuiDialogContentText", ["root"]);
const OP = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"]
  }, jP, t);
  return {
    ...t,
    // forward classes to the Typography
    ...r
  };
}, AP = U(ke, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiDialogContentText",
  slot: "Root"
})({}), Gu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDialogContentText"
  }), {
    children: o,
    className: i,
    ...s
  } = r, l = OP(s);
  return /* @__PURE__ */ u.jsx(AP, {
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: n,
    ownerState: s,
    className: J(l.root, i),
    ...r,
    classes: l
  });
}), LP = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, PP, t);
}, NP = U(ke, {
  name: "MuiDialogTitle",
  slot: "Root"
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), qo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiDialogTitle"
  }), {
    className: o,
    id: i,
    ...s
  } = r, l = r, a = LP(l), {
    titleId: c = i
  } = h.useContext(W1);
  return /* @__PURE__ */ u.jsx(NP, {
    component: "h2",
    className: J(a.root, o),
    ownerState: l,
    ref: n,
    variant: "h6",
    id: i ?? c,
    ...s
  });
}), Pg = ae("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "vertical", "withChildren", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function U1(e) {
  return ce("MuiSelect", e);
}
const vo = ae("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "nativeInput", "error"]), BP = (e) => {
  const {
    classes: t,
    disableUnderline: n,
    startAdornment: r,
    endAdornment: o,
    size: i,
    hiddenLabel: s,
    multiline: l
  } = e, a = {
    root: ["root", !n && "underline", r && "adornedStart", o && "adornedEnd", i === "small" && `size${ee(i)}`, s && "hiddenLabel", l && "multiline"],
    input: ["input"]
  }, c = ue(a, O2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...c
  };
}, zP = U(ru, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...tu(e, t), !n.disableUnderline && t.underline];
  }
})(de(({
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
    [`&.${fo.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${fo.disabled}`]: {
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
        [`&.${fo.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${fo.error}`]: {
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
        [`&:hover:not(.${fo.disabled}, .${fo.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${fo.disabled}:before`]: {
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
        [`&.${vo.root}`]: {
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
})), _P = U(ou, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: nu
})(de(({
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
  const r = fe({
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
    slots: p = {},
    type: v = "text",
    ...f
  } = r, b = {
    ...r,
    disableUnderline: o,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    type: v
  }, S = BP(r), C = {
    root: {
      ownerState: b
    },
    input: {
      ownerState: b
    }
  }, x = d ? _t(C, d) : C, m = p.root ?? zP, y = p.input ?? _P;
  return /* @__PURE__ */ u.jsx(Wp, {
    slots: {
      root: m,
      input: y
    },
    slotProps: x,
    fullWidth: i,
    inputComponent: l,
    multiline: a,
    ref: n,
    type: v,
    ...f,
    classes: S
  });
});
Jp.muiName = "Input";
function FP(e) {
  return ce("MuiFormControl", e);
}
ae("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const DP = (e) => {
  const {
    classes: t,
    margin: n,
    fullWidth: r
  } = e, o = {
    root: ["root", n !== "none" && `margin${ee(n)}`, r && "fullWidth"]
  };
  return ue(o, FP, t);
}, WP = U("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`margin${ee(n.margin)}`], n.fullWidth && t.fullWidth];
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
}), da = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    fullWidth: p = !1,
    hiddenLabel: v = !1,
    margin: f = "none",
    required: b = !1,
    size: S = "medium",
    variant: C = "outlined",
    ...x
  } = r, m = {
    ...r,
    color: s,
    component: l,
    disabled: a,
    error: c,
    fullWidth: p,
    hiddenLabel: v,
    margin: f,
    required: b,
    size: S,
    variant: C
  }, y = DP(m), [w, T] = h.useState(() => {
    let $ = !1;
    return o && h.Children.forEach(o, (A) => {
      if (!Vu(A, ["Input", "Select"]))
        return;
      const N = Vu(A, ["Select"]) ? A.props.input : A;
      N && E2(N.props) && ($ = !0);
    }), $;
  }), [k, R] = h.useState(() => {
    let $ = !1;
    return o && h.Children.forEach(o, (A) => {
      Vu(A, ["Input", "Select"]) && (Ha(A.props, !0) || Ha(A.props.inputProps, !0)) && ($ = !0);
    }), $;
  }), [E, O] = h.useState(!1);
  a && E && O(!1);
  const L = d !== void 0 && !a ? d : E;
  let M;
  h.useRef(!1);
  const g = h.useCallback(() => {
    R(!0);
  }, []), I = h.useCallback(() => {
    R(!1);
  }, []), P = h.useMemo(() => ({
    adornedStart: w,
    setAdornedStart: T,
    color: s,
    disabled: a,
    error: c,
    filled: k,
    focused: L,
    fullWidth: p,
    hiddenLabel: v,
    size: S,
    onBlur: () => {
      O(!1);
    },
    onFocus: () => {
      O(!0);
    },
    onEmpty: I,
    onFilled: g,
    registerEffect: M,
    required: b,
    variant: C
  }), [w, s, a, c, k, L, p, v, M, I, g, b, S, C]);
  return /* @__PURE__ */ u.jsx(dl.Provider, {
    value: P,
    children: /* @__PURE__ */ u.jsx(WP, {
      as: l,
      ownerState: m,
      className: J(y.root, i),
      ref: n,
      ...x,
      children: o
    })
  });
}), UP = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: r,
    error: o,
    required: i
  } = e, s = {
    root: ["root", n && "disabled", `labelPlacement${ee(r)}`, o && "error", i && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", o && "error"]
  };
  return ue(s, A2, t);
}, HP = U("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${fs.label}`]: t.label
    }, t.root, t[`labelPlacement${ee(n.labelPlacement)}`]];
  }
})(de(({
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
  [`&.${fs.disabled}`]: {
    cursor: "default"
  },
  [`& .${fs.label}`]: {
    [`&.${fs.disabled}`]: {
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
}))), VP = U("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk"
})(de(({
  theme: e
}) => ({
  [`&.${fs.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), KP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    checked: o,
    className: i,
    control: s,
    disabled: l,
    disableTypography: a,
    inputRef: c,
    label: d,
    labelPlacement: p = "end",
    name: v,
    onChange: f,
    required: b,
    slots: S = {},
    slotProps: C = {},
    value: x,
    ...m
  } = r, [y, w] = Bo({
    props: r,
    states: ["error"]
  }), T = l ?? s.props.disabled ?? (w == null ? void 0 : w.disabled), k = b ?? s.props.required, R = {
    disabled: T,
    required: k
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((P) => {
    typeof s.props[P] > "u" && typeof r[P] < "u" && (R[P] = r[P]);
  });
  const E = {
    ...r,
    disabled: T,
    labelPlacement: p,
    required: k,
    error: y.error
  }, O = UP(E), L = {
    slots: S,
    slotProps: C
  }, [M, g] = he("typography", {
    elementType: ke,
    externalForwardedProps: L,
    ownerState: E
  });
  let I = d;
  return I != null && I.type !== ke && !a && (I = /* @__PURE__ */ u.jsx(M, {
    component: "span",
    ...g,
    className: J(O.label, g == null ? void 0 : g.className),
    children: I
  })), /* @__PURE__ */ u.jsxs(HP, {
    className: J(O.root, i),
    ownerState: E,
    ref: n,
    ...m,
    children: [/* @__PURE__ */ h.cloneElement(s, R), k ? /* @__PURE__ */ u.jsxs("div", {
      children: [I, /* @__PURE__ */ u.jsxs(VP, {
        ownerState: E,
        "aria-hidden": !0,
        className: O.asterisk,
        children: [" ", "*"]
      })]
    }) : I]
  });
});
var Ig;
const YP = (e) => {
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
    root: ["root", o && "disabled", i && "error", r && `size${ee(r)}`, n && "contained", l && "focused", s && "filled", a && "required"]
  };
  return ue(c, L2, t);
}, GP = U("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.size && t[`size${ee(n.size)}`], n.contained && t.contained, n.filled && t.filled];
  }
})(de(({
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
}))), XP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    margin: p,
    required: v,
    variant: f,
    ...b
  } = r, [S] = Bo({
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
  const x = YP(C);
  return /* @__PURE__ */ u.jsx(GP, {
    as: s,
    className: J(x.root, i),
    ref: n,
    ...b,
    ownerState: C,
    children: o === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      Ig || (Ig = /* @__PURE__ */ u.jsx("span", {
        className: "notranslate",
        "aria-hidden": !0,
        children: "​"
      }))
    ) : o
  });
}), QP = (e) => {
  const {
    classes: t,
    color: n,
    focused: r,
    disabled: o,
    error: i,
    filled: s,
    required: l
  } = e, a = {
    root: ["root", `color${ee(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return ue(a, N2, t);
}, qP = U("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color === "secondary" && t.colorSecondary, n.filled && t.filled];
  }
})(de(({
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
      [`&.${ws.focused}`]: {
        color: (e.vars || e).palette[t].main
      }
    }
  })), {
    props: {},
    style: {
      [`&.${ws.disabled}`]: {
        color: (e.vars || e).palette.text.disabled
      },
      [`&.${ws.error}`]: {
        color: (e.vars || e).palette.error.main
      }
    }
  }]
}))), ZP = U("span", {
  name: "MuiFormLabel",
  slot: "Asterisk"
})(de(({
  theme: e
}) => ({
  [`&.${ws.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}))), JP = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    focused: p,
    required: v,
    ...f
  } = r, [b] = Bo({
    props: r,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), S = {
    ...r,
    color: b.color || "primary",
    component: l,
    disabled: b.disabled,
    error: b.error,
    filled: b.filled,
    focused: b.focused,
    required: b.required
  }, C = QP(S);
  return /* @__PURE__ */ u.jsxs(qP, {
    as: l,
    ownerState: S,
    className: J(C.root, i),
    ref: n,
    ...f,
    children: [o, b.required && /* @__PURE__ */ u.jsxs(ZP, {
      ownerState: S,
      "aria-hidden": !0,
      className: C.asterisk,
      children: [" ", "*"]
    })]
  });
});
function Es(e) {
  return `scale(${e}, ${e ** 2})`;
}
const eI = {
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
}, tI = {
  opacity: 0,
  transform: Es(0.75),
  visibility: "hidden"
}, el = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const {
    addEndListener: r,
    appear: o = !0,
    children: i,
    disablePrefersReducedMotion: s = !1,
    easing: l,
    in: a,
    onEnter: c,
    onEntered: d,
    onEntering: p,
    onExit: v,
    onExited: f,
    onExiting: b,
    style: S,
    timeout: C = "auto",
    ...x
  } = t, m = h.useRef(null), y = lo(), w = iu(y.motion.reducedMotion, s), T = h.useRef(null), k = yt(T, zo(i), n), R = Rn(T, p), E = Rn(T, (P, $) => {
    w.shouldReduceMotion || Dp(P);
    const {
      duration: A,
      delay: N,
      easing: j
    } = Va({
      style: S,
      timeout: C,
      easing: l
    }, {
      mode: "enter"
    });
    let z;
    C === "auto" && !w.shouldReduceMotion ? (z = y.transitions.getAutoHeightDuration(P.clientHeight), m.current = z) : (z = A, m.current = null);
    const F = w.getTransitionTiming({
      duration: z,
      delay: N
    });
    P.style.transition = [y.transitions.create("opacity", {
      duration: F.duration,
      delay: F.delay
    }), y.transitions.create("transform", {
      duration: typeof F.duration == "string" ? F.duration : F.duration * 0.666,
      delay: F.delay,
      easing: j
    })].join(","), c && c(P, $);
  }), O = Rn(T, d), L = Rn(T, b), M = Rn(T, (P) => {
    const {
      duration: $,
      delay: A,
      easing: N
    } = Va({
      style: S,
      timeout: C,
      easing: l
    }, {
      mode: "exit"
    });
    let j;
    C === "auto" && !w.shouldReduceMotion ? (j = y.transitions.getAutoHeightDuration(P.clientHeight), m.current = j) : (j = $, m.current = null);
    const z = w.getTransitionTiming({
      duration: j,
      delay: A
    });
    P.style.transition = [y.transitions.create("opacity", {
      duration: z.duration,
      delay: z.delay
    }), y.transitions.create("transform", {
      duration: typeof z.duration == "string" ? z.duration : z.duration * 0.666,
      delay: z.delay || (typeof z.duration == "string" ? z.duration : z.duration * 0.333),
      easing: N
    })].join(","), P.style.opacity = 0, P.style.transform = Es(0.75), v && v(P);
  }), g = Rn(T, (P) => {
    P.style.transition = "", f && f(P);
  }), I = r ? (P) => {
    r(T.current, P);
  } : void 0;
  return /* @__PURE__ */ u.jsx(y1, {
    appear: o,
    in: a,
    nodeRef: T,
    onEnter: E,
    onEntered: O,
    onEntering: R,
    onExit: M,
    onExited: g,
    onExiting: L,
    addEndListener: I,
    getAutoTimeout: C === "auto" ? () => m.current : void 0,
    reduceMotion: w.shouldReduceMotion,
    timeout: C === "auto" ? null : C,
    ...x,
    children: (P, {
      ownerState: $,
      ...A
    }) => {
      const N = m1(P, a, eI, tI, S, i.props.style);
      return /* @__PURE__ */ h.cloneElement(i, {
        style: N,
        ref: k,
        ...A
      });
    }
  });
});
el && (el.muiSupportAuto = !0);
function nI(e) {
  return ce("MuiInputLabel", e);
}
const rI = ae("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]), oI = (e) => {
  const {
    classes: t,
    disableUnderline: n
  } = e, o = ue({
    root: ["root", !n && "underline"],
    input: ["input"]
  }, B2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...o
  };
}, iI = U(ru, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [...tu(e, t), !n.disableUnderline && t.underline];
  }
})(de(({
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
        [`label + &, .${rI.root} + &`]: {
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
          ...Ze(e, "border-bottom-color", {
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
})), sI = U(ou, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: nu
})({}), em = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    type: p = "text",
    ...v
  } = r, f = oI(r), S = {
    root: {
      ownerState: {
        disableUnderline: o
      }
    }
  }, C = c ? _t(c, S) : S, x = d.root ?? iI, m = d.input ?? sI;
  return /* @__PURE__ */ u.jsx(Wp, {
    slots: {
      root: x,
      input: m
    },
    slotProps: C,
    fullWidth: i,
    inputComponent: s,
    multiline: l,
    ref: n,
    type: p,
    ...v,
    classes: f
  });
});
em.muiName = "Input";
function lI(e) {
  return ce("MuiInputAdornment", e);
}
const di = ae("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Mg;
const aI = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[`position${ee(n.position)}`], n.disablePointerEvents === !0 && t.disablePointerEvents, t[n.variant]];
}, cI = (e) => {
  const {
    classes: t,
    disablePointerEvents: n,
    hiddenLabel: r,
    position: o,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", n && "disablePointerEvents", o && `position${ee(o)}`, s, r && "hiddenLabel", i && `size${ee(i)}`]
  };
  return ue(l, lI, t);
}, uI = U("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: aI
})(de(({
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
      [`&.${di.positionStart}&:not(.${di.hiddenLabel})`]: {
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
}))), dI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    ...p
  } = r, v = d1() || {};
  let f = d;
  d && v.variant, v && !f && (f = v.variant);
  const b = {
    ...r,
    hiddenLabel: v.hiddenLabel,
    size: v.size,
    disablePointerEvents: l,
    position: c,
    variant: f
  }, S = cI(b);
  return /* @__PURE__ */ u.jsx(dl.Provider, {
    value: null,
    children: /* @__PURE__ */ u.jsx(uI, {
      as: s,
      ownerState: b,
      className: J(S.root, i),
      ref: n,
      ...p,
      children: typeof o == "string" && !a ? /* @__PURE__ */ u.jsx(ke, {
        color: "textSecondary",
        children: o
      }) : /* @__PURE__ */ u.jsxs(h.Fragment, {
        children: [c === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Mg || (Mg = /* @__PURE__ */ u.jsx("span", {
            className: "notranslate",
            "aria-hidden": !0,
            children: "​"
          }))
        ) : null, o]
      })
    })
  });
}), fI = (e) => {
  const {
    classes: t,
    formControl: n,
    size: r,
    shrink: o,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, a = {
    root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "medium" && `size${ee(r)}`, s],
    asterisk: [l && "asterisk"]
  }, c = ue(a, nI, t);
  return {
    ...t,
    // forward the focused, disabled, etc. classes to the FormLabel
    ...c
  };
}, pI = U(JP, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${ws.asterisk}`]: t.asterisk
    }, t.root, n.formControl && t.formControl, n.size === "small" && t.sizeSmall, n.shrink && t.shrink, !n.disableAnimation && t.animated, n.focused && t.focused, t[n.variant]];
  }
})(de(({
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
}))), fa = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: o = !1,
    margin: i,
    shrink: s,
    variant: l,
    className: a,
    ...c
  } = r, [d, p] = Bo({
    props: r,
    states: ["size", "variant", "required", "focused"]
  });
  let v = s;
  typeof v > "u" && p && (v = p.filled || p.focused || p.adornedStart);
  const f = {
    ...r,
    disableAnimation: o,
    formControl: p,
    shrink: v,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }, b = fI(f);
  return /* @__PURE__ */ u.jsx(pI, {
    "data-shrink": v,
    ref: n,
    className: J(b.root, a),
    ...c,
    ownerState: f,
    classes: b
  });
});
function mI(e) {
  return ce("MuiLinearProgress", e);
}
ae("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "bar", "bar1", "bar2"]);
const gf = 4, hI = {}, yf = so`
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
`, gI = typeof yf != "string" ? Jr`
        animation: ${yf} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      ` : null, vf = so`
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
`, yI = typeof vf != "string" ? Jr`
        animation: ${vf} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      ` : null, xf = so`
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
`, vI = typeof xf != "string" ? Jr`
        animation: ${xf} 3s infinite linear;
      ` : null, xI = (e) => {
  const {
    classes: t,
    variant: n,
    color: r
  } = e, o = {
    root: ["root", `color${ee(r)}`, n],
    dashed: ["dashed"],
    bar1: ["bar", "bar1"],
    bar2: ["bar", "bar2", n === "buffer" && `color${ee(r)}`]
  };
  return ue(o, mI, t);
}, tm = (e, t) => e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.5), bI = U("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`color${ee(n.color)}`], t[n.variant]];
  }
})(de(({
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
}))), SI = U("span", {
  name: "MuiLinearProgress",
  slot: "Dashed"
})(de(({
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
})), vI || {
  // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
  animation: `${xf} 3s infinite linear`
}, de(({
  theme: e
}) => _i(e, {
  animation: "none"
}) || hI)), wI = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (e, t) => [t.bar, t.bar1]
})(de(({
  theme: e
}) => {
  const t = _i(e, {
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
          duration: `.${gf}s`,
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
          duration: `.${gf}s`,
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
      style: gI || {
        animation: `${yf} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), CI = U("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (e, t) => [t.bar, t.bar2]
})(de(({
  theme: e
}) => {
  const t = _i(e, {
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
          duration: `.${gf}s`,
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
      style: yI || {
        animation: `${vf} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`
      }
    }, ...t ? [{
      props: ({
        ownerState: n
      }) => n.variant === "indeterminate" || n.variant === "query",
      style: t
    }] : []]
  };
})), kI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiLinearProgress"
  }), {
    className: o,
    color: i = "primary",
    max: s,
    min: l,
    value: a,
    valueBuffer: c,
    variant: d = "indeterminate",
    ...p
  } = r, v = {
    ...r,
    color: i,
    variant: d
  }, f = l ?? 0, b = s ?? 100, S = xI(v), C = ul(), x = {}, m = {
    bar1: {},
    bar2: {}
  };
  if ((d === "determinate" || d === "buffer") && a !== void 0) {
    const y = b - f;
    let w = (a - f) / y * 100 - 100;
    C && (w = -w), m.bar1.transform = y > 0 ? `translateX(${w}%)` : "translateX(-100%)", x["aria-valuenow"] = a, x["aria-valuemin"] = f, x["aria-valuemax"] = b;
  }
  if (d === "buffer" && c !== void 0) {
    const y = b - f;
    let w = (c - f) / y * 100 - 100;
    C && (w = -w), m.bar2.transform = y > 0 ? `translateX(${w}%)` : "translateX(-100%)";
  }
  return /* @__PURE__ */ u.jsxs(bI, {
    className: J(S.root, o),
    ownerState: v,
    role: "progressbar",
    ...x,
    ref: n,
    ...p,
    children: [d === "buffer" ? /* @__PURE__ */ u.jsx(SI, {
      className: S.dashed,
      ownerState: v
    }) : null, /* @__PURE__ */ u.jsx(wI, {
      className: S.bar1,
      ownerState: v,
      style: m.bar1
    }), d === "determinate" ? null : /* @__PURE__ */ u.jsx(CI, {
      className: S.bar2,
      ownerState: v,
      style: m.bar2
    })]
  });
}), bf = /* @__PURE__ */ h.createContext({});
function TI(e) {
  return ce("MuiList", e);
}
ae("MuiList", ["root", "padding", "dense", "subheader"]);
const EI = (e) => {
  const {
    classes: t,
    disablePadding: n,
    dense: r,
    subheader: o
  } = e;
  return ue({
    root: ["root", !n && "padding", r && "dense", o && "subheader"]
  }, TI, t);
}, RI = U("ul", {
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
}), PI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
  } = r, p = h.useMemo(() => ({
    dense: l
  }), [l]), v = {
    ...r,
    component: s,
    dense: l,
    disablePadding: a
  }, f = EI(v);
  return /* @__PURE__ */ u.jsx(bf.Provider, {
    value: p,
    children: /* @__PURE__ */ u.jsxs(RI, {
      as: s,
      className: J(f.root, i),
      ref: n,
      ownerState: v,
      ...d,
      children: [c, o]
    })
  });
}), $g = ae("MuiListItemIcon", ["root", "alignItemsFlexStart"]), jg = ae("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), nm = /* @__PURE__ */ h.createContext(void 0);
function H1() {
  const e = h.useContext(nm);
  if (e === void 0)
    throw new Error("MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.");
  return e;
}
const II = Object.is;
function MI(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object))
    return !1;
  let n = 0, r = 0;
  for (const o in e)
    if (n += 1, !II(e[o], t[o]) || !(o in t))
      return !1;
  for (const o in t)
    r += 1;
  return n === r;
}
const $I = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
function V1(e) {
  const {
    activeItemId: t,
    getDefaultActiveItemId: n,
    orientation: r,
    isRtl: o = !1,
    isItemFocusable: i = Rs,
    wrap: s = !0
  } = e, [l, a] = h.useState(t), [c, d] = h.useState(t);
  let p = l;
  t !== c && (d(t), t !== void 0 && t !== l && (p = t, a(t)));
  const v = h.useRef(null), f = h.useRef(/* @__PURE__ */ new Map()), [b, S] = h.useState(0), C = h.useMemo(() => Sf(f.current), [b]), x = Og(p, C, i, n), m = h.useRef(x);
  m.current = x;
  const y = h.useCallback(() => {
    const g = Sf(f.current), I = Og(m.current, g, i, n);
    return X1(g, I);
  }, [n, i]), w = h.useCallback(() => f.current, []), T = rt((g) => {
    const I = f.current.get(g.id);
    MI(I ?? null, g) || (f.current.set(g.id, g), S((P) => P + 1));
  }), k = rt((g) => {
    f.current.delete(g) && S((I) => I + 1);
  }), R = rt((g) => {
    a(g);
  }), E = h.useCallback((g) => m.current === g, []), O = h.useCallback((g, I, P, $) => {
    var j;
    const A = Wl(f.current), N = Y1(A, g, I, P, $ ?? i);
    return N ? ((j = N.element) == null || j.focus(), a(N.id), N) : null;
  }, [i]), L = h.useCallback((g, I, P) => ({
    onFocus: (N) => {
      I == null || I(N);
      const j = Wl(f.current), z = q1(j, N.target);
      z !== -1 && a(j[z].id);
    },
    onKeyDown: (N) => {
      if (P == null || P(N), N.defaultPrevented || N.altKey || N.shiftKey || N.ctrlKey || N.metaKey || !$I.includes(N.key))
        return;
      let j = r === "horizontal" ? "ArrowLeft" : "ArrowUp", z = r === "horizontal" ? "ArrowRight" : "ArrowDown";
      r === "horizontal" && o && (j = "ArrowRight", z = "ArrowLeft");
      const F = Wl(f.current), V = or(xt(v.current)), D = V === v.current;
      let q = Ag(F, V, m.current), Y = "next";
      switch (N.key) {
        case j:
          Y = "previous", N.preventDefault(), D && (q = F.length);
          break;
        case z:
          N.preventDefault(), D && (q = -1);
          break;
        case "Home":
          N.preventDefault(), q = -1;
          break;
        case "End":
          N.preventDefault(), Y = "previous", q = F.length;
          break;
        default:
          return;
      }
      O(q, Y, s);
    },
    ref: LI(g, (N) => {
      v.current = N;
    })
  }), [O, o, r, s]), M = h.useCallback((g) => {
    var N;
    const I = Wl(f.current), P = or(xt(v.current)), A = P === v.current ? -1 : Ag(I, P, m.current);
    return ((N = O(A, "next", !0, g)) == null ? void 0 : N.id) ?? null;
  }, [O]);
  return h.useMemo(() => ({
    activeItemId: x,
    focusNext: M,
    getActiveItem: y,
    getContainerProps: L,
    getItemMap: w,
    isItemActive: E,
    registerItem: T,
    setActiveItemId: R,
    unregisterItem: k
  }), [x, M, y, L, w, E, T, R, k]);
}
function K1(e) {
  const t = H1(), {
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
  }, [e.id, r, o]), c = yt(e.ref, a);
  return ht(() => {
    i.current && r({
      ...s,
      element: i.current
    });
  }, [s, r]), ht(() => {
    const d = e.id;
    return () => {
      o(d);
    };
  }, [e.id, o]), {
    ref: c,
    tabIndex: n === e.id ? 0 : -1
  };
}
function Og(e, t, n, r) {
  return e != null ? jI(e, t, n) : OI(t, n, r);
}
function jI(e, t, n) {
  var o;
  const r = Q1(t, e);
  return r === -1 ? G1(t, n) : n(t[r]) ? t[r].id : ((o = Y1(t, r, "next", !1, n)) == null ? void 0 : o.id) ?? null;
}
function OI(e, t, n) {
  const r = n == null ? void 0 : n(e);
  if (r != null) {
    const o = X1(e, r);
    if (o && t(o))
      return o.id;
  }
  return G1(e, t);
}
function Ag(e, t, n) {
  if (t) {
    const r = q1(e, t);
    if (r !== -1)
      return r;
  }
  return Q1(e, n);
}
function Y1(e, t, n, r, o) {
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
    const c = e[l];
    if (!c || !o(c))
      l = Lg(l, i, n, r);
    else
      return c;
  }
  return null;
}
function G1(e, t) {
  var n;
  return ((n = e.find((r) => t(r))) == null ? void 0 : n.id) ?? null;
}
function X1(e, t) {
  return t == null ? null : e.find((n) => n.id === t) ?? null;
}
function Q1(e, t) {
  return t == null ? -1 : e.findIndex((n) => n.id === t);
}
function q1(e, t) {
  return t ? e.findIndex((n) => {
    var r;
    return n.element === t || ((r = n.element) == null ? void 0 : r.contains(t));
  }) : -1;
}
function Sf(e) {
  const t = Array.from(e.values());
  if (t.every((o) => o.element == null))
    return t;
  const n = t.filter(wf).sort((o, i) => AI(o.element, i.element)), r = t.filter((o) => !wf(o));
  return [...n, ...r];
}
function Wl(e) {
  return Sf(e).filter(wf);
}
function Lg(e, t, n, r = !0) {
  return n === "next" ? e === t ? r ? 0 : -1 : e + 1 : e === 0 ? r ? t : -1 : e - 1;
}
function Rs(e) {
  return e.element ? e.focusableWhenDisabled ? !0 : !e.disabled && !e.element.hasAttribute("disabled") && e.element.getAttribute("aria-disabled") !== "true" && e.element.hasAttribute("tabindex") : !1;
}
function wf(e) {
  return e.element != null && e.element.isConnected;
}
function AI(e, t) {
  if (e === t)
    return 0;
  const n = e.compareDocumentPosition(t);
  return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function LI(...e) {
  return (t) => {
    e.forEach((n) => {
      cf(n ?? null, t);
    });
  };
}
function Z1(e, t) {
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
function NI(e) {
  return e ? e.type === "mousedown" || e.type === "pointerdown" || e.type === "touchstart" ? "pointer" : e.type === "keydown" || e.type === "click" && e.detail === 0 ? "keyboard" : null : null;
}
function BI(e) {
  return e == null || typeof e == "string" && !e.trim();
}
function pa(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
const J1 = /* @__PURE__ */ h.createContext(null);
function ex() {
  return h.useContext(J1);
}
const zI = J1.Provider, tx = /* @__PURE__ */ h.createContext(void 0);
function _I() {
  const e = h.useContext(tx);
  if (e === void 0)
    throw new Error("MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.");
  return e;
}
function FI(e) {
  const t = (e == null ? void 0 : e.element) ?? e;
  if (!t)
    return "";
  if ((e == null ? void 0 : e.textValue) !== void 0)
    return e.textValue;
  let n = t.innerText;
  return n === void 0 && (n = t.textContent), n ?? "";
}
function nx(e, t) {
  if (t === void 0)
    return !0;
  let n = FI(e);
  return n = n.trim().toLowerCase(), n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.startsWith(t.keys.join(""));
}
function DI(e, t) {
  return nx(e, t) ? Rs(e) : !1;
}
function WI(e, t) {
  Z1(e, t);
}
const UI = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
    variant: p = "selectedMenu",
    ...v
  } = t, f = h.useRef(null), b = h.useRef(!1), [S, C] = h.useState(!1), x = ex(), m = h.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  }), y = h.useCallback(($) => {
    var A, N, j;
    return p === "selectedMenu" ? ((A = $.find((z) => z.selected && Rs(z))) == null ? void 0 : A.id) ?? ((N = $.find((z) => Rs(z))) == null ? void 0 : N.id) ?? null : ((j = $.find((z) => Rs(z))) == null ? void 0 : j.id) ?? null;
  }, [p]), w = V1({
    activeItemId: void 0,
    getDefaultActiveItemId: y,
    orientation: "vertical",
    wrap: !c
  }), {
    activeItemId: T,
    focusNext: k,
    getActiveItem: R,
    getContainerProps: E,
    getItemMap: O
  } = w, L = rt(($ = !1) => {
    if (!f.current || !$ && b.current)
      return null;
    if (i) {
      const A = R();
      if (A != null && A.element) {
        const N = Array.from(O().values()).some((z) => z.selected), j = p === "menu" && N && !A.selected && x == null;
        return C(j), WI(A.element, x), b.current = !0, A.element;
      }
      return o ? (C(!1), f.current.focus(), f.current) : null;
    }
    return o ? (C(!1), f.current.focus(), b.current = !0, f.current) : (C(!1), null);
  });
  ht(() => {
    if (!o && !i) {
      b.current = !1, C(!1);
      return;
    }
    L();
  }, [T, i, o, L]), h.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: ($, {
      direction: A
    }) => {
      const N = !f.current.style.width;
      if ($.clientHeight < f.current.clientHeight && N) {
        const j = `${_1(Kn($))}px`;
        f.current.style[A === "rtl" ? "paddingLeft" : "paddingRight"] = j, f.current.style.width = `calc(100% + ${j})`;
      }
      return f.current;
    },
    focusInitialTarget: () => {
      if (!f.current)
        return null;
      const $ = or(xt(f.current));
      return $ && To(f.current, $) ? $ : L(!0);
    }
  }), [L]);
  const M = E(void 0, v.onFocus), g = yt(f, M.ref, n), I = h.useMemo(() => ({
    itemsFocusableWhenDisabled: a,
    suppressInitialFocusVisible: S,
    variant: p
  }), [a, S, p]), P = rt(($) => {
    if (S && C(!1), ($.ctrlKey || $.metaKey || $.altKey) && d) {
      d($);
      return;
    }
    if (M.onKeyDown($), $.key.length === 1) {
      const N = m.current, j = $.key.toLowerCase(), z = performance.now();
      N.keys.length > 0 && (z - N.lastTime > 500 ? (N.keys = [], N.repeating = !0, N.previousKeyMatched = !0) : N.repeating && j !== N.keys[0] && (N.repeating = !1)), N.lastTime = z, N.keys.push(j);
      const F = or(xt(f.current)), V = F && !N.repeating && nx(F, N);
      N.previousKeyMatched && (V || k((D) => DI(D, N)) != null) ? $.preventDefault() : N.previousKeyMatched = !1;
    }
    d && d($);
  });
  return /* @__PURE__ */ u.jsx(PI, {
    role: "menu",
    ref: g,
    className: l,
    onKeyDown: P,
    tabIndex: -1,
    ...v,
    onFocus: M.onFocus,
    children: /* @__PURE__ */ u.jsx(tx.Provider, {
      value: I,
      children: /* @__PURE__ */ u.jsx(nm.Provider, {
        value: w,
        children: s
      })
    })
  });
});
function HI(e) {
  return ce("MuiPopover", e);
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
function Ul(e) {
  return typeof e == "function" ? e() : e;
}
const VI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"]
  }, HI, t);
}, KI = U(D1, {
  name: "MuiPopover",
  slot: "Root"
})({}), rx = U(Vt, {
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
}), YI = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    container: p,
    disableAutoFocus: v = !1,
    elevation: f = 8,
    marginThreshold: b = 16,
    open: S,
    slots: C = {},
    slotProps: x = {},
    transformOrigin: m = {
      vertical: "top",
      horizontal: "left"
    },
    transitionDuration: y = "auto",
    disableScrollLock: w = !1,
    ...T
  } = r, k = h.useRef(), R = {
    ...r,
    anchorOrigin: s,
    anchorReference: a,
    elevation: f,
    marginThreshold: b,
    transformOrigin: m,
    transitionDuration: y
  }, E = VI(R), O = h.useCallback(() => {
    if (a === "anchorPosition")
      return l;
    const W = Ul(i), oe = (W && W.nodeType === 1 ? W : xt(k.current).body).getBoundingClientRect();
    return {
      top: oe.top + Ng(oe, s.vertical),
      left: oe.left + Bg(oe, s.horizontal)
    };
  }, [i, s.horizontal, s.vertical, l, a]), L = h.useCallback((W) => ({
    vertical: Ng(W, m.vertical),
    horizontal: Bg(W, m.horizontal)
  }), [m.horizontal, m.vertical]), M = h.useCallback((W) => {
    const re = {
      width: W.offsetWidth,
      height: W.offsetHeight
    }, oe = L(re);
    if (a === "none")
      return {
        top: null,
        left: null,
        transformOrigin: zg(oe)
      };
    const Te = O();
    let ye = Te.top - oe.vertical, ge = Te.left - oe.horizontal;
    const se = ye + re.height, Ae = ge + re.width, Fe = Kn(Ul(i)), $e = Fe.innerHeight - b, je = Fe.innerWidth - b;
    if (b != null && ye < b) {
      const pe = ye - b;
      ye -= pe, oe.vertical += pe;
    } else if (b != null && se > $e) {
      const pe = se - $e;
      ye -= pe, oe.vertical += pe;
    }
    if (b != null && ge < b) {
      const pe = ge - b;
      ge -= pe, oe.horizontal += pe;
    } else if (Ae > je) {
      const pe = Ae - je;
      ge -= pe, oe.horizontal += pe;
    }
    return {
      top: `${Math.round(ye)}px`,
      left: `${Math.round(ge)}px`,
      transformOrigin: zg(oe)
    };
  }, [i, a, O, L, b]), [g, I] = h.useState(S), P = h.useCallback(() => {
    const W = k.current;
    if (!W)
      return;
    const re = M(W);
    re.top != null && W.style.setProperty("top", re.top), re.left != null && (W.style.left = re.left), W.style.transformOrigin = re.transformOrigin, I(!0);
  }, [M]);
  h.useEffect(() => (w && window.addEventListener("scroll", P), () => window.removeEventListener("scroll", P)), [i, w, P]);
  const $ = () => {
    P();
  }, A = () => {
    I(!1);
  };
  h.useEffect(() => {
    S && P();
  }), h.useImperativeHandle(o, () => S ? {
    updatePosition: () => {
      P();
    }
  } : null, [S, P]), h.useEffect(() => {
    if (!S)
      return;
    const W = eu(() => {
      P();
    }), re = Kn(Ul(i));
    return re.addEventListener("resize", W), () => {
      W.clear(), re.removeEventListener("resize", W);
    };
  }, [i, S, P]);
  let N = y;
  const j = {
    slots: C,
    slotProps: x
  }, [z, F] = he("transition", {
    elementType: el,
    externalForwardedProps: j,
    ownerState: R,
    getSlotProps: (W) => ({
      ...W,
      onEntering: (re, oe) => {
        var Te;
        (Te = W.onEntering) == null || Te.call(W, re, oe), $();
      },
      onExited: (re) => {
        var oe;
        (oe = W.onExited) == null || oe.call(W, re), A();
      }
    }),
    additionalProps: {
      appear: !0,
      in: S
    }
  });
  y === "auto" && !z.muiSupportAuto && (N = void 0);
  const V = p || (i ? xt(Ul(i)).body : void 0), [D, {
    slots: q,
    slotProps: Y,
    ...H
  }] = he("root", {
    ref: n,
    elementType: KI,
    externalForwardedProps: {
      ...j,
      ...T
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: C.backdrop
      },
      slotProps: {
        backdrop: g1(typeof x.backdrop == "function" ? x.backdrop(R) : x.backdrop, {
          invisible: !0
        })
      },
      container: V,
      open: S
    },
    ownerState: R,
    className: J(E.root, d)
  }), [K, X] = he("paper", {
    ref: k,
    className: E.paper,
    elementType: rx,
    externalForwardedProps: j,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: f,
      style: g ? void 0 : {
        opacity: 0
      }
    },
    ownerState: R
  });
  return /* @__PURE__ */ u.jsx(D, {
    ...H,
    ...!Ua(D) && {
      slots: q,
      slotProps: Y,
      disableAutoFocus: v,
      disableScrollLock: w
    },
    children: /* @__PURE__ */ u.jsx(z, {
      ...F,
      timeout: N,
      children: /* @__PURE__ */ u.jsx(K, {
        ...X,
        children: c
      })
    })
  });
});
function GI(e) {
  return ce("MuiMenu", e);
}
ae("MuiMenu", ["root", "paper", "list"]);
const XI = {
  vertical: "top",
  horizontal: "right"
}, QI = {
  vertical: "top",
  horizontal: "left"
}, qI = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, GI, t);
}, ZI = U(YI, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root"
})({}), JI = U(rx, {
  name: "MuiMenu",
  slot: "Paper"
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), e5 = U(UI, {
  name: "MuiMenu",
  slot: "List"
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), t5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    transitionDuration: p = "auto",
    variant: v = "selectedMenu",
    slots: f = {},
    slotProps: b = {},
    ...S
  } = r, C = ul(), x = {
    ...r,
    autoFocus: o,
    disableAutoFocusItem: l,
    transitionDuration: p,
    variant: v
  }, m = qI(x), y = o && c, w = y && !l, T = h.useRef(null), k = ($, A) => {
    var N, j;
    T.current && (T.current.adjustStyleForScrollbar($, {
      direction: C ? "rtl" : "ltr"
    }), y && ((j = (N = T.current).focusInitialTarget) == null || j.call(N)));
  }, R = ($) => {
    $.key === "Tab" && ($.preventDefault(), a && a($, "tabKeyDown"));
  }, E = {
    slots: f,
    slotProps: b
  }, O = Ai({
    elementType: f.root,
    externalSlotProps: b.root,
    ownerState: x,
    className: [m.root, s]
  }), [L, M] = he("paper", {
    className: m.paper,
    elementType: JI,
    externalForwardedProps: E,
    shouldForwardComponentProp: !0,
    ownerState: x
  }), [g, I] = he("list", {
    className: m.list,
    elementType: e5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: E,
    getSlotProps: ($) => ({
      ...$,
      onKeyDown: (A) => {
        var N;
        R(A), (N = $.onKeyDown) == null || N.call($, A);
      }
    }),
    ownerState: x
  }), P = typeof b.transition == "function" ? b.transition(x) : b.transition;
  return /* @__PURE__ */ u.jsx(
    ZI,
    {
      disableAutoFocus: o,
      onClose: a,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: C ? "right" : "left"
      },
      transformOrigin: C ? XI : QI,
      slots: {
        root: f.root,
        paper: L,
        backdrop: f.backdrop,
        transition: f.transition
      },
      slotProps: {
        root: O,
        paper: M,
        backdrop: typeof b.backdrop == "function" ? b.backdrop(x) : b.backdrop,
        transition: {
          ...P,
          onEntering: (...$) => {
            var A;
            k(...$), (A = P == null ? void 0 : P.onEntering) == null || A.call(P, ...$);
          }
        }
      },
      open: c,
      ref: n,
      transitionDuration: p,
      ownerState: x,
      ...S,
      classes: d,
      children: /* @__PURE__ */ u.jsx(g, {
        actions: T,
        autoFocus: y,
        autoFocusItem: w,
        variant: v,
        ...I,
        children: i
      })
    }
  );
}), n5 = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, r5 = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: r,
    disableGutters: o,
    selected: i,
    classes: s
  } = e, a = ue({
    root: ["root", n && "dense", t && "disabled", !o && "gutters", r && "divider", i && "selected"]
  }, z2, s);
  return {
    ...s,
    ...a
  };
}, o5 = U(no, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: n5
})(de(({
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
  [`& + .${Pg.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${Pg.inset}`]: {
    marginLeft: 52
  },
  [`& .${jg.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${jg.inset}`]: {
    paddingLeft: 36
  },
  [`& .${$g.root}`]: {
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
      [`& .${$g.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), mo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    tabIndex: p,
    className: v,
    ...f
  } = r, S = d === "menuitemcheckbox" || d === "menuitemradio" ? !!r.selected : void 0, C = ex(), x = h.useContext(bf), m = h.useMemo(() => ({
    dense: s || x.dense || !1,
    disableGutters: a
  }), [x.dense, s, a]), y = _I(), w = Ir(), T = y.suppressInitialFocusVisible, k = y.itemsFocusableWhenDisabled, R = h.useRef(null);
  ht(() => {
    o && R.current && Z1(R.current, C);
  }, [o]);
  const E = {
    ...r,
    dense: m.dense,
    divider: l,
    disableGutters: a
  }, O = r5(r), {
    root: L,
    ...M
  } = O, g = K1({
    id: w,
    ref: n,
    disabled: r.disabled,
    focusableWhenDisabled: k,
    selected: r.selected
  }), I = yt(R, g.ref);
  let P;
  return p !== void 0 ? P = p : y.variant === "selectedMenu" ? P = g.tabIndex : (!r.disabled || k) && (P = -1), /* @__PURE__ */ u.jsx(bf.Provider, {
    value: m,
    children: /* @__PURE__ */ u.jsx(o5, {
      ref: I,
      role: d,
      "aria-checked": S,
      tabIndex: P,
      component: i,
      internalNativeButton: !1,
      focusableWhenDisabled: k,
      suppressFocusVisible: T,
      focusVisibleClassName: J(O.focusVisible, c),
      className: J(O.root, v),
      ...f,
      ownerState: E,
      classes: M
    })
  });
}), i5 = (e) => {
  const {
    classes: t,
    variant: n,
    disabled: r,
    multiple: o,
    open: i,
    error: s
  } = e, l = {
    select: ["select", n, r && "disabled", o && "multiple", s && "error"],
    icon: ["icon", `icon${ee(n)}`, i && "iconOpen", r && "disabled"]
  };
  return ue(l, _2, t);
}, ox = U("select", {
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
  [`&.${Up.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (e.vars || e).palette.background.paper
  },
  [`& ~ .${di.root}`]: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "calc(var(--_caret, 24px) + (var(--_endAdornment, 28px) - 1.5rem)/2)"
    // 1.5rem is the default icon size
  },
  [`.${pn.root}:has(> &)`]: {
    "--_endAdornment": "0px"
  },
  variants: [{
    props: ({
      ownerState: t
    }) => t.variant !== "filled" && t.variant !== "outlined",
    style: {
      [`.${pn.root}:has(> &)`]: {
        "--_caret": "24px"
      },
      [`.${pn.root}:has(> & ~ .${di.root})`]: {
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
      [`.${pn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${pn.root}:has(> & ~ .${di.root})`]: {
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
      [`.${pn.root}:has(> &)`]: {
        "--_caret": "32px"
      },
      [`.${pn.root}:has(> & ~ .${di.root})`]: {
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
})), s5 = U(ox, {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: tn,
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.select, t[n.variant], n.error && t.error, {
      [`&.${Up.multiple}`]: t.multiple
    }];
  }
})({}), ix = U("svg", {
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
  [`&.${Up.disabled}`]: {
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
})), l5 = U(ix, {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.variant && t[`icon${ee(n.variant)}`], n.open && t.iconOpen];
  }
})({}), a5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
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
  }, p = i5(d);
  return /* @__PURE__ */ u.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ u.jsx(s5, {
      ownerState: d,
      className: J(p.select, r),
      disabled: o,
      ref: l || n,
      ...c
    }), t.multiple ? null : /* @__PURE__ */ u.jsx(l5, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
var _g;
const c5 = U("fieldset", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: tn
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
}), u5 = U("legend", {
  name: "MuiNotchedOutlined",
  shouldForwardProp: tn
})(de(({
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
function d5(e) {
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
  return /* @__PURE__ */ u.jsx(c5, {
    "aria-hidden": !0,
    className: r,
    ownerState: a,
    ...s,
    children: /* @__PURE__ */ u.jsx(u5, {
      ownerState: a,
      children: l ? /* @__PURE__ */ u.jsx("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _g || (_g = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      )
    })
  });
}
const f5 = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, F2, t);
  return {
    ...t,
    // forward classes to the InputBase
    ...r
  };
}, p5 = U(ru, {
  shouldForwardProp: (e) => tn(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: tu
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Zn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Zn.notchedOutline}`]: {
        borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
      }
    },
    [`&.${Zn.focused} .${Zn.notchedOutline}`]: {
      borderWidth: 2
    },
    variants: [...Object.entries(e.palette).filter(Ct()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        [`&.${Zn.focused} .${Zn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette[n].main
        }
      }
    })), {
      props: {},
      // to override the above style
      style: {
        [`&.${Zn.error} .${Zn.notchedOutline}`]: {
          borderColor: (e.vars || e).palette.error.main
        },
        [`&.${Zn.disabled} .${Zn.notchedOutline}`]: {
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
        [`&.${vo.root}`]: {
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
})), m5 = U(d5, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline"
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t
  };
})), h5 = U(ou, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: nu
})(de(({
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
  const r = fe({
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
    type: p = "text",
    ...v
  } = r, f = f5(r), [b, S] = Bo({
    props: r,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), C = {
    ...r,
    color: b.color || "primary",
    disabled: b.disabled,
    error: b.error,
    focused: b.focused,
    formControl: S,
    fullWidth: o,
    hiddenLabel: b.hiddenLabel,
    multiline: l,
    size: b.size,
    type: p
  }, x = c.root ?? p5, m = c.input ?? h5, [y, w] = he("notchedOutline", {
    elementType: m5,
    className: f.notchedOutline,
    shouldForwardComponentProp: !0,
    ownerState: C,
    externalForwardedProps: {
      slots: c,
      slotProps: d
    },
    additionalProps: {
      label: s != null && s !== "" && b.required ? /* @__PURE__ */ u.jsxs(h.Fragment, {
        children: [s, " ", "*"]
      }) : s
    }
  });
  return /* @__PURE__ */ u.jsx(Wp, {
    slots: {
      root: x,
      input: m
    },
    slotProps: d,
    renderSuffix: (T) => /* @__PURE__ */ u.jsx(y, {
      ...w,
      notched: typeof a < "u" ? a : !!(T.startAdornment || T.filled || T.focused)
    }),
    fullWidth: o,
    inputComponent: i,
    multiline: l,
    ref: n,
    type: p,
    ...v,
    classes: {
      ...f,
      notchedOutline: null
    }
  });
});
rm.muiName = "Input";
function g5(e) {
  return Object.prototype.hasOwnProperty.call(e.props, "value");
}
function sx(e) {
  if (typeof e == "string" || typeof e == "number")
    return String(e);
  let t = "";
  return h.Children.forEach(e, (n) => {
    typeof n == "string" || typeof n == "number" ? t += String(n) : /* @__PURE__ */ h.isValidElement(n) && (t += sx(n.props.children));
  }), t;
}
function y5(e, t, n = 0) {
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
function v5(e, t) {
  return !e.some((n) => n.label[0] === t && n.label[1] === t);
}
function x5(e, t) {
  const n = [];
  let r = -1;
  for (let o = 0; o < e.length; o += 1) {
    const i = e[o];
    if (!/* @__PURE__ */ h.isValidElement(i) || !g5(i) || i.props.disabled)
      continue;
    const s = sx(i.props.children).trim().toLowerCase();
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
var Fg;
const Hl = 2, b5 = 400, Dg = 200, S5 = 750, ho = " ", w5 = "ArrowUp", C5 = "ArrowDown", k5 = "Enter";
function Wg(e, t) {
  var o;
  if (!t)
    return !1;
  if (e.composedPath().includes(t) || (o = e.target) != null && o.nodeType && t.contains(e.target))
    return !0;
  const r = t.getBoundingClientRect();
  return r.width === 0 && r.height === 0 ? !1 : e.clientX >= r.left - Hl && e.clientX <= r.right + Hl && e.clientY >= r.top - Hl && e.clientY <= r.bottom + Hl;
}
const T5 = U(ox, {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${vo.select}`]: t.select
      },
      {
        [`&.${vo.select}`]: t[n.variant]
      },
      {
        [`&.${vo.error}`]: t.error
      },
      {
        [`&.${vo.multiple}`]: t.multiple
      }
    ];
  }
})({
  // Win specificity over the input base
  [`&.${vo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), E5 = U(ix, {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.icon, n.open && t.iconOpen];
  }
})({}), R5 = U("input", {
  shouldForwardProp: (e) => f1(e) && e !== "classes",
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
}), P5 = (e) => {
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
  }, U1, t);
}, I5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  var Wi, Fo, im, sm;
  const {
    "aria-describedby": r,
    "aria-label": o,
    autoFocus: i,
    autoWidth: s,
    children: l,
    className: a,
    defaultOpen: c,
    defaultValue: d,
    disabled: p,
    displayEmpty: v,
    error: f = !1,
    IconComponent: b,
    inputRef: S,
    labelId: C,
    MenuProps: x = {},
    multiple: m,
    name: y,
    onBlur: w,
    onChange: T,
    onClose: k,
    onFocus: R,
    // eslint-disable-next-line react/prop-types
    onKeyDown: E,
    // eslint-disable-next-line react/prop-types
    onMouseDown: O,
    onOpen: L,
    open: M,
    readOnly: g,
    renderValue: I,
    required: P,
    SelectDisplayProps: $ = {},
    tabIndex: A,
    // catching `type` from Input which makes no sense for SelectInput
    type: N,
    value: j,
    variant: z = "standard",
    ...F
  } = t, [V, D] = Ya({
    controlled: j,
    default: d,
    name: "Select"
  }), [q, Y] = Ya({
    controlled: M,
    default: c,
    name: "Select"
  }), H = h.useRef(null), K = h.useRef(null), X = h.useRef(null), W = h.useRef(!1), re = h.useRef(!1), oe = h.useRef(null), Te = h.useRef(!1), ye = h.useRef({
    allowSelectedMouseUp: !1,
    allowUnselectedMouseUp: !1
  }), ge = h.useRef({
    buffer: "",
    previousSearchIndex: null,
    matchedIndex: null
  }), se = ir(), Ae = ir(), Fe = ir(), [$e, je] = h.useState(null), {
    current: pe
  } = h.useRef(M != null), [Re, Qe] = h.useState(), [Oe, Ue] = h.useState(null), Pe = yt(n, S), qe = h.useCallback((Q) => {
    K.current = Q, Q && je(Q);
  }, []), De = $e == null ? void 0 : $e.parentNode;
  h.useImperativeHandle(Pe, () => ({
    focus: () => {
      K.current.focus();
    },
    node: H.current,
    value: V
  }), [V]);
  const Se = $e !== null && q, He = h.useCallback(() => {
    Fe.clear(), ge.current.buffer = "", ge.current.previousSearchIndex = null, ge.current.matchedIndex = null;
  }, [Fe]);
  ht(() => {
    W.current = Se, Se && He();
  }, [Se, He]);
  const bt = h.useCallback(() => {
    se.clear(), Ae.clear();
  }, [se, Ae]), ie = h.useCallback(() => {
    bt(), Te.current = !1, ye.current = {
      allowSelectedMouseUp: !1,
      allowUnselectedMouseUp: !1
    };
  }, [bt]), be = h.useCallback(() => {
    oe.current && (oe.current(), oe.current = null);
  }, []);
  h.useEffect(() => {
    Se || (ie(), be());
  }, [Se, ie, be]), h.useEffect(() => () => {
    ie(), be(), He();
  }, [ie, be, He]), h.useEffect(() => {
    if (!Se || !De || s || typeof ResizeObserver > "u")
      return;
    const Q = new ResizeObserver(() => {
      Qe(De.clientWidth);
    });
    return Q.observe(De), () => {
      Q.disconnect();
    };
  }, [Se, De, s]), h.useEffect(() => {
    c && q && $e && !pe && (Qe(s ? null : De.clientWidth), K.current.focus());
  }, [$e, s]), h.useEffect(() => {
    i && K.current.focus();
  }, [i]), h.useEffect(() => {
    if (!C)
      return;
    const Q = xt(K.current).getElementById(C);
    if (Q) {
      const le = () => {
        getSelection().isCollapsed && K.current.focus();
      };
      return Q.addEventListener("click", le), () => {
        Q.removeEventListener("click", le);
      };
    }
  }, [C]);
  const Be = rt((Q, le) => {
    Q || (ie(), be()), Q ? (He(), Ue(NI(le)), L && L(le)) : (Ue(null), k && k(le)), pe || (W.current = Q, Qe(s ? null : De.clientWidth), Y(Q));
  }), dt = () => {
    ie(), re.current ? Ae.start(Dg, () => {
      ye.current.allowUnselectedMouseUp = !0, se.start(Dg, () => {
        ye.current.allowSelectedMouseUp = !0;
      });
    }) : se.start(b5, () => {
      ye.current.allowSelectedMouseUp = !0, ye.current.allowUnselectedMouseUp = !0;
    });
  }, Ce = (Q) => {
    if (O == null || O(Q), Q.button !== 0 || (Q.preventDefault(), !K.current))
      return;
    K.current.focus();
    const le = xt(Q.currentTarget);
    dt(), be();
    const Ie = (ft) => {
      oe.current = null, K.current && (Wg(ft, K.current) || Wg(ft, X.current) || !W.current && pe || Be(!1, ft));
    };
    le.addEventListener("mouseup", Ie, {
      capture: !0,
      once: !0
    }), oe.current = () => {
      le.removeEventListener("mouseup", Ie, !0);
    }, Be(!0, Q);
  }, Yn = (Q) => {
    Be(!1, Q);
  }, dn = h.Children.toArray(l), Gn = (Q) => {
    const le = dn.find((Ie) => Ie.props.value === Q.target.value);
    le !== void 0 && (D(le.props.value), T && T(Q, le));
  }, fr = (Q, le, Ie) => {
    if (D(Ie), T) {
      const ft = Q.nativeEvent || Q, Gt = new ft.constructor(ft.type, ft);
      Object.defineProperty(Gt, "target", {
        writable: !0,
        value: {
          value: Ie,
          name: y
        }
      }), T(Gt, le);
    }
  }, me = (Q) => (le) => {
    Te.current = !1;
    let Ie;
    if (le.currentTarget.hasAttribute("tabindex")) {
      if (m) {
        Ie = Array.isArray(V) ? V.slice() : [];
        const ft = V.indexOf(Q.props.value);
        ft === -1 ? Ie.push(Q.props.value) : Ie.splice(ft, 1);
      } else
        Ie = Q.props.value;
      Q.props.onClick && Q.props.onClick(le), V !== Ie && fr(le, Q, Ie), m || Be(!1, le);
    }
  }, Ve = (Q, le) => (Ie) => {
    var hl, Do;
    if ((Do = (hl = Q.props).onMouseUp) == null || Do.call(hl, Ie), Te.current) {
      Te.current = !1;
      return;
    }
    const ft = !ye.current.allowSelectedMouseUp && le, Gt = !ye.current.allowUnselectedMouseUp && !le;
    ft || Gt || Ie.currentTarget.click();
  }, Dt = (Q) => {
    var lm;
    const le = ge.current, Ie = le.buffer !== "";
    if (Se || m || p || Q.defaultPrevented || (lm = Q.nativeEvent) != null && lm.isComposing || Q.key.length !== 1 || Q.ctrlKey || Q.metaKey || Q.altKey || Q.key === ho && !Ie)
      return !1;
    Q.key === ho && Q.preventDefault();
    const ft = le.buffer === "", {
      options: Gt,
      selectedIndex: hl
    } = x5(dn, V);
    if (Gt.length === 0)
      return Q.key !== ho && He(), !0;
    ft && (le.previousSearchIndex = hl);
    const Do = Q.key.toLowerCase();
    le.buffer === Do && v5(Gt, Do) && (le.buffer = "", le.previousSearchIndex = le.matchedIndex), le.buffer += Do, Fe.start(S5, He);
    const uu = y5(Gt, le.buffer, (le.previousSearchIndex ?? -1) + 1);
    if (uu !== -1) {
      const du = Gt[uu];
      return le.matchedIndex = uu, pa(V, du.value) || fr(Q, du.child, du.value), !0;
    }
    return Q.key !== ho && He(), !0;
  }, Fi = (Q) => {
    if (!g) {
      const le = Dt(Q), Ie = Q.key === ho || Q.key === w5 || Q.key === C5 || Q.key === k5;
      !le && Ie && (Q.preventDefault(), Be(!0, Q)), E == null || E(Q);
    }
  }, B = (Q) => {
    He(), !Se && w && (Object.defineProperty(Q, "target", {
      writable: !0,
      value: {
        value: V,
        name: y
      }
    }), w(Q));
  }, ve = (Q) => (le) => {
    var Ie, ft;
    (ft = (Ie = Q == null ? void 0 : Q.props) == null ? void 0 : Ie.onKeyDown) == null || ft.call(Ie, le), le.key === ho && le.target === le.currentTarget && !le.defaultPrevented && (le.preventDefault(), le.repeat || le.currentTarget.click());
  };
  delete F["aria-invalid"];
  let Ne, jt;
  const It = [];
  let jr = !1, _o = !1;
  (Ha({
    value: V
  }) || v) && (I ? Ne = I(V) : jr = !0);
  const cu = dn.map((Q) => {
    if (!/* @__PURE__ */ h.isValidElement(Q))
      return null;
    let le;
    if (m) {
      if (!Array.isArray(V))
        throw new Error(Pr(2));
      le = V.some((Ie) => pa(Ie, Q.props.value)), le && jr && It.push(Q.props.children);
    } else
      le = pa(V, Q.props.value), le && jr && (jt = Q.props.children);
    return le && (_o = !0), /* @__PURE__ */ h.cloneElement(Q, {
      "aria-selected": le ? "true" : "false",
      onMouseDown: (Ie) => {
        var ft, Gt;
        Te.current = !0, (Gt = (ft = Q.props).onMouseDown) == null || Gt.call(ft, Ie);
      },
      onPointerDown: (Ie) => {
        var ft, Gt;
        Te.current = !0, (Gt = (ft = Q.props).onPointerDown) == null || Gt.call(ft, Ie);
      },
      onClick: me(Q),
      onMouseUp: Ve(Q, le),
      onKeyUp: (Ie) => {
        Ie.key === ho && Ie.preventDefault(), Q.props.onKeyUp && Q.props.onKeyUp(Ie);
      },
      onKeyDown: ve(Q),
      role: "option",
      selected: le,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": Q.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  ht(() => {
    re.current = _o, !Se && !m && !_o && He();
  }, [_o, m, Se, He]), jr && (m ? It.length === 0 ? Ne = null : Ne = It.reduce((Q, le, Ie) => (Q.push(le), Ie < It.length - 1 && Q.push(", "), Q), []) : Ne = jt);
  let ml = Re;
  !s && pe && $e && (ml = De.clientWidth);
  let Di;
  typeof A < "u" ? Di = A : Di = p ? null : 0;
  const ne = $.id || (y ? `mui-component-select-${y}` : void 0), Z = {
    ...t,
    variant: z,
    value: V,
    open: Se,
    error: f
  }, xe = P5(Z), Ee = typeof ((Wi = x.slotProps) == null ? void 0 : Wi.paper) == "function" ? x.slotProps.paper(Z) : (Fo = x.slotProps) == null ? void 0 : Fo.paper, St = yt(Ee == null ? void 0 : Ee.ref, X), pr = typeof ((im = x.slotProps) == null ? void 0 : im.list) == "function" ? x.slotProps.list(Z) : (sm = x.slotProps) == null ? void 0 : sm.list, Xn = Ir(), co = Ir();
  return /* @__PURE__ */ u.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ u.jsx(T5, {
      as: "div",
      ref: qe,
      tabIndex: Di,
      role: "combobox",
      "aria-controls": Se ? Xn : void 0,
      "aria-disabled": p ? "true" : void 0,
      "aria-expanded": Se ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-readonly": g ? "true" : void 0,
      "aria-label": o,
      "aria-labelledby": C,
      "aria-describedby": r,
      "aria-required": P ? "true" : void 0,
      "aria-invalid": f ? "true" : void 0,
      onKeyDown: Fi,
      onMouseDown: p || g ? null : Ce,
      onBlur: B,
      onFocus: R,
      ...$,
      ownerState: Z,
      className: J($.className, xe.select, a),
      id: ne,
      children: BI(Ne) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        Fg || (Fg = /* @__PURE__ */ u.jsx("span", {
          className: "notranslate",
          "aria-hidden": !0,
          children: "​"
        }))
      ) : Ne
    }), /* @__PURE__ */ u.jsx(R5, {
      "aria-invalid": f,
      value: Array.isArray(V) ? V.join(",") : V,
      name: y,
      ref: H,
      "aria-hidden": !0,
      onChange: Gn,
      tabIndex: -1,
      disabled: p,
      readOnly: g,
      className: xe.nativeInput,
      autoFocus: i,
      required: P,
      ...F,
      id: F.id ?? co,
      ownerState: Z
    }), /* @__PURE__ */ u.jsx(E5, {
      as: b,
      className: xe.icon,
      ownerState: Z
    }), /* @__PURE__ */ u.jsx(zI, {
      value: Oe,
      children: /* @__PURE__ */ u.jsx(t5, {
        id: `menu-${y || ""}`,
        anchorEl: De,
        open: Se,
        onClose: Yn,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "center"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "center"
        },
        ...x,
        slotProps: {
          ...x.slotProps,
          list: {
            "aria-labelledby": C,
            role: "listbox",
            "aria-multiselectable": m ? "true" : void 0,
            disableListWrap: !0,
            id: Xn,
            ...pr
          },
          paper: {
            ...Ee,
            ref: St,
            style: {
              minWidth: ml,
              ...Ee == null ? void 0 : Ee.style
            }
          }
        },
        children: cu
      })
    })]
  });
}), M5 = (e) => {
  const {
    classes: t
  } = e, r = ue({
    root: ["root"]
  }, U1, t);
  return {
    ...t,
    ...r
  };
}, om = {
  name: "MuiSelect",
  slot: "Root",
  shouldForwardProp: (e) => tn(e) && e !== "variant"
}, $5 = U(em, om)(""), j5 = U(rm, om)(""), O5 = U(Jp, om)(""), Ps = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: o = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: a = !1,
    displayEmpty: c = !1,
    IconComponent: d = TR,
    id: p,
    input: v,
    inputProps: f,
    label: b,
    labelId: S,
    MenuProps: C,
    multiple: x = !1,
    native: m = !1,
    onClose: y,
    onOpen: w,
    open: T,
    renderValue: k,
    SelectDisplayProps: R,
    variant: E = "outlined",
    ...O
  } = r, L = m ? a5 : I5, [M] = Bo({
    props: r,
    states: ["variant", "error"]
  }), g = M.variant || E, I = {
    ...r,
    variant: g,
    classes: s
  }, P = M5(I), {
    root: $,
    ...A
  } = P, N = v || {
    standard: /* @__PURE__ */ u.jsx($5, {
      ownerState: I
    }),
    outlined: /* @__PURE__ */ u.jsx(j5, {
      label: b,
      ownerState: I
    }),
    filled: /* @__PURE__ */ u.jsx(O5, {
      ownerState: I
    })
  }[g], j = yt(n, zo(N));
  return /* @__PURE__ */ u.jsx(h.Fragment, {
    children: /* @__PURE__ */ h.cloneElement(N, {
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: L,
      inputProps: {
        children: i,
        error: M.error,
        IconComponent: d,
        variant: g,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: x,
        ...m ? {
          id: p
        } : {
          autoWidth: o,
          defaultOpen: a,
          displayEmpty: c,
          labelId: S,
          MenuProps: C,
          onClose: y,
          onOpen: w,
          open: T,
          renderValue: k,
          SelectDisplayProps: {
            id: p,
            ...R
          }
        },
        ...f,
        classes: f ? _t(A, f.classes) : A,
        ...v ? v.props.inputProps : {}
      },
      ...(x && m || c) && g === "outlined" ? {
        notched: !0
      } : {},
      ref: j,
      className: J(N.props.className, l, P.root),
      // If a custom input is provided via 'input' prop, do not allow 'variant' to be propagated to it's root element. See https://github.com/mui/material-ui/issues/33894.
      ...!v && {
        variant: g
      },
      ...O
    })
  });
});
Ps.muiName = "Select";
function A5(e = {}) {
  const {
    autoHideDuration: t = null,
    disableWindowBlurListener: n = !1,
    onClose: r,
    open: o,
    resumeHideDuration: i
  } = e, s = ir();
  h.useEffect(() => {
    if (!o)
      return;
    function x(m) {
      m.defaultPrevented || m.key === "Escape" && (r == null || r(m, "escapeKeyDown"));
    }
    return document.addEventListener("keydown", x), () => {
      document.removeEventListener("keydown", x);
    };
  }, [o, r]);
  const l = rt((x, m) => {
    r == null || r(x, m);
  }), a = rt((x) => {
    !r || x == null || s.start(x, () => {
      l(null, "timeout");
    });
  });
  h.useEffect(() => (o && a(t), s.clear), [o, t, a, s]);
  const c = (x) => {
    r == null || r(x, "clickaway");
  }, d = s.clear, p = h.useCallback(() => {
    t != null && a(i ?? t * 0.5);
  }, [t, i, a]), v = (x) => (m) => {
    const y = x.onBlur;
    y == null || y(m), p();
  }, f = (x) => (m) => {
    const y = x.onFocus;
    y == null || y(m), d();
  }, b = (x) => (m) => {
    const y = x.onMouseEnter;
    y == null || y(m), d();
  }, S = (x) => (m) => {
    const y = x.onMouseLeave;
    y == null || y(m), p();
  };
  return h.useEffect(() => {
    if (!n && o)
      return window.addEventListener("focus", p), window.addEventListener("blur", d), () => {
        window.removeEventListener("focus", p), window.removeEventListener("blur", d);
      };
  }, [n, o, p, d]), {
    getRootProps: (x = {}) => {
      const m = {
        ...Ga(e),
        ...Ga(x)
      };
      return {
        // ClickAwayListener adds an `onClick` prop which results in the alert not being announced.
        // See https://github.com/mui/material-ui/issues/29080
        role: "presentation",
        ...x,
        ...m,
        onBlur: v(m),
        onFocus: f(m),
        onMouseEnter: b(m),
        onMouseLeave: S(m)
      };
    },
    onClickAway: c
  };
}
function L5(e) {
  return ce("MuiSnackbarContent", e);
}
ae("MuiSnackbarContent", ["root", "message", "action"]);
const N5 = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"],
    action: ["action"],
    message: ["message"]
  }, L5, t);
}, B5 = U(Vt, {
  name: "MuiSnackbarContent",
  slot: "Root"
})(de(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? 0.8 : 0.98;
  return {
    ...e.typography.body2,
    color: e.vars ? e.vars.palette.SnackbarContent.color : e.palette.getContrastText(nf(e.palette.background.default, t)),
    backgroundColor: e.vars ? e.vars.palette.SnackbarContent.bg : nf(e.palette.background.default, t),
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
})), z5 = U("div", {
  name: "MuiSnackbarContent",
  slot: "Message"
})({
  padding: "8px 0"
}), _5 = U("div", {
  name: "MuiSnackbarContent",
  slot: "Action"
})({
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
  paddingLeft: 16,
  marginRight: -8
}), F5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiSnackbarContent"
  }), {
    action: o,
    className: i,
    message: s,
    role: l = "alert",
    ...a
  } = r, c = r, d = N5(c);
  return /* @__PURE__ */ u.jsxs(B5, {
    role: l,
    elevation: 6,
    className: J(d.root, i),
    ownerState: c,
    ref: n,
    ...a,
    children: [/* @__PURE__ */ u.jsx(z5, {
      className: d.message,
      ownerState: c,
      children: s
    }), o ? /* @__PURE__ */ u.jsx(_5, {
      className: d.action,
      ownerState: c,
      children: o
    }) : null]
  });
});
function D5(e) {
  return ce("MuiSnackbar", e);
}
ae("MuiSnackbar", ["root", "anchorOriginTopCenter", "anchorOriginBottomCenter", "anchorOriginTopRight", "anchorOriginBottomRight", "anchorOriginTopLeft", "anchorOriginBottomLeft"]);
const W5 = (e) => {
  const {
    classes: t,
    anchorOrigin: n
  } = e, r = {
    root: ["root", `anchorOrigin${ee(n.vertical)}${ee(n.horizontal)}`]
  };
  return ue(r, D5, t);
}, U5 = U("div", {
  name: "MuiSnackbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[`anchorOrigin${ee(n.anchorOrigin.vertical)}${ee(n.anchorOrigin.horizontal)}`]];
  }
})(de(({
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
}))), H5 = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiSnackbar"
  }), o = lo(), i = {
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
    className: p,
    disableWindowBlurListener: v = !1,
    message: f,
    onBlur: b,
    onClose: S,
    onFocus: C,
    onMouseEnter: x,
    onMouseLeave: m,
    open: y,
    resumeHideDuration: w,
    slots: T = {},
    slotProps: k = {},
    transitionDuration: R = i,
    ...E
  } = r, O = {
    ...r,
    anchorOrigin: {
      vertical: l,
      horizontal: a
    },
    autoHideDuration: c,
    disableWindowBlurListener: v,
    transitionDuration: R
  }, L = W5(O), {
    getRootProps: M,
    onClickAway: g
  } = A5(O), [I, P] = h.useState(!0), $ = {
    slots: T,
    slotProps: k
  }, [A, N] = he("root", {
    ref: n,
    className: [L.root, p],
    elementType: U5,
    getSlotProps: M,
    externalForwardedProps: {
      ...$,
      ...E
    },
    ownerState: O
  }), [j, {
    ownerState: z,
    ...F
  }] = he("clickAwayListener", {
    elementType: JR,
    externalForwardedProps: $,
    getSlotProps: (H) => ({
      onClickAway: (...K) => {
        var W;
        const X = K[0];
        (W = H.onClickAway) == null || W.call(H, ...K), !(X != null && X.defaultMuiPrevented) && g(...K);
      }
    }),
    ownerState: O
  }), [V, D] = he("content", {
    elementType: F5,
    shouldForwardComponentProp: !0,
    externalForwardedProps: $,
    additionalProps: {
      message: f,
      action: s
    },
    ownerState: O
  }), [q, Y] = he("transition", {
    elementType: el,
    externalForwardedProps: $,
    getSlotProps: (H) => ({
      onEnter: (...K) => {
        var X;
        (X = H.onEnter) == null || X.call(H, ...K), P(!1);
      },
      onExited: (...K) => {
        var X;
        (X = H.onExited) == null || X.call(H, ...K), P(!0);
      }
    }),
    additionalProps: {
      appear: !0,
      in: y,
      timeout: R,
      direction: l === "top" ? "down" : "up"
    },
    ownerState: O
  });
  return !y && I ? null : /* @__PURE__ */ u.jsx(j, {
    ...F,
    ...T.clickAwayListener && {
      ownerState: z
    },
    children: /* @__PURE__ */ u.jsx(A, {
      ...N,
      children: /* @__PURE__ */ u.jsx(q, {
        ...Y,
        children: d || /* @__PURE__ */ u.jsx(V, {
          ...D
        })
      })
    })
  });
});
function V5(e) {
  return ce("MuiTooltip", e);
}
const Cn = ae("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]);
function K5(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Y5 = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: r,
    touch: o,
    placement: i
  } = e, s = {
    popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
    tooltip: ["tooltip", r && "tooltipArrow", o && "touch", `tooltipPlacement${ee(i.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return ue(s, V5, t);
}, G5 = U(L1, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(de(({
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
}))), X5 = U("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${ee(n.placement.split("-")[0])}`]];
  }
})(de(({
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
      lineHeight: `${K5(16 / 14)}em`,
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
}))), Q5 = U("span", {
  name: "MuiTooltip",
  slot: "Arrow"
})(de(({
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
const Ug = new su();
let rs = {
  x: 0,
  y: 0
};
function Kl(e, t) {
  return (n, ...r) => {
    t && t(n, ...r), e(n, ...r);
  };
}
const os = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    disableTouchListener: p = !1,
    enterDelay: v = 100,
    enterNextDelay: f = 0,
    enterTouchDelay: b = 700,
    followCursor: S = !1,
    id: C,
    leaveDelay: x = 0,
    leaveTouchDelay: m = 1500,
    onClose: y,
    onOpen: w,
    open: T,
    placement: k = "bottom",
    slotProps: R = {},
    slots: E = {},
    title: O,
    ...L
  } = r, M = /* @__PURE__ */ h.isValidElement(i) ? i : /* @__PURE__ */ u.jsx("span", {
    children: i
  }), g = lo(), [I, P] = h.useState(), [$, A] = h.useState(null), N = h.useRef(!1), j = d || S, z = ir(), F = ir(), V = ir(), D = ir(), [q, Y] = Ya({
    controlled: T,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let H = q;
  const K = Ir(C), X = h.useRef(), W = rt(() => {
    X.current !== void 0 && (document.body.style.WebkitUserSelect = X.current, X.current = void 0), D.clear();
  });
  h.useEffect(() => W, [W]);
  const re = (me) => {
    Ug.clear(), Vl = !0, Y(!0), w && !H && w(me);
  }, oe = rt(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (me) => {
      Ug.start(800 + x, () => {
        Vl = !1;
      }), Y(!1), y && H && y(me), z.start(g.transitions.duration.shortest, () => {
        N.current = !1;
      });
    }
  ), Te = (me) => {
    I != null && I.disabled || N.current && me.type !== "touchstart" || (I && I.removeAttribute("title"), F.clear(), V.clear(), v || Vl && f ? F.start(Vl ? f : v, () => {
      re(me);
    }) : re(me));
  }, ye = (me) => {
    F.clear(), V.start(x, () => {
      oe(me);
    });
  }, [, ge] = h.useState(!1), se = (me) => {
    const Ve = (me == null ? void 0 : me.target) ?? I;
    if (!Ve || Ve.disabled || !Xa(Ve)) {
      ge(!1);
      const Dt = me ?? new Event("blur");
      !me && Ve && (Object.defineProperty(Dt, "target", {
        value: Ve
      }), Object.defineProperty(Dt, "currentTarget", {
        value: Ve
      })), ye(Dt);
    }
  }, Ae = (me) => {
    if (I || P(me.currentTarget), Xa(me.target)) {
      const Ve = (Dt) => {
        Dt.target.disabled && se(Dt), Dt.target.removeEventListener("blur", Ve);
      };
      me.target.addEventListener("blur", Ve), ge(!0), Te(me);
    }
  }, Fe = (me) => {
    N.current = !0;
    const Ve = M.props;
    Ve.onTouchStart && Ve.onTouchStart(me);
  }, $e = (me) => {
    Fe(me), V.clear(), z.clear(), W(), X.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", D.start(b, () => {
      document.body.style.WebkitUserSelect = X.current, Te(me);
    });
  }, je = (me) => {
    M.props.onTouchEnd && M.props.onTouchEnd(me), W(), V.start(m, () => {
      oe(me);
    });
  };
  h.useEffect(() => {
    if (!H)
      return;
    function me(Ve) {
      Ve.key === "Escape" && oe(Ve);
    }
    return document.addEventListener("keydown", me), () => {
      document.removeEventListener("keydown", me);
    };
  }, [oe, H]);
  const pe = yt(zo(M), P, n);
  !O && O !== 0 && (H = !1);
  const Re = h.useRef(), Qe = (me) => {
    const Ve = M.props;
    Ve.onMouseMove && Ve.onMouseMove(me), rs = {
      x: me.clientX,
      y: me.clientY
    }, Re.current && Re.current.update();
  }, Oe = {}, Ue = typeof O == "string";
  l ? (Oe.title = !H && Ue && !c ? O : null, Oe["aria-describedby"] = H ? K : null) : (Oe["aria-label"] = Ue ? O : null, Oe["aria-labelledby"] = H && !Ue ? K : null);
  const Pe = {
    ...Oe,
    ...L,
    ...M.props,
    className: J(L.className, M.props.className),
    onTouchStart: Fe,
    ref: pe,
    ...S ? {
      onMouseMove: Qe
    } : {}
  }, qe = {};
  p || (Pe.onTouchStart = $e, Pe.onTouchEnd = je), c || (Pe.onMouseOver = Kl(Te, Pe.onMouseOver), Pe.onMouseLeave = Kl(ye, Pe.onMouseLeave), j || (qe.onMouseOver = Te, qe.onMouseLeave = ye)), a || (Pe.onFocus = Kl(Ae, Pe.onFocus), Pe.onBlur = Kl(se, Pe.onBlur), j || (qe.onFocus = Ae, qe.onBlur = se));
  const De = {
    ...r,
    arrow: o,
    disableInteractive: j,
    placement: k,
    touch: N.current
  }, Se = typeof R.popper == "function" ? R.popper(De) : R.popper, He = h.useMemo(() => {
    var Ve;
    let me = [{
      name: "arrow",
      enabled: !!$,
      options: {
        element: $,
        padding: 4
      }
    }];
    return (Ve = Se == null ? void 0 : Se.popperOptions) != null && Ve.modifiers && (me = me.concat(Se.popperOptions.modifiers)), {
      ...Se == null ? void 0 : Se.popperOptions,
      modifiers: me
    };
  }, [$, Se == null ? void 0 : Se.popperOptions]), bt = Y5(De), ie = {
    slots: E,
    slotProps: {
      arrow: R.arrow,
      popper: Se,
      tooltip: R.tooltip,
      transition: R.transition
    }
  }, [be, Be] = he("popper", {
    elementType: G5,
    externalForwardedProps: ie,
    ownerState: De,
    className: bt.popper
  }), [dt, Ce] = he("transition", {
    elementType: el,
    externalForwardedProps: ie,
    ownerState: De
  }), [Yn, dn] = he("tooltip", {
    elementType: X5,
    className: bt.tooltip,
    externalForwardedProps: ie,
    ownerState: De
  }), [Gn, fr] = he("arrow", {
    elementType: Q5,
    className: bt.arrow,
    externalForwardedProps: ie,
    ownerState: De,
    ref: A
  });
  return /* @__PURE__ */ u.jsxs(h.Fragment, {
    children: [/* @__PURE__ */ h.cloneElement(M, Pe), /* @__PURE__ */ u.jsx(be, {
      as: L1,
      placement: k,
      anchorEl: S ? {
        getBoundingClientRect: () => ({
          top: rs.y,
          left: rs.x,
          right: rs.x,
          bottom: rs.y,
          width: 0,
          height: 0
        })
      } : I,
      popperRef: Re,
      open: I ? H : !1,
      id: K,
      transition: !0,
      ...qe,
      ...Be,
      popperOptions: He,
      children: ({
        TransitionProps: me
      }) => /* @__PURE__ */ u.jsx(dt, {
        timeout: g.transitions.duration.shorter,
        ...me,
        ...Ce,
        children: /* @__PURE__ */ u.jsxs(Yn, {
          ...dn,
          children: [O, o ? /* @__PURE__ */ u.jsx(Gn, {
            ...fr
          }) : null]
        })
      })
    })]
  });
}), st = _k({
  createStyledComponent: U("div", {
    name: "MuiStack",
    slot: "Root"
  }),
  useThemeProps: (e) => fe({
    props: e,
    name: "MuiStack"
  })
});
function q5(e) {
  return ce("MuiSwitch", e);
}
const Xt = ae("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), Z5 = (e) => {
  const {
    classes: t,
    edge: n,
    size: r,
    color: o,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", n && `edge${ee(n)}`, `size${ee(r)}`],
    switchBase: ["switchBase", `color${ee(o)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, a = ue(l, q5, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...a
  };
}, J5 = U("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${ee(n.edge)}`], t[`size${ee(n.size)}`]];
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
      [`& .${Xt.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${Xt.switchBase}`]: {
        padding: 4,
        [`&.${Xt.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), eM = U(qR, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${Xt.input}`]: t.input
    }, n.color !== "default" && t[`color${ee(n.color)}`]];
  }
})(de(({
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
  [`&.${Xt.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${Xt.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${Xt.checked} + .${Xt.track}`]: {
    opacity: 0.5
  },
  [`&.${Xt.disabled} + .${Xt.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${Xt.input}`]: {
    left: "-100%",
    width: "300%"
  }
})), de(({
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
      [`&.${Xt.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.alpha((e.vars || e).palette[t].main, (e.vars || e).palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${Xt.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? e.lighten(e.palette[t].main, 0.62) : e.darken(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${Xt.checked} + .${Xt.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
}))), tM = U("span", {
  name: "MuiSwitch",
  slot: "Track"
})(de(({
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
}))), nM = U("span", {
  name: "MuiSwitch",
  slot: "Thumb"
})(de(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  boxSizing: "border-box",
  border: "1px solid transparent",
  width: 20,
  height: 20,
  borderRadius: "50%"
}))), rM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiSwitch"
  }), {
    className: o,
    color: i = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: a,
    slots: c = {},
    slotProps: d = {},
    ...p
  } = r, v = {
    ...r,
    color: i,
    edge: s,
    size: l
  }, f = Z5(v), b = d.input, S = {
    slots: c,
    slotProps: d
  }, [C, x] = he("root", {
    className: J(f.root, o),
    elementType: J5,
    externalForwardedProps: S,
    ownerState: v,
    additionalProps: {
      sx: a
    }
  }), [m, y] = he("thumb", {
    className: f.thumb,
    elementType: nM,
    externalForwardedProps: S,
    ownerState: v
  }), w = /* @__PURE__ */ u.jsx(m, {
    ...y
  }), [T, k] = he("track", {
    className: f.track,
    elementType: tM,
    externalForwardedProps: S,
    ownerState: v
  });
  return /* @__PURE__ */ u.jsxs(C, {
    ...x,
    children: [/* @__PURE__ */ u.jsx(eM, {
      type: "checkbox",
      icon: w,
      checkedIcon: w,
      ref: n,
      ownerState: v,
      ...p,
      classes: {
        ...f,
        root: f.switchBase
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
        ...d.switchBase && {
          root: typeof d.switchBase == "function" ? d.switchBase(v) : d.switchBase
        },
        input: g1(typeof b == "function" ? b(v) : b, {
          role: "switch"
        })
      }
    }), /* @__PURE__ */ u.jsx(T, {
      ...k
    })]
  });
});
function oM(e) {
  return ce("MuiTab", e);
}
const _n = ae("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "icon"]), iM = (e) => {
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
    root: ["root", i && s && "labelIcon", `textColor${ee(n)}`, r && "fullWidth", o && "wrapped", l && "selected", a && "disabled"],
    icon: ["icon"]
  };
  return ue(c, oM, t);
}, sM = U(no, {
  name: "MuiTab",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.label && n.icon && t.labelIcon, t[`textColor${ee(n.textColor)}`], n.fullWidth && t.fullWidth, n.wrapped && t.wrapped, {
      [`& .${_n.icon}`]: t.icon
    }];
  }
})(de(({
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
}))), Jn = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    label: p,
    onChange: v,
    onClick: f,
    onFocus: b,
    // eslint-disable-next-line react/prop-types
    selected: S,
    // eslint-disable-next-line react/prop-types
    selectionFollowsFocus: C,
    // eslint-disable-next-line react/prop-types
    textColor: x = "inherit",
    value: m,
    wrapped: y = !1,
    ...w
  } = r, T = H1(), k = K1({
    id: m,
    ref: n,
    disabled: i,
    selected: S
  }), E = T.getItemMap().size === 0 && S ? 0 : k.tabIndex, O = {
    ...r,
    disabled: i,
    disableFocusRipple: s,
    selected: S,
    icon: !!a,
    iconPosition: c,
    label: !!p,
    fullWidth: l,
    textColor: x,
    wrapped: y
  }, L = iM(O), M = a && p && /* @__PURE__ */ h.isValidElement(a) ? /* @__PURE__ */ h.cloneElement(a, {
    className: J(L.icon, a.props.className)
  }) : a, g = (P) => {
    !S && v && v(P, m), f && f(P);
  }, I = (P) => {
    C && !S && v && v(P, m), b && b(P);
  };
  return /* @__PURE__ */ u.jsxs(sM, {
    internalNativeButton: !0,
    focusRipple: !s,
    className: J(L.root, o),
    ref: k.ref,
    role: "tab",
    "aria-selected": S,
    disabled: i,
    onClick: g,
    onFocus: I,
    tabIndex: E,
    ownerState: O,
    ...w,
    children: [c === "top" || c === "start" ? /* @__PURE__ */ u.jsxs(h.Fragment, {
      children: [M, p]
    }) : /* @__PURE__ */ u.jsxs(h.Fragment, {
      children: [p, M]
    }), d]
  });
}), lx = /* @__PURE__ */ h.createContext();
function lM(e) {
  return ce("MuiTable", e);
}
ae("MuiTable", ["root", "stickyHeader"]);
const aM = (e) => {
  const {
    classes: t,
    stickyHeader: n
  } = e;
  return ue({
    root: ["root", n && "stickyHeader"]
  }, lM, t);
}, cM = U("table", {
  name: "MuiTable",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.stickyHeader && t.stickyHeader];
  }
})(de(({
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
}))), Hg = "table", Xu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTable"
  }), {
    className: o,
    component: i = Hg,
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
  }, p = aM(d), v = h.useMemo(() => ({
    padding: s,
    size: l,
    stickyHeader: a
  }), [s, l, a]);
  return /* @__PURE__ */ u.jsx(lx.Provider, {
    value: v,
    children: /* @__PURE__ */ u.jsx(cM, {
      as: i,
      role: i === Hg ? null : "table",
      ref: n,
      className: J(p.root, o),
      ownerState: d,
      ...c
    })
  });
}), au = /* @__PURE__ */ h.createContext();
function uM(e) {
  return ce("MuiTableBody", e);
}
ae("MuiTableBody", ["root"]);
const dM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, uM, t);
}, fM = U("tbody", {
  name: "MuiTableBody",
  slot: "Root"
})({
  display: "table-row-group"
}), pM = {
  variant: "body"
}, Vg = "tbody", Qu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTableBody"
  }), {
    className: o,
    component: i = Vg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = dM(l);
  return /* @__PURE__ */ u.jsx(au.Provider, {
    value: pM,
    children: /* @__PURE__ */ u.jsx(fM, {
      className: J(a.root, o),
      as: i,
      ref: n,
      role: i === Vg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
});
function mM(e) {
  return ce("MuiTableCell", e);
}
const hM = ae("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), gM = (e) => {
  const {
    classes: t,
    variant: n,
    align: r,
    padding: o,
    size: i,
    stickyHeader: s
  } = e, l = {
    root: ["root", n, s && "stickyHeader", r !== "inherit" && `align${ee(r)}`, o !== "normal" && `padding${ee(o)}`, `size${ee(i)}`]
  };
  return ue(l, mM, t);
}, yM = U("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${ee(n.size)}`], n.padding !== "normal" && t[`padding${ee(n.padding)}`], n.align !== "inherit" && t[`align${ee(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(de(({
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
      [`&.${hM.paddingCheckbox}`]: {
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
  const r = fe({
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
    variant: p,
    ...v
  } = r, f = h.useContext(lx), b = h.useContext(au), S = b && b.variant === "head";
  let C;
  s ? C = s : C = S ? "th" : "td";
  let x = a;
  C === "td" ? x = void 0 : !x && S && (x = "col");
  const m = p || b && b.variant, y = {
    ...r,
    align: o,
    component: C,
    padding: l || (f && f.padding ? f.padding : "normal"),
    size: c || (f && f.size ? f.size : "medium"),
    sortDirection: d,
    stickyHeader: m === "head" && f && f.stickyHeader,
    variant: m
  }, w = gM(y);
  let T = null;
  return d && (T = d === "asc" ? "ascending" : "descending"), /* @__PURE__ */ u.jsx(yM, {
    as: C,
    ref: n,
    className: J(w.root, i),
    "aria-sort": T,
    scope: x,
    ownerState: y,
    ...v
  });
});
function vM(e) {
  return ce("MuiTableContainer", e);
}
ae("MuiTableContainer", ["root"]);
const xM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, vM, t);
}, bM = U("div", {
  name: "MuiTableContainer",
  slot: "Root"
})({
  width: "100%",
  overflowX: "auto"
}), qu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTableContainer"
  }), {
    className: o,
    component: i = "div",
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = xM(l);
  return /* @__PURE__ */ u.jsx(bM, {
    ref: n,
    as: i,
    className: J(a.root, o),
    ownerState: l,
    ...s
  });
});
function SM(e) {
  return ce("MuiTableHead", e);
}
ae("MuiTableHead", ["root"]);
const wM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, SM, t);
}, CM = U("thead", {
  name: "MuiTableHead",
  slot: "Root"
})({
  display: "table-header-group"
}), kM = {
  variant: "head"
}, Kg = "thead", Zu = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTableHead"
  }), {
    className: o,
    component: i = Kg,
    ...s
  } = r, l = {
    ...r,
    component: i
  }, a = wM(l);
  return /* @__PURE__ */ u.jsx(au.Provider, {
    value: kM,
    children: /* @__PURE__ */ u.jsx(CM, {
      as: i,
      className: J(a.root, o),
      ref: n,
      role: i === Kg ? null : "rowgroup",
      ownerState: l,
      ...s
    })
  });
}), TM = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
})), EM = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}));
function RM(e) {
  return ce("MuiTableRow", e);
}
const Yg = ae("MuiTableRow", ["root", "selected", "hover", "head", "footer"]), PM = (e) => {
  const {
    classes: t,
    selected: n,
    hover: r,
    head: o,
    footer: i
  } = e;
  return ue({
    root: ["root", n && "selected", r && "hover", o && "head", i && "footer"]
  }, RM, t);
}, IM = U("tr", {
  name: "MuiTableRow",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.head && t.head, n.footer && t.footer];
  }
})(de(({
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
}))), Gg = "tr", gr = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
    props: t,
    name: "MuiTableRow"
  }), {
    className: o,
    component: i = Gg,
    hover: s = !1,
    selected: l = !1,
    ...a
  } = r, c = h.useContext(au), d = {
    ...r,
    component: i,
    hover: s,
    selected: l,
    head: c && c.variant === "head",
    footer: c && c.variant === "footer"
  }, p = PM(d);
  return /* @__PURE__ */ u.jsx(IM, {
    as: i,
    ref: n,
    className: J(p.root, o),
    role: i === Gg ? null : "row",
    ownerState: d,
    ...a
  });
});
function MM(e) {
  return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2;
}
function $M(e, t, n, r = {}, o = () => {
}) {
  const {
    ease: i = MM,
    duration: s = 300
    // standard
  } = r;
  let l = null;
  const a = t[e];
  let c = !1;
  const d = () => {
    c = !0;
  }, p = (v) => {
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
    requestAnimationFrame(p);
  };
  return a === n ? (o(new Error("Element already at target position")), d) : (requestAnimationFrame(p), d);
}
const jM = {
  width: 99,
  height: 99,
  position: "absolute",
  top: -9999,
  overflow: "scroll",
  pointerEvents: "none"
};
function OM(e) {
  const {
    onChange: t,
    ...n
  } = e, r = h.useRef(), o = h.useRef(null), i = () => {
    r.current = o.current.offsetHeight - o.current.clientHeight;
  };
  return ht(() => {
    const s = eu(() => {
      const a = r.current;
      i(), a !== r.current && t(r.current);
    }), l = Kn(o.current);
    return l.addEventListener("resize", s), () => {
      s.clear(), l.removeEventListener("resize", s);
    };
  }, [t]), h.useEffect(() => {
    i(), t(r.current);
  }, [t]), /* @__PURE__ */ u.jsx("div", {
    style: jM,
    ...n,
    ref: o
  });
}
function AM(e) {
  return ce("MuiTabScrollButton", e);
}
const LM = ae("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]), NM = (e) => {
  const {
    classes: t,
    orientation: n,
    disabled: r
  } = e;
  return ue({
    root: ["root", n, r && "disabled"]
  }, AM, t);
}, BM = U(no, {
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
  [`&.${LM.disabled}`]: {
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
}), zM = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    nativeButton: p,
    ...v
  } = d, f = ul(), b = {
    isRtl: f,
    ...r
  }, S = NM(b), C = i.StartScrollButtonIcon ?? TM, x = i.EndScrollButtonIcon ?? EM, m = Ai({
    elementType: C,
    externalSlotProps: s.startScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: b
  }), y = Ai({
    elementType: x,
    externalSlotProps: s.endScrollButtonIcon,
    additionalProps: {
      fontSize: "small"
    },
    ownerState: b
  });
  return /* @__PURE__ */ u.jsx(BM, {
    component: "div",
    className: J(S.root, o),
    ref: n,
    role: null,
    ownerState: b,
    tabIndex: null,
    ...v,
    style: {
      ...v.style,
      ...a === "vertical" && {
        "--TabScrollButton-svgRotate": `rotate(${f ? -90 : 90}deg)`
      }
    },
    children: l === "left" ? /* @__PURE__ */ u.jsx(C, {
      ...m
    }) : /* @__PURE__ */ u.jsx(x, {
      ...y
    })
  });
});
function _M(e) {
  return ce("MuiTabs", e);
}
const Ju = ae("MuiTabs", ["root", "vertical", "list", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]), FM = (e) => {
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
  }, _M, a);
}, DM = U("div", {
  name: "MuiTabs",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Ju.scrollButtons}`]: t.scrollButtons
    }, {
      [`& .${Ju.scrollButtons}`]: n.scrollButtonsHideMobile && t.scrollButtonsHideMobile
    }, t.root, n.vertical && t.vertical];
  }
})(de(({
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
      [`& .${Ju.scrollButtons}`]: {
        [e.breakpoints.down("sm")]: {
          display: "none"
        }
      }
    }
  }]
}))), WM = U("div", {
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
}), UM = U("div", {
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
}), HM = U("span", {
  name: "MuiTabs",
  slot: "Indicator"
})(de(({
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
}))), VM = U(OM)({
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
  const r = fe({
    props: t,
    name: "MuiTabs"
  }), o = lo(), i = ul(), s = iu(o.motion.reducedMotion, !1), {
    "aria-label": l,
    "aria-labelledby": a,
    action: c,
    centered: d = !1,
    children: p,
    className: v,
    component: f = "div",
    allowScrollButtonsMobile: b = !1,
    indicatorColor: S = "primary",
    onChange: C,
    orientation: x = "horizontal",
    scrollButtons: m = "auto",
    selectionFollowsFocus: y,
    slots: w = {},
    slotProps: T = {},
    textColor: k = "primary",
    value: R,
    variant: E = "standard",
    visibleScrollbar: O = !1,
    ...L
  } = r, M = E === "scrollable", g = x === "vertical", I = g ? "scrollTop" : "scrollLeft", P = g ? "top" : "left", $ = g ? "bottom" : "right", A = g ? "clientHeight" : "clientWidth", N = g ? "height" : "width", j = {
    ...r,
    component: f,
    allowScrollButtonsMobile: b,
    indicatorColor: S,
    orientation: x,
    vertical: g,
    scrollButtons: m,
    textColor: k,
    variant: E,
    visibleScrollbar: O,
    fixed: !M,
    hideScrollbar: M && !O,
    scrollableX: M && !g,
    scrollableY: M && g,
    centered: d && !M,
    scrollButtonsHideMobile: !b
  }, z = FM(j), F = Ai({
    elementType: w.startScrollButtonIcon,
    externalSlotProps: T.startScrollButtonIcon,
    ownerState: j
  }), V = Ai({
    elementType: w.endScrollButtonIcon,
    externalSlotProps: T.endScrollButtonIcon,
    ownerState: j
  }), [D, q] = h.useState(!1), [Y, H] = h.useState(Xg), [K, X] = h.useState(!1), [W, re] = h.useState(!1), [oe, Te] = h.useState(!1), ye = R === !1 ? null : R, [ge, se] = h.useState(!1), [Ae, Fe] = h.useState({
    overflow: "hidden",
    scrollbarWidth: 0
  }), $e = /* @__PURE__ */ new Map(), je = h.useRef(null), pe = h.useRef(null), Re = {
    slots: w,
    slotProps: T
  }, Qe = () => {
    const ne = je.current;
    let Z;
    if (ne) {
      const Ee = ne.getBoundingClientRect();
      Z = {
        clientWidth: ne.clientWidth,
        scrollLeft: ne.scrollLeft,
        scrollTop: ne.scrollTop,
        scrollWidth: ne.scrollWidth,
        top: Ee.top,
        bottom: Ee.bottom,
        left: Ee.left,
        right: Ee.right
      };
    }
    let xe;
    if (ne && R !== !1) {
      const Ee = pe.current.children;
      if (Ee.length > 0) {
        const St = Ee[$e.get(R)];
        xe = St ? St.getBoundingClientRect() : null;
      }
    }
    return {
      tabsMeta: Z,
      tabMeta: xe
    };
  }, Oe = rt(() => {
    const {
      tabsMeta: ne,
      tabMeta: Z
    } = Qe();
    let xe = 0, Ee;
    g ? (Ee = "top", Z && ne && (xe = Z.top - ne.top + ne.scrollTop)) : (Ee = i ? "right" : "left", Z && ne && (xe = (i ? -1 : 1) * (Z[Ee] - ne[Ee] + ne.scrollLeft)));
    const St = {
      [Ee]: xe,
      // May be wrong until the font is loaded.
      [N]: Z ? Z[N] : 0
    };
    if (typeof Y[Ee] != "number" || typeof Y[N] != "number")
      H(St);
    else {
      const pr = Math.abs(Y[Ee] - St[Ee]), Xn = Math.abs(Y[N] - St[N]);
      (pr >= 1 || Xn >= 1) && H(St);
    }
  }), Ue = (ne, {
    animation: Z = !0
  } = {}) => {
    Z && !s.shouldReduceMotion ? $M(I, je.current, ne, {
      duration: o.transitions.duration.standard
    }) : je.current[I] = ne;
  }, Pe = (ne) => {
    let Z = je.current[I];
    g ? Z += ne : Z += ne * (i ? -1 : 1), Ue(Z);
  }, qe = () => {
    const ne = je.current[A];
    let Z = 0;
    const xe = Array.from(pe.current.children);
    for (let Ee = 0; Ee < xe.length; Ee += 1) {
      const St = xe[Ee];
      if (Z + St[A] > ne) {
        Ee === 0 && (Z = ne);
        break;
      }
      Z += St[A];
    }
    return Z;
  }, De = () => {
    Pe(-1 * qe());
  }, Se = () => {
    Pe(qe());
  }, [He, {
    onChange: bt,
    ...ie
  }] = he("scrollbar", {
    className: J(z.scrollableX, z.hideScrollbar),
    elementType: VM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: Re,
    ownerState: j
  }), be = h.useCallback((ne) => {
    bt == null || bt(ne), Fe({
      overflow: null,
      scrollbarWidth: ne
    });
  }, [bt]), [Be, dt] = he("scrollButtons", {
    className: z.scrollButtons,
    elementType: zM,
    externalForwardedProps: Re,
    ownerState: j,
    additionalProps: {
      orientation: x,
      slots: {
        StartScrollButtonIcon: w.startScrollButtonIcon,
        EndScrollButtonIcon: w.endScrollButtonIcon
      },
      slotProps: {
        startScrollButtonIcon: F,
        endScrollButtonIcon: V
      }
    }
  }), Ce = () => {
    const ne = {};
    ne.scrollbarSizeListener = M ? /* @__PURE__ */ u.jsx(He, {
      ...ie,
      onChange: be
    }) : null;
    const xe = M && (m === "auto" && (K || W) || m === !0);
    return ne.scrollButtonStart = xe ? /* @__PURE__ */ u.jsx(Be, {
      direction: i ? "right" : "left",
      onClick: De,
      disabled: !K,
      ...dt
    }) : null, ne.scrollButtonEnd = xe ? /* @__PURE__ */ u.jsx(Be, {
      direction: i ? "left" : "right",
      onClick: Se,
      disabled: !W,
      ...dt
    }) : null, ne;
  }, Yn = rt((ne) => {
    const {
      tabsMeta: Z,
      tabMeta: xe
    } = Qe();
    if (!(!xe || !Z)) {
      if (xe[P] < Z[P]) {
        const Ee = Z[I] + (xe[P] - Z[P]);
        Ue(Ee, {
          animation: ne
        });
      } else if (xe[$] > Z[$]) {
        const Ee = Z[I] + (xe[$] - Z[$]);
        Ue(Ee, {
          animation: ne
        });
      }
    }
  }), dn = rt(() => {
    M && m !== !1 && Te(!oe);
  });
  h.useEffect(() => {
    const ne = eu(() => {
      je.current && Oe();
    });
    let Z;
    const xe = (pr) => {
      pr.forEach((Xn) => {
        Xn.removedNodes.forEach((co) => {
          Z == null || Z.unobserve(co);
        }), Xn.addedNodes.forEach((co) => {
          Z == null || Z.observe(co);
        });
      }), ne(), dn();
    }, Ee = Kn(je.current);
    Ee.addEventListener("resize", ne);
    let St;
    return typeof ResizeObserver < "u" && (Z = new ResizeObserver(ne), Array.from(pe.current.children).forEach((pr) => {
      Z.observe(pr);
    })), typeof MutationObserver < "u" && (St = new MutationObserver(xe), St.observe(pe.current, {
      childList: !0
    })), () => {
      ne.clear(), Ee.removeEventListener("resize", ne), St == null || St.disconnect(), Z == null || Z.disconnect();
    };
  }, [Oe, dn]), h.useEffect(() => {
    const ne = Array.from(pe.current.children), Z = ne.length;
    if (typeof IntersectionObserver < "u" && Z > 0 && M && m !== !1) {
      const xe = ne[0], Ee = ne[Z - 1], St = {
        root: je.current,
        threshold: 0.99
      }, pr = (Fo) => {
        X(!Fo[0].isIntersecting);
      }, Xn = new IntersectionObserver(pr, St);
      Xn.observe(xe);
      const co = (Fo) => {
        re(!Fo[0].isIntersecting);
      }, Wi = new IntersectionObserver(co, St);
      return Wi.observe(Ee), () => {
        Xn.disconnect(), Wi.disconnect();
      };
    }
  }, [M, m, oe, p == null ? void 0 : p.length]), h.useEffect(() => {
    q(!0);
  }, []), h.useEffect(() => {
    Oe();
  }), h.useEffect(() => {
    Yn(Xg !== Y);
  }, [Yn, Y]), h.useImperativeHandle(c, () => ({
    updateIndicator: Oe,
    updateScrollButtons: dn
  }), [Oe, dn]);
  const [Gn, fr] = he("indicator", {
    className: z.indicator,
    elementType: HM,
    externalForwardedProps: Re,
    ownerState: j,
    additionalProps: {
      style: Y
    }
  }), me = /* @__PURE__ */ u.jsx(Gn, {
    ...fr
  }), Ve = V1({
    activeItemId: ge ? void 0 : ye,
    orientation: x,
    isRtl: i
  }), Dt = Ve.getContainerProps(), B = h.Children.toArray(p).filter(h.isValidElement).map((ne, Z) => {
    const xe = ne.props.value === void 0 ? Z : ne.props.value;
    return $e.set(xe, Z), {
      child: ne,
      index: Z,
      childValue: xe
    };
  }).map(({
    child: ne,
    childValue: Z
  }) => {
    const xe = Z === R;
    return /* @__PURE__ */ h.cloneElement(ne, {
      fullWidth: E === "fullWidth",
      indicator: xe && !D && me,
      selected: xe,
      selectionFollowsFocus: y,
      onChange: C,
      textColor: k,
      value: Z
    });
  }), ve = Ce(), [Ne, jt] = he("root", {
    ref: n,
    className: J(z.root, v),
    elementType: DM,
    externalForwardedProps: {
      ...Re,
      ...L,
      component: f
    },
    ownerState: j
  }), [It, jr] = he("scroller", {
    ref: je,
    className: z.scroller,
    elementType: WM,
    externalForwardedProps: Re,
    ownerState: j,
    additionalProps: {
      style: {
        overflow: Ae.overflow,
        [g ? `margin${i ? "Left" : "Right"}` : "marginBottom"]: O ? void 0 : -Ae.scrollbarWidth
      }
    }
  }), _o = yt(Dt.ref, pe), cu = (ne) => {
    const Z = pe.current, xe = or(xt(Z));
    (xe == null ? void 0 : xe.getAttribute("role")) === "tab" && Dt.onKeyDown(ne);
  }, [ml, Di] = he("list", {
    ref: _o,
    className: z.list,
    elementType: UM,
    externalForwardedProps: Re,
    ownerState: j,
    getSlotProps: (ne) => ({
      ...ne,
      onBlur: (Z) => {
        var xe;
        To(Z.currentTarget, Z.relatedTarget) || se(!1), (xe = ne.onBlur) == null || xe.call(ne, Z);
      },
      onKeyDown: (Z) => {
        var xe;
        cu(Z), (xe = ne.onKeyDown) == null || xe.call(ne, Z);
      },
      onFocus: (Z) => {
        var xe;
        se(!0), Dt.onFocus(Z), (xe = ne.onFocus) == null || xe.call(ne, Z);
      }
    })
  });
  return /* @__PURE__ */ u.jsxs(Ne, {
    ...jt,
    children: [ve.scrollButtonStart, ve.scrollbarSizeListener, /* @__PURE__ */ u.jsxs(It, {
      ...jr,
      children: [/* @__PURE__ */ u.jsx(ml, {
        "aria-label": l,
        "aria-labelledby": a,
        "aria-orientation": x === "vertical" ? "vertical" : null,
        role: "tablist",
        ...Di,
        children: /* @__PURE__ */ u.jsx(nm.Provider, {
          value: Ve,
          children: B
        })
      }), D && me]
    }), ve.scrollButtonEnd]
  });
});
function KM(e) {
  return ce("MuiTextField", e);
}
ae("MuiTextField", ["root"]);
const YM = {
  standard: em,
  filled: Jp,
  outlined: rm
}, GM = (e) => {
  const {
    classes: t
  } = e;
  return ue({
    root: ["root"]
  }, KM, t);
}, XM = U(da, {
  name: "MuiTextField",
  slot: "Root"
})({}), Zo = /* @__PURE__ */ h.forwardRef(function(t, n) {
  const r = fe({
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
    error: p = !1,
    fullWidth: v = !1,
    helperText: f,
    id: b,
    inputRef: S,
    label: C,
    maxRows: x,
    minRows: m,
    multiline: y = !1,
    name: w,
    onBlur: T,
    onChange: k,
    onFocus: R,
    placeholder: E,
    required: O = !1,
    rows: L,
    select: M = !1,
    slots: g = {},
    slotProps: I = {},
    type: P,
    value: $,
    variant: A = "outlined",
    ...N
  } = r, j = {
    ...r,
    autoFocus: i,
    color: a,
    disabled: d,
    error: p,
    fullWidth: v,
    multiline: y,
    required: O,
    select: M,
    variant: A
  }, z = GM(j), F = Ir(b), V = f && F ? `${F}-helper-text` : void 0, D = C && F ? `${F}-label` : void 0, q = YM[A], Y = {
    slots: g,
    slotProps: I
  }, [H, K] = he("select", {
    elementType: Ps,
    externalForwardedProps: Y,
    ownerState: j
  }), X = M && K.native, W = {}, re = Y.slotProps.inputLabel;
  A === "outlined" && (re && typeof re.shrink < "u" && (W.notched = re.shrink), W.label = C), M && (X || (W.id = void 0), W["aria-describedby"] = void 0);
  const [oe, Te] = he("root", {
    elementType: XM,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...Y,
      ...N
    },
    ownerState: j,
    className: J(z.root, l),
    ref: n,
    additionalProps: {
      disabled: d,
      error: p,
      fullWidth: v,
      required: O,
      color: a,
      variant: A
    }
  }), [ye, ge] = he("input", {
    elementType: q,
    externalForwardedProps: Y,
    additionalProps: W,
    ownerState: j
  }), [se, Ae] = he("inputLabel", {
    elementType: fa,
    externalForwardedProps: Y,
    ownerState: j
  }), [Fe, $e] = he("htmlInput", {
    elementType: "input",
    externalForwardedProps: Y,
    ownerState: j
  }), [je, pe] = he("formHelperText", {
    elementType: XP,
    externalForwardedProps: Y,
    ownerState: j
  }), Re = /* @__PURE__ */ u.jsx(ye, {
    "aria-describedby": V,
    autoComplete: o,
    autoFocus: i,
    defaultValue: c,
    fullWidth: v,
    multiline: y,
    name: w,
    rows: L,
    maxRows: x,
    minRows: m,
    type: P,
    value: $,
    id: F,
    inputRef: S,
    onBlur: T,
    onChange: k,
    onFocus: R,
    placeholder: E,
    inputProps: $e,
    slots: {
      input: g.htmlInput ? Fe : void 0
    },
    ...ge
  });
  return /* @__PURE__ */ u.jsxs(oe, {
    ...Te,
    children: [C != null && C !== "" && /* @__PURE__ */ u.jsx(se, {
      htmlFor: M && !X ? void 0 : F,
      id: D,
      ...M && !X && {
        component: "div"
      },
      ...Ae,
      children: C
    }), M ? /* @__PURE__ */ u.jsx(H, {
      "aria-describedby": V,
      id: F,
      labelId: D,
      value: $,
      input: Re,
      ...K,
      children: s
    }) : Re, f && /* @__PURE__ */ u.jsx(je, {
      id: V,
      ...pe,
      children: f
    })]
  });
}), QM = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
})), is = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
})), ed = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
})), qM = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"
})), qg = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"
})), td = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"
})), ZM = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"
})), Zg = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3"
})), Jg = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"
})), JM = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"
})), Yl = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"
})), e$ = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1z"
})), t$ = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m0 12H6V10h12z"
})), n$ = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"
})), r$ = ot([/* @__PURE__ */ u.jsx("path", {
  d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5z"
}, "0"), /* @__PURE__ */ u.jsx("path", {
  d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99M13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83m4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24"
}, "1")]), o$ = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
})), i$ = ot(/* @__PURE__ */ u.jsx("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
})), ct = '"JetBrains Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';
function Lr({ children: e, sx: t }) {
  return /* @__PURE__ */ u.jsx(
    ke,
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
function ey({
  label: e,
  action: t,
  padded: n = !0,
  children: r,
  sx: o
}) {
  return /* @__PURE__ */ u.jsxs(Vt, { sx: { overflow: "hidden", ...o }, children: [
    (e || t) && /* @__PURE__ */ u.jsxs(
      st,
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
          typeof e == "string" ? /* @__PURE__ */ u.jsx(Lr, { children: e }) : e,
          t
        ]
      }
    ),
    /* @__PURE__ */ u.jsx(et, { sx: n ? { p: 2 } : void 0, children: r })
  ] });
}
function ty({ ok: e, size: t = 7 }) {
  return /* @__PURE__ */ u.jsx(
    et,
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
function s$({ ctx: e }) {
  const t = h.useMemo(
    () => Jc(e.theme ?? {}),
    [e.theme]
  );
  return /* @__PURE__ */ u.jsx(H2, { theme: t, children: /* @__PURE__ */ u.jsx(l$, { ctx: e }) });
}
function nd(e) {
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
function l$({ ctx: e }) {
  var fr, me, Ve, Dt, Fi;
  const [t, n] = h.useState(0), [r, o] = h.useState(!0), [i, s] = h.useState(null), [l, a] = h.useState(null), [c, d] = h.useState([]), [p, v] = h.useState([]), [f, b] = h.useState(null), [S, C] = h.useState(null), [x, m] = h.useState(""), [y, w] = h.useState(null), [T, k] = h.useState(""), [R, E] = h.useState([]), [O, L] = h.useState(!1), [M, g] = h.useState(!1), I = h.useRef(null), [P, $] = h.useState(!1), [A, N] = h.useState(""), [j, z] = h.useState(5120), [F, V] = h.useState(!1), [D, q] = h.useState(null), [Y, H] = h.useState(!1), [K, X] = h.useState(""), [W, re] = h.useState(""), [oe, Te] = h.useState(null), [ye, ge] = h.useState(null), [se, Ae] = h.useState(null), [Fe, $e] = h.useState(3600), [je, pe] = h.useState(null), [Re, Qe] = h.useState(null), [Oe, Ue] = h.useState(0), Pe = h.useCallback(async () => {
    o(!0);
    try {
      const [B, ve, Ne, jt] = await Promise.all([
        e.api("/buckets"),
        e.api("/keys"),
        e.api("/settings"),
        e.api("/meta")
      ]);
      if (B.ok) {
        const It = await B.json();
        d(It.buckets || []);
      }
      if (ve.ok) {
        const It = await ve.json();
        v(It.keys || []);
      }
      if (Ne.ok) {
        const It = await Ne.json();
        b(It);
      }
      if (jt.ok) {
        const It = await jt.json();
        C(It);
      }
    } catch (B) {
      s(B instanceof Error ? B.message : String(B));
    } finally {
      o(!1);
    }
  }, [e]);
  h.useEffect(() => {
    Pe();
  }, [Pe]);
  const qe = h.useCallback(async (B, ve = "") => {
    L(!0);
    try {
      const Ne = new URLSearchParams({ prefix: ve, delimiter: "/" }), jt = await e.api(`/buckets/${B}/objects?${Ne.toString()}`);
      if (!jt.ok)
        throw new Error(`Failed to list objects in bucket ${B}`);
      const It = await jt.json();
      E(It.objects || []);
    } catch (Ne) {
      s(Ne instanceof Error ? Ne.message : String(Ne));
    } finally {
      L(!1);
    }
  }, [e]);
  h.useEffect(() => {
    y && qe(y, T);
  }, [y, T, qe]);
  const De = async () => {
    if (A.trim())
      try {
        const B = await e.api("/buckets", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: A.trim(),
            quota_mb: Number(j) || 5120,
            public_access: F
          })
        });
        if (!B.ok) {
          const ve = await B.json().catch(() => ({}));
          throw new Error(ve.detail ?? `HTTP ${B.status}`);
        }
        a(`S3 Bucket '${A}' created successfully.`), $(!1), N(""), Pe();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, Se = async () => {
    if (D)
      try {
        const B = await e.api(`/buckets/${D.name}`, { method: "DELETE" });
        if (!B.ok) {
          const ve = await B.json().catch(() => ({}));
          throw new Error(ve.detail ?? `HTTP ${B.status}`);
        }
        a(`Bucket '${D.name}' deleted.`), y === D.name && w(null), q(null), Pe();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, He = (B) => {
    w(B), k(""), n(1);
  }, bt = async (B) => {
    var Ne;
    const ve = (Ne = B.target.files) == null ? void 0 : Ne[0];
    if (!(!ve || !y)) {
      g(!0);
      try {
        const jt = new FormData();
        jt.append("prefix", T), jt.append("file", ve);
        const It = await e.api(`/buckets/${y}/objects/upload`, {
          method: "POST",
          body: jt
        });
        if (!It.ok) {
          const jr = await It.json().catch(() => ({}));
          throw new Error(jr.detail ?? "Upload failed");
        }
        a(`Uploaded '${ve.name}' to ${y}.`), qe(y, T), Pe();
      } catch (jt) {
        s(jt instanceof Error ? jt.message : String(jt));
      } finally {
        g(!1), I.current && (I.current.value = "");
      }
    }
  }, ie = async () => {
    if (!(!y || !Re))
      try {
        const B = new URLSearchParams({ key: Re });
        if (!(await e.api(`/buckets/${y}/objects?${B.toString()}`, {
          method: "DELETE"
        })).ok) throw new Error("Failed to delete object");
        a(`Deleted '${Re}'`), Qe(null), qe(y, T), Pe();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, be = async (B) => {
    if (y)
      try {
        if (!(await e.api(`/buckets/${y}/objects/acl`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            object_key: B.key,
            is_public: !B.is_public
          })
        })).ok) throw new Error("Failed to update access policy");
        a(`Object access set to ${B.is_public ? "Private" : "Public"}.`), qe(y, T);
      } catch (ve) {
        s(ve instanceof Error ? ve.message : String(ve));
      }
  }, Be = async () => {
    if (se)
      try {
        const B = await e.api(`/buckets/${se.bucket}/objects/presign`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            object_key: se.key,
            expires_in: Fe
          })
        });
        if (!B.ok) throw new Error("Failed to generate presigned link");
        const ve = await B.json();
        pe(ve.url);
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, dt = async () => {
    try {
      const B = await e.api("/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: K.trim(),
          bucket_id: W === "" ? null : Number(W)
        })
      });
      if (!B.ok) {
        const Ne = await B.json().catch(() => ({}));
        throw new Error(Ne.detail ?? "Failed to create key");
      }
      const ve = await B.json();
      Te({ id: ve.access_key, secret: ve.secret_key }), X(""), re(""), Pe();
    } catch (B) {
      s(B instanceof Error ? B.message : String(B));
    }
  }, Ce = async (B) => {
    const ve = B.status === "active" ? "disabled" : "active";
    try {
      if (!(await e.api(`/keys/${B.access_key}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: ve })
      })).ok) throw new Error("Failed to update key status");
      a(`Access key is now ${ve}.`), Pe();
    } catch (Ne) {
      s(Ne instanceof Error ? Ne.message : String(Ne));
    }
  }, Yn = async () => {
    if (ye)
      try {
        if (!(await e.api(`/keys/${ye.access_key}`, { method: "DELETE" })).ok) throw new Error("Failed to delete access key");
        a(`Access key '${ye.access_key}' deleted.`), ge(null), Pe();
      } catch (B) {
        s(B instanceof Error ? B.message : String(B));
      }
  }, dn = h.useMemo(() => {
    if (!x) return c;
    const B = x.toLowerCase();
    return c.filter((ve) => ve.name.toLowerCase().includes(B));
  }, [c, x]), Gn = (B) => {
    var ve;
    (ve = navigator.clipboard) == null || ve.writeText(B), a("Copied to clipboard!");
  };
  return /* @__PURE__ */ u.jsxs(et, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
    /* @__PURE__ */ u.jsxs(
      st,
      {
        direction: { xs: "column", md: "row" },
        sx: {
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2
        },
        children: [
          /* @__PURE__ */ u.jsxs(et, { children: [
            /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1.5, sx: { alignItems: "center", mb: 0.5 }, children: [
              /* @__PURE__ */ u.jsx(ke, { variant: "h5", sx: { fontWeight: 700, letterSpacing: "-0.02em" }, children: "Object Storage (S3)" }),
              /* @__PURE__ */ u.jsx(
                Ar,
                {
                  icon: /* @__PURE__ */ u.jsx(ty, { ok: !0, size: 8 }),
                  label: "S3 Active",
                  size: "small",
                  sx: { fontWeight: 600, bgcolor: "success.light", color: "success.contrastText" }
                }
              ),
              /* @__PURE__ */ u.jsx(
                Ar,
                {
                  label: `Port ${(S == null ? void 0 : S.s3_port) ?? 9e3}`,
                  size: "small",
                  variant: "outlined",
                  sx: { fontFamily: ct, fontSize: "0.75rem" }
                }
              ),
              /* @__PURE__ */ u.jsx(
                Ar,
                {
                  label: "100% Isolated /opt/hostpanel",
                  size: "small",
                  color: "primary",
                  variant: "outlined",
                  sx: { fontSize: "0.75rem", fontWeight: 600 }
                }
              )
            ] }),
            /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { color: "text.secondary" }, children: "AWS S3-compatible object storage with AWS SigV4 protocol, bucket quotas, access keys & object explorer." })
          ] }),
          /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center", flexShrink: 0 }, children: [
            /* @__PURE__ */ u.jsx(
              Je,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(QM, {}),
                onClick: () => Pe(),
                disabled: r,
                children: "Refresh"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Je,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(Jg, {}),
                onClick: () => {
                  Te(null), H(!0);
                },
                children: "New Access Key"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Je,
              {
                variant: "contained",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(is, {}),
                onClick: () => $(!0),
                children: "Create Bucket"
              }
            )
          ] })
        ]
      }
    ),
    i && /* @__PURE__ */ u.jsx(ug, { severity: "error", onClose: () => s(null), children: i }),
    /* @__PURE__ */ u.jsxs(st, { direction: { xs: "column", sm: "row" }, spacing: 2, children: [
      /* @__PURE__ */ u.jsx(_l, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(Fl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(Lr, { sx: { mb: 0.5 }, children: "S3 BUCKETS" }),
        /* @__PURE__ */ u.jsxs(ke, { variant: "h6", sx: { fontWeight: 700, mb: 0.5 }, children: [
          c.length,
          " ",
          c.length === 1 ? "Bucket" : "Buckets"
        ] }),
        /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary" }, children: "Total isolated buckets" })
      ] }) }),
      /* @__PURE__ */ u.jsx(_l, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(Fl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(Lr, { sx: { mb: 0.5 }, children: "TOTAL OBJECTS" }),
        /* @__PURE__ */ u.jsxs(ke, { variant: "h6", sx: { fontWeight: 700, mb: 0.5 }, children: [
          (f == null ? void 0 : f.total_objects) ?? c.reduce((B, ve) => B + (ve.object_count || 0), 0),
          " Files"
        ] }),
        /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary" }, children: "Stored across all S3 buckets" })
      ] }) }),
      /* @__PURE__ */ u.jsx(_l, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(Fl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(Lr, { sx: { mb: 0.5 }, children: "STORAGE USED" }),
        /* @__PURE__ */ u.jsx(ke, { variant: "h6", sx: { fontWeight: 700, fontFamily: ct, mb: 0.5 }, children: (f == null ? void 0 : f.total_size_formatted) ?? "0 B" }),
        /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary" }, children: "Under /opt/hostpanel/data/storage" })
      ] }) }),
      /* @__PURE__ */ u.jsx(_l, { sx: { flex: 1, minWidth: 200, bgcolor: "background.paper" }, children: /* @__PURE__ */ u.jsxs(Fl, { sx: { p: 2, "&:last-child": { pb: 2 } }, children: [
        /* @__PURE__ */ u.jsx(Lr, { sx: { mb: 0.5 }, children: "S3 SERVICE STATUS" }),
        /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center", mb: 0.5 }, children: [
          /* @__PURE__ */ u.jsx(ty, { ok: !0, size: 10 }),
          /* @__PURE__ */ u.jsxs(ke, { variant: "h6", sx: { fontWeight: 700, fontFamily: ct }, children: [
            "Port ",
            (S == null ? void 0 : S.s3_port) ?? 9e3
          ] })
        ] }),
        /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary" }, children: "AWS SigV4 REST API Ready" })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsxs(Vt, { sx: { overflow: "hidden" }, children: [
      /* @__PURE__ */ u.jsx(et, { sx: { borderBottom: 1, borderColor: "divider", px: 2, pt: 1 }, children: /* @__PURE__ */ u.jsxs(
        Qg,
        {
          value: t,
          onChange: (B, ve) => n(ve),
          variant: "scrollable",
          scrollButtons: "auto",
          children: [
            /* @__PURE__ */ u.jsx(
              Jn,
              {
                icon: /* @__PURE__ */ u.jsx(td, { fontSize: "small" }),
                iconPosition: "start",
                label: `S3 Buckets (${c.length})`
              }
            ),
            /* @__PURE__ */ u.jsx(
              Jn,
              {
                icon: /* @__PURE__ */ u.jsx(Zg, { fontSize: "small" }),
                iconPosition: "start",
                label: y ? `Browser (${y})` : "Object Browser"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Jn,
              {
                icon: /* @__PURE__ */ u.jsx(Jg, { fontSize: "small" }),
                iconPosition: "start",
                label: `Access Keys (${p.length})`
              }
            ),
            /* @__PURE__ */ u.jsx(
              Jn,
              {
                icon: /* @__PURE__ */ u.jsx(r$, { fontSize: "small" }),
                iconPosition: "start",
                label: "Connection Guide"
              }
            ),
            /* @__PURE__ */ u.jsx(
              Jn,
              {
                icon: /* @__PURE__ */ u.jsx(n$, { fontSize: "small" }),
                iconPosition: "start",
                label: "Settings & Service"
              }
            )
          ]
        }
      ) }),
      t === 0 && /* @__PURE__ */ u.jsxs(et, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(
          st,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ u.jsx(
                Zo,
                {
                  size: "small",
                  placeholder: "Search buckets by name...",
                  value: x,
                  onChange: (B) => m(B.target.value),
                  sx: { width: { xs: "100%", sm: 320 } },
                  slotProps: {
                    input: {
                      startAdornment: /* @__PURE__ */ u.jsx(dI, { position: "start", children: /* @__PURE__ */ u.jsx(i$, { fontSize: "small" }) })
                    }
                  }
                }
              ),
              /* @__PURE__ */ u.jsx(
                Je,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ u.jsx(is, {}),
                  onClick: () => $(!0),
                  children: "New S3 Bucket"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(qu, { children: /* @__PURE__ */ u.jsxs(Xu, { size: "small", children: [
          /* @__PURE__ */ u.jsx(Zu, { children: /* @__PURE__ */ u.jsxs(gr, { children: [
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Bucket Name" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Access Policy" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Storage Quota & Usage" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Objects" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "S3 URI" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Created" }),
            /* @__PURE__ */ u.jsx(we, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Qu, { children: dn.length === 0 ? /* @__PURE__ */ u.jsx(gr, { children: /* @__PURE__ */ u.jsxs(we, { colSpan: 7, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No S3 buckets created yet." }),
            /* @__PURE__ */ u.jsx(
              Je,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(is, {}),
                onClick: () => $(!0),
                children: "Create First Bucket"
              }
            )
          ] }) }) : dn.map((B) => {
            const ve = B.quota_mb * 1024 * 1024, Ne = Math.min(100, Math.round(B.used_bytes / (ve || 1) * 100));
            return /* @__PURE__ */ u.jsxs(gr, { hover: !0, children: [
              /* @__PURE__ */ u.jsx(we, { children: /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ u.jsx(td, { fontSize: "small", sx: { color: "primary.main" } }),
                /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { fontWeight: 600, fontFamily: ct }, children: B.name })
              ] }) }),
              /* @__PURE__ */ u.jsx(we, { children: /* @__PURE__ */ u.jsx(
                Ar,
                {
                  icon: B.public_access ? /* @__PURE__ */ u.jsx(t$, { fontSize: "small" }) : /* @__PURE__ */ u.jsx(e$, { fontSize: "small" }),
                  label: B.public_access ? "Public Read" : "Private",
                  size: "small",
                  color: B.public_access ? "warning" : "default",
                  sx: { fontWeight: 600, fontSize: "0.6875rem" }
                }
              ) }),
              /* @__PURE__ */ u.jsxs(we, { sx: { minWidth: 160 }, children: [
                /* @__PURE__ */ u.jsxs(et, { sx: { display: "flex", justifyContent: "space-between", mb: 0.5 }, children: [
                  /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { fontFamily: ct }, children: B.used_formatted || "0 B" }),
                  /* @__PURE__ */ u.jsxs(ke, { variant: "caption", sx: { color: "text.secondary", fontFamily: ct }, children: [
                    B.quota_mb,
                    " MB (",
                    Ne,
                    "%)"
                  ] })
                ] }),
                /* @__PURE__ */ u.jsx(
                  kI,
                  {
                    variant: "determinate",
                    value: Ne,
                    color: Ne > 90 ? "error" : Ne > 75 ? "warning" : "primary",
                    sx: { height: 4, borderRadius: 2 }
                  }
                )
              ] }),
              /* @__PURE__ */ u.jsx(we, { sx: { fontFamily: ct }, children: B.object_count ?? 0 }),
              /* @__PURE__ */ u.jsxs(we, { sx: { fontFamily: ct, fontSize: "0.75rem", color: "text.secondary" }, children: [
                "s3://",
                B.name
              ] }),
              /* @__PURE__ */ u.jsx(we, { sx: { fontSize: "0.8125rem" }, children: nd(B.created_at) }),
              /* @__PURE__ */ u.jsx(we, { align: "right", children: /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
                /* @__PURE__ */ u.jsx(
                  Je,
                  {
                    size: "small",
                    variant: "outlined",
                    onClick: () => He(B.name),
                    children: "Browse"
                  }
                ),
                /* @__PURE__ */ u.jsx(os, { title: "Delete bucket", children: /* @__PURE__ */ u.jsx(
                  yr,
                  {
                    size: "small",
                    color: "error",
                    onClick: () => q(B),
                    children: /* @__PURE__ */ u.jsx(ed, { fontSize: "small" })
                  }
                ) })
              ] }) })
            ] }, B.name);
          }) })
        ] }) })
      ] }),
      t === 1 && /* @__PURE__ */ u.jsxs(et, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(
          st,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1.5, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ u.jsxs(da, { size: "small", sx: { minWidth: 200 }, children: [
                  /* @__PURE__ */ u.jsx(fa, { children: "Bucket" }),
                  /* @__PURE__ */ u.jsx(
                    Ps,
                    {
                      value: y || "",
                      label: "Bucket",
                      onChange: (B) => {
                        w(B.target.value), k("");
                      },
                      children: c.map((B) => /* @__PURE__ */ u.jsx(mo, { value: B.name, children: B.name }, B.name))
                    }
                  )
                ] }),
                T && /* @__PURE__ */ u.jsx(
                  Je,
                  {
                    size: "small",
                    variant: "outlined",
                    startIcon: /* @__PURE__ */ u.jsx(o$, {}),
                    onClick: () => {
                      const B = T.replace(/\/$/, "").split("/");
                      B.pop(), k(B.length > 0 ? B.join("/") + "/" : "");
                    },
                    children: "Up"
                  }
                ),
                /* @__PURE__ */ u.jsxs(ke, { variant: "body2", sx: { fontFamily: ct, fontWeight: 600 }, children: [
                  "s3://",
                  y,
                  "/",
                  T
                ] })
              ] }),
              /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
                /* @__PURE__ */ u.jsx(
                  "input",
                  {
                    type: "file",
                    ref: I,
                    style: { display: "none" },
                    onChange: bt
                  }
                ),
                /* @__PURE__ */ u.jsx(
                  Je,
                  {
                    variant: "contained",
                    size: "small",
                    startIcon: /* @__PURE__ */ u.jsx(qg, {}),
                    disabled: !y || M,
                    onClick: () => {
                      var B;
                      return (B = I.current) == null ? void 0 : B.click();
                    },
                    children: M ? "Uploading..." : "Upload Object"
                  }
                )
              ] })
            ]
          }
        ),
        y ? O ? /* @__PURE__ */ u.jsx(et, { sx: { py: 8, textAlign: "center" }, children: /* @__PURE__ */ u.jsx(Vp, { size: 32 }) }) : /* @__PURE__ */ u.jsx(qu, { children: /* @__PURE__ */ u.jsxs(Xu, { size: "small", children: [
          /* @__PURE__ */ u.jsx(Zu, { children: /* @__PURE__ */ u.jsxs(gr, { children: [
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Name" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Size" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Type" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Access" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Last Modified" }),
            /* @__PURE__ */ u.jsx(we, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Qu, { children: R.length === 0 ? /* @__PURE__ */ u.jsx(gr, { children: /* @__PURE__ */ u.jsxs(we, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "This bucket prefix is empty." }),
            /* @__PURE__ */ u.jsx(
              Je,
              {
                size: "small",
                variant: "outlined",
                startIcon: /* @__PURE__ */ u.jsx(qg, {}),
                onClick: () => {
                  var B;
                  return (B = I.current) == null ? void 0 : B.click();
                },
                children: "Upload Object Here"
              }
            )
          ] }) }) : R.map((B) => /* @__PURE__ */ u.jsxs(gr, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(we, { children: /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              B.is_dir ? /* @__PURE__ */ u.jsx(td, { fontSize: "small", sx: { color: "warning.main" } }) : /* @__PURE__ */ u.jsx(ZM, { fontSize: "small", sx: { color: "primary.main" } }),
              B.is_dir ? /* @__PURE__ */ u.jsx(
                Je,
                {
                  size: "small",
                  sx: { textTransform: "none", fontFamily: ct, fontWeight: 600 },
                  onClick: () => k(B.key),
                  children: B.name
                }
              ) : /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { fontFamily: ct }, children: B.name })
            ] }) }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontFamily: ct }, children: B.size_formatted }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontSize: "0.75rem", color: "text.secondary" }, children: B.content_type }),
            /* @__PURE__ */ u.jsx(we, { children: !B.is_dir && /* @__PURE__ */ u.jsx(
              Ar,
              {
                label: B.is_public ? "Public" : "Private",
                size: "small",
                color: B.is_public ? "warning" : "default",
                onClick: () => be(B),
                sx: { cursor: "pointer", fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontSize: "0.8125rem" }, children: nd(B.last_modified) }),
            /* @__PURE__ */ u.jsx(we, { align: "right", children: !B.is_dir && /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ u.jsx(os, { title: "Download", children: /* @__PURE__ */ u.jsx(
                yr,
                {
                  size: "small",
                  onClick: () => {
                    window.open(
                      `/api/packages/storage/buckets/${y}/objects/download?key=${encodeURIComponent(B.key)}`,
                      "_blank"
                    );
                  },
                  children: /* @__PURE__ */ u.jsx(qM, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(os, { title: "Share Presigned Link", children: /* @__PURE__ */ u.jsx(
                yr,
                {
                  size: "small",
                  color: "primary",
                  onClick: () => {
                    Ae({ bucket: y, key: B.key }), pe(null);
                  },
                  children: /* @__PURE__ */ u.jsx(JM, { fontSize: "small" })
                }
              ) }),
              /* @__PURE__ */ u.jsx(os, { title: "Delete", children: /* @__PURE__ */ u.jsx(
                yr,
                {
                  size: "small",
                  color: "error",
                  onClick: () => Qe(B.key),
                  children: /* @__PURE__ */ u.jsx(ed, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, B.key)) })
        ] }) }) : /* @__PURE__ */ u.jsxs(et, { sx: { py: 8, textAlign: "center" }, children: [
          /* @__PURE__ */ u.jsx(Zg, { sx: { fontSize: 48, color: "text.disabled", mb: 1 } }),
          /* @__PURE__ */ u.jsx(ke, { variant: "body1", sx: { color: "text.secondary" }, children: 'Select a bucket from the dropdown or click "Browse" on the Buckets tab.' })
        ] })
      ] }),
      t === 2 && /* @__PURE__ */ u.jsxs(et, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(
          st,
          {
            direction: { xs: "column", sm: "row" },
            spacing: 2,
            sx: { mb: 2, justifyContent: "space-between", alignItems: "center" },
            children: [
              /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { color: "text.secondary" }, children: "Access Key IDs and Secret Access Keys for AWS CLI, Boto3, and S3-compatible clients." }),
              /* @__PURE__ */ u.jsx(
                Je,
                {
                  variant: "contained",
                  size: "small",
                  startIcon: /* @__PURE__ */ u.jsx(is, {}),
                  onClick: () => {
                    Te(null), H(!0);
                  },
                  children: "Create Access Key"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ u.jsx(qu, { children: /* @__PURE__ */ u.jsxs(Xu, { size: "small", children: [
          /* @__PURE__ */ u.jsx(Zu, { children: /* @__PURE__ */ u.jsxs(gr, { children: [
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Access Key ID" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Label" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Scope / Bucket" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Status" }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontWeight: 600 }, children: "Created" }),
            /* @__PURE__ */ u.jsx(we, { align: "right", sx: { fontWeight: 600 }, children: "Actions" })
          ] }) }),
          /* @__PURE__ */ u.jsx(Qu, { children: p.length === 0 ? /* @__PURE__ */ u.jsx(gr, { children: /* @__PURE__ */ u.jsxs(we, { colSpan: 6, align: "center", sx: { py: 6 }, children: [
            /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "No S3 access keys created yet." }),
            /* @__PURE__ */ u.jsx(
              Je,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ u.jsx(is, {}),
                onClick: () => H(!0),
                children: "Generate First Key Pair"
              }
            )
          ] }) }) : p.map((B) => /* @__PURE__ */ u.jsxs(gr, { hover: !0, children: [
            /* @__PURE__ */ u.jsx(we, { children: /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { fontFamily: ct, fontWeight: 600 }, children: B.access_key }),
              /* @__PURE__ */ u.jsx(
                yr,
                {
                  size: "small",
                  onClick: () => Gn(B.access_key),
                  children: /* @__PURE__ */ u.jsx(Yl, { fontSize: "inherit" })
                }
              )
            ] }) }),
            /* @__PURE__ */ u.jsx(we, { children: B.label || "—" }),
            /* @__PURE__ */ u.jsx(we, { children: B.bucket_name ? /* @__PURE__ */ u.jsx(Ar, { label: B.bucket_name, size: "small", variant: "outlined" }) : /* @__PURE__ */ u.jsx(Ar, { label: "All Buckets", size: "small", color: "primary", variant: "outlined" }) }),
            /* @__PURE__ */ u.jsx(we, { children: /* @__PURE__ */ u.jsx(
              Ar,
              {
                label: B.status === "active" ? "Active" : "Disabled",
                size: "small",
                color: B.status === "active" ? "success" : "default",
                sx: { fontWeight: 600, fontSize: "0.6875rem" }
              }
            ) }),
            /* @__PURE__ */ u.jsx(we, { sx: { fontSize: "0.8125rem" }, children: nd(B.created_at) }),
            /* @__PURE__ */ u.jsx(we, { align: "right", children: /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 0.5, sx: { justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ u.jsx(
                Je,
                {
                  size: "small",
                  variant: "outlined",
                  color: B.status === "active" ? "warning" : "success",
                  onClick: () => Ce(B),
                  children: B.status === "active" ? "Disable" : "Enable"
                }
              ),
              /* @__PURE__ */ u.jsx(os, { title: "Delete key", children: /* @__PURE__ */ u.jsx(
                yr,
                {
                  size: "small",
                  color: "error",
                  onClick: () => ge(B),
                  children: /* @__PURE__ */ u.jsx(ed, { fontSize: "small" })
                }
              ) })
            ] }) })
          ] }, B.access_key)) })
        ] }) })
      ] }),
      t === 3 && /* @__PURE__ */ u.jsxs(et, { sx: { p: 2 }, children: [
        /* @__PURE__ */ u.jsxs(et, { sx: { mb: 2 }, children: [
          /* @__PURE__ */ u.jsx(ke, { variant: "subtitle2", sx: { fontWeight: 700, mb: 0.5 }, children: "S3 Client Integration Details:" }),
          /* @__PURE__ */ u.jsxs(Vt, { variant: "outlined", sx: { p: 1.5, bgcolor: "background.default", fontFamily: ct, fontSize: "0.8125rem" }, children: [
            /* @__PURE__ */ u.jsxs(et, { children: [
              "Endpoint URL: ",
              /* @__PURE__ */ u.jsx("strong", { children: (S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000" })
            ] }),
            /* @__PURE__ */ u.jsxs(et, { children: [
              "Region: ",
              /* @__PURE__ */ u.jsx("strong", { children: "us-east-1" })
            ] }),
            /* @__PURE__ */ u.jsxs(et, { children: [
              "Protocol: ",
              /* @__PURE__ */ u.jsx("strong", { children: "HTTP / AWS SigV4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u.jsxs(
          Qg,
          {
            value: Oe,
            onChange: (B, ve) => Ue(ve),
            sx: { borderBottom: 1, borderColor: "divider", mb: 2 },
            children: [
              /* @__PURE__ */ u.jsx(Jn, { label: "AWS CLI" }),
              /* @__PURE__ */ u.jsx(Jn, { label: "Python (boto3)" }),
              /* @__PURE__ */ u.jsx(Jn, { label: "Node.js (AWS SDK v3)" }),
              /* @__PURE__ */ u.jsx(Jn, { label: "PHP / Laravel" }),
              /* @__PURE__ */ u.jsx(Jn, { label: "Cyberduck / Rclone" })
            ]
          }
        ),
        Oe === 0 && /* @__PURE__ */ u.jsxs(et, { children: [
          /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: "Configure your AWS CLI to talk to this HostPanel S3 storage instance:" }),
          /* @__PURE__ */ u.jsx(Vt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: ct, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ u.jsx("pre", { style: { margin: 0 }, children: `# 1. Configure credentials
aws configure set aws_access_key_id YOUR_ACCESS_KEY
aws configure set aws_secret_access_key YOUR_SECRET_KEY
aws configure set default.region us-east-1

# 2. List buckets
aws --endpoint-url ${(S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000"} s3 ls

# 3. Copy files to bucket
aws --endpoint-url ${(S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000"} s3 cp ./file.txt s3://${((fr = c[0]) == null ? void 0 : fr.name) ?? "my-bucket"}/` }) })
        ] }),
        Oe === 1 && /* @__PURE__ */ u.jsxs(et, { children: [
          /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: "Use Python's boto3 library to connect to HostPanel S3:" }),
          /* @__PURE__ */ u.jsx(Vt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: ct, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ u.jsx("pre", { style: { margin: 0 }, children: `import boto3

s3 = boto3.client(
    "s3",
    endpoint_url="${(S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000"}",
    aws_access_key_id="YOUR_ACCESS_KEY",
    aws_secret_access_key="YOUR_SECRET_KEY",
    region_name="us-east-1",
)

# Upload file
s3.upload_file("photo.jpg", "${((me = c[0]) == null ? void 0 : me.name) ?? "my-bucket"}", "uploads/photo.jpg")

# List objects
response = s3.list_objects_v2(Bucket="${((Ve = c[0]) == null ? void 0 : Ve.name) ?? "my-bucket"}")
for item in response.get("Contents", []):
    print(item["Key"], item["Size"])` }) })
        ] }),
        Oe === 2 && /* @__PURE__ */ u.jsxs(et, { children: [
          /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: "Connect using @aws-sdk/client-s3 for Node.js / TypeScript:" }),
          /* @__PURE__ */ u.jsx(Vt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: ct, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ u.jsx("pre", { style: { margin: 0 }, children: `import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  endpoint: "${(S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000"}",
  region: "us-east-1",
  credentials: {
    accessKeyId: "YOUR_ACCESS_KEY",
    secretAccessKey: "YOUR_SECRET_KEY",
  },
  forcePathStyle: true,
});

// List bucket contents
const res = await client.send(new ListObjectsV2Command({ Bucket: "${((Dt = c[0]) == null ? void 0 : Dt.name) ?? "my-bucket"}" }));
console.log(res.Contents);` }) })
        ] }),
        Oe === 3 && /* @__PURE__ */ u.jsxs(et, { children: [
          /* @__PURE__ */ u.jsxs(ke, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: [
            "Add this disk configuration in Laravel ",
            /* @__PURE__ */ u.jsx("code", { children: "config/filesystems.php" }),
            ":"
          ] }),
          /* @__PURE__ */ u.jsx(Vt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: ct, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ u.jsx("pre", { style: { margin: 0 }, children: `'hostpanel_s3' => [
    'driver' => 's3',
    'key' => env('AWS_ACCESS_KEY_ID'),
    'secret' => env('AWS_SECRET_ACCESS_KEY'),
    'region' => 'us-east-1',
    'bucket' => '${((Fi = c[0]) == null ? void 0 : Fi.name) ?? "my-bucket"}',
    'endpoint' => '${(S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000"}',
    'use_path_style_endpoint' => true,
    'throw' => true,
],` }) })
        ] }),
        Oe === 4 && /* @__PURE__ */ u.jsxs(et, { children: [
          /* @__PURE__ */ u.jsxs(ke, { variant: "caption", sx: { color: "text.secondary", display: "block", mb: 1 }, children: [
            "Rclone configuration snippet (",
            /* @__PURE__ */ u.jsx("code", { children: "~/.config/rclone/rclone.conf" }),
            "):"
          ] }),
          /* @__PURE__ */ u.jsx(Vt, { sx: { p: 2, bgcolor: "#0d1117", color: "#c9d1d9", fontFamily: ct, fontSize: "0.8125rem", overflowX: "auto" }, children: /* @__PURE__ */ u.jsx("pre", { style: { margin: 0 }, children: `[hostpanel-s3]
type = s3
provider = Other
env_auth = false
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
endpoint = ${(S == null ? void 0 : S.s3_endpoint) ?? "http://<server-ip>:9000"}
acl = private` }) })
        ] })
      ] }),
      t === 4 && /* @__PURE__ */ u.jsx(et, { sx: { p: 2 }, children: /* @__PURE__ */ u.jsxs(st, { spacing: 3, sx: { maxWidth: 640 }, children: [
        /* @__PURE__ */ u.jsx(ey, { label: "S3 Protocol Server Configuration", children: /* @__PURE__ */ u.jsxs(st, { spacing: 2, children: [
          /* @__PURE__ */ u.jsx(
            Zo,
            {
              size: "small",
              label: "S3 REST Port",
              value: (S == null ? void 0 : S.s3_port) ?? 9e3,
              helperText: "Standard port for incoming AWS S3 REST API calls (Default: 9000)",
              disabled: !0
            }
          ),
          /* @__PURE__ */ u.jsx(
            Zo,
            {
              size: "small",
              label: "Data Storage Root Path",
              value: (S == null ? void 0 : S.storage_root) ?? "/opt/hostpanel/data/storage/buckets",
              helperText: "Enforces 100% HostPanel isolation under /opt/hostpanel",
              disabled: !0
            }
          )
        ] }) }),
        /* @__PURE__ */ u.jsxs(ey, { label: "System Isolation & Architecture", children: [
          /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { color: "text.secondary", mb: 1 }, children: "HostPanel Object Storage is 100% self-contained. All buckets and metadata are stored exclusively within:" }),
          /* @__PURE__ */ u.jsxs(et, { component: "ul", sx: { pl: 2, m: 0, fontSize: "0.8125rem", fontFamily: ct }, children: [
            /* @__PURE__ */ u.jsx("li", { children: "Buckets Directory: /opt/hostpanel/data/storage/buckets/" }),
            /* @__PURE__ */ u.jsx("li", { children: "SQLite Database: /opt/hostpanel/data/hostpanel.db" }),
            /* @__PURE__ */ u.jsx("li", { children: "Daemon Service: hostpanel-storaged.service (hp-storage)" }),
            /* @__PURE__ */ u.jsxs("li", { children: [
              "S3 Protocol: AWS SigV4 Native on port ",
              (S == null ? void 0 : S.s3_port) ?? 9e3
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsxs(Go, { open: P, onClose: () => $(!1), maxWidth: "xs", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(qo, { children: "Create S3 Bucket" }),
      /* @__PURE__ */ u.jsx(Qo, { children: /* @__PURE__ */ u.jsxs(st, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsx(
          Zo,
          {
            size: "small",
            label: "Bucket Name",
            placeholder: "e.g. static-assets",
            value: A,
            onChange: (B) => N(B.target.value.toLowerCase().replace(/[^a-z0-9.-]/g, "")),
            helperText: "Only lowercase letters, numbers, hyphens, and periods.",
            fullWidth: !0
          }
        ),
        /* @__PURE__ */ u.jsx(
          Zo,
          {
            size: "small",
            type: "number",
            label: "Storage Quota (MB)",
            value: j,
            onChange: (B) => z(Number(B.target.value)),
            helperText: "Maximum allowed storage size for this bucket (e.g. 5120 MB = 5 GB)",
            fullWidth: !0
          }
        ),
        /* @__PURE__ */ u.jsx(
          KP,
          {
            control: /* @__PURE__ */ u.jsx(
              rM,
              {
                checked: F,
                onChange: (B) => V(B.target.checked)
              }
            ),
            label: /* @__PURE__ */ u.jsxs(et, { children: [
              /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { fontWeight: 600 }, children: "Public Read Access" }),
              /* @__PURE__ */ u.jsx(ke, { variant: "caption", sx: { color: "text.secondary" }, children: "Allow anonymous read access without AWS signature." })
            ] })
          }
        )
      ] }) }),
      /* @__PURE__ */ u.jsxs(Xo, { children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => $(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Je, { variant: "contained", onClick: De, disabled: !A.trim(), children: "Create Bucket" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Go, { open: !!D, onClose: () => q(null), children: [
      /* @__PURE__ */ u.jsx(qo, { children: "Delete S3 Bucket" }),
      /* @__PURE__ */ u.jsx(Qo, { children: /* @__PURE__ */ u.jsxs(Gu, { children: [
        "Are you sure you want to delete bucket ",
        /* @__PURE__ */ u.jsx("strong", { children: D == null ? void 0 : D.name }),
        "? This will permanently remove all stored files and records inside this bucket!"
      ] }) }),
      /* @__PURE__ */ u.jsxs(Xo, { children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => q(null), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Je, { color: "error", variant: "contained", onClick: Se, children: "Delete Bucket" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Go, { open: Y, onClose: () => H(!1), maxWidth: "sm", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(qo, { children: "Create S3 Access Key" }),
      /* @__PURE__ */ u.jsx(Qo, { children: oe ? /* @__PURE__ */ u.jsxs(st, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsxs(ug, { severity: "warning", children: [
          "Save your ",
          /* @__PURE__ */ u.jsx("strong", { children: "Secret Access Key" }),
          " now! For security reasons, it cannot be retrieved again after this dialog is closed."
        ] }),
        /* @__PURE__ */ u.jsxs(Vt, { variant: "outlined", sx: { p: 2, bgcolor: "background.default" }, children: [
          /* @__PURE__ */ u.jsxs(et, { sx: { mb: 1.5 }, children: [
            /* @__PURE__ */ u.jsx(Lr, { children: "ACCESS KEY ID" }),
            /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(ke, { variant: "body1", sx: { fontFamily: ct, fontWeight: 700 }, children: oe.id }),
              /* @__PURE__ */ u.jsx(yr, { size: "small", onClick: () => Gn(oe.id), children: /* @__PURE__ */ u.jsx(Yl, { fontSize: "small" }) })
            ] })
          ] }),
          /* @__PURE__ */ u.jsxs(et, { children: [
            /* @__PURE__ */ u.jsx(Lr, { children: "SECRET ACCESS KEY" }),
            /* @__PURE__ */ u.jsxs(st, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
              /* @__PURE__ */ u.jsx(ke, { variant: "body1", sx: { fontFamily: ct, fontWeight: 700, wordBreak: "break-all" }, children: oe.secret }),
              /* @__PURE__ */ u.jsx(yr, { size: "small", onClick: () => Gn(oe.secret), children: /* @__PURE__ */ u.jsx(Yl, { fontSize: "small" }) })
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ u.jsxs(st, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsx(
          Zo,
          {
            size: "small",
            label: "Key Label / Description",
            placeholder: "e.g. WordPress Uploads, Nextcloud Key",
            value: K,
            onChange: (B) => X(B.target.value),
            fullWidth: !0
          }
        ),
        /* @__PURE__ */ u.jsxs(da, { size: "small", fullWidth: !0, children: [
          /* @__PURE__ */ u.jsx(fa, { children: "Bucket Scope" }),
          /* @__PURE__ */ u.jsxs(
            Ps,
            {
              value: W,
              label: "Bucket Scope",
              onChange: (B) => re(B.target.value),
              children: [
                /* @__PURE__ */ u.jsx(mo, { value: "", children: /* @__PURE__ */ u.jsx("em", { children: "All Buckets (Global S3 Access)" }) }),
                c.map((B) => /* @__PURE__ */ u.jsx(mo, { value: B.id, children: B.name }, B.id))
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsx(Xo, { children: oe ? /* @__PURE__ */ u.jsx(Je, { variant: "contained", onClick: () => H(!1), children: "Done & Closed" }) : /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => H(!1), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Je, { variant: "contained", onClick: dt, children: "Generate Key Pair" })
      ] }) })
    ] }),
    /* @__PURE__ */ u.jsxs(Go, { open: !!ye, onClose: () => ge(null), children: [
      /* @__PURE__ */ u.jsx(qo, { children: "Revoke Access Key" }),
      /* @__PURE__ */ u.jsx(Qo, { children: /* @__PURE__ */ u.jsxs(Gu, { children: [
        "Are you sure you want to revoke S3 access key ",
        /* @__PURE__ */ u.jsx("strong", { children: ye == null ? void 0 : ye.access_key }),
        "? Any applications currently using this key will immediately lose access."
      ] }) }),
      /* @__PURE__ */ u.jsxs(Xo, { children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => ge(null), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Je, { color: "error", variant: "contained", onClick: Yn, children: "Revoke Key" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Go, { open: !!se, onClose: () => Ae(null), maxWidth: "sm", fullWidth: !0, children: [
      /* @__PURE__ */ u.jsx(qo, { children: "Share Presigned Download URL" }),
      /* @__PURE__ */ u.jsx(Qo, { children: /* @__PURE__ */ u.jsxs(st, { spacing: 2, sx: { mt: 1 }, children: [
        /* @__PURE__ */ u.jsxs(ke, { variant: "body2", children: [
          "Generate a time-limited shareable download link for:",
          /* @__PURE__ */ u.jsx("br", {}),
          /* @__PURE__ */ u.jsx("strong", { style: { fontFamily: ct }, children: se == null ? void 0 : se.key })
        ] }),
        /* @__PURE__ */ u.jsxs(da, { size: "small", fullWidth: !0, children: [
          /* @__PURE__ */ u.jsx(fa, { children: "Expiration Duration" }),
          /* @__PURE__ */ u.jsxs(
            Ps,
            {
              value: Fe,
              label: "Expiration Duration",
              onChange: (B) => $e(Number(B.target.value)),
              children: [
                /* @__PURE__ */ u.jsx(mo, { value: 3600, children: "1 Hour" }),
                /* @__PURE__ */ u.jsx(mo, { value: 86400, children: "24 Hours (1 Day)" }),
                /* @__PURE__ */ u.jsx(mo, { value: 604800, children: "7 Days" }),
                /* @__PURE__ */ u.jsx(mo, { value: 0, children: "Never Expire (Permanent)" })
              ]
            }
          )
        ] }),
        je && /* @__PURE__ */ u.jsxs(et, { children: [
          /* @__PURE__ */ u.jsx(Lr, { sx: { mb: 0.5 }, children: "PRESIGNED URL" }),
          /* @__PURE__ */ u.jsx(Vt, { variant: "outlined", sx: { p: 1.5, bgcolor: "background.default" }, children: /* @__PURE__ */ u.jsx(ke, { variant: "body2", sx: { fontFamily: ct, fontSize: "0.75rem", wordBreak: "break-all" }, children: je }) }),
          /* @__PURE__ */ u.jsx(
            Je,
            {
              size: "small",
              variant: "outlined",
              startIcon: /* @__PURE__ */ u.jsx(Yl, {}),
              onClick: () => Gn(je),
              sx: { mt: 1 },
              children: "Copy URL"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ u.jsxs(Xo, { children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => Ae(null), children: "Close" }),
        !je && /* @__PURE__ */ u.jsx(Je, { variant: "contained", onClick: Be, children: "Generate Link" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsxs(Go, { open: !!Re, onClose: () => Qe(null), children: [
      /* @__PURE__ */ u.jsx(qo, { children: "Delete Object" }),
      /* @__PURE__ */ u.jsx(Qo, { children: /* @__PURE__ */ u.jsxs(Gu, { children: [
        "Are you sure you want to delete object ",
        /* @__PURE__ */ u.jsx("strong", { children: Re }),
        " from ",
        y,
        "?"
      ] }) }),
      /* @__PURE__ */ u.jsxs(Xo, { children: [
        /* @__PURE__ */ u.jsx(Je, { onClick: () => Qe(null), children: "Cancel" }),
        /* @__PURE__ */ u.jsx(Je, { color: "error", variant: "contained", onClick: ie, children: "Delete Object" })
      ] })
    ] }),
    /* @__PURE__ */ u.jsx(
      H5,
      {
        open: !!l,
        autoHideDuration: 3e3,
        onClose: () => a(null),
        message: l
      }
    )
  ] });
}
let Za = null;
function a$(e, t) {
  Za = g0(e), Za.render(
    /* @__PURE__ */ u.jsx(h.StrictMode, { children: /* @__PURE__ */ u.jsx(s$, { ctx: t }) })
  );
}
function c$() {
  const e = Za;
  Za = null, e && queueMicrotask(() => e.unmount());
}
const d$ = { mount: a$, unmount: c$ };
export {
  d$ as default,
  a$ as mount,
  c$ as unmount
};
//# sourceMappingURL=main.js.map
