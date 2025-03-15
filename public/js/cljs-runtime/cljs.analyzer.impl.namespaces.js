goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__38153 = libspec;
var seq__38154 = cljs.core.seq(vec__38153);
var first__38155 = cljs.core.first(seq__38154);
var seq__38154__$1 = cljs.core.next(seq__38154);
var lib = first__38155;
var spec = seq__38154__$1;
var libspec__$1 = vec__38153;
var vec__38156 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38156,(0),null);
var vec__38159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38156,(1),null);
var seq__38160 = cljs.core.seq(vec__38159);
var first__38161 = cljs.core.first(seq__38160);
var seq__38160__$1 = cljs.core.next(seq__38160);
var _ = first__38161;
var first__38161__$1 = cljs.core.first(seq__38160__$1);
var seq__38160__$2 = cljs.core.next(seq__38160__$1);
var alias = first__38161__$1;
var post_spec = seq__38160__$2;
var post = vec__38159;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__38183 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38183,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__38183;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__38194 = cljs.core.seq(new_as_aliases);
var chunk__38195 = null;
var count__38196 = (0);
var i__38197 = (0);
while(true){
if((i__38197 < count__38196)){
var vec__38215 = chunk__38195.cljs$core$IIndexed$_nth$arity$2(null, i__38197);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38215,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38215,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38337 = seq__38194;
var G__38338 = chunk__38195;
var G__38339 = count__38196;
var G__38340 = (i__38197 + (1));
seq__38194 = G__38337;
chunk__38195 = G__38338;
count__38196 = G__38339;
i__38197 = G__38340;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__38194);
if(temp__5823__auto__){
var seq__38194__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38194__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38194__$1);
var G__38345 = cljs.core.chunk_rest(seq__38194__$1);
var G__38346 = c__5525__auto__;
var G__38347 = cljs.core.count(c__5525__auto__);
var G__38348 = (0);
seq__38194 = G__38345;
chunk__38195 = G__38346;
count__38196 = G__38347;
i__38197 = G__38348;
continue;
} else {
var vec__38233 = cljs.core.first(seq__38194__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__38358 = cljs.core.next(seq__38194__$1);
var G__38359 = null;
var G__38360 = (0);
var G__38361 = (0);
seq__38194 = G__38358;
chunk__38195 = G__38359;
count__38196 = G__38360;
i__38197 = G__38361;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__38247 = arguments.length;
switch (G__38247) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__38267 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__38267__$1 = cljs.core.__destructure_map(map__38267);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38267__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38267__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__38271 = ret__$1;
var G__38271__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38271,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__38271);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38271__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__38271__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__38289,p__38290){
var map__38291 = p__38289;
var map__38291__$1 = cljs.core.__destructure_map(map__38291);
var ret__$1 = map__38291__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38291__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__38292 = p__38290;
var seq__38293 = cljs.core.seq(vec__38292);
var first__38294 = cljs.core.first(seq__38293);
var seq__38293__$1 = cljs.core.next(seq__38293);
var spec_key = first__38294;
var libspecs = seq__38293__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__38295 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__38295__$1 = cljs.core.__destructure_map(map__38295);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38295__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38295__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__38303 = ret__$1;
var G__38303__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38303,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__38303);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__38303__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__38303__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
