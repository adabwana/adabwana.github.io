goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41594 = arguments.length;
var i__5727__auto___41595 = (0);
while(true){
if((i__5727__auto___41595 < len__5726__auto___41594)){
args__5732__auto__.push((arguments[i__5727__auto___41595]));

var G__41596 = (i__5727__auto___41595 + (1));
i__5727__auto___41595 = G__41596;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__41390_41597 = keyvals;
var vec__41393_41598 = G__41390_41597;
var seq__41394_41599 = cljs.core.seq(vec__41393_41598);
var first__41395_41600 = cljs.core.first(seq__41394_41599);
var seq__41394_41601__$1 = cljs.core.next(seq__41394_41599);
var k_41602 = first__41395_41600;
var first__41395_41603__$1 = cljs.core.first(seq__41394_41601__$1);
var seq__41394_41604__$2 = cljs.core.next(seq__41394_41601__$1);
var v_41605 = first__41395_41603__$1;
var keyvals_41606__$1 = seq__41394_41604__$2;
var G__41390_41607__$1 = G__41390_41597;
while(true){
var vec__41398_41608 = G__41390_41607__$1;
var seq__41399_41609 = cljs.core.seq(vec__41398_41608);
var first__41400_41610 = cljs.core.first(seq__41399_41609);
var seq__41399_41611__$1 = cljs.core.next(seq__41399_41609);
var k_41612__$1 = first__41400_41610;
var first__41400_41613__$1 = cljs.core.first(seq__41399_41611__$1);
var seq__41399_41614__$2 = cljs.core.next(seq__41399_41611__$1);
var v_41615__$1 = first__41400_41613__$1;
var keyvals_41616__$2 = seq__41399_41614__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_41612__$1)] = v_41615__$1);

if(keyvals_41616__$2){
var G__41617 = keyvals_41616__$2;
G__41390_41607__$1 = G__41617;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq41370){
var G__41374 = cljs.core.first(seq41370);
var seq41370__$1 = cljs.core.next(seq41370);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41374,seq41370__$1);
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
var G__41405 = arguments.length;
switch (G__41405) {
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
var obj41408 = obj;
if((!((obj41408 == null)))){
return (obj41408[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj41409 = obj;
if((!((obj41409 == null)))){
return (obj41409[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__40538__auto__ = (function (){var obj41410 = obj;
if((!((obj41410 == null)))){
return (obj41410[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__40538__auto__)){
return not_found;
} else {
return val__40538__auto__;
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
var G__41412 = arguments.length;
switch (G__41412) {
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
var obj41416 = self__.obj;
if((!((obj41416 == null)))){
return (obj41416[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__40538__auto__ = (function (){var obj41417 = self__.obj;
if((!((obj41417 == null)))){
return (obj41417[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__40538__auto__)){
return not_found;
} else {
return val__40538__auto__;
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
var len__5726__auto___41632 = arguments.length;
var i__5727__auto___41633 = (0);
while(true){
if((i__5727__auto___41633 < len__5726__auto___41632)){
args__5732__auto__.push((arguments[i__5727__auto___41633]));

var G__41634 = (i__5727__auto___41633 + (1));
i__5727__auto___41633 = G__41634;
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
var G__41474 = keyvals;
var vec__41475 = G__41474;
var seq__41476 = cljs.core.seq(vec__41475);
var first__41477 = cljs.core.first(seq__41476);
var seq__41476__$1 = cljs.core.next(seq__41476);
var k = first__41477;
var first__41477__$1 = cljs.core.first(seq__41476__$1);
var seq__41476__$2 = cljs.core.next(seq__41476__$1);
var v = first__41477__$1;
var kvs = seq__41476__$2;
var G__41474__$1 = G__41474;
while(true){
var vec__41478 = G__41474__$1;
var seq__41479 = cljs.core.seq(vec__41478);
var first__41480 = cljs.core.first(seq__41479);
var seq__41479__$1 = cljs.core.next(seq__41479);
var k__$1 = first__41480;
var first__41480__$1 = cljs.core.first(seq__41479__$1);
var seq__41479__$2 = cljs.core.next(seq__41479__$1);
var v__$1 = first__41480__$1;
var kvs__$1 = seq__41479__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__41635 = kvs__$1;
G__41474__$1 = G__41635;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq41469){
var G__41470 = cljs.core.first(seq41469);
var seq41469__$1 = cljs.core.next(seq41469);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41470,seq41469__$1);
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
var len__5726__auto___41639 = arguments.length;
var i__5727__auto___41640 = (0);
while(true){
if((i__5727__auto___41640 < len__5726__auto___41639)){
args__5732__auto__.push((arguments[i__5727__auto___41640]));

var G__41641 = (i__5727__auto___41640 + (1));
i__5727__auto___41640 = G__41641;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq41481){
var G__41482 = cljs.core.first(seq41481);
var seq41481__$1 = cljs.core.next(seq41481);
var G__41483 = cljs.core.first(seq41481__$1);
var seq41481__$2 = cljs.core.next(seq41481__$1);
var G__41484 = cljs.core.first(seq41481__$2);
var seq41481__$3 = cljs.core.next(seq41481__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41482,G__41483,G__41484,seq41481__$3);
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
var len__5726__auto___41642 = arguments.length;
var i__5727__auto___41643 = (0);
while(true){
if((i__5727__auto___41643 < len__5726__auto___41642)){
args__5732__auto__.push((arguments[i__5727__auto___41643]));

var G__41644 = (i__5727__auto___41643 + (1));
i__5727__auto___41643 = G__41644;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq41485){
var G__41486 = cljs.core.first(seq41485);
var seq41485__$1 = cljs.core.next(seq41485);
var G__41487 = cljs.core.first(seq41485__$1);
var seq41485__$2 = cljs.core.next(seq41485__$1);
var G__41488 = cljs.core.first(seq41485__$2);
var seq41485__$3 = cljs.core.next(seq41485__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41486,G__41487,G__41488,seq41485__$3);
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
var G__41493 = arguments.length;
switch (G__41493) {
case 1:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___41649 = arguments.length;
var i__5727__auto___41650 = (0);
while(true){
if((i__5727__auto___41650 < len__5726__auto___41649)){
args_arr__5751__auto__.push((arguments[i__5727__auto___41650]));

var G__41651 = (i__5727__auto___41650 + (1));
i__5727__auto___41650 = G__41651;
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
var seq__41494_41652 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__41495_41653 = null;
var count__41496_41654 = (0);
var i__41497_41655 = (0);
while(true){
if((i__41497_41655 < count__41496_41654)){
var k_41656 = chunk__41495_41653.cljs$core$IIndexed$_nth$arity$2(null, i__41497_41655);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41656,applied_science.js_interop.unchecked_get(x,k_41656)], 0));


var G__41657 = seq__41494_41652;
var G__41658 = chunk__41495_41653;
var G__41659 = count__41496_41654;
var G__41660 = (i__41497_41655 + (1));
seq__41494_41652 = G__41657;
chunk__41495_41653 = G__41658;
count__41496_41654 = G__41659;
i__41497_41655 = G__41660;
continue;
} else {
var temp__5823__auto___41661 = cljs.core.seq(seq__41494_41652);
if(temp__5823__auto___41661){
var seq__41494_41662__$1 = temp__5823__auto___41661;
if(cljs.core.chunked_seq_QMARK_(seq__41494_41662__$1)){
var c__5525__auto___41663 = cljs.core.chunk_first(seq__41494_41662__$1);
var G__41664 = cljs.core.chunk_rest(seq__41494_41662__$1);
var G__41665 = c__5525__auto___41663;
var G__41666 = cljs.core.count(c__5525__auto___41663);
var G__41667 = (0);
seq__41494_41652 = G__41664;
chunk__41495_41653 = G__41665;
count__41496_41654 = G__41666;
i__41497_41655 = G__41667;
continue;
} else {
var k_41668 = cljs.core.first(seq__41494_41662__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_41668,applied_science.js_interop.unchecked_get(x,k_41668)], 0));


var G__41669 = cljs.core.next(seq__41494_41662__$1);
var G__41670 = null;
var G__41671 = (0);
var G__41672 = (0);
seq__41494_41652 = G__41669;
chunk__41495_41653 = G__41670;
count__41496_41654 = G__41671;
i__41497_41655 = G__41672;
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
(applied_science.js_interop.merge_BANG_.cljs$lang$applyTo = (function (seq41490){
var G__41491 = cljs.core.first(seq41490);
var seq41490__$1 = cljs.core.next(seq41490);
var G__41492 = cljs.core.first(seq41490__$1);
var seq41490__$2 = cljs.core.next(seq41490__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41491,G__41492,seq41490__$2);
}));

(applied_science.js_interop.merge_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * alias for merge!
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__41502 = arguments.length;
switch (G__41502) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___41674 = arguments.length;
var i__5727__auto___41675 = (0);
while(true){
if((i__5727__auto___41675 < len__5726__auto___41674)){
args_arr__5751__auto__.push((arguments[i__5727__auto___41675]));

var G__41676 = (i__5727__auto___41675 + (1));
i__5727__auto___41675 = G__41676;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq41499){
var G__41500 = cljs.core.first(seq41499);
var seq41499__$1 = cljs.core.next(seq41499);
var G__41501 = cljs.core.first(seq41499__$1);
var seq41499__$2 = cljs.core.next(seq41499__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41500,G__41501,seq41499__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

applied_science.js_interop.update_keys_BANG_ = (function applied_science$js_interop$update_keys_BANG_(obj,f){

if(cljs.core.truth_(obj)){
var seq__41503_41677 = cljs.core.seq(Object.keys(obj));
var chunk__41505_41678 = null;
var count__41506_41679 = (0);
var i__41507_41680 = (0);
while(true){
if((i__41507_41680 < count__41506_41679)){
var k_41681 = chunk__41505_41678.cljs$core$IIndexed$_nth$arity$2(null, i__41507_41680);
var v_41682 = (obj[k_41681]);
delete obj[k_41681];

(obj[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_41681) : f.call(null, k_41681))] = v_41682);


var G__41683 = seq__41503_41677;
var G__41684 = chunk__41505_41678;
var G__41685 = count__41506_41679;
var G__41686 = (i__41507_41680 + (1));
seq__41503_41677 = G__41683;
chunk__41505_41678 = G__41684;
count__41506_41679 = G__41685;
i__41507_41680 = G__41686;
continue;
} else {
var temp__5823__auto___41687 = cljs.core.seq(seq__41503_41677);
if(temp__5823__auto___41687){
var seq__41503_41688__$1 = temp__5823__auto___41687;
if(cljs.core.chunked_seq_QMARK_(seq__41503_41688__$1)){
var c__5525__auto___41689 = cljs.core.chunk_first(seq__41503_41688__$1);
var G__41690 = cljs.core.chunk_rest(seq__41503_41688__$1);
var G__41691 = c__5525__auto___41689;
var G__41692 = cljs.core.count(c__5525__auto___41689);
var G__41693 = (0);
seq__41503_41677 = G__41690;
chunk__41505_41678 = G__41691;
count__41506_41679 = G__41692;
i__41507_41680 = G__41693;
continue;
} else {
var k_41694 = cljs.core.first(seq__41503_41688__$1);
var v_41695 = (obj[k_41694]);
delete obj[k_41694];

(obj[(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k_41694) : f.call(null, k_41694))] = v_41695);


var G__41696 = cljs.core.next(seq__41503_41688__$1);
var G__41697 = null;
var G__41698 = (0);
var G__41699 = (0);
seq__41503_41677 = G__41696;
chunk__41505_41678 = G__41697;
count__41506_41679 = G__41698;
i__41507_41680 = G__41699;
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
var seq__41509_41700 = cljs.core.seq(Object.entries(obj));
var chunk__41510_41701 = null;
var count__41511_41702 = (0);
var i__41512_41703 = (0);
while(true){
if((i__41512_41703 < count__41511_41702)){
var entry_41704 = chunk__41510_41701.cljs$core$IIndexed$_nth$arity$2(null, i__41512_41703);
var vec__41524_41705 = entry_41704;
var some_vec__41525_41706 = (!((vec__41524_41705 == null)));
var k_41707 = ((some_vec__41525_41706)?(vec__41524_41705[(0)]):null);
var v_41708 = ((some_vec__41525_41706)?(vec__41524_41705[(1)]):null);
(obj[k_41707] = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_41708) : f.call(null, v_41708)));


var G__41709 = seq__41509_41700;
var G__41710 = chunk__41510_41701;
var G__41711 = count__41511_41702;
var G__41712 = (i__41512_41703 + (1));
seq__41509_41700 = G__41709;
chunk__41510_41701 = G__41710;
count__41511_41702 = G__41711;
i__41512_41703 = G__41712;
continue;
} else {
var temp__5823__auto___41713 = cljs.core.seq(seq__41509_41700);
if(temp__5823__auto___41713){
var seq__41509_41714__$1 = temp__5823__auto___41713;
if(cljs.core.chunked_seq_QMARK_(seq__41509_41714__$1)){
var c__5525__auto___41715 = cljs.core.chunk_first(seq__41509_41714__$1);
var G__41716 = cljs.core.chunk_rest(seq__41509_41714__$1);
var G__41717 = c__5525__auto___41715;
var G__41718 = cljs.core.count(c__5525__auto___41715);
var G__41719 = (0);
seq__41509_41700 = G__41716;
chunk__41510_41701 = G__41717;
count__41511_41702 = G__41718;
i__41512_41703 = G__41719;
continue;
} else {
var entry_41720 = cljs.core.first(seq__41509_41714__$1);
var vec__41529_41721 = entry_41720;
var some_vec__41530_41722 = (!((vec__41529_41721 == null)));
var k_41723 = ((some_vec__41530_41722)?(vec__41529_41721[(0)]):null);
var v_41724 = ((some_vec__41530_41722)?(vec__41529_41721[(1)]):null);
(obj[k_41723] = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v_41724) : f.call(null, v_41724)));


var G__41725 = cljs.core.next(seq__41509_41714__$1);
var G__41726 = null;
var G__41727 = (0);
var G__41728 = (0);
seq__41509_41700 = G__41725;
chunk__41510_41701 = G__41726;
count__41511_41702 = G__41727;
i__41512_41703 = G__41728;
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
var G__41534 = arguments.length;
switch (G__41534) {
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
var G__41535 = array;
G__41535.push(x);

return G__41535;
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
var G__41536 = array;
G__41536.unshift(x);

return G__41536;
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
var len__5726__auto___41731 = arguments.length;
var i__5727__auto___41732 = (0);
while(true){
if((i__5727__auto___41732 < len__5726__auto___41731)){
args__5732__auto__.push((arguments[i__5727__auto___41732]));

var G__41733 = (i__5727__auto___41732 + (1));
i__5727__auto___41732 = G__41733;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj41541 = obj;
if((!((obj41541 == null)))){
return (obj41541[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq41537){
var G__41538 = cljs.core.first(seq41537);
var seq41537__$1 = cljs.core.next(seq41537);
var G__41539 = cljs.core.first(seq41537__$1);
var seq41537__$2 = cljs.core.next(seq41537__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41538,G__41539,seq41537__$2);
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
var len__5726__auto___41734 = arguments.length;
var i__5727__auto___41735 = (0);
while(true){
if((i__5727__auto___41735 < len__5726__auto___41734)){
args__5732__auto__.push((arguments[i__5727__auto___41735]));

var G__41736 = (i__5727__auto___41735 + (1));
i__5727__auto___41735 = G__41736;
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
var len__5726__auto___41737 = arguments.length;
var i__5727__auto___41738 = (0);
while(true){
if((i__5727__auto___41738 < len__5726__auto___41737)){
args__5732__auto__.push((arguments[i__5727__auto___41738]));

var G__41739 = (i__5727__auto___41738 + (1));
i__5727__auto___41738 = G__41739;
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
var seq__41556_41740 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__41557_41741 = null;
var count__41558_41742 = (0);
var i__41559_41743 = (0);
while(true){
if((i__41559_41743 < count__41558_41742)){
var vec__41576_41744 = chunk__41557_41741.cljs$core$IIndexed$_nth$arity$2(null, i__41559_41743);
var k_41745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41576_41744,(0),null);
var v_41746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41576_41744,(1),null);
var obj41579_41747 = obj;
var obj41580_41748 = (((!((obj41579_41747 == null))))?obj41579_41747:({}));
(obj41580_41748[applied_science.js_interop.impl.wrap_key(k_41745)] = v_41746);



var G__41749 = seq__41556_41740;
var G__41750 = chunk__41557_41741;
var G__41751 = count__41558_41742;
var G__41752 = (i__41559_41743 + (1));
seq__41556_41740 = G__41749;
chunk__41557_41741 = G__41750;
count__41558_41742 = G__41751;
i__41559_41743 = G__41752;
continue;
} else {
var temp__5823__auto___41753 = cljs.core.seq(seq__41556_41740);
if(temp__5823__auto___41753){
var seq__41556_41754__$1 = temp__5823__auto___41753;
if(cljs.core.chunked_seq_QMARK_(seq__41556_41754__$1)){
var c__5525__auto___41755 = cljs.core.chunk_first(seq__41556_41754__$1);
var G__41756 = cljs.core.chunk_rest(seq__41556_41754__$1);
var G__41757 = c__5525__auto___41755;
var G__41758 = cljs.core.count(c__5525__auto___41755);
var G__41759 = (0);
seq__41556_41740 = G__41756;
chunk__41557_41741 = G__41757;
count__41558_41742 = G__41758;
i__41559_41743 = G__41759;
continue;
} else {
var vec__41583_41760 = cljs.core.first(seq__41556_41754__$1);
var k_41761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41583_41760,(0),null);
var v_41762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41583_41760,(1),null);
var obj41586_41763 = obj;
var obj41591_41764 = (((!((obj41586_41763 == null))))?obj41586_41763:({}));
(obj41591_41764[applied_science.js_interop.impl.wrap_key(k_41761)] = v_41762);



var G__41765 = cljs.core.next(seq__41556_41754__$1);
var G__41766 = null;
var G__41767 = (0);
var G__41768 = (0);
seq__41556_41740 = G__41765;
chunk__41557_41741 = G__41766;
count__41558_41742 = G__41767;
i__41559_41743 = G__41768;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq41551){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41551));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
