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
var vec__37744 = libspec;
var seq__37745 = cljs.core.seq(vec__37744);
var first__37746 = cljs.core.first(seq__37745);
var seq__37745__$1 = cljs.core.next(seq__37745);
var lib = first__37746;
var spec = seq__37745__$1;
var libspec__$1 = vec__37744;
var vec__37747 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37747,(0),null);
var vec__37751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37747,(1),null);
var seq__37752 = cljs.core.seq(vec__37751);
var first__37753 = cljs.core.first(seq__37752);
var seq__37752__$1 = cljs.core.next(seq__37752);
var _ = first__37753;
var first__37753__$1 = cljs.core.first(seq__37752__$1);
var seq__37752__$2 = cljs.core.next(seq__37752__$1);
var alias = first__37753__$1;
var post_spec = seq__37752__$2;
var post = vec__37751;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__37771 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37771,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__37771;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__37778 = cljs.core.seq(new_as_aliases);
var chunk__37779 = null;
var count__37780 = (0);
var i__37781 = (0);
while(true){
if((i__37781 < count__37780)){
var vec__37812 = chunk__37779.cljs$core$IIndexed$_nth$arity$2(null, i__37781);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37812,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__37909 = seq__37778;
var G__37910 = chunk__37779;
var G__37911 = count__37780;
var G__37912 = (i__37781 + (1));
seq__37778 = G__37909;
chunk__37779 = G__37910;
count__37780 = G__37911;
i__37781 = G__37912;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__37778);
if(temp__5823__auto__){
var seq__37778__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37778__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__37778__$1);
var G__37914 = cljs.core.chunk_rest(seq__37778__$1);
var G__37915 = c__5525__auto__;
var G__37916 = cljs.core.count(c__5525__auto__);
var G__37917 = (0);
seq__37778 = G__37914;
chunk__37779 = G__37915;
count__37780 = G__37916;
i__37781 = G__37917;
continue;
} else {
var vec__37830 = cljs.core.first(seq__37778__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37830,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37830,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__37922 = cljs.core.next(seq__37778__$1);
var G__37923 = null;
var G__37924 = (0);
var G__37925 = (0);
seq__37778 = G__37922;
chunk__37779 = G__37923;
count__37780 = G__37924;
i__37781 = G__37925;
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
var G__37842 = arguments.length;
switch (G__37842) {
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
var map__37850 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__37850__$1 = cljs.core.__destructure_map(map__37850);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__37851 = ret__$1;
var G__37851__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37851,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__37851);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37851__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__37851__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__37863,p__37864){
var map__37866 = p__37863;
var map__37866__$1 = cljs.core.__destructure_map(map__37866);
var ret__$1 = map__37866__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37866__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__37867 = p__37864;
var seq__37868 = cljs.core.seq(vec__37867);
var first__37869 = cljs.core.first(seq__37868);
var seq__37868__$1 = cljs.core.next(seq__37868);
var spec_key = first__37869;
var libspecs = seq__37868__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__37874 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__37874__$1 = cljs.core.__destructure_map(map__37874);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__37880 = ret__$1;
var G__37880__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37880,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__37880);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__37880__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__37880__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
