goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__31035__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31036__i = 0, G__31036__a = new Array(arguments.length -  0);
while (G__31036__i < G__31036__a.length) {G__31036__a[G__31036__i] = arguments[G__31036__i + 0]; ++G__31036__i;}
  args = new cljs.core.IndexedSeq(G__31036__a,0,null);
} 
return G__31035__delegate.call(this,args);};
G__31035.cljs$lang$maxFixedArity = 0;
G__31035.cljs$lang$applyTo = (function (arglist__31037){
var args = cljs.core.seq(arglist__31037);
return G__31035__delegate(args);
});
G__31035.cljs$core$IFn$_invoke$arity$variadic = G__31035__delegate;
return G__31035;
})()
);

(o.error = (function() { 
var G__31039__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__31039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31040__i = 0, G__31040__a = new Array(arguments.length -  0);
while (G__31040__i < G__31040__a.length) {G__31040__a[G__31040__i] = arguments[G__31040__i + 0]; ++G__31040__i;}
  args = new cljs.core.IndexedSeq(G__31040__a,0,null);
} 
return G__31039__delegate.call(this,args);};
G__31039.cljs$lang$maxFixedArity = 0;
G__31039.cljs$lang$applyTo = (function (arglist__31041){
var args = cljs.core.seq(arglist__31041);
return G__31039__delegate(args);
});
G__31039.cljs$core$IFn$_invoke$arity$variadic = G__31039__delegate;
return G__31039;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
