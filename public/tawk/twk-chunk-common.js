/*! For license information please see twk-chunk-common.js.LICENSE */
(window.tawkJsonp = window.tawkJsonp || []).push([["chunk-common"], {
    "028e": function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return w
            }
            ));
            var i = n("5868")
              , o = n("7f46")
              , r = n("e8f9")
              , a = n("f0b0")
              , s = n("27a6");
            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function u() {
                u = function() {
                    return e
                }
                ;
                var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, o = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                , r = "function" == typeof Symbol ? Symbol : {}, a = r.iterator || "@@iterator", s = r.asyncIterator || "@@asyncIterator", l = r.toStringTag || "@@toStringTag";
                function d(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function f(t, e, n, i) {
                    var r = e && e.prototype instanceof v ? e : v
                      , a = Object.create(r.prototype)
                      , s = new x(i || []);
                    return o(a, "_invoke", {
                        value: C(t, n, s)
                    }),
                    a
                }
                function h(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = f;
                var p = "suspendedStart"
                  , m = "executing"
                  , w = "completed"
                  , g = {};
                function v() {}
                function y() {}
                function b() {}
                var k = {};
                d(k, a, (function() {
                    return this
                }
                ));
                var T = Object.getPrototypeOf
                  , S = T && T(T(A([])));
                S && S !== n && i.call(S, a) && (k = S);
                var _ = b.prototype = v.prototype = Object.create(k);
                function I(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function W(t, e) {
                    function n(o, r, a, s) {
                        var u = h(t[o], t, r);
                        if ("throw" !== u.type) {
                            var l = u.arg
                              , d = l.value;
                            return d && "object" == c(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                n("next", t, a, s)
                            }
                            ), (function(t) {
                                n("throw", t, a, s)
                            }
                            )) : e.resolve(d).then((function(t) {
                                l.value = t,
                                a(l)
                            }
                            ), (function(t) {
                                return n("throw", t, a, s)
                            }
                            ))
                        }
                        s(u.arg)
                    }
                    var r;
                    o(this, "_invoke", {
                        value: function(t, i) {
                            function o() {
                                return new e((function(e, o) {
                                    n(t, i, e, o)
                                }
                                ))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }
                function C(e, n, i) {
                    var o = p;
                    return function(r, a) {
                        if (o === m)
                            throw Error("Generator is already running");
                        if (o === w) {
                            if ("throw" === r)
                                throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = r,
                        i.arg = a; ; ) {
                            var s = i.delegate;
                            if (s) {
                                var c = P(s, i);
                                if (c) {
                                    if (c === g)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (o === p)
                                    throw o = w,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            o = m;
                            var u = h(e, n, i);
                            if ("normal" === u.type) {
                                if (o = i.done ? w : "suspendedYield",
                                u.arg === g)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: i.done
                                }
                            }
                            "throw" === u.type && (o = w,
                            i.method = "throw",
                            i.arg = u.arg)
                        }
                    }
                }
                function P(e, n) {
                    var i = n.method
                      , o = e.iterator[i];
                    if (o === t)
                        return n.delegate = null,
                        "throw" === i && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        P(e, n),
                        "throw" === n.method) || "return" !== i && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        g;
                    var r = h(o, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        g;
                    var a = r.arg;
                    return a ? a.done ? (n[e.resultName] = a.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    g) : a : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    g)
                }
                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(E, this),
                    this.reset(!0)
                }
                function A(e) {
                    if (e || "" === e) {
                        var n = e[a];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var o = -1
                              , r = function n() {
                                for (; ++o < e.length; )
                                    if (i.call(e, o))
                                        return n.value = e[o],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return r.next = r
                        }
                    }
                    throw new TypeError(c(e) + " is not iterable")
                }
                return y.prototype = b,
                o(_, "constructor", {
                    value: b,
                    configurable: !0
                }),
                o(b, "constructor", {
                    value: y,
                    configurable: !0
                }),
                y.displayName = d(b, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                    d(t, l, "GeneratorFunction")),
                    t.prototype = Object.create(_),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                I(W.prototype),
                d(W.prototype, s, (function() {
                    return this
                }
                )),
                e.AsyncIterator = W,
                e.async = function(t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new W(f(t, n, i, o),r);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                I(_),
                d(_, l, "Generator"),
                d(_, a, (function() {
                    return this
                }
                )),
                d(_, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var i in e)
                        n.push(i);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var i = n.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = A,
                x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(O),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function o(i, o) {
                            return s.type = "throw",
                            s.arg = e,
                            n.next = i,
                            o && (n.method = "next",
                            n.arg = t),
                            !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = i.call(a, "catchLoc")
                                  , u = i.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var a = r ? r.completion : {};
                        return a.type = t,
                        a.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                O(n),
                                g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, i) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: n,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        g
                    }
                },
                e
            }
            function l(t, e, n, i, o, r, a) {
                try {
                    var s = t[r](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, o)
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, i)
                }
                return n
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        h(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function h(t, e, n) {
                return (e = m(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function p(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, m(i.key), i)
                }
            }
            function m(t) {
                var e = function(t, e) {
                    if ("object" != c(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != c(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == c(e) ? e : e + ""
            }
            var w = function(t, e, n) {
                return e && p(t.prototype, e),
                n && p(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t(e) {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t),
                this.store = e,
                this.keyDownTimeout = null,
                this.webrtcWin = null,
                this.maxNumberFileUpload = 5,
                this.maxSizeFileUpload = 52428800,
                this.regSurvey = /\[option\](.*?)(<br\/>|$)/gm,
                this.regSurveyQuestion = /^([\s\S]*?)\[option\]/,
                this.regOption = /\[option\]/g
            }
            ), [{
                key: "processHistoryMessages",
                value: function(t) {
                    for (var e = this, n = [], i = {}, o = null, r = !1, s = !1, c = !1, u = function() {
                        var u, d, h, p, m = !1, w = null, g = t[l], v = a.Helper.generateUUID(), y = new Date(g.co).getTime(), b = {};
                        if ("WEBRTC_CALL" === g.m && g.md && g.md.webrtc && (m = !0,
                        w = g.md.clid),
                        "n" === g.t && "WEBRTC_CALL" !== g.m)
                            return "AGENT_JOIN_CONVERSATION" === g.m && g.md && (i[g.md.rsc] = g.md),
                            0;
                        if (g.md && g.md.ao)
                            return 0;
                        if (p = g.n,
                        u = g.uid,
                        "a" === g.ut) {
                            var k = i[g.md.rsc];
                            k && (u = k.pid,
                            d = k.pi ? "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(k.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"))
                        } else
                            "s" === g.ut && (u = a.Helper.generateUUID(),
                            d = g.md && g.md.pi ? "".concat("https://tawk.link", "/").concat(g.md.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"));
                        if (g.attchs && Array.isArray(g.attchs) && g.attchs.forEach((function(t) {
                            var n = t.type;
                            "suggested-messages" === n ? (c = !0,
                            o = {
                                options: t.content.options
                            }) : "file" === n ? b = e.processFile(g) : "ticket-form" === n ? r = !0 : "lead-capture-form" === n && (s = !0)
                        }
                        )),
                        c || "v" === g.ut)
                            h = e.parseText(g.m);
                        else {
                            var T = e.parseSurvey(g.m)
                              , S = T.parsedMessage
                              , _ = T.surveyOptions;
                            h = S,
                            _ && (o = {
                                options: _
                            })
                        }
                        n.push(f(f({}, b), {}, {
                            timeStamp: y,
                            message: h || "",
                            name: p,
                            type: g.t,
                            time: g.co,
                            data: g.md,
                            isPending: !1,
                            senderType: g.ut,
                            ownerId: u,
                            profileImage: d,
                            cver: g.cver,
                            messageId: v,
                            isCallView: m,
                            callId: w,
                            callData: null,
                            surveyObj: o,
                            rawMessage: g,
                            hasInlineTicketForm: r,
                            hasInlineLeadCaptureForm: s
                        }))
                    }, l = 0; l < t.length; l++)
                        u();
                    return n
                }
            }, {
                key: "parseChatMessage",
                value: function(e, n) {
                    var i, r, s, c, u, l = this, d = !1, h = null, p = {}, m = null, w = null, g = null, v = !1, y = !1, b = !1, k = a.Helper.generateUUID(), T = new Date(e.co).getTime(), S = !!n && !!this.store.getters["chat/chatTransferData"];
                    if (e.n = o.a.rawDecode(e.n),
                    "n" === e.t && ("AGENT_JOIN_CONVERSATION" === e.m || "AGENT_LEFT_CONVERSATION" === e.m))
                        return this.updateAgentPresence(e, n),
                        this.store.dispatch("chat/updateChatMessage", {
                            rawMessage: e,
                            type: "n"
                        }),
                        S && "AGENT_JOIN_CONVERSATION" === e.m && this.store.commit("chat/setChatTransferData", null),
                        null;
                    if ("n" === e.t && "CHAT_TRANSFER" === e.m)
                        return this.store.dispatch("chat/updateChatMessage", {
                            rawMessage: e,
                            type: "n"
                        }),
                        S = "active" === (null === (c = e.md) || void 0 === c || null === (c = c.transfer) || void 0 === c ? void 0 : c.status),
                        null;
                    if ("n" === e.t && "v" === e.ut) {
                        if ("VISITOR_RATING" !== e.m)
                            return;
                        "VISITOR_RATING" === e.m && (n && this.changeRating(e.md.rt, !0),
                        e.md.rt < 0 ? (e.m = "thumbs-down",
                        e.t = "c") : e.md.rt > 0 ? (e.m = "thumbs-up",
                        e.t = "c") : e.m = t.Tawk_Window.app.$i18n("chat", "remove_rate"))
                    }
                    if ("v" === e.ut)
                        i = this.store.getters["visitor/displayName"],
                        r = e.uid;
                    else if (i = e.n,
                    "a" === e.ut) {
                        var _ = this.store.getters["chat/agents"];
                        _[e.md.rsc] && (r = _[e.md.rsc].profileId);
                        var I = this.store.getters["chat/agentProfile"](e.md.rsc);
                        s = I ? I.profileImage : null
                    } else
                        "s" === e.ut && (s = e.md && e.md.pi ? "".concat("https://tawk.link", "/").concat(e.md.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"));
                    if (e.attchs && Array.isArray(e.attchs) && e.attchs.forEach((function(t) {
                        var n = t.type;
                        "suggested-messages" === n ? (b = !0,
                        m = {
                            options: t.content.options
                        }) : "file" === n ? p = l.processFile(e) : "ticket-form" === n ? (v = !0,
                        w = t.content.ref) : "lead-capture-form" === n && (y = !0,
                        g = t.content.ref)
                    }
                    )),
                    "WEBRTC_CALL" === e.m && e.md && e.md.webrtc)
                        d = !0,
                        h = e.md.clid;
                    else {
                        if ("c" === e.t)
                            if ("v" === e.ut)
                                this.store.commit("chat/setVisitorHasMessaged", !0);
                            else if ("a" === e.ut) {
                                if (this.store.commit("chat/setAgentHasMessaged", !0),
                                n) {
                                    var W = {
                                        message: e.m,
                                        attachments: e.attchs ? e.attchs : []
                                    };
                                    0 === e.m.length && delete W.message,
                                    t.Tawk_Window.jsApi.triggerApiHandlers("onChatMessageAgent", W)
                                }
                            } else if ("s" === e.ut && n) {
                                var C = {
                                    message: e.m,
                                    attachments: e.attchs ? e.attchs : []
                                };
                                0 === e.m.length && delete C.message,
                                t.Tawk_Window.jsApi.triggerApiHandlers("onChatMessageSystem", C)
                            }
                        if (b || "v" === e.ut)
                            u = this.parseText(e.m);
                        else {
                            var P = this.parseSurvey(e.m)
                              , E = P.parsedMessage
                              , O = P.surveyOptions;
                            u = E,
                            O && (m = {
                                options: O
                            })
                        }
                    }
                    return T > this.store.getters["session/lastMessageTimestamp"] && ("v" === e.ut ? this.store.commit("session/setLastMessageTimestamp", T) : (this.store.dispatch("chat/updateUnseenMessages", k),
                    n && t.Tawk_Window.jsApi.triggerApiHandlers("onUnreadCountChanged", this.store.getters["chat/unreadMessageCount"]))),
                    p = f(f({}, p), {}, {
                        timeStamp: T,
                        message: u,
                        name: i,
                        type: e.t,
                        time: e.co,
                        data: e.md,
                        isPending: !T,
                        senderType: e.ut,
                        ownerId: r,
                        profileImage: s,
                        cver: e.cver,
                        messageId: k,
                        isCallView: d,
                        callId: h,
                        callData: null,
                        surveyObj: m,
                        rawMessage: e,
                        ticketFormRef: w,
                        hasInlineTicketForm: v,
                        leadFormRef: g,
                        hasInlineLeadCaptureForm: y
                    })
                }
            }, {
                key: "processFile",
                value: function(t) {
                    if (t.attchs && Array.isArray(t.attchs)) {
                        var e = {
                            images: [],
                            videos: [],
                            audios: [],
                            files: []
                        };
                        return t.attchs.forEach((function(t) {
                            if ("file" === t.type) {
                                var n = t.content.file;
                                -1 !== ["image/jpeg", "image/png", "image/gif"].indexOf(n.mimeType) ? e.images.push({
                                    source: n.url,
                                    name: o.a.rawEncode(n.name)
                                }) : -1 !== ["video/mp4", "video/ogg", "video/webm"].indexOf(n.mimeType) ? e.videos.push({
                                    source: "selfhosted",
                                    url: n.url,
                                    name: o.a.rawEncode(n.name),
                                    size: i.a.formatFileSize(n.size),
                                    options: {
                                        controls: "",
                                        mute: !0,
                                        loop: !1,
                                        startTime: 0
                                    }
                                }) : -1 !== ["audio/mp3", "audio/ogg", "audio/mpeg", "audio/wav"].indexOf(n.mimeType) ? e.audios.push({
                                    source: n.url,
                                    type: n.mimeType,
                                    name: o.a.rawEncode(n.name),
                                    size: i.a.formatFileSize(n.size)
                                }) : e.files.push({
                                    source: n.url,
                                    name: o.a.rawEncode(n.name),
                                    size: i.a.formatFileSize(n.size)
                                })
                            }
                        }
                        )),
                        {
                            attchs: e
                        }
                    }
                }
            }, {
                key: "parseText",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!t)
                        return t;
                    for (var n = t.split("\n"), i = 0; i < n.length; i++)
                        e || (n[i] = this.createUrl(n[i].split(" "), " "));
                    return t = n.join("\n")
                }
            }, {
                key: "createUrl",
                value: function(t, e) {
                    for (var n = this, o = 0; o < t.length; o++)
                        t[o].match(i.a.regEmailMatch) ? t[o] = t[o].replace(i.a.regEmailMatch, (function(t) {
                            return n.parseEmail(t)
                        }
                        )) : t[o].match(i.a.regTelMatch) ? t[o] = t[o].replace(i.a.regTelMatch, (function(t) {
                            return n.parsePhoneNumber(t)
                        }
                        )) : (t[o] = t[o].replace(i.a.regMatchUrl, (function(t) {
                            return n.parseUrl(t)
                        }
                        )),
                        t[o] = t[o].replace(i.a.regMatchIp, (function(t) {
                            return n.parseUrl(t)
                        }
                        )));
                    return t.join(e)
                }
            }, {
                key: "parseUrl",
                value: function(t) {
                    var e, n = "";
                    if (void 0 !== window.emojione && window.emojione.unifyUnicode(t) !== t)
                        return t;
                    var r = o.a.hasPunctuation(t);
                    if (r && r.length) {
                        var a = r[0].replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                          , s = new RegExp(a + "$","g");
                        t = t.replace(s, "")
                    }
                    var c = "".concat(r && r.length ? r[0] : "", " ");
                    return t.match(i.a.regEmailMatch) && (n = "mailto:"),
                    "mailto:" === n ? (-1 !== (e = t.match(i.a.regEmailMatch)[0]).indexOf("mailto") && (n = ""),
                    t.replace(i.a.regEmailMatch, "[".concat(e, "](").concat(n + e, ")").concat(c))) : (0 !== t.toLowerCase().indexOf("http") && 0 !== t.toLowerCase().indexOf("ftp") && (n = "http://"),
                    "_parent" == (this.parseUrlHostName(document.location.href) === this.parseUrlHostName(t) ? "_parent" : "_blank") ? "_[".concat(t, "](").concat(n + t, ")").concat(c) : "[".concat(t, "](").concat(n + t, ")").concat(c))
                }
            }, {
                key: "parseUrlHostName",
                value: function(t) {
                    var e = t.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
                    if (null != e && e.length > 2 && "string" == typeof e[2] && e[2].length > 0)
                        return e[2]
                }
            }, {
                key: "parseEmail",
                value: function(t) {
                    var e = "";
                    return void 0 !== window.emojione && window.emojione.unifyUnicode(t) !== t ? t : (-1 === t.indexOf("mailto") && (e = "mailto:"),
                    "[".concat(t, "](").concat(e + t, ")"))
                }
            }, {
                key: "parseSurvey",
                value: function(t) {
                    var e = t.match(this.regSurveyQuestion);
                    if (null === e)
                        return {
                            parsedMessage: this.parseText(t),
                            surveyOptions: null
                        };
                    var n = this.parseText(o.a.trim(e[1]))
                      , r = []
                      , a = t.match(this.regSurvey);
                    if (!a)
                        return {
                            parsedMessage: n,
                            surveyOptions: null
                        };
                    for (var s = 0, c = a.length; s < c; s++) {
                        var u = a[s].replace(this.regOption, "");
                        u = u.replace(i.a.regBr, ""),
                        u = o.a.trim(u),
                        r.push({
                            text: u
                        })
                    }
                    return {
                        parsedMessage: n,
                        surveyOptions: r
                    }
                }
            }, {
                key: "updateAgentPresence",
                value: function(t, e) {
                    return ("AGENT_JOIN_CONVERSATION" === t.m || "AGENT_LEFT_CONVERSATION" === t.m) && ("AGENT_JOIN_CONVERSATION" === t.m ? this.addAgentToList(t, e) : this.removeAgentFromList(t, e))
                }
            }, {
                key: "addAgentToList",
                value: function(e, n) {
                    var i = e.md || {}
                      , r = i.rsc
                      , a = this.store.getters["chat/agents"][e]
                      , s = {
                        profileImage: i.pi ? "".concat("https://s3.amazonaws.com/tawk-to-pi", "/").concat(i.pi) : "".concat("https://embed.tawk.to/_s/v4/assets", "/images/default-profile.svg"),
                        profileTitle: o.a.rawDecode(i.pst) || "",
                        profileId: i.pid,
                        displayName: e.n,
                        count: 1,
                        isBot: !!i.bot && i.bot
                    };
                    if (a) {
                        if (!(a.seq.time < i.seq.time || a.seq.time === i.seq.time && a.seq.inc < i.seq.inc))
                            return;
                        if (a.profileId === i.pid)
                            return !1
                    }
                    n && t.Tawk_Window.jsApi.triggerApiHandlers("onAgentJoinChat", {
                        name: s.displayName,
                        position: s.profileTitle,
                        image: s.profileImage,
                        id: e.uid
                    }),
                    this.store.dispatch("chat/agentJoined", {
                        resourceId: r,
                        agentData: i,
                        profileData: s
                    })
                }
            }, {
                key: "removeAgentFromList",
                value: function(e, n) {
                    var i = e.md || {}
                      , o = i.rsc
                      , r = this.store.getters["chat/agents"][o];
                    if (!(!r || r.seq.time > i.seq.time || r.seq.time === i.seq.time && r.seq.inc > i.seq.inc)) {
                        if (n) {
                            var a = this.store.getters["chat/agentProfile"](o);
                            a && t.Tawk_Window.jsApi.triggerApiHandlers("onAgentLeaveChat", {
                                name: a.displayName,
                                position: a.profileTitle,
                                image: a.profileImage,
                                id: e.uid
                            })
                        }
                        this.store.dispatch("chat/agentLeft", {
                            resourceId: o,
                            agentData: i
                        })
                    }
                }
            }, {
                key: "sendMessagePreview",
                value: function(e) {
                    var n, r = this, a = i.a.getTargetElement(e);
                    if (13 === e.keyCode && !e.shiftKey && !this.store.getters["browserData/mobileBrowserName"])
                        return n = o.a.trim(a.value),
                        a.value = "",
                        this.sendMessage(n);
                    !this.keyDownTimeout && this.store.getters["widget/showVisitorTyping"] && (this.keyDownTimeout = setTimeout((function() {
                        n = o.a.trim(a.value),
                        void 0 !== window.emojione && (n = window.emojione.toShort(n)),
                        t.Tawk_Window.app.$socket.publish("notifyMessagePreview", n),
                        clearTimeout(r.keyDownTimeout),
                        r.keyDownTimeout = null
                    }
                    ), 1e3))
                }
            }, {
                key: "sendMessage",
                value: function() {
                    var t = function(t) {
                        return function() {
                            var e = this
                              , n = arguments;
                            return new Promise((function(i, o) {
                                var r = t.apply(e, n);
                                function a(t) {
                                    l(r, i, o, a, s, "next", t)
                                }
                                function s(t) {
                                    l(r, i, o, a, s, "throw", t)
                                }
                                a(void 0)
                            }
                            ))
                        }
                    }(u().mark((function t(e) {
                        var n, i, r, a, s, c, l;
                        return u().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.message,
                                    i = void 0 === n ? "" : n,
                                    r = e.attachments,
                                    a = void 0 === r ? [] : r,
                                    s = e.callback,
                                    i = o.a.rawDecode(o.a.trim(i)),
                                    s = s || function() {}
                                    ,
                                    c = !1,
                                    l = [],
                                    1 !== a.length || "lead-capture-response" !== a[0].type) {
                                        t.next = 10;
                                        break
                                    }
                                    l = a,
                                    c = !0,
                                    t.next = 14;
                                    break;
                                case 10:
                                    if (!(a.length > 0)) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 13,
                                    this.uploadFiles(a);
                                case 13:
                                    l = t.sent;
                                case 14:
                                    clearTimeout(this.keyDownTimeout),
                                    this.keyDownTimeout = 0,
                                    i.length > 0 && void 0 !== window.emojione && (i = i.replace(/©/gm, "&copy;").replace(/®/gm, "&reg;").replace(/™/gm, "&trade;"),
                                    i = (i = window.emojione.toShort(i)).replace(/&copy;/gm, "©").replace(/'&reg;/gm, "®").replace(/&trade;/gm, "™")),
                                    this.sendMessageToServer({
                                        message: i,
                                        attachments: l,
                                        callback: s,
                                        isLeadCaptureForm: c
                                    });
                                case 18:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "sendMessageToServer",
                value: function(e) {
                    var n = this
                      , i = e.message
                      , r = e.attachments
                      , a = void 0 === r ? [] : r
                      , s = e.callback
                      , c = void 0 === s ? function() {}
                    : s
                      , u = e.isLeadCaptureForm
                      , l = void 0 !== u && u;
                    c = c || function() {}
                    ;
                    var d = this.parseChatMessage({
                        attchs: a,
                        ut: "v",
                        t: "c",
                        m: o.a.rawEncode(i),
                        co: null,
                        uid: this.store.getters["visitor/visitorId"]
                    });
                    l || this.store.commit("chat/setOutgoingMessage", d);
                    var f = {
                        message: i,
                        attachments: a
                    };
                    0 === i.length && delete f.message,
                    t.Tawk_Window.app.$socket.publish("sendChatMessage", f, (function(e, i) {
                        e ? (d.sendFailed = !0,
                        d.isPending = !1) : (l && n.store.commit("chat/setOutgoingMessage", d),
                        d.cver = i.data.cver,
                        d.timeStamp = new Date(i.data.co).getTime(),
                        d.time = i.data.co,
                        d.isPending = !1,
                        d.rawMessage.co = i.data.co,
                        d.sendFailed = !1,
                        t.Tawk_Window.jsApi.triggerApiHandlers("onChatMessageVisitor", f),
                        n.store.dispatch("session/addWaitTime"),
                        n.store.dispatch("chat/outgoingChatMessage", d)),
                        c(e)
                    }
                    ))
                }
            }, {
                key: "changeRating",
                value: function(e, n) {
                    var i, o = "c";
                    this.store.getters["chat/rating"] === e && (e = 0),
                    this.store.commit("chat/setRating", e),
                    n || (t.Tawk_Window.app.$socket.publish("setRating", e),
                    t.Tawk_Window.jsApi.triggerApiHandlers("onChatSatisfaction", e)),
                    e < 0 ? i = "thumbs-down" : e > 0 ? i = "thumbs-up" : (i = t.Tawk_Window.app.$i18n("chat", "remove_rate"),
                    o = "n");
                    var r = this.parseChatMessage({
                        ut: "v",
                        t: o,
                        m: i,
                        co: new Date,
                        uid: this.store.getters["visitor/visitorId"],
                        md: {
                            rt: e
                        }
                    });
                    n || (this.store.commit("chat/setOutgoingMessage", r),
                    this.store.dispatch("chat/updateRatingMessage", r))
                }
            }, {
                key: "uploadFiles",
                value: function(e) {
                    for (var n = this, i = [], o = [], c = [], u = function() {
                        var t = e[l]
                          , s = {
                            uuid: a.Helper.generateUUID(),
                            handle: null,
                            fileName: t.file.name,
                            percentage: 0,
                            hasError: !1,
                            fileData: t
                        };
                        return t.file.size > n.maxSizeFileUpload ? (o.push(t.file.name),
                        0) : l >= n.maxNumberFileUpload ? (c.push(t),
                        0) : (n.store.commit("chat/addFileUpload", s),
                        void i.push(new Promise((function(e, i) {
                            r.a.getUploadHandler((function(i) {
                                s.handle = i,
                                r.a.uploadFile(i, n.store.getters["session/sessionKey"], t.file, (function(t) {
                                    e(t),
                                    n.store.commit("chat/removeFileUpload", s.uuid)
                                }
                                ))
                            }
                            ), i)
                        }
                        ))))
                    }, l = 0; l < e.length; l++)
                        u();
                    return o.length && t.Tawk_Window.eventBus.$emit("tooBigFileList", o),
                    Object(s.a)(i).then((function(e) {
                        for (var i = [], o = 0; o < e.length; o++) {
                            var r = e[o];
                            if ("fulfilled" === r.status && r.value) {
                                var a = {
                                    type: "file",
                                    content: {
                                        file: {
                                            url: r.value.url,
                                            name: r.value.filename,
                                            mimeType: r.value.mimeType,
                                            size: r.value.size,
                                            extension: r.value.extension
                                        }
                                    }
                                };
                                i.push(a),
                                t.Tawk_Window.jsApi.triggerApiHandlers("onFileUpload", r.value.url)
                            } else
                                n.store.getters["chat/uploadFiles"].forEach((function(t) {
                                    t.hasError || (t.hasError = !0)
                                }
                                ))
                        }
                        return i
                    }
                    ))
                }
            }, {
                key: "callStatusUpdate",
                value: function(e) {
                    var n = this
                      , i = this.store.getters["chat/callData"](e.clid);
                    i || (i = {
                        callId: e.clid,
                        status: e.stts,
                        version: e.ver,
                        isMissed: e.mssd,
                        isRejected: e.rjctd,
                        isRinging: "ringing" === e.stts,
                        isDone: "completed" === e.stts,
                        isVideo: !!e.f && e.f.vid,
                        isScreenshare: !!e.f && e.f.scrn,
                        hasError: !1
                    },
                    this.store.dispatch("chat/updateCallData", i)),
                    t.Tawk_Window.app.$socket.publish("getCallStatus", {
                        callId: e.clid
                    }, (function(e, o) {
                        if (e || !o.data.call.f || i.version > o.data.call.ver)
                            return i.hasError = !0,
                            void n.store.dispatch("chat/updateCallData", i);
                        var r, a = o.data.call;
                        ("a" !== a.cllr.t || (r = n.store.getters["chat/agentProfile"](a.cllr.urid))) && ((i = {
                            callId: a.clid,
                            status: a.stts,
                            version: a.ver,
                            isMissed: a.mssd,
                            isRejected: a.rjctd,
                            isRinging: "ringing" === a.stts,
                            isDone: "completed" === a.stts,
                            isVideo: a.f.vid,
                            isScreenshare: a.f.scrn,
                            hasError: !1,
                            caller: r || a.cllr,
                            startedAt: a.so,
                            endedAt: a.eo
                        }).isRinging && i.caller && "a" === a.cllr.t ? n.store.commit("chat/setIncomingCall", i) : i.isDone && n.store.getters["chat/incomingCall"] && n.store.getters["chat/incomingCall"].callId == i.callId && n.store.commit("chat/setIncomingCall", null),
                        i.isDone ? n.store.dispatch("chat/updateOngoingCall", !1) : n.store.dispatch("chat/updateOngoingCall", !0),
                        n.store.dispatch("chat/updateCallData", i),
                        t.Tawk_Window.eventBus.$emit("callDataUpdated", i))
                    }
                    ))
                }
            }, {
                key: "chatTransferUpdate",
                value: function(t, e) {
                    this.store.dispatch("chat/updateChatTransferData", {
                        transfer: t,
                        transferVersion: e
                    })
                }
            }, {
                key: "acceptCall",
                value: function() {
                    var e = this;
                    this.store.getters["browserData/isWebRTCAvailable"] && (this.webrtcWin = window.open("", ""),
                    t.Tawk_Window.app.$socket.publish("getWebRTCToken", {}, (function(t, n) {
                        e.store.commit("chat/setIncomingCall", null),
                        t && e.webrtcWin.close(),
                        e.webrtcWin.location.href = "".concat("https://video.tawk.to", "/v2/call?token=").concat(n.data.token)
                    }
                    )))
                }
            }, {
                key: "declineCall",
                value: function(e) {
                    var n = this
                      , i = {
                        callId: e
                    };
                    t.Tawk_Window.app.$socket.publish("declineCall", i, (function() {
                        n.store.commit("chat/setIncomingCall", null)
                    }
                    ))
                }
            }, {
                key: "initiateCall",
                value: function(e, n) {
                    var i = this;
                    this.webrtcWin = window.open("", ""),
                    t.Tawk_Window.app.$socket.publish("getWebRTCToken", {
                        video: e,
                        screen: n
                    }, (function(t, e) {
                        t && i.webrtcWin.close(),
                        i.webrtcWin.location.href = "".concat("https://video.tawk.to", "/v2/call?token=").concat(e.data.token)
                    }
                    ))
                }
            }, {
                key: "clearUnseenNotification",
                value: function() {
                    this.store.dispatch("chat/clearUnseenMessages"),
                    t.Tawk_Window.jsApi.triggerApiHandlers("onUnreadCountChanged", this.store.getters["chat/unreadMessageCount"])
                }
            }, {
                key: "updateFileProgress",
                value: function(t, e, n) {
                    for (var i, o = this.store.getters["chat/uploadFiles"], r = 0; r < o.length; r++)
                        if (o[r].handle === t.handle) {
                            e ? o.splice(r, 1) : i = o[r];
                            break
                        }
                    i && (n ? i.hasError = !0 : i.percentage = t.progress)
                }
            }, {
                key: "sendApiEvent",
                value: function(e, n, i) {
                    var o;
                    "function" == typeof n && (i = n,
                    n = null),
                    i = i || function() {}
                    ,
                    (o = t.Tawk_Window.jsApi.secureWrapper({})).name = e,
                    o.data = n,
                    t.Tawk_Window.app.$socket.publish("addEvent", o, i)
                }
            }, {
                key: "sendApiAttributes",
                value: function(e, n) {
                    var i = this;
                    n = n || function() {}
                    ;
                    var o = !1;
                    if (Object.keys(e).length > 50)
                        return o = !0,
                        void n("[JSAPI/setAttributes]: 50 custom attributes are only allowed.");
                    Object.keys(e).forEach((function(t) {
                        if ("hash" !== t) {
                            if (!function(t) {
                                return /^[a-zA-Z0-9-]{1,50}$/.test(t)
                            }(t))
                                return o = !0,
                                void n("[JSAPI/setAttributes]: Invalid key: ".concat(t));
                            var i = e[t];
                            return function(t) {
                                return "string" == typeof t && t.length <= 255 || "number" == typeof t || "boolean" == typeof t || null === t
                            }(i) ? void 0 : (o = !0,
                            void n("[JSAPI/setAttributes]: Invalid value for key ".concat(t, ": ").concat(i, "}")))
                        }
                    }
                    )),
                    o || (e = t.Tawk_Window.jsApi.secureWrapper(e),
                    t.Tawk_Window.app.$socket.publish("setAttributes", e, (function(t) {
                        t || (e.name || e.email) && i.store.dispatch("visitor/updateVisitorInformation", {
                            n: e.name || void 0,
                            e: e.email || void 0
                        }),
                        n(t)
                    }
                    )))
                }
            }, {
                key: "addTags",
                value: function(e, n) {
                    var i;
                    n = n || function() {}
                    ,
                    (i = t.Tawk_Window.jsApi.secureWrapper({})).tags = e,
                    t.Tawk_Window.app.$socket.publish("addTags", i, n)
                }
            }, {
                key: "removeTags",
                value: function(e, n) {
                    var i;
                    n = n || function() {}
                    ,
                    (i = t.Tawk_Window.jsApi.secureWrapper({})).tags = e,
                    t.Tawk_Window.app.$socket.publish("removeTags", i, n)
                }
            }, {
                key: "parsePhoneNumber",
                value: function(t) {
                    var e = "";
                    return -1 === t.indexOf("tel") && (e = "tel:"),
                    '<a class="tawk-link" href="' + (e + t) + '" title="' + (e + t) + '">' + t + "</a> "
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    "0ad2": function(t, e, n) {
        "use strict";
        (function(t) {
            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, r(i.key), i)
                }
            }
            function r(t) {
                var e = function(t, e) {
                    if ("object" != i(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != i(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == i(e) ? e : e + ""
            }
            n.d(e, "a", (function() {
                return a
            }
            ));
            var a = function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t(e) {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t),
                this.store = e,
                this.incomingMessage = null,
                this.audioContext = null,
                this.isReadyForInit = !1,
                this.play = null,
                this.soundEl = null,
                this.soundFile = "".concat("https://embed.tawk.to/_s/v4/assets", "/audio/chat_sound.mp3")
            }
            ), [{
                key: "init",
                value: function() {
                    var t, e = this, n = this.store.getters["browserData/html5audio"];
                    n && n.supported && (this.audioContext || /Firefox/.test(navigator.userAgent) || "undefined" == typeof AudioBuffer || void 0 === window.AudioContext && void 0 === window.webkitAudioContext || (window.AudioContext = window.AudioContext || window.webkitAudioContext,
                    this.audioContext = new window.AudioContext),
                    this.audioContext ? this.incomingMessage = this.audioContextPlayer() : this.incomingMessage = this.htmlAudioPlayer(),
                    this.audioContext && (t = function() {
                        e.isReadyForInit && !e.touchstartInited && (e.incomingMessage.volume = 0,
                        e.incomingMessage.play(),
                        e.incomingMessage.source.stop(0),
                        e.incomingMessage.volume = 1,
                        window && "function" == typeof window.removeEventListener && window.removeEventListener("touchstart", t, {
                            passive: !0
                        }),
                        e.touchstartInited = !0)
                    }
                    ,
                    this.store.getters["browserData/mobileBrowserName"] && "ontouchstart"in window && window.addEventListener("touchstart", t, {
                        passive: !0
                    })))
                }
            }, {
                key: "playSound",
                value: function() {
                    t.Tawk_Window.jsApi.local_API.disableSound || this.store.getters["widget/isSoundEnabled"] && this.store.getters["widget/localSoundEnabled"] && this.incomingMessage && this.incomingMessage.play()
                }
            }, {
                key: "audioContextPlayer",
                value: function() {
                    var t = this
                      , e = {
                        sourcePath: t.soundFile,
                        buffer: null,
                        source: null,
                        volume: 1,
                        play: function() {
                            if (this.buffer) {
                                var e = t.audioContext.createGain();
                                e.gain.value = this.volume,
                                this.source = t.audioContext.createBufferSource(),
                                this.source.buffer = this.buffer,
                                this.source.connect(e),
                                e.connect(t.audioContext.destination),
                                this.source.start(0)
                            }
                        },
                        loadBuffer: function() {
                            var e = this
                              , n = new XMLHttpRequest;
                            n.open("GET", this.sourcePath, !0),
                            n.responseType = "arraybuffer",
                            n.onload = function() {
                                t.audioContext.decodeAudioData(n.response, (function(n) {
                                    n && (e.buffer = n,
                                    t.isReadyForInit || (t.isReadyForInit = !0))
                                }
                                ), (function(t) {
                                    throw new Error(t)
                                }
                                ))
                            }
                            ,
                            n.onerror = function() {
                                throw new Error("BufferLoader: XHR error for " + this.sourcePath)
                            }
                            ,
                            n.send()
                        }
                    };
                    return e.loadBuffer(),
                    e
                }
            }, {
                key: "htmlAudioPlayer",
                value: function() {
                    var t = {};
                    if ("symbian" !== this.store.getters["browserData/mobileBrowserName"])
                        return "safari" === this.store.getters["browserData/mobileBrowserName"] ? (t.sound = document.createElement("audio"),
                        t.sound.src = this.soundFile,
                        t.sound.style.cssText = "position: absolute; position: absolute; width: 0px; height: 0px; top: -10000px; left: -10000px;",
                        document.body.appendChild(t.sound)) : t.sound = new Audio(this.soundFile),
                        t.sound.addEventListener("timeupdate", (function() {
                            t.sound.currentTime >= .2 && t.sound.pause()
                        }
                        ), !1),
                        t.sound.load(),
                        t.play = function() {
                            try {
                                this.sound.currentTime = 0,
                                this.sound.autoplay = !0,
                                this.sound.load(),
                                this.sound.play()
                            } catch (t) {}
                        }
                        ,
                        t;
                    t.play = function() {}
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    "0dc3": function(t, e, n) {
        "use strict";
        n.r(e);
        e.default = {
            namespaced: !0,
            state: {
                isIe: !1,
                html5audio: null,
                mobileBrowserName: null,
                searchEngine: null,
                vendor: null,
                version: null,
                isWebRTCAvailable: !0,
                os: null
            },
            getters: {
                isIE: function(t) {
                    return t.isIE
                },
                html5audio: function(t) {
                    return t.html5audio
                },
                mobileBrowserName: function(t) {
                    return t.mobileBrowserName
                },
                searchEngine: function(t) {
                    return t.searchEngine
                },
                vendor: function(t) {
                    return t.vendor
                },
                version: function(t) {
                    return t.version
                },
                isWebRTCAvailable: function(t) {
                    return t.isWebRTCAvailable
                },
                os: function(t) {
                    return t.os
                }
            },
            actions: {
                updateInitialData: function(t, e) {
                    (0,
                    t.commit)("setInitialData", e)
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                }
            },
            mutations: {
                setInitialData: function(t, e) {
                    t.vendor = e.vendor,
                    t.version = e.version,
                    t.isIE = e.isIE,
                    t.mobileBrowserName = e.mobileBrowserName,
                    t.html5audio = e.html5audio,
                    t.searchEngine = e.searchEngine,
                    t.isWebRTCAvailable = e.isWebRTCAvailable,
                    t.os = e.os
                },
                setMobileBrowserName: function(t, e) {
                    t.mobileBrowserName = e
                },
                unsetData: function(t) {
                    for (var e = {
                        isIe: !1,
                        html5audio: null,
                        mobileBrowserName: null,
                        searchEngine: null,
                        vendor: null,
                        version: null,
                        isWebRTCAvailable: !0,
                        os: null
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                }
            }
        }
    },
    "24ca": function(t, e, n) {
        "use strict";
        var i = new (n("2b0e").a);
        e.a = i
    },
    "27a6": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        ));
        var i = function(t) {
            var e = t.map((function(t) {
                return t.then((function(t) {
                    return {
                        status: "fulfilled",
                        value: t
                    }
                }
                )).catch((function(t) {
                    return {
                        status: "rejected",
                        reason: t
                    }
                }
                ))
            }
            ));
            return Promise.all(e)
        }
    },
    "27c6": function(t, e, n) {
        "use strict";
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, r(i.key), i)
            }
        }
        function r(t) {
            var e = function(t, e) {
                if ("object" != i(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(t, e || "default");
                    if ("object" != i(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == i(e) ? e : e + ""
        }
        n.d(e, "a", (function() {
            return a
        }
        ));
        var a = function(t, e, n) {
            return e && o(t.prototype, e),
            n && o(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }((function t(e) {
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, t),
            this.store = e,
            this.setupTimeout = null,
            this.agentCountSubscription = null,
            this.originalPageStatus = null,
            this.utcOffset = 0,
            this.isSetup = !1,
            this.agentCountListener = null,
            this.isCleanedUp = !1
        }
        ), [{
            key: "setup",
            value: function() {
                this.clear(),
                this.isCleanedUp = !1,
                null === this.originalPageStatus && (this.originalPageStatus = this.store.getters["session/pageStatus"]),
                this.store.getters["schedule/isEnabled"] ? (this.utcOffset = -1 * ((new Date).getTime() - this.store.getters["schedule/timezone"].utc),
                this.isSetup = !0,
                this.calculate()) : this.store.dispatch("session/setPageStatus", {
                    status: this.originalPageStatus
                })
            }
        }, {
            key: "clear",
            value: function() {
                clearTimeout(this.setupTimeout),
                this.setupTimeout = null
            }
        }, {
            key: "cleanUp",
            value: function() {
                this.clear(),
                this.originalPageStatus = null,
                this.isSetup = !1,
                this.unwatchAgentCount(),
                this.isCleanedUp = !0
            }
        }, {
            key: "calculate",
            value: function() {
                var t = this;
                if (this.clear(),
                this.isCleanedUp)
                    return this.setup();
                if (this.isSetup && this.store.getters["schedule/isEnabled"]) {
                    var e = this.store.getters["schedule/slots"];
                    if (0 !== e.length) {
                        for (var n, i, o, r = new Date, a = -6e4 * r.getTimezoneOffset(), s = this.store.getters["schedule/timezone"].tzo - a, c = new Date(r.getTime() + this.utcOffset + s), u = c.getDay(), l = 60 * c.getHours() + c.getMinutes(), d = 60 * l + c.getSeconds(), f = 0; f < e.length; f++) {
                            var h = e[f];
                            if (h.day === u) {
                                if (l >= h.start && l < h.end) {
                                    n = h;
                                    break
                                }
                                if (l < h.start) {
                                    i = h;
                                    break
                                }
                            }
                        }
                        void 0 !== n ? (this.goOnline(),
                        o = 60 * n.end - d) : (this.goOffline(),
                        o = void 0 !== i ? 60 * i.start - d : 86400 - d + 1),
                        void 0 !== o && (this.setupTimeout = setTimeout((function() {
                            t.calculate()
                        }
                        ), 1e3 * o))
                    } else
                        this.goOffline()
                } else
                    this.store.dispatch("session/setPageStatus", {
                        status: this.originalPageStatus
                    })
            }
        }, {
            key: "goOnline",
            value: function() {
                this.unwatchAgentCount(),
                this.store.getters["widget/agentDrivenStatus"] || this.store.dispatch("session/setPageStatus", {
                    status: "online"
                }),
                this.originalPageStatus && (this.store.dispatch("session/setPageStatus", {
                    status: this.originalPageStatus
                }),
                this.initial = !1)
            }
        }, {
            key: "goOffline",
            value: function() {
                var t = this;
                0 === this.store.getters["chat/agentsCount"] && this.store.dispatch("session/setPageStatus", {
                    status: "offline"
                }),
                this.agentCountListener = this.store.watch((function(t) {
                    return t.chat.agentsCount
                }
                ), (function(e) {
                    0 === e && t.store.dispatch("session/setPageStatus", {
                        status: "offline"
                    })
                }
                ))
            }
        }, {
            key: "unwatchAgentCount",
            value: function() {
                "function" == typeof this.agentCountListener && (this.agentCountListener(),
                this.agentCountListener = null)
            }
        }, {
            key: "hasScheduleToday",
            value: function() {
                for (var t = this.store.getters["schedule/slots"], e = new Date, n = -6e4 * e.getTimezoneOffset(), i = this.store.getters["schedule/timezone"].tzo - n, o = new Date(e.getTime() + this.utcOffset + i).getDay(), r = 0; r < t.length; r++)
                    if (t[r].day === o)
                        return !0;
                return !1
            }
        }, {
            key: "hasCurrentTimePassedSchedule",
            value: function() {
                for (var t = this.store.getters["schedule/slots"], e = new Date, n = -6e4 * e.getTimezoneOffset(), i = this.store.getters["schedule/timezone"].tzo - n, o = new Date(e.getTime() + this.utcOffset + i), r = o.getDay(), a = 60 * o.getHours() + o.getMinutes(), s = 0; s < t.length; s++) {
                    var c = t[s];
                    if (c.day === r && a >= c.start && a < c.end)
                        return !1
                }
                return !0
            }
        }])
    },
    "284b": function(t, e, n) {
        "use strict";
        n.r(e);
        e.default = {
            namespaced: !0,
            state: {
                isOpen: !1
            },
            getters: {
                isOpen: function(t) {
                    return t.isOpen
                }
            },
            actions: {
                showOverlay: function(t, e) {
                    var n = t.commit;
                    t.state.isOpen !== e && n("setOverlayOpen", e)
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                }
            },
            mutations: {
                setOverlayOpen: function(t, e) {
                    t.isOpen = e
                },
                unsetData: function(t) {
                    for (var e = {
                        isOpen: !1
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                }
            }
        }
    },
    "32d9": function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var i = n("65b3")
              , o = n("745f")
              , r = n("4360");
            e.default = {
                namespaced: !0,
                state: function() {
                    return {
                        branding: {},
                        components: {},
                        consentData: {},
                        desktopVisibility: {},
                        id: null,
                        isWindowed: !1,
                        generalVisibility: {},
                        maxDesktop: {},
                        minDesktop: {},
                        minMobile: {},
                        mobileVisibility: {},
                        onClick: "max",
                        show: null,
                        states: {},
                        theme: {},
                        type: "inline",
                        version: void 0,
                        bubble: {},
                        isRTL: !1,
                        yOffset: 0,
                        xOffsetMobile: 0,
                        yOffsetMobile: 0,
                        xOffset: 0,
                        language: "en",
                        notification: {},
                        features: {},
                        webrtcOptions: {},
                        isEmbedded: !1,
                        localSoundEnabled: !0,
                        zoomRatio: 1,
                        toolbarOptions: {
                            showAgentAvatars: !1
                        },
                        isMobileLandscape: !1,
                        isFocus: !0,
                        isPopout: !1,
                        isIframe: !1,
                        agentDrivenStatus: void 0
                    }
                },
                getters: {
                    branding: function(t) {
                        return t.branding
                    },
                    consentData: function(t) {
                        return t.consentData
                    },
                    desktopVisibility: function(t) {
                        return t.desktopVisibility
                    },
                    generalVisibility: function(t) {
                        return t.generalVisibility
                    },
                    headerBgColor: function(t) {
                        return t.theme.header.background
                    },
                    headerTxtColor: function(t) {
                        return t.theme.header.text
                    },
                    id: function(t) {
                        return t.id
                    },
                    isRight: function(e, n, i) {
                        var o, r = ["br", "cr", "tr"], a = null === (o = t.Tawk_Window.jsApi) || void 0 === o || null === (o = o.local_API) || void 0 === o || null === (o = o.customStyle) || void 0 === o ? void 0 : o.visibility;
                        return i.browserData.mobileBrowserName ? a && a.mobile && a.mobile.position ? -1 !== r.indexOf(a.mobile.position) : -1 !== r.indexOf(e.mobileVisibility.position) : a && a.desktop && a.desktop.position ? -1 !== r.indexOf(a.desktop.position) : -1 !== r.indexOf(e.desktopVisibility.position)
                    },
                    isBottom: function(e, n, i) {
                        var o, r = ["br", "bl"], a = null === (o = t.Tawk_Window.jsApi) || void 0 === o || null === (o = o.local_API) || void 0 === o || null === (o = o.customStyle) || void 0 === o ? void 0 : o.visibility;
                        return i.browserData.mobileBrowserName ? a && a.mobile && a.mobile.position ? -1 !== r.indexOf(a.mobile.position) : -1 !== r.indexOf(e.mobileVisibility.position) : a && a.desktop && a.desktop.position ? -1 !== r.indexOf(a.desktop.position) : -1 !== r.indexOf(e.desktopVisibility.position)
                    },
                    isCenter: function(e, n, i) {
                        var o, r = ["cr", "cl"], a = null === (o = t.Tawk_Window.jsApi) || void 0 === o || null === (o = o.local_API) || void 0 === o || null === (o = o.customStyle) || void 0 === o ? void 0 : o.visibility;
                        return i.browserData.mobileBrowserName ? a && a.mobile && a.mobile.position ? -1 !== r.indexOf(a.mobile.position) : -1 !== r.indexOf(e.mobileVisibility.position) : a && a.desktop && a.desktop.position ? -1 !== r.indexOf(a.desktop.position) : -1 !== r.indexOf(e.desktopVisibility.position)
                    },
                    isWindowed: function(t) {
                        return t.isWindowed
                    },
                    isRoundWidget: function(t, e, n) {
                        return n.browserData.mobileBrowserName ? "round" === t.minMobile.type : "round" === t.minDesktop.type
                    },
                    maxDesktop: function(t) {
                        return t.maxDesktop
                    },
                    minDesktop: function(t) {
                        return t.minDesktop
                    },
                    mobileVisibility: function(t) {
                        return t.mobileVisibility
                    },
                    states: function(t) {
                        return t.states
                    },
                    version: function(t) {
                        return t.version
                    },
                    yOffset: function(t) {
                        return t.yOffset
                    },
                    xOffset: function(t) {
                        return t.xOffset
                    },
                    yOffsetMobile: function(t) {
                        return t.yOffsetMobile
                    },
                    xOffsetMobile: function(t) {
                        return t.xOffsetMobile
                    },
                    isRTL: function(t) {
                        return t.isRTL
                    },
                    bubble: function(t) {
                        return t.bubble
                    },
                    showMessagePreview: function(t, e, n) {
                        return n.browserData.mobileBrowserName ? t.notification.mobile.preview : t.notification.desktop.preview
                    },
                    features: function(t) {
                        return t.features
                    },
                    showVisitorTyping: function(t) {
                        return t.notification.all.visitorTyping
                    },
                    webrtcOptions: function(t) {
                        return t.webrtcOptions
                    },
                    language: function(t) {
                        return t.language
                    },
                    visitorBgColor: function(t) {
                        return t.theme.visitor.messageBackground
                    },
                    visitorTxtColor: function(t) {
                        return t.theme.visitor.messageText
                    },
                    agentBgColor: function(t) {
                        return t.theme.agent.messageBackground
                    },
                    agentTxtColor: function(t) {
                        return t.theme.agent.messageText
                    },
                    showEstimatedWaitTime: function(t) {
                        return t.notification && t.notification.all && t.notification.all.estimatedWaitTime
                    },
                    showAgentTyping: function(t) {
                        return t.notification && t.notification.all && t.notification.all.agentTyping
                    },
                    isPrechatEnabled: function(t) {
                        return t.states.prechat && t.states.prechat.handlers && t.states.prechat.handlers.form
                    },
                    isEmbedded: function(t) {
                        return t.isEmbedded
                    },
                    isSoundEnabled: function(t) {
                        return t.notification && t.notification.all && t.notification.all.sound && t.localSoundEnabled
                    },
                    localSoundEnabled: function(t) {
                        return t.localSoundEnabled
                    },
                    show: function(t) {
                        return t.show
                    },
                    onClick: function(t) {
                        return t.onClick
                    },
                    isVisible: function(t, e, n) {
                        return null !== e.show ? t.show : !("offline" === n.session.pageStatus && !e.generalVisibility.showWhenOffline) && (n.browserData.mobileBrowserName ? t.mobileVisibility.show : t.desktopVisibility.show)
                    },
                    showTitleNotification: function(t) {
                        return !(!t.notification || !t.notification.all) && t.notification.all.tab
                    },
                    hasLiveChat: function(t) {
                        return t.components.liveChat
                    },
                    minMobile: function(t) {
                        return t.minMobile
                    },
                    zoomRatio: function(t) {
                        return t.zoomRatio
                    },
                    components: function(t) {
                        return t.components
                    },
                    emailTranscriptEnabled: function(t) {
                        return t.features.transcript
                    },
                    emojiEnabled: function(t) {
                        return t.features && t.features.emoji
                    },
                    toolbarOptions: function(t) {
                        return t.toolbarOptions
                    },
                    isMobileLandscape: function(t) {
                        return t.isMobileLandscape
                    },
                    isFocus: function(t) {
                        return t.isFocus
                    },
                    isPopout: function(t) {
                        return t.isPopout
                    },
                    isIframe: function(t) {
                        return t.isIframe
                    },
                    agentDrivenStatus: function(t) {
                        return t.agentDrivenStatus
                    }
                },
                actions: {
                    toggleVisibility: function(t) {
                        (0,
                        t.commit)("setVisibility", !t.state.show)
                    },
                    updateBranding: function(t, e) {
                        (0,
                        t.commit)("setBranding", e)
                    },
                    updateId: function(t, e) {
                        (0,
                        t.commit)("setId", e)
                    },
                    toggleLocalSound: function(e, n) {
                        var i = e.state;
                        void 0 !== n ? i.localSoundEnabled = n : (i.localSoundEnabled = !i.localSoundEnabled,
                        t.Tawk_Window.app.$socket.publish("toggleSound", i.localSoundEnabled))
                    },
                    resetState: function(t) {
                        (0,
                        t.commit)("unsetData")
                    },
                    toggleAgentAvatarToolbar: function(t, e) {
                        (0,
                        t.commit)("setAgentAvatarToolbar", e)
                    },
                    updateMobileLandscape: function(t, e) {
                        (0,
                        t.commit)("setMobileLandscape", e)
                    },
                    toggleFocus: function(t, e) {
                        (0,
                        t.commit)("setFocus", e)
                    },
                    shutdown: function(e) {
                        var n = e.commit
                          , o = e.dispatch
                          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                        ;
                        o("chat/resetState", null, {
                            root: !0
                        }),
                        t.Tawk_Window.activityMonitor.cleanUp(),
                        i.a.disconnectSocket(),
                        delete window.$_Tawk.downloaded,
                        n("setVisibility", !1),
                        r()
                    },
                    start: function(e, n) {
                        var i = e.commit
                          , a = e.rootGetters
                          , s = e.dispatch
                          , c = n.params
                          , u = void 0 === c ? {} : c
                          , l = n.callback
                          , d = void 0 === l ? function() {}
                        : l;
                        s("socket/updateIsConnecting", !0, {
                            root: !0
                        });
                        var f = a["property/id"]
                          , h = a["widget/id"]
                          , p = new o.a({
                            propertyId: f,
                            widgetId: h,
                            callback: function() {
                                u.showWidget && i("setVisibility", !0),
                                d()
                            }
                        });
                        new Promise((function(e, n) {
                            t.Tawk_Window.register.init(e, n)
                        }
                        )).then((function(e) {
                            t.Tawk_Window.widgetSettings.version = e.data.settingsVersion;
                            var n = window.sessionStorage.getItem("tawk_sv");
                            n && n === e.data.settingsVersion ? (p.extractRegistrationData(e),
                            t.Tawk_Window.eventBus.$emit("updateWidgetSettings"),
                            t.Tawk_Window.app.$socket.connect(),
                            t.Tawk_Window.activityMonitor.initActivityReset(),
                            r.a.dispatch("router/clearHistory")) : (window.sessionStorage.setItem("tawk_sv", e.data.settingsVersion),
                            t.Tawk_Window.widgetSettings.getSettings((function() {
                                p.extractRegistrationData(e),
                                t.Tawk_Window.eventBus.$emit("updateWidgetSettings"),
                                t.Tawk_Window.app.$socket.connect(),
                                t.Tawk_Window.activityMonitor.initActivityReset(),
                                r.a.dispatch("router/clearHistory")
                            }
                            ), (function(t) {
                                console.error(t)
                            }
                            )))
                        }
                        ))
                    },
                    switchWidget: function(e, n) {
                        var i = e.dispatch
                          , a = e.commit
                          , s = n.propertyId
                          , c = n.widgetId
                          , u = n.callback;
                        return null === s ? u("INVALID_PROPERTY_ID") : null === c ? u("INVALID_WIDGET_ID") : (i("shutdown"),
                        r.a.dispatch("reset"),
                        void new o.a({
                            propertyId: s,
                            widgetId: c,
                            callback: function() {
                                a("setVisibility", !0),
                                t.Tawk_Window.eventBus.$emit("switchWidget"),
                                t.Tawk_Window.updateBootConfig({
                                    propertyId: s,
                                    widgetId: c
                                }),
                                u()
                            }
                        }).init())
                    }
                },
                mutations: {
                    setBranding: function(t, e) {
                        t.branding = e
                    },
                    setId: function(t, e) {
                        t.id = e
                    },
                    setData: function(t, e) {
                        if (t.version = e.version,
                        t.onClick = e.behavior.click,
                        t.components = e.components,
                        t.theme = e.theme,
                        t.states = e.states,
                        t.bubble = e.bubble,
                        t.agentDrivenStatus = e.agentDrivenStatus,
                        t.maxDesktop = {
                            width: parseInt(e.maximized.desktop.width, 10) || 350,
                            height: parseInt(e.maximized.desktop.height, 10) || 520
                        },
                        t.minDesktop = e.minimized.desktop,
                        "rectangle" === e.minimized.desktop.type ? (t.minDesktop.width = parseInt(e.minimized.desktop.width, 10) || 320,
                        t.minDesktop.height = parseInt(e.minimized.desktop.height, 10) || 40,
                        t.yOffset = 0,
                        t.xOffset = 10) : (t.minDesktop.width = 60,
                        t.minDesktop.height = 60,
                        t.yOffset = 20,
                        t.xOffset = 20),
                        t.minMobile = e.minimized.mobile,
                        "rectangle" === e.minimized.mobile.type ? (t.minMobile.width = 110,
                        t.minMobile.height = 48,
                        t.yOffsetMobile = 15,
                        t.xOffsetMobile = 15) : (t.minMobile.width = 60,
                        t.minMobile.height = 60,
                        t.yOffsetMobile = 20,
                        t.xOffsetMobile = 20),
                        t.generalVisibility = e.visibility.all,
                        t.desktopVisibility = e.visibility.desktop,
                        t.mobileVisibility = e.visibility.mobile,
                        t.consentData = e.consent,
                        t.language = e.language,
                        t.isRTL = -1 !== ["ar", "he", "fa"].indexOf(e.language),
                        t.notification = e.notification,
                        t.features = e.features,
                        t.bubble && "image" === t.bubble.type && t.bubble.config && "gallery" === t.bubble.config.image.type) {
                            var n = e.visibility.desktop.position
                              , i = e.minimized.desktop.type;
                            ("cr" !== n && "rectangle" !== i || "cl" !== n && "rectangle" !== i) && (t.bubble.config.offsetX -= t.xOffset),
                            "cr" !== t.desktopVisibility.position && "cl" !== t.desktopVisibility.position && (t.bubble.config.offsetY -= t.yOffset)
                        }
                        e.scheduler && e.scheduler.config ? this.dispatch("schedule/addSlots", e.scheduler) : this.dispatch("schedule/addSlots")
                    },
                    setVisibility: function(e, n) {
                        e.show = n,
                        e.show || t.Tawk_Window.jsApi.triggerApiHandlers("onChatHidden")
                    },
                    setWebrtcOptions: function(t, e) {
                        t.webrtcOptions = e
                    },
                    setIsWindowed: function(t, e) {
                        t.isWindowed = e
                    },
                    setIsEmbedded: function(t, e) {
                        t.isEmbedded = e
                    },
                    setZoomRatio: function(t, e) {
                        t.zoomRatio = e
                    },
                    unsetData: function(t) {
                        t.localSoundEnabled = !0
                    },
                    setAgentAvatarToolbar: function(t, e) {
                        t.toolbarOptions.showAgentAvatars = e
                    },
                    setMobileLandscape: function(t, e) {
                        t.isMobileLandscape = e
                    },
                    setFocus: function(t, e) {
                        t.isFocus = e
                    },
                    setIsPopout: function(t, e) {
                        t.isPopout = e
                    },
                    setIsIframe: function(t, e) {
                        t.isIframe = e
                    }
                }
            }
        }
        .call(this, n("c8ba"))
    },
    "3b35": function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var i = n("7f46");
            function o() {
                o = function() {
                    return e
                }
                ;
                var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, r = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                , a = "function" == typeof Symbol ? Symbol : {}, c = a.iterator || "@@iterator", u = a.asyncIterator || "@@asyncIterator", l = a.toStringTag || "@@toStringTag";
                function d(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function f(t, e, n, i) {
                    var o = e && e.prototype instanceof v ? e : v
                      , a = Object.create(o.prototype)
                      , s = new x(i || []);
                    return r(a, "_invoke", {
                        value: C(t, n, s)
                    }),
                    a
                }
                function h(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = f;
                var p = "suspendedStart"
                  , m = "executing"
                  , w = "completed"
                  , g = {};
                function v() {}
                function y() {}
                function b() {}
                var k = {};
                d(k, c, (function() {
                    return this
                }
                ));
                var T = Object.getPrototypeOf
                  , S = T && T(T(A([])));
                S && S !== n && i.call(S, c) && (k = S);
                var _ = b.prototype = v.prototype = Object.create(k);
                function I(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function W(t, e) {
                    function n(o, r, a, c) {
                        var u = h(t[o], t, r);
                        if ("throw" !== u.type) {
                            var l = u.arg
                              , d = l.value;
                            return d && "object" == s(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                n("next", t, a, c)
                            }
                            ), (function(t) {
                                n("throw", t, a, c)
                            }
                            )) : e.resolve(d).then((function(t) {
                                l.value = t,
                                a(l)
                            }
                            ), (function(t) {
                                return n("throw", t, a, c)
                            }
                            ))
                        }
                        c(u.arg)
                    }
                    var o;
                    r(this, "_invoke", {
                        value: function(t, i) {
                            function r() {
                                return new e((function(e, o) {
                                    n(t, i, e, o)
                                }
                                ))
                            }
                            return o = o ? o.then(r, r) : r()
                        }
                    })
                }
                function C(e, n, i) {
                    var o = p;
                    return function(r, a) {
                        if (o === m)
                            throw Error("Generator is already running");
                        if (o === w) {
                            if ("throw" === r)
                                throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = r,
                        i.arg = a; ; ) {
                            var s = i.delegate;
                            if (s) {
                                var c = P(s, i);
                                if (c) {
                                    if (c === g)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (o === p)
                                    throw o = w,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            o = m;
                            var u = h(e, n, i);
                            if ("normal" === u.type) {
                                if (o = i.done ? w : "suspendedYield",
                                u.arg === g)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: i.done
                                }
                            }
                            "throw" === u.type && (o = w,
                            i.method = "throw",
                            i.arg = u.arg)
                        }
                    }
                }
                function P(e, n) {
                    var i = n.method
                      , o = e.iterator[i];
                    if (o === t)
                        return n.delegate = null,
                        "throw" === i && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        P(e, n),
                        "throw" === n.method) || "return" !== i && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        g;
                    var r = h(o, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        g;
                    var a = r.arg;
                    return a ? a.done ? (n[e.resultName] = a.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    g) : a : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    g)
                }
                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(E, this),
                    this.reset(!0)
                }
                function A(e) {
                    if (e || "" === e) {
                        var n = e[c];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var o = -1
                              , r = function n() {
                                for (; ++o < e.length; )
                                    if (i.call(e, o))
                                        return n.value = e[o],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return r.next = r
                        }
                    }
                    throw new TypeError(s(e) + " is not iterable")
                }
                return y.prototype = b,
                r(_, "constructor", {
                    value: b,
                    configurable: !0
                }),
                r(b, "constructor", {
                    value: y,
                    configurable: !0
                }),
                y.displayName = d(b, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                    d(t, l, "GeneratorFunction")),
                    t.prototype = Object.create(_),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                I(W.prototype),
                d(W.prototype, u, (function() {
                    return this
                }
                )),
                e.AsyncIterator = W,
                e.async = function(t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new W(f(t, n, i, o),r);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                I(_),
                d(_, l, "Generator"),
                d(_, c, (function() {
                    return this
                }
                )),
                d(_, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var i in e)
                        n.push(i);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var i = n.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = A,
                x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(O),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function o(i, o) {
                            return s.type = "throw",
                            s.arg = e,
                            n.next = i,
                            o && (n.method = "next",
                            n.arg = t),
                            !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = i.call(a, "catchLoc")
                                  , u = i.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var a = r ? r.completion : {};
                        return a.type = t,
                        a.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                O(n),
                                g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, i) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: n,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        g
                    }
                },
                e
            }
            function r(t, e, n, i, o, r, a) {
                try {
                    var s = t[r](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, o)
            }
            function a(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var a = t.apply(e, n);
                        function s(t) {
                            r(a, i, o, s, c, "next", t)
                        }
                        function c(t) {
                            r(a, i, o, s, c, "throw", t)
                        }
                        s(void 0)
                    }
                    ))
                }
            }
            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            e.default = {
                namespaced: !0,
                state: {
                    chatBubbleClosed: !1,
                    chatWindowState: "min",
                    departments: [],
                    isWindowFocused: !1,
                    needConsent: !1,
                    pageStatus: "",
                    pageStatusVersion: 0,
                    prechatFormSubmitted: !1,
                    previousSessionKey: null,
                    restarted: !1,
                    sessionKey: "",
                    visitorSocketServer: "",
                    waitTime: 6e4,
                    lastMessageTimestamp: 0,
                    token: null,
                    tokenExpiry: 0,
                    isInactive: null,
                    originalPageTitle: null,
                    pageReferrer: null,
                    waitTimeTimeout: null,
                    waitTimeFirstTime: !1,
                    waitTimeInitialized: !1,
                    isReconnecting: !1,
                    isNotValidEmail: null
                },
                getters: {
                    chatBubbleClosed: function(t) {
                        return t.chatBubbleClosed
                    },
                    chatWindowState: function(t) {
                        return t.chatWindowState
                    },
                    isWindowFocused: function(t) {
                        return t.isWindowFocused
                    },
                    previousSessionKey: function(t) {
                        return t.previousSessionKey
                    },
                    pageStatus: function(t) {
                        return t.pageStatus
                    },
                    pageStatusVersion: function(t) {
                        return t.pageStatusVersion
                    },
                    sessionKey: function(t) {
                        return t.sessionKey
                    },
                    visitorSocketServer: function(t) {
                        return t.visitorSocketServer
                    },
                    prechatFormSubmitted: function(t) {
                        return t.prechatFormSubmitted
                    },
                    lastMessageTimestamp: function(t) {
                        return t.lastMessageTimestamp
                    },
                    token: function(t) {
                        return t.token
                    },
                    departments: function(t) {
                        return t.departments
                    },
                    waitTime: function(t) {
                        return t.waitTime
                    },
                    needConsent: function(t) {
                        return t.needConsent
                    },
                    isInactive: function(t) {
                        return t.isInactive
                    },
                    originalPageTitle: function(t) {
                        return t.originalPageTitle
                    },
                    isReconnecting: function(t) {
                        return t.isReconnecting
                    },
                    isNotValidEmail: function(t) {
                        return t.isNotValidEmail
                    }
                },
                actions: {
                    closeChatBubble: function(e, n) {
                        (0,
                        e.commit)("setChatBubbleClosed", !0),
                        n || t.Tawk_Window.app.$socket.publish("notifyChatBubbleClosed")
                    },
                    sendNavigationEvent: function(e) {
                        var n = e.state
                          , i = e.rootGetters;
                        t.Tawk_Window.webStorage.sessionStore.getItem("previousNav") !== window.location.href && setTimeout((function() {
                            var e = {
                                u: window.location.href,
                                t: document.title
                            };
                            null !== i["session/originalPageTitle"] && (e.t = i["session/originalPageTitle"]),
                            document.referrer && n.pageReferrer !== document.referrer && (n.pageReferrer = document.referrer,
                            e.r = document.referrer),
                            t.Tawk_Window.app.$socket.publish("nav", e),
                            t.Tawk_Window.webStorage.sessionStore.setItem("previousNav", e.u)
                        }
                        ), 500)
                    },
                    setPageStatus: function(e, n) {
                        var o = e.state
                          , r = e.commit
                          , a = e.dispatch
                          , s = e.rootGetters
                          , c = n.data
                          , u = n.status;
                        if (!s["schedule/isEnabled"] && void 0 !== s["widget/agentDrivenStatus"] && !1 === s["widget/agentDrivenStatus"])
                            return a("triggerPageStatusAPI", "online"),
                            r("updatePageStatus", "online"),
                            void (c && Object.keys(c).length && c.dptst && Array.isArray(c.dptst) && r("setDepartment", c.dptst));
                        if (c && Object.keys(c).length) {
                            var l;
                            if (!(l = c.ast) || !i.a.isString(l) || c.dptst && !Array.isArray(c.dptst))
                                return;
                            (c.asver > o.pageStatusVersion || 0 === c.asver) && (t.Tawk_Window.scheduler.originalPageStatus = c.ast,
                            r("updatePageStatusVersion", c.asver),
                            r("setDepartment", c.dptst),
                            s["schedule/isEnabled"] || (a("triggerPageStatusAPI", c.ast),
                            r("updatePageStatus", c.ast)),
                            t.Tawk_Window.scheduler.calculate())
                        } else
                            u && (a("triggerPageStatusAPI", u),
                            r("updatePageStatus", u))
                    },
                    toggleWidget: function(t) {
                        var e = t.dispatch
                          , n = t.state;
                        t.rootGetters["widget/isWindowed"] ? window.close() : "min" === n.chatWindowState ? (e("updateChatWindowState", "max"),
                        e("chat/setSeenAllUnseenMessages", null, {
                            root: !0
                        })) : e("updateChatWindowState", "min")
                    },
                    updateChatWindowState: function(e, n) {
                        var i = e.commit
                          , o = e.state
                          , r = e.rootGetters;
                        o.chatWindowState !== n && (i("setChatWindowState", n),
                        "max" === n && "pop" === r["widget/onClick"] || ("max" === n ? t.Tawk_Window.jsApi.triggerApiHandlers("onChatMaximized") : "min" === n && t.Tawk_Window.jsApi.triggerApiHandlers("onChatMinimized"),
                        t.Tawk_Window.app.$socket.publish("notifyWindowState", n)))
                    },
                    updateConnectionData: function(e, n) {
                        var i = e.state
                          , o = e.commit
                          , r = e.dispatch;
                        void 0 !== s(n.vss) && o("setVisitorSocketServer", n.vss),
                        void 0 !== s(n.sk) && (i.sessionKey && i.sessionKey !== n.sk && (t.Tawk_Window.webStorage.sessionStore.setItem("previousNav", null),
                        r("router/routerPush", "/", {
                            root: !0
                        })),
                        o("setSessionKey", n.sk))
                    },
                    updateConsentFlag: function(t, e) {
                        (0,
                        t.commit)("setConsentFlag", e)
                    },
                    updatePrechatSubmitted: function(t, e) {
                        (0,
                        t.commit)("setPrechatSubmitted", e)
                    },
                    updatePreviousSessionKey: function(t, e) {
                        (0,
                        t.commit)("setPreviousSessionKey", e)
                    },
                    updateIsWindowFocused: function(t, e) {
                        (0,
                        t.commit)("setIsWindowFocused", e)
                    },
                    updateToken: function(e, n) {
                        var i = e.state
                          , o = new Date;
                        o.setSeconds(n.expiry),
                        n.token ? (i.token = n.token,
                        t.Tawk_Window.sessionManager.storeToken(n.token)) : i.token = t.Tawk_Window.sessionManager.getStoredToken(),
                        i.tokenExpiry = o.getTime()
                    },
                    retrieveNewToken: function(e) {
                        return a(o().mark((function n() {
                            var i;
                            return o().wrap((function(n) {
                                for (; ; )
                                    switch (n.prev = n.next) {
                                    case 0:
                                        return i = e.dispatch,
                                        n.abrupt("return", new Promise((function(e, n) {
                                            t.Tawk_Window.register.init((function(t) {
                                                i("updateToken", {
                                                    token: t.data.tkn,
                                                    expiry: t.data.tknExp
                                                }),
                                                e()
                                            }
                                            ), n)
                                        }
                                        )));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                    }
                            }
                            ), n)
                        }
                        )))()
                    },
                    updateVisitorChatSeen: function(e, n) {
                        (0,
                        e.commit)("setLastMessageTimestamp", n),
                        t.Tawk_Window.app.$socket.publish("visitorChatSeen", {
                            timestamp: n
                        }, (function() {}
                        ))
                    },
                    resetState: function(t) {
                        var e = t.commit
                          , n = t.state;
                        e("unsetData"),
                        clearTimeout(n.waitTimeTimeout),
                        e("setWaitTimeFirstTime", !1),
                        e("setWaitTimeInitialized", !1)
                    },
                    updateWaitTime: function(t, e) {
                        (0,
                        t.commit)("setWaitTime", e)
                    },
                    addWaitTime: function(t) {
                        var e = t.commit
                          , n = t.state
                          , i = t.dispatch;
                        n.waitTimeInitialized || (e("setWaitTimeInitialized", !0),
                        i("waitTimeUpdater"))
                    },
                    waitTimeUpdater: function(t) {
                        var e = t.commit
                          , n = t.state
                          , i = t.dispatch;
                        clearTimeout(n.waitTimeTimeout),
                        n.waitTime <= 6e4 || (n.waitTimeFirstTime ? (e("setWaitTime", n.waitTime - 6e4),
                        n.waitTimeTimeout = setTimeout((function() {
                            i("waitTimeUpdater")
                        }
                        ), 6e4)) : (e("setWaitTimeFirstTime", !0),
                        n.waitTimeTimeout = setTimeout((function() {
                            i("waitTimeUpdater")
                        }
                        ), 6e4)))
                    },
                    checkTokenValidity: function(t) {
                        return a(o().mark((function e() {
                            var n, i;
                            return o().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.dispatch,
                                        i = t.state,
                                        !((new Date).getTime() >= i.tokenExpiry)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 5,
                                        n("retrieveNewToken");
                                    case 5:
                                        return e.abrupt("return");
                                    case 6:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e)
                        }
                        )))()
                    },
                    reconnectSession: function(t, e) {
                        t.state.isReconnecting = !!e
                    },
                    triggerPageStatusAPI: function(e, n) {
                        n !== e.state.pageStatus && t.Tawk_Window.jsApi.triggerApiHandlers("onStatusChange", n)
                    }
                },
                mutations: {
                    setChatBubbleClosed: function(t, e) {
                        t.chatBubbleClosed = e
                    },
                    setVisitorSocketServer: function(t, e) {
                        t.visitorSocketServer = e
                    },
                    setSessionKey: function(t, e) {
                        t.sessionKey = e
                    },
                    setConsentFlag: function(t, e) {
                        t.needConsent = e
                    },
                    setPreviousSessionKey: function(t, e) {
                        t.previousSessionKey = e
                    },
                    setChatWindowState: function(t, e) {
                        t.chatWindowState = e
                    },
                    setIsWindowFocused: function(t, e) {
                        t.isWindowFocused = e
                    },
                    setPrechatSubmitted: function(t, e) {
                        t.prechatFormSubmitted = e
                    },
                    setLastMessageTimestamp: function(t, e) {
                        t.lastMessageTimestamp = e
                    },
                    setWaitTime: function(t, e) {
                        t.waitTime = e
                    },
                    setIsInactive: function(e, n) {
                        e.isInactive = n,
                        t.Tawk_Window.webStorage.sessionStore.setItem("previousNav", null)
                    },
                    setOriginalPageTitle: function(t, e) {
                        t.originalPageTitle = e
                    },
                    setWaitTimeFirstTime: function(t, e) {
                        t.waitTimeFirstTime = e
                    },
                    setWaitTimeInitialized: function(t, e) {
                        t.waitTimeInitialized = e
                    },
                    setDepartment: function(t, e) {
                        t.departments = e
                    },
                    unsetData: function(t) {
                        for (var e = {
                            chatBubbleClosed: !1,
                            chatWindowState: "min",
                            departments: [],
                            isWindowFocused: !1,
                            needConsent: !1,
                            pageStatus: "",
                            pageStatusVersion: 0,
                            prechatFormSubmitted: !1,
                            previousSessionKey: null,
                            restarted: !1,
                            sessionKey: "",
                            visitorSocketServer: "",
                            waitTime: 6e4,
                            lastMessageTimestamp: 0,
                            token: null,
                            tokenExpiry: 0,
                            isInactive: null,
                            originalPageTitle: null,
                            pageReferrer: null,
                            waitTimeTimeout: null,
                            waitTimeFirstTime: !1,
                            waitTimeInitialized: !1,
                            isReconnecting: !1,
                            isNotValidEmail: null
                        }, n = Object.keys(e), i = 0; i < n.length; i++) {
                            var o = n[i];
                            "pageStatus" !== o && (t[o] = e[o])
                        }
                    },
                    setIsNotValidEmail: function(t, e) {
                        t.isNotValidEmail = e
                    },
                    updatePageStatus: function(t, e) {
                        t.pageStatus = e
                    },
                    updatePageStatusVersion: function(t, e) {
                        t.pageStatusVersion = e
                    }
                }
            }
        }
        .call(this, n("c8ba"))
    },
    "3dfd": function(t, e, n) {
        "use strict";
        var i = n("8079").a
          , o = n("2877")
          , r = Object(o.a)(i, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: [t.isVisible ? "widget-visible" : "widget-hidden"],
                attrs: {
                    id: t.elementId
                }
            }, [e("div", {
                attrs: {
                    id: "min-widget"
                }
            }), e("div", {
                attrs: {
                    id: "max-widget"
                }
            }), e("div", {
                attrs: {
                    id: "message-preview"
                }
            }), e("div", {
                attrs: {
                    id: "chat-bubble"
                }
            })])
        }
        ), [], !1, null, null, null);
        e.a = r.exports
    },
    4360: function(t, e, n) {
        "use strict";
        var i = n("2b0e")
          , o = n("2f62");
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function s(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != r(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != r(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == r(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        n("cca6");
        var c = {}
          , u = {
            modules: {}
        };
        !function() {
            var t = n("c3e1");
            t.keys().forEach((function(e) {
                var n = t(e);
                if (c[e] !== n) {
                    c[e] = n;
                    var i = e.replace(/^\.\//, "").replace(/\.\w+$/, "").split(/\//).map((function(t) {
                        var e, n, i = t.split("-");
                        i.length && ((e = i.splice(0, 1)).length && (n = (e = e[0].toLowerCase()).charAt(0).toLowerCase() + e.slice(1)));
                        for (var o = 0; o < i.length; o++) {
                            var r = i[o].toLowerCase();
                            n += r.charAt(0).toUpperCase() + r.slice(1)
                        }
                        return n
                    }
                    ))
                      , o = {};
                    o[i.pop()] = function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? a(Object(n), !0).forEach((function(e) {
                                s(t, e, n[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }
                            ))
                        }
                        return t
                    }({}, n.default),
                    u.modules = Object.assign(o, u.modules)
                }
            }
            ))
        }();
        var l = u.modules;
        i.a.use(o.a),
        void 0 !== window.Prototype && "string" == typeof window.Prototype.Version && parseFloat(window.Prototype.Version.substr(0, 3), 10) <= 1.6 && Object.defineProperty(Array.prototype, "reduce", {
            value: function(t) {
                if (null === this)
                    throw new TypeError("Array.prototype.reduce called on null or undefined");
                if ("function" != typeof t)
                    throw new TypeError("".concat(t, " is not a function"));
                var e, n = Object(this), i = n.length >>> 0, o = 0;
                if (arguments.length >= 2)
                    e = arguments[1];
                else {
                    for (; o < i && !(o in n); )
                        o++;
                    if (o >= i)
                        throw new TypeError("Reduce of empty array with no initial value");
                    e = n[o++]
                }
                for (; o < i; )
                    o in n && (e = t(e, n[o], o, n)),
                    o++;
                return e
            }
        }),
        e.a = new o.a.Store({
            actions: {
                reset: function(t) {
                    for (var e = t.dispatch, n = Object.keys(l), i = 0; i < n.length; i++) {
                        var o = n[i];
                        e("".concat(o, "/resetState"))
                    }
                }
            },
            modules: l
        })
    },
    "43af": function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return s
            }
            ));
            var i = n("bdd0");
            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, a(i.key), i)
                }
            }
            function a(t) {
                var e = function(t, e) {
                    if ("object" != o(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != o(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(e) ? e : e + ""
            }
            var s = function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t(e) {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t),
                this.store = e,
                this.languageScript
            }
            ), [{
                key: "getSettings",
                value: function(t, e) {
                    var n = this
                      , o = {
                        propertyId: this.store.getters["property/id"],
                        widgetId: this.store.getters["widget/id"]
                    }
                      , r = window.sessionStorage.getItem("tawk_sv");
                    this.version ? o.sv = this.version : o.sv = void 0 !== r ? r : null,
                    i.a.get("".concat("https://va.tawk.to", "/v1/widget-settings"), o, null, (function(i, o) {
                        if (i)
                            return e(i);
                        n.languageScript && n.languageScript.parentNode && n.languageScript.parentNode.removeChild(n.languageScript),
                        n.languageScript = document.createElement("script"),
                        document.body.appendChild(n.languageScript),
                        n.languageScript.onload = function() {
                            n.processSettings(o.data),
                            t(o.data.settingsVersion)
                        }
                        ,
                        n.languageScript.async = !0,
                        n.languageScript.charset = "UTF-8",
                        n.languageScript.src = "/tawk/en.js"
                    }
                    ))
                }
            }, {
                key: "processSettings",
                value: function(t) {
                    t && (this.version = t.settingsVersion,
                    this.store.commit("widget/setData", t.widget),
                    this.store.commit("widget/setWebrtcOptions", t.webrtc),
                    this.store.dispatch("widget/updateBranding", t.branding),
                    void 0 !== t.widget.agentDrivenStatus && !1 === t.widget.agentDrivenStatus && this.store.dispatch("session/setPageStatus", {
                        status: "online"
                    }))
                }
            }, {
                key: "xOffset",
                value: function() {
                    var e, n, i = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == i || null === (n = i.desktop) || void 0 === n ? void 0 : n.xOffset)) {
                        var o = i.desktop.xOffset;
                        if ("string" == typeof o && (o = parseInt(i.desktop.xOffset.replace("px", ""), 10)),
                        !isNaN(o))
                            return o
                    }
                    return this.store.getters["widget/isCenter"] && !this.store.getters["widget/isRoundWidget"] ? 0 : this.store.getters["widget/xOffset"]
                }
            }, {
                key: "yOffset",
                value: function() {
                    var e, n, i = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == i || null === (n = i.desktop) || void 0 === n ? void 0 : n.yOffset)) {
                        var o = i.desktop.yOffset;
                        if ("string" == typeof o && (o = parseInt(i.desktop.yOffset.replace("px", ""), 10)),
                        !isNaN(o))
                            return o
                    }
                    return this.store.getters["widget/isCenter"] ? 0 : this.store.getters["widget/yOffset"]
                }
            }, {
                key: "xOffsetMobile",
                value: function() {
                    var e, n, i = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == i || null === (n = i.mobile) || void 0 === n ? void 0 : n.xOffset)) {
                        var o = i.mobile.xOffset;
                        if ("string" == typeof o && (o = parseInt(o.replace("px", ""), 10)),
                        !isNaN(o))
                            return o
                    }
                    return this.store.getters["widget/isCenter"] && !this.store.getters["widget/isRoundWidget"] ? 0 : this.store.getters["widget/xOffsetMobile"]
                }
            }, {
                key: "yOffsetMobile",
                value: function() {
                    var e, n, i = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == i || null === (n = i.mobile) || void 0 === n ? void 0 : n.yOffset)) {
                        var o = i.mobile.yOffset;
                        if ("string" == typeof o && (o = parseInt(o.replace("px", ""), 10)),
                        !isNaN(o))
                            return o
                    }
                    return this.store.getters["widget/isCenter"] ? 0 : this.store.getters["widget/yOffsetMobile"]
                }
            }, {
                key: "bubbleXOffset",
                value: function() {
                    var e, n, i, o = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == o || null === (n = o.bubble) || void 0 === n ? void 0 : n.xOffset)) {
                        var r = o.bubble.xOffset;
                        if ("string" == typeof r && (r = parseInt(r.replace("px", ""), 10)),
                        !isNaN(r))
                            return r
                    }
                    if (void 0 !== (null == o || null === (i = o.desktop) || void 0 === i ? void 0 : i.position)) {
                        var a, s = null == o || null === (a = o.desktop) || void 0 === a ? void 0 : a.position;
                        if (s && this.store.getters["widget/desktopVisibility"].position !== s)
                            return this.store.getters["widget/isCenter"] ? this.store.getters["widget/minDesktop"].height + 5 : 0
                    }
                    return this.store.getters["widget/bubble"].config.offsetX
                }
            }, {
                key: "bubbleYOffset",
                value: function() {
                    var e, n, i, o = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == o || null === (n = o.bubble) || void 0 === n ? void 0 : n.yOffset)) {
                        var r = o.bubble.yOffset;
                        if ("string" == typeof r && (r = parseInt(r.replace("px", ""), 10)),
                        !isNaN(r))
                            return r
                    }
                    if (void 0 !== (null == o || null === (i = o.desktop) || void 0 === i ? void 0 : i.position)) {
                        var a, s = null == o || null === (a = o.desktop) || void 0 === a ? void 0 : a.position;
                        if (s && this.store.getters["widget/desktopVisibility"].position !== s)
                            return this.store.getters["widget/isCenter"] ? 0 : this.store.getters["widget/minDesktop"].height + 5
                    }
                    return this.store.getters["widget/bubble"].config.offsetY
                }
            }, {
                key: "bubbleRotate",
                value: function() {
                    var e, n, i = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == i || null === (n = i.bubble) || void 0 === n ? void 0 : n.rotate)) {
                        var o = i.bubble.rotate;
                        if ("string" == typeof o && (o = parseInt(o.replace("deg", ""), 10)),
                        !isNaN(o) && -1 !== [0, 90, -90].indexOf(o))
                            return o
                    }
                    return this.store.getters["widget/bubble"].config.rotate
                }
            }, {
                key: "isRoundWidget",
                value: function() {
                    var e, n, i = this.store.getters["widget/isRoundWidget"], o = null === (e = t.Tawk_Window.jsApi) || void 0 === e || null === (e = e.local_API) || void 0 === e || null === (e = e.customStyle) || void 0 === e ? void 0 : e.visibility;
                    if (void 0 !== (null == o || null === (n = o.desktop) || void 0 === n ? void 0 : n.position)) {
                        var r, a = null == o || null === (r = o.desktop) || void 0 === r ? void 0 : r.position;
                        if (this.store.getters["widget/desktopVisibility"].position !== a)
                            return !1
                    }
                    return i
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var e, i = n("2b0e"), o = n("4360"), r = n("745f");
            i.a.config.productionTip = !1,
            t.Tawk_Window = {
                maximize: !1
            };
            var a = new r.a;
            t.Tawk_Window.registerWithConsent = function() {
                t.Tawk_Window.maximize = !0,
                t.Tawk_Window.sessionManager.storeSessionInformation(!0),
                new Promise((function(e, n) {
                    t.Tawk_Window.register.init(e, n)
                }
                )).then((function(e) {
                    a.extractRegistrationData(e),
                    t.Tawk_Window.app.$socket.connect(),
                    o.a.dispatch("router/clearHistory"),
                    t.Tawk_Window.sessionManager.storeSessionInformation(!0),
                    t.Tawk_Window.popoutWin && t.Tawk_Window.popoutWin.postMessage("twkPopWidgetRegister", "*")
                }
                ))
            }
            ,
            t.Tawk_Window.retryRegister = function() {
                new Promise((function(e, n) {
                    t.Tawk_Window.register.init(e, n)
                }
                )).then((function(e) {
                    a.extractRegistrationData(e),
                    t.Tawk_Window.app.$socket.connect()
                }
                ))
            }
            ,
            t.Tawk_Window.popoutWidget = function() {
                var e = o.a.getters["property/id"]
                  , n = o.a.getters["widget/id"]
                  , i = o.a.getters["widget/branding"]
                  , r = "".concat("https://tawk.to", "/chat/").concat(e, "/");
                o.a.dispatch("session/updateChatWindowState", "min"),
                t.Tawk_Window.popoutWin && !t.Tawk_Window.popoutWin.closed && t.Tawk_Window.popoutWin.focus ? t.Tawk_Window.popoutWin.focus() : (i && i.whitelabeled && i.popoutBaseUrl && (r = "".concat(i.popoutBaseUrl, "/chat/")),
                t.Tawk_Window.popoutWin = window.open(r + n + "?pop=1", "Tawk", "height=500, width=450, resizable=yes, toolbar=no, location=no, menubar=no, personalbar=no"))
            }
            ,
            t.Tawk_Window.criticalRefresh = function(t) {
                if (o.a.getters["widget/isWindowed"])
                    return window.location.reload(!!t);
                delete window.$_Tawk.downloaded,
                o.a.dispatch("router/clearHistory"),
                a.connect()
            }
            ,
            t.Tawk_Window.updateBootConfig = function(t) {
                a.updateConfig(t)
            }
            ,
            window.addEventListener("beforeunload", (function() {
                t.Tawk_Window && t.Tawk_Window.logger && (t.Tawk_Window.logger.unloading = !0)
            }
            )),
            window.addEventListener("message", (function(e) {
                if (!t.Tawk_Window.popoutWin || "getTwkWidgetUUID" !== e.data)
                    return "twkRegisterWConsent" === e.data && e.source === t.Tawk_Window.popoutWin ? t.Tawk_Window.registerWithConsent() : void (o.a.getters["widget/isPopout"] && "twkPopWidgetRegister" === e.data && e.source === window.opener && t.Tawk_Window.registerWithConsent());
                t.Tawk_Window.popoutWin.postMessage({
                    twkWidgetUUID: o.a.getters["visitor/uuid"]
                }, e.origin)
            }
            ), !1),
            a.init({
                visitor: null === (e = window.Tawk_API) || void 0 === e ? void 0 : e.visitor
            })
        }
        .call(this, n("c8ba"))
    },
    5868: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        ));
        var i = ["(?:(?:[a-z]+:)?//)?", "(?:\\S+(?::\\S*)?@)?", "(?:localhost|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))", "(?::\\d{2,5})?", '(?:[/?#][^\\s"]*)?'].join("")
          , o = {
            regLineBreaks: /(\r\n|\n|\r)/gm,
            regBr: /<br\/>/,
            regMatchUrl: new RegExp("(?:^" + i + "$)","i"),
            regMatchIp: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\/([a-zA-Z0-9!$&'()*+.=-_~:@\\/\\?#]+)+)\b/gi,
            regEmailMatch: /^((mailto:){0,1}[a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]+)$/,
            regTelMatch: /^(tel:\+|\+|tel:){1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}\b/gi,
            br: "<br/>",
            getTargetElement: function(t) {
                var e = t.target || t.srcElement;
                return 3 === e.nodeType && (e = e.parentNode),
                e
            },
            formatFileSize: function(t) {
                var e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
                if (!(t = parseInt(t, 10)))
                    return "0Bytes";
                for (var n = 1; n < e.length; n++)
                    if (t < Math.pow(1024, n))
                        return Math.round(t / Math.pow(1024, n - 1) * 100) / 100 + e[n - 1];
                return t
            }
        }
    },
    "65b3": function(t, e, n) {
        "use strict";
        (function(t) {
            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, r(i.key), i)
                }
            }
            function r(t) {
                var e = function(t, e) {
                    if ("object" != i(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != i(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == i(e) ? e : e + ""
            }
            n("cc70"),
            e.a = new (function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t() {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t),
                this.chatWindowStates = {
                    min: !0,
                    max: !0
                },
                this.io = null,
                this.selfOrigin = null,
                this.disconnect = !1,
                this.ready = !1,
                this.banned = !1,
                this.forceDisconnected = !1,
                this.clearRegisterRetryTimeout = null,
                this.events = {},
                this.stack = [],
                this.connectCount = 0
            }
            ), [{
                key: "install",
                value: function(t, e) {
                    var n = e.store;
                    t.prototype.$socket = this,
                    this.store = n
                }
            }, {
                key: "connect",
                value: function() {
                    var e, n = this, i = (new Date).getTime();
                    window.$_Tawk.connected = !1,
                    this.disconnect = !1,
                    this.forceDisconnected = !1,
                    5 !== this.connectCount ? (this.io && (this.io.removeAllListeners(),
                    this.io.disconnect()),
                    e = {
                        k: this.store.getters["session/sessionKey"],
                        cver: this.store.getters["chat/chatVersion"],
                        pop: this.store.getters["widget/isWindowed"],
                        asver: this.store.getters["session/pageStatusVersion"],
                        tkn: this.store.getters["session/token"]
                    },
                    this.connectCount++,
                    this.io = new window.$__TawkSocket("wss://".concat(this.store.getters["session/visitorSocketServer"], "/"),{
                        transports: ["websocket"],
                        engineIo: window.$__TawkEngine,
                        path: "/s",
                        query: e
                    }),
                    this.io.on("disconnect", (function() {
                        n.disconnectHandler()
                    }
                    )),
                    this.io.on("error", (function(e) {
                        var i, o = "socket on error";
                        if (e instanceof Error) {
                            if (i = {
                                toString: e.toString(),
                                stack: e.stack,
                                lineNumber: e.lineNumber,
                                fileName: e.fileName
                            },
                            t.Tawk_Window.logger.unloading && -1 === i.toString.indexOf("post"))
                                return;
                            "TransportError" === e.type && (i.description = e.description),
                            -1 !== i.toString.indexOf("post") && (o = "socket post error")
                        } else
                            i = e;
                        t.Tawk_Window.logger.reportIncident(o, i),
                        n.io.disconnect(),
                        n.disconnectHandler()
                    }
                    )),
                    this.io.on("connect", (function() {
                        n.disconnect = !1,
                        n.store.dispatch("session/reconnectSession", !1)
                    }
                    )),
                    this.io.on("ready", (function(e, o, r) {
                        if (!t.Tawk_Window)
                            return n.disconnectSocket();
                        n.selfOrigin = e,
                        window.$_Tawk.connected = !0,
                        n.ready || (window.$_Tawk.loaded = !0,
                        void 0 !== window.Tawk_LoadStart && t.Tawk_Window.logger.reportPerformance({
                            socket: (new Date).getTime() - i,
                            register: t.Tawk_Window.register.registerTime,
                            widget: (new Date).getTime() - window.Tawk_LoadStart,
                            script: (new Date).getTime() - t.$_Tawk.startTime,
                            download: t.$_Tawk.startTime - window.Tawk_LoadStart
                        })),
                        n.ready = !0,
                        n.store.dispatch("chat/updateConversation", o),
                        n.store.dispatch("session/setPageStatus", {
                            data: r
                        }),
                        n.store.dispatch("socket/updateIsReady", !0),
                        n.clearStack(),
                        clearTimeout(n.clearRegisterRetryTimeout),
                        n.clearRegisterRetryTimeout = setTimeout((function() {
                            n.disconnect || t.Tawk_Window.register.resetRetryCount(),
                            n.clearRegisterRetryTimeout = null
                        }
                        ), 5e3)
                    }
                    )),
                    this.io.on("remoteDisconnect", (function(e) {
                        if ("BANNED" !== (e = e || {}).msg)
                            n.io.disconnect(),
                            n.disconnectHandler();
                        else {
                            n.banned = !0;
                            try {
                                n.io.disconnect()
                            } catch (t) {}
                            t.Tawk_Window.eventBus.$emit("removeWidget")
                        }
                    }
                    )),
                    this.addEventListeners()) : this.store.commit("widget/setVisibility", !1)
                }
            }, {
                key: "disconnectSocket",
                value: function() {
                    this.forceDisconnected = !0,
                    this.io && (this.io.disconnect(),
                    this.disconnectHandler())
                }
            }, {
                key: "disconnectHandler",
                value: function() {
                    window.$_Tawk.connected = !1,
                    this.io.removeAllListeners(),
                    t.Tawk_Window.scheduler.cleanUp(),
                    this.banned || this.forceDisconnected || this.disconnect ? this.connectCount = 0 : (this.disconnect = !0,
                    this.store.dispatch("session/reconnectSession", !0),
                    t.Tawk_Window.retryRegister())
                }
            }, {
                key: "addEventListeners",
                value: function() {
                    var e = this;
                    this.io.on("visitorChatWindowState", (function(t) {
                        e.selfOrigin !== t.origin && e.store.commit("session/setChatWindowState", t.cw)
                    }
                    )),
                    this.io.on("visitorSound", (function(t) {
                        t.origin !== e.selfOrigin && e.store.dispatch("widget/toggleLocalSound", !!t.sdo)
                    }
                    )),
                    this.io.on("pageStatus", (function(t) {
                        e.store.dispatch("session/setPageStatus", {
                            data: t
                        })
                    }
                    )),
                    this.io.on("visitorPopupFocus", (function(t) {
                        t = t || {},
                        e.store.dispatch("session/updateIsWindowFocused", !!t.hasFocus)
                    }
                    )),
                    this.io.on("chatBubbleClosed", (function(t) {
                        t.origin !== e.selfOrigin && e.store.dispatch("session/closeChatBubble", !0)
                    }
                    )),
                    this.io.on("pageDisable", (function() {
                        e.disconnectSocket(),
                        t.Tawk_Window.eventBus.$emit("removeWidget")
                    }
                    )),
                    this.io.on("vCallStatus", (function(e) {
                        t.Tawk_Window.chatManager.callStatusUpdate(e)
                    }
                    )),
                    this.io.on("widgetScheduleUpdate", (function(n) {
                        var i = e.store.getters["widget/id"];
                        i && i !== n.wdgt || (e.store.dispatch("schedule/addSlots", n.ws ? {
                            config: {
                                schedule: n.ws.sch
                            }
                        } : null),
                        e.store.dispatch("schedule/updateTimezone", n.wstz),
                        t.Tawk_Window.scheduler.calculate())
                    }
                    )),
                    (this.store.getters["widget/hasLiveChat"] || this.store.getters["chat/hasChatStarted"] && (!this.store.getters["chat/hasChatStarted"] || 0 !== this.store.getters["chat/agentsCount"])) && (this.io.on("visitorDataUpdate", (function(t) {
                        e.selfOrigin !== t.origin && (e.store.dispatch("visitor/updateVisitorInformation", t),
                        t.dpt && e.store.dispatch("chat/updateDepartment", t.dpt),
                        t.pcfs && e.store.dispatch("session/updatePrechatSubmitted", !0))
                    }
                    )),
                    this.io.on("visitorMessage", (function(t) {
                        e.selfOrigin !== t.origin && e.store.dispatch("chat/incomingChatMessage", t)
                    }
                    )),
                    this.io.on("visitorConversationPresenceUpdate", (function(t) {
                        e.store.dispatch("chat/incomingChatMessage", t)
                    }
                    )),
                    this.io.on("visitorChatSeen", (function(e) {
                        t.Tawk_Window.chatManager.clearUnseenNotification(e)
                    }
                    )),
                    this.io.on("visitorChatDismiss", (function(e) {
                        t.Tawk_Window.eventBus.$emit("dismissPreview", e)
                    }
                    )),
                    this.io.on("visitorTagsUpdate", (function(e) {
                        t.Tawk_Window.jsApi.triggerApiHandlers("onTagsUpdated", e)
                    }
                    )),
                    this.io.on("uploadProgress", (function(e) {
                        t.Tawk_Window.chatManager.updateFileProgress(e)
                    }
                    )),
                    this.io.on("uploadFinished", (function(e) {
                        t.Tawk_Window.chatManager.updateFileProgress(e, !0)
                    }
                    )),
                    this.io.on("uploadError", (function(e) {
                        t.Tawk_Window.chatManager.updateFileProgress(e, !1, !0)
                    }
                    )),
                    this.io.on("agentIsTyping", (function(e) {
                        t.Tawk_Window.eventBus.$emit("agentIsTyping", e)
                    }
                    )),
                    this.io.on("agentStopedTyping", (function(e) {
                        t.Tawk_Window.eventBus.$emit("agentStopedTyping", e)
                    }
                    )),
                    this.io.on("visitorChatTransfer", (function(e) {
                        t.Tawk_Window.chatManager.chatTransferUpdate(e.transfer, e.transferVersion)
                    }
                    )))
                }
            }, {
                key: "isForcedDisconnect",
                value: function() {
                    return this.forceDisconnected
                }
            }, {
                key: "publish",
                value: function(t, e, n) {
                    if (window.$_Tawk.connected)
                        if (void 0 !== n || "function" == typeof e)
                            this.wrapCallback(t, e, n);
                        else
                            try {
                                this.send(t, e, n)
                            } catch (t) {}
                    else
                        this.addToStack(t, e, n)
                }
            }, {
                key: "addToStack",
                value: function(t, e, n) {
                    "sendChatMessage" === t && delete this.events.notifyMessagePreview,
                    "notifyMessagePreview" === t ? this.events[t] = {
                        command: t,
                        data: e,
                        callback: n
                    } : this.stack.push({
                        command: t,
                        data: e,
                        callback: n
                    })
                }
            }, {
                key: "clearStack",
                value: function() {
                    var t = this;
                    for (var e in this.stack.forEach((function(e) {
                        t.publish(e.command, e.data, e.callback)
                    }
                    )),
                    this.events)
                        this.publish(this.events[e].command, this.events[e].data, this.events[e].callback);
                    this.stack = [],
                    this.events = {}
                }
            }, {
                key: "wrapCallback",
                value: function(t, e, n) {
                    var i, o;
                    "function" == typeof e && (n = e,
                    e = null),
                    i = setTimeout((function() {
                        throw n(!0),
                        new Error("Socket server did not execute the callback for " + t + " with data : " + JSON.stringify(e))
                    }
                    ), 35e3),
                    o = function() {
                        clearTimeout(i),
                        o = function() {}
                        ,
                        n.apply(null, arguments)
                    }
                    ;
                    try {
                        null === e ? this.send(t, o) : this.send(t, e, o)
                    } catch (t) {}
                }
            }, {
                key: "send",
                value: function(t, e, n) {
                    this[t](e, n)
                }
            }, {
                key: "nav",
                value: function(t, e) {
                    this.io.send("nav", t, e)
                }
            }, {
                key: "notifyMessagePreview",
                value: function(t) {
                    this.io.send("messagePreview", t, (new Date).getTime())
                }
            }, {
                key: "sendChatMessage",
                value: function(t, e) {
                    this.io.send("service", "visitor-chat", "/v1/message/visitor", t, e)
                }
            }, {
                key: "getCallStatus",
                value: function(t, e) {
                    this.io.send("service", "webrtc", "/v1/vcall/status/visitor", t, e)
                }
            }, {
                key: "getWebRTCToken",
                value: function(t, e) {
                    this.io.send("service", "webrtc", "/v1/vcall/init/visitor", t, e)
                }
            }, {
                key: "declineCall",
                value: function(t, e) {
                    this.io.send("service", "webrtc", "/v1/vcall/reject/visitor", t, e)
                }
            }, {
                key: "notifyOfflineMessage",
                value: function(t, e) {
                    this.io.send("service", "visitor-chat", "/v1/visitor/offline-form", t, e)
                }
            }, {
                key: "visitorChatSeen",
                value: function(t, e) {
                    this.io.send("service", "visitor-chat", "/v1/visitor/messages-seen", t, e)
                }
            }, {
                key: "notifyPrechat",
                value: function(t, e) {
                    this.io.send("savePrechatForm", t, e)
                }
            }, {
                key: "notifyNameChange",
                value: function(t, e) {
                    this.io.send("saveNameChangeForm", t, e)
                }
            }, {
                key: "notifyEmailTranscript",
                value: function(t, e) {
                    this.io.send("saveTranscriptEmailForm", t, e)
                }
            }, {
                key: "notifyEndChatTranscript",
                value: function(t, e) {
                    this.io.send("sendTranscript", t, e)
                }
            }, {
                key: "endVisitorChat",
                value: function(t) {
                    this.io.send("endChat", t)
                }
            }, {
                key: "addEvent",
                value: function(t, e) {
                    this.io.send("addEvent", t, e)
                }
            }, {
                key: "setAttributes",
                value: function(t, e) {
                    this.io.send("setAttributes", t, e)
                }
            }, {
                key: "addTags",
                value: function(t, e) {
                    this.io.send("addTags", t, e)
                }
            }, {
                key: "removeTags",
                value: function(t, e) {
                    this.io.send("removeTags", t, e)
                }
            }, {
                key: "fileUploadMessage",
                value: function(t, e) {
                    this.io.send("fileUploadMessage", t, e)
                }
            }, {
                key: "popupOnFocus",
                value: function(t) {
                    this.io.send("visitorPopupFocus", t)
                }
            }, {
                key: "notifySocketStatusUpdate",
                value: function(t) {
                    this.io.send("socketStatusUpdate", t)
                }
            }, {
                key: "setRating",
                value: function(t) {
                    this.io.send("visitorRating", t)
                }
            }, {
                key: "visitorChatDismiss",
                value: function(t, e) {
                    this.io.send("service", "visitor-chat", "/v1/visitor/dismiss-preview", t, e)
                }
            }, {
                key: "notifyChatBubbleClosed",
                value: function() {
                    this.io.send("chatBubbleClose")
                }
            }, {
                key: "notifyWindowState",
                value: function(t) {
                    this.io.send("chatWindowState", t)
                }
            }, {
                key: "toggleSound",
                value: function(t) {
                    this.io.send("visitorSound", t)
                }
            }, {
                key: "notifyWidgetResized",
                value: function() {
                    this.io.send("notifyWidgetResized")
                }
            }]))
        }
        ).call(this, n("c8ba"))
    },
    "681d": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return k
        }
        ));
        var i = n("fa2a");
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, s(i.key), i)
            }
        }
        function s(t) {
            var e = function(t, e) {
                if ("object" != o(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" != o(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == o(e) ? e : e + ""
        }
        function c(t, e, n) {
            return e = u(e),
            function(t, e) {
                if (e && ("object" === o(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, function() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    )))
                } catch (t) {}
                return function() {
                    return !!t
                }()
            }() ? Reflect.construct(e, n || [], u(t).constructor) : e.apply(t, n))
        }
        function u(t) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function l(t, e) {
            return (l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var d = function(t) {
            function e() {
                return r(this, e),
                c(this, e, arguments)
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && l(t, e)
            }(e, t),
            function(t, e, n) {
                return e && a(t.prototype, e),
                n && a(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }(e, [{
                key: "checkIsEnabled",
                value: function() {
                    try {
                        this.isEnabled = !!window.sessionStorage
                    } catch (t) {
                        this.isEnabled = !1
                    }
                }
            }, {
                key: "setItem",
                value: function(t, e) {
                    if (this.isEnabled)
                        try {
                            return window.sessionStorage.setItem(t, e),
                            !0
                        } catch (t) {
                            return
                        }
                }
            }, {
                key: "getItem",
                value: function(t) {
                    return this.isEnabled ? window.sessionStorage.getItem(t) : null
                }
            }])
        }(i.a);
        function f(t) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function h(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function p(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, m(i.key), i)
            }
        }
        function m(t) {
            var e = function(t, e) {
                if ("object" != f(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" != f(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == f(e) ? e : e + ""
        }
        function w(t, e, n) {
            return e = g(e),
            function(t, e) {
                if (e && ("object" === f(e) || "function" == typeof e))
                    return e;
                if (void 0 !== e)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, function() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    )))
                } catch (t) {}
                return function() {
                    return !!t
                }()
            }() ? Reflect.construct(e, n || [], g(t).constructor) : e.apply(t, n))
        }
        function g(t) {
            return (g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }
            )(t)
        }
        function v(t, e) {
            return (v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                return t.__proto__ = e,
                t
            }
            )(t, e)
        }
        var y = function(t) {
            function e() {
                return h(this, e),
                w(this, e, arguments)
            }
            return function(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                e && v(t, e)
            }(e, t),
            function(t, e, n) {
                return e && p(t.prototype, e),
                n && p(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }(e, [{
                key: "checkIsEnabled",
                value: function() {
                    try {
                        window.localStorage.setItem("exist_test", "yes"),
                        window.localStorage.removeItem("exist_test"),
                        this.isEnabled = !0
                    } catch (t) {
                        this.isEnabled = !1
                    }
                }
            }, {
                key: "setItem",
                value: function(t, e) {
                    if (this.isEnabled)
                        return window.localStorage.setItem(t, e),
                        !0
                }
            }, {
                key: "getItem",
                value: function(t) {
                    return this.isEnabled ? window.localStorage.getItem(t) : null
                }
            }, {
                key: "deleteItem",
                value: function(t) {
                    this.isEnabled && delete window.localStorage[t]
                }
            }])
        }(i.a)
          , b = n("6d13")
          , k = {
            sessionStore: new d,
            localStore: new y,
            cookieStore: new b.a
        }
    },
    "6d13": function(t, e, n) {
        "use strict";
        (function(t) {
            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function o(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, a(i.key), i)
                }
            }
            function a(t) {
                var e = function(t, e) {
                    if ("object" != i(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != i(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == i(e) ? e : e + ""
            }
            function s(t, e, n) {
                return e = c(e),
                function(t, e) {
                    if (e && ("object" === i(e) || "function" == typeof e))
                        return e;
                    if (void 0 !== e)
                        throw new TypeError("Derived constructors may only return object or undefined");
                    return function(t) {
                        if (void 0 === t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t
                    }(t)
                }(t, function() {
                    try {
                        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                        )))
                    } catch (t) {}
                    return function() {
                        return !!t
                    }()
                }() ? Reflect.construct(e, n || [], c(t).constructor) : e.apply(t, n))
            }
            function c(t) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }
                )(t)
            }
            function u(t, e) {
                return (u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                )(t, e)
            }
            n.d(e, "a", (function() {
                return l
            }
            ));
            var l = function(e) {
                function n() {
                    return o(this, n),
                    s(this, n, arguments)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e)
                        throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    e && u(t, e)
                }(n, e),
                function(t, e, n) {
                    return e && r(t.prototype, e),
                    n && r(t, n),
                    Object.defineProperty(t, "prototype", {
                        writable: !1
                    }),
                    t
                }(n, [{
                    key: "checkIsEnabled",
                    value: function() {
                        var t = !!navigator.cookieEnabled;
                        void 0 !== navigator.cookieEnabled || t || (document.cookie = "testcookie",
                        t = -1 != document.cookie.indexOf("testcookie")),
                        this.isEnabled = t
                    }
                }, {
                    key: "setItem",
                    value: function(e, n, i, o) {
                        if ("file:" === window.location.protocol || t.Tawk_Window.jsApi.store.getters["widget/isIframe"])
                            return t.Tawk_Window.webStorage.localStore.setItem(e, n);
                        if (this.isEnabled) {
                            var r, a, s = "", c = "Lax;";
                            return i || ((r = new Date).setTime(r.getTime() + 15552e6),
                            s = "; expires=".concat(r.toGMTString())),
                            t.Tawk_Window.jsApi.store.getters["widget/isIframe"] && (c = "None;"),
                            o = o ? "; domain=".concat(o) : "",
                            "https:" === window.location.protocol && (a = " Secure"),
                            document.cookie = "".concat(e, "=").concat(n).concat(s, "; path=/").concat(o, "; SameSite=").concat(c).concat(a, ";"),
                            !0
                        }
                    }
                }, {
                    key: "getItem",
                    value: function(e) {
                        var n = [];
                        if ("file:" === window.location.protocol || t.Tawk_Window.jsApi.store.getters["widget/isIframe"]) {
                            var i = t.Tawk_Window.webStorage.localStore.getItem(e);
                            return i ? [i] : []
                        }
                        if (this.isEnabled)
                            for (var o = "".concat(e, "="), r = document.cookie.split(";"), a = 0, s = r.length; a < s; a++) {
                                for (var c = r[a]; " " === c.charAt(0); )
                                    c = c.substring(1, c.length);
                                0 === c.indexOf(o) && n.push(c.substring(o.length, c.length))
                            }
                        return n
                    }
                }, {
                    key: "deleteItem",
                    value: function(t) {
                        document.cookie = "".concat(t, "=;Max-Age=-99999999;SameSite=Lax;")
                    }
                }, {
                    key: "checkItemSaved",
                    value: function(e) {
                        if ("file:" === window.location.protocol || t.Tawk_Window.jsApi.store.getters["widget/isIframe"])
                            return !!t.Tawk_Window.webStorage.localStore.getItem(e);
                        var n = this.getItem(e);
                        if (!n || !n.length)
                            throw new Error("Unable to store cookie")
                    }
                }])
            }(n("fa2a").a)
        }
        ).call(this, n("c8ba"))
    },
    "745f": function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return E
            }
            ));
            var i = n("2b0e")
              , o = n("681d")
              , r = n("43af")
              , a = n("9be8")
              , s = n("b7cc")
              , c = n("0ad2")
              , u = n("27c6")
              , l = n("028e")
              , d = n("99e1")
              , f = n("77b4")
              , h = n("91ce")
              , p = n("c7b8")
              , m = n("65b3")
              , w = n("24ca")
              , g = n("d3a4")
              , v = n("27a6")
              , y = n("7f46")
              , b = n("f0b0")
              , k = n("4360")
              , T = n("a18c")
              , S = n("d046")
              , _ = n("3dfd");
            function I(t) {
                return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function W(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function C(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, P(i.key), i)
                }
            }
            function P(t) {
                var e = function(t, e) {
                    if ("object" != I(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != I(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == I(e) ? e : e + ""
            }
            var E = function(t, e, n) {
                return e && C(t.prototype, e),
                n && C(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = e.propertyId
                  , i = e.widgetId
                  , o = e.callback;
                W(this, t),
                this.propertyId = n || window.$_Tawk_AccountKey,
                this.widgetId = i || window.$_Tawk_WidgetId,
                this.callback = o || function() {}
            }
            ), [{
                key: "updateConfig",
                value: function(t) {
                    this.propertyId = t.propertyId,
                    this.widgetId = t.widgetId
                }
            }, {
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = e.visitor
                      , f = void 0 === n ? void 0 : n;
                    if (void 0 === window.$_Tawk.downloaded) {
                        if (window.$_Tawk.downloaded = !0,
                        void 0 !== window.Prototype && "string" == typeof window.Prototype.Version && parseFloat(window.Prototype.Version.substr(0, 3), 10) < 1.7 && void 0 !== Array.prototype.toJSON) {
                            var g = JSON.stringify;
                            JSON.stringify = function(t) {
                                var e = Array.prototype.toJSON;
                                delete Array.prototype.toJSON;
                                var n = g(t);
                                return Array.prototype.toJSON = e,
                                n
                            }
                        }
                        t.Tawk_Window.logger = new p.a,
                        t.Tawk_Window.register = new a.a(k.a),
                        t.Tawk_Window.webStorage = o.a,
                        t.Tawk_Window.widgetSettings = new r.a(k.a),
                        t.Tawk_Window.jsApi = new s.a(k.a),
                        t.Tawk_Window.audioPlayer = new c.a(k.a),
                        t.Tawk_Window.scheduler = new u.a(k.a),
                        t.Tawk_Window.chatManager = new l.a(k.a),
                        t.Tawk_Window.activityMonitor = new d.a(k.a),
                        t.Tawk_Window.sessionManager = new h.a(k.a),
                        t.Tawk_Window.eventBus = w.a,
                        t.$_Tawk.startTime = (new Date).getTime().toString(),
                        t.$_Tawk.loaded = !1,
                        t.$_Tawk.connected = !1,
                        t.$_Tawk.ready = !1,
                        i.a.use(m.a, {
                            store: k.a
                        }),
                        i.a.use(T.a),
                        this.checkMetaContent(),
                        this.connect({
                            visitor: f
                        })
                    }
                }
            }, {
                key: "checkMetaContent",
                value: function() {
                    for (var e, n = {}, i = document.getElementsByTagName("meta"), o = "", r = [], a = 0, s = i.length; a < s; a++)
                        i[a].getAttribute("name") && "viewport" === i[a].getAttribute("name").toLowerCase() && (o = i[a].getAttribute("content") || "");
                    for (var c = 0, u = (r = (o = o.replace(/ /g, "")).split(",")).length; c < u; c++)
                        n[(e = r[c].split("="))[0]] = e[1];
                    var l = !(!n.width && !n.height)
                      , d = n["minimum-scale"] && n["maximum-scale"] && n["minimum-scale"] === n["maximum-scale"]
                      , f = n["initial-scale"] && n["maximum-scale"] && n["initial-scale"] === n["maximum-scale"];
                    t.Tawk_Window.metaContent = o && o.length ? o : null,
                    t.Tawk_Window.hasNoScale = "no" === n["user-scalable"] || "0" === n["user-scalable"],
                    t.Tawk_Window.isMobileOptimizedWebsite = !!(d && (l || t.Tawk_Window.hasNoScale) || f)
                }
            }, {
                key: "connect",
                value: function() {
                    var e, n = this, i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = i.visitor, r = void 0 === o ? void 0 : o;
                    if (k.a.dispatch("reset"),
                    k.a.dispatch("property/updateId", this.propertyId),
                    k.a.dispatch("widget/updateId", this.widgetId),
                    window.Tawk_API && !1 === (null === (e = window.Tawk_API) || void 0 === e ? void 0 : e.autoStart) && k.a.commit("widget/setVisibility", !1),
                    k.a.dispatch("property/updateIsTawkHostedPage", "tawk.to" === window.location.host),
                    k.a.dispatch("router/addRoutes", S.a),
                    new f.a(k.a),
                    t.Tawk_Window.jsApi.local_API.isWindowed) {
                        var a = y.a.parseQueryString();
                        k.a.dispatch("session/updateConnectionData", {
                            sk: a.$_tawk_sk
                        }),
                        a.pop && k.a.commit("widget/setIsPopout", !0),
                        k.a.commit("widget/setIsWindowed", !0)
                    }
                    if (t.Tawk_Window.jsApi.local_API.embedded && (k.a.commit("widget/setIsEmbedded", !0),
                    k.a.commit("browserData/setMobileBrowserName", null)),
                    window.top !== window) {
                        var s = !1;
                        try {
                            s = window.origin === window.top.origin
                        } catch (t) {}
                        s || k.a.commit("widget/setIsIframe", !0)
                    }
                    t.Tawk_Window.jsApi.triggerApiHandlers("onBeforeLoad"),
                    t.Tawk_Window.maximize = !1;
                    var c = [new Promise((function(e, n) {
                        t.Tawk_Window.widgetSettings.getSettings(e, n)
                    }
                    ))];
                    window.Tawk_API && !window.Tawk_API.autoStart && void 0 !== window.Tawk_API.autoStart || c.push(new Promise((function(e, n) {
                        t.Tawk_Window.register.init(e, n, {
                            visitor: r
                        })
                    }
                    )));
                    try {
                        Object(v.a)(c).then((function(e) {
                            if (2 === e.length) {
                                if ("fulfilled" === e[0].status && "fulfilled" === e[1].status) {
                                    var i = (e[1].value || {}).data;
                                    i && i.settingsVersion === e[0].value ? (n.extractRegistrationData(e[1].value),
                                    n.createUI(!0)) : (sessionStorage.setItem("tawk_sv", i.settingsVersion),
                                    t.Tawk_Window.widgetSettings.version = i.settingsVersion,
                                    t.Tawk_Window.widgetSettings.getSettings((function() {
                                        n.extractRegistrationData(e[1].value),
                                        n.createUI(!0),
                                        t.Tawk_Window.eventBus.$emit("updateWidgetSettings")
                                    }
                                    ), (function(t) {
                                        console.error(t)
                                    }
                                    )))
                                }
                            } else
                                "fulfilled" === e[0].status && n.createUI()
                        }
                        ))
                    } catch (t) {
                        console.error(t)
                    }
                }
            }, {
                key: "extractRegistrationData",
                value: function(e) {
                    var n = e.data
                      , i = n.rcf && k.a.getters["widget/consentData"];
                    if (k.a.dispatch("chat/updateVersion", n.cver || 0),
                    k.a.dispatch("session/updateConsentFlag", i),
                    "max" === n.cw && (t.Tawk_Window.maximize = !0),
                    k.a.dispatch("session/updateConnectionData", n),
                    i || (t.Tawk_Window.sessionManager.storeSessionInformation(),
                    k.a.dispatch("visitor/updateUUID", n.uid),
                    k.a.dispatch("visitor/updateVisitorInformation", n),
                    n.dpt && k.a.dispatch("chat/updateDepartment", n.dpt)),
                    n.pcfs && k.a.dispatch("session/updatePrechatSubmitted", n.pcfs),
                    n.refs && n.refs.length)
                        for (var o = 0; o < n.refs.length; o++) {
                            var r = n.refs[o];
                            k.a.commit("chat/setFormRefs", r)
                        }
                    n.transfer && k.a.dispatch("chat/updateChatTransferData", {
                        transfer: n.transfer,
                        transferVersion: n.transferVer
                    }),
                    k.a.dispatch("schedule/updateTimezone", n.wstz),
                    t.Tawk_Window && t.Tawk_Window.scheduler && t.Tawk_Window.scheduler.setup(),
                    k.a.dispatch("session/setPageStatus", {
                        data: n || {
                            ast: "offline"
                        }
                    }),
                    k.a.commit("session/setChatBubbleClosed", !!n.bblc),
                    k.a.commit("session/setLastMessageTimestamp", n.lmst),
                    k.a.commit("session/setWaitTime", n.ewt ? 1e3 * n.ewt : 6e4),
                    k.a.commit("chat/setHistoryMessages", n.c || []),
                    k.a.commit("chat/setChatId", n.chid),
                    k.a.dispatch("chat/setPreviousMessages"),
                    k.a.dispatch("session/updateToken", {
                        token: n.tkn,
                        expiry: n.tknExp
                    }),
                    this.callback()
                }
            }, {
                key: "createUI",
                value: function(e) {
                    var n, o;
                    t.Tawk_Window.app ? t.Tawk_Window.eventBus.$emit("resetState") : (i.a.use(g.a),
                    t.Tawk_Window.app = new i.a({
                        render: function(t) {
                            return t(_.a)
                        },
                        store: k.a
                    }).$mount(),
                    window.$_Tawk.language && (n = {
                        type: Function,
                        default: window.$_Tawk.language.pluralFormFunction
                    },
                    o = {
                        type: Object,
                        default: function() {
                            return {
                                just: t.Tawk_Window.app.$i18n("chat", "justNow"),
                                past: window.$_Tawk.language.chat.past.message,
                                today: window.$_Tawk.language.chat.today_time.message,
                                second: window.$_Tawk.language.chat.seconds.message,
                                minute: window.$_Tawk.language.chat.minutes.message,
                                hour: window.$_Tawk.language.chat.hours.message,
                                days: [t.Tawk_Window.app.$i18n("days", "0"), t.Tawk_Window.app.$i18n("days", "1"), t.Tawk_Window.app.$i18n("days", "2"), t.Tawk_Window.app.$i18n("days", "3"), t.Tawk_Window.app.$i18n("days", "4"), t.Tawk_Window.app.$i18n("days", "5"), t.Tawk_Window.app.$i18n("days", "6")],
                                months: [t.Tawk_Window.app.$i18n("months", "0"), t.Tawk_Window.app.$i18n("months", "1"), t.Tawk_Window.app.$i18n("months", "2"), t.Tawk_Window.app.$i18n("months", "3"), t.Tawk_Window.app.$i18n("months", "4"), t.Tawk_Window.app.$i18n("months", "5"), t.Tawk_Window.app.$i18n("months", "6"), t.Tawk_Window.app.$i18n("months", "7"), t.Tawk_Window.app.$i18n("months", "8"), t.Tawk_Window.app.$i18n("months", "9"), t.Tawk_Window.app.$i18n("months", "10"), t.Tawk_Window.app.$i18n("months", "11")]
                            }
                        }
                    }),
                    i.a.component("tawk-timeago", {
                        extends: b.TawkTimeago,
                        props: {
                            pluralize: n,
                            format: o
                        }
                    })),
                    !k.a.getters["session/needConsent"] && e && t.Tawk_Window.app.$socket.connect(),
                    t.Tawk_Window.activityMonitor.initActivityReset(),
                    !k.a.getters["browserData/mobileBrowserName"] && t.Tawk_Window.maximize && k.a.commit("session/setChatWindowState", "max")
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    "77b4": function(t, e, n) {
        "use strict";
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, s(i.key), i)
            }
        }
        function a(t, e, n) {
            return (e = s(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function s(t) {
            var e = function(t, e) {
                if ("object" != i(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(t, e || "default");
                    if ("object" != i(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == i(e) ? e : e + ""
        }
        n.d(e, "a", (function() {
            return c
        }
        ));
        var c = function(t, e, n) {
            return e && r(t.prototype, e),
            n && r(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }((function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            o(this, t),
            a(this, "browserIdentifier", [{
                string: navigator.userAgent,
                subString: "Edge",
                identity: "explorer",
                versionSearch: "Edge"
            }, {
                string: navigator.userAgent,
                subString: "Trident/7.0",
                identity: "explorer",
                versionSearch: "rv"
            }, {
                string: navigator.userAgent,
                subString: "(Opera|OPR)",
                identity: "opera",
                versionSearch: "Version"
            }, {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "chrome",
                versionSearch: "Chrome"
            }, {
                string: navigator.userAgent,
                subString: "Mobile Safari",
                identity: "android",
                versionSearch: "Version"
            }, {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "firefox",
                versionSearch: "Firefox"
            }, {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "explorer",
                versionSearch: "MSIE"
            }, {
                string: navigator.userAgent,
                subString: "IEMobile",
                identity: "explorer",
                versionSearch: "IEMobile"
            }, {
                string: navigator.userAgent,
                subString: "Safari",
                identity: "safari",
                versionSearch: "Version"
            }, {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "mozilla",
                versionSearch: "rv"
            }]),
            a(this, "osIdentifier", [{
                string: navigator.userAgent,
                subString: "Windows Phone",
                identity: "windows_phone"
            }, {
                string: navigator.platform,
                subString: "Win",
                identity: "windows"
            }, {
                string: navigator.platform,
                subString: "Mac",
                identity: "mac"
            }, {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iphone"
            }, {
                string: navigator.userAgent,
                subString: "Android",
                identity: "android"
            }, {
                string: navigator.platform,
                subString: "Linux",
                identity: "linux"
            }, {
                string: navigator.userAgent,
                subString: "iPad",
                identity: "ipad"
            }]),
            a(this, "searchEngines", {
                google: "q",
                yahoo: "p",
                baidu: "wd",
                yandex: "text",
                bing: "q",
                soso: "w",
                ask: "q",
                aol: "q",
                sogou: "query",
                mywebsearch: "searchfor",
                youdao: "q",
                lycos: "q",
                infospace: "q",
                blekko: "q",
                info: "q",
                dogpile: "q",
                duckduckgo: "q",
                webcrawler: "q"
            }),
            a(this, "mobileBrowserIdentifier", {
                nokia: [/(NokiaBrowser)\/(\d+)\.(\d+).(\d+)\.(\d+)/, /^(Nokia)/, /(NokiaBrowser)\/(\d+)\.(\d+).(\d+)/, /(NokiaBrowser)\/(\d+)\.(\d+)/, /(BrowserNG)\/(\d+)\.(\d+).(\d+)/, /(Series60)\/5\.0/, /(Series60)\/(\d+)\.(\d+)/, /(S40OviBrowser)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Nokia)[EN]?(\d+)/],
                blackberry: [/(BB10);/, /(PlayBook).+RIM Tablet OS (\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry).+Version\/(\d+)\.(\d+)\.(\d+)/, /(Black[bB]erry)\s?(\d+)/],
                chrome: [/(CrMo)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(CriOS)\/(\d+)\.(\d+)\.(\d+)\.(\d+)/, /(Android).*(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) (Mobile)?/],
                ie: [/(IEMobile)[ /](\d+)\.(\d+)/],
                firefox: [/Mobile.*(Firefox)\/(\d+)\.(\d+)/, /Tablet.*(Firefox)\/(\d+)\.(\d+)/],
                operamini: [/(Opera Mini)(?:\/att)?\/(\d+)\.(\d+)/],
                opera: [/(Opera Tablet).*Version\/(\d+)\.(\d+)(?:\.(\d+))?/, /(?:Mobile Safari).*(OPR)\/(\d+)\.(\d+)\.(\d+)'/, /(Opera)\/.+Opera Mobi.+Version\/(\d+)\.(\d+)/, /(Opera)\/(\d+)\.(\d+).+Opera Mobi/, /Opera Mobi.+(Opera)\/(\d+)\.(\d+)/, /Opera Mobi/, /(Opera)\/9.80.*Version\/(\d+)\.(\d+)(?:\.(\d+))?/],
                safari: [/(iPod|iPhone|iPad);.*CPU.*OS (\d+)(?:_\d+)?_(\d+).*Mobile/],
                uc: [/(UCBrowser)[ /](\d+)\.(\d+)\.(\d+)/, /(UC Browser)[ /](\d+)\.(\d+)\.(\d+)/, /(UC Browser|UCBrowser|UCWEB)(\d+)\.(\d+)\.(\d+)/],
                "android2.3": [/(Android) 2\.3(?:[.-]([a-z0-9]+))?/],
                android2: [/(Android) 2\.(\d+)(?:[.-]([a-z0-9]+))?/],
                android: [/Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; WOWMobile (.+) Build/, /Android[- ][\d]+\.[\d]+-update1; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+;[A-Za-z]{2}-[A-Za-z]{0,2};(.+) Build/, /Android[- ][\d]+\.[\d]+; [A-Za-z]{2}-[A-Za-z]{0,2}; (.+) Build/, /Android[- ][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android[- ][\d]+\.[\d]+; (.+) Build/]
            }),
            a(this, "searchVersion", (function(t, e) {
                var n = t.indexOf(e);
                if (-1 !== n)
                    return parseFloat(t.substring(n + e.length + 1))
            }
            )),
            a(this, "getMobileBrowser", (function() {
                for (var t = !1, e = navigator.userAgent, n = Object.keys(this.mobileBrowserIdentifier), i = 0; !t && i < n.length; ) {
                    for (var o = n[i], r = 0; r < this.mobileBrowserIdentifier[o].length; r++) {
                        var a = this.mobileBrowserIdentifier[o][r];
                        if (e.match(a)) {
                            t = o;
                            break
                        }
                    }
                    i++
                }
                return t
            }
            )),
            a(this, "getHostname", (function(t) {
                var e = new RegExp("^(?:f|ht)tp(?:s)?://([^/]+)","im")
                  , n = t.match(e);
                return null === n || !Array.isArray(n) || n.length < 2 ? null : n[1] ? n[1].toString() : null
            }
            )),
            a(this, "getPlugins", (function() {
                var t, e, n = [];
                for (t = 0,
                e = navigator.plugins.length; t < e; t++)
                    navigator.plugins[t].name && n.push(navigator.plugins[t].name);
                return n
            }
            )),
            this.store = e,
            this.init()
        }
        ), [{
            key: "init",
            value: function() {
                var t, e = "other", n = !1, i = this.searchString(this.browserIdentifier) || {};
                i.identity && (e = i.identity,
                t = i.versionSearch || i.identity,
                "explorer" === e && (n = !0));
                var o = this.searchVersion(navigator.userAgent, t) || this.searchVersion(navigator.appVersion, t) || "other"
                  , r = this.searchString(this.osIdentifier) || "other"
                  , a = this.getPlugins()
                  , s = this.getMobileBrowser()
                  , c = this.getReferredSearchEngine()
                  , u = {
                    mp3: this.hasHtmlAudio("mp3"),
                    ogg: this.hasHtmlAudio("ogg"),
                    wav: this.hasHtmlAudio("wav")
                };
                u.supported = u.mp3 || u.ogg || u.wav;
                var l = !n;
                this.store.dispatch("browserData/updateInitialData", {
                    version: o,
                    os: r,
                    plugins: a,
                    mobileBrowserName: s,
                    html5audio: u,
                    isIE: n,
                    searchEngine: c,
                    isWebRTCAvailable: l
                })
            }
        }, {
            key: "searchString",
            value: function(t) {
                var e, n;
                for (e = 0; e < t.length; e++)
                    if (n = t[e].string,
                    new RegExp(t[e].subString).test(n))
                        return t[e]
            }
        }, {
            key: "getReferredSearchEngine",
            value: function() {
                var t, e, n = "";
                if (document.referrer && (e = this.getHostname(document.referrer)))
                    for (t in e = e.toLowerCase(),
                    this.searchEngines)
                        if (e.indexOf(t) >= 0) {
                            var i = this.getQuerystring(document.referrer, this.searchEngines[t]);
                            "blekko" === t && "" === i && (i = this.getQuerystring(document.referrer.replace("/ws/", "/?q="), "q")),
                            n = t;
                            break
                        }
                return n
            }
        }, {
            key: "getQuerystring",
            value: function(t, e) {
                e = e.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
                var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);
                return null === n || !Array.isArray(n) || n.length < 2 ? null : n[1] ? unescape(n[1].replace(/\+/g, " ")) : null
            }
        }, {
            key: "hasHtmlAudio",
            value: function(t) {
                var e = document.createElement("audio");
                try {
                    if (!e.canPlayType || "no" === e.canPlayType("audio/" + t) || "" === e.canPlayType("audio/" + t))
                        return !1
                } catch (t) {
                    return !1
                }
                return !0
            }
        }])
    },
    "7c03": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return u
        }
        ));
        var i = 2147483647
          , o = /[^\x20-\x7E]/
          , r = /[\x2E\u3002\uFF0E\uFF61]/g
          , a = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }
          , s = Math.floor
          , c = String.fromCharCode
          , u = {
            error: function(t) {
                throw new RangeError(a[t])
            },
            map: function(t, e) {
                for (var n = t.length, i = []; n--; )
                    i[n] = e(t[n]);
                return i
            },
            mapDomain: function(t, e) {
                var n = t.split("@")
                  , i = "";
                n.length > 1 && (i = n[0] + "@",
                t = n[1]);
                var o = (t = t.replace(r, ".")).split(".");
                return i + this.map(o, e).join(".")
            },
            ucs2decode: function(t) {
                for (var e, n, i = [], o = 0, r = t.length; o < r; )
                    (e = t.charCodeAt(o++)) >= 55296 && e <= 56319 && o < r ? 56320 == (64512 & (n = t.charCodeAt(o++))) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e),
                    o--) : i.push(e);
                return i
            },
            digitToBasic: function(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            },
            adapt: function(t, e, n) {
                var i = 0;
                for (t = n ? s(t / 700) : t >> 1,
                t += s(t / e); t > 455; i += 36)
                    t = s(t / 35);
                return s(i + 36 * t / (t + 38))
            },
            encode: function(t) {
                var e, n, o, r, a, u, l, d, f, h, p, m, w, g, v, y = [];
                for (m = (t = this.ucs2decode(t)).length,
                e = 128,
                n = 0,
                a = 72,
                u = 0; u < m; ++u)
                    (p = t[u]) < 128 && y.push(c(p));
                for (o = r = y.length,
                r && y.push("-"); o < m; ) {
                    for (l = i,
                    u = 0; u < m; ++u)
                        (p = t[u]) >= e && p < l && (l = p);
                    for (l - e > s((i - n) / (w = o + 1)) && this.error("overflow"),
                    n += (l - e) * w,
                    e = l,
                    u = 0; u < m; ++u)
                        if ((p = t[u]) < e && ++n > i && this.error("overflow"),
                        p == e) {
                            for (d = n,
                            f = 36; !(d < (h = f <= a ? 1 : f >= a + 26 ? 26 : f - a)); f += 36)
                                v = d - h,
                                g = 36 - h,
                                y.push(c(this.digitToBasic(h + v % g, 0))),
                                d = s(v / g);
                            y.push(c(this.digitToBasic(d, 0))),
                            a = this.adapt(n, w, o == r),
                            n = 0,
                            ++o
                        }
                    ++n,
                    ++e
                }
                return y.join("")
            },
            toASCII: function(t) {
                return this.mapDomain(t, (function(t) {
                    return o.test(t) ? "xn--" + this.encode(t) : t
                }
                ))
            }
        }
    },
    "7f46": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return v
        }
        ));
        var i = "&quot;"
          , o = "&#39;"
          , r = "&lt;"
          , a = "&gt;"
          , s = "&amp;"
          , c = new RegExp("&","g")
          , u = new RegExp('"',"g")
          , l = new RegExp("'","g")
          , d = new RegExp("<","g")
          , f = new RegExp(">","g")
          , h = new RegExp(i,"g")
          , p = new RegExp(o,"g")
          , m = new RegExp(r,"g")
          , w = new RegExp(a,"g")
          , g = new RegExp(s,"g")
          , v = {
            regTrim: /^\s+|\s+$/g,
            rawEncode: function(t) {
                return t ? t.replace(c, s).replace(u, i).replace(l, o).replace(d, r).replace(f, a) : t
            },
            rawDecode: function(t) {
                return t ? t.replace(h, '"').replace(p, "'").replace(m, "<").replace(w, ">").replace(g, "&") : t
            },
            h: function(t) {
                var e = 0;
                if (0 === t.length)
                    return e;
                for (var n = 0; n < t.length; n++) {
                    e = (e << 5) - e + t.charCodeAt(n),
                    e &= e
                }
                return e
            },
            isString: function(t) {
                return void 0 !== t && "string" == typeof t
            },
            hasPunctuation: function(t) {
                return t.match(/(?![\u0600-\u06FF\u0750-\u077F\u0590-\u05FF\u0900-\u097F\u4E00-\u9FFF\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF\u1100-\u11FF\u3130-\u318F\uA000-\uA48F\u2800-\u28FF])[^\w\s/-]+$/g)
            },
            trim: function(t) {
                return this.isString(t) ? String.prototype.trim ? t.trim().toString() : t.replace(this.regTrim, "") : null
            },
            toLinkable: function(t) {
                for (var e, n, i, o = /\[([^)]+)\]/, r = /\(([^)]+)\)/, a = /\[[^\]\\(\\)]+\]\((\bhttp:\/\/\b|\bhttps:\/\/\b|\bmailto:\b|\btel:\+{0,1}\b){1}[^\]\\(\\)]+\)/i, s = "_blank", c = t; null !== (e = a.exec(c)); )
                    if (n = o.exec(e[0]),
                    (i = r.exec(e[0]))[0].indexOf("(mailto:") || (s = "_top"),
                    (c = c.replace(n[0] + i[0], '<a target="' + s + '" href="' + i[1] + '" class="link">' + n[1] + "</a>")) === t)
                        return c;
                return c
            },
            markdownToHtml: function(t) {
                return t = this.rawEncode(t),
                t = (t = (t = this.toLinkable(t)).replace(/(?!<a[^>]*>[^<])_(.*?)_(?![^<]*<\/a>)/gim, "<i>$1</i>")).replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>").replace(/\*(.*?)\*/gim, "<b>$1</b>")
            },
            removeHTMLTags: function(t) {
                return t.replace(/<br\/>|<br>/g, " ")
            },
            removeAnchorTags: function(t) {
                return t.replace(/<a\b[^>]*>([^<]+)<\/a>/gi, "$1")
            },
            cleanupCssValue: function(t) {
                return this.isString(t) ? t.replace(/(!important)|(;)/g, "") : t
            },
            parseQueryString: function(t) {
                var e, n, i, o, r = {};
                for (e = 0,
                n = (o = (t ? t.replace(/(.*)\?/, "") : window.location.search.substring(1)).split("&")).length; e < n; e += 1)
                    r[(i = o[e].split("="))[0]] = i[1];
                return r
            }
        }
    },
    8079: function(t, e, n) {
        "use strict";
        (function(t) {
            var i = n("2b0e")
              , o = n("2f62")
              , r = n("f0b0")
              , a = n("87dd")
              , s = n("7f46");
            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function u(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, o, r, a, s = [], c = !0, u = !1;
                        try {
                            if (r = (n = n.call(t)).next,
                            0 === e) {
                                if (Object(n) !== n)
                                    return;
                                c = !1
                            } else
                                for (; !(c = (i = r.call(n)).done) && (s.push(i.value),
                                s.length !== e); c = !0)
                                    ;
                        } catch (t) {
                            u = !0,
                            o = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(),
                                Object(a) !== a))
                                    return
                            } finally {
                                if (u)
                                    throw o
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++)
                    i[n] = t[n];
                return i
            }
            function d(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    n.push.apply(n, i)
                }
                return n
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(n), !0).forEach((function(e) {
                        h(t, e, n[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }
                    ))
                }
                return t
            }
            function h(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != c(t) || !t)
                            return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var i = n.call(t, e || "default");
                            if ("object" != c(i))
                                return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == c(e) ? e : e + ""
                }(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            var p = function() {
                return Promise.all([n.e("chunk-bf24a88e"), n.e("chunk-71978bb6")]).then(n.bind(null, "e0ca"))
            }
              , m = function() {
                return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-bf24a88e"), n.e("chunk-2d0b9454"), n.e("chunk-7c2f6ba4"), n.e("chunk-24d8db78")]).then(n.bind(null, "d6a3"))
            }
              , w = function() {
                return Promise.all([n.e("chunk-bf24a88e"), n.e("chunk-f1565420")]).then(n.bind(null, "0bdc"))
            }
              , g = function() {
                return Promise.all([n.e("chunk-bf24a88e"), n.e("chunk-7c2f6ba4"), n.e("chunk-48f3b594")]).then(n.bind(null, "6b5b"))
            };
            i.a.directive("tawk-scroll", r.TawkScroll),
            e.a = {
                mixins: [a.a],
                data: function() {
                    return {
                        elementId: r.Helper.generateUUID(),
                        width: "auto",
                        minWidth: "0px",
                        height: "auto",
                        minHeight: "0px",
                        initialDocumentClick: null,
                        isManualHash: !1,
                        titleFlashTimeout: null,
                        isVisible: !1
                    }
                },
                computed: f(f({}, Object(o.c)({
                    isRight: "widget/isRight",
                    isBottom: "widget/isBottom",
                    isCenter: "widget/isCenter",
                    isRoundWidget: "widget/isRoundWidget",
                    pageStatus: "session/pageStatus",
                    bubble: "widget/bubble",
                    chatBubbleClosed: "session/chatBubbleClosed",
                    showMessagePreview: "widget/showMessagePreview",
                    isWindowed: "widget/isWindowed",
                    isEmbedded: "widget/isEmbedded",
                    maxDimension: "widget/maxDesktop",
                    widgetIsVisible: "widget/isVisible",
                    onClick: "widget/onClick",
                    chatWindowState: "session/chatWindowState",
                    mobileBrowserName: "browserData/mobileBrowserName",
                    unreadMessageCount: "chat/unreadMessageCount",
                    showTitleNotification: "widget/showTitleNotification",
                    originalPageTitle: "session/originalPageTitle",
                    hasLiveChat: "widget/hasLiveChat",
                    hasChatStarted: "chat/hasChatStarted",
                    agentsCount: "chat/agentsCount",
                    generalVisibility: "widget/generalVisibility",
                    widgetShow: "widget/show",
                    os: "browserData/os",
                    isReady: "socket/isReady"
                })), {}, {
                    styleObject: function() {
                        var e, n, i, o = {
                            "transition-property:": "none !important;",
                            "margin:": "0px !important;",
                            "padding:": "0px !important;",
                            "z-index:": "2000000000 !important;",
                            "width:": "".concat(this.width, " !important;"),
                            "height:": "".concat(this.height, "  !important;"),
                            "max-height:": "".concat("auto" === this.height ? "none" : this.height, "  !important;"),
                            "max-width:": "".concat("auto" === this.width ? "none" : this.width, "  !important;"),
                            "min-width:": "".concat(this.minWidth, "  !important;"),
                            "min-height:": "".concat(this.minHeight, "  !important;")
                        };
                        return this.isEmbedded ? o["position:"] = "relative !important;" : this.isWindowed ? o["position:"] = "fixed !important;" : (o["position:"] = "fixed !important;",
                        this.isBottom || this.isCenter ? (n = "".concat("0px", " !important;"),
                        i = "auto !important;") : (n = "auto !important;",
                        i = "".concat("0px", " !important;")),
                        this.isVisible ? o["display:"] = "block !important;" : o["display:"] = "none !important;",
                        o["left:"] = this.isRight ? "auto !important;" : "".concat("0px", " !important;"),
                        o["right:"] = this.isRight ? "".concat("0px", " !important;") : "auto !important;",
                        o["bottom:"] = n,
                        o["top:"] = i,
                        o["transform:"] = "none !important;"),
                        t.Tawk_Window.jsApi.local_API && t.Tawk_Window.jsApi.local_API.customStyle && Object.keys(t.Tawk_Window.jsApi.local_API.customStyle).length && t.Tawk_Window.jsApi.local_API.customStyle.zIndex && (o["z-index:"] = "".concat(s.a.cleanupCssValue(t.Tawk_Window.jsApi.local_API.customStyle.zIndex), " !important;")),
                        e = f(f({}, this.genericStyles), o),
                        Object.entries(e).map((function(t) {
                            var e = u(t, 2);
                            return e[0] + e[1]
                        }
                        )).join("\n")
                    }
                }),
                watch: {
                    chatWindowState: function(e) {
                        "pop" === this.onClick && "max" === e ? t.Tawk_Window.popoutWidget() : this.mobileBrowserName && !t.Tawk_Window.jsApi.local_API.disableMobileBackHistory && ("max" !== e || window.location.hash && "#max-widget" !== window.location.hash ? "min" === e && "#max-widget" === window.location.hash && (this.isManualHash = !0,
                        window.history.back()) : (this.isManualHash = !0,
                        window.history.pushState ? window.history.pushState({
                            page: 1
                        }, null, window.location.href + "#max-widget") : window.location.hash = "max-widget")),
                        this.checkIfVisible()
                    },
                    unreadMessageCount: function(t) {
                        this.showTitleNotification && (this.hasLiveChat || this.hasChatStarted && 0 !== this.agentsCount) && (t > 0 ? this.updatePageTitle() : this.updatePageTitle(!0))
                    },
                    pageStatus: function(t) {
                        "offline" === t ? this.updatePageTitle(!0) : this.unreadMessageCount > 0 && this.updatePageTitle(),
                        this.checkIfVisible()
                    },
                    widgetShow: function() {
                        this.checkIfVisible()
                    },
                    isReady: function(e) {
                        e && t.Tawk_Window.jsApi.triggerApiHandlers("onLoad")
                    }
                },
                methods: f(f({}, Object(o.b)({
                    updateMobileLandscape: "widget/updateMobileLandscape"
                })), {}, {
                    updatePageTitle: function(t) {
                        var e = this;
                        clearInterval(this.titleFlashTimeout),
                        t || "offline" === this.pageStatus ? null !== this.originalPageTitle && (document.title = this.originalPageTitle,
                        this.$store.commit("session/setOriginalPageTitle", null)) : (null === this.originalPageTitle && this.$store.commit("session/setOriginalPageTitle", document.title),
                        this.titleFlashTimeout = setInterval((function() {
                            document.title = e.originalPageTitle === document.title ? e.$i18n("chat", "newMessage", {
                                num: e.unreadMessageCount
                            }) : e.originalPageTitle
                        }
                        ), 1e3))
                    },
                    resizeHandler: function() {
                        var e, n = this;
                        clearTimeout(e),
                        e = setTimeout((function() {
                            n.mobileBrowserName && (t.Tawk_Window.isMobileOptimizedWebsite && "opera" !== n.mobileBrowserName && "android2.3" !== n.mobileBrowserName || n.calculateZoom())
                        }
                        ), 100)
                    },
                    isLandscape: function() {
                        return "safari" === this.mobileBrowserName || "android" === this.mobileBrowserName ? 0 !== window.orientation : screen.height < screen.width || window.innerHeight < window.innerWidth
                    },
                    calculateZoom: function() {
                        var t, e;
                        "safari" === this.mobileBrowserName || "android" === this.mobileBrowserName ? t = (!this.isLandscape() || "iPhone" !== navigator.platform && "iPad" !== navigator.platform ? screen.width : screen.height) / window.innerWidth : t = screen.width / window.innerWidth,
                        e = (1 / t.toFixed(2)).toFixed(2),
                        "chrome" !== this.mobileBrowserName && "ie" !== this.mobileBrowserName || (e = e < .2 ? .2 : e),
                        this.$store.commit("widget/setZoomRatio", e)
                    },
                    injectNodeStyle: function() {
                        var t = document.createElement("style");
                        t.setAttribute("type", "text/css"),
                        t.innerHTML = "#".concat(this.elementId, " {").concat(this.styleObject, "}"),
                        t.innerHTML += "#".concat(this.elementId, ".widget-hidden {display: none !important;}"),
                        t.innerHTML += "#".concat(this.elementId, ".widget-visible {display: block !important;}"),
                        t.innerHTML += "\n@media print{\n #".concat(this.elementId, ".widget-visible { \ndisplay: none !important;\n }\n}"),
                        document.head.appendChild(t)
                    },
                    checkIfVisible: function() {
                        if (this.isWindowed)
                            return "offline" !== this.pageStatus || this.generalVisibility.showWhenOffline ? void (this.isVisible = !0) : (window.close(),
                            void (this.isVisible = !1));
                        "offline" !== this.pageStatus || this.generalVisibility.showWhenOffline ? this.widgetIsVisible || "max" !== this.chatWindowState ? null === this.widgetShow ? this.isVisible = this.widgetIsVisible : this.isVisible = this.widgetShow : this.isVisible = !0 : this.isVisible = !1
                    },
                    handleMobileLandscape: function() {
                        var t = window.matchMedia("(orientation: landscape)").matches;
                        this.mobileBrowserName && (t ? this.updateMobileLandscape(!0) : this.updateMobileLandscape(!1))
                    }
                }),
                mounted: function() {
                    var e = this;
                    if (this.isReady && t.Tawk_Window.jsApi.triggerApiHandlers("onLoad"),
                    (this.isEmbedded || this.isWindowed) && (this.width = "100%",
                    this.height = "100%",
                    this.minWidth = "100%",
                    this.minHeight = "100%"),
                    this.isEmbedded) {
                        var n = document.getElementById(t.Tawk_Window.jsApi.local_API.embedded);
                        n && (n.appendChild(this.$el),
                        (n.clientWidth < 280 || n.clientHeight < 330) && (this.width = "".concat(this.maxDimension.width, "px"),
                        this.height = "".concat(this.maxDimension.height, "px"),
                        this.minWidth = "".concat(this.maxDimension.width, "px"),
                        this.minHeight = "".concat(this.maxDimension.height, "px")))
                    } else
                        document.body.appendChild(this.$el);
                    this.isWindowed || this.isEmbedded || (t.Tawk_Window.minWidget = new i.a({
                        render: function(t) {
                            return t(p)
                        },
                        store: this.$store
                    }).$mount("#min-widget"),
                    !this.bubble || this.chatBubbleClosed || this.mobileBrowserName || (t.Tawk_Window.bubbleWidget = new i.a({
                        render: function(t) {
                            return t(w)
                        },
                        store: this.$store
                    }).$mount("#chat-bubble")),
                    this.showMessagePreview && (t.Tawk_Window.messagePreview = new i.a({
                        render: function(t) {
                            return t(g)
                        },
                        store: this.$store
                    }).$mount("#message-preview"))),
                    ("max" === this.onClick || "slide" === this.onClick || this.isWindowed || this.isEmbedded) && (t.Tawk_Window.maxWidget = new i.a({
                        render: function(t) {
                            return t(m)
                        },
                        store: this.$store
                    }).$mount("#max-widget")),
                    this.initialDocumentClick = function() {
                        t.Tawk_Window.audioPlayer.init(),
                        window.removeEventListener("click", e.initialDocumentClick)
                    }
                    ,
                    window.addEventListener("click", this.initialDocumentClick, !1),
                    t.Tawk_Window.eventBus.$on("removeWidget", (function() {
                        t.Tawk_Window.app.$destroy(),
                        t.Tawk_Window.app.$el.parentNode && t.Tawk_Window.app.$el.parentNode.removeChild(t.Tawk_Window.app.$el)
                    }
                    ));
                    var o = window.history.pushState
                      , r = window.history.replaceState;
                    "#max-widget" === window.location.hash && (window.history ? window.history.replaceState({}, document.title, ".") : window.location.hash = ""),
                    window.history.pushState = function(t, n, i) {
                        for (var r = arguments.length, a = new Array(r > 3 ? r - 3 : 0), s = 3; s < r; s++)
                            a[s - 3] = arguments[s];
                        o.apply(window.history, [t, n, i].concat(a));
                        var c = i && "string" == typeof i ? i.indexOf("#max-widget") : -1;
                        -1 === c ? e.$store.dispatch("session/sendNavigationEvent", {}, {
                            root: !0
                        }) : e.isManualHash = !1
                    }
                    ,
                    window.history.replaceState = function(t, n, i) {
                        for (var o = i && "string" == typeof i ? i.indexOf("#max-widget") : -1, a = arguments.length, s = new Array(a > 3 ? a - 3 : 0), c = 3; c < a; c++)
                            s[c - 3] = arguments[c];
                        r.apply(window.history, [t, n, i].concat(s)),
                        -1 === o ? e.$store.dispatch("session/sendNavigationEvent", {}, {
                            root: !0
                        }) : e.isManualHash = !1
                    }
                    ,
                    window.addEventListener("popstate", (function() {
                        if ("max" === e.chatWindowState && e.mobileBrowserName)
                            return e.isManualHash = !0,
                            e.$store.dispatch("session/updateChatWindowState", "min");
                        e.isManualHash || e.$store.dispatch("session/sendNavigationEvent", {}, {
                            root: !0
                        })
                    }
                    )),
                    window.addEventListener("hashchange", (function() {
                        e.isManualHash || window.location && window.location.hash && ("#" === window.location.hash || "#max-widget" === window.location.hash) || e.$store.dispatch("session/sendNavigationEvent", {}, {
                            root: !0
                        })
                    }
                    )),
                    window.addEventListener("resize", (function() {
                        e.resizeHandler()
                    }
                    )),
                    this.resizeHandler(),
                    this.injectNodeStyle(),
                    this.handleMobileLandscape(),
                    window.addEventListener("resize", this.handleMobileLandscape),
                    window.addEventListener("beforeprint", (function() {
                        null !== e.originalPageTitle && (document.title = e.originalPageTitle)
                    }
                    )),
                    window.addEventListener("afterprint", (function() {
                        e.unreadMessageCount > 0 ? e.updatePageTitle() : e.updatePageTitle(!0)
                    }
                    ))
                },
                created: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.checkIfVisible()
                    }
                    ))
                }
            }
        }
        ).call(this, n("c8ba"))
    },
    "87dd": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return i
        }
        ));
        var i = {
            data: function() {
                return {
                    genericStyles: {
                        "outline:": "none !important;",
                        "visibility:": "visible !important;",
                        "resize:": "none !important;",
                        "box-shadow:": "none !important;",
                        "overflow:": "visible !important;",
                        "background:": "none !important;",
                        "opacity:": "1 !important;",
                        "filter:": "alpha(opacity=100) !important;",
                        "-ms-filter:": "progid:DXImageTransform.Microsoft.Alpha(Opacity 1}) !important;",
                        "-mz-opacity:": "1 !important;",
                        "-khtml-opacity:": "1 !important;",
                        "top:": "auto !important;",
                        "right:": "auto !important;",
                        "bottom:": "auto !important;",
                        "left:": "auto !important;",
                        "position:": "absolute !important;",
                        "border:": "0 !important;",
                        "min-height:": "auto !important;",
                        "min-width:": "auto !important;",
                        "max-height:": "none !important;",
                        "max-width:": "none !important;",
                        "padding:": "0 !important;",
                        "margin:": "0 !important;",
                        "-moz-transition-property:": "none !important;",
                        "-webkit-transition-property:": "none !important;",
                        "-o-transition-property:": "none !important;",
                        "transition-property:": "none !important;",
                        "transform:": "none !important;",
                        "-webkit-transform:": "none !important;",
                        "-ms-transform:": "none !important;",
                        "width:": "auto !important;",
                        "height:": "auto !important;",
                        "display:": "block !important;",
                        "z-index:": "auto !important;",
                        "background-color:": "transparent !important;",
                        "cursor:": "none !important;",
                        "float:": "none !important;",
                        "border-radius:": "unset !important;",
                        "pointer-events:": "auto !important;",
                        "clip:": "auto !important;",
                        "color-scheme:": "light !important;"
                    }
                }
            }
        }
    },
    "91ce": function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return h
            }
            ));
            var i = n("7c03")
              , o = (n("6fc0"),
            n("e1bd"))
              , r = n("bdd0");
            function a() {
                a = function() {
                    return e
                }
                ;
                var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, o = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                , r = "function" == typeof Symbol ? Symbol : {}, s = r.iterator || "@@iterator", c = r.asyncIterator || "@@asyncIterator", l = r.toStringTag || "@@toStringTag";
                function d(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function f(t, e, n, i) {
                    var r = e && e.prototype instanceof v ? e : v
                      , a = Object.create(r.prototype)
                      , s = new x(i || []);
                    return o(a, "_invoke", {
                        value: C(t, n, s)
                    }),
                    a
                }
                function h(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = f;
                var p = "suspendedStart"
                  , m = "executing"
                  , w = "completed"
                  , g = {};
                function v() {}
                function y() {}
                function b() {}
                var k = {};
                d(k, s, (function() {
                    return this
                }
                ));
                var T = Object.getPrototypeOf
                  , S = T && T(T(A([])));
                S && S !== n && i.call(S, s) && (k = S);
                var _ = b.prototype = v.prototype = Object.create(k);
                function I(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function W(t, e) {
                    function n(o, r, a, s) {
                        var c = h(t[o], t, r);
                        if ("throw" !== c.type) {
                            var l = c.arg
                              , d = l.value;
                            return d && "object" == u(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                n("next", t, a, s)
                            }
                            ), (function(t) {
                                n("throw", t, a, s)
                            }
                            )) : e.resolve(d).then((function(t) {
                                l.value = t,
                                a(l)
                            }
                            ), (function(t) {
                                return n("throw", t, a, s)
                            }
                            ))
                        }
                        s(c.arg)
                    }
                    var r;
                    o(this, "_invoke", {
                        value: function(t, i) {
                            function o() {
                                return new e((function(e, o) {
                                    n(t, i, e, o)
                                }
                                ))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }
                function C(e, n, i) {
                    var o = p;
                    return function(r, a) {
                        if (o === m)
                            throw Error("Generator is already running");
                        if (o === w) {
                            if ("throw" === r)
                                throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = r,
                        i.arg = a; ; ) {
                            var s = i.delegate;
                            if (s) {
                                var c = P(s, i);
                                if (c) {
                                    if (c === g)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (o === p)
                                    throw o = w,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            o = m;
                            var u = h(e, n, i);
                            if ("normal" === u.type) {
                                if (o = i.done ? w : "suspendedYield",
                                u.arg === g)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: i.done
                                }
                            }
                            "throw" === u.type && (o = w,
                            i.method = "throw",
                            i.arg = u.arg)
                        }
                    }
                }
                function P(e, n) {
                    var i = n.method
                      , o = e.iterator[i];
                    if (o === t)
                        return n.delegate = null,
                        "throw" === i && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        P(e, n),
                        "throw" === n.method) || "return" !== i && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        g;
                    var r = h(o, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        g;
                    var a = r.arg;
                    return a ? a.done ? (n[e.resultName] = a.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    g) : a : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    g)
                }
                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(E, this),
                    this.reset(!0)
                }
                function A(e) {
                    if (e || "" === e) {
                        var n = e[s];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var o = -1
                              , r = function n() {
                                for (; ++o < e.length; )
                                    if (i.call(e, o))
                                        return n.value = e[o],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return r.next = r
                        }
                    }
                    throw new TypeError(u(e) + " is not iterable")
                }
                return y.prototype = b,
                o(_, "constructor", {
                    value: b,
                    configurable: !0
                }),
                o(b, "constructor", {
                    value: y,
                    configurable: !0
                }),
                y.displayName = d(b, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                    d(t, l, "GeneratorFunction")),
                    t.prototype = Object.create(_),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                I(W.prototype),
                d(W.prototype, c, (function() {
                    return this
                }
                )),
                e.AsyncIterator = W,
                e.async = function(t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new W(f(t, n, i, o),r);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                I(_),
                d(_, l, "Generator"),
                d(_, s, (function() {
                    return this
                }
                )),
                d(_, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var i in e)
                        n.push(i);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var i = n.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = A,
                x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(O),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function o(i, o) {
                            return s.type = "throw",
                            s.arg = e,
                            n.next = i,
                            o && (n.method = "next",
                            n.arg = t),
                            !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = i.call(a, "catchLoc")
                                  , u = i.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var a = r ? r.completion : {};
                        return a.type = t,
                        a.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                O(n),
                                g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, i) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: n,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        g
                    }
                },
                e
            }
            function s(t, e, n, i, o, r, a) {
                try {
                    var s = t[r](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, o)
            }
            function c(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var r = t.apply(e, n);
                        function a(t) {
                            s(r, i, o, a, c, "next", t)
                        }
                        function c(t) {
                            s(r, i, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function u(t) {
                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, f(i.key), i)
                }
            }
            function d(t, e, n) {
                return (e = f(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n,
                t
            }
            function f(t) {
                var e = function(t, e) {
                    if ("object" != u(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != u(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == u(e) ? e : e + ""
            }
            var h = function(t, e, n) {
                return e && l(t.prototype, e),
                n && l(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t(e) {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t),
                d(this, "store", null),
                d(this, "sessionInformation", null),
                this.store = e
            }
            ), [{
                key: "getSessionInformation",
                value: function() {
                    var e, n = this.store.getters["property/id"];
                    return this.sessionInformation && (e = this.sessionInformation),
                    t.Tawk_Window.webStorage.localStore && (e = t.Tawk_Window.webStorage.localStore.getItem("twk_" + n)),
                    e || (e = t.Tawk_Window.webStorage.cookieStore.getItem("Tawk_" + n)[0]),
                    this.parseSessionInformation(e)
                }
            }, {
                key: "storeSessionInformation",
                value: function(e) {
                    var n = this.store.getters["session/visitorSocketServer"]
                      , i = n || ""
                      , o = this.store.getters["session/needConsent"]
                      , r = this.store.getters["widget/consentData"];
                    (n || e) && ((e || !o && r) && (i += "::cf"),
                    t.Tawk_Window.webStorage.localStore.setItem("twk_" + this.store.getters["property/id"], i) || t.Tawk_Window.webStorage.cookieStore.setItem("Tawk_" + this.store.getters["property/id"], i, !1),
                    this.sessionInformation = i)
                }
            }, {
                key: "parseSessionInformation",
                value: function(t) {
                    var e = [];
                    return t && (e = t.split("::")).length <= 1 && (e = t.split("||")),
                    e
                }
            }, {
                key: "getUUID",
                value: function() {
                    var e = this;
                    return new Promise((function(n, i) {
                        var o, r, a = e.store.getters["property/id"], s = "twk_uuid_".concat(a);
                        if (e.store.getters["widget/isPopout"])
                            e.getPopoutUUID(s).then((function(t) {
                                n(t)
                            }
                            )).catch((function() {
                                i()
                            }
                            ));
                        else {
                            if ((e.store.getters["widget/isWindowed"] || e.store.getters["property/isTawkHostedPage"]) && (r = t.Tawk_Window.webStorage.localStore.getItem(s)) && r.length)
                                try {
                                    if ((r = JSON.parse(r)) && "object" === u(r))
                                        return n(r)
                                } catch (t) {
                                    console.error(t)
                                }
                            if (!r && (r = t.Tawk_Window.webStorage.cookieStore.getItem(s)) && r.length)
                                try {
                                    o = JSON.parse(decodeURIComponent(r[0]))
                                } catch (t) {
                                    console.error(t)
                                }
                            o || (o = e.getDeprecatedUUID()),
                            n(o)
                        }
                    }
                    ))
                }
            }, {
                key: "getPopoutUUID",
                value: function(e) {
                    return new Promise((function(n, i) {
                        var o, r, a = t.Tawk_Window.webStorage.sessionStore.getItem(e);
                        if (a && a.length)
                            try {
                                r = JSON.parse(a),
                                n(r)
                            } catch (t) {
                                console.error(t),
                                i()
                            }
                        else
                            window.addEventListener("message", (function t(e) {
                                if (e.data && e.source === window.opener) {
                                    if (window.removeEventListener("message", t, !1),
                                    clearTimeout(o),
                                    e.data.twkWidgetUUID)
                                        return n({
                                            uuid: e.data.twkWidgetUUID,
                                            version: 3
                                        });
                                    n({})
                                }
                            }
                            ), !1),
                            o = setTimeout((function() {
                                i()
                            }
                            ), 1e4),
                            window.opener.postMessage("getTwkWidgetUUID", "*")
                    }
                    ))
                }
            }, {
                key: "getDeprecatedUUID",
                value: function() {
                    var e, n, o = !1, r = 1 / 0, a = i.a.toASCII(window.location.hostname);
                    "www." === a.substring(0, 4) && (a = a.replace("www.", ""));
                    var s = t.Tawk_Window.webStorage.cookieStore.getItem("__tawkuuid");
                    if (s && s.length > 0)
                        for (var c = 0; c < s.length; c++) {
                            var u = this.parseSessionInformation(s[c]);
                            if (4 === u.length) {
                                var l = u[0]
                                  , d = u[1]
                                  , f = u[2]
                                  , h = u[3];
                                if ("e" === l) {
                                    if (a === d) {
                                        e = f,
                                        n = h;
                                        break
                                    }
                                } else if ("p" === l) {
                                    var p = a.match(d);
                                    p && a.substr(p.index) === d && p.index < r && (r = p.index,
                                    e = f,
                                    n = h,
                                    o = !0)
                                }
                            }
                        }
                    return e ? {
                        uuid: e,
                        version: n,
                        isPartial: o
                    } : {}
                }
            }, {
                key: "getIdempotencyKey",
                value: function() {
                    var t = c(a().mark((function t() {
                        var e, n = this;
                        return a().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    navigator.locks.request("idempotency_key", c(a().mark((function t() {
                                        return a().wrap((function(t) {
                                            for (; ; )
                                                switch (t.prev = t.next) {
                                                case 0:
                                                    e = n.generateIdempotencyKey();
                                                case 1:
                                                case "end":
                                                    return t.stop()
                                                }
                                        }
                                        ), t)
                                    }
                                    ))));
                                case 3:
                                    return t.abrupt("return", e);
                                case 6:
                                    return t.prev = 6,
                                    t.t0 = t.catch(0),
                                    t.abrupt("return", new Promise((function(t) {
                                        var i = 1 * Math.random() + .5;
                                        setTimeout((function() {
                                            e = n.generateIdempotencyKey(),
                                            t(e)
                                        }
                                        ), 1e3 * Math.round(i))
                                    }
                                    )));
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 6]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "generateIdempotencyKey",
                value: function() {
                    var e = t.Tawk_Window.webStorage.cookieStore.getItem("twk_idm_key");
                    return e && e.length ? e = e[0] : (e = Object(o.a)(),
                    t.Tawk_Window.webStorage.cookieStore.setItem("twk_idm_key", e, !0),
                    t.Tawk_Window.webStorage.cookieStore.checkItemSaved("twk_idm_key")),
                    e
                }
            }, {
                key: "storeUUID",
                value: function(e, n, i) {
                    var o = this.store.getters["property/id"]
                      , r = "twk_uuid_".concat(o)
                      , a = (new Date).getTime()
                      , s = JSON.stringify({
                        uuid: e,
                        version: n,
                        domain: i,
                        ts: a
                    });
                    if (this.store.getters["widget/isPopout"])
                        t.Tawk_Window.webStorage.sessionStore.setItem(r, s);
                    else if (this.store.getters["widget/isWindowed"] || this.store.getters["property/isTawkHostedPage"])
                        t.Tawk_Window.webStorage.localStore.setItem(r, s);
                    else {
                        t.Tawk_Window.webStorage.cookieStore.setItem(r, encodeURIComponent(s), !1, i || void 0);
                        try {
                            t.Tawk_Window.webStorage.cookieStore.checkItemSaved(r)
                        } catch (t) {
                            console.error(t)
                        }
                    }
                }
            }, {
                key: "getStoredToken",
                value: function() {
                    var e, n = this.store.getters["property/id"];
                    return (e = this.store.getters["widget/isPopout"] ? t.Tawk_Window.webStorage.sessionStore.getItem("twk_token_".concat(n)) : t.Tawk_Window.webStorage.localStore.getItem("twk_token_".concat(n))) || (t.Tawk_Window.webStorage.localStore.getItem("twk_token"),
                    t.Tawk_Window.webStorage.localStore.deleteItem("twk_token")),
                    e
                }
            }, {
                key: "storeToken",
                value: function(e) {
                    var n = this.store.getters["property/id"]
                      , i = "twk_token_".concat(n);
                    this.store.getters["widget/isPopout"] ? t.Tawk_Window.webStorage.sessionStore.setItem(i, e) : t.Tawk_Window.webStorage.localStore.setItem(i, e)
                }
            }, {
                key: "reconnectSession",
                value: function() {
                    var e = c(a().mark((function e(n) {
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = n || function() {}
                                    ,
                                    e.next = 3,
                                    t.Tawk_Window.criticalRefresh();
                                case 3:
                                    n();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "login",
                value: function() {
                    var e = c(a().mark((function e(n, i) {
                        var o, s, c, u = this;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.store.dispatch("session/checkTokenValidity");
                                case 3:
                                    e.next = 9;
                                    break;
                                case 5:
                                    return e.prev = 5,
                                    e.t0 = e.catch(0),
                                    console.error("[JSAPI/Login]", e.t0),
                                    e.abrupt("return");
                                case 9:
                                    o = "".concat("https://va.tawk.to", "/v1/client/login"),
                                    (s = t.Tawk_Window.sessionManager.getStoredToken()) && (c = {
                                        "X-Tawk-Token": s
                                    }),
                                    r.a.post(o, n, c, (function(e, n) {
                                        return e || !e && !n ? i(!0) : n.error ? i(n.error) : void u.reconnectSession((function() {
                                            i(),
                                            t.Tawk_Window.eventBus.$emit("forceUpdate")
                                        }
                                        ))
                                    }
                                    ), !0, !0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 5]])
                    }
                    )));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "logout",
                value: function() {
                    var e = c(a().mark((function e(n) {
                        var i, o, s, c = this;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    this.store.dispatch("session/checkTokenValidity");
                                case 3:
                                    e.next = 9;
                                    break;
                                case 5:
                                    return e.prev = 5,
                                    e.t0 = e.catch(0),
                                    console.error("[JSAPI/Logout]", e.t0),
                                    e.abrupt("return");
                                case 9:
                                    i = "".concat("https://va.tawk.to", "/v1/client/logout"),
                                    (o = t.Tawk_Window.sessionManager.getStoredToken()) && (s = {
                                        "X-Tawk-Token": o
                                    }),
                                    r.a.post(i, {}, s, (function(e, i) {
                                        return e || !e && !i ? n(!0) : i.error ? n(i.error) : void c.reconnectSession((function() {
                                            n(),
                                            t.Tawk_Window.eventBus.$emit("forceUpdate")
                                        }
                                        ))
                                    }
                                    ), !0, !0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 5]])
                    }
                    )));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }])
        }
        ).call(this, n("c8ba"))
    },
    "99e1": function(t, e, n) {
        "use strict";
        (function(t) {
            function i(t) {
                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, r(i.key), i)
                }
            }
            function r(t) {
                var e = function(t, e) {
                    if ("object" != i(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != i(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == i(e) ? e : e + ""
            }
            n.d(e, "a", (function() {
                return a
            }
            ));
            var a = function(t, e, n) {
                return e && o(t.prototype, e),
                n && o(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function e(n) {
                var i = this;
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, e),
                this.store = n,
                this.focusReconnectCalled = !1,
                this.hasFocus = !1,
                this.active = !1,
                this.away = !1,
                this.inactivityTimeout = null,
                this.awayTimeout = null,
                this.interval = null,
                this.onActivityHandler = function() {
                    t.Tawk_Window && (i.away && window.$_Tawk.connected && t.Tawk_Window.app.$socket.publish("notifySocketStatusUpdate", "online"),
                    i.active = !0,
                    i.away = !1)
                }
                ,
                this.popupOnFocusHandler = function() {
                    t.Tawk_Window && (!window.$_Tawk.connected && t.Tawk_Window.app.$socket.isForcedDisconnect() ? (i.store.commit("session/setIsInactive", !1),
                    t.Tawk_Window.criticalRefresh()) : (i.hasFocus || (i.active = !0,
                    i.hasFocus = !0,
                    window.$_Tawk.connected && t.Tawk_Window.app.$socket.publish("popupOnFocus", !0)),
                    i.away && window.$_Tawk.connected && t.Tawk_Window.app.$socket.publish("notifySocketStatusUpdate", "online"),
                    i.away = !1))
                }
                ,
                this.popupOnBlurHandler = function() {
                    t.Tawk_Window && (i.hasFocus = !1,
                    window.$_Tawk.connected && t.Tawk_Window.app.$socket.publish("popupOnFocus", !1))
                }
                ,
                this.reconnectOnActivity = function() {
                    t.Tawk_Window && !i.focusReconnectCalled && (i.focusReconnectCalled = !0,
                    i.store.commit("session/setIsInactive", !1),
                    t.Tawk_Window.criticalRefresh())
                }
                ,
                this.initActivityReset = function() {
                    i.cleanUp(),
                    i.resetTimeout(),
                    i.setupListeners(),
                    i.setupMaxWidgetListeners(),
                    i.interval = setInterval((function() {
                        i.active && (i.resetTimeout(),
                        i.active = !1)
                    }
                    ), 1e4)
                }
            }
            ), [{
                key: "resetTimeout",
                value: function() {
                    var e = this;
                    clearTimeout(this.inactivityTimeout),
                    clearTimeout(this.awayTimeout),
                    t.Tawk_Window && !t.Tawk_Window.app.$socket.isForcedDisconnect() && (this.awayTimeout = setTimeout((function() {
                        !e.away && t.Tawk_Window && (e.away = !0,
                        t.Tawk_Window && t.Tawk_Window.app.$socket && window.$_Tawk.connected && t.Tawk_Window.app.$socket.publish("notifySocketStatusUpdate", "away"))
                    }
                    ), 6e5),
                    this.inactivityTimeout = setTimeout((function() {
                        e.inactivityTimeoutHandler()
                    }
                    ), 12e5))
                }
            }, {
                key: "inactivityTimeoutHandler",
                value: function() {
                    t.Tawk_Window && (this.store.dispatch("chat/clearUnseenMessages"),
                    t.Tawk_Window.app.$socket.disconnectSocket(),
                    this.store.commit("session/setChatWindowState", "min"),
                    this.store.commit("session/setIsInactive", !0),
                    this.setupMaxWidgetListenersReconnect(),
                    this.store.getters["browserData/mobileBrowserName"] ? (document.addEventListener("touchmove", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.addEventListener("touchend", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.addEventListener("keydown", this.reconnectOnActivity, {
                        once: !0
                    })) : (document.addEventListener("mousemove", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.addEventListener("click", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.addEventListener("keydown", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.onfocusin ? document.addEventListener("focusin", this.reconnectOnActivity, {
                        once: !0
                    }) : window.addEventListener("focus", this.reconnectOnActivity, {
                        once: !0
                    })))
                }
            }, {
                key: "cleanUp",
                value: function() {
                    clearInterval(this.interval),
                    clearTimeout(this.inactivityTimeout),
                    clearTimeout(this.awayTimeout),
                    document.removeEventListener("mousemove", this.onActivityHandler),
                    document.removeEventListener("click", this.onActivityHandler),
                    document.removeEventListener("keydown", this.onActivityHandler),
                    document.removeEventListener("click", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.removeEventListener("keydown", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.removeEventListener("focus", this.reconnectOnActivity, {
                        once: !0
                    }),
                    document.removeEventListener("focusin", this.popupOnFocusHandler),
                    document.removeEventListener("focusout", this.popupOnBlurHandler),
                    window.removeEventListener("focus", this.popupOnFocusHandler),
                    window.removeEventListener("blur", this.popupOnBlurHandler),
                    t && t.Tawk_Window && t.Tawk_Window.maxWidget && t.Tawk_Window.maxWidget.$el && t.Tawk_Window.maxWidget.$el.contentDocument && (t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("mousemove", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("click", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("keydown", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchmove", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchend", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("mousemove", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("click", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("keydown", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchmove", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.removeEventListener("touchend", this.reconnectOnActivity, {
                        once: !0
                    })),
                    this.hasFocus = !1,
                    this.active = !1,
                    this.away = !1,
                    this.inactivityTimeout = null,
                    this.awayTimeout = null,
                    this.interval = null,
                    this.focusReconnectCalled = !1
                }
            }, {
                key: "setupListeners",
                value: function() {
                    this.store.getters["browserData/mobileBrowserName"] ? (document.addEventListener("touchmove", this.onActivityHandler),
                    document.addEventListener("touchend", this.onActivityHandler),
                    document.addEventListener("keydown", this.onActivityHandler)) : this.store.getters["widget/isWindowed"] ? (document.onfocusin ? (document.addEventListener("focusin", this.popupOnFocusHandler),
                    document.addEventListener("focusout", this.popupOnBlurHandler)) : (window.addEventListener("focus", this.popupOnFocusHandler),
                    window.addEventListener("blur", this.popupOnBlurHandler)),
                    document.addEventListener("click", this.popupOnFocusHandler),
                    document.addEventListener("keydown", this.popupOnFocusHandler)) : (document.addEventListener("mousemove", this.onActivityHandler),
                    document.addEventListener("click", this.onActivityHandler),
                    document.addEventListener("keydown", this.onActivityHandler))
                }
            }, {
                key: "setupMaxWidgetListeners",
                value: function() {
                    t && t.Tawk_Window && t.Tawk_Window.maxWidget && t.Tawk_Window.maxWidget.$el && t.Tawk_Window.maxWidget.$el.contentDocument && (t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("mousemove", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("click", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("keydown", this.onActivityHandler),
                    this.store.getters["browserData/mobileBrowserName"] && (t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchmove", this.onActivityHandler),
                    t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchend", this.onActivityHandler)))
                }
            }, {
                key: "setupMaxWidgetListenersReconnect",
                value: function() {
                    t && t.Tawk_Window && t.Tawk_Window.maxWidget && t.Tawk_Window.maxWidget.$el && t.Tawk_Window.maxWidget.$el.contentDocument && (t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("mousemove", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("click", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("keydown", this.reconnectOnActivity, {
                        once: !0
                    }),
                    this.store.getters["browserData/mobileBrowserName"] && (t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchmove", this.reconnectOnActivity, {
                        once: !0
                    }),
                    t.Tawk_Window.maxWidget.$el.contentDocument.addEventListener("touchend", this.reconnectOnActivity, {
                        once: !0
                    })))
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    "9a05": function(t, e, n) {
        "use strict";
        n.r(e);
        e.default = {
            namespaced: !0,
            state: {
                id: null,
                pageName: "",
                isTawkHostedPage: !1
            },
            getters: {
                id: function(t) {
                    return t.id
                },
                isTawkHostedPage: function(t) {
                    return t.isTawkHostedPage
                }
            },
            actions: {
                updateId: function(t, e) {
                    (0,
                    t.commit)("setId", e)
                },
                updateIsTawkHostedPage: function(t, e) {
                    (0,
                    t.commit)("setIsTawkHostedPage", e)
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                }
            },
            mutations: {
                setId: function(t, e) {
                    t.id = e
                },
                setIsTawkHostedPage: function(t, e) {
                    t.isTawkHostedPage = e
                },
                unsetData: function(t) {
                    for (var e = {
                        id: null,
                        pageName: "",
                        isTawkHostedPage: !1
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                }
            }
        }
    },
    "9b4f": function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var i = n("7f46");
            e.default = {
                namespaced: !0,
                state: {
                    agents: {},
                    agentsCount: 0,
                    activeProfiles: [],
                    chat: {
                        buffer: [],
                        department: "any",
                        endVersion: 1,
                        history: [],
                        id: null,
                        order: 0,
                        version: 0,
                        unreadMessage: 0,
                        synced: !1,
                        messages: {},
                        unseenMessages: [],
                        historyProcessed: !1,
                        endedChats: [],
                        lastMessage: {}
                    },
                    allProfiles: {},
                    rating: null,
                    incomingMessage: null,
                    calls: {},
                    chatTransfer: {
                        data: null,
                        version: null
                    },
                    ongoingCall: !1,
                    incomingCall: null,
                    hasChatStarted: !1,
                    messageBlocks: [],
                    visitorHasMessaged: !1,
                    agentHasMessaged: !1,
                    hasChatEnded: !1,
                    uploadFiles: [],
                    lastScrollPositon: null,
                    outgoingMessage: null,
                    firstIncoming: !1,
                    form: {
                        refs: {},
                        ticket: {
                            id: null,
                            hasSubmitted: !1
                        },
                        lead: {
                            id: null,
                            hasSubmitted: !1
                        }
                    }
                },
                getters: {
                    activeProfiles: function(t) {
                        return t.activeProfiles
                    },
                    agents: function(t) {
                        return t.agents
                    },
                    agentsCount: function(t) {
                        return t.agentsCount
                    },
                    agentProfile: function(t) {
                        return function(e) {
                            var n = t.agents[e];
                            return n && n.profileId ? t.allProfiles[n.profileId] : null
                        }
                    },
                    allProfiles: function(t) {
                        return t.allProfiles
                    },
                    chatOrder: function(t) {
                        return t.chat.order
                    },
                    chatVersion: function(t) {
                        return t.chat.version
                    },
                    incomingMessage: function(t) {
                        return t.incomingMessage
                    },
                    profiles: function(t) {
                        return t.profiles
                    },
                    rating: function(t) {
                        return t.rating
                    },
                    chatMessages: function(t) {
                        return t.chat.messages
                    },
                    unreadMessageCount: function(t) {
                        return t.chat.unreadMessage
                    },
                    incomingCall: function(t) {
                        return t.incomingCall
                    },
                    callData: function(t) {
                        return function(e) {
                            return t.calls[e]
                        }
                    },
                    chatTransferData: function(t) {
                        return t.chatTransfer.data
                    },
                    calls: function(t) {
                        return t.calls
                    },
                    hasChatStarted: function(t) {
                        return t.hasChatStarted
                    },
                    visitorHasMessaged: function(t) {
                        return t.visitorHasMessaged
                    },
                    agentHasMessaged: function(t) {
                        return t.agentHasMessaged
                    },
                    chatEndVersion: function(t) {
                        return t.chat.endVersion
                    },
                    hasChatEnded: function(t) {
                        return t.hasChatEnded
                    },
                    uploadFiles: function(t) {
                        return t.uploadFiles
                    },
                    lastScrollPositon: function(t) {
                        return t.lastScrollPositon
                    },
                    outgoingMessage: function(t) {
                        return t.outgoingMessage
                    },
                    historyProcessed: function(t) {
                        return t.chat.historyProcessed
                    },
                    isChatOngoing: function(t) {
                        return !t.hasChatEnded && t.visitorHasMessaged && t.agentsCount > 0
                    },
                    isVisitorEngaged: function(t) {
                        return !t.hasChatEnded && t.visitorHasMessaged
                    },
                    messageBlocks: function(t) {
                        return t.messageBlocks
                    },
                    endedChats: function(t) {
                        return t.chat.endedChats
                    },
                    lastMessage: function(t) {
                        return t.chat.lastMessage
                    },
                    firstIncoming: function(t) {
                        return t.firstIncoming
                    },
                    ongoingCall: function(t) {
                        return t.ongoingCall
                    },
                    formRefs: function(t) {
                        return t.form.refs
                    },
                    formTicket: function(t) {
                        return t.form.ticket
                    },
                    formLead: function(t) {
                        return t.form.lead
                    }
                },
                actions: {
                    updateConversation: function(e, n) {
                        var i = e.dispatch
                          , o = e.state
                          , r = e.getters
                          , a = e.commit
                          , s = (n = n || {}).cver || 0
                          , c = n.c || [];
                        if (o.chat.synced = !0,
                        !(o.chat.version >= s)) {
                            for (var u = 0, l = o.chat.buffer.length; u < l; u++)
                                o.chat.buffer[u].cver > s && c.push(o.chat.buffer[u]);
                            for (var d = function() {
                                var e = c[f];
                                if (!e.md || !e.md.ao) {
                                    var o = t.Tawk_Window.chatManager.parseChatMessage(e, !0);
                                    o && setTimeout((function() {
                                        t.Tawk_Window.audioPlayer.playSound(),
                                        a("setIncomingMessage", o),
                                        a("setVersion", n.cver),
                                        i("updateChatMessage", o)
                                    }
                                    ), 50)
                                }
                            }, f = 0, h = c.length; f < h; f++)
                                d();
                            o.visitorHasMessaged && !o.agentHasMessaged && r["widget/showEstimatedWaitTime"] && i("session/addWaitTime", {}, {
                                root: !0
                            }),
                            o.chat.version = s
                        }
                    },
                    updateAgentCount: function(t, e) {
                        t.state.agentsCount += e
                    },
                    updateVersion: function(t, e) {
                        (0,
                        t.commit)("setVersion", e)
                    },
                    updateDepartment: function(t, e) {
                        (0,
                        t.commit)("setDepartment", e)
                    },
                    incomingChatMessage: function(e, n) {
                        var i = e.commit
                          , o = e.state
                          , r = e.dispatch;
                        if ("offline" === e.rootGetters["session/pageStatus"]) {
                            if ("a" !== n.ut)
                                return;
                            r("session/setPageStatus", {
                                status: "online"
                            }, {
                                root: !0
                            })
                        }
                        if (n.cver > o.chat.version) {
                            if (n.md && n.md.ao)
                                return void i("setVersion", n.cver);
                            var a = t.Tawk_Window.chatManager.parseChatMessage(n, !0);
                            a && (t.Tawk_Window.audioPlayer.playSound(),
                            i("setIncomingMessage", a),
                            i("setVersion", n.cver),
                            r("updateChatMessage", a))
                        }
                    },
                    outgoingChatMessage: function(t, e) {
                        var n = t.commit
                          , i = t.state
                          , o = t.dispatch;
                        e && e.cver > i.chat.version && (n("setVersion", e.cver),
                        o("updateChatMessage", e))
                    },
                    agentJoined: function(t, e) {
                        for (var n, i = t.state, o = t.commit, r = t.dispatch, a = i.allProfiles[e.profileData.profileId], s = 0; s < i.activeProfiles.length; s++)
                            if (i.activeProfiles[s].profileId === e.profileData.profileId) {
                                n = i.activeProfiles[s];
                                break
                            }
                        n ? (n.count++,
                        n.profileImage !== e.profileData.profileImage && (n.profileImage = e.profileData.profileImage,
                        a && (a.profileImage = e.profileData.profileImage))) : i.activeProfiles.push(e.profileData),
                        a || (i.allProfiles[e.profileData.profileId] = e.profileData),
                        o("setAgent", e),
                        r("updateAgentCount", 1)
                    },
                    agentLeft: function(t, e) {
                        var n = t.state
                          , i = t.commit
                          , o = t.dispatch
                          , r = t.getters.agentProfile(e.resourceId);
                        if (r && r.profileId) {
                            for (var a = 1, s = 0; s < n.activeProfiles.length; s++)
                                if (n.activeProfiles[s].profileId === r.profileId) {
                                    var c = n.activeProfiles[s];
                                    a = c.count,
                                    --a < 1 ? n.activeProfiles.splice(s, 1) : c.count = a;
                                    break
                                }
                            e.agentData.pid = r.profileId,
                            i("setAgent", e),
                            o("updateAgentCount", -1)
                        }
                    },
                    setPreviousMessages: function(e) {
                        var n, i, o, r, a, s = e.state, c = e.commit, u = e.rootGetters, l = e.dispatch, d = 0, f = s.chat.history, h = 0;
                        for (s.chat.endVersion = 0,
                        n = 0,
                        i = f.length; n < i; n++)
                            "CHAT_ENDED" === f[n].m && (l("processEndedChat", f.slice(h, n + 1)),
                            d = n + 1,
                            s.chat.endVersion += 1,
                            h = n);
                        r = s.chat.order > 0 ? s.chat.messages[s.chat.order] : null;
                        var p = function() {
                            if (!(o = f[n]).md || o.md && !o.md.ao) {
                                if (r && r.timeStamp >= new Date(o.co).getTime())
                                    return 1;
                                "v" !== o.ut || s.visitorHasMessaged || "c" !== o.t || (a = (new Date).getTime() - new Date(o.co).getTime());
                                var e = t.Tawk_Window.chatManager.parseChatMessage(o);
                                e && (setTimeout((function() {
                                    c("setIncomingMessage", e)
                                }
                                )),
                                l("updateChatMessage", e))
                            }
                        };
                        for (n = d,
                        i = f.length; n < i; n++)
                            p();
                        s.visitorHasMessaged && !s.agentHasMessaged && u["widget/showEstimatedWaitTime"] && (u["session/waitTime"] < a ? c("session/setWaitTime", 6e4, {
                            root: !0
                        }) : c("session/setWaitTime", u["session/waitTime"] - a, {
                            root: !0
                        }),
                        l("session/addWaitTime", {}, {
                            root: !0
                        })),
                        s.hasChatStarted = s.visitorHasMessaged || s.agentHasMessaged,
                        s.hasChatEnded = !!s.chat.endVersion && !s.hasChatStarted,
                        c("setHistoryProcessed", !0)
                    },
                    updateUnseenMessages: function(t, e) {
                        var n = t.state;
                        n.chat.unseenMessages.push(e),
                        n.chat.unreadMessage += 1
                    },
                    clearUnseenMessages: function(t) {
                        var e = t.state;
                        e.chat.unseenMessages = [],
                        e.chat.unreadMessage = 0
                    },
                    clearProfiles: function(t) {
                        var e = t.state;
                        e.activeProfiles = [],
                        e.allProfiles = {},
                        e.agents = {},
                        e.agentsCount = 0
                    },
                    endChat: function(e, n) {
                        var i = e.state
                          , o = e.commit
                          , r = e.dispatch
                          , a = e.rootGetters;
                        n = n || function() {}
                        ,
                        t.Tawk_Window.app.$socket.publish("endVisitorChat", (function(e, s) {
                            if (e)
                                n(!0);
                            else {
                                for (var c = Object.keys(i.chat.messages), u = [], l = 0; l < c.length; l++) {
                                    var d = c[l];
                                    u.push(i.chat.messages[d].rawMessage)
                                }
                                u.push({
                                    m: "CHAT_ENDED",
                                    t: "n",
                                    co: new Date
                                }),
                                i.chat.endVersion = s.chatEndVersion,
                                i.chat.messages = {},
                                i.hasChatStarted = !1,
                                i.hasChatEnded = !0,
                                i.chat.order = 0,
                                r("processEndedChat", u),
                                o("setChatId", s.nextChatId),
                                r("clearProfiles"),
                                a["widget/isEmbedded"] || r("session/toggleWidget", "", {
                                    root: !0
                                }),
                                r("clearMessageBlock"),
                                t.Tawk_Window.jsApi.triggerApiHandlers("onChatEnded"),
                                n()
                            }
                        }
                        ))
                    },
                    resetState: function(t) {
                        (0,
                        t.commit)("unsetData")
                    },
                    updateCallData: function(t, e) {
                        var n = t.state;
                        for (var i in n.calls[e.callId] = e,
                        n.chat.messages)
                            if (n.chat.messages[i].callId === e.callId) {
                                n.chat.messages[i].callData = e;
                                break
                            }
                    },
                    updateChatTransferData: function(t, e) {
                        var n = t.commit
                          , i = t.state
                          , o = e.transfer
                          , r = e.transferVersion;
                        r > i.chatTransfer.version && (n("setChatTransferData", o),
                        n("setChatTransferVersion", r))
                    },
                    updateRatingMessage: function(t, e) {
                        var n = t.commit
                          , i = t.state;
                        e && (n("incrementChatOrder"),
                        i.chat.messages[i.chat.order] = e)
                    },
                    addMessageBlock: function(t, e) {
                        (0,
                        t.commit)("pushMessageBlock", e)
                    },
                    clearMessageBlock: function(t) {
                        (0,
                        t.commit)("unsetMessageBlock")
                    },
                    updateChatMessage: function(e, n) {
                        var i = e.commit
                          , o = e.state
                          , r = e.rootGetters;
                        i("incrementChatOrder"),
                        o.chat.messages[o.chat.order] = n,
                        ("c" === n.type || n.callData) && i("setLastMessage", n),
                        "c" === n.type && "s" !== n.senderType && !o.hasChatStarted && r["schedule/isEnabled"] && t.Tawk_Window.scheduler.hasScheduleToday() && t.Tawk_Window.scheduler.hasCurrentTimePassedSchedule() && "603e2c2c1c1c2a130d63fd5a" === r["property/id"] && t.Tawk_Window.logger.reportError({
                            incident: "Sending chat message while offline",
                            data: {
                                currentTime: new Date,
                                timezone: (new Date).getTimezoneOffset(),
                                userAgent: t.navigator.userAgent
                            },
                            state: {
                                schedule: {
                                    isEnabled: r["schedule/isEnabled"],
                                    slots: r["schedule/slots"],
                                    timeZone: r["schedule/timezone"]
                                },
                                session: {
                                    pageStatus: r["session/pageStatus"]
                                },
                                widget: {
                                    id: r["widget/id"]
                                },
                                visitor: {
                                    id: r["visitor/id"]
                                }
                            }
                        }),
                        "c" !== n.type || "s" === n.senderType || o.hasChatStarted || "offline" === r["session/pageStatus"] || (i("setChatHasStarted", !0),
                        t.Tawk_Window.jsApi.triggerApiHandlers("onChatStarted", {
                            chatId: o.chat.id
                        }))
                    },
                    processEndedChat: function(t, e) {
                        for (var n, o, r = t.state, a = [], s = [], c = r.chat.id, u = 0; u < e.length; u++) {
                            var l = e[u];
                            "c" !== l.t ? "n" === l.t && "AGENT_JOIN_CONVERSATION" === l.m && l.md ? (a.push({
                                displayName: i.a.rawDecode(l.n),
                                profileId: l.md.pid,
                                profileImage: l.md.pi,
                                profileTitle: i.a.rawDecode(l.md.pst)
                            }),
                            -1 === s.indexOf(l.uid) && s.push(l.uid)) : "CHAT_ENDED" === l.m && (n = l.co) : o = l.m
                        }
                        r.chat.endedChats.unshift({
                            id: c + r.chat.endedChats.length,
                            agentAliases: a,
                            agentIds: s,
                            snippet: o,
                            messages: e,
                            endedOn: n,
                            isTemp: !0
                        })
                    },
                    updateOngoingCall: function(t, e) {
                        (0,
                        t.commit)("setOngoingCall", e)
                    },
                    setTicketFormID: function(t, e) {
                        (0,
                        t.commit)("updateTicketFormID", e)
                    },
                    setLeadFormID: function(t, e) {
                        (0,
                        t.commit)("updateLeadFormID", e)
                    },
                    setSeenAllUnseenMessages: function(e) {
                        var n = e.state
                          , i = e.dispatch;
                        if (n.chat.unseenMessages.length > 0) {
                            var o = Object.keys(n.chat.messages).length
                              , r = n.chat.messages[o];
                            r && r.timeStamp && (i("session/updateVisitorChatSeen", r.timeStamp, {
                                root: !0
                            }),
                            i("clearUnseenMessages"),
                            t.Tawk_Window.jsApi.triggerApiHandlers("onUnreadCountChanged", n.chat.unreadMessageCount))
                        }
                    }
                },
                mutations: {
                    setVersion: function(t, e) {
                        t.chat.version = e
                    },
                    setDepartment: function(t, e) {
                        t.chat.department = e
                    },
                    setIncomingMessage: function(t, e) {
                        t.incomingMessage = e,
                        t.firstIncoming = !1,
                        0 !== Object.keys(t.chat.lastMessage).length || t.firstIncoming || (t.firstIncoming = !0)
                    },
                    incrementChatOrder: function(t) {
                        t.chat.order += 1
                    },
                    setRating: function(t, e) {
                        t.rating = e
                    },
                    setAgent: function(t, e) {
                        t.agents[e.resourceId] = {
                            profileId: e.agentData.pid,
                            seq: e.agentData.seq
                        }
                    },
                    setChatId: function(t, e) {
                        t.chat.id = e
                    },
                    setIncomingCall: function(t, e) {
                        t.incomingCall = e
                    },
                    setChatTransferData: function(t, e) {
                        t.chatTransfer.data = e
                    },
                    setChatTransferVersion: function(t, e) {
                        t.chatTransfer.version = e
                    },
                    setChatHasStarted: function(t, e) {
                        t.hasChatStarted = e,
                        t.hasChatEnded = !e
                    },
                    setVisitorHasMessaged: function(t, e) {
                        t.visitorHasMessaged = e
                    },
                    setAgentHasMessaged: function(t, e) {
                        t.agentHasMessaged = e
                    },
                    setHistoryMessages: function(t, e) {
                        t.chat.history = e
                    },
                    addFileUpload: function(t, e) {
                        t.uploadFiles.push(e)
                    },
                    removeFileUpload: function(t, e) {
                        var n = t.uploadFiles.findIndex((function(t) {
                            return t.uuid === e
                        }
                        ));
                        -1 !== n && t.uploadFiles.splice(n, 1)
                    },
                    setLastScrollPosition: function(t, e) {
                        t.lastScrollPositon = e
                    },
                    setOutgoingMessage: function(t, e) {
                        t.outgoingMessage = e
                    },
                    setHistoryProcessed: function(t, e) {
                        t.chat.historyProcessed = e
                    },
                    unsetData: function(t) {
                        for (var e = {
                            agents: {},
                            agentsCount: 0,
                            activeProfiles: [],
                            chat: {
                                buffer: [],
                                department: "any",
                                endVersion: 1,
                                history: [],
                                id: null,
                                order: 0,
                                version: 0,
                                unreadMessage: 0,
                                synced: !1,
                                messages: {},
                                unseenMessages: [],
                                historyProcessed: !1,
                                endedChats: [],
                                lastMessage: {}
                            },
                            allProfiles: {},
                            rating: null,
                            incomingMessage: null,
                            calls: {},
                            chatTransfer: {
                                data: null,
                                version: null
                            },
                            ongoingCall: !1,
                            incomingCall: null,
                            hasChatStarted: !1,
                            messageBlocks: [],
                            visitorHasMessaged: !1,
                            agentHasMessaged: !1,
                            hasChatEnded: !1,
                            uploadFiles: [],
                            lastScrollPositon: null,
                            outgoingMessage: null,
                            firstIncoming: !1,
                            form: {
                                refs: {},
                                ticket: {
                                    id: null,
                                    hasSubmitted: !1
                                },
                                lead: {
                                    id: null,
                                    hasSubmitted: !1
                                }
                            }
                        }, n = Object.keys(e), i = 0; i < n.length; i++) {
                            var o = n[i];
                            t[o] = e[o]
                        }
                    },
                    pushMessageBlock: function(t, e) {
                        t.messageBlocks.push(e)
                    },
                    unsetMessageBlock: function(t) {
                        t.messageBlocks = []
                    },
                    setLastMessage: function(t, e) {
                        t.chat.lastMessage = e
                    },
                    setOngoingCall: function(t, e) {
                        t.ongoingCall = e
                    },
                    setFormRefs: function(t, e) {
                        t.form.refs[e.id] = e.done
                    },
                    setTicketFormSubmit: function(t, e) {
                        t.form.ticket.hasSubmitted = e
                    },
                    updateTicketFormID: function(t, e) {
                        t.form.ticket.id = e
                    },
                    setLeadFormSubmit: function(t, e) {
                        t.form.lead.hasSubmitted = e
                    },
                    updateLeadFormID: function(t, e) {
                        t.form.lead.id = e
                    }
                }
            }
        }
        .call(this, n("c8ba"))
    },
    "9be8": function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return d
            }
            ));
            var i = n("bdd0")
              , o = n("fad2");
            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function a() {
                a = function() {
                    return e
                }
                ;
                var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, o = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                , s = "function" == typeof Symbol ? Symbol : {}, c = s.iterator || "@@iterator", u = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
                function d(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function f(t, e, n, i) {
                    var r = e && e.prototype instanceof v ? e : v
                      , a = Object.create(r.prototype)
                      , s = new x(i || []);
                    return o(a, "_invoke", {
                        value: C(t, n, s)
                    }),
                    a
                }
                function h(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = f;
                var p = "suspendedStart"
                  , m = "executing"
                  , w = "completed"
                  , g = {};
                function v() {}
                function y() {}
                function b() {}
                var k = {};
                d(k, c, (function() {
                    return this
                }
                ));
                var T = Object.getPrototypeOf
                  , S = T && T(T(A([])));
                S && S !== n && i.call(S, c) && (k = S);
                var _ = b.prototype = v.prototype = Object.create(k);
                function I(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function W(t, e) {
                    function n(o, a, s, c) {
                        var u = h(t[o], t, a);
                        if ("throw" !== u.type) {
                            var l = u.arg
                              , d = l.value;
                            return d && "object" == r(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                n("next", t, s, c)
                            }
                            ), (function(t) {
                                n("throw", t, s, c)
                            }
                            )) : e.resolve(d).then((function(t) {
                                l.value = t,
                                s(l)
                            }
                            ), (function(t) {
                                return n("throw", t, s, c)
                            }
                            ))
                        }
                        c(u.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(t, i) {
                            function o() {
                                return new e((function(e, o) {
                                    n(t, i, e, o)
                                }
                                ))
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }
                function C(e, n, i) {
                    var o = p;
                    return function(r, a) {
                        if (o === m)
                            throw Error("Generator is already running");
                        if (o === w) {
                            if ("throw" === r)
                                throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = r,
                        i.arg = a; ; ) {
                            var s = i.delegate;
                            if (s) {
                                var c = P(s, i);
                                if (c) {
                                    if (c === g)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (o === p)
                                    throw o = w,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            o = m;
                            var u = h(e, n, i);
                            if ("normal" === u.type) {
                                if (o = i.done ? w : "suspendedYield",
                                u.arg === g)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: i.done
                                }
                            }
                            "throw" === u.type && (o = w,
                            i.method = "throw",
                            i.arg = u.arg)
                        }
                    }
                }
                function P(e, n) {
                    var i = n.method
                      , o = e.iterator[i];
                    if (o === t)
                        return n.delegate = null,
                        "throw" === i && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        P(e, n),
                        "throw" === n.method) || "return" !== i && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        g;
                    var r = h(o, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        g;
                    var a = r.arg;
                    return a ? a.done ? (n[e.resultName] = a.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    g) : a : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    g)
                }
                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(E, this),
                    this.reset(!0)
                }
                function A(e) {
                    if (e || "" === e) {
                        var n = e[c];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var o = -1
                              , a = function n() {
                                for (; ++o < e.length; )
                                    if (i.call(e, o))
                                        return n.value = e[o],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return a.next = a
                        }
                    }
                    throw new TypeError(r(e) + " is not iterable")
                }
                return y.prototype = b,
                o(_, "constructor", {
                    value: b,
                    configurable: !0
                }),
                o(b, "constructor", {
                    value: y,
                    configurable: !0
                }),
                y.displayName = d(b, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                    d(t, l, "GeneratorFunction")),
                    t.prototype = Object.create(_),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                I(W.prototype),
                d(W.prototype, u, (function() {
                    return this
                }
                )),
                e.AsyncIterator = W,
                e.async = function(t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new W(f(t, n, i, o),r);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                I(_),
                d(_, l, "Generator"),
                d(_, c, (function() {
                    return this
                }
                )),
                d(_, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var i in e)
                        n.push(i);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var i = n.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = A,
                x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(O),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function o(i, o) {
                            return s.type = "throw",
                            s.arg = e,
                            n.next = i,
                            o && (n.method = "next",
                            n.arg = t),
                            !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = i.call(a, "catchLoc")
                                  , u = i.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var a = r ? r.completion : {};
                        return a.type = t,
                        a.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                O(n),
                                g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, i) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: n,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        g
                    }
                },
                e
            }
            function s(t, e, n, i, o, r, a) {
                try {
                    var s = t[r](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, o)
            }
            function c(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var r = t.apply(e, n);
                        function a(t) {
                            s(r, i, o, a, c, "next", t)
                        }
                        function c(t) {
                            s(r, i, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }
                    ))
                }
            }
            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, l(i.key), i)
                }
            }
            function l(t) {
                var e = function(t, e) {
                    if ("object" != r(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != r(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == r(e) ? e : e + ""
            }
            var d = function(t, e, n) {
                return e && u(t.prototype, e),
                n && u(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t(e) {
                (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }
                )(this, t),
                this.registerTime = 0,
                this.maxRetrycount = 3,
                this.retryCount = 0,
                this.previousRegisterCall = null,
                this.requestCancelTimeout = null,
                this.connectionCookieInterval = null,
                this.registerDelayTimeout = null,
                this.registerData = null,
                this.registerStarted = !1,
                this.retryDelay = null,
                this.retryInitialDelay = 30,
                this.retryMultiplier = 1.5,
                this.minRandom = .5,
                this.maxRandom = 1.5,
                this.maxDelay = 120,
                this.retryRegisterTimeout = null,
                this.store = e
            }
            ), [{
                key: "clearTimers",
                value: function() {
                    this.abort(),
                    clearTimeout(this.requestCancelTimeout),
                    clearTimeout(this.registerDelayTimeout),
                    clearTimeout(this.retryRegisterTimeout),
                    clearInterval(this.connectionCookieInterval),
                    t && t.Tawk_Window && t.Tawk_Window.webStorage && t.Tawk_Window.webStorage.cookieStore.setItem("TawkConnectionTime", 0, !0),
                    this.retryRegisterTimeout = null,
                    this.registerDelayTimeout = null,
                    this.requestCancelTimeout = null,
                    this.connectionCookieInterval = null
                }
            }, {
                key: "init",
                value: function() {
                    var t = c(a().mark((function t(e, n) {
                        var i, o, r, s = arguments;
                        return a().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return i = s.length > 2 && void 0 !== s[2] ? s[2] : {},
                                    o = i.visitor,
                                    r = void 0 === o ? void 0 : o,
                                    this.registerStarted = !0,
                                    this.clearTimers(),
                                    t.next = 5,
                                    this.prepareData({
                                        visitor: r
                                    });
                                case 5:
                                    if (this.registerData.u || this.registerData.uik) {
                                        t.next = 8;
                                        break
                                    }
                                    return this.clearTimers(),
                                    t.abrupt("return");
                                case 8:
                                    this.startRegister(e, n);
                                case 9:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }()
            }, {
                key: "prepareData",
                value: function() {
                    var e = c(a().mark((function e() {
                        var n, i, s, c, u, l, d, f, h, p, m, w, g, v, y, b = arguments;
                        return a().wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = b.length > 0 && void 0 !== b[0] ? b[0] : {},
                                    s = i.visitor,
                                    c = void 0 === s ? void 0 : s,
                                    u = void 0,
                                    t.Tawk_Window) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    if (l = "",
                                    d = this.store.getters,
                                    (f = t.Tawk_Window.sessionManager.getSessionInformation()).length && (l = f[0]),
                                    ((h = (new Date).getTimezoneOffset()) < -900 || h > 900) && (h = 0),
                                    !window.sessionStorage.getItem("tawk_has_register_visitor") && null !== (n = window.Tawk_API) && void 0 !== n && n.visitor && "object" === r(window.Tawk_API.visitor) && (u = o.a.formatVisitorLoginData(c)),
                                    this.registerData ? this.registerData.vss = l : this.registerData = {
                                        p: d["property/id"] || "",
                                        w: d["widget/id"],
                                        platform: d["browserData/mobileBrowserName"] ? "mobile" : "desktop",
                                        tzo: h,
                                        url: document.location.href,
                                        referrer: document.referrer || void 0,
                                        vss: l,
                                        user: u
                                    },
                                    p = null,
                                    window.location && window.location.href)
                                        try {
                                            "http:" !== (p = new URL(window.location.href)).protocol && "https:" !== p.protocol && "file:" !== p.protocol || (this.registerData.url = window.location.href)
                                        } catch (t) {}
                                    if (!p && window.top !== window)
                                        try {
                                            window.top.document && window.top.location && window.top.location.href && (this.registerData.url = window.top.document.location.href)
                                        } catch (t) {
                                            console.error("[Tawk/Register]: Failed to access url")
                                        }
                                    this.registerData.consent = !1,
                                    m = 0;
                                case 18:
                                    if (!(m < f.length)) {
                                        e.next = 25;
                                        break
                                    }
                                    if ("cf" !== f[m]) {
                                        e.next = 22;
                                        break
                                    }
                                    return this.registerData.consent = !0,
                                    e.abrupt("break", 25);
                                case 22:
                                    m++,
                                    e.next = 18;
                                    break;
                                case 25:
                                    return t.Tawk_Window.maximize ? this.registerData.wss = "max" : this.registerData.wss = "min",
                                    e.prev = 26,
                                    e.next = 29,
                                    t.Tawk_Window.sessionManager.getUUID();
                                case 29:
                                    if (w = e.sent,
                                    g = w.uuid,
                                    v = w.version,
                                    y = w.isPartial,
                                    !g) {
                                        e.next = 39;
                                        break
                                    }
                                    this.registerData.u = g,
                                    this.registerData.uv = parseInt(v, 10),
                                    2 === v && y && (this.registerData.uw = 1),
                                    e.next = 42;
                                    break;
                                case 39:
                                    return e.next = 41,
                                    t.Tawk_Window.sessionManager.getIdempotencyKey();
                                case 41:
                                    this.registerData.uik = e.sent;
                                case 42:
                                    e.next = 47;
                                    break;
                                case 44:
                                    e.prev = 44,
                                    e.t0 = e.catch(26),
                                    console.error(e.t0);
                                case 47:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[26, 44]])
                    }
                    )));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "startRegister",
                value: function(e, n) {
                    var i = t.Tawk_Window.webStorage.cookieStore.getItem("TawkConnectionTime")
                      , o = parseInt(i.length ? i[0] : null, 10);
                    !o || (new Date).getTime() - new Date(o).getTime() > 1e3 ? (t.Tawk_Window.webStorage.cookieStore.setItem("TawkConnectionTime", (new Date).getTime(), !0),
                    this.connectionCookieInterval = setInterval((function() {
                        t && t.Tawk_Window && t.Tawk_Window.webStorage && t.Tawk_Window.webStorage.cookieStore.setItem("TawkConnectionTime", (new Date).getTime(), !0)
                    }
                    ), 100),
                    this.doRegister(e, n)) : this.delayRegister(e, n)
                }
            }, {
                key: "delayRegister",
                value: function(t, e) {
                    var n = this;
                    clearTimeout(this.registerDelayTimeout),
                    this.registerDelayTimeout = setTimeout((function() {
                        n.init(t, e)
                    }
                    ), 1e3)
                }
            }, {
                key: "doRegister",
                value: function(e, n) {
                    var o = this;
                    this.setupRegisterTimeout();
                    var a, s = "".concat("https://va.tawk.to", "/v1/session/start"), c = t.Tawk_Window.sessionManager.getStoredToken();
                    c && (a = {
                        "X-Tawk-Token": c
                    }),
                    this.previousRegisterCall = i.a.post(s, this.registerData, a, (function(i, a) {
                        var s;
                        return o.clearTimers(),
                        i || !i && !a ? o.retryRegister(e, n) : a.error ? a.error.code && "InternalServerError" === a.error.code ? o.retryRegister(e, n) : n() : (null !== (s = window.Tawk_API) && void 0 !== s && s.visitor && "object" === r(window.Tawk_API.visitor) && window.sessionStorage.setItem("tawk_has_register_visitor", !0),
                        e(a),
                        void (o.registerData.user && "object" === r(o.registerData) && t.Tawk_Window.jsApi.unsetVisitorAttributes()))
                    }
                    ), !0, !0)
                }
            }, {
                key: "setupRegisterTimeout",
                value: function() {
                    var t = this;
                    clearTimeout(this.requestCancelTimeout),
                    this.requestCancelTimeout = setTimeout((function() {
                        t.abort(),
                        t.retryRegister()
                    }
                    ), 9e4)
                }
            }, {
                key: "abort",
                value: function() {
                    null !== this.previousRegisterCall && (this.previousRegisterCall = null)
                }
            }, {
                key: "retryRegister",
                value: function(t, e) {
                    var n, i = this;
                    if (null === this.retryRegisterTimeout) {
                        if (this.retryCount >= this.maxRetrycount)
                            return this.clearTimers(),
                            void this.store.commit("widget/setVisibility", !1);
                        this.retryCount++,
                        n = this.getRetryWaitDelay(),
                        this.retryRegisterTimeout = setTimeout((function() {
                            i.init(t, e)
                        }
                        ), n)
                    }
                }
            }, {
                key: "getRetryWaitDelay",
                value: function() {
                    var t, e = Math.random() * (this.maxRandom - this.minRandom) + this.minRandom;
                    return null === this.retryDelay ? this.retryDelay = this.retryInitialDelay : (t = this.retryDelay * this.retryMultiplier,
                    this.retryDelay > this.maxDelay || t > this.maxDelay ? this.retryDelay = this.maxDelay : this.retryDelay = t),
                    1e3 * Math.round(this.retryDelay * e)
                }
            }, {
                key: "resetRetryCount",
                value: function() {
                    this.retryCount = 0,
                    this.retryDelay = 10
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    a18c: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return l
        }
        ));
        var i = n("4360")
          , o = {
            name: "TawkRouterView",
            render: function(t) {
                var e;
                return i.a.getters["router/getCurrentView"] && (e = t(i.a.getters["router/getCurrentView"].component)),
                t("transition", {
                    props: {
                        name: "slide-fade",
                        mode: "out-in"
                    },
                    ref: "router-view"
                }, [e])
            }
        }
          , r = n("d046");
        function a(t) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, c(i.key), i)
            }
        }
        function c(t) {
            var e = function(t, e) {
                if ("object" != a(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" != a(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == a(e) ? e : e + ""
        }
        function u(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        var l = function(t, e, n) {
            return e && s(t.prototype, e),
            n && s(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }((function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            u(this, t),
            this.matcher = e.routes
        }
        ));
        l.install = function(t) {
            i.a.dispatch("router/addRoutes", r.a),
            t.component("TawkRouterView", o)
        }
    },
    a3cc: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("bdd0")
          , o = n("7f46");
        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function a() {
            a = function() {
                return e
            }
            ;
            var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, o = Object.defineProperty || function(t, e, n) {
                t[e] = n.value
            }
            , s = "function" == typeof Symbol ? Symbol : {}, c = s.iterator || "@@iterator", u = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
            function d(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                d({}, "")
            } catch (t) {
                d = function(t, e, n) {
                    return t[e] = n
                }
            }
            function f(t, e, n, i) {
                var r = e && e.prototype instanceof v ? e : v
                  , a = Object.create(r.prototype)
                  , s = new x(i || []);
                return o(a, "_invoke", {
                    value: C(t, n, s)
                }),
                a
            }
            function h(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = f;
            var p = "suspendedStart"
              , m = "executing"
              , w = "completed"
              , g = {};
            function v() {}
            function y() {}
            function b() {}
            var k = {};
            d(k, c, (function() {
                return this
            }
            ));
            var T = Object.getPrototypeOf
              , S = T && T(T(A([])));
            S && S !== n && i.call(S, c) && (k = S);
            var _ = b.prototype = v.prototype = Object.create(k);
            function I(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    d(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function W(t, e) {
                function n(o, a, s, c) {
                    var u = h(t[o], t, a);
                    if ("throw" !== u.type) {
                        var l = u.arg
                          , d = l.value;
                        return d && "object" == r(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                            n("next", t, s, c)
                        }
                        ), (function(t) {
                            n("throw", t, s, c)
                        }
                        )) : e.resolve(d).then((function(t) {
                            l.value = t,
                            s(l)
                        }
                        ), (function(t) {
                            return n("throw", t, s, c)
                        }
                        ))
                    }
                    c(u.arg)
                }
                var a;
                o(this, "_invoke", {
                    value: function(t, i) {
                        function o() {
                            return new e((function(e, o) {
                                n(t, i, e, o)
                            }
                            ))
                        }
                        return a = a ? a.then(o, o) : o()
                    }
                })
            }
            function C(e, n, i) {
                var o = p;
                return function(r, a) {
                    if (o === m)
                        throw Error("Generator is already running");
                    if (o === w) {
                        if ("throw" === r)
                            throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (i.method = r,
                    i.arg = a; ; ) {
                        var s = i.delegate;
                        if (s) {
                            var c = P(s, i);
                            if (c) {
                                if (c === g)
                                    continue;
                                return c
                            }
                        }
                        if ("next" === i.method)
                            i.sent = i._sent = i.arg;
                        else if ("throw" === i.method) {
                            if (o === p)
                                throw o = w,
                                i.arg;
                            i.dispatchException(i.arg)
                        } else
                            "return" === i.method && i.abrupt("return", i.arg);
                        o = m;
                        var u = h(e, n, i);
                        if ("normal" === u.type) {
                            if (o = i.done ? w : "suspendedYield",
                            u.arg === g)
                                continue;
                            return {
                                value: u.arg,
                                done: i.done
                            }
                        }
                        "throw" === u.type && (o = w,
                        i.method = "throw",
                        i.arg = u.arg)
                    }
                }
            }
            function P(e, n) {
                var i = n.method
                  , o = e.iterator[i];
                if (o === t)
                    return n.delegate = null,
                    "throw" === i && e.iterator.return && (n.method = "return",
                    n.arg = t,
                    P(e, n),
                    "throw" === n.method) || "return" !== i && (n.method = "throw",
                    n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                    g;
                var r = h(o, e.iterator, n.arg);
                if ("throw" === r.type)
                    return n.method = "throw",
                    n.arg = r.arg,
                    n.delegate = null,
                    g;
                var a = r.arg;
                return a ? a.done ? (n[e.resultName] = a.value,
                n.next = e.nextLoc,
                "return" !== n.method && (n.method = "next",
                n.arg = t),
                n.delegate = null,
                g) : a : (n.method = "throw",
                n.arg = new TypeError("iterator result is not an object"),
                n.delegate = null,
                g)
            }
            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function O(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function x(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(E, this),
                this.reset(!0)
            }
            function A(e) {
                if (e || "" === e) {
                    var n = e[c];
                    if (n)
                        return n.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var o = -1
                          , a = function n() {
                            for (; ++o < e.length; )
                                if (i.call(e, o))
                                    return n.value = e[o],
                                    n.done = !1,
                                    n;
                            return n.value = t,
                            n.done = !0,
                            n
                        };
                        return a.next = a
                    }
                }
                throw new TypeError(r(e) + " is not iterable")
            }
            return y.prototype = b,
            o(_, "constructor", {
                value: b,
                configurable: !0
            }),
            o(b, "constructor", {
                value: y,
                configurable: !0
            }),
            y.displayName = d(b, l, "GeneratorFunction"),
            e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                d(t, l, "GeneratorFunction")),
                t.prototype = Object.create(_),
                t
            }
            ,
            e.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            I(W.prototype),
            d(W.prototype, u, (function() {
                return this
            }
            )),
            e.AsyncIterator = W,
            e.async = function(t, n, i, o, r) {
                void 0 === r && (r = Promise);
                var a = new W(f(t, n, i, o),r);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }
                ))
            }
            ,
            I(_),
            d(_, l, "Generator"),
            d(_, c, (function() {
                return this
            }
            )),
            d(_, "toString", (function() {
                return "[object Generator]"
            }
            )),
            e.keys = function(t) {
                var e = Object(t)
                  , n = [];
                for (var i in e)
                    n.push(i);
                return n.reverse(),
                function t() {
                    for (; n.length; ) {
                        var i = n.pop();
                        if (i in e)
                            return t.value = i,
                            t.done = !1,
                            t
                    }
                    return t.done = !0,
                    t
                }
            }
            ,
            e.values = A,
            x.prototype = {
                constructor: x,
                reset: function(e) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = t,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = t,
                    this.tryEntries.forEach(O),
                    !e)
                        for (var n in this)
                            "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done)
                        throw e;
                    var n = this;
                    function o(i, o) {
                        return s.type = "throw",
                        s.arg = e,
                        n.next = i,
                        o && (n.method = "next",
                        n.arg = t),
                        !!o
                    }
                    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var a = this.tryEntries[r]
                          , s = a.completion;
                        if ("root" === a.tryLoc)
                            return o("end");
                        if (a.tryLoc <= this.prev) {
                            var c = i.call(a, "catchLoc")
                              , u = i.call(a, "finallyLoc");
                            if (c && u) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            } else if (c) {
                                if (this.prev < a.catchLoc)
                                    return o(a.catchLoc, !0)
                            } else {
                                if (!u)
                                    throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc)
                                    return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var r = o;
                            break
                        }
                    }
                    r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                    var a = r ? r.completion : {};
                    return a.type = t,
                    a.arg = e,
                    r ? (this.method = "next",
                    this.next = r.finallyLoc,
                    g) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    g
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                            return this.complete(n.completion, n.afterLoc),
                            O(n),
                            g
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var i = n.completion;
                            if ("throw" === i.type) {
                                var o = i.arg;
                                O(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, n, i) {
                    return this.delegate = {
                        iterator: A(e),
                        resultName: n,
                        nextLoc: i
                    },
                    "next" === this.method && (this.arg = t),
                    g
                }
            },
            e
        }
        function s(t, e, n, i, o, r, a) {
            try {
                var s = t[r](a)
                  , c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(i, o)
        }
        function c(t) {
            return function() {
                var e = this
                  , n = arguments;
                return new Promise((function(i, o) {
                    var r = t.apply(e, n);
                    function a(t) {
                        s(r, i, o, a, c, "next", t)
                    }
                    function c(t) {
                        s(r, i, o, a, c, "throw", t)
                    }
                    a(void 0)
                }
                ))
            }
        }
        e.default = {
            namespaced: !0,
            state: {
                baseUrl: "/v1/kb",
                id: null,
                items: [],
                options: [],
                loading: {
                    index: !1,
                    show: !1,
                    search: !1
                },
                selected: {},
                isLoadingCodeMirror: !1,
                isCodeMirrorLoaded: !1,
                searchData: {
                    query: null,
                    results: [],
                    hasNext: !1,
                    token: null,
                    total: 0,
                    error: !1,
                    linkTarget: "self"
                },
                siteId: null,
                scrollPosition: 0
            },
            getters: {
                items: function(t) {
                    return t.items
                },
                isLoading: function(t) {
                    return function(e) {
                        return t.loading[e]
                    }
                },
                selected: function(t) {
                    return t.selected
                },
                options: function(t) {
                    return t.options
                },
                isLoadingCodeMirror: function(t) {
                    return t.isLoadingCodeMirror
                },
                isCodeMirrorLoaded: function(t) {
                    return t.isCodeMirrorLoaded
                },
                searchData: function(t) {
                    return t.searchData
                },
                siteId: function(t) {
                    return t.siteId
                },
                scrollPosition: function(t) {
                    return t.scrollPosition
                }
            },
            actions: {
                show: function() {
                    var t = c(a().mark((function t(e, n) {
                        var o, r, s;
                        return a().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (o = e.state,
                                    r = e.commit,
                                    s = e.rootGetters,
                                    n.siteId && n.articleId) {
                                        t.next = 3;
                                        break
                                    }
                                    throw "Please set article ID before calling the action.show";
                                case 3:
                                    return r("setLoading", {
                                        action: "show",
                                        value: !0
                                    }),
                                    t.next = 6,
                                    i.a.get("".concat("https://va.tawk.to").concat(o.baseUrl).concat(n.url), {
                                        propertyId: s["property/id"],
                                        siteId: n.siteId,
                                        articleId: n.articleId
                                    }, null, (function(t, e) {
                                        if (t)
                                            throw r("setLoading", {
                                                action: "show",
                                                value: !1
                                            }),
                                            t;
                                        e.data.siteId = n.siteId,
                                        r("setSelected", e.data),
                                        r("setLoading", {
                                            action: "show",
                                            value: !1
                                        })
                                    }
                                    ));
                                case 6:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                updateOptions: function(t, e) {
                    (0,
                    t.commit)("setOptions", e)
                },
                updateId: function(t, e) {
                    (0,
                    t.commit)("setId", e)
                },
                unsetSelected: function(t) {
                    (0,
                    t.commit)("setSelected", {})
                },
                setCodeMirrorIsLoading: function(t) {
                    var e = t.state;
                    e.isCodeMirrorLoaded = !1,
                    e.isLoadingCodeMirror = !0
                },
                setCodeMirrorIsLoaded: function(t) {
                    var e = t.state;
                    e.isCodeMirrorLoaded = !0,
                    e.isLoadingCodeMirror = !1
                },
                searchArticles: function() {
                    var t = c(a().mark((function t(e, n) {
                        var o, r, s, c, u;
                        return a().wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (o = e.commit,
                                    r = e.rootGetters,
                                    s = e.state,
                                    c = e.dispatch,
                                    o("setLoading", {
                                        action: "search",
                                        value: !0
                                    }),
                                    n && void 0 !== n.siteId && o("setSiteId", n.siteId),
                                    n && void 0 !== n.search && o("setSearchQuery", n.search),
                                    s.searchData.query) {
                                        t.next = 7;
                                        break
                                    }
                                    return o("setLoading", {
                                        action: "search",
                                        value: !1
                                    }),
                                    t.abrupt("return");
                                case 7:
                                    return u = {
                                        propertyId: r["property/id"],
                                        siteId: s.siteId,
                                        query: s.searchData.query,
                                        limit: n && n.limit ? n.limit : 10,
                                        from: s.searchData.results.length
                                    },
                                    t.next = 10,
                                    i.a.get("".concat("https://va.tawk.to", "/v1/kb/article/search"), u, null, (function(t, e) {
                                        o("setLoading", {
                                            action: "search",
                                            value: !1
                                        }),
                                        t ? s.searchData.error = !0 : (o("setSearchResults", e.data),
                                        c("searchPerformedAnalytics"))
                                    }
                                    ));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    )));
                    return function(e, n) {
                        return t.apply(this, arguments)
                    }
                }(),
                articleClickedAnalytics: function(t, e) {
                    var n = t.state;
                    i.a.post("".concat("https://va.tawk.to", "/v1/kb/analytics/search-result-clicked"), {
                        token: n.searchData.token,
                        articleId: e
                    }, null, (function(t, e) {
                        if (t)
                            return e
                    }
                    ), !1, !0)
                },
                searchPerformedAnalytics: function(t) {
                    var e = t.state;
                    i.a.post("".concat("https://va.tawk.to", "/v1/kb/analytics/search-performed"), {
                        token: e.searchData.token
                    }, null, (function(t, e) {
                        if (t)
                            return e
                    }
                    ), !1, !0)
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                },
                setSearchLoading: function(t, e) {
                    (0,
                    t.commit)("setLoading", {
                        action: "search",
                        value: e
                    })
                },
                updateSearchDataLinkTarget: function(t, e) {
                    (0,
                    t.commit)("setSearchDataLinkTarget", e)
                },
                unsetSearchData: function(t) {
                    (0,
                    t.commit)("resetSearchQuery")
                },
                setScrollPosition: function(t, e) {
                    (0,
                    t.commit)("modifyScrollPosition", e)
                },
                unsetScrollPosition: function(t) {
                    (0,
                    t.commit)("modifyScrollPosition", 0)
                },
                unsetSearchDataResults: function(t) {
                    (0,
                    t.commit)("softResetSearchData")
                }
            },
            mutations: {
                setId: function(t, e) {
                    t.id = e
                },
                setItems: function(t, e) {
                    t.items = e
                },
                setLoading: function(t, e) {
                    var n = e.action
                      , i = e.value;
                    t.loading[n] = i
                },
                setSelected: function(t, e) {
                    t.selected = e
                },
                setOptions: function(t, e) {
                    t.options = e
                },
                setSearchResults: function(t, e) {
                    e.articles.forEach((function(t) {
                        if (t.highlight) {
                            if (t.highlight.title && t.highlight.title.length)
                                for (var e = 0; e < t.highlight.title.length; e++)
                                    t.title = o.a.rawEncode(t.highlight.title[e]).replace(/\[em\]/gi, '<span class="tawk-text-bold">').replace(/\[\/em\]/gi, "</span>");
                            if (t.highlight.subtitle && t.highlight.subtitle.length)
                                for (var n = 0; n < t.highlight.subtitle.length; n++)
                                    t.subtitle = o.a.rawEncode(t.highlight.subtitle[n]).replace(/\[em]/gi, '<span class="tawk-text-bold">').replace(/\[\/em\]/gi, "</span>")
                        }
                    }
                    )),
                    t.searchData.results = t.searchData.results.concat(e.articles),
                    t.searchData.hasNext = e.total > t.searchData.results.length,
                    t.searchData.token = e.token,
                    t.searchData.total = e.total,
                    t.searchData.error = !1
                },
                setSearchQuery: function(t, e) {
                    t.searchData.query = e,
                    t.searchData.results = [],
                    t.searchData.hasNext = !1,
                    t.searchData.token = null,
                    t.searchData.total = 0,
                    t.searchData.error = !1
                },
                setSiteId: function(t, e) {
                    t.siteId = e
                },
                unsetData: function(t) {
                    for (var e = {
                        baseUrl: "/v1/kb",
                        id: null,
                        items: [],
                        options: [],
                        loading: {
                            index: !1,
                            show: !1,
                            search: !1
                        },
                        selected: {},
                        isLoadingCodeMirror: !1,
                        isCodeMirrorLoaded: !1,
                        searchData: {
                            query: null,
                            results: [],
                            hasNext: !1,
                            token: null,
                            total: 0,
                            error: !1,
                            linkTarget: "self"
                        },
                        siteId: null,
                        scrollPosition: 0
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                },
                setSearchDataLinkTarget: function(t, e) {
                    t.searchData.linkTarget = e
                },
                resetSearchQuery: function(t) {
                    t.searchData.query = null,
                    t.searchData.results = [],
                    t.searchData.hasNext = !1,
                    t.searchData.token = null,
                    t.searchData.total = 0,
                    t.searchData.error = !1,
                    t.searchData.linkTarget = "self"
                },
                modifyScrollPosition: function(t, e) {
                    t.scrollPosition = e
                },
                softResetSearchData: function(t) {
                    t.searchData.results = [],
                    t.searchData.hasNext = !1,
                    t.searchData.total = 0,
                    t.searchData.error = !1
                }
            }
        }
    },
    b250: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var i = n("fad2")
              , o = n("7f46");
            e.default = {
                namespaced: !0,
                state: {
                    email: null,
                    displayName: null,
                    name: null,
                    transcriptEmail: null,
                    uuid: null,
                    uuidVer: 0,
                    visitorId: null
                },
                getters: {
                    getEmailValue: function(t) {
                        return t.email || t.transcriptEmail
                    },
                    name: function(t) {
                        return i.a.isGeneratedName(t.name) ? "" : t.name
                    },
                    uuidVer: function(t) {
                        return t.uuidVer
                    },
                    uuid: function(t) {
                        return t.uuid
                    },
                    transcriptEmail: function(t) {
                        return t.transcriptEmail
                    },
                    visitorId: function(t) {
                        return t.visitorId
                    }
                },
                actions: {
                    updateUUID: function(e, n) {
                        (0,
                        e.commit)("setVisitorUUID", {
                            uver: n.uv,
                            uuid: n.u
                        }),
                        t.Tawk_Window.sessionManager.storeUUID(n.u, n.uv, n.domain)
                    },
                    updateVisitorInformation: function(t, e) {
                        var n = t.commit
                          , i = t.state
                          , r = {
                            visitorId: i.visitorId,
                            name: i.name,
                            email: i.email,
                            transcriptEmail: i.transcriptEmail
                        };
                        e.n && o.a.isString(e.n) && (r.name = e.n),
                        e.te && o.a.isString(e.te) && (r.transcriptEmail = e.te),
                        e.e && o.a.isString(e.e) && (r.email = e.e),
                        e.vid && (r.visitorId = e.vid),
                        n("setVisitorInformation", r)
                    },
                    clearVisitorInformation: function(t) {
                        (0,
                        t.commit)("setVisitorInformation", {
                            name: void 0,
                            email: void 0,
                            transcriptEmail: void 0
                        })
                    },
                    resetState: function(t) {
                        (0,
                        t.commit)("unsetData")
                    }
                },
                mutations: {
                    setVisitorUUID: function(t, e) {
                        t.uuidVer = e.uver || 0,
                        t.uuid = e.uuid
                    },
                    setVisitorInformation: function(t, e) {
                        t.visitorId = e.visitorId,
                        t.name = o.a.rawDecode(e.name),
                        t.displayName = i.a.parseVisitorName(e.name),
                        t.email = e.email,
                        t.transcriptEmail = e.transcriptEmail
                    },
                    unsetData: function(t) {
                        for (var e = {
                            email: null,
                            displayName: null,
                            name: null,
                            transcriptEmail: null,
                            uuid: null,
                            uuidVer: 0,
                            visitorId: null
                        }, n = Object.keys(e), i = 0; i < n.length; i++) {
                            var o = n[i];
                            t[o] = e[o]
                        }
                    }
                }
            }
        }
        .call(this, n("c8ba"))
    },
    b7cc: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return s
            }
            ));
            var i = n("fad2");
            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, a(i.key), i)
                }
            }
            function a(t) {
                var e = function(t, e) {
                    if ("object" != o(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != o(i))
                            return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(e) ? e : e + ""
            }
            var s = function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }((function t(e) {
                if (function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.store = e,
                this.local_API = {},
                window.$_Tawk = window.$_Tawk || {},
                window.Tawk_API = window.Tawk_API || {},
                "object" === o(window.$_Tawk_API))
                    for (var n in window.$_Tawk_API)
                        Object.prototype.hasOwnProperty.call(window.$_Tawk_API, n) && (window.Tawk_API[n] = window.$_Tawk_API[n]);
                "function" != typeof window.CustomEvent && (this.CustomEventIE(),
                this.CustomEventIE.prototype = window.Event.prototype),
                this.init()
            }
            ), [{
                key: "CustomEventIE",
                value: function(t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = document.createEvent("CustomEvent");
                    return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                    n
                }
            }, {
                key: "_apiCheck",
                value: function() {
                    return window.$_Tawk.ready
                }
            }, {
                key: "init",
                value: function() {
                    this.local_API = {
                        disableSound: !!window.Tawk_API.disableSound,
                        embedded: window.Tawk_API.embedded || null,
                        visitor: window.Tawk_API.visitor || null,
                        autoStart: window.Tawk_API.autoStart || !0,
                        disableMobileBackHistory: !!window.Tawk_API.disableMobileBackHistory,
                        disableWidgetFont: window.Tawk_API.disableWidgetFont || !1,
                        isWindowed: !!window.Tawk_API.isPopup,
                        customStyle: window.Tawk_API.customStyle || null,
                        onBeforeLoad: {
                            eventName: "tawkBeforeLoad",
                            func: window.Tawk_API.onBeforeLoad
                        },
                        onLoad: {
                            eventName: "tawkLoad",
                            func: window.Tawk_API.onLoad
                        },
                        onStatusChange: {
                            eventName: "tawkStatusChange",
                            func: window.Tawk_API.onStatusChange
                        },
                        onChatMaximized: {
                            eventName: "tawkChatMaximized",
                            func: window.Tawk_API.onChatMaximized
                        },
                        onChatMinimized: {
                            eventName: "tawkChatMinimized",
                            func: window.Tawk_API.onChatMinimized
                        },
                        onChatHidden: {
                            eventName: "tawkChatHidden",
                            func: window.Tawk_API.onChatHidden
                        },
                        onChatStarted: {
                            eventName: "tawkChatStarted",
                            func: window.Tawk_API.onChatStarted
                        },
                        onChatEnded: {
                            eventName: "tawkChatEnded",
                            func: window.Tawk_API.onChatEnded
                        },
                        onPrechatSubmit: {
                            eventName: "tawkPrechatSubmit",
                            func: window.Tawk_API.onPrechatSubmit
                        },
                        onOfflineSubmit: {
                            eventName: "tawkOfflineSubmit",
                            func: window.Tawk_API.onOfflineSubmit
                        },
                        onChatMessageVisitor: {
                            eventName: "tawkChatMessageVisitor",
                            func: window.Tawk_API.onChatMessageVisitor
                        },
                        onChatMessageAgent: {
                            eventName: "tawkChatMessageAgent",
                            func: window.Tawk_API.onChatMessageAgent
                        },
                        onChatMessageSystem: {
                            eventName: "tawkChatMessageSystem",
                            func: window.Tawk_API.onChatMessageSystem
                        },
                        onAgentJoinChat: {
                            eventName: "tawkAgentJoinChat",
                            func: window.Tawk_API.onAgentJoinChat
                        },
                        onAgentLeaveChat: {
                            eventName: "tawkAgentLeaveChat",
                            func: window.Tawk_API.onAgentLeaveChat
                        },
                        onChatSatisfaction: {
                            eventName: "tawkChatSatisfaction",
                            func: window.Tawk_API.onChatSatisfaction
                        },
                        onVisitorNameChanged: {
                            eventName: "tawkVisitorNameChanged",
                            func: window.Tawk_API.onVisitorNameChanged
                        },
                        onFileUpload: {
                            eventName: "tawkFileUpload",
                            func: window.Tawk_API.onFileUpload
                        },
                        onTagsUpdated: {
                            eventName: "tawkTagsUpdated",
                            func: window.Tawk_API.onTagsUpdated
                        },
                        onUnreadCountChanged: {
                            eventName: "tawkUnreadCountChanged",
                            func: window.Tawk_API.onUnreadCountChanged
                        }
                    },
                    window.$_Tawk.maximize = window.Tawk_API.maximize = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("session/updateChatWindowState", "max")
                    }
                    ,
                    window.$_Tawk.minimize = window.Tawk_API.minimize = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("session/updateChatWindowState", "min")
                    }
                    ,
                    window.$_Tawk.toggle = window.Tawk_API.toggle = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("session/toggleWidget")
                    }
                    ,
                    window.$_Tawk.popup = window.Tawk_API.popup = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.popoutWidget()
                    }
                    ,
                    window.$_Tawk.getWindowType = window.Tawk_API.getWindowType = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return t.Tawk_Window.jsApi.store.getters["widget/isEmbedded"] ? "embed" : t.Tawk_Window.jsApi.store.getters["widget/isWindowed"] ? "popup" : "inline"
                    }
                    ,
                    window.$_Tawk.showWidget = window.Tawk_API.showWidget = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.commit("widget/setVisibility", !0)
                    }
                    ,
                    window.$_Tawk.hideWidget = window.Tawk_API.hideWidget = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.commit("widget/setVisibility", !1)
                    }
                    ,
                    window.$_Tawk.toggleVisibility = window.Tawk_API.toggleVisibility = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("widget/toggleVisibility")
                    }
                    ,
                    window.$_Tawk.getStatus = window.Tawk_API.getStatus = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return t.Tawk_Window.jsApi.store.getters["session/pageStatus"]
                    }
                    ,
                    window.$_Tawk.isChatMaximized = window.Tawk_API.isChatMaximized = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return "max" === t.Tawk_Window.jsApi.store.getters["session/chatWindowState"]
                    }
                    ,
                    window.$_Tawk.isChatMinimized = window.Tawk_API.isChatMinimized = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return "min" === t.Tawk_Window.jsApi.store.getters["session/chatWindowState"]
                    }
                    ,
                    window.$_Tawk.isChatHidden = window.Tawk_API.isChatHidden = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return !t.Tawk_Window.jsApi.store.getters["widget/isVisible"]
                    }
                    ,
                    window.$_Tawk.isChatOngoing = window.Tawk_API.isChatOngoing = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return t.Tawk_Window.jsApi.store.getters["chat/isChatOngoing"]
                    }
                    ,
                    window.$_Tawk.isVisitorEngaged = window.Tawk_API.isVisitorEngaged = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return t.Tawk_Window.jsApi.store.getters["chat/isVisitorEngaged"]
                    }
                    ,
                    window.$_Tawk.endChat = window.Tawk_API.endChat = function() {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("chat/endChat")
                    }
                    ,
                    window.$_Tawk.addEvent = window.Tawk_API.addEvent = function(e, n, i) {
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.chatManager.sendApiEvent(e, n, i)
                    }
                    ,
                    window.$_Tawk.setAttributes = window.Tawk_API.setAttributes = function(e, n) {
                        t.Tawk_Window.jsApi.local_API.visitor = t.Tawk_Window.jsApi.local_API.visitor || {},
                        e.name && (t.Tawk_Window.jsApi.local_API.visitor.name = e.name),
                        e.email && (t.Tawk_Window.jsApi.local_API.visitor.email = e.email),
                        e.hash && (t.Tawk_Window.jsApi.local_API.visitor.hash = e.hash),
                        t.Tawk_Window.chatManager.sendApiAttributes(e, n)
                    }
                    ,
                    window.$_Tawk.addTags = window.Tawk_API.addTags = function(e, n) {
                        t.Tawk_Window.chatManager.addTags(e, n)
                    }
                    ,
                    window.$_Tawk.removeTags = window.Tawk_API.removeTags = function(e, n) {
                        t.Tawk_Window.chatManager.removeTags(e, n)
                    }
                    ,
                    window.$_Tawk.widgetPosition = window.Tawk_API.widgetPosition = function() {
                        if (!t.Tawk_Window.jsApi._apiCheck())
                            return t.Tawk_Window.jsApi.store.getters["widget/desktopVisibility"] ? t.Tawk_Window.jsApi.store.getters["widget/desktopVisibility"].position : null
                    }
                    ,
                    window.$_Tawk.login = window.Tawk_API.login = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = arguments.length > 1 ? arguments[1] : void 0;
                        if (!t.Tawk_Window.jsApi._apiCheck()) {
                            n = n || function() {}
                            ;
                            var o = i.a.formatVisitorLoginData(e);
                            t.Tawk_Window.sessionManager.login(o, n)
                        }
                    }
                    ,
                    window.$_Tawk.logout = window.Tawk_API.logout = function(e) {
                        t.Tawk_Window.jsApi._apiCheck() || (e = e || function() {}
                        ,
                        t.Tawk_Window.sessionManager.logout(e))
                    }
                    ,
                    window.$_Tawk.switchWidget = window.Tawk_API.switchWidget = function(e) {
                        var n = e.propertyId
                          , i = void 0 === n ? null : n
                          , o = e.widgetId
                          , r = void 0 === o ? null : o
                          , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                        ;
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("widget/switchWidget", {
                            propertyId: i,
                            widgetId: r,
                            callback: a
                        })
                    }
                    ,
                    window.$_Tawk.shutdown = window.Tawk_API.shutdown = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {}
                        ;
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("widget/shutdown", e)
                    }
                    ,
                    window.$_Tawk.start = window.Tawk_API.start = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                        ;
                        t.Tawk_Window.jsApi._apiCheck() || t.Tawk_Window.jsApi.store.dispatch("widget/start", {
                            params: e,
                            callback: n
                        })
                    }
                }
            }, {
                key: "triggerApiHandlers",
                value: function(e, n) {
                    var i = this.local_API[e];
                    if (void 0 !== i) {
                        if ("onBeforeLoad" === e) {
                            if (window.Tawk_API.onBeforeLoaded)
                                return;
                            window.Tawk_API.onBeforeLoaded = !0
                        } else if ("onLoad" === e) {
                            if (window.Tawk_API.onLoaded)
                                return;
                            window.Tawk_API.onLoaded = !0
                        }
                        if (this.dispatch(i.eventName, n),
                        "function" == typeof i.func)
                            try {
                                i.func(n)
                            } catch (t) {}
                        t.Tawk_Window.eventBus.$on("resetState", (function() {
                            window.Tawk_API.onBeforeLoaded = !1,
                            window.Tawk_API.onLoaded = !1
                        }
                        ))
                    }
                }
            }, {
                key: "dispatch",
                value: function(t, e) {
                    var n;
                    t && (n = "function" == typeof window.CustomEvent ? new CustomEvent(t,{
                        detail: e
                    }) : new this.CustomEventIE(t,{
                        detail: e
                    }),
                    window.dispatchEvent(n))
                }
            }, {
                key: "secureWrapper",
                value: function(t) {
                    return void 0 === t && (t = {}),
                    this.local_API && this.local_API.visitor && (this.local_API.visitor.email && (t.email = this.local_API.visitor.email),
                    this.local_API.visitor.hash && (t.hash = this.local_API.visitor.hash)),
                    t
                }
            }, {
                key: "unsetVisitorAttributes",
                value: function() {
                    this.local_API && this.local_API.visitor && (this.local_API.visitor = void 0)
                }
            }])
        }
        ).call(this, n("c8ba"))
    },
    bdd0: function(t, e, n) {
        "use strict";
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function r(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? o(Object(n), !0).forEach((function(e) {
                    a(t, e, n[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }
                ))
            }
            return t
        }
        function a(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != i(t) || !t)
                        return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(t, e || "default");
                        if ("object" != i(o))
                            return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == i(e) ? e : e + ""
            }(e))in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        n.d(e, "a", (function() {
            return s
        }
        ));
        var s = {
            post: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , i = arguments.length > 3 ? arguments[3] : void 0
                  , o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
                  , a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                  , s = []
                  , c = c
                  , u = r({}, n);
                if (e instanceof FormData)
                    s = e,
                    c = !1;
                else {
                    if (a)
                        s = JSON.stringify(e),
                        u["Content-Type"] = "application/json; charset=utf-8";
                    else {
                        for (var l in e)
                            Object.prototype.hasOwnProperty.call(e, l) && s.push("".concat(encodeURIComponent(l), "=").concat(encodeURIComponent(e[l])));
                        s.length && (s = s.join("&")),
                        u["Content-Type"] = "application/www-x-form-urlencoded"
                    }
                    c = !0
                }
                if (void 0 !== window.fetch && void 0 !== window.AbortController) {
                    var d;
                    d = o ? {
                        method: "POST",
                        headers: u,
                        signal: h,
                        credentials: c ? "include" : "same-origin",
                        body: s
                    } : {
                        method: "POST",
                        headers: u,
                        signal: h,
                        body: s
                    };
                    var f = new window.AbortController
                      , h = f.signal;
                    return fetch(t, d).then((function(t) {
                        return 500 === t.status ? i(!0) : t.json()
                    }
                    )).then((function(t) {
                        i(null, t)
                    }
                    )).catch((function() {
                        i(!0)
                    }
                    )),
                    h
                }
                var p = new XMLHttpRequest;
                if (p.onerror = i,
                p.open("POST", t, !0),
                !(e instanceof FormData)) {
                    for (var m in u)
                        p.setRequestHeader(m, u[m]);
                    p.withCredentials = !0
                }
                return p.onload = function() {
                    p.status >= 200 & p.status < 300 ? i(null, JSON.parse(p.responseText)) : i(!0)
                }
                ,
                p.send(s),
                p
            },
            get: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , i = arguments.length > 3 ? arguments[3] : void 0
                  , o = []
                  , a = r({}, n);
                for (var s in e)
                    Object.prototype.hasOwnProperty.call(e, s) && o.push("".concat(encodeURIComponent(s), "=").concat(encodeURIComponent(e[s])));
                if (o.length && (t += "?".concat(o.join("&"))),
                void 0 !== window.fetch && void 0 !== window.AbortController) {
                    var c = new window.AbortController
                      , u = c.signal;
                    return fetch(t, {
                        headers: a,
                        signal: u
                    }).then((function(t) {
                        return t.json()
                    }
                    )).then((function(t) {
                        i(null, t)
                    }
                    )).catch((function() {
                        i(!0)
                    }
                    )),
                    u
                }
                var l = new XMLHttpRequest;
                for (var d in l.onerror = i,
                l.open("GET", t, !0),
                a)
                    l.setRequestHeader(d, a[d]);
                return l.onload = function() {
                    l.status >= 200 & l.status < 300 ? i(null, JSON.parse(l.responseText)) : i(!0)
                }
                ,
                l.send(),
                l
            }
        }
    },
    c3e1: function(t, e, n) {
        var i = {
            "./browser-data.js": "0dc3",
            "./chat.js": "9b4f",
            "./history.js": "c99a",
            "./knowledge-base.js": "a3cc",
            "./overlay.js": "284b",
            "./property.js": "9a05",
            "./router.js": "d3e9",
            "./schedule.js": "e4b3",
            "./session.js": "3b35",
            "./socket.js": "f406",
            "./visitor.js": "b250",
            "./widget.js": "32d9"
        };
        function o(t) {
            var e = r(t);
            return n(e)
        }
        function r(t) {
            if (!n.o(i, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return i[t]
        }
        o.keys = function() {
            return Object.keys(i)
        }
        ,
        o.resolve = r,
        t.exports = o,
        o.id = "c3e1"
    },
    c7b8: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return s
        }
        ));
        var i = n("bdd0");
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, a(i.key), i)
            }
        }
        function a(t) {
            var e = function(t, e) {
                if ("object" != o(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" != o(i))
                        return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == o(e) ? e : e + ""
        }
        var s = function(t, e, n) {
            return e && r(t.prototype, e),
            n && r(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }((function t() {
            !function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }(this, t)
        }
        ), [{
            key: "reportPerformance",
            value: function(t) {
                i.a.post("".concat("https://va.tawk.to", "/log-performance/v3"), {
                    logData: JSON.stringify(t)
                }, {}, (function(t) {
                    t && console.error(t)
                }
                ), !1, !0)
            }
        }, {
            key: "reportIncident",
            value: function() {}
        }, {
            key: "reportError",
            value: function(t) {
                var e = JSON.stringify(t);
                i.a.post("".concat("https://va.tawk.to", "/log"), e, {}, (function(t) {
                    t && console.error("[Tawk/Logger]: Error report sent", t)
                }
                ), !1, !0)
            }
        }])
    },
    c99a: function(t, e, n) {
        "use strict";
        n.r(e),
        function(t) {
            var i = n("bdd0");
            function o(t) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function r() {
                r = function() {
                    return e
                }
                ;
                var t, e = {}, n = Object.prototype, i = n.hasOwnProperty, a = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                }
                , s = "function" == typeof Symbol ? Symbol : {}, c = s.iterator || "@@iterator", u = s.asyncIterator || "@@asyncIterator", l = s.toStringTag || "@@toStringTag";
                function d(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    t[e]
                }
                try {
                    d({}, "")
                } catch (t) {
                    d = function(t, e, n) {
                        return t[e] = n
                    }
                }
                function f(t, e, n, i) {
                    var o = e && e.prototype instanceof v ? e : v
                      , r = Object.create(o.prototype)
                      , s = new x(i || []);
                    return a(r, "_invoke", {
                        value: C(t, n, s)
                    }),
                    r
                }
                function h(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = f;
                var p = "suspendedStart"
                  , m = "executing"
                  , w = "completed"
                  , g = {};
                function v() {}
                function y() {}
                function b() {}
                var k = {};
                d(k, c, (function() {
                    return this
                }
                ));
                var T = Object.getPrototypeOf
                  , S = T && T(T(A([])));
                S && S !== n && i.call(S, c) && (k = S);
                var _ = b.prototype = v.prototype = Object.create(k);
                function I(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        d(t, e, (function(t) {
                            return this._invoke(e, t)
                        }
                        ))
                    }
                    ))
                }
                function W(t, e) {
                    function n(r, a, s, c) {
                        var u = h(t[r], t, a);
                        if ("throw" !== u.type) {
                            var l = u.arg
                              , d = l.value;
                            return d && "object" == o(d) && i.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                n("next", t, s, c)
                            }
                            ), (function(t) {
                                n("throw", t, s, c)
                            }
                            )) : e.resolve(d).then((function(t) {
                                l.value = t,
                                s(l)
                            }
                            ), (function(t) {
                                return n("throw", t, s, c)
                            }
                            ))
                        }
                        c(u.arg)
                    }
                    var r;
                    a(this, "_invoke", {
                        value: function(t, i) {
                            function o() {
                                return new e((function(e, o) {
                                    n(t, i, e, o)
                                }
                                ))
                            }
                            return r = r ? r.then(o, o) : o()
                        }
                    })
                }
                function C(e, n, i) {
                    var o = p;
                    return function(r, a) {
                        if (o === m)
                            throw Error("Generator is already running");
                        if (o === w) {
                            if ("throw" === r)
                                throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (i.method = r,
                        i.arg = a; ; ) {
                            var s = i.delegate;
                            if (s) {
                                var c = P(s, i);
                                if (c) {
                                    if (c === g)
                                        continue;
                                    return c
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (o === p)
                                    throw o = w,
                                    i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            o = m;
                            var u = h(e, n, i);
                            if ("normal" === u.type) {
                                if (o = i.done ? w : "suspendedYield",
                                u.arg === g)
                                    continue;
                                return {
                                    value: u.arg,
                                    done: i.done
                                }
                            }
                            "throw" === u.type && (o = w,
                            i.method = "throw",
                            i.arg = u.arg)
                        }
                    }
                }
                function P(e, n) {
                    var i = n.method
                      , o = e.iterator[i];
                    if (o === t)
                        return n.delegate = null,
                        "throw" === i && e.iterator.return && (n.method = "return",
                        n.arg = t,
                        P(e, n),
                        "throw" === n.method) || "return" !== i && (n.method = "throw",
                        n.arg = new TypeError("The iterator does not provide a '" + i + "' method")),
                        g;
                    var r = h(o, e.iterator, n.arg);
                    if ("throw" === r.type)
                        return n.method = "throw",
                        n.arg = r.arg,
                        n.delegate = null,
                        g;
                    var a = r.arg;
                    return a ? a.done ? (n[e.resultName] = a.value,
                    n.next = e.nextLoc,
                    "return" !== n.method && (n.method = "next",
                    n.arg = t),
                    n.delegate = null,
                    g) : a : (n.method = "throw",
                    n.arg = new TypeError("iterator result is not an object"),
                    n.delegate = null,
                    g)
                }
                function E(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]),
                    2 in t && (e.finallyLoc = t[2],
                    e.afterLoc = t[3]),
                    this.tryEntries.push(e)
                }
                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal",
                    delete e.arg,
                    t.completion = e
                }
                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    t.forEach(E, this),
                    this.reset(!0)
                }
                function A(e) {
                    if (e || "" === e) {
                        var n = e[c];
                        if (n)
                            return n.call(e);
                        if ("function" == typeof e.next)
                            return e;
                        if (!isNaN(e.length)) {
                            var r = -1
                              , a = function n() {
                                for (; ++r < e.length; )
                                    if (i.call(e, r))
                                        return n.value = e[r],
                                        n.done = !1,
                                        n;
                                return n.value = t,
                                n.done = !0,
                                n
                            };
                            return a.next = a
                        }
                    }
                    throw new TypeError(o(e) + " is not iterable")
                }
                return y.prototype = b,
                a(_, "constructor", {
                    value: b,
                    configurable: !0
                }),
                a(b, "constructor", {
                    value: y,
                    configurable: !0
                }),
                y.displayName = d(b, l, "GeneratorFunction"),
                e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b,
                    d(t, l, "GeneratorFunction")),
                    t.prototype = Object.create(_),
                    t
                }
                ,
                e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }
                ,
                I(W.prototype),
                d(W.prototype, u, (function() {
                    return this
                }
                )),
                e.AsyncIterator = W,
                e.async = function(t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new W(f(t, n, i, o),r);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }
                    ))
                }
                ,
                I(_),
                d(_, l, "Generator"),
                d(_, c, (function() {
                    return this
                }
                )),
                d(_, "toString", (function() {
                    return "[object Generator]"
                }
                )),
                e.keys = function(t) {
                    var e = Object(t)
                      , n = [];
                    for (var i in e)
                        n.push(i);
                    return n.reverse(),
                    function t() {
                        for (; n.length; ) {
                            var i = n.pop();
                            if (i in e)
                                return t.value = i,
                                t.done = !1,
                                t
                        }
                        return t.done = !0,
                        t
                    }
                }
                ,
                e.values = A,
                x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0,
                        this.next = 0,
                        this.sent = this._sent = t,
                        this.done = !1,
                        this.delegate = null,
                        this.method = "next",
                        this.arg = t,
                        this.tryEntries.forEach(O),
                        !e)
                            for (var n in this)
                                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type)
                            throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done)
                            throw e;
                        var n = this;
                        function o(i, o) {
                            return s.type = "throw",
                            s.arg = e,
                            n.next = i,
                            o && (n.method = "next",
                            n.arg = t),
                            !!o
                        }
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var a = this.tryEntries[r]
                              , s = a.completion;
                            if ("root" === a.tryLoc)
                                return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = i.call(a, "catchLoc")
                                  , u = i.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc)
                                        return o(a.catchLoc, !0)
                                } else {
                                    if (!u)
                                        throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc)
                                        return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && i.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        r && ("break" === t || "continue" === t) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var a = r ? r.completion : {};
                        return a.type = t,
                        a.arg = e,
                        r ? (this.method = "next",
                        this.next = r.finallyLoc,
                        g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type)
                            throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                        this.method = "return",
                        this.next = "end") : "normal" === t.type && e && (this.next = e),
                        g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return this.complete(n.completion, n.afterLoc),
                                O(n),
                                g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var i = n.completion;
                                if ("throw" === i.type) {
                                    var o = i.arg;
                                    O(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, i) {
                        return this.delegate = {
                            iterator: A(e),
                            resultName: n,
                            nextLoc: i
                        },
                        "next" === this.method && (this.arg = t),
                        g
                    }
                },
                e
            }
            function a(t, e, n, i, o, r, a) {
                try {
                    var s = t[r](a)
                      , c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(i, o)
            }
            function s(t) {
                return function() {
                    var e = this
                      , n = arguments;
                    return new Promise((function(i, o) {
                        var r = t.apply(e, n);
                        function s(t) {
                            a(r, i, o, s, c, "next", t)
                        }
                        function c(t) {
                            a(r, i, o, s, c, "throw", t)
                        }
                        s(void 0)
                    }
                    ))
                }
            }
            e.default = {
                namespaced: !0,
                state: {
                    baseUrl: "/v1/chat/",
                    items: [],
                    loading: {
                        index: !1,
                        chat: !1
                    },
                    nextListHash: null,
                    lastMessageTimestamp: null,
                    loadError: !1,
                    messageBlocks: [],
                    selectedChat: null,
                    chatError: !1,
                    selectedChatMessages: null,
                    scrollPosition: 0,
                    calls: {}
                },
                getters: {
                    items: function(t) {
                        return t.items
                    },
                    isLoading: function(t) {
                        return function(e) {
                            return t.loading[e]
                        }
                    },
                    lastMessageTimestamp: function(t) {
                        return t.lastMessageTimestamp
                    },
                    nextListHash: function(t) {
                        return t.nextListHash
                    },
                    loadError: function(t) {
                        return t.loadError
                    },
                    chatError: function(t) {
                        return t.chatError
                    },
                    messageBlocks: function(t) {
                        return t.messageBlocks
                    },
                    selectedChat: function(t) {
                        return t.selectedChat
                    },
                    selectedChatMessages: function(t) {
                        return t.selectedChatMessages
                    },
                    scrollPosition: function(t) {
                        return t.scrollPosition
                    },
                    callData: function(t) {
                        return function(e) {
                            return t.calls[e]
                        }
                    }
                },
                actions: {
                    load: function() {
                        var t = s(r().mark((function t(e) {
                            var n, o, a, s, c, u, l, d = arguments;
                            return r().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.state,
                                        o = e.commit,
                                        a = e.rootGetters,
                                        s = e.dispatch,
                                        c = d.length > 1 && void 0 !== d[1] ? d[1] : {},
                                        o("setLoading", {
                                            action: "index",
                                            value: !0
                                        }),
                                        o("setLoadError", !1),
                                        t.prev = 4,
                                        t.next = 7,
                                        s("session/checkTokenValidity", {}, {
                                            root: !0
                                        });
                                    case 7:
                                        t.next = 13;
                                        break;
                                    case 9:
                                        return t.prev = 9,
                                        t.t0 = t.catch(4),
                                        o("setLoadError", !0),
                                        t.abrupt("return");
                                    case 13:
                                        u = a["session/token"],
                                        l = {
                                            limit: c.limit || 10
                                        },
                                        c.loadNext && (l.next = n.nextListHash),
                                        i.a.get("".concat("https://va.tawk.to").concat(n.baseUrl, "list"), l, {
                                            "X-Tawk-Token": u
                                        }, (function(t, e) {
                                            o("setLoading", {
                                                action: "index",
                                                value: !1
                                            }),
                                            t ? o("setLoadError", !0) : (e.data && e.data.chats.length && (c.loadNext ? o("appendItems", e.data.chats) : o("setItems", e.data.chats)),
                                            e.data.hasNext ? o("setNextListHash", e.data.next) : o("setNextListHash", null))
                                        }
                                        ));
                                    case 17:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[4, 9]])
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    getLastMessageTimestamp: function() {
                        var t = s(r().mark((function t(e) {
                            var n, o, a, s, c;
                            return r().wrap((function(t) {
                                for (; ; )
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.state,
                                        o = e.commit,
                                        a = e.rootGetters,
                                        s = e.dispatch,
                                        t.prev = 1,
                                        t.next = 4,
                                        s("session/checkTokenValidity", {}, {
                                            root: !0
                                        });
                                    case 4:
                                        t.next = 9;
                                        break;
                                    case 6:
                                        return t.prev = 6,
                                        t.t0 = t.catch(1),
                                        t.abrupt("return");
                                    case 9:
                                        c = a["session/token"],
                                        i.a.get("".concat("https://va.tawk.to").concat(n.baseUrl, "list"), {
                                            limit: 1
                                        }, {
                                            "X-Tawk-Token": c
                                        }, (function(t, e) {
                                            t || e.data && e.data.chats.length && o("setLastMessageTimestamp", e.data.chats[0].endedOn)
                                        }
                                        ));
                                    case 11:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, null, [[1, 6]])
                        }
                        )));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    getHistory: function() {
                        var e = s(r().mark((function e(n) {
                            var o, a, s, c, u, l;
                            return r().wrap((function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (o = n.state,
                                        a = n.commit,
                                        s = n.rootGetters,
                                        c = n.dispatch,
                                        a("setChatError", !1),
                                        a("setLoading", {
                                            action: "chat",
                                            value: !0
                                        }),
                                        o.selectedChat) {
                                            e.next = 6;
                                            break
                                        }
                                        throw a("setChatError", !0),
                                        new Error("Invalid Id");
                                    case 6:
                                        return e.prev = 6,
                                        e.next = 9,
                                        c("session/checkTokenValidity", {}, {
                                            root: !0
                                        });
                                    case 9:
                                        e.next = 15;
                                        break;
                                    case 11:
                                        return e.prev = 11,
                                        e.t0 = e.catch(6),
                                        a("setChatError", !0),
                                        e.abrupt("return");
                                    case 15:
                                        u = s["session/token"],
                                        l = {
                                            chatId: o.selectedChat.id
                                        },
                                        i.a.get("".concat("https://va.tawk.to").concat(o.baseUrl, "get"), l, {
                                            "X-Tawk-Token": u
                                        }, (function(e, n) {
                                            if (e)
                                                a("setChatError", !0);
                                            else if (n.data && n.data.error)
                                                a("setChatError", !0);
                                            else {
                                                var i = t.Tawk_Window.chatManager.processHistoryMessages(n.data.chat.messages);
                                                c("setSelectedChatMessages", i),
                                                c("setCalls", n.data.chat.calls)
                                            }
                                        }
                                        ));
                                    case 18:
                                    case "end":
                                        return e.stop()
                                    }
                            }
                            ), e, null, [[6, 11]])
                        }
                        )));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    resetState: function(t) {
                        (0,
                        t.commit)("unsetData")
                    },
                    unsetItems: function(t) {
                        (0,
                        t.commit)("setItems", [])
                    },
                    addMessageBlock: function(t, e) {
                        (0,
                        t.commit)("pushMessageBlock", e)
                    },
                    clearMessageBlock: function(t) {
                        (0,
                        t.commit)("unsetMessageBlock")
                    },
                    setSelectedChatMessages: function(t, e) {
                        var n = t.commit;
                        n("setSelectedChatMessages", e),
                        n("setLoading", {
                            action: "chat",
                            value: !1
                        })
                    },
                    setCalls: function(t, e) {
                        (0,
                        t.commit)("updateCalls", e)
                    },
                    unsetSelectedChat: function(t) {
                        (0,
                        t.commit)("setSelectedChat", null)
                    },
                    setScrollPosition: function(t, e) {
                        (0,
                        t.commit)("modifyScrollPosition", e)
                    },
                    unsetScrollPosition: function(t) {
                        (0,
                        t.commit)("modifyScrollPosition", 0)
                    }
                },
                mutations: {
                    setItems: function(t, e) {
                        t.items = e
                    },
                    setLoading: function(t, e) {
                        var n = e.action
                          , i = e.value;
                        t.loading[n] = i
                    },
                    setLastMessageTimestamp: function(t, e) {
                        t.lastMessageTimestamp = e
                    },
                    setNextListHash: function(t, e) {
                        t.nextListHash = e
                    },
                    appendItems: function(t, e) {
                        t.items = t.items.concat(e)
                    },
                    setLoadError: function(t, e) {
                        t.loadError = e
                    },
                    setSelectedChat: function(t, e) {
                        t.selectedChat = e
                    },
                    setChatError: function(t, e) {
                        t.chatError = e
                    },
                    setSelectedChatMessages: function(t, e) {
                        t.selectedChatMessages = e
                    },
                    updateCalls: function(t, e) {
                        t.calls = e
                    },
                    pushMessageBlock: function(t, e) {
                        if ("call" === e.messageType) {
                            var n;
                            if (t.calls.length)
                                for (var i = 0; i < t.calls.length; i++)
                                    if (t.calls[i].id === e.callId) {
                                        var o = t.calls[i];
                                        n = {
                                            callId: o.id,
                                            status: o.status,
                                            version: null,
                                            isMissed: o.missed,
                                            isRejected: o.rejected,
                                            isRinging: !1,
                                            isDone: "completed",
                                            isVideo: o.features && o.features.video,
                                            isScreenshare: o.features && o.features.screenShare,
                                            hasError: !1,
                                            caller: o.caller,
                                            startedAt: o.startedOn,
                                            endedAt: o.expiredOn
                                        };
                                        break
                                    }
                            n || (n = {
                                hasError: !0
                            }),
                            e.callData = n
                        }
                        t.messageBlocks.push(e)
                    },
                    unsetMessageBlock: function(t) {
                        t.messageBlocks = []
                    },
                    modifyScrollPosition: function(t, e) {
                        t.scrollPosition = e
                    },
                    unsetData: function(t) {
                        for (var e = {
                            baseUrl: "/v1/chat/",
                            items: [],
                            loading: {
                                index: !1,
                                chat: !1
                            },
                            nextListHash: null,
                            lastMessageTimestamp: null,
                            loadError: !1,
                            messageBlocks: [],
                            selectedChat: null,
                            chatError: !1,
                            selectedChatMessages: null,
                            scrollPosition: 0,
                            calls: {}
                        }, n = Object.keys(e), i = 0; i < n.length; i++) {
                            var o = n[i];
                            t[o] = e[o]
                        }
                    }
                }
            }
        }
        .call(this, n("c8ba"))
    },
    d046: function(t, e, n) {
        "use strict";
        (function(t) {
            var i = [{
                path: "/",
                component: function() {
                    return function() {}
                }
            }, {
                path: "chat",
                component: function() {
                    return function() {}
                }
            }, {
                path: "kb-article",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-3184cf5a")]).then(n.bind(null, "4b23"))
                },
                hasBack: !0
            }, {
                path: "kb-search",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-2d221830"), n.e("chunk-2d228873")]).then(n.bind(null, "da22"))
                },
                hasBack: !0,
                title: function() {
                    return t.Tawk_Window && t.Tawk_Window.app && t.Tawk_Window.app.$i18n ? t.Tawk_Window.app.$i18n("kb", "search_results") : "Search Results"
                }
            }, {
                path: "history-list",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-2d0bd292")]).then(n.bind(null, "2b8d"))
                },
                hasBack: !0,
                title: function() {
                    return t.Tawk_Window && t.Tawk_Window.app && t.Tawk_Window.app.$i18n ? t.Tawk_Window.app.$i18n("routes", "conversations") : "Conversations"
                }
            }, {
                path: "history-chat",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-2d0b9454"), n.e("chunk-7c2f6ba4"), n.e("chunk-55d6f85c")]).then(n.bind(null, "002e"))
                },
                hasBack: !0
            }, {
                path: "agents",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-2d0e5ed2")]).then(n.bind(null, "9720"))
                },
                hasBack: !0,
                title: function() {
                    return t.Tawk_Window && t.Tawk_Window.app && t.Tawk_Window.app.$i18n ? t.Tawk_Window.app.$i18n("routes", "all_agents") : "All Agents"
                }
            }, {
                path: "offline-success",
                component: function() {
                    return n.e("chunk-2d2089ad").then(n.bind(null, "a602"))
                }
            }, {
                path: "prechat",
                component: function() {
                    return function() {}
                }
            }, {
                path: "name-form",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-2d0b9454"), n.e("chunk-47bfc142")]).then(n.bind(null, "2d70"))
                }
            }, {
                path: "email-transcript-form",
                component: function() {
                    return Promise.all([n.e("chunk-4fe9d5dd"), n.e("chunk-2d0b9454"), n.e("chunk-78cf67b2")]).then(n.bind(null, "e6ae"))
                }
            }, {
                path: "restart-chat",
                component: function() {
                    return n.e("chunk-3c7fc0e6").then(n.bind(null, "a3af"))
                }
            }];
            e.a = i
        }
        ).call(this, n("c8ba"))
    },
    d3a4: function(t, e, n) {
        "use strict";
        e.a = {
            install: function(t) {
                var e = function(t) {
                    return "string" == typeof t ? t.replace(/\$/g, "$$$") : t
                };
                t.prototype.$i18n = function(t, n, i) {
                    var o, r = [], a = window.$_Tawk && window.$_Tawk.language ? window.$_Tawk.language : {};
                    if (!a[t])
                        return n;
                    var s = a[t][n];
                    if (!s)
                        return console.error("Missing key : {" + t + "}, {" + n + "}"),
                        n;
                    var c = s.pluralVars ? s.pluralVars.length : 0
                      , u = s.vars ? s.vars.length : 0;
                    if (c > 0) {
                        for (var l = 0; l < c; l++)
                            r.push(a.pluralFormFunction(i[s.pluralVars[l]]));
                        o = s.message[r.join("_")];
                        for (var d = 0; d < c; d++)
                            o = o.replace(new RegExp("#" + s.pluralVars[d],"g"), e(i[s.pluralVars[d]]))
                    } else
                        o = s.message;
                    if (u > 0)
                        for (var f = 0; f < u; f++)
                            o = o.replace(new RegExp("#" + s.vars[f],"g"), e(i[s.vars[f]]));
                    return o
                }
            }
        }
    },
    d3e9: function(t, e, n) {
        "use strict";
        n.r(e);
        e.default = {
            namespaced: !0,
            state: {
                root: null,
                current: "/",
                history: [],
                routes: []
            },
            getters: {
                current: function(t) {
                    return t.current
                },
                getCurrentView: function(t) {
                    for (var e = 0; e < t.routes.length; e++)
                        if (t.routes[e].path === t.current)
                            return t.routes[e];
                    return null
                },
                getRoute: function(t) {
                    return function(e) {
                        for (var n = 0; n < t.routes.length; n++)
                            if (t.routes[n].path === e)
                                return t.routes[n]
                    }
                },
                getHistory: function(t) {
                    return t.history
                }
            },
            actions: {
                routerPush: function(t, e) {
                    var n = t.commit
                      , i = t.state;
                    if (!i.routes.some((function(t) {
                        return t.path === e
                    }
                    )))
                        throw "Unrecognised route";
                    i.current && i.current === e || (n("changeCurrentView", e),
                    n("addHistory", e))
                },
                routerBack: function(t) {
                    var e = t.commit
                      , n = t.dispatch;
                    e("previousRoute"),
                    n("hideOverlay")
                },
                addRoutes: function(t, e) {
                    var n = t.commit;
                    if (e.map((function(t) {
                        return t.path
                    }
                    )).size < e.length)
                        throw "Duplicate routes";
                    n("registerRoutes", e)
                },
                updateRoute: function(t, e) {
                    for (var n = t.state, i = 0; i < n.routes.length; i++)
                        if (n.routes[i].path === e.path) {
                            void 0 !== e.hasBack && (n.routes[i].hasBack = e.hasBack);
                            break
                        }
                },
                clearHistory: function(t) {
                    (0,
                    t.commit)("unsetHistory")
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                },
                hideOverlay: function(t) {
                    var e = t.state
                      , n = t.dispatch;
                    "/" !== e.current && "chat" !== e.current && "prechat" !== e.current && 0 !== e.history.length || n("overlay/showOverlay", !1, {
                        root: !0
                    })
                },
                removeRoute: function(t, e) {
                    (0,
                    t.commit)("ejectRoute", e)
                }
            },
            mutations: {
                changeCurrentView: function(t, e) {
                    t.current = e
                },
                addHistory: function(t, e) {
                    t.history.length > 14 && t.history.splice(0, 1),
                    t.history.push(e)
                },
                previousRoute: function(t) {
                    t.history.pop();
                    var e = t.history.length - 1
                      , n = t.history[e];
                    t.current = n || "/"
                },
                registerRoutes: function(t, e) {
                    t.routes = e
                },
                unsetHistory: function(t) {
                    t.history = []
                },
                ejectRoute: function(t, e) {
                    for (var n = 0; n < t.history.length; n++)
                        if (t.history[n] === e) {
                            t.history.splice(n, 1);
                            break
                        }
                },
                unsetData: function(t) {
                    for (var e = {
                        root: null,
                        current: "/",
                        history: [],
                        routes: []
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                }
            }
        }
    },
    e4b3: function(t, e, n) {
        "use strict";
        n.r(e);
        e.default = {
            namespaced: !0,
            state: {
                isEnabled: !1,
                slots: [],
                timezone: {}
            },
            getters: {
                isEnabled: function(t) {
                    return t.isEnabled
                },
                slots: function(t) {
                    return t.slots
                },
                timezone: function(t) {
                    return t.timezone
                }
            },
            actions: {
                addSlots: function(t, e) {
                    var n = t.commit
                      , i = t.state
                      , o = [];
                    if (e && void 0 !== e.enabled ? n("setStatus", e.enabled) : n("setStatus", !!e),
                    i.isEnabled) {
                        var r = e.config ? e.config.schedule : [];
                        Array.isArray(r) ? o = r : Object.keys(r).forEach((function(t) {
                            var e = r[t];
                            0 === e.start && 0 === e.end || o.push({
                                day: parseInt(t, 10),
                                start: Math.floor(e.start / 6e4),
                                end: Math.floor(e.end / 6e4)
                            })
                        }
                        )),
                        n("setSlots", o)
                    } else
                        n("resetSlots")
                },
                updateTimezone: function(t, e) {
                    (0,
                    t.commit)("setTimezone", e ? {
                        tzo: void 0 !== e.tzo ? e.tzo : e.offset,
                        utc: e.utc
                    } : null)
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                }
            },
            mutations: {
                resetSlots: function(t) {
                    t.slots = []
                },
                setTimezone: function(t, e) {
                    t.timezone = e
                },
                setSlots: function(t, e) {
                    t.slots = e
                },
                setStatus: function(t, e) {
                    t.isEnabled = !!e
                },
                unsetData: function(t) {
                    for (var e = {
                        isEnabled: !1,
                        slots: [],
                        timezone: {}
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                }
            }
        }
    },
    e8f9: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        }
        ));
        var i = n("bdd0")
          , o = {
            getUploadHandler: function(t, e) {
                i.a.get("".concat("https://upload.tawk.to", "/upload/handle?_t=").concat((new Date).getTime()), null, null, (function(n, i) {
                    if (n)
                        return e();
                    t(i.handle)
                }
                ))
            },
            uploadFile: function(t, e, n, o) {
                var r = new FormData;
                r.append("upload", n, n.name || n.filename),
                i.a.post("".concat("https://upload.tawk.to", "/upload/visitor-chat/visitor?handle=").concat(t, "&visitorSessionId=").concat(e), r, {}, (function(t, e) {
                    if (t)
                        return o(!0);
                    o(e)
                }
                ))
            }
        }
    },
    f406: function(t, e, n) {
        "use strict";
        n.r(e);
        e.default = {
            namespaced: !0,
            state: {
                agentIsTyping: !1,
                isReady: !1,
                isConnecting: !1,
                stack: []
            },
            getters: {
                agentIsTyping: function(t) {
                    return t.agentIsTyping
                },
                isReady: function(t) {
                    return t.isReady
                },
                isConnecting: function(t) {
                    return t.isConnecting
                }
            },
            actions: {
                updateEvent: function(t, e) {
                    (0,
                    t.commit)("setEvent", e)
                },
                updateIsReady: function(t, e) {
                    var n = t.commit;
                    (0,
                    t.dispatch)("session/sendNavigationEvent", {}, {
                        root: !0
                    }),
                    n("setIsReady", e),
                    n("setIsConnecting", !1)
                },
                updateIsConnecting: function(t, e) {
                    (0,
                    t.commit)("setIsConnecting", e)
                },
                resetState: function(t) {
                    (0,
                    t.commit)("unsetData")
                }
            },
            mutations: {
                setEvent: function(t, e) {
                    t[e.event] = e.value
                },
                setIsReady: function(t, e) {
                    t.isReady = e
                },
                setIsConnecting: function(t, e) {
                    t.isConnecting = e
                },
                unsetData: function(t) {
                    for (var e = {
                        agentIsTyping: !1,
                        isReady: !1,
                        isConnecting: !1,
                        stack: []
                    }, n = Object.keys(e), i = 0; i < n.length; i++) {
                        var o = n[i];
                        t[o] = e[o]
                    }
                }
            }
        }
    },
    fa2a: function(t, e, n) {
        "use strict";
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            )(t)
        }
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(t, r(i.key), i)
            }
        }
        function r(t) {
            var e = function(t, e) {
                if ("object" != i(t) || !t)
                    return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(t, e || "default");
                    if ("object" != i(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == i(e) ? e : e + ""
        }
        n.d(e, "a", (function() {
            return a
        }
        ));
        var a = function(t, e, n) {
            return e && o(t.prototype, e),
            n && o(t, n),
            Object.defineProperty(t, "prototype", {
                writable: !1
            }),
            t
        }((function t() {
            (function(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            )(this, t),
            function(t, e, n) {
                (e = r(e))in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            }(this, "isEnabled", !1),
            this.checkIsEnabled()
        }
        ), [{
            key: "checkIsEnabled",
            value: function() {}
        }, {
            key: "setItem",
            value: function() {}
        }, {
            key: "getItem",
            value: function() {}
        }])
    },
    fad2: function(t, e, n) {
        "use strict";
        (function(t) {
            n.d(e, "a", (function() {
                return i
            }
            ));
            var i = {
                isGeneratedName: function(t) {
                    return /^V[0-9]{16}$/.test(t)
                },
                parseVisitorName: function() {
                    return this.isGeneratedName(name) ? t.Tawk_Window.app.$i18n("chat", "defaultName") : name
                },
                formatVisitorLoginData: function(t) {
                    var e = {};
                    return Object.keys(t).forEach((function(n) {
                        "hash" !== n && "userId" !== n && "name" !== n && "email" !== n && "phone" !== n ? (void 0 === e.attributes && (e.attributes = {}),
                        e.attributes[n] = t[n]) : e[n] = t[n]
                    }
                    )),
                    e
                }
            }
        }
        ).call(this, n("c8ba"))
    }
}]);
//# sourceMappingURL=twk-chunk-common.js.map
