goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29917 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_29917(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29923 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_29923(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28231 = coll;
var G__28232 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28231,G__28232) : shadow.dom.lazy_native_coll_seq.call(null, G__28231,G__28232));
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
var G__28286 = arguments.length;
switch (G__28286) {
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
var G__28300 = arguments.length;
switch (G__28300) {
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
var G__28316 = arguments.length;
switch (G__28316) {
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
var G__28351 = arguments.length;
switch (G__28351) {
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
var G__28421 = arguments.length;
switch (G__28421) {
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
var G__28509 = arguments.length;
switch (G__28509) {
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
}catch (e28540){if((e28540 instanceof Object)){
var e = e28540;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28540;

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
var seq__28576 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28577 = null;
var count__28578 = (0);
var i__28579 = (0);
while(true){
if((i__28579 < count__28578)){
var el = chunk__28577.cljs$core$IIndexed$_nth$arity$2(null, i__28579);
var handler_29992__$1 = ((function (seq__28576,chunk__28577,count__28578,i__28579,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28576,chunk__28577,count__28578,i__28579,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29992__$1);


var G__30001 = seq__28576;
var G__30002 = chunk__28577;
var G__30003 = count__28578;
var G__30004 = (i__28579 + (1));
seq__28576 = G__30001;
chunk__28577 = G__30002;
count__28578 = G__30003;
i__28579 = G__30004;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28576);
if(temp__5823__auto__){
var seq__28576__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28576__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28576__$1);
var G__30007 = cljs.core.chunk_rest(seq__28576__$1);
var G__30008 = c__5525__auto__;
var G__30009 = cljs.core.count(c__5525__auto__);
var G__30010 = (0);
seq__28576 = G__30007;
chunk__28577 = G__30008;
count__28578 = G__30009;
i__28579 = G__30010;
continue;
} else {
var el = cljs.core.first(seq__28576__$1);
var handler_30012__$1 = ((function (seq__28576,chunk__28577,count__28578,i__28579,el,seq__28576__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__28576,chunk__28577,count__28578,i__28579,el,seq__28576__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30012__$1);


var G__30013 = cljs.core.next(seq__28576__$1);
var G__30014 = null;
var G__30015 = (0);
var G__30016 = (0);
seq__28576 = G__30013;
chunk__28577 = G__30014;
count__28578 = G__30015;
i__28579 = G__30016;
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
var G__28649 = arguments.length;
switch (G__28649) {
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
var seq__28735 = cljs.core.seq(events);
var chunk__28736 = null;
var count__28737 = (0);
var i__28738 = (0);
while(true){
if((i__28738 < count__28737)){
var vec__28758 = chunk__28736.cljs$core$IIndexed$_nth$arity$2(null, i__28738);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28758,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30025 = seq__28735;
var G__30026 = chunk__28736;
var G__30027 = count__28737;
var G__30028 = (i__28738 + (1));
seq__28735 = G__30025;
chunk__28736 = G__30026;
count__28737 = G__30027;
i__28738 = G__30028;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28735);
if(temp__5823__auto__){
var seq__28735__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28735__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28735__$1);
var G__30030 = cljs.core.chunk_rest(seq__28735__$1);
var G__30031 = c__5525__auto__;
var G__30032 = cljs.core.count(c__5525__auto__);
var G__30033 = (0);
seq__28735 = G__30030;
chunk__28736 = G__30031;
count__28737 = G__30032;
i__28738 = G__30033;
continue;
} else {
var vec__28785 = cljs.core.first(seq__28735__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28785,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30038 = cljs.core.next(seq__28735__$1);
var G__30039 = null;
var G__30040 = (0);
var G__30041 = (0);
seq__28735 = G__30038;
chunk__28736 = G__30039;
count__28737 = G__30040;
i__28738 = G__30041;
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
var seq__28794 = cljs.core.seq(styles);
var chunk__28795 = null;
var count__28796 = (0);
var i__28797 = (0);
while(true){
if((i__28797 < count__28796)){
var vec__28840 = chunk__28795.cljs$core$IIndexed$_nth$arity$2(null, i__28797);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30049 = seq__28794;
var G__30050 = chunk__28795;
var G__30051 = count__28796;
var G__30052 = (i__28797 + (1));
seq__28794 = G__30049;
chunk__28795 = G__30050;
count__28796 = G__30051;
i__28797 = G__30052;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28794);
if(temp__5823__auto__){
var seq__28794__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28794__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28794__$1);
var G__30053 = cljs.core.chunk_rest(seq__28794__$1);
var G__30054 = c__5525__auto__;
var G__30055 = cljs.core.count(c__5525__auto__);
var G__30056 = (0);
seq__28794 = G__30053;
chunk__28795 = G__30054;
count__28796 = G__30055;
i__28797 = G__30056;
continue;
} else {
var vec__28859 = cljs.core.first(seq__28794__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28859,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30057 = cljs.core.next(seq__28794__$1);
var G__30058 = null;
var G__30059 = (0);
var G__30060 = (0);
seq__28794 = G__30057;
chunk__28795 = G__30058;
count__28796 = G__30059;
i__28797 = G__30060;
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
var G__28886_30061 = key;
var G__28886_30062__$1 = (((G__28886_30061 instanceof cljs.core.Keyword))?G__28886_30061.fqn:null);
switch (G__28886_30062__$1) {
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
var ks_30066 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_30066,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_30066,"aria-");
}
})())){
el.setAttribute(ks_30066,value);
} else {
(el[ks_30066] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29020){
var map__29023 = p__29020;
var map__29023__$1 = cljs.core.__destructure_map(map__29023);
var props = map__29023__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29023__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29033 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29033,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29033,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29033,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29041 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29041,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29041;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29051 = arguments.length;
switch (G__29051) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29071){
var vec__29073 = p__29071;
var seq__29074 = cljs.core.seq(vec__29073);
var first__29075 = cljs.core.first(seq__29074);
var seq__29074__$1 = cljs.core.next(seq__29074);
var nn = first__29075;
var first__29075__$1 = cljs.core.first(seq__29074__$1);
var seq__29074__$2 = cljs.core.next(seq__29074__$1);
var np = first__29075__$1;
var nc = seq__29074__$2;
var node = vec__29073;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29093 = nn;
var G__29094 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29093,G__29094) : create_fn.call(null, G__29093,G__29094));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29099 = nn;
var G__29100 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29099,G__29100) : create_fn.call(null, G__29099,G__29100));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29111 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29111,(1),null);
var seq__29116_30082 = cljs.core.seq(node_children);
var chunk__29117_30083 = null;
var count__29118_30084 = (0);
var i__29119_30085 = (0);
while(true){
if((i__29119_30085 < count__29118_30084)){
var child_struct_30086 = chunk__29117_30083.cljs$core$IIndexed$_nth$arity$2(null, i__29119_30085);
var children_30087 = shadow.dom.dom_node(child_struct_30086);
if(cljs.core.seq_QMARK_(children_30087)){
var seq__29191_30088 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30087));
var chunk__29193_30089 = null;
var count__29194_30090 = (0);
var i__29195_30091 = (0);
while(true){
if((i__29195_30091 < count__29194_30090)){
var child_30093 = chunk__29193_30089.cljs$core$IIndexed$_nth$arity$2(null, i__29195_30091);
if(cljs.core.truth_(child_30093)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30093);


var G__30094 = seq__29191_30088;
var G__30095 = chunk__29193_30089;
var G__30096 = count__29194_30090;
var G__30097 = (i__29195_30091 + (1));
seq__29191_30088 = G__30094;
chunk__29193_30089 = G__30095;
count__29194_30090 = G__30096;
i__29195_30091 = G__30097;
continue;
} else {
var G__30101 = seq__29191_30088;
var G__30102 = chunk__29193_30089;
var G__30103 = count__29194_30090;
var G__30104 = (i__29195_30091 + (1));
seq__29191_30088 = G__30101;
chunk__29193_30089 = G__30102;
count__29194_30090 = G__30103;
i__29195_30091 = G__30104;
continue;
}
} else {
var temp__5823__auto___30107 = cljs.core.seq(seq__29191_30088);
if(temp__5823__auto___30107){
var seq__29191_30108__$1 = temp__5823__auto___30107;
if(cljs.core.chunked_seq_QMARK_(seq__29191_30108__$1)){
var c__5525__auto___30110 = cljs.core.chunk_first(seq__29191_30108__$1);
var G__30112 = cljs.core.chunk_rest(seq__29191_30108__$1);
var G__30113 = c__5525__auto___30110;
var G__30114 = cljs.core.count(c__5525__auto___30110);
var G__30115 = (0);
seq__29191_30088 = G__30112;
chunk__29193_30089 = G__30113;
count__29194_30090 = G__30114;
i__29195_30091 = G__30115;
continue;
} else {
var child_30116 = cljs.core.first(seq__29191_30108__$1);
if(cljs.core.truth_(child_30116)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30116);


var G__30117 = cljs.core.next(seq__29191_30108__$1);
var G__30118 = null;
var G__30119 = (0);
var G__30120 = (0);
seq__29191_30088 = G__30117;
chunk__29193_30089 = G__30118;
count__29194_30090 = G__30119;
i__29195_30091 = G__30120;
continue;
} else {
var G__30121 = cljs.core.next(seq__29191_30108__$1);
var G__30122 = null;
var G__30123 = (0);
var G__30124 = (0);
seq__29191_30088 = G__30121;
chunk__29193_30089 = G__30122;
count__29194_30090 = G__30123;
i__29195_30091 = G__30124;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30087);
}


var G__30125 = seq__29116_30082;
var G__30126 = chunk__29117_30083;
var G__30127 = count__29118_30084;
var G__30128 = (i__29119_30085 + (1));
seq__29116_30082 = G__30125;
chunk__29117_30083 = G__30126;
count__29118_30084 = G__30127;
i__29119_30085 = G__30128;
continue;
} else {
var temp__5823__auto___30129 = cljs.core.seq(seq__29116_30082);
if(temp__5823__auto___30129){
var seq__29116_30130__$1 = temp__5823__auto___30129;
if(cljs.core.chunked_seq_QMARK_(seq__29116_30130__$1)){
var c__5525__auto___30131 = cljs.core.chunk_first(seq__29116_30130__$1);
var G__30132 = cljs.core.chunk_rest(seq__29116_30130__$1);
var G__30133 = c__5525__auto___30131;
var G__30134 = cljs.core.count(c__5525__auto___30131);
var G__30135 = (0);
seq__29116_30082 = G__30132;
chunk__29117_30083 = G__30133;
count__29118_30084 = G__30134;
i__29119_30085 = G__30135;
continue;
} else {
var child_struct_30136 = cljs.core.first(seq__29116_30130__$1);
var children_30137 = shadow.dom.dom_node(child_struct_30136);
if(cljs.core.seq_QMARK_(children_30137)){
var seq__29209_30138 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30137));
var chunk__29211_30139 = null;
var count__29212_30140 = (0);
var i__29213_30141 = (0);
while(true){
if((i__29213_30141 < count__29212_30140)){
var child_30143 = chunk__29211_30139.cljs$core$IIndexed$_nth$arity$2(null, i__29213_30141);
if(cljs.core.truth_(child_30143)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30143);


var G__30145 = seq__29209_30138;
var G__30146 = chunk__29211_30139;
var G__30147 = count__29212_30140;
var G__30148 = (i__29213_30141 + (1));
seq__29209_30138 = G__30145;
chunk__29211_30139 = G__30146;
count__29212_30140 = G__30147;
i__29213_30141 = G__30148;
continue;
} else {
var G__30150 = seq__29209_30138;
var G__30151 = chunk__29211_30139;
var G__30152 = count__29212_30140;
var G__30153 = (i__29213_30141 + (1));
seq__29209_30138 = G__30150;
chunk__29211_30139 = G__30151;
count__29212_30140 = G__30152;
i__29213_30141 = G__30153;
continue;
}
} else {
var temp__5823__auto___30154__$1 = cljs.core.seq(seq__29209_30138);
if(temp__5823__auto___30154__$1){
var seq__29209_30155__$1 = temp__5823__auto___30154__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29209_30155__$1)){
var c__5525__auto___30156 = cljs.core.chunk_first(seq__29209_30155__$1);
var G__30157 = cljs.core.chunk_rest(seq__29209_30155__$1);
var G__30158 = c__5525__auto___30156;
var G__30159 = cljs.core.count(c__5525__auto___30156);
var G__30160 = (0);
seq__29209_30138 = G__30157;
chunk__29211_30139 = G__30158;
count__29212_30140 = G__30159;
i__29213_30141 = G__30160;
continue;
} else {
var child_30161 = cljs.core.first(seq__29209_30155__$1);
if(cljs.core.truth_(child_30161)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30161);


var G__30163 = cljs.core.next(seq__29209_30155__$1);
var G__30164 = null;
var G__30165 = (0);
var G__30166 = (0);
seq__29209_30138 = G__30163;
chunk__29211_30139 = G__30164;
count__29212_30140 = G__30165;
i__29213_30141 = G__30166;
continue;
} else {
var G__30167 = cljs.core.next(seq__29209_30155__$1);
var G__30168 = null;
var G__30169 = (0);
var G__30170 = (0);
seq__29209_30138 = G__30167;
chunk__29211_30139 = G__30168;
count__29212_30140 = G__30169;
i__29213_30141 = G__30170;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30137);
}


var G__30173 = cljs.core.next(seq__29116_30130__$1);
var G__30174 = null;
var G__30175 = (0);
var G__30176 = (0);
seq__29116_30082 = G__30173;
chunk__29117_30083 = G__30174;
count__29118_30084 = G__30175;
i__29119_30085 = G__30176;
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
var seq__29235 = cljs.core.seq(node);
var chunk__29236 = null;
var count__29237 = (0);
var i__29238 = (0);
while(true){
if((i__29238 < count__29237)){
var n = chunk__29236.cljs$core$IIndexed$_nth$arity$2(null, i__29238);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__30179 = seq__29235;
var G__30180 = chunk__29236;
var G__30181 = count__29237;
var G__30182 = (i__29238 + (1));
seq__29235 = G__30179;
chunk__29236 = G__30180;
count__29237 = G__30181;
i__29238 = G__30182;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__29235);
if(temp__5823__auto__){
var seq__29235__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29235__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29235__$1);
var G__30184 = cljs.core.chunk_rest(seq__29235__$1);
var G__30185 = c__5525__auto__;
var G__30186 = cljs.core.count(c__5525__auto__);
var G__30187 = (0);
seq__29235 = G__30184;
chunk__29236 = G__30185;
count__29237 = G__30186;
i__29238 = G__30187;
continue;
} else {
var n = cljs.core.first(seq__29235__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__30188 = cljs.core.next(seq__29235__$1);
var G__30189 = null;
var G__30190 = (0);
var G__30191 = (0);
seq__29235 = G__30188;
chunk__29236 = G__30189;
count__29237 = G__30190;
i__29238 = G__30191;
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
var G__29257 = arguments.length;
switch (G__29257) {
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
var G__29277 = arguments.length;
switch (G__29277) {
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
var G__29289 = arguments.length;
switch (G__29289) {
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
var len__5726__auto___30204 = arguments.length;
var i__5727__auto___30206 = (0);
while(true){
if((i__5727__auto___30206 < len__5726__auto___30204)){
args__5732__auto__.push((arguments[i__5727__auto___30206]));

var G__30207 = (i__5727__auto___30206 + (1));
i__5727__auto___30206 = G__30207;
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
var seq__29310_30209 = cljs.core.seq(nodes);
var chunk__29311_30210 = null;
var count__29312_30211 = (0);
var i__29313_30212 = (0);
while(true){
if((i__29313_30212 < count__29312_30211)){
var node_30214 = chunk__29311_30210.cljs$core$IIndexed$_nth$arity$2(null, i__29313_30212);
fragment.appendChild(shadow.dom._to_dom(node_30214));


var G__30215 = seq__29310_30209;
var G__30216 = chunk__29311_30210;
var G__30217 = count__29312_30211;
var G__30218 = (i__29313_30212 + (1));
seq__29310_30209 = G__30215;
chunk__29311_30210 = G__30216;
count__29312_30211 = G__30217;
i__29313_30212 = G__30218;
continue;
} else {
var temp__5823__auto___30219 = cljs.core.seq(seq__29310_30209);
if(temp__5823__auto___30219){
var seq__29310_30220__$1 = temp__5823__auto___30219;
if(cljs.core.chunked_seq_QMARK_(seq__29310_30220__$1)){
var c__5525__auto___30221 = cljs.core.chunk_first(seq__29310_30220__$1);
var G__30222 = cljs.core.chunk_rest(seq__29310_30220__$1);
var G__30223 = c__5525__auto___30221;
var G__30224 = cljs.core.count(c__5525__auto___30221);
var G__30225 = (0);
seq__29310_30209 = G__30222;
chunk__29311_30210 = G__30223;
count__29312_30211 = G__30224;
i__29313_30212 = G__30225;
continue;
} else {
var node_30227 = cljs.core.first(seq__29310_30220__$1);
fragment.appendChild(shadow.dom._to_dom(node_30227));


var G__30233 = cljs.core.next(seq__29310_30220__$1);
var G__30234 = null;
var G__30235 = (0);
var G__30236 = (0);
seq__29310_30209 = G__30233;
chunk__29311_30210 = G__30234;
count__29312_30211 = G__30235;
i__29313_30212 = G__30236;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29308){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29308));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29325_30238 = cljs.core.seq(scripts);
var chunk__29326_30239 = null;
var count__29327_30240 = (0);
var i__29328_30241 = (0);
while(true){
if((i__29328_30241 < count__29327_30240)){
var vec__29339_30242 = chunk__29326_30239.cljs$core$IIndexed$_nth$arity$2(null, i__29328_30241);
var script_tag_30243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339_30242,(0),null);
var script_body_30244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29339_30242,(1),null);
eval(script_body_30244);


var G__30246 = seq__29325_30238;
var G__30247 = chunk__29326_30239;
var G__30248 = count__29327_30240;
var G__30249 = (i__29328_30241 + (1));
seq__29325_30238 = G__30246;
chunk__29326_30239 = G__30247;
count__29327_30240 = G__30248;
i__29328_30241 = G__30249;
continue;
} else {
var temp__5823__auto___30250 = cljs.core.seq(seq__29325_30238);
if(temp__5823__auto___30250){
var seq__29325_30251__$1 = temp__5823__auto___30250;
if(cljs.core.chunked_seq_QMARK_(seq__29325_30251__$1)){
var c__5525__auto___30252 = cljs.core.chunk_first(seq__29325_30251__$1);
var G__30253 = cljs.core.chunk_rest(seq__29325_30251__$1);
var G__30254 = c__5525__auto___30252;
var G__30255 = cljs.core.count(c__5525__auto___30252);
var G__30256 = (0);
seq__29325_30238 = G__30253;
chunk__29326_30239 = G__30254;
count__29327_30240 = G__30255;
i__29328_30241 = G__30256;
continue;
} else {
var vec__29346_30258 = cljs.core.first(seq__29325_30251__$1);
var script_tag_30259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29346_30258,(0),null);
var script_body_30260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29346_30258,(1),null);
eval(script_body_30260);


var G__30261 = cljs.core.next(seq__29325_30251__$1);
var G__30262 = null;
var G__30263 = (0);
var G__30264 = (0);
seq__29325_30238 = G__30261;
chunk__29326_30239 = G__30262;
count__29327_30240 = G__30263;
i__29328_30241 = G__30264;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29352){
var vec__29354 = p__29352;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29354,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29354,(1),null);
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
var G__29371 = arguments.length;
switch (G__29371) {
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
var seq__29402 = cljs.core.seq(style_keys);
var chunk__29403 = null;
var count__29404 = (0);
var i__29405 = (0);
while(true){
if((i__29405 < count__29404)){
var it = chunk__29403.cljs$core$IIndexed$_nth$arity$2(null, i__29405);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30286 = seq__29402;
var G__30287 = chunk__29403;
var G__30288 = count__29404;
var G__30289 = (i__29405 + (1));
seq__29402 = G__30286;
chunk__29403 = G__30287;
count__29404 = G__30288;
i__29405 = G__30289;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__29402);
if(temp__5823__auto__){
var seq__29402__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29402__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__29402__$1);
var G__30290 = cljs.core.chunk_rest(seq__29402__$1);
var G__30291 = c__5525__auto__;
var G__30292 = cljs.core.count(c__5525__auto__);
var G__30293 = (0);
seq__29402 = G__30290;
chunk__29403 = G__30291;
count__29404 = G__30292;
i__29405 = G__30293;
continue;
} else {
var it = cljs.core.first(seq__29402__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30295 = cljs.core.next(seq__29402__$1);
var G__30296 = null;
var G__30297 = (0);
var G__30298 = (0);
seq__29402 = G__30295;
chunk__29403 = G__30296;
count__29404 = G__30297;
i__29405 = G__30298;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29419,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29429 = k29419;
var G__29429__$1 = (((G__29429 instanceof cljs.core.Keyword))?G__29429.fqn:null);
switch (G__29429__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29419,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29433){
var vec__29435 = p__29433;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29418){
var self__ = this;
var G__29418__$1 = this;
return (new cljs.core.RecordIter((0),G__29418__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29420,other29421){
var self__ = this;
var this29420__$1 = this;
return (((!((other29421 == null)))) && ((((this29420__$1.constructor === other29421.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29420__$1.x,other29421.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29420__$1.y,other29421.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29420__$1.__extmap,other29421.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29419){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29461 = k29419;
var G__29461__$1 = (((G__29461 instanceof cljs.core.Keyword))?G__29461.fqn:null);
switch (G__29461__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29419);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29418){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29466 = cljs.core.keyword_identical_QMARK_;
var expr__29467 = k__5309__auto__;
if(cljs.core.truth_((pred__29466.cljs$core$IFn$_invoke$arity$2 ? pred__29466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29467) : pred__29466.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__29467)))){
return (new shadow.dom.Coordinate(G__29418,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29466.cljs$core$IFn$_invoke$arity$2 ? pred__29466.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29467) : pred__29466.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__29467)))){
return (new shadow.dom.Coordinate(self__.x,G__29418,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29418),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29418){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29418,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29423){
var extmap__5342__auto__ = (function (){var G__29491 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29423,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29423)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29491);
} else {
return G__29491;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29423),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29423),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k29509,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__29522 = k29509;
var G__29522__$1 = (((G__29522 instanceof cljs.core.Keyword))?G__29522.fqn:null);
switch (G__29522__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29509,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__29526){
var vec__29527 = p__29526;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29527,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29527,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29508){
var self__ = this;
var G__29508__$1 = this;
return (new cljs.core.RecordIter((0),G__29508__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29510,other29511){
var self__ = this;
var this29510__$1 = this;
return (((!((other29511 == null)))) && ((((this29510__$1.constructor === other29511.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29510__$1.w,other29511.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29510__$1.h,other29511.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29510__$1.__extmap,other29511.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k29509){
var self__ = this;
var this__5307__auto____$1 = this;
var G__29539 = k29509;
var G__29539__$1 = (((G__29539 instanceof cljs.core.Keyword))?G__29539.fqn:null);
switch (G__29539__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29509);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__29508){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__29541 = cljs.core.keyword_identical_QMARK_;
var expr__29542 = k__5309__auto__;
if(cljs.core.truth_((pred__29541.cljs$core$IFn$_invoke$arity$2 ? pred__29541.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29542) : pred__29541.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__29542)))){
return (new shadow.dom.Size(G__29508,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29541.cljs$core$IFn$_invoke$arity$2 ? pred__29541.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29542) : pred__29541.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__29542)))){
return (new shadow.dom.Size(self__.w,G__29508,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__29508),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__29508){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29508,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29516){
var extmap__5342__auto__ = (function (){var G__29558 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29516,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29516)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29558);
} else {
return G__29558;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29516),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29516),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__30395 = (i + (1));
var G__30396 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30395;
ret = G__30396;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29594){
var vec__29595 = p__29594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29595,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29603 = arguments.length;
switch (G__29603) {
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
var G__30421 = ps;
var G__30422 = (i + (1));
el__$1 = G__30421;
i = G__30422;
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
var vec__29652 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29652,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29652,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29652,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29656_30436 = cljs.core.seq(props);
var chunk__29657_30437 = null;
var count__29658_30438 = (0);
var i__29659_30439 = (0);
while(true){
if((i__29659_30439 < count__29658_30438)){
var vec__29683_30440 = chunk__29657_30437.cljs$core$IIndexed$_nth$arity$2(null, i__29659_30439);
var k_30441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29683_30440,(0),null);
var v_30442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29683_30440,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_30441);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30441),v_30442);


var G__30447 = seq__29656_30436;
var G__30448 = chunk__29657_30437;
var G__30449 = count__29658_30438;
var G__30450 = (i__29659_30439 + (1));
seq__29656_30436 = G__30447;
chunk__29657_30437 = G__30448;
count__29658_30438 = G__30449;
i__29659_30439 = G__30450;
continue;
} else {
var temp__5823__auto___30451 = cljs.core.seq(seq__29656_30436);
if(temp__5823__auto___30451){
var seq__29656_30452__$1 = temp__5823__auto___30451;
if(cljs.core.chunked_seq_QMARK_(seq__29656_30452__$1)){
var c__5525__auto___30453 = cljs.core.chunk_first(seq__29656_30452__$1);
var G__30454 = cljs.core.chunk_rest(seq__29656_30452__$1);
var G__30455 = c__5525__auto___30453;
var G__30456 = cljs.core.count(c__5525__auto___30453);
var G__30457 = (0);
seq__29656_30436 = G__30454;
chunk__29657_30437 = G__30455;
count__29658_30438 = G__30456;
i__29659_30439 = G__30457;
continue;
} else {
var vec__29701_30458 = cljs.core.first(seq__29656_30452__$1);
var k_30459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29701_30458,(0),null);
var v_30460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29701_30458,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_30459);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30459),v_30460);


var G__30461 = cljs.core.next(seq__29656_30452__$1);
var G__30462 = null;
var G__30463 = (0);
var G__30464 = (0);
seq__29656_30436 = G__30461;
chunk__29657_30437 = G__30462;
count__29658_30438 = G__30463;
i__29659_30439 = G__30464;
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
var vec__29723 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29723,(1),null);
var seq__29727_30466 = cljs.core.seq(node_children);
var chunk__29729_30467 = null;
var count__29730_30468 = (0);
var i__29731_30469 = (0);
while(true){
if((i__29731_30469 < count__29730_30468)){
var child_struct_30470 = chunk__29729_30467.cljs$core$IIndexed$_nth$arity$2(null, i__29731_30469);
if((!((child_struct_30470 == null)))){
if(typeof child_struct_30470 === 'string'){
var text_30473 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30473),child_struct_30470].join(''));
} else {
var children_30474 = shadow.dom.svg_node(child_struct_30470);
if(cljs.core.seq_QMARK_(children_30474)){
var seq__29789_30475 = cljs.core.seq(children_30474);
var chunk__29791_30476 = null;
var count__29792_30477 = (0);
var i__29793_30478 = (0);
while(true){
if((i__29793_30478 < count__29792_30477)){
var child_30479 = chunk__29791_30476.cljs$core$IIndexed$_nth$arity$2(null, i__29793_30478);
if(cljs.core.truth_(child_30479)){
node.appendChild(child_30479);


var G__30480 = seq__29789_30475;
var G__30481 = chunk__29791_30476;
var G__30482 = count__29792_30477;
var G__30483 = (i__29793_30478 + (1));
seq__29789_30475 = G__30480;
chunk__29791_30476 = G__30481;
count__29792_30477 = G__30482;
i__29793_30478 = G__30483;
continue;
} else {
var G__30484 = seq__29789_30475;
var G__30486 = chunk__29791_30476;
var G__30487 = count__29792_30477;
var G__30488 = (i__29793_30478 + (1));
seq__29789_30475 = G__30484;
chunk__29791_30476 = G__30486;
count__29792_30477 = G__30487;
i__29793_30478 = G__30488;
continue;
}
} else {
var temp__5823__auto___30489 = cljs.core.seq(seq__29789_30475);
if(temp__5823__auto___30489){
var seq__29789_30491__$1 = temp__5823__auto___30489;
if(cljs.core.chunked_seq_QMARK_(seq__29789_30491__$1)){
var c__5525__auto___30493 = cljs.core.chunk_first(seq__29789_30491__$1);
var G__30494 = cljs.core.chunk_rest(seq__29789_30491__$1);
var G__30495 = c__5525__auto___30493;
var G__30496 = cljs.core.count(c__5525__auto___30493);
var G__30497 = (0);
seq__29789_30475 = G__30494;
chunk__29791_30476 = G__30495;
count__29792_30477 = G__30496;
i__29793_30478 = G__30497;
continue;
} else {
var child_30499 = cljs.core.first(seq__29789_30491__$1);
if(cljs.core.truth_(child_30499)){
node.appendChild(child_30499);


var G__30500 = cljs.core.next(seq__29789_30491__$1);
var G__30501 = null;
var G__30502 = (0);
var G__30503 = (0);
seq__29789_30475 = G__30500;
chunk__29791_30476 = G__30501;
count__29792_30477 = G__30502;
i__29793_30478 = G__30503;
continue;
} else {
var G__30504 = cljs.core.next(seq__29789_30491__$1);
var G__30505 = null;
var G__30506 = (0);
var G__30507 = (0);
seq__29789_30475 = G__30504;
chunk__29791_30476 = G__30505;
count__29792_30477 = G__30506;
i__29793_30478 = G__30507;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30474);
}
}


var G__30508 = seq__29727_30466;
var G__30509 = chunk__29729_30467;
var G__30510 = count__29730_30468;
var G__30511 = (i__29731_30469 + (1));
seq__29727_30466 = G__30508;
chunk__29729_30467 = G__30509;
count__29730_30468 = G__30510;
i__29731_30469 = G__30511;
continue;
} else {
var G__30512 = seq__29727_30466;
var G__30513 = chunk__29729_30467;
var G__30514 = count__29730_30468;
var G__30515 = (i__29731_30469 + (1));
seq__29727_30466 = G__30512;
chunk__29729_30467 = G__30513;
count__29730_30468 = G__30514;
i__29731_30469 = G__30515;
continue;
}
} else {
var temp__5823__auto___30516 = cljs.core.seq(seq__29727_30466);
if(temp__5823__auto___30516){
var seq__29727_30517__$1 = temp__5823__auto___30516;
if(cljs.core.chunked_seq_QMARK_(seq__29727_30517__$1)){
var c__5525__auto___30518 = cljs.core.chunk_first(seq__29727_30517__$1);
var G__30519 = cljs.core.chunk_rest(seq__29727_30517__$1);
var G__30520 = c__5525__auto___30518;
var G__30521 = cljs.core.count(c__5525__auto___30518);
var G__30522 = (0);
seq__29727_30466 = G__30519;
chunk__29729_30467 = G__30520;
count__29730_30468 = G__30521;
i__29731_30469 = G__30522;
continue;
} else {
var child_struct_30523 = cljs.core.first(seq__29727_30517__$1);
if((!((child_struct_30523 == null)))){
if(typeof child_struct_30523 === 'string'){
var text_30524 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30524),child_struct_30523].join(''));
} else {
var children_30525 = shadow.dom.svg_node(child_struct_30523);
if(cljs.core.seq_QMARK_(children_30525)){
var seq__29814_30528 = cljs.core.seq(children_30525);
var chunk__29817_30529 = null;
var count__29819_30530 = (0);
var i__29820_30531 = (0);
while(true){
if((i__29820_30531 < count__29819_30530)){
var child_30532 = chunk__29817_30529.cljs$core$IIndexed$_nth$arity$2(null, i__29820_30531);
if(cljs.core.truth_(child_30532)){
node.appendChild(child_30532);


var G__30533 = seq__29814_30528;
var G__30534 = chunk__29817_30529;
var G__30535 = count__29819_30530;
var G__30536 = (i__29820_30531 + (1));
seq__29814_30528 = G__30533;
chunk__29817_30529 = G__30534;
count__29819_30530 = G__30535;
i__29820_30531 = G__30536;
continue;
} else {
var G__30537 = seq__29814_30528;
var G__30538 = chunk__29817_30529;
var G__30539 = count__29819_30530;
var G__30540 = (i__29820_30531 + (1));
seq__29814_30528 = G__30537;
chunk__29817_30529 = G__30538;
count__29819_30530 = G__30539;
i__29820_30531 = G__30540;
continue;
}
} else {
var temp__5823__auto___30541__$1 = cljs.core.seq(seq__29814_30528);
if(temp__5823__auto___30541__$1){
var seq__29814_30543__$1 = temp__5823__auto___30541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29814_30543__$1)){
var c__5525__auto___30544 = cljs.core.chunk_first(seq__29814_30543__$1);
var G__30545 = cljs.core.chunk_rest(seq__29814_30543__$1);
var G__30546 = c__5525__auto___30544;
var G__30547 = cljs.core.count(c__5525__auto___30544);
var G__30548 = (0);
seq__29814_30528 = G__30545;
chunk__29817_30529 = G__30546;
count__29819_30530 = G__30547;
i__29820_30531 = G__30548;
continue;
} else {
var child_30549 = cljs.core.first(seq__29814_30543__$1);
if(cljs.core.truth_(child_30549)){
node.appendChild(child_30549);


var G__30550 = cljs.core.next(seq__29814_30543__$1);
var G__30551 = null;
var G__30552 = (0);
var G__30553 = (0);
seq__29814_30528 = G__30550;
chunk__29817_30529 = G__30551;
count__29819_30530 = G__30552;
i__29820_30531 = G__30553;
continue;
} else {
var G__30554 = cljs.core.next(seq__29814_30543__$1);
var G__30555 = null;
var G__30556 = (0);
var G__30557 = (0);
seq__29814_30528 = G__30554;
chunk__29817_30529 = G__30555;
count__29819_30530 = G__30556;
i__29820_30531 = G__30557;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30525);
}
}


var G__30559 = cljs.core.next(seq__29727_30517__$1);
var G__30560 = null;
var G__30561 = (0);
var G__30562 = (0);
seq__29727_30466 = G__30559;
chunk__29729_30467 = G__30560;
count__29730_30468 = G__30561;
i__29731_30469 = G__30562;
continue;
} else {
var G__30564 = cljs.core.next(seq__29727_30517__$1);
var G__30565 = null;
var G__30566 = (0);
var G__30567 = (0);
seq__29727_30466 = G__30564;
chunk__29729_30467 = G__30565;
count__29730_30468 = G__30566;
i__29731_30469 = G__30567;
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
var len__5726__auto___30575 = arguments.length;
var i__5727__auto___30576 = (0);
while(true){
if((i__5727__auto___30576 < len__5726__auto___30575)){
args__5732__auto__.push((arguments[i__5727__auto___30576]));

var G__30577 = (i__5727__auto___30576 + (1));
i__5727__auto___30576 = G__30577;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29879){
var G__29880 = cljs.core.first(seq29879);
var seq29879__$1 = cljs.core.next(seq29879);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29880,seq29879__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
