goog.provide('speclj.config');
speclj.config.default_reporters = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
speclj.config.active_reporters = (function speclj$config$active_reporters(){
if(cljs.core.truth_(speclj.config._STAR_reporters_STAR_)){
return speclj.config._STAR_reporters_STAR_;
} else {
var temp__5821__auto__ = cljs.core.deref(speclj.config.default_reporters);
if(cljs.core.truth_(temp__5821__auto__)){
var reporters = temp__5821__auto__;
return reporters;
} else {
throw (new Error("*reporters* is unbound and no default value has been provided"));
}
}
});
speclj.config.default_runner = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
speclj.config.default_runner_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
speclj.config.active_runner = (function speclj$config$active_runner(){
if(cljs.core.truth_(speclj.config._STAR_runner_STAR_)){
return speclj.config._STAR_runner_STAR_;
} else {
var temp__5821__auto__ = cljs.core.deref(speclj.config.default_runner);
if(cljs.core.truth_(temp__5821__auto__)){
var runner = temp__5821__auto__;
return runner;
} else {
throw (new Error("*runner* is unbound and no default value has been provided"));
}
}
});
speclj.config._STAR_omit_pending_QMARK__STAR_ = false;
speclj.config._STAR_color_QMARK__STAR_ = false;
speclj.config._STAR_full_stack_trace_QMARK__STAR_ = false;
speclj.config._STAR_tag_filter_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include","include",153360230),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"exclude","exclude",-1230250334),cljs.core.PersistentHashSet.EMPTY], null);
speclj.config.default_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"specs","specs",1426570741),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spec"], null),new cljs.core.Keyword(null,"runner","runner",1945441304),"standard",new cljs.core.Keyword(null,"reporters","reporters",-373999166),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["progress"], null),new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"omit-pending","omit-pending",-1591740250),false], null);
speclj.config.config_bindings = (function speclj$config$config_bindings(){
throw "Not Supported in ClojureScript";
});
speclj.config.load_runner = (function speclj$config$load_runner(name){
try{return speclj.platform.dynamically_invoke(["speclj.run.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-runner"].join(''));
}catch (e44425){var e = e44425;
throw (new Error(["Failed to load runner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter_by_name = (function speclj$config$load_reporter_by_name(name){
try{return speclj.platform.dynamically_invoke(["speclj.report.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-reporter"].join(''));
}catch (e44426){var e = e44426;
throw (new Error(["Failed to load reporter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter = (function speclj$config$load_reporter(name_or_object){
if(typeof name_or_object === 'string'){
return speclj.config.load_reporter_by_name(name_or_object);
} else {
return name_or_object;
}
});
speclj.config.parse_tags = (function speclj$config$parse_tags(values){
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"includes","includes",-438304563),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"excludes","excludes",-1791725945),cljs.core.PersistentHashSet.EMPTY], null);
var values__$1 = values;
while(true){
if(cljs.core.seq(values__$1)){
var value = cljs.core.name(cljs.core.first(values__$1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",cljs.core.first(value))){
var G__44443 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(value))));
var G__44444 = cljs.core.rest(values__$1);
result = G__44443;
values__$1 = G__44444;
continue;
} else {
var G__44445 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"includes","includes",-438304563)], null),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value));
var G__44446 = cljs.core.rest(values__$1);
result = G__44445;
values__$1 = G__44446;
continue;
}
} else {
return result;
}
break;
}
});
speclj.config.config_mappings = (function speclj$config$config_mappings(_){
throw "Not Supported in ClojureScript";
});
/**
 * Runs the given function with all the configurations set.  Useful in cljs because config-mappings can't be used.
 */
speclj.config.with_config = (function speclj$config$with_config(config,action){
var _STAR_runner_STAR__orig_val__44428 = speclj.config._STAR_runner_STAR_;
var _STAR_reporters_STAR__orig_val__44429 = speclj.config._STAR_reporters_STAR_;
var _STAR_specs_STAR__orig_val__44430 = speclj.config._STAR_specs_STAR_;
var _STAR_color_QMARK__STAR__orig_val__44431 = speclj.config._STAR_color_QMARK__STAR_;
var _STAR_omit_pending_QMARK__STAR__orig_val__44432 = speclj.config._STAR_omit_pending_QMARK__STAR_;
var _STAR_full_stack_trace_QMARK__STAR__orig_val__44433 = speclj.config._STAR_full_stack_trace_QMARK__STAR_;
var _STAR_tag_filter_STAR__orig_val__44434 = speclj.config._STAR_tag_filter_STAR_;
var _STAR_runner_STAR__temp_val__44436 = (cljs.core.truth_(new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(config))?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["loading runner in config"], 0));

return speclj.config.load_runner(new cljs.core.Keyword(null,"runner","runner",1945441304).cljs$core$IFn$_invoke$arity$1(config));
})()
:speclj.config.active_runner());
var _STAR_reporters_STAR__temp_val__44437 = (cljs.core.truth_(new cljs.core.Keyword(null,"reporters","reporters",-373999166).cljs$core$IFn$_invoke$arity$1(config))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(speclj.config.load_reporter,new cljs.core.Keyword(null,"reporters","reporters",-373999166).cljs$core$IFn$_invoke$arity$1(config)):speclj.config.active_reporters());
var _STAR_specs_STAR__temp_val__44438 = new cljs.core.Keyword(null,"specs","specs",1426570741).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_color_QMARK__STAR__temp_val__44439 = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_omit_pending_QMARK__STAR__temp_val__44440 = new cljs.core.Keyword(null,"omit-pending","omit-pending",-1591740250).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_full_stack_trace_QMARK__STAR__temp_val__44441 = (!((new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394).cljs$core$IFn$_invoke$arity$1(config) == null)));
var _STAR_tag_filter_STAR__temp_val__44442 = speclj.config.parse_tags(new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(config));
(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__temp_val__44436);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__temp_val__44437);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__temp_val__44438);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__temp_val__44439);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__temp_val__44440);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__temp_val__44441);

(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__temp_val__44442);

try{return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null, ));
}finally {(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__orig_val__44434);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__orig_val__44433);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__orig_val__44432);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__orig_val__44431);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__orig_val__44430);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__orig_val__44429);

(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__orig_val__44428);
}});

//# sourceMappingURL=speclj.config.js.map
