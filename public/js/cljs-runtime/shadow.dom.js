goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29819 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29819(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29833 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29833(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28308 = coll;
var G__28309 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28308,G__28309) : shadow.dom.lazy_native_coll_seq.call(null, G__28308,G__28309));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28340 = arguments.length;
switch (G__28340) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28350 = arguments.length;
switch (G__28350) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28358 = arguments.length;
switch (G__28358) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28370 = arguments.length;
switch (G__28370) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28378 = arguments.length;
switch (G__28378) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28388 = arguments.length;
switch (G__28388) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e28399){if((e28399 instanceof Object)){
var e = e28399;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28399;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28427 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28428 = null;
var count__28429 = (0);
var i__28430 = (0);
while(true){
if((i__28430 < count__28429)){
var el = chunk__28428.cljs$core$IIndexed$_nth$arity$2(null, i__28430);
var handler_30323__$1 = ((function (seq__28427,chunk__28428,count__28429,i__28430,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28427,chunk__28428,count__28429,i__28430,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30323__$1);


var G__30337 = seq__28427;
var G__30338 = chunk__28428;
var G__30339 = count__28429;
var G__30340 = (i__28430 + (1));
seq__28427 = G__30337;
chunk__28428 = G__30338;
count__28429 = G__30339;
i__28430 = G__30340;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28427);
if(temp__5823__auto__){
var seq__28427__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28427__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28427__$1);
var G__30350 = cljs.core.chunk_rest(seq__28427__$1);
var G__30351 = c__5525__auto__;
var G__30352 = cljs.core.count(c__5525__auto__);
var G__30353 = (0);
seq__28427 = G__30350;
chunk__28428 = G__30351;
count__28429 = G__30352;
i__28430 = G__30353;
continue;
} else {
var el = cljs.core.first(seq__28427__$1);
var handler_30356__$1 = ((function (seq__28427,chunk__28428,count__28429,i__28430,el,seq__28427__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28427,chunk__28428,count__28429,i__28430,el,seq__28427__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30356__$1);


var G__30370 = cljs.core.next(seq__28427__$1);
var G__30371 = null;
var G__30372 = (0);
var G__30373 = (0);
seq__28427 = G__30370;
chunk__28428 = G__30371;
count__28429 = G__30372;
i__28430 = G__30373;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28468 = arguments.length;
switch (G__28468) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__28486 = cljs.core.seq(events);
var chunk__28487 = null;
var count__28488 = (0);
var i__28489 = (0);
while(true){
if((i__28489 < count__28488)){
var vec__28504 = chunk__28487.cljs$core$IIndexed$_nth$arity$2(null, i__28489);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28504,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30404 = seq__28486;
var G__30405 = chunk__28487;
var G__30406 = count__28488;
var G__30407 = (i__28489 + (1));
seq__28486 = G__30404;
chunk__28487 = G__30405;
count__28488 = G__30406;
i__28489 = G__30407;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28486);
if(temp__5823__auto__){
var seq__28486__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28486__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28486__$1);
var G__30414 = cljs.core.chunk_rest(seq__28486__$1);
var G__30415 = c__5525__auto__;
var G__30416 = cljs.core.count(c__5525__auto__);
var G__30417 = (0);
seq__28486 = G__30414;
chunk__28487 = G__30415;
count__28488 = G__30416;
i__28489 = G__30417;
continue;
} else {
var vec__28523 = cljs.core.first(seq__28486__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30418 = cljs.core.next(seq__28486__$1);
var G__30419 = null;
var G__30420 = (0);
var G__30421 = (0);
seq__28486 = G__30418;
chunk__28487 = G__30419;
count__28488 = G__30420;
i__28489 = G__30421;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__28536 = cljs.core.seq(styles);
var chunk__28537 = null;
var count__28538 = (0);
var i__28539 = (0);
while(true){
if((i__28539 < count__28538)){
var vec__28571 = chunk__28537.cljs$core$IIndexed$_nth$arity$2(null, i__28539);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28571,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30454 = seq__28536;
var G__30455 = chunk__28537;
var G__30456 = count__28538;
var G__30457 = (i__28539 + (1));
seq__28536 = G__30454;
chunk__28537 = G__30455;
count__28538 = G__30456;
i__28539 = G__30457;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28536);
if(temp__5823__auto__){
var seq__28536__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28536__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28536__$1);
var G__30459 = cljs.core.chunk_rest(seq__28536__$1);
var G__30460 = c__5525__auto__;
var G__30461 = cljs.core.count(c__5525__auto__);
var G__30462 = (0);
seq__28536 = G__30459;
chunk__28537 = G__30460;
count__28538 = G__30461;
i__28539 = G__30462;
continue;
} else {
var vec__28598 = cljs.core.first(seq__28536__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28598,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30464 = cljs.core.next(seq__28536__$1);
var G__30465 = null;
var G__30466 = (0);
var G__30467 = (0);
seq__28536 = G__30464;
chunk__28537 = G__30465;
count__28538 = G__30466;
i__28539 = G__30467;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__28623_30469 = key;
var G__28623_30470__$1 = (((G__28623_30469 instanceof cljs.core.Keyword))?G__28623_30469.fqn:null);
switch (G__28623_30470__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30477 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_30477,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_30477,"aria-");
}
})())){
el.setAttribute(ks_30477,value);
} else {
(el[ks_30477] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__28685){
var map__28686 = p__28685;
var map__28686__$1 = cljs.core.__destructure_map(map__28686);
var props = map__28686__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__28693 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28693,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__28706 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__28706,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__28706;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__28730 = arguments.length;
switch (G__28730) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__28738){
var vec__28739 = p__28738;
var seq__28740 = cljs.core.seq(vec__28739);
var first__28741 = cljs.core.first(seq__28740);
var seq__28740__$1 = cljs.core.next(seq__28740);
var nn = first__28741;
var first__28741__$1 = cljs.core.first(seq__28740__$1);
var seq__28740__$2 = cljs.core.next(seq__28740__$1);
var np = first__28741__$1;
var nc = seq__28740__$2;
var node = vec__28739;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28744 = nn;
var G__28745 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28744,G__28745) : create_fn.call(null, G__28744,G__28745));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__28748 = nn;
var G__28749 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__28748,G__28749) : create_fn.call(null, G__28748,G__28749));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__28751 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28751,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28751,(1),null);
var seq__28755_30510 = cljs.core.seq(node_children);
var chunk__28756_30511 = null;
var count__28757_30512 = (0);
var i__28758_30513 = (0);
while(true){
if((i__28758_30513 < count__28757_30512)){
var child_struct_30514 = chunk__28756_30511.cljs$core$IIndexed$_nth$arity$2(null, i__28758_30513);
var children_30515 = shadow.dom.dom_node(child_struct_30514);
if(cljs.core.seq_QMARK_(children_30515)){
var seq__28870_30517 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30515));
var chunk__28872_30518 = null;
var count__28873_30519 = (0);
var i__28874_30520 = (0);
while(true){
if((i__28874_30520 < count__28873_30519)){
var child_30521 = chunk__28872_30518.cljs$core$IIndexed$_nth$arity$2(null, i__28874_30520);
if(cljs.core.truth_(child_30521)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30521);


var G__30522 = seq__28870_30517;
var G__30523 = chunk__28872_30518;
var G__30524 = count__28873_30519;
var G__30525 = (i__28874_30520 + (1));
seq__28870_30517 = G__30522;
chunk__28872_30518 = G__30523;
count__28873_30519 = G__30524;
i__28874_30520 = G__30525;
continue;
} else {
var G__30526 = seq__28870_30517;
var G__30527 = chunk__28872_30518;
var G__30528 = count__28873_30519;
var G__30529 = (i__28874_30520 + (1));
seq__28870_30517 = G__30526;
chunk__28872_30518 = G__30527;
count__28873_30519 = G__30528;
i__28874_30520 = G__30529;
continue;
}
} else {
var temp__5823__auto___30530 = cljs.core.seq(seq__28870_30517);
if(temp__5823__auto___30530){
var seq__28870_30531__$1 = temp__5823__auto___30530;
if(cljs.core.chunked_seq_QMARK_(seq__28870_30531__$1)){
var c__5525__auto___30532 = cljs.core.chunk_first(seq__28870_30531__$1);
var G__30533 = cljs.core.chunk_rest(seq__28870_30531__$1);
var G__30534 = c__5525__auto___30532;
var G__30535 = cljs.core.count(c__5525__auto___30532);
var G__30536 = (0);
seq__28870_30517 = G__30533;
chunk__28872_30518 = G__30534;
count__28873_30519 = G__30535;
i__28874_30520 = G__30536;
continue;
} else {
var child_30537 = cljs.core.first(seq__28870_30531__$1);
if(cljs.core.truth_(child_30537)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30537);


var G__30538 = cljs.core.next(seq__28870_30531__$1);
var G__30539 = null;
var G__30540 = (0);
var G__30541 = (0);
seq__28870_30517 = G__30538;
chunk__28872_30518 = G__30539;
count__28873_30519 = G__30540;
i__28874_30520 = G__30541;
continue;
} else {
var G__30543 = cljs.core.next(seq__28870_30531__$1);
var G__30544 = null;
var G__30545 = (0);
var G__30546 = (0);
seq__28870_30517 = G__30543;
chunk__28872_30518 = G__30544;
count__28873_30519 = G__30545;
i__28874_30520 = G__30546;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30515);
}


var G__30547 = seq__28755_30510;
var G__30548 = chunk__28756_30511;
var G__30549 = count__28757_30512;
var G__30550 = (i__28758_30513 + (1));
seq__28755_30510 = G__30547;
chunk__28756_30511 = G__30548;
count__28757_30512 = G__30549;
i__28758_30513 = G__30550;
continue;
} else {
var temp__5823__auto___30552 = cljs.core.seq(seq__28755_30510);
if(temp__5823__auto___30552){
var seq__28755_30557__$1 = temp__5823__auto___30552;
if(cljs.core.chunked_seq_QMARK_(seq__28755_30557__$1)){
var c__5525__auto___30558 = cljs.core.chunk_first(seq__28755_30557__$1);
var G__30559 = cljs.core.chunk_rest(seq__28755_30557__$1);
var G__30560 = c__5525__auto___30558;
var G__30561 = cljs.core.count(c__5525__auto___30558);
var G__30562 = (0);
seq__28755_30510 = G__30559;
chunk__28756_30511 = G__30560;
count__28757_30512 = G__30561;
i__28758_30513 = G__30562;
continue;
} else {
var child_struct_30563 = cljs.core.first(seq__28755_30557__$1);
var children_30565 = shadow.dom.dom_node(child_struct_30563);
if(cljs.core.seq_QMARK_(children_30565)){
var seq__28955_30566 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30565));
var chunk__28957_30567 = null;
var count__28958_30568 = (0);
var i__28959_30569 = (0);
while(true){
if((i__28959_30569 < count__28958_30568)){
var child_30573 = chunk__28957_30567.cljs$core$IIndexed$_nth$arity$2(null, i__28959_30569);
if(cljs.core.truth_(child_30573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30573);


var G__30575 = seq__28955_30566;
var G__30576 = chunk__28957_30567;
var G__30577 = count__28958_30568;
var G__30578 = (i__28959_30569 + (1));
seq__28955_30566 = G__30575;
chunk__28957_30567 = G__30576;
count__28958_30568 = G__30577;
i__28959_30569 = G__30578;
continue;
} else {
var G__30580 = seq__28955_30566;
var G__30581 = chunk__28957_30567;
var G__30582 = count__28958_30568;
var G__30583 = (i__28959_30569 + (1));
seq__28955_30566 = G__30580;
chunk__28957_30567 = G__30581;
count__28958_30568 = G__30582;
i__28959_30569 = G__30583;
continue;
}
} else {
var temp__5823__auto___30584__$1 = cljs.core.seq(seq__28955_30566);
if(temp__5823__auto___30584__$1){
var seq__28955_30585__$1 = temp__5823__auto___30584__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28955_30585__$1)){
var c__5525__auto___30586 = cljs.core.chunk_first(seq__28955_30585__$1);
var G__30588 = cljs.core.chunk_rest(seq__28955_30585__$1);
var G__30589 = c__5525__auto___30586;
var G__30590 = cljs.core.count(c__5525__auto___30586);
var G__30591 = (0);
seq__28955_30566 = G__30588;
chunk__28957_30567 = G__30589;
count__28958_30568 = G__30590;
i__28959_30569 = G__30591;
continue;
} else {
var child_30592 = cljs.core.first(seq__28955_30585__$1);
if(cljs.core.truth_(child_30592)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30592);


var G__30593 = cljs.core.next(seq__28955_30585__$1);
var G__30594 = null;
var G__30595 = (0);
var G__30596 = (0);
seq__28955_30566 = G__30593;
chunk__28957_30567 = G__30594;
count__28958_30568 = G__30595;
i__28959_30569 = G__30596;
continue;
} else {
var G__30598 = cljs.core.next(seq__28955_30585__$1);
var G__30599 = null;
var G__30600 = (0);
var G__30601 = (0);
seq__28955_30566 = G__30598;
chunk__28957_30567 = G__30599;
count__28958_30568 = G__30600;
i__28959_30569 = G__30601;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30565);
}


var G__30602 = cljs.core.next(seq__28755_30557__$1);
var G__30603 = null;
var G__30604 = (0);
var G__30605 = (0);
seq__28755_30510 = G__30602;
chunk__28756_30511 = G__30603;
count__28757_30512 = G__30604;
i__28758_30513 = G__30605;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__28983 = cljs.core.seq(node);
var chunk__28984 = null;
var count__28985 = (0);
var i__28986 = (0);
while(true){
if((i__28986 < count__28985)){
var n = chunk__28984.cljs$core$IIndexed$_nth$arity$2(null, i__28986);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__30625 = seq__28983;
var G__30626 = chunk__28984;
var G__30627 = count__28985;
var G__30628 = (i__28986 + (1));
seq__28983 = G__30625;
chunk__28984 = G__30626;
count__28985 = G__30627;
i__28986 = G__30628;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28983);
if(temp__5823__auto__){
var seq__28983__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28983__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28983__$1);
var G__30637 = cljs.core.chunk_rest(seq__28983__$1);
var G__30638 = c__5525__auto__;
var G__30639 = cljs.core.count(c__5525__auto__);
var G__30640 = (0);
seq__28983 = G__30637;
chunk__28984 = G__30638;
count__28985 = G__30639;
i__28986 = G__30640;
continue;
} else {
var n = cljs.core.first(seq__28983__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__30643 = cljs.core.next(seq__28983__$1);
var G__30644 = null;
var G__30645 = (0);
var G__30646 = (0);
seq__28983 = G__30643;
chunk__28984 = G__30644;
count__28985 = G__30645;
i__28986 = G__30646;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__28992 = arguments.length;
switch (G__28992) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__28996 = arguments.length;
switch (G__28996) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29017 = arguments.length;
switch (G__29017) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___30710 = arguments.length;
var i__5727__auto___30714 = (0);
while(true){
if((i__5727__auto___30714 < len__5726__auto___30710)){
args__5732__auto__.push((arguments[i__5727__auto___30714]));

var G__30727 = (i__5727__auto___30714 + (1));
i__5727__auto___30714 = G__30727;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29031_30737 = cljs.core.seq(nodes);
var chunk__29032_30738 = null;
var count__29033_30739 = (0);
var i__29034_30740 = (0);
while(true){
if((i__29034_30740 < count__29033_30739)){
var node_30748 = chunk__29032_30738.cljs$core$IIndexed$_nth$arity$2(null, i__29034_30740);
fragment.appendChild(shadow.dom._to_dom(node_30748));


var G__30750 = seq__29031_30737;
var G__30751 = chunk__29032_30738;
var G__30752 = count__29033_30739;
var G__30753 = (i__29034_30740 + (1));
seq__29031_30737 = G__30750;
chunk__29032_30738 = G__30751;
count__29033_30739 = G__30752;
i__29034_30740 = G__30753;
continue;
} else {
var temp__5823__auto___30755 = cljs.core.seq(seq__29031_30737);
if(temp__5823__auto___30755){
var seq__29031_30757__$1 = temp__5823__auto___30755;
if(cljs.core.chunked_seq_QMARK_(seq__29031_30757__$1)){
var c__5525__auto___30760 = cljs.core.chunk_first(seq__29031_30757__$1);
var G__30762 = cljs.core.chunk_rest(seq__29031_30757__$1);
var G__30763 = c__5525__auto___30760;
var G__30764 = cljs.core.count(c__5525__auto___30760);
var G__30765 = (0);
seq__29031_30737 = G__30762;
chunk__29032_30738 = G__30763;
count__29033_30739 = G__30764;
i__29034_30740 = G__30765;
continue;
} else {
var node_30766 = cljs.core.first(seq__29031_30757__$1);
fragment.appendChild(shadow.dom._to_dom(node_30766));


var G__30768 = cljs.core.next(seq__29031_30757__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__29031_30737 = G__30768;
chunk__29032_30738 = G__30769;
count__29033_30739 = G__30770;
i__29034_30740 = G__30771;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29025){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29025));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29046_30785 = cljs.core.seq(scripts);
var chunk__29047_30786 = null;
var count__29048_30787 = (0);
var i__29049_30788 = (0);
while(true){
if((i__29049_30788 < count__29048_30787)){
var vec__29068_30793 = chunk__29047_30786.cljs$core$IIndexed$_nth$arity$2(null, i__29049_30788);
var script_tag_30794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068_30793,(0),null);
var script_body_30795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068_30793,(1),null);
eval(script_body_30795);


var G__30800 = seq__29046_30785;
var G__30801 = chunk__29047_30786;
var G__30802 = count__29048_30787;
var G__30803 = (i__29049_30788 + (1));
seq__29046_30785 = G__30800;
chunk__29047_30786 = G__30801;
count__29048_30787 = G__30802;
i__29049_30788 = G__30803;
continue;
} else {
var temp__5823__auto___30804 = cljs.core.seq(seq__29046_30785);
if(temp__5823__auto___30804){
var seq__29046_30805__$1 = temp__5823__auto___30804;
if(cljs.core.chunked_seq_QMARK_(seq__29046_30805__$1)){
var c__5525__auto___30811 = cljs.core.chunk_first(seq__29046_30805__$1);
var G__30813 = cljs.core.chunk_rest(seq__29046_30805__$1);
var G__30814 = c__5525__auto___30811;
var G__30815 = cljs.core.count(c__5525__auto___30811);
var G__30816 = (0);
seq__29046_30785 = G__30813;
chunk__29047_30786 = G__30814;
count__29048_30787 = G__30815;
i__29049_30788 = G__30816;
continue;
} else {
var vec__29073_30819 = cljs.core.first(seq__29046_30805__$1);
var script_tag_30820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073_30819,(0),null);
var script_body_30821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29073_30819,(1),null);
eval(script_body_30821);


var G__30823 = cljs.core.next(seq__29046_30805__$1);
var G__30824 = null;
var G__30825 = (0);
var G__30826 = (0);
seq__29046_30785 = G__30823;
chunk__29047_30786 = G__30824;
count__29048_30787 = G__30825;
i__29049_30788 = G__30826;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29078){
var vec__29080 = p__29078;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29080,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29092 = arguments.length;
switch (G__29092) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29111 = cljs.core.seq(style_keys);
var chunk__29112 = null;
var count__29113 = (0);
var i__29114 = (0);
while(true){
if((i__29114 < count__29113)){
var it = chunk__29112.cljs$core$IIndexed$_nth$arity$2(null, i__29114);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30834 = seq__29111;
var G__30835 = chunk__29112;
var G__30836 = count__29113;
var G__30837 = (i__29114 + (1));
seq__29111 = G__30834;
chunk__29112 = G__30835;
count__29113 = G__30836;
i__29114 = G__30837;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__29111);
if(temp__5823__auto__){
var seq__29111__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29111__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29111__$1);
var G__30841 = cljs.core.chunk_rest(seq__29111__$1);
var G__30842 = c__5525__auto__;
var G__30843 = cljs.core.count(c__5525__auto__);
var G__30844 = (0);
seq__29111 = G__30841;
chunk__29112 = G__30842;
count__29113 = G__30843;
i__29114 = G__30844;
continue;
} else {
var it = cljs.core.first(seq__29111__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30845 = cljs.core.next(seq__29111__$1);
var G__30846 = null;
var G__30847 = (0);
var G__30848 = (0);
seq__29111 = G__30845;
chunk__29112 = G__30846;
count__29113 = G__30847;
i__29114 = G__30848;
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
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29127,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29147 = k29127;
var G__29147__$1 = (((G__29147 instanceof cljs.core.Keyword))?G__29147.fqn:null);
switch (G__29147__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29127,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29152){
var vec__29153 = p__29152;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29153,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29153,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29126){
var self__ = this;
var G__29126__$1 = this;
return (new cljs.core.RecordIter((0),G__29126__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29128,other29129){
var self__ = this;
var this29128__$1 = this;
return (((!((other29129 == null)))) && ((((this29128__$1.constructor === other29129.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29128__$1.x,other29129.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29128__$1.y,other29129.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29128__$1.__extmap,other29129.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29127){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29182 = k29127;
var G__29182__$1 = (((G__29182 instanceof cljs.core.Keyword))?G__29182.fqn:null);
switch (G__29182__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29127);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29126){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29188 = cljs.core.keyword_identical_QMARK_;
var expr__29189 = k__5309__auto__;
if(cljs.core.truth_((pred__29188.cljs$core$IFn$_invoke$arity$2 ? pred__29188.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29189) : pred__29188.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__29189)))){
return (new shadow.dom.Coordinate(G__29126,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29188.cljs$core$IFn$_invoke$arity$2 ? pred__29188.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29189) : pred__29188.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__29189)))){
return (new shadow.dom.Coordinate(self__.x,G__29126,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29126),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29126){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29126,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29141){
var extmap__5342__auto__ = (function (){var G__29225 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29141,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29141)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29225);
} else {
return G__29225;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29141),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29141),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29275,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29292 = k29275;
var G__29292__$1 = (((G__29292 instanceof cljs.core.Keyword))?G__29292.fqn:null);
switch (G__29292__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29275,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29297){
var vec__29298 = p__29297;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29298,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29298,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29274){
var self__ = this;
var G__29274__$1 = this;
return (new cljs.core.RecordIter((0),G__29274__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29276,other29277){
var self__ = this;
var this29276__$1 = this;
return (((!((other29277 == null)))) && ((((this29276__$1.constructor === other29277.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29276__$1.w,other29277.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29276__$1.h,other29277.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29276__$1.__extmap,other29277.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29275){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29313 = k29275;
var G__29313__$1 = (((G__29313 instanceof cljs.core.Keyword))?G__29313.fqn:null);
switch (G__29313__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29275);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29274){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29316 = cljs.core.keyword_identical_QMARK_;
var expr__29317 = k__5309__auto__;
if(cljs.core.truth_((pred__29316.cljs$core$IFn$_invoke$arity$2 ? pred__29316.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29317) : pred__29316.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__29317)))){
return (new shadow.dom.Size(G__29274,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29316.cljs$core$IFn$_invoke$arity$2 ? pred__29316.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29317) : pred__29316.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__29317)))){
return (new shadow.dom.Size(self__.w,G__29274,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29274),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29274){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29274,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29278){
var extmap__5342__auto__ = (function (){var G__29331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29278,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29278)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29331);
} else {
return G__29331;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29278),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29278),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__31098 = (i + (1));
var G__31099 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31098;
ret = G__31099;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29347){
var vec__29349 = p__29347;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29349,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29359 = arguments.length;
switch (G__29359) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31165 = ps;
var G__31166 = (i + (1));
el__$1 = G__31165;
i = G__31166;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29414 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29426_31205 = cljs.core.seq(props);
var chunk__29427_31207 = null;
var count__29428_31208 = (0);
var i__29429_31209 = (0);
while(true){
if((i__29429_31209 < count__29428_31208)){
var vec__29462_31211 = chunk__29427_31207.cljs$core$IIndexed$_nth$arity$2(null, i__29429_31209);
var k_31212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29462_31211,(0),null);
var v_31213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29462_31211,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_31212);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31212),v_31213);


var G__31221 = seq__29426_31205;
var G__31222 = chunk__29427_31207;
var G__31223 = count__29428_31208;
var G__31224 = (i__29429_31209 + (1));
seq__29426_31205 = G__31221;
chunk__29427_31207 = G__31222;
count__29428_31208 = G__31223;
i__29429_31209 = G__31224;
continue;
} else {
var temp__5823__auto___31228 = cljs.core.seq(seq__29426_31205);
if(temp__5823__auto___31228){
var seq__29426_31229__$1 = temp__5823__auto___31228;
if(cljs.core.chunked_seq_QMARK_(seq__29426_31229__$1)){
var c__5525__auto___31230 = cljs.core.chunk_first(seq__29426_31229__$1);
var G__31231 = cljs.core.chunk_rest(seq__29426_31229__$1);
var G__31232 = c__5525__auto___31230;
var G__31233 = cljs.core.count(c__5525__auto___31230);
var G__31234 = (0);
seq__29426_31205 = G__31231;
chunk__29427_31207 = G__31232;
count__29428_31208 = G__31233;
i__29429_31209 = G__31234;
continue;
} else {
var vec__29466_31235 = cljs.core.first(seq__29426_31229__$1);
var k_31236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466_31235,(0),null);
var v_31237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466_31235,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_31236);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31236),v_31237);


var G__31243 = cljs.core.next(seq__29426_31229__$1);
var G__31244 = null;
var G__31245 = (0);
var G__31246 = (0);
seq__29426_31205 = G__31243;
chunk__29427_31207 = G__31244;
count__29428_31208 = G__31245;
i__29429_31209 = G__31246;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29493 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29493,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29493,(1),null);
var seq__29500_31252 = cljs.core.seq(node_children);
var chunk__29502_31253 = null;
var count__29503_31254 = (0);
var i__29504_31255 = (0);
while(true){
if((i__29504_31255 < count__29503_31254)){
var child_struct_31259 = chunk__29502_31253.cljs$core$IIndexed$_nth$arity$2(null, i__29504_31255);
if((!((child_struct_31259 == null)))){
if(typeof child_struct_31259 === 'string'){
var text_31260 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31260),child_struct_31259].join(''));
} else {
var children_31264 = shadow.dom.svg_node(child_struct_31259);
if(cljs.core.seq_QMARK_(children_31264)){
var seq__29550_31265 = cljs.core.seq(children_31264);
var chunk__29552_31266 = null;
var count__29553_31267 = (0);
var i__29554_31268 = (0);
while(true){
if((i__29554_31268 < count__29553_31267)){
var child_31273 = chunk__29552_31266.cljs$core$IIndexed$_nth$arity$2(null, i__29554_31268);
if(cljs.core.truth_(child_31273)){
node.appendChild(child_31273);


var G__31275 = seq__29550_31265;
var G__31276 = chunk__29552_31266;
var G__31277 = count__29553_31267;
var G__31278 = (i__29554_31268 + (1));
seq__29550_31265 = G__31275;
chunk__29552_31266 = G__31276;
count__29553_31267 = G__31277;
i__29554_31268 = G__31278;
continue;
} else {
var G__31279 = seq__29550_31265;
var G__31280 = chunk__29552_31266;
var G__31281 = count__29553_31267;
var G__31282 = (i__29554_31268 + (1));
seq__29550_31265 = G__31279;
chunk__29552_31266 = G__31280;
count__29553_31267 = G__31281;
i__29554_31268 = G__31282;
continue;
}
} else {
var temp__5823__auto___31286 = cljs.core.seq(seq__29550_31265);
if(temp__5823__auto___31286){
var seq__29550_31287__$1 = temp__5823__auto___31286;
if(cljs.core.chunked_seq_QMARK_(seq__29550_31287__$1)){
var c__5525__auto___31288 = cljs.core.chunk_first(seq__29550_31287__$1);
var G__31290 = cljs.core.chunk_rest(seq__29550_31287__$1);
var G__31291 = c__5525__auto___31288;
var G__31292 = cljs.core.count(c__5525__auto___31288);
var G__31293 = (0);
seq__29550_31265 = G__31290;
chunk__29552_31266 = G__31291;
count__29553_31267 = G__31292;
i__29554_31268 = G__31293;
continue;
} else {
var child_31295 = cljs.core.first(seq__29550_31287__$1);
if(cljs.core.truth_(child_31295)){
node.appendChild(child_31295);


var G__31298 = cljs.core.next(seq__29550_31287__$1);
var G__31299 = null;
var G__31300 = (0);
var G__31301 = (0);
seq__29550_31265 = G__31298;
chunk__29552_31266 = G__31299;
count__29553_31267 = G__31300;
i__29554_31268 = G__31301;
continue;
} else {
var G__31303 = cljs.core.next(seq__29550_31287__$1);
var G__31304 = null;
var G__31305 = (0);
var G__31306 = (0);
seq__29550_31265 = G__31303;
chunk__29552_31266 = G__31304;
count__29553_31267 = G__31305;
i__29554_31268 = G__31306;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31264);
}
}


var G__31310 = seq__29500_31252;
var G__31311 = chunk__29502_31253;
var G__31312 = count__29503_31254;
var G__31313 = (i__29504_31255 + (1));
seq__29500_31252 = G__31310;
chunk__29502_31253 = G__31311;
count__29503_31254 = G__31312;
i__29504_31255 = G__31313;
continue;
} else {
var G__31314 = seq__29500_31252;
var G__31315 = chunk__29502_31253;
var G__31316 = count__29503_31254;
var G__31317 = (i__29504_31255 + (1));
seq__29500_31252 = G__31314;
chunk__29502_31253 = G__31315;
count__29503_31254 = G__31316;
i__29504_31255 = G__31317;
continue;
}
} else {
var temp__5823__auto___31318 = cljs.core.seq(seq__29500_31252);
if(temp__5823__auto___31318){
var seq__29500_31319__$1 = temp__5823__auto___31318;
if(cljs.core.chunked_seq_QMARK_(seq__29500_31319__$1)){
var c__5525__auto___31322 = cljs.core.chunk_first(seq__29500_31319__$1);
var G__31324 = cljs.core.chunk_rest(seq__29500_31319__$1);
var G__31325 = c__5525__auto___31322;
var G__31326 = cljs.core.count(c__5525__auto___31322);
var G__31327 = (0);
seq__29500_31252 = G__31324;
chunk__29502_31253 = G__31325;
count__29503_31254 = G__31326;
i__29504_31255 = G__31327;
continue;
} else {
var child_struct_31330 = cljs.core.first(seq__29500_31319__$1);
if((!((child_struct_31330 == null)))){
if(typeof child_struct_31330 === 'string'){
var text_31331 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31331),child_struct_31330].join(''));
} else {
var children_31332 = shadow.dom.svg_node(child_struct_31330);
if(cljs.core.seq_QMARK_(children_31332)){
var seq__29598_31333 = cljs.core.seq(children_31332);
var chunk__29600_31334 = null;
var count__29601_31335 = (0);
var i__29602_31336 = (0);
while(true){
if((i__29602_31336 < count__29601_31335)){
var child_31337 = chunk__29600_31334.cljs$core$IIndexed$_nth$arity$2(null, i__29602_31336);
if(cljs.core.truth_(child_31337)){
node.appendChild(child_31337);


var G__31341 = seq__29598_31333;
var G__31342 = chunk__29600_31334;
var G__31343 = count__29601_31335;
var G__31344 = (i__29602_31336 + (1));
seq__29598_31333 = G__31341;
chunk__29600_31334 = G__31342;
count__29601_31335 = G__31343;
i__29602_31336 = G__31344;
continue;
} else {
var G__31346 = seq__29598_31333;
var G__31347 = chunk__29600_31334;
var G__31348 = count__29601_31335;
var G__31349 = (i__29602_31336 + (1));
seq__29598_31333 = G__31346;
chunk__29600_31334 = G__31347;
count__29601_31335 = G__31348;
i__29602_31336 = G__31349;
continue;
}
} else {
var temp__5823__auto___31350__$1 = cljs.core.seq(seq__29598_31333);
if(temp__5823__auto___31350__$1){
var seq__29598_31351__$1 = temp__5823__auto___31350__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29598_31351__$1)){
var c__5525__auto___31352 = cljs.core.chunk_first(seq__29598_31351__$1);
var G__31353 = cljs.core.chunk_rest(seq__29598_31351__$1);
var G__31354 = c__5525__auto___31352;
var G__31355 = cljs.core.count(c__5525__auto___31352);
var G__31356 = (0);
seq__29598_31333 = G__31353;
chunk__29600_31334 = G__31354;
count__29601_31335 = G__31355;
i__29602_31336 = G__31356;
continue;
} else {
var child_31357 = cljs.core.first(seq__29598_31351__$1);
if(cljs.core.truth_(child_31357)){
node.appendChild(child_31357);


var G__31358 = cljs.core.next(seq__29598_31351__$1);
var G__31359 = null;
var G__31360 = (0);
var G__31361 = (0);
seq__29598_31333 = G__31358;
chunk__29600_31334 = G__31359;
count__29601_31335 = G__31360;
i__29602_31336 = G__31361;
continue;
} else {
var G__31362 = cljs.core.next(seq__29598_31351__$1);
var G__31363 = null;
var G__31364 = (0);
var G__31365 = (0);
seq__29598_31333 = G__31362;
chunk__29600_31334 = G__31363;
count__29601_31335 = G__31364;
i__29602_31336 = G__31365;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31332);
}
}


var G__31366 = cljs.core.next(seq__29500_31319__$1);
var G__31367 = null;
var G__31368 = (0);
var G__31369 = (0);
seq__29500_31252 = G__31366;
chunk__29502_31253 = G__31367;
count__29503_31254 = G__31368;
i__29504_31255 = G__31369;
continue;
} else {
var G__31370 = cljs.core.next(seq__29500_31319__$1);
var G__31371 = null;
var G__31372 = (0);
var G__31373 = (0);
seq__29500_31252 = G__31370;
chunk__29502_31253 = G__31371;
count__29503_31254 = G__31372;
i__29504_31255 = G__31373;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31387 = arguments.length;
var i__5727__auto___31389 = (0);
while(true){
if((i__5727__auto___31389 < len__5726__auto___31387)){
args__5732__auto__.push((arguments[i__5727__auto___31389]));

var G__31395 = (i__5727__auto___31389 + (1));
i__5727__auto___31389 = G__31395;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29668){
var G__29669 = cljs.core.first(seq29668);
var seq29668__$1 = cljs.core.next(seq29668);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29669,seq29668__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
