goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28257){
var map__28258 = p__28257;
var map__28258__$1 = cljs.core.__destructure_map(map__28258);
var runtime = map__28258__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28258__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28494 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28494)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28260 = runtime;
var G__28261 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28494);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28260,G__28261) : shadow.remote.runtime.shared.process.call(null, G__28260,G__28261));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28266,res){
var map__28268 = p__28266;
var map__28268__$1 = cljs.core.__destructure_map(map__28268);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28268__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28268__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28269 = res;
var G__28269__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28269,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28269);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28269__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28269__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28273 = arguments.length;
switch (G__28273) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28275,msg,handlers,timeout_after_ms){
var map__28276 = p__28275;
var map__28276__$1 = cljs.core.__destructure_map(map__28276);
var runtime = map__28276__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28276__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___28575 = arguments.length;
var i__5727__auto___28576 = (0);
while(true){
if((i__5727__auto___28576 < len__5726__auto___28575)){
args__5732__auto__.push((arguments[i__5727__auto___28576]));

var G__28577 = (i__5727__auto___28576 + (1));
i__5727__auto___28576 = G__28577;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28289,ev,args){
var map__28290 = p__28289;
var map__28290__$1 = cljs.core.__destructure_map(map__28290);
var runtime = map__28290__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28293 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28296 = null;
var count__28297 = (0);
var i__28298 = (0);
while(true){
if((i__28298 < count__28297)){
var ext = chunk__28296.cljs$core$IIndexed$_nth$arity$2(null, i__28298);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28586 = seq__28293;
var G__28587 = chunk__28296;
var G__28588 = count__28297;
var G__28589 = (i__28298 + (1));
seq__28293 = G__28586;
chunk__28296 = G__28587;
count__28297 = G__28588;
i__28298 = G__28589;
continue;
} else {
var G__28590 = seq__28293;
var G__28591 = chunk__28296;
var G__28592 = count__28297;
var G__28593 = (i__28298 + (1));
seq__28293 = G__28590;
chunk__28296 = G__28591;
count__28297 = G__28592;
i__28298 = G__28593;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28293);
if(temp__5823__auto__){
var seq__28293__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28293__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28293__$1);
var G__28601 = cljs.core.chunk_rest(seq__28293__$1);
var G__28602 = c__5525__auto__;
var G__28603 = cljs.core.count(c__5525__auto__);
var G__28604 = (0);
seq__28293 = G__28601;
chunk__28296 = G__28602;
count__28297 = G__28603;
i__28298 = G__28604;
continue;
} else {
var ext = cljs.core.first(seq__28293__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28608 = cljs.core.next(seq__28293__$1);
var G__28609 = null;
var G__28610 = (0);
var G__28611 = (0);
seq__28293 = G__28608;
chunk__28296 = G__28609;
count__28297 = G__28610;
i__28298 = G__28611;
continue;
} else {
var G__28613 = cljs.core.next(seq__28293__$1);
var G__28614 = null;
var G__28615 = (0);
var G__28616 = (0);
seq__28293 = G__28613;
chunk__28296 = G__28614;
count__28297 = G__28615;
i__28298 = G__28616;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28283){
var G__28284 = cljs.core.first(seq28283);
var seq28283__$1 = cljs.core.next(seq28283);
var G__28285 = cljs.core.first(seq28283__$1);
var seq28283__$2 = cljs.core.next(seq28283__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28284,G__28285,seq28283__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28315,p__28316){
var map__28317 = p__28315;
var map__28317__$1 = cljs.core.__destructure_map(map__28317);
var runtime = map__28317__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28317__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28318 = p__28316;
var map__28318__$1 = cljs.core.__destructure_map(map__28318);
var msg = map__28318__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28318__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28328 = cljs.core.deref(state_ref);
var map__28328__$1 = cljs.core.__destructure_map(map__28328);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28328__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28328__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28339,msg){
var map__28341 = p__28339;
var map__28341__$1 = cljs.core.__destructure_map(map__28341);
var runtime = map__28341__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28353,key,p__28354){
var map__28355 = p__28353;
var map__28355__$1 = cljs.core.__destructure_map(map__28355);
var state = map__28355__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28355__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28356 = p__28354;
var map__28356__$1 = cljs.core.__destructure_map(map__28356);
var spec = map__28356__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28356__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28356__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28363,key,spec){
var map__28364 = p__28363;
var map__28364__$1 = cljs.core.__destructure_map(map__28364);
var runtime = map__28364__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___28696 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___28696 == null)){
} else {
var on_welcome_28727 = temp__5827__auto___28696;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_28727.cljs$core$IFn$_invoke$arity$0 ? on_welcome_28727.cljs$core$IFn$_invoke$arity$0() : on_welcome_28727.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28371_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28371_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28372_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28372_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28373_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28373_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28374_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28374_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28375_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28375_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28381,key){
var map__28384 = p__28381;
var map__28384__$1 = cljs.core.__destructure_map(map__28384);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28384__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28389,msg){
var map__28391 = p__28389;
var map__28391__$1 = cljs.core.__destructure_map(map__28391);
var runtime = map__28391__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28391__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28397,p__28398){
var map__28400 = p__28397;
var map__28400__$1 = cljs.core.__destructure_map(map__28400);
var runtime = map__28400__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28400__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28401 = p__28398;
var map__28401__$1 = cljs.core.__destructure_map(map__28401);
var msg = map__28401__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28401__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__28408 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28410 = null;
var count__28411 = (0);
var i__28412 = (0);
while(true){
if((i__28412 < count__28411)){
var map__28462 = chunk__28410.cljs$core$IIndexed$_nth$arity$2(null, i__28412);
var map__28462__$1 = cljs.core.__destructure_map(map__28462);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28462__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28809 = seq__28408;
var G__28810 = chunk__28410;
var G__28811 = count__28411;
var G__28812 = (i__28412 + (1));
seq__28408 = G__28809;
chunk__28410 = G__28810;
count__28411 = G__28811;
i__28412 = G__28812;
continue;
} else {
var G__28813 = seq__28408;
var G__28814 = chunk__28410;
var G__28815 = count__28411;
var G__28816 = (i__28412 + (1));
seq__28408 = G__28813;
chunk__28410 = G__28814;
count__28411 = G__28815;
i__28412 = G__28816;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28408);
if(temp__5823__auto__){
var seq__28408__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28408__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28408__$1);
var G__28821 = cljs.core.chunk_rest(seq__28408__$1);
var G__28822 = c__5525__auto__;
var G__28823 = cljs.core.count(c__5525__auto__);
var G__28824 = (0);
seq__28408 = G__28821;
chunk__28410 = G__28822;
count__28411 = G__28823;
i__28412 = G__28824;
continue;
} else {
var map__28477 = cljs.core.first(seq__28408__$1);
var map__28477__$1 = cljs.core.__destructure_map(map__28477);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28477__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28828 = cljs.core.next(seq__28408__$1);
var G__28829 = null;
var G__28830 = (0);
var G__28831 = (0);
seq__28408 = G__28828;
chunk__28410 = G__28829;
count__28411 = G__28830;
i__28412 = G__28831;
continue;
} else {
var G__28832 = cljs.core.next(seq__28408__$1);
var G__28833 = null;
var G__28834 = (0);
var G__28835 = (0);
seq__28408 = G__28832;
chunk__28410 = G__28833;
count__28411 = G__28834;
i__28412 = G__28835;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
