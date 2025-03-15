goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28252){
var map__28253 = p__28252;
var map__28253__$1 = cljs.core.__destructure_map(map__28253);
var runtime = map__28253__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28253__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28809 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28809)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28256 = runtime;
var G__28257 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28809);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28256,G__28257) : shadow.remote.runtime.shared.process.call(null, G__28256,G__28257));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28263,res){
var map__28264 = p__28263;
var map__28264__$1 = cljs.core.__destructure_map(map__28264);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28264__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28264__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28268 = res;
var G__28268__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28268,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28268);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28268__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28268__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28279 = arguments.length;
switch (G__28279) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28284,msg,handlers,timeout_after_ms){
var map__28285 = p__28284;
var map__28285__$1 = cljs.core.__destructure_map(map__28285);
var runtime = map__28285__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28285__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___28880 = arguments.length;
var i__5727__auto___28881 = (0);
while(true){
if((i__5727__auto___28881 < len__5726__auto___28880)){
args__5732__auto__.push((arguments[i__5727__auto___28881]));

var G__28884 = (i__5727__auto___28881 + (1));
i__5727__auto___28881 = G__28884;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28298,ev,args){
var map__28299 = p__28298;
var map__28299__$1 = cljs.core.__destructure_map(map__28299);
var runtime = map__28299__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28299__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28301 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28304 = null;
var count__28305 = (0);
var i__28306 = (0);
while(true){
if((i__28306 < count__28305)){
var ext = chunk__28304.cljs$core$IIndexed$_nth$arity$2(null, i__28306);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28891 = seq__28301;
var G__28892 = chunk__28304;
var G__28893 = count__28305;
var G__28894 = (i__28306 + (1));
seq__28301 = G__28891;
chunk__28304 = G__28892;
count__28305 = G__28893;
i__28306 = G__28894;
continue;
} else {
var G__28896 = seq__28301;
var G__28897 = chunk__28304;
var G__28898 = count__28305;
var G__28899 = (i__28306 + (1));
seq__28301 = G__28896;
chunk__28304 = G__28897;
count__28305 = G__28898;
i__28306 = G__28899;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28301);
if(temp__5823__auto__){
var seq__28301__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28301__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28301__$1);
var G__28906 = cljs.core.chunk_rest(seq__28301__$1);
var G__28907 = c__5525__auto__;
var G__28908 = cljs.core.count(c__5525__auto__);
var G__28909 = (0);
seq__28301 = G__28906;
chunk__28304 = G__28907;
count__28305 = G__28908;
i__28306 = G__28909;
continue;
} else {
var ext = cljs.core.first(seq__28301__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28917 = cljs.core.next(seq__28301__$1);
var G__28918 = null;
var G__28919 = (0);
var G__28920 = (0);
seq__28301 = G__28917;
chunk__28304 = G__28918;
count__28305 = G__28919;
i__28306 = G__28920;
continue;
} else {
var G__28922 = cljs.core.next(seq__28301__$1);
var G__28923 = null;
var G__28924 = (0);
var G__28925 = (0);
seq__28301 = G__28922;
chunk__28304 = G__28923;
count__28305 = G__28924;
i__28306 = G__28925;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28289){
var G__28290 = cljs.core.first(seq28289);
var seq28289__$1 = cljs.core.next(seq28289);
var G__28291 = cljs.core.first(seq28289__$1);
var seq28289__$2 = cljs.core.next(seq28289__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28290,G__28291,seq28289__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28337,p__28338){
var map__28340 = p__28337;
var map__28340__$1 = cljs.core.__destructure_map(map__28340);
var runtime = map__28340__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28340__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28345 = p__28338;
var map__28345__$1 = cljs.core.__destructure_map(map__28345);
var msg = map__28345__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28345__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__28364 = cljs.core.deref(state_ref);
var map__28364__$1 = cljs.core.__destructure_map(map__28364);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28364__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28364__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28401,msg){
var map__28405 = p__28401;
var map__28405__$1 = cljs.core.__destructure_map(map__28405);
var runtime = map__28405__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28405__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28454,key,p__28455){
var map__28460 = p__28454;
var map__28460__$1 = cljs.core.__destructure_map(map__28460);
var state = map__28460__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28460__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28461 = p__28455;
var map__28461__$1 = cljs.core.__destructure_map(map__28461);
var spec = map__28461__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28461__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28461__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28498,key,spec){
var map__28503 = p__28498;
var map__28503__$1 = cljs.core.__destructure_map(map__28503);
var runtime = map__28503__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___28942 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___28942 == null)){
} else {
var on_welcome_28943 = temp__5827__auto___28942;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_28943.cljs$core$IFn$_invoke$arity$0 ? on_welcome_28943.cljs$core$IFn$_invoke$arity$0() : on_welcome_28943.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28521_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28521_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28523_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28523_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28526_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28526_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28528_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28528_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28529_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28529_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28575,key){
var map__28582 = p__28575;
var map__28582__$1 = cljs.core.__destructure_map(map__28582);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28582__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28598,msg){
var map__28599 = p__28598;
var map__28599__$1 = cljs.core.__destructure_map(map__28599);
var runtime = map__28599__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28599__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28627,p__28628){
var map__28633 = p__28627;
var map__28633__$1 = cljs.core.__destructure_map(map__28633);
var runtime = map__28633__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28633__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28635 = p__28628;
var map__28635__$1 = cljs.core.__destructure_map(map__28635);
var msg = map__28635__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28635__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28635__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__28690 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28692 = null;
var count__28693 = (0);
var i__28694 = (0);
while(true){
if((i__28694 < count__28693)){
var map__28745 = chunk__28692.cljs$core$IIndexed$_nth$arity$2(null, i__28694);
var map__28745__$1 = cljs.core.__destructure_map(map__28745);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28745__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28964 = seq__28690;
var G__28965 = chunk__28692;
var G__28966 = count__28693;
var G__28967 = (i__28694 + (1));
seq__28690 = G__28964;
chunk__28692 = G__28965;
count__28693 = G__28966;
i__28694 = G__28967;
continue;
} else {
var G__28968 = seq__28690;
var G__28969 = chunk__28692;
var G__28970 = count__28693;
var G__28971 = (i__28694 + (1));
seq__28690 = G__28968;
chunk__28692 = G__28969;
count__28693 = G__28970;
i__28694 = G__28971;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__28690);
if(temp__5823__auto__){
var seq__28690__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28690__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__28690__$1);
var G__28973 = cljs.core.chunk_rest(seq__28690__$1);
var G__28974 = c__5525__auto__;
var G__28975 = cljs.core.count(c__5525__auto__);
var G__28976 = (0);
seq__28690 = G__28973;
chunk__28692 = G__28974;
count__28693 = G__28975;
i__28694 = G__28976;
continue;
} else {
var map__28761 = cljs.core.first(seq__28690__$1);
var map__28761__$1 = cljs.core.__destructure_map(map__28761);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28761__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__28978 = cljs.core.next(seq__28690__$1);
var G__28979 = null;
var G__28980 = (0);
var G__28981 = (0);
seq__28690 = G__28978;
chunk__28692 = G__28979;
count__28693 = G__28980;
i__28694 = G__28981;
continue;
} else {
var G__28983 = cljs.core.next(seq__28690__$1);
var G__28984 = null;
var G__28985 = (0);
var G__28986 = (0);
seq__28690 = G__28983;
chunk__28692 = G__28984;
count__28693 = G__28985;
i__28694 = G__28986;
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
