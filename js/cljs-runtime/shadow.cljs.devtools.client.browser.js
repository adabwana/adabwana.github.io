goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___40786 = arguments.length;
var i__5727__auto___40787 = (0);
while(true){
if((i__5727__auto___40787 < len__5726__auto___40786)){
args__5732__auto__.push((arguments[i__5727__auto___40787]));

var G__40789 = (i__5727__auto___40787 + (1));
i__5727__auto___40787 = G__40789;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq40017){
var G__40018 = cljs.core.first(seq40017);
var seq40017__$1 = cljs.core.next(seq40017);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40018,seq40017__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40041 = cljs.core.seq(sources);
var chunk__40042 = null;
var count__40043 = (0);
var i__40044 = (0);
while(true){
if((i__40044 < count__40043)){
var map__40052 = chunk__40042.cljs$core$IIndexed$_nth$arity$2(null, i__40044);
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
}catch (e40057){var e_40793 = e40057;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40793);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40793.message)].join('')));
}

var G__40794 = seq__40041;
var G__40795 = chunk__40042;
var G__40796 = count__40043;
var G__40797 = (i__40044 + (1));
seq__40041 = G__40794;
chunk__40042 = G__40795;
count__40043 = G__40796;
i__40044 = G__40797;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40041);
if(temp__5823__auto__){
var seq__40041__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40041__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40041__$1);
var G__40798 = cljs.core.chunk_rest(seq__40041__$1);
var G__40799 = c__5525__auto__;
var G__40800 = cljs.core.count(c__5525__auto__);
var G__40801 = (0);
seq__40041 = G__40798;
chunk__40042 = G__40799;
count__40043 = G__40800;
i__40044 = G__40801;
continue;
} else {
var map__40064 = cljs.core.first(seq__40041__$1);
var map__40064__$1 = cljs.core.__destructure_map(map__40064);
var src = map__40064__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40064__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40065){var e_40805 = e40065;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40805);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40805.message)].join('')));
}

var G__40807 = cljs.core.next(seq__40041__$1);
var G__40808 = null;
var G__40809 = (0);
var G__40810 = (0);
seq__40041 = G__40807;
chunk__40042 = G__40808;
count__40043 = G__40809;
i__40044 = G__40810;
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
var seq__40067 = cljs.core.seq(js_requires);
var chunk__40068 = null;
var count__40069 = (0);
var i__40070 = (0);
while(true){
if((i__40070 < count__40069)){
var js_ns = chunk__40068.cljs$core$IIndexed$_nth$arity$2(null, i__40070);
var require_str_40812 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40812);


var G__40813 = seq__40067;
var G__40814 = chunk__40068;
var G__40815 = count__40069;
var G__40816 = (i__40070 + (1));
seq__40067 = G__40813;
chunk__40068 = G__40814;
count__40069 = G__40815;
i__40070 = G__40816;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40067);
if(temp__5823__auto__){
var seq__40067__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40067__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40067__$1);
var G__40817 = cljs.core.chunk_rest(seq__40067__$1);
var G__40818 = c__5525__auto__;
var G__40819 = cljs.core.count(c__5525__auto__);
var G__40820 = (0);
seq__40067 = G__40817;
chunk__40068 = G__40818;
count__40069 = G__40819;
i__40070 = G__40820;
continue;
} else {
var js_ns = cljs.core.first(seq__40067__$1);
var require_str_40821 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40821);


var G__40822 = cljs.core.next(seq__40067__$1);
var G__40823 = null;
var G__40824 = (0);
var G__40825 = (0);
seq__40067 = G__40822;
chunk__40068 = G__40823;
count__40069 = G__40824;
i__40070 = G__40825;
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

var G__40832 = (i__40080 + (1));
i__40080 = G__40832;
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
var G__40833 = cljs.core.rest(s__40077__$1);
s__40077__$1 = G__40833;
continue;
}
} else {
var G__40834 = cljs.core.rest(s__40077__$1);
s__40077__$1 = G__40834;
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
var seq__40087_40835 = cljs.core.seq(warnings);
var chunk__40088_40836 = null;
var count__40089_40837 = (0);
var i__40090_40838 = (0);
while(true){
if((i__40090_40838 < count__40089_40837)){
var map__40097_40839 = chunk__40088_40836.cljs$core$IIndexed$_nth$arity$2(null, i__40090_40838);
var map__40097_40840__$1 = cljs.core.__destructure_map(map__40097_40839);
var w_40841 = map__40097_40840__$1;
var msg_40842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097_40840__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097_40840__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097_40840__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40097_40840__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40845)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40843),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40844),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40842__$1)].join(''));


var G__40848 = seq__40087_40835;
var G__40849 = chunk__40088_40836;
var G__40850 = count__40089_40837;
var G__40851 = (i__40090_40838 + (1));
seq__40087_40835 = G__40848;
chunk__40088_40836 = G__40849;
count__40089_40837 = G__40850;
i__40090_40838 = G__40851;
continue;
} else {
var temp__5823__auto___40852 = cljs.core.seq(seq__40087_40835);
if(temp__5823__auto___40852){
var seq__40087_40853__$1 = temp__5823__auto___40852;
if(cljs.core.chunked_seq_QMARK_(seq__40087_40853__$1)){
var c__5525__auto___40854 = cljs.core.chunk_first(seq__40087_40853__$1);
var G__40855 = cljs.core.chunk_rest(seq__40087_40853__$1);
var G__40856 = c__5525__auto___40854;
var G__40857 = cljs.core.count(c__5525__auto___40854);
var G__40858 = (0);
seq__40087_40835 = G__40855;
chunk__40088_40836 = G__40856;
count__40089_40837 = G__40857;
i__40090_40838 = G__40858;
continue;
} else {
var map__40102_40859 = cljs.core.first(seq__40087_40853__$1);
var map__40102_40860__$1 = cljs.core.__destructure_map(map__40102_40859);
var w_40861 = map__40102_40860__$1;
var msg_40862__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102_40860__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102_40860__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102_40860__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40102_40860__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40865)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40863),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40864),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40862__$1)].join(''));


var G__40866 = cljs.core.next(seq__40087_40853__$1);
var G__40867 = null;
var G__40868 = (0);
var G__40869 = (0);
seq__40087_40835 = G__40866;
chunk__40088_40836 = G__40867;
count__40089_40837 = G__40868;
i__40090_40838 = G__40869;
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__40104 = node_uri;
G__40104.setQuery(null);

G__40104.setPath(new$);

return G__40104;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40105){
var map__40106 = p__40105;
var map__40106__$1 = cljs.core.__destructure_map(map__40106);
var msg = map__40106__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40106__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40106__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__40107 = cljs.core.seq(updates);
var chunk__40109 = null;
var count__40110 = (0);
var i__40111 = (0);
while(true){
if((i__40111 < count__40110)){
var path = chunk__40109.cljs$core$IIndexed$_nth$arity$2(null, i__40111);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40457_40874 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40461_40875 = null;
var count__40462_40877 = (0);
var i__40463_40878 = (0);
while(true){
if((i__40463_40878 < count__40462_40877)){
var node_40881 = chunk__40461_40875.cljs$core$IIndexed$_nth$arity$2(null, i__40463_40878);
if(cljs.core.not(node_40881.shadow$old)){
var path_match_40882 = shadow.cljs.devtools.client.browser.match_paths(node_40881.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40882)){
var new_link_40886 = (function (){var G__40537 = node_40881.cloneNode(true);
G__40537.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40882),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40537;
})();
(node_40881.shadow$old = true);

(new_link_40886.onload = ((function (seq__40457_40874,chunk__40461_40875,count__40462_40877,i__40463_40878,seq__40107,chunk__40109,count__40110,i__40111,new_link_40886,path_match_40882,node_40881,path,map__40106,map__40106__$1,msg,updates,reload_info){
return (function (e){
var seq__40541_40893 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40543_40894 = null;
var count__40544_40895 = (0);
var i__40545_40896 = (0);
while(true){
if((i__40545_40896 < count__40544_40895)){
var map__40553_40897 = chunk__40543_40894.cljs$core$IIndexed$_nth$arity$2(null, i__40545_40896);
var map__40553_40898__$1 = cljs.core.__destructure_map(map__40553_40897);
var task_40899 = map__40553_40898__$1;
var fn_str_40900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40553_40898__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40553_40898__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40904 = goog.getObjectByName(fn_str_40900,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40901)].join(''));

(fn_obj_40904.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40904.cljs$core$IFn$_invoke$arity$2(path,new_link_40886) : fn_obj_40904.call(null, path,new_link_40886));


var G__40905 = seq__40541_40893;
var G__40906 = chunk__40543_40894;
var G__40907 = count__40544_40895;
var G__40908 = (i__40545_40896 + (1));
seq__40541_40893 = G__40905;
chunk__40543_40894 = G__40906;
count__40544_40895 = G__40907;
i__40545_40896 = G__40908;
continue;
} else {
var temp__5823__auto___40910 = cljs.core.seq(seq__40541_40893);
if(temp__5823__auto___40910){
var seq__40541_40911__$1 = temp__5823__auto___40910;
if(cljs.core.chunked_seq_QMARK_(seq__40541_40911__$1)){
var c__5525__auto___40912 = cljs.core.chunk_first(seq__40541_40911__$1);
var G__40913 = cljs.core.chunk_rest(seq__40541_40911__$1);
var G__40914 = c__5525__auto___40912;
var G__40915 = cljs.core.count(c__5525__auto___40912);
var G__40916 = (0);
seq__40541_40893 = G__40913;
chunk__40543_40894 = G__40914;
count__40544_40895 = G__40915;
i__40545_40896 = G__40916;
continue;
} else {
var map__40555_40917 = cljs.core.first(seq__40541_40911__$1);
var map__40555_40918__$1 = cljs.core.__destructure_map(map__40555_40917);
var task_40919 = map__40555_40918__$1;
var fn_str_40920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555_40918__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40555_40918__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40922 = goog.getObjectByName(fn_str_40920,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40921)].join(''));

(fn_obj_40922.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40922.cljs$core$IFn$_invoke$arity$2(path,new_link_40886) : fn_obj_40922.call(null, path,new_link_40886));


var G__40923 = cljs.core.next(seq__40541_40911__$1);
var G__40924 = null;
var G__40925 = (0);
var G__40926 = (0);
seq__40541_40893 = G__40923;
chunk__40543_40894 = G__40924;
count__40544_40895 = G__40925;
i__40545_40896 = G__40926;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40881);
});})(seq__40457_40874,chunk__40461_40875,count__40462_40877,i__40463_40878,seq__40107,chunk__40109,count__40110,i__40111,new_link_40886,path_match_40882,node_40881,path,map__40106,map__40106__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40882], 0));

goog.dom.insertSiblingAfter(new_link_40886,node_40881);


var G__40929 = seq__40457_40874;
var G__40930 = chunk__40461_40875;
var G__40931 = count__40462_40877;
var G__40932 = (i__40463_40878 + (1));
seq__40457_40874 = G__40929;
chunk__40461_40875 = G__40930;
count__40462_40877 = G__40931;
i__40463_40878 = G__40932;
continue;
} else {
var G__40936 = seq__40457_40874;
var G__40937 = chunk__40461_40875;
var G__40938 = count__40462_40877;
var G__40939 = (i__40463_40878 + (1));
seq__40457_40874 = G__40936;
chunk__40461_40875 = G__40937;
count__40462_40877 = G__40938;
i__40463_40878 = G__40939;
continue;
}
} else {
var G__40941 = seq__40457_40874;
var G__40942 = chunk__40461_40875;
var G__40943 = count__40462_40877;
var G__40944 = (i__40463_40878 + (1));
seq__40457_40874 = G__40941;
chunk__40461_40875 = G__40942;
count__40462_40877 = G__40943;
i__40463_40878 = G__40944;
continue;
}
} else {
var temp__5823__auto___40945 = cljs.core.seq(seq__40457_40874);
if(temp__5823__auto___40945){
var seq__40457_40946__$1 = temp__5823__auto___40945;
if(cljs.core.chunked_seq_QMARK_(seq__40457_40946__$1)){
var c__5525__auto___40947 = cljs.core.chunk_first(seq__40457_40946__$1);
var G__40948 = cljs.core.chunk_rest(seq__40457_40946__$1);
var G__40949 = c__5525__auto___40947;
var G__40950 = cljs.core.count(c__5525__auto___40947);
var G__40951 = (0);
seq__40457_40874 = G__40948;
chunk__40461_40875 = G__40949;
count__40462_40877 = G__40950;
i__40463_40878 = G__40951;
continue;
} else {
var node_40952 = cljs.core.first(seq__40457_40946__$1);
if(cljs.core.not(node_40952.shadow$old)){
var path_match_40953 = shadow.cljs.devtools.client.browser.match_paths(node_40952.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40953)){
var new_link_40955 = (function (){var G__40557 = node_40952.cloneNode(true);
G__40557.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40953),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40557;
})();
(node_40952.shadow$old = true);

(new_link_40955.onload = ((function (seq__40457_40874,chunk__40461_40875,count__40462_40877,i__40463_40878,seq__40107,chunk__40109,count__40110,i__40111,new_link_40955,path_match_40953,node_40952,seq__40457_40946__$1,temp__5823__auto___40945,path,map__40106,map__40106__$1,msg,updates,reload_info){
return (function (e){
var seq__40560_40956 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40562_40957 = null;
var count__40563_40958 = (0);
var i__40564_40959 = (0);
while(true){
if((i__40564_40959 < count__40563_40958)){
var map__40581_40960 = chunk__40562_40957.cljs$core$IIndexed$_nth$arity$2(null, i__40564_40959);
var map__40581_40961__$1 = cljs.core.__destructure_map(map__40581_40960);
var task_40962 = map__40581_40961__$1;
var fn_str_40963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40581_40961__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40581_40961__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40965 = goog.getObjectByName(fn_str_40963,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40964)].join(''));

(fn_obj_40965.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40965.cljs$core$IFn$_invoke$arity$2(path,new_link_40955) : fn_obj_40965.call(null, path,new_link_40955));


var G__40967 = seq__40560_40956;
var G__40968 = chunk__40562_40957;
var G__40969 = count__40563_40958;
var G__40970 = (i__40564_40959 + (1));
seq__40560_40956 = G__40967;
chunk__40562_40957 = G__40968;
count__40563_40958 = G__40969;
i__40564_40959 = G__40970;
continue;
} else {
var temp__5823__auto___40971__$1 = cljs.core.seq(seq__40560_40956);
if(temp__5823__auto___40971__$1){
var seq__40560_40972__$1 = temp__5823__auto___40971__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40560_40972__$1)){
var c__5525__auto___40973 = cljs.core.chunk_first(seq__40560_40972__$1);
var G__40974 = cljs.core.chunk_rest(seq__40560_40972__$1);
var G__40975 = c__5525__auto___40973;
var G__40976 = cljs.core.count(c__5525__auto___40973);
var G__40977 = (0);
seq__40560_40956 = G__40974;
chunk__40562_40957 = G__40975;
count__40563_40958 = G__40976;
i__40564_40959 = G__40977;
continue;
} else {
var map__40585_40978 = cljs.core.first(seq__40560_40972__$1);
var map__40585_40979__$1 = cljs.core.__destructure_map(map__40585_40978);
var task_40980 = map__40585_40979__$1;
var fn_str_40981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585_40979__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_40982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585_40979__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_40983 = goog.getObjectByName(fn_str_40981,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_40982)].join(''));

(fn_obj_40983.cljs$core$IFn$_invoke$arity$2 ? fn_obj_40983.cljs$core$IFn$_invoke$arity$2(path,new_link_40955) : fn_obj_40983.call(null, path,new_link_40955));


var G__40984 = cljs.core.next(seq__40560_40972__$1);
var G__40985 = null;
var G__40986 = (0);
var G__40987 = (0);
seq__40560_40956 = G__40984;
chunk__40562_40957 = G__40985;
count__40563_40958 = G__40986;
i__40564_40959 = G__40987;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_40952);
});})(seq__40457_40874,chunk__40461_40875,count__40462_40877,i__40463_40878,seq__40107,chunk__40109,count__40110,i__40111,new_link_40955,path_match_40953,node_40952,seq__40457_40946__$1,temp__5823__auto___40945,path,map__40106,map__40106__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40953], 0));

goog.dom.insertSiblingAfter(new_link_40955,node_40952);


var G__40989 = cljs.core.next(seq__40457_40946__$1);
var G__40990 = null;
var G__40991 = (0);
var G__40992 = (0);
seq__40457_40874 = G__40989;
chunk__40461_40875 = G__40990;
count__40462_40877 = G__40991;
i__40463_40878 = G__40992;
continue;
} else {
var G__40993 = cljs.core.next(seq__40457_40946__$1);
var G__40994 = null;
var G__40995 = (0);
var G__40996 = (0);
seq__40457_40874 = G__40993;
chunk__40461_40875 = G__40994;
count__40462_40877 = G__40995;
i__40463_40878 = G__40996;
continue;
}
} else {
var G__40997 = cljs.core.next(seq__40457_40946__$1);
var G__40998 = null;
var G__40999 = (0);
var G__41000 = (0);
seq__40457_40874 = G__40997;
chunk__40461_40875 = G__40998;
count__40462_40877 = G__40999;
i__40463_40878 = G__41000;
continue;
}
}
} else {
}
}
break;
}


var G__41002 = seq__40107;
var G__41003 = chunk__40109;
var G__41004 = count__40110;
var G__41005 = (i__40111 + (1));
seq__40107 = G__41002;
chunk__40109 = G__41003;
count__40110 = G__41004;
i__40111 = G__41005;
continue;
} else {
var G__41010 = seq__40107;
var G__41011 = chunk__40109;
var G__41012 = count__40110;
var G__41013 = (i__40111 + (1));
seq__40107 = G__41010;
chunk__40109 = G__41011;
count__40110 = G__41012;
i__40111 = G__41013;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__40107);
if(temp__5823__auto__){
var seq__40107__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40107__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__40107__$1);
var G__41014 = cljs.core.chunk_rest(seq__40107__$1);
var G__41015 = c__5525__auto__;
var G__41016 = cljs.core.count(c__5525__auto__);
var G__41017 = (0);
seq__40107 = G__41014;
chunk__40109 = G__41015;
count__40110 = G__41016;
i__40111 = G__41017;
continue;
} else {
var path = cljs.core.first(seq__40107__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40594_41018 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40598_41019 = null;
var count__40599_41020 = (0);
var i__40600_41021 = (0);
while(true){
if((i__40600_41021 < count__40599_41020)){
var node_41026 = chunk__40598_41019.cljs$core$IIndexed$_nth$arity$2(null, i__40600_41021);
if(cljs.core.not(node_41026.shadow$old)){
var path_match_41027 = shadow.cljs.devtools.client.browser.match_paths(node_41026.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41027)){
var new_link_41029 = (function (){var G__40656 = node_41026.cloneNode(true);
G__40656.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41027),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40656;
})();
(node_41026.shadow$old = true);

(new_link_41029.onload = ((function (seq__40594_41018,chunk__40598_41019,count__40599_41020,i__40600_41021,seq__40107,chunk__40109,count__40110,i__40111,new_link_41029,path_match_41027,node_41026,path,seq__40107__$1,temp__5823__auto__,map__40106,map__40106__$1,msg,updates,reload_info){
return (function (e){
var seq__40657_41031 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40659_41032 = null;
var count__40660_41033 = (0);
var i__40661_41034 = (0);
while(true){
if((i__40661_41034 < count__40660_41033)){
var map__40672_41036 = chunk__40659_41032.cljs$core$IIndexed$_nth$arity$2(null, i__40661_41034);
var map__40672_41037__$1 = cljs.core.__destructure_map(map__40672_41036);
var task_41038 = map__40672_41037__$1;
var fn_str_41039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40672_41037__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40672_41037__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41044 = goog.getObjectByName(fn_str_41039,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41040)].join(''));

(fn_obj_41044.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41044.cljs$core$IFn$_invoke$arity$2(path,new_link_41029) : fn_obj_41044.call(null, path,new_link_41029));


var G__41046 = seq__40657_41031;
var G__41047 = chunk__40659_41032;
var G__41048 = count__40660_41033;
var G__41049 = (i__40661_41034 + (1));
seq__40657_41031 = G__41046;
chunk__40659_41032 = G__41047;
count__40660_41033 = G__41048;
i__40661_41034 = G__41049;
continue;
} else {
var temp__5823__auto___41050__$1 = cljs.core.seq(seq__40657_41031);
if(temp__5823__auto___41050__$1){
var seq__40657_41051__$1 = temp__5823__auto___41050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40657_41051__$1)){
var c__5525__auto___41052 = cljs.core.chunk_first(seq__40657_41051__$1);
var G__41053 = cljs.core.chunk_rest(seq__40657_41051__$1);
var G__41054 = c__5525__auto___41052;
var G__41055 = cljs.core.count(c__5525__auto___41052);
var G__41056 = (0);
seq__40657_41031 = G__41053;
chunk__40659_41032 = G__41054;
count__40660_41033 = G__41055;
i__40661_41034 = G__41056;
continue;
} else {
var map__40674_41057 = cljs.core.first(seq__40657_41051__$1);
var map__40674_41058__$1 = cljs.core.__destructure_map(map__40674_41057);
var task_41059 = map__40674_41058__$1;
var fn_str_41060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40674_41058__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40674_41058__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41062 = goog.getObjectByName(fn_str_41060,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41061)].join(''));

(fn_obj_41062.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41062.cljs$core$IFn$_invoke$arity$2(path,new_link_41029) : fn_obj_41062.call(null, path,new_link_41029));


var G__41063 = cljs.core.next(seq__40657_41051__$1);
var G__41064 = null;
var G__41065 = (0);
var G__41066 = (0);
seq__40657_41031 = G__41063;
chunk__40659_41032 = G__41064;
count__40660_41033 = G__41065;
i__40661_41034 = G__41066;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41026);
});})(seq__40594_41018,chunk__40598_41019,count__40599_41020,i__40600_41021,seq__40107,chunk__40109,count__40110,i__40111,new_link_41029,path_match_41027,node_41026,path,seq__40107__$1,temp__5823__auto__,map__40106,map__40106__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41027], 0));

goog.dom.insertSiblingAfter(new_link_41029,node_41026);


var G__41067 = seq__40594_41018;
var G__41068 = chunk__40598_41019;
var G__41069 = count__40599_41020;
var G__41070 = (i__40600_41021 + (1));
seq__40594_41018 = G__41067;
chunk__40598_41019 = G__41068;
count__40599_41020 = G__41069;
i__40600_41021 = G__41070;
continue;
} else {
var G__41074 = seq__40594_41018;
var G__41075 = chunk__40598_41019;
var G__41076 = count__40599_41020;
var G__41077 = (i__40600_41021 + (1));
seq__40594_41018 = G__41074;
chunk__40598_41019 = G__41075;
count__40599_41020 = G__41076;
i__40600_41021 = G__41077;
continue;
}
} else {
var G__41078 = seq__40594_41018;
var G__41079 = chunk__40598_41019;
var G__41080 = count__40599_41020;
var G__41081 = (i__40600_41021 + (1));
seq__40594_41018 = G__41078;
chunk__40598_41019 = G__41079;
count__40599_41020 = G__41080;
i__40600_41021 = G__41081;
continue;
}
} else {
var temp__5823__auto___41082__$1 = cljs.core.seq(seq__40594_41018);
if(temp__5823__auto___41082__$1){
var seq__40594_41083__$1 = temp__5823__auto___41082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40594_41083__$1)){
var c__5525__auto___41085 = cljs.core.chunk_first(seq__40594_41083__$1);
var G__41086 = cljs.core.chunk_rest(seq__40594_41083__$1);
var G__41087 = c__5525__auto___41085;
var G__41088 = cljs.core.count(c__5525__auto___41085);
var G__41089 = (0);
seq__40594_41018 = G__41086;
chunk__40598_41019 = G__41087;
count__40599_41020 = G__41088;
i__40600_41021 = G__41089;
continue;
} else {
var node_41090 = cljs.core.first(seq__40594_41083__$1);
if(cljs.core.not(node_41090.shadow$old)){
var path_match_41093 = shadow.cljs.devtools.client.browser.match_paths(node_41090.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41093)){
var new_link_41095 = (function (){var G__40686 = node_41090.cloneNode(true);
G__40686.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41093),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40686;
})();
(node_41090.shadow$old = true);

(new_link_41095.onload = ((function (seq__40594_41018,chunk__40598_41019,count__40599_41020,i__40600_41021,seq__40107,chunk__40109,count__40110,i__40111,new_link_41095,path_match_41093,node_41090,seq__40594_41083__$1,temp__5823__auto___41082__$1,path,seq__40107__$1,temp__5823__auto__,map__40106,map__40106__$1,msg,updates,reload_info){
return (function (e){
var seq__40692_41097 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__40695_41098 = null;
var count__40696_41099 = (0);
var i__40697_41100 = (0);
while(true){
if((i__40697_41100 < count__40696_41099)){
var map__40709_41103 = chunk__40695_41098.cljs$core$IIndexed$_nth$arity$2(null, i__40697_41100);
var map__40709_41104__$1 = cljs.core.__destructure_map(map__40709_41103);
var task_41105 = map__40709_41104__$1;
var fn_str_41106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709_41104__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40709_41104__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41108 = goog.getObjectByName(fn_str_41106,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41107)].join(''));

(fn_obj_41108.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41108.cljs$core$IFn$_invoke$arity$2(path,new_link_41095) : fn_obj_41108.call(null, path,new_link_41095));


var G__41109 = seq__40692_41097;
var G__41110 = chunk__40695_41098;
var G__41111 = count__40696_41099;
var G__41112 = (i__40697_41100 + (1));
seq__40692_41097 = G__41109;
chunk__40695_41098 = G__41110;
count__40696_41099 = G__41111;
i__40697_41100 = G__41112;
continue;
} else {
var temp__5823__auto___41113__$2 = cljs.core.seq(seq__40692_41097);
if(temp__5823__auto___41113__$2){
var seq__40692_41114__$1 = temp__5823__auto___41113__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40692_41114__$1)){
var c__5525__auto___41115 = cljs.core.chunk_first(seq__40692_41114__$1);
var G__41116 = cljs.core.chunk_rest(seq__40692_41114__$1);
var G__41117 = c__5525__auto___41115;
var G__41118 = cljs.core.count(c__5525__auto___41115);
var G__41119 = (0);
seq__40692_41097 = G__41116;
chunk__40695_41098 = G__41117;
count__40696_41099 = G__41118;
i__40697_41100 = G__41119;
continue;
} else {
var map__40712_41120 = cljs.core.first(seq__40692_41114__$1);
var map__40712_41121__$1 = cljs.core.__destructure_map(map__40712_41120);
var task_41122 = map__40712_41121__$1;
var fn_str_41123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40712_41121__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40712_41121__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41125 = goog.getObjectByName(fn_str_41123,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41124)].join(''));

(fn_obj_41125.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41125.cljs$core$IFn$_invoke$arity$2(path,new_link_41095) : fn_obj_41125.call(null, path,new_link_41095));


var G__41126 = cljs.core.next(seq__40692_41114__$1);
var G__41127 = null;
var G__41128 = (0);
var G__41129 = (0);
seq__40692_41097 = G__41126;
chunk__40695_41098 = G__41127;
count__40696_41099 = G__41128;
i__40697_41100 = G__41129;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41090);
});})(seq__40594_41018,chunk__40598_41019,count__40599_41020,i__40600_41021,seq__40107,chunk__40109,count__40110,i__40111,new_link_41095,path_match_41093,node_41090,seq__40594_41083__$1,temp__5823__auto___41082__$1,path,seq__40107__$1,temp__5823__auto__,map__40106,map__40106__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41093], 0));

goog.dom.insertSiblingAfter(new_link_41095,node_41090);


var G__41130 = cljs.core.next(seq__40594_41083__$1);
var G__41131 = null;
var G__41132 = (0);
var G__41133 = (0);
seq__40594_41018 = G__41130;
chunk__40598_41019 = G__41131;
count__40599_41020 = G__41132;
i__40600_41021 = G__41133;
continue;
} else {
var G__41134 = cljs.core.next(seq__40594_41083__$1);
var G__41135 = null;
var G__41136 = (0);
var G__41137 = (0);
seq__40594_41018 = G__41134;
chunk__40598_41019 = G__41135;
count__40599_41020 = G__41136;
i__40600_41021 = G__41137;
continue;
}
} else {
var G__41138 = cljs.core.next(seq__40594_41083__$1);
var G__41139 = null;
var G__41140 = (0);
var G__41141 = (0);
seq__40594_41018 = G__41138;
chunk__40598_41019 = G__41139;
count__40599_41020 = G__41140;
i__40600_41021 = G__41141;
continue;
}
}
} else {
}
}
break;
}


var G__41142 = cljs.core.next(seq__40107__$1);
var G__41143 = null;
var G__41144 = (0);
var G__41145 = (0);
seq__40107 = G__41142;
chunk__40109 = G__41143;
count__40110 = G__41144;
i__40111 = G__41145;
continue;
} else {
var G__41146 = cljs.core.next(seq__40107__$1);
var G__41147 = null;
var G__41148 = (0);
var G__41149 = (0);
seq__40107 = G__41146;
chunk__40109 = G__41147;
count__40110 = G__41148;
i__40111 = G__41149;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__40735){
var map__40737 = p__40735;
var map__40737__$1 = cljs.core.__destructure_map(map__40737);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40737__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40738,done,error){
var map__40739 = p__40738;
var map__40739__$1 = cljs.core.__destructure_map(map__40739);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40739__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40744,done,error){
var map__40745 = p__40744;
var map__40745__$1 = cljs.core.__destructure_map(map__40745);
var msg = map__40745__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40745__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40745__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40745__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40748){
var map__40749 = p__40748;
var map__40749__$1 = cljs.core.__destructure_map(map__40749);
var src = map__40749__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40749__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40751 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40751) : done.call(null, G__40751));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40754){
var map__40755 = p__40754;
var map__40755__$1 = cljs.core.__destructure_map(map__40755);
var msg__$1 = map__40755__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40755__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e40758){var ex = e40758;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40760){
var map__40761 = p__40760;
var map__40761__$1 = cljs.core.__destructure_map(map__40761);
var env = map__40761__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40761__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40768){
var map__40769 = p__40768;
var map__40769__$1 = cljs.core.__destructure_map(map__40769);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40769__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40777){
var map__40778 = p__40777;
var map__40778__$1 = cljs.core.__destructure_map(map__40778);
var svc = map__40778__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40778__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
