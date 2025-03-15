goog.provide('speclj.report.progress');
speclj.report.progress.full_name = (function speclj$report$progress$full_name(characteristic){
var context = cljs.core.deref(characteristic.parent);
var name = characteristic.name;
while(true){
if(cljs.core.truth_(context)){
var G__44727 = cljs.core.deref(context.parent);
var G__44728 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__44727;
name = G__44728;
continue;
} else {
return name;
}
break;
}
});
speclj.report.progress.print_failure = (function speclj$report$progress$print_failure(id,result){
var characteristic = result.characteristic;
var failure = result.failure;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,") ",speclj.report.progress.full_name(characteristic)], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.red(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.platform.error_message(failure)], 0)))], 0));

if(speclj.platform.failure_QMARK_(failure)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.platform.failure_source(failure)], 0)))], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(failure)], 0)))], 0));
}
});
speclj.report.progress.print_failures = (function speclj$report$progress$print_failures(failures){
if(cljs.core.seq(failures)){
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failures:"], 0));
} else {
}

var n__5593__auto__ = cljs.core.count(failures);
var i = (0);
while(true){
if((i < n__5593__auto__)){
speclj.report.progress.print_failure((i + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(failures,i));

var G__44729 = (i + (1));
i = G__44729;
continue;
} else {
return null;
}
break;
}
});
speclj.report.progress.print_pendings = (function speclj$report$progress$print_pendings(pending_results){
if(cljs.core.truth_(speclj.config._STAR_omit_pending_QMARK__STAR_)){
return null;
} else {
if(cljs.core.seq(pending_results)){
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pending:"], 0));
} else {
}

var seq__44683 = cljs.core.seq(pending_results);
var chunk__44684 = null;
var count__44685 = (0);
var i__44686 = (0);
while(true){
if((i__44686 < count__44685)){
var result = chunk__44684.cljs$core$IIndexed$_nth$arity$2(null, i__44686);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.yellow(["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name(result.characteristic))].join(''))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message(result.exception))].join(''))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(["    ; ",speclj.platform.failure_source(result.exception)].join(''))], 0));


var G__44730 = seq__44683;
var G__44731 = chunk__44684;
var G__44732 = count__44685;
var G__44733 = (i__44686 + (1));
seq__44683 = G__44730;
chunk__44684 = G__44731;
count__44685 = G__44732;
i__44686 = G__44733;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44683);
if(temp__5823__auto__){
var seq__44683__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44683__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44683__$1);
var G__44738 = cljs.core.chunk_rest(seq__44683__$1);
var G__44739 = c__5525__auto__;
var G__44740 = cljs.core.count(c__5525__auto__);
var G__44741 = (0);
seq__44683 = G__44738;
chunk__44684 = G__44739;
count__44685 = G__44740;
i__44686 = G__44741;
continue;
} else {
var result = cljs.core.first(seq__44683__$1);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.yellow(["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name(result.characteristic))].join(''))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message(result.exception))].join(''))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(["    ; ",speclj.platform.failure_source(result.exception)].join(''))], 0));


var G__44742 = cljs.core.next(seq__44683__$1);
var G__44743 = null;
var G__44744 = (0);
var G__44745 = (0);
seq__44683 = G__44742;
chunk__44684 = G__44743;
count__44685 = G__44744;
i__44686 = G__44745;
continue;
}
} else {
return null;
}
}
break;
}
}
});
speclj.report.progress.print_errors = (function speclj$report$progress$print_errors(error_results){
if(cljs.core.seq(error_results)){
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Errors:"], 0));
} else {
}

var seq__44701_44746 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.inc,(1)),error_results)));
var chunk__44702_44747 = null;
var count__44703_44748 = (0);
var i__44704_44749 = (0);
while(true){
if((i__44704_44749 < count__44703_44748)){
var vec__44715_44750 = chunk__44702_44747.cljs$core$IIndexed$_nth$arity$2(null, i__44704_44749);
var number_44751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44715_44750,(0),null);
var result_44752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44715_44750,(1),null);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_44751,") ",speclj.reporting.red(cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_44752.exception))], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(result_44752.exception)], 0)))], 0));


var G__44753 = seq__44701_44746;
var G__44754 = chunk__44702_44747;
var G__44755 = count__44703_44748;
var G__44756 = (i__44704_44749 + (1));
seq__44701_44746 = G__44753;
chunk__44702_44747 = G__44754;
count__44703_44748 = G__44755;
i__44704_44749 = G__44756;
continue;
} else {
var temp__5823__auto___44757 = cljs.core.seq(seq__44701_44746);
if(temp__5823__auto___44757){
var seq__44701_44758__$1 = temp__5823__auto___44757;
if(cljs.core.chunked_seq_QMARK_(seq__44701_44758__$1)){
var c__5525__auto___44759 = cljs.core.chunk_first(seq__44701_44758__$1);
var G__44760 = cljs.core.chunk_rest(seq__44701_44758__$1);
var G__44761 = c__5525__auto___44759;
var G__44762 = cljs.core.count(c__5525__auto___44759);
var G__44763 = (0);
seq__44701_44746 = G__44760;
chunk__44702_44747 = G__44761;
count__44703_44748 = G__44762;
i__44704_44749 = G__44763;
continue;
} else {
var vec__44718_44764 = cljs.core.first(seq__44701_44758__$1);
var number_44765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44718_44764,(0),null);
var result_44766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44718_44764,(1),null);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_44765,") ",speclj.reporting.red(cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_44766.exception))], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.grey(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(result_44766.exception)], 0)))], 0));


var G__44767 = cljs.core.next(seq__44701_44758__$1);
var G__44768 = null;
var G__44769 = (0);
var G__44770 = (0);
seq__44701_44746 = G__44767;
chunk__44702_44747 = G__44768;
count__44703_44748 = G__44769;
i__44704_44749 = G__44770;
continue;
}
} else {
}
}
break;
}

return cljs.core.flush();
});
speclj.report.progress.print_duration = (function speclj$report$progress$print_duration(results){
cljs.core.println();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Finished in",speclj.platform.format_seconds(speclj.reporting.tally_time(results)),"seconds"], 0));
});
speclj.report.progress.color_fn_for = (function speclj$report$progress$color_fn_for(result_map){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map))))){
return speclj.reporting.red;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map)))){
return speclj.reporting.yellow;
} else {
return speclj.reporting.green;

}
}
});
speclj.report.progress.apply_pending_tally = (function speclj$report$progress$apply_pending_tally(report,tally){
if((new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(tally))," pending"].join(''));
} else {
return report;
}
});
speclj.report.progress.apply_error_tally = (function speclj$report$progress$apply_error_tally(report,tally){
if((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(tally))," errors"].join(''));
} else {
return report;
}
});
speclj.report.progress.describe_counts_for = (function speclj$report$progress$describe_counts_for(result_map){
var tally = cljs.core.zipmap(cljs.core.keys(result_map),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(result_map)));
var always_on_counts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(tally)))," examples"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(tally))," failures"].join('')], null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",speclj.report.progress.apply_error_tally(speclj.report.progress.apply_pending_tally(always_on_counts,tally),tally));
});
speclj.report.progress.print_tally = (function speclj$report$progress$print_tally(result_map){
var color_fn = speclj.report.progress.color_fn_for(result_map);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color_fn(speclj.report.progress.describe_counts_for(result_map))], 0));
});
speclj.report.progress.print_summary = (function speclj$report$progress$print_summary(results){
var result_map = speclj.results.categorize(results);
speclj.report.progress.print_failures(new cljs.core.Keyword(null,"fail","fail",1706214930).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_pendings(new cljs.core.Keyword(null,"pending","pending",-220036727).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_errors(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_duration(results);

return speclj.report.progress.print_tally(result_map);
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.progress.ProgressReporter = (function (){
});
(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.green(".")], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.yellow("*")], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.red("F")], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.red("E")], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (this$,results){
var self__ = this;
var this$__$1 = this;
cljs.core.println();

return speclj.report.progress.print_summary(results);
}));

(speclj.report.progress.ProgressReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.progress.ProgressReporter.cljs$lang$type = true);

(speclj.report.progress.ProgressReporter.cljs$lang$ctorStr = "speclj.report.progress/ProgressReporter");

(speclj.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.report.progress/ProgressReporter");
}));

/**
 * Positional factory function for speclj.report.progress/ProgressReporter.
 */
speclj.report.progress.__GT_ProgressReporter = (function speclj$report$progress$__GT_ProgressReporter(){
return (new speclj.report.progress.ProgressReporter());
});

speclj.report.progress.new_progress_reporter = (function speclj$report$progress$new_progress_reporter(){
return (new speclj.report.progress.ProgressReporter());
});
cljs.core.reset_BANG_(speclj.config.default_reporters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [speclj.report.progress.new_progress_reporter()], null));

//# sourceMappingURL=speclj.report.progress.js.map
