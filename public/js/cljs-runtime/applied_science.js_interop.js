goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41584 = arguments.length;
var i__5727__auto___41585 = (0);
while(true){
if((i__5727__auto___41585 < len__5726__auto___41584)){
args__5732__auto__.push((arguments[i__5727__auto___41585]));

var G__41586 = (i__5727__auto___41585 + (1));
i__5727__auto___41585 = G__41586;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__41342_41587 = keyvals;
var vec__41344_41588 = G__41342_41587;
var seq__41345_41589 = cljs.core.seq(vec__41344_41588);
var first__41346_41590 = cljs.core.first(seq__41345_41589);
var seq__41345_41591__$1 = cljs.core.next(seq__41345_41589);
var k_41592 = first__41346_41590;
var first__41346_41593__$1 = cljs.core.first(seq__41345_41591__$1);
var seq__41345_41594__$2 = cljs.core.next(seq__41345_41591__$1);
var v_41595 = first__41346_41593__$1;
var keyvals_41596__$1 = seq__41345_41594__$2;
var G__41342_41597__$1 = G__41342_41587;
while(true){
var vec__41348_41598 = G__41342_41597__$1;
var seq__41349_41599 = cljs.core.seq(vec__41348_41598);
var first__41350_41600 = cljs.core.first(seq__41349_41599);
var seq__41349_41601__$1 = cljs.core.next(seq__41349_41599);
var k_41602__$1 = first__41350_41600;
var first__41350_41603__$1 = cljs.core.first(seq__41349_41601__$1);
var seq__41349_41604__$2 = cljs.core.next(seq__41349_41601__$1);
var v_41605__$1 = first__41350_41603__$1;
var keyvals_41606__$2 = seq__41349_41604__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_41602__$1)] = v_41605__$1);

if(keyvals_41606__$2){
var G__41607 = keyvals_41606__$2;
G__41342_41597__$1 = G__41607;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq41337){
var G__41338 = cljs.core.first(seq41337);
var seq41337__$1 = cljs.core.next(seq41337);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41338,seq41337__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__41354 = arguments.length;
switch (G__41354) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj41357 = obj;
if((!((obj41357 == null)))){
return (obj41357[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj41358 = obj;
if((!((obj41358 == null)))){
return (obj41358[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__40573__auto__ = (function (){var obj41359 = obj;
if((!((obj41359 == null)))){
return (obj41359[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__40573__auto__)){
return not_found;
} else {
return val__40573__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__41366 = arguments.length;
switch (G__41366) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj41369 = self__.obj;
if((!((obj41369 == null)))){
return (obj41369[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__40573__auto__ = (function (){var obj41372 = self__.obj;
if((!((obj41372 == null)))){
return (obj41372[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__40573__auto__)){
return not_found;
} else {
return val__40573__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41610 = arguments.length;
var i__5727__auto___41611 = (0);
while(true){
if((i__5727__auto___41611 < len__5726__auto___41610)){
args__5732__auto__.push((arguments[i__5727__auto___41611]));

var G__41612 = (i__5727__auto___41611 + (1));
i__5727__auto___41611 = G__41612;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__41394 = keyvals;
var vec__41396 = G__41394;
var seq__41397 = cljs.core.seq(vec__41396);
var first__41398 = cljs.core.first(seq__41397);
var seq__41397__$1 = cljs.core.next(seq__41397);
var k = first__41398;
var first__41398__$1 = cljs.core.first(seq__41397__$1);
var seq__41397__$2 = cljs.core.next(seq__41397__$1);
var v = first__41398__$1;
var kvs = seq__41397__$2;
var G__41394__$1 = G__41394;
while(true){
var vec__41400 = G__41394__$1;
var seq__41401 = cljs.core.seq(vec__41400);
var first__41402 = cljs.core.first(seq__41401);
var seq__41401__$1 = cljs.core.next(seq__41401);
var k__$1 = first__41402;
var first__41402__$1 = cljs.core.first(seq__41401__$1);
var seq__41401__$2 = cljs.core.next(seq__41401__$1);
var v__$1 = first__41402__$1;
var kvs__$1 = seq__41401__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__41615 = kvs__$1;
G__41394__$1 = G__41615;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq41380){
var G__41381 = cljs.core.first(seq41380);
var seq41380__$1 = cljs.core.next(seq41380);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41381,seq41380__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41617 = arguments.length;
var i__5727__auto___41618 = (0);
while(true){
if((i__5727__auto___41618 < len__5726__auto___41617)){
args__5732__auto__.push((arguments[i__5727__auto___41618]));

var G__41619 = (i__5727__auto___41618 + (1));
i__5727__auto___41618 = G__41619;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq41423){
var G__41424 = cljs.core.first(seq41423);
var seq41423__$1 = cljs.core.next(seq41423);
var G__41425 = cljs.core.first(seq41423__$1);
var seq41423__$2 = cljs.core.next(seq41423__$1);
var G__41426 = cljs.core.first(seq41423__$2);
var seq41423__$3 = cljs.core.next(seq41423__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41424,G__41425,G__41426,seq41423__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41621 = arguments.length;
var i__5727__auto___41622 = (0);
while(true){
if((i__5727__auto___41622 < len__5726__auto___41621)){
args__5732__auto__.push((arguments[i__5727__auto___41622]));

var G__41623 = (i__5727__auto___41622 + (1));
i__5727__auto___41622 = G__41623;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq41431){
var G__41432 = cljs.core.first(seq41431);
var seq41431__$1 = cljs.core.next(seq41431);
var G__41433 = cljs.core.first(seq41431__$1);
var seq41431__$2 = cljs.core.next(seq41431__$1);
var G__41434 = cljs.core.first(seq41431__$2);
var seq41431__$3 = cljs.core.next(seq41431__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41432,G__41433,G__41434,seq41431__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.merge_BANG_ = (function applied_science$js_interop$merge_BANG_(var_args){
var G__41441 = arguments.length;
switch (G__41441) {
case 1:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___41625 = arguments.length;
var i__5727__auto___41626 = (0);
while(true){
if((i__5727__auto___41626 < len__5726__auto___41625)){
args_arr__5751__auto__.push((arguments[i__5727__auto___41626]));

var G__41627 = (i__5727__auto___41626 + (1));
i__5727__auto___41626 = G__41627;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__41442_41628 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__41443_41629 = null;
var count__41444_41630 = (0);
var i__41445_41631 = (0);
while(true){
if((i__41445_41631 < count__41444_41630)){
var k_41632 = chunk__41443_41629.cljs$core$IIndexed$_nth$arity$2(null, i__41445_41631);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41632,applied_science.js_interop.unchecked_get(x,k_41632)], 0));


var G__41633 = seq__41442_41628;
var G__41634 = chunk__41443_41629;
var G__41635 = count__41444_41630;
var G__41636 = (i__41445_41631 + (1));
seq__41442_41628 = G__41633;
chunk__41443_41629 = G__41634;
count__41444_41630 = G__41635;
i__41445_41631 = G__41636;
continue;
} else {
var temp__5823__auto___41637 = cljs.core.seq(seq__41442_41628);
if(temp__5823__auto___41637){
var seq__41442_41638__$1 = temp__5823__auto___41637;
if(cljs.core.chunked_seq_QMARK_(seq__41442_41638__$1)){
var c__5525__auto___41639 = cljs.core.chunk_first(seq__41442_41638__$1);
var G__41640 = cljs.core.chunk_rest(seq__41442_41638__$1);
var G__41641 = c__5525__auto___41639;
var G__41642 = cljs.core.count(c__5525__auto___41639);
var G__41643 = (0);
seq__41442_41628 = G__41640;
chunk__41443_41629 = G__41641;
count__41444_41630 = G__41642;
i__41445_41631 = G__41643;
continue;
} else {
var k_41644 = cljs.core.first(seq__41442_41638__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41644,applied_science.js_interop.unchecked_get(x,k_41644)], 0));


var G__41645 = cljs.core.next(seq__41442_41638__$1);
var G__41646 = null;
var G__41647 = (0);
var G__41648 = (0);
seq__41442_41628 = G__41645;
chunk__41443_41629 = G__41646;
count__41444_41630 = G__41647;
i__41445_41631 = G__41648;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.merge_BANG_,applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.merge_BANG_.cljs$lang$applyTo = (function (seq41438){
var G__41439 = cljs.core.first(seq41438);
var seq41438__$1 = cljs.core.next(seq41438);
var G__41440 = cljs.core.first(seq41438__$1);
var seq41438__$2 = cljs.core.next(seq41438__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41439,G__41440,seq41438__$2);
}));

(applied_science.js_interop.merge_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * alias for merge!
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__41453 = arguments.length;
switch (G__41453) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___41650 = arguments.length;
var i__5727__auto___41651 = (0);
while(true){
if((i__5727__auto___41651 < len__5726__auto___41650)){
args_arr__5751__auto__.push((arguments[i__5727__auto___41651]));

var G__41652 = (i__5727__auto___41651 + (1));
i__5727__auto___41651 = G__41652;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x);
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.merge_BANG_,applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq41450){
var G__41451 = cljs.core.first(seq41450);
var seq41450__$1 = cljs.core.next(seq41450);
var G__41452 = cljs.core.first(seq41450__$1);
var seq41450__$2 = cljs.core.next(seq41450__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41451,G__41452,seq41450__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

applied_science.js_interop.update_keys_BANG_ = (function applied_science$js_interop$update_keys_BANG_(obj,f){

if(cljs.core.truth_(obj)){
var seq__41504_41653 = cljs.core.seq(Object.keys(obj));
var chunk__41506_41654 = null;
var count__41507_41655 = (0);
var i__41508_41656 = (0);
while(true){
if((i__41508_41656 < count__41507_41655)){
var k_41657 = chunk__41506_41654.cljs$core$IIndexed$_nth$arity$2(null, i__41508_41656);
var v_41658 = (obj[k_41657]);
delete obj[k_41657];

(obj[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_41657) : f.call(null, k_41657))] = v_41658);


var G__41659 = seq__41504_41653;
var G__41660 = chunk__41506_41654;
var G__41661 = count__41507_41655;
var G__41662 = (i__41508_41656 + (1));
seq__41504_41653 = G__41659;
chunk__41506_41654 = G__41660;
count__41507_41655 = G__41661;
i__41508_41656 = G__41662;
continue;
} else {
var temp__5823__auto___41663 = cljs.core.seq(seq__41504_41653);
if(temp__5823__auto___41663){
var seq__41504_41664__$1 = temp__5823__auto___41663;
if(cljs.core.chunked_seq_QMARK_(seq__41504_41664__$1)){
var c__5525__auto___41665 = cljs.core.chunk_first(seq__41504_41664__$1);
var G__41666 = cljs.core.chunk_rest(seq__41504_41664__$1);
var G__41667 = c__5525__auto___41665;
var G__41668 = cljs.core.count(c__5525__auto___41665);
var G__41669 = (0);
seq__41504_41653 = G__41666;
chunk__41506_41654 = G__41667;
count__41507_41655 = G__41668;
i__41508_41656 = G__41669;
continue;
} else {
var k_41670 = cljs.core.first(seq__41504_41664__$1);
var v_41672 = (obj[k_41670]);
delete obj[k_41670];

(obj[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_41670) : f.call(null, k_41670))] = v_41672);


var G__41673 = cljs.core.next(seq__41504_41664__$1);
var G__41674 = null;
var G__41675 = (0);
var G__41676 = (0);
seq__41504_41653 = G__41673;
chunk__41506_41654 = G__41674;
count__41507_41655 = G__41675;
i__41508_41656 = G__41676;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return null;
}
});
applied_science.js_interop.update_vals_BANG_ = (function applied_science$js_interop$update_vals_BANG_(obj,f){

if(cljs.core.truth_(obj)){
var seq__41515_41677 = cljs.core.seq(Object.entries(obj));
var chunk__41516_41678 = null;
var count__41517_41679 = (0);
var i__41518_41680 = (0);
while(true){
if((i__41518_41680 < count__41517_41679)){
var entry_41682 = chunk__41516_41678.cljs$core$IIndexed$_nth$arity$2(null, i__41518_41680);
var vec__41527_41683 = entry_41682;
var some_vec__41528_41684 = (!((vec__41527_41683 == null)));
var k_41685 = ((some_vec__41528_41684)?(vec__41527_41683[(0)]):null);
var v_41686 = ((some_vec__41528_41684)?(vec__41527_41683[(1)]):null);
(obj[k_41685] = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_41686) : f.call(null, v_41686)));


var G__41687 = seq__41515_41677;
var G__41688 = chunk__41516_41678;
var G__41689 = count__41517_41679;
var G__41690 = (i__41518_41680 + (1));
seq__41515_41677 = G__41687;
chunk__41516_41678 = G__41688;
count__41517_41679 = G__41689;
i__41518_41680 = G__41690;
continue;
} else {
var temp__5823__auto___41691 = cljs.core.seq(seq__41515_41677);
if(temp__5823__auto___41691){
var seq__41515_41692__$1 = temp__5823__auto___41691;
if(cljs.core.chunked_seq_QMARK_(seq__41515_41692__$1)){
var c__5525__auto___41693 = cljs.core.chunk_first(seq__41515_41692__$1);
var G__41694 = cljs.core.chunk_rest(seq__41515_41692__$1);
var G__41695 = c__5525__auto___41693;
var G__41696 = cljs.core.count(c__5525__auto___41693);
var G__41697 = (0);
seq__41515_41677 = G__41694;
chunk__41516_41678 = G__41695;
count__41517_41679 = G__41696;
i__41518_41680 = G__41697;
continue;
} else {
var entry_41698 = cljs.core.first(seq__41515_41692__$1);
var vec__41531_41699 = entry_41698;
var some_vec__41532_41700 = (!((vec__41531_41699 == null)));
var k_41701 = ((some_vec__41532_41700)?(vec__41531_41699[(0)]):null);
var v_41702 = ((some_vec__41532_41700)?(vec__41531_41699[(1)]):null);
(obj[k_41701] = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_41702) : f.call(null, v_41702)));


var G__41703 = cljs.core.next(seq__41515_41692__$1);
var G__41704 = null;
var G__41705 = (0);
var G__41706 = (0);
seq__41515_41677 = G__41703;
chunk__41516_41678 = G__41704;
count__41517_41679 = G__41705;
i__41518_41680 = G__41706;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
return null;
}
});
/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(var_args){
var G__41536 = arguments.length;
switch (G__41536) {
case 0:
return applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
}));

(applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (array){
return array;
}));

(applied_science.js_interop.push_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (array,x){
var G__41537 = array;
G__41537.push(x);

return G__41537;
}));

(applied_science.js_interop.push_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__41538 = array;
G__41538.unshift(x);

return G__41538;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41708 = arguments.length;
var i__5727__auto___41709 = (0);
while(true){
if((i__5727__auto___41709 < len__5726__auto___41708)){
args__5732__auto__.push((arguments[i__5727__auto___41709]));

var G__41710 = (i__5727__auto___41709 + (1));
i__5727__auto___41709 = G__41710;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj41542 = obj;
if((!((obj41542 == null)))){
return (obj41542[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq41539){
var G__41540 = cljs.core.first(seq41539);
var seq41539__$1 = cljs.core.next(seq41539);
var G__41541 = cljs.core.first(seq41539__$1);
var seq41539__$2 = cljs.core.next(seq41539__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41540,G__41541,seq41539__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj41543 = obj;
if((!((obj41543 == null)))){
return (obj41543[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41713 = arguments.length;
var i__5727__auto___41714 = (0);
while(true){
if((i__5727__auto___41714 < len__5726__auto___41713)){
args__5732__auto__.push((arguments[i__5727__auto___41714]));

var G__41715 = (i__5727__auto___41714 + (1));
i__5727__auto___41714 = G__41715;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq41544){
var G__41545 = cljs.core.first(seq41544);
var seq41544__$1 = cljs.core.next(seq41544);
var G__41546 = cljs.core.first(seq41544__$1);
var seq41544__$2 = cljs.core.next(seq41544__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41545,G__41546,seq41544__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41716 = arguments.length;
var i__5727__auto___41717 = (0);
while(true){
if((i__5727__auto___41717 < len__5726__auto___41716)){
args__5732__auto__.push((arguments[i__5727__auto___41717]));

var G__41718 = (i__5727__auto___41717 + (1));
i__5727__auto___41717 = G__41718;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__41550_41723 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__41551_41724 = null;
var count__41552_41725 = (0);
var i__41553_41726 = (0);
while(true){
if((i__41553_41726 < count__41552_41725)){
var vec__41569_41729 = chunk__41551_41724.cljs$core$IIndexed$_nth$arity$2(null, i__41553_41726);
var k_41730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41569_41729,(0),null);
var v_41731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41569_41729,(1),null);
var obj41573_41732 = obj;
var obj41574_41733 = (((!((obj41573_41732 == null))))?obj41573_41732:({}));
(obj41574_41733[applied_science.js_interop.impl.wrap_key(k_41730)] = v_41731);



var G__41734 = seq__41550_41723;
var G__41735 = chunk__41551_41724;
var G__41736 = count__41552_41725;
var G__41737 = (i__41553_41726 + (1));
seq__41550_41723 = G__41734;
chunk__41551_41724 = G__41735;
count__41552_41725 = G__41736;
i__41553_41726 = G__41737;
continue;
} else {
var temp__5823__auto___41738 = cljs.core.seq(seq__41550_41723);
if(temp__5823__auto___41738){
var seq__41550_41739__$1 = temp__5823__auto___41738;
if(cljs.core.chunked_seq_QMARK_(seq__41550_41739__$1)){
var c__5525__auto___41740 = cljs.core.chunk_first(seq__41550_41739__$1);
var G__41741 = cljs.core.chunk_rest(seq__41550_41739__$1);
var G__41742 = c__5525__auto___41740;
var G__41743 = cljs.core.count(c__5525__auto___41740);
var G__41744 = (0);
seq__41550_41723 = G__41741;
chunk__41551_41724 = G__41742;
count__41552_41725 = G__41743;
i__41553_41726 = G__41744;
continue;
} else {
var vec__41577_41745 = cljs.core.first(seq__41550_41739__$1);
var k_41746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577_41745,(0),null);
var v_41747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41577_41745,(1),null);
var obj41580_41748 = obj;
var obj41581_41749 = (((!((obj41580_41748 == null))))?obj41580_41748:({}));
(obj41581_41749[applied_science.js_interop.impl.wrap_key(k_41746)] = v_41747);



var G__41750 = cljs.core.next(seq__41550_41739__$1);
var G__41751 = null;
var G__41752 = (0);
var G__41753 = (0);
seq__41550_41723 = G__41750;
chunk__41551_41724 = G__41751;
count__41552_41725 = G__41752;
i__41553_41726 = G__41753;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq41547){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41547));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
