goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__39221,p__39222){
var map__39223 = p__39221;
var map__39223__$1 = cljs.core.__destructure_map(map__39223);
var svc = map__39223__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39223__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39224 = p__39222;
var map__39224__$1 = cljs.core.__destructure_map(map__39224);
var msg = map__39224__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39224__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39224__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39224__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39224__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__39244,p__39245){
var map__39249 = p__39244;
var map__39249__$1 = cljs.core.__destructure_map(map__39249);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39249__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__39250 = p__39245;
var map__39250__$1 = cljs.core.__destructure_map(map__39250);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39250__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__39253,p__39254){
var map__39255 = p__39253;
var map__39255__$1 = cljs.core.__destructure_map(map__39255);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39255__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39255__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__39256 = p__39254;
var map__39256__$1 = cljs.core.__destructure_map(map__39256);
var msg = map__39256__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39256__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__39259,tid){
var map__39260 = p__39259;
var map__39260__$1 = cljs.core.__destructure_map(map__39260);
var svc = map__39260__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39260__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__39275 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__39276 = null;
var count__39277 = (0);
var i__39278 = (0);
while(true){
if((i__39278 < count__39277)){
var vec__39303 = chunk__39276.cljs$core$IIndexed$_nth$arity$2(null, i__39278);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39326 = seq__39275;
var G__39327 = chunk__39276;
var G__39328 = count__39277;
var G__39329 = (i__39278 + (1));
seq__39275 = G__39326;
chunk__39276 = G__39327;
count__39277 = G__39328;
i__39278 = G__39329;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__39275);
if(temp__5823__auto__){
var seq__39275__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39275__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39275__$1);
var G__39331 = cljs.core.chunk_rest(seq__39275__$1);
var G__39332 = c__5525__auto__;
var G__39333 = cljs.core.count(c__5525__auto__);
var G__39334 = (0);
seq__39275 = G__39331;
chunk__39276 = G__39332;
count__39277 = G__39333;
i__39278 = G__39334;
continue;
} else {
var vec__39308 = cljs.core.first(seq__39275__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39308,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39308,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__39338 = cljs.core.next(seq__39275__$1);
var G__39339 = null;
var G__39340 = (0);
var G__39341 = (0);
seq__39275 = G__39338;
chunk__39276 = G__39339;
count__39277 = G__39340;
i__39278 = G__39341;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__39263_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__39263_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__39264_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__39264_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__39265_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__39265_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__39266_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__39266_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__39313){
var map__39314 = p__39313;
var map__39314__$1 = cljs.core.__destructure_map(map__39314);
var svc = map__39314__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39314__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39314__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
