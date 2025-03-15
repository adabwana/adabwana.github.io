goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___40761 = arguments.length;
var i__5727__auto___40762 = (0);
while(true){
if((i__5727__auto___40762 < len__5726__auto___40761)){
args__5732__auto__.push((arguments[i__5727__auto___40762]));

var G__40763 = (i__5727__auto___40762 + (1));
i__5727__auto___40762 = G__40763;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40016){
var G__40017 = cljs.core.first(seq40016);
var seq40016__$1 = cljs.core.next(seq40016);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40017,seq40016__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40038 = cljs.core.seq(sources);
var chunk__40039 = null;
var count__40040 = (0);
var i__40041 = (0);
while(true){
if((i__40041 < count__40040)){
var map__40050 = chunk__40039.cljs$core$IIndexed$_nth$arity$2(null, i__40041);
var map__40050__$1 = cljs.core.__destructure_map(map__40050);
var src = map__40050__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40050__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40050__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40050__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40050__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40051){var e_40768 = e40051;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40768);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40768.message)].join('')));
}

var G__40769 = seq__40038;
var G__40770 = chunk__40039;
var G__40771 = count__40040;
var G__40772 = (i__40041 + (1));
seq__40038 = G__40769;
chunk__40039 = G__40770;
count__40040 = G__40771;
i__40041 = G__40772;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40038);
if(temp__5823__auto__){
var seq__40038__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40038__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40038__$1);
var G__40773 = cljs.core.chunk_rest(seq__40038__$1);
var G__40774 = c__5525__auto__;
var G__40775 = cljs.core.count(c__5525__auto__);
var G__40776 = (0);
seq__40038 = G__40773;
chunk__40039 = G__40774;
count__40040 = G__40775;
i__40041 = G__40776;
continue;
} else {
var map__40052 = cljs.core.first(seq__40038__$1);
var map__40052__$1 = cljs.core.__destructure_map(map__40052);
var src = map__40052__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40052__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40052__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40052__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40052__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40053){var e_40777 = e40053;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40777);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40777.message)].join('')));
}

var G__40778 = cljs.core.next(seq__40038__$1);
var G__40779 = null;
var G__40780 = (0);
var G__40781 = (0);
seq__40038 = G__40778;
chunk__40039 = G__40779;
count__40040 = G__40780;
i__40041 = G__40781;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__40063 = cljs.core.seq(js_requires);
var chunk__40064 = null;
var count__40065 = (0);
var i__40066 = (0);
while(true){
if((i__40066 < count__40065)){
var js_ns = chunk__40064.cljs$core$IIndexed$_nth$arity$2(null, i__40066);
var require_str_40783 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40783);


var G__40784 = seq__40063;
var G__40785 = chunk__40064;
var G__40786 = count__40065;
var G__40787 = (i__40066 + (1));
seq__40063 = G__40784;
chunk__40064 = G__40785;
count__40065 = G__40786;
i__40066 = G__40787;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40063);
if(temp__5823__auto__){
var seq__40063__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40063__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40063__$1);
var G__40788 = cljs.core.chunk_rest(seq__40063__$1);
var G__40789 = c__5525__auto__;
var G__40790 = cljs.core.count(c__5525__auto__);
var G__40791 = (0);
seq__40063 = G__40788;
chunk__40064 = G__40789;
count__40065 = G__40790;
i__40066 = G__40791;
continue;
} else {
var js_ns = cljs.core.first(seq__40063__$1);
var require_str_40792 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40792);


var G__40793 = cljs.core.next(seq__40063__$1);
var G__40794 = null;
var G__40795 = (0);
var G__40796 = (0);
seq__40063 = G__40793;
chunk__40064 = G__40794;
count__40065 = G__40795;
i__40066 = G__40796;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40074){
var map__40075 = p__40074;
var map__40075__$1 = cljs.core.__destructure_map(map__40075);
var msg = map__40075__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40075__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40075__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40076(s__40077){
return (new cljs.core.LazySeq(null,(function (){
var s__40077__$1 = s__40077;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__40077__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__40082 = cljs.core.first(xs__6383__auto__);
var map__40082__$1 = cljs.core.__destructure_map(map__40082);
var src = map__40082__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40082__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40082__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__40077__$1,map__40082,map__40082__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40075,map__40075__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40076_$_iter__40078(s__40079){
return (new cljs.core.LazySeq(null,((function (s__40077__$1,map__40082,map__40082__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40075,map__40075__$1,msg,info,reload_info){
return (function (){
var s__40079__$1 = s__40079;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__40079__$1);
if(temp__5823__auto____$1){
var s__40079__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40079__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__40079__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__40081 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__40080 = (0);
while(true){
if((i__40080 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__40080);
cljs.core.chunk_append(b__40081,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40797 = (i__40080 + (1));
i__40080 = G__40797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40081),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40076_$_iter__40078(cljs.core.chunk_rest(s__40079__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40081),null);
}
} else {
var warning = cljs.core.first(s__40079__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40076_$_iter__40078(cljs.core.rest(s__40079__$2)));
}
} else {
return null;
}
break;
}
});})(s__40077__$1,map__40082,map__40082__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40075,map__40075__$1,msg,info,reload_info))
,null,null));
});})(s__40077__$1,map__40082,map__40082__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__40075,map__40075__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40076(cljs.core.rest(s__40077__$1)));
} else {
var G__40798 = cljs.core.rest(s__40077__$1);
s__40077__$1 = G__40798;
continue;
}
} else {
var G__40799 = cljs.core.rest(s__40077__$1);
s__40077__$1 = G__40799;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__40083_40800 = cljs.core.seq(warnings);
var chunk__40084_40801 = null;
var count__40085_40802 = (0);
var i__40086_40803 = (0);
while(true){
if((i__40086_40803 < count__40085_40802)){
var map__40091_40804 = chunk__40084_40801.cljs$core$IIndexed$_nth$arity$2(null, i__40086_40803);
var map__40091_40805__$1 = cljs.core.__destructure_map(map__40091_40804);
var w_40806 = map__40091_40805__$1;
var msg_40807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091_40805__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091_40805__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091_40805__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40091_40805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40810)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40808),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40809),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40807__$1)].join(''));


var G__40811 = seq__40083_40800;
var G__40812 = chunk__40084_40801;
var G__40813 = count__40085_40802;
var G__40814 = (i__40086_40803 + (1));
seq__40083_40800 = G__40811;
chunk__40084_40801 = G__40812;
count__40085_40802 = G__40813;
i__40086_40803 = G__40814;
continue;
} else {
var temp__5823__auto___40815 = cljs.core.seq(seq__40083_40800);
if(temp__5823__auto___40815){
var seq__40083_40816__$1 = temp__5823__auto___40815;
if(cljs.core.chunked_seq_QMARK_(seq__40083_40816__$1)){
var c__5525__auto___40817 = cljs.core.chunk_first(seq__40083_40816__$1);
var G__40818 = cljs.core.chunk_rest(seq__40083_40816__$1);
var G__40819 = c__5525__auto___40817;
var G__40820 = cljs.core.count(c__5525__auto___40817);
var G__40821 = (0);
seq__40083_40800 = G__40818;
chunk__40084_40801 = G__40819;
count__40085_40802 = G__40820;
i__40086_40803 = G__40821;
continue;
} else {
var map__40092_40822 = cljs.core.first(seq__40083_40816__$1);
var map__40092_40823__$1 = cljs.core.__destructure_map(map__40092_40822);
var w_40824 = map__40092_40823__$1;
var msg_40825__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092_40823__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092_40823__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092_40823__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40092_40823__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40828)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40826),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40827),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40825__$1)].join(''));


var G__40829 = cljs.core.next(seq__40083_40816__$1);
var G__40830 = null;
var G__40831 = (0);
var G__40832 = (0);
seq__40083_40800 = G__40829;
chunk__40084_40801 = G__40830;
count__40085_40802 = G__40831;
i__40086_40803 = G__40832;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40073_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40073_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__40099 = node_uri;
G__40099.setQuery(null);

G__40099.setPath(new$);

return G__40099;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40101){
var map__40102 = p__40101;
var map__40102__$1 = cljs.core.__destructure_map(map__40102);
var msg = map__40102__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40103 = cljs.core.seq(updates);
var chunk__40105 = null;
var count__40106 = (0);
var i__40107 = (0);
while(true){
if((i__40107 < count__40106)){
var path = chunk__40105.cljs$core$IIndexed$_nth$arity$2(null, i__40107);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40373_40834 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40377_40835 = null;
var count__40378_40836 = (0);
var i__40379_40837 = (0);
while(true){
if((i__40379_40837 < count__40378_40836)){
var node_40838 = chunk__40377_40835.cljs$core$IIndexed$_nth$arity$2(null, i__40379_40837);
if(cljs.core.not(node_40838.shadow$old)){
var path_match_40839 = shadow.cljs.devtools.client.browser.match_paths(node_40838.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40839)){
var new_link_40840 = (function (){var G__40443 = node_40838.cloneNode(true);
G__40443.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40839),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40443;
})();
(node_40838.shadow$old = true);

(new_link_40840.onload = ((function (seq__40373_40834,chunk__40377_40835,count__40378_40836,i__40379_40837,seq__40103,chunk__40105,count__40106,i__40107,new_link_40840,path_match_40839,node_40838,path,map__40102,map__40102__$1,msg,updates,reload_info){
return (function (e){
var seq__40448_40841 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40450_40842 = null;
var count__40451_40843 = (0);
var i__40452_40844 = (0);
while(true){
if((i__40452_40844 < count__40451_40843)){
var map__40462_40845 = chunk__40450_40842.cljs$core$IIndexed$_nth$arity$2(null, i__40452_40844);
var map__40462_40846__$1 = cljs.core.__destructure_map(map__40462_40845);
var task_40847 = map__40462_40846__$1;
var fn_str_40848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40462_40846__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40462_40846__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40850 = goog.getObjectByName(fn_str_40848,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40849)].join(''));

(fn_obj_40850.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40850.cljs$core$IFn$_invoke$arity$2(path,new_link_40840) : fn_obj_40850.call(null, path,new_link_40840));


var G__40851 = seq__40448_40841;
var G__40852 = chunk__40450_40842;
var G__40853 = count__40451_40843;
var G__40854 = (i__40452_40844 + (1));
seq__40448_40841 = G__40851;
chunk__40450_40842 = G__40852;
count__40451_40843 = G__40853;
i__40452_40844 = G__40854;
continue;
} else {
var temp__5823__auto___40855 = cljs.core.seq(seq__40448_40841);
if(temp__5823__auto___40855){
var seq__40448_40856__$1 = temp__5823__auto___40855;
if(cljs.core.chunked_seq_QMARK_(seq__40448_40856__$1)){
var c__5525__auto___40857 = cljs.core.chunk_first(seq__40448_40856__$1);
var G__40858 = cljs.core.chunk_rest(seq__40448_40856__$1);
var G__40859 = c__5525__auto___40857;
var G__40860 = cljs.core.count(c__5525__auto___40857);
var G__40861 = (0);
seq__40448_40841 = G__40858;
chunk__40450_40842 = G__40859;
count__40451_40843 = G__40860;
i__40452_40844 = G__40861;
continue;
} else {
var map__40467_40862 = cljs.core.first(seq__40448_40856__$1);
var map__40467_40863__$1 = cljs.core.__destructure_map(map__40467_40862);
var task_40864 = map__40467_40863__$1;
var fn_str_40865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40467_40863__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40467_40863__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40867 = goog.getObjectByName(fn_str_40865,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40866)].join(''));

(fn_obj_40867.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40867.cljs$core$IFn$_invoke$arity$2(path,new_link_40840) : fn_obj_40867.call(null, path,new_link_40840));


var G__40869 = cljs.core.next(seq__40448_40856__$1);
var G__40870 = null;
var G__40871 = (0);
var G__40872 = (0);
seq__40448_40841 = G__40869;
chunk__40450_40842 = G__40870;
count__40451_40843 = G__40871;
i__40452_40844 = G__40872;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40838);
});})(seq__40373_40834,chunk__40377_40835,count__40378_40836,i__40379_40837,seq__40103,chunk__40105,count__40106,i__40107,new_link_40840,path_match_40839,node_40838,path,map__40102,map__40102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40839], 0));

goog.dom.insertSiblingAfter(new_link_40840,node_40838);


var G__40874 = seq__40373_40834;
var G__40875 = chunk__40377_40835;
var G__40876 = count__40378_40836;
var G__40877 = (i__40379_40837 + (1));
seq__40373_40834 = G__40874;
chunk__40377_40835 = G__40875;
count__40378_40836 = G__40876;
i__40379_40837 = G__40877;
continue;
} else {
var G__40878 = seq__40373_40834;
var G__40879 = chunk__40377_40835;
var G__40880 = count__40378_40836;
var G__40881 = (i__40379_40837 + (1));
seq__40373_40834 = G__40878;
chunk__40377_40835 = G__40879;
count__40378_40836 = G__40880;
i__40379_40837 = G__40881;
continue;
}
} else {
var G__40882 = seq__40373_40834;
var G__40883 = chunk__40377_40835;
var G__40884 = count__40378_40836;
var G__40885 = (i__40379_40837 + (1));
seq__40373_40834 = G__40882;
chunk__40377_40835 = G__40883;
count__40378_40836 = G__40884;
i__40379_40837 = G__40885;
continue;
}
} else {
var temp__5823__auto___40886 = cljs.core.seq(seq__40373_40834);
if(temp__5823__auto___40886){
var seq__40373_40887__$1 = temp__5823__auto___40886;
if(cljs.core.chunked_seq_QMARK_(seq__40373_40887__$1)){
var c__5525__auto___40888 = cljs.core.chunk_first(seq__40373_40887__$1);
var G__40889 = cljs.core.chunk_rest(seq__40373_40887__$1);
var G__40890 = c__5525__auto___40888;
var G__40891 = cljs.core.count(c__5525__auto___40888);
var G__40892 = (0);
seq__40373_40834 = G__40889;
chunk__40377_40835 = G__40890;
count__40378_40836 = G__40891;
i__40379_40837 = G__40892;
continue;
} else {
var node_40893 = cljs.core.first(seq__40373_40887__$1);
if(cljs.core.not(node_40893.shadow$old)){
var path_match_40894 = shadow.cljs.devtools.client.browser.match_paths(node_40893.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40894)){
var new_link_40895 = (function (){var G__40469 = node_40893.cloneNode(true);
G__40469.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40894),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40469;
})();
(node_40893.shadow$old = true);

(new_link_40895.onload = ((function (seq__40373_40834,chunk__40377_40835,count__40378_40836,i__40379_40837,seq__40103,chunk__40105,count__40106,i__40107,new_link_40895,path_match_40894,node_40893,seq__40373_40887__$1,temp__5823__auto___40886,path,map__40102,map__40102__$1,msg,updates,reload_info){
return (function (e){
var seq__40470_40898 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40472_40899 = null;
var count__40473_40900 = (0);
var i__40474_40901 = (0);
while(true){
if((i__40474_40901 < count__40473_40900)){
var map__40488_40902 = chunk__40472_40899.cljs$core$IIndexed$_nth$arity$2(null, i__40474_40901);
var map__40488_40903__$1 = cljs.core.__destructure_map(map__40488_40902);
var task_40904 = map__40488_40903__$1;
var fn_str_40905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488_40903__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40488_40903__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40907 = goog.getObjectByName(fn_str_40905,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40906)].join(''));

(fn_obj_40907.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40907.cljs$core$IFn$_invoke$arity$2(path,new_link_40895) : fn_obj_40907.call(null, path,new_link_40895));


var G__40908 = seq__40470_40898;
var G__40909 = chunk__40472_40899;
var G__40910 = count__40473_40900;
var G__40911 = (i__40474_40901 + (1));
seq__40470_40898 = G__40908;
chunk__40472_40899 = G__40909;
count__40473_40900 = G__40910;
i__40474_40901 = G__40911;
continue;
} else {
var temp__5823__auto___40912__$1 = cljs.core.seq(seq__40470_40898);
if(temp__5823__auto___40912__$1){
var seq__40470_40913__$1 = temp__5823__auto___40912__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40470_40913__$1)){
var c__5525__auto___40914 = cljs.core.chunk_first(seq__40470_40913__$1);
var G__40915 = cljs.core.chunk_rest(seq__40470_40913__$1);
var G__40916 = c__5525__auto___40914;
var G__40917 = cljs.core.count(c__5525__auto___40914);
var G__40918 = (0);
seq__40470_40898 = G__40915;
chunk__40472_40899 = G__40916;
count__40473_40900 = G__40917;
i__40474_40901 = G__40918;
continue;
} else {
var map__40493_40919 = cljs.core.first(seq__40470_40913__$1);
var map__40493_40920__$1 = cljs.core.__destructure_map(map__40493_40919);
var task_40921 = map__40493_40920__$1;
var fn_str_40922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40493_40920__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40493_40920__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40924 = goog.getObjectByName(fn_str_40922,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40923)].join(''));

(fn_obj_40924.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40924.cljs$core$IFn$_invoke$arity$2(path,new_link_40895) : fn_obj_40924.call(null, path,new_link_40895));


var G__40925 = cljs.core.next(seq__40470_40913__$1);
var G__40926 = null;
var G__40927 = (0);
var G__40928 = (0);
seq__40470_40898 = G__40925;
chunk__40472_40899 = G__40926;
count__40473_40900 = G__40927;
i__40474_40901 = G__40928;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40893);
});})(seq__40373_40834,chunk__40377_40835,count__40378_40836,i__40379_40837,seq__40103,chunk__40105,count__40106,i__40107,new_link_40895,path_match_40894,node_40893,seq__40373_40887__$1,temp__5823__auto___40886,path,map__40102,map__40102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40894], 0));

goog.dom.insertSiblingAfter(new_link_40895,node_40893);


var G__40929 = cljs.core.next(seq__40373_40887__$1);
var G__40930 = null;
var G__40931 = (0);
var G__40932 = (0);
seq__40373_40834 = G__40929;
chunk__40377_40835 = G__40930;
count__40378_40836 = G__40931;
i__40379_40837 = G__40932;
continue;
} else {
var G__40933 = cljs.core.next(seq__40373_40887__$1);
var G__40934 = null;
var G__40935 = (0);
var G__40936 = (0);
seq__40373_40834 = G__40933;
chunk__40377_40835 = G__40934;
count__40378_40836 = G__40935;
i__40379_40837 = G__40936;
continue;
}
} else {
var G__40937 = cljs.core.next(seq__40373_40887__$1);
var G__40938 = null;
var G__40939 = (0);
var G__40940 = (0);
seq__40373_40834 = G__40937;
chunk__40377_40835 = G__40938;
count__40378_40836 = G__40939;
i__40379_40837 = G__40940;
continue;
}
}
} else {
}
}
break;
}


var G__40941 = seq__40103;
var G__40942 = chunk__40105;
var G__40943 = count__40106;
var G__40944 = (i__40107 + (1));
seq__40103 = G__40941;
chunk__40105 = G__40942;
count__40106 = G__40943;
i__40107 = G__40944;
continue;
} else {
var G__40945 = seq__40103;
var G__40946 = chunk__40105;
var G__40947 = count__40106;
var G__40948 = (i__40107 + (1));
seq__40103 = G__40945;
chunk__40105 = G__40946;
count__40106 = G__40947;
i__40107 = G__40948;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40103);
if(temp__5823__auto__){
var seq__40103__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40103__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40103__$1);
var G__40950 = cljs.core.chunk_rest(seq__40103__$1);
var G__40951 = c__5525__auto__;
var G__40952 = cljs.core.count(c__5525__auto__);
var G__40953 = (0);
seq__40103 = G__40950;
chunk__40105 = G__40951;
count__40106 = G__40952;
i__40107 = G__40953;
continue;
} else {
var path = cljs.core.first(seq__40103__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40499_40954 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40503_40955 = null;
var count__40504_40956 = (0);
var i__40505_40957 = (0);
while(true){
if((i__40505_40957 < count__40504_40956)){
var node_40958 = chunk__40503_40955.cljs$core$IIndexed$_nth$arity$2(null, i__40505_40957);
if(cljs.core.not(node_40958.shadow$old)){
var path_match_40959 = shadow.cljs.devtools.client.browser.match_paths(node_40958.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40959)){
var new_link_40960 = (function (){var G__40587 = node_40958.cloneNode(true);
G__40587.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40959),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40587;
})();
(node_40958.shadow$old = true);

(new_link_40960.onload = ((function (seq__40499_40954,chunk__40503_40955,count__40504_40956,i__40505_40957,seq__40103,chunk__40105,count__40106,i__40107,new_link_40960,path_match_40959,node_40958,path,seq__40103__$1,temp__5823__auto__,map__40102,map__40102__$1,msg,updates,reload_info){
return (function (e){
var seq__40595_40961 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40597_40962 = null;
var count__40598_40963 = (0);
var i__40599_40964 = (0);
while(true){
if((i__40599_40964 < count__40598_40963)){
var map__40614_40965 = chunk__40597_40962.cljs$core$IIndexed$_nth$arity$2(null, i__40599_40964);
var map__40614_40966__$1 = cljs.core.__destructure_map(map__40614_40965);
var task_40967 = map__40614_40966__$1;
var fn_str_40968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40614_40966__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40614_40966__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40972 = goog.getObjectByName(fn_str_40968,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40969)].join(''));

(fn_obj_40972.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40972.cljs$core$IFn$_invoke$arity$2(path,new_link_40960) : fn_obj_40972.call(null, path,new_link_40960));


var G__40973 = seq__40595_40961;
var G__40974 = chunk__40597_40962;
var G__40975 = count__40598_40963;
var G__40976 = (i__40599_40964 + (1));
seq__40595_40961 = G__40973;
chunk__40597_40962 = G__40974;
count__40598_40963 = G__40975;
i__40599_40964 = G__40976;
continue;
} else {
var temp__5823__auto___40977__$1 = cljs.core.seq(seq__40595_40961);
if(temp__5823__auto___40977__$1){
var seq__40595_40978__$1 = temp__5823__auto___40977__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40595_40978__$1)){
var c__5525__auto___40979 = cljs.core.chunk_first(seq__40595_40978__$1);
var G__40980 = cljs.core.chunk_rest(seq__40595_40978__$1);
var G__40981 = c__5525__auto___40979;
var G__40982 = cljs.core.count(c__5525__auto___40979);
var G__40983 = (0);
seq__40595_40961 = G__40980;
chunk__40597_40962 = G__40981;
count__40598_40963 = G__40982;
i__40599_40964 = G__40983;
continue;
} else {
var map__40622_40984 = cljs.core.first(seq__40595_40978__$1);
var map__40622_40985__$1 = cljs.core.__destructure_map(map__40622_40984);
var task_40986 = map__40622_40985__$1;
var fn_str_40987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40622_40985__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40622_40985__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40989 = goog.getObjectByName(fn_str_40987,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40988)].join(''));

(fn_obj_40989.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40989.cljs$core$IFn$_invoke$arity$2(path,new_link_40960) : fn_obj_40989.call(null, path,new_link_40960));


var G__40990 = cljs.core.next(seq__40595_40978__$1);
var G__40991 = null;
var G__40992 = (0);
var G__40993 = (0);
seq__40595_40961 = G__40990;
chunk__40597_40962 = G__40991;
count__40598_40963 = G__40992;
i__40599_40964 = G__40993;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40958);
});})(seq__40499_40954,chunk__40503_40955,count__40504_40956,i__40505_40957,seq__40103,chunk__40105,count__40106,i__40107,new_link_40960,path_match_40959,node_40958,path,seq__40103__$1,temp__5823__auto__,map__40102,map__40102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40959], 0));

goog.dom.insertSiblingAfter(new_link_40960,node_40958);


var G__40994 = seq__40499_40954;
var G__40995 = chunk__40503_40955;
var G__40996 = count__40504_40956;
var G__40997 = (i__40505_40957 + (1));
seq__40499_40954 = G__40994;
chunk__40503_40955 = G__40995;
count__40504_40956 = G__40996;
i__40505_40957 = G__40997;
continue;
} else {
var G__40998 = seq__40499_40954;
var G__40999 = chunk__40503_40955;
var G__41000 = count__40504_40956;
var G__41001 = (i__40505_40957 + (1));
seq__40499_40954 = G__40998;
chunk__40503_40955 = G__40999;
count__40504_40956 = G__41000;
i__40505_40957 = G__41001;
continue;
}
} else {
var G__41002 = seq__40499_40954;
var G__41003 = chunk__40503_40955;
var G__41004 = count__40504_40956;
var G__41005 = (i__40505_40957 + (1));
seq__40499_40954 = G__41002;
chunk__40503_40955 = G__41003;
count__40504_40956 = G__41004;
i__40505_40957 = G__41005;
continue;
}
} else {
var temp__5823__auto___41006__$1 = cljs.core.seq(seq__40499_40954);
if(temp__5823__auto___41006__$1){
var seq__40499_41007__$1 = temp__5823__auto___41006__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40499_41007__$1)){
var c__5525__auto___41008 = cljs.core.chunk_first(seq__40499_41007__$1);
var G__41009 = cljs.core.chunk_rest(seq__40499_41007__$1);
var G__41010 = c__5525__auto___41008;
var G__41011 = cljs.core.count(c__5525__auto___41008);
var G__41012 = (0);
seq__40499_40954 = G__41009;
chunk__40503_40955 = G__41010;
count__40504_40956 = G__41011;
i__40505_40957 = G__41012;
continue;
} else {
var node_41013 = cljs.core.first(seq__40499_41007__$1);
if(cljs.core.not(node_41013.shadow$old)){
var path_match_41015 = shadow.cljs.devtools.client.browser.match_paths(node_41013.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41015)){
var new_link_41017 = (function (){var G__40634 = node_41013.cloneNode(true);
G__40634.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41015),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40634;
})();
(node_41013.shadow$old = true);

(new_link_41017.onload = ((function (seq__40499_40954,chunk__40503_40955,count__40504_40956,i__40505_40957,seq__40103,chunk__40105,count__40106,i__40107,new_link_41017,path_match_41015,node_41013,seq__40499_41007__$1,temp__5823__auto___41006__$1,path,seq__40103__$1,temp__5823__auto__,map__40102,map__40102__$1,msg,updates,reload_info){
return (function (e){
var seq__40636_41018 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40638_41019 = null;
var count__40639_41020 = (0);
var i__40640_41021 = (0);
while(true){
if((i__40640_41021 < count__40639_41020)){
var map__40668_41022 = chunk__40638_41019.cljs$core$IIndexed$_nth$arity$2(null, i__40640_41021);
var map__40668_41023__$1 = cljs.core.__destructure_map(map__40668_41022);
var task_41024 = map__40668_41023__$1;
var fn_str_41025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40668_41023__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40668_41023__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41027 = goog.getObjectByName(fn_str_41025,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41026)].join(''));

(fn_obj_41027.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41027.cljs$core$IFn$_invoke$arity$2(path,new_link_41017) : fn_obj_41027.call(null, path,new_link_41017));


var G__41028 = seq__40636_41018;
var G__41029 = chunk__40638_41019;
var G__41030 = count__40639_41020;
var G__41031 = (i__40640_41021 + (1));
seq__40636_41018 = G__41028;
chunk__40638_41019 = G__41029;
count__40639_41020 = G__41030;
i__40640_41021 = G__41031;
continue;
} else {
var temp__5823__auto___41032__$2 = cljs.core.seq(seq__40636_41018);
if(temp__5823__auto___41032__$2){
var seq__40636_41033__$1 = temp__5823__auto___41032__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40636_41033__$1)){
var c__5525__auto___41034 = cljs.core.chunk_first(seq__40636_41033__$1);
var G__41035 = cljs.core.chunk_rest(seq__40636_41033__$1);
var G__41036 = c__5525__auto___41034;
var G__41037 = cljs.core.count(c__5525__auto___41034);
var G__41038 = (0);
seq__40636_41018 = G__41035;
chunk__40638_41019 = G__41036;
count__40639_41020 = G__41037;
i__40640_41021 = G__41038;
continue;
} else {
var map__40681_41039 = cljs.core.first(seq__40636_41033__$1);
var map__40681_41040__$1 = cljs.core.__destructure_map(map__40681_41039);
var task_41041 = map__40681_41040__$1;
var fn_str_41042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681_41040__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40681_41040__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41044 = goog.getObjectByName(fn_str_41042,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41043)].join(''));

(fn_obj_41044.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41044.cljs$core$IFn$_invoke$arity$2(path,new_link_41017) : fn_obj_41044.call(null, path,new_link_41017));


var G__41045 = cljs.core.next(seq__40636_41033__$1);
var G__41046 = null;
var G__41047 = (0);
var G__41048 = (0);
seq__40636_41018 = G__41045;
chunk__40638_41019 = G__41046;
count__40639_41020 = G__41047;
i__40640_41021 = G__41048;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41013);
});})(seq__40499_40954,chunk__40503_40955,count__40504_40956,i__40505_40957,seq__40103,chunk__40105,count__40106,i__40107,new_link_41017,path_match_41015,node_41013,seq__40499_41007__$1,temp__5823__auto___41006__$1,path,seq__40103__$1,temp__5823__auto__,map__40102,map__40102__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41015], 0));

goog.dom.insertSiblingAfter(new_link_41017,node_41013);


var G__41050 = cljs.core.next(seq__40499_41007__$1);
var G__41051 = null;
var G__41052 = (0);
var G__41053 = (0);
seq__40499_40954 = G__41050;
chunk__40503_40955 = G__41051;
count__40504_40956 = G__41052;
i__40505_40957 = G__41053;
continue;
} else {
var G__41056 = cljs.core.next(seq__40499_41007__$1);
var G__41057 = null;
var G__41058 = (0);
var G__41059 = (0);
seq__40499_40954 = G__41056;
chunk__40503_40955 = G__41057;
count__40504_40956 = G__41058;
i__40505_40957 = G__41059;
continue;
}
} else {
var G__41060 = cljs.core.next(seq__40499_41007__$1);
var G__41061 = null;
var G__41062 = (0);
var G__41063 = (0);
seq__40499_40954 = G__41060;
chunk__40503_40955 = G__41061;
count__40504_40956 = G__41062;
i__40505_40957 = G__41063;
continue;
}
}
} else {
}
}
break;
}


var G__41064 = cljs.core.next(seq__40103__$1);
var G__41065 = null;
var G__41066 = (0);
var G__41067 = (0);
seq__40103 = G__41064;
chunk__40105 = G__41065;
count__40106 = G__41066;
i__40107 = G__41067;
continue;
} else {
var G__41068 = cljs.core.next(seq__40103__$1);
var G__41069 = null;
var G__41070 = (0);
var G__41071 = (0);
seq__40103 = G__41068;
chunk__40105 = G__41069;
count__40106 = G__41070;
i__40107 = G__41071;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__40712){
var map__40713 = p__40712;
var map__40713__$1 = cljs.core.__destructure_map(map__40713);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40718,done,error){
var map__40719 = p__40718;
var map__40719__$1 = cljs.core.__destructure_map(map__40719);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40719__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40723,done,error){
var map__40724 = p__40723;
var map__40724__$1 = cljs.core.__destructure_map(map__40724);
var msg = map__40724__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40724__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40725){
var map__40726 = p__40725;
var map__40726__$1 = cljs.core.__destructure_map(map__40726);
var src = map__40726__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40726__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40731 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40731) : done.call(null, G__40731));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40733){
var map__40734 = p__40733;
var map__40734__$1 = cljs.core.__destructure_map(map__40734);
var msg__$1 = map__40734__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40734__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e40735){var ex = e40735;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40737){
var map__40738 = p__40737;
var map__40738__$1 = cljs.core.__destructure_map(map__40738);
var env = map__40738__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40738__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40749){
var map__40751 = p__40749;
var map__40751__$1 = cljs.core.__destructure_map(map__40751);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40751__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__40752){
var map__40753 = p__40752;
var map__40753__$1 = cljs.core.__destructure_map(map__40753);
var svc = map__40753__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40753__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
