if (self.CavalryLogger) {
    CavalryLogger.start_js(["Z3urS"]);
}

self.__DEV__ = self.__DEV__ || 0, self.emptyFunction = function() {};
"use strict";





(function() {
    "use strict";
    var a = Array.prototype.indexOf;
    Array.prototype.includes || (Array.prototype.includes = function(d) {
        "use strict";
        if (d !== void 0 && Array.isArray(this) && !Number.isNaN(d)) return a.apply(this, arguments) !== -1;
        var e = Object(this),
            f = e.length ? b(e.length) : 0;
        if (f === 0) return !1;
        var g = arguments.length > 1 ? c(arguments[1]) : 0,
            h = g < 0 ? Math.max(f + g, 0) : g,
            i = Number.isNaN(d);
        while (h < f) {
            var j = e[h];
            if (j === d || i && Number.isNaN(j)) return !0;
            h++
        }
        return !1
    });

    function b(a) {
        return Math.min(Math.max(c(a), 0), Number.MAX_SAFE_INTEGER)
    }

    function c(a) {
        a = Number(a);
        return Number.isFinite(a) && a !== 0 ? d(a) * Math.floor(Math.abs(a)) : a
    }

    function d(a) {
        return a >= 0 ? 1 : -1
    }
})();
var __p;
(function() {
    var a = {},
        b = function(a, b) {
            if (!a && !b) return null;
            var c = {};
            typeof a !== "undefined" && (c.type = a);
            typeof b !== "undefined" && (c.signature = b);
            return c
        },
        c = function(a, c) {
            return b(a && /^[A-Z]/.test(a) ? a : void 0, c && (c.params && c.params.length || c.returns) ? "function(" + (c.params ? c.params.map(function(a) {
                return /\?/.test(a) ? "?" + a.replace("?", "") : a
            }).join(",") : "") + ")" + (c.returns ? ":" + c.returns : "") : void 0)
        },
        d = function(a, b, c) {
            return a
        },
        e = function(a, b, d) {
            "sourcemeta" in __transform_includes && (a.__SMmeta = b);
            if ("typechecks" in __transform_includes) {
                b = c(b ? b.name : void 0, d);
                b && __w(a, b)
            }
            return a
        },
        f = function(a, b, c) {
            return c.apply(a, b)
        },
        g = function(a, b, c, d) {
            d && d.params && __t.apply(a, d.params);
            c = c.apply(a, b);
            d && d.returns && __t([c, d.returns]);
            return c
        },
        h = function(b, c, d, e, f) {
            if (f) {
                f.callId || (f.callId = f.module + ":" + (f.line || 0) + ":" + (f.column || 0));
                e = f.callId;
                a[e] = (a[e] || 0) + 1
            }
            return d.apply(b, c)
        };
    typeof __transform_includes === "undefined" ? (__annotator = d, __bodyWrapper = f) : (__annotator = e, "codeusage" in __transform_includes ? (__annotator = d, __bodyWrapper = h, __bodyWrapper.getCodeUsage = function() {
        return a
    }, __bodyWrapper.clearCodeUsage = function() {
        a = {}
    }) : "typechecks" in __transform_includes ? __bodyWrapper = g : __bodyWrapper = f)
})();
__t = function(a) {
    return a[0]
}, __w = function(a) {
    return a
};



(function(a, b) {
    var c = "keys",
        d = "values",
        e = "entries",
        f = function() {
            var a = h(Array),
                b;
            a || (b = function() {
                "use strict";

                function a(a, b) {
                    this.$1 = a, this.$2 = b, this.$3 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$1,
                        b = this.$1.length,
                        f = this.$3,
                        g = this.$2;
                    if (f >= b) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    this.$3 = f + 1;
                    if (g === c) return {
                        value: f,
                        done: !1
                    };
                    else if (g === d) return {
                        value: a[f],
                        done: !1
                    };
                    else if (g === e) return {
                        value: [f, a[f]],
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: a ? function(a) {
                    return a.keys()
                } : function(a) {
                    return new b(a, c)
                },
                values: a ? function(a) {
                    return a.values()
                } : function(a) {
                    return new b(a, d)
                },
                entries: a ? function(a) {
                    return a.entries()
                } : function(a) {
                    return new b(a, e)
                }
            }
        }(),
        g = function() {
            var a = h(String),
                b;
            a || (b = function() {
                "use strict";

                function a(a) {
                    this.$1 = a, this.$2 = 0
                }
                var b = a.prototype;
                b.next = function() {
                    if (this.$1 == null) return {
                        value: void 0,
                        done: !0
                    };
                    var a = this.$2,
                        b = this.$1,
                        c = b.length;
                    if (a >= c) {
                        this.$1 = void 0;
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    var d = b.charCodeAt(a);
                    if (d < 55296 || d > 56319 || a + 1 === c) d = b[a];
                    else {
                        c = b.charCodeAt(a + 1);
                        c < 56320 || c > 57343 ? d = b[a] : d = b[a] + b[a + 1]
                    }
                    this.$2 = a + d.length;
                    return {
                        value: d,
                        done: !1
                    }
                };
                b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                    return this
                };
                return a
            }());
            return {
                keys: function() {
                    throw TypeError("Strings default iterator doesn't implement keys.")
                },
                values: a ? function(a) {
                    return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]()
                } : function(a) {
                    return new b(a)
                },
                entries: function() {
                    throw TypeError("Strings default iterator doesn't implement entries.")
                }
            }
        }();

    function h(a) {
        return typeof a.prototype[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] === "function" && typeof a.prototype.values === "function" && typeof a.prototype.keys === "function" && typeof a.prototype.entries === "function"
    }
    var i = function() {
            "use strict";

            function a(a, b) {
                this.$1 = a, this.$2 = b, this.$3 = Object.keys(a), this.$4 = 0
            }
            var b = a.prototype;
            b.next = function() {
                var a = this.$3.length,
                    b = this.$4,
                    f = this.$2,
                    g = this.$3[b];
                if (b >= a) {
                    this.$1 = void 0;
                    return {
                        value: void 0,
                        done: !0
                    }
                }
                this.$4 = b + 1;
                if (f === c) return {
                    value: g,
                    done: !1
                };
                else if (f === d) return {
                    value: this.$1[g],
                    done: !1
                };
                else if (f === e) return {
                    value: [g, this.$1[g]],
                    done: !1
                }
            };
            b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] = function() {
                return this
            };
            return a
        }(),
        j = {
            keys: function(a) {
                return new i(a, c)
            },
            values: function(a) {
                return new i(a, d)
            },
            entries: function(a) {
                return new i(a, e)
            }
        };

    function k(a, b) {
        if (typeof a === "string") return g[b || d](a);
        else if (Array.isArray(a)) return f[b || d](a);
        else if (a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();
        else return j[b || e](a)
    }
    Object.assign(k, {
        KIND_KEYS: c,
        KIND_VALUES: d,
        KIND_ENTRIES: e,
        keys: function(a) {
            return k(a, c)
        },
        values: function(a) {
            return k(a, d)
        },
        entries: function(a) {
            return k(a, e)
        },
        generic: j.entries
    });
    a.FB_enumerate = k
})(typeof global === "undefined" ? this : global);





typeof window !== "undefined" && window.JSON && JSON.stringify(["\u2028\u2029"]) === '["\u2028\u2029"]' && (JSON.stringify = function(a) {
    var b = /\u2028/g,
        c = /\u2029/g;
    return function(d, e, f) {
        d = a.call(this, d, e, f);
        d && (-1 < d.indexOf("\u2028") && (d = d.replace(b, "\\u2028")), -1 < d.indexOf("\u2029") && (d = d.replace(c, "\\u2029")));
        return d
    }
}(JSON.stringify));


(function() {
    var a = Object.prototype.hasOwnProperty;
    Object.entries = function(b) {
        if (b == null) throw new TypeError("Object.entries called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push([d, b[d]]);
        return c
    };
    Object.values = function(b) {
        if (b == null) throw new TypeError("Object.values called on non-object");
        var c = [];
        for (var d in b) a.call(b, d) && c.push(b[d]);
        return c
    }
})();


(function(a) {
    a.__m = function(a, b) {
        a.__SMmeta = b;
        return a
    }
})(this);


String.prototype.contains || (String.prototype.contains = String.prototype.includes);
String.prototype.padStart || (String.prototype.padStart = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return b.slice(0, a) + String(this)
    }
}), String.prototype.padEnd || (String.prototype.padEnd = function(a, b) {
    a = a >> 0;
    b = String(b || " ");
    if (this.length > a) return String(this);
    else {
        a = a - this.length;
        a > b.length && (b += b.repeat(a / b.length));
        return String(this) + b.slice(0, a)
    }
});
String.prototype.trimLeft || (String.prototype.trimLeft = function() {
    return this.replace(/^\s+/, "")
}), String.prototype.trimRight || (String.prototype.trimRight = function() {
    return this.replace(/\s+$/, "")
});


(function(a) {
    var b = a.babelHelpers = {},
        c = Object.prototype.hasOwnProperty;
    b.inheritsLoose = function(a, b) {
        Object.assign(a, b);
        a.prototype = Object.create(b && b.prototype);
        a.prototype.constructor = a;
        a.__superConstructor__ = b;
        return b
    };
    b.wrapNativeSuper = function(a) {
        var c = typeof Map === "function" ? new Map() : void 0;
        b.wrapNativeSuper = function(a) {
            if (a === null) return null;
            if (typeof a !== "function") throw new TypeError("Super expression must either be null or a function");
            if (c !== void 0) {
                if (c.has(a)) return c.get(a);
                c.set(a, d)
            }
            b.inheritsLoose(d, a);

            function d() {
                a.apply(this, arguments)
            }
            return d
        };
        return b.wrapNativeSuper(a)
    };
    b.assertThisInitialized = function(a) {
        if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return a
    };
    b._extends = Object.assign;
    b["extends"] = b._extends;
    b.construct = function(a, b) {
        var c = [null];
        c.push.apply(c, b);
        return new(Function.prototype.bind.apply(a, c))()
    };
    b.objectWithoutPropertiesLoose = function(a, b) {
        var d = {};
        for (var e in a) {
            if (!c.call(a, e) || b.indexOf(e) >= 0) continue;
            d[e] = a[e]
        }
        return d
    };
    b.taggedTemplateLiteralLoose = function(a, b) {
        b || (b = a.slice(0));
        a.raw = b;
        return a
    };
    b.bind = Function.prototype.bind
})(typeof global === "undefined" ? self : global);
(function(a) {
    if (a.require) return;
    var b = (a.Env || {}).gk_require_dic,
        c = null,
        d = [],
        e = b ? Object.create(null) : {},
        f = b ? Object.create(null) : {},
        g = 0,
        h = 0,
        i = 0,
        j = 1,
        k = 2,
        l = 4,
        m = 8,
        n = {},
        o = Object.prototype.hasOwnProperty,
        p = Object.prototype.toString;

    function q(a) {
        a = Array.prototype.slice.call(a);
        var b = {},
            c, d, f, g;
        while (a.length) {
            d = a.shift();
            if (b[d]) continue;
            b[d] = !0;
            f = e[d];
            if (!f || Q(f)) continue;
            if (f.dependencies)
                for (c = 0; c < f.dependencies.length; c++) g = f.dependencies[c], Q(g) || a.push(g.id)
        }
        for (d in b) o.call(b, d) && a.push(d);
        b = [];
        for (c = 0; c < a.length; c++) {
            d = a[c];
            var h = d;
            f = e[d];
            if (!f || !f.dependencies) h += " is not defined";
            else if (Q(f)) h += " is ready";
            else {
                d = [];
                for (var i = 0; i < f.dependencies.length; i++) g = f.dependencies[i], (!e[g] || !Q(e[g])) && d.push(g.id);
                h += " is waiting for " + d.join(", ")
            }
            b.push(h)
        }
        return b.join("\n")
    }

    function r(a) {
        this.name = "ModuleError", this.message = a, this.stack = Error(a).stack, this.framesToPop = 2
    }
    r.prototype = Object.create(Error.prototype);
    r.prototype.constructor = r;
    var s = (a.Env || {}).profile_require_factories,
        t = a.performance || a.msPerformance || a.webkitPerformance || {},
        u;
    if (t.now && t.timing && t.timing.navigationStart) {
        var v = t.timing.navigationStart;
        u = function() {
            return t.now() + v
        }
    } else u = function() {
        return Date.now()
    };
    var w = 0,
        x = 0;

    function y(a) {
        x++;
        var b = e[a];
        if (b && b.exports != null) {
            b.refcount-- === 1 && (e[a] = void 0);
            return b.exports
        }
        return A(a)
    }

    function z(b) {
        var c = e[b];
        b = f[b];
        if (c.factoryLength === -1) {
            var d = s && a.ProfilingCounters,
                g;
            d && (g = d.startTiming("FACTORY_COMPILE_TIME"));
            c.factoryLength = c.factory.length;
            g != null && (d = d.stopTiming(g), b.compileTime += d)
        }
        return c.factoryLength
    }

    function A(b) {
        if (a.ErrorUtils && !a.ErrorUtils.inGuard()) return a.ErrorUtils.applyWithGuard(A, null, [b]);
        var d = e[b];
        if (!d) {
            var g = 'Requiring unknown module "' + b + '"';
            throw new r(g)
        }
        var h;
        if (d.hasError) throw new r('Requiring module "' + b + '" which threw an exception: ' + d.error.message);
        if (!Q(d)) throw new r('Requiring module "' + b + '" with unresolved dependencies: ' + q([b]));
        g = d.exports = {};
        var i = d.factory;
        if (p.call(i) === "[object Function]") {
            var j = d.dependencies,
                l = j.length;
            try {
                try {
                    U(d)
                } catch (a) {
                    B(a, b)
                }
                var o = [],
                    t = l;
                d.special & m && (o = c.slice(0), o[c.length - 2] = d, o[c.length - 1] = g, t += o.length);
                if (d.special & k) {
                    g = z(b);
                    t = Math.min(l + o.length, g)
                }
                for (var g = 0; g < l; g++) {
                    var v = j[g];
                    o.length < t && o.push(y.call(null, v.id))
                }++w;
                v = s && a.ProfilingCounters;
                var x;
                v && (v.incrementCounter("FACTORY_COUNT", 1), x = v.startTiming("FACTORY_EXEC_TIME"));
                try {
                    t = i.apply(d.context || a, o)
                } catch (a) {
                    B(a, b)
                } finally {
                    if (s) {
                        j = u();
                        l = 0;
                        x != null && (l = v.stopTiming(x));
                        g = f[d.id];
                        g.factoryTime = l;
                        g.factoryEnd = j;
                        if (i.__SMmeta)
                            for (var C in i.__SMmeta) Object.prototype.hasOwnProperty.call(i.__SMmeta, C) && (g[C] = i.__SMmeta[C])
                    }
                }
            } catch (a) {
                d.hasError = !0;
                d.error = a;
                d.exports = null;
                throw a
            }
            t && (d.exports = t);
            if (typeof d.exports === "function") {
                o = d.exports;
                v = o.__superConstructor__;
                (!o.displayName || v && v.displayName === o.displayName) && (o.displayName = (o.name || "(anonymous)") + " [from " + b + "]")
            }
            d.factoryFinished = !0
        } else d.exports = i;
        l = "__isRequired__" + b;
        j = e[l];
        j && !Q(j) && H(l, n);
        d.refcount-- === 1 && (e[b] = void 0);
        return d.exports
    }

    function B(a, b) {
        a instanceof Error || (a = new Error(a));
        if (e.ex && e.erx) {
            var c = y.call(null, "ex"),
                d = y.call(null, "erx");
            d = d(a.message);
            d[0].indexOf(' from module "%s"') < 0 && (d[0] += ' from module "%s"', d[d.length] = b);
            a.message = c.apply(null, d)
        }
        throw a
    }

    function C() {
        var a = 0;
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].factoryTime);
        return a
    }

    function D() {
        var a = 0;
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a += f[b].compileTime);
        return a
    }

    function E() {
        return w
    }

    function F() {
        return x
    }

    function G() {
        var a = {};
        for (var b in f) Object.prototype.hasOwnProperty.call(f, b) && (a[b] = f[b]);
        return a
    }

    function H(a, b, c, g, h, i, j) {
        b === void 0 ? (b = [], c = a, a = M()) : c === void 0 && (c = b, p.call(a) === "[object Array]" ? (b = a, a = M(b.join(","))) : b = []);
        var k = {
                cancel: K.bind(this, a)
            },
            l = e[a];
        if (!b && !c && i) {
            I(a).refcount += i;
            return k
        }
        f[a] = {
            id: a,
            dependencies: b,
            meta: j,
            category: g,
            defined: s ? u() : null,
            compileTime: null,
            factoryTime: null,
            factoryEnd: null
        };
        j = b.map(I);
        l = e[a];
        if (l) {
            if (l.dependencies && !l.reload) return k;
            i && (l.refcount += i);
            l.factory = c;
            l.dependencies = j;
            l.context = h;
            l.special = g
        } else l = new J(a, i || 0, null, c, j, h, g), e[a] = l;
        T(l);
        if (d.length > 0) {
            b = d;
            d = [];
            while (b.length > 0) y.call(null, b.pop().id)
        }
        return k
    }

    function I(a) {
        var b = e[a];
        if (b) return b;
        b = new J(a, 0);
        e[a] = b;
        return b
    }

    function J(a, b, c, d, e, f, g) {
        this.id = a, this.refcount = b, this.exports = c || null, this.factory = d, this.factoryLength = -1, this.factoryFinished = !1, this.dependencies = e, this.depPosition = 0, this.context = f, this.special = g || 0, this.hasError = !1, this.error = null, this.ranRecursiveSideEffects = !1, this.sideEffectDependencyException = null, this.nextDepWaitingHead = null, this.nextDepWaitingNext = null, this.tarjanGeneration = -1, this.tarjanLow = 0, this.tarjanIndex = 0, this.tarjanOnStack = !1
    }

    function K(a) {
        if (!e[a]) return;
        var b = e[a];
        e[a] = void 0;
        if (b.dependencies)
            for (var a = 0; a < b.dependencies.length; a++) {
                var c = b.dependencies[a];
                c.refcount-- === 1 && K(c.id)
            }
    }

    function L(a, b, c) {
        return H("__requireLazy__" + (a.length > 0 ? a.join(",") + "__" : "") + g++, a, $()(b, "requireLazy", {
            propagationType: 0
        }), j, c, 1)
    }

    function M(a) {
        return "__mod__" + (a ? a + "__" : "") + g++
    }

    function N(a, b, c) {
        c.tarjanGeneration != h && (c.tarjanGeneration = h, c.tarjanLow = c.tarjanIndex = i++, c.tarjanOnStack = !0, b.push(c));
        if (c.dependencies != null)
            for (var d = c.depPosition; d < c.dependencies.length; d++) {
                var e = c.dependencies[d];
                e.tarjanGeneration != h ? (N(a, b, e), c.tarjanLow = Math.min(c.tarjanLow, e.tarjanLow)) : e.tarjanOnStack && (c.tarjanLow = Math.min(c.tarjanLow, e.tarjanIndex))
            }
        if (c.tarjanLow == c.tarjanIndex) {
            e = [];
            do {
                d = b.pop();
                d.tarjanOnStack = !1;
                e.push(d);
                if (c == b[0] && d != c && d.dependencies != null)
                    for (var f = d.depPosition; f < d.dependencies.length; f++) {
                        var g = d.dependencies[f];
                        !Q(g) && a.indexOf(g) == -1 && b.indexOf(g) == -1 && e.indexOf(g) == -1 && a.push(g)
                    }
            } while (d != c)
        }
    }

    function O(a) {
        h++, N(a.dependencies, [], a), a.depPosition++, T(a)
    }

    function P(a, b) {
        var c = b;
        while (!0) {
            if (c.dependencies && c.depPosition != c.dependencies.length) c = c.dependencies[c.depPosition];
            else break;
            if (c == a) {
                O(a);
                return
            }
        }
        a.nextDepWaitingNext = b.nextDepWaitingHead;
        b.nextDepWaitingHead = a
    }

    function Q(a) {
        return a.dependencies != null && a.depPosition >= a.dependencies.length
    }

    function R(a) {
        a.depPosition++, T(a)
    }

    function S(a) {
        var b = a.nextDepWaitingHead;
        a.nextDepWaitingHead = null;
        while (b !== null) {
            a = b;
            b = a.nextDepWaitingNext;
            a.nextDepWaitingNext = null;
            var c = !e[a.id];
            c || R(a)
        }
    }

    function aa(a) {
        return a.special & j
    }

    function T(a) {
        while (a.depPosition < a.dependencies.length) {
            var b = a.dependencies[a.depPosition],
                c = Q(b);
            if (!c && a != b) {
                P(a, b);
                return
            }
            a.depPosition++
        }
        aa(a) && d.push(a);
        a.nextDepWaitingHead !== null && S(a)
    }

    function U(a) {
        if (a.sideEffectDependencyException) throw a.sideEffectDependencyException;
        if (a.ranRecursiveSideEffects) return;
        a.ranRecursiveSideEffects = !0;
        var b = a.dependencies;
        if (b)
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    U(d)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
                if (d.special & l) try {
                    y.call(null, d.id)
                } catch (b) {
                    a.sideEffectDependencyException = b;
                    throw b
                }
            }
    }

    function V(a, b) {
        e[a] = new J(a, 0, b), f[a] = {
            id: a,
            dependencies: [],
            category: 0,
            compileTime: null,
            factoryLengthAccessTime: null,
            factoryTime: null,
            factoryEnd: null
        }
    }
    V("module", 0);
    V("exports", 0);
    V("define", H);
    V("global", a);
    V("require", y);
    V("requireDynamic", W);
    V("requireLazy", L);
    V("requireWeak", X);
    V("ifRequired", Y);
    c = [y.call(null, "global"), y.call(null, "require"), y.call(null, "requireDynamic"), y.call(null, "requireLazy"), null, null];
    H.amd = {};
    a.define = H;
    a.require = y;
    a.requireDynamic = W;
    a.requireLazy = L;

    function W(a, b) {
        throw new ReferenceError("requireDynamic is not defined")
    }

    function X(a, b) {
        Y.call(null, a, function(a) {
            b(a)
        }, function() {
            H("__requireWeak__" + a + "__" + g++, ["__isRequired__" + a], $()(function() {
                b(e[a].exports)
            }, "requireWeak"), j, null, 1)
        })
    }

    function Y(a, b, c) {
        a = e[a];
        if (a && a.factoryFinished) {
            if (typeof b === "function") return b(a.exports)
        } else if (typeof c === "function") return c()
    }
    b = {
        getModules: function() {
            var a = {};
            for (var b in e) e[b] && Object.prototype.hasOwnProperty.call(e, b) && (a[b] = e[b]);
            return a
        },
        modulesMap: e,
        debugUnresolvedDependencies: q
    };

    function Z(a) {
        return a
    }

    function $() {
        var b = a.TimeSlice && a.TimeSlice.guard ? a.TimeSlice.guard : Z,
            c = a.ScheduleJSWork ? a.ScheduleJSWork : Z;
        return function() {
            return c(b.apply(void 0, arguments))
        }
    }
    V("__getFactoryTime", C);
    V("__getCompileTime", D);
    V("__getTotalFactories", E);
    V("__getTotalRequireCalls", F);
    V("__getModuleTimeDetails", G);
    V("__debug", b);
    a.__d = function(a, b, c, d) {
        $()(function() {
            H(a, b, c, (d || k) | m, null, null, null)
        }, "define " + a, {
            root: !0
        })()
    };
    if (a.__d_stub) {
        for (var X = 0; X < a.__d_stub.length; X++) a.__d.apply(null, a.__d_stub[X]);
        delete a.__d_stub
    }
    if (a.__rl_stub) {
        for (var W = 0; W < a.__rl_stub.length; W++) L.apply(null, a.__rl_stub[W]);
        delete a.__rl_stub
    }
})(this);

(function(a) {
    var b = a.performance;
    b && b.setResourceTimingBufferSize && (b.setResourceTimingBufferSize(1e5), b.onresourcetimingbufferfull = function() {
        a.__isresourcetimingbufferfull = !0
    }, b.setResourceTimingBufferSize = function() {})
})(this);
__d("Env", [], (function(a, b, c, d, e, f) {
    b = {
        ajaxpipe_token: null,
        iframeKey: "",
        isCQuick: !1,
        start: Date.now(),
        nocatch: !1
    };
    a.Env && Object.assign(b, a.Env);
    a.Env = b;
    e.exports = b
}), null);
__d("TAALOpcodes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        PREVIOUS_FILE: 1,
        PREVIOUS_FRAME: 2,
        PREVIOUS_DIR: 3,
        FORCED_KEY: 4
    };
    e.exports = a
}), null);
__d("TAAL", ["TAALOpcodes"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        blameToPreviousFile: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FILE])
        },
        blameToPreviousFrame: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_FRAME])
        },
        blameToPreviousDirectory: function(a) {
            return this.applyOpcodes(a, [b("TAALOpcodes").PREVIOUS_DIR])
        },
        applyOpcodes: function(a, b) {
            return b && b.length ? a + " TAAL[" + b.join(";") + "]" : a
        }
    };
    e.exports = a
}), null);
__d("eprintf", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = c.map(function(a) {
                return String(a)
            }),
            f = a.split("%s").length - 1;
        if (f !== e.length) return g("eprintf args number mismatch: %s", JSON.stringify([a].concat(e)));
        var h = 0;
        return a.replace(/%s/g, function() {
            return String(e[h++])
        })
    }
    e.exports = g
}), null);
__d("ex", ["eprintf"], (function(a, b, c, d, e, f) {
    function g(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = c.map(function(a) {
                return String(a)
            }),
            f = a.split("%s").length - 1;
        return f !== e.length ? g("ex args number mismatch: %s", JSON.stringify([a].concat(e))) : g._prefix + JSON.stringify([a].concat(e)) + g._suffix
    }
    g._prefix = "<![EX[";
    g._suffix = "]]>";
    e.exports = g
}), null);
__d("sprintf", [], (function(a, b, c, d, e, f) {
    function a(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        var e = 0;
        return a.replace(/%s/g, function() {
            return String(c[e++])
        })
    }
    e.exports = a
}), null);
__d("invariant", ["Env", "TAAL", "ex", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("ex");

    function a(a, c) {
        __p && __p();
        if (!a) {
            var d = c;
            for (var e = arguments.length, f = new Array(e > 2 ? e - 2 : 0), i = 2; i < e; i++) f[i - 2] = arguments[i];
            if (typeof d === "number") {
                var j = h(d, f),
                    k = j.message,
                    l = j.decoderLink;
                d = k;
                f.unshift(l)
            } else if (d === void 0) {
                d = "Invariant: ";
                for (var m = 0; m < f.length; m++) d += "%s,"
            }
            d = b("TAAL").blameToPreviousFrame(d);
            var n = new Error(g.apply(void 0, [d].concat(f)));
            n.name = "Invariant Violation";
            n.messageWithParams = [d].concat(f);
            throw n
        }
    }

    function h(a, c) {
        var d = "Minified invariant #" + a + "; %s";
        c.length > 0 && (d += " Params: " + c.map(function(a) {
            return "%s"
        }).join(", "));
        a = b("Env").show_invariant_decoder === !0 ? "visit " + i(a, c) + " to see the full message." : "";
        return {
            message: d,
            decoderLink: a
        }
    }

    function i(a, b) {
        a = "https://our.intern.facebook.com/intern/invariant/" + a + "/";
        b.length > 0 && (a += "?" + b.map(function(a, b) {
            return "args[" + b + "]=" + encodeURIComponent(String(a))
        }).join("&"));
        return a
    }
    e.exports = a
}), null);
__d("ArbiterToken", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a, b) {
            this.unsubscribe = function() {
                for (var a = 0; a < this.$2.length; a++) this.$2[a].remove();
                this.$2.length = 0
            }, this.$1 = a, this.$2 = b
        }
        var b = a.prototype;
        b.isForArbiterInstance = function(a) {
            this.$1 || g(0, 2506);
            return this.$1 === a
        };
        return a
    }();
    e.exports = a
}), null);
__d("ErrorConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        ANONYMOUS_GUARD_TAG: "<anonymous guard>",
        EVAL_FRAME_PATTERN_CHROME: /^at .*eval eval (at .*\:\d+\:\d+), .*$/,
        GLOBAL_ERROR_HANDLER_TAG: typeof window === "undefined" ? "<self.onerror>" : "<window.onerror>",
        GLOBAL_REACT_ERROR_HANDLER_TAG: "<global.react>",
        IE_AND_OTHER_FRAME_PATTERN: /(.*)[@\s][^\s]+$/,
        IE_STACK_TRACE_REFERENCES: ["Unknown script code", "Function code", "eval code"]
    };
    e.exports = a
}), null);
__d("ErrorSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        return "<![EX[" + JSON.stringify(g(a)) + "]]>"
    }

    function b(a) {
        try {
            var b = k(a, /^<\!\[EX\[(\[.*\])\]\]>$/);
            b = b ? JSON.parse(b[0]) : [a];
            var c = b[0];
            b = b.slice(1);
            c = j(c);
            b && b.length > 0 && (c.params = b);
            return c
        } catch (b) {
            return {
                message: "Unable to parse error message %s because %s",
                params: [a, b.message]
            }
        }
    }

    function c(a) {
        var b = a.message || "",
            c = a.params || [],
            d = 0;
        return [b.replace(/%s/g, function() {
            return d < c.length ? String(c[d++]) : "NOPARAM"
        }), d < c.length ? " PARAMS" + JSON.stringify(c.slice(d)) : "", h(a)].join("")
    }

    function g(a) {
        return [a.message + h(a)].concat(i(a))
    }

    function h(a) {
        a = a.taalOpcodes;
        return a && a.length > 0 ? " TAAL[" + a.join(";") + "]" : ""
    }

    function i(a) {
        return ((a = a.params) != null ? a : []).map(function(a) {
            return String(a)
        })
    }

    function j(a) {
        __p && __p();
        var b = k(a, /^(.*) TAAL\[([1234](?:;[1234])*)\]$/);
        b = (b = b) != null ? b : [a, null];
        a = b[0];
        b = b[1];
        a = {
            message: a
        };
        if (b) {
            b = b.split(";").map(function(a) {
                return parseInt(a, 10)
            });
            b.length > 0 && (a.taalOpcodes = b)
        }
        return a
    }

    function k(a, b) {
        if (typeof a === "string") {
            a = a.match(b);
            if (a && a.length > 0) return a.slice(1)
        }
    }
    e.exports = {
        parse: b,
        stringify: a,
        toFormattedMessage: c,
        toMessageWithParams: g
    }
}), null);
__d("BaseErrorUtils", ["ErrorConstants", "ErrorSerializer"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    Error.stackTraceLimit != null && Error.stackTraceLimit < 40 && (Error.stackTraceLimit = 40);
    var g = {
        getColumn: function(a) {
            a = (a = a.columnNumber) != null ? a : "";
            return String(a)
        },
        getColumnFromStackData: function(a) {
            return a[0] && a[0].column || ""
        },
        getIEFrame: function(a) {
            for (var c = 0; c < b("ErrorConstants").IE_STACK_TRACE_REFERENCES.length; c++) {
                var d = " " + b("ErrorConstants").IE_STACK_TRACE_REFERENCES[c];
                if (a.endsWith(d)) return [a, a.substring(0, a.length - d.length)]
            }
            return null
        },
        getLine: function(a) {
            a = (a = a.lineNumber) != null ? a : "";
            return String(a)
        },
        getLineFromStackData: function(a) {
            return a[0] && a[0].line || ""
        },
        getReactComponentStack: function(a) {
            if (a == null || a === "") return null;
            a = a.split("\n");
            a.splice(0, 1);
            return a.map(function(a) {
                return a.trim()
            })
        },
        getScript: function(a) {
            a = (a = a.fileName) != null ? a : "";
            return String(a)
        },
        getScriptFromStackData: function(a) {
            return a[0] && a[0].script || ""
        },
        getSimpleHash: function(a) {
            var b = 0;
            if (a.length === 0) return String(b);
            for (var c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b = (b << 5) - b + d;
                b |= 0
            }
            return String(b)
        },
        normalizeError: function(a) {
            var c = g.normalizeErrorStack(a),
                d = g.getReactComponentStack(a.componentStack),
                e = b("ErrorSerializer").parse(a.message);
            e = {
                _originalError: a,
                cerror: !0,
                column: g.getColumn(a) || g.getColumnFromStackData(c),
                deferredSource: null,
                extra: {},
                fbloggerMetadata: [],
                guard: "",
                guardList: [],
                line: g.getLine(a) || g.getLineFromStackData(c),
                message: b("ErrorSerializer").toFormattedMessage(e),
                messageWithParams: b("ErrorSerializer").toMessageWithParams(e),
                name: a.name,
                reactComponentStack: d,
                script: g.getScript(a) || g.getScriptFromStackData(c),
                serverHash: null,
                stack: c.map(function(a) {
                    return a.text
                }).join("\n"),
                stackFrames: c,
                type: ""
            };
            typeof window !== "undefined" && window && window.location && (e.windowLocationURL = window.location.href);
            for (var f in e) e[f] == null && delete e[f];
            return e
        },
        normalizeErrorStack: function(a) {
            __p && __p();
            var c = a.stack;
            if (c == null) return [];
            a = a.message;
            var d = c.replace(/^[\w \.\<\>:]+:\s/, "");
            a = a != null && d.startsWith(a) ? d.substr(a.length + 1) : d !== c ? d.replace(/^.*?\n/, "") : c;
            return a.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]/g, "").split("\n").map(function(a) {
                __p && __p();
                a = a.trim();
                var c = a.match(b("ErrorConstants").EVAL_FRAME_PATTERN_CHROME);
                c && (a = c[1]);
                var d, e;
                c = a.match(/:(\d+)(?::(\d+))?$/);
                c && (d = c[1], e = c[2], a = a.slice(0, -c[0].length));
                var f;
                c = g.getIEFrame(a) || a.match(b("ErrorConstants").IE_AND_OTHER_FRAME_PATTERN);
                if (c) {
                    a = a.substring(c[1].length + 1);
                    c = c[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
                    f = c ? c[1] : ""
                }
                a.includes("charset=utf-8;base64,") && (a = "<inlined-file>");
                c = {
                    column: e,
                    identifier: f,
                    line: d,
                    script: a
                };
                var h = f != null && f !== "" ? " " + f + " (" : " ",
                    i = h.length > 1 ? ")" : "",
                    j = d != null && d !== "" ? ":" + d : "",
                    k = e != null && e !== "" ? ":" + e : "";
                h = "    at" + h + a + j + k + i;
                return babelHelpers["extends"]({}, c, {
                    text: h
                })
            })
        }
    };
    e.exports = g
}), null);
__d("FBLoggerMetadata", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = function() {
        __p && __p();

        function a() {
            this.metadata = [].concat(g)
        }
        var b = a.prototype;
        b.addMetadata = function(a, b, c) {
            this.metadata.push([a, b, c]);
            return this
        };
        b.isEmpty = function() {
            return this.metadata.length === 0
        };
        b.formatMetadata = function() {
            var a = [];
            this.metadata.forEach(function(b) {
                if (b && b.length) {
                    b = b.map(function(a) {
                        return a != null ? String(a).replace(/:/g, "_") : ""
                    }).join(":");
                    a.push(b)
                }
            });
            return a
        };
        a.addGlobalMetadata = function(a, b, c) {
            g.push([a, b, c])
        };
        a.getGlobalMetadata = function() {
            return g
        };
        a.unsetGlobalMetadata = function(a, b) {
            g = g.filter(function(c) {
                return !(Array.isArray(c) && c[0] === a && c[1] === b)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("erx", ["ex"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        if (typeof a !== "string") return a;
        var c = a.indexOf(b("ex")._prefix),
            d = a.lastIndexOf(b("ex")._suffix);
        if (c < 0 || d < 0) return [a];
        var e = c + b("ex")._prefix.length,
            f = d + b("ex")._suffix.length;
        if (e >= d) return ["erx slice failure: %s", a];
        c = a.substring(0, c);
        f = a.substring(f);
        a = a.substring(e, d);
        try {
            e = JSON.parse(a);
            e[0] = c + e[0] + f;
            return e
        } catch (b) {
            return ["erx parse failure: %s because %s", a, b.message]
        }
    }
    e.exports = a
}), null);
__d("removeFromArray", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        b = a.indexOf(b);
        b !== -1 && a.splice(b, 1)
    }
    e.exports = a
}), null);
__d("ErrorUtils", ["BaseErrorUtils", "Env", "ErrorConstants", "FBLoggerMetadata", "eprintf", "erx", "removeFromArray", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "<generated guard>",
        h = /^https?:\/\//i,
        i = /^Type Mismatch for/,
        j = [],
        k, l = [],
        m = 50,
        n = [],
        o = !1,
        p = !1,
        q = !1,
        r = /\bnocatch\b/.test(location.search);

    function s(a) {
        a = a.columnNumber || a.column;
        return a != null ? String(a) : ""
    }

    function t(a) {
        return a[0] && a[0].column || ""
    }

    function u(a) {
        a = a.lineNumber || a.line;
        return a != null ? String(a) : ""
    }

    function v(a) {
        return a[0] && a[0].line || ""
    }

    function w(a) {
        a = a.fileName || a.sourceURL;
        return a != null ? String(a) : ""
    }

    function x(a) {
        return a[0] && a[0].script || ""
    }

    function y(a) {
        __p && __p();
        var c = a.stackTrace || a.stack;
        if (c == null) return [];
        a = a.message;
        var d = c.replace(/^[\w \.\<\>:]+:\s/, "");
        a = a != null && d.startsWith(a) ? d.substr(a.length + 1) : d !== c ? d.replace(/^.*?\n/, "") : c;
        return a.split(/\n\n/)[0].replace(/[\(\)]|\[.*?\]/g, "").split("\n").map(function(a) {
            __p && __p();
            a = a.trim();
            var c = a.match(b("ErrorConstants").EVAL_FRAME_PATTERN_CHROME);
            c && (a = c[1]);
            var d, e;
            c = a.match(/:(\d+)(?::(\d+))?$/);
            c && (d = c[1], e = c[2], a = a.slice(0, -c[0].length));
            var f;
            c = b("BaseErrorUtils").getIEFrame(a) || a.match(b("ErrorConstants").IE_AND_OTHER_FRAME_PATTERN);
            if (c) {
                a = a.substring(c[1].length + 1);
                c = c[1].match(/(?:at)?\s*(.*)(?:[^\s]+|$)/);
                f = c ? c[1] : ""
            }
            a.includes("charset=utf-8;base64,") && (a = "<inlined-file>");
            c = {
                column: e,
                identifier: f,
                line: d,
                script: a
            };
            k && k(c);
            a = "    at" + (c.identifier ? " " + c.identifier + " (" : " ") + c.script + (c.line ? ":" + c.line : "") + (c.column ? ":" + c.column : "") + (c.identifier ? ")" : "");
            return babelHelpers["extends"]({}, c, {
                text: a
            })
        })
    }

    function z(a) {
        n.unshift(a), o = !0
    }

    function A() {
        n.shift(), o = n.length !== 0
    }
    var B = {
        ANONYMOUS_GUARD_TAG: b("ErrorConstants").ANONYMOUS_GUARD_TAG,
        GENERATED_GUARD_TAG: g,
        GLOBAL_ERROR_HANDLER_TAG: b("ErrorConstants").GLOBAL_ERROR_HANDLER_TAG,
        history: l,
        addListener: function(a, b) {
            b === void 0 && (b = !1), j.push(a), b || l.forEach(function(b) {
                return a(b.error, b.loggingType)
            })
        },
        removeListener: function(a) {
            b("removeFromArray")(j, a)
        },
        setSourceResolver: function(a) {
            k = a
        },
        applyWithGuard: function(c, d, e, f, g, h) {
            __p && __p();
            z(g || b("ErrorConstants").ANONYMOUS_GUARD_TAG);
            b("Env").nocatch && (r = !0);
            if (r) {
                try {
                    g = c.apply(d, e || [])
                } finally {
                    A()
                }
                return g
            }
            try {
                return Function.prototype.apply.call(c, d, e || [])
            } catch (q) {
                g = q;
                if (g == null) try {
                    var i = d,
                        j = function(a) {
                            __p && __p();
                            if (a == null) return "<unset>";
                            else if (typeof a === "object" && a.toString) return a.toString();
                            else if (typeof a === "boolean" && a.toString) return a.toString();
                            else if (typeof a === "number" && a.toString) return a.toString();
                            else if (typeof a === "string") return a;
                            else if (typeof a === "symbol" && a.toString) return a.toString();
                            else if (typeof a === "function" && a.toString) return a.toString();
                            return "<unset>"
                        };
                    if (d != null)
                        if (d == window) i = "[The window object]";
                        else if (d == a) i = "[The global object]";
                    else {
                        var k = d,
                            l = {};
                        Object.keys(k).map(function(a, b) {
                            b = k[a];
                            l[a] = j(b)
                        });
                        i = l
                    }
                    d = (e || []).map(j);
                    var m = "applyWithGuard threw null or undefined:\nFunc: %s\nContext: %s\nArgs: %s",
                        o = c.toString && c.toString().substr(0, 1024);
                    i = JSON.stringify(i).substr(0, 1024);
                    d = JSON.stringify(d).substr(0, 1024);
                    var p = b("sprintf")(m, o ? o : "this function does not support toString", i, d);
                    g = new Error(p);
                    g.messageWithParams = [m, o ? o : "this function does not support toString", i, d]
                } catch (a) {
                    p = "applyWithGuard threw null or undefined with unserializable data:\nFunc: %s\nMetaEx: %s";
                    m = c.toString && c.toString().substr(0, 1024);
                    o = b("sprintf")(p, m ? m : "this function does not support toString", a.message);
                    g = new Error(o);
                    g.messageWithParams = [o, m ? m : "this function does not support toString", a.message]
                }
                h && h.deferredSource && (g.deferredSource = h.deferredSource);
                i = B.normalizeError(g);
                f && f(i);
                i.extra || (i.extra = {});
                if (c) try {
                    i.extra[c.toString().substring(0, 100)] = "function"
                } catch (a) {}
                e && (i.extra[Array.from(e).toString().substring(0, 100)] = "args");
                i.guard = n[0];
                i.guardList = n.slice();
                B.reportError(i, !1, "GUARDED")
            } finally {
                A()
            }
        },
        guard: function(a, b, c) {
            b = b || a.name || g;

            function d() {
                return B.applyWithGuard(a, c || this, [].concat(Array.prototype.slice.call(arguments)), null, b)
            }
            a.__SMmeta && (d.__SMmeta = a.__SMmeta);
            return d
        },
        inGuard: function() {
            return o
        },
        normalizeError: function(a) {
            __p && __p();
            var c = a;
            a = a != null ? a : {};
            if (Object.prototype.hasOwnProperty.call(a, "_originalError")) return a;
            var d = y(a),
                e = !1;
            if (a.framesToPop) {
                var f = a.framesToPop,
                    g;
                while (f > 0 && d.length > 0) g = d.shift(), f--, e = !0;
                i.test(a.message) && a.framesToPop === 2 && g && (h.test(g.script) && (a.message += " at " + g.script + (g.line ? ":" + g.line : "") + (g.column ? ":" + g.column : "")))
            }
            f = b("BaseErrorUtils").getReactComponentStack(a.componentStack);
            var j = a.fbloggerMetadata ? a.fbloggerMetadata : [],
                l = b("FBLoggerMetadata").getGlobalMetadata().map(function(a) {
                    return a.join(":")
                });
            j = [].concat(j, l);
            j.length === 0 && (j = void 0);
            l = {
                _originalError: c,
                cerror: !1,
                column: e ? t(d) : s(a) || t(d),
                deferredSource: a.deferredSource,
                extra: a.extra,
                fbloggerMetadata: j,
                guard: a.guard,
                guardList: a.guardList,
                line: e ? v(d) : u(a) || v(d),
                message: a.message,
                messageWithParams: a.messageWithParams,
                name: a.name,
                reactComponentStack: f,
                script: e ? x(d) : w(a) || x(d),
                serverHash: a.serverHash,
                snapshot: a.snapshot,
                stack: d.map(function(a) {
                    return a.text
                }).join("\n"),
                stackFrames: d,
                type: a.type
            };
            typeof l.message === "string" ? l.messageWithParams = l.messageWithParams || b("erx")(l.message) : (l.messageObject = l.message, l.message = String(l.message) + " (" + typeof l.message + ")");
            l.messageWithParams && (l.message = b("eprintf").apply(void 0, l.messageWithParams));
            typeof window !== "undefined" && window && window.location && (l.windowLocationURL = window.location.href);
            k && k(l);
            for (var m in l) l[m] == null && delete l[m];
            return l
        },
        onerror: function(a, c, d, e, f) {
            f = f || {}, f.message = f.message || a, f.script = f.script || c, f.line = f.line || d, f.column = f.column || e, f.guard = b("ErrorConstants").GLOBAL_ERROR_HANDLER_TAG, f.guardList = [b("ErrorConstants").GLOBAL_ERROR_HANDLER_TAG], B.reportError(f, !0, "FATAL")
        },
        reportError: function(c, d, e) {
            __p && __p();
            d === void 0 && (d = !1);
            e === void 0 && (e = "DEPRECATED");
            if (p) return !1;
            c.reactComponentStack && z(b("ErrorConstants").GLOBAL_REACT_ERROR_HANDLER_TAG);
            n.length > 0 && (c.guard = c.guard || n[0], c.guardList = n.slice());
            c.reactComponentStack && A();
            c = B.normalizeError(c);
            if (!d) {
                d = a.console;
                var f = c._originalError;
                f = f != null ? "" + f.message : "";
                if ((!d[c.type] || c.type === "error") && !q) {
                    f = f.length > 80 ? f.slice(0, 77) + "..." : f;
                    d.error('ErrorUtils caught an error: "' + f + "\". Subsequent errors won't be logged; see https://fburl.com/debugjs.");
                    q = !0
                }
            }
            l.length > m && l.splice(m / 2, 1);
            l.push({
                error: c,
                loggingType: e
            });
            p = !0;
            for (var d = 0; d < j.length; d++) try {
                j[d](c, e)
            } catch (a) {}
            p = !1;
            return !0
        }
    };
    a.onerror = B.onerror;
    e.exports = a.ErrorUtils = B;
    typeof __t === "function" && __t.setHandler && __t.setHandler(B.reportError)
}), 3);
__d("CallbackDependencyManager", ["ErrorUtils"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = new Map(), this.$2 = new Map(), this.$3 = 1, this.$4 = new Map()
        }
        var c = a.prototype;
        c.$5 = function(a, b) {
            __p && __p();
            var c = 0,
                d = new Set();
            for (var e = 0, f = b.length; e < f; e++) d.add(b[e]);
            for (var b = d.keys(), e = Array.isArray(b), f = 0, b = e ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (e) {
                    if (f >= b.length) break;
                    d = b[f++]
                } else {
                    f = b.next();
                    if (f.done) break;
                    d = f.value
                }
                d = d;
                if (this.$4.get(d)) continue;
                c++;
                var g = this.$1.get(d);
                g === void 0 && (g = new Map(), this.$1.set(d, g));
                g.set(a, (g.get(a) || 0) + 1)
            }
            return c
        };
        c.$6 = function(a) {
            __p && __p();
            a = this.$1.get(a);
            if (!a) return;
            for (var c = a.entries(), d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= c.length) break;
                    f = c[e++]
                } else {
                    e = c.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                var g = f[0];
                f = f[1] - 1;
                a.set(g, f);
                f <= 0 && a["delete"](g);
                f = this.$2.get(g);
                if (f !== void 0) {
                    f.$7--;
                    if (f.$7 <= 0) {
                        f = f.$8;
                        this.$2["delete"](g);
                        b("ErrorUtils").applyWithGuard(f)
                    }
                }
            }
        };
        c.addDependenciesToExistingCallback = function(a, b) {
            var c = this.$2.get(a);
            if (!c) return null;
            b = this.$5(a, b);
            c.$7 += b;
            return a
        };
        c.isPersistentDependencySatisfied = function(a) {
            return !!this.$4.get(a)
        };
        c.satisfyPersistentDependency = function(a) {
            this.$4.set(a, 1), this.$6(a)
        };
        c.satisfyNonPersistentDependency = function(a) {
            var b = this.$4.get(a) === 1;
            b || this.$4.set(a, 1);
            this.$6(a);
            b || this.$4["delete"](a)
        };
        c.registerCallback = function(a, c) {
            var d = this.$3;
            this.$3++;
            c = this.$5(d, c);
            if (c === 0) {
                b("ErrorUtils").applyWithGuard(a);
                return null
            }
            this.$2.set(d, {
                $8: a,
                $7: c
            });
            return d
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventSubscription", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        this.remove = function() {
            this.subscriber && (this.subscriber.removeSubscription(this), this.subscriber = null)
        }, this.subscriber = a
    };
    e.exports = a
}), null);
__d("EmitterSubscription", ["EventSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d) {
            b = a.call(this, b) || this;
            b.listener = c;
            b.context = d;
            return b
        }
        return b
    }(b("EventSubscription"));
    e.exports = a
}), null);
__d("EventSubscriptionVendor", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var b = a.prototype;
        b.addSubscription = function(a, b) {
            b.subscriber === this || g(0, 2828);
            this.$1[a] || (this.$1[a] = []);
            var c = this.$1[a].length;
            this.$1[a].push(b);
            b.eventType = a;
            b.key = c;
            return b
        };
        b.removeAllSubscriptions = function(a) {
            a === void 0 ? this.$1 = {} : delete this.$1[a]
        };
        b.removeSubscription = function(a) {
            var b = a.eventType;
            a = a.key;
            b = this.$1[b];
            b && delete b[a]
        };
        b.getSubscriptionsForType = function(a) {
            return this.$1[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("requireCond", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        throw new Error("Cannot use raw untransformed requireCond.")
    }
    e.exports = a
}), null);
__d("FBLogger", ["requireCond", "cr:794450"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:794450")
}), null);
__d("emptyFunction", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        return function() {
            return a
        }
    }
    b = function() {};
    b.thatReturns = a;
    b.thatReturnsFalse = a(!1);
    b.thatReturnsTrue = a(!0);
    b.thatReturnsNull = a(null);
    b.thatReturnsThis = function() {
        return this
    };
    b.thatReturnsArgument = function(a) {
        return a
    };
    e.exports = b
}), null);
__d("unrecoverableViolation", ["FBLogger", "TAAL"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        b("FBLogger")(c).blameToPreviousFrame().mustfix(a);
        return new Error(b("TAAL").blameToPreviousFrame(a))
    }
    e.exports = a
}), null);
__d("BaseEventEmitter", ["EmitterSubscription", "EventSubscriptionVendor", "FBLogger", "emptyFunction", "requireCond", "unrecoverableViolation", "cr:882315", "cr:838175"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$2 = new(b("EventSubscriptionVendor"))(), this.$1 = null
        }
        var c = a.prototype;
        c.addListener = function(a, c, d) {
            return this.$2.addSubscription(a, new(b("EmitterSubscription"))(this.$2, c, d))
        };
        c.once = function(a, b, c) {
            var d = this;
            return this.addListener(a, function() {
                d.removeCurrentListener(), b.apply(c, arguments)
            })
        };
        c.removeAllListeners = function(a) {
            this.$2.removeAllSubscriptions(a)
        };
        c.removeCurrentListener = function() {
            if (!this.$1) throw b("unrecoverableViolation")("Not in an emitting cycle; there is no current subscription", "emitter");
            this.$2.removeSubscription(this.$1)
        };
        c.listeners = function(a) {
            a = this.$2.getSubscriptionsForType(a);
            return a ? a.filter(b("emptyFunction").thatReturnsTrue).map(function(a) {
                return a.listener
            }) : []
        };
        c.emit = function(a) {
            __p && __p();
            var b = this.$2.getSubscriptionsForType(a);
            if (b) {
                var c = Object.keys(b),
                    d;
                for (var e = 0; e < c.length; e++) {
                    var f = c[e],
                        g = b[f];
                    if (g) {
                        this.$1 = g;
                        if (d == null) {
                            d = [g, a];
                            for (var h = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; h < i; h++) d[h + 2] = h + 1 < 1 || arguments.length <= h + 1 ? void 0 : arguments[h + 1]
                        } else d[0] = g;
                        this.__emitToSubscription.apply(this, d)
                    }
                }
                this.$1 = null
            }
        };
        c.__emitToSubscription = function(a, c) {
            for (var d = arguments.length, e = new Array(d > 2 ? d - 2 : 0), f = 2; f < d; f++) e[f - 2] = arguments[f];
            b("cr:838175") != null ? b("cr:838175").applyWithGuard(a.listener, a.context, e, null, "EventEmitter " + c + " event") : b("cr:882315") != null ? b("cr:882315").applyWithGuard(a.listener, a.context, e, {
                name: "EventEmitter " + c + " event"
            }) : (b("FBLogger")("emitter").mustfix("Either CometErrorGuard or ErrorUtils must be non-null"), Function.prototype.apply.call(a.listener, a.context, e || []))
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventEmitter", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    a = function(a) {
        "use strict";
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        return b
    }(b("BaseEventEmitter"));
    e.exports = a
}), null);
__d("EventEmitterWithHolding", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a, b) {
            this.$2 = a, this.$3 = b, this.$1 = null, this.$5 = [], this.$4 = 0
        }
        var b = a.prototype;
        b.addListener = function(a, b, c) {
            return this.$2.addListener(a, b, c)
        };
        b.once = function(a, b, c) {
            return this.$2.once(a, b, c)
        };
        b.addRetroactiveListener = function(a, b, c) {
            var d = this.$2.addListener(a, b, c),
                e = this.$5;
            e.push(!1);
            this.$4++;
            this.$3.emitToListener(a, b, c);
            this.$4--;
            e[e.length - 1] && d.remove();
            e.pop();
            return d
        };
        b.removeAllListeners = function(a) {
            this.$2.removeAllListeners(a)
        };
        b.removeCurrentListener = function() {
            if (this.$4) {
                var a = this.$5;
                a[a.length - 1] = !0
            } else this.$2.removeCurrentListener()
        };
        b.listeners = function(a) {
            return this.$2.listeners(a)
        };
        b.emit = function(a) {
            var b;
            for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
            (b = this.$2).emit.apply(b, [a].concat(d))
        };
        b.emitAndHold = function(a) {
            var b, c;
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            this.$1 = (b = this.$3).holdEvent.apply(b, [a].concat(e));
            (c = this.$2).emit.apply(c, [a].concat(e));
            this.$1 = null
        };
        b.releaseCurrentEvent = function() {
            this.$1 != null ? this.$3.releaseEvent(this.$1) : this.$4 > 0 && this.$3.releaseCurrentEvent()
        };
        b.releaseHeldEventType = function(a) {
            this.$3.releaseEventType(a)
        };
        return a
    }();
    e.exports = a
}), null);
__d("EventHolder", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}, this.$2 = []
        }
        var b = a.prototype;
        b.holdEvent = function(a) {
            this.$1[a] = this.$1[a] || [];
            var b = this.$1[a],
                c = {
                    eventType: a,
                    index: b.length
                };
            for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
            b.push(e);
            return c
        };
        b.emitToListener = function(a, b, c) {
            var d = this,
                e = this.$1[a];
            if (!e) return;
            e.forEach(function(e, f) {
                if (!e) return;
                d.$2.push({
                    eventType: a,
                    index: f
                });
                b.apply(c, e);
                d.$2.pop()
            })
        };
        b.releaseCurrentEvent = function() {
            this.$2.length || g(0, 1764), this.releaseEvent(this.$2[this.$2.length - 1])
        };
        b.releaseEvent = function(a) {
            delete this.$1[a.eventType][a.index]
        };
        b.releaseEventType = function(a) {
            this.$1[a] = []
        };
        return a
    }();
    e.exports = a
}), null);
__d("Arbiter", ["invariant", "ArbiterToken", "CallbackDependencyManager", "ErrorUtils", "EventEmitter", "EventEmitterWithHolding", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function h(a) {
        return Array.isArray(a) ? a : [a]
    }

    function i(a) {
        return a instanceof j || a === j ? a : j
    }
    var j = function() {
            __p && __p();

            function a() {
                var a = new(b("EventEmitter"))();
                this.$3 = new k();
                this.$2 = new(b("EventEmitterWithHolding"))(a, this.$3);
                this.$1 = new(b("CallbackDependencyManager"))();
                this.$4 = []
            }
            var c = a.prototype;
            c.subscribe = function(a, c, d) {
                __p && __p();
                a = h(a);
                a.forEach(function(a) {
                    a && typeof a === "string" || g(0, 1966, a)
                });
                typeof c === "function" || g(0, 1967, c);
                d = d || "all";
                d === "new" || d === "all" || g(0, 1968, d);
                a = a.map(function(a) {
                    var b = this.$5.bind(this, c, a);
                    b.__SMmeta = c.__SMmeta;
                    if (d === "new") return this.$2.addListener(a, b);
                    this.$4.push({});
                    a = this.$2.addRetroactiveListener(a, b);
                    this.$4.pop();
                    return a
                }, this);
                return new(b("ArbiterToken"))(this, a)
            };
            c.$5 = function(a, c, d) {
                var e = this.$4[this.$4.length - 1];
                if (e[c] === !1) return;
                a = b("ErrorUtils").applyWithGuard(a, null, [c, d]);
                a === !1 && this.$2.releaseCurrentEvent();
                e[c] = a
            };
            c.unsubscribeCurrentSubscription = function() {
                this.$2.removeCurrentListener()
            };
            c.releaseCurrentPersistentEvent = function() {
                this.$2.releaseCurrentEvent()
            };
            c.subscribeOnce = function(a, b, c) {
                var d = this;
                a = this.subscribe(a, function(a, c) {
                    d.unsubscribeCurrentSubscription();
                    return b(a, c)
                }, c);
                return a
            };
            c.unsubscribe = function(a) {
                a.isForArbiterInstance(this) || g(0, 1969), a.unsubscribe()
            };
            c.inform = function(a, b, c) {
                __p && __p();
                var d = Array.isArray(a);
                a = h(a);
                c = c || "event";
                var e = c === "state" || c === "persistent";
                this.$4.push({});
                for (var f = 0; f < a.length; f++) {
                    var i = a[f];
                    i || g(0, 1970, i);
                    this.$3.setHoldingBehavior(i, c);
                    this.$2.emitAndHold(i, b);
                    this.$6(i, b, e)
                }
                i = this.$4.pop();
                return d ? i : i[a[0]]
            };
            c.query = function(a) {
                var b = this.$3.getHoldingBehavior(a);
                !b || b === "state" || g(0, 1971, a);
                b = null;
                this.$3.emitToListener(a, function(a) {
                    b = a
                });
                return b
            };
            c.registerCallback = function(a, b) {
                if (typeof a === "function") return this.$1.registerCallback(a, b);
                else return this.$1.addDependenciesToExistingCallback(a, b)
            };
            c.$6 = function(a, b, c) {
                if (b === null) return;
                c ? this.$1.satisfyPersistentDependency(a) : this.$1.satisfyNonPersistentDependency(a)
            };
            a.subscribe = function(b, c, d) {
                return a.prototype.subscribe.apply(i(this), arguments)
            };
            a.unsubscribeCurrentSubscription = function() {
                return a.prototype.unsubscribeCurrentSubscription.apply(i(this))
            };
            a.releaseCurrentPersistentEvent = function() {
                return a.prototype.releaseCurrentPersistentEvent.apply(i(this))
            };
            a.subscribeOnce = function(b, c, d) {
                return a.prototype.subscribeOnce.apply(i(this), arguments)
            };
            a.unsubscribe = function(b) {
                return a.prototype.unsubscribe.apply(i(this), arguments)
            };
            a.inform = function(b, c, d) {
                return a.prototype.inform.apply(i(this), arguments)
            };
            a.informSingle = function(b, c, d) {
                return a.prototype.inform.apply(i(this), arguments)
            };
            a.query = function(b) {
                return a.prototype.query.apply(i(this), arguments)
            };
            a.registerCallback = function(b, c) {
                return a.prototype.registerCallback.apply(i(this), arguments)
            };
            a.$6 = function(b, c, d) {
                return a.prototype.$6.apply(i(this), arguments)
            };
            a.$5 = function(b, c, d) {
                return a.prototype.$5.apply(i(this), arguments)
            };
            return a
        }(),
        k = function(b) {
            __p && __p();
            babelHelpers.inheritsLoose(a, b);

            function a() {
                var a;
                a = b.call(this) || this;
                a.$ArbiterEventHolder1 = {};
                return a
            }
            var c = a.prototype;
            c.setHoldingBehavior = function(a, b) {
                this.$ArbiterEventHolder1[a] = b
            };
            c.getHoldingBehavior = function(a) {
                return this.$ArbiterEventHolder1[a]
            };
            c.holdEvent = function(a) {
                var c = this.$ArbiterEventHolder1[a];
                c !== "persistent" && this.$ArbiterEventHolder2(a);
                if (c !== "event") {
                    var d;
                    for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
                    return (d = b.prototype.holdEvent).call.apply(d, [this, a].concat(f))
                }
                return void 0
            };
            c.$ArbiterEventHolder2 = function(a) {
                this.emitToListener(a, this.releaseCurrentEvent, this)
            };
            c.releaseEvent = function(a) {
                a && b.prototype.releaseEvent.call(this, a)
            };
            return a
        }(b("EventHolder"));
    j.call(j);
    e.exports = j
}), null);
__d("CSRFGuard", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "for (;;);";
    var g = /^for ?\(;;\);/;
    b = {
        length: a.length,
        regex: g,
        exists: function(a) {
            return !!a.match(g)
        },
        clean: function(a) {
            var b = a.match(g);
            return b ? a.substr(b[0].length) : b
        }
    };
    e.exports = b
}), null);
__d("CircularBuffer", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            a > 0 || g(0, 2222), this.$1 = a, this.$2 = 0, this.$3 = [], this.$4 = []
        }
        var b = a.prototype;
        b.write = function(a) {
            var b = this;
            this.$3.length < this.$1 ? this.$3.push(a) : (this.$4.forEach(function(a) {
                return a(b.$3[b.$2])
            }), this.$3[this.$2] = a, this.$2++, this.$2 %= this.$1);
            return this
        };
        b.onEvict = function(a) {
            this.$4.push(a);
            return this
        };
        b.read = function() {
            return this.$3.slice(this.$2).concat(this.$3.slice(0, this.$2))
        };
        b.expand = function(a) {
            if (a > this.$1) {
                var b = this.read();
                this.$2 = 0;
                this.$3 = b;
                this.$1 = a
            }
            return this
        };
        b.dropFirst = function(a) {
            if (a <= this.$1) {
                var b = this.read();
                this.$2 = 0;
                b.splice(0, a);
                this.$3 = b
            }
            return this
        };
        b.clear = function() {
            this.$2 = 0;
            this.$3 = [];
            return this
        };
        b.currentSize = function() {
            return this.$3.length
        };
        return a
    }();
    e.exports = a
}), null);
__d("ResourceTypes", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        JS: "js",
        CSS: "css",
        XHR: "xhr"
    };
    e.exports = a
}), null);
__d("TimingAnnotations", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {}
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            return this
        };
        b.addSetAnnotation = function(a, b) {
            return this
        };
        b.addSetElement = function(a, b) {
            return this
        };
        b.registerOnBeforeSend = function(a) {
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            return this
        };
        b.addVectorElement = function(a, b) {
            return this
        };
        return a
    }();
    b = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = []
        }
        var b = a.prototype;
        b.addStringAnnotation = function(a, b) {
            this.$2 = this.$2 || new Map();
            this.$2.set(a, b);
            return this
        };
        b.addSetAnnotation = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            b.forEach(function(a) {
                return d.add(a)
            });
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addSetElement = function(a, b) {
            var c = this.$1 || new Map(),
                d = c.get(a) || new Set();
            d.add(b);
            c.set(a, d);
            this.$1 = c;
            return this
        };
        b.addVectorAnnotation = function(a, b) {
            this.$3 = this.$3 || new Map();
            this.$3.set(a, b);
            return this
        };
        b.addVectorElement = function(a, b) {
            var c = this.$3 = this.$3 || new Map(),
                d = this.$3.get(a) || [];
            d.push(b);
            c.set(a, d);
            return this
        };
        b.registerOnBeforeSend = function(a) {
            this.$4.push(a);
            return this
        };
        b.prepareToSend = function() {
            __p && __p();
            var a = this;
            this.$4.forEach(function(b) {
                return b(a)
            });
            this.$4 = [];
            var b = {};
            if (this.$1 != null)
                for (var c = this.$1, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var g = f[0];
                    f = f[1];
                    b[g] = Array.from(f.values())
                }
            g = {};
            if (this.$2 != null)
                for (var f = this.$2, e = Array.isArray(f), d = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (e) {
                        if (d >= f.length) break;
                        c = f[d++]
                    } else {
                        d = f.next();
                        if (d.done) break;
                        c = d.value
                    }
                    c = c;
                    var h = c[0];
                    c = c[1];
                    g[h] = c
                }
            h = {};
            if (this.$3 != null)
                for (var c = this.$3, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    var i = f[0];
                    f = f[1];
                    h[i] = f
                }
            return {
                setProps: b,
                stringProps: g,
                vectorProps: h
            }
        };
        a.combine = function(a, b) {
            var c;
            a != null && b != null ? (a.stringProps = babelHelpers["extends"]({}, b.stringProps, a.stringProps), a.setProps = babelHelpers["extends"]({}, b.setProps, a.setProps), c = a) : a != null ? c = a : b != null && (c = b);
            return c
        };
        return a
    }();
    b.EmptyTimingAnnotations = a;
    b.EmptyTraceTimingAnnotations = a;
    b.TraceTimingAnnotations = b;
    e.exports = b
}), null);
__d("flattenPHPQueryData", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        return h(a, "", {})
    }

    function h(a, b, c) {
        if (a === null || a === void 0) c[b] = void 0;
        else if (typeof a === "object") {
            typeof a.appendChild !== "function" || g(0, 2616);
            for (var d in a) d !== "$$typeof" && Object.prototype.hasOwnProperty.call(a, d) && a[d] !== void 0 && h(a[d], b ? b + "[" + d + "]" : d, c)
        } else c[b] = a;
        return c
    }
    e.exports = a
}), null);
__d("PHPQuerySerializer", ["invariant", "flattenPHPQueryData"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = h(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + h(String(a[d])))
            }
        return c.join("&")
    }

    function h(a) {
        return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
    }
    var i = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;

    function j(a) {
        return a === "hasOwnProperty" || a === "__proto__" ? "\ud83d\udf56" : a
    }

    function c(a) {
        __p && __p();
        if (!a) return {};
        var b = {};
        a = a.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        a = a.split("&");
        var c = Object.prototype.hasOwnProperty;
        for (var d = 0, e = a.length; d < e; d++) {
            var f = a[d].match(i);
            if (!f) {
                var g = a[d].split("=");
                b[k(g[0])] = g[1] === void 0 ? null : k(g[1])
            } else {
                g = f[2].split(/\]\[|\[|\]/).slice(0, -1);
                var h = f[1];
                f = k(f[3] || "");
                g[0] = h;
                h = b;
                for (var l = 0; l < g.length - 1; l++) {
                    var m = j(g[l]);
                    if (m) {
                        if (!c.call(h, m)) {
                            var n = g[l + 1] && !g[l + 1].match(/^\d{1,3}$/) ? {} : [];
                            h[m] = n;
                            if (h[m] !== n) return b
                        }
                        h = h[m]
                    } else g[l + 1] && !g[l + 1].match(/^\d{1,3}$/) ? h.push({}) : h.push([]), h = h[h.length - 1]
                }
                h instanceof Array && g[g.length - 1] === "" ? h.push(f) : h[j(g[g.length - 1])] = f
            }
        }
        return b
    }

    function k(a) {
        try {
            return decodeURIComponent(a.replace(/\+/g, " "))
        } catch (b) {
            return a
        }
    }
    d = {
        serialize: a,
        encodeComponent: h,
        deserialize: c,
        decodeComponent: k
    };
    e.exports = d
}), null);
__d("PHPQuerySerializerNoEncoding", ["PHPQuerySerializer", "flattenPHPQueryData"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        var c = [];
        a = b("flattenPHPQueryData")(a);
        for (var d in a)
            if (Object.prototype.hasOwnProperty.call(a, d)) {
                var e = g(d);
                a[d] === void 0 ? c.push(e) : c.push(e + "=" + g(String(a[d])))
            }
        return c.join("&")
    }

    function g(a) {
        return a
    }
    c = {
        serialize: a,
        encodeComponent: g,
        deserialize: b("PHPQuerySerializer").deserialize,
        decodeComponent: b("PHPQuerySerializer").decodeComponent
    };
    e.exports = c
}), null);
__d("ReloadPage", [], (function(a, b, c, d, e, f) {
    b = {
        now: function(b) {
            a.window.location.reload(b)
        },
        delay: function(b) {
            a.setTimeout(this.now.bind(this), b)
        }
    };
    e.exports = b
}), null);
__d("URIRFC3986", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = new RegExp("^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?");
    a = {
        parse: function(a) {
            __p && __p();
            if (a.trim() === "") return null;
            a = a.match(g);
            if (a == null) return null;
            var b = {};
            b.uri = a[0] ? a[0] : null;
            b.scheme = a[1] ? a[1].substr(0, a[1].length - 1) : null;
            b.authority = a[2] ? a[2].substr(2) : null;
            b.userinfo = a[3] ? a[3].substr(0, a[3].length - 1) : null;
            b.host = a[2] ? a[4] : null;
            b.port = a[5] ? a[5].substr(1) ? parseInt(a[5].substr(1), 10) : null : null;
            b.path = a[6] ? a[6] : null;
            b.query = a[7] ? a[7].substr(1) : null;
            b.fragment = a[8] ? a[8].substr(1) : null;
            b.isGenericURI = b.authority === null && !!b.scheme;
            return b
        }
    };
    e.exports = a
}), null);
__d("createObjectFrom", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        if (b === void 0) return g(a, !0);
        var c = {};
        if (Array.isArray(b))
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b[d];
        else
            for (var d = a.length - 1; d >= 0; d--) c[a[d]] = b;
        return c
    }
    e.exports = g
}), null);
__d("URISchemes", ["createObjectFrom"], (function(a, b, c, d, e, f) {
    var g = b("createObjectFrom")(["blob", "cmms", "fb", "fba", "fbatwork", "fb-ama", "fb-workchat", "fb-workchat-secure", "fb-messenger", "fb-messenger-public", "fb-messenger-group-thread", "fb-page-messages", "fb-pma", "fbcf", "fbconnect", "fbinternal", "fbmobilehome", "fbrpc", "file", "ftp", "http", "https", "mailto", "wss", "ms-app", "intent", "itms", "itms-apps", "itms-services", "market", "svn+ssh", "fbstaging", "tel", "sms", "pebblejs", "sftp", "whatsapp", "moments", "flash", "fblite", "chrome-extension", "webcal", "fb124024574287414", "fb124024574287414rc", "fb124024574287414master", "fb1576585912599779", "fb929757330408142", "designpack", "fbpixelcloud", "fbapi20130214", "fb1196383223757595", "oculus", "oculus.store", "skype", "callto", "workchat", "fb236786383180508", "fb1775440806014337", "data", "fb-mk", "munki", "kirigami"]);
    a = {
        isAllowed: function(a) {
            return !a ? !0 : Object.prototype.hasOwnProperty.call(g, a.toLowerCase())
        }
    };
    e.exports = a
}), null);
__d("setHostSubdomain", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        a = a.split(".");
        a.length < 3 ? a.unshift(b) : a[0] = b;
        return a.join(".")
    }
    e.exports = a
}), null);
__d("URIBase", ["invariant", "URIRFC3986", "URISchemes", "ex", "setHostSubdomain"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        i = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)");

    function j(a, c, d, e) {
        __p && __p();
        if (!c) return !0;
        if (c instanceof l) {
            a.setProtocol(c.getProtocol());
            a.setDomain(c.getDomain());
            a.setPort(c.getPort());
            a.setPath(c.getPath());
            a.setQueryData(e.deserialize(e.serialize(c.getQueryData())));
            a.setFragment(c.getFragment());
            a.setIsGeneric(c.getIsGeneric());
            a.setForceFragmentSeparator(c.getForceFragmentSeparator());
            return !0
        }
        c = c.toString().trim();
        var f = b("URIRFC3986").parse(c) || {
            fragment: null,
            scheme: null
        };
        if (!d && !b("URISchemes").isAllowed(f.scheme)) return !1;
        a.setProtocol(f.scheme || "");
        if (!d && h.test(f.host || "")) return !1;
        a.setDomain(f.host || "");
        a.setPort(f.port || "");
        a.setPath(f.path || "");
        if (d) a.setQueryData(e.deserialize(f.query || "") || {});
        else try {
            a.setQueryData(e.deserialize(f.query || "") || {})
        } catch (a) {
            return !1
        }
        a.setFragment(f.fragment || "");
        f.fragment === "" && a.setForceFragmentSeparator(!0);
        a.setIsGeneric(f.isGenericURI || !1);
        if (f.userinfo !== null)
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (userinfo is not allowed in a URI): %s", a.toString()));
            else return !1;
        if (!a.getDomain() && a.getPath().indexOf("\\") !== -1)
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (no domain but multiple back-slashes): %s", a.toString()));
            else return !1;
        if (!a.getProtocol() && i.test(c))
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (unsafe protocol-relative URLs): %s", a.toString()));
            else return !1;
        if (a.getDomain() && a.getPath() && !a.getPath().startsWith("/"))
            if (d) throw new Error(b("ex")("URI.parse: invalid URI (domain and path where path lacks leading slash): %s", a.toString()));
            else return !1;
        return !0
    }
    var k = [],
        l = function() {
            "use strict";
            __p && __p();
            a.tryParse = function(b, c) {
                var d = new a(null, c);
                return j(d, b, !1, c) ? d : null
            };
            a.isValid = function(b, c) {
                return !!a.tryParse(b, c)
            };

            function a(a, b) {
                b || g(0, 2966), this.$9 = b, this.$7 = "", this.$1 = "", this.$6 = "", this.$5 = "", this.$3 = "", this.$4 = !1, this.$8 = {}, this.$2 = !1, j(this, a, !0, b)
            }
            var c = a.prototype;
            c.setProtocol = function(a) {
                b("URISchemes").isAllowed(a) || g(0, 587, a);
                this.$7 = a;
                return this
            };
            c.getProtocol = function() {
                return (this.$7 || "").toLowerCase()
            };
            c.setSecure = function(a) {
                return this.setProtocol(a ? "https" : "http")
            };
            c.isSecure = function() {
                return this.getProtocol() === "https"
            };
            c.setDomain = function(a) {
                if (h.test(a)) throw new Error(b("ex")("URI.setDomain: unsafe domain specified: %s for url %s", a, this.toString()));
                this.$1 = a;
                return this
            };
            c.getDomain = function() {
                return this.$1
            };
            c.setPort = function(a) {
                this.$6 = a;
                return this
            };
            c.getPort = function() {
                return this.$6
            };
            c.setPath = function(a) {
                this.$5 = a;
                return this
            };
            c.getPath = function() {
                return this.$5
            };
            c.addQueryData = function(a, b) {
                Object.prototype.toString.call(a) === "[object Object]" ? Object.assign(this.$8, a) : this.$8[a] = b;
                return this
            };
            c.setQueryData = function(a) {
                this.$8 = a;
                return this
            };
            c.getQueryData = function() {
                return this.$8
            };
            c.setQueryString = function(a) {
                return this.setQueryData(this.$9.deserialize(a))
            };
            c.getQueryString = function() {
                return this.$9.serialize(this.getQueryData())
            };
            c.removeQueryData = function(a) {
                Array.isArray(a) || (a = [a]);
                for (var b = 0, c = a.length; b < c; ++b) delete this.$8[a[b]];
                return this
            };
            c.setFragment = function(a) {
                this.$3 = a;
                this.setForceFragmentSeparator(!1);
                return this
            };
            c.getFragment = function() {
                return this.$3
            };
            c.setForceFragmentSeparator = function(a) {
                this.$2 = a;
                return this
            };
            c.getForceFragmentSeparator = function() {
                return this.$2
            };
            c.setIsGeneric = function(a) {
                this.$4 = a;
                return this
            };
            c.getIsGeneric = function() {
                return this.$4
            };
            c.isEmpty = function() {
                return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || Object.keys(this.getQueryData()).length > 0 || this.getFragment())
            };
            c.toString = function() {
                var a = this;
                for (var b = 0; b < k.length; b++) a = k[b](a);
                return a.$10()
            };
            c.$10 = function() {
                __p && __p();
                var a = "",
                    b = this.getProtocol();
                b && (a += b + ":" + (this.getIsGeneric() ? "" : "//"));
                b = this.getDomain();
                b && (a += b);
                b = this.getPort();
                b && (a += ":" + b);
                b = this.getPath();
                b ? a += b : a && (a += "/");
                b = this.getQueryString();
                b && (a += "?" + b);
                b = this.getFragment();
                b ? a += "#" + b : this.getForceFragmentSeparator() && (a += "#");
                return a
            };
            a.registerFilter = function(a) {
                k.push(a)
            };
            c.getOrigin = function() {
                var a = this.getPort();
                return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
            };
            c.getQualifiedURIBase = function() {
                return new a(this, this.$9).qualify()
            };
            c.qualify = function() {
                if (!this.getDomain()) {
                    var b = new a(window.location.href, this.$9);
                    this.setProtocol(b.getProtocol()).setDomain(b.getDomain()).setPort(b.getPort())
                }
                return this
            };
            c.setSubdomain = function(a) {
                var c = this.qualify().getDomain();
                return this.setDomain(b("setHostSubdomain")(c, a))
            };
            c.getSubdomain = function() {
                if (!this.getDomain()) return "";
                var a = this.getDomain().split(".");
                if (a.length <= 2) return "";
                else return a[0]
            };
            c.isSubdomainOfDomain = function(b) {
                var c = this.getDomain();
                return a.isDomainSubdomainOfDomain(c, b, this.$9)
            };
            a.isDomainSubdomainOfDomain = function(b, c, d) {
                __p && __p();
                if (c === "" || b === "") return !1;
                if (b.endsWith(c)) {
                    var e = b.length,
                        f = c.length,
                        g = e - f - 1;
                    if (e === f || b[g] === ".") {
                        e = new a(null, d);
                        e.setDomain(c);
                        return a.isValid(e, d)
                    }
                }
                return !1
            };
            return a
        }();
    e.exports = l
}), null);
__d("areSameOrigin", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        if (a.isEmpty() || b.isEmpty()) return !1;
        if (a.getProtocol() && a.getProtocol() != b.getProtocol()) return !1;
        if (a.getDomain() && a.getDomain() != b.getDomain()) return !1;
        return a.getPort() && a.getPort().toString() !== b.getPort().toString() ? !1 : !0
    }
    e.exports = a
}), null);
__d("ifRequired", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        var e;
        d && d.call(null, [a], function(a) {
            e = a
        });
        if (e && b) return b(e);
        else if (!e && c) return c()
    }
    e.exports = a
}), null);
__d("isFacebookURI", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = ["http", "https"];

    function a(a) {
        g || (g = new RegExp("(^|\\.)facebook\\.com$", "i"));
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !0 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    a.setRegex = function(a) {
        g = a
    };
    e.exports = a
}), null);
__d("isUriNeedRawQuerySVURI", ["PHPQuerySerializer", "URIBase", "UriNeedRawQuerySVConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = ["http", "https"];

    function a(a) {
        __p && __p();
        if (a == null) return !1;
        a = a instanceof b("URIBase") ? a : b("URIBase").tryParse(a, b("PHPQuerySerializer"));
        if (a == null) return !1;
        if (!g.includes(a.getProtocol())) return !1;
        var c = a.getDomain();
        return b("UriNeedRawQuerySVConfig").uris.some(function(a) {
            return b("URIBase").isDomainSubdomainOfDomain(c, a, b("PHPQuerySerializer"))
        })
    }
    e.exports = a
}), null);
__d("memoize", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        var b = a,
            c;
        return function() {
            arguments.length && g(0, 4494);
            b && (c = b(), b = null);
            return c
        }
    }
    e.exports = a
}), null);
__d("unqualifyURI", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a.setProtocol(null).setDomain(null).setPort(null)
    }
    e.exports = a
}), null);
__d("URI", ["PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "ReloadPage", "URIBase", "areSameOrigin", "ifRequired", "isFacebookURI", "isUriNeedRawQuerySVURI", "memoize", "unqualifyURI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("memoize")(function() {
        return new i(window.location.href)
    });

    function h() {
        return b("ifRequired")("PageTransitions", function(a) {
            if (a.isInitialized()) return a
        })
    }
    var i = function(d) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, d);

        function c(a) {
            var c;
            b("isUriNeedRawQuerySVURI")(a) ? c = d.call(this, a, b("PHPQuerySerializerNoEncoding")) || this : c = d.call(this, a || "", b("PHPQuerySerializer")) || this;
            return babelHelpers.assertThisInitialized(c)
        }
        var e = c.prototype;
        e.setPath = function(a) {
            this.path = a;
            return d.prototype.setPath.call(this, a)
        };
        e.getPath = function() {
            var a = d.prototype.getPath.call(this);
            return a ? a.replace(/^\/+/, "/") : a
        };
        e.setProtocol = function(a) {
            this.protocol = a;
            return d.prototype.setProtocol.call(this, a)
        };
        e.setDomain = function(a) {
            this.domain = a;
            return d.prototype.setDomain.call(this, a)
        };
        e.setPort = function(a) {
            this.port = a;
            return d.prototype.setPort.call(this, a)
        };
        e.setFragment = function(a) {
            this.fragment = a;
            return d.prototype.setFragment.call(this, a)
        };
        e.stripTrailingSlash = function() {
            this.setPath(this.getPath().replace(/\/$/, ""));
            return this
        };
        e.addTrailingSlash = function() {
            var a = this.getPath();
            a.length > 0 && a[a.length - 1] !== "/" && this.setPath(a + "/");
            return this
        };
        e.valueOf = function() {
            return this.toString()
        };
        e.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!b("isFacebookURI")(this)) return null;
            var a = this.getDomain().split("."),
                c = a.indexOf("facebook");
            c === -1 && (c = a.indexOf("workplace"));
            return a.slice(c).join(".")
        };
        e.getUnqualifiedURI = function() {
            var a = new c(this);
            b("unqualifyURI")(a);
            return a
        };
        e.getQualifiedURI = function() {
            return new c(this).qualify()
        };
        e.isSameOrigin = function(a) {
            a = a;
            !a ? a = g() : a instanceof c || (a = new c(a.toString()));
            return b("areSameOrigin")(this, a)
        };
        c.go = function(a, b, d) {
            c.goURIOnWindow(a, window, b, d)
        };
        c.goURIOnNewWindow = function(a) {
            c.goURIOnWindow(a, window.open("", "_blank"), !0)
        };
        c.goURIOnWindow = function(d, e, f, g) {
            d = new c(d);
            var h = d.toString();
            d = e ? e : window;
            b("ifRequired")("PageNavigationStageLogger", function(b) {
                f ? b.setNote("force") : a.PageTransitions || b.setNote("no_pagetrans"), b.setCookieForNavigation(h)
            });
            !f && a.PageTransitions ? a.PageTransitions.go(h, g) : window.location.href === h ? b("ReloadPage").now() : g ? d.location.replace(h) : d.location.href = h
        };
        e.go = function(a, b) {
            c.go(this, a, b)
        };
        c.tryParseURI = function(a) {
            a = b("URIBase").tryParse(a, b("PHPQuerySerializer"));
            return a ? new c(a) : null
        };
        c.isValidURI = function(a) {
            return b("URIBase").isValid(a, b("PHPQuerySerializer"))
        };
        c.getRequestURI = function(a, b) {
            a = a === void 0 || a;
            if (a) {
                a = h();
                if (a) return a.getCurrentURI(!!b).getQualifiedURI()
            }
            return new c(window.location.href)
        };
        c.getMostRecentURI = function() {
            var a = h();
            return a ? a.getMostRecentURI().getQualifiedURI() : new c(window.location.href)
        };
        c.getNextURI = function() {
            var a = h();
            return a ? a.getNextURI().getQualifiedURI() : new c(window.location.href)
        };
        c.encodeComponent = function(a) {
            return encodeURIComponent(a).replace(/%5D/g, "]").replace(/%5B/g, "[")
        };
        c.decodeComponent = function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        };
        return c
    }(b("URIBase"));
    Object.assign(i, {
        expression: /(((\w+):\/\/)([^\/:]*)(:(\d+))?)?([^#?]*)(\?([^#]*))?(#(.*))?/,
        arrayQueryExpression: /^(\w+)((?:\[\w*\])+)=?(.*)/
    });
    e.exports = i
}), null);
__d("ExecutionEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = !!(typeof window !== "undefined" && window.document && window.document.createElement);
    b = {
        canUseDOM: a,
        canUseWorkers: typeof Worker !== "undefined",
        canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
        canUseViewport: a && !!window.screen,
        isInWorker: !a
    };
    e.exports = b
}), null);
__d("performance", ["ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    b("ExecutionEnvironment").canUseDOM && (g = window.performance || window.msPerformance || window.webkitPerformance);
    e.exports = g || {}
}), null);
__d("performanceAbsoluteNow", ["performance"], (function(a, b, c, d, e, f) {
    if (b("performance").now && b("performance").timing && b("performance").timing.navigationStart) {
        var g = b("performance").timing.navigationStart;
        a = function() {
            return b("performance").now() + g
        }
    } else a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("ResourceTimingsStore", ["CircularBuffer", "ResourceTypes", "TimingAnnotations", "URI", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 1e3,
        h = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        i = {},
        j = {};
    Object.keys(b("ResourceTypes")).forEach(function(a) {
        a = b("ResourceTypes")[a];
        var c = new(b("CircularBuffer"))(g),
            d = new Map();
        c.onEvict(function(a) {
            d["delete"](a)
        });
        i[a] = {
            idx: 1,
            entries: c
        };
        j[a] = d
    });

    function k(a, c, d) {
        __p && __p();
        var e;
        switch (a) {
            case "css":
            case "js":
                var f = l.parseMakeHasteURL(c);
                f = f == null ? "unknown_resource" : f[0];
                e = d + "_" + f;
                break;
            case "xhr":
                f = new(b("URI"))(c).getQualifiedURI();
                c = f.getDomain() + f.getPath();
                e = d + "_" + c;
                break;
            default:
                a, e = "never here"
        }
        return e
    }
    var l = {
        getUID: function(a, b) {
            var c = i[a],
                d = k(a, b, c.idx);
            c.entries.write(d);
            j[a].set(d, {
                uri: b,
                uid: d
            });
            c.idx++;
            return d
        },
        updateURI: function(a, b, c) {
            a = j[a].get(b);
            a != null && (a.uri = c)
        },
        getMapFor: function(a) {
            return j[a]
        },
        parseMakeHasteURL: function(a) {
            a = a.match(/\/rsrc\.php\/.*\/([^\?]+)/);
            if (!a) return null;
            a = a[1];
            var b = "",
                c = a.match(/\.(\w+)$/);
            c && (b = c[1]);
            return [a, b]
        },
        measureRequestSent: function(a, c) {
            a = j[a];
            a = a.get(c);
            if (a == null || a.requestSent != null) return;
            else a.requestSent = b("performanceAbsoluteNow")()
        },
        measureResponseReceived: function(a, c) {
            a = j[a];
            a = a.get(c);
            if (a == null || a.requestSent == null || a.responseReceived != null) return;
            else a.responseReceived = b("performanceAbsoluteNow")()
        },
        annotate: function(a, c) {
            __p && __p();
            a = j[a];
            a = a.get(c);
            if (!a) return h;
            else {
                c = a.annotations;
                if (c != null) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    a.annotations = c;
                    return c
                }
            }
        },
        getAnnotationsFor: function(a, b) {
            a = j[a];
            a = a.get(b);
            if (!a) return null;
            else {
                b = a.annotations;
                return b != null ? b.prepareToSend() : null
            }
        }
    };
    e.exports = l
}), null);
__d("TimeSlice", ["requireCond", "cr:717822"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:717822")
}), 3);
__d("TimerStorage", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        ANIMATION_FRAME: "ANIMATION_FRAME",
        IDLE_CALLBACK: "IDLE_CALLBACK",
        IMMEDIATE: "IMMEDIATE",
        INTERVAL: "INTERVAL",
        TIMEOUT: "TIMEOUT"
    };
    var g = {};
    Object.keys(a).forEach(function(a) {
        return g[a] = {}
    });
    b = babelHelpers["extends"]({}, a, {
        set: function(a, b) {
            g[a][b] = !0
        },
        unset: function(a, b) {
            delete g[a][b]
        },
        clearAll: function(a, b) {
            Object.keys(g[a]).forEach(b), g[a] = {}
        },
        getStorages: function() {
            return {}
        }
    });
    e.exports = b
}), null);
__d("clearInterval", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout;

    function c(a) {
        if (a != null) {
            b("TimerStorage").unset(b("TimerStorage").INTERVAL, a);
            var c = b("TimerStorage").TIMEOUT + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        g(a)
    }
    e.exports = c
}), null);
__d("isEmpty", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a) {
        __p && __p();
        if (Array.isArray(a)) return a.length === 0;
        else if (typeof a === "object") {
            if (a) {
                !h(a) || a.size === void 0 || g(0, 1445);
                for (var b in a) return !1
            }
            return !0
        } else return !a
    }

    function h(a) {
        return typeof Symbol === "undefined" ? !1 : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]
    }
    e.exports = a
}), null);
__d("setIntervalAcrossTransitions", ["TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetInterval || a.setInterval;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setInterval");
        for (var f = arguments.length, h = new Array(f > 2 ? f - 2 : 0), i = 2; i < f; i++) h[i - 2] = arguments[i];
        return Function.prototype.apply.call(g, a, [e, d].concat(h))
    }
    e.exports = c
}), null);
__d("CSSLoader", ["CSSLoaderConfig", "ResourceTimingsStore", "TimeSlice", "clearInterval", "ifRequired", "isEmpty", "setIntervalAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 20,
        h = b("CSSLoaderConfig").timeout,
        i = b("CSSLoaderConfig").loadEventSupported,
        j, k = [],
        l, m = {};

    function n(a) {
        if (j) return;
        j = !0;
        var b = document.createElement("link");
        b.onload = function() {
            i = !0, b.parentNode && b.parentNode.removeChild(b)
        };
        b.rel = "stylesheet";
        b.href = "data:text/css;base64,";
        a.appendChild(b)
    }

    function o() {
        __p && __p();
        var a, c = [],
            d = [];
        if (Date.now() >= l) {
            for (a in m) d.push(m[a].signal), c.push(m[a].error);
            m = {}
        } else
            for (a in m) {
                var e = m[a].signal,
                    f = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
                f && parseInt(f.height, 10) > 1 && (c.push(m[a].load), d.push(e), delete m[a])
            }
        for (var f = 0; f < d.length; f++) d[f].parentNode.removeChild(d[f]);
        if (!b("isEmpty")(c)) {
            for (f = 0; f < c.length; f++) c[f]();
            l = Date.now() + h
        }
        return b("isEmpty")(m)
    }

    function p(a, c, d, e) {
        var f = document.createElement("meta");
        f.id = "bootloader_" + a.replace(/[^a-z0-9]/gi, "_");
        c.appendChild(f);
        c = !b("isEmpty")(m);
        l = Date.now() + h;
        m[a] = {
            signal: f,
            load: d,
            error: e
        };
        if (!c) var i = b("setIntervalAcrossTransitions")(function() {
            o() && b("clearInterval")(i)
        }, g)
    }

    function q(a, c, d, e, f, g) {
        __p && __p();
        var h = b("ResourceTimingsStore").getUID("css", c);
        b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(h).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        b("ResourceTimingsStore").annotate("css", h).addStringAnnotation("name", a).addStringAnnotation("source", c).addStringAnnotation("caller", "CSSLoader.loadStyleSheet");
        b("ifRequired")("TimeSliceInteraction", function(b) {
            b.informGlobally("CSSLoader.loadStyleSheet").addStringAnnotation("source", c).addStringAnnotation("name", a)
        });
        b("ResourceTimingsStore").measureRequestSent("css", h);
        var j = function() {
                b("ResourceTimingsStore").measureResponseReceived("css", h), e()
            },
            k = b("TimeSlice").getGuardedContinuation("CSSLoader link.onresponse");
        !g ? p(a, d, j, f) : i !== !0 ? (p(a, d, j, f), i === void 0 && n(d)) : (g.onload = k.bind(void 0, function() {
            g.onload = g.onerror = null, j()
        }), g.onerror = k.bind(void 0, function() {
            g.onload = g.onerror = null, f()
        }))
    }
    a = {
        loadStyleSheet: function(a, b, c, d, e, f) {
            __p && __p();
            var g = document;
            if ("createStyleSheet" in g) {
                var h;
                for (var i = 0; i < k.length; i++)
                    if (k[i].imports.length < 31) {
                        h = i;
                        break
                    }
                if (h === void 0) {
                    try {
                        k.push(g.createStyleSheet())
                    } catch (a) {
                        f();
                        return
                    }
                    h = k.length - 1
                }
                k[h].addImport(b);
                q(a, b, c, e, f, null);
                return
            }
            i = g.createElement("link");
            i.rel = "stylesheet";
            i.type = "text/css";
            i.href = b;
            d && (i.crossOrigin = "anonymous");
            q(a, b, c, e, f, i);
            c.appendChild(i)
        },
        setupEventListeners: function(a, b, c, d, e, f) {
            q(a, b, c, d, e, f)
        }
    };
    e.exports = a
}), null);
__d("BigPipeInstance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = null;
    a = {
        Events: {
            init: "BigPipe/init",
            tti: "tti_bigpipe",
            displayed: "all_pagelets_displayed",
            loaded: "all_pagelets_loaded"
        },
        setCurrentInstance_DO_NOT_USE: function(a) {
            g = a
        },
        getCurrentInstance: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("$-core", ["TAAL", "ex"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        return g(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function c(a) {
        return g(a, typeof a === "string" ? document.getElementById(a) : a)
    }

    function g(a, c) {
        if (!c) throw new Error(b("TAAL").blameToPreviousFile(b("ex")('Tried to get element with id of "%s" but it is not present on the page', a)));
        return c
    }
    a.fromIDOrElement = c;
    e.exports = a
}), null);
__d("$", ["$-core"], (function(a, b, c, d, e, f) {
    e.exports = b("$-core")
}), null);
__d("CSSCore", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, b) {
        var c = a;
        while (c.parentNode) c = c.parentNode;
        if (c instanceof Element) {
            c = c.querySelectorAll(b);
            return Array.prototype.indexOf.call(c, a) !== -1
        }
        return !1
    }
    var i = {
        addClass: function(a, b) {
            /\s/.test(b) && g(0, 440, b);
            b && (a.classList ? a.classList.add(b) : i.hasClass(a, b) || (a.className = a.className + " " + b));
            return a
        },
        removeClass: function(a, b) {
            /\s/.test(b) && g(0, 441, b);
            b && (a.classList ? a.classList.remove(b) : i.hasClass(a, b) && (a.className = a.className.replace(new RegExp("(^|\\s)" + b + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")));
            return a
        },
        conditionClass: function(a, b, c) {
            return (c ? i.addClass : i.removeClass)(a, b)
        },
        hasClass: function(a, b) {
            /\s/.test(b) && g(0, 442);
            return a.classList ? !!b && a.classList.contains(b) : (" " + a.className + " ").indexOf(" " + b + " ") > -1
        },
        matchesSelector: function(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || function(b) {
                return h(a, b)
            };
            return c.call(a, b)
        }
    };
    e.exports = i
}), null);
__d("CSS", ["CSSCore", "$"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = typeof window != "undefined" ? window.CSS : null;
    var g = "hidden_elem",
        h = {
            supports: a && a.supports.bind(a),
            setClass: function(a, c) {
                b("$").fromIDOrElement(a).className = c || "";
                return a
            },
            hasClass: function(a, c) {
                return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").hasClass(b("$").fromIDOrElement(a), c)
            },
            matchesSelector: function(a, c) {
                return a instanceof Document || a instanceof Text ? !1 : b("CSSCore").matchesSelector(b("$").fromIDOrElement(a), c)
            },
            addClass: function(a, c) {
                return b("CSSCore").addClass(b("$").fromIDOrElement(a), c)
            },
            removeClass: function(a, c) {
                return b("CSSCore").removeClass(b("$").fromIDOrElement(a), c)
            },
            conditionClass: function(a, c, d) {
                return b("CSSCore").conditionClass(b("$").fromIDOrElement(a), c, !!d)
            },
            toggleClass: function(a, b) {
                return h.conditionClass(a, b, !h.hasClass(a, b))
            },
            shown: function(a) {
                return !h.hasClass(a, g)
            },
            hide: function(a) {
                return h.addClass(a, g)
            },
            show: function(a) {
                return h.removeClass(a, g)
            },
            toggle: function(a) {
                return h.toggleClass(a, g)
            },
            conditionShow: function(a, b) {
                return h.conditionClass(a, g, !b)
            }
        };
    e.exports = h
}), null);
__d("Parent", ["CSS"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        byTag: function(a, b) {
            b = b.toUpperCase();
            a = g.find(a, function(a) {
                return a.nodeName === b
            });
            return a instanceof Element ? a : null
        },
        byClass: function(a, c) {
            a = g.find(a, function(a) {
                return a instanceof Element && b("CSS").hasClass(a, c)
            });
            return a instanceof Element ? a : null
        },
        bySelector: function(a, b) {
            __p && __p();
            a = a;
            if (typeof a.matches === "function") {
                while (a && a !== document && !a.matches(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else if (typeof a.msMatchesSelector === "function") {
                while (a && a !== document && !a.msMatchesSelector(b)) a = a.parentNode;
                return a instanceof Element ? a : null
            } else return g.bySelector_SLOW(a, b)
        },
        bySelector_SLOW: function(a, b) {
            __p && __p();
            a = a;
            var c = a;
            while (c.parentNode) c = c.parentNode;
            if (!(c instanceof Element) && !(c instanceof Document)) return null;
            c = c.querySelectorAll(b);
            while (a) {
                if (Array.prototype.indexOf.call(c, a) !== -1) return a instanceof Element ? a : null;
                a = a.parentNode
            }
            return a instanceof Element ? a : null
        },
        byAttribute: function(a, b) {
            a = g.find(a, function(a) {
                return a instanceof Element && !!a.getAttribute(b)
            });
            return a instanceof Element ? a : null
        },
        find: function(a, b) {
            a = a;
            while (a) {
                if (b(a)) return a;
                a = a.parentNode
            }
            return null
        }
    };
    e.exports = g
}), null);
__d("ContextualComponent", ["Parent"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();
        a.forNode = function(b) {
            return a.$1.get(b) || null
        };
        a.closestToNode = function(c) {
            c = b("Parent").find(c, function(b) {
                return !!a.forNode(b)
            });
            return c ? a.forNode(c) : null
        };
        a.register = function(b) {
            return new a(b)
        };

        function a(a) {
            var b = a.element,
                c = a.isRoot;
            a = a.parent;
            this.$2 = c;
            this.$3 = b;
            this.$4 = a;
            this.$5 = new Set();
            this.$6 = [];
            this.$7 = [];
            this.$8()
        }
        var c = a.prototype;
        c.onCleanup = function(a) {
            this.$6.push(a)
        };
        c.onUnmount = function(a) {
            this.$7.push(a)
        };
        c.cleanup = function() {
            this.$5.forEach(function(a) {
                return a.cleanup()
            }), this.$6.forEach(function(a) {
                return a()
            }), this.$6 = []
        };
        c.unmount = function() {
            this.cleanup();
            this.$5.forEach(function(a) {
                return a.unmount()
            });
            this.$7.forEach(function(a) {
                return a()
            });
            this.$7 = [];
            var b = this.$4;
            b && (a.$1["delete"](this.$3), b.$9(this))
        };
        c.reinitialize = function() {
            var b = this.$4;
            b && (b.$9(this), this.$4 = void 0);
            a.$1["delete"](this.$3);
            this.$8()
        };
        c.$8 = function() {
            if (!this.$2 && !this.$4) {
                var b = a.closestToNode(this.$3);
                b && (this.$4 = b)
            }
            this.$4 && this.$4.$10(this);
            a.$1.set(this.$3, this)
        };
        c.$10 = function(a) {
            this.$5.add(a)
        };
        c.$9 = function(a) {
            this.$5["delete"](a)
        };
        return a
    }();
    a.$1 = new Map();
    e.exports = a
}), null);
__d("PageEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NATIVE_ONLOAD: "onload/onload",
        BIGPIPE_ONLOAD: "onload/onload_callback",
        AJAXPIPE_ONLOAD: "ajaxpipe/onload_callback",
        NATIVE_DOMREADY: "onload/dom_content_ready",
        BIGPIPE_DOMREADY: "onload/domcontent_callback",
        AJAXPIPE_DOMREADY: "ajaxpipe/domcontent_callback",
        NATIVE_ONBEFOREUNLOAD: "onload/beforeunload",
        NATIVE_ONUNLOAD: "onload/unload",
        AJAXPIPE_ONUNLOAD: "onload/exit",
        AJAXPIPE_SEND: "ajaxpipe/send",
        AJAXPIPE_FIRST_RESPONSE: "ajaxpipe/first_response",
        AJAXPIPE_ONBEFORECLEARCANVAS: "ajaxpipe/onbeforeclearcanvas"
    });
    e.exports = a
}), null);
__d("createCancelableFunction", ["emptyFunction"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        var c = a;
        a = function() {
            for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
            return c.apply(this, b)
        };
        a.cancel = function() {
            c = b("emptyFunction")
        };
        return a
    }
    e.exports = a
}), null);
__d("Run", ["Arbiter", "BigPipeInstance", "ContextualComponent", "ExecutionEnvironment", "PageEvents", "TimeSlice", "createCancelableFunction", "emptyFunction", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "onunloadhooks",
        h = "onafterunloadhooks";

    function i(b, c) {
        var d = a.CavalryLogger;
        d = d && d.getInstance();
        if (!d) return;
        c ? d.setAbsTimeStamp && d.setAbsTimeStamp(b, c) : d.setTimeStamp(b)
    }

    function j() {
        return !window.loading_page_chrome
    }

    function c(c) {
        var d = a.PageHooks;
        if (window.domready && d) {
            d.runHook(c, "domreadyhooks:late");
            return {
                remove: b("emptyFunction")
            }
        } else return p("domreadyhooks", c)
    }

    function d(b) {
        var c = a.PageHooks;
        if (window.loaded && c) {
            var d = setTimeout(function() {
                c.runHook(b, "onloadhooks:late")
            }, 0);
            return {
                remove: function() {
                    return clearTimeout(d)
                }
            }
        } else return p("onloadhooks", b)
    }

    function f(a, b) {
        b === void 0 && (b = j());
        return b ? p("onbeforeleavehooks", a) : p("onbeforeunloadhooks", a)
    }

    function k(a, c) {
        window.onunload || (window.onunload = b("TimeSlice").guard(function() {
            b("Arbiter").inform(b("PageEvents").NATIVE_ONUNLOAD, !0, "state")
        }, "window.onunload"));
        return p(a, c)
    }

    function l(a) {
        return k(g, a)
    }

    function m(a) {
        return k(h, a)
    }

    function n(a) {
        return p("onleavehooks", a)
    }

    function o(a, c) {
        var d = b("createCancelableFunction")(c);
        c = function() {
            d(), d.cancel()
        };
        a = b("ContextualComponent").closestToNode(a);
        a && a.onCleanup(c);
        window.onleavehooks = (window.onleavehooks || []).concat(c);
        return {
            remove: function() {
                d.cancel()
            }
        }
    }

    function p(a, c) {
        c = b("createCancelableFunction")(c);
        window[a] = (window[a] || []).concat(c);
        return {
            remove: function() {
                c.cancel()
            }
        }
    }

    function q(a) {
        window[a] = []
    }
    var r = b("TimeSlice").guard(function() {
        b("Arbiter").inform(b("PageEvents").NATIVE_DOMREADY, !0, "state")
    }, "DOMContentLoaded");
    a._domcontentready = r;

    function s() {
        __p && __p();
        var a = document,
            c = window;
        if (a.addEventListener) {
            var d = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
            if (d && d[1] < 525) var e = setInterval(function() {
                /loaded|complete/.test(a.readyState) && (r(), clearInterval(e))
            }, 10);
            else a.addEventListener("DOMContentLoaded", r, !0)
        } else {
            d = "javascript:void(0)";
            c.location.protocol == "https:" && (d = "//:");
            a.write('<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' + d + '"></');
            a.write("script>")
        }
        var f = c.onload;
        c.onload = b("TimeSlice").guard(function() {
            i("t_layout"), f && f(), b("Arbiter").inform(b("PageEvents").NATIVE_ONLOAD, !0, "state")
        }, "window.onload");
        c.onbeforeunload = b("TimeSlice").guard(function(a) {
            var c = {};
            b("Arbiter").inform(b("PageEvents").NATIVE_ONBEFOREUNLOAD, c, "state");
            c.warn || b("Arbiter").inform(b("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal"
            });
            if (c.warn !== void 0) {
                a.returnValue = c.warn;
                return c.warn
            } else return
        }, "window.onbeforeunload")
    }

    function t() {
        var a = b("performanceAbsoluteNow")();
        window.console && console.timeStamp && console.timeStamp('perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}');
        i("t_onload", a);
        b("Arbiter").inform(b("PageEvents").BIGPIPE_ONLOAD, {
            ts: a
        }, "state")
    }
    var u = b("Arbiter").registerCallback(function() {
            b("BigPipeInstance").getCurrentInstance() ? b("Arbiter").subscribeOnce(b("BigPipeInstance").Events.displayed, t) : t()
        }, [b("PageEvents").NATIVE_ONLOAD]),
        v = b("Arbiter").registerCallback(function() {
            i("t_domcontent");
            var a = {
                timeTriggered: Date.now()
            };
            b("Arbiter").inform(b("PageEvents").BIGPIPE_DOMREADY, a, "state")
        }, [b("PageEvents").NATIVE_DOMREADY]);
    b("ExecutionEnvironment").canUseDOM && s();
    s = {
        onLoad: c,
        onAfterLoad: d,
        onLeave: n,
        onBeforeUnload: f,
        onUnload: l,
        onAfterUnload: m,
        onCleanupOrLeave: o,
        __domContentCallback: v,
        __onloadCallback: u,
        __removeHook: q
    };
    e.exports = s
}), null);
__d("BitMap", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = []
        }
        var b = a.prototype;
        b.set = function(a) {
            this.$1[a] = 1;
            return this
        };
        b.toString = function() {
            var a = [];
            for (var b = 0; b < this.$1.length; b++) a.push(this.$1[b] ? 1 : 0);
            return a.length ? i(a.join("")) : ""
        };
        b.toCompressedString = function() {
            if (this.$1.length === 0) return "";
            var a = [],
                b = 1,
                c = this.$1[0] || 0,
                d = c.toString(2);
            for (var e = 1; e < this.$1.length; e++) {
                var f = this.$1[e] || 0;
                f === c ? b++ : (a.push(h(b)), c = f, b = 1)
            }
            b && a.push(h(b));
            return i(d + a.join(""))
        };
        return a
    }();

    function h(a) {
        a = a.toString(2);
        var b = "0".repeat(a.length - 1);
        return b + a
    }

    function i(a) {
        a = (a + "00000").match(/[01]{6}/g);
        var b = "";
        for (var c = 0; a != null && c < a.length; c++) b += g[parseInt(a[c], 2)];
        return b
    }
    e.exports = a
}), null);
__d("BanzaiLazyQueue", [], (function(a, b, c, d, e, f) {
    var g = [];
    a = {
        queuePost: function(a, b, c) {
            g.push([a, b, c])
        },
        flushQueue: function() {
            var a = g;
            g = [];
            return a
        }
    };
    e.exports = a
}), null);
__d("ge", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, b, c) {
        if (typeof a !== "string") return a;
        else if (!b) return document.getElementById(a);
        else return g(a, b, c)
    }

    function g(a, b, c) {
        __p && __p();
        var d;
        if (h(b) == a) return b;
        else if (b.getElementsByTagName) {
            c = b.getElementsByTagName(c || "*");
            for (d = 0; d < c.length; d++)
                if (h(c[d]) == a) return c[d]
        } else {
            c = b.childNodes;
            for (d = 0; d < c.length; d++) {
                b = g(a, c[d]);
                if (b) return b
            }
        }
        return null
    }

    function h(a) {
        return a.getAttribute ? a.getAttribute("id") : null
    }
    e.exports = a
}), null);
__d("replaceTransportMarkers", ["BanzaiLazyQueue", "ErrorUtils", "ge", "memoize"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, c, e) {
        __p && __p();
        var f = e !== void 0 ? c[e] : c,
            h;
        if (Array.isArray(f))
            for (h = 0; h < f.length; h++) g(a, f, h);
        else if (f && typeof f === "object")
            if (f.__m) f.__lazy ? c[e] = b("memoize")(b.bind(null, f.__m)) : c[e] = b.call(null, f.__m);
            else if (f.__jsr) c[e] = new(b.call(null, "JSResourceReference"))(f.__jsr);
        else if (f.__dr) c[e] = new(b.call(null, "RequireDeferredReference"))(f.__dr);
        else if (f.__rc) f.__rc[0] === null ? c[e] = null : c[e] = b.call(null, f.__rc[0]), f.__rc[1] && b("BanzaiLazyQueue").queuePost("require_cond_exposure_logging", {
            identifier: f.__rc[1]
        });
        else if (f.__deferredElement) {
            var i = [],
                j;
            d.call(null, [f.__deferredElement], function(a) {
                j = a, i.length && (i.forEach(b("ErrorUtils").guard(function(b) {
                    b(a)
                }, "JS::deferredElement callback: '" + f.__deferredElement + "'")), i.length = 0)
            });
            h = {
                then: function(a) {
                    j ? a(j) : i.push(a)
                }
            };
            c[e] = h
        } else if (f.__e) c[e] = b("ge")(f.__e);
        else if (f.__rel) c[e] = a.relativeTo;
        else if (f.__bigPipeContext) c[e] = a.bigPipeContext;
        else if (f.__bbox) c[e] = f.__bbox;
        else {
            for (var k in f) g(a, f, k);
            if (f.__map) c[e] = new Map(f.__map);
            else if (f.__set) c[e] = new Set(f.__set);
            else if (f.__imm) {
                h = f.__imm;
                a = h.method;
                h = h.value;
                c[e] = b.call(null, "immutable")[a](h)
            }
        }
    }
    e.exports = g
}), null);
__d("ServerJSDefine", ["BitMap", "replaceTransportMarkers"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 2,
        h = 8,
        i = new(b("BitMap"))(),
        j = {
            getLoadedModuleHash: function() {
                return i.toCompressedString()
            },
            handleDefine: function(a, c, d, f, j) {
                f >= 0 && i.set(f), define(a, c, function(g, h, i, k, c) {
                    g = {
                        data: d
                    };
                    b("replaceTransportMarkers")({
                        relativeTo: j
                    }, g);
                    if (f === -42) {
                        h = d != null && typeof d === "object" && d.__throw8367__;
                        throw new Error(a + ": " + (typeof h === "string" ? h : ""))
                    }
                    c.exports = g.data
                }, g | h)
            },
            handleDefines: function(a, b) {
                a.forEach(function(a) {
                    var c;
                    b != null ? c = [].concat(a, [b]) : c = [].concat(a, [null]);
                    j.handleDefine.apply(null, c)
                })
            }
        };
    e.exports = j
}), null);
__d("__debug", [], (function(a, b, c, d, e, f) {
    e.exports = {}
}), null);
__d("ServerJS", ["ContextualComponent", "ErrorUtils", "ServerJSDefine", "ex", "ge", "replaceTransportMarkers", "__debug"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 1,
        h = 2,
        i = 0;
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = {}, this.$2 = null, this.$3 = {}, this.$4 = void 0
        }
        var c = a.prototype;
        c.handle = function(a, b) {
            return this.$5(a, b, k)
        };
        c.handleWithCustomApplyEach = function(a, b, c) {
            this.$5(b, c, a)
        };
        c.$5 = function(a, b, c) {
            __p && __p();
            this.$4 = b;
            if (a.__guard) throw new Error("ServerJS.handle called on data that has already been handled");
            a.__guard = !0;
            c(a.define || [], this.$6, this);
            c(a.markup || [], this.$7, this);
            c(a.elements || [], this.$8, this);
            this.$9(a.contexts || []);
            c(a.instances || [], this.$10, this);
            var d = c(a.pre_display_requires || [], this.$11, this);
            d = d.concat(c(a.require || [], this.$11, this));
            return {
                cancel: function() {
                    for (var a = 0; a < d.length; a++) d[a] && d[a].cancel()
                }
            }
        };
        c.handlePartial = function(a, b) {
            (a.instances || []).forEach(m.bind(null, this.$1, 3));
            (a.markup || []).forEach(m.bind(null, this.$1, 2));
            (a.elements || []).forEach(m.bind(null, this.$1, 2));
            return this.handle(a, b)
        };
        c.setRelativeTo = function(a) {
            this.$2 = a;
            return this
        };
        c.setServerFeatures = function() {
            return this
        };
        c.cleanup = function(a) {
            __p && __p();
            var c = Object.keys(this.$1);
            a ? d.call(null, c, a.guard(n, "SeverJS Cleanup requireLazy", {
                propagationType: a.PropagationType.ORPHAN
            })) : d.call(null, c, n);
            this.$1 = {};

            function f(c) {
                var d = this.$3[c],
                    a = d[0],
                    f = d[1];
                d = d[2];
                delete this.$3[c];
                f = f ? 'JS::call("' + a + '", "' + f + '", ...)' : 'JS::requireModule("' + a + '")';
                a = b("__debug").debugUnresolvedDependencies([a, c]);
                c = b("ex")("%s did not fire because it has missing dependencies.\n%s", f, a);
                throw j(new Error(c), d)
            }
            for (var g in this.$3) b("ErrorUtils").applyWithGuard(f, this, [g], null, "ServerJS:cleanup id: " + g)
        };
        c.$6 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(b("ServerJSDefine").handleDefine, b("ServerJSDefine"), [a, c, d, e, this.$2], null, "JS::define")
        };
        c.$11 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(this.$12, this, [a, c, d, e], null, c ? "JS::call" : "JS::requireModule")
        };
        c.$12 = function(a, c, d, f) {
            __p && __p();
            a = a.split("@");
            var k = a[0],
                l = a[1];
            typeof c === "object" && (d = c, c = void 0);
            a = [k].concat(d || []);
            var m;
            c ? m = "__call__" + k + "." + c : m = "__requireModule__" + k;
            m += "__" + i++;
            this.$3[m] = [k, c, l];
            var n = this.$4 && this.$4.bigPipeContext,
                o = b("ErrorUtils").guard(function(a) {
                    __p && __p();
                    var a = b.call(null, k);
                    delete this.$3[m];
                    f && b("replaceTransportMarkers")({
                        relativeTo: this.$2,
                        bigPipeContext: n
                    }, f);
                    if (c) {
                        if (!a[c]) throw j(new TypeError(b("ex")('Module %s has no method "%s"', k, c)), l);
                        a[c].apply(a, f || []);
                        o.__SMmeta = a[c].__SMmeta || {};
                        o.__SMmeta.module = o.__SMmeta.module || k;
                        o.__SMmeta.name = o.__SMmeta.name || c
                    }
                }.bind(this), c ? "JS::call('" + k + "', '" + c + "', ...)" : "JS::requireModule('" + k + "')");
            return define(m, a, o, g | h, this, 1, this.$4)
        };
        c.$10 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(this.$13, this, [a, c, d, e], null, "JS::instance")
        };
        c.$13 = function(a, c, d, e) {
            __p && __p();
            var f = null;
            a = a.split("@");
            var g = a[0];
            a = a[1];
            if (c) {
                var i = this.$4 && this.$4.bigPipeContext;
                f = function() {
                    var a = b.call(null, c[0]);
                    b("replaceTransportMarkers")({
                        relativeTo: this.$2,
                        bigPipeContext: i
                    }, d);
                    var e = Object.create(a.prototype);
                    a.apply(e, d);
                    return e
                }.bind(this)
            }
            define(g, c, f, h, null, e)
        };
        c.$7 = function(a, c, d) {
            return b("ErrorUtils").applyWithGuard(this.$14, this, [a, c, d], null, "JS::markup")
        };
        c.$14 = function(a, b, c) {
            a = a.split("@");
            var d = a[0];
            a = a[1];
            define(d, ["HTML"], function(c) {
                try {
                    return c.replaceJSONWrapper(b).getRootNode()
                } catch (b) {
                    throw j(b, a)
                }
            }, 0, null, c)
        };
        c.$8 = function(a, c, d, e) {
            return b("ErrorUtils").applyWithGuard(this.$15, this, [a, c, d, e], null, "JS::element")
        };
        c.$15 = function(a, c, d, e) {
            __p && __p();
            a = a.split("@");
            var f = a[0],
                h = a[1];
            if (c === null && d) {
                define(f, null, null, 0, null, d);
                return
            }
            a = [];
            var i = 0;
            e && (a.push(e), i = g, d++);
            define(f, a, function(a) {
                a = b("ge")(c, a);
                if (!a) {
                    var d = "";
                    throw j(new Error(b("ex")('Could not find element "%s"%s', c, d)), h)
                }
                return a
            }, i, null, d)
        };
        c.$9 = function(a) {
            b("ErrorUtils").applyWithGuard(this.$16, this, [a], null, "ContextualComponents")
        };
        c.$16 = function(a) {
            __p && __p();
            var c = this,
                d = this.$4 && this.$4.bigPipeContext;
            a.map(function(a) {
                b("replaceTransportMarkers")({
                    relativeTo: c.$2,
                    bigPipeContext: d
                }, a);
                var e = a[0];
                return [a, l(e)]
            }).sort(function(a, b) {
                return a[1] - b[1]
            }).forEach(function(a) {
                a = a[0];
                var c = a[0];
                a = a[1];
                b("ContextualComponent").register({
                    element: c,
                    isRoot: a
                })
            })
        };
        return a
    }();

    function j(a, b) {
        a.serverHash = b;
        return a
    }

    function k(a, b, c) {
        return a.map(function(a) {
            return b.apply(c, a)
        })
    }

    function l(a) {
        var b = 0;
        while (a) a = a.parentElement, b++;
        return b
    }

    function m(b, c, a) {
        var d = a[0];
        d in b || (a[c] = (a[c] || 0) + 1);
        b[d] = !0
    }

    function n() {
        return {}
    }
    e.exports = a
}), null);
__d("Visibility", ["BaseEventEmitter", "TimeSlice"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g, h;
    document.hidden !== void 0 ? (g = "hidden", h = "visibilitychange") : document.mozHidden !== void 0 ? (g = "mozHidden", h = "mozvisibilitychange") : document.msHidden !== void 0 ? (g = "msHidden", h = "msvisibilitychange") : document.webkitHidden !== void 0 && (g = "webkitHidden", h = "webkitvisibilitychange");
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.HIDDEN = "hidden", c.VISIBLE = "visible", c.hiddenKey = g, c.hiddenEvent = h, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.isHidden = function() {
            return g ? document[g] : !1
        };
        c.isSupported = function() {
            return document.addEventListener && h !== void 0
        };
        return b
    }(b("BaseEventEmitter"));
    var i = new a();
    i.isSupported() && document.addEventListener(i.hiddenEvent, b("TimeSlice").guard(function(a) {
        i.emit(i.isHidden() ? i.HIDDEN : i.VISIBLE, {
            changeTime: a.timeStamp
        })
    }, "visibility change"));
    e.exports = i
}), null);
__d("bx", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 3199, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (h[c] = a[c])
    };
    a.getURL = function(a) {
        return a.uri
    };
    e.exports = a
}), null);
__d("cancelIdleCallback", ["requireCond", "cr:692209"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:692209")
}), null);
__d("CurrentCommunity", ["CurrentCommunityInitialData"], (function(a, b, c, d, e, f) {
    a = {
        getID: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_ID || "0"
        },
        getName: function() {
            return b("CurrentCommunityInitialData").COMMUNITY_NAME || ""
        }
    };
    e.exports = a
}), null);
__d("DTSG", ["invariant", "DTSGInitialData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("DTSGInitialData").token || null;
    a = {
        getToken: function() {
            return h
        },
        setToken: function(a) {
            h = a
        },
        refresh: function() {
            g(0, 5809)
        }
    };
    e.exports = a
}), null);
__d("isBonfireURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)(get|my)bonfire\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isCdnURI", ["CdnAkamaiDomainsConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a.getProtocol() !== "http" && a.getProtocol() !== "https") return !1;
        var c = a.getPort();
        if (!!c && c !== 80 && c !== 443) return !1;
        return a.isSubdomainOfDomain("fbcdn.net") ? !0 : b("CdnAkamaiDomainsConfig")[a.getDomain()] != void 0
    }
    e.exports = a
}), null);
__d("isMessengerDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)messenger\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isOculusDotComURI", ["URI"], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)oculus\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isWorkplaceDotComURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)workplace\\.com$", "i");

    function a(a) {
        return a.getProtocol() === "https" && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("DTSGUtils", ["SprinkleConfig", "isBonfireURI", "isCdnURI", "isFacebookURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getNumericValue: function(a) {
            var c = 0;
            for (var d = 0; d < a.length; d++) c += a.charCodeAt(d);
            c = c.toString();
            return b("SprinkleConfig").should_randomize ? c : b("SprinkleConfig").version + c
        },
        shouldAppendToken: function(a) {
            return !b("isCdnURI")(a) && !a.isSubdomainOfDomain("fbsbx.com") && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isWorkplaceDotComURI")(a) || b("isBonfireURI")(a) || b("isOculusDotComURI")(a) || a.isSubdomainOfDomain("freebasics.com"))
        }
    };
    e.exports = a
}), null);
__d("DTSG_ASYNC", ["DTSGInitData"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("DTSGInitData").async_get_token || null;
    a = {
        getToken: function() {
            return g
        },
        setToken: function(a) {
            g = a
        }
    };
    e.exports = a
}), null);
__d("StaticSiteData", [], (function(a, b, c, d, e, f) {
    e.exports = {
        pkg_cohort_key: "__pc",
        dpr_key: "dpr",
        be_key: "__be",
        spin_rev_key: "__spin_r",
        spin_time_key: "__spin_t",
        spin_branch_key: "__spin_b",
        spin_mhenv_key: "__spin_dev_mhenv"
    }
}), null);
__d("asyncParams", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        add: function(a, b) {
            g[a] = b
        },
        get: function() {
            return g
        }
    };
    e.exports = a
}), null);
__d("isSocialPlugin", ["CSSCore"], (function(a, b, c, d, e, f) {
    "use strict";

    function a() {
        return !!document.body && b("CSSCore").hasClass(document.body, "plugin")
    }
    e.exports = a
}), null);
__d("getAsyncParams", ["CurrentCommunity", "CurrentUserInitialData", "DTSG", "DTSG_ASYNC", "DTSGUtils", "ISB", "LSD", "ServerJSDefine", "SiteData", "SprinkleConfig", "StaticSiteData", "asyncParams", "isSocialPlugin"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 1;

    function a(a) {
        __p && __p();
        var c, d = babelHelpers["extends"]({}, b("asyncParams").get(), (c = {
            __user: b("CurrentUserInitialData").USER_ID,
            __a: 1,
            __dyn: b("ServerJSDefine").getLoadedModuleHash(),
            __req: (g++).toString(36)
        }, c[b("StaticSiteData").be_key] = b("SiteData").be_mode, c[b("StaticSiteData").pkg_cohort_key] = b("SiteData").pkg_cohort, c[b("StaticSiteData").dpr_key] = b("SiteData").pr, c.__rev = b("SiteData").client_revision, c.__comet_req = b("SiteData").is_comet, c));
        window.location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b = a[0];
            a = a[1];
            (b === "locale" || b === "cxobfus" || b === "js_debug" || b.substr(0, 4) === "tfc_" || b.substr(0, 4) === "tfi_" || b.substr(0, 3) === "mh_") && (d[b] = a)
        });
        if (a == "POST") {
            c = b("DTSG").getCachedToken ? b("DTSG").getCachedToken() : b("DTSG").getToken();
            c && (d.fb_dtsg = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)));
            b("LSD").token && (d.lsd = b("LSD").token, b("SprinkleConfig").param_name && !c && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
        }
        if (a == "GET") {
            c = b("DTSG_ASYNC").getCachedToken ? b("DTSG_ASYNC").getCachedToken() : b("DTSG_ASYNC").getToken();
            c && (d.fb_dtsg_ag = c, b("SprinkleConfig").param_name && (d[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(c)))
        }
        b("ISB").token && (d.fb_isb = b("ISB").token);
        b("CurrentCommunity").getID() !== "0" && (d.__cid = b("CurrentCommunity").getID());
        b("isSocialPlugin")() && (d.__sp = 1);
        b("SiteData").spin && (d[b("StaticSiteData").spin_rev_key] = b("SiteData")[b("StaticSiteData").spin_rev_key], d[b("StaticSiteData").spin_branch_key] = b("SiteData")[b("StaticSiteData").spin_branch_key], d[b("StaticSiteData").spin_time_key] = b("SiteData")[b("StaticSiteData").spin_time_key], b("SiteData")[b("StaticSiteData").spin_mhenv_key] && (d[b("StaticSiteData").spin_mhenv_key] = b("SiteData")[b("StaticSiteData").spin_mhenv_key]));
        return d
    }
    e.exports = a
}), null);
__d("getSameOriginTransport", ["ExecutionEnvironment", "ex"], (function(a, b, c, d, e, f) {
    function c() {
        if (!b("ExecutionEnvironment").canUseDOM) throw new Error(b("ex")("getSameOriginTransport: %s", "Same origin transport unavailable in the server environment."));
        try {
            return a.XMLHttpRequest ? new a.XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0")
        } catch (a) {
            throw new Error(b("ex")("getSameOriginTransport: %s", a.message))
        }
    }
    e.exports = c
}), null);
__d("requireWeak", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        d && d.call(null, [a], b)
    }
    e.exports = a
}), null);
__d("gkx", ["invariant", "emptyFunction", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = {},
        i = {};

    function a(a) {
        var c = h[a];
        c != null || g(0, 3444, a);
        i[a] || (i[a] = !0, b("requireWeak")("Banzai", function(b) {
            return b.post("gk2_exposure", {
                identifier: a,
                hash: c.hash
            })
        }));
        return c.result
    }
    a.add = function(a) {
        for (var b in a) b in h || (h[b] = a[b])
    };
    c = b("emptyFunction");
    a.setPass = c;
    a.setFail = c;
    e.exports = a
}), null);
__d("ix", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = {};

    function a(a) {
        var b = h[a];
        !b && g(0, 582, a);
        return b
    }
    a.add = function(a) {
        var b = !1;
        for (var c in a) c in h || (h[c] = a[c])
    };
    e.exports = a
}), null);
__d("qex", ["invariant", "requireWeak"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = {},
        i = {};
    a = {
        _: function(a) {
            var c = h[a];
            c != null || g(0, 3203, a);
            var d = c.r,
                e = c.l;
            e != null && !i[a] && (i[a] = !0, b("requireWeak")("Banzai", function(a) {
                a.post("qex", {
                    l: e
                }, {
                    signal: !0
                })
            }));
            return d
        },
        add: function(a) {
            for (var b in a) b in h || (h[b] = a[b])
        }
    };
    e.exports = a
}), null);
__d("requestIdleCallback", ["requireCond", "cr:694370"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:694370")
}), null);
/**
 * License: https://www.facebook.com/legal/license/ZtTipMAcpq9/
 */
__d("ImmediateImplementation", ["ImmediateImplementationExperiments"], (function(a, b, c, d, e, f) {
    __p && __p();
    (function(c, d) {
        "use strict";
        __p && __p();
        var e = 1,
            g = {},
            h = {},
            i = h,
            j = !1,
            k = c.document,
            l, m, n, o = "setImmediate$" + Math.random() + "$";

        function p() {
            var a = c.event;
            return !a ? !1 : a.isTrusted && ["change", "click", "contextmenu", "dblclick", "mouseup", "pointerup", "reset", "submit", "touchend"].includes(a.type) || a.type === "message" && a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0
        }

        function q(a) {
            var b = a[0];
            a = Array.prototype.slice.call(a, 1);
            g[e] = function() {
                b.apply(void 0, a)
            };
            i = i.next = {
                handle: e++
            };
            return i.handle
        }

        function r() {
            __p && __p();
            var a, b;
            while (!j && (a = h.next)) {
                h = a;
                if (b = g[a.handle]) {
                    j = !0;
                    try {
                        b(), j = !1
                    } finally {
                        s(a.handle), j && (j = !1, h.next && l(r))
                    }
                }
            }
        }

        function s(a) {
            delete g[a]
        }

        function d() {
            __p && __p();
            if (c.postMessage && !c.importScripts) {
                var a = !0,
                    b = function b() {
                        a = !1, c.removeEventListener ? c.removeEventListener("message", b, !1) : c.detachEvent("onmessage", b)
                    };
                if (c.addEventListener) c.addEventListener("message", b, !1);
                else if (c.attachEvent) c.attachEvent("onmessage", b);
                else return !1;
                c.postMessage("", "*");
                return a
            }
        }

        function t() {
            var a = function(a) {
                a.source === c && typeof a.data === "string" && a.data.indexOf(o) === 0 && r()
            };
            c.addEventListener ? c.addEventListener("message", a, !1) : c.attachEvent("onmessage", a);
            l = function() {
                var a = q(arguments);
                c.originalPostMessage ? c.originalPostMessage(o + a, "*") : c.postMessage(o + a, "*");
                return a
            };
            m = l
        }

        function u() {
            var a = new MessageChannel(),
                b = !1;
            a.port1.onmessage = function(a) {
                b = !1, r()
            };
            l = function() {
                var c = q(arguments);
                b || (a.port2.postMessage(c), b = !0);
                return c
            };
            n = l
        }

        function v() {
            var a = k.documentElement;
            l = function() {
                var b = q(arguments),
                    c = k.createElement("script");
                c.onreadystatechange = function() {
                    c.onreadystatechange = null, a.removeChild(c), c = null, r()
                };
                a.appendChild(c);
                return b
            }
        }

        function w() {
            l = function() {
                setTimeout(r, 0);
                return q(arguments)
            }
        }
        d() ? c.MessageChannel && b("ImmediateImplementationExperiments").prefer_message_channel ? (t(), u(), l = function() {
            if (p()) return m.apply(null, arguments);
            else return n.apply(null, arguments)
        }) : t() : c.MessageChannel ? u() : k && k.createElement && "onreadystatechange" in k.createElement("script") ? v() : w();
        f.setImmediate = l;
        f.clearImmediate = s
    })(Function("return this")())
}), null);
__d("setImmediatePolyfill", ["invariant", "PromiseUsePolyfillSetImmediateGK", "ImmediateImplementation"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.setImmediate;
    if (b("PromiseUsePolyfillSetImmediateGK").www_always_use_polyfill_setimmediate || !h) {
        d = b("ImmediateImplementation");
        h = d.setImmediate
    }

    function c(a) {
        typeof a === "function" || g(0, 5912);
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return h.apply(void 0, [a].concat(c))
    }
    e.exports = c
}), null);
__d("setImmediateAcrossTransitions", ["TimerStorage", "TimeSlice", "setImmediatePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;

    function a(a) {
        var c = b("TimeSlice").guard(a, "setImmediate", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
        var h = b("setImmediatePolyfill").apply(void 0, [c].concat(e)),
            i = g + String(h);
        b("TimeSlice").registerForCancelling(i, c);
        return h
    }
    e.exports = a
}), null);
__d("setTimeoutAcrossTransitions", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = b("TimerStorage").TIMEOUT;

    function c(c, d) {
        var e = b("TimeSlice").guard(c, "setTimeout", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        for (var f = arguments.length, i = new Array(f > 2 ? f - 2 : 0), j = 2; j < f; j++) i[j - 2] = arguments[j];
        var k = Function.prototype.apply.call(g, a, [e, d].concat(i)),
            l = h + k;
        b("TimeSlice").registerForCancelling(l, e);
        return k
    }
    e.exports = c
}), null);
__d("Bootloader", ["invariant", "ix", "Arbiter", "BootloaderConfig", "CallbackDependencyManager", "CSRFGuard", "CSSLoader", "ErrorUtils", "FBLogger", "ResourceTimingsStore", "ServerJS", "TAAL", "TimeSlice", "Visibility", "bx", "cancelIdleCallback", "ex", "getAsyncParams", "getSameOriginTransport", "gkx", "ifRequired", "performanceAbsoluteNow", "qex", "requestIdleCallback", "requireCond", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions", "cr:696703"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    __p && __p();
    var i = function() {},
        j = [],
        k = [],
        l = {},
        m = {},
        n = {},
        o = {},
        p = null,
        q = {},
        r = {},
        s = {},
        t = {},
        u = {},
        v = [],
        w = {},
        x = {},
        y = !1,
        z = {},
        A = !1,
        B = new(b("CallbackDependencyManager"))(),
        C = new(b("Arbiter"))(),
        aa = 0,
        D = null,
        E = null,
        ba = b("BootloaderConfig").preloader_num_preloads,
        F = b("BootloaderConfig").preloader_num_loads,
        G = {},
        H = {},
        I = [],
        J = [],
        K = {},
        L = null,
        M = b("BootloaderConfig").preloader_enabled,
        N = !1;
    M && d(["Run"], function(a) {
        a.onLeave(function() {
            I.length = 0, J.length = 0, L && (b("cancelIdleCallback")(L), L = null), M = !1
        })
    });
    var O = b("BootloaderConfig").jsRetries || [],
        ca = b("BootloaderConfig").jsRetryAbortNum,
        da = b("BootloaderConfig").jsRetryAbortTime,
        P = O.length > 0,
        ea = Object.freeze({
            BOOTLOAD: "bootloader/bootload"
        });
    b("ErrorUtils").addListener(function(a) {
        a.loadingUrls = Object.keys(r)
    }, !0);

    function Q(a) {
        __p && __p();
        if (!n[a]) throw new Error(b("TAAL").blameToPreviousFile(b("ex")("Bootloader: %s is not in the component map", a)));
        var c = "resources" in n[a];
        if (c) {
            c = {
                r: n[a].resources
            };
            "rds" in n[a] && (c.rds = {
                m: n[a].rds
            });
            "needsAsync" in n[a] && (c.be = n[a].needsAsync);
            "priority" in n[a] && (c.p = n[a].priority);
            n[a] = c
        }
        return n[a]
    }

    function R() {
        p || (p = document.head || document.getElementsByTagName("head")[0] || document.body);
        return p
    }

    function S(a) {
        var c = b("BootloaderConfig").payloadEndpointURI;
        a = encodeURIComponent(a.join(","));
        return "" + c + (c.indexOf("?") === -1 ? "?" : "&") + "modules=" + a
    }

    function fa() {
        if (!P) return !1;
        var a = v.length;
        if (a < ca) return !0;
        a = v[a - 1] - v[a - ca];
        a < da && (b("FBLogger")("bootloader").warn("JS retry abort"), P = !1);
        return P
    }

    function ga(a, b, c, d, e) {
        var f = document.createElement("link");
        f.href = a;
        f.rel = "preload";
        b !== "async" || g(0, 3135);
        f.as = b === "js" ? "script" : "style";
        e && (f.onload = e);
        c != null && q[c].crossOrigin && (f.crossOrigin = "anonymous");
        m[c] = !0;
        d.appendChild(f)
    }

    function ha(a, c, d, e) {
        var f = document.createElement("script");
        f.src = a;
        f.async = !0;
        c != null && q[c].crossOrigin && (f.crossOrigin = "anonymous");
        ia(f, c, d);
        !b("Visibility").isHidden() && b("BootloaderConfig").staggerJsDownloads ? ja(f) : e.appendChild(f);
        return f
    }

    function ia(a, c, d) {
        __p && __p();
        var e = a.src,
            f = b("performanceAbsoluteNow")(),
            g = b("TimeSlice").getGuardedContinuation("Bootloader script.onresponse"),
            h = b("ResourceTimingsStore").getUID("js", e);
        b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
            return a.getInteractionsActiveRightNow().forEach(function(a) {
                return a.forResourceRequest(h).addStringAnnotation("requested_in_continuation", "true")
            })
        });
        b("ResourceTimingsStore").annotate("js", h).addStringAnnotation("name", c != null ? c : "").addStringAnnotation("source", e);
        b("ifRequired")("TimeSliceInteraction", function(a) {
            a.informGlobally("bootloader._loadJS").addStringAnnotation("source", e).addStringAnnotation("name", c != null ? c : "")
        });
        b("ResourceTimingsStore").measureRequestSent("js", h);
        a.onload = g.bind(void 0, function() {
            u[e] && b("FBLogger")("bootloader").info("JS retry success [%s] at %s | time: %s | retries: %s", c, e, b("performanceAbsoluteNow")() - f, u[e]), b("ResourceTimingsStore").measureResponseReceived("js", h), d()
        });
        a.onreadystatechange = function() {
            ["loaded", "complete"].includes(this.readyState) && (b("ResourceTimingsStore").measureResponseReceived("js", h), g.bind(void 0, d)())
        };
        a.onerror = g.bind(void 0, function() {
            b("ResourceTimingsStore").measureResponseReceived("js", h), u[e] || (u[e] = 0), fa() && u[e] < O.length ? (v.push(b("performanceAbsoluteNow")()), setTimeout(function() {
                if (!fa()) return;
                var b = a.parentNode;
                b.removeChild(a);
                ha(e, c, d, b)
            }, O[u[e]]), u[e]++) : (t[e] = !0, b("FBLogger")("bootloader").warn("JS loading error [%s] at %s | time: %s | retries: %s | concurrency: %s", c, e, b("performanceAbsoluteNow")() - f, u[e], Object.keys(r).length), d())
        })
    }
    var T = !1,
        U = [],
        V = !1;

    function ja(a) {
        T ? (U.push(a), V || (V = !0, ka())) : (R().appendChild(a), T = !0)
    }

    function ka() {
        __p && __p();
        b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
            __p && __p();
            var a = U.shift();
            R().appendChild(a);
            if (U.length === 0) T = !1, V = !1;
            else if (b("Visibility").isHidden()) {
                while (U.length) R().appendChild(U.shift());
                T = !1;
                V = !1
            } else ka()
        }, "Bootloader staggered download scheduler", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        }), 0)
    }

    function la(a, c, d) {
        return function() {
            b("FBLogger")("bootloader").warn("CSS timeout [%s] at %s | concurrency: %s", a, c, Object.keys(r).length), t[c] = !0, d()
        }
    }

    function W(a, c, d, e) {
        __p && __p();
        var f = function() {
            return $.done([d], c)
        };
        r[c] = b("performanceAbsoluteNow")();
        if (a === "js") ha(c, d, f, e);
        else if (a === "async") ma(c, f);
        else if (a === "css") {
            if (d == null) {
                b("FBLogger")("bootloader").mustfix("name must be defined when loading CSS resource");
                return
            }
            a = q[d].crossOrigin;
            b("CSSLoader").loadStyleSheet(d, c, e, !!a, f, la(d, c, f))
        }
    }

    function ma(a, c) {
        __p && __p();
        var d = b("getAsyncParams")("GET");
        for (var e in d) {
            var f = encodeURIComponent(e),
                g = encodeURIComponent(String(d[e]));
            a += "&" + f + "=" + g
        }
        var h = b("getSameOriginTransport")();
        h.open("GET", a, !0);
        var i = b("TimeSlice").getGuardedContinuation("Bootloader _requestHastePayload");
        h.onreadystatechange = function() {
            h.readyState === 4 && i(function() {
                var d = h.status === 200 ? JSON.parse(b("CSRFGuard").clean(h.responseText)) : {};
                if (d == null) b("FBLogger")("bootloader").warn("Invalid response from %s: %s", a, h.responseText.substr(0, 256));
                else {
                    var e = na();
                    e(d, c)
                }
            })
        };
        h.send()
    }

    function na() {
        __p && __p();
        return b("TimeSlice").guard(function(a, c) {
            __p && __p();
            var d = a.jsmods,
                e = a.resource_map,
                f = a.bootloadable,
                g = a.ixData,
                i = a.bxData,
                j = a.gkxData,
                k = a.qexData;
            a = a.allResources;
            e && $.setResourceMap(e);
            g && h.add(g);
            i && b("bx").add(i);
            j && b("gkx").add(j);
            k && b("qex").add(k);
            f && $.enableBootload(f);
            $.loadResources(a || [], function() {
                new(b("ServerJS"))().handle(d || {}), c()
            })
        }, "Bootloader receiveEndpointData", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION
        })
    }

    function X(c, d, e, f) {
        __p && __p();
        var h = {},
            i = {},
            j = {},
            k = window.CavalryLogger && window.CavalryLogger.getInstance();
        c.forEach(function(a) {
            var c = q[a];
            if (!c) {
                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", a);
                return
            }
            c.nonblocking && !b("BootloaderConfig").assumeNotNonblocking ? j[a] = !0 : i[a] = !0;
            l[a] || (l[a] = !0, h[a] = c, k && k.measureResources({
                name: a,
                type: c.type
            }, e))
        });
        c = d;
        if (f) {
            var m = b("performanceAbsoluteNow")();
            c = function() {
                var a = Math.round(b("performanceAbsoluteNow")() - m),
                    c = Object.keys(i).length,
                    e = Object.keys(h);
                c = {
                    blocking_resources_downloaded: e.filter(function(a) {
                        return a in i
                    }).length,
                    blocking_resources_count: c,
                    all_resources_downloaded: e.length,
                    all_resources_count: c + Object.keys(j).length,
                    err_count: Object.values(h).filter(function(a) {
                        a = a.src;
                        return a in t
                    }).length
                };
                var g = b("TimeSlice").getContext();
                c = babelHelpers["extends"]({}, f, c, {
                    timeslice_context: g && g.name,
                    start_time: m,
                    duration: a,
                    will_request_hashes: e
                });
                C.inform(ea.BOOTLOAD, c, "persistent");
                d && d()
            }
        }
        if (b("cr:696703") && c) {
            var n = b("cr:696703").getCallbackScheduler(),
                o = c;
            c = function() {
                n(o)
            }
        } else if (a.ScheduleJSWork && c) {
            var p = c;
            c = function() {
                a.ScheduleJSWork(p)()
            }
        }
        c && B.registerCallback(c, Object.keys(i));
        var r = document.createDocumentFragment();
        Object.entries(h).forEach(function(a) {
            __p && __p();
            var c, d = a[0];
            a = a[1];
            var e = a.type;
            a = a.src;
            if (d === ((c = E) == null ? void 0 : c.key)) {
                if (D != null) return;
                var f = b("TimeSlice").getGuardedContinuation("Schedule async batch request: Bootloader._loadResources");
                D = b("setImmediateAcrossTransitions")(function() {
                    return f(function() {
                        D = null;
                        var a = E;
                        a != null || g(0, 11539);
                        a = (a = q[d]) == null ? void 0 : a.src;
                        a != null || g(0, 12736, d);
                        E = null;
                        W(e, a, d, R())
                    })
                })
            } else W(e, a, d, r)
        });
        R().appendChild(r)
    }

    function Y(a) {
        __p && __p();
        var c, d = a.getAttribute("data-bootloader-hash");
        if (!d) return;
        if (a.id) {
            if (z[a.id]) return;
            z[a.id] = !0
        }
        var e = a.tagName == "SCRIPT",
            f = e ? {
                src: a.src,
                type: "js"
            } : {
                src: a.href,
                type: "css"
            };
        a.crossOrigin && (f.crossOrigin = 1);
        a.getAttribute("data-nonblocking") && (f.nonblocking = 1);
        q[d] && b("FBLogger")("bootloader").warn("Duplicate resource [%s]: %s", d, f.src);
        q[d] = f;
        var g = function() {
            return $.done([d])
        };
        c = e ? !a.getAttribute("async") : ((c = a.parentNode) == null ? void 0 : c.tagName) === "HEAD";
        c || window._btldr && window._btldr[d] ? g() : (l[d] = !0, e ? ia(a, d, g) : b("CSSLoader").setupEventListeners(d, f.src, R(), g, la(d, f.src, g), a))
    }

    function oa() {
        if (y) return;
        y = !0;
        Array.from(document.getElementsByTagName("link")).forEach(function(a) {
            return Y(a)
        });
        Array.from(document.getElementsByTagName("script")).forEach(function(a) {
            return Y(a)
        })
    }
    var Z = {
            _insertSorted: function(a) {
                __p && __p();
                if (J.length === 0) {
                    J.push(a);
                    return
                }
                var b = 0,
                    c = J.length - 1,
                    d, e;
                while (b <= c) {
                    d = Math.floor((b + c) / 2);
                    e = J[d];
                    if (e.priority < a.priority) b = d + 1;
                    else if (e.priority > a.priority) c = d - 1;
                    else {
                        J.splice(d, 0, a);
                        return
                    }
                }
                J.splice(b, 0, a)
            },
            enqueuePreloadJob: function(a, b) {
                b === void 0 && (b = 1), !(a in m) && !(a in l) && !(a in K) && (K[a] = !0, Z._insertSorted({
                    hash: a,
                    priority: b
                }), Z.runPreloadQueue())
            },
            runPreloadQueue: function() {
                __p && __p();
                if (b("BootloaderConfig").preloader_preload_after_dd && !N || !M) return;
                var a = R(),
                    c = function() {
                        var b = J.pop(),
                            c = q[b.hash];
                        if (!c) return "continue";
                        !l[b.hash] && !m[b.hash] && (G[b.hash] = !0, ga(c.src, c.type, b.hash, a, function() {
                            M && (delete G[b.hash], Z.runPreloadQueue(), Z._enqueueScriptLoadingJob(b.hash, q[b.hash].type))
                        }))
                    };
                while (Z._isNetworkIdle() && J.length > 0 && Object.keys(G).length < ba) {
                    var d = c();
                    if (d === "continue") continue
                }
            },
            _enqueueScriptLoadingJob: function(a, b) {
                if (b === "css") return;
                l[a] || (I.push(a), Z._issueIdleCallback())
            },
            _runScriptLoadingQueue: function() {
                L = null;
                var a = function() {
                    var a = I.shift();
                    l[a] || (H[a] = !0, X([a], function() {
                        M && (delete H[a], Z._issueIdleCallback())
                    }))
                };
                while (I.length > 0 && Object.keys(H).length < F) a()
            },
            _issueIdleCallback: function() {
                I.length > 0 && Object.keys(H).length < F && !L && (L = b("requestIdleCallback")(Z._runScriptLoadingQueue))
            },
            _isNetworkIdle: function() {
                return Object.keys(r).length == 0
            }
        },
        $ = {
            preloadModules: function(a) {
                __p && __p();
                if (!A) {
                    var c = b("TimeSlice").getGuardedContinuation("Deferred: Bootloader.preloadModules");
                    j.push([a, c]);
                    return
                }
                c = document.createDocumentFragment();
                for (var a = a, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f, g;
                    if (d) {
                        if (e >= a.length) break;
                        g = a[e++]
                    } else {
                        e = a.next();
                        if (e.done) break;
                        g = e.value
                    }
                    g = g;
                    g = Q(g);
                    g = [g.r, ((f = g.rdfds) == null ? void 0 : f.r) || [], ((f = g.rds) == null ? void 0 : f.r) || []];
                    for (var f = 0; f < g.length; f++) {
                        var h = g[f];
                        for (var h = h, i = Array.isArray(h), k = 0, h = i ? h : h[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                            var n;
                            if (i) {
                                if (k >= h.length) break;
                                n = h[k++]
                            } else {
                                k = h.next();
                                if (k.done) break;
                                n = k.value
                            }
                            n = n;
                            var o = q[n];
                            if (!o) {
                                b("FBLogger")("bootloader").mustfix("Unable to resolve resource %s.", n);
                                continue
                            }
                            if (m[n] || l[n]) continue;
                            ga(o.src, o.type, n, c)
                        }
                    }
                }
                R().appendChild(c)
            },
            loadModules: function(a, c, e) {
                __p && __p();
                c === void 0 && (c = i);
                e === void 0 && (e = "loadModules: unknown caller");
                var f = function() {
                        return c.apply(void 0, arguments)
                    },
                    g = {
                        remove: function() {
                            c = i
                        }
                    };
                if (!A) {
                    var h = "Deferred: Bootloader.loadModules";
                    h = b("TimeSlice").getGuardedContinuation(h);
                    k.push([a, f, e, h]);
                    return g
                }
                var j = [],
                    l = [],
                    m = [],
                    n = [],
                    p = [],
                    r = [];
                h = !1;
                var s = 0,
                    t = b("performanceAbsoluteNow")();
                a.forEach(function(a) {
                    var c, d = Q(a);
                    d.be && (s++, a in o ? j.push(o[a]) : b("ifRequired").call(null, a, null, function() {
                        r.push(a)
                    }));
                    a in w || (h = !0, w[a] = t);
                    j.push.apply(j, d.r);
                    l.push.apply(l, ((c = d.rdfds) == null ? void 0 : c.r) || []);
                    m.push.apply(m, ((c = d.rds) == null ? void 0 : c.r) || []);
                    n.push.apply(n, ((c = d.rdfds) == null ? void 0 : c.m) || []);
                    p.push.apply(p, ((c = d.rds) == null ? void 0 : c.m) || [])
                });
                if (r.length > 0) {
                    var u = "async:" + aa++;
                    if (b("BootloaderConfig").shouldCoalesceModuleRequestsMadeInSameTick)
                        if (E == null) E = {
                            key: u,
                            modules: r
                        }, q[u] = {
                            src: S(r),
                            type: "async"
                        };
                        else {
                            var v;
                            u = E.key;
                            (v = E.modules).push.apply(v, r);
                            q[u].src = S(E.modules)
                        }
                    else q[u] = {
                        src: S(r),
                        type: "async"
                    };
                    j.push(u);
                    r.forEach(function(a) {
                        o[a] = u
                    })
                }
                b("ifRequired")("TimeSliceInteraction", function(b) {
                    b.informGlobally("Bootloader.loadResources").addSetAnnotation("requested_hashes", j).addSetAnnotation("rdfd_requested_hashes", l).addSetAnnotation("rd_requested_hashes", m).addStringAnnotation("bootloader_reference", e).addSetAnnotation("requested_components", a)
                });
                v = JSON.stringify([e, a]);
                var y = !1;
                v in x || (y = !0, x[v] = t);
                var z = null;
                y && (z = {
                    ref: e,
                    components: a,
                    has_new_component: h,
                    first_identical_request: y,
                    async_resources_count: s,
                    async_resources_downloaded: r.length
                });
                var C = "rsrcs:" + v;
                X(j, d.bind(null, a, function() {
                    f.apply(void 0, arguments), B.satisfyPersistentDependency(C)
                }), null, z);
                var D = "rdfds:" + v;
                X(l, function() {
                    B.registerCallback(d.bind(null, n, function() {
                        B.satisfyPersistentDependency(D)
                    }), [C])
                });
                X(m, function() {
                    B.registerCallback(d.bind(null, p, i), [D])
                });
                return g
            },
            loadResources: function(a, b, c) {
                oa(), X(a, b, c)
            },
            requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN: function(a) {
                W("js", a, null, R())
            },
            done: function(a, c) {
                c != null && (s[c] = b("performanceAbsoluteNow")() - r[c], delete r[c], Z.runPreloadQueue()), window.CavalryLogger && window.CavalryLogger.done_js(a), a.forEach(function(a) {
                    a != null && (l[a] = !0, B.satisfyPersistentDependency(a))
                })
            },
            pickupResourcesByIDs: function(a) {
                for (var b = 0; b < a.length; b++) Y(document.getElementById(a[b]))
            },
            enableBootload: function(a) {
                __p && __p();
                for (var b in a)
                    if (!n[b]) {
                        n[b] = a[b];
                        var c = Q(b);
                        if (M && c.p && c.p > 0) {
                            var d;
                            c = [c.r, ((d = c.rdfds) == null ? void 0 : d.r) || [], ((d = c.rds) == null ? void 0 : d.r) || []];
                            for (var d = 0; d < c.length; d++) {
                                var e = c[d];
                                for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                    var h;
                                    if (f) {
                                        if (g >= e.length) break;
                                        h = e[g++]
                                    } else {
                                        g = e.next();
                                        if (g.done) break;
                                        h = g.value
                                    }
                                    h = h;
                                    Z.enqueuePreloadJob(h, 1)
                                }
                            }
                        }
                    }
                A || (oa(), A = !0, k.forEach(function(a) {
                    var b = a[0],
                        c = a[1],
                        d = a[2];
                    a = a[3];
                    a(function() {
                        $.loadModules.apply($, [b, c, d])
                    })
                }), j.forEach(function(a) {
                    var b = a[0];
                    a = a[1];
                    a(function() {
                        $.preloadModules.apply($, [b])
                    })
                }), j = [], k = [])
            },
            setResourceMap: function(a) {
                for (var b in a) q[b] || (q[b] = a[b])
            },
            getURLToHashMap: function() {
                var a = {};
                for (var b in q) a[q[b].src] = b;
                return a
            },
            getArbiter: function() {
                return C
            },
            loadPredictedResourceMap: function(a, b) {
                $.setResourceMap(a), X(Object.keys(a), b)
            },
            getLoadingUrls: function() {
                var a = {},
                    c = b("performanceAbsoluteNow")();
                for (var d in r) a[d] = c - r[d];
                return a
            },
            getBootloadedComponents: function() {
                return w
            },
            getLoadedUrlTimes: function() {
                return s
            },
            getErrorUrls: function() {
                return Object.keys(t)
            },
            notifyDisplayDone: function() {
                N || (N = !0, Z.runPreloadQueue())
            },
            __debug: {
                callbackManager: B,
                componentMap: n,
                requested: l,
                resources: q,
                retries: u,
                errors: t,
                loading: r,
                bootloaded: w,
                preloader: Z
            },
            Events: ea
        };
    e.exports = $
}), null);
/**
 * License: https://www.facebook.com/legal/license/09P_rcHKL4D/
 */
__d("Alea", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g() {
        __p && __p();
        var a = 4022871197,
            b = function(b) {
                __p && __p();
                b = b.toString();
                for (var c = 0; c < b.length; c++) {
                    a += b.charCodeAt(c);
                    var d = .02519603282416938 * a;
                    a = d >>> 0;
                    d -= a;
                    d *= a;
                    a = d >>> 0;
                    d -= a;
                    a += d * 4294967296
                }
                return (a >>> 0) * 23283064365386963e-26
            };
        b.version = "Mash 0.9";
        return b
    }

    function a() {
        __p && __p();
        var a = 0,
            b = 0,
            c = 0,
            d = 1;
        for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
        var i = f.length > 0 ? f : [new Date()],
            j = new g();
        a = j(" ");
        b = j(" ");
        c = j(" ");
        for (var k = 0; k < i.length; k++) a -= j(i[k]), a < 0 && (a += 1), b -= j(i[k]), b < 0 && (b += 1), c -= j(i[k]), c < 0 && (c += 1);
        j = null;
        var l = function() {
            var e = 2091639 * a + d * 23283064365386963e-26;
            a = b;
            b = c;
            c = e - (d = e | 0);
            return c
        };
        l.version = "Alea 0.9";
        l.args = i;
        return l
    }
    e.exports = a
}), null);
__d("Random", ["Alea", "ServerNonce"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 4294967296;
    c = b("ServerNonce").ServerNonce;
    var h = b("Alea")(c),
        i = {
            random: function() {
                __p && __p();
                var b = a;
                b = b.Uint32Array;
                var c = a.crypto || a.msCrypto;
                try {
                    if (b != null && (c == null ? void 0 : c.getRandomValues) != null) {
                        b = new b(1);
                        c.getRandomValues(b);
                        return b[0] / g
                    }
                } catch (a) {}
                return h()
            },
            uint32: function() {
                return Math.floor(this.random() * g)
            },
            coinflip: function(a) {
                if (a === 0) return !1;
                return a <= 1 ? !0 : i.random() * a <= 1
            }
        };
    e.exports = i
}), null);
__d("performanceNow", ["performance"], (function(a, b, c, d, e, f) {
    b("performance").now ? a = function() {
        return b("performance").now()
    } : a = function() {
        return Date.now()
    };
    e.exports = a
}), null);
__d("Promise", ["TimeSlice", "ifRequired", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g() {}
    var h = null,
        i = {};

    function j(a) {
        try {
            return a.then
        } catch (a) {
            h = a;
            return i
        }
    }

    function k(a, b) {
        try {
            return a(b)
        } catch (a) {
            h = a;
            return i
        }
    }

    function l(a, b, c) {
        try {
            a(b, c)
        } catch (a) {
            h = a;
            return i
        }
    }

    function m(a) {
        __p && __p();
        if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
        if (typeof a !== "function") throw new TypeError("not a function");
        this._state = 0;
        this._value = null;
        this._deferreds = [];
        if (a === g) return;
        t(a, this)
    }
    m._noop = g;
    m.prototype.then = function(a, b) {
        if (this.constructor !== m) return n(this, a, b);
        var c = new m(g);
        o(this, new s(a, b, c));
        return c
    };

    function n(a, b, c) {
        return new a.constructor(function(d, e) {
            var f = new m(g);
            f.then(d, e);
            o(a, new s(b, c, f))
        })
    }

    function o(a, c) {
        __p && __p();
        while (a._state === 3) a = a._value;
        if (a._state === 0) {
            a._deferreds.push(c);
            return
        }
        b("setImmediateAcrossTransitions")(function() {
            var b = a._state === 1 ? c.onFulfilled : c.onRejected;
            if (b === null) {
                c.continuation(function() {});
                a._state === 1 ? p(c.promise, a._value) : q(c.promise, a._value);
                return
            }
            b = k(c.continuation.bind(null, b), a._value);
            b === i ? q(c.promise, h) : p(c.promise, b)
        })
    }

    function p(a, b) {
        __p && __p();
        if (b === a) return q(a, new TypeError("A promise cannot be resolved with itself."));
        if (b && (typeof b === "object" || typeof b === "function")) {
            var c = j(b);
            if (c === i) return q(a, h);
            if (c === a.then && b instanceof m) {
                a._state = 3;
                a._value = b;
                r(a);
                return
            } else if (typeof c === "function") {
                t(c.bind(b), a);
                return
            }
        }
        a._state = 1;
        a._value = b;
        r(a)
    }

    function q(a, b) {
        a._state = 2, a._value = b, r(a)
    }

    function r(a) {
        for (var b = 0; b < a._deferreds.length; b++) o(a, a._deferreds[b]);
        a._deferreds = null
    }

    function s(a, c, d) {
        var e = this;
        this.onFulfilled = typeof a === "function" ? a : null;
        this.onRejected = typeof c === "function" ? c : null;
        this.continuation = b("TimeSlice").getGuardedContinuation("Promise Handler");
        b("ifRequired")("JSTracing", function(a) {
            e.continuation = a.wrap(e.continuation)
        });
        this.promise = d
    }

    function t(a, b) {
        __p && __p();
        var c = !1;
        a = l(a, function(a) {
            if (c) return;
            c = !0;
            p(b, a)
        }, function(a) {
            if (c) return;
            c = !0;
            q(b, a)
        });
        !c && a === i && (c = !0, q(b, h))
    }
    m.prototype.done = function(a, c) {
        var d = new Error("Promise.done"),
            e = arguments.length ? this.then.apply(this, arguments) : this;
        e.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    d.message = "" + a;
                    throw d
                }
            }, 0)
        })
    };
    var u = A(!0),
        v = A(!1),
        w = A(null),
        x = A(void 0),
        y = A(0),
        z = A("");

    function A(a) {
        var b = new m(m._noop);
        b._state = 1;
        b._value = a;
        return b
    }
    m.resolve = function(a) {
        __p && __p();
        if (a instanceof m) return a;
        if (a === null) return w;
        if (a === void 0) return x;
        if (a === !0) return u;
        if (a === !1) return v;
        if (a === 0) return y;
        if (a === "") return z;
        if (typeof a === "object" || typeof a === "function") try {
            var b = a.then;
            if (typeof b === "function") return new m(b.bind(a))
        } catch (a) {
            return new m(function(b, c) {
                c(a)
            })
        }
        return A(a)
    };
    m.all = function(a) {
        __p && __p();
        Array.isArray(a) || (a = [new m(function() {
            throw new TypeError("Promise.all must be passed an iterable.")
        })]);
        var b = Array.prototype.slice.call(a);
        return new m(function(a, c) {
            __p && __p();
            if (b.length === 0) return a([]);
            var d = b.length;

            function e(f, g) {
                __p && __p();
                if (g && (typeof g === "object" || typeof g === "function"))
                    if (g instanceof m && g.then === m.prototype.then) {
                        while (g._state === 3) g = g._value;
                        if (g._state === 1) return e(f, g._value);
                        g._state === 2 && c(g._value);
                        g.then(function(a) {
                            e(f, a)
                        }, c);
                        return
                    } else {
                        var h = g.then;
                        if (typeof h === "function") {
                            h = new m(h.bind(g));
                            h.then(function(a) {
                                e(f, a)
                            }, c);
                            return
                        }
                    }
                b[f] = g;
                --d === 0 && a(b)
            }
            for (var f = 0; f < b.length; f++) e(f, b[f])
        })
    };
    m.reject = function(a) {
        return new m(function(b, c) {
            c(a)
        })
    };
    m.race = function(a) {
        return new m(function(b, c) {
            a.forEach(function(a) {
                m.resolve(a).then(b, c)
            })
        })
    };
    m.prototype["catch"] = function(a) {
        return this.then(null, a)
    };
    m.prototype["finally"] = function(a) {
        return this.then(function(b) {
            return m.resolve(a()).then(function() {
                return b
            })
        }, function(b) {
            return m.resolve(a()).then(function() {
                throw b
            })
        })
    };
    e.exports = m
}), null);
__d("promiseDone", ["TAAL", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c, d) {
        var e = new Error("promiseDone"),
            f = arguments.length > 1 ? a.then(c, d) : a;
        f.then(null, function(a) {
            b("setTimeoutAcrossTransitions")(function() {
                if (a instanceof Error) throw a;
                else {
                    e.message = b("TAAL").blameToPreviousFile(a);
                    throw e
                }
            }, 0)
        })
    }
    e.exports = a
}), null);
__d("RequireDeferredReference", ["Promise", "Bootloader", "ifRequired", "promiseDone", "requireWeak"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = function(a) {
        return a
    };
    a = function() {
        __p && __p();

        function a(a) {
            this.$1 = a
        }
        var c = a.prototype;
        c.getModuleId = function() {
            var a = this.$1;
            return a
        };
        c.getModuleIdAsRef = function() {
            return this.$1
        };
        c.preload = function() {};
        c.getModuleIfRequired = function() {
            return b("ifRequired").call(null, this.$1, g)
        };
        c.load = function() {
            var a = this;
            return new(b("Promise"))(function(c) {
                b("requireWeak").call(null, a.getModuleId(), c)
            })
        };
        c.loadImmediately = function(a) {
            return b("Bootloader").loadModules.call(b("Bootloader"), [this.getModuleId()], a, "RequireDeferredReference.loadImmediately()")
        };
        c.onReady = function(a) {
            var c = !1;
            b("promiseDone")(this.load(), function() {
                c || a.apply(void 0, arguments)
            });
            return {
                remove: function() {
                    c = !0
                }
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("requireDeferred", ["RequireDeferredReference"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return new(b("RequireDeferredReference"))(a)
    }
    e.exports = a
}), null);
__d("CookieStore", ["CookieCoreLoggingConfig", "FBLogger", "Random", "gkx", "performanceNow", "requireDeferred"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("requireDeferred")("BanzaiScuba");

    function h(a, b, c, d, e, f, g) {
        return b + "=" + encodeURIComponent(c) + "; " + (f !== 0 && f != void 0 ? "expires=" + new Date(a + f).toUTCString() + "; " : "") + "path=" + d + "; domain=" + e + (g ? "; secure" : "")
    }

    function i(a, b, c) {
        return a + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=" + b + "; domain=" + c
    }

    function j() {
        if (b("CookieCoreLoggingConfig").sampleRate > 0) {
            var a = b("performanceNow")(),
                c = document.cookie;
            a = b("performanceNow")() - a;
            var d = a > b("CookieCoreLoggingConfig").maximumIgnorableStallMs && b("Random").coinflip(1 / b("CookieCoreLoggingConfig").sampleRate);
            d && b("FBLogger")("cookie_infra").addMetadata("COOKIE_INFRA", "WALL_TIME", String(a)).warn("Cookie read exceeded %s milliseconds.", b("CookieCoreLoggingConfig").maximumIgnorableStallMs);
            return c
        } else return document.cookie
    }
    var k = function() {
        __p && __p();

        function a() {
            this.$1 = 0
        }
        var c = a.prototype;
        c.setCookie = function(a, b, c, d, e, f, g) {
            document.cookie = h(a, b, c, d, e, f, g)
        };
        c.clearCookie = function(a, b, c) {
            document.cookie = i(a, b, c)
        };
        c.getCookie = function(a) {
            this.$1++;
            var c = b("performanceNow")();
            a = j().match("(?:^|;\\s*)" + a + "=(.*?)(?:;|$)");
            c = b("performanceNow")() - c;
            var d = 1 / b("CookieCoreLoggingConfig").sampleRateClassic,
                e = b("Random").coinflip(d);
            e && l(d, "classic", c, this.$1);
            return a ? decodeURIComponent(a[1]) : null
        };
        return a
    }();

    function l(a, b, c, d, e, f) {
        g.onReady(function(g) {
            g = new g("cookie_perf", null, {
                addBrowserFields: !0
            });
            g.addInteger("sample_rate", Math.floor(a));
            g.addNormal("type", b);
            g.addInteger("duration_usec", c * 1e3);
            g.addInteger("reads", d);
            typeof e === "number" && g.addInteger("misses", e);
            typeof f === "boolean" && g.addNormal("hit", f);
            g.post()
        })
    }
    var m = 10 * 1e3,
        n = function() {
            __p && __p();

            function a() {
                this.$1 = {}, this.$2 = 0, this.$3 = 0, this.$4 = 0
            }
            var c = a.prototype;
            c.setCookie = function(a, b, c, d, e, f, g) {
                document.cookie = h(a, b, c, d, e, f, g), this.$1[b] = {
                    value: c,
                    updated: a
                }
            };
            c.clearCookie = function(a, b, c) {
                document.cookie = i(a, b, c), this.$1[a] = {
                    value: null,
                    updated: Date.now()
                }
            };
            c.getCookie = function(a) {
                __p && __p();
                var c = b("performanceNow")();
                a = this.$5(a);
                var d = a.cookie;
                a = a.hit;
                var e = 1 / b("CookieCoreLoggingConfig").sampleRateFastStale,
                    f = b("Random").coinflip(e);
                if (f) {
                    f = b("performanceNow")() - c;
                    l(e, "fast_stale", f, this.$3, this.$4, a)
                }
                return d
            };
            c.$5 = function(a) {
                __p && __p();
                var b = Date.now(),
                    c = this.$1[a];
                if (!c) {
                    if (this.$2 + m < b) {
                        this.$6();
                        return {
                            cookie: this.$5(a).cookie,
                            hit: !1
                        }
                    }
                    this.$3++;
                    return {
                        cookie: null,
                        hit: !0
                    }
                }
                if (c.updated + m < b) {
                    this.$6();
                    return {
                        cookie: this.$5(a).cookie,
                        hit: !1
                    }
                }
                this.$3++;
                return {
                    cookie: c.value,
                    hit: !0
                }
            };
            c.$6 = function() {
                __p && __p();
                this.$4++;
                var a = j().split(";");
                this.$2 = Date.now();
                this.$1 = {};
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d = d.match("\\s*([^=]+)=(.*)");
                    if (!d) continue;
                    this.$1[d[1]] = {
                        value: decodeURIComponent(d[2]),
                        updated: this.$2
                    }
                }
            };
            return a
        }();
    e.exports = {
        newCookieStore: function() {
            return b("gkx")("676837") ? new n() : new k()
        },
        CookieCacheForTest: n,
        CookieStoreSlowForTest: k
    }
}), null);
__d("CookieCore", ["CookieCoreConfig", "CookieStore"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /^.*(\.(facebook|messenger|oculus|instagram|facebookcorewwwi|workplace)\..*)$/i,
        h = /_js_(.*)/,
        i;

    function j() {
        i || (i = b("CookieStore").newCookieStore());
        return i
    }

    function k(a) {
        return window.self != window.top ? !1 : !0
    }
    var l = {
        set: function(a, b) {
            if (!o(a)) return;
            l.setWithoutChecks(a, b, q(a), r(a), p(a))
        },
        setWithoutChecks: function(a, b, c, d, e) {
            var f = Date.now();
            if (c != null)
                if (c > f) c -= f;
                else if (c == 1) {
                l.clear(a, d);
                return
            }
            j().setCookie(f, a, b, d, window.location.hostname.replace(g, "$1"), c, e)
        },
        setIfFirstPartyContext: function(a, b) {
            if (!k(a)) return;
            l.set(a, b)
        },
        setWithoutChecksIfFirstPartyContext: function(a, b, c, d, e) {
            if (!k(a)) return;
            l.setWithoutChecks(a, b, c, d, e)
        },
        clear: function(a, b) {
            b === void 0 && (b = "/"), b = b || "/", j().clearCookie(a, b, window.location.hostname.replace(g, "$1"))
        },
        get: function(a) {
            return !o(a) ? null : j().getCookie(a)
        }
    };

    function m(a) {
        return {
            insecure: a.i || !1,
            path: a.p || "/",
            ttlSeconds: a.t || 0
        }
    }

    function n(a) {
        if (b("CookieCoreConfig")[a] !== void 0) return m(b("CookieCoreConfig")[a]);
        a = a.match(h);
        return a && a.length > 1 ? n(a[1]) : null
    }

    function o(a) {
        return n(a) !== null
    }

    function p(a) {
        a = n(a);
        return a == null ? !0 : !a.insecure
    }

    function q(a) {
        a = n(a);
        return a == null ? null : a.ttlSeconds * 1e3
    }

    function r(a) {
        a = n(a);
        return a == null ? "/" : a.path
    }
    e.exports = l
}), null);
__d("Cookie", ["Bootloader", "CookieCore", "Env"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        if (b("Env").defer_cookies == !0) {
            b("Bootloader").loadModules(["BanzaiODS"], function(b) {
                b.bumpEntityKey("defer_cookies", "set." + a)
            }, "Cookie");
            return !1
        }
        return !0
    }

    function h() {
        return !b("Env").no_cookies
    }

    function a(a, c) {
        if (!h() || !g(a)) return;
        b("CookieCore").set(a, c)
    }

    function c(a, c) {
        if (!h()) return;
        b("CookieCore").set(a, c)
    }

    function d(a, c, d, e, f) {
        if (!h() || !g(a)) return;
        b("CookieCore").setWithoutChecks(a, c, d, e, f)
    }
    e.exports = babelHelpers["extends"]({}, b("CookieCore"), {
        set: a,
        setWithoutChecks: d,
        setWithoutCheckingUserConsent_DANGEROUS: c
    })
}), null);
__d("DOMEvent", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.event = a || window.event, typeof this.event.srcElement !== "unknown" || g(0, 5798), this.target = this.event.target || this.event.srcElement
        }
        var b = a.prototype;
        b.preventDefault = function() {
            var a = this.event;
            a.preventDefault ? (a.preventDefault(), "defaultPrevented" in a || (a.defaultPrevented = !0)) : a.returnValue = !1;
            return this
        };
        b.isDefaultPrevented = function() {
            var a = this.event;
            return "defaultPrevented" in a ? a.defaultPrevented : a.returnValue === !1
        };
        b.stopPropagation = function() {
            var a = this.event;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        };
        b.kill = function() {
            this.stopPropagation().preventDefault();
            return this
        };
        a.killThenCall = function(b) {
            return function(c) {
                new a(c).kill();
                return b()
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("dedupString", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b;
        return Object.keys((b = {}, b[a] = 0, b))[0]
    }
    e.exports = a
}), null);
__d("wrapFunction", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    a = function(a, b, c) {
        return function() {
            var d = b in g ? g[b](a, c) : a;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            return d.apply(this, f)
        }
    };
    a.setWrapper = function(a, b) {
        g[b] = a
    };
    e.exports = a
}), null);
__d("DOMEventListener", ["invariant", "dedupString", "emptyFunction", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = !1;
    try {
        a = Object.defineProperty({}, "passive", {
            get: function() {
                h = !0
            }
        });
        window.addEventListener("test", null, a)
    } catch (a) {}
    var i, j;
    window.addEventListener ? (i = function(a, c, d, e) {
        e === void 0 && (e = !1), d.wrapper = b("wrapFunction")(d, "entry", b("dedupString")("DOMEventListener.add " + c)), a.addEventListener(c, d.wrapper, h ? e : !1)
    }, j = function(a, b, c, d) {
        d === void 0 && (d = !1), a.removeEventListener(b, c.wrapper, h ? d : !1)
    }) : window.attachEvent ? (i = function(a, c, d, e) {
        e === void 0, d.wrapper = b("wrapFunction")(d, "entry", "DOMEventListener.add " + c), a.attachEvent || g(0, 2798), a.attachEvent("on" + c, d.wrapper)
    }, j = function(a, b, c, d) {
        d === void 0, a.detachEvent || g(0, 2799), a.detachEvent("on" + b, c.wrapper)
    }) : j = i = b("emptyFunction");
    c = {
        add: function(a, b, c, d) {
            d === void 0 && (d = !1);
            i(a, b, c, d);
            return {
                remove: function() {
                    j(a, b, c, d)
                }
            }
        },
        remove: j
    };
    e.exports = c
}), null);
__d("isNode", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = a ? a.ownerDocument || a : document;
        b = b.defaultView || window;
        return !!(a && (typeof b.Node === "function" ? a instanceof b.Node : typeof a === "object" && typeof a.nodeType === "number" && typeof a.nodeName === "string"))
    }
    e.exports = a
}), null);
__d("isTextNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 3
    }
    e.exports = a
}), null);
__d("containsNode", ["isTextNode"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, c) {
        __p && __p();
        if (!a || !c) return !1;
        else if (a === c) return !0;
        else if (b("isTextNode")(a)) return !1;
        else if (b("isTextNode")(c)) return g(a, c.parentNode);
        else if ("contains" in a) return a.contains(c);
        else if (a.compareDocumentPosition) return !!(a.compareDocumentPosition(c) & 16);
        else return !1
    }
    e.exports = g
}), null);
__d("createArrayFromMixed", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a) {
        __p && __p();
        var b = a.length;
        !Array.isArray(a) && (typeof a === "object" || typeof a === "function") || g(0, 3914);
        typeof b === "number" || g(0, 3915);
        b === 0 || b - 1 in a || g(0, 3916);
        typeof a.callee !== "function" || g(0, 3917);
        if (a.hasOwnProperty) try {
            return Array.prototype.slice.call(a)
        } catch (a) {}
        var c = Array(b);
        for (var d = 0; d < b; d++) c[d] = a[d];
        return c
    }

    function i(a) {
        return !!a && (typeof a === "object" || typeof a === "function") && "length" in a && !("setInterval" in a) && typeof a.nodeType !== "number" && (Array.isArray(a) || "callee" in a || "item" in a)
    }

    function a(a) {
        if (!i(a)) return [a];
        else if (Array.isArray(a)) return a.slice();
        else return h(a)
    }
    e.exports = a
}), null);
__d("isElementNode", ["isNode"], (function(a, b, c, d, e, f) {
    function a(a) {
        return b("isNode")(a) && a.nodeType == 1
    }
    e.exports = a
}), null);
__d("DOMQuery", ["CSS", "FBLogger", "containsNode", "createArrayFromMixed", "createObjectFrom", "ge", "ifRequired", "isElementNode", "isNode"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /^\.-?[_a-zA-Z]+[\w-]*$/;

    function h(a, b) {
        return a.hasAttribute ? a.hasAttribute(b) : a.getAttribute(b) !== null
    }
    var i = {
        find: function(a, b) {
            a = i.scry(a, b);
            return a[0]
        },
        findPushSafe: function(a, b, c) {
            b = i.scry(a, b);
            a = i.scry(a, c);
            b.length === 1 && a.length === 1 && b[0] === a[0] ? c = b : c = b.concat(a);
            return c[0]
        },
        scry: function(a, c) {
            __p && __p();
            if (!a || !a.getElementsByTagName) return [];
            c = c.split(" ");
            var d = [a];
            for (var e = 0; e < c.length; e++) {
                if (d.length === 0) break;
                if (c[e] === "") continue;
                var f = c[e],
                    i = c[e],
                    j = [],
                    k = !1;
                if (f.charAt(0) == "^")
                    if (e === 0) k = !0, f = f.slice(1);
                    else return [];
                f = f.replace(/\[(?:[^=\]]*=(?:\"[^\"]*\"|\'[^\']*\'))?|[.#]/g, " $&");
                f = f.split(" ");
                var l = f[0] || "*",
                    m = l == "*",
                    n = f[1] && f[1].charAt(0) == "#";
                if (n) {
                    n = b("ge")(f[1].slice(1), a, l);
                    if (n && (m || n.tagName.toLowerCase() == l))
                        for (var o = 0; o < d.length; o++)
                            if (k && b("containsNode")(n, d[o])) {
                                j = [n];
                                break
                            } else if (document == d[o] || b("containsNode")(d[o], n) && d[o] !== n) {
                        j = [n];
                        break
                    }
                } else {
                    n = [];
                    o = d.length;
                    var p, q = !k && i.indexOf("[") < 0 && document.querySelectorAll;
                    for (var r = 0; r < o; r++) {
                        if (k) {
                            p = [];
                            var s = d[r].parentNode;
                            while (b("isElementNode")(s))(m || s.tagName.toLowerCase() == l) && p.push(s), s = s.parentNode
                        } else q ? g.test(i) ? p = d[r].getElementsByClassName(i.substring(1)) : p = d[r].querySelectorAll(i) : p = d[r].getElementsByTagName(l);
                        s = p.length;
                        for (var t = 0; t < s; t++) n.push(p[t])
                    }
                    if (!q)
                        for (var p = 1; p < f.length; p++) {
                            s = f[p];
                            t = s.charAt(0) == ".";
                            m = s.substring(1);
                            for (r = 0; r < n.length; r++) {
                                o = n[r];
                                if (!o || o.nodeType !== 1) continue;
                                if (t) {
                                    b("CSS").hasClass(o, m) || delete n[r];
                                    continue
                                } else {
                                    i = s.slice(1, s.length - 1);
                                    l = i.indexOf("=");
                                    if (l < 0) {
                                        if (!h(o, i)) {
                                            delete n[r];
                                            continue
                                        }
                                    } else {
                                        q = i.substr(0, l);
                                        i = i.substr(l + 1);
                                        i = i.slice(1, i.length - 1);
                                        if (o.getAttribute(q) != i) {
                                            delete n[r];
                                            continue
                                        }
                                    }
                                }
                            }
                        }
                    for (r = 0; r < n.length; r++)
                        if (n[r]) {
                            j.push(n[r]);
                            if (k) break
                        }
                }
                d = j
            }
            return d
        },
        getSelection: function() {
            var a = window.getSelection;
            if (a) return a() + "";
            else {
                a = document.selection;
                if (a) return a.createRange().text
            }
            return null
        },
        contains: function(a, c) {
            (typeof a === "string" || typeof c === "string") && b("FBLogger")("dom_query").info("Support for node IDs is deprecated. Use containsNode(ge(<id1>), ge(<id2>)) instead");
            return b("containsNode")(b("ge")(a), b("ge")(c))
        },
        getRootElement: function() {
            var a = b("ifRequired")("Quickling", function(a) {
                return a.isActive() ? b("ge")("content") : null
            });
            return a || document.body
        },
        isNodeOfType: function(a, c) {
            c = b("createArrayFromMixed")(c).join("|").toUpperCase().split("|");
            c = b("createObjectFrom")(c);
            return b("isNode")(a) && a.nodeName in c
        },
        isInputNode: function(a) {
            return i.isNodeOfType(a, ["input", "textarea"]) || a.contentEditable === "true"
        }
    };
    e.exports = i
}), null);
__d("DataStore", ["DataStoreConfig", "isEmpty"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("DataStoreConfig").useExpando,
        h = {},
        i = 1;

    function j(a) {
        if (typeof a === "string") return "str_" + a;
        else return "elem_" + (a.__FB_TOKEN || (a.__FB_TOKEN = [i++]))[0]
    }

    function k(a) {
        if (g && typeof a === "object") return a.__FB_STORE || (a.__FB_STORE = {});
        a = j(a);
        return h[a] || (h[a] = {})
    }
    var l = {
        set: function(a, b, c) {
            if (!a) throw new TypeError("DataStore.set: namespace is required, got " + typeof a);
            var d = k(a);
            d[b] = c;
            return a
        },
        get: function(a, b, c) {
            __p && __p();
            if (!a) throw new TypeError("DataStore.get: namespace is required, got " + typeof a);
            var d = k(a),
                e = d[b];
            if (typeof e === "undefined" && a.getAttribute)
                if (a.hasAttribute && !a.hasAttribute("data-" + b)) e = void 0;
                else {
                    a = a.getAttribute("data-" + b);
                    e = null === a ? void 0 : a
                }
            c !== void 0 && e === void 0 && (e = d[b] = c);
            return e
        },
        remove: function(a, c) {
            if (!a) throw new TypeError("DataStore.remove: namespace is required, got " + typeof a);
            var d = k(a),
                e = d[c];
            delete d[c];
            b("isEmpty")(d) && l.purge(a);
            return e
        },
        purge: function(a) {
            g && typeof a === "object" ? delete a.__FB_STORE : delete h[j(a)]
        },
        _storage: h
    };
    e.exports = l
}), null);
__d("EventProfiler", ["requireCond", "cr:708886"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:708886")
}), null);
__d("Scroll", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, b) {
        return !!b && (a === b.documentElement || a === b.body)
    }
    a = {
        getTop: function(a) {
            var b = a.ownerDocument;
            return g(a, b) ? b.body.scrollTop || b.documentElement.scrollTop : a.scrollTop
        },
        setTop: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? c.body.scrollTop = c.documentElement.scrollTop = b : a.scrollTop = b
        },
        getLeft: function(a) {
            var b = a.ownerDocument;
            return g(a, b) ? b.body.scrollLeft || b.documentElement.scrollLeft : a.scrollLeft
        },
        setLeft: function(a, b) {
            var c = a.ownerDocument;
            g(a, c) ? c.body.scrollLeft = c.documentElement.scrollLeft = b : a.scrollLeft = b
        }
    };
    e.exports = a
}), null);
__d("VersionRange", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = /\./,
        i = /\|\|/,
        j = /\s+\-\s+/,
        k = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
        l = /^(\d*)(.*)/;

    function m(a, b) {
        var c = a.split(i);
        if (c.length > 1) return c.some(function(a) {
            return D.contains(a, b)
        });
        else {
            a = c[0].trim();
            return n(a, b)
        }
    }

    function n(a, b) {
        a = a.split(j);
        a.length > 0 && a.length <= 2 || g(0, 3072);
        if (a.length === 1) return o(a[0], b);
        else {
            var c = a[0];
            a = a[1];
            x(c) && x(a) || g(0, 3073);
            return o(">=" + c, b) && o("<=" + a, b)
        }
    }

    function o(a, b) {
        __p && __p();
        a = a.trim();
        if (a === "") return !0;
        b = b.split(h);
        a = v(a);
        var c = a.modifier;
        a = a.rangeComponents;
        switch (c) {
            case "<":
                return p(b, a);
            case "<=":
                return q(b, a);
            case ">=":
                return s(b, a);
            case ">":
                return t(b, a);
            case "~":
            case "~>":
                return u(b, a);
            default:
                return r(b, a)
        }
    }

    function p(a, b) {
        return C(a, b) === -1
    }

    function q(a, b) {
        a = C(a, b);
        return a === -1 || a === 0
    }

    function r(a, b) {
        return C(a, b) === 0
    }

    function s(a, b) {
        a = C(a, b);
        return a === 1 || a === 0
    }

    function t(a, b) {
        return C(a, b) === 1
    }

    function u(a, b) {
        var c = b.slice();
        b = b.slice();
        b.length > 1 && b.pop();
        var d = b.length - 1,
            e = parseInt(b[d], 10);
        w(e) && (b[d] = e + 1 + "");
        return s(a, c) && p(a, b)
    }

    function v(a) {
        a = a.split(h);
        var b = a[0].match(k);
        b || g(0, 3074);
        return {
            modifier: b[1],
            rangeComponents: [b[2]].concat(a.slice(1))
        }
    }

    function w(a) {
        return !isNaN(a) && isFinite(a)
    }

    function x(a) {
        return !v(a).modifier
    }

    function y(a, b) {
        for (var c = a.length; c < b; c++) a[c] = "0"
    }

    function z(a, b) {
        __p && __p();
        a = a.slice();
        b = b.slice();
        y(a, b.length);
        for (var c = 0; c < b.length; c++) {
            var d = b[c].match(/^[x*]$/i);
            if (d) {
                b[c] = a[c] = "0";
                if (d[0] === "*" && c === b.length - 1)
                    for (var d = c; d < a.length; d++) a[d] = "0"
            }
        }
        y(b, a.length);
        return [a, b]
    }

    function A(a, b) {
        var c = a.match(l)[1],
            d = b.match(l)[1];
        c = parseInt(c, 10);
        d = parseInt(d, 10);
        if (w(c) && w(d) && c !== d) return B(c, d);
        else return B(a, b)
    }

    function B(a, b) {
        typeof a === typeof b || g(0, 3075);
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0
    }

    function C(a, b) {
        a = z(a, b);
        b = a[0];
        a = a[1];
        for (var c = 0; c < a.length; c++) {
            var d = A(b[c], a[c]);
            if (d) return d
        }
        return 0
    }
    var D = {
        contains: function(a, b) {
            return m(a.trim(), b.trim())
        }
    };
    e.exports = D
}), null);
__d("mapObject", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Object.prototype.hasOwnProperty;

    function h(a, b, c) {
        if (!a) return null;
        var d = {};
        for (var e in a) {
            var f = e;
            g.call(a, f) && (d[f] = b.call(c, a[f], f, a))
        }
        return d
    }

    function a(a, b, c) {
        return h(a, b, c)
    }

    function b(a, b, c) {
        return h(a, b, c)
    }
    h.untyped = a;
    h.shape = b;
    e.exports = h
}), null);
__d("memoizeStringOnly", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = {};
        return function(c) {
            Object.prototype.hasOwnProperty.call(b, c) || (b[c] = a.call(this, c));
            return b[c]
        }
    }
    e.exports = a
}), null);
__d("UserAgent", ["UserAgentData", "VersionRange", "mapObject", "memoizeStringOnly"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a, c, d, e) {
        __p && __p();
        if (a === d) return !0;
        if (!d.startsWith(a)) return !1;
        d = d.slice(a.length);
        if (c) {
            d = e ? e(d) : d;
            return b("VersionRange").contains(d, c)
        }
        return !1
    }

    function h(a) {
        return b("UserAgentData").platformName === "Windows" ? a.replace(/^\s*NT/, "") : a
    }
    a = {
        isBrowser: function(a) {
            return g(b("UserAgentData").browserName, b("UserAgentData").browserFullVersion, a)
        },
        isBrowserArchitecture: function(a) {
            return g(b("UserAgentData").browserArchitecture, null, a)
        },
        isDevice: function(a) {
            return g(b("UserAgentData").deviceName, null, a)
        },
        isEngine: function(a) {
            return g(b("UserAgentData").engineName, b("UserAgentData").engineVersion, a)
        },
        isPlatform: function(a) {
            return g(b("UserAgentData").platformName, b("UserAgentData").platformFullVersion, a, h)
        },
        isPlatformArchitecture: function(a) {
            return g(b("UserAgentData").platformArchitecture, null, a)
        }
    };
    e.exports = b("mapObject")(a, b("memoizeStringOnly"))
}), null);
__d("clickRefAction", ["Arbiter"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(b, a, c, d, e) {
        var f = b + "/" + a;
        this.ue = f;
        this._ue_ts = b;
        this._ue_count = a;
        this._context = c;
        this._ns = null;
        this._node = d;
        this._type = e
    }
    g.prototype.set_namespace = function(a) {
        this._ns = a;
        return this
    };
    g.prototype.coalesce_namespace = function(a) {
        this._ns === null && (this._ns = a);
        return this
    };
    g.prototype.add_event = function() {
        return this
    };
    var h = 0,
        i = [],
        j = Date.now() + 6e4;

    function c(a, c, d, e, f) {
        __p && __p();
        var k = Date.now(),
            l = d && d.type;
        f = f || {};
        !c && d && (c = d.getTarget());
        var m = 50;
        if (c && e != "FORCE")
            for (var n = i.length - 1; n >= 0 && k - i[n]._ue_ts < m; --n)
                if (i[n]._node == c && i[n]._type == l) return i[n];
        n = new g(k, h, a, c, l);
        i.push(n);
        while (i[0]._ue_ts + m < k || i.length > 10) i.shift();
        l = k < j ? "persistent" : "event";
        a == "contextmenu" ? b("Arbiter").inform("ClickRefAction/contextmenu", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : a == "middleclick" ? b("Arbiter").inform("ClickRefAction/middleclick", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l) : b("Arbiter").inform("ClickRefAction/new", {
            cfa: n,
            node: c,
            mode: e,
            event: d,
            extra_data: f
        }, l);
        h++;
        return n
    }
    e.exports = a.clickRefAction = c
}), null);
__d("getDocumentScrollElement", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof navigator !== "undefined" && navigator.userAgent.indexOf("AppleWebKit") > -1;

    function a(a) {
        a = a || document;
        return a.scrollingElement ? a.scrollingElement : !g && a.compatMode === "CSS1Compat" ? a.documentElement : a.body
    }
    e.exports = a
}), null);
__d("getObjectValues", [], (function(a, b, c, d, e, f) {
    function a(a) {
        var b = [];
        for (var c in a) b.push(a[c]);
        return b
    }
    e.exports = a
}), null);
__d("Event", ["invariant", "Arbiter", "DataStore", "DOMEvent", "DOMEventListener", "DOMQuery", "ErrorUtils", "EventProfiler", "ExecutionEnvironment", "FBLogger", "Parent", "Scroll", "TAAL", "TimeSlice", "UserAgent", "$", "clickRefAction", "dedupString", "getDocumentScrollElement", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = a.Event,
        i = "Event.listeners";
    h.prototype || (h.prototype = {});

    function j(a) {
        (a.type === "click" || a.type === "mouseover" || a.type === "keydown") && b("Arbiter").inform("Event/stop", {
            event: a
        })
    }

    function k(a, b, c) {
        this.target = a, this.type = b, this.data = c
    }
    Object.assign(k.prototype, {
        getData: function() {
            this.data = this.data || {};
            return this.data
        },
        stop: function() {
            return h.stop(this)
        },
        prevent: function() {
            return h.prevent(this)
        },
        isDefaultPrevented: function() {
            return h.isDefaultPrevented(this)
        },
        kill: function() {
            return h.kill(this)
        },
        getTarget: function() {
            return new(b("DOMEvent"))(this).target || null
        }
    });

    function l(a) {
        if (a instanceof k) return a;
        a || (!window.addEventListener && document.createEventObject ? a = window.event ? document.createEventObject(window.event) : {} : a = {});
        if (!a._inherits_from_prototype)
            for (var b in h.prototype) try {
                a[b] = h.prototype[b]
            } catch (a) {}
        return a
    }
    Object.assign(h.prototype, {
        _inherits_from_prototype: !0,
        getRelatedTarget: function() {
            var a = this.relatedTarget || (this.fromElement === this.srcElement ? this.toElement : this.fromElement);
            return a && a.nodeType ? a : null
        },
        getModifiers: function() {
            var a = {
                control: !!this.ctrlKey,
                shift: !!this.shiftKey,
                alt: !!this.altKey,
                meta: !!this.metaKey
            };
            a.access = b("UserAgent").isPlatform("Mac OS X") ? a.control : a.alt;
            a.any = a.control || a.shift || a.alt || a.meta;
            return a
        },
        isRightClick: function() {
            return this.which ? this.which === 3 : this.button && this.button === 2
        },
        isMiddleClick: function() {
            return this.which ? this.which === 2 : this.button && this.button === 4
        },
        isDefaultRequested: function() {
            return this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
        }
    }, k.prototype);
    Object.assign(h, {
        listen: function(a, c, d, e, f) {
            __p && __p();
            typeof d === "function" && (d = b("TimeSlice").guard(d, b("dedupString")("Event.js " + c + " handler")));
            !f || typeof f === "boolean" ? f = {
                passive: !1
            } : f = {
                passive: f.passive || !1
            };
            if (!b("ExecutionEnvironment").canUseDOM) return new t(a, d, k, c, e, l, f);
            typeof a === "string" && (a = b("$")(a));
            typeof e === "undefined" && (e = h.Priority.NORMAL);
            if (typeof c === "object") {
                var g = {};
                for (var j in c) g[j] = h.listen(a, j, c[j], e, f);
                return g
            }
            if (c.match(/^on/i)) throw new TypeError("Bad event name `" + c + "': use `click', not `onclick'.");
            if (!a) {
                g = new Error(b("TAAL").blameToPreviousFrame("Cannot listen to an undefined element."));
                b("FBLogger")("event").catching(g).mustfix("Tried to listen to element of type %s", c);
                throw g
            }
            if (a.nodeName == "LABEL" && c == "click") {
                g = a.getElementsByTagName("input");
                a = g.length == 1 ? g[0] : a
            } else if (a === window && c === "scroll") {
                g = b("getDocumentScrollElement")();
                g !== document.documentElement && g !== document.body && (a = g)
            }
            var k = b("DataStore").get(a, i, {});
            g = n[c];
            g && (c = g.base, g.wrap && (d = g.wrap(d)));
            p(a, k, c, f);
            g = k[c];
            e in g || (g[e] = []);
            var l = g[e].length;
            d = new t(a, d, k, c, e, l, f);
            g[e][l] = d;
            g.numHandlers++;
            f.passive || (g.numNonPassiveHandlers++, o(a, k[c], c));
            return d
        },
        stop: function(a) {
            var c = new(b("DOMEvent"))(a).stopPropagation();
            j(c.event);
            return a
        },
        prevent: function(a) {
            new(b("DOMEvent"))(a).preventDefault();
            return a
        },
        isDefaultPrevented: function(a) {
            return new(b("DOMEvent"))(a).isDefaultPrevented(a)
        },
        kill: function(a) {
            a = new(b("DOMEvent"))(a).kill();
            j(a.event);
            return !1
        },
        getKeyCode: function(a) {
            __p && __p();
            a = new(b("DOMEvent"))(a).event;
            if (!a) return !1;
            switch (a.keyCode) {
                case 63232:
                    return 38;
                case 63233:
                    return 40;
                case 63234:
                    return 37;
                case 63235:
                    return 39;
                case 63272:
                case 63273:
                case 63275:
                    return null;
                case 63276:
                    return 33;
                case 63277:
                    return 34
            }
            if (a.shiftKey) switch (a.keyCode) {
                case 33:
                case 34:
                case 37:
                case 38:
                case 39:
                case 40:
                    return null
            }
            return a.keyCode
        },
        getPriorities: function() {
            if (!m) {
                var a = b("getObjectValues")(h.Priority);
                a.sort(function(a, b) {
                    return a - b
                });
                m = a
            }
            return m
        },
        fire: function(a, b, c) {
            c = new k(a, b, c);
            var d;
            do {
                var e = h.__getHandler(a, b);
                e && (d = e(c));
                a = a.parentNode
            } while (a && d !== !1 && !c.cancelBubble);
            return d !== !1
        },
        __fire: function(a, b, c) {
            a = h.__getHandler(a, b);
            if (a) return a(l(c))
        },
        __getHandler: function(a, c) {
            var d = b("DataStore").get(a, i);
            return d && d[c] ? d[c].domHandler : a["on" + c]
        },
        getPosition: function(a) {
            a = new(b("DOMEvent"))(a).event;
            var c = b("getDocumentScrollElement")(),
                d = a.clientX + b("Scroll").getLeft(c);
            a = a.clientY + b("Scroll").getTop(c);
            return {
                x: d,
                y: a
            }
        }
    });
    var m = null;
    c = function(a) {
        return function(c) {
            if (!b("DOMQuery").contains(this, c.getRelatedTarget())) return a.call(this, c)
        }
    };
    var n;
    !window.navigator.msPointerEnabled ? n = {
        mouseenter: {
            base: "mouseover",
            wrap: c
        },
        mouseleave: {
            base: "mouseout",
            wrap: c
        }
    } : n = {
        mousedown: {
            base: "MSPointerDown"
        },
        mousemove: {
            base: "MSPointerMove"
        },
        mouseup: {
            base: "MSPointerUp"
        },
        mouseover: {
            base: "MSPointerOver"
        },
        mouseout: {
            base: "MSPointerOut"
        },
        mouseenter: {
            base: "MSPointerOver",
            wrap: c
        },
        mouseleave: {
            base: "MSPointerOut",
            wrap: c
        }
    };
    if (b("UserAgent").isBrowser("Firefox < 52")) {
        d = function(a, b) {
            b = l(b);
            var c = b.getTarget();
            while (c) h.__fire(c, a, b), c = c.parentNode
        };
        document.documentElement.addEventListener("focus", d.bind(null, "focusin"), !0);
        document.documentElement.addEventListener("blur", d.bind(null, "focusout"), !0)
    }
    var o = function(a, c, d) {
            var e = c.numNonPassiveHandlers == 0;
            e != c.options.passive && (c.domHandlerRemover.remove(), c.options.passive = e, c.domHandlerRemover = b("DOMEventListener").add(a, d, c.domHandler, {
                passive: e
            }))
        },
        p = function(a, c, d, e) {
            __p && __p();
            if (d in c) return;
            var f = b("TimeSlice").guard(s.bind(a, d), b("dedupString")("Event listenHandler " + d));
            c[d] = {
                numHandlers: 0,
                numNonPassiveHandlers: 0,
                domHandlerRemover: b("DOMEventListener").add(a, d, f, e),
                domHandler: f,
                options: e
            };
            c = "on" + d;
            if (a[c]) {
                f = a === document.documentElement ? h.Priority._BUBBLE : h.Priority.TRADITIONAL;
                var g = a[c];
                a[c] = null;
                h.listen(a, d, g, f, e)
            }
        };

    function q(a) {
        return !a.href.endsWith("#") ? !1 : a.href === document.location.href || a.href === document.location.href + "#"
    }

    function r(a, b) {
        return a.nodeName === "INPUT" && a.type === b
    }
    var s = b("EventProfiler").__wrapEventListenHandler(function(a, c) {
        __p && __p();
        c = l(c);
        if (!b("DataStore").get(this, i)) throw new Error("Bad listenHandler context.");
        var d = b("DataStore").get(this, i)[a];
        if (!d) throw new Error("No registered handlers for `" + a + "'.");
        if (a == "click" || a == "contextmenu" || a == "mousedown" && c.which == 2) {
            var e = c.getTarget(),
                f = b("Parent").byTag(e, "a");
            f instanceof HTMLAnchorElement && f.href && q(f) && !r(e, "file") && !r(e, "submit") && c.prevent();
            a == "click" && b("clickRefAction")("click", f, c);
            a == "contextmenu" && b("clickRefAction")("contextmenu", f, c);
            a == "mousedown" && c.which == 2 && b("clickRefAction")("middleclick", f, c)
        }
        e = h.getPriorities();
        for (var a = 0; a < e.length; a++) {
            f = e[a];
            if (f in d) {
                f = d[f];
                for (var g = 0; g < f.length; g++) {
                    if (!f[g]) continue;
                    var j = f[g].fire(this, c);
                    if (j === !1) return c.kill();
                    else c.cancelBubble && c.stop()
                }
            }
        }
        return c.returnValue
    });
    h.Priority = {
        URGENT: -20,
        TRADITIONAL: -10,
        NORMAL: 0,
        _BUBBLE: 1e3
    };

    function t(a, b, c, d, e, f, g) {
        this._element = a, this._handler = b, this._handlers = c, this._type = d, this._priority = e, this._id = f, this._options = g
    }
    Object.assign(t.prototype, {
        remove: function() {
            if (b("ExecutionEnvironment").canUseDOM) {
                if (!this._handlers) {
                    b("FBLogger")("Event").warn("Event handler has already been removed");
                    return
                }
                var a = this._handlers[this._type];
                a.numHandlers <= 1 ? (a.domHandlerRemover.remove(), delete this._handlers[this._type]) : (delete a[this._priority][this._id], a.numHandlers--, this._options.passive || (a.numNonPassiveHandlers--, o(this._element, this._handlers[this._type], this._type)));
                this._handlers = null
            }
        },
        fire: function(a, c) {
            return b("ExecutionEnvironment").canUseDOM ? b("ErrorUtils").applyWithGuard(this._handler, a, [c], function(b) {
                b.event_type = c.type, b.dom_element = a.name || a.id, b.category = "eventhandler"
            }) : !0
        }
    });
    a.$E = h.$E = l;
    e.exports = h
}), null);
__d("FbtResultBase", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = !1;
    a = function() {
        __p && __p();

        function a(a) {
            h || g(0, 12919), this.$1 = a, this.$2 = null
        }
        var b = a.prototype;
        b.flattenToArray = function() {
            return a.flattenToArray(this.$1)
        };
        b.getContents = function() {
            return this.$1
        };
        b.onStringSerializationError = function(a) {
            throw new Error("This method needs to be overridden by a child class")
        };
        b.toString = function() {
            if (this.$2 != null) return this.$2;
            var b = "",
                c = this.flattenToArray();
            for (var d = 0; d < c.length; ++d) {
                var e = c[d];
                typeof e === "string" || e instanceof a ? b += e.toString() : this.onStringSerializationError(e)
            }
            Object.isFrozen(this) || (this.$2 = b);
            return b
        };
        b.toJSON = function() {
            return this.toString()
        };
        a.flattenToArray = function(b) {
            var c = [];
            for (var d = 0; d < b.length; ++d) {
                var e = b[d];
                Array.isArray(e) ? c.push.apply(c, a.flattenToArray(e)) : e instanceof a ? c.push.apply(c, e.flattenToArray()) : c.push(e)
            }
            return c
        };
        a.usingStringProxyMethod = function(a) {
            var b = this;
            ["anchor", "big", "blink", "bold", "charAt", "charCodeAt", "codePointAt", "contains", "endsWith", "fixed", "fontcolor", "fontsize", "includes", "indexOf", "italics", "lastIndexOf", "link", "localeCompare", "match", "normalize", "repeat", "replace", "search", "slice", "small", "split", "startsWith", "strike", "sub", "substr", "substring", "sup", "toLocaleLowerCase", "toLocaleUpperCase", "toLowerCase", "toUpperCase", "trim", "trimLeft", "trimRight"].forEach(function(c) {
                b.prototype[c] = a(c)
            });
            h = !0;
            return b
        };
        return a
    }();
    e.exports = a
}), null);
__d("getMarkupWrap", ["invariant", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = {};
    c = [1, '<select multiple="true">', "</select>"];
    d = [1, "<table>", "</table>"];
    f = [3, "<table><tbody><tr>", "</tr></tbody></table>"];
    var j = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        k = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: c,
            option: c,
            caption: d,
            colgroup: d,
            tbody: d,
            tfoot: d,
            thead: d,
            td: f,
            th: f
        };
    b = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    b.forEach(function(a) {
        k[a] = j, i[a] = !0
    });

    function a(a) {
        a = a;
        !h && g(0, 144);
        Object.prototype.hasOwnProperty.call(k, a) || (a = "*");
        Object.prototype.hasOwnProperty.call(i, a) || (a === "*" ? h.innerHTML = "<link />" : h.innerHTML = "<" + a + "></" + a + ">", i[a] = !h.firstChild);
        return i[a] ? k[a] : null
    }
    e.exports = a
}), null);
__d("createNodesFromMarkup", ["invariant", "ExecutionEnvironment", "getMarkupWrap"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null,
        i = /^\s*<(\w+)/;

    function j(a) {
        a = a.match(i);
        return a && a[1].toLowerCase()
    }

    function a(a, c) {
        __p && __p();
        var d = h;
        !h && g(0, 5001);
        var e = j(a);
        e = e && b("getMarkupWrap")(e);
        if (e) {
            d.innerHTML = e[1] + a + e[2];
            e = e[0];
            while (e--) d = d.lastChild
        } else d.innerHTML = a;
        e = d.getElementsByTagName("script");
        e.length && (c || g(0, 5002), Array.from(e).forEach(c));
        a = Array.from(d.childNodes);
        while (d.lastChild) d.removeChild(d.lastChild);
        return a
    }
    e.exports = a
}), null);
__d("evalGlobal", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        __p && __p();
        if (typeof a !== "string") throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");
        if (!a) return;
        var b = document.createElement("script");
        try {
            b.appendChild(document.createTextNode(a))
        } catch (c) {
            b.text = a
        }
        a = document.getElementsByTagName("head")[0] || document.documentElement;
        a.appendChild(b);
        a.removeChild(b)
    }
    e.exports = a
}), null);
__d("HTML", ["invariant", "Bootloader", "createNodesFromMarkup", "emptyFunction", "evalGlobal"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = /(<(\w+)[^>]*?)\/>/g,
        i = {
            abbr: !0,
            area: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0
        };
    a = function() {
        "use strict";
        __p && __p();

        function a(c) {
            __p && __p();
            c && typeof c.__html === "string" && (c = c.__html);
            if (!(this instanceof a)) return c instanceof a ? c : new a(c);
            if (c) {
                var d = typeof c;
                d === "string" || g(0, 277, d)
            }
            this._markup = c || "";
            this._defer = !1;
            this._nodes = null;
            this._inlineJS = b("emptyFunction");
            this._rootNode = null
        }
        var c = a.prototype;
        c.toString = function() {
            return this._markup
        };
        c.getContent = function() {
            return this._markup
        };
        c.getNodes = function() {
            this._fillCache();
            return this._nodes
        };
        c.getRootNode = function() {
            __p && __p();
            this._rootNode && g(0, 278);
            var a = this.getNodes();
            if (a.length === 1) this._rootNode = a[0];
            else {
                var b = document.createDocumentFragment();
                for (var c = 0; c < a.length; c++) b.appendChild(a[c]);
                this._rootNode = b
            }
            return this._rootNode
        };
        c.getAction = function() {
            var a = this;
            this._fillCache();
            var b = function() {
                a._inlineJS()
            };
            return this._defer ? function() {
                setTimeout(b, 0)
            } : b
        };
        c._fillCache = function() {
            __p && __p();
            if (this._nodes !== null) return;
            if (!this._markup) {
                this._nodes = [];
                return
            }
            var a = this._markup.replace(h, function(a, b, c) {
                    return i[c.toLowerCase()] ? a : b + "></" + c + ">"
                }),
                c = null;
            a = b("createNodesFromMarkup")(a, function(a) {
                c = c || [], c.push(a.src ? b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"), a.src) : b("evalGlobal").bind(null, a.innerHTML)), a.parentNode.removeChild(a)
            });
            c && (this._inlineJS = function() {
                for (var a = 0; a < c.length; a++) c[a]()
            });
            this._nodes = a
        };
        c.setDeferred = function(a) {
            this._defer = !!a;
            return this
        };
        a.isHTML = function(b) {
            return !!b && (b instanceof a || b.__html !== void 0)
        };
        a.replaceJSONWrapper = function(b) {
            return b && b.__html !== void 0 ? new a(b.__html) : b
        };
        return a
    }();
    e.exports = a
}), null);
__d("UserAgent_DEPRECATED", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
        h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;

    function w() {
        __p && __p();
        if (g) return;
        g = !0;
        var a = navigator.userAgent,
            b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
            c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
        s = /\b(iPhone|iP[ao]d)/.exec(a);
        t = /\b(iP[ao]d)/.exec(a);
        q = /Android/i.exec(a);
        u = /FBAN\/\w+;/i.exec(a);
        v = /Mobile/i.exec(a);
        r = !!/Win64/.exec(a);
        if (b) {
            h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
            h && document && document.documentMode && (h = document.documentMode);
            var d = /(?:Trident\/(\d+.\d+))/.exec(a);
            m = d ? parseFloat(d[1]) + 4 : h;
            i = b[2] ? parseFloat(b[2]) : NaN;
            j = b[3] ? parseFloat(b[3]) : NaN;
            k = b[4] ? parseFloat(b[4]) : NaN;
            k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN
        } else h = i = j = l = k = NaN;
        if (c) {
            if (c[1]) {
                d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                n = d ? parseFloat(d[1].replace("_", ".")) : !0
            } else n = !1;
            o = !!c[2];
            p = !!c[3]
        } else n = o = p = !1
    }
    var x = {
        ie: function() {
            return w() || h
        },
        ieCompatibilityMode: function() {
            return w() || m > h
        },
        ie64: function() {
            return x.ie() && r
        },
        firefox: function() {
            return w() || i
        },
        opera: function() {
            return w() || j
        },
        webkit: function() {
            return w() || k
        },
        safari: function() {
            return x.webkit()
        },
        chrome: function() {
            return w() || l
        },
        windows: function() {
            return w() || o
        },
        osx: function() {
            return w() || n
        },
        linux: function() {
            return w() || p
        },
        iphone: function() {
            return w() || s
        },
        mobile: function() {
            return w() || s || t || q || v
        },
        nativeApp: function() {
            return w() || u
        },
        android: function() {
            return w() || q
        },
        ipad: function() {
            return w() || t
        }
    };
    e.exports = x
}), null);
__d("isScalar", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return /string|number|boolean/.test(typeof a)
    }
    e.exports = a
}), null);
__d("DOM", ["DOMQuery", "Event", "FBLogger", "FbtResultBase", "HTML", "TAAL", "UserAgent_DEPRECATED", "$", "createArrayFromMixed", "isNode", "isScalar", "isTextNode"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = babelHelpers["extends"]({}, b("DOMQuery"), {
        create: function(a, b, c) {
            a = document.createElement(a);
            b && g.setAttributes(a, b);
            c != null && g.setContent(a, c);
            return a
        },
        setAttributes: function(a, c) {
            c.type && (a.type = c.type);
            for (var d in c) {
                var e = c[d],
                    f = /^on/i.test(d);
                f && typeof e !== "function" && b("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s", d, typeof e);
                if (d == "type") continue;
                else d == "style" ? typeof e === "string" ? a.style.cssText = e : Object.assign(a.style, e) : f ? b("Event").listen(a, d.substr(2), e) : d in a ? a[d] = e : a.setAttribute && a.setAttribute(d, e)
            }
        },
        prependContent: function(a, c) {
            if (!a) throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));
            return i(c, a, function(b) {
                a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
            })
        },
        insertAfter: function(a, c) {
            if (!a || !a.parentNode) throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));
            var d = a.parentNode;
            return i(c, d, function(b) {
                a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b)
            })
        },
        insertBefore: function(a, c) {
            if (!a || !a.parentNode) throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));
            var d = a.parentNode;
            return i(c, d, function(b) {
                d.insertBefore(b, a)
            })
        },
        setContent: function(a, c) {
            if (!a) throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));
            while (a.firstChild) h(a.firstChild);
            return g.appendContent(a, c)
        },
        appendContent: function(a, c) {
            if (!a) throw new Error(b("TAAL").blameToPreviousFile("reference element is not a node"));
            return i(c, a, function(b) {
                a.appendChild(b)
            })
        },
        replace: function(a, c) {
            if (!a || !a.parentNode) throw new Error(b("TAAL").blameToPreviousFile("reference element does not have a parent"));
            var d = a.parentNode;
            return i(c, d, function(b) {
                d.replaceChild(b, a)
            })
        },
        remove: function(a) {
            h(typeof a === "string" ? b("$")(a) : a)
        },
        empty: function(a) {
            a = typeof a === "string" ? b("$")(a) : a;
            while (a.firstChild) h(a.firstChild)
        }
    });
    Object.assign(g, b("DOMQuery"));

    function h(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function i(a, c, d) {
        __p && __p();
        a = b("HTML").replaceJSONWrapper(a);
        if (a instanceof b("HTML") && c.firstChild === null && -1 === a.toString().indexOf("<script")) {
            var e = b("UserAgent_DEPRECATED").ie();
            if (!e || e > 7 && !b("DOMQuery").isNodeOfType(c, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
                var f = e ? '<em style="display:none;">&nbsp;</em>' : "";
                c.innerHTML = f + a;
                e && c.removeChild(c.firstChild);
                return Array.from(c.childNodes)
            }
        } else if (b("isTextNode")(c)) {
            c.data = a;
            return [a]
        }
        f = document.createDocumentFragment();
        var g;
        e = [];
        c = [];
        a = b("createArrayFromMixed")(a);
        a.length === 1 && a[0] instanceof b("FbtResultBase") && (a = a[0].getContents());
        for (var h = 0; h < a.length; h++) {
            g = b("HTML").replaceJSONWrapper(a[h]);
            if (g instanceof b("HTML")) {
                c.push(g.getAction());
                var i = g.getNodes();
                for (var j = 0; j < i.length; j++) e.push(i[j]), f.appendChild(i[j])
            } else if (b("isScalar")(g) || g instanceof b("FbtResultBase")) {
                j = document.createTextNode(g);
                e.push(j);
                f.appendChild(j)
            } else b("isNode")(g) ? (e.push(g), f.appendChild(g)) : (Array.isArray(g) && b("FBLogger")("dom").warn("Nest arrays not supported"), g !== null && b("FBLogger")("dom").warn("No way to set content %s", g))
        }
        d(f);
        c.forEach(function(a) {
            a()
        });
        return e
    }
    e.exports = g
}), null);
__d("DOMControl", ["DataStore", "$"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.root = b("$").fromIDOrElement(a), this.updating = !1, b("DataStore").set(a, "DOMControl", this)
        }
        var c = a.prototype;
        c.getRoot = function() {
            return this.root
        };
        c.beginUpdate = function() {
            if (this.updating) return !1;
            this.updating = !0;
            return !0
        };
        c.endUpdate = function() {
            this.updating = !1
        };
        c.update = function(a) {
            if (!this.beginUpdate()) return this;
            this.onupdate(a);
            this.endUpdate()
        };
        c.onupdate = function(a) {};
        a.getInstance = function(a) {
            return b("DataStore").get(a, "DOMControl")
        };
        return a
    }();
    e.exports = a
}), null);
__d("Input", ["CSS", "DOMControl", "DOMQuery"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        isWhiteSpaceOnly: function(a) {
            return !/\S/.test(a || "")
        },
        isEmpty: function(a) {
            return g.isWhiteSpaceOnly(a.value)
        },
        getValue: function(a) {
            return g.isEmpty(a) ? "" : a.value
        },
        getValueRaw: function(a) {
            return a.value
        },
        setValue: function(a, c) {
            a.value = c || "";
            c = b("DOMControl").getInstance(a);
            c && c.resetHeight && c.resetHeight()
        },
        setPlaceholder: function(a, b) {
            a.setAttribute("aria-label", b), a.setAttribute("placeholder", b)
        },
        reset: function(a) {
            a.value = "", a.style.height = ""
        },
        setSubmitOnEnter: function(a, c) {
            b("CSS").conditionClass(a, "enter_submit", c)
        },
        getSubmitOnEnter: function(a) {
            return b("CSS").hasClass(a, "enter_submit")
        },
        setMaxLength: function(a, b) {
            b > 0 ? a.setAttribute("maxlength", b) : a.removeAttribute("maxlength")
        }
    };
    e.exports = g
}), null);
__d("camelize", [], (function(a, b, c, d, e, f) {
    var g = /-(.)/g;

    function a(a) {
        return a.replace(g, function(a, b) {
            return b.toUpperCase()
        })
    }
    e.exports = a
}), null);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = !1,
        h = null;

    function a() {
        __p && __p();
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
    e.exports = a
}), null);
__d("hyphenate", [], (function(a, b, c, d, e, f) {
    var g = /([A-Z])/g;

    function a(a) {
        return a.replace(g, "-$1").toLowerCase()
    }
    e.exports = a
}), null);
__d("getStyleProperty", ["camelize", "hyphenate"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        return a == null ? a : String(a)
    }

    function a(a, c) {
        __p && __p();
        var d;
        if (window.getComputedStyle) {
            d = window.getComputedStyle(a, null);
            if (d) return g(d.getPropertyValue(b("hyphenate")(c)))
        }
        if (document.defaultView && document.defaultView.getComputedStyle) {
            d = document.defaultView.getComputedStyle(a, null);
            if (d) return g(d.getPropertyValue(b("hyphenate")(c)));
            if (c === "display") return "none"
        }
        return a.currentStyle ? c === "float" ? g(a.currentStyle.cssFloat || a.currentStyle.styleFloat) : g(a.currentStyle[b("camelize")(c)]) : g(a.style && a.style[b("camelize")(c)])
    }
    e.exports = a
}), null);
__d("StyleCore", ["invariant", "camelize", "containsNode", "ex", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, b) {
        a = n.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var i = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function j(a) {
        var b = {};
        a.replace(i, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function k(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function l(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function m(a, c, d) {
        switch (b("hyphenate")(c)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                var e = parseInt(d, 10) < 0;
                e && g(0, 826, a, c, d);
            default:
                isNaN(d) || !d || d === "0" || g(0, 827, a, c, d, d + "px");
                break
        }
    }
    var n = {
        set: function(a, c, d) {
            __p && __p();
            m("Style.set", c, d);
            if (a == null) return;
            a = a.style;
            switch (c) {
                case "opacity":
                    b("getOpacityStyleName")() === "filter" ? a.filter = l(d) : a.opacity = d;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = d || "";
                    break;
                default:
                    try {
                        a[b("camelize")(c)] = d
                    } catch (a) {
                        throw new Error(b("ex")('Style.set: "%s" argument is invalid: %s', c, d))
                    }
            }
        },
        apply: function(a, c) {
            __p && __p();
            var d;
            for (d in c) m("Style.apply", d, c[d]);
            "opacity" in c && b("getOpacityStyleName")() === "filter" && (c.filter = l(c.opacity), delete c.opacity);
            var e = j(a.style.cssText);
            for (d in c) {
                var f = c[d];
                delete c[d];
                var g = b("hyphenate")(d);
                for (var h in e)(h === g || h.indexOf(g + "-") === 0) && delete e[h];
                c[g] = f
            }
            Object.assign(e, c);
            a.style.cssText = k(e)
        },
        get: b("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(n.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (b("getOpacityStyleName")() === "filter") {
                var c = n.get(a, "filter");
                if (c) {
                    c = /(\d+(?:\.\d+)?)/.exec(c);
                    if (c) return parseFloat(c.pop()) / 100
                }
            }
            return n.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (b("containsNode")(document.body, a)) {
                if (n.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (h(a, "overflow") || h(a, "overflowY") || h(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    e.exports = n
}), null);
__d("Style", ["StyleCore", "$"], (function(a, b, c, d, e, f) {
    a = babelHelpers["extends"]({}, b("StyleCore"), {
        get: function(a, c) {
            typeof a === "string" && (a = b("$")(a));
            return b("StyleCore").get(a, c)
        },
        getFloat: function(a, c) {
            typeof a === "string" && (a = b("$")(a));
            return b("StyleCore").getFloat(a, c)
        }
    });
    e.exports = a
}), null);
__d("FlipDirection", ["DOM", "Input", "Style"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        setDirection: function(a, c, d) {
            __p && __p();
            c === void 0 && (c = 5);
            d === void 0 && (d = !1);
            var e = b("DOM").isNodeOfType(a, "input") && a.type == "text",
                f = b("DOM").isNodeOfType(a, "textarea");
            if (!(e || f) || a.getAttribute("data-prevent-auto-flip")) return;
            e = b("Input").getValue(a);
            f = a.style && a.style.direction;
            if (!f || d) {
                f = 0;
                d = !0;
                for (var g = 0; g < e.length; g++) {
                    var h = e.charCodeAt(g);
                    if (h >= 48) {
                        d && (d = !1, f++);
                        if (h >= 1470 && h <= 1920) {
                            b("Style").set(a, "direction", "rtl");
                            a.setAttribute("dir", "rtl");
                            return
                        }
                        if (f == c) {
                            b("Style").set(a, "direction", "ltr");
                            a.setAttribute("dir", "ltr");
                            return
                        }
                    } else d = !0
                }
            } else e.length === 0 && (b("Style").set(a, "direction", ""), a.removeAttribute("dir"))
        }
    };
    e.exports = a
}), null);
__d("FlipDirectionOnKeypress", ["Event", "FlipDirection"], (function(a, b, c, d, e, f) {
    a = function(a) {
        a = a.getTarget();
        b("FlipDirection").setDirection(a)
    };
    b("Event").listen(document.documentElement, {
        keyup: a,
        input: a
    })
}), null);
__d("getActiveElement", [], (function(a, b, c, d, e, f) {
    function a(a) {
        a === void 0 && (a = document);
        if (typeof a === "undefined") return null;
        try {
            return a.activeElement || a.body
        } catch (b) {
            return a.body
        }
    }
    e.exports = a
}), null);
__d("FocusListener", ["Arbiter", "CSS", "Parent", "getActiveElement"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        expandInput: function(a) {
            b("CSS").addClass(a, "child_is_active"), b("CSS").addClass(a, "child_is_focused"), b("CSS").addClass(a, "child_was_focused"), b("Arbiter").inform("reflow")
        }
    };

    function h(a, c) {
        if (c.getAttribute("data-silentfocuslistener")) return;
        var d = b("Parent").byClass(c, "focus_target");
        d && ("focus" == a || "focusin" == a ? g.expandInput(d) : (c.value === "" && b("CSS").removeClass(d, "child_is_active"), b("CSS").removeClass(d, "child_is_focused")))
    }
    c = b("getActiveElement")();
    c && h("focus", c);

    function a(a) {
        a = a || window.event, h(a.type, a.target || a.srcElement)
    }
    d = document.documentElement;
    d.addEventListener ? (d.addEventListener("focus", a, !0), d.addEventListener("blur", a, !0)) : (d.attachEvent("onfocusin", a), d.attachEvent("onfocusout", a));
    e.exports = g
}), null);
__d("guid", [], (function(a, b, c, d, e, f) {
    function a() {
        return "f" + (Math.random() * (1 << 30)).toString(16).replace(".", "")
    }
    e.exports = a
}), null);
__d("ArbiterMixin", ["Arbiter", "guid"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "arbiter$" + b("guid")(),
        h = Object.prototype.hasOwnProperty;
    a = {
        _getArbiterInstance: function() {
            return h.call(this, g) ? this[g] : this[g] = new(b("Arbiter"))()
        },
        inform: function(a, b, c) {
            return this._getArbiterInstance().inform(a, b, c)
        },
        subscribe: function(a, b, c) {
            return this._getArbiterInstance().subscribe(a, b, c)
        },
        subscribeOnce: function(a, b, c) {
            return this._getArbiterInstance().subscribeOnce(a, b, c)
        },
        unsubscribe: function(a) {
            this._getArbiterInstance().unsubscribe(a)
        },
        unsubscribeCurrentSubscription: function() {
            this._getArbiterInstance().unsubscribeCurrentSubscription()
        },
        releaseCurrentPersistentEvent: function() {
            this._getArbiterInstance().releaseCurrentPersistentEvent()
        },
        registerCallback: function(a, b) {
            return this._getArbiterInstance().registerCallback(a, b)
        },
        query: function(a) {
            return this._getArbiterInstance().query(a)
        }
    };
    e.exports = a
}), null);
__d("mixin", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a() {
        var a = function() {},
            b = 0,
            c;
        while (b < 0 || arguments.length <= b ? void 0 : arguments[b]) {
            c = b < 0 || arguments.length <= b ? void 0 : arguments[b];
            for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a.prototype[d] = c[d]);
            b += 1
        }
        return a
    }
    e.exports = a
}), null);
__d("JSONPTransport", ["ArbiterMixin", "DOM", "HTML", "TimeSlice", "URI", "mixin"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {},
        h = 2,
        i = "jsonp",
        j = "iframe";

    function k(a) {
        delete g[a]
    }
    c = function(c) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(d, c);

        function d(a, b) {
            var d;
            d = c.call(this) || this;
            d._type = a;
            d._uri = b;
            d._hasResponse = !1;
            g[d.getID()] = babelHelpers.assertThisInitialized(d);
            return d
        }
        var e = d.prototype;
        e.getID = function() {
            return this._id || (this._id = h++)
        };
        e.hasFinished = function() {
            return !(this.getID() in g)
        };
        e.getRequestURI = function() {
            return new(b("URI"))(this._uri).addQueryData({
                __a: 1,
                __adt: this.getID(),
                __req: "jsonp_" + this.getID()
            })
        };
        e.getTransportFrame = function() {
            if (this._iframe) return this._iframe;
            var a = "transport_frame_" + this.getID();
            a = b("HTML")('<iframe class="hidden_elem" name="' + a + '" src="javascript:void(0)" />');
            return this._iframe = b("DOM").appendContent(document.body, a)[0]
        };
        e.send = function() {
            this._type === i ? setTimeout(function() {
                b("DOM").appendContent(document.body, b("DOM").create("script", {
                    src: this.getRequestURI().toString(),
                    type: "text/javascript"
                }))
            }.bind(this), 0) : (this.getTransportFrame().onload = this._checkForErrors.bind(this), this.getTransportFrame().src = this.getRequestURI().toString()), this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        e.createContinuationForFileForm_DO_NOT_USE = function() {
            this._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for first response")
        };
        e.handleResponse = function(a) {
            var c = this;
            this._continuation(function() {
                c.inform("response", a), c.hasFinished() ? setTimeout(c._cleanup.bind(c), 0) : c._continuation = b("TimeSlice").getGuardedContinuation("JSONPTransport: waiting for next response")
            })
        };
        e.abort = function() {
            if (this._aborted) return;
            this._aborted = !0;
            this._cleanup();
            k(this.getID());
            this.inform("abort");
            this._continuation && b("TimeSlice").cancel(this._continuation)
        };
        e._checkForErrors = function() {
            this._hasResponse || this.abort()
        };
        e._cleanup = function() {
            this._iframe && (b("DOM").remove(this._iframe), this._iframe = null)
        };
        d.respond = function(b, c, d) {
            var e = g[b];
            if (e) e._hasResponse = !0, d || k(b), e._type == j && (typeof c === "string" ? c = JSON.parse(c) : c = JSON.parse(JSON.stringify(c))), e.handleResponse(c);
            else {
                e = a.ErrorSignal;
                e && !d && e.logJSError("ajax", {
                    error: "UnexpectedJsonResponse",
                    extra: {
                        id: b,
                        uri: c.payload && c.payload.uri || ""
                    }
                })
            }
        };
        return d
    }(b("mixin")(b("ArbiterMixin")));
    c.respond = b("TimeSlice").guard(c.respond, "JSONPTransport.respond", {
        root: !0
    });
    e.exports = c
}), null);
__d("StrSet", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$2 = {}, this.$1 = 0, a && this.addAll(a)
        }
        var b = a.prototype;
        b.add = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = !0, this.$1++);
            return this
        };
        b.addAll = function(a) {
            a.forEach(this.add, this);
            return this
        };
        b.remove = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) && (delete this.$2[a], this.$1--);
            return this
        };
        b.removeAll = function(a) {
            a.forEach(this.remove, this);
            return this
        };
        b.toArray = function() {
            return Object.keys(this.$2)
        };
        b.toMap = function(a) {
            var b = {};
            Object.keys(this.$2).forEach(function(c) {
                b[c] = typeof a === "function" ? a(c) : a || !0
            });
            return b
        };
        b.contains = function(a) {
            return Object.prototype.hasOwnProperty.call(this.$2, a)
        };
        b.count = function() {
            return this.$1
        };
        b.clear = function() {
            this.$2 = {};
            this.$1 = 0;
            return this
        };
        b.clone = function() {
            return new a(this)
        };
        b.forEach = function(a, b) {
            Object.keys(this.$2).forEach(a, b)
        };
        b.map = function(a, b) {
            return Object.keys(this.$2).map(a, b)
        };
        b.some = function(a, b) {
            return Object.keys(this.$2).some(a, b)
        };
        b.every = function(a, b) {
            return Object.keys(this.$2).every(a, b)
        };
        b.filter = function(b, c) {
            return new a(Object.keys(this.$2).filter(b, c))
        };
        b.union = function(a) {
            return this.clone().addAll(a)
        };
        b.intersect = function(a) {
            return this.filter(function(b) {
                return a.contains(b)
            })
        };
        b.difference = function(a) {
            var b = this;
            return a.filter(function(a) {
                return !b.contains(a)
            })
        };
        b.equals = function(a) {
            __p && __p();
            var b = function(a, b) {
                    return a === b ? 0 : a < b ? -1 : 1
                },
                c = this.toArray();
            a = a.toArray();
            if (c.length !== a.length) return !1;
            var d = c.length;
            c = c.sort(b);
            a = a.sort(b);
            while (d--)
                if (c[d] !== a[d]) return !1;
            return !0
        };
        return a
    }();
    e.exports = a
}), null);
__d("PlatformBaseVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions));
    c = location.pathname;
    d = c.substring(1, c.indexOf("/", 1));
    var i = h.contains(d) ? d : b("PlatformVersions").versions.UNVERSIONED;

    function j(a, c) {
        if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
        h.contains(c) || g(0, 3769);
        a.indexOf("/") !== 0 && (a = "/" + a);
        return "/" + c + a
    }

    function a(a) {
        return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a
    }
    f = {
        addVersionToPath: j,
        getLatestVersion: function() {
            return b("PlatformVersions").LATEST
        },
        versionAwareURI: function(a) {
            return a.setPath(j(a.getPath(), i))
        },
        versionAwarePath: function(a) {
            return j(a, i)
        },
        getUnversionedPath: a
    };
    e.exports = f
}), null);
__d("PluginMessage", ["DOMEventListener"], (function(a, b, c, d, e, f) {
    a = {
        listen: function() {
            b("DOMEventListener").add(window, "message", function(a) {
                if (/\.facebook\.com$/.test(a.origin) && /^FB_POPUP:/.test(a.data)) {
                    a = JSON.parse(a.data.substring(9));
                    "reload" in a && /^https?:/.test(a.reload) && document.location.replace(a.reload)
                }
            })
        }
    };
    e.exports = a
}), null);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        getElementDimensions: function(a) {
            var b = a ? a.offsetHeight : 0;
            a = a ? a.offsetWidth : 0;
            return {
                height: b,
                width: a
            }
        },
        getDocumentDimensions: function(a) {
            a = b("getDocumentScrollElement")(a);
            var c = a.scrollWidth || 0;
            a = a.scrollHeight || 0;
            return {
                width: c,
                height: a
            }
        },
        measureElementBox: function(a, c, d, e, f) {
            __p && __p();
            var g;
            switch (c) {
                case "left":
                case "right":
                case "top":
                case "bottom":
                    g = [c];
                    break;
                case "width":
                    g = ["left", "right"];
                    break;
                case "height":
                    g = ["top", "bottom"];
                    break;
                default:
                    throw Error("Invalid plane: " + c)
            }
            c = function(c, d) {
                var e = 0;
                for (var f = 0; f < g.length; f++) e += parseFloat(b("Style").get(a, c + "-" + g[f] + d)) || 0;
                return e
            };
            return (d ? c("padding", "") : 0) + (e ? c("border", "-width") : 0) + (f ? c("margin", "") : 0)
        }
    };
    e.exports = a
}), null);
__d("BehaviorsMixin", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = function() {
            "use strict";

            function a(a) {
                this.$1 = a, this.$2 = !1
            }
            var b = a.prototype;
            b.enable = function() {
                this.$2 || (this.$2 = !0, this.$1.enable())
            };
            b.disable = function() {
                this.$2 && (this.$2 = !1, this.$1.disable())
            };
            return a
        }(),
        h = 1;

    function i(a) {
        a.__BEHAVIOR_ID || (a.__BEHAVIOR_ID = h++);
        return a.__BEHAVIOR_ID
    }
    a = {
        enableBehavior: function(a) {
            this._behaviors || (this._behaviors = {});
            var b = i(a);
            this._behaviors[b] || (this._behaviors[b] = new g(new a(this)));
            this._behaviors[b].enable();
            return this
        },
        disableBehavior: function(a) {
            if (this._behaviors) {
                a = i(a);
                this._behaviors[a] && this._behaviors[a].disable()
            }
            return this
        },
        enableBehaviors: function(a) {
            a.forEach(this.enableBehavior, this);
            return this
        },
        destroyBehaviors: function() {
            if (this._behaviors) {
                for (var a in this._behaviors) this._behaviors[a].disable();
                this._behaviors = {}
            }
        },
        hasBehavior: function(a) {
            return this._behaviors && i(a) in this._behaviors
        }
    };
    e.exports = a
}), null);
__d("isValidReactElement", [], (function(a, b, c, d, e, f) {
    var g = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;

    function a(a) {
        return !!(typeof a === "object" && a !== null && a.$$typeof === g)
    }
    e.exports = a
}), null);
__d("BootloadedReact", ["Bootloader", "isValidReactElement"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = function(a) {
        b("Bootloader").loadModules(["ReactDOM"], a, "BootloadedReact")
    };
    a = {
        isValidElement: function(a) {
            return b("isValidReactElement")(a)
        },
        render: function(a, b, c) {
            g(function(d) {
                d.render(a, b, function() {
                    c && c(this)
                })
            })
        },
        unmountComponentAtNode: function(a, b) {
            g(function(c) {
                c.unmountComponentAtNode(a), b && b()
            })
        }
    };
    e.exports = a
}), null);
__d("uniqueID", [], (function(a, b, c, d, e, f) {
    var g = "js_",
        h = 36,
        i = 0;

    function a() {
        return g + (i++).toString(h)
    }
    e.exports = a
}), null);
__d("getOrCreateDOMID", ["uniqueID"], (function(a, b, c, d, e, f) {
    function a(a) {
        a.id || (a.id = b("uniqueID")());
        return a.id
    }
    e.exports = a
}), null);
__d("ContextualThing", ["CSS", "containsNode", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        register: function(a, c) {
            a.setAttribute("data-ownerid", b("getOrCreateDOMID")(c))
        },
        containsIncludingLayers: function(a, c) {
            c = c;
            while (c) {
                if (b("containsNode")(a, c)) return !0;
                c = g.getContext(c)
            }
            return !1
        },
        getContext: function(a) {
            a = a;
            var c;
            while (a) {
                if (a.getAttribute && (c = a.getAttribute("data-ownerid"))) return b("ge")(c);
                a = a.parentNode
            }
            return null
        },
        parentByClass: function(a, c) {
            a = a;
            var d;
            while (a && !b("CSS").hasClass(a, c)) a.getAttribute && (d = a.getAttribute("data-ownerid")) ? a = b("ge")(d) : a = a.parentNode;
            return a
        }
    };
    e.exports = g
}), null);
__d("getElementText", ["isElementNode", "isTextNode"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = null;

    function a(a) {
        __p && __p();
        if (b("isTextNode")(a)) return a.data;
        else if (b("isElementNode")(a)) {
            if (g === null) {
                var c = document.createElement("div");
                g = c.textContent != null ? "textContent" : "innerText"
            }
            return a[g]
        } else return ""
    }
    e.exports = a
}), null);
__d("isContentEditable", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a) {
        a = a;
        while (a instanceof HTMLElement) {
            if (a.contentEditable === "true" || a.contentEditable === "plaintext-only") return !0;
            a = a.parentElement
        }
        return !1
    }
    e.exports = a
}), null);
__d("isElementInteractive", ["isContentEditable"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set(["EMBED", "INPUT", "OBJECT", "SELECT", "TEXTAREA"]),
        h = new Set(["button", "checkbox", "radio", "submit"]);

    function a(a) {
        if (!a instanceof HTMLElement) return !1;
        var c = b("isContentEditable")(a),
            d = g.has(a.nodeName);
        a = a instanceof HTMLInputElement && h.has(a.type);
        return (c || d) && !a
    }
    e.exports = a
}), null);
__d("KeyEventController", ["Bootloader", "DOMQuery", "Event", "Run", "emptyFunction", "getElementText", "isContentEditable", "isElementInteractive", "isEmpty"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = null,
        h = {
            BACKSPACE: [8],
            TAB: [9],
            RETURN: [13],
            ALT: [18],
            ESCAPE: [27],
            LEFT: [37, 63234],
            UP: [38, 63232],
            RIGHT: [39, 63235],
            DOWN: [40, 63233],
            NUMPAD_ADD: [43],
            NUMPAD_SUBSTRACT: [45],
            DELETE: [46],
            COMMA: [188],
            PERIOD: [190],
            SLASH: [191],
            "`": [192],
            "[": [219],
            "]": [221],
            PAGE_UP: [33],
            PAGE_DOWN: [34],
            END: [35],
            HOME: [36],
            SPACE: [32],
            KP_DOT: [46, 110],
            "-": [189],
            "=": [187],
            FORWARD_SLASH: [191]
        },
        i = (a = {}, a[8] = 1, a[9] = 1, a[13] = 1, a[27] = 1, a[32] = 1, a[37] = 1, a[63234] = 1, a[38] = 1, a[63232] = 1, a[39] = 1, a[63235] = 1, a[40] = 1, a[63233] = 1, a[46] = 1, a);
    c = function() {
        "use strict";
        __p && __p();

        function a() {
            var a = this;
            this.handlers = {};
            ["keyup", "keydown", "keypress"].forEach(function(b) {
                return document.addEventListener(b, a.onkeyevent.bind(a, "on" + b))
            })
        }
        var c = a.prototype;
        c.mapKey = function(a) {
            if (/^[0-9]$/.test(a + "")) {
                typeof a !== "number" && (a = a.charCodeAt(0) - 48);
                return [48 + a, 96 + a]
            }
            a += "";
            var b = h[a.toUpperCase()];
            return b ? b : [a.toUpperCase().charCodeAt(0)]
        };
        c.onkeyevent = function(a, c) {
            __p && __p();
            c = b("Event").$E(c);
            var d = this.handlers[c.keyCode] || this.handlers[c.which];
            if (d)
                for (var e = 0; e < d.length; e++) {
                    var f = d[e].callback,
                        g = d[e].filter;
                    try {
                        if (!g || g(c, a)) {
                            g = function() {
                                var d = f(c, a),
                                    e = c.which || c.keyCode;
                                b("Bootloader").loadModules(["KeyEventTypedLogger"], function(a) {
                                    new a().setAction("key_shortcut").setKey(c.key || "").setKeyChar(String.fromCharCode(e)).setKeyCode(e).addToExtraData("is_trusted", c.isTrusted).log()
                                }, "KeyEventController");
                                if (d === !1) return {
                                    v: b("Event").kill(c)
                                }
                            }();
                            if (typeof g === "object") return g.v
                        }
                    } catch (a) {}
                }
            return !0
        };
        c.resetHandlers = function() {
            for (var a in this.handlers)
                if (Object.prototype.hasOwnProperty.call(this.handlers, a)) {
                    var b = this.handlers[a].filter(function(a) {
                        return a.preserve()
                    });
                    b.length ? this.handlers[a] = b : delete this.handlers[a]
                }
        };
        a.getInstance = function() {
            return g || (g = new a())
        };
        a.defaultFilter = function(c, d) {
            c = b("Event").$E(c);
            return a.filterEventTypes(c, d) && a.filterEventTargets(c, d) && a.filterEventModifiers(c, d)
        };
        a.filterEventTypes = function(a, b) {
            return b === "onkeydown" ? !0 : !1
        };
        a.filterEventTargets = function(a, c) {
            c = a.getTarget();
            return !b("isElementInteractive")(c) || a.keyCode in i && (b("DOMQuery").isNodeOfType(c, ["input", "textarea"]) && c.value.length === 0 || b("isContentEditable")(c) && b("getElementText")(c).length === 0)
        };
        a.filterEventModifiers = function(a, b) {
            return a.ctrlKey || a.altKey || a.metaKey || a.repeat ? !1 : !0
        };
        a.registerKey = function(c, d, e, f, g) {
            __p && __p();
            e === void 0 && (e = a.defaultFilter);
            f === void 0 && (f = !1);
            g === void 0 && (g = b("emptyFunction").thatReturnsFalse);
            var h = a.getInstance(),
                i = c == null ? [] : h.mapKey(c);
            b("isEmpty")(h.handlers) && b("Run").onLeave(h.resetHandlers.bind(h));
            var j = {};
            for (var k = 0; k < i.length; k++) {
                c = "" + i[k];
                (!h.handlers[c] || f) && (h.handlers[c] = []);
                var l = {
                    callback: d,
                    filter: e,
                    preserve: g
                };
                j[c] = l;
                h.handlers[c].push(l)
            }
            return {
                remove: function() {
                    for (var a in j) {
                        if (h.handlers[a] && h.handlers[a].length) {
                            var b = h.handlers[a].indexOf(j[a]);
                            b >= 0 && h.handlers[a].splice(b, 1)
                        }
                        delete j[a]
                    }
                }
            }
        };
        return a
    }();
    e.exports = c
}), null);
__d("KeyStatus", ["Event", "ExecutionEnvironment"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = null,
        h = null;

    function i() {
        h || (h = b("Event").listen(window, "blur", function() {
            g = null, j()
        }))
    }

    function j() {
        h && (h.remove(), h = null)
    }

    function a(a) {
        g = b("Event").getKeyCode(a), i()
    }

    function c() {
        g = null, j()
    }
    if (b("ExecutionEnvironment").canUseDOM) {
        d = document.documentElement;
        if (d)
            if (d.addEventListener) d.addEventListener("keydown", a, !0), d.addEventListener("keyup", c, !0);
            else if (d.attachEvent) {
            f = d.attachEvent;
            f("onkeydown", a);
            f("onkeyup", c)
        }
    }
    d = {
        isKeyDown: function() {
            return !!g
        },
        getKeyDownCode: function() {
            return g
        }
    };
    e.exports = d
}), null);
__d("setImmediate", ["TimerStorage", "TimeSlice", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        __p && __p();
        var c, d = function() {
            b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, c);
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, d);
        for (var e = arguments.length, f = new Array(e > 1 ? e - 1 : 0), g = 1; g < e; g++) f[g - 1] = arguments[g];
        c = b("setImmediateAcrossTransitions").apply(void 0, [d].concat(f));
        b("TimerStorage").set(b("TimerStorage").IMMEDIATE, c);
        return c
    }
    e.exports = a
}), null);
__d("Layer", ["invariant", "KeyStatus", "ArbiterMixin", "BehaviorsMixin", "BootloadedReact", "ContextualThing", "CSS", "DataStore", "DOM", "Event", "FBLogger", "HTML", "KeyEventController", "Parent", "Style", "ge", "isNode", "mixin", "removeFromArray", "setImmediate"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    b("KeyStatus");
    var h = [],
        i = function(c) {
            "use strict";
            __p && __p();
            babelHelpers.inheritsLoose(a, c);

            function a(a, d) {
                __p && __p();
                var e;
                e = c.call(this) || this;
                e._config = a || {};
                if (d) {
                    e._configure(e._config, d);
                    a = e._config.addedBehaviors || [];
                    e.enableBehaviors(e._getDefaultBehaviors().concat(a))
                } else b("FBLogger")("layer").warn("The markup param wasn't provided to the Layer constructor");
                return e
            }
            var d = a.prototype;
            d.init = function(a) {
                this._configure(this._config, a);
                a = this._config.addedBehaviors || [];
                this.enableBehaviors(this._getDefaultBehaviors().concat(a));
                this._initialized = !0;
                return this
            };
            d._configure = function(a, c) {
                __p && __p();
                var d = this;
                if (c) {
                    var e = b("isNode")(c),
                        f = typeof c === "string" || b("HTML").isHTML(c);
                    this.containsReactComponent = b("BootloadedReact").isValidElement(c);
                    !e && !f && !this.containsReactComponent && b("FBLogger")("layer").warn("Layer must be init with HTML, DOM node or React instance");
                    if (f) c = b("HTML")(c).getRootNode();
                    else if (this.containsReactComponent) {
                        e = document.createElement("div");
                        var g = !0;
                        b("BootloadedReact").render(c, e, function() {
                            d.inform("reactshow"), g || d.updatePosition()
                        });
                        g = !1;
                        c = this._reactContainer = e
                    }
                }
                this._root = this._buildWrapper(a, c);
                a.attributes && b("DOM").setAttributes(this._root, a.attributes);
                a.classNames && a.classNames.forEach(b("CSS").addClass.bind(null, this._root));
                b("CSS").addClass(this._root, "uiLayer");
                a.causalElement && (this._causalElement = b("ge")(a.causalElement));
                a.permanent && (this._permanent = a.permanent);
                a.isStrictlyControlled && (this._isStrictlyControlled = a.isStrictlyControlled);
                b("DataStore").set(this._root, "layer", this);
                return this
            };
            d._getDefaultBehaviors = function() {
                return []
            };
            d.getCausalElement = function() {
                return this._causalElement
            };
            d.setCausalElement = function(a) {
                this._causalElement = a;
                return this
            };
            d.getInsertParent = function() {
                return this._insertParent || document.body
            };
            d.getRoot = function() {
                this._root || (this._destroyed ? b("FBLogger")("layer").warn("No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.") : b("FBLogger")("layer").warn("No root node for this Layer. It has probably not been set."));
                return this._root
            };
            d.getContentRoot = function() {
                return this.getRoot()
            };
            d._buildWrapper = function(a, b) {
                return b
            };
            d.setInsertParent = function(a) {
                a && (this._shown && a !== this.getInsertParent() && (b("DOM").appendContent(a, this.getRoot()), this.updatePosition()), this._insertParent = a);
                return this
            };
            d.showAfterDelay = function(a) {
                window.setTimeout(this.show.bind(this), a)
            };
            d.show = function() {
                __p && __p();
                var c = this;
                if (this._shown) return this;
                var d = this.getRoot();
                d != null || g(0, 5142);
                this.inform("beforeshow");
                b("Style").set(d, "visibility", "hidden");
                b("Style").set(d, "overflow", "hidden");
                b("CSS").show(d);
                b("DOM").appendContent(this.getInsertParent(), d);
                this.updatePosition() !== !1 ? (this._shown = !0, this.inform("show"), a.inform("show", this), this._permanent || window.setTimeout(function() {
                    c._shown && h.push(c)
                }, 0)) : b("CSS").hide(d);
                b("Style").set(d, "visibility", "");
                b("Style").set(d, "overflow", "");
                b("Style").set(d, "opacity", "1");
                this.inform("aftershow");
                return this
            };
            d.hide = function(a) {
                if (this._isStrictlyControlled) {
                    this._shown && this.inform("runhide", a);
                    return this
                }
                return this._hide()
            };
            d._hide = function() {
                if (this._hiding || !this._shown || this.inform("beforehide") === !1) return this;
                this._hiding = !0;
                this.inform("starthide") !== !1 && this.finishHide();
                return this
            };
            d.conditionShow = function(a) {
                return a ? this.show() : this._hide()
            };
            d.finishHide = function() {
                __p && __p();
                if (this._shown) {
                    this._permanent || b("removeFromArray")(h, this);
                    this._hiding = !1;
                    this._shown = !1;
                    var c = this.getRoot();
                    c != null || g(0, 5143);
                    b("CSS").hide(c);
                    this.inform("hide");
                    a.inform("hide", this)
                }
            };
            d.isShown = function() {
                return this._shown
            };
            d.updatePosition = function() {
                return !0
            };
            d.destroy = function() {
                __p && __p();
                this.containsReactComponent && b("BootloadedReact").unmountComponentAtNode(this._reactContainer);
                this.finishHide();
                var c = this.getRoot();
                b("DOM").remove(c);
                this.destroyBehaviors();
                this.inform("destroy");
                a.inform("destroy", this);
                b("DataStore").remove(c, "layer");
                this._root = this._causalElement = null;
                this._destroyed = !0
            };
            a.init = function(a, b) {
                a.init(b)
            };
            a.initAndShow = function(a, b) {
                a.init(b).show()
            };
            a.show = function(a) {
                a.show()
            };
            a.showAfterDelay = function(a, b) {
                a.showAfterDelay(b)
            };
            a.getTopmostLayer = function() {
                return h[h.length - 1]
            };
            a.informBlur = function(a) {
                __p && __p();
                j = null;
                k = null;
                var c = h.length;
                if (!c) return;
                while (c--) {
                    var d = h[c],
                        e = d.getContentRoot();
                    e != null || g(0, 5144);
                    if (b("ContextualThing").containsIncludingLayers(e, a)) return;
                    if (d.inform("blur", {
                            target: a
                        }) === !1 || d.isShown()) return
                }
            };
            return a
        }(b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")));
    Object.assign(i, b("ArbiterMixin"));
    Object.assign(i.prototype, {
        _destroyed: !1,
        _initialized: !1,
        _root: null,
        _shown: !1,
        _hiding: !1,
        _causalElement: null,
        _reactContainer: null
    });
    b("Event").listen(document.documentElement, "keydown", function(a) {
        if (b("KeyEventController").filterEventTargets(a, "keydown"))
            for (var c = h.length - 1; c >= 0; c--)
                if (h[c].inform("key", a) === !1) return !1;
        return !0
    }, b("Event").Priority.URGENT);
    var j;
    b("Event").listen(document.documentElement, "mousedown", function(a) {
        j = a.getTarget()
    });
    var k;
    b("Event").listen(document.documentElement, "mouseup", function(a) {
        k = a.getTarget(), b("setImmediate")(function() {
            j = null, k = null
        })
    });
    b("Event").listen(document.documentElement, "click", function(a) {
        __p && __p();
        var c = j,
            d = k;
        j = null;
        k = null;
        var e = h.length;
        if (!e) return;
        e = a.getTarget();
        if (e !== d || e !== c) return;
        if (!b("DOM").contains(document.documentElement, e)) return;
        if (e.offsetWidth != null && !e.offsetWidth) return;
        if (b("Parent").byClass(e, "generic_dialog")) return;
        i.informBlur(e)
    });
    e.exports = i
}), null);
__d("Popup", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        open: function(a, b, c, d) {
            __p && __p();
            var e = [];
            b != null && b !== 0 && e.push("width=" + b);
            c != null && c !== 0 && e.push("height=" + c);
            var f = document.body;
            if (f != null && b != null && b !== 0 && c != null && c !== 0) {
                var g = "screenX" in window ? window.screenX : window.screenLeft,
                    h = "screenY" in window ? window.screenY : window.screenTop,
                    i = "outerWidth" in window ? window.outerWidth : f.clientWidth;
                f = "outerHeight" in window ? window.outerHeight : f.clientHeight - 22;
                g = Math.floor(g + (i - b) / 2);
                i = Math.floor(h + (f - c) / 2.5);
                e.push("left=" + g);
                e.push("top=" + i)
            }
            e.push("scrollbars");
            return window.open(a, d != null && d !== "" ? d : "_blank", e.join(","))
        }
    };
    e.exports = a
}), null);
__d("getViewportDimensions", ["UserAgent"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g() {
        var a;
        document.documentElement && (a = document.documentElement.clientWidth);
        a == null && document.body && (a = document.body.clientWidth);
        return a || 0
    }

    function h() {
        var a;
        document.documentElement && (a = document.documentElement.clientHeight);
        a == null && document.body && (a = document.body.clientHeight);
        return a || 0
    }

    function i() {
        return {
            width: window.innerWidth || g(),
            height: window.innerHeight || h()
        }
    }
    i.withoutScrollbars = function() {
        return b("UserAgent").isPlatform("Android") ? i() : {
            width: g(),
            height: h()
        }
    };
    e.exports = i
}), null);
__d("PopupWindow", ["DOMDimensions", "DOMQuery", "Layer", "Popup", "getViewportDimensions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        _opts: {
            allowShrink: !0,
            strategy: "vector",
            timeout: 100,
            widthElement: null
        },
        init: function(a) {
            Object.assign(g._opts, a), setInterval(g._resizeCheck, g._opts.timeout)
        },
        _resizeCheck: function() {
            __p && __p();
            var a = b("getViewportDimensions")(),
                c = g._getDocumentSize(),
                d = b("Layer").getTopmostLayer();
            if (d) {
                d = d.getRoot().firstChild;
                var e = b("DOMDimensions").getElementDimensions(d);
                e.height += b("DOMDimensions").measureElementBox(d, "height", !0, !0, !0);
                e.width += b("DOMDimensions").measureElementBox(d, "width", !0, !0, !0);
                c.height = Math.max(c.height, e.height);
                c.width = Math.max(c.width, e.width)
            }
            d = c.height - a.height;
            e = c.width - a.width;
            e < 0 && !g._opts.widthElement && (e = 0);
            e = e > 1 ? e : 0;
            !g._opts.allowShrink && d < 0 && (d = 0);
            if (d || e) try {
                window.console && window.console.firebug, window.resizeBy(e, d), e && window.moveBy(e / -2, 0)
            } catch (a) {}
        },
        _getDocumentSize: function() {
            var c = b("DOMDimensions").getDocumentDimensions();
            g._opts.strategy === "offsetHeight" && (c.height = document.body.offsetHeight);
            if (g._opts.widthElement) {
                var d = b("DOMQuery").scry(document.body, g._opts.widthElement)[0];
                d && (c.width = b("DOMDimensions").getElementDimensions(d).width)
            }
            d = a.Dialog;
            d && d.max_bottom && d.max_bottom > c.height && (c.height = d.max_bottom);
            return c
        },
        open: function(a, c, d, e) {
            return b("Popup").open(a, d, c, e)
        }
    };
    e.exports = g
}), null);
__d("PluginConfirm", ["DOMEvent", "DOMEventListener", "PlatformBaseVersioning", "PluginMessage", "PopupWindow", "URI"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        Object.assign(this, {
            plugin: a,
            confirm_params: {},
            return_params: b("URI").getRequestURI().getQueryData()
        }), this.addReturnParams({
            ret: "sentry"
        }), delete this.return_params.hash
    }
    Object.assign(g.prototype, {
        addConfirmParams: function(a) {
            Object.assign(this.confirm_params, a)
        },
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        start: function() {
            var a = b("PlatformBaseVersioning").versionAwareURI(new(b("URI"))("/plugins/error/confirm/" + this.plugin)).addQueryData(this.confirm_params).addQueryData({
                secure: b("URI").getRequestURI().isSecure(),
                plugin: this.plugin,
                return_params: JSON.stringify(this.return_params)
            });
            this.popup = b("PopupWindow").open(a.toString(), 320, 486);
            b("PluginMessage").listen();
            return this
        }
    });
    g.starter = function(a, b, c) {
        a = new g(a);
        a.addConfirmParams(b || {});
        a.addReturnParams(c || {});
        return a.start.bind(a)
    };
    g.listen = function(a, c, d, e) {
        b("DOMEventListener").add(a, "click", function(a) {
            new(b("DOMEvent"))(a).kill(), g.starter(c, d, e)()
        })
    };
    e.exports = g
}), null);
__d("FocusEvent", ["Event", "Run", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {},
        h = !1;

    function i(a, b) {
        if (g[a]) {
            b = g[a].indexOf(b);
            b >= 0 && g[a].splice(b, 1);
            g[a].length === 0 && delete g[a]
        }
    }

    function j(a) {
        var b = a.getTarget();
        if (g[b.id] && g[b.id].length > 0) {
            var c = a.type === "focusin" || a.type === "focus";
            g[b.id].forEach(function(a) {
                a(c)
            })
        }
    }

    function k() {
        if (h) return;
        b("Event").listen(document.documentElement, "focusout", j);
        b("Event").listen(document.documentElement, "focusin", j);
        h = !0
    }
    a = {
        listen: function(a, c) {
            __p && __p();
            k();
            var d = b("getOrCreateDOMID")(a);
            g[d] || (g[d] = []);
            g[d].push(c);
            var e = !1;

            function f() {
                e || (i(d, c), h && (h.remove(), h = null), e = !0)
            }
            var h = b("Run").onLeave(function() {
                b("ge")(d) || f()
            });
            return {
                remove: function() {
                    f()
                }
            }
        }
    };
    e.exports = a
}), null);
__d("tooltipPropsFor", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (!a) return {};
        a = {
            "data-tooltip-content": a,
            "data-hover": "tooltip"
        };
        b && (a["data-tooltip-position"] = b);
        c && (a["data-tooltip-alignh"] = c);
        return a
    }
    e.exports = a
}), null);
__d("TooltipData", ["DataStore", "DOM", "URI", "getElementText", "ifRequired", "isTextNode", "tooltipPropsFor"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        var c = a.getAttribute("data-tooltip-delay");
        c = c ? parseInt(c, 10) || 1e3 : 0;
        return babelHelpers["extends"]({
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction")
        }, b("DataStore").get(a, "tooltip"))
    }

    function h(a, c) {
        var d = g(a);
        b("DataStore").set(a, "tooltip", {
            content: c.content || d.content,
            position: c.position || d.position,
            alignH: c.alignH || d.alignH,
            suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
            overflowDisplay: c.overflowDisplay || d.overflowDisplay,
            persistOnClick: c.persistOnClick || d.persistOnClick
        })
    }

    function i(a, b) {
        h(a, b), a.setAttribute("data-hover", "tooltip")
    }

    function j(a, b) {}
    var k = {
        remove: function(a) {
            b("DataStore").remove(a, "tooltip"), a.removeAttribute("data-hover"), a.removeAttribute("data-tooltip-position"), a.removeAttribute("data-tooltip-alignh"), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.hide()
            })
        },
        set: function(a, c, d, e) {
            j(a, c);
            if (c instanceof b("URI")) a.setAttribute("data-tooltip-uri", c), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.fetchIfNecessary(a)
            });
            else {
                c = k._store({
                    context: a,
                    content: c,
                    position: d,
                    alignH: e
                });
                typeof c.content !== "string" ? a.setAttribute("data-tooltip-content", b("getElementText")(c.content)) : a.setAttribute("data-tooltip-content", c.content);
                b("ifRequired")("Tooltip", function(b) {
                    b.isActive(a) && b.show(a)
                })
            }
        },
        _store: function(a) {
            var c = a.context,
                d = a.content,
                e = a.position;
            a = a.alignH;
            j(c, d);
            b("isTextNode")(d) && (d = b("getElementText")(d));
            var f = !1;
            typeof d !== "string" ? d = b("DOM").create("div", {}, d) : f = d === "";
            a = {
                alignH: a,
                content: d,
                position: e,
                suppress: f
            };
            i(c, a);
            return a
        },
        propsFor: b("tooltipPropsFor"),
        enableDisplayOnOverflow: function(a) {
            a.removeAttribute("data-tooltip-display"), i(a, {
                overflowDisplay: !0
            })
        },
        enablePersistOnClick: function(a) {
            a.removeAttribute("data-pitloot-persistOnClick"), i(a, {
                persistOnClick: !0
            })
        },
        suppress: function(a, b) {
            h(a, {
                suppress: b
            })
        },
        _get: g
    };
    e.exports = k
}), null);
__d("cx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("cx: Unexpected class transformation.")
    }
    e.exports = a
}), null);
__d("Focus", ["cx", "CSS", "Event", "FocusEvent", "KeyStatus", "TooltipData", "ifRequired"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("KeyStatus").isKeyDown,
        i = {
            set: function(a, c) {
                c === void 0 && (c = !1);
                if (a) {
                    var d = b("ifRequired")("VirtualCursorStatus", function(a) {
                        return a.isVirtualCursorTriggered()
                    }, function() {
                        return !1
                    });
                    c || h() || d ? j(a) : i.setWithoutOutline(a)
                }
            },
            setWithoutOutline: function(a) {
                if (a) {
                    b("CSS").addClass(a, "_5f0v");
                    var c = b("Event").listen(a, "blur", function() {
                        a && b("CSS").removeClass(a, "_5f0v"), c.remove()
                    });
                    b("TooltipData").suppress(a, !0);
                    j(a);
                    b("TooltipData").suppress(a, !1)
                }
            },
            relocate: function(a, c) {
                b("CSS").addClass(a, "_5f0v");
                return b("FocusEvent").listen(a, this.performRelocation.bind(this, a, c))
            },
            performRelocation: function(a, c, d) {
                b("CSS").addClass(a, "_5f0v");
                a = b("ifRequired")("FocusRing", function(a) {
                    return a.usingKeyboardNavigation()
                }, function() {
                    return !0
                });
                d = d && a;
                b("CSS").conditionClass(c, "_3oxt", d);
                b("CSS").conditionClass(c, "_16jm", d)
            }
        };

    function j(a) {
        try {
            a.tabIndex = a.tabIndex, a.focus()
        } catch (a) {}
    }
    e.exports = i
}), null);
__d("IntervalTrackingBoundedBuffer", ["CircularBuffer", "ErrorUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 5e3;
    a = function() {
        __p && __p();

        function a(a) {
            __p && __p();
            var c = this;
            this.$6 = 0;
            if (a != null) {
                if (a <= 0) throw new Error("Size for a buffer must be greater than zero.")
            } else a = g;
            this.$4 = a;
            this.$1 = new(b("CircularBuffer"))(a);
            this.$1.onEvict(function() {
                c.$6++
            });
            this.$2 = [];
            this.$3 = 1;
            this.$5 = 0
        }
        var c = a.prototype;
        c.open = function() {
            __p && __p();
            var a = this,
                b = this.$3++,
                c = !1,
                d, e = this.$5,
                f = {
                    id: b,
                    startIdx: e,
                    hasOverflown: function() {
                        return f.getOverflowSize() > 0
                    },
                    getOverflowSize: function() {
                        return d != null ? d : Math.max(a.$6 - e, 0)
                    },
                    close: function() {
                        if (c) return [];
                        else {
                            c = !0;
                            d = a.$6 - e;
                            return a.$7(b)
                        }
                    }
                };
            this.$2.push(f);
            return f
        };
        c.pushElement = function(a) {
            this.$2.length > 0 && (this.$1.write(a), this.$5++);
            return this
        };
        c.isActive = function() {
            return this.$2.length > 0
        };
        c.$8 = function(a) {
            return Math.max(a - this.$6, 0)
        };
        c.$7 = function(a) {
            __p && __p();
            var c, d, e, f;
            for (var g = 0; g < this.$2.length; g++) {
                var h = this.$2[g],
                    i = h.startIdx;
                h = h.id;
                h === a ? (e = g, f = i) : (d == null || i < d) && (d = i);
                (c == null || i < c) && (c = i)
            }
            if (e == null || c == null || f == null) {
                b("ErrorUtils").reportError(new Error("messed up state inside IntervalTrackingBoundedBuffer"));
                return []
            }
            this.$2.splice(e, 1);
            h = this.$8(f);
            i = this.$1.read().slice(h);
            g = this.$8(d == null ? this.$5 : d) - this.$8(c);
            g > 0 && (this.$1.dropFirst(g), this.$6 += g);
            return i
        };
        return a
    }();
    e.exports = a
}), null);
__d("ArtilleryAsyncRequestTracingAnnotator", ["FBLogger", "IntervalTrackingBoundedBuffer", "ResourceTimingsStore", "ResourceTypes"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [1e3],
        h = new(b("IntervalTrackingBoundedBuffer"))(),
        i = "FB-ART-INFO",
        j = new Map();

    function k(a, b) {
        return b != null && b.artillery_join_data != null ? {
            uid: a,
            ids_for_timings: b.artillery_join_data
        } : null
    }
    a = {
        startTracingWindow: function(a, b, c) {
            c === void 0 && (c = null);
            var d = h.open();
            c = c || g;
            j.set(a, {
                trace_id: a,
                interaction_name: b,
                tracing_levels: c
            });
            return {
                finishTracingWindow: function() {
                    j["delete"](a);
                    return d.close()
                }
            }
        },
        registerAsyncRequest: function(a, c) {
            if (j.size === 0) return function() {};
            else {
                var d = JSON.stringify(Array.from(j.values()));
                a.setRequestHeader(i, d);
                return function(a) {
                    a = k(c, a);
                    a != null ? h.pushElement(a) : (b("FBLogger")("ArtilleryAsyncRequestTracingAnnotator").debug("expected a payload back in the response from the server containing trace information, but nothing arrived."), b("ResourceTimingsStore").annotate(b("ResourceTypes").XHR, c).addStringAnnotation("join_error", "join_data_expected_but_not_found"))
                }
            }
        },
        __active: function() {
            throw new Error("__active should only be available in __DEV__")
        }
    };
    e.exports = a
}), null);
__d("AsyncDOM", ["CSS", "DOM", "FBLogger"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        invoke: function(a, c) {
            __p && __p();
            for (var d = 0; d < a.length; ++d) {
                var e = a[d],
                    f = e[0],
                    g = e[1],
                    h = e[2];
                e = e[3];
                h = h && c || null;
                g && (h = b("DOM").scry(h || document.documentElement, g)[0]);
                f != "eval" && !h && b("FBLogger")("async_dom").warn("Could not find relativeTo element for %s AsyncDOM operation based on selector: %s", f, g);
                switch (f) {
                    case "eval":
                        new Function(e).apply(h);
                        break;
                    case "hide":
                        b("CSS").hide(h);
                        break;
                    case "show":
                        b("CSS").show(h);
                        break;
                    case "setContent":
                        b("DOM").setContent(h, e);
                        break;
                    case "appendContent":
                        b("DOM").appendContent(h, e);
                        break;
                    case "prependContent":
                        b("DOM").prependContent(h, e);
                        break;
                    case "insertAfter":
                        b("DOM").insertAfter(h, e);
                        break;
                    case "insertBefore":
                        b("DOM").insertBefore(h, e);
                        break;
                    case "remove":
                        b("DOM").remove(h);
                        break;
                    case "replace":
                        b("DOM").replace(h, e);
                        break;
                    default:
                        b("FBLogger")("async_dom").warn("Received invalid command %s for AsyncDOM operation", f)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("AsyncResponse", ["invariant", "Bootloader", "FBLogger", "HTML"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a(a, b) {
            this.error = 0, this.errorSummary = null, this.errorDescription = null, this.onload = null, this.replay = !1, this.payload = b, this.request = a, this.silentError = !1, this.transientError = !1, this.blockedAction = !1, this.is_last = !0, this.responseHeaders = null
        }
        var c = a.prototype;
        c.getRequest = function() {
            return this.request
        };
        c.getPayload = function() {
            return this.payload
        };
        c.toError = function() {
            this.error !== 0 || g(0, 5599);
            var a = this.errorSummary || "",
                b = this.getErrorDescriptionString() || "",
                c = new Error(a.toString() + ": " + b);
            Object.assign(c, {
                code: this.error,
                description: this.errorDescription || "",
                descriptionString: b,
                response: this,
                summary: a,
                isSilent: this.silentError,
                isTransient: this.transientError
            });
            return c
        };
        c.getError = function() {
            return this.error
        };
        c.getErrorSummary = function() {
            return this.errorSummary
        };
        c.setErrorSummary = function(a) {
            a = a === void 0 ? null : a;
            this.errorSummary = a;
            return this
        };
        c.getErrorDescription = function() {
            return this.errorDescription
        };
        c.getErrorDescriptionString = function() {
            var a = this.getErrorDescription();
            if (a == null) return null;
            if (b("HTML").isHTML(a)) {
                var c = new(b("HTML"))(a);
                return c.getRootNode().textContent
            }
            return a.toString()
        };
        c.getErrorIsWarning = function() {
            return !!this.errorIsWarning
        };
        c.isTransient = function() {
            return !!this.transientError
        };
        c.isBlockedAction = function() {
            return !!this.blockedAction
        };
        c.getResponseHeader = function(a) {
            __p && __p();
            var b = this.responseHeaders;
            if (!b) return null;
            b = b.replace(/^\n/, "");
            a = a.toLowerCase();
            b = b.split("\r\n");
            for (var c = 0; c < b.length; ++c) {
                var d = b[c],
                    e = d.indexOf(": ");
                if (e <= 0) continue;
                var f = d.substring(0, e).toLowerCase();
                if (f === a) return d.substring(e + 2)
            }
            return null
        };
        a.defaultErrorHandler = function(c) {
            try {
                !c.silentError ? a.verboseErrorHandler(c) : b("FBLogger")("async_response").catching(c.toError()).warn("default error handler called")
            } catch (a) {
                alert(c)
            }
        };
        a.verboseErrorHandler = function(a, c) {
            b("Bootloader").loadModules(["ExceptionDialog"], function(b) {
                return b.showAsyncError(a, c)
            }, "AsyncResponse")
        };
        return a
    }();
    e.exports = a
}), null);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    b("Promise").resolve();
    a = function() {
        __p && __p();

        function a(a) {
            var c = this;
            a = a || b("Promise");
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    e.exports = a
}), null);
__d("FetchStreamConfig", [], (function(a, b, c, d, e, f) {
    e.exports = {
        delim: "/*<!-- fetch-stream -->*/"
    }
}), null);
__d("regeneratorRuntime", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = Object.prototype.hasOwnProperty,
        h = typeof Symbol === "function" && (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") || "@@iterator",
        i = e.exports;

    function j(a, b, c, d) {
        b = Object.create((b || q).prototype);
        d = new z(d || []);
        b._invoke = w(a, c, d);
        return b
    }
    i.wrap = j;

    function k(a, b, c) {
        try {
            return {
                type: "normal",
                arg: a.call(b, c)
            }
        } catch (a) {
            return {
                type: "throw",
                arg: a
            }
        }
    }
    var l = "suspendedStart",
        m = "suspendedYield",
        n = "executing",
        o = "completed",
        p = {};

    function q() {}

    function r() {}

    function s() {}
    var t = s.prototype = q.prototype;
    r.prototype = t.constructor = s;
    s.constructor = r;
    r.displayName = "GeneratorFunction";

    function a(a) {
        ["next", "throw", "return"].forEach(function(b) {
            a[b] = function(a) {
                return this._invoke(b, a)
            }
        })
    }
    i.isGeneratorFunction = function(a) {
        a = typeof a === "function" && a.constructor;
        return a ? a === r || (a.displayName || a.name) === "GeneratorFunction" : !1
    };
    i.mark = function(a) {
        Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : Object.assign(a, s);
        a.prototype = Object.create(t);
        return a
    };
    i.awrap = function(a) {
        return new u(a)
    };

    function u(a) {
        this.arg = a
    }

    function v(a) {
        __p && __p();

        function c(c, f) {
            var g = a[c](f);
            c = g.value;
            return c instanceof u ? b("Promise").resolve(c.arg).then(d, e) : b("Promise").resolve(c).then(function(a) {
                g.value = a;
                return g
            })
        }
        typeof process === "object" && process.domain && (c = process.domain.bind(c));
        var d = c.bind(a, "next"),
            e = c.bind(a, "throw");
        c.bind(a, "return");
        var f;

        function g(a, d) {
            var e = f ? f.then(function() {
                return c(a, d)
            }) : new(b("Promise"))(function(b) {
                b(c(a, d))
            });
            f = e["catch"](function(a) {});
            return e
        }
        this._invoke = g
    }
    a(v.prototype);
    i.async = function(a, b, c, d) {
        var e = new v(j(a, b, c, d));
        return i.isGeneratorFunction(b) ? e : e.next().then(function(a) {
            return a.done ? a.value : e.next()
        })
    };

    function w(a, b, c) {
        __p && __p();
        var d = l;
        return function(e, f) {
            __p && __p();
            if (d === n) throw new Error("Generator is already running");
            if (d === o) {
                if (e === "throw") throw f;
                return B()
            }
            while (!0) {
                var g = c.delegate;
                if (g) {
                    if (e === "return" || e === "throw" && g.iterator[e] === void 0) {
                        c.delegate = null;
                        var h = g.iterator["return"];
                        if (h) {
                            h = k(h, g.iterator, f);
                            if (h.type === "throw") {
                                e = "throw";
                                f = h.arg;
                                continue
                            }
                        }
                        if (e === "return") continue
                    }
                    h = k(g.iterator[e], g.iterator, f);
                    if (h.type === "throw") {
                        c.delegate = null;
                        e = "throw";
                        f = h.arg;
                        continue
                    }
                    e = "next";
                    f = void 0;
                    var i = h.arg;
                    if (i.done) c[g.resultName] = i.value, c.next = g.nextLoc;
                    else {
                        d = m;
                        return i
                    }
                    c.delegate = null
                }
                if (e === "next") d === m ? c.sent = f : c.sent = void 0;
                else if (e === "throw") {
                    if (d === l) {
                        d = o;
                        throw f
                    }
                    c.dispatchException(f) && (e = "next", f = void 0)
                } else e === "return" && c.abrupt("return", f);
                d = n;
                h = k(a, b, c);
                if (h.type === "normal") {
                    d = c.done ? o : m;
                    var i = {
                        value: h.arg,
                        done: c.done
                    };
                    if (h.arg === p) c.delegate && e === "next" && (f = void 0);
                    else return i
                } else h.type === "throw" && (d = o, e = "throw", f = h.arg)
            }
        }
    }
    a(t);
    t[h] = function() {
        return this
    };
    t.toString = function() {
        return "[object Generator]"
    };

    function x(a) {
        var b = {
            tryLoc: a[0]
        };
        1 in a && (b.catchLoc = a[1]);
        2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]);
        this.tryEntries.push(b)
    }

    function y(a) {
        var b = a.completion || {};
        b.type = "normal";
        delete b.arg;
        a.completion = b
    }

    function z(a) {
        this.tryEntries = [{
            tryLoc: "root"
        }], a.forEach(x, this), this.reset(!0)
    }
    i.keys = function(a) {
        __p && __p();
        var b = [];
        for (var c in a) b.push(c);
        b.reverse();
        return function c() {
            __p && __p();
            while (b.length) {
                var d = b.pop();
                if (d in a) {
                    c.value = d;
                    c.done = !1;
                    return c
                }
            }
            c.done = !0;
            return c
        }
    };

    function A(a) {
        __p && __p();
        if (a) {
            var b = a[h];
            if (b) return b.call(a);
            if (typeof a.next === "function") return a;
            if (!isNaN(a.length)) {
                var c = -1;
                b = function b() {
                    while (++c < a.length)
                        if (g.call(a, c)) {
                            b.value = a[c];
                            b.done = !1;
                            return b
                        }
                    b.value = void 0;
                    b.done = !0;
                    return b
                };
                return b.next = b
            }
        }
        return {
            next: B
        }
    }
    i.values = A;

    function B() {
        return {
            value: void 0,
            done: !0
        }
    }
    z.prototype = {
        constructor: z,
        reset: function(a) {
            this.prev = 0;
            this.next = 0;
            this.sent = void 0;
            this.done = !1;
            this.delegate = null;
            this.tryEntries.forEach(y);
            if (!a)
                for (var b in this) b.charAt(0) === "t" && g.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = void 0)
        },
        stop: function() {
            this.done = !0;
            var a = this.tryEntries[0];
            a = a.completion;
            if (a.type === "throw") throw a.arg;
            return this.rval
        },
        dispatchException: function(a) {
            __p && __p();
            if (this.done) throw a;
            var b = this;

            function c(c, d) {
                f.type = "throw";
                f.arg = a;
                b.next = c;
                return !!d
            }
            for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                var e = this.tryEntries[d],
                    f = e.completion;
                if (e.tryLoc === "root") return c("end");
                if (e.tryLoc <= this.prev) {
                    var h = g.call(e, "catchLoc"),
                        i = g.call(e, "finallyLoc");
                    if (h && i) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0);
                        else if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else if (h) {
                        if (this.prev < e.catchLoc) return c(e.catchLoc, !0)
                    } else if (i) {
                        if (this.prev < e.finallyLoc) return c(e.finallyLoc)
                    } else throw new Error("try statement without catch or finally")
                }
            }
        },
        abrupt: function(a, b) {
            __p && __p();
            for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                var d = this.tryEntries[c];
                if (d.tryLoc <= this.prev && g.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                    var e = d;
                    break
                }
            }
            e && (a === "break" || a === "continue") && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
            d = e ? e.completion : {};
            d.type = a;
            d.arg = b;
            e ? this.next = e.finallyLoc : this.complete(d);
            return p
        },
        complete: function(a, b) {
            if (a.type === "throw") throw a.arg;
            a.type === "break" || a.type === "continue" ? this.next = a.arg : a.type === "return" ? (this.rval = a.arg, this.next = "end") : a.type === "normal" && b && (this.next = b)
        },
        finish: function(a) {
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.finallyLoc === a) {
                    this.complete(c.completion, c.afterLoc);
                    y(c);
                    return p
                }
            }
        },
        "catch": function(a) {
            __p && __p();
            for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                var c = this.tryEntries[b];
                if (c.tryLoc === a) {
                    var d = c.completion;
                    if (d.type === "throw") {
                        var e = d.arg;
                        y(c)
                    }
                    return e
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(a, b, c) {
            this.delegate = {
                iterator: A(a),
                resultName: b,
                nextLoc: c
            };
            return p
        }
    }
}), null);
__d("StreamBlockReader", ["Promise", "regeneratorRuntime"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            __p && __p();
            var c = this;
            if (!a.getReader) throw new Error("No getReader method found on given object");
            this.$3 = a.getReader();
            this.$1 = "";
            this.$2 = null;
            this.$4 = !1;
            this.$5 = "utf-8";
            this.$6 = "";
            this.$9 = !1;
            this.$8 = function() {
                return b("Promise").reject("Sorry, you are somehow using this too early.")
            };
            this.$7 = new(b("Promise"))(function(a, b) {
                c.$8 = a
            })
        }
        var c = a.prototype;
        c.changeEncoding = function(a) {
            if (this.$2) throw new Error("Decoder already in use, encoding cannot be changed");
            this.$5 = a
        };
        c.$10 = function() {
            if (!self.TextDecoder) throw new Error("TextDecoder is not supported here");
            this.$2 || (this.$2 = new self.TextDecoder(this.$5));
            return this.$2
        };
        c.$11 = function() {
            if (this.$9) throw new Error("Something else is already reading from this reader");
            this.$9 = !0
        };
        c.$12 = function() {
            this.$9 = !1
        };
        c.isDone = function() {
            return this.$4
        };
        c.$13 = function() {
            __p && __p();
            var a, c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                __p && __p();
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (!(this.$6 !== "")) {
                            f.next = 4;
                            break
                        }
                        a = this.$6;
                        this.$6 = "";
                        return f.abrupt("return", a);
                    case 4:
                        if (!this.isDone()) {
                            f.next = 6;
                            break
                        }
                        throw new Error("You cannot read from a stream that is done");
                    case 6:
                        f.next = 8;
                        return b("regeneratorRuntime").awrap(this.$3.read());
                    case 8:
                        c = f.sent;
                        d = c.done;
                        e = c.value;
                        this.$4 = d;
                        d && this.$8();
                        return f.abrupt("return", e ? this.$10().decode(e, {
                            stream: !d
                        }) : "");
                    case 14:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readNextBlock = function() {
            var a;
            return b("regeneratorRuntime").async(function(b) {
                while (1) switch (b.prev = b.next) {
                    case 0:
                        this.$11();
                        a = this.$13();
                        this.$12();
                        return b.abrupt("return", a);
                    case 4:
                    case "end":
                        return b.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrEnd = function(a) {
            return b("regeneratorRuntime").async(function(c) {
                while (1) switch (c.prev = c.next) {
                    case 0:
                        c.next = 2;
                        return b("regeneratorRuntime").awrap(this.readUntilOneOfStringOrEnd_DO_NOT_USE([a]));
                    case 2:
                        return c.abrupt("return", c.sent);
                    case 3:
                    case "end":
                        return c.stop()
                }
            }, null, this)
        };
        c.readUntilStringOrThrow = function(a) {
            __p && __p();
            var c, d, e;
            return b("regeneratorRuntime").async(function(f) {
                __p && __p();
                while (1) switch (f.prev = f.next) {
                    case 0:
                        if (a) {
                            f.next = 2;
                            break
                        }
                        throw new Error("cannot read empty string");
                    case 2:
                        this.$11(), c = "", d = 0;
                    case 5:
                        if (this.isDone()) {
                            f.next = 23;
                            break
                        }
                        f.t0 = c;
                        f.next = 9;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 9:
                        c = f.t0 += f.sent;
                        if (!(c.length < a.length)) {
                            f.next = 12;
                            break
                        }
                        return f.abrupt("continue", 5);
                    case 12:
                        e = c.substring(d).indexOf(a);
                        if (!(e !== -1)) {
                            f.next = 20;
                            break
                        }
                        e += d;
                        this.$6 = c.substring(e + a.length);
                        this.$12();
                        return f.abrupt("return", c.substring(0, e));
                    case 20:
                        d = c.length - a.length + 1;
                    case 21:
                        f.next = 5;
                        break;
                    case 23:
                        this.$6 = c;
                        this.$12();
                        throw new Error("Breakpoint not found");
                    case 26:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        c.readUntilOneOfStringOrEnd_DO_NOT_USE = function(a) {
            __p && __p();
            var c, d, e, f;
            return b("regeneratorRuntime").async(function(g) {
                __p && __p();
                while (1) switch (g.prev = g.next) {
                    case 0:
                        this.$11(), c = "";
                    case 2:
                        if (this.isDone()) {
                            g.next = 20;
                            break
                        }
                        g.t0 = c;
                        g.next = 6;
                        return b("regeneratorRuntime").awrap(this.$13());
                    case 6:
                        c = g.t0 += g.sent, d = 0;
                    case 8:
                        if (!(d < a.length)) {
                            g.next = 18;
                            break
                        }
                        e = a[d];
                        f = c.indexOf(e);
                        if (!(f !== -1)) {
                            g.next = 15;
                            break
                        }
                        this.$6 = c.substring(f + e.length);
                        this.$12();
                        return g.abrupt("return", c.substring(0, f));
                    case 15:
                        d++;
                        g.next = 8;
                        break;
                    case 18:
                        g.next = 2;
                        break;
                    case 20:
                        this.$12();
                        return g.abrupt("return", c);
                    case 22:
                    case "end":
                        return g.stop()
                }
            }, null, this)
        };
        c.waitUntilDone = function() {
            return b("regeneratorRuntime").async(function(a) {
                while (1) switch (a.prev = a.next) {
                    case 0:
                        return a.abrupt("return", this.$7);
                    case 1:
                    case "end":
                        return a.stop()
                }
            }, null, this)
        };
        return a
    }();
    e.exports = a
}), null);
__d("nullthrows", [], (function(a, b, c, d, e, f) {
    a = function(a, b) {
        b === void 0 && (b = "Got unexpected null or undefined");
        if (a != null) return a;
        a = new Error(b);
        a.framesToPop = 1;
        throw a
    };
    e.exports = a
}), null);
__d("FetchStreamTransport", ["regeneratorRuntime", "ArbiterMixin", "FBLogger", "FetchStreamConfig", "StreamBlockReader", "TimeSlice", "URI", "mixin", "nullthrows"], (function $module_FetchStreamTransport(global, require, requireDynamic, requireLazy, module, exports) {
    __p && __p();
    var instance_count = 0,
        FetchStreamTransport = function(_mixin) {
            "use strict";
            __p && __p();
            babelHelpers.inheritsLoose(FetchStreamTransport, _mixin);

            function FetchStreamTransport(uri) {
                __p && __p();
                var _this;
                if (!self.ReadableStream || !self.fetch || !Request || !TextDecoder) throw new Error("fetch stream transport is not supported here");
                _this = _mixin.call(this) || this;
                _this.$FetchStreamTransport6 = null;
                _this.$FetchStreamTransport1 = uri;
                _this.$FetchStreamTransport3 = !1;
                _this.$FetchStreamTransport4 = !1;
                _this.$FetchStreamTransport5 = !1;
                _this.$FetchStreamTransport2 = ++instance_count;
                return babelHelpers.assertThisInitialized(_this) || babelHelpers.assertThisInitialized(_this)
            }
            var _proto = FetchStreamTransport.prototype;
            _proto.hasFinished = function hasFinished() {
                return this.$FetchStreamTransport5
            };
            _proto.getRequestURI = function getRequestURI() {
                return new(require("URI"))(this.$FetchStreamTransport1).addQueryData({
                    __a: 1,
                    __adt: this.$FetchStreamTransport2,
                    __req: "fetchstream_" + this.$FetchStreamTransport2,
                    ajaxpipe_fetch_stream: 1
                })
            };
            _proto.send = function send() {
                if (this.$FetchStreamTransport3) throw new Error("FetchStreamTransport instances cannot be re-used.");
                this.$FetchStreamTransport3 = !0;
                var req = new Request(this.getRequestURI().toString(), {
                    mode: "same-origin",
                    credentials: "include"
                });
                this.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on first response");
                var fetchPromise = self.fetch(req, {
                    redirect: "follow"
                });
                this.$FetchStreamTransport7(fetchPromise)
            };
            _proto.$FetchStreamTransport7 = function $FetchStreamTransport7(fetchPromise) {
                __p && __p();
                var _this2 = this,
                    response, reader, first, _loop, _ret;
                return require("regeneratorRuntime").async(function $FetchStreamTransport7$(_context2) {
                    __p && __p();
                    while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return require("regeneratorRuntime").awrap(fetchPromise);
                        case 3:
                            response = _context2.sent;
                            _context2.next = 9;
                            break;
                        case 6:
                            _context2.prev = 6, _context2.t0 = _context2["catch"](0), this.abort();
                        case 9:
                            if (!(!response || !response.body || !response.ok)) {
                                _context2.next = 12;
                                break
                            }
                            this.abort();
                            return _context2.abrupt("return");
                        case 12:
                            reader = new(require("StreamBlockReader"))(response.body), first = !0, _loop = function _loop() {
                                __p && __p();
                                var nextData;
                                return require("regeneratorRuntime").async(function _loop$(_context) {
                                    __p && __p();
                                    while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return require("regeneratorRuntime").awrap(reader.readUntilStringOrEnd(require("FetchStreamConfig").delim));
                                        case 2:
                                            nextData = _context.sent;
                                            if (!_this2.$FetchStreamTransport4) {
                                                _context.next = 5;
                                                break
                                            }
                                            return _context.abrupt("return", "break");
                                        case 5:
                                            require("nullthrows")(_this2.$FetchStreamTransport6)(function() {
                                                __p && __p();
                                                if (first && nextData.startsWith("<")) {
                                                    require("FBLogger")("FetchStreamTransport").mustfix("Endpoint: %s is sending a raw HTML response instead of properly formatted payload", _this2.$FetchStreamTransport1.toString());
                                                    var node = document.createElement("div");
                                                    node.innerHTML = nextData;
                                                    var scripts = node.getElementsByTagName("script");
                                                    for (var i = 0; i < scripts.length; i++) eval(scripts[i].innerHTML);
                                                    _this2.$FetchStreamTransport5 = !0;
                                                    return
                                                }
                                                first = !1;
                                                var parsedResponse = JSON.parse(nextData);
                                                reader.isDone() || parsedResponse.finished ? _this2.$FetchStreamTransport5 = !0 : _this2.$FetchStreamTransport6 = require("TimeSlice").getGuardedContinuation("FetchStreamTransport: waiting on next response");
                                                _this2.inform("response", parsedResponse.content)
                                            });
                                        case 6:
                                        case "end":
                                            return _context.stop()
                                    }
                                }, null, this)
                            };
                        case 15:
                            if (!(!this.$FetchStreamTransport5 && !this.$FetchStreamTransport4)) {
                                _context2.next = 23;
                                break
                            }
                            _context2.next = 18;
                            return require("regeneratorRuntime").awrap(_loop());
                        case 18:
                            _ret = _context2.sent;
                            if (!(_ret === "break")) {
                                _context2.next = 21;
                                break
                            }
                            return _context2.abrupt("break", 23);
                        case 21:
                            _context2.next = 15;
                            break;
                        case 23:
                        case "end":
                            return _context2.stop()
                    }
                }, null, this, [
                    [0, 6]
                ])
            };
            _proto.abort = function abort() {
                __p && __p();
                var _this3 = this;
                if (this.$FetchStreamTransport4 || this.$FetchStreamTransport5) return;
                this.$FetchStreamTransport4 = !0;
                this.$FetchStreamTransport5 = !0;
                if (this.$FetchStreamTransport6) {
                    var continuation = this.$FetchStreamTransport6;
                    continuation(function() {
                        _this3.inform("abort")
                    })
                } else this.inform("abort")
            };
            return FetchStreamTransport
        }(require("mixin")(require("ArbiterMixin")));
    module.exports = FetchStreamTransport
}), null);
__d("HTTPErrors", ["emptyFunction"], (function(a, b, c, d, e, f) {
    a = {
        get: b("emptyFunction"),
        getAll: b("emptyFunction")
    };
    e.exports = a
}), null);
__d("JSCC", [], (function $module_JSCC(global, require, requireDynamic, requireLazy, module, exports) {
    __p && __p();
    var factories = {};

    function createFactory(constructor) {
        var instance, constructed = !1;
        return function() {
            constructed || (instance = constructor(), constructed = !0);
            return instance
        }
    }
    var JSCC = {
        get: function get(key) {
            if (!factories[key]) throw new Error("JSCC entry is missing");
            return factories[key]()
        },
        init: function init(constructors) {
            for (var key in constructors) factories[key] = createFactory(constructors[key]);
            return function clearJSCC() {
                for (var key in constructors) delete factories[key]
            }
        },
        parse: function parse(jsccMapString) {
            return eval(jsccMapString)
        }
    };
    module.exports = JSCC
}), null);
__d("ExecutionContextObservers", [], (function(a, b, c, d, e, f) {
    a = {
        MUTATION_COUNTING: 0,
        PROFILING_COUNTERS: 1,
        REFERENCE_COUNTING: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        ASYNC_PROFILER: 5,
        TIMESLICE_EXECUTION_LOGGER: 6,
        FLUX_PERF_TOOL: 7
    };
    b = {
        MUTATION_COUNTING: 0,
        REFERENCE_COUNTING: 1,
        PROFILING_COUNTERS: 2,
        HEARTBEAT: 3,
        CALL_STACK: 4,
        ASYNC_PROFILER: 5,
        TIMESLICE_EXECUTION_LOGGER: 6,
        FLUX_PERF_TOOL: 7
    };
    c = {
        beforeIDs: a,
        afterIDs: b
    };
    e.exports = c
}), null);
__d("OnDemandExecutionContextObserver", ["TimeSlice"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$5 = !1, this.$4 = !1, this.$1 = 0, this.$2 = {}, this.$3 = 0
        }
        var c = a.prototype;
        c.onNewContextCreatedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onNewContextCreatedWhileDisabled = function(a, b, c) {};
        c.onContextCanceled = function(a, b) {};
        c.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            throw Error("unimplemented abstract method")
        };
        c.onBeforeContextStartedWhileDisabled = function(a, b, c) {};
        c.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextStartedWhileDisabled = function(a, b, c, d) {};
        c.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            throw Error("unimplemented abstract method")
        };
        c.onAfterContextEndedWhileDisabled = function(a, b, c, d) {};
        c.onNewContextCreated = function(a, b, c) {
            if (this.isEnabled()) return this.onNewContextCreatedWhileEnabled(a, b, c);
            else {
                this.onNewContextCreatedWhileDisabled(a, b, c);
                return null
            }
        };
        c.onBeforeContextStarted = function(a, b, c) {
            if (this.isEnabled()) return this.onBeforeContextStartedWhileEnabled(a, b, c);
            else {
                this.onBeforeContextStartedWhileDisabled(a, b, c);
                return null
            }
        };
        c.onAfterContextStarted = function(a, b, c, d) {
            c = c;
            if (this.isEnabled()) return this.onAfterContextStartedWhileEnabled(a, b, c, d);
            else {
                this.onAfterContextStartedWhileDisabled(a, b, c, d);
                return null
            }
        };
        c.onAfterContextEnded = function(a, b, c, d) {
            if (this.isEnabled()) {
                var e = c;
                this.onAfterContextEndedWhileEnabled(a, b, e, d)
            } else this.onAfterContextEndedWhileDisabled(a, b, c, d);
            this.$4 && !this.$5 && a.isRoot && (this.onDisable(), this.$4 = !1)
        };
        c.onDisable = function() {};
        c.onEnable = function() {};
        c.getBeforeID = function() {
            throw Error("unimplemented abstract method")
        };
        c.getAfterID = function() {
            throw Error("unimplemented abstract method")
        };
        c.isEnabled = function() {
            return this.$4
        };
        c.__getExpiryCallback = function() {
            var a = this,
                b = ++this.$1;
            this.$2[b] = !0;
            this.$3++;
            return function() {
                a.$2[b] && (delete a.$2[b], a.$3--, a.$3 === 0 && (a.$5 = !1))
            }
        };
        c.expressInterest = function() {
            var a = this.__getExpiryCallback();
            this.isEnabled() || (this.onEnable(), b("TimeSlice").catchUpOnDemandExecutionContextObservers(this));
            this.$4 = !0;
            this.$5 = !0;
            return a
        };
        return a
    }();
    e.exports = a
}), null);
__d("ProfilingCountersStore", ["IntervalTrackingBoundedBuffer"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new(b("IntervalTrackingBoundedBuffer"))(),
        h = {
            getInstance: function() {
                return g
            },
            toMap: function(a) {
                var b = {};
                a.forEach(function(a) {
                    return b[a.getTimeSliceContextID()] = a
                });
                return b
            },
            getNestedTotals: function(a) {
                return h._accumulateOverNestedActiveCounters(a, function(a, b) {
                    h._addOnto(b, a.getActiveCounters().getTotals());
                    return b
                }, {})
            },
            _accumulateOverNestedActiveCounters: function(a, b, c) {
                __p && __p();
                c = c;
                a.hasActiveCounters() && (c = b(a, c));
                if (a.processedNestedContexts != null)
                    for (var a = a.processedNestedContexts, d = Array.isArray(a), e = 0, a = d ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= a.length) break;
                            f = a[e++]
                        } else {
                            e = a.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        c = h._accumulateOverNestedActiveCounters(f, b, c)
                    }
                return c
            },
            _getMaximumAttribution: function(a, b) {
                __p && __p();
                if (a.length === 0) return null;
                for (var c = a, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= c.length) break;
                        f = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    if (b.propagatedAttributions && b.propagatedAttributions[f] != null) return f
                }
                f = null;
                e = null;
                for (var d = a, c = Array.isArray(d), a = 0, d = c ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (c) {
                        if (a >= d.length) break;
                        g = d[a++]
                    } else {
                        a = d.next();
                        if (a.done) break;
                        g = a.value
                    }
                    g = g;
                    if (b.newAttributions && b.newAttributions[g] != null) {
                        var h = b.newAttributions[g].newCounterIdx;
                        (e == null || h < e) && (f = g, e = h)
                    }
                }
                return f
            },
            getNestedTotalsByAttributions: function(a, b) {
                __p && __p();
                return h._accumulateOverNestedActiveCounters(a, function(a, c) {
                    __p && __p();
                    var d = h._getMaximumAttribution(b, a);
                    if (d) {
                        d = h._getAttributedAndUnattributedForThisContext(d, a);
                        var e = d.attributed;
                        d = d.unattributed;
                        e != null && h._addOnto(c.attributed, e);
                        d != null && h._addOnto(c.unattributed, d)
                    } else h._addOnto(c.unattributed, a.getActiveCounters().getTotals());
                    return c
                }, {
                    attributed: {},
                    unattributed: {}
                })
            },
            _getAttributedAndUnattributedForThisContext: function(a, b) {
                __p && __p();
                var c = b.getActiveCounters().getTotals();
                if (b.propagatedAttributions != null && b.propagatedAttributions[a] != null) return {
                    attributed: c,
                    unattributed: null
                };
                else if (b.newAttributions != null && b.newAttributions[a] != null) {
                    b = b.newAttributions[a].snapshotAtStart;
                    if (b != null) {
                        a = Object.entries(b);
                        for (var d = 0; d < a.length; d++) {
                            var e = a[d],
                                f = e[0];
                            e = e[1];
                            e = c[f] - e;
                            e === 0 ? delete c[f] : c[f] = e
                        }
                        return {
                            attributed: c,
                            unattributed: b
                        }
                    } else return {
                        attributed: c,
                        unattributed: null
                    }
                } else return {
                    attributed: null,
                    unattributed: c
                }
            },
            _addOnto: function(a, b) {
                b = Object.entries(b);
                for (var c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = d[0];
                    d = d[1];
                    a[e] = (a[e] || 0) + d
                }
            }
        };
    e.exports = h
}), null);
__d("ProfilingCounters", ["ErrorUtils", "ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCountersStore", "TimeSlice", "TimeSliceInteractionSV", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    __p && __p();
    b("performanceAbsoluteNow")();
    var g = {
            ALL: "ALL",
            ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC: "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC"
        },
        h = 100,
        i = [],
        j = function(c) {
            "use strict";
            __p && __p();
            babelHelpers.inheritsLoose(a, c);

            function a() {
                return c.apply(this, arguments) || this
            }
            var d = a.prototype;
            d.onNewContextCreatedWhileEnabled = function(a, b, c) {
                return k.currentContext().getPropagatedContextForChild(!!(c && c.isContinuation))
            };
            d.onBeforeContextStartedWhileEnabled = function(a, b, c) {
                __p && __p();
                var d = c && c.propagateCounterAttribution,
                    e = null;
                if (a.executionNumber > 0 && b) {
                    var f = Object.entries(b);
                    for (var h = 0; h < f.length; h++) {
                        var i = f[h],
                            j = i[0];
                        i = i[1];
                        var l = i.propagationType;
                        l !== "ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC" && (e = e || {}, e[j] = i)
                    }
                } else e = b;
                l = k.currentContext().getExecutionContext(!!(c && c.isContinuation), e);
                j = new k(!1, l, a.contextID);
                d != null && j.addAttribution(d, g.ALL);
                k.nestContext(j);
                return null
            };
            d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
                return null
            };
            d.onAfterContextEndedWhileEnabled = function(a, c, d, e) {
                c = k.unnestContext();
                a.isRoot && b("ProfilingCountersStore").getInstance().pushElement(c)
            };
            d.getBeforeID = function() {
                return b("ExecutionContextObservers").beforeIDs.PROFILING_COUNTERS
            };
            d.getAfterID = function() {
                return b("ExecutionContextObservers").afterIDs.PROFILING_COUNTERS
            };
            d.onDisable = function() {
                k.resetState()
            };
            return a
        }(b("OnDemandExecutionContextObserver")),
        k = function() {
            "use strict";
            __p && __p();
            a.getObserver = function() {
                a.$2 || (a.$2 = new j());
                return a.$2
            };
            a.wrapInSingleContext = function(b) {
                var c = new a(!1, null, 0);
                b.forEach(function(a) {
                    return c.$3(a, !1)
                });
                return c
            };
            a.startTimingInContext = function(b, c) {
                if (!a.getObserver().isEnabled()) return null;
                for (var d = 0; d < i.length; d++) {
                    var e = i[d];
                    if (e.getTimeSliceContextID() === c) return e.getActiveCounters().startTiming(b)
                }
                return null
            };
            a.stopTimingInContext = function(b, c) {
                __p && __p();
                if (!a.getObserver().isEnabled()) return;
                for (var d = 0; d < i.length; d++) {
                    var e = i[d];
                    if (e.getTimeSliceContextID() === c) {
                        e.getActiveCounters().stopTiming(b);
                        return
                    }
                }
                return
            };
            a.startTiming = function(b) {
                return a.currentContext().getActiveCounters().startTiming(b)
            };
            a.stopTiming = function(b) {
                return a.currentContext().getActiveCounters().stopTiming(b)
            };
            a.incrementCounter = function(b, c) {
                a.currentContext().getActiveCounters().incrementCounter(b, c)
            };
            a.currentContext = function() {
                return i[i.length - 1]
            };

            function a(a, b, c) {
                this.isGlobal = a, this.propagatedAttributions = b, this.newAttributions = null, this.active = null, this.processedNestedContexts = null, this.newAttributionsCount = 0, this.$1 = c
            }
            var b = a.prototype;
            b.addAttribution = function(a, b) {
                this.$4(a) || (this.newAttributions == null && (this.newAttributions = {}), this.newAttributions[a] = {
                    newCounterIdx: this.newAttributionsCount,
                    propagationType: b,
                    snapshotAtStart: this.hasActiveCounters() ? this.getActiveCounters().getTotals() : null
                }, this.newAttributionsCount++);
                return this
            };
            b.$5 = function(a, b) {
                return b != null && b[a] != null
            };
            b.$4 = function(a) {
                return this.$5(a, this.propagatedAttributions) || this.$5(a, this.newAttributions)
            };
            a.$6 = function(a, b, c) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d],
                        f = e[0];
                    e = e[1];
                    var h = e.propagationType;
                    (h === g.ALL || b) && (a[f] = e)
                }
            };
            b.getPropagatedContextForChild = function(b) {
                __p && __p();
                var c;
                if (this.newAttributions == null)
                    if (this.propagatedAttributions == null || b) return this.propagatedAttributions;
                    else {
                        c = Object.entries(this.propagatedAttributions);
                        var d = !0;
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];
                            f[0];
                            f = f[1];
                            if (f.propagationType === g.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC) {
                                d = !1;
                                break
                            }
                        }
                        if (d) return this.propagatedAttributions
                    }
                f = {};
                this.propagatedAttributions != null && a.$6(f, b, c || Object.entries(this.propagatedAttributions));
                this.newAttributions != null && a.$6(f, b, Object.entries(this.newAttributions));
                return f
            };
            b.getExecutionContext = function(b, c) {
                var d = b ? this.getPropagatedContextForChild(b) || {} : {};
                c && a.$6(d, b, Object.entries(c));
                return d
            };
            b.getActiveCounters = function() {
                this.active == null && (this.active = new l());
                return this.active
            };
            b.$7 = function() {
                return this.isGlobal
            };
            b.hasActiveCounters = function() {
                return this.active != null
            };
            a.nestContext = function(a) {
                i.push(a)
            };
            a.unnestContext = function() {
                if (i.length === 1) throw new Error("popping off the global context");
                var b = i.pop();
                if (b.hasActiveCounters()) var c = b.getActiveCounters();
                (b.hasActiveCounters() || b.processedNestedContexts != null) && a.currentContext().$3(b);
                return b
            };
            b.$3 = function(a, b) {
                b === void 0 && (b = !0);
                if (this.$7()) return;
                else b && this.processedNestedContexts != null && this.processedNestedContexts.length >= h || (this.processedNestedContexts = this.processedNestedContexts || [], this.processedNestedContexts.push(a))
            };
            b.getTimeSliceContextID = function() {
                return this.$1
            };
            a.resetState = function() {
                i = [new a(!0, null, 0)]
            };
            a.getHandle = function() {
                return m
            };
            return a
        }();
    k.AttributionPropagation = g;
    var l = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = null, this.$2 = null, this.$3 = null, this.$4 = null
        }
        var c = a.prototype;
        c.startTiming = function(c) {
            __p && __p();
            var d = a.$5++;
            c = {
                value: 0,
                counter: c,
                id: d,
                lastStartTime: 0
            };
            var e = this.$1 || [];
            this.$2 = this.$2 || {};
            this.$2[d] = e.length;
            e.push(c);
            var f = b("performanceAbsoluteNow")();
            c.lastStartTime = f;
            if (e.length > 1) {
                c = e[e.length - 2];
                c.value += f - c.lastStartTime
            }
            this.$1 = e;
            return d
        };
        c.stopTiming = function(a) {
            __p && __p();
            var c = b("performanceAbsoluteNow")(),
                d = this.$2,
                e = this.$1;
            if (d == null || e == null) {
                b("ErrorUtils").reportError(new Error("token does not match the counter context"));
                return 0
            }
            var f = d[a];
            delete d[a];
            if (f == null || e[f] == null) return 0;
            a = null;
            var g = 0;
            while (e.length - 1 > f) {
                var h = e.pop();
                g += h.value;
                delete d[h.id];
                a == null && h.lastStartTime != null && (a = h.lastStartTime)
            }
            h = e.pop();
            h.value += c - (a || h.lastStartTime);
            h.value += g;
            f = this.$4 || {};
            f[h.counter] = f[h.counter] || 0;
            f[h.counter] += h.value;
            e.length > 0 && (e[e.length - 1].lastStartTime = c);
            this.$1 = e;
            this.$4 = f;
            this.$2 = d;
            return h.value
        };
        c.incrementCounter = function(a, b) {
            var c = this.$3 || {};
            c[a] = c[a] || 0;
            c[a] += b;
            this.$3 = c
        };
        c.getTotals = function() {
            return babelHelpers["extends"]({}, this.$4 || {}, this.$3 || {})
        };
        c.openCounterCount = function() {
            return this.$1 != null ? this.$1.length : 0
        };
        return a
    }();
    l.$5 = 1;
    i.push(new k(!0, null, 0));
    b("TimeSlice").registerExecutionContextObserver(k.getObserver());
    var m = k.getObserver().expressInterest();
    a.ProfilingCounters = k;
    e.exports = k
}), 3);
__d("isInIframe", [], (function(a, b, c, d, e, f) {
    var g = window != window.top;

    function a() {
        return g
    }
    e.exports = a
}), null);
__d("SessionName", ["SessionNameConfig", "isInIframe"], (function(a, b, c, d, e, f) {
    var g = "_e_",
        h;

    function i() {
        h = (window.name || "").toString(), h.length == 7 && h.substr(0, 3) == g ? h = h.substr(3) : (h = b("SessionNameConfig").seed || "", b("isInIframe")() || (window.name = g + h))
    }
    e.exports = {
        TOKEN: g,
        getName: function() {
            h === void 0 && i();
            return h
        }
    }
}), null);
__d("getCrossOriginTransport", ["invariant", "ExecutionEnvironment", "ex"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h() {
        if (!b("ExecutionEnvironment").canUseDOM) throw new Error(b("ex")("getCrossOriginTransport: %s", "Cross origin transport unavailable in the server environment."));
        try {
            var a = new XMLHttpRequest();
            !("withCredentials" in a) && typeof XDomainRequest !== "undefined" && (a = new XDomainRequest());
            return a
        } catch (a) {
            throw new Error(b("ex")("getCrossOriginTransport: %s", a.message))
        }
    }
    h.withCredentials = function() {
        var a = h();
        "withCredentials" in a || g(0, 5150);
        var b = a.open;
        a.open = function() {
            b.apply(this, arguments), this.withCredentials = !0
        };
        return a
    };
    e.exports = h
}), null);
__d("ZeroRewrites", ["URI", "ZeroRewriteRules", "getCrossOriginTransport", "getSameOriginTransport", "isFacebookURI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        rewriteURI: function(a) {
            if (!b("isFacebookURI")(a) || g._isWhitelisted(a)) return a;
            var c = g._getRewrittenSubdomain(a);
            c !== null && c !== void 0 && (a = a.setSubdomain(c));
            return a
        },
        getTransportBuilderForURI: function(a) {
            return g.isRewritten(a) ? b("getCrossOriginTransport").withCredentials : b("getSameOriginTransport")
        },
        isRewriteSafe: function(a) {
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a)) return !1;
            var c = g._getCurrentURI().getDomain(),
                d = new(b("URI"))(a).qualify().getDomain();
            return c === d || g.isRewritten(a)
        },
        isRewritten: function(a) {
            a = a.getQualifiedURI();
            if (Object.keys(b("ZeroRewriteRules").rewrite_rules).length === 0 || !b("isFacebookURI")(a) || g._isWhitelisted(a)) return !1;
            var c = a.getSubdomain(),
                d = g._getCurrentURI(),
                e = g._getRewrittenSubdomain(d);
            return a.getDomain() !== d.getDomain() && c === e
        },
        _isWhitelisted: function(a) {
            a = a.getPath();
            a.endsWith("/") || (a += "/");
            return b("ZeroRewriteRules").whitelist && b("ZeroRewriteRules").whitelist[a] === 1
        },
        _getRewrittenSubdomain: function(a) {
            a = a.getQualifiedURI().getSubdomain();
            return b("ZeroRewriteRules").rewrite_rules[a]
        },
        _getCurrentURI: function() {
            return new(b("URI"))("/").qualify()
        }
    };
    e.exports = g
}), null);
__d("bind", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, b) {
        __p && __p();
        var c = Array.prototype.slice.call(arguments, 2);
        if (typeof b !== "string") return Function.prototype.bind.apply(b, [a].concat(c));

        function d() {
            var d = c.concat(Array.prototype.slice.call(arguments));
            if (a[b]) return a[b].apply(a, d)
        }
        d.toString = function() {
            return "bound lazily: " + a[b]
        };
        return d
    }
    e.exports = a
}), null);
__d("clearTimeout", ["requireCond", "cr:806696"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("cr:806696")
}), null);
__d("errorCode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        throw new Error('errorCode("' + a + '"): This should not happen. Oh noes!')
    }
    e.exports = a
}), null);
__d("executeAfter", [], (function(a, b, c, d, e, f) {
    function a(a, b, c) {
        return function() {
            a.apply(c || this, arguments), b.apply(c || this, arguments)
        }
    }
    e.exports = a
}), null);
__d("Banzai", ["requireCond", "cr:682513"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:682513")
}), null);
__d("FbtReactUtil", [], (function(a, b, c, d, e, f) {
    a = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 60103;
    var g = !1;
    b = {
        REACT_ELEMENT_TYPE: a,
        defineProperty: function(a, b, c) {
            g ? Object.defineProperty(a, b, {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: c
            }) : a[b] = c
        }
    };
    e.exports = b
}), null);
__d("killswitch", ["KSConfig"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("KSConfig").killed.has(a)
    }
    a.override = function(a, c) {
        c ? b("KSConfig").killed.add(a) : b("KSConfig").killed["delete"](a)
    };
    e.exports = a
}), null);
__d("FbtResultWWW", ["FBLogger", "FbtResultBase", "killswitch"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        b("FBLogger")("fbt").blameToPreviousDirectory().mustfix("Error using fbt string. Used method %s on Fbt string. Fbt string is designed to be immutable and should not be manipulated.", a)
    }
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.onStringSerializationError = function(a) {
            var c = "Context not logged.";
            if (!b("killswitch")("JS_RELIABILITY_FBT_LOGGING")) try {
                a = JSON.stringify(a);
                a != null && (c = a.substr(0, 250))
            } catch (a) {
                c = a.message
            }
            b("FBLogger")("fbt").blameToPreviousDirectory().mustfix("Converting to a string will drop content data. %s", c)
        };
        return c
    }(b("FbtResultBase"));
    c = a.usingStringProxyMethod(function(a) {
        return function() {
            g(a);
            return String.prototype[a].apply(this, arguments)
        }
    });
    e.exports = c
}), null);
__d("FbtResultBaseImpl", ["FbtResultWWW"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("FbtResultWWW")
}), null);
__d("FbtResult", ["FbtReactUtil", "FbtResultBaseImpl"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = function(a) {
        return a.content
    };
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            d.key = null;
            d.ref = null;
            d.type = g;
            d.props = {
                content: c
            };
            return d
        }
        return c
    }(b("FbtResultBaseImpl"));
    e.exports = a
}), null);
__d("FbtTableAccessor", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        getEnumResult: function(a) {
            return [a, null]
        },
        getGenderResult: function(a, b, c) {
            return [a, b]
        },
        getNumberResult: function(a, b, c) {
            return [a, b]
        },
        getPronounResult: function(a) {
            return [
                [a, "*"], null
            ]
        }
    };
    e.exports = a
}), null);
__d("FbtTranslations", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        return null
    }

    function b() {
        return !1
    }
    e.exports = {
        getTranslatedPayload: a,
        isComponentScript: b
    }
}), null);
__d("GenderConst", [], (function(a, b, c, d, e, f) {
    e.exports = {
        NOT_A_PERSON: 0,
        FEMALE_SINGULAR: 1,
        MALE_SINGULAR: 2,
        FEMALE_SINGULAR_GUESS: 3,
        MALE_SINGULAR_GUESS: 4,
        MIXED_SINGULAR: 5,
        MIXED_PLURAL: 5,
        NEUTER_SINGULAR: 6,
        UNKNOWN_SINGULAR: 7,
        FEMALE_PLURAL: 8,
        MALE_PLURAL: 9,
        NEUTER_PLURAL: 10,
        UNKNOWN_PLURAL: 11
    }
}), null);
__d("InlineFbtResult", ["cx", "FbtReactUtil", "FbtResultBaseImpl"], (function(a, b, c, d, e, f, g) {
    __p && __p();

    function h(a, c, d, e) {
        var f = "_4qba";
        e != null && e != "" && (c === "TRANSLATION" ? f = "_4qbb" : c === "APPROVE" ? f = "_4qbc" : c === "REPORT" && (f = "_4qbd"));
        return {
            $$typeof: b("FbtReactUtil").REACT_ELEMENT_TYPE,
            type: "em",
            key: null,
            ref: null,
            props: {
                className: f,
                "data-intl-hash": e,
                "data-intl-translation": d,
                "data-intl-trid": "",
                children: a,
                suppressHydrationWarning: !0
            },
            _owner: null
        }
    }
    var i = function(a) {
        return h(a.content, a.inlineMode, a.translation, a.hash)
    };
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e, f) {
            var g;
            g = a.call(this, c) || this;
            g.$$typeof = b("FbtReactUtil").REACT_ELEMENT_TYPE;
            g.key = null;
            g.ref = null;
            g.type = i;
            g.props = {
                content: c,
                inlineMode: d,
                translation: e,
                hash: f
            };
            return g
        }
        return c
    }(b("FbtResultBaseImpl"));
    e.exports = a
}), null);
__d("IntlVariations", [], (function(a, b, c, d, e, f) {
    e.exports = {
        BITMASK_NUMBER: 28,
        BITMASK_GENDER: 3,
        NUMBER_ZERO: 16,
        NUMBER_ONE: 4,
        NUMBER_TWO: 8,
        NUMBER_FEW: 20,
        NUMBER_MANY: 12,
        NUMBER_OTHER: 24,
        GENDER_MALE: 1,
        GENDER_FEMALE: 2,
        GENDER_UNKNOWN: 3
    }
}), null);
__d("FbtNumberType", ["IntlNumberTypeConfig", "IntlVariations"], (function(a, b, c, d, e, f) {
    a = new Function("IntlVariations", '"use strict"; return (function(n) {' + b("IntlNumberTypeConfig").impl + "});")(b("IntlVariations"));
    e.exports = {
        getVariation: a
    }
}), null);
__d("IntlNumberType", ["FbtNumberType"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("FbtNumberType")
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolverImpl", ["invariant", "IntlNumberType", "IntlVariations", "IntlViewerContext"], (function(a, b, c, d, e, f, g) {
    var h = "_1";
    a = {
        EXACTLY_ONE: h,
        getNumberVariations: function(a) {
            var c = b("IntlNumberType").get(b("IntlViewerContext").locale).getVariation(a);
            c & b("IntlVariations").BITMASK_NUMBER || g(0, 481);
            return a === 1 ? [h, c, "*"] : [c, "*"]
        },
        getGenderVariations: function(a) {
            a & b("IntlVariations").BITMASK_GENDER || g(0, 482);
            return [a, "*"]
        }
    };
    e.exports = a
}), null);
__d("IntlVariationResolver", ["IntlHoldoutGK", "IntlVariationResolverImpl"], (function(a, b, c, d, e, f) {
    var g = b("IntlVariationResolverImpl").EXACTLY_ONE;
    a = {
        getNumberVariations: function(a) {
            return b("IntlHoldoutGK").inIntlHoldout ? a === 1 ? [g, "*"] : ["*"] : b("IntlVariationResolverImpl").getNumberVariations(a)
        },
        getGenderVariations: function(a) {
            return b("IntlHoldoutGK").inIntlHoldout ? ["*"] : b("IntlVariationResolverImpl").getGenderVariations(a)
        }
    };
    e.exports = a
}), null);
__d("NumberFormatConsts", ["NumberFormatConfig"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("NumberFormatConfig")
        }
    };
    e.exports = a
}), null);
__d("escapeRegex", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.replace(/([.?*+\^$\[\]\\(){}|\-])/g, "\\$1")
    }
    e.exports = a
}), null);
__d("intlNumUtils", ["IntlViewerContext", "NumberFormatConsts", "escapeRegex"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 3;
    f = ["\u0433\u0440\u043d.", "\u0434\u0435\u043d.", "\u043b\u0432.", "\u043c\u0430\u043d.", "\u0564\u0580.", "\u062c.\u0645.", "\u062f.\u0625.", "\u062f.\u0627.", "\u062f.\u0628.", "\u062f.\u062a.", "\u062f.\u062c.", "\u062f.\u0639.", "\u062f.\u0643.", "\u062f.\u0644.", "\u062f.\u0645.", "\u0631.\u0633.", "\u0631.\u0639.", "\u0631.\u0642.", "\u0631.\u064a.", "\u0644.\u0633.", "\u0644.\u0644.", "\u0783.", "B/.", "Bs.", "Fr.", "kr.", "L.", "p.", "S/."];
    var h = {};

    function i(a) {
        h[a] || (h[a] = new RegExp(a, "i"));
        return h[a]
    }
    var j = i(f.reduce(function(a, c, d) {
        return a + (d ? "|" : "") + "(" + b("escapeRegex")(c) + ")"
    }, ""));

    function k(a, c, d, e, f, h, j) {
        __p && __p();
        d === void 0 && (d = "");
        e === void 0 && (e = ".");
        f === void 0 && (f = 0);
        h === void 0 && (h = {
            primaryGroupSize: g,
            secondaryGroupSize: g
        });
        var k = h.primaryGroupSize || g;
        h = h.secondaryGroupSize || k;
        j = j && j.digits;
        var m;
        c == null ? m = a.toString() : typeof a === "string" ? m = q(a, c) : m = o(a, c);
        a = m.split(".");
        c = a[0];
        m = a[1];
        if (Math.abs(parseInt(c, 10)).toString().length >= f) {
            a = "$1" + d + "$2$3";
            f = "(\\d)(\\d{" + (k - 0) + "})($|\\D)";
            k = c.replace(i(f), a);
            if (k != c) {
                c = k;
                f = "(\\d)(\\d{" + (h - 0) + "})(" + b("escapeRegex")(d) + ")";
                h = i(f);
                while ((k = c.replace(h, a)) != c) c = k
            }
        }
        j != null && (c = l(c, j), m = m && l(m, j));
        d = c;
        m && (d += e + m);
        return d
    }

    function l(a, b) {
        var c = "";
        for (var d = 0; d < a.length; ++d) {
            var e = b[a.charCodeAt(d) - 48];
            c += e !== void 0 ? e : a[d]
        }
        return c
    }

    function a(a, c) {
        var d = b("NumberFormatConsts").get(b("IntlViewerContext").locale);
        return k(a, c, "", d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function m(a, c) {
        var d = b("NumberFormatConsts").get(b("IntlViewerContext").locale);
        return k(a, c, d.numberDelimiter, d.decimalSeparator, d.minDigitsForThousandsSeparator, d.standardDecimalPatternInfo, d.numberingSystemData)
    }

    function n(a) {
        return a && Math.floor(Math.log10(Math.abs(a)))
    }

    function c(a, b, c) {
        __p && __p();
        var d = n(a),
            e = a;
        d < c && (e = a * Math.pow(10, -d + c));
        a = Math.pow(10, n(e) - c + 1);
        e = Math.round(e / a) * a;
        if (d < c) {
            e /= Math.pow(10, -d + c);
            if (b == null) return m(e, c - d - 1)
        }
        return m(e, b)
    }

    function o(a, b) {
        __p && __p();
        b = b == null ? 0 : b;
        var c = Math.pow(10, b);
        a = a;
        a = Math.round(a * c) / c;
        a += "";
        if (!b) return a;
        if (a.indexOf("e-") !== -1) return a;
        c = a.indexOf(".");
        var d;
        c == -1 ? (a += ".", d = b) : d = b - (a.length - c - 1);
        for (var b = 0, c = d; b < c; b++) a += "0";
        return a
    }
    var p = function(a, b) {
        a = a;
        for (var c = 0; c < b; c++) a += "0";
        return a
    };

    function q(a, b) {
        var c = a.indexOf("."),
            d = c === -1 ? a : a.slice(0, c);
        a = c === -1 ? "" : a.slice(c + 1);
        return b != null ? d + "." + p(a.slice(0, b), b - a.length) : d
    }

    function r(a, c, d) {
        __p && __p();
        d === void 0 && (d = "");
        var e = t(),
            f = a;
        e && (f = a.split("").map(function(a) {
            return e[a] || a
        }).join("").trim());
        f = f.replace(/^[^\d]*\-/, "\x02");
        f = f.replace(j, "");
        a = b("escapeRegex")(c);
        c = b("escapeRegex")(d);
        d = i("^[^\\d]*\\d.*" + a + ".*\\d[^\\d]*$");
        if (!d.test(f)) {
            d = i("(^[^\\d]*)" + a + "(\\d*[^\\d]*$)");
            if (d.test(f)) {
                f = f.replace(d, "$1\x01$2");
                return s(f)
            }
            d = i("^[^\\d]*[\\d " + b("escapeRegex")(c) + "]*[^\\d]*$");
            d.test(f) || (f = "");
            return s(f)
        }
        d = i("(^[^\\d]*[\\d " + c + "]*)" + a + "(\\d*[^\\d]*$)");
        f = d.test(f) ? f.replace(d, "$1\x01$2") : "";
        return s(f)
    }

    function s(a) {
        a = a.replace(/[^0-9\u0001\u0002]/g, "").replace("\x01", ".").replace("\x02", "-");
        var b = Number(a);
        return a === "" || isNaN(b) ? null : b
    }

    function t() {
        var a = b("NumberFormatConsts").get(b("IntlViewerContext").locale),
            c = {};
        a = a.numberingSystemData && a.numberingSystemData.digits;
        if (a == null) return null;
        for (var d = 0; d < a.length; d++) c[a.charAt(d)] = d.toString();
        return c
    }

    function d(a) {
        var c = b("NumberFormatConsts").get(b("IntlViewerContext").locale);
        return r(a, c.decimalSeparator || ".", c.numberDelimiter)
    }
    var u = {
        formatNumber: a,
        formatNumberRaw: k,
        formatNumberWithThousandDelimiters: m,
        formatNumberWithLimitedSigFig: c,
        parseNumber: d,
        parseNumberRaw: r,
        truncateLongNumber: q,
        getFloatString: function(a, b, c) {
            a = String(a);
            a = a.split(".");
            b = u.getIntegerString(a[0], b);
            return a.length === 1 ? b : b + c + a[1]
        },
        getIntegerString: function(a, b) {
            b = b;
            b === "" && (b = ",");
            a = String(a);
            var c = /(\d+)(\d{3})/;
            while (c.test(a)) a = a.replace(c, "$1" + b + "$2");
            return a
        }
    };
    e.exports = u
}), null);
__d("IntlPhonologicalRewrites", ["IntlPhonologicalRules"], (function(a, b, c, d, e, f) {
    a = {
        get: function(a) {
            return b("IntlPhonologicalRules")
        }
    };
    e.exports = a
}), null);
__d("IntlPunctuation", ["IntlPhonologicalRewrites", "IntlViewerContext"], (function(a, b, c, d, e, f) {
    __p && __p();
    d = "[.!?\u3002\uff01\uff1f\u0964\u2026\u0eaf\u1801\u0e2f\uff0e]";
    var g = new RegExp(d + "[)\"'\xbb\u0f3b\u0f3d\u2019\u201d\u203a\u3009\u300b\u300d\u300f\u3011\u3015\u3017\u3019\u301b\u301e\u301f\ufd3f\uff07\uff09\uff3d\\s]*$"),
        h = [],
        i = null,
        j = b("IntlPhonologicalRewrites").get(b("IntlViewerContext").locale);

    function k() {
        __p && __p();
        b("IntlViewerContext").locale && b("IntlViewerContext").locale !== i && (h = [], i = b("IntlViewerContext").locale, j = b("IntlPhonologicalRewrites").get(i));
        if (!h.length)
            for (var a in j.patterns) {
                var c = j.patterns[a];
                for (var d in j.meta) {
                    var e = new RegExp(d.slice(1, -1), "g"),
                        f = j.meta[d];
                    a = a.replace(e, f);
                    c = c.replace(e, f)
                }
                c === "javascript" && (c = function(a) {
                    return a.slice(1).toLowerCase()
                });
                h.push([new RegExp(a.slice(1, -1), "g"), c])
            }
        return h
    }

    function a(a) {
        var b = k();
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = d[0];
            d = d[1];
            a = a.replace(e, d)
        }
        return a.replace(/\x01/g, "")
    }

    function c(a) {
        return typeof a !== "string" ? !1 : g.test(a)
    }
    e.exports = {
        PUNCT_CHAR_CLASS: d,
        endsInPunct: c,
        applyPhonologicalRules: a
    }
}), null);
__d("substituteTokens", ["invariant", "IntlPunctuation"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = new RegExp("\\{([^}]+)\\}(" + b("IntlPunctuation").PUNCT_CHAR_CLASS + "*)", "g");

    function i(a) {
        return a
    }

    function a(a, c) {
        __p && __p();
        var d = c;
        if (!d) return a;
        typeof d === "object" || g(0, 6041, a);
        var e = [],
            f = [];
        c = a.replace(h, function(a, c, g) {
            a = d[c];
            if (a && typeof a === "object") {
                e.push(a);
                f.push(c);
                return "\x17" + g
            } else if (a === null) return "";
            return a + (b("IntlPunctuation").endsInPunct(a) ? "" : g)
        }).split("\x17").map(b("IntlPunctuation").applyPhonologicalRules);
        if (c.length === 1) return c[0];
        a = [c[0]];
        for (var j = 0; j < e.length; j++) a.push(i(e[j]), c[j + 1]);
        return a
    }
    e.exports = a
}), null);
__d("fbt", ["invariant", "Banzai", "FbtLogger", "FbtQTOverrides", "FbtTableAccessor", "FbtResult", "FbtResultGK", "GenderConst", "FbtTranslations", "InlineFbtResult", "IntlViewerContext", "intlNumUtils", "substituteTokens", "IntlVariationResolver"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = b("FbtLogger").logger,
        i = b("FbtQTOverrides").overrides,
        j = b("FbtTranslations").getTranslatedPayload,
        k = b("FbtTranslations").isComponentScript,
        l = b("IntlVariationResolver").getNumberVariations,
        m = b("IntlVariationResolver").getGenderVariations,
        n = !1,
        o = {
            INDEX: 0,
            SUBSTITUTION: 1
        },
        p = {
            NUMBER: 0,
            GENDER: 1
        },
        q = {
            OBJECT: 0,
            POSSESSIVE: 1,
            REFLEXIVE: 2,
            SUBJECT: 3
        },
        r = {},
        s = function() {};
    s._ = function(a, c, d) {
        __p && __p();
        if (d && (d.hk || d.ehk)) {
            if (n) return {
                text: a,
                fbt: !0,
                hashKey: d.hk
            };
            d = j(d.hk, d.ehk, c) || {
                table: a,
                args: c
            };
            a = d.table;
            c = d.args
        }
        d = {};
        var e = a;
        a.__vcg && (c = c || [], c.unshift([m(b("IntlViewerContext").GENDER), null]));
        c && (typeof e !== "string" && (e = this._accessTable(a, c, 0)), d = Object.assign.apply(Object, [{}].concat(c.map(function(a) {
            return a[o.SUBSTITUTION] || {}
        }))), e !== null || g(0, 479));
        a = e;
        c = null;
        var f = k() ? "\nNote: Certain fbt constructs such as fbt.plural() and the third positional `variations` argument to fbt.param() are currently disallowed" : "";
        typeof e === "string" || Array.isArray(e) || g(0, 480, JSON.stringify(e), f);
        if (Array.isArray(e)) {
            a = e[0];
            c = e[1];
            f = "1_" + c;
            a = i[f] || a;
            i[f] && s.logQTImpression(c);
            s.logImpression(c)
        }
        e = r[a];
        f = this._hasKeys(d);
        if (e && !f) return e;
        else {
            e = b("substituteTokens")(a, d);
            d = this._wrapContent(e, a, c);
            f || (r[a] = d);
            return d
        }
    };
    s._hasKeys = function(a) {
        for (var b in a) return !0;
        return !1
    };
    s._accessTable = function(a, b, c) {
        __p && __p();
        if (c >= b.length) return a;
        else if (a == null) return null;
        var d = null,
            e = b[c];
        e = e[o.INDEX];
        if (Array.isArray(e))
            for (var f = 0; f < e.length; ++f) {
                var g = a[e[f]];
                d = this._accessTable(g, b, c + 1);
                if (d != null) break
            } else a = e !== null ? a[e] : a, d = this._accessTable(a, b, c + 1);
        return d
    };
    s._enum = function(a, c) {
        return b("FbtTableAccessor").getEnumResult(a)
    };
    s._subject = function(a) {
        return b("FbtTableAccessor").getGenderResult(m(a), null, a)
    };
    s._param = function(a, c, d) {
        __p && __p();
        var e, f = null;
        e = (e = {}, e[a] = c, e);
        if (d)
            if (d[0] === p.NUMBER) {
                var h = d.length > 1 ? d[1] : c;
                typeof h === "number" || g(0, 484);
                f = l(h);
                typeof c === "number" && (e[a] = b("intlNumUtils").formatNumberWithThousandDelimiters(c));
                return b("FbtTableAccessor").getNumberResult(f, e, h)
            } else if (d[0] === p.GENDER) {
            d.length > 1 || g(0, 485);
            a = d[1];
            f = m(a);
            return b("FbtTableAccessor").getGenderResult(f, e, a)
        } else g(0, 486);
        else return [f, e]
    };
    s._plural = function(a, c, d) {
        var e = l(a),
            f = {};
        c && (typeof d === "number" ? f[c] = b("intlNumUtils").formatNumberWithThousandDelimiters(d) : f[c] = d || b("intlNumUtils").formatNumberWithThousandDelimiters(a));
        return b("FbtTableAccessor").getNumberResult(e, f, a)
    };
    s._pronoun = function(a, c, d) {
        c !== b("GenderConst").NOT_A_PERSON || !d || !d.human || g(0, 487);
        d = t(a, c);
        return b("FbtTableAccessor").getPronounResult(d)
    };

    function t(a, c) {
        switch (c) {
            case b("GenderConst").NOT_A_PERSON:
                return a === q.OBJECT || a === q.REFLEXIVE ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").FEMALE_SINGULAR:
            case b("GenderConst").FEMALE_SINGULAR_GUESS:
                return b("GenderConst").FEMALE_SINGULAR;
            case b("GenderConst").MALE_SINGULAR:
            case b("GenderConst").MALE_SINGULAR_GUESS:
                return b("GenderConst").MALE_SINGULAR;
            case b("GenderConst").MIXED_SINGULAR:
            case b("GenderConst").FEMALE_PLURAL:
            case b("GenderConst").MALE_PLURAL:
            case b("GenderConst").NEUTER_PLURAL:
            case b("GenderConst").UNKNOWN_PLURAL:
                return b("GenderConst").UNKNOWN_PLURAL;
            case b("GenderConst").NEUTER_SINGULAR:
            case b("GenderConst").UNKNOWN_SINGULAR:
                return a === q.REFLEXIVE ? b("GenderConst").NOT_A_PERSON : b("GenderConst").UNKNOWN_PLURAL
        }
        return b("GenderConst").NOT_A_PERSON
    }
    s._name = function(a, c, d) {
        var e = m(d),
            f = {};
        f[a] = c;
        return b("FbtTableAccessor").getGenderResult(e, f, d)
    };
    s.logImpression = function(a) {
        h && h.logImpression(a);
        return a
    };
    s.logQTImpression = function(a) {
        b("Banzai").post("intl_qt_event", {
            hash: a
        });
        return a
    };
    s._wrapContent = function(a, c, d) {
        if (!b("FbtResultGK").shouldReturnFbtResult && b("FbtResultGK").inlineMode !== "REPORT") return a;
        a = typeof a === "string" ? [a] : a;
        return b("FbtResultGK").inlineMode && b("FbtResultGK").inlineMode !== "NO_INLINE" ? new(b("InlineFbtResult"))(a, b("FbtResultGK").inlineMode, c, d) : new(b("FbtResult"))(a)
    };
    s.enableJsonExportMode = function() {
        n = !0
    };
    s.disableJsonExportMode = function() {
        n = !1
    };
    e.exports = s
}), null);
__d("getAsyncHeaders", ["ZeroCategoryHeader", "isFacebookURI"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c = {};
        b("isFacebookURI")(a) && b("ZeroCategoryHeader").value && (c[b("ZeroCategoryHeader").header] = b("ZeroCategoryHeader").value);
        return c
    }
    e.exports = a
}), null);
__d("goURI", ["URI"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("URI").go
}), null);
__d("setTimeout", ["requireCond", "cr:807042"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:807042")
}), null);
__d("AsyncRequest", ["errorCode", "fbt", "invariant", "ix", "Promise", "requireDeferred", "Arbiter", "ArtilleryAsyncRequestTracingAnnotator", "AsyncDOM", "AsyncRequestConfig", "AsyncResponse", "Bootloader", "CSS", "Deferred", "DTSG", "DTSG_ASYNC", "Env", "ErrorUtils", "Event", "FBLogger", "FetchStreamTransport", "HTTPErrors", "JSCC", "Parent", "PHPQuerySerializer", "ProfilingCounters", "ResourceTimingsStore", "ResourceTypes", "ServerJS", "SessionName", "TimeSlice", "URI", "UserAgent_DEPRECATED", "ZeroRewrites", "bind", "bx", "clearTimeout", "emptyFunction", "evalGlobal", "executeAfter", "ge", "getAsyncHeaders", "getAsyncParams", "gkx", "goURI", "ifRequired", "isBonfireURI", "isEmpty", "isFacebookURI", "isMessengerDotComURI", "isWorkplaceDotComURI", "killswitch", "promiseDone", "qex", "replaceTransportMarkers", "setTimeout", "setTimeoutAcrossTransitions"], (function $module_AsyncRequest(global, require, requireDynamic, requireLazy, module, exports, errorCode, fbt, invariant, ix) {
    "use strict";
    __p && __p();
    var AsyncRequestPathTraversalTypedLoggerDeferred = require("requireDeferred")("AsyncRequestPathTraversalTypedLogger"),
        nineteenSecInMs = 19e3;

    function hasUnloaded() {
        try {
            return !window.domready
        } catch (_unused) {
            return !0
        }
    }

    function supportsProgress(transport) {
        return "onprogress" in transport
    }

    function supportsUploadProgress(transport) {
        return "upload" in transport && "onprogress" in transport.upload
    }

    function supportsCrossOrigin(transport) {
        return "withCredentials" in transport
    }

    function isNetworkError(transport) {
        return transport.status in {
            0: 1,
            12029: 1,
            12030: 1,
            12031: 1,
            12152: 1
        }
    }

    function validateResponseHandler(handler) {
        var valid = !handler || typeof handler === "function";
        valid || require("FBLogger")("asyncresponse").mustfix("AsyncRequest response handlers must be functions. Pass a function, or use bind() to build one.");
        return valid
    }
    var last_id = 2,
        id_threshold = last_id;
    require("Arbiter").subscribe("page_transition", function(_, message) {
        id_threshold = message.id
    });
    var AsyncRequest = function() {
        __p && __p();

        function AsyncRequest(uri) {
            __p && __p();
            var _this = this;
            this._allowIrrelevantRequests = !1;
            this._delayPreDisplayJS = !1;
            this._shouldReplaceTransportMarkers = require("gkx")("678674");
            this._dispatchErrorResponse = function(asyncResponse, errorHandler) {
                __p && __p();
                var error = asyncResponse.getError();
                _this.clearStatusIndicator();
                if (!_this._isRelevant() || error === 1010) {
                    _this.abort();
                    return
                }
                if (_this._isServerDialogErrorCode(error)) {
                    var is_confirmation = error == 1357008 || error == 1357007;
                    _this.interceptHandler(asyncResponse);
                    error == 1357041 ? _this._solveQuicksandChallenge(asyncResponse) : error == 1357007 ? _this._displayServerDialog(asyncResponse, is_confirmation, !0) : _this._displayServerDialog(asyncResponse, is_confirmation)
                } else if (_this.initialHandler(asyncResponse) !== !1) {
                    require("clearTimeout")(_this.timer);
                    try {
                        errorHandler(asyncResponse)
                    } catch (e) {
                        _this.finallyHandler(asyncResponse);
                        throw e
                    }
                    _this.finallyHandler(asyncResponse)
                }
            };
            this._onStateChange = function() {
                __p && __p();
                var transport = _this.transport;
                if (!transport) return;
                try {
                    AsyncRequest._inflightCount--;
                    require("ResourceTimingsStore").measureResponseReceived(require("ResourceTypes").XHR, _this.resourceTimingStoreUID);
                    try {
                        typeof transport.getResponseHeader !== "undefined" && transport.getResponseHeader("X-FB-Debug") && (_this._xFbServer = transport.getResponseHeader("X-FB-Debug"))
                    } catch (_unused2) {}
                    if (transport.status >= 200 && transport.status < 300) AsyncRequest.lastSuccessTime = Date.now(), _this._handleXHRResponse(transport);
                    else if (require("UserAgent_DEPRECATED").webkit() && typeof transport.status === "undefined") _this._invokeErrorHandler(1002);
                    else if (require("AsyncRequestConfig").retryOnNetworkError && isNetworkError(transport) && _this.remainingRetries > 0 && !_this._requestTimeout) {
                        _this.remainingRetries--;
                        delete _this.transport;
                        _this.send(!0);
                        return
                    } else _this._invokeErrorHandler();
                    _this.getOption("asynchronous_DEPRECATED") !== !1 && delete _this.transport
                } catch (exception) {
                    if (hasUnloaded()) return;
                    delete _this.transport;
                    _this.remainingRetries > 0 ? (_this.remainingRetries--, _this.send(!0)) : (_this.getOption("suppressErrorAlerts") || require("FBLogger")("AsyncRequest").catching(exception).mustfix("AsyncRequest exception when attempting to handle a state change"), _this._invokeErrorHandler(1007))
                }
            };
            this.continuation = require("TimeSlice").getPlaceholderReusableContinuation();
            this.transport = null;
            this.method = "POST";
            this.uri = "";
            this.timeout = null;
            this.timer = null;
            this.initialHandler = require("emptyFunction");
            this.handler = null;
            this.uploadProgressHandler = null;
            this.errorHandler = require("AsyncResponse").defaultErrorHandler;
            this.transportErrorHandler = null;
            this.timeoutHandler = null;
            this.interceptHandler = require("emptyFunction");
            this.finallyHandler = require("emptyFunction");
            this.abortHandler = require("emptyFunction");
            this.serverDialogCancelHandler = null;
            this.relativeTo = null;
            this.statusElement = null;
            this.statusClass = "";
            this.data = {};
            this.headers = {};
            this.file = null;
            this.context = {};
            this.readOnly = !1;
            this.writeRequiredParams = [];
            this.remainingRetries = 0;
            this.userActionID = "-";
            this.logErrorsEnabled = require("AsyncRequestConfig").logAsyncRequest;
            this.allowInteractionServerTracing = !0;
            this.resourceTimingStoreUID = require("ResourceTimingsStore").getUID(require("ResourceTypes").XHR, uri != null ? uri.toString() : "");
            this._warningList = [500, 1010, 1004];
            this.option = {
                asynchronous_DEPRECATED: !0,
                suppressErrorHandlerWarning: !1,
                suppressEvaluation: !1,
                suppressErrorAlerts: !1,
                retries: 0,
                jsonp: !1,
                bundle: !1,
                useIframeTransport: !1,
                handleErrorAfterUnload: !1,
                useFetchWithIframeFallback: !1
            };
            this.transportErrorHandler = require("bind")(this, "errorHandler");
            uri !== void 0 && this.setURI(uri);
            this.setAllowCrossPageTransition(require("AsyncRequestConfig").asyncRequestsSurviveTransitionsDefault || !1)
        }
        var _proto = AsyncRequest.prototype;
        _proto._dispatchResponse = function _dispatchResponse(asyncResponse) {
            __p && __p();
            this.clearStatusIndicator();
            if (!this._isRelevant()) {
                this._invokeErrorHandler(1010);
                return
            }
            if (this.initialHandler(asyncResponse) === !1) return;
            require("clearTimeout")(this.timer);
            if (asyncResponse.jscc_map) {
                var jsccMap = require("JSCC").parse(asyncResponse.jscc_map);
                require("JSCC").init(jsccMap)
            }
            var suppress_js, handler = this.getHandler();
            if (handler) try {
                suppress_js = this._shouldSuppressJS(handler(asyncResponse))
            } catch (e) {
                asyncResponse.is_last && this.finallyHandler(asyncResponse);
                throw e
            }
            suppress_js || this._handleJSResponse(asyncResponse);
            asyncResponse.is_last && this.finallyHandler(asyncResponse)
        };
        _proto._shouldSuppressJS = function _shouldSuppressJS(handler_return_value) {
            return handler_return_value === AsyncRequest.suppressOnloadToken
        };
        _proto._handlePreDisplayServerJS = function _handlePreDisplayServerJS(serverJS, preDisplayJSMods) {
            __p && __p();
            var _displayStarted = !1,
                preDisplayPromises = [],
                registerToBlockDisplayUntilDone_DONOTUSE = function registerToBlockDisplayUntilDone_DONOTUSE() {
                    if (_displayStarted) {
                        require("FBLogger")("AsyncResponse").warn("registerToBlockDisplayUntilDone_DONOTUSE called after AsyncResponse display started. This is a no-op.");
                        return function() {}
                    }
                    var timeoutId, deferrable = new(require("Deferred"))();
                    preDisplayPromises.push(deferrable.getPromise());
                    return require("TimeSlice").guard(function() {
                        timeoutId && require("clearTimeout")(timeoutId), deferrable.resolve()
                    }, "AsyncRequestDisplayBlockingEvent", {
                        propagationType: require("TimeSlice").PropagationType.EXECUTION
                    })
                };
            serverJS.handle(preDisplayJSMods, {
                bigPipeContext: {
                    registerToBlockDisplayUntilDone_DONOTUSE: registerToBlockDisplayUntilDone_DONOTUSE
                }
            });
            _displayStarted = !0;
            return preDisplayPromises
        };
        _proto._hasEvalDomOp = function _hasEvalDomOp(domOps) {
            return domOps && domOps.length ? domOps.some(function(op) {
                return op[0] === "eval"
            }) : !1
        };
        _proto._handleJSResponse = function _handleJSResponse(asyncResponse) {
            __p && __p();
            var relativeTo = this.getRelativeTo(),
                domOps = asyncResponse.domops,
                dtsgToken = asyncResponse.dtsgToken,
                dtsgAsyncGetToken = asyncResponse.dtsgAsyncGetToken,
                jsMods = asyncResponse.jsmods,
                serverJS, savedServerJSInstance = asyncResponse.savedServerJSInstance;
            savedServerJSInstance && savedServerJSInstance instanceof require("ServerJS") ? serverJS = savedServerJSInstance : serverJS = new(require("ServerJS"))();
            serverJS.setRelativeTo(relativeTo);
            if (jsMods) {
                var preDisplayJSMods = {};
                preDisplayJSMods.define = jsMods.define;
                preDisplayJSMods.instances = jsMods.instances;
                preDisplayJSMods.markup = jsMods.markup;
                delete jsMods.define;
                delete jsMods.instances;
                delete jsMods.markup;
                this._hasEvalDomOp(domOps) && (preDisplayJSMods.elements = jsMods.elements, delete jsMods.elements);
                serverJS.handle(preDisplayJSMods)
            }
            dtsgToken && require("DTSG").setToken(dtsgToken);
            dtsgAsyncGetToken && require("DTSG_ASYNC").setToken(dtsgAsyncGetToken);
            domOps && require("AsyncDOM").invoke(domOps, relativeTo);
            jsMods && serverJS.handle(jsMods);
            this._handleJSRegisters(asyncResponse, "onload");
            this._handleJSRegisters(asyncResponse, "onafterload")
        };
        _proto._handleJSRegisters = function _handleJSRegisters(asyncResponse, phase) {
            var registers = asyncResponse[phase];
            if (registers)
                for (var ii = 0; ii < registers.length; ii++) require("ErrorUtils").applyWithGuard(new Function(registers[ii]), this)
        };
        _proto.invokeResponseHandler = function invokeResponseHandler(interpreted) {
            __p && __p();
            if (typeof interpreted.redirect !== "undefined") {
                require("setTimeout")(function() {
                    this.setURI(interpreted.redirect).send()
                }.bind(this), 0);
                return
            }
            if (interpreted.bootloadOnly !== void 0) {
                var toBootload = typeof interpreted.bootloadOnly === "string" ? JSON.parse(interpreted.bootloadOnly) : interpreted.bootloadOnly,
                    _loop = function _loop() {
                        __p && __p();
                        if (_isArray) {
                            if (_i >= _iterator.length) return "break";
                            _ref = _iterator[_i++]
                        } else {
                            _i = _iterator.next();
                            if (_i.done) return "break";
                            _ref = _i.value
                        }
                        var rsrcs = _ref;
                        require("TimeSlice").guard(function() {
                            require("Bootloader").loadPredictedResourceMap(rsrcs)
                        }, "Bootloader.loadPredictedResourceMap", {
                            root: !0
                        })()
                    };
                for (var _iterator = toBootload, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var _ref, _ret = _loop();
                    if (_ret === "break") break
                }
                return
            }
            if (!this.handler && !this.errorHandler && !this.transportErrorHandler && !this.preBootloadHandler && this.initialHandler === require("emptyFunction") && this.finallyHandler === require("emptyFunction")) return;
            var response = interpreted.asyncResponse;
            if (typeof response !== "undefined") {
                this._artilleryHandle != null && this._artilleryHandle(response);
                if (!this._isRelevant()) {
                    this._invokeErrorHandler(1010);
                    return
                }
                response.inlinejs && require("evalGlobal")(response.inlinejs);
                response.lid && (this._responseTime = Date.now(), global.CavalryLogger && (this.cavalry = global.CavalryLogger.getInstance(response.lid)), this.lid = response.lid);
                ix.add(response.ixData);
                require("bx").add(response.bxData);
                require("gkx").add(response.gkxData);
                require("qex").add(response.qexData);
                response.resource_map && require("Bootloader").setResourceMap(response.resource_map);
                response.bootloadable && require("Bootloader").enableBootload(response.bootloadable);
                var dispatch, arbiter_event;
                if (response.getError() && !response.getErrorIsWarning()) {
                    var handler = this.getErrorHandler().bind(this);
                    dispatch = require("ErrorUtils").guard(this._dispatchErrorResponse, "AsyncRequest#_dispatchErrorResponse for " + this.getURI());
                    dispatch = dispatch.bind(this, response, handler);
                    this._logError(response);
                    arbiter_event = "error"
                } else {
                    dispatch = require("ErrorUtils").guard(this._dispatchResponse.bind(this), "AsyncRequest#_dispatchResponse for " + this.getURI());
                    dispatch = dispatch.bind(this, response);
                    arbiter_event = "response";
                    var domOps = response.domops;
                    if (!this._delayPreDisplayJS && response.jsmods && response.jsmods.pre_display_requires && !this._hasEvalDomOp(domOps) && !require("killswitch")("ASYNC_REQUEST_EARLY_RENDERING_OF_PREDISPLAY_PRIORITY_JS")) {
                        var jsMods = response.jsmods,
                            preDisplayJSMods = {};
                        preDisplayJSMods.define = jsMods.define;
                        preDisplayJSMods.instances = jsMods.instances;
                        preDisplayJSMods.markup = jsMods.markup;
                        delete jsMods.define;
                        delete jsMods.instances;
                        delete jsMods.markup;
                        preDisplayJSMods.pre_display_requires = jsMods.pre_display_requires;
                        delete jsMods.pre_display_requires;
                        var serverJS = new(require("ServerJS"))();
                        serverJS.setRelativeTo(this.getRelativeTo());
                        response.savedServerJSInstance = serverJS;
                        var preDisplayPromises = this._handlePreDisplayServerJS(serverJS, preDisplayJSMods);
                        if (preDisplayPromises && preDisplayPromises.length) {
                            var realDispatch = dispatch;
                            dispatch = function dispatch() {
                                require("promiseDone")(require("Promise").all(preDisplayPromises).then(realDispatch))
                            }
                        }
                    }
                }
                dispatch = require("executeAfter")(dispatch, function() {
                    require("Arbiter").inform("AsyncRequest/" + arbiter_event, {
                        request: this,
                        response: response
                    })
                }.bind(this));
                this.preBootloadHandler && this.preBootloadHandler(response);
                response.css = response.css || [];
                response.js = response.js || [];
                require("Bootloader").loadResources(response.css.concat(response.js), require("AsyncRequestConfig").immediateDispatch ? dispatch : function() {
                    require("setTimeout")(dispatch, 0)
                }, this.getURI())
            } else typeof interpreted.transportError !== "undefined" ? this._xFbServer ? this._invokeErrorHandler(1008) : this._invokeErrorHandler(1012) : this._invokeErrorHandler(1007)
        };
        _proto._logError = function _logError(response) {
            __p && __p();
            if (this.logErrorsEnabled && !this.getOption("suppressErrorAlerts")) {
                var message;
                try {
                    message = JSON.stringify(response)
                } catch (_unused3) {
                    try {
                        message = JSON.stringify({
                            error: response.error,
                            errorSummary: response.errorSummary,
                            errorDescription: response.errorDescription
                        })
                    } catch (ex) {
                        require("FBLogger")("AsyncRequest").catching(ex).mustfix("Failed to stringify message");
                        return
                    }
                }
                require("FBLogger")("asyncresponse").mustfix("Async error response %s", message)
            }
        };
        _proto._invokeErrorHandler = function _invokeErrorHandler(explicitError) {
            __p && __p();
            var transport = this.transport;
            if (!transport) return;
            var error;
            if (this.responseText === "") error = 1002;
            else if (this._requestAborted) error = 1011;
            else {
                try {
                    error = explicitError || transport.status || 1004
                } catch (_unused4) {
                    error = 1005
                }!1 === navigator.onLine && (error = 1006)
            }
            var desc, summary, silent = !0;
            if (error === 1006) summary = fbt._("\u65e0\u7f51\u7edc\u8fde\u63a5"), desc = fbt._("\u4f60\u7684\u6d4f\u89c8\u5668\u4f3c\u4e4e\u5df2\u79bb\u7ebf\u3002\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u540e\u91cd\u8bd5\u3002");
            else if (error >= 300 && error <= 399) {
                summary = fbt._("\u8df3\u8f6c");
                desc = fbt._("\u4f60\u5bf9 Facebook \u7684\u8bbf\u95ee\u6b64\u65f6\u88ab\u7b2c\u4e09\u65b9\u91cd\u5b9a\u5411\u6216\u5c4f\u853d\uff0c\u8bf7\u4e0e\u4f60 ISP \u8054\u7cfb\u6216\u91cd\u65b0\u52a0\u8f7d\u3002");
                var location = transport.getResponseHeader("Location");
                location && require("goURI")(location, !0);
                silent = !0
            } else summary = fbt._("\u51fa\u73b0\u95ee\u9898"), desc = fbt._("\u7cfb\u7edf\u51fa\u73b0\u9519\u8bef\u3002\u6211\u4eec\u6b63\u5728\u4fee\u590d\u95ee\u9898\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002");
            var async_response = new(require("AsyncResponse"))(this, transport);
            Object.assign(async_response, {
                error: error,
                errorSummary: summary,
                errorDescription: desc,
                silentError: silent
            });
            this._logError(async_response);
            require("setTimeout")(function() {
                require("Arbiter").inform("AsyncRequest/error", {
                    request: this,
                    response: async_response
                })
            }.bind(this), 0);
            if (hasUnloaded() && !this.getOption("handleErrorAfterUnload")) return;
            if (!this.transportErrorHandler) {
                require("FBLogger")("asyncresponse").mustfix("Async request to %s failed with a %d error, but there was no error handler available to deal with it.", this.getURI(), error);
                return
            }
            var error_handler = this.getTransportErrorHandler().bind(this);
            !(this.getOption("suppressErrorAlerts") || this._warningList.indexOf(error) > -1) ? require("FBLogger")("asyncresponse").mustfix("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI()): this._warningList.indexOf(error) > -1 && require("FBLogger")("asyncresponse").warn("Async request failed with error %s: %s when requesting %s", error, desc.toString(), this.getURI());
            require("ErrorUtils").applyWithGuard(this._dispatchErrorResponse, this, [async_response, error_handler])
        };
        _proto._isServerDialogErrorCode = function _isServerDialogErrorCode(error) {
            return error == 1357008 || error == 1357007 || error == 1357041 || error == 1442002 || error == 1357001
        };
        _proto._solveQuicksandChallenge = function _solveQuicksandChallenge(async_response) {
            var payload = async_response.getPayload();
            require("Bootloader").loadModules(["QuickSandSolver"], function(QuickSandSolver) {
                QuickSandSolver.solveAndSendRequestBack(this, payload)
            }.bind(this), "AsyncRequest")
        };
        _proto._displayServerDialog = function _displayServerDialog(async_response, is_confirmation, allow_get) {
            __p && __p();
            allow_get === void 0 && (allow_get = !1);
            var payload = async_response.getPayload();
            if (payload.__dialog !== void 0) {
                this._displayServerLegacyDialog(async_response, is_confirmation);
                return
            }
            var json = payload.__dialogx;
            new(require("ServerJS"))().handle(json);
            require("Bootloader").loadModules(["ConfirmationDialog"], function(ConfirmationDialog) {
                ConfirmationDialog.setupConfirmation(async_response, this, allow_get)
            }.bind(this), "AsyncRequest")
        };
        _proto._displayServerLegacyDialog = function _displayServerLegacyDialog(async_response, is_confirmation) {
            __p && __p();
            var model = async_response.getPayload().__dialog;
            require("Bootloader").loadModules(["Dialog"], function(Dialog) {
                var dialog = new Dialog(model);
                is_confirmation && dialog.setHandler(this._displayConfirmationHandler.bind(this, dialog));
                dialog.setCancelHandler(function() {
                    var handler = this.getServerDialogCancelHandler();
                    try {
                        handler && handler(async_response)
                    } catch (e) {
                        throw e
                    } finally {
                        this.finallyHandler(async_response)
                    }
                }.bind(this)).setCausalElement(this.relativeTo).show()
            }.bind(this), "AsyncRequest")
        };
        _proto._displayConfirmationHandler = function _displayConfirmationHandler(dialog) {
            this.data.confirmed = 1, Object.assign(this.data, dialog.getFormData()), this.send()
        };
        _proto.setJSONPTransport = function setJSONPTransport(transport) {
            transport.subscribe("response", this._handleJSONPResponse.bind(this)), transport.subscribe("abort", this._handleJSONPAbort.bind(this)), this.transport = transport
        };
        _proto._handleJSONPResponse = function _handleJSONPResponse(_, data) {
            var transport = this.transport;
            if (!transport) return;
            data.bootloadOnly || (this.is_first = this.is_first === void 0);
            var interpreted = this._interpretResponse(data);
            interpreted.asyncResponse && (interpreted.asyncResponse.is_first = this.is_first, interpreted.asyncResponse.is_last = transport.hasFinished());
            this.invokeResponseHandler(interpreted);
            transport.hasFinished() && delete this.transport
        };
        _proto._handleJSONPAbort = function _handleJSONPAbort() {
            this._invokeErrorHandler(), delete this.transport
        };
        _proto._handleXHRResponse = function _handleXHRResponse(transport) {
            __p && __p();
            var interpreted;
            if (this.getOption("suppressEvaluation")) interpreted = {
                asyncResponse: new(require("AsyncResponse"))(this, transport)
            };
            else {
                var text = transport.responseText;
                try {
                    var safe_text = this._unshieldResponseText(text),
                        _response = eval("(" + safe_text + ")");
                    interpreted = this._interpretResponse(_response)
                } catch (error) {
                    interpreted = error.message, require("FBLogger")("async_request").catching(error).warn("Faild to handle repsonse")
                }
            }
            this.invokeResponseHandler(interpreted)
        };
        _proto._unshieldResponseText = function _unshieldResponseText(text) {
            var shield = "for (;;);",
                shieldlen = shield.length;
            if (text.length <= shieldlen) throw new Error("Response too short on async to " + this.getURI());
            var offset = 0;
            while (text.charAt(offset) == " " || text.charAt(offset) == "\n") offset++;
            offset && text.substring(offset, offset + shieldlen) == shield;
            return text.substring(offset + shieldlen)
        };
        _proto._interpretResponse = function _interpretResponse(response) {
            __p && __p();
            if (response.redirect) return {
                redirect: response.redirect
            };
            if (response.bootloadOnly) return {
                bootloadOnly: response.bootloadOnly
            };
            var isServerDialog = response.error && this._isServerDialogErrorCode(response.error);
            this._shouldReplaceTransportMarkers && response.payload && !isServerDialog && require("replaceTransportMarkers")({
                relativeTo: this.getRelativeTo(),
                bigPipeContext: null
            }, response.payload);
            var r = new(require("AsyncResponse"))(this);
            if (response.__ar != 1) require("FBLogger")("AsyncRequest").warn("AsyncRequest to endpoint %s returned a JSON response, but it is not properly formatted. The endpoint needs to provide a response using the AsyncResponse class in PHP.", this.getURI()), r.payload = response;
            else {
                Object.assign(r, response);
                var transport = this.transport;
                transport && transport.getAllResponseHeaders !== void 0 && (r.responseHeaders = transport.getAllResponseHeaders())
            }
            return {
                asyncResponse: r
            }
        };
        _proto._isMultiplexable = function _isMultiplexable() {
            __p && __p();
            if (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) {
                require("FBLogger")("AsyncRequest").mustfix("You cannot bundle AsyncRequest that uses jsonp or iframe transport.");
                return !1
            }
            if (!require("isFacebookURI")(new(require("URI"))(this.uri))) {
                require("FBLogger")("AsyncRequest").mustfix("You can not bundle AsyncRequest sent to non-facebook URIs.  Uri: %s", this.getURI());
                return !1
            }
            if (!this.getOption("asynchronous_DEPRECATED")) {
                require("FBLogger")("AsyncRequest").mustfix("We cannot bundle synchronous AsyncRequests");
                return !1
            }
            return !0
        };
        _proto.handleResponse = function handleResponse(response) {
            var interpreted = this._interpretResponse(response);
            this.invokeResponseHandler(interpreted)
        };
        _proto.setMethod = function setMethod(m) {
            this.method = m.toString().toUpperCase();
            return this
        };
        _proto.getMethod = function getMethod() {
            return this.method
        };
        _proto.setData = function setData(obj) {
            this.data = obj;
            return this
        };
        _proto.setRequestHeader = function setRequestHeader(name, value) {
            this.headers[name] = value;
            return this
        };
        _proto.setRawData = function setRawData(raw_data) {
            this.rawData = raw_data;
            return this
        };
        _proto.getData = function getData() {
            return this.data
        };
        _proto.setContextData = function setContextData(key, value, enabled) {
            enabled = enabled === void 0 ? !0 : enabled;
            enabled && (this.context["_log_" + key] = value);
            return this
        };
        _proto._setUserActionID = function _setUserActionID() {
            this.userActionID = (require("SessionName").getName() || "-") + "/-"
        };
        _proto.setURI = function setURI(uri) {
            __p && __p();
            typeof uri === "string" && uri.match(/^\/?u_\d+_\d+/) && require("FBLogger")("asyncrequest").warn("Invalid URI %s", uri);
            var uri_obj = new(require("URI"))(uri);
            if ((this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && !require("isFacebookURI")(uri_obj)) return this;
            if (!this._allowCrossOrigin && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback") && !uri_obj.isSameOrigin()) return this;
            this._setUserActionID();
            if (!uri || uri_obj.isEmpty()) {
                require("FBLogger")("async_request").mustfix("URI cannot be empty");
                return this
            }
            this.uri = require("ZeroRewrites").rewriteURI(uri_obj);
            return this
        };
        _proto.getURI = function getURI() {
            return this.uri.toString()
        };
        _proto.delayPreDisplayJS = function delayPreDisplayJS(shouldDelayJS) {
            shouldDelayJS === void 0 && (shouldDelayJS = !0);
            this._delayPreDisplayJS = shouldDelayJS;
            return this
        };
        _proto.setInitialHandler = function setInitialHandler(fn) {
            this.initialHandler = fn;
            return this
        };
        _proto.setPayloadHandler = function setPayloadHandler(fn) {
            this.setHandler(function(response) {
                return fn(response.payload)
            });
            return this
        };
        _proto.setHandler = function setHandler(fn) {
            validateResponseHandler(fn) && (this.handler = fn);
            return this
        };
        _proto.getHandler = function getHandler() {
            return this.handler || require("emptyFunction")
        };
        _proto.setProgressHandler = function setProgressHandler(fn) {
            validateResponseHandler(fn) && (this.progressHandler = fn);
            return this
        };
        _proto.setUploadProgressHandler = function setUploadProgressHandler(fn) {
            validateResponseHandler(fn) && (this.uploadProgressHandler = fn);
            return this
        };
        _proto.setErrorHandler = function setErrorHandler(fn) {
            validateResponseHandler(fn) && (this.errorHandler = fn);
            return this
        };
        _proto.setTransportErrorHandler = function setTransportErrorHandler(fn) {
            this.transportErrorHandler = fn;
            return this
        };
        _proto.getErrorHandler = function getErrorHandler() {
            return this.errorHandler || require("emptyFunction")
        };
        _proto.getTransportErrorHandler = function getTransportErrorHandler() {
            return this.transportErrorHandler || require("emptyFunction")
        };
        _proto.setTimeoutHandler = function setTimeoutHandler(timeout, fn) {
            validateResponseHandler(fn) && (this.timeout = timeout, this.timeoutHandler = fn);
            return this
        };
        _proto.resetTimeout = function resetTimeout(timeout) {
            if (!(this.timeoutHandler === null))
                if (timeout === null) this.timeout = null, require("clearTimeout")(this.timer), this.timer = null;
                else {
                    var clear_on_quickling_event = !this._allowCrossPageTransition;
                    this.timeout = timeout;
                    require("clearTimeout")(this.timer);
                    clear_on_quickling_event ? this.timer = require("setTimeout")(this._handleTimeout.bind(this), this.timeout) : this.timer = require("setTimeoutAcrossTransitions")(this._handleTimeout.bind(this), this.timeout)
                }
            return this
        };
        _proto._handleTimeout = function _handleTimeout() {
            var _this2 = this;
            this.continuation.last(function() {
                _this2._requestTimeout = !0;
                var func = _this2.timeoutHandler;
                _this2.abandon();
                func && func(_this2);
                _this2._logError({
                    timeout: _this2
                });
                require("setTimeout")(function() {
                    require("Arbiter").inform("AsyncRequest/timeout", {
                        request: this
                    })
                }.bind(_this2), 0)
            })
        };
        _proto.disableInteractionServerTracing = function disableInteractionServerTracing() {
            this.allowInteractionServerTracing = !1;
            return this
        };
        _proto.setNewSerial = function setNewSerial() {
            this.id = ++last_id;
            return this
        };
        _proto.setInterceptHandler = function setInterceptHandler(fn) {
            this.interceptHandler = fn;
            return this
        };
        _proto.setFinallyHandler = function setFinallyHandler(fn) {
            this.finallyHandler = fn;
            return this
        };
        _proto.setAbortHandler = function setAbortHandler(fn) {
            this.abortHandler = fn;
            return this
        };
        _proto.getServerDialogCancelHandler = function getServerDialogCancelHandler() {
            return this.serverDialogCancelHandler
        };
        _proto.setServerDialogCancelHandler = function setServerDialogCancelHandler(fn) {
            this.serverDialogCancelHandler = fn;
            return this
        };
        _proto.setPreBootloadHandler = function setPreBootloadHandler(fn) {
            this.preBootloadHandler = fn;
            return this
        };
        _proto.setReadOnly = function setReadOnly(readOnly) {
            typeof readOnly !== "boolean" || (this.readOnly = readOnly);
            return this
        };
        _proto.getReadOnly = function getReadOnly() {
            return this.readOnly
        };
        _proto.setRelativeTo = function setRelativeTo(element) {
            this.relativeTo = element;
            return this
        };
        _proto.getRelativeTo = function getRelativeTo() {
            return this.relativeTo
        };
        _proto.setStatusClass = function setStatusClass(c) {
            this.statusClass = c;
            return this
        };
        _proto.setStatusElement = function setStatusElement(element) {
            this.statusElement = element;
            return this
        };
        _proto.getStatusElement = function getStatusElement() {
            return require("ge")(this.statusElement)
        };
        _proto._isRelevant = function _isRelevant() {
            if (this._allowCrossPageTransition) return !0;
            return !this.id ? !0 : this.id > id_threshold
        };
        _proto.clearStatusIndicator = function clearStatusIndicator() {
            var statusElem = this.getStatusElement();
            statusElem && (require("CSS").removeClass(statusElem, "async_saving"), require("CSS").removeClass(statusElem, this.statusClass))
        };
        _proto.addStatusIndicator = function addStatusIndicator() {
            var statusElem = this.getStatusElement();
            statusElem && (require("CSS").addClass(statusElem, "async_saving"), require("CSS").addClass(statusElem, this.statusClass))
        };
        _proto.specifiesWriteRequiredParams = function specifiesWriteRequiredParams() {
            return this.writeRequiredParams.every(function(param) {
                this.data[param] = this.data[param] || require("Env")[param] || (require("ge")(param) || {}).value;
                return this.data[param] !== void 0 ? !0 : !1
            }, this)
        };
        _proto.setOption = function setOption(opt, v) {
            typeof this.option[opt] !== "undefined" && (this.option[opt] = v);
            return this
        };
        _proto.getOption = function getOption(opt) {
            typeof this.option[opt] === "undefined";
            return this.option[opt]
        };
        _proto.abort = function abort() {
            __p && __p();
            var _this3 = this;
            this.continuation.last(function() {
                __p && __p();
                var transport = _this3.transport;
                if (transport) {
                    var old_handler = _this3.getTransportErrorHandler();
                    _this3.setOption("suppressErrorAlerts", !0);
                    _this3.setTransportErrorHandler(require("emptyFunction"));
                    _this3._requestAborted = !0;
                    transport.abort();
                    _this3.setTransportErrorHandler(old_handler)
                }
                _this3.abortHandler();
                AsyncMultiplex.unschedule(_this3)
            })
        };
        _proto.abandon = function abandon() {
            var _this4 = this;
            this.continuation.last(function() {
                require("clearTimeout")(_this4.timer);
                _this4.setOption("suppressErrorAlerts", !0).setHandler(require("emptyFunction")).setErrorHandler(require("emptyFunction")).setTransportErrorHandler(require("emptyFunction")).setProgressHandler(require("emptyFunction")).setUploadProgressHandler(require("emptyFunction"));
                var transport = _this4.transport;
                transport && (_this4._requestAborted = !0, supportsProgress(transport) && delete transport.onprogress, supportsUploadProgress(transport) && delete transport.upload.onprogress, transport.abort());
                _this4.abortHandler();
                AsyncMultiplex.unschedule(_this4)
            })
        };
        _proto.setNectarData = function setNectarData(nctrParams) {
            nctrParams && (this.data.nctr === void 0 && (this.data.nctr = {}), Object.assign(this.data.nctr, nctrParams));
            return this
        };
        _proto.setNectarModuleDataSafe = function setNectarModuleDataSafe(elem) {
            var setNectarModuleData = this.setNectarModuleData;
            setNectarModuleData && setNectarModuleData.call(this, elem);
            return this
        };
        _proto.setAllowCrossPageTransition = function setAllowCrossPageTransition(allow) {
            this._allowCrossPageTransition = !!allow;
            this.timer && this.resetTimeout(this.timeout);
            return this
        };
        _proto.getAllowIrrelevantRequests = function getAllowIrrelevantRequests() {
            return this._allowIrrelevantRequests
        };
        _proto.setAllowIrrelevantRequests = function setAllowIrrelevantRequests(allowIrrelevantRequests) {
            this._allowIrrelevantRequests = allowIrrelevantRequests;
            return this
        };
        _proto.setAllowCrossOrigin = function setAllowCrossOrigin(allow) {
            this._allowCrossOrigin = allow;
            return this
        };
        _proto.setAllowCredentials = function setAllowCredentials(allow) {
            this._allowCredentials = allow;
            return this
        };
        _proto.setIsBackgroundRequest = function setIsBackgroundRequest(isBackgroundRequest) {
            this._isBackgroundRequest = isBackgroundRequest;
            return this
        };
        _proto.setReplaceTransportMarkers = function setReplaceTransportMarkers(value) {
            value === void 0 && (value = !0);
            this._shouldReplaceTransportMarkers = value;
            return this
        };
        _proto.sendAndReturnAbortHandler = function sendAndReturnAbortHandler() {
            var _this5 = this;
            this.send();
            return function() {
                return _this5.abort()
            }
        };
        _proto.send = function send(isRetry) {
            __p && __p();
            var _this6 = this;
            isRetry = isRetry || !1;
            if (!this.uri) return !1;
            this.errorHandler || !this.getOption("suppressErrorHandlerWarning");
            this.getOption("jsonp") && this.method != "GET" && this.setMethod("GET");
            (this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback")) && this.method != "GET" && this.setMethod("GET");
            this.timeoutHandler !== null && (this.getOption("jsonp") || this.getOption("useIframeTransport") || this.getOption("useFetchWithIframeFallback"));
            if (!this.getReadOnly()) {
                this.specifiesWriteRequiredParams();
                if (this.method != "POST") return !1
            }
            if (document.location.search.toString().includes(this.uri.toString())) return !1;
            (this.uri.toString().includes("../") || this.uri.toString().includes("..\\")) && AsyncRequestPathTraversalTypedLoggerDeferred.onReady(function(logger) {
                new logger().setOffendingURI(_this6.uri.toString()).log()
            });
            Object.assign(this.data, require("getAsyncParams")(this.method));
            this.allowInteractionServerTracing && (this._artilleryHandle = require("ArtilleryAsyncRequestTracingAnnotator").registerAsyncRequest(this, this.resourceTimingStoreUID));
            require("isEmpty")(this.context) || (Object.assign(this.data, this.context), this.data.ajax_log = 1);
            require("Env").force_param && Object.assign(this.data, require("Env").force_param);
            this._setUserActionID();
            if (this.getOption("bundle") && this._isMultiplexable()) {
                AsyncMultiplex.schedule(this);
                return !0
            }
            this.setNewSerial();
            this.getOption("asynchronous_DEPRECATED") || this.uri.addQueryData({
                __s: 1
            });
            require("Arbiter").inform("AsyncRequest/send", {
                request: this
            });
            var uri_str, query;
            this.method == "GET" && this.uri.addQueryData({
                fb_dtsg_ag: require("DTSG_ASYNC").getToken()
            });
            this.method == "GET" || this.rawData ? (uri_str = this.uri.addQueryData(this.data).toString(), query = this.rawData || "") : (this._allowCrossOrigin && this.uri.addQueryData({
                __a: 1
            }), uri_str = this.uri.toString(), query = require("PHPQuerySerializer").serialize(this.data));
            if (this.transport) return !1;
            if (this.getOption("useFetchWithIframeFallback")) try {
                var _transport = new(require("FetchStreamTransport"))(this.uri);
                this.setJSONPTransport(_transport);
                this._markRequestSent();
                _transport.send();
                this.setOption("useIframeTransport", !1);
                return !0
            } catch (_unused5) {
                this.setOption("useFetchWithIframeFallback", !1), this.setOption("useIframeTransport", !0)
            }
            if (this.getOption("jsonp") || this.getOption("useIframeTransport")) {
                requireLazy(["JSONPTransport"], function(JSONPTransport) {
                    var transport = new JSONPTransport(this.getOption("jsonp") ? "jsonp" : "iframe", this.uri);
                    this.setJSONPTransport(transport);
                    this._markRequestSent();
                    transport.send();
                    require("ProfilingCounters").incrementCounter("ASYNC_REQUEST_COUNT", 1)
                }.bind(this));
                return !0
            }
            var transport = require("ZeroRewrites").getTransportBuilderForURI(this.uri)();
            if (!transport) return !1;
            this.schedule("AsyncRequest.send");
            transport.onreadystatechange = function() {
                transport.readyState === 4 && _this6.continuation.last(_this6._onStateChange)
            };
            this.progressHandler && supportsProgress(transport) && (transport.onprogress = function() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                _this6.continuation(function() {
                    _this6.progressHandler && _this6.progressHandler.apply(_this6, args)
                })
            });
            this.uploadProgressHandler && supportsUploadProgress(transport) && (transport.upload.onprogress = function() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                _this6.continuation(function() {
                    _this6.uploadProgressHandler && _this6.uploadProgressHandler.apply(_this6, args)
                })
            });
            isRetry || (this.remainingRetries = this.getOption("retries"));
            this.transport = transport;
            try {
                transport.open(this.method, uri_str, this.getOption("asynchronous_DEPRECATED"))
            } catch (exception) {
                return !1
            }
            if (!this.uri.isSameOrigin() && !this.getOption("jsonp") && !this.getOption("useIframeTransport") && !this.getOption("useFetchWithIframeFallback")) {
                if (!supportsCrossOrigin(transport)) return !1;
                this._canSendCredentials() && (transport.withCredentials = !0)
            }
            this.method == "POST" && !this.rawData && transport.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            this._isBackgroundRequest && transport.setRequestHeader("X_FB_BACKGROUND_STATE", "1");
            var asyncHeaders = require("getAsyncHeaders")(this.uri);
            Object.keys(asyncHeaders).forEach(function(name) {
                transport && transport.setRequestHeader(name, asyncHeaders[name])
            });
            require("Arbiter").inform("AsyncRequest/will_send", {
                request: this
            });
            if (transport)
                for (var headerName in this.headers) Object.prototype.hasOwnProperty.call(this.headers, headerName) && transport.setRequestHeader(headerName, this.headers[headerName]);
            this.addStatusIndicator();
            this._markRequestSent();
            transport.send(query);
            this.timeout !== null && this.resetTimeout(this.timeout);
            AsyncRequest._inflightCount++;
            require("ProfilingCounters").incrementCounter("ASYNC_REQUEST_COUNT", 1);
            return !0
        };
        _proto.schedule = function schedule(name) {
            this.continuation = require("TimeSlice").getReusableContinuation(name)
        };
        _proto._canSendCredentials = function _canSendCredentials() {
            if (this._allowCredentials === !1) return !1;
            var uri = new(require("URI"))(this.uri);
            return require("isFacebookURI")(uri) || require("isMessengerDotComURI")(uri) || require("isWorkplaceDotComURI")(uri) || require("isBonfireURI")(uri)
        };
        _proto._markRequestSent = function _markRequestSent() {
            var _this7 = this,
                fullURI = new(require("URI"))(this.getURI()).getQualifiedURI().toString();
            require("ResourceTimingsStore").updateURI(require("ResourceTypes").XHR, this.resourceTimingStoreUID, fullURI);
            require("ResourceTimingsStore").annotate(require("ResourceTypes").XHR, this.resourceTimingStoreUID).addStringAnnotation("uri", fullURI);
            require("ifRequired")("TimeSliceAutoclosedInteraction", function(TimeSliceAutoclosedInteraction) {
                return TimeSliceAutoclosedInteraction.getInteractionsActiveRightNow().forEach(function(interaction) {
                    return interaction.forResourceRequest(_this7.resourceTimingStoreUID).addStringAnnotation("requested_in_continuation", "true")
                })
            });
            require("ResourceTimingsStore").measureRequestSent(require("ResourceTypes").XHR, this.resourceTimingStoreUID)
        };
        _proto.promisePayload = function promisePayload(isRetry) {
            return this.exec().then(function(response) {
                return response.payload
            }, function(response) {
                throw response.toError()
            })
        };
        _proto.exec = function exec(isRetry) {
            var _this8 = this;
            if (this.getHandler() !== require("emptyFunction") || this.getErrorHandler() !== require("AsyncResponse").defaultErrorHandler) throw new Error("exec is an async function and does not allow previously set handlers");
            return new(require("Promise"))(function(resolve, reject) {
                _this8.setHandler(resolve).setErrorHandler(reject).send(isRetry)
            })
        };
        AsyncRequest.bootstrap = function bootstrap(href, elem, is_post) {
            __p && __p();
            var method = "GET",
                readonly = !0,
                data = {};
            (is_post || elem && elem.rel == "async-post") && (method = "POST", readonly = !1, href && (href = new(require("URI"))(href), data = href.getQueryData(), href.setQueryData({})));
            var status_elem = require("Parent").byClass(elem, "stat_elem") || elem;
            if (status_elem && require("CSS").hasClass(status_elem, "async_saving")) return !1;
            var async = new AsyncRequest(href).setReadOnly(readonly).setMethod(method).setData(data).setNectarModuleDataSafe(elem).setRelativeTo(elem);
            elem && (async.setHandler(function(response) {
                require("Event").fire(elem, "success", {
                    response: response
                })
            }), async.setErrorHandler(function(response) {
                require("Event").fire(elem, "error", {
                    response: response
                }) !== !1 && require("AsyncResponse").defaultErrorHandler(response)
            }));
            if (status_elem instanceof HTMLElement) {
                async.setStatusElement(status_elem);
                var status_class = status_elem.getAttribute("data-status-class");
                status_class && async.setStatusClass(status_class)
            }
            async.send();
            return !1
        };
        AsyncRequest.post = function post(href, data) {
            new AsyncRequest(href).setReadOnly(!1).setMethod("POST").setData(data).send();
            return !1
        };
        AsyncRequest.postStatic = function postStatic(href, data) {
            AsyncRequest.post(href, data)
        };
        AsyncRequest.getLastID = function getLastID() {
            return last_id
        };
        AsyncRequest.getInflightCount = function getInflightCount() {
            return this._inflightCount
        };
        return AsyncRequest
    }();
    AsyncRequest._inflightCount = 0;
    var _asyncMultiplex, _pendingAsyncMultiplexes = [],
        AsyncMultiplex = function() {
            __p && __p();

            function AsyncMultiplex() {
                this._requests = []
            }
            var _proto2 = AsyncMultiplex.prototype;
            _proto2.add = function add(request) {
                this._requests.push(request)
            };
            _proto2.remove = function remove(request) {
                var requests = this._requests,
                    requestsSent = this._requestsSent;
                for (var ii = 0, jj = requests.length; ii < jj; ii++) requests[ii] === request && (requestsSent ? requests[ii] = null : requests.splice(ii, 1))
            };
            _proto2.send = function send() {
                __p && __p();
                this._requestsSent && invariant(0, 4390);
                this._requestsSent = !0;
                this._wrapperRequest = null;
                var requests = this._requests;
                if (!requests.length) return;
                var request;
                if (requests.length === 1) request = requests[0];
                else {
                    var data = requests.filter(Boolean).map(function(request) {
                        return [request.uri.getPath(), require("PHPQuerySerializer").serialize(request.data)]
                    });
                    request = this._wrapperRequest = new AsyncRequest("/ajax/proxy.php").setAllowCrossPageTransition(!0).setData({
                        data: data
                    }).setHandler(this._handler.bind(this)).setTransportErrorHandler(this._transportErrorHandler.bind(this))
                }
                request && request.setOption("bundle", !1).send()
            };
            _proto2._handler = function _handler(response) {
                __p && __p();
                var _this9 = this,
                    responses = response.getPayload().responses;
                if (responses.length !== this._requests.length) return;
                var _loop2 = function _loop2(ii) {
                    __p && __p();
                    var request = _this9._requests[ii];
                    if (!request) return "continue";
                    var request_path = request.uri.getPath();
                    _this9._wrapperRequest && (request.id = _this9._wrapperRequest.id);
                    if (responses[ii][0] !== request_path) {
                        request.continuation.last(function() {
                            request.invokeResponseHandler({
                                transportError: "Wrong response order in bundled request to " + request_path
                            })
                        });
                        return "continue"
                    }
                    request.continuation.last(function() {
                        request.handleResponse(responses[ii][1])
                    })
                };
                for (var ii = 0; ii < this._requests.length; ii++) {
                    var _ret2 = _loop2(ii);
                    if (_ret2 === "continue") continue
                }
                _pendingAsyncMultiplexes.splice(_pendingAsyncMultiplexes.indexOf(this, 1))
            };
            _proto2._transportErrorHandler = function _transportErrorHandler(response) {
                var interpreted = {
                        transportError: response.errorDescription
                    },
                    paths = this._requests.filter(Boolean).map(function(request) {
                        this._wrapperRequest && (request.id = this._wrapperRequest.id);
                        request.invokeResponseHandler(interpreted);
                        return request.uri.getPath()
                    }, this)
            };
            AsyncMultiplex.schedule = function schedule(request) {
                request.schedule("AsyncMultiplex.schedule");
                _asyncMultiplex || (_asyncMultiplex = new AsyncMultiplex(), _pendingAsyncMultiplexes.push(_asyncMultiplex), require("TimeSlice").guard(function() {
                    require("setTimeoutAcrossTransitions")(function() {
                        _asyncMultiplex && (_asyncMultiplex.send(), _asyncMultiplex = null)
                    }, 0)
                }, "AsyncMultiplex.schedule", {
                    propagationType: require("TimeSlice").PropagationType.ORPHAN
                })());
                _asyncMultiplex.add(request);
                return _asyncMultiplex
            };
            AsyncMultiplex.unschedule = function unschedule(request) {
                _pendingAsyncMultiplexes.forEach(function(asyncMultiplex) {
                    asyncMultiplex.remove(request)
                })
            };
            return AsyncMultiplex
        }();
    AsyncRequest.suppressOnloadToken = {};
    global.AsyncRequest = AsyncRequest;
    module.exports = AsyncRequest
}), null);
__d("normalizeBoundingClientRect", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b) {
        a = a.ownerDocument.documentElement;
        var c = a ? a.clientLeft : 0;
        a = a ? a.clientTop : 0;
        var d = Math.round(b.left) - c;
        c = Math.round(b.right) - c;
        var e = Math.round(b.top) - a;
        b = Math.round(b.bottom) - a;
        return {
            left: d,
            right: c,
            top: e,
            bottom: b,
            width: c - d,
            height: b - e
        }
    }
    e.exports = a
}), null);
__d("getElementRect", ["containsNode", "normalizeBoundingClientRect"], (function(a, b, c, d, e, f) {
    function a(a) {
        var c;
        c = a == null ? void 0 : (c = a.ownerDocument) == null ? void 0 : c.documentElement;
        return !a || !("getBoundingClientRect" in a) || !b("containsNode")(c, a) ? {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            width: 0,
            height: 0
        } : b("normalizeBoundingClientRect")(a, a.getBoundingClientRect())
    }
    e.exports = a
}), null);
__d("getElementPosition", ["getElementRect"], (function(a, b, c, d, e, f) {
    function a(a) {
        a = b("getElementRect")(a);
        return {
            x: a.left,
            y: a.top,
            width: a.right - a.left,
            height: a.bottom - a.top
        }
    }
    e.exports = a
}), null);
__d("Form", ["DataStore", "DOM", "DOMQuery", "DTSG", "DTSGUtils", "Input", "LSD", "PHPQuerySerializer", "Random", "SprinkleConfig", "URI", "getElementPosition", "isFacebookURI", "isNode"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "FileList" in window,
        h = "FormData" in window;

    function i(a) {
        var c = {};
        b("PHPQuerySerializer").serialize(a).split("&").forEach(function(a) {
            if (a) {
                a = /^([^=]*)(?:=(.*))?$/.exec(a);
                var d = b("URI").decodeComponent(a[1]),
                    e = a[2] !== void 0;
                e = e ? b("URI").decodeComponent(a[2]) : null;
                c[d] = e
            }
        });
        return c
    }
    var j = {
        getInputs: function(a) {
            a === void 0 && (a = document);
            return [].concat(b("DOMQuery").scry(a, "input"), b("DOMQuery").scry(a, "select"), b("DOMQuery").scry(a, "textarea"), b("DOMQuery").scry(a, "button"))
        },
        getInputsByName: function(a) {
            var b = {};
            j.getInputs(a).forEach(function(a) {
                var c = b[a.name];
                b[a.name] = typeof c === "undefined" ? a : [a].concat(c)
            });
            return b
        },
        getSelectValue: function(a) {
            return a.options[a.selectedIndex].value
        },
        setSelectValue: function(a, b) {
            for (var c = 0; c < a.options.length; ++c)
                if (a.options[c].value == b) {
                    a.selectedIndex = c;
                    break
                }
        },
        getRadioValue: function(a) {
            for (var b = 0; b < a.length; b++)
                if (a[b].checked) return a[b].value;
            return null
        },
        getElements: function(a) {
            return a.tagName == "FORM" && a.elements != a ? Array.from(a.elements) : j.getInputs(a)
        },
        getAttribute: function(a, b) {
            return (a.getAttributeNode(b) || {}).value || null
        },
        setDisabled: function(a, c) {
            j.getElements(a).forEach(function(a) {
                if (a.disabled !== void 0) {
                    var d = b("DataStore").get(a, "origDisabledState");
                    c ? (d === void 0 && b("DataStore").set(a, "origDisabledState", a.disabled), a.disabled = c) : d === !1 && (a.disabled = !1)
                }
            })
        },
        forEachValue: function(a, c, d) {
            __p && __p();
            j.getElements(a).forEach(function(a) {
                __p && __p();
                if (!a.name || a.disabled) return;
                if (a.type === "submit") return;
                if (a.type === "reset" || a.type === "button" || a.type === "image") return;
                if ((a.type === "radio" || a.type === "checkbox") && !a.checked) return;
                if (a.nodeName === "SELECT") {
                    for (var c = 0, e = a.options.length; c < e; c++) {
                        var f = a.options[c];
                        f.selected && d("select", a.name, f.value)
                    }
                    return
                }
                if (a.type === "file") {
                    if (g) {
                        f = a.files;
                        for (var c = 0; c < f.length; c++) d("file", a.name, f.item(c))
                    }
                    return
                }
                d(a.type, a.name, b("Input").getValue(a))
            }), c && c.name && c.type === "submit" && b("DOMQuery").contains(a, c) && b("DOMQuery").isNodeOfType(c, ["input", "button"]) && d("submit", c.name, c.value)
        },
        createFormData: function(a, c) {
            __p && __p();
            if (!h) return null;
            var d = new FormData();
            if (a)
                if (b("isNode")(a)) j.forEachValue(a, c, function(b, a, c) {
                    d.append(a, c)
                });
                else {
                    c = i(a);
                    for (var e in c) c[e] == null ? d.append(e, "") : d.append(e, c[e])
                }
            return d
        },
        serialize: function(a, b) {
            var c = {};
            j.forEachValue(a, b, function(a, b, d) {
                if (a === "file") return;
                j._serializeHelper(c, b, d)
            });
            return j._serializeFix(c)
        },
        _serializeHelper: function(a, b, c) {
            __p && __p();
            var d = Object.prototype.hasOwnProperty,
                e = /([^\]]+)\[([^\]]*)\](.*)/.exec(b);
            if (e) {
                if (!a[e[1]] || !d.call(a, e[1])) {
                    a[e[1]] = d = {};
                    if (a[e[1]] !== d) return
                }
                d = 0;
                if (e[2] === "")
                    while (a[e[1]][d] !== void 0) d++;
                else d = e[2];
                e[3] === "" ? a[e[1]][d] = c : j._serializeHelper(a[e[1]], d.concat(e[3]), c)
            } else a[b] = c
        },
        _serializeFix: function(a) {
            __p && __p();
            for (var b in a) a[b] instanceof Object && (a[b] = j._serializeFix(a[b]));
            var c = Object.keys(a);
            if (c.length === 0 || c.some(isNaN)) return a;
            c.sort(function(a, b) {
                return a - b
            });
            var d = 0,
                e = c.every(function(a) {
                    return +a === d++
                });
            return e ? c.map(function(b) {
                return a[b]
            }) : a
        },
        post: function(a, c, d, e) {
            __p && __p();
            e === void 0 && (e = !0);
            a = new(b("URI"))(a);
            var f = document.createElement("form");
            f.action = a.toString();
            f.method = "POST";
            f.style.display = "none";
            var g = !b("isFacebookURI")(a);
            if (d) {
                if (g) {
                    f.rel = "noopener";
                    if (d === "_blank") {
                        d = btoa(b("Random").uint32());
                        var h = window.open("about:blank", d);
                        h === void 0 || (h.opener = null)
                    }
                }
                f.target = d
            }
            if (e && (!g && a.getSubdomain() !== "apps")) {
                h = b("DTSG").getToken();
                h && (c.fb_dtsg = h, b("SprinkleConfig").param_name && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(h)));
                b("LSD").token && (c.lsd = b("LSD").token, b("SprinkleConfig").param_name && !h && (c[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            j.createHiddenInputs(c, f);
            b("DOMQuery").getRootElement().appendChild(f);
            f.submit();
            return !1
        },
        createHiddenInputs: function(a, c, d, e) {
            __p && __p();
            e === void 0 && (e = !1);
            d = d || {};
            a = i(a);
            for (var f in a) {
                if (a[f] === null) continue;
                if (d[f] && e) d[f].value = a[f];
                else {
                    var g = b("DOM").create("input", {
                        type: "hidden",
                        name: f,
                        value: a[f]
                    });
                    d[f] = g;
                    c.appendChild(g)
                }
            }
            return d
        },
        getFirstElement: function(a, c) {
            __p && __p();
            c === void 0 && (c = ['input[type="text"]', "textarea", 'input[type="password"]', 'input[type="button"]', 'input[type="submit"]']);
            var d = [];
            for (var e = 0; e < c.length; e++) {
                d = b("DOMQuery").scry(a, c[e]);
                for (var f = 0; f < d.length; f++) {
                    var g = d[f];
                    try {
                        var h = b("getElementPosition")(g);
                        if (h.y > 0 && h.x > 0) return g
                    } catch (a) {}
                }
            }
            return null
        },
        focusFirst: function(a) {
            a = j.getFirstElement(a);
            if (a) {
                a.focus();
                return !0
            }
            return !1
        }
    };
    e.exports = j
}), null);
__d("trackReferrer", ["Cookie", "Parent"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = /^(?:(?:[^:\/?#]+):)?(?:\/\/(?:[^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/;

    function h(a) {
        return g.exec(a)[1] || ""
    }

    function a(a, c) {
        a = b("Parent").byAttribute(a, "data-referrer");
        if (a) {
            c = h(c);
            if (!c) return;
            c = c + "|" + a.getAttribute("data-referrer");
            b("Cookie").set("x-src", c)
        }
    }
    e.exports = a
}), null);
__d("FormSubmit", ["AsyncRequest", "AsyncResponse", "CSS", "DOMQuery", "Event", "Form", "Parent", "trackReferrer"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        buildRequest: function(a, c) {
            __p && __p();
            var d = (b("Form").getAttribute(a, "method") || "GET").toUpperCase();
            c = c && b("Parent").byTag(c, "button") || c;
            var e = c && b("Parent").byClass(c, "stat_elem") || a;
            if (b("CSS").hasClass(e, "async_saving")) return null;
            if (c && (c.form !== a || c.nodeName != "INPUT" && c.nodeName != "BUTTON" || c.type != "submit")) {
                var f = b("DOMQuery").scry(a, ".enter_submit_target")[0];
                f && (c = f)
            }
            f = b("Form").serialize(a, c);
            b("Form").setDisabled(a, !0);
            c = b("Form").getAttribute(a, "ajaxify") || b("Form").getAttribute(a, "action");
            var g = !!b("Form").getAttribute(a, "data-cors");
            b("trackReferrer")(a, c);
            return new(b("AsyncRequest"))().setAllowCrossOrigin(g).setURI(c).setData(f).setNectarModuleDataSafe(a).setReadOnly(d == "GET").setMethod(d).setRelativeTo(a).setStatusElement(e).setInitialHandler(b("Form").setDisabled.bind(null, a, !1)).setHandler(function(c) {
                b("Event").fire(a, "success", {
                    response: c
                })
            }).setErrorHandler(function(c) {
                b("Event").fire(a, "error", {
                    response: c
                }) !== !1 && b("AsyncResponse").defaultErrorHandler(c)
            }).setFinallyHandler(b("Form").setDisabled.bind(null, a, !1))
        },
        send: function(a, b) {
            a = g.buildRequest(a, b);
            a && a.send();
            return a
        }
    };
    e.exports = g
}), null);
__d("PlatformWidgetEndpoint", ["PlatformBaseVersioning"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c) {
        return b("PlatformBaseVersioning").versionAwarePath("/dialog/" + a + (c ? "/" + c : ""))
    }

    function c(a, c) {
        return b("PlatformBaseVersioning").versionAwarePath("/plugins/" + a + (c ? "/" + c : ""))
    }

    function d(a) {
        return /^\/plugins\//.test(b("PlatformBaseVersioning").getUnversionedPath(a))
    }

    function f(a) {
        return /^\/dialog\//.test(b("PlatformBaseVersioning").getUnversionedPath(a))
    }
    a = {
        dialog: a,
        plugins: c,
        isPluginEndpoint: d,
        isDialogEndpoint: f
    };
    e.exports = a
}), null);
__d("ArbiterFrame", [], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        inform: function(a, b, c) {
            var d = parent.frames,
                e = d.length,
                f;
            b.crossFrame = !0;
            for (var g = 0; g < e; g++) {
                f = d[g];
                try {
                    if (!f || f == window) continue;
                    f.require ? f.require("Arbiter").inform(a, b, c) : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c)
                } catch (a) {}
            }
        }
    };
    e.exports = a
}), null);
__d("Plugin", ["Arbiter", "ArbiterFrame"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        CONNECT: "platform/plugins/connect",
        DISCONNECT: "platform/plugins/disconnect",
        ERROR: "platform/plugins/error",
        RELOAD: "platform/plugins/reload",
        DIALOG: "platform/plugins/dialog",
        connect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.CONNECT, a);
            b("ArbiterFrame").inform(g.CONNECT, a)
        },
        disconnect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.DISCONNECT, a);
            b("ArbiterFrame").inform(g.DISCONNECT, a)
        },
        error: function(a, c) {
            b("Arbiter").inform(g.ERROR, {
                action: a,
                content: c
            })
        },
        reload: function(a) {
            b("Arbiter").inform(g.RELOAD, {
                reloadUrl: a || ""
            }), b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: a || ""
            })
        },
        reloadOtherPlugins: function(a, c) {
            b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: "",
                reload: a || "",
                identifier: c || ""
            })
        }
    };
    e.exports = g
}), null);
__d("PluginConnectButtonType", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        BLUE_BASE: 1,
        WHITE_BASE: 2
    })
}), null);
__d("csx", [], (function(a, b, c, d, e, f) {
    function a(a) {
        throw new Error("csx: Unexpected class selector transformation.")
    }
    e.exports = a
}), null);
__d("Button", ["csx", "cx", "CSS", "DataStore", "DOM", "Event", "Parent", "emptyFunction", "isNode"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    var i = "uiButtonDisabled",
        j = "uiButtonDepressed",
        k = "_42fr",
        l = "_42fs",
        m = "button:blocker",
        n = "href",
        o = "ajaxify";

    function p(a, c) {
        var d = b("DataStore").get(a, m);
        c ? d && (d.remove(), b("DataStore").remove(a, m)) : d || b("DataStore").set(a, m, b("Event").listen(a, "click", b("emptyFunction").thatReturnsFalse, b("Event").Priority.URGENT))
    }

    function q(a) {
        a = b("Parent").byClass(a, "uiButton") || b("Parent").bySelector(a, "._42ft");
        if (!a) throw new Error("invalid use case");
        return a
    }

    function r(a) {
        return b("DOM").isNodeOfType(a, "a")
    }

    function s(a) {
        return b("DOM").isNodeOfType(a, "button")
    }

    function t(a) {
        return b("CSS").matchesSelector(a, "._42ft")
    }
    var u = {
        getInputElement: function(a) {
            a = q(a);
            if (r(a)) throw new Error("invalid use case");
            return s(a) ? a : b("DOM").find(a, "input")
        },
        isEnabled: function(a) {
            return !(b("CSS").hasClass(q(a), i) || b("CSS").hasClass(q(a), k))
        },
        setEnabled: function(a, c) {
            __p && __p();
            a = q(a);
            var d = t(a) ? k : i;
            b("CSS").conditionClass(a, d, !c);
            if (r(a)) {
                d = a.getAttribute("href");
                var e = a.getAttribute("ajaxify"),
                    f = b("DataStore").get(a, n, "#"),
                    g = b("DataStore").get(a, o);
                c ? (d || a.setAttribute("href", f), !e && g && a.setAttribute("ajaxify", g), a.removeAttribute("tabIndex")) : (d && d !== f && b("DataStore").set(a, n, d), e && e !== g && b("DataStore").set(a, o, e), a.removeAttribute("href"), a.removeAttribute("ajaxify"), a.setAttribute("tabIndex", "-1"));
                p(a, c)
            } else {
                f = u.getInputElement(a);
                f.disabled = !c;
                p(f, c)
            }
        },
        setDepressed: function(a, c) {
            a = q(a);
            var d = t(a) ? l : j;
            b("CSS").conditionClass(a, d, c)
        },
        isDepressed: function(a) {
            a = q(a);
            var c = t(a) ? l : j;
            return b("CSS").hasClass(a, c)
        },
        setLabel: function(a, c) {
            __p && __p();
            a = q(a);
            if (t(a)) {
                var d = [];
                c && d.push(c);
                var e = b("DOM").scry(a, ".img");
                for (var f = 0; f < e.length; f++) {
                    var g = e[f],
                        h = g.parentNode;
                    h.classList && (h.classList.contains("_4o_3") || h.classList.contains("_-xe")) ? a.firstChild === h ? d.unshift(h) : d.push(h) : a.firstChild == g ? d.unshift(g) : d.push(g)
                }
                b("DOM").setContent(a, d)
            } else if (r(a)) {
                h = b("DOM").find(a, "span.uiButtonText");
                b("DOM").setContent(h, c)
            } else u.getInputElement(a).value = c;
            g = t(a) ? "_42fv" : "uiButtonNoText";
            b("CSS").conditionClass(a, g, !c)
        },
        getIcon: function(a) {
            a = q(a);
            return b("DOM").scry(a, ".img")[0]
        },
        setIcon: function(a, c) {
            if (c && !b("isNode")(c)) return;
            var d = u.getIcon(a);
            if (!c) {
                d && b("DOM").remove(d);
                return
            }
            b("CSS").addClass(c, "customimg");
            d != c && (d ? b("DOM").replace(d, c) : b("DOM").prependContent(q(a), c))
        }
    };
    e.exports = u
}), null);
__d("debounceCore", ["TimeSlice"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c, d, e, f) {
        __p && __p();
        d === void 0 && (d = null);
        e === void 0 && (e = setTimeout);
        f === void 0 && (f = clearTimeout);
        var g;

        function h() {
            for (var f = arguments.length, i = new Array(f), j = 0; j < f; j++) i[j] = arguments[j];
            h.reset();
            var k = b("TimeSlice").guard(function() {
                g = null, a.apply(d, i)
            }, "debounceCore");
            k.__SMmeta = a.__SMmeta;
            g = e(k, c)
        }
        h.reset = function() {
            f(g), g = null
        };
        h.isPending = function() {
            return g != null
        };
        return h
    }
    e.exports = a
}), null);
__d("debounce", ["clearTimeout", "debounceCore", "setTimeout"], (function(a, b, c, d, e, f) {
    function a(a, c, d, e) {
        c === void 0 && (c = 100);
        var f = function(a, c, d) {
            return b("setTimeout")(a, c, d, !e)
        };
        return b("debounceCore")(a, c, d, f, b("clearTimeout"))
    }
    e.exports = a
}), null);
__d("TextInputControl", ["DOMControl", "Event", "Input", "debounce"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            c = a.call(this, c) || this;
            var d = c.getRoot(),
                e = b("debounce")(c.update.bind(babelHelpers.assertThisInitialized(c)), 0);
            b("Event").listen(d, {
                input: e,
                keydown: e,
                paste: e
            });
            return c
        }
        var d = c.prototype;
        d.setMaxLength = function(a) {
            b("Input").setMaxLength(this.getRoot(), a);
            return this
        };
        d.getValue = function() {
            return b("Input").getValue(this.getRoot())
        };
        d.isEmpty = function() {
            return b("Input").isEmpty(this.getRoot())
        };
        d.setValue = function(a) {
            b("Input").setValue(this.getRoot(), a);
            this.update();
            return this
        };
        d.clear = function() {
            return this.setValue("")
        };
        d.setPlaceholderText = function(a) {
            b("Input").setPlaceholder(this.getRoot(), a);
            return this
        };
        return c
    }(b("DOMControl"));
    e.exports = a
}), null);
__d("transferTextStyles", ["Style"], (function(a, b, c, d, e, f) {
    var g = {
        fontFamily: null,
        fontSize: null,
        fontStyle: null,
        fontWeight: null,
        lineHeight: null,
        wordWrap: null
    };

    function a(a, c) {
        for (var d in g) Object.prototype.hasOwnProperty.call(g, d) && (g[d] = b("Style").get(a, d));
        b("Style").apply(c, g)
    }
    e.exports = a
}), null);
__d("TextMetrics", ["DOM", "Style", "UserAgent", "transferTextStyles"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        var c = a.clientWidth,
            d = b("Style").get(a, "-moz-box-sizing") == "border-box";
        if (d && b("UserAgent").isBrowser("Firefox < 29")) return c;
        d = b("Style").getFloat(a, "paddingLeft") + b("Style").getFloat(a, "paddingRight");
        return c - d
    }
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c) {
            this.$1 = a;
            this.$2 = !!c;
            c = "textarea";
            var d = "textMetrics";
            this.$2 && (c = "div", d += " textMetricsInline");
            this.$3 = b("DOM").create(c, {
                className: d
            });
            b("transferTextStyles")(a, this.$3);
            document.body.appendChild(this.$3)
        }
        var c = a.prototype;
        c.measure = function(a) {
            var c = this.$1,
                d = this.$3;
            a = (a || c.value) + "...";
            if (!this.$2) {
                var e = g(c);
                b("Style").set(d, "width", Math.max(e, 0) + "px")
            }
            c.nodeName === "TEXTAREA" ? d.value = a : b("DOM").setContent(d, a);
            return {
                width: d.scrollWidth,
                height: d.scrollHeight
            }
        };
        c.destroy = function() {
            b("DOM").remove(this.$3)
        };
        return a
    }();
    e.exports = a
}), null);
__d("classWithMixins", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = function() {
            a.apply(this, arguments)
        };
        c.prototype = Object.assign(Object.create(a.prototype), b.prototype);
        return c
    }
    e.exports = a
}), null);
__d("TextAreaControl", ["Arbiter", "ArbiterMixin", "CSS", "DOMControl", "Event", "Style", "TextInputControl", "TextMetrics", "classWithMixins", "mixin"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, c) {
        return b("Style").getFloat(a, c) || 0
    }
    a = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c) {
            var d;
            d = a.call(this, c) || this;
            d.autogrow = b("CSS").hasClass(c, "uiTextareaAutogrow");
            d.autogrowWithPlaceholder = b("CSS").hasClass(c, "uiTextareaAutogrowWithPlaceholder");
            d.width = null;
            b("Event").listen(c, "focus", d._handleFocus.bind(babelHelpers.assertThisInitialized(d)));
            return d
        }
        var d = c.prototype;
        d.setAutogrow = function(a) {
            this.autogrow = a;
            return this
        };
        d.onupdate = function() {
            a.prototype.onupdate.call(this), this.updateHeight()
        };
        d.updateHeight = function() {
            __p && __p();
            if (this.autogrow) {
                var a = this.getRoot();
                this.metrics || (this.metrics = new(b("TextMetrics"))(a));
                typeof this.initialHeight === "undefined" && (this.isBorderBox = b("Style").get(a, "box-sizing") === "border-box" || b("Style").get(a, "-moz-box-sizing") === "border-box" || b("Style").get(a, "-webkit-box-sizing") === "border-box", this.borderBoxOffset = g(a, "padding-top") + g(a, "padding-bottom") + g(a, "border-top-width") + g(a, "border-bottom-width"), this.initialHeight = a.offsetHeight - this.borderBoxOffset);
                var c;
                (!a.value || a.value.length === 0) && this.autogrowWithPlaceholder ? c = this.metrics.measure(a.placeholder) : c = this.metrics.measure();
                c = Math.max(this.initialHeight, c.height);
                this.isBorderBox && (c += this.borderBoxOffset);
                this.maxHeight && c > this.maxHeight && (c = this.maxHeight, b("Arbiter").inform("maxHeightExceeded", {
                    textArea: a
                }));
                c !== this.height && (this.height = c, b("Style").set(a, "height", c + "px"), b("Arbiter").inform("reflow"), this.inform("resize"))
            } else this.metrics && (this.metrics.destroy(), this.metrics = null)
        };
        d.resetHeight = function() {
            this.height = -1, this.update()
        };
        d.setMaxHeight = function(a) {
            this.maxHeight = a
        };
        d.setAutogrowWithPlaceholder = function(a) {
            this.autogrowWithPlacedholder = a
        };
        d._handleFocus = function() {
            this.width = null
        };
        c.getInstance = function(a) {
            return b("DOMControl").getInstance(a) || new c(a)
        };
        return c
    }(b("classWithMixins")(b("TextInputControl"), b("mixin")(b("ArbiterMixin"))));
    e.exports = a
}), null);
__d("PluginFlyout", ["csx", "Arbiter", "Button", "CSS", "DOM", "DOMEvent", "DOMEventListener", "Focus", "FormSubmit", "Plugin", "TextAreaControl"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = "new",
        i = b("Arbiter").subscribe,
        j = b("Arbiter").inform,
        k = function(a, c) {
            return b("DOMEventListener").add(a, "click", c)
        };

    function l(a, c, d) {
        var e = this,
            f = i(b("Plugin").CONNECT, function(g, h) {
                b("Arbiter").unsubscribe(f), e.init(a, c, d), e.connect(g, h)
            }, h);
        i(b("Plugin").DIALOG, function() {
            e.init(a, c, d), e.toggle()
        }, h)
    }
    Object.assign(l.prototype, {
        init: function(a, c, d) {
            __p && __p();
            if (this.initialized) return;
            this.initialized = !0;
            b("DOM").appendContent(a, JSON.parse(d));
            var e = b("DOM").find(a, "form"),
                f = b("DOM").find(e, "._56zw");
            d = b("DOM").find(e, "._56zx");
            var g = b("DOM").find(e, "._42x4"),
                j = b("TextAreaControl").getInstance(g);
            b("DOMEventListener").add(g, "keyup", function(a) {
                b("Button").setEnabled(f, !!j.getValue())
            });
            b("DOMEventListener").add(window, "keydown", function(a) {
                a.keyCode === 27 && n()
            });
            b("DOMEventListener").add(e, "submit", function(a) {
                new(b("DOMEvent"))(a).kill(), b("FormSubmit").send(e)
            });
            var m = c === "tiny" ? b("DOM").find(document.body, ".pluginPostFlyoutPrompt") : null;
            this.flyout = a;
            this.form = e;
            this.post_button = f;
            this.prompt = m;
            var n = this.hide.bind(this),
                o = this.show.bind(this);
            k(d, function(a) {
                new(b("DOMEvent"))(a).kill(), n()
            });
            m && k(m, function(a) {
                new(b("DOMEvent"))(a).kill(), o()
            });
            i(b("Plugin").CONNECT, this.connect.bind(this), h);
            i(b("Plugin").DISCONNECT, function() {
                n()
            }, h);
            i(l.SUCCESS, function() {
                n(), m && b("CSS").hide(m)
            }, h);
            i(b("Plugin").ERROR, function(a, c) {
                if (c.action !== "comment") return;
                b("DOM").setContent(b("DOM").find(e, "._56zy"), c.content);
                b("CSS").hide(f)
            }, h)
        },
        connect: function(a, c) {
            if (c.crossFrame) return;
            this.prompt && b("CSS").show(this.prompt);
            c.story_fbid || this.show()
        },
        show: function() {
            this.shown = !0;
            b("CSS").show(this.flyout);
            b("CSS").show(this.post_button);
            var a = b("DOM").scry(this.form, "._5jjo");
            a ? b("Focus").set(a[0]) : b("Focus").set(this.form.comment);
            j(l.SHOW)
        },
        hide: function() {
            this.shown = !1, b("CSS").hide(this.flyout), j(l.HIDE)
        },
        toggle: function() {
            this.shown ? this.hide() : this.show()
        }
    });
    Object.assign(l, {
        SUCCESS: "platform/plugins/flyout/success",
        SHOW: "platform/plugins/flyout/show",
        HIDE: "platform/plugins/flyout/hide",
        success: function() {
            j(l.SUCCESS)
        }
    });
    e.exports = l
}), null);
__d("GeneratedLoggerUtils", ["invariant", "Banzai"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    a = b("Banzai").post;
    window.location.search.indexOf("showlog") > -1 && (a = function(a, c, d) {
        b("Banzai").post(a, c, d)
    });
    c = {
        log: a,
        serializeVector: function(a) {
            __p && __p();
            if (!a) return a;
            if (Array.isArray(a)) return a;
            if (a.toArray) {
                var b = a;
                return b.toArray()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return Array.from(a);
            g(0, 3874, a)
        },
        serializeMap: function(a) {
            __p && __p();
            if (!a) return a;
            if (a.toJS) {
                var b = a;
                return b.toJS()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
                b = a;
                var c = {};
                for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= b.length) break;
                        f = b[e++]
                    } else {
                        e = b.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    c[f[0]] = f[1]
                }
                return c
            }
            if (Object.prototype.toString.call(a) === "[object Object]") return a;
            g(0, 3875, a)
        },
        checkExtraDataFieldNames: function(a, b) {
            Object.keys(a).forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a)
            })
        },
        warnForInvalidFieldNames: function(a, b, c, d) {},
        throwIfNull: function(a, b) {
            a || g(0, 3877, b);
            return a
        }
    };
    e.exports = c
}), null);
__d("PluginLoggedOutUserTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function() {
        __p && __p();

        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function() {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").BASIC)
        };
        c.logVital = function() {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").VITAL)
        };
        c.logImmediately = function() {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, {
                signal: !0
            })
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setHref = function(a) {
            this.$1.href = a;
            return this
        };
        c.setIsSDK = function(a) {
            this.$1.is_sdk = a;
            return this
        };
        c.setPluginAppID = function(a) {
            this.$1.plugin_app_id = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURL = function(a) {
            this.$1.referer_url = a;
            return this
        };
        c.setTime = function(a) {
            this.$1.time = a;
            return this
        };
        c.setWeight = function(a) {
            this.$1.weight = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        href: !0,
        is_sdk: !0,
        plugin_app_id: !0,
        plugin_name: !0,
        referer_url: !0,
        time: !0,
        weight: !0
    };
    e.exports = a
}), null);
__d("PluginOptin", ["DOMEvent", "DOMEventListener", "PlatformWidgetEndpoint", "PluginLoggedOutUserTypedLogger", "PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a, c) {
        Object.assign(this, {
            return_params: b("URI").getRequestURI().getQueryData(),
            login_params: {},
            optin_params: {},
            plugin: a,
            api_key: c
        }), this.addReturnParams({
            ret: "optin"
        }), delete this.return_params.hash
    }
    Object.assign(g.prototype, {
        addReturnParams: function(a) {
            Object.assign(this.return_params, a);
            return this
        },
        addLoginParams: function(a) {
            Object.assign(this.login_params, a);
            return this
        },
        addOptinParams: function(a) {
            Object.assign(this.optin_params, a);
            return this
        },
        start: function() {
            var a = this.api_key || 127760087237610;
            b("URI").getRequestURI().getQueryData().kid_directed_site && (this.login_params.kid_directed_site = !0);
            this.login_params.referrer = document.referrer;
            var c = new(b("URI"))(b("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({
                app_id: a,
                secure: b("URI").getRequestURI().isSecure(),
                social_plugin: this.plugin,
                return_params: JSON.stringify(this.return_params),
                login_params: JSON.stringify(this.login_params)
            });
            b("UserAgent_DEPRECATED").mobile() ? c.setSubdomain("m") : c.addQueryData({
                display: "popup"
            });
            this.return_params.act !== null && this.return_params.act === "send" && new(b("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();
            this.popup = b("PopupWindow").open(c.toString(), 420, 450);
            b("PluginMessage").listen();
            return this
        }
    });
    g.starter = function(a, b, c, d) {
        a = new g(a);
        a.addReturnParams(b || {});
        a.addLoginParams(c || {});
        a.addOptinParams(d || {});
        return a.start.bind(a)
    };
    g.listen = function(a, c, d, e, f) {
        b("DOMEventListener").add(a, "click", function(a) {
            new(b("DOMEvent"))(a).kill(), g.starter(c, d, e, f)()
        })
    };
    e.exports = g
}), null);
__d("PluginConnectButton", ["Arbiter", "CSS", "DOM", "DOMEvent", "DOMEventListener", "Focus", "FormSubmit", "PlatformWidgetEndpoint", "Plugin", "PluginConnectButtonType", "PluginFlyout", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "new",
        h = b("Arbiter").subscribe,
        i = function(a, c) {
            return b("DOMEventListener").add(a, "click", c)
        };

    function a(a) {
        __p && __p();
        this.config = a;
        this.busy = !1;
        var c = b("DOM").find(a.form, ".pluginConnectButton");
        this.buttons = c;
        this.node_connected = b("DOM").find(c, ".pluginConnectButtonConnected");
        this.node_disconnected = b("DOM").find(c, ".pluginConnectButtonDisconnected");
        var d = function(a) {
            new(b("DOMEvent"))(a).kill(), this.busy || (this.submit(), this.busy = this.canpersonalize)
        }.bind(this);
        i(this.node_disconnected, d);
        a.buttontype === b("PluginConnectButtonType").BLUE_BASE ? i(b("DOM").find(c, ".pluginButtonX button"), d) : a.buttontype === b("PluginConnectButtonType").WHITE_BASE && i(this.node_connected, d);
        i(this.node_connected, function(a) {
            return b("Arbiter").inform(b("Plugin").DIALOG, a)
        });
        c = this.update.bind(this);
        h(b("Plugin").CONNECT, c, g);
        h(b("Plugin").DISCONNECT, c, g);
        h(b("Plugin").ERROR, this.error.bind(this), g);
        h(b("PluginFlyout").HIDE, this.hideFlyout.bind(this));
        a.autosubmit && setTimeout(this.submit.bind(this), 0)
    }
    Object.assign(a.prototype, {
        update: function(a, c) {
            __p && __p();
            this.busy = !1;
            var d = this.config;
            if (c.identifier !== d.identifier) return;
            c = a === b("Plugin").CONNECT;
            a = b("PlatformWidgetEndpoint").plugins(d.plugin);
            a += "/" + (c ? "disconnect" : "connect");
            b("CSS")[c ? "show" : "hide"](this.node_connected);
            b("CSS")[c ? "hide" : "show"](this.node_disconnected);
            try {
                if (document.activeElement.nodeName.toLowerCase() === "button") {
                    var e = c ? this.node_connected : this.node_disconnected;
                    e = b("DOM").find(e, "button");
                    e.disabled = !1;
                    b("Focus").set(e)
                }
            } catch (a) {}
            d.connected = c;
            d.form.setAttribute("action", a);
            d.form.setAttribute("ajaxify", a)
        },
        error: function(a, c) {
            this.busy = !1;
            if (c.action in {
                    connect: 1,
                    disconnect: 1
                }) {
                b("DOM").setContent(this.buttons, c.content);
                a = b("DOM").scry(this.buttons, ".confirmButton");
                a.length === 1 && b("Focus").set(a[0])
            }
        },
        submit: function() {
            if (!this.config.canpersonalize) return this.login();
            b("FormSubmit").send(this.config.form);
            this.fireStateToggle()
        },
        fireStateToggle: function() {
            var a = this.config;
            a.connected ? b("Plugin").disconnect(a.identifier) : b("Plugin").connect(a.identifier)
        },
        login: function() {
            var a = this.config.plugin;
            new(b("PluginOptin"))(a, b("URI").getRequestURI().getQueryData().api_key).addReturnParams({
                act: "connect"
            }).addLoginParams({
                social_plugin_action: this.config.pluginaction,
                kid_directed_site: this.config.kidDirectedSite
            }).start()
        },
        hideFlyout: function() {
            b("Focus").set(this.connected ? this.node_disconnected : this.node_connected)
        }
    });
    e.exports = a
}), null);
__d("Locale", ["ExecutionEnvironment", "SiteData"], (function(a, b, c, d, e, f) {
    function a() {
        if (!b("ExecutionEnvironment").canUseDOM) return !1;
        else return b("SiteData").is_rtl
    }
    e.exports = {
        isRTL: a
    }
}), null);
__d("Log", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        DEBUG: 3,
        INFO: 2,
        WARNING: 1,
        ERROR: 0
    };
    b = function(a, b, c) {
        for (var d = arguments.length, e = new Array(d > 3 ? d - 3 : 0), f = 3; f < d; f++) e[f - 3] = arguments[f];
        var h = 0,
            i = c.replace(/%s/g, function() {
                return String(e[h++])
            }),
            j = window.console;
        j && g.level >= b && j[a in j ? a : "log"](i)
    };
    var g = {
        level: -1,
        Level: a,
        debug: b.bind(null, "debug", a.DEBUG),
        info: b.bind(null, "info", a.INFO),
        warn: b.bind(null, "warn", a.WARNING),
        error: b.bind(null, "error", a.ERROR),
        log: b
    };
    e.exports = g
}), null);
__d("Queue", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {};
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
        }
        var b = a.prototype;
        b._dispatch = function(a) {
            __p && __p();
            var b = this;
            a === void 0;
            if (this._stopped || this._queue.length === 0) return;
            a = this._processor;
            if (a == null) {
                this._stopped = !0;
                throw new Error("No processor available")
            }
            var c = this._interval;
            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                return b._dispatch()
            }, c);
            else
                while (this._queue.length) a.call(this, this._queue.shift())
        };
        b.enqueue = function(a) {
            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
            return this
        };
        b.start = function(a) {
            a && (this._processor = a);
            this._stopped = !1;
            this._dispatch();
            return this
        };
        b.isStarted = function() {
            return !this._stopped
        };
        b.dispatch = function() {
            this._dispatch(!0)
        };
        b.stop = function(a) {
            this._stopped = !0;
            a && this._timeout != null && clearTimeout(this._timeout);
            return this
        };
        b.merge = function(a, b) {
            if (b) {
                (b = this._queue).unshift.apply(b, a._queue)
            } else {
                (b = this._queue).push.apply(b, a._queue)
            }
            a._queue = [];
            this._dispatch();
            return this
        };
        b.getLength = function() {
            return this._queue.length
        };
        a.get = function(b, c) {
            var d;
            b in g ? d = g[b] : d = g[b] = new a(c);
            return d
        };
        a.exists = function(a) {
            return a in g
        };
        a.remove = function(a) {
            return delete g[a]
        };
        return a
    }();
    e.exports = a
}), null);
__d("resolveWindow", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        __p && __p();
        var b = window;
        a = a.split(".");
        try {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                if (e) b = b.frames[e[1]];
                else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                else return null
            }
        } catch (a) {
            return null
        }
        return b
    }
    e.exports = a
}), null);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "fb_xdm_frame_" + location.protocol.replace(":", ""),
        h = {
            _callbacks: [],
            _opts: {
                autoResize: !1,
                allowShrink: !0,
                channelUrl: null,
                hideOverflow: !1,
                resizeTimeout: 1e3,
                resizeWidth: !1,
                expectResizeAck: !1,
                resizeAckTimeout: 6e3
            },
            _lastResizeAckId: 0,
            _resizeCount: 0,
            _resizeTimestamp: 0,
            _shrinker: null,
            _forcedMinWidth: 100,
            init: function(a) {
                this._opts = babelHelpers["extends"]({}, this._opts, a), this._opts.autoResize && this._startResizeMonitor(), b("Arbiter").subscribe("Connect.Unsafe.resize.ack", function(a, b) {
                    b.id || (b.id = this._resizeCount), b.id > this._lastResizeAckId && (this._lastResizeAckId = b.id)
                }.bind(this))
            },
            getQueue: function() {
                this._queue || (this._queue = new(b("Queue"))());
                return this._queue
            },
            setChannelUrl: function(a) {
                var b = this;
                this.getQueue().start(function(c) {
                    return b.send(c, a)
                })
            },
            send: function(a, c) {
                __p && __p();
                a === void 0 && (a = null);
                c === void 0 && (c = null);
                c = c || this._opts.channelUrl;
                if (!c) {
                    this.getQueue().enqueue(a);
                    return
                }
                var d = {};
                c = new(b("URI"))(c);
                Object.assign(d, a, b("PHPQuerySerializer").deserialize(c.getFragment()));
                var e = new(b("URI"))(d.origin).getOrigin();
                if (typeof d.relation !== "string") {
                    b("Log").error("No relation specified to resolve proxy window.");
                    return
                }
                var f = b("resolveWindow")(d.relation.replace(/^parent\./, "")),
                    h = 50;
                a = function a() {
                    try {
                        f.frames[g].proxyMessage(b("PHPQuerySerializer").serialize(d), e)
                    } catch (c) {
                        --h ? window.setTimeout(a, 100) : b("Log").warn('No such frame "' + g + '" to proxyMessage to')
                    }
                };
                a()
            },
            _computeSize: function() {
                __p && __p();
                var a = b("DOMDimensions").getDocumentDimensions(),
                    c = 0;
                if (this._opts.resizeWidth) {
                    var d = document.body;
                    if (d != null) {
                        if (d.clientWidth < d.scrollWidth) c = a.width;
                        else {
                            d = d.lastElementChild;
                            if (d != null && d instanceof HTMLElement) {
                                d = d;
                                d = d.offsetLeft + d.offsetWidth;
                                d > c && (c = d)
                            }
                        }
                        c = Math.max(c, h._forcedMinWidth)
                    } else c = h._forcedMinWidth
                }
                a.width = c;
                this._opts.allowShrink && (this._shrinker || (this._shrinker = b("DOM").create("div")), b("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
                return a
            },
            _startResizeMonitor: function() {
                __p && __p();
                var a, c;
                a = (a = document.documentElement) != null ? a : {};
                if (this._opts.hideOverflow) {
                    a.style.overflow = "hidden";
                    ((a = document.body) != null ? a : {}).style.overflow = "hidden"
                }
                a = function() {
                    __p && __p();
                    var a = this._computeSize(),
                        d = Date.now(),
                        e = this._lastResizeAckId < this._resizeCount && d - this._resizeTimestamp > this._opts.resizeAckTimeout;
                    if (!c || this._opts.expectResizeAck && e || this._opts.allowShrink && c.width != a.width || !this._opts.allowShrink && c.width < a.width || this._opts.allowShrink && c.height != a.height || !this._opts.allowShrink && c.height < a.height) {
                        c = a;
                        this._resizeCount++;
                        this._resizeTimestamp = d;
                        e = {
                            type: "resize",
                            height: a.height,
                            ackData: {
                                id: this._resizeCount
                            },
                            width: 0
                        };
                        a.width && a.width != 0 && (e.width = a.width);
                        try {
                            if (b("isFacebookURI")(new(b("URI"))(document.referrer)) && b("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && b("isFacebookURI")(new(b("URI"))(window.parent.location))) {
                                d = window.parent.document.getElementsByTagName("iframe");
                                for (var a = 0; a < d.length; a++) d[a].name == window.name && (this._opts.resizeWidth && (d[a].style.width = e.width + "px"), d[a].style.height = e.height + "px")
                            }
                            this.send(e)
                        } catch (a) {
                            this.send(e)
                        }
                    }
                }.bind(this);
                a();
                window.setInterval(a, this._opts.resizeTimeout)
            }
        };
    c = babelHelpers["extends"]({}, h);
    e.exports.UnverifiedXD = c;
    e.exports.XD = h;
    a.UnverifiedXD = c;
    a.XD = h
}), null);
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f) {
    a = b("XD").UnverifiedXD;
    e.exports = a
}), null);
__d("getOffsetParent", ["Style"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a.parentNode;
        if (!a || a === document.documentElement) return document.documentElement;
        return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a)
    }
    e.exports = g
}), null);
__d("PluginResize", ["Locale", "Log", "UnverifiedXD", "getOffsetParent", "getStyleProperty"], (function(a, b, c, d, e, f) {
    __p && __p();

    function g(a) {
        a = a || document.body;
        var c = 0,
            d = b("getOffsetParent")(a);
        b("Locale").isRTL() && d ? c = d.offsetWidth - a.offsetLeft - a.offsetWidth : b("Locale").isRTL() || (c = a.offsetLeft);
        return h(a) + c
    }

    function h(a) {
        return Math.ceil(parseFloat(b("getStyleProperty")(a, "width"))) || a.offsetWidth
    }

    function i(a) {
        a = a || document.body;
        return a.offsetHeight + a.offsetTop
    }

    function j(a, b, c) {
        this.calcWidth = a || g, this.calcHeight = b || i, this.width = void 0, this.height = void 0, this.event = c || "resize"
    }
    Object.assign(j.prototype, {
        resize: function() {
            var a = this.calcWidth(),
                c = this.calcHeight();
            (a !== this.width || c !== this.height) && (b("Log").debug("Resizing Plugin: (%s, %s, %s, %s)", a, c, this.event), this.width = a, this.height = c, b("UnverifiedXD").send({
                type: this.event,
                width: a,
                height: c
            }));
            return this
        },
        auto: function(a) {
            setInterval(this.resize.bind(this), a || 250);
            return this
        }
    });
    j.auto = function(a, b, c) {
        return new j(g.bind(null, a), i.bind(null, a), b).resize().auto(c)
    };
    j.autoHeight = function(a, b, c, d) {
        return new j(function() {
            return a
        }, i.bind(null, b), c).resize().auto(d)
    };
    j.getElementWidth = h;
    e.exports = j
}), null);
__d("PluginConnectButtonResize", ["DOMDimensions", "DOMQuery", "PluginResize", "Style", "getElementPosition"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c, d) {
        __p && __p();
        d && b("Style").set(a, "width", d + "px");
        b("PluginResize").auto(a, "resize.flow");

        function e() {
            var a = b("DOMQuery").scry(document.body, ".uiTypeaheadView")[0];
            if (!a) return {
                x: 0,
                y: 0
            };
            var c = b("getElementPosition")(a);
            a = b("DOMDimensions").getElementDimensions(a);
            return {
                x: c.x + a.width,
                y: c.y + a.height
            }
        }
        new(b("PluginResize"))(function() {
            return Math.max(b("PluginResize").getElementWidth(a), c && c.offsetWidth, e().x)
        }, function() {
            return Math.max(a.offsetHeight, c ? c.offsetHeight + c.offsetTop : 0, e().y)
        }, "resize.iframe", !0).resize().auto()
    }
    e.exports = a
}), null);
__d("PluginConnectButtonWrapIconButton", ["Arbiter", "DOM", "Event", "Focus", "FormSubmit", "PlatformWidgetEndpoint", "Plugin", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = {
        _connected: !1,
        _form: null,
        _href: null,
        _button: null,
        _plugin: null,
        _submitRequest: null,
        initializeButton: function(a, c, d, e, f, g, h, i, j, k, l) {
            __p && __p();
            var m = this;
            this._connected = d;
            this._form = a;
            this._href = g;
            this._button = c;
            this._plugin = h;
            this._submitRequest = null;
            this._connecttip = j;
            this._disconnecttip = k;
            this._shouldConfirm = l;
            e ? (b("Event").listen(a, "click", function(a) {
                a.preventDefault(), m.submit()
            }), f && setTimeout(function() {
                m.submit(), m._button.toggleButton()
            }, 0), b("Arbiter").subscribe(b("Plugin").CONNECT, this._updatePlugin.bind(this)), b("Arbiter").subscribe(b("Plugin").DISCONNECT, this._updatePlugin.bind(this)), b("Arbiter").subscribe(b("Plugin").ERROR, function(a, b) {
                return m._handleError(b)
            })) : b("Event").listen(this._form, "click", function(a) {
                a.preventDefault(), new(b("PluginOptin"))(h, b("URI").getRequestURI().getQueryData().api_key).addReturnParams({
                    act: "connect"
                }).addLoginParams({
                    social_plugin_action: i
                }).start()
            })
        },
        submit: function() {
            this._submitRequest !== null && (this._submitRequest.clearStatusIndicator(), this._submitRequest.abort()), this._shouldConfirm, this._submitRequest = b("FormSubmit").send(this._form), this._connected ? b("Plugin").disconnect(this._href) : b("Plugin").connect(this._href)
        },
        _updatePlugin: function(a, c) {
            if (c.identifier !== this._href) return;
            c = a === b("Plugin").CONNECT;
            c !== this._button.isActivated() && this._button.toggleButton();
            this._connected = c;
            this._toggleFormAction();
            this._button.setTitle(c ? this._disconnecttip : this._connecttip)
        },
        _toggleFormAction: function() {
            var a = b("PlatformWidgetEndpoint").plugins(this._plugin) + "/" + (this._connected ? "disconnect" : "connect");
            this._form.setAttribute("action", a);
            this._form.setAttribute("ajaxify", a)
        },
        _handleError: function(a) {
            b("DOM").setContent(this._form, a.content);
            a = b("DOM").scry(this._form, ".confirmButton");
            a.length === 1 && b("Focus").set(a[0])
        }
    };
    e.exports = a
}), null);
__d("PluginConnectText", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        init: function(a) {
            var b = a.connected.textContent.length - a.disconnected.textContent.length;
            a[b > 0 ? "disconnected" : "connected"].appendChild(document.createTextNode("\xa0".repeat(Math.abs(b))))
        }
    }
}), null);
__d("PluginConnection", ["Arbiter", "CSS", "Plugin"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = function() {};
    Object.assign(g.prototype, {
        init: function(a, c, d, e) {
            e = e || b("Plugin").CONNECT;
            this.identifier = a;
            this.element = c;
            this.css = d;
            b("Arbiter").subscribe([b("Plugin").CONNECT, b("Plugin").DISCONNECT], function(f, g) {
                a === g.href && b("CSS")[f === e ? "addClass" : "removeClass"](c, d);
                return !0
            });
            return this
        },
        connected: function() {
            return b("CSS").hasClass(this.element, this.css)
        },
        connect: function() {
            return b("Arbiter").inform(b("Plugin").CONNECT, {
                href: this.identifier
            }, "state")
        },
        disconnect: function() {
            return b("Arbiter").inform(b("Plugin").DISCONNECT, {
                href: this.identifier
            }, "state")
        },
        toggle: function() {
            return this.connected() ? this.disconnect() : this.connect()
        }
    });
    g.init = function(a) {
        for (var b, c = 0; c < a.length; c++) b = new g(), b.init.apply(b, a[c])
    };
    e.exports = g
}), null);
__d("AsyncFormRequestUtils", ["Arbiter"], (function(a, b, c, d, e, f) {
    a = {
        subscribe: function(a, c, d) {
            b("Arbiter").subscribe("AsyncRequest/" + c, function(b, c) {
                b = c.request.relativeTo;
                b && b === a && d(c)
            })
        }
    };
    e.exports = a
}), null);
__d("randomInt", ["invariant"], (function(a, b, c, d, e, f, g) {
    function a(a, b) {
        var c = arguments.length;
        c > 0 && c <= 2 || g(0, 1179, c);
        c === 1 && (b = a, a = 0);
        b = b;
        b > a || g(0, 1180, b, a);
        var d = this.random || Math.random;
        return Math.floor(a + d() * (b - a))
    }
    e.exports = a
}), null);
__d("ClientIDs", ["randomInt"], (function(a, b, c, d, e, f) {
    var g = {};
    a = {
        getNewClientID: function() {
            var a = Date.now();
            a = a + ":" + (b("randomInt")(0, 4294967295) + 1);
            g[a] = !0;
            return a
        },
        isExistingClientID: function(a) {
            return !!g[a]
        }
    };
    e.exports = a
}), null);
__d("FBFeedLocations", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        NEWSFEED: 1,
        GROUP: 2,
        GROUP_PERMALINK: 3,
        COMMUNITY: 4,
        PERMALINK: 5,
        SHARE_OVERLAY: 6,
        PERMALINK_STREAM: 7,
        GROUP_PINNED: 8,
        FRIEND_LIST: 9,
        TIMELINE: 10,
        HASHTAG_FEED: 11,
        TOPIC_FEED: 12,
        PAGE: 13,
        NOTIFICATION_FEED: 14,
        GROUP_REPORTED: 15,
        GROUP_PENDING: 16,
        PAGES_FEED_IN_PAGES_MANAGER: 17,
        TICKER_CLASSIC: 18,
        PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER: 19,
        SEARCH: 20,
        GROUP_SEARCH: 21,
        NO_ATTACHMENT: 22,
        EMBED: 23,
        EMBED_FEED: 24,
        ATTACHMENT_PREVIEW: 25,
        STORIES_TO_SHARE: 26,
        PROMPT_PERMALINK: 27,
        TREND_HOVERCARD: 28,
        OPEN_GRAPH_PREVIEW: 30,
        HOTPOST_IN_PAGES_FEED: 31,
        SCHEDULED_POSTS: 32,
        TIMELINE_NOTES: 33,
        PAGE_INSIGHTS: 34,
        COMMENT_ATTACHMENT: 35,
        PAGE_TIMELINE: 36,
        GOODWILL_THROWBACK_PERMALINK: 37,
        LIKE_CONFIRM: 39,
        GOODWILL_THROWBACK_PROMOTION: 40,
        BROWSE_CONSOLE: 42,
        GROUP_FOR_SALE_COMPACT: 43,
        ENTITY_FEED: 44,
        GROUP_FOR_SALE_DISCUSSION: 45,
        PAGES_CONTENT_TAB_PREVIEW: 46,
        GOODWILL_THROWBACK_SHARE: 47,
        TIMELINE_VIDEO_SHARES: 48,
        EVENT: 49,
        PAGE_PLUGIN: 50,
        SRT: 51,
        PAGES_CONTENT_TAB_INSIGHTS: 52,
        ADS_PE_CONTENT_TAB_INSIGHTS: 53,
        PAGE_ACTIVITY_FEED: 54,
        VIDEO_CHANNEL: 55,
        POST_TO_PAGE: 56,
        GROUPS_GSYM_HOVERCARD: 57,
        GROUP_POST_TOPIC_FEED: 58,
        FEED_SURVEY: 59,
        PAGES_MODERATION: 60,
        SAVED_DASHBOARD: 61,
        PULSE_SEARCH: 62,
        GROUP_NUX: 63,
        GROUP_NUX_POST_VIEW: 64,
        EVENT_PERMALINK: 65,
        FUNDRAISER_PAGE: 66,
        EXPLORE_FEED: 67,
        CRT: 68,
        REVIEWS_FEED: 69,
        VIDEO_HOME_CHANNEL: 70,
        NEWS: 71,
        TIMELINE_FRIENDSHIP: 72,
        SAVED_REMINDERS: 73,
        PSYM: 74,
        ADMIN_FEED: 75,
        CAMPFIRE_NOTE: 76,
        PAGES_CONTEXT_CARD: 77,
        ACTIVITY_LOG: 78,
        WALL_POST_REPORT: 79,
        TIMELINE_BREAKUP: 80,
        TOWN_HALL: 81,
        PRODUCT_DETAILS: 82,
        SPORTS_PLAY_FEED: 83,
        GROUP_TOP_STORIES: 84,
        PAGE_TIMELINE_PERMALINK: 86,
        OFFERS_WALLET: 87,
        INSTREAM_VIDEO_IN_LIVE: 88,
        SPOTLIGHT: 89,
        SEARCH_DERP: 90,
        SOCIAL_BALLOT: 91,
        GROUP_SUGGESTIONS_WITH_STORY: 92,
        SOCIAL_BALLOT_PERMALINK: 93,
        LOCAL_SERP: 94,
        FUNDRAISER_SELF_DONATION_FEED: 95,
        CONVERSATION_NUB: 97,
        GROUP_TOP_SALE_STORIES: 98,
        GROUP_LEARNING_COURSE_UNIT_FEED: 99,
        SUPPORT_INBOX_READ_TIME_BLOCK: 100,
        PAGE_POSTS_CARD: 101,
        CRISIS_POST: 102,
        SUPPORT_INBOX_GROUP_RESPONSIBLE: 103,
        PAGE_POST_DIALOG: 104,
        CRISIS_DIALOG_POST: 105,
        PAGE_LIVE_VIDEOS_CARD: 106,
        PAGE_POSTS_CARD_COMPACT: 107,
        GROUP_MEMBER_BIO_FEED: 108,
        LIVE_COMMENT_ATTACHMENT: 109,
        GROUP_COMPOSER: 110,
        GROUP_INBOX_GROUP: 111,
        GROUP_INBOX_AGGREGATED: 112,
        ENDORSEMENTS: 113,
        EVENTS_DASHBOARD: 114,
        CURATED_COLLECTIONS_PAGE: 115,
        OYML: 116,
        COLLEGE_HOMEPAGE: 117,
        GROUP_LIVE_VIDEOS_CARD: 118,
        COLLEGE_HIGHLIGHTS: 119,
        VIDEO_PERMALINK: 120,
        JOB_CAROUSEL_NETEGO: 121,
        TOPIC_PAGE: 122,
        USER_SCHEDULED_POSTS: 123,
        GOODWILL_THROWBACK_ATTACHMENT_PREVIEW: 124,
        INSTREAM_VIDEO_IN_WASLIVE: 125,
        INSTREAM_VIDEO_IN_NONLIVE: 126,
        SIGNAL_APP: 127,
        ALBUM_FEED: 128,
        TOP_MARKETPLACE_STORIES: 129,
        CE_PII_STRIPPED_FEED: 130,
        TAHOE: 131,
        SAVE_COUNT_DIALOG: 132,
        GROUP_POST_TAG_FEED: 133,
        GOV_DIGEST: 134,
        GROUP_SCHEDULED: 135,
        GAMEROOM_FEED: 136,
        WORKPLACE_HUB_PREVIEW: 137,
        BRANDED_CONTENT_TRENDING_POSTS: 138,
        GROUP_ANNOUNCEMENTS: 139,
        GROUP_ANNOUNCEMENTS_FEED: 140,
        EXTERN_CE_PII_STRIPPED_FEED: 141,
        CRISIS_HUB_DESKTOP: 142,
        GROUP_DRAFT_POSTS: 143,
        TRENDING_ISSUES: 144,
        GAME_HUB_FEED: 145,
        LUMOS_POST_PREVIEW: 146,
        BRANDED_CONTENT_PAGE_SETTINGS: 147,
        BC_MULTI_POST_REVIEW: 149,
        ADS_TRANSPARENCY_SHOW_ADS: 150,
        POLITICAL_POST_FEED: 151,
        RECOMMENDATIONS_DASHBOARD: 152,
        SEEN_CONTENT: 153,
        AGGREGATED_FEED: 154,
        GROUP_HOISTED: 155,
        GROUP_MENTORSHIP_OVERVIEW_FEED: 156,
        GROUP_MENTORSHIP_CURRICULUM_FEED: 157,
        PAGE_SURFACE_RECOMMENDATIONS: 158,
        SURVEY_GALLERY: 159,
        GAMING_VIDEO_STREAMER_HUB: 160,
        GROUP_MEETUP_FEED: 161,
        GROUP_FLAGGED_FEED: 162,
        PAGE_RECOMMENDATIONS_TOOL: 163,
        MEDIA_MANAGER_HOME: 164,
        WOODHENGE_EXCLUSIVE_FEED: 165,
        PAGE_RECOMMENDATIONS_TAB_FEED: 166,
        GROUP_ANNOUNCEMENTS_WITH_UFI: 167,
        GROUP_ADMIN_TO_MEMBER_FEEDBACK: 168,
        MEDIA_MANAGER_POST_INSIGHTS: 169,
        MISINFORMATION_FACT_CHECKER_APP: 170,
        WORKPLACE_TEAM_FEED: 171,
        NEWS_STORYLINE_FEED: 172,
        PAGE_RECOMMENDATIONS_VERTEX_TAB_FEED: 173,
        MONTHLY_ACTIVITY_DIGEST: 174,
        ACTOR_EXPERIENCE_APPEALS: 175,
        WORKPLACE_NEWSFEED_PROMOTED_POST: 176,
        ASSET3D_PHOTO_FULLSCREEN: 177,
        MARKETPLACE_MEGAMALL: 178,
        CIVIC_PROPOSAL: 179,
        WORKPLACE_DISCOVERY_FEED: 180,
        CE_PII_AND_ATTACHMENTS_STRIPPED_FEED: 182,
        SOURCERY_PII_STRIPPED: 183,
        ACTOR_GATEWAY: 191,
        FBR: 192,
        NEWS_STORYLINE_NEWSFEED_QP: 193,
        JOBS_SINGLE_GROUP_BROWSER: 194,
        JOBS_MULTI_GROUP_BROWSER: 195,
        ACTION_EXPERIENCE: 196,
        GROUP_ALERTED_FEED: 197,
        CANDIDATE_PACKET_REVIEW: 198,
        BUSINESS_FEED: 199,
        NEWS_OCT_DRAFT_POST_PREVIEW: 200,
        CENTRA_INVESTIGATION_FEED: 201,
        TOP_GROUP_POSTS_TOOL: 202,
        VIDEO_HOME_FEED: 203,
        WORKPLACE_SHORTCUTS_FEED: 204,
        NEXT_TOOL: 205,
        CLIPS_LIBRARY: 206,
        GRAMMAR_SEARCH: 207,
        NEWSFEED_INJECTED_STORY_FROM_EMAIL_NOTIFICATION: 208
    })
}), null);
__d("Keys", [], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = Object.freeze({
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMI_COLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    })
}), null);
__d("PluginFeedLikeButton", ["Arbiter", "AsyncFormRequestUtils", "ClientIDs", "CSS", "DOM", "DOMEventListener", "FBFeedLocations", "FormSubmit", "Keys", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    __p && __p();
    window.resetConfirmStoryLike = function(a) {
        b("CSS").show(b("DOM").find(document, "#likeStory_" + a)), b("DOM").remove(b("DOM").find(document, "#confirmStory_" + a))
    };
    a = {
        addClientId: function(a) {
            a.setAttribute("value", b("ClientIDs").getNewClientID())
        },
        loggedOutLikeButton: function(a, c, d) {
            var e = "";
            if (c === b("FBFeedLocations").EMBED) e = "post";
            else if (c === b("FBFeedLocations").PAGE_PLUGIN) e = "page";
            else throw new Error("Invalid FBFeedLocation type.");
            c = new(b("PluginOptin"))(e).addReturnParams({
                act: "like_" + a
            });
            b("DOMEventListener").add(d, "click", c.start.bind(c))
        },
        init: function(a, c, d, e, f) {
            __p && __p();
            var g = function(a) {
                if (a.type === "keypress")
                    if (a.keyCode === b("Keys").RETURN || a.keyCode === b("Keys").SPACE) b("FormSubmit").send(f);
                    else return;
                b("FormSubmit").send(f)
            };
            b("DOMEventListener").add(c, "click", g);
            b("DOMEventListener").add(d, "click", g);
            b("DOMEventListener").add(c, "keypress", g);
            b("DOMEventListener").add(d, "keypress", g);
            g = e.getAttribute("value") === "1";
            b("AsyncFormRequestUtils").subscribe(f, "send", function(f) {
                f = e.getAttribute("value") === "1";
                b("CSS").conditionShow(d, f);
                b("CSS").conditionShow(c, !f);
                b("Arbiter").inform("embeddedUfiToggle", {
                    isLike: f,
                    storyToken: a
                });
                e.setAttribute("value", f ? "" : "1")
            });
            b("AsyncFormRequestUtils").subscribe(f, "response", function(f) {
                f = f.response.payload;
                if (f && !f.success) {
                    f = f.isLike;
                    b("CSS").conditionShow(c, f);
                    b("CSS").conditionShow(d, !f);
                    b("Arbiter").inform("revertLike", {
                        isLike: f,
                        storyToken: a
                    });
                    e.setAttribute("value", f ? "1" : "")
                }
            });
            var h = new(b("URI"))(window.location.search).getQueryData();
            g && h.act === "like_" + a && b("FormSubmit").send(f)
        }
    };
    e.exports = a
}), null);
__d("idx", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, d) {
        try {
            return d(a)
        } catch (a) {
            if (a instanceof TypeError)
                if (b(a)) return null;
                else if (c(a)) return void 0;
            throw a
        }
    }
    var g;

    function b(a) {
        a = a.message;
        g || (g = i("null"));
        return g.test(a)
    }
    var h;

    function c(a) {
        a = a.message;
        h || (h = i("undefined"));
        return h.test(a)
    }

    function i(a) {
        return new RegExp("^" + a + " | " + a + "$|^[^\\(]* " + a + " ")
    }
    e.exports = a
}), null);
__d("intlSummarizeNumber", ["FbtNumberType", "IntlCompactDecimalNumberFormatConfig", "IntlVariations", "intlNumUtils"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 3,
        h = 14,
        i = {
            ROUND: "ROUND",
            TRUNCATE: "TRUNCATE"
        },
        j = {
            SHORT: "SHORT",
            LONG: "LONG"
        };

    function a(a, c, d, e) {
        __p && __p();
        d === void 0 && (d = j.SHORT);
        e === void 0 && (e = i.ROUND);
        d = b("IntlCompactDecimalNumberFormatConfig")[d == j.SHORT ? "short_patterns" : "long_patterns"];
        var f = a === 0 ? 0 : Math.floor(Math.log10(Math.abs(a)));
        f > h && (f = h);
        var l = k(a, f, c, e, d),
            m = l[0],
            n = l[1];
        l = l[2];
        if (l) {
            f += 1;
            l = k(a, f, c, e, d);
            m = l[0];
            n = l[1];
            l[2]
        }
        e = b("FbtNumberType").getVariation(m) || b("IntlVariations").NUMBER_OTHER;
        l = f.toString();
        l = (d = d) != null ? (d = d[l]) != null ? d[e.toString()] : d : d;
        if (!l || f < g || l.positive_prefix_pattern === "" && l.positive_suffix_pattern === "") {
            e = c === void 0 ? 0 : c;
            return b("intlNumUtils").formatNumberWithThousandDelimiters(a, e)
        }
        return l && l.min_integer_digits === 0 && m === 1 ? l.positive_prefix_pattern + l.positive_suffix_pattern : (l && l.positive_prefix_pattern || "") + b("intlNumUtils").formatNumberWithThousandDelimiters(m, n) + (l && l.positive_suffix_pattern || "")
    }

    function k(a, c, d, e, f) {
        __p && __p();
        var g = c.toString();
        g = (f = f) != null ? (f = f[g]) != null ? f[b("IntlVariations").NUMBER_OTHER.toString()] : f : f;
        f = g && g.min_integer_digits || c + 1;
        var j = c - f + 1;
        j = Math.abs(a) / Math.pow(10, j);
        var k = d != null;
        d = k ? d : g && g.min_fraction_digits;
        d == null && (d = c > 2 ? 1 : 0);
        g = e == i.TRUNCATE ? b("intlNumUtils").truncateLongNumber(j.toString(), d) : j.toFixed(d);
        e = parseFloat(g) * (a < 0 ? -1 : 1);
        return [e, e % 1 === 0 && !k ? 0 : d, g.length > f + (d > 0 ? d + 1 : 0) + (j >= 0 ? 0 : 1) && c < h]
    }
    e.exports = a
}), null);
__d("PluginIconButton", ["fbt", "invariant", "CSS", "DOM", "Event", "intlSummarizeNumber"], (function(a, b, c, d, e, f, g, h) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, c, d, e) {
            var f = this;
            e === null || d !== null || h(0, 2812);
            this.$1 = a;
            this.$2 = d;
            this.$3 = e;
            c === !1 && (b("Event").listen(a, "click", function() {
                return f.toggleButton()
            }), b("Event").listen(a, "toggle", function() {
                return f.toggleButton()
            }))
        }
        var c = a.prototype;
        c.toggleButton = function() {
            var a = this;
            b("CSS").hasClass(this.$1, "active") === !1 ? (b("CSS").addClass(this.$1, "active"), this.$4(!0), b("CSS").addClass(this.$1, "is_animating"), setTimeout(function() {
                b("CSS").removeClass(a.$1, "is_animating")
            }, 240)) : (b("CSS").removeClass(this.$1, "active"), this.$4(!1))
        };
        c.setTitle = function(a) {
            this.$1.setAttribute("title", a)
        };
        c.$4 = function(a) {
            var c = function(a) {
                return g._("{count}", [g._param("count", b("intlSummarizeNumber")(a, 0))])
            };
            this.$3 != null && this.$3 < 1e3 && (this.$3 = a ? this.$3 + 1 : this.$3 - 1, b("DOM").setContent(this.$2, c(this.$3)))
        };
        c.isActivated = function() {
            return b("CSS").hasClass(this.$1, "active")
        };
        return a
    }();
    e.exports = a
}), null);
__d("BanzaiConsts", [], (function(a, b, c, d, e, f) {
    a = {
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        VITAL_WAIT: 1e3,
        BASIC_WAIT: 6e4,
        EXPIRY: 30 * 6e4,
        LAST_STORAGE_FLUSH: "banzai:last_storage_flush",
        STORAGE_FLUSH_INTERVAL: 12 * 60 * 6e4
    };
    e.exports = a
}), null);
__d("CurrentUser", ["Cookie", "CurrentUserInitialData"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        getID: function() {
            return b("CurrentUserInitialData").USER_ID
        },
        getAccountID: function() {
            return b("CurrentUserInitialData").ACCOUNT_ID
        },
        getWorkUserID: function() {
            return b("CurrentUserInitialData").WORK_USER_ID
        },
        getName: function() {
            return b("CurrentUserInitialData").NAME
        },
        getShortName: function() {
            return b("CurrentUserInitialData").SHORT_NAME
        },
        isLoggedIn: function() {
            return b("CurrentUserInitialData").USER_ID !== "0"
        },
        isLoggedInNow: function() {
            if (!g.isLoggedIn()) return !1;
            if (b("CurrentUserInitialData").IS_INTERN_SITE) return !0;
            if (b("CurrentUserInitialData").IS_WORK_USER) return !0;
            return b("CurrentUserInitialData").ORIGINAL_USER_ID ? b("CurrentUserInitialData").ORIGINAL_USER_ID === b("Cookie").get("c_user") : b("CurrentUserInitialData").USER_ID === b("Cookie").get("c_user")
        },
        isEmployee: function() {
            return !!b("CurrentUserInitialData").IS_EMPLOYEE
        },
        isTestUser: function() {
            return !!b("CurrentUserInitialData").IS_TEST_USER
        },
        hasWorkUser: function() {
            return !!b("CurrentUserInitialData").HAS_WORK_USER
        },
        isWorkUser: function() {
            return !!b("CurrentUserInitialData").IS_WORK_USER
        },
        isGray: function() {
            return !!b("CurrentUserInitialData").IS_GRAY
        },
        isUnderage: function() {
            return !!b("CurrentUserInitialData").IS_UNDERAGE
        },
        isMessengerOnlyUser: function() {
            return !!b("CurrentUserInitialData").IS_MESSENGER_ONLY_USER
        },
        isDeactivatedAllowedOnMessenger: function() {
            return !!b("CurrentUserInitialData").IS_DEACTIVATED_ALLOWED_ON_MESSENGER
        }
    };
    e.exports = g
}), null);
__d("QueryString", [], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a) {
        __p && __p();
        var b = [];
        Object.keys(a).sort().forEach(function(c) {
            var d = a[c];
            if (d === void 0) return;
            if (d === null) {
                b.push(c);
                return
            }
            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
        });
        return b.join("&")
    }

    function b(a, b) {
        __p && __p();
        b === void 0 && (b = !1);
        var c = {};
        if (a === "") return c;
        a = a.split("&");
        for (var d = 0; d < a.length; d++) {
            var e = a[d].split("=", 2),
                f = decodeURIComponent(e[0]);
            if (b && Object.prototype.hasOwnProperty.call(c, f)) throw new URIError("Duplicate key: " + f);
            c[f] = e.length === 2 ? decodeURIComponent(e[1]) : null
        }
        return c
    }

    function c(a, b) {
        return a + (a.indexOf("?") !== -1 ? "&" : "?") + (typeof b === "string" ? b : g.encode(b))
    }
    var g = {
        encode: a,
        decode: b,
        appendToUrl: c
    };
    e.exports = g
}), null);
__d("BanzaiAdapter", ["Arbiter", "BanzaiConsts", "CurrentUser", "QueryString", "Run", "SiteData", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "BanzaiConfig", "requireCond", "cr:695720"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [],
        h = new(b("Arbiter"))(),
        i = "/ajax/bz",
        j = "POST",
        k = {
            config: b("BanzaiConfig"),
            endpoint: i,
            useBeacon: !0,
            getUserID: function() {
                return b("CurrentUser").getID()
            },
            inform: function(a) {
                h.inform(a)
            },
            subscribe: function(a, b) {
                return h.subscribe(a, b)
            },
            cleanup: function() {
                var a = g;
                g = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            readyToSend: function() {
                return b("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, c, d, e) {
                __p && __p();
                var f = b("ZeroRewrites").rewriteURI(new(b("URI"))(i)),
                    h = b("ZeroRewrites").getTransportBuilderForURI(f)();
                h.open(j, f.toString(), !0);
                h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                h.onreadystatechange = function() {
                    if (h.readyState >= 4) {
                        var a = g.indexOf(h);
                        a >= 0 && g.splice(a, 1);
                        try {
                            a = h.status
                        } catch (b) {
                            a = 0
                        }
                        a == 200 ? (c && c(), e || k.inform(b("BanzaiConsts").OK)) : (d && d(a), e || k.inform(b("BanzaiConsts").ERROR))
                    }
                };
                g.push(h);
                h.send(k.prepForTransit(a))
            },
            addRequestAuthData: function(a) {
                return a
            },
            prepForTransit: function(a) {
                var c = b("getAsyncParams")(j);
                c.q = JSON.stringify(a);
                c.ts = Date.now();
                c.ph = b("SiteData").push_phase;
                return b("QueryString").encode(c)
            },
            prepWadForTransit: function(a) {
                if (a.snappy == null || a.snappy === !0) {
                    var c = Date.now(),
                        d = JSON.stringify(a.posts),
                        e = b("cr:695720").compressStringToSnappy(d);
                    e != null && e.length < d.length ? (a.posts = e, a.snappy_ms = Date.now() - c) : delete a.snappy
                }
            },
            setHooks: function(a) {},
            setUnloadHook: function(a) {
                b("BanzaiConfig").gks && b("BanzaiConfig").gks.beforeunload_hook ? b("Run").onBeforeUnload(a._unload) : b("Run").onAfterUnload(a._unload)
            },
            onUnload: function(a) {
                b("Run").onAfterUnload(a)
            },
            isOkToSendViaBeacon: function() {
                return !0
            }
        };
    e.exports = k
}), null);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiConsts", "BanzaiLazyQueue", "ErrorUtils", "FBLogger"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("BanzaiAdapter"),
        h = "ods:banzai",
        i = "send_via_beacon_failure",
        j = 0,
        k = 1,
        l = 2,
        m = null,
        n, o = [],
        p = null,
        q = [];

    function r(a, b) {
        a.__meta.status = j, a[3] = (a[3] || 0) + 1, !a.__meta.retry && b >= 400 && b < 600 && o.push(a)
    }
    var s = {
        adapter: g,
        SEND: b("BanzaiConsts").SEND,
        OK: b("BanzaiConsts").OK,
        ERROR: b("BanzaiConsts").ERROR,
        SHUTDOWN: b("BanzaiConsts").SHUTDOWN,
        VITAL_WAIT: b("BanzaiConsts").VITAL_WAIT,
        BASIC_WAIT: b("BanzaiConsts").BASIC_WAIT,
        VITAL: {
            delay: g.config.MIN_WAIT || b("BanzaiConsts").VITAL_WAIT
        },
        BASIC: {
            delay: g.config.MAX_WAIT || b("BanzaiConsts").BASIC_WAIT
        },
        isEnabled: function(a) {
            return g.config.gks && g.config.gks[a]
        },
        post: function(a, c, d) {
            __p && __p();
            a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
            d = d || {};
            var e = d.retry;
            if (g.config.disabled) return;
            var f = g.config.blacklist;
            if (f && (f.indexOf && (typeof f.indexOf == "function" && f.indexOf(a) != -1))) return;
            var h = s._wrapData(a, c, s._getEventTime(), e);
            d.callback && (h.__meta.callback = d.callback);
            d.compress != null && (h.__meta.compress = d.compress);
            f = d.delay;
            f == null && (f = b("BanzaiConsts").BASIC_WAIT);
            if (d.signal) {
                h.__meta.status = k;
                c = [{
                    user: s._getUserId(),
                    page_id: s._getPageId(),
                    posts: [h],
                    trigger: a
                }];
                g.send(c, function() {
                    h.__meta.status = l, h.__meta.callback && h.__meta.callback()
                }, function(a) {
                    r(h, a)
                }, !0);
                if (!e) return
            }
            o.push(h);
            (s._schedule(f) || !p) && (p = a);
            d = b("BanzaiLazyQueue").flushQueue();
            d.forEach(function(a) {
                return s.post.apply(s, a)
            })
        },
        registerToSendWithBeacon: function(a, c, d, e) {
            if (!(navigator && navigator.sendBeacon && g.isOkToSendViaBeacon())) return !1;
            if (!a) {
                b("FBLogger")("banzai").mustfix("Banzai.registerToSendWithBeacon called without specifying a route");
                return !1
            }
            q.push({
                cb: c,
                route: a,
                onSuccess: d,
                onFailure: e
            });
            return !0
        },
        flush: function(b, c) {
            a.clearTimeout(m), m = null, s._sendWithCallbacks(b, c)
        },
        subscribe: g.subscribe,
        canUseNavigatorBeacon: function() {
            return navigator && navigator.sendBeacon && g.isOkToSendViaBeacon()
        },
        _canSend: function(a) {
            return a[2] >= s._getEventTime() - (g.config.EXPIRY || b("BanzaiConsts").EXPIRY)
        },
        _getPostBuffer: function() {
            return o
        },
        _clearPostBuffer: function() {
            o = []
        },
        _schedule: function(b) {
            var c = s._getEventTime() + b;
            if (!n || c < n) {
                n = c;
                m && a.clearTimeout(m);
                m = a.setTimeout(function() {
                    s._sendWithCallbacks()
                }, b);
                return !0
            }
            return !1
        },
        _sendWithCallbacks: function(a, c, d) {
            __p && __p();
            n = null;
            s._schedule(s.BASIC.delay);
            if (!g.readyToSend()) {
                c && c();
                return
            }
            if (s.isEnabled("flush_storage_periodically") || s.isEnabled("error_impact_test")) {
                var e = s._getStorage();
                b("ErrorUtils").applyWithGuard(e.flush, e)
            }
            g.inform(b("BanzaiConsts").SEND);
            e = [];
            var f = [];
            o = s._gatherWadsAndPostsFromBuffer(e, f, !0, o, d);
            if (e.length <= 0) {
                g.inform(b("BanzaiConsts").OK);
                a && a();
                return
            }
            e[0].trigger = p;
            p = null;
            e[0].send_method = "ajax";
            e.map(g.prepWadForTransit);
            g.send(e, function() {
                f.forEach(function(a) {
                    a.__meta.status = l, a.__meta.callback && a.__meta.callback()
                }), a && a()
            }, function(a) {
                f.forEach(function(b) {
                    r(b, a)
                }), c && c()
            })
        },
        _gatherWadsAndPostsFromBuffer: function(a, b, c, d, e) {
            __p && __p();
            e === void 0 && (e = null);
            var f = {},
                g = d.length,
                h = !1;
            return d.filter(function(d, i) {
                __p && __p();
                if (h) return !0;
                var j = d.__meta;
                if (j.status >= l || !s._canSend(d)) return !1;
                if (j.status >= k) return !0;
                var m = j.compress != null ? j.compress : !0,
                    n = j.pageID + j.userID + (m ? "compress" : ""),
                    o = f[n];
                o || (o = {
                    user: j.userID,
                    page_id: j.pageID,
                    posts: [],
                    snappy: m
                }, f[n] = o, a.push(o));
                j.status = k;
                o.posts.push(d);
                b.push(d);
                e != null && e > 0 && (e--, e == 0 && (h = !0, i < g - 1 && s._schedule(0)));
                return c && j.retry
            })
        },
        _resetPostStatus: function(a) {
            a.__meta.status = j
        },
        _store: function(a) {
            a = s._getStorage();
            b("ErrorUtils").applyWithGuard(a.store, a)
        },
        _restore: function(a) {
            a = s._getStorage();
            b("ErrorUtils").applyWithGuard(a.restore, a);
            s._schedule(g.config.RESTORE_WAIT || b("BanzaiConsts").VITAL_WAIT)
        },
        _wrapData: function(a, b, c, d) {
            a = [a, b, c, 0];
            a.__meta = {
                pageID: s._getPageId(),
                userID: s._getUserId(),
                retry: d === !0,
                status: j
            };
            return a
        },
        _tryToSendViaBeacon: function() {
            __p && __p();
            if (!(navigator && navigator.sendBeacon && g.isOkToSendViaBeacon())) return !1;
            var b = [],
                c = [];
            o = s._gatherWadsAndPostsFromBuffer(b, c, !1, o);
            if (b.length <= 0) return !1;
            b[0].send_method = "beacon";
            b.map(g.prepWadForTransit);
            b = new Blob([g.addRequestAuthData(g.prepForTransit(b))], {
                type: "application/x-www-form-urlencoded"
            });
            b = a.navigator.sendBeacon(s.adapter.endpoint, b);
            if (!b) {
                c.forEach(function(a) {
                    o.push(a)
                });
                o.push(s._wrapData(h, (b = {}, b[i] = [1], b), s._getEventTime()));
                return !1
            }
            return !0
        },
        _processCallbacksAndSendViaBeacon: function() {
            __p && __p();
            var b = [];
            q.forEach(function(a) {
                var c = a.cb();
                c.forEach(function(c) {
                    var d = a.route;
                    if (d) {
                        d = s._wrapData(d, c, s._getEventTime());
                        d.__meta.onSuccess = a.onSuccess;
                        d.__meta.onFailure = a.onFailure;
                        b.push(d)
                    }
                })
            });
            q = [];
            var c = [],
                d = [];
            s._gatherWadsAndPostsFromBuffer(c, d, !0, b);
            if (c.length > 0) {
                c[0].send_method = "beacon";
                c.map(g.prepWadForTransit);
                c = new Blob([g.addRequestAuthData(g.prepForTransit(c))], {
                    type: "application/x-www-form-urlencoded"
                });
                c = a.navigator.sendBeacon(s.adapter.endpoint, c);
                c ? d.forEach(function(a) {
                    return a.__meta && a.__meta.onSuccess && a.__meta.onSuccess()
                }) : d.forEach(function(a) {
                    return a.__meta && a.__meta.onFailure && a.__meta.onFailure()
                })
            }
        },
        _unload: function() {
            navigator && navigator.sendBeacon && g.isOkToSendViaBeacon() && s._processCallbacksAndSendViaBeacon(), g.cleanup(), g.inform(b("BanzaiConsts").SHUTDOWN), o.length > 0 && ((!s.adapter.useBeacon || !s._tryToSendViaBeacon()) && s._store(!1))
        },
        _getEventTime: function() {
            return Date.now()
        },
        _testState: function() {
            return {
                postBuffer: o,
                triggerRoute: p
            }
        },
        _getStorage: function() {
            return {
                store: function() {},
                restore: function() {},
                flush: function() {}
            }
        },
        _getPageId: function() {
            return "0"
        },
        _getUserId: function() {
            return "0"
        },
        _initialize: function() {}
    };
    e.exports = s
}), null);
__d("BanzaiStreamPayloads", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};
    a = {
        addPayload: function(a, b) {
            g[a] = b
        },
        removePayload: function(a) {
            delete g[a]
        },
        unload: function(a) {
            Object.keys(g).forEach(function(b) {
                b = g[b];
                a(b.route, b.payload)
            })
        }
    };
    e.exports = a
}), null);
__d("FBJSON", [], (function(a, b, c, d, e, f) {
    e.exports = {
        parse: JSON.parse,
        stringify: JSON.stringify
    }
}), null);
__d("EventEmitterWithValidation", ["BaseEventEmitter"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            var c;
            c = a.call(this) || this;
            c.$EventEmitterWithValidation1 = Object.keys(b);
            return c
        }
        var c = b.prototype;
        c.emit = function(b) {
            g(b, this.$EventEmitterWithValidation1);
            return a.prototype.emit.apply(this, arguments)
        };
        return b
    }(b("BaseEventEmitter"));

    function g(a, b) {
        if (b.indexOf(a) === -1) throw new TypeError(h(a, b))
    }

    function h(a, b) {
        a = 'Unknown event type "' + a + '". ';
        a += "Known event types: " + b.join(", ") + ".";
        return a
    }
    e.exports = a
}), null);
__d("mixInEventEmitter", ["invariant", "EventEmitterWithHolding", "EventEmitterWithValidation", "EventHolder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function a(a, b) {
        b || g(0, 3159);
        var c = a.prototype || a;
        c.__eventEmitter && g(0, 3160);
        a = a.constructor;
        a && (a === Object || a === Function || g(0, 3161));
        c.__types = babelHelpers["extends"]({}, c.__types, b);
        Object.assign(c, h)
    }
    var h = {
        emit: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emit(a, b, c, d, e, f, g)
        },
        emitAndHold: function(a, b, c, d, e, f, g) {
            return this.__getEventEmitter().emitAndHold(a, b, c, d, e, f, g)
        },
        addListener: function(a, b, c) {
            return this.__getEventEmitter().addListener(a, b, c)
        },
        once: function(a, b, c) {
            return this.__getEventEmitter().once(a, b, c)
        },
        addRetroactiveListener: function(a, b, c) {
            return this.__getEventEmitter().addRetroactiveListener(a, b, c)
        },
        listeners: function(a) {
            return this.__getEventEmitter().listeners(a)
        },
        removeAllListeners: function() {
            this.__getEventEmitter().removeAllListeners()
        },
        removeCurrentListener: function() {
            this.__getEventEmitter().removeCurrentListener()
        },
        releaseHeldEventType: function(a) {
            this.__getEventEmitter().releaseHeldEventType(a)
        },
        __getEventEmitter: function() {
            if (!this.__eventEmitter) {
                var a = new(b("EventEmitterWithValidation"))(this.__types),
                    c = new(b("EventHolder"))();
                this.__eventEmitter = new(b("EventEmitterWithHolding"))(a, c)
            }
            return this.__eventEmitter
        }
    };
    e.exports = a
}), null);
__d("pageID", [], (function(a, b, c, d, e, f) {
    e.exports = Math.floor(2147483648 * Math.random()).toString(36)
}), null);
__d("NavigationMetricsCore", ["mixInEventEmitter", "pageID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
            NAVIGATION_DONE: "NAVIGATION_DONE",
            EVENT_OCCURRED: "EVENT_OCCURRED"
        },
        h = {
            tti: "tti",
            e2e: "e2e",
            all_pagelets_loaded: "all_pagelets_loaded",
            all_pagelets_displayed: "all_pagelets_displayed"
        },
        i = 0,
        j = {},
        k = function() {
            "use strict";
            __p && __p();

            function a() {
                this.eventTimings = {
                    tti: null,
                    e2e: null,
                    all_pagelets_loaded: null,
                    all_pagelets_displayed: null
                }, this.lid = b("pageID") + ":" + i++, this.extras = {}
            }
            var c = a.prototype;
            c.getLID = function() {
                return this.lid
            };
            c.setRequestStart = function(a) {
                this.start = a;
                return this
            };
            c.setTTI = function(a) {
                this.eventTimings.tti = a;
                this.$1(h.tti, a);
                return this
            };
            c.setE2E = function(a) {
                this.eventTimings.e2e = a;
                this.$1(h.e2e, a);
                return this
            };
            c.setExtra = function(a, b) {
                this.extras[a] = b;
                return this
            };
            c.setDisplayDone = function(a) {
                this.eventTimings.all_pagelets_displayed = a;
                this.setExtra("all_pagelets_displayed", a);
                this.$1(h.all_pagelets_displayed, a);
                return this
            };
            c.setAllPageletsLoaded = function(a) {
                this.eventTimings.all_pagelets_loaded = a;
                this.setExtra("all_pagelets_loaded", a);
                this.$1(h.all_pagelets_loaded, a);
                return this
            };
            c.setServerLID = function(a) {
                this.serverLID = a;
                return this
            };
            c.$1 = function(a, b) {
                var c = {};
                j != null && this.serverLID != null && j[this.serverLID] != null && (c = j[this.serverLID]);
                c = babelHelpers["extends"]({}, c, {
                    event: a,
                    timestamp: b
                });
                l.emitAndHold(g.EVENT_OCCURRED, this.serverLID, c);
                return this
            };
            c.doneNavigation = function() {
                var a = babelHelpers["extends"]({
                    start: this.start,
                    extras: this.extras
                }, this.eventTimings);
                if (this.serverLID && j[this.serverLID]) {
                    var b = this.serverLID;
                    Object.assign(a, j[b]);
                    delete j[b]
                }
                l.emitAndHold(g.NAVIGATION_DONE, this.lid, a)
            };
            return a
        }(),
        l = {
            Events: g,
            postPagelet: function(a, b, c) {},
            siteInit: function(a) {
                a(k)
            },
            setPage: function(a) {
                if (!a.serverLID) return;
                j[a.serverLID] = {
                    page: a.page,
                    pageType: a.page_type,
                    pageURI: a.page_uri,
                    serverLID: a.serverLID
                }
            },
            getFullPageLoadLid: function() {
                throw new Error("getFullPageLoadLid is not implemented on this site")
            }
        };
    b("mixInEventEmitter")(l, g);
    e.exports = l
}), null);
__d("NavigationMetrics", ["Arbiter", "BigPipeInstance", "NavigationMetricsCore", "PageEvents", "performance"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "0";
    b("NavigationMetricsCore").getFullPageLoadLid = function() {
        return g
    };
    b("NavigationMetricsCore").siteInit(function(a) {
        __p && __p();
        var c = new a(),
            d = !0;
        b("Arbiter").subscribe(b("BigPipeInstance").Events.init, function(e, f) {
            __p && __p();
            var h = d ? c : new a();
            d && (g = f.lid);
            d = !1;
            h.setServerLID(f.lid);
            e = f.arbiter;
            e.subscribe(b("BigPipeInstance").Events.tti, function(a, b) {
                a = b.ts;
                h.setTTI(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_SEND, function(a, b) {
                a = b.ts;
                h.setRequestStart(a)
            });
            e.subscribe(b("PageEvents").AJAXPIPE_ONLOAD, function(a, b) {
                a = b.ts;
                h.setE2E(a).doneNavigation()
            });
            e.subscribe(b("BigPipeInstance").Events.displayed, function(a, b) {
                a = b.ts;
                h.setDisplayDone(a)
            });
            e.subscribe(b("BigPipeInstance").Events.loaded, function(a, b) {
                a = b.ts;
                h.setAllPageletsLoaded(a)
            })
        });
        b("Arbiter").subscribe(b("PageEvents").BIGPIPE_ONLOAD, function(a, e) {
            a = e.ts;
            d = !1;
            c.setRequestStart(b("performance").timing && b("performance").timing.navigationStart).setE2E(a).doneNavigation()
        })
    });
    e.exports = b("NavigationMetricsCore")
}), null);
__d("nativeRequestAnimationFrame", [], (function(a, b, c, d, e, f) {
    b = a.__fbNativeRequestAnimationFrame || a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame;
    e.exports = b
}), null);
__d("requestAnimationFramePolyfill", ["nativeRequestAnimationFrame"], (function(a, b, c, d, e, f) {
    var g = 0;
    c = b("nativeRequestAnimationFrame") || function(b) {
        var c = Date.now(),
            d = Math.max(0, 16 - (c - g));
        g = c + d;
        return a.setTimeout(function() {
            b(Date.now())
        }, d)
    };
    e.exports = c
}), null);
__d("IdleCallbackImplementation", ["performanceNow", "requestAnimationFramePolyfill"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [],
        h = 0,
        i = 0,
        j = -1,
        k = !1,
        l = 1e3 / 60,
        m = 2;

    function n(a) {
        return a
    }

    function o(a) {
        return a
    }

    function c(b, c) {
        var d = i++;
        g[d] = b;
        q();
        if (c != null && c.timeout > 0) {
            var e = n(d);
            a.setTimeout(function() {
                return w(e)
            }, c.timeout)
        }
        return n(d)
    }

    function p(a) {
        a = o(a);
        g[a] = null
    }

    function q() {
        k || (k = !0, b("requestAnimationFramePolyfill")(function(a) {
            k = !1, s(b("performanceNow")() - a)
        }))
    }

    function r(a) {
        var b = l - m;
        if (a < b) return b - a;
        a = a % l;
        if (a > b || a < m) return 0;
        else return b - a
    }

    function s(a) {
        __p && __p();
        var c = b("performanceNow")();
        if (c > j) {
            a = r(a);
            if (a > 0) {
                c = c + a;
                v(c);
                j = c
            }
        }
        t() && q()
    }

    function t() {
        return h < g.length
    }

    function u() {
        while (t()) {
            var a = g[h];
            h++;
            if (a) return a
        }
        return null
    }

    function v(a) {
        var c;
        while (b("performanceNow")() < a && (c = u())) c(new x(a))
    }

    function w(a) {
        var b = o(a);
        b = g[b];
        b && (p(a), b(new x(null)))
    }
    var x = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.didTimeout = a == null, this.$1 = a
        }
        var c = a.prototype;
        c.timeRemaining = function() {
            var a = this.$1;
            if (a != null) {
                var c = b("performanceNow")();
                if (c < a) return a - c
            }
            return 0
        };
        return a
    }();
    e.exports = {
        requestIdleCallback: c,
        cancelIdleCallback: p
    }
}), null);
__d("requestIdleCallbackAcrossTransitions", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.requestIdleCallback || b("IdleCallbackImplementation").requestIdleCallback,
        h = b("TimerStorage").IDLE_CALLBACK;
    e.exports = function(c, d) {
        c = b("TimeSlice").guard(c, "requestIdleCallback", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        d = g.call(a, c, d);
        var e = h + String(d);
        b("TimeSlice").registerForCancelling(e, c);
        return d
    }
}), null);
__d("SetIdleTimeoutAcrossTransitions", ["NavigationMetrics", "cancelIdleCallback", "clearTimeout", "nullthrows", "requestIdleCallbackAcrossTransitions", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = !1,
        h = new Map();
    c = {
        start: function(a, c) {
            if (g) {
                var d = b("setTimeoutAcrossTransitions")(function() {
                    var c = b("requestIdleCallbackAcrossTransitions")(function() {
                        a(), h["delete"](c)
                    });
                    h.set(d, c)
                }, c);
                return d
            } else return b("setTimeoutAcrossTransitions")(a, c)
        },
        clear: function(a) {
            b("clearTimeout")(a), h.has(a) && (b("cancelIdleCallback")(b("nullthrows")(h.get(a))), h["delete"](a))
        }
    };
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED, function(b, c) {
        c.event === "all_pagelets_loaded" && (g = !!a.requestIdleCallback)
    });
    e.exports = c
}), null);
__d("WebStorage", ["Env", "FBLogger", "ex"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {},
        h = {};

    function i(a, c, d) {
        if (b("Env").no_cookies === !0 || b("Env").defer_cookies === !0) return null;
        Object.prototype.hasOwnProperty.call(g, d) || (g[d] = c(d));
        return g[d]
    }

    function j(a) {
        try {
            return window[a]
        } catch (a) {
            b("FBLogger")("web_storage").warn("Failed to get storage for read %s", a.message)
        }
        return null
    }

    function k(a) {
        __p && __p();
        try {
            a = window[a];
            if (a) {
                var c = "__test__" + Date.now();
                a.setItem(c, "");
                a.removeItem(c)
            }
            return a
        } catch (a) {
            c = "";
            b("FBLogger")("web_storage").warn("Failed to get storage %s" + c, a.message)
        }
        return null
    }

    function l(a) {
        var b = [];
        for (var c = 0; c < a.length; c++) b.push(a.key(c) || "");
        return b
    }

    function a(a, c, d) {
        __p && __p();
        if (a == null) return new Error("storage cannot be null");
        var e = null;
        try {
            a.setItem(c, d)
        } catch (g) {
            var f = l(a).map(function(b) {
                var c = (a.getItem(b) || "").length;
                return b + "(" + c + ")"
            });
            e = new Error(b("ex")("%sStorage quota exceeded while setting %s(%s). Items(length) follows: %s", g.name ? g.name + ": " : "", c, d.length, f.join()));
            b("FBLogger")("web_storage").catching(e).mustfix("Error set item")
        }
        return e
    }
    c = {
        getLocalStorage: function() {
            return i(g, k, "localStorage")
        },
        getSessionStorage: function() {
            return i(g, k, "sessionStorage")
        },
        getLocalStorageForRead: function() {
            return i(h, j, "localStorage")
        },
        getSessionStorageForRead: function() {
            return i(h, j, "sessionStorage")
        },
        setItemGuarded: a
    };
    e.exports = c
}), null);
__d("WebStorageMutex", ["WebStorage", "clearTimeout", "pageID", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = null,
        h = !1,
        i = b("pageID");

    function j() {
        h || (h = !0, g = b("WebStorage").getLocalStorage());
        return g
    }
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.name = a
        }
        a.testSetPageID = function(a) {
            i = a
        };
        var c = a.prototype;
        c.$1 = function() {
            if (!j()) return i;
            var a = j().getItem("mutex_" + this.name);
            a = a ? a.split(":") : null;
            return a && a[1] >= Date.now() ? a[0] : null
        };
        c.$2 = function(a) {
            if (!j()) return;
            a = Date.now() + (a || 1e4);
            b("WebStorage").setItemGuarded(j(), "mutex_" + this.name, i + ":" + a)
        };
        c.hasLock = function() {
            return this.$1() == i
        };
        c.lock = function(a, c, d) {
            var e = this;
            this.$3 && b("clearTimeout")(this.$3);
            i == (this.$1() || i) && this.$2(d);
            this.$3 = b("setTimeoutAcrossTransitions")(function() {
                e.$3 = null;
                var b = e.hasLock() ? a : c;
                b && b(e)
            }, 0)
        };
        c.unlock = function() {
            this.$3 && b("clearTimeout")(this.$3), j() && this.hasLock() && j().removeItem("mutex_" + this.name)
        };
        return a
    }();
    e.exports = a
}), null);
__d("lowerFacebookDomain", [], (function(a, b, c, d, e, f) {
    b = window.location.hostname.match(/\.(facebook\.sg|facebookcorewwwi\.onion|workplace\.com)$/);
    var g = b ? b[1] : "facebook.com";
    a.setDomain = function(a) {
        g = a
    };
    a.isValidDocumentDomain = function() {
        return document.domain == g ? !0 : !1
    };

    function a() {
        document.domain = g
    }
    e.exports = a
}), null);
__d("BanzaiNew", ["BanzaiBase", "BanzaiConsts", "BanzaiStreamPayloads", "CurrentUser", "ExecutionEnvironment", "FBJSON", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "TimeSlice", "Visibility", "WebStorage", "emptyFunction", "isInIframe", "lowerFacebookDomain", "pageID", "performanceAbsoluteNow", "WebStorageMutex"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "bz:",
        h = {
            _getStorage: b("BanzaiBase")._getStorage,
            _getPageId: b("BanzaiBase")._getPageId,
            _getUserId: b("BanzaiBase")._getUserId,
            _initialize: b("BanzaiBase")._initialize,
            _schedule: b("BanzaiBase")._schedule,
            flush: b("BanzaiBase").flush,
            _unload: b("BanzaiBase")._unload,
            post: b("BanzaiBase").post
        },
        i = b("isInIframe")(),
        j = null,
        k, l, m, n, o = !1;

    function p() {
        o || (o = !0, n = b("WebStorage").getLocalStorage());
        return n
    }

    function q() {
        var a = "check_quota";
        try {
            var b = p();
            if (!b) return !1;
            b.setItem(a, a);
            b.removeItem(a);
            return !0
        } catch (a) {
            return !1
        }
    }
    b("BanzaiBase")._getStorage = function() {
        __p && __p();
        m || (!i ? m = {
            store: function() {
                var a = p();
                if (!a || b("BanzaiBase")._getPostBuffer().length <= 0) return;
                var c = b("BanzaiBase")._getPostBuffer().map(function(a) {
                    return [a[0], a[1], a[2], a[3] || 0, a.__meta]
                });
                b("BanzaiBase")._clearPostBuffer();
                b("WebStorage").setItemGuarded(a, g + b("pageID") + "." + b("BanzaiBase")._getEventTime(), b("FBJSON").stringify(c))
            },
            restore: function() {
                __p && __p();
                var a = p();
                if (!a) return;
                var c = b("WebStorageMutex"),
                    d = function(c) {
                        __p && __p();
                        var d = [];
                        for (var e = 0; e < a.length; e++) {
                            var f = a.key(e);
                            f.indexOf(g) === 0 && f.indexOf("bz:__") !== 0 && d.push(f)
                        }
                        d.forEach(function(c) {
                            __p && __p();
                            var d = a.getItem(c);
                            a.removeItem(c);
                            if (!d) return;
                            c = b("FBJSON").parse(d);
                            c.forEach(function(a) {
                                if (!a) return;
                                var c = a.__meta = a.pop(),
                                    d = b("BanzaiBase")._canSend(a);
                                if (!d) return;
                                d = b("CurrentUser").getID();
                                (c.userID === d || d === "0") && (b("BanzaiBase")._resetPostStatus(a), b("BanzaiBase")._getPostBuffer().push(a))
                            })
                        });
                        c && c.unlock()
                    };
                q() ? new c("banzai").lock(d) : b("SetIdleTimeoutAcrossTransitions").start(d, 0)
            },
            flush: function() {
                var a = p();
                if (a) {
                    j === null && (j = parseInt(a.getItem(b("BanzaiConsts").LAST_STORAGE_FLUSH), 10));
                    var c = j && b("performanceAbsoluteNow")() - j >= b("BanzaiConsts").STORAGE_FLUSH_INTERVAL;
                    c && b("BanzaiBase")._restore(!1);
                    (c || !j) && (j = b("performanceAbsoluteNow")(), b("WebStorage").setItemGuarded(a, b("BanzaiConsts").LAST_STORAGE_FLUSH, j.toString()))
                }
            }
        } : m = {
            store: b("emptyFunction"),
            restore: b("emptyFunction"),
            flush: b("emptyFunction")
        });
        return m
    };
    b("BanzaiBase")._getPageId = function() {
        return b("pageID")
    };
    b("BanzaiBase")._getUserId = function() {
        return b("CurrentUser").getID()
    };
    b("BanzaiBase")._initialize = function() {
        b("ExecutionEnvironment").canUseDOM && (b("BanzaiBase").adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
            b("BanzaiBase")._getPostBuffer().length > 0 && (b("BanzaiBase")._tryToSendViaBeacon() || b("BanzaiBase")._store(!1))
        }), (b("BanzaiBase").isEnabled("enable_client_logging_clear_on_visible") || b("BanzaiBase").isEnabled("error_impact_test")) && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
            b("BanzaiBase")._tryToSendViaBeacon() || b("BanzaiBase")._restore(!1)
        })) : b("BanzaiBase").adapter.setHooks(b("BanzaiBase")), b("BanzaiBase").adapter.setUnloadHook(b("BanzaiBase")), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
            if (c.pageType !== "normal") return;
            b("BanzaiBase")._restore(!1);
            b("NavigationMetrics").removeCurrentListener()
        }))
    };
    b("BanzaiBase")._getEventTime = function() {
        return b("performanceAbsoluteNow")()
    };
    var r = b("TimeSlice").guard(function() {
        k = null, b("BanzaiBase")._sendWithCallbacks()
    }, "Banzai.send", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN
    });
    b("BanzaiBase")._schedule = function(a) {
        __p && __p();
        var c = b("BanzaiBase")._getEventTime() + a;
        if (!k || c < k) {
            k = c;
            b("SetIdleTimeoutAcrossTransitions").clear(l);
            c = function() {
                l = b("SetIdleTimeoutAcrossTransitions").start(r, a)
            };
            c();
            return !0
        }
        return !1
    };
    b("BanzaiBase").flush = function(a, c) {
        b("SetIdleTimeoutAcrossTransitions").clear(l), k = null, b("BanzaiBase")._sendWithCallbacks(a, c)
    };
    b("BanzaiBase")._unload = function() {
        b("BanzaiStreamPayloads").unload(b("BanzaiBase").post), h._unload()
    };
    b("BanzaiBase").post = function(c, d, e) {
        __p && __p();
        if (b("BanzaiBase").adapter.config.disabled) return;
        if (!b("ExecutionEnvironment").canUseDOM) return;
        if (i && b("lowerFacebookDomain").isValidDocumentDomain()) {
            var f;
            try {
                f = a.top.require("Banzai")
            } catch (a) {
                f = null
            }
            if (f) {
                f.post.apply(f, arguments);
                return
            }
        }
        h.post(c, d, e)
    };
    b("BanzaiBase")._initialize();
    e.exports = b("BanzaiBase")
}), null);
__d("onAfterDisplay", ["NavigationMetrics", "TimeSlice", "requestIdleCallback"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [],
        h = !1;

    function a(a) {
        a = b("TimeSlice").guard(a, "onAfterDisplay invocation", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });
        h ? b("requestIdleCallback")(a) : g.push(a)
    }
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED, function(a, c) {
        ["all_pagelets_displayed", "e2e"].indexOf(c.event) > -1 && !h && (h = !0, g.forEach(function(a) {
            b("requestIdleCallback")(a)
        }))
    });
    e.exports = a
}), null);
__d("BanzaiOld", ["BanzaiAdapter", "NavigationMetrics", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiStreamPayloads", "CurrentUser", "ErrorUtils", "ExecutionEnvironment", "FBJSON", "FBLogger", "SetIdleTimeoutAcrossTransitions", "TimeSlice", "Visibility", "WebStorage", "emptyFunction", "isInIframe", "lowerFacebookDomain", "onAfterDisplay", "pageID", "performanceAbsoluteNow", "WebStorageMutex"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = 6e4,
        h = 1e3,
        i = b("BanzaiAdapter"),
        j = b("isInIframe")(),
        k = "bz:",
        l = "ods:banzai",
        m = "send_via_beacon_failure",
        n = 0,
        o = 1,
        p = 2,
        q = null,
        r, s, t = [],
        u = null,
        v = [];

    function w(a) {
        return a[2] >= b("performanceAbsoluteNow")() - (i.config.EXPIRY || K.EXPIRY)
    }

    function x(a, b) {
        var c = a.__meta;
        c.status = n;
        a[3] = (a[3] || 0) + 1;
        c.retry === !1 && b >= 400 && b < 600 && t.push(a)
    }

    function y(a, c, d, e) {
        a = [a, c, d, 0];
        a.__meta = {
            retry: e === !0,
            pageID: b("pageID"),
            userID: b("CurrentUser").getID(),
            status: n
        };
        return a
    }

    function z() {
        __p && __p();
        var a = [];
        v.forEach(function(c) {
            var d = c.cb();
            d.forEach(function(d) {
                var e = c.route;
                if (e != null || e != "") {
                    e = y(e, d, b("performanceAbsoluteNow")());
                    e.__meta.onSuccess = c.onSuccess;
                    e.__meta.onFailure = c.onFailure;
                    a.push(e)
                }
            })
        });
        v = [];
        var c = [],
            d = [];
        E(c, d, !0, a);
        if (c.length > 0) {
            c[0].send_method = "beacon";
            c.map(i.prepWadForTransit);
            c = new Blob([i.addRequestAuthData(i.prepForTransit(c))], {
                type: "application/x-www-form-urlencoded"
            });
            c = navigator.sendBeacon(K.adapter.endpoint, c);
            c ? d.forEach(function(a) {
                a = a.__meta;
                a != null && a.onSuccess != null && a.onSuccess()
            }) : d.forEach(function(a) {
                a = a.__meta;
                a != null && a.onFailure != null && a.onFailure()
            })
        }
    }

    function A(a) {
        __p && __p();
        var c = b("performanceAbsoluteNow")() + a;
        if (s == null || c < s) {
            s = c;
            b("SetIdleTimeoutAcrossTransitions").clear(r);
            c = function() {
                r = b("SetIdleTimeoutAcrossTransitions").start(B, a)
            };
            c();
            return !0
        }
        return !1
    }
    var B = b("TimeSlice").guard(function() {
        C(null, null)
    }, "Banzai.send", {
        propagationType: b("TimeSlice").PropagationType.ORPHAN
    });

    function C(a, c) {
        __p && __p();
        s = null;
        A(K.BASIC.delay);
        if (!i.readyToSend()) {
            c && c();
            return
        }(K.isEnabled("flush_storage_periodically") || K.isEnabled("error_impact_test")) && (J(), b("ErrorUtils").applyWithGuard(F.flush, F));
        i.inform(K.SEND);
        var d = [],
            e = [];
        t = E(d, e, !0, t);
        if (d.length <= 0) {
            i.inform(K.OK);
            a && a();
            return
        }
        d[0].trigger = u;
        u = null;
        d[0].send_method = "ajax";
        d.map(i.prepWadForTransit);
        i.send(d, function() {
            e.forEach(function(a) {
                a = a.__meta;
                a.status = p;
                a.callback != null && a.callback()
            }), a && a()
        }, function(a) {
            e.forEach(function(b) {
                x(b, a)
            }), c && c()
        })
    }

    function D() {
        __p && __p();
        if (!(navigator && navigator.sendBeacon && i.isOkToSendViaBeacon())) return !1;
        var a = [],
            c = [];
        t = E(a, c, !1, t);
        if (a.length <= 0) return !1;
        a[0].send_method = "beacon";
        a.map(i.prepWadForTransit);
        a = new Blob([i.addRequestAuthData(i.prepForTransit(a))], {
            type: "application/x-www-form-urlencoded"
        });
        a = navigator.sendBeacon(K.adapter.endpoint, a);
        if (!a) {
            c.forEach(function(a) {
                t.push(a)
            });
            t.push(y(l, (a = {}, a[m] = [1], a), b("performanceAbsoluteNow")()));
            return !1
        }
        return !0
    }

    function E(a, b, c, d) {
        __p && __p();
        var e = {};
        return d.filter(function(d) {
            __p && __p();
            var f = d.__meta;
            if (f.status >= p || !w(d)) return !1;
            if (f.status >= o) return !0;
            var g = f.compress != null ? f.compress : !0,
                h = f.pageID + f.userID + (g ? "compress" : ""),
                i = e[h];
            i || (i = {
                user: f.userID,
                page_id: f.pageID,
                posts: [],
                snappy: g
            }, e[h] = i, a.push(i));
            f.status = o;
            i.posts.push(d);
            b.push(d);
            return c && !!f.retry
        })
    }
    var F, G, H = !1;

    function I() {
        H || (H = !0, G = b("WebStorage").getLocalStorage());
        return G
    }

    function J() {
        __p && __p();
        F || (!j ? F = {
            store: function() {
                var a = I();
                if (a == null || t.length <= 0) return;
                var c = t.map(function(a) {
                    return [a[0], a[1], a[2], a[3] || 0, a.__meta]
                });
                t = [];
                b("WebStorage").setItemGuarded(a, k + b("pageID") + "." + b("performanceAbsoluteNow")(), b("FBJSON").stringify(c))
            },
            restore: function() {
                __p && __p();
                var a = I();
                if (!a) return;
                var c = b("WebStorageMutex");
                new c("banzai").lock(function(c) {
                    __p && __p();
                    var d = [];
                    for (var e = 0; e < a.length; e++) {
                        var f = a.key(e);
                        if (f == null || f === "") continue;
                        f.indexOf(k) === 0 && f.indexOf("bz:__") !== 0 && d.push(f)
                    }
                    d.forEach(function(c) {
                        __p && __p();
                        var d = a.getItem(c);
                        a.removeItem(c);
                        if (d == null) return;
                        c = b("FBJSON").parse(d);
                        c.forEach(function(a) {
                            if (!a) return;
                            var c = a.__meta = a.pop(),
                                d = w(a);
                            if (!d) return;
                            d = b("CurrentUser").getID();
                            (c.userID === d || d === "0") && (c.status = n, t.push(a))
                        })
                    });
                    c.unlock()
                })
            },
            flush: function() {
                var a = I();
                if (a) {
                    q === null && (q = parseInt(a.getItem(b("BanzaiConsts").LAST_STORAGE_FLUSH), 10));
                    var c = q && b("performanceAbsoluteNow")() - q >= b("BanzaiConsts").STORAGE_FLUSH_INTERVAL;
                    c && K._restore(!1);
                    (c || !q) && (q = b("performanceAbsoluteNow")(), b("WebStorage").setItemGuarded(a, b("BanzaiConsts").LAST_STORAGE_FLUSH, q.toString()))
                }
            }
        } : F = {
            store: b("emptyFunction"),
            restore: b("emptyFunction"),
            flush: b("emptyFunction")
        })
    }
    var K = {
        adapter: i,
        SEND: "Banzai:SEND",
        OK: "Banzai:OK",
        ERROR: "Banzai:ERROR",
        SHUTDOWN: "Banzai:SHUTDOWN",
        VITAL_WAIT: h,
        BASIC_WAIT: g,
        EXPIRY: 30 * 6e4,
        VITAL: {
            delay: b("BanzaiAdapter").config.MIN_WAIT || h
        },
        BASIC: {
            delay: b("BanzaiAdapter").config.MAX_WAIT || g
        },
        isEnabled: function(a) {
            return i.config.gks && i.config.gks[a]
        },
        post: function(c, d, e) {
            __p && __p();
            var f;
            (c == null || c === "") && b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
            var h = e == null ? void 0 : e.retry;
            if (i.config.disabled) return;
            if (!b("ExecutionEnvironment").canUseDOM) return;
            var k = i.config.blacklist;
            if (k && (k.indexOf && (typeof k.indexOf === "function" && k.indexOf(c) != -1))) return;
            if (j && b("lowerFacebookDomain").isValidDocumentDomain()) {
                var l;
                try {
                    l = a.top.require("Banzai")
                } catch (a) {
                    l = null
                }
                if (l) {
                    l.post.apply(l, arguments);
                    return
                }
            }
            var m = y(c, d, b("performanceAbsoluteNow")(), h),
                n = m.__meta;
            e != null && e.callback != null && (n.callback = e.callback);
            e != null && e.compress != null && (n.compress = e.compress);
            if (e != null && e.signal != null) {
                n.status = o;
                var q = [{
                    user: b("CurrentUser").getID(),
                    page_id: b("pageID"),
                    posts: [m],
                    trigger: c
                }];
                i.send(q, function() {
                    n.status = p, n.callback && n.callback()
                }, function(a) {
                    x(m, a)
                }, !0);
                if (h == null) return
            }
            t.push(m);
            var r = (f = e == null ? void 0 : e.delay) != null ? f : g;
            (A(r) || u == null || u === "") && (u = c);
            var s = b("BanzaiLazyQueue").flushQueue();
            s.forEach(function(a) {
                return K.post.apply(K, a)
            })
        },
        registerToSendWithBeacon: function(a, c, d, e) {
            if (!(navigator && navigator.sendBeacon && i.isOkToSendViaBeacon())) return !1;
            if (!a) {
                b("FBLogger")("banzai").mustfix("Banzai.registerToSendWithBeacon called without specifying a route");
                return !1
            }
            v.push({
                cb: c,
                route: a,
                onSuccess: d,
                onFailure: e
            });
            return !0
        },
        flush: function(a, c) {
            b("SetIdleTimeoutAcrossTransitions").clear(r), C(a, c)
        },
        subscribe: i.subscribe,
        canUseNavigatorBeacon: function() {
            return navigator && navigator.sendBeacon ? i.isOkToSendViaBeacon() : !1
        },
        _schedule: A,
        _store: function(a) {
            J(), b("ErrorUtils").applyWithGuard(F.store, F)
        },
        _restore: function(a) {
            J(), b("ErrorUtils").applyWithGuard(F.restore, F), A(i.config.RESTORE_WAIT || h)
        },
        _testState: function() {
            return {
                postBuffer: t,
                triggerRoute: u
            }
        },
        _unload: function() {
            b("BanzaiStreamPayloads").unload(K.post), navigator && navigator.sendBeacon && i.isOkToSendViaBeacon() && z(), i.cleanup(), i.inform(K.SHUTDOWN), t.length > 0 && ((!i.useBeacon || !D()) && (J(), b("ErrorUtils").applyWithGuard(F.store, F)))
        },
        _initialize: function() {
            b("ExecutionEnvironment").canUseDOM && (i.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
                t.length > 0 && (D() || (J(), b("ErrorUtils").applyWithGuard(F.store, F)))
            }), (K.isEnabled("enable_client_logging_clear_on_visible") || K.isEnabled("error_impact_test")) && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
                D() || b("ErrorUtils").applyWithGuard(F.restore, F)
            })) : i.setHooks(K), i.setUnloadHook(K), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
                if (c.pageType !== "normal") return;
                K._restore();
                b("NavigationMetrics").removeCurrentListener()
            }))
        }
    };
    K._initialize();
    e.exports = K
}), null);
__d("BanzaiOriginal", ["requireCond", "cr:682174"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:682174")
}), null);
__d("BanzaiODS", ["invariant", "Banzai", "Random"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a() {
            this.$1 = {}, this.$2 = {}
        }
        var c = a.prototype;
        c.setEntitySample = function(a, c) {
            this.$2[a] = b("Random").random() < c ? c : 0
        };
        c.bumpEntityKey = function(a, b, c) {
            c === void 0 && (c = 1), this.$3(a, b, c)
        };
        c.bumpFraction = function(a, b, c, d) {
            c === void 0 && (c = 1), d === void 0 && (d = 1), this.$3(a, b, c, d)
        };
        c.flush = function(a) {
            for (var c in this.$1) b("Banzai").post("ods:" + c, this.$1[c], a);
            this.$1 = {}
        };
        c.create = function() {
            return new a()
        };
        c.$3 = function(a, b, c, d) {
            __p && __p();
            c === void 0 && (c = 1);
            d === void 0 && (d = 1);
            if (a in this.$2) {
                if (this.$2[a] <= 0) return;
                c /= this.$2[a]
            }
            var e = this.$1[a] || (this.$1[a] = {}),
                f = e[b] || (e[b] = [0]);
            c = Number(c);
            d = Number(d);
            if (!isFinite(c) || !isFinite(d)) return;
            f[0] += c;
            arguments.length >= 4 && (f[1] || (f[1] = 0), f[1] += d)
        };
        return a
    }();
    var h = new a();
    b("Banzai").subscribe(b("Banzai").SEND, function() {
        return h.flush()
    });
    e.exports = h
}), null);
__d("SubscriptionList", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b) {
            this.$1 = [], this.$2 = a, this.$3 = b
        }
        var b = a.prototype;
        b.add = function(a) {
            var b = this,
                c = {
                    callback: a
                };
            this.$1.push(c);
            this.$2 && this.$1.length === 1 && this.$2();
            return {
                remove: function() {
                    var a = b.$1.indexOf(c);
                    a !== -1 || g(0, 298);
                    b.$1.splice(a, 1);
                    b.$3 && b.$1.length === 0 && b.$3()
                }
            }
        };
        b.getCallbacks = function() {
            return this.$1.map(function(a) {
                return a.callback
            })
        };
        b.fireCallbacks = function(a) {
            this.getCallbacks().forEach(function(b) {
                b(a)
            })
        };
        return a
    }();
    e.exports = a
}), null);
__d("TimeSpentPageTransitionCause", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        PAGE_LOAD: "load",
        PAGE_UNLOAD: "unload",
        TRANSITION: "transition",
        OPEN_OVERLAY_VIEW: "open_overlay_view",
        REPLACE_OVERLAY_VIEW: "replace_overlay_view",
        CLOSE_OVERLAY_VIEW: "close_overlay_view"
    })
}), null);
__d("ScriptPath", ["ErrorUtils", "SubscriptionList", "TimeSlice", "TimeSpentPageTransitionCause", "WebStorage", "isInIframe"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "sp_pi",
        h = 1e3 * 30,
        i = null,
        j = null,
        k = new(b("SubscriptionList"))(),
        l = null,
        m = [],
        n = b("TimeSlice").guard(function(a, c) {
            k.getCallbacks().forEach(function(d) {
                b("ErrorUtils").applyWithGuard(function() {
                    d({
                        source: i,
                        dest: j,
                        cause: a,
                        extraData: c
                    })
                })
            })
        }, "ScriptPath Notifying callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        });

    function o() {
        return j ? j.scriptPath : void 0
    }

    function p() {
        var a = b("WebStorage").getSessionStorage();
        if (!a || b("isInIframe")()) return;
        b("WebStorage").setItemGuarded(a, g, JSON.stringify({
            pageInfo: j,
            clickPoint: l,
            time: Date.now()
        }))
    }

    function a() {
        var a = b("WebStorage").getSessionStorageForRead();
        if (!a) return;
        var c = a.getItem(g);
        if (c) {
            c = JSON.parse(c);
            c && (c.time < Date.now() - h && (a = b("WebStorage").getSessionStorage(), a && a.removeItem(g)), j = c.pageInfo, l = c.clickPoint, j && (j.restored = !0))
        }
    }
    a();
    c = {
        set: function(a, b, c) {
            i = j, j = {
                scriptPath: a,
                categoryToken: b,
                extraData: c || {}
            }, m = [], window._script_path = a, n()
        },
        openOverlayView: function(a, c, d) {
            if (!a) return;
            var e = m.length;
            (e === 0 || m[e - 1] !== a) && (i = Object.assign({}, j), j && (j.topViewEndpoint = a), d && d.replaceTopOverlay && e > 0 ? (m[e - 1] = a, n(b("TimeSpentPageTransitionCause").REPLACE_OVERLAY_VIEW, c)) : (m.push(a), n(b("TimeSpentPageTransitionCause").OPEN_OVERLAY_VIEW, c)))
        },
        closeOverlayView: function(a, c) {
            a = m.lastIndexOf(a);
            if (a === -1) return;
            i = Object.assign({}, j);
            j && (a > 0 ? j.topViewEndpoint = m[a - 1] : j.topViewEndpoint = null);
            m = m.slice(0, a);
            n(b("TimeSpentPageTransitionCause").CLOSE_OVERLAY_VIEW, c)
        },
        setClickPointInfo: function(a) {
            l = a, p()
        },
        getClickPointInfo: function() {
            return l
        },
        getScriptPath: o,
        getCategoryToken: function() {
            return j ? j.categoryToken : void 0
        },
        getEarlyFlushPage: function() {
            var a;
            return (a = j) == null ? void 0 : (a = a.extraData) == null ? void 0 : a.ef_page
        },
        getTopViewEndpoint: function() {
            var a = m.length;
            return a > 0 ? m[a - 1] : o()
        },
        getPageInfo: function() {
            return j
        },
        getSourcePageInfo: function() {
            return i
        },
        subscribe: function(a) {
            return k.add(b("TimeSlice").guard(a, "ScriptPath.subscribe"))
        },
        shutdown: function() {
            p()
        }
    };
    e.exports = c
}), null);
__d("AbstractErrorSignal", ["invariant", "BanzaiODS", "BaseErrorUtils", "ScriptPath", "SessionName", "SiteData"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();
    var h = [],
        i = !0;
    a = function() {
        __p && __p();

        function a() {
            this.constructor !== a || g(0, 4467)
        }
        var c = a.prototype;
        c.logJSError = function(a, c) {
            __p && __p();
            c = c || {};
            c.svn_rev = b("SiteData").client_revision;
            c.push_phase = b("SiteData").push_phase;
            c.script_path = b("ScriptPath").getScriptPath();
            c.extra = c.extra || {};
            c.extra.hrm = b("SiteData").be_mode;
            var d = c.extra.type || "error";
            i && a === "onerror" && d === "error" && (c.extra.extra = c.extra.extra || [], c.extra.extra.push("first_error"), i = !1);
            c.extra.ancestors = h.slice();
            c.extra.ancestor_hash = b("BaseErrorUtils").getSimpleHash(c.extra.name + c.extra.stack);
            c.extra.ir_on = b("SiteData").ir_on || !1;
            h.length < 15 && h.push(c.extra.ancestor_hash);
            d = (b("SessionName").getName() || "-") + "/-";
            this.performCounterLogging("javascript_error");
            this.performSignalLogging("javascript_error", {
                c: a,
                a: d,
                m: c
            })
        };
        c.performCounterLogging = function(a) {
            b("BanzaiODS").bumpEntityKey("js_error_reporting", "error_signal.category." + a), a === "javascript_error" && b("BanzaiODS").bumpEntityKey("js_error_reporting", "error_signal.sent")
        };
        c.performSignalLogging = function(a, b) {
            g(0, 4468)
        };
        return a
    }();
    e.exports = a
}), null);
__d("isAdsExcelAddinURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("isValidURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain())
    }
    e.exports = a
}), null);
__d("AsyncSignal", ["Promise", "ErrorUtils", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isBonfireURI", "isFacebookURI", "isMessengerDotComURI", "isValidURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g;

    function a(a, c) {
        this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri)
    }
    a.prototype.setHandler = function(a) {
        this.handler = a;
        return this
    };
    a.prototype.setTimeout = function(a) {
        this.timeout = a;
        return this
    };
    a.prototype.send = function() {
        b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    a.prototype._send = function() {
        __p && __p();
        var a = this.handler,
            c = this.data;
        c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
        var d = b("ZeroRewrites").rewriteURI(new(b("URI"))(this.uri));
        d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isBonfireURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidURI")(d);
        if (d) Object.assign(c, b("getAsyncParams")("POST"));
        else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
        var e = b("QueryString").appendToUrl(this.uri, c);
        g || (g = new(b("Promise"))(function(a) {
            b("Run").onAfterLoad(a)
        }));
        d = g.then(function() {
            return new(b("Promise"))(function(a, b) {
                var c = new Image();
                c.onload = a;
                c.onerror = c.onabort = b;
                c.src = e
            })
        });
        if (a) {
            var f = !1,
                h = b("memoize")(function() {
                    b("ErrorUtils").applyWithGuard(a, null, [f])
                });
            b("promiseDone")(d.then(function() {
                f = !0, h()
            }, h));
            this.timeout && setTimeout(h, this.timeout)
        }
        return this
    };
    e.exports = a
}), null);
__d("XJavaScriptLogviewSiteCategory", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        MBASIC: "m_basic",
        MTOUCH: "m_touch",
        WWW: "www"
    })
}), null);
__d("ErrorSignal", ["AbstractErrorSignal", "AsyncSignal", "Banzai", "BanzaiODS", "ErrorSignalConfig", "XJavaScriptLogviewSiteCategory", "gkx"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "js_error_logging";
    c = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.performCounterLogging = function(c) {
            a.prototype.performCounterLogging.call(this, c), c === "javascript_error" && b("BanzaiODS").bumpEntityKey("js_error_reporting", "error_signal." + b("XJavaScriptLogviewSiteCategory").WWW + ".sent")
        };
        d.performSignalLogging = function(a, c) {
            b("gkx")("678675") ? b("Banzai").post(g, c) : new(b("AsyncSignal"))(b("ErrorSignalConfig").uri, {
                c: a,
                m: JSON.stringify(c)
            }).send()
        };
        return c
    }(b("AbstractErrorSignal"));
    d = new c();
    e.exports = d;
    a.ErrorSignal = d
}), null);
__d("throttle", ["TimeSlice", "TimeSliceInteractionSV", "setTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c, d) {
        return g(a, c, d, b("setTimeout"), !1)
    }
    Object.assign(a, {
        acrossTransitions: function(a, c, d) {
            return g(a, c, d, b("setTimeoutAcrossTransitions"), !1)
        },
        withBlocking: function(a, c, d) {
            return g(a, c, d, b("setTimeout"), !0)
        },
        acrossTransitionsWithBlocking: function(a, c, d) {
            return g(a, c, d, b("setTimeoutAcrossTransitions"), !0)
        }
    });

    function g(a, c, d, e, f) {
        __p && __p();
        var g = c == null ? 100 : c,
            h, i, j = 0,
            k = null,
            l = [],
            m = b("TimeSlice").guard(function() {
                __p && __p();
                j = Date.now();
                if (i) {
                    var b = function(b) {
                            a.apply(h, b)
                        }.bind(null, i),
                        c = l.length;
                    while (--c >= 0) b = l[c].bind(null, b);
                    l = [];
                    b();
                    i = null;
                    k = e(m, g)
                } else k = null
            }, "throttle_" + g + "_ms", {
                propagationType: b("TimeSlice").PropagationType.EXECUTION
            });
        m.__SMmeta = a.__SMmeta;
        return function() {
            b("TimeSliceInteractionSV").ref_counting_fix && l.push(b("TimeSlice").getGuardedContinuation("throttleWithContinuation")), i = arguments, h = this, d !== void 0 && (h = d), (k === null || Date.now() - j > g) && (f ? m() : k = e(m, 0))
        }
    }
    e.exports = a
}), null);
__d("ErrorLogging", ["ErrorSignal", "ErrorUtils", "JSErrorExtra", "JSErrorLoggingConfig", "JSErrorPlatformColumns", "performanceNow", "throttle"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        var c = a.extra || {},
            d = {};
        Object.keys(b("JSErrorExtra")).forEach(function(a) {
            b("JSErrorExtra")[a] && (d[a] = !0)
        });
        Object.keys(c).forEach(function(a) {
            c[a] ? d[a] = !0 : d[a] && delete d[a]
        });
        a.extra = Object.keys(d)
    }

    function h(a) {
        b("JSErrorPlatformColumns").app_id !== void 0 && (a.app_id = b("JSErrorPlatformColumns").app_id), b("JSErrorPlatformColumns").access_token !== void 0 && (a.access_token = b("JSErrorPlatformColumns").access_token)
    }

    function i(a) {
        g(a);
        h(a);
        var c = a.category || "onerror";
        b("ErrorSignal").logJSError(c, {
            error: a.name || a.message,
            extra: a
        })
    }

    function a() {
        __p && __p();
        var a = b("performanceNow")();
        for (var c = k, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var f;
            if (d) {
                if (e >= c.length) break;
                f = c[e++]
            } else {
                e = c.next();
                if (e.done) break;
                f = e.value
            }
            f = f;
            var g = f[0];
            f = f[1];
            f < a && k["delete"](g)
        }
    }
    var j = b("JSErrorLoggingConfig").reportInterval,
        k = new Map(),
        l = b("throttle")(a, 500, null);

    function c(a) {
        if (a.message && a.message.toLowerCase().startsWith("script error")) return;
        var c = a.name + a.message + a.type,
            d = k.get(c),
            e = b("performanceNow")();
        (d == null || d + j < e) && (k.set(c, e), l(), i(a))
    }
    b("ErrorUtils").addListener(c);
    e.exports = {
        defaultJSErrorHandler: c
    }
}), null);
__d("MutationObserver", [], (function(a, b, c, d, e, f) {
    __p && __p();
    b = function() {
        "use strict";

        function a(a) {}
        var b = a.prototype;
        b.observe = function(a, b) {};
        b.disconnect = function() {};
        b.takeRecords = function() {
            return null
        };
        return a
    }();
    c = a.MutationObserver || a.WebKitMutationObserver || b;
    e.exports = c
}), null);
__d("PageDOMMutationObserver", ["ExecutionEnvironment", "MutationObserver"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new(b("MutationObserver"))(function() {}),
        h = !1,
        i = {
            tryStart: function() {
                __p && __p();
                var a = typeof g.takeRecords === "function";
                if (!b("ExecutionEnvironment").canUseDOM || !a) {
                    i.tryStart = function() {};
                    i.consumePendingDOMMutations = function() {
                        return 0
                    };
                    return
                }
                if (!window.Env || !document.body || window._splashBody) return;
                i.tryStart = function() {};
                if (!window.Env.dom_mutation_flag) return;
                h = !0;
                g.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            },
            consumePendingDOMMutations: function() {
                var a = g.takeRecords();
                return a != null ? a.length : 0
            },
            isSupported: function() {
                return h
            }
        };
    e.exports = i
}), null);
__d("ArtilleryJSPointTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        ASYNC_REQUEST_SENT: 1,
        ASYNC_RESPONSE_RECEIVED: 2,
        TRACE_STARTED: 3,
        TRACE_ENDED: 4
    })
}), null);
__d("ArtilleryTraceIDUtils", ["Alea", "FBLogger", "ServerNonce"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        h = b("Alea")(b("ServerNonce").ServerNonce),
        i = function() {
            var a = 0,
                b = 0,
                c = "";
            for (var d = 10; d >= 0; d--) a < 6 && (b = Math.floor(2147483648 * h()), a = 32), d === 0 && (b &= 7), c = g.charAt(b & 63) + c, b >>= 6, a -= 6;
            return c
        };
    a = {
        newTraceId: function() {
            var a;
            for (var c = 3; c > 0; c--) {
                a = i();
                if (a != this.getDummyId()) return a
            }
            b("FBLogger")("FIXME").mustfix("failed to generate valid Fbtrace id");
            return this.getDummyId()
        },
        newObjectId: function() {
            return this.newTraceId()
        },
        getDummyId: function() {
            return "AAAAAAAAAAA"
        },
        traceIdToBucket: function(a) {
            a = a.charAt(a.length - 1);
            return g.indexOf(a) % 32
        }
    };
    e.exports = a
}), null);
__d("LogBuffer", ["CircularBuffer"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = a.__fbNativeSetTimeout || a.setTimeout,
        h = 5e3,
        i = {},
        j = {};
    c = {
        write: function(a, c) {
            var d = i[a] = i[a] || new(b("CircularBuffer"))(h);
            d.write(c);
            j[a] && j[a].forEach(function(a) {
                try {
                    a(c)
                } catch (a) {}
            })
        },
        read: function(a) {
            if (!i[a]) return [];
            else return i[a].read()
        },
        tail: function(a, b) {
            __p && __p();
            if (typeof b !== "function") return;
            j[a] = j[a] || [];
            j[a].push(b);
            if (i[a]) {
                a = i[a];
                a.read().forEach(function(a) {
                    try {
                        b(a)
                    } catch (a) {}
                })
            }
        },
        expand: function(a, c) {
            var d = i[a];
            d ? d.expand(c) : i[a] = new(b("CircularBuffer"))(c)
        },
        clear: function(a) {
            i[a] && g(function() {
                i[a].clear()
            }, 0)
        }
    };
    e.exports = c
}), null);
__d("Heartbeat", ["Env", "ExecutionContextObservers", "FBLogger", "LogBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    c = function(c) {
        __p && __p();
        babelHelpers.inheritsLoose(d, c);

        function d() {
            var a, b;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (a = b = c.call.apply(c, [this].concat(e)) || this, b.$HeartbeatObserver1 = null, b.$HeartbeatObserver2 = 33, b.$HeartbeatObserver3 = 60, b.$HeartbeatObserver4 = null, b.$HeartbeatObserver5 = null, b.$HeartbeatObserver6 = {}, b.$HeartbeatObserver7 = null, b.$HeartbeatObserver8 = [], b.$HeartbeatObserver9 = 1, b.$HeartbeatObserver10 = null, a) || babelHelpers.assertThisInitialized(b)
        }
        var e = d.prototype;
        e.onNewContextCreatedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            return null
        };
        e.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return null
        };
        e.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absBeginTimeMs;
            c = a.absEndTimeMs;
            d = a.name;
            a = a.isRoot;
            a && b != null && c != null && (this.$HeartbeatObserver6[d] ? (this.$HeartbeatObserver11({
                type: "ignored_exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver11({
                type: "ignored_exec",
                timeMs: c
            }, !1)) : (this.$HeartbeatObserver11({
                type: "exec",
                timeMs: b
            }, !0), this.$HeartbeatObserver11({
                type: "exec",
                timeMs: c
            }, !1)))
        };
        e.__getExpiryCallback = function() {
            var a = this,
                d = c.prototype.__getExpiryCallback.call(this),
                e = b("performanceAbsoluteNow")();
            this.$HeartbeatObserver8.push([e, d]);
            return function() {
                d(), a.$HeartbeatObserver12()
            }
        };
        e.onEnable = function() {
            __p && __p();
            var c = b("Env").timeslice_heartbeat_config || {};
            this.$HeartbeatObserver2 = c.pollIntervalMs || this.$HeartbeatObserver2;
            this.$HeartbeatObserver3 = c.idleGapThresholdMs || this.$HeartbeatObserver3;
            this.$HeartbeatObserver6 = c.ignoredTimesliceNames || this.$HeartbeatObserver6;
            c = a.__fbNativeSetInterval || a.setInterval;
            this.$HeartbeatObserver5 = c(this.$HeartbeatObserver13.bind(this), this.$HeartbeatObserver2);
            c = b("performanceAbsoluteNow")();
            this.$HeartbeatObserver4 = {
                type: "beat",
                timeMs: c
            };
            this.$HeartbeatObserver7 = c + this.$HeartbeatObserver2;
            this.$HeartbeatObserver10 = c
        };
        e.onDisable = function() {
            this.$HeartbeatObserver5 && clearInterval(this.$HeartbeatObserver5), this.$HeartbeatObserver5 = null
        };
        e.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.HEARTBEAT
        };
        e.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.HEARTBEAT
        };
        e.$HeartbeatObserver14 = function(a) {
            return a.type == "beat" || a.type == "ignored_exec"
        };
        e.$HeartbeatObserver11 = function(a, c) {
            __p && __p();
            if (this.$HeartbeatObserver4 == null) {
                b("FBLogger")("FIXME").mustfix("lastEvent should never be null");
                this.$HeartbeatObserver4 = a;
                return
            }
            var d = this.$HeartbeatObserver4.timeMs,
                e = a.timeMs;
            if (c) {
                c = this.$HeartbeatObserver7 + this.$HeartbeatObserver3;
                c = e > c;
                if (this.$HeartbeatObserver4.type === "exec") a.type === "exec" ? this.$HeartbeatObserver15(d, e, c ? "likely_btwn_exec" : "btwn_exec") : this.$HeartbeatObserver14(a) && this.$HeartbeatObserver15(d, e, c ? "likely_post_exec" : "post_exec");
                else if (this.$HeartbeatObserver14(this.$HeartbeatObserver4))
                    if (a.type === "exec") this.$HeartbeatObserver15(d, e, c ? "likely_pre_exec" : "pre_exec");
                    else if (this.$HeartbeatObserver14(a) && c) {
                    c = a.type === "beat" ? "delayed_beat" : "delayed_beat_btwn_ignored";
                    this.$HeartbeatObserver15(d, e, c)
                }
            }
            this.$HeartbeatObserver4 = a
        };
        e.$HeartbeatObserver15 = function(a, c, d) {
            a < c && b("LogBuffer").write("time_slice_heartbeat", {
                begin: a,
                end: c,
                id: this.$HeartbeatObserver9++,
                parentID: null,
                guard: "browser time: " + d,
                representsExecution: !1
            })
        };
        e.$HeartbeatObserver13 = function() {
            var a = b("performanceAbsoluteNow")();
            this.$HeartbeatObserver12(a);
            this.$HeartbeatObserver11({
                type: "beat",
                timeMs: a
            }, !0);
            this.$HeartbeatObserver7 = a + this.$HeartbeatObserver2
        };
        e.$HeartbeatObserver12 = function(a) {
            __p && __p();
            a = a || b("performanceAbsoluteNow")();
            while (this.$HeartbeatObserver8.length > 0) {
                var c = this.$HeartbeatObserver8[0],
                    d = c[0];
                c = c[1];
                if (a - d > h.MAX_SINGLE_INTEREST_TIME_MS) c(), this.$HeartbeatObserver8.shift();
                else break
            }
            d = this.$HeartbeatObserver10;
            a - d > h.MAX_ENABLE_TO_DISABLE_TIME_MS && this.$HeartbeatObserver16()
        };
        e.$HeartbeatObserver16 = function() {
            __p && __p();
            for (var a = this.$HeartbeatObserver8, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                d[0];
                d = d[1];
                d()
            }
            this.$HeartbeatObserver8 = []
        };
        return d
    }(b("OnDemandExecutionContextObserver"));
    var g = new c();
    b("TimeSlice").registerExecutionContextObserver(g);
    var h = {
        MAX_SINGLE_INTEREST_TIME_MS: 6e4,
        MAX_ENABLE_TO_DISABLE_TIME_MS: 4 * 6e4,
        get: function() {
            return g
        },
        enableHeartbeat: function() {},
        disablePageHeartbeat: function() {}
    };
    e.exports = h
}), 3);
__d("TimeSliceInteractionExtraSaver", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        EXAMPLE_COMPONENT_SAVER: "example_component_saver",
        ADS_WAIT_TIME_SAVER: "ads_wait_time_saver",
        ADS_FLUX_PROFILER_SAVER: "ads_flux_profiler_saver",
        TIMESLICE_EXECUTION_SAVER: "timeslice_execution_saver",
        INTERACTION_ASYNC_REQUEST_JOIN_DATA: "interaction_async_request_join_data",
        RESOURCES_SAVER: "resources_saver",
        USER_TIMING_SAVER: "user_timing_saver"
    })
}), null);
__d("InteractionAsyncRequestJoinDataSource", ["ArtilleryAsyncRequestTracingAnnotator", "FBLogger", "TimeSliceInteractionExtraSaver"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        registerInteraction: function(a) {
            __p && __p();
            a.countDown();
            var c = a.traceID,
                d = a.name;
            if (c == null) {
                b("FBLogger")("InteractionAsyncRequestJoinDataSource").mustfix("got a null trace_id for interaction " + d + ". Typically this indicates that only lite tracing was on, which this hook does not support");
                return
            }
            var e = b("ArtilleryAsyncRequestTracingAnnotator").startTracingWindow(c, d);
            a.registerOnBeforeFinish(function(a) {
                var c = e.finishTracingWindow();
                a.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").INTERACTION_ASYNC_REQUEST_JOIN_DATA, "entries", c)
            });
            a.registerOnCleanup(function() {
                e.finishTracingWindow()
            })
        }
    };
    e.exports = a
}), null);
__d("TSIAdsReliabilityHook", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        callbacks: [],
        register: function(a) {
            g.callbacks.push(a)
        },
        event: function(a, b, c) {
            g.callbacks.forEach(function(d) {
                return d(a, b, c)
            })
        }
    };
    e.exports = g
}), null);
__d("TimeSliceExecutionLogger", ["ExecutionContextObservers", "IntervalTrackingBoundedBuffer", "OnDemandExecutionContextObserver", "TimeSlice", "TimingAnnotations", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 1e4,
        h = {
            BEGIN: "b",
            END: "e"
        },
        i = new(b("TimingAnnotations"))(),
        j;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            var c, d;
            for (var e = arguments.length, f = new Array(e), h = 0; h < e; h++) f[h] = arguments[h];
            return (c = d = a.call.apply(a, [this].concat(f)) || this, d.$TimeSliceExecutionLogger1 = new(b("IntervalTrackingBoundedBuffer"))(g), c) || babelHelpers.assertThisInitialized(d)
        }
        var d = c.prototype;
        d.onNewContextCreatedWhileEnabled = function(a, c, d) {
            if (a) return b("performanceAbsoluteNow")();
            else return null
        };
        d.onBeforeContextStartedWhileEnabled = function(a, b, c) {
            c = {
                type: h.BEGIN,
                ts: a.absBeginTimeMs
            };
            b !== null && (c.creation = b);
            this.$TimeSliceExecutionLogger1.pushElement(c);
            a = j;
            j = null;
            return a
        };
        d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return c
        };
        d.onAfterContextEndedWhileEnabled = function(a, b, c, d) {
            b = a.absEndTimeMs;
            d = {
                type: h.END,
                ts: b,
                name: a.name,
                id: a.contextID
            };
            j && (d.annotations = j.prepareToSend());
            this.$TimeSliceExecutionLogger1.pushElement(d);
            j = c
        };
        d.annotateCurrentExecution = function() {
            if (!this.isEnabled()) return i;
            j == null && (j = new(b("TimingAnnotations"))());
            return j
        };
        d.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.TIMESLICE_EXECUTION_LOGGER
        };
        d.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.TIMESLICE_EXECUTION_LOGGER
        };
        d.getBuffer = function() {
            return this.$TimeSliceExecutionLogger1
        };
        return c
    }(b("OnDemandExecutionContextObserver"));
    c = new a();
    b("TimeSlice").registerExecutionContextObserver(c);
    e.exports = c
}), null);
__d("TimeSliceExecutionDataSource", ["TimeSliceExecutionLogger", "TimeSliceInteractionExtraSaver", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        registerInteraction: function(a) {
            a.countDown();
            var c = b("performanceAbsoluteNow")(),
                d = b("TimeSliceExecutionLogger").getBuffer().open(),
                e = b("TimeSliceExecutionLogger").expressInterest();
            a.registerOnBeforeFinish(function(a) {
                e();
                var f = d.close(),
                    g = d.hasOverflown();
                a.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").TIMESLICE_EXECUTION_SAVER, "entries", {
                    startTime: c,
                    entries: f,
                    hasOverflown: g
                })
            });
            a.registerOnCleanup(function() {
                e(), d.close()
            })
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionBootloadForPost", ["Bootloader"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        b("Bootloader").loadModules(["Banzai", "BanzaiStream", "BanzaiODS", "ResourceTimingBootloaderHelper", "TimeSliceHelper", "SnappyCompressUtil", "PerfXSharedFields"], a, "TimeSliceInteractionBootloadForPost")
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionReliability", ["ifRequired"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = "timeslice_interactions",
        h = !0,
        i = new Map();

    function j(a, b, c) {
        return b + ":" + c + ":" + a
    }

    function a(a, c, d) {
        a = j(a, c, d);
        var f = b("ifRequired")("BanzaiODS", function(a) {
            return a
        });
        if (!f) {
            c = i.get(a) || 0;
            i.set(a, c + 1)
        } else h && (i.forEach(function(a, b) {
            return f.bumpEntityKey(g, b, a)
        }), h = !1), f.bumpEntityKey(g, a, 1)
    }
    e.exports = {
        bumpLifecycleCounter: a
    }
}), null);
__d("compactArray", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c = 0; c < a.length; ++c) {
            var d = a[c];
            d != null && b.push(d)
        }
        return b
    }
    e.exports = a
}), null);
__d("performanceNavigationStart", ["performance"], (function(a, b, c, d, e, f) {
    __p && __p();
    if (b("performance").now)
        if (b("performance").timing && b("performance").timing.navigationStart) a = function() {
            return b("performance").timing.navigationStart
        };
        else {
            if (typeof window._cstart === "number") a = function() {
                return window._cstart
            };
            else {
                var g = Date.now();
                a = function() {
                    return g
                }
            }
            a.isPolyfilled = !0
        }
    else a = function() {
        return 0
    }, a.isPolyfilled = !0;
    e.exports = a
}), null);
__d("TimeSliceInteraction", ["invariant", "Arbiter", "ArtilleryComponentSaverOptions", "ArtilleryJSPointTypes", "ArtilleryTraceIDUtils", "Bootloader", "CircularBuffer", "ErrorUtils", "FBLogger", "Heartbeat", "InteractionAsyncRequestJoinDataSource", "ProfilingCounters", "ProfilingCountersStore", "Random", "ResourceTimingsStore", "ResourceTypes", "TimeSlice", "TimeSliceExecutionDataSource", "TimeSliceInteractionBootloadForPost", "TimeSliceInteractionExtraSaver", "TimeSliceInteractionReliability", "TimeSliceInteractionSV", "TimingAnnotations", "TSIAdsReliabilityHook", "Visibility", "compactArray", "nullthrows", "performance", "performanceAbsoluteNow", "performanceNavigationStart", "requestIdleCallbackAcrossTransitions", "requireWeak"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    b("requireWeak")("AsyncProfiler", function(a) {
        h = a
    });
    var i;
    b("requireWeak")("ArtilleryUserTimingProfiler", function(a) {
        i = a
    });
    var j = {
        pointGroup: null,
        type: null,
        isPointOfInterest: null
    };
    d = 250;
    var k = new(b("CircularBuffer"))(d);
    new Map();
    f = 100;
    var l = new(b("CircularBuffer"))(f),
        m = new Map(),
        n = !1,
        o = null;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function(a, b) {
        if (o) return;
        n = !0
    });
    var p = new(b("TimingAnnotations").EmptyTimingAnnotations)(),
        q = new(b("TimingAnnotations").EmptyTraceTimingAnnotations)(),
        r = "artillery_javascript_actions",
        s = "artillery_javascript_lite_actions";

    function c(a) {
        var b = "visibility_state_" + a,
            c = {
                isPointOfInterest: !0,
                pointGroup: "visibility_state_changes"
            };
        return function() {
            return z.informGlobally(b, c)
        }
    }
    b("Visibility") && b("Visibility").addListener && (b("Visibility").addListener(b("Visibility").HIDDEN, c("hidden")), b("Visibility").addListener(b("Visibility").VISIBLE, c("visible")));

    function t(a) {
        if (b("Visibility")) {
            var c = b("Visibility").isHidden() ? b("Visibility").HIDDEN : b("Visibility").VISIBLE;
            a.inform("visibility_state_" + c, {
                pointGroup: "visibility_state_changes"
            })
        }
    }

    function u(a) {
        return n && a === "Event"
    }

    function v(a) {
        __p && __p();
        var c = b("TimeSliceInteractionSV").interaction_to_coinflip,
            d = b("TimeSliceInteractionSV").interaction_to_lite_coinflip,
            e;
        u(a) ? e = 1 : e = Object.prototype.hasOwnProperty.call(c, a) ? c[a] : b("TimeSliceInteractionSV").default_rate;
        c = Object.prototype.hasOwnProperty.call(d, a) ? d[a] : b("TimeSliceInteractionSV").lite_default_rate;
        d = new Set();
        b("Random").coinflip(c) && d.add("lite");
        b("Random").coinflip(e) && d.add("full");
        a = 0;
        d.has("full") ? a = 1 / e : e === 0 ? a = 0 : a = 1 - 1 / e;
        e = 0;
        d.has("lite") && (e = 1 / c);
        return {
            modes: d,
            probability: a,
            liteProbability: e
        }
    }

    function w() {
        return m.size !== 0
    }

    function x(a) {
        return babelHelpers["extends"]({}, a, {
            annotations: a.annotations.prepareToSend()
        })
    }

    function y(a, c) {
        __p && __p();
        c = b("ProfilingCountersStore").getNestedTotalsByAttributions(c, a);
        a = c.attributed;
        c = c.unattributed;
        var d = {};
        a = Object.entries(a);
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                g = f[0];
            f = f[1];
            d["internal:" + g] = f
        }
        g = Object.entries(c);
        for (var f = 0; f < g.length; f++) {
            a = g[f];
            e = a[0];
            c = a[1];
            d["external:" + e] = c
        }
        return d
    }
    var z = function() {
        "use strict";
        __p && __p();
        c.create = function(a, b, d) {
            b === void 0 && (b = []);
            d === void 0 && (d = !1);
            a = new c(a, b, d);
            a.trace().addStringAnnotation("initiatorType", "manually_ended");
            return a
        };
        c.informGlobally = function(a, c) {
            if (!w()) return p;
            var d = b("performanceAbsoluteNow")(),
                e = new(b("TimingAnnotations"))(),
                f = babelHelpers["extends"]({
                    ts: d,
                    name: a,
                    annotations: e,
                    rawStackTrace: c && c.rawStackTrace || null,
                    guardStack: b("TimeSlice").getGuardNameStack()
                }, j, c);
            e.addStringAnnotation("global_point", "1");
            m.forEach(function(a) {
                return a.push(f)
            });
            return e
        };
        c.informOnPage = function(a, c) {
            var d = b("performanceAbsoluteNow")(),
                e = new(b("TimingAnnotations"))();
            d = babelHelpers["extends"]({
                ts: d,
                name: a,
                annotations: e,
                rawStackTrace: c && c.rawStackTrace || null,
                guardStack: []
            }, j, c);
            k.write(d);
            return e
        };

        function c(a, c, d) {
            __p && __p();
            var e = this;
            c === void 0 && (c = []);
            d === void 0 && (d = !1);
            this.$2 = null;
            this.$4 = !0;
            this.$5 = null;
            this.$6 = [];
            this.$7 = !1;
            this.$8 = null;
            this.$12 = [];
            this.$13 = [];
            this.$14 = [];
            this.$15 = [];
            this.$16 = new(b("TimingAnnotations").TraceTimingAnnotations)();
            this.$17 = new Map();
            this.$20 = null;
            this.$21 = 1;
            this.$24 = 1;
            this.$28 = !0;
            this.$29 = {};
            var f = v(a),
                g = f.modes,
                j = f.probability;
            f = f.liteProbability;
            this.$18 = g;
            this.$1 = a;
            this.$22 = j;
            this.$23 = f;
            this.$19 = d ? b("performanceNavigationStart")() : b("performanceAbsoluteNow")();
            this.$27 = new Map();
            this.$11 = new Set();
            j = this.inform("trace_started", {
                type: b("ArtilleryJSPointTypes").TRACE_STARTED,
                pointGroup: "e2e",
                isPointOfInterest: !0,
                ts: this.$19
            });
            b("performance") && b("performance").now && j.addStringAnnotation("offset_from_start_of_req_ms", b("performance").now().toString());
            t(this);
            m.set(this, []);
            if (this.isEnabledForMode("full")) {
                b("TimeSliceInteractionSV").enable_heartbeat && (this.$5 = b("Heartbeat").get().expressInterest());
                h && h.enabled() && (this.$9 = h.startRecording());
                f = b("TimeSliceInteractionSV").user_timing_coinflip || 0;
                i && f && b("Random").coinflip(f) && (this.$10 = i.startRecording());
                this.$3 = b("ArtilleryTraceIDUtils").newTraceId()
            }
            g.has("full") && l.write({
                interaction: this,
                ts: b("performanceAbsoluteNow")()
            });
            if (g.size === 0) this.disable(!0);
            else {
                if (this.isEnabledForMode("full")) {
                    b("TimeSliceInteractionSV").enable_heartbeat && (this.$5 = b("Heartbeat").get().expressInterest());
                    b("TimeSliceInteractionSV").force_async_request_tracing_on && c.push(b("InteractionAsyncRequestJoinDataSource"));
                    d = b("ProfilingCounters").getObserver().expressInterest();
                    this.$14.push(d);
                    u(a) && (o = b("nullthrows")(this.$3), n = !1);
                    this.$25 = b("ProfilingCountersStore").getInstance().open();
                    this.$26 = b("TimeSlice").getBuffer().open();
                    this.$14.push(function() {
                        e.$26 && e.$26.close(), e.$25 && e.$25.close()
                    })
                }
                var k = {
                    trace: function() {
                        return e.trace()
                    },
                    countDown: function() {
                        return e.countDown()
                    },
                    forceFinish: function() {
                        return e.finish(!0)
                    },
                    registerOnBeforeFinish: function(a) {
                        return e.registerOnBeforeFinish(a)
                    },
                    registerOnCleanup: function(a) {
                        return e.registerOnCleanUp(a)
                    },
                    traceID: this.$3,
                    name: a
                };
                b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.push(b("TimeSliceExecutionDataSource"));
                var p = b("compactArray")(c.map(function(a) {
                    e.$24++;
                    return a.registerInteraction(k)
                }));
                this.$14.push(function() {
                    p.forEach(function(a) {
                        return a.remove()
                    })
                });
                this.$13.push(function() {
                    e.trace().addStringAnnotation("wait_for_count", "" + e.$24)
                })
            }
            for (var j = g, f = Array.isArray(j), d = 0, j = f ? j : j[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                if (f) {
                    if (d >= j.length) break;
                    c = j[d++]
                } else {
                    d = j.next();
                    if (d.done) break;
                    c = d.value
                }
                g = c;
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("starting", a, g)
            }
        }
        var d = c.prototype;
        d.recordWithExtraSaver = function(a, b, c) {
            if (this.isEnabled()) {
                var d = this.$27.get(a) || {};
                b != null && c != null && (d[b] = c);
                this.$27.set(a, d)
            }
            return this
        };
        d.countDown = function() {
            this.$24--, this.$24 === 0 ? this.$20 && this.$20() : this.$24 < 0 && b("FBLogger")("TimeSliceInteraction").warn("some hook counted down twice")
        };
        d.countUp = function() {
            this.$24 > 0 ? ++this.$24 : b("FBLogger")("TimeSliceInteraction").warn("Attempting to countUp on finished interaction")
        };
        d.inform = function(a, c) {
            var d = c != null && c.isPointOfInterest;
            if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && d)) return p;
            d = c && c.ts || b("performanceAbsoluteNow")();
            var e = new(b("TimingAnnotations"))(),
                f = this.isEnabledForMode("full") ? b("TimeSlice").getGuardNameStack() : [];
            this.$12.push(babelHelpers["extends"]({
                ts: d,
                name: a,
                annotations: e,
                rawStackTrace: c && c.rawStackTrace || null,
                guardStack: f
            }, j, c));
            return e
        };
        d.informPointWithOverride = function(a, c) {
            __p && __p();
            var d = b("performanceAbsoluteNow")(),
                e = c != null && c.isPointOfInterest;
            if (!this.isEnabledForMode("full") && !(this.isEnabledForMode("lite") && e) || !this.$29) return p;
            e = this.isEnabledForMode("full") ? b("TimeSlice").getGuardNameStack() : [];
            var f = this.$29[a];
            c && (c.rawStackTrace = c.rawStackTrace || null);
            if (f) f.ts = d, f.guardStack = e, Object.assign(f, c || {});
            else {
                f = new(b("TimingAnnotations"))();
                this.$29[a] = babelHelpers["extends"]({
                    ts: d,
                    name: a,
                    annotations: f,
                    rawStackTrace: c && c.rawStackTrace || null,
                    guardStack: e
                }, j, c)
            }
            return this.$29[a].annotations
        };
        d.invokeWithProfiling = function(c, d) {
            if (!this.isEnabledForMode("full")) return d();
            var e = this.inform("start_" + c);
            this.$6.push(e);
            e = b("ErrorUtils").applyWithGuard(d, a, null, null, c);
            this.inform("finished_" + c);
            this.$6.pop();
            return e
        };
        d.getCurrentInvocation = function() {
            if (!this.isEnabledForMode("full")) return p;
            else if (this.$6.length < 1) return p;
            else return this.$6[this.$6.length - 1]
        };
        d.finish = function(a) {
            __p && __p();
            var c = this;
            this.$30(a ? "client_tsi_finish_on_unload" : "client_tsi_finish");
            if (!this.$4) return;
            if (a && this.$20) {
                this.$20();
                return
            }
            if (this.$7) b("FBLogger")("TimeSliceInteraction").warn("Trace was already marked as ended");
            else {
                t(this);
                this.$15.forEach(function(a) {
                    return a(c)
                });
                for (var d = this.$18, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var i;
                    if (e) {
                        if (f >= d.length) break;
                        i = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        i = f.value
                    }
                    i = i;
                    b("TimeSliceInteractionReliability").bumpLifecycleCounter("finishing", this.$1, i)
                }
                this.inform("trace_ended", {
                    type: b("ArtilleryJSPointTypes").TRACE_ENDED,
                    pointGroup: "e2e",
                    isPointOfInterest: !0
                });
                var j = this.isEnabledForMode("lite"),
                    k = this.isEnabledForMode("full");
                k && this.trace().addStringAnnotation("weight", "" + 1 / (this.$21 * this.$22));
                j && this.trace().addStringAnnotation("lite_weight", "" + 1 / (this.$21 * this.$23));
                navigator && navigator.connection && (typeof navigator.connection.downlink === "number" && this.trace().addStringAnnotation("browser_downlink_megabits", navigator.connection.downlink.toString()), typeof navigator.connection.rtt === "number" && this.trace().addStringAnnotation("browser_rtt_ms", navigator.connection.rtt.toString()), typeof navigator.connection.effectiveType === "string" && this.trace().addStringAnnotation("browser_effective_connection_type", navigator.connection.effectiveType));
                var l = b("performanceAbsoluteNow")(),
                    n = m.get(this);
                m["delete"](this);
                this.$5 && this.$5();
                var p = this.$25 != null ? this.$25.close() : [],
                    q = this.$26 != null ? this.$26.close() : [],
                    r = this.$26 != null ? this.$26.hasOverflown() : !1,
                    s = this.$26 != null ? this.$26.getOverflowSize() : 0,
                    u = this.$10 != null ? this.$10.close() : null;
                if (j || k) {
                    var v = function(a) {
                            j && c.$31(n), k && (u != null && c.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").USER_TIMING_SAVER, "data", u), c.$32(l, n, a, p, q, r, s)), o && o === c.$3 && (b("Arbiter").inform("time_slice_trace_posted", {
                                traceId: c.$3
                            }), o = null), c.$33()
                        },
                        w = v;
                    if (this.$9 !== void 0) {
                        h || g(0, 1439);
                        var x = h.stopRecording(this.$9);
                        w = function() {
                            x["catch"](function(a) {
                                setTimeout(function() {
                                    throw a
                                }, 0)
                            }).then(v)
                        }
                    }
                    a ? w() : this.$20 = function() {
                        return b("requestIdleCallbackAcrossTransitions")(function() {
                            return w()
                        })
                    }
                }
                this.countDown();
                this.$7 = !0
            }
        };
        d.registerOnBeforeSend = function(a) {
            this.$4 && this.$13.push(a);
            return this
        };
        d.registerOnBeforeFinish = function(a) {
            this.$4 && this.$15.push(a);
            return this
        };
        d.registerOnCleanUp = function(a) {
            this.$4 && this.$14.push(a);
            return this
        };
        d.trace = function() {
            return !this.$4 ? q : this.$16
        };
        d.getTraceID = function() {
            return this.$4 ? this.$3 : null
        };
        d.setExtraSampleRate = function(a) {
            this.$21 = a;
            return this
        };
        d.isEnabled = function() {
            return this.$4
        };
        d.disable = function(a) {
            __p && __p();
            a === void 0 && (a = !1);
            m["delete"](this);
            this.$5 && this.$5();
            this.$9 !== void 0 && (h || g(0, 1439), h.stopRecording(this.$9));
            if (!a && this.$4)
                for (var a = this.$18, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= a.length) break;
                        e = a[d++]
                    } else {
                        d = a.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    b("TimeSliceInteractionReliability").bumpLifecycleCounter("disabled", this.$1, e)
                }
            this.$4 = !1;
            this.$33()
        };
        d.disableBanzaiStream = function() {
            this.$28 = !1
        };
        c.getPageLoadPoints = function(a, b) {
            var c = [],
                d = k.read();
            for (var e = d.length - 1; e >= 0; e--) {
                var f = d[e];
                if (f.ts < a) return c;
                else f.ts < b && c.push(x(f))
            }
            return c
        };
        c.getInteractionIDsBetween = function(a, b) {
            __p && __p();
            var c = [],
                d = l.read();
            for (var e = d.length - 1; e >= 0; e--) {
                var f = d[e],
                    g = f.interaction;
                f = f.ts;
                g = g.getTraceID();
                if (f < a) return c;
                else f < b && g != null && c.push(g)
            }
            return c
        };
        d.receiveAsyncResponse = function(a) {
            a != null && a.artillery_info && this.isEnabledForMode("full") ? this.$34(a.artillery_info.artillery_join_points) : this.disable();
            return this
        };
        d.addArtilleryIDHeader = function(a) {
            this.$4 && a.setRequestHeader("X-ARTILLERY-REQ-METADATA", JSON.stringify({
                trace_id: this.$3
            }));
            return this
        };
        d.forResourceRequest = function(a) {
            __p && __p();
            if (!this.isEnabledForMode("full")) return p;
            else {
                var c = this.$17.get(a);
                if (c) return c;
                else {
                    c = new(b("TimingAnnotations"))();
                    this.$17.set(a, c);
                    return c
                }
            }
        };
        d.addProfilingCounterAttribution = function(a) {
            this.$11.add(a);
            return this
        };
        d.$34 = function(a) {
            if (!this.isEnabledForMode("full")) return this;
            this.$2 = a;
            return this
        };
        d.$31 = function(a) {
            __p && __p();
            var c = this;
            this.$13.forEach(function(a) {
                return a()
            });
            this.$13 = [];
            if (!this.isEnabled()) return;
            var d = [];
            a = this.$12.concat(Object.values(this.$29)).concat(a || []);
            a.forEach(function(a) {
                a.isPointOfInterest && d.push({
                    ts: a.ts,
                    name: a.name,
                    pointGroup: a.pointGroup,
                    annotations: a.annotations.prepareToSend()
                })
            });
            var e = {
                trace_id: this.$3,
                action_name: this.$1,
                trace_annotations: this.$16.prepareToSend(),
                points: d
            };
            b("Bootloader").loadModules(["Banzai", "BanzaiODS", "PerfXSharedFields"], function(a, d, f) {
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("posting", c.$1, "lite"), a.post(s, f.addCommonValues(e), a.VITAL)
            }, "TimeSliceInteraction")
        };
        d.$32 = function(a, c, d, e, f, g, h) {
            __p && __p();
            var i = this;
            this.$30("client_tsi_post_start");
            this.$13.forEach(function(a) {
                return a()
            });
            this.$13 = [];
            if (!this.isEnabled()) return;
            c = c != null ? this.$12.concat(c) : this.$12;
            c.push.apply(c, Object.values(this.$29));
            var j = c.map(x),
                k = Array.from(this.$11.keys()),
                l = new Map(this.$27.entries());
            b("TimeSliceInteractionBootloadForPost")(function(c, m, n, o, p, q, s) {
                __p && __p();
                i.$30("client_tsi_post_ready");
                b("TimeSliceInteractionReliability").bumpLifecycleCounter("posting", i.$1, "full");
                n = p.getMetrics(i.$19, a, b("TimeSliceInteractionSV").maxBlockMergeDuration, b("TimeSliceInteractionSV").maxBlockMergeDistance, f, b("ProfilingCountersStore").toMap(e), {
                    includeRefTreeIDs: !0,
                    counterFunction: function(a) {
                        return y(k, a)
                    }
                });
                i.$16.addStringAnnotation("overflown_timeslice_buffer", g ? "1" : "0");
                i.$16.addStringAnnotation("overflown_timeslice_entry_count", "" + h);
                if (b("performance") && b("performance").timing && b("performance").timing.navigationStart) {
                    var t = f.length > 0 ? f[0].begin : null;
                    o = o.getMetrics(t != null && t < i.$19 ? t : i.$19, !1, null, a, !0, !0);
                    t = o.data;
                    o = o.diagnostics;
                    o && (i.$16.addStringAnnotation("number_of_valid_entries", o.numValidEntries.toString()), i.$16.addStringAnnotation("number_of_success_metrics", o.numSuccessfulMetrics.toString()));
                    Object.values(t).forEach(function(a) {
                        return a.forEach(function(a) {
                            var c = a.desc,
                                d = a.type,
                                e = i.$17.get(c);
                            e = e && e.prepareToSend();
                            if (d === b("ResourceTypes").JS || d === b("ResourceTypes").CSS || d === b("ResourceTypes").XHR) {
                                d = b("ResourceTimingsStore").getAnnotationsFor(d, c);
                                e = b("TimingAnnotations").combine(e, d)
                            }
                            a.annotations = e
                        })
                    })
                } else t = {};
                var u = {};
                l.forEach(function(a, c) {
                    __p && __p();
                    var d = b("ArtilleryComponentSaverOptions").options[c];
                    d = !!(d && d.shouldCompress);
                    if (d) {
                        d = q.compressStringToSnappy(JSON.stringify(a));
                        if (d != null) {
                            u[c] = {
                                data: d,
                                isCompressed: !0
                            };
                            return
                        }
                    }
                    u[c] = {
                        isCompressed: !1,
                        data: a
                    }
                });
                o = {
                    trace_id: i.$3,
                    join_points: i.$2,
                    action_name: i.$1,
                    points: j,
                    traceAnnotations: i.$16.prepareToSend(),
                    timeslices: p.formatMetricsForTransport(n),
                    resource_timings: t,
                    sampler_profile: d,
                    extra_savers: u
                };
                o = s.addCommonValues(o);
                b("TimeSliceInteractionSV").compression_enabled && (o = i.$35(q, o));
                p = b("TimeSliceInteractionSV").banzai_stream_coinflip || 0;
                i.$28 && b("TimeSliceInteractionSV").enable_banzai_stream && b("Random").coinflip(p) ? m.post(r, o, {
                    compress: !1
                }) : c.post(r, o, {
                    compress: !1
                })
            })
        };
        d.$35 = function(a, b) {
            var c = ["points", "timeslices", "resource_timings", "sampler_profile"],
                d = {};
            c.forEach(function(c) {
                var e = b[c];
                if (e == null) return;
                e = JSON.stringify(e);
                e = a.compressStringToSnappy(e);
                e !== null && (d[c] = e, delete b[c])
            });
            return babelHelpers["extends"]({}, b, {
                miny: d
            })
        };
        d.$33 = function() {
            delete this.$12, this.$13 = [], this.$14 && (this.$14.forEach(function(a) {
                return a()
            }), this.$14 = []), this.$15 = [], delete this.$29, delete this.$20, delete this.$27
        };
        d.isEnabledForMode = function(a) {
            return this.$4 && !this.$7 && this.$18.has(a)
        };
        d.isDone = function() {
            return this.$7
        };
        d.$30 = function(a) {
            b("TSIAdsReliabilityHook").event(this.$1, a, this.getTraceID())
        };
        c.getAllActiveInteractions = function() {
            return m.keys()
        };
        return c
    }();
    e.exports = z
}), null);
__d("TimeSliceReferenceCounting", ["ExecutionContextObservers", "OnDemandExecutionContextObserver", "ProfilingCounters", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = [],
        h = [];
    a = null;
    var i = null,
        j = 1,
        k = [];

    function l(a) {
        if (a == null || a.length === 0) return;
        a = a.filter(function(a) {
            return --a.openReferenceCount == 0
        });
        a.length > 0 && (k.push.apply(k, a), b("requestIdleCallbackAcrossTransitions")(b("TimeSlice").guard(m, "invoking onAllChildrenFinished callbacks", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })))
    }

    function m() {
        while (k.length) k.pop().finish()
    }
    var n = function() {
        "use strict";
        __p && __p();

        function a(b, c) {
            this.$2 = a.$1++, this.$3 = b, this.$4 = [], this.$5 = !1, this.$6 = c, this.openReferenceCount = 1, this.timeslices = [b]
        }
        var b = a.prototype;
        b.isProfiling = function() {
            return this.$6
        };
        b.addCallback = function(a) {
            !this.$5 ? this.$4.push(a) : a();
            return this
        };
        b.finish = function() {
            this.$5 || (this.$5 = !0, this.$4.forEach(function(a) {
                return a()
            }), delete this.$4)
        };
        b.getContinuationExecutionCounterID = function() {
            return this.$2
        };
        b.isInsideContinuationExecution = function() {
            return h.indexOf(this) !== -1
        };
        b.getTimeSliceContextsThisCounted = function() {
            return this.timeslices
        };
        b.getRootContextID = function() {
            return this.$3
        };
        return a
    }();
    n.$1 = 1;

    function o(a, b) {
        a.forEach(function(a) {
            var c = a.getContinuationExecutionCounterID(),
                d = b.find(function(a) {
                    return a.getContinuationExecutionCounterID() === c
                });
            d || b.push(a)
        })
    }
    c = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c() {
            return a.apply(this, arguments) || this
        }
        var d = c.prototype;
        d.onNewContextCreatedWhileEnabled = function(a, b, c) {
            var d;
            c.isContinuation && (d = h, d.forEach(function(a) {
                return a.openReferenceCount++
            }));
            a = {
                hasBeenInvoked: !1,
                hasExecutionBeenCounted: !1,
                parentReferenceCounters: d,
                creationID: j++
            };
            return a
        };
        d.onContextCanceled = function(a, b) {
            a = b || {};
            a.hasBeenInvoked || (l(a.parentReferenceCounters), a.hasBeenInvoked = !0)
        };
        d.onBeforeContextStartedWhileEnabled = function(a, c, d) {
            __p && __p();
            var e = {
                callerProfilingCounterID: i,
                callerReferenceCounters: g,
                callerExecutionCounters: h.slice()
            };
            c = c || {
                hasBeenInvoked: !1,
                creationID: -1
            };
            c.hasBeenInvoked = !0;
            a.executionNumber > 0 ? g = [] : g = c.parentReferenceCounters || [];
            d.extendsExecution ? o(g, h) : h = [];
            h.forEach(function(b) {
                return b.timeslices.push(a.contextID)
            });
            g.filter(function(a) {
                return a.isProfiling()
            }).length > 0 && a.executionNumber === 0 ? i = b("ProfilingCounters").startTimingInContext("REF_COUNTED_TIMESLICE_TIME", a.contextID) : i = null;
            return e
        };
        d.onDisable = function() {
            i = null, g = [], h = []
        };
        d.onAfterContextStartedWhileEnabled = function(a, b, c, d) {
            return c
        };
        d.onAfterContextEndedWhileEnabled = function(a, c, d, e) {
            c = a.contextID;
            i != null && (b("ProfilingCounters").stopTimingInContext(i, c), i = null);
            l(g);
            g = d.callerReferenceCounters;
            h = d.callerExecutionCounters;
            i = d.callerProfilingCounterID
        };
        d.getBeforeID = function() {
            return b("ExecutionContextObservers").beforeIDs.REFERENCE_COUNTING
        };
        d.getAfterID = function() {
            return b("ExecutionContextObservers").afterIDs.REFERENCE_COUNTING
        };
        return c
    }(b("OnDemandExecutionContextObserver"));
    var p = {
            onAllChildrenFinished: function(a, b) {
                b === void 0 && (b = !1);
                var c = p.getObserver().expressInterest();
                return p.onAllChildrenFinishedWithoutAutoTurningObserverOn(a, c, b)
            },
            onAllChildrenFinishedWithoutAutoTurningObserverOn: function(c, d, e) {
                __p && __p();
                var f = b("TimeSlice").getContext();
                if (f == null) {
                    d();
                    return null
                }
                f = f.contextID;
                a = new n(f, e);
                a.addCallback(d);
                c && a.addCallback(c);
                g = g.slice();
                g.push(a);
                h = h.slice();
                h.push(a);
                i == null && a.isProfiling() && (i = b("ProfilingCounters").startTimingInContext("REF_COUNTED_TIMESLICE_TIME", f));
                return a
            },
            getObserver: function() {
                return q
            }
        },
        q = new c();
    b("TimeSlice").registerExecutionContextObserver(q);
    e.exports = p
}), null);
__d("TimeSliceAutoclosedInteraction", ["ErrorUtils", "ProfilingCounters", "TimeSlice", "TimeSliceInteraction", "TimeSliceInteractionExtraSaver", "TimeSliceInteractionSV", "TimeSliceReferenceCounting", "clearTimeout", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 70 * 1e3;
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d) {
            __p && __p();
            var e;
            d === void 0 && (d = []);
            e = a.call(this, c, d) || this;
            e.$TimeSliceAutoclosedInteraction1 = new Map();
            e.$TimeSliceAutoclosedInteraction2 = 0;
            e.$TimeSliceAutoclosedInteraction3 = !0;
            e.$TimeSliceAutoclosedInteraction4 = [];
            e.$TimeSliceAutoclosedInteraction5 = new Set();
            if (e.isEnabled()) {
                e.trace().addStringAnnotation("initiatorType", "autoclosed");
                var f = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
                    e.isDone() || (e.trace().addStringAnnotation("terminated_by_timeout_ms", g.toString()), e.finish())
                }, "timeout for action " + c, {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                }), g);
                e.registerOnBeforeSend(function() {
                    e.trace().addStringAnnotation("ref_counting_trees", "" + e.$TimeSliceAutoclosedInteraction2).addStringAnnotation("ref_counters_pending_count", "" + e.$TimeSliceAutoclosedInteraction1.size), b("clearTimeout")(f)
                });
                d = b("TimeSliceReferenceCounting").onAllChildrenFinished(null, !0);
                if (d == null) e.disable(), b("ErrorUtils").reportError(new Error("starting autoclosed interaction outside of a timeslice."));
                else {
                    e.waitForReferenceCounter(d);
                    e.trace().addStringAnnotation("on_demand_reference_counting", b("TimeSliceInteractionSV").on_demand_reference_counting ? "1" : "0");
                    c = "timeslice_interaction_" + e.getTraceID();
                    e.isEnabledForMode("full") && (b("ProfilingCounters").currentContext().addAttribution(c, b("ProfilingCounters").AttributionPropagation.ONLY_ON_CONTINUATIONS_AND_FIRST_EXEC), e.addProfilingCounterAttribution(c))
                }
            }
            return e
        }
        c.getInteractionsActiveRightNow = function() {
            return Array.from(b("TimeSliceInteraction").getAllActiveInteractions()).filter(function(a) {
                return a.$TimeSliceAutoclosedInteraction3 && a.hasActiveReferenceCountingHandle()
            })
        };
        var d = c.prototype;
        d.waitForReferenceCounter = function(a) {
            __p && __p();
            var c = this;
            if (!this.isEnabled()) return this;
            var d = a.getContinuationExecutionCounterID();
            this.$TimeSliceAutoclosedInteraction1.set(d, a);
            this.$TimeSliceAutoclosedInteraction2++;
            a.addCallback(function() {
                b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.$TimeSliceAutoclosedInteraction1.has(d) && a.getTimeSliceContextsThisCounted().forEach(function(a) {
                    return c.$TimeSliceAutoclosedInteraction5.add(a)
                }), c.$TimeSliceAutoclosedInteraction1["delete"](d) && c.$TimeSliceAutoclosedInteraction1.size === 0 && (c.$TimeSliceAutoclosedInteraction4.forEach(function(a) {
                    return a()
                }), c.$TimeSliceAutoclosedInteraction4 = [], c.isEnabled() && !c.isDone() && (b("TimeSliceInteractionSV").also_record_new_timeslice_format && c.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").TIMESLICE_EXECUTION_SAVER, "reference_counted_contexts", Array.from(c.$TimeSliceAutoclosedInteraction5.values())), c.finish()))
            });
            return this
        };
        d.onReferenceCountedExecutionFinished = function(a) {
            this.$TimeSliceAutoclosedInteraction4.push(a)
        };
        d.hasActiveReferenceCountingHandle = function() {
            __p && __p();
            for (var a = this.$TimeSliceAutoclosedInteraction1.values(), b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (d.isInsideContinuationExecution()) return !0
            }
            return !1
        };
        return c
    }(b("TimeSliceInteraction"));
    e.exports = a
}), null);
__d("clearImmediatePolyfill", ["ImmediateImplementation"], (function(a, b, c, d, e, f) {
    e.exports = a.clearImmediate || b("ImmediateImplementation").clearImmediate
}), null);
__d("clearImmediate", ["TimerStorage", "TimeSlice", "clearImmediatePolyfill"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IMMEDIATE;

    function a(a) {
        if (a != null) {
            b("TimerStorage").unset(b("TimerStorage").IMMEDIATE, a);
            var c = g + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        b("clearImmediatePolyfill")(a)
    }
    e.exports = a
}), null);
__d("TimeSliceInteractionCancelHook", ["Keys", "clearImmediate", "requireWeak", "setImmediateAcrossTransitions"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = {
        registerInteraction: function(a) {
            var c = b("setImmediateAcrossTransitions")(function() {
                    g.push(a)
                }),
                d = !1;
            return {
                remove: function() {
                    if (d) return;
                    d = !0;
                    b("clearImmediate")(c);
                    var e = g.indexOf(a);
                    e !== -1 && g.splice(e, 1)
                }
            }
        }
    };
    b("requireWeak")("Event", function(a) {
        a.listen(document, "click", function() {
            g.forEach(function(a) {
                a.trace().addStringAnnotation("clicked_during_interaction", "1")
            })
        }), a.listen(document, "keydown", function(c) {
            a.getKeyCode(c) === b("Keys").ESC && g.forEach(function(a) {
                a.trace().addStringAnnotation("escaped_during_interaction", "1")
            })
        })
    });
    e.exports = a
}), null);
__d("CurrentEventMeta", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = {};
    a = {
        __setCurrentEventID: function(a) {
            g = a
        },
        __informEventDataReady: function(a, b) {
            h[a] && (h[a].forEach(function(a) {
                return a(b)
            }), delete h[a])
        },
        hasCurrentEvent: function() {
            return !!g
        },
        registerForCurrentEventData: function(a) {
            g && (h[g] = h[g] || [], h[g].push(a))
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionEventHook", ["CurrentEventMeta"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            b("CurrentEventMeta").hasCurrentEvent() && (a.countUp(), b("CurrentEventMeta").registerForCurrentEventData(function(b) {
                Object.keys(b).forEach(function(c) {
                    var d = "" + b[c];
                    a.trace().addStringAnnotation(c, d)
                }), a.countDown()
            }));
            return null
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionLeaveHook", ["Run"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [];
    a = {
        registerInteraction: function(a) {
            g.push(a);
            return {
                remove: function() {
                    var b = g.indexOf(a);
                    b !== -1 && g.splice(b, 1)
                }
            }
        }
    };
    b("Run").onUnload(function() {
        g.forEach(function(a) {
            a.trace().addStringAnnotation("ended_early_because_page_is_unloading", "1"), a.finish(!0)
        })
    });
    e.exports = a
}), null);
__d("TimeSliceInteractionPageStatsHook", ["NavigationMetrics"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g, h = [];
    b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, b) {
        if (b.pageType !== "normal") return;
        g = {
            start: b.start,
            dd: b.all_pagelets_displayed,
            tti: b.tti,
            e2e: b.e2e
        };
        for (var a = 0; a < h.length; a++) {
            b = h[a];
            i(b);
            b.countDown()
        }
        h = []
    });

    function i(a) {
        g ? (a.trace().addStringAnnotation("page_start", "" + g.start), a.trace().addStringAnnotation("page_tti", "" + g.tti), a.trace().addStringAnnotation("page_dd", "" + g.dd), a.trace().addStringAnnotation("page_e2e", "" + g.e2e)) : (a.countUp(), h.push(a))
    }
    a = {
        registerInteraction: function(a) {
            i(a);
            return {
                remove: function() {
                    var b = h.indexOf(a);
                    b !== -1 && h.splice(b, 1)
                }
            }
        }
    };
    e.exports = a
}), null);
__d("TimeSliceInteractionResourcesDataSource", ["SiteData", "TimeSliceInteractionExtraSaver"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        registerInteraction: function(a) {
            a.countDown(), a.registerOnBeforeFinish(function(a) {
                a.recordWithExtraSaver(b("TimeSliceInteractionExtraSaver").RESOURCES_SAVER, "info", {
                    client_revision: b("SiteData").client_revision,
                    pkg_cohort: b("SiteData").pkg_cohort
                })
            })
        }
    };
    e.exports = a
}), null);
__d("BrowserEventBasedInteraction", ["Bootloader", "FBLogger", "PageDOMMutationObserver", "TimeSliceAutoclosedInteraction", "TimeSliceInteractionCancelHook", "TimeSliceInteractionEventHook", "TimeSliceInteractionLeaveHook", "TimeSliceInteractionPageStatsHook", "TimeSliceInteractionResourcesDataSource", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [b("TimeSliceInteractionCancelHook"), b("TimeSliceInteractionEventHook"), b("TimeSliceInteractionLeaveHook"), b("TimeSliceInteractionPageStatsHook")];
    a = function(a) {
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e) {
            __p && __p();
            var f;
            f = a.call(this, "Event", [b("TimeSliceInteractionResourcesDataSource")]) || this;
            f.$BrowserEventBasedInteraction2 = [];
            f.$BrowserEventBasedInteraction4 = null;
            f.$BrowserEventBasedInteraction5 = null;
            f.$BrowserEventBasedInteraction6 = null;
            f.$BrowserEventBasedInteraction7 = 0;
            f.$BrowserEventBasedInteraction8 = 0;
            f.$BrowserEventBasedInteraction1 = d;
            [].push.apply(f.$BrowserEventBasedInteraction2, c);
            f.setExtraSampleRate(e);
            var h = g.map(function(a) {
                a.registerInteraction(babelHelpers.assertThisInitialized(f))
            });
            f.registerOnCleanUp(function() {
                h.forEach(function(a) {
                    return a && a.remove()
                })
            });
            f.registerOnBeforeSend(function() {
                f.trace().addVectorAnnotation("interaction_ids", f.$BrowserEventBasedInteraction2)
            });
            f.trace().addStringAnnotation("is_mutation_observer_supported", b("PageDOMMutationObserver").isSupported() ? "1" : "0");
            return f
        }
        var d = c.prototype;
        d.getEventType = function() {
            return this.$BrowserEventBasedInteraction1
        };
        d.tagAsInteractionID = function(a) {
            this.$BrowserEventBasedInteraction2.push(a)
        };
        d.hasInteractionIDs = function(a) {
            __p && __p();
            for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var d;
                if (b) {
                    if (c >= a.length) break;
                    d = a[c++]
                } else {
                    c = a.next();
                    if (c.done) break;
                    d = c.value
                }
                d = d;
                if (!this.$BrowserEventBasedInteraction2.includes(d)) return !1
            }
            return !0
        };
        d.addEagerExecution = function(a, b, c) {
            this.waitForReferenceCounter(a), this.addProfilingCounterAttribution(b), [].push.apply(this.$BrowserEventBasedInteraction2, c)
        };
        d.setManualStartAndEnd = function(a, b, c, d) {
            this.$BrowserEventBasedInteraction7++, this.$BrowserEventBasedInteraction8++, this.$BrowserEventBasedInteraction3 = a, this.$BrowserEventBasedInteraction4 = b, this.$BrowserEventBasedInteraction5 = c, this.$BrowserEventBasedInteraction6 = d, this.isEnabled() ? this.addManualInstrumentationData() : d || this.logManualInstrumentationData()
        };
        d.markManualStart = function(a, c) {
            var d = this;
            this.$BrowserEventBasedInteraction7++;
            this.$BrowserEventBasedInteraction4 || (this.$BrowserEventBasedInteraction4 = c || b("performanceAbsoluteNow")(), this.$BrowserEventBasedInteraction3 = a, this.isEnabled() && (this.countUp(), this.registerOnBeforeFinish(function() {
                d.addManualInstrumentationData()
            })))
        };
        d.markManualEnd = function(a) {
            if (!this.$BrowserEventBasedInteraction4) {
                b("FBLogger")("event_profiler").warn("Attempting to mark end for interaction which never had start marked");
                return
            }
            this.$BrowserEventBasedInteraction8++;
            this.$BrowserEventBasedInteraction5 = a || b("performanceAbsoluteNow")();
            this.$BrowserEventBasedInteraction6 = this.hasActiveReferenceCountingHandle();
            !this.isEnabled() && !this.$BrowserEventBasedInteraction6 ? this.logManualInstrumentationData() : this.isEnabled() && this.$BrowserEventBasedInteraction8 === 1 && this.countDown()
        };
        d.getManualInstrumentationData = function() {
            var a = {};
            this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction3 && (a.manual_instrumentation_start = "" + this.$BrowserEventBasedInteraction4, a.manual_instrumentation_marked_start_count = "" + this.$BrowserEventBasedInteraction7, a.manual_instrumentation_start_reference_counted = "1");
            this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_end = "" + this.$BrowserEventBasedInteraction5, a.manual_instrumentation_marked_end_count = "" + this.$BrowserEventBasedInteraction8, a.manual_instrumentation_end_reference_counted = this.$BrowserEventBasedInteraction6 ? "1" : "0");
            this.$BrowserEventBasedInteraction4 && this.$BrowserEventBasedInteraction5 && (a.manual_instrumentation_duration = "" + (this.$BrowserEventBasedInteraction5 - this.$BrowserEventBasedInteraction4));
            return a
        };
        d.addManualInstrumentationData = function() {
            var a = this,
                b = this.getManualInstrumentationData();
            Object.keys(b).forEach(function(c) {
                a.trace().addStringAnnotation(c, b[c])
            });
            this.trace().addVectorAnnotation("manual_instrumentation_interaction_ids", this.$BrowserEventBasedInteraction3 || []);
            b.manual_instrumentation_start && this.inform("manual_instrumentation_start", {
                ts: parseFloat(b.manual_instrumentation_start)
            }).addStringAnnotation("visual_role", "global_signpost");
            b.manual_instrumentation_end && this.inform("manual_instrumentation_end", {
                ts: parseFloat(b.manual_instrumentation_end)
            }).addStringAnnotation("visual_role", "global_signpost")
        };
        d.logManualInstrumentationData = function() {
            var a = this,
                c = this.$BrowserEventBasedInteraction3 || [],
                d = this.getManualInstrumentationData();
            d.lite_weight = "1";
            b("Bootloader").loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(b, e) {
                new b().setActionName("Event").setTraceAnnotations({
                    stringProps: d,
                    setProps: {},
                    vectorProps: {
                        manual_instrumentation_interaction_ids: c,
                        interaction_ids: a.$BrowserEventBasedInteraction2
                    }
                }).updateData(e.getCommonData()).logVital()
            }, "BrowserEventBasedInteraction")
        };
        d.getActiveBrowserEventBasedInteractions = function() {
            return b("TimeSliceAutoclosedInteraction").getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof c
            })
        };
        return c
    }(b("TimeSliceAutoclosedInteraction"));
    e.exports = a
}), null);
__d("EventProfilerAdsSessionProvider", ["AdsInterfacesSessionConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = {
        sessionID: b("AdsInterfacesSessionConfig").sessionID
    }
}), null);
__d("EventProfilerEagerExecution", ["EventConfig", "FBLogger", "ProfilingCounters", "TimeSliceReferenceCounting"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = 0,
        h = {},
        i = 0,
        j = {},
        k = function() {
            __p && __p();

            function a(a, c, d) {
                __p && __p();
                var e = this;
                this.interaction = null;
                this.$2 = [];
                this.$3 = [];
                this.$4 = [];
                this.$5 = [];
                this.id = i++;
                this.$6 = a;
                for (var d = 0; d < a.length; d++) j[a[d]] && b("FBLogger")("event_profiler").blameToPreviousDirectory().mustfix("Declaring multiple eager executions for the same interaction not supported: %s", a[d]), j[a[d]] = this;
                d = "eagerly_executed_tree_" + ++g;
                b("EventConfig").profile_eager_execution && (this.handle = b("TimeSliceReferenceCounting").onAllChildrenFinished(function() {
                    e.finish()
                }, c !== 0), c && b("ProfilingCounters").currentContext().addAttribution(d, b("ProfilingCounters").AttributionPropagation.ONLY_ON_CONTINUATIONS));
                this.sampleWeight = c;
                this.$1 = d;
                h[this.id] = this
            }
            var c = a.prototype;
            c.hasInteractionIDs = function(a) {
                __p && __p();
                for (var a = a, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    if (!this.$6.includes(d)) return !1
                }
                return !0
            };
            c.__registerInteractionWePotentiallyEagerlyExecutedFor = function(a) {
                this.$2.push(a)
            };
            c.attributeToCurrentlyActiveInteraction = function() {
                __p && __p();
                var a = this,
                    b = this.handle;
                if (!b) return;
                var c = function() {
                    __p && __p();
                    if (e) {
                        if (f >= d.length) return "break";
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) return "break";
                        g = f.value
                    }
                    var c = g;
                    if (c.hasActiveReferenceCountingHandle()) {
                        c.addEagerExecution(b, a.$1, a.$3.slice());
                        a.interaction = c;
                        a.$4.forEach(function(a) {
                            return a(c)
                        });
                        a.$4 = [];
                        return "break"
                    }
                };
                for (var d = this.$2, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g, h = c();
                    if (h === "break") break
                }
            };
            c.tagAsInteractionID = function(a) {
                this.$3.push(a)
            };
            c.withInteraction = function(a) {
                !this.interaction ? this.$4.push(a) : a(this.interaction)
            };
            c.isActive = function() {
                return !!(this.handle && this.handle.isInsideContinuationExecution())
            };
            c.onFinish = function(a) {
                this.$5.push(a)
            };
            c.finish = function() {
                delete h[this.id], this.$5.forEach(function(a) {
                    return a()
                }), this.$5 = []
            };
            return a
        }();
    a = {
        declareEagerExecution: function(a, b, c) {
            a = new k(a, c, b);
            var d = a.id;
            return function() {
                h[d] && h[d].attributeToCurrentlyActiveInteraction()
            }
        },
        getEagerExecution: function(a, b) {
            var c = a.map(function(a) {
                return j[a]
            }).filter(function(b) {
                return b && b.hasInteractionIDs(a)
            });
            b = c.filter(function(a, b) {
                return b === c.indexOf(a)
            });
            return b.length == 1 ? b[0] : null
        },
        getActiveExecutions: function() {
            return Object.values(h).filter(function(a) {
                return a.handle && a.handle.isInsideContinuationExecution()
            })
        }
    };
    e.exports = a
}), null);
__d("EventProfilerInteractionTracker", ["Bootloader", "BrowserEventBasedInteraction", "EventProfilerEagerExecution", "EventConfig", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = [],
        h = b("EventConfig").profile_eager_execution && b("EventConfig").manual_instrumentation;
    a = {
        createNewInteraction: function(a, c, d, e) {
            __p && __p();
            if (!a.length) return null;
            var f = e && e.sampleWeight || 0,
                i;
            (h || d || f) && (i = new(b("BrowserEventBasedInteraction"))(a, c, 1 / (f || d)));
            if (i && e) {
                var j = e;
                j.__registerInteractionWePotentiallyEagerlyExecutedFor(i);
                i.registerOnBeforeSend(function() {
                    i && i !== j.interaction && (d ? i.setExtraSampleRate(1 / d) : i.disable())
                })
            }
            if (i) {
                var k = i;
                g.push(i);
                i.onReferenceCountedExecutionFinished(function() {
                    var a = g.indexOf(k);
                    a !== -1 && g.splice(a, 1)
                })
            }
            f === 0 && d === 0 && i && i.disable();
            return d === 0 ? null : i
        },
        markManualStart: function(a, c, d) {
            __p && __p();
            if (!h) return {
                markManualEnd: function() {}
            };
            var e = g.filter(function(b) {
                    return b.hasInteractionIDs(a) && b.getEventType() === c
                }),
                f = b("EventProfilerEagerExecution").getActiveExecutions();
            if (e.length === 1) return i(e[0], a, d);
            else if (f.length === 1) return l(f[0], a, d);
            else {
                e.forEach(function(a) {
                    a.trace().addStringAnnotation("has_manual_instrumentation_conflict", "1")
                });
                return j(a, e.length + f.length, d)
            }
        }
    };

    function i(a, b, c) {
        a.markManualStart(b, c);
        return {
            markManualEnd: function(b) {
                a.markManualEnd(b)
            }
        }
    }

    function j(a, c, d) {
        var e = d || b("performanceAbsoluteNow")();
        return {
            markManualEnd: function(d) {
                d = d || b("performanceAbsoluteNow")();
                k(e, d, a, c)
            }
        }
    }

    function k(a, c, d, e) {
        var f = {
            manual_instrumentation_start: "" + a,
            manual_instrumentation_end: "" + c,
            manual_instrumentation_duration: "" + (c - a),
            manual_instrumentation_start_reference_counted: "0",
            manual_instrumentation_end_reference_counted: "0",
            lite_weight: "1"
        };
        e && (f.manual_instrumentation_conflicts = "" + e);
        b("Bootloader").loadModules(["TimeSliceInteractionsLiteTypedLogger", "PerfXSharedFields"], function(a, b) {
            new a().setActionName("Event").setTraceAnnotations({
                stringProps: f,
                setProps: {},
                vectorProps: {
                    manual_instrumentation_interaction_ids: d
                }
            }).updateData(b.getCommonData()).logVital()
        }, "EventProfilerInteractionTracker")
    }

    function l(a, c, d) {
        __p && __p();
        var e = d || b("performanceAbsoluteNow")(),
            f, g, h, i = !1;

        function j() {
            f && g !== void 0 && !i && h !== void 0 && (i = !0, g ? g.setManualStartAndEnd(c, e, f, h) : k(e, f, c))
        }
        var l;
        a.withInteraction(function(a) {
            l = a, a.onReferenceCountedExecutionFinished(function() {
                a.hasInteractionIDs(c) ? g = a : g = null, j()
            })
        });
        a.onFinish(function() {
            l || (g = !1, j())
        });
        return {
            markManualEnd: function(c) {
                if (f) return;
                h = a.isActive() || l && l.hasActiveReferenceCountingHandle() || !1;
                f = c || b("performanceAbsoluteNow")();
                j()
            }
        }
    }
    e.exports = a
}), null);
__d("EventProfilerSampler", ["EventConfig"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("EventConfig").interaction_boost,
        h = b("EventConfig").event_types,
        i = b("EventConfig").sampling || {},
        j = b("EventConfig").page_sampling_boost || 1,
        k = [];
    Object.keys(b("EventConfig").interaction_regexes).forEach(function(a) {
        k.push({
            id: a,
            regex: new RegExp(b("EventConfig").interaction_regexes[a])
        })
    });
    a = "click";
    c = "mouseup";
    var l = [a, c],
        m = a;
    d = {
        canSample: function(a) {
            return !!i[a]
        },
        getEventSampleWeights: function(a, b) {
            a.__samplingWeights == void 0 && (a.__samplingWeights = {
                interaction: n(this.getInteractionWeight(a, b)),
                event: n(this.getEventWeight(a))
            });
            return a.__samplingWeights
        },
        getInteractionWeight: function(a, b) {
            __p && __p();
            a = a.type in i ? i[a.type] : 1;
            if (!a || !b || !b.length) return 0;
            var c = 1;
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                if (g[f]) {
                    c = g[f];
                    break
                }
            }
            return a * i.__interactionDefault / c
        },
        getEventWeight: function(a) {
            a = a.type in i ? i[a.type] : 1;
            a /= j;
            return a * i.__eventDefault
        },
        getEventInteractionIDs: function(a, b) {
            __p && __p();
            if (l.indexOf(a) === -1) return [];
            var c = [];
            for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var f;
                if (d) {
                    if (e >= b.length) break;
                    f = b[e++]
                } else {
                    e = b.next();
                    if (e.done) break;
                    f = e.value
                }
                f = f;
                for (var g = 0; g < k.length; g++) {
                    var i = k[g];
                    if (i.regex.test(f)) {
                        var j = h[i.id];
                        if (j) {
                            if (j.indexOf(a) === -1) continue
                        } else if (a !== m) continue;
                        c.push(i.id)
                    }
                }
            }
            return c
        }
    };

    function n(a) {
        if (a === 0) return 0;
        var b = i.__min || 1;
        a = Math.round(Math.max(b, a));
        return Math.random() * a < 1 ? a : 0
    }
    e.exports = d
}), null);
__d("getParentClassesForEventProfiler", ["cx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    __p && __p();

    function h(a) {
        __p && __p();
        if (!a || !(a instanceof HTMLElement)) return "";
        var b = a.id,
            c = a.nodeName,
            d = a.getAttribute("class");
        c = c ? c.replace(/^#/, "") : "unknown";
        b = b ? "#" + b : "";
        d = d ? " " + d.replace(/\s+/g, " ").trim() : "";
        if (a.getAttribute("rel") === "theater") {
            a = "_342u";
            d = d.length ? d + " " + a : a
        }
        return ":" + c + b + d
    }

    function a(a) {
        var b = [];
        while (a && a instanceof HTMLElement) b.push(h(a)), a = a.parentElement;
        b.reverse();
        return b
    }
    e.exports = a
}), null);
__d("requestAnimationFrameAcrossTransitions", ["Env", "ErrorUtils", "TimerStorage", "TimeSlice", "clearTimeout", "performanceNow", "requestAnimationFramePolyfill", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = b("TimerStorage").ANIMATION_FRAME,
        h = 100,
        i = null,
        j = null,
        k = b("Env").gk_require_dic ? Object.create(null) : {},
        l = b("Env").gk_require_dic ? Object.create(null) : {},
        m = {
            DEFAULT: 0,
            QUERY_THEN_MUTATE: 1,
            FORCE_CLIENT_REFLOW: 2,
            DISPLAY_DONE_LOGGING: 3,
            SIZE: 4
        };

    function n(c) {
        __p && __p();
        l = k;
        k = b("Env").gk_require_dic ? Object.create(null) : {};
        i = null;
        j && (b("clearTimeout")(j), j = null);
        for (var d = 0; d < m.SIZE; d++) {
            var e = function(e) {
                var f = l[e];
                if (d === m.FORCE_CLIENT_REFLOW) {
                    b("Env").gk_raf_force_client_reflow && window.document.body && window.document.body.getClientRects();
                    return "break"
                }
                if (f.deleted || f.priority !== d) return "continue";
                b("ErrorUtils").applyWithGuard(function() {
                    f.call(a, c)
                })
            };
            _loop: for (var f in l) {
                var g = e(f);
                switch (g) {
                    case "break":
                        break _loop;
                    case "continue":
                        continue
                }
            }
        }
        l = null
    }

    function o(a, c) {
        __p && __p();
        c = c && c.priority || m.DEFAULT;
        i || (i = b("requestAnimationFramePolyfill")(function(a) {
            i = null, n(a)
        }));
        !j && c > m.DEFAULT && (j = b("setTimeoutAcrossTransitions")(b("TimeSlice").guard(function() {
            j = null, n(b("performanceNow")())
        }, "requestAnimationFrame priorityRAFCallback setTimeout", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        }), h));
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION,
            registerCallStack: !0
        });
        a.priority = c;
        a.deleted && b("ErrorUtils").applyWithGuard(function() {
            throw new Error("Scheduling a deleted callback")
        });
        c = b("requestAnimationFramePolyfill")(function() {});
        k[c] = a;
        return c
    }

    function p(a) {
        a = b("TimeSlice").guard(a, "requestAnimationFrame", {
            propagationType: b("TimeSlice").PropagationType.CONTINUATION
        });
        var c = b("requestAnimationFramePolyfill")(a);
        b("TimeSlice").registerForCancelling(g + c, a);
        return c
    }
    e.exports = function(a, c) {
        if (b("Env").gk_raf_flush) return o(a, c);
        else return p(a)
    };
    e.exports.Priorities = m;
    e.exports.cancelVirtualRAF = function(a) {
        if (b("Env").gk_raf_flush) {
            b("TimeSlice").cancel(k[a]);
            delete k[a];
            if (l) {
                a = l[a];
                a && (a.deleted = !0)
            }
        }
    }
}), null);
__d("EventProfilerImpl", ["Arbiter", "Bootloader", "BrowserEventBasedInteraction", "CurrentEventMeta", "EventConfig", "EventProfilerAdsSessionProvider", "EventProfilerEagerExecution", "EventProfilerInteractionTracker", "EventProfilerSampler", "Parent", "ScriptPath", "TimeSlice", "TimeSliceAutoclosedInteraction", "UserAgent", "getParentClassesForEventProfiler", "gkx", "performanceAbsoluteNow", "requestAnimationFrameAcrossTransitions", "setTimeoutAcrossTransitions", "uniqueID"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {},
        h = {},
        i = {},
        j = !1,
        k = 0;
    c = b("gkx")("849406");
    var l = new Set(["click", "keydown", "mousewheel", "scroll"].concat(c ? ["mouseup", "mousedown", "blur"] : [])),
        m = null,
        n = null,
        o = null,
        p = !1;
    b("Arbiter").subscribe("perf_nub_interaction_trace", function(a, b) {
        p = !0
    });
    var q = {
        __wrapEventListenHandler: function(a) {
            __p && __p();
            return b("EventConfig").disable_event_profiler ? a : function(c, d) {
                __p && __p();
                var e = this;
                if (!b("EventProfilerSampler").canSample(c)) return a.call(this, c, d);
                var f, q = {
                        interaction: 0,
                        event: 0
                    },
                    v = b("performanceAbsoluteNow")();
                d.id = d.id || b("uniqueID")();
                var w = d.id;
                b("CurrentEventMeta").__setCurrentEventID(w);
                var x = i[w],
                    y = null;
                if (h[w] === void 0 && !x) {
                    y = b("getParentClassesForEventProfiler")(d.target);
                    var z = b("EventProfilerSampler").getEventInteractionIDs(c, y);
                    f = b("EventProfilerEagerExecution").getEagerExecution(z, c);
                    p && c === "click" ? (z.push("PerfNubTrace"), q = {
                        interaction: 1,
                        event: 1
                    }, p = !1) : q = u(d, z);
                    o != null && o.beforeHandlers(w, c);
                    m = b("EventProfilerInteractionTracker").createNewInteraction(z, c, q.interaction, f);
                    z = a.call(this, c, d);
                    i[w] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")
                } else q = u(d, []), z = x(function() {
                    i[w] = b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");
                    return a.call(e, c, d)
                });
                f = b("performanceAbsoluteNow")();
                if (h[w] === void 0) {
                    y = y;
                    x = s(d);
                    x = x || v;
                    var A = Math.max(v - x, 0),
                        B = t(d.target, "data-referrer"),
                        C = null;
                    b("UserAgent").isBrowser("Chrome") && (C = !!d.cancelable);
                    var D = C && (!!d.deliberateSync || b("UserAgent").isBrowser("Chrome < 51"));
                    h[w] = {
                        event_name: c,
                        event_start_ms: Math.round(x),
                        main_thread_wait_ms: Math.round(A),
                        event_handlers_runtime_ms: 0,
                        script_path: b("ScriptPath").getScriptPath() || "<unknown>",
                        request_animation_frame_wait_ms: 0,
                        set_timeout_wait_ms: 0
                    };
                    g[w] = {
                        event_target_raw: y,
                        weight: q.event,
                        cancelable: !!C,
                        deliberate_sync: !!D,
                        ad_account_id: n,
                        event_end_ms: 0
                    };
                    A = b("EventProfilerAdsSessionProvider").sessionID;
                    A && (g[w].ads_session_id = A);
                    var E = !1;
                    l.has(c) && (!j && k < x && (j = !0, E = !0), g[w].is_first_in_frame = E, g[w].is_first_overlapping = E, o && o.eventListener(c, d.target));
                    if (m) {
                        q = m.trace();
                        q.addVectorAnnotation("event_target_stack", y).addVectorAnnotation("pagelets", B)
                    }
                    var F = m;
                    b("requestAnimationFrameAcrossTransitions")(function() {
                        __p && __p();
                        var a;
                        m = null;
                        var d = b("performanceAbsoluteNow")();
                        h[w].request_animation_frame_wait_ms = Math.round(d - g[w].event_end_ms);
                        delete g[w].event_end_ms;
                        var e = !1;

                        function f() {
                            __p && __p();
                            if (e) return;
                            e = !0;
                            var a = b("performanceAbsoluteNow")();
                            h[w].set_timeout_wait_ms = Math.round(a - d);
                            r(w, v, a);
                            l.has(c) && E && (j = !1, k = a);
                            a = i[w];
                            a && (b("TimeSlice").cancel(a), delete i[w]);
                            F && F.inform("TTI", {
                                isPointOfInterest: !0
                            });
                            delete h[w];
                            delete g[w]
                        }((a = o) == null ? void 0 : a.doubleRAFPaintHeuristic) === !0 && b("requestAnimationFrameAcrossTransitions")(f);
                        b("setTimeoutAcrossTransitions")(f, 0)
                    })
                }
                h[w].event_handlers_runtime_ms += f - v;
                g[w].event_end_ms = f;
                o != null && o.afterEachHandler(w, h[w]);
                b("CurrentEventMeta").__setCurrentEventID(null);
                m && m.informPointWithOverride("tti_ts", {
                    isPointOfInterest: !0
                });
                return z
            }
        },
        tagCurrentActiveInteractionsAs: function(a) {
            q.getActiveInteractions().forEach(function(b) {
                b.tagAsInteractionID(a)
            }), b("EventProfilerEagerExecution").getActiveExecutions().forEach(function(b) {
                return b.tagAsInteractionID(a)
            })
        },
        informManualInteractionTimestamp: function(a, b, c) {},
        markManualStart: function(a, c, d) {
            return b("EventProfilerInteractionTracker").markManualStart(a, c, d)
        },
        getActiveInteractions: function() {
            return b("TimeSliceAutoclosedInteraction").getInteractionsActiveRightNow().filter(function(a) {
                return a instanceof b("BrowserEventBasedInteraction") && a.isEnabled()
            })
        },
        informPointOnActiveInteractions: function(a, b, c) {
            q.getActiveInteractions().map(function(d) {
                d = d.inform(a, b);
                c && d.addStringAnnotation("is_goal_point", "1")
            })
        },
        notifyRunningEagerInteraction: function(a, c) {
            var d = u({
                type: c
            }, a);
            return b("EventProfilerEagerExecution").declareEagerExecution(a, c, d.interaction)
        },
        setCurrentAdAccountId: function(a) {
            n = a
        },
        setAdsConfig: function(a) {
            o = a
        }
    };

    function r(a, c, d) {
        c = h[a];
        c.event_handlers_runtime_ms = Math.round(c.event_handlers_runtime_ms);
        var e = Object.assign({}, h[a], g[a]);
        o != null && o.beforeLog(a, e);
        e.weight && b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger", "PerfXSharedFields"], function(a, b) {
            b.addCommonValues(e), new a().updateData(e).log()
        }, "EventProfilerImpl");
        b("CurrentEventMeta").__informEventDataReady(a, h[a])
    }
    var s = function() {
        function b(a) {
            return null
        }
        if (!a.performance || !a.performance.now || !a.performance.timing || !a.performance.timing.navigationStart) return b;
        var c = a.performance.timing.navigationStart,
            d = a.CustomEvent && (typeof a.CustomEvent === "function" || a.CustomEvent.toString().indexOf("CustomEventConstructor") > -1);
        d = d ? new a.CustomEvent("test").timeStamp : a.document.createEvent("KeyboardEvent").timeStamp;
        return d && d <= a.performance.now() ? function(a) {
            return a.timeStamp + c
        } : b
    }();

    function t(a, c) {
        var d = [];
        while (a && a instanceof HTMLElement) {
            var e = a.getAttribute(c);
            e && d.push(e);
            a = b("Parent").byAttribute(a.parentNode, c)
        }
        return d.reverse()
    }

    function u(a, c) {
        return o != null ? o.getEventSampleWeights(a, c) : b("EventProfilerSampler").getEventSampleWeights(a, c)
    }
    e.exports = q
}), null);
__d("Base64", [], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    function h(a) {
        a = a.charCodeAt(0) << 16 | a.charCodeAt(1) << 8 | a.charCodeAt(2);
        return String.fromCharCode(g.charCodeAt(a >>> 18), g.charCodeAt(a >>> 12 & 63), g.charCodeAt(a >>> 6 & 63), g.charCodeAt(a & 63))
    }
    var i = ">___?456789:;<=_______\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19______\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123";

    function j(a) {
        a = i.charCodeAt(a.charCodeAt(0) - 43) << 18 | i.charCodeAt(a.charCodeAt(1) - 43) << 12 | i.charCodeAt(a.charCodeAt(2) - 43) << 6 | i.charCodeAt(a.charCodeAt(3) - 43);
        return String.fromCharCode(a >>> 16, a >>> 8 & 255, a & 255)
    }
    var k = {
        encode: function(a) {
            a = unescape(encodeURI(a));
            var b = (a.length + 2) % 3;
            a = (a + "\0\0".slice(b)).replace(/[\s\S]{3}/g, h);
            return a.slice(0, a.length + b - 2) + "==".slice(b)
        },
        decode: function(a) {
            a = a.replace(/[^A-Za-z0-9+\/]/g, "");
            var b = a.length + 3 & 3;
            a = (a + "AAA".slice(b)).replace(/..../g, j);
            a = a.slice(0, a.length + b - 3);
            try {
                return decodeURIComponent(escape(a))
            } catch (a) {
                throw new Error("Not valid UTF-8")
            }
        },
        encodeObject: function(a) {
            return k.encode(JSON.stringify(a))
        },
        decodeObject: function(a) {
            return JSON.parse(k.decode(a))
        },
        encodeNums: function(a) {
            return String.fromCharCode.apply(String, a.map(function(a) {
                return g.charCodeAt((a | -(a > 63 ? 1 : 0)) & -(a > 0 ? 1 : 0) & 63)
            }))
        }
    };
    e.exports = k
}), null);
__d("XControllerURIBuilder", ["invariant", "URI", "gkx"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b) {
            this.$1 = {}, this.$2 = a, this.$3 = b
        }
        var c = a.prototype;
        c.setInt = function(a, b) {
            return this.__setParam(a, "Int", b)
        };
        c.setFBID = function(a, b) {
            return this.__setParam(a, "FBID", b)
        };
        c.setFloat = function(a, b) {
            return this.__setParam(a, "Float", b)
        };
        c.setString = function(a, b) {
            return this.__setParam(a, "String", b)
        };
        c.setExists = function(a, b) {
            b === !1 && (b = void 0);
            return this.__setParam(a, "Exists", b)
        };
        c.setBool = function(a, b) {
            return this.__setParam(a, "Bool", b)
        };
        c.setEnum = function(a, b) {
            return this.__setParam(a, "Enum", b)
        };
        c.setPath = function(a, b) {
            return this.__setParam(a, "Path", b)
        };
        c.setIntVector = function(a, b) {
            return this.__setParam(a, "IntVector", b)
        };
        c.setIntKeyset = function(a, b) {
            return this.__setParam(a, "IntKeyset", b)
        };
        c.setIntSet = function(a, b) {
            return this.__setParam(a, "IntSet", b.join(","))
        };
        c.setFloatVector = function(a, b) {
            return this.__setParam(a, "FloatVector", b)
        };
        c.setFloatSet = function(a, b) {
            return this.__setParam(a, "FloatSet", b.join(","))
        };
        c.setStringVector = function(a, b) {
            return this.__setParam(a, "StringVector", b)
        };
        c.setStringKeyset = function(a, b) {
            return this.__setParam(a, "StringKeyset", b)
        };
        c.setStringSet = function(a, b) {
            return this.__setParam(a, "StringSet", b)
        };
        c.setFBIDVector = function(a, b) {
            return this.__setParam(a, "FBIDVector", b)
        };
        c.setFBIDSet = function(a, b) {
            return this.__setParam(a, "FBIDSet", b)
        };
        c.setFBIDKeyset = function(a, b) {
            return this.__setParam(a, "FBIDKeyset", b)
        };
        c.setEnumVector = function(a, b) {
            return this.__setParam(a, "EnumVector", b)
        };
        c.setEnumSet = function(a, b) {
            return this.__setParam(a, "EnumSet", b)
        };
        c.setEnumKeyset = function(a, b) {
            return this.__setParam(a, "EnumKeyset", b)
        };
        c.setIntToIntMap = function(a, b) {
            return this.__setParam(a, "IntToIntMap", b)
        };
        c.setIntToFloatMap = function(a, b) {
            return this.__setParam(a, "IntToFloatMap", b)
        };
        c.setIntToStringMap = function(a, b) {
            return this.__setParam(a, "IntToStringMap", b)
        };
        c.setIntToBoolMap = function(a, b) {
            return this.__setParam(a, "IntToBoolMap", b)
        };
        c.setStringToIntMap = function(a, b) {
            return this.__setParam(a, "StringToIntMap", b)
        };
        c.setStringToFloatMap = function(a, b) {
            return this.__setParam(a, "StringToFloatMap", b)
        };
        c.setStringToStringMap = function(a, b) {
            return this.__setParam(a, "StringToStringMap", b)
        };
        c.setStringToNullableStringMap = function(a, b) {
            return this.__setParam(a, "StringToNullableStringMap", b)
        };
        c.setStringToBoolMap = function(a, b) {
            return this.__setParam(a, "StringToBoolMap", b)
        };
        c.setStringToEnumMap = function(a, b) {
            return this.__setParam(a, "StringToEnumMap", b)
        };
        c.setEnumToStringVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToStringVectorMap", b)
        };
        c.setEnumToBoolMap = function(a, b) {
            return this.__setParam(a, "EnumToBoolMap", b)
        };
        c.setEnumToFBIDVectorMap = function(a, b) {
            return this.__setParam(a, "EnumToFBIDVectorMap", b)
        };
        c.setHackType = function(a, b) {
            return this.__setParam(a, "HackType", b)
        };
        c.setTypeAssert = function(a, b) {
            return this.__setParam(a, "TypeAssert", b)
        };
        c.__validateRequiredParamsExistence = function() {
            for (var a in this.$3) !this.$3[a].required || Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 903, a)
        };
        c.setParams = function(a) {
            for (var b in a) {
                this.__assertParamExists(b);
                var c = this.$3[b].type;
                this.__setParam(b, c, a[b])
            }
            return this
        };
        c.__assertParamExists = function(a) {
            a in this.$3 || g(0, 904, a)
        };
        c.__setParam = function(a, b, c) {
            this.__assertParamExists(a);
            var d = this.$3[a].type;
            d === b || g(0, 905, a, b, d);
            this.__setParamInt(a, c);
            return this
        };
        c.__setParamInt = function(a, b) {
            this.$1[a] = b
        };
        c.getRequest = function(a) {
            return a.setReplaceTransportMarkers().setURI(this.getURI())
        };
        c.getURI = function() {
            __p && __p();
            this.__validateRequiredParamsExistence();
            var a = {},
                c = "",
                d = /^(.*)?\{(\?)?(\*)?(.+?)\}(.*)?$/,
                e = this.$2.split("/"),
                f = !1;
            for (var h = 0; h < e.length; h++) {
                var i = e[h];
                if (i === "") continue;
                var j = d.exec(i);
                if (!j) c += "/" + i;
                else {
                    i = j[2] === "?";
                    var k = j[4],
                        l = this.$3[k];
                    l || g(0, 906, k, this.$2);
                    if (i && f) continue;
                    if (this.$1[k] == null && i) {
                        f = !0;
                        continue
                    }
                    this.$1[k] != null || g(0, 907, k);
                    l = j[1] ? j[1] : "";
                    i = j[5] ? j[5] : "";
                    c += "/" + l + this.$1[k] + i;
                    a[k] = !0
                }
            }
            this.$2.slice(-1) === "/" && (c += "/");
            c === "" && (c = "/");
            j = new(b("URI"))(c);
            for (var m in this.$1) {
                l = this.$1[m];
                if (!a[m] && l != null) {
                    i = this.$3[m];
                    j.addQueryData(m, i && i.type === "Exists" ? null : l)
                }
            }
            return j
        };
        c.getLookasideURI = function() {
            var a = "origincache.facebook.com";
            b("gkx")("676940") && (a = "lookaside.internmc.facebook.com");
            return this.getURI().setDomain(a).setProtocol("https")
        };
        a.create = function(b, c) {
            return function() {
                return new a(b, c)
            }
        };
        return a
    }();
    e.exports = a
}), null);
__d("XRequest", ["invariant"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = function a(b, c, d) {
        __p && __p();
        var e;
        switch (b) {
            case "Bool":
                e = c && c !== "false" && c !== "0" || !1;
                break;
            case "Int":
                e = c.toString();
                /-?\d+/.test(e) || g(0, 5041, c);
                break;
            case "Float":
                e = parseFloat(c, 10);
                isNaN(e) && g(0, 5042, c);
                break;
            case "FBID":
                e = c.toString();
                for (var f = 0; f < e.length; ++f) {
                    var h = e.charCodeAt(f);
                    48 <= h && h <= 57 || g(0, 5043, c)
                }
                break;
            case "String":
                e = c.toString();
                break;
            case "Enum":
                d === 0 ? e = a("Int", c, null) : d === 1 ? e = a("String", c, null) : d === 2 ? e = c : g(0, 5044, d);
                break;
            default:
                if (h = /^Nullable(\w+)$/.exec(b)) c === null ? e = null : e = a(h[1], c, d);
                else if (f = /^(\w+)Vector$/.exec(b)) {
                    !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c;
                    var i = f[1];
                    typeof i === "string" || g(0, 5045);
                    e = e.map(function(b) {
                        return a(i, b, d && d.member)
                    })
                } else if (h = /^(\w+)(Set|Keyset)$/.exec(b)) !Array.isArray(c) ? (e = c.toString(), e = e === "" ? [] : e.split(",")) : e = c, e = e.reduce(function(a, b) {
                    a[b] = b;
                    return a
                }, {}), i = h[1], typeof i === "string" || g(0, 5045), e = Object.keys(e).map(function(b) {
                    return a(i, e[b], d && d.member)
                });
                else if (f = /^(\w+)To(\w+)Map$/.exec(b)) {
                    e = {};
                    var j = f[1],
                        k = f[2];
                    typeof j === "string" && typeof k === "string" || g(0, 5045);
                    Object.keys(c).forEach(function(b) {
                        e[a(j, b, d && d.key)] = a(k, c[b], d && d.value)
                    })
                } else g(0, 5046, b)
        }
        return e
    };
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b, c) {
            __p && __p();
            this.$1 = b;
            this.$2 = babelHelpers["extends"]({}, c.getQueryData());
            b = a.split("/").filter(function(a) {
                return a
            });
            a = c.getPath().split("/").filter(function(a) {
                return a
            });
            for (var d = 0; d < b.length; ++d) {
                var e = /^\{(\?)?(\*)?(\w+)\}$/.exec(b[d]);
                if (!e) {
                    b[d] === a[d] || g(0, 5047, c.getPath());
                    continue
                }
                var f = !!e[1],
                    h = !!e[2];
                !h || d === b.length - 1 || g(0, 5048, i);
                var i = e[3];
                Object.prototype.hasOwnProperty.call(this.$1, i) || g(0, 5049, i);
                this.$1[i].required ? f && g(0, 5050, i) : f || g(0, 5057, i);
                a[d] && (this.$2[i] = h ? a.slice(d).join("/") : a[d])
            }
            Object.keys(this.$1).forEach(function(a) {
                !this.$1[a].required || Object.prototype.hasOwnProperty.call(this.$2, a) || g(0, 5051)
            }, this)
        }
        var b = a.prototype;
        b.getExists = function(a) {
            return this.$2[a] !== void 0
        };
        b.getBool = function(a) {
            return this.$3(a, "Bool")
        };
        b.getInt = function(a) {
            return this.$3(a, "Int")
        };
        b.getFloat = function(a) {
            return this.$3(a, "Float")
        };
        b.getFBID = function(a) {
            return this.$3(a, "FBID")
        };
        b.getString = function(a) {
            return this.$3(a, "String")
        };
        b.getEnum = function(a) {
            return this.$3(a, "Enum")
        };
        b.getOptionalInt = function(a) {
            return this.$4(a, "Int")
        };
        b.getOptionalFloat = function(a) {
            return this.$4(a, "Float")
        };
        b.getOptionalFBID = function(a) {
            return this.$4(a, "FBID")
        };
        b.getOptionalString = function(a) {
            return this.$4(a, "String")
        };
        b.getOptionalEnum = function(a) {
            return this.$4(a, "Enum")
        };
        b.getIntVector = function(a) {
            return this.$3(a, "IntVector")
        };
        b.getFloatVector = function(a) {
            return this.$3(a, "FloatVector")
        };
        b.getFBIDVector = function(a) {
            return this.$3(a, "FBIDVector")
        };
        b.getStringVector = function(a) {
            return this.$3(a, "StringVector")
        };
        b.getEnumVector = function(a) {
            return this.$3(a, "EnumVector")
        };
        b.getOptionalIntVector = function(a) {
            return this.$4(a, "IntVector")
        };
        b.getOptionalFloatVector = function(a) {
            return this.$4(a, "FloatVector")
        };
        b.getOptionalFBIDVector = function(a) {
            return this.$4(a, "FBIDVector")
        };
        b.getOptionalStringVector = function(a) {
            return this.$4(a, "StringVector")
        };
        b.getOptionalEnumVector = function(a) {
            return this.$4(a, "EnumVector")
        };
        b.getIntSet = function(a) {
            return this.$3(a, "IntSet")
        };
        b.getFBIDSet = function(a) {
            return this.$3(a, "FBIDSet")
        };
        b.getFBIDKeyset = function(a) {
            return this.$3(a, "FBIDKeyset")
        };
        b.getStringSet = function(a) {
            return this.$3(a, "StringSet")
        };
        b.getEnumKeyset = function(a) {
            return this.$3(a, "EnumKeyset")
        };
        b.getOptionalIntSet = function(a) {
            return this.$4(a, "IntSet")
        };
        b.getOptionalFBIDSet = function(a) {
            return this.$4(a, "FBIDSet")
        };
        b.getOptionalFBIDKeyset = function(a) {
            return this.$4(a, "FBIDKeyset")
        };
        b.getOptionalStringSet = function(a) {
            return this.$4(a, "StringSet")
        };
        b.getEnumToBoolMap = function(a) {
            return this.$3(a, "EnumToBoolMap")
        };
        b.getEnumToEnumMap = function(a) {
            return this.$3(a, "EnumToEnumMap")
        };
        b.getEnumToFloatMap = function(a) {
            return this.$3(a, "EnumToFloatMap")
        };
        b.getEnumToIntMap = function(a) {
            return this.$3(a, "EnumToIntMap")
        };
        b.getEnumToStringMap = function(a) {
            return this.$3(a, "EnumToStringMap")
        };
        b.getIntToBoolMap = function(a) {
            return this.$3(a, "IntToBoolMap")
        };
        b.getIntToEnumMap = function(a) {
            return this.$3(a, "IntToEnumMap")
        };
        b.getIntToFloatMap = function(a) {
            return this.$3(a, "IntToFloatMap")
        };
        b.getIntToIntMap = function(a) {
            return this.$3(a, "IntToIntMap")
        };
        b.getIntToStringMap = function(a) {
            return this.$3(a, "IntToStringMap")
        };
        b.getStringToBoolMap = function(a) {
            return this.$3(a, "StringToBoolMap")
        };
        b.getStringToEnumMap = function(a) {
            return this.$3(a, "StringToEnumMap")
        };
        b.getStringToFloatMap = function(a) {
            return this.$3(a, "StringToFloatMap")
        };
        b.getStringToIntMap = function(a) {
            return this.$3(a, "StringToIntMap")
        };
        b.getStringToStringMap = function(a) {
            return this.$3(a, "StringToStringMap")
        };
        b.getOptionalEnumToBoolMap = function(a) {
            return this.$4(a, "EnumToBoolMap")
        };
        b.getOptionalEnumToEnumMap = function(a) {
            return this.$4(a, "EnumToEnumMap")
        };
        b.getOptionalEnumToFloatMap = function(a) {
            return this.$4(a, "EnumToFloatMap")
        };
        b.getOptionalEnumToIntMap = function(a) {
            return this.$4(a, "EnumToIntMap")
        };
        b.getOptionalEnumToStringMap = function(a) {
            return this.$4(a, "EnumToStringMap")
        };
        b.getOptionalIntToBoolMap = function(a) {
            return this.$4(a, "IntToBoolMap")
        };
        b.getOptionalIntToEnumMap = function(a) {
            return this.$4(a, "IntToEnumMap")
        };
        b.getOptionalIntToFloatMap = function(a) {
            return this.$4(a, "IntToFloatMap")
        };
        b.getOptionalIntToIntMap = function(a) {
            return this.$4(a, "IntToIntMap")
        };
        b.getOptionalIntToStringMap = function(a) {
            return this.$4(a, "IntToStringMap")
        };
        b.getOptionalStringToBoolMap = function(a) {
            return this.$4(a, "StringToBoolMap")
        };
        b.getOptionalStringToEnumMap = function(a) {
            return this.$4(a, "StringToEnumMap")
        };
        b.getOptionalStringToFloatMap = function(a) {
            return this.$4(a, "StringToFloatMap")
        };
        b.getOptionalStringToIntMap = function(a) {
            return this.$4(a, "StringToIntMap")
        };
        b.getOptionalStringToStringMap = function(a) {
            return this.$4(a, "StringToStringMap")
        };
        b.getEnumToNullableEnumMap = function(a) {
            return this.$3(a, "EnumToNullableEnumMap")
        };
        b.getEnumToNullableFloatMap = function(a) {
            return this.$3(a, "EnumToNullableFloatMap")
        };
        b.getEnumToNullableIntMap = function(a) {
            return this.$3(a, "EnumToNullableIntMap")
        };
        b.getEnumToNullableStringMap = function(a) {
            return this.$3(a, "EnumToNullableStringMap")
        };
        b.getIntToNullableEnumMap = function(a) {
            return this.$3(a, "IntToNullableEnumMap")
        };
        b.getIntToNullableFloatMap = function(a) {
            return this.$3(a, "IntToNullableFloatMap")
        };
        b.getIntToNullableIntMap = function(a) {
            return this.$3(a, "IntToNullableIntMap")
        };
        b.getIntToNullableStringMap = function(a) {
            return this.$3(a, "IntToNullableStringMap")
        };
        b.getStringToNullableEnumMap = function(a) {
            return this.$3(a, "StringToNullableEnumMap")
        };
        b.getStringToNullableFloatMap = function(a) {
            return this.$3(a, "StringToNullableFloatMap")
        };
        b.getStringToNullableIntMap = function(a) {
            return this.$3(a, "StringToNullableIntMap")
        };
        b.getStringToNullableStringMap = function(a) {
            return this.$3(a, "StringToNullableStringMap")
        };
        b.getOptionalEnumToNullableEnumMap = function(a) {
            return this.$4(a, "EnumToNullableEnumMap")
        };
        b.getOptionalEnumToNullableFloatMap = function(a) {
            return this.$4(a, "EnumToNullableFloatMap")
        };
        b.getOptionalEnumToNullableIntMap = function(a) {
            return this.$4(a, "EnumToNullableIntMap")
        };
        b.getOptionalEnumToNullableStringMap = function(a) {
            return this.$4(a, "EnumToNullableStringMap")
        };
        b.getOptionalIntToNullableEnumMap = function(a) {
            return this.$4(a, "IntToNullableEnumMap")
        };
        b.getOptionalIntToNullableFloatMap = function(a) {
            return this.$4(a, "IntToNullableFloatMap")
        };
        b.getOptionalIntToNullableIntMap = function(a) {
            return this.$4(a, "IntToNullableIntMap")
        };
        b.getOptionalIntToNullableStringMap = function(a) {
            return this.$4(a, "IntToNullableStringMap")
        };
        b.getOptionalStringToNullableEnumMap = function(a) {
            return this.$4(a, "StringToNullableEnumMap")
        };
        b.getOptionalStringToNullableFloatMap = function(a) {
            return this.$4(a, "StringToNullableFloatMap")
        };
        b.getOptionalStringToNullableIntMap = function(a) {
            return this.$4(a, "StringToNullableIntMap")
        };
        b.getOptionalStringToNullableStringMap = function(a) {
            return this.$4(a, "StringToNullableStringMap")
        };
        b.$3 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            if (!Object.prototype.hasOwnProperty.call(this.$2, a) && c.defaultValue != null) {
                c.required && g(0, 5052);
                return h(b, c.defaultValue, c.enumType)
            }
            c.required || b === "Bool" || c.defaultValue != null || g(0, 5053, b, a, b, a);
            return h(b, this.$2[a], c.enumType)
        };
        b.$4 = function(a, b) {
            this.$5(a, b);
            var c = this.$1[a];
            c.required && g(0, 5054, b, a, b, a);
            c.defaultValue && g(0, 5052);
            return Object.prototype.hasOwnProperty.call(this.$2, a) ? h(b, this.$2[a], c.enumType) : null
        };
        b.$5 = function(a, b) {
            Object.prototype.hasOwnProperty.call(this.$1, a) || g(0, 5055, a), this.$1[a].type === b || g(0, 5056, a, b, this.$1[a].type)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XController", ["XControllerURIBuilder", "XRequest"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a, b) {
            this.$1 = a, this.$2 = b
        }
        var c = a.prototype;
        c.getURIBuilder = function(a) {
            __p && __p();
            var c = new(b("XControllerURIBuilder"))(this.$1, this.$2);
            if (a) {
                var d = this.getRequest(a);
                Object.keys(this.$2).forEach(function(a) {
                    var b = this.$2[a],
                        e = "";
                    !b.required && !Object.prototype.hasOwnProperty.call(b, "defaultValue") && (e = "Optional");
                    e = "get" + e + b.type;
                    e = d[e](a);
                    if (e == null || Object.prototype.hasOwnProperty.call(b, "defaultValue") && e === b.defaultValue) return;
                    b = "set" + b.type;
                    c[b](a, e)
                }, this)
            }
            return c
        };
        c.getRequest = function(a) {
            return new(b("XRequest"))(this.$1, this.$2, a)
        };
        a.create = function(b, c) {
            return new a(b, c)
        };
        return a
    }();
    e.exports = a
}), null);
__d("XLynxAsyncCallbackController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/si/linkclick/ajax_callback/", {
        lynx_uri: {
            type: "String"
        }
    })
}), null);
__d("FBLynxLogging", ["AsyncRequest", "AsyncResponse", "BanzaiODS", "XLynxAsyncCallbackController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        log: function(a) {
            var c = b("XLynxAsyncCallbackController").getURIBuilder().getURI();
            new(b("AsyncRequest"))(c).setData({
                lynx_uri: a
            }).setErrorHandler(function(a) {
                a = a.getError();
                b("BanzaiODS").bumpEntityKey("linkshim", "click_log.post.fail." + a)
            }).setTransportErrorHandler(function(a) {
                a = a.getError();
                b("BanzaiODS").bumpEntityKey("linkshim", "click_log.post.transport_fail." + a)
            }).send()
        }
    };
    e.exports = a
}), null);
__d("isLinkshimURI", ["isBonfireURI", "isFacebookURI", "isMessengerDotComURI"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var c = a.getPath();
        return (c === "/l.php" || c.indexOf("/si/ajax/l/") === 0 || c.indexOf("/l/") === 0 || c.indexOf("l/") === 0) && (b("isFacebookURI")(a) || b("isMessengerDotComURI")(a) || b("isBonfireURI")(a)) ? !0 : !1
    }
    e.exports = a
}), null);
__d("FBLynxBase", ["FBLynxLogging", "LinkshimHandlerConfig", "URI", "$", "isLinkshimURI"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function g(a) {
        if (!b("isLinkshimURI")(a)) return null;
        a = a.getQueryData().u;
        return !a ? null : a
    }
    var h = {
        logAsyncClick: function(a) {
            h.swapLinkWithUnshimmedLink(a);
            a = a.getAttribute("data-lynx-uri");
            if (!a) return;
            b("FBLynxLogging").log(a)
        },
        originReferrerPolicyClick: function(a) {
            var c = b("$")("meta_referrer");
            c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
            h.logAsyncClick(a);
            setTimeout(function() {
                c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy
            }, 100)
        },
        swapLinkWithUnshimmedLink: function(a) {
            var c = a.href,
                d = g(new(b("URI"))(c));
            if (!d) return;
            a.setAttribute("data-lynx-uri", c);
            a.href = d
        },
        revertSwapIfLynxURIPresent: function(a) {
            var b = a.getAttribute("data-lynx-uri");
            if (!b) return;
            a.removeAttribute("data-lynx-uri");
            a.href = b
        }
    };
    e.exports = h
}), null);
__d("FBLynx", ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = b("URI").goURIOnWindow,
        h = {
            alreadySetup: !1,
            setupDelegation: function(a) {
                __p && __p();
                a === void 0 && (a = !1);
                if (document.body == null) {
                    if (a) return;
                    setTimeout(function() {
                        h.setupDelegation(!0)
                    }, 100);
                    return
                }
                if (h.alreadySetup) return;
                h.alreadySetup = !0;
                var c = function(a) {
                    __p && __p();
                    var c = h.getMaybeLynxLink(a.target);
                    if (!c) return;
                    var d = c[0];
                    c = c[1];
                    var e = c,
                        f = new(b("URI"))(c.href),
                        i;
                    if (b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && (c.dataset && c.dataset.attributes)) {
                        i = b("Base64").decodeObject(c.dataset.attributes);
                        if (i && i.open_link) {
                            var j;
                            for (j in i) j !== "open_link" && f.addQueryData(j, i[j]);
                            j = c.cloneNode(!0);
                            j.href = f.toString();
                            e = j
                        }
                    }
                    switch (d) {
                        case "async":
                        case "asynclazy":
                            b("FBLynxBase").logAsyncClick(e);
                            break;
                        case "origin":
                            b("FBLynxBase").originReferrerPolicyClick(e);
                            break;
                        case "hover":
                            h.hoverClick(e);
                            break
                    }
                    b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && i && i.open_link && (a.preventDefault(), g(f, window.open("", e.target), !0))
                };
                b("Event").listen(document.body, "click", c);
                b("LinkshimHandlerConfig").middle_click_requires_event && b("Event").listen(document.body, "mouseup", function(a) {
                    a.button == 1 && c(a)
                });
                b("Event").listen(document.body, "mouseover", function(a) {
                    a = h.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "asynclazy":
                        case "origin":
                        case "hover":
                            h.mouseover(a);
                            break
                    }
                });
                b("Event").listen(document.body, "contextmenu", function(a) {
                    a = h.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "hover":
                        case "origin":
                            h.contextmenu(a);
                            break;
                        case "asynclazy":
                            break
                    }
                })
            },
            getMaybeLynxLink: function(a) {
                a = b("Parent").byAttribute(a, "data-lynx-mode");
                if (a instanceof HTMLAnchorElement) {
                    var c = a.getAttribute("data-lynx-mode");
                    switch (c) {
                        case "async":
                        case "asynclazy":
                        case "hover":
                        case "origin":
                            return [c, a];
                        default:
                            return null
                    }
                }
                return null
            },
            hoverClick: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            },
            mouseover: function(a) {
                b("FBLynxBase").swapLinkWithUnshimmedLink(a)
            },
            contextmenu: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            }
        };
    e.exports = h
}), null);
__d("BanzaiLogger", ["Banzai"], (function(a, b, c, d, e, f) {
    var g = "logger";

    function h(a) {
        return {
            log: function(c, d) {
                b("Banzai").post(i._getRoute(c), d, a)
            },
            logImmediately: function(a, c) {
                b("Banzai").post(i._getRoute(a), c, {
                    signal: !0
                })
            },
            registerToSendWithBeacon: function(a, c, d, e) {
                b("Banzai").registerToSendWithBeacon(i._getRoute(a), c, d, e)
            },
            _getRoute: function(a) {
                return g + ":" + a
            },
            create: h
        }
    }
    var i = h();
    e.exports = i
}), null);
__d("FbtLoggerImpl", ["BanzaiLogger", "ScriptPath"], (function(a, b, c, d, e, f) {
    a = {
        logImpression: function(a) {
            b("BanzaiLogger").log("FbtImpressionsLoggerConfig", {
                hash: a,
                sample_rate: 1,
                script_path: b("ScriptPath").getScriptPath()
            })
        }
    };
    e.exports = a
}), null);
__d("PluginBundleInit", ["DOM"], (function(a, b, c, d, e, f) {
    e.exports = {
        init: function() {
            var a = document.getElementById("jsbundle-loader");
            a && b("DOM").remove(a)
        }
    }
}), null);
__d("PlatformDialog", ["cx", "CSS", "DOMEvent", "DOMEventListener"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h;
    a = function() {
        "use strict";
        __p && __p();
        a.getInstance = function() {
            return h
        };

        function a(a, c, d) {
            __p && __p();
            var e = this;
            h = this;
            this.$1 = a;
            this.$2 = c;
            this.$3 = !1;
            b("DOMEventListener").add(this.$1, "submit", function(c) {
                if (e.$3) {
                    new(b("DOMEvent"))(c).kill();
                    return
                }
                e.$3 = !0;
                d && b("CSS").addClass(a, "_32qa")
            })
        }
        var c = a.prototype;
        c.getForm = function() {
            return this.$1
        };
        c.getDisplay = function() {
            return this.$2
        };
        c.hasBeenSubmitted = function() {
            return this.$3
        };
        return a
    }();
    a.RESPONSE = "platform/dialog/response";
    e.exports = a
}), null);
__d("PluginReturn", ["invariant", "Arbiter", "Log", "PlatformDialog", "PlatformWidgetEndpoint", "Plugin", "URI"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function(a, c) {
        if (c.error_code) {
            b("Log").debug("Plugin Return Error (%s): %s", c.error_code, c.error_message || c.error_description);
            return
        }
        b("Plugin").reload(c.plugin_reload)
    });
    var h = {
        auto: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                a = typeof b === "object" ? b.reloadUrl : b;
                h.reload(a)
            })
        },
        syncPlugins: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                b.crossFrame && h.reload(b.reloadUrl, b.reload, b.identifier)
            })
        },
        reload: function(a, c, d) {
            d = b("URI").getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload", c).addQueryData("id", d);
            if (a) {
                var c = new(b("URI"))(a);
                b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0, 1120);
                d.setPath(c.getPath()).addQueryData(c.getQueryData())
            }
            window.location.replace(d.toString())
        }
    };
    e.exports = h
}), null);
__d("PluginXDReady", ["Arbiter", "UnverifiedXD"], (function(a, b, c, d, e, f) {
    c = {
        handleMessage: function(a) {
            if (!a.method) return;
            try {
                b("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent")
            } catch (a) {}
        }
    };
    a.XdArbiter = c;
    b("UnverifiedXD").send({
        xd_action: "plugin_ready",
        name: window.name
    });
    e.exports = null
}), null);
/**
 * License: https://www.facebook.com/legal/license/qZmK4zWM8-v/
 */
__d("SnappyCompress", [], (function(a, b, c, d, e, f) {
    __p && __p();
    (function a(b, c, d) {
        __p && __p();

        function e(g, h) {
            __p && __p();
            if (!c[g]) {
                if (!b[g]) {
                    var i = typeof requireSnappy == "function" && requireSnappy;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    h = new Error("Cannot find module '" + g + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                i = c[g] = {
                    exports: {}
                };
                b[g][0].call(i.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, i, i.exports, a, b, c, d)
            }
            return c[g].exports
        }
        var f = typeof requireSnappy == "function" && requireSnappy;
        for (var g = 0; g < d.length; g++) e(d[g]);
        return e
    })({
        1: [function(c, a, b) {
            a = window.SnappyJS || {};
            a.uncompress = c("./index").uncompress, a.compress = c("./index").compress, window.SnappyJS = a
        }, {
            "./index": 2
        }],
        2: [function(c, a, b) {
            "use strict";
            __p && __p();

            function a() {
                return "object" == typeof process && "object" == typeof process.versions && "undefined" != typeof process.versions.node ? !0 : !1
            }

            function d(a) {
                return a instanceof Uint8Array && (!k || !Buffer.isBuffer(a))
            }

            function g(a) {
                return a instanceof ArrayBuffer
            }

            function h(a) {
                return k ? Buffer.isBuffer(a) : !1
            }

            function i(a) {
                __p && __p();
                if (!d(a) && !g(a) && !h(a)) throw new TypeError(n);
                var b = !1,
                    c = !1;
                d(a) ? b = !0 : g(a) && (c = !0, a = new Uint8Array(a));
                a = new l(a);
                var e = a.readUncompressedLength();
                if (-1 === e) throw new Error("Invalid Snappy bitstream");
                if (b) {
                    if (b = new Uint8Array(e), !a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream")
                } else if (c) {
                    if (b = new ArrayBuffer(e), c = new Uint8Array(b), !a.uncompressToBuffer(c)) throw new Error("Invalid Snappy bitstream")
                } else if (b = new Buffer(e), !a.uncompressToBuffer(b)) throw new Error("Invalid Snappy bitstream");
                return b
            }

            function j(a) {
                if (!d(a) && !g(a) && !h(a)) throw new TypeError(n);
                var b = !1,
                    c = !1;
                d(a) ? b = !0 : g(a) && (c = !0, a = new Uint8Array(a));
                var e;
                a = new m(a);
                var f = a.maxCompressedLength();
                return b ? (b = new Uint8Array(f), e = a.compressToBuffer(b)) : c ? (b = new ArrayBuffer(f), c = new Uint8Array(b), e = a.compressToBuffer(c)) : (b = new Buffer(f), e = a.compressToBuffer(b)), b.slice(0, e)
            }
            var k = a(),
                l = c("./snappy_decompressor").SnappyDecompressor,
                m = c("./snappy_compressor").SnappyCompressor,
                n = "Argument compressed must be type of ArrayBuffer, Buffer, or Uint8Array";
            b.uncompress = i, b.compress = j
        }, {
            "./snappy_compressor": 3,
            "./snappy_decompressor": 4
        }],
        3: [function(c, a, b) {
            "use strict";
            __p && __p();

            function d(a, b) {
                return 506832829 * a >>> b
            }

            function g(a, b) {
                return a[b] + (a[b + 1] << 8) + (a[b + 2] << 16) + (a[b + 3] << 24)
            }

            function h(a, b, c) {
                return a[b] === a[c] && a[b + 1] === a[c + 1] && a[b + 2] === a[c + 2] && a[b + 3] === a[c + 3]
            }

            function i(a, b, c, d, e) {
                var f;
                for (f = 0; e > f; f++) c[d + f] = a[b + f]
            }

            function j(a, b, c, d, e) {
                return 60 >= c ? (d[e] = c - 1 << 2, e += 1) : 256 > c ? (d[e] = 240, d[e + 1] = c - 1, e += 2) : (d[e] = 244, d[e + 1] = c - 1 & 255, d[e + 2] = c - 1 >>> 8, e += 3), i(a, b, d, e, c), e + c
            }

            function k(a, b, c, d) {
                return 12 > d && 2048 > c ? (a[b] = 1 + (d - 4 << 2) + (c >>> 8 << 5), a[b + 1] = 255 & c, b + 2) : (a[b] = 2 + (d - 1 << 2), a[b + 1] = 255 & c, a[b + 2] = c >>> 8, b + 3)
            }

            function l(a, b, c, d) {
                for (; d >= 68;) b = k(a, b, c, 64), d -= 64;
                return d > 64 && (b = k(a, b, c, 60), d -= 60), k(a, b, c, d)
            }

            function m(a, b, c, e, f) {
                __p && __p();
                for (var i = 1; c >= 1 << i && p >= i;) i += 1;
                i -= 1;
                var k = 32 - i;
                "undefined" == typeof q[i] && (q[i] = new Uint16Array(1 << i));
                var m;
                i = q[i];
                for (m = 0; m < i.length; m++) i[m] = 0;
                var n, o, r, s, t;
                m = b + c;
                var u = b,
                    v = b,
                    w = !0,
                    x = 15;
                if (c >= x)
                    for (c = m - x, b += 1, x = d(g(a, b), k); w;) {
                        s = 32, o = b;
                        do {
                            if (b = o, n = x, t = s >>> 5, s += 1, o = b + t, b > c) {
                                w = !1;
                                break
                            }
                            x = d(g(a, o), k), r = u + i[n], i[n] = b - u
                        } while (!h(a, b, r));
                        if (!w) break;
                        f = j(a, v, b - v, e, f);
                        do {
                            for (t = b, n = 4; m > b + n && a[b + n] === a[r + n];) n += 1;
                            if (b += n, o = t - r, f = l(e, f, o, n), v = b, b >= c) {
                                w = !1;
                                break
                            }
                            s = d(g(a, b - 1), k), i[s] = b - 1 - u, t = d(g(a, b), k), r = u + i[t], i[t] = b - u
                        } while (h(a, b, r));
                        if (!w) break;
                        b += 1, x = d(g(a, b), k)
                    }
                return m > v && (f = j(a, v, m - v, e, f)), f
            }

            function n(a, b, c) {
                do b[c] = 127 & a, a >>>= 7, a > 0 && (b[c] += 128), c += 1; while (a > 0);
                return c
            }

            function c(a) {
                this.array = a
            }
            a = 16;
            var o = 1 << a,
                p = 14,
                q = new Array(p + 1);
            c.prototype.maxCompressedLength = function() {
                var a = this.array.length;
                return 32 + a + Math.floor(a / 6)
            }, c.prototype.compressToBuffer = function(a) {
                var b, c = this.array,
                    d = c.length,
                    e = 0,
                    f = 0;
                for (f = n(d, a, f); d > e;) b = Math.min(d - e, o), f = m(c, e, b, a, f), e += b;
                return f
            }, b.SnappyCompressor = c
        }, {}],
        4: [function(c, a, b) {
            "use strict";
            __p && __p();

            function d(a, b, c, d, e) {
                var f;
                for (f = 0; e > f; f++) c[d + f] = a[b + f]
            }

            function g(a, b, c, d) {
                var e;
                for (e = 0; d > e; e++) a[b + e] = a[b - c + e]
            }

            function c(a) {
                this.array = a, this.pos = 0
            }
            var h = [0, 255, 65535, 16777215, 4294967295];
            c.prototype.readUncompressedLength = function() {
                for (var a, b, c = 0, d = 0; 32 > d && this.pos < this.array.length;) {
                    if (a = this.array[this.pos], this.pos += 1, b = 127 & a, b << d >>> d !== b) return -1;
                    if (c |= b << d, 128 > a) return c;
                    d += 7
                }
                return -1
            }, c.prototype.uncompressToBuffer = function(a) {
                __p && __p();
                for (var b, c, e, f, i = this.array, j = i.length, k = this.pos, l = 0; k < i.length;)
                    if (b = i[k], k += 1, 0 === (3 & b)) {
                        if (c = (b >>> 2) + 1, c > 60) {
                            if (k + 3 >= j) return !1;
                            e = c - 60, c = i[k] + (i[k + 1] << 8) + (i[k + 2] << 16) + (i[k + 3] << 24), c = (c & h[e]) + 1, k += e
                        }
                        if (k + c > j) return !1;
                        d(i, k, a, l, c), k += c, l += c
                    } else {
                        switch (3 & b) {
                            case 1:
                                c = (b >>> 2 & 7) + 4, f = i[k] + (b >>> 5 << 8), k += 1;
                                break;
                            case 2:
                                if (k + 1 >= j) return !1;
                                c = (b >>> 2) + 1, f = i[k] + (i[k + 1] << 8), k += 2;
                                break;
                            case 3:
                                if (k + 3 >= j) return !1;
                                c = (b >>> 2) + 1, f = i[k] + (i[k + 1] << 8) + (i[k + 2] << 16) + (i[k + 3] << 24), k += 4
                        }
                        if (0 === f || f > l) return !1;
                        g(a, l, f, c), l += c
                    }
                return !0
            }, b.SnappyDecompressor = c
        }, {}]
    }, {}, [1]), e.exports = SnappyJS
}), null);
__d("SnappyCompressUtil", ["SnappyCompress"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
        compressUint8ArrayToSnappy: function(a) {
            __p && __p();
            if (a == null) return null;
            var c = null;
            try {
                c = b("SnappyCompress").compress(a)
            } catch (a) {
                return null
            }
            a = "";
            for (var d = 0; d < c.length; d++) a += String.fromCharCode(c[d]);
            return window.btoa(a)
        },
        compressStringToSnappy: function(a) {
            __p && __p();
            if (window.Uint8Array === void 0 || window.btoa === void 0) return null;
            var b = new window.Uint8Array(a.length);
            for (var c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                if (d > 127) return null;
                b[c] = d
            }
            return g.compressUint8ArrayToSnappy(b)
        }
    };
    e.exports = g
}), null);
__d("CallStackExecutionObserver", ["ExecutionContextObservers", "ifRequired", "uniqueID"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = null;

    function h(a, b) {
        __p && __p();
        if (b) {
            var c = b.id,
                d = b.name;
            b = b.interactions;
            var e = Error.stackTraceLimit;
            Error.stackTraceLimit = 1e3;
            var f = new Error().stack;
            Error.stackTraceLimit = e;
            b.forEach(function(b) {
                b.inform(a + ":" + d, {
                    rawStackTrace: f
                }).addStringAnnotation("id", c)
            })
        }
    }
    a = {
        onNewContextCreated: function(a, c, d) {
            __p && __p();
            a = b("ifRequired")("TimeSliceAutoclosedInteraction", function(a) {
                return a
            });
            a = a ? a.getInteractionsActiveRightNow() : [];
            a = a.filter(function(a) {
                return a.isEnabledForMode("full")
            });
            if (d && d.isContinuation && a.length) {
                var e = b("uniqueID")();
                d = Error.stackTraceLimit;
                Error.stackTraceLimit = 1e3;
                var f = new Error().stack;
                Error.stackTraceLimit = d;
                a.forEach(function(a) {
                    var b = a.inform("created_continuation:" + c, {
                        rawStackTrace: f
                    }).addStringAnnotation("id", e);
                    g && b.addStringAnnotation("parentID", g);
                    a.trace().addStringAnnotation("has_stack_trace", "1")
                });
                return {
                    id: e,
                    parentID: g,
                    name: c,
                    interactions: a
                }
            }
            return null
        },
        onContextCanceled: function(a, b) {
            h("cancelling_continuation", b)
        },
        onBeforeContextStarted: function(a, b, c) {
            a = g;
            b && b.id && (g = b.id);
            return {
                executionParentID: a
            }
        },
        onAfterContextStarted: function(a, b, c, d) {
            h("executing_continuation", b);
            return c
        },
        onAfterContextEnded: function(a, b, c, d) {
            c && (g = c.executionParentID), h("executing_continuation_end", b)
        },
        getBeforeID: function() {
            return b("ExecutionContextObservers").beforeIDs.CALL_STACK
        },
        getAfterID: function() {
            return b("ExecutionContextObservers").afterIDs.CALL_STACK
        }
    };
    e.exports = a
}), null);
__d("FBLogMessage", ["ErrorUtils", "FBLoggerMetadata", "TAAL", "TAALOpcodes", "erx", "ex", "sprintf"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = {
            mustfix: "error",
            warn: "warn",
            info: "log"
        },
        h = b("ex"),
        i = function a(b) {
            return function(c) {
                b > 0 && (c(), a(b - 1)(c))
            }
        };
    a = function() {
        __p && __p();

        function a(a) {
            this.project = a, this.metadata = new(b("FBLoggerMetadata"))(), this.taalOpcodes = []
        }
        var c = a.prototype;
        c.$1 = function(c, d) {
            __p && __p();
            var e = this,
                f = 2;
            if (d === void 0) {
                var j = new a("fblogger");
                i(f)(function() {
                    return j.blameToPreviousFrame()
                });
                j.mustfix("You provided an undefined format string to FBLogger, dropping log line");
                return
            }
            var k;
            for (var l = arguments.length, m = new Array(l > 2 ? l - 2 : 0), n = 2; n < l; n++) m[n - 2] = arguments[n];
            if (this.error) {
                k = this.error;
                var o = d + " from %s: %s";
                m.push(k.name);
                m.push(k.message ? b("sprintf").apply(null, b("erx")(k.message)) : "");
                k.message = h.apply(void 0, [o].concat(m))
            } else {
                i(f)(function() {
                    return e.taalOpcodes.unshift(b("TAALOpcodes").PREVIOUS_FRAME)
                });
                if (this.taalOpcodes) {
                    var p = b("TAAL").applyOpcodes(d, this.taalOpcodes);
                    k = new Error(h.apply(void 0, [p].concat(m)))
                } else k = new Error(h.apply(void 0, [d].concat(m)))
            }
            if (this.error && k.name.startsWith("<level:")) {
                var q = new a("fblogger");
                i(f)(function() {
                    return q.blameToPreviousFrame()
                });
                q.warn("Double logging detected")
            }
            var r = "FBLogger" + (this.error ? " caught " + k.name : "");
            k.name = b("sprintf")("<level:%s> <name:%s> %s", c, this.project, r);
            k = b("ErrorUtils").normalizeError(k);
            this.metadata.isEmpty() || (k.fbloggerMetadata = this.metadata.formatMetadata());
            var s = g[c];
            k.type = s;
            if (this.error && (this.taalOpcodes && this.taalOpcodes.length)) {
                var t = new a("fblogger");
                i(f)(function() {
                    return t.blameToPreviousFrame()
                });
                t.warn("Blame helpers do not work with catching")
            }
            b("ErrorUtils").reportError(k, !1, "FBLOGGER")
        };
        c.mustfix = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["mustfix", a].concat(c))
        };
        c.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            this.$1.apply(this, ["warn", a].concat(c))
        };
        c.info = function(a) {};
        c.debug = function(a) {};
        c.catching = function(b) {
            !(b instanceof Error) ? new a("fblogger").blameToPreviousFrame().warn("Catching non-Error object is not supported"): this.error = b;
            return this
        };
        c.blameToPreviousFile = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FILE);
            return this
        };
        c.blameToPreviousFrame = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_FRAME);
            return this
        };
        c.blameToPreviousDirectory = function() {
            this.taalOpcodes.push(b("TAALOpcodes").PREVIOUS_DIR);
            return this
        };
        c.addMetadata = function(a, b, c) {
            this.metadata.addMetadata(a, b, c);
            return this
        };
        return a
    }();
    e.exports = a
}), null);
__d("FBLoggerImpl", ["FBLoggerMetadata", "FBLogMessage"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a) {
        return new(b("FBLogMessage"))(a)
    };
    a.addGlobalMetadata = function(a, c, d) {
        b("FBLoggerMetadata").addGlobalMetadata(a, c, d)
    };
    e.exports = a
}), null);
__d("WorkerUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function b() {
        try {
            return "WorkerGlobalScope" in a && a instanceof a.WorkerGlobalScope
        } catch (a) {
            return !1
        }
    }
    e.exports = {
        isWorkerContext: b
    }
}), null);
__d("getReusableTimeSliceContinuation", [], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();

    function a(a, b, c) {
        __p && __p();
        var d = !1,
            e = a.getGuardedContinuation(c),
            f = function(b) {
                e(function() {
                    d || (e = a.getGuardedContinuation(c)), b()
                })
            };
        f.last = function(a) {
            var b = e;
            g();
            b(a)
        };
        f[b] = {
            cancel: function() {
                d || (a.cancel(e), g(), d = !0)
            },
            tokens: [],
            invoked: !1
        };

        function g() {
            d = !0, e = function(a) {
                a()
            }
        }
        return f
    }
    e.exports = a
}), null);
__d("TimeSliceImpl", ["invariant", "CallStackExecutionObserver", "CircularBuffer", "Env", "ErrorUtils", "FBLoggerImpl", "IntervalTrackingBoundedBuffer", "WorkerUtils", "getReusableTimeSliceContinuation", "nullthrows", "performanceAbsoluteNow", "wrapFunction"], (function(a, b, c, d, e, f, g) {
    __p && __p();
    var h = [],
        i = [],
        j = "key" + Math.random(),
        k = 1,
        l = !1,
        m = 0,
        n = 1,
        o = 2,
        p = {},
        q = m,
        r = new(b("CircularBuffer"))(100),
        s = 0,
        t = 0;
    c = b("Env").timesliceBufferSize;
    c == null && (c = 5e3);
    var u = new(b("IntervalTrackingBoundedBuffer"))(c),
        v = "stackTraceLimit" in Error,
        w = [],
        x = [],
        y = [];

    function z() {
        return A(w)
    }

    function A(a) {
        return a.length > 0 ? a[a.length - 1] : null
    }

    function B(a, c) {
        var d = {};
        b("ErrorUtils").applyWithGuard(F, null, [a, c, d]);
        b("ErrorUtils").applyWithGuard(G, null, [a, c, d]);
        w.push(a);
        x.push(c);
        y.push(d)
    }

    function C(a, b, c) {
        h.forEach(function(d) {
            var e = d.onNewContextCreated(z(), b, c);
            a[d.getBeforeID()] = e
        })
    }

    function D(a, b) {
        h.forEach(function(c) {
            c.onContextCanceled(a, b[c.getBeforeID()])
        })
    }

    function E(a, b, c) {
        i.forEach(function(d) {
            d.onAfterContextEnded(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta)
        })
    }

    function F(a, b, c) {
        h.forEach(function(d) {
            var e = d.onBeforeContextStarted(a, b[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function G(a, b, c) {
        h.forEach(function(d) {
            var e = d.onAfterContextStarted(a, b[d.getBeforeID()], c[d.getBeforeID()], a.meta);
            c[d.getBeforeID()] = e
        })
    }

    function H() {
        __p && __p();
        var a = z(),
            c = A(x),
            d = A(y);
        if (a == null || c == null || d == null) {
            b("FBLoggerImpl")("TimeSlice").mustfix("popped too many times off the timeslice stack");
            l = !1;
            return
        }
        b("ErrorUtils").applyWithGuard(E, null, [a, c, d]);
        l = !a.isRoot;
        w.pop();
        x.pop();
        y.pop()
    }
    var I = {
        PropagationType: {
            CONTINUATION: 0,
            EXECUTION: 1,
            ORPHAN: 2
        },
        guard: function(a, c, d) {
            __p && __p();
            typeof a === "function" || g(0, 3725);
            typeof c === "string" || g(0, 3726);
            var e = J(d);
            if (a[j]) return a;
            e.root || I.checkCoverage();
            var f;
            l && (f = z());
            var h = {},
                i = 0,
                m = void 0,
                n = b("Env").deferred_stack_trace_rate || 0;
            n !== 0 && Math.random() * n <= 1 && b("Env").timeslice_heartbeat_config && b("Env").timeslice_heartbeat_config.isArtilleryOn && d && d.registerCallStack && (m = b("ErrorUtils").normalizeError(new Error("deferred execution source")));
            var o = {
                cancel: function() {
                    o.invoked || b("ErrorUtils").applyWithGuard(D, null, [c, h])
                },
                tokens: [],
                invoked: !1
            };
            n = function() {
                __p && __p();
                var d = b("performanceAbsoluteNow")(),
                    g, j = k++,
                    n = {
                        contextID: j,
                        name: c,
                        isRoot: !l,
                        executionNumber: i++,
                        meta: e,
                        absBeginTimeMs: d
                    };
                o.invoked || (o.invoked = !0, o.tokens.length && (o.tokens.forEach(function(a) {
                    delete p[a]
                }), o.tokens = []));
                B(n, h);
                if (f != null) {
                    var q = !!e.isContinuation;
                    f.isRoot ? (n.indirectParentID = f.contextID, n.isEdgeContinuation = q) : (n.indirectParentID = f.indirectParentID, n.isEdgeContinuation = !!(q && f.isEdgeContinuation))
                }
                var r = b("WorkerUtils").isWorkerContext();
                l = !0;
                try {
                    if (!n.isRoot || r) return a.apply(this, arguments);
                    else {
                        var s = "TimeSlice" + (c ? ": " + c : "");
                        g = b("ErrorUtils").applyWithGuard(a, this, [].concat(Array.prototype.slice.call(arguments)), null, s, {
                            deferredSource: m
                        });
                        return g
                    }
                } finally {
                    var v = z();
                    if (v == null) b("FBLoggerImpl")("TimeSlice").mustfix("timeslice stack misaligned, not logging the block"), l = !1;
                    else {
                        var w = v.isRoot,
                            x = v.contextID,
                            y = v.indirectParentID,
                            A = v.isEdgeContinuation,
                            C = b("performanceAbsoluteNow")();
                        v.absEndTimeMs = C;
                        if (w && d != null) {
                            t += C - d;
                            var D = babelHelpers["extends"]({
                                begin: d,
                                end: C,
                                id: x,
                                indirectParentID: y,
                                representsExecution: !0,
                                isEdgeContinuation: f && A,
                                guard: c
                            }, e, a.__SMmeta);
                            u.pushElement(D)
                        }
                        H()
                    }
                }
            };
            n = n;
            n[j] = o;
            b("ErrorUtils").applyWithGuard(C, null, [h, c, e]);
            return n
        },
        copyGuardForWrapper: function(a, b) {
            a && a[j] && (b[j] = a[j]);
            return b
        },
        cancel: function(a) {
            a = a ? a[j] : null;
            a && !a.invoked && (a.cancel(), a.tokens.forEach(function(a) {
                delete p[a]
            }), a.invoked = !0)
        },
        cancelWithToken: function(a) {
            p[a] && I.cancel(p[a])
        },
        registerForCancelling: function(a, b) {
            a && (b[j] && (p[a] || (b[j].invoked || (p[a] = b, b[j].tokens.push(a)))))
        },
        inGuard: function() {
            return l
        },
        checkCoverage: function() {
            var a;
            if (q !== o && !l) {
                v && (a = Error.stackTraceLimit, Error.stackTraceLimit = 50);
                var c = new Error("Missing TimeSlice coverage");
                v && (Error.stackTraceLimit = a);
                q === n && Math.random() < s ? b("FBLoggerImpl")("TimeSlice").catching(c).debug("Missing TimeSlice coverage") : q === m && b("nullthrows")(r).write(c)
            }
        },
        setLogging: function(a, c) {
            if (q !== m) return;
            s = c;
            a ? (q = n, b("nullthrows")(r).read().forEach(function(a) {
                Math.random() < s && b("FBLoggerImpl")("TimeSlice").catching(a).warn("error from logging buffer")
            })) : q = o;
            b("nullthrows")(r).clear();
            r = void 0
        },
        getContext: function() {
            return z()
        },
        getTotalTime: function() {
            return t
        },
        getGuardedContinuation: function(a) {
            return I.guard(function(a) {
                for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                return a.apply(this, c)
            }, a, {
                propagationType: I.PropagationType.CONTINUATION
            })
        },
        getReusableContinuation: function(a) {
            return b("getReusableTimeSliceContinuation")(I, j, a)
        },
        getPlaceholderReusableContinuation: function() {
            var a = function(a) {
                return a()
            };
            a.last = a;
            return a
        },
        getGuardNameStack: function() {
            return w.map(function(a) {
                return a.name
            })
        },
        registerExecutionContextObserver: function(a) {
            __p && __p();
            var b = !1;
            for (var c = 0; c < h.length; c++)
                if (h[c].getBeforeID() > a.getBeforeID()) {
                    h.splice(c, 0, a);
                    b = !0;
                    break
                }
            b || h.push(a);
            for (var c = 0; c < i.length; c++)
                if (i[c].getAfterID() > a.getAfterID()) {
                    i.splice(c, 0, a);
                    return
                }
            i.push(a)
        },
        catchUpOnDemandExecutionContextObservers: function(a) {
            for (var b = 0; b < w.length; b++) {
                var c = w[b],
                    d = x[b],
                    e = y[b] || {};
                d = a.onBeforeContextStartedWhileEnabled(c, d[a.getBeforeID()], c.meta);
                e[a.getBeforeID()] = d;
                y[b] = e
            }
        },
        getBuffer: function() {
            return u
        }
    };

    function J(a) {
        __p && __p();
        var b = {};
        a && a.propagateCounterAttribution !== void 0 && (b.propagateCounterAttribution = a.propagateCounterAttribution);
        a && a.root !== void 0 && (b.root = a.root);
        switch (a && a.propagationType) {
            case I.PropagationType.CONTINUATION:
                b.isContinuation = !0;
                b.extendsExecution = !0;
                break;
            case I.PropagationType.ORPHAN:
                b.isContinuation = !1;
                b.extendsExecution = !1;
                break;
            case I.PropagationType.EXECUTION:
            default:
                b.isContinuation = !1, b.extendsExecution = !0
        }
        return b
    }
    b("Env").sample_continuation_stacktraces && I.registerExecutionContextObserver(b("CallStackExecutionObserver"));
    b("wrapFunction").setWrapper(I.guard, "entry");
    a.TimeSlice = I;
    e.exports = I
}), 3);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation", "TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = b("TimerStorage").IDLE_CALLBACK;

    function a(a) {
        b("TimerStorage").unset(g, a);
        var c = g + String(a);
        b("TimeSlice").cancelWithToken(c);
        b("IdleCallbackImplementation").cancelIdleCallback(a)
    }
    e.exports = a
}), null);
__d("clearTimeoutBlue", ["TimerStorage", "TimeSlice"], (function(a, b, c, d, e, f) {
    var g = a.__fbNativeClearTimeout || a.clearTimeout,
        h = b("TimerStorage").TIMEOUT;

    function c(a) {
        if (a != null) {
            b("TimerStorage").unset(h, a);
            var c = h + String(a);
            b("TimeSlice").cancelWithToken(c)
        }
        g(a)
    }
    e.exports = c
}), null);
__d("legacy:bootloader", ["Bootloader"], (function(a, b, c, d, e, f) {
    a.Bootloader = b("Bootloader")
}), 3);
__d("LinkshimAsyncLink", ["AsyncSignal", "DOM", "LinkshimHandlerConfig", "UserAgent_DEPRECATED", "$"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        swap: function(a, c) {
            var d = b("UserAgent_DEPRECATED").ie() <= 8;
            if (d) {
                var e = b("DOM").create("wbr", {}, null);
                b("DOM").appendContent(a, e)
            }
            a.href = c;
            d && b("DOM").remove(e)
        },
        referrer_log: function(a, c, d) {
            var e = b("$")("meta_referrer");
            e.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
            g.swap(a, c);
            setTimeout(function() {
                e.content = b("LinkshimHandlerConfig").default_meta_referrer_policy, new(b("AsyncSignal"))(d, {}).send()
            }, 100)
        }
    };
    e.exports = g
}), null);
__d("legacy:dom-asynclinkshim", ["LinkshimAsyncLink"], (function(a, b, c, d, e, f) {
    a.LinkshimAsyncLink = b("LinkshimAsyncLink")
}), 3);
__d("lowerDomain", ["lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    ((a = document.domain) != null ? a : "").toLowerCase().match(/(^|\.)(facebook|facebookcorewwwi|workplace)\..*/) && b("lowerFacebookDomain")()
}), null);
__d("markJSEnabled", [], (function(a, b, c, d, e, f) {
    a = document.documentElement;
    a.className = a.className.replace("no_js", "")
}), null);
__d("requestIdleCallbackBlue", ["TimerStorage", "TimeSlice", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f) {
    e.exports = function(c, d) {
        var e;

        function f(a) {
            b("TimerStorage").unset(b("TimerStorage").IDLE_CALLBACK, e), c(a)
        }
        b("TimeSlice").copyGuardForWrapper(c, f);
        e = b("requestIdleCallbackAcrossTransitions").call(a, f, d);
        b("TimerStorage").set(b("TimerStorage").IDLE_CALLBACK, e);
        return e
    }
}), null);
__d("setTimeoutBlue", ["TimerStorage", "TimeSlice", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f) {
    __p && __p();

    function a(a, c) {
        __p && __p();
        var d, e = function() {
            b("TimerStorage").unset(b("TimerStorage").TIMEOUT, d);
            for (var c = arguments.length, e = new Array(c), f = 0; f < c; f++) e[f] = arguments[f];
            Function.prototype.apply.call(a, this, e)
        };
        b("TimeSlice").copyGuardForWrapper(a, e);
        for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
        d = b("setTimeoutAcrossTransitions").apply(void 0, [e, c].concat(g));
        b("TimerStorage").set(b("TimerStorage").TIMEOUT, d);
        return d
    }
    e.exports = a
}), null);
__d("wait_for_load", ["Run"], (function(a, b, c, d, e, f) {
    __p && __p();

    function c(a, c, d) {
        __p && __p();
        d = d.bind(a, c);
        if (window.domready) return d();
        switch ((c || event).type) {
            case "load":
            case "focus":
                b("Run").onAfterLoad(d);
                return;
            case "click":
                var e = a.style,
                    f = document.body.style;
                e.cursor = f.cursor = "progress";
                b("Run").onAfterLoad(function() {
                    e.cursor = f.cursor = "", a.tagName.toLowerCase() == "a" ? !1 !== d() && a.href && (window.location.href = a.href) : a.click && a.click()
                });
                break
        }
        return !1
    }
    a.wait_for_load = c
}), 3);

__d("PluginQuote", ["Arbiter", "DOM", "DOMEventListener", "UnverifiedXD"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        init: function(a) {
            b("DOMEventListener").add(a, "click", function() {
                b("UnverifiedXD").send({
                    type: "getTextSelection"
                })
            }), b("Arbiter").subscribe("Connect.Unsafe.setTextSelection", function(c, d) {
                b("DOM").insertAfter(a, b("DOM").create("input", {
                    type: "hidden",
                    id: "quotationtext",
                    value: d.text
                }))
            })
        }
    };
    e.exports = a
}), null);
__d("PluginShareLogTypes", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        IMPRESSION: "impression",
        CLICK: "click"
    })
}), null);
__d("XSharePluginLoggingController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/platform/plugin/share/logging/", {})
}), null);
__d("PluginShareActions", ["AsyncRequest", "Event", "PluginShareLogTypes", "XSharePluginLoggingController"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        init: function(a, c, d, e, f, g, h) {
            b("Event").listen(f, "click", function(f) {
                new(b("AsyncRequest"))().setURI(b("XSharePluginLoggingController").getURIBuilder().getURI()).setData({
                    app_id: g,
                    href: a,
                    layout: c,
                    event: b("PluginShareLogTypes").CLICK,
                    has_iframe: d,
                    referer_url: e
                }).send()
            })
        }
    };
    e.exports = a
}), null);
__d("PopupLink", ["DOMEvent", "DOMEventListener", "Popup"], (function(a, b, c, d, e, f) {
    a = {
        listen: function(a, c, d) {
            b("DOMEventListener").add(a, "click", function(e) {
                new(b("DOMEvent"))(e).kill(), b("Popup").open(a.href, c, d)
            })
        }
    };
    e.exports = a
}), null);
__d("CookieBannerComponent", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        BANNER: "banner",
        CLOSE_BUTTON: "close_button"
    })
}), null);
__d("CookieConsentBlacklist", ["CookieBannerComponent", "Parent"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    a = {
        isBlacklisted: function(a) {
            __p && __p();
            a = a;
            if (!this.hasCookieBanner()) return !0;
            var c = b("Parent").byAttribute(a, "data-cookiebanner");
            if (c) {
                c = c.getAttribute("data-cookiebanner");
                switch (c) {
                    case b("CookieBannerComponent").CLOSE_BUTTON:
                        return !1;
                    case b("CookieBannerComponent").BANNER:
                        return !0
                }
            }
            c = b("Parent").byAttribute(a, "data-nocookies");
            if (c) return !0;
            a.tagName.toLowerCase() !== "a" && (a = b("Parent").byTag(a, "a"));
            if (a instanceof HTMLAnchorElement && typeof a.href === "string") {
                c = a.href;
                for (var a = 0; a < this.blacklistedHrefs.length; a++)
                    if (c.indexOf(this.blacklistedHrefs[a]) > -1) return !0
            }
            return !1
        },
        blacklistedHrefs: ["/about/basics", "/ads/settings", "/help/111814505650678", "/help/1561485474074139", "/help/568137493302217", "/help/769828729705201", "/help/cookies", "/policies/cookies", "/policy/cookies", "/privacy/explanation"],
        hasCookieBanner: function() {
            var a = document.querySelectorAll('[data-cookiebanner="' + b("CookieBannerComponent").BANNER + '"]');
            return a.length > 0
        }
    };
    e.exports = a
}), null);
__d("XAsyncRequest", ["AsyncRequest"], (function(a, b, c, d, e, f) {
    __p && __p();
    a = function() {
        "use strict";
        __p && __p();

        function a(a) {
            this.$1 = new(b("AsyncRequest"))(a)
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$1.setURI(a);
            return this
        };
        c.setOption = function(a, b) {
            this.$1.setOption(a, b);
            return this
        };
        c.setMethod = function(a) {
            this.$1.setMethod(a);
            return this
        };
        c.setData = function(a) {
            this.$1.setData(a);
            return this
        };
        c.setHandler = function(a) {
            this.$1.setHandler(a);
            return this
        };
        c.setPayloadHandler = function(a) {
            this.setHandler(function(b) {
                return a(b.payload)
            });
            return this
        };
        c.setErrorHandler = function(a) {
            this.$1.setErrorHandler(a);
            return this
        };
        c.send = function() {
            this.$1.send();
            return this
        };
        c.abort = function() {
            this.$1.abort()
        };
        c.setReadOnly = function(a) {
            this.$1.setReadOnly(a);
            return this
        };
        c.setAllowCrossOrigin = function(a) {
            this.$1.setAllowCrossOrigin(a);
            return this
        };
        c.setAllowCredentials = function(a) {
            this.$1.setAllowCredentials(a);
            return this
        };
        c.setAllowCrossPageTransition = function(a) {
            this.$1.setAllowCrossPageTransition(a);
            return this
        };
        return a
    }();
    e.exports = a
}), null);
__d("XConsentCookieController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/cookie/consent/", {})
}), null);
__d("DeferredCookie", ["Cookie", "CookieConsentBlacklist", "Env", "SubscriptionList", "XAsyncRequest", "XConsentCookieController"], (function(a, b, c, d, e, f) {
    "use strict";
    __p && __p();
    var g = new Map();
    a = {
        shouldAddDefaultListener: !0,
        defaultHandler: null,
        autoFlushCookies: !1,
        sentConsentToServer: !1,
        callbacks: new(b("SubscriptionList"))(),
        addToQueue: function(a, c, d, e, f, h, i) {
            if (this.autoFlushCookies) {
                f ? b("Cookie").setWithoutChecksIfFirstPartyContext(a, c, d, e, i) : b("Cookie").setWithoutChecks(a, c, d, e, i);
                return
            }
            if (g.has(a)) return;
            g.set(a, {
                name: a,
                value: c,
                nMilliSecs: d,
                path: e,
                firstPartyOnly: f,
                secure: i
            });
            h && this.addDefaultInteractionListener()
        },
        flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing: function() {
            delete b("Env").defer_cookies, g.forEach(function(a, c) {
                a.firstPartyOnly ? b("Cookie").setWithoutChecksIfFirstPartyContext(a.name, a.value, a.nMilliSecs, a.path, a.secure) : b("Cookie").setWithoutChecks(a.name, a.value, a.nMilliSecs, a.path, a.secure)
            }), this.autoFlushCookies = !0, this.callbacks.fireCallbacks(), g = new Map(), this.removeDefaultInteractionListener()
        },
        flushAllCookies: function() {
            this.flushAllCookiesWithoutRequestingConsentSeePrivacyXFNBeforeUsing();
            if (!this.sentConsentToServer) {
                this.sentConsentToServer = !0;
                var a = b("XConsentCookieController").getURIBuilder().getURI();
                new(b("XAsyncRequest"))(a).send()
            }
        },
        removeDefaultInteractionListener: function() {
            this.shouldAddDefaultListener = !1, this.defaultHandler && (window.removeEventListener ? window.removeEventListener("click", this.defaultHandler, !0) : document.detachEvent && document.detachEvent("onclick", this.defaultHandler), this.defaultHandler = null)
        },
        addDefaultInteractionListener: function() {
            this.shouldAddDefaultListener && (this.shouldAddDefaultListener = !1, this.defaultHandler = this.baseInteractionHandler.bind(this), window.addEventListener ? window.addEventListener("click", this.defaultHandler, !0) : document.attachEvent && document.attachEvent("onclick", this.defaultHandler))
        },
        registerCallbackOnCookieFlush: function(a) {
            this.autoFlushCookies ? a() : this.callbacks.add(a)
        },
        baseInteractionHandler: function(a) {
            var c = a.target;
            if (!(c instanceof HTMLElement)) return;
            if (a instanceof MouseEvent && !this.isValidClick(a)) return;
            b("CookieConsentBlacklist").isBlacklisted(c) || this.flushAllCookies()
        },
        isValidClick: function(a) {
            return a.which === void 0 ? !0 : a.which == 1
        },
        canEmbedThirdPartyPixel: function() {
            return b("Env").no_cookies === !0 || b("Env").defer_cookies === !0 ? !1 : this.autoFlushCookies || g.size === 0
        }
    };
    e.exports = a
}), null);
__d("XRefererFrameController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/common/referer_frame.php", {})
}), null);
__d("isDevelopersURI", ["isFacebookURI"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("isFacebookURI")(a) && a.getSubdomain() === "developers"
    }
    e.exports = a
}), null);
__d("ControlledReferer", ["Bootloader", "DeferredCookie", "URI", "UserAgent", "XRefererFrameController", "isBonfireURI", "isDevelopersURI", "isMessengerDotComURI", "isOculusDotComURI", "isWorkplaceDotComURI", "lowerFacebookDomain"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        useFacebookReferer: function(a, c, d) {
            __p && __p();
            if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
                b("Bootloader").loadModules(["BanzaiODS"], function(a) {
                    a.bumpEntityKey("defer_cookies", "block_controlled_referer_iframe")
                }, "ControlledReferer");
                return
            }
            var e = !1;

            function f() {
                if (e) return;
                var b = a.contentWindow.location.pathname;
                if (b !== "/intern/common/referer_frame.php" && b !== "/common/referer_frame.php") return;
                e = !0;
                a.contentWindow.document.body.style.margin = 0;
                c()
            }
            var g;
            b("isMessengerDotComURI")(b("URI").getRequestURI()) || b("isBonfireURI")(b("URI").getRequestURI()) ? g = b("XRefererFrameController").getURIBuilder().getURI().toString() : b("isOculusDotComURI")(b("URI").getRequestURI()) ? g = "/common/referer_frame.php" : !b("lowerFacebookDomain").isValidDocumentDomain() ? g = "/intern/common/referer_frame.php" : b("UserAgent").isBrowser("Opera") && !b("isDevelopersURI")(b("URI").getRequestURI()) ? g = b("XRefererFrameController").getURIBuilder().getURI().toString() : g = b("XRefererFrameController").getURIBuilder().getURI().qualify().setProtocol("https").setSubdomain("staticxx").toString();
            d == null && b("isWorkplaceDotComURI")(b("URI").getRequestURI()) && (d = "workplace");
            d && (g += "?fb_source=" + d);
            a.onload = f;
            a.src = g
        },
        useFacebookRefererHtml: function(a, b, c) {
            g.useFacebookReferer(a, function() {
                a.contentWindow.document.body.innerHTML = b
            }, c)
        }
    };
    e.exports = g
}), null);
__d("TrackingPixel", ["Arbiter", "ControlledReferer", "DeferredCookie", "FBLogger"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        _iframe: void 0,
        loadWithNoReferrer: function(a) {
            __p && __p();
            if (!b("DeferredCookie").canEmbedThirdPartyPixel()) {
                b("FBLogger")("tracking_pixel").mustfix("Attempting to load a TrackingPixel (%s) while cookies are deferred. This is not allowed because tracking pixels sometimes set cookies.", a);
                return
            }
            if (!g._iframe) {
                var c = document.createElement("iframe");
                c.frameborder = 0;
                c.width = c.height = 1;
                c.style.position = "absolute";
                c.style.top = "-10px";
                b("ControlledReferer").useFacebookReferer(c, function() {
                    b("Arbiter").inform("TrackingPixel/iframeIsLoaded", null, "persistent")
                }, null);
                document.body.appendChild(c);
                g._iframe = c
            }
            b("Arbiter").subscribe("TrackingPixel/iframeIsLoaded", function() {
                var b = g._iframe.contentWindow;
                b = new b.Image();
                b.src = a
            })
        }
    };
    e.exports = g
}), null);
__d("areJSONRepresentationsEqual", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        return JSON.stringify(a) == JSON.stringify(b)
    }
    e.exports = a
}), null);
__d("UIForm", ["ArbiterMixin", "BehaviorsMixin", "DOM", "Event", "Form", "Run", "areJSONRepresentationsEqual", "mixin"], (function(a, b, c, d, e, f) {
    __p && __p();
    c = function(a) {
        "use strict";
        __p && __p();
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e, f, g) {
            __p && __p();
            var h;
            h = a.call(this) || this;
            h._root = c;
            h.controller = c;
            h._message = d;
            f && (h._confirm_dialog = f, f.subscribe("confirm", h._handleDialogConfirm.bind(babelHelpers.assertThisInitialized(h))), b("DOM").prependContent(h._root, b("DOM").create("input", {
                type: "hidden",
                name: "confirmed",
                value: "true"
            })));
            b("Run").onAfterLoad(function() {
                this._originalState = b("Form").serialize(this._root)
            }.bind(babelHelpers.assertThisInitialized(h)));
            h._forceDirty = e;
            h._confirmed = !1;
            h._submitted = !1;
            b("Event").listen(h._root, "submit", h._handleSubmit.bind(babelHelpers.assertThisInitialized(h)));
            g && g.length && h.enableBehaviors(g);
            c = !0;
            b("Run").onBeforeUnload(h.checkUnsaved.bind(babelHelpers.assertThisInitialized(h)), c);
            return h
        }
        var d = c.prototype;
        d.getRoot = function() {
            return this._root
        };
        d._handleSubmit = function() {
            if (this._confirm_dialog && !this._confirmed) {
                this._confirm_dialog.show();
                return !1
            }
            if (this.inform("submit") === !1) return !1;
            this._submitted = !0;
            return !0
        };
        d._handleDialogConfirm = function() {
            this._confirmed = !0, this._confirm_dialog.hide(), this._root.getAttribute("ajaxify") ? b("Event").fire(this._root, "submit") : this._handleSubmit() && this._root.submit()
        };
        d.reset = function() {
            this.inform("reset"), this._submitted = !1, this._confirmed = !1
        };
        d.isDirty = function() {
            if (this._submitted || !b("DOM").contains(document.body, this._root)) return !1;
            if (this._forceDirty) return !0;
            if (!this._originalState) return !1;
            var a = b("Form").serialize(this._root);
            return !b("areJSONRepresentationsEqual")(a, this._originalState)
        };
        d.checkUnsaved = function() {
            return this.isDirty() ? this._message : null
        };
        return c
    }(b("mixin")(b("ArbiterMixin"), b("BehaviorsMixin")));
    e.exports = a.UIForm || c
}), null);
__d("VerifiedXD", ["XD"], (function(a, b, c, d, e, f) {
    a = b("XD").XD;
    e.exports = a
}), null);
__d("VerifyDomain", ["Arbiter", "CSS", "VerifiedXD", "guid"], (function(a, b, c, d, e, f) {
    __p && __p();
    var g = {
        VERIFIED: "platform/plugins/verify_domain",
        verify: function(a) {
            if (location.ancestorOrigins && location.ancestorOrigins.length > 0) location.ancestorOrigins[0] === a && b("Arbiter").inform(g.VERIFIED, null, "state");
            else {
                var c = b("guid")();
                b("Arbiter").subscribe("Connect.Unsafe.xd/verify", function(a, d) {
                    d === c && b("Arbiter").inform(g.VERIFIED, null, "state")
                });
                b("VerifiedXD").send({
                    type: "verify",
                    token: c
                })
            }
        },
        show: function(a) {
            b("Arbiter").subscribe(g.VERIFIED, b("CSS").show.bind(null, a))
        }
    };
    e.exports = g
}), null);