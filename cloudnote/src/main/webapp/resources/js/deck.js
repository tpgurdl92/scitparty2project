! function(e) {
    function t() {
        h || (h = !0, l(f, function(e) {
            d(e)
        }))
    }

    function r(t, r) {
        var n = e.createElement("script");
        n.type = "text/" + (t.type || "javascript"), n.src = t.src || t, n.async = !1, n.onreadystatechange = n.onload = function() {
            var e = n.readyState;
            !r.done && (!e || /loaded|complete/.test(e)) && (r.done = !0, r())
        }, (e.body || m).appendChild(n)
    }

    function n(e, t) {
        return e.state == E ? t && t() : e.state == S ? x.ready(e.name, t) : e.state == A ? e.onpreload.push(function() {
            n(e, t)
        }) : (e.state = S, void r(e.url, function() {
            e.state = E, t && t(), l(v[e.name], function(e) {
                d(e)
            }), s() && h && l(v.ALL, function(e) {
                d(e)
            })
        }))
    }

    function a(e) {
        void 0 === e.state && (e.state = A, e.onpreload = [], r({
            src: e.url,
            type: "cache"
        }, function() {
            i(e)
        }))
    }

    function i(e) {
        e.state = k, l(e.onpreload, function(e) {
            e.call()
        })
    }

    function s(e) {
        e = e || y;
        var t;
        for (var r in e) {
            if (e.hasOwnProperty(r) && e[r].state != E) return !1;
            t = !0
        }
        return t
    }

    function o(e) {
        return "[object Function]" == Object.prototype.toString.call(e)
    }

    function l(e, t) {
        if (e) {
            "object" == typeof e && (e = [].slice.call(e));
            for (var r = 0; r < e.length; r++) t.call(e, e[r], r)
        }
    }

    function u(e) {
        var t;
        if ("object" == typeof e)
            for (var r in e) e[r] && (t = {
                name: r,
                url: e[r]
            });
        else t = {
            name: c(e),
            url: e
        };
        var n = y[t.name];
        return n && n.url === t.url ? n : (y[t.name] = t, t)
    }

    function c(e) {
        var t = e.split("/"),
            r = t[t.length - 1],
            n = r.indexOf("?");
        return -1 != n ? r.substring(0, n) : r
    }

    function d(e) {
        e._done || (e(), e._done = 1)
    }
    var p, h, m = e.documentElement,
        f = [],
        g = [],
        v = {},
        y = {},
        b = e.createElement("script").async === !0 || "MozAppearance" in e.documentElement.style || window.opera,
        w = window.head_conf && head_conf.head || "head",
        x = window[w] = window[w] || function() {
            x.ready.apply(null, arguments)
        },
        k = 1,
        A = 2,
        S = 3,
        E = 4;
    if (x.js = b ? function() {
            var e = arguments,
                t = e[e.length - 1],
                r = {};
            return o(t) || (t = null), l(e, function(a, i) {
                a != t && (a = u(a), r[a.name] = a, n(a, t && i == e.length - 2 ? function() {
                    s(r) && d(t)
                } : null))
            }), x
        } : function() {
            var e = arguments,
                t = [].slice.call(e, 1),
                r = t[0];
            return p ? (r ? (l(t, function(e) {
                o(e) || a(u(e))
            }), n(u(e[0]), o(r) ? r : function() {
                x.js.apply(null, t)
            })) : n(u(e[0])), x) : (g.push(function() {
                x.js.apply(null, e)
            }), x)
        }, x.ready = function(t, r) {
            if (t == e) return h ? d(r) : f.push(r), x;
            if (o(t) && (r = t, t = "ALL"), "string" != typeof t || !o(r)) return x;
            var n = y[t];
            if (n && n.state == E || "ALL" == t && s() && h) return d(r), x;
            var a = v[t];
            return a ? a.push(r) : a = v[t] = [r], x
        }, x.ready(e, function() {
            s() && l(v.ALL, function(e) {
                d(e)
            }), x.feature && x.feature("domloaded", !0)
        }), window.addEventListener) e.addEventListener("DOMContentLoaded", t, !1), window.addEventListener("load", t, !1);
    else if (window.attachEvent) {
        e.attachEvent("onreadystatechange", function() {
            "complete" === e.readyState && t()
        });
        var L = 1;
        try {
            L = window.frameElement
        } catch (M) {}!L && m.doScroll && function() {
            try {
                m.doScroll("left"), t()
            } catch (e) {
                return void setTimeout(arguments.callee, 1)
            }
        }(), window.attachEvent("onload", t)
    }!e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", handler = function() {
        e.removeEventListener("DOMContentLoaded", handler, !1), e.readyState = "complete"
    }, !1)), setTimeout(function() {
        p = !0, l(g, function(e) { e() })}, 300)}(document),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.katex = e()
    }
}(function() {
    return function e(t, r, n) {
        function a(s, o) {
            if (!r[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!o && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = r[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var r = t[s][1][e];
                    return a(r ? r : e)
                }, c, c.exports, e, t, r, n)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
        return a
    }({
        1: [function(e, t) {
            var r = e("./src/ParseError"),
                n = e("./src/Settings"),
                a = e("./src/buildTree"),
                i = e("./src/parseTree"),
                s = e("./src/utils"),
                o = function(e, t, r) {
                    s.clearNode(t);
                    var o = new n(r),
                        l = i(e, o),
                        u = a(l, e, o).toNode();
                    t.appendChild(u)
                };
            "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), o = function() {
                throw new r("KaTeX doesn't work in quirks mode.")
            });
            var l = function(e, t) {
                    var r = new n(t),
                        s = i(e, r);
                    return a(s, e, r).toMarkup()
                },
                u = function(e, t) {
                    var r = new n(t);
                    return i(e, r)
                };
            t.exports = {
                render: o,
                renderToString: l,
                __parse: u,
                ParseError: r
            }
        }, {
            "./src/ParseError": 6,
            "./src/Settings": 8,
            "./src/buildTree": 13,
            "./src/parseTree": 22,
            "./src/utils": 25
        }],
        2: [function(e, t) {
            "use strict";

            function r(e) {
                if (!e.__matchAtRelocatable) {
                    var t = e.source + "|()",
                        r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
                    e.__matchAtRelocatable = new RegExp(t, r)
                }
                return e.__matchAtRelocatable
            }

            function n(e, t, n) {
                if (e.global || e.sticky) throw new Error("matchAt(...): Only non-global regexes are supported");
                var a = r(e);
                a.lastIndex = n;
                var i = a.exec(t);
                return null == i[i.length - 1] ? (i.length = i.length - 1, i) : null
            }
            t.exports = n
        }, {}],
        3: [function(e, t) {
            function r(e) {
                this.input = e, this.pos = 0
            }

            function n(e, t, r, n) {
                this.text = e, this.start = t, this.end = r, this.lexer = n
            }
            var a = e("match-at"),
                i = e("./ParseError");
            n.prototype.range = function(e, t) {
                return e.lexer !== this.lexer ? new n(t) : new n(t, this.start, e.end, this.lexer)
            };
            var s = new RegExp("([ \r\n	]+)|([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff]|[\ud800-\udbff][\udc00-\udfff]|\\\\(?:[a-zA-Z]+|[^\ud800-\udfff]))");
            r.prototype.lex = function() {
                var e = this.input,
                    t = this.pos;
                if (t === e.length) return new n("EOF", t, t, this);
                var r = a(s, e, t);
                if (null === r) throw new i("Unexpected character: '" + e[t] + "'", new n(e[t], t, t + 1, this));
                var o = r[2] || " ",
                    l = this.pos;
                this.pos += r[0].length;
                var u = this.pos;
                return new n(o, l, u, this)
            }, t.exports = r
        }, {
            "./ParseError": 6,
            "match-at": 2
        }],
        4: [function(e, t) {
            function r(e, t) {
                this.lexer = new n(e), this.macros = t, this.stack = [], this.discardedWhiteSpace = []
            }
            var n = e("./Lexer");
            r.prototype.nextToken = function() {
                for (;;) {
                    0 === this.stack.length && this.stack.push(this.lexer.lex());
                    var e = this.stack.pop(),
                        t = e.text;
                    if ("\\" !== t.charAt(0) || !this.macros.hasOwnProperty(t)) return e;
                    var r = this.macros[t];
                    if ("string" == typeof r) {
                        var a = new n(r);
                        r = [];
                        for (var i = a.lex();
                            "EOF" !== i.text;) r.push(i), i = a.lex();
                        r.reverse(), this.macros[t] = r
                    }
                    this.stack = this.stack.concat(r)
                }
            }, r.prototype.get = function(e) {
                this.discardedWhiteSpace = [];
                var t = this.nextToken();
                if (e)
                    for (;
                        " " === t.text;) this.discardedWhiteSpace.push(t), t = this.nextToken();
                return t
            }, r.prototype.unget = function(e) {
                for (this.stack.push(e); 0 !== this.discardedWhiteSpace.length;) this.stack.push(this.discardedWhiteSpace.pop())
            }, t.exports = r
        }, {
            "./Lexer": 3
        }],
        5: [function(e, t) {
            function r(e) {
                this.style = e.style, this.color = e.color, this.size = e.size, this.phantom = e.phantom, this.font = e.font, this.parentStyle = void 0 === e.parentStyle ? e.style : e.parentStyle, this.parentSize = void 0 === e.parentSize ? e.size : e.parentSize
            }
            r.prototype.extend = function(e) {
                var t = {
                    style: this.style,
                    size: this.size,
                    color: this.color,
                    parentStyle: this.style,
                    parentSize: this.size,
                    phantom: this.phantom,
                    font: this.font
                };
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                return new r(t)
            }, r.prototype.withStyle = function(e) {
                return this.extend({
                    style: e
                })
            }, r.prototype.withSize = function(e) {
                return this.extend({
                    size: e
                })
            }, r.prototype.withColor = function(e) {
                return this.extend({
                    color: e
                })
            }, r.prototype.withPhantom = function() {
                return this.extend({
                    phantom: !0
                })
            }, r.prototype.withFont = function(e) {
                return this.extend({
                    font: e || this.font
                })
            }, r.prototype.reset = function() {
                return this.extend({})
            };
            var n = {
                "katex-blue": "#6495ed",
                "katex-orange": "#ffa500",
                "katex-pink": "#ff00af",
                "katex-red": "#df0030",
                "katex-green": "#28ae7b",
                "katex-gray": "gray",
                "katex-purple": "#9d38bd",
                "katex-blueA": "#ccfaff",
                "katex-blueB": "#80f6ff",
                "katex-blueC": "#63d9ea",
                "katex-blueD": "#11accd",
                "katex-blueE": "#0c7f99",
                "katex-tealA": "#94fff5",
                "katex-tealB": "#26edd5",
                "katex-tealC": "#01d1c1",
                "katex-tealD": "#01a995",
                "katex-tealE": "#208170",
                "katex-greenA": "#b6ffb0",
                "katex-greenB": "#8af281",
                "katex-greenC": "#74cf70",
                "katex-greenD": "#1fab54",
                "katex-greenE": "#0d923f",
                "katex-goldA": "#ffd0a9",
                "katex-goldB": "#ffbb71",
                "katex-goldC": "#ff9c39",
                "katex-goldD": "#e07d10",
                "katex-goldE": "#a75a05",
                "katex-redA": "#fca9a9",
                "katex-redB": "#ff8482",
                "katex-redC": "#f9685d",
                "katex-redD": "#e84d39",
                "katex-redE": "#bc2612",
                "katex-maroonA": "#ffbde0",
                "katex-maroonB": "#ff92c6",
                "katex-maroonC": "#ed5fa6",
                "katex-maroonD": "#ca337c",
                "katex-maroonE": "#9e034e",
                "katex-purpleA": "#ddd7ff",
                "katex-purpleB": "#c6b9fc",
                "katex-purpleC": "#aa87ff",
                "katex-purpleD": "#7854ab",
                "katex-purpleE": "#543b78",
                "katex-mintA": "#f5f9e8",
                "katex-mintB": "#edf2df",
                "katex-mintC": "#e0e5cc",
                "katex-grayA": "#f6f7f7",
                "katex-grayB": "#f0f1f2",
                "katex-grayC": "#e3e5e6",
                "katex-grayD": "#d6d8da",
                "katex-grayE": "#babec2",
                "katex-grayF": "#888d93",
                "katex-grayG": "#626569",
                "katex-grayH": "#3b3e40",
                "katex-grayI": "#21242c",
                "katex-kaBlue": "#314453",
                "katex-kaGreen": "#71B307"
            };
            r.prototype.getColor = function() {
                return this.phantom ? "transparent" : n[this.color] || this.color
            }, t.exports = r
        }, {}],
        6: [function(e, t) {
            function r(e, t) {
                var n, a, i = "KaTeX parse error: " + e;
                if (t && t.lexer && t.start <= t.end) {
                    var s = t.lexer.input;
                    n = t.start, a = t.end, i += n === s.length ? " at end of input: " : " at position " + (n + 1) + ": ";
                    var o, l = s.slice(n, a).replace(/[^]/g, "$&\u0332");
                    o = n > 15 ? "\u2026" + s.slice(n - 15, n) : s.slice(0, n);
                    var u;
                    u = a + 15 < s.length ? s.slice(a, a + 15) + "\u2026" : s.slice(a), i += o + l + u
                }
                var c = new Error(i);
                return c.name = "ParseError", c.__proto__ = r.prototype, c.position = n, c
            }
            r.prototype.__proto__ = Error.prototype, t.exports = r
        }, {}],
        7: [function(e, t) {
            function r(e, t) {
                this.gullet = new s(e, t.macros), this.settings = t, this.leftrightDepth = 0
            }

            function n(e, t, r) {
                this.result = e, this.isFunction = t, this.token = r
            }
            var a = e("./functions"),
                i = e("./environments"),
                s = e("./MacroExpander"),
                o = e("./symbols"),
                l = e("./utils"),
                u = e("./unicodeRegexes").cjkRegex,
                c = e("./parseData"),
                d = e("./ParseError"),
                p = c.ParseNode;
            r.prototype.expect = function(e, t) {
                if (this.nextToken.text !== e) throw new d("Expected '" + e + "', got '" + this.nextToken.text + "'", this.nextToken);
                t !== !1 && this.consume()
            }, r.prototype.consume = function() {
                this.nextToken = this.gullet.get("math" === this.mode)
            }, r.prototype.switchMode = function(e) {
                this.gullet.unget(this.nextToken), this.mode = e, this.consume()
            }, r.prototype.parse = function() {
                this.mode = "math", this.consume();
                var e = this.parseInput();
                return e
            }, r.prototype.parseInput = function() {
                var e = this.parseExpression(!1);
                return this.expect("EOF", !1), e
            };
            var h = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"];
            r.prototype.parseExpression = function(e, t) {
                for (var r = [];;) {
                    var n = this.nextToken;
                    if (-1 !== h.indexOf(n.text)) break;
                    if (t && n.text === t) break;
                    if (e && a[n.text] && a[n.text].infix) break;
                    var i = this.parseAtom();
                    if (!i) {
                        if (!this.settings.throwOnError && "\\" === n.text[0]) {
                            var s = this.handleUnsupportedCmd();
                            r.push(s);
                            continue
                        }
                        break
                    }
                    r.push(i)
                }
                return this.handleInfixNodes(r)
            }, r.prototype.handleInfixNodes = function(e) {
                for (var t, r = -1, n = 0; n < e.length; n++) {
                    var a = e[n];
                    if ("infix" === a.type) {
                        if (-1 !== r) throw new d("only one infix operator per group", a.value.token);
                        r = n, t = a.value.replaceWith
                    }
                }
                if (-1 !== r) {
                    var i, s, o = e.slice(0, r),
                        l = e.slice(r + 1);
                    i = 1 === o.length && "ordgroup" === o[0].type ? o[0] : new p("ordgroup", o, this.mode), s = 1 === l.length && "ordgroup" === l[0].type ? l[0] : new p("ordgroup", l, this.mode);
                    var u = this.callFunction(t, [i, s], null);
                    return [new p(u.type, u, this.mode)]
                }
                return e
            };
            var m = 1;
            r.prototype.handleSupSubscript = function(e) {
                var t = this.nextToken,
                    r = t.text;
                this.consume();
                var n = this.parseGroup();
                if (n) {
                    if (n.isFunction) {
                        var i = a[n.result].greediness;
                        if (i > m) return this.parseFunction(n);
                        throw new d("Got function '" + n.result + "' with no arguments as " + e, t)
                    }
                    return n.result
                }
                if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new d("Expected group after '" + r + "'", t);
                return this.handleUnsupportedCmd()
            }, r.prototype.handleUnsupportedCmd = function() {
                for (var e = this.nextToken.text, t = [], r = 0; r < e.length; r++) t.push(new p("textord", e[r], "text"));
                var n = new p("text", {
                        body: t,
                        type: "text"
                    }, this.mode),
                    a = new p("color", {
                        color: this.settings.errorColor,
                        value: [n],
                        type: "color"
                    }, this.mode);
                return this.consume(), a
            }, r.prototype.parseAtom = function() {
                var e = this.parseImplicitGroup();
                if ("text" === this.mode) return e;
                for (var t, r;;) {
                    var n = this.nextToken;
                    if ("\\limits" === n.text || "\\nolimits" === n.text) {
                        if (!e || "op" !== e.type) throw new d("Limit controls must follow a math operator", n);
                        var a = "\\limits" === n.text;
                        e.value.limits = a, e.value.alwaysHandleSupSub = !0, this.consume()
                    } else if ("^" === n.text) {
                        if (t) throw new d("Double superscript", n);
                        t = this.handleSupSubscript("superscript")
                    } else if ("_" === n.text) {
                        if (r) throw new d("Double subscript", n);
                        r = this.handleSupSubscript("subscript")
                    } else {
                        if ("'" !== n.text) break;
                        var i = new p("textord", "\\prime", this.mode),
                            s = [i];
                        for (this.consume();
                            "'" === this.nextToken.text;) s.push(i), this.consume();
                        t = new p("ordgroup", s, this.mode)
                    }
                }
                return t || r ? new p("supsub", {
                    base: e,
                    sup: t,
                    sub: r
                }, this.mode) : e
            };
            var f = ["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"],
                g = ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"];
            r.prototype.parseImplicitGroup = function() {
                var e = this.parseSymbol();
                if (null == e) return this.parseFunction();
                var t, r = e.result;
                if ("\\left" === r) {
                    var n = this.parseFunction(e);
                    ++this.leftrightDepth, t = this.parseExpression(!1), --this.leftrightDepth, this.expect("\\right", !1);
                    var a = this.parseFunction();
                    return new p("leftright", {
                        body: t,
                        left: n.value.value,
                        right: a.value.value
                    }, this.mode)
                }
                if ("\\begin" === r) {
                    var s = this.parseFunction(e),
                        o = s.value.name;
                    if (!i.hasOwnProperty(o)) throw new d("No such environment: " + o, s.value.nameGroup);
                    var u = i[o],
                        c = this.parseArguments("\\begin{" + o + "}", u),
                        h = {
                            mode: this.mode,
                            envName: o,
                            parser: this,
                            positions: c.pop()
                        },
                        m = u.handler(h, c);
                    this.expect("\\end", !1);
                    var v = this.nextToken,
                        y = this.parseFunction();
                    if (y.value.name !== o) throw new d("Mismatch: \\begin{" + o + "} matched by \\end{" + y.value.name + "}", v);
                    return m.position = y.position, m
                }
                return l.contains(f, r) ? (t = this.parseExpression(!1), new p("sizing", {
                    size: "size" + (l.indexOf(f, r) + 1),
                    value: t
                }, this.mode)) : l.contains(g, r) ? (t = this.parseExpression(!0), new p("styling", {
                    style: r.slice(1, r.length - 5),
                    value: t
                }, this.mode)) : this.parseFunction(e)
            }, r.prototype.parseFunction = function(e) {
                if (e || (e = this.parseGroup()), e) {
                    if (e.isFunction) {
                        var t = e.result,
                            r = a[t];
                        if ("text" === this.mode && !r.allowedInText) throw new d("Can't use function '" + t + "' in text mode", e.token);
                        var n = this.parseArguments(t, r),
                            i = e.token,
                            s = this.callFunction(t, n, n.pop(), i);
                        return new p(s.type, s, this.mode)
                    }
                    return e.result
                }
                return null
            }, r.prototype.callFunction = function(e, t, r, n) {
                var i = {
                    funcName: e,
                    parser: this,
                    positions: r,
                    token: n
                };
                return a[e].handler(i, t)
            }, r.prototype.parseArguments = function(e, t) {
                var r = t.numArgs + t.numOptionalArgs;
                if (0 === r) return [
                    [this.pos]
                ];
                for (var i = t.greediness, s = [this.pos], o = [], l = 0; r > l; l++) {
                    var u, c = this.nextToken,
                        p = t.argTypes && t.argTypes[l];
                    if (l < t.numOptionalArgs) {
                        if (u = p ? this.parseGroupOfType(p, !0) : this.parseGroup(!0), !u) {
                            o.push(null), s.push(this.pos);
                            continue
                        }
                    } else if (u = p ? this.parseGroupOfType(p) : this.parseGroup(), !u) {
                        if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new d("Expected group after '" + e + "'", c);
                        u = new n(this.handleUnsupportedCmd(this.nextToken.text), !1)
                    }
                    var h;
                    if (u.isFunction) {
                        var m = a[u.result].greediness;
                        if (!(m > i)) throw new d("Got function '" + u.result + "' as argument to '" + e + "'", c);
                        h = this.parseFunction(u)
                    } else h = u.result;
                    o.push(h), s.push(this.pos)
                }
                return o.push(s), o
            }, r.prototype.parseGroupOfType = function(e, t) {
                var r = this.mode;
                if ("original" === e && (e = r), "color" === e) return this.parseColorGroup(t);
                if ("size" === e) return this.parseSizeGroup(t);
                if (this.switchMode(e), "text" === e)
                    for (;
                        " " === this.nextToken.text;) this.consume();
                var n = this.parseGroup(t);
                return this.switchMode(r), n
            }, r.prototype.parseStringGroup = function(e, t) {
                if (t && "[" !== this.nextToken.text) return null;
                var r = this.mode;
                this.mode = "text", this.expect(t ? "[" : "{");
                for (var n = "", a = this.nextToken, i = a; this.nextToken.text !== (t ? "]" : "}");) {
                    if ("EOF" === this.nextToken.text) throw new d("Unexpected end of input in " + e, a.range(this.nextToken, n));
                    i = this.nextToken, n += i.text, this.consume()
                }
                return this.mode = r, this.expect(t ? "]" : "}"), a.range(i, n)
            }, r.prototype.parseRegexGroup = function(e, t) {
                var r = this.mode;
                this.mode = "text";
                for (var n = this.nextToken, a = n, i = "";
                    "EOF" !== this.nextToken.text && e.test(i + this.nextToken.text);) a = this.nextToken, i += a.text, this.consume();
                if ("" === i) throw new d("Invalid " + t + ": '" + n.text + "'", n);
                return this.mode = r, n.range(a, i)
            }, r.prototype.parseColorGroup = function(e) {
                var t = this.parseStringGroup("color", e);
                if (!t) return null;
                var r = /^(#[a-z0-9]+|[a-z]+)$/i.exec(t.text);
                if (!r) throw new d("Invalid color: '" + t.text + "'", t);
                return new n(new p("color", r[0], this.mode), !1)
            }, r.prototype.parseSizeGroup = function(e) {
                var t;
                if (t = e || "{" === this.nextToken.text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2}$/, "size"), !t) return null;
                var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
                if (!r) throw new d("Invalid size: '" + t.text + "'", t);
                var a = {
                    number: +(r[1] + r[2]),
                    unit: r[3]
                };
                if ("em" !== a.unit && "ex" !== a.unit && "mu" !== a.unit) throw new d("Invalid unit: '" + a.unit + "'", t);
                return new n(new p("color", a, this.mode), !1)
            }, r.prototype.parseGroup = function(e) {
                var t = this.nextToken;
                if (this.nextToken.text === (e ? "[" : "{")) {
                    this.consume();
                    var r = this.parseExpression(!1, e ? "]" : null),
                        a = this.nextToken;
                    return this.expect(e ? "]" : "}"), "text" === this.mode && this.formLigatures(r), new n(new p("ordgroup", r, this.mode, t, a), !1)
                }
                return e ? null : this.parseSymbol()
            }, r.prototype.formLigatures = function(e) {
                var t, r = e.length - 1;
                for (t = 0; r > t; ++t) {
                    var n = e[t],
                        a = n.value;
                    "-" === a && "-" === e[t + 1].value && (r > t + 1 && "-" === e[t + 2].value ? (e.splice(t, 3, new p("textord", "---", "text", n, e[t + 2])), r -= 2) : (e.splice(t, 2, new p("textord", "--", "text", n, e[t + 1])), r -= 1)), "'" !== a && "`" !== a || e[t + 1].value !== a || (e.splice(t, 2, new p("textord", a + a, "text", n, e[t + 1])), r -= 1)
                }
            }, r.prototype.parseSymbol = function() {
                var e = this.nextToken;
                return a[e.text] ? (this.consume(), new n(e.text, !0, e)) : o[this.mode][e.text] ? (this.consume(), new n(new p(o[this.mode][e.text].group, e.text, this.mode, e), !1, e)) : "text" === this.mode && u.test(e.text) ? (this.consume(), new n(new p("textord", e.text, this.mode, e), !1, e)) : null
            }, r.prototype.ParseNode = p, t.exports = r
        }, {
            "./MacroExpander": 4,
            "./ParseError": 6,
            "./environments": 16,
            "./functions": 19,
            "./parseData": 21,
            "./symbols": 23,
            "./unicodeRegexes": 24,
            "./utils": 25
        }],
        8: [function(e, t) {
            function r(e, t) {
                return void 0 === e ? t : e
            }

            function n(e) {
                e = e || {}, this.displayMode = r(e.displayMode, !1), this.throwOnError = r(e.throwOnError, !0), this.errorColor = r(e.errorColor, "#cc0000"), this.macros = e.macros || {}
            }
            t.exports = n
        }, {}],
        9: [function(e, t) {
            function r(e, t, r, n) {
                this.id = e, this.size = t, this.cramped = n, this.sizeMultiplier = r, this.metrics = i[t > 0 ? t - 1 : 0]
            }
            var n, a = e("./fontMetrics.js").sigmas,
                i = [{}, {}, {}];
            for (var s in a)
                if (a.hasOwnProperty(s))
                    for (n = 0; 3 > n; n++) i[n][s] = a[s][n];
            for (n = 0; 3 > n; n++) i[n].emPerEx = a.xHeight[n] / a.quad[n];
            r.prototype.sup = function() {
                return v[y[this.id]]
            }, r.prototype.sub = function() {
                return v[b[this.id]]
            }, r.prototype.fracNum = function() {
                return v[w[this.id]]
            }, r.prototype.fracDen = function() {
                return v[x[this.id]]
            }, r.prototype.cramp = function() {
                return v[k[this.id]]
            }, r.prototype.cls = function() {
                return f[this.size] + (this.cramped ? " cramped" : " uncramped")
            }, r.prototype.reset = function() {
                return g[this.size]
            }, r.prototype.isTight = function() {
                return this.size >= 2
            };
            var o = 0,
                l = 1,
                u = 2,
                c = 3,
                d = 4,
                p = 5,
                h = 6,
                m = 7,
                f = ["displaystyle textstyle", "textstyle", "scriptstyle", "scriptscriptstyle"],
                g = ["reset-textstyle", "reset-textstyle", "reset-scriptstyle", "reset-scriptscriptstyle"],
                v = [new r(o, 0, 1, !1), new r(l, 0, 1, !0), new r(u, 1, 1, !1), new r(c, 1, 1, !0), new r(d, 2, .7, !1), new r(p, 2, .7, !0), new r(h, 3, .5, !1), new r(m, 3, .5, !0)],
                y = [d, p, d, p, h, m, h, m],
                b = [p, p, p, p, m, m, m, m],
                w = [u, c, d, p, h, m, h, m],
                x = [c, c, p, p, m, m, m, m],
                k = [l, l, c, c, p, p, m, m];
            t.exports = {
                DISPLAY: v[o],
                TEXT: v[u],
                SCRIPT: v[d],
                SCRIPTSCRIPT: v[h]
            }
        }, {
            "./fontMetrics.js": 17
        }],
        10: [function(e, t) {
            var r = e("./domTree"),
                n = e("./fontMetrics"),
                a = e("./symbols"),
                i = e("./utils"),
                s = ["\\Gamma", "\\Delta", "\\Theta", "\\Lambda", "\\Xi", "\\Pi", "\\Sigma", "\\Upsilon", "\\Phi", "\\Psi", "\\Omega"],
                o = ["\u0131", "\u0237", "\xa3"],
                l = function(e, t, i, s, o) {
                    a[i][e] && a[i][e].replace && (e = a[i][e].replace);
                    var l, u = n.getCharacterMetrics(e, t);
                    if (u) {
                        var c = u.italic;
                        "text" === i && (c = 0), l = new r.symbolNode(e, u.height, u.depth, c, u.skew, o)
                    } else "undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "'"), l = new r.symbolNode(e, 0, 0, 0, 0, o);
                    return s && (s.style.isTight() && l.classes.push("mtight"), s.getColor() && (l.style.color = s.getColor())), l
                },
                u = function(e, t, r, n) {
                    return "\\" === e || "main" === a[t][e].font ? l(e, "Main-Regular", t, r, n) : l(e, "AMS-Regular", t, r, n.concat(["amsrm"]))
                },
                c = function(e, t, r, n, a) {
                    if ("mathord" === a) return d(e, t, r, n);
                    if ("textord" === a) return l(e, "Main-Regular", t, r, n.concat(["mathrm"]));
                    throw new Error("unexpected type: " + a + " in mathDefault")
                },
                d = function(e, t, r, n) {
                    return /[0-9]/.test(e.charAt(0)) || i.contains(o, e) || i.contains(s, e) ? l(e, "Main-Italic", t, r, n.concat(["mainit"])) : l(e, "Math-Italic", t, r, n.concat(["mathit"]))
                },
                p = function(e, t, r) {
                    var s = e.mode,
                        u = e.value;
                    a[s][u] && a[s][u].replace && (u = a[s][u].replace);
                    var p = ["mord"],
                        h = t.font;
                    if (h) {
                        if ("mathit" === h || i.contains(o, u)) return d(u, s, t, p);
                        var m = x[h].fontName;
                        return n.getCharacterMetrics(u, m) ? l(u, m, s, t, p.concat([h])) : c(u, s, t, p, r)
                    }
                    return c(u, s, t, p, r)
                },
                h = function(e) {
                    var t = 0,
                        r = 0,
                        n = 0;
                    if (e.children)
                        for (var a = 0; a < e.children.length; a++) e.children[a].height > t && (t = e.children[a].height), e.children[a].depth > r && (r = e.children[a].depth), e.children[a].maxFontSize > n && (n = e.children[a].maxFontSize);
                    e.height = t, e.depth = r, e.maxFontSize = n
                },
                m = function(e, t, n) {
                    var a = new r.span(e, t, n);
                    return h(a), a
                },
                f = function(e, t) {
                    e.children = t.concat(e.children), h(e)
                },
                g = function(e) {
                    var t = new r.documentFragment(e);
                    return h(t), t
                },
                v = function(e, t) {
                    var n = m([], [new r.symbolNode("\u200b")]);
                    n.style.fontSize = t / e.style.sizeMultiplier + "em";
                    var a = m(["fontsize-ensurer", "reset-" + e.size, "size5"], [n]);
                    return a
                },
                y = function(e, t, n, a) {
                    var i, s, o;
                    if ("individualShift" === t) {
                        var l = e;
                        for (e = [l[0]], i = -l[0].shift - l[0].elem.depth, s = i, o = 1; o < l.length; o++) {
                            var u = -l[o].shift - s - l[o].elem.depth,
                                c = u - (l[o - 1].elem.height + l[o - 1].elem.depth);
                            s += u, e.push({
                                type: "kern",
                                size: c
                            }), e.push(l[o])
                        }
                    } else if ("top" === t) {
                        var d = n;
                        for (o = 0; o < e.length; o++) d -= "kern" === e[o].type ? e[o].size : e[o].elem.height + e[o].elem.depth;
                        i = d
                    } else i = "bottom" === t ? -n : "shift" === t ? -e[0].elem.depth - n : "firstBaseline" === t ? -e[0].elem.depth : 0;
                    var p = 0;
                    for (o = 0; o < e.length; o++) "elem" === e[o].type && (p = Math.max(p, e[o].elem.maxFontSize));
                    var h = v(a, p),
                        f = [];
                    for (s = i, o = 0; o < e.length; o++)
                        if ("kern" === e[o].type) s += e[o].size;
                        else {
                            var g = e[o].elem,
                                y = -g.depth - s;
                            s += g.height + g.depth;
                            var b = m([], [h, g]);
                            b.height -= y, b.depth += y, b.style.top = y + "em", f.push(b)
                        }
                    var w = m(["baseline-fix"], [h, new r.symbolNode("\u200b")]);
                    f.push(w);
                    var x = m(["vlist"], f);
                    return x.height = Math.max(s, x.height), x.depth = Math.max(-i, x.depth), x
                },
                b = {
                    size1: .5,
                    size2: .7,
                    size3: .8,
                    size4: .9,
                    size5: 1,
                    size6: 1.2,
                    size7: 1.44,
                    size8: 1.73,
                    size9: 2.07,
                    size10: 2.49
                },
                w = {
                    "\\qquad": {
                        size: "2em",
                        className: "qquad"
                    },
                    "\\quad": {
                        size: "1em",
                        className: "quad"
                    },
                    "\\enspace": {
                        size: "0.5em",
                        className: "enspace"
                    },
                    "\\;": {
                        size: "0.277778em",
                        className: "thickspace"
                    },
                    "\\:": {
                        size: "0.22222em",
                        className: "mediumspace"
                    },
                    "\\,": {
                        size: "0.16667em",
                        className: "thinspace"
                    },
                    "\\!": {
                        size: "-0.16667em",
                        className: "negativethinspace"
                    }
                },
                x = {
                    mathbf: {
                        variant: "bold",
                        fontName: "Main-Bold"
                    },
                    mathrm: {
                        variant: "normal",
                        fontName: "Main-Regular"
                    },
                    textit: {
                        variant: "italic",
                        fontName: "Main-Italic"
                    },
                    mathbb: {
                        variant: "double-struck",
                        fontName: "AMS-Regular"
                    },
                    mathcal: {
                        variant: "script",
                        fontName: "Caligraphic-Regular"
                    },
                    mathfrak: {
                        variant: "fraktur",
                        fontName: "Fraktur-Regular"
                    },
                    mathscr: {
                        variant: "script",
                        fontName: "Script-Regular"
                    },
                    mathsf: {
                        variant: "sans-serif",
                        fontName: "SansSerif-Regular"
                    },
                    mathtt: {
                        variant: "monospace",
                        fontName: "Typewriter-Regular"
                    }
                };
            t.exports = {
                fontMap: x,
                makeSymbol: l,
                mathsym: u,
                makeSpan: m,
                makeFragment: g,
                makeVList: y,
                makeOrd: p,
                prependChildren: f,
                sizingMultiplier: b,
                spacingFunctions: w
            }
        }, {
            "./domTree": 15,
            "./fontMetrics": 17,
            "./symbols": 23,
            "./utils": 25
        }],
        11: [function(e, t) {
            var r = e("./ParseError"),
                n = e("./Style"),
                a = e("./buildCommon"),
                i = e("./delimiter"),
                s = e("./domTree"),
                o = e("./fontMetrics"),
                l = e("./utils"),
                u = a.makeSpan,
                c = function(e) {
                    return e instanceof s.span && "mspace" === e.classes[0]
                },
                d = function(e) {
                    return e && "mbin" === e.classes[0]
                },
                p = function(e, t) {
                    return e ? l.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], e.classes[0]) : t
                },
                h = function(e, t) {
                    return e ? l.contains(["mrel", "mclose", "mpunct"], e.classes[0]) : t
                },
                m = function(e, t, r) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var o = e[i],
                            l = k(o, t);
                        l instanceof s.documentFragment ? Array.prototype.push.apply(n, l.children) : n.push(l)
                    }
                    var m = null;
                    for (i = 0; i < n.length; i++) c(n[i]) ? (m = m || [], m.push(n[i]), n.splice(i, 1), i--) : m && (n[i] instanceof s.symbolNode && (n[i] = u([].concat(n[i].classes), [n[i]])), a.prependChildren(n[i], m), m = null);
                    for (m && Array.prototype.push.apply(n, m), i = 0; i < n.length; i++) d(n[i]) && (p(n[i - 1], r) || h(n[i + 1], r)) && (n[i].classes[0] = "mord");
                    return n
                },
                f = function(e) {
                    if (e instanceof s.documentFragment) {
                        if (e.children.length) return f(e.children[e.children.length - 1])
                    } else if (l.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], e.classes[0])) return e.classes[0];
                    return null
                },
                g = function(e, t) {
                    return e ? "op" === e.type ? e.value.limits && (t.style.size === n.DISPLAY.size || e.value.alwaysHandleSupSub) : "accent" === e.type ? y(e.value.base) : null : !1
                },
                v = function(e) {
                    return e ? "ordgroup" === e.type ? 1 === e.value.length ? v(e.value[0]) : e : "color" === e.type ? 1 === e.value.value.length ? v(e.value.value[0]) : e : "font" === e.type ? v(e.value.body) : e : !1
                },
                y = function(e) {
                    var t = v(e);
                    return "mathord" === t.type || "textord" === t.type || "bin" === t.type || "rel" === t.type || "inner" === t.type || "open" === t.type || "close" === t.type || "punct" === t.type
                },
                b = function(e, t) {
                    return u(t.concat(["sizing", "reset-" + e.size, "size5", e.style.reset(), n.TEXT.cls(), "nulldelimiter"]))
                },
                w = {};
            w.mathord = function(e, t) {
                return a.makeOrd(e, t, "mathord")
            }, w.textord = function(e, t) {
                return a.makeOrd(e, t, "textord")
            }, w.bin = function(e, t) {
                return a.mathsym(e.value, e.mode, t, ["mbin"])
            }, w.rel = function(e, t) {
                return a.mathsym(e.value, e.mode, t, ["mrel"])
            }, w.open = function(e, t) {
                return a.mathsym(e.value, e.mode, t, ["mopen"])
            }, w.close = function(e, t) {
                return a.mathsym(e.value, e.mode, t, ["mclose"])
            }, w.inner = function(e, t) {
                return a.mathsym(e.value, e.mode, t, ["minner"])
            }, w.punct = function(e, t) {
                return a.mathsym(e.value, e.mode, t, ["mpunct"])
            }, w.ordgroup = function(e, t) {
                return u(["mord", t.style.cls()], m(e.value, t.reset(), !0), t)
            }, w.text = function(e, t) {
                for (var r = t.withFont(e.value.style), n = m(e.value.body, r, !0), a = 0; a < n.length - 1; a++) n[a].tryCombine(n[a + 1]) && (n.splice(a + 1, 1), a--);
                return u(["mord", "text", r.style.cls()], n, r)
            }, w.color = function(e, t) {
                var r = m(e.value.value, t.withColor(e.value.color), !1);
                return new a.makeFragment(r)
            }, w.supsub = function(e, t) {
                if (g(e.value.base, t)) return w[e.value.base.type](e, t);
                var r, i, l, c, d, p = k(e.value.base, t.reset()),
                    h = t.style;
                e.value.sup && (d = t.withStyle(h.sup()), l = k(e.value.sup, d), r = u([h.reset(), h.sup().cls()], [l], d)), e.value.sub && (d = t.withStyle(h.sub()), c = k(e.value.sub, d), i = u([h.reset(), h.sub().cls()], [c], d));
                var m, v;
                y(e.value.base) ? (m = 0, v = 0) : (m = p.height - h.metrics.supDrop, v = p.depth + h.metrics.subDrop);
                var b;
                b = h === n.DISPLAY ? h.metrics.sup1 : h.cramped ? h.metrics.sup3 : h.metrics.sup2;
                var x, A = n.TEXT.sizeMultiplier * h.sizeMultiplier,
                    S = .5 / o.metrics.ptPerEm / A + "em";
                if (e.value.sup)
                    if (e.value.sub) {
                        m = Math.max(m, b, l.depth + .25 * h.metrics.xHeight), v = Math.max(v, h.metrics.sub2);
                        var E = o.metrics.defaultRuleThickness;
                        if (m - l.depth - (c.height - v) < 4 * E) {
                            v = 4 * E - (m - l.depth) + c.height;
                            var L = .8 * h.metrics.xHeight - (m - l.depth);
                            L > 0 && (m += L, v -= L)
                        }
                        x = a.makeVList([{
                            type: "elem",
                            elem: i,
                            shift: v
                        }, {
                            type: "elem",
                            elem: r,
                            shift: -m
                        }], "individualShift", null, t), p instanceof s.symbolNode && (x.children[0].style.marginLeft = -p.italic + "em"), x.children[0].style.marginRight = S, x.children[1].style.marginRight = S
                    } else m = Math.max(m, b, l.depth + .25 * h.metrics.xHeight), x = a.makeVList([{
                        type: "elem",
                        elem: r
                    }], "shift", -m, t), x.children[0].style.marginRight = S;
                else v = Math.max(v, h.metrics.sub1, c.height - .8 * h.metrics.xHeight), x = a.makeVList([{
                    type: "elem",
                    elem: i
                }], "shift", v, t), x.children[0].style.marginRight = S, p instanceof s.symbolNode && (x.children[0].style.marginLeft = -p.italic + "em");
                var M = f(p) || "mord";
                return u([M], [p, u(["msupsub"], [x])], t)
            }, w.genfrac = function(e, t) {
                var r = t.style;
                "display" === e.value.size ? r = n.DISPLAY : "text" === e.value.size && (r = n.TEXT);
                var s, l = r.fracNum(),
                    c = r.fracDen();
                s = t.withStyle(l);
                var d = k(e.value.numer, s),
                    p = u([r.reset(), l.cls()], [d], s);
                s = t.withStyle(c);
                var h, m = k(e.value.denom, s),
                    f = u([r.reset(), c.cls()], [m], s);
                h = e.value.hasBarLine ? o.metrics.defaultRuleThickness / t.style.sizeMultiplier : 0;
                var g, v, y;
                r.size === n.DISPLAY.size ? (g = r.metrics.num1, v = h > 0 ? 3 * h : 7 * o.metrics.defaultRuleThickness, y = r.metrics.denom1) : (h > 0 ? (g = r.metrics.num2, v = h) : (g = r.metrics.num3, v = 3 * o.metrics.defaultRuleThickness), y = r.metrics.denom2);
                var w;
                if (0 === h) {
                    var x = g - d.depth - (m.height - y);
                    v > x && (g += .5 * (v - x), y += .5 * (v - x)), w = a.makeVList([{
                        type: "elem",
                        elem: f,
                        shift: y
                    }, {
                        type: "elem",
                        elem: p,
                        shift: -g
                    }], "individualShift", null, t)
                } else {
                    var A = r.metrics.axisHeight;
                    g - d.depth - (A + .5 * h) < v && (g += v - (g - d.depth - (A + .5 * h))), A - .5 * h - (m.height - y) < v && (y += v - (A - .5 * h - (m.height - y)));
                    var S = u([t.style.reset(), n.TEXT.cls(), "frac-line"]);
                    S.height = h;
                    var E = -(A - .5 * h);
                    w = a.makeVList([{
                        type: "elem",
                        elem: f,
                        shift: y
                    }, {
                        type: "elem",
                        elem: S,
                        shift: E
                    }, {
                        type: "elem",
                        elem: p,
                        shift: -g
                    }], "individualShift", null, t)
                }
                w.height *= r.sizeMultiplier / t.style.sizeMultiplier, w.depth *= r.sizeMultiplier / t.style.sizeMultiplier;
                var L;
                L = r.size === n.DISPLAY.size ? r.metrics.delim1 : r.metrics.delim2;
                var M, z;
                return M = null == e.value.leftDelim ? b(t, ["mopen"]) : i.customSizedDelim(e.value.leftDelim, L, !0, t.withStyle(r), e.mode, ["mopen"]), z = null == e.value.rightDelim ? b(t, ["mclose"]) : i.customSizedDelim(e.value.rightDelim, L, !0, t.withStyle(r), e.mode, ["mclose"]), u(["mord", t.style.reset(), r.cls()], [M, u(["mfrac"], [w]), z], t)
            };
            var x = function(e, t) {
                var r = e.number;
                return "ex" === e.unit ? r *= t.metrics.emPerEx : "mu" === e.unit && (r /= 18), r
            };
            w.array = function(e, t) {
                var n, i, s = e.value.body.length,
                    c = 0,
                    d = new Array(s),
                    p = t.style,
                    h = 1 / o.metrics.ptPerEm,
                    m = 5 * h,
                    f = 12 * h,
                    g = l.deflt(e.value.arraystretch, 1),
                    v = g * f,
                    y = .7 * v,
                    b = .3 * v,
                    w = 0;
                for (n = 0; n < e.value.body.length; ++n) {
                    var A = e.value.body[n],
                        S = y,
                        E = b;
                    c < A.length && (c = A.length);
                    var L = new Array(A.length);
                    for (i = 0; i < A.length; ++i) {
                        var M = k(A[i], t);
                        E < M.depth && (E = M.depth), S < M.height && (S = M.height), L[i] = M
                    }
                    var z = 0;
                    e.value.rowGaps[n] && (z = x(e.value.rowGaps[n].value, p), z > 0 && (z += b, z > E && (E = z), z = 0)), L.height = S, L.depth = E, w += S, L.pos = w, w += E + z, d[n] = L
                }
                var T, N, q = w / 2 + p.metrics.axisHeight,
                    C = e.value.cols || [],
                    P = [];
                for (i = 0, N = 0; c > i || N < C.length; ++i, ++N) {
                    for (var R = C[N] || {}, D = !0;
                        "separator" === R.type;) {
                        if (D || (T = u(["arraycolsep"], []), T.style.width = o.metrics.doubleRuleSep + "em", P.push(T)), "|" !== R.separator) throw new r("Invalid separator type: " + R.separator);
                        var I = u(["vertical-separator"], []);
                        I.style.height = w + "em", I.style.verticalAlign = -(w - q) + "em", P.push(I), N++, R = C[N] || {}, D = !1
                    }
                    if (!(i >= c)) {
                        var O;
                        (i > 0 || e.value.hskipBeforeAndAfter) && (O = l.deflt(R.pregap, m), 0 !== O && (T = u(["arraycolsep"], []), T.style.width = O + "em", P.push(T)));
                        var B = [];
                        for (n = 0; s > n; ++n) {
                            var F = d[n],
                                H = F[i];
                            if (H) {
                                var V = F.pos - q;
                                H.depth = F.depth, H.height = F.height, B.push({
                                    type: "elem",
                                    elem: H,
                                    shift: V
                                })
                            }
                        }
                        B = a.makeVList(B, "individualShift", null, t), B = u(["col-align-" + (R.align || "c")], [B]), P.push(B), (c - 1 > i || e.value.hskipBeforeAndAfter) && (O = l.deflt(R.postgap, m), 0 !== O && (T = u(["arraycolsep"], []), T.style.width = O + "em", P.push(T)))
                    }
                }
                return d = u(["mtable"], P), u(["mord"], [d], t)
            }, w.spacing = function(e, t) {
                return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? "text" === e.mode ? a.makeOrd(e, t, "textord") : u(["mspace"], [a.mathsym(e.value, e.mode, t)], t) : u(["mspace", a.spacingFunctions[e.value].className], [], t)
            }, w.llap = function(e, t) {
                var r = u(["inner"], [k(e.value.body, t.reset())]),
                    n = u(["fix"], []);
                return u(["mord", "llap", t.style.cls()], [r, n], t)
            }, w.rlap = function(e, t) {
                var r = u(["inner"], [k(e.value.body, t.reset())]),
                    n = u(["fix"], []);
                return u(["mord", "rlap", t.style.cls()], [r, n], t)
            }, w.op = function(e, t) {
                var r, i, s = !1;
                "supsub" === e.type && (r = e.value.sup, i = e.value.sub, e = e.value.base, s = !0);
                var c = t.style,
                    d = ["\\smallint"],
                    p = !1;
                c.size === n.DISPLAY.size && e.value.symbol && !l.contains(d, e.value.body) && (p = !0);
                var h, f = 0,
                    g = 0;
                if (e.value.symbol) {
                    var v = p ? "Size2-Regular" : "Size1-Regular";
                    h = a.makeSymbol(e.value.body, v, "math", t, ["mop", "op-symbol", p ? "large-op" : "small-op"]), f = (h.height - h.depth) / 2 - c.metrics.axisHeight * c.sizeMultiplier, g = h.italic
                } else if (e.value.value) {
                    var y = m(e.value.value, t, !0);
                    h = u(["mop"], y, t)
                } else {
                    for (var b = [], w = 1; w < e.value.body.length; w++) b.push(a.mathsym(e.value.body[w], e.mode));
                    h = u(["mop"], b, t)
                }
                if (s) {
                    h = u([], [h]);
                    var x, A, S, E, L;
                    if (r) {
                        L = t.withStyle(c.sup());
                        var M = k(r, L);
                        x = u([c.reset(), c.sup().cls()], [M], L), A = Math.max(o.metrics.bigOpSpacing1, o.metrics.bigOpSpacing3 - M.depth)
                    }
                    if (i) {
                        L = t.withStyle(c.sub());
                        var z = k(i, L);
                        S = u([c.reset(), c.sub().cls()], [z], L), E = Math.max(o.metrics.bigOpSpacing2, o.metrics.bigOpSpacing4 - z.height)
                    }
                    var T, N, q;
                    if (r)
                        if (i) {
                            if (!r && !i) return h;
                            q = o.metrics.bigOpSpacing5 + S.height + S.depth + E + h.depth + f, T = a.makeVList([{
                                type: "kern",
                                size: o.metrics.bigOpSpacing5
                            }, {
                                type: "elem",
                                elem: S
                            }, {
                                type: "kern",
                                size: E
                            }, {
                                type: "elem",
                                elem: h
                            }, {
                                type: "kern",
                                size: A
                            }, {
                                type: "elem",
                                elem: x
                            }, {
                                type: "kern",
                                size: o.metrics.bigOpSpacing5
                            }], "bottom", q, t), T.children[0].style.marginLeft = -g + "em", T.children[2].style.marginLeft = g + "em"
                        } else q = h.depth + f, T = a.makeVList([{
                            type: "elem",
                            elem: h
                        }, {
                            type: "kern",
                            size: A
                        }, {
                            type: "elem",
                            elem: x
                        }, {
                            type: "kern",
                            size: o.metrics.bigOpSpacing5
                        }], "bottom", q, t), T.children[1].style.marginLeft = g + "em";
                    else N = h.height - f, T = a.makeVList([{
                        type: "kern",
                        size: o.metrics.bigOpSpacing5
                    }, {
                        type: "elem",
                        elem: S
                    }, {
                        type: "kern",
                        size: E
                    }, {
                        type: "elem",
                        elem: h
                    }], "top", N, t), T.children[0].style.marginLeft = -g + "em";
                    return u(["mop", "op-limits"], [T], t)
                }
                return e.value.symbol && (h.style.top = f + "em"), h
            }, w.mod = function(e, t) {
                var r = [];
                if ("bmod" === e.value.modType ? (t.style.isTight() || r.push(u(["mspace", "negativemediumspace"], [], t)), r.push(u(["mspace", "thickspace"], [], t))) : r.push(t.style.size === n.DISPLAY.size ? u(["mspace", "quad"], [], t) : "mod" === e.value.modType ? u(["mspace", "twelvemuspace"], [], t) : u(["mspace", "eightmuspace"], [], t)), ("pod" === e.value.modType || "pmod" === e.value.modType) && r.push(a.mathsym("(", e.mode)), "pod" !== e.value.modType) {
                    var i = [a.mathsym("m", e.mode), a.mathsym("o", e.mode), a.mathsym("d", e.mode)];
                    "bmod" === e.value.modType ? (r.push(u(["mbin"], i, t)), r.push(u(["mspace", "thickspace"], [], t)), t.style.isTight() || r.push(u(["mspace", "negativemediumspace"], [], t))) : (Array.prototype.push.apply(r, i), r.push(u(["mspace", "sixmuspace"], [], t)))
                }
                return e.value.value && Array.prototype.push.apply(r, m(e.value.value, t, !1)), ("pod" === e.value.modType || "pmod" === e.value.modType) && r.push(a.mathsym(")", e.mode)), a.makeFragment(r)
            }, w.katex = function(e, t) {
                var r = u(["k"], [a.mathsym("K", e.mode)], t),
                    n = u(["a"], [a.mathsym("A", e.mode)], t);
                n.height = .75 * (n.height + .2), n.depth = .75 * (n.height - .2);
                var i = u(["t"], [a.mathsym("T", e.mode)], t),
                    s = u(["e"], [a.mathsym("E", e.mode)], t);
                s.height = s.height - .2155, s.depth = s.depth + .2155;
                var o = u(["x"], [a.mathsym("X", e.mode)], t);
                return u(["mord", "katex-logo"], [r, n, i, s, o], t)
            }, w.overline = function(e, t) {
                var r = t.style,
                    i = k(e.value.body, t.withStyle(r.cramp())),
                    s = o.metrics.defaultRuleThickness / r.sizeMultiplier,
                    l = u([r.reset(), n.TEXT.cls(), "overline-line"]);
                l.height = s, l.maxFontSize = 1;
                var c = a.makeVList([{
                    type: "elem",
                    elem: i
                }, {
                    type: "kern",
                    size: 3 * s
                }, {
                    type: "elem",
                    elem: l
                }, {
                    type: "kern",
                    size: s
                }], "firstBaseline", null, t);
                return u(["mord", "overline"], [c], t)
            }, w.underline = function(e, t) {
                var r = t.style,
                    i = k(e.value.body, t),
                    s = o.metrics.defaultRuleThickness / r.sizeMultiplier,
                    l = u([r.reset(), n.TEXT.cls(), "underline-line"]);
                l.height = s, l.maxFontSize = 1;
                var c = a.makeVList([{
                    type: "kern",
                    size: s
                }, {
                    type: "elem",
                    elem: l
                }, {
                    type: "kern",
                    size: 3 * s
                }, {
                    type: "elem",
                    elem: i
                }], "top", i.height, t);
                return u(["mord", "underline"], [c], t)
            }, w.sqrt = function(e, t) {
                var r = t.style,
                    s = k(e.value.body, t.withStyle(r.cramp())),
                    l = o.metrics.defaultRuleThickness / r.sizeMultiplier,
                    c = u([r.reset(), n.TEXT.cls(), "sqrt-line"], [], t);
                c.height = l, c.maxFontSize = 1;
                var d = l;
                r.id < n.TEXT.id && (d = r.metrics.xHeight);
                var p = l + d / 4,
                    h = (s.height + s.depth) * r.sizeMultiplier,
                    m = h + p + l,
                    f = u(["sqrt-sign"], [i.customSizedDelim("\\surd", m, !1, t, e.mode)], t),
                    g = f.height + f.depth - l;
                g > s.height + s.depth + p && (p = (p + g - s.height - s.depth) / 2);
                var v = -(s.height + p + l) + f.height;
                f.style.top = v + "em", f.height -= v, f.depth += v;
                var y;
                if (y = 0 === s.height && 0 === s.depth ? u() : a.makeVList([{
                        type: "elem",
                        elem: s
                    }, {
                        type: "kern",
                        size: p
                    }, {
                        type: "elem",
                        elem: c
                    }, {
                        type: "kern",
                        size: l
                    }], "firstBaseline", null, t), e.value.index) {
                    var b = t.withStyle(n.SCRIPTSCRIPT),
                        w = k(e.value.index, b),
                        x = u([r.reset(), n.SCRIPTSCRIPT.cls()], [w], b),
                        A = Math.max(f.height, y.height),
                        S = Math.max(f.depth, y.depth),
                        E = .6 * (A - S),
                        L = a.makeVList([{
                            type: "elem",
                            elem: x
                        }], "shift", -E, t),
                        M = u(["root"], [L]);
                    return u(["mord", "sqrt"], [M, f, y], t)
                }
                return u(["mord", "sqrt"], [f, y], t)
            }, w.sizing = function(e, t) {
                var r = m(e.value.value, t.withSize(e.value.size), !1),
                    n = t.style,
                    i = a.sizingMultiplier[e.value.size];
                i *= n.sizeMultiplier;
                for (var s = 0; s < r.length; s++) {
                    var o = l.indexOf(r[s].classes, "sizing");
                    0 > o ? (r[s].classes.push("sizing", "reset-" + t.size, e.value.size, n.cls()), r[s].maxFontSize = i) : r[s].classes[o + 1] === "reset-" + e.value.size && (r[s].classes[o + 1] = "reset-" + t.size)
                }
                return a.makeFragment(r)
            }, w.styling = function(e, t) {
                for (var r = {
                        display: n.DISPLAY,
                        text: n.TEXT,
                        script: n.SCRIPT,
                        scriptscript: n.SCRIPTSCRIPT
                    }, i = r[e.value.style], s = t.withStyle(i), o = m(e.value.value, s, !1), u = 0; u < o.length; u++) {
                    var c = l.indexOf(o[u].classes, i.reset());
                    0 > c ? o[u].classes.push(t.style.reset(), i.cls()) : o[u].classes[c] = t.style.reset()
                }
                return new a.makeFragment(o)
            }, w.font = function(e, t) {
                var r = e.value.font;
                return k(e.value.body, t.withFont(r))
            }, w.delimsizing = function(e, t) {
                var r = e.value.value;
                return "." === r ? u([e.value.mclass]) : i.sizedDelim(r, e.value.size, t, e.mode, [e.value.mclass])
            }, w.leftright = function(e, t) {
                for (var r = m(e.value.body, t.reset(), !0), n = 0, a = 0, s = !1, o = 0; o < r.length; o++) r[o].isMiddle ? s = !0 : (n = Math.max(r[o].height, n), a = Math.max(r[o].depth, a));
                var l = t.style;
                n *= l.sizeMultiplier, a *= l.sizeMultiplier;
                var c;
                if (c = "." === e.value.left ? b(t, ["mopen"]) : i.leftRightDelim(e.value.left, n, a, t, e.mode, ["mopen"]), r.unshift(c), s)
                    for (o = 1; o < r.length; o++) r[o].isMiddle && (r[o] = i.leftRightDelim(r[o].isMiddle.value, n, a, r[o].isMiddle.options, e.mode, []));
                var d;
                return d = "." === e.value.right ? b(t, ["mclose"]) : i.leftRightDelim(e.value.right, n, a, t, e.mode, ["mclose"]), r.push(d), u(["minner", l.cls()], r, t)
            }, w.middle = function(e, t) {
                var r;
                return "." === e.value.value ? r = b(t, []) : (r = i.sizedDelim(e.value.value, 1, t, e.mode, []), r.isMiddle = {
                    value: e.value.value,
                    options: t
                }), r
            }, w.rule = function(e, t) {
                var r = u(["mord", "rule"], [], t),
                    n = t.style,
                    a = 0;
                e.value.shift && (a = x(e.value.shift, n));
                var i = x(e.value.width, n),
                    s = x(e.value.height, n);
                return a /= n.sizeMultiplier, i /= n.sizeMultiplier, s /= n.sizeMultiplier, r.style.borderRightWidth = i + "em", r.style.borderTopWidth = s + "em", r.style.bottom = a + "em", r.width = i, r.height = s + a, r.depth = -a, r
            }, w.kern = function(e, t) {
                var r = u(["mord", "rule"], [], t),
                    n = t.style,
                    a = 0;
                return e.value.dimension && (a = x(e.value.dimension, n)), a /= n.sizeMultiplier, r.style.marginLeft = a + "em", r
            }, w.accent = function(e, t) {
                var r, n = e.value.base,
                    i = t.style;
                if ("supsub" === e.type) {
                    var s = e;
                    e = s.value.base, n = e.value.base, s.value.base = n, r = k(s, t.reset())
                }
                var o, l = k(n, t.withStyle(i.cramp()));
                if (y(n)) {
                    var c = v(n),
                        d = k(c, t.withStyle(i.cramp()));
                    o = d.skew
                } else o = 0;
                var p = Math.min(l.height, i.metrics.xHeight),
                    h = a.makeSymbol(e.value.accent, "Main-Regular", "math", t);
                h.italic = 0;
                var m = "\\vec" === e.value.accent ? "accent-vec" : null,
                    f = u(["accent-body", m], [u([], [h])]);
                f = a.makeVList([{
                    type: "elem",
                    elem: l
                }, {
                    type: "kern",
                    size: -p
                }, {
                    type: "elem",
                    elem: f
                }], "firstBaseline", null, t), f.children[1].style.marginLeft = 2 * o + "em";
                var g = u(["mord", "accent"], [f], t);
                return r ? (r.children[0] = g, r.height = Math.max(g.height, r.height), r.classes[0] = "mord", r) : g
            }, w.phantom = function(e, t) {
                var r = m(e.value.value, t.withPhantom(), !1);
                return new a.makeFragment(r)
            }, w.mclass = function(e, t) {
                var r = m(e.value.value, t, !0);
                return u([e.value.mclass], r, t)
            };
            var k = function(e, t) {
                    if (!e) return u();
                    if (w[e.type]) {
                        var n, i = w[e.type](e, t);
                        return t.style !== t.parentStyle && (n = t.style.sizeMultiplier / t.parentStyle.sizeMultiplier, i.height *= n, i.depth *= n), t.size !== t.parentSize && (n = a.sizingMultiplier[t.size] / a.sizingMultiplier[t.parentSize], i.height *= n, i.depth *= n), i
                    }
                    throw new r("Got group of unknown type: '" + e.type + "'")
                },
                A = function(e, t) {
                    e = JSON.parse(JSON.stringify(e));
                    var r = m(e, t, !0),
                        n = u(["base", t.style.cls()], r, t),
                        a = u(["strut"]),
                        i = u(["strut", "bottom"]);
                    a.style.height = n.height + "em", i.style.height = n.height + n.depth + "em", i.style.verticalAlign = -n.depth + "em";
                    var s = u(["katex-html"], [a, i, n]);
                    return s.setAttribute("aria-hidden", "true"), s
                };
            t.exports = A
        }, {
            "./ParseError": 6,
            "./Style": 9,
            "./buildCommon": 10,
            "./delimiter": 14,
            "./domTree": 15,
            "./fontMetrics": 17,
            "./utils": 25
        }],
        12: [function(e, t) {
            var r = e("./buildCommon"),
                n = e("./fontMetrics"),
                a = e("./mathMLTree"),
                i = e("./ParseError"),
                s = e("./symbols"),
                o = e("./utils"),
                l = r.makeSpan,
                u = r.fontMap,
                c = function(e, t) {
                    return s[t][e] && s[t][e].replace && (e = s[t][e].replace), new a.TextNode(e)
                },
                d = function(e, t) {
                    var r = t.font;
                    if (!r) return null;
                    var a = e.mode;
                    if ("mathit" === r) return "italic";
                    var i = e.value;
                    if (o.contains(["\\imath", "\\jmath"], i)) return null;
                    s[a][i] && s[a][i].replace && (i = s[a][i].replace);
                    var l = u[r].fontName;
                    return n.getCharacterMetrics(i, l) ? u[t.font].variant : null
                },
                p = {};
            p.mathord = function(e, t) {
                var r = new a.MathNode("mi", [c(e.value, e.mode)]),
                    n = d(e, t);
                return n && r.setAttribute("mathvariant", n), r
            }, p.textord = function(e, t) {
                var r, n = c(e.value, e.mode),
                    i = d(e, t) || "normal";
                return /[0-9]/.test(e.value) ? (r = new a.MathNode("mn", [n]), t.font && r.setAttribute("mathvariant", i)) : (r = new a.MathNode("mi", [n]), r.setAttribute("mathvariant", i)), r
            }, p.bin = function(e) {
                var t = new a.MathNode("mo", [c(e.value, e.mode)]);
                return t
            }, p.rel = function(e) {
                var t = new a.MathNode("mo", [c(e.value, e.mode)]);
                return t
            }, p.open = function(e) {
                var t = new a.MathNode("mo", [c(e.value, e.mode)]);
                return t
            }, p.close = function(e) {
                var t = new a.MathNode("mo", [c(e.value, e.mode)]);
                return t
            }, p.inner = function(e) {
                var t = new a.MathNode("mo", [c(e.value, e.mode)]);
                return t
            }, p.punct = function(e) {
                var t = new a.MathNode("mo", [c(e.value, e.mode)]);
                return t.setAttribute("separator", "true"), t
            }, p.ordgroup = function(e, t) {
                var r = h(e.value, t),
                    n = new a.MathNode("mrow", r);
                return n
            }, p.text = function(e, t) {
                var r = h(e.value.body, t),
                    n = new a.MathNode("mtext", r);
                return n
            }, p.color = function(e, t) {
                var r = h(e.value.value, t),
                    n = new a.MathNode("mstyle", r);
                return n.setAttribute("mathcolor", e.value.color), n
            }, p.supsub = function(e, t) {
                var r = [m(e.value.base, t)];
                e.value.sub && r.push(m(e.value.sub, t)), e.value.sup && r.push(m(e.value.sup, t));
                var n;
                n = e.value.sub ? e.value.sup ? "msubsup" : "msub" : "msup";
                var i = new a.MathNode(n, r);
                return i
            }, p.genfrac = function(e, t) {
                var r = new a.MathNode("mfrac", [m(e.value.numer, t), m(e.value.denom, t)]);
                if (e.value.hasBarLine || r.setAttribute("linethickness", "0px"), null != e.value.leftDelim || null != e.value.rightDelim) {
                    var n = [];
                    if (null != e.value.leftDelim) {
                        var i = new a.MathNode("mo", [new a.TextNode(e.value.leftDelim)]);
                        i.setAttribute("fence", "true"), n.push(i)
                    }
                    if (n.push(r), null != e.value.rightDelim) {
                        var s = new a.MathNode("mo", [new a.TextNode(e.value.rightDelim)]);
                        s.setAttribute("fence", "true"), n.push(s)
                    }
                    var o = new a.MathNode("mrow", n);
                    return o
                }
                return r
            }, p.array = function(e, t) {
                return new a.MathNode("mtable", e.value.body.map(function(e) {
                    return new a.MathNode("mtr", e.map(function(e) {
                        return new a.MathNode("mtd", [m(e, t)])
                    }))
                }))
            }, p.sqrt = function(e, t) {
                var r;
                return r = e.value.index ? new a.MathNode("mroot", [m(e.value.body, t), m(e.value.index, t)]) : new a.MathNode("msqrt", [m(e.value.body, t)])
            }, p.leftright = function(e, t) {
                var r = h(e.value.body, t);
                if ("." !== e.value.left) {
                    var n = new a.MathNode("mo", [c(e.value.left, e.mode)]);
                    n.setAttribute("fence", "true"), r.unshift(n)
                }
                if ("." !== e.value.right) {
                    var i = new a.MathNode("mo", [c(e.value.right, e.mode)]);
                    i.setAttribute("fence", "true"), r.push(i)
                }
                var s = new a.MathNode("mrow", r);
                return s
            }, p.middle = function(e) {
                var t = new a.MathNode("mo", [c(e.value.middle, e.mode)]);
                return t.setAttribute("fence", "true"), t
            }, p.accent = function(e, t) {
                var r = new a.MathNode("mo", [c(e.value.accent, e.mode)]),
                    n = new a.MathNode("mover", [m(e.value.base, t), r]);
                return n.setAttribute("accent", "true"), n
            }, p.spacing = function(e) {
                var t;
                return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? t = new a.MathNode("mtext", [new a.TextNode("\xa0")]) : (t = new a.MathNode("mspace"), t.setAttribute("width", r.spacingFunctions[e.value].size)), t
            }, p.op = function(e, t) {
                var r;
                return r = e.value.symbol ? new a.MathNode("mo", [c(e.value.body, e.mode)]) : e.value.value ? new a.MathNode("mo", h(e.value.value, t)) : new a.MathNode("mi", [new a.TextNode(e.value.body.slice(1))])
            }, p.mod = function(e, t) {
                var r = [];
                if (("pod" === e.value.modType || "pmod" === e.value.modType) && r.push(new a.MathNode("mo", [c("(", e.mode)])), "pod" !== e.value.modType && r.push(new a.MathNode("mo", [c("mod", e.mode)])), e.value.value) {
                    var n = new a.MathNode("mspace");
                    n.setAttribute("width", "0.333333em"), r.push(n), r = r.concat(h(e.value.value, t))
                }
                return ("pod" === e.value.modType || "pmod" === e.value.modType) && r.push(new a.MathNode("mo", [c(")", e.mode)])), new a.MathNode("mo", r)
            }, p.katex = function() {
                var e = new a.MathNode("mtext", [new a.TextNode("KaTeX")]);
                return e
            }, p.font = function(e, t) {
                var r = e.value.font;
                return m(e.value.body, t.withFont(r))
            }, p.delimsizing = function(e) {
                var t = [];
                "." !== e.value.value && t.push(c(e.value.value, e.mode));
                var r = new a.MathNode("mo", t);
                return "mopen" === e.value.mclass || "mclose" === e.value.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r
            }, p.styling = function(e, t) {
                var r = h(e.value.value, t),
                    n = new a.MathNode("mstyle", r),
                    i = {
                        display: ["0", "true"],
                        text: ["0", "false"],
                        script: ["1", "false"],
                        scriptscript: ["2", "false"]
                    },
                    s = i[e.value.style];
                return n.setAttribute("scriptlevel", s[0]), n.setAttribute("displaystyle", s[1]), n
            }, p.sizing = function(e, t) {
                var n = h(e.value.value, t),
                    i = new a.MathNode("mstyle", n);
                return i.setAttribute("mathsize", r.sizingMultiplier[e.value.size] + "em"), i
            }, p.overline = function(e, t) {
                var r = new a.MathNode("mo", [new a.TextNode("\u203e")]);
                r.setAttribute("stretchy", "true");
                var n = new a.MathNode("mover", [m(e.value.body, t), r]);
                return n.setAttribute("accent", "true"), n
            }, p.underline = function(e, t) {
                var r = new a.MathNode("mo", [new a.TextNode("\u203e")]);
                r.setAttribute("stretchy", "true");
                var n = new a.MathNode("munder", [m(e.value.body, t), r]);
                return n.setAttribute("accentunder", "true"), n
            }, p.rule = function() {
                var e = new a.MathNode("mrow");
                return e
            }, p.kern = function() {
                var e = new a.MathNode("mrow");
                return e
            }, p.llap = function(e, t) {
                var r = new a.MathNode("mpadded", [m(e.value.body, t)]);
                return r.setAttribute("lspace", "-1width"), r.setAttribute("width", "0px"), r
            }, p.rlap = function(e, t) {
                var r = new a.MathNode("mpadded", [m(e.value.body, t)]);
                return r.setAttribute("width", "0px"), r
            }, p.phantom = function(e, t) {
                var r = h(e.value.value, t);
                return new a.MathNode("mphantom", r)
            }, p.mclass = function(e, t) {
                var r = h(e.value.value, t);
                return new a.MathNode("mstyle", r)
            };
            var h = function(e, t) {
                    for (var r = [], n = 0; n < e.length; n++) {
                        var a = e[n];
                        r.push(m(a, t))
                    }
                    return r
                },
                m = function(e, t) {
                    if (!e) return new a.MathNode("mrow");
                    if (p[e.type]) return p[e.type](e, t);
                    throw new i("Got group of unknown type: '" + e.type + "'")
                },
                f = function(e, t, r) {
                    var n = h(e, r),
                        i = new a.MathNode("mrow", n),
                        s = new a.MathNode("annotation", [new a.TextNode(t)]);
                    s.setAttribute("encoding", "application/x-tex");
                    var o = new a.MathNode("semantics", [i, s]),
                        u = new a.MathNode("math", [o]);
                    return l(["katex-mathml"], [u])
                };
            t.exports = f
        }, {
            "./ParseError": 6,
            "./buildCommon": 10,
            "./fontMetrics": 17,
            "./mathMLTree": 20,
            "./symbols": 23,
            "./utils": 25
        }],
        13: [function(e, t) {
            var r = e("./buildHTML"),
                n = e("./buildMathML"),
                a = e("./buildCommon"),
                i = e("./Options"),
                s = e("./Settings"),
                o = e("./Style"),
                l = a.makeSpan,
                u = function(e, t, a) {
                    a = a || new s({});
                    var u = o.TEXT;
                    a.displayMode && (u = o.DISPLAY);
                    var c = new i({
                            style: u,
                            size: "size5"
                        }),
                        d = n(e, t, c),
                        p = r(e, c),
                        h = l(["katex"], [d, p]);
                    return a.displayMode ? l(["katex-display"], [h]) : h
                };
            t.exports = u
        }, {
            "./Options": 5,
            "./Settings": 8,
            "./Style": 9,
            "./buildCommon": 10,
            "./buildHTML": 11,
            "./buildMathML": 12
        }],
        14: [function(e, t) {
            var r = e("./ParseError"),
                n = e("./Style"),
                a = e("./buildCommon"),
                i = e("./fontMetrics"),
                s = e("./symbols"),
                o = e("./utils"),
                l = a.makeSpan,
                u = function(e, t) {
                    return s.math[e] && s.math[e].replace ? i.getCharacterMetrics(s.math[e].replace, t) : i.getCharacterMetrics(e, t)
                },
                c = function(e, t, r, n) {
                    return a.makeSymbol(e, "Size" + t + "-Regular", r, n)
                },
                d = function(e, t, r, n) {
                    n = n || [];
                    var a = l(n.concat(["style-wrap", r.style.reset(), t.cls()]), [e], r),
                        i = t.sizeMultiplier / r.style.sizeMultiplier;
                    return a.height *= i, a.depth *= i, a.maxFontSize = t.sizeMultiplier, a
                },
                p = function(e, t, r, n, i, s) {
                    var o = a.makeSymbol(e, "Main-Regular", i, n),
                        l = d(o, t, n, s);
                    if (r) {
                        var u = (1 - n.style.sizeMultiplier / t.sizeMultiplier) * n.style.metrics.axisHeight;
                        l.style.top = u + "em", l.height -= u, l.depth += u
                    }
                    return l
                },
                h = function(e, t, r, a, i, s) {
                    var o = c(e, t, i, a),
                        u = d(l(["delimsizing", "size" + t], [o], a), n.TEXT, a, s);
                    if (r) {
                        var p = (1 - a.style.sizeMultiplier) * a.style.metrics.axisHeight;
                        u.style.top = p + "em", u.height -= p, u.depth += p
                    }
                    return u
                },
                m = function(e, t, r) {
                    var n;
                    "Size1-Regular" === t ? n = "delim-size1" : "Size4-Regular" === t && (n = "delim-size4");
                    var i = l(["delimsizinginner", n], [l([], [a.makeSymbol(e, t, r)])]);
                    return {
                        type: "elem",
                        elem: i
                    }
                },
                f = function(e, t, r, i, s, o) {
                    var c, p, h, f;
                    c = h = f = e, p = null;
                    var g = "Size1-Regular";
                    "\\uparrow" === e ? h = f = "\u23d0" : "\\Uparrow" === e ? h = f = "\u2016" : "\\downarrow" === e ? c = h = "\u23d0" : "\\Downarrow" === e ? c = h = "\u2016" : "\\updownarrow" === e ? (c = "\\uparrow", h = "\u23d0", f = "\\downarrow") : "\\Updownarrow" === e ? (c = "\\Uparrow", h = "\u2016", f = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (c = "\u23a1", h = "\u23a2", f = "\u23a3", g = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (c = "\u23a4", h = "\u23a5", f = "\u23a6", g = "Size4-Regular") : "\\lfloor" === e ? (h = c = "\u23a2", f = "\u23a3", g = "Size4-Regular") : "\\lceil" === e ? (c = "\u23a1", h = f = "\u23a2", g = "Size4-Regular") : "\\rfloor" === e ? (h = c = "\u23a5", f = "\u23a6", g = "Size4-Regular") : "\\rceil" === e ? (c = "\u23a4", h = f = "\u23a5", g = "Size4-Regular") : "(" === e ? (c = "\u239b", h = "\u239c", f = "\u239d", g = "Size4-Regular") : ")" === e ? (c = "\u239e", h = "\u239f", f = "\u23a0", g = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (c = "\u23a7", p = "\u23a8", f = "\u23a9", h = "\u23aa", g = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (c = "\u23ab", p = "\u23ac", f = "\u23ad", h = "\u23aa", g = "Size4-Regular") : "\\lgroup" === e ? (c = "\u23a7", f = "\u23a9", h = "\u23aa", g = "Size4-Regular") : "\\rgroup" === e ? (c = "\u23ab", f = "\u23ad", h = "\u23aa", g = "Size4-Regular") : "\\lmoustache" === e ? (c = "\u23a7", f = "\u23ad", h = "\u23aa", g = "Size4-Regular") : "\\rmoustache" === e ? (c = "\u23ab", f = "\u23a9", h = "\u23aa", g = "Size4-Regular") : "\\surd" === e && (c = "\ue001", f = "\u23b7", h = "\ue000", g = "Size4-Regular");
                    var v = u(c, g),
                        y = v.height + v.depth,
                        b = u(h, g),
                        w = b.height + b.depth,
                        x = u(f, g),
                        k = x.height + x.depth,
                        A = 0,
                        S = 1;
                    if (null !== p) {
                        var E = u(p, g);
                        A = E.height + E.depth, S = 2
                    }
                    var L = y + k + A,
                        M = Math.ceil((t - L) / (S * w)),
                        z = L + M * S * w,
                        T = i.style.metrics.axisHeight;
                    r && (T *= i.style.sizeMultiplier);
                    var N = z / 2 - T,
                        q = [];
                    q.push(m(f, g, s));
                    var C;
                    if (null === p)
                        for (C = 0; M > C; C++) q.push(m(h, g, s));
                    else {
                        for (C = 0; M > C; C++) q.push(m(h, g, s));
                        for (q.push(m(p, g, s)), C = 0; M > C; C++) q.push(m(h, g, s))
                    }
                    q.push(m(c, g, s));
                    var P = a.makeVList(q, "bottom", N, i);
                    return d(l(["delimsizing", "mult"], [P], i), n.TEXT, i, o)
                },
                g = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
                v = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
                y = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
                b = [0, 1.2, 1.8, 2.4, 3],
                w = function(e, t, n, a, i) {
                    if ("<" === e || "\\lt" === e ? e = "\\langle" : (">" === e || "\\gt" === e) && (e = "\\rangle"), o.contains(g, e) || o.contains(y, e)) return h(e, t, !1, n, a, i);
                    if (o.contains(v, e)) return f(e, b[t], !1, n, a, i);
                    throw new r("Illegal delimiter: '" + e + "'")
                },
                x = [{
                    type: "small",
                    style: n.SCRIPTSCRIPT
                }, {
                    type: "small",
                    style: n.SCRIPT
                }, {
                    type: "small",
                    style: n.TEXT
                }, {
                    type: "large",
                    size: 1
                }, {
                    type: "large",
                    size: 2
                }, {
                    type: "large",
                    size: 3
                }, {
                    type: "large",
                    size: 4
                }],
                k = [{
                    type: "small",
                    style: n.SCRIPTSCRIPT
                }, {
                    type: "small",
                    style: n.SCRIPT
                }, {
                    type: "small",
                    style: n.TEXT
                }, {
                    type: "stack"
                }],
                A = [{
                    type: "small",
                    style: n.SCRIPTSCRIPT
                }, {
                    type: "small",
                    style: n.SCRIPT
                }, {
                    type: "small",
                    style: n.TEXT
                }, {
                    type: "large",
                    size: 1
                }, {
                    type: "large",
                    size: 2
                }, {
                    type: "large",
                    size: 3
                }, {
                    type: "large",
                    size: 4
                }, {
                    type: "stack"
                }],
                S = function(e) {
                    return "small" === e.type ? "Main-Regular" : "large" === e.type ? "Size" + e.size + "-Regular" : "stack" === e.type ? "Size4-Regular" : void 0
                },
                E = function(e, t, r, n) {
                    for (var a = Math.min(2, 3 - n.style.size), i = a; i < r.length && "stack" !== r[i].type; i++) {
                        var s = u(e, S(r[i])),
                            o = s.height + s.depth;
                        if ("small" === r[i].type && (o *= r[i].style.sizeMultiplier), o > t) return r[i]
                    }
                    return r[r.length - 1]
                },
                L = function(e, t, r, n, a, i) {
                    "<" === e || "\\lt" === e ? e = "\\langle" : (">" === e || "\\gt" === e) && (e = "\\rangle");
                    var s;
                    s = o.contains(y, e) ? x : o.contains(g, e) ? A : k;
                    var l = E(e, t, s, n);
                    return "small" === l.type ? p(e, l.style, r, n, a, i) : "large" === l.type ? h(e, l.size, r, n, a, i) : "stack" === l.type ? f(e, t, r, n, a, i) : void 0
                },
                M = function(e, t, r, n, a, s) {
                    var o = n.style.metrics.axisHeight * n.style.sizeMultiplier,
                        l = 901,
                        u = 5 / i.metrics.ptPerEm,
                        c = Math.max(t - o, r + o),
                        d = Math.max(c / 500 * l, 2 * c - u);
                    return L(e, d, !0, n, a, s)
                };
            t.exports = {
                sizedDelim: w,
                customSizedDelim: L,
                leftRightDelim: M
            }
        }, {
            "./ParseError": 6,
            "./Style": 9,
            "./buildCommon": 10,
            "./fontMetrics": 17,
            "./symbols": 23,
            "./utils": 25
        }],
        15: [function(e, t) {
            function r(e, t, r) {
                this.classes = e || [], this.children = t || [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}, this.attributes = {}, r && (r.style.isTight() && this.classes.push("mtight"), r.getColor() && (this.style.color = r.getColor()))
            }

            function n(e) {
                this.children = e || [], this.height = 0, this.depth = 0, this.maxFontSize = 0
            }

            function a(e, t, r, n, a, s, o) {
                this.value = e || "", this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = a || 0, this.classes = s || [], this.style = o || {}, this.maxFontSize = 0, i.cjkRegex.test(e) && this.classes.push(i.hangulRegex.test(e) ? "hangul_fallback" : "cjk_fallback"), /[\xee\xef\xed\xec]/.test(this.value) && (this.value = l[this.value])
            }
            var i = e("./unicodeRegexes"),
                s = e("./utils"),
                o = function(e) {
                    e = e.slice();
                    for (var t = e.length - 1; t >= 0; t--) e[t] || e.splice(t, 1);
                    return e.join(" ")
                };
            r.prototype.setAttribute = function(e, t) {
                this.attributes[e] = t
            }, r.prototype.tryCombine = function() {
                return !1
            }, r.prototype.toNode = function() {
                var e = document.createElement("span");
                e.className = o(this.classes);
                for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
                for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
                for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
                return e
            }, r.prototype.toMarkup = function() {
                var e = "<span";
                this.classes.length && (e += ' class="', e += s.escape(o(this.classes)), e += '"');
                var t = "";
                for (var r in this.style) this.style.hasOwnProperty(r) && (t += s.hyphenate(r) + ":" + this.style[r] + ";");
                t && (e += ' style="' + s.escape(t) + '"');
                for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="', e += s.escape(this.attributes[n]), e += '"');
                e += ">";
                for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
                return e += "</span>"
            }, n.prototype.toNode = function() {
                for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
                return e
            }, n.prototype.toMarkup = function() {
                for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
                return e
            };
            var l = {
                "\xee": "\u0131\u0302",
                "\xef": "\u0131\u0308",
                "\xed": "\u0131\u0301",
                "\xec": "\u0131\u0300"
            };
            a.prototype.tryCombine = function(e) {
                if (!e || !(e instanceof a) || this.italic > 0 || o(this.classes) !== o(e.classes) || this.skew !== e.skew || this.maxFontSize !== e.maxFontSize) return !1;
                for (var t in this.style)
                    if (this.style.hasOwnProperty(t) && this.style[t] !== e.style[t]) return !1;
                for (t in e.style)
                    if (e.style.hasOwnProperty(t) && this.style[t] !== e.style[t]) return !1;
                return this.value += e.value, this.height = Math.max(this.height, e.height), this.depth = Math.max(this.depth, e.depth), this.italic = e.italic, !0
            }, a.prototype.toNode = function() {
                var e = document.createTextNode(this.value),
                    t = null;
                this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = this.italic + "em"), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = o(this.classes));
                for (var r in this.style) this.style.hasOwnProperty(r) && (t = t || document.createElement("span"), t.style[r] = this.style[r]);
                return t ? (t.appendChild(e), t) : e
            }, a.prototype.toMarkup = function() {
                var e = !1,
                    t = "<span";
                this.classes.length && (e = !0, t += ' class="', t += s.escape(o(this.classes)), t += '"');
                var r = "";
                this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
                for (var n in this.style) this.style.hasOwnProperty(n) && (r += s.hyphenate(n) + ":" + this.style[n] + ";");
                r && (e = !0, t += ' style="' + s.escape(r) + '"');
                var a = s.escape(this.value);
                return e ? (t += ">", t += a, t += "</span>") : a
            }, t.exports = {
                span: r,
                documentFragment: n,
                symbolNode: a
            }
        }, {
            "./unicodeRegexes": 24,
            "./utils": 25
        }],
        16: [function(e, t) {
            function r(e, t) {
                for (var r = [], n = [r], a = [];;) {
                    var s = e.parseExpression(!1, null);
                    r.push(new o("ordgroup", s, e.mode));
                    var l = e.nextToken.text;
                    if ("&" === l) e.consume();
                    else {
                        if ("\\end" === l) break;
                        if ("\\\\" !== l && "\\cr" !== l) throw new i("Expected & or \\\\ or \\end", e.nextToken);
                        var u = e.parseFunction();
                        a.push(u.value.size), r = [], n.push(r)
                    }
                }
                return t.body = n, t.rowGaps = a, new o(t.type, t, e.mode)
            }

            function n(e, r, n) {
                "string" == typeof e && (e = [e]), "number" == typeof r && (r = {
                    numArgs: r
                });
                for (var a = {
                        numArgs: r.numArgs || 0,
                        argTypes: r.argTypes,
                        greediness: 1,
                        allowedInText: !!r.allowedInText,
                        numOptionalArgs: r.numOptionalArgs || 0,
                        handler: n
                    }, i = 0; i < e.length; ++i) t.exports[e[i]] = a
            }
            var a = e("./parseData"),
                i = e("./ParseError"),
                s = e("./Style"),
                o = a.ParseNode;
            n("array", {
                numArgs: 1
            }, function(e, t) {
                var n = t[0];
                n = n.value.map ? n.value : [n];
                var a = n.map(function(e) {
                        var t = e.value;
                        if (-1 !== "lcr".indexOf(t)) return {
                            type: "align",
                            align: t
                        };
                        if ("|" === t) return {
                            type: "separator",
                            separator: "|"
                        };
                        throw new i("Unknown column alignment: " + e.value, e)
                    }),
                    s = {
                        type: "array",
                        cols: a,
                        hskipBeforeAndAfter: !0
                    };
                return s = r(e.parser, s)
            }), n(["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"], {}, function(e) {
                var t = {
                        matrix: null,
                        pmatrix: ["(", ")"],
                        bmatrix: ["[", "]"],
                        Bmatrix: ["\\{", "\\}"],
                        vmatrix: ["|", "|"],
                        Vmatrix: ["\\Vert", "\\Vert"]
                    }[e.envName],
                    n = {
                        type: "array",
                        hskipBeforeAndAfter: !1
                    };
                return n = r(e.parser, n), t && (n = new o("leftright", {
                    body: [n],
                    left: t[0],
                    right: t[1]
                }, e.mode)), n
            }), n("cases", {}, function(e) {
                var t = {
                    type: "array",
                    arraystretch: 1.2,
                    cols: [{
                        type: "align",
                        align: "l",
                        pregap: 0,
                        postgap: s.TEXT.metrics.quad
                    }, {
                        type: "align",
                        align: "l",
                        pregap: 0,
                        postgap: 0
                    }]
                };
                return t = r(e.parser, t), t = new o("leftright", {
                    body: [t],
                    left: "\\{",
                    right: "."
                }, e.mode)
            }), n("aligned", {}, function(e) {
                var t = {
                    type: "array",
                    cols: []
                };
                t = r(e.parser, t);
                var n = new o("ordgroup", [], e.mode),
                    a = 0;
                t.value.body.forEach(function(e) {
                    var t;
                    for (t = 1; t < e.length; t += 2) e[t].value.unshift(n);
                    a < e.length && (a = e.length)
                });
                for (var i = 0; a > i; ++i) {
                    var s = "r",
                        l = 0;
                    i % 2 === 1 ? s = "l" : i > 0 && (l = 2), t.value.cols[i] = {
                        type: "align",
                        align: s,
                        pregap: l,
                        postgap: 0
                    }
                }
                return t
            })
        }, {
            "./ParseError": 6,
            "./Style": 9,
            "./parseData": 21
        }],
        17: [function(e, t) {
            var r = (e("./Style"), e("./unicodeRegexes").cjkRegex),
                n = {
                    slant: [.25, .25, .25],
                    space: [0, 0, 0],
                    stretch: [0, 0, 0],
                    shrink: [0, 0, 0],
                    xHeight: [.431, .431, .431],
                    quad: [1, 1.171, 1.472],
                    extraSpace: [0, 0, 0],
                    num1: [.677, .732, .925],
                    num2: [.394, .384, .387],
                    num3: [.444, .471, .504],
                    denom1: [.686, .752, 1.025],
                    denom2: [.345, .344, .532],
                    sup1: [.413, .503, .504],
                    sup2: [.363, .431, .404],
                    sup3: [.289, .286, .294],
                    sub1: [.15, .143, .2],
                    sub2: [.247, .286, .4],
                    supDrop: [.386, .353, .494],
                    subDrop: [.05, .071, .1],
                    delim1: [2.39, 1.7, 1.98],
                    delim2: [1.01, 1.157, 1.42],
                    axisHeight: [.25, .25, .25]
                },
                a = .04,
                i = .111,
                s = .166,
                o = .2,
                l = .6,
                u = .1,
                c = 10,
                d = 2 / c,
                p = {
                    defaultRuleThickness: a,
                    bigOpSpacing1: i,
                    bigOpSpacing2: s,
                    bigOpSpacing3: o,
                    bigOpSpacing4: l,
                    bigOpSpacing5: u,
                    ptPerEm: c,
                    doubleRuleSep: d
                },
                h = e("./fontMetricsData"),
                m = {
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\xc3": "A",
                    "\xc4": "A",
                    "\xc5": "A",
                    "\xc6": "A",
                    "\xc7": "C",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\xcb": "E",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\xcf": "I",
                    "\xd0": "D",
                    "\xd1": "N",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\xd5": "O",
                    "\xd6": "O",
                    "\xd8": "O",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\xdc": "U",
                    "\xdd": "Y",
                    "\xde": "o",
                    "\xdf": "B",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\xe3": "a",
                    "\xe4": "a",
                    "\xe5": "a",
                    "\xe6": "a",
                    "\xe7": "c",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\xeb": "e",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\xef": "i",
                    "\xf0": "d",
                    "\xf1": "n",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\xf5": "o",
                    "\xf6": "o",
                    "\xf8": "o",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\xfc": "u",
                    "\xfd": "y",
                    "\xfe": "o",
                    "\xff": "y",
                    "\u0410": "A",
                    "\u0411": "B",
                    "\u0412": "B",
                    "\u0413": "F",
                    "\u0414": "A",
                    "\u0415": "E",
                    "\u0416": "K",
                    "\u0417": "3",
                    "\u0418": "N",
                    "\u0419": "N",
                    "\u041a": "K",
                    "\u041b": "N",
                    "\u041c": "M",
                    "\u041d": "H",
                    "\u041e": "O",
                    "\u041f": "N",
                    "\u0420": "P",
                    "\u0421": "C",
                    "\u0422": "T",
                    "\u0423": "y",
                    "\u0424": "O",
                    "\u0425": "X",
                    "\u0426": "U",
                    "\u0427": "h",
                    "\u0428": "W",
                    "\u0429": "W",
                    "\u042a": "B",
                    "\u042b": "X",
                    "\u042c": "B",
                    "\u042d": "3",
                    "\u042e": "X",
                    "\u042f": "R",
                    "\u0430": "a",
                    "\u0431": "b",
                    "\u0432": "a",
                    "\u0433": "r",
                    "\u0434": "y",
                    "\u0435": "e",
                    "\u0436": "m",
                    "\u0437": "e",
                    "\u0438": "n",
                    "\u0439": "n",
                    "\u043a": "n",
                    "\u043b": "n",
                    "\u043c": "m",
                    "\u043d": "n",
                    "\u043e": "o",
                    "\u043f": "n",
                    "\u0440": "p",
                    "\u0441": "c",
                    "\u0442": "o",
                    "\u0443": "y",
                    "\u0444": "b",
                    "\u0445": "x",
                    "\u0446": "n",
                    "\u0447": "n",
                    "\u0448": "w",
                    "\u0449": "w",
                    "\u044a": "a",
                    "\u044b": "m",
                    "\u044c": "a",
                    "\u044d": "e",
                    "\u044e": "m",
                    "\u044f": "r"
                },
                f = function(e, t) {
                    var n = e.charCodeAt(0);
                    e[0] in m ? n = m[e[0]].charCodeAt(0) : r.test(e[0]) && (n = "M".charCodeAt(0));
                    var a = h[t][n];
                    return a ? {
                        depth: a[0],
                        height: a[1],
                        italic: a[2],
                        skew: a[3],
                        width: a[4]
                    } : void 0
                };
            t.exports = {
                metrics: p,
                sigmas: n,
                getCharacterMetrics: f
            }
        }, {
            "./Style": 9,
            "./fontMetricsData": 18,
            "./unicodeRegexes": 24
        }],
        18: [function(e, t) {
            t.exports = {
                "AMS-Regular": {
                    65: [0, .68889, 0, 0],
                    66: [0, .68889, 0, 0],
                    67: [0, .68889, 0, 0],
                    68: [0, .68889, 0, 0],
                    69: [0, .68889, 0, 0],
                    70: [0, .68889, 0, 0],
                    71: [0, .68889, 0, 0],
                    72: [0, .68889, 0, 0],
                    73: [0, .68889, 0, 0],
                    74: [.16667, .68889, 0, 0],
                    75: [0, .68889, 0, 0],
                    76: [0, .68889, 0, 0],
                    77: [0, .68889, 0, 0],
                    78: [0, .68889, 0, 0],
                    79: [.16667, .68889, 0, 0],
                    80: [0, .68889, 0, 0],
                    81: [.16667, .68889, 0, 0],
                    82: [0, .68889, 0, 0],
                    83: [0, .68889, 0, 0],
                    84: [0, .68889, 0, 0],
                    85: [0, .68889, 0, 0],
                    86: [0, .68889, 0, 0],
                    87: [0, .68889, 0, 0],
                    88: [0, .68889, 0, 0],
                    89: [0, .68889, 0, 0],
                    90: [0, .68889, 0, 0],
                    107: [0, .68889, 0, 0],
                    165: [0, .675, .025, 0],
                    174: [.15559, .69224, 0, 0],
                    240: [0, .68889, 0, 0],
                    295: [0, .68889, 0, 0],
                    710: [0, .825, 0, 0],
                    732: [0, .9, 0, 0],
                    770: [0, .825, 0, 0],
                    771: [0, .9, 0, 0],
                    989: [.08167, .58167, 0, 0],
                    1008: [0, .43056, .04028, 0],
                    8245: [0, .54986, 0, 0],
                    8463: [0, .68889, 0, 0],
                    8487: [0, .68889, 0, 0],
                    8498: [0, .68889, 0, 0],
                    8502: [0, .68889, 0, 0],
                    8503: [0, .68889, 0, 0],
                    8504: [0, .68889, 0, 0],
                    8513: [0, .68889, 0, 0],
                    8592: [-.03598, .46402, 0, 0],
                    8594: [-.03598, .46402, 0, 0],
                    8602: [-.13313, .36687, 0, 0],
                    8603: [-.13313, .36687, 0, 0],
                    8606: [.01354, .52239, 0, 0],
                    8608: [.01354, .52239, 0, 0],
                    8610: [.01354, .52239, 0, 0],
                    8611: [.01354, .52239, 0, 0],
                    8619: [0, .54986, 0, 0],
                    8620: [0, .54986, 0, 0],
                    8621: [-.13313, .37788, 0, 0],
                    8622: [-.13313, .36687, 0, 0],
                    8624: [0, .69224, 0, 0],
                    8625: [0, .69224, 0, 0],
                    8630: [0, .43056, 0, 0],
                    8631: [0, .43056, 0, 0],
                    8634: [.08198, .58198, 0, 0],
                    8635: [.08198, .58198, 0, 0],
                    8638: [.19444, .69224, 0, 0],
                    8639: [.19444, .69224, 0, 0],
                    8642: [.19444, .69224, 0, 0],
                    8643: [.19444, .69224, 0, 0],
                    8644: [.1808, .675, 0, 0],
                    8646: [.1808, .675, 0, 0],
                    8647: [.1808, .675, 0, 0],
                    8648: [.19444, .69224, 0, 0],
                    8649: [.1808, .675, 0, 0],
                    8650: [.19444, .69224, 0, 0],
                    8651: [.01354, .52239, 0, 0],
                    8652: [.01354, .52239, 0, 0],
                    8653: [-.13313, .36687, 0, 0],
                    8654: [-.13313, .36687, 0, 0],
                    8655: [-.13313, .36687, 0, 0],
                    8666: [.13667, .63667, 0, 0],
                    8667: [.13667, .63667, 0, 0],
                    8669: [-.13313, .37788, 0, 0],
                    8672: [-.064, .437, 0, 0],
                    8674: [-.064, .437, 0, 0],
                    8705: [0, .825, 0, 0],
                    8708: [0, .68889, 0, 0],
                    8709: [.08167, .58167, 0, 0],
                    8717: [0, .43056, 0, 0],
                    8722: [-.03598, .46402, 0, 0],
                    8724: [.08198, .69224, 0, 0],
                    8726: [.08167, .58167, 0, 0],
                    8733: [0, .69224, 0, 0],
                    8736: [0, .69224, 0, 0],
                    8737: [0, .69224, 0, 0],
                    8738: [.03517, .52239, 0, 0],
                    8739: [.08167, .58167, 0, 0],
                    8740: [.25142, .74111, 0, 0],
                    8741: [.08167, .58167, 0, 0],
                    8742: [.25142, .74111, 0, 0],
                    8756: [0, .69224, 0, 0],
                    8757: [0, .69224, 0, 0],
                    8764: [-.13313, .36687, 0, 0],
                    8765: [-.13313, .37788, 0, 0],
                    8769: [-.13313, .36687, 0, 0],
                    8770: [-.03625, .46375, 0, 0],
                    8774: [.30274, .79383, 0, 0],
                    8776: [-.01688, .48312, 0, 0],
                    8778: [.08167, .58167, 0, 0],
                    8782: [.06062, .54986, 0, 0],
                    8783: [.06062, .54986, 0, 0],
                    8785: [.08198, .58198, 0, 0],
                    8786: [.08198, .58198, 0, 0],
                    8787: [.08198, .58198, 0, 0],
                    8790: [0, .69224, 0, 0],
                    8791: [.22958, .72958, 0, 0],
                    8796: [.08198, .91667, 0, 0],
                    8806: [.25583, .75583, 0, 0],
                    8807: [.25583, .75583, 0, 0],
                    8808: [.25142, .75726, 0, 0],
                    8809: [.25142, .75726, 0, 0],
                    8812: [.25583, .75583, 0, 0],
                    8814: [.20576, .70576, 0, 0],
                    8815: [.20576, .70576, 0, 0],
                    8816: [.30274, .79383, 0, 0],
                    8817: [.30274, .79383, 0, 0],
                    8818: [.22958, .72958, 0, 0],
                    8819: [.22958, .72958, 0, 0],
                    8822: [.1808, .675, 0, 0],
                    8823: [.1808, .675, 0, 0],
                    8828: [.13667, .63667, 0, 0],
                    8829: [.13667, .63667, 0, 0],
                    8830: [.22958, .72958, 0, 0],
                    8831: [.22958, .72958, 0, 0],
                    8832: [.20576, .70576, 0, 0],
                    8833: [.20576, .70576, 0, 0],
                    8840: [.30274, .79383, 0, 0],
                    8841: [.30274, .79383, 0, 0],
                    8842: [.13597, .63597, 0, 0],
                    8843: [.13597, .63597, 0, 0],
                    8847: [.03517, .54986, 0, 0],
                    8848: [.03517, .54986, 0, 0],
                    8858: [.08198, .58198, 0, 0],
                    8859: [.08198, .58198, 0, 0],
                    8861: [.08198, .58198, 0, 0],
                    8862: [0, .675, 0, 0],
                    8863: [0, .675, 0, 0],
                    8864: [0, .675, 0, 0],
                    8865: [0, .675, 0, 0],
                    8872: [0, .69224, 0, 0],
                    8873: [0, .69224, 0, 0],
                    8874: [0, .69224, 0, 0],
                    8876: [0, .68889, 0, 0],
                    8877: [0, .68889, 0, 0],
                    8878: [0, .68889, 0, 0],
                    8879: [0, .68889, 0, 0],
                    8882: [.03517, .54986, 0, 0],
                    8883: [.03517, .54986, 0, 0],
                    8884: [.13667, .63667, 0, 0],
                    8885: [.13667, .63667, 0, 0],
                    8888: [0, .54986, 0, 0],
                    8890: [.19444, .43056, 0, 0],
                    8891: [.19444, .69224, 0, 0],
                    8892: [.19444, .69224, 0, 0],
                    8901: [0, .54986, 0, 0],
                    8903: [.08167, .58167, 0, 0],
                    8905: [.08167, .58167, 0, 0],
                    8906: [.08167, .58167, 0, 0],
                    8907: [0, .69224, 0, 0],
                    8908: [0, .69224, 0, 0],
                    8909: [-.03598, .46402, 0, 0],
                    8910: [0, .54986, 0, 0],
                    8911: [0, .54986, 0, 0],
                    8912: [.03517, .54986, 0, 0],
                    8913: [.03517, .54986, 0, 0],
                    8914: [0, .54986, 0, 0],
                    8915: [0, .54986, 0, 0],
                    8916: [0, .69224, 0, 0],
                    8918: [.0391, .5391, 0, 0],
                    8919: [.0391, .5391, 0, 0],
                    8920: [.03517, .54986, 0, 0],
                    8921: [.03517, .54986, 0, 0],
                    8922: [.38569, .88569, 0, 0],
                    8923: [.38569, .88569, 0, 0],
                    8926: [.13667, .63667, 0, 0],
                    8927: [.13667, .63667, 0, 0],
                    8928: [.30274, .79383, 0, 0],
                    8929: [.30274, .79383, 0, 0],
                    8934: [.23222, .74111, 0, 0],
                    8935: [.23222, .74111, 0, 0],
                    8936: [.23222, .74111, 0, 0],
                    8937: [.23222, .74111, 0, 0],
                    8938: [.20576, .70576, 0, 0],
                    8939: [.20576, .70576, 0, 0],
                    8940: [.30274, .79383, 0, 0],
                    8941: [.30274, .79383, 0, 0],
                    8994: [.19444, .69224, 0, 0],
                    8995: [.19444, .69224, 0, 0],
                    9416: [.15559, .69224, 0, 0],
                    9484: [0, .69224, 0, 0],
                    9488: [0, .69224, 0, 0],
                    9492: [0, .37788, 0, 0],
                    9496: [0, .37788, 0, 0],
                    9585: [.19444, .68889, 0, 0],
                    9586: [.19444, .74111, 0, 0],
                    9632: [0, .675, 0, 0],
                    9633: [0, .675, 0, 0],
                    9650: [0, .54986, 0, 0],
                    9651: [0, .54986, 0, 0],
                    9654: [.03517, .54986, 0, 0],
                    9660: [0, .54986, 0, 0],
                    9661: [0, .54986, 0, 0],
                    9664: [.03517, .54986, 0, 0],
                    9674: [.11111, .69224, 0, 0],
                    9733: [.19444, .69224, 0, 0],
                    10003: [0, .69224, 0, 0],
                    10016: [0, .69224, 0, 0],
                    10731: [.11111, .69224, 0, 0],
                    10846: [.19444, .75583, 0, 0],
                    10877: [.13667, .63667, 0, 0],
                    10878: [.13667, .63667, 0, 0],
                    10885: [.25583, .75583, 0, 0],
                    10886: [.25583, .75583, 0, 0],
                    10887: [.13597, .63597, 0, 0],
                    10888: [.13597, .63597, 0, 0],
                    10889: [.26167, .75726, 0, 0],
                    10890: [.26167, .75726, 0, 0],
                    10891: [.48256, .98256, 0, 0],
                    10892: [.48256, .98256, 0, 0],
                    10901: [.13667, .63667, 0, 0],
                    10902: [.13667, .63667, 0, 0],
                    10933: [.25142, .75726, 0, 0],
                    10934: [.25142, .75726, 0, 0],
                    10935: [.26167, .75726, 0, 0],
                    10936: [.26167, .75726, 0, 0],
                    10937: [.26167, .75726, 0, 0],
                    10938: [.26167, .75726, 0, 0],
                    10949: [.25583, .75583, 0, 0],
                    10950: [.25583, .75583, 0, 0],
                    10955: [.28481, .79383, 0, 0],
                    10956: [.28481, .79383, 0, 0],
                    57350: [.08167, .58167, 0, 0],
                    57351: [.08167, .58167, 0, 0],
                    57352: [.08167, .58167, 0, 0],
                    57353: [0, .43056, .04028, 0],
                    57356: [.25142, .75726, 0, 0],
                    57357: [.25142, .75726, 0, 0],
                    57358: [.41951, .91951, 0, 0],
                    57359: [.30274, .79383, 0, 0],
                    57360: [.30274, .79383, 0, 0],
                    57361: [.41951, .91951, 0, 0],
                    57366: [.25142, .75726, 0, 0],
                    57367: [.25142, .75726, 0, 0],
                    57368: [.25142, .75726, 0, 0],
                    57369: [.25142, .75726, 0, 0],
                    57370: [.13597, .63597, 0, 0],
                    57371: [.13597, .63597, 0, 0]
                },
                "Caligraphic-Regular": {
                    48: [0, .43056, 0, 0],
                    49: [0, .43056, 0, 0],
                    50: [0, .43056, 0, 0],
                    51: [.19444, .43056, 0, 0],
                    52: [.19444, .43056, 0, 0],
                    53: [.19444, .43056, 0, 0],
                    54: [0, .64444, 0, 0],
                    55: [.19444, .43056, 0, 0],
                    56: [0, .64444, 0, 0],
                    57: [.19444, .43056, 0, 0],
                    65: [0, .68333, 0, .19445],
                    66: [0, .68333, .03041, .13889],
                    67: [0, .68333, .05834, .13889],
                    68: [0, .68333, .02778, .08334],
                    69: [0, .68333, .08944, .11111],
                    70: [0, .68333, .09931, .11111],
                    71: [.09722, .68333, .0593, .11111],
                    72: [0, .68333, .00965, .11111],
                    73: [0, .68333, .07382, 0],
                    74: [.09722, .68333, .18472, .16667],
                    75: [0, .68333, .01445, .05556],
                    76: [0, .68333, 0, .13889],
                    77: [0, .68333, 0, .13889],
                    78: [0, .68333, .14736, .08334],
                    79: [0, .68333, .02778, .11111],
                    80: [0, .68333, .08222, .08334],
                    81: [.09722, .68333, 0, .11111],
                    82: [0, .68333, 0, .08334],
                    83: [0, .68333, .075, .13889],
                    84: [0, .68333, .25417, 0],
                    85: [0, .68333, .09931, .08334],
                    86: [0, .68333, .08222, 0],
                    87: [0, .68333, .08222, .08334],
                    88: [0, .68333, .14643, .13889],
                    89: [.09722, .68333, .08222, .08334],
                    90: [0, .68333, .07944, .13889]
                },
                "Fraktur-Regular": {
                    33: [0, .69141, 0, 0],
                    34: [0, .69141, 0, 0],
                    38: [0, .69141, 0, 0],
                    39: [0, .69141, 0, 0],
                    40: [.24982, .74947, 0, 0],
                    41: [.24982, .74947, 0, 0],
                    42: [0, .62119, 0, 0],
                    43: [.08319, .58283, 0, 0],
                    44: [0, .10803, 0, 0],
                    45: [.08319, .58283, 0, 0],
                    46: [0, .10803, 0, 0],
                    47: [.24982, .74947, 0, 0],
                    48: [0, .47534, 0, 0],
                    49: [0, .47534, 0, 0],
                    50: [0, .47534, 0, 0],
                    51: [.18906, .47534, 0, 0],
                    52: [.18906, .47534, 0, 0],
                    53: [.18906, .47534, 0, 0],
                    54: [0, .69141, 0, 0],
                    55: [.18906, .47534, 0, 0],
                    56: [0, .69141, 0, 0],
                    57: [.18906, .47534, 0, 0],
                    58: [0, .47534, 0, 0],
                    59: [.12604, .47534, 0, 0],
                    61: [-.13099, .36866, 0, 0],
                    63: [0, .69141, 0, 0],
                    65: [0, .69141, 0, 0],
                    66: [0, .69141, 0, 0],
                    67: [0, .69141, 0, 0],
                    68: [0, .69141, 0, 0],
                    69: [0, .69141, 0, 0],
                    70: [.12604, .69141, 0, 0],
                    71: [0, .69141, 0, 0],
                    72: [.06302, .69141, 0, 0],
                    73: [0, .69141, 0, 0],
                    74: [.12604, .69141, 0, 0],
                    75: [0, .69141, 0, 0],
                    76: [0, .69141, 0, 0],
                    77: [0, .69141, 0, 0],
                    78: [0, .69141, 0, 0],
                    79: [0, .69141, 0, 0],
                    80: [.18906, .69141, 0, 0],
                    81: [.03781, .69141, 0, 0],
                    82: [0, .69141, 0, 0],
                    83: [0, .69141, 0, 0],
                    84: [0, .69141, 0, 0],
                    85: [0, .69141, 0, 0],
                    86: [0, .69141, 0, 0],
                    87: [0, .69141, 0, 0],
                    88: [0, .69141, 0, 0],
                    89: [.18906, .69141, 0, 0],
                    90: [.12604, .69141, 0, 0],
                    91: [.24982, .74947, 0, 0],
                    93: [.24982, .74947, 0, 0],
                    94: [0, .69141, 0, 0],
                    97: [0, .47534, 0, 0],
                    98: [0, .69141, 0, 0],
                    99: [0, .47534, 0, 0],
                    100: [0, .62119, 0, 0],
                    101: [0, .47534, 0, 0],
                    102: [.18906, .69141, 0, 0],
                    103: [.18906, .47534, 0, 0],
                    104: [.18906, .69141, 0, 0],
                    105: [0, .69141, 0, 0],
                    106: [0, .69141, 0, 0],
                    107: [0, .69141, 0, 0],
                    108: [0, .69141, 0, 0],
                    109: [0, .47534, 0, 0],
                    110: [0, .47534, 0, 0],
                    111: [0, .47534, 0, 0],
                    112: [.18906, .52396, 0, 0],
                    113: [.18906, .47534, 0, 0],
                    114: [0, .47534, 0, 0],
                    115: [0, .47534, 0, 0],
                    116: [0, .62119, 0, 0],
                    117: [0, .47534, 0, 0],
                    118: [0, .52396, 0, 0],
                    119: [0, .52396, 0, 0],
                    120: [.18906, .47534, 0, 0],
                    121: [.18906, .47534, 0, 0],
                    122: [.18906, .47534, 0, 0],
                    8216: [0, .69141, 0, 0],
                    8217: [0, .69141, 0, 0],
                    58112: [0, .62119, 0, 0],
                    58113: [0, .62119, 0, 0],
                    58114: [.18906, .69141, 0, 0],
                    58115: [.18906, .69141, 0, 0],
                    58116: [.18906, .47534, 0, 0],
                    58117: [0, .69141, 0, 0],
                    58118: [0, .62119, 0, 0],
                    58119: [0, .47534, 0, 0]
                },
                "Main-Bold": {
                    33: [0, .69444, 0, 0],
                    34: [0, .69444, 0, 0],
                    35: [.19444, .69444, 0, 0],
                    36: [.05556, .75, 0, 0],
                    37: [.05556, .75, 0, 0],
                    38: [0, .69444, 0, 0],
                    39: [0, .69444, 0, 0],
                    40: [.25, .75, 0, 0],
                    41: [.25, .75, 0, 0],
                    42: [0, .75, 0, 0],
                    43: [.13333, .63333, 0, 0],
                    44: [.19444, .15556, 0, 0],
                    45: [0, .44444, 0, 0],
                    46: [0, .15556, 0, 0],
                    47: [.25, .75, 0, 0],
                    48: [0, .64444, 0, 0],
                    49: [0, .64444, 0, 0],
                    50: [0, .64444, 0, 0],
                    51: [0, .64444, 0, 0],
                    52: [0, .64444, 0, 0],
                    53: [0, .64444, 0, 0],
                    54: [0, .64444, 0, 0],
                    55: [0, .64444, 0, 0],
                    56: [0, .64444, 0, 0],
                    57: [0, .64444, 0, 0],
                    58: [0, .44444, 0, 0],
                    59: [.19444, .44444, 0, 0],
                    60: [.08556, .58556, 0, 0],
                    61: [-.10889, .39111, 0, 0],
                    62: [.08556, .58556, 0, 0],
                    63: [0, .69444, 0, 0],
                    64: [0, .69444, 0, 0],
                    65: [0, .68611, 0, 0],
                    66: [0, .68611, 0, 0],
                    67: [0, .68611, 0, 0],
                    68: [0, .68611, 0, 0],
                    69: [0, .68611, 0, 0],
                    70: [0, .68611, 0, 0],
                    71: [0, .68611, 0, 0],
                    72: [0, .68611, 0, 0],
                    73: [0, .68611, 0, 0],
                    74: [0, .68611, 0, 0],
                    75: [0, .68611, 0, 0],
                    76: [0, .68611, 0, 0],
                    77: [0, .68611, 0, 0],
                    78: [0, .68611, 0, 0],
                    79: [0, .68611, 0, 0],
                    80: [0, .68611, 0, 0],
                    81: [.19444, .68611, 0, 0],
                    82: [0, .68611, 0, 0],
                    83: [0, .68611, 0, 0],
                    84: [0, .68611, 0, 0],
                    85: [0, .68611, 0, 0],
                    86: [0, .68611, .01597, 0],
                    87: [0, .68611, .01597, 0],
                    88: [0, .68611, 0, 0],
                    89: [0, .68611, .02875, 0],
                    90: [0, .68611, 0, 0],
                    91: [.25, .75, 0, 0],
                    92: [.25, .75, 0, 0],
                    93: [.25, .75, 0, 0],
                    94: [0, .69444, 0, 0],
                    95: [.31, .13444, .03194, 0],
                    96: [0, .69444, 0, 0],
                    97: [0, .44444, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .44444, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .44444, 0, 0],
                    102: [0, .69444, .10903, 0],
                    103: [.19444, .44444, .01597, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .69444, 0, 0],
                    106: [.19444, .69444, 0, 0],
                    107: [0, .69444, 0, 0],
                    108: [0, .69444, 0, 0],
                    109: [0, .44444, 0, 0],
                    110: [0, .44444, 0, 0],
                    111: [0, .44444, 0, 0],
                    112: [.19444, .44444, 0, 0],
                    113: [.19444, .44444, 0, 0],
                    114: [0, .44444, 0, 0],
                    115: [0, .44444, 0, 0],
                    116: [0, .63492, 0, 0],
                    117: [0, .44444, 0, 0],
                    118: [0, .44444, .01597, 0],
                    119: [0, .44444, .01597, 0],
                    120: [0, .44444, 0, 0],
                    121: [.19444, .44444, .01597, 0],
                    122: [0, .44444, 0, 0],
                    123: [.25, .75, 0, 0],
                    124: [.25, .75, 0, 0],
                    125: [.25, .75, 0, 0],
                    126: [.35, .34444, 0, 0],
                    168: [0, .69444, 0, 0],
                    172: [0, .44444, 0, 0],
                    175: [0, .59611, 0, 0],
                    176: [0, .69444, 0, 0],
                    177: [.13333, .63333, 0, 0],
                    180: [0, .69444, 0, 0],
                    215: [.13333, .63333, 0, 0],
                    247: [.13333, .63333, 0, 0],
                    305: [0, .44444, 0, 0],
                    567: [.19444, .44444, 0, 0],
                    710: [0, .69444, 0, 0],
                    711: [0, .63194, 0, 0],
                    713: [0, .59611, 0, 0],
                    714: [0, .69444, 0, 0],
                    715: [0, .69444, 0, 0],
                    728: [0, .69444, 0, 0],
                    729: [0, .69444, 0, 0],
                    730: [0, .69444, 0, 0],
                    732: [0, .69444, 0, 0],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, 0, 0],
                    770: [0, .69444, 0, 0],
                    771: [0, .69444, 0, 0],
                    772: [0, .59611, 0, 0],
                    774: [0, .69444, 0, 0],
                    775: [0, .69444, 0, 0],
                    776: [0, .69444, 0, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, 0, 0],
                    780: [0, .63194, 0, 0],
                    824: [.19444, .69444, 0, 0],
                    915: [0, .68611, 0, 0],
                    916: [0, .68611, 0, 0],
                    920: [0, .68611, 0, 0],
                    923: [0, .68611, 0, 0],
                    926: [0, .68611, 0, 0],
                    928: [0, .68611, 0, 0],
                    931: [0, .68611, 0, 0],
                    933: [0, .68611, 0, 0],
                    934: [0, .68611, 0, 0],
                    936: [0, .68611, 0, 0],
                    937: [0, .68611, 0, 0],
                    8211: [0, .44444, .03194, 0],
                    8212: [0, .44444, .03194, 0],
                    8216: [0, .69444, 0, 0],
                    8217: [0, .69444, 0, 0],
                    8220: [0, .69444, 0, 0],
                    8221: [0, .69444, 0, 0],
                    8224: [.19444, .69444, 0, 0],
                    8225: [.19444, .69444, 0, 0],
                    8242: [0, .55556, 0, 0],
                    8407: [0, .72444, .15486, 0],
                    8463: [0, .69444, 0, 0],
                    8465: [0, .69444, 0, 0],
                    8467: [0, .69444, 0, 0],
                    8472: [.19444, .44444, 0, 0],
                    8476: [0, .69444, 0, 0],
                    8501: [0, .69444, 0, 0],
                    8592: [-.10889, .39111, 0, 0],
                    8593: [.19444, .69444, 0, 0],
                    8594: [-.10889, .39111, 0, 0],
                    8595: [.19444, .69444, 0, 0],
                    8596: [-.10889, .39111, 0, 0],
                    8597: [.25, .75, 0, 0],
                    8598: [.19444, .69444, 0, 0],
                    8599: [.19444, .69444, 0, 0],
                    8600: [.19444, .69444, 0, 0],
                    8601: [.19444, .69444, 0, 0],
                    8636: [-.10889, .39111, 0, 0],
                    8637: [-.10889, .39111, 0, 0],
                    8640: [-.10889, .39111, 0, 0],
                    8641: [-.10889, .39111, 0, 0],
                    8656: [-.10889, .39111, 0, 0],
                    8657: [.19444, .69444, 0, 0],
                    8658: [-.10889, .39111, 0, 0],
                    8659: [.19444, .69444, 0, 0],
                    8660: [-.10889, .39111, 0, 0],
                    8661: [.25, .75, 0, 0],
                    8704: [0, .69444, 0, 0],
                    8706: [0, .69444, .06389, 0],
                    8707: [0, .69444, 0, 0],
                    8709: [.05556, .75, 0, 0],
                    8711: [0, .68611, 0, 0],
                    8712: [.08556, .58556, 0, 0],
                    8715: [.08556, .58556, 0, 0],
                    8722: [.13333, .63333, 0, 0],
                    8723: [.13333, .63333, 0, 0],
                    8725: [.25, .75, 0, 0],
                    8726: [.25, .75, 0, 0],
                    8727: [-.02778, .47222, 0, 0],
                    8728: [-.02639, .47361, 0, 0],
                    8729: [-.02639, .47361, 0, 0],
                    8730: [.18, .82, 0, 0],
                    8733: [0, .44444, 0, 0],
                    8734: [0, .44444, 0, 0],
                    8736: [0, .69224, 0, 0],
                    8739: [.25, .75, 0, 0],
                    8741: [.25, .75, 0, 0],
                    8743: [0, .55556, 0, 0],
                    8744: [0, .55556, 0, 0],
                    8745: [0, .55556, 0, 0],
                    8746: [0, .55556, 0, 0],
                    8747: [.19444, .69444, .12778, 0],
                    8764: [-.10889, .39111, 0, 0],
                    8768: [.19444, .69444, 0, 0],
                    8771: [.00222, .50222, 0, 0],
                    8776: [.02444, .52444, 0, 0],
                    8781: [.00222, .50222, 0, 0],
                    8801: [.00222, .50222, 0, 0],
                    8804: [.19667, .69667, 0, 0],
                    8805: [.19667, .69667, 0, 0],
                    8810: [.08556, .58556, 0, 0],
                    8811: [.08556, .58556, 0, 0],
                    8826: [.08556, .58556, 0, 0],
                    8827: [.08556, .58556, 0, 0],
                    8834: [.08556, .58556, 0, 0],
                    8835: [.08556, .58556, 0, 0],
                    8838: [.19667, .69667, 0, 0],
                    8839: [.19667, .69667, 0, 0],
                    8846: [0, .55556, 0, 0],
                    8849: [.19667, .69667, 0, 0],
                    8850: [.19667, .69667, 0, 0],
                    8851: [0, .55556, 0, 0],
                    8852: [0, .55556, 0, 0],
                    8853: [.13333, .63333, 0, 0],
                    8854: [.13333, .63333, 0, 0],
                    8855: [.13333, .63333, 0, 0],
                    8856: [.13333, .63333, 0, 0],
                    8857: [.13333, .63333, 0, 0],
                    8866: [0, .69444, 0, 0],
                    8867: [0, .69444, 0, 0],
                    8868: [0, .69444, 0, 0],
                    8869: [0, .69444, 0, 0],
                    8900: [-.02639, .47361, 0, 0],
                    8901: [-.02639, .47361, 0, 0],
                    8902: [-.02778, .47222, 0, 0],
                    8968: [.25, .75, 0, 0],
                    8969: [.25, .75, 0, 0],
                    8970: [.25, .75, 0, 0],
                    8971: [.25, .75, 0, 0],
                    8994: [-.13889, .36111, 0, 0],
                    8995: [-.13889, .36111, 0, 0],
                    9651: [.19444, .69444, 0, 0],
                    9657: [-.02778, .47222, 0, 0],
                    9661: [.19444, .69444, 0, 0],
                    9667: [-.02778, .47222, 0, 0],
                    9711: [.19444, .69444, 0, 0],
                    9824: [.12963, .69444, 0, 0],
                    9825: [.12963, .69444, 0, 0],
                    9826: [.12963, .69444, 0, 0],
                    9827: [.12963, .69444, 0, 0],
                    9837: [0, .75, 0, 0],
                    9838: [.19444, .69444, 0, 0],
                    9839: [.19444, .69444, 0, 0],
                    10216: [.25, .75, 0, 0],
                    10217: [.25, .75, 0, 0],
                    10815: [0, .68611, 0, 0],
                    10927: [.19667, .69667, 0, 0],
                    10928: [.19667, .69667, 0, 0]
                },
                "Main-Italic": {
                    33: [0, .69444, .12417, 0],
                    34: [0, .69444, .06961, 0],
                    35: [.19444, .69444, .06616, 0],
                    37: [.05556, .75, .13639, 0],
                    38: [0, .69444, .09694, 0],
                    39: [0, .69444, .12417, 0],
                    40: [.25, .75, .16194, 0],
                    41: [.25, .75, .03694, 0],
                    42: [0, .75, .14917, 0],
                    43: [.05667, .56167, .03694, 0],
                    44: [.19444, .10556, 0, 0],
                    45: [0, .43056, .02826, 0],
                    46: [0, .10556, 0, 0],
                    47: [.25, .75, .16194, 0],
                    48: [0, .64444, .13556, 0],
                    49: [0, .64444, .13556, 0],
                    50: [0, .64444, .13556, 0],
                    51: [0, .64444, .13556, 0],
                    52: [.19444, .64444, .13556, 0],
                    53: [0, .64444, .13556, 0],
                    54: [0, .64444, .13556, 0],
                    55: [.19444, .64444, .13556, 0],
                    56: [0, .64444, .13556, 0],
                    57: [0, .64444, .13556, 0],
                    58: [0, .43056, .0582, 0],
                    59: [.19444, .43056, .0582, 0],
                    61: [-.13313, .36687, .06616, 0],
                    63: [0, .69444, .1225, 0],
                    64: [0, .69444, .09597, 0],
                    65: [0, .68333, 0, 0],
                    66: [0, .68333, .10257, 0],
                    67: [0, .68333, .14528, 0],
                    68: [0, .68333, .09403, 0],
                    69: [0, .68333, .12028, 0],
                    70: [0, .68333, .13305, 0],
                    71: [0, .68333, .08722, 0],
                    72: [0, .68333, .16389, 0],
                    73: [0, .68333, .15806, 0],
                    74: [0, .68333, .14028, 0],
                    75: [0, .68333, .14528, 0],
                    76: [0, .68333, 0, 0],
                    77: [0, .68333, .16389, 0],
                    78: [0, .68333, .16389, 0],
                    79: [0, .68333, .09403, 0],
                    80: [0, .68333, .10257, 0],
                    81: [.19444, .68333, .09403, 0],
                    82: [0, .68333, .03868, 0],
                    83: [0, .68333, .11972, 0],
                    84: [0, .68333, .13305, 0],
                    85: [0, .68333, .16389, 0],
                    86: [0, .68333, .18361, 0],
                    87: [0, .68333, .18361, 0],
                    88: [0, .68333, .15806, 0],
                    89: [0, .68333, .19383, 0],
                    90: [0, .68333, .14528, 0],
                    91: [.25, .75, .1875, 0],
                    93: [.25, .75, .10528, 0],
                    94: [0, .69444, .06646, 0],
                    95: [.31, .12056, .09208, 0],
                    97: [0, .43056, .07671, 0],
                    98: [0, .69444, .06312, 0],
                    99: [0, .43056, .05653, 0],
                    100: [0, .69444, .10333, 0],
                    101: [0, .43056, .07514, 0],
                    102: [.19444, .69444, .21194, 0],
                    103: [.19444, .43056, .08847, 0],
                    104: [0, .69444, .07671, 0],
                    105: [0, .65536, .1019, 0],
                    106: [.19444, .65536, .14467, 0],
                    107: [0, .69444, .10764, 0],
                    108: [0, .69444, .10333, 0],
                    109: [0, .43056, .07671, 0],
                    110: [0, .43056, .07671, 0],
                    111: [0, .43056, .06312, 0],
                    112: [.19444, .43056, .06312, 0],
                    113: [.19444, .43056, .08847, 0],
                    114: [0, .43056, .10764, 0],
                    115: [0, .43056, .08208, 0],
                    116: [0, .61508, .09486, 0],
                    117: [0, .43056, .07671, 0],
                    118: [0, .43056, .10764, 0],
                    119: [0, .43056, .10764, 0],
                    120: [0, .43056, .12042, 0],
                    121: [.19444, .43056, .08847, 0],
                    122: [0, .43056, .12292, 0],
                    126: [.35, .31786, .11585, 0],
                    163: [0, .69444, 0, 0],
                    305: [0, .43056, 0, .02778],
                    567: [.19444, .43056, 0, .08334],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, .09694, 0],
                    770: [0, .69444, .06646, 0],
                    771: [0, .66786, .11585, 0],
                    772: [0, .56167, .10333, 0],
                    774: [0, .69444, .10806, 0],
                    775: [0, .66786, .11752, 0],
                    776: [0, .66786, .10474, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, .1225, 0],
                    780: [0, .62847, .08295, 0],
                    915: [0, .68333, .13305, 0],
                    916: [0, .68333, 0, 0],
                    920: [0, .68333, .09403, 0],
                    923: [0, .68333, 0, 0],
                    926: [0, .68333, .15294, 0],
                    928: [0, .68333, .16389, 0],
                    931: [0, .68333, .12028, 0],
                    933: [0, .68333, .11111, 0],
                    934: [0, .68333, .05986, 0],
                    936: [0, .68333, .11111, 0],
                    937: [0, .68333, .10257, 0],
                    8211: [0, .43056, .09208, 0],
                    8212: [0, .43056, .09208, 0],
                    8216: [0, .69444, .12417, 0],
                    8217: [0, .69444, .12417, 0],
                    8220: [0, .69444, .1685, 0],
                    8221: [0, .69444, .06961, 0],
                    8463: [0, .68889, 0, 0]
                },
                "Main-Regular": {
                    32: [0, 0, 0, 0],
                    33: [0, .69444, 0, 0],
                    34: [0, .69444, 0, 0],
                    35: [.19444, .69444, 0, 0],
                    36: [.05556, .75, 0, 0],
                    37: [.05556, .75, 0, 0],
                    38: [0, .69444, 0, 0],
                    39: [0, .69444, 0, 0],
                    40: [.25, .75, 0, 0],
                    41: [.25, .75, 0, 0],
                    42: [0, .75, 0, 0],
                    43: [.08333, .58333, 0, 0],
                    44: [.19444, .10556, 0, 0],
                    45: [0, .43056, 0, 0],
                    46: [0, .10556, 0, 0],
                    47: [.25, .75, 0, 0],
                    48: [0, .64444, 0, 0],
                    49: [0, .64444, 0, 0],
                    50: [0, .64444, 0, 0],
                    51: [0, .64444, 0, 0],
                    52: [0, .64444, 0, 0],
                    53: [0, .64444, 0, 0],
                    54: [0, .64444, 0, 0],
                    55: [0, .64444, 0, 0],
                    56: [0, .64444, 0, 0],
                    57: [0, .64444, 0, 0],
                    58: [0, .43056, 0, 0],
                    59: [.19444, .43056, 0, 0],
                    60: [.0391, .5391, 0, 0],
                    61: [-.13313, .36687, 0, 0],
                    62: [.0391, .5391, 0, 0],
                    63: [0, .69444, 0, 0],
                    64: [0, .69444, 0, 0],
                    65: [0, .68333, 0, 0],
                    66: [0, .68333, 0, 0],
                    67: [0, .68333, 0, 0],
                    68: [0, .68333, 0, 0],
                    69: [0, .68333, 0, 0],
                    70: [0, .68333, 0, 0],
                    71: [0, .68333, 0, 0],
                    72: [0, .68333, 0, 0],
                    73: [0, .68333, 0, 0],
                    74: [0, .68333, 0, 0],
                    75: [0, .68333, 0, 0],
                    76: [0, .68333, 0, 0],
                    77: [0, .68333, 0, 0],
                    78: [0, .68333, 0, 0],
                    79: [0, .68333, 0, 0],
                    80: [0, .68333, 0, 0],
                    81: [.19444, .68333, 0, 0],
                    82: [0, .68333, 0, 0],
                    83: [0, .68333, 0, 0],
                    84: [0, .68333, 0, 0],
                    85: [0, .68333, 0, 0],
                    86: [0, .68333, .01389, 0],
                    87: [0, .68333, .01389, 0],
                    88: [0, .68333, 0, 0],
                    89: [0, .68333, .025, 0],
                    90: [0, .68333, 0, 0],
                    91: [.25, .75, 0, 0],
                    92: [.25, .75, 0, 0],
                    93: [.25, .75, 0, 0],
                    94: [0, .69444, 0, 0],
                    95: [.31, .12056, .02778, 0],
                    96: [0, .69444, 0, 0],
                    97: [0, .43056, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .43056, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .43056, 0, 0],
                    102: [0, .69444, .07778, 0],
                    103: [.19444, .43056, .01389, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .66786, 0, 0],
                    106: [.19444, .66786, 0, 0],
                    107: [0, .69444, 0, 0],
                    108: [0, .69444, 0, 0],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, 0],
                    112: [.19444, .43056, 0, 0],
                    113: [.19444, .43056, 0, 0],
                    114: [0, .43056, 0, 0],
                    115: [0, .43056, 0, 0],
                    116: [0, .61508, 0, 0],
                    117: [0, .43056, 0, 0],
                    118: [0, .43056, .01389, 0],
                    119: [0, .43056, .01389, 0],
                    120: [0, .43056, 0, 0],
                    121: [.19444, .43056, .01389, 0],
                    122: [0, .43056, 0, 0],
                    123: [.25, .75, 0, 0],
                    124: [.25, .75, 0, 0],
                    125: [.25, .75, 0, 0],
                    126: [.35, .31786, 0, 0],
                    160: [0, 0, 0, 0],
                    168: [0, .66786, 0, 0],
                    172: [0, .43056, 0, 0],
                    175: [0, .56778, 0, 0],
                    176: [0, .69444, 0, 0],
                    177: [.08333, .58333, 0, 0],
                    180: [0, .69444, 0, 0],
                    215: [.08333, .58333, 0, 0],
                    247: [.08333, .58333, 0, 0],
                    305: [0, .43056, 0, 0],
                    567: [.19444, .43056, 0, 0],
                    710: [0, .69444, 0, 0],
                    711: [0, .62847, 0, 0],
                    713: [0, .56778, 0, 0],
                    714: [0, .69444, 0, 0],
                    715: [0, .69444, 0, 0],
                    728: [0, .69444, 0, 0],
                    729: [0, .66786, 0, 0],
                    730: [0, .69444, 0, 0],
                    732: [0, .66786, 0, 0],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, 0, 0],
                    770: [0, .69444, 0, 0],
                    771: [0, .66786, 0, 0],
                    772: [0, .56778, 0, 0],
                    774: [0, .69444, 0, 0],
                    775: [0, .66786, 0, 0],
                    776: [0, .66786, 0, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, 0, 0],
                    780: [0, .62847, 0, 0],
                    824: [.19444, .69444, 0, 0],
                    915: [0, .68333, 0, 0],
                    916: [0, .68333, 0, 0],
                    920: [0, .68333, 0, 0],
                    923: [0, .68333, 0, 0],
                    926: [0, .68333, 0, 0],
                    928: [0, .68333, 0, 0],
                    931: [0, .68333, 0, 0],
                    933: [0, .68333, 0, 0],
                    934: [0, .68333, 0, 0],
                    936: [0, .68333, 0, 0],
                    937: [0, .68333, 0, 0],
                    8211: [0, .43056, .02778, 0],
                    8212: [0, .43056, .02778, 0],
                    8216: [0, .69444, 0, 0],
                    8217: [0, .69444, 0, 0],
                    8220: [0, .69444, 0, 0],
                    8221: [0, .69444, 0, 0],
                    8224: [.19444, .69444, 0, 0],
                    8225: [.19444, .69444, 0, 0],
                    8230: [0, .12, 0, 0],
                    8242: [0, .55556, 0, 0],
                    8407: [0, .71444, .15382, 0],
                    8463: [0, .68889, 0, 0],
                    8465: [0, .69444, 0, 0],
                    8467: [0, .69444, 0, .11111],
                    8472: [.19444, .43056, 0, .11111],
                    8476: [0, .69444, 0, 0],
                    8501: [0, .69444, 0, 0],
                    8592: [-.13313, .36687, 0, 0],
                    8593: [.19444, .69444, 0, 0],
                    8594: [-.13313, .36687, 0, 0],
                    8595: [.19444, .69444, 0, 0],
                    8596: [-.13313, .36687, 0, 0],
                    8597: [.25, .75, 0, 0],
                    8598: [.19444, .69444, 0, 0],
                    8599: [.19444, .69444, 0, 0],
                    8600: [.19444, .69444, 0, 0],
                    8601: [.19444, .69444, 0, 0],
                    8614: [.011, .511, 0, 0],
                    8617: [.011, .511, 0, 0],
                    8618: [.011, .511, 0, 0],
                    8636: [-.13313, .36687, 0, 0],
                    8637: [-.13313, .36687, 0, 0],
                    8640: [-.13313, .36687, 0, 0],
                    8641: [-.13313, .36687, 0, 0],
                    8652: [.011, .671, 0, 0],
                    8656: [-.13313, .36687, 0, 0],
                    8657: [.19444, .69444, 0, 0],
                    8658: [-.13313, .36687, 0, 0],
                    8659: [.19444, .69444, 0, 0],
                    8660: [-.13313, .36687, 0, 0],
                    8661: [.25, .75, 0, 0],
                    8704: [0, .69444, 0, 0],
                    8706: [0, .69444, .05556, .08334],
                    8707: [0, .69444, 0, 0],
                    8709: [.05556, .75, 0, 0],
                    8711: [0, .68333, 0, 0],
                    8712: [.0391, .5391, 0, 0],
                    8715: [.0391, .5391, 0, 0],
                    8722: [.08333, .58333, 0, 0],
                    8723: [.08333, .58333, 0, 0],
                    8725: [.25, .75, 0, 0],
                    8726: [.25, .75, 0, 0],
                    8727: [-.03472, .46528, 0, 0],
                    8728: [-.05555, .44445, 0, 0],
                    8729: [-.05555, .44445, 0, 0],
                    8730: [.2, .8, 0, 0],
                    8733: [0, .43056, 0, 0],
                    8734: [0, .43056, 0, 0],
                    8736: [0, .69224, 0, 0],
                    8739: [.25, .75, 0, 0],
                    8741: [.25, .75, 0, 0],
                    8743: [0, .55556, 0, 0],
                    8744: [0, .55556, 0, 0],
                    8745: [0, .55556, 0, 0],
                    8746: [0, .55556, 0, 0],
                    8747: [.19444, .69444, .11111, 0],
                    8764: [-.13313, .36687, 0, 0],
                    8768: [.19444, .69444, 0, 0],
                    8771: [-.03625, .46375, 0, 0],
                    8773: [-.022, .589, 0, 0],
                    8776: [-.01688, .48312, 0, 0],
                    8781: [-.03625, .46375, 0, 0],
                    8784: [-.133, .67, 0, 0],
                    8800: [.215, .716, 0, 0],
                    8801: [-.03625, .46375, 0, 0],
                    8804: [.13597, .63597, 0, 0],
                    8805: [.13597, .63597, 0, 0],
                    8810: [.0391, .5391, 0, 0],
                    8811: [.0391, .5391, 0, 0],
                    8826: [.0391, .5391, 0, 0],
                    8827: [.0391, .5391, 0, 0],
                    8834: [.0391, .5391, 0, 0],
                    8835: [.0391, .5391, 0, 0],
                    8838: [.13597, .63597, 0, 0],
                    8839: [.13597, .63597, 0, 0],
                    8846: [0, .55556, 0, 0],
                    8849: [.13597, .63597, 0, 0],
                    8850: [.13597, .63597, 0, 0],
                    8851: [0, .55556, 0, 0],
                    8852: [0, .55556, 0, 0],
                    8853: [.08333, .58333, 0, 0],
                    8854: [.08333, .58333, 0, 0],
                    8855: [.08333, .58333, 0, 0],
                    8856: [.08333, .58333, 0, 0],
                    8857: [.08333, .58333, 0, 0],
                    8866: [0, .69444, 0, 0],
                    8867: [0, .69444, 0, 0],
                    8868: [0, .69444, 0, 0],
                    8869: [0, .69444, 0, 0],
                    8872: [.249, .75, 0, 0],
                    8900: [-.05555, .44445, 0, 0],
                    8901: [-.05555, .44445, 0, 0],
                    8902: [-.03472, .46528, 0, 0],
                    8904: [.005, .505, 0, 0],
                    8942: [.03, .9, 0, 0],
                    8943: [-.19, .31, 0, 0],
                    8945: [-.1, .82, 0, 0],
                    8968: [.25, .75, 0, 0],
                    8969: [.25, .75, 0, 0],
                    8970: [.25, .75, 0, 0],
                    8971: [.25, .75, 0, 0],
                    8994: [-.14236, .35764, 0, 0],
                    8995: [-.14236, .35764, 0, 0],
                    9136: [.244, .744, 0, 0],
                    9137: [.244, .744, 0, 0],
                    9651: [.19444, .69444, 0, 0],
                    9657: [-.03472, .46528, 0, 0],
                    9661: [.19444, .69444, 0, 0],
                    9667: [-.03472, .46528, 0, 0],
                    9711: [.19444, .69444, 0, 0],
                    9824: [.12963, .69444, 0, 0],
                    9825: [.12963, .69444, 0, 0],
                    9826: [.12963, .69444, 0, 0],
                    9827: [.12963, .69444, 0, 0],
                    9837: [0, .75, 0, 0],
                    9838: [.19444, .69444, 0, 0],
                    9839: [.19444, .69444, 0, 0],
                    10216: [.25, .75, 0, 0],
                    10217: [.25, .75, 0, 0],
                    10222: [.244, .744, 0, 0],
                    10223: [.244, .744, 0, 0],
                    10229: [.011, .511, 0, 0],
                    10230: [.011, .511, 0, 0],
                    10231: [.011, .511, 0, 0],
                    10232: [.024, .525, 0, 0],
                    10233: [.024, .525, 0, 0],
                    10234: [.024, .525, 0, 0],
                    10236: [.011, .511, 0, 0],
                    10815: [0, .68333, 0, 0],
                    10927: [.13597, .63597, 0, 0],
                    10928: [.13597, .63597, 0, 0]
                },
                "Math-BoldItalic": {
                    47: [.19444, .69444, 0, 0],
                    65: [0, .68611, 0, 0],
                    66: [0, .68611, .04835, 0],
                    67: [0, .68611, .06979, 0],
                    68: [0, .68611, .03194, 0],
                    69: [0, .68611, .05451, 0],
                    70: [0, .68611, .15972, 0],
                    71: [0, .68611, 0, 0],
                    72: [0, .68611, .08229, 0],
                    73: [0, .68611, .07778, 0],
                    74: [0, .68611, .10069, 0],
                    75: [0, .68611, .06979, 0],
                    76: [0, .68611, 0, 0],
                    77: [0, .68611, .11424, 0],
                    78: [0, .68611, .11424, 0],
                    79: [0, .68611, .03194, 0],
                    80: [0, .68611, .15972, 0],
                    81: [.19444, .68611, 0, 0],
                    82: [0, .68611, .00421, 0],
                    83: [0, .68611, .05382, 0],
                    84: [0, .68611, .15972, 0],
                    85: [0, .68611, .11424, 0],
                    86: [0, .68611, .25555, 0],
                    87: [0, .68611, .15972, 0],
                    88: [0, .68611, .07778, 0],
                    89: [0, .68611, .25555, 0],
                    90: [0, .68611, .06979, 0],
                    97: [0, .44444, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .44444, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .44444, 0, 0],
                    102: [.19444, .69444, .11042, 0],
                    103: [.19444, .44444, .03704, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .69326, 0, 0],
                    106: [.19444, .69326, .0622, 0],
                    107: [0, .69444, .01852, 0],
                    108: [0, .69444, .0088, 0],
                    109: [0, .44444, 0, 0],
                    110: [0, .44444, 0, 0],
                    111: [0, .44444, 0, 0],
                    112: [.19444, .44444, 0, 0],
                    113: [.19444, .44444, .03704, 0],
                    114: [0, .44444, .03194, 0],
                    115: [0, .44444, 0, 0],
                    116: [0, .63492, 0, 0],
                    117: [0, .44444, 0, 0],
                    118: [0, .44444, .03704, 0],
                    119: [0, .44444, .02778, 0],
                    120: [0, .44444, 0, 0],
                    121: [.19444, .44444, .03704, 0],
                    122: [0, .44444, .04213, 0],
                    915: [0, .68611, .15972, 0],
                    916: [0, .68611, 0, 0],
                    920: [0, .68611, .03194, 0],
                    923: [0, .68611, 0, 0],
                    926: [0, .68611, .07458, 0],
                    928: [0, .68611, .08229, 0],
                    931: [0, .68611, .05451, 0],
                    933: [0, .68611, .15972, 0],
                    934: [0, .68611, 0, 0],
                    936: [0, .68611, .11653, 0],
                    937: [0, .68611, .04835, 0],
                    945: [0, .44444, 0, 0],
                    946: [.19444, .69444, .03403, 0],
                    947: [.19444, .44444, .06389, 0],
                    948: [0, .69444, .03819, 0],
                    949: [0, .44444, 0, 0],
                    950: [.19444, .69444, .06215, 0],
                    951: [.19444, .44444, .03704, 0],
                    952: [0, .69444, .03194, 0],
                    953: [0, .44444, 0, 0],
                    954: [0, .44444, 0, 0],
                    955: [0, .69444, 0, 0],
                    956: [.19444, .44444, 0, 0],
                    957: [0, .44444, .06898, 0],
                    958: [.19444, .69444, .03021, 0],
                    959: [0, .44444, 0, 0],
                    960: [0, .44444, .03704, 0],
                    961: [.19444, .44444, 0, 0],
                    962: [.09722, .44444, .07917, 0],
                    963: [0, .44444, .03704, 0],
                    964: [0, .44444, .13472, 0],
                    965: [0, .44444, .03704, 0],
                    966: [.19444, .44444, 0, 0],
                    967: [.19444, .44444, 0, 0],
                    968: [.19444, .69444, .03704, 0],
                    969: [0, .44444, .03704, 0],
                    977: [0, .69444, 0, 0],
                    981: [.19444, .69444, 0, 0],
                    982: [0, .44444, .03194, 0],
                    1009: [.19444, .44444, 0, 0],
                    1013: [0, .44444, 0, 0]
                },
                "Math-Italic": {
                    47: [.19444, .69444, 0, 0],
                    65: [0, .68333, 0, .13889],
                    66: [0, .68333, .05017, .08334],
                    67: [0, .68333, .07153, .08334],
                    68: [0, .68333, .02778, .05556],
                    69: [0, .68333, .05764, .08334],
                    70: [0, .68333, .13889, .08334],
                    71: [0, .68333, 0, .08334],
                    72: [0, .68333, .08125, .05556],
                    73: [0, .68333, .07847, .11111],
                    74: [0, .68333, .09618, .16667],
                    75: [0, .68333, .07153, .05556],
                    76: [0, .68333, 0, .02778],
                    77: [0, .68333, .10903, .08334],
                    78: [0, .68333, .10903, .08334],
                    79: [0, .68333, .02778, .08334],
                    80: [0, .68333, .13889, .08334],
                    81: [.19444, .68333, 0, .08334],
                    82: [0, .68333, .00773, .08334],
                    83: [0, .68333, .05764, .08334],
                    84: [0, .68333, .13889, .08334],
                    85: [0, .68333, .10903, .02778],
                    86: [0, .68333, .22222, 0],
                    87: [0, .68333, .13889, 0],
                    88: [0, .68333, .07847, .08334],
                    89: [0, .68333, .22222, 0],
                    90: [0, .68333, .07153, .08334],
                    97: [0, .43056, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .43056, 0, .05556],
                    100: [0, .69444, 0, .16667],
                    101: [0, .43056, 0, .05556],
                    102: [.19444, .69444, .10764, .16667],
                    103: [.19444, .43056, .03588, .02778],
                    104: [0, .69444, 0, 0],
                    105: [0, .65952, 0, 0],
                    106: [.19444, .65952, .05724, 0],
                    107: [0, .69444, .03148, 0],
                    108: [0, .69444, .01968, .08334],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, .05556],
                    112: [.19444, .43056, 0, .08334],
                    113: [.19444, .43056, .03588, .08334],
                    114: [0, .43056, .02778, .05556],
                    115: [0, .43056, 0, .05556],
                    116: [0, .61508, 0, .08334],
                    117: [0, .43056, 0, .02778],
                    118: [0, .43056, .03588, .02778],
                    119: [0, .43056, .02691, .08334],
                    120: [0, .43056, 0, .02778],
                    121: [.19444, .43056, .03588, .05556],
                    122: [0, .43056, .04398, .05556],
                    915: [0, .68333, .13889, .08334],
                    916: [0, .68333, 0, .16667],
                    920: [0, .68333, .02778, .08334],
                    923: [0, .68333, 0, .16667],
                    926: [0, .68333, .07569, .08334],
                    928: [0, .68333, .08125, .05556],
                    931: [0, .68333, .05764, .08334],
                    933: [0, .68333, .13889, .05556],
                    934: [0, .68333, 0, .08334],
                    936: [0, .68333, .11, .05556],
                    937: [0, .68333, .05017, .08334],
                    945: [0, .43056, .0037, .02778],
                    946: [.19444, .69444, .05278, .08334],
                    947: [.19444, .43056, .05556, 0],
                    948: [0, .69444, .03785, .05556],
                    949: [0, .43056, 0, .08334],
                    950: [.19444, .69444, .07378, .08334],
                    951: [.19444, .43056, .03588, .05556],
                    952: [0, .69444, .02778, .08334],
                    953: [0, .43056, 0, .05556],
                    954: [0, .43056, 0, 0],
                    955: [0, .69444, 0, 0],
                    956: [.19444, .43056, 0, .02778],
                    957: [0, .43056, .06366, .02778],
                    958: [.19444, .69444, .04601, .11111],
                    959: [0, .43056, 0, .05556],
                    960: [0, .43056, .03588, 0],
                    961: [.19444, .43056, 0, .08334],
                    962: [.09722, .43056, .07986, .08334],
                    963: [0, .43056, .03588, 0],
                    964: [0, .43056, .1132, .02778],
                    965: [0, .43056, .03588, .02778],
                    966: [.19444, .43056, 0, .08334],
                    967: [.19444, .43056, 0, .05556],
                    968: [.19444, .69444, .03588, .11111],
                    969: [0, .43056, .03588, 0],
                    977: [0, .69444, 0, .08334],
                    981: [.19444, .69444, 0, .08334],
                    982: [0, .43056, .02778, 0],
                    1009: [.19444, .43056, 0, .08334],
                    1013: [0, .43056, 0, .05556]
                },
                "Math-Regular": {
                    65: [0, .68333, 0, .13889],
                    66: [0, .68333, .05017, .08334],
                    67: [0, .68333, .07153, .08334],
                    68: [0, .68333, .02778, .05556],
                    69: [0, .68333, .05764, .08334],
                    70: [0, .68333, .13889, .08334],
                    71: [0, .68333, 0, .08334],
                    72: [0, .68333, .08125, .05556],
                    73: [0, .68333, .07847, .11111],
                    74: [0, .68333, .09618, .16667],
                    75: [0, .68333, .07153, .05556],
                    76: [0, .68333, 0, .02778],
                    77: [0, .68333, .10903, .08334],
                    78: [0, .68333, .10903, .08334],
                    79: [0, .68333, .02778, .08334],
                    80: [0, .68333, .13889, .08334],
                    81: [.19444, .68333, 0, .08334],
                    82: [0, .68333, .00773, .08334],
                    83: [0, .68333, .05764, .08334],
                    84: [0, .68333, .13889, .08334],
                    85: [0, .68333, .10903, .02778],
                    86: [0, .68333, .22222, 0],
                    87: [0, .68333, .13889, 0],
                    88: [0, .68333, .07847, .08334],
                    89: [0, .68333, .22222, 0],
                    90: [0, .68333, .07153, .08334],
                    97: [0, .43056, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .43056, 0, .05556],
                    100: [0, .69444, 0, .16667],
                    101: [0, .43056, 0, .05556],
                    102: [.19444, .69444, .10764, .16667],
                    103: [.19444, .43056, .03588, .02778],
                    104: [0, .69444, 0, 0],
                    105: [0, .65952, 0, 0],
                    106: [.19444, .65952, .05724, 0],
                    107: [0, .69444, .03148, 0],
                    108: [0, .69444, .01968, .08334],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, .05556],
                    112: [.19444, .43056, 0, .08334],
                    113: [.19444, .43056, .03588, .08334],
                    114: [0, .43056, .02778, .05556],
                    115: [0, .43056, 0, .05556],
                    116: [0, .61508, 0, .08334],
                    117: [0, .43056, 0, .02778],
                    118: [0, .43056, .03588, .02778],
                    119: [0, .43056, .02691, .08334],
                    120: [0, .43056, 0, .02778],
                    121: [.19444, .43056, .03588, .05556],
                    122: [0, .43056, .04398, .05556],
                    915: [0, .68333, .13889, .08334],
                    916: [0, .68333, 0, .16667],
                    920: [0, .68333, .02778, .08334],
                    923: [0, .68333, 0, .16667],
                    926: [0, .68333, .07569, .08334],
                    928: [0, .68333, .08125, .05556],
                    931: [0, .68333, .05764, .08334],
                    933: [0, .68333, .13889, .05556],
                    934: [0, .68333, 0, .08334],
                    936: [0, .68333, .11, .05556],
                    937: [0, .68333, .05017, .08334],
                    945: [0, .43056, .0037, .02778],
                    946: [.19444, .69444, .05278, .08334],
                    947: [.19444, .43056, .05556, 0],
                    948: [0, .69444, .03785, .05556],
                    949: [0, .43056, 0, .08334],
                    950: [.19444, .69444, .07378, .08334],
                    951: [.19444, .43056, .03588, .05556],
                    952: [0, .69444, .02778, .08334],
                    953: [0, .43056, 0, .05556],
                    954: [0, .43056, 0, 0],
                    955: [0, .69444, 0, 0],
                    956: [.19444, .43056, 0, .02778],
                    957: [0, .43056, .06366, .02778],
                    958: [.19444, .69444, .04601, .11111],
                    959: [0, .43056, 0, .05556],
                    960: [0, .43056, .03588, 0],
                    961: [.19444, .43056, 0, .08334],
                    962: [.09722, .43056, .07986, .08334],
                    963: [0, .43056, .03588, 0],
                    964: [0, .43056, .1132, .02778],
                    965: [0, .43056, .03588, .02778],
                    966: [.19444, .43056, 0, .08334],
                    967: [.19444, .43056, 0, .05556],
                    968: [.19444, .69444, .03588, .11111],
                    969: [0, .43056, .03588, 0],
                    977: [0, .69444, 0, .08334],
                    981: [.19444, .69444, 0, .08334],
                    982: [0, .43056, .02778, 0],
                    1009: [.19444, .43056, 0, .08334],
                    1013: [0, .43056, 0, .05556]
                },
                "SansSerif-Regular": {
                    33: [0, .69444, 0, 0],
                    34: [0, .69444, 0, 0],
                    35: [.19444, .69444, 0, 0],
                    36: [.05556, .75, 0, 0],
                    37: [.05556, .75, 0, 0],
                    38: [0, .69444, 0, 0],
                    39: [0, .69444, 0, 0],
                    40: [.25, .75, 0, 0],
                    41: [.25, .75, 0, 0],
                    42: [0, .75, 0, 0],
                    43: [.08333, .58333, 0, 0],
                    44: [.125, .08333, 0, 0],
                    45: [0, .44444, 0, 0],
                    46: [0, .08333, 0, 0],
                    47: [.25, .75, 0, 0],
                    48: [0, .65556, 0, 0],
                    49: [0, .65556, 0, 0],
                    50: [0, .65556, 0, 0],
                    51: [0, .65556, 0, 0],
                    52: [0, .65556, 0, 0],
                    53: [0, .65556, 0, 0],
                    54: [0, .65556, 0, 0],
                    55: [0, .65556, 0, 0],
                    56: [0, .65556, 0, 0],
                    57: [0, .65556, 0, 0],
                    58: [0, .44444, 0, 0],
                    59: [.125, .44444, 0, 0],
                    61: [-.13, .37, 0, 0],
                    63: [0, .69444, 0, 0],
                    64: [0, .69444, 0, 0],
                    65: [0, .69444, 0, 0],
                    66: [0, .69444, 0, 0],
                    67: [0, .69444, 0, 0],
                    68: [0, .69444, 0, 0],
                    69: [0, .69444, 0, 0],
                    70: [0, .69444, 0, 0],
                    71: [0, .69444, 0, 0],
                    72: [0, .69444, 0, 0],
                    73: [0, .69444, 0, 0],
                    74: [0, .69444, 0, 0],
                    75: [0, .69444, 0, 0],
                    76: [0, .69444, 0, 0],
                    77: [0, .69444, 0, 0],
                    78: [0, .69444, 0, 0],
                    79: [0, .69444, 0, 0],
                    80: [0, .69444, 0, 0],
                    81: [.125, .69444, 0, 0],
                    82: [0, .69444, 0, 0],
                    83: [0, .69444, 0, 0],
                    84: [0, .69444, 0, 0],
                    85: [0, .69444, 0, 0],
                    86: [0, .69444, .01389, 0],
                    87: [0, .69444, .01389, 0],
                    88: [0, .69444, 0, 0],
                    89: [0, .69444, .025, 0],
                    90: [0, .69444, 0, 0],
                    91: [.25, .75, 0, 0],
                    93: [.25, .75, 0, 0],
                    94: [0, .69444, 0, 0],
                    95: [.35, .09444, .02778, 0],
                    97: [0, .44444, 0, 0],
                    98: [0, .69444, 0, 0],
                    99: [0, .44444, 0, 0],
                    100: [0, .69444, 0, 0],
                    101: [0, .44444, 0, 0],
                    102: [0, .69444, .06944, 0],
                    103: [.19444, .44444, .01389, 0],
                    104: [0, .69444, 0, 0],
                    105: [0, .67937, 0, 0],
                    106: [.19444, .67937, 0, 0],
                    107: [0, .69444, 0, 0],
                    108: [0, .69444, 0, 0],
                    109: [0, .44444, 0, 0],
                    110: [0, .44444, 0, 0],
                    111: [0, .44444, 0, 0],
                    112: [.19444, .44444, 0, 0],
                    113: [.19444, .44444, 0, 0],
                    114: [0, .44444, .01389, 0],
                    115: [0, .44444, 0, 0],
                    116: [0, .57143, 0, 0],
                    117: [0, .44444, 0, 0],
                    118: [0, .44444, .01389, 0],
                    119: [0, .44444, .01389, 0],
                    120: [0, .44444, 0, 0],
                    121: [.19444, .44444, .01389, 0],
                    122: [0, .44444, 0, 0],
                    126: [.35, .32659, 0, 0],
                    305: [0, .44444, 0, 0],
                    567: [.19444, .44444, 0, 0],
                    768: [0, .69444, 0, 0],
                    769: [0, .69444, 0, 0],
                    770: [0, .69444, 0, 0],
                    771: [0, .67659, 0, 0],
                    772: [0, .60889, 0, 0],
                    774: [0, .69444, 0, 0],
                    775: [0, .67937, 0, 0],
                    776: [0, .67937, 0, 0],
                    778: [0, .69444, 0, 0],
                    779: [0, .69444, 0, 0],
                    780: [0, .63194, 0, 0],
                    915: [0, .69444, 0, 0],
                    916: [0, .69444, 0, 0],
                    920: [0, .69444, 0, 0],
                    923: [0, .69444, 0, 0],
                    926: [0, .69444, 0, 0],
                    928: [0, .69444, 0, 0],
                    931: [0, .69444, 0, 0],
                    933: [0, .69444, 0, 0],
                    934: [0, .69444, 0, 0],
                    936: [0, .69444, 0, 0],
                    937: [0, .69444, 0, 0],
                    8211: [0, .44444, .02778, 0],
                    8212: [0, .44444, .02778, 0],
                    8216: [0, .69444, 0, 0],
                    8217: [0, .69444, 0, 0],
                    8220: [0, .69444, 0, 0],
                    8221: [0, .69444, 0, 0]
                },
                "Script-Regular": {
                    65: [0, .7, .22925, 0],
                    66: [0, .7, .04087, 0],
                    67: [0, .7, .1689, 0],
                    68: [0, .7, .09371, 0],
                    69: [0, .7, .18583, 0],
                    70: [0, .7, .13634, 0],
                    71: [0, .7, .17322, 0],
                    72: [0, .7, .29694, 0],
                    73: [0, .7, .19189, 0],
                    74: [.27778, .7, .19189, 0],
                    75: [0, .7, .31259, 0],
                    76: [0, .7, .19189, 0],
                    77: [0, .7, .15981, 0],
                    78: [0, .7, .3525, 0],
                    79: [0, .7, .08078, 0],
                    80: [0, .7, .08078, 0],
                    81: [0, .7, .03305, 0],
                    82: [0, .7, .06259, 0],
                    83: [0, .7, .19189, 0],
                    84: [0, .7, .29087, 0],
                    85: [0, .7, .25815, 0],
                    86: [0, .7, .27523, 0],
                    87: [0, .7, .27523, 0],
                    88: [0, .7, .26006, 0],
                    89: [0, .7, .2939, 0],
                    90: [0, .7, .24037, 0]
                },
                "Size1-Regular": {
                    40: [.35001, .85, 0, 0],
                    41: [.35001, .85, 0, 0],
                    47: [.35001, .85, 0, 0],
                    91: [.35001, .85, 0, 0],
                    92: [.35001, .85, 0, 0],
                    93: [.35001, .85, 0, 0],
                    123: [.35001, .85, 0, 0],
                    125: [.35001, .85, 0, 0],
                    710: [0, .72222, 0, 0],
                    732: [0, .72222, 0, 0],
                    770: [0, .72222, 0, 0],
                    771: [0, .72222, 0, 0],
                    8214: [-99e-5, .601, 0, 0],
                    8593: [1e-5, .6, 0, 0],
                    8595: [1e-5, .6, 0, 0],
                    8657: [1e-5, .6, 0, 0],
                    8659: [1e-5, .6, 0, 0],
                    8719: [.25001, .75, 0, 0],
                    8720: [.25001, .75, 0, 0],
                    8721: [.25001, .75, 0, 0],
                    8730: [.35001, .85, 0, 0],
                    8739: [-.00599, .606, 0, 0],
                    8741: [-.00599, .606, 0, 0],
                    8747: [.30612, .805, .19445, 0],
                    8748: [.306, .805, .19445, 0],
                    8749: [.306, .805, .19445, 0],
                    8750: [.30612, .805, .19445, 0],
                    8896: [.25001, .75, 0, 0],
                    8897: [.25001, .75, 0, 0],
                    8898: [.25001, .75, 0, 0],
                    8899: [.25001, .75, 0, 0],
                    8968: [.35001, .85, 0, 0],
                    8969: [.35001, .85, 0, 0],
                    8970: [.35001, .85, 0, 0],
                    8971: [.35001, .85, 0, 0],
                    9168: [-99e-5, .601, 0, 0],
                    10216: [.35001, .85, 0, 0],
                    10217: [.35001, .85, 0, 0],
                    10752: [.25001, .75, 0, 0],
                    10753: [.25001, .75, 0, 0],
                    10754: [.25001, .75, 0, 0],
                    10756: [.25001, .75, 0, 0],
                    10758: [.25001, .75, 0, 0]
                },
                "Size2-Regular": {
                    40: [.65002, 1.15, 0, 0],
                    41: [.65002, 1.15, 0, 0],
                    47: [.65002, 1.15, 0, 0],
                    91: [.65002, 1.15, 0, 0],
                    92: [.65002, 1.15, 0, 0],
                    93: [.65002, 1.15, 0, 0],
                    123: [.65002, 1.15, 0, 0],
                    125: [.65002, 1.15, 0, 0],
                    710: [0, .75, 0, 0],
                    732: [0, .75, 0, 0],
                    770: [0, .75, 0, 0],
                    771: [0, .75, 0, 0],
                    8719: [.55001, 1.05, 0, 0],
                    8720: [.55001, 1.05, 0, 0],
                    8721: [.55001, 1.05, 0, 0],
                    8730: [.65002, 1.15, 0, 0],
                    8747: [.86225, 1.36, .44445, 0],
                    8748: [.862, 1.36, .44445, 0],
                    8749: [.862, 1.36, .44445, 0],
                    8750: [.86225, 1.36, .44445, 0],
                    8896: [.55001, 1.05, 0, 0],
                    8897: [.55001, 1.05, 0, 0],
                    8898: [.55001, 1.05, 0, 0],
                    8899: [.55001, 1.05, 0, 0],
                    8968: [.65002, 1.15, 0, 0],
                    8969: [.65002, 1.15, 0, 0],
                    8970: [.65002, 1.15, 0, 0],
                    8971: [.65002, 1.15, 0, 0],
                    10216: [.65002, 1.15, 0, 0],
                    10217: [.65002, 1.15, 0, 0],
                    10752: [.55001, 1.05, 0, 0],
                    10753: [.55001, 1.05, 0, 0],
                    10754: [.55001, 1.05, 0, 0],
                    10756: [.55001, 1.05, 0, 0],
                    10758: [.55001, 1.05, 0, 0]
                },
                "Size3-Regular": {
                    40: [.95003, 1.45, 0, 0],
                    41: [.95003, 1.45, 0, 0],
                    47: [.95003, 1.45, 0, 0],
                    91: [.95003, 1.45, 0, 0],
                    92: [.95003, 1.45, 0, 0],
                    93: [.95003, 1.45, 0, 0],
                    123: [.95003, 1.45, 0, 0],
                    125: [.95003, 1.45, 0, 0],
                    710: [0, .75, 0, 0],
                    732: [0, .75, 0, 0],
                    770: [0, .75, 0, 0],
                    771: [0, .75, 0, 0],
                    8730: [.95003, 1.45, 0, 0],
                    8968: [.95003, 1.45, 0, 0],
                    8969: [.95003, 1.45, 0, 0],
                    8970: [.95003, 1.45, 0, 0],
                    8971: [.95003, 1.45, 0, 0],
                    10216: [.95003, 1.45, 0, 0],
                    10217: [.95003, 1.45, 0, 0]
                },
                "Size4-Regular": {
                    40: [1.25003, 1.75, 0, 0],
                    41: [1.25003, 1.75, 0, 0],
                    47: [1.25003, 1.75, 0, 0],
                    91: [1.25003, 1.75, 0, 0],
                    92: [1.25003, 1.75, 0, 0],
                    93: [1.25003, 1.75, 0, 0],
                    123: [1.25003, 1.75, 0, 0],
                    125: [1.25003, 1.75, 0, 0],
                    710: [0, .825, 0, 0],
                    732: [0, .825, 0, 0],
                    770: [0, .825, 0, 0],
                    771: [0, .825, 0, 0],
                    8730: [1.25003, 1.75, 0, 0],
                    8968: [1.25003, 1.75, 0, 0],
                    8969: [1.25003, 1.75, 0, 0],
                    8970: [1.25003, 1.75, 0, 0],
                    8971: [1.25003, 1.75, 0, 0],
                    9115: [.64502, 1.155, 0, 0],
                    9116: [1e-5, .6, 0, 0],
                    9117: [.64502, 1.155, 0, 0],
                    9118: [.64502, 1.155, 0, 0],
                    9119: [1e-5, .6, 0, 0],
                    9120: [.64502, 1.155, 0, 0],
                    9121: [.64502, 1.155, 0, 0],
                    9122: [-99e-5, .601, 0, 0],
                    9123: [.64502, 1.155, 0, 0],
                    9124: [.64502, 1.155, 0, 0],
                    9125: [-99e-5, .601, 0, 0],
                    9126: [.64502, 1.155, 0, 0],
                    9127: [1e-5, .9, 0, 0],
                    9128: [.65002, 1.15, 0, 0],
                    9129: [.90001, 0, 0, 0],
                    9130: [0, .3, 0, 0],
                    9131: [1e-5, .9, 0, 0],
                    9132: [.65002, 1.15, 0, 0],
                    9133: [.90001, 0, 0, 0],
                    9143: [.88502, .915, 0, 0],
                    10216: [1.25003, 1.75, 0, 0],
                    10217: [1.25003, 1.75, 0, 0],
                    57344: [-.00499, .605, 0, 0],
                    57345: [-.00499, .605, 0, 0],
                    57680: [0, .12, 0, 0],
                    57681: [0, .12, 0, 0],
                    57682: [0, .12, 0, 0],
                    57683: [0, .12, 0, 0]
                },
                "Typewriter-Regular": {
                    33: [0, .61111, 0, 0],
                    34: [0, .61111, 0, 0],
                    35: [0, .61111, 0, 0],
                    36: [.08333, .69444, 0, 0],
                    37: [.08333, .69444, 0, 0],
                    38: [0, .61111, 0, 0],
                    39: [0, .61111, 0, 0],
                    40: [.08333, .69444, 0, 0],
                    41: [.08333, .69444, 0, 0],
                    42: [0, .52083, 0, 0],
                    43: [-.08056, .53055, 0, 0],
                    44: [.13889, .125, 0, 0],
                    45: [-.08056, .53055, 0, 0],
                    46: [0, .125, 0, 0],
                    47: [.08333, .69444, 0, 0],
                    48: [0, .61111, 0, 0],
                    49: [0, .61111, 0, 0],
                    50: [0, .61111, 0, 0],
                    51: [0, .61111, 0, 0],
                    52: [0, .61111, 0, 0],
                    53: [0, .61111, 0, 0],
                    54: [0, .61111, 0, 0],
                    55: [0, .61111, 0, 0],
                    56: [0, .61111, 0, 0],
                    57: [0, .61111, 0, 0],
                    58: [0, .43056, 0, 0],
                    59: [.13889, .43056, 0, 0],
                    60: [-.05556, .55556, 0, 0],
                    61: [-.19549, .41562, 0, 0],
                    62: [-.05556, .55556, 0, 0],
                    63: [0, .61111, 0, 0],
                    64: [0, .61111, 0, 0],
                    65: [0, .61111, 0, 0],
                    66: [0, .61111, 0, 0],
                    67: [0, .61111, 0, 0],
                    68: [0, .61111, 0, 0],
                    69: [0, .61111, 0, 0],
                    70: [0, .61111, 0, 0],
                    71: [0, .61111, 0, 0],
                    72: [0, .61111, 0, 0],
                    73: [0, .61111, 0, 0],
                    74: [0, .61111, 0, 0],
                    75: [0, .61111, 0, 0],
                    76: [0, .61111, 0, 0],
                    77: [0, .61111, 0, 0],
                    78: [0, .61111, 0, 0],
                    79: [0, .61111, 0, 0],
                    80: [0, .61111, 0, 0],
                    81: [.13889, .61111, 0, 0],
                    82: [0, .61111, 0, 0],
                    83: [0, .61111, 0, 0],
                    84: [0, .61111, 0, 0],
                    85: [0, .61111, 0, 0],
                    86: [0, .61111, 0, 0],
                    87: [0, .61111, 0, 0],
                    88: [0, .61111, 0, 0],
                    89: [0, .61111, 0, 0],
                    90: [0, .61111, 0, 0],
                    91: [.08333, .69444, 0, 0],
                    92: [.08333, .69444, 0, 0],
                    93: [.08333, .69444, 0, 0],
                    94: [0, .61111, 0, 0],
                    95: [.09514, 0, 0, 0],
                    96: [0, .61111, 0, 0],
                    97: [0, .43056, 0, 0],
                    98: [0, .61111, 0, 0],
                    99: [0, .43056, 0, 0],
                    100: [0, .61111, 0, 0],
                    101: [0, .43056, 0, 0],
                    102: [0, .61111, 0, 0],
                    103: [.22222, .43056, 0, 0],
                    104: [0, .61111, 0, 0],
                    105: [0, .61111, 0, 0],
                    106: [.22222, .61111, 0, 0],
                    107: [0, .61111, 0, 0],
                    108: [0, .61111, 0, 0],
                    109: [0, .43056, 0, 0],
                    110: [0, .43056, 0, 0],
                    111: [0, .43056, 0, 0],
                    112: [.22222, .43056, 0, 0],
                    113: [.22222, .43056, 0, 0],
                    114: [0, .43056, 0, 0],
                    115: [0, .43056, 0, 0],
                    116: [0, .55358, 0, 0],
                    117: [0, .43056, 0, 0],
                    118: [0, .43056, 0, 0],
                    119: [0, .43056, 0, 0],
                    120: [0, .43056, 0, 0],
                    121: [.22222, .43056, 0, 0],
                    122: [0, .43056, 0, 0],
                    123: [.08333, .69444, 0, 0],
                    124: [.08333, .69444, 0, 0],
                    125: [.08333, .69444, 0, 0],
                    126: [0, .61111, 0, 0],
                    127: [0, .61111, 0, 0],
                    305: [0, .43056, 0, 0],
                    567: [.22222, .43056, 0, 0],
                    768: [0, .61111, 0, 0],
                    769: [0, .61111, 0, 0],
                    770: [0, .61111, 0, 0],
                    771: [0, .61111, 0, 0],
                    772: [0, .56555, 0, 0],
                    774: [0, .61111, 0, 0],
                    776: [0, .61111, 0, 0],
                    778: [0, .61111, 0, 0],
                    780: [0, .56597, 0, 0],
                    915: [0, .61111, 0, 0],
                    916: [0, .61111, 0, 0],
                    920: [0, .61111, 0, 0],
                    923: [0, .61111, 0, 0],
                    926: [0, .61111, 0, 0],
                    928: [0, .61111, 0, 0],
                    931: [0, .61111, 0, 0],
                    933: [0, .61111, 0, 0],
                    934: [0, .61111, 0, 0],
                    936: [0, .61111, 0, 0],
                    937: [0, .61111, 0, 0],
                    2018: [0, .61111, 0, 0],
                    2019: [0, .61111, 0, 0],
                    8242: [0, .61111, 0, 0]
                }
            }
        }, {}],
        19: [function(e, t) {
            function r(e, r, n) {
                "string" == typeof e && (e = [e]), "number" == typeof r && (r = {
                    numArgs: r
                });
                for (var a = {
                        numArgs: r.numArgs,
                        argTypes: r.argTypes,
                        greediness: void 0 === r.greediness ? 1 : r.greediness,
                        allowedInText: !!r.allowedInText,
                        numOptionalArgs: r.numOptionalArgs || 0,
                        infix: !!r.infix,
                        handler: n
                    }, i = 0; i < e.length; ++i) t.exports[e[i]] = a
            }
            var n = e("./utils"),
                a = e("./ParseError"),
                i = e("./parseData"),
                s = i.ParseNode,
                o = function(e) {
                    return "ordgroup" === e.type ? e.value : [e]
                };
            r("\\sqrt", {
                numArgs: 1,
                numOptionalArgs: 1
            }, function(e, t) {
                var r = t[0],
                    n = t[1];
                return {
                    type: "sqrt",
                    body: n,
                    index: r
                }
            });
            var l = {
                "\\text": void 0,
                "\\textrm": "mathrm",
                "\\textsf": "mathsf",
                "\\texttt": "mathtt",
                "\\textnormal": "mathrm",
                "\\textbf": "mathbf",
                "\\textit": "textit"
            };
            r(["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"], {
                numArgs: 1,
                argTypes: ["text"],
                greediness: 2,
                allowedInText: !0
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "text",
                    body: o(r),
                    style: l[e.funcName]
                }
            }), r("\\color", {
                numArgs: 2,
                allowedInText: !0,
                greediness: 3,
                argTypes: ["color", "original"]
            }, function(e, t) {
                var r = t[0],
                    n = t[1];
                return {
                    type: "color",
                    color: r.value,
                    value: o(n)
                }
            }), r("\\overline", {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "overline",
                    body: r
                }
            }), r("\\underline", {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "underline",
                    body: r
                }
            }), r("\\rule", {
                numArgs: 2,
                numOptionalArgs: 1,
                argTypes: ["size", "size", "size"]
            }, function(e, t) {
                var r = t[0],
                    n = t[1],
                    a = t[2];
                return {
                    type: "rule",
                    shift: r && r.value,
                    width: n.value,
                    height: a.value
                }
            }), r(["\\kern", "\\mkern"], {
                numArgs: 1,
                argTypes: ["size"]
            }, function(e, t) {
                return {
                    type: "kern",
                    dimension: t[0].value
                }
            }), r("\\KaTeX", {
                numArgs: 0
            }, function() {
                return {
                    type: "katex"
                }
            }), r("\\phantom", {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "phantom",
                    value: o(r)
                }
            }), r(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "mclass",
                    mclass: "m" + e.funcName.substr(5),
                    value: o(r)
                }
            }), r("\\stackrel", {
                numArgs: 2
            }, function(e, t) {
                var r = t[0],
                    n = t[1],
                    a = new s("op", {
                        type: "op",
                        limits: !0,
                        alwaysHandleSupSub: !0,
                        symbol: !1,
                        value: o(n)
                    }, n.mode),
                    i = new s("supsub", {
                        base: a,
                        sup: r,
                        sub: null
                    }, r.mode);
                return {
                    type: "mclass",
                    mclass: "mrel",
                    value: [i]
                }
            }), r("\\bmod", {
                numArgs: 0
            }, function() {
                return {
                    type: "mod",
                    modType: "bmod",
                    value: null
                }
            }), r(["\\pod", "\\pmod", "\\mod"], {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "mod",
                    modType: e.funcName.substr(1),
                    value: o(r)
                }
            });
            var u = {
                    "\\bigl": {
                        mclass: "mopen",
                        size: 1
                    },
                    "\\Bigl": {
                        mclass: "mopen",
                        size: 2
                    },
                    "\\biggl": {
                        mclass: "mopen",
                        size: 3
                    },
                    "\\Biggl": {
                        mclass: "mopen",
                        size: 4
                    },
                    "\\bigr": {
                        mclass: "mclose",
                        size: 1
                    },
                    "\\Bigr": {
                        mclass: "mclose",
                        size: 2
                    },
                    "\\biggr": {
                        mclass: "mclose",
                        size: 3
                    },
                    "\\Biggr": {
                        mclass: "mclose",
                        size: 4
                    },
                    "\\bigm": {
                        mclass: "mrel",
                        size: 1
                    },
                    "\\Bigm": {
                        mclass: "mrel",
                        size: 2
                    },
                    "\\biggm": {
                        mclass: "mrel",
                        size: 3
                    },
                    "\\Biggm": {
                        mclass: "mrel",
                        size: 4
                    },
                    "\\big": {
                        mclass: "mord",
                        size: 1
                    },
                    "\\Big": {
                        mclass: "mord",
                        size: 2
                    },
                    "\\bigg": {
                        mclass: "mord",
                        size: 3
                    },
                    "\\Bigg": {
                        mclass: "mord",
                        size: 4
                    }
                },
                c = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\\rangle", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."],
                d = {
                    "\\Bbb": "\\mathbb",
                    "\\bold": "\\mathbf",
                    "\\frak": "\\mathfrak"
                };
            r(["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"], {
                numArgs: 1,
                allowedInText: !0,
                greediness: 3
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "color",
                    color: "katex-" + e.funcName.slice(1),
                    value: o(r)
                }
            }), r(["\\arcsin", "\\arccos", "\\arctan", "\\arg", "\\cos", "\\cosh", "\\cot", "\\coth", "\\csc", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\tan", "\\tanh"], {
                numArgs: 0
            }, function(e) {
                return {
                    type: "op",
                    limits: !1,
                    symbol: !1,
                    body: e.funcName
                }
            }), r(["\\det", "\\gcd", "\\inf", "\\lim", "\\liminf", "\\limsup", "\\max", "\\min", "\\Pr", "\\sup"], {
                numArgs: 0
            }, function(e) {
                return {
                    type: "op",
                    limits: !0,
                    symbol: !1,
                    body: e.funcName
                }
            }), r(["\\int", "\\iint", "\\iiint", "\\oint"], {
                numArgs: 0
            }, function(e) {
                return {
                    type: "op",
                    limits: !1,
                    symbol: !0,
                    body: e.funcName
                }
            }), r(["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint"], {
                numArgs: 0
            }, function(e) {
                return {
                    type: "op",
                    limits: !0,
                    symbol: !0,
                    body: e.funcName
                }
            }), r("\\mathop", {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "op",
                    limits: !1,
                    symbol: !1,
                    value: o(r)
                }
            }), r(["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"], {
                numArgs: 2,
                greediness: 2
            }, function(e, t) {
                var r, n = t[0],
                    a = t[1],
                    i = null,
                    s = null,
                    o = "auto";
                switch (e.funcName) {
                    case "\\dfrac":
                    case "\\frac":
                    case "\\tfrac":
                        r = !0;
                        break;
                    case "\\\\atopfrac":
                        r = !1;
                        break;
                    case "\\dbinom":
                    case "\\binom":
                    case "\\tbinom":
                        r = !1, i = "(", s = ")";
                        break;
                    default:
                        throw new Error("Unrecognized genfrac command")
                }
                switch (e.funcName) {
                    case "\\dfrac":
                    case "\\dbinom":
                        o = "display";
                        break;
                    case "\\tfrac":
                    case "\\tbinom":
                        o = "text"
                }
                return {
                    type: "genfrac",
                    numer: n,
                    denom: a,
                    hasBarLine: r,
                    leftDelim: i,
                    rightDelim: s,
                    size: o
                }
            }), r(["\\llap", "\\rlap"], {
                numArgs: 1,
                allowedInText: !0
            }, function(e, t) {
                var r = t[0];
                return {
                    type: e.funcName.slice(1),
                    body: r
                }
            });
            var p = function(e, t) {
                if (n.contains(c, e.value)) return e;
                throw new a("Invalid delimiter: '" + e.value + "' after '" + t.funcName + "'", e)
            };
            r(["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"], {
                numArgs: 1
            }, function(e, t) {
                var r = p(t[0], e);
                return {
                    type: "delimsizing",
                    size: u[e.funcName].size,
                    mclass: u[e.funcName].mclass,
                    value: r.value
                }
            }), r(["\\left", "\\right"], {
                numArgs: 1
            }, function(e, t) {
                var r = p(t[0], e);
                return {
                    type: "leftright",
                    value: r.value
                }
            }), r("\\middle", {
                numArgs: 1
            }, function(e, t) {
                var r = p(t[0], e);
                if (!e.parser.leftrightDepth) throw new a("\\middle without preceding \\left", r);
                return {
                    type: "middle",
                    value: r.value
                }
            }), r(["\\tiny", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], 0, null), r(["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"], 0, null), r(["\\mathrm", "\\mathit", "\\mathbf", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"], {
                numArgs: 1,
                greediness: 2
            }, function(e, t) {
                var r = t[0],
                    n = e.funcName;
                return n in d && (n = d[n]), {
                    type: "font",
                    font: n.slice(1),
                    body: r
                }
            }), r(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot"], {
                numArgs: 1
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "accent",
                    accent: e.funcName,
                    base: r
                }
            }), r(["\\over", "\\choose", "\\atop"], {
                numArgs: 0,
                infix: !0
            }, function(e) {
                var t;
                switch (e.funcName) {
                    case "\\over":
                        t = "\\frac";
                        break;
                    case "\\choose":
                        t = "\\binom";
                        break;
                    case "\\atop":
                        t = "\\\\atopfrac";
                        break;
                    default:
                        throw new Error("Unrecognized infix genfrac command")
                }
                return {
                    type: "infix",
                    replaceWith: t,
                    token: e.token
                }
            }), r(["\\\\", "\\cr"], {
                numArgs: 0,
                numOptionalArgs: 1,
                argTypes: ["size"]
            }, function(e, t) {
                var r = t[0];
                return {
                    type: "cr",
                    size: r
                }
            }), r(["\\begin", "\\end"], {
                numArgs: 1,
                argTypes: ["text"]
            }, function(e, t) {
                var r = t[0];
                if ("ordgroup" !== r.type) throw new a("Invalid environment name", r);
                for (var n = "", i = 0; i < r.value.length; ++i) n += r.value[i].value;
                return {
                    type: "environment",
                    name: n,
                    nameGroup: r
                }
            })
        }, {
            "./ParseError": 6,
            "./parseData": 21,
            "./utils": 25
        }],
        20: [function(e, t) {
            function r(e, t) {
                this.type = e, this.attributes = {}, this.children = t || []
            }

            function n(e) {
                this.text = e
            }
            var a = e("./utils");
            r.prototype.setAttribute = function(e, t) {
                this.attributes[e] = t
            }, r.prototype.toNode = function() {
                var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
                return e
            }, r.prototype.toMarkup = function() {
                var e = "<" + this.type;
                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += a.escape(this.attributes[t]), e += '"');
                e += ">";
                for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
                return e += "</" + this.type + ">"
            }, n.prototype.toNode = function() {
                return document.createTextNode(this.text)
            }, n.prototype.toMarkup = function() {
                return a.escape(this.text)
            }, t.exports = {
                MathNode: r,
                TextNode: n
            }
        }, {
            "./utils": 25
        }],
        21: [function(e, t) {
            function r(e, t, r, n, a) {
                this.type = e, this.value = t, this.mode = r, !n || a && a.lexer !== n.lexer || (this.lexer = n.lexer, this.start = n.start, this.end = (a || n).end)
            }
            t.exports = {
                ParseNode: r
            }
        }, {}],
        22: [function(e, t) {
            var r = e("./Parser"),
                n = function(e, t) {
                    if (!("string" == typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
                    var n = new r(e, t);
                    return n.parse()
                };
            t.exports = n
        }, {
            "./Parser": 7
        }],
        23: [function(e, t) {
            function r(e, r, n, a, i) {
                t.exports[e][i] = {
                    font: r,
                    group: n,
                    replace: a
                }
            }
            t.exports = {
                math: {},
                text: {}
            };
            var n = "math",
                a = "text",
                i = "main",
                s = "ams",
                o = "accent",
                l = "bin",
                u = "close",
                c = "inner",
                d = "mathord",
                p = "op",
                h = "open",
                m = "punct",
                f = "rel",
                g = "spacing",
                v = "textord";
            r(n, i, f, "\u2261", "\\equiv"), r(n, i, f, "\u227a", "\\prec"), r(n, i, f, "\u227b", "\\succ"), r(n, i, f, "\u223c", "\\sim"), r(n, i, f, "\u22a5", "\\perp"), r(n, i, f, "\u2aaf", "\\preceq"), r(n, i, f, "\u2ab0", "\\succeq"), r(n, i, f, "\u2243", "\\simeq"), r(n, i, f, "\u2223", "\\mid"), r(n, i, f, "\u226a", "\\ll"), r(n, i, f, "\u226b", "\\gg"), r(n, i, f, "\u224d", "\\asymp"), r(n, i, f, "\u2225", "\\parallel"), r(n, i, f, "\u22c8", "\\bowtie"), r(n, i, f, "\u2323", "\\smile"), r(n, i, f, "\u2291", "\\sqsubseteq"), r(n, i, f, "\u2292", "\\sqsupseteq"), r(n, i, f, "\u2250", "\\doteq"), r(n, i, f, "\u2322", "\\frown"), r(n, i, f, "\u220b", "\\ni"), r(n, i, f, "\u221d", "\\propto"), r(n, i, f, "\u22a2", "\\vdash"), r(n, i, f, "\u22a3", "\\dashv"), r(n, i, f, "\u220b", "\\owns"), r(n, i, m, ".", "\\ldotp"), r(n, i, m, "\u22c5", "\\cdotp"), r(n, i, v, "#", "\\#"), r(a, i, v, "#", "\\#"), r(n, i, v, "&", "\\&"), r(a, i, v, "&", "\\&"), r(n, i, v, "\u2135", "\\aleph"), r(n, i, v, "\u2200", "\\forall"), r(n, i, v, "\u210f", "\\hbar"), r(n, i, v, "\u2203", "\\exists"), r(n, i, v, "\u2207", "\\nabla"), r(n, i, v, "\u266d", "\\flat"), r(n, i, v, "\u2113", "\\ell"), r(n, i, v, "\u266e", "\\natural"), r(n, i, v, "\u2663", "\\clubsuit"), r(n, i, v, "\u2118", "\\wp"), r(n, i, v, "\u266f", "\\sharp"), r(n, i, v, "\u2662", "\\diamondsuit"), r(n, i, v, "\u211c", "\\Re"), r(n, i, v, "\u2661", "\\heartsuit"), r(n, i, v, "\u2111", "\\Im"), r(n, i, v, "\u2660", "\\spadesuit"), r(n, i, v, "\u2020", "\\dag"), r(n, i, v, "\u2021", "\\ddag"), r(n, i, u, "\u23b1", "\\rmoustache"), r(n, i, h, "\u23b0", "\\lmoustache"), r(n, i, u, "\u27ef", "\\rgroup"), r(n, i, h, "\u27ee", "\\lgroup"), r(n, i, l, "\u2213", "\\mp"), r(n, i, l, "\u2296", "\\ominus"), r(n, i, l, "\u228e", "\\uplus"), r(n, i, l, "\u2293", "\\sqcap"), r(n, i, l, "\u2217", "\\ast"), r(n, i, l, "\u2294", "\\sqcup"), r(n, i, l, "\u25ef", "\\bigcirc"), r(n, i, l, "\u2219", "\\bullet"), r(n, i, l, "\u2021", "\\ddagger"), r(n, i, l, "\u2240", "\\wr"), r(n, i, l, "\u2a3f", "\\amalg"), r(n, i, f, "\u27f5", "\\longleftarrow"), r(n, i, f, "\u21d0", "\\Leftarrow"), r(n, i, f, "\u27f8", "\\Longleftarrow"), r(n, i, f, "\u27f6", "\\longrightarrow"), r(n, i, f, "\u21d2", "\\Rightarrow"), r(n, i, f, "\u27f9", "\\Longrightarrow"), r(n, i, f, "\u2194", "\\leftrightarrow"), r(n, i, f, "\u27f7", "\\longleftrightarrow"), r(n, i, f, "\u21d4", "\\Leftrightarrow"), r(n, i, f, "\u27fa", "\\Longleftrightarrow"), r(n, i, f, "\u21a6", "\\mapsto"), r(n, i, f, "\u27fc", "\\longmapsto"), r(n, i, f, "\u2197", "\\nearrow"), r(n, i, f, "\u21a9", "\\hookleftarrow"), r(n, i, f, "\u21aa", "\\hookrightarrow"), r(n, i, f, "\u2198", "\\searrow"), r(n, i, f, "\u21bc", "\\leftharpoonup"), r(n, i, f, "\u21c0", "\\rightharpoonup"), r(n, i, f, "\u2199", "\\swarrow"), r(n, i, f, "\u21bd", "\\leftharpoondown"), r(n, i, f, "\u21c1", "\\rightharpoondown"), r(n, i, f, "\u2196", "\\nwarrow"), r(n, i, f, "\u21cc", "\\rightleftharpoons"), r(n, s, f, "\u226e", "\\nless"), r(n, s, f, "\ue010", "\\nleqslant"), r(n, s, f, "\ue011", "\\nleqq"), r(n, s, f, "\u2a87", "\\lneq"), r(n, s, f, "\u2268", "\\lneqq"), r(n, s, f, "\ue00c", "\\lvertneqq"), r(n, s, f, "\u22e6", "\\lnsim"), r(n, s, f, "\u2a89", "\\lnapprox"), r(n, s, f, "\u2280", "\\nprec"), r(n, s, f, "\u22e0", "\\npreceq"), r(n, s, f, "\u22e8", "\\precnsim"), r(n, s, f, "\u2ab9", "\\precnapprox"), r(n, s, f, "\u2241", "\\nsim"), r(n, s, f, "\ue006", "\\nshortmid"), r(n, s, f, "\u2224", "\\nmid"), r(n, s, f, "\u22ac", "\\nvdash"), r(n, s, f, "\u22ad", "\\nvDash"), r(n, s, f, "\u22ea", "\\ntriangleleft"), r(n, s, f, "\u22ec", "\\ntrianglelefteq"), r(n, s, f, "\u228a", "\\subsetneq"), r(n, s, f, "\ue01a", "\\varsubsetneq"), r(n, s, f, "\u2acb", "\\subsetneqq"), r(n, s, f, "\ue017", "\\varsubsetneqq"), r(n, s, f, "\u226f", "\\ngtr"), r(n, s, f, "\ue00f", "\\ngeqslant"), r(n, s, f, "\ue00e", "\\ngeqq"), r(n, s, f, "\u2a88", "\\gneq"), r(n, s, f, "\u2269", "\\gneqq"), r(n, s, f, "\ue00d", "\\gvertneqq"), r(n, s, f, "\u22e7", "\\gnsim"), r(n, s, f, "\u2a8a", "\\gnapprox"), r(n, s, f, "\u2281", "\\nsucc"), r(n, s, f, "\u22e1", "\\nsucceq"), r(n, s, f, "\u22e9", "\\succnsim"), r(n, s, f, "\u2aba", "\\succnapprox"), r(n, s, f, "\u2246", "\\ncong"), r(n, s, f, "\ue007", "\\nshortparallel"), r(n, s, f, "\u2226", "\\nparallel"), r(n, s, f, "\u22af", "\\nVDash"), r(n, s, f, "\u22eb", "\\ntriangleright"), r(n, s, f, "\u22ed", "\\ntrianglerighteq"), r(n, s, f, "\ue018", "\\nsupseteqq"), r(n, s, f, "\u228b", "\\supsetneq"), r(n, s, f, "\ue01b", "\\varsupsetneq"), r(n, s, f, "\u2acc", "\\supsetneqq"), r(n, s, f, "\ue019", "\\varsupsetneqq"), r(n, s, f, "\u22ae", "\\nVdash"), r(n, s, f, "\u2ab5", "\\precneqq"), r(n, s, f, "\u2ab6", "\\succneqq"), r(n, s, f, "\ue016", "\\nsubseteqq"), r(n, s, l, "\u22b4", "\\unlhd"), r(n, s, l, "\u22b5", "\\unrhd"), r(n, s, f, "\u219a", "\\nleftarrow"), r(n, s, f, "\u219b", "\\nrightarrow"), r(n, s, f, "\u21cd", "\\nLeftarrow"), r(n, s, f, "\u21cf", "\\nRightarrow"), r(n, s, f, "\u21ae", "\\nleftrightarrow"), r(n, s, f, "\u21ce", "\\nLeftrightarrow"), r(n, s, f, "\u25b3", "\\vartriangle"), r(n, s, v, "\u210f", "\\hslash"), r(n, s, v, "\u25bd", "\\triangledown"), r(n, s, v, "\u25ca", "\\lozenge"), r(n, s, v, "\u24c8", "\\circledS"), r(n, s, v, "\xae", "\\circledR"), r(n, s, v, "\u2221", "\\measuredangle"), r(n, s, v, "\u2204", "\\nexists"), r(n, s, v, "\u2127", "\\mho"), r(n, s, v, "\u2132", "\\Finv"), r(n, s, v, "\u2141", "\\Game"), r(n, s, v, "k", "\\Bbbk"), r(n, s, v, "\u2035", "\\backprime"), r(n, s, v, "\u25b2", "\\blacktriangle"), r(n, s, v, "\u25bc", "\\blacktriangledown"), r(n, s, v, "\u25a0", "\\blacksquare"), r(n, s, v, "\u29eb", "\\blacklozenge"), r(n, s, v, "\u2605", "\\bigstar"), r(n, s, v, "\u2222", "\\sphericalangle"), r(n, s, v, "\u2201", "\\complement"), r(n, s, v, "\xf0", "\\eth"), r(n, s, v, "\u2571", "\\diagup"), r(n, s, v, "\u2572", "\\diagdown"), r(n, s, v, "\u25a1", "\\square"), r(n, s, v, "\u25a1", "\\Box"), r(n, s, v, "\u25ca", "\\Diamond"), r(n, s, v, "\xa5", "\\yen"), r(n, s, v, "\u2713", "\\checkmark"), r(n, s, v, "\u2136", "\\beth"), r(n, s, v, "\u2138", "\\daleth"), r(n, s, v, "\u2137", "\\gimel"), r(n, s, v, "\u03dd", "\\digamma"), r(n, s, v, "\u03f0", "\\varkappa"), r(n, s, h, "\u250c", "\\ulcorner"), r(n, s, u, "\u2510", "\\urcorner"), r(n, s, h, "\u2514", "\\llcorner"), r(n, s, u, "\u2518", "\\lrcorner"), r(n, s, f, "\u2266", "\\leqq"), r(n, s, f, "\u2a7d", "\\leqslant"), r(n, s, f, "\u2a95", "\\eqslantless"), r(n, s, f, "\u2272", "\\lesssim"), r(n, s, f, "\u2a85", "\\lessapprox"), r(n, s, f, "\u224a", "\\approxeq"), r(n, s, l, "\u22d6", "\\lessdot"), r(n, s, f, "\u22d8", "\\lll"), r(n, s, f, "\u2276", "\\lessgtr"), r(n, s, f, "\u22da", "\\lesseqgtr"), r(n, s, f, "\u2a8b", "\\lesseqqgtr"), r(n, s, f, "\u2251", "\\doteqdot"), r(n, s, f, "\u2253", "\\risingdotseq"), r(n, s, f, "\u2252", "\\fallingdotseq"), r(n, s, f, "\u223d", "\\backsim"), r(n, s, f, "\u22cd", "\\backsimeq"), r(n, s, f, "\u2ac5", "\\subseteqq"), r(n, s, f, "\u22d0", "\\Subset"), r(n, s, f, "\u228f", "\\sqsubset"), r(n, s, f, "\u227c", "\\preccurlyeq"), r(n, s, f, "\u22de", "\\curlyeqprec"), r(n, s, f, "\u227e", "\\precsim"), r(n, s, f, "\u2ab7", "\\precapprox"), r(n, s, f, "\u22b2", "\\vartriangleleft"), r(n, s, f, "\u22b4", "\\trianglelefteq"), r(n, s, f, "\u22a8", "\\vDash"), r(n, s, f, "\u22aa", "\\Vvdash"), r(n, s, f, "\u2323", "\\smallsmile"), r(n, s, f, "\u2322", "\\smallfrown"), r(n, s, f, "\u224f", "\\bumpeq"), r(n, s, f, "\u224e", "\\Bumpeq"), r(n, s, f, "\u2267", "\\geqq"), r(n, s, f, "\u2a7e", "\\geqslant"), r(n, s, f, "\u2a96", "\\eqslantgtr"), r(n, s, f, "\u2273", "\\gtrsim"), r(n, s, f, "\u2a86", "\\gtrapprox"), r(n, s, l, "\u22d7", "\\gtrdot"), r(n, s, f, "\u22d9", "\\ggg"), r(n, s, f, "\u2277", "\\gtrless"), r(n, s, f, "\u22db", "\\gtreqless"), r(n, s, f, "\u2a8c", "\\gtreqqless"), r(n, s, f, "\u2256", "\\eqcirc"), r(n, s, f, "\u2257", "\\circeq"), r(n, s, f, "\u225c", "\\triangleq"), r(n, s, f, "\u223c", "\\thicksim"), r(n, s, f, "\u2248", "\\thickapprox"), r(n, s, f, "\u2ac6", "\\supseteqq"), r(n, s, f, "\u22d1", "\\Supset"), r(n, s, f, "\u2290", "\\sqsupset"), r(n, s, f, "\u227d", "\\succcurlyeq"), r(n, s, f, "\u22df", "\\curlyeqsucc"), r(n, s, f, "\u227f", "\\succsim"), r(n, s, f, "\u2ab8", "\\succapprox"), r(n, s, f, "\u22b3", "\\vartriangleright"), r(n, s, f, "\u22b5", "\\trianglerighteq"), r(n, s, f, "\u22a9", "\\Vdash"), r(n, s, f, "\u2223", "\\shortmid"), r(n, s, f, "\u2225", "\\shortparallel"), r(n, s, f, "\u226c", "\\between"), r(n, s, f, "\u22d4", "\\pitchfork"), r(n, s, f, "\u221d", "\\varpropto"), r(n, s, f, "\u25c0", "\\blacktriangleleft"), r(n, s, f, "\u2234", "\\therefore"), r(n, s, f, "\u220d", "\\backepsilon"), r(n, s, f, "\u25b6", "\\blacktriangleright"), r(n, s, f, "\u2235", "\\because"), r(n, s, f, "\u22d8", "\\llless"), r(n, s, f, "\u22d9", "\\gggtr"), r(n, s, l, "\u22b2", "\\lhd"), r(n, s, l, "\u22b3", "\\rhd"), r(n, s, f, "\u2242", "\\eqsim"), r(n, i, f, "\u22c8", "\\Join"), r(n, s, f, "\u2251", "\\Doteq"), r(n, s, l, "\u2214", "\\dotplus"), r(n, s, l, "\u2216", "\\smallsetminus"), r(n, s, l, "\u22d2", "\\Cap"), r(n, s, l, "\u22d3", "\\Cup"), r(n, s, l, "\u2a5e", "\\doublebarwedge"), r(n, s, l, "\u229f", "\\boxminus"), r(n, s, l, "\u229e", "\\boxplus"), r(n, s, l, "\u22c7", "\\divideontimes"), r(n, s, l, "\u22c9", "\\ltimes"), r(n, s, l, "\u22ca", "\\rtimes"), r(n, s, l, "\u22cb", "\\leftthreetimes"), r(n, s, l, "\u22cc", "\\rightthreetimes"), r(n, s, l, "\u22cf", "\\curlywedge"), r(n, s, l, "\u22ce", "\\curlyvee"), r(n, s, l, "\u229d", "\\circleddash"), r(n, s, l, "\u229b", "\\circledast"), r(n, s, l, "\u22c5", "\\centerdot"), r(n, s, l, "\u22ba", "\\intercal"), r(n, s, l, "\u22d2", "\\doublecap"), r(n, s, l, "\u22d3", "\\doublecup"), r(n, s, l, "\u22a0", "\\boxtimes"), r(n, s, f, "\u21e2", "\\dashrightarrow"), r(n, s, f, "\u21e0", "\\dashleftarrow"), r(n, s, f, "\u21c7", "\\leftleftarrows"), r(n, s, f, "\u21c6", "\\leftrightarrows"), r(n, s, f, "\u21da", "\\Lleftarrow"), r(n, s, f, "\u219e", "\\twoheadleftarrow"), r(n, s, f, "\u21a2", "\\leftarrowtail"), r(n, s, f, "\u21ab", "\\looparrowleft"), r(n, s, f, "\u21cb", "\\leftrightharpoons"), r(n, s, f, "\u21b6", "\\curvearrowleft"), r(n, s, f, "\u21ba", "\\circlearrowleft"), r(n, s, f, "\u21b0", "\\Lsh"), r(n, s, f, "\u21c8", "\\upuparrows"), r(n, s, f, "\u21bf", "\\upharpoonleft"), r(n, s, f, "\u21c3", "\\downharpoonleft"), r(n, s, f, "\u22b8", "\\multimap"), r(n, s, f, "\u21ad", "\\leftrightsquigarrow"), r(n, s, f, "\u21c9", "\\rightrightarrows"), r(n, s, f, "\u21c4", "\\rightleftarrows"), r(n, s, f, "\u21a0", "\\twoheadrightarrow"), r(n, s, f, "\u21a3", "\\rightarrowtail"), r(n, s, f, "\u21ac", "\\looparrowright"), r(n, s, f, "\u21b7", "\\curvearrowright"), r(n, s, f, "\u21bb", "\\circlearrowright"), r(n, s, f, "\u21b1", "\\Rsh"), r(n, s, f, "\u21ca", "\\downdownarrows"), r(n, s, f, "\u21be", "\\upharpoonright"), r(n, s, f, "\u21c2", "\\downharpoonright"), r(n, s, f, "\u21dd", "\\rightsquigarrow"), r(n, s, f, "\u21dd", "\\leadsto"), r(n, s, f, "\u21db", "\\Rrightarrow"), r(n, s, f, "\u21be", "\\restriction"), r(n, i, v, "\u2018", "`"), r(n, i, v, "$", "\\$"), r(a, i, v, "$", "\\$"), r(n, i, v, "%", "\\%"), r(a, i, v, "%", "\\%"), r(n, i, v, "_", "\\_"), r(a, i, v, "_", "\\_"), r(n, i, v, "\u2220", "\\angle"), r(n, i, v, "\u221e", "\\infty"), r(n, i, v, "\u2032", "\\prime"), r(n, i, v, "\u25b3", "\\triangle"), r(n, i, v, "\u0393", "\\Gamma"), r(n, i, v, "\u0394", "\\Delta"), r(n, i, v, "\u0398", "\\Theta"), r(n, i, v, "\u039b", "\\Lambda"), r(n, i, v, "\u039e", "\\Xi"), r(n, i, v, "\u03a0", "\\Pi"), r(n, i, v, "\u03a3", "\\Sigma"), r(n, i, v, "\u03a5", "\\Upsilon"), r(n, i, v, "\u03a6", "\\Phi"), r(n, i, v, "\u03a8", "\\Psi"), r(n, i, v, "\u03a9", "\\Omega"), r(n, i, v, "\xac", "\\neg"), r(n, i, v, "\xac", "\\lnot"), r(n, i, v, "\u22a4", "\\top"), r(n, i, v, "\u22a5", "\\bot"), r(n, i, v, "\u2205", "\\emptyset"), r(n, s, v, "\u2205", "\\varnothing"), r(n, i, d, "\u03b1", "\\alpha"), r(n, i, d, "\u03b2", "\\beta"), r(n, i, d, "\u03b3", "\\gamma"), r(n, i, d, "\u03b4", "\\delta"), r(n, i, d, "\u03f5", "\\epsilon"), r(n, i, d, "\u03b6", "\\zeta"), r(n, i, d, "\u03b7", "\\eta"), r(n, i, d, "\u03b8", "\\theta"), r(n, i, d, "\u03b9", "\\iota"), r(n, i, d, "\u03ba", "\\kappa"), r(n, i, d, "\u03bb", "\\lambda"), r(n, i, d, "\u03bc", "\\mu"), r(n, i, d, "\u03bd", "\\nu"), r(n, i, d, "\u03be", "\\xi"), r(n, i, d, "o", "\\omicron"), r(n, i, d, "\u03c0", "\\pi"), r(n, i, d, "\u03c1", "\\rho"), r(n, i, d, "\u03c3", "\\sigma"), r(n, i, d, "\u03c4", "\\tau"), r(n, i, d, "\u03c5", "\\upsilon"), r(n, i, d, "\u03d5", "\\phi"), r(n, i, d, "\u03c7", "\\chi"), r(n, i, d, "\u03c8", "\\psi"), r(n, i, d, "\u03c9", "\\omega"), r(n, i, d, "\u03b5", "\\varepsilon"), r(n, i, d, "\u03d1", "\\vartheta"), r(n, i, d, "\u03d6", "\\varpi"), r(n, i, d, "\u03f1", "\\varrho"), r(n, i, d, "\u03c2", "\\varsigma"), r(n, i, d, "\u03c6", "\\varphi"), r(n, i, l, "\u2217", "*"), r(n, i, l, "+", "+"), r(n, i, l, "\u2212", "-"), r(n, i, l, "\u22c5", "\\cdot"), r(n, i, l, "\u2218", "\\circ"), r(n, i, l, "\xf7", "\\div"), r(n, i, l, "\xb1", "\\pm"), r(n, i, l, "\xd7", "\\times"), r(n, i, l, "\u2229", "\\cap"), r(n, i, l, "\u222a", "\\cup"), r(n, i, l, "\u2216", "\\setminus"), r(n, i, l, "\u2227", "\\land"), r(n, i, l, "\u2228", "\\lor"), r(n, i, l, "\u2227", "\\wedge"), r(n, i, l, "\u2228", "\\vee"), r(n, i, v, "\u221a", "\\surd"), r(n, i, h, "(", "("), r(n, i, h, "[", "["), r(n, i, h, "\u27e8", "\\langle"), r(n, i, h, "\u2223", "\\lvert"), r(n, i, h, "\u2225", "\\lVert"), r(n, i, u, ")", ")"), r(n, i, u, "]", "]"), r(n, i, u, "?", "?"), r(n, i, u, "!", "!"), r(n, i, u, "\u27e9", "\\rangle"), r(n, i, u, "\u2223", "\\rvert"), r(n, i, u, "\u2225", "\\rVert"), r(n, i, f, "=", "="), r(n, i, f, "<", "<"), r(n, i, f, ">", ">"), r(n, i, f, ":", ":"), r(n, i, f, "\u2248", "\\approx"), r(n, i, f, "\u2245", "\\cong"), r(n, i, f, "\u2265", "\\ge"), r(n, i, f, "\u2265", "\\geq"), r(n, i, f, "\u2190", "\\gets"), r(n, i, f, ">", "\\gt"), r(n, i, f, "\u2208", "\\in"), r(n, i, f, "\u2209", "\\notin"), r(n, i, f, "\u2282", "\\subset"), r(n, i, f, "\u2283", "\\supset"), r(n, i, f, "\u2286", "\\subseteq"), r(n, i, f, "\u2287", "\\supseteq"), r(n, s, f, "\u2288", "\\nsubseteq"), r(n, s, f, "\u2289", "\\nsupseteq"), r(n, i, f, "\u22a8", "\\models"), r(n, i, f, "\u2190", "\\leftarrow"), r(n, i, f, "\u2264", "\\le"), r(n, i, f, "\u2264", "\\leq"), r(n, i, f, "<", "\\lt"), r(n, i, f, "\u2260", "\\ne"), r(n, i, f, "\u2260", "\\neq"), r(n, i, f, "\u2192", "\\rightarrow"), r(n, i, f, "\u2192", "\\to"), r(n, s, f, "\u2271", "\\ngeq"), r(n, s, f, "\u2270", "\\nleq"), r(n, i, g, null, "\\!"), r(n, i, g, "\xa0", "\\ "), r(n, i, g, "\xa0", "~"), r(n, i, g, null, "\\,"), r(n, i, g, null, "\\:"), r(n, i, g, null, "\\;"), r(n, i, g, null, "\\enspace"), r(n, i, g, null, "\\qquad"), r(n, i, g, null, "\\quad"), r(n, i, g, "\xa0", "\\space"), r(n, i, m, ",", ","), r(n, i, m, ";", ";"), r(n, i, m, ":", "\\colon"), r(n, s, l, "\u22bc", "\\barwedge"), r(n, s, l, "\u22bb", "\\veebar"), r(n, i, l, "\u2299", "\\odot"), r(n, i, l, "\u2295", "\\oplus"), r(n, i, l, "\u2297", "\\otimes"), r(n, i, v, "\u2202", "\\partial"), r(n, i, l, "\u2298", "\\oslash"), r(n, s, l, "\u229a", "\\circledcirc"), r(n, s, l, "\u22a1", "\\boxdot"), r(n, i, l, "\u25b3", "\\bigtriangleup"), r(n, i, l, "\u25bd", "\\bigtriangledown"), r(n, i, l, "\u2020", "\\dagger"), r(n, i, l, "\u22c4", "\\diamond"), r(n, i, l, "\u22c6", "\\star"), r(n, i, l, "\u25c3", "\\triangleleft"), r(n, i, l, "\u25b9", "\\triangleright"), r(n, i, h, "{", "\\{"), r(a, i, v, "{", "\\{"), r(n, i, u, "}", "\\}"), r(a, i, v, "}", "\\}"), r(n, i, h, "{", "\\lbrace"), r(n, i, u, "}", "\\rbrace"), r(n, i, h, "[", "\\lbrack"), r(n, i, u, "]", "\\rbrack"), r(n, i, h, "\u230a", "\\lfloor"), r(n, i, u, "\u230b", "\\rfloor"), r(n, i, h, "\u2308", "\\lceil"), r(n, i, u, "\u2309", "\\rceil"), r(n, i, v, "\\", "\\backslash"), r(n, i, v, "\u2223", "|"), r(n, i, v, "\u2223", "\\vert"), r(n, i, v, "\u2225", "\\|"), r(n, i, v, "\u2225", "\\Vert"), r(n, i, f, "\u2191", "\\uparrow"), r(n, i, f, "\u21d1", "\\Uparrow"), r(n, i, f, "\u2193", "\\downarrow"), r(n, i, f, "\u21d3", "\\Downarrow"), r(n, i, f, "\u2195", "\\updownarrow"), r(n, i, f, "\u21d5", "\\Updownarrow"), r(n, n, p, "\u2210", "\\coprod"), r(n, n, p, "\u22c1", "\\bigvee"), r(n, n, p, "\u22c0", "\\bigwedge"), r(n, n, p, "\u2a04", "\\biguplus"), r(n, n, p, "\u22c2", "\\bigcap"), r(n, n, p, "\u22c3", "\\bigcup"), r(n, n, p, "\u222b", "\\int"), r(n, n, p, "\u222b", "\\intop"), r(n, n, p, "\u222c", "\\iint"), r(n, n, p, "\u222d", "\\iiint"), r(n, n, p, "\u220f", "\\prod"), r(n, n, p, "\u2211", "\\sum"), r(n, n, p, "\u2a02", "\\bigotimes"), r(n, n, p, "\u2a01", "\\bigoplus"), r(n, n, p, "\u2a00", "\\bigodot"), r(n, n, p, "\u222e", "\\oint"), r(n, n, p, "\u2a06", "\\bigsqcup"), r(n, n, p, "\u222b", "\\smallint"), r(a, i, c, "\u2026", "\\textellipsis"), r(n, i, c, "\u2026", "\\mathellipsis"), r(a, i, c, "\u2026", "\\ldots"), r(n, i, c, "\u2026", "\\ldots"), r(n, i, c, "\u22ef", "\\cdots"), r(n, i, c, "\u22f1", "\\ddots"), r(n, i, v, "\u22ee", "\\vdots"), r(n, i, o, "\xb4", "\\acute"), r(n, i, o, "`", "\\grave"), r(n, i, o, "\xa8", "\\ddot"), r(n, i, o, "~", "\\tilde"), r(n, i, o, "\xaf", "\\bar"), r(n, i, o, "\u02d8", "\\breve"), r(n, i, o, "\u02c7", "\\check"), r(n, i, o, "^", "\\hat"), r(n, i, o, "\u20d7", "\\vec"), r(n, i, o, "\u02d9", "\\dot"), r(n, i, d, "\u0131", "\\imath"), r(n, i, d, "\u0237", "\\jmath"), r(a, i, v, "\u2013", "--"), r(a, i, v, "\u2014", "---"), r(a, i, v, "\u2018", "`"), r(a, i, v, "\u2019", "'"), r(a, i, v, "\u201c", "``"), r(a, i, v, "\u201d", "''"), r(n, i, v, "\xb0", "\\degree"), r(a, i, v, "\xb0", "\\degree"), r(n, i, d, "\xa3", "\\pounds"), r(n, s, v, "\u2720", "\\maltese"), r(a, s, v, "\u2720", "\\maltese"), r(a, i, g, "\xa0", "\\ "), r(a, i, g, "\xa0", " "), r(a, i, g, "\xa0", "~");
            var y, b, w = '0123456789/@."';
            for (y = 0; y < w.length; y++) b = w.charAt(y), r(n, i, v, b, b);
            var x = '0123456789!@*()-=+[]";:?/.,';
            for (y = 0; y < x.length; y++) b = x.charAt(y), r(a, i, v, b, b);
            var k = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (y = 0; y < k.length; y++) b = k.charAt(y), r(n, i, d, b, b), r(a, i, v, b, b);
            for (y = 192; 214 >= y; y++) b = String.fromCharCode(y), r(a, i, v, b, b);
            for (y = 216; 246 >= y; y++) b = String.fromCharCode(y), r(a, i, v, b, b);
            for (y = 248; 255 >= y; y++) b = String.fromCharCode(y), r(a, i, v, b, b);
            for (y = 1040; 1103 >= y; y++) b = String.fromCharCode(y), r(a, i, v, b, b);
            r(a, i, v, "\u2013", "\u2013"), r(a, i, v, "\u2014", "\u2014"), r(a, i, v, "\u2018", "\u2018"), r(a, i, v, "\u2019", "\u2019"), r(a, i, v, "\u201c", "\u201c"), r(a, i, v, "\u201d", "\u201d")
        }, {}],
        24: [function(e, t) {
            var r = /[\uAC00-\uD7AF]/,
                n = /[\u3040-\u309F]|[\u30A0-\u30FF]|[\u4E00-\u9FAF]|[\uAC00-\uD7AF]/;
            t.exports = {
                cjkRegex: n,
                hangulRegex: r
            }
        }, {}],
        25: [function(e, t) {
            function r(e) {
                return p[e]
            }

            function n(e) {
                return ("" + e).replace(h, r)
            }

            function a(e) {
                i(e, "")
            }
            var i, s = Array.prototype.indexOf,
                o = function(e, t) {
                    if (null == e) return -1;
                    if (s && e.indexOf === s) return e.indexOf(t);
                    for (var r = 0, n = e.length; n > r; r++)
                        if (e[r] === t) return r;
                    return -1
                },
                l = function(e, t) {
                    return -1 !== o(e, t)
                },
                u = function(e, t) {
                    return void 0 === e ? t : e
                },
                c = /([A-Z])/g,
                d = function(e) {
                    return e.replace(c, "-$1").toLowerCase()
                },
                p = {
                    "&": "&amp;",
                    ">": "&gt;",
                    "<": "&lt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                },
                h = /[&><"']/g;
            if ("undefined" != typeof document) {
                var m = document.createElement("span");
                i = "textContent" in m ? function(e, t) {
                    e.textContent = t
                } : function(e, t) {
                    e.innerText = t
                }
            }
            t.exports = {
                contains: l,
                deflt: u,
                escape: n,
                hyphenate: d,
                indexOf: o,
                setTextContent: i,
                clearNode: a
            }
        }, {}]
    }, {}, [1])(1)
}),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.renderMathInElement = e()
    }
}(function() {
    return function e(t, r, n) {
        function a(s, o) {
            if (!r[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!o && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = r[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var r = t[s][1][e];
                    return a(r ? r : e)
                }, c, c.exports, e, t, r, n)
            }
            return r[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) a(n[s]);
        return a
    }({
        1: [function(e, t) {
            var r = e("./splitAtDelimiters"),
                n = function(e, t) {
                    for (var n = [{
                            type: "text",
                            data: e
                        }], a = 0; a < t.length; a++) {
                        var i = t[a];
                        n = r(n, i.left, i.right, i.display || !1)
                    }
                    return n
                },
                a = function(e, t) {
                    for (var r = n(e, t), a = document.createDocumentFragment(), i = 0; i < r.length; i++)
                        if ("text" === r[i].type) a.appendChild(document.createTextNode(r[i].data));
                        else {
                            var s = document.createElement("span"),
                                o = r[i].data;
                            try {
                                katex.render(o, s, {
                                    displayMode: r[i].display
                                })
                            } catch (l) {
                                if (!(l instanceof katex.ParseError)) throw l;
                                console.error("KaTeX auto-render: Failed to parse `" + r[i].data + "` with ", l), a.appendChild(document.createTextNode(r[i].rawData));
                                continue
                            }
                            a.appendChild(s)
                        }
                    return a
                },
                i = function(e, t, r) {
                    for (var n = 0; n < e.childNodes.length; n++) {
                        var s = e.childNodes[n];
                        if (3 === s.nodeType) {
                            var o = a(s.textContent, t);
                            n += o.childNodes.length - 1, e.replaceChild(o, s)
                        } else if (1 === s.nodeType) {
                            var l = -1 === r.indexOf(s.nodeName.toLowerCase());
                            l && i(s, t, r)
                        }
                    }
                },
                s = {
                    delimiters: [{
                        left: "$$",
                        right: "$$",
                        display: !0
                    }, {
                        left: "\\[",
                        right: "\\]",
                        display: !0
                    }, {
                        left: "\\(",
                        right: "\\)",
                        display: !1
                    }],
                    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"]
                },
                o = function(e) {
                    for (var t, r, n = 1, a = arguments.length; a > n; n++) {
                        t = arguments[n];
                        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                },
                l = function(e, t) {
                    if (!e) throw new Error("No element provided to render");
                    t = o({}, s, t), i(e, t.delimiters, t.ignoredTags)
                };
            t.exports = l
        }, {
            "./splitAtDelimiters": 2
        }],
        2: [function(e, t) {
            var r = function(e, t, r) {
                    for (var n = r, a = 0, i = e.length; n < t.length;) {
                        var s = t[n];
                        if (0 >= a && t.slice(n, n + i) === e) return n;
                        "\\" === s ? n++ : "{" === s ? a++ : "}" === s && a--, n++
                    }
                    return -1
                },
                n = function(e, t, n, a) {
                    for (var i = [], s = 0; s < e.length; s++)
                        if ("text" === e[s].type) {
                            var o, l = e[s].data,
                                u = !0,
                                c = 0;
                            for (o = l.indexOf(t), -1 !== o && (c = o, i.push({
                                    type: "text",
                                    data: l.slice(0, c)
                                }), u = !1);;) {
                                if (u) {
                                    if (o = l.indexOf(t, c), -1 === o) break;
                                    i.push({
                                        type: "text",
                                        data: l.slice(c, o)
                                    }), c = o
                                } else {
                                    if (o = r(n, l, c + t.length), -1 === o) break;
                                    i.push({
                                        type: "math",
                                        data: l.slice(c + t.length, o),
                                        rawData: l.slice(c, o + n.length),
                                        display: a
                                    }), c = o + n.length
                                }
                                u = !u
                            }
                            i.push({
                                type: "text",
                                data: l.slice(c)
                            })
                        } else i.push(e[s]);
                    return i
                };
            t.exports = n
        }, {}]
    }, {}, [1])(1)
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(function() {
        return e.Reveal = t(), e.Reveal
    }) : "object" == typeof exports ? module.exports = t() : e.Reveal = t()
}(this, function() {
    "use strict";

    function e(e) {
        if (Wr !== !0)
            if (Wr = !0, t(), en.transforms2d || en.transforms3d) {
                Qr.wrapper = document.querySelector(".reveal"), Qr.slides = document.querySelector(".reveal .slides"), window.addEventListener("load", F, !1);
                var n = Mr.getQueryHash();
                "undefined" != typeof n.dependencies && delete n.dependencies, g(Xr, e), g(Xr, n), z(), r()
            } else {
                document.body.setAttribute("class", "no-transforms");
                for (var a = v(document.getElementsByTagName("img")), i = v(document.getElementsByTagName("iframe")), s = a.concat(i), o = 0, l = s.length; l > o; o++) {
                    var u = s[o];
                    u.getAttribute("data-src") && (u.setAttribute("src", u.getAttribute("data-src")), u.removeAttribute("data-src"))
                }
            }
    }

    function t() {
        Pr = /(iphone|ipod|ipad|android)/gi.test(Vr), Rr = /chrome/i.test(Vr) && !/edge/i.test(Vr);
        var e = document.createElement("div");
        en.transforms3d = "WebkitPerspective" in e.style || "MozPerspective" in e.style || "msPerspective" in e.style || "OPerspective" in e.style || "perspective" in e.style, en.transforms2d = "WebkitTransform" in e.style || "MozTransform" in e.style || "msTransform" in e.style || "OTransform" in e.style || "transform" in e.style, en.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame, en.requestAnimationFrame = "function" == typeof en.requestAnimationFrameMethod, en.canvas = !!document.createElement("canvas").getContext, en.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test(Vr), en.zoom = "zoom" in e.style && !Pr && (Rr || /Version\/[\d\.]+.*Safari/.test(Vr))
    }

    function r() {
        function e() {
            a.length && head.js.apply(null, a), n()
        }

        function t(t) {
            head.ready(t.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0], function() {
                "function" == typeof t.callback && t.callback.apply(this), 0 === --i && e()
            })
        }
        for (var r = [], a = [], i = 0, s = 0, o = Xr.dependencies.length; o > s; s++) {
            var l = Xr.dependencies[s];
            (!l.condition || l.condition()) && (l.async ? a.push(l.src) : r.push(l.src), t(l))
        }
        r.length ? (i = r.length, head.js.apply(null, r)) : e()
    }

    function n() {
        a(), p(), l(), st(), h(), Ct(), yt(!0), setTimeout(function() {
            Qr.slides.classList.remove("no-transition"), Ur = !0, Qr.wrapper.classList.add("ready"), N("ready", {
                indexh: zr,
                indexv: Tr,
                currentSlide: qr
            })
        }, 1), M() && (f(), "complete" === document.readyState ? o() : window.addEventListener("load", o))
    }

    function a() {
        Qr.slides.classList.add("no-transition"), Pr ? Qr.wrapper.classList.add("no-hover") : Qr.wrapper.classList.remove("no-hover"), /iphone/gi.test(Vr) ? Qr.wrapper.classList.add("ua-iphone") : Qr.wrapper.classList.remove("ua-iphone"), Qr.background = u(Qr.wrapper, "div", "backgrounds", null), Qr.progress = u(Qr.wrapper, "div", "progress", "<span></span>"), Qr.progressbar = Qr.progress.querySelector("span"), Qr.controls = u(Qr.wrapper, "aside", "controls", '<button class="navigate-left" aria-label="previous slide"><div class="controls-arrow"></div></button><button class="navigate-right" aria-label="next slide"><div class="controls-arrow"></div></button><button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button><button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), Qr.slideNumber = u(Qr.wrapper, "div", "slide-number", ""), Qr.speakerNotes = u(Qr.wrapper, "div", "speaker-notes", null), Qr.speakerNotes.setAttribute("data-prevent-swipe", ""), Qr.speakerNotes.setAttribute("tabindex", "0"), u(Qr.wrapper, "div", "pause-overlay", null), Qr.wrapper.setAttribute("role", "application"), Qr.controlsLeft = v(document.querySelectorAll(".navigate-left")), Qr.controlsRight = v(document.querySelectorAll(".navigate-right")), Qr.controlsUp = v(document.querySelectorAll(".navigate-up")), Qr.controlsDown = v(document.querySelectorAll(".navigate-down")), Qr.controlsPrev = v(document.querySelectorAll(".navigate-prev")), Qr.controlsNext = v(document.querySelectorAll(".navigate-next")), Qr.controlsRightArrow = Qr.controls.querySelector(".navigate-right"), Qr.controlsDownArrow = Qr.controls.querySelector(".navigate-down"), Qr.statusDiv = i()
    }

    function i() {
        var e = document.getElementById("aria-status-div");
        return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.setAttribute("id", "aria-status-div"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Qr.wrapper.appendChild(e)), e
    }

    function s(e) {
        var t = "";
        if (3 === e.nodeType) t += e.textContent;
        else if (1 === e.nodeType) {
            var r = e.getAttribute("aria-hidden"),
                n = "none" === window.getComputedStyle(e).display;
            "true" === r || n || v(e.childNodes).forEach(function(e) {
                t += s(e)
            })
        }
        return t
    }

    function o() {
        var e = V(window.innerWidth, window.innerHeight),
            t = Math.floor(e.width * (1 + Xr.margin)),
            r = Math.floor(e.height * (1 + Xr.margin)),
            n = e.width,
            a = e.height;
        k("@page{size:" + t + "px " + r + "px; margin: 0px;}"), k(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + n + "px; max-height:" + a + "px}"), document.body.classList.add("print-pdf"), document.body.style.width = t + "px", document.body.style.height = r + "px", H(n, a), v(Qr.wrapper.querySelectorAll(Br)).forEach(function(e, t) {
            e.setAttribute("data-index-h", t), e.classList.contains("stack") && v(e.querySelectorAll("section")).forEach(function(e, r) {
                e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r)
            })
        }), v(Qr.wrapper.querySelectorAll(Or)).forEach(function(e) {
            if (e.classList.contains("stack") === !1) {
                var i = (t - n) / 2,
                    s = (r - a) / 2,
                    o = e.scrollHeight,
                    l = Math.max(Math.ceil(o / r), 1);
                l = Math.min(l, Xr.pdfMaxPagesPerSlide), (1 === l && Xr.center || e.classList.contains("center")) && (s = Math.max((r - o) / 2, 0));
                var u = document.createElement("div");
                if (u.className = "pdf-page", u.style.height = (r + Xr.pdfPageHeightOffset) * l + "px", e.parentNode.insertBefore(u, e), u.appendChild(e), e.style.left = i + "px", e.style.top = s + "px", e.style.width = n + "px", e.slideBackgroundElement && u.insertBefore(e.slideBackgroundElement, e), Xr.showNotes) {
                    var c = Ft(e);
                    if (c) {
                        var d = 8,
                            p = "string" == typeof Xr.showNotes ? Xr.showNotes : "inline",
                            h = document.createElement("div");
                        h.classList.add("speaker-notes"), h.classList.add("speaker-notes-pdf"), h.setAttribute("data-layout", p), h.innerHTML = c, "separate-page" === p ? u.parentNode.insertBefore(h, u.nextSibling) : (h.style.left = d + "px", h.style.bottom = d + "px", h.style.width = t - 2 * d + "px", u.appendChild(h))
                    }
                }
                if (Xr.slideNumber && /all|print/i.test(Xr.showSlideNumber)) {
                    var m = parseInt(e.getAttribute("data-index-h"), 10) + 1,
                        f = parseInt(e.getAttribute("data-index-v"), 10) + 1,
                        g = document.createElement("div");
                    g.classList.add("slide-number"), g.classList.add("slide-number-pdf"), g.innerHTML = gt(m, ".", f), u.appendChild(g)
                }
            }
        }), v(Qr.wrapper.querySelectorAll(Or + " .fragment")).forEach(function(e) {
            e.classList.add("visible")
        }), N("pdf-ready")
    }

    function l() {
        setInterval(function() {
            (0 !== Qr.wrapper.scrollTop || 0 !== Qr.wrapper.scrollLeft) && (Qr.wrapper.scrollTop = 0, Qr.wrapper.scrollLeft = 0)
        }, 1e3)
    }

    function u(e, t, r, n) {
        for (var a = e.querySelectorAll("." + r), i = 0; i < a.length; i++) {
            var s = a[i];
            if (s.parentNode === e) return s
        }
        var o = document.createElement(t);
        return o.className = r, "string" == typeof n && (o.innerHTML = n), e.appendChild(o), o
    }

    function c() {
        M();
        Qr.background.innerHTML = "", Qr.background.classList.add("no-transition"), v(Qr.wrapper.querySelectorAll(Br)).forEach(function(e) {
            var t = d(e, Qr.background);
            v(e.querySelectorAll("section")).forEach(function(e) {
                d(e, t), t.classList.add("stack")
            })
        }), Xr.parallaxBackgroundImage ? (Qr.background.style.backgroundImage = 'url("' + Xr.parallaxBackgroundImage + '")', Qr.background.style.backgroundSize = Xr.parallaxBackgroundSize, setTimeout(function() {
            Qr.wrapper.classList.add("has-parallax-background")
        }, 1)) : (Qr.background.style.backgroundImage = "", Qr.wrapper.classList.remove("has-parallax-background"))
    }

    function d(e, t) {
        var r = {
                background: e.getAttribute("data-background"),
                backgroundSize: e.getAttribute("data-background-size"),
                backgroundImage: e.getAttribute("data-background-image"),
                backgroundVideo: e.getAttribute("data-background-video"),
                backgroundIframe: e.getAttribute("data-background-iframe"),
                backgroundColor: e.getAttribute("data-background-color"),
                backgroundRepeat: e.getAttribute("data-background-repeat"),
                backgroundPosition: e.getAttribute("data-background-position"),
                backgroundTransition: e.getAttribute("data-background-transition")
            },
            n = document.createElement("div");
        n.className = "slide-background " + e.className.replace(/present|past|future/, ""), r.background && (/^(http|file|\/\/)/gi.test(r.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#]|$)/gi.test(r.background) ? e.setAttribute("data-background-image", r.background) : n.style.background = r.background), (r.background || r.backgroundColor || r.backgroundImage || r.backgroundVideo || r.backgroundIframe) && n.setAttribute("data-background-hash", r.background + r.backgroundSize + r.backgroundImage + r.backgroundVideo + r.backgroundIframe + r.backgroundColor + r.backgroundRepeat + r.backgroundPosition + r.backgroundTransition), r.backgroundSize && (n.style.backgroundSize = r.backgroundSize), r.backgroundSize && n.setAttribute("data-background-size", r.backgroundSize), r.backgroundColor && (n.style.backgroundColor = r.backgroundColor), r.backgroundRepeat && (n.style.backgroundRepeat = r.backgroundRepeat), r.backgroundPosition && (n.style.backgroundPosition = r.backgroundPosition), r.backgroundTransition && n.setAttribute("data-background-transition", r.backgroundTransition), t.appendChild(n), e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), e.slideBackgroundElement = n;
        var a = window.getComputedStyle(n);
        if (a && a.backgroundColor) {
            var i = S(a.backgroundColor);
            i && 0 !== i.a && e.classList.add(E(a.backgroundColor) < 128 ? "has-dark-background" : "has-light-background")
        }
        return n
    }

    function p() {
        Xr.postMessage && window.addEventListener("message", function(e) {
            var t = e.data;
            "string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof Mr[t.method] && Mr[t.method].apply(Mr, t.args))
        }, !1)
    }

    function h(e) {
        var t = Qr.wrapper.querySelectorAll(Or).length;
        Qr.wrapper.classList.remove(Xr.transition), "object" == typeof e && g(Xr, e), en.transforms3d === !1 && (Xr.transition = "linear"), Qr.wrapper.classList.add(Xr.transition), Qr.wrapper.setAttribute("data-transition-speed", Xr.transitionSpeed), Qr.wrapper.setAttribute("data-background-transition", Xr.backgroundTransition), Qr.controls.style.display = Xr.controls ? "block" : "none", Qr.progress.style.display = Xr.progress ? "block" : "none", Qr.controls.setAttribute("data-controls-layout", Xr.controlsLayout), Qr.controls.setAttribute("data-controls-back-arrows", Xr.controlsBackArrows), Xr.shuffle && lt(), Xr.rtl ? Qr.wrapper.classList.add("rtl") : Qr.wrapper.classList.remove("rtl"), Xr.center ? Qr.wrapper.classList.add("center") : Qr.wrapper.classList.remove("center"), Xr.pause === !1 && Q(), Xr.showNotes && Qr.speakerNotes.setAttribute("data-layout", "string" == typeof Xr.showNotes ? Xr.showNotes : "inline"), Xr.mouseWheel ? (document.addEventListener("DOMMouseScroll", pr, !1), document.addEventListener("mousewheel", pr, !1)) : (document.removeEventListener("DOMMouseScroll", pr, !1), document.removeEventListener("mousewheel", pr, !1)), Xr.rollingLinks ? q() : C(), Xr.previewLinks ? (P(), R("[data-preview-link=false]")) : (R(), P("[data-preview-link]:not([data-preview-link=false])")), Dr && (Dr.destroy(), Dr = null), t > 1 && Xr.autoSlide && Xr.autoSlideStoppable && en.canvas && en.requestAnimationFrame && (Dr = new Lr(Qr.wrapper, function() {
            return Math.min(Math.max((Date.now() - on) / an, 0), 1)
        }), Dr.on("click", Er), ln = !1), Xr.fragments === !1 && v(Qr.slides.querySelectorAll(".fragment")).forEach(function(e) {
            e.classList.add("visible"), e.classList.remove("current-fragment")
        });
        var r = "none";
        Xr.slideNumber && !M() && ("all" === Xr.showSlideNumber ? r = "block" : "speaker" === Xr.showSlideNumber && qt() && (r = "block")), Qr.slideNumber.style.display = r, it()
    }

    function m() {
        if (nn = !0, window.addEventListener("hashchange", wr, !1), window.addEventListener("resize", xr, !1), Xr.touch && (Qr.wrapper.addEventListener("touchstart", sr, !1), Qr.wrapper.addEventListener("touchmove", or, !1), Qr.wrapper.addEventListener("touchend", lr, !1), window.navigator.pointerEnabled ? (Qr.wrapper.addEventListener("pointerdown", ur, !1), Qr.wrapper.addEventListener("pointermove", cr, !1), Qr.wrapper.addEventListener("pointerup", dr, !1)) : window.navigator.msPointerEnabled && (Qr.wrapper.addEventListener("MSPointerDown", ur, !1), Qr.wrapper.addEventListener("MSPointerMove", cr, !1), Qr.wrapper.addEventListener("MSPointerUp", dr, !1))), Xr.keyboard && (document.addEventListener("keydown", ir, !1), document.addEventListener("keypress", ar, !1)), Xr.progress && Qr.progress && Qr.progress.addEventListener("click", hr, !1), Xr.focusBodyOnPageVisibilityChange) {
            var e;
            "hidden" in document ? e = "visibilitychange" : "msHidden" in document ? e = "msvisibilitychange" : "webkitHidden" in document && (e = "webkitvisibilitychange"), e && document.addEventListener(e, kr, !1)
        }
        var t = ["touchstart", "click"];
        Vr.match(/android/gi) && (t = ["touchstart"]), t.forEach(function(e) {
            Qr.controlsLeft.forEach(function(t) {
                t.addEventListener(e, mr, !1)
            }), Qr.controlsRight.forEach(function(t) {
                t.addEventListener(e, fr, !1)
            }), Qr.controlsUp.forEach(function(t) {
                t.addEventListener(e, gr, !1)
            }), Qr.controlsDown.forEach(function(t) {
                t.addEventListener(e, vr, !1)
            }), Qr.controlsPrev.forEach(function(t) {
                t.addEventListener(e, yr, !1)
            }), Qr.controlsNext.forEach(function(t) {
                t.addEventListener(e, br, !1)
            })
        })
    }

    function f() {
        nn = !1, document.removeEventListener("keydown", ir, !1), document.removeEventListener("keypress", ar, !1), window.removeEventListener("hashchange", wr, !1), window.removeEventListener("resize", xr, !1), Qr.wrapper.removeEventListener("touchstart", sr, !1), Qr.wrapper.removeEventListener("touchmove", or, !1), Qr.wrapper.removeEventListener("touchend", lr, !1), window.navigator.pointerEnabled ? (Qr.wrapper.removeEventListener("pointerdown", ur, !1), Qr.wrapper.removeEventListener("pointermove", cr, !1), Qr.wrapper.removeEventListener("pointerup", dr, !1)) : window.navigator.msPointerEnabled && (Qr.wrapper.removeEventListener("MSPointerDown", ur, !1), Qr.wrapper.removeEventListener("MSPointerMove", cr, !1), Qr.wrapper.removeEventListener("MSPointerUp", dr, !1)), Xr.progress && Qr.progress && Qr.progress.removeEventListener("click", hr, !1), ["touchstart", "click"].forEach(function(e) {
            Qr.controlsLeft.forEach(function(t) {
                t.removeEventListener(e, mr, !1)
            }), Qr.controlsRight.forEach(function(t) {
                t.removeEventListener(e, fr, !1)
            }), Qr.controlsUp.forEach(function(t) {
                t.removeEventListener(e, gr, !1)
            }), Qr.controlsDown.forEach(function(t) {
                t.removeEventListener(e, vr, !1)
            }), Qr.controlsPrev.forEach(function(t) {
                t.removeEventListener(e, yr, !1)
            }), Qr.controlsNext.forEach(function(t) {
                t.removeEventListener(e, br, !1)
            })
        })
    }

    function g(e, t) {
        for (var r in t) e[r] = t[r]
    }

    function v(e) {
        return Array.prototype.slice.call(e)
    }

    function y(e) {
        if ("string" == typeof e) {
            if ("null" === e) return null;
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e.match(/^[\d\.]+$/)) return parseFloat(e)
        }
        return e
    }

    function b(e, t) {
        var r = e.x - t.x,
            n = e.y - t.y;
        return Math.sqrt(r * r + n * n)
    }

    function w(e, t) {
        e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.transform = t
    }

    function x(e) {
        "string" == typeof e.layout && (Zr.layout = e.layout), "string" == typeof e.overview && (Zr.overview = e.overview), Zr.layout ? w(Qr.slides, Zr.layout + " " + Zr.overview) : w(Qr.slides, Zr.overview)
    }

    function k(e) {
        var t = document.createElement("style");
        t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
    }

    function A(e, t) {
        for (var r = e.parentNode; r;) {
            var n = r.matches || r.matchesSelector || r.msMatchesSelector;
            if (n && n.call(r, t)) return r;
            r = r.parentNode
        }
        return null
    }

    function S(e) {
        var t = e.match(/^#([0-9a-f]{3})$/i);
        if (t && t[1]) return t = t[1], {
            r: 17 * parseInt(t.charAt(0), 16),
            g: 17 * parseInt(t.charAt(1), 16),
            b: 17 * parseInt(t.charAt(2), 16)
        };
        var r = e.match(/^#([0-9a-f]{6})$/i);
        if (r && r[1]) return r = r[1], {
            r: parseInt(r.substr(0, 2), 16),
            g: parseInt(r.substr(2, 2), 16),
            b: parseInt(r.substr(4, 2), 16)
        };
        var n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
        if (n) return {
            r: parseInt(n[1], 10),
            g: parseInt(n[2], 10),
            b: parseInt(n[3], 10)
        };
        var a = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
        return a ? {
            r: parseInt(a[1], 10),
            g: parseInt(a[2], 10),
            b: parseInt(a[3], 10),
            a: parseFloat(a[4])
        } : null
    }

    function E(e) {
        return "string" == typeof e && (e = S(e)), e ? (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 : null
    }

    function L(e, t) {
        if (t = t || 0, e) {
            var r, n = e.style.height;
            return e.style.height = "0px", r = t - e.parentNode.offsetHeight, e.style.height = n + "px", r
        }
        return t
    }

    function M() {
        return /print-pdf/gi.test(window.location.search)
    }

    function z() {
        Xr.hideAddressBar && Pr && (window.addEventListener("load", T, !1), window.addEventListener("orientationchange", T, !1))
    }

    function T() {
        setTimeout(function() {
            window.scrollTo(0, 1)
        }, 10)
    }

    function N(e, t) {
        var r = document.createEvent("HTMLEvents", 1, 2);
        r.initEvent(e, !0, !0), g(r, t), Qr.wrapper.dispatchEvent(r), Xr.postMessageEvents && window.parent !== window.self && window.parent.postMessage(JSON.stringify({
            namespace: "reveal",
            eventName: e,
            state: Ht()
        }), "*")
    }

    function q() {
        if (en.transforms3d && !("msPerspective" in document.body.style))
            for (var e = Qr.wrapper.querySelectorAll(Or + " a"), t = 0, r = e.length; r > t; t++) {
                var n = e[t];
                if (!(!n.textContent || n.querySelector("*") || n.className && n.classList.contains(n, "roll"))) {
                    var a = document.createElement("span");
                    a.setAttribute("data-title", n.text), a.innerHTML = n.innerHTML, n.classList.add("roll"), n.innerHTML = "", n.appendChild(a)
                }
            }
    }

    function C() {
        for (var e = Qr.wrapper.querySelectorAll(Or + " a.roll"), t = 0, r = e.length; r > t; t++) {
            var n = e[t],
                a = n.querySelector("span");
            a && (n.classList.remove("roll"), n.innerHTML = a.innerHTML)
        }
    }

    function P(e) {
        var t = v(document.querySelectorAll(e ? e : "a"));
        t.forEach(function(e) {
            /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Sr, !1)
        })
    }

    function R(e) {
        var t = v(document.querySelectorAll(e ? e : "a"));
        t.forEach(function(e) {
            /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Sr, !1)
        })
    }

    function D(e) {
        B(), Qr.overlay = document.createElement("div"), Qr.overlay.classList.add("overlay"), Qr.overlay.classList.add("overlay-preview"), Qr.wrapper.appendChild(Qr.overlay), Qr.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', '<a class="external" href="' + e + '" target="_blank"><span class="icon"></span></a>', "</header>", '<div class="spinner"></div>', '<div class="viewport">', '<iframe src="' + e + '"></iframe>', '<small class="viewport-inner">', '<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>', "</small>", "</div>"].join(""), Qr.overlay.querySelector("iframe").addEventListener("load", function() {
            Qr.overlay.classList.add("loaded")
        }, !1), Qr.overlay.querySelector(".close").addEventListener("click", function(e) {
            B(), e.preventDefault()
        }, !1), Qr.overlay.querySelector(".external").addEventListener("click", function() {
            B()
        }, !1), setTimeout(function() {
            Qr.overlay.classList.add("visible")
        }, 1)
    }

    function I(e) {
        "boolean" == typeof e ? e ? O() : B() : Qr.overlay ? B() : O()
    }

    function O() {
        if (Xr.help) {
            B(), Qr.overlay = document.createElement("div"), Qr.overlay.classList.add("overlay"), Qr.overlay.classList.add("overlay-help"), Qr.wrapper.appendChild(Qr.overlay);
            var e = '<p class="title">Keyboard Shortcuts</p><br/>';
            e += "<table><th>KEY</th><th>ACTION</th>";
            for (var t in cn) e += "<tr><td>" + t + "</td><td>" + cn[t] + "</td></tr>";
            e += "</table>", Qr.overlay.innerHTML = ["<header>", '<a class="close" href="#"><span class="icon"></span></a>', "</header>", '<div class="viewport">', '<div class="viewport-inner">' + e + "</div>", "</div>"].join(""), Qr.overlay.querySelector(".close").addEventListener("click", function(e) {
                B(), e.preventDefault()
            }, !1), setTimeout(function() {
                Qr.overlay.classList.add("visible")
            }, 1)
        }
    }

    function B() {
        Qr.overlay && (Qr.overlay.parentNode.removeChild(Qr.overlay), Qr.overlay = null)
    }

    function F() {
        if (Qr.wrapper && !M()) {
            var e = V();
            H(Xr.width, Xr.height), Qr.slides.style.width = e.width + "px", Qr.slides.style.height = e.height + "px", Jr = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), Jr = Math.max(Jr, Xr.minScale), Jr = Math.min(Jr, Xr.maxScale), 1 === Jr ? (Qr.slides.style.zoom = "", Qr.slides.style.left = "", Qr.slides.style.top = "", Qr.slides.style.bottom = "", Qr.slides.style.right = "", x({
                layout: ""
            })) : Jr > 1 && en.zoom ? (Qr.slides.style.zoom = Jr, Qr.slides.style.left = "", Qr.slides.style.top = "", Qr.slides.style.bottom = "", Qr.slides.style.right = "", x({
                layout: ""
            })) : (Qr.slides.style.zoom = "", Qr.slides.style.left = "50%", Qr.slides.style.top = "50%", Qr.slides.style.bottom = "auto", Qr.slides.style.right = "auto", x({
                layout: "translate(-50%, -50%) scale(" + Jr + ")"
            }));
            for (var t = v(Qr.wrapper.querySelectorAll(Or)), r = 0, n = t.length; n > r; r++) {
                var a = t[r];
                "none" !== a.style.display && (a.style.top = Xr.center || a.classList.contains("center") ? a.classList.contains("stack") ? 0 : Math.max((e.height - a.scrollHeight) / 2, 0) + "px" : "")
            }
            mt(), bt(), $() && _()
        }
    }

    function H(e, t) {
        v(Qr.slides.querySelectorAll("section > .stretch")).forEach(function(r) {
            var n = L(r, t);
            if (/(img|video)/gi.test(r.nodeName)) {
                var a = r.naturalWidth || r.videoWidth,
                    i = r.naturalHeight || r.videoHeight,
                    s = Math.min(e / a, n / i);
                r.style.width = a * s + "px", r.style.height = i * s + "px"
            } else r.style.width = e + "px", r.style.height = n + "px"
        })
    }

    function V(e, t) {
        var r = {
            width: Xr.width,
            height: Xr.height,
            presentationWidth: e || Qr.wrapper.offsetWidth,
            presentationHeight: t || Qr.wrapper.offsetHeight
        };
        return r.presentationWidth -= r.presentationWidth * Xr.margin, r.presentationHeight -= r.presentationHeight * Xr.margin, "string" == typeof r.width && /%$/.test(r.width) && (r.width = parseInt(r.width, 10) / 100 * r.presentationWidth), "string" == typeof r.height && /%$/.test(r.height) && (r.height = parseInt(r.height, 10) / 100 * r.presentationHeight), r
    }

    function X(e, t) {
        "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
    }

    function W(e) {
        if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
            var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
            return parseInt(e.getAttribute(t) || 0, 10)
        }
        return 0
    }

    function U() {
        if (Xr.overview && !$()) {
            jr = !0, Qr.wrapper.classList.add("overview"), Qr.wrapper.classList.remove("overview-deactivating"), en.overviewTransitions && setTimeout(function() {
                Qr.wrapper.classList.add("overview-animated")
            }, 1), Gt(), Qr.slides.appendChild(Qr.background), v(Qr.wrapper.querySelectorAll(Or)).forEach(function(e) {
                e.classList.contains("stack") || e.addEventListener("click", Ar, !0)
            });
            var e = 70,
                t = V();
            _r = t.width + e, Gr = t.height + e, Xr.rtl && (_r = -_r), ct(), j(), _(), F(), N("overviewshown", {
                indexh: zr,
                indexv: Tr,
                currentSlide: qr
            })
        }
    }

    function j() {
        v(Qr.wrapper.querySelectorAll(Br)).forEach(function(e, t) {
            e.setAttribute("data-index-h", t), w(e, "translate3d(" + t * _r + "px, 0, 0)"), e.classList.contains("stack") && v(e.querySelectorAll("section")).forEach(function(e, r) {
                e.setAttribute("data-index-h", t), e.setAttribute("data-index-v", r), w(e, "translate3d(0, " + r * Gr + "px, 0)")
            })
        }), v(Qr.background.childNodes).forEach(function(e, t) {
            w(e, "translate3d(" + t * _r + "px, 0, 0)"), v(e.querySelectorAll(".slide-background")).forEach(function(e, t) {
                w(e, "translate3d(0, " + t * Gr + "px, 0)")
            })
        })
    }

    function _() {
        var e = Math.min(window.innerWidth, window.innerHeight),
            t = Math.max(e / 5, 150) / e;
        x({
            overview: ["scale(" + t + ")", "translateX(" + -zr * _r + "px)", "translateY(" + -Tr * Gr + "px)"].join(" ")
        })
    }

    function G() {
        Xr.overview && (jr = !1, Qr.wrapper.classList.remove("overview"), Qr.wrapper.classList.remove("overview-animated"), Qr.wrapper.classList.add("overview-deactivating"), setTimeout(function() {
            Qr.wrapper.classList.remove("overview-deactivating")
        }, 1), Qr.wrapper.appendChild(Qr.background), v(Qr.wrapper.querySelectorAll(Or)).forEach(function(e) {
            w(e, ""), e.removeEventListener("click", Ar, !0)
        }), v(Qr.background.querySelectorAll(".slide-background")).forEach(function(e) {
            w(e, "")
        }), x({
            overview: ""
        }), at(zr, Tr), F(), _t(), N("overviewhidden", {
            indexh: zr,
            indexv: Tr,
            currentSlide: qr
        }))
    }

    function Y(e) {
        "boolean" == typeof e ? e ? U() : G() : $() ? G() : U()
    }

    function $() {
        return jr
    }

    function K(e) {
        return e = e ? e : qr, e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
    }

    function J() {
        var e = document.documentElement,
            t = e.requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
        t && t.apply(e)
    }

    function Z() {
        if (Xr.pause) {
            var e = Qr.wrapper.classList.contains("paused");
            Gt(), Qr.wrapper.classList.add("paused"), e === !1 && N("paused")
        }
    }

    function Q() {
        var e = Qr.wrapper.classList.contains("paused");
        Qr.wrapper.classList.remove("paused"), _t(), e && N("resumed")
    }

    function et(e) {
        "boolean" == typeof e ? e ? Z() : Q() : tt() ? Q() : Z()
    }

    function tt() {
        return Qr.wrapper.classList.contains("paused")
    }

    function rt(e) {
        "boolean" == typeof e ? e ? $t() : Yt() : ln ? $t() : Yt()
    }

    function nt() {
        return !(!an || ln)
    }

    function at(e, t, r, n) {
        Nr = qr;
        var a = Qr.wrapper.querySelectorAll(Br);
        if (0 !== a.length) {
            void 0 !== t || $() || (t = W(a[e])), Nr && Nr.parentNode && Nr.parentNode.classList.contains("stack") && X(Nr.parentNode, Tr);
            var i = Kr.concat();
            Kr.length = 0;
            var o = zr || 0,
                l = Tr || 0;
            zr = ut(Br, void 0 === e ? zr : e), Tr = ut(Fr, void 0 === t ? Tr : t), ct(), F();
            e: for (var u = 0, c = Kr.length; c > u; u++) {
                for (var d = 0; d < i.length; d++)
                    if (i[d] === Kr[u]) {
                        i.splice(d, 1);
                        continue e
                    }
                document.documentElement.classList.add(Kr[u]), N(Kr[u])
            }
            for (; i.length;) document.documentElement.classList.remove(i.pop());
            $() && _();
            var p = a[zr],
                h = p.querySelectorAll("section");
            qr = h[Tr] || p, "undefined" != typeof r && Wt(r);
            var m = zr !== o || Tr !== l;
            m ? N("slidechanged", {
                indexh: zr,
                indexv: Tr,
                previousSlide: Nr,
                currentSlide: qr,
                origin: n
            }) : Nr = null, Nr && (Nr.classList.remove("present"), Nr.setAttribute("aria-hidden", "true"), Qr.wrapper.querySelector(Hr).classList.contains("present") && setTimeout(function() {
                var e, t = v(Qr.wrapper.querySelectorAll(Br + ".stack"));
                for (e in t) t[e] && X(t[e], 0)
            }, 0)), (m || !Nr) && (zt(Nr), Et(qr)), Qr.statusDiv.textContent = s(qr), vt(), mt(), yt(), bt(), ft(), dt(), Pt(), _t()
        }
    }

    function it() {
        f(), m(), F(), an = Xr.autoSlide, _t(), c(), Pt(), ot(), vt(), mt(), ft(), ct(), yt(!0), pt(), dt(), St(), Xr.autoPlayMedia === !1 ? zt(qr) : Et(qr), $() && j()
    }

    function st() {
        var e = v(Qr.wrapper.querySelectorAll(Br));
        e.forEach(function(e) {
            var t = v(e.querySelectorAll("section"));
            t.forEach(function(e, t) {
                t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
            })
        })
    }

    function ot() {
        var e = v(Qr.wrapper.querySelectorAll(Br));
        e.forEach(function(e) {
            var t = v(e.querySelectorAll("section"));
            t.forEach(function(e) {
                Xt(e.querySelectorAll(".fragment"))
            }), 0 === t.length && Xt(e.querySelectorAll(".fragment"))
        })
    }

    function lt() {
        var e = v(Qr.wrapper.querySelectorAll(Br));
        e.forEach(function(t) {
            Qr.slides.insertBefore(t, e[Math.floor(Math.random() * e.length)])
        })
    }

    function ut(e, t) {
        var r = v(Qr.wrapper.querySelectorAll(e)),
            n = r.length,
            a = M();
        if (n) {
            Xr.loop && (t %= n, 0 > t && (t = n + t)), t = Math.max(Math.min(t, n - 1), 0);
            for (var i = 0; n > i; i++) {
                var s = r[i],
                    o = Xr.rtl && !K(s);
                if (s.classList.remove("past"), s.classList.remove("present"), s.classList.remove("future"), s.setAttribute("hidden", ""), s.setAttribute("aria-hidden", "true"), s.querySelector("section") && s.classList.add("stack"), a) s.classList.add("present");
                else if (t > i) {
                    if (s.classList.add(o ? "future" : "past"), Xr.fragments)
                        for (var l = v(s.querySelectorAll(".fragment")); l.length;) {
                            var u = l.pop();
                            u.classList.add("visible"), u.classList.remove("current-fragment")
                        }
                } else if (i > t && (s.classList.add(o ? "past" : "future"), Xr.fragments))
                    for (var c = v(s.querySelectorAll(".fragment.visible")); c.length;) {
                        var d = c.pop();
                        d.classList.remove("visible"), d.classList.remove("current-fragment")
                    }
            }
            r[t].classList.add("present"), r[t].removeAttribute("hidden"), r[t].removeAttribute("aria-hidden");
            var p = r[t].getAttribute("data-state");
            p && (Kr = Kr.concat(p.split(" ")))
        } else t = 0;
        return t
    }

    function ct() {
        var e, t, r = v(Qr.wrapper.querySelectorAll(Br)),
            n = r.length;
        if (n && "undefined" != typeof zr) {
            var a = $() ? 10 : Xr.viewDistance;
            Pr && (a = $() ? 6 : 2), M() && (a = Number.MAX_VALUE);
            for (var i = 0; n > i; i++) {
                var s = r[i],
                    o = v(s.querySelectorAll("section")),
                    l = o.length;
                if (e = Math.abs((zr || 0) - i) || 0, Xr.loop && (e = Math.abs(((zr || 0) - i) % (n - a)) || 0), a > e ? wt(s) : xt(s), l)
                    for (var u = W(s), c = 0; l > c; c++) {
                        var d = o[c];
                        t = Math.abs(i === (zr || 0) ? (Tr || 0) - c : c - u), a > e + t ? wt(d) : xt(d)
                    }
            }
            Qr.wrapper.querySelectorAll(".slides>section>section").length ? Qr.wrapper.classList.add("has-vertical-slides") : Qr.wrapper.classList.remove("has-vertical-slides"), Qr.wrapper.querySelectorAll(".slides>section").length > 1 ? Qr.wrapper.classList.add("has-horizontal-slides") : Qr.wrapper.classList.remove("has-horizontal-slides")
        }
    }

    function dt() {
        Xr.showNotes && Qr.speakerNotes && qr && !M() && (Qr.speakerNotes.innerHTML = Ft() || '<span class="notes-placeholder">No notes on this slide.</span>')
    }

    function pt() {
        Xr.showNotes && ht() ? Qr.wrapper.classList.add("show-notes") : Qr.wrapper.classList.remove("show-notes")
    }

    function ht() {
        return Qr.slides.querySelectorAll("[data-notes], aside.notes").length > 0
    }

    function mt() {
        Xr.progress && Qr.progressbar && (Qr.progressbar.style.width = Nt() * Qr.wrapper.offsetWidth + "px")
    }

    function ft() {
        if (Xr.slideNumber && Qr.slideNumber) {
            var e = [],
                t = "h.v";
            switch ("string" == typeof Xr.slideNumber && (t = Xr.slideNumber), t) {
                case "c":
                    e.push(Tt() + 1);
                    break;
                case "c/t":
                    e.push(Tt() + 1, "/", It());
                    break;
                case "h/v":
                    e.push(zr + 1), K() && e.push("/", Tr + 1);
                    break;
                default:
                    e.push(zr + 1), K() && e.push(".", Tr + 1)
            }
            Qr.slideNumber.innerHTML = gt(e[0], e[1], e[2])
        }
    }

    function gt(e, t, r) {
        return "number" != typeof r || isNaN(r) ? '<span class="slide-number-a">' + e + "</span>" : '<span class="slide-number-a">' + e + '</span><span class="slide-number-delimiter">' + t + '</span><span class="slide-number-b">' + r + "</span>"
    }

    function vt() {
        var e = kt(),
            t = At();
        Qr.controlsLeft.concat(Qr.controlsRight).concat(Qr.controlsUp).concat(Qr.controlsDown).concat(Qr.controlsPrev).concat(Qr.controlsNext).forEach(function(e) {
            e.classList.remove("enabled"), e.classList.remove("fragmented"), e.setAttribute("disabled", "disabled")
        }), e.left && Qr.controlsLeft.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), e.right && Qr.controlsRight.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), e.up && Qr.controlsUp.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), e.down && Qr.controlsDown.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), (e.left || e.up) && Qr.controlsPrev.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), (e.right || e.down) && Qr.controlsNext.forEach(function(e) {
            e.classList.add("enabled"), e.removeAttribute("disabled")
        }), qr && (t.prev && Qr.controlsPrev.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), t.next && Qr.controlsNext.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), K(qr) ? (t.prev && Qr.controlsUp.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), t.next && Qr.controlsDown.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        })) : (t.prev && Qr.controlsLeft.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }), t.next && Qr.controlsRight.forEach(function(e) {
            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
        }))), Xr.controlsTutorial && (!$r && e.down ? Qr.controlsDownArrow.classList.add("highlight") : (Qr.controlsDownArrow.classList.remove("highlight"), !Yr && e.right && 0 === Tr ? Qr.controlsRightArrow.classList.add("highlight") : Qr.controlsRightArrow.classList.remove("highlight")))
    }

    function yt(e) {
        var t = null,
            r = Xr.rtl ? "future" : "past",
            n = Xr.rtl ? "past" : "future";
        if (v(Qr.background.childNodes).forEach(function(a, i) {
                a.classList.remove("past"), a.classList.remove("present"), a.classList.remove("future"), zr > i ? a.classList.add(r) : i > zr ? a.classList.add(n) : (a.classList.add("present"), t = a), (e || i === zr) && v(a.querySelectorAll(".slide-background")).forEach(function(e, r) {
                    e.classList.remove("past"), e.classList.remove("present"), e.classList.remove("future"), Tr > r ? e.classList.add("past") : r > Tr ? e.classList.add("future") : (e.classList.add("present"), i === zr && (t = e))
                })
            }), Cr && zt(Cr), t) {
            Et(t);
            var a = t.style.backgroundImage || "";
            /\.gif/i.test(a) && (t.style.backgroundImage = "", window.getComputedStyle(t).opacity, t.style.backgroundImage = a);
            var i = Cr ? Cr.getAttribute("data-background-hash") : null,
                s = t.getAttribute("data-background-hash");
            s && s === i && t !== Cr && Qr.background.classList.add("no-transition"), Cr = t
        }
        qr && ["has-light-background", "has-dark-background"].forEach(function(e) {
            qr.classList.contains(e) ? Qr.wrapper.classList.add(e) : Qr.wrapper.classList.remove(e)
        }), setTimeout(function() {
            Qr.background.classList.remove("no-transition")
        }, 1)
    }

    function bt() {
        if (Xr.parallaxBackgroundImage) {
            var e, t, r = Qr.wrapper.querySelectorAll(Br),
                n = Qr.wrapper.querySelectorAll(Fr),
                a = Qr.background.style.backgroundSize.split(" ");
            1 === a.length ? e = t = parseInt(a[0], 10) : (e = parseInt(a[0], 10), t = parseInt(a[1], 10));
            var i, s, o = Qr.background.offsetWidth,
                l = r.length;
            i = "number" == typeof Xr.parallaxBackgroundHorizontal ? Xr.parallaxBackgroundHorizontal : l > 1 ? (e - o) / (l - 1) : 0, s = i * zr * -1;
            var u, c, d = Qr.background.offsetHeight,
                p = n.length;
            u = "number" == typeof Xr.parallaxBackgroundVertical ? Xr.parallaxBackgroundVertical : (t - d) / (p - 1), c = p > 0 ? u * Tr : 0, Qr.background.style.backgroundPosition = s + "px " + -c + "px"
        }
    }

    function wt(e) {
        e.style.display = Xr.display, v(e.querySelectorAll("img[data-src], video[data-src], audio[data-src]")).forEach(function(e) {
            e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src")
        }), v(e.querySelectorAll("video, audio")).forEach(function(e) {
            var t = 0;
            v(e.querySelectorAll("source[data-src]")).forEach(function(e) {
                e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1
            }), t > 0 && e.load()
        });
        var t = Rt(e),
            r = Bt(t.h, t.v);
        if (r && (r.style.display = "block", r.hasAttribute("data-loaded") === !1)) {
            r.setAttribute("data-loaded", "true");
            var n = e.getAttribute("data-background-image"),
                a = e.getAttribute("data-background-video"),
                i = e.hasAttribute("data-background-video-loop"),
                s = e.hasAttribute("data-background-video-muted"),
                o = e.getAttribute("data-background-iframe");
            if (n) r.style.backgroundImage = "url(" + n + ")";
            else if (a && !qt()) {
                var l = document.createElement("video");
                i && l.setAttribute("loop", ""), s && (l.muted = !0), Pr && (l.muted = !0, l.autoplay = !0, l.setAttribute("playsinline", "")), a.split(",").forEach(function(e) {
                    l.innerHTML += '<source src="' + e + '">'
                }), r.appendChild(l)
            } else if (o) {
                var u = document.createElement("iframe");
                u.setAttribute("allowfullscreen", ""), u.setAttribute("mozallowfullscreen", ""), u.setAttribute("webkitallowfullscreen", ""), /autoplay=(1|true|yes)/gi.test(o) ? u.setAttribute("data-src", o) : u.setAttribute("src", o), u.style.width = "100%", u.style.height = "100%", u.style.maxHeight = "100%", u.style.maxWidth = "100%", r.appendChild(u)
            }
        }
    }

    function xt(e) {
        e.style.display = "none";
        var t = Rt(e),
            r = Bt(t.h, t.v);
        r && (r.style.display = "none"), v(e.querySelectorAll("video[data-lazy-loaded][src], audio[data-lazy-loaded][src]")).forEach(function(e) {
            e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
        }), v(e.querySelectorAll("video[data-lazy-loaded] source[src], audio source[src]")).forEach(function(e) {
            e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
        })
    }

    function kt() {
        var e = Qr.wrapper.querySelectorAll(Br),
            t = Qr.wrapper.querySelectorAll(Fr),
            r = {
                left: zr > 0 || Xr.loop,
                right: zr < e.length - 1 || Xr.loop,
                up: Tr > 0,
                down: Tr < t.length - 1
            };
        if (Xr.rtl) {
            var n = r.left;
            r.left = r.right, r.right = n
        }
        return r
    }

    function At() {
        if (qr && Xr.fragments) {
            var e = qr.querySelectorAll(".fragment"),
                t = qr.querySelectorAll(".fragment:not(.visible)");
            return {
                prev: e.length - t.length > 0,
                next: !!t.length
            }
        }
        return {
            prev: !1,
            next: !1
        }
    }

    function St() {
        var e = function(e, t, r) {
            v(Qr.slides.querySelectorAll("iframe[" + e + '*="' + t + '"]')).forEach(function(t) {
                var n = t.getAttribute(e);
                n && -1 === n.indexOf(r) && t.setAttribute(e, n + (/\?/.test(n) ? "&" : "?") + r)
            })
        };
        e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1")
    }

    function Et(e) {
        e && !qt() && (v(e.querySelectorAll('img[src$=".gif"]')).forEach(function(e) {
            e.setAttribute("src", e.getAttribute("src"))
        }), v(e.querySelectorAll("video, audio")).forEach(function(e) {
            if (!A(e, ".fragment") || A(e, ".fragment.visible")) {
                var t = Xr.autoPlayMedia;
                "boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!A(e, ".slide-background")), t && "function" == typeof e.play && (e.readyState > 1 ? Lt({
                    target: e
                }) : (e.removeEventListener("loadeddata", Lt), e.addEventListener("loadeddata", Lt)))
            }
        }), v(e.querySelectorAll("iframe[src]")).forEach(function(e) {
            (!A(e, ".fragment") || A(e, ".fragment.visible")) && Mt({
                target: e
            })
        }), v(e.querySelectorAll("iframe[data-src]")).forEach(function(e) {
            (!A(e, ".fragment") || A(e, ".fragment.visible")) && e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", Mt), e.addEventListener("load", Mt), e.setAttribute("src", e.getAttribute("data-src")))
        }))
    }

    function Lt(e) {
        var t = !!A(e.target, "html"),
            r = !!A(e.target, ".present");
        t && r && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", Lt)
    }

    function Mt(e) {
        var t = e.target;
        if (t && t.contentWindow) {
            var r = !!A(e.target, "html"),
                n = !!A(e.target, ".present");
            if (r && n) {
                var a = Xr.autoPlayMedia;
                "boolean" != typeof a && (a = t.hasAttribute("data-autoplay") || !!A(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && a ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && a ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*")
            }
        }
    }

    function zt(e) {
        e && e.parentNode && (v(e.querySelectorAll("video, audio")).forEach(function(e) {
            e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause())
        }), v(e.querySelectorAll("iframe")).forEach(function(e) {
            e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", Mt)
        }), v(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e) {
            !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
        }), v(e.querySelectorAll('iframe[src*="player.vimeo.com/"]')).forEach(function(e) {
            !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*")
        }), v(e.querySelectorAll("iframe[data-src]")).forEach(function(e) {
            e.setAttribute("src", "about:blank"), e.removeAttribute("src")
        }))
    }

    function Tt() {
        var e = v(Qr.wrapper.querySelectorAll(Br)),
            t = 0;
        e: for (var r = 0; r < e.length; r++) {
            for (var n = e[r], a = v(n.querySelectorAll("section")), i = 0; i < a.length; i++) {
                if (a[i].classList.contains("present")) break e;
                t++
            }
            if (n.classList.contains("present")) break;
            n.classList.contains("stack") === !1 && t++
        }
        return t
    }

    function Nt() {
        var e = It(),
            t = Tt();
        if (qr) {
            var r = qr.querySelectorAll(".fragment");
            if (r.length > 0) {
                var n = qr.querySelectorAll(".fragment.visible"),
                    a = .9;
                t += n.length / r.length * a
            }
        }
        return t / (e - 1)
    }

    function qt() {
        return !!window.location.search.match(/receiver/gi)
    }

    function Ct() {
        var e = window.location.hash,
            t = e.slice(2).split("/"),
            r = e.replace(/#|\//gi, "");
        if (isNaN(parseInt(t[0], 10)) && r.length) {
            var n;
            if (/^[a-zA-Z][\w:.-]*$/.test(r) && (n = document.getElementById(r)), n) {
                var a = Mr.getIndices(n);
                at(a.h, a.v)
            } else at(zr || 0, Tr || 0)
        } else {
            var i = parseInt(t[0], 10) || 0,
                s = parseInt(t[1], 10) || 0;
            (i !== zr || s !== Tr) && at(i, s)
        }
    }

    function Pt(e) {
        if (Xr.history)
            if (clearTimeout(rn), "number" == typeof e) rn = setTimeout(Pt, e);
            else if (qr) {
            var t = "/",
                r = qr.getAttribute("id");
            r && (r = r.replace(/[^a-zA-Z0-9\-\_\:\.]/g, "")), "string" == typeof r && r.length ? t = "/" + r : ((zr > 0 || Tr > 0) && (t += zr), Tr > 0 && (t += "/" + Tr)), window.location.hash = t
        }
    }

    function Rt(e) {
        var t, r = zr,
            n = Tr;
        if (e) {
            var a = K(e),
                i = a ? e.parentNode : e,
                s = v(Qr.wrapper.querySelectorAll(Br));
            r = Math.max(s.indexOf(i), 0), n = void 0, a && (n = Math.max(v(e.parentNode.querySelectorAll("section")).indexOf(e), 0))
        }
        if (!e && qr) {
            var o = qr.querySelectorAll(".fragment").length > 0;
            if (o) {
                var l = qr.querySelector(".current-fragment");
                t = l && l.hasAttribute("data-fragment-index") ? parseInt(l.getAttribute("data-fragment-index"), 10) : qr.querySelectorAll(".fragment.visible").length - 1
            }
        }
        return {
            h: r,
            v: n,
            f: t
        }
    }

    function Dt() {
        return v(Qr.wrapper.querySelectorAll(Or + ":not(.stack)"))
    }

    function It() {
        return Dt().length
    }

    function Ot(e, t) {
        var r = Qr.wrapper.querySelectorAll(Br)[e],
            n = r && r.querySelectorAll("section");
        return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : r
    }

    function Bt(e, t) {
        if (M()) {
            var r = Ot(e, t);
            return r ? r.slideBackgroundElement : void 0
        }
        var n = Qr.wrapper.querySelectorAll(".backgrounds>.slide-background")[e],
            a = n && n.querySelectorAll(".slide-background");
        return a && a.length && "number" == typeof t ? a ? a[t] : void 0 : n
    }

    function Ft(e) {
        if (e = e || qr, e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
        var t = e.querySelector("aside.notes");
        return t ? t.innerHTML : null
    }

    function Ht() {
        var e = Rt();
        return {
            indexh: e.h,
            indexv: e.v,
            indexf: e.f,
            paused: tt(),
            overview: $()
        }
    }

    function Vt(e) {
        if ("object" == typeof e) {
            at(y(e.indexh), y(e.indexv), y(e.indexf));
            var t = y(e.paused),
                r = y(e.overview);
            "boolean" == typeof t && t !== tt() && et(t), "boolean" == typeof r && r !== $() && Y(r)
        }
    }

    function Xt(e) {
        e = v(e);
        var t = [],
            r = [],
            n = [];
        e.forEach(function(e) {
            if (e.hasAttribute("data-fragment-index")) {
                var n = parseInt(e.getAttribute("data-fragment-index"), 10);
                t[n] || (t[n] = []), t[n].push(e)
            } else r.push([e])
        }), t = t.concat(r);
        var a = 0;
        return t.forEach(function(e) {
            e.forEach(function(e) {
                n.push(e), e.setAttribute("data-fragment-index", a)
            }), a++
        }), n
    }

    function Wt(e, t) {
        if (qr && Xr.fragments) {
            var r = Xt(qr.querySelectorAll(".fragment"));
            if (r.length) {
                if ("number" != typeof e) {
                    var n = Xt(qr.querySelectorAll(".fragment.visible")).pop();
                    e = n ? parseInt(n.getAttribute("data-fragment-index") || 0, 10) : -1
                }
                "number" == typeof t && (e += t);
                var a = [],
                    i = [];
                return v(r).forEach(function(t, r) {
                    t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), e >= r ? (t.classList.contains("visible") || a.push(t), t.classList.add("visible"), t.classList.remove("current-fragment"), Qr.statusDiv.textContent = s(t), r === e && (t.classList.add("current-fragment"), Et(t))) : (t.classList.contains("visible") && i.push(t), t.classList.remove("visible"), t.classList.remove("current-fragment"))
                }), i.length && N("fragmenthidden", {
                    fragment: i[0],
                    fragments: i
                }), a.length && N("fragmentshown", {
                    fragment: a[0],
                    fragments: a
                }), vt(), mt(), !(!a.length && !i.length)
            }
        }
        return !1
    }

    function Ut() {
        return Wt(null, 1)
    }

    function jt() {
        return Wt(null, -1)
    }

    function _t() {
        if (Gt(), qr && Xr.autoSlide !== !1) {
            var e = qr.querySelector(".current-fragment");
            e || (e = qr.querySelector(".fragment"));
            var t = e ? e.getAttribute("data-autoslide") : null,
                r = qr.parentNode ? qr.parentNode.getAttribute("data-autoslide") : null,
                n = qr.getAttribute("data-autoslide");
            an = t ? parseInt(t, 10) : n ? parseInt(n, 10) : r ? parseInt(r, 10) : Xr.autoSlide, 0 === qr.querySelectorAll(".fragment").length && v(qr.querySelectorAll("video, audio")).forEach(function(e) {
                e.hasAttribute("data-autoplay") && an && 1e3 * e.duration / e.playbackRate > an && (an = 1e3 * e.duration / e.playbackRate + 1e3)
            }), !an || ln || tt() || $() || Mr.isLastSlide() && !At().next && Xr.loop !== !0 || (sn = setTimeout(function() {
                "function" == typeof Xr.autoSlideMethod ? Xr.autoSlideMethod() : tr(), _t()
            }, an), on = Date.now()), Dr && Dr.setPlaying(-1 !== sn)
        }
    }

    function Gt() {
        clearTimeout(sn), sn = -1
    }

    function Yt() {
        an && !ln && (ln = !0, N("autoslidepaused"), clearTimeout(sn), Dr && Dr.setPlaying(!1))
    }

    function $t() {
        an && ln && (ln = !1, N("autoslideresumed"), _t())
    }

    function Kt() {
        Xr.rtl ? ($() || Ut() === !1) && kt().left && at(zr + 1) : ($() || jt() === !1) && kt().left && at(zr - 1)
    }

    function Jt() {
        Yr = !0, Xr.rtl ? ($() || jt() === !1) && kt().right && at(zr - 1) : ($() || Ut() === !1) && kt().right && at(zr + 1)
    }

    function Zt() {
        ($() || jt() === !1) && kt().up && at(zr, Tr - 1)
    }

    function Qt() {
        $r = !0, ($() || Ut() === !1) && kt().down && at(zr, Tr + 1)
    }

    function er() {
        if (jt() === !1)
            if (kt().up) Zt();
            else {
                var e;
                if (e = Xr.rtl ? v(Qr.wrapper.querySelectorAll(Br + ".future")).pop() : v(Qr.wrapper.querySelectorAll(Br + ".past")).pop()) {
                    var t = e.querySelectorAll("section").length - 1 || void 0,
                        r = zr - 1;
                    at(r, t)
                }
            }
    }

    function tr() {
        Yr = !0, $r = !0, Ut() === !1 && (kt().down ? Qt() : Xr.rtl ? Kt() : Jt())
    }

    function rr(e) {
        for (; e && "function" == typeof e.hasAttribute;) {
            if (e.hasAttribute("data-prevent-swipe")) return !0;
            e = e.parentNode
        }
        return !1
    }

    function nr() {
        Xr.autoSlideStoppable && Yt()
    }

    function ar(e) {
        e.shiftKey && 63 === e.charCode && I()
    }

    function ir(e) {
        if ("function" == typeof Xr.keyboardCondition && Xr.keyboardCondition() === !1) return !0;
        var t = ln;
        nr(e);
        var r = document.activeElement && "inherit" !== document.activeElement.contentEditable,
            n = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
            a = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className);
        if (!(r || n || a || e.shiftKey && 32 !== e.keyCode || e.altKey || e.ctrlKey || e.metaKey)) {
            var i, s = [66, 86, 190, 191];
            if ("object" == typeof Xr.keyboard)
                for (i in Xr.keyboard) "togglePause" === Xr.keyboard[i] && s.push(parseInt(i, 10));
            if (tt() && -1 === s.indexOf(e.keyCode)) return !1;
            var o = !1;
            if ("object" == typeof Xr.keyboard)
                for (i in Xr.keyboard)
                    if (parseInt(i, 10) === e.keyCode) {
                        var l = Xr.keyboard[i];
                        "function" == typeof l ? l.apply(null, [e]) : "string" == typeof l && "function" == typeof Mr[l] && Mr[l].call(), o = !0
                    }
            if (o === !1) switch (o = !0, e.keyCode) {
                case 80:
                case 33:
                    er();
                    break;
                case 78:
                case 34:
                    tr();
                    break;
                case 72:
                case 37:
                    Kt();
                    break;
                case 76:
                case 39:
                    Jt();
                    break;
                case 75:
                case 38:
                    Zt();
                    break;
                case 74:
                case 40:
                    Qt();
                    break;
                case 36:
                    at(0);
                    break;
                case 35:
                    at(Number.MAX_VALUE);
                    break;
                case 32:
                    $() ? G() : e.shiftKey ? er() : tr();
                    break;
                case 13:
                    $() ? G() : o = !1;
                    break;
                case 58:
                case 59:
                case 66:
                case 86:
                case 190:
                case 191:
                    et();
                    break;
                case 70:
                    J();
                    break;
                case 65:
                    Xr.autoSlideStoppable && rt(t);
                    break;
                default:
                    o = !1
            }
            o ? e.preventDefault && e.preventDefault() : 27 !== e.keyCode && 79 !== e.keyCode || !en.transforms3d || (Qr.overlay ? B() : Y(), e.preventDefault && e.preventDefault()), _t()
        }
    }

    function sr(e) {
        return rr(e.target) ? !0 : (un.startX = e.touches[0].clientX, un.startY = e.touches[0].clientY, un.startCount = e.touches.length, void(2 === e.touches.length && Xr.overview && (un.startSpan = b({
            x: e.touches[1].clientX,
            y: e.touches[1].clientY
        }, {
            x: un.startX,
            y: un.startY
        }))))
    }

    function or(e) {
        if (rr(e.target)) return !0;
        if (un.captured) Vr.match(/android/gi) && e.preventDefault();
        else {
            nr(e);
            var t = e.touches[0].clientX,
                r = e.touches[0].clientY;
            if (2 === e.touches.length && 2 === un.startCount && Xr.overview) {
                var n = b({
                    x: e.touches[1].clientX,
                    y: e.touches[1].clientY
                }, {
                    x: un.startX,
                    y: un.startY
                });
                Math.abs(un.startSpan - n) > un.threshold && (un.captured = !0, n < un.startSpan ? U() : G()), e.preventDefault()
            } else if (1 === e.touches.length && 2 !== un.startCount) {
                var a = t - un.startX,
                    i = r - un.startY;
                a > un.threshold && Math.abs(a) > Math.abs(i) ? (un.captured = !0, Kt()) : a < -un.threshold && Math.abs(a) > Math.abs(i) ? (un.captured = !0, Jt()) : i > un.threshold ? (un.captured = !0, Zt()) : i < -un.threshold && (un.captured = !0, Qt()), Xr.embedded ? (un.captured || K(qr)) && e.preventDefault() : e.preventDefault()
            }
        }
    }

    function lr() {
        un.captured = !1
    }

    function ur(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], sr(e))
    }

    function cr(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], or(e))
    }

    function dr(e) {
        (e.pointerType === e.MSPOINTER_TYPE_TOUCH || "touch" === e.pointerType) && (e.touches = [{
            clientX: e.clientX,
            clientY: e.clientY
        }], lr(e))
    }

    function pr(e) {
        if (Date.now() - tn > 600) {
            tn = Date.now();
            var t = e.detail || -e.wheelDelta;
            t > 0 ? tr() : 0 > t && er()
        }
    }

    function hr(e) {
        nr(e), e.preventDefault();
        var t = v(Qr.wrapper.querySelectorAll(Br)).length,
            r = Math.floor(e.clientX / Qr.wrapper.offsetWidth * t);
        Xr.rtl && (r = t - r), at(r)
    }

    function mr(e) {
        e.preventDefault(), nr(), Kt()
    }

    function fr(e) {
        e.preventDefault(), nr(), Jt()
    }

    function gr(e) {
        e.preventDefault(), nr(), Zt()
    }

    function vr(e) {
        e.preventDefault(), nr(), Qt()
    }

    function yr(e) {
        e.preventDefault(), nr(), er()
    }

    function br(e) {
        e.preventDefault(), nr(), tr()
    }

    function wr() {
        Ct()
    }

    function xr() {
        F()
    }

    function kr() {
        var e = document.webkitHidden || document.msHidden || document.hidden;
        e === !1 && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
    }

    function Ar(e) {
        if (nn && $()) {
            e.preventDefault();
            for (var t = e.target; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
            if (t && !t.classList.contains("disabled") && (G(), t.nodeName.match(/section/gi))) {
                var r = parseInt(t.getAttribute("data-index-h"), 10),
                    n = parseInt(t.getAttribute("data-index-v"), 10);
                at(r, n)
            }
        }
    }

    function Sr(e) {
        if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
            var t = e.currentTarget.getAttribute("href");
            t && (D(t), e.preventDefault())
        }
    }

    function Er() {
        Mr.isLastSlide() && Xr.loop === !1 ? (at(0, 0), $t()) : ln ? $t() : Yt()
    }

    function Lr(e, t) {
        this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
    }
    var Mr, zr, Tr, Nr, qr, Cr, Pr, Rr, Dr, Ir = "3.5.0",
        Or = ".slides section",
        Br = ".slides>section",
        Fr = ".slides>section.present>section",
        Hr = ".slides>section:first-of-type",
        Vr = navigator.userAgent,
        Xr = {
            width: 960,
            height: 700,
            margin: .1,
            minScale: .2,
            maxScale: 2,
            controls: !0,
            controlsTutorial: !0,
            controlsLayout: "bottom-right",
            controlsBackArrows: "faded",
            progress: !0,
            slideNumber: !1,
            showSlideNumber: "all",
            history: !1,
            keyboard: !0,
            keyboardCondition: null,
            overview: !0,
            center: !0,
            touch: !0,
            loop: !1,
            rtl: !1,
            shuffle: !1,
            fragments: !0,
            embedded: !1,
            help: !0,
            pause: !0,
            showNotes: !1,
            autoPlayMedia: null,
            autoSlide: 0,
            autoSlideStoppable: !0,
            autoSlideMethod: null,
            mouseWheel: !1,
            rollingLinks: !1,
            hideAddressBar: !0,
            previewLinks: !1,
            postMessage: !0,
            postMessageEvents: !1,
            focusBodyOnPageVisibilityChange: !0,
            transition: "default",
            transitionSpeed: "default",
            backgroundTransition: "default",
            parallaxBackgroundImage: "",
            parallaxBackgroundSize: "",
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
            pdfPageHeightOffset: -1,
            viewDistance: 3,
            display: "block",
            dependencies: []
        },
        Wr = !1,
        Ur = !1,
        jr = !1,
        _r = null,
        Gr = null,
        Yr = !1,
        $r = !1,
        Kr = [],
        Jr = 1,
        Zr = {
            layout: "",
            overview: ""
        },
        Qr = {},
        en = {},
        tn = 0,
        rn = 0,
        nn = !1,
        an = 0,
        sn = 0,
        on = -1,
        ln = !1,
        un = {
            startX: 0,
            startY: 0,
            startSpan: 0,
            startCount: 0,
            captured: !1,
            threshold: 40
        },
        cn = {
            "N  ,  SPACE": "Next slide",
            P: "Previous slide",
            "&#8592;  ,  H": "Navigate left",
            "&#8594;  ,  L": "Navigate right",
            "&#8593;  ,  K": "Navigate up",
            "&#8595;  ,  J": "Navigate down",
            Home: "First slide",
            End: "Last slide",
            "B  ,  .": "Pause",
            F: "Fullscreen",
            "ESC, O": "Slide overview"
        };
    return Lr.prototype.setPlaying = function(e) {
        var t = this.playing;
        this.playing = e, !t && this.playing ? this.animate() : this.render()
    }, Lr.prototype.animate = function() {
        var e = this.progress;
        this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && en.requestAnimationFrameMethod.call(window, this.animate.bind(this))
    }, Lr.prototype.render = function() {
        var e = this.playing ? this.progress : 0,
            t = this.diameter2 - this.thickness,
            r = this.diameter2,
            n = this.diameter2,
            a = 28;
        this.progressOffset += .1 * (1 - this.progressOffset);
        var i = -Math.PI / 2 + 2 * e * Math.PI,
            s = -Math.PI / 2 + 2 * this.progressOffset * Math.PI;
        this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(r, n, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(r, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#666", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(r, n, t, s, i, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(r - a / 2, n - a / 2), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, a / 2 - 4, a), this.context.fillRect(a / 2 + 4, 0, a / 2 - 4, a)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(a - 4, a / 2), this.context.lineTo(0, a), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
    }, Lr.prototype.on = function(e, t) {
        this.canvas.addEventListener(e, t, !1)
    }, Lr.prototype.off = function(e, t) {
        this.canvas.removeEventListener(e, t, !1)
    }, Lr.prototype.destroy = function() {
        this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
    }, Mr = {
        VERSION: Ir,
        initialize: e,
        configure: h,
        sync: it,
        slide: at,
        left: Kt,
        right: Jt,
        up: Zt,
        down: Qt,
        prev: er,
        next: tr,
        navigateFragment: Wt,
        prevFragment: jt,
        nextFragment: Ut,
        navigateTo: at,
        navigateLeft: Kt,
        navigateRight: Jt,
        navigateUp: Zt,
        navigateDown: Qt,
        navigatePrev: er,
        navigateNext: tr,
        layout: F,
        shuffle: lt,
        availableRoutes: kt,
        availableFragments: At,
        toggleHelp: I,
        toggleOverview: Y,
        togglePause: et,
        toggleAutoSlide: rt,
        isOverview: $,
        isPaused: tt,
        isAutoSliding: nt,
        addEventListeners: m,
        removeEventListeners: f,
        getState: Ht,
        setState: Vt,
        getSlidePastCount: Tt,
        getProgress: Nt,
        getIndices: Rt,
        getSlides: Dt,
        getTotalSlides: It,
        getSlide: Ot,
        getSlideBackground: Bt,
        getSlideNotes: Ft,
        getPreviousSlide: function() {
            return Nr
        },
        getCurrentSlide: function() {
            return qr
        },
        getScale: function() {
            return Jr
        },
        getConfig: function() {
            return Xr
        },
        getQueryHash: function() {
            var e = {};
            location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, function(t) {
                e[t.split("=").shift()] = t.split("=").pop()
            });
            for (var t in e) {
                var r = e[t];
                e[t] = y(unescape(r))
            }
            return e
        },
        isFirstSlide: function() {
            return 0 === zr && 0 === Tr
        },
        isLastSlide: function() {
            return qr ? qr.nextElementSibling ? !1 : K(qr) && qr.parentNode.nextElementSibling ? !1 : !0 : !1
        },
        isReady: function() {
            return Ur
        },
        addEventListener: function(e, t, r) {
            "addEventListener" in window && (Qr.wrapper || document.querySelector(".reveal")).addEventListener(e, t, r)
        },
        removeEventListener: function(e, t, r) {
            "addEventListener" in window && (Qr.wrapper || document.querySelector(".reveal")).removeEventListener(e, t, r)
        },
        triggerKey: function(e) {
            ir({
                keyCode: e
            })
        },
        registerKeyboardShortcut: function(e, t) {
            cn[e] = t
        }
    }
});