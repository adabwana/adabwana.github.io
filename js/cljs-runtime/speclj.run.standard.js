goog.provide('speclj.run.standard');
speclj.run.standard.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){
var self__ = this;
var this$__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (this$,description,reporters){
var self__ = this;
var this$__$1 = this;
var run_results = speclj.running.do_description(description,reporters);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__44852_44962 = cljs.core.seq(speclj.running.filter_focused(cljs.core.deref(self__.descriptions)));
var chunk__44853_44963 = null;
var count__44854_44964 = (0);
var i__44855_44965 = (0);
while(true){
if((i__44855_44965 < count__44854_44964)){
var description_44966 = chunk__44853_44963.cljs$core$IIndexed$_nth$arity$2(null, i__44855_44965);
this$__$1.speclj$running$Runner$run_description$arity$3(null, description_44966,reporters);


var G__44967 = seq__44852_44962;
var G__44968 = chunk__44853_44963;
var G__44969 = count__44854_44964;
var G__44970 = (i__44855_44965 + (1));
seq__44852_44962 = G__44967;
chunk__44853_44963 = G__44968;
count__44854_44964 = G__44969;
i__44855_44965 = G__44970;
continue;
} else {
var temp__5823__auto___44971 = cljs.core.seq(seq__44852_44962);
if(temp__5823__auto___44971){
var seq__44852_44972__$1 = temp__5823__auto___44971;
if(cljs.core.chunked_seq_QMARK_(seq__44852_44972__$1)){
var c__5525__auto___44973 = cljs.core.chunk_first(seq__44852_44972__$1);
var G__44974 = cljs.core.chunk_rest(seq__44852_44972__$1);
var G__44975 = c__5525__auto___44973;
var G__44976 = cljs.core.count(c__5525__auto___44973);
var G__44977 = (0);
seq__44852_44962 = G__44974;
chunk__44853_44963 = G__44975;
count__44854_44964 = G__44976;
i__44855_44965 = G__44977;
continue;
} else {
var description_44978 = cljs.core.first(seq__44852_44972__$1);
this$__$1.speclj$running$Runner$run_description$arity$3(null, description_44978,reporters);


var G__44979 = cljs.core.next(seq__44852_44972__$1);
var G__44980 = null;
var G__44981 = (0);
var G__44982 = (0);
seq__44852_44962 = G__44979;
chunk__44853_44963 = G__44980;
count__44854_44964 = G__44981;
i__44855_44965 = G__44982;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_(reporters,cljs.core.deref(self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"num","num",-669195096,null),new cljs.core.Symbol(null,"descriptions","descriptions",817338403,null),new cljs.core.Symbol(null,"results","results",506361414,null)], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write(writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer(cljs.core.deref(x__$1.descriptions),writer,opts);

return cljs.core._write(writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
return cljs.core._write(writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_(speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_(speclj.config.default_runner,speclj.run.standard.new_standard_runner());
speclj.run.standard.armed = false;
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44983 = arguments.length;
var i__5727__auto___44984 = (0);
while(true){
if((i__5727__auto___44984 < len__5726__auto___44983)){
args__5732__auto__.push((arguments[i__5727__auto___44984]));

var G__44985 = (i__5727__auto___44984 + (1));
i__5727__auto___44984 = G__44985;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(speclj.config.default_config,new cljs.core.Keyword(null,"runner","runner",1945441304)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,configurations)], 0)),(function (){
var temp__5821__auto___44986 = speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5821__auto___44986)){
var filter_msg_44987 = temp__5821__auto___44986;
speclj.reporting.report_message_STAR_(speclj.config.active_reporters(),filter_msg_44987);
} else {
}

speclj.running.run_and_report(speclj.config.active_runner(),speclj.config.active_reporters());

return speclj.results.fail_count(cljs.core.deref(speclj.config.active_runner().results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq44957){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44957));
}));


//# sourceMappingURL=speclj.run.standard.js.map
