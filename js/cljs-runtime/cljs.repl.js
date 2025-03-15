goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37550){
var map__37551 = p__37550;
var map__37551__$1 = cljs.core.__destructure_map(map__37551);
var m = map__37551__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37563_38123 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37564_38124 = null;
var count__37565_38125 = (0);
var i__37566_38126 = (0);
while(true){
if((i__37566_38126 < count__37565_38125)){
var f_38132 = chunk__37564_38124.cljs$core$IIndexed$_nth$arity$2(null, i__37566_38126);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38132], 0));


var G__38134 = seq__37563_38123;
var G__38135 = chunk__37564_38124;
var G__38136 = count__37565_38125;
var G__38137 = (i__37566_38126 + (1));
seq__37563_38123 = G__38134;
chunk__37564_38124 = G__38135;
count__37565_38125 = G__38136;
i__37566_38126 = G__38137;
continue;
} else {
var temp__5823__auto___38140 = cljs.core.seq(seq__37563_38123);
if(temp__5823__auto___38140){
var seq__37563_38143__$1 = temp__5823__auto___38140;
if(cljs.core.chunked_seq_QMARK_(seq__37563_38143__$1)){
var c__5525__auto___38145 = cljs.core.chunk_first(seq__37563_38143__$1);
var G__38146 = cljs.core.chunk_rest(seq__37563_38143__$1);
var G__38147 = c__5525__auto___38145;
var G__38148 = cljs.core.count(c__5525__auto___38145);
var G__38149 = (0);
seq__37563_38123 = G__38146;
chunk__37564_38124 = G__38147;
count__37565_38125 = G__38148;
i__37566_38126 = G__38149;
continue;
} else {
var f_38152 = cljs.core.first(seq__37563_38143__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38152], 0));


var G__38154 = cljs.core.next(seq__37563_38143__$1);
var G__38155 = null;
var G__38156 = (0);
var G__38157 = (0);
seq__37563_38123 = G__38154;
chunk__37564_38124 = G__38155;
count__37565_38125 = G__38156;
i__37566_38126 = G__38157;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38159 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38159], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38159)))?cljs.core.second(arglists_38159):arglists_38159)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37615_38184 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37616_38185 = null;
var count__37617_38186 = (0);
var i__37618_38187 = (0);
while(true){
if((i__37618_38187 < count__37617_38186)){
var vec__37686_38188 = chunk__37616_38185.cljs$core$IIndexed$_nth$arity$2(null, i__37618_38187);
var name_38189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686_38188,(0),null);
var map__37690_38190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37686_38188,(1),null);
var map__37690_38191__$1 = cljs.core.__destructure_map(map__37690_38190);
var doc_38192 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690_38191__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690_38191__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38189], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38193], 0));

if(cljs.core.truth_(doc_38192)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38192], 0));
} else {
}


var G__38200 = seq__37615_38184;
var G__38201 = chunk__37616_38185;
var G__38202 = count__37617_38186;
var G__38203 = (i__37618_38187 + (1));
seq__37615_38184 = G__38200;
chunk__37616_38185 = G__38201;
count__37617_38186 = G__38202;
i__37618_38187 = G__38203;
continue;
} else {
var temp__5823__auto___38204 = cljs.core.seq(seq__37615_38184);
if(temp__5823__auto___38204){
var seq__37615_38205__$1 = temp__5823__auto___38204;
if(cljs.core.chunked_seq_QMARK_(seq__37615_38205__$1)){
var c__5525__auto___38206 = cljs.core.chunk_first(seq__37615_38205__$1);
var G__38207 = cljs.core.chunk_rest(seq__37615_38205__$1);
var G__38208 = c__5525__auto___38206;
var G__38209 = cljs.core.count(c__5525__auto___38206);
var G__38210 = (0);
seq__37615_38184 = G__38207;
chunk__37616_38185 = G__38208;
count__37617_38186 = G__38209;
i__37618_38187 = G__38210;
continue;
} else {
var vec__37706_38212 = cljs.core.first(seq__37615_38205__$1);
var name_38213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706_38212,(0),null);
var map__37709_38214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706_38212,(1),null);
var map__37709_38215__$1 = cljs.core.__destructure_map(map__37709_38214);
var doc_38216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37709_38215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37709_38215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38213], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38217], 0));

if(cljs.core.truth_(doc_38216)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38216], 0));
} else {
}


var G__38221 = cljs.core.next(seq__37615_38205__$1);
var G__38222 = null;
var G__38223 = (0);
var G__38224 = (0);
seq__37615_38184 = G__38221;
chunk__37616_38185 = G__38222;
count__37617_38186 = G__38223;
i__37618_38187 = G__38224;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37730 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37731 = null;
var count__37732 = (0);
var i__37733 = (0);
while(true){
if((i__37733 < count__37732)){
var role = chunk__37731.cljs$core$IIndexed$_nth$arity$2(null, i__37733);
var temp__5823__auto___38228__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___38228__$1)){
var spec_38229 = temp__5823__auto___38228__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38229)], 0));
} else {
}


var G__38232 = seq__37730;
var G__38233 = chunk__37731;
var G__38234 = count__37732;
var G__38235 = (i__37733 + (1));
seq__37730 = G__38232;
chunk__37731 = G__38233;
count__37732 = G__38234;
i__37733 = G__38235;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__37730);
if(temp__5823__auto____$1){
var seq__37730__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37730__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37730__$1);
var G__38240 = cljs.core.chunk_rest(seq__37730__$1);
var G__38241 = c__5525__auto__;
var G__38242 = cljs.core.count(c__5525__auto__);
var G__38243 = (0);
seq__37730 = G__38240;
chunk__37731 = G__38241;
count__37732 = G__38242;
i__37733 = G__38243;
continue;
} else {
var role = cljs.core.first(seq__37730__$1);
var temp__5823__auto___38245__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___38245__$2)){
var spec_38247 = temp__5823__auto___38245__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38247)], 0));
} else {
}


var G__38249 = cljs.core.next(seq__37730__$1);
var G__38250 = null;
var G__38251 = (0);
var G__38252 = (0);
seq__37730 = G__38249;
chunk__37731 = G__38250;
count__37732 = G__38251;
i__37733 = G__38252;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37833 = datafied_throwable;
var map__37833__$1 = cljs.core.__destructure_map(map__37833);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37833__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37833__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37833__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37834 = cljs.core.last(via);
var map__37834__$1 = cljs.core.__destructure_map(map__37834);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37834__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37835 = data;
var map__37835__$1 = cljs.core.__destructure_map(map__37835);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37836 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37836__$1 = cljs.core.__destructure_map(map__37836);
var top_data = map__37836__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37836__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37856 = phase;
var G__37856__$1 = (((G__37856 instanceof cljs.core.Keyword))?G__37856.fqn:null);
switch (G__37856__$1) {
case "read-source":
var map__37862 = data;
var map__37862__$1 = cljs.core.__destructure_map(map__37862);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37862__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37865 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37865__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37865,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37865);
var G__37865__$2 = (cljs.core.truth_((function (){var fexpr__37879 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37879.cljs$core$IFn$_invoke$arity$1 ? fexpr__37879.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37879.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37865__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37865__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37865__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37890 = top_data;
var G__37890__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37890,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37890);
var G__37890__$2 = (cljs.core.truth_((function (){var fexpr__37895 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37895.cljs$core$IFn$_invoke$arity$1 ? fexpr__37895.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37895.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37890__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37890__$1);
var G__37890__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37890__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37890__$2);
var G__37890__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37890__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37890__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37890__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37890__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37905 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(3),null);
var G__37928 = top_data;
var G__37928__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37928,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37928);
var G__37928__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37928__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37928__$1);
var G__37928__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37928__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37928__$2);
var G__37928__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37928__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37928__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37928__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37928__$4;
}

break;
case "execution":
var vec__37945 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37945,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37945,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37945,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37945,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37816_SHARP_){
var or__5002__auto__ = (p1__37816_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__37952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37952.cljs$core$IFn$_invoke$arity$1 ? fexpr__37952.cljs$core$IFn$_invoke$arity$1(p1__37816_SHARP_) : fexpr__37952.call(null, p1__37816_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__37955 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37955__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37955,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37955);
var G__37955__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37955__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37955__$1);
var G__37955__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37955__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37955__$2);
var G__37955__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37955__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37955__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37955__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37955__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37856__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37972){
var map__37975 = p__37972;
var map__37975__$1 = cljs.core.__destructure_map(map__37975);
var triage_data = map__37975__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37975__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37990 = phase;
var G__37990__$1 = (((G__37990 instanceof cljs.core.Keyword))?G__37990.fqn:null);
switch (G__37990__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37992 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37994 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37995 = loc;
var G__37996 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37999_38346 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38000_38347 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38001_38348 = true;
var _STAR_print_fn_STAR__temp_val__38002_38349 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38001_38348);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38002_38349);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37966_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37966_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38000_38347);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37999_38346);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37992,G__37994,G__37995,G__37996) : format.call(null, G__37992,G__37994,G__37995,G__37996));

break;
case "macroexpansion":
var G__38021 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38022 = cause_type;
var G__38023 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38024 = loc;
var G__38025 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38021,G__38022,G__38023,G__38024,G__38025) : format.call(null, G__38021,G__38022,G__38023,G__38024,G__38025));

break;
case "compile-syntax-check":
var G__38036 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38037 = cause_type;
var G__38038 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38039 = loc;
var G__38040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38036,G__38037,G__38038,G__38039,G__38040) : format.call(null, G__38036,G__38037,G__38038,G__38039,G__38040));

break;
case "compilation":
var G__38045 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38046 = cause_type;
var G__38047 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38048 = loc;
var G__38049 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38045,G__38046,G__38047,G__38048,G__38049) : format.call(null, G__38045,G__38046,G__38047,G__38048,G__38049));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38055 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38056 = symbol;
var G__38057 = loc;
var G__38058 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38069_38385 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38070_38386 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38071_38387 = true;
var _STAR_print_fn_STAR__temp_val__38072_38388 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38071_38387);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38072_38388);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37967_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37967_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38070_38386);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38069_38385);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38055,G__38056,G__38057,G__38058) : format.call(null, G__38055,G__38056,G__38057,G__38058));
} else {
var G__38088 = "Execution error%s at %s(%s).\n%s\n";
var G__38089 = cause_type;
var G__38090 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38091 = loc;
var G__38092 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38088,G__38089,G__38090,G__38091,G__38092) : format.call(null, G__38088,G__38089,G__38090,G__38091,G__38092));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37990__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
