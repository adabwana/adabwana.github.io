goog.provide('speclj.report.documentation');
speclj.report.documentation.level_of = (function speclj$report$documentation$level_of(component){
var component__$1 = cljs.core.deref(component.parent);
var level = (0);
while(true){
if(cljs.core.truth_(component__$1)){
var G__44771 = cljs.core.deref(component__$1.parent);
var G__44772 = (level + (1));
component__$1 = G__44771;
level = G__44772;
continue;
} else {
return level;
}
break;
}
});
speclj.report.documentation.maybe_focused = (function speclj$report$documentation$maybe_focused(component,text){
if(cljs.core.not(cljs.core.deref(component.is_focused_QMARK_))){
return text;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.yellow("[FOCUS]"))].join('');
}
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.documentation.DocumentationReporter = (function (){
});
(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0));

return cljs.core.flush();
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
var level = speclj.report.documentation.level_of(description);
if((level === (0))){
cljs.core.println();
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.report.documentation.maybe_focused(description,cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(level,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([description.name], 0))))], 0));

return cljs.core.flush();
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of(characteristic);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.report.documentation.maybe_focused(characteristic,speclj.reporting.green(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((level - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["- ",characteristic.name], 0))))], 0));

return cljs.core.flush();
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of(characteristic);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.yellow(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((level - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["- ",characteristic.name," (PENDING: ",speclj.platform.error_message(result.exception),")"], 0)))], 0));

return cljs.core.flush();
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
var characteristic = result.characteristic;
var level = speclj.report.documentation.level_of(characteristic);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.report.documentation.maybe_focused(characteristic,speclj.reporting.red(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((level - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["- ",characteristic.name," (FAILED)"], 0))))], 0));

return cljs.core.flush();
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.red(result.exception.toString())], 0));
}));

(speclj.report.documentation.DocumentationReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (this$,results){
var self__ = this;
var this$__$1 = this;
return speclj.report.progress.print_summary(results);
}));

(speclj.report.documentation.DocumentationReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.documentation.DocumentationReporter.cljs$lang$type = true);

(speclj.report.documentation.DocumentationReporter.cljs$lang$ctorStr = "speclj.report.documentation/DocumentationReporter");

(speclj.report.documentation.DocumentationReporter.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.report.documentation/DocumentationReporter");
}));

/**
 * Positional factory function for speclj.report.documentation/DocumentationReporter.
 */
speclj.report.documentation.__GT_DocumentationReporter = (function speclj$report$documentation$__GT_DocumentationReporter(){
return (new speclj.report.documentation.DocumentationReporter());
});

speclj.report.documentation.new_documentation_reporter = (function speclj$report$documentation$new_documentation_reporter(){
return (new speclj.report.documentation.DocumentationReporter());
});

//# sourceMappingURL=speclj.report.documentation.js.map
