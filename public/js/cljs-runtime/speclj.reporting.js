goog.provide('speclj.reporting');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44447_SHARP_){
return p1__44447_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_44553 = (function (reporter,message){
var x__5350__auto__ = (((reporter == null))?null:reporter);
var m__5351__auto__ = (speclj.reporting.report_message[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(reporter,message) : m__5351__auto__.call(null, reporter,message));
} else {
var m__5349__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(reporter,message) : m__5349__auto__.call(null, reporter,message));
} else {
throw cljs.core.missing_protocol("Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_44553(reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_44554 = (function (this$,description){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_description[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__5351__auto__.call(null, this$,description));
} else {
var m__5349__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__5349__auto__.call(null, this$,description));
} else {
throw cljs.core.missing_protocol("Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_44554(this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_44555 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5351__auto__.call(null, this$,result));
} else {
var m__5349__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5349__auto__.call(null, this$,result));
} else {
throw cljs.core.missing_protocol("Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_44555(this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_44556 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5351__auto__.call(null, this$,result));
} else {
var m__5349__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5349__auto__.call(null, this$,result));
} else {
throw cljs.core.missing_protocol("Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_44556(this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_44557 = (function (this$,result){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5351__auto__.call(null, this$,result));
} else {
var m__5349__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5349__auto__.call(null, this$,result));
} else {
throw cljs.core.missing_protocol("Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_44557(this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_44558 = (function (this$,results){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,results) : m__5351__auto__.call(null, this$,results));
} else {
var m__5349__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,results) : m__5349__auto__.call(null, this$,results));
} else {
throw cljs.core.missing_protocol("Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_44558(this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_44559 = (function (this$,exception){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (speclj.reporting.report_error[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,exception) : m__5351__auto__.call(null, this$,exception));
} else {
var m__5349__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,exception) : m__5349__auto__.call(null, this$,exception));
} else {
throw cljs.core.missing_protocol("Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_44559(this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44461 = cljs.core.get_global_hierarchy;
return (fexpr__44461.cljs$core$IFn$_invoke$arity$0 ? fexpr__44461.cljs$core$IFn$_invoke$arity$0() : fexpr__44461.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type(result);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null, speclj.results.PassResult,(function (result,reporters){
var seq__44462 = cljs.core.seq(reporters);
var chunk__44463 = null;
var count__44464 = (0);
var i__44465 = (0);
while(true){
if((i__44465 < count__44464)){
var reporter = chunk__44463.cljs$core$IIndexed$_nth$arity$2(null, i__44465);
speclj.reporting.report_pass(reporter,result);


var G__44560 = seq__44462;
var G__44561 = chunk__44463;
var G__44562 = count__44464;
var G__44563 = (i__44465 + (1));
seq__44462 = G__44560;
chunk__44463 = G__44561;
count__44464 = G__44562;
i__44465 = G__44563;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44462);
if(temp__5823__auto__){
var seq__44462__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44462__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44462__$1);
var G__44564 = cljs.core.chunk_rest(seq__44462__$1);
var G__44565 = c__5525__auto__;
var G__44566 = cljs.core.count(c__5525__auto__);
var G__44567 = (0);
seq__44462 = G__44564;
chunk__44463 = G__44565;
count__44464 = G__44566;
i__44465 = G__44567;
continue;
} else {
var reporter = cljs.core.first(seq__44462__$1);
speclj.reporting.report_pass(reporter,result);


var G__44568 = cljs.core.next(seq__44462__$1);
var G__44569 = null;
var G__44570 = (0);
var G__44571 = (0);
seq__44462 = G__44568;
chunk__44463 = G__44569;
count__44464 = G__44570;
i__44465 = G__44571;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null, speclj.results.FailResult,(function (result,reporters){
var seq__44467 = cljs.core.seq(reporters);
var chunk__44468 = null;
var count__44469 = (0);
var i__44470 = (0);
while(true){
if((i__44470 < count__44469)){
var reporter = chunk__44468.cljs$core$IIndexed$_nth$arity$2(null, i__44470);
speclj.reporting.report_fail(reporter,result);


var G__44572 = seq__44467;
var G__44573 = chunk__44468;
var G__44574 = count__44469;
var G__44575 = (i__44470 + (1));
seq__44467 = G__44572;
chunk__44468 = G__44573;
count__44469 = G__44574;
i__44470 = G__44575;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44467);
if(temp__5823__auto__){
var seq__44467__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44467__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44467__$1);
var G__44576 = cljs.core.chunk_rest(seq__44467__$1);
var G__44577 = c__5525__auto__;
var G__44578 = cljs.core.count(c__5525__auto__);
var G__44579 = (0);
seq__44467 = G__44576;
chunk__44468 = G__44577;
count__44469 = G__44578;
i__44470 = G__44579;
continue;
} else {
var reporter = cljs.core.first(seq__44467__$1);
speclj.reporting.report_fail(reporter,result);


var G__44580 = cljs.core.next(seq__44467__$1);
var G__44581 = null;
var G__44582 = (0);
var G__44583 = (0);
seq__44467 = G__44580;
chunk__44468 = G__44581;
count__44469 = G__44582;
i__44470 = G__44583;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null, speclj.results.PendingResult,(function (result,reporters){
var seq__44519 = cljs.core.seq(reporters);
var chunk__44520 = null;
var count__44521 = (0);
var i__44522 = (0);
while(true){
if((i__44522 < count__44521)){
var reporter = chunk__44520.cljs$core$IIndexed$_nth$arity$2(null, i__44522);
speclj.reporting.report_pending(reporter,result);


var G__44584 = seq__44519;
var G__44585 = chunk__44520;
var G__44586 = count__44521;
var G__44587 = (i__44522 + (1));
seq__44519 = G__44584;
chunk__44520 = G__44585;
count__44521 = G__44586;
i__44522 = G__44587;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44519);
if(temp__5823__auto__){
var seq__44519__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44519__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44519__$1);
var G__44588 = cljs.core.chunk_rest(seq__44519__$1);
var G__44589 = c__5525__auto__;
var G__44590 = cljs.core.count(c__5525__auto__);
var G__44591 = (0);
seq__44519 = G__44588;
chunk__44520 = G__44589;
count__44521 = G__44590;
i__44522 = G__44591;
continue;
} else {
var reporter = cljs.core.first(seq__44519__$1);
speclj.reporting.report_pending(reporter,result);


var G__44592 = cljs.core.next(seq__44519__$1);
var G__44593 = null;
var G__44594 = (0);
var G__44595 = (0);
seq__44519 = G__44592;
chunk__44520 = G__44593;
count__44521 = G__44594;
i__44522 = G__44595;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null, speclj.results.ErrorResult,(function (result,reporters){
var seq__44524 = cljs.core.seq(reporters);
var chunk__44525 = null;
var count__44526 = (0);
var i__44527 = (0);
while(true){
if((i__44527 < count__44526)){
var reporter = chunk__44525.cljs$core$IIndexed$_nth$arity$2(null, i__44527);
speclj.reporting.report_error(reporter,result);


var G__44596 = seq__44524;
var G__44597 = chunk__44525;
var G__44598 = count__44526;
var G__44599 = (i__44527 + (1));
seq__44524 = G__44596;
chunk__44525 = G__44597;
count__44526 = G__44598;
i__44527 = G__44599;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44524);
if(temp__5823__auto__){
var seq__44524__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44524__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44524__$1);
var G__44600 = cljs.core.chunk_rest(seq__44524__$1);
var G__44601 = c__5525__auto__;
var G__44602 = cljs.core.count(c__5525__auto__);
var G__44603 = (0);
seq__44524 = G__44600;
chunk__44525 = G__44601;
count__44526 = G__44602;
i__44527 = G__44603;
continue;
} else {
var reporter = cljs.core.first(seq__44524__$1);
speclj.reporting.report_error(reporter,result);


var G__44604 = cljs.core.next(seq__44524__$1);
var G__44605 = null;
var G__44606 = (0);
var G__44607 = (0);
seq__44524 = G__44604;
chunk__44525 = G__44605;
count__44526 = G__44606;
i__44527 = G__44607;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer("31");
speclj.reporting.green = speclj.reporting.stylizer("32");
speclj.reporting.yellow = speclj.reporting.stylizer("33");
speclj.reporting.grey = speclj.reporting.stylizer("90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t...",n,"stack levels elided ..."], 0));
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_44608 = speclj.platform.stack_trace(exception);
var elides_44609 = (0);
while(true){
if(cljs.core.seq(levels_44608)){
var level_44610 = cljs.core.first(levels_44608);
if(speclj.platform.elide_level_QMARK_(level_44610)){
var G__44611 = cljs.core.rest(levels_44608);
var G__44612 = (elides_44609 + (1));
levels_44608 = G__44611;
elides_44609 = G__44612;
continue;
} else {
speclj.reporting.print_elides(elides_44609);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_44610)], 0));

var G__44613 = cljs.core.rest(levels_44608);
var G__44614 = (0);
levels_44608 = G__44613;
elides_44609 = G__44614;
continue;
}
} else {
speclj.reporting.print_elides(elides_44609);
}
break;
}

var temp__5821__auto__ = speclj.platform.cause(exception);
if(cljs.core.truth_(temp__5821__auto__)){
var cause = temp__5821__auto__;
return (speclj.reporting.print_exception.cljs$core$IFn$_invoke$arity$2 ? speclj.reporting.print_exception.cljs$core$IFn$_invoke$arity$2("Caused by:",cause) : speclj.reporting.print_exception.call(null, "Caused by:",cause));
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception)], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception)], 0));
}

return speclj.reporting.print_stack_levels(exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44528_44615 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44529_44616 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44530_44617 = true;
var _STAR_print_fn_STAR__temp_val__44531_44618 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44530_44617);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44531_44618);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace(exception);
} else {
speclj.reporting.print_exception(null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44529_44616);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44528_44615);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44619 = arguments.length;
var i__5727__auto___44620 = (0);
while(true){
if((i__5727__auto___44620 < len__5726__auto___44619)){
args__5732__auto__.push((arguments[i__5727__auto___44620]));

var G__44621 = (i__5727__auto___44620 + (1));
i__5727__auto___44620 = G__44621;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44532_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__44532_SHARP_)].join('');
}),lines);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq44533){
var G__44534 = cljs.core.first(seq44533);
var seq44533__$1 = cljs.core.next(seq44533);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44534,seq44533__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44622 = arguments.length;
var i__5727__auto___44623 = (0);
while(true){
if((i__5727__auto___44623 < len__5726__auto___44622)){
args__5732__auto__.push((arguments[i__5727__auto___44623]));

var G__44624 = (i__5727__auto___44623 + (1));
i__5727__auto___44623 = G__44624;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.cljs$core$IFn$_invoke$arity$1(spaces));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq44535){
var G__44536 = cljs.core.first(seq44535);
var seq44535__$1 = cljs.core.next(seq44535);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44536,seq44535__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__44537 = cljs.core.seq(reporters);
var chunk__44538 = null;
var count__44539 = (0);
var i__44540 = (0);
while(true){
if((i__44540 < count__44539)){
var reporter = chunk__44538.cljs$core$IIndexed$_nth$arity$2(null, i__44540);
speclj.reporting.report_description(reporter,description);


var G__44625 = seq__44537;
var G__44626 = chunk__44538;
var G__44627 = count__44539;
var G__44628 = (i__44540 + (1));
seq__44537 = G__44625;
chunk__44538 = G__44626;
count__44539 = G__44627;
i__44540 = G__44628;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44537);
if(temp__5823__auto__){
var seq__44537__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44537__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44537__$1);
var G__44633 = cljs.core.chunk_rest(seq__44537__$1);
var G__44634 = c__5525__auto__;
var G__44635 = cljs.core.count(c__5525__auto__);
var G__44636 = (0);
seq__44537 = G__44633;
chunk__44538 = G__44634;
count__44539 = G__44635;
i__44540 = G__44636;
continue;
} else {
var reporter = cljs.core.first(seq__44537__$1);
speclj.reporting.report_description(reporter,description);


var G__44637 = cljs.core.next(seq__44537__$1);
var G__44638 = null;
var G__44639 = (0);
var G__44640 = (0);
seq__44537 = G__44637;
chunk__44538 = G__44638;
count__44539 = G__44639;
i__44540 = G__44640;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__44541 = cljs.core.seq(reporters);
var chunk__44542 = null;
var count__44543 = (0);
var i__44544 = (0);
while(true){
if((i__44544 < count__44543)){
var reporter = chunk__44542.cljs$core$IIndexed$_nth$arity$2(null, i__44544);
speclj.reporting.report_runs(reporter,results);


var G__44641 = seq__44541;
var G__44642 = chunk__44542;
var G__44643 = count__44543;
var G__44644 = (i__44544 + (1));
seq__44541 = G__44641;
chunk__44542 = G__44642;
count__44543 = G__44643;
i__44544 = G__44644;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44541);
if(temp__5823__auto__){
var seq__44541__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44541__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44541__$1);
var G__44645 = cljs.core.chunk_rest(seq__44541__$1);
var G__44646 = c__5525__auto__;
var G__44647 = cljs.core.count(c__5525__auto__);
var G__44648 = (0);
seq__44541 = G__44645;
chunk__44542 = G__44646;
count__44543 = G__44647;
i__44544 = G__44648;
continue;
} else {
var reporter = cljs.core.first(seq__44541__$1);
speclj.reporting.report_runs(reporter,results);


var G__44649 = cljs.core.next(seq__44541__$1);
var G__44650 = null;
var G__44651 = (0);
var G__44652 = (0);
seq__44541 = G__44649;
chunk__44542 = G__44650;
count__44543 = G__44651;
i__44544 = G__44652;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__44545 = cljs.core.seq(reporters);
var chunk__44546 = null;
var count__44547 = (0);
var i__44548 = (0);
while(true){
if((i__44548 < count__44547)){
var reporter = chunk__44546.cljs$core$IIndexed$_nth$arity$2(null, i__44548);
speclj.reporting.report_message(reporter,message);


var G__44653 = seq__44545;
var G__44654 = chunk__44546;
var G__44655 = count__44547;
var G__44656 = (i__44548 + (1));
seq__44545 = G__44653;
chunk__44546 = G__44654;
count__44547 = G__44655;
i__44548 = G__44656;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44545);
if(temp__5823__auto__){
var seq__44545__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44545__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44545__$1);
var G__44657 = cljs.core.chunk_rest(seq__44545__$1);
var G__44658 = c__5525__auto__;
var G__44659 = cljs.core.count(c__5525__auto__);
var G__44660 = (0);
seq__44545 = G__44657;
chunk__44546 = G__44658;
count__44547 = G__44659;
i__44548 = G__44660;
continue;
} else {
var reporter = cljs.core.first(seq__44545__$1);
speclj.reporting.report_message(reporter,message);


var G__44661 = cljs.core.next(seq__44545__$1);
var G__44662 = null;
var G__44663 = (0);
var G__44664 = (0);
seq__44545 = G__44661;
chunk__44546 = G__44662;
count__44547 = G__44663;
i__44548 = G__44664;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__44549 = cljs.core.seq(reporters);
var chunk__44550 = null;
var count__44551 = (0);
var i__44552 = (0);
while(true){
if((i__44552 < count__44551)){
var reporter = chunk__44550.cljs$core$IIndexed$_nth$arity$2(null, i__44552);
speclj.reporting.report_error(reporter,exception);


var G__44665 = seq__44549;
var G__44666 = chunk__44550;
var G__44667 = count__44551;
var G__44668 = (i__44552 + (1));
seq__44549 = G__44665;
chunk__44550 = G__44666;
count__44551 = G__44667;
i__44552 = G__44668;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__44549);
if(temp__5823__auto__){
var seq__44549__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44549__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__44549__$1);
var G__44669 = cljs.core.chunk_rest(seq__44549__$1);
var G__44670 = c__5525__auto__;
var G__44671 = cljs.core.count(c__5525__auto__);
var G__44672 = (0);
seq__44549 = G__44669;
chunk__44550 = G__44670;
count__44551 = G__44671;
i__44552 = G__44672;
continue;
} else {
var reporter = cljs.core.first(seq__44549__$1);
speclj.reporting.report_error(reporter,exception);


var G__44673 = cljs.core.next(seq__44549__$1);
var G__44674 = null;
var G__44675 = (0);
var G__44676 = (0);
seq__44549 = G__44673;
chunk__44550 = G__44674;
count__44551 = G__44675;
i__44552 = G__44676;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=speclj.reporting.js.map
