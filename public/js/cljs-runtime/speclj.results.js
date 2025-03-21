goog.provide('speclj.results');

/**
* @constructor
*/
speclj.results.PassResult = (function (characteristic,seconds){
this.characteristic = characteristic;
this.seconds = seconds;
});

(speclj.results.PassResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"characteristic","characteristic",-1464926600,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null)], null);
}));

(speclj.results.PassResult.cljs$lang$type = true);

(speclj.results.PassResult.cljs$lang$ctorStr = "speclj.results/PassResult");

(speclj.results.PassResult.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.results/PassResult");
}));

/**
 * Positional factory function for speclj.results/PassResult.
 */
speclj.results.__GT_PassResult = (function speclj$results$__GT_PassResult(characteristic,seconds){
return (new speclj.results.PassResult(characteristic,seconds));
});


/**
* @constructor
*/
speclj.results.FailResult = (function (characteristic,seconds,failure){
this.characteristic = characteristic;
this.seconds = seconds;
this.failure = failure;
});

(speclj.results.FailResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"characteristic","characteristic",-1464926600,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"failure","failure",-1934019890,null)], null);
}));

(speclj.results.FailResult.cljs$lang$type = true);

(speclj.results.FailResult.cljs$lang$ctorStr = "speclj.results/FailResult");

(speclj.results.FailResult.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.results/FailResult");
}));

/**
 * Positional factory function for speclj.results/FailResult.
 */
speclj.results.__GT_FailResult = (function speclj$results$__GT_FailResult(characteristic,seconds,failure){
return (new speclj.results.FailResult(characteristic,seconds,failure));
});


/**
* @constructor
*/
speclj.results.PendingResult = (function (characteristic,seconds,exception){
this.characteristic = characteristic;
this.seconds = seconds;
this.exception = exception;
});

(speclj.results.PendingResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"characteristic","characteristic",-1464926600,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], null);
}));

(speclj.results.PendingResult.cljs$lang$type = true);

(speclj.results.PendingResult.cljs$lang$ctorStr = "speclj.results/PendingResult");

(speclj.results.PendingResult.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.results/PendingResult");
}));

/**
 * Positional factory function for speclj.results/PendingResult.
 */
speclj.results.__GT_PendingResult = (function speclj$results$__GT_PendingResult(characteristic,seconds,exception){
return (new speclj.results.PendingResult(characteristic,seconds,exception));
});


/**
* @constructor
*/
speclj.results.ErrorResult = (function (characteristic,seconds,exception){
this.characteristic = characteristic;
this.seconds = seconds;
this.exception = exception;
});

(speclj.results.ErrorResult.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"characteristic","characteristic",-1464926600,null),new cljs.core.Symbol(null,"seconds","seconds",1195265333,null),new cljs.core.Symbol(null,"exception","exception",1305254463,null)], null);
}));

(speclj.results.ErrorResult.cljs$lang$type = true);

(speclj.results.ErrorResult.cljs$lang$ctorStr = "speclj.results/ErrorResult");

(speclj.results.ErrorResult.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"speclj.results/ErrorResult");
}));

/**
 * Positional factory function for speclj.results/ErrorResult.
 */
speclj.results.__GT_ErrorResult = (function speclj$results$__GT_ErrorResult(characteristic,seconds,exception){
return (new speclj.results.ErrorResult(characteristic,seconds,exception));
});

speclj.results.pass_result = (function speclj$results$pass_result(characteristic,seconds){
return (new speclj.results.PassResult(characteristic,seconds));
});
speclj.results.fail_result = (function speclj$results$fail_result(characteristic,seconds,failure){
return (new speclj.results.FailResult(characteristic,seconds,failure));
});
speclj.results.pending_result = (function speclj$results$pending_result(characteristic,seconds,exception){
return (new speclj.results.PendingResult(characteristic,seconds,exception));
});
speclj.results.error_result = (function speclj$results$error_result(exception){
return (new speclj.results.ErrorResult(null,(0),exception));
});
speclj.results.pass_QMARK_ = (function speclj$results$pass_QMARK_(result){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(result),speclj.results.PassResult);
});
speclj.results.fail_QMARK_ = (function speclj$results$fail_QMARK_(result){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(result),speclj.results.FailResult);
});
speclj.results.pending_QMARK_ = (function speclj$results$pending_QMARK_(result){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(result),speclj.results.PendingResult);
});
speclj.results.error_QMARK_ = (function speclj$results$error_QMARK_(result){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(result),speclj.results.ErrorResult);
});
speclj.results.failure_QMARK_ = (function speclj$results$failure_QMARK_(result){
return ((speclj.results.fail_QMARK_(result)) || (speclj.results.error_QMARK_(result)));
});
speclj.results.fail_count = (function speclj$results$fail_count(results){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.results.failure_QMARK_,results));
});
speclj.results.categorize = (function speclj$results$categorize(results){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tally,result){
if(speclj.results.pending_QMARK_(result)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tally,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pending","pending",-220036727)], null),cljs.core.conj,result);
} else {
if(speclj.results.error_QMARK_(result)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tally,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,result);
} else {
if(speclj.results.fail_QMARK_(result)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tally,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null),cljs.core.conj,result);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tally,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pass","pass",1574159993)], null),cljs.core.conj,result);

}
}
}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pending","pending",-220036727),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"fail","fail",1706214930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pass","pass",1574159993),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.PersistentVector.EMPTY], null),results);
});

//# sourceMappingURL=speclj.results.js.map
