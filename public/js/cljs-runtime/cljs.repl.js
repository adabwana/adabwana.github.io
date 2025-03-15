goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38148){
var map__38152 = p__38148;
var map__38152__$1 = cljs.core.__destructure_map(map__38152);
var m = map__38152__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38185_38688 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38186_38689 = null;
var count__38187_38690 = (0);
var i__38188_38691 = (0);
while(true){
if((i__38188_38691 < count__38187_38690)){
var f_38692 = chunk__38186_38689.cljs$core$IIndexed$_nth$arity$2(null, i__38188_38691);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38692], 0));


var G__38693 = seq__38185_38688;
var G__38694 = chunk__38186_38689;
var G__38695 = count__38187_38690;
var G__38696 = (i__38188_38691 + (1));
seq__38185_38688 = G__38693;
chunk__38186_38689 = G__38694;
count__38187_38690 = G__38695;
i__38188_38691 = G__38696;
continue;
} else {
var temp__5823__auto___38698 = cljs.core.seq(seq__38185_38688);
if(temp__5823__auto___38698){
var seq__38185_38699__$1 = temp__5823__auto___38698;
if(cljs.core.chunked_seq_QMARK_(seq__38185_38699__$1)){
var c__5525__auto___38700 = cljs.core.chunk_first(seq__38185_38699__$1);
var G__38701 = cljs.core.chunk_rest(seq__38185_38699__$1);
var G__38702 = c__5525__auto___38700;
var G__38703 = cljs.core.count(c__5525__auto___38700);
var G__38704 = (0);
seq__38185_38688 = G__38701;
chunk__38186_38689 = G__38702;
count__38187_38690 = G__38703;
i__38188_38691 = G__38704;
continue;
} else {
var f_38705 = cljs.core.first(seq__38185_38699__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38705], 0));


var G__38707 = cljs.core.next(seq__38185_38699__$1);
var G__38708 = null;
var G__38709 = (0);
var G__38710 = (0);
seq__38185_38688 = G__38707;
chunk__38186_38689 = G__38708;
count__38187_38690 = G__38709;
i__38188_38691 = G__38710;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38716 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38716], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38716)))?cljs.core.second(arglists_38716):arglists_38716)], 0));
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
var seq__38220_38724 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38221_38725 = null;
var count__38222_38726 = (0);
var i__38223_38727 = (0);
while(true){
if((i__38223_38727 < count__38222_38726)){
var vec__38255_38728 = chunk__38221_38725.cljs$core$IIndexed$_nth$arity$2(null, i__38223_38727);
var name_38729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255_38728,(0),null);
var map__38258_38730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255_38728,(1),null);
var map__38258_38731__$1 = cljs.core.__destructure_map(map__38258_38730);
var doc_38732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258_38731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258_38731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38729], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38733], 0));

if(cljs.core.truth_(doc_38732)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38732], 0));
} else {
}


var G__38738 = seq__38220_38724;
var G__38739 = chunk__38221_38725;
var G__38740 = count__38222_38726;
var G__38741 = (i__38223_38727 + (1));
seq__38220_38724 = G__38738;
chunk__38221_38725 = G__38739;
count__38222_38726 = G__38740;
i__38223_38727 = G__38741;
continue;
} else {
var temp__5823__auto___38742 = cljs.core.seq(seq__38220_38724);
if(temp__5823__auto___38742){
var seq__38220_38743__$1 = temp__5823__auto___38742;
if(cljs.core.chunked_seq_QMARK_(seq__38220_38743__$1)){
var c__5525__auto___38744 = cljs.core.chunk_first(seq__38220_38743__$1);
var G__38745 = cljs.core.chunk_rest(seq__38220_38743__$1);
var G__38746 = c__5525__auto___38744;
var G__38747 = cljs.core.count(c__5525__auto___38744);
var G__38748 = (0);
seq__38220_38724 = G__38745;
chunk__38221_38725 = G__38746;
count__38222_38726 = G__38747;
i__38223_38727 = G__38748;
continue;
} else {
var vec__38277_38749 = cljs.core.first(seq__38220_38743__$1);
var name_38750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38277_38749,(0),null);
var map__38280_38751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38277_38749,(1),null);
var map__38280_38752__$1 = cljs.core.__destructure_map(map__38280_38751);
var doc_38753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280_38752__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38280_38752__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38750], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38754], 0));

if(cljs.core.truth_(doc_38753)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38753], 0));
} else {
}


var G__38760 = cljs.core.next(seq__38220_38743__$1);
var G__38761 = null;
var G__38762 = (0);
var G__38763 = (0);
seq__38220_38724 = G__38760;
chunk__38221_38725 = G__38761;
count__38222_38726 = G__38762;
i__38223_38727 = G__38763;
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

var seq__38296 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38297 = null;
var count__38298 = (0);
var i__38299 = (0);
while(true){
if((i__38299 < count__38298)){
var role = chunk__38297.cljs$core$IIndexed$_nth$arity$2(null, i__38299);
var temp__5823__auto___38768__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___38768__$1)){
var spec_38769 = temp__5823__auto___38768__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38769)], 0));
} else {
}


var G__38774 = seq__38296;
var G__38775 = chunk__38297;
var G__38776 = count__38298;
var G__38777 = (i__38299 + (1));
seq__38296 = G__38774;
chunk__38297 = G__38775;
count__38298 = G__38776;
i__38299 = G__38777;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__38296);
if(temp__5823__auto____$1){
var seq__38296__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38296__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38296__$1);
var G__38778 = cljs.core.chunk_rest(seq__38296__$1);
var G__38779 = c__5525__auto__;
var G__38780 = cljs.core.count(c__5525__auto__);
var G__38781 = (0);
seq__38296 = G__38778;
chunk__38297 = G__38779;
count__38298 = G__38780;
i__38299 = G__38781;
continue;
} else {
var role = cljs.core.first(seq__38296__$1);
var temp__5823__auto___38789__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___38789__$2)){
var spec_38791 = temp__5823__auto___38789__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38791)], 0));
} else {
}


var G__38796 = cljs.core.next(seq__38296__$1);
var G__38797 = null;
var G__38798 = (0);
var G__38799 = (0);
seq__38296 = G__38796;
chunk__38297 = G__38797;
count__38298 = G__38798;
i__38299 = G__38799;
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
var map__38398 = datafied_throwable;
var map__38398__$1 = cljs.core.__destructure_map(map__38398);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38398__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38398__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38398__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38399 = cljs.core.last(via);
var map__38399__$1 = cljs.core.__destructure_map(map__38399);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38399__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38399__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38399__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38400 = data;
var map__38400__$1 = cljs.core.__destructure_map(map__38400);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38400__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38400__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38400__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38401 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38401__$1 = cljs.core.__destructure_map(map__38401);
var top_data = map__38401__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38401__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38412 = phase;
var G__38412__$1 = (((G__38412 instanceof cljs.core.Keyword))?G__38412.fqn:null);
switch (G__38412__$1) {
case "read-source":
var map__38421 = data;
var map__38421__$1 = cljs.core.__destructure_map(map__38421);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38421__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38427 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38427__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38427,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38427);
var G__38427__$2 = (cljs.core.truth_((function (){var fexpr__38431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38431.cljs$core$IFn$_invoke$arity$1 ? fexpr__38431.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38431.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38427__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38427__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38427__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38427__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38439 = top_data;
var G__38439__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38439,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38439);
var G__38439__$2 = (cljs.core.truth_((function (){var fexpr__38444 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38444.cljs$core$IFn$_invoke$arity$1 ? fexpr__38444.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38444.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38439__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38439__$1);
var G__38439__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38439__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38439__$2);
var G__38439__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38439__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38439__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38439__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38439__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38453 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38453,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38453,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38453,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38453,(3),null);
var G__38466 = top_data;
var G__38466__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38466,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38466);
var G__38466__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38466__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38466__$1);
var G__38466__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38466__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38466__$2);
var G__38466__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38466__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38466__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38466__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38466__$4;
}

break;
case "execution":
var vec__38511 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38511,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38511,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38511,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38511,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38397_SHARP_){
var or__5002__auto__ = (p1__38397_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__38521 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38521.cljs$core$IFn$_invoke$arity$1 ? fexpr__38521.cljs$core$IFn$_invoke$arity$1(p1__38397_SHARP_) : fexpr__38521.call(null, p1__38397_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__38524 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38524__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38524,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38524);
var G__38524__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38524__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38524__$1);
var G__38524__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38524__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38524__$2);
var G__38524__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38524__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38524__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38524__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38524__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38412__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38553){
var map__38554 = p__38553;
var map__38554__$1 = cljs.core.__destructure_map(map__38554);
var triage_data = map__38554__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38554__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38582 = phase;
var G__38582__$1 = (((G__38582 instanceof cljs.core.Keyword))?G__38582.fqn:null);
switch (G__38582__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38587 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38589 = loc;
var G__38590 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38594_38869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38595_38870 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38596_38871 = true;
var _STAR_print_fn_STAR__temp_val__38597_38872 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38596_38871);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38597_38872);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38550_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38550_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38595_38870);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38594_38869);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38587,G__38588,G__38589,G__38590) : format.call(null, G__38587,G__38588,G__38589,G__38590));

break;
case "macroexpansion":
var G__38618 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38619 = cause_type;
var G__38620 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38621 = loc;
var G__38622 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38618,G__38619,G__38620,G__38621,G__38622) : format.call(null, G__38618,G__38619,G__38620,G__38621,G__38622));

break;
case "compile-syntax-check":
var G__38627 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38628 = cause_type;
var G__38629 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38630 = loc;
var G__38631 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38627,G__38628,G__38629,G__38630,G__38631) : format.call(null, G__38627,G__38628,G__38629,G__38630,G__38631));

break;
case "compilation":
var G__38634 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38635 = cause_type;
var G__38636 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38637 = loc;
var G__38638 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38634,G__38635,G__38636,G__38637,G__38638) : format.call(null, G__38634,G__38635,G__38636,G__38637,G__38638));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38643 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38644 = symbol;
var G__38645 = loc;
var G__38646 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38647_38896 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38648_38897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38649_38898 = true;
var _STAR_print_fn_STAR__temp_val__38650_38899 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38649_38898);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38650_38899);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38551_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38551_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38648_38897);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38647_38896);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38643,G__38644,G__38645,G__38646) : format.call(null, G__38643,G__38644,G__38645,G__38646));
} else {
var G__38662 = "Execution error%s at %s(%s).\n%s\n";
var G__38663 = cause_type;
var G__38664 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38665 = loc;
var G__38666 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38662,G__38663,G__38664,G__38665,G__38666) : format.call(null, G__38662,G__38663,G__38664,G__38665,G__38666));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38582__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
