/*!
 * ScrollTrigger 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function J(e) {
        return e
    }
    function K(e) {
        return Fe(e)[0] || (Je(e) ? console.warn("Element not found:", e) : null)
    }
    function L(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }
    function M() {
        return "undefined" != typeof window
    }
    function N() {
        return Le || M() && (Le = window.gsap) && Le.registerPlugin && Le
    }
    function O(e) {
        return !!~i.indexOf(e)
    }
    function P(e, t) {
        return ~Ue.indexOf(e) && Ue[Ue.indexOf(e) + 1][t]
    }
    function Q(t, e) {
        var r = e.s
          , n = e.sc
          , i = v.indexOf(t)
          , o = n === pt.sc ? 1 : 2;
        return ~i || (i = v.push(t) - 1),
        v[i + o] || (v[i + o] = P(t, r) || (O(t) ? n : function(e) {
            return arguments.length ? t[r] = e : t[r]
        }
        ))
    }
    function R(e) {
        return P(e, "getBoundingClientRect") || (O(e) ? function() {
            return yt.width = Be.innerWidth,
            yt.height = Be.innerHeight,
            yt
        }
        : function() {
            return dt(e)
        }
        )
    }
    function U(e, t) {
        var r = t.s
          , n = t.d2
          , i = t.d
          , o = t.a;
        return (r = "scroll" + n) && (o = P(e, r)) ? o() - R(e)()[i] : O(e) ? (Ne[r] || ze[r]) - (Be["inner" + n] || ze["client" + n] || Ne["client" + n]) : e[r] - e["offset" + n]
    }
    function V(e, t) {
        for (var r = 0; r < d.length; r += 3)
            t && !~t.indexOf(d[r + 1]) || e(d[r], d[r + 1], d[r + 2])
    }
    function X(e) {
        return "function" == typeof e
    }
    function Y(e) {
        return "number" == typeof e
    }
    function Z(e) {
        return "object" == typeof e
    }
    function $(e) {
        return X(e) && e()
    }
    function _(r, n) {
        return function() {
            var e = $(r)
              , t = $(n);
            return function() {
                $(e),
                $(t)
            }
        }
    }
    function aa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }
    function ba(e, t) {
        var r = t(e);
        r && r.totalTime && (e.callbackAnimation = r)
    }
    function wa(e) {
        return Be.getComputedStyle(e)
    }
    function ya(e, t) {
        for (var r in t)
            r in e || (e[r] = t[r]);
        return e
    }
    function Aa(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }
    function Ba(e) {
        var t, r = [], n = e.labels, i = e.duration();
        for (t in n)
            r.push(n[t] / i);
        return r
    }
    function Da(n) {
        var i = Le.utils.snap(n)
          , o = Array.isArray(n) && n.slice(0).sort(function(e, t) {
            return e - t
        });
        return o ? function(e, t) {
            var r;
            if (!t)
                return i(e);
            if (0 < t) {
                for (e -= 1e-4,
                r = 0; r < o.length; r++)
                    if (o[r] >= e)
                        return o[r];
                return o[r - 1]
            }
            for (r = o.length,
            e += 1e-4; r--; )
                if (o[r] <= e)
                    return o[r];
            return o[0]
        }
        : function(e, t) {
            var r = i(e);
            return !t || Math.abs(r - e) < .001 || r - e < 0 == t < 0 ? r : i(t < 0 ? e - n : e + n)
        }
    }
    function Fa(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }
    function Ga(e, t, r) {
        return e.addEventListener(t, r, {
            passive: !0
        })
    }
    function Ha(e, t, r) {
        return e.removeEventListener(t, r)
    }
    function La(e, t) {
        if (Je(e)) {
            var r = e.indexOf("=")
              , n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100),
            e = e.substr(0, r - 1)),
            e = n + (e in S ? S[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }
    function Ma(e, t, r, n, i, o, a, s) {
        var l = i.startColor
          , c = i.endColor
          , u = i.fontSize
          , f = i.indent
          , p = i.fontWeight
          , d = Ie.createElement("div")
          , g = O(r) || "fixed" === P(r, "pinType")
          , h = -1 !== e.indexOf("scroller")
          , v = g ? Ne : r
          , m = -1 !== e.indexOf("start")
          , b = m ? l : c
          , x = "border-color:" + b + ";font-size:" + u + ";color:" + b + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return x += "position:" + ((h || s) && g ? "fixed;" : "absolute;"),
        !h && !s && g || (x += (n === pt ? y : w) + ":" + (o + parseFloat(f)) + "px;"),
        a && (x += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"),
        d._isStart = m,
        d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")),
        d.style.cssText = x,
        d.innerText = t || 0 === t ? e + "-" + t : e,
        v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d),
        d._offset = d["offset" + n.op.d2],
        k(d, 0, n, m),
        d
    }
    function Qa() {
        return 20 < je() - $e && G()
    }
    function Ra() {
        var e = je();
        $e !== e ? (G(),
        $e || A("scrollStart"),
        $e = e) : l = l || s(G)
    }
    function Sa() {
        return !Xe && !r && !Ie.fullscreenElement && a.restart(!0)
    }
    function Ya(e) {
        var t, r = Le.ticker.frame, n = [], i = 0;
        if (g !== r || Qe) {
            for (z(); i < E.length; i += 4)
                (t = Be.matchMedia(E[i]).matches) !== E[i + 3] && ((E[i + 3] = t) ? n.push(i) : z(1, E[i]) || X(E[i + 2]) && E[i + 2]());
            for (I(),
            i = 0; i < n.length; i++)
                t = n[i],
                Ze = E[t],
                E[t + 2] = E[t + 1](e);
            Ze = 0,
            o && F(0, 1),
            g = r,
            A("matchMedia")
        }
    }
    function Za() {
        return Ha(ee, "scrollEnd", Za) || F(!0)
    }
    function cb() {
        return v.forEach(function(e) {
            return "function" == typeof e && (e.rec = 0)
        })
    }
    function lb(e, t, r, n) {
        if (e.parentNode !== t) {
            for (var i, o = H.length, a = t.style, s = e.style; o--; )
                a[i = H[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative",
            "inline" === r.display && (a.display = "inline-block"),
            s[w] = s[y] = "auto",
            a.overflow = "visible",
            a.boxSizing = "border-box",
            a[tt] = Aa(e, ft) + ut,
            a[rt] = Aa(e, pt) + ut,
            a[st] = s[lt] = s.top = s[b] = "0",
            xt(n),
            s[tt] = s.maxWidth = r[tt],
            s[rt] = s.maxHeight = r[rt],
            s[st] = r[st],
            e.parentNode.insertBefore(t, e),
            t.appendChild(e)
        }
    }
    function ob(e) {
        for (var t = W.length, r = e.style, n = [], i = 0; i < t; i++)
            n.push(W[i], r[W[i]]);
        return n.t = e,
        n
    }
    function rb(e, t, r, n, i, o, a, s, l, c, u, f, p) {
        X(e) && (e = e(s)),
        Je(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? La("0" + e.substr(3), r) : 0));
        var d, g, h, v = p ? p.time() : 0;
        if (p && p.seek(0),
        Y(e))
            a && k(a, r, n, !0);
        else {
            X(t) && (t = t(s));
            var m, b, x, y, w = e.split(" ");
            h = K(t) || Ne,
            (m = dt(h) || {}) && (m.left || m.top) || "none" !== wa(h).display || (y = h.style.display,
            h.style.display = "block",
            m = dt(h),
            y ? h.style.display = y : h.style.removeProperty("display")),
            b = La(w[0], m[n.d]),
            x = La(w[1] || "0", r),
            e = m[n.p] - l[n.p] - c + b + i - x,
            a && k(a, x, n, r - x < 20 || a._isStart && 20 < x),
            r -= r - x
        }
        if (o) {
            var S = e + r
              , T = o._isStart;
            d = "scroll" + n.d2,
            k(o, S, n, T && 20 < S || !T && (u ? Math.max(Ne[d], ze[d]) : o.parentNode[d]) <= S + 1),
            u && (l = dt(a),
            u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + ut))
        }
        return p && h && (d = dt(h),
        p.seek(f),
        g = dt(h),
        p._caScrollDist = d[n.p] - g[n.p],
        e = e / p._caScrollDist * f),
        p && p.seek(v),
        p ? e : Math.round(e)
    }
    function tb(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === Ne) {
                for (i in e._stOrig = a.cssText,
                o = wa(e))
                    +i || q.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r,
                a.left = n
            } else
                a.cssText = e._stOrig;
            Le.core.getCache(e).uncache = 1,
            t.appendChild(e)
        }
    }
    function ub(l, e) {
        function xf(e, t, r, n, i) {
            var o = xf.tween
              , a = t.onComplete
              , s = {};
            return o && o.kill(),
            c = Math.round(r),
            t[p] = e,
            (t.modifiers = s)[p] = function(e) {
                return (e = L(f())) !== c && e !== u && 2 < Math.abs(e - c) ? (o.kill(),
                xf.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio,
                u = c,
                c = L(e)
            }
            ,
            t.onComplete = function() {
                xf.tween = 0,
                a && a.call(o)
            }
            ,
            o = xf.tween = Le.to(l, t)
        }
        var c, u, f = Q(l, e), p = "_scroll" + e.p2;
        return l[p] = f,
        l.addEventListener("wheel", function() {
            return xf.tween && xf.tween.kill() && (xf.tween = 0)
        }, {
            passive: !0
        }),
        xf
    }
    var Le, o, Be, Ie, ze, Ne, i, a, s, l, Fe, De, Ge, c, Xe, He, u, Ye, f, p, d, Ke, Ve, r, We, Ze, g, h, Qe = 1, Ue = [], v = [], je = Date.now, m = je(), $e = 0, qe = 1, Je = function _isString(e) {
        return "string" == typeof e
    }, et = Math.abs, t = "scrollLeft", n = "scrollTop", b = "left", y = "right", w = "bottom", tt = "width", rt = "height", nt = "Right", it = "Left", ot = "Top", at = "Bottom", st = "padding", lt = "margin", ct = "Width", x = "Height", ut = "px", ft = {
        s: t,
        p: b,
        p2: it,
        os: y,
        os2: nt,
        d: tt,
        d2: ct,
        a: "x",
        sc: function sc(e) {
            return arguments.length ? Be.scrollTo(e, pt.sc()) : Be.pageXOffset || Ie[t] || ze[t] || Ne[t] || 0
        }
    }, pt = {
        s: n,
        p: "top",
        p2: ot,
        os: w,
        os2: at,
        d: rt,
        d2: x,
        a: "y",
        op: ft,
        sc: function sc(e) {
            return arguments.length ? Be.scrollTo(ft.sc(), e) : Be.pageYOffset || Ie[n] || ze[n] || Ne[n] || 0
        }
    }, dt = function _getBounds(e, t) {
        var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== wa(e)[u] && Le.to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1)
          , n = e.getBoundingClientRect();
        return r && r.progress(0).kill(),
        n
    }, gt = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, ht = {
        toggleActions: "play",
        anticipatePin: 0
    }, S = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, k = function _positionMarker(e, t, r, n) {
        var i = {
            display: "block"
        }
          , o = r[n ? "os2" : "p2"]
          , a = r[n ? "p2" : "os2"];
        e._isFlipped = n,
        i[r.a + "Percent"] = n ? -100 : 0,
        i[r.a] = n ? "1px" : 0,
        i["border" + o + ct] = 1,
        i["border" + a + ct] = 0,
        i[r.p] = t + "px",
        Le.set(e, i)
    }, vt = [], mt = {}, T = {}, C = [], E = [], A = function _dispatch(e) {
        return T[e] && T[e].map(function(e) {
            return e()
        }) || C
    }, B = [], I = function _revertRecorded(e) {
        for (var t = 0; t < B.length; t += 5)
            e && B[t + 4] !== e || (B[t].style.cssText = B[t + 1],
            B[t].getBBox && B[t].setAttribute("transform", B[t + 2] || ""),
            B[t + 3].uncache = 1)
    }, z = function _revertAll(e, t) {
        var r;
        for (Ye = 0; Ye < vt.length; Ye++)
            r = vt[Ye],
            t && r.media !== t || (e ? r.kill(1) : r.revert());
        t && I(t),
        t || A("revert")
    }, F = function _refreshAll(e, t) {
        if (!$e || e) {
            h = !0;
            var r = A("refreshInit");
            Ke && ee.sort(),
            t || z(),
            vt.forEach(function(e) {
                return e.refresh()
            }),
            r.forEach(function(e) {
                return e && e.render && e.render(-1)
            }),
            cb(),
            a.pause(),
            h = !1,
            A("refresh")
        } else
            Ga(ee, "scrollEnd", Za)
    }, D = 0, bt = 1, G = function _updateAll() {
        if (!h) {
            var e = vt.length
              , t = je()
              , r = 50 <= t - m
              , n = e && vt[0].scroll();
            if (bt = n < D ? -1 : 1,
            D = n,
            r && ($e && !He && 200 < t - $e && ($e = 0,
            A("scrollEnd")),
            Ge = m,
            m = t),
            bt < 0) {
                for (Ye = e; 0 < Ye--; )
                    vt[Ye] && vt[Ye].update(0, r);
                bt = 1
            } else
                for (Ye = 0; Ye < e; Ye++)
                    vt[Ye] && vt[Ye].update(0, r);
            l = 0
        }
    }, H = [b, "top", w, y, lt + at, lt + nt, lt + ot, lt + it, "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"], W = H.concat([tt, rt, "boxSizing", "max" + ct, "max" + x, "position", lt, st, st + ot, st + nt, st + at, st + it]), j = /([A-Z])/g, xt = function _setState(e) {
        if (e) {
            var t, r, n = e.t.style, i = e.length, o = 0;
            for ((e.t._gsap || Le.core.getCache(e.t)).uncache = 1; o < i; o += 2)
                r = e[o + 1],
                t = e[o],
                r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase())
        }
    }, yt = {
        left: 0,
        top: 0
    }, q = /(?:webkit|moz|length|cssText|inset)/i;
    ft.op = pt;
    var ee = (ScrollTrigger.prototype.init = function init(T, k) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(1),
        qe) {
            var m, n, f, _, C, M, E, A, L, B, I, e, z, N, F, D, G, t, H, b, V, W, x, j, y, w, r, S, $, q, i, p, ee, te, re, ne, ie, oe = (T = ya(Je(T) || Y(T) || T.nodeType ? {
                trigger: T
            } : T, ht)).onUpdate, ae = T.toggleClass, o = T.id, se = T.onToggle, le = T.onRefresh, ce = T.scrub, ue = T.trigger, fe = T.pin, pe = T.pinSpacing, de = T.invalidateOnRefresh, ge = T.anticipatePin, a = T.onScrubComplete, d = T.onSnapComplete, he = T.once, ve = T.snap, me = T.pinReparent, s = T.pinSpacer, be = T.containerAnimation, xe = T.fastScrollEnd, ye = T.preventOverlaps, we = T.horizontal || T.containerAnimation && !1 !== T.horizontal ? ft : pt, Se = !ce && 0 !== ce, Te = K(T.scroller || Be), l = Le.core.getCache(Te), Oe = O(Te), ke = "fixed" === ("pinType"in T ? T.pinType : P(Te, "pinType") || Oe && "fixed"), _e = [T.onEnter, T.onLeave, T.onEnterBack, T.onLeaveBack], Ce = Se && T.toggleActions.split(" "), c = "markers"in T ? T.markers : ht.markers, Me = Oe ? 0 : parseFloat(wa(Te)["border" + we.p2 + ct]) || 0, Pe = this, u = T.onRefreshInit && function() {
                return T.onRefreshInit(Pe)
            }
            , Ee = function _getSizeFunc(e, t, r) {
                var n = r.d
                  , i = r.d2
                  , o = r.a;
                return (o = P(e, "getBoundingClientRect")) ? function() {
                    return o()[n]
                }
                : function() {
                    return (t ? Be["inner" + i] : e["client" + i]) || 0
                }
            }(Te, Oe, we), Ae = function _getOffsetsFunc(e, t) {
                return !t || ~Ue.indexOf(e) ? R(e) : function() {
                    return yt
                }
            }(Te, Oe), g = 0, Re = Q(Te, we);
            if (Pe.media = Ze,
            ge *= 45,
            Pe.scroller = Te,
            Pe.scroll = be ? be.time.bind(be) : Re,
            _ = Re(),
            Pe.vars = T,
            k = k || T.animation,
            "refreshPriority"in T && (Ke = 1),
            l.tweenScroll = l.tweenScroll || {
                top: ub(Te, pt),
                left: ub(Te, ft)
            },
            Pe.tweenTo = m = l.tweenScroll[we.p],
            k && (k.vars.lazy = !1,
            k._initted || !1 !== k.vars.immediateRender && !1 !== T.immediateRender && k.render(0, !0, !0),
            Pe.animation = k.pause(),
            k.scrollTrigger = Pe,
            (i = Y(ce) && ce) && (q = Le.to(k, {
                ease: "power3",
                duration: i,
                onComplete: function onComplete() {
                    return a && a(Pe)
                }
            })),
            S = 0,
            o = o || k.vars.id),
            vt.push(Pe),
            ve && (Z(ve) && !ve.push || (ve = {
                snapTo: ve
            }),
            "scrollBehavior"in Ne.style && Le.set(Oe ? [Ne, ze] : Te, {
                scrollBehavior: "auto"
            }),
            f = X(ve.snapTo) ? ve.snapTo : "labels" === ve.snapTo ? function _getClosestLabel(t) {
                return function(e) {
                    return Le.utils.snap(Ba(t), e)
                }
            }(k) : "labelsDirectional" === ve.snapTo ? function _getLabelAtDirection(r) {
                return function(e, t) {
                    return Da(Ba(r))(e, t.direction)
                }
            }(k) : !1 !== ve.directional ? function(e, t) {
                return Da(ve.snapTo)(e, t.direction)
            }
            : Le.utils.snap(ve.snapTo),
            p = ve.duration || {
                min: .1,
                max: 2
            },
            p = Z(p) ? De(p.min, p.max) : De(p, p),
            ee = Le.delayedCall(ve.delay || i / 2 || .1, function() {
                if (Math.abs(Pe.getVelocity()) < 10 && !He && g !== Re()) {
                    var e = k && !Se ? k.totalProgress() : Pe.progress
                      , t = (e - $) / (je() - Ge) * 1e3 || 0
                      , r = Le.utils.clamp(-Pe.progress, 1 - Pe.progress, et(t / 2) * t / .185)
                      , n = Pe.progress + (!1 === ve.inertia ? 0 : r)
                      , i = De(0, 1, f(n, Pe))
                      , o = Re()
                      , a = Math.round(M + i * z)
                      , s = ve.onStart
                      , l = ve.onInterrupt
                      , c = ve.onComplete
                      , u = m.tween;
                    if (o <= E && M <= o && a !== o) {
                        if (u && !u._initted && u.data <= et(a - o))
                            return;
                        !1 === ve.inertia && (r = i - Pe.progress),
                        m(a, {
                            duration: p(et(.185 * Math.max(et(n - e), et(i - e)) / t / .05 || 0)),
                            ease: ve.ease || "power3",
                            data: et(a - o),
                            onInterrupt: function onInterrupt() {
                                return ee.restart(!0) && l && l(Pe)
                            },
                            onComplete: function onComplete() {
                                g = Re(),
                                S = $ = k && !Se ? k.totalProgress() : Pe.progress,
                                d && d(Pe),
                                c && c(Pe)
                            }
                        }, o, r * z, a - o - r * z),
                        s && s(Pe, m.tween)
                    }
                } else
                    Pe.isActive && ee.restart(!0)
            }).pause()),
            o && (mt[o] = Pe),
            ue = Pe.trigger = K(ue || fe),
            fe = !0 === fe ? ue : K(fe),
            Je(ae) && (ae = {
                targets: ue,
                className: ae
            }),
            fe && (!1 === pe || pe === lt || (pe = !(!pe && "flex" === wa(fe.parentNode).display) && st),
            Pe.pin = fe,
            !1 !== T.force3D && Le.set(fe, {
                force3D: !0
            }),
            (n = Le.core.getCache(fe)).spacer ? N = n.pinState : (s && ((s = K(s)) && !s.nodeType && (s = s.current || s.nativeElement),
            n.spacerIsNative = !!s,
            s && (n.spacerState = ob(s))),
            n.spacer = G = s || Ie.createElement("div"),
            G.classList.add("pin-spacer"),
            o && G.classList.add("pin-spacer-" + o),
            n.pinState = N = ob(fe)),
            Pe.spacer = G = n.spacer,
            r = wa(fe),
            x = r[pe + we.os2],
            H = Le.getProperty(fe),
            b = Le.quickSetter(fe, we.a, ut),
            lb(fe, G, r),
            D = ob(fe)),
            c && (e = Z(c) ? ya(c, gt) : gt,
            B = Ma("scroller-start", o, Te, we, e, 0),
            I = Ma("scroller-end", o, Te, we, e, 0, B),
            t = B["offset" + we.op.d2],
            A = Ma("start", o, Te, we, e, t, 0, be),
            L = Ma("end", o, Te, we, e, t, 0, be),
            be && (ie = Le.quickSetter([A, L], we.a, ut)),
            ke || Ue.length && !0 === P(Te, "fixedMarkers") || (function _makePositionable(e) {
                var t = wa(e).position;
                e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            }(Oe ? Ne : Te),
            Le.set([B, I], {
                force3D: !0
            }),
            y = Le.quickSetter(B, we.a, ut),
            w = Le.quickSetter(I, we.a, ut))),
            be) {
                var h = be.vars.onUpdate
                  , v = be.vars.onUpdateParams;
                be.eventCallback("onUpdate", function() {
                    Pe.update(0, 0, 1),
                    h && h.apply(v || [])
                })
            }
            Pe.previous = function() {
                return vt[vt.indexOf(Pe) - 1]
            }
            ,
            Pe.next = function() {
                return vt[vt.indexOf(Pe) + 1]
            }
            ,
            Pe.revert = function(e) {
                var t = !1 !== e || !Pe.enabled
                  , r = Xe;
                t !== Pe.isReverted && (t && (Pe.scroll.rec || (Pe.scroll.rec = Re()),
                re = Math.max(Re(), Pe.scroll.rec || 0),
                te = Pe.progress,
                ne = k && k.progress()),
                A && [A, L, B, I].forEach(function(e) {
                    return e.style.display = t ? "none" : "block"
                }),
                t && (Xe = 1),
                Pe.update(t),
                Xe = r,
                fe && (t ? function _swapPinOut(e, t, r) {
                    xt(r);
                    var n = e._gsap;
                    if (n.spacerIsNative)
                        xt(n.spacerState);
                    else if (e.parentNode === t) {
                        var i = t.parentNode;
                        i && (i.insertBefore(e, t),
                        i.removeChild(t))
                    }
                }(fe, G, N) : me && Pe.isActive || lb(fe, G, wa(fe), j)),
                Pe.isReverted = t)
            }
            ,
            Pe.refresh = function(e, t) {
                if (!Xe && Pe.enabled || t)
                    if (fe && e && $e)
                        Ga(ScrollTrigger, "scrollEnd", Za);
                    else {
                        Xe = 1,
                        q && q.pause(),
                        de && k && k.progress(0).invalidate(),
                        Pe.isReverted || Pe.revert();
                        for (var r, n, i, o, a, s, l, c, u, f, p = Ee(), d = Ae(), g = be ? be.duration() : U(Te, we), h = 0, v = 0, m = T.end, b = T.endTrigger || ue, x = T.start || (0 !== T.start && ue ? fe ? "0 0" : "0 100%" : 0), y = T.pinnedContainer && K(T.pinnedContainer), w = ue && Math.max(0, vt.indexOf(Pe)) || 0, S = w; S--; )
                            (s = vt[S]).end || s.refresh(0, 1) || (Xe = 1),
                            !(l = s.pin) || l !== ue && l !== fe || s.isReverted || ((f = f || []).unshift(s),
                            s.revert());
                        for (X(x) && (x = x(Pe)),
                        M = rb(x, ue, p, we, Re(), A, B, Pe, d, Me, ke, g, be) || (fe ? -.001 : 0),
                        X(m) && (m = m(Pe)),
                        Je(m) && !m.indexOf("+=") && (~m.indexOf(" ") ? m = (Je(x) ? x.split(" ")[0] : "") + m : (h = La(m.substr(2), p),
                        m = Je(x) ? x : M + h,
                        b = ue)),
                        E = Math.max(M, rb(m || (b ? "100% 0" : g), b, p, we, Re() + h, L, I, Pe, d, Me, ke, g, be)) || -.001,
                        z = E - M || (M -= .01) && .001,
                        h = 0,
                        S = w; S--; )
                            (l = (s = vt[S]).pin) && s.start - s._pinPush < M && !be && (r = s.end - s.start,
                            l !== ue && l !== y || Y(x) || (h += r),
                            l === fe && (v += r));
                        if (M += h,
                        E += h,
                        Pe._pinPush = v,
                        A && h && ((r = {})[we.a] = "+=" + h,
                        y && (r[we.p] = "-=" + Re()),
                        Le.set([A, L], r)),
                        fe)
                            r = wa(fe),
                            o = we === pt,
                            i = Re(),
                            V = parseFloat(H(we.a)) + v,
                            !g && 1 < E && ((Oe ? Ne : Te).style["overflow-" + we.a] = "scroll"),
                            lb(fe, G, r),
                            D = ob(fe),
                            n = dt(fe, !0),
                            c = ke && Q(Te, o ? ft : pt)(),
                            pe && ((j = [pe + we.os2, z + v + ut]).t = G,
                            (S = pe === st ? Aa(fe, we) + z + v : 0) && j.push(we.d, S + ut),
                            xt(j),
                            ke && Re(re)),
                            ke && ((a = {
                                top: n.top + (o ? i - M : c) + ut,
                                left: n.left + (o ? c : i - M) + ut,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[tt] = a.maxWidth = Math.ceil(n.width) + ut,
                            a[rt] = a.maxHeight = Math.ceil(n.height) + ut,
                            a[lt] = a[lt + ot] = a[lt + nt] = a[lt + at] = a[lt + it] = "0",
                            a[st] = r[st],
                            a[st + ot] = r[st + ot],
                            a[st + nt] = r[st + nt],
                            a[st + at] = r[st + at],
                            a[st + it] = r[st + it],
                            F = function _copyState(e, t, r) {
                                for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2)
                                    n = e[a],
                                    i.push(n, n in t ? t[n] : e[a + 1]);
                                return i.t = e.t,
                                i
                            }(N, a, me)),
                            k ? (u = k._initted,
                            Ve(1),
                            k.render(k.duration(), !0, !0),
                            W = H(we.a) - V + z + v,
                            z !== W && F.splice(F.length - 2, 2),
                            k.render(0, !0, !0),
                            u || k.invalidate(),
                            Ve(0)) : W = z;
                        else if (ue && Re() && !be)
                            for (n = ue.parentNode; n && n !== Ne; )
                                n._pinOffset && (M -= n._pinOffset,
                                E -= n._pinOffset),
                                n = n.parentNode;
                        f && f.forEach(function(e) {
                            return e.revert(!1)
                        }),
                        Pe.start = M,
                        Pe.end = E,
                        _ = C = Re(),
                        be || (_ < re && Re(re),
                        Pe.scroll.rec = 0),
                        Pe.revert(!1),
                        Xe = 0,
                        k && Se && k._initted && k.progress() !== ne && k.progress(ne, !0).render(k.time(), !0, !0),
                        te !== Pe.progress && (k && !Se && k.totalProgress(te, !0),
                        Pe.progress = te,
                        Pe.update(0, 0, 1)),
                        fe && pe && (G._pinOffset = Math.round(Pe.progress * W)),
                        le && le(Pe)
                    }
            }
            ,
            Pe.getVelocity = function() {
                return (Re() - C) / (je() - Ge) * 1e3 || 0
            }
            ,
            Pe.endAnimation = function() {
                aa(Pe.callbackAnimation),
                k && (q ? q.progress(1) : k.paused() ? Se || aa(k, Pe.direction < 0, 1) : aa(k, k.reversed()))
            }
            ,
            Pe.getTrailing = function(t) {
                var e = vt.indexOf(Pe)
                  , r = 0 < Pe.direction ? vt.slice(0, e).reverse() : vt.slice(e + 1);
                return Je(t) ? r.filter(function(e) {
                    return e.vars.preventOverlaps === t
                }) : r
            }
            ,
            Pe.update = function(e, t, r) {
                if (!be || r || e) {
                    var n, i, o, a, s, l, c, u = Pe.scroll(), f = e ? 0 : (u - M) / z, p = f < 0 ? 0 : 1 < f ? 1 : f || 0, d = Pe.progress;
                    if (t && (C = _,
                    _ = be ? Re() : u,
                    ve && ($ = S,
                    S = k && !Se ? k.totalProgress() : p)),
                    ge && !p && fe && !Xe && !Qe && $e && M < u + (u - C) / (je() - Ge) * ge && (p = 1e-4),
                    p !== d && Pe.enabled) {
                        if (a = (s = (n = Pe.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d,
                        Pe.direction = d < p ? 1 : -1,
                        Pe.progress = p,
                        a && !Xe && (i = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3,
                        Se && (o = !s && "none" !== Ce[i + 1] && Ce[i + 1] || Ce[i],
                        c = k && ("complete" === o || "reset" === o || o in k))),
                        ye && s && (c || ce || !k) && (X(ye) ? ye(Pe) : Pe.getTrailing(ye).forEach(function(e) {
                            return e.endAnimation()
                        })),
                        Se || (!q || Xe || Qe ? k && k.totalProgress(p, !!Xe) : (q.vars.totalProgress = p,
                        q.invalidate().restart())),
                        fe)
                            if (e && pe && (G.style[pe + we.os2] = x),
                            ke) {
                                if (a) {
                                    if (l = !e && d < p && u < E + 1 && u + 1 >= U(Te, we),
                                    me)
                                        if (e || !n && !l)
                                            tb(fe, G);
                                        else {
                                            var g = dt(fe, !0)
                                              , h = u - M;
                                            tb(fe, Ne, g.top + (we === pt ? h : 0) + ut, g.left + (we === pt ? 0 : h) + ut)
                                        }
                                    xt(n || l ? F : D),
                                    W !== z && p < 1 && n || b(V + (1 !== p || l ? 0 : W))
                                }
                            } else
                                b(V + W * p);
                        !ve || m.tween || Xe || Qe || ee.restart(!0),
                        ae && (s || he && p && (p < 1 || !We)) && Fe(ae.targets).forEach(function(e) {
                            return e.classList[n || he ? "add" : "remove"](ae.className)
                        }),
                        !oe || Se || e || oe(Pe),
                        a && !Xe ? (Se && (c && ("complete" === o ? k.pause().totalProgress(1) : "reset" === o ? k.restart(!0).pause() : "restart" === o ? k.restart(!0) : k[o]()),
                        oe && oe(Pe)),
                        !s && We || (se && s && ba(Pe, se),
                        _e[i] && ba(Pe, _e[i]),
                        he && (1 === p ? Pe.kill(!1, 1) : _e[i] = 0),
                        s || _e[i = 1 === p ? 1 : 3] && ba(Pe, _e[i])),
                        xe && !n && Math.abs(Pe.getVelocity()) > (Y(xe) ? xe : 2500) && (aa(Pe.callbackAnimation),
                        q ? q.progress(1) : aa(k, !p, 1))) : Se && oe && !Xe && oe(Pe)
                    }
                    if (w) {
                        var v = be ? u / be.duration() * (be._caScrollDist || 0) : u;
                        y(v + (B._isFlipped ? 1 : 0)),
                        w(v)
                    }
                    ie && ie(-u / be.duration() * (be._caScrollDist || 0))
                }
            }
            ,
            Pe.enable = function(e, t) {
                Pe.enabled || (Pe.enabled = !0,
                Ga(Te, "resize", Sa),
                Ga(Te, "scroll", Ra),
                u && Ga(ScrollTrigger, "refreshInit", u),
                !1 !== e && (Pe.progress = te = 0,
                _ = C = g = Re()),
                !1 !== t && Pe.refresh())
            }
            ,
            Pe.getTween = function(e) {
                return e && m ? m.tween : q
            }
            ,
            Pe.disable = function(e, t) {
                if (Pe.enabled && (!1 !== e && Pe.revert(),
                Pe.enabled = Pe.isActive = !1,
                t || q && q.pause(),
                re = 0,
                n && (n.uncache = 1),
                u && Ha(ScrollTrigger, "refreshInit", u),
                ee && (ee.pause(),
                m.tween && m.tween.kill() && (m.tween = 0)),
                !Oe)) {
                    for (var r = vt.length; r--; )
                        if (vt[r].scroller === Te && vt[r] !== Pe)
                            return;
                    Ha(Te, "resize", Sa),
                    Ha(Te, "scroll", Ra)
                }
            }
            ,
            Pe.kill = function(e, t) {
                Pe.disable(e, t),
                q && q.kill(),
                o && delete mt[o];
                var r = vt.indexOf(Pe);
                vt.splice(r, 1),
                r === Ye && 0 < bt && Ye--,
                r = 0,
                vt.forEach(function(e) {
                    return e.scroller === Pe.scroller && (r = 1)
                }),
                r || (Pe.scroll.rec = 0),
                k && (k.scrollTrigger = null,
                e && k.render(-1),
                t || k.kill()),
                A && [A, L, B, I].forEach(function(e) {
                    return e.parentNode && e.parentNode.removeChild(e)
                }),
                fe && (n && (n.uncache = 1),
                r = 0,
                vt.forEach(function(e) {
                    return e.pin === fe && r++
                }),
                r || (n.spacer = 0))
            }
            ,
            Pe.enable(!1, !1),
            k && k.add && !z ? Le.delayedCall(.01, function() {
                return M || E || Pe.refresh()
            }) && (z = .01) && (M = E = 0) : Pe.refresh()
        } else
            this.update = this.refresh = this.kill = J
    }
    ,
    ScrollTrigger.register = function register(e) {
        if (!o && (Le = e || N(),
        M() && window.document && (Be = window,
        Ie = document,
        ze = Ie.documentElement,
        Ne = Ie.body),
        Le && (Fe = Le.utils.toArray,
        De = Le.utils.clamp,
        Ve = Le.core.suppressOverwrites || J,
        Le.core.globals("ScrollTrigger", ScrollTrigger),
        Ne))) {
            s = Be.requestAnimationFrame || function(e) {
                return setTimeout(e, 16)
            }
            ,
            Ga(Be, "wheel", Ra),
            i = [Be, Ie, ze, Ne],
            Ga(Ie, "scroll", Ra);
            var t, r = Ne.style, n = r.borderTopStyle;
            r.borderTopStyle = "solid",
            t = dt(Ne),
            pt.m = Math.round(t.top + pt.sc()) || 0,
            ft.m = Math.round(t.left + ft.sc()) || 0,
            n ? r.borderTopStyle = n : r.removeProperty("border-top-style"),
            c = setInterval(Qa, 200),
            Le.delayedCall(.5, function() {
                return Qe = 0
            }),
            Ga(Ie, "touchcancel", J),
            Ga(Ne, "touchstart", J),
            Fa(Ga, Ie, "pointerdown,touchstart,mousedown", function() {
                return He = 1
            }),
            Fa(Ga, Ie, "pointerup,touchend,mouseup", function() {
                return He = 0
            }),
            u = Le.utils.checkPrefix("transform"),
            W.push(u),
            o = je(),
            a = Le.delayedCall(.2, F).pause(),
            d = [Ie, "visibilitychange", function() {
                var e = Be.innerWidth
                  , t = Be.innerHeight;
                Ie.hidden ? (f = e,
                p = t) : f === e && p === t || Sa()
            }
            , Ie, "DOMContentLoaded", F, Be, "load", function() {
                return $e || F()
            }
            , Be, "resize", Sa],
            V(Ga)
        }
        return o
    }
    ,
    ScrollTrigger.defaults = function defaults(e) {
        for (var t in e)
            ht[t] = e[t]
    }
    ,
    ScrollTrigger.kill = function kill() {
        qe = 0,
        vt.slice(0).forEach(function(e) {
            return e.kill(1)
        })
    }
    ,
    ScrollTrigger.config = function config(e) {
        "limitCallbacks"in e && (We = !!e.limitCallbacks);
        var t = e.syncInterval;
        t && clearInterval(c) || (c = t) && setInterval(Qa, t),
        "autoRefreshEvents"in e && (V(Ha) || V(Ga, e.autoRefreshEvents || "none"),
        r = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
        var r = K(e)
          , n = v.indexOf(r)
          , i = O(r);
        ~n && v.splice(n, i ? 6 : 2),
        i ? Ue.unshift(Be, t, Ne, t, ze, t) : Ue.unshift(r, t)
    }
    ,
    ScrollTrigger.matchMedia = function matchMedia(e) {
        var t, r, n, i, o;
        for (r in e)
            n = E.indexOf(r),
            i = e[r],
            "all" === (Ze = r) ? i() : (t = Be.matchMedia(r)) && (t.matches && (o = i()),
            ~n ? (E[n + 1] = _(E[n + 1], i),
            E[n + 2] = _(E[n + 2], o)) : (n = E.length,
            E.push(r, i, o),
            t.addListener ? t.addListener(Ya) : t.addEventListener("change", Ya)),
            E[n + 3] = t.matches),
            Ze = 0;
        return E
    }
    ,
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
        e || (E.length = 0),
        0 <= (e = E.indexOf(e)) && E.splice(e, 4)
    }
    ,
    ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
        var n = (Je(e) ? K(e) : e).getBoundingClientRect()
          , i = n[r ? tt : rt] * t || 0;
        return r ? 0 < n.right - i && n.left + i < Be.innerWidth : 0 < n.bottom - i && n.top + i < Be.innerHeight
    }
    ,
    ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
        Je(e) && (e = K(e));
        var n = e.getBoundingClientRect()
          , i = n[r ? tt : rt]
          , o = null == t ? i / 2 : t in S ? S[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
        return r ? (n.left + o) / Be.innerWidth : (n.top + o) / Be.innerHeight
    }
    ,
    ScrollTrigger);
    function ScrollTrigger(e, t) {
        o || ScrollTrigger.register(Le) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        this.init(e, t)
    }
    ee.version = "3.8.0",
    ee.saveStyles = function(e) {
        return e ? Fe(e).forEach(function(e) {
            if (e && e.style) {
                var t = B.indexOf(e);
                0 <= t && B.splice(t, 5),
                B.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Le.core.getCache(e), Ze)
            }
        }) : B
    }
    ,
    ee.revert = function(e, t) {
        return z(!e, t)
    }
    ,
    ee.create = function(e, t) {
        return new ee(e,t)
    }
    ,
    ee.refresh = function(e) {
        return e ? Sa() : (o || ee.register()) && F(!0)
    }
    ,
    ee.update = G,
    ee.clearScrollMemory = cb,
    ee.maxScroll = function(e, t) {
        return U(e, t ? ft : pt)
    }
    ,
    ee.getScrollFunc = function(e, t) {
        return Q(K(e), t ? ft : pt)
    }
    ,
    ee.getById = function(e) {
        return mt[e]
    }
    ,
    ee.getAll = function() {
        return vt.slice(0)
    }
    ,
    ee.isScrolling = function() {
        return !!$e
    }
    ,
    ee.snapDirectional = Da,
    ee.addEventListener = function(e, t) {
        var r = T[e] || (T[e] = []);
        ~r.indexOf(t) || r.push(t)
    }
    ,
    ee.removeEventListener = function(e, t) {
        var r = T[e]
          , n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }
    ,
    ee.batch = function(e, t) {
        function Lj(e, t) {
            var r = []
              , n = []
              , i = Le.delayedCall(o, function() {
                t(r, n),
                r = [],
                n = []
            }).pause();
            return function(e) {
                r.length || i.restart(!0),
                r.push(e.trigger),
                n.push(e),
                a <= r.length && i.progress(1)
            }
        }
        var r, n = [], i = {}, o = t.interval || .016, a = t.batchMax || 1e9;
        for (r in t)
            i[r] = "on" === r.substr(0, 2) && X(t[r]) && "onRefreshInit" !== r ? Lj(0, t[r]) : t[r];
        return X(a) && (a = a(),
        Ga(ee, "refresh", function() {
            return a = t.batchMax()
        })),
        Fe(e).forEach(function(e) {
            var t = {};
            for (r in i)
                t[r] = i[r];
            t.trigger = e,
            n.push(ee.create(t))
        }),
        n
    }
    ,
    ee.sort = function(e) {
        return vt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        }
        )
    }
    ,
    N() && Le.registerPlugin(ee),
    e.ScrollTrigger = ee,
    e.default = ee;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
