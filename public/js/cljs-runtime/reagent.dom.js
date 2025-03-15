goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__36083 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36084 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36084);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__36093 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36094 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36094);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36093);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36083);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36141 = arguments.length;
switch (G__36141) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__36174 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__36224_36343 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36225_36344 = null;
var count__36226_36345 = (0);
var i__36227_36346 = (0);
while(true){
if((i__36227_36346 < count__36226_36345)){
var vec__36263_36350 = chunk__36225_36344.cljs$core$IIndexed$_nth$arity$2(null, i__36227_36346);
var container_36351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263_36350,(0),null);
var comp_36352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36263_36350,(1),null);
reagent.dom.re_render_component(comp_36352,container_36351);


var G__36359 = seq__36224_36343;
var G__36360 = chunk__36225_36344;
var G__36361 = count__36226_36345;
var G__36362 = (i__36227_36346 + (1));
seq__36224_36343 = G__36359;
chunk__36225_36344 = G__36360;
count__36226_36345 = G__36361;
i__36227_36346 = G__36362;
continue;
} else {
var temp__5823__auto___36363 = cljs.core.seq(seq__36224_36343);
if(temp__5823__auto___36363){
var seq__36224_36366__$1 = temp__5823__auto___36363;
if(cljs.core.chunked_seq_QMARK_(seq__36224_36366__$1)){
var c__5525__auto___36368 = cljs.core.chunk_first(seq__36224_36366__$1);
var G__36370 = cljs.core.chunk_rest(seq__36224_36366__$1);
var G__36371 = c__5525__auto___36368;
var G__36372 = cljs.core.count(c__5525__auto___36368);
var G__36373 = (0);
seq__36224_36343 = G__36370;
chunk__36225_36344 = G__36371;
count__36226_36345 = G__36372;
i__36227_36346 = G__36373;
continue;
} else {
var vec__36279_36374 = cljs.core.first(seq__36224_36366__$1);
var container_36375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36279_36374,(0),null);
var comp_36376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36279_36374,(1),null);
reagent.dom.re_render_component(comp_36376,container_36375);


var G__36380 = cljs.core.next(seq__36224_36366__$1);
var G__36381 = null;
var G__36382 = (0);
var G__36383 = (0);
seq__36224_36343 = G__36380;
chunk__36225_36344 = G__36381;
count__36226_36345 = G__36382;
i__36227_36346 = G__36383;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
