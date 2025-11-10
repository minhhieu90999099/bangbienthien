(function() {
    const N = document.createElement("link").relList;
    if (N && N.supports && N.supports("modulepreload"))
        return;
    for (const G of document.querySelectorAll('link[rel="modulepreload"]'))
        h(G);
    new MutationObserver(G => {
        for (const Z of G)
            if (Z.type === "childList")
                for (const ll of Z.addedNodes)
                    ll.tagName === "LINK" && ll.rel === "modulepreload" && h(ll)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function M(G) {
        const Z = {};
        return G.integrity && (Z.integrity = G.integrity),
        G.referrerPolicy && (Z.referrerPolicy = G.referrerPolicy),
        G.crossOrigin === "use-credentials" ? Z.credentials = "include" : G.crossOrigin === "anonymous" ? Z.credentials = "omit" : Z.credentials = "same-origin",
        Z
    }
    function h(G) {
        if (G.ep)
            return;
        G.ep = !0;
        const Z = M(G);
        fetch(G.href, Z)
    }
}
)();
function U0(v) {
    return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v
}
var of = {
    exports: {}
}
  , Nn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x0;
function am() {
    if (x0)
        return Nn;
    x0 = 1;
    var v = Symbol.for("react.transitional.element")
      , N = Symbol.for("react.fragment");
    function M(h, G, Z) {
        var ll = null;
        if (Z !== void 0 && (ll = "" + Z),
        G.key !== void 0 && (ll = "" + G.key),
        "key"in G) {
            Z = {};
            for (var il in G)
                il !== "key" && (Z[il] = G[il])
        } else
            Z = G;
        return G = Z.ref,
        {
            $$typeof: v,
            type: h,
            key: ll,
            ref: G !== void 0 ? G : null,
            props: Z
        }
    }
    return Nn.Fragment = N,
    Nn.jsx = M,
    Nn.jsxs = M,
    Nn
}
var p0;
function nm() {
    return p0 || (p0 = 1,
    of.exports = am()),
    of.exports
}
var f = nm()
  , rf = {
    exports: {}
}
  , K = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S0;
function um() {
    if (S0)
        return K;
    S0 = 1;
    var v = Symbol.for("react.transitional.element")
      , N = Symbol.for("react.portal")
      , M = Symbol.for("react.fragment")
      , h = Symbol.for("react.strict_mode")
      , G = Symbol.for("react.profiler")
      , Z = Symbol.for("react.consumer")
      , ll = Symbol.for("react.context")
      , il = Symbol.for("react.forward_ref")
      , O = Symbol.for("react.suspense")
      , z = Symbol.for("react.memo")
      , V = Symbol.for("react.lazy")
      , q = Symbol.for("react.activity")
      , W = Symbol.iterator;
    function Hl(r) {
        return r === null || typeof r != "object" ? null : (r = W && r[W] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var Al = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Ml = Object.assign
      , Pl = {};
    function El(r, E, A) {
        this.props = r,
        this.context = E,
        this.refs = Pl,
        this.updater = A || Al
    }
    El.prototype.isReactComponent = {},
    El.prototype.setState = function(r, E) {
        if (typeof r != "object" && typeof r != "function" && r != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, E, "setState")
    }
    ,
    El.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate")
    }
    ;
    function lt() {}
    lt.prototype = El.prototype;
    function U(r, E, A) {
        this.props = r,
        this.context = E,
        this.refs = Pl,
        this.updater = A || Al
    }
    var C = U.prototype = new lt;
    C.constructor = U,
    Ml(C, El.prototype),
    C.isPureReactComponent = !0;
    var P = Array.isArray;
    function L() {}
    var H = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , ul = Object.prototype.hasOwnProperty;
    function xl(r, E, A) {
        var _ = A.ref;
        return {
            $$typeof: v,
            type: r,
            key: E,
            ref: _ !== void 0 ? _ : null,
            props: A
        }
    }
    function Zl(r, E) {
        return xl(r.type, E, r.props)
    }
    function Dl(r) {
        return typeof r == "object" && r !== null && r.$$typeof === v
    }
    function Rl(r) {
        var E = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + r.replace(/[=:]/g, function(A) {
            return E[A]
        })
    }
    var et = /\/+/g;
    function Fl(r, E) {
        return typeof r == "object" && r !== null && r.key != null ? Rl("" + r.key) : E.toString(36)
    }
    function X(r) {
        switch (r.status) {
        case "fulfilled":
            return r.value;
        case "rejected":
            throw r.reason;
        default:
            switch (typeof r.status == "string" ? r.then(L, L) : (r.status = "pending",
            r.then(function(E) {
                r.status === "pending" && (r.status = "fulfilled",
                r.value = E)
            }, function(E) {
                r.status === "pending" && (r.status = "rejected",
                r.reason = E)
            })),
            r.status) {
            case "fulfilled":
                return r.value;
            case "rejected":
                throw r.reason
            }
        }
        throw r
    }
    function x(r, E, A, _, w) {
        var k = typeof r;
        (k === "undefined" || k === "boolean") && (r = null);
        var sl = !1;
        if (r === null)
            sl = !0;
        else
            switch (k) {
            case "bigint":
            case "string":
            case "number":
                sl = !0;
                break;
            case "object":
                switch (r.$$typeof) {
                case v:
                case N:
                    sl = !0;
                    break;
                case V:
                    return sl = r._init,
                    x(sl(r._payload), E, A, _, w)
                }
            }
        if (sl)
            return w = w(r),
            sl = _ === "" ? "." + Fl(r, 0) : _,
            P(w) ? (A = "",
            sl != null && (A = sl.replace(et, "$&/") + "/"),
            x(w, E, A, "", function(Me) {
                return Me
            })) : w != null && (Dl(w) && (w = Zl(w, A + (w.key == null || r && r.key === w.key ? "" : ("" + w.key).replace(et, "$&/") + "/") + sl)),
            E.push(w)),
            1;
        sl = 0;
        var wl = _ === "" ? "." : _ + ":";
        if (P(r))
            for (var Nl = 0; Nl < r.length; Nl++)
                _ = r[Nl],
                k = wl + Fl(_, Nl),
                sl += x(_, E, A, k, w);
        else if (Nl = Hl(r),
        typeof Nl == "function")
            for (r = Nl.call(r),
            Nl = 0; !(_ = r.next()).done; )
                _ = _.value,
                k = wl + Fl(_, Nl++),
                sl += x(_, E, A, k, w);
        else if (k === "object") {
            if (typeof r.then == "function")
                return x(X(r), E, A, _, w);
            throw E = String(r),
            Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.")
        }
        return sl
    }
    function j(r, E, A) {
        if (r == null)
            return r;
        var _ = []
          , w = 0;
        return x(r, _, "", "", function(k) {
            return E.call(A, k, w++)
        }),
        _
    }
    function B(r) {
        if (r._status === -1) {
            var E = r._result;
            E = E(),
            E.then(function(A) {
                (r._status === 0 || r._status === -1) && (r._status = 1,
                r._result = A)
            }, function(A) {
                (r._status === 0 || r._status === -1) && (r._status = 2,
                r._result = A)
            }),
            r._status === -1 && (r._status = 0,
            r._result = E)
        }
        if (r._status === 1)
            return r._result.default;
        throw r._result
    }
    var fl = typeof reportError == "function" ? reportError : function(r) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var E = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
                error: r
            });
            if (!window.dispatchEvent(E))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", r);
            return
        }
        console.error(r)
    }
      , hl = {
        map: j,
        forEach: function(r, E, A) {
            j(r, function() {
                E.apply(this, arguments)
            }, A)
        },
        count: function(r) {
            var E = 0;
            return j(r, function() {
                E++
            }),
            E
        },
        toArray: function(r) {
            return j(r, function(E) {
                return E
            }) || []
        },
        only: function(r) {
            if (!Dl(r))
                throw Error("React.Children.only expected to receive a single React element child.");
            return r
        }
    };
    return K.Activity = q,
    K.Children = hl,
    K.Component = El,
    K.Fragment = M,
    K.Profiler = G,
    K.PureComponent = U,
    K.StrictMode = h,
    K.Suspense = O,
    K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = H,
    K.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(r) {
            return H.H.useMemoCache(r)
        }
    },
    K.cache = function(r) {
        return function() {
            return r.apply(null, arguments)
        }
    }
    ,
    K.cacheSignal = function() {
        return null
    }
    ,
    K.cloneElement = function(r, E, A) {
        if (r == null)
            throw Error("The argument must be a React element, but you passed " + r + ".");
        var _ = Ml({}, r.props)
          , w = r.key;
        if (E != null)
            for (k in E.key !== void 0 && (w = "" + E.key),
            E)
                !ul.call(E, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && E.ref === void 0 || (_[k] = E[k]);
        var k = arguments.length - 2;
        if (k === 1)
            _.children = A;
        else if (1 < k) {
            for (var sl = Array(k), wl = 0; wl < k; wl++)
                sl[wl] = arguments[wl + 2];
            _.children = sl
        }
        return xl(r.type, w, _)
    }
    ,
    K.createContext = function(r) {
        return r = {
            $$typeof: ll,
            _currentValue: r,
            _currentValue2: r,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        r.Provider = r,
        r.Consumer = {
            $$typeof: Z,
            _context: r
        },
        r
    }
    ,
    K.createElement = function(r, E, A) {
        var _, w = {}, k = null;
        if (E != null)
            for (_ in E.key !== void 0 && (k = "" + E.key),
            E)
                ul.call(E, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (w[_] = E[_]);
        var sl = arguments.length - 2;
        if (sl === 1)
            w.children = A;
        else if (1 < sl) {
            for (var wl = Array(sl), Nl = 0; Nl < sl; Nl++)
                wl[Nl] = arguments[Nl + 2];
            w.children = wl
        }
        if (r && r.defaultProps)
            for (_ in sl = r.defaultProps,
            sl)
                w[_] === void 0 && (w[_] = sl[_]);
        return xl(r, k, w)
    }
    ,
    K.createRef = function() {
        return {
            current: null
        }
    }
    ,
    K.forwardRef = function(r) {
        return {
            $$typeof: il,
            render: r
        }
    }
    ,
    K.isValidElement = Dl,
    K.lazy = function(r) {
        return {
            $$typeof: V,
            _payload: {
                _status: -1,
                _result: r
            },
            _init: B
        }
    }
    ,
    K.memo = function(r, E) {
        return {
            $$typeof: z,
            type: r,
            compare: E === void 0 ? null : E
        }
    }
    ,
    K.startTransition = function(r) {
        var E = H.T
          , A = {};
        H.T = A;
        try {
            var _ = r()
              , w = H.S;
            w !== null && w(A, _),
            typeof _ == "object" && _ !== null && typeof _.then == "function" && _.then(L, fl)
        } catch (k) {
            fl(k)
        } finally {
            E !== null && A.types !== null && (E.types = A.types),
            H.T = E
        }
    }
    ,
    K.unstable_useCacheRefresh = function() {
        return H.H.useCacheRefresh()
    }
    ,
    K.use = function(r) {
        return H.H.use(r)
    }
    ,
    K.useActionState = function(r, E, A) {
        return H.H.useActionState(r, E, A)
    }
    ,
    K.useCallback = function(r, E) {
        return H.H.useCallback(r, E)
    }
    ,
    K.useContext = function(r) {
        return H.H.useContext(r)
    }
    ,
    K.useDebugValue = function() {}
    ,
    K.useDeferredValue = function(r, E) {
        return H.H.useDeferredValue(r, E)
    }
    ,
    K.useEffect = function(r, E) {
        return H.H.useEffect(r, E)
    }
    ,
    K.useEffectEvent = function(r) {
        return H.H.useEffectEvent(r)
    }
    ,
    K.useId = function() {
        return H.H.useId()
    }
    ,
    K.useImperativeHandle = function(r, E, A) {
        return H.H.useImperativeHandle(r, E, A)
    }
    ,
    K.useInsertionEffect = function(r, E) {
        return H.H.useInsertionEffect(r, E)
    }
    ,
    K.useLayoutEffect = function(r, E) {
        return H.H.useLayoutEffect(r, E)
    }
    ,
    K.useMemo = function(r, E) {
        return H.H.useMemo(r, E)
    }
    ,
    K.useOptimistic = function(r, E) {
        return H.H.useOptimistic(r, E)
    }
    ,
    K.useReducer = function(r, E, A) {
        return H.H.useReducer(r, E, A)
    }
    ,
    K.useRef = function(r) {
        return H.H.useRef(r)
    }
    ,
    K.useState = function(r) {
        return H.H.useState(r)
    }
    ,
    K.useSyncExternalStore = function(r, E, A) {
        return H.H.useSyncExternalStore(r, E, A)
    }
    ,
    K.useTransition = function() {
        return H.H.useTransition()
    }
    ,
    K.version = "19.2.0",
    K
}
var z0;
function bf() {
    return z0 || (z0 = 1,
    rf.exports = um()),
    rf.exports
}
var I = bf();
const ku = U0(I);
var df = {
    exports: {}
}
  , Mn = {}
  , hf = {
    exports: {}
}
  , mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T0;
function cm() {
    return T0 || (T0 = 1,
    (function(v) {
        function N(x, j) {
            var B = x.length;
            x.push(j);
            l: for (; 0 < B; ) {
                var fl = B - 1 >>> 1
                  , hl = x[fl];
                if (0 < G(hl, j))
                    x[fl] = j,
                    x[B] = hl,
                    B = fl;
                else
                    break l
            }
        }
        function M(x) {
            return x.length === 0 ? null : x[0]
        }
        function h(x) {
            if (x.length === 0)
                return null;
            var j = x[0]
              , B = x.pop();
            if (B !== j) {
                x[0] = B;
                l: for (var fl = 0, hl = x.length, r = hl >>> 1; fl < r; ) {
                    var E = 2 * (fl + 1) - 1
                      , A = x[E]
                      , _ = E + 1
                      , w = x[_];
                    if (0 > G(A, B))
                        _ < hl && 0 > G(w, A) ? (x[fl] = w,
                        x[_] = B,
                        fl = _) : (x[fl] = A,
                        x[E] = B,
                        fl = E);
                    else if (_ < hl && 0 > G(w, B))
                        x[fl] = w,
                        x[_] = B,
                        fl = _;
                    else
                        break l
                }
            }
            return j
        }
        function G(x, j) {
            var B = x.sortIndex - j.sortIndex;
            return B !== 0 ? B : x.id - j.id
        }
        if (v.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var Z = performance;
            v.unstable_now = function() {
                return Z.now()
            }
        } else {
            var ll = Date
              , il = ll.now();
            v.unstable_now = function() {
                return ll.now() - il
            }
        }
        var O = []
          , z = []
          , V = 1
          , q = null
          , W = 3
          , Hl = !1
          , Al = !1
          , Ml = !1
          , Pl = !1
          , El = typeof setTimeout == "function" ? setTimeout : null
          , lt = typeof clearTimeout == "function" ? clearTimeout : null
          , U = typeof setImmediate < "u" ? setImmediate : null;
        function C(x) {
            for (var j = M(z); j !== null; ) {
                if (j.callback === null)
                    h(z);
                else if (j.startTime <= x)
                    h(z),
                    j.sortIndex = j.expirationTime,
                    N(O, j);
                else
                    break;
                j = M(z)
            }
        }
        function P(x) {
            if (Ml = !1,
            C(x),
            !Al)
                if (M(O) !== null)
                    Al = !0,
                    L || (L = !0,
                    Rl());
                else {
                    var j = M(z);
                    j !== null && X(P, j.startTime - x)
                }
        }
        var L = !1
          , H = -1
          , ul = 5
          , xl = -1;
        function Zl() {
            return Pl ? !0 : !(v.unstable_now() - xl < ul)
        }
        function Dl() {
            if (Pl = !1,
            L) {
                var x = v.unstable_now();
                xl = x;
                var j = !0;
                try {
                    l: {
                        Al = !1,
                        Ml && (Ml = !1,
                        lt(H),
                        H = -1),
                        Hl = !0;
                        var B = W;
                        try {
                            t: {
                                for (C(x),
                                q = M(O); q !== null && !(q.expirationTime > x && Zl()); ) {
                                    var fl = q.callback;
                                    if (typeof fl == "function") {
                                        q.callback = null,
                                        W = q.priorityLevel;
                                        var hl = fl(q.expirationTime <= x);
                                        if (x = v.unstable_now(),
                                        typeof hl == "function") {
                                            q.callback = hl,
                                            C(x),
                                            j = !0;
                                            break t
                                        }
                                        q === M(O) && h(O),
                                        C(x)
                                    } else
                                        h(O);
                                    q = M(O)
                                }
                                if (q !== null)
                                    j = !0;
                                else {
                                    var r = M(z);
                                    r !== null && X(P, r.startTime - x),
                                    j = !1
                                }
                            }
                            break l
                        } finally {
                            q = null,
                            W = B,
                            Hl = !1
                        }
                        j = void 0
                    }
                } finally {
                    j ? Rl() : L = !1
                }
            }
        }
        var Rl;
        if (typeof U == "function")
            Rl = function() {
                U(Dl)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var et = new MessageChannel
              , Fl = et.port2;
            et.port1.onmessage = Dl,
            Rl = function() {
                Fl.postMessage(null)
            }
        } else
            Rl = function() {
                El(Dl, 0)
            }
            ;
        function X(x, j) {
            H = El(function() {
                x(v.unstable_now())
            }, j)
        }
        v.unstable_IdlePriority = 5,
        v.unstable_ImmediatePriority = 1,
        v.unstable_LowPriority = 4,
        v.unstable_NormalPriority = 3,
        v.unstable_Profiling = null,
        v.unstable_UserBlockingPriority = 2,
        v.unstable_cancelCallback = function(x) {
            x.callback = null
        }
        ,
        v.unstable_forceFrameRate = function(x) {
            0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ul = 0 < x ? Math.floor(1e3 / x) : 5
        }
        ,
        v.unstable_getCurrentPriorityLevel = function() {
            return W
        }
        ,
        v.unstable_next = function(x) {
            switch (W) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = W
            }
            var B = W;
            W = j;
            try {
                return x()
            } finally {
                W = B
            }
        }
        ,
        v.unstable_requestPaint = function() {
            Pl = !0
        }
        ,
        v.unstable_runWithPriority = function(x, j) {
            switch (x) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                x = 3
            }
            var B = W;
            W = x;
            try {
                return j()
            } finally {
                W = B
            }
        }
        ,
        v.unstable_scheduleCallback = function(x, j, B) {
            var fl = v.unstable_now();
            switch (typeof B == "object" && B !== null ? (B = B.delay,
            B = typeof B == "number" && 0 < B ? fl + B : fl) : B = fl,
            x) {
            case 1:
                var hl = -1;
                break;
            case 2:
                hl = 250;
                break;
            case 5:
                hl = 1073741823;
                break;
            case 4:
                hl = 1e4;
                break;
            default:
                hl = 5e3
            }
            return hl = B + hl,
            x = {
                id: V++,
                callback: j,
                priorityLevel: x,
                startTime: B,
                expirationTime: hl,
                sortIndex: -1
            },
            B > fl ? (x.sortIndex = B,
            N(z, x),
            M(O) === null && x === M(z) && (Ml ? (lt(H),
            H = -1) : Ml = !0,
            X(P, B - fl))) : (x.sortIndex = hl,
            N(O, x),
            Al || Hl || (Al = !0,
            L || (L = !0,
            Rl()))),
            x
        }
        ,
        v.unstable_shouldYield = Zl,
        v.unstable_wrapCallback = function(x) {
            var j = W;
            return function() {
                var B = W;
                W = j;
                try {
                    return x.apply(this, arguments)
                } finally {
                    W = B
                }
            }
        }
    }
    )(mf)),
    mf
}
var E0;
function im() {
    return E0 || (E0 = 1,
    hf.exports = cm()),
    hf.exports
}
var gf = {
    exports: {}
}
  , Il = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j0;
function fm() {
    if (j0)
        return Il;
    j0 = 1;
    var v = bf();
    function N(O) {
        var z = "https://react.dev/errors/" + O;
        if (1 < arguments.length) {
            z += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var V = 2; V < arguments.length; V++)
                z += "&args[]=" + encodeURIComponent(arguments[V])
        }
        return "Minified React error #" + O + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function M() {}
    var h = {
        d: {
            f: M,
            r: function() {
                throw Error(N(522))
            },
            D: M,
            C: M,
            L: M,
            m: M,
            X: M,
            S: M,
            M
        },
        p: 0,
        findDOMNode: null
    }
      , G = Symbol.for("react.portal");
    function Z(O, z, V) {
        var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: G,
            key: q == null ? null : "" + q,
            children: O,
            containerInfo: z,
            implementation: V
        }
    }
    var ll = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function il(O, z) {
        if (O === "font")
            return "";
        if (typeof z == "string")
            return z === "use-credentials" ? z : ""
    }
    return Il.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h,
    Il.createPortal = function(O, z) {
        var V = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11)
            throw Error(N(299));
        return Z(O, z, null, V)
    }
    ,
    Il.flushSync = function(O) {
        var z = ll.T
          , V = h.p;
        try {
            if (ll.T = null,
            h.p = 2,
            O)
                return O()
        } finally {
            ll.T = z,
            h.p = V,
            h.d.f()
        }
    }
    ,
    Il.preconnect = function(O, z) {
        typeof O == "string" && (z ? (z = z.crossOrigin,
        z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null,
        h.d.C(O, z))
    }
    ,
    Il.prefetchDNS = function(O) {
        typeof O == "string" && h.d.D(O)
    }
    ,
    Il.preinit = function(O, z) {
        if (typeof O == "string" && z && typeof z.as == "string") {
            var V = z.as
              , q = il(V, z.crossOrigin)
              , W = typeof z.integrity == "string" ? z.integrity : void 0
              , Hl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
            V === "style" ? h.d.S(O, typeof z.precedence == "string" ? z.precedence : void 0, {
                crossOrigin: q,
                integrity: W,
                fetchPriority: Hl
            }) : V === "script" && h.d.X(O, {
                crossOrigin: q,
                integrity: W,
                fetchPriority: Hl,
                nonce: typeof z.nonce == "string" ? z.nonce : void 0
            })
        }
    }
    ,
    Il.preinitModule = function(O, z) {
        if (typeof O == "string")
            if (typeof z == "object" && z !== null) {
                if (z.as == null || z.as === "script") {
                    var V = il(z.as, z.crossOrigin);
                    h.d.M(O, {
                        crossOrigin: V,
                        integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                        nonce: typeof z.nonce == "string" ? z.nonce : void 0
                    })
                }
            } else
                z == null && h.d.M(O)
    }
    ,
    Il.preload = function(O, z) {
        if (typeof O == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
            var V = z.as
              , q = il(V, z.crossOrigin);
            h.d.L(O, V, {
                crossOrigin: q,
                integrity: typeof z.integrity == "string" ? z.integrity : void 0,
                nonce: typeof z.nonce == "string" ? z.nonce : void 0,
                type: typeof z.type == "string" ? z.type : void 0,
                fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
                referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
                imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
                imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
                media: typeof z.media == "string" ? z.media : void 0
            })
        }
    }
    ,
    Il.preloadModule = function(O, z) {
        if (typeof O == "string")
            if (z) {
                var V = il(z.as, z.crossOrigin);
                h.d.m(O, {
                    as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
                    crossOrigin: V,
                    integrity: typeof z.integrity == "string" ? z.integrity : void 0
                })
            } else
                h.d.m(O)
    }
    ,
    Il.requestFormReset = function(O) {
        h.d.r(O)
    }
    ,
    Il.unstable_batchedUpdates = function(O, z) {
        return O(z)
    }
    ,
    Il.useFormState = function(O, z, V) {
        return ll.H.useFormState(O, z, V)
    }
    ,
    Il.useFormStatus = function() {
        return ll.H.useHostTransitionStatus()
    }
    ,
    Il.version = "19.2.0",
    Il
}
var A0;
function sm() {
    if (A0)
        return gf.exports;
    A0 = 1;
    function v() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)
            } catch (N) {
                console.error(N)
            }
    }
    return v(),
    gf.exports = fm(),
    gf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var N0;
function om() {
    if (N0)
        return Mn;
    N0 = 1;
    var v = im()
      , N = bf()
      , M = sm();
    function h(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function G(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function Z(l) {
        var t = l
          , e = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (e = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? e : null
    }
    function ll(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function il(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function O(l) {
        if (Z(l) !== l)
            throw Error(h(188))
    }
    function z(l) {
        var t = l.alternate;
        if (!t) {
            if (t = Z(l),
            t === null)
                throw Error(h(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t; ; ) {
            var n = e.return;
            if (n === null)
                break;
            var u = n.alternate;
            if (u === null) {
                if (a = n.return,
                a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (n.child === u.child) {
                for (u = n.child; u; ) {
                    if (u === e)
                        return O(n),
                        l;
                    if (u === a)
                        return O(n),
                        t;
                    u = u.sibling
                }
                throw Error(h(188))
            }
            if (e.return !== a.return)
                e = n,
                a = u;
            else {
                for (var c = !1, i = n.child; i; ) {
                    if (i === e) {
                        c = !0,
                        e = n,
                        a = u;
                        break
                    }
                    if (i === a) {
                        c = !0,
                        a = n,
                        e = u;
                        break
                    }
                    i = i.sibling
                }
                if (!c) {
                    for (i = u.child; i; ) {
                        if (i === e) {
                            c = !0,
                            e = u,
                            a = n;
                            break
                        }
                        if (i === a) {
                            c = !0,
                            a = u,
                            e = n;
                            break
                        }
                        i = i.sibling
                    }
                    if (!c)
                        throw Error(h(189))
                }
            }
            if (e.alternate !== a)
                throw Error(h(190))
        }
        if (e.tag !== 3)
            throw Error(h(188));
        return e.stateNode.current === e ? l : t
    }
    function V(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = V(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var q = Object.assign
      , W = Symbol.for("react.element")
      , Hl = Symbol.for("react.transitional.element")
      , Al = Symbol.for("react.portal")
      , Ml = Symbol.for("react.fragment")
      , Pl = Symbol.for("react.strict_mode")
      , El = Symbol.for("react.profiler")
      , lt = Symbol.for("react.consumer")
      , U = Symbol.for("react.context")
      , C = Symbol.for("react.forward_ref")
      , P = Symbol.for("react.suspense")
      , L = Symbol.for("react.suspense_list")
      , H = Symbol.for("react.memo")
      , ul = Symbol.for("react.lazy")
      , xl = Symbol.for("react.activity")
      , Zl = Symbol.for("react.memo_cache_sentinel")
      , Dl = Symbol.iterator;
    function Rl(l) {
        return l === null || typeof l != "object" ? null : (l = Dl && l[Dl] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var et = Symbol.for("react.client.reference");
    function Fl(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === et ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case Ml:
            return "Fragment";
        case El:
            return "Profiler";
        case Pl:
            return "StrictMode";
        case P:
            return "Suspense";
        case L:
            return "SuspenseList";
        case xl:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case Al:
                return "Portal";
            case U:
                return l.displayName || "Context";
            case lt:
                return (l._context.displayName || "Context") + ".Consumer";
            case C:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case H:
                return t = l.displayName || null,
                t !== null ? t : Fl(l.type) || "Memo";
            case ul:
                t = l._payload,
                l = l._init;
                try {
                    return Fl(l(t))
                } catch {}
            }
        return null
    }
    var X = Array.isArray
      , x = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , j = M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , B = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , fl = []
      , hl = -1;
    function r(l) {
        return {
            current: l
        }
    }
    function E(l) {
        0 > hl || (l.current = fl[hl],
        fl[hl] = null,
        hl--)
    }
    function A(l, t) {
        hl++,
        fl[hl] = l.current,
        l.current = t
    }
    var _ = r(null)
      , w = r(null)
      , k = r(null)
      , sl = r(null);
    function wl(l, t) {
        switch (A(k, t),
        A(w, l),
        A(_, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Lr(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = Lr(t),
                l = Vr(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        E(_),
        A(_, l)
    }
    function Nl() {
        E(_),
        E(w),
        E(k)
    }
    function Me(l) {
        l.memoizedState !== null && A(sl, l);
        var t = _.current
          , e = Vr(t, l.type);
        t !== e && (A(w, l),
        A(_, e))
    }
    function Je(l) {
        w.current === l && (E(_),
        E(w)),
        sl.current === l && (E(sl),
        Tn._currentValue = B)
    }
    var J, Sl;
    function Ql(l) {
        if (J === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                J = t && t[1] || "",
                Sl = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + J + l + Sl
    }
    var Ot = !1;
    function ke(l, t) {
        if (!l || Ot)
            return "";
        Ot = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var T = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(T.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(T, [])
                                } catch (b) {
                                    var y = b
                                }
                                Reflect.construct(l, [], T)
                            } else {
                                try {
                                    T.call()
                                } catch (b) {
                                    y = b
                                }
                                l.call(T.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (b) {
                                y = b
                            }
                            (T = l()) && typeof T.catch == "function" && T.catch(function() {})
                        }
                    } catch (b) {
                        if (b && y && typeof b.stack == "string")
                            return [b.stack, y.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var u = a.DetermineComponentFrameRoot()
              , c = u[0]
              , i = u[1];
            if (c && i) {
                var s = c.split(`
`)
                  , g = i.split(`
`);
                for (n = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); )
                    n++;
                if (a === s.length || n === g.length)
                    for (a = s.length - 1,
                    n = g.length - 1; 1 <= a && 0 <= n && s[a] !== g[n]; )
                        n--;
                for (; 1 <= a && 0 <= n; a--,
                n--)
                    if (s[a] !== g[n]) {
                        if (a !== 1 || n !== 1)
                            do
                                if (a--,
                                n--,
                                0 > n || s[a] !== g[n]) {
                                    var p = `
` + s[a].replace(" at new ", " at ");
                                    return l.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", l.displayName)),
                                    p
                                }
                            while (1 <= a && 0 <= n);
                        break
                    }
            }
        } finally {
            Ot = !1,
            Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? Ql(e) : ""
    }
    function $u(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Ql(l.type);
        case 16:
            return Ql("Lazy");
        case 13:
            return l.child !== t && t !== null ? Ql("Suspense Fallback") : Ql("Suspense");
        case 19:
            return Ql("SuspenseList");
        case 0:
        case 15:
            return ke(l.type, !1);
        case 11:
            return ke(l.type.render, !1);
        case 1:
            return ke(l.type, !0);
        case 31:
            return Ql("Activity");
        default:
            return ""
        }
    }
    function On(l) {
        try {
            var t = ""
              , e = null;
            do
                t += $u(l, e),
                e = l,
                l = l.return;
            while (l);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var Ca = Object.prototype.hasOwnProperty
      , ee = v.unstable_scheduleCallback
      , Wu = v.unstable_cancelCallback
      , R0 = v.unstable_shouldYield
      , q0 = v.unstable_requestPaint
      , ot = v.unstable_now
      , B0 = v.unstable_getCurrentPriorityLevel
      , xf = v.unstable_ImmediatePriority
      , pf = v.unstable_UserBlockingPriority
      , Dn = v.unstable_NormalPriority
      , Y0 = v.unstable_LowPriority
      , Sf = v.unstable_IdlePriority
      , G0 = v.log
      , X0 = v.unstable_setDisableYieldValue
      , Ha = null
      , rt = null;
    function ae(l) {
        if (typeof G0 == "function" && X0(l),
        rt && typeof rt.setStrictMode == "function")
            try {
                rt.setStrictMode(Ha, l)
            } catch {}
    }
    var dt = Math.clz32 ? Math.clz32 : V0
      , Q0 = Math.log
      , L0 = Math.LN2;
    function V0(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (Q0(l) / L0 | 0) | 0
    }
    var Un = 256
      , Cn = 262144
      , Hn = 4194304;
    function _e(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
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
            return 64;
        case 128:
            return 128;
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
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }
    function Rn(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0)
            return 0;
        var n = 0
          , u = l.suspendedLanes
          , c = l.pingedLanes;
        l = l.warmLanes;
        var i = a & 134217727;
        return i !== 0 ? (a = i & ~u,
        a !== 0 ? n = _e(a) : (c &= i,
        c !== 0 ? n = _e(c) : e || (e = i & ~l,
        e !== 0 && (n = _e(e))))) : (i = a & ~u,
        i !== 0 ? n = _e(i) : c !== 0 ? n = _e(c) : e || (e = a & ~l,
        e !== 0 && (n = _e(e)))),
        n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n,
        e = t & -t,
        u >= e || u === 32 && (e & 4194048) !== 0) ? t : n
    }
    function Ra(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function Z0(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
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
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function zf() {
        var l = Hn;
        return Hn <<= 1,
        (Hn & 62914560) === 0 && (Hn = 4194304),
        l
    }
    function Fu(l) {
        for (var t = [], e = 0; 31 > e; e++)
            t.push(l);
        return t
    }
    function qa(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function w0(l, t, e, a, n, u) {
        var c = l.pendingLanes;
        l.pendingLanes = e,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= e,
        l.entangledLanes &= e,
        l.errorRecoveryDisabledLanes &= e,
        l.shellSuspendCounter = 0;
        var i = l.entanglements
          , s = l.expirationTimes
          , g = l.hiddenUpdates;
        for (e = c & ~e; 0 < e; ) {
            var p = 31 - dt(e)
              , T = 1 << p;
            i[p] = 0,
            s[p] = -1;
            var y = g[p];
            if (y !== null)
                for (g[p] = null,
                p = 0; p < y.length; p++) {
                    var b = y[p];
                    b !== null && (b.lane &= -536870913)
                }
            e &= ~T
        }
        a !== 0 && Tf(l, a, 0),
        u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(c & ~t))
    }
    function Tf(l, t, e) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var a = 31 - dt(t);
        l.entangledLanes |= t,
        l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930
    }
    function Ef(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e; ) {
            var a = 31 - dt(e)
              , n = 1 << a;
            n & t | l[a] & t && (l[a] |= t),
            e &= ~n
        }
    }
    function jf(l, t) {
        var e = t & -t;
        return e = (e & 42) !== 0 ? 1 : Iu(e),
        (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    }
    function Iu(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
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
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function Pu(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Af() {
        var l = j.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : d0(l.type))
    }
    function Nf(l, t) {
        var e = j.p;
        try {
            return j.p = l,
            t()
        } finally {
            j.p = e
        }
    }
    var ne = Math.random().toString(36).slice(2)
      , Kl = "__reactFiber$" + ne
      , at = "__reactProps$" + ne
      , $e = "__reactContainer$" + ne
      , lc = "__reactEvents$" + ne
      , K0 = "__reactListeners$" + ne
      , J0 = "__reactHandles$" + ne
      , Mf = "__reactResources$" + ne
      , Ba = "__reactMarker$" + ne;
    function tc(l) {
        delete l[Kl],
        delete l[at],
        delete l[lc],
        delete l[K0],
        delete l[J0]
    }
    function We(l) {
        var t = l[Kl];
        if (t)
            return t;
        for (var e = l.parentNode; e; ) {
            if (t = e[$e] || e[Kl]) {
                if (e = t.alternate,
                t.child !== null || e !== null && e.child !== null)
                    for (l = Wr(l); l !== null; ) {
                        if (e = l[Kl])
                            return e;
                        l = Wr(l)
                    }
                return t
            }
            l = e,
            e = l.parentNode
        }
        return null
    }
    function Fe(l) {
        if (l = l[Kl] || l[$e]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function Ya(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(h(33))
    }
    function Ie(l) {
        var t = l[Mf];
        return t || (t = l[Mf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Ll(l) {
        l[Ba] = !0
    }
    var _f = new Set
      , Of = {};
    function Oe(l, t) {
        Pe(l, t),
        Pe(l + "Capture", t)
    }
    function Pe(l, t) {
        for (Of[l] = t,
        l = 0; l < t.length; l++)
            _f.add(t[l])
    }
    var k0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Df = {}
      , Uf = {};
    function $0(l) {
        return Ca.call(Uf, l) ? !0 : Ca.call(Df, l) ? !1 : k0.test(l) ? Uf[l] = !0 : (Df[l] = !0,
        !1)
    }
    function qn(l, t, e) {
        if ($0(t))
            if (e === null)
                l.removeAttribute(t);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + e)
            }
    }
    function Bn(l, t, e) {
        if (e === null)
            l.removeAttribute(t);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + e)
        }
    }
    function Yt(l, t, e, a) {
        if (a === null)
            l.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(e);
                return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }
    function pt(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Cf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function W0(l, t, e) {
        var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var n = a.get
              , u = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return n.call(this)
                },
                set: function(c) {
                    e = "" + c,
                    u.call(this, c)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return e
                },
                setValue: function(c) {
                    e = "" + c
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function ec(l) {
        if (!l._valueTracker) {
            var t = Cf(l) ? "checked" : "value";
            l._valueTracker = W0(l, t, "" + l[t])
        }
    }
    function Hf(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var e = t.getValue()
          , a = "";
        return l && (a = Cf(l) ? l.checked ? "true" : "false" : l.value),
        l = a,
        l !== e ? (t.setValue(l),
        !0) : !1
    }
    function Yn(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var F0 = /[\n"\\]/g;
    function St(l) {
        return l.replace(F0, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ac(l, t, e, a, n, u, c, i) {
        l.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + pt(t)) : l.value !== "" + pt(t) && (l.value = "" + pt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"),
        t != null ? nc(l, c, pt(t)) : e != null ? nc(l, c, pt(e)) : a != null && l.removeAttribute("value"),
        n == null && u != null && (l.defaultChecked = !!u),
        n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + pt(i) : l.removeAttribute("name")
    }
    function Rf(l, t, e, a, n, u, c, i) {
        if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u),
        t != null || e != null) {
            if (!(u !== "submit" && u !== "reset" || t != null)) {
                ec(l);
                return
            }
            e = e != null ? "" + pt(e) : "",
            t = t != null ? "" + pt(t) : e,
            i || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        a = a ?? n,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        l.checked = i ? l.checked : !!a,
        l.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c),
        ec(l)
    }
    function nc(l, t, e) {
        t === "number" && Yn(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }
    function la(l, t, e, a) {
        if (l = l.options,
        t) {
            t = {};
            for (var n = 0; n < e.length; n++)
                t["$" + e[n]] = !0;
            for (e = 0; e < l.length; e++)
                n = t.hasOwnProperty("$" + l[e].value),
                l[e].selected !== n && (l[e].selected = n),
                n && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + pt(e),
            t = null,
            n = 0; n < l.length; n++) {
                if (l[n].value === e) {
                    l[n].selected = !0,
                    a && (l[n].defaultSelected = !0);
                    return
                }
                t !== null || l[n].disabled || (t = l[n])
            }
            t !== null && (t.selected = !0)
        }
    }
    function qf(l, t, e) {
        if (t != null && (t = "" + pt(t),
        t !== l.value && (l.value = t),
        e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + pt(e) : ""
    }
    function Bf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null)
                    throw Error(h(92));
                if (X(a)) {
                    if (1 < a.length)
                        throw Error(h(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            t = e
        }
        e = pt(t),
        l.defaultValue = e,
        a = l.textContent,
        a === e && a !== "" && a !== null && (l.value = a),
        ec(l)
    }
    function ta(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var I0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Yf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || I0.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }
    function Gf(l, t, e) {
        if (t != null && typeof t != "object")
            throw Error(h(62));
        if (l = l.style,
        e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var n in t)
                a = t[n],
                t.hasOwnProperty(n) && e[n] !== a && Yf(l, n, a)
        } else
            for (var u in t)
                t.hasOwnProperty(u) && Yf(l, u, t[u])
    }
    function uc(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
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
            return !0
        }
    }
    var P0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , ld = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Gn(l) {
        return ld.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function Gt() {}
    var cc = null;
    function ic(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var ea = null
      , aa = null;
    function Xf(l) {
        var t = Fe(l);
        if (t && (l = t.stateNode)) {
            var e = l[at] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (ac(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
                t = e.name,
                e.type === "radio" && t != null) {
                    for (e = l; e.parentNode; )
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + St("" + t) + '"][type="radio"]'),
                    t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (a !== l && a.form === l.form) {
                            var n = a[at] || null;
                            if (!n)
                                throw Error(h(90));
                            ac(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name)
                        }
                    }
                    for (t = 0; t < e.length; t++)
                        a = e[t],
                        a.form === l.form && Hf(a)
                }
                break l;
            case "textarea":
                qf(l, e.value, e.defaultValue);
                break l;
            case "select":
                t = e.value,
                t != null && la(l, !!e.multiple, t, !1)
            }
        }
    }
    var fc = !1;
    function Qf(l, t, e) {
        if (fc)
            return l(t, e);
        fc = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (fc = !1,
            (ea !== null || aa !== null) && (Au(),
            ea && (t = ea,
            l = aa,
            aa = ea = null,
            Xf(t),
            l)))
                for (t = 0; t < l.length; t++)
                    Xf(l[t])
        }
    }
    function Ga(l, t) {
        var e = l.stateNode;
        if (e === null)
            return null;
        var a = e[at] || null;
        if (a === null)
            return null;
        e = a[t];
        l: switch (t) {
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
            (a = !a.disabled) || (l = l.type,
            a = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !a;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (e && typeof e != "function")
            throw Error(h(231, t, typeof e));
        return e
    }
    var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , sc = !1;
    if (Xt)
        try {
            var Xa = {};
            Object.defineProperty(Xa, "passive", {
                get: function() {
                    sc = !0
                }
            }),
            window.addEventListener("test", Xa, Xa),
            window.removeEventListener("test", Xa, Xa)
        } catch {
            sc = !1
        }
    var ue = null
      , oc = null
      , Xn = null;
    function Lf() {
        if (Xn)
            return Xn;
        var l, t = oc, e = t.length, a, n = "value"in ue ? ue.value : ue.textContent, u = n.length;
        for (l = 0; l < e && t[l] === n[l]; l++)
            ;
        var c = e - l;
        for (a = 1; a <= c && t[e - a] === n[u - a]; a++)
            ;
        return Xn = n.slice(l, 1 < a ? 1 - a : void 0)
    }
    function Qn(l) {
        var t = l.keyCode;
        return "charCode"in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function Ln() {
        return !0
    }
    function Vf() {
        return !1
    }
    function nt(l) {
        function t(e, a, n, u, c) {
            this._reactName = e,
            this._targetInst = n,
            this.type = a,
            this.nativeEvent = u,
            this.target = c,
            this.currentTarget = null;
            for (var i in l)
                l.hasOwnProperty(i) && (e = l[i],
                this[i] = e ? e(u) : u[i]);
            return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ln : Vf,
            this.isPropagationStopped = Vf,
            this
        }
        return q(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                this.isDefaultPrevented = Ln)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
                this.isPropagationStopped = Ln)
            },
            persist: function() {},
            isPersistent: Ln
        }),
        t
    }
    var De = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Vn = nt(De), Qa = q({}, De, {
        view: 0,
        detail: 0
    }), td = nt(Qa), rc, dc, La, Zn = q({}, Qa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: mc,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX"in l ? l.movementX : (l !== La && (La && l.type === "mousemove" ? (rc = l.screenX - La.screenX,
            dc = l.screenY - La.screenY) : dc = rc = 0,
            La = l),
            rc)
        },
        movementY: function(l) {
            return "movementY"in l ? l.movementY : dc
        }
    }), Zf = nt(Zn), ed = q({}, Zn, {
        dataTransfer: 0
    }), ad = nt(ed), nd = q({}, Qa, {
        relatedTarget: 0
    }), hc = nt(nd), ud = q({}, De, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), cd = nt(ud), id = q({}, De, {
        clipboardData: function(l) {
            return "clipboardData"in l ? l.clipboardData : window.clipboardData
        }
    }), fd = nt(id), sd = q({}, De, {
        data: 0
    }), wf = nt(sd), od = {
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
    }, rd = {
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
    }, dd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function hd(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = dd[l]) ? !!t[l] : !1
    }
    function mc() {
        return hd
    }
    var md = q({}, Qa, {
        key: function(l) {
            if (l.key) {
                var t = od[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = Qn(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? rd[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: mc,
        charCode: function(l) {
            return l.type === "keypress" ? Qn(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? Qn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , gd = nt(md)
      , yd = q({}, Zn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Kf = nt(yd)
      , vd = q({}, Qa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: mc
    })
      , bd = nt(vd)
      , xd = q({}, De, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , pd = nt(xd)
      , Sd = q({}, Zn, {
        deltaX: function(l) {
            return "deltaX"in l ? l.deltaX : "wheelDeltaX"in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY"in l ? l.deltaY : "wheelDeltaY"in l ? -l.wheelDeltaY : "wheelDelta"in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , zd = nt(Sd)
      , Td = q({}, De, {
        newState: 0,
        oldState: 0
    })
      , Ed = nt(Td)
      , jd = [9, 13, 27, 32]
      , gc = Xt && "CompositionEvent"in window
      , Va = null;
    Xt && "documentMode"in document && (Va = document.documentMode);
    var Ad = Xt && "TextEvent"in window && !Va
      , Jf = Xt && (!gc || Va && 8 < Va && 11 >= Va)
      , kf = " "
      , $f = !1;
    function Wf(l, t) {
        switch (l) {
        case "keyup":
            return jd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Ff(l) {
        return l = l.detail,
        typeof l == "object" && "data"in l ? l.data : null
    }
    var na = !1;
    function Nd(l, t) {
        switch (l) {
        case "compositionend":
            return Ff(t);
        case "keypress":
            return t.which !== 32 ? null : ($f = !0,
            kf);
        case "textInput":
            return l = t.data,
            l === kf && $f ? null : l;
        default:
            return null
        }
    }
    function Md(l, t) {
        if (na)
            return l === "compositionend" || !gc && Wf(l, t) ? (l = Lf(),
            Xn = oc = ue = null,
            na = !1,
            l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Jf && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var _d = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function If(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!_d[l.type] : t === "textarea"
    }
    function Pf(l, t, e, a) {
        ea ? aa ? aa.push(a) : aa = [a] : ea = a,
        t = Cu(t, "onChange"),
        0 < t.length && (e = new Vn("onChange","change",null,e,a),
        l.push({
            event: e,
            listeners: t
        }))
    }
    var Za = null
      , wa = null;
    function Od(l) {
        qr(l, 0)
    }
    function wn(l) {
        var t = Ya(l);
        if (Hf(t))
            return l
    }
    function ls(l, t) {
        if (l === "change")
            return t
    }
    var ts = !1;
    if (Xt) {
        var yc;
        if (Xt) {
            var vc = "oninput"in document;
            if (!vc) {
                var es = document.createElement("div");
                es.setAttribute("oninput", "return;"),
                vc = typeof es.oninput == "function"
            }
            yc = vc
        } else
            yc = !1;
        ts = yc && (!document.documentMode || 9 < document.documentMode)
    }
    function as() {
        Za && (Za.detachEvent("onpropertychange", ns),
        wa = Za = null)
    }
    function ns(l) {
        if (l.propertyName === "value" && wn(wa)) {
            var t = [];
            Pf(t, wa, l, ic(l)),
            Qf(Od, t)
        }
    }
    function Dd(l, t, e) {
        l === "focusin" ? (as(),
        Za = t,
        wa = e,
        Za.attachEvent("onpropertychange", ns)) : l === "focusout" && as()
    }
    function Ud(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return wn(wa)
    }
    function Cd(l, t) {
        if (l === "click")
            return wn(t)
    }
    function Hd(l, t) {
        if (l === "input" || l === "change")
            return wn(t)
    }
    function Rd(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var ht = typeof Object.is == "function" ? Object.is : Rd;
    function Ka(l, t) {
        if (ht(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var e = Object.keys(l)
          , a = Object.keys(t);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var n = e[a];
            if (!Ca.call(t, n) || !ht(l[n], t[n]))
                return !1
        }
        return !0
    }
    function us(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function cs(l, t) {
        var e = us(l);
        l = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length,
                l <= t && a >= t)
                    return {
                        node: e,
                        offset: t - l
                    };
                l = a
            }
            l: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = us(e)
        }
    }
    function is(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? is(l, t.parentNode) : "contains"in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function fs(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Yn(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                l = t.contentWindow;
            else
                break;
            t = Yn(l.document)
        }
        return t
    }
    function bc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var qd = Xt && "documentMode"in document && 11 >= document.documentMode
      , ua = null
      , xc = null
      , Ja = null
      , pc = !1;
    function ss(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        pc || ua == null || ua !== Yn(a) || (a = ua,
        "selectionStart"in a && bc(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Ja && Ka(Ja, a) || (Ja = a,
        a = Cu(xc, "onSelect"),
        0 < a.length && (t = new Vn("onSelect","select",null,t,e),
        l.push({
            event: t,
            listeners: a
        }),
        t.target = ua)))
    }
    function Ue(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(),
        e["Webkit" + l] = "webkit" + t,
        e["Moz" + l] = "moz" + t,
        e
    }
    var ca = {
        animationend: Ue("Animation", "AnimationEnd"),
        animationiteration: Ue("Animation", "AnimationIteration"),
        animationstart: Ue("Animation", "AnimationStart"),
        transitionrun: Ue("Transition", "TransitionRun"),
        transitionstart: Ue("Transition", "TransitionStart"),
        transitioncancel: Ue("Transition", "TransitionCancel"),
        transitionend: Ue("Transition", "TransitionEnd")
    }
      , Sc = {}
      , os = {};
    Xt && (os = document.createElement("div").style,
    "AnimationEvent"in window || (delete ca.animationend.animation,
    delete ca.animationiteration.animation,
    delete ca.animationstart.animation),
    "TransitionEvent"in window || delete ca.transitionend.transition);
    function Ce(l) {
        if (Sc[l])
            return Sc[l];
        if (!ca[l])
            return l;
        var t = ca[l], e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in os)
                return Sc[l] = t[e];
        return l
    }
    var rs = Ce("animationend")
      , ds = Ce("animationiteration")
      , hs = Ce("animationstart")
      , Bd = Ce("transitionrun")
      , Yd = Ce("transitionstart")
      , Gd = Ce("transitioncancel")
      , ms = Ce("transitionend")
      , gs = new Map
      , zc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    zc.push("scrollEnd");
    function Dt(l, t) {
        gs.set(l, t),
        Oe(t, [l])
    }
    var Kn = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , zt = []
      , ia = 0
      , Tc = 0;
    function Jn() {
        for (var l = ia, t = Tc = ia = 0; t < l; ) {
            var e = zt[t];
            zt[t++] = null;
            var a = zt[t];
            zt[t++] = null;
            var n = zt[t];
            zt[t++] = null;
            var u = zt[t];
            if (zt[t++] = null,
            a !== null && n !== null) {
                var c = a.pending;
                c === null ? n.next = n : (n.next = c.next,
                c.next = n),
                a.pending = n
            }
            u !== 0 && ys(e, n, u)
        }
    }
    function kn(l, t, e, a) {
        zt[ia++] = l,
        zt[ia++] = t,
        zt[ia++] = e,
        zt[ia++] = a,
        Tc |= a,
        l.lanes |= a,
        l = l.alternate,
        l !== null && (l.lanes |= a)
    }
    function Ec(l, t, e, a) {
        return kn(l, t, e, a),
        $n(l)
    }
    function He(l, t) {
        return kn(l, null, null, t),
        $n(l)
    }
    function ys(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var n = !1, u = l.return; u !== null; )
            u.childLanes |= e,
            a = u.alternate,
            a !== null && (a.childLanes |= e),
            u.tag === 22 && (l = u.stateNode,
            l === null || l._visibility & 1 || (n = !0)),
            l = u,
            u = u.return;
        return l.tag === 3 ? (u = l.stateNode,
        n && t !== null && (n = 31 - dt(e),
        l = u.hiddenUpdates,
        a = l[n],
        a === null ? l[n] = [t] : a.push(t),
        t.lane = e | 536870912),
        u) : null
    }
    function $n(l) {
        if (50 < yn)
            throw yn = 0,
            Ci = null,
            Error(h(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var fa = {};
    function Xd(l, t, e, a) {
        this.tag = l,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function mt(l, t, e, a) {
        return new Xd(l,t,e,a)
    }
    function jc(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function Qt(l, t) {
        var e = l.alternate;
        return e === null ? (e = mt(l.tag, t, l.key, l.mode),
        e.elementType = l.elementType,
        e.type = l.type,
        e.stateNode = l.stateNode,
        e.alternate = l,
        l.alternate = e) : (e.pendingProps = t,
        e.type = l.type,
        e.flags = 0,
        e.subtreeFlags = 0,
        e.deletions = null),
        e.flags = l.flags & 65011712,
        e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        e.sibling = l.sibling,
        e.index = l.index,
        e.ref = l.ref,
        e.refCleanup = l.refCleanup,
        e
    }
    function vs(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        l.type = e.type,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function Wn(l, t, e, a, n, u) {
        var c = 0;
        if (a = l,
        typeof l == "function")
            jc(l) && (c = 1);
        else if (typeof l == "string")
            c = wh(l, e, _.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case xl:
                return l = mt(31, e, t, n),
                l.elementType = xl,
                l.lanes = u,
                l;
            case Ml:
                return Re(e.children, n, u, t);
            case Pl:
                c = 8,
                n |= 24;
                break;
            case El:
                return l = mt(12, e, t, n | 2),
                l.elementType = El,
                l.lanes = u,
                l;
            case P:
                return l = mt(13, e, t, n),
                l.elementType = P,
                l.lanes = u,
                l;
            case L:
                return l = mt(19, e, t, n),
                l.elementType = L,
                l.lanes = u,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case U:
                        c = 10;
                        break l;
                    case lt:
                        c = 9;
                        break l;
                    case C:
                        c = 11;
                        break l;
                    case H:
                        c = 14;
                        break l;
                    case ul:
                        c = 16,
                        a = null;
                        break l
                    }
                c = 29,
                e = Error(h(130, l === null ? "null" : typeof l, "")),
                a = null
            }
        return t = mt(c, e, t, n),
        t.elementType = l,
        t.type = a,
        t.lanes = u,
        t
    }
    function Re(l, t, e, a) {
        return l = mt(7, l, a, t),
        l.lanes = e,
        l
    }
    function Ac(l, t, e) {
        return l = mt(6, l, null, t),
        l.lanes = e,
        l
    }
    function bs(l) {
        var t = mt(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Nc(l, t, e) {
        return t = mt(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = e,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var xs = new WeakMap;
    function Tt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = xs.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: On(t)
            },
            xs.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: On(t)
        }
    }
    var sa = []
      , oa = 0
      , Fn = null
      , ka = 0
      , Et = []
      , jt = 0
      , ce = null
      , Ht = 1
      , Rt = "";
    function Lt(l, t) {
        sa[oa++] = ka,
        sa[oa++] = Fn,
        Fn = l,
        ka = t
    }
    function ps(l, t, e) {
        Et[jt++] = Ht,
        Et[jt++] = Rt,
        Et[jt++] = ce,
        ce = l;
        var a = Ht;
        l = Rt;
        var n = 32 - dt(a) - 1;
        a &= ~(1 << n),
        e += 1;
        var u = 32 - dt(t) + n;
        if (30 < u) {
            var c = n - n % 5;
            u = (a & (1 << c) - 1).toString(32),
            a >>= c,
            n -= c,
            Ht = 1 << 32 - dt(t) + n | e << n | a,
            Rt = u + l
        } else
            Ht = 1 << u | e << n | a,
            Rt = l
    }
    function Mc(l) {
        l.return !== null && (Lt(l, 1),
        ps(l, 1, 0))
    }
    function _c(l) {
        for (; l === Fn; )
            Fn = sa[--oa],
            sa[oa] = null,
            ka = sa[--oa],
            sa[oa] = null;
        for (; l === ce; )
            ce = Et[--jt],
            Et[jt] = null,
            Rt = Et[--jt],
            Et[jt] = null,
            Ht = Et[--jt],
            Et[jt] = null
    }
    function Ss(l, t) {
        Et[jt++] = Ht,
        Et[jt++] = Rt,
        Et[jt++] = ce,
        Ht = t.id,
        Rt = t.overflow,
        ce = l
    }
    var Jl = null
      , zl = null
      , cl = !1
      , ie = null
      , At = !1
      , Oc = Error(h(519));
    function fe(l) {
        var t = Error(h(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw $a(Tt(t, l)),
        Oc
    }
    function zs(l) {
        var t = l.stateNode
          , e = l.type
          , a = l.memoizedProps;
        switch (t[Kl] = l,
        t[at] = a,
        e) {
        case "dialog":
            el("cancel", t),
            el("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            el("load", t);
            break;
        case "video":
        case "audio":
            for (e = 0; e < bn.length; e++)
                el(bn[e], t);
            break;
        case "source":
            el("error", t);
            break;
        case "img":
        case "image":
        case "link":
            el("error", t),
            el("load", t);
            break;
        case "details":
            el("toggle", t);
            break;
        case "input":
            el("invalid", t),
            Rf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            el("invalid", t);
            break;
        case "textarea":
            el("invalid", t),
            Bf(t, a.value, a.defaultValue, a.children)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Xr(t.textContent, e) ? (a.popover != null && (el("beforetoggle", t),
        el("toggle", t)),
        a.onScroll != null && el("scroll", t),
        a.onScrollEnd != null && el("scrollend", t),
        a.onClick != null && (t.onclick = Gt),
        t = !0) : t = !1,
        t || fe(l, !0)
    }
    function Ts(l) {
        for (Jl = l.return; Jl; )
            switch (Jl.tag) {
            case 5:
            case 31:
            case 13:
                At = !1;
                return;
            case 27:
            case 3:
                At = !0;
                return;
            default:
                Jl = Jl.return
            }
    }
    function ra(l) {
        if (l !== Jl)
            return !1;
        if (!cl)
            return Ts(l),
            cl = !0,
            !1;
        var t = l.tag, e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type,
        e = !(e !== "form" && e !== "button") || ki(l.type, l.memoizedProps)),
        e = !e),
        e && zl && fe(l),
        Ts(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(h(317));
            zl = $r(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(h(317));
            zl = $r(l)
        } else
            t === 27 ? (t = zl,
            ze(l.type) ? (l = Pi,
            Pi = null,
            zl = l) : zl = t) : zl = Jl ? Mt(l.stateNode.nextSibling) : null;
        return !0
    }
    function qe() {
        zl = Jl = null,
        cl = !1
    }
    function Dc() {
        var l = ie;
        return l !== null && (ft === null ? ft = l : ft.push.apply(ft, l),
        ie = null),
        l
    }
    function $a(l) {
        ie === null ? ie = [l] : ie.push(l)
    }
    var Uc = r(null)
      , Be = null
      , Vt = null;
    function se(l, t, e) {
        A(Uc, t._currentValue),
        t._currentValue = e
    }
    function Zt(l) {
        l._currentValue = Uc.current,
        E(Uc)
    }
    function Cc(l, t, e) {
        for (; l !== null; ) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            l === e)
                break;
            l = l.return
        }
    }
    function Hc(l, t, e, a) {
        var n = l.child;
        for (n !== null && (n.return = l); n !== null; ) {
            var u = n.dependencies;
            if (u !== null) {
                var c = n.child;
                u = u.firstContext;
                l: for (; u !== null; ) {
                    var i = u;
                    u = n;
                    for (var s = 0; s < t.length; s++)
                        if (i.context === t[s]) {
                            u.lanes |= e,
                            i = u.alternate,
                            i !== null && (i.lanes |= e),
                            Cc(u.return, e, l),
                            a || (c = null);
                            break l
                        }
                    u = i.next
                }
            } else if (n.tag === 18) {
                if (c = n.return,
                c === null)
                    throw Error(h(341));
                c.lanes |= e,
                u = c.alternate,
                u !== null && (u.lanes |= e),
                Cc(c, e, l),
                c = null
            } else
                c = n.child;
            if (c !== null)
                c.return = n;
            else
                for (c = n; c !== null; ) {
                    if (c === l) {
                        c = null;
                        break
                    }
                    if (n = c.sibling,
                    n !== null) {
                        n.return = c.return,
                        c = n;
                        break
                    }
                    c = c.return
                }
            n = c
        }
    }
    function da(l, t, e, a) {
        l = null;
        for (var n = t, u = !1; n !== null; ) {
            if (!u) {
                if ((n.flags & 524288) !== 0)
                    u = !0;
                else if ((n.flags & 262144) !== 0)
                    break
            }
            if (n.tag === 10) {
                var c = n.alternate;
                if (c === null)
                    throw Error(h(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var i = n.type;
                    ht(n.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i])
                }
            } else if (n === sl.current) {
                if (c = n.alternate,
                c === null)
                    throw Error(h(387));
                c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Tn) : l = [Tn])
            }
            n = n.return
        }
        l !== null && Hc(t, l, e, a),
        t.flags |= 262144
    }
    function In(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!ht(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Ye(l) {
        Be = l,
        Vt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function kl(l) {
        return Es(Be, l)
    }
    function Pn(l, t) {
        return Be === null && Ye(l),
        Es(l, t)
    }
    function Es(l, t) {
        var e = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Vt === null) {
            if (l === null)
                throw Error(h(308));
            Vt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Vt = Vt.next = t;
        return e
    }
    var Qd = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(e, a) {
                l.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(e) {
                return e()
            })
        }
    }
      , Ld = v.unstable_scheduleCallback
      , Vd = v.unstable_NormalPriority
      , ql = {
        $$typeof: U,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Rc() {
        return {
            controller: new Qd,
            data: new Map,
            refCount: 0
        }
    }
    function Wa(l) {
        l.refCount--,
        l.refCount === 0 && Ld(Vd, function() {
            l.controller.abort()
        })
    }
    var Fa = null
      , qc = 0
      , ha = 0
      , ma = null;
    function Zd(l, t) {
        if (Fa === null) {
            var e = Fa = [];
            qc = 0,
            ha = Gi(),
            ma = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return qc++,
        t.then(js, js),
        t
    }
    function js() {
        if (--qc === 0 && Fa !== null) {
            ma !== null && (ma.status = "fulfilled");
            var l = Fa;
            Fa = null,
            ha = 0,
            ma = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function wd(l, t) {
        var e = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(n) {
                e.push(n)
            }
        };
        return l.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var n = 0; n < e.length; n++)
                (0,
                e[n])(t)
        }, function(n) {
            for (a.status = "rejected",
            a.reason = n,
            n = 0; n < e.length; n++)
                (0,
                e[n])(void 0)
        }),
        a
    }
    var As = x.S;
    x.S = function(l, t) {
        or = ot(),
        typeof t == "object" && t !== null && typeof t.then == "function" && Zd(l, t),
        As !== null && As(l, t)
    }
    ;
    var Ge = r(null);
    function Bc() {
        var l = Ge.current;
        return l !== null ? l : pl.pooledCache
    }
    function lu(l, t) {
        t === null ? A(Ge, Ge.current) : A(Ge, t.pool)
    }
    function Ns() {
        var l = Bc();
        return l === null ? null : {
            parent: ql._currentValue,
            pool: l
        }
    }
    var ga = Error(h(460))
      , Yc = Error(h(474))
      , tu = Error(h(542))
      , eu = {
        then: function() {}
    };
    function Ms(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function _s(l, t, e) {
        switch (e = l[e],
        e === void 0 ? l.push(t) : e !== t && (t.then(Gt, Gt),
        t = e),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            Ds(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(Gt, Gt);
            else {
                if (l = pl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(h(482));
                l = t,
                l.status = "pending",
                l.then(function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "fulfilled",
                        n.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var n = t;
                        n.status = "rejected",
                        n.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                Ds(l),
                l
            }
            throw Qe = t,
            ga
        }
    }
    function Xe(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (e) {
            throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Qe = e,
            ga) : e
        }
    }
    var Qe = null;
    function Os() {
        if (Qe === null)
            throw Error(h(459));
        var l = Qe;
        return Qe = null,
        l
    }
    function Ds(l) {
        if (l === ga || l === tu)
            throw Error(h(483))
    }
    var ya = null
      , Ia = 0;
    function au(l) {
        var t = Ia;
        return Ia += 1,
        ya === null && (ya = []),
        _s(ya, l, t)
    }
    function Pa(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function nu(l, t) {
        throw t.$$typeof === W ? Error(h(525)) : (l = Object.prototype.toString.call(t),
        Error(h(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function Us(l) {
        function t(d, o) {
            if (l) {
                var m = d.deletions;
                m === null ? (d.deletions = [o],
                d.flags |= 16) : m.push(o)
            }
        }
        function e(d, o) {
            if (!l)
                return null;
            for (; o !== null; )
                t(d, o),
                o = o.sibling;
            return null
        }
        function a(d) {
            for (var o = new Map; d !== null; )
                d.key !== null ? o.set(d.key, d) : o.set(d.index, d),
                d = d.sibling;
            return o
        }
        function n(d, o) {
            return d = Qt(d, o),
            d.index = 0,
            d.sibling = null,
            d
        }
        function u(d, o, m) {
            return d.index = m,
            l ? (m = d.alternate,
            m !== null ? (m = m.index,
            m < o ? (d.flags |= 67108866,
            o) : m) : (d.flags |= 67108866,
            o)) : (d.flags |= 1048576,
            o)
        }
        function c(d) {
            return l && d.alternate === null && (d.flags |= 67108866),
            d
        }
        function i(d, o, m, S) {
            return o === null || o.tag !== 6 ? (o = Ac(m, d.mode, S),
            o.return = d,
            o) : (o = n(o, m),
            o.return = d,
            o)
        }
        function s(d, o, m, S) {
            var Y = m.type;
            return Y === Ml ? p(d, o, m.props.children, S, m.key) : o !== null && (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === ul && Xe(Y) === o.type) ? (o = n(o, m.props),
            Pa(o, m),
            o.return = d,
            o) : (o = Wn(m.type, m.key, m.props, null, d.mode, S),
            Pa(o, m),
            o.return = d,
            o)
        }
        function g(d, o, m, S) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== m.containerInfo || o.stateNode.implementation !== m.implementation ? (o = Nc(m, d.mode, S),
            o.return = d,
            o) : (o = n(o, m.children || []),
            o.return = d,
            o)
        }
        function p(d, o, m, S, Y) {
            return o === null || o.tag !== 7 ? (o = Re(m, d.mode, S, Y),
            o.return = d,
            o) : (o = n(o, m),
            o.return = d,
            o)
        }
        function T(d, o, m) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
                return o = Ac("" + o, d.mode, m),
                o.return = d,
                o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                case Hl:
                    return m = Wn(o.type, o.key, o.props, null, d.mode, m),
                    Pa(m, o),
                    m.return = d,
                    m;
                case Al:
                    return o = Nc(o, d.mode, m),
                    o.return = d,
                    o;
                case ul:
                    return o = Xe(o),
                    T(d, o, m)
                }
                if (X(o) || Rl(o))
                    return o = Re(o, d.mode, m, null),
                    o.return = d,
                    o;
                if (typeof o.then == "function")
                    return T(d, au(o), m);
                if (o.$$typeof === U)
                    return T(d, Pn(d, o), m);
                nu(d, o)
            }
            return null
        }
        function y(d, o, m, S) {
            var Y = o !== null ? o.key : null;
            if (typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint")
                return Y !== null ? null : i(d, o, "" + m, S);
            if (typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case Hl:
                    return m.key === Y ? s(d, o, m, S) : null;
                case Al:
                    return m.key === Y ? g(d, o, m, S) : null;
                case ul:
                    return m = Xe(m),
                    y(d, o, m, S)
                }
                if (X(m) || Rl(m))
                    return Y !== null ? null : p(d, o, m, S, null);
                if (typeof m.then == "function")
                    return y(d, o, au(m), S);
                if (m.$$typeof === U)
                    return y(d, o, Pn(d, m), S);
                nu(d, m)
            }
            return null
        }
        function b(d, o, m, S, Y) {
            if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
                return d = d.get(m) || null,
                i(o, d, "" + S, Y);
            if (typeof S == "object" && S !== null) {
                switch (S.$$typeof) {
                case Hl:
                    return d = d.get(S.key === null ? m : S.key) || null,
                    s(o, d, S, Y);
                case Al:
                    return d = d.get(S.key === null ? m : S.key) || null,
                    g(o, d, S, Y);
                case ul:
                    return S = Xe(S),
                    b(d, o, m, S, Y)
                }
                if (X(S) || Rl(S))
                    return d = d.get(m) || null,
                    p(o, d, S, Y, null);
                if (typeof S.then == "function")
                    return b(d, o, m, au(S), Y);
                if (S.$$typeof === U)
                    return b(d, o, m, Pn(o, S), Y);
                nu(o, S)
            }
            return null
        }
        function D(d, o, m, S) {
            for (var Y = null, ol = null, R = o, F = o = 0, nl = null; R !== null && F < m.length; F++) {
                R.index > F ? (nl = R,
                R = null) : nl = R.sibling;
                var rl = y(d, R, m[F], S);
                if (rl === null) {
                    R === null && (R = nl);
                    break
                }
                l && R && rl.alternate === null && t(d, R),
                o = u(rl, o, F),
                ol === null ? Y = rl : ol.sibling = rl,
                ol = rl,
                R = nl
            }
            if (F === m.length)
                return e(d, R),
                cl && Lt(d, F),
                Y;
            if (R === null) {
                for (; F < m.length; F++)
                    R = T(d, m[F], S),
                    R !== null && (o = u(R, o, F),
                    ol === null ? Y = R : ol.sibling = R,
                    ol = R);
                return cl && Lt(d, F),
                Y
            }
            for (R = a(R); F < m.length; F++)
                nl = b(R, d, F, m[F], S),
                nl !== null && (l && nl.alternate !== null && R.delete(nl.key === null ? F : nl.key),
                o = u(nl, o, F),
                ol === null ? Y = nl : ol.sibling = nl,
                ol = nl);
            return l && R.forEach(function(Ne) {
                return t(d, Ne)
            }),
            cl && Lt(d, F),
            Y
        }
        function Q(d, o, m, S) {
            if (m == null)
                throw Error(h(151));
            for (var Y = null, ol = null, R = o, F = o = 0, nl = null, rl = m.next(); R !== null && !rl.done; F++,
            rl = m.next()) {
                R.index > F ? (nl = R,
                R = null) : nl = R.sibling;
                var Ne = y(d, R, rl.value, S);
                if (Ne === null) {
                    R === null && (R = nl);
                    break
                }
                l && R && Ne.alternate === null && t(d, R),
                o = u(Ne, o, F),
                ol === null ? Y = Ne : ol.sibling = Ne,
                ol = Ne,
                R = nl
            }
            if (rl.done)
                return e(d, R),
                cl && Lt(d, F),
                Y;
            if (R === null) {
                for (; !rl.done; F++,
                rl = m.next())
                    rl = T(d, rl.value, S),
                    rl !== null && (o = u(rl, o, F),
                    ol === null ? Y = rl : ol.sibling = rl,
                    ol = rl);
                return cl && Lt(d, F),
                Y
            }
            for (R = a(R); !rl.done; F++,
            rl = m.next())
                rl = b(R, d, F, rl.value, S),
                rl !== null && (l && rl.alternate !== null && R.delete(rl.key === null ? F : rl.key),
                o = u(rl, o, F),
                ol === null ? Y = rl : ol.sibling = rl,
                ol = rl);
            return l && R.forEach(function(em) {
                return t(d, em)
            }),
            cl && Lt(d, F),
            Y
        }
        function bl(d, o, m, S) {
            if (typeof m == "object" && m !== null && m.type === Ml && m.key === null && (m = m.props.children),
            typeof m == "object" && m !== null) {
                switch (m.$$typeof) {
                case Hl:
                    l: {
                        for (var Y = m.key; o !== null; ) {
                            if (o.key === Y) {
                                if (Y = m.type,
                                Y === Ml) {
                                    if (o.tag === 7) {
                                        e(d, o.sibling),
                                        S = n(o, m.props.children),
                                        S.return = d,
                                        d = S;
                                        break l
                                    }
                                } else if (o.elementType === Y || typeof Y == "object" && Y !== null && Y.$$typeof === ul && Xe(Y) === o.type) {
                                    e(d, o.sibling),
                                    S = n(o, m.props),
                                    Pa(S, m),
                                    S.return = d,
                                    d = S;
                                    break l
                                }
                                e(d, o);
                                break
                            } else
                                t(d, o);
                            o = o.sibling
                        }
                        m.type === Ml ? (S = Re(m.props.children, d.mode, S, m.key),
                        S.return = d,
                        d = S) : (S = Wn(m.type, m.key, m.props, null, d.mode, S),
                        Pa(S, m),
                        S.return = d,
                        d = S)
                    }
                    return c(d);
                case Al:
                    l: {
                        for (Y = m.key; o !== null; ) {
                            if (o.key === Y)
                                if (o.tag === 4 && o.stateNode.containerInfo === m.containerInfo && o.stateNode.implementation === m.implementation) {
                                    e(d, o.sibling),
                                    S = n(o, m.children || []),
                                    S.return = d,
                                    d = S;
                                    break l
                                } else {
                                    e(d, o);
                                    break
                                }
                            else
                                t(d, o);
                            o = o.sibling
                        }
                        S = Nc(m, d.mode, S),
                        S.return = d,
                        d = S
                    }
                    return c(d);
                case ul:
                    return m = Xe(m),
                    bl(d, o, m, S)
                }
                if (X(m))
                    return D(d, o, m, S);
                if (Rl(m)) {
                    if (Y = Rl(m),
                    typeof Y != "function")
                        throw Error(h(150));
                    return m = Y.call(m),
                    Q(d, o, m, S)
                }
                if (typeof m.then == "function")
                    return bl(d, o, au(m), S);
                if (m.$$typeof === U)
                    return bl(d, o, Pn(d, m), S);
                nu(d, m)
            }
            return typeof m == "string" && m !== "" || typeof m == "number" || typeof m == "bigint" ? (m = "" + m,
            o !== null && o.tag === 6 ? (e(d, o.sibling),
            S = n(o, m),
            S.return = d,
            d = S) : (e(d, o),
            S = Ac(m, d.mode, S),
            S.return = d,
            d = S),
            c(d)) : e(d, o)
        }
        return function(d, o, m, S) {
            try {
                Ia = 0;
                var Y = bl(d, o, m, S);
                return ya = null,
                Y
            } catch (R) {
                if (R === ga || R === tu)
                    throw R;
                var ol = mt(29, R, null, d.mode);
                return ol.lanes = S,
                ol.return = d,
                ol
            } finally {}
        }
    }
    var Le = Us(!0)
      , Cs = Us(!1)
      , oe = !1;
    function Gc(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Xc(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function re(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function de(l, t, e) {
        var a = l.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (dl & 2) !== 0) {
            var n = a.pending;
            return n === null ? t.next = t : (t.next = n.next,
            n.next = t),
            a.pending = t,
            t = $n(l),
            ys(l, null, e),
            t
        }
        return kn(l, a, t, e),
        $n(l)
    }
    function ln(l, t, e) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            Ef(l, e)
        }
    }
    function Qc(l, t) {
        var e = l.updateQueue
          , a = l.alternate;
        if (a !== null && (a = a.updateQueue,
        e === a)) {
            var n = null
              , u = null;
            if (e = e.firstBaseUpdate,
            e !== null) {
                do {
                    var c = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    u === null ? n = u = c : u = u.next = c,
                    e = e.next
                } while (e !== null);
                u === null ? n = u = t : u = u.next = t
            } else
                n = u = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: n,
                lastBaseUpdate: u,
                shared: a.shared,
                callbacks: a.callbacks
            },
            l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate,
        l === null ? e.firstBaseUpdate = t : l.next = t,
        e.lastBaseUpdate = t
    }
    var Lc = !1;
    function tn() {
        if (Lc) {
            var l = ma;
            if (l !== null)
                throw l
        }
    }
    function en(l, t, e, a) {
        Lc = !1;
        var n = l.updateQueue;
        oe = !1;
        var u = n.firstBaseUpdate
          , c = n.lastBaseUpdate
          , i = n.shared.pending;
        if (i !== null) {
            n.shared.pending = null;
            var s = i
              , g = s.next;
            s.next = null,
            c === null ? u = g : c.next = g,
            c = s;
            var p = l.alternate;
            p !== null && (p = p.updateQueue,
            i = p.lastBaseUpdate,
            i !== c && (i === null ? p.firstBaseUpdate = g : i.next = g,
            p.lastBaseUpdate = s))
        }
        if (u !== null) {
            var T = n.baseState;
            c = 0,
            p = g = s = null,
            i = u;
            do {
                var y = i.lane & -536870913
                  , b = y !== i.lane;
                if (b ? (al & y) === y : (a & y) === y) {
                    y !== 0 && y === ha && (Lc = !0),
                    p !== null && (p = p.next = {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var D = l
                          , Q = i;
                        y = t;
                        var bl = e;
                        switch (Q.tag) {
                        case 1:
                            if (D = Q.payload,
                            typeof D == "function") {
                                T = D.call(bl, T, y);
                                break l
                            }
                            T = D;
                            break l;
                        case 3:
                            D.flags = D.flags & -65537 | 128;
                        case 0:
                            if (D = Q.payload,
                            y = typeof D == "function" ? D.call(bl, T, y) : D,
                            y == null)
                                break l;
                            T = q({}, T, y);
                            break l;
                        case 2:
                            oe = !0
                        }
                    }
                    y = i.callback,
                    y !== null && (l.flags |= 64,
                    b && (l.flags |= 8192),
                    b = n.callbacks,
                    b === null ? n.callbacks = [y] : b.push(y))
                } else
                    b = {
                        lane: y,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    },
                    p === null ? (g = p = b,
                    s = T) : p = p.next = b,
                    c |= y;
                if (i = i.next,
                i === null) {
                    if (i = n.shared.pending,
                    i === null)
                        break;
                    b = i,
                    i = b.next,
                    b.next = null,
                    n.lastBaseUpdate = b,
                    n.shared.pending = null
                }
            } while (!0);
            p === null && (s = T),
            n.baseState = s,
            n.firstBaseUpdate = g,
            n.lastBaseUpdate = p,
            u === null && (n.shared.lanes = 0),
            ve |= c,
            l.lanes = c,
            l.memoizedState = T
        }
    }
    function Hs(l, t) {
        if (typeof l != "function")
            throw Error(h(191, l));
        l.call(t)
    }
    function Rs(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null,
            l = 0; l < e.length; l++)
                Hs(e[l], t)
    }
    var va = r(null)
      , uu = r(0);
    function qs(l, t) {
        l = Pt,
        A(uu, l),
        A(va, t),
        Pt = l | t.baseLanes
    }
    function Vc() {
        A(uu, Pt),
        A(va, va.current)
    }
    function Zc() {
        Pt = uu.current,
        E(va),
        E(uu)
    }
    var gt = r(null)
      , Nt = null;
    function he(l) {
        var t = l.alternate;
        A(Ul, Ul.current & 1),
        A(gt, l),
        Nt === null && (t === null || va.current !== null || t.memoizedState !== null) && (Nt = l)
    }
    function wc(l) {
        A(Ul, Ul.current),
        A(gt, l),
        Nt === null && (Nt = l)
    }
    function Bs(l) {
        l.tag === 22 ? (A(Ul, Ul.current),
        A(gt, l),
        Nt === null && (Nt = l)) : me()
    }
    function me() {
        A(Ul, Ul.current),
        A(gt, gt.current)
    }
    function yt(l) {
        E(gt),
        Nt === l && (Nt = null),
        E(Ul)
    }
    var Ul = r(0);
    function cu(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated,
                e === null || Fi(e) || Ii(e)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var wt = 0
      , $ = null
      , yl = null
      , Bl = null
      , iu = !1
      , ba = !1
      , Ve = !1
      , fu = 0
      , an = 0
      , xa = null
      , Kd = 0;
    function _l() {
        throw Error(h(321))
    }
    function Kc(l, t) {
        if (t === null)
            return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!ht(l[e], t[e]))
                return !1;
        return !0
    }
    function Jc(l, t, e, a, n, u) {
        return wt = u,
        $ = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        x.H = l === null || l.memoizedState === null ? So : fi,
        Ve = !1,
        u = e(a, n),
        Ve = !1,
        ba && (u = Gs(t, e, a, n)),
        Ys(l),
        u
    }
    function Ys(l) {
        x.H = cn;
        var t = yl !== null && yl.next !== null;
        if (wt = 0,
        Bl = yl = $ = null,
        iu = !1,
        an = 0,
        xa = null,
        t)
            throw Error(h(300));
        l === null || Yl || (l = l.dependencies,
        l !== null && In(l) && (Yl = !0))
    }
    function Gs(l, t, e, a) {
        $ = l;
        var n = 0;
        do {
            if (ba && (xa = null),
            an = 0,
            ba = !1,
            25 <= n)
                throw Error(h(301));
            if (n += 1,
            Bl = yl = null,
            l.updateQueue != null) {
                var u = l.updateQueue;
                u.lastEffect = null,
                u.events = null,
                u.stores = null,
                u.memoCache != null && (u.memoCache.index = 0)
            }
            x.H = zo,
            u = t(e, a)
        } while (ba);
        return u
    }
    function Jd() {
        var l = x.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? nn(t) : t,
        l = l.useState()[0],
        (yl !== null ? yl.memoizedState : null) !== l && ($.flags |= 1024),
        t
    }
    function kc() {
        var l = fu !== 0;
        return fu = 0,
        l
    }
    function $c(l, t, e) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~e
    }
    function Wc(l) {
        if (iu) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            iu = !1
        }
        wt = 0,
        Bl = yl = $ = null,
        ba = !1,
        an = fu = 0,
        xa = null
    }
    function tt() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Bl === null ? $.memoizedState = Bl = l : Bl = Bl.next = l,
        Bl
    }
    function Cl() {
        if (yl === null) {
            var l = $.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = yl.next;
        var t = Bl === null ? $.memoizedState : Bl.next;
        if (t !== null)
            Bl = t,
            yl = l;
        else {
            if (l === null)
                throw $.alternate === null ? Error(h(467)) : Error(h(310));
            yl = l,
            l = {
                memoizedState: yl.memoizedState,
                baseState: yl.baseState,
                baseQueue: yl.baseQueue,
                queue: yl.queue,
                next: null
            },
            Bl === null ? $.memoizedState = Bl = l : Bl = Bl.next = l
        }
        return Bl
    }
    function su() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function nn(l) {
        var t = an;
        return an += 1,
        xa === null && (xa = []),
        l = _s(xa, l, t),
        t = $,
        (Bl === null ? t.memoizedState : Bl.next) === null && (t = t.alternate,
        x.H = t === null || t.memoizedState === null ? So : fi),
        l
    }
    function ou(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return nn(l);
            if (l.$$typeof === U)
                return kl(l)
        }
        throw Error(h(438, String(l)))
    }
    function Fc(l) {
        var t = null
          , e = $.updateQueue;
        if (e !== null && (t = e.memoCache),
        t == null) {
            var a = $.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(n) {
                    return n.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        e === null && (e = su(),
        $.updateQueue = e),
        e.memoCache = t,
        e = t.data[t.index],
        e === void 0)
            for (e = t.data[t.index] = Array(l),
            a = 0; a < l; a++)
                e[a] = Zl;
        return t.index++,
        e
    }
    function Kt(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function ru(l) {
        var t = Cl();
        return Ic(t, yl, l)
    }
    function Ic(l, t, e) {
        var a = l.queue;
        if (a === null)
            throw Error(h(311));
        a.lastRenderedReducer = e;
        var n = l.baseQueue
          , u = a.pending;
        if (u !== null) {
            if (n !== null) {
                var c = n.next;
                n.next = u.next,
                u.next = c
            }
            t.baseQueue = n = u,
            a.pending = null
        }
        if (u = l.baseState,
        n === null)
            l.memoizedState = u;
        else {
            t = n.next;
            var i = c = null
              , s = null
              , g = t
              , p = !1;
            do {
                var T = g.lane & -536870913;
                if (T !== g.lane ? (al & T) === T : (wt & T) === T) {
                    var y = g.revertLane;
                    if (y === 0)
                        s !== null && (s = s.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        }),
                        T === ha && (p = !0);
                    else if ((wt & y) === y) {
                        g = g.next,
                        y === ha && (p = !0);
                        continue
                    } else
                        T = {
                            lane: 0,
                            revertLane: g.revertLane,
                            gesture: null,
                            action: g.action,
                            hasEagerState: g.hasEagerState,
                            eagerState: g.eagerState,
                            next: null
                        },
                        s === null ? (i = s = T,
                        c = u) : s = s.next = T,
                        $.lanes |= y,
                        ve |= y;
                    T = g.action,
                    Ve && e(u, T),
                    u = g.hasEagerState ? g.eagerState : e(u, T)
                } else
                    y = {
                        lane: T,
                        revertLane: g.revertLane,
                        gesture: g.gesture,
                        action: g.action,
                        hasEagerState: g.hasEagerState,
                        eagerState: g.eagerState,
                        next: null
                    },
                    s === null ? (i = s = y,
                    c = u) : s = s.next = y,
                    $.lanes |= T,
                    ve |= T;
                g = g.next
            } while (g !== null && g !== t);
            if (s === null ? c = u : s.next = i,
            !ht(u, l.memoizedState) && (Yl = !0,
            p && (e = ma,
            e !== null)))
                throw e;
            l.memoizedState = u,
            l.baseState = c,
            l.baseQueue = s,
            a.lastRenderedState = u
        }
        return n === null && (a.lanes = 0),
        [l.memoizedState, a.dispatch]
    }
    function Pc(l) {
        var t = Cl()
          , e = t.queue;
        if (e === null)
            throw Error(h(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch
          , n = e.pending
          , u = t.memoizedState;
        if (n !== null) {
            e.pending = null;
            var c = n = n.next;
            do
                u = l(u, c.action),
                c = c.next;
            while (c !== n);
            ht(u, t.memoizedState) || (Yl = !0),
            t.memoizedState = u,
            t.baseQueue === null && (t.baseState = u),
            e.lastRenderedState = u
        }
        return [u, a]
    }
    function Xs(l, t, e) {
        var a = $
          , n = Cl()
          , u = cl;
        if (u) {
            if (e === void 0)
                throw Error(h(407));
            e = e()
        } else
            e = t();
        var c = !ht((yl || n).memoizedState, e);
        if (c && (n.memoizedState = e,
        Yl = !0),
        n = n.queue,
        ei(Vs.bind(null, a, n, l), [l]),
        n.getSnapshot !== t || c || Bl !== null && Bl.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            pa(9, {
                destroy: void 0
            }, Ls.bind(null, a, n, e, t), null),
            pl === null)
                throw Error(h(349));
            u || (wt & 127) !== 0 || Qs(a, t, e)
        }
        return e
    }
    function Qs(l, t, e) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: e
        },
        t = $.updateQueue,
        t === null ? (t = su(),
        $.updateQueue = t,
        t.stores = [l]) : (e = t.stores,
        e === null ? t.stores = [l] : e.push(l))
    }
    function Ls(l, t, e, a) {
        t.value = e,
        t.getSnapshot = a,
        Zs(t) && ws(l)
    }
    function Vs(l, t, e) {
        return e(function() {
            Zs(t) && ws(l)
        })
    }
    function Zs(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !ht(l, e)
        } catch {
            return !0
        }
    }
    function ws(l) {
        var t = He(l, 2);
        t !== null && st(t, l, 2)
    }
    function li(l) {
        var t = tt();
        if (typeof l == "function") {
            var e = l;
            if (l = e(),
            Ve) {
                ae(!0);
                try {
                    e()
                } finally {
                    ae(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Kt,
            lastRenderedState: l
        },
        t
    }
    function Ks(l, t, e, a) {
        return l.baseState = e,
        Ic(l, yl, typeof a == "function" ? a : Kt)
    }
    function kd(l, t, e, a, n) {
        if (mu(l))
            throw Error(h(485));
        if (l = t.action,
        l !== null) {
            var u = {
                payload: n,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    u.listeners.push(c)
                }
            };
            x.T !== null ? e(!0) : u.isTransition = !1,
            a(u),
            e = t.pending,
            e === null ? (u.next = t.pending = u,
            Js(t, u)) : (u.next = e.next,
            t.pending = e.next = u)
        }
    }
    function Js(l, t) {
        var e = t.action
          , a = t.payload
          , n = l.state;
        if (t.isTransition) {
            var u = x.T
              , c = {};
            x.T = c;
            try {
                var i = e(n, a)
                  , s = x.S;
                s !== null && s(c, i),
                ks(l, t, i)
            } catch (g) {
                ti(l, t, g)
            } finally {
                u !== null && c.types !== null && (u.types = c.types),
                x.T = u
            }
        } else
            try {
                u = e(n, a),
                ks(l, t, u)
            } catch (g) {
                ti(l, t, g)
            }
    }
    function ks(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            $s(l, t, a)
        }, function(a) {
            return ti(l, t, a)
        }) : $s(l, t, e)
    }
    function $s(l, t, e) {
        t.status = "fulfilled",
        t.value = e,
        Ws(t),
        l.state = e,
        t = l.pending,
        t !== null && (e = t.next,
        e === t ? l.pending = null : (e = e.next,
        t.next = e,
        Js(l, e)))
    }
    function ti(l, t, e) {
        var a = l.pending;
        if (l.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = e,
                Ws(t),
                t = t.next;
            while (t !== a)
        }
        l.action = null
    }
    function Ws(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function Fs(l, t) {
        return t
    }
    function Is(l, t) {
        if (cl) {
            var e = pl.formState;
            if (e !== null) {
                l: {
                    var a = $;
                    if (cl) {
                        if (zl) {
                            t: {
                                for (var n = zl, u = At; n.nodeType !== 8; ) {
                                    if (!u) {
                                        n = null;
                                        break t
                                    }
                                    if (n = Mt(n.nextSibling),
                                    n === null) {
                                        n = null;
                                        break t
                                    }
                                }
                                u = n.data,
                                n = u === "F!" || u === "F" ? n : null
                            }
                            if (n) {
                                zl = Mt(n.nextSibling),
                                a = n.data === "F!";
                                break l
                            }
                        }
                        fe(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = tt(),
        e.memoizedState = e.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Fs,
            lastRenderedState: t
        },
        e.queue = a,
        e = bo.bind(null, $, a),
        a.dispatch = e,
        a = li(!1),
        u = ii.bind(null, $, !1, a.queue),
        a = tt(),
        n = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        a.queue = n,
        e = kd.bind(null, $, n, u, e),
        n.dispatch = e,
        a.memoizedState = l,
        [t, e, !1]
    }
    function Ps(l) {
        var t = Cl();
        return lo(t, yl, l)
    }
    function lo(l, t, e) {
        if (t = Ic(l, t, Fs)[0],
        l = ru(Kt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = nn(t)
            } catch (c) {
                throw c === ga ? tu : c
            }
        else
            a = t;
        t = Cl();
        var n = t.queue
          , u = n.dispatch;
        return e !== t.memoizedState && ($.flags |= 2048,
        pa(9, {
            destroy: void 0
        }, $d.bind(null, n, e), null)),
        [a, u, l]
    }
    function $d(l, t) {
        l.action = t
    }
    function to(l) {
        var t = Cl()
          , e = yl;
        if (e !== null)
            return lo(t, e, l);
        Cl(),
        t = t.memoizedState,
        e = Cl();
        var a = e.queue.dispatch;
        return e.memoizedState = l,
        [t, a, !1]
    }
    function pa(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        },
        t = $.updateQueue,
        t === null && (t = su(),
        $.updateQueue = t),
        e = t.lastEffect,
        e === null ? t.lastEffect = l.next = l : (a = e.next,
        e.next = l,
        l.next = a,
        t.lastEffect = l),
        l
    }
    function eo() {
        return Cl().memoizedState
    }
    function du(l, t, e, a) {
        var n = tt();
        $.flags |= l,
        n.memoizedState = pa(1 | t, {
            destroy: void 0
        }, e, a === void 0 ? null : a)
    }
    function hu(l, t, e, a) {
        var n = Cl();
        a = a === void 0 ? null : a;
        var u = n.memoizedState.inst;
        yl !== null && a !== null && Kc(a, yl.memoizedState.deps) ? n.memoizedState = pa(t, u, e, a) : ($.flags |= l,
        n.memoizedState = pa(1 | t, u, e, a))
    }
    function ao(l, t) {
        du(8390656, 8, l, t)
    }
    function ei(l, t) {
        hu(2048, 8, l, t)
    }
    function Wd(l) {
        $.flags |= 4;
        var t = $.updateQueue;
        if (t === null)
            t = su(),
            $.updateQueue = t,
            t.events = [l];
        else {
            var e = t.events;
            e === null ? t.events = [l] : e.push(l)
        }
    }
    function no(l) {
        var t = Cl().memoizedState;
        return Wd({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((dl & 2) !== 0)
                throw Error(h(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function uo(l, t) {
        return hu(4, 2, l, t)
    }
    function co(l, t) {
        return hu(4, 4, l, t)
    }
    function io(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function fo(l, t, e) {
        e = e != null ? e.concat([l]) : null,
        hu(4, 4, io.bind(null, t, l), e)
    }
    function ai() {}
    function so(l, t) {
        var e = Cl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Kc(t, a[1]) ? a[0] : (e.memoizedState = [l, t],
        l)
    }
    function oo(l, t) {
        var e = Cl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Kc(t, a[1]))
            return a[0];
        if (a = l(),
        Ve) {
            ae(!0);
            try {
                l()
            } finally {
                ae(!1)
            }
        }
        return e.memoizedState = [a, t],
        a
    }
    function ni(l, t, e) {
        return e === void 0 || (wt & 1073741824) !== 0 && (al & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e,
        l = dr(),
        $.lanes |= l,
        ve |= l,
        e)
    }
    function ro(l, t, e, a) {
        return ht(e, t) ? e : va.current !== null ? (l = ni(l, e, a),
        ht(l, t) || (Yl = !0),
        l) : (wt & 42) === 0 || (wt & 1073741824) !== 0 && (al & 261930) === 0 ? (Yl = !0,
        l.memoizedState = e) : (l = dr(),
        $.lanes |= l,
        ve |= l,
        t)
    }
    function ho(l, t, e, a, n) {
        var u = j.p;
        j.p = u !== 0 && 8 > u ? u : 8;
        var c = x.T
          , i = {};
        x.T = i,
        ii(l, !1, t, e);
        try {
            var s = n()
              , g = x.S;
            if (g !== null && g(i, s),
            s !== null && typeof s == "object" && typeof s.then == "function") {
                var p = wd(s, a);
                un(l, t, p, xt(l))
            } else
                un(l, t, a, xt(l))
        } catch (T) {
            un(l, t, {
                then: function() {},
                status: "rejected",
                reason: T
            }, xt())
        } finally {
            j.p = u,
            c !== null && i.types !== null && (c.types = i.types),
            x.T = c
        }
    }
    function Fd() {}
    function ui(l, t, e, a) {
        if (l.tag !== 5)
            throw Error(h(476));
        var n = mo(l).queue;
        ho(l, n, t, B, e === null ? Fd : function() {
            return go(l),
            e(a)
        }
        )
    }
    function mo(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: B,
            baseState: B,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Kt,
                lastRenderedState: B
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Kt,
                lastRenderedState: e
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function go(l) {
        var t = mo(l);
        t.next === null && (t = l.alternate.memoizedState),
        un(l, t.next.queue, {}, xt())
    }
    function ci() {
        return kl(Tn)
    }
    function yo() {
        return Cl().memoizedState
    }
    function vo() {
        return Cl().memoizedState
    }
    function Id(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var e = xt();
                l = re(e);
                var a = de(t, l, e);
                a !== null && (st(a, t, e),
                ln(a, t, e)),
                t = {
                    cache: Rc()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function Pd(l, t, e) {
        var a = xt();
        e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        mu(l) ? xo(t, e) : (e = Ec(l, t, e, a),
        e !== null && (st(e, l, a),
        po(e, t, a)))
    }
    function bo(l, t, e) {
        var a = xt();
        un(l, t, e, a)
    }
    function un(l, t, e, a) {
        var n = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (mu(l))
            xo(t, n);
        else {
            var u = l.alternate;
            if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer,
            u !== null))
                try {
                    var c = t.lastRenderedState
                      , i = u(c, e);
                    if (n.hasEagerState = !0,
                    n.eagerState = i,
                    ht(i, c))
                        return kn(l, t, n, 0),
                        pl === null && Jn(),
                        !1
                } catch {} finally {}
            if (e = Ec(l, t, n, a),
            e !== null)
                return st(e, l, a),
                po(e, t, a),
                !0
        }
        return !1
    }
    function ii(l, t, e, a) {
        if (a = {
            lane: 2,
            revertLane: Gi(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        mu(l)) {
            if (t)
                throw Error(h(479))
        } else
            t = Ec(l, e, a, 2),
            t !== null && st(t, l, 2)
    }
    function mu(l) {
        var t = l.alternate;
        return l === $ || t !== null && t === $
    }
    function xo(l, t) {
        ba = iu = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next,
        e.next = t),
        l.pending = t
    }
    function po(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            Ef(l, e)
        }
    }
    var cn = {
        readContext: kl,
        use: ou,
        useCallback: _l,
        useContext: _l,
        useEffect: _l,
        useImperativeHandle: _l,
        useLayoutEffect: _l,
        useInsertionEffect: _l,
        useMemo: _l,
        useReducer: _l,
        useRef: _l,
        useState: _l,
        useDebugValue: _l,
        useDeferredValue: _l,
        useTransition: _l,
        useSyncExternalStore: _l,
        useId: _l,
        useHostTransitionStatus: _l,
        useFormState: _l,
        useActionState: _l,
        useOptimistic: _l,
        useMemoCache: _l,
        useCacheRefresh: _l
    };
    cn.useEffectEvent = _l;
    var So = {
        readContext: kl,
        use: ou,
        useCallback: function(l, t) {
            return tt().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: kl,
        useEffect: ao,
        useImperativeHandle: function(l, t, e) {
            e = e != null ? e.concat([l]) : null,
            du(4194308, 4, io.bind(null, t, l), e)
        },
        useLayoutEffect: function(l, t) {
            return du(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            du(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var e = tt();
            t = t === void 0 ? null : t;
            var a = l();
            if (Ve) {
                ae(!0);
                try {
                    l()
                } finally {
                    ae(!1)
                }
            }
            return e.memoizedState = [a, t],
            a
        },
        useReducer: function(l, t, e) {
            var a = tt();
            if (e !== void 0) {
                var n = e(t);
                if (Ve) {
                    ae(!0);
                    try {
                        e(t)
                    } finally {
                        ae(!1)
                    }
                }
            } else
                n = t;
            return a.memoizedState = a.baseState = n,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: n
            },
            a.queue = l,
            l = l.dispatch = Pd.bind(null, $, l),
            [a.memoizedState, l]
        },
        useRef: function(l) {
            var t = tt();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = li(l);
            var t = l.queue
              , e = bo.bind(null, $, t);
            return t.dispatch = e,
            [l.memoizedState, e]
        },
        useDebugValue: ai,
        useDeferredValue: function(l, t) {
            var e = tt();
            return ni(e, l, t)
        },
        useTransition: function() {
            var l = li(!1);
            return l = ho.bind(null, $, l.queue, !0, !1),
            tt().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, e) {
            var a = $
              , n = tt();
            if (cl) {
                if (e === void 0)
                    throw Error(h(407));
                e = e()
            } else {
                if (e = t(),
                pl === null)
                    throw Error(h(349));
                (al & 127) !== 0 || Qs(a, t, e)
            }
            n.memoizedState = e;
            var u = {
                value: e,
                getSnapshot: t
            };
            return n.queue = u,
            ao(Vs.bind(null, a, u, l), [l]),
            a.flags |= 2048,
            pa(9, {
                destroy: void 0
            }, Ls.bind(null, a, u, e, t), null),
            e
        },
        useId: function() {
            var l = tt()
              , t = pl.identifierPrefix;
            if (cl) {
                var e = Rt
                  , a = Ht;
                e = (a & ~(1 << 32 - dt(a) - 1)).toString(32) + e,
                t = "_" + t + "R_" + e,
                e = fu++,
                0 < e && (t += "H" + e.toString(32)),
                t += "_"
            } else
                e = Kd++,
                t = "_" + t + "r_" + e.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: ci,
        useFormState: Is,
        useActionState: Is,
        useOptimistic: function(l) {
            var t = tt();
            t.memoizedState = t.baseState = l;
            var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = e,
            t = ii.bind(null, $, !0, e),
            e.dispatch = t,
            [l, t]
        },
        useMemoCache: Fc,
        useCacheRefresh: function() {
            return tt().memoizedState = Id.bind(null, $)
        },
        useEffectEvent: function(l) {
            var t = tt()
              , e = {
                impl: l
            };
            return t.memoizedState = e,
            function() {
                if ((dl & 2) !== 0)
                    throw Error(h(440));
                return e.impl.apply(void 0, arguments)
            }
        }
    }
      , fi = {
        readContext: kl,
        use: ou,
        useCallback: so,
        useContext: kl,
        useEffect: ei,
        useImperativeHandle: fo,
        useInsertionEffect: uo,
        useLayoutEffect: co,
        useMemo: oo,
        useReducer: ru,
        useRef: eo,
        useState: function() {
            return ru(Kt)
        },
        useDebugValue: ai,
        useDeferredValue: function(l, t) {
            var e = Cl();
            return ro(e, yl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = ru(Kt)[0]
              , t = Cl().memoizedState;
            return [typeof l == "boolean" ? l : nn(l), t]
        },
        useSyncExternalStore: Xs,
        useId: yo,
        useHostTransitionStatus: ci,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function(l, t) {
            var e = Cl();
            return Ks(e, yl, l, t)
        },
        useMemoCache: Fc,
        useCacheRefresh: vo
    };
    fi.useEffectEvent = no;
    var zo = {
        readContext: kl,
        use: ou,
        useCallback: so,
        useContext: kl,
        useEffect: ei,
        useImperativeHandle: fo,
        useInsertionEffect: uo,
        useLayoutEffect: co,
        useMemo: oo,
        useReducer: Pc,
        useRef: eo,
        useState: function() {
            return Pc(Kt)
        },
        useDebugValue: ai,
        useDeferredValue: function(l, t) {
            var e = Cl();
            return yl === null ? ni(e, l, t) : ro(e, yl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = Pc(Kt)[0]
              , t = Cl().memoizedState;
            return [typeof l == "boolean" ? l : nn(l), t]
        },
        useSyncExternalStore: Xs,
        useId: yo,
        useHostTransitionStatus: ci,
        useFormState: to,
        useActionState: to,
        useOptimistic: function(l, t) {
            var e = Cl();
            return yl !== null ? Ks(e, yl, l, t) : (e.baseState = l,
            [l, e.queue.dispatch])
        },
        useMemoCache: Fc,
        useCacheRefresh: vo
    };
    zo.useEffectEvent = no;
    function si(l, t, e, a) {
        t = l.memoizedState,
        e = e(a, t),
        e = e == null ? t : q({}, t, e),
        l.memoizedState = e,
        l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var oi = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = xt()
              , n = re(a);
            n.payload = t,
            e != null && (n.callback = e),
            t = de(l, n, a),
            t !== null && (st(t, l, a),
            ln(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = xt()
              , n = re(a);
            n.tag = 1,
            n.payload = t,
            e != null && (n.callback = e),
            t = de(l, n, a),
            t !== null && (st(t, l, a),
            ln(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = xt()
              , a = re(e);
            a.tag = 2,
            t != null && (a.callback = t),
            t = de(l, a, e),
            t !== null && (st(t, l, e),
            ln(t, l, e))
        }
    };
    function To(l, t, e, a, n, u, c) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !Ka(e, a) || !Ka(n, u) : !0
    }
    function Eo(l, t, e, a) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
        t.state !== l && oi.enqueueReplaceState(t, t.state, null)
    }
    function Ze(l, t) {
        var e = t;
        if ("ref"in t) {
            e = {};
            for (var a in t)
                a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = q({}, e));
            for (var n in l)
                e[n] === void 0 && (e[n] = l[n])
        }
        return e
    }
    function jo(l) {
        Kn(l)
    }
    function Ao(l) {
        console.error(l)
    }
    function No(l) {
        Kn(l)
    }
    function gu(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Mo(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (n) {
            setTimeout(function() {
                throw n
            })
        }
    }
    function ri(l, t, e) {
        return e = re(e),
        e.tag = 3,
        e.payload = {
            element: null
        },
        e.callback = function() {
            gu(l, t)
        }
        ,
        e
    }
    function _o(l) {
        return l = re(l),
        l.tag = 3,
        l
    }
    function Oo(l, t, e, a) {
        var n = e.type.getDerivedStateFromError;
        if (typeof n == "function") {
            var u = a.value;
            l.payload = function() {
                return n(u)
            }
            ,
            l.callback = function() {
                Mo(t, e, a)
            }
        }
        var c = e.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
            Mo(t, e, a),
            typeof n != "function" && (be === null ? be = new Set([this]) : be.add(this));
            var i = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: i !== null ? i : ""
            })
        }
        )
    }
    function lh(l, t, e, a, n) {
        if (e.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate,
            t !== null && da(t, e, n, !0),
            e = gt.current,
            e !== null) {
                switch (e.tag) {
                case 31:
                case 13:
                    return Nt === null ? Nu() : e.alternate === null && Ol === 0 && (Ol = 3),
                    e.flags &= -257,
                    e.flags |= 65536,
                    e.lanes = n,
                    a === eu ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? e.updateQueue = new Set([a]) : t.add(a),
                    qi(l, a, n)),
                    !1;
                case 22:
                    return e.flags |= 65536,
                    a === eu ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    e.updateQueue = t) : (e = t.retryQueue,
                    e === null ? t.retryQueue = new Set([a]) : e.add(a)),
                    qi(l, a, n)),
                    !1
                }
                throw Error(h(435, e.tag))
            }
            return qi(l, a, n),
            Nu(),
            !1
        }
        if (cl)
            return t = gt.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = n,
            a !== Oc && (l = Error(h(422), {
                cause: a
            }),
            $a(Tt(l, e)))) : (a !== Oc && (t = Error(h(423), {
                cause: a
            }),
            $a(Tt(t, e))),
            l = l.current.alternate,
            l.flags |= 65536,
            n &= -n,
            l.lanes |= n,
            a = Tt(a, e),
            n = ri(l.stateNode, a, n),
            Qc(l, n),
            Ol !== 4 && (Ol = 2)),
            !1;
        var u = Error(h(520), {
            cause: a
        });
        if (u = Tt(u, e),
        gn === null ? gn = [u] : gn.push(u),
        Ol !== 4 && (Ol = 2),
        t === null)
            return !0;
        a = Tt(a, e),
        e = t;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536,
                l = n & -n,
                e.lanes |= l,
                l = ri(e.stateNode, a, l),
                Qc(e, l),
                !1;
            case 1:
                if (t = e.type,
                u = e.stateNode,
                (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (be === null || !be.has(u))))
                    return e.flags |= 65536,
                    n &= -n,
                    e.lanes |= n,
                    n = _o(n),
                    Oo(n, l, e, a),
                    Qc(e, n),
                    !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var di = Error(h(461))
      , Yl = !1;
    function $l(l, t, e, a) {
        t.child = l === null ? Cs(t, null, e, a) : Le(t, l.child, e, a)
    }
    function Do(l, t, e, a, n) {
        e = e.render;
        var u = t.ref;
        if ("ref"in a) {
            var c = {};
            for (var i in a)
                i !== "ref" && (c[i] = a[i])
        } else
            c = a;
        return Ye(t),
        a = Jc(l, t, e, c, u, n),
        i = kc(),
        l !== null && !Yl ? ($c(l, t, n),
        Jt(l, t, n)) : (cl && i && Mc(t),
        t.flags |= 1,
        $l(l, t, a, n),
        t.child)
    }
    function Uo(l, t, e, a, n) {
        if (l === null) {
            var u = e.type;
            return typeof u == "function" && !jc(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15,
            t.type = u,
            Co(l, t, u, a, n)) : (l = Wn(e.type, null, a, t, t.mode, n),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (u = l.child,
        !pi(l, n)) {
            var c = u.memoizedProps;
            if (e = e.compare,
            e = e !== null ? e : Ka,
            e(c, a) && l.ref === t.ref)
                return Jt(l, t, n)
        }
        return t.flags |= 1,
        l = Qt(u, a),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function Co(l, t, e, a, n) {
        if (l !== null) {
            var u = l.memoizedProps;
            if (Ka(u, a) && l.ref === t.ref)
                if (Yl = !1,
                t.pendingProps = a = u,
                pi(l, n))
                    (l.flags & 131072) !== 0 && (Yl = !0);
                else
                    return t.lanes = l.lanes,
                    Jt(l, t, n)
        }
        return hi(l, t, e, a, n)
    }
    function Ho(l, t, e, a) {
        var n = a.children
          , u = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (u = u !== null ? u.baseLanes | e : e,
                l !== null) {
                    for (a = t.child = l.child,
                    n = 0; a !== null; )
                        n = n | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = n & ~u
                } else
                    a = 0,
                    t.child = null;
                return Ro(l, t, u, e, a)
            }
            if ((e & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && lu(t, u !== null ? u.cachePool : null),
                u !== null ? qs(t, u) : Vc(),
                Bs(t);
            else
                return a = t.lanes = 536870912,
                Ro(l, t, u !== null ? u.baseLanes | e : e, e, a)
        } else
            u !== null ? (lu(t, u.cachePool),
            qs(t, u),
            me(),
            t.memoizedState = null) : (l !== null && lu(t, null),
            Vc(),
            me());
        return $l(l, t, n, e),
        t.child
    }
    function fn(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function Ro(l, t, e, a, n) {
        var u = Bc();
        return u = u === null ? null : {
            parent: ql._currentValue,
            pool: u
        },
        t.memoizedState = {
            baseLanes: e,
            cachePool: u
        },
        l !== null && lu(t, null),
        Vc(),
        Bs(t),
        l !== null && da(l, t, a, !0),
        t.childLanes = n,
        null
    }
    function yu(l, t) {
        return t = bu({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function qo(l, t, e) {
        return Le(t, l.child, null, e),
        l = yu(t, t.pendingProps),
        l.flags |= 2,
        yt(t),
        t.memoizedState = null,
        l
    }
    function th(l, t, e) {
        var a = t.pendingProps
          , n = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if (cl) {
                if (a.mode === "hidden")
                    return l = yu(t, a),
                    t.lanes = 536870912,
                    fn(null, l);
                if (wc(t),
                (l = zl) ? (l = kr(l, At),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ce !== null ? {
                        id: Ht,
                        overflow: Rt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = bs(l),
                e.return = t,
                t.child = e,
                Jl = t,
                zl = null)) : l = null,
                l === null)
                    throw fe(t);
                return t.lanes = 536870912,
                null
            }
            return yu(t, a)
        }
        var u = l.memoizedState;
        if (u !== null) {
            var c = u.dehydrated;
            if (wc(t),
            n)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = qo(l, t, e);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(h(558));
            else if (Yl || da(l, t, e, !1),
            n = (e & l.childLanes) !== 0,
            Yl || n) {
                if (a = pl,
                a !== null && (c = jf(a, e),
                c !== 0 && c !== u.retryLane))
                    throw u.retryLane = c,
                    He(l, c),
                    st(a, l, c),
                    di;
                Nu(),
                t = qo(l, t, e)
            } else
                l = u.treeContext,
                zl = Mt(c.nextSibling),
                Jl = t,
                cl = !0,
                ie = null,
                At = !1,
                l !== null && Ss(t, l),
                t = yu(t, a),
                t.flags |= 4096;
            return t
        }
        return l = Qt(l.child, {
            mode: a.mode,
            children: a.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function vu(l, t) {
        var e = t.ref;
        if (e === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(h(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }
    function hi(l, t, e, a, n) {
        return Ye(t),
        e = Jc(l, t, e, a, void 0, n),
        a = kc(),
        l !== null && !Yl ? ($c(l, t, n),
        Jt(l, t, n)) : (cl && a && Mc(t),
        t.flags |= 1,
        $l(l, t, e, n),
        t.child)
    }
    function Bo(l, t, e, a, n, u) {
        return Ye(t),
        t.updateQueue = null,
        e = Gs(t, a, e, n),
        Ys(l),
        a = kc(),
        l !== null && !Yl ? ($c(l, t, u),
        Jt(l, t, u)) : (cl && a && Mc(t),
        t.flags |= 1,
        $l(l, t, e, u),
        t.child)
    }
    function Yo(l, t, e, a, n) {
        if (Ye(t),
        t.stateNode === null) {
            var u = fa
              , c = e.contextType;
            typeof c == "object" && c !== null && (u = kl(c)),
            u = new e(a,u),
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            u.updater = oi,
            t.stateNode = u,
            u._reactInternals = t,
            u = t.stateNode,
            u.props = a,
            u.state = t.memoizedState,
            u.refs = {},
            Gc(t),
            c = e.contextType,
            u.context = typeof c == "object" && c !== null ? kl(c) : fa,
            u.state = t.memoizedState,
            c = e.getDerivedStateFromProps,
            typeof c == "function" && (si(t, e, c, a),
            u.state = t.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state,
            typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
            c !== u.state && oi.enqueueReplaceState(u, u.state, null),
            en(t, a, u, n),
            tn(),
            u.state = t.memoizedState),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (l === null) {
            u = t.stateNode;
            var i = t.memoizedProps
              , s = Ze(e, i);
            u.props = s;
            var g = u.context
              , p = e.contextType;
            c = fa,
            typeof p == "object" && p !== null && (c = kl(p));
            var T = e.getDerivedStateFromProps;
            p = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function",
            i = t.pendingProps !== i,
            p || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i || g !== c) && Eo(t, u, a, c),
            oe = !1;
            var y = t.memoizedState;
            u.state = y,
            en(t, a, u, n),
            tn(),
            g = t.memoizedState,
            i || y !== g || oe ? (typeof T == "function" && (si(t, e, T, a),
            g = t.memoizedState),
            (s = oe || To(t, e, s, a, y, g, c)) ? (p || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(),
            typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()),
            typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = g),
            u.props = a,
            u.state = g,
            u.context = c,
            a = s) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            u = t.stateNode,
            Xc(l, t),
            c = t.memoizedProps,
            p = Ze(e, c),
            u.props = p,
            T = t.pendingProps,
            y = u.context,
            g = e.contextType,
            s = fa,
            typeof g == "object" && g !== null && (s = kl(g)),
            i = e.getDerivedStateFromProps,
            (g = typeof i == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== T || y !== s) && Eo(t, u, a, s),
            oe = !1,
            y = t.memoizedState,
            u.state = y,
            en(t, a, u, n),
            tn();
            var b = t.memoizedState;
            c !== T || y !== b || oe || l !== null && l.dependencies !== null && In(l.dependencies) ? (typeof i == "function" && (si(t, e, i, a),
            b = t.memoizedState),
            (p = oe || To(t, e, p, a, y, b, s) || l !== null && l.dependencies !== null && In(l.dependencies)) ? (g || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, s),
            typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, b, s)),
            typeof u.componentDidUpdate == "function" && (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = b),
            u.props = a,
            u.state = b,
            u.context = s,
            a = p) : (typeof u.componentDidUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return u = a,
        vu(l, t),
        a = (t.flags & 128) !== 0,
        u || a ? (u = t.stateNode,
        e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(),
        t.flags |= 1,
        l !== null && a ? (t.child = Le(t, l.child, null, n),
        t.child = Le(t, null, e, n)) : $l(l, t, e, n),
        t.memoizedState = u.state,
        l = t.child) : l = Jt(l, t, n),
        l
    }
    function Go(l, t, e, a) {
        return qe(),
        t.flags |= 256,
        $l(l, t, e, a),
        t.child
    }
    var mi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function gi(l) {
        return {
            baseLanes: l,
            cachePool: Ns()
        }
    }
    function yi(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0,
        t && (l |= bt),
        l
    }
    function Xo(l, t, e) {
        var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, c;
        if ((c = u) || (c = l !== null && l.memoizedState === null ? !1 : (Ul.current & 2) !== 0),
        c && (n = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if (cl) {
                if (n ? he(t) : me(),
                (l = zl) ? (l = kr(l, At),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ce !== null ? {
                        id: Ht,
                        overflow: Rt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = bs(l),
                e.return = t,
                t.child = e,
                Jl = t,
                zl = null)) : l = null,
                l === null)
                    throw fe(t);
                return Ii(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var i = a.children;
            return a = a.fallback,
            n ? (me(),
            n = t.mode,
            i = bu({
                mode: "hidden",
                children: i
            }, n),
            a = Re(a, n, e, null),
            i.return = t,
            a.return = t,
            i.sibling = a,
            t.child = i,
            a = t.child,
            a.memoizedState = gi(e),
            a.childLanes = yi(l, c, e),
            t.memoizedState = mi,
            fn(null, a)) : (he(t),
            vi(t, i))
        }
        var s = l.memoizedState;
        if (s !== null && (i = s.dehydrated,
        i !== null)) {
            if (u)
                t.flags & 256 ? (he(t),
                t.flags &= -257,
                t = bi(l, t, e)) : t.memoizedState !== null ? (me(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (me(),
                i = a.fallback,
                n = t.mode,
                a = bu({
                    mode: "visible",
                    children: a.children
                }, n),
                i = Re(i, n, e, null),
                i.flags |= 2,
                a.return = t,
                i.return = t,
                a.sibling = i,
                t.child = a,
                Le(t, l.child, null, e),
                a = t.child,
                a.memoizedState = gi(e),
                a.childLanes = yi(l, c, e),
                t.memoizedState = mi,
                t = fn(null, a));
            else if (he(t),
            Ii(i)) {
                if (c = i.nextSibling && i.nextSibling.dataset,
                c)
                    var g = c.dgst;
                c = g,
                a = Error(h(419)),
                a.stack = "",
                a.digest = c,
                $a({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = bi(l, t, e)
            } else if (Yl || da(l, t, e, !1),
            c = (e & l.childLanes) !== 0,
            Yl || c) {
                if (c = pl,
                c !== null && (a = jf(c, e),
                a !== 0 && a !== s.retryLane))
                    throw s.retryLane = a,
                    He(l, a),
                    st(c, l, a),
                    di;
                Fi(i) || Nu(),
                t = bi(l, t, e)
            } else
                Fi(i) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = s.treeContext,
                zl = Mt(i.nextSibling),
                Jl = t,
                cl = !0,
                ie = null,
                At = !1,
                l !== null && Ss(t, l),
                t = vi(t, a.children),
                t.flags |= 4096);
            return t
        }
        return n ? (me(),
        i = a.fallback,
        n = t.mode,
        s = l.child,
        g = s.sibling,
        a = Qt(s, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = s.subtreeFlags & 65011712,
        g !== null ? i = Qt(g, i) : (i = Re(i, n, e, null),
        i.flags |= 2),
        i.return = t,
        a.return = t,
        a.sibling = i,
        t.child = a,
        fn(null, a),
        a = t.child,
        i = l.child.memoizedState,
        i === null ? i = gi(e) : (n = i.cachePool,
        n !== null ? (s = ql._currentValue,
        n = n.parent !== s ? {
            parent: s,
            pool: s
        } : n) : n = Ns(),
        i = {
            baseLanes: i.baseLanes | e,
            cachePool: n
        }),
        a.memoizedState = i,
        a.childLanes = yi(l, c, e),
        t.memoizedState = mi,
        fn(l.child, a)) : (he(t),
        e = l.child,
        l = e.sibling,
        e = Qt(e, {
            mode: "visible",
            children: a.children
        }),
        e.return = t,
        e.sibling = null,
        l !== null && (c = t.deletions,
        c === null ? (t.deletions = [l],
        t.flags |= 16) : c.push(l)),
        t.child = e,
        t.memoizedState = null,
        e)
    }
    function vi(l, t) {
        return t = bu({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function bu(l, t) {
        return l = mt(22, l, null, t),
        l.lanes = 0,
        l
    }
    function bi(l, t, e) {
        return Le(t, l.child, null, e),
        l = vi(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function Qo(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t),
        Cc(l.return, t, e)
    }
    function xi(l, t, e, a, n, u) {
        var c = l.memoizedState;
        c === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: n,
            treeForkCount: u
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = a,
        c.tail = e,
        c.tailMode = n,
        c.treeForkCount = u)
    }
    function Lo(l, t, e) {
        var a = t.pendingProps
          , n = a.revealOrder
          , u = a.tail;
        a = a.children;
        var c = Ul.current
          , i = (c & 2) !== 0;
        if (i ? (c = c & 1 | 2,
        t.flags |= 128) : c &= 1,
        A(Ul, c),
        $l(l, t, a, e),
        a = cl ? ka : 0,
        !i && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && Qo(l, e, t);
                else if (l.tag === 19)
                    Qo(l, e, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (n) {
        case "forwards":
            for (e = t.child,
            n = null; e !== null; )
                l = e.alternate,
                l !== null && cu(l) === null && (n = e),
                e = e.sibling;
            e = n,
            e === null ? (n = t.child,
            t.child = null) : (n = e.sibling,
            e.sibling = null),
            xi(t, !1, n, e, u, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null,
            n = t.child,
            t.child = null; n !== null; ) {
                if (l = n.alternate,
                l !== null && cu(l) === null) {
                    t.child = n;
                    break
                }
                l = n.sibling,
                n.sibling = e,
                e = n,
                n = l
            }
            xi(t, !0, e, null, u, a);
            break;
        case "together":
            xi(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Jt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies),
        ve |= t.lanes,
        (e & t.childLanes) === 0)
            if (l !== null) {
                if (da(l, t, e, !1),
                (e & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(h(153));
        if (t.child !== null) {
            for (l = t.child,
            e = Qt(l, l.pendingProps),
            t.child = e,
            e.return = t; l.sibling !== null; )
                l = l.sibling,
                e = e.sibling = Qt(l, l.pendingProps),
                e.return = t;
            e.sibling = null
        }
        return t.child
    }
    function pi(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && In(l)))
    }
    function eh(l, t, e) {
        switch (t.tag) {
        case 3:
            wl(t, t.stateNode.containerInfo),
            se(t, ql, l.memoizedState.cache),
            qe();
            break;
        case 27:
        case 5:
            Me(t);
            break;
        case 4:
            wl(t, t.stateNode.containerInfo);
            break;
        case 10:
            se(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                wc(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (he(t),
                t.flags |= 128,
                null) : (e & t.child.childLanes) !== 0 ? Xo(l, t, e) : (he(t),
                l = Jt(l, t, e),
                l !== null ? l.sibling : null);
            he(t);
            break;
        case 19:
            var n = (l.flags & 128) !== 0;
            if (a = (e & t.childLanes) !== 0,
            a || (da(l, t, e, !1),
            a = (e & t.childLanes) !== 0),
            n) {
                if (a)
                    return Lo(l, t, e);
                t.flags |= 128
            }
            if (n = t.memoizedState,
            n !== null && (n.rendering = null,
            n.tail = null,
            n.lastEffect = null),
            A(Ul, Ul.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Ho(l, t, e, t.pendingProps);
        case 24:
            se(t, ql, l.memoizedState.cache)
        }
        return Jt(l, t, e)
    }
    function Vo(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Yl = !0;
            else {
                if (!pi(l, e) && (t.flags & 128) === 0)
                    return Yl = !1,
                    eh(l, t, e);
                Yl = (l.flags & 131072) !== 0
            }
        else
            Yl = !1,
            cl && (t.flags & 1048576) !== 0 && ps(t, ka, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var a = t.pendingProps;
                if (l = Xe(t.elementType),
                t.type = l,
                typeof l == "function")
                    jc(l) ? (a = Ze(l, a),
                    t.tag = 1,
                    t = Yo(null, t, l, a, e)) : (t.tag = 0,
                    t = hi(null, t, l, a, e));
                else {
                    if (l != null) {
                        var n = l.$$typeof;
                        if (n === C) {
                            t.tag = 11,
                            t = Do(null, t, l, a, e);
                            break l
                        } else if (n === H) {
                            t.tag = 14,
                            t = Uo(null, t, l, a, e);
                            break l
                        }
                    }
                    throw t = Fl(l) || l,
                    Error(h(306, t, ""))
                }
            }
            return t;
        case 0:
            return hi(l, t, t.type, t.pendingProps, e);
        case 1:
            return a = t.type,
            n = Ze(a, t.pendingProps),
            Yo(l, t, a, n, e);
        case 3:
            l: {
                if (wl(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(h(387));
                a = t.pendingProps;
                var u = t.memoizedState;
                n = u.element,
                Xc(l, t),
                en(t, a, null, e);
                var c = t.memoizedState;
                if (a = c.cache,
                se(t, ql, a),
                a !== u.cache && Hc(t, [ql], e, !0),
                tn(),
                a = c.element,
                u.isDehydrated)
                    if (u = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = u,
                    t.memoizedState = u,
                    t.flags & 256) {
                        t = Go(l, t, a, e);
                        break l
                    } else if (a !== n) {
                        n = Tt(Error(h(424)), t),
                        $a(n),
                        t = Go(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo,
                        l.nodeType) {
                        case 9:
                            l = l.body;
                            break;
                        default:
                            l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (zl = Mt(l.firstChild),
                        Jl = t,
                        cl = !0,
                        ie = null,
                        At = !0,
                        e = Cs(t, null, a, e),
                        t.child = e; e; )
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling
                    }
                else {
                    if (qe(),
                    a === n) {
                        t = Jt(l, t, e);
                        break l
                    }
                    $l(l, t, a, e)
                }
                t = t.child
            }
            return t;
        case 26:
            return vu(l, t),
            l === null ? (e = l0(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : cl || (e = t.type,
            l = t.pendingProps,
            a = Hu(k.current).createElement(e),
            a[Kl] = t,
            a[at] = l,
            Wl(a, e, l),
            Ll(a),
            t.stateNode = a) : t.memoizedState = l0(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return Me(t),
            l === null && cl && (a = t.stateNode = Fr(t.type, t.pendingProps, k.current),
            Jl = t,
            At = !0,
            n = zl,
            ze(t.type) ? (Pi = n,
            zl = Mt(a.firstChild)) : zl = n),
            $l(l, t, t.pendingProps.children, e),
            vu(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && cl && ((n = a = zl) && (a = Uh(a, t.type, t.pendingProps, At),
            a !== null ? (t.stateNode = a,
            Jl = t,
            zl = Mt(a.firstChild),
            At = !1,
            n = !0) : n = !1),
            n || fe(t)),
            Me(t),
            n = t.type,
            u = t.pendingProps,
            c = l !== null ? l.memoizedProps : null,
            a = u.children,
            ki(n, u) ? a = null : c !== null && ki(n, c) && (t.flags |= 32),
            t.memoizedState !== null && (n = Jc(l, t, Jd, null, null, e),
            Tn._currentValue = n),
            vu(l, t),
            $l(l, t, a, e),
            t.child;
        case 6:
            return l === null && cl && ((l = e = zl) && (e = Ch(e, t.pendingProps, At),
            e !== null ? (t.stateNode = e,
            Jl = t,
            zl = null,
            l = !0) : l = !1),
            l || fe(t)),
            null;
        case 13:
            return Xo(l, t, e);
        case 4:
            return wl(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            l === null ? t.child = Le(t, null, a, e) : $l(l, t, a, e),
            t.child;
        case 11:
            return Do(l, t, t.type, t.pendingProps, e);
        case 7:
            return $l(l, t, t.pendingProps, e),
            t.child;
        case 8:
            return $l(l, t, t.pendingProps.children, e),
            t.child;
        case 12:
            return $l(l, t, t.pendingProps.children, e),
            t.child;
        case 10:
            return a = t.pendingProps,
            se(t, t.type, a.value),
            $l(l, t, a.children, e),
            t.child;
        case 9:
            return n = t.type._context,
            a = t.pendingProps.children,
            Ye(t),
            n = kl(n),
            a = a(n),
            t.flags |= 1,
            $l(l, t, a, e),
            t.child;
        case 14:
            return Uo(l, t, t.type, t.pendingProps, e);
        case 15:
            return Co(l, t, t.type, t.pendingProps, e);
        case 19:
            return Lo(l, t, e);
        case 31:
            return th(l, t, e);
        case 22:
            return Ho(l, t, e, t.pendingProps);
        case 24:
            return Ye(t),
            a = kl(ql),
            l === null ? (n = Bc(),
            n === null && (n = pl,
            u = Rc(),
            n.pooledCache = u,
            u.refCount++,
            u !== null && (n.pooledCacheLanes |= e),
            n = u),
            t.memoizedState = {
                parent: a,
                cache: n
            },
            Gc(t),
            se(t, ql, n)) : ((l.lanes & e) !== 0 && (Xc(l, t),
            en(t, null, null, e),
            tn()),
            n = l.memoizedState,
            u = t.memoizedState,
            n.parent !== a ? (n = {
                parent: a,
                cache: a
            },
            t.memoizedState = n,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n),
            se(t, ql, a)) : (a = u.cache,
            se(t, ql, a),
            a !== n.cache && Hc(t, [ql], e, !0))),
            $l(l, t, t.pendingProps.children, e),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(h(156, t.tag))
    }
    function kt(l) {
        l.flags |= 4
    }
    function Si(l, t, e, a, n) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (n & 335544128) === n)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (yr())
                    l.flags |= 8192;
                else
                    throw Qe = eu,
                    Yc
        } else
            l.flags &= -16777217
    }
    function Zo(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !u0(t))
            if (yr())
                l.flags |= 8192;
            else
                throw Qe = eu,
                Yc
    }
    function xu(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? zf() : 536870912,
        l.lanes |= t,
        Ea |= t)
    }
    function sn(l, t) {
        if (!cl)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null; )
                    t.alternate !== null && (e = t),
                    t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
            }
    }
    function Tl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , e = 0
          , a = 0;
        if (t)
            for (var n = l.child; n !== null; )
                e |= n.lanes | n.childLanes,
                a |= n.subtreeFlags & 65011712,
                a |= n.flags & 65011712,
                n.return = l,
                n = n.sibling;
        else
            for (n = l.child; n !== null; )
                e |= n.lanes | n.childLanes,
                a |= n.subtreeFlags,
                a |= n.flags,
                n.return = l,
                n = n.sibling;
        return l.subtreeFlags |= a,
        l.childLanes = e,
        t
    }
    function ah(l, t, e) {
        var a = t.pendingProps;
        switch (_c(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Tl(t),
            null;
        case 1:
            return Tl(t),
            null;
        case 3:
            return e = t.stateNode,
            a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Zt(ql),
            Nl(),
            e.pendingContext && (e.context = e.pendingContext,
            e.pendingContext = null),
            (l === null || l.child === null) && (ra(t) ? kt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Dc())),
            Tl(t),
            null;
        case 26:
            var n = t.type
              , u = t.memoizedState;
            return l === null ? (kt(t),
            u !== null ? (Tl(t),
            Zo(t, u)) : (Tl(t),
            Si(t, n, null, a, e))) : u ? u !== l.memoizedState ? (kt(t),
            Tl(t),
            Zo(t, u)) : (Tl(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== a && kt(t),
            Tl(t),
            Si(t, n, l, a, e)),
            null;
        case 27:
            if (Je(t),
            e = k.current,
            n = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && kt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(h(166));
                    return Tl(t),
                    null
                }
                l = _.current,
                ra(t) ? zs(t) : (l = Fr(n, a, e),
                t.stateNode = l,
                kt(t))
            }
            return Tl(t),
            null;
        case 5:
            if (Je(t),
            n = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && kt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(h(166));
                    return Tl(t),
                    null
                }
                if (u = _.current,
                ra(t))
                    zs(t);
                else {
                    var c = Hu(k.current);
                    switch (u) {
                    case 1:
                        u = c.createElementNS("http://www.w3.org/2000/svg", n);
                        break;
                    case 2:
                        u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                        break;
                    default:
                        switch (n) {
                        case "svg":
                            u = c.createElementNS("http://www.w3.org/2000/svg", n);
                            break;
                        case "math":
                            u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                            break;
                        case "script":
                            u = c.createElement("div"),
                            u.innerHTML = "<script><\/script>",
                            u = u.removeChild(u.firstChild);
                            break;
                        case "select":
                            u = typeof a.is == "string" ? c.createElement("select", {
                                is: a.is
                            }) : c.createElement("select"),
                            a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                            break;
                        default:
                            u = typeof a.is == "string" ? c.createElement(n, {
                                is: a.is
                            }) : c.createElement(n)
                        }
                    }
                    u[Kl] = t,
                    u[at] = a;
                    l: for (c = t.child; c !== null; ) {
                        if (c.tag === 5 || c.tag === 6)
                            u.appendChild(c.stateNode);
                        else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                            c.child.return = c,
                            c = c.child;
                            continue
                        }
                        if (c === t)
                            break l;
                        for (; c.sibling === null; ) {
                            if (c.return === null || c.return === t)
                                break l;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                    t.stateNode = u;
                    l: switch (Wl(u, n, a),
                    n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break l;
                    case "img":
                        a = !0;
                        break l;
                    default:
                        a = !1
                    }
                    a && kt(t)
                }
            }
            return Tl(t),
            Si(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== a && kt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(h(166));
                if (l = k.current,
                ra(t)) {
                    if (l = t.stateNode,
                    e = t.memoizedProps,
                    a = null,
                    n = Jl,
                    n !== null)
                        switch (n.tag) {
                        case 27:
                        case 5:
                            a = n.memoizedProps
                        }
                    l[Kl] = t,
                    l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Xr(l.nodeValue, e)),
                    l || fe(t, !0)
                } else
                    l = Hu(l).createTextNode(a),
                    l[Kl] = t,
                    t.stateNode = l
            }
            return Tl(t),
            null;
        case 31:
            if (e = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (a = ra(t),
                e !== null) {
                    if (l === null) {
                        if (!a)
                            throw Error(h(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(h(557));
                        l[Kl] = t
                    } else
                        qe(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Tl(t),
                    l = !1
                } else
                    e = Dc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (yt(t),
                    t) : (yt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(h(558))
            }
            return Tl(t),
            null;
        case 13:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (n = ra(t),
                a !== null && a.dehydrated !== null) {
                    if (l === null) {
                        if (!n)
                            throw Error(h(318));
                        if (n = t.memoizedState,
                        n = n !== null ? n.dehydrated : null,
                        !n)
                            throw Error(h(317));
                        n[Kl] = t
                    } else
                        qe(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    Tl(t),
                    n = !1
                } else
                    n = Dc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n),
                    n = !0;
                if (!n)
                    return t.flags & 256 ? (yt(t),
                    t) : (yt(t),
                    null)
            }
            return yt(t),
            (t.flags & 128) !== 0 ? (t.lanes = e,
            t) : (e = a !== null,
            l = l !== null && l.memoizedState !== null,
            e && (a = t.child,
            n = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool),
            u = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool),
            u !== n && (a.flags |= 2048)),
            e !== l && e && (t.child.flags |= 8192),
            xu(t, t.updateQueue),
            Tl(t),
            null);
        case 4:
            return Nl(),
            l === null && Vi(t.stateNode.containerInfo),
            Tl(t),
            null;
        case 10:
            return Zt(t.type),
            Tl(t),
            null;
        case 19:
            if (E(Ul),
            a = t.memoizedState,
            a === null)
                return Tl(t),
                null;
            if (n = (t.flags & 128) !== 0,
            u = a.rendering,
            u === null)
                if (n)
                    sn(a, !1);
                else {
                    if (Ol !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (u = cu(l),
                            u !== null) {
                                for (t.flags |= 128,
                                sn(a, !1),
                                l = u.updateQueue,
                                t.updateQueue = l,
                                xu(t, l),
                                t.subtreeFlags = 0,
                                l = e,
                                e = t.child; e !== null; )
                                    vs(e, l),
                                    e = e.sibling;
                                return A(Ul, Ul.current & 1 | 2),
                                cl && Lt(t, a.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    a.tail !== null && ot() > Eu && (t.flags |= 128,
                    n = !0,
                    sn(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!n)
                    if (l = cu(u),
                    l !== null) {
                        if (t.flags |= 128,
                        n = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        xu(t, l),
                        sn(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !u.alternate && !cl)
                            return Tl(t),
                            null
                    } else
                        2 * ot() - a.renderingStartTime > Eu && e !== 536870912 && (t.flags |= 128,
                        n = !0,
                        sn(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (u.sibling = t.child,
                t.child = u) : (l = a.last,
                l !== null ? l.sibling = u : t.child = u,
                a.last = u)
            }
            return a.tail !== null ? (l = a.tail,
            a.rendering = l,
            a.tail = l.sibling,
            a.renderingStartTime = ot(),
            l.sibling = null,
            e = Ul.current,
            A(Ul, n ? e & 1 | 2 : e & 1),
            cl && Lt(t, a.treeForkCount),
            l) : (Tl(t),
            null);
        case 22:
        case 23:
            return yt(t),
            Zc(),
            a = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Tl(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : Tl(t),
            e = t.updateQueue,
            e !== null && xu(t, e.retryQueue),
            e = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && E(Ge),
            null;
        case 24:
            return e = null,
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            Zt(ql),
            Tl(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(h(156, t.tag))
    }
    function nh(l, t) {
        switch (_c(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Zt(ql),
            Nl(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Je(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (yt(t),
                t.alternate === null)
                    throw Error(h(340));
                qe()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (yt(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(h(340));
                qe()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return E(Ul),
            null;
        case 4:
            return Nl(),
            null;
        case 10:
            return Zt(t.type),
            null;
        case 22:
        case 23:
            return yt(t),
            Zc(),
            l !== null && E(Ge),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Zt(ql),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function wo(l, t) {
        switch (_c(t),
        t.tag) {
        case 3:
            Zt(ql),
            Nl();
            break;
        case 26:
        case 27:
        case 5:
            Je(t);
            break;
        case 4:
            Nl();
            break;
        case 31:
            t.memoizedState !== null && yt(t);
            break;
        case 13:
            yt(t);
            break;
        case 19:
            E(Ul);
            break;
        case 10:
            Zt(t.type);
            break;
        case 22:
        case 23:
            yt(t),
            Zc(),
            l !== null && E(Ge);
            break;
        case 24:
            Zt(ql)
        }
    }
    function on(l, t) {
        try {
            var e = t.updateQueue
              , a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var n = a.next;
                e = n;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var u = e.create
                          , c = e.inst;
                        a = u(),
                        c.destroy = a
                    }
                    e = e.next
                } while (e !== n)
            }
        } catch (i) {
            gl(t, t.return, i)
        }
    }
    function ge(l, t, e) {
        try {
            var a = t.updateQueue
              , n = a !== null ? a.lastEffect : null;
            if (n !== null) {
                var u = n.next;
                a = u;
                do {
                    if ((a.tag & l) === l) {
                        var c = a.inst
                          , i = c.destroy;
                        if (i !== void 0) {
                            c.destroy = void 0,
                            n = t;
                            var s = e
                              , g = i;
                            try {
                                g()
                            } catch (p) {
                                gl(n, s, p)
                            }
                        }
                    }
                    a = a.next
                } while (a !== u)
            }
        } catch (p) {
            gl(t, t.return, p)
        }
    }
    function Ko(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                Rs(t, e)
            } catch (a) {
                gl(l, l.return, a)
            }
        }
    }
    function Jo(l, t, e) {
        e.props = Ze(l.type, l.memoizedProps),
        e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            gl(l, t, a)
        }
    }
    function rn(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var a = l.stateNode;
                    break;
                case 30:
                    a = l.stateNode;
                    break;
                default:
                    a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (n) {
            gl(l, t, n)
        }
    }
    function qt(l, t) {
        var e = l.ref
          , a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (n) {
                    gl(l, t, n)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (n) {
                    gl(l, t, n)
                }
            else
                e.current = null
    }
    function ko(l) {
        var t = l.type
          , e = l.memoizedProps
          , a = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break l;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (n) {
            gl(l, l.return, n)
        }
    }
    function zi(l, t, e) {
        try {
            var a = l.stateNode;
            Ah(a, l.type, e, t),
            a[at] = t
        } catch (n) {
            gl(l, l.return, n)
        }
    }
    function $o(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ze(l.type) || l.tag === 4
    }
    function Ti(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || $o(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && ze(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function Ei(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            t.appendChild(l),
            e = e._reactRootContainer,
            e != null || t.onclick !== null || (t.onclick = Gt));
        else if (a !== 4 && (a === 27 && ze(l.type) && (e = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (Ei(l, t, e),
            l = l.sibling; l !== null; )
                Ei(l, t, e),
                l = l.sibling
    }
    function pu(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && ze(l.type) && (e = l.stateNode),
        l = l.child,
        l !== null))
            for (pu(l, t, e),
            l = l.sibling; l !== null; )
                pu(l, t, e),
                l = l.sibling
    }
    function Wo(l) {
        var t = l.stateNode
          , e = l.memoizedProps;
        try {
            for (var a = l.type, n = t.attributes; n.length; )
                t.removeAttributeNode(n[0]);
            Wl(t, a, e),
            t[Kl] = l,
            t[at] = e
        } catch (u) {
            gl(l, l.return, u)
        }
    }
    var $t = !1
      , Gl = !1
      , ji = !1
      , Fo = typeof WeakSet == "function" ? WeakSet : Set
      , Vl = null;
    function uh(l, t) {
        if (l = l.containerInfo,
        Ki = Qu,
        l = fs(l),
        bc(l)) {
            if ("selectionStart"in l)
                var e = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    e = (e = l.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var n = a.anchorOffset
                          , u = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            u.nodeType
                        } catch {
                            e = null;
                            break l
                        }
                        var c = 0
                          , i = -1
                          , s = -1
                          , g = 0
                          , p = 0
                          , T = l
                          , y = null;
                        t: for (; ; ) {
                            for (var b; T !== e || n !== 0 && T.nodeType !== 3 || (i = c + n),
                            T !== u || a !== 0 && T.nodeType !== 3 || (s = c + a),
                            T.nodeType === 3 && (c += T.nodeValue.length),
                            (b = T.firstChild) !== null; )
                                y = T,
                                T = b;
                            for (; ; ) {
                                if (T === l)
                                    break t;
                                if (y === e && ++g === n && (i = c),
                                y === u && ++p === a && (s = c),
                                (b = T.nextSibling) !== null)
                                    break;
                                T = y,
                                y = T.parentNode
                            }
                            T = b
                        }
                        e = i === -1 || s === -1 ? null : {
                            start: i,
                            end: s
                        }
                    } else
                        e = null
                }
            e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (Ji = {
            focusedElem: l,
            selectionRange: e
        },
        Qu = !1,
        Vl = t; Vl !== null; )
            if (t = Vl,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                Vl = l;
            else
                for (; Vl !== null; ) {
                    switch (t = Vl,
                    u = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (e = 0; e < l.length; e++)
                                n = l[e],
                                n.ref.impl = n.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && u !== null) {
                            l = void 0,
                            e = t,
                            n = u.memoizedProps,
                            u = u.memoizedState,
                            a = e.stateNode;
                            try {
                                var D = Ze(e.type, n);
                                l = a.getSnapshotBeforeUpdate(D, u),
                                a.__reactInternalSnapshotBeforeUpdate = l
                            } catch (Q) {
                                gl(e, e.return, Q)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            e = l.nodeType,
                            e === 9)
                                Wi(l);
                            else if (e === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wi(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(h(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        Vl = l;
                        break
                    }
                    Vl = t.return
                }
    }
    function Io(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Ft(l, e),
            a & 4 && on(5, e);
            break;
        case 1:
            if (Ft(l, e),
            a & 4)
                if (l = e.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (c) {
                        gl(e, e.return, c)
                    }
                else {
                    var n = Ze(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(n, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        gl(e, e.return, c)
                    }
                }
            a & 64 && Ko(e),
            a & 512 && rn(e, e.return);
            break;
        case 3:
            if (Ft(l, e),
            a & 64 && (l = e.updateQueue,
            l !== null)) {
                if (t = null,
                e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        t = e.child.stateNode;
                        break;
                    case 1:
                        t = e.child.stateNode
                    }
                try {
                    Rs(l, t)
                } catch (c) {
                    gl(e, e.return, c)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Wo(e);
        case 26:
        case 5:
            Ft(l, e),
            t === null && a & 4 && ko(e),
            a & 512 && rn(e, e.return);
            break;
        case 12:
            Ft(l, e);
            break;
        case 31:
            Ft(l, e),
            a & 4 && tr(l, e);
            break;
        case 13:
            Ft(l, e),
            a & 4 && er(l, e),
            a & 64 && (l = e.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (e = mh.bind(null, e),
            Hh(l, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || $t,
            !a) {
                t = t !== null && t.memoizedState !== null || Gl,
                n = $t;
                var u = Gl;
                $t = a,
                (Gl = t) && !u ? It(l, e, (e.subtreeFlags & 8772) !== 0) : Ft(l, e),
                $t = n,
                Gl = u
            }
            break;
        case 30:
            break;
        default:
            Ft(l, e)
        }
    }
    function Po(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        Po(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && tc(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var jl = null
      , ut = !1;
    function Wt(l, t, e) {
        for (e = e.child; e !== null; )
            lr(l, t, e),
            e = e.sibling
    }
    function lr(l, t, e) {
        if (rt && typeof rt.onCommitFiberUnmount == "function")
            try {
                rt.onCommitFiberUnmount(Ha, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Gl || qt(e, t),
            Wt(l, t, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode,
            e.parentNode.removeChild(e));
            break;
        case 27:
            Gl || qt(e, t);
            var a = jl
              , n = ut;
            ze(e.type) && (jl = e.stateNode,
            ut = !1),
            Wt(l, t, e),
            pn(e.stateNode),
            jl = a,
            ut = n;
            break;
        case 5:
            Gl || qt(e, t);
        case 6:
            if (a = jl,
            n = ut,
            jl = null,
            Wt(l, t, e),
            jl = a,
            ut = n,
            jl !== null)
                if (ut)
                    try {
                        (jl.nodeType === 9 ? jl.body : jl.nodeName === "HTML" ? jl.ownerDocument.body : jl).removeChild(e.stateNode)
                    } catch (u) {
                        gl(e, t, u)
                    }
                else
                    try {
                        jl.removeChild(e.stateNode)
                    } catch (u) {
                        gl(e, t, u)
                    }
            break;
        case 18:
            jl !== null && (ut ? (l = jl,
            Kr(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode),
            Ua(l)) : Kr(jl, e.stateNode));
            break;
        case 4:
            a = jl,
            n = ut,
            jl = e.stateNode.containerInfo,
            ut = !0,
            Wt(l, t, e),
            jl = a,
            ut = n;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ge(2, e, t),
            Gl || ge(4, e, t),
            Wt(l, t, e);
            break;
        case 1:
            Gl || (qt(e, t),
            a = e.stateNode,
            typeof a.componentWillUnmount == "function" && Jo(e, t, a)),
            Wt(l, t, e);
            break;
        case 21:
            Wt(l, t, e);
            break;
        case 22:
            Gl = (a = Gl) || e.memoizedState !== null,
            Wt(l, t, e),
            Gl = a;
            break;
        default:
            Wt(l, t, e)
        }
    }
    function tr(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Ua(l)
            } catch (e) {
                gl(t, t.return, e)
            }
        }
    }
    function er(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Ua(l)
            } catch (e) {
                gl(t, t.return, e)
            }
    }
    function ch(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new Fo),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new Fo),
            t;
        default:
            throw Error(h(435, l.tag))
        }
    }
    function Su(l, t) {
        var e = ch(l);
        t.forEach(function(a) {
            if (!e.has(a)) {
                e.add(a);
                var n = gh.bind(null, l, a);
                a.then(n, n)
            }
        })
    }
    function ct(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var n = e[a]
                  , u = l
                  , c = t
                  , i = c;
                l: for (; i !== null; ) {
                    switch (i.tag) {
                    case 27:
                        if (ze(i.type)) {
                            jl = i.stateNode,
                            ut = !1;
                            break l
                        }
                        break;
                    case 5:
                        jl = i.stateNode,
                        ut = !1;
                        break l;
                    case 3:
                    case 4:
                        jl = i.stateNode.containerInfo,
                        ut = !0;
                        break l
                    }
                    i = i.return
                }
                if (jl === null)
                    throw Error(h(160));
                lr(u, c, n),
                jl = null,
                ut = !1,
                u = n.alternate,
                u !== null && (u.return = null),
                n.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                ar(t, l),
                t = t.sibling
    }
    var Ut = null;
    function ar(l, t) {
        var e = l.alternate
          , a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            ct(t, l),
            it(l),
            a & 4 && (ge(3, l, l.return),
            on(3, l),
            ge(5, l, l.return));
            break;
        case 1:
            ct(t, l),
            it(l),
            a & 512 && (Gl || e === null || qt(e, e.return)),
            a & 64 && $t && (l = l.updateQueue,
            l !== null && (a = l.callbacks,
            a !== null && (e = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var n = Ut;
            if (ct(t, l),
            it(l),
            a & 512 && (Gl || e === null || qt(e, e.return)),
            a & 4) {
                var u = e !== null ? e.memoizedState : null;
                if (a = l.memoizedState,
                e === null)
                    if (a === null)
                        if (l.stateNode === null) {
                            l: {
                                a = l.type,
                                e = l.memoizedProps,
                                n = n.ownerDocument || n;
                                t: switch (a) {
                                case "title":
                                    u = n.getElementsByTagName("title")[0],
                                    (!u || u[Ba] || u[Kl] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a),
                                    n.head.insertBefore(u, n.querySelector("head > title"))),
                                    Wl(u, a, e),
                                    u[Kl] = l,
                                    Ll(u),
                                    a = u;
                                    break l;
                                case "link":
                                    var c = a0("link", "href", n).get(a + (e.href || ""));
                                    if (c) {
                                        for (var i = 0; i < c.length; i++)
                                            if (u = c[i],
                                            u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                c.splice(i, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    Wl(u, a, e),
                                    n.head.appendChild(u);
                                    break;
                                case "meta":
                                    if (c = a0("meta", "content", n).get(a + (e.content || ""))) {
                                        for (i = 0; i < c.length; i++)
                                            if (u = c[i],
                                            u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                c.splice(i, 1);
                                                break t
                                            }
                                    }
                                    u = n.createElement(a),
                                    Wl(u, a, e),
                                    n.head.appendChild(u);
                                    break;
                                default:
                                    throw Error(h(468, a))
                                }
                                u[Kl] = l,
                                Ll(u),
                                a = u
                            }
                            l.stateNode = a
                        } else
                            n0(n, l.type, l.stateNode);
                    else
                        l.stateNode = e0(n, a, l.memoizedProps);
                else
                    u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode,
                    e.parentNode.removeChild(e)) : u.count--,
                    a === null ? n0(n, l.type, l.stateNode) : e0(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && zi(l, l.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            ct(t, l),
            it(l),
            a & 512 && (Gl || e === null || qt(e, e.return)),
            e !== null && a & 4 && zi(l, l.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (ct(t, l),
            it(l),
            a & 512 && (Gl || e === null || qt(e, e.return)),
            l.flags & 32) {
                n = l.stateNode;
                try {
                    ta(n, "")
                } catch (D) {
                    gl(l, l.return, D)
                }
            }
            a & 4 && l.stateNode != null && (n = l.memoizedProps,
            zi(l, n, e !== null ? e.memoizedProps : n)),
            a & 1024 && (ji = !0);
            break;
        case 6:
            if (ct(t, l),
            it(l),
            a & 4) {
                if (l.stateNode === null)
                    throw Error(h(162));
                a = l.memoizedProps,
                e = l.stateNode;
                try {
                    e.nodeValue = a
                } catch (D) {
                    gl(l, l.return, D)
                }
            }
            break;
        case 3:
            if (Bu = null,
            n = Ut,
            Ut = Ru(t.containerInfo),
            ct(t, l),
            Ut = n,
            it(l),
            a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Ua(t.containerInfo)
                } catch (D) {
                    gl(l, l.return, D)
                }
            ji && (ji = !1,
            nr(l));
            break;
        case 4:
            a = Ut,
            Ut = Ru(l.stateNode.containerInfo),
            ct(t, l),
            it(l),
            Ut = a;
            break;
        case 12:
            ct(t, l),
            it(l);
            break;
        case 31:
            ct(t, l),
            it(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            Su(l, a)));
            break;
        case 13:
            ct(t, l),
            it(l),
            l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Tu = ot()),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            Su(l, a)));
            break;
        case 22:
            n = l.memoizedState !== null;
            var s = e !== null && e.memoizedState !== null
              , g = $t
              , p = Gl;
            if ($t = g || n,
            Gl = p || s,
            ct(t, l),
            Gl = p,
            $t = g,
            it(l),
            a & 8192)
                l: for (t = l.stateNode,
                t._visibility = n ? t._visibility & -2 : t._visibility | 1,
                n && (e === null || s || $t || Gl || we(l)),
                e = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            s = e = t;
                            try {
                                if (u = s.stateNode,
                                n)
                                    c = u.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    i = s.stateNode;
                                    var T = s.memoizedProps.style
                                      , y = T != null && T.hasOwnProperty("display") ? T.display : null;
                                    i.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim()
                                }
                            } catch (D) {
                                gl(s, s.return, D)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            s = t;
                            try {
                                s.stateNode.nodeValue = n ? "" : s.memoizedProps
                            } catch (D) {
                                gl(s, s.return, D)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (e === null) {
                            s = t;
                            try {
                                var b = s.stateNode;
                                n ? Jr(b, !0) : Jr(s.stateNode, !1)
                            } catch (D) {
                                gl(s, s.return, D)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        e === t && (e = null),
                        t = t.return
                    }
                    e === t && (e = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = l.updateQueue,
            a !== null && (e = a.retryQueue,
            e !== null && (a.retryQueue = null,
            Su(l, e))));
            break;
        case 19:
            ct(t, l),
            it(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            Su(l, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            ct(t, l),
            it(l)
        }
    }
    function it(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null; ) {
                    if ($o(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(h(160));
                switch (e.tag) {
                case 27:
                    var n = e.stateNode
                      , u = Ti(l);
                    pu(l, u, n);
                    break;
                case 5:
                    var c = e.stateNode;
                    e.flags & 32 && (ta(c, ""),
                    e.flags &= -33);
                    var i = Ti(l);
                    pu(l, i, c);
                    break;
                case 3:
                case 4:
                    var s = e.stateNode.containerInfo
                      , g = Ti(l);
                    Ei(l, g, s);
                    break;
                default:
                    throw Error(h(161))
                }
            } catch (p) {
                gl(l, l.return, p)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function nr(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                nr(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function Ft(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Io(l, t.alternate, t),
                t = t.sibling
    }
    function we(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ge(4, t, t.return),
                we(t);
                break;
            case 1:
                qt(t, t.return);
                var e = t.stateNode;
                typeof e.componentWillUnmount == "function" && Jo(t, t.return, e),
                we(t);
                break;
            case 27:
                pn(t.stateNode);
            case 26:
            case 5:
                qt(t, t.return),
                we(t);
                break;
            case 22:
                t.memoizedState === null && we(t);
                break;
            case 30:
                we(t);
                break;
            default:
                we(t)
            }
            l = l.sibling
        }
    }
    function It(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , n = l
              , u = t
              , c = u.flags;
            switch (u.tag) {
            case 0:
            case 11:
            case 15:
                It(n, u, e),
                on(4, u);
                break;
            case 1:
                if (It(n, u, e),
                a = u,
                n = a.stateNode,
                typeof n.componentDidMount == "function")
                    try {
                        n.componentDidMount()
                    } catch (g) {
                        gl(a, a.return, g)
                    }
                if (a = u,
                n = a.updateQueue,
                n !== null) {
                    var i = a.stateNode;
                    try {
                        var s = n.shared.hiddenCallbacks;
                        if (s !== null)
                            for (n.shared.hiddenCallbacks = null,
                            n = 0; n < s.length; n++)
                                Hs(s[n], i)
                    } catch (g) {
                        gl(a, a.return, g)
                    }
                }
                e && c & 64 && Ko(u),
                rn(u, u.return);
                break;
            case 27:
                Wo(u);
            case 26:
            case 5:
                It(n, u, e),
                e && a === null && c & 4 && ko(u),
                rn(u, u.return);
                break;
            case 12:
                It(n, u, e);
                break;
            case 31:
                It(n, u, e),
                e && c & 4 && tr(n, u);
                break;
            case 13:
                It(n, u, e),
                e && c & 4 && er(n, u);
                break;
            case 22:
                u.memoizedState === null && It(n, u, e),
                rn(u, u.return);
                break;
            case 30:
                break;
            default:
                It(n, u, e)
            }
            t = t.sibling
        }
    }
    function Ai(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== e && (l != null && l.refCount++,
        e != null && Wa(e))
    }
    function Ni(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && Wa(l))
    }
    function Ct(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                ur(l, t, e, a),
                t = t.sibling
    }
    function ur(l, t, e, a) {
        var n = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Ct(l, t, e, a),
            n & 2048 && on(9, t);
            break;
        case 1:
            Ct(l, t, e, a);
            break;
        case 3:
            Ct(l, t, e, a),
            n & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && Wa(l)));
            break;
        case 12:
            if (n & 2048) {
                Ct(l, t, e, a),
                l = t.stateNode;
                try {
                    var u = t.memoizedProps
                      , c = u.id
                      , i = u.onPostCommit;
                    typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (s) {
                    gl(t, t.return, s)
                }
            } else
                Ct(l, t, e, a);
            break;
        case 31:
            Ct(l, t, e, a);
            break;
        case 13:
            Ct(l, t, e, a);
            break;
        case 23:
            break;
        case 22:
            u = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? u._visibility & 2 ? Ct(l, t, e, a) : dn(l, t) : u._visibility & 2 ? Ct(l, t, e, a) : (u._visibility |= 2,
            Sa(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            n & 2048 && Ai(c, t);
            break;
        case 24:
            Ct(l, t, e, a),
            n & 2048 && Ni(t.alternate, t);
            break;
        default:
            Ct(l, t, e, a)
        }
    }
    function Sa(l, t, e, a, n) {
        for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var u = l
              , c = t
              , i = e
              , s = a
              , g = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Sa(u, c, i, s, n),
                on(8, c);
                break;
            case 23:
                break;
            case 22:
                var p = c.stateNode;
                c.memoizedState !== null ? p._visibility & 2 ? Sa(u, c, i, s, n) : dn(u, c) : (p._visibility |= 2,
                Sa(u, c, i, s, n)),
                n && g & 2048 && Ai(c.alternate, c);
                break;
            case 24:
                Sa(u, c, i, s, n),
                n && g & 2048 && Ni(c.alternate, c);
                break;
            default:
                Sa(u, c, i, s, n)
            }
            t = t.sibling
        }
    }
    function dn(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var e = l
                  , a = t
                  , n = a.flags;
                switch (a.tag) {
                case 22:
                    dn(e, a),
                    n & 2048 && Ai(a.alternate, a);
                    break;
                case 24:
                    dn(e, a),
                    n & 2048 && Ni(a.alternate, a);
                    break;
                default:
                    dn(e, a)
                }
                t = t.sibling
            }
    }
    var hn = 8192;
    function za(l, t, e) {
        if (l.subtreeFlags & hn)
            for (l = l.child; l !== null; )
                cr(l, t, e),
                l = l.sibling
    }
    function cr(l, t, e) {
        switch (l.tag) {
        case 26:
            za(l, t, e),
            l.flags & hn && l.memoizedState !== null && Kh(e, Ut, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            za(l, t, e);
            break;
        case 3:
        case 4:
            var a = Ut;
            Ut = Ru(l.stateNode.containerInfo),
            za(l, t, e),
            Ut = a;
            break;
        case 22:
            l.memoizedState === null && (a = l.alternate,
            a !== null && a.memoizedState !== null ? (a = hn,
            hn = 16777216,
            za(l, t, e),
            hn = a) : za(l, t, e));
            break;
        default:
            za(l, t, e)
        }
    }
    function ir(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function mn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Vl = a,
                    sr(a, l)
                }
            ir(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                fr(l),
                l = l.sibling
    }
    function fr(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            mn(l),
            l.flags & 2048 && ge(9, l, l.return);
            break;
        case 3:
            mn(l);
            break;
        case 12:
            mn(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            zu(l)) : mn(l);
            break;
        default:
            mn(l)
        }
    }
    function zu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Vl = a,
                    sr(a, l)
                }
            ir(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                ge(8, t, t.return),
                zu(t);
                break;
            case 22:
                e = t.stateNode,
                e._visibility & 2 && (e._visibility &= -3,
                zu(t));
                break;
            default:
                zu(t)
            }
            l = l.sibling
        }
    }
    function sr(l, t) {
        for (; Vl !== null; ) {
            var e = Vl;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                ge(8, e, t);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                Wa(e.memoizedState.cache)
            }
            if (a = e.child,
            a !== null)
                a.return = e,
                Vl = a;
            else
                l: for (e = l; Vl !== null; ) {
                    a = Vl;
                    var n = a.sibling
                      , u = a.return;
                    if (Po(a),
                    a === e) {
                        Vl = null;
                        break l
                    }
                    if (n !== null) {
                        n.return = u,
                        Vl = n;
                        break l
                    }
                    Vl = u
                }
        }
    }
    var ih = {
        getCacheForType: function(l) {
            var t = kl(ql)
              , e = t.data.get(l);
            return e === void 0 && (e = l(),
            t.data.set(l, e)),
            e
        },
        cacheSignal: function() {
            return kl(ql).controller.signal
        }
    }
      , fh = typeof WeakMap == "function" ? WeakMap : Map
      , dl = 0
      , pl = null
      , tl = null
      , al = 0
      , ml = 0
      , vt = null
      , ye = !1
      , Ta = !1
      , Mi = !1
      , Pt = 0
      , Ol = 0
      , ve = 0
      , Ke = 0
      , _i = 0
      , bt = 0
      , Ea = 0
      , gn = null
      , ft = null
      , Oi = !1
      , Tu = 0
      , or = 0
      , Eu = 1 / 0
      , ju = null
      , be = null
      , Xl = 0
      , xe = null
      , ja = null
      , le = 0
      , Di = 0
      , Ui = null
      , rr = null
      , yn = 0
      , Ci = null;
    function xt() {
        return (dl & 2) !== 0 && al !== 0 ? al & -al : x.T !== null ? Gi() : Af()
    }
    function dr() {
        if (bt === 0)
            if ((al & 536870912) === 0 || cl) {
                var l = Cn;
                Cn <<= 1,
                (Cn & 3932160) === 0 && (Cn = 262144),
                bt = l
            } else
                bt = 536870912;
        return l = gt.current,
        l !== null && (l.flags |= 32),
        bt
    }
    function st(l, t, e) {
        (l === pl && (ml === 2 || ml === 9) || l.cancelPendingCommit !== null) && (Aa(l, 0),
        pe(l, al, bt, !1)),
        qa(l, e),
        ((dl & 2) === 0 || l !== pl) && (l === pl && ((dl & 2) === 0 && (Ke |= e),
        Ol === 4 && pe(l, al, bt, !1)),
        Bt(l))
    }
    function hr(l, t, e) {
        if ((dl & 6) !== 0)
            throw Error(h(327));
        var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ra(l, t)
          , n = a ? rh(l, t) : Ri(l, t, !0)
          , u = a;
        do {
            if (n === 0) {
                Ta && !a && pe(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate,
                u && !sh(e)) {
                    n = Ri(l, t, !1),
                    u = !1;
                    continue
                }
                if (n === 2) {
                    if (u = t,
                    l.errorRecoveryDisabledLanes & u)
                        var c = 0;
                    else
                        c = l.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        l: {
                            var i = l;
                            n = gn;
                            var s = i.current.memoizedState.isDehydrated;
                            if (s && (Aa(i, c).flags |= 256),
                            c = Ri(i, c, !1),
                            c !== 2) {
                                if (Mi && !s) {
                                    i.errorRecoveryDisabledLanes |= u,
                                    Ke |= u,
                                    n = 4;
                                    break l
                                }
                                u = ft,
                                ft = n,
                                u !== null && (ft === null ? ft = u : ft.push.apply(ft, u))
                            }
                            n = c
                        }
                        if (u = !1,
                        n !== 2)
                            continue
                    }
                }
                if (n === 1) {
                    Aa(l, 0),
                    pe(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l,
                    u = n,
                    u) {
                    case 0:
                    case 1:
                        throw Error(h(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        pe(a, t, bt, !ye);
                        break l;
                    case 2:
                        ft = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(h(329))
                    }
                    if ((t & 62914560) === t && (n = Tu + 300 - ot(),
                    10 < n)) {
                        if (pe(a, t, bt, !ye),
                        Rn(a, 0, !0) !== 0)
                            break l;
                        le = t,
                        a.timeoutHandle = Zr(mr.bind(null, a, e, ft, ju, Oi, t, bt, Ke, Ea, ye, u, "Throttled", -0, 0), n);
                        break l
                    }
                    mr(a, e, ft, ju, Oi, t, bt, Ke, Ea, ye, u, null, -0, 0)
                }
            }
            break
        } while (!0);
        Bt(l)
    }
    function mr(l, t, e, a, n, u, c, i, s, g, p, T, y, b) {
        if (l.timeoutHandle = -1,
        T = t.subtreeFlags,
        T & 8192 || (T & 16785408) === 16785408) {
            T = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Gt
            },
            cr(t, u, T);
            var D = (u & 62914560) === u ? Tu - ot() : (u & 4194048) === u ? or - ot() : 0;
            if (D = Jh(T, D),
            D !== null) {
                le = u,
                l.cancelPendingCommit = D(zr.bind(null, l, t, u, e, a, n, c, i, s, p, T, null, y, b)),
                pe(l, u, c, !g);
                return
            }
        }
        zr(l, t, u, e, a, n, c, i, s)
    }
    function sh(l) {
        for (var t = l; ; ) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue,
            e !== null && (e = e.stores,
            e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var n = e[a]
                      , u = n.getSnapshot;
                    n = n.value;
                    try {
                        if (!ht(u(), n))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child,
            t.subtreeFlags & 16384 && e !== null)
                e.return = t,
                t = e;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function pe(l, t, e, a) {
        t &= ~_i,
        t &= ~Ke,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        a && (l.warmLanes |= t),
        a = l.expirationTimes;
        for (var n = t; 0 < n; ) {
            var u = 31 - dt(n)
              , c = 1 << u;
            a[u] = -1,
            n &= ~c
        }
        e !== 0 && Tf(l, e, t)
    }
    function Au() {
        return (dl & 6) === 0 ? (vn(0),
        !1) : !0
    }
    function Hi() {
        if (tl !== null) {
            if (ml === 0)
                var l = tl.return;
            else
                l = tl,
                Vt = Be = null,
                Wc(l),
                ya = null,
                Ia = 0,
                l = tl;
            for (; l !== null; )
                wo(l.alternate, l),
                l = l.return;
            tl = null
        }
    }
    function Aa(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1,
        _h(e)),
        e = l.cancelPendingCommit,
        e !== null && (l.cancelPendingCommit = null,
        e()),
        le = 0,
        Hi(),
        pl = l,
        tl = e = Qt(l.current, null),
        al = t,
        ml = 0,
        vt = null,
        ye = !1,
        Ta = Ra(l, t),
        Mi = !1,
        Ea = bt = _i = Ke = ve = Ol = 0,
        ft = gn = null,
        Oi = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements,
            a &= t; 0 < a; ) {
                var n = 31 - dt(a)
                  , u = 1 << n;
                t |= l[n],
                a &= ~u
            }
        return Pt = t,
        Jn(),
        e
    }
    function gr(l, t) {
        $ = null,
        x.H = cn,
        t === ga || t === tu ? (t = Os(),
        ml = 3) : t === Yc ? (t = Os(),
        ml = 4) : ml = t === di ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        vt = t,
        tl === null && (Ol = 1,
        gu(l, Tt(t, l.current)))
    }
    function yr() {
        var l = gt.current;
        return l === null ? !0 : (al & 4194048) === al ? Nt === null : (al & 62914560) === al || (al & 536870912) !== 0 ? l === Nt : !1
    }
    function vr() {
        var l = x.H;
        return x.H = cn,
        l === null ? cn : l
    }
    function br() {
        var l = x.A;
        return x.A = ih,
        l
    }
    function Nu() {
        Ol = 4,
        ye || (al & 4194048) !== al && gt.current !== null || (Ta = !0),
        (ve & 134217727) === 0 && (Ke & 134217727) === 0 || pl === null || pe(pl, al, bt, !1)
    }
    function Ri(l, t, e) {
        var a = dl;
        dl |= 2;
        var n = vr()
          , u = br();
        (pl !== l || al !== t) && (ju = null,
        Aa(l, t)),
        t = !1;
        var c = Ol;
        l: do
            try {
                if (ml !== 0 && tl !== null) {
                    var i = tl
                      , s = vt;
                    switch (ml) {
                    case 8:
                        Hi(),
                        c = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        gt.current === null && (t = !0);
                        var g = ml;
                        if (ml = 0,
                        vt = null,
                        Na(l, i, s, g),
                        e && Ta) {
                            c = 0;
                            break l
                        }
                        break;
                    default:
                        g = ml,
                        ml = 0,
                        vt = null,
                        Na(l, i, s, g)
                    }
                }
                oh(),
                c = Ol;
                break
            } catch (p) {
                gr(l, p)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        Vt = Be = null,
        dl = a,
        x.H = n,
        x.A = u,
        tl === null && (pl = null,
        al = 0,
        Jn()),
        c
    }
    function oh() {
        for (; tl !== null; )
            xr(tl)
    }
    function rh(l, t) {
        var e = dl;
        dl |= 2;
        var a = vr()
          , n = br();
        pl !== l || al !== t ? (ju = null,
        Eu = ot() + 500,
        Aa(l, t)) : Ta = Ra(l, t);
        l: do
            try {
                if (ml !== 0 && tl !== null) {
                    t = tl;
                    var u = vt;
                    t: switch (ml) {
                    case 1:
                        ml = 0,
                        vt = null,
                        Na(l, t, u, 1);
                        break;
                    case 2:
                    case 9:
                        if (Ms(u)) {
                            ml = 0,
                            vt = null,
                            pr(t);
                            break
                        }
                        t = function() {
                            ml !== 2 && ml !== 9 || pl !== l || (ml = 7),
                            Bt(l)
                        }
                        ,
                        u.then(t, t);
                        break l;
                    case 3:
                        ml = 7;
                        break l;
                    case 4:
                        ml = 5;
                        break l;
                    case 7:
                        Ms(u) ? (ml = 0,
                        vt = null,
                        pr(t)) : (ml = 0,
                        vt = null,
                        Na(l, t, u, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (tl.tag) {
                        case 26:
                            c = tl.memoizedState;
                        case 5:
                        case 27:
                            var i = tl;
                            if (c ? u0(c) : i.stateNode.complete) {
                                ml = 0,
                                vt = null;
                                var s = i.sibling;
                                if (s !== null)
                                    tl = s;
                                else {
                                    var g = i.return;
                                    g !== null ? (tl = g,
                                    Mu(g)) : tl = null
                                }
                                break t
                            }
                        }
                        ml = 0,
                        vt = null,
                        Na(l, t, u, 5);
                        break;
                    case 6:
                        ml = 0,
                        vt = null,
                        Na(l, t, u, 6);
                        break;
                    case 8:
                        Hi(),
                        Ol = 6;
                        break l;
                    default:
                        throw Error(h(462))
                    }
                }
                dh();
                break
            } catch (p) {
                gr(l, p)
            }
        while (!0);
        return Vt = Be = null,
        x.H = a,
        x.A = n,
        dl = e,
        tl !== null ? 0 : (pl = null,
        al = 0,
        Jn(),
        Ol)
    }
    function dh() {
        for (; tl !== null && !R0(); )
            xr(tl)
    }
    function xr(l) {
        var t = Vo(l.alternate, l, Pt);
        l.memoizedProps = l.pendingProps,
        t === null ? Mu(l) : tl = t
    }
    function pr(l) {
        var t = l
          , e = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Bo(e, t, t.pendingProps, t.type, void 0, al);
            break;
        case 11:
            t = Bo(e, t, t.pendingProps, t.type.render, t.ref, al);
            break;
        case 5:
            Wc(t);
        default:
            wo(e, t),
            t = tl = vs(t, Pt),
            t = Vo(e, t, Pt)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? Mu(l) : tl = t
    }
    function Na(l, t, e, a) {
        Vt = Be = null,
        Wc(t),
        ya = null,
        Ia = 0;
        var n = t.return;
        try {
            if (lh(l, n, t, e, al)) {
                Ol = 1,
                gu(l, Tt(e, l.current)),
                tl = null;
                return
            }
        } catch (u) {
            if (n !== null)
                throw tl = n,
                u;
            Ol = 1,
            gu(l, Tt(e, l.current)),
            tl = null;
            return
        }
        t.flags & 32768 ? (cl || a === 1 ? l = !0 : Ta || (al & 536870912) !== 0 ? l = !1 : (ye = l = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = gt.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Sr(t, l)) : Mu(t)
    }
    function Mu(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                Sr(t, ye);
                return
            }
            l = t.return;
            var e = ah(t.alternate, t, Pt);
            if (e !== null) {
                tl = e;
                return
            }
            if (t = t.sibling,
            t !== null) {
                tl = t;
                return
            }
            tl = t = l
        } while (t !== null);
        Ol === 0 && (Ol = 5)
    }
    function Sr(l, t) {
        do {
            var e = nh(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767,
                tl = e;
                return
            }
            if (e = l.return,
            e !== null && (e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                tl = l;
                return
            }
            tl = l = e
        } while (l !== null);
        Ol = 6,
        tl = null
    }
    function zr(l, t, e, a, n, u, c, i, s) {
        l.cancelPendingCommit = null;
        do
            _u();
        while (Xl !== 0);
        if ((dl & 6) !== 0)
            throw Error(h(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(h(177));
            if (u = t.lanes | t.childLanes,
            u |= Tc,
            w0(l, e, u, c, i, s),
            l === pl && (tl = pl = null,
            al = 0),
            ja = t,
            xe = l,
            le = e,
            Di = u,
            Ui = n,
            rr = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            yh(Dn, function() {
                return Nr(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = x.T,
                x.T = null,
                n = j.p,
                j.p = 2,
                c = dl,
                dl |= 4;
                try {
                    uh(l, t, e)
                } finally {
                    dl = c,
                    j.p = n,
                    x.T = a
                }
            }
            Xl = 1,
            Tr(),
            Er(),
            jr()
        }
    }
    function Tr() {
        if (Xl === 1) {
            Xl = 0;
            var l = xe
              , t = ja
              , e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = x.T,
                x.T = null;
                var a = j.p;
                j.p = 2;
                var n = dl;
                dl |= 4;
                try {
                    ar(t, l);
                    var u = Ji
                      , c = fs(l.containerInfo)
                      , i = u.focusedElem
                      , s = u.selectionRange;
                    if (c !== i && i && i.ownerDocument && is(i.ownerDocument.documentElement, i)) {
                        if (s !== null && bc(i)) {
                            var g = s.start
                              , p = s.end;
                            if (p === void 0 && (p = g),
                            "selectionStart"in i)
                                i.selectionStart = g,
                                i.selectionEnd = Math.min(p, i.value.length);
                            else {
                                var T = i.ownerDocument || document
                                  , y = T && T.defaultView || window;
                                if (y.getSelection) {
                                    var b = y.getSelection()
                                      , D = i.textContent.length
                                      , Q = Math.min(s.start, D)
                                      , bl = s.end === void 0 ? Q : Math.min(s.end, D);
                                    !b.extend && Q > bl && (c = bl,
                                    bl = Q,
                                    Q = c);
                                    var d = cs(i, Q)
                                      , o = cs(i, bl);
                                    if (d && o && (b.rangeCount !== 1 || b.anchorNode !== d.node || b.anchorOffset !== d.offset || b.focusNode !== o.node || b.focusOffset !== o.offset)) {
                                        var m = T.createRange();
                                        m.setStart(d.node, d.offset),
                                        b.removeAllRanges(),
                                        Q > bl ? (b.addRange(m),
                                        b.extend(o.node, o.offset)) : (m.setEnd(o.node, o.offset),
                                        b.addRange(m))
                                    }
                                }
                            }
                        }
                        for (T = [],
                        b = i; b = b.parentNode; )
                            b.nodeType === 1 && T.push({
                                element: b,
                                left: b.scrollLeft,
                                top: b.scrollTop
                            });
                        for (typeof i.focus == "function" && i.focus(),
                        i = 0; i < T.length; i++) {
                            var S = T[i];
                            S.element.scrollLeft = S.left,
                            S.element.scrollTop = S.top
                        }
                    }
                    Qu = !!Ki,
                    Ji = Ki = null
                } finally {
                    dl = n,
                    j.p = a,
                    x.T = e
                }
            }
            l.current = t,
            Xl = 2
        }
    }
    function Er() {
        if (Xl === 2) {
            Xl = 0;
            var l = xe
              , t = ja
              , e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = x.T,
                x.T = null;
                var a = j.p;
                j.p = 2;
                var n = dl;
                dl |= 4;
                try {
                    Io(l, t.alternate, t)
                } finally {
                    dl = n,
                    j.p = a,
                    x.T = e
                }
            }
            Xl = 3
        }
    }
    function jr() {
        if (Xl === 4 || Xl === 3) {
            Xl = 0,
            q0();
            var l = xe
              , t = ja
              , e = le
              , a = rr;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xl = 5 : (Xl = 0,
            ja = xe = null,
            Ar(l, l.pendingLanes));
            var n = l.pendingLanes;
            if (n === 0 && (be = null),
            Pu(e),
            t = t.stateNode,
            rt && typeof rt.onCommitFiberRoot == "function")
                try {
                    rt.onCommitFiberRoot(Ha, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = x.T,
                n = j.p,
                j.p = 2,
                x.T = null;
                try {
                    for (var u = l.onRecoverableError, c = 0; c < a.length; c++) {
                        var i = a[c];
                        u(i.value, {
                            componentStack: i.stack
                        })
                    }
                } finally {
                    x.T = t,
                    j.p = n
                }
            }
            (le & 3) !== 0 && _u(),
            Bt(l),
            n = l.pendingLanes,
            (e & 261930) !== 0 && (n & 42) !== 0 ? l === Ci ? yn++ : (yn = 0,
            Ci = l) : yn = 0,
            vn(0)
        }
    }
    function Ar(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        Wa(t)))
    }
    function _u() {
        return Tr(),
        Er(),
        jr(),
        Nr()
    }
    function Nr() {
        if (Xl !== 5)
            return !1;
        var l = xe
          , t = Di;
        Di = 0;
        var e = Pu(le)
          , a = x.T
          , n = j.p;
        try {
            j.p = 32 > e ? 32 : e,
            x.T = null,
            e = Ui,
            Ui = null;
            var u = xe
              , c = le;
            if (Xl = 0,
            ja = xe = null,
            le = 0,
            (dl & 6) !== 0)
                throw Error(h(331));
            var i = dl;
            if (dl |= 4,
            fr(u.current),
            ur(u, u.current, c, e),
            dl = i,
            vn(0, !1),
            rt && typeof rt.onPostCommitFiberRoot == "function")
                try {
                    rt.onPostCommitFiberRoot(Ha, u)
                } catch {}
            return !0
        } finally {
            j.p = n,
            x.T = a,
            Ar(l, t)
        }
    }
    function Mr(l, t, e) {
        t = Tt(e, t),
        t = ri(l.stateNode, t, 2),
        l = de(l, t, 2),
        l !== null && (qa(l, 2),
        Bt(l))
    }
    function gl(l, t, e) {
        if (l.tag === 3)
            Mr(l, l, e);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Mr(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (be === null || !be.has(a))) {
                        l = Tt(e, l),
                        e = _o(2),
                        a = de(t, e, 2),
                        a !== null && (Oo(e, a, t, l),
                        qa(a, 2),
                        Bt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function qi(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new fh;
            var n = new Set;
            a.set(t, n)
        } else
            n = a.get(t),
            n === void 0 && (n = new Set,
            a.set(t, n));
        n.has(e) || (Mi = !0,
        n.add(e),
        l = hh.bind(null, l, t, e),
        t.then(l, l))
    }
    function hh(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t),
        l.pingedLanes |= l.suspendedLanes & e,
        l.warmLanes &= ~e,
        pl === l && (al & e) === e && (Ol === 4 || Ol === 3 && (al & 62914560) === al && 300 > ot() - Tu ? (dl & 2) === 0 && Aa(l, 0) : _i |= e,
        Ea === al && (Ea = 0)),
        Bt(l)
    }
    function _r(l, t) {
        t === 0 && (t = zf()),
        l = He(l, t),
        l !== null && (qa(l, t),
        Bt(l))
    }
    function mh(l) {
        var t = l.memoizedState
          , e = 0;
        t !== null && (e = t.retryLane),
        _r(l, e)
    }
    function gh(l, t) {
        var e = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var a = l.stateNode
              , n = l.memoizedState;
            n !== null && (e = n.retryLane);
            break;
        case 19:
            a = l.stateNode;
            break;
        case 22:
            a = l.stateNode._retryCache;
            break;
        default:
            throw Error(h(314))
        }
        a !== null && a.delete(t),
        _r(l, e)
    }
    function yh(l, t) {
        return ee(l, t)
    }
    var Ou = null
      , Ma = null
      , Bi = !1
      , Du = !1
      , Yi = !1
      , Se = 0;
    function Bt(l) {
        l !== Ma && l.next === null && (Ma === null ? Ou = Ma = l : Ma = Ma.next = l),
        Du = !0,
        Bi || (Bi = !0,
        bh())
    }
    function vn(l, t) {
        if (!Yi && Du) {
            Yi = !0;
            do
                for (var e = !1, a = Ou; a !== null; ) {
                    if (l !== 0) {
                        var n = a.pendingLanes;
                        if (n === 0)
                            var u = 0;
                        else {
                            var c = a.suspendedLanes
                              , i = a.pingedLanes;
                            u = (1 << 31 - dt(42 | l) + 1) - 1,
                            u &= n & ~(c & ~i),
                            u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0
                        }
                        u !== 0 && (e = !0,
                        Cr(a, u))
                    } else
                        u = al,
                        u = Rn(a, a === pl ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (u & 3) === 0 || Ra(a, u) || (e = !0,
                        Cr(a, u));
                    a = a.next
                }
            while (e);
            Yi = !1
        }
    }
    function vh() {
        Or()
    }
    function Or() {
        Du = Bi = !1;
        var l = 0;
        Se !== 0 && Mh() && (l = Se);
        for (var t = ot(), e = null, a = Ou; a !== null; ) {
            var n = a.next
              , u = Dr(a, t);
            u === 0 ? (a.next = null,
            e === null ? Ou = n : e.next = n,
            n === null && (Ma = e)) : (e = a,
            (l !== 0 || (u & 3) !== 0) && (Du = !0)),
            a = n
        }
        Xl !== 0 && Xl !== 5 || vn(l),
        Se !== 0 && (Se = 0)
    }
    function Dr(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
            var c = 31 - dt(u)
              , i = 1 << c
              , s = n[c];
            s === -1 ? ((i & e) === 0 || (i & a) !== 0) && (n[c] = Z0(i, t)) : s <= t && (l.expiredLanes |= i),
            u &= ~i
        }
        if (t = pl,
        e = al,
        e = Rn(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a = l.callbackNode,
        e === 0 || l === t && (ml === 2 || ml === 9) || l.cancelPendingCommit !== null)
            return a !== null && a !== null && Wu(a),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((e & 3) === 0 || Ra(l, e)) {
            if (t = e & -e,
            t === l.callbackPriority)
                return t;
            switch (a !== null && Wu(a),
            Pu(e)) {
            case 2:
            case 8:
                e = pf;
                break;
            case 32:
                e = Dn;
                break;
            case 268435456:
                e = Sf;
                break;
            default:
                e = Dn
            }
            return a = Ur.bind(null, l),
            e = ee(e, a),
            l.callbackPriority = t,
            l.callbackNode = e,
            t
        }
        return a !== null && a !== null && Wu(a),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Ur(l, t) {
        if (Xl !== 0 && Xl !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var e = l.callbackNode;
        if (_u() && l.callbackNode !== e)
            return null;
        var a = al;
        return a = Rn(l, l === pl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a === 0 ? null : (hr(l, a, t),
        Dr(l, ot()),
        l.callbackNode != null && l.callbackNode === e ? Ur.bind(null, l) : null)
    }
    function Cr(l, t) {
        if (_u())
            return null;
        hr(l, t, !0)
    }
    function bh() {
        Oh(function() {
            (dl & 6) !== 0 ? ee(xf, vh) : Or()
        })
    }
    function Gi() {
        if (Se === 0) {
            var l = ha;
            l === 0 && (l = Un,
            Un <<= 1,
            (Un & 261888) === 0 && (Un = 256)),
            Se = l
        }
        return Se
    }
    function Hr(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Gn("" + l)
    }
    function Rr(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name,
        e.value = t.value,
        l.id && e.setAttribute("form", l.id),
        t.parentNode.insertBefore(e, t),
        l = new FormData(l),
        e.parentNode.removeChild(e),
        l
    }
    function xh(l, t, e, a, n) {
        if (t === "submit" && e && e.stateNode === n) {
            var u = Hr((n[at] || null).action)
              , c = a.submitter;
            c && (t = (t = c[at] || null) ? Hr(t.formAction) : c.getAttribute("formAction"),
            t !== null && (u = t,
            c = null));
            var i = new Vn("action","action",null,a,n);
            l.push({
                event: i,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (Se !== 0) {
                                var s = c ? Rr(n, c) : new FormData(n);
                                ui(e, {
                                    pending: !0,
                                    data: s,
                                    method: n.method,
                                    action: u
                                }, null, s)
                            }
                        } else
                            typeof u == "function" && (i.preventDefault(),
                            s = c ? Rr(n, c) : new FormData(n),
                            ui(e, {
                                pending: !0,
                                data: s,
                                method: n.method,
                                action: u
                            }, u, s))
                    },
                    currentTarget: n
                }]
            })
        }
    }
    for (var Xi = 0; Xi < zc.length; Xi++) {
        var Qi = zc[Xi]
          , ph = Qi.toLowerCase()
          , Sh = Qi[0].toUpperCase() + Qi.slice(1);
        Dt(ph, "on" + Sh)
    }
    Dt(rs, "onAnimationEnd"),
    Dt(ds, "onAnimationIteration"),
    Dt(hs, "onAnimationStart"),
    Dt("dblclick", "onDoubleClick"),
    Dt("focusin", "onFocus"),
    Dt("focusout", "onBlur"),
    Dt(Bd, "onTransitionRun"),
    Dt(Yd, "onTransitionStart"),
    Dt(Gd, "onTransitionCancel"),
    Dt(ms, "onTransitionEnd"),
    Pe("onMouseEnter", ["mouseout", "mouseover"]),
    Pe("onMouseLeave", ["mouseout", "mouseover"]),
    Pe("onPointerEnter", ["pointerout", "pointerover"]),
    Pe("onPointerLeave", ["pointerout", "pointerover"]),
    Oe("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Oe("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Oe("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Oe("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Oe("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Oe("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , zh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));
    function qr(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e]
              , n = a.event;
            a = a.listeners;
            l: {
                var u = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var i = a[c]
                          , s = i.instance
                          , g = i.currentTarget;
                        if (i = i.listener,
                        s !== u && n.isPropagationStopped())
                            break l;
                        u = i,
                        n.currentTarget = g;
                        try {
                            u(n)
                        } catch (p) {
                            Kn(p)
                        }
                        n.currentTarget = null,
                        u = s
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (i = a[c],
                        s = i.instance,
                        g = i.currentTarget,
                        i = i.listener,
                        s !== u && n.isPropagationStopped())
                            break l;
                        u = i,
                        n.currentTarget = g;
                        try {
                            u(n)
                        } catch (p) {
                            Kn(p)
                        }
                        n.currentTarget = null,
                        u = s
                    }
            }
        }
    }
    function el(l, t) {
        var e = t[lc];
        e === void 0 && (e = t[lc] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Br(t, l, 2, !1),
        e.add(a))
    }
    function Li(l, t, e) {
        var a = 0;
        t && (a |= 4),
        Br(e, l, a, t)
    }
    var Uu = "_reactListening" + Math.random().toString(36).slice(2);
    function Vi(l) {
        if (!l[Uu]) {
            l[Uu] = !0,
            _f.forEach(function(e) {
                e !== "selectionchange" && (zh.has(e) || Li(e, !1, l),
                Li(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[Uu] || (t[Uu] = !0,
            Li("selectionchange", !1, t))
        }
    }
    function Br(l, t, e, a) {
        switch (d0(t)) {
        case 2:
            var n = Wh;
            break;
        case 8:
            n = Fh;
            break;
        default:
            n = nf
        }
        e = n.bind(null, t, e, l),
        n = void 0,
        !sc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0),
        a ? n !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: n
        }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {
            passive: n
        }) : l.addEventListener(t, e, !1)
    }
    function Zi(l, t, e, a, n) {
        var u = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var i = a.stateNode.containerInfo;
                    if (i === n)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var s = c.tag;
                            if ((s === 3 || s === 4) && c.stateNode.containerInfo === n)
                                return;
                            c = c.return
                        }
                    for (; i !== null; ) {
                        if (c = We(i),
                        c === null)
                            return;
                        if (s = c.tag,
                        s === 5 || s === 6 || s === 26 || s === 27) {
                            a = u = c;
                            continue l
                        }
                        i = i.parentNode
                    }
                }
                a = a.return
            }
        Qf(function() {
            var g = u
              , p = ic(e)
              , T = [];
            l: {
                var y = gs.get(l);
                if (y !== void 0) {
                    var b = Vn
                      , D = l;
                    switch (l) {
                    case "keypress":
                        if (Qn(e) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        b = gd;
                        break;
                    case "focusin":
                        D = "focus",
                        b = hc;
                        break;
                    case "focusout":
                        D = "blur",
                        b = hc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        b = hc;
                        break;
                    case "click":
                        if (e.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        b = Zf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        b = ad;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        b = bd;
                        break;
                    case rs:
                    case ds:
                    case hs:
                        b = cd;
                        break;
                    case ms:
                        b = pd;
                        break;
                    case "scroll":
                    case "scrollend":
                        b = td;
                        break;
                    case "wheel":
                        b = zd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        b = fd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        b = Kf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        b = Ed
                    }
                    var Q = (t & 4) !== 0
                      , bl = !Q && (l === "scroll" || l === "scrollend")
                      , d = Q ? y !== null ? y + "Capture" : null : y;
                    Q = [];
                    for (var o = g, m; o !== null; ) {
                        var S = o;
                        if (m = S.stateNode,
                        S = S.tag,
                        S !== 5 && S !== 26 && S !== 27 || m === null || d === null || (S = Ga(o, d),
                        S != null && Q.push(xn(o, S, m))),
                        bl)
                            break;
                        o = o.return
                    }
                    0 < Q.length && (y = new b(y,D,null,e,p),
                    T.push({
                        event: y,
                        listeners: Q
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (y = l === "mouseover" || l === "pointerover",
                    b = l === "mouseout" || l === "pointerout",
                    y && e !== cc && (D = e.relatedTarget || e.fromElement) && (We(D) || D[$e]))
                        break l;
                    if ((b || y) && (y = p.window === p ? p : (y = p.ownerDocument) ? y.defaultView || y.parentWindow : window,
                    b ? (D = e.relatedTarget || e.toElement,
                    b = g,
                    D = D ? We(D) : null,
                    D !== null && (bl = Z(D),
                    Q = D.tag,
                    D !== bl || Q !== 5 && Q !== 27 && Q !== 6) && (D = null)) : (b = null,
                    D = g),
                    b !== D)) {
                        if (Q = Zf,
                        S = "onMouseLeave",
                        d = "onMouseEnter",
                        o = "mouse",
                        (l === "pointerout" || l === "pointerover") && (Q = Kf,
                        S = "onPointerLeave",
                        d = "onPointerEnter",
                        o = "pointer"),
                        bl = b == null ? y : Ya(b),
                        m = D == null ? y : Ya(D),
                        y = new Q(S,o + "leave",b,e,p),
                        y.target = bl,
                        y.relatedTarget = m,
                        S = null,
                        We(p) === g && (Q = new Q(d,o + "enter",D,e,p),
                        Q.target = m,
                        Q.relatedTarget = bl,
                        S = Q),
                        bl = S,
                        b && D)
                            t: {
                                for (Q = Th,
                                d = b,
                                o = D,
                                m = 0,
                                S = d; S; S = Q(S))
                                    m++;
                                S = 0;
                                for (var Y = o; Y; Y = Q(Y))
                                    S++;
                                for (; 0 < m - S; )
                                    d = Q(d),
                                    m--;
                                for (; 0 < S - m; )
                                    o = Q(o),
                                    S--;
                                for (; m--; ) {
                                    if (d === o || o !== null && d === o.alternate) {
                                        Q = d;
                                        break t
                                    }
                                    d = Q(d),
                                    o = Q(o)
                                }
                                Q = null
                            }
                        else
                            Q = null;
                        b !== null && Yr(T, y, b, Q, !1),
                        D !== null && bl !== null && Yr(T, bl, D, Q, !0)
                    }
                }
                l: {
                    if (y = g ? Ya(g) : window,
                    b = y.nodeName && y.nodeName.toLowerCase(),
                    b === "select" || b === "input" && y.type === "file")
                        var ol = ls;
                    else if (If(y))
                        if (ts)
                            ol = Hd;
                        else {
                            ol = Ud;
                            var R = Dd
                        }
                    else
                        b = y.nodeName,
                        !b || b.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? g && uc(g.elementType) && (ol = ls) : ol = Cd;
                    if (ol && (ol = ol(l, g))) {
                        Pf(T, ol, e, p);
                        break l
                    }
                    R && R(l, y, g),
                    l === "focusout" && g && y.type === "number" && g.memoizedProps.value != null && nc(y, "number", y.value)
                }
                switch (R = g ? Ya(g) : window,
                l) {
                case "focusin":
                    (If(R) || R.contentEditable === "true") && (ua = R,
                    xc = g,
                    Ja = null);
                    break;
                case "focusout":
                    Ja = xc = ua = null;
                    break;
                case "mousedown":
                    pc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    pc = !1,
                    ss(T, e, p);
                    break;
                case "selectionchange":
                    if (qd)
                        break;
                case "keydown":
                case "keyup":
                    ss(T, e, p)
                }
                var F;
                if (gc)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var nl = "onCompositionStart";
                            break l;
                        case "compositionend":
                            nl = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            nl = "onCompositionUpdate";
                            break l
                        }
                        nl = void 0
                    }
                else
                    na ? Wf(l, e) && (nl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (nl = "onCompositionStart");
                nl && (Jf && e.locale !== "ko" && (na || nl !== "onCompositionStart" ? nl === "onCompositionEnd" && na && (F = Lf()) : (ue = p,
                oc = "value"in ue ? ue.value : ue.textContent,
                na = !0)),
                R = Cu(g, nl),
                0 < R.length && (nl = new wf(nl,l,null,e,p),
                T.push({
                    event: nl,
                    listeners: R
                }),
                F ? nl.data = F : (F = Ff(e),
                F !== null && (nl.data = F)))),
                (F = Ad ? Nd(l, e) : Md(l, e)) && (nl = Cu(g, "onBeforeInput"),
                0 < nl.length && (R = new wf("onBeforeInput","beforeinput",null,e,p),
                T.push({
                    event: R,
                    listeners: nl
                }),
                R.data = F)),
                xh(T, l, g, e, p)
            }
            qr(T, t)
        })
    }
    function xn(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }
    function Cu(l, t) {
        for (var e = t + "Capture", a = []; l !== null; ) {
            var n = l
              , u = n.stateNode;
            if (n = n.tag,
            n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ga(l, e),
            n != null && a.unshift(xn(l, n, u)),
            n = Ga(l, t),
            n != null && a.push(xn(l, n, u))),
            l.tag === 3)
                return a;
            l = l.return
        }
        return []
    }
    function Th(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Yr(l, t, e, a, n) {
        for (var u = t._reactName, c = []; e !== null && e !== a; ) {
            var i = e
              , s = i.alternate
              , g = i.stateNode;
            if (i = i.tag,
            s !== null && s === a)
                break;
            i !== 5 && i !== 26 && i !== 27 || g === null || (s = g,
            n ? (g = Ga(e, u),
            g != null && c.unshift(xn(e, g, s))) : n || (g = Ga(e, u),
            g != null && c.push(xn(e, g, s)))),
            e = e.return
        }
        c.length !== 0 && l.push({
            event: t,
            listeners: c
        })
    }
    var Eh = /\r\n?/g
      , jh = /\u0000|\uFFFD/g;
    function Gr(l) {
        return (typeof l == "string" ? l : "" + l).replace(Eh, `
`).replace(jh, "")
    }
    function Xr(l, t) {
        return t = Gr(t),
        Gr(l) === t
    }
    function vl(l, t, e, a, n, u) {
        switch (e) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ta(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ta(l, "" + a);
            break;
        case "className":
            Bn(l, "class", a);
            break;
        case "tabIndex":
            Bn(l, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Bn(l, e, a);
            break;
        case "style":
            Gf(l, a, u);
            break;
        case "data":
            if (t !== "object") {
                Bn(l, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Gn("" + a),
            l.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof u == "function" && (e === "formAction" ? (t !== "input" && vl(l, t, "name", n.name, n, null),
                vl(l, t, "formEncType", n.formEncType, n, null),
                vl(l, t, "formMethod", n.formMethod, n, null),
                vl(l, t, "formTarget", n.formTarget, n, null)) : (vl(l, t, "encType", n.encType, n, null),
                vl(l, t, "method", n.method, n, null),
                vl(l, t, "target", n.target, n, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Gn("" + a),
            l.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (l.onclick = Gt);
            break;
        case "onScroll":
            a != null && el("scroll", l);
            break;
        case "onScrollEnd":
            a != null && el("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(h(61));
                if (e = a.__html,
                e != null) {
                    if (n.children != null)
                        throw Error(h(60));
                    l.innerHTML = e
                }
            }
            break;
        case "multiple":
            l.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            l.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            e = Gn("" + a),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
            break;
        case "popover":
            el("beforetoggle", l),
            el("toggle", l),
            qn(l, "popover", a);
            break;
        case "xlinkActuate":
            Yt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Yt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Yt(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Yt(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Yt(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Yt(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Yt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Yt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Yt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            qn(l, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = P0.get(e) || e,
            qn(l, e, a))
        }
    }
    function wi(l, t, e, a, n, u) {
        switch (e) {
        case "style":
            Gf(l, a, u);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html"in a))
                    throw Error(h(61));
                if (e = a.__html,
                e != null) {
                    if (n.children != null)
                        throw Error(h(60));
                    l.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? ta(l, a) : (typeof a == "number" || typeof a == "bigint") && ta(l, "" + a);
            break;
        case "onScroll":
            a != null && el("scroll", l);
            break;
        case "onScrollEnd":
            a != null && el("scrollend", l);
            break;
        case "onClick":
            a != null && (l.onclick = Gt);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Of.hasOwnProperty(e))
                l: {
                    if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"),
                    t = e.slice(2, n ? e.length - 7 : void 0),
                    u = l[at] || null,
                    u = u != null ? u[e] : null,
                    typeof u == "function" && l.removeEventListener(t, u, n),
                    typeof a == "function")) {
                        typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)),
                        l.addEventListener(t, a, n);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : qn(l, e, a)
                }
        }
    }
    function Wl(l, t, e) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            el("error", l),
            el("load", l);
            var a = !1, n = !1, u;
            for (u in e)
                if (e.hasOwnProperty(u)) {
                    var c = e[u];
                    if (c != null)
                        switch (u) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            n = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(h(137, t));
                        default:
                            vl(l, t, u, c, e, null)
                        }
                }
            n && vl(l, t, "srcSet", e.srcSet, e, null),
            a && vl(l, t, "src", e.src, e, null);
            return;
        case "input":
            el("invalid", l);
            var i = u = c = n = null
              , s = null
              , g = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var p = e[a];
                    if (p != null)
                        switch (a) {
                        case "name":
                            n = p;
                            break;
                        case "type":
                            c = p;
                            break;
                        case "checked":
                            s = p;
                            break;
                        case "defaultChecked":
                            g = p;
                            break;
                        case "value":
                            u = p;
                            break;
                        case "defaultValue":
                            i = p;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (p != null)
                                throw Error(h(137, t));
                            break;
                        default:
                            vl(l, t, a, p, e, null)
                        }
                }
            Rf(l, u, i, s, g, c, n, !1);
            return;
        case "select":
            el("invalid", l),
            a = c = u = null;
            for (n in e)
                if (e.hasOwnProperty(n) && (i = e[n],
                i != null))
                    switch (n) {
                    case "value":
                        u = i;
                        break;
                    case "defaultValue":
                        c = i;
                        break;
                    case "multiple":
                        a = i;
                    default:
                        vl(l, t, n, i, e, null)
                    }
            t = u,
            e = c,
            l.multiple = !!a,
            t != null ? la(l, !!a, t, !1) : e != null && la(l, !!a, e, !0);
            return;
        case "textarea":
            el("invalid", l),
            u = n = a = null;
            for (c in e)
                if (e.hasOwnProperty(c) && (i = e[c],
                i != null))
                    switch (c) {
                    case "value":
                        a = i;
                        break;
                    case "defaultValue":
                        n = i;
                        break;
                    case "children":
                        u = i;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (i != null)
                            throw Error(h(91));
                        break;
                    default:
                        vl(l, t, c, i, e, null)
                    }
            Bf(l, a, n, u);
            return;
        case "option":
            for (s in e)
                if (e.hasOwnProperty(s) && (a = e[s],
                a != null))
                    switch (s) {
                    case "selected":
                        l.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        vl(l, t, s, a, e, null)
                    }
            return;
        case "dialog":
            el("beforetoggle", l),
            el("toggle", l),
            el("cancel", l),
            el("close", l);
            break;
        case "iframe":
        case "object":
            el("load", l);
            break;
        case "video":
        case "audio":
            for (a = 0; a < bn.length; a++)
                el(bn[a], l);
            break;
        case "image":
            el("error", l),
            el("load", l);
            break;
        case "details":
            el("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            el("error", l),
            el("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (g in e)
                if (e.hasOwnProperty(g) && (a = e[g],
                a != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(h(137, t));
                    default:
                        vl(l, t, g, a, e, null)
                    }
            return;
        default:
            if (uc(t)) {
                for (p in e)
                    e.hasOwnProperty(p) && (a = e[p],
                    a !== void 0 && wi(l, t, p, a, e, void 0));
                return
            }
        }
        for (i in e)
            e.hasOwnProperty(i) && (a = e[i],
            a != null && vl(l, t, i, a, e, null))
    }
    function Ah(l, t, e, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var n = null
              , u = null
              , c = null
              , i = null
              , s = null
              , g = null
              , p = null;
            for (b in e) {
                var T = e[b];
                if (e.hasOwnProperty(b) && T != null)
                    switch (b) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        s = T;
                    default:
                        a.hasOwnProperty(b) || vl(l, t, b, null, a, T)
                    }
            }
            for (var y in a) {
                var b = a[y];
                if (T = e[y],
                a.hasOwnProperty(y) && (b != null || T != null))
                    switch (y) {
                    case "type":
                        u = b;
                        break;
                    case "name":
                        n = b;
                        break;
                    case "checked":
                        g = b;
                        break;
                    case "defaultChecked":
                        p = b;
                        break;
                    case "value":
                        c = b;
                        break;
                    case "defaultValue":
                        i = b;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(h(137, t));
                        break;
                    default:
                        b !== T && vl(l, t, y, b, a, T)
                    }
            }
            ac(l, c, i, s, g, p, u, n);
            return;
        case "select":
            b = c = i = y = null;
            for (u in e)
                if (s = e[u],
                e.hasOwnProperty(u) && s != null)
                    switch (u) {
                    case "value":
                        break;
                    case "multiple":
                        b = s;
                    default:
                        a.hasOwnProperty(u) || vl(l, t, u, null, a, s)
                    }
            for (n in a)
                if (u = a[n],
                s = e[n],
                a.hasOwnProperty(n) && (u != null || s != null))
                    switch (n) {
                    case "value":
                        y = u;
                        break;
                    case "defaultValue":
                        i = u;
                        break;
                    case "multiple":
                        c = u;
                    default:
                        u !== s && vl(l, t, n, u, a, s)
                    }
            t = i,
            e = c,
            a = b,
            y != null ? la(l, !!e, y, !1) : !!a != !!e && (t != null ? la(l, !!e, t, !0) : la(l, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            b = y = null;
            for (i in e)
                if (n = e[i],
                e.hasOwnProperty(i) && n != null && !a.hasOwnProperty(i))
                    switch (i) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        vl(l, t, i, null, a, n)
                    }
            for (c in a)
                if (n = a[c],
                u = e[c],
                a.hasOwnProperty(c) && (n != null || u != null))
                    switch (c) {
                    case "value":
                        y = n;
                        break;
                    case "defaultValue":
                        b = n;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (n != null)
                            throw Error(h(91));
                        break;
                    default:
                        n !== u && vl(l, t, c, n, a, u)
                    }
            qf(l, y, b);
            return;
        case "option":
            for (var D in e)
                if (y = e[D],
                e.hasOwnProperty(D) && y != null && !a.hasOwnProperty(D))
                    switch (D) {
                    case "selected":
                        l.selected = !1;
                        break;
                    default:
                        vl(l, t, D, null, a, y)
                    }
            for (s in a)
                if (y = a[s],
                b = e[s],
                a.hasOwnProperty(s) && y !== b && (y != null || b != null))
                    switch (s) {
                    case "selected":
                        l.selected = y && typeof y != "function" && typeof y != "symbol";
                        break;
                    default:
                        vl(l, t, s, y, a, b)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Q in e)
                y = e[Q],
                e.hasOwnProperty(Q) && y != null && !a.hasOwnProperty(Q) && vl(l, t, Q, null, a, y);
            for (g in a)
                if (y = a[g],
                b = e[g],
                a.hasOwnProperty(g) && y !== b && (y != null || b != null))
                    switch (g) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(h(137, t));
                        break;
                    default:
                        vl(l, t, g, y, a, b)
                    }
            return;
        default:
            if (uc(t)) {
                for (var bl in e)
                    y = e[bl],
                    e.hasOwnProperty(bl) && y !== void 0 && !a.hasOwnProperty(bl) && wi(l, t, bl, void 0, a, y);
                for (p in a)
                    y = a[p],
                    b = e[p],
                    !a.hasOwnProperty(p) || y === b || y === void 0 && b === void 0 || wi(l, t, p, y, a, b);
                return
            }
        }
        for (var d in e)
            y = e[d],
            e.hasOwnProperty(d) && y != null && !a.hasOwnProperty(d) && vl(l, t, d, null, a, y);
        for (T in a)
            y = a[T],
            b = e[T],
            !a.hasOwnProperty(T) || y === b || y == null && b == null || vl(l, t, T, y, a, b)
    }
    function Qr(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Nh() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
                var n = e[a]
                  , u = n.transferSize
                  , c = n.initiatorType
                  , i = n.duration;
                if (u && i && Qr(c)) {
                    for (c = 0,
                    i = n.responseEnd,
                    a += 1; a < e.length; a++) {
                        var s = e[a]
                          , g = s.startTime;
                        if (g > i)
                            break;
                        var p = s.transferSize
                          , T = s.initiatorType;
                        p && Qr(T) && (s = s.responseEnd,
                        c += p * (s < i ? 1 : (i - g) / (s - g)))
                    }
                    if (--a,
                    t += 8 * (u + c) / (n.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var Ki = null
      , Ji = null;
    function Hu(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Lr(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Vr(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function ki(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var $i = null;
    function Mh() {
        var l = window.event;
        return l && l.type === "popstate" ? l === $i ? !1 : ($i = l,
        !0) : ($i = null,
        !1)
    }
    var Zr = typeof setTimeout == "function" ? setTimeout : void 0
      , _h = typeof clearTimeout == "function" ? clearTimeout : void 0
      , wr = typeof Promise == "function" ? Promise : void 0
      , Oh = typeof queueMicrotask == "function" ? queueMicrotask : typeof wr < "u" ? function(l) {
        return wr.resolve(null).then(l).catch(Dh)
    }
    : Zr;
    function Dh(l) {
        setTimeout(function() {
            throw l
        })
    }
    function ze(l) {
        return l === "head"
    }
    function Kr(l, t) {
        var e = t
          , a = 0;
        do {
            var n = e.nextSibling;
            if (l.removeChild(e),
            n && n.nodeType === 8)
                if (e = n.data,
                e === "/$" || e === "/&") {
                    if (a === 0) {
                        l.removeChild(n),
                        Ua(t);
                        return
                    }
                    a--
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                    a++;
                else if (e === "html")
                    pn(l.ownerDocument.documentElement);
                else if (e === "head") {
                    e = l.ownerDocument.head,
                    pn(e);
                    for (var u = e.firstChild; u; ) {
                        var c = u.nextSibling
                          , i = u.nodeName;
                        u[Ba] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u),
                        u = c
                    }
                } else
                    e === "body" && pn(l.ownerDocument.body);
            e = n
        } while (e);
        Ua(t)
    }
    function Jr(l, t) {
        var e = l;
        l = 0;
        do {
            var a = e.nextSibling;
            if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display,
            e.style.display = "none") : (e.style.display = e._stashedDisplay || "",
            e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue,
            e.nodeValue = "") : e.nodeValue = e._stashedText || ""),
            a && a.nodeType === 8)
                if (e = a.data,
                e === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
            e = a
        } while (e)
    }
    function Wi(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (t = t.nextSibling,
            e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Wi(e),
                tc(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(e)
        }
    }
    function Uh(l, t, e, a) {
        for (; l.nodeType === 1; ) {
            var n = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (a) {
                if (!l[Ba])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (u = l.getAttribute("rel"),
                        u === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (u = l.getAttribute("src"),
                        (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var u = n.name == null ? null : "" + n.name;
                if (n.type === "hidden" && l.getAttribute("name") === u)
                    return l
            } else
                return l;
            if (l = Mt(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Ch(l, t, e) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Mt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function kr(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Mt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function Fi(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function Ii(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Hh(l, t) {
        var e = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || e.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            l._reactRetry = a
        }
    }
    function Mt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var Pi = null;
    function $r(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "/$" || e === "/&") {
                    if (t === 0)
                        return Mt(l.nextSibling);
                    t--
                } else
                    e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function Wr(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    e !== "/$" && e !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function Fr(l, t, e) {
        switch (t = Hu(e),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(h(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(h(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(h(454));
            return l;
        default:
            throw Error(h(451))
        }
    }
    function pn(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        tc(l)
    }
    var _t = new Map
      , Ir = new Set;
    function Ru(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var te = j.d;
    j.d = {
        f: Rh,
        r: qh,
        D: Bh,
        C: Yh,
        L: Gh,
        m: Xh,
        X: Lh,
        S: Qh,
        M: Vh
    };
    function Rh() {
        var l = te.f()
          , t = Au();
        return l || t
    }
    function qh(l) {
        var t = Fe(l);
        t !== null && t.tag === 5 && t.type === "form" ? go(t) : te.r(l)
    }
    var _a = typeof document > "u" ? null : document;
    function Pr(l, t, e) {
        var a = _a;
        if (a && typeof t == "string" && t) {
            var n = St(t);
            n = 'link[rel="' + l + '"][href="' + n + '"]',
            typeof e == "string" && (n += '[crossorigin="' + e + '"]'),
            Ir.has(n) || (Ir.add(n),
            l = {
                rel: l,
                crossOrigin: e,
                href: t
            },
            a.querySelector(n) === null && (t = a.createElement("link"),
            Wl(t, "link", l),
            Ll(t),
            a.head.appendChild(t)))
        }
    }
    function Bh(l) {
        te.D(l),
        Pr("dns-prefetch", l, null)
    }
    function Yh(l, t) {
        te.C(l, t),
        Pr("preconnect", l, t)
    }
    function Gh(l, t, e) {
        te.L(l, t, e);
        var a = _a;
        if (a && l && t) {
            var n = 'link[rel="preload"][as="' + St(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + St(e.imageSrcSet) + '"]',
            typeof e.imageSizes == "string" && (n += '[imagesizes="' + St(e.imageSizes) + '"]')) : n += '[href="' + St(l) + '"]';
            var u = n;
            switch (t) {
            case "style":
                u = Oa(l);
                break;
            case "script":
                u = Da(l)
            }
            _t.has(u) || (l = q({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e),
            _t.set(u, l),
            a.querySelector(n) !== null || t === "style" && a.querySelector(Sn(u)) || t === "script" && a.querySelector(zn(u)) || (t = a.createElement("link"),
            Wl(t, "link", l),
            Ll(t),
            a.head.appendChild(t)))
        }
    }
    function Xh(l, t) {
        te.m(l, t);
        var e = _a;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , n = 'link[rel="modulepreload"][as="' + St(a) + '"][href="' + St(l) + '"]'
              , u = n;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                u = Da(l)
            }
            if (!_t.has(u) && (l = q({
                rel: "modulepreload",
                href: l
            }, t),
            _t.set(u, l),
            e.querySelector(n) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(zn(u)))
                        return
                }
                a = e.createElement("link"),
                Wl(a, "link", l),
                Ll(a),
                e.head.appendChild(a)
            }
        }
    }
    function Qh(l, t, e) {
        te.S(l, t, e);
        var a = _a;
        if (a && l) {
            var n = Ie(a).hoistableStyles
              , u = Oa(l);
            t = t || "default";
            var c = n.get(u);
            if (!c) {
                var i = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(Sn(u)))
                    i.loading = 5;
                else {
                    l = q({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e),
                    (e = _t.get(u)) && lf(l, e);
                    var s = c = a.createElement("link");
                    Ll(s),
                    Wl(s, "link", l),
                    s._p = new Promise(function(g, p) {
                        s.onload = g,
                        s.onerror = p
                    }
                    ),
                    s.addEventListener("load", function() {
                        i.loading |= 1
                    }),
                    s.addEventListener("error", function() {
                        i.loading |= 2
                    }),
                    i.loading |= 4,
                    qu(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: i
                },
                n.set(u, c)
            }
        }
    }
    function Lh(l, t) {
        te.X(l, t);
        var e = _a;
        if (e && l) {
            var a = Ie(e).hoistableScripts
              , n = Da(l)
              , u = a.get(n);
            u || (u = e.querySelector(zn(n)),
            u || (l = q({
                src: l,
                async: !0
            }, t),
            (t = _t.get(n)) && tf(l, t),
            u = e.createElement("script"),
            Ll(u),
            Wl(u, "link", l),
            e.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function Vh(l, t) {
        te.M(l, t);
        var e = _a;
        if (e && l) {
            var a = Ie(e).hoistableScripts
              , n = Da(l)
              , u = a.get(n);
            u || (u = e.querySelector(zn(n)),
            u || (l = q({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = _t.get(n)) && tf(l, t),
            u = e.createElement("script"),
            Ll(u),
            Wl(u, "link", l),
            e.head.appendChild(u)),
            u = {
                type: "script",
                instance: u,
                count: 1,
                state: null
            },
            a.set(n, u))
        }
    }
    function l0(l, t, e, a) {
        var n = (n = k.current) ? Ru(n) : null;
        if (!n)
            throw Error(h(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Oa(e.href),
            e = Ie(n).hoistableStyles,
            a = e.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                l = Oa(e.href);
                var u = Ie(n).hoistableStyles
                  , c = u.get(l);
                if (c || (n = n.ownerDocument || n,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                u.set(l, c),
                (u = n.querySelector(Sn(l))) && !u._p && (c.instance = u,
                c.state.loading = 5),
                _t.has(l) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                },
                _t.set(l, e),
                u || Zh(n, l, e, c.state))),
                t && a === null)
                    throw Error(h(528, ""));
                return c
            }
            if (t && a !== null)
                throw Error(h(529, ""));
            return null;
        case "script":
            return t = e.async,
            e = e.src,
            typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Da(e),
            e = Ie(n).hoistableScripts,
            a = e.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(h(444, l))
        }
    }
    function Oa(l) {
        return 'href="' + St(l) + '"'
    }
    function Sn(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function t0(l) {
        return q({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function Zh(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Wl(t, "link", e),
        Ll(t),
        l.head.appendChild(t))
    }
    function Da(l) {
        return '[src="' + St(l) + '"]'
    }
    function zn(l) {
        return "script[async]" + l
    }
    function e0(l, t, e) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + St(e.href) + '"]');
                if (a)
                    return t.instance = a,
                    Ll(a),
                    a;
                var n = q({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"),
                Ll(a),
                Wl(a, "style", n),
                qu(a, e.precedence, l),
                t.instance = a;
            case "stylesheet":
                n = Oa(e.href);
                var u = l.querySelector(Sn(n));
                if (u)
                    return t.state.loading |= 4,
                    t.instance = u,
                    Ll(u),
                    u;
                a = t0(e),
                (n = _t.get(n)) && lf(a, n),
                u = (l.ownerDocument || l).createElement("link"),
                Ll(u);
                var c = u;
                return c._p = new Promise(function(i, s) {
                    c.onload = i,
                    c.onerror = s
                }
                ),
                Wl(u, "link", a),
                t.state.loading |= 4,
                qu(u, e.precedence, l),
                t.instance = u;
            case "script":
                return u = Da(e.src),
                (n = l.querySelector(zn(u))) ? (t.instance = n,
                Ll(n),
                n) : (a = e,
                (n = _t.get(u)) && (a = q({}, e),
                tf(a, n)),
                l = l.ownerDocument || l,
                n = l.createElement("script"),
                Ll(n),
                Wl(n, "link", a),
                l.head.appendChild(n),
                t.instance = n);
            case "void":
                return null;
            default:
                throw Error(h(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            qu(a, e.precedence, l));
        return t.instance
    }
    function qu(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
            var i = a[c];
            if (i.dataset.precedence === t)
                u = i;
            else if (u !== n)
                break
        }
        u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e,
        t.insertBefore(l, t.firstChild))
    }
    function lf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function tf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var Bu = null;
    function a0(l, t, e) {
        if (Bu === null) {
            var a = new Map
              , n = Bu = new Map;
            n.set(e, a)
        } else
            n = Bu,
            a = n.get(e),
            a || (a = new Map,
            n.set(e, a));
        if (a.has(l))
            return a;
        for (a.set(l, null),
        e = e.getElementsByTagName(l),
        n = 0; n < e.length; n++) {
            var u = e[n];
            if (!(u[Ba] || u[Kl] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = u.getAttribute(t) || "";
                c = l + c;
                var i = a.get(c);
                i ? i.push(u) : a.set(c, [u])
            }
        }
        return a
    }
    function n0(l, t, e) {
        l = l.ownerDocument || l,
        l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }
    function wh(l, t, e) {
        if (e === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return l = t.disabled,
                typeof t.precedence == "string" && l == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function u0(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function Kh(l, t, e, a) {
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var n = Oa(a.href)
                  , u = t.querySelector(Sn(n));
                if (u) {
                    t = u._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = Yu.bind(l),
                    t.then(l, l)),
                    e.state.loading |= 4,
                    e.instance = u,
                    Ll(u);
                    return
                }
                u = t.ownerDocument || t,
                a = t0(a),
                (n = _t.get(n)) && lf(a, n),
                u = u.createElement("link"),
                Ll(u);
                var c = u;
                c._p = new Promise(function(i, s) {
                    c.onload = i,
                    c.onerror = s
                }
                ),
                Wl(u, "link", a),
                e.instance = u
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++,
            e = Yu.bind(l),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    var ef = 0;
    function Jh(l, t) {
        return l.stylesheets && l.count === 0 && Xu(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(e) {
            var a = setTimeout(function() {
                if (l.stylesheets && Xu(l, l.stylesheets),
                l.unsuspend) {
                    var u = l.unsuspend;
                    l.unsuspend = null,
                    u()
                }
            }, 6e4 + t);
            0 < l.imgBytes && ef === 0 && (ef = 62500 * Nh());
            var n = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && Xu(l, l.stylesheets),
                l.unsuspend)) {
                    var u = l.unsuspend;
                    l.unsuspend = null,
                    u()
                }
            }, (l.imgBytes > ef ? 50 : 800) + t);
            return l.unsuspend = e,
            function() {
                l.unsuspend = null,
                clearTimeout(a),
                clearTimeout(n)
            }
        }
        : null
    }
    function Yu() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Xu(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var Gu = null;
    function Xu(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        Gu = new Map,
        t.forEach(kh, l),
        Gu = null,
        Yu.call(l))
    }
    function kh(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Gu.get(l);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                Gu.set(l, e);
                for (var n = l.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
                    var c = n[u];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c),
                    a = c)
                }
                a && e.set(null, a)
            }
            n = t.instance,
            c = n.getAttribute("data-precedence"),
            u = e.get(c) || a,
            u === a && e.set(null, n),
            e.set(c, n),
            this.count++,
            a = Yu.bind(this),
            n.addEventListener("load", a),
            n.addEventListener("error", a),
            u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(n, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var Tn = {
        $$typeof: U,
        Provider: null,
        Consumer: null,
        _currentValue: B,
        _currentValue2: B,
        _threadCount: 0
    };
    function $h(l, t, e, a, n, u, c, i, s) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Fu(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Fu(0),
        this.hiddenUpdates = Fu(null),
        this.identifierPrefix = a,
        this.onUncaughtError = n,
        this.onCaughtError = u,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.incompleteTransitions = new Map
    }
    function c0(l, t, e, a, n, u, c, i, s, g, p, T) {
        return l = new $h(l,t,e,c,s,g,p,T,i),
        t = 1,
        u === !0 && (t |= 24),
        u = mt(3, null, null, t),
        l.current = u,
        u.stateNode = l,
        t = Rc(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        u.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        },
        Gc(u),
        l
    }
    function i0(l) {
        return l ? (l = fa,
        l) : fa
    }
    function f0(l, t, e, a, n, u) {
        n = i0(n),
        a.context === null ? a.context = n : a.pendingContext = n,
        a = re(t),
        a.payload = {
            element: e
        },
        u = u === void 0 ? null : u,
        u !== null && (a.callback = u),
        e = de(l, a, t),
        e !== null && (st(e, l, t),
        ln(e, l, t))
    }
    function s0(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }
    function af(l, t) {
        s0(l, t),
        (l = l.alternate) && s0(l, t)
    }
    function o0(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = He(l, 67108864);
            t !== null && st(t, l, 67108864),
            af(l, 67108864)
        }
    }
    function r0(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = xt();
            t = Iu(t);
            var e = He(l, t);
            e !== null && st(e, l, t),
            af(l, t)
        }
    }
    var Qu = !0;
    function Wh(l, t, e, a) {
        var n = x.T;
        x.T = null;
        var u = j.p;
        try {
            j.p = 2,
            nf(l, t, e, a)
        } finally {
            j.p = u,
            x.T = n
        }
    }
    function Fh(l, t, e, a) {
        var n = x.T;
        x.T = null;
        var u = j.p;
        try {
            j.p = 8,
            nf(l, t, e, a)
        } finally {
            j.p = u,
            x.T = n
        }
    }
    function nf(l, t, e, a) {
        if (Qu) {
            var n = uf(a);
            if (n === null)
                Zi(l, t, a, Lu, e),
                h0(l, a);
            else if (Ph(n, l, t, e, a))
                a.stopPropagation();
            else if (h0(l, a),
            t & 4 && -1 < Ih.indexOf(l)) {
                for (; n !== null; ) {
                    var u = Fe(n);
                    if (u !== null)
                        switch (u.tag) {
                        case 3:
                            if (u = u.stateNode,
                            u.current.memoizedState.isDehydrated) {
                                var c = _e(u.pendingLanes);
                                if (c !== 0) {
                                    var i = u;
                                    for (i.pendingLanes |= 2,
                                    i.entangledLanes |= 2; c; ) {
                                        var s = 1 << 31 - dt(c);
                                        i.entanglements[1] |= s,
                                        c &= ~s
                                    }
                                    Bt(u),
                                    (dl & 6) === 0 && (Eu = ot() + 500,
                                    vn(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            i = He(u, 2),
                            i !== null && st(i, u, 2),
                            Au(),
                            af(u, 2)
                        }
                    if (u = uf(a),
                    u === null && Zi(l, t, a, Lu, e),
                    u === n)
                        break;
                    n = u
                }
                n !== null && a.stopPropagation()
            } else
                Zi(l, t, a, null, e)
        }
    }
    function uf(l) {
        return l = ic(l),
        cf(l)
    }
    var Lu = null;
    function cf(l) {
        if (Lu = null,
        l = We(l),
        l !== null) {
            var t = Z(l);
            if (t === null)
                l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = ll(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 31) {
                    if (l = il(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return Lu = l,
        null
    }
    function d0(l) {
        switch (l) {
        case "beforetoggle":
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
        case "toggle":
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
            return 2;
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
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (B0()) {
            case xf:
                return 2;
            case pf:
                return 8;
            case Dn:
            case Y0:
                return 32;
            case Sf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var ff = !1
      , Te = null
      , Ee = null
      , je = null
      , En = new Map
      , jn = new Map
      , Ae = []
      , Ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function h0(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            Te = null;
            break;
        case "dragenter":
        case "dragleave":
            Ee = null;
            break;
        case "mouseover":
        case "mouseout":
            je = null;
            break;
        case "pointerover":
        case "pointerout":
            En.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            jn.delete(t.pointerId)
        }
    }
    function An(l, t, e, a, n, u) {
        return l === null || l.nativeEvent !== u ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: u,
            targetContainers: [n]
        },
        t !== null && (t = Fe(t),
        t !== null && o0(t)),
        l) : (l.eventSystemFlags |= a,
        t = l.targetContainers,
        n !== null && t.indexOf(n) === -1 && t.push(n),
        l)
    }
    function Ph(l, t, e, a, n) {
        switch (t) {
        case "focusin":
            return Te = An(Te, l, t, e, a, n),
            !0;
        case "dragenter":
            return Ee = An(Ee, l, t, e, a, n),
            !0;
        case "mouseover":
            return je = An(je, l, t, e, a, n),
            !0;
        case "pointerover":
            var u = n.pointerId;
            return En.set(u, An(En.get(u) || null, l, t, e, a, n)),
            !0;
        case "gotpointercapture":
            return u = n.pointerId,
            jn.set(u, An(jn.get(u) || null, l, t, e, a, n)),
            !0
        }
        return !1
    }
    function m0(l) {
        var t = We(l.target);
        if (t !== null) {
            var e = Z(t);
            if (e !== null) {
                if (t = e.tag,
                t === 13) {
                    if (t = ll(e),
                    t !== null) {
                        l.blockedOn = t,
                        Nf(l.priority, function() {
                            r0(e)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = il(e),
                    t !== null) {
                        l.blockedOn = t,
                        Nf(l.priority, function() {
                            r0(e)
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function Vu(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var e = uf(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type,e);
                cc = a,
                e.target.dispatchEvent(a),
                cc = null
            } else
                return t = Fe(e),
                t !== null && o0(t),
                l.blockedOn = e,
                !1;
            t.shift()
        }
        return !0
    }
    function g0(l, t, e) {
        Vu(l) && e.delete(t)
    }
    function lm() {
        ff = !1,
        Te !== null && Vu(Te) && (Te = null),
        Ee !== null && Vu(Ee) && (Ee = null),
        je !== null && Vu(je) && (je = null),
        En.forEach(g0),
        jn.forEach(g0)
    }
    function Zu(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        ff || (ff = !0,
        v.unstable_scheduleCallback(v.unstable_NormalPriority, lm)))
    }
    var wu = null;
    function y0(l) {
        wu !== l && (wu = l,
        v.unstable_scheduleCallback(v.unstable_NormalPriority, function() {
            wu === l && (wu = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t]
                  , a = l[t + 1]
                  , n = l[t + 2];
                if (typeof a != "function") {
                    if (cf(a || e) === null)
                        continue;
                    break
                }
                var u = Fe(e);
                u !== null && (l.splice(t, 3),
                t -= 3,
                ui(u, {
                    pending: !0,
                    data: n,
                    method: e.method,
                    action: a
                }, a, n))
            }
        }))
    }
    function Ua(l) {
        function t(s) {
            return Zu(s, l)
        }
        Te !== null && Zu(Te, l),
        Ee !== null && Zu(Ee, l),
        je !== null && Zu(je, l),
        En.forEach(t),
        jn.forEach(t);
        for (var e = 0; e < Ae.length; e++) {
            var a = Ae[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < Ae.length && (e = Ae[0],
        e.blockedOn === null); )
            m0(e),
            e.blockedOn === null && Ae.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay,
        e != null)
            for (a = 0; a < e.length; a += 3) {
                var n = e[a]
                  , u = e[a + 1]
                  , c = n[at] || null;
                if (typeof u == "function")
                    c || y0(e);
                else if (c) {
                    var i = null;
                    if (u && u.hasAttribute("formAction")) {
                        if (n = u,
                        c = u[at] || null)
                            i = c.formAction;
                        else if (cf(n) !== null)
                            continue
                    } else
                        i = c.action;
                    typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3),
                    a -= 3),
                    y0(e)
                }
            }
    }
    function v0() {
        function l(u) {
            u.canIntercept && u.info === "react-transition" && u.intercept({
                handler: function() {
                    return new Promise(function(c) {
                        return n = c
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            n !== null && (n(),
            n = null),
            a || setTimeout(e, 20)
        }
        function e() {
            if (!a && !navigation.transition) {
                var u = navigation.currentEntry;
                u && u.url != null && navigation.navigate(u.url, {
                    state: u.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , n = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(e, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                n !== null && (n(),
                n = null)
            }
        }
    }
    function sf(l) {
        this._internalRoot = l
    }
    Ku.prototype.render = sf.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(h(409));
        var e = t.current
          , a = xt();
        f0(e, a, l, t, null, null)
    }
    ,
    Ku.prototype.unmount = sf.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            f0(l.current, 2, null, l, null, null),
            Au(),
            t[$e] = null
        }
    }
    ;
    function Ku(l) {
        this._internalRoot = l
    }
    Ku.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = Af();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < Ae.length && t !== 0 && t < Ae[e].priority; e++)
                ;
            Ae.splice(e, 0, l),
            e === 0 && m0(l)
        }
    }
    ;
    var b0 = N.version;
    if (b0 !== "19.2.0")
        throw Error(h(527, b0, "19.2.0"));
    j.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","),
            Error(h(268, l)));
        return l = z(t),
        l = l !== null ? V(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var tm = {
        bundleType: 0,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: x,
        reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Ju = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Ju.isDisabled && Ju.supportsFiber)
            try {
                Ha = Ju.inject(tm),
                rt = Ju
            } catch {}
    }
    return Mn.createRoot = function(l, t) {
        if (!G(l))
            throw Error(h(299));
        var e = !1
          , a = ""
          , n = jo
          , u = Ao
          , c = No;
        return t != null && (t.unstable_strictMode === !0 && (e = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = c0(l, 1, !1, null, null, e, a, null, n, u, c, v0),
        l[$e] = t.current,
        Vi(l),
        new sf(t)
    }
    ,
    Mn.hydrateRoot = function(l, t, e) {
        if (!G(l))
            throw Error(h(299));
        var a = !1
          , n = ""
          , u = jo
          , c = Ao
          , i = No
          , s = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
        e.formState !== void 0 && (s = e.formState)),
        t = c0(l, 1, !0, t, e ?? null, a, n, s, u, c, i, v0),
        t.context = i0(null),
        e = t.current,
        a = xt(),
        a = Iu(a),
        n = re(a),
        n.callback = null,
        de(e, n, a),
        e = a,
        t.current.lanes = e,
        qa(t, e),
        Bt(t),
        l[$e] = t.current,
        Vi(l),
        new Ku(t)
    }
    ,
    Mn.version = "19.2.0",
    Mn
}
var M0;
function rm() {
    if (M0)
        return df.exports;
    M0 = 1;
    function v() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)
            } catch (N) {
                console.error(N)
            }
    }
    return v(),
    df.exports = om(),
    df.exports
}
var dm = rm();
const hm = U0(dm)
  , _0 = {
    lower: [[{
        d: "φ",
        v: "phi"
    }, {
        d: "ζ",
        v: "zeta"
    }, {
        d: "ε",
        v: "epsilon"
    }, {
        d: "ρ",
        v: "rho"
    }, {
        d: "τ",
        v: "tau"
    }, {
        d: "υ",
        v: "upsilon"
    }, {
        d: "θ",
        v: "theta"
    }, {
        d: "ι",
        v: "iota"
    }, {
        d: "ο",
        v: "o"
    }, {
        d: "π",
        v: "pi"
    }], [{
        d: "α",
        v: "alpha"
    }, {
        d: "σ",
        v: "sigma"
    }, {
        d: "δ",
        v: "delta"
    }, {
        d: "ϕ",
        v: "varphi"
    }, {
        d: "γ",
        v: "gamma"
    }, {
        d: "η",
        v: "eta"
    }, {
        d: "ξ",
        v: "xi"
    }, {
        d: "χ",
        v: "chi"
    }, {
        d: "λ",
        v: "lambda"
    }], [{
        d: "shift",
        v: "shift",
        grow: 1.5
    }, {
        d: "ζ",
        v: "zeta"
    }, {
        d: "χ",
        v: "chi"
    }, {
        d: "ψ",
        v: "psi"
    }, {
        d: "ω",
        v: "omega"
    }, {
        d: "β",
        v: "beta"
    }, {
        d: "ν",
        v: "nu"
    }, {
        d: "μ",
        v: "mu"
    }, {
        d: "backspace",
        v: "backspace",
        grow: 1.5
    }]],
    upper: [[{
        d: "Φ",
        v: "Phi"
    }, {
        d: "Σ",
        v: "Sigma"
    }, {
        d: "Ε",
        v: "E"
    }, {
        d: "Ρ",
        v: "P"
    }, {
        d: "Τ",
        v: "T"
    }, {
        d: "Υ",
        v: "Upsilon"
    }, {
        d: "Θ",
        v: "Theta"
    }, {
        d: "Ι",
        v: "I"
    }, {
        d: "Ο",
        v: "O"
    }, {
        d: "Π",
        v: "Pi"
    }], [{
        d: "Α",
        v: "A"
    }, {
        d: "Σ",
        v: "Sigma"
    }, {
        d: "Δ",
        v: "Delta"
    }, {
        d: "Φ",
        v: "Phi"
    }, {
        d: "Γ",
        v: "Gamma"
    }, {
        d: "Η",
        v: "H"
    }, {
        d: "Ξ",
        v: "Xi"
    }, {
        d: "Κ",
        v: "K"
    }, {
        d: "Λ",
        v: "Lambda"
    }], [{
        d: "shift",
        v: "shift",
        grow: 1.5
    }, {
        d: "Ζ",
        v: "Z"
    }, {
        d: "Χ",
        v: "X"
    }, {
        d: "Ψ",
        v: "Psi"
    }, {
        d: "Ω",
        v: "Omega"
    }, {
        d: "Β",
        v: "B"
    }, {
        d: "Ν",
        v: "N"
    }, {
        d: "Μ",
        v: "M"
    }, {
        d: "backspace",
        v: "backspace",
        grow: 1.5
    }]]
}
  , mm = ({isOpen: v, onInsert: N, onBackspace: M}) => {
    const [h,G] = I.useState(v);
    I.useEffect( () => {
        if (v)
            G(!0);
        else {
            const V = setTimeout( () => {
                G(!1)
            }
            , 300);
            return () => clearTimeout(V)
        }
    }
    , [v]);
    const [Z,ll] = I.useState(!1)
      , il = Z ? _0.upper : _0.lower
      , O = V => {
        V.v === "shift" ? ll(q => !q) : V.v === "backspace" ? M() : N(V.v)
    }
    ;
    if (!h)
        return null;
    const z = v ? "animate-slide-up" : "animate-slide-down";
    return f.jsx("div", {
        className: `fixed bottom-0 left-0 right-0 z-40 bg-gray-100 text-black p-2 w-full max-w-4xl mx-auto rounded-t-lg shadow-[0_-5px_25px_-10px_rgba(0,0,0,0.2)] border-t border-gray-200 ${z}`,
        children: f.jsx("div", {
            className: "space-y-2 p-2",
            children: il.map( (V, q) => f.jsx("div", {
                className: "flex justify-center items-stretch gap-2 w-full",
                children: V.map( (W, Hl) => {
                    const Al = W.v === "shift" || W.v === "backspace"
                      , Ml = Al && W.v === "shift" && Z;
                    return f.jsx("button", {
                        onMouseDown: Pl => {
                            Pl.preventDefault(),
                            O(W)
                        }
                        ,
                        className: `h-14 rounded-lg font-sans text-xl flex items-center justify-center transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:z-10 shadow-sm
                        ${Al ? "bg-gray-300 hover:bg-gray-400/80 text-gray-900" : "bg-white hover:bg-gray-200/80 text-gray-900"}
                        ${Ml ? "!bg-blue-600 !text-white hover:!bg-blue-700" : ""}
                        `,
                        style: {
                            flexGrow: W.grow || 1,
                            flexBasis: 0
                        },
                        children: W.d === "shift" ? "⇧" : W.d === "backspace" ? "⌫" : W.d
                    }, `${q}-${Hl}`)
                }
                )
            }, q))
        })
    })
}
  , C0 = v => {
    if (typeof v != "string")
        return null;
    try {
        const N = v.replace(/\bsin\b/g, "Math.sin").replace(/\bcos\b/g, "Math.cos").replace(/\btan\b/g, "Math.tan").replace(/\bexp\b/g, "Math.exp").replace(/\bln\b/g, "Math.log").replace(/\blog\b/g, "Math.log").replace(/\bsqrt\b/g, "Math.sqrt").replace(/\bpi\b/g, "Math.PI").replace(/\bE\b/g, "Math.E").replace(/\boo\b/g, "Infinity").replace(/\^/g, "**")
          , M = new Function("return " + N)();
        return typeof M == "number" ? M : null
    } catch {
        return null
    }
}
  , gm = v => {
    if (typeof v == "number")
        return Number.isInteger(v) ? v : Number(v.toFixed(2));
    if (typeof v != "string")
        return "";
    const N = v.trim();
    if (N === "undef")
        return "undef";
    if (N === "+oo" || N === "\\infty")
        return "+∞";
    if (N === "-oo")
        return "-∞";
    if (/^-?\d+\s*\/\s*[1-9]\d*$/.test(N))
        return N.replace(/\s/g, "");
    const M = C0(N);
    return M !== null ? M === 1 / 0 ? "+∞" : M === -1 / 0 ? "-∞" : Number.isInteger(M) ? M : Number(M.toFixed(2)) : N
}
;
function yf(v) {
    return "fxLeft"in v
}
function _n(v) {
    return "isUndefined"in v && v.isUndefined === !0
}
const ym = ({startY: v, endY: N, sign: M}) => {
    const h = M === "+" ? "text-green-500" : M === "-" ? "text-red-500" : "text-gray-500"
      , G = `arrowhead-${M}`;
    return f.jsxs("svg", {
        width: "100%",
        height: "100%",
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none",
        className: "absolute top-0 left-0",
        children: [f.jsx("defs", {
            children: f.jsx("marker", {
                id: G,
                viewBox: "0 0 10 10",
                refX: "8",
                refY: "5",
                markerWidth: "6",
                markerHeight: "6",
                orient: "auto-start-reverse",
                children: f.jsx("path", {
                    d: "M 0 0 L 10 5 L 0 10 z",
                    className: `fill-current ${h}`
                })
            })
        }), f.jsx("line", {
            x1: "5",
            y1: v,
            x2: "95",
            y2: N,
            className: `stroke-current ${h}`,
            strokeWidth: "2",
            markerEnd: `url(#${G})`
        })]
    })
}
  , vm = ({data: v, onDataChange: N}) => {
    const M = I.useMemo( () => {
        const U = X => {
            const x = C0(String(X));
            return x !== null ? x : X === "+oo" || X === "+∞" || X === "\\infty" ? 1 / 0 : X === "-oo" || X === "-∞" ? -1 / 0 : typeof X == "number" ? X : NaN
        }
          , C = v.points.map(X => yf(X) ? {
            left: U(X.fxLeft),
            right: U(X.fxRight)
        } : "fx"in X ? U(X.fx) : NaN);
        if (C.length === 0)
            return [];
        const P = 15
          , L = 85
          , H = C.flatMap(X => typeof X == "number" ? X : typeof X == "object" && X !== null ? [X.left, X.right] : [])
          , ul = H.filter(X => isFinite(X))
          , xl = ul.length > 0 ? Math.min(...ul) : 0
          , Zl = ul.length > 0 ? Math.max(...ul) : 1
          , Dl = Zl - xl < 1e-9 ? 1 : Zl - xl
          , Rl = H.some(X => X === 1 / 0)
          , et = H.some(X => X === -1 / 0)
          , Fl = X => {
            if (X === 1 / 0)
                return P;
            if (X === -1 / 0)
                return L;
            if (isNaN(X))
                return 50;
            if (!Rl && !et)
                return L - (X - xl) / Dl * (L - P);
            const x = P + 15
              , j = L - 15;
            return j - (X - xl) / Dl * (j - x)
        }
        ;
        return C.map(X => typeof X == "object" && X !== null ? {
            left: Fl(X.left),
            right: Fl(X.right)
        } : typeof X == "number" ? {
            center: Fl(X)
        } : {
            center: 50
        })
    }
    , [v])
      , [h,G] = I.useState(null)
      , [Z,ll] = I.useState("")
      , [il,O] = I.useState(!1)
      , z = I.useRef(null)
      , V = I.useRef(null);
    I.useEffect( () => {
        var U, C;
        h ? ((U = z.current) == null || U.focus(),
        (C = z.current) == null || C.select()) : O(!1)
    }
    , [h]);
    const q = (U, C, P) => {
        const L = C.replace(/\[/g, ".").replace(/\]/g, "").split(".");
        let H = U;
        for (let Zl = 0; Zl < L.length - 1; Zl++) {
            const Dl = L[Zl];
            if (!H.hasOwnProperty(Dl) || typeof H[Dl] != "object") {
                const Rl = !isNaN(parseInt(L[Zl + 1], 10));
                H[Dl] = Rl ? [] : {}
            }
            H = H[Dl]
        }
        const ul = L[L.length - 1]
          , xl = typeof P == "string" && P.trim() !== "" && !isNaN(Number(P)) && !P.includes("/") ? Number(P) : P;
        return H[ul] = xl,
        U
    }
      , W = (U, C) => {
        G({
            path: U
        }),
        ll(String(C)),
        O(!0)
    }
      , Hl = () => {
        if (!h)
            return;
        const {path: U} = h
          , C = JSON.parse(JSON.stringify(v));
        q(C, U, Z),
        N(C),
        G(null),
        O(!1)
    }
      , Al = () => {
        G(null),
        O(!1)
    }
      , Ml = U => {
        if (!z.current)
            return;
        const {selectionStart: C, selectionEnd: P, value: L} = z.current
          , H = L.substring(0, C ?? 0) + U + L.substring(P ?? 0);
        ll(H),
        z.current.focus();
        const ul = (C ?? 0) + U.length;
        setTimeout( () => {
            var xl;
            (xl = z.current) == null || xl.setSelectionRange(ul, ul)
        }
        , 0)
    }
      , Pl = () => {
        if (!z.current)
            return;
        const {selectionStart: U, selectionEnd: C, value: P} = z.current;
        let L = U ?? 0
          , H = "";
        if (U === C)
            if (U > 0)
                H = P.substring(0, U - 1) + P.substring(C),
                L = U - 1;
            else
                return;
        else
            H = P.substring(0, U) + P.substring(C),
            L = U;
        ll(H),
        z.current.focus(),
        setTimeout( () => {
            var ul;
            (ul = z.current) == null || ul.setSelectionRange(L, L)
        }
        , 0)
    }
      , El = (U, C) => (h == null ? void 0 : h.path) === C ? f.jsx("div", {
        className: "absolute inset-0 z-10 flex items-center",
        children: f.jsx("input", {
            ref: z,
            type: "text",
            value: Z,
            onChange: L => ll(L.target.value),
            onBlur: Hl,
            onKeyDown: L => {
                L.key === "Enter" && Hl(),
                L.key === "Escape" && Al()
            }
            ,
            className: "w-full h-full bg-white border-2 border-blue-500 rounded px-1 py-0 text-center"
        })
    }) : f.jsx("span", {
        onClick: () => W(C, U),
        className: "cursor-pointer hover:bg-blue-100 rounded px-1 w-full h-full flex items-center justify-center",
        role: "button",
        tabIndex: 0,
        onKeyDown: L => {
            L.key === "Enter" && W(C, U)
        }
        ,
        children: gm(U)
    });
    if (!v || v.points.length === 0 || M.length === 0 || v.points.length !== M.length)
        return null;
    const lt = "bg-gray-100 bg-[linear-gradient(135deg,rgba(0,0,0,0.1)_8.33%,transparent_8.33%,transparent_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1)_58.33%,transparent_58.33%,transparent_100%)] bg-[length:8.49px_8.49px]";
    return f.jsxs(f.Fragment, {
        children: [f.jsx("div", {
            ref: V,
            className: "w-full overflow-x-auto relative",
            style: {
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none"
            },
            children: f.jsx("table", {
                className: "w-full min-w-max border-collapse text-center font-mono text-lg",
                children: f.jsxs("tbody", {
                    children: [f.jsxs("tr", {
                        className: "border-b-2 border-gray-400",
                        children: [f.jsx("td", {
                            className: "font-bold border-r-2 border-gray-400 px-4 py-3 bg-gray-50",
                            children: "x"
                        }), v.points.map( (U, C) => f.jsxs(ku.Fragment, {
                            children: [f.jsx("td", {
                                className: "px-4 py-3 font-semibold relative",
                                children: El(U.x, `points[${C}].x`)
                            }), C < v.intervals.length && f.jsx("td", {
                                className: `px-6 py-3 w-32 ${_n(v.intervals[C]) ? lt : ""}`
                            })]
                        }, `x-frag-${C}`))]
                    }), f.jsxs("tr", {
                        className: "border-b-2 border-gray-400",
                        children: [f.jsx("td", {
                            className: "font-bold border-r-2 border-gray-400 px-4 py-3 bg-gray-50",
                            children: "f'(x)"
                        }), v.points.map( (U, C) => f.jsxs(ku.Fragment, {
                            children: [f.jsx("td", {
                                className: "px-4 py-3 relative border-l border-r border-transparent",
                                children: yf(U) || "fpx"in U && U.fpx === "undef" ? f.jsxs("div", {
                                    className: "absolute inset-y-0 left-1/2 -translate-x-1/2 flex gap-px",
                                    children: [f.jsx("div", {
                                        className: "w-0.5 h-full bg-gray-400"
                                    }), f.jsx("div", {
                                        className: "w-0.5 h-full bg-gray-400"
                                    })]
                                }) : "fpx"in U && El(U.fpx, `points[${C}].fpx`)
                            }), C < v.intervals.length && f.jsx("td", {
                                className: `px-6 py-3 text-2xl font-bold relative ${_n(v.intervals[C]) ? lt : ""}`,
                                children: !_n(v.intervals[C]) && v.intervals[C].sign
                            })]
                        }, `fpx-frag-${C}`))]
                    }), f.jsxs("tr", {
                        children: [f.jsx("td", {
                            className: "font-bold border-r-2 border-gray-400 px-4 py-3 bg-gray-50 align-middle",
                            children: "f(x)"
                        }), v.points.map( (U, C) => {
                            const P = M[C];
                            return P ? f.jsxs(ku.Fragment, {
                                children: [f.jsx("td", {
                                    className: "px-2 py-3 font-semibold relative h-32",
                                    children: yf(U) ? f.jsxs(f.Fragment, {
                                        children: [f.jsx("div", {
                                            className: "absolute left-[-0.5rem] transform -translate-x-1/2 -translate-y-1/2 w-24 h-8",
                                            style: {
                                                top: `${P.left}%`
                                            },
                                            children: U.fxLeft !== "d" && El(U.fxLeft, `points[${C}].fxLeft`)
                                        }), f.jsxs("div", {
                                            className: "absolute inset-y-0 left-1/2 -translate-x-1/2 flex gap-px",
                                            children: [f.jsx("div", {
                                                className: "w-0.5 h-full bg-gray-400"
                                            }), f.jsx("div", {
                                                className: "w-0.5 h-full bg-gray-400"
                                            })]
                                        }), f.jsx("div", {
                                            className: "absolute right-[-0.5rem] transform translate-x-1/2 -translate-y-1/2 w-24 h-8",
                                            style: {
                                                top: `${P.right}%`
                                            },
                                            children: U.fxRight !== "d" && El(U.fxRight, `points[${C}].fxRight`)
                                        })]
                                    }) : "fx"in U && f.jsx("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8",
                                        style: {
                                            top: `${P.center}%`
                                        },
                                        children: El(U.fx, `points[${C}].fx`)
                                    })
                                }), C < v.intervals.length && f.jsx("td", {
                                    className: `px-1 py-3 relative ${_n(v.intervals[C]) ? lt : ""}`,
                                    children: ( () => {
                                        if (_n(v.intervals[C]))
                                            return null;
                                        const L = P
                                          , H = M[C + 1];
                                        if (!L || !H)
                                            return null;
                                        const ul = "right"in L ? L.right : L.center
                                          , xl = "left"in H ? H.left : H.center;
                                        return f.jsx(ym, {
                                            startY: ul,
                                            endY: xl,
                                            sign: v.intervals[C].sign
                                        })
                                    }
                                    )()
                                })]
                            }, `fx-frag-${C}`) : null
                        }
                        )]
                    })]
                })
            })
        }), f.jsx(mm, {
            isOpen: il,
            onInsert: Ml,
            onBackspace: Pl
        })]
    })
}
  , bm = "https://json-bbt.onrender.com/api/generate-table"
  , xm = "https://my-latex-api.onrender.com/api/generate-latex"
  , pm = "https://tikztoimages.onrender.com/convert";
function Sm(v) {
    let N = v.trim().toLowerCase();
    return N = N.replace(/\bpi\b/g, "pi"),
    N = N.replace(/\be\b/g, "E"),
    N = N.replace(/\bln\b/g, "log"),
    N = N.replace(/\blog_?(\d+)\((.*)\)/g, "log($2, $1)"),
    N = N.replace(/\barcsin\b/g, "asin"),
    N = N.replace(/\barccos\b/g, "acos"),
    N = N.replace(/\barctan\b/g, "atan"),
    N = N.replace(/\|(.*?)\|/g, "abs($1)"),
    N = N.replace(/\^/g, "**"),
    N = N.replace(/(\d+\.?\d*)\s*([a-z(])/g, "$1 * $2"),
    N = N.replace(/\)\s*([a-z(])/g, ") * $1"),
    N = N.replace(/\b(x|pi|E)\s*\(/g, "$1 * ("),
    N
}
const zm = async (v, N, M) => {
    const G = {
        function: Sm(v),
        start: N,
        end: M
    }
      , Z = await fetch(bm, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(G)
    })
      , ll = await Z.json();
    if (!Z.ok)
        throw new Error(ll.error || `Lỗi HTTP: ${Z.status}`);
    return ll
}
  , Tm = async v => {
    const N = await fetch(xm, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(v)
    });
    if (!N.ok) {
        const h = await N.text();
        throw new Error(h || `Lỗi HTTP: ${N.status}`)
    }
    return (await N.text()).trim()
}
  , Em = async v => {
    const M = await fetch(pm, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            tikz_code: v,
            format: "png",
            return_base64: !0,
            dpi: 300
        })
    })
      , h = await M.json();
    if (!M.ok || !h.success)
        throw new Error(h.error || `Lỗi tạo ảnh: ${M.status}`);
    return {
        base64: h.data,
        mimetype: h.mimetype
    }
}
  , jm = v => f.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: [f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.036 12.322a1.012 1.012 0 010-.639l4.418-5.58a1.012 1.012 0 011.59 0l4.418 5.58a1.012 1.012 0 010 .639l-4.418 5.58a1.012 1.012 0 01-1.59 0l-4.418-5.58z"
    }), f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })]
})
  , Am = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25V5.25c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V7.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
    })
})
  , vf = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12.75l6 6 9-13.5"
    })
})
  , O0 = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
    })
})
  , Nm = v => f.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: [f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.35c-.343.032-.698-.057-.968-.21l-4.204-2.102a.75.75 0 010-1.328l4.204-2.102a.75.75 0 01.968-.21l3.72.35zM3.75 12h.008v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    }), f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 8.25c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.35c-.343.032-.698-.057-.968-.21l-4.204-2.102a.75.75 0 010-1.328l4.204-2.102a.75.75 0 01.968-.21l3.72.35z"
    }), f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 15.75h.008v.008H12V15.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    })]
})
  , D0 = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    })
})
  , Mm = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    })
})
  , _m = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...v,
    children: f.jsx("path", {
        d: "M12.33 2.1a.9.9 0 00-1.2.3L4.73 11.2a.9.9 0 00.3 1.2l.3.2c.4.2.8 0 1-.3L12 5.5l5.7 6.8a.9.9 0 001.3-.2l.2-.3a.9.9 0 00-.2-1.2L13.5 2.4a.9.9 0 00-1.2-.3zM12 10a.9.9 0 00-.9.9v10.2a.9.9 0 101.8 0V10.9A.9.9 0 0012 10z"
    })
})
  , Om = v => f.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    ...v,
    children: f.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
    })
})
  , Dm = async v => {
    try {
        if (!navigator.clipboard)
            throw new Error("Clipboard API not supported");
        await navigator.clipboard.writeText(v)
    } catch (N) {
        console.warn("Clipboard API failed, falling back to execCommand.", N);
        const M = document.createElement("textarea");
        M.value = v,
        M.style.position = "fixed",
        M.style.top = "-9999px",
        M.style.left = "-9999px",
        document.body.appendChild(M),
        M.focus(),
        M.select();
        try {
            if (!document.execCommand("copy"))
                throw new Error("Fallback copy command was unsuccessful.")
        } catch (h) {
            throw console.error("Fallback copy failed:", h),
            new Error("Không thể sao chép vào clipboard.")
        } finally {
            document.body.removeChild(M)
        }
    }
}
  , Um = () => {
    const [v,N] = I.useState("x^3 - 3*x + 2")
      , [M,h] = I.useState(null)
      , [G,Z] = I.useState(!1)
      , [ll,il] = I.useState(null)
      , [O,z] = I.useState(!1)
      , [V,q] = I.useState("")
      , [W,Hl] = I.useState("")
      , [Al,Ml] = I.useState(!1)
      , [Pl,El] = I.useState(!1)
      , [lt,U] = I.useState(!1)
      , [C,P] = I.useState(!1)
      , [L,H] = I.useState(!1)
      , [ul,xl] = I.useState("idle")
      , [Zl,Dl] = I.useState(!1)
      , [Rl,et] = I.useState(!1)
      , [Fl,X] = I.useState("")
      , [x,j] = I.useState(null)
      , B = I.useRef(null)
      , [fl,hl] = I.useState(null)
      , r = I.useRef(null);
    I.useEffect( () => {
        M && v ? document.title = `Bảng biến thiên cho f(x) = ${v.trim()}` : document.title = "MinhTool Vẽ Bảng Biến Thiên Online | Công Cụ Toán Học Tự Động, Chính Xác"
    }
    , [M, v]);
    const E = I.useCallback(async () => {
        if (!v.trim()) {
            il("Vui lòng nhập một hàm số.");
            return
        }
        const J = v.trim().replace(/^(y|f\(x\))\s*=\s*/i, "");
        if (!J) {
            il('Vui lòng nhập một hàm số hợp lệ sau "f(x) =".'),
            h(null);
            return
        }
        let Sl, Ql;
        if (O) {
            if (!V.trim() || !W.trim()) {
                il("Vui lòng nhập điểm bắt đầu và kết thúc.");
                return
            }
            Sl = V.trim(),
            Ql = W.trim()
        } else
            Sl = "-oo",
            Ql = "+oo";
        Z(!0),
        il(null),
        h(null);
        try {
            const Ot = await zm(J, Sl, Ql);
            h(Ot)
        } catch (Ot) {
            il(`Lỗi từ API: ${Ot.message}. Hãy kiểm tra lại cú pháp hàm số và khoảng vẽ.`),
            h(null)
        } finally {
            Z(!1)
        }
    }
    , [v, O, V, W]);
    I.useEffect( () => {
        j(null),
        B.current = null,
        hl(null),
        r.current = null
    }
    , [M]);
    const A = I.useCallback(async () => {
        if (x)
            return x;
        if (B.current)
            return B.current;
        if (!M)
            throw new Error("Không có dữ liệu bảng để tạo LaTeX.");
        const J = Tm(M).then(Sl => (j(Sl),
        B.current = null,
        Sl)).catch(Sl => {
            throw B.current = null,
            Sl
        }
        );
        return B.current = J,
        J
    }
    , [M, x])
      , _ = I.useCallback(async () => {
        if (fl)
            return fl;
        if (r.current)
            return r.current;
        const J = A().then(Sl => Em(Sl)).then(Sl => (hl(Sl),
        r.current = null,
        Sl)).catch(Sl => {
            throw r.current = null,
            Sl
        }
        );
        return r.current = J,
        J
    }
    , [A, fl])
      , w = J => {
        J.key === "Enter" && E()
    }
      , k = () => {
        M && h(null),
        ll && il(null)
    }
      , sl = I.useCallback(async () => {
        U(!0),
        il(null);
        try {
            const J = await A();
            await Dm(J),
            Ml(!0),
            setTimeout( () => Ml(!1), 2500)
        } catch (J) {
            il(J.message || "Đã xảy ra lỗi không xác định.")
        } finally {
            U(!1)
        }
    }
    , [A])
      , wl = I.useCallback(async () => {
        var J;
        P(!0),
        H(!1),
        il(null);
        try {
            const {base64: Sl, mimetype: Ql} = await _()
              , Ot = atob(Sl)
              , ke = new Array(Ot.length);
            for (let ee = 0; ee < Ot.length; ee++)
                ke[ee] = Ot.charCodeAt(ee);
            const $u = new Uint8Array(ke)
              , On = new Blob([$u],{
                type: Ql
            });
            if (!((J = navigator.clipboard) != null && J.write))
                throw new Error("Tính năng sao chép ảnh không được trình duyệt này hỗ trợ.");
            const Ca = new ClipboardItem({
                [Ql]: On
            });
            await navigator.clipboard.write([Ca]),
            H(!0),
            setTimeout( () => H(!1), 2500)
        } catch (Sl) {
            il(Sl.message || "Đã xảy ra lỗi không xác định khi sao chép ảnh.")
        } finally {
            P(!1)
        }
    }
    , [_])
      , Nl = I.useCallback(async () => {
        Dl(!0),
        il(null);
        try {
            const {base64: J, mimetype: Sl} = await _()
              , Ql = `data:${Sl};base64,${J}`;
            X(Ql),
            et(!0)
        } catch (J) {
            il(J.message || "Đã xảy ra lỗi không xác định khi tạo ảnh.")
        } finally {
            Dl(!1)
        }
    }
    , [_])
      , Me = I.useCallback(async () => {
        if (ul === "idle") {
            xl("preparing"),
            il(null);
            try {
                const J = await A();
                xl("redirecting");
                const Ql = `https://www.overleaf.com/docs?snip=${encodeURIComponent(J.trim())}`;
                setTimeout( () => {
                    window.open(Ql, "_blank", "noopener,noreferrer"),
                    xl("idle")
                }
                , 300)
            } catch (J) {
                il(J.message || "Không thể tạo mã LaTeX cho Overleaf."),
                xl("idle")
            }
        }
    }
    , [A, ul])
      , Je = I.useCallback(J => {
        h(J)
    }
    , []);
    return f.jsxs("div", {
        className: "min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 md:p-8",
        children: [f.jsxs("div", {
            className: "w-full max-w-6xl mx-auto",
            children: [f.jsxs("header", {
                className: "flex flex-col items-center text-center mb-8 gap-4",
                children: [f.jsxs("div", {
                    children: [f.jsxs("h1", {
                        className: "text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight",
                        children: [f.jsx("span", {
                            className: "text-blue-600",
                            children: "Minh"
                        }), f.jsx("span", {
                            className: "text-teal-500",
                            children: "Tool"
                        }), " Bảng biến thiên"]
                    }), f.jsx("p", {
                        className: "text-md text-gray-600 mt-2",
                        children: "Khảo sát hàm số và tạo bảng biến thiên tự động, chính xác."
                    })]
                }), f.jsxs("div", {
                    className: "flex flex-wrap justify-center items-center gap-3",
                    children: [f.jsxs("a", {
                        href: "https://minhnganedu.com/ve-bang-bien-thien-nhanh-chong-va-tu-dong-voi-minhtool-bang-bien-thien/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200",
                        children: [f.jsx(Om, {
                            className: "h-5 w-5"
                        }), f.jsx("span", {
                            children: "Hướng dẫn sử dụng"
                        })]
                    }), f.jsxs("a", {
                        href: "https://forms.gle/8xbzqKrohGKAzt7W9",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-2 bg-white text-green-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200",
                        children: [f.jsx(Nm, {
                            className: "h-5 w-5"
                        }), f.jsx("span", {
                            children: "Góp ý & Cải thiện"
                        })]
                    }), f.jsxs("button", {
                        onClick: () => El(!0),
                        className: "flex items-center gap-2 bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-200",
                        children: [f.jsx(D0, {
                            className: "h-5 w-5"
                        }), f.jsx("span", {
                            children: "Ủng hộ tác giả"
                        })]
                    })]
                })]
            }), f.jsxs("main", {
                className: "bg-white p-6 rounded-xl shadow-lg border border-gray-200",
                children: [f.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 items-center",
                    children: [f.jsxs("div", {
                        className: "relative flex-grow w-full",
                        children: [f.jsx("span", {
                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-lg",
                            children: "f(x) ="
                        }), f.jsx("input", {
                            type: "text",
                            value: v,
                            onChange: J => {
                                N(J.target.value),
                                k()
                            }
                            ,
                            onKeyDown: w,
                            placeholder: "Ví dụ: x^3 - 3*x hoặc sqrt(x-2)",
                            className: "w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-lg"
                        })]
                    }), f.jsx("button", {
                        onClick: E,
                        disabled: G,
                        className: "w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                        children: G ? f.jsxs(f.Fragment, {
                            children: [f.jsxs("svg", {
                                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [f.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), f.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), "Đang xử lý..."]
                        }) : "Vẽ bảng"
                    })]
                }), f.jsxs("div", {
                    className: "mt-4",
                    children: [f.jsxs("div", {
                        className: "flex items-center",
                        children: [f.jsx("input", {
                            type: "checkbox",
                            id: "customRange",
                            checked: O,
                            onChange: J => {
                                z(J.target.checked),
                                k()
                            }
                            ,
                            className: "h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        }), f.jsx("label", {
                            htmlFor: "customRange",
                            className: "ml-2 block text-sm font-medium text-gray-700",
                            children: "Vẽ trên một đoạn"
                        })]
                    }), O && f.jsxs("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in",
                        children: [f.jsxs("div", {
                            children: [f.jsx("label", {
                                htmlFor: "rangeStart",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Điểm bắt đầu"
                            }), f.jsx("input", {
                                type: "text",
                                id: "rangeStart",
                                value: V,
                                onChange: J => {
                                    q(J.target.value),
                                    k()
                                }
                                ,
                                placeholder: "Ví dụ: -5 hoặc -sqrt(2)",
                                className: "w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                            })]
                        }), f.jsxs("div", {
                            children: [f.jsx("label", {
                                htmlFor: "rangeEnd",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Điểm kết thúc"
                            }), f.jsx("input", {
                                type: "text",
                                id: "rangeEnd",
                                value: W,
                                onChange: J => {
                                    Hl(J.target.value),
                                    k()
                                }
                                ,
                                placeholder: "Ví dụ: 5 hoặc pi/2",
                                className: "w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                            })]
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "mt-6 min-h-[300px] flex flex-col items-center justify-center",
                    children: [ll && f.jsxs("div", {
                        className: "text-center text-red-600 bg-red-50 p-4 rounded-lg",
                        children: [f.jsx("p", {
                            className: "font-semibold",
                            children: "Đã xảy ra lỗi"
                        }), f.jsx("p", {
                            children: ll
                        })]
                    }), !G && !ll && !M && f.jsxs("div", {
                        className: "text-center text-gray-500 p-6",
                        children: [f.jsx("h3", {
                            className: "text-xl font-medium text-gray-600",
                            children: "Kết quả khảo sát và bảng biến thiên sẽ được hiển thị tại đây"
                        }), f.jsx("p", {
                            className: "mt-2",
                            children: "Nhập hàm số bạn cần khảo sát vào ô bên trên để bắt đầu."
                        }), f.jsxs("div", {
                            className: "mt-4 text-xs text-gray-400",
                            children: [f.jsx("p", {
                                children: "Sử dụng `*` để nhân, `^` để lũy thừa, `/` để chia."
                            }), f.jsxs("p", {
                                className: "mt-1",
                                children: ["Hàm số phổ biến: ", f.jsx("code", {
                                    children: "sqrt()"
                                }), ", ", f.jsx("code", {
                                    children: "sin()"
                                }), ", ", f.jsx("code", {
                                    children: "cos()"
                                }), ", ", f.jsx("code", {
                                    children: "tan()"
                                }), ", ", f.jsx("code", {
                                    children: "log()"
                                }), ", ", f.jsx("code", {
                                    children: "exp()"
                                }), "."]
                            })]
                        })]
                    }), M && f.jsx(vm, {
                        data: M,
                        onDataChange: Je
                    }), M && !G && !ll && f.jsxs("div", {
                        className: "mt-6 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-3",
                        children: [f.jsx("button", {
                            onClick: sl,
                            disabled: Al || lt,
                            className: `flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-200 text-sm ${Al ? "bg-green-600 text-white" : "bg-gray-700 hover:bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"} disabled:bg-gray-400 disabled:cursor-not-allowed`,
                            children: lt ? f.jsxs(f.Fragment, {
                                children: [f.jsxs("svg", {
                                    className: "animate-spin h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [f.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), f.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), f.jsx("span", {
                                    children: "Đang tạo..."
                                })]
                            }) : Al ? f.jsxs(f.Fragment, {
                                children: [f.jsx(vf, {
                                    className: "h-5 w-5"
                                }), "Đã sao chép"]
                            }) : f.jsxs(f.Fragment, {
                                children: [f.jsx(Am, {
                                    className: "h-5 w-5"
                                }), "Sao chép LaTeX"]
                            })
                        }), f.jsx("button", {
                            onClick: wl,
                            disabled: L || C,
                            className: `flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-200 text-sm ${L ? "bg-green-600 text-white" : "bg-purple-600 hover:bg-purple-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"} disabled:bg-purple-300 disabled:cursor-not-allowed`,
                            children: C ? f.jsxs(f.Fragment, {
                                children: [f.jsxs("svg", {
                                    className: "animate-spin h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [f.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), f.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), f.jsx("span", {
                                    children: "Đang tạo..."
                                })]
                            }) : L ? f.jsxs(f.Fragment, {
                                children: [f.jsx(vf, {
                                    className: "h-5 w-5"
                                }), "Đã sao chép"]
                            }) : f.jsxs(f.Fragment, {
                                children: [f.jsx(Mm, {
                                    className: "h-5 w-5"
                                }), "Sao chép Ảnh LaTeX"]
                            })
                        }), f.jsx("button", {
                            onClick: Nl,
                            disabled: Zl,
                            className: "flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-200 text-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-sky-300 disabled:cursor-not-allowed",
                            children: Zl ? f.jsxs(f.Fragment, {
                                children: [f.jsxs("svg", {
                                    className: "animate-spin h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [f.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), f.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), f.jsx("span", {
                                    children: "Đang tạo..."
                                })]
                            }) : f.jsxs(f.Fragment, {
                                children: [f.jsx(jm, {
                                    className: "h-5 w-5"
                                }), "Xem Ảnh LaTeX"]
                            })
                        }), f.jsx("button", {
                            onClick: Me,
                            disabled: ul !== "idle",
                            className: "flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all duration-200 text-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-teal-300 disabled:cursor-not-allowed",
                            children: ul === "preparing" ? f.jsxs(f.Fragment, {
                                children: [f.jsxs("svg", {
                                    className: "animate-spin h-5 w-5 text-white",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [f.jsx("circle", {
                                        className: "opacity-25",
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "4"
                                    }), f.jsx("path", {
                                        className: "opacity-75",
                                        fill: "currentColor",
                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    })]
                                }), f.jsx("span", {
                                    children: "Đang tạo link..."
                                })]
                            }) : ul === "redirecting" ? f.jsxs(f.Fragment, {
                                children: [f.jsx(vf, {
                                    className: "h-5 w-5"
                                }), f.jsx("span", {
                                    children: "Chuyển hướng..."
                                })]
                            }) : f.jsxs(f.Fragment, {
                                children: [f.jsx(_m, {
                                    className: "h-5 w-5"
                                }), "Mở trên Overleaf"]
                            })
                        })]
                    })]
                })]
            }), f.jsxs("section", {
                id: "faq-section",
                className: "bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-8 text-gray-700 scroll-mt-20",
                children: [f.jsx("h2", {
                    className: "text-2xl font-bold text-gray-800 mb-4",
                    children: "Hướng dẫn sử dụng và Các câu hỏi thường gặp (FAQ)"
                }), f.jsxs("nav", {
                    "aria-label": "Mục lục FAQ",
                    className: "mb-6 bg-gray-50 p-4 rounded-lg border",
                    children: [f.jsx("h3", {
                        className: "font-semibold text-gray-700 mb-2",
                        children: "Nội dung"
                    }), f.jsxs("ul", {
                        className: "list-disc list-inside space-y-1",
                        children: [f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-1",
                                className: "text-blue-600 hover:underline",
                                children: "Cách nhập hàm số đúng cách?"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-2",
                                className: "text-blue-600 hover:underline",
                                children: "Bảng biến thiên là gì?"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-3",
                                className: "text-blue-600 hover:underline",
                                children: "Công cụ này hoạt động như thế nào?"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-4",
                                className: "text-blue-600 hover:underline",
                                children: "Làm sao vẽ bảng biến thiên trên một đoạn cho trước?"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-5",
                                className: "text-blue-600 hover:underline",
                                children: "Làm sao để thêm các ký tự tham số (m, k,...) vào bảng?"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-6",
                                className: "text-blue-600 hover:underline",
                                children: "Làm gì khi trang web mất nhiều thời gian để xử lý?"
                            })
                        }), f.jsx("li", {
                            children: f.jsx("a", {
                                href: "#faq-7",
                                className: "text-blue-600 hover:underline",
                                children: "Tại sao kết quả bị làm tròn & cách xem kết quả chính xác?"
                            })
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "space-y-6",
                    children: [f.jsxs("article", {
                        id: "faq-1",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Cách nhập hàm số đúng cách?"
                        }), f.jsx("p", {
                            children: "Để công cụ hiểu đúng hàm số của bạn, hãy tuân theo các quy tắc sau:"
                        }), f.jsxs("ul", {
                            className: "list-disc list-inside mt-2 space-y-1 pl-4",
                            children: [f.jsxs("li", {
                                children: ["Sử dụng ", f.jsx("code", {
                                    children: "*"
                                }), " cho phép nhân (ví dụ: ", f.jsx("code", {
                                    children: "2*x"
                                }), " thay vì ", f.jsx("code", {
                                    children: "2x"
                                }), ")."]
                            }), f.jsxs("li", {
                                children: ["Sử dụng ", f.jsx("code", {
                                    children: "^"
                                }), " cho phép lũy thừa (ví dụ: ", f.jsx("code", {
                                    children: "x^3"
                                }), " cho x mũ 3)."]
                            }), f.jsxs("li", {
                                children: ["Sử dụng ", f.jsx("code", {
                                    children: "/"
                                }), " cho phép chia. Viết phân thức trong dấu ngoặc (ví dụ: ", f.jsx("code", {
                                    children: "(x+1)/(x-2)"
                                }), ")."]
                            }), f.jsxs("li", {
                                children: ["Các hàm phổ biến: ", f.jsx("code", {
                                    children: "sqrt()"
                                }), " (căn bậc hai), ", f.jsx("code", {
                                    children: "sin()"
                                }), ", ", f.jsx("code", {
                                    children: "cos()"
                                }), ", ", f.jsx("code", {
                                    children: "tan()"
                                }), ", ", f.jsx("code", {
                                    children: "log()"
                                }), " (logarit tự nhiên), ", f.jsx("code", {
                                    children: "exp()"
                                }), " (e mũ)."]
                            }), f.jsxs("li", {
                                children: ["Hằng số: ", f.jsx("code", {
                                    children: "pi"
                                }), " (số Pi), ", f.jsx("code", {
                                    children: "e"
                                }), " (số Euler)."]
                            })]
                        })]
                    }), f.jsxs("article", {
                        id: "faq-2",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Bảng biến thiên là gì?"
                        }), f.jsx("p", {
                            children: "Bảng biến thiên là một công cụ toán học dùng để tóm tắt kết quả của việc khảo sát hàm số. Nó cho biết các khoảng đồng biến (hàm số tăng), nghịch biến (hàm số giảm), các điểm cực trị (cực đại, cực tiểu) và giới hạn của hàm số tại các điểm đặc biệt và tại vô cực."
                        })]
                    }), f.jsxs("article", {
                        id: "faq-3",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Công cụ này hoạt động như thế nào?"
                        }), f.jsx("p", {
                            children: "Khi bạn nhập một hàm số, công cụ sẽ thực hiện các bước sau một cách tự động:"
                        }), f.jsxs("ol", {
                            className: "list-decimal list-inside mt-2 space-y-1 pl-4",
                            children: [f.jsxs("li", {
                                children: [f.jsx("strong", {
                                    children: "Tìm tập xác định:"
                                }), " Xác định miền giá trị hợp lệ cho biến x."]
                            }), f.jsxs("li", {
                                children: [f.jsx("strong", {
                                    children: "Tính đạo hàm:"
                                }), " Tìm đạo hàm cấp một (f'(x)) của hàm số."]
                            }), f.jsxs("li", {
                                children: [f.jsx("strong", {
                                    children: "Giải phương trình f'(x) = 0:"
                                }), " Tìm các điểm tới hạn (nghiệm của đạo hàm)."]
                            }), f.jsxs("li", {
                                children: [f.jsx("strong", {
                                    children: "Xét dấu đạo hàm:"
                                }), " Xác định dấu của f'(x) trên các khoảng được chia bởi các điểm tới hạn và điểm không xác định."]
                            }), f.jsxs("li", {
                                children: [f.jsx("strong", {
                                    children: "Vẽ bảng:"
                                }), " Tổng hợp tất cả thông tin trên vào một bảng biến thiên hoàn chỉnh, bao gồm chiều biến thiên của f(x) và các giá trị cực trị."]
                            })]
                        })]
                    }), f.jsxs("article", {
                        id: "faq-4",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Làm sao vẽ bảng biến thiên trên một đoạn cho trước?"
                        }), f.jsx("p", {
                            children: 'Để vẽ bảng biến thiên trên một khoảng xác định, bạn chỉ cần tích vào ô "Vẽ trên một đoạn". Các ô nhập liệu cho "Điểm bắt đầu" và "Điểm kết thúc" sẽ xuất hiện, cho phép bạn nhập khoảng mong muốn (ví dụ: từ -5 đến 5).'
                        })]
                    }), f.jsxs("article", {
                        id: "faq-5",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Làm sao để thêm các ký tự tham số (m, k,...) vào bảng?"
                        }), f.jsx("p", {
                            children: "Sau khi bảng biến thiên được tạo, bạn có thể chỉnh sửa trực tiếp các giá trị trong bảng. Chỉ cần nhấp vào ô bạn muốn thay đổi (ví dụ: một giá trị x hoặc f(x)) và nhập các ký tự bạn muốn, như 'm', 'f(m)', hoặc '2m+1'. Công cụ sẽ cập nhật bảng với giá trị mới của bạn."
                        })]
                    }), f.jsxs("article", {
                        id: "faq-6",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Làm gì khi trang web mất nhiều thời gian để xử lý?"
                        }), f.jsx("p", {
                            children: "Do một số lỗi nhỏ hoặc sự cố tạm thời, quá trình xử lý có thể bị treo. Nếu bạn thấy trang web mất quá nhiều thời gian để phản hồi, hãy thử tải lại trang (nhấn F5 hoặc nút tải lại trên trình duyệt) và thực hiện lại thao tác. Việc này thường sẽ khắc phục được sự cố."
                        })]
                    }), f.jsxs("article", {
                        id: "faq-7",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 scroll-mt-20",
                            children: "Tại sao số hiện trên bảng biến thiên bản web bị làm tròn và làm sao có được kết quả chính xác?"
                        }), f.jsxs("p", {
                            children: ["Giao diện web có những hạn chế trong việc hiển thị các công thức toán học phức tạp (như căn thức, phân số, hằng số ", f.jsx("code", {
                                children: "pi"
                            }), ", ", f.jsx("code", {
                                children: "e"
                            }), ",...), vì vậy các giá trị số sẽ được làm tròn để tiện cho việc hiển thị."]
                        }), f.jsxs("p", {
                            className: "mt-2",
                            children: ["Để xem bảng biến thiên với kết quả chính xác tuyệt đối, bạn hãy sử dụng các tính năng ", f.jsx("strong", {
                                children: "'Xem Ảnh'"
                            }), " hoặc ", f.jsx("strong", {
                                children: "'Mở trên Overleaf'"
                            }), ". Các chức năng này sẽ tạo ra một phiên bản hình ảnh hoặc tài liệu LaTeX chất lượng cao, giữ nguyên mọi giá trị toán học chính xác (ví dụ: ", f.jsx("code", {
                                className: "bg-gray-200 p-1 rounded",
                                children: "sqrt(2)/2"
                            }), " thay vì ", f.jsx("code", {
                                children: "0.71"
                            }), ")."]
                        })]
                    })]
                })]
            }), f.jsx("footer", {
                className: "w-full text-center mt-12 pt-8 border-t border-gray-200",
                children: f.jsxs("div", {
                    className: "text-sm text-gray-500 space-y-1",
                    children: [f.jsxs("p", {
                        children: ["Phát triển bởi", " ", f.jsx("a", {
                            href: "https://www.facebook.com/hoangminh.thai.39",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "font-medium text-blue-600 hover:underline",
                            children: "Thái Hoàng Minh"
                        })]
                    }), f.jsx("p", {
                        className: "text-xs text-gray-400",
                        children: "© Minh Ngan Edu 2025. All rights reserved."
                    })]
                })
            })]
        }), Rl && f.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",
            onClick: () => et(!1),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "image-viewer-title",
            style: {
                animation: "fadeIn 0.2s ease-out"
            },
            children: f.jsxs("div", {
                className: "bg-white rounded-xl shadow-2xl w-full max-w-3xl p-4 sm:p-6 relative flex flex-col",
                onClick: J => J.stopPropagation(),
                style: {
                    animation: "scaleUp 0.2s ease-out"
                },
                children: [f.jsxs("div", {
                    className: "flex justify-between items-center mb-4",
                    children: [f.jsx("h2", {
                        id: "image-viewer-title",
                        className: "text-xl font-bold text-gray-800",
                        children: "Xem trước ảnh LaTeX"
                    }), f.jsx("button", {
                        onClick: () => et(!1),
                        className: "text-gray-400 hover:text-gray-600 transition-colors",
                        "aria-label": "Đóng",
                        children: f.jsx(O0, {
                            className: "h-6 w-6"
                        })
                    })]
                }), f.jsx("div", {
                    className: "flex-grow flex items-center justify-center bg-gray-100 rounded-lg p-4 overflow-hidden",
                    children: f.jsx("img", {
                        src: Fl,
                        alt: "Bảng biến thiên",
                        className: "max-w-full max-h-[70vh] object-contain"
                    })
                }), f.jsxs("div", {
                    className: "mt-4 flex flex-col sm:flex-row gap-3",
                    children: [f.jsx("a", {
                        href: Fl,
                        download: "bang-bien-thien.png",
                        className: "flex-1 text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                        children: "Tải xuống"
                    }), f.jsx("button", {
                        onClick: () => et(!1),
                        className: "flex-1 text-center bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors",
                        children: "Đóng"
                    })]
                })]
            })
        }), Pl && f.jsx("div", {
            className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4",
            onClick: () => El(!1),
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "donate-modal-title",
            style: {
                animation: "fadeIn 0.2s ease-out"
            },
            children: f.jsxs("div", {
                className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 sm:p-8 relative",
                onClick: J => J.stopPropagation(),
                style: {
                    animation: "scaleUp 0.2s ease-out",
                    animationFillMode: "forwards"
                },
                children: [f.jsx("button", {
                    onClick: () => El(!1),
                    className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                    "aria-label": "Đóng",
                    children: f.jsx(O0, {
                        className: "h-6 w-6"
                    })
                }), f.jsxs("div", {
                    className: "flex items-center gap-4 mb-4",
                    children: [f.jsx(D0, {
                        className: "h-8 w-8 text-pink-500"
                    }), f.jsx("h2", {
                        id: "donate-modal-title",
                        className: "text-2xl font-bold text-gray-800",
                        children: "Ủng hộ Tác giả"
                    })]
                }), f.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children: "Cảm ơn bạn đã sử dụng công cụ! Nếu bạn thấy nó hữu ích, hãy ủng hộ tác giả một ly cà phê nhé. Sự đóng góp của bạn là nguồn động lực to lớn để mình tiếp tục phát triển và duy trì dự án."
                }), f.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                    children: [f.jsxs("div", {
                        className: "text-center p-4 border border-gray-200 rounded-lg bg-gray-50",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 text-gray-700",
                            children: "Momo"
                        }), f.jsx("img", {
                            src: "./Pictures/Momo.png",
                            alt: "Mã QR Code Momo của Thái Hoàng Minh để ủng hộ",
                            className: "w-48 h-48 mx-auto rounded-md shadow-md"
                        }), f.jsx("p", {
                            className: "mt-2 text-sm text-gray-500",
                            children: "THAI HOANG MINH"
                        })]
                    }), f.jsxs("div", {
                        className: "text-center p-4 border border-gray-200 rounded-lg bg-gray-50",
                        children: [f.jsx("h3", {
                            className: "text-lg font-semibold mb-2 text-gray-700",
                            children: "Ngân hàng (MB Bank)"
                        }), f.jsx("img", {
                            src: "./Pictures/MBB.png",
                            alt: "Mã QR Code MB Bank của Thái Hoàng Minh để ủng hộ",
                            className: "w-48 h-48 mx-auto rounded-md shadow-md"
                        }), f.jsxs("p", {
                            className: "mt-2 text-sm text-gray-500",
                            children: ["STK: ", f.jsx("strong", {
                                children: "00866108709"
                            })]
                        })]
                    })]
                }), f.jsx("button", {
                    onClick: () => El(!1),
                    className: "mt-8 w-full bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",
                    children: "Đóng"
                })]
            })
        }), f.jsx("style", {
            children: `
        html {
          scroll-behavior: smooth;
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.15s ease-out;
        }
        /* Keyboard Animations */
        @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        @keyframes slide-down {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
        }
        .animate-slide-up {
            animation: slide-up 0.3s ease-out forwards;
        }
        .animate-slide-down {
            animation: slide-down 0.3s ease-in forwards;
        }
      `
        })]
    })
}
  , H0 = document.getElementById("root");
if (!H0)
    throw new Error("Could not find root element to mount to");
const Cm = hm.createRoot(H0);
Cm.render(f.jsx(ku.StrictMode, {
    children: f.jsx(Um, {})
}));
